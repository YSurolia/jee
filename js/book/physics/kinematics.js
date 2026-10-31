// Book chapter: Kinematics. Full theory with diagrams (rendered on the Theory tab).
var R = String.raw, D = JEE.D;

// ---------- figures ----------
function kinCar(x, y, color) {
  return D.rect(x - 22, y - 16, 44, 15, { color: color, fill: 'soft', r: 4 }) +
    D.circle(x - 11, y + 1, 4.5, { fill: 'k' }) + D.circle(x + 11, y + 1, 4.5, { fill: 'k' });
}

var kinFigNumberLine = (function () {
  var p = [], X = function (v) { return 200 + v * 32; };
  p.push(D.arrow(22, 78, 386, 78, { w: 1.6, head: 8 }));
  for (var v = -5; v <= 5; v++) {
    p.push(D.line(X(v), 73, X(v), 83, { w: 1.3 }));
    p.push(D.text(X(v), 97, v === 0 ? 'O' : String(v).replace('-', '−'), { color: v === 0 ? 'k' : 'm', size: 12, bold: v === 0 }));
  }
  p.push(D.text(390, 62, 'x (m)', { anchor: 'end', color: 'm', math: true }));
  p.push(kinCar(X(3), 76, 'c'), D.text(X(3), 40, 'car at x = +3 m', { color: 'c' }));
  p.push(D.dot(X(-2), 78, { color: 'o', r: 5 }), D.text(X(-2), 52, 'P at x = −2 m', { color: 'o' }));
  p.push(D.arrow(225, 118, 335, 118, { color: 'm', w: 1.5, head: 7 }), D.text(280, 133, 'positive direction', { color: 'm', size: 12 }));
  p.push(D.arrow(175, 118, 65, 118, { color: 'm', w: 1.5, head: 7 }), D.text(120, 133, 'negative direction', { color: 'm', size: 12 }));
  return D.svg(400, 145, p, 'A number line with origin O, a car at plus 3 metres and a point P at minus 2 metres');
})();

var kinFigPath = D.svg(380, 190, [
  D.path('M50 150 C 60 60, 140 20, 200 40 S 300 125, 330 60', { color: 'o', w: 3 }),
  D.text(140, 22, 'path actually walked = distance', { color: 'o' }),
  D.arrow(50, 150, 330, 60, { color: 'c', w: 2.6, head: 11 }),
  D.text(205, 122, 'displacement', { color: 'c', rot: -17.8, bold: true }),
  D.dot(50, 150, { r: 5 }), D.text(38, 165, 'A (start)', { anchor: 'start', size: 13 }),
  D.dot(330, 60, { r: 5 }), D.text(338, 78, 'B (end)', { anchor: 'start', size: 13 })
], 'A curved path from A to B and the straight displacement arrow from A to B');

var kinFigStrobe = (function () {
  var p = [];
  p.push(D.text(20, 18, 'Uniform velocity: equal gaps in equal times', { anchor: 'start', color: 'c', bold: true, size: 13 }));
  p.push(D.line(20, 50, 400, 50, { color: 'm', w: 1, op: 0.5 }));
  for (var k = 0; k <= 5; k++) { p.push(D.dot(40 + 64 * k, 50, { color: 'c', r: 6 })); p.push(D.text(40 + 64 * k, 70, k + ' s', { color: 'm', size: 11 })); }
  p.push(D.text(20, 100, 'Speeding up: the gaps keep growing', { anchor: 'start', color: 'o', bold: true, size: 13 }));
  p.push(D.line(20, 132, 400, 132, { color: 'm', w: 1, op: 0.5 }));
  for (k = 0; k <= 5; k++) { var x = 40 + 20 * k + 10 * k * k; p.push(D.dot(x, 132, { color: 'o', r: 6 })); p.push(D.text(x, 152, k + ' s', { color: 'm', size: 11 })); }
  return D.svg(420, 162, p, 'Strobe pictures of uniform and accelerated motion');
})();

var kinFigXT = D.row([
  [D.plot({ w: 170, h: 130, x: [0, 5], y: [0, 4], xlabel: 't', ylabel: 'x', fns: [{ f: function () { return 2; } }], label: 'x-t graph at rest' }), '(a) at rest'],
  [D.plot({ w: 170, h: 130, x: [0, 5], y: [0, 4], xlabel: 't', ylabel: 'x', fns: [{ f: function (t) { return 0.3 + 0.7 * t; } }], label: 'x-t graph uniform velocity' }), '(b) uniform velocity'],
  [D.plot({ w: 170, h: 130, x: [0, 5], y: [0, 4], xlabel: 't', ylabel: 'x', fns: [{ f: function (t) { return 0.15 * t * t; } }], label: 'x-t graph speeding up' }), '(c) speeding up'],
  [D.plot({ w: 170, h: 130, x: [0, 5], y: [0, 4], xlabel: 't', ylabel: 'x', fns: [{ f: function (t) { return 4 - 0.15 * (5 - t) * (5 - t); } }], label: 'x-t graph slowing down' }), '(d) slowing down']
]);

var kinFigTangent = D.plot({
  w: 420, h: 250, x: [0, 4.6], y: [0, 12], xlabel: 't (s)', ylabel: 'x (m)', xticks: [1, 2, 3, 4], yticks: [3, 6, 9],
  fns: [{ f: function (t) { return t * t; }, label: 'x = t^2', lx: 2.35, ly: 3.6 },
        { f: function (t) { return 6 * t - 9; }, from: 1.5, to: 3.5, color: 'g', w: 2 }],
  segs: [{ x1: 1, y1: 1, x2: 3, y2: 9, color: 'o', dash: true, w: 2 }],
  pts: [{ x: 1, y: 1, label: 'P', pos: 'se' }, { x: 3, y: 9, label: 'Q', pos: 'nw' }],
  texts: [{ x: 1.75, y: 6.6, s: 'chord PQ: slope 4', color: 'o', anchor: 'end' }, { x: 3.4, y: 7.2, s: 'tangent at Q: slope 6', color: 'g', anchor: 'start' }],
  label: 'Graph of x equals t squared with a chord and a tangent'
});

var kinFigArea = D.plot({
  w: 380, h: 250, x: [0, 5], y: [0, 14], xlabel: 't (s)', ylabel: 'v (m/s)', xticks: [1, 2, 3, 4], yticks: [4, 8, 12],
  shade: [{ f: function () { return 4; }, from: 0, to: 4, color: 'b' }, { f: function (t) { return 4 + 2 * t; }, g: function () { return 4; }, from: 0, to: 4, color: 'o' }],
  fns: [{ f: function (t) { return 4 + 2 * t; }, from: 0, to: 4.7 }],
  guides: [[4, 12]], pts: [{ x: 4, y: 12, label: '(4, 12)', pos: 'nw' }],
  texts: [{ x: 2, y: 2, s: 'ut = 4 × 4 = 16 m', color: 'b' }, { x: 2.75, y: 6.4, s: '½at² = 16 m', color: 'o' }],
  label: 'Velocity-time graph: area under the line split into a rectangle and a triangle'
});

var kinFigTrain = D.plot({
  w: 400, h: 200, x: [0, 55], y: [0, 26], xlabel: 't (s)', ylabel: 'v (m/s)', xticks: [10, 40, 50], yticks: [20],
  shade: [{ f: function (t) { return t < 10 ? 2 * t : t < 40 ? 20 : 20 - 2 * (t - 40); }, from: 0, to: 50, color: 'c' }],
  fns: [{ f: function (t) { return t < 10 ? 2 * t : t < 40 ? 20 : 20 - 2 * (t - 40); }, from: 0, to: 50 }],
  texts: [{ x: 6.8, y: 5, s: '100 m', size: 12 }, { x: 25, y: 10, s: '600 m', size: 13 }, { x: 43.2, y: 5, s: '100 m', size: 12 }],
  label: 'Trapezium-shaped velocity-time graph of a train'
});

