// Book chapter: Oscillations and Waves. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- helpers ----------
function curve(f, x0, x1, steps) { var p = []; for (var k = 0; k <= steps; k++) { var x = x0 + (x1 - x0) * k / steps; p.push([x, f(x)]); } return p; }
function bump(cx, base, h, color) { return D.poly(curve(function (x) { return base - h * Math.exp(-Math.pow((x - cx) / 14, 2)); }, cx - 42, cx + 42, 60), { color: color, w: 2.4 }); }

// ---------- figures ----------
var figSHM = D.plot({
  w: 440, h: 230, x: [0, 2.2], y: [-1.35, 1.45], xlabel: 't', ylabel: '', xticks: [[0.5, 'T/2'], [1, 'T'], [1.5, '3T/2'], [2, '2T']], yticks: [[1, 'max'], [-1, '−max']],
  fns: [{ f: function (t) { return Math.sin(2 * PI * t); }, color: 'c', label: 'x', lx: 0.25, ly: 1.22, anchor: 'middle' },
    { f: function (t) { return Math.cos(2 * PI * t); }, color: 'g', dash: '6 4', label: 'v', lx: 1.0, ly: 1.22, anchor: 'middle' },
    { f: function (t) { return -Math.sin(2 * PI * t); }, color: 'r', w: 1.8, label: 'a', lx: 0.75, ly: 1.22, anchor: 'middle' }],
  label: 'Displacement, velocity and acceleration in SHM'
});

var figRef = (function () {
  var cx = 110, cy = 120, r = 80, th = 50 * PI / 180, Px = cx + r * Math.cos(th), Py = cy - r * Math.sin(th), p = [];
  p.push(D.circle(cx, cy, r, { color: 'm', w: 1.4 }), D.line(cx, cy - r - 14, cx, cy + r + 14, { color: 'm', w: 1, dash: '3 3' }), D.line(cx - r - 10, cy, cx + r + 10, cy, { color: 'm', w: 1, dash: '3 3' }));
  p.push(D.line(cx, cy, Px, Py, { color: 'c', w: 2 }), D.angle(cx, cy, 24, 0, 50, 'ωt + φ', { lr: 26, size: 12 }), D.text((cx + Px) / 2 - 8, (cy + Py) / 2 - 8, 'A', { math: true, color: 'c' }));
  p.push(D.arrow(Px, Py, Px - 34 * Math.sin(th), Py - 34 * Math.cos(th), { color: 'g', w: 1.8, head: 7 }), D.text(Px - 10, Py - 34, 'Aω', { math: true, color: 'g', size: 12 }));
  p.push(D.line(Px, Py, 230, Py, { color: 'o', w: 1.1, dash: '4 3' }), D.dot(cx, Py, { color: 'o', r: 5 }), D.dot(Px, Py, { color: 'c', r: 5 }), D.text(Px + 10, Py + 12, 'P', { math: true }), D.text(cx - 16, Py - 12, 'Q', { math: true, color: 'o' }));
  var g = []; for (var k = 0; k <= 120; k++) { var u = k / 120; g.push([230 + 170 * u, cy - r * Math.sin(th + 2 * PI * u * 1.3)]); }
  p.push(D.line(230, cy, 405, cy, { color: 'm', w: 1 }), D.poly(g, { color: 'o', w: 2.2 }), D.text(318, 220, 'height of Q against time: a sine curve', { size: 12, color: 'o', math: false }));
  return D.svg(420, 230, p, 'SHM as the projection of uniform circular motion');
})();

var figVX = D.plot({
  w: 340, h: 220, x: [-1.5, 1.5], y: [-1.35, 1.35], xlabel: 'x', ylabel: 'v', noOrigin: true, xticks: [], yticks: [],
  pts: [{ x: 1, y: 0, label: 'A', pos: 'se' }, { x: -1, y: 0, label: '−A', pos: 'sw' }, { x: 0, y: 1, label: 'Aω', pos: 'ne' }, { x: 0, y: -1, label: '−Aω', pos: 'se' }],
  param: [{ fx: function (t) { return Math.cos(t); }, fy: function (t) { return Math.sin(t); }, t: [0, 2 * PI], color: 'c' }],
  texts: [{ x: 0.72, y: 1.05, s: 'ellipse', color: 'c', size: 12, anchor: 'start' }],
  label: 'Velocity against displacement in SHM'
});

var figSpring = D.svg(420, 160, [
  D.ground(30, 30, 30, 120, { side: -1 }), D.ground(30, 120, 400, 120, { side: -1 }),
  D.spring(30, 95, 240, 95, { coils: 10, amp: 9 }), D.block(240, 70, 60, 50, 'm', { math: true }),
  D.line(190, 34, 190, 120, { color: 'm', dash: '4 3', w: 1.1 }), D.text(190, 140, 'x = 0', { size: 12, color: 'm', math: false }),
  D.arrow(190, 40, 240, 40, { color: 'c', w: 1.6, head: 7, label: 'x', ly: -10 }),
  D.arrow(300, 60, 246, 60, { color: 'r', w: 2.4, head: 8 }), D.text(306, 58, 'F = −kx', { color: 'r', size: 12, anchor: 'start' }),
  D.text(360, 140, 'smooth floor', { size: 12, color: 'm', math: false }), D.text(130, 75, 'k', { math: true, color: 'm' })
], 'Spring-mass system');

var figSprings = D.row([
  [D.svg(150, 200, [D.ground(30, 15, 120, 15), D.spring(75, 15, 75, 75, { coils: 5, amp: 8 }), D.text(95, 45, 'k₁', { size: 13, anchor: 'start' }), D.dot(75, 75, { r: 3 }),
    D.spring(75, 75, 75, 135, { coils: 5, amp: 8 }), D.text(95, 105, 'k₂', { size: 13, anchor: 'start' }), D.block(55, 135, 40, 34, 'm', { math: true })], 'springs in series'), 'series: 1/k = 1/k₁ + 1/k₂'],
  [D.svg(150, 200, [D.ground(25, 15, 125, 15), D.spring(50, 15, 50, 120, { coils: 7, amp: 8 }), D.spring(100, 15, 100, 120, { coils: 7, amp: 8 }), D.text(30, 70, 'k₁', { size: 13, anchor: 'end' }), D.text(120, 70, 'k₂', { size: 13, anchor: 'start' }),
    D.rect(40, 120, 70, 6, { color: 'k', fill: 'm' }), D.block(55, 126, 40, 34, 'm', { math: true })], 'springs in parallel'), 'parallel: k = k₁ + k₂']
]);

var figEnergy = D.plot({
  w: 400, h: 230, x: [-1.35, 1.35], y: [0, 1.3], xlabel: 'x', ylabel: 'energy', mathLabels: false, noOrigin: true, xticks: [[-1, '−A'], [1, 'A'], [0, '0']], yticks: [],
  fns: [{ f: function (x) { return x * x; }, from: -1, to: 1, color: 'o', label: 'U = ½kx²', lx: 0.62, ly: 0.2, math: false },
    { f: function (x) { return 1 - x * x; }, from: -1, to: 1, color: 'g', label: 'K', lx: -0.12, ly: 0.88 },
    { f: function () { return 1; }, from: -1, to: 1, color: 'k', w: 1.6, dash: '5 4' }],
  texts: [{ x: -1.05, y: 1.12, s: 'total E = ½kA² (constant)', size: 12, color: 'k', anchor: 'start' }],
  label: 'Kinetic and potential energy against displacement'
});

var figPendulum = (function () {
  var px = 150, py = 24, L = 160, th = 25 * PI / 180, bx = px + L * Math.sin(th), by = py + L * Math.cos(th);
  var ux = Math.sin(th), uy = Math.cos(th), tx = -Math.cos(th), ty = Math.sin(th);
  return D.svg(320, 270, [
    D.ground(90, py, 210, py, { side: -1 }), D.line(px, py, px, py + L + 20, { color: 'm', w: 1, dash: '4 3' }),
    D.angle(px, py, L, -112, -68, '', { color: 'm', w: 1 }),
    D.line(px, py, bx, by, { color: 'k', w: 1.8 }), D.angle(px, py, 42, -90, -65, 'θ', { lr: 12 }), D.text((px + bx) / 2 + 12, (py + by) / 2 - 4, 'L', { math: true }),
    D.circle(bx, by, 11, { color: 'o', fill: 'soft', w: 2 }),
    D.arrow(bx, by, bx, by + 70, { color: 'r', w: 2, label: 'mg', at: 'end', lx: -16, ly: -2 }),
    D.arrow(bx, by, bx - ux * 56, by - uy * 56, { color: 'b', w: 2, label: 'T', lx: -12, ly: 0 }),
    D.arrow(bx, by, bx + tx * 58, by + ty * 58, { color: 'g', w: 2.2, label: 'mg sin θ', at: 'end', lx: -6, ly: 14, size: 12 }),
    D.arrow(bx, by, bx + ux * 64, by + uy * 64, { color: 'r', w: 1.3, dash: '4 3', label: 'mg cos θ', at: 'end', lx: 30, ly: 2, size: 12 })
  ], 'Forces on a simple pendulum');
})();

