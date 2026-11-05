// Animations, celebrations and study stats (XP, levels, day streaks, achievements).
// Everything degrades gracefully: with "reduce motion" switched on in the OS, confetti and big movements are skipped,
// and every number and badge still works.
(function () {
  'use strict';
  var JEE = window.JEE = window.JEE || {};
  var mq = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  function calm() { return mq.matches; }
  // Automated browsers (tests, screenshots) get everything visible at once.
  var robot = !!navigator.webdriver && !window.FX_FORCE;
  function load(k, f) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : f; } catch (e) { return f; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function dayKey(d) { d = d || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }

  // ---------- study stats: { xp, correct, answered, cards, run, bestRun, days: {date: actions}, ach: {id: date},
  // got: {question or card key: 1} (XP is given once per item), subj: {subject: answered}, simSeen: {id: 1} } ----------
  var S = load('jee-stats', null) || {};
  ['xp', 'correct', 'answered', 'cards', 'run', 'bestRun', 'chapters', 'perfect', 'daily'].forEach(function (k) { if (typeof S[k] !== 'number') S[k] = 0; });
  ['days', 'ach', 'got', 'subj', 'simSeen', 'perfectCh'].forEach(function (k) { if (!S[k] || typeof S[k] !== 'object') S[k] = {}; });
  function persist() { save('jee-stats', S); }

  var TITLES = ['Beginner', 'Explorer', 'Learner', 'Solver', 'Achiever', 'Challenger', 'Ranker', 'Topper', 'JEE Ninja', 'IIT Material'];
  function xpFor(l) { return 50 * l * (l - 1); }            // level 1: 0 XP, 2: 100, 3: 300, 4: 600, 5: 1000 …
  function levelOf(xp) { var l = 1; while (xpFor(l + 1) <= xp) l++; return l; }
  function levelInfo() {
    var l = levelOf(S.xp), a = xpFor(l), b = xpFor(l + 1);
    return { level: l, title: TITLES[Math.min(l, TITLES.length) - 1], xp: S.xp, from: a, to: b, pct: Math.round(100 * (S.xp - a) / (b - a)) };
  }
  function dayStreak() {
    var d = new Date(), n = 0;
    if (!S.days[dayKey(d)]) d.setDate(d.getDate() - 1);   // today not started yet: the streak runs up to yesterday
    while (S.days[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  var ACH = [
    { id: 'first', icon: 'target', t: 'First step', d: 'Answer a practice question correctly', ok: function () { return S.correct >= 1; } },
    { id: 'run5', icon: 'flame', t: 'On fire', d: '5 correct answers in a row', ok: function () { return S.bestRun >= 5; } },
    { id: 'run10', icon: 'zap', t: 'Unstoppable', d: '10 correct answers in a row', ok: function () { return S.bestRun >= 10; } },
    { id: 'c50', icon: 'trophy', t: 'Half-century', d: '50 questions answered correctly', ok: function () { return S.correct >= 50; } },
    { id: 'c200', icon: 'gem', t: 'Double century', d: '200 questions answered correctly', ok: function () { return S.correct >= 200; } },
    { id: 'cards30', icon: 'layers', t: 'Memory palace', d: 'Know 30 flashcards', ok: function () { return S.cards >= 30; } },
    { id: 'ch1', icon: 'circle-check', t: 'Chapter cleared', d: 'Mark a chapter as done', ok: function () { return S.chapters >= 1; } },
    { id: 'ch10', icon: 'list-checks', t: 'Ten down', d: 'Mark 10 chapters as done', ok: function () { return S.chapters >= 10; } },
    { id: 'perfect', icon: 'gem', t: 'Perfectionist', d: 'Get every practice question of a chapter right', ok: function () { return S.perfect >= 1; } },
    { id: 'days3', icon: 'flame', t: 'Habit forming', d: 'Study 3 days in a row', ok: function () { return dayStreak() >= 3; } },
    { id: 'days7', icon: 'flame', t: 'Week warrior', d: 'Study 7 days in a row', ok: function () { return dayStreak() >= 7; } },
    { id: 'allround', icon: 'atom', t: 'All-rounder', d: 'Answer questions in Physics, Chemistry and Maths', ok: function () { return S.subj.physics && S.subj.chemistry && S.subj.maths; } },
    { id: 'lab5', icon: 'microscope', t: 'Lab rat', d: 'Play with 5 simulations', ok: function () { return Object.keys(S.simSeen).length >= 5; } },
    { id: 'daily', icon: 'lightbulb', t: 'Daily thinker', d: 'Solve a problem of the day', ok: function () { return S.daily >= 1; } },
    { id: 'owl', icon: 'sun', t: 'Night owl', d: 'Study after 11 pm', ok: function () { var h = new Date().getHours(); return h >= 23 || h < 4; } },
    { id: 'lvl5', icon: 'graduation-cap', t: 'Rising star', d: 'Reach level 5', ok: function () { return levelOf(S.xp) >= 5; } }
  ];

  // ---------- rewards ----------
  // kind: 'answer' {key, ok, level, s, x, y} · 'card' {key, mark, x, y} · 'chapter' {key, done} · 'daily' · 'sim' {id}
  // · 'perfect' {key}. Returns the XP gained.
  function reward(kind, o) {
    o = o || {};
    var before = levelOf(S.xp), gain = 0, today = dayKey(), first = !S.days[today];
    S.days[today] = (S.days[today] || 0) + 1;
    if (kind === 'answer') {
      S.answered++;
      if (o.s) S.subj[o.s] = (S.subj[o.s] || 0) + 1;
      if (o.ok) {
        S.correct++; S.run++; S.bestRun = Math.max(S.bestRun, S.run);
        if (!S.got[o.key]) { S.got[o.key] = 1; gain = [0, 10, 15, 25][o.level] || 10; }
        if (S.run === 3 || S.run === 5 || S.run === 10 || (S.run > 10 && S.run % 5 === 0)) toast(icon('flame') + '<b>' + S.run + ' in a row!</b> Keep going.', 'hot');
      } else S.run = 0;
    } else if (kind === 'card') {
      if (o.mark === 'k' && !S.got[o.key]) { S.got[o.key] = 1; S.cards++; gain = 3; }
    } else if (kind === 'chapter') {
      if (o.done && !S.got['done:' + o.key]) { S.got['done:' + o.key] = 1; gain = 50; }
      if (o.done) S.chapters++; else S.chapters = Math.max(0, S.chapters - 1);
    } else if (kind === 'daily') {
      if (!S.got['daily:' + today]) { S.got['daily:' + today] = 1; S.daily++; gain = 15; }
    } else if (kind === 'sim') {
      if (!S.simSeen[o.id]) { S.simSeen[o.id] = 1; gain = 5; }
    } else if (kind === 'perfect') {
      if (!S.perfectCh[o.key]) { S.perfectCh[o.key] = 1; S.perfect++; gain = 100; }
    }
    if (first) {
      var st = dayStreak();
      gain += 20;
      toast(icon('flame') + '<b>Day ' + st + ' streak!</b> +20 XP for studying today.', 'hot');
    }
    S.xp += gain;
    if (gain && o.x != null) floatText(o.x, o.y, '+' + gain + ' XP');
    var after = levelOf(S.xp);
    if (after > before) {
      setTimeout(function () {
        toast(icon('graduation-cap') + '<b>Level ' + after + '!</b> You are now a ' + TITLES[Math.min(after, TITLES.length) - 1] + '.', 'level', 5000);
        confetti(0, 0, { rain: true, n: 140 });
      }, 400);
    }
    ACH.forEach(function (a) {
      if (!S.ach[a.id] && a.ok()) {
        S.ach[a.id] = today;
        setTimeout(function () { toast(icon(a.icon) + '<span><small>Achievement unlocked</small><b>' + a.t + '</b></span>', 'ach-toast', 5000); }, 700);
      }
    });
    persist();
    updateBadge(true);
    return gain;
  }

  // ---------- top-bar badge: level ring + day streak, links to the progress page ----------
  function ring(pct, r, w) {
    var c = 2 * Math.PI * r, s = r * 2 + w * 2;
    return '<svg class="ring" viewBox="0 0 ' + s + ' ' + s + '" width="' + s + '" height="' + s + '" aria-hidden="true">' +
      '<circle cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '" fill="none" stroke-width="' + w + '" class="ring-bg"/>' +
      '<circle cx="' + s / 2 + '" cy="' + s / 2 + '" r="' + r + '" fill="none" stroke-width="' + w + '" class="ring-fg" stroke-linecap="round" style="--c0:' + c.toFixed(1) + '" ' +
      'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + (c * (1 - pct / 100)).toFixed(1) + '" transform="rotate(-90 ' + s / 2 + ' ' + s / 2 + ')"/></svg>';
  }
  function updateBadge(bump) {
    var b = document.getElementById('xp-badge');
    if (!b) return;
    var L = levelInfo(), st = dayStreak();
    b.innerHTML = '<span class="xp-ring">' + ring(L.pct, 12, 3.5) + '<b>' + L.level + '</b></span>' +
      '<span class="xp-text"><b>' + S.xp.toLocaleString('en-IN') + ' XP</b><small>' + icon('flame') + st + ' day' + (st === 1 ? '' : 's') + '</small></span>';
    b.title = 'Level ' + L.level + ' · ' + L.title + ' · ' + (L.to - S.xp) + ' XP to the next level';
    if (bump && !calm()) { b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump'); }
    var hm = document.querySelector('.hero-me');
    if (hm) {
      hm.querySelector('.hm-ring').innerHTML = ring(L.pct, 44, 9) + '<span><small>Level</small><b>' + L.level + '</b></span>';
      hm.querySelector('.hm-text').innerHTML = '<b>' + L.title + '</b><small>' + S.xp.toLocaleString('en-IN') + ' XP · ' + (L.to - S.xp) + ' XP to level ' + (L.level + 1) + '</small>' +
        '<small>' + icon('target') + S.correct + ' solved · ' + icon('flame') + st + ' day streak</small>';
    }
  }

  // ---------- small helpers that need the icon set ----------
  function icon(name) {
    return '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      ((window.ICONS || {})[name] || '') + '</svg>';
  }

  // ---------- toasts ----------
  var toastBox;
  function toast(html, kind, ms) {
    if (!toastBox) { toastBox = document.createElement('div'); toastBox.className = 'toasts'; toastBox.setAttribute('aria-live', 'polite'); document.body.appendChild(toastBox); }
    var t = document.createElement('div');
    t.className = 'toast ' + (kind || '');
    t.innerHTML = html;
    toastBox.appendChild(t);
    while (toastBox.children.length > 3) toastBox.removeChild(toastBox.firstChild);
    setTimeout(function () { t.classList.add('out'); setTimeout(function () { t.remove(); }, 400); }, ms || 3200);
  }

  // ---------- floating "+10 XP" text ----------
  function floatText(x, y, text) {
    if (calm()) return;
    var s = document.createElement('span');
    s.className = 'fx-float';
    s.textContent = text;
    s.style.left = x + 'px'; s.style.top = y + 'px';
    document.body.appendChild(s);
    setTimeout(function () { s.remove(); }, 1300);
  }

  // ---------- confetti (one shared canvas, removed when idle) ----------
  var cv, cx, parts = [], raf = 0;
  function palette() {
    var cs = getComputedStyle(document.documentElement), v = function (n) { return cs.getPropertyValue(n).trim(); };
    return [v('--phy'), v('--chem'), v('--math'), v('--accent'), '#f59f00', '#ff6b6b', '#ae3ec9'].filter(Boolean);
  }
  function size() {
    var d = Math.min(window.devicePixelRatio || 1, 2);
    cv._dpr = d; cv.width = innerWidth * d; cv.height = innerHeight * d;
  }
  function confetti(x, y, o) {
    if (calm()) return;
    o = o || {};
    if (!cv) { cv = document.createElement('canvas'); cv.className = 'fx-confetti'; cv.setAttribute('aria-hidden', 'true'); document.body.appendChild(cv); cx = cv.getContext('2d'); window.addEventListener('resize', function () { if (cv) size(); }); }
    if (!raf) size();
    var n = o.n || 36, cols = palette();
    for (var i = 0; i < n; i++) {
      var a = o.rain ? Math.PI / 2 + (Math.random() - .5) * .5 : -Math.PI / 2 + (Math.random() - .5) * (o.spread || 2.4);
      var sp = o.rain ? 1 + Math.random() * 3 : (o.power || 8) * (.45 + Math.random() * .8);
      parts.push({ x: o.rain ? Math.random() * innerWidth : x, y: o.rain ? -10 - Math.random() * innerHeight * .6 : y,
        vx: Math.cos(a) * sp + (o.rain ? (Math.random() - .5) * 2 : 0), vy: Math.sin(a) * sp, g: o.rain ? .06 : .24,
        r: Math.random() * 6.28, vr: (Math.random() - .5) * .3, w: 6 + Math.random() * 6, h: 4 + Math.random() * 4,
        c: cols[i % cols.length], life: 0, max: o.rain ? 300 : 90 + Math.random() * 50, round: Math.random() < .25 });
    }
    if (!raf) raf = requestAnimationFrame(tick);
  }
  function tick() {
    var d = cv._dpr;
    cx.clearRect(0, 0, cv.width, cv.height);
    parts = parts.filter(function (p) {
      p.life++; p.vy += p.g; p.vx *= .985; p.vy *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      var alpha = Math.min(1, (p.max - p.life) / 25);
      if (alpha <= 0 || p.y > innerHeight + 40) return false;
      cx.save(); cx.globalAlpha = alpha; cx.translate(p.x * d, p.y * d); cx.rotate(p.r); cx.fillStyle = p.c;
      if (p.round) { cx.beginPath(); cx.arc(0, 0, p.h * d / 1.6, 0, 6.283); cx.fill(); }
      else cx.fillRect(-p.w * d / 2, -p.h * d / 2, p.w * d, Math.max(1, p.h * d * Math.abs(Math.cos(p.life * .12 + p.r))));
      cx.restore();
      return true;
    });
    if (parts.length) raf = requestAnimationFrame(tick);
    else { raf = 0; cx.clearRect(0, 0, cv.width, cv.height); }
  }

  // ---------- count-up numbers: <b data-count="527">0</b> ----------
  function countUp(root) {
    (root || document).querySelectorAll('[data-count]').forEach(function (el) {
      var to = +el.getAttribute('data-count'), suffix = el.getAttribute('data-suffix') || '';
      el.removeAttribute('data-count');
      if (calm() || robot || !to) { el.textContent = to.toLocaleString('en-IN') + suffix; return; }
      var t0 = 0, dur = 900 + Math.min(600, to);
      function step(t) {
        if (!t0) t0 = t;
        var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(to * e).toLocaleString('en-IN') + suffix;
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  // ---------- reveal on scroll: blocks below the fold rise in as they come into view ----------
  var io = null;
  var REVEAL = '.card, .figure, .callout, .illus, .derive, .formula, .sr-item, .topic-item, .chapter-row, .subject-col, .syl-ch, .ach, .tile, .sim-card, .daily, .concept';
  function reveal(root) {
    if (calm() || robot || !('IntersectionObserver' in window)) return;
    if (!io) io = new IntersectionObserver(function (es) {
      var k = 0;
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        io.unobserve(el);
        el.style.transitionDelay = Math.min(k++, 6) * 60 + 'ms';
        el.classList.add('in');
        setTimeout(function () { el.classList.remove('reveal', 'in'); el.style.transitionDelay = ''; }, 900 + k * 60);
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    var H = innerHeight;
    root.querySelectorAll(REVEAL).forEach(function (el) {
      if (el.matches('.book-sec, .theory, .outline-card, .toc, .ch-hero, .tab-body')) return;   // too tall: reveal what is inside
      if (el.parentElement && el.parentElement.closest('.reveal')) return;
      if (el.getBoundingClientRect().top < H - 20) return;   // already on screen: the page-enter animation covers it
      el.classList.add('reveal');
      io.observe(el);
    });
  }
  function resetReveal() { if (io) io.disconnect(); io = null; }

  // ---------- press ripple on buttons, chips, options and tabs ----------
  document.addEventListener('pointerdown', function (e) {
    if (calm()) return;
    var b = e.target.closest && e.target.closest('.btn, .chip, .opt, .tab, .topic-foot a, .home-search, .sim-btn, .xp-badge');
    if (!b || b.disabled) return;
    var r = b.getBoundingClientRect(), s = document.createElement('span'), d = Math.max(r.width, r.height) * 2;
    s.className = 'ripple';
    s.style.width = s.style.height = d + 'px';
    s.style.left = (e.clientX - r.left - d / 2) + 'px'; s.style.top = (e.clientY - r.top - d / 2) + 'px';
    b.appendChild(s);
    setTimeout(function () { s.remove(); }, 600);
  }, { passive: true });

  JEE.fx = {
    calm: calm, robot: robot, stats: S, levelInfo: levelInfo, xpFor: xpFor, titles: TITLES, dayStreak: dayStreak, dayKey: dayKey,
    achievements: ACH, reward: reward, toast: toast, confetti: confetti, floatText: floatText, countUp: countUp,
    reveal: reveal, resetReveal: resetReveal, ring: ring, updateBadge: updateBadge, save: persist
  };
})();
