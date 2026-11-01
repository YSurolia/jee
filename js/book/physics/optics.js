// Book chapter: Optics (ray optics, optical instruments and wave optics). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI, DEG = PI / 180;

// ---------- helpers (pixel geometry; rays follow the mirror/lens formulas exactly) ----------
function axisLine(x0, x1, y) { return D.line(x0, y, x1, y, { color: 'm', w: 1, dash: '6 4' }); }
function mark(x, y, s) { return D.line(x, y - 4, x, y + 4, { color: 'k', w: 1.4 }) + D.text(x, y + 15, s, { size: 12, math: true, color: 'm' }); }
function extendTo(p, d, xEnd) { var t = (xEnd - p[0]) / d[0]; return [xEnd, p[1] + d[1] * t]; }
// A ray leaving lens/mirror point P towards (real image) or away from (virtual image) image point I, ending at x = xEnd.
function outRay(P, I, real, xEnd, color, box) {
  var d = real ? [I[0] - P[0], I[1] - P[1]] : [P[0] - I[0], P[1] - I[1]], t = (xEnd - P[0]) / d[0];
  if (box && d[1]) t = Math.min(t, ((d[1] > 0 ? box[1] : box[0]) - P[1]) / d[1]);
  var s = D.ray([P, [P[0] + d[0] * t, P[1] + d[1] * t]], { color: color });
  if (!real) s += D.ray([P, I], { color: color, dash: '4 4', arrows: false });
  return s;
}
// Thin-lens ray diagram. f, u in px (u < 0); oh = object height px.
function lensDiagram(o) {
  var x0 = o.x0, y0 = o.y0, f = o.f, u = o.u, oh = o.oh, v = 1 / (1 / f + 1 / u), m = v / u, ih = oh * m;
  var O = [x0 + u, y0 - oh], I = [x0 + v, y0 - ih], real = v > 0, xEnd = o.w - 12, p = [];
  p.push(axisLine(10, o.w - 10, y0), D.lens(x0, y0, o.lh || 70, { type: f < 0 ? 'concave' : 'convex' }));
  p.push(mark(x0 + f, y0, f > 0 ? "F'" : 'F'), mark(x0 - f, y0, f > 0 ? 'F' : "F'"));
  if (o.twoF) p.push(mark(x0 + 2 * f, y0, '2F'), mark(x0 - 2 * f, y0, '2F'));
  p.push(D.obj(O[0], y0, oh, { label: 'O', color: 'g' }));
  p.push(D.ray([O, [x0, O[1]]], { color: 'o' }), outRay([x0, O[1]], I, real, xEnd, 'o', [6, o.h - 6]));
  p.push(D.ray([O, [x0, y0]], { color: 'r' }), outRay([x0, y0], I, real, xEnd, 'r', [6, o.h - 6]));
  p.push(D.obj(I[0], y0, ih, { label: 'I', color: 'b', dash: real ? null : '5 4' }));
  return D.svg(o.w, o.h, p, o.label);
}
// Spherical-mirror ray diagram: pole at x0 facing left. f < 0 concave, f > 0 convex (px). u < 0.
function mirrorDiagram(o) {
  var x0 = o.x0, y0 = o.y0, f = o.f, u = o.u, oh = o.oh, v = 1 / (1 / f - 1 / u), m = -v / u, ih = oh * m;
  var O = [x0 + u, y0 - oh], I = [x0 + v, y0 - ih], real = v < 0, xEnd = 12, Rr = Math.max(2 * Math.abs(f), 260), p = [];
  function sag(y) { var dy = y - y0; return (f < 0 ? -1 : 1) * (Rr - Math.sqrt(Rr * Rr - dy * dy)); }
  p.push(axisLine(10, o.w - 10, y0), D.mirror(x0, y0, o.mh || 75, Rr, { type: f < 0 ? 'concave' : 'convex' }));
  p.push(mark(x0 + f, y0, 'F'), D.text(x0 + 8, y0 + 15, 'P', { size: 12, math: true, color: 'm', anchor: 'start' }));
  if (x0 + 2 * f > 10 && x0 + 2 * f < o.w - 10) p.push(mark(x0 + 2 * f, y0, 'C'));
  p.push(D.obj(O[0], y0, oh, { label: 'O', color: 'g' }));
  var P1 = [x0 + sag(O[1]), O[1]];
  p.push(D.ray([O, P1], { color: 'o' }), outRay(P1, I, real, xEnd, 'o', [6, o.h - 6]));
  p.push(D.ray([O, [x0, y0]], { color: 'r' }), outRay([x0, y0], I, real, xEnd, 'r', [6, o.h - 6]));
  p.push(D.obj(I[0], y0, ih, { label: 'I', color: 'b', dash: real ? null : '5 4' }));
  return D.svg(o.w, o.h, p, o.label);
}
function refractDir(d, nrm, n1, n2) { // unit d, unit normal pointing into medium 2
  var c1 = d[0] * nrm[0] + d[1] * nrm[1], eta = n1 / n2, k = 1 - eta * eta * (1 - c1 * c1);
  if (k < 0) return null;
  var c2 = Math.sqrt(k); return [eta * d[0] + (c2 - eta * c1) * nrm[0], eta * d[1] + (c2 - eta * c1) * nrm[1]];
}
function intersect(p, d, a, b) { // ray p + t d with segment a-b
  var ex = b[0] - a[0], ey = b[1] - a[1], den = d[0] * ey - d[1] * ex;
  var t = ((a[0] - p[0]) * ey - (a[1] - p[1]) * ex) / den; return [p[0] + d[0] * t, p[1] + d[1] * t];
}
function unit(v) { var l = Math.hypot(v[0], v[1]); return [v[0] / l, v[1] / l]; }

// ---------- figures ----------
var figReflect = D.svg(400, 190, [
  D.line(60, 150, 340, 150, { color: 'k', w: 2.4 }), (function () { var s = ''; for (var x = 66; x < 340; x += 12) s += D.line(x, 150, x - 7, 160, { color: 'm', w: 1 }); return s; })(),
  D.line(200, 150, 200, 30, { color: 'm', w: 1, dash: '5 4' }), D.text(206, 34, 'normal', { size: 11, color: 'm', math: false, anchor: 'start' }),
  D.ray([[90, 40], [200, 150]], { color: 'o' }), D.ray([[200, 150], [310, 40]], { color: 'o' }),
  D.angle(200, 150, 40, 90, 135, 'i', { lr: 10 }), D.angle(200, 150, 40, 45, 90, 'r', { lr: 10 }),
  D.text(80, 28, 'incident ray', { size: 11, color: 'o', math: false }), D.text(320, 28, 'reflected ray', { size: 11, color: 'o', math: false })
], 'Laws of reflection');

var figPlane = D.svg(400, 200, [
  D.line(200, 20, 200, 180, { color: 'k', w: 2.4 }), (function () { var s = ''; for (var y = 26; y < 180; y += 12) s += D.line(200, y, 208, y - 6, { color: 'm', w: 1 }); return s; })(),
  axisLine(40, 360, 150), D.obj(120, 150, 60, { label: 'object', math: false, size: 11 }), D.obj(280, 150, 60, { label: 'image', math: false, size: 11, color: 'b', dash: '5 4' }),
  D.ray([[120, 90], [200, 120]], { color: 'o' }), D.ray([[200, 120], [60, 172.5]], { color: 'o' }), D.ray([[200, 120], [280, 90]], { color: 'o', dash: '4 4', arrows: false }),
  D.ray([[120, 90], [200, 60]], { color: 'r' }), D.ray([[200, 60], [60, 7.5]], { color: 'r' }), D.ray([[200, 60], [280, 90]], { color: 'r', dash: '4 4', arrows: false }),
  D.text(160, 166, 'u', { math: true, color: 'm' }), D.text(240, 166, 'v = u', { size: 12, math: false, color: 'm' })
], 'Image in a plane mirror: as far behind as the object is in front');

var figTerms = D.svg(420, 200, [
  axisLine(10, 410, 100), D.mirror(360, 100, 80, 240),
  mark(240, 100, 'C'), mark(300, 100, 'F'), D.text(370, 116, 'P', { size: 12, math: true, color: 'm', anchor: 'start' }),
  D.arrow(240, 148, 352, 148, { color: 'm', w: 1, head: 6, both: true, label: 'R', ly: -9 }), D.arrow(300, 172, 352, 172, { color: 'm', w: 1, head: 6, both: true, label: 'f', ly: -9 }),
  D.arrow(30, 40, 110, 40, { color: 'g', w: 1.8, head: 7, label: '+ (direction of incident light)', ly: -10, math: false, size: 11 }), D.arrow(30, 80, 30, 50, { color: 'g', w: 1.8, head: 7, label: '+ up', lx: 24, ly: 0, math: false, size: 11 }),
  D.text(120, 192, 'distances measured from the pole P', { size: 11, color: 'm', math: false })
], 'Concave mirror: pole P, focus F, centre of curvature C; Cartesian sign convention');

var figConcave = mirrorDiagram({ w: 420, h: 220, x0: 390, y0: 120, f: -60, u: -100, oh: 32, mh: 78, label: 'Concave mirror: real, inverted, magnified image' });
var figConvexM = mirrorDiagram({ w: 420, h: 200, x0: 300, y0: 120, f: 80, u: -120, oh: 40, mh: 70, label: 'Convex mirror: virtual, erect, diminished image' });

