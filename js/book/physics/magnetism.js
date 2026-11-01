// Book chapter: Magnetic Effects of Current and Magnetism. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function dotOut(x, y, c) { return D.circle(x, y, 6, { color: c || 'b', w: 1.4 }) + D.dot(x, y, { color: c || 'b', r: 1.8 }); }
function cross(x, y, c) { return D.circle(x, y, 6, { color: c || 'b', w: 1.4 }) + D.line(x - 4, y - 4, x + 4, y + 4, { color: c || 'b', w: 1.4 }) + D.line(x - 4, y + 4, x + 4, y - 4, { color: c || 'b', w: 1.4 }); }
function fieldX(x0, y0, x1, y1, step, fn) { var p = []; for (var x = x0; x <= x1; x += step) for (var y = y0; y <= y1; y += step) p.push(fn(x, y)); return p.join(''); }

// ---------- figures ----------
var figBS = D.svg(400, 200, [
  D.line(60, 190, 60, 10, { color: 'k', w: 2.4 }), D.arrow(60, 120, 60, 80, { color: 'r', w: 3, head: 9, label: 'I dl', lx: -24, ly: 0, math: false }),
  D.line(60, 100, 290, 60, { color: 'm', w: 1.2, dash: '4 3' }), D.dot(290, 60, { r: 4 }), D.text(300, 50, 'P', { math: true }),
  D.text(180, 68, 'r', { math: true, color: 'm' }), D.angle(60, 100, 26, 10, 90, 'θ', { lr: 10 }),
  cross(290, 60, 'b'), D.text(320, 80, 'dB into the page', { size: 12, color: 'b', math: false, anchor: 'start' }),
  D.text(230, 160, 'dB = (μ₀/4π) I dl sin θ / r²', { size: 13, math: false })
], 'Biot-Savart law: field of a current element');

var figWireField = D.row([
  [D.svg(200, 200, [D.ellipse(100, 110, 80, 26, { color: 'b', w: 1.3 }), D.ellipse(100, 110, 50, 16, { color: 'b', w: 1.3 }), D.ellipse(100, 110, 24, 8, { color: 'b', w: 1.3 }),
    D.arrow(168, 124, 176, 118, { color: 'b', w: 0.01, head: 8 }), D.arrow(140, 121, 146, 116, { color: 'b', w: 0.01, head: 7 }),
    D.line(100, 190, 100, 12, { color: 'k', w: 2.4 }), D.arrow(100, 60, 100, 25, { color: 'r', w: 2.6, label: 'I', lx: 12, ly: 0 })], 'field lines round a straight wire'), 'circles round the wire'],
  [D.svg(200, 200, [D.circle(100, 100, 30, { color: 'b', w: 1.3 }), D.circle(100, 100, 60, { color: 'b', w: 1.3 }), D.circle(100, 100, 88, { color: 'b', w: 1.3 }),
    D.arrow(130, 98, 130, 92, { color: 'b', w: 0.01, head: 7 }), D.arrow(160, 104, 160, 96, { color: 'b', w: 0.01, head: 7 }), D.arrow(188, 104, 188, 96, { color: 'b', w: 0.01, head: 7 }),
    dotOut(100, 100, 'r'), D.text(116, 116, 'I (out)', { size: 11, color: 'r', anchor: 'start', math: false })], 'top view of the field of a wire'), 'seen from above: anticlockwise']
]);

var figFinite = D.svg(380, 220, [
  D.line(80, 20, 80, 200, { color: 'k', w: 2.4 }), D.arrow(80, 140, 80, 100, { color: 'r', w: 2.6, label: 'I', lx: -12, ly: 0 }),
  D.dot(300, 110, { r: 4 }), D.text(310, 104, 'P', { math: true }), D.line(80, 110, 300, 110, { color: 'm', w: 1.2, dash: '4 3' }), D.text(190, 124, 'd', { math: true, color: 'm' }),
  D.line(300, 110, 80, 30, { color: 'g', w: 1.2 }), D.line(300, 110, 80, 190, { color: 'g', w: 1.2 }),
  D.angle(300, 110, 46, 180, 160, 'α', { lr: 12, color: 'g' }), D.angle(300, 110, 46, 200, 180, 'β', { lr: 12, color: 'g' }),
  D.text(60, 30, 'end 1', { size: 11, color: 'm', anchor: 'end', math: false }), D.text(60, 190, 'end 2', { size: 11, color: 'm', anchor: 'end', math: false })
], 'Field of a finite straight wire');

var figLoop = D.svg(420, 220, [
  D.ellipse(90, 110, 26, 78, { color: 'o', w: 2.4 }), D.arrow(70, 52, 78, 40, { color: 'o', w: 0.01, head: 9 }), D.text(56, 30, 'I', { math: true, color: 'o' }),
  D.line(20, 110, 400, 110, { color: 'm', w: 1, dash: '4 3' }), D.dot(300, 110, { r: 4 }), D.text(300, 128, 'P', { math: true }),
  D.arrow(304, 110, 370, 110, { color: 'b', w: 2.4, label: 'B', ly: -12 }),
  D.arrow(90, 118, 90, 186, { color: 'm', w: 1.1, head: 6 }), D.text(102, 155, 'R', { math: true, color: 'm' }),
  D.arrow(90, 205, 300, 205, { color: 'm', w: 1.1, head: 6, both: true, label: 'x', ly: -9 }),
  D.text(240, 40, 'B = μ₀IR² / 2(R² + x²)^{3/2}', { size: 13, math: false })
], 'Field on the axis of a circular loop');

var figLoopGraph = D.plot({
  w: 400, h: 190, x: [-3.2, 3.2], y: [0, 1.25], xlabel: 'x', ylabel: 'B', xticks: [[-1, '−R'], [1, 'R']], yticks: [], noOrigin: true,
  fns: [{ f: function (x) { return Math.pow(1 + x * x, -1.5); }, color: 'b' }], texts: [{ x: 0.3, y: 1.1, s: 'μ₀I/2R at the centre', size: 12, color: 'b', anchor: 'start' }],
  label: 'Field along the axis of a loop'
});

var figAmpere = D.plot({
  w: 400, h: 200, x: [0, 4.2], y: [0, 1.25], xlabel: 'r', ylabel: 'B', xticks: [[1, 'a']], yticks: [],
  fns: [{ f: function (r) { return r; }, from: 0, to: 1, color: 'b', label: 'B ∝ r inside', lx: 0.42, ly: 0.22, math: false }, { f: function (r) { return 1 / r; }, from: 1, to: 4.2, color: 'b', label: 'B = μ₀I/2πr', lx: 1.8, ly: 0.75, math: false }],
  segs: [{ x1: 1, y1: 0, x2: 1, y2: 1, color: 'm', dash: '3 3', w: 1 }],
  label: 'Field inside and outside a thick wire of radius a carrying uniform current'
});

