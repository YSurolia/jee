// Book chapter: Electrostatics (charges, fields, Gauss's law, potential, capacitors). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function sg(x, y, s, c) { return D.text(x, y, s, { color: c || (s === '+' ? 'r' : 'b'), bold: true, size: 13, raw: true }); }

// ---------- figures ----------
var figInduction = D.row([
  [D.svg(170, 150, [D.rect(8, 60, 50, 20, { color: 'r', fill: 'soft', w: 1.6, r: 3 }), sg(20, 70, '+'), sg(33, 70, '+'), sg(46, 70, '+'),
    D.circle(115, 70, 34, { color: 'm', fill: 'soft', w: 1.8 }), sg(90, 58, '−'), sg(86, 72, '−'), sg(90, 86, '−'), sg(140, 58, '+'), sg(144, 72, '+'), sg(140, 86, '+')], 'charges separate'), '1. charges separate'],
  [D.svg(170, 150, [D.rect(8, 60, 50, 20, { color: 'r', fill: 'soft', w: 1.6, r: 3 }), sg(20, 70, '+'), sg(33, 70, '+'), sg(46, 70, '+'),
    D.circle(115, 70, 34, { color: 'm', fill: 'soft', w: 1.8 }), sg(90, 58, '−'), sg(86, 72, '−'), sg(90, 86, '−'), D.line(115, 104, 115, 128, { color: 'k', w: 1.6 }), D.ground(95, 128, 135, 128, { side: -1 }),
    D.text(150, 118, 'earth', { size: 11, color: 'm', anchor: 'start', math: false })], 'earthing the sphere'), '2. earth it: + flows away'],
  [D.svg(170, 150, [D.circle(85, 70, 34, { color: 'm', fill: 'soft', w: 1.8 }), sg(85, 42, '−'), sg(60, 70, '−'), sg(110, 70, '−'), sg(85, 98, '−')], 'sphere left negative'), '3. remove earth, then rod']
]);

var figCoulomb = D.svg(420, 160, [
  D.text(210, 16, 'like charges repel', { size: 12, color: 'm', math: false }),
  D.charge(150, 45, 1, { r: 11 }), D.charge(270, 45, 1, { r: 11 }), D.arrow(138, 45, 80, 45, { color: 'g', w: 2.2, label: 'F', ly: -12 }), D.arrow(282, 45, 340, 45, { color: 'g', w: 2.2, label: 'F', ly: -12 }),
  D.text(210, 90, 'unlike charges attract', { size: 12, color: 'm', math: false }),
  D.charge(150, 120, 1, { r: 11 }), D.charge(270, 120, -1, { r: 11 }), D.arrow(162, 120, 200, 120, { color: 'g', w: 2.2, label: 'F', ly: -12 }), D.arrow(258, 120, 220, 120, { color: 'g', w: 2.2, label: 'F', ly: -12 }),
  D.arrow(150, 150, 270, 150, { color: 'm', w: 1.1, head: 6, both: true }), D.text(210, 142, 'r', { math: true, color: 'm' })
], "Coulomb's law: forces between two point charges");

var figTriangle = (function () {
  var A = [210, 85], B = [140, 206], C = [280, 206], L = 42;
  return D.svg(420, 230, [
    D.poly([A, B, C], { closed: true, color: 'm', w: 1.2, dash: '4 3' }),
    D.charge(A[0], A[1], 1, { r: 10 }), D.charge(B[0], B[1], 1, { r: 10 }), D.charge(C[0], C[1], 1, { r: 10 }),
    D.text(A[0] + 18, A[1] + 10, 'A', { math: true }), D.text(B[0] - 18, B[1], 'B', { math: true }), D.text(C[0] + 18, C[1], 'C', { math: true }),
    D.arrow(A[0], A[1], A[0] + L * 0.5, A[1] - L * 0.866, { color: 'b', w: 2, label: 'F_B', at: 'end', lx: 16, ly: 0 }),
    D.arrow(A[0], A[1], A[0] - L * 0.5, A[1] - L * 0.866, { color: 'b', w: 2, label: 'F_C', at: 'end', lx: -16, ly: 0 }),
    D.arrow(A[0], A[1], A[0], A[1] - L * 1.732, { color: 'g', w: 2.6, label: 'F', at: 'end', lx: 12, ly: 4 }),
    D.text(210, 222, 'a', { math: true, color: 'm' })
  ], 'Forces on one of three equal charges at the corners of an equilateral triangle');
})();

var figRing = (function () {
  var cx = 90, cy = 125, P = [320, 125], dq = [90, 55], dx = P[0] - dq[0], dy = P[1] - dq[1], m = Math.hypot(dx, dy), ux = dx / m, uy = dy / m;
  return D.svg(420, 240, [
    D.ellipse(cx, cy, 24, 70, { color: 'o', w: 2.2 }), D.line(20, cy, 410, cy, { color: 'm', w: 1, dash: '4 3' }),
    D.dot(dq[0], dq[1], { color: 'r', r: 5 }), D.text(dq[0] - 4, dq[1] - 14, 'dq', { math: true, color: 'r' }), D.dot(90, 195, { color: 'r', r: 4, open: true }),
    D.line(dq[0], dq[1], P[0], P[1], { color: 'm', w: 1.2 }), D.dot(P[0], P[1], { r: 4 }), D.text(P[0] - 6, P[1] + 16, 'P', { math: true }),
    D.arrow(P[0], P[1], P[0] + ux * 70, P[1] + uy * 70, { color: 'c', w: 2.2, label: 'dE', at: 'end', lx: 14, ly: 4 }),
    D.arrow(P[0], P[1], P[0] + ux * 70 * ux, P[1], { color: 'g', w: 1.6, head: 7 }), D.text(P[0] + 50, P[1] - 12, 'dE cos θ', { size: 12, color: 'g', math: true }),
    D.line(P[0] + ux * 70 * ux, P[1], P[0] + ux * 70, P[1] + uy * 70, { color: 'g', w: 1, dash: '3 3' }),
    D.angle(P[0], P[1], 30, 180, 180 - Math.atan2(70, 230) * 180 / Math.PI, 'θ', { lr: 10 }),
    D.arrow(cx, cy + 8, cx, cy + 66, { color: 'm', w: 1.1, head: 6 }), D.text(cx + 12, cy + 40, 'R', { math: true, color: 'm' }),
    D.arrow(cx, cy + 92, P[0], cy + 92, { color: 'm', w: 1.1, head: 6, both: true, label: 'x', ly: -9 }),
    D.text(150, 20, 'perpendicular parts cancel in pairs', { size: 12, color: 'm', math: false })
  ], 'Field on the axis of a charged ring');
})();

var figLines = D.row([
  [D.svg(190, 190, [D.field({ charges: [{ x: 95, y: 95, q: 1 }], n: 12, box: [4, 4, 186, 186], arrows: [0.55] })], 'field of a point charge'), 'positive charge'],
  [D.svg(190, 190, [D.field({ charges: [{ x: 95, y: 95, q: -1 }], n: 12, box: [4, 4, 186, 186], arrows: [0.45] })], 'field of a negative charge'), 'negative charge'],
  [D.svg(190, 190, [D.field({ charges: [{ x: 65, y: 95, q: 1 }, { x: 125, y: 95, q: -1 }], n: 14, box: [2, 2, 188, 188] })], 'field of a dipole'), 'dipole'],
  [D.svg(190, 190, [D.field({ charges: [{ x: 65, y: 95, q: 1 }, { x: 125, y: 95, q: 1 }], n: 10, box: [2, 2, 188, 188] })], 'field of two equal positive charges'), 'two equal + charges']
]);

var figUniform = (function () {
  var p = [D.line(60, 20, 60, 160, { color: 'r', w: 3 }), D.line(240, 20, 240, 160, { color: 'b', w: 3 })];
  for (var y = 30; y <= 150; y += 24) { p.push(sg(48, y, '+'), sg(252, y, '−'), D.arrow(66, y, 232, y, { color: 'o', w: 1.4, head: 7 })); }
  p.push(D.text(150, 176, 'uniform field: parallel, equally spaced lines', { size: 12, color: 'o', math: false }));
  return D.svg(300, 186, p, 'Uniform field between two oppositely charged plates');
})();

var figDipole = D.svg(440, 230, [
  D.line(30, 150, 430, 150, { color: 'm', w: 1, dash: '4 3' }), D.line(220, 30, 220, 205, { color: 'm', w: 1, dash: '4 3' }),
  D.charge(190, 150, -1, { r: 10 }), D.charge(250, 150, 1, { r: 10 }),
  D.arrow(190, 185, 250, 185, { color: 'c', w: 2, label: 'p', ly: 14 }), D.text(220, 170, '2a', { size: 12, color: 'm', math: true }),
  D.dot(370, 150, { r: 4 }), D.text(372, 168, 'P (axial)', { size: 12, math: false, anchor: 'start' }),
  D.arrow(370, 150, 425, 150, { color: 'r', w: 2, label: 'E_{+}', ly: -12, size: 12 }), D.arrow(370, 150, 340, 150, { color: 'b', w: 2, label: 'E_{−}', ly: -12, size: 12 }),
  D.dot(220, 62, { r: 4 }), D.text(228, 52, 'Q (equatorial)', { size: 12, math: false, anchor: 'start' }),
  D.arrow(220, 62, 220 - 0.316 * 48, 62 - 0.949 * 48, { color: 'r', w: 1.8, label: 'E_{+}', at: 'end', lx: -18, ly: 2, size: 12 }),
  D.arrow(220, 62, 220 - 0.316 * 48, 62 + 0.949 * 48, { color: 'b', w: 1.8, label: 'E_{−}', at: 'end', lx: -18, ly: 2, size: 12 }),
  D.arrow(220, 62, 190, 62, { color: 'g', w: 2.6, label: 'E', at: 'end', lx: -12, ly: 0 }),
  D.text(300, 142, 'r', { math: true, color: 'm' }), D.text(228, 108, 'r', { math: true, color: 'm' })
], 'Field of a dipole at an axial point P and an equatorial point Q');