var figSnell = (function () {
  var i = 50 * DEG, r = Math.asin(Math.sin(i) / 1.5), P = [200, 100];
  return D.svg(400, 200, [
    D.rect(10, 100, 380, 95, { color: 'b', fill: 'soft', w: 0.01 }), D.line(10, 100, 390, 100, { color: 'b', w: 1.6 }),
    D.line(200, 10, 200, 195, { color: 'm', w: 1, dash: '5 4' }),
    D.ray([[200 - 85 * Math.tan(i), 15], P], { color: 'o' }), D.ray([P, [200 + 90 * Math.tan(r), 190]], { color: 'o' }),
    D.ray([P, [200 + 85 * Math.tan(i), 15]], { color: 'o', w: 0.9, dash: '3 4' }),
    D.angle(200, 100, 38, 90, 90 + 50, 'i', { lr: 10 }), D.angle(200, 100, 44, 270, 270 + 30.7, 'r', { lr: 10 }),
    D.text(40, 80, 'n₁ (air)', { size: 12, math: false }), D.text(40, 130, 'n₂ (glass)', { size: 12, math: false, color: 'b' })
  ], "Refraction: the ray bends towards the normal entering a denser medium");
})();

var figDepth = D.svg(360, 210, [
  D.rect(10, 70, 340, 135, { color: 'b', fill: 'soft', w: 0.01 }), D.line(10, 70, 350, 70, { color: 'b', w: 1.6 }),
  D.ellipse(150, 170, 14, 5, { color: 'o', fill: 'soft', w: 1.6 }), D.text(118, 172, 'coin', { size: 11, color: 'o', math: false, anchor: 'end' }),
  D.ellipse(150, 145, 14, 5, { color: 'o', w: 1.2, dash: '3 3' }), D.text(118, 145, 'appears here', { size: 11, color: 'o', math: false, anchor: 'end' }),
  D.ray([[150, 170], [190, 70]], { color: 'r' }), D.ray([[190, 70], [222, 10]], { color: 'r' }), D.ray([[190, 70], [150, 145]], { color: 'r', dash: '4 4', arrows: false }),
  D.line(190, 50, 190, 100, { color: 'm', w: 1, dash: '4 3' }),
  D.arrow(290, 70, 290, 170, { color: 'm', w: 1, head: 6, both: true }), D.text(298, 125, 'real depth', { size: 11, color: 'm', math: false, anchor: 'start' }),
  D.arrow(255, 70, 255, 145, { color: 'm', w: 1, head: 6, both: true }), D.text(250, 110, 'apparent', { size: 11, color: 'm', math: false, anchor: 'end' })
], 'Real and apparent depth');

var figSph = D.svg(420, 200, [
  axisLine(10, 410, 110), D.path('M200 30 Q 160 110 200 190', { color: 'c', w: 2.2 }), D.rect(200, 30, 210, 160, { color: 'c', fill: 'soft', w: 0.01 }),
  D.text(100, 40, 'n₁', { size: 13, math: false }), D.text(320, 40, 'n₂', { size: 13, math: false, color: 'c' }),
  D.dot(40, 110, { color: 'g' }), D.text(40, 128, 'O', { math: true }), D.dot(370, 110, { color: 'b' }), D.text(370, 128, 'I', { math: true }), D.dot(330, 110, { r: 3 }), D.text(330, 128, 'C', { math: true }),
  D.ray([[40, 110], [185, 70]], { color: 'o' }), D.ray([[185, 70], [370, 110]], { color: 'o' }), D.line(185, 70, 330, 110, { color: 'm', w: 1, dash: '4 3' }),
  D.text(200, 192, 'n₂/v − n₁/u = (n₂ − n₁)/R', { size: 12, math: false })
], 'Refraction at a convex spherical surface');

var figTIR = (function () {
  var n = 4 / 3, S = [110, 190], ys = 80, angs = [20, 48.6, 66], cols = ['g', 'o', 'r'], p = [D.rect(10, 80, 400, 125, { color: 'b', fill: 'soft', w: 0.01 }), D.line(10, 80, 410, 80, { color: 'b', w: 1.6 }), D.dot(S[0], S[1], { color: 'k', r: 4 })];
  angs.forEach(function (a, k) {
    var x = S[0] + (S[1] - ys) * Math.tan(a * DEG), P = [x, ys];
    p.push(D.ray([S, P], { color: cols[k] }), D.line(x, ys - 26, x, ys + 26, { color: 'm', w: 0.8, dash: '3 3' }));
    var sr = n * Math.sin(a * DEG);
    if (sr < 0.999) { var r = Math.asin(sr); p.push(D.ray([P, [x + 70 * Math.tan(r), 10]], { color: cols[k] })); }
    else if (sr < 1.01) p.push(D.ray([[P[0], 78], [P[0] + 90, 78]], { color: cols[k] }));
    else p.push(D.ray([P, [x + 40, ys + 40 / Math.tan(a * DEG)]], { color: cols[k] }));
  });
  p.push(D.text(80, 40, 'refracted', { size: 11, color: 'g', math: false }), D.text(300, 66, 'grazes (i = C)', { size: 11, color: 'o', math: false }), D.text(360, 140, 'totally reflected', { size: 11, color: 'r', math: false }), D.text(60, 196, 'source in water', { size: 11, math: false, color: 'm' }));
  return D.svg(420, 210, p, 'Rays from a source under water at increasing angles of incidence');
})();

var figFibre = D.svg(420, 120, [
  D.rect(10, 30, 400, 60, { color: 'c', fill: 'soft', w: 1.6, r: 6 }), D.rect(10, 22, 400, 8, { color: 'm', fill: 'soft', w: 0.8 }), D.rect(10, 90, 400, 8, { color: 'm', fill: 'soft', w: 0.8 }),
  D.ray([[10, 70], [60, 30], [130, 90], [200, 30], [270, 90], [340, 30], [400, 78]], { color: 'o' }),
  D.text(210, 112, 'core (higher n) surrounded by cladding (lower n): light is trapped by total internal reflection', { size: 10.5, color: 'm', math: false })
], 'Light guided along an optical fibre');

var figLensMaker = D.svg(420, 180, [
  axisLine(10, 410, 90), D.lens(210, 90, 70, { w: 18 }),
  D.dot(330, 90, { r: 3 }), D.text(330, 108, 'C₁', { size: 12, math: false }), D.dot(90, 90, { r: 3 }), D.text(90, 108, 'C₂', { size: 12, math: false }),
  D.arrow(195, 60, 330, 90, { color: 'm', w: 1, head: 6, label: 'R₁', ly: -10, math: false, size: 12 }), D.arrow(225, 120, 90, 90, { color: 'm', w: 1, head: 6, label: 'R₂', ly: 14, math: false, size: 12 }),
  D.text(210, 172, 'n (lens) in a medium of n₀', { size: 12, math: false })
], "Radii of curvature of a biconvex lens");

var figConvexLens = lensDiagram({ w: 420, h: 220, x0: 160, y0: 110, f: 60, u: -90, oh: 30, twoF: true, lh: 75, label: 'Convex lens: object between F and 2F' });
var figMagnifier = lensDiagram({ w: 420, h: 220, x0: 240, y0: 160, f: 60, u: -36, oh: 24, lh: 75, label: 'Convex lens as a magnifier: object inside F' });
var figConcaveLens = lensDiagram({ w: 420, h: 200, x0: 230, y0: 120, f: -100, u: -150, oh: 50, lh: 70, label: 'Concave lens: virtual, erect, diminished image' });

var prismGeom = (function () {
  var Ap = [200, 30], B1 = [90, 220], B2 = [310, 220];
  function trace(n, i) {
    var P = [Ap[0] + 0.45 * (B1[0] - Ap[0]), Ap[1] + 0.45 * (B1[1] - Ap[1])];
    var nIn1 = unit([0.866, 0.5]), dIn = [Math.cos(-(i - 30) * DEG), Math.sin(-(i - 30) * DEG)];
    var d1 = refractDir(dIn, nIn1, 1, n), Q = intersect(P, d1, Ap, B2), nOut2 = unit([0.866, -0.5]), d2 = refractDir(d1, nOut2, n, 1);
    return { P: P, Q: Q, dIn: dIn, d1: d1, d2: d2 };
  }
  return { Ap: Ap, B1: B1, B2: B2, trace: trace };
})();

var figPrism = (function () {
  var g = prismGeom, t = g.trace(1.5, 50), p = [D.poly([g.Ap, g.B1, g.B2], { closed: true, color: 'c', fill: 'soft', w: 2 })];
  var S = [t.P[0] - 120 * t.dIn[0], t.P[1] - 120 * t.dIn[1]], E = [t.Q[0] + 110 * t.d2[0], t.Q[1] + 110 * t.d2[1]];
  p.push(D.ray([S, t.P], { color: 'o' }), D.ray([t.P, t.Q], { color: 'o' }), D.ray([t.Q, E], { color: 'o' }));
  p.push(D.line(t.P[0] - 40 * 0.866, t.P[1] - 40 * 0.5, t.P[0] + 40 * 0.866, t.P[1] + 40 * 0.5, { color: 'm', w: 1, dash: '4 3' }));
  p.push(D.line(t.Q[0] - 40 * 0.866, t.Q[1] + 40 * 0.5, t.Q[0] + 40 * 0.866, t.Q[1] - 40 * 0.5, { color: 'm', w: 1, dash: '4 3' }));
  p.push(D.line(t.P[0], t.P[1], t.P[0] + 230 * t.dIn[0], t.P[1] + 230 * t.dIn[1], { color: 'o', w: 1, dash: '4 4' }));
  p.push(D.text(t.P[0] - 50, t.P[1] - 4, 'i', { math: true }), D.text(t.P[0] + 30, t.P[1] + 8, 'r₁', { size: 12, math: false }), D.text(t.Q[0] - 30, t.Q[1] + 8, 'r₂', { size: 12, math: false }), D.text(t.Q[0] + 48, t.Q[1] - 4, 'e', { math: true }));
  var xm = 395, yE = t.Q[1] + (xm - t.Q[0]) * t.d2[1] / t.d2[0], yX = t.P[1] + (xm - t.P[0]) * t.dIn[1] / t.dIn[0];
  p.push(D.text(200, 56, 'A', { math: true }), D.text(xm + 8, (yE + yX) / 2, 'δ', { math: true, color: 'r', size: 16 }), D.line(xm, yE, xm, yX, { color: 'r', w: 1, dash: '2 3' }));
  return D.svg(420, 235, p, 'Refraction through a prism');
})();