var figSolenoid = (function () {
  var p = [];
  for (var x = 80; x <= 320; x += 20) { p.push(cross(x, 50, 'o'), dotOut(x, 150, 'o')); }
  [75, 125].forEach(function (y) { p.push(D.arrow(60, y, 345, y, { color: 'b', w: 1.6, head: 8 })); });
  p.push(D.path('M345 75 C 400 40, 400 10, 200 10 C 10 10, 0 40, 60 75', { color: 'b', w: 1.1, dash: '4 3' }));
  p.push(D.path('M345 125 C 400 160, 400 192, 200 192 C 10 192, 0 160, 60 125', { color: 'b', w: 1.1, dash: '4 3' }));
  p.push(D.text(200, 100, 'B = μ₀nI (uniform)', { size: 13, color: 'b', bold: true, math: false }));
  return D.svg(400, 200, p, 'Field of a long solenoid (cross-section)');
})();

var figLorentz = D.svg(360, 210, [
  D.arrow(120, 140, 290, 140, { color: 'g', w: 2.2, label: 'v', ly: -12 }), D.arrow(120, 140, 50, 190, { color: 'b', w: 2.2, label: 'B', at: 'end', lx: -10, ly: 0 }),
  D.arrow(120, 140, 120, 30, { color: 'r', w: 2.6, label: 'F = qv × B', at: 'end', lx: 0, ly: -12, math: false, size: 13 }),
  D.dot(120, 140, { color: 'o', r: 6 }), D.text(108, 126, '+q', { size: 13, color: 'o', math: false, anchor: 'end' }),
  D.angle(120, 140, 30, -144.5, 0, 'θ', { lr: 12 }),
  D.text(270, 70, 'F ⟂ v and F ⟂ B', { size: 12, color: 'm', math: false })
], 'Magnetic Lorentz force on a moving positive charge');

var figCircle = D.row([
  [D.svg(200, 200, [fieldX(20, 20, 180, 180, 32, function (x, y) { return cross(x, y, 'm'); }),
    D.circle(100, 100, 58, { color: 'o', w: 2 }), D.dot(158, 100, { color: 'o', r: 6 }), D.arrow(158, 100, 158, 52, { color: 'g', w: 2, head: 7, label: 'v', lx: 10, ly: 0 }), D.arrow(158, 100, 118, 100, { color: 'r', w: 2, head: 7, label: 'F', ly: -10 }),
    D.line(100, 100, 158, 100, { color: 'm', w: 1, dash: '3 3' })], 'circular path in a field into the page'), 'v ⟂ B: circle, r = mv/qB'],
  [D.svg(200, 200, [D.arrow(10, 100, 195, 100, { color: 'b', w: 1.4, head: 8, label: 'B', at: 'end', lx: -6, ly: -12 }),
    D.path((function () { var d = '', k; for (k = 0; k <= 300; k++) { var t = k / 300 * 6 * Math.PI, x = 20 + 25 * t / Math.PI, y = 100 - 38 * Math.sin(t), z = Math.cos(t); d += (k ? ' L' : 'M') + x.toFixed(1) + ' ' + (y + 10 * z).toFixed(1); } return d; })(), { color: 'o', w: 2 }),
    D.arrow(70, 172, 120, 172, { color: 'm', w: 1, head: 6, both: true, label: 'pitch', ly: 12, math: false, size: 11 })], 'helical path'), 'v at an angle: helix']
]);

var figSelector = (function () {
  var p = [D.line(40, 40, 360, 40, { color: 'r', w: 3 }), D.line(40, 160, 360, 160, { color: 'b', w: 3 }), D.text(30, 40, '+', { color: 'r', bold: true, raw: true, size: 16 }), D.text(30, 160, '−', { color: 'b', bold: true, raw: true, size: 16 })];
  p.push(fieldX(80, 62, 330, 140, 76, function (x, y) { return cross(x, y, 'm'); }));
  p.push(D.arrow(10, 100, 70, 100, { color: 'g', w: 2.2, label: 'v', ly: -12 }), D.line(70, 100, 380, 100, { color: 'o', w: 1.6, dash: '6 4' }), D.dot(200, 100, { color: 'o', r: 6 }));
  p.push(D.arrow(200, 100, 200, 132, { color: 'r', w: 2, head: 7, label: 'qE', lx: 20, ly: 0 }), D.arrow(200, 100, 200, 68, { color: 'b', w: 2, head: 7, label: 'qvB', lx: 24, ly: 0 }));
  p.push(D.text(200, 186, 'E down, B into page: undeflected only if v = E/B', { size: 12, color: 'm', math: false }));
  return D.svg(400, 200, p, 'Velocity selector: crossed electric and magnetic fields');
})();

var figConductor = D.svg(360, 180, [
  fieldX(30, 30, 330, 150, 40, function (x, y) { return cross(x, y, 'm'); }),
  D.line(40, 90, 320, 90, { color: 'o', w: 4 }), D.arrow(120, 90, 200, 90, { color: 'r', w: 2.6, head: 9, label: 'I', lx: 10, ly: -10 }),
  D.arrow(260, 90, 260, 30, { color: 'g', w: 2.6, head: 9, label: 'F = I l × B', lx: 50, ly: -12, at: 'end', math: false, size: 12 }),
  D.text(320, 168, 'B into the page', { size: 11, color: 'm', math: false, anchor: 'end' })
], 'Force on a current-carrying wire in a magnetic field');

var figParallel = D.svg(380, 200, [
  D.line(120, 20, 120, 185, { color: 'k', w: 2.4 }), D.line(260, 20, 260, 185, { color: 'k', w: 2.4 }),
  D.arrow(120, 120, 120, 70, { color: 'r', w: 2.6, label: 'I₁', lx: -14, ly: 0, math: false }), D.arrow(260, 120, 260, 70, { color: 'r', w: 2.6, label: 'I₂', lx: 16, ly: 0, math: false }),
  D.arrow(124, 150, 168, 150, { color: 'g', w: 2.2, head: 8, label: 'F', ly: -12 }), D.arrow(256, 150, 212, 150, { color: 'g', w: 2.2, head: 8, label: 'F', ly: -12 }),
  D.arrow(120, 30, 260, 30, { color: 'm', w: 1, head: 6, both: true, label: 'd', ly: -8 }),
  cross(190, 100, 'b'), D.text(190, 82, 'B₁ at wire 2', { size: 11, color: 'b', math: false })
], 'Parallel currents in the same direction attract');

