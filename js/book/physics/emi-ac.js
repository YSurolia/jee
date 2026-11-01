// Book chapter: Electromagnetic Induction and Alternating Currents. Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- helpers ----------
function cross(x, y, c) { return D.circle(x, y, 6, { color: c || 'm', w: 1.2 }) + D.line(x - 4, y - 4, x + 4, y + 4, { color: c || 'm', w: 1.2 }) + D.line(x - 4, y + 4, x + 4, y - 4, { color: c || 'm', w: 1.2 }); }
function grid(x0, y0, x1, y1, st) { var p = []; for (var x = x0; x <= x1; x += st) for (var y = y0; y <= y1; y += st) p.push(cross(x, y)); return p.join(''); }
function wave(x0, x1, y0, amp, cycles, phase) { var p = []; for (var k = 0; k <= 200; k++) { var u = k / 200; p.push([x0 + (x1 - x0) * u, y0 - amp * Math.sin(2 * PI * cycles * u + (phase || 0))]); } return p; }

// ---------- figures ----------
var figFlux = D.svg(380, 210, [
  D.ellipse(170, 115, 45, 75, { color: 'o', fill: 'soft', w: 2 }), D.text(170, 205, 'area A', { size: 12, color: 'o', math: false }),
  [50, 85, 120, 155].map(function (y) { return D.arrow(20, y + 10, 340, y - 25, { color: 'b', w: 1.2, head: 7 }); }).join(''), D.text(340, 105, 'B', { math: true, color: 'b' }),
  D.arrow(170, 115, 170 + 100 * Math.cos(0.61), 115 - 100 * Math.sin(0.61), { color: 'g', w: 2.2, label: 'n̂', at: 'end', lx: 12, ly: -4, math: false }),
  D.angle(170, 115, 50, 6.2, 35, 'θ', { lr: 12 })
], 'Magnetic flux through a loop');

var figFaraday = (function () {
  var p = [];
  for (var k = 0; k < 7; k++) p.push(D.ellipse(200 + k * 18, 80, 10, 36, { color: 'o', w: 1.8 }));
  p.push(D.line(200, 116, 200, 160, { w: 1.6 }), D.line(308, 116, 308, 160, { w: 1.6 }), D.line(200, 160, 230, 160, { w: 1.6 }), D.meter(230, 160, 278, 160, { s: 'G' }), D.line(278, 160, 308, 160, { w: 1.6 }));
  p.push(D.rect(40, 66, 100, 28, { color: 'k', fill: 'bg', w: 1.6, r: 3 }), D.rect(90, 66, 50, 28, { color: 'r', fill: 'soft', w: 0.01 }), D.rect(40, 66, 50, 28, { color: 'b', fill: 'soft', w: 0.01 }));
  p.push(D.text(115, 81, 'N', { size: 14, bold: true, color: 'r', math: false }), D.text(65, 81, 'S', { size: 14, bold: true, color: 'b', math: false }));
  p.push(D.arrow(60, 40, 140, 40, { color: 'g', w: 2, head: 8, label: 'move the magnet in', ly: -12, math: false, size: 11 }));
  p.push(D.text(254, 192, 'galvanometer deflects while the flux changes', { size: 11, color: 'm', math: false }));
  return D.svg(380, 205, p, "Faraday's experiment: a moving magnet induces a current in a coil");
})();

var figLenz = D.svg(400, 200, [
  D.rect(30, 86, 120, 30, { color: 'k', fill: 'bg', w: 1.6, r: 3 }), D.rect(90, 86, 60, 30, { color: 'r', fill: 'soft', w: 0.01 }), D.rect(30, 86, 60, 30, { color: 'b', fill: 'soft', w: 0.01 }),
  D.text(128, 102, 'N', { size: 14, bold: true, color: 'r', math: false }), D.text(52, 102, 'S', { size: 14, bold: true, color: 'b', math: false }),
  D.arrow(60, 60, 140, 60, { color: 'g', w: 2, head: 8, label: 'approaching', ly: -12, math: false, size: 11 }),
  D.ellipse(270, 101, 22, 70, { color: 'o', w: 2.4 }), D.arrow(256, 46, 266, 34, { color: 'o', w: 0.01, head: 10 }), D.arrow(284, 160, 274, 170, { color: 'o', w: 0.01, head: 10 }),
  D.text(300, 30, 'induced I', { size: 12, color: 'o', math: false, anchor: 'start' }),
  D.text(190, 102, 'N', { size: 16, bold: true, color: 'r', math: false }), D.arrow(232, 120, 200, 120, { color: 'r', w: 1.6, head: 7 }),
  D.text(320, 102, 'S', { size: 16, bold: true, color: 'b', math: false }),
  D.text(200, 192, 'the near face of the loop becomes N and repels the magnet', { size: 11, color: 'm', math: false })
], "Lenz's law: the induced current opposes the change that causes it");

var figRails = D.svg(420, 220, [
  [90, 140, 190, 240, 290, 340, 390].map(function (x) { return cross(x, 62) + cross(x, 168); }).join(''),
  D.line(60, 40, 400, 40, { w: 2.6 }), D.line(60, 190, 400, 190, { w: 2.6 }), D.res(60, 40, 60, 190, { label: 'R', lx: -16, ly: 0 }),
  D.line(260, 30, 260, 200, { color: 'o', w: 5 }), D.text(272, 205, 'rod, length l', { size: 11, color: 'o', math: false, anchor: 'start' }),
  D.arrow(266, 112, 336, 112, { color: 'g', w: 2.4, head: 9, label: 'v', ly: -12 }),
  D.arrow(254, 140, 198, 140, { color: 'r', w: 2.2, head: 9, label: 'F_{mag}', ly: -12, size: 12 }),
  D.arrow(260, 160, 260, 80, { color: 'b', w: 2, head: 9 }), D.text(276, 88, 'I', { math: true, color: 'b' }),
  D.text(400, 22, 'B into page', { size: 11, color: 'm', math: false, anchor: 'end' })
], 'Motional emf: a rod sliding on rails in a magnetic field');

var figRotRod = D.svg(300, 220, [
  grid(30, 30, 270, 200, 40),
  D.circle(150, 115, 85, { color: 'm', w: 1, dash: '4 3' }), D.line(150, 115, 210, 55, { color: 'o', w: 5 }), D.dot(150, 115, { r: 5 }),
  D.angle(150, 115, 100, 30, 70, '', { color: 'g', w: 1.6 }), D.arrow(198, 22, 172, 14, { color: 'g', w: 1.6, head: 8 }), D.text(214, 22, 'ω', { math: true, color: 'g' }),
  D.text(170, 100, 'l', { math: true, color: 'o' }), D.text(150, 214, 'ε = ½Bωl² between centre and end', { size: 11, math: false })
], 'A rod rotating about one end in a perpendicular field');

var figMutual = D.svg(400, 170, [
  (function () { var p = []; for (var k = 0; k < 6; k++) p.push(D.ellipse(80 + k * 16, 80, 9, 36, { color: 'r', w: 1.8 })); for (k = 0; k < 6; k++) p.push(D.ellipse(240 + k * 16, 80, 9, 36, { color: 'b', w: 1.8 })); return p.join(''); })(),
  D.text(120, 136, 'primary (I₁ changing)', { size: 12, color: 'r', math: false }), D.text(280, 136, 'secondary (emf ε₂)', { size: 12, color: 'b', math: false }),
  D.arrow(60, 80, 340, 80, { color: 'g', w: 1.2, head: 7, dash: '5 4' }), D.text(200, 66, 'shared flux', { size: 11, color: 'g', math: false }),
  D.text(200, 160, 'ε₂ = −M dI₁/dt', { size: 13, math: false })
], 'Mutual induction between two coils');