var figDelta = D.plot({
  w: 380, h: 200, x: [20, 90], y: [30, 50], xlabel: 'i', ylabel: 'δ', xticks: [[48.6, 'i = e']], yticks: [[37.2, 'δ_m']], noOrigin: true,
  fns: [{ f: function (i) { var r1 = Math.asin(Math.sin(i * DEG) / 1.5) / DEG, r2 = 60 - r1, s = 1.5 * Math.sin(r2 * DEG); return s >= 1 ? NaN : i + Math.asin(s) / DEG - 60; }, from: 28, to: 90, color: 'c' }],
  guides: [[48.6, 37.2]], label: 'Deviation against angle of incidence (A = 60°, n = 1.5)'
});

var figDispersion = (function () {
  var g = prismGeom, p = [D.poly([g.Ap, g.B1, g.B2], { closed: true, color: 'c', fill: 'soft', w: 2 })], cols = [['r', 1.47], ['o', 1.495], ['g', 1.52], ['b', 1.55], ['p', 1.58]], ends = [];
  var t0 = g.trace(1.5, 50), S = [t0.P[0] - 120 * t0.dIn[0], t0.P[1] - 120 * t0.dIn[1]];
  p.push(D.ray([S, t0.P], { color: 'k', w: 2.2 }), D.text(S[0] + 10, S[1] - 12, 'white light', { size: 11, math: false, anchor: 'start' }));
  cols.forEach(function (c) { var t = g.trace(c[1], 50), E = [t.Q[0] + 110 * t.d2[0], t.Q[1] + 110 * t.d2[1]]; ends.push(E); p.push(D.line(t.P[0], t.P[1], t.Q[0], t.Q[1], { color: c[0], w: 1.2 }), D.line(t.Q[0], t.Q[1], E[0], E[1], { color: c[0], w: 2 })); });
  p.push(D.text(ends[0][0] + 6, ends[0][1] - 4, 'red', { size: 11, color: 'r', math: false, anchor: 'start' }), D.text(ends[4][0] + 6, ends[4][1] + 6, 'violet', { size: 11, color: 'p', math: false, anchor: 'start' }), D.text(300, 228, '(spread exaggerated)', { size: 10, color: 'm', math: false }));
  return D.svg(420, 235, p, 'Dispersion of white light by a prism');
})();

var figMicroscope = (function () {
  var y0 = 60, xo = 70, fo = 26, xe = 225, fe = 60, oh = 10, u1 = -34, p = [axisLine(10, 410, y0)];
  var v1 = 1 / (1 / fo + 1 / u1), ih1 = oh * v1 / u1, O = [xo + u1, y0 - oh], I1 = [xo + v1, y0 - ih1];
  var u2 = I1[0] - xe, v2 = 1 / (1 / fe + 1 / u2), ih2 = ih1 * v2 / u2, I2 = [xe + v2, y0 - ih2];
  p.push(D.lens(xo, y0, 40), D.lens(xe, y0, 55), D.text(xo + 30, 14, 'objective', { size: 11, math: false, color: 'c' }), D.text(xe + 34, 14, 'eyepiece', { size: 11, math: false, color: 'c' }));
  p.push(D.obj(O[0], y0, oh, { color: 'g' }), D.obj(I1[0], y0, ih1, { color: 'b' }), D.obj(I2[0], y0, ih2, { color: 'b', dash: '5 4', label: 'final image', math: false, size: 11, ly: 14 }));
  [[O, [xo, O[1]]], [O, [xo, y0]]].forEach(function (s, k) {
    var c = k ? 'r' : 'o', P = s[1], d = [I1[0] - P[0], I1[1] - P[1]], Pe = extendTo(P, d, xe);
    p.push(D.ray([s[0], P], { color: c }), D.ray([P, Pe], { color: c }), outRay(Pe, I2, false, 400, c, [6, 209]));
  });
  p.push(D.text(I1[0], y0 - 10, 'first image', { size: 11, math: false, color: 'b' }));
  return D.svg(420, 215, p, 'Compound microscope');
})();

var figTelescope = (function () {
  var y0 = 100, xo = 40, fo = 220, xe = 310, fe = 50, s = 0.12, I1 = [xo + fo, y0 + fo * s], p = [axisLine(10, 410, y0)];
  p.push(D.lens(xo, y0, 50), D.lens(xe, y0, 50), D.text(xo, 165, 'objective (f₀)', { size: 11, math: false, color: 'c' }), D.text(xe, 165, 'eyepiece (fₑ)', { size: 11, math: false, color: 'c' }));
  [-30, 0, 30].forEach(function (hy, k) {
    var c = ['o', 'r', 'g'][k], P = [xo, y0 + hy], S = [10, y0 + hy - 30 * s], d = [I1[0] - P[0], I1[1] - P[1]], Pe = extendTo(P, d, xe), slope = -(I1[1] - y0) / (xe - I1[0]) * -1;
    var E = [405, Pe[1] + (405 - xe) * (y0 - I1[1]) / (xe - I1[0])];
    p.push(D.ray([S, P], { color: c }), D.ray([P, Pe], { color: c }), D.ray([Pe, E], { color: c }));
  });
  p.push(D.dot(I1[0], I1[1], { color: 'b', r: 3.5 }), D.text(I1[0] - 10, I1[1] + 14, 'image at the common focus', { size: 11, math: false, color: 'b', anchor: 'end' }));
  p.push(D.arrow(xo, 182, xo + fo, 182, { color: 'm', w: 1, head: 6, both: true, label: 'f₀', ly: 10, math: false, size: 12 }), D.arrow(xo + fo, 182, xe, 182, { color: 'm', w: 1, head: 6, both: true, label: 'fₑ', ly: 10, math: false, size: 12 }));
  return D.svg(420, 205, p, 'Astronomical telescope in normal adjustment');
})();

var figWavefronts = D.row([
  [D.svg(200, 170, [D.dot(30, 85, { r: 4 }), [30, 60, 90, 120].map(function (r) { return D.path('M' + (30 + r * Math.cos(-0.9)) + ' ' + (85 + r * Math.sin(-0.9)) + ' A ' + r + ' ' + r + ' 0 0 1 ' + (30 + r * Math.cos(0.9)) + ' ' + (85 + r * Math.sin(0.9)), { color: 'b', w: 1.6 }); }).join(''),
    D.ray([[30, 85], [190, 85]], { color: 'o', w: 1.2 }), D.ray([[30, 85], [170, 30]], { color: 'o', w: 1.2 }), D.ray([[30, 85], [170, 140]], { color: 'o', w: 1.2 })], 'spherical wavefronts'), 'point source: spherical'],
  [D.svg(200, 170, [[60, 95, 130, 165].map(function (x) { return D.line(x, 20, x, 150, { color: 'b', w: 1.6 }); }).join(''),
    D.ray([[20, 50], [195, 50]], { color: 'o', w: 1.2 }), D.ray([[20, 85], [195, 85]], { color: 'o', w: 1.2 }), D.ray([[20, 120], [195, 120]], { color: 'o', w: 1.2 })], 'plane wavefronts'), 'distant source: plane']
]);

var figHuygens = (function () {
  var A = [100, 110], i = 40 * DEG, L = 120, B = [A[0] + L * Math.cos(i), A[1] - L * Math.sin(i)], dir = [Math.sin(i), Math.cos(i)], tBC = (A[1] - B[1]) / dir[1];
  var C = [B[0] + dir[0] * tBC, 110], ratio = 0.67, AE = ratio * tBC, r = Math.asin(Math.sin(i) * ratio), E = [A[0] + AE * Math.sin(r), A[1] + AE * Math.cos(r)];
  return D.svg(400, 220, [
    D.rect(10, 110, 380, 105, { color: 'b', fill: 'soft', w: 0.01 }), D.line(10, 110, 390, 110, { color: 'b', w: 1.6 }),
    D.line(A[0], A[1], B[0], B[1], { color: 'g', w: 2.2 }), D.ray([B, C], { color: 'o' }), D.ray([[A[0] - 40 * dir[0], A[1] - 40 * dir[1]], A], { color: 'o' }),
    D.path('M' + (A[0] - AE) + ' ' + A[1] + ' A ' + AE + ' ' + AE + ' 0 0 0 ' + (A[0] + AE) + ' ' + A[1], { color: 'p', w: 1.2, dash: '4 3' }),
    D.line(C[0], C[1], E[0], E[1], { color: 'g', w: 2.2 }), D.ray([A, [E[0] + (E[0] - A[0]) * 0.5, E[1] + (E[1] - A[1]) * 0.5]], { color: 'o' }),
    D.text(A[0] - 8, A[1] - 10, 'A', { math: true }), D.text(B[0] + 8, B[1] - 6, 'B', { math: true }), D.text(C[0] + 6, C[1] - 10, 'C', { math: true }), D.text(E[0] - 12, E[1] + 6, 'E', { math: true }),
    D.text(242, 64, 'v₁τ', { size: 12, math: false, color: 'o' }), D.text(90, 160, 'v₂τ', { size: 12, math: false, color: 'p' }),
    D.text(330, 90, 'medium 1 (faster)', { size: 11, math: false }), D.text(330, 200, 'medium 2 (slower)', { size: 11, math: false, color: 'b' })
  ], "Refraction of a plane wavefront by Huygens' construction");
})();