var figDamped = D.plot({
  w: 420, h: 210, x: [0, 10], y: [-1.15, 1.25], xlabel: 't', ylabel: 'x', xticks: [], yticks: [[1, 'A']],
  fns: [{ f: function (t) { return Math.exp(-0.22 * t) * Math.cos(3 * t); }, color: 'c', steps: 500 },
    { f: function (t) { return Math.exp(-0.22 * t); }, color: 'r', w: 1.2, dash: '5 4', label: 'A e^{−bt/2m}', lx: 3.4, ly: 0.75 },
    { f: function (t) { return -Math.exp(-0.22 * t); }, color: 'r', w: 1.2, dash: '5 4' }],
  label: 'Damped oscillation: the amplitude decays exponentially'
});

var figResonance = D.plot({
  w: 420, h: 240, x: [0, 2.2], y: [0, 5.6], xlabel: 'ω_d', ylabel: 'amplitude', mathLabels: false, xticks: [[1, 'ω₀']], yticks: [],
  fns: [{ f: function (r) { return 1 / Math.sqrt(Math.pow(1 - r * r, 2) + Math.pow(r / 5, 2)); }, color: 'r', steps: 400, label: 'light damping', lx: 1.08, ly: 5.1, math: false },
    { f: function (r) { return 1 / Math.sqrt(Math.pow(1 - r * r, 2) + Math.pow(r / 2, 2)); }, color: 'o', steps: 400, label: 'more damping', lx: 1.2, ly: 2.25, math: false },
    { f: function (r) { return 1 / Math.sqrt(Math.pow(1 - r * r, 2) + Math.pow(r / 0.8, 2)); }, color: 'b', steps: 400, label: 'heavy damping', lx: 1.5, ly: 0.95, math: false }],
  segs: [{ x1: 1, y1: 0, x2: 1, y2: 5.6, color: 'm', dash: '3 3', w: 1 }],
  label: 'Amplitude of forced oscillations against driving frequency'
});

var figTransLong = (function () {
  var p = [], k;
  p.push(D.text(20, 18, 'transverse: particles move ⟂ to the wave', { size: 12, color: 'c', anchor: 'start', math: false }));
  for (k = 0; k <= 24; k++) {
    var x = 30 + k * 15, y = 70 - 30 * Math.sin(2 * PI * k / 12), vy = -Math.cos(2 * PI * k / 12);
    p.push(D.dot(x, y, { color: 'c', r: 3.5 }));
    if (k % 3 === 0 && Math.abs(vy) > 0.3) p.push(D.arrow(x, y, x, y + (vy > 0 ? -16 : 16), { color: 'r', w: 1.2, head: 5 }));
  }
  p.push(D.arrow(310, 126, 395, 126, { color: 'g', w: 1.8, head: 7 }), D.text(302, 126, 'wave travels', { size: 11, color: 'g', anchor: 'end', math: false }));
  p.push(D.text(20, 150, 'longitudinal: particles move ∥ to the wave', { size: 12, color: 'o', anchor: 'start', math: false }));
  for (k = 0; k <= 40; k++) { var xl = 30 + k * 9 - 12 * Math.sin(2 * PI * (k - 5) / 20); p.push(D.line(xl, 164, xl, 214, { color: 'o', w: 1.4 })); }
  p.push(D.text(75, 228, 'C', { size: 12, bold: true, color: 'o' }), D.text(165, 228, 'R', { size: 12, bold: true, color: 'o' }), D.text(255, 228, 'C', { size: 12, bold: true, color: 'o' }), D.text(345, 228, 'R', { size: 12, bold: true, color: 'o' }));
  return D.svg(420, 238, p, 'Transverse and longitudinal waves');
})();

var figWave = D.plot({
  w: 440, h: 220, x: [0, 2.3], y: [-1.3, 1.6], xlabel: 'x', ylabel: 'y', xticks: [], yticks: [],
  fns: [{ f: function (x) { return Math.sin(2 * PI * x); }, color: 'c' }],
  segs: [{ x1: 0.25, y1: 1, x2: 0.25, y2: 1.38, color: 'm', w: 1, dash: '3 3' }, { x1: 1.25, y1: 1, x2: 1.25, y2: 1.38, color: 'm', w: 1, dash: '3 3' }],
  extra: function (X, Y) {
    return [D.arrow(X(0.25), Y(1.32), X(1.25), Y(1.32), { color: 'r', w: 1.4, head: 7, both: true, label: 'λ', ly: -10 }),
      D.arrow(X(1.75), Y(0), X(1.75), Y(-1), { color: 'o', w: 1.4, head: 7, both: true, label: 'A', lx: 12, ly: 0 }),
      D.arrow(X(1.95), Y(1.1), X(2.25), Y(1.1), { color: 'g', w: 1.8, head: 7, label: 'v', ly: -10 })];
  },
  label: 'Snapshot of a sinusoidal wave'
});

var figReflect = D.svg(420, 220, [
  D.text(20, 18, 'fixed (rigid) end: reflected pulse is inverted', { size: 12, color: 'm', anchor: 'start', math: false }),
  D.line(20, 80, 380, 80, { color: 'm', w: 1.2 }), D.ground(380, 35, 380, 120, { side: -1 }),
  bump(110, 80, 32, 'c'), D.arrow(150, 50, 190, 50, { color: 'c', w: 1.6, head: 6 }), D.text(110, 98, 'incident', { size: 11, color: 'c', math: false }),
  bump(290, 80, -32, 'r'), D.arrow(250, 110, 210, 110, { color: 'r', w: 1.6, head: 6 }), D.text(290, 60, 'reflected', { size: 11, color: 'r', math: false }),
  D.text(20, 138, 'free end (ring on a smooth rod): reflected pulse is upright', { size: 12, color: 'm', anchor: 'start', math: false }),
  D.line(20, 195, 376, 195, { color: 'm', w: 1.2 }), D.line(384, 145, 384, 215, { color: 'k', w: 3 }), D.circle(384, 195, 6, { color: 'k', w: 1.6 }),
  bump(110, 195, 32, 'c'), D.arrow(150, 165, 190, 165, { color: 'c', w: 1.6, head: 6 }),
  bump(290, 195, 32, 'r'), D.arrow(250, 165, 210, 165, { color: 'r', w: 1.6, head: 6 })
], 'Reflection of a pulse at a fixed end and at a free end');

var figStanding = (function () {
  var p = [], x0 = 40, x1 = 340, rows = [[1, 'n = 1: L = λ/2 (fundamental)'], [2, 'n = 2: L = λ (2nd harmonic)'], [3, 'n = 3: L = 3λ/2 (3rd harmonic)']];
  rows.forEach(function (r, i) {
    var n = r[0], yc = 45 + i * 85, a = 26;
    p.push(D.line(x0, yc, x1, yc, { color: 'm', w: 0.8, dash: '2 4' }));
    p.push(D.poly(curve(function (x) { return yc - a * Math.sin(n * PI * (x - x0) / (x1 - x0)); }, x0, x1, 120), { color: 'c', w: 2.2 }));
    p.push(D.poly(curve(function (x) { return yc + a * Math.sin(n * PI * (x - x0) / (x1 - x0)); }, x0, x1, 120), { color: 'c', w: 1.4, dash: '5 4' }));
    for (var j = 0; j <= n; j++) { var xn = x0 + (x1 - x0) * j / n; p.push(D.dot(xn, yc, { color: 'r', r: 4 })); }
    for (j = 0; j < n; j++) { var xa = x0 + (x1 - x0) * (j + 0.5) / n; p.push(D.text(xa, yc + a + 10, 'A', { size: 11, color: 'g', bold: true })); }
    p.push(D.text(x0 - 6, yc - 34, r[1], { size: 12, anchor: 'start', math: false }));
    p.push(D.rect(x0 - 10, yc - 10, 8, 20, { color: 'k', fill: 'm' }), D.rect(x1 + 2, yc - 10, 8, 20, { color: 'k', fill: 'm' }));
  });
  p.push(D.dot(360, 252, { color: 'r', r: 4 }), D.text(368, 252, 'node', { size: 11, anchor: 'start', math: false }));
  return D.svg(420, 262, p, 'Standing waves on a string fixed at both ends');
})();