var kinFigCars = D.svg(400, 165, [
  D.ground(10, 152, 390, 152),
  D.line(10, 95, 390, 95, { color: 'm', w: 1.2, dash: '12 8' }),
  kinCar(120, 74, 'b'), D.arrow(150, 64, 225, 64, { color: 'b' }), D.text(232, 64, '*v*_B = 15 m/s', { color: 'b', anchor: 'start' }),
  D.text(88, 66, 'car B', { color: 'b', bold: true, size: 13, anchor: 'end' }),
  kinCar(240, 138, 'o'), D.arrow(270, 128, 370, 128, { color: 'o' }), D.text(320, 112, '*v*_A = 20 m/s', { color: 'o' }),
  D.text(208, 130, 'car A', { color: 'o', bold: true, size: 13, anchor: 'end' })
], 'Car A at 20 m/s overtaking car B at 15 m/s');

var kinFigVectors = (function () {
  var c55 = Math.cos(55 * Math.PI / 180), s55 = Math.sin(55 * Math.PI / 180);
  var tri = D.svg(210, 170, [
    D.arrow(20, 140, 130, 140, { color: 'c', label: 'P', ly: 16 }),
    D.arrow(130, 140, 130 + 80 * c55, 140 - 80 * s55, { color: 'o', label: 'Q', lx: 14, ly: 4 }),
    D.arrow(20, 140, 130 + 80 * c55, 140 - 80 * s55, { color: 'g', w: 2.6, label: 'R = P + Q', lx: -24, ly: -14 })
  ], 'Triangle law of vector addition');
  var Cx = 20 + 110 + 80 * c55, Cy = 140 - 80 * s55;
  var par = D.svg(220, 170, [
    D.line(130, 140, Cx, Cy, { color: 'm', dash: true, w: 1.3 }), D.line(20 + 80 * c55, 140 - 80 * s55, Cx, Cy, { color: 'm', dash: true, w: 1.3 }),
    D.arrow(20, 140, 130, 140, { color: 'c', label: 'P', ly: 16 }),
    D.arrow(20, 140, 20 + 80 * c55, 140 - 80 * s55, { color: 'o', label: 'Q', lx: -12, ly: -2 }),
    D.arrow(20, 140, Cx, Cy, { color: 'g', w: 2.6, label: 'R', lx: 4, ly: -12 }),
    D.angle(20, 140, 30, 0, 55, 'θ', { lr: 10 }),
    D.angle(20, 140, 52, 0, Math.atan2(80 * s55, 110 + 80 * c55) * 180 / Math.PI, 'α', { color: 'g', lr: 10 })
  ], 'Parallelogram law of vector addition');
  return D.row([[tri, '(a) triangle law'], [par, '(b) parallelogram law']]);
})();

var kinFigResolve = (function () {
  var t = 35 * Math.PI / 180, L = 165, tx = 40 + L * Math.cos(t), ty = 165 - L * Math.sin(t);
  return D.svg(270, 195, [
    D.arrow(40, 165, 255, 165, { w: 1.4, head: 8 }), D.text(258, 180, 'x', { math: true, color: 'm', anchor: 'end' }),
    D.arrow(40, 165, 40, 12, { w: 1.4, head: 8 }), D.text(52, 14, 'y', { math: true, color: 'm' }),
    D.line(tx, ty, tx, 165, { color: 'm', dash: true, w: 1.2 }), D.line(tx, ty, 40, ty, { color: 'm', dash: true, w: 1.2 }),
    D.arrow(40, 165, tx, 165, { color: 'o', w: 3, label: 'A cos θ', ly: 18 }),
    D.arrow(40, 165, 40, ty, { color: 'b', w: 3, label: 'A sin θ', lx: -10, ly: 0, anchor: 'end' }),
    D.arrow(40, 165, tx, ty, { color: 'c', w: 2.6, label: 'A', lx: -8, ly: -12 }),
    D.angle(40, 165, 36, 0, 35, 'θ')
  ], 'Resolving vector A into x and y components');
})();

var kinFigPlane = (function () {
  function B(t) { var a = (1 - t) * (1 - t), b = 2 * (1 - t) * t, c = t * t; return [a * 60 + b * 130 + c * 270, a * 160 + b * 60 + c * 90]; }
  var P = B(0.3), Q = B(0.85);
  return D.svg(300, 215, [
    D.arrow(30, 195, 290, 195, { w: 1.3, head: 8 }), D.arrow(30, 195, 30, 15, { w: 1.3, head: 8 }),
    D.text(22, 205, 'O', { math: true, color: 'm' }), D.text(286, 182, 'x', { math: true, color: 'm' }), D.text(42, 18, 'y', { math: true, color: 'm' }),
    D.path('M60 160 Q 130 60 270 90', { color: 'm', w: 2, dash: '6 4' }),
    D.arrow(30, 195, P[0], P[1], { color: 'b', label: 'r_1', lx: -20, ly: 10 }),
    D.arrow(30, 195, Q[0], Q[1], { color: 'o', label: 'r_2', lx: 10, ly: 10 }),
    D.arrow(P[0], P[1], Q[0], Q[1], { color: 'g', w: 2.6, label: 'Δr', ly: -12 }),
    D.dot(P[0], P[1]), D.text(P[0] - 12, P[1] - 8, 'P', { math: true }),
    D.dot(Q[0], Q[1]), D.text(Q[0] + 4, Q[1] - 14, 'Q', { math: true }),
    D.text(250, 120, 'path', { color: 'm', size: 12 })
  ], 'Position vectors r1 and r2 of points P and Q on a curved path, and the displacement between them');
})();

var kinFigRain = D.svg(240, 200, [
  D.arrow(150, 30, 150, 140, { color: 'b' }), D.text(160, 85, '*v*_r (rain)', { color: 'b', anchor: 'start' }),
  D.arrow(150, 140, 70, 140, { color: 'o', label: '−v_m', ly: 16 }),
  D.arrow(150, 30, 70, 140, { color: 'g', w: 2.6 }),
  D.text(95, 76, 'rain as you see it', { color: 'g', rot: -54, size: 12 }),
  D.angle(150, 30, 34, -126, -90, 'θ', { lr: 12 }),
  D.arrow(30, 185, 100, 185, { color: 'o', w: 1.6, head: 7 }), D.text(108, 185, 'you walk at v_m', { anchor: 'start', color: 'o', size: 12 })
], 'Vector triangle for rain falling vertically on a person walking forward');

var kinFigRiver = (function () {
  function banks() {
    var p = [D.ground(10, 30, 190, 30, { side: -1 }), D.ground(10, 180, 190, 180)];
    p.push(D.arrow(150, 100, 182, 100, { color: 'm', w: 1.3, head: 6 }), D.text(166, 88, 'u', { math: true, color: 'm' }));
    return p;
  }
  var a = D.svg(200, 205, banks().concat([
    D.line(50, 180, 140, 30, { color: 'g', dash: true, w: 2 }),
    D.arrow(50, 180, 50, 110, { color: 'c', label: 'v', lx: -10, ly: 0, anchor: 'end' }),
    D.arrow(50, 110, 92, 110, { color: 'b', label: 'u', ly: -10 }),
    D.dot(50, 180, { color: 'c' }), D.dot(140, 30, { color: 'g' }),
    D.arrow(50, 16, 140, 16, { color: 'm', w: 1.2, head: 6, both: true }), D.text(95, 6, 'drift', { color: 'm', size: 12 })
  ]), 'Boat heading straight across a river and drifting downstream');
  var b = D.svg(200, 205, banks().concat([
    D.line(130, 180, 130, 30, { color: 'g', dash: true, w: 2 }),
    D.arrow(130, 180, 88, 124, { color: 'c', label: 'v', lx: -10, ly: 2, anchor: 'end' }),
    D.arrow(88, 124, 130, 124, { color: 'b', label: 'u', ly: -10 }),
    D.angle(130, 180, 30, 90, 126.9, 'θ', { lr: 10 }),
    D.dot(130, 180, { color: 'c' }), D.dot(130, 30, { color: 'g' })
  ]), 'Boat heading upstream so that it crosses straight across');
  return D.row([[a, '(a) quickest crossing'], [b, '(b) straight across']]);
})();