var figYDSE = D.svg(420, 220, [
  D.dot(30, 110, { r: 4 }), D.text(30, 128, 'S', { math: true }),
  D.line(100, 15, 100, 95, { color: 'k', w: 3 }), D.line(100, 101, 100, 119, { color: 'k', w: 3 }), D.line(100, 125, 100, 205, { color: 'k', w: 3 }),
  D.text(88, 92, 'S₁', { size: 12, math: false, anchor: 'end' }), D.text(88, 132, 'S₂', { size: 12, math: false, anchor: 'end' }),
  D.line(380, 15, 380, 205, { color: 'k', w: 2.4 }), D.dot(380, 50, { r: 4 }), D.text(392, 50, 'P', { math: true, anchor: 'start' }),
  D.line(100, 98, 380, 50, { color: 'o', w: 1.4 }), D.line(100, 122, 380, 50, { color: 'r', w: 1.4 }), axisLine(100, 380, 110),
  D.line(100, 98, 104, 121.3, { color: 'm', w: 1 }), D.text(116, 140, 'path difference d sin θ', { size: 11, color: 'm', math: false, anchor: 'start' }),
  D.arrow(392, 110, 392, 54, { color: 'm', w: 1, head: 6 }), D.text(400, 84, 'y', { math: true, anchor: 'start' }),
  D.arrow(100, 195, 380, 195, { color: 'm', w: 1, head: 6, both: true, label: 'D', ly: -9 }), D.text(70, 112, 'd', { math: true, color: 'm' })
], "Young's double-slit experiment");

var figFringes = D.plot({
  w: 420, h: 170, x: [-3.2, 3.2], y: [0, 1.25], xlabel: 'y', ylabel: 'I', xticks: [[-1, '−β'], [1, 'β'], [2, '2β']], yticks: [[1, '4I₀']], noOrigin: true,
  fns: [{ f: function (y) { return Math.pow(Math.cos(PI * y), 2); }, color: 'c', steps: 600 }], label: 'Intensity on the screen: equally spaced bright and dark fringes'
});

var figSingle = D.plot({
  w: 420, h: 180, x: [-3.4, 3.4], y: [0, 1.15], xlabel: 'sin θ', ylabel: 'I', mathLabels: false, xticks: [[-2, '−2λ/a'], [-1, '−λ/a'], [1, 'λ/a'], [2, '2λ/a']], yticks: [], noOrigin: true,
  fns: [{ f: function (x) { var b = PI * x; return Math.abs(b) < 1e-6 ? 1 : Math.pow(Math.sin(b) / b, 2); }, color: 'o', steps: 600 }],
  texts: [{ x: 1.4, y: 0.25, s: 'weak secondary maxima', size: 11, color: 'o', anchor: 'start' }],
  label: 'Single-slit diffraction pattern'
});

var figPolar = D.svg(420, 170, [
  D.line(10, 85, 410, 85, { color: 'm', w: 1, dash: '4 4' }),
  (function () { var s = ''; [0, 45, 90, 135].forEach(function (a) { var c = Math.cos(a * DEG) * 18, d = Math.sin(a * DEG) * 18; s += D.arrow(50 - c, 85 + d, 50 + c, 85 - d, { color: 'o', w: 1.4, head: 5, both: true }); }); return s; })(),
  D.text(50, 125, 'unpolarised', { size: 11, math: false, color: 'o' }),
  D.poly([[110, 40], [140, 25], [140, 130], [110, 145]], { closed: true, color: 'c', fill: 'soft', w: 1.6 }), [32, 52, 72, 92, 112].map(function (y) { return D.line(125, y, 125, y + 14, { color: 'c', w: 1 }); }).join(''), D.text(125, 160, 'polariser', { size: 11, math: false, color: 'c' }),
  D.arrow(200, 103, 200, 67, { color: 'o', w: 1.8, head: 6, both: true }), D.text(200, 125, 'I₀/2', { size: 12, math: false, color: 'o' }),
  D.poly([[260, 40], [290, 25], [290, 130], [260, 145]], { closed: true, color: 'p', fill: 'soft', w: 1.6 }), [0, 1, 2, 3, 4].map(function (k) { var y = 40 + k * 20; return D.line(268, y + 10, 282, y - 2, { color: 'p', w: 1 }); }).join(''), D.text(275, 160, 'analyser at θ', { size: 11, math: false, color: 'p' }),
  D.arrow(360 - 9, 85 + 13, 360 + 9, 85 - 13, { color: 'o', w: 1.8, head: 6, both: true }), D.text(360, 125, 'I₀/2 · cos²θ', { size: 12, math: false, color: 'o' })
], 'Polariser and analyser (Malus\'s law)');

var figBrewster = (function () {
  var iB = Math.atan(1.5), r = PI / 2 - iB, P = [200, 100];
  return D.svg(400, 210, [
    D.rect(10, 100, 380, 105, { color: 'b', fill: 'soft', w: 0.01 }), D.line(10, 100, 390, 100, { color: 'b', w: 1.6 }), D.line(200, 10, 200, 200, { color: 'm', w: 1, dash: '5 4' }),
    D.ray([[200 - 85 * Math.tan(iB), 15], P], { color: 'o' }), D.ray([P, [200 + 85 * Math.tan(iB), 15]], { color: 'r' }), D.ray([P, [200 + 95 * Math.tan(r), 195]], { color: 'o' }),
    D.angle(200, 100, 36, 90, 90 + 56.3, 'i_B', { lr: 12, size: 12 }),
    (function () { var s = ''; for (var k = 1; k <= 4; k++) { var t = k / 5; s += D.dot(200 + 85 * Math.tan(iB) * t, 100 - 85 * t, { color: 'r', r: 2.4 }); } return s; })(),
    D.text(335, 74, 'reflected:', { size: 11, color: 'r', math: false }), D.text(335, 88, 'completely polarised', { size: 11, color: 'r', math: false }), D.text(310, 186, 'refracted', { size: 11, color: 'o', math: false }),
    D.text(272, 110, '90°', { size: 11, color: 'm', math: false })
  ], "Brewster's angle: reflected and refracted rays are perpendicular");
})();