var figTorque = (function () {
  var cx = 180, cy = 105, L = 52, th = 35 * Math.PI / 180, px = cx + L * Math.cos(th), py = cy - L * Math.sin(th), nx = cx - L * Math.cos(th), ny = cy + L * Math.sin(th), p = [];
  [25, 185].forEach(function (y) { p.push(D.arrow(20, y, 340, y, { color: 'o', w: 1.1, head: 7 })); });
  p.push(D.text(330, 14, 'E', { math: true, color: 'o' }));
  p.push(D.line(nx, ny, px, py, { color: 'm', w: 2 }), D.line(cx, cy, cx + 80, cy, { color: 'm', w: 1, dash: '4 3' }), D.angle(cx, cy, 30, 0, 35, 'θ'));
  p.push(D.charge(px, py, 1, { r: 9 }), D.charge(nx, ny, -1, { r: 9 }));
  p.push(D.arrow(px + 10, py, px + 70, py, { color: 'r', w: 2.2, label: 'qE', ly: -12 }), D.arrow(nx - 10, ny, nx - 70, ny, { color: 'b', w: 2.2, label: 'qE', ly: -12 }));
  p.push(D.text(285, 140, 'τ = pE sin θ', { size: 13, color: 'g', math: true }));
  return D.svg(360, 200, p, 'A dipole in a uniform field feels a torque but no net force');
})();

var figFlux = D.svg(380, 210, [
  D.arrow(20, 60, 360, 60, { color: 'o', w: 1.2, head: 7 }), D.arrow(20, 150, 360, 150, { color: 'o', w: 1.2, head: 7 }), D.text(350, 46, 'E', { math: true, color: 'o' }),
  D.poly([[140, 40], [200, 20], [200, 170], [140, 190]], { closed: true, color: 'c', fill: 'soft', w: 1.8 }),
  D.arrow(170, 105, 260, 75, { color: 'g', w: 2.2, label: 'n̂', at: 'end', lx: 10, ly: -6, math: false }),
  D.line(170, 105, 280, 105, { color: 'm', w: 1, dash: '4 3' }), D.angle(170, 105, 40, 0, 18.4, 'θ', { lr: 12 }),
  D.text(120, 195, 'area A', { size: 12, color: 'c', math: false })
], 'Flux through a flat area A whose normal makes angle θ with E');

var figGauss = D.row([
  [D.svg(200, 200, [
    D.ellipse(100, 55, 45, 12, { color: 'g', w: 1.4 }), D.ellipse(100, 150, 45, 12, { color: 'g', w: 1.4 }), D.line(55, 55, 55, 150, { color: 'g', w: 1.4 }), D.line(145, 55, 145, 150, { color: 'g', w: 1.4 }),
    D.line(100, 10, 100, 190, { color: 'r', w: 3 }), D.text(110, 22, 'λ', { math: true, color: 'r', anchor: 'start' }),
    D.arrow(145, 100, 190, 100, { color: 'o', w: 1.8, head: 7, label: 'E', ly: -10 }), D.arrow(55, 100, 10, 100, { color: 'o', w: 1.8, head: 7 }),
    D.arrow(100, 120, 145, 120, { color: 'm', w: 1, head: 5, label: 'r', ly: 10 }), D.text(160, 140, 'l', { math: true, color: 'g' })], 'Gaussian cylinder around a line charge'), 'line charge: cylinder'],
  [D.svg(200, 200, [
    D.poly([[15, 130], [135, 130], [185, 70], [65, 70]], { closed: true, color: 'r', fill: 'soft', w: 1.4 }), D.text(40, 120, 'σ', { math: true, color: 'r' }),
    D.ellipse(100, 50, 24, 8, { color: 'g', w: 1.4 }), D.ellipse(100, 150, 24, 8, { color: 'g', w: 1.4 }), D.line(76, 50, 76, 150, { color: 'g', w: 1.4 }), D.line(124, 50, 124, 150, { color: 'g', w: 1.4 }),
    D.arrow(100, 45, 100, 8, { color: 'o', w: 1.8, head: 7, label: 'E', lx: 12, ly: 0 }), D.arrow(100, 155, 100, 194, { color: 'o', w: 1.8, head: 7, label: 'E', lx: 12, ly: 0 }), D.text(150, 50, 'A', { math: true, color: 'g' })], 'Gaussian pillbox through a charged sheet'), 'plane sheet: pillbox'],
  [D.svg(200, 200, [
    D.circle(100, 100, 50, { color: 'r', fill: 'soft', w: 2.2 }), sg(100, 50, '+'), sg(150, 100, '+'), sg(100, 150, '+'), sg(50, 100, '+'), sg(135, 65, '+'), sg(65, 135, '+'), sg(65, 65, '+'), sg(135, 135, '+'),
    D.circle(100, 100, 82, { color: 'g', w: 1.4, dash: '5 4' }), D.circle(100, 100, 24, { color: 'g', w: 1.4, dash: '5 4' }),
    D.text(100, 106, 'E = 0', { size: 11, color: 'g', math: false })], 'Gaussian spheres inside and outside a charged shell'), 'spherical shell: spheres']
]);

var figShellE = D.plot({
  w: 420, h: 220, x: [0, 4.2], y: [0, 1.25], xlabel: 'r', ylabel: 'E', xticks: [[1, 'R']], yticks: [],
  fns: [{ f: function (r) { return r < 1 ? 0 : 1 / (r * r); }, from: 0, to: 0.999, color: 'c', w: 2.6 }, { f: function (r) { return 1 / (r * r); }, from: 1, to: 4.2, color: 'c', w: 2.6, label: 'E = kQ/r²', lx: 1.6, ly: 0.55, math: false },
    { f: function (r) { return r; }, from: 0, to: 1, color: 'o', dash: '6 4', w: 2, label: 'solid sphere: E ∝ r inside', lx: 1.2, ly: 1.08, math: false }],
  segs: [{ x1: 1, y1: 0, x2: 1, y2: 1, color: 'c', dash: '3 3', w: 1 }],
  label: 'Field of a charged spherical shell and of a uniformly charged solid sphere'
});

var figShellV = D.plot({
  w: 420, h: 200, x: [0, 4.2], y: [0, 1.25], xlabel: 'r', ylabel: 'V', xticks: [[1, 'R']], yticks: [[1, 'kQ/R']],
  fns: [{ f: function () { return 1; }, from: 0, to: 1, color: 'r', w: 2.6 }, { f: function (r) { return 1 / r; }, from: 1, to: 4.2, color: 'r', w: 2.6, label: 'V = kQ/r', lx: 1.9, ly: 0.7, math: false }],
  texts: [{ x: 0.5, y: 1.12, s: 'constant inside', size: 12, color: 'r' }],
  label: 'Potential of a charged spherical shell'
});

var figEquip = D.row([
  [D.svg(200, 200, [D.circle(100, 100, 40, { color: 'g', w: 1.4, dash: '5 4' }), D.circle(100, 100, 65, { color: 'g', w: 1.4, dash: '5 4' }), D.circle(100, 100, 90, { color: 'g', w: 1.4, dash: '5 4' }),
    D.field({ charges: [{ x: 100, y: 100, q: 1 }], n: 8, box: [2, 2, 198, 198], arrows: [0.35] })], 'equipotentials of a point charge'), 'point charge: spheres'],
  [D.svg(200, 200, (function () {
    var p = [];
    [50, 100, 150].forEach(function (x, i) { p.push(D.line(x, 15, x, 175, { color: 'g', w: 1.4, dash: '5 4' }), D.text(x, 190, 'V_' + (i + 1), { size: 12, color: 'g', math: true })); });
    [35, 75, 115, 155].forEach(function (y) { p.push(D.arrow(10, y, 190, y, { color: 'o', w: 1.3, head: 7 })); });
    return p;
  })(), 'equipotentials of a uniform field'), 'uniform field: planes, V₁ > V₂ > V₃']
]);

var figConductor = (function () {
  var p = [D.rect(140, 45, 120, 110, { color: 'm', fill: 'soft', w: 2, r: 12 })];
  [60, 85, 110, 135].forEach(function (y) { p.push(D.arrow(10, y, 136, y, { color: 'o', w: 1.3, head: 7 }), D.arrow(264, y, 390, y, { color: 'o', w: 1.3, head: 7 }), sg(148, y, '−'), sg(252, y, '+')); });
  p.push(D.arrow(10, 25, 390, 25, { color: 'o', w: 1.3, head: 7 }), D.arrow(10, 175, 390, 175, { color: 'o', w: 1.3, head: 7 }));
  p.push(D.text(200, 92, 'E = 0', { size: 13, color: 'g', bold: true, math: false }), D.text(200, 110, 'inside', { size: 12, color: 'g', math: false }));
  return D.svg(400, 195, p, 'A conductor in an external field: induced charges cancel the field inside');
})();