var kinFigProjectile = (function () {
  var u = 20, th = 55 * Math.PI / 180, ux = u * Math.cos(th), uy = u * Math.sin(th), T = 2 * uy / 10, Rg = ux * T, H = uy * uy / 20, ox = 3, k = 0.55;
  var t2 = 2.8, x2 = ox + ux * t2, y2 = uy * t2 - 5 * t2 * t2, vy2 = uy - 10 * t2;
  return D.plot({
    w: 440, h: 250, x: [0, 44], y: [-3.6, 0], eq: true, xlabel: 'x', ylabel: 'y', noOrigin: true,
    param: [{ fx: function (t) { return ox + ux * t; }, fy: function (t) { return uy * t - 5 * t * t; }, t: [0, T] }],
    segs: [
      { x1: ox + Rg / 2, y1: 0, x2: ox + Rg / 2, y2: H, color: 'm', dash: true, w: 1.3 },
      { x1: ox, y1: 0, x2: ox + ux * k, y2: 0, color: 'o', arrow: true, w: 2.2 },
      { x1: ox, y1: 0, x2: ox, y2: uy * k, color: 'b', arrow: true, w: 2.2, label: 'u sin θ', lx: -34, ly: 0 },
      { x1: ox, y1: 0, x2: ox + ux * k, y2: uy * k, color: 'k', arrow: true, w: 2.4, label: 'u', lx: -4, ly: -12 },
      { x1: ox + Rg / 2, y1: H, x2: ox + Rg / 2 + ux * k, y2: H, color: 'o', arrow: true, w: 2.2, label: 'u cos θ', ly: -12 },
      { x1: x2, y1: y2, x2: x2 + ux * k, y2: y2, color: 'o', arrow: true, w: 1.8, dash: '4 3' },
      { x1: x2, y1: y2, x2: x2, y2: y2 + vy2 * k, color: 'b', arrow: true, w: 1.8, dash: '4 3' },
      { x1: x2, y1: y2, x2: x2 + ux * k, y2: y2 + vy2 * k, color: 'k', arrow: true, w: 2.2, label: 'v', lx: 12, ly: 4 }
    ],
    texts: [{ x: ox + Rg / 2 + 0.8, y: H / 2, s: 'H', anchor: 'start', math: true }, { x: ox + 4.6, y: -1.3, s: 'u cos θ', color: 'o', size: 13 }],
    extra: function (X, Y) {
      return [D.angle(X(ox), Y(0), 30, 0, 55, 'θ', { lr: 10 }),
        D.arrow(X(ox), Y(-2.6), X(ox + Rg), Y(-2.6), { color: 'm', w: 1.3, head: 7, both: true }),
        D.text((X(ox) + X(ox + Rg)) / 2, Y(-2.6) - 1, 'range R', { color: 'm', size: 12 })];
    },
    label: 'Path of a projectile with its velocity components'
  });
})();

var kinFigAngles = (function () {
  function path(deg, color) {
    var t = deg * Math.PI / 180, ux = 20 * Math.cos(t), uy = 20 * Math.sin(t);
    return { fx: function (s) { return ux * s; }, fy: function (s) { return uy * s - 5 * s * s; }, t: [0, 2 * uy / 10], color: color };
  }
  return D.plot({
    w: 420, h: 190, x: [0, 46], y: [0, 0], eq: true, xlabel: 'x (m)', ylabel: 'y (m)',
    param: [path(30, 'b'), path(45, 'c'), path(60, 'o')],
    xticks: [[34.64, '34.6'], [40, '40']],
    texts: [{ x: 17.3, y: 16.1, s: '60°', color: 'o' }, { x: 20, y: 11.1, s: '45°', color: 'c' }, { x: 17.3, y: 6.1, s: '30°', color: 'b' }],
    label: 'Projectile paths at 30, 45 and 60 degrees with the same speed'
  });
})();

var kinFigCircle = (function () {
  var cx = 120, cy = 120, r = 85, rad = Math.PI / 180;
  var P = [cx, cy - r], Q = [cx + r * Math.cos(50 * rad), cy - r * Math.sin(50 * rad)];
  var tq = [Math.sin(50 * rad), Math.cos(50 * rad)];
  var circ = D.svg(250, 225, [
    D.circle(cx, cy, r, { color: 'm', w: 1.6 }),
    D.dot(cx, cy, { r: 3 }), D.text(cx - 10, cy + 12, 'O', { math: true, color: 'm' }),
    D.line(cx, cy, P[0], P[1], { color: 'm', dash: true, w: 1.2 }), D.line(cx, cy, Q[0], Q[1], { color: 'm', dash: true, w: 1.2 }),
    D.angle(cx, cy, 26, 50, 90, 'Δθ', { lr: 12, size: 13 }),
    D.arrow(P[0], P[1], P[0] + 62, P[1], { color: 'c', w: 2.4, label: 'v_1', ly: -11 }),
    D.arrow(Q[0], Q[1], Q[0] + 62 * tq[0], Q[1] + 62 * tq[1], { color: 'c', w: 2.4, label: 'v_2', lx: 14, ly: -2 }),
    D.arrow(P[0], P[1], P[0], P[1] + 52, { color: 'r', w: 2.4, label: 'a_c', lx: -14, ly: 4 }),
    D.dot(P[0], P[1]), D.text(P[0] - 10, P[1] - 12, 'P', { math: true }),
    D.dot(Q[0], Q[1]), D.text(Q[0] + 12, Q[1] - 8, 'Q', { math: true })
  ], 'Particle moving clockwise in a circle with tangential velocity and centripetal acceleration');
  var tri = D.svg(170, 160, [
    D.arrow(25, 40, 135, 40, { color: 'c', w: 2.4, label: 'v_1', ly: -12 }),
    D.arrow(25, 40, 25 + 110 * Math.cos(40 * rad), 40 + 110 * Math.sin(40 * rad), { color: 'c', w: 2.4, label: 'v_2', lx: -16, ly: 6 }),
    D.arrow(135, 40, 25 + 110 * Math.cos(40 * rad), 40 + 110 * Math.sin(40 * rad), { color: 'r', w: 2.4, label: 'Δv', lx: 16, ly: 4 }),
    D.angle(25, 40, 32, -40, 0, 'Δθ', { lr: 13, size: 13 })
  ], 'Velocity triangle showing the change in velocity');
  return D.row([[circ, '(a) velocity is along the tangent'], [tri, '(b) Δv points to the centre']]);
})();