var figRC = D.row([
  [D.svg(200, 150, [D.cell(30, 110, 30, 40, { label: 'E', lx: -18, ly: 0 }), D.line(30, 40, 90, 40, { w: 1.8 }), D.res(90, 40, 170, 40, { label: 'R' }), D.line(170, 40, 170, 75, { w: 1.8 }), D.cap(170, 75, 170, 110, { label: 'C', lx: 22, ly: 0 }), D.line(170, 110, 170, 130, { w: 1.8 }), D.line(30, 110, 30, 130, { w: 1.8 }), D.line(30, 130, 170, 130, { w: 1.8 })], 'RC circuit'), 'RC circuit'],
  [D.plot({ w: 240, h: 170, x: [0, 5], y: [0, 1.2], xlabel: 't', ylabel: 'q', xticks: [[1, 'τ']], yticks: [[1, 'CE'], [0.632, '0.63']], grid: false,
    fns: [{ f: function (t) { return 1 - Math.exp(-t); }, color: 'c', label: 'charging', lx: 2.4, ly: 1.05, math: false }, { f: function (t) { return Math.exp(-t); }, color: 'o', dash: '6 4', label: 'discharging', lx: 1.6, ly: 0.32, math: false }],
    guides: [[1, 0.632]], label: 'charge on a capacitor against time' }), 'q(t): exponential, time constant τ = RC']
]);

var figLR = D.plot({
  w: 400, h: 200, x: [0, 5], y: [0, 1.2], xlabel: 't', ylabel: 'I', xticks: [[1, 'τ = L/R']], yticks: [[1, 'E/R'], [0.632, '0.63E/R']],
  fns: [{ f: function (t) { return 1 - Math.exp(-t); }, color: 'c', label: 'growth', lx: 2.6, ly: 1.06, math: false }, { f: function (t) { return Math.exp(-t); }, color: 'o', dash: '6 4', label: 'decay', lx: 1.7, ly: 0.32, math: false }],
  guides: [[1, 0.632]], label: 'Growth and decay of current in an LR circuit'
});

var figLC = D.row([
  [D.svg(170, 150, [D.cap(40, 40, 40, 120, { label: 'C', lx: -20, ly: 0 }), D.ind(130, 40, 130, 120, { label: 'L', lx: 24, ly: 0 }), D.line(40, 40, 130, 40, { w: 1.8 }), D.line(40, 120, 130, 120, { w: 1.8 })], 'LC circuit'), 'LC circuit'],
  [D.plot({ w: 260, h: 170, x: [0, 2.1], y: [-1.3, 1.4], xlabel: 't', ylabel: '', xticks: [[0.5, 'T/2'], [1, 'T']], yticks: [],
    fns: [{ f: function (t) { return Math.cos(2 * PI * t); }, color: 'c', label: 'q', lx: 0.05, ly: 1.18 }, { f: function (t) { return -Math.sin(2 * PI * t); }, color: 'o', dash: '6 4', label: 'i', lx: 0.78, ly: 1.18 }],
    label: 'charge and current in an LC circuit' }), 'q and i oscillate, π/2 apart']
]);

var figACwave = D.plot({
  w: 420, h: 210, x: [0, 2.15], y: [-1.3, 1.35], xlabel: 't', ylabel: 'i', xticks: [[0.5, 'T/2'], [1, 'T'], [2, '2T']], yticks: [[1, 'I₀'], [0.707, 'I_{rms}']],
  fns: [{ f: function (t) { return Math.sin(2 * PI * t); }, color: 'c' }, { f: function () { return 0.707; }, color: 'r', dash: '5 4', w: 1.2 }],
  texts: [{ x: 1.62, y: 0.82, s: 'rms = I₀/√2', size: 12, color: 'r', anchor: 'start' }],
  label: 'Sinusoidal alternating current'
});

var figPhasor = D.svg(420, 200, [
  D.circle(100, 100, 70, { color: 'm', w: 1, dash: '4 3' }), D.line(20, 100, 180, 100, { color: 'm', w: 1 }), D.line(100, 20, 100, 180, { color: 'm', w: 1 }),
  D.arrow(100, 100, 100 + 70 * Math.cos(PI / 4), 100 - 70 * Math.sin(PI / 4), { color: 'c', w: 2.6, label: 'V₀', at: 'end', lx: 10, ly: -8, math: false }),
  D.angle(100, 100, 26, 0, 45, 'ωt', { lr: 14 }), D.line(100 + 70 * Math.cos(PI / 4), 100 - 70 * Math.sin(PI / 4), 220, 100 - 70 * Math.sin(PI / 4), { color: 'o', w: 1, dash: '3 3' }),
  D.line(220, 100, 410, 100, { color: 'm', w: 1 }), D.poly(wave(220, 410, 100, 70, 1, PI / 4), { color: 'o', w: 2 }),
  D.text(316, 190, 'projection = V₀ sin ωt', { size: 12, color: 'o', math: false }), D.arrow(150, 150, 140, 162, { color: 'g', w: 1.4, head: 7 }), D.text(160, 172, 'rotates at ω', { size: 11, color: 'g', math: false, anchor: 'start' })
], 'A phasor: a rotating arrow whose projection gives the instantaneous value');

function phasorPanel(vAng, lab) {
  var cx = 70, cy = 85;
  return D.svg(190, 170, [D.line(10, cy, 180, cy, { color: 'm', w: 0.8 }), D.line(cx, 10, cx, 160, { color: 'm', w: 0.8 }),
    D.arrow(cx, cy, cx + 90, cy, { color: 'r', w: 2.2, label: 'I', at: 'end', lx: 4, ly: -12 }),
    D.arrow(cx, cy, cx + 65 * Math.cos(vAng), cy - 65 * Math.sin(vAng), { color: 'c', w: 2.6, label: 'V', at: 'end', lx: 14, ly: vAng < 0 ? 8 : -6 })], lab);
}
var figRLC3 = D.row([[phasorPanel(0.0001, 'resistor phasors'), 'R: V and I in phase'], [phasorPanel(PI / 2, 'inductor phasors'), 'L: V leads I by 90°'], [phasorPanel(-PI / 2, 'capacitor phasors'), 'C: V lags I by 90°']]);

var figX = D.plot({
  w: 400, h: 210, x: [0, 5], y: [0, 5], xlabel: 'f', ylabel: 'X', xticks: [[2.2, 'f₀']], yticks: [],
  fns: [{ f: function (x) { return x; }, color: 'o', label: 'X_L = 2πfL', lx: 2.5, ly: 4.7 }, { f: function (x) { return 4.84 / x; }, from: 0.9, color: 'b', label: 'X_C = 1/2πfC', lx: 3.3, ly: 1.9 }],
  segs: [{ x1: 2.2, y1: 0, x2: 2.2, y2: 2.2, color: 'm', dash: '3 3', w: 1 }],
  label: 'Inductive and capacitive reactance against frequency'
});

