// Interactive simulations for the Lab page and the book chapters (loaded on demand by js/app.js).
// JEE.sims[id](el, ctx) builds a canvas and a control panel inside el. Every number shown comes from the
// standard formulas; drawing follows the site theme and pauses while the simulation is off screen.
(function () {
  'use strict';
  var JEE = window.JEE, sims = JEE.sims = JEE.sims || {};
  var TAU = Math.PI * 2;

  // ---------- toolkit ----------
  function theme() {
    var cs = getComputedStyle(document.documentElement), v = function (n) { return cs.getPropertyValue(n).trim(); };
    return { text: v('--text'), muted: v('--muted'), border: v('--border'), surface: v('--surface'), s2: v('--surface-2'), accent: v('--accent'),
      ok: v('--ok'), phy: v('--phy'), chem: v('--chem'), math: v('--math'), o: v('--d-o'), b: v('--d-b'), g: v('--d-g'), r: v('--d-r'), p: v('--d-p') };
  }
  function build(el, ctx, aspect) {
    el.innerHTML = '<div class="sim"><div class="sim-stage"><canvas></canvas></div><div class="sim-panel"></div></div>';
    var S = { el: el, ctx: ctx, cv: el.querySelector('canvas'), panel: el.querySelector('.sim-panel'), aspect: aspect || .62,
      w: 300, h: 200, col: theme(), draw: function () {}, visible: true, touchedOnce: false };
    S.g = S.cv.getContext('2d');
    function resize() {
      var w = S.cv.clientWidth || 400, d = Math.min(window.devicePixelRatio || 1, 2);
      var h = Math.round(Math.max(220, Math.min(w * S.aspect, 560)));
      S.cv.style.height = h + 'px';
      S.cv.width = Math.round(w * d); S.cv.height = Math.round(h * d);
      S.g.setTransform(d, 0, 0, d, 0, 0);
      S.w = w; S.h = h;
      S.draw();
    }
    S.resize = resize;
    if (window.ResizeObserver) new ResizeObserver(function () { if (Math.abs((S.cv.clientWidth || 0) - S.w) > 1) resize(); }).observe(S.cv);
    else window.addEventListener('resize', resize);
    window.addEventListener('jee-theme', function () { S.col = theme(); S.draw(); });
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { setTimeout(function () { S.col = theme(); S.draw(); }, 50); }); } catch (e) {}
    if (window.IntersectionObserver) new IntersectionObserver(function (es) { S.visible = es[0].isIntersecting; }).observe(S.cv);
    S.touch = function () { if (!S.touchedOnce) { S.touchedOnce = true; if (ctx && ctx.touched) ctx.touched(); } };
    S.cv.addEventListener('pointerdown', S.touch);
    setTimeout(resize, 0);
    return S;
  }
  function add(S, html, cls) { var d = document.createElement('div'); if (cls) d.className = cls; d.innerHTML = html; S.panel.appendChild(d); return d; }
  function slider(S, o, on) {
    var d = add(S, '<label><span>' + o.label + '</span><output></output></label><input type="range" min="' + o.min + '" max="' + o.max + '" step="' + (o.step || 1) +
      '" value="' + o.value + '" aria-label="' + o.label.replace(/<[^>]+>/g, '') + '">', 'sim-ctl');
    var inp = d.querySelector('input'), out = d.querySelector('output');
    function show() { out.innerHTML = o.fmt ? o.fmt(+inp.value) : inp.value; }
    inp.addEventListener('input', function () { show(); S.touch(); on(+inp.value); });
    show();
    return { get: function () { return +inp.value; }, set: function (v) { inp.value = v; show(); }, input: inp };
  }
  function seg(S, label, opts, value, on) {
    var d = add(S, (label ? '<label><span>' + label + '</span></label>' : '') + '<div class="sim-seg">' + opts.map(function (o) {
      return '<button type="button" data-v="' + o[0] + '"' + (String(o[0]) === String(value) ? ' class="on"' : '') + '>' + o[1] + '</button>';
    }).join('') + '</div>', 'sim-ctl');
    d.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      d.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b); });
      S.touch();
      on(b.getAttribute('data-v'));
    });
    return d;
  }
  function buttons(S, list) {
    var d = add(S, list.map(function (b, i) { return '<button type="button" class="sim-btn' + (b[2] ? ' ' + b[2] : '') + '" data-i="' + i + '">' + (b[1] ? S.ctx.icon(b[1]) : '') + '<span>' + b[0] + '</span></button>'; }).join(''), 'sim-btns');
    d.addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) { S.touch(); list[+b.getAttribute('data-i')][3](b); } });
    return d;
  }
  function readout(S, rows) {
    var d = add(S, rows.map(function (r) { return '<dt>' + r[1] + '</dt><dd data-k="' + r[0] + '">–</dd>'; }).join(''));
    var dl = document.createElement('dl'); dl.className = 'sim-read'; dl.innerHTML = d.innerHTML; d.replaceWith(dl);
    var last = {};
    return function (k, v) {
      if (last[k] === v) return;
      last[k] = v;
      var dd = dl.querySelector('[data-k="' + k + '"]');
      dd.innerHTML = v;
      dd.classList.remove('flash'); void dd.offsetWidth; dd.classList.add('flash');
    };
  }
  function note(S, html) { return add(S, html, 'sim-note'); }
  function loop(S, step) {
    var last = 0;
    function frame(t) {
      if (!S.el.isConnected) return;
      var dt = last ? Math.min(.05, (t - last) / 1000) : 0;
      last = t;
      if (S.visible && !document.hidden) step(dt);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  function font(g, size, weight) { g.font = (weight || 500) + ' ' + (size || 12) + 'px system-ui, -apple-system, "Segoe UI", sans-serif'; }
  function text(g, s, x, y, col, size, align, base, weight) {
    font(g, size, weight); g.fillStyle = col; g.textAlign = align || 'left'; g.textBaseline = base || 'alphabetic'; g.fillText(s, x, y);
  }
  function line(g, x1, y1, x2, y2, col, w, dash) {
    g.save(); g.strokeStyle = col; g.lineWidth = w || 1; if (dash) g.setLineDash(dash);
    g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); g.restore();
  }
  function arrow(g, x1, y1, x2, y2, col, w, head) {
    var a = Math.atan2(y2 - y1, x2 - x1), L = Math.hypot(x2 - x1, y2 - y1), hs = Math.min(head || 8, L * .5);
    if (L < 1) return;
    line(g, x1, y1, x2 - Math.cos(a) * hs * .6, y2 - Math.sin(a) * hs * .6, col, w || 2);
    g.save(); g.fillStyle = col; g.beginPath(); g.moveTo(x2, y2);
    g.lineTo(x2 - hs * Math.cos(a - .42), y2 - hs * Math.sin(a - .42)); g.lineTo(x2 - hs * Math.cos(a + .42), y2 - hs * Math.sin(a + .42));
    g.closePath(); g.fill(); g.restore();
  }
  function dot(g, x, y, r, col, stroke) {
    g.beginPath(); g.arc(x, y, r, 0, TAU); g.fillStyle = col; g.fill();
    if (stroke) { g.lineWidth = 2; g.strokeStyle = stroke; g.stroke(); }
  }
  function nice(range, n) {
    var raw = range / (n || 5), p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
    return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p;
  }
  function fmt(x, d) {
    if (!isFinite(x)) return '∞';
    var s = x.toFixed(d == null ? 2 : d);
    return s === '-0' || /^-0\.0*$/.test(s) ? s.slice(1) : s;
  }
  // A graph frame: draws axes, grid and tick labels; returns the mapping functions.
  function frame(S, box, xr, yr, o) {
    o = o || {};
    var g = S.g, c = S.col, X = function (v) { return box.x + (v - xr[0]) / (xr[1] - xr[0]) * box.w; }, Y = function (v) { return box.y + box.h - (v - yr[0]) / (yr[1] - yr[0]) * box.h; };
    var sx = o.xstep || nice(xr[1] - xr[0], box.w / 70), sy = o.ystep || nice(yr[1] - yr[0], box.h / 45), v;
    g.save();
    for (v = Math.ceil(xr[0] / sx) * sx; v <= xr[1] + 1e-9; v += sx) {
      line(g, X(v), box.y, X(v), box.y + box.h, c.border, 1);
      if (!o.noXLabels) text(g, o.xfmt ? o.xfmt(v) : fmt(v, sx < 1 ? (sx < .1 ? 2 : 1) : 0), X(v), box.y + box.h + 13, c.muted, 10, 'center');
    }
    for (v = Math.ceil(yr[0] / sy) * sy; v <= yr[1] + 1e-9; v += sy) {
      line(g, box.x, Y(v), box.x + box.w, Y(v), c.border, 1);
      if (!o.noYLabels) text(g, o.yfmt ? o.yfmt(v) : fmt(v, sy < 1 ? (sy < .1 ? 2 : 1) : 0), box.x - 5, Y(v), c.muted, 10, 'right', 'middle');
    }
    var x0 = Math.max(box.x, Math.min(box.x + box.w, X(0))), y0 = Math.max(box.y, Math.min(box.y + box.h, Y(0)));
    line(g, box.x, y0, box.x + box.w, y0, c.muted, 1.3);
    line(g, x0, box.y, x0, box.y + box.h, c.muted, 1.3);
    if (o.xlabel) text(g, o.xlabel, box.x + box.w, box.y + box.h + 26, c.muted, 11, 'right');
    if (o.ylabel) text(g, o.ylabel, box.x + 4, box.y - 6, c.muted, 11, 'left');
    g.restore();
    return { X: X, Y: Y, box: box, xr: xr, yr: yr, ix: function (px) { return xr[0] + (px - box.x) / box.w * (xr[1] - xr[0]); }, iy: function (py) { return yr[0] + (box.y + box.h - py) / box.h * (yr[1] - yr[0]); } };
  }
  function curve(S, F, f, x0, x1, col, w, n) {
    var g = S.g, first = true, steps = n || 300;
    g.save(); g.strokeStyle = col; g.lineWidth = w || 2.2; g.lineJoin = 'round'; g.beginPath();
    g.rect(F.box.x, F.box.y - 2, F.box.w, F.box.h + 4); g.clip(); g.beginPath();
    for (var i = 0; i <= steps; i++) {
      var x = x0 + (x1 - x0) * i / steps, y = f(x);
      if (!isFinite(y)) { first = true; continue; }
      var py = Math.max(-1e4, Math.min(1e4, F.Y(y)));
      if (first) { g.moveTo(F.X(x), py); first = false; } else g.lineTo(F.X(x), py);
    }
    g.stroke(); g.restore();
  }
  function pointer(S, handlers) {
    var on = false;
    function pos(e) { var r = S.cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
    S.cv.addEventListener('pointerdown', function (e) { var p = pos(e); if (handlers.down(p)) { on = true; try { S.cv.setPointerCapture(e.pointerId); } catch (err) {} e.preventDefault(); } });
    S.cv.addEventListener('pointermove', function (e) { var p = pos(e); if (on) handlers.move(p); else if (handlers.hover) S.cv.style.cursor = handlers.hover(p) ? 'grab' : ''; });
    S.cv.addEventListener('pointerup', function () { on = false; if (handlers.up) handlers.up(); });
    S.cv.addEventListener('pointercancel', function () { on = false; });
  }
  // Wavelength (nm) to an approximate display colour.
  function wavelengthRGB(nm, alpha) {
    var r = 0, g = 0, b = 0;
    if (nm >= 380 && nm < 440) { r = -(nm - 440) / 60; b = 1; }
    else if (nm < 490) { g = (nm - 440) / 50; b = 1; }
    else if (nm < 510) { g = 1; b = -(nm - 510) / 20; }
    else if (nm < 580) { r = (nm - 510) / 70; g = 1; }
    else if (nm < 645) { r = 1; g = -(nm - 645) / 65; }
    else if (nm <= 780) { r = 1; }
    var f = nm < 380 || nm > 780 ? 0 : nm < 420 ? .3 + .7 * (nm - 380) / 40 : nm > 700 ? .3 + .7 * (780 - nm) / 80 : 1;
    if (nm < 380) return 'rgba(150,110,255,' + (alpha == null ? 1 : alpha) + ')';
    if (nm > 780) return 'rgba(170,40,40,' + (alpha == null ? 1 : alpha) + ')';
    function c(x) { return Math.round(255 * Math.pow(x * f, .8)); }
    return 'rgba(' + c(r) + ',' + c(g) + ',' + c(b) + ',' + (alpha == null ? 1 : alpha) + ')';
  }

  // ---------- 1. projectile ----------
  sims.projectile = function (el, ctx) {
    var S = build(el, ctx, .6), st = { u: 20, th: 45, g: 9.8, t: -1, trails: [], ghost: false };
    var su = slider(S, { label: 'Launch speed u', min: 5, max: 40, step: 1, value: 20, fmt: function (v) { return v + ' m/s'; } }, function (v) { st.u = v; st.t = -1; S.draw(); });
    var sth = slider(S, { label: 'Angle θ', min: 5, max: 85, step: 1, value: 45, fmt: function (v) { return v + '°'; } }, function (v) { st.th = v; st.t = -1; S.draw(); });
    seg(S, 'Gravity', [[9.8, 'Earth'], [1.62, 'Moon'], [3.71, 'Mars'], [24.8, 'Jupiter']], 9.8, function (v) { st.g = +v; st.trails = []; st.t = -1; S.draw(); });
    buttons(S, [['Launch', 'play', 'go', function () { st.t = 0; }], ['90° − θ', 'rotate-ccw', '', function (b) { st.ghost = !st.ghost; b.classList.toggle('go', st.ghost); S.draw(); }], ['Clear', 'x', '', function () { st.trails = []; S.draw(); }]]);
    var set = readout(S, [['T', 'Time of flight'], ['H', 'Max height'], ['R', 'Range'], ['v', 'Speed now']]);
    note(S, 'T = 2u sinθ/g, H = u² sin²θ/2g, R = u² sin2θ/g.');
    function path(th) { var r = th * Math.PI / 180; return { ux: st.u * Math.cos(r), uy: st.u * Math.sin(r), T: 2 * st.u * Math.sin(r) / st.g }; }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h;
      g.clearRect(0, 0, w, h);
      var P = path(st.th), R = st.u * st.u / st.g * 1.08, box = { x: 44, y: 16, w: w - 60, h: h - 44 };
      var F = frame(S, box, [0, R], [0, R * box.h / box.w], { xlabel: 'x (m)', ylabel: 'y (m)' });
      st.trails.forEach(function (tr, i) {
        var q = path(tr);
        curve(S, F, function (x) { var t = x / q.ux; return t <= q.T + 1e-9 ? q.uy * t - .5 * st.g * t * t : NaN; }, 0, q.ux * q.T, [c.b, c.g, c.p, c.r, c.o][i % 5], 1.6);
        text(g, tr + '°', F.X(q.ux * q.T / 2), F.Y(q.uy * q.T / 2 - .5 * st.g * q.T * q.T / 4) - 6, [c.b, c.g, c.p, c.r, c.o][i % 5], 10, 'center');
      });
      if (st.ghost && st.th !== 45) {
        var q2 = path(90 - st.th);
        g.save(); g.setLineDash([3, 5]);
        curve(S, F, function (x) { var t = x / q2.ux; return t <= q2.T ? q2.uy * t - .5 * st.g * t * t : NaN; }, 0, q2.ux * q2.T, c.p, 1.6);
        g.restore();
        text(g, (90 - st.th) + '° lands at the same spot', F.X(q2.ux * q2.T) - 4, F.Y(0) - 8, c.p, 10, 'right');
      }
      g.save(); g.setLineDash([6, 5]);
      curve(S, F, function (x) { var t = x / P.ux; return t <= P.T + 1e-9 ? P.uy * t - .5 * st.g * t * t : NaN; }, 0, P.ux * P.T, c.muted, 1.4);
      g.restore();
      var Rr = P.ux * P.T, H = P.uy * P.uy / (2 * st.g);
      line(g, F.X(Rr / 2), F.Y(0), F.X(Rr / 2), F.Y(H), c.g, 1, [2, 3]);
      text(g, 'H = ' + fmt(H, 1) + ' m', F.X(Rr / 2) + 5, F.Y(H) - 6, c.g, 11);
      text(g, 'R = ' + fmt(Rr, 1) + ' m', F.X(Rr), F.Y(0) - 6, c.o, 11, 'center');
      // launcher
      var a = st.th * Math.PI / 180;
      g.save(); g.translate(F.X(0), F.Y(0)); g.rotate(-a); g.fillStyle = c.text; g.fillRect(-4, -5, 28, 10); g.restore();
      dot(g, F.X(0), F.Y(0), 7, c.muted);
      var t = st.t < 0 ? 0 : Math.min(st.t, P.T), x = P.ux * t, y = P.uy * t - .5 * st.g * t * t, vy = P.uy - st.g * t;
      if (st.t >= 0) {
        var k = 22 / st.u;
        arrow(g, F.X(x), F.Y(y), F.X(x) + P.ux * k * 1.6, F.Y(y), c.g, 2);
        arrow(g, F.X(x), F.Y(y), F.X(x), F.Y(y) - vy * k * 1.6, c.b, 2);
        arrow(g, F.X(x), F.Y(y), F.X(x) + P.ux * k * 1.6, F.Y(y) - vy * k * 1.6, c.o, 2.4);
        dot(g, F.X(x), F.Y(y), 7, c.r, c.surface);
        text(g, 'vx', F.X(x) + P.ux * k * 1.6 + 4, F.Y(y) + 4, c.g, 10);
        text(g, 'vy', F.X(x) + 5, F.Y(y) - vy * k * 1.6, c.b, 10);
      }
      set('T', fmt(P.T, 2) + ' s'); set('H', fmt(H, 2) + ' m'); set('R', fmt(Rr, 2) + ' m');
      set('v', st.t >= 0 ? fmt(Math.hypot(P.ux, vy), 1) + ' m/s' : fmt(st.u, 1) + ' m/s');
    };
    loop(S, function (dt) {
      if (st.t < 0) return;
      var P = path(st.th), speed = Math.max(1, P.T / 2.4);
      st.t += dt * speed;
      if (st.t >= P.T) {
        st.t = P.T;
        if (st.trails[st.trails.length - 1] !== st.th) { st.trails.push(st.th); if (st.trails.length > 5) st.trails.shift(); }
        S.draw(); st.t = -1; return;
      }
      S.draw();
    });
    void su; void sth;
  };

  // ---------- 2. pendulum ----------
  sims.pendulum = function (el, ctx) {
    var S = build(el, ctx, .58), st = { L: 1, a0: 20, g: 9.8, th: 20 * Math.PI / 180, w: 0, t: 0, run: true, hist: [], lastUp: null, T: null };
    function reset() { st.th = st.a0 * Math.PI / 180; st.w = 0; st.t = 0; st.hist = []; st.lastUp = null; st.T = null; S.draw(); }
    slider(S, { label: 'Length L', min: .2, max: 2.5, step: .05, value: 1, fmt: function (v) { return v.toFixed(2) + ' m'; } }, function (v) { st.L = v; reset(); });
    slider(S, { label: 'Amplitude θ₀', min: 5, max: 80, step: 1, value: 20, fmt: function (v) { return v + '°'; } }, function (v) { st.a0 = v; reset(); });
    seg(S, 'Gravity', [[9.8, 'Earth'], [1.62, 'Moon'], [24.8, 'Jupiter']], 9.8, function (v) { st.g = +v; reset(); });
    var playBtn = buttons(S, [['Pause', 'pause', 'go', function (b) { st.run = !st.run; b.innerHTML = S.ctx.icon(st.run ? 'pause' : 'play') + '<span>' + (st.run ? 'Pause' : 'Play') + '</span>'; }], ['Restart', 'rotate-ccw', '', reset]]);
    var set = readout(S, [['T0', 'T = 2π√(L/g)'], ['Tm', 'Measured period'], ['th', 'Angle now'], ['v', 'Speed now']]);
    note(S, 'Solved exactly (no small-angle shortcut), so big swings take a little longer than 2π√(L/g).');
    function acc(th) { return -st.g / st.L * Math.sin(th); }
    function step(h) {
      var k1 = st.w, l1 = acc(st.th), k2 = st.w + h / 2 * l1, l2 = acc(st.th + h / 2 * k1), k3 = st.w + h / 2 * l2, l3 = acc(st.th + h / 2 * k2), k4 = st.w + h * l3, l4 = acc(st.th + h * k3);
      var prev = st.th;
      st.th += h / 6 * (k1 + 2 * k2 + 2 * k3 + k4); st.w += h / 6 * (l1 + 2 * l2 + 2 * l3 + l4); st.t += h;
      if (prev < 0 && st.th >= 0) { var tc = st.t - h * st.th / (st.th - prev); if (st.lastUp != null) st.T = tc - st.lastUp; st.lastUp = tc; }
    }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, split = w < 520 ? w : w * .46;
      g.clearRect(0, 0, w, h);
      var px = split / 2, py = 22, scale = (h - (w < 520 ? h * .42 : 0) - 70) / 2.6, Lp = st.L * scale;
      var bx = px + Lp * Math.sin(st.th), by = py + Lp * Math.cos(st.th);
      line(g, px - 50, py, px + 50, py, c.text, 3);
      line(g, px, py, px, py + Lp + 12, c.border, 1, [3, 4]);
      g.save(); g.strokeStyle = c.g; g.globalAlpha = .5; g.beginPath(); g.arc(px, py, Lp, Math.PI / 2 - st.a0 * Math.PI / 180, Math.PI / 2 + st.a0 * Math.PI / 180); g.stroke(); g.restore();
      line(g, px, py, bx, by, c.text, 2);
      dot(g, bx, by, 12, c.phy, c.surface);
      // energy bars
      var E = st.g * st.L * (1 - Math.cos(st.a0 * Math.PI / 180)), PE = st.g * st.L * (1 - Math.cos(st.th)), KE = Math.max(0, E - PE);
      var bh = Math.min(110, h * .35), bx0 = split - 52, by0 = py + 18;
      [['KE', KE, c.o], ['PE', PE, c.b]].forEach(function (e, i) {
        var x = bx0 + i * 22;
        g.fillStyle = c.s2; g.fillRect(x, by0, 14, bh);
        g.fillStyle = e[2]; g.fillRect(x, by0 + bh * (1 - e[1] / (E || 1)), 14, bh * e[1] / (E || 1));
        text(g, e[0], x + 7, by0 + bh + 13, c.muted, 10, 'center');
      });
      // displacement–time graph
      var box = w < 520 ? { x: 40, y: h * .62, w: w - 54, h: h * .3 } : { x: split + 34, y: 24, w: w - split - 46, h: h - 58 };
      var A = st.a0, F = frame(S, box, [0, 10], [-A * 1.15, A * 1.15], { xlabel: 't (s)', ylabel: 'θ (°)', ystep: nice(A * 2.3, 4) });
      line(g, box.x, F.Y(A), box.x + box.w, F.Y(A), c.g, 1, [4, 4]);
      line(g, box.x, F.Y(-A), box.x + box.w, F.Y(-A), c.g, 1, [4, 4]);
      var t0 = Math.max(0, st.t - 10);
      g.save(); g.strokeStyle = c.phy; g.lineWidth = 2; g.beginPath();
      st.hist.forEach(function (p, i) { var x = F.X(p[0] - t0), y = F.Y(p[1]); if (i) g.lineTo(x, y); else g.moveTo(x, y); });
      g.stroke(); g.restore();
      if (st.hist.length) { var l = st.hist[st.hist.length - 1]; dot(g, F.X(l[0] - t0), F.Y(l[1]), 4, c.phy); }
      set('T0', fmt(2 * Math.PI * Math.sqrt(st.L / st.g), 3) + ' s');
      set('Tm', st.T ? fmt(st.T, 3) + ' s' : 'measuring…');
      set('th', fmt(st.th * 180 / Math.PI, 1) + '°');
      set('v', fmt(Math.abs(st.w * st.L), 2) + ' m/s');
    };
    loop(S, function (dt) {
      if (!st.run) return;
      var n = Math.ceil(dt / (1 / 480));
      for (var i = 0; i < n; i++) step(dt / n);
      st.hist.push([st.t, st.th * 180 / Math.PI]);
      while (st.hist.length && st.hist[0][0] < st.t - 10) st.hist.shift();
      S.draw();
    });
    void playBtn;
  };

  // ---------- 3. superposition of waves ----------
  sims.waves = function (el, ctx) {
    var S = build(el, ctx, .62), st = { A2: 1, r: 1, ph: 0, dir: 'same', t: 0, run: true };
    slider(S, { label: 'Amplitude of wave 2', min: 0, max: 1.5, step: .05, value: 1, fmt: function (v) { return v.toFixed(2) + ' A'; } }, function (v) { st.A2 = v; S.draw(); });
    slider(S, { label: 'Wavelength ratio λ₂/λ₁', min: .5, max: 2, step: .05, value: 1, fmt: function (v) { return v.toFixed(2); } }, function (v) { st.r = v; S.draw(); });
    slider(S, { label: 'Phase difference φ', min: 0, max: 360, step: 5, value: 0, fmt: function (v) { return v + '°'; } }, function (v) { st.ph = v; S.draw(); });
    seg(S, 'Wave 2 travels', [['same', 'Same way'], ['opp', 'Opposite way']], 'same', function (v) { st.dir = v; S.draw(); });
    buttons(S, [['Pause', 'pause', 'go', function (b) { st.run = !st.run; b.innerHTML = S.ctx.icon(st.run ? 'pause' : 'play') + '<span>' + (st.run ? 'Pause' : 'Play') + '</span>'; }]]);
    var set = readout(S, [['kind', 'Pattern'], ['amp', 'Resultant amplitude']]);
    note(S, 'Same way, same λ: amplitude = √(A₁² + A₂² + 2A₁A₂cos φ). Opposite ways, equal amplitudes: a standing wave with nodes λ/2 apart.');
    var lam = 4, v = 1.2;
    function y1(x, t) { return Math.sin(TAU / lam * (x - v * t)); }
    function y2(x, t) { var l2 = lam * st.r, ph = st.ph * Math.PI / 180; return st.A2 * Math.sin(TAU / l2 * (x + (st.dir === 'same' ? -1 : 1) * v * t) + ph); }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h;
      g.clearRect(0, 0, w, h);
      var top = { x: 34, y: 18, w: w - 44, h: h * .36 }, bot = { x: 34, y: h * .5 + 8, w: w - 44, h: h * .42 };
      var F1 = frame(S, top, [0, 12], [-1.8, 1.8], { noXLabels: true, ystep: 1, ylabel: 'wave 1 and wave 2' });
      curve(S, F1, function (x) { return y1(x, st.t); }, 0, 12, c.b, 2);
      curve(S, F1, function (x) { return y2(x, st.t); }, 0, 12, c.r, 2);
      var F2 = frame(S, bot, [0, 12], [-3, 3], { ystep: 1, xlabel: 'x', ylabel: 'resultant = wave 1 + wave 2' });
      g.save(); g.fillStyle = S.col.accent; g.globalAlpha = .12; g.beginPath(); g.moveTo(F2.X(0), F2.Y(0));
      for (var i = 0; i <= 300; i++) { var x = 12 * i / 300; g.lineTo(F2.X(x), F2.Y(y1(x, st.t) + y2(x, st.t))); }
      g.lineTo(F2.X(12), F2.Y(0)); g.closePath(); g.fill(); g.restore();
      curve(S, F2, function (x) { return y1(x, st.t) + y2(x, st.t); }, 0, 12, c.accent, 2.8);
      var standing = st.dir === 'opp' && Math.abs(st.r - 1) < .01, kind, amp;
      if (standing && Math.abs(st.A2 - 1) < .01) {
        var ph = st.ph * Math.PI / 180;
        for (var n = -3; n < 12; n++) {
          var xn = (n * Math.PI - ph / 2) / (TAU / lam);
          if (xn >= 0 && xn <= 12) { dot(g, F2.X(xn), F2.Y(0), 5, c.r, c.surface); text(g, 'N', F2.X(xn), F2.Y(0) + 17, c.r, 10, 'center', 'alphabetic', 700); }
        }
        kind = 'Standing wave'; amp = '2A at antinodes, 0 at nodes';
      } else if (st.dir === 'same' && Math.abs(st.r - 1) < .01) {
        var R = Math.sqrt(1 + st.A2 * st.A2 + 2 * st.A2 * Math.cos(st.ph * Math.PI / 180));
        kind = R < .05 ? 'Destructive: they cancel' : Math.abs(R - 1 - st.A2) < .01 ? 'Constructive' : 'Travelling wave';
        amp = fmt(R, 2) + ' A';
      } else if (st.dir === 'same') { kind = 'Changing envelope (like beats)'; amp = 'varies along x'; }
      else { kind = standing ? 'Partly standing wave' : 'Messy superposition'; amp = 'varies'; }
      text(g, 'wave 1', top.x + top.w - 4, top.y + 12, c.b, 11, 'right', 'alphabetic', 700);
      text(g, 'wave 2', top.x + top.w - 4, top.y + 26, c.r, 11, 'right', 'alphabetic', 700);
      set('kind', kind); set('amp', amp);
    };
    loop(S, function (dt) { if (st.run) { st.t += dt; S.draw(); } });
  };

  // ---------- 4. thin lens ray diagram ----------
  sims.lens = function (el, ctx) {
    var S = build(el, ctx, .56), st = { type: 'convex', f: 15, u: -40, ho: 6 };
    var su = slider(S, { label: 'Object distance u', min: -65, max: -3, step: .5, value: -40, fmt: function (v) { return v.toFixed(1) + ' cm'; } }, function (v) { st.u = v; S.draw(); });
    slider(S, { label: 'Focal length |f|', min: 6, max: 30, step: 1, value: 15, fmt: function (v) { return v + ' cm'; } }, function (v) { st.f = v; S.draw(); });
    seg(S, 'Lens', [['convex', 'Convex'], ['concave', 'Concave']], 'convex', function (v) { st.type = v; S.draw(); });
    var set = readout(S, [['v', 'Image distance v'], ['m', 'Magnification m'], ['n', 'Image']]);
    note(S, 'Drag the object arrow. Uses 1/v − 1/u = 1/f and m = v/u (Cartesian sign convention, light from the left).');
    var W = 140, view;
    function sc() { return S.w / W; }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, k = sc(), cx = w / 2, cy = h / 2;
      // Heights are drawn 2.5 times taller than distances (as in textbook ray diagrams); straight rays stay straight.
      var X = function (x) { return cx + x * k; }, Y = function (y) { return cy - y * k * 2.5; };
      view = { X: X, Y: Y, k: k };
      g.clearRect(0, 0, w, h);
      var f = st.type === 'convex' ? st.f : -st.f, u = st.u, inv = 1 / f + 1 / u, v = Math.abs(inv) < 1e-6 ? Infinity : 1 / inv, m = v / u, hi = m * st.ho;
      line(g, 0, cy, w, cy, c.muted, 1.2);
      [[f, 'F'], [-f, 'F'], [2 * f, '2F'], [-2 * f, '2F']].forEach(function (p) { if (Math.abs(p[0]) < W / 2) { dot(g, X(p[0]), cy, 3.5, c.text); text(g, p[1], X(p[0]), cy + 16, c.muted, 11, 'center'); } });
      // lens
      var lh = Math.min(h * .44, 34 * k * 2.5);
      g.save(); g.fillStyle = S.col.b; g.globalAlpha = .16; g.strokeStyle = c.b; g.lineWidth = 2;
      g.beginPath();
      if (st.type === 'convex') { g.ellipse(cx, cy, 7, lh, 0, 0, TAU); }
      else { g.moveTo(cx - 9, cy - lh); g.lineTo(cx + 9, cy - lh); g.quadraticCurveTo(cx + 1, cy, cx + 9, cy + lh); g.lineTo(cx - 9, cy + lh); g.quadraticCurveTo(cx - 1, cy, cx - 9, cy - lh); }
      g.fill(); g.globalAlpha = 1; g.stroke(); g.restore();
      // rays: every refracted ray passes (really or virtually) through the image point
      var O = { x: u, y: st.ho }, real = v > 0 && isFinite(v);
      var hits = [{ y: st.ho, col: c.r }, { y: 0, col: c.g }];
      if (Math.abs(u + f) > .05) hits.push({ y: st.ho - (st.ho / (-f - u)) * (-u), col: c.p });
      hits.forEach(function (ray) {
        if (Math.abs(ray.y) > W) return;
        line(g, X(O.x), Y(O.y), X(0), Y(ray.y), ray.col, 1.8);
        // Object at the focus: the image is at infinity and every ray leaves parallel to the undeviated central ray.
        var dx, dy;
        if (!isFinite(v)) { dx = 1; dy = st.ho / u; }
        else if (real) { dx = v; dy = hi - ray.y; }
        else { dx = -v; dy = ray.y - hi; }
        var len = Math.hypot(dx, dy) || 1, ex = dx / len * W * 2, ey = ray.y + dy / len * W * 2;
        line(g, X(0), Y(ray.y), X(ex), Y(ey), ray.col, 1.8);
        if (!real && isFinite(v)) line(g, X(0), Y(ray.y), X(v), Y(hi), ray.col, 1.2, [5, 4]);
      });
      // object and image arrows
      arrow(g, X(u), cy, X(u), Y(st.ho), c.o, 3.5, 11);
      text(g, 'object', X(u), cy + 16, c.o, 11, 'center', 'alphabetic', 700);
      if (isFinite(v) && Math.abs(v) < W * 1.5) {
        g.save(); if (!real) g.setLineDash([5, 4]);
        arrow(g, X(v), cy, X(v), Y(Math.max(-W, Math.min(W, hi))), c.b, 3.5, 11);
        g.restore();
        text(g, real ? 'real image' : 'virtual image', X(v), hi > 0 ? cy + 16 : cy - 8, c.b, 11, 'center', 'alphabetic', 700);
      }
      set('v', isFinite(v) ? fmt(v, 1) + ' cm' : 'at infinity');
      set('m', isFinite(v) ? fmt(m, 2) : '∞');
      set('n', !isFinite(v) ? 'Formed at infinity' : (real ? 'Real, inverted' : 'Virtual, upright') + ', ' + (Math.abs(m) > 1.02 ? 'magnified' : Math.abs(m) < .98 ? 'diminished' : 'same size'));
    };
    pointer(S, {
      down: function (p) { return view && Math.abs(p.x - view.X(st.u)) < 22 && p.y < S.h / 2 + 12; },
      move: function (p) { st.u = Math.max(-65, Math.min(-3, Math.round((p.x - S.w / 2) / view.k * 2) / 2)); su.set(st.u); S.draw(); },
      hover: function (p) { return view && Math.abs(p.x - view.X(st.u)) < 22 && p.y < S.h / 2 + 12; }
    });
  };

  // ---------- 5. Young's double slit ----------
  sims.ydse = function (el, ctx) {
    var S = build(el, ctx, .62), st = { d: .3, lam: 550, D: 1, t: 0 };
    slider(S, { label: 'Slit separation d', min: .1, max: 1, step: .02, value: .3, fmt: function (v) { return v.toFixed(2) + ' mm'; } }, function (v) { st.d = v; S.draw(); });
    slider(S, { label: 'Wavelength λ', min: 400, max: 700, step: 5, value: 550, fmt: function (v) { return '<span style="color:' + wavelengthRGB(v) + '">●</span> ' + v + ' nm'; } }, function (v) { st.lam = v; S.draw(); });
    slider(S, { label: 'Screen distance D', min: .5, max: 2, step: .05, value: 1, fmt: function (v) { return v.toFixed(2) + ' m'; } }, function (v) { st.D = v; S.draw(); });
    var set = readout(S, [['b', 'Fringe width β = λD/d'], ['n', 'Bright fringes on view']]);
    note(S, 'Intensity on the screen: I = I₀ cos²(π d y / λD). The screen shown is 12 mm tall.');
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, Y = 6, beta = st.lam * 1e-6 * st.D * 1e3 / st.d;
      g.clearRect(0, 0, w, h);
      // schematic with wavefronts
      var sx = w * .08, bx = w * .22, scx = w * .5, mid = h * .42, gap = Math.max(10, st.d * 60);
      line(g, bx, 10, bx, mid - gap / 2 - 3, c.text, 4); line(g, bx, mid - gap / 2 + 3, bx, mid + gap / 2 - 3, c.text, 4); line(g, bx, mid + gap / 2 + 3, bx, h * .84, c.text, 4);
      dot(g, sx, mid, 5, wavelengthRGB(st.lam));
      var lamPx = 8 + (st.lam - 400) / 30;
      g.save(); g.beginPath(); g.rect(bx, 0, scx - bx, h * .86); g.clip(); g.strokeStyle = wavelengthRGB(st.lam, .45); g.lineWidth = 1.4;
      for (var r = (st.t * 30) % lamPx; r < scx - bx; r += lamPx) {
        g.beginPath(); g.arc(bx, mid - gap / 2, r, -1.2, 1.2); g.stroke();
        g.beginPath(); g.arc(bx, mid + gap / 2, r, -1.2, 1.2); g.stroke();
      }
      g.restore();
      g.save(); g.beginPath(); g.rect(sx, 0, bx - sx, h); g.clip(); g.strokeStyle = wavelengthRGB(st.lam, .45);
      for (var r2 = (st.t * 30) % lamPx; r2 < bx - sx; r2 += lamPx) { g.beginPath(); g.arc(sx, mid, r2, -.6, .6); g.stroke(); }
      g.restore();
      // screen strip
      var sw = 26;
      for (var py = 10; py < h * .84; py++) {
        var y = (mid - py) / (h * .84 - 10) * 2 * Y * (h * .84 - 10) / (h * .84 - 10), I = Math.pow(Math.cos(Math.PI * st.d * y / (st.lam * 1e-6 * st.D * 1e3)), 2);
        g.fillStyle = wavelengthRGB(st.lam, I); g.fillRect(scx, py, sw, 1);
      }
      g.strokeStyle = c.border; g.strokeRect(scx, 10, sw, h * .84 - 10);
      text(g, 'S', sx, mid - 10, c.muted, 11, 'center'); text(g, 'slits', bx, h * .84 + 14, c.muted, 11, 'center'); text(g, 'screen', scx + sw / 2, h * .84 + 14, c.muted, 11, 'center');
      // intensity graph (y vertical, I horizontal) on the right
      var box = { x: scx + sw + 30, y: 10, w: w - scx - sw - 44, h: h * .84 - 10 };
      var F = frame(S, box, [0, 1], [-Y, Y], { xstep: .5, ystep: 2, xlabel: 'I / I₀', ylabel: 'y (mm)' });
      g.save(); g.strokeStyle = wavelengthRGB(st.lam); g.lineWidth = 2.2; g.beginPath();
      for (var i = 0; i <= 600; i++) { var yy = -Y + 2 * Y * i / 600, II = Math.pow(Math.cos(Math.PI * st.d * yy / (st.lam * 1e-6 * st.D * 1e3)), 2); if (i) g.lineTo(F.X(II), F.Y(yy)); else g.moveTo(F.X(II), F.Y(yy)); }
      g.stroke(); g.restore();
      if (beta < Y) { arrow(g, F.X(1.02), F.Y(0), F.X(1.02), F.Y(beta), c.o, 1.6, 6); arrow(g, F.X(1.02), F.Y(beta), F.X(1.02), F.Y(0), c.o, 1.6, 6); text(g, 'β', F.X(1.02) - 6, F.Y(beta / 2), c.o, 12, 'right', 'middle', 700); }
      set('b', fmt(beta, 2) + ' mm');
      set('n', String(2 * Math.floor(Y / beta) + 1));
    };
    loop(S, function (dt) { st.t += dt; S.draw(); });
  };

  // ---------- 6. photoelectric effect ----------
  sims.photo = function (el, ctx) {
    var METALS = { Cs: 2.14, Na: 2.75, Cu: 4.65, Pt: 5.65 };
    var S = build(el, ctx, .6), st = { lam: 450, I: 60, m: 'Na', ph: [], el: [], acc: 0, hits: 0, rate: 0, tt: 0 };
    slider(S, { label: 'Wavelength λ', min: 150, max: 700, step: 5, value: 450, fmt: function (v) { return '<span style="color:' + wavelengthRGB(v) + '">●</span> ' + v + ' nm'; } }, function (v) { st.lam = v; });
    slider(S, { label: 'Intensity', min: 0, max: 100, step: 5, value: 60, fmt: function (v) { return v + '%'; } }, function (v) { st.I = v; });
    seg(S, 'Metal (work function)', Object.keys(METALS).map(function (k) { return [k, k + ' ' + METALS[k]]; }), 'Na', function (v) { st.m = v; });
    var set = readout(S, [['E', 'Photon energy hν'], ['K', 'Max KE of electrons'], ['V', 'Stopping potential'], ['l0', 'Threshold λ₀'], ['i', 'Photocurrent']]);
    note(S, 'hν = φ + K<sub>max</sub>, with E (eV) = 1240 / λ (nm). Intensity changes how many electrons come out, not how fast.');
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, E = 1240 / st.lam, phi = METALS[st.m], K = Math.max(0, E - phi);
      g.clearRect(0, 0, w, h);
      var plateX = w * .3, colX = w * .62, top = h * .12, bot = h * .62;
      // tube
      g.save(); g.strokeStyle = c.border; g.lineWidth = 2; g.beginPath(); g.roundRect ? g.roundRect(w * .2, top - 14, w * .5, bot - top + 28, 24) : g.rect(w * .2, top - 14, w * .5, bot - top + 28); g.stroke(); g.restore();
      g.fillStyle = c.muted; g.fillRect(plateX - 6, top, 8, bot - top); text(g, st.m + ' plate', plateX - 2, bot + 30, c.muted, 11, 'center');
      g.fillStyle = c.text; g.fillRect(colX, top, 6, bot - top); text(g, 'collector', colX + 3, bot + 30, c.muted, 11, 'center');
      // lamp
      dot(g, w * .07, h * .08, 12, wavelengthRGB(st.lam)); text(g, 'lamp', w * .07, h * .08 + 26, c.muted, 10, 'center');
      st.ph.forEach(function (p) { var col = wavelengthRGB(st.lam); g.save(); g.strokeStyle = col; g.lineWidth = 2; g.beginPath(); for (var k = 0; k < 12; k++) { var q = p.k - k * .012; var x = p.x0 + (p.x1 - p.x0) * q, y = p.y0 + (p.y1 - p.y0) * q + Math.sin(k * 1.4 + p.k * 40) * 3; if (k) g.lineTo(x, y); else g.moveTo(x, y); } g.stroke(); g.restore(); });
      st.el.forEach(function (e) { dot(g, e.x, e.y, 3.5, c.b); });
      // K vs frequency graph
      var box = { x: 46, y: h * .74, w: w - 62, h: h * .19 }, nu0 = phi / 4.136, nuMax = 1240 / 150 / 4.136 * 1.02;
      var F = frame(S, box, [0, nuMax], [0, 6.5], { xlabel: 'ν (10¹⁵ Hz)', ylabel: 'K max (eV)', ystep: 2, xstep: .5 });
      curve(S, F, function (nu) { return nu >= nu0 ? 4.136 * nu - phi : NaN; }, 0, nuMax, c.accent, 2);
      line(g, F.X(nu0), F.Y(0), F.X(nu0), F.Y(.6), c.r, 2);
      text(g, 'ν₀', F.X(nu0), F.Y(.8), c.r, 11, 'center', 'alphabetic', 700);
      var nu = E / 4.136;
      dot(g, F.X(Math.min(nu, nuMax)), F.Y(Math.min(6.5, K)), 5, wavelengthRGB(st.lam), c.surface);
      set('E', fmt(E, 2) + ' eV'); set('K', K > 0 ? fmt(K, 2) + ' eV' : 'no emission');
      set('V', K > 0 ? fmt(K, 2) + ' V' : '–'); set('l0', fmt(1240 / phi, 0) + ' nm');
      set('i', K > 0 ? fmt(st.rate, 0) + ' electrons/s' : '0');
    };
    loop(S, function (dt) {
      var w = S.w, h = S.h, E = 1240 / st.lam, phi = METALS[st.m], K = E - phi, plateX = w * .3, colX = w * .62, top = h * .12, bot = h * .62;
      st.acc += dt * st.I * .25;
      while (st.acc > 1) { st.acc--; var ty = top + Math.random() * (bot - top); st.ph.push({ x0: w * .07, y0: h * .08, x1: plateX - 6, y1: ty, k: 0 }); }
      st.ph = st.ph.filter(function (p) {
        p.k += dt * 1.6;
        if (p.k < 1) return true;
        if (K > 0) st.el.push({ x: plateX + 2, y: p.y1, vx: 60 + 260 * Math.sqrt(K / 6) * (.35 + .65 * Math.random()), vy: (Math.random() - .5) * 30 });
        return false;
      });
      st.el = st.el.filter(function (e) { e.x += e.vx * dt; e.y += e.vy * dt; if (e.x >= colX) { st.hits++; return false; } return true; });
      st.tt += dt;
      if (st.tt > 1) { st.rate = st.hits / st.tt; st.hits = 0; st.tt = 0; }
      S.draw();
    });
  };

  // ---------- 7. hydrogen spectrum (Bohr model) ----------
  sims.bohr = function (el, ctx) {
    var S = build(el, ctx, .64), st = { from: 3, to: 2, n: 3, anim: 0, lines: [], photon: null };
    function E(n) { return -13.6 / (n * n); }
    var sf = seg(S, 'Jump from n =', [[2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6'], [7, '7']], 3, function (v) { st.from = +v; if (st.to >= st.from) { st.to = st.from - 1; syncTo(); } st.n = st.from; S.draw(); });
    var stoEl = seg(S, 'down to n =', [[1, '1'], [2, '2'], [3, '3'], [4, '4'], [5, '5'], [6, '6']], 2, function (v) { if (+v >= st.from) { syncTo(); return; } st.to = +v; S.draw(); });
    function syncTo() { stoEl.querySelectorAll('button').forEach(function (b) { b.classList.toggle('on', +b.getAttribute('data-v') === st.to); b.disabled = +b.getAttribute('data-v') >= st.from; }); }
    syncTo(); void sf;
    buttons(S, [['Emit photon', 'sparkles', 'go', function () { st.n = st.from; st.anim = .001; }], ['Clear spectrum', 'x', '', function () { st.lines = []; S.draw(); }]]);
    var set = readout(S, [['dE', 'Energy of photon'], ['l', 'Wavelength'], ['s', 'Series'], ['r', 'Region']]);
    note(S, 'Eₙ = −13.6/n² eV, and λ (nm) = 1240 / ΔE (eV).');
    function info(a, b) {
      var dE = E(a) - E(b), lam = 1240 / dE;
      return { dE: dE, lam: lam, series: ['Lyman', 'Balmer', 'Paschen', 'Brackett', 'Pfund', 'Humphreys'][b - 1], region: lam < 380 ? 'Ultraviolet' : lam <= 750 ? 'Visible' : 'Infrared' };
    }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, I = info(st.from, st.to);
      g.clearRect(0, 0, w, h);
      // orbits
      var ox = w * .25, oy = h * .38, R = Math.min(w * .22, h * .34);
      for (var n = 1; n <= 7; n++) { g.save(); g.strokeStyle = n === st.from || n === st.to ? c.accent : c.border; g.lineWidth = n === st.from || n === st.to ? 1.6 : 1; g.beginPath(); g.arc(ox, oy, R * Math.sqrt(n * n) / 7, 0, TAU); g.stroke(); g.restore(); }
      dot(g, ox, oy, 5, c.r);
      var rn = st.anim > 0 && st.anim < 1 ? st.from + (st.to - st.from) * Math.min(1, st.anim * 2) : st.n;
      var ang = performance.now() / 1000 * 2.2 / Math.max(1, rn);
      dot(g, ox + R * rn / 7 * Math.cos(ang), oy + R * rn / 7 * Math.sin(ang), 5, c.b);
      if (st.photon) {
        var p = st.photon, col = wavelengthRGB(Math.max(380, Math.min(750, I.lam)));
        g.save(); g.strokeStyle = I.lam < 380 ? 'rgba(150,110,255,1)' : I.lam > 750 ? 'rgba(200,60,60,1)' : col; g.lineWidth = 2.5; g.beginPath();
        for (var k = 0; k < 60; k++) { var x = p.x + k * 1.2, y = p.y + Math.sin(k * .5 + p.t * 20) * 5; if (k) g.lineTo(x, y); else g.moveTo(x, y); }
        g.stroke(); g.restore();
      }
      // energy levels
      var ex = w * .55, ew = w * .38, ey0 = 16, eh = h * .58, Ey = function (e) { return ey0 + eh * (e / -13.6); };
      for (var m = 1; m <= 7; m++) {
        var yy = Ey(E(m));
        line(g, ex, yy, ex + ew, yy, m === st.from || m === st.to ? c.accent : c.border, m === st.from || m === st.to ? 2 : 1);
        if (m <= 3) text(g, 'n = ' + m + '   ' + fmt(E(m), 2) + ' eV', ex + ew, yy - 3, c.muted, 10, 'right');
        else if (m === 7) text(g, 'n = 4 … 7 (up to 0 eV)', ex + ew, Ey(E(4)) - 14, c.muted, 10, 'right');
      }
      var ya = Ey(E(st.from)), yb = Ey(E(st.to));
      arrow(g, ex + 24, ya, ex + 24, yb, c.o, 2.4, 9);
      // spectrum (log scale 90–2000 nm)
      var sb = { x: 24, y: h * .8, w: w - 48, h: 18 }, LX = function (l) { return sb.x + (Math.log(l) - Math.log(90)) / (Math.log(2000) - Math.log(90)) * sb.w; };
      g.fillStyle = c.s2; g.fillRect(sb.x, sb.y, sb.w, sb.h);
      for (var l = 380; l <= 750; l += 2) { g.fillStyle = wavelengthRGB(l, .35); g.fillRect(LX(l), sb.y, LX(l + 2) - LX(l) + .5, sb.h); }
      st.lines.forEach(function (q) { var col = q < 380 ? 'rgba(150,110,255,1)' : q > 750 ? 'rgba(200,60,60,1)' : wavelengthRGB(q); line(g, LX(q), sb.y - 4, LX(q), sb.y + sb.h + 4, col, 2.5); });
      [100, 200, 400, 700, 1000, 2000].forEach(function (q) { text(g, q + ' nm', LX(q), sb.y + sb.h + 16, c.muted, 10, 'center'); });
      text(g, 'UV', LX(150), sb.y - 6, c.muted, 10, 'center'); text(g, 'visible', LX(520), sb.y - 6, c.muted, 10, 'center'); text(g, 'IR', LX(1300), sb.y - 6, c.muted, 10, 'center');
      set('dE', fmt(I.dE, 3) + ' eV'); set('l', fmt(I.lam, 1) + ' nm'); set('s', I.series + ' (to n = ' + st.to + ')'); set('r', I.region);
    };
    loop(S, function (dt) {
      if (st.anim > 0) {
        st.anim += dt * 1.2;
        if (st.anim >= .5 && !st.photon) { var R = Math.min(S.w * .22, S.h * .34); st.photon = { x: S.w * .25 + R * st.to / 7, y: S.h * .38, t: 0 }; }
        if (st.anim >= 1.6) { st.anim = 0; st.n = st.to; var lam = 1240 / (E(st.from) - E(st.to)); if (st.lines.indexOf(lam) < 0) st.lines.push(lam); st.photon = null; }
      }
      if (st.photon) { st.photon.x += dt * 260; st.photon.t += dt; }
      S.draw();
    });
  };

  // ---------- 8. gas in a box ----------
  sims.gas = function (el, ctx) {
    var S = build(el, ctx, .66), st = { N: 60, T: 300, V: 1, p: [], hits: 0, rate: 0, tt: 0, glow: 0 }, BOXH = .62;
    var SIG = .22;                                    // 2D Maxwell spread (world units per second) at 300 K
    function sigma() { return SIG * Math.sqrt(st.T / 300); }
    function spawn(n) {
      for (var i = 0; i < n; i++) {
        var sp = sigma() * Math.sqrt(-2 * Math.log(1 - Math.random())), a = Math.random() * TAU;
        st.p.push({ x: .02 + Math.random() * (st.V - .04), y: .02 + Math.random() * (BOXH - .04), vx: sp * Math.cos(a), vy: sp * Math.sin(a) });
      }
    }
    spawn(st.N);
    var sV = slider(S, { label: 'Volume V', min: 30, max: 100, step: 1, value: 100, fmt: function (v) { return (v / 100 * 20).toFixed(1) + ' L'; } }, function (v) { st.V = v / 100; });
    slider(S, { label: 'Temperature T', min: 100, max: 1000, step: 10, value: 300, fmt: function (v) { return v + ' K'; } }, function (v) {
      var k = Math.sqrt(v / st.T); st.p.forEach(function (q) { q.vx *= k; q.vy *= k; }); st.T = v;
    });
    slider(S, { label: 'Molecules (1 mol = 100)', min: 10, max: 150, step: 5, value: 60, fmt: function (v) { return v + ' = ' + (v / 100).toFixed(2) + ' mol'; } }, function (v) {
      if (v > st.N) spawn(v - st.N); else st.p.length = v; st.N = v;
    });
    var set = readout(S, [['P', 'Pressure P = nRT/V'], ['h', 'Hits on piston'], ['vr', 'v<sub>rms</sub> of N₂ (3D)']]);
    note(S, 'Drag the piston. A 2D picture of an ideal gas: molecules only bounce off the walls. Colour shows speed (blue slow, red fast).');
    var view;
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, k = Math.min((w - 40) / 1, (h * .62) / BOXH), ox = 20, oy = 12;
      view = { k: k, ox: ox, oy: oy };
      g.clearRect(0, 0, w, h);
      g.fillStyle = c.s2; g.fillRect(ox, oy, st.V * k, BOXH * k);
      g.strokeStyle = c.text; g.lineWidth = 3; g.beginPath(); g.moveTo(ox + st.V * k, oy); g.lineTo(ox, oy); g.lineTo(ox, oy + BOXH * k); g.lineTo(ox + st.V * k, oy + BOXH * k); g.stroke();
      var sg = sigma();
      st.p.forEach(function (q) {
        var sp = Math.hypot(q.vx, q.vy) / (SIG * 3.2), hue = Math.max(0, 230 - Math.min(1, sp) * 230);
        dot(g, ox + q.x * k, oy + q.y * k, 4, 'hsl(' + hue + ',80%,55%)');
      });
      // piston
      var px = ox + st.V * k;
      g.fillStyle = st.glow > 0 ? c.o : c.muted; g.fillRect(px, oy - 6, 9, BOXH * k + 12);
      g.fillStyle = c.text; g.fillRect(px + 9, oy + BOXH * k / 2 - 3, Math.max(10, w - px - 30), 6);
      text(g, '⇆ drag', px + 14, oy + BOXH * k / 2 - 8, c.muted, 10);
      // speed histogram (real speeds for N₂) with the 2D Maxwell curve
      var box = { x: 46, y: oy + BOXH * k + 34, w: w - 62, h: h - (oy + BOXH * k + 34) - 30 }, K = 298 / SIG, vmax = 2000, nb = 20, bins = [];
      for (var i = 0; i < nb; i++) bins.push(0);
      st.p.forEach(function (q) { var v = Math.hypot(q.vx, q.vy) * K, b = Math.min(nb - 1, Math.floor(v / vmax * nb)); bins[b]++; });
      var top = Math.max(4, st.N * .22);
      var F = frame(S, box, [0, vmax], [0, top], { xlabel: 'speed (m/s)', ylabel: 'molecules', ystep: nice(top, 3) });
      bins.forEach(function (n, j) { g.fillStyle = c.chem; g.globalAlpha = .55; g.fillRect(F.X(j * vmax / nb) + 1, F.Y(n), box.w / nb - 2, F.Y(0) - F.Y(n)); g.globalAlpha = 1; });
      var s2 = sg * K;
      curve(S, F, function (v) { return st.N * (vmax / nb) * v / (s2 * s2) * Math.exp(-v * v / (2 * s2 * s2)); }, 0, vmax, c.r, 2);
      var P = (st.N / 100) * 8.314 * st.T / (st.V * 20);
      set('P', fmt(P, 1) + ' kPa'); set('h', fmt(st.rate, 0) + ' per s'); set('vr', fmt(Math.sqrt(3 * 8.314 * st.T / .028), 0) + ' m/s');
    };
    pointer(S, {
      down: function (p) { return view && Math.abs(p.x - (view.ox + st.V * view.k)) < 26; },
      move: function (p) { var v = Math.max(.3, Math.min(1, (p.x - view.ox) / view.k)); st.V = v; sV.set(Math.round(v * 100)); },
      hover: function (p) { return view && Math.abs(p.x - (view.ox + st.V * view.k)) < 26; }
    });
    loop(S, function (dt) {
      st.p.forEach(function (q) {
        q.x += q.vx * dt; q.y += q.vy * dt;
        if (q.x < .01) { q.x = .02 - q.x; q.vx = Math.abs(q.vx); }
        if (q.x > st.V - .01) { q.x = Math.min(q.x, st.V - .01); if (q.vx > 0) { q.vx = -q.vx; st.hits++; st.glow = .08; } }
        if (q.y < .01) { q.y = .02 - q.y; q.vy = Math.abs(q.vy); }
        if (q.y > BOXH - .01) { q.y = 2 * (BOXH - .01) - q.y; q.vy = -Math.abs(q.vy); }
      });
      st.glow -= dt; st.tt += dt;
      if (st.tt > 1) { st.rate = st.hits / st.tt; st.hits = 0; st.tt = 0; }
      S.draw();
    });
  };

  // ---------- 9. acid–base titration ----------
  sims.titration = function (el, ctx) {
    var S = build(el, ctx, .6), st = { V: 0, weak: false, ind: 'php', run: false, drops: [] };
    function pH(V, weak) {
      var Ca = .1 * 25 / (25 + V), Na = .1 * V / (25 + V), Ka = weak ? 1.8e-5 : 1e3, lo = -14, hi = 0;
      for (var i = 0; i < 70; i++) {
        var mid = (lo + hi) / 2, hh = Math.pow(10, mid), f = hh + Na - 1e-14 / hh - Ca * Ka / (Ka + hh);
        if (f > 0) hi = mid; else lo = mid;
      }
      return -(lo + hi) / 2;
    }
    var sV = slider(S, { label: '0.10 M NaOH added', min: 0, max: 50, step: .1, value: 0, fmt: function (v) { return v.toFixed(1) + ' mL'; } }, function (v) { st.V = v; st.run = false; S.draw(); });
    seg(S, 'Acid (25 mL of 0.10 M)', [['s', 'HCl (strong)'], ['w', 'CH₃COOH (weak)']], 's', function (v) { st.weak = v === 'w'; S.draw(); });
    seg(S, 'Indicator', [['php', 'Phenolphthalein'], ['mo', 'Methyl orange']], 'php', function (v) { st.ind = v; S.draw(); });
    var bt = buttons(S, [['Titrate', 'play', 'go', function (b) { st.run = !st.run; if (st.V >= 50) st.V = 0; b.innerHTML = S.ctx.icon(st.run ? 'pause' : 'play') + '<span>' + (st.run ? 'Pause' : 'Titrate') + '</span>'; }], ['+1 drop', 'droplet', '', function () { st.V = Math.min(50, +(st.V + .05).toFixed(2)); sV.set(st.V); st.drops.push(0); S.draw(); }], ['Empty', 'rotate-ccw', '', function () { st.V = 0; sV.set(0); st.run = false; S.draw(); }]]);
    var set = readout(S, [['pH', 'pH'], ['eq', 'Equivalence point'], ['half', 'At half-equivalence'], ['col', 'Indicator colour']]);
    note(S, 'pH from the exact charge balance [H⁺] + [Na⁺] = [OH⁻] + [A⁻], with K<sub>a</sub> = 1.8 × 10⁻⁵ for acetic acid.');
    function indColour(p) {
      function mix(a, b, t) { t = Math.max(0, Math.min(1, t)); return 'rgb(' + [0, 1, 2].map(function (i) { return Math.round(a[i] + (b[i] - a[i]) * t); }).join(',') + ')'; }
      if (st.ind === 'php') return p < 8.2 ? 'rgba(200,225,255,.55)' : mix([240, 200, 220], [230, 73, 128], (p - 8.2) / 1.8);
      return p < 3.1 ? 'rgb(224,49,49)' : p > 4.4 ? 'rgb(250,176,5)' : mix([224, 49, 49], [250, 176, 5], (p - 3.1) / 1.3);
    }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, p = pH(st.V, st.weak);
      g.clearRect(0, 0, w, h);
      var lw = Math.min(150, w * .3), bx = lw / 2;
      // burette
      var bTop = 14, bBot = h * .45;
      g.strokeStyle = c.muted; g.lineWidth = 2; g.strokeRect(bx - 7, bTop, 14, bBot - bTop);
      var lvl = (bBot - bTop) * (1 - st.V / 50);
      g.fillStyle = 'rgba(160,190,255,.45)'; g.fillRect(bx - 6, bBot - lvl, 12, lvl);
      line(g, bx, bBot, bx, bBot + 10, c.muted, 3);
      st.drops.forEach(function (d) { dot(g, bx, bBot + 12 + d * (h * .2), 3, 'rgba(120,160,255,.9)'); });
      // flask
      var fy = h * .62, fw = lw * .78;
      g.beginPath(); g.moveTo(bx - 9, fy - 30); g.lineTo(bx - 9, fy); g.lineTo(bx - fw / 2, h - 18); g.lineTo(bx + fw / 2, h - 18); g.lineTo(bx + 9, fy); g.lineTo(bx + 9, fy - 30);
      g.save(); g.clip(); g.fillStyle = indColour(p); var fill = h - 18 - (h - 18 - fy) * .55 - st.V * .4; g.fillRect(0, fill, lw, h); g.restore();
      g.strokeStyle = c.text; g.lineWidth = 2; g.stroke();
      text(g, 'pH ' + fmt(p, 2), bx, h - 4, c.text, 12, 'center', 'alphabetic', 700);
      // titration curve
      var box = { x: lw + 30, y: 14, w: w - lw - 44, h: h - 46 };
      var F = frame(S, box, [0, 50], [0, 14], { xlabel: 'V NaOH (mL)', ylabel: 'pH', xstep: 10, ystep: 2 });
      if (st.ind === 'php') { g.fillStyle = 'rgba(230,73,128,.12)'; g.fillRect(box.x, F.Y(10), box.w, F.Y(8.2) - F.Y(10)); }
      else { g.fillStyle = 'rgba(250,140,20,.14)'; g.fillRect(box.x, F.Y(4.4), box.w, F.Y(3.1) - F.Y(4.4)); }
      g.save(); g.globalAlpha = .35; curve(S, F, function (v) { return pH(v, st.weak); }, 0, 50, c.muted, 1.5, 200); g.restore();
      curve(S, F, function (v) { return pH(v, st.weak); }, 0, Math.max(.01, st.V), c.chem, 2.6, Math.max(2, Math.round(st.V * 4)));
      line(g, F.X(25), box.y, F.X(25), box.y + box.h, c.r, 1, [4, 4]);
      text(g, 'equivalence', F.X(25) + 4, box.y + 12, c.r, 10);
      if (st.weak) { line(g, F.X(12.5), F.Y(4.74), F.X(0), F.Y(4.74), c.p, 1, [3, 3]); dot(g, F.X(12.5), F.Y(4.74), 4, c.p); text(g, 'pH = pKa = 4.74', F.X(12.5) + 6, F.Y(4.74) + 14, c.p, 10); }
      dot(g, F.X(st.V), F.Y(p), 6, indColour(p), c.text);
      set('pH', fmt(p, 2)); set('eq', '25.0 mL, pH ' + fmt(pH(25, st.weak), 2));
      set('half', st.weak ? 'pH = pKa = ' + fmt(pH(12.5, true), 2) : 'pH ' + fmt(pH(12.5, false), 2));
      set('col', st.ind === 'php' ? (p < 8.2 ? 'colourless' : p < 10 ? 'turning pink' : 'pink') : (p < 3.1 ? 'red' : p < 4.4 ? 'orange' : 'yellow'));
    };
    loop(S, function (dt) {
      if (st.run) {
        var near = Math.abs(st.V - 25) < 2.5 ? .35 : 1.6;
        st.V = Math.min(50, st.V + dt * near * 1.5);
        sV.set(+st.V.toFixed(1));
        if (Math.random() < dt * 6) st.drops.push(0);
        if (st.V >= 50) { st.run = false; bt.querySelector('button').innerHTML = S.ctx.icon('play') + '<span>Titrate</span>'; }
      }
      st.drops = st.drops.map(function (d) { return d + dt * 2.2; }).filter(function (d) { return d < 1; });
      if (st.run || st.drops.length) S.draw();
    });
  };

  // ---------- 10. reaction order and half-life ----------
  sims.kinetics = function (el, ctx) {
    var S = build(el, ctx, .72), st = { n: 1, k: .1, A0: 1, t: 0, run: true, dots: [] };
    for (var i = 0; i < 70; i++) st.dots.push({ x: Math.random(), y: Math.random(), r: Math.random() });
    var UNITS = { 0: 'M s⁻¹', 1: 's⁻¹', 2: 'M⁻¹ s⁻¹' };
    var sk;
    seg(S, 'Order', [[0, 'Zero'], [1, 'First'], [2, 'Second']], 1, function (v) { st.n = +v; st.t = 0; sk.set(st.k); S.draw(); });
    sk = slider(S, { label: 'Rate constant k', min: .02, max: .5, step: .01, value: .1, fmt: function (v) { return v.toFixed(2) + ' ' + UNITS[st.n]; } }, function (v) { st.k = v; st.t = 0; });
    slider(S, { label: 'Starting [A]₀', min: .5, max: 2, step: .1, value: 1, fmt: function (v) { return v.toFixed(1) + ' M'; } }, function (v) { st.A0 = v; st.t = 0; });
    buttons(S, [['Pause', 'pause', 'go', function (b) { st.run = !st.run; b.innerHTML = S.ctx.icon(st.run ? 'pause' : 'play') + '<span>' + (st.run ? 'Pause' : 'Play') + '</span>'; }], ['Restart', 'rotate-ccw', '', function () { st.t = 0; }]]);
    var set = readout(S, [['law', 'Rate law'], ['half', 'First half-life'], ['t', 'Time'], ['A', '[A] now']]);
    note(S, 'Zero: [A] = [A]₀ − kt. First: ln[A] = ln[A]₀ − kt, t½ = 0.693/k. Second: 1/[A] = 1/[A]₀ + kt, t½ = 1/(k[A]₀).');
    function A(t) {
      if (st.n === 0) return Math.max(0, st.A0 - st.k * t);
      if (st.n === 1) return st.A0 * Math.exp(-st.k * t);
      return 1 / (1 / st.A0 + st.k * t);
    }
    function tmax() { return st.n === 0 ? st.A0 / st.k * 1.25 : st.n === 1 ? 5 * Math.LN2 / st.k : 9 / (st.k * st.A0); }
    function half() { return st.n === 0 ? st.A0 / (2 * st.k) : st.n === 1 ? Math.LN2 / st.k : 1 / (st.k * st.A0); }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, T = tmax(), a = A(st.t);
      g.clearRect(0, 0, w, h);
      var b1 = { x: 44, y: 16, w: w - 58, h: h * .42 };
      var F = frame(S, b1, [0, T], [0, 2.1], { xlabel: 't (s)', ylabel: '[A] (M)', ystep: .5 });
      // half-life markers
      var tt = 0, conc = st.A0;
      for (var j = 0; j < 3; j++) {
        var th = st.n === 0 ? conc / (2 * st.k) : st.n === 1 ? Math.LN2 / st.k : 1 / (st.k * conc);
        tt += th; conc /= 2;
        if (tt > T) break;
        line(g, F.X(tt), F.Y(0), F.X(tt), F.Y(conc), c.p, 1, [3, 3]);
        line(g, F.X(0), F.Y(conc), F.X(tt), F.Y(conc), c.p, 1, [3, 3]);
        text(g, 't½ = ' + fmt(th, 1) + ' s', F.X(tt) + 4, F.Y(conc) - 4, c.p, 10);
      }
      curve(S, F, A, 0, T, c.chem, 2.6);
      dot(g, F.X(Math.min(st.t, T)), F.Y(a), 5, c.r, c.surface);
      // straight-line plot
      var b2 = { x: 44, y: h * .6, w: (w - 58) * (w < 480 ? .58 : .62), h: h * .3 };
      var lin = st.n === 0 ? { f: A, lab: '[A]', yr: [0, st.A0 * 1.05] } : st.n === 1 ? { f: function (t) { return Math.log(A(t)); }, lab: 'ln[A]', yr: [Math.log(A(T)) - .2, Math.log(st.A0) + .2] } : { f: function (t) { return 1 / A(t); }, lab: '1/[A]', yr: [0, 1 / A(T) * 1.05] };
      var F2 = frame(S, b2, [0, T], lin.yr, { ylabel: lin.lab + ' is a straight line', ystep: nice(lin.yr[1] - lin.yr[0], 3) });
      curve(S, F2, lin.f, 0, T, c.accent, 2.4);
      dot(g, F2.X(Math.min(st.t, T)), F2.Y(lin.f(Math.min(st.t, T))), 4, c.r);
      // beaker of molecules
      var bx = b2.x + b2.w + 26, bw = w - bx - 14, by = b2.y - 6, bh = b2.h + 12, live = Math.round(70 * a / 2);
      g.strokeStyle = c.text; g.lineWidth = 2; g.beginPath(); g.moveTo(bx, by); g.lineTo(bx, by + bh); g.lineTo(bx + bw, by + bh); g.lineTo(bx + bw, by); g.stroke();
      st.dots.forEach(function (d, i) { if (i < live) dot(g, bx + 6 + d.x * (bw - 12), by + 6 + d.y * (bh - 12), 3, c.chem); });
      text(g, 'molecules of A', bx + bw / 2, by + bh + 14, c.muted, 10, 'center');
      set('law', 'rate = k[A]' + (st.n === 1 ? '' : st.n === 0 ? '⁰' : '²'));
      set('half', fmt(half(), 1) + ' s' + (st.n === 1 ? ' (always the same)' : st.n === 2 ? ' (doubles each time)' : ' (halves each time)'));
      set('t', fmt(st.t, 1) + ' s'); set('A', fmt(a, 3) + ' M');
    };
    loop(S, function (dt) {
      if (!st.run) return;
      st.t += dt * tmax() / 9;
      if (st.t > tmax()) st.t = 0;
      st.dots.forEach(function (d) { d.x += (Math.random() - .5) * .01; d.y += (Math.random() - .5) * .01; d.x = Math.max(0, Math.min(1, d.x)); d.y = Math.max(0, Math.min(1, d.y)); });
      S.draw();
    });
  };

  // ---------- 11. unit circle ----------
  sims.unitcircle = function (el, ctx) {
    var S = build(el, ctx, .5), st = { a: 35, run: false };
    var sa = slider(S, { label: 'Angle θ', min: 0, max: 360, step: 1, value: 35, fmt: function (v) { return v + '°'; } }, function (v) { st.a = v; S.draw(); });
    buttons(S, [['Spin', 'play', 'go', function (b) { st.run = !st.run; b.innerHTML = S.ctx.icon(st.run ? 'pause' : 'play') + '<span>' + (st.run ? 'Pause' : 'Spin') + '</span>'; }]]);
    var set = readout(S, [['r', 'θ in radians'], ['s', 'sin θ'], ['c', 'cos θ'], ['t', 'tan θ'], ['q', 'Quadrant']]);
    note(S, 'Drag the point. On the unit circle P = (cos θ, sin θ); tan θ is the length cut on the tangent line x = 1.');
    var view;
    function piFrac(deg) {
      var fr = [[0, '0'], [30, 'π/6'], [45, 'π/4'], [60, 'π/3'], [90, 'π/2'], [120, '2π/3'], [135, '3π/4'], [150, '5π/6'], [180, 'π'], [210, '7π/6'], [225, '5π/4'], [240, '4π/3'], [270, '3π/2'], [300, '5π/3'], [315, '7π/4'], [330, '11π/6'], [360, '2π']];
      for (var i = 0; i < fr.length; i++) if (fr[i][0] === deg) return fr[i][1];
      return fmt(deg * Math.PI / 180, 3);
    }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, th = st.a * Math.PI / 180, narrow = w < 560;
      g.clearRect(0, 0, w, h);
      var R = narrow ? Math.min(w * .3, h * .3) : Math.min(h * .36, w * .2), cx = narrow ? w / 2 : R + 50, cy = narrow ? R + 26 : h / 2;
      view = { cx: cx, cy: cy, R: R };
      line(g, cx - R * 1.35, cy, cx + R * 1.35, cy, c.muted, 1.2); line(g, cx, cy - R * 1.35, cx, cy + R * 1.35, c.muted, 1.2);
      g.strokeStyle = c.border; g.lineWidth = 1.5; g.beginPath(); g.arc(cx, cy, R, 0, TAU); g.stroke();
      [['S', -1, -1], ['A', 1, -1], ['T', -1, 1], ['C', 1, 1]].forEach(function (q) { text(g, q[0], cx + q[1] * R * .62, cy + q[2] * R * .62, c.muted, 16, 'center', 'middle', 800); });
      var px = cx + R * Math.cos(th), py = cy - R * Math.sin(th);
      g.save(); g.strokeStyle = c.o; g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, R * .22, 0, -th, true); g.stroke(); g.restore();
      line(g, cx, cy, px, py, c.text, 2);
      line(g, cx, cy, px, cy, c.b, 3.5); line(g, px, cy, px, py, c.r, 3.5);
      var tn = Math.tan(th);
      if (Math.abs(Math.cos(th)) > .02) {
        var ty = cy - R * Math.max(-3, Math.min(3, tn));
        line(g, cx + R, cy - R * 3, cx + R, cy + R * 3, c.border, 1, [3, 3]);
        line(g, cx + R, cy, cx + R, ty, c.g, 3.5);
        line(g, cx, cy, cx + R, ty, c.g, 1, [4, 3]);
      }
      dot(g, px, py, 7, c.accent, c.surface);
      text(g, 'cos', (cx + px) / 2, cy + (Math.sin(th) >= 0 ? 15 : -7), c.b, 11, 'center', 'alphabetic', 700);
      text(g, 'sin', px + (Math.cos(th) >= 0 ? 6 : -6), (cy + py) / 2, c.r, 11, Math.cos(th) >= 0 ? 'left' : 'right', 'middle', 700);
      // graphs
      var box = narrow ? { x: 34, y: 2 * R + 60, w: w - 48, h: h - 2 * R - 86 } : { x: cx + R * 1.45 + 30, y: 20, w: w - cx - R * 1.45 - 44, h: h - 50 };
      var F = frame(S, box, [0, TAU], [-1.2, 1.2], { xstep: Math.PI / 2, ystep: .5, xfmt: function (v) { return ['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] || ''; } });
      g.save(); g.globalAlpha = .3; curve(S, F, Math.sin, 0, TAU, c.r, 1.5); curve(S, F, Math.cos, 0, TAU, c.b, 1.5); g.restore();
      curve(S, F, Math.sin, 0, th, c.r, 2.6); curve(S, F, Math.cos, 0, th, c.b, 2.6);
      dot(g, F.X(th), F.Y(Math.sin(th)), 5, c.r); dot(g, F.X(th), F.Y(Math.cos(th)), 5, c.b);
      line(g, F.X(th), box.y, F.X(th), box.y + box.h, c.o, 1, [3, 3]);
      var q = st.a % 90 === 0 ? 'on an axis' : ['I (all +)', 'II (sin +)', 'III (tan +)', 'IV (cos +)'][Math.floor((st.a % 360) / 90)];
      set('r', piFrac(st.a)); set('s', fmt(Math.sin(th), 3)); set('c', fmt(Math.cos(th), 3));
      set('t', Math.abs(Math.cos(th)) < 1e-9 ? 'undefined' : fmt(tn, 3)); set('q', q);
    };
    pointer(S, {
      down: function (p) { return view && Math.abs(Math.hypot(p.x - view.cx, p.y - view.cy) - view.R) < 30; },
      move: function (p) { var a = Math.round(Math.atan2(view.cy - p.y, p.x - view.cx) * 180 / Math.PI); st.a = (a + 360) % 360; sa.set(st.a); S.draw(); },
      hover: function (p) { return view && Math.abs(Math.hypot(p.x - view.cx, p.y - view.cy) - view.R) < 30; }
    });
    loop(S, function (dt) { if (st.run) { st.a = (st.a + dt * 40) % 360; sa.set(Math.round(st.a)); st.a = Math.round(st.a * 10) / 10; S.draw(); } });
  };

  // ---------- 12. secant to tangent ----------
  sims.tangent = function (el, ctx) {
    var FN = {
      sq: { t: 'x²', f: function (x) { return x * x; }, d: function (x) { return 2 * x; }, xr: [-2.5, 2.5], yr: [-1, 6], x0: 1 },
      cub: { t: 'x³ − 3x', f: function (x) { return x * x * x - 3 * x; }, d: function (x) { return 3 * x * x - 3; }, xr: [-2.6, 2.6], yr: [-4, 4], x0: .5 },
      sin: { t: 'sin x', f: Math.sin, d: Math.cos, xr: [-1, 7], yr: [-1.8, 1.8], x0: 1 },
      exp: { t: 'eˣ', f: Math.exp, d: Math.exp, xr: [-2.5, 2], yr: [-.5, 7], x0: 0 },
      ln: { t: 'ln x', f: Math.log, d: function (x) { return 1 / x; }, xr: [.02, 6], yr: [-3, 2.4], x0: 1 }
    };
    var S = build(el, ctx, .6), st = { fn: 'sq', x0: 1, h: 1, anim: false };
    var sx, sh;
    seg(S, 'f(x) =', Object.keys(FN).map(function (k) { return [k, FN[k].t]; }), 'sq', function (v) { st.fn = v; st.x0 = FN[v].x0; sx.input.min = FN[v].xr[0] + .1; sx.input.max = FN[v].xr[1] - .6; sx.set(st.x0); S.draw(); });
    sx = slider(S, { label: 'Point x₀', min: -2.4, max: 1.9, step: .05, value: 1, fmt: function (v) { return v.toFixed(2); } }, function (v) { st.x0 = v; S.draw(); });
    sh = slider(S, { label: 'Gap h', min: .01, max: 2, step: .01, value: 1, fmt: function (v) { return v.toFixed(2); } }, function (v) { st.h = v; st.anim = false; S.draw(); });
    buttons(S, [['Let h → 0', 'play', 'go', function () { st.anim = true; if (st.h <= .011) { st.h = 1.5; } }]]);
    var set = readout(S, [['sec', 'Secant slope'], ['der', "f′(x₀) exact"], ['gap', 'Difference']]);
    note(S, 'Secant slope = [f(x₀ + h) − f(x₀)] / h. As h → 0 it becomes the derivative, the slope of the tangent. Drag the red point.');
    var F;
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, o = FN[st.fn], x0 = st.x0, x1 = x0 + st.h, y0 = o.f(x0), y1 = o.f(x1);
      g.clearRect(0, 0, w, h);
      F = frame(S, { x: 40, y: 14, w: w - 54, h: h - 40 }, o.xr, o.yr);
      curve(S, F, o.f, o.xr[0], o.xr[1], c.text, 2.6, 400);
      var m = (y1 - y0) / st.h, d = o.d(x0);
      g.save(); g.setLineDash([6, 5]); curve(S, F, function (x) { return y0 + d * (x - x0); }, o.xr[0], o.xr[1], c.g, 1.6); g.restore();
      curve(S, F, function (x) { return y0 + m * (x - x0); }, o.xr[0], o.xr[1], c.o, 2.2);
      line(g, F.X(x0), F.Y(y0), F.X(x1), F.Y(y0), c.p, 1.4, [3, 3]); line(g, F.X(x1), F.Y(y0), F.X(x1), F.Y(y1), c.p, 1.4, [3, 3]);
      if (st.h > .15) { text(g, 'h', (F.X(x0) + F.X(x1)) / 2, F.Y(y0) + (y1 >= y0 ? 14 : -6), c.p, 12, 'center', 'alphabetic', 700); }
      dot(g, F.X(x1), F.Y(y1), 5.5, c.o, c.surface); dot(g, F.X(x0), F.Y(y0), 7, c.r, c.surface);
      text(g, 'secant', F.box.x + 8, F.box.y + 14, c.o, 11, 'left', 'alphabetic', 700);
      text(g, 'tangent', F.box.x + 8, F.box.y + 28, c.g, 11, 'left', 'alphabetic', 700);
      set('sec', fmt(m, 4)); set('der', fmt(d, 4)); set('gap', fmt(Math.abs(m - d), 4));
    };
    pointer(S, {
      down: function (p) { return F && Math.hypot(p.x - F.X(st.x0), p.y - F.Y(FN[st.fn].f(st.x0))) < 26; },
      move: function (p) { var o = FN[st.fn]; st.x0 = Math.max(o.xr[0] + .1, Math.min(o.xr[1] - .6, Math.round(F.ix(p.x) * 20) / 20)); sx.set(st.x0); S.draw(); },
      hover: function (p) { return F && Math.hypot(p.x - F.X(st.x0), p.y - F.Y(FN[st.fn].f(st.x0))) < 26; }
    });
    loop(S, function (dt) {
      if (!st.anim) return;
      st.h = Math.max(.01, st.h * Math.pow(.25, dt));
      sh.set(+st.h.toFixed(2));
      if (st.h <= .0101) st.anim = false;
      S.draw();
    });
  };

  // ---------- 13. Riemann sums ----------
  sims.riemann = function (el, ctx) {
    var FN = {
      sq: { t: 'x² on [0, 2]', f: function (x) { return x * x; }, a: 0, b: 2, I: 8 / 3, yr: [0, 4.4] },
      sin: { t: 'sin x on [0, π]', f: Math.sin, a: 0, b: Math.PI, I: 2, yr: [0, 1.2] },
      exp: { t: 'eˣ on [0, 1]', f: Math.exp, a: 0, b: 1, I: Math.E - 1, yr: [0, 3] },
      rt: { t: '√x on [0, 4]', f: Math.sqrt, a: 0, b: 4, I: 16 / 3, yr: [0, 2.3] }
    };
    var S = build(el, ctx, .58), st = { fn: 'sq', n: 4, m: 'left', run: false, acc: 0 };
    seg(S, 'f(x)', Object.keys(FN).map(function (k) { return [k, FN[k].t]; }), 'sq', function (v) { st.fn = v; S.draw(); });
    var sn = slider(S, { label: 'Rectangles n', min: 1, max: 100, step: 1, value: 4 }, function (v) { st.n = v; st.run = false; S.draw(); });
    seg(S, 'Height taken at', [['left', 'Left'], ['mid', 'Middle'], ['right', 'Right']], 'left', function (v) { st.m = v; S.draw(); });
    buttons(S, [['n → 100', 'play', 'go', function () { st.n = 1; st.run = true; }]]);
    var set = readout(S, [['sum', 'Sum of rectangles'], ['I', 'Exact integral'], ['e', 'Error']]);
    note(S, '∫ f(x) dx = lim (n → ∞) Σ f(xᵢ) Δx with Δx = (b − a)/n.');
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, o = FN[st.fn], dx = (o.b - o.a) / st.n, sum = 0;
      g.clearRect(0, 0, w, h);
      var F = frame(S, { x: 40, y: 14, w: w - 54, h: h - 40 }, [o.a - (o.b - o.a) * .05, o.b + (o.b - o.a) * .05], o.yr, { xfmt: st.fn === 'sin' ? function (v) { return fmt(v, 1); } : null });
      g.save(); g.fillStyle = c.math; g.globalAlpha = .12; g.beginPath(); g.moveTo(F.X(o.a), F.Y(0));
      for (var i = 0; i <= 200; i++) { var x = o.a + (o.b - o.a) * i / 200; g.lineTo(F.X(x), F.Y(o.f(x))); }
      g.lineTo(F.X(o.b), F.Y(0)); g.fill(); g.restore();
      for (var k = 0; k < st.n; k++) {
        var xl = o.a + k * dx, xs = st.m === 'left' ? xl : st.m === 'right' ? xl + dx : xl + dx / 2, y = o.f(xs);
        sum += y * dx;
        g.fillStyle = c.accent; g.globalAlpha = .35; g.fillRect(F.X(xl), F.Y(y), F.X(xl + dx) - F.X(xl), F.Y(0) - F.Y(y)); g.globalAlpha = 1;
        if (st.n <= 40) { g.strokeStyle = c.accent; g.lineWidth = 1; g.strokeRect(F.X(xl), F.Y(y), F.X(xl + dx) - F.X(xl), F.Y(0) - F.Y(y)); }
        if (st.n <= 20) dot(g, F.X(xs), F.Y(y), 3, c.o);
      }
      curve(S, F, o.f, o.a, o.b, c.math, 2.6);
      set('sum', fmt(sum, 5)); set('I', fmt(o.I, 5)); set('e', fmt(sum - o.I, 5) + ' (' + fmt(Math.abs(sum - o.I) / o.I * 100, 2) + '%)');
    };
    loop(S, function (dt) {
      if (!st.run) return;
      st.acc += dt;
      if (st.acc > .06) { st.acc = 0; st.n = Math.min(100, st.n + (st.n < 10 ? 1 : st.n < 40 ? 2 : 5)); sn.set(st.n); S.draw(); if (st.n >= 100) st.run = false; }
    });
  };

  // ---------- 14. conics from focus, directrix and eccentricity ----------
  sims.conics = function (el, ctx) {
    var S = build(el, ctx, .62), st = { e: .6, th: 2, run: true }, L = 1.2;
    slider(S, { label: 'Eccentricity e', min: 0, max: 2, step: .01, value: .6, fmt: function (v) { return v.toFixed(2); } }, function (v) { st.e = v; S.draw(); });
    buttons(S, [['Pause P', 'pause', 'go', function (b) { st.run = !st.run; b.innerHTML = S.ctx.icon(st.run ? 'pause' : 'play') + '<span>' + (st.run ? 'Pause P' : 'Move P') + '</span>'; }]]);
    var set = readout(S, [['type', 'Curve'], ['PS', 'PS (to focus)'], ['PM', 'PM (to directrix)'], ['r', 'PS / PM']]);
    note(S, 'Every conic is the path of P with PS = e · PM, where S is the focus and M is the foot of the perpendicular on the directrix.');
    function r(th) { return L / (1 - st.e * Math.cos(th)); }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, x0 = -2.8, x1 = 4.4, k = w / (x1 - x0), X = function (x) { return (x - x0) * k; }, Y = function (y) { return h / 2 - y * k; };
      g.clearRect(0, 0, w, h);
      line(g, 0, h / 2, w, h / 2, c.border, 1); line(g, X(0), 0, X(0), h, c.border, 1);
      var dX = st.e > 0 ? -L / st.e : -Infinity;
      if (isFinite(dX) && dX > x0) { line(g, X(dX), 0, X(dX), h, c.p, 2, [6, 4]); text(g, 'directrix', X(dX) + 5, 16, c.p, 11, 'left', 'alphabetic', 700); }
      else text(g, 'directrix far away (e → 0)', 8, 16, c.p, 11);
      g.save(); g.strokeStyle = c.math; g.lineWidth = 2.8; g.beginPath();
      var pen = false;
      for (var i = 0; i <= 720; i++) {
        var th = TAU * i / 720, rr = r(th);
        if (!isFinite(rr) || Math.abs(rr) > 40) { pen = false; continue; }
        var x = rr * Math.cos(th), y = rr * Math.sin(th);
        if (pen) g.lineTo(X(x), Y(y)); else g.moveTo(X(x), Y(y));
        pen = true;
        var nx = r(th + TAU / 720);
        if (rr * nx < 0) pen = false;
      }
      g.stroke(); g.restore();
      dot(g, X(0), Y(0), 6, c.r); text(g, 'S', X(0) + 8, Y(0) - 8, c.r, 13, 'left', 'alphabetic', 800);
      var th0 = st.th, rr0 = r(th0);
      if (st.e >= 1) { var lim = Math.acos(Math.min(1, 1 / st.e)) + .15; th0 = lim + (TAU - 2 * lim) * ((Math.sin(st.th) + 1) / 2); rr0 = r(th0); }
      var P = { x: rr0 * Math.cos(th0), y: rr0 * Math.sin(th0) };
      line(g, X(0), Y(0), X(P.x), Y(P.y), c.r, 2);
      if (isFinite(dX)) { line(g, X(P.x), Y(P.y), X(dX), Y(P.y), c.p, 2); dot(g, X(dX), Y(P.y), 4, c.p); text(g, 'M', X(dX) - 6, Y(P.y) - 6, c.p, 12, 'right', 'alphabetic', 800); }
      dot(g, X(P.x), Y(P.y), 7, c.accent, c.surface); text(g, 'P', X(P.x) + 9, Y(P.y) - 9, c.accent, 13, 'left', 'alphabetic', 800);
      var PS = Math.abs(rr0), PM = isFinite(dX) ? Math.abs(P.x - dX) : Infinity;
      set('type', st.e === 0 ? 'Circle (e = 0)' : st.e < 1 ? 'Ellipse (0 < e < 1)' : Math.abs(st.e - 1) < .005 ? 'Parabola (e = 1)' : 'Hyperbola (e > 1)');
      set('PS', fmt(PS, 2)); set('PM', isFinite(PM) ? fmt(PM, 2) : '∞'); set('r', isFinite(PM) ? fmt(PS / PM, 2) : '0');
    };
    loop(S, function (dt) { if (st.run) { st.th = (st.th + dt * .7) % TAU; S.draw(); } });
  };

  // ---------- 15. dice ----------
  sims.dice = function (el, ctx) {
    var S = build(el, ctx, .55), st = { n: 2, counts: {}, total: 0, faces: [3, 4], queue: 0, tumble: 0 };
    function reset() { st.counts = {}; st.total = 0; st.queue = 0; S.draw(); }
    seg(S, 'Dice', [[1, 'One die'], [2, 'Two dice (sum)']], 2, function (v) { st.n = +v; st.faces = st.n === 1 ? [st.faces[0]] : [st.faces[0], 4]; reset(); });
    buttons(S, [['Roll', 'dices', 'go', function () { st.queue += 1; st.tumble = .45; }], ['×100', '', '', function () { st.queue += 100; }], ['×1000', '', '', function () { st.queue += 1000; }], ['Reset', 'rotate-ccw', '', reset]]);
    var set = readout(S, [['N', 'Rolls'], ['mean', 'Mean (expected)'], ['top', 'Most common']]);
    note(S, 'As the number of rolls grows, the relative frequency of each bar settles on its probability: the law of large numbers.');
    function prob(s) { return st.n === 1 ? 1 / 6 : (6 - Math.abs(s - 7)) / 36; }
    function roll() { var f = []; for (var i = 0; i < st.n; i++) f.push(1 + Math.floor(Math.random() * 6)); return f; }
    function drawDie(g, x, y, s, v, c) {
      g.save(); g.fillStyle = c.surface; g.strokeStyle = c.text; g.lineWidth = 2;
      g.beginPath(); if (g.roundRect) g.roundRect(x, y, s, s, s * .18); else g.rect(x, y, s, s); g.fill(); g.stroke();
      var P = { 1: [[.5, .5]], 2: [[.25, .25], [.75, .75]], 3: [[.25, .25], [.5, .5], [.75, .75]], 4: [[.25, .25], [.75, .25], [.25, .75], [.75, .75]], 5: [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]], 6: [[.25, .22], [.75, .22], [.25, .5], [.75, .5], [.25, .78], [.75, .78]] };
      P[v].forEach(function (p) { dot(g, x + p[0] * s, y + p[1] * s, s * .085, c.math); });
      g.restore();
    }
    S.draw = function () {
      var g = S.g, c = S.col, w = S.w, h = S.h, ds = Math.min(56, h * .2);
      g.clearRect(0, 0, w, h);
      st.faces.forEach(function (f, i) {
        g.save(); var cx = 30 + i * (ds + 16) + ds / 2, cy = 16 + ds / 2;
        if (st.tumble > 0) { g.translate(cx, cy); g.rotate(st.tumble * 9 * (i ? -1 : 1)); g.translate(-cx, -cy); }
        drawDie(g, cx - ds / 2, cy - ds / 2, ds, f, c); g.restore();
      });
      if (st.n === 2) text(g, '= ' + (st.faces[0] + st.faces[1]), 30 + 2 * (ds + 16), 16 + ds / 2, c.text, 20, 'left', 'middle', 800);
      var lo = st.n, hi = 6 * st.n, top = st.n === 1 ? .3 : .22;
      var box = { x: 44, y: ds + 40, w: w - 58, h: h - ds - 70 };
      var F = frame(S, box, [lo - .6, hi + .6], [0, top], { xstep: 1, ystep: st.n === 1 ? .05 : .05, ylabel: 'relative frequency', yfmt: function (v) { return fmt(v, 2); } });
      var bw = Math.max(4, (F.X(1) - F.X(0)) * .7);
      for (var s = lo; s <= hi; s++) {
        var fr = st.total ? (st.counts[s] || 0) / st.total : 0;
        g.fillStyle = c.math; g.globalAlpha = .7; g.fillRect(F.X(s) - bw / 2, F.Y(Math.min(fr, top)), bw, F.Y(0) - F.Y(Math.min(fr, top))); g.globalAlpha = 1;
        line(g, F.X(s) - bw / 2 - 3, F.Y(prob(s)), F.X(s) + bw / 2 + 3, F.Y(prob(s)), c.text, 2.4);
      }
      text(g, '— probability', box.x + box.w, box.y + 10, c.text, 11, 'right', 'alphabetic', 700);
      var mean = 0, best = lo;
      for (var t = lo; t <= hi; t++) { mean += t * (st.counts[t] || 0); if ((st.counts[t] || 0) > (st.counts[best] || 0)) best = t; }
      set('N', String(st.total)); set('mean', st.total ? fmt(mean / st.total, 3) + ' (' + (st.n === 1 ? '3.5' : '7') + ')' : '– (' + (st.n === 1 ? '3.5' : '7') + ')');
      set('top', st.total ? best + ' (' + fmt(100 * (st.counts[best] || 0) / st.total, 1) + '%)' : '–');
    };
    loop(S, function (dt) {
      var changed = false;
      if (st.tumble > 0) { st.tumble -= dt; st.faces = roll(); changed = true; if (st.tumble <= 0) st.tumble = 0; }
      if (st.queue > 0 && st.tumble <= 0) {
        var k = Math.min(st.queue, Math.max(1, Math.ceil(st.queue / 20)));
        for (var i = 0; i < k; i++) { var f = roll(), s = f.reduce(function (a, b) { return a + b; }, 0); st.counts[s] = (st.counts[s] || 0) + 1; st.total++; st.faces = f; }
        st.queue -= k; changed = true;
      }
      if (changed) S.draw();
    });
  };
})();