// ---------- chapter text ----------
JEE.book('physics', 'kinematics', {
  intro: [
    R`Everything around you moves: a cricket ball, a train leaving the station, the Moon going round the Earth, even the air you breathe. <b>Kinematics</b> is the part of physics that <i>describes</i> motion: where something is, how fast it is going, and how that speed changes. It does not ask <i>why</i> things move; that comes in the next chapter, Laws of Motion.`,
    R`The words and graphs you learn here (displacement, velocity, acceleration, vectors) are used in almost every other physics chapter, so take your time. Read each section, study its figure, open the derivations once, and try the Quick check before moving on. When you finish, solve the Examples tab (easy to hard) and then test yourself on the Practice tab.`
  ],
  sections: [
    { h: R`What is motion? The frame of reference`, t: [0], blocks: [
      R`Sit in a moving train and look at the person next to you. Are they moving? For you, no: they stay in the same seat. For someone standing on the platform, yes: they are moving at the train's speed. Both of you are right. Whether something is moving depends on <b>who is watching</b>.`,
      R`An object is in <b>motion</b> if its position changes with time compared with its surroundings, and at <b>rest</b> if its position does not change. Rest and motion are <b>relative</b>: the same object can be at rest for one observer and moving for another.`,
      R`To describe a position with numbers, we need a <b>frame of reference</b>. It has three parts: (1) an <b>origin</b>, the fixed point we measure from; (2) <b>axes</b>, the directions we measure along, such as x (east), y (north) and z (up); and (3) a <b>clock</b> to measure time.`,
      { fig: kinFigNumberLine, cap: R`A frame of reference in one dimension. The origin O is the zero point. Positions to its right are positive and positions to its left are negative.` },
      R`For motion along a straight road, one number is enough. \(x = +3\) m means 3 m to the right of O, and \(x = -2\) m means 2 m to the left. <b>The sign tells the direction.</b> For motion on a flat field we need two numbers (x, y), and in space three (x, y, z).`,
      { analogy: R`A frame of reference is like the address system of your town. "Second house to the left of the temple" only makes sense once everyone agrees where the temple is (the origin) and which way "left" is (the axis).` },
      { points: [R`Rest and motion are relative to the observer.`, R`Choose the origin and the positive direction once, at the start of a problem, and stick with them.`, R`Unless a question says otherwise, the ground (Earth) is the frame of reference.`] },
      { check: { q: R`A passenger sits in a bus moving at 40 km/h. What is the passenger's speed (a) relative to the bus (b) relative to the road?`, ans: R`(a) 0 (b) 40 km/h.` } }
    ] },

    { h: R`Distance and displacement`, t: [1], blocks: [
      R`Suppose you walk from home to a shop along a winding lane. Two different questions can be asked: "How much did you walk?" and "How far is the shop from home in a straight line, and in which direction?" These are two different quantities.`,
      R`<b>Distance</b> (or path length) is the total length of the path actually travelled. It has only a size, no direction, so it is a <b>scalar</b>. It can never be negative and it never decreases as time passes.`,
      R`<b>Displacement</b> is the straight-line change in position, from where you started to where you finished, <i>with direction</i>: \[\Delta x = x_2 - x_1\] It is a <b>vector</b>, and in one dimension its sign shows its direction. It can be positive, negative or zero.`,
      { fig: kinFigPath, cap: R`The orange curve is the path you actually walk; its length is the distance. The straight arrow from A to B is the displacement.` },
      { points: [R`Size of displacement ≤ distance. They are equal only for motion in a straight line without turning back.`, R`If you return to your starting point, the displacement is zero, but the distance is not.`] },
      { ex: { q: R`A boy walks 5 m forward along a straight corridor, then 2 m back. Find the distance and the displacement.`,
        steps: [R`Distance: add every bit walked, 5 + 2 = 7 m.`, R`Displacement: take forward as +. Then \(\Delta x = +5 - 2 = +3\) m.`],
        ans: R`Distance 7 m; displacement 3 m forward.` } },
      { ex: { q: R`An athlete runs one full round of a circular track of radius 7 m. Find the distance and the displacement. What are they for half a round?`,
        steps: [R`Full round: distance = circumference = \(2\pi r = 2\times\frac{22}{7}\times7 = 44\) m. She ends where she started, so displacement = 0.`, R`Half round: distance = 22 m. She ends at the opposite end of a diameter, so displacement = 2r = 14 m.`],
        ans: R`Full round: 44 m and 0. Half round: 22 m and 14 m.` } },
      { mistake: R`Saying the displacement for a round trip is "twice the distance". If you come back to the start, the displacement is zero.` }
    ] },

    { h: R`Speed and velocity`, t: [2], blocks: [
      R`<b>Speed</b> tells you how fast something moves. <b>Velocity</b> tells you how fast <i>and in which direction</i>.`,
      R`<b>Average speed</b> = total distance ÷ total time taken. <b>Average velocity</b> = displacement ÷ time taken: \[\bar v = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}\]`,
      R`The SI unit of both is metre per second (m/s). To change km/h into m/s, multiply by \(\frac{5}{18}\), because 1 km/h = 1000 m ÷ 3600 s = \(\frac{5}{18}\) m/s. So 72 km/h = 20 m/s and 36 km/h = 10 m/s.`,
      { h3: R`Instantaneous velocity` },
      R`The speedometer of a bike shows how fast you are going <i>at this very moment</i>, not on average. That is the <b>instantaneous</b> speed. To find it, take the average velocity over a smaller and smaller time interval: \[v = \lim_{\Delta t\to0}\frac{\Delta x}{\Delta t} = \frac{dx}{dt}\] In words: <b>velocity is the rate of change of position</b>. The size of the instantaneous velocity is the instantaneous speed.`,
      { analogy: R`Average speed is like your average marks over the whole year. Instantaneous speed is like the mark in one particular test.` },
      { ex: { q: R`A car goes from city A to city B at 60 km/h and returns at 40 km/h. Find its average speed and average velocity for the whole trip.`,
        steps: [R`Let the distance AB be d km. Time going = \(\frac{d}{60}\) h, time returning = \(\frac{d}{40}\) h.`, R`Total time = \(\frac{d}{60} + \frac{d}{40} = \frac{2d + 3d}{120} = \frac{d}{24}\) h. Total distance = 2d.`, R`Average speed = \(2d \div \frac{d}{24} = 48\) km/h.`, R`The car ends where it started, so displacement = 0 and average velocity = 0.`],
        ans: R`48 km/h (not 50!); average velocity 0.` } },
      { note: R`For two equal distances covered at speeds \(v_1\) and \(v_2\), average speed \(= \dfrac{2v_1v_2}{v_1 + v_2}\). For two equal <i>times</i>, it is simply \(\dfrac{v_1 + v_2}{2}\).`, title: 'Useful shortcut' },
      { mistake: R`Averaging the two speeds directly. (60 + 40)/2 = 50 km/h is wrong when the distances are equal, because the car spends more time at the slower speed.` },
      { check: { q: R`Convert 54 km/h into m/s.`, ans: R`\(54\times\frac{5}{18} = 15\) m/s.` } }
    ] },

    { h: R`Acceleration: uniform and non-uniform motion`, t: [3], blocks: [
      R`If an object covers equal displacements in equal intervals of time (however small the intervals), it is in <b>uniform motion</b>: its velocity is constant. Otherwise its motion is <b>non-uniform</b>: its velocity changes.`,
      { fig: kinFigStrobe, cap: R`Positions of two objects photographed once every second. Top: equal gaps, so the velocity is uniform. Bottom: the gaps keep growing, so the object is speeding up (accelerating).` },
      R`<b>Acceleration</b> is the rate of change of velocity: \[a_{avg} = \frac{\Delta v}{\Delta t},\qquad a = \frac{dv}{dt}\] Its SI unit is m/s². An acceleration of 2 m/s² means the velocity increases by 2 m/s every second.`,
      R`Acceleration is a vector. If it points the same way as the velocity, the object speeds up. If it points opposite to the velocity, the object slows down; this is called <b>retardation</b> or deceleration.`,
      { points: [R`Velocity changes if its size changes <i>or</i> its direction changes. A car going round a bend at a steady 40 km/h is still accelerating.`, R`Zero velocity does not mean zero acceleration. A ball thrown up is at rest for an instant at the top, but its acceleration is still g, downward.`, R`A negative acceleration does not always mean slowing down. The object slows down only when velocity and acceleration have opposite signs.`] },
      { ex: { q: R`A scooter speeds up from 18 km/h to 54 km/h in 5 s. Find its acceleration.`,
        steps: [R`Convert: u = 18 × 5/18 = 5 m/s and v = 54 × 5/18 = 15 m/s.`, R`\(a = \dfrac{v - u}{t} = \dfrac{15 - 5}{5}\).`],
        ans: R`2 m/s²` } },
      { check: { q: R`At the highest point of a ball thrown straight up, what are its velocity and acceleration?`, ans: R`Velocity 0; acceleration g = 9.8 m/s² downward.` } }
    ] },

    { h: R`Equations of motion for constant acceleration`, t: [1, 3], blocks: [
      R`When the acceleration stays constant (a car braking steadily, a stone falling freely), five quantities are linked: initial velocity <b>u</b>, final velocity <b>v</b>, acceleration <b>a</b>, time <b>t</b> and displacement <b>s</b>. Three equations connect them.`,
      { derive: R`Deriving the three equations of motion`, open: true, steps: [
        R`Acceleration is constant, so \(a = \dfrac{v - u}{t}\). Rearranging gives the <b>first equation</b>: \(v = u + at\).`,
        R`When velocity changes steadily, the average velocity is halfway between the start and end values: \(\bar v = \dfrac{u + v}{2}\). So \(s = \dfrac{u + v}{2}\,t\).`,
        R`Put \(v = u + at\) into this: \(s = \dfrac{u + u + at}{2}\,t\), which gives the <b>second equation</b>: \(s = ut + \tfrac12at^2\).`,
        R`From the first equation, \(t = \dfrac{v - u}{a}\). Put this into \(s = \dfrac{u + v}{2}t\): \(s = \dfrac{(v + u)(v - u)}{2a} = \dfrac{v^2 - u^2}{2a}\). This is the <b>third equation</b>: \(v^2 = u^2 + 2as\).`
      ] },
      { table: { head: [R`Equation`, R`Quantity it leaves out`], rows: [
        [R`\(v = u + at\)`, R`s (displacement)`], [R`\(s = ut + \frac12at^2\)`, R`v (final velocity)`], [R`\(v^2 = u^2 + 2as\)`, R`t (time)`], [R`\(s = \frac{u + v}{2}\,t\)`, R`a (acceleration)`]] } },
      R`<b>How to choose:</b> write down what you know and what you want. Then pick the equation that leaves out the one quantity you neither know nor need.`,
      { h3: R`Distance covered in the nth second` },
      R`The displacement during the nth second (from t = n − 1 to t = n) is \(s(n) - s(n-1)\), which works out to \[s_{n} = u + \frac{a}{2}(2n - 1)\]`,
      { h3: R`Free fall` },
      R`Near the Earth's surface, every object falls with the same acceleration \(g \approx 9.8\) m/s² (problems often use 10 m/s²), as long as air resistance is ignored. In a vacuum tube a feather and a coin fall side by side! If you take upward as positive, then \(a = -g\).`,
      { ex: { q: R`A car moving at 20 m/s brakes with a retardation of 5 m/s². How far does it go before stopping, and how long does it take?`,
        steps: [R`u = 20 m/s, v = 0, a = −5 m/s².`, R`\(v^2 = u^2 + 2as\): \(0 = 400 - 10s\), so s = 40 m.`, R`\(v = u + at\): \(0 = 20 - 5t\), so t = 4 s.`],
        ans: R`It stops after 40 m, in 4 s.` } },
      { ex: { q: R`A ball is thrown straight up at 20 m/s. Find (a) the maximum height (b) the time it takes to come back to the hand. (Take g = 10 m/s².)`,
        steps: [R`Take upward as +, so a = −10 m/s².`, R`At the top v = 0: \(0 = 20^2 - 2\times10\times H\), so H = 20 m.`, R`Time to reach the top: \(0 = 20 - 10t\), so t = 2 s. Coming down takes the same time, so the total is 4 s.`],
        ans: R`(a) 20 m (b) 4 s` } },
      { ex: { q: R`A body starts from rest with an acceleration of 4 m/s². How far does it travel in the 3rd second?`,
        steps: [R`\(s_n = u + \frac a2(2n - 1) = 0 + 2\times(2\times3 - 1) = 2\times5\).`, R`Check: in 3 s it covers \(\frac12\times4\times9 = 18\) m and in 2 s it covers 8 m, a difference of 10 m.`],
        ans: R`10 m` } },
      { mistake: R`Using these equations when the acceleration is not constant (for example a = 3t). Then you must use calculus: \(v = \int a\,dt\) and \(x = \int v\,dt\).` },
      { check: { q: R`A stone is dropped from a height of 45 m. How long does it take to reach the ground? (g = 10 m/s²)`, ans: R`\(45 = \frac12\times10\times t^2\), so \(t^2 = 9\) and t = 3 s.` } }
    ] },

    { h: R`Position–time graphs`, t: [4], blocks: [
      R`A graph is a picture of motion. On a <b>position–time (x–t) graph</b>, time runs along the horizontal axis and position up the vertical axis. Its shape tells you the story of the motion at a glance.`,
      { fig: kinFigXT, cap: R`Four x–t graphs. (a) At rest: a horizontal line. (b) Uniform velocity: a straight sloping line. (c) Speeding up: the curve gets steeper. (d) Slowing down: the curve flattens out.` },
      R`The <b>slope</b> (steepness) of an x–t graph is the velocity. Steeper means faster. A line sloping downward means a negative velocity, that is, moving back towards smaller x.`,
      { fig: kinFigTangent, cap: R`For \(x = t^2\): the slope of the chord PQ (from t = 1 s to 3 s) is the average velocity, (9 − 1)/2 = 4 m/s. The slope of the tangent at Q is the instantaneous velocity at t = 3 s, which is 6 m/s.` },
      { points: [R`Slope of a chord = average velocity. Slope of the tangent = instantaneous velocity.`, R`An x–t graph can never be vertical (that would mean being in two places at the same instant) and can never bend back in time.`] },
      { check: { q: R`On an x–t graph, a straight line goes downward from left to right. What does it tell you?`, ans: R`The velocity is constant and negative: the object moves steadily in the negative direction.` } }
    ] },

    { h: R`Velocity–time graphs`, t: [4], blocks: [
      R`On a <b>velocity–time (v–t) graph</b>, two facts do almost all the work:`,
      { points: [R`The <b>slope</b> of a v–t graph is the acceleration.`, R`The <b>area</b> between the graph and the time axis is the displacement. Area below the time axis counts as negative displacement.`] },
      { fig: kinFigArea, cap: R`u = 4 m/s and a = 2 m/s², from t = 0 to 4 s. The blue rectangle (area ut = 16 m) plus the orange triangle (area ½at² = 16 m) give s = 32 m. This is the second equation of motion, read straight off a graph.` },
      R`This gives a second, very visual proof of \(s = ut + \frac12at^2\): the rectangle under the starting velocity gives \(ut\), and the triangle on top (base t, height at) gives \(\frac12\times t\times at\).`,
      { h3: R`Using the area to find distance` },
      R`For <b>distance</b> (rather than displacement), add up all the areas as positive numbers, including any below the time axis.`,
      { fig: kinFigTrain, cap: R`A train speeds up for 10 s, runs at a steady 20 m/s for 30 s, then slows to a stop in 10 s. Its v–t graph is a trapezium.` },
      { ex: { q: R`For the train in the figure above, find the total distance travelled and the acceleration in the first 10 s.`,
        steps: [R`Distance = area = \(\frac12\times10\times20 + 30\times20 + \frac12\times10\times20 = 100 + 600 + 100\).`, R`Acceleration = slope of the first part = 20/10.`],
        ans: R`800 m; 2 m/s²` } },
      { note: R`On an acceleration–time (a–t) graph, the area under the graph is the change in velocity.`, title: 'Also useful' },
      { check: { q: R`A v–t graph is a horizontal line at v = 5 m/s from t = 0 to t = 6 s. Find the acceleration and the displacement.`, ans: R`Acceleration 0 (the slope is zero); displacement = 5 × 6 = 30 m.` } }
    ] },

    { h: R`Relative velocity in a straight line`, t: [5], blocks: [
      R`When your car overtakes a slow bus, the bus seems to crawl backwards past you. When a train passes from the opposite direction, it seems to whiz past. Both are examples of <b>relative velocity</b>.`,
      R`The velocity of A relative to B (how A's motion looks to B) is \[v_{AB} = v_A - v_B\] Imagine riding along with B: subtract B's velocity from everything you see.`,
      { fig: kinFigCars, cap: R`Car A at 20 m/s overtakes car B at 15 m/s in the same direction. To the driver of B, car A moves ahead at only 20 − 15 = 5 m/s.` },
      { points: [R`Moving in the same direction: relative speed = difference of the speeds.`, R`Moving in opposite directions: relative speed = sum of the speeds.`, R`\(v_{BA} = -v_{AB}\): if A sees B moving left at 5 m/s, B sees A moving right at 5 m/s.`] },
      { ex: { q: R`Two trains, each 100 m long, run on parallel tracks at 54 km/h and 36 km/h. How long do they take to pass each other completely if they move (a) in opposite directions (b) in the same direction?`,
        steps: [R`The speeds are 15 m/s and 10 m/s. To pass completely, one train must cover both lengths relative to the other: 100 + 100 = 200 m.`, R`(a) Relative speed = 15 + 10 = 25 m/s, so the time is 200/25 = 8 s.`, R`(b) Relative speed = 15 − 10 = 5 m/s, so the time is 200/5 = 40 s.`],
        ans: R`(a) 8 s (b) 40 s` } },
      { check: { q: R`Two cars approach each other at 40 km/h and 50 km/h. How fast does one appear to move to the driver of the other?`, ans: R`40 + 50 = 90 km/h.` } }
    ] },

    { h: R`Scalars and vectors`, t: [6], blocks: [
      R`A <b>scalar</b> has only a size (magnitude): mass, time, distance, speed, temperature, energy. A <b>vector</b> has a size <i>and</i> a direction, and it adds by the triangle rule: displacement, velocity, acceleration, force.`,
      R`We write a vector as \(\vec A\) and its magnitude as \(|\vec A|\) or simply A. Two vectors are equal if they have the same magnitude and the same direction, wherever they are drawn. \(-\vec A\) has the same size as \(\vec A\) but points the opposite way.`,
      { analogy: R`If you walk 3 m east and then 4 m north, you are not 7 m from home; you are 5 m away. Vectors keep track of direction, so they don't simply add like ordinary numbers.` },
      { h3: R`Adding two vectors` },
      { fig: kinFigVectors, cap: R`(a) Triangle law: place the tail of Q at the head of P; the resultant R runs from the tail of P to the head of Q. (b) Parallelogram law: draw P and Q from the same point; the diagonal is R.` },
      R`If the angle between P and Q is θ, the resultant has magnitude and direction \[R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta},\qquad \tan\alpha = \frac{Q\sin\theta}{P + Q\cos\theta}\] where α is the angle R makes with P.`,
      { derive: R`Where does the formula for R come from?`, steps: [
        R`In the parallelogram, drop a perpendicular from the tip of R onto the line of P (extended). The extra horizontal length beyond P is \(Q\cos\theta\) and the height is \(Q\sin\theta\).`,
        R`Pythagoras' theorem in the big right triangle: \(R^2 = (P + Q\cos\theta)^2 + (Q\sin\theta)^2 = P^2 + 2PQ\cos\theta + Q^2(\cos^2\theta + \sin^2\theta)\).`,
        R`Since \(\cos^2\theta + \sin^2\theta = 1\), we get \(R^2 = P^2 + Q^2 + 2PQ\cos\theta\). In the same triangle, \(\tan\alpha\) = height ÷ base = \(\dfrac{Q\sin\theta}{P + Q\cos\theta}\).`
      ] },
      { points: [R`θ = 0°: R = P + Q (the largest possible). θ = 180°: R = |P − Q| (the smallest). θ = 90°: \(R = \sqrt{P^2 + Q^2}\).`, R`So the resultant always lies between |P − Q| and P + Q.`] },
      { h3: R`Resolving a vector; unit vectors` },
      { fig: kinFigResolve, cap: R`A vector A at angle θ to the x-axis splits into two perpendicular parts: A cos θ along x and A sin θ along y.` },
      R`\(\hat i, \hat j, \hat k\) are <b>unit vectors</b> (size 1) along the x, y and z axes. Any vector can be written as \(\vec A = A_x\hat i + A_y\hat j + A_z\hat k\), with magnitude \(|\vec A| = \sqrt{A_x^2 + A_y^2 + A_z^2}\). Adding vectors then becomes easy: add the matching components.`,
      { ex: { q: R`Two forces of 3 N and 4 N act on a point. Find the resultant when the angle between them is (a) 90° (b) 60°.`,
        steps: [R`(a) \(R = \sqrt{9 + 16} = 5\) N.`, R`(b) \(R = \sqrt{9 + 16 + 2\times3\times4\times\cos60^\circ} = \sqrt{25 + 12} = \sqrt{37}\).`],
        ans: R`(a) 5 N (b) \(\sqrt{37} \approx 6.08\) N` } },
      { ex: { q: R`If \(\vec A = 3\hat i + 4\hat j\) and \(\vec B = \hat i - 2\hat j\), find \(\vec A + \vec B\) and its magnitude.`,
        steps: [R`Add components: \((3 + 1)\hat i + (4 - 2)\hat j = 4\hat i + 2\hat j\).`, R`Magnitude = \(\sqrt{16 + 4} = \sqrt{20}\).`],
        ans: R`\(4\hat i + 2\hat j\), magnitude \(2\sqrt5 \approx 4.47\)` } },
      { mistake: R`Adding the magnitudes of vectors that point in different directions. 3 N + 4 N makes 7 N only when both forces point the same way.` },
      { check: { q: R`Can two vectors of sizes 3 and 5 have a resultant of size 1?`, ans: R`No. The resultant must lie between 5 − 3 = 2 and 5 + 3 = 8.` } }
    ] },

    { h: R`Motion in a plane`, t: [7], blocks: [
      R`A football kicked across a field moves forward and up at the same time. To describe motion in two dimensions, we use two axes (x and y) and vectors.`,
      R`The <b>position vector</b> \(\vec r = x\hat i + y\hat j\) is an arrow from the origin to the object. When the object moves from \(\vec r_1\) to \(\vec r_2\), its <b>displacement</b> is \(\Delta\vec r = \vec r_2 - \vec r_1\).`,
      { fig: kinFigPlane, cap: R`As the object moves along the path from P to Q, its position vector changes from r₁ to r₂. The displacement Δr points straight from P to Q.` },
      R`Velocity \(\vec v = \dfrac{d\vec r}{dt} = v_x\hat i + v_y\hat j\), with \(v_x = \dfrac{dx}{dt}\) and \(v_y = \dfrac{dy}{dt}\). Its direction is always along the <b>tangent</b> to the path. Acceleration \(\vec a = \dfrac{d\vec v}{dt}\).`,
      R`<b>The big idea:</b> the motion along x and the motion along y happen <i>independently</i> of each other. With constant acceleration, use the equations of motion separately for each direction: \[x = u_xt + \tfrac12a_xt^2,\qquad y = u_yt + \tfrac12a_yt^2\]`,
      { ex: { q: R`The position of a particle is \(\vec r = 3t\,\hat i + 2t^2\,\hat j\) (in metres, with t in seconds). Find its velocity and acceleration at t = 2 s.`,
        steps: [R`\(\vec v = \dfrac{d\vec r}{dt} = 3\hat i + 4t\,\hat j\). At t = 2 s: \(3\hat i + 8\hat j\).`, R`Speed = \(\sqrt{9 + 64} = \sqrt{73}\) m/s.`, R`\(\vec a = \dfrac{d\vec v}{dt} = 4\hat j\) m/s²: constant, along +y.`],
        ans: R`\(\vec v = 3\hat i + 8\hat j\) (speed ≈ 8.54 m/s); \(\vec a = 4\hat j\) m/s²` } },
      { check: { q: R`If \(v_x = 3\) m/s and \(v_y = 4\) m/s, what is the speed?`, ans: R`\(\sqrt{9 + 16} = 5\) m/s.` } }
    ] },

    { h: R`Relative velocity in two dimensions: rain and rivers`, t: [5, 7], blocks: [
      R`The rule \(\vec v_{AB} = \vec v_A - \vec v_B\) also works in two dimensions. Now we subtract vectors rather than numbers.`,
      { h3: R`Rain and umbrella` },
      R`Rain falls straight down at \(v_r\), and you walk forward at \(v_m\). Relative to you, the rain's velocity is \(\vec v_r - \vec v_m\): it seems to come slanting towards your face. So you tilt your umbrella forward, at an angle θ from the vertical where \[\tan\theta = \frac{v_m}{v_r}\]`,
      { fig: kinFigRain, cap: R`Adding \(-\vec v_m\) to the rain's velocity gives the rain's velocity as you see it. It makes an angle θ with the vertical, where \(\tan\theta = v_m/v_r\).` },
      { h3: R`Crossing a river` },
      R`A boat moves at speed v relative to the water, the river flows at speed u, and the river is d wide. The boat's real velocity (relative to the ground) is its own velocity plus the river's.`,
      { fig: kinFigRiver, cap: R`(a) Heading straight across gives the quickest crossing, t = d/v, but the river carries the boat downstream. (b) Heading upstream at angle θ, with sin θ = u/v, makes the boat go straight across (possible only if v > u).` },
      { points: [R`<b>Shortest time:</b> head perpendicular to the bank. Then \(t_{min} = \dfrac dv\) and the drift downstream is \(u\,\dfrac dv\).`, R`<b>Shortest path (straight across):</b> head upstream at angle θ to the perpendicular, with \(\sin\theta = \dfrac uv\). The crossing then takes \(\dfrac{d}{\sqrt{v^2 - u^2}}\).`] },
      { ex: { q: R`A river 120 m wide flows at 3 m/s. A swimmer swims at 5 m/s relative to the water. (a) For the quickest crossing, how long does she take and how far downstream does she land? (b) To land straight opposite, in which direction should she head, and how long will it take?`,
        steps: [R`(a) Head straight across: t = 120/5 = 24 s. Drift = 3 × 24 = 72 m.`, R`(b) \(\sin\theta = \frac35\), so θ ≈ 37° upstream from the perpendicular. Her speed across the river is \(\sqrt{5^2 - 3^2} = 4\) m/s, so t = 120/4 = 30 s.`],
        ans: R`(a) 24 s, landing 72 m downstream (b) 37° upstream of straight across, taking 30 s` } },
      { check: { q: R`Rain falls vertically at 4 m/s and you walk at 3 m/s. At what angle from the vertical should you hold your umbrella?`, ans: R`\(\tan\theta = \frac34\), so θ ≈ 37°, tilted forward.` } }
    ] },

    { h: R`Projectile motion`, t: [8], blocks: [
      R`Throw a ball at an angle and it follows a curved path called a <b>trajectory</b>. Any object that moves through the air under gravity alone is a <b>projectile</b>: a cricket ball, a stone from a catapult, water from a hose pipe.`,
      R`The secret is to split the motion into two independent parts. <b>Horizontally</b>, no force acts (ignoring air), so the horizontal velocity stays constant: \(u_x = u\cos\theta\). <b>Vertically</b>, gravity pulls down, so the motion is just like a ball thrown straight up with \(u_y = u\sin\theta\) and \(a = -g\).`,
      { fig: kinFigProjectile, cap: R`A projectile launched with speed u at angle θ. The horizontal part of the velocity (orange) stays the same all the way. The vertical part (blue) shrinks to zero at the top, then grows again pointing downward.` },
      { derive: R`Deriving the time of flight, maximum height, range and path`, steps: [
        R`Vertical motion: \(y = u\sin\theta\,t - \frac12gt^2\). It lands when y = 0 again: \(t\,(u\sin\theta - \frac12gt) = 0\), so the <b>time of flight</b> is \(T = \dfrac{2u\sin\theta}{g}\).`,
        R`At the top the vertical velocity is zero. Using \(v^2 = u^2 + 2as\) vertically: \(0 = u^2\sin^2\theta - 2gH\), so the <b>maximum height</b> is \(H = \dfrac{u^2\sin^2\theta}{2g}\).`,
        R`Horizontal distance covered in time T: \(R = u\cos\theta\times\dfrac{2u\sin\theta}{g} = \dfrac{u^2\sin2\theta}{g}\), using \(2\sin\theta\cos\theta = \sin2\theta\). This is the <b>range</b>.`,
        R`Path: from \(x = u\cos\theta\,t\) we get \(t = \dfrac{x}{u\cos\theta}\). Put this into y: \(y = x\tan\theta - \dfrac{gx^2}{2u^2\cos^2\theta}\). This is the equation of a <b>parabola</b>.`
      ] },
      { table: { head: [R`Quantity`, R`Formula`], rows: [
        [R`Time of flight`, R`\(T = \dfrac{2u\sin\theta}{g}\)`], [R`Maximum height`, R`\(H = \dfrac{u^2\sin^2\theta}{2g}\)`], [R`Horizontal range`, R`\(R = \dfrac{u^2\sin2\theta}{g}\)`],
        [R`Maximum range (at θ = 45°)`, R`\(R_{max} = \dfrac{u^2}{g}\)`], [R`Equation of the path`, R`\(y = x\tan\theta - \dfrac{gx^2}{2u^2\cos^2\theta}\)`]] } },
      { fig: kinFigAngles, cap: R`The same speed (20 m/s) at three angles. 30° and 60° land at the same spot (range 34.6 m); 45° goes the farthest (40 m). The steeper throw stays in the air longer and goes higher.` },
      { points: [R`The range is greatest at θ = 45°.`, R`Angles θ and (90° − θ) give the same range.`, R`At the top, the velocity is not zero: it is \(u\cos\theta\), horizontal.`, R`The acceleration is g, downward, at every point of the path.`] },
      { h3: R`Thrown horizontally from a height` },
      R`A ball rolls off a table of height h with horizontal speed u. Vertically it falls just like a dropped ball, so it lands after \(t = \sqrt{2h/g}\), at a horizontal distance \(u\sqrt{2h/g}\) from the foot of the table.`,
      { ex: { q: R`A ball is kicked at 20 m/s at 30° above the ground. Find the time of flight, the maximum height and the range. (g = 10 m/s²)`,
        steps: [R`\(u\sin\theta = 20\times\frac12 = 10\) m/s and \(u\cos\theta = 20\times0.866 = 17.32\) m/s.`, R`\(T = \dfrac{2\times10}{10} = 2\) s.`, R`\(H = \dfrac{10^2}{2\times10} = 5\) m.`, R`\(R = \dfrac{400\times\sin60^\circ}{10} = 40\times0.866\).`],
        ans: R`T = 2 s, H = 5 m, R ≈ 34.6 m` } },
      { ex: { q: R`A stone is thrown horizontally at 15 m/s from the top of a cliff 80 m high. When and where does it hit the ground, and how fast is it going then? (g = 10 m/s²)`,
        steps: [R`Vertical: \(80 = \frac12\times10\times t^2\), so \(t^2 = 16\) and t = 4 s.`, R`Horizontal: x = 15 × 4 = 60 m from the foot of the cliff.`, R`On landing: \(v_x = 15\) m/s and \(v_y = 10\times4 = 40\) m/s, so \(v = \sqrt{225 + 1600} = \sqrt{1825}\).`],
        ans: R`After 4 s, 60 m from the foot of the cliff, at about 42.7 m/s` } },
      { mistake: R`Saying the velocity is zero at the highest point. Only the vertical part is zero; the ball is still moving sideways at \(u\cos\theta\).` },
      { check: { q: R`For which angle of projection is the range the greatest, and what is that range?`, ans: R`45°, giving \(R_{max} = u^2/g\).` } }
    ] },

    { h: R`Uniform circular motion`, t: [9], blocks: [
      R`A stone whirled on a string, the tip of a fan blade, a satellite going round the Earth: each moves in a circle. If the speed stays the same, the motion is called <b>uniform circular motion</b>.`,
      R`Even though the speed is constant, the <b>direction</b> of the velocity keeps changing; it always points along the tangent. A changing velocity means there is an acceleration! This acceleration points towards the centre of the circle and is called <b>centripetal acceleration</b> ("centre-seeking").`,
      { fig: kinFigCircle, cap: R`(a) At every point the velocity is along the tangent, and the centripetal acceleration points to the centre O. (b) Placing \(\vec v_1\) and \(\vec v_2\) tail to tail shows the change \(\Delta\vec v\), which points towards the centre.` },
      R`<b>Angular quantities.</b> As the particle moves, the radius sweeps out an angle θ (measured in radians). The <b>angular velocity</b> is \(\omega = \dfrac{\Delta\theta}{\Delta t}\) (rad/s). Linear and angular speed are linked by \(v = \omega r\). The time for one round (the period) is \(T = \dfrac{2\pi r}{v} = \dfrac{2\pi}{\omega}\), and the frequency is \(f = \dfrac1T\), so \(\omega = 2\pi f\).`,
      { derive: R`Why is the centripetal acceleration \(v^2/r\)?`, steps: [
        R`Take two nearby points P and Q on the circle, a short time Δt apart. In that time the radius turns through a small angle Δθ.`,
        R`The velocities \(\vec v_1\) (at P) and \(\vec v_2\) (at Q) have the same size v, but each is perpendicular to its own radius, so they differ in direction by the same angle Δθ.`,
        R`Placed tail to tail (figure b), they form a thin triangle. For a small angle, the third side has length \(|\Delta\vec v| \approx v\,\Delta\theta\), and it points towards the centre.`,
        R`So \(a = \dfrac{|\Delta\vec v|}{\Delta t} = v\,\dfrac{\Delta\theta}{\Delta t} = v\omega = \dfrac{v^2}{r}\), because \(\omega = v/r\).`
      ] },
      R`\[a_c = \frac{v^2}{r} = \omega^2r\quad\text{(directed towards the centre)}\]`,
      { analogy: R`In a car taking a sharp turn, you feel thrown outward. In fact your body is trying to keep going in a straight line, and the car door pushes you inward, towards the centre of the turn, to make you go round with the car.` },
      { ex: { q: R`A cyclist rides round a circular track of radius 20 m at a steady 10 m/s. Find (a) the centripetal acceleration (b) the angular speed (c) the time for one round.`,
        steps: [R`(a) \(a = \dfrac{v^2}{r} = \dfrac{100}{20} = 5\) m/s².`, R`(b) \(\omega = \dfrac vr = \dfrac{10}{20} = 0.5\) rad/s.`, R`(c) \(T = \dfrac{2\pi r}{v} = \dfrac{2\pi\times20}{10} = 4\pi\) s.`],
        ans: R`(a) 5 m/s² (b) 0.5 rad/s (c) \(4\pi \approx 12.6\) s` } },
      { ex: { q: R`A ceiling fan turns at 600 revolutions per minute. Find its angular speed, and the speed and acceleration of a point on a blade 0.5 m from the axis.`,
        steps: [R`f = 600/60 = 10 revolutions per second, so \(\omega = 2\pi f = 20\pi \approx 62.8\) rad/s.`, R`\(v = \omega r = 20\pi\times0.5 = 10\pi \approx 31.4\) m/s.`, R`\(a = \omega^2r = 400\pi^2\times0.5 = 200\pi^2\).`],
        ans: R`ω ≈ 62.8 rad/s, v ≈ 31.4 m/s, a ≈ 1974 m/s² (about 200 times g!)` } },
      { mistake: R`Thinking that uniform circular motion has no acceleration because the speed is constant. The direction changes, so there is always an acceleration towards the centre.` },
      { check: { q: R`A particle moves in a circle of radius 2 m at a constant 4 m/s. What is its acceleration?`, ans: R`\(a = \dfrac{4^2}{2} = 8\) m/s², directed towards the centre.` } }
    ] }
  ],
  summary: [
    R`Rest and motion are relative. A frame of reference (origin, axes and a clock) is needed to describe position.`,
    R`Distance is the path length (scalar). Displacement is the straight-line change in position with direction (vector). |displacement| ≤ distance.`,
    R`Average speed = distance/time; average velocity = displacement/time. Instantaneous velocity \(v = dx/dt\). Multiply km/h by 5/18 to get m/s.`,
    R`Acceleration \(a = dv/dt\). Velocity changes if its size or its direction changes.`,
    R`For constant acceleration: \(v = u + at\), \(s = ut + \frac12at^2\), \(v^2 = u^2 + 2as\), \(s_n = u + \frac a2(2n - 1)\).`,
    R`Free fall: acceleration g ≈ 9.8 m/s² downward for every object (ignoring air).`,
    R`x–t graph: slope = velocity. v–t graph: slope = acceleration, area = displacement.`,
    R`Relative velocity \(\vec v_{AB} = \vec v_A - \vec v_B\): subtract speeds for the same direction, add them for opposite directions.`,
    R`Vectors add by the triangle or parallelogram law: \(R = \sqrt{P^2 + Q^2 + 2PQ\cos\theta}\), and \(|P - Q| \le R \le P + Q\).`,
    R`Components: \(A_x = A\cos\theta\), \(A_y = A\sin\theta\); \(\vec A = A_x\hat i + A_y\hat j + A_z\hat k\).`,
    R`In a plane, the x and y motions are independent; the velocity is always along the tangent to the path.`,
    R`River crossing: quickest time d/v (head straight across); straight-across path when heading upstream with \(\sin\theta = u/v\).`,
    R`Projectile: \(T = \frac{2u\sin\theta}{g}\), \(H = \frac{u^2\sin^2\theta}{2g}\), \(R = \frac{u^2\sin2\theta}{g}\); the range is greatest at 45°, and θ and 90° − θ give equal ranges.`,
    R`Uniform circular motion: constant speed, but acceleration \(v^2/r = \omega^2r\) towards the centre; \(v = \omega r\), \(\omega = 2\pi f = 2\pi/T\).`
  ]
});