var figPipes = (function () {
  var p = [];
  function pipe(x, y, w, closed, fn, label) {
    p.push(D.line(x, y - 16, x + w, y - 16, { color: 'k', w: 2 }), D.line(x, y + 16, x + w, y + 16, { color: 'k', w: 2 }));
    if (closed) p.push(D.line(x, y - 16, x, y + 16, { color: 'k', w: 4 }));
    p.push(D.poly(curve(function (u) { return y - 12 * fn((u - x) / w); }, x, x + w, 80), { color: 'c', w: 1.8 }));
    p.push(D.poly(curve(function (u) { return y + 12 * fn((u - x) / w); }, x, x + w, 80), { color: 'c', w: 1.8 }));
    p.push(D.text(x + w / 2, y + 30, label, { size: 11, math: false }));
  }
  p.push(D.text(105, 14, 'closed at one end', { size: 12, bold: true, math: false }), D.text(315, 14, 'open at both ends', { size: 12, bold: true, math: false }));
  [1, 3, 5].forEach(function (m, i) { pipe(30, 52 + i * 75, 150, true, function (s) { return Math.sin(m * PI * s / 2); }, m === 1 ? 'L = λ/4: f₁ = v/4L' : (m + 'f₁ (' + (m === 3 ? '1st' : '2nd') + ' overtone)')); });
  [1, 2, 3].forEach(function (m, i) { pipe(240, 52 + i * 75, 150, false, function (s) { return Math.cos(m * PI * s); }, m === 1 ? 'L = λ/2: f₁ = v/2L' : (m + 'f₁ (' + (m === 2 ? '1st' : '2nd') + ' overtone)')); });
  return D.svg(420, 262, p, 'Displacement patterns of standing waves in organ pipes');
})();

var figBeats = D.plot({
  w: 440, h: 210, x: [0, 1], y: [-2.3, 2.6], xlabel: 't', ylabel: 'y', xticks: [], yticks: [],
  fns: [{ f: function (t) { return Math.cos(2 * PI * 40 * t) + Math.cos(2 * PI * 44 * t); }, color: 'c', w: 1.4, steps: 900 },
    { f: function (t) { return 2 * Math.abs(Math.cos(2 * PI * 2 * t)); }, color: 'r', w: 1.3, dash: '5 4', steps: 300 },
    { f: function (t) { return -2 * Math.abs(Math.cos(2 * PI * 2 * t)); }, color: 'r', w: 1.3, dash: '5 4', steps: 300 }],
  texts: [{ x: 0.5, y: 2.42, s: '40 Hz + 44 Hz over 1 second: 4 loud beats', size: 12, color: 'r' }],
  label: 'Beats: two waves of nearly equal frequency'
});

var figDoppler = (function () {
  var p = [], sx = 285, sy = 110;
  for (var k = 1; k <= 5; k++) p.push(D.circle(sx - 11 * k, sy, 20 * k, { color: 'c', w: 1.3 }));
  p.push(D.dot(sx, sy, { color: 'r', r: 6 }), D.arrow(sx + 6, sy, sx + 40, sy, { color: 'r', w: 2, head: 7, label: 'v_s', ly: -12 }));
  p.push(D.text(450, 70, 'ahead: waves', { size: 11, color: 'g', anchor: 'end', math: false }), D.text(450, 84, 'crowded, f higher', { size: 11, color: 'g', anchor: 'end', math: false }));
  p.push(D.text(20, 70, 'behind: waves', { size: 11, color: 'o', anchor: 'start', math: false }), D.text(20, 84, 'spread out, f lower', { size: 11, color: 'o', anchor: 'start', math: false }));
  return D.svg(460, 220, p, 'Wavefronts from a moving source');
})();