var figLCR = D.row([
  [D.svg(230, 150, [D.res(20, 40, 90, 40, { label: 'R' }), D.ind(90, 40, 160, 40, { label: 'L' }), D.cap(160, 40, 215, 40, { label: 'C' }), D.line(215, 40, 215, 120, { w: 1.8 }), D.line(20, 40, 20, 120, { w: 1.8 }), D.ac(20, 120, 215, 120, { label: 'v = V₀ sin ωt', math: false, ly: 26, size: 12 })], 'series LCR circuit'), 'series LCR circuit'],
  [D.svg(220, 190, [D.line(20, 150, 210, 150, { color: 'm', w: 0.8 }),
    D.arrow(40, 150, 150, 150, { color: 'r', w: 2.4, label: 'V_R', ly: 14, size: 12 }), D.arrow(150, 150, 150, 60, { color: 'o', w: 2.2, label: 'V_L − V_C', lx: 34, ly: 0, size: 12 }),
    D.arrow(40, 150, 150, 60, { color: 'c', w: 2.6, label: 'V', lx: -12, ly: -6 }), D.angle(40, 150, 34, 0, 39.3, 'φ', { lr: 10 }),
    D.text(110, 180, 'current I along V_R', { size: 11, color: 'm', math: false })], 'phasor diagram'), 'phasor diagram (X<sub>L</sub> > X<sub>C</sub>)']
]);

var figRes = D.plot({
  w: 420, h: 220, x: [0, 2.4], y: [0, 1.2], xlabel: 'ω', ylabel: 'I', xticks: [[1, 'ω₀']], yticks: [],
  fns: [{ f: function (w) { return 1 / Math.sqrt(1 + Math.pow(8 * (w - 1 / Math.max(w, 1e-3)), 2)); }, from: 0.05, color: 'r', steps: 500, label: 'small R (high Q)', lx: 1.12, ly: 1.08, math: false },
    { f: function (w) { return 0.5 / Math.sqrt(1 + Math.pow(1.6 * (w - 1 / Math.max(w, 1e-3)), 2)); }, from: 0.05, color: 'b', steps: 500, label: 'large R (low Q)', lx: 1.5, ly: 0.42, math: false }],
  segs: [{ x1: 1, y1: 0, x2: 1, y2: 1, color: 'm', dash: '3 3', w: 1 }],
  label: 'Resonance curves of a series LCR circuit'
});

var figGenerator = D.svg(420, 220, [
  D.path('M20 40 L100 40 L100 70 A 50 50 0 0 0 100 150 L100 180 L20 180 Z', { color: 'r', fill: 'soft', w: 2 }), D.text(50, 112, 'N', { size: 18, bold: true, color: 'r', math: false }),
  D.path('M300 40 L220 40 L220 70 A 50 50 0 0 1 220 150 L220 180 L300 180 Z', { color: 'b', fill: 'soft', w: 2 }), D.text(270, 112, 'S', { size: 18, bold: true, color: 'b', math: false }),
  D.poly([[130, 70], [190, 60], [190, 150], [130, 160]], { closed: true, color: 'o', w: 2.4 }), D.line(160, 20, 160, 200, { color: 'm', w: 1, dash: '4 3' }),
  D.arrow(176, 18, 146, 18, { color: 'g', w: 1.6, head: 7 }), D.text(190, 14, 'ω', { math: true, color: 'g' }),
  D.line(150, 160, 150, 196, { color: 'o', w: 1.6 }), D.line(170, 156, 170, 186, { color: 'o', w: 1.6 }),
  D.ellipse(160, 196, 18, 5, { color: 'k', w: 1.6 }), D.ellipse(160, 186, 18, 5, { color: 'k', w: 1.6 }), D.text(110, 206, 'slip rings', { size: 11, color: 'm', math: false }),
  D.line(178, 186, 350, 186, { w: 1.6 }), D.line(350, 186, 350, 130, { w: 1.6 }), D.line(350, 130, 385, 130, { w: 1.6 }), D.line(178, 196, 385, 196, { w: 1.6 }),
  D.res(385, 130, 385, 196, { label: 'load', math: false, lx: 0, ly: -44, size: 11 }),
  D.text(360, 60, 'ε = NBAω sin ωt', { size: 13, math: false })
], 'AC generator: a coil rotating in a magnetic field');

var figTrans = D.svg(420, 200, [
  D.rect(120, 30, 180, 140, { color: 'm', fill: 'soft', w: 2, r: 4 }), D.rect(150, 60, 120, 80, { color: 'm', fill: 'bg', w: 1.6, r: 2 }),
  (function () { var p = []; for (var k = 0; k < 5; k++) p.push(D.ellipse(135, 55 + k * 22, 24, 7, { color: 'r', w: 2 })); for (k = 0; k < 8; k++) p.push(D.ellipse(285, 48 + k * 15, 24, 6, { color: 'b', w: 2 })); return p.join(''); })(),
  D.line(111, 55, 50, 55, { color: 'r', w: 1.6 }), D.line(111, 143, 50, 143, { color: 'r', w: 1.6 }), D.ac(50, 55, 50, 143, { label: 'V_p', lx: -28, ly: 0 }),
  D.line(309, 48, 370, 48, { color: 'b', w: 1.6 }), D.line(309, 153, 370, 153, { color: 'b', w: 1.6 }), D.res(370, 48, 370, 153, { label: 'V_s', lx: 24, ly: 0 }),
  D.text(135, 186, 'primary N_p', { size: 12, color: 'r', math: false }), D.text(285, 186, 'secondary N_s', { size: 12, color: 'b', math: false }), D.text(210, 18, 'laminated soft-iron core', { size: 11, color: 'm', math: false })
], 'A step-up transformer');

