/* Lens Camera — a browser camera that reads the phone's real lens and zoom capabilities.
 *
 * Photo + video, front/back, native optical/hybrid zoom where the browser exposes it
 * (falls back to digital zoom), flash (torch / fill-light / front screen flash),
 * tap to focus + exposure, self timer, grid, pause/resume recording, snapshot while
 * recording, and an on-device gallery stored in IndexedDB.
 */
(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const app = $('app');
  const video = $('video');
  const stage = $('stage');
  const viewfinder = $('viewfinder');
  const workCanvas = $('workCanvas');

  // ---------------------------------------------------------------- settings
  const SETTINGS_KEY = 'lens-camera-settings';
  const prefs = Object.assign(
    { photoQ: 'max', videoRes: '1080', fps: '30', mirror: true, sound: true, audio: true, grid: false, timer: 0 },
    readJSON(SETTINGS_KEY)
  );
  function readJSON(k) { try { return JSON.parse(localStorage.getItem(k)) || {}; } catch { return {}; } }
  function savePrefs() { try { localStorage.setItem(SETTINGS_KEY, JSON.stringify(prefs)); } catch { /* private mode */ } }

  // ---------------------------------------------------------------- state
  const state = {
    mode: 'photo',             // 'photo' | 'video'
    facing: 'environment',     // 'environment' | 'user'
    deviceId: null,            // explicit lens choice, or null = let facingMode pick
    mainBackId: null,          // the default back lens, to come back to from ultra-wide
    devices: [],
    stream: null,
    track: null,
    caps: {},
    imageCapture: null,
    photoCaps: null,
    nativeZoom: false,
    zoomMin: 1,
    zoomMax: 8,
    zoom: 1,
    flash: 'off',              // photo: 'off' | 'auto' | 'on'
    torch: false,              // video torch
    audioStream: null,
    recorder: null,
    recording: false,
    paused: false,
    recElapsed: 0,
    recStartedAt: 0,
    recTimer: null,
    canvasLoop: null,
    busy: false,
    starting: null,
  };

  const isFront = () => state.facing === 'user';
  const digitalZoom = () => (state.nativeZoom ? 1 : state.zoom);

  // ---------------------------------------------------------------- toast
  let toastTimer;
  function toast(msg, ms = 2200) {
    const t = $('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), ms);
  }

  // ---------------------------------------------------------------- camera start/stop
  function stopStream() {
    if (state.stream) state.stream.getTracks().forEach((t) => t.stop());
    state.stream = null;
    state.track = null;
    state.imageCapture = null;
    state.photoCaps = null;
  }

  function videoConstraints() {
    const v = {};
    if (state.deviceId) v.deviceId = { exact: state.deviceId };
    else v.facingMode = { ideal: state.facing };
    if (state.mode === 'photo') {
      v.width = { ideal: 1920 };
      v.height = { ideal: 1440 };
      v.aspectRatio = { ideal: 4 / 3 };
    } else {
      const h = Number(prefs.videoRes);
      v.width = { ideal: Math.round((h * 16) / 9) };
      v.height = { ideal: h };
      v.aspectRatio = { ideal: 16 / 9 };
      v.frameRate = { ideal: Number(prefs.fps) };
    }
    return v;
  }

  function startCamera() {
    // serialise starts so rapid taps on flip / mode don't race each other
    const run = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        const insecure = !window.isSecureContext;
        showError('Camera not available',
          insecure ? 'The camera only works over HTTPS (or localhost). Open this page with an https:// address.'
                   : 'This browser does not support camera access.');
        return;
      }
      stopStream();
      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints(), audio: false });
      } catch (err) {
        if (err.name === 'OverconstrainedError' || err.name === 'NotReadableError') {
          // retry with the bare minimum; some Samsung lenses reject resolution hints
          try {
            const v = state.deviceId ? { deviceId: { exact: state.deviceId } } : { facingMode: state.facing };
            stream = await navigator.mediaDevices.getUserMedia({ video: v, audio: false });
          } catch (err2) { return handleCamError(err2); }
        } else {
          return handleCamError(err);
        }
      }
      hideError();
      state.stream = stream;
      state.track = stream.getVideoTracks()[0];
      state.caps = (state.track.getCapabilities && state.track.getCapabilities()) || {};
      const s = state.track.getSettings ? state.track.getSettings() : {};

      if (s.facingMode === 'user' || s.facingMode === 'environment') state.facing = s.facingMode;
      if (state.facing === 'environment' && !state.deviceId && s.deviceId) state.mainBackId = s.deviceId;

      video.srcObject = stream;
      try { await video.play(); } catch { /* autoplay will kick in */ }

      await refreshDevices();
      setupZoom();
      setupImageCapture();
      if (state.torch && state.mode === 'video') setTorch(true);
      updateFlashUI();
      updateLensUI();
      updatePreviewTransform();
      layout();
      if (state.mode === 'video' && prefs.audio) ensureAudio();
      state.track.addEventListener('ended', () => { if (!document.hidden) toast('Camera disconnected'); });
    };
    state.starting = (state.starting || Promise.resolve()).then(run, run);
    return state.starting;
  }

  function handleCamError(err) {
    console.error(err);
    const map = {
      NotAllowedError: ['Camera permission needed', 'Allow camera access for this site in your browser settings, then tap Try again.'],
      SecurityError: ['Camera blocked', 'Your browser blocked camera access on this page.'],
      NotFoundError: ['No camera found', 'This device does not seem to have a camera the browser can use.'],
      NotReadableError: ['Camera busy', 'Another app is using the camera. Close it and tap Try again.'],
    };
    const [t, m] = map[err.name] || ['Camera unavailable', err.message || String(err)];
    showError(t, m);
  }
  function showError(title, msg) { $('errTitle').textContent = title; $('errMsg').textContent = msg; $('errorScreen').classList.remove('hidden'); }
  function hideError() { $('errorScreen').classList.add('hidden'); }

  async function refreshDevices() {
    try {
      const list = await navigator.mediaDevices.enumerateDevices();
      state.devices = list.filter((d) => d.kind === 'videoinput').map((d, i) => ({
        deviceId: d.deviceId,
        label: d.label || `Camera ${i + 1}`,
        facing: guessFacing(d.label),
      }));
    } catch { state.devices = []; }
  }
  function guessFacing(label = '') {
    if (/front|user|selfie|facetime/i.test(label)) return 'user';
    if (/back|rear|environment|world/i.test(label)) return 'environment';
    return 'unknown';
  }
  const currentDeviceId = () => (state.track && state.track.getSettings && state.track.getSettings().deviceId) || state.deviceId;
  const ultraWideDevice = () => state.devices.find((d) => d.facing === 'environment' && /ultra/i.test(d.label));
  const onUltraWide = () => { const u = ultraWideDevice(); return !!u && currentDeviceId() === u.deviceId; };

  // ---------------------------------------------------------------- layout
  function layout() {
    const r = stage.getBoundingClientRect();
    let ar = video.videoWidth && video.videoHeight ? video.videoWidth / video.videoHeight : 0;
    if (!ar) {
      const portrait = r.height > r.width;
      const base = state.mode === 'photo' ? 4 / 3 : 16 / 9;
      ar = portrait ? 1 / base : base;
    }
    let w = r.width;
    let h = w / ar;
    if (h > r.height) { h = r.height; w = h * ar; }
    viewfinder.style.width = `${Math.floor(w)}px`;
    viewfinder.style.height = `${Math.floor(h)}px`;
  }
  window.addEventListener('resize', layout);
  video.addEventListener('loadedmetadata', layout);
  video.addEventListener('resize', layout);

  function updatePreviewTransform() {
    const z = digitalZoom();
    const sx = isFront() ? -z : z;
    video.style.transform = `scale(${sx}, ${z})`;
  }

  // ---------------------------------------------------------------- zoom
  function setupZoom() {
    const zc = state.caps.zoom;
    if (zc && typeof zc.max === 'number' && zc.max > zc.min) {
      state.nativeZoom = true;
      state.zoomMin = zc.min;
      state.zoomMax = zc.max;
      const start = 1 >= zc.min && 1 <= zc.max ? 1 : zc.min;
      state.zoom = start;
      applyZoom(start, true);
    } else {
      state.nativeZoom = false;
      state.zoomMin = 1;
      state.zoomMax = 8;
      state.zoom = 1;
    }
    buildZoomPills();
    updateZoomUI();
  }

  // Phone-camera style preset stops, filtered to what this lens can actually do.
  function zoomPresets() {
    const { zoomMin: min, zoomMax: max } = state;
    const stops = [];
    if (min < 0.99) stops.push(min);
    [1, 2, 3, 5, 10, 30, 100].forEach((v) => { if (v >= min && v <= max + 0.001) stops.push(v); });
    if (!state.nativeZoom) return [1, 2, 4, 8];
    // keep it to at most 5 pills: always the widest, 1x, and the longest reach
    while (stops.length > 5) stops.splice(stops.length - 2, 1);
    if (max > stops[stops.length - 1] * 1.25 && stops.length < 5) stops.push(Math.floor(max));
    return stops;
  }

  // Display multiplier: on the ultra-wide lens 1.0 of the lens is ~0.5x of the main camera.
  const zoomFactor = () => (onUltraWide() ? 0.5 : 1);

  function buildZoomPills() {
    const box = $('zoomPills');
    box.innerHTML = '';
    const pills = [];
    const ultra = ultraWideDevice();
    const back = !isFront();
    if (back && ultra && onUltraWide()) {
      pills.push({ label: 0.5, value: state.zoomMin, lens: null });
      pills.push({ label: 1, lens: state.mainBackId || 'main' });
    } else {
      if (back && ultra && state.zoomMin >= 0.99) pills.push({ label: 0.5, lens: ultra.deviceId });
      zoomPresets().forEach((v) => pills.push({ label: v, value: v }));
    }
    pills.forEach((p) => {
      const b = document.createElement('button');
      b.dataset.label = p.label;
      b.textContent = fmtZoom(p.label, false);
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        if (p.lens) {
          state.deviceId = p.lens === 'main' ? null : p.lens;
          if (p.lens === 'main') state.facing = 'environment';
          startCamera();
        } else {
          animateZoomTo(p.value);
        }
      });
      box.appendChild(b);
      p.el = b;
    });
    box._pills = pills;
    $('zoomWrap').classList.toggle('hidden', pills.length <= 1 && state.zoomMax <= 1);
    const range = $('zoomRange');
    range.min = 0; range.max = 1000; range.step = 1;
  }

  function fmtZoom(v, withX) {
    const r = v >= 10 ? Math.round(v) : Math.round(v * 10) / 10;
    let s = String(r);
    if (r < 1) s = s.replace(/^0/, '');
    return withX ? `${s}x` : (Number.isInteger(r) ? `${s}${r === 1 ? 'x' : ''}` : s);
  }

  function updateZoomUI() {
    const shown = state.zoom * zoomFactor();
    const pills = $('zoomPills')._pills || [];
    // active pill = the largest preset at or below current zoom
    let active = null;
    pills.forEach((p) => {
      if (p.lens && p.label !== 0.5 && onUltraWide()) return;
      if (p.label <= shown + 0.001 && (!active || p.label > active.label)) active = p;
    });
    if (onUltraWide()) active = pills[0];
    pills.forEach((p) => {
      const on = p === active;
      p.el.classList.toggle('active', on);
      p.el.textContent = on ? fmtZoom(shown, true) : fmtZoom(p.label, false);
    });
    const { zoomMin: min, zoomMax: max } = state;
    $('zoomRange').value = Math.round((Math.log(state.zoom / min) / Math.log(max / min)) * 1000) || 0;
  }

  let zoomBusy = false;
  let zoomWanted = null;
  function applyZoom(z, silent) {
    z = Math.min(state.zoomMax, Math.max(state.zoomMin, z));
    state.zoom = z;
    if (!silent) { updateZoomUI(); flashZoomSlider(); }
    if (!state.nativeZoom) { updatePreviewTransform(); return; }
    zoomWanted = z;
    if (zoomBusy || !state.track) return;
    zoomBusy = true;
    (async () => {
      while (zoomWanted !== null) {
        const v = zoomWanted;
        zoomWanted = null;
        try { await state.track.applyConstraints({ advanced: [{ zoom: v }] }); } catch { /* lens switch in progress */ }
      }
      zoomBusy = false;
    })();
  }

  let zoomAnim;
  function animateZoomTo(target) {
    cancelAnimationFrame(zoomAnim);
    const from = state.zoom;
    const t0 = performance.now();
    const dur = 220;
    const step = (t) => {
      const k = Math.min(1, (t - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      applyZoom(from * Math.pow(target / from, e));
      if (k < 1) zoomAnim = requestAnimationFrame(step);
    };
    zoomAnim = requestAnimationFrame(step);
  }

  let sliderTimer;
  function flashZoomSlider() {
    const s = $('zoomSlider');
    s.classList.add('show');
    clearTimeout(sliderTimer);
    sliderTimer = setTimeout(() => s.classList.remove('show'), 2200);
  }
  $('zoomRange').addEventListener('input', (e) => {
    const { zoomMin: min, zoomMax: max } = state;
    applyZoom(min * Math.pow(max / min, Number(e.target.value) / 1000));
  });

  // ---------------------------------------------------------------- gestures: pinch, tap-to-focus, swipe modes
  const pointers = new Map();
  let pinch = null;
  let tap = null;
  stage.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.zoom-wrap, .exposure')) return;
    stage.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size === 1) tap = { x: e.clientX, y: e.clientY, t: performance.now(), moved: false };
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), z: state.zoom };
      tap = null;
    }
  });
  stage.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pinch && pointers.size >= 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      cancelAnimationFrame(zoomAnim);
      applyZoom(pinch.z * (d / pinch.d));
    } else if (tap && Math.hypot(e.clientX - tap.x, e.clientY - tap.y) > 12) {
      tap.moved = true;
    }
  });
  const endPointer = (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (tap && pointers.size === 0) {
      const dx = e.clientX - tap.x;
      const dy = e.clientY - tap.y;
      if (!tap.moved) focusAt(e.clientX, e.clientY);
      else if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5 && !state.recording) {
        setMode(dx < 0 ? 'video' : 'photo');
      }
      tap = null;
    }
  };
  stage.addEventListener('pointerup', endPointer);
  stage.addEventListener('pointercancel', endPointer);

  // mouse wheel zoom for desktop testing
  stage.addEventListener('wheel', (e) => { e.preventDefault(); applyZoom(state.zoom * (e.deltaY < 0 ? 1.08 : 1 / 1.08)); }, { passive: false });

  let focusTimer;
  let focusResetTimer;
  async function focusAt(cx, cy) {
    const r = viewfinder.getBoundingClientRect();
    if (cx < r.left || cx > r.right || cy < r.top || cy > r.bottom) return;
    const ring = $('focusRing');
    const px = cx - r.left;
    const py = cy - r.top;
    ring.style.left = `${px}px`;
    ring.style.top = `${py}px`;
    ring.classList.remove('show');
    void ring.offsetWidth;
    ring.classList.add('show');

    const exp = $('exposure');
    const ec = state.caps.exposureCompensation;
    if (ec && ec.max > ec.min) {
      const range = $('exposureRange');
      range.min = ec.min; range.max = ec.max; range.step = ec.step || 0.1;
      if (!range.dataset.touched) range.value = 0;
      exp.style.left = `${Math.min(px, r.width - 170)}px`;
      exp.style.top = `${py}px`;
      exp.classList.add('show');
    }
    clearTimeout(focusTimer);
    focusTimer = setTimeout(() => { ring.classList.remove('show'); exp.classList.remove('show'); }, 3000);

    // map screen point -> normalised sensor point (undo mirroring and digital zoom)
    let x = px / r.width;
    let y = py / r.height;
    if (isFront()) x = 1 - x;
    const z = digitalZoom();
    x = 0.5 + (x - 0.5) / z;
    y = 0.5 + (y - 0.5) / z;

    const supported = navigator.mediaDevices.getSupportedConstraints ? navigator.mediaDevices.getSupportedConstraints() : {};
    const fm = state.caps.focusMode || [];
    const adv = {};
    if (supported.pointsOfInterest) adv.pointsOfInterest = [{ x, y }];
    if (fm.includes('single-shot')) adv.focusMode = 'single-shot';
    else if (fm.includes('continuous')) adv.focusMode = 'continuous';
    if (!Object.keys(adv).length || !state.track) return;
    try { await state.track.applyConstraints({ advanced: [adv] }); } catch { /* not supported on this lens */ }
    clearTimeout(focusResetTimer);
    if (fm.includes('continuous') && adv.focusMode === 'single-shot') {
      focusResetTimer = setTimeout(() => {
        if (state.track) state.track.applyConstraints({ advanced: [{ focusMode: 'continuous' }] }).catch(() => {});
      }, 6000);
    }
  }
  $('exposureRange').addEventListener('input', (e) => {
    e.target.dataset.touched = '1';
    clearTimeout(focusTimer);
    focusTimer = setTimeout(() => { $('focusRing').classList.remove('show'); $('exposure').classList.remove('show'); }, 3000);
    const em = state.caps.exposureMode || [];
    const adv = { exposureCompensation: Number(e.target.value) };
    if (em.includes('continuous')) adv.exposureMode = 'continuous';
    state.track && state.track.applyConstraints({ advanced: [adv] }).catch(() => {});
  });

  // ---------------------------------------------------------------- ImageCapture / flash
  function setupImageCapture() {
    state.imageCapture = null;
    state.photoCaps = null;
    if (!('ImageCapture' in window) || !state.track) return;
    try {
      const ic = new ImageCapture(state.track);
      state.imageCapture = ic;
      const track = state.track;
      ic.getPhotoCapabilities().then((pc) => {
        if (state.track === track) { state.photoCaps = pc; updateFlashUI(); }
      }).catch(() => {});
    } catch { state.imageCapture = null; }
  }

  const canTorch = () => state.caps.torch === true || (Array.isArray(state.caps.torch) && state.caps.torch.includes(true));
  const canFillFlash = () => !!(state.photoCaps && (state.photoCaps.fillLightMode || []).includes('flash'));
  const hasFlash = () => (isFront() ? state.mode === 'photo' : canTorch() || canFillFlash());

  async function setTorch(on) {
    if (!state.track || !canTorch()) return false;
    try { await state.track.applyConstraints({ advanced: [{ torch: on }] }); return true; } catch { return false; }
  }

  function updateFlashUI() {
    const btn = $('btnFlash');
    const badge = $('flashBadge');
    const available = hasFlash();
    btn.classList.toggle('disabled', !available);
    let label = 'OFF';
    let on = false;
    if (state.mode === 'video') { label = state.torch ? 'ON' : 'OFF'; on = state.torch; }
    else { label = state.flash.toUpperCase(); on = state.flash !== 'off'; }
    if (!available) { label = 'N/A'; on = false; }
    badge.textContent = label;
    btn.classList.toggle('on', on);
    $('flashPath').setAttribute('d', on ? 'M7 2v11h3v9l7-12h-4l4-8z'
      : 'M3.27 3 2 4.27l5 5V13h3v9l3.58-6.14L17.73 20 19 18.73 3.27 3ZM17 10h-4l4-8H7v2.18l8.46 8.46L17 10Z');
  }

  $('btnFlash').addEventListener('click', async () => {
    if (!hasFlash()) {
      toast(isFront() ? 'Front flash is for photos only' : 'This lens has no flash the browser can control');
      return;
    }
    if (state.mode === 'video') {
      state.torch = !state.torch;
      const ok = await setTorch(state.torch);
      if (!ok) { state.torch = false; toast('Could not turn on the torch'); }
    } else {
      const order = isFront() ? ['off', 'on'] : ['off', 'auto', 'on'];
      state.flash = order[(order.indexOf(state.flash) + 1) % order.length] || 'off';
      toast(`Flash ${state.flash}`, 900);
    }
    updateFlashUI();
  });

  // rough scene brightness 0..255 from a tiny sample of the preview
  function sceneBrightness() {
    try {
      const c = document.createElement('canvas');
      c.width = 32; c.height = 32;
      const g = c.getContext('2d', { willReadFrequently: true });
      g.drawImage(video, 0, 0, 32, 32);
      const d = g.getImageData(0, 0, 32, 32).data;
      let sum = 0;
      for (let i = 0; i < d.length; i += 4) sum += 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      return sum / (d.length / 4);
    } catch { return 128; }
  }

  // ---------------------------------------------------------------- photo capture
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

  async function countdown(sec) {
    const el = $('countdown');
    for (let i = sec; i > 0; i--) {
      el.textContent = i;
      beep(880, 0.05);
      await sleep(1000);
    }
    el.textContent = '';
  }

  function grabFrame(mirror) {
    const vw = video.videoWidth;
    const vh = video.videoHeight;
    if (!vw || !vh) return null;
    const z = digitalZoom();
    const sw = vw / z;
    const sh = vh / z;
    const sx = (vw - sw) / 2;
    const sy = (vh - sh) / 2;
    workCanvas.width = Math.round(sw);
    workCanvas.height = Math.round(sh);
    const g = workCanvas.getContext('2d');
    g.save();
    if (mirror) { g.translate(workCanvas.width, 0); g.scale(-1, 1); }
    g.drawImage(video, sx, sy, sw, sh, 0, 0, workCanvas.width, workCanvas.height);
    g.restore();
    return new Promise((res) => workCanvas.toBlob(res, 'image/jpeg', 0.95));
  }

  async function mirrorBlob(blob) {
    const bmp = await createImageBitmap(blob);
    workCanvas.width = bmp.width;
    workCanvas.height = bmp.height;
    const g = workCanvas.getContext('2d');
    g.save();
    g.translate(bmp.width, 0);
    g.scale(-1, 1);
    g.drawImage(bmp, 0, 0);
    g.restore();
    bmp.close && bmp.close();
    return new Promise((res) => workCanvas.toBlob(res, 'image/jpeg', 0.95));
  }

  async function capturePhoto({ quick = false } = {}) {
    if (state.busy || !state.track) return;
    state.busy = true;
    $('btnShutter').classList.add('busy');
    let screenLight = null;
    let usedTorch = false;
    try {
      if (!quick && prefs.timer) await countdown(prefs.timer);

      let useFlash = !quick && state.flash !== 'off' && hasFlash();
      if (useFlash && state.flash === 'auto') useFlash = sceneBrightness() < 70;

      if (useFlash && isFront()) {
        screenLight = document.createElement('div');
        screenLight.className = 'screen-light';
        document.body.appendChild(screenLight);
        await sleep(450);
      } else if (useFlash && !canFillFlash() && canTorch()) {
        usedTorch = await setTorch(true);
        if (usedTorch) await sleep(900); // let auto-exposure settle under the torch
      }

      const mirror = isFront() && prefs.mirror;
      let blob = null;
      const fullRes = prefs.photoQ === 'max' && state.imageCapture && !quick && digitalZoom() === 1;
      if (fullRes) {
        try {
          const opts = {};
          if (useFlash && !isFront() && canFillFlash()) opts.fillLightMode = 'flash';
          else if (!usedTorch && state.photoCaps && (state.photoCaps.fillLightMode || []).includes('off')) opts.fillLightMode = 'off';
          blob = await withTimeout(state.imageCapture.takePhoto(opts), 8000);
          if (blob && mirror) blob = await mirrorBlob(blob);
        } catch (err) {
          console.warn('takePhoto failed, using preview frame', err);
          blob = null;
        }
      }
      if (!blob) blob = await grabFrame(mirror);
      if (!blob) throw new Error('No frame from camera yet');

      shutterFx();
      await saveMedia(blob, 'photo');
    } catch (err) {
      console.error(err);
      toast('Could not take photo');
    } finally {
      if (screenLight) screenLight.remove();
      if (usedTorch && !(state.mode === 'video' && state.torch)) setTorch(false);
      state.busy = false;
      $('btnShutter').classList.remove('busy');
    }
  }

  function shutterFx() {
    const f = $('shutterFlash');
    f.classList.remove('go');
    void f.offsetWidth;
    f.classList.add('go');
    if (prefs.sound) shutterSound();
    if (navigator.vibrate) navigator.vibrate(15);
  }

  let audioCtx;
  function ctx() { if (!audioCtx) { try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; } } return audioCtx; }
  function shutterSound() {
    const c = ctx();
    if (!c) return;
    const len = Math.floor(c.sampleRate * 0.08);
    const buf = c.createBuffer(1, len, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3);
    const src = c.createBufferSource();
    const g = c.createGain();
    g.gain.value = 0.35;
    src.buffer = buf;
    src.connect(g).connect(c.destination);
    src.start();
  }
  function beep(freq, dur) {
    if (!prefs.sound) return;
    const c = ctx();
    if (!c) return;
    const o = c.createOscillator();
    const g = c.createGain();
    o.frequency.value = freq;
    g.gain.value = 0.08;
    o.connect(g).connect(c.destination);
    o.start();
    o.stop(c.currentTime + dur);
  }

  // ---------------------------------------------------------------- video recording
  async function ensureAudio() {
    if (state.audioStream && state.audioStream.getAudioTracks().some((t) => t.readyState === 'live')) return state.audioStream;
    try {
      state.audioStream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    } catch (err) {
      console.warn('no microphone', err);
      state.audioStream = null;
    }
    return state.audioStream;
  }

  function pickMime() {
    if (!('MediaRecorder' in window)) return null;
    const list = [
      'video/mp4;codecs=avc1.640028,mp4a.40.2',
      'video/mp4;codecs=avc1,mp4a',
      'video/mp4',
      'video/webm;codecs=vp9,opus',
      'video/webm;codecs=vp8,opus',
      'video/webm',
    ];
    return list.find((m) => MediaRecorder.isTypeSupported(m)) || '';
  }

  // Without native zoom we record through a canvas so digital zoom ends up in the file.
  function canvasVideoTrack() {
    const c = document.createElement('canvas');
    c.width = video.videoWidth;
    c.height = video.videoHeight;
    const g = c.getContext('2d');
    const draw = () => {
      const vw = video.videoWidth;
      const vh = video.videoHeight;
      const z = digitalZoom();
      const sw = vw / z;
      const sh = vh / z;
      g.drawImage(video, (vw - sw) / 2, (vh - sh) / 2, sw, sh, 0, 0, c.width, c.height);
      state.canvasLoop = requestAnimationFrame(draw);
    };
    draw();
    const stream = c.captureStream(Number(prefs.fps));
    return stream.getVideoTracks()[0];
  }

  async function startRecording() {
    if (state.recording || !state.track) return;
    const mime = pickMime();
    if (mime === null) { toast('Video recording is not supported in this browser'); return; }
    const tracks = [];
    if (state.nativeZoom) tracks.push(state.track);
    else tracks.push(canvasVideoTrack());
    if (prefs.audio) {
      const a = await ensureAudio();
      if (a) tracks.push(...a.getAudioTracks());
      else toast('Recording without sound (microphone blocked)');
    }
    const h = Number(prefs.videoRes);
    const bitrate = (h >= 2160 ? 35e6 : h >= 1080 ? 12e6 : 6e6) * (Number(prefs.fps) > 30 ? 1.5 : 1);
    let rec;
    try {
      rec = new MediaRecorder(new MediaStream(tracks), { mimeType: mime || undefined, videoBitsPerSecond: bitrate, audioBitsPerSecond: 128000 });
    } catch {
      rec = new MediaRecorder(new MediaStream(tracks));
    }
    const chunks = [];
    rec.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
    rec.onstop = async () => {
      cancelAnimationFrame(state.canvasLoop);
      if (!state.nativeZoom) tracks[0].stop();
      const type = rec.mimeType || mime || 'video/webm';
      const blob = new Blob(chunks, { type });
      if (blob.size) await saveMedia(blob, 'video');
    };
    rec.start(1000);
    state.recorder = rec;
    state.recording = true;
    state.paused = false;
    state.recElapsed = 0;
    state.recStartedAt = performance.now();
    app.classList.add('mode-recording');
    $('recPill').classList.add('show');
    $('recPill').classList.remove('paused');
    $('btnPause').classList.remove('hidden');
    $('btnSnap').classList.remove('hidden');
    setPauseIcon();
    tickRec();
    state.recTimer = setInterval(tickRec, 250);
    if (navigator.vibrate) navigator.vibrate(30);
  }

  function stopRecording() {
    if (!state.recording) return;
    state.recording = false;
    try { state.recorder.stop(); } catch { /* already stopped */ }
    clearInterval(state.recTimer);
    app.classList.remove('mode-recording');
    $('recPill').classList.remove('show');
    $('btnPause').classList.add('hidden');
    $('btnSnap').classList.add('hidden');
    if (navigator.vibrate) navigator.vibrate(30);
  }

  function togglePause() {
    const r = state.recorder;
    if (!state.recording || !r) return;
    if (state.paused) {
      r.resume();
      state.recStartedAt = performance.now();
      state.paused = false;
    } else {
      r.pause();
      state.recElapsed += performance.now() - state.recStartedAt;
      state.paused = true;
    }
    $('recPill').classList.toggle('paused', state.paused);
    setPauseIcon();
  }
  function setPauseIcon() {
    $('pausePath').setAttribute('d', state.paused ? 'M8 5v14l11-7z' : 'M6 5h4v14H6zM14 5h4v14h-4z');
  }
  function tickRec() {
    const ms = state.recElapsed + (state.paused ? 0 : performance.now() - state.recStartedAt);
    const s = Math.floor(ms / 1000);
    const hh = Math.floor(s / 3600);
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    $('recTime').textContent = hh ? `${hh}:${mm}:${ss}` : `${mm}:${ss}`;
  }

  // ---------------------------------------------------------------- gallery (IndexedDB)
  let dbp;
  function db() {
    if (!dbp) {
      dbp = new Promise((res, rej) => {
        const req = indexedDB.open('lens-camera', 1);
        req.onupgradeneeded = () => req.result.createObjectStore('media', { keyPath: 'id', autoIncrement: true });
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
      });
    }
    return dbp;
  }
  async function dbTx(mode, fn) {
    const d = await db();
    return new Promise((res, rej) => {
      const tx = d.transaction('media', mode);
      const out = fn(tx.objectStore('media'));
      tx.oncomplete = () => res(out && 'result' in out ? out.result : undefined);
      tx.onerror = () => rej(tx.error);
    });
  }
  const allMedia = async () => ((await dbTx('readonly', (s) => s.getAll())) || []).sort((a, b) => b.created - a.created);

  async function saveMedia(blob, kind) {
    const item = { kind, blob, type: blob.type, created: Date.now(), size: blob.size };
    try {
      await dbTx('readwrite', (s) => s.add(item));
    } catch (err) {
      console.error(err);
      toast('Storage full — saving to downloads instead');
      download(item);
    }
    setThumb(item);
  }

  let thumbUrl;
  async function setThumb(item) {
    const img = $('thumbImg');
    if (thumbUrl) URL.revokeObjectURL(thumbUrl);
    thumbUrl = null;
    if (!item) { img.removeAttribute('src'); return; }
    if (item.kind === 'photo') {
      thumbUrl = URL.createObjectURL(item.blob);
      img.src = thumbUrl;
    } else {
      img.src = await videoPoster(item.blob);
    }
    const b = $('btnGallery');
    b.classList.remove('pop');
    void b.offsetWidth;
    b.classList.add('pop');
  }
  function videoPoster(blob) {
    return new Promise((res) => {
      const v = document.createElement('video');
      const url = URL.createObjectURL(blob);
      v.muted = true; v.playsInline = true; v.preload = 'auto'; v.src = url;
      const done = (data) => { URL.revokeObjectURL(url); res(data); };
      v.addEventListener('loadeddata', () => { v.currentTime = Math.min(0.1, v.duration || 0.1); }, { once: true });
      v.addEventListener('seeked', () => {
        const c = document.createElement('canvas');
        c.width = 160; c.height = Math.round(160 * (v.videoHeight / v.videoWidth || 1));
        c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
        done(c.toDataURL('image/jpeg', 0.7));
      }, { once: true });
      v.addEventListener('error', () => done(''), { once: true });
      setTimeout(() => done(''), 4000);
    });
  }

  const galleryUrls = [];
  async function openGallery() {
    $('gallery').classList.remove('hidden');
    const grid = $('galGrid');
    grid.innerHTML = '';
    galleryUrls.splice(0).forEach(URL.revokeObjectURL);
    let items = [];
    try { items = await allMedia(); } catch { toast('Could not open gallery'); }
    $('galCount').textContent = items.length ? `${items.length} item${items.length > 1 ? 's' : ''}` : '';
    $('galEmpty').classList.toggle('hidden', items.length > 0);
    items.forEach((it) => {
      const url = URL.createObjectURL(it.blob);
      galleryUrls.push(url);
      const b = document.createElement('button');
      if (it.kind === 'photo') {
        const img = document.createElement('img');
        img.loading = 'lazy'; img.src = url; img.alt = '';
        b.appendChild(img);
      } else {
        const v = document.createElement('video');
        v.muted = true; v.playsInline = true; v.preload = 'metadata'; v.src = `${url}#t=0.1`;
        b.appendChild(v);
        const tag = document.createElement('span');
        tag.className = 'vid-tag'; tag.textContent = '▶ VIDEO';
        b.appendChild(tag);
      }
      b.addEventListener('click', () => openViewer(it, url));
      grid.appendChild(b);
    });
  }
  function closeGallery() {
    $('gallery').classList.add('hidden');
    $('galGrid').innerHTML = '';
    galleryUrls.splice(0).forEach(URL.revokeObjectURL);
  }

  let viewing = null;
  function openViewer(item, url) {
    viewing = item;
    const body = $('viewBody');
    body.innerHTML = '';
    if (item.kind === 'photo') {
      const img = document.createElement('img');
      img.src = url;
      body.appendChild(img);
    } else {
      const v = document.createElement('video');
      v.src = url; v.controls = true; v.playsInline = true; v.autoplay = true;
      body.appendChild(v);
    }
    const d = new Date(item.created);
    $('viewInfo').textContent = `${d.toLocaleString()} · ${(item.size / 1048576).toFixed(1)} MB`;
    $('viewer').classList.remove('hidden');
  }
  function closeViewer() {
    $('viewer').classList.add('hidden');
    $('viewBody').innerHTML = '';
    viewing = null;
  }

  function fileName(item) {
    const d = new Date(item.created);
    const p = (n) => String(n).padStart(2, '0');
    const stamp = `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}_${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}`;
    const ext = item.kind === 'photo' ? 'jpg' : /mp4/.test(item.type) ? 'mp4' : 'webm';
    return `${item.kind === 'photo' ? 'IMG' : 'VID'}_${stamp}.${ext}`;
  }
  function download(item) {
    const url = URL.createObjectURL(item.blob);
    const a = document.createElement('a');
    a.href = url; a.download = fileName(item);
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 5000);
  }

  $('btnDownload').addEventListener('click', () => viewing && download(viewing));
  $('btnShare').addEventListener('click', async () => {
    if (!viewing) return;
    const file = new File([viewing.blob], fileName(viewing), { type: viewing.type });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file] }); } catch { /* cancelled */ }
    } else {
      download(viewing);
      toast('Sharing not supported here — saved instead');
    }
  });
  $('btnDelete').addEventListener('click', async () => {
    if (!viewing || !confirm('Delete this item?')) return;
    const id = viewing.id;
    await dbTx('readwrite', (s) => s.delete(id));
    closeViewer();
    await openGallery();
    const items = await allMedia();
    setThumb(items[0]);
  });

  // ---------------------------------------------------------------- controls
  function setMode(mode) {
    if (mode === state.mode || state.recording) return;
    state.mode = mode;
    app.classList.toggle('mode-photo', mode === 'photo');
    app.classList.toggle('mode-video', mode === 'video');
    document.querySelectorAll('#modes button').forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    $('btnShutter').setAttribute('aria-label', mode === 'photo' ? 'Take photo' : 'Start recording');
    if (mode === 'photo') state.torch = false;
    startCamera();
  }
  document.querySelectorAll('#modes button').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.mode)));

  function shutter() {
    if (state.mode === 'photo') capturePhoto();
    else if (state.recording) stopRecording();
    else startRecording();
  }
  $('btnShutter').addEventListener('click', shutter);
  $('btnPause').addEventListener('click', togglePause);
  $('btnSnap').addEventListener('click', () => capturePhoto({ quick: true }));

  $('btnFlip').addEventListener('click', () => {
    if (state.recording) return;
    const b = $('btnFlip');
    b.classList.remove('spin'); void b.offsetWidth; b.classList.add('spin');
    state.facing = isFront() ? 'environment' : 'user';
    // prefer a known lens for that side, but let the browser pick the default one
    state.deviceId = null;
    if (state.facing === 'environment' && state.mainBackId) state.deviceId = state.mainBackId;
    state.torch = false;
    if (isFront() && state.flash === 'auto') state.flash = 'off';
    startCamera();
  });

  $('btnTimer').addEventListener('click', () => {
    const order = [0, 3, 10];
    prefs.timer = order[(order.indexOf(prefs.timer) + 1) % order.length];
    savePrefs();
    updateTimerUI();
    toast(prefs.timer ? `Timer ${prefs.timer}s` : 'Timer off', 900);
  });
  function updateTimerUI() {
    $('timerBadge').textContent = prefs.timer ? `${prefs.timer}s` : 'OFF';
    $('btnTimer').classList.toggle('on', !!prefs.timer);
  }

  $('btnGrid').addEventListener('click', () => {
    prefs.grid = !prefs.grid;
    savePrefs();
    updateGridUI();
  });
  function updateGridUI() {
    $('gridOverlay').classList.toggle('show', prefs.grid);
    $('btnGrid').classList.toggle('on', prefs.grid);
  }

  // lens picker
  function updateLensUI() {
    const n = state.devices.length;
    $('btnLens').classList.toggle('hidden', n < 2);
    $('lensBadge').textContent = n;
  }
  $('btnLens').addEventListener('click', () => {
    const list = $('lensList');
    list.innerHTML = '';
    const cur = currentDeviceId();
    state.devices.forEach((d) => {
      const b = document.createElement('button');
      b.classList.toggle('active', d.deviceId === cur);
      const side = d.facing === 'user' ? 'Front' : d.facing === 'environment' ? 'Back' : '';
      b.innerHTML = `<span></span><small>${side}</small>`;
      b.firstChild.textContent = d.label;
      b.addEventListener('click', () => {
        if (state.recording) return;
        state.deviceId = d.deviceId;
        if (d.facing !== 'unknown') state.facing = d.facing;
        closeSheets();
        startCamera();
      });
      list.appendChild(b);
    });
    $('lensSheet').classList.remove('hidden');
  });

  // settings
  function openSettings() {
    $('setPhotoQ').value = prefs.photoQ;
    $('setVideoRes').value = prefs.videoRes;
    $('setFps').value = prefs.fps;
    $('setMirror').checked = prefs.mirror;
    $('setSound').checked = prefs.sound;
    $('setAudio').checked = prefs.audio;
    const s = state.track && state.track.getSettings ? state.track.getSettings() : {};
    const lines = [
      `Lens: ${(state.track && state.track.label) || '—'}`,
      `Stream: ${s.width || '?'}×${s.height || '?'} @ ${s.frameRate ? Math.round(s.frameRate) : '?'} fps`,
      `Zoom: ${state.nativeZoom ? `native ${fmtZoom(state.zoomMin, true)} – ${fmtZoom(state.zoomMax, true)}` : 'digital (browser gives no lens zoom)'}`,
      `Flash/torch: ${canTorch() ? 'torch' : 'no torch'}${canFillFlash() ? ', photo flash' : ''}`,
      `Full-resolution capture: ${state.imageCapture ? 'yes' : 'no'}`,
      `Focus modes: ${(state.caps.focusMode || []).join(', ') || '—'}`,
      `Video format: ${pickMime() || 'browser default'}`,
    ];
    $('capsInfo').textContent = lines.join('\n');
    $('settingsSheet').classList.remove('hidden');
  }
  $('btnSettings').addEventListener('click', openSettings);
  $('setPhotoQ').addEventListener('change', (e) => { prefs.photoQ = e.target.value; savePrefs(); });
  $('setVideoRes').addEventListener('change', (e) => { prefs.videoRes = e.target.value; savePrefs(); if (state.mode === 'video') startCamera(); });
  $('setFps').addEventListener('change', (e) => { prefs.fps = e.target.value; savePrefs(); if (state.mode === 'video') startCamera(); });
  $('setMirror').addEventListener('change', (e) => { prefs.mirror = e.target.checked; savePrefs(); });
  $('setSound').addEventListener('change', (e) => { prefs.sound = e.target.checked; savePrefs(); });
  $('setAudio').addEventListener('change', (e) => { prefs.audio = e.target.checked; savePrefs(); });

  function closeSheets() { document.querySelectorAll('.sheet').forEach((s) => s.classList.add('hidden')); }
  document.querySelectorAll('.sheet').forEach((s) => s.addEventListener('click', (e) => {
    if (e.target === s || e.target.closest('[data-close]')) closeSheets();
  }));

  $('btnGallery').addEventListener('click', openGallery);
  $('btnGalBack').addEventListener('click', closeGallery);
  $('btnViewBack').addEventListener('click', closeViewer);
  $('btnRetry').addEventListener('click', () => { state.deviceId = null; startCamera(); });

  // keyboard: space / enter / volume keys = shutter
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('select, input')) return;
    if (!$('gallery').classList.contains('hidden') || !$('viewer').classList.contains('hidden')) return;
    if ([' ', 'Enter', 'AudioVolumeUp', 'AudioVolumeDown', 'VolumeUp', 'VolumeDown'].includes(e.key)) {
      e.preventDefault();
      shutter();
    }
  });

  // release the camera when the app is backgrounded; resume when visible again
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (state.recording) stopRecording();
      stopStream();
      if (state.audioStream) { state.audioStream.getTracks().forEach((t) => t.stop()); state.audioStream = null; }
    } else if (!state.stream) {
      startCamera();
    }
  });

  // ---------------------------------------------------------------- boot
  updateTimerUI();
  updateGridUI();
  layout();
  startCamera();
  allMedia().then((items) => items[0] && setThumb(items[0])).catch(() => {});
  if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(() => {});
  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