var figDielectric = (function () {
  var p = [D.line(40, 25, 40, 185, { color: 'r', w: 3 }), D.line(360, 25, 360, 185, { color: 'b', w: 3 }), D.rect(140, 30, 120, 150, { color: 'p', fill: 'soft', w: 1.6 })];
  [55, 105, 155].forEach(function (y) {
    p.push(sg(28, y, '+'), sg(372, y, '−'), sg(150, y, '−', 'p'), sg(250, y, '+', 'p'));
    p.push(D.arrow(46, y, 130, y, { color: 'o', w: 2, head: 7 }), D.arrow(180, y, 222, y, { color: 'o', w: 1.4, head: 6 }), D.arrow(270, y, 354, y, { color: 'o', w: 2, head: 7 }));
  });
  p.push(D.text(88, 80, 'E₀', { size: 13, color: 'o' }), D.text(200, 80, 'E₀/K', { size: 13, color: 'o' }), D.text(312, 80, 'E₀', { size: 13, color: 'o' }), D.text(200, 200, 'dielectric slab: induced surface charges', { size: 12, color: 'p', math: false }));
  return D.svg(400, 210, p, 'A dielectric slab reduces the field inside it');
})();

var figPPC = (function () {
  var p = [D.line(130, 30, 130, 170, { color: 'r', w: 3.4 }), D.line(250, 30, 250, 170, { color: 'b', w: 3.4 })];
  for (var y = 45; y <= 155; y += 22) p.push(sg(118, y, '+'), sg(262, y, '−'), D.arrow(136, y, 244, y, { color: 'o', w: 1.3, head: 6 }));
  p.push(D.path('M130 30 Q 190 2, 250 30', { color: 'o', w: 1.1, dash: '4 3' }), D.path('M130 170 Q 190 198, 250 170', { color: 'o', w: 1.1, dash: '4 3' }));
  p.push(D.text(100, 100, '+Q', { size: 13, color: 'r', anchor: 'end' }), D.text(280, 100, '−Q', { size: 13, color: 'b', anchor: 'start' }));
  p.push(D.arrow(130, 190, 250, 190, { color: 'm', w: 1.1, head: 6, both: true, label: 'd', ly: 10 }), D.text(320, 30, 'plate area A', { size: 12, color: 'm', math: false }));
  p.push(D.text(190, 14, 'fringing (ignored)', { size: 11, color: 'm', math: false }));
  return D.svg(380, 205, p, 'Parallel-plate capacitor');
})();

var figCombo = D.row([
  [D.svg(200, 160, [D.cap(30, 40, 100, 40, { label: 'C₁', math: false }), D.cap(100, 40, 170, 40, { label: 'C₂', math: false }), D.line(170, 40, 170, 130, { w: 1.8 }), D.line(30, 40, 30, 130, { w: 1.8 }),
    D.cell(30, 130, 170, 130, { label: 'V', ly: 22 }), D.text(100, 62, 'same charge Q', { size: 11, color: 'm', math: false })], 'capacitors in series'), 'series: 1/C = 1/C₁ + 1/C₂'],
  [D.svg(200, 160, [D.line(30, 30, 160, 30, { w: 1.8 }), D.line(30, 120, 160, 120, { w: 1.8 }), D.cap(95, 30, 95, 120, { label: 'C₁', math: false, lx: 24, ly: 0 }), D.cap(160, 30, 160, 120, { label: 'C₂', math: false, lx: 24, ly: 0 }),
    D.cell(30, 30, 30, 120, { label: 'V', lx: -18, ly: 0 }), D.text(110, 145, 'same voltage V', { size: 11, color: 'm', math: false })], 'capacitors in parallel'), 'parallel: C = C₁ + C₂']
]);

var figSlab = D.svg(340, 190, [
  D.line(80, 25, 80, 165, { color: 'r', w: 3.2 }), D.line(260, 25, 260, 165, { color: 'b', w: 3.2 }), D.rect(150, 25, 60, 140, { color: 'p', fill: 'soft', w: 1.4 }),
  D.text(180, 95, 'K', { math: true, color: 'p', bold: true }),
  D.arrow(80, 178, 260, 178, { color: 'm', w: 1.1, head: 6, both: true, label: 'd', ly: 10 }), D.arrow(150, 14, 210, 14, { color: 'p', w: 1.1, head: 5, both: true, label: 't', lx: 40, ly: 0 })
], 'Capacitor partly filled with a dielectric slab');

var figQV = D.plot({
  w: 360, h: 210, x: [0, 5], y: [0, 5], xlabel: 'V', ylabel: 'Q', xticks: [[4, 'V']], yticks: [[4, 'Q']],
  shade: [{ f: function (v) { return v; }, from: 0, to: 4, color: 'g' }],
  fns: [{ f: function (v) { return v; }, from: 0, to: 4.6, color: 'c', label: 'slope = C', lx: 3.0, ly: 4.55, math: false }],
  guides: [[4, 4]], texts: [{ x: 2.9, y: 1.2, s: 'area = ½QV = U', size: 12, color: 'g' }],
  label: 'Charging a capacitor: the energy stored is the area under the Q-V line'
});