var figLoopTorque = D.svg(380, 220, [
  D.arrow(20, 30, 360, 30, { color: 'b', w: 1.1, head: 7 }), D.arrow(20, 200, 360, 200, { color: 'b', w: 1.1, head: 7 }), D.text(350, 16, 'B', { math: true, color: 'b' }),
  D.poly([[130, 60], [250, 60], [250, 170], [130, 170]], { closed: true, color: 'o', w: 2.4 }),
  D.arrow(130, 130, 130, 90, { color: 'o', w: 0.01, head: 9 }), D.arrow(250, 100, 250, 140, { color: 'o', w: 0.01, head: 9 }), D.text(118, 110, 'I', { math: true, color: 'o', anchor: 'end' }),
  cross(130, 115, 'r'), D.text(110, 140, 'F', { math: true, color: 'r', anchor: 'end' }), dotOut(250, 115, 'r'), D.text(268, 140, 'F', { math: true, color: 'r', anchor: 'start' }),
  D.line(190, 50, 190, 182, { color: 'm', w: 1, dash: '4 3' }), D.text(190, 192, 'axis', { size: 11, color: 'm', math: false }),
  D.text(300, 115, 'τ = NIAB sin θ', { size: 13, color: 'g', math: true, anchor: 'start' })
], 'Torque on a rectangular coil in a uniform field');

var figGalvo = D.svg(360, 210, [
  D.path('M40 40 L110 40 L110 70 A 46 46 0 0 0 110 140 L110 170 L40 170 Z', { color: 'r', fill: 'soft', w: 2 }), D.text(70, 105, 'N', { size: 18, bold: true, color: 'r', math: false }),
  D.path('M320 40 L250 40 L250 70 A 46 46 0 0 1 250 140 L250 170 L320 170 Z', { color: 'b', fill: 'soft', w: 2 }), D.text(290, 105, 'S', { size: 18, bold: true, color: 'b', math: false }),
  D.circle(180, 105, 26, { color: 'm', fill: 'soft', w: 1.4 }), D.text(180, 105, 'iron', { size: 10, color: 'm', math: false }),
  D.rect(144, 66, 72, 78, { color: 'o', w: 2.2, r: 4 }),
  [52, 80, 105, 130, 158].map(function (a, i) { var t = (i - 2) * 0.32; return D.arrow(118 + 0 * a, 105 + 60 * Math.sin(t) * 0.7, 140, 105 + 40 * Math.sin(t) * 0.65, { color: 'g', w: 1, head: 5 }); }).join(''),
  [0, 1, 2, 3, 4].map(function (i) { var t = (i - 2) * 0.32; return D.arrow(220, 105 + 40 * Math.sin(t) * 0.65, 242, 105 + 60 * Math.sin(t) * 0.7, { color: 'g', w: 1, head: 5 }); }).join(''),
  D.text(180, 196, 'radial field: B always in the plane of the coil', { size: 11, color: 'g', math: false }), D.text(180, 54, 'coil', { size: 11, color: 'o', math: false })
], 'Moving-coil galvanometer: coil between concave pole pieces round a soft-iron core');

var figMeters = D.row([
  [D.svg(220, 130, [D.line(10, 50, 50, 50, { w: 1.8 }), D.meter(50, 50, 170, 50, { s: 'G' }), D.line(170, 50, 210, 50, { w: 1.8 }), D.line(50, 50, 50, 100, { w: 1.8 }), D.line(170, 50, 170, 100, { w: 1.8 }),
    D.res(50, 100, 170, 100, { label: 'S (small shunt)', math: false, ly: 18, size: 11 }), D.dot(50, 50, { r: 3 }), D.dot(170, 50, { r: 3 }), D.text(110, 26, 'I_g', { size: 12, color: 'r' })], 'ammeter: galvanometer with a shunt'), 'ammeter: small shunt in parallel'],
  [D.svg(220, 130, [D.line(10, 60, 40, 60, { w: 1.8 }), D.meter(40, 60, 110, 60, { s: 'G' }), D.res(110, 60, 200, 60, { label: 'R (large)', math: false, size: 11 }), D.line(200, 60, 215, 60, { w: 1.8 })], 'voltmeter: galvanometer with a series resistor'), 'voltmeter: large resistance in series']
]);

var figBarMagnet = D.svg(420, 240, [
  D.field({ charges: [{ x: 290, y: 120, q: 1, r: 1 }, { x: 130, y: 120, q: -1, r: 1 }], n: 16, box: [2, 2, 418, 238], color: 'b', r0: 6, arrows: [0.3, 0.75] }).replace(/<circle[^>]*\/><text[^<]*<\/text>/g, ''),
  D.rect(120, 105, 180, 30, { color: 'k', fill: 'bg', w: 1.8, r: 3 }), D.rect(210, 105, 90, 30, { color: 'r', fill: 'soft', w: 0.01 }), D.rect(120, 105, 90, 30, { color: 'b', fill: 'soft', w: 0.01 }),
  D.text(280, 121, 'N', { size: 15, bold: true, color: 'r', math: false }), D.text(140, 121, 'S', { size: 15, bold: true, color: 'b', math: false }),
  D.arrow(165, 120, 255, 120, { color: 'b', w: 1.2, head: 7 })
], 'Field lines of a bar magnet');

var figHyst = D.plot({
  w: 380, h: 240, x: [-3, 3], y: [-1.4, 1.5], xlabel: 'H', ylabel: 'B', xticks: [], yticks: [], noOrigin: true,
  fns: [{ f: function (h) { return Math.tanh(1.6 * (h + 0.7)); }, from: -3, to: 3, color: 'r', w: 2.2 }, { f: function (h) { return Math.tanh(1.6 * (h - 0.7)); }, from: -3, to: 3, color: 'r', w: 2.2 }],
  pts: [{ x: 0, y: Math.tanh(1.12), label: 'retentivity', pos: 'nw', math: false, size: 11 }, { x: -0.7, y: 0, label: 'coercivity', pos: 'sw', math: false, size: 11 }],
  texts: [{ x: 2.4, y: 1.2, s: 'saturation', size: 11, color: 'm' }],
  label: 'Hysteresis loop of a ferromagnet'
});