// ---------- chapter text ----------
JEE.book('physics', 'optics', {
  intro: [
    R`Light lets us see the world, and optics explains how. For most everyday purposes, light can be treated as rays that travel in straight lines and bend at surfaces: this is <b>ray (geometrical) optics</b>, which explains mirrors, lenses, prisms, the eye, microscopes and telescopes.`,
    R`But light is really a wave (an electromagnetic wave), and some effects (the coloured fringes of interference, the spreading of light through narrow slits, polarisation) can only be explained by <b>wave optics</b>. This chapter covers both, from the laws of reflection to Young's double-slit experiment and Brewster's law.`
  ],
  sections: [
    { h: R`Reflection of light and plane mirrors`, t: [0], blocks: [
      R`When light strikes a polished surface, it bounces back: <b>reflection</b>. The <b>laws of reflection:</b> (1) the incident ray, the reflected ray and the normal to the surface at the point of incidence all lie in the same plane; (2) the angle of reflection equals the angle of incidence, \(\angle r = \angle i\).`,
      { fig: figReflect, cap: R`The angle of incidence i and the angle of reflection r are measured from the normal, and are equal.` },
      R`A <b>plane mirror</b> forms an image that is virtual (the rays only appear to come from it), erect, the same size as the object, and as far behind the mirror as the object is in front. It is laterally inverted (left and right swapped).`,
      { fig: figPlane, cap: R`Reflected rays seem to diverge from a point behind the mirror: the virtual image.` },
      { points: [R`If a plane mirror is rotated by θ (with the incident ray fixed), the reflected ray turns through 2θ.`, R`Two plane mirrors at angle θ produce \(n = \dfrac{360°}{\theta} - 1\) images (when 360/θ is even; for odd values, n = 360/θ − 1 if the object is on the bisector, otherwise 360/θ).`, R`To see your full height, a plane mirror needs to be only half your height.`] },
      { ex: { q: R`Two plane mirrors are inclined at 60°. How many images of an object between them are formed?`,
        steps: [R`360/60 = 6, which is even, so n = 6 − 1.`], ans: R`5 images` } },
      { check: { q: R`A plane mirror is turned through 10°. Through what angle does the reflected ray turn?`, ans: R`20°.` } }
    ] },

    { h: R`Spherical mirrors and the sign convention`, t: [0], blocks: [
      R`A <b>spherical mirror</b> is part of a reflecting sphere. A <b>concave</b> mirror reflects from its inner (hollow) side and converges light; a <b>convex</b> mirror reflects from its outer side and diverges light.`,
      { fig: figTerms, cap: R`Pole P (centre of the mirror's surface), centre of curvature C, principal focus F and principal axis. Distances are measured from P.` },
      { points: [R`<b>Radius of curvature</b> R: the radius of the sphere; C is its centre.`, R`<b>Principal focus</b> F: rays parallel to the axis converge to (concave) or appear to diverge from (convex) F after reflection.`, R`<b>Focal length</b> \(f = R/2\) (for rays close to the axis, the paraxial approximation).`] },
      { derive: R`Why f = R/2`, steps: [
        R`A ray parallel to the axis hits the mirror at M. The normal there passes through C, so the angle of incidence θ equals the angle ∠MCP.`,
        R`The reflected ray makes angle θ with the normal and crosses the axis at F. Triangle MCF is isosceles (both base angles θ), so FC = FM.`,
        R`For a small aperture, FM ≈ FP, so FP = FC = R/2.`
      ] },
      R`<b>Cartesian sign convention:</b> all distances are measured from the pole; distances in the direction of the incident light are positive, against it negative; heights above the axis are positive, below negative. With light coming from the left, a real object has u < 0; a concave mirror has f < 0 and a convex mirror f > 0.`,
      { check: { q: R`What is the focal length of a convex mirror of radius of curvature 40 cm (with sign)?`, ans: R`+20 cm.` } }
    ] },

    { h: R`Mirror formula and magnification`, t: [1], blocks: [
      R`For a spherical mirror (with the Cartesian sign convention), \[\frac1v + \frac1u = \frac1f,\qquad m = \frac{h_i}{h_o} = -\frac vu\] A negative m means an inverted (real) image; a positive m means an erect (virtual) image; |m| > 1 means magnified.`,
      { derive: R`Mirror formula`, steps: [
        R`From the object tip, take a ray parallel to the axis (reflects through F) and a ray through C (reflects back on itself); they meet at the image tip.`,
        R`Similar triangles give \(\dfrac{h_i}{h_o} = \dfrac{CI}{CO}\) and, at the focus, \(\dfrac{h_i}{h_o} = \dfrac{FI}{FP}\) (with signs).`,
        R`Writing CI = v − R, CO = u − R, FI = v − f, FP = f with R = 2f and equating gives \(\dfrac1v + \dfrac1u = \dfrac1f\).`
      ] },
      { fig: figConcave, cap: R`Concave mirror with the object between F and C: the image is real, inverted, magnified and beyond C. The ray parallel to the axis reflects through F; the ray to the pole reflects symmetrically.` },
      { table: { head: [R`Object position (concave mirror)`, R`Image position`, R`Nature`], rows: [
        [R`At infinity`, R`at F`, R`real, inverted, point-sized`], [R`Beyond C`, R`between F and C`, R`real, inverted, diminished`], [R`At C`, R`at C`, R`real, inverted, same size`],
        [R`Between C and F`, R`beyond C`, R`real, inverted, magnified`], [R`At F`, R`at infinity`, R`real, inverted, highly magnified`], [R`Between F and P`, R`behind the mirror`, R`virtual, erect, magnified (shaving mirror)`]] } },
      { fig: figConvexM, cap: R`A convex mirror always forms a virtual, erect, diminished image between P and F, which is why it is used as a rear-view mirror (wide field of view).` },
      { ex: { q: R`An object is 25 cm in front of a concave mirror of focal length 15 cm. Find the position and nature of the image.`,
        steps: [R`u = −25, f = −15: \(\dfrac1v = -\dfrac1{15} + \dfrac1{25} = -\dfrac2{75}\), so v = −37.5 cm.`, R`m = −v/u = −37.5/25 = −1.5.`], ans: R`37.5 cm in front of the mirror; real, inverted, 1.5 times magnified` } },
      { ex: { q: R`A car's convex rear-view mirror has f = 20 cm. Where is the image of a car 30 cm away, and how big is it?`,
        steps: [R`u = −30, f = +20: \(\dfrac1v = \dfrac1{20} + \dfrac1{30} = \dfrac5{60}\), v = +12 cm.`, R`m = −12/(−30) = 0.4.`], ans: R`12 cm behind the mirror; virtual, erect, 0.4 times the size` } },
      { check: { q: R`Can a convex mirror ever form a real image of a real object?`, ans: R`No.` } }
    ] },

    { h: R`Refraction of light and refractive index`, t: [0], blocks: [
      R`When light passes from one medium into another, its direction changes at the boundary: <b>refraction</b>. It happens because light travels at different speeds in different media.`,
      { fig: figSnell, cap: R`Entering glass from air, the ray bends towards the normal (r < i). A little light is also reflected.` },
      R`<b>Laws of refraction:</b> (1) the incident ray, refracted ray and normal lie in one plane; (2) <b>Snell's law</b>: \[n_1\sin i = n_2\sin r\] The <b>absolute refractive index</b> of a medium is \(n = c/v\), the ratio of the speed of light in vacuum to that in the medium. The relative refractive index of medium 2 with respect to 1 is \(n_{21} = n_2/n_1 = v_1/v_2\).`,
      { points: [R`Going into a denser medium (larger n), light bends towards the normal; into a rarer medium, away from it.`, R`The frequency does not change on refraction; the speed and the wavelength both decrease by the factor n: \(\lambda_m = \lambda/n\).`, R`Typical values: water 1.33, glass 1.5, diamond 2.42.`] },
      { ex: { q: R`Light in air hits glass (n = 1.5) at 60°. Find the angle of refraction and the speed of light in the glass.`,
        steps: [R`\(\sin r = \dfrac{\sin60°}{1.5} = 0.577\).`, R`v = c/n = 3 × 10⁸/1.5.`], ans: R`r ≈ 35.3°; 2 × 10⁸ m/s` } },
      { check: { q: R`Does the colour of light change when it enters water?`, ans: R`No: colour depends on frequency, which does not change.` } }
    ] },

    { h: R`Refraction at a plane surface: real and apparent depth`, t: [0], blocks: [
      R`A coin at the bottom of a pool looks closer to the surface than it really is. Light from it bends away from the normal as it leaves the water, so to an observer above, it appears to come from a shallower point.`,
      { fig: figDepth, cap: R`Rays from the coin bend away from the normal at the surface, so their backward extensions meet above the coin.` },
      R`For viewing nearly straight down: \[\text{apparent depth} = \frac{\text{real depth}}{n}\] (n = refractive index of the water relative to air). The object appears raised by \(d\left(1 - \dfrac1n\right)\).`,
      { ex: { q: R`A pool is 2 m deep (n = 4/3). How deep does it look from above?`,
        steps: [R`\(2/(4/3)\).`], ans: R`1.5 m` } },
      { ex: { q: R`Looking through a glass slab 6 cm thick (n = 1.5) at a mark on its bottom, by how much does the mark appear raised?`,
        steps: [R`Shift \(= t\left(1 - \dfrac1n\right) = 6\left(1 - \dfrac23\right)\).`], ans: R`2 cm` } },
      R`A ray passing obliquely through a parallel-sided slab emerges parallel to its original direction but displaced sideways (<b>lateral shift</b>) by \(\dfrac{t\sin(i - r)}{\cos r}\).`,
      { check: { q: R`Why do swimming pools look shallower than they are?`, ans: R`Refraction at the surface makes the bottom appear raised by d(1 − 1/n).` } }
    ] },

    { h: R`Refraction at a spherical surface`, t: [0], blocks: [
      { fig: figSph, cap: R`Light from O in a medium of index n₁ refracts at a convex spherical surface (centre C) into a medium of index n₂ and forms an image at I.` },
      { derive: R`Refraction formula`, steps: [
        R`Apply Snell's law at the surface for a paraxial ray (small angles, sin θ ≈ θ): \(n_1i = n_2r\).`,
        R`Express i and r using the angles that the ray, the normal (through C) and the line to I make with the axis, each ≈ height/distance.`,
        R`This gives (Cartesian signs) \[\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}\]`
      ] },
      { ex: { q: R`An object in air is 30 cm from a convex glass surface (R = 10 cm, n = 1.5). Where is the image formed inside the glass?`,
        steps: [R`\(\dfrac{1.5}{v} - \dfrac{1}{-30} = \dfrac{0.5}{10}\).`, R`\(\dfrac{1.5}{v} = 0.05 - 0.0333 = 0.0167\).`], ans: R`v = 90 cm inside the glass (a real image)` } },
      { tip: R`For a plane surface (R → ∞), the formula gives \(v = \dfrac{n_2}{n_1}u\): the apparent depth result.` },
      { check: { q: R`A fish in a spherical bowl is viewed from outside. Is the image formed by refraction at a spherical surface?`, ans: R`Yes: the curved glass–water surface acts as a spherical refracting surface (the fish appears magnified).` } }
    ] },

    { h: R`Total internal reflection`, t: [2], blocks: [
      R`When light goes from a denser to a rarer medium (glass to air, water to air), it bends away from the normal. As the angle of incidence increases, the refracted ray gets closer to the surface. At a certain angle, the <b>critical angle</b> C, it grazes along the surface (r = 90°). Beyond C, no light is refracted at all: it is all reflected back. This is <b>total internal reflection</b> (TIR).`,
      { fig: figTIR, cap: R`From a source under water: a small angle gives refraction; at the critical angle the ray grazes the surface; beyond it, total internal reflection.` },
      R`From Snell's law with r = 90°: \[\sin C = \frac{n_2}{n_1} = \frac1n\ \ (\text{for a medium of index n in air})\] Conditions for TIR: light must travel from a denser to a rarer medium, and the angle of incidence must exceed C.`,
      { ex: { q: R`Find the critical angles for glass (1.5), water (4/3) and diamond (2.42).`,
        steps: [R`C = sin⁻¹(1/n).`], ans: R`≈ 41.8°, 48.6° and 24.4°` } },
      { h3: R`Applications` },
      { fig: figFibre, cap: R`An optical fibre: light bounces along the core by repeated total internal reflection, with almost no loss.` },
      { points: [
        R`<b>Optical fibres</b> carry telephone, TV and internet signals as pulses of light over thousands of kilometres, and let doctors see inside the body (endoscopes).`,
        R`<b>Sparkling of diamond:</b> its very small critical angle (24.4°) means light entering it is totally reflected many times before escaping, and the cut faces send it out in bright flashes.`,
        R`<b>Mirage:</b> on a hot day, air near the road is hotter and rarer. Light from the sky bends more and more as it travels down through layers of decreasing n, until it is totally reflected upward; we see an image of the sky that looks like water on the road.`,
        R`<b>Totally reflecting prisms</b> (45°–90°–45°) turn light through 90° or 180° in periscopes and binoculars, better than mirrors.`
      ] },
      { check: { q: R`Can total internal reflection happen when light goes from air into glass?`, ans: R`No: TIR needs light to travel from a denser to a rarer medium.` } }
    ] },

    { h: R`Lens maker's formula`, t: [3], blocks: [
      R`A <b>lens</b> is a piece of transparent material bounded by two surfaces, at least one curved. A <b>convex</b> (converging) lens is thicker in the middle; a <b>concave</b> (diverging) lens is thinner in the middle. A thin lens has thickness much smaller than its radii.`,
      { fig: figLensMaker, cap: R`A thin biconvex lens with surfaces of radii R₁ and R₂ (centres C₁ and C₂).` },
      { derive: R`Lens maker's formula`, steps: [
        R`Refraction at the first surface (n₀ to n): \(\dfrac{n}{v_1} - \dfrac{n_0}{u} = \dfrac{n - n_0}{R_1}\).`,
        R`The intermediate image acts as the object for the second surface (n to n₀): \(\dfrac{n_0}{v} - \dfrac{n}{v_1} = \dfrac{n_0 - n}{R_2}\).`,
        R`Adding: \(\dfrac1v - \dfrac1u = \left(\dfrac{n}{n_0} - 1\right)\left(\dfrac1{R_1} - \dfrac1{R_2}\right)\). For an object at infinity, v = f: \[\frac1f = (n_{rel} - 1)\left(\frac1{R_1} - \frac1{R_2}\right)\]`
      ] },
      { ex: { q: R`A biconvex lens (n = 1.5) has both radii 20 cm. Find its focal length in air and in water (n = 4/3).`,
        steps: [R`R₁ = +20, R₂ = −20: \(\dfrac1f = 0.5\left(\dfrac1{20} + \dfrac1{20}\right) = 0.05\), f = 20 cm.`, R`In water, \(n_{rel} = 1.5/(4/3) = 1.125\): \(\dfrac1f = 0.125\times0.1\).`], ans: R`20 cm in air; 80 cm in water` } },
      { mistake: R`Forgetting that a lens's focal length depends on the surrounding medium. A glass lens in a liquid of the same refractive index becomes invisible and has no focusing power; in a denser liquid, a convex lens diverges light.` },
      { check: { q: R`What is the focal length of a plano-convex lens (n = 1.5, R = 10 cm)?`, ans: R`1/f = 0.5 × (1/10 − 0), so f = 20 cm.` } }
    ] },

    { h: R`Thin lens formula and magnification`, t: [3], blocks: [
      R`For a thin lens (Cartesian signs; convex f > 0, concave f < 0): \[\frac1v - \frac1u = \frac1f,\qquad m = \frac{h_i}{h_o} = \frac vu\] Note the minus sign in the lens formula and the absence of one in m (compare with mirrors).`,
      { fig: figConvexLens, cap: R`Convex lens with the object between F and 2F: real, inverted, magnified image beyond 2F. The ray parallel to the axis refracts through F′; the ray through the optical centre goes straight on.` },
      { fig: figMagnifier, cap: R`Object inside F: the rays diverge after the lens, and their backward extensions meet at a virtual, erect, magnified image (a magnifying glass).` },
      { fig: figConcaveLens, cap: R`A concave lens always gives a virtual, erect, diminished image between F and the lens.` },
      { ex: { q: R`An object is 15 cm from a convex lens of focal length 10 cm. Find the image.`,
        steps: [R`u = −15, f = +10: \(\dfrac1v = \dfrac1{10} - \dfrac1{15} = \dfrac1{30}\), v = 30 cm.`, R`m = v/u = 30/(−15) = −2.`], ans: R`30 cm behind the lens; real, inverted, twice the size` } },
      { ex: { q: R`An object is 30 cm from a concave lens of focal length 20 cm. Find the image.`,
        steps: [R`u = −30, f = −20: \(\dfrac1v = -\dfrac1{20} - \dfrac1{30} = -\dfrac5{60}\), v = −12 cm.`, R`m = −12/−30 = 0.4.`], ans: R`12 cm in front of the lens (same side); virtual, erect, 0.4 times` } },
      { tip: R`For a convex lens, the minimum distance between a real object and its real image is 4f, achieved at u = −2f, v = 2f (displacement method).` },
      { check: { q: R`If the lower half of a convex lens is covered, what happens to the image?`, ans: R`The full image still forms, but it is dimmer (fewer rays reach it).` } }
    ] },

    { h: R`Power of a lens and combinations of thin lenses`, t: [4], blocks: [
      R`The <b>power</b> of a lens measures how strongly it bends light: \[P = \frac1f\ \ (f\text{ in metres; unit: dioptre, D})\] Converging lenses have positive power, diverging lenses negative. A lens of f = 25 cm has P = +4 D.`,
      { derive: R`Lenses in contact`, steps: [
        R`The first lens forms an image at v₁: \(\dfrac1{v_1} - \dfrac1u = \dfrac1{f_1}\). This is the object for the second: \(\dfrac1v - \dfrac1{v_1} = \dfrac1{f_2}\).`,
        R`Adding: \(\dfrac1v - \dfrac1u = \dfrac1{f_1} + \dfrac1{f_2}\), so \[\frac1F = \frac1{f_1} + \frac1{f_2},\qquad P = P_1 + P_2\] Magnifications multiply: \(m = m_1m_2\).`
      ] },
      { ex: { q: R`Lenses of +4 D and −2.5 D are placed in contact. Find the power and focal length of the combination.`,
        steps: [R`P = 4 − 2.5 = 1.5 D; F = 1/1.5 m.`], ans: R`+1.5 D; ≈ 66.7 cm (converging)` } },
      { adv: R`<b>Lenses separated by d:</b> \(\dfrac1F = \dfrac1{f_1} + \dfrac1{f_2} - \dfrac{d}{f_1f_2}\). For f₁ = 20 cm, f₂ = 30 cm and d = 10 cm, 1/F = 1/20 + 1/30 − 10/600, so F = 15 cm.` },
      { check: { q: R`An optician prescribes −2 D lenses. What kind of lens is it, and what is its focal length?`, ans: R`A diverging (concave) lens of focal length 50 cm, used to correct short sight (myopia).` } }
    ] },

    { h: R`Combinations of mirrors and lenses`, t: [4], blocks: [
      R`In a system of lenses and mirrors, trace the light step by step: the image formed by each element becomes the object for the next, with distances measured from the new element and signs set by the direction the light is now travelling.`,
      { adv: R`<b>Silvered lens.</b> When one face of a thin lens is silvered, light passes through the lens, reflects, and passes through the lens again. The system behaves as a mirror of power \[P = 2P_{lens} + P_{mirror}\] (with converging powers positive), so its equivalent focal length is \(F = -1/P\) as a mirror. Example: a plano-convex lens (n = 1.5, R = 20 cm, so \(f_L = 40\) cm) silvered on its <b>plane</b> face: P = 2(2.5) + 0 = 5 D, a concave mirror of focal length 20 cm. Silvered on its <b>curved</b> face: P = 2(2.5) + 1/0.1 = 15 D, focal length ≈ 6.7 cm.` },
      { ex: { q: R`A convex lens (f = 20 cm) is placed 40 cm in front of a plane mirror. An object is 40 cm in front of the lens on the other side. Where is the final image?`,
        steps: [R`Lens: u = −40, f = 20 gives v = +40 cm, which is exactly at the mirror.`, R`An image on the mirror's surface is reflected in place; the light returns through the lens with that point as object at 40 cm.`, R`The lens again images it 40 cm away, back at the position of the object.`], ans: R`The final image coincides with the object (real and inverted)` } },
      { check: { q: R`A convex lens is placed with a plane mirror behind it. An object at the lens's focus forms its image where?`, ans: R`On itself: light from F leaves the lens parallel, reflects back parallel, and refocuses at F (used to find f).` } }
    ] },

    { h: R`Refraction through a prism`, t: [5], blocks: [
      R`A <b>prism</b> is a transparent block with two plane faces inclined at the <b>angle of the prism</b> A. A ray entering one face is bent twice and emerges deviated towards the base.`,
      { fig: figPrism, cap: R`A ray through a prism: angle of incidence i, refraction angles r₁ and r₂, angle of emergence e and total deviation δ.` },
      { derive: R`Prism relations`, steps: [
        R`Geometry of the two normals: \(r_1 + r_2 = A\).`,
        R`Total deviation: \(\delta = (i - r_1) + (e - r_2) = i + e - A\).`,
        R`At <b>minimum deviation</b> \(\delta_m\), the ray passes symmetrically: i = e and \(r_1 = r_2 = A/2\). Then \(i = (A + \delta_m)/2\) and \[n = \frac{\sin\left(\frac{A + \delta_m}{2}\right)}{\sin\frac A2}\]`
      ] },
      { fig: figDelta, cap: R`As i increases, the deviation first falls, reaches a minimum when i = e, and then rises.` },
      R`For a <b>thin prism</b> (A small), sin θ ≈ θ gives \(\delta = (n - 1)A\), independent of i.`,
      { ex: { q: R`A 60° prism has n = 1.5. Find the angle of minimum deviation.`,
        steps: [R`\(\sin\dfrac{60° + \delta_m}{2} = 1.5\sin30° = 0.75\), so \(\dfrac{60° + \delta_m}{2} = 48.6°\).`], ans: R`δₘ ≈ 37.2°` } },
      { check: { q: R`A thin prism of angle 5° has n = 1.5. What is its deviation?`, ans: R`(1.5 − 1) × 5° = 2.5°.` } }
    ] },

    { h: R`Dispersion of light by a prism`, t: [5], blocks: [
      R`White light passing through a prism splits into a band of colours, the <b>spectrum</b> (violet, indigo, blue, green, yellow, orange, red: VIBGYOR). This is <b>dispersion</b>. It happens because the refractive index of glass depends on wavelength: it is larger for violet (short λ) than for red (long λ), so violet is deviated most.`,
      { fig: figDispersion, cap: R`Each colour is deviated by a different amount: red least, violet most.` },
      { points: [R`<b>Angular dispersion</b> (thin prism): \(\delta_v - \delta_r = (n_v - n_r)A\).`, R`<b>Dispersive power:</b> \(\omega = \dfrac{\delta_v - \delta_r}{\delta_y} = \dfrac{n_v - n_r}{n_y - 1}\), a property of the material (y = mean, yellow).`, R`In vacuum all colours travel at the same speed; in glass, violet travels slowest.`] },
      { ex: { q: R`For crown glass, \(n_v = 1.532\), \(n_r = 1.514\) and \(n_y = 1.523\). Find its dispersive power.`,
        steps: [R`\(\omega = \dfrac{1.532 - 1.514}{1.523 - 1}\).`], ans: R`≈ 0.034` } },
      R`A <b>rainbow</b> is dispersion by raindrops: sunlight refracts into a drop, reflects inside it and refracts out, with each colour leaving at a slightly different angle (about 40° for violet to 42° for red), so we see coloured arcs with red on the outside.`,
      { check: { q: R`Which colour has the largest refractive index in glass?`, ans: R`Violet.` } }
    ] },

    { h: R`The microscope`, t: [6], blocks: [
      R`A <b>simple microscope</b> (magnifying glass) is a convex lens held close to the eye, with the object just inside its focus, forming a virtual, erect, magnified image. With the image at the near point (D = 25 cm), the magnifying power is \(m = 1 + \dfrac Df\); with the image at infinity (relaxed eye), \(m = \dfrac Df\).`,
      R`A <b>compound microscope</b> uses two convex lenses: an <b>objective</b> of short focal length near the object, and an <b>eyepiece</b> that acts as a magnifier for the objective's image.`,
      { fig: figMicroscope, cap: R`The objective forms a real, inverted, magnified first image; the eyepiece magnifies it further into a large virtual final image.` },
      R`The total magnifying power is the product \(m = m_om_e\). In normal adjustment (final image at infinity), \[m \approx \frac{L}{f_o}\cdot\frac{D}{f_e}\] where L is the tube length (the distance between the second focal point of the objective and the first focal point of the eyepiece). For the final image at the near point, use \(\left(1 + \dfrac D{f_e}\right)\) instead of \(\dfrac D{f_e}\).`,
      { ex: { q: R`A compound microscope has f_o = 1 cm, f_e = 5 cm and tube length 20 cm. Find its magnifying power in normal adjustment.`,
        steps: [R`\(m = \dfrac{20}{1}\times\dfrac{25}{5}\).`], ans: R`100` } },
      { check: { q: R`Why should both lenses of a microscope have short focal lengths?`, ans: R`The magnifying power is inversely proportional to both f_o and f_e.` } }
    ] },

    { h: R`The telescope`, t: [6], blocks: [
      R`A telescope makes distant objects look larger by increasing the angle they subtend at the eye. A <b>refracting (astronomical) telescope</b> has a large objective of long focal length \(f_o\) and an eyepiece of short focal length \(f_e\).`,
      { fig: figTelescope, cap: R`Parallel rays from a distant star are focused by the objective at its focal point, which is also the focal point of the eyepiece; the rays leave parallel but at a larger angle.` },
      R`In normal adjustment (final image at infinity), \[m = \frac{f_o}{f_e},\qquad \text{length } L = f_o + f_e\] The final image is inverted (unimportant for astronomy). For the final image at the near point, \(m = \dfrac{f_o}{f_e}\left(1 + \dfrac{f_e}{D}\right)\).`,
      { ex: { q: R`A telescope has f_o = 100 cm and f_e = 5 cm. Find its magnifying power and length in normal adjustment.`,
        steps: [R`m = 100/5; L = 100 + 5.`], ans: R`20; 105 cm` } },
      R`<b>Reflecting telescopes</b> use a large concave (parabolic) mirror as the objective, usually with a small secondary mirror (Newtonian or Cassegrain design). Mirrors have no chromatic aberration, can be made much larger than lenses (they are supported from behind), and a large aperture gathers more light and gives better resolution. All the largest telescopes are reflectors.`,
      { check: { q: R`For a telescope, should the objective have a large or small focal length? And for a microscope?`, ans: R`Telescope: large f_o (m = f_o/f_e). Microscope: small f_o.` } }
    ] },

    { h: R`Wavefronts and Huygens' principle`, t: [7], blocks: [
      R`A <b>wavefront</b> is a surface on which all points oscillate in the same phase. Rays are perpendicular to wavefronts. A point source gives <b>spherical</b> wavefronts; a line source gives cylindrical ones; very far away, any small part of a wavefront looks <b>plane</b>.`,
      { fig: figWavefronts, cap: R`Spherical wavefronts from a point source, and plane wavefronts from a very distant source. Rays (arrows) are normal to the wavefronts.` },
      R`<b>Huygens' principle</b> (1678): every point on a wavefront acts as a source of secondary wavelets, which spread out in the forward direction at the speed of the wave. The new wavefront at a later time is the surface tangent to (the envelope of) all these wavelets.`,
      { check: { q: R`What shape are the wavefronts of light from a distant star when they reach the Earth?`, ans: R`Plane.` } }
    ] },

    { h: R`Reflection and refraction from Huygens' principle`, t: [7], blocks: [
      { fig: figHuygens, cap: R`While the wavefront travels from B to C in medium 1, the wavelet from A spreads a smaller distance v₂τ in medium 2. The refracted wavefront CE is the tangent from C to that wavelet.` },
      { derive: R`Snell's law from Huygens' construction`, steps: [
        R`A plane wavefront AB meets the boundary at angle i. In time τ, B moves to C: BC = v₁τ. Meanwhile the wavelet from A grows to radius AE = v₂τ in medium 2.`,
        R`In triangles ABC and AEC (common side AC): \(\sin i = \dfrac{BC}{AC} = \dfrac{v_1\tau}{AC}\) and \(\sin r = \dfrac{AE}{AC} = \dfrac{v_2\tau}{AC}\).`,
        R`Dividing: \(\dfrac{\sin i}{\sin r} = \dfrac{v_1}{v_2} = \dfrac{n_2}{n_1}\): Snell's law. It also shows that light is <b>slower</b> in the denser medium, as Foucault later measured (Newton's corpuscular theory had predicted the opposite).`,
        R`For reflection, the wavelet stays in medium 1 (radius v₁τ = BC), and the same construction gives i = r.`
      ] },
      { check: { q: R`According to the wave theory, what happens to the wavelength when light enters glass from air?`, ans: R`It decreases by the factor n (the frequency stays the same, the speed decreases).` } }
    ] },

    { h: R`Interference of light: coherent sources`, t: [8], blocks: [
      R`When two light waves overlap, their displacements add (superposition). With amplitudes \(a_1, a_2\) and phase difference φ, the resultant intensity is \[I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\varphi\]`,
      { points: [R`<b>Constructive interference</b> (bright): φ = 0, 2π, … (path difference 0, λ, 2λ, …): \(I_{max} = (\sqrt{I_1} + \sqrt{I_2})^2\).`, R`<b>Destructive interference</b> (dark): φ = π, 3π, … (path difference λ/2, 3λ/2, …): \(I_{min} = (\sqrt{I_1} - \sqrt{I_2})^2\).`, R`Phase difference and path difference: \(\varphi = \dfrac{2\pi}{\lambda}\Delta x\).`] },
      R`A steady interference pattern needs <b>coherent sources</b>: sources with the same frequency and a constant phase difference. Two separate bulbs are never coherent: each emits random short bursts, so their phase difference changes millions of times a second and the pattern averages out to uniform brightness. Coherent sources are made by splitting light from a single source, e.g. with two slits (division of wavefront).`,
      { ex: { q: R`Two coherent sources have intensities I and 4I. Find the maximum and minimum intensities in their interference pattern.`,
        steps: [R`\(I_{max} = (\sqrt I + 2\sqrt I)^2\); \(I_{min} = (2\sqrt I - \sqrt I)^2\).`], ans: R`9I and I` } },
      { check: { q: R`Is energy destroyed at a dark fringe?`, ans: R`No: it is redistributed to the bright fringes; the average intensity is still I₁ + I₂.` } }
    ] },

    { h: R`Young's double-slit experiment`, t: [8], blocks: [
      R`In 1801 Thomas Young passed light from a single slit S through two close, narrow slits S₁ and S₂. These act as coherent sources, and on a screen beyond them he saw alternate bright and dark bands: <b>interference fringes</b>, proof that light is a wave.`,
      { fig: figYDSE, cap: R`Slits S₁ and S₂ a distance d apart; screen at distance D. At P (height y), the path difference is S₂P − S₁P ≈ d sin θ ≈ yd/D.` },
      { derive: R`Fringe width`, steps: [
        R`For D ≫ d, path difference \(\Delta x = d\sin\theta \approx d\tan\theta = \dfrac{yd}{D}\).`,
        R`Bright fringes: \(\dfrac{yd}{D} = n\lambda\), so \(y_n = \dfrac{n\lambda D}{d}\). Dark fringes: \(y = \left(n + \frac12\right)\dfrac{\lambda D}{d}\).`,
        R`Spacing between neighbouring bright (or dark) fringes, the <b>fringe width</b>: \[\beta = \frac{\lambda D}{d}\]`
      ] },
      { fig: figFringes, cap: R`For equal slits the intensity on the screen varies as cos²: equally bright, equally spaced fringes.` },
      { ex: { q: R`Light of wavelength 600 nm falls on slits 0.5 mm apart, with the screen 1 m away. Find the fringe width. What is it if the whole apparatus is put in water (n = 4/3)?`,
        steps: [R`\(\beta = \dfrac{600\times10^{-9}\times1}{0.5\times10^{-3}} = 1.2\) mm.`, R`In water λ becomes λ/n, so β → 1.2/(4/3).`], ans: R`1.2 mm; 0.9 mm` } },
      { points: [R`Larger λ (red) gives wider fringes than violet; white light gives a white central fringe with coloured fringes on each side.`, R`Moving the slits closer together (smaller d) or the screen farther (larger D) widens the fringes.`, R`The angular fringe width is λ/d.`] },
      { adv: R`<b>Thin film over one slit:</b> a transparent sheet of thickness t and index n over one slit adds an extra optical path (n − 1)t, shifting the whole pattern towards that slit by \(\dfrac{(n - 1)tD}{d}\) without changing β, i.e. by \((n - 1)t/\lambda\) fringes.` },
      { check: { q: R`What happens to the fringes if one slit is covered?`, ans: R`The interference disappears; only the (much broader) diffraction pattern of a single slit remains.` } }
    ] },

    { h: R`Diffraction due to a single slit`, t: [9], blocks: [
      R`Light spreads a little around obstacles and through narrow openings: <b>diffraction</b>. It is noticeable when the opening is comparable to the wavelength. Light through a single narrow slit of width a forms a broad bright central band with weaker bands on either side.`,
      { derive: R`Minima of the single-slit pattern`, steps: [
        R`Divide the slit into two halves. At an angle where the path difference between the top and bottom edges is \(a\sin\theta = \lambda\), each point in the top half has a partner in the bottom half differing by λ/2: all pairs cancel, giving darkness.`,
        R`Similarly, dividing into 4, 6, … parts: <b>minima</b> at \(a\sin\theta = n\lambda\) (n = ±1, ±2, …).`,
        R`Secondary maxima lie roughly midway, at \(a\sin\theta \approx \left(n + \frac12\right)\lambda\), and get much weaker.`
      ] },
      { fig: figSingle, cap: R`Single-slit diffraction: a bright central maximum twice as wide as the secondary maxima, which fall off quickly in intensity.` },
      R`<b>Width of the central maximum:</b> it spans from the first minimum on one side to the first on the other: angular width \(\dfrac{2\lambda}{a}\), linear width on a screen at distance D \[w = \frac{2\lambda D}{a}\] A narrower slit gives a <b>wider</b> pattern.`,
      { ex: { q: R`Light of 500 nm passes through a slit 0.1 mm wide onto a screen 1 m away. Find the position of the first minimum and the width of the central maximum.`,
        steps: [R`\(y_1 = \dfrac{\lambda D}{a} = \dfrac{500\times10^{-9}\times1}{10^{-4}} = 5\) mm.`], ans: R`5 mm from the centre; central maximum 10 mm wide` } },
      { mistake: R`Mixing up the conditions. In YDSE, \(d\sin\theta = n\lambda\) gives <b>bright</b> fringes; in single-slit diffraction, \(a\sin\theta = n\lambda\) gives <b>dark</b> fringes.` },
      R`Diffraction limits how fine a detail any optical instrument can resolve: a telescope of aperture a can separate two stars only if their angular separation exceeds about \(1.22\lambda/a\).`,
      { check: { q: R`Why is the diffraction of sound around a door easy to notice, but not that of light?`, ans: R`Sound wavelengths (about a metre) are comparable to the door; light's (about 0.5 μm) are far smaller.` } }
    ] },

    { h: R`Polarisation of light`, t: [10], blocks: [
      R`Light is a transverse wave: its electric field vibrates perpendicular to the direction of travel. In ordinary (<b>unpolarised</b>) light, the direction of vibration changes randomly. If the vibrations are confined to a single plane, the light is <b>plane-polarised</b> (linearly polarised).`,
      R`A <b>Polaroid</b> sheet contains long-chain molecules aligned in one direction; it absorbs the component of E along the chains and transmits the perpendicular component, so the transmitted light is polarised along its <b>pass axis</b>.`,
      { fig: figPolar, cap: R`Unpolarised light passing through a polariser loses half its intensity and becomes plane-polarised; an analyser at angle θ transmits a fraction cos²θ of that.` },
      R`<b>Malus's law:</b> when plane-polarised light of intensity I₀ passes through an analyser whose axis makes angle θ with the plane of polarisation, \[I = I_0\cos^2\theta\] For unpolarised light of intensity I₀ through a single polaroid, the transmitted intensity is I₀/2 (the average of cos²θ).`,
      { ex: { q: R`Unpolarised light of intensity I₀ passes through a polariser and then an analyser at 60° to it. Find the final intensity.`,
        steps: [R`After the polariser: I₀/2.`, R`After the analyser: \(\dfrac{I_0}2\cos^260° = \dfrac{I_0}2\times\dfrac14\).`], ans: R`I₀/8` } },
      { check: { q: R`Two polaroids are crossed (θ = 90°). A third is inserted between them at 45°. Is any light transmitted?`, ans: R`Yes: I₀/2 × cos²45° × cos²45° = I₀/8.` } }
    ] },

    { h: R`Brewster's law`, t: [11], blocks: [
      R`Light reflected from glass, water or a road is partly polarised. At one particular angle of incidence, the <b>Brewster angle</b> \(i_B\), the reflected light is <b>completely</b> polarised, vibrating perpendicular to the plane of incidence.`,
      { fig: figBrewster, cap: R`At Brewster's angle the reflected and refracted rays are at right angles, and the reflected light is completely plane-polarised (dots: vibrations perpendicular to the page).` },
      { derive: R`Brewster's law`, steps: [
        R`At \(i_B\), the reflected and refracted rays are perpendicular: \(i_B + r = 90°\).`,
        R`Snell's law: \(n = \dfrac{\sin i_B}{\sin r} = \dfrac{\sin i_B}{\cos i_B}\), so \[\tan i_B = n\]`
      ] },
      { ex: { q: R`Find Brewster's angle for glass (n = 1.5) and water (n = 4/3).`,
        steps: [R`\(i_B = \tan^{-1}n\).`], ans: R`≈ 56.3° and ≈ 53.1°` } },
      { check: { q: R`At Brewster's angle for glass, what is the angle of refraction?`, ans: R`90° − 56.3° = 33.7°.` } }
    ] },

    { h: R`Uses of plane-polarised light and Polaroids`, t: [11], blocks: [
      { points: [
        R`<b>Polaroid sunglasses</b> cut glare: light reflected from water and roads is largely horizontally polarised, and the glasses' vertical pass axis blocks it.`,
        R`<b>3D films</b> project two images polarised at right angles; glasses with matching polaroids send one image to each eye.`,
        R`<b>LCD screens</b> (phones, calculators, monitors) use liquid crystals between crossed polaroids to switch each pixel on and off.`,
        R`<b>Photography:</b> polarising filters darken the sky and remove reflections from windows and water.`,
        R`<b>Stress analysis:</b> transparent models of structures viewed between crossed polaroids show coloured patterns where they are strained (photoelasticity).`,
        R`<b>Chemistry:</b> polarimeters measure the rotation of the plane of polarisation by sugar solutions (optical activity) to find concentrations.`
      ] },
      R`Polarisation is also the decisive evidence that light is a <b>transverse</b> wave: sound (longitudinal) cannot be polarised.`,
      { check: { q: R`Why are polaroid sunglasses better than ordinary tinted glasses for driving?`, ans: R`They selectively block the horizontally polarised glare reflected from the road, while tinted glasses dim all light equally.` } }
    ] }
  ],
  summary: [
    R`Reflection: i = r. Plane mirror: virtual, erect, same size; rotating it by θ turns the ray by 2θ.`,
    R`Spherical mirrors: f = R/2; \(\frac1v + \frac1u = \frac1f\), \(m = -v/u\) (Cartesian signs).`,
    R`Snell: \(n_1\sin i = n_2\sin r\), n = c/v; apparent depth = real depth/n; slab shift \(t(1 - 1/n)\).`,
    R`Spherical surface: \(\frac{n_2}v - \frac{n_1}u = \frac{n_2 - n_1}R\).`,
    R`TIR: dense to rare, i > C, sin C = 1/n. Fibres, diamond, mirage, prisms.`,
    R`Lens maker: \(\frac1f = (n - 1)(\frac1{R_1} - \frac1{R_2})\); thin lens \(\frac1v - \frac1u = \frac1f\), m = v/u.`,
    R`Power P = 1/f (D); in contact P = P₁ + P₂; separated \(\frac1F = \frac1{f_1} + \frac1{f_2} - \frac d{f_1f_2}\); silvered lens P = 2P_L + P_M.`,
    R`Prism: r₁ + r₂ = A, δ = i + e − A; \(n = \frac{\sin((A + \delta_m)/2)}{\sin(A/2)}\); thin prism δ = (n − 1)A; dispersive power \(\frac{n_v - n_r}{n_y - 1}\).`,
    R`Microscope \(m\approx\frac L{f_o}\frac D{f_e}\); simple magnifier \(1 + D/f\). Telescope \(m = f_o/f_e\), length \(f_o + f_e\).`,
    R`Huygens: secondary wavelets; derives reflection and refraction (light slower in denser media).`,
    R`Interference: \(I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\varphi\); coherent sources needed. YDSE: β = λD/d; bright at yd/D = nλ.`,
    R`Single slit: minima at a sin θ = nλ; central maximum width 2λD/a.`,
    R`Polarisation: Malus \(I = I_0\cos^2\theta\); unpolarised through a polaroid gives I₀/2. Brewster: \(\tan i_B = n\), reflected ⟂ refracted.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 3, §1.2 The Law of Reflection`, url: 'https://openstax.org/books/university-physics-volume-3/pages/1-2-the-law-of-reflection' },
    { t: R`OpenStax University Physics Vol. 3, §1.3 Refraction`, url: 'https://openstax.org/books/university-physics-volume-3/pages/1-3-refraction' },
    { t: R`OpenStax University Physics Vol. 3, §1.4 Total Internal Reflection`, url: 'https://openstax.org/books/university-physics-volume-3/pages/1-4-total-internal-reflection' },
    { t: R`OpenStax University Physics Vol. 3, §1.5 Dispersion`, url: 'https://openstax.org/books/university-physics-volume-3/pages/1-5-dispersion' },
    { t: R`OpenStax University Physics Vol. 3, §1.6 Huygens's Principle`, url: 'https://openstax.org/books/university-physics-volume-3/pages/1-6-huygenss-principle' },
    { t: R`OpenStax University Physics Vol. 3, §1.7 Polarization`, url: 'https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization' },
    { t: R`OpenStax University Physics Vol. 3, §2.2 Spherical Mirrors`, url: 'https://openstax.org/books/university-physics-volume-3/pages/2-2-spherical-mirrors' },
    { t: R`OpenStax University Physics Vol. 3, §2.4 Thin Lenses`, url: 'https://openstax.org/books/university-physics-volume-3/pages/2-4-thin-lenses' },
    { t: R`OpenStax University Physics Vol. 3, §2.8 Microscopes and Telescopes`, url: 'https://openstax.org/books/university-physics-volume-3/pages/2-8-microscopes-and-telescopes' },
    { t: R`OpenStax University Physics Vol. 3, §3.1 Young's Double-Slit Interference`, url: 'https://openstax.org/books/university-physics-volume-3/pages/3-1-youngs-double-slit-interference' },
    { t: R`OpenStax University Physics Vol. 3, §4.1 Single-Slit Diffraction`, url: 'https://openstax.org/books/university-physics-volume-3/pages/4-1-single-slit-diffraction' }
  ]
});
})();