// ---------- chapter text ----------
JEE.book('physics', 'electrostatics', {
  intro: [
    R`Rub a plastic comb on dry hair and it picks up bits of paper. Take off a woollen sweater in the dark and you see tiny sparks. Lightning is a giant version of the same effect. All of these come from <b>electric charge</b> at rest, the subject of <b>electrostatics</b>.`,
    R`This chapter builds the whole subject step by step: charges and Coulomb's law; the electric field and field lines; dipoles; electric flux and Gauss's law, a powerful shortcut for symmetric charge distributions; electric potential and potential energy; conductors and dielectrics; and finally capacitors, which store charge and energy in every electronic device.`
  ],
  sections: [
    { h: R`Electric charge and its properties`, t: [0], blocks: [
      R`Electric charge is a basic property of matter, like mass. There are two kinds, named <b>positive</b> and <b>negative</b> by Benjamin Franklin: like charges repel and unlike charges attract. An electron carries a negative charge −e and a proton a positive charge +e, where \(e = 1.6\times10^{-19}\) C. A body is charged when it has more or fewer electrons than protons. The SI unit of charge is the <b>coulomb</b> (C).`,
      { h3: R`Basic properties` },
      { points: [
        R`<b>Additivity:</b> charges add like ordinary numbers (with signs). A body with charges +2q, −5q and +q has total charge −2q.`,
        R`<b>Quantisation:</b> every charge is a whole-number multiple of e: \(q = ne\), \(n = 0, \pm1, \pm2, \dots\) Since e is tiny, large-scale charges look continuous; 1 C is about \(6.25\times10^{18}\) electrons.`,
        R`<b>Conservation:</b> the total charge of an isolated system never changes. Charge can move from one body to another, and pairs of opposite charges can be created or destroyed (as in pair production, γ → e⁻ + e⁺), but the net charge stays the same.`,
        R`Charge is <b>invariant</b>: it is the same for all observers, whatever their speed (unlike mass in relativity).`
      ] },
      { ex: { q: R`Can a body carry a charge of \(2.4\times10^{-19}\) C?`,
        steps: [R`\(n = q/e = 2.4\times10^{-19}/1.6\times10^{-19} = 1.5\), which is not a whole number.`], ans: R`No, charge is quantised` } },
      { ex: { q: R`How many electrons must be removed from a neutral coin to give it a charge of +1 μC?`,
        steps: [R`\(n = \dfrac{q}{e} = \dfrac{10^{-6}}{1.6\times10^{-19}}\).`], ans: R`≈ 6.25 × 10¹² electrons` } },
      R`<b>Conductors and insulators.</b> In metals, some electrons are free to move through the material, so charge spreads over the whole body: these are <b>conductors</b>. In glass, plastic or rubber, electrons are bound to their atoms and charge stays where it is placed: these are <b>insulators</b>. Semiconductors lie in between.`,
      { check: { q: R`When a glass rod is rubbed with silk and becomes positive, does its mass change?`, ans: R`Yes, very slightly: it loses electrons (to the silk), so its mass decreases by the mass of those electrons.` } }
    ] },

    { h: R`Charging by friction, conduction and induction`, t: [0], blocks: [
      { points: [R`<b>Friction:</b> rubbing two different materials transfers electrons from one to the other. Glass rubbed with silk becomes positive; a plastic rod rubbed with wool becomes negative. Both bodies get equal and opposite charges.`, R`<b>Conduction (contact):</b> touching a neutral conductor with a charged body lets charge flow into it, so it gets a charge of the same sign.`, R`<b>Induction:</b> a charged body brought near (not touching) a conductor pushes its free electrons to one side. Earthing the conductor and then removing the earth connection leaves it with a charge of the <b>opposite</b> sign, while the charging body loses nothing.`] },
      { fig: figInduction, cap: R`Charging a metal sphere by induction with a positive rod: the sphere ends up negatively charged.` },
      R`Induction also explains why a charged comb attracts neutral bits of paper: the comb polarises the paper (pulling opposite charge to the near side), and the attraction of the nearer charges is stronger than the repulsion of the farther ones.`,
      { check: { q: R`A positively charged rod is used to charge a sphere by induction. What sign of charge does the sphere get?`, ans: R`Negative.` } }
    ] },

    { h: R`Coulomb's law`, t: [1], blocks: [
      R`In 1785, Charles Coulomb measured the force between small charged spheres with a torsion balance. The force between two point charges \(q_1\) and \(q_2\) a distance r apart is proportional to the product of the charges and inversely proportional to the square of the distance: \[F = k\frac{|q_1q_2|}{r^2},\qquad k = \frac{1}{4\pi\varepsilon_0} = 9\times10^9\ \text{N m}^2\,\text{C}^{-2}\] The force acts along the line joining the charges: repulsive for like charges, attractive for unlike ones.`,
      { fig: figCoulomb, cap: R`Coulomb forces act along the line joining the two charges and obey Newton's third law: the forces on the two charges are equal and opposite.` },
      R`Here \(\varepsilon_0 = 8.854\times10^{-12}\) C² N⁻¹ m⁻² is the <b>permittivity of free space</b>. In vector form, the force on \(q_2\) due to \(q_1\) is \(\vec F_{21} = \dfrac{kq_1q_2}{r^2}\hat r_{12}\), where \(\hat r_{12}\) is the unit vector from \(q_1\) to \(q_2\).`,
      R`In a material medium, the force becomes smaller: \(F = \dfrac{1}{4\pi\varepsilon_0K}\dfrac{q_1q_2}{r^2}\), where \(K = \varepsilon/\varepsilon_0\) is the <b>dielectric constant</b> (relative permittivity) of the medium. For water, K ≈ 80, which is why salts dissolve: the attraction between their ions is 80 times weaker.`,
      { ex: { q: R`Find the force between charges of +2 μC and −3 μC placed 30 cm apart in air.`,
        steps: [R`\(F = \dfrac{9\times10^9\times2\times10^{-6}\times3\times10^{-6}}{0.3^2}\).`], ans: R`0.6 N, attractive` } },
      { ex: { q: R`Compare the electric and gravitational forces between two protons.`,
        steps: [R`\(\dfrac{F_e}{F_g} = \dfrac{ke^2}{Gm_p^2} = \dfrac{9\times10^9\times(1.6\times10^{-19})^2}{6.67\times10^{-11}\times(1.67\times10^{-27})^2}\).`], ans: R`≈ 1.2 × 10³⁶: gravity is utterly negligible between charged particles` } },
      { mistake: R`Using Coulomb's law for large charged bodies at short distances. It holds only for point charges (or spheres, measuring r between their centres).` },
      { check: { q: R`If the distance between two charges is halved, what happens to the force?`, ans: R`It becomes 4 times larger.` } }
    ] },

    { h: R`Forces between multiple charges: superposition`, t: [1], blocks: [
      R`When several charges are present, the force on any one of them is the <b>vector sum</b> of the forces exerted on it by each of the others, each calculated by Coulomb's law as if the others were absent. This is the <b>principle of superposition</b>: \[\vec F_1 = \vec F_{12} + \vec F_{13} + \dots + \vec F_{1n}\]`,
      { fig: figTriangle, cap: R`On charge A, the forces from B and C are equal in size and 60° apart, so their resultant points straight away from the opposite side.` },
      { ex: { q: R`Three equal charges of 1 μC sit at the corners of an equilateral triangle of side 10 cm. Find the force on each.`,
        steps: [R`Each pair: \(F_0 = \dfrac{9\times10^9\times(10^{-6})^2}{0.1^2} = 0.9\) N.`, R`Two forces at 60°: \(F = 2F_0\cos30° = \sqrt3F_0\).`], ans: R`≈ 1.56 N, directed away from the centre of the triangle` } },
      { ex: { q: R`Charges +q and +4q are a distance d apart. Where should a third charge be placed so that the net force on it is zero?`,
        steps: [R`It must lie between them, at a distance x from +q: \(\dfrac{kq}{x^2} = \dfrac{4kq}{(d - x)^2}\).`, R`\(d - x = 2x\), so \(x = d/3\).`], ans: R`At d/3 from +q (for any sign of the third charge)` } },
      { tip: R`For a charge to be in equilibrium between two like charges, it sits closer to the smaller one, at distance \(\dfrac{d}{1 + \sqrt{q_2/q_1}}\) from \(q_1\). Between unlike charges, the null point lies outside, beyond the smaller charge.` },
      { check: { q: R`Four equal charges sit at the corners of a square. What is the net force on a charge placed at its centre?`, ans: R`Zero, by symmetry.` } }
    ] },

    { h: R`Continuous charge distributions`, t: [1], blocks: [
      R`Charge on a large body is spread out almost continuously. We describe it by a <b>charge density</b>:`,
      { table: { head: [R`Distribution`, R`Density`, R`Charge element`, R`Unit`], rows: [
        [R`Along a line (wire, ring)`, R`linear, \(\lambda = dq/dl\)`, R`\(dq = \lambda\,dl\)`, R`C/m`],
        [R`Over a surface (sheet, shell)`, R`surface, \(\sigma = dq/dA\)`, R`\(dq = \sigma\,dA\)`, R`C/m²`],
        [R`Through a volume (solid sphere)`, R`volume, \(\rho = dq/dV\)`, R`\(dq = \rho\,dV\)`, R`C/m³`]] } },
      R`To find the force or field of such a body, split it into tiny elements dq, treat each as a point charge, and add (integrate) their contributions: \(\vec E = \displaystyle\int\frac{k\,dq}{r^2}\hat r\). Symmetry often cancels many components, as in the ring below.`,
      { fig: figRing, cap: R`For a uniformly charged ring, the perpendicular components of the fields of opposite elements cancel; only the components along the axis add up.` },
      { derive: R`Field on the axis of a charged ring`, steps: [
        R`Each element dq at distance \(\sqrt{R^2 + x^2}\) from P gives \(dE = \dfrac{k\,dq}{R^2 + x^2}\).`,
        R`Its axial component is \(dE\cos\theta\) with \(\cos\theta = \dfrac{x}{\sqrt{R^2 + x^2}}\); the perpendicular parts cancel in pairs.`,
        R`Adding all elements (total Q): \[E = \frac{kQx}{(R^2 + x^2)^{3/2}}\] It is zero at the centre, and far away (x ≫ R) it becomes \(kQ/x^2\), like a point charge. It is largest at \(x = R/\sqrt2\).`
      ] },
      { check: { q: R`What is the field at the centre of a uniformly charged ring?`, ans: R`Zero: the fields of opposite elements cancel.` } }
    ] },

    { h: R`The electric field`, t: [2], blocks: [
      R`A charge changes the space around it so that any other charge placed there feels a force. We describe this by the <b>electric field</b> \(\vec E\): the force per unit positive test charge, \[\vec E = \frac{\vec F}{q_0}\quad(\text{unit: N/C or V/m})\] Once E is known, the force on any charge q is simply \(\vec F = q\vec E\). (The test charge \(q_0\) must be tiny so that it does not disturb the charges producing the field.)`,
      R`<b>Field of a point charge:</b> \(\vec E = \dfrac{kq}{r^2}\hat r\), pointing away from a positive charge and towards a negative one. <b>Field of a system of charges:</b> by superposition, \(\vec E = \sum\dfrac{kq_i}{r_i^2}\hat r_i\).`,
      { ex: { q: R`Find the field 30 cm from a 2 μC charge, and the force on an electron placed there.`,
        steps: [R`\(E = \dfrac{9\times10^9\times2\times10^{-6}}{0.09} = 2\times10^5\) N/C.`, R`\(F = eE = 1.6\times10^{-19}\times2\times10^5\).`], ans: R`2 × 10⁵ N/C (away from the charge); 3.2 × 10⁻¹⁴ N towards the charge` } },
      { ex: { q: R`An electron (m = 9.1 × 10⁻³¹ kg) enters a uniform field of 10⁴ N/C. Find its acceleration.`,
        steps: [R`\(a = \dfrac{eE}{m} = \dfrac{1.6\times10^{-19}\times10^4}{9.1\times10^{-31}}\).`], ans: R`≈ 1.8 × 10¹⁵ m/s², opposite to E` } },
      R`A charged particle entering a uniform field at right angles moves in a parabola, just like a ball thrown horizontally under gravity. This is how cathode-ray tubes and inkjet printers steer charged beams and drops.`,
      { check: { q: R`Does the electric field at a point depend on the test charge placed there?`, ans: R`No. The force depends on the test charge, but E = F/q₀ does not.` } }
    ] },

    { h: R`Electric field lines`, t: [2], blocks: [
      R`Faraday pictured the field with <b>field lines</b>: curves drawn so that the tangent at each point gives the direction of \(\vec E\), and the density of lines (number per unit area) shows its strength.`,
      { fig: figLines, cap: R`Field lines of (a) a positive charge (b) a negative charge (c) a dipole (d) two equal positive charges. Between the two positive charges is a neutral point where E = 0.` },
      { h3: R`Properties of field lines` },
      { points: [
        R`They start on positive charges and end on negative charges (or go to or come from infinity).`,
        R`They never cross: at a crossing, E would have two directions.`,
        R`They are crowded where the field is strong and spread out where it is weak.`,
        R`Electrostatic field lines never form closed loops (the field is conservative).`,
        R`They meet the surface of a conductor at right angles.`,
        R`The number of lines leaving a charge is proportional to its magnitude.`
      ] },
      { fig: figUniform, cap: R`Between two large oppositely charged plates, the field is uniform: straight, parallel, equally spaced lines.` },
      { check: { q: R`Is the path of a charged particle released in a field always along a field line?`, ans: R`No. A field line gives the direction of force (acceleration), not of velocity. A particle released from rest follows a field line only if the lines are straight.` } }
    ] },

    { h: R`The electric dipole`, t: [3], blocks: [
      R`An <b>electric dipole</b> is a pair of equal and opposite charges +q and −q separated by a small distance 2a. Its <b>dipole moment</b> is the vector \[\vec p = q\times2a\ \ \text{(directed from −q to +q)},\quad \text{unit: C m}\] Molecules such as H₂O and HCl are natural dipoles, and any neutral atom in a field becomes one.`,
      { fig: figDipole, cap: R`At an axial point the field points along \(\vec p\); at an equatorial point it points opposite to \(\vec p\).` },
      { derive: R`Field on the axis of a dipole`, steps: [
        R`At P, distance r from the centre on the axis: \(E_+ = \dfrac{kq}{(r - a)^2}\) (away from +q) and \(E_- = \dfrac{kq}{(r + a)^2}\) (towards −q), in opposite directions.`,
        R`\(E = kq\left[\dfrac{1}{(r - a)^2} - \dfrac{1}{(r + a)^2}\right] = \dfrac{k\cdot4aqr}{(r^2 - a^2)^2}\).`,
        R`For r ≫ a: \(E_{axial} = \dfrac{2kp}{r^3}\), along \(\vec p\).`
      ] },
      { derive: R`Field on the equatorial line`, steps: [
        R`At Q, distance r from the centre on the perpendicular bisector: \(E_+ = E_- = \dfrac{kq}{r^2 + a^2}\).`,
        R`Their components along the bisector cancel; the components parallel to the axis add: \(E = 2\dfrac{kq}{r^2 + a^2}\cdot\dfrac{a}{\sqrt{r^2 + a^2}}\).`,
        R`For r ≫ a: \(E_{equatorial} = \dfrac{kp}{r^3}\), opposite to \(\vec p\). It is half the axial field at the same distance.`
      ] },
      R`A dipole's field falls off as \(1/r^3\), faster than a point charge's \(1/r^2\), because from far away the two charges almost cancel.`,
      { ex: { q: R`A dipole has charges ±1 μC separated by 2 cm. Find the field at 10 cm from its centre on (a) the axis (b) the equatorial line.`,
        steps: [R`\(p = 10^{-6}\times0.02 = 2\times10^{-8}\) C m.`, R`(a) \(\dfrac{2kp}{r^3} = \dfrac{2\times9\times10^9\times2\times10^{-8}}{10^{-3}}\) (b) half of that.`], ans: R`(a) ≈ 3.6 × 10⁵ N/C (b) ≈ 1.8 × 10⁵ N/C` } },
      { adv: R`At a general point (r, θ) from the axis: \(E = \dfrac{kp}{r^3}\sqrt{3\cos^2\theta + 1}\), and its direction makes angle α with the radial line where \(\tan\alpha = \frac12\tan\theta\).` },
      { check: { q: R`By what factor does a dipole's field change if the distance is doubled?`, ans: R`It falls to 1/8.` } }
    ] },

    { h: R`Dipole in a uniform electric field`, t: [3], blocks: [
      R`In a uniform field, the forces \(+q\vec E\) and \(-q\vec E\) on the two charges are equal and opposite, so the <b>net force is zero</b>. But they act along different lines, forming a couple that tends to turn the dipole into line with the field.`,
      { fig: figTorque, cap: R`The two forces qE form a couple of moment \(qE\times2a\sin\theta = pE\sin\theta\).` },
      R`<b>Torque:</b> \(\vec\tau = \vec p\times\vec E\), of magnitude \(pE\sin\theta\). It is largest when the dipole is perpendicular to the field and zero when it is parallel or antiparallel.`,
      { derive: R`Potential energy of a dipole`, steps: [
        R`Work done to turn the dipole from \(\theta_1\) to \(\theta_2\) against the torque: \(W = \int_{\theta_1}^{\theta_2}pE\sin\theta\,d\theta = pE(\cos\theta_1 - \cos\theta_2)\).`,
        R`Taking U = 0 at θ = 90°: \[U = -pE\cos\theta = -\vec p\cdot\vec E\]`
      ] },
      { table: { head: [R`Orientation`, R`Torque`, R`Energy`, R`Equilibrium`], rows: [
        [R`θ = 0 (along E)`, R`0`, R`−pE (minimum)`, R`stable`], [R`θ = 90°`, R`pE (maximum)`, R`0`, R`not in equilibrium`], [R`θ = 180° (against E)`, R`0`, R`+pE (maximum)`, R`unstable`]] } },
      { ex: { q: R`A dipole of moment 2 × 10⁻⁸ C m is at 30° to a uniform field of 10⁵ N/C. Find the torque on it, and the work needed to turn it from the stable to the unstable position.`,
        steps: [R`\(\tau = pE\sin30° = 2\times10^{-8}\times10^5\times0.5\).`, R`\(W = U(180°) - U(0°) = 2pE\).`], ans: R`τ = 10⁻³ N m; W = 4 × 10⁻³ J` } },
      { adv: R`In a <b>non-uniform</b> field the forces on +q and −q are unequal, so a dipole also feels a net force, \(F = p\dfrac{dE}{dx}\) for a dipole aligned with the field. It is pulled towards the region of stronger field. This is why a charged comb attracts neutral bits of paper.` },
      { check: { q: R`Does a dipole in a uniform field have translational motion?`, ans: R`No: the net force is zero, so it only rotates (and oscillates about the field direction).` } }
    ] },

    { h: R`Electric flux`, t: [4], blocks: [
      R`<b>Electric flux</b> measures how much field passes through a surface, like the amount of water flowing through a loop held in a stream. For a flat area A in a uniform field, with the area vector \(\vec A = A\hat n\) along its normal, \[\Phi = \vec E\cdot\vec A = EA\cos\theta\] For a curved surface or a non-uniform field, \(\Phi = \displaystyle\oint\vec E\cdot d\vec A\). Its unit is N m²/C (or V m). Flux is proportional to the number of field lines crossing the surface.`,
      { fig: figFlux, cap: R`Only the component of E along the normal carries flux through the surface.` },
      { points: [R`θ = 0: field perpendicular to the surface, flux maximum EA.`, R`θ = 90°: field parallel to the surface, zero flux.`, R`For a closed surface the normal points outward: lines leaving count as positive flux, lines entering as negative.`] },
      { ex: { q: R`A uniform field of 200 N/C passes through a 0.1 m² surface whose normal makes 60° with the field. Find the flux.`,
        steps: [R`\(\Phi = 200\times0.1\times\cos60°\).`], ans: R`10 N m²/C` } },
      { ex: { q: R`A cylinder is placed with its axis along a uniform field E. Find the total flux through its closed surface.`,
        steps: [R`Flux in through one flat face: −EA; out through the other: +EA; the curved surface is parallel to E: 0.`], ans: R`Zero (no charge is enclosed)` } },
      { check: { q: R`What is the flux of a uniform field through any closed surface?`, ans: R`Zero: every line that enters also leaves.` } }
    ] },

    { h: R`Gauss's law`, t: [5], blocks: [
      R`<b>Gauss's law:</b> the total electric flux through any closed surface equals the net charge enclosed divided by \(\varepsilon_0\): \[\oint\vec E\cdot d\vec A = \frac{q_{enc}}{\varepsilon_0}\] The closed surface is called a <b>Gaussian surface</b>; it is an imaginary surface we choose.`,
      { derive: R`Gauss's law for a point charge`, steps: [
        R`Surround a point charge q with a sphere of radius r centred on it. E is radial and has the same magnitude \(kq/r^2\) everywhere on the sphere.`,
        R`\(\Phi = E\times4\pi r^2 = \dfrac{q}{4\pi\varepsilon_0r^2}\times4\pi r^2 = \dfrac{q}{\varepsilon_0}\), independent of r.`,
        R`Any other closed surface around q is crossed by the same field lines, so it has the same flux. Charges outside contribute lines that enter and leave, giving zero net flux.`
      ] },
      { points: [R`Only enclosed charge matters for the total flux; but the field E at a point on the surface is due to <b>all</b> charges, inside and outside.`, R`Gauss's law is equivalent to Coulomb's law (inverse-square law) and is one of Maxwell's four equations.`, R`It is most useful when symmetry makes E constant over the Gaussian surface (spheres, cylinders, planes).`] },
      { ex: { q: R`A charge q sits at the centre of a cube. Find the flux through one face. What if it sits at a corner?`,
        steps: [R`Total flux \(q/\varepsilon_0\) shared equally among 6 faces.`, R`At a corner, 8 such cubes would surround it, so this cube gets 1/8 of the flux (all through the 3 faces not touching the corner).`], ans: R`\(q/6\varepsilon_0\) per face; \(q/8\varepsilon_0\) through the cube when the charge is at a corner` } },
      { check: { q: R`If the total flux through a closed surface is zero, must the field be zero everywhere on it?`, ans: R`No. It means the net enclosed charge is zero; the field due to outside charges can be non-zero.` } }
    ] },

    { h: R`Applications of Gauss's law`, t: [5], blocks: [
      { fig: figGauss, cap: R`Choose a Gaussian surface that matches the symmetry: a cylinder for a line, a pillbox for a sheet, a concentric sphere for a sphere.` },
      { h3: R`Infinitely long straight wire (line charge λ)` },
      R`Take a cylinder of radius r and length l coaxial with the wire. E is radial, so only the curved surface has flux: \(E\times2\pi rl = \dfrac{\lambda l}{\varepsilon_0}\), giving \[E = \frac{\lambda}{2\pi\varepsilon_0r} = \frac{2k\lambda}{r}\]`,
      { ex: { q: R`A long wire carries 2 μC/m. Find the field 10 cm away.`,
        steps: [R`\(E = \dfrac{2\times9\times10^9\times2\times10^{-6}}{0.1}\).`], ans: R`3.6 × 10⁵ N/C` } },
      { h3: R`Infinite plane sheet (surface charge σ)` },
      R`Take a pillbox (small cylinder) of cross-section A through the sheet. E is perpendicular to the sheet on both sides, so flux leaves through both flat faces: \(2EA = \dfrac{\sigma A}{\varepsilon_0}\), giving \[E = \frac{\sigma}{2\varepsilon_0}\] independent of distance. Two parallel sheets with +σ and −σ give \(E = \sigma/\varepsilon_0\) between them and zero outside: the basis of the parallel-plate capacitor.`,
      { ex: { q: R`Find the field near a large sheet with σ = 8.85 μC/m².`,
        steps: [R`\(E = \dfrac{8.85\times10^{-6}}{2\times8.85\times10^{-12}}\).`], ans: R`5 × 10⁵ N/C` } },
      { h3: R`Thin spherical shell (charge Q, radius R)` },
      R`<b>Outside (r > R):</b> a concentric Gaussian sphere encloses Q, so \(E = \dfrac{kQ}{r^2}\): the shell acts as if all its charge were at the centre. <b>Inside (r < R):</b> a Gaussian sphere encloses no charge, so \(E = 0\). At the surface, \(E = \dfrac{kQ}{R^2} = \dfrac{\sigma}{\varepsilon_0}\).`,
      { fig: figShellE, cap: R`E against r. For a charged shell (solid line), E = 0 inside and \(kQ/r^2\) outside. For a uniformly charged solid sphere, E rises linearly inside (dashed) and is the same outside.` },
      { ex: { q: R`A shell of radius 10 cm carries 1 μC. Find the field at 5 cm and at 20 cm from its centre.`,
        steps: [R`Inside: E = 0.`, R`Outside: \(E = \dfrac{9\times10^9\times10^{-6}}{0.2^2}\).`], ans: R`0 and 2.25 × 10⁵ N/C` } },
      { adv: R`<b>Uniformly charged solid sphere</b> (charge Q, radius R): inside, the Gaussian sphere of radius r encloses \(Q r^3/R^3\), so \(E = \dfrac{kQr}{R^3}\), increasing linearly from zero at the centre; outside, \(E = kQ/r^2\). <b>A cavity</b> inside a uniformly charged sphere has a uniform field \(\vec E = \dfrac{\rho}{3\varepsilon_0}\vec d\), where \(\vec d\) joins the centres.` },
      { check: { q: R`Why is the field of an infinite sheet independent of distance?`, ans: R`The field lines are parallel and never spread out, so their density stays the same at all distances.` } }
    ] },

    { h: R`Electric potential`, t: [6], blocks: [
      R`The electrostatic force is conservative, so we can define a potential energy and, per unit charge, a <b>potential</b>. The <b>electric potential</b> V at a point is the work done by an external agent in bringing a unit positive charge slowly from infinity to that point: \[V = \frac{W_{\infty\to P}}{q_0}\quad(\text{unit: volt, V} = \text{J/C})\] Potential is a scalar, which makes it much easier to add than the field.`,
      { derive: R`Potential of a point charge`, steps: [
        R`Bring the test charge from infinity to distance r against the repulsion: \(W = -\int_\infty^r\dfrac{kqq_0}{x^2}dx = \dfrac{kqq_0}{r}\).`,
        R`\[V = \frac{kq}{r}\] positive near a positive charge and negative near a negative charge.`
      ] },
      R`<b>System of charges:</b> potentials add as ordinary numbers: \(V = \sum\dfrac{kq_i}{r_i}\). <b>Dipole:</b> at distance r and angle θ from the axis (r ≫ a), \(V = \dfrac{kp\cos\theta}{r^2}\); it is zero everywhere on the equatorial plane.`,
      { fig: figShellV, cap: R`Potential of a charged spherical shell: kQ/r outside and constant (equal to its surface value) everywhere inside, where E = 0.` },
      { ex: { q: R`Find the potential 10 cm from a 1 μC charge, and the work needed to bring a 2 μC charge there from infinity.`,
        steps: [R`\(V = \dfrac{9\times10^9\times10^{-6}}{0.1} = 9\times10^4\) V.`, R`W = qV.`], ans: R`9 × 10⁴ V; 0.18 J` } },
      { ex: { q: R`Four charges of +1 μC sit at the corners of a square of side 10 cm. Find the field and the potential at the centre.`,
        steps: [R`The fields cancel in pairs, so E = 0.`, R`Each corner is \(0.1/\sqrt2\) m away: \(V = 4\times\dfrac{9\times10^9\times10^{-6}}{0.0707}\).`], ans: R`E = 0 but V ≈ 5.1 × 10⁵ V` } },
      { mistake: R`Thinking V = 0 means E = 0, or the other way round. At the centre of a dipole V = 0 but E ≠ 0; at the centre of the square above, E = 0 but V ≠ 0.` },
      { check: { q: R`What is the potential at the midpoint between charges +q and −q?`, ans: R`Zero (the two contributions cancel), although the field there is not zero.` } }
    ] },

    { h: R`Potential difference and the field–potential relation`, t: [6], blocks: [
      R`The <b>potential difference</b> between points A and B is the work done in moving a unit positive charge from A to B: \(V_B - V_A = \dfrac{W_{AB}}{q_0} = -\displaystyle\int_A^B\vec E\cdot d\vec l\). Because the field is conservative, this does not depend on the path.`,
      R`Conversely, the field is the negative gradient of the potential: \[E = -\frac{dV}{dr}\quad\text{or}\quad E_x = -\frac{\partial V}{\partial x},\ E_y = -\frac{\partial V}{\partial y},\ E_z = -\frac{\partial V}{\partial z}\] The field points in the direction in which the potential <b>decreases</b> fastest. In a uniform field, \(E = V/d\), which is why E is also measured in V/m.`,
      { ex: { q: R`The potential in a region is \(V = 5x^2 + 10\) volts (x in metres). Find the field at x = 1 m.`,
        steps: [R`\(E = -\dfrac{dV}{dx} = -10x\).`], ans: R`10 V/m in the −x direction` } },
      { ex: { q: R`Two parallel plates 2 cm apart are kept at a potential difference of 100 V. Find the field between them.`,
        steps: [R`\(E = V/d = 100/0.02\).`], ans: R`5000 V/m` } },
      R`<b>The electron-volt:</b> the energy gained by an electron accelerated through 1 V is 1 eV = 1.6 × 10⁻¹⁹ J, a convenient unit for atomic energies.`,
      { ex: { q: R`An electron starts from rest and is accelerated through 100 V. Find its kinetic energy and speed.`,
        steps: [R`KE = eV = 100 eV = 1.6 × 10⁻¹⁷ J.`, R`\(v = \sqrt{2\,\text{KE}/m} = \sqrt{\dfrac{2\times1.6\times10^{-17}}{9.1\times10^{-31}}}\).`], ans: R`100 eV; ≈ 5.9 × 10⁶ m/s` } },
      { check: { q: R`A positive charge is released from rest in a field. Does it move to higher or lower potential?`, ans: R`Lower potential (a negative charge moves to higher potential).` } }
    ] },

    { h: R`Potential energy of a system of charges`, t: [6], blocks: [
      R`The <b>electrostatic potential energy</b> of a system is the work done to assemble it by bringing the charges one by one from infinity. For two point charges: \[U = \frac{kq_1q_2}{r}\] It is positive for like charges (work was needed to push them together) and negative for unlike charges (they attract, so the system is bound).`,
      R`For more charges, add the energy of every pair: \(U = \sum_{\text{pairs}}\dfrac{kq_iq_j}{r_{ij}}\). For three charges, \(U = k\left(\dfrac{q_1q_2}{r_{12}} + \dfrac{q_2q_3}{r_{23}} + \dfrac{q_1q_3}{r_{13}}\right)\).`,
      R`A single charge q in an external potential V has potential energy \(U = qV\). A dipole in a uniform field has \(U = -\vec p\cdot\vec E\).`,
      { ex: { q: R`Find the potential energy of charges +1 μC and −2 μC placed 10 cm apart.`,
        steps: [R`\(U = \dfrac{9\times10^9\times(10^{-6})(-2\times10^{-6})}{0.1}\).`], ans: R`−0.18 J (0.18 J is needed to pull them apart)` } },
      { ex: { q: R`Three charges of 1 μC each are placed at the corners of an equilateral triangle of side 10 cm. How much work was needed to assemble them?`,
        steps: [R`Three pairs, each \(\dfrac{9\times10^9\times10^{-12}}{0.1} = 0.09\) J.`], ans: R`0.27 J` } },
      { check: { q: R`Is the potential energy of a hydrogen atom (electron + proton) positive or negative?`, ans: R`Negative: unlike charges, so the system is bound.` } }
    ] },

    { h: R`Equipotential surfaces`, t: [7], blocks: [
      R`An <b>equipotential surface</b> is a surface on which every point has the same potential.`,
      { fig: figEquip, cap: R`Equipotentials (dashed) are always perpendicular to the field lines: concentric spheres around a point charge, and parallel planes in a uniform field.` },
      { points: [
        R`No work is done in moving a charge along an equipotential surface (\(W = q\Delta V = 0\)).`,
        R`The field is always perpendicular to the equipotential surface at every point; otherwise it would have a component along the surface and do work.`,
        R`Equipotentials are closer together where the field is stronger (\(E = \Delta V/\Delta r\)).`,
        R`Two equipotential surfaces never intersect.`,
        R`The surface (and the whole body) of a conductor in electrostatic equilibrium is an equipotential.`
      ] },
      { ex: { q: R`Equipotentials of a point charge are drawn for 10 V steps. Are they equally spaced?`,
        steps: [R`\(V = kq/r\), so r = kq/V. Equal steps in V give unequal steps in r.`], ans: R`No: they get farther apart as you move away, where the field is weaker` } },
      { check: { q: R`How much work is done in carrying 5 μC once round an equipotential circle?`, ans: R`Zero.` } }
    ] },

    { h: R`Electrostatics of conductors`, t: [8], blocks: [
      R`In a conductor, free electrons move until the electric force on them is zero. In this state of <b>electrostatic equilibrium</b>:`,
      { points: [
        R`<b>The field inside the conductor is zero.</b> Any field would push the free electrons, so they rearrange until it vanishes.`,
        R`<b>Any excess charge lies on the outer surface.</b> A Gaussian surface just inside the conductor has E = 0, so it encloses no net charge.`,
        R`<b>The field just outside is perpendicular to the surface</b>, with magnitude \(E = \sigma/\varepsilon_0\).`,
        R`<b>The whole conductor is an equipotential</b>, inside and on the surface.`,
        R`<b>Charge density is greatest where the surface is most curved</b> (sharp points). The strong field there can ionise the air: this "corona discharge" is used in lightning conductors.`
      ] },
      { fig: figConductor, cap: R`A conductor placed in a field develops induced charges on its surface that exactly cancel the field inside it. Field lines meet the surface at right angles.` },
      { ex: { q: R`Two metal spheres of radii 1 cm and 3 cm are joined by a thin wire and given a total charge. Compare their charges and surface charge densities.`,
        steps: [R`Joined conductors reach the same potential: \(\dfrac{kq_1}{r_1} = \dfrac{kq_2}{r_2}\), so q ∝ r.`, R`\(\sigma = \dfrac{q}{4\pi r^2}\propto\dfrac1r\).`], ans: R`\(q_1 : q_2 = 1 : 3\); \(\sigma_1 : \sigma_2 = 3 : 1\) (the smaller sphere has the denser charge)` } },
      { h3: R`Electrostatic shielding` },
      R`Because the field is zero inside a conductor, it is also zero inside a <b>hollow</b> conductor (a cavity with no charge in it), whatever charges or fields are outside. The cavity is shielded. This is <b>electrostatic shielding</b>: a car or aeroplane struck by lightning protects the people inside (a Faraday cage), and sensitive instruments and cables are wrapped in metal screens.`,
      { check: { q: R`Where is it safest to be during a thunderstorm: in an open field, under a tree, or inside a car?`, ans: R`Inside a car (a metal box): the field inside a closed conductor is zero.` } }
    ] },

    { h: R`Dielectrics and polarisation`, t: [9], blocks: [
      R`<b>Dielectrics</b> are insulators. They have no free charges, but their molecules respond to a field.`,
      { points: [R`<b>Non-polar molecules</b> (H₂, O₂, CO₂, CH₄) have no dipole moment of their own: their positive and negative charge centres coincide. A field pulls them apart, inducing a dipole moment.`, R`<b>Polar molecules</b> (H₂O, HCl, NH₃) have permanent dipole moments, randomly oriented in the absence of a field. A field tends to line them up.`] },
      R`Either way, the dielectric acquires a net dipole moment per unit volume, its <b>polarisation</b> \(\vec P\). Inside the material the dipoles cancel, but uncompensated <b>bound charges</b> appear on its surfaces (−σ_p on the side facing the positive plate, +σ_p on the other). These produce a field opposing the applied one.`,
      { fig: figDielectric, cap: R`Induced surface charges on a dielectric slab produce an opposing field, so the field inside is reduced from E₀ to E₀/K.` },
      R`The <b>dielectric constant</b> (relative permittivity) is the factor by which the field is reduced: \[K = \frac{E_0}{E} = \frac{\varepsilon}{\varepsilon_0}\geq 1\] Values: vacuum 1, air 1.0006, paper ≈ 3.5, glass ≈ 5–10, water ≈ 80. A conductor behaves like a dielectric with K → ∞ (the field inside is zero).`,
      { adv: R`For a linear dielectric, \(\vec P = \varepsilon_0\chi_e\vec E\), where \(\chi_e\) is the electric susceptibility, and \(K = 1 + \chi_e\). The bound surface charge density is \(\sigma_p = \sigma\left(1 - \dfrac1K\right)\).` },
      { check: { q: R`Why is water such a good solvent for ionic compounds?`, ans: R`Its high dielectric constant (≈ 80) reduces the attraction between ions by about 80 times.` } }
    ] },

    { h: R`Capacitors and capacitance`, t: [10, 11], blocks: [
      R`A <b>capacitor</b> is two conductors separated by an insulator, carrying equal and opposite charges +Q and −Q. The potential difference V between them is proportional to Q, and the constant ratio is its <b>capacitance</b>: \[C = \frac QV\quad(\text{unit: farad, F} = \text{C/V})\] Capacitance depends only on the shapes, sizes and separation of the conductors and the medium between them. A farad is huge; practical capacitors are measured in μF, nF and pF.`,
      R`<b>Isolated sphere:</b> \(V = kQ/R\), so \(C = 4\pi\varepsilon_0R\). Even the whole Earth (R = 6400 km) has a capacitance of only about 711 μF.`,
      { fig: figPPC, cap: R`A parallel-plate capacitor: two plates of area A a small distance d apart. The field between them is uniform.` },
      { derive: R`Capacitance of a parallel-plate capacitor`, steps: [
        R`Surface charge densities ±σ with \(\sigma = Q/A\). Between the plates, the two sheets give \(E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{Q}{\varepsilon_0A}\) (and zero outside, ignoring fringing at the edges).`,
        R`Potential difference \(V = Ed = \dfrac{Qd}{\varepsilon_0A}\).`,
        R`\[C = \frac QV = \frac{\varepsilon_0A}{d}\]`
      ] },
      { ex: { q: R`Find the capacitance of a parallel-plate capacitor with square plates of side 10 cm, 1 mm apart, in air.`,
        steps: [R`\(C = \dfrac{8.85\times10^{-12}\times0.01}{10^{-3}}\).`], ans: R`≈ 88.5 pF` } },
      { ex: { q: R`How large would the plates of a 1 F air capacitor with 1 mm separation need to be?`,
        steps: [R`\(A = \dfrac{Cd}{\varepsilon_0} = \dfrac{1\times10^{-3}}{8.85\times10^{-12}}\).`], ans: R`≈ 1.1 × 10⁸ m², a square about 10.6 km on each side!` } },
      { check: { q: R`How does the capacitance change if the plate separation is doubled?`, ans: R`It halves.` } }
    ] },

    { h: R`Capacitor with a dielectric`, t: [11], blocks: [
      R`Filling the space between the plates with a dielectric of constant K reduces the field (and so V) by a factor K for the same charge, so the capacitance increases K times: \[C = \frac{K\varepsilon_0A}{d} = KC_0\] This is why real capacitors use thin dielectric films: they give large capacitance in a small size, and they also let the capacitor withstand higher voltages.`,
      { fig: figSlab, cap: R`A slab of thickness t and dielectric constant K partly fills a parallel-plate capacitor of separation d.` },
      { derive: R`Partly filled capacitor`, steps: [
        R`The field is \(E_0 = \sigma/\varepsilon_0\) in the air gap (total width d − t) and \(E_0/K\) in the slab.`,
        R`\(V = E_0(d - t) + \dfrac{E_0}{K}t = \dfrac{Q}{\varepsilon_0A}\left(d - t + \dfrac tK\right)\).`,
        R`\[C = \frac{\varepsilon_0A}{d - t + t/K}\] A metal slab (K → ∞) gives \(C = \dfrac{\varepsilon_0A}{d - t}\).`
      ] },
      { ex: { q: R`A capacitor (A = 0.01 m², d = 4 mm) has a 2 mm slab of K = 4 inserted. Find its capacitance.`,
        steps: [R`\(C = \dfrac{8.85\times10^{-12}\times0.01}{0.004 - 0.002 + 0.0005}\).`], ans: R`≈ 35.4 pF (compared with 22.1 pF without the slab)` } },
      { tip: R`Inserting a dielectric with the battery <b>connected</b>: V stays fixed; C, Q and U all increase K times. With the battery <b>disconnected</b>: Q stays fixed; C increases K times, while V and U decrease K times.` },
      { check: { q: R`A charged, isolated capacitor has a dielectric slab inserted. Does its stored energy increase or decrease?`, ans: R`It decreases (U = Q²/2C with C larger); the capacitor pulls the slab in, doing work on it.` } }
    ] },

    { h: R`Combination of capacitors`, t: [10], blocks: [
      { fig: figCombo, cap: R`In series, every capacitor carries the same charge; in parallel, every capacitor has the same voltage.` },
      { derive: R`Series and parallel`, steps: [
        R`<b>Series:</b> each capacitor carries the same charge Q (charge is induced plate to plate), and the voltages add: \(V = \dfrac{Q}{C_1} + \dfrac{Q}{C_2} + \dots\), so \[\frac1{C_s} = \frac1{C_1} + \frac1{C_2} + \dots\]`,
        R`<b>Parallel:</b> each capacitor has the same voltage V, and the charges add: \(Q = C_1V + C_2V + \dots\), so \[C_p = C_1 + C_2 + \dots\]`
      ] },
      R`So capacitors combine the opposite way to resistors. A series combination is smaller than the smallest capacitor (but can withstand a higher total voltage); a parallel combination is larger than the largest.`,
      { ex: { q: R`Capacitors of 2 μF and 3 μF are connected to a 10 V battery (a) in series (b) in parallel. Find the total capacitance and the charge and voltage on each.`,
        steps: [R`(a) \(C_s = \dfrac{2\times3}{2 + 3} = 1.2\) μF; Q = 12 μC on each; \(V_1 = 12/2 = 6\) V, \(V_2 = 12/3 = 4\) V.`, R`(b) \(C_p = 5\) μF; V = 10 V on each; \(Q_1 = 20\) μC, \(Q_2 = 30\) μC.`], ans: R`(a) 1.2 μF; 12 μC each; 6 V and 4 V (b) 5 μF; 20 μC and 30 μC` } },
      { tip: R`In series, voltage divides in the inverse ratio of capacitance (the smaller capacitor gets the larger share). In parallel, charge divides in direct proportion to capacitance.` },
      { check: { q: R`What is the equivalent of n identical capacitors C in series? In parallel?`, ans: R`C/n in series; nC in parallel.` } }
    ] },

    { h: R`Energy stored in a capacitor`, t: [12], blocks: [
      R`Charging a capacitor takes work: each new bit of charge dq must be pushed against the voltage already built up. This work is stored as electrostatic energy.`,
      { derive: R`Energy stored`, steps: [
        R`When the charge is q, the voltage is q/C. Adding dq needs \(dW = \dfrac qC\,dq\).`,
        R`Total: \(W = \displaystyle\int_0^Q\frac qC\,dq = \frac{Q^2}{2C}\).`,
        R`\[U = \frac{Q^2}{2C} = \frac12CV^2 = \frac12QV\]`
      ] },
      { fig: figQV, cap: R`Q is proportional to V; the energy stored is the area of the triangle under the line.` },
      { ex: { q: R`Find the energy stored in a 10 μF capacitor charged to 100 V.`,
        steps: [R`\(U = \frac12\times10^{-5}\times100^2\).`], ans: R`0.05 J` } },
      { h3: R`Energy density of the electric field` },
      R`For a parallel-plate capacitor, \(U = \frac12CV^2 = \frac12\dfrac{\varepsilon_0A}{d}(Ed)^2 = \frac12\varepsilon_0E^2(Ad)\). Since Ad is the volume between the plates, the energy per unit volume is \[u = \frac12\varepsilon_0E^2\] This holds for any electric field: the energy is stored in the field itself. (In a dielectric, \(u = \frac12K\varepsilon_0E^2\).)`,
      { ex: { q: R`Find the energy density in a field of 10⁶ V/m in air.`,
        steps: [R`\(u = \frac12\times8.85\times10^{-12}\times10^{12}\).`], ans: R`≈ 4.4 J/m³` } },
      { adv: R`<b>Force between the plates:</b> each plate is pulled by the field of the other (σ/2ε₀), so \(F = \dfrac{Q^2}{2\varepsilon_0A}\), attractive.` },
      { check: { q: R`If the voltage on a capacitor is doubled, how does the stored energy change?`, ans: R`It becomes 4 times larger.` } }
    ] },

    { h: R`Sharing of charge between capacitors`, t: [12], blocks: [
      R`Connect a charged capacitor \(C_1\) (at potential \(V_1\)) to another capacitor \(C_2\) (at \(V_2\)), positive plate to positive plate. Charge flows until both reach a <b>common potential</b>. Charge is conserved, so \[V = \frac{C_1V_1 + C_2V_2}{C_1 + C_2}\]`,
      R`Energy, however, is <b>not</b> conserved: some is lost as heat in the connecting wires and as electromagnetic radiation during the brief current. The loss is \[\Delta U = \frac{C_1C_2(V_1 - V_2)^2}{2(C_1 + C_2)}\] It is always positive, whatever the resistance of the wires.`,
      { ex: { q: R`A 3 μF capacitor charged to 100 V is connected to an uncharged 2 μF capacitor. Find the common potential and the energy lost.`,
        steps: [R`\(V = \dfrac{3\times100}{3 + 2} = 60\) V.`, R`Initial energy \(\frac12\times3\times10^{-6}\times100^2 = 0.015\) J; final \(\frac12\times5\times10^{-6}\times60^2 = 0.009\) J.`], ans: R`60 V; 0.006 J lost (check: \(\dfrac{6\times10^{-12}\times10^4}{2\times5\times10^{-6}} = 0.006\) J)` } },
      { mistake: R`Assuming energy is conserved when capacitors share charge. Charge is conserved; energy is not.` },
      { check: { q: R`Two identical capacitors, one charged to V and one uncharged, are connected. What fraction of the energy is lost?`, ans: R`Half: the common potential is V/2, and the final energy is \(2\times\frac12C(V/2)^2 = \frac14CV^2\), half of \(\frac12CV^2\).` } }
    ] }
  ],
  summary: [
    R`Charge is additive, quantised (q = ne, e = 1.6 × 10⁻¹⁹ C) and conserved. Charging by friction, conduction and induction.`,
    R`Coulomb: \(F = \dfrac{kq_1q_2}{r^2}\), k = 9 × 10⁹; in a medium divide by K. Forces add as vectors (superposition).`,
    R`Charge densities λ, σ, ρ; ring on axis \(E = \dfrac{kQx}{(R^2 + x^2)^{3/2}}\).`,
    R`Field \(\vec E = \vec F/q_0\); point charge \(kq/r^2\). Field lines: start on +, end on −, never cross, ⟂ to conductors.`,
    R`Dipole p = q·2a (− to +): \(E_{axial} = 2kp/r^3\), \(E_{eq} = kp/r^3\) (opposite to p).`,
    R`Dipole in uniform field: no net force; \(\tau = pE\sin\theta\), \(U = -pE\cos\theta\).`,
    R`Flux \(\Phi = \oint\vec E\cdot d\vec A\). Gauss: \(\Phi = q_{enc}/\varepsilon_0\).`,
    R`Line: \(E = \lambda/2\pi\varepsilon_0r\); sheet: \(\sigma/2\varepsilon_0\); shell: \(kQ/r^2\) outside, 0 inside; solid sphere: \(kQr/R^3\) inside.`,
    R`Potential \(V = kq/r\) (scalar, adds directly); dipole \(kp\cos\theta/r^2\); \(E = -dV/dr\); uniform field \(E = V/d\).`,
    R`Potential energy \(U = kq_1q_2/r\) (sum over pairs); charge in potential: qV. 1 eV = 1.6 × 10⁻¹⁹ J.`,
    R`Equipotentials ⟂ field lines; no work along them.`,
    R`Conductors: E = 0 inside, charge on the outer surface, \(E = \sigma/\varepsilon_0\) just outside, σ largest at sharp points; shielding.`,
    R`Dielectrics: polar/non-polar molecules, polarisation, \(K = E_0/E\).`,
    R`C = Q/V; sphere \(4\pi\varepsilon_0R\); parallel plate \(\varepsilon_0A/d\); with dielectric \(K\varepsilon_0A/d\); partial slab \(\varepsilon_0A/(d - t + t/K)\).`,
    R`Series \(1/C = \sum1/C_i\) (same Q); parallel \(C = \sum C_i\) (same V).`,
    R`Energy \(U = \frac12CV^2 = Q^2/2C\); energy density \(\frac12\varepsilon_0E^2\). Sharing: common V = ΣCV/ΣC; loss \(\dfrac{C_1C_2(V_1 - V_2)^2}{2(C_1 + C_2)}\).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §5.3 Coulomb's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/5-3-coulombs-law' },
    { t: R`OpenStax University Physics Vol. 2, §5.5 Calculating Electric Fields of Charge Distributions`, url: 'https://openstax.org/books/university-physics-volume-2/pages/5-5-calculating-electric-fields-of-charge-distributions' },
    { t: R`OpenStax University Physics Vol. 2, §5.6 Electric Field Lines`, url: 'https://openstax.org/books/university-physics-volume-2/pages/5-6-electric-field-lines' },
    { t: R`OpenStax University Physics Vol. 2, §5.7 Electric Dipoles`, url: 'https://openstax.org/books/university-physics-volume-2/pages/5-7-electric-dipoles' },
    { t: R`OpenStax University Physics Vol. 2, §6.2 Explaining Gauss's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/6-2-explaining-gausss-law' },
    { t: R`OpenStax University Physics Vol. 2, §6.3 Applying Gauss's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/6-3-applying-gausss-law' },
    { t: R`OpenStax University Physics Vol. 2, §6.4 Conductors in Electrostatic Equilibrium`, url: 'https://openstax.org/books/university-physics-volume-2/pages/6-4-conductors-in-electrostatic-equilibrium' },
    { t: R`OpenStax University Physics Vol. 2, §7.2 Electric Potential and Potential Difference`, url: 'https://openstax.org/books/university-physics-volume-2/pages/7-2-electric-potential-and-potential-difference' },
    { t: R`OpenStax University Physics Vol. 2, §7.4 Determining Field from Potential`, url: 'https://openstax.org/books/university-physics-volume-2/pages/7-4-determining-field-from-potential' },
    { t: R`OpenStax University Physics Vol. 2, §7.5 Equipotential Surfaces and Conductors`, url: 'https://openstax.org/books/university-physics-volume-2/pages/7-5-equipotential-surfaces-and-conductors' },
    { t: R`OpenStax University Physics Vol. 2, §8.2 Capacitors in Series and in Parallel`, url: 'https://openstax.org/books/university-physics-volume-2/pages/8-2-capacitors-in-series-and-in-parallel' },
    { t: R`OpenStax University Physics Vol. 2, §8.3 Energy Stored in a Capacitor`, url: 'https://openstax.org/books/university-physics-volume-2/pages/8-3-energy-stored-in-a-capacitor' },
    { t: R`OpenStax University Physics Vol. 2, §8.4 Capacitor with a Dielectric`, url: 'https://openstax.org/books/university-physics-volume-2/pages/8-4-capacitor-with-a-dielectric' }
  ]
});
})();