// ---------- chapter text ----------
JEE.book('physics', 'emi-ac', {
  intro: [
    R`Oersted showed that currents make magnetic fields. In 1831 Michael Faraday asked the reverse question: can magnetic fields make currents? They can, but only when the magnetic flux <b>changes</b>. This is <b>electromagnetic induction</b>, the principle behind every power station generator, transformer, induction cooktop and wireless charger.`,
    R`This chapter covers Faraday's and Lenz's laws, motional emf, eddy currents, self and mutual inductance, the growth and decay of current in RC and LR circuits, LC oscillations, and then alternating current: rms values, phasors, reactance and impedance, the series LCR circuit and resonance, AC power, the AC generator and the transformer.`
  ],
  sections: [
    { h: R`Magnetic flux`, t: [0], blocks: [
      R`The <b>magnetic flux</b> through a surface measures how much magnetic field passes through it. For a flat area A in a uniform field B, \[\Phi_B = \vec B\cdot\vec A = BA\cos\theta\] where θ is the angle between B and the normal to the area. In general \(\Phi_B = \int\vec B\cdot d\vec A\). The unit of flux is the <b>weber</b> (Wb = T m²). For a coil of N turns, the flux linkage is NΦ.`,
      { fig: figFlux, cap: R`The flux through a loop depends on B, the area A and the angle θ between B and the normal.` },
      { ex: { q: R`A loop of area 0.02 m² is in a uniform field of 0.5 T. Its normal makes 60° with the field. Find the flux.`,
        steps: [R`\(\Phi = BA\cos60° = 0.5\times0.02\times0.5\).`], ans: R`5 × 10⁻³ Wb` } },
      { check: { q: R`Name three ways to change the flux through a coil.`, ans: R`Change B (move a magnet or vary a current), change the area A, or change the angle θ (rotate the coil).` } }
    ] },

    { h: R`Faraday's law of electromagnetic induction`, t: [0], blocks: [
      R`Faraday found that a current flows in a coil whenever the magnetic flux through it changes: when a magnet is moved towards or away from it, when a nearby current is switched on or off, or when the coil is moved or rotated in a field. The faster the change, the larger the current. No current flows while the flux is steady.`,
      { fig: figFaraday, cap: R`Moving a magnet into or out of a coil changes the flux through it and induces a current; holding it still does not.` },
      R`<b>Faraday's law:</b> the induced emf in a circuit equals the rate of change of magnetic flux linkage through it: \[\varepsilon = -N\frac{d\Phi_B}{dt}\] The minus sign expresses Lenz's law (next section). If the circuit has resistance R, the induced current is ε/R, and the total charge that flows is \(\Delta q = \dfrac{N\,\Delta\Phi}{R}\), which depends only on the change in flux, not on how fast it happens.`,
      { ex: { q: R`The flux through each turn of a 100-turn coil falls from 5 × 10⁻³ Wb to 1 × 10⁻³ Wb in 0.1 s. Find the average induced emf. If the coil's resistance is 20 Ω, find the current and the charge that flows.`,
        steps: [R`\(\varepsilon = N\dfrac{\Delta\Phi}{\Delta t} = 100\times\dfrac{4\times10^{-3}}{0.1}\).`, R`I = ε/R; Δq = NΔΦ/R.`], ans: R`4 V; 0.2 A; 0.02 C` } },
      { check: { q: R`A magnet is pushed into a coil quickly and then slowly. In which case is more charge sent round the circuit?`, ans: R`The same charge (Δq = NΔΦ/R); the quick push gives a larger current for a shorter time.` } }
    ] },

    { h: R`Lenz's law`, t: [1], blocks: [
      R`<b>Lenz's law:</b> the induced current flows in such a direction that its own magnetic field opposes the <b>change</b> in flux that produced it.`,
      { fig: figLenz, cap: R`As the N pole approaches, the flux through the loop increases. The induced current makes the near face of the loop a north pole, which repels the magnet.` },
      { points: [R`Pushing a N pole towards a coil: the near face becomes N (repels it). Pulling it away: the near face becomes S (attracts it back).`, R`Increasing flux: induced field opposite to the applied field. Decreasing flux: induced field along it.`] },
      R`<b>Lenz's law and energy conservation.</b> Because the induced current always opposes the motion, you must do work to push the magnet in or pull it out, and that work is what appears as electrical energy (and heat) in the coil. If the induced current helped the motion instead, the magnet would speed up by itself and create energy from nothing.`,
      { ex: { q: R`A bar magnet is dropped through a vertical copper ring. Is its acceleration more than, equal to, or less than g?`,
        steps: [R`The induced currents oppose its motion both while it approaches the ring and while it leaves.`], ans: R`Less than g (both above and below the ring)` } },
      { check: { q: R`The current in a long straight wire is increasing. A loop lies beside it in the same plane. Is the loop attracted or repelled?`, ans: R`Repelled: the induced current in the near side flows opposite to the wire's current, and opposite currents repel.` } }
    ] },

    { h: R`Motional emf`, t: [2], blocks: [
      R`An emf is also induced when a conductor moves through a magnetic field.`,
      { fig: figRails, cap: R`A rod of length l slides at speed v on rails in a field B into the page. The induced current I flows up the rod, and the field pushes back on it.` },
      { derive: R`Motional emf ε = Blv`, steps: [
        R`<b>Flux view:</b> the area of the circuit increases at the rate lv, so \(\dfrac{d\Phi}{dt} = Blv\) and \(\varepsilon = Blv\).`,
        R`<b>Force view:</b> each free charge q in the rod moves with velocity v, so it feels a magnetic force qvB along the rod. The work done per unit charge over length l is \(\varepsilon = vBl\).`,
        R`With resistance R in the circuit: \(I = \dfrac{Blv}{R}\). The rod then feels a force \(F = BIl = \dfrac{B^2l^2v}{R}\) opposing its motion.`,
        R`To keep it moving steadily, an external force must supply power \(Fv = \dfrac{B^2l^2v^2}{R} = I^2R\): mechanical power becomes electrical power and then heat.`
      ] },
      { ex: { q: R`A rod 0.2 m long slides at 10 m/s on rails joined by a 2 Ω resistor, in a field of 0.5 T. Find the emf, current, retarding force and power.`,
        steps: [R`\(\varepsilon = Blv = 0.5\times0.2\times10 = 1\) V; I = 1/2 = 0.5 A.`, R`F = BIl = 0.5 × 0.5 × 0.2; P = Fv = 0.05 × 10.`], ans: R`1 V; 0.5 A; 0.05 N; 0.5 W (= I²R)` } },
      { tip: R`If the rod is released with speed \(v_0\) and no external force, it slows down exponentially: \(v = v_0e^{-B^2l^2t/mR}\). If it falls vertically under gravity, it reaches a terminal speed \(v_t = \dfrac{mgR}{B^2l^2}\).` },
      { check: { q: R`A metal rod moves parallel to its own length in a magnetic field. Is any emf induced?`, ans: R`No: the magnetic force on the charges is perpendicular to the rod, so no emf is produced along it.` } }
    ] },

    { h: R`Emf induced in a rotating rod or coil`, t: [2], blocks: [
      { fig: figRotRod, cap: R`A rod rotating about one end: points farther out move faster, so the emf builds up along it.` },
      { derive: R`Rotating rod`, steps: [
        R`A small element dr at distance r moves with speed ωr, so its emf is \(d\varepsilon = B(\omega r)\,dr\).`,
        R`Adding from 0 to l: \[\varepsilon = \int_0^lB\omega r\,dr = \frac12B\omega l^2\]`
      ] },
      R`The same result applies to a metal disc rotating in a field (Faraday's disc dynamo), with the emf between its centre and rim.`,
      R`A <b>coil</b> of N turns and area A rotating at angular speed ω in a uniform field has flux \(\Phi = BA\cos\omega t\) through each turn, so \[\varepsilon = NBA\omega\sin\omega t\] an alternating emf of peak value \(\varepsilon_0 = NBA\omega\). This is the AC generator (see the last sections).`,
      { ex: { q: R`A 1 m rod rotates at 20 rad/s about one end, perpendicular to a 0.5 T field. Find the emf between its ends.`,
        steps: [R`\(\varepsilon = \frac12\times0.5\times20\times1^2\).`], ans: R`5 V` } },
      { check: { q: R`A rod rotates about its centre in a uniform field. What is the emf between its two ends?`, ans: R`Zero: the two halves give equal emfs from the centre outwards, which cancel between the ends.` } }
    ] },

    { h: R`Eddy currents`, t: [3], blocks: [
      R`When a bulk piece of metal moves through a magnetic field, or sits in a changing field, induced currents swirl round inside it like eddies in water. These <b>eddy currents</b> (Foucault currents) oppose the change, by Lenz's law, and heat the metal.`,
      { points: [
        R`<b>Unwanted:</b> in transformer and motor cores they waste energy as heat. Cores are therefore made of thin <b>laminated</b> sheets insulated from each other, which cut the eddy-current paths.`,
        R`<b>Electromagnetic damping:</b> the coil of a galvanometer is wound on a metal frame, so eddy currents bring the pointer to rest quickly.`,
        R`<b>Magnetic braking:</b> some trains and roller coasters use strong magnets near the rails; eddy currents in the rails slow them smoothly.`,
        R`<b>Induction furnaces and cooktops:</b> a high-frequency alternating field induces large eddy currents that heat the metal pot or melt the metal.`,
        R`<b>Speedometers and electricity meters</b> use the drag of eddy currents on a rotating disc.`
      ] },
      { check: { q: R`A copper plate swinging between the poles of a magnet stops quickly. A plate with slots cut in it swings much longer. Why?`, ans: R`The slots break up the paths of the eddy currents, so the damping force is much smaller.` } }
    ] },

    { h: R`Self-inductance`, t: [4], blocks: [
      R`A changing current in a coil changes the flux through the coil itself, so it induces an emf in the same coil: <b>self-induction</b>. The flux linkage is proportional to the current: \(N\Phi = LI\). The constant L is the <b>self-inductance</b> (unit: henry, H = Wb/A). The induced (back) emf is \[\varepsilon = -L\frac{dI}{dt}\] It opposes any change in current: an inductor is the electrical analogue of inertia (mass).`,
      { derive: R`Inductance of a long solenoid`, steps: [
        R`Inside: \(B = \mu_0nI\), with n = N/l. Flux through each turn: \(\Phi = \mu_0nIA\).`,
        R`Flux linkage: \(N\Phi = (nl)(\mu_0nIA)\), so \[L = \mu_0n^2Al = \frac{\mu_0N^2A}{l}\] With an iron core of relative permeability \(\mu_r\), L becomes \(\mu_r\) times larger.`
      ] },
      { ex: { q: R`A solenoid of 500 turns is 0.5 m long with cross-section 10⁻³ m². Find its inductance.`,
        steps: [R`\(L = \dfrac{4\pi\times10^{-7}\times500^2\times10^{-3}}{0.5}\).`], ans: R`≈ 6.3 × 10⁻⁴ H (0.63 mH)` } },
      { ex: { q: R`The current in a 0.2 H coil falls from 5 A to zero in 0.01 s. Find the average self-induced emf.`,
        steps: [R`\(\varepsilon = L\dfrac{\Delta I}{\Delta t} = 0.2\times\dfrac{5}{0.01}\).`], ans: R`100 V (which is why switches on inductive circuits spark)` } },
      { check: { q: R`How does the inductance of a solenoid change if the number of turns is doubled (same length)?`, ans: R`It becomes 4 times larger (L ∝ N²).` } }
    ] },

    { h: R`Mutual inductance`, t: [4], blocks: [
      R`When the current in one coil changes, the flux through a nearby coil changes too, inducing an emf in it: <b>mutual induction</b>. The flux linkage of coil 2 is proportional to the current in coil 1: \(N_2\Phi_2 = MI_1\), and \[\varepsilon_2 = -M\frac{dI_1}{dt}\] M, the <b>mutual inductance</b>, is the same both ways (\(M_{12} = M_{21}\)).`,
      { fig: figMutual, cap: R`A changing current in the primary coil induces an emf in the secondary.` },
      { derive: R`Two coaxial solenoids`, steps: [
        R`An inner solenoid (n₂ turns per metre, area A) lies inside a long outer one (n₁ per metre) over length l.`,
        R`The outer one makes \(B_1 = \mu_0n_1I_1\); flux linkage of the inner one: \(n_2l\cdot\mu_0n_1I_1A\).`,
        R`\(M = \mu_0n_1n_2Al\). In general \(M = k\sqrt{L_1L_2}\), where the coupling coefficient k ≤ 1.`
      ] },
      { ex: { q: R`Two coils have M = 0.05 H. The current in one changes at 100 A/s. Find the emf in the other.`,
        steps: [R`\(\varepsilon = M\dfrac{dI}{dt} = 0.05\times100\).`], ans: R`5 V` } },
      { check: { q: R`How should two coils be placed to make their mutual inductance as small as possible?`, ans: R`With their axes at right angles (and far apart), so that the flux of one hardly passes through the other.` } }
    ] },

    { h: R`Energy stored in an inductor`, t: [4], blocks: [
      { derive: R`Energy in an inductor`, steps: [
        R`To build up the current, the source must push charge against the back emf \(L\,dI/dt\): power \(P = LI\dfrac{dI}{dt}\).`,
        R`\(U = \displaystyle\int_0^ILI\,dI = \frac12LI^2\).`,
        R`For a solenoid, \(U = \frac12\mu_0n^2AlI^2 = \dfrac{B^2}{2\mu_0}(Al)\). So the magnetic field stores energy with density \[u_B = \frac{B^2}{2\mu_0}\]`
      ] },
      { ex: { q: R`Find the energy stored in a 0.5 H inductor carrying 4 A.`,
        steps: [R`\(U = \frac12\times0.5\times4^2\).`], ans: R`4 J` } },
      { check: { q: R`Compare the energy formulas of a capacitor and an inductor.`, ans: R`\(\frac12CV^2\) (stored in the electric field, density \(\frac12\varepsilon_0E^2\)) and \(\frac12LI^2\) (stored in the magnetic field, density \(B^2/2\mu_0\)).` } }
    ] },

    { h: R`RC circuits: charging and discharging a capacitor`, t: [2], blocks: [
      R`When a capacitor is connected to a battery through a resistor, it does not charge instantly: the current is limited by R and falls as the capacitor's voltage builds up.`,
      { fig: figRC, cap: R`Charging (solid) and discharging (dashed) curves of a capacitor through a resistor. After one time constant τ = RC, a charging capacitor has 63% of its final charge.` },
      { derive: R`Charging`, steps: [
        R`Loop rule: \(E - iR - \dfrac qC = 0\), with \(i = dq/dt\).`,
        R`Separating variables: \(\dfrac{dq}{CE - q} = \dfrac{dt}{RC}\). Integrating from q = 0 at t = 0: \[q = CE\left(1 - e^{-t/RC}\right),\qquad i = \frac ER e^{-t/RC}\]`,
        R`<b>Discharging</b> (battery removed, starting with charge Q₀): \(q = Q_0e^{-t/RC}\).`
      ] },
      R`The <b>time constant</b> τ = RC (in seconds when R is in ohms and C in farads) sets the speed: after τ the charge reaches 63% of its final value while charging, or falls to 37% while discharging. After about 5τ, the process is practically complete.`,
      { ex: { q: R`A 2 μF capacitor charges through a 1 MΩ resistor. Find the time constant, and how long it takes to reach half its final charge.`,
        steps: [R`τ = RC = 10⁶ × 2 × 10⁻⁶ = 2 s.`, R`\(\frac12 = 1 - e^{-t/\tau}\) gives \(t = \tau\ln2\).`], ans: R`2 s; ≈ 1.39 s` } },
      { tip: R`Just after switching on, an uncharged capacitor acts like a plain wire (no voltage across it); after a long time in DC, it acts like a break in the circuit (no current).` },
      { check: { q: R`During charging, how much of the energy supplied by the battery is stored in the capacitor?`, ans: R`Exactly half (\(\frac12CE^2\) of \(CE^2\)); the other half is dissipated in the resistor, whatever R is.` } }
    ] },

    { h: R`LR circuits: growth and decay of current`, t: [4], blocks: [
      R`An inductor resists changes in current, so in an LR circuit the current also rises and falls gradually.`,
      { derive: R`Growth and decay`, steps: [
        R`Switch on: \(E - L\dfrac{di}{dt} - iR = 0\). Solution: \[i = \frac ER\left(1 - e^{-Rt/L}\right)\]`,
        R`Switch off (short the battery): \(L\dfrac{di}{dt} + iR = 0\), so \(i = I_0e^{-Rt/L}\).`,
        R`Time constant: \(\tau = \dfrac LR\).`
      ] },
      { fig: figLR, cap: R`Growth (solid) and decay (dashed) of current in an LR circuit, with time constant τ = L/R.` },
      { ex: { q: R`A 0.4 H inductor with total resistance 8 Ω is connected to a 12 V battery. Find the time constant, the final current, and the current after one time constant.`,
        steps: [R`τ = L/R = 0.05 s; final current E/R = 1.5 A.`, R`After τ: \(1.5(1 - e^{-1})\).`], ans: R`0.05 s; 1.5 A; ≈ 0.95 A` } },
      { tip: R`Just after switching on, an inductor acts like a break (no current through it); after a long time in DC, it acts like a plain wire.` },
      { check: { q: R`Why can opening a switch in a circuit with a large inductor cause a spark?`, ans: R`The current tries to fall to zero almost instantly, so L di/dt is huge; the large emf makes a spark across the switch.` } }
    ] },

    { h: R`LC oscillations`, t: [4], blocks: [
      R`Connect a charged capacitor across an inductor (with no resistance). The capacitor discharges through the inductor; the current builds up a magnetic field; then the field collapses, keeping the current going and charging the capacitor the other way. Energy sloshes back and forth between the electric field of C and the magnetic field of L, exactly like a mass on a spring.`,
      { fig: figLC, cap: R`In an LC circuit, charge and current oscillate sinusoidally, a quarter cycle apart.` },
      { derive: R`Frequency of LC oscillations`, steps: [
        R`Loop rule: \(\dfrac qC + L\dfrac{di}{dt} = 0\) with \(i = dq/dt\): \(\dfrac{d^2q}{dt^2} = -\dfrac{1}{LC}q\).`,
        R`This is SHM: \(q = Q_0\cos\omega t\) with \[\omega = \frac{1}{\sqrt{LC}}\]`,
        R`Energy: \(\dfrac{q^2}{2C} + \dfrac12Li^2 = \dfrac{Q_0^2}{2C}\), constant.`
      ] },
      { table: { head: [R`Spring-mass`, R`LC circuit`], rows: [[R`displacement x`, R`charge q`], [R`velocity v`, R`current i`], [R`mass m`, R`inductance L`], [R`spring constant k`, R`1/C`], [R`\(\omega = \sqrt{k/m}\)`, R`\(\omega = 1/\sqrt{LC}\)`]] } },
      { ex: { q: R`An LC circuit has L = 10 mH and C = 1 μF. Find its angular frequency and frequency of oscillation.`,
        steps: [R`\(\omega = 1/\sqrt{10^{-2}\times10^{-6}} = 10^4\) rad/s; f = ω/2π.`], ans: R`10⁴ rad/s; ≈ 1.6 kHz` } },
      { check: { q: R`In a real LC circuit, why do the oscillations die out?`, ans: R`The resistance of the wires turns energy into heat (and some is radiated), so the oscillations are damped.` } }
    ] },

    { h: R`Alternating current: peak and rms values`, t: [5], blocks: [
      R`Mains electricity is <b>alternating</b>: the voltage and current vary sinusoidally, \(v = V_0\sin\omega t\), \(i = I_0\sin\omega t\), where \(V_0, I_0\) are the <b>peak values</b> and \(\omega = 2\pi f\) (f = 50 Hz in India).`,
      { fig: figACwave, cap: R`An alternating current varies between +I₀ and −I₀. Its average over a full cycle is zero, but its rms value is I₀/√2.` },
      R`The average of a sinusoidal current over a cycle is zero, which is useless for describing heating. Instead we use the <b>root-mean-square (rms)</b> value: the steady current that would produce the same heating in a resistor. Since the average of \(\sin^2\) is ½, \[I_{rms} = \frac{I_0}{\sqrt2}\approx0.707I_0,\qquad V_{rms} = \frac{V_0}{\sqrt2}\] Meters and ratings (e.g. "220 V") give rms values. The average over a half cycle is \(\dfrac{2I_0}{\pi}\approx0.637I_0\).`,
      { ex: { q: R`The mains supply is 220 V rms. Find its peak value. A current has a peak of 10 A; find its rms value.`,
        steps: [R`\(V_0 = \sqrt2\times220\).`, R`\(I_{rms} = 10/\sqrt2\).`], ans: R`≈ 311 V; ≈ 7.07 A` } },
      { check: { q: R`Why does a 220 V AC supply give the same heating as 220 V DC in a heater?`, ans: R`Because 220 V is the rms value, defined to give the same heating as that steady voltage.` } }
    ] },

    { h: R`Phasors`, t: [5], blocks: [
      R`A sinusoidal quantity can be represented by a <b>phasor</b>: an arrow of length equal to the peak value, rotating anticlockwise at angular speed ω. Its projection on the vertical axis gives the instantaneous value \(V_0\sin\omega t\). Phasors of the same frequency rotate together, so the angles between them (phase differences) stay fixed, and voltages can be added like vectors.`,
      { fig: figPhasor, cap: R`A rotating phasor of length V₀ traces out the sine wave as its projection.` },
      { check: { q: R`Two voltages of the same frequency have phasors at right angles, with peaks 3 V and 4 V. What is the peak of their sum?`, ans: R`5 V (adding the phasors like perpendicular vectors).` } }
    ] },

    { h: R`AC through a resistor, an inductor and a capacitor`, t: [6], blocks: [
      { fig: figRLC3, cap: R`Phasor diagrams for a resistor, an inductor and a capacitor, with the current along the horizontal axis.` },
      { table: { head: [R`Element`, R`Opposition`, R`Phase of V relative to I`, R`Average power`], rows: [
        [R`Resistor R`, R`R`, R`in phase`, R`\(V_{rms}I_{rms}\)`],
        [R`Inductor L`, R`<b>inductive reactance</b> \(X_L = \omega L\)`, R`V leads I by 90°`, R`zero`],
        [R`Capacitor C`, R`<b>capacitive reactance</b> \(X_C = \dfrac{1}{\omega C}\)`, R`V lags I by 90°`, R`zero`]] } },
      { derive: R`Why an inductor's voltage leads`, steps: [
        R`For \(i = I_0\sin\omega t\) through L: \(v = L\dfrac{di}{dt} = \omega LI_0\cos\omega t = \omega LI_0\sin(\omega t + \pi/2)\).`,
        R`So \(V_0 = (\omega L)I_0\) and v leads i by π/2. For a capacitor, \(i = C\dfrac{dv}{dt}\) gives \(I_0 = \omega CV_0\), with v lagging by π/2.`
      ] },
      { fig: figX, cap: R`\(X_L\) rises with frequency (an inductor blocks high frequencies); \(X_C\) falls with frequency (a capacitor blocks DC and passes high frequencies). They are equal at the resonant frequency \(f_0\).` },
      { ex: { q: R`Find the reactance of a 0.1 H inductor and a 100 μF capacitor at 50 Hz.`,
        steps: [R`\(X_L = 2\pi\times50\times0.1\).`, R`\(X_C = \dfrac{1}{2\pi\times50\times10^{-4}}\).`], ans: R`≈ 31.4 Ω and ≈ 31.8 Ω` } },
      { tip: R`Memory aid: "CIVIL": in a <b>C</b>apacitor, <b>I</b> leads <b>V</b>; <b>V</b> leads <b>I</b> in an inductor (<b>L</b>).` },
      { check: { q: R`What is the reactance of a capacitor to DC?`, ans: R`Infinite (ω = 0), so a capacitor blocks steady current.` } }
    ] },

    { h: R`Series LCR circuit: impedance and phase angle`, t: [7], blocks: [
      R`In a series LCR circuit, the same current flows through every element, but the voltages across them are out of phase, so they add as phasors, not as numbers.`,
      { fig: figLCR, cap: R`A series LCR circuit and its phasor diagram: \(V_R\) is in phase with I, while \(V_L\) and \(V_C\) point in opposite directions perpendicular to it.` },
      { derive: R`Impedance`, steps: [
        R`\(V_R = IR\), \(V_L = IX_L\), \(V_C = IX_C\). V_L and V_C are opposite, so their net is \(I(X_L - X_C)\), perpendicular to V_R.`,
        R`\(V = \sqrt{V_R^2 + (V_L - V_C)^2} = I\sqrt{R^2 + (X_L - X_C)^2}\).`,
        R`<b>Impedance:</b> \[Z = \sqrt{R^2 + (X_L - X_C)^2},\qquad \tan\varphi = \frac{X_L - X_C}{R}\] If \(X_L > X_C\), the voltage leads the current (inductive circuit); if \(X_C > X_L\), it lags (capacitive).`
      ] },
      { ex: { q: R`A series circuit has R = 30 Ω, X_L = 80 Ω and X_C = 40 Ω across 200 V rms. Find the impedance, current, phase angle and the voltage across each element.`,
        steps: [R`\(Z = \sqrt{30^2 + 40^2} = 50\) Ω; \(I = 200/50 = 4\) A.`, R`tan φ = 40/30, so φ ≈ 53° (voltage leads).`, R`V_R = 120 V, V_L = 320 V, V_C = 160 V.`], ans: R`50 Ω; 4 A; 53°; 120 V, 320 V, 160 V (V_L exceeds the supply voltage!)` } },
      { mistake: R`Adding the voltages across R, L and C arithmetically. 120 + 320 + 160 ≠ 200: they must be added as phasors.` },
      { check: { q: R`In a series LCR circuit, can the voltage across the inductor be larger than the supply voltage?`, ans: R`Yes: V_L and V_C partly cancel, so each can exceed the supply voltage, especially near resonance.` } }
    ] },

    { h: R`Resonance`, t: [7], blocks: [
      R`As the frequency of the supply is varied, the impedance is smallest when \(X_L = X_C\). Then Z = R, the current is largest (V/R), and current and voltage are in phase. This is <b>series resonance</b>, at \[\omega_0 = \frac{1}{\sqrt{LC}},\qquad f_0 = \frac{1}{2\pi\sqrt{LC}}\]`,
      { fig: figRes, cap: R`Current against frequency: the peak at ω₀ is tall and sharp for a small resistance and broad for a large one.` },
      R`Resonance is how a radio or TV tuner picks one station out of many: turning the knob changes C until \(f_0\) matches the station's frequency, and only that signal produces a large current.`,
      { ex: { q: R`A circuit has L = 0.1 H and C = 10 μF. Find its resonant angular frequency and frequency.`,
        steps: [R`\(\omega_0 = 1/\sqrt{0.1\times10^{-5}} = 1000\) rad/s; f₀ = ω₀/2π.`], ans: R`1000 rad/s; ≈ 159 Hz` } },
      { check: { q: R`What is the power factor of a series LCR circuit at resonance?`, ans: R`1 (φ = 0, the circuit behaves like a pure resistor).` } }
    ] },

    { h: R`Sharpness of resonance and quality factor`, t: [8], blocks: [
      R`How sharp the resonance peak is matters for tuning: a sharp peak picks out one frequency cleanly. It is measured by the <b>quality factor</b> \[Q = \frac{\omega_0L}{R} = \frac{1}{\omega_0CR} = \frac1R\sqrt{\frac LC}\]`,
      R`The <b>bandwidth</b> is the range of frequencies over which the power is at least half its peak value (current at least \(I_{max}/\sqrt2\)): \(\Delta\omega = \omega_2 - \omega_1 = \dfrac RL\), so \(Q = \dfrac{\omega_0}{\Delta\omega}\). A large Q means a narrow, sharp peak. At resonance, the voltage across L (or C) is Q times the supply voltage.`,
      { ex: { q: R`For L = 0.1 H, C = 10 μF and R = 10 Ω, find Q and the bandwidth.`,
        steps: [R`\(Q = \dfrac{\omega_0L}{R} = \dfrac{1000\times0.1}{10}\).`, R`\(\Delta\omega = R/L = 100\) rad/s.`], ans: R`Q = 10; Δω = 100 rad/s` } },
      { check: { q: R`To make a tuner more selective, should R be increased or decreased?`, ans: R`Decreased: Q = ω₀L/R increases and the peak becomes sharper.` } }
    ] },

    { h: R`Power in AC circuits`, t: [9], blocks: [
      { derive: R`Average power`, steps: [
        R`With \(v = V_0\sin\omega t\) and \(i = I_0\sin(\omega t - \varphi)\), the instantaneous power is \(p = vi = V_0I_0\sin\omega t\sin(\omega t - \varphi)\).`,
        R`Averaging over a cycle: \[P = \frac{V_0I_0}{2}\cos\varphi = V_{rms}I_{rms}\cos\varphi\]`,
        R`cos φ is the <b>power factor</b>. For a series LCR circuit, \(\cos\varphi = R/Z\) and \(P = I_{rms}^2R\): only the resistor consumes power.`
      ] },
      { table: { head: [R`Circuit`, R`φ`, R`Power factor`, R`Power`], rows: [
        [R`Pure resistor`, R`0`, R`1`, R`\(V_{rms}I_{rms}\)`], [R`Pure inductor or capacitor`, R`90°`, R`0`, R`0`], [R`LCR at resonance`, R`0`, R`1`, R`maximum`]] } },
      R`<b>Wattless current.</b> The current can be split into a component \(I_{rms}\cos\varphi\) in phase with the voltage, which carries power, and a component \(I_{rms}\sin\varphi\) at 90°, which carries no average power: the <b>wattless current</b>. A <b>choke coil</b> (an inductor with tiny resistance) limits AC current in tube lights while wasting almost no energy, unlike a resistor.`,
      { ex: { q: R`For the circuit in the impedance example (200 V, 4 A, φ = 53°), find the power factor and the power consumed.`,
        steps: [R`cos φ = R/Z = 30/50 = 0.6.`, R`P = 200 × 4 × 0.6 (check: I²R = 16 × 30).`], ans: R`0.6; 480 W` } },
      { tip: R`Industries add capacitors in parallel with large motors (which are inductive) to raise the power factor towards 1, reducing the current, and therefore the losses, in supply lines.` },
      { check: { q: R`A pure inductor connected to AC draws current. Does it consume energy?`, ans: R`No average energy: it stores energy for a quarter cycle and returns it in the next.` } }
    ] },

    { h: R`The AC generator`, t: [10], blocks: [
      R`An <b>AC generator</b> (alternator) converts mechanical energy into electrical energy. A coil of N turns and area A is rotated at angular speed ω in a magnetic field B (by a turbine driven by steam, water or wind). Its ends connect through <b>slip rings</b> and carbon <b>brushes</b> to the external circuit.`,
      { fig: figGenerator, cap: R`AC generator: as the coil rotates, the flux through it changes sinusoidally, inducing an alternating emf.` },
      R`With the flux through the coil \(NBA\cos\omega t\), the emf is \[\varepsilon = NBA\omega\sin\omega t = \varepsilon_0\sin\omega t\] It is maximum when the plane of the coil is <b>parallel</b> to the field (flux zero but changing fastest) and zero when the coil faces the field (flux maximum).`,
      { ex: { q: R`A 100-turn coil of area 0.01 m² rotates at 50 rev/s in a 0.5 T field. Find the peak emf.`,
        steps: [R`ω = 2π × 50 ≈ 314 rad/s.`, R`\(\varepsilon_0 = NBA\omega = 100\times0.5\times0.01\times314\).`], ans: R`≈ 157 V` } },
      { check: { q: R`If the speed of rotation of a generator is doubled, what happens to the peak emf and the frequency?`, ans: R`Both double.` } }
    ] },

    { h: R`The transformer`, t: [10], blocks: [
      R`A <b>transformer</b> changes an alternating voltage to a higher or lower value. Two coils, the <b>primary</b> (N_p turns) and <b>secondary</b> (N_s turns), are wound on a common laminated soft-iron core, which carries the same changing flux through both.`,
      { fig: figTrans, cap: R`A transformer: the changing flux in the core links both coils. Here \(N_s > N_p\), so the voltage is stepped up.` },
      { derive: R`Transformer equations`, steps: [
        R`Each turn has the same rate of change of flux dΦ/dt, so \(V_p = N_p\dfrac{d\Phi}{dt}\) and \(V_s = N_s\dfrac{d\Phi}{dt}\).`,
        R`\[\frac{V_s}{V_p} = \frac{N_s}{N_p}\]`,
        R`For an ideal (100% efficient) transformer, power in = power out: \(V_pI_p = V_sI_s\), so \(\dfrac{I_s}{I_p} = \dfrac{N_p}{N_s}\). Stepping the voltage up steps the current down.`
      ] },
      { points: [R`<b>Step-up</b> (N_s > N_p) at power stations; <b>step-down</b> (N_s < N_p) near homes and in phone chargers.`, R`<b>Energy losses:</b> copper loss (I²R heating of the windings), eddy currents in the core (reduced by lamination), hysteresis loss (reduced by soft iron), and flux leakage. Large transformers are about 99% efficient.`, R`A transformer does not work on steady DC: the flux would not change.`] },
      { ex: { q: R`A phone charger transformer has 2000 primary turns and 100 secondary turns on 220 V mains. Find the output voltage, and the primary current when the secondary supplies 2 A (ideal transformer).`,
        steps: [R`\(V_s = 220\times\dfrac{100}{2000}\).`, R`\(I_p = I_s\dfrac{N_s}{N_p} = 2\times\dfrac{100}{2000}\).`], ans: R`11 V; 0.1 A` } },
      { ex: { q: R`Why is power transmitted at high voltage? Compare the line loss for 10 kW sent at 220 V and at 22 kV through lines of 0.5 Ω.`,
        steps: [R`At 220 V: I ≈ 45.5 A, loss = I²R ≈ 1033 W (over 10%).`, R`At 22 kV: I ≈ 0.455 A, loss ≈ 0.10 W.`], ans: R`Raising the voltage 100 times cuts the loss 10 000 times` } },
      { check: { q: R`Does a step-up transformer violate energy conservation?`, ans: R`No: the voltage goes up but the current goes down in the same ratio, so the power is unchanged (or slightly less).` } }
    ] }
  ],
  summary: [
    R`Flux \(\Phi = BA\cos\theta\) (Wb). Faraday: \(\varepsilon = -N\,d\Phi/dt\); charge \(\Delta q = N\Delta\Phi/R\).`,
    R`Lenz: induced current opposes the change; consequence of energy conservation.`,
    R`Motional emf Blv; force \(B^2l^2v/R\); rotating rod \(\frac12B\omega l^2\); rotating coil \(NBA\omega\sin\omega t\).`,
    R`Eddy currents: damping, braking, induction heating; reduced by lamination.`,
    R`Self-inductance \(\varepsilon = -L\,di/dt\), solenoid \(L = \mu_0n^2Al\); mutual \(\varepsilon_2 = -M\,dI_1/dt\), \(M = \mu_0n_1n_2Al\). Energy \(\frac12LI^2\), density \(B^2/2\mu_0\).`,
    R`RC: \(q = CE(1 - e^{-t/RC})\), τ = RC. LR: \(i = \frac ER(1 - e^{-Rt/L})\), τ = L/R. LC: \(\omega = 1/\sqrt{LC}\).`,
    R`AC: \(I_{rms} = I_0/\sqrt2\); half-cycle average \(2I_0/\pi\). Phasors add like vectors.`,
    R`X_L = ωL (V leads I by 90°); X_C = 1/ωC (V lags by 90°).`,
    R`Series LCR: \(Z = \sqrt{R^2 + (X_L - X_C)^2}\), \(\tan\varphi = (X_L - X_C)/R\). Resonance \(\omega_0 = 1/\sqrt{LC}\), Z = R.`,
    R`\(Q = \omega_0L/R = \frac1R\sqrt{L/C}\); bandwidth R/L.`,
    R`Power \(P = V_{rms}I_{rms}\cos\varphi\); power factor R/Z; wattless current \(I_{rms}\sin\varphi\).`,
    R`Generator \(\varepsilon_0 = NBA\omega\). Transformer \(V_s/V_p = N_s/N_p = I_p/I_s\); losses: copper, eddy, hysteresis, flux leakage.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §13.1 Faraday's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/13-1-faradays-law' },
    { t: R`OpenStax University Physics Vol. 2, §13.2 Lenz's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/13-2-lenzs-law' },
    { t: R`OpenStax University Physics Vol. 2, §13.3 Motional Emf`, url: 'https://openstax.org/books/university-physics-volume-2/pages/13-3-motional-emf' },
    { t: R`OpenStax University Physics Vol. 2, §13.5 Eddy Currents`, url: 'https://openstax.org/books/university-physics-volume-2/pages/13-5-eddy-currents' },
    { t: R`OpenStax University Physics Vol. 2, §14.2 Self-Inductance and Inductors`, url: 'https://openstax.org/books/university-physics-volume-2/pages/14-2-self-inductance-and-inductors' },
    { t: R`OpenStax University Physics Vol. 2, §14.4 RL Circuits`, url: 'https://openstax.org/books/university-physics-volume-2/pages/14-4-rl-circuits' },
    { t: R`OpenStax University Physics Vol. 2, §14.5 Oscillations in an LC Circuit`, url: 'https://openstax.org/books/university-physics-volume-2/pages/14-5-oscillations-in-an-lc-circuit' },
    { t: R`OpenStax University Physics Vol. 2, §10.5 RC Circuits`, url: 'https://openstax.org/books/university-physics-volume-2/pages/10-5-rc-circuits' },
    { t: R`OpenStax University Physics Vol. 2, §15.2 Simple AC Circuits`, url: 'https://openstax.org/books/university-physics-volume-2/pages/15-2-simple-ac-circuits' },
    { t: R`OpenStax University Physics Vol. 2, §15.3 RLC Series Circuits with AC`, url: 'https://openstax.org/books/university-physics-volume-2/pages/15-3-rlc-series-circuits-with-ac' },
    { t: R`OpenStax University Physics Vol. 2, §15.4 Power in an AC Circuit`, url: 'https://openstax.org/books/university-physics-volume-2/pages/15-4-power-in-an-ac-circuit' },
    { t: R`OpenStax University Physics Vol. 2, §15.5 Resonance in an AC Circuit`, url: 'https://openstax.org/books/university-physics-volume-2/pages/15-5-resonance-in-an-ac-circuit' },
    { t: R`OpenStax University Physics Vol. 2, §15.6 Transformers`, url: 'https://openstax.org/books/university-physics-volume-2/pages/15-6-transformers' }
  ]
});
})();