// ---------- chapter text ----------
JEE.book('physics', 'magnetism', {
  intro: [
    R`In 1820, Hans Christian Oersted noticed that a compass needle swung when a current flowed in a nearby wire. Electric currents produce magnetic fields. This discovery linked electricity and magnetism into one subject, and led to motors, loudspeakers, MRI scanners and particle accelerators.`,
    R`This chapter finds the magnetic field of currents (Biot–Savart and Ampère's laws), the force on moving charges and currents in a magnetic field (the Lorentz force), the torque on a current loop and its use in the galvanometer, the current loop as a magnetic dipole, and finally bar magnets and magnetic materials.`
  ],
  sections: [
    { h: R`Magnetic field and the Biot–Savart law`, t: [0], blocks: [
      R`A magnetic field \(\vec B\) exists around magnets and around moving charges and currents. Its SI unit is the <b>tesla</b> (T); a smaller unit is the gauss (1 G = 10⁻⁴ T). The Earth's field is about 5 × 10⁻⁵ T; a strong lab magnet gives about 1 T.`,
      R`<b>Biot–Savart law:</b> a small element dl of a wire carrying current I produces, at a point at distance r, a field \[d\vec B = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec l\times\hat r}{r^2},\qquad dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl\sin\theta}{r^2}\] where θ is the angle between dl and r, and \(\mu_0 = 4\pi\times10^{-7}\) T m/A is the <b>permeability of free space</b>.`,
      { fig: figBS, cap: R`The field of a current element is perpendicular to both dl and r: here into the page at P.` },
      { points: [R`Like Coulomb's law, it is an inverse-square law; unlike it, the field is perpendicular to the source direction.`, R`dB = 0 along the line of the current element (θ = 0).`, R`<b>Right-hand thumb rule:</b> grip the wire with your right hand, thumb along the current; your fingers curl in the direction of the field lines.`] },
      R`In diagrams, ⊙ means a field (or current) coming out of the page towards you, and ⊗ means going into the page.`,
      { check: { q: R`What is the magnetic field at a point on the line of a straight current, beyond its end?`, ans: R`Zero: every element has θ = 0 or 180°, so sin θ = 0.` } }
    ] },

    { h: R`Field due to a straight current-carrying wire`, t: [0, 1], blocks: [
      { fig: figFinite, cap: R`A point P at perpendicular distance d from a straight wire; the ends subtend angles α and β at P.` },
      { derive: R`Field of a finite straight wire`, steps: [
        R`Integrating Biot–Savart along the wire (with the substitution \(l = d\tan\phi\)) gives \[B = \frac{\mu_0I}{4\pi d}(\sin\alpha + \sin\beta)\] where α and β are the angles the two ends make with the perpendicular from P.`,
        R`For an <b>infinitely long</b> wire, α = β = 90°: \[B = \frac{\mu_0I}{2\pi d}\]`,
        R`At a point opposite one end of a semi-infinite wire, α = 90°, β = 0: \(B = \dfrac{\mu_0I}{4\pi d}\), half the infinite-wire value.`
      ] },
      { fig: figWireField, cap: R`Field lines round a long straight wire are concentric circles. Seen from the end with the current coming out of the page, they go anticlockwise.` },
      { ex: { q: R`A long straight wire carries 10 A. Find the field 5 cm from it.`,
        steps: [R`\(B = \dfrac{\mu_0I}{2\pi d} = \dfrac{2\times10^{-7}\times10}{0.05}\).`], ans: R`4 × 10⁻⁵ T (about the Earth's field)` } },
      { ex: { q: R`A current I flows round a square of side a. Find the field at its centre.`,
        steps: [R`Each side is at distance a/2 and subtends 45° on each side: \(B_1 = \dfrac{\mu_0I}{4\pi(a/2)}(2\sin45°) = \dfrac{\sqrt2\mu_0I}{2\pi a}\).`, R`All four sides give fields in the same direction.`], ans: R`\(B = \dfrac{2\sqrt2\mu_0I}{\pi a}\)` } },
      { check: { q: R`How does the field of a long wire change if the distance is tripled?`, ans: R`It falls to one-third (B ∝ 1/d).` } }
    ] },

    { h: R`Field on the axis of a circular current loop`, t: [0], blocks: [
      { fig: figLoop, cap: R`A circular loop of radius R carrying current I; P is on its axis at distance x from the centre.` },
      { derive: R`Field on the axis of a loop`, steps: [
        R`Every element dl is perpendicular to the line joining it to P (distance \(\sqrt{R^2 + x^2}\)), so \(dB = \dfrac{\mu_0}{4\pi}\dfrac{I\,dl}{R^2 + x^2}\).`,
        R`The components perpendicular to the axis cancel in pairs; the axial components, \(dB\dfrac{R}{\sqrt{R^2 + x^2}}\), add.`,
        R`Summing round the loop (\(\sum dl = 2\pi R\)): \[B = \frac{\mu_0IR^2}{2(R^2 + x^2)^{3/2}}\] For N turns, multiply by N.`
      ] },
      { points: [R`At the centre (x = 0): \(B = \dfrac{\mu_0I}{2R}\) (N turns: \(\dfrac{\mu_0NI}{2R}\)).`, R`Far away (x ≫ R): \(B = \dfrac{\mu_0IR^2}{2x^3} = \dfrac{\mu_0}{4\pi}\dfrac{2m}{x^3}\) with \(m = I\pi R^2\): a magnetic dipole field.`, R`An arc subtending angle θ (radians) at its centre gives \(B = \dfrac{\mu_0I\theta}{4\pi R}\); a semicircle gives \(\dfrac{\mu_0I}{4R}\).`, R`Direction: curl the fingers of the right hand along the current; the thumb points along B.`] },
      { fig: figLoopGraph, cap: R`The field is largest at the centre of the loop and falls off on either side.` },
      { ex: { q: R`A coil of 50 turns, radius 10 cm, carries 2 A. Find the field at its centre.`,
        steps: [R`\(B = \dfrac{\mu_0NI}{2R} = \dfrac{4\pi\times10^{-7}\times50\times2}{0.2}\).`], ans: R`≈ 6.3 × 10⁻⁴ T` } },
      { check: { q: R`A wire bent into a semicircle of radius R carries current I, with long straight leads along the diameter line. What is the field at the centre from the straight parts?`, ans: R`Zero: the centre lies on the line of the straight parts.` } }
    ] },

    { h: R`Ampère's circuital law`, t: [1], blocks: [
      R`<b>Ampère's circuital law:</b> the line integral of B round any closed loop equals μ₀ times the net current threading the loop: \[\oint\vec B\cdot d\vec l = \mu_0I_{enc}\] The loop is an imaginary "Amperian loop". Currents are counted positive if they point along the thumb when the fingers of the right hand curl in the direction you go round the loop.`,
      R`Like Gauss's law in electrostatics, Ampère's law is always true, but it is useful for finding B only when symmetry makes B constant along the loop.`,
      { derive: R`Long straight wire from Ampère's law`, steps: [
        R`By symmetry, B is the same at every point of a circle of radius r centred on the wire, and is tangent to it.`,
        R`\(\oint B\,dl = B\cdot2\pi r = \mu_0I\), so \(B = \dfrac{\mu_0I}{2\pi r}\), matching Biot–Savart.`
      ] },
      { adv: R`<b>Inside a thick wire</b> of radius a with uniform current I, an Amperian circle of radius r < a encloses \(I r^2/a^2\), so \(B = \dfrac{\mu_0Ir}{2\pi a^2}\): it grows linearly from zero at the axis to its maximum at the surface. Inside a hollow pipe carrying current along its wall, B = 0.` },
      { fig: figAmpere, cap: R`Field of a thick wire: increasing linearly inside, falling as 1/r outside.` },
      { check: { q: R`An Amperian loop encloses two wires carrying 3 A up and 5 A down. What is ∮B·dl?`, ans: R`\(\mu_0\times(3 - 5) = -2\mu_0\) (taking up as positive).` } }
    ] },

    { h: R`Solenoid and toroid`, t: [1], blocks: [
      R`A <b>solenoid</b> is a long coil of wire wound as a helix. Inside a long solenoid, the field of all the turns adds up to a strong, uniform field along the axis; outside it is nearly zero.`,
      { fig: figSolenoid, cap: R`Cross-section of a long solenoid: current goes into the page at the top (⊗) and comes out at the bottom (⊙). Inside, the field is uniform and along the axis.` },
      { derive: R`Field inside a long solenoid`, steps: [
        R`Take a rectangular Amperian loop with one side of length l inside (along the axis) and one outside.`,
        R`Only the inside side contributes: \(\oint\vec B\cdot d\vec l = Bl\). The loop encloses nl turns (n = turns per unit length), each carrying I.`,
        R`\(Bl = \mu_0nlI\), so \[B = \mu_0nI\] independent of position inside. At the ends the field is half this: \(\frac12\mu_0nI\).`
      ] },
      R`A <b>toroid</b> is a solenoid bent into a ring. Inside its core, \(B = \dfrac{\mu_0NI}{2\pi r}\) (N total turns, r the radius of the circle); outside, and in the empty space in the middle, B = 0.`,
      { ex: { q: R`A solenoid has 1000 turns per metre and carries 2 A. Find the field inside.`,
        steps: [R`\(B = 4\pi\times10^{-7}\times1000\times2\).`], ans: R`≈ 2.5 × 10⁻³ T` } },
      { tip: R`A solenoid behaves like a bar magnet: the end where the current looks anticlockwise is the north pole.` },
      { check: { q: R`If the length of a solenoid is doubled with the same number of turns and current, what happens to B inside?`, ans: R`It halves (n halves).` } }
    ] },

    { h: R`Force on a moving charge: the Lorentz force`, t: [2], blocks: [
      R`A charge q moving with velocity \(\vec v\) through electric and magnetic fields feels the <b>Lorentz force</b>: \[\vec F = q(\vec E + \vec v\times\vec B)\] The magnetic part has magnitude \(qvB\sin\theta\) and is perpendicular to both \(\vec v\) and \(\vec B\). This actually <b>defines</b> B: 1 T is the field in which a 1 C charge moving at 1 m/s perpendicular to it feels a force of 1 N.`,
      { fig: figLorentz, cap: R`The magnetic force is perpendicular to the plane containing v and B (right-hand rule: fingers from v to B, thumb gives F for a positive charge).` },
      { points: [R`The magnetic force is zero if the charge is at rest or moves parallel to B.`, R`Since F ⟂ v, the magnetic force does <b>no work</b>: it can change the direction of motion but never the speed or kinetic energy.`, R`For a negative charge, the force is opposite.`] },
      { ex: { q: R`A proton moves at 2 × 10⁶ m/s at 30° to a field of 0.5 T. Find the force on it.`,
        steps: [R`\(F = qvB\sin30° = 1.6\times10^{-19}\times2\times10^6\times0.5\times0.5\).`], ans: R`8 × 10⁻¹⁴ N` } },
      { check: { q: R`Can a static magnetic field speed up a charged particle?`, ans: R`No: the magnetic force is always perpendicular to the velocity, so it does no work.` } }
    ] },

    { h: R`Motion of a charge in a uniform magnetic field`, t: [2], blocks: [
      { derive: R`Circular motion`, steps: [
        R`If v ⟂ B, the force qvB is always perpendicular to v and of constant size, so it provides the centripetal force: \(qvB = \dfrac{mv^2}{r}\).`,
        R`\[r = \frac{mv}{qB} = \frac{p}{qB} = \frac{\sqrt{2mK}}{qB}\]`,
        R`Period \(T = \dfrac{2\pi r}{v} = \dfrac{2\pi m}{qB}\) and frequency \(\nu = \dfrac{qB}{2\pi m}\) (the <b>cyclotron frequency</b>), both independent of the speed.`
      ] },
      { fig: figCircle, cap: R`Left: a charge moving perpendicular to B goes round a circle. Right: with a velocity component along B as well, it follows a helix.` },
      R`If v makes an angle θ with B, the component \(v\cos\theta\) along B is unaffected, while \(v\sin\theta\) produces circular motion. The path is a <b>helix</b> of radius \(\dfrac{mv\sin\theta}{qB}\) and <b>pitch</b> (distance moved along B in one revolution) \(p = v\cos\theta\cdot\dfrac{2\pi m}{qB}\). Charged particles from the Sun spiral along the Earth's field lines towards the poles, causing the aurora.`,
      { ex: { q: R`An electron moves at 10⁶ m/s perpendicular to a field of 10⁻³ T. Find the radius and period of its orbit.`,
        steps: [R`\(r = \dfrac{mv}{eB} = \dfrac{9.1\times10^{-31}\times10^6}{1.6\times10^{-19}\times10^{-3}}\).`, R`\(T = \dfrac{2\pi m}{eB}\).`], ans: R`r ≈ 5.7 mm; T ≈ 3.6 × 10⁻⁸ s` } },
      { ex: { q: R`A proton and an alpha particle enter the same field with the same kinetic energy. Compare their radii.`,
        steps: [R`\(r = \sqrt{2mK}/qB\propto\sqrt m/q\).`, R`Alpha: mass 4m, charge 2e: \(\sqrt4/2 = 1\).`], ans: R`Equal radii` } },
      { check: { q: R`Doubling the speed of a charge in a uniform field does what to its period?`, ans: R`Nothing: the radius doubles but the period stays the same.` } }
    ] },

    { h: R`Charges in combined electric and magnetic fields`, t: [2], blocks: [
      R`When E and B are perpendicular to each other and to the velocity, the electric and magnetic forces can be made to cancel. A particle passes straight through only if \(qE = qvB\): \[v = \frac EB\] This arrangement, a <b>velocity selector</b>, lets through only particles of one speed, whatever their mass or charge. J. J. Thomson used it in 1897 to measure e/m of the electron.`,
      { fig: figSelector, cap: R`In crossed fields, the electric force qE and the magnetic force qvB balance for one speed only.` },
      { ex: { q: R`Crossed fields of E = 10⁴ V/m and B = 0.02 T are used as a velocity selector. What speed passes undeflected?`,
        steps: [R`v = E/B = 10⁴/0.02.`], ans: R`5 × 10⁵ m/s` } },
      { adv: R`<b>Cyclotron.</b> Ions spiral outward between two hollow D-shaped electrodes in a uniform B, getting a kick from an alternating voltage each time they cross the gap. This works because the cyclotron frequency \(\nu = qB/2\pi m\) does not depend on speed. The maximum kinetic energy, at the outer radius R, is \(K = \dfrac{q^2B^2R^2}{2m}\). For protons with B = 1 T and R = 0.5 m: ν ≈ 15 MHz and K ≈ 12 MeV.` },
      { check: { q: R`In a velocity selector, a slightly faster particle is deflected towards which force?`, ans: R`Towards the magnetic force direction (qvB grows with v while qE stays fixed).` } }
    ] },

    { h: R`Force on a current-carrying conductor`, t: [3], blocks: [
      R`A current in a wire is a stream of moving charges, so a wire in a magnetic field feels a force.`,
      { derive: R`Force on a straight wire`, steps: [
        R`A length l of wire with cross-section A contains nAl free charges, each with drift velocity \(\vec v_d\).`,
        R`Total force \(= nAl\,q\,\vec v_d\times\vec B\). Since \(I = nAqv_d\): \[\vec F = I\,\vec l\times\vec B,\qquad F = IlB\sin\theta\] where \(\vec l\) points along the current.`
      ] },
      { fig: figConductor, cap: R`A wire carrying current to the right in a field into the page is pushed upward (Fleming's left-hand rule).` },
      R`<b>Fleming's left-hand rule:</b> stretch the thumb, first and second fingers of the left hand at right angles. With the <b>F</b>irst finger along the <b>F</b>ield and the se<b>C</b>ond finger along the <b>C</b>urrent, the thu<b>M</b>b gives the <b>M</b>otion (force). For a curved wire in a uniform field, the force is the same as for a straight wire joining its ends.`,
      { ex: { q: R`A 0.5 m wire carrying 3 A lies at 30° to a uniform field of 0.4 T. Find the force on it.`,
        steps: [R`\(F = IlB\sin\theta = 3\times0.5\times0.4\times0.5\).`], ans: R`0.3 N` } },
      { check: { q: R`What is the net force on a closed current loop of any shape in a uniform magnetic field?`, ans: R`Zero (though there may be a torque).` } }
    ] },

    { h: R`Force between two parallel currents`, t: [4], blocks: [
      R`Each of two parallel wires sits in the magnetic field of the other, so they exert forces on each other.`,
      { fig: figParallel, cap: R`The field of wire 1 at wire 2 points into the page; the force on wire 2 then points towards wire 1. Like currents attract.` },
      { derive: R`Force per unit length`, steps: [
        R`Wire 1 produces \(B_1 = \dfrac{\mu_0I_1}{2\pi d}\) at wire 2, perpendicular to it.`,
        R`Force on length l of wire 2: \(F = I_2lB_1\), so \[\frac Fl = \frac{\mu_0I_1I_2}{2\pi d}\]`,
        R`Currents in the <b>same</b> direction attract; currents in <b>opposite</b> directions repel. (The opposite of the rule for charges!)`
      ] },
      R`<b>Definition of the ampere</b> (used until 2019): one ampere is the current which, flowing in two infinitely long parallel wires 1 m apart in vacuum, produces a force of exactly \(2\times10^{-7}\) N per metre of length. Since 2019, the ampere is defined by fixing the elementary charge e = 1.602176634 × 10⁻¹⁹ C exactly.`,
      { ex: { q: R`Two long parallel wires 10 cm apart carry 10 A each in the same direction. Find the force per metre.`,
        steps: [R`\(\dfrac Fl = \dfrac{2\times10^{-7}\times10\times10}{0.1}\).`], ans: R`2 × 10⁻⁴ N/m, attractive` } },
      { check: { q: R`Do the turns of a solenoid carrying current attract or repel each other?`, ans: R`They attract (neighbouring turns carry current in the same direction), so a solenoid tends to shorten.` } }
    ] },

    { h: R`Torque on a current loop`, t: [5], blocks: [
      R`A rectangular coil of N turns, area A, carrying current I in a uniform field B feels no net force, but the forces on its two sides form a couple.`,
      { fig: figLoopTorque, cap: R`The forces on the two sides perpendicular to B are equal and opposite but not in line, so they turn the coil.` },
      { derive: R`Torque on a coil`, steps: [
        R`Sides of length a (perpendicular to B) each feel \(F = NIaB\). They are a distance \(b\sin\theta\) apart (θ = angle between B and the normal to the coil).`,
        R`Torque \(\tau = NIaB\cdot b\sin\theta = NIAB\sin\theta\).`,
        R`With the <b>magnetic moment</b> \(\vec m = NI\vec A\) (along the normal, by the right-hand rule): \[\vec\tau = \vec m\times\vec B\]`
      ] },
      R`The torque is maximum (NIAB) when the plane of the coil is parallel to B, and zero when the coil faces the field. This torque is what turns an electric motor.`,
      { ex: { q: R`A square coil of 100 turns, side 10 cm, carries 0.5 A with its plane parallel to a field of 0.2 T. Find the torque.`,
        steps: [R`\(\tau = NIAB = 100\times0.5\times0.01\times0.2\).`], ans: R`0.1 N m` } },
      { check: { q: R`In what position does a current loop rest in stable equilibrium in a magnetic field?`, ans: R`With its magnetic moment parallel to B (plane perpendicular to B).` } }
    ] },

    { h: R`Moving-coil galvanometer`, t: [6], blocks: [
      R`A <b>galvanometer</b> detects and measures small currents. A coil of N turns, area A, hangs between the concave poles of a permanent magnet, around a fixed soft-iron cylinder. The curved poles and the iron core make the field <b>radial</b>: the plane of the coil is always parallel to B, so the torque is always NIAB, whatever the angle.`,
      { fig: figGalvo, cap: R`Moving-coil galvanometer: the radial field makes the torque independent of the coil's angle, so the scale is linear.` },
      R`A spring (or suspension fibre) supplies a restoring torque kφ, where φ is the deflection. At equilibrium \(NIAB = k\phi\), so \[\phi = \frac{NAB}{k}I\] The deflection is proportional to the current: the scale is linear.`,
      { points: [R`<b>Current sensitivity:</b> deflection per unit current, \(\dfrac\phi I = \dfrac{NAB}{k}\).`, R`<b>Voltage sensitivity:</b> deflection per unit voltage, \(\dfrac\phi V = \dfrac{NAB}{kG}\), where G is the galvanometer's resistance.`, R`Increasing N raises current sensitivity, but also raises G, so voltage sensitivity need not increase.`] },
      { check: { q: R`Why is a soft-iron core placed inside the coil?`, ans: R`It concentrates the field (making it stronger) and makes it radial, so the torque does not depend on the coil's angle.` } }
    ] },

    { h: R`Conversion into an ammeter and a voltmeter`, t: [6], blocks: [
      R`A galvanometer gives full-scale deflection for a tiny current \(I_g\) (often a few mA or μA). We adapt it to measure larger currents or voltages:`,
      { fig: figMeters, cap: R`An ammeter is a galvanometer with a low-resistance shunt in parallel; a voltmeter is a galvanometer with a high resistance in series.` },
      { derive: R`Shunt and series resistance`, steps: [
        R`<b>Ammeter</b> (range I): a small shunt S in parallel carries the excess current \(I - I_g\). Same voltage: \(I_gG = (I - I_g)S\), so \[S = \frac{I_gG}{I - I_g}\] The ammeter's resistance is tiny, so it hardly disturbs the circuit it is placed in.`,
        R`<b>Voltmeter</b> (range V): a large resistance R in series, so that V drives exactly \(I_g\): \(V = I_g(G + R)\), so \[R = \frac{V}{I_g} - G\] Its resistance is huge, so it draws almost no current.`
      ] },
      { ex: { q: R`A galvanometer of resistance 50 Ω gives full-scale deflection at 1 mA. How can it be converted into (a) an ammeter reading up to 1 A (b) a voltmeter reading up to 10 V?`,
        steps: [R`(a) \(S = \dfrac{10^{-3}\times50}{1 - 10^{-3}}\).`, R`(b) \(R = \dfrac{10}{10^{-3}} - 50\).`], ans: R`(a) a shunt of ≈ 0.05 Ω in parallel (b) 9950 Ω in series` } },
      { check: { q: R`An ideal ammeter and an ideal voltmeter have what resistances?`, ans: R`Zero and infinite, respectively.` } }
    ] },

    { h: R`Current loop as a magnetic dipole`, t: [7], blocks: [
      R`Far from a current loop, its field has exactly the same shape as the electric field of an electric dipole. So a current loop is a <b>magnetic dipole</b> with <b>magnetic dipole moment</b> \[\vec m = NI\vec A\quad(\text{unit A m}^2)\] directed along the normal given by the right-hand rule.`,
      { table: { head: [R`Quantity`, R`Electric dipole`, R`Magnetic dipole`], rows: [
        [R`Moment`, R`p = q(2a)`, R`m = NIA`], [R`Field on axis (far)`, R`\(\dfrac{1}{4\pi\varepsilon_0}\dfrac{2p}{r^3}\)`, R`\(\dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3}\)`],
        [R`Field on equator (far)`, R`\(\dfrac{1}{4\pi\varepsilon_0}\dfrac{p}{r^3}\)`, R`\(\dfrac{\mu_0}{4\pi}\dfrac{m}{r^3}\)`], [R`Torque in uniform field`, R`\(\vec p\times\vec E\)`, R`\(\vec m\times\vec B\)`], [R`Energy`, R`\(-\vec p\cdot\vec E\)`, R`\(-\vec m\cdot\vec B\)`]] } },
      { h3: R`Magnetic moment of a revolving electron` },
      { derive: R`Orbital magnetic moment`, steps: [
        R`An electron in a circular orbit of radius r with speed v is a current \(I = \dfrac{e}{T} = \dfrac{ev}{2\pi r}\).`,
        R`Its magnetic moment: \(\mu = I\pi r^2 = \dfrac{evr}{2}\).`,
        R`With angular momentum \(L = m_evr\): \[\mu = \frac{e}{2m_e}L\] The ratio \(e/2m_e\) is the <b>gyromagnetic ratio</b>. With Bohr's rule \(L = nh/2\pi\), the smallest moment is the <b>Bohr magneton</b> \(\mu_B = \dfrac{eh}{4\pi m_e} \approx 9.27\times10^{-24}\) A m².`
      ] },
      { ex: { q: R`In hydrogen, the electron orbits at 2.19 × 10⁶ m/s at radius 0.529 × 10⁻¹⁰ m. Find its magnetic moment.`,
        steps: [R`\[\mu = \frac{evr}{2} = \frac{1.6\times10^{-19}\times2.19\times10^6\times0.529\times10^{-10}}{2}\]`], ans: R`≈ 9.27 × 10⁻²⁴ A m² (one Bohr magneton)` } },
      { check: { q: R`The magnetic moment of an orbiting electron points which way relative to its angular momentum?`, ans: R`Opposite, because the electron's charge is negative.` } }
    ] },

    { h: R`The bar magnet`, t: [8], blocks: [
      R`A <b>bar magnet</b> has two poles, north and south; like poles repel and unlike poles attract. Its field lines look exactly like those of a solenoid: a bar magnet behaves like an <b>equivalent solenoid</b>, because its magnetism comes from tiny current loops (electron orbits and spins) inside it. Unlike electric charges, magnetic poles always come in pairs: cutting a magnet just gives two smaller magnets (no magnetic monopoles have been found).`,
      { fig: figBarMagnet, cap: R`Field lines of a bar magnet: outside the magnet they run from N to S; inside, from S to N. They form closed loops.` },
      { h3: R`Properties of magnetic field lines` },
      { points: [R`They are continuous closed loops (unlike electric field lines, which begin and end on charges).`, R`The tangent gives the direction of B; their density shows its strength.`, R`They never intersect.`] },
      { h3: R`Field of a magnetic dipole` },
      R`For a bar magnet of magnetic moment m (pointing from S to N), at a distance r ≫ its length: \[B_{axial} = \frac{\mu_0}{4\pi}\frac{2m}{r^3},\qquad B_{equatorial} = \frac{\mu_0}{4\pi}\frac{m}{r^3}\] The equatorial field points opposite to m.`,
      { ex: { q: R`A bar magnet has moment 2 A m². Find the field 10 cm from its centre on its axis and on its equator.`,
        steps: [R`\(B_{ax} = 10^{-7}\times\dfrac{2\times2}{0.1^3}\).`, R`Equatorial field is half.`], ans: R`4 × 10⁻⁴ T and 2 × 10⁻⁴ T` } },
      { h3: R`Torque on a magnetic dipole in a uniform field` },
      R`A magnet in a uniform field feels no net force but a torque \(\vec\tau = \vec m\times\vec B\), turning it to line up with B, and has potential energy \(U = -\vec m\cdot\vec B\). This is why a compass needle points along the field.`,
      { adv: R`A magnetic needle displaced slightly from the field direction oscillates in angular SHM: \(I\alpha = -mB\theta\), so \(T = 2\pi\sqrt{\dfrac{I}{mB}}\). Timing the oscillations lets you compare field strengths.` },
      { check: { q: R`How much work is needed to turn a magnet of moment m from alignment with B to the opposite direction?`, ans: R`\(U(180°) - U(0°) = 2mB\).` } }
    ] },

    { h: R`Magnetic materials`, t: [9], blocks: [
      R`When a material is placed in a magnetic field, its atoms' tiny current loops respond and it becomes <b>magnetised</b>. The <b>magnetisation</b> M is the magnetic moment per unit volume. The applied field is described by the <b>magnetic intensity</b> H (A/m), with \(B = \mu_0(H + M)\). For many materials \(M = \chi H\), where χ is the <b>magnetic susceptibility</b>, so \(B = \mu_0(1 + \chi)H = \mu_0\mu_rH\), with relative permeability \(\mu_r = 1 + \chi\).`,
      { table: { head: [R`Property`, R`Diamagnetic`, R`Paramagnetic`, R`Ferromagnetic`], rows: [
        [R`Susceptibility χ`, R`small, negative (≈ −10⁻⁵)`, R`small, positive (≈ 10⁻⁵ to 10⁻³)`, R`large, positive (10² to 10⁵)`],
        [R`\(\mu_r\)`, R`slightly less than 1`, R`slightly more than 1`, R`very large`],
        [R`In a field`, R`weakly repelled; moves to weaker field`, R`weakly attracted; moves to stronger field`, R`strongly attracted`],
        [R`Origin`, R`induced moments oppose B (all materials)`, R`permanent atomic moments partly align`, R`domains of aligned moments`],
        [R`Examples`, R`bismuth, copper, water, gold, superconductors`, R`aluminium, sodium, oxygen, platinum`, R`iron, cobalt, nickel, gadolinium`]] } },
      { h3: R`Effect of temperature` },
      { points: [R`<b>Diamagnetism</b> hardly depends on temperature.`, R`<b>Paramagnetism</b> gets weaker as temperature rises, since thermal motion disturbs the alignment: <b>Curie's law</b> \(\chi = \dfrac CT\).`, R`<b>Ferromagnets</b> lose their ferromagnetism above the <b>Curie temperature</b> \(T_c\) and become paramagnetic (iron: 1043 K). Above \(T_c\), \(\chi = \dfrac{C}{T - T_c}\).`] },
      { fig: figHyst, cap: R`B against H for a ferromagnet traces a hysteresis loop: B lags behind H. Retentivity is the B left when H = 0; coercivity is the reverse H needed to remove it.` },
      R`Materials with high retentivity and coercivity (steel, alnico) make <b>permanent magnets</b>. Materials with low coercivity and a narrow loop (soft iron) make <b>electromagnets</b> and transformer cores, where little energy is lost per cycle.`,
      { ex: { q: R`A paramagnetic salt has χ = 3 × 10⁻⁴ at 200 K. Find its susceptibility at 300 K.`,
        steps: [R`χ ∝ 1/T: \(\chi = 3\times10^{-4}\times\dfrac{200}{300}\).`], ans: R`2 × 10⁻⁴` } },
      { check: { q: R`A superconductor expels magnetic fields completely. What is its susceptibility?`, ans: R`χ = −1 (a perfect diamagnet, the Meissner effect).` } }
    ] }
  ],
  summary: [
    R`Biot–Savart: \(dB = \frac{\mu_0}{4\pi}\frac{I\,dl\sin\theta}{r^2}\), \(\mu_0 = 4\pi\times10^{-7}\) T m/A.`,
    R`Straight wire: \(\frac{\mu_0I}{4\pi d}(\sin\alpha + \sin\beta)\); infinite \(\frac{\mu_0I}{2\pi d}\).`,
    R`Loop axis: \(\frac{\mu_0IR^2}{2(R^2 + x^2)^{3/2}}\); centre \(\frac{\mu_0NI}{2R}\); arc \(\frac{\mu_0I\theta}{4\pi R}\).`,
    R`Ampère: \(\oint\vec B\cdot d\vec l = \mu_0I_{enc}\). Solenoid \(\mu_0nI\); toroid \(\frac{\mu_0NI}{2\pi r}\).`,
    R`Lorentz force \(\vec F = q(\vec E + \vec v\times\vec B)\); magnetic force does no work.`,
    R`Circle: \(r = mv/qB\), \(T = 2\pi m/qB\) (independent of v); helix pitch \(v\cos\theta\cdot2\pi m/qB\). Velocity selector v = E/B.`,
    R`Force on wire \(\vec F = I\vec l\times\vec B\); parallel wires \(F/l = \mu_0I_1I_2/2\pi d\) (like currents attract).`,
    R`Torque on coil \(\vec\tau = \vec m\times\vec B\), m = NIA. Galvanometer: radial field, \(\phi = (NAB/k)I\).`,
    R`Ammeter: shunt \(S = I_gG/(I - I_g)\). Voltmeter: series \(R = V/I_g - G\).`,
    R`Orbiting electron: \(\mu = evr/2 = (e/2m)L\); Bohr magneton 9.27 × 10⁻²⁴ A m².`,
    R`Bar magnet ≈ solenoid: \(B_{ax} = \frac{\mu_0}{4\pi}\frac{2m}{r^3}\), \(B_{eq} = \frac{\mu_0}{4\pi}\frac{m}{r^3}\); \(\tau = mB\sin\theta\), \(U = -mB\cos\theta\).`,
    R`Dia (χ < 0), para (χ small > 0, Curie χ = C/T), ferro (χ huge, lost above Curie temperature, hysteresis).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §11.3 Motion of a Charged Particle in a Magnetic Field`, url: 'https://openstax.org/books/university-physics-volume-2/pages/11-3-motion-of-a-charged-particle-in-a-magnetic-field' },
    { t: R`OpenStax University Physics Vol. 2, §11.4 Magnetic Force on a Current-Carrying Conductor`, url: 'https://openstax.org/books/university-physics-volume-2/pages/11-4-magnetic-force-on-a-current-carrying-conductor' },
    { t: R`OpenStax University Physics Vol. 2, §11.5 Force and Torque on a Current Loop`, url: 'https://openstax.org/books/university-physics-volume-2/pages/11-5-force-and-torque-on-a-current-loop' },
    { t: R`OpenStax University Physics Vol. 2, §12.1 The Biot-Savart Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/12-1-the-biot-savart-law' },
    { t: R`OpenStax University Physics Vol. 2, §12.3 Magnetic Force between Two Parallel Currents`, url: 'https://openstax.org/books/university-physics-volume-2/pages/12-3-magnetic-force-between-two-parallel-currents' },
    { t: R`OpenStax University Physics Vol. 2, §12.4 Magnetic Field of a Current Loop`, url: 'https://openstax.org/books/university-physics-volume-2/pages/12-4-magnetic-field-of-a-current-loop' },
    { t: R`OpenStax University Physics Vol. 2, §12.5 Ampère's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/12-5-amperes-law' },
    { t: R`OpenStax University Physics Vol. 2, §12.6 Solenoids and Toroids`, url: 'https://openstax.org/books/university-physics-volume-2/pages/12-6-solenoids-and-toroids' },
    { t: R`OpenStax University Physics Vol. 2, §12.7 Magnetism in Matter`, url: 'https://openstax.org/books/university-physics-volume-2/pages/12-7-magnetism-in-matter' },
    { t: R`Wikipedia: Galvanometer`, url: 'https://en.wikipedia.org/wiki/Galvanometer' }
  ]
});
})();