// ---------- chapter text ----------
JEE.book('physics', 'oscillations-waves', {
  intro: [
    R`A child on a swing, a vibrating guitar string, your beating heart, the quartz crystal in a watch: all of these repeat their motion again and again. This is <b>oscillation</b>. When an oscillation disturbs the medium around it, the disturbance travels outward as a <b>wave</b>, carrying energy but not matter: sound, ripples on water, waves on a rope.`,
    R`This chapter first studies the simplest and most important oscillation, simple harmonic motion (SHM), in springs and pendulums, along with its energy, damping and resonance. Then it turns to waves: their types, speed and equation, superposition, reflection, standing waves in strings and pipes, beats, and the Doppler effect.`
  ],
  sections: [
    { h: R`Periodic and oscillatory motion`, t: [0], blocks: [
      R`A motion that repeats itself after equal intervals of time is <b>periodic</b>: the Earth going round the Sun, the hands of a clock. If a body moves back and forth about a fixed (mean) position, the periodic motion is called <b>oscillatory</b> or vibratory: a pendulum, a mass on a spring, the prongs of a tuning fork. Every oscillation is periodic, but not every periodic motion is an oscillation (uniform circular motion is not).`,
      { points: [R`<b>Time period T:</b> the time for one complete oscillation (unit: second).`, R`<b>Frequency ν (or f):</b> the number of oscillations per second, \(\nu = 1/T\) (unit: hertz, Hz = s⁻¹).`, R`<b>Angular frequency ω:</b> \(\omega = 2\pi\nu = 2\pi/T\) (unit: rad/s).`, R`<b>Displacement:</b> the change of any physical quantity from its mean value, for example position, angle, pressure or electric field.`] },
      { h3: R`Periodic functions` },
      R`A function f(t) is periodic with period T if \(f(t + T) = f(t)\) for all t. The simplest are \(\sin\omega t\) and \(\cos\omega t\), with period \(2\pi/\omega\). A remarkable result (Fourier's theorem) says that <b>any</b> periodic function can be built by adding sines and cosines of the frequencies ω, 2ω, 3ω, …; that is why sine-like motion is so important.`,
      { ex: { q: R`Which of these are periodic, and what are their periods? (a) \(\sin\omega t + \cos\omega t\) (b) \(\sin^2\omega t\) (c) \(e^{-\omega t}\)`,
        steps: [R`(a) \(= \sqrt2\sin(\omega t + \pi/4)\): period \(2\pi/\omega\).`, R`(b) \(= \frac12(1 - \cos2\omega t)\): period \(\pi/\omega\) (periodic, but not simple harmonic about zero).`, R`(c) decreases steadily and never repeats.`], ans: R`(a) 2π/ω (b) π/ω (c) not periodic` } },
      { tip: R`For a sum of periodic terms, the period is the LCM of the individual periods. \(\sin2\pi t + \sin3\pi t\) has periods 1 s and 2/3 s, so it repeats every 2 s.` },
      { check: { q: R`A wheel turns 300 times a minute. Find its frequency and period.`, ans: R`5 Hz; 0.2 s.` } }
    ] },

    { h: R`Simple harmonic motion and its equation`, t: [1], blocks: [
      R`<b>Simple harmonic motion</b> is oscillation in which the restoring force (and so the acceleration) is proportional to the displacement from the mean position and directed towards it: \[F = -kx\quad\Longrightarrow\quad a = -\omega^2x,\quad \omega = \sqrt{k/m}\]`,
      R`The solution of \(\dfrac{d^2x}{dt^2} + \omega^2x = 0\) is \[x(t) = A\sin(\omega t + \varphi)\] where A is the <b>amplitude</b> (maximum displacement), ω the angular frequency, \((\omega t + \varphi)\) the <b>phase</b> and φ the <b>initial phase</b> (phase constant). You can check this by differentiating twice. Using \(\cos\) instead of \(\sin\) just changes φ by π/2.`,
      { fig: figSHM, cap: R`In SHM, displacement, velocity and acceleration all vary sinusoidally with the same period. Velocity leads displacement by π/2, and acceleration is exactly opposite to displacement.` },
      { tip: R`To prove a motion is SHM, show that the net force (or torque) on the body has the form \(F = -(\text{constant})\times x\). Then \(\omega = \sqrt{\text{constant}/m}\) and \(T = 2\pi\sqrt{m/\text{constant}}\). This works for springs, pendulums, floating bodies, liquid in a U-tube and many more.` },
      { ex: { q: R`A particle moves as \(x = 0.05\sin(4\pi t + \pi/6)\) m. Find its amplitude, frequency, period and initial phase.`,
        steps: [R`Compare with \(A\sin(\omega t + \varphi)\): A = 0.05 m, ω = 4π rad/s.`, R`\(\nu = \omega/2\pi = 2\) Hz; T = 1/ν.`], ans: R`A = 5 cm, ν = 2 Hz, T = 0.5 s, φ = π/6 (30°)` } },
      { check: { q: R`Is \(x = A\sin\omega t + B\cos\omega t\) SHM?`, ans: R`Yes: it equals \(\sqrt{A^2 + B^2}\sin(\omega t + \varphi)\) with \(\tan\varphi = B/A\), so the amplitude is \(\sqrt{A^2 + B^2}\).` } }
    ] },

    { h: R`Velocity and acceleration in SHM`, t: [1], blocks: [
      { derive: R`Velocity and acceleration`, steps: [
        R`Velocity: \(v = \dfrac{dx}{dt} = A\omega\cos(\omega t + \varphi)\).`,
        R`Since \(\cos = \sqrt{1 - \sin^2}\): \(v = \pm\,\omega\sqrt{A^2 - x^2}\).`,
        R`Acceleration: \(a = \dfrac{dv}{dt} = -A\omega^2\sin(\omega t + \varphi) = -\omega^2x\).`
      ] },
      { table: { head: [R`Position`, R`Speed`, R`Acceleration`], rows: [
        [R`Mean position (x = 0)`, R`maximum, \(A\omega\)`, R`zero`], [R`Extreme position (x = ±A)`, R`zero`, R`maximum, \(\omega^2A\) (towards the mean)`]] } },
      { fig: figVX, cap: R`From \(\dfrac{x^2}{A^2} + \dfrac{v^2}{A^2\omega^2} = 1\), a graph of v against x is an ellipse. (The graph of a against x is a straight line of slope \(-\omega^2\).)` },
      { ex: { q: R`For the particle \(x = 0.05\sin(4\pi t + \pi/6)\) m, find the maximum speed and maximum acceleration.`,
        steps: [R`\(v_{max} = A\omega = 0.05\times4\pi\).`, R`\(a_{max} = A\omega^2 = 0.05\times16\pi^2\).`], ans: R`≈ 0.63 m/s and ≈ 7.9 m/s²` } },
      { ex: { q: R`A particle in SHM has amplitude 5 cm and ω = 10 rad/s. Find its speed and acceleration when it is 3 cm from the mean position.`,
        steps: [R`\(v = \omega\sqrt{A^2 - x^2} = 10\sqrt{25 - 9}\) cm/s.`, R`\(a = -\omega^2x = -100\times3\) cm/s².`], ans: R`40 cm/s; 3 m/s² towards the mean position` } },
      { check: { q: R`At what displacement is the speed half its maximum value?`, ans: R`\(\omega\sqrt{A^2 - x^2} = A\omega/2\), so \(x = \pm\frac{\sqrt3}{2}A\).` } }
    ] },

    { h: R`SHM and uniform circular motion`, t: [1], blocks: [
      R`Imagine a particle P moving round a circle of radius A at constant angular speed ω. Watch its shadow Q on a diameter. As P goes round, Q moves back and forth along the diameter between −A and +A, and its position is \(A\sin(\omega t + \varphi)\): exactly SHM.`,
      { fig: figRef, cap: R`The projection Q of a point P in uniform circular motion executes SHM. The circle is called the <b>reference circle</b>; the angle of P is the phase of the SHM.` },
      R`This picture explains everything at once: the speed of P is Aω, and its component along the diameter is largest when Q is at the centre and zero at the ends. Its centripetal acceleration \(\omega^2A\) has a component \(-\omega^2x\) along the diameter.`,
      { ex: { q: R`A particle in SHM with period 2 s moves from the mean position. How long does it take to reach half its amplitude?`,
        steps: [R`\(A/2 = A\sin\omega t\) gives \(\omega t = \pi/6\) (on the reference circle, P turns 30°).`, R`\(t = \dfrac{\pi/6}{2\pi/T} = \dfrac{T}{12}\).`], ans: R`T/12 ≈ 0.17 s` } },
      { tip: R`For time-to-travel questions, draw the reference circle and find the angle turned: time = angle/ω. From x = 0 to A/2 takes T/12, but from A/2 to A takes T/6, because the particle slows down near the extreme.` },
      { check: { q: R`How long does a particle in SHM take to go from x = −A to x = +A?`, ans: R`T/2 (half a revolution on the reference circle).` } }
    ] },

    { h: R`Phase and phase difference`, t: [2], blocks: [
      R`The <b>phase</b> \((\omega t + \varphi)\) tells us the state of the oscillation (its position and direction of motion) at any instant. Two particles with the same phase are at the same point of their cycle.`,
      R`For two SHMs of the same frequency, \(x_1 = A_1\sin(\omega t + \varphi_1)\) and \(x_2 = A_2\sin(\omega t + \varphi_2)\), the <b>phase difference</b> is \(\Delta\varphi = \varphi_2 - \varphi_1\), and it stays constant.`,
      { points: [R`Δφ = 0, 2π, …: <b>in phase</b>; they reach their extremes together in the same direction.`, R`Δφ = π, 3π, …: <b>out of phase</b> (antiphase); when one is at +A, the other is at −A.`, R`Velocity leads displacement by π/2; acceleration leads displacement by π.`] },
      { ex: { q: R`Two SHMs are \(x_1 = 4\sin(\omega t)\) and \(x_2 = 3\cos(\omega t)\). Find their phase difference and the amplitude of their sum.`,
        steps: [R`\(x_2 = 3\sin(\omega t + \pi/2)\), so Δφ = π/2.`, R`Resultant amplitude \(= \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\Delta\varphi} = \sqrt{16 + 9 + 0}\).`], ans: R`π/2; amplitude 5` } },
      { check: { q: R`Two pendulums of the same length are released from opposite extreme positions at the same time. What is their phase difference?`, ans: R`π: they are out of phase.` } }
    ] },

    { h: R`Linear and angular SHM`, t: [1], blocks: [
      R`In <b>linear SHM</b>, a particle moves to and fro along a straight line, with \(F = -kx\). In <b>angular SHM</b>, a body twists or swings about an axis, with a restoring <b>torque</b> proportional to the angular displacement: \(\tau = -C\theta\). Then \(I\alpha = -C\theta\), so \[\omega = \sqrt{\frac CI},\qquad T = 2\pi\sqrt{\frac IC}\]`,
      { adv: R`<b>Physical (compound) pendulum.</b> A rigid body pivoted at a distance d from its centre of mass: the restoring torque is \(mgd\sin\theta \approx mgd\,\theta\), so \(T = 2\pi\sqrt{\dfrac{I}{mgd}}\), where I is the moment of inertia about the pivot. For a uniform rod of length L pivoted at one end, \(I = mL^2/3\) and \(d = L/2\), so \(T = 2\pi\sqrt{2L/3g}\). <b>Torsion pendulum:</b> a disc hanging from a wire twisted through θ feels a torque −Cθ, so \(T = 2\pi\sqrt{I/C}\).` },
      { ex: { q: R`A uniform rod of length 1.5 m swings about one end. Find its period.`,
        steps: [R`\(T = 2\pi\sqrt{\dfrac{2L}{3g}} = 2\pi\sqrt{\dfrac{2\times1.5}{3\times9.8}}\).`], ans: R`≈ 2.0 s (like a 1 m simple pendulum)` } },
      { ex: { q: R`Liquid of total length L in a U-tube is pushed down on one side and released. Show it oscillates in SHM and find its period.`,
        steps: [R`If one side goes down by x, the other rises by x; the unbalanced column 2x has weight \(2xA\rho g\).`, R`Mass moving = \(LA\rho\). So \(LA\rho\,a = -2A\rho g\,x\), i.e. \(a = -\dfrac{2g}{L}x\).`], ans: R`SHM with \(T = 2\pi\sqrt{L/2g}\)` } },
      { check: { q: R`A floating cylinder is pushed down slightly and released. Is the motion SHM?`, ans: R`Yes: the extra buoyant force is proportional to the extra depth, giving \(T = 2\pi\sqrt{h/g}\), where h is the depth submerged at equilibrium.` } }
    ] },

    { h: R`Oscillations of a spring`, t: [3], blocks: [
      R`A block of mass m on a smooth floor is attached to a spring of <b>force constant</b> (spring constant) k. When the block is displaced by x, the spring pulls it back with the <b>restoring force</b> \(F = -kx\) (Hooke's law). The stiffer the spring, the larger k (unit: N/m).`,
      { fig: figSpring, cap: R`A spring-mass system: displaced by x, the block feels a restoring force −kx towards the mean position.` },
      { derive: R`Time period of a spring-mass system`, steps: [
        R`Newton's second law: \(m\dfrac{d^2x}{dt^2} = -kx\), so \(\dfrac{d^2x}{dt^2} = -\dfrac kmx\).`,
        R`Compare with \(a = -\omega^2x\): \(\omega = \sqrt{k/m}\).`,
        R`\[T = 2\pi\sqrt{\frac mk}\] The period does not depend on the amplitude, and is the same for a vertical spring (gravity only shifts the mean position).`
      ] },
      { ex: { q: R`A 0.5 kg mass is attached to a spring of constant 200 N/m. Find the period of oscillation.`,
        steps: [R`\(T = 2\pi\sqrt{0.5/200} = 2\pi\times0.05\).`], ans: R`≈ 0.31 s` } },
      { ex: { q: R`A mass hung from a vertical spring stretches it by 2 cm. Find its period of vertical oscillation.`,
        steps: [R`At equilibrium \(kx_0 = mg\), so \(m/k = x_0/g\).`, R`\(T = 2\pi\sqrt{x_0/g} = 2\pi\sqrt{0.02/9.8}\).`], ans: R`≈ 0.28 s` } },
      { h3: R`Springs in series and in parallel` },
      { fig: figSprings, cap: R`In series the same force stretches both springs; in parallel both springs stretch by the same amount.` },
      { points: [R`<b>Series:</b> the extensions add, so \(\dfrac1k = \dfrac1{k_1} + \dfrac1{k_2}\). The combination is softer than either spring.`, R`<b>Parallel:</b> the forces add, so \(k = k_1 + k_2\). The combination is stiffer.`, R`<b>Cutting a spring:</b> k is inversely proportional to the natural length. Cutting a spring in half doubles k for each piece.`] },
      { ex: { q: R`Two identical springs (constant k each) carry the same mass, first in series and then in parallel. Find the ratio of the periods.`,
        steps: [R`Series: k/2. Parallel: 2k.`, R`\(\dfrac{T_s}{T_p} = \sqrt{\dfrac{2k}{k/2}}\).`], ans: R`2 : 1` } },
      { adv: R`If a block between two springs (one on each side, both attached to walls) is displaced, both springs push it back, so they act <b>in parallel</b>: \(k = k_1 + k_2\). For two masses \(m_1, m_2\) joined by a spring on a smooth floor, use the <b>reduced mass</b> \(\mu = \dfrac{m_1m_2}{m_1 + m_2}\): \(T = 2\pi\sqrt{\mu/k}\).` },
      { check: { q: R`How does the period change if the mass on a spring is made four times larger?`, ans: R`It doubles (T ∝ √m).` } }
    ] },

    { h: R`Energy in SHM`, t: [4], blocks: [
      R`In SHM, energy keeps changing between kinetic and potential forms, but the total stays constant (if there is no friction).`,
      { derive: R`Energies in SHM`, steps: [
        R`Potential energy (work done against the restoring force): \(U = \frac12kx^2 = \frac12m\omega^2x^2\).`,
        R`Kinetic energy: \(K = \frac12mv^2 = \frac12m\omega^2(A^2 - x^2)\).`,
        R`Total energy: \(E = K + U = \frac12m\omega^2A^2 = \frac12kA^2\), a constant proportional to the square of the amplitude.`
      ] },
      { fig: figEnergy, cap: R`Potential energy is a parabola, largest at the extremes; kinetic energy is largest at the mean position. Their sum is constant.` },
      R`As functions of time, \(K = E\cos^2(\omega t + \varphi)\) and \(U = E\sin^2(\omega t + \varphi)\). Both oscillate with <b>twice</b> the frequency of the motion (period T/2), and the average of each over a cycle is E/2.`,
      { ex: { q: R`A 100 N/m spring oscillates with amplitude 10 cm. Find the total energy, and the kinetic and potential energies when x = 5 cm.`,
        steps: [R`\(E = \frac12\times100\times0.1^2 = 0.5\) J.`, R`\(U = \frac12\times100\times0.05^2 = 0.125\) J; K = E − U.`], ans: R`E = 0.5 J; U = 0.125 J; K = 0.375 J` } },
      { ex: { q: R`At what displacement are the kinetic and potential energies equal?`,
        steps: [R`\(\frac12kx^2 = \frac12\left(\frac12kA^2\right)\).`], ans: R`\(x = \pm A/\sqrt2\)` } },
      { check: { q: R`If the amplitude of an oscillator is doubled, what happens to its energy and its period?`, ans: R`The energy becomes 4 times larger; the period is unchanged.` } }
    ] },

    { h: R`The simple pendulum`, t: [5], blocks: [
      R`A <b>simple pendulum</b> is a small heavy bob hanging from a light, inextensible string from a rigid support. Pulled aside and released, it swings to and fro.`,
      { fig: figPendulum, cap: R`Forces on the bob: tension T along the string and weight mg. The component \(mg\sin\theta\) along the arc pulls the bob back towards the mean position.` },
      { derive: R`Time period of a simple pendulum`, steps: [
        R`The restoring torque about the support is \(\tau = -mgL\sin\theta\) (the tension passes through the pivot and gives no torque).`,
        R`With \(I = mL^2\): \(mL^2\alpha = -mgL\sin\theta\).`,
        R`For small angles (less than about 10°), \(\sin\theta \approx \theta\) (in radians): \(\alpha = -\dfrac gL\theta\). This is angular SHM with \(\omega = \sqrt{g/L}\).`,
        R`\[T = 2\pi\sqrt{\frac Lg}\] The period does not depend on the mass of the bob or (for small swings) on the amplitude.`
      ] },
      { ex: { q: R`Find the period of a 1 m pendulum on the Earth and on the Moon (g is one-sixth as large).`,
        steps: [R`Earth: \(T = 2\pi\sqrt{1/9.8}\).`, R`Moon: T is multiplied by \(\sqrt6\).`], ans: R`≈ 2.0 s on the Earth; ≈ 4.9 s on the Moon` } },
      { ex: { q: R`A <b>seconds pendulum</b> has a period of exactly 2 s. Find its length.`,
        steps: [R`\(L = \dfrac{gT^2}{4\pi^2} = \dfrac{9.8\times4}{4\pi^2}\).`], ans: R`≈ 0.99 m` } },
      { points: [R`In a lift accelerating upward with a, use \(g_{eff} = g + a\); downward, \(g - a\); in free fall, \(g_{eff} = 0\) and the pendulum does not oscillate.`, R`A pendulum clock with a metal rod runs slow in summer: the rod expands, L increases and T increases.`, R`For a very long pendulum (L comparable to the Earth's radius R), \(T = 2\pi\sqrt{\dfrac{1}{g(1/L + 1/R)}}\), at most about 84 minutes.`] },
      { mistake: R`Using \(T = 2\pi\sqrt{L/g}\) for large amplitudes. The formula needs small angles; at large amplitudes the period is slightly longer.` },
      { check: { q: R`How must the length change to double the period?`, ans: R`It must be made 4 times longer.` } }
    ] },

    { h: R`Damped and forced oscillations`, t: [3], blocks: [
      R`Real oscillations die out: air resistance and internal friction take away energy. Such oscillations are <b>damped</b>. If the damping force is proportional to velocity, \(F_d = -bv\), the amplitude decays exponentially: \[x = Ae^{-bt/2m}\cos(\omega't + \varphi),\qquad \omega' = \sqrt{\frac km - \frac{b^2}{4m^2}}\]`,
      { fig: figDamped, cap: R`In a damped oscillation the amplitude decreases exponentially with time; the energy (∝ amplitude²) decays as \(e^{-bt/m}\).` },
      { ex: { q: R`The amplitude of a damped oscillator falls to half in 10 s. What fraction of the original amplitude remains after 30 s?`,
        steps: [R`Each 10 s multiplies the amplitude by ½.`, R`After 30 s: \((\frac12)^3\).`], ans: R`1/8 of the original amplitude` } },
      { h3: R`Forced oscillations and resonance` },
      R`If a periodic external force \(F_0\cos\omega_dt\) keeps acting on an oscillator, after a while it oscillates at the <b>driving frequency</b> \(\omega_d\), not at its own natural frequency \(\omega_0\). These are <b>forced oscillations</b>. The amplitude depends on how close \(\omega_d\) is to \(\omega_0\): \[A = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega_d^2)^2 + (b\omega_d/m)^2}}\]`,
      { fig: figResonance, cap: R`The amplitude of forced oscillations peaks when the driving frequency is close to the natural frequency (resonance). Less damping gives a taller, sharper peak.` },
      R`When \(\omega_d \approx \omega_0\), the amplitude becomes very large: <b>resonance</b>. Pushing a swing at the right moment each time is resonance. So is tuning a radio (the circuit resonates with one station), and the shattering of a glass by a singer's note. Soldiers break step while crossing a bridge so that their marching does not resonate with it.`,
      { check: { q: R`Why does a lightly damped system have a much sharper resonance than a heavily damped one?`, ans: R`With little damping, little energy is lost per cycle, so near ω₀ the driving force can build the amplitude up very high; the peak is tall and narrow.` } }
    ] },

    { h: R`Wave motion: transverse and longitudinal waves`, t: [6], blocks: [
      R`A <b>wave</b> is a disturbance that travels through a medium, carrying energy and momentum from one place to another, while the particles of the medium only oscillate about their mean positions. A cork on a pond bobs up and down as ripples pass; it does not travel with them. Waves that need a medium are <b>mechanical waves</b>; light and other electromagnetic waves need no medium.`,
      { fig: figTransLong, cap: R`Top: in a transverse wave the particles move perpendicular to the direction of travel (crests and troughs). Bottom: in a longitudinal wave they move along it, forming compressions (C) and rarefactions (R).` },
      { table: { head: [R``, R`Transverse`, R`Longitudinal`], rows: [
        [R`Particle motion`, R`perpendicular to the wave`, R`along the wave`], [R`Made of`, R`crests and troughs`, R`compressions and rarefactions`],
        [R`Needs`, R`a medium with rigidity (solids, strings, liquid surfaces)`, R`a medium with elasticity of volume: solids, liquids and gases`], [R`Examples`, R`waves on a string, ripples, S-waves`, R`sound in air, P-waves`]] } },
      { check: { q: R`Why can't transverse mechanical waves travel through air?`, ans: R`Air has no rigidity (shear modulus), so there is no restoring force for sideways displacement.` } }
    ] },

    { h: R`Wavelength, frequency and wave speed`, t: [6], blocks: [
      { fig: figWave, cap: R`A snapshot of a sinusoidal wave: the wavelength λ is the distance between successive crests, and the amplitude A is the maximum displacement.` },
      { points: [R`<b>Amplitude A:</b> the maximum displacement of a particle from its mean position.`, R`<b>Wavelength λ:</b> the distance between two nearest points in the same phase (crest to crest, or compression to compression).`, R`<b>Period T and frequency ν:</b> the time for one oscillation of a particle, and its inverse. The frequency is set by the source and does not change when the wave enters another medium.`] },
      R`In one period, the wave moves forward by one wavelength, so the <b>wave speed</b> is \[v = \frac{\lambda}{T} = \nu\lambda\]`,
      { ex: { q: R`A tuning fork of 256 Hz produces sound in air (v = 340 m/s). Find the wavelength.`,
        steps: [R`\(\lambda = v/\nu = 340/256\).`], ans: R`≈ 1.33 m` } },
      { mistake: R`Confusing wave speed with particle speed. The wave speed v is fixed by the medium; the particle speed changes continuously, with maximum value Aω.` },
      { check: { q: R`When sound passes from air into water, which of v, ν and λ stays the same?`, ans: R`The frequency ν. Speed and wavelength both increase in water.` } }
    ] },

    { h: R`Speed of a travelling wave`, t: [7], blocks: [
      R`The speed of a mechanical wave depends on the medium: on how strongly it pulls back (an elastic property) and how much inertia it has (a density). Roughly, \(v = \sqrt{\text{elastic property}/\text{inertial property}}\).`,
      { h3: R`Transverse wave on a stretched string` },
      R`For a string under tension T with mass per unit length μ: \[v = \sqrt{\frac T\mu}\] This follows from dimensions (\([T/\mu] = \text{m}^2/\text{s}^2\)), or by riding along with a pulse: a small curved piece of string of radius R moving at v needs a centripetal force \((\mu\,\Delta l)v^2/R\), provided by the tension, \(T\Delta l/R\). Setting them equal gives \(v^2 = T/\mu\).`,
      { ex: { q: R`A string with mass 0.01 kg per metre is under a tension of 100 N. Find the speed of transverse waves on it.`,
        steps: [R`\(v = \sqrt{100/0.01}\).`], ans: R`100 m/s` } },
      { h3: R`Speed of sound in a fluid` },
      R`For longitudinal waves, \(v = \sqrt{B/\rho}\), where B is the bulk modulus (in a solid rod, \(v = \sqrt{Y/\rho}\)). Sound is fastest in solids, slower in liquids and slowest in gases.`,
      { points: [R`<b>Newton's formula:</b> Newton assumed the compressions are isothermal, so B = P and \(v = \sqrt{P/\rho}\approx 280\) m/s for air at STP, about 15% too low.`, R`<b>Laplace's correction:</b> the compressions and rarefactions are too fast for heat to flow, so they are adiabatic and \(B = \gamma P\): \(v = \sqrt{\gamma P/\rho}\approx 331\) m/s, matching experiment.`] },
      R`Since \(P/\rho = RT/M\), \(v = \sqrt{\gamma RT/M}\). So the speed of sound does not depend on pressure (at constant temperature) but increases with temperature (\(v\propto\sqrt T\)) and with humidity (moist air is less dense).`,
      { ex: { q: R`The speed of sound at 0 °C is 331 m/s. Find it at 27 °C.`,
        steps: [R`\(v_2 = 331\sqrt{\dfrac{300}{273}}\).`], ans: R`≈ 347 m/s (about 0.6 m/s faster per °C)` } },
      { check: { q: R`If the tension in a string is made four times larger, how does the wave speed change?`, ans: R`It doubles (v ∝ √T).` } }
    ] },

    { h: R`Displacement relation for a progressive wave`, t: [8], blocks: [
      R`A sinusoidal wave travelling in the +x direction is described by \[y(x, t) = A\sin(kx - \omega t + \varphi)\] where \(k = 2\pi/\lambda\) is the <b>angular wave number</b> (rad/m) and \(\omega = 2\pi\nu\) the angular frequency. A wave travelling in the −x direction has \((kx + \omega t + \varphi)\).`,
      R`A point of constant phase moves so that \(kx - \omega t\) is constant, so its speed is \(v = \dfrac{dx}{dt} = \dfrac\omega k = \nu\lambda\).`,
      { points: [R`<b>Particle velocity:</b> \(v_p = \dfrac{\partial y}{\partial t} = -A\omega\cos(kx - \omega t + \varphi)\), maximum Aω.`, R`<b>Slope of the string:</b> \(\dfrac{\partial y}{\partial x}\). Then \(v_p = -v\dfrac{\partial y}{\partial x}\): particle velocity = −(wave speed) × (slope).`, R`<b>Phase difference</b> between two points a distance Δx apart: \(\Delta\varphi = \dfrac{2\pi}{\lambda}\Delta x\).`] },
      { ex: { q: R`A wave is \(y = 0.05\sin\pi(2x - 100t)\), with x and y in metres and t in seconds. Find the wavelength, frequency, wave speed and maximum particle speed.`,
        steps: [R`k = 2π, so λ = 1 m. ω = 100π, so ν = 50 Hz.`, R`v = νλ; \(v_{p,max} = A\omega = 0.05\times100\pi\).`], ans: R`λ = 1 m, ν = 50 Hz, v = 50 m/s, maximum particle speed ≈ 15.7 m/s` } },
      { tip: R`Read the wave direction from the signs: if x and t terms have opposite signs, the wave moves towards +x; if the same sign, towards −x. The speed is always (coefficient of t)/(coefficient of x).` },
      { check: { q: R`Two points on a wave are λ/4 apart. What is their phase difference?`, ans: R`π/2.` } }
    ] },

    { h: R`Principle of superposition of waves`, t: [9], blocks: [
      R`When two or more waves pass through the same point, the resulting displacement is the algebraic sum of the individual displacements: \(y = y_1 + y_2 + \dots\). This is the <b>principle of superposition</b>. After crossing, the waves carry on unchanged, as if they had never met.`,
      R`For two waves of equal frequency travelling the same way with a phase difference φ, \(y_1 = a\sin(kx - \omega t)\) and \(y_2 = a\sin(kx - \omega t + \varphi)\), the sum is \[y = 2a\cos\frac\varphi2\,\sin\!\left(kx - \omega t + \frac\varphi2\right)\]`,
      { points: [R`φ = 0, 2π, …: amplitude 2a, <b>constructive interference</b>.`, R`φ = π, 3π, …: amplitude 0, <b>destructive interference</b>.`, R`In general, for amplitudes \(a_1, a_2\): \(A = \sqrt{a_1^2 + a_2^2 + 2a_1a_2\cos\varphi}\), and intensity ∝ A².`] },
      { ex: { q: R`Two waves of equal amplitude a meet with a phase difference of (a) π/3 (b) 2π/3. Find the resultant amplitude.`,
        steps: [R`\(A = 2a\cos(\varphi/2)\).`, R`(a) 2a cos 30° (b) 2a cos 60°.`], ans: R`(a) √3 a (b) a` } },
      { check: { q: R`Two waves of amplitudes 3 mm and 4 mm interfere. What are the largest and smallest possible resultant amplitudes?`, ans: R`7 mm (in phase) and 1 mm (out of phase).` } }
    ] },

    { h: R`Reflection of waves`, t: [9], blocks: [
      R`When a wave reaches a boundary, it is reflected (and partly transmitted if there is another medium). What happens to its phase depends on the boundary.`,
      { fig: figReflect, cap: R`A pulse reflected from a fixed end comes back upside down (phase change π); from a free end it comes back the same way up (no phase change).` },
      { points: [R`<b>Rigid (fixed) boundary</b> or a denser medium: the reflected wave is inverted, with a phase change of π. The end must stay at rest, so the reflected wave cancels the incident one there.`, R`<b>Free (open) boundary</b> or a rarer medium: no phase change.`, R`For sound, a closed end of a pipe behaves like a rigid boundary for displacement, and an open end like a free boundary.`] },
      R`If the incident wave is \(y_i = a\sin(kx - \omega t)\), the wave reflected from a rigid boundary is \(y_r = a\sin(kx + \omega t + \pi) = -a\sin(kx + \omega t)\), and from a free boundary \(y_r = a\sin(kx + \omega t)\).`,
      { check: { q: R`An echo bounces off a cliff. Is the reflected sound wave inverted in displacement?`, ans: R`Yes: the cliff is a rigid boundary for air displacement, so there is a phase change of π.` } }
    ] },

    { h: R`Standing waves in strings`, t: [10, 11], blocks: [
      R`When two identical waves travel in opposite directions, for example a wave and its reflection, they superpose to form a <b>standing (stationary) wave</b>: \[y = 2a\sin kx\cos\omega t\] Every point oscillates with the same frequency, but with an amplitude \(2a\sin kx\) that depends on position. The pattern does not move along the string.`,
      { points: [R`<b>Nodes:</b> points that never move (\(\sin kx = 0\)): \(x = 0, \lambda/2, \lambda, \dots\)`, R`<b>Antinodes:</b> points of maximum amplitude 2a: \(x = \lambda/4, 3\lambda/4, \dots\)`, R`Adjacent nodes (or antinodes) are λ/2 apart; a node and the next antinode are λ/4 apart.`, R`All points between two neighbouring nodes move in phase; points on opposite sides of a node are out of phase. No energy is carried along the string.`] },
      { fig: figStanding, cap: R`A string of length L fixed at both ends can vibrate only in modes that fit a whole number of half-wavelengths: \(L = n\lambda/2\).` },
      R`A string fixed at both ends must have nodes at both ends, so \(L = n\dfrac\lambda2\). The allowed (natural) frequencies are \[\nu_n = \frac{nv}{2L} = \frac{n}{2L}\sqrt{\frac T\mu},\quad n = 1, 2, 3, \dots\] These are the <b>normal modes</b> of the string.`,
      { ex: { q: R`A 0.5 m string has wave speed 100 m/s. Find its fundamental frequency and the next two harmonics.`,
        steps: [R`\(\nu_1 = \dfrac{v}{2L} = \dfrac{100}{1}\).`], ans: R`100 Hz, 200 Hz, 300 Hz` } },
      { tip: R`In a sonometer, ν ∝ (1/L)√(T/μ). Doubling the tension raises the pitch by a factor √2; halving the vibrating length doubles it. These are the laws of vibrating strings.` },
      { check: { q: R`How far apart are adjacent nodes in a standing wave of wavelength 60 cm?`, ans: R`30 cm.` } }
    ] },

    { h: R`Standing waves in organ pipes and resonance`, t: [10, 11], blocks: [
      R`Sound in a pipe reflects from its ends and forms standing waves in the air column. For displacement, a <b>closed end is a node</b> (the air cannot move) and an <b>open end is an antinode</b>.`,
      { fig: figPipes, cap: R`Displacement patterns in a pipe closed at one end (left) and open at both ends (right). A closed pipe supports only odd harmonics.` },
      { table: { head: [R`Pipe`, R`Condition`, R`Frequencies`, R`Harmonics present`], rows: [
        [R`Closed at one end`, R`\(L = (2n - 1)\dfrac\lambda4\)`, R`\(\nu = (2n - 1)\dfrac{v}{4L}\)`, R`odd only: \(\nu_1, 3\nu_1, 5\nu_1, \dots\)`],
        [R`Open at both ends`, R`\(L = n\dfrac\lambda2\)`, R`\(\nu = n\dfrac{v}{2L}\)`, R`all: \(\nu_1, 2\nu_1, 3\nu_1, \dots\)`]] } },
      { ex: { q: R`A pipe is 85 cm long; v = 340 m/s. Find the first three natural frequencies if it is (a) closed at one end (b) open at both ends.`,
        steps: [R`(a) \(\nu_1 = \dfrac{340}{4\times0.85} = 100\) Hz; then odd multiples.`, R`(b) \(\nu_1 = \dfrac{340}{2\times0.85} = 200\) Hz; then all multiples.`], ans: R`(a) 100, 300, 500 Hz (b) 200, 400, 600 Hz` } },
      { adv: R`<b>End correction.</b> The antinode forms slightly outside an open end, at about \(e = 0.6r\) (r = radius of the pipe). So use \(L + e\) for a closed pipe and \(L + 2e\) for an open pipe.` },
      { h3: R`Resonance and the resonance tube` },
      R`If a tuning fork is held over a pipe whose natural frequency equals the fork's, the air column vibrates strongly: <b>resonance</b>, heard as a loud sound. In the resonance tube experiment, water level in a tube is adjusted until resonance is heard at lengths \(l_1\) and \(l_2\). Then \(l_2 - l_1 = \lambda/2\) (the end correction cancels), giving \(v = 2\nu(l_2 - l_1)\), and \(e = \dfrac{l_2 - 3l_1}{2}\).`,
      { ex: { q: R`With a 512 Hz fork, resonance occurs at 16 cm and 50 cm. Find the speed of sound and the end correction.`,
        steps: [R`\(\lambda/2 = 50 - 16 = 34\) cm, so λ = 0.68 m.`, R`\(v = 512\times0.68\); \(e = (50 - 48)/2\) cm.`], ans: R`≈ 348 m/s; end correction 1 cm` } },
      { check: { q: R`Why does a closed pipe sound different from an open pipe of the same fundamental frequency?`, ans: R`The closed pipe lacks the even harmonics, so its mixture of overtones (its quality, or timbre) is different.` } }
    ] },

    { h: R`Fundamental mode, harmonics and overtones`, t: [11], blocks: [
      R`The lowest natural frequency of a string or pipe is its <b>fundamental</b> (first harmonic). Whole-number multiples of it are <b>harmonics</b>: the n-th harmonic has frequency \(n\nu_1\). The frequencies above the fundamental that are actually present are called <b>overtones</b>, counted in order.`,
      { table: { head: [R`System`, R`Fundamental`, R`1st overtone`, R`2nd overtone`], rows: [
        [R`String fixed at both ends`, R`\(\nu_1 = v/2L\)`, R`\(2\nu_1\) (2nd harmonic)`, R`\(3\nu_1\) (3rd harmonic)`],
        [R`Open pipe`, R`\(\nu_1 = v/2L\)`, R`\(2\nu_1\) (2nd harmonic)`, R`\(3\nu_1\) (3rd harmonic)`],
        [R`Closed pipe`, R`\(\nu_1 = v/4L\)`, R`\(3\nu_1\) (3rd harmonic)`, R`\(5\nu_1\) (5th harmonic)`]] } },
      R`A real instrument vibrates in many modes at once. The pitch we hear is set by the fundamental; the mix of overtones gives each instrument its <b>quality</b> (timbre), which is why a flute and a violin playing the same note sound different.`,
      { ex: { q: R`The fundamental of a closed pipe equals the first overtone of an open pipe. Find the ratio of their lengths.`,
        steps: [R`\(\dfrac{v}{4L_c} = 2\cdot\dfrac{v}{2L_o}\).`, R`So \(L_o = 4L_c\).`], ans: R`\(L_c : L_o = 1 : 4\)` } },
      { mistake: R`Calling the n-th overtone the n-th harmonic. For strings and open pipes, the n-th overtone is the (n + 1)-th harmonic; for a closed pipe it is the (2n + 1)-th harmonic.` },
      { check: { q: R`What is the frequency of the 2nd overtone of a closed pipe whose fundamental is 120 Hz?`, ans: R`600 Hz (the 5th harmonic).` } }
    ] },

    { h: R`Beats`, t: [12], blocks: [
      R`When two sound waves of slightly different frequencies \(\nu_1\) and \(\nu_2\) are heard together, the loudness rises and falls periodically. These periodic variations of loudness are <b>beats</b>.`,
      { derive: R`Beat frequency`, steps: [
        R`At a point: \(y = a\cos2\pi\nu_1t + a\cos2\pi\nu_2t = 2a\cos\left(2\pi\dfrac{\nu_1 - \nu_2}{2}t\right)\cos\left(2\pi\dfrac{\nu_1 + \nu_2}{2}t\right)\).`,
        R`We hear the average frequency \((\nu_1 + \nu_2)/2\), with a slowly varying amplitude \(2a\cos(\pi(\nu_1 - \nu_2)t)\).`,
        R`The loudness peaks whenever this cosine is ±1, which happens \(\nu_1 - \nu_2\) times per second. So the <b>beat frequency</b> is \(\nu_{beat} = |\nu_1 - \nu_2|\).`
      ] },
      { fig: figBeats, cap: R`Two waves of 40 Hz and 44 Hz add to give a wave whose amplitude (dashed envelope) rises and falls 4 times a second.` },
      R`The ear can distinguish beats only up to about 10 per second. Musicians tune instruments by listening to beats against a reference note: as the beats slow down and vanish, the frequencies match.`,
      { ex: { q: R`A fork of unknown frequency gives 4 beats per second with a 256 Hz fork. When the unknown fork is loaded with a little wax, the beats increase to 6 per second. Find its frequency.`,
        steps: [R`It is 252 Hz or 260 Hz.`, R`Wax lowers the frequency. If it were 260 Hz, loading would bring it closer to 256 Hz and the beats would decrease. They increased, so it must be 252 Hz (moving to 250 Hz).`], ans: R`252 Hz` } },
      { tip: R`Loading a fork with wax lowers its frequency; filing its prongs raises it. Decide which of the two candidate frequencies fits the change in the number of beats.` },
      { check: { q: R`How many beats per second are heard from forks of 384 Hz and 387 Hz?`, ans: R`3.` } }
    ] },

    { h: R`Doppler effect`, t: [7], blocks: [
      R`The pitch of a siren rises as an ambulance approaches and falls as it moves away. This change in the observed frequency due to the relative motion of the source and the observer is the <b>Doppler effect</b>.`,
      { fig: figDoppler, cap: R`A moving source crowds its wavefronts ahead of it (shorter wavelength, higher frequency) and spreads them out behind it (lower frequency).` },
      R`With v the speed of sound in still air, \(v_s\) the speed of the source and \(v_o\) the speed of the observer, the observed frequency is \[\nu' = \nu\,\frac{v \pm v_o}{v \mp v_s}\] Use the upper signs when the source and observer move <b>towards</b> each other and the lower signs when they move <b>apart</b>.`,
      { points: [R`<b>Moving source</b> (observer at rest): the wavelength changes, \(\lambda' = (v \mp v_s)/\nu\).`, R`<b>Moving observer</b> (source at rest): the wavelength is unchanged, but the observer meets the waves faster or slower.`, R`Only the velocity components along the line joining the source and observer count. A wind of speed w along that line changes v to v ± w.`] },
      { ex: { q: R`A 500 Hz siren moves at 30 m/s (v = 340 m/s). What frequency does a stationary listener hear as it approaches and as it moves away? What if instead the listener moves at 30 m/s towards a stationary siren?`,
        steps: [R`Approaching: \(500\times\dfrac{340}{340 - 30}\). Receding: \(500\times\dfrac{340}{340 + 30}\).`, R`Moving listener: \(500\times\dfrac{340 + 30}{340}\).`], ans: R`≈ 548 Hz and ≈ 459 Hz; ≈ 544 Hz (a moving source and a moving listener give slightly different shifts)` } },
      { adv: R`<b>Echo from a moving reflector.</b> A car moving at u towards a stationary source of frequency ν first receives \(\nu_1 = \nu\dfrac{v + u}{v}\) and then acts as a moving source, so the echo heard back at the source is \(\nu_2 = \nu\dfrac{v + u}{v - u}\). Police radar and medical ultrasound (blood-flow meters) use this idea; for light, the Doppler shift reveals how fast galaxies are receding.` },
      { mistake: R`Applying the formula when the source passes by. As it passes, the component of velocity along the line of sight changes, so the observed frequency falls gradually, not suddenly.` },
      { check: { q: R`Is there a Doppler shift if the source and observer move with the same velocity in the same direction (still air)?`, ans: R`No: \(\nu' = \nu\dfrac{v - u}{v - u} = \nu\).` } }
    ] }
  ],
  summary: [
    R`Period T, frequency ν = 1/T, angular frequency ω = 2πν. Any periodic function is a sum of sines (Fourier).`,
    R`SHM: \(F = -kx\), \(a = -\omega^2x\), \(x = A\sin(\omega t + \varphi)\); \(v = \omega\sqrt{A^2 - x^2}\) (max Aω), \(a_{max} = \omega^2A\).`,
    R`SHM is the projection of uniform circular motion; use the reference circle for timing questions.`,
    R`Phase difference: 0 (in phase), π (antiphase); v leads x by π/2, a leads x by π.`,
    R`Spring: \(T = 2\pi\sqrt{m/k}\); series \(1/k = 1/k_1 + 1/k_2\); parallel \(k = k_1 + k_2\). Angular SHM: \(T = 2\pi\sqrt{I/C}\); physical pendulum \(2\pi\sqrt{I/mgd}\).`,
    R`Energy: \(E = \frac12kA^2\), \(U = \frac12kx^2\), \(K = \frac12k(A^2 - x^2)\); K and U oscillate at 2ν.`,
    R`Simple pendulum: \(T = 2\pi\sqrt{L/g}\) (small angles); seconds pendulum ≈ 1 m.`,
    R`Damping: amplitude ∝ \(e^{-bt/2m}\). Forced oscillations: resonance when \(\omega_d \approx \omega_0\).`,
    R`Waves carry energy, not matter. Transverse (⟂, needs rigidity) and longitudinal (∥, compressions and rarefactions). \(v = \nu\lambda\).`,
    R`String: \(v = \sqrt{T/\mu}\). Sound: \(v = \sqrt{\gamma P/\rho} = \sqrt{\gamma RT/M}\) (Laplace), ∝ √T.`,
    R`Progressive wave: \(y = A\sin(kx - \omega t + \varphi)\), \(k = 2\pi/\lambda\), \(v = \omega/k\); particle velocity \(= -v\,\partial y/\partial x\).`,
    R`Superposition: \(A = \sqrt{a_1^2 + a_2^2 + 2a_1a_2\cos\varphi}\). Reflection at a rigid end: phase change π; at a free end: none.`,
    R`Standing waves: \(y = 2a\sin kx\cos\omega t\); nodes λ/2 apart. String and open pipe: \(\nu_n = nv/2L\) (all harmonics); closed pipe: \((2n - 1)v/4L\) (odd only).`,
    R`Resonance tube: \(v = 2\nu(l_2 - l_1)\); end correction ≈ 0.6r.`,
    R`Beats: \(\nu_{beat} = |\nu_1 - \nu_2|\).`,
    R`Doppler: \(\nu' = \nu\dfrac{v \pm v_o}{v \mp v_s}\) (upper signs for approach).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §15.1 Simple Harmonic Motion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion' },
    { t: R`OpenStax University Physics Vol. 1, §15.2 Energy in Simple Harmonic Motion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/15-2-energy-in-simple-harmonic-motion' },
    { t: R`OpenStax University Physics Vol. 1, §15.3 Comparing SHM and Circular Motion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/15-3-comparing-simple-harmonic-motion-and-circular-motion' },
    { t: R`OpenStax University Physics Vol. 1, §15.4 Pendulums`, url: 'https://openstax.org/books/university-physics-volume-1/pages/15-4-pendulums' },
    { t: R`OpenStax University Physics Vol. 1, §15.5 Damped Oscillations`, url: 'https://openstax.org/books/university-physics-volume-1/pages/15-5-damped-oscillations' },
    { t: R`OpenStax University Physics Vol. 1, §15.6 Forced Oscillations`, url: 'https://openstax.org/books/university-physics-volume-1/pages/15-6-forced-oscillations' },
    { t: R`OpenStax University Physics Vol. 1, §16.2 Mathematics of Waves`, url: 'https://openstax.org/books/university-physics-volume-1/pages/16-2-mathematics-of-waves' },
    { t: R`OpenStax University Physics Vol. 1, §16.3 Wave Speed on a Stretched String`, url: 'https://openstax.org/books/university-physics-volume-1/pages/16-3-wave-speed-on-a-stretched-string' },
    { t: R`OpenStax University Physics Vol. 1, §16.6 Standing Waves and Resonance`, url: 'https://openstax.org/books/university-physics-volume-1/pages/16-6-standing-waves-and-resonance' },
    { t: R`OpenStax University Physics Vol. 1, §17.4 Normal Modes of a Standing Sound Wave`, url: 'https://openstax.org/books/university-physics-volume-1/pages/17-4-normal-modes-of-a-standing-sound-wave' },
    { t: R`OpenStax University Physics Vol. 1, §17.6 Beats`, url: 'https://openstax.org/books/university-physics-volume-1/pages/17-6-beats' },
    { t: R`OpenStax University Physics Vol. 1, §17.7 The Doppler Effect`, url: 'https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect' }
  ]
});
})();
