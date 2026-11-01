// Book chapter: Current Electricity. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figDrift = (function () {
  var p = [D.rect(20, 40, 380, 90, { color: 'm', fill: 'soft', w: 1.6, r: 6 })];
  for (var x = 45; x < 400; x += 40) for (var y = 58; y < 130; y += 30) p.push(D.circle(x, y, 4, { color: 'm', w: 1 }));
  var path = [[350, 90], [305, 58], [318, 116], [262, 80], [240, 118], [190, 56], [160, 104], [100, 72]];
  p.push(D.poly(path, { color: 'b', w: 1.8 }), D.dot(350, 90, { color: 'b', r: 4, open: true }), D.dot(100, 72, { color: 'b', r: 5 }));
  p.push(D.arrow(150, 22, 270, 22, { color: 'o', w: 2, label: 'E', lx: 75, ly: 0 }));
  p.push(D.arrow(310, 152, 200, 152, { color: 'b', w: 2, label: 'v_d', lx: -72, ly: 0 }), D.text(255, 166, 'net drift of the electron', { size: 11, color: 'b', math: false }));
  return D.svg(420, 175, p, 'Random motion of an electron with a slow drift opposite to the field');
})();

var figSlice = (function () {
  var p = [D.line(120, 40, 300, 40, { color: 'k', w: 1.6 }), D.line(120, 130, 300, 130, { color: 'k', w: 1.6 }), D.ellipse(120, 85, 14, 45, { color: 'c', fill: 'soft', w: 1.6 }), D.ellipse(300, 85, 14, 45, { color: 'k', w: 1.2, dash: '4 3' })];
  [[160, 60], [190, 100], [215, 70], [245, 110], [270, 62], [150, 112], [230, 90], [280, 95]].forEach(function (q) { p.push(D.dot(q[0], q[1], { color: 'b', r: 3.5 })); });
  p.push(D.text(96, 85, 'A', { math: true, color: 'c' }), D.arrow(120, 150, 300, 150, { color: 'm', w: 1.1, head: 6, both: true, label: 'v_d Δt', ly: 12, size: 12 }));
  p.push(D.arrow(280, 22, 200, 22, { color: 'b', w: 1.8, label: 'electrons drift', lx: -95, ly: 0, math: false, size: 11 }), D.arrow(330, 85, 390, 85, { color: 'r', w: 2.2, label: 'I', ly: -12 }));
  return D.svg(400, 170, p, 'All the free electrons within v_d Δt of the end cross it in time Δt');
})();

function ivPlot(f, x, y, cap, label) {
  return D.plot({ w: 200, h: 170, x: x, y: y, xlabel: 'V', ylabel: 'I', xticks: [], yticks: [], fns: [{ f: f, color: 'c', steps: 300 }], label: label });
}
var figIV = D.row([
  [ivPlot(function (v) { return 0.8 * v; }, [0, 5], [0, 4.5], '', 'ohmic I-V line'), 'ohmic conductor (metal wire)'],
  [ivPlot(function (v) { return 1.8 * Math.sqrt(v); }, [0, 5], [0, 4.5], '', 'filament lamp I-V curve'), 'filament lamp (R rises as it heats)'],
  [ivPlot(function (v) { return v < 0 ? -0.08 : 0.04 * (Math.exp(1.9 * v) - 1); }, [-3, 3], [-0.8, 4.5], '', 'diode I-V curve'), 'p-n diode (one-way)']
]);

var figRhoT = D.row([
  [D.plot({ w: 200, h: 170, x: [0, 5], y: [0, 3], xlabel: 'T', ylabel: 'ρ', xticks: [], yticks: [], fns: [{ f: function (t) { return 0.15 + 0.03 * t * t * t / (1 + 0.1 * t * t) + 0.25 * t; }, color: 'r' }], label: 'resistivity of a metal' }), 'metal (copper): rises'],
  [D.plot({ w: 200, h: 170, x: [0, 5], y: [0, 3], xlabel: 'T', ylabel: 'ρ', xticks: [], yticks: [], fns: [{ f: function (t) { return 0.35 * Math.exp(1.6 / t); }, from: 0.7, to: 5, color: 'b' }], label: 'resistivity of a semiconductor' }), 'semiconductor: falls'],
  [D.plot({ w: 200, h: 170, x: [0, 5], y: [0, 3], xlabel: 'T', ylabel: 'ρ', xticks: [[1.6, 'T_c']], yticks: [], fns: [{ f: function () { return 0; }, from: 0, to: 1.6, color: 'g', w: 3 }, { f: function (t) { return 0.9 + 0.3 * t; }, from: 1.6, to: 5, color: 'g' }], segs: [{ x1: 1.6, y1: 0, x2: 1.6, y2: 1.38, color: 'g', w: 2 }], label: 'resistivity of a superconductor' }), 'superconductor: zero below T<sub>c</sub>']
]);

var figColour = D.svg(400, 130, [
  D.line(20, 55, 380, 55, { color: 'm', w: 2.4 }),
  '<rect x="100" y="30" width="200" height="50" rx="18" fill="#e3cfa4" stroke="#8a7350" stroke-width="1.5"/>',
  '<rect x="125" y="30" width="14" height="50" fill="#f2c200"/>', '<rect x="155" y="30" width="14" height="50" fill="#7b3fb5"/>',
  '<rect x="185" y="30" width="14" height="50" fill="#d62828"/>', '<rect x="255" y="30" width="14" height="50" fill="#c9a227"/>',
  D.text(132, 96, '4', { size: 12, bold: true, math: false }), D.text(162, 96, '7', { size: 12, bold: true, math: false }),
  D.text(194, 96, '× 10²', { size: 12, bold: true, math: false }), D.text(262, 96, '± 5%', { size: 12, bold: true, math: false }),
  D.text(147, 114, 'digits', { size: 10, color: 'm', math: false }), D.text(194, 114, 'multiplier', { size: 10, color: 'm', math: false }), D.text(262, 114, 'tolerance', { size: 10, color: 'm', math: false }),
  D.text(200, 14, '47 × 10² Ω = 4.7 kΩ ± 5%', { size: 13, color: 'k', math: false })
], 'Colour code of a carbon resistor');

var figSP = D.row([
  [D.svg(220, 110, [D.res(10, 50, 80, 50, { label: 'R₁', math: false }), D.res(80, 50, 150, 50, { label: 'R₂', math: false }), D.res(150, 50, 215, 50, { label: 'R₃', math: false }),
    D.arrow(20, 80, 60, 80, { color: 'r', w: 1.6, head: 6, label: 'I', ly: -9, size: 12 }), D.text(130, 90, 'same current, voltages add', { size: 11, color: 'm', math: false })], 'resistors in series'), 'series: R = R₁ + R₂ + R₃'],
  [D.svg(220, 150, [D.line(10, 75, 40, 75, { w: 1.8 }), D.line(180, 75, 210, 75, { w: 1.8 }), D.line(40, 25, 40, 125, { w: 1.8 }), D.line(180, 25, 180, 125, { w: 1.8 }),
    D.res(40, 25, 180, 25, { label: 'R₁', math: false, ly: -13 }), D.res(40, 75, 180, 75, { label: 'R₂', math: false, ly: -13 }), D.res(40, 125, 180, 125, { label: 'R₃', math: false, ly: -13 }),
    D.dot(40, 75, { r: 3 }), D.dot(180, 75, { r: 3 }), D.text(110, 145, 'same voltage, currents add', { size: 11, color: 'm', math: false })], 'resistors in parallel'), 'parallel: 1/R = 1/R₁ + 1/R₂ + 1/R₃']
]);

var figLadder = (function () {
  var p = [D.line(20, 110, 360, 110, { w: 1.8 })];
  [[20, 100], [100, 180], [180, 260], [260, 340]].forEach(function (s) { p.push(D.res(s[0], 30, s[1], 30, { label: 'R', ly: -16 })); });
  [100, 180, 260, 340].forEach(function (x) { p.push(D.res(x, 30, x, 110, { label: 'R', lx: 16, ly: 0 }), D.dot(x, 30, { r: 3 }), D.dot(x, 110, { r: 3 })); });
  p.push(D.line(340, 30, 360, 30, { w: 1.8 }), D.text(385, 70, '…', { size: 20, bold: true, raw: true }));
  p.push(D.dot(20, 30, { r: 4, open: true }), D.dot(20, 110, { r: 4, open: true }), D.text(8, 30, 'A', { math: true }), D.text(8, 110, 'B', { math: true }));
  return D.svg(410, 130, p, 'An infinite ladder of equal resistors');
})();

var figCell = D.svg(340, 200, [
  D.rect(70, 12, 180, 56, { color: 'm', w: 1.1, dash: '5 4', r: 6 }), D.text(160, 84, 'real cell: emf E with internal resistance r', { size: 11, color: 'm', math: false }),
  D.line(30, 40, 80, 40, { w: 1.8 }), D.cell(80, 40, 150, 40, { label: 'E', ly: -20 }), D.res(150, 40, 240, 40, { label: 'r', ly: -18 }), D.line(240, 40, 300, 40, { w: 1.8 }),
  D.line(300, 40, 300, 160, { w: 1.8 }), D.res(300, 160, 30, 160, { label: 'R', ly: 20 }), D.line(30, 160, 30, 40, { w: 1.8 }),
  D.arrow(300, 95, 300, 125, { color: 'r', w: 2, head: 7, label: 'I', lx: 12, ly: 0 })
], 'A cell with internal resistance connected to an external resistor');

var figVI = D.plot({
  w: 360, h: 210, x: [0, 5], y: [0, 5], xlabel: 'I', ylabel: 'V', xticks: [[4, 'E/r']], yticks: [[4, 'E']],
  fns: [{ f: function (i) { return 4 - i; }, from: 0, to: 4, color: 'c', label: 'V = E − Ir (slope −r)', lx: 1.9, ly: 2.7, math: false }],
  label: 'Terminal voltage of a cell against current'
});

var figPR = D.plot({
  w: 380, h: 200, x: [0, 6], y: [0, 1.25], xlabel: 'R', ylabel: 'P', xticks: [[1, 'r']], yticks: [[1, 'E²/4r']],
  fns: [{ f: function (x) { return 4 * x / Math.pow(1 + x, 2); }, color: 'g' }], guides: [[1, 1]],
  label: 'Power delivered to the external resistor against R'
});

var figCells = D.row([
  [D.svg(220, 120, [D.cell(15, 40, 75, 40, { label: 'E, r', math: false }), D.cell(75, 40, 135, 40, { label: 'E, r', math: false }), D.cell(135, 40, 195, 40, { label: 'E, r', math: false }),
    D.line(15, 40, 15, 95, { w: 1.8 }), D.line(195, 40, 195, 95, { w: 1.8 }), D.res(195, 95, 15, 95, { label: 'R', ly: 18 })], 'cells in series'), 'series: nE and nr'],
  [D.svg(220, 160, [D.line(40, 20, 40, 135, { w: 1.8 }), D.line(170, 20, 170, 135, { w: 1.8 }),
    D.cell(40, 20, 170, 20, { label: 'E, r', math: false, lx: 38, ly: -9, size: 11 }), D.cell(40, 55, 170, 55, { label: 'E, r', math: false, lx: 38, ly: -9, size: 11 }), D.cell(40, 90, 170, 90, { label: 'E, r', math: false, lx: 38, ly: -9, size: 11 }),
    D.res(170, 135, 40, 135, { label: 'R', ly: 18 })], 'cells in parallel'), 'parallel: E and r/m']
]);

var figJunction = D.svg(240, 160, [
  D.arrow(20, 30, 112, 74, { color: 'r', w: 2, head: 8, label: 'I₁', lx: -8, ly: -14, math: false }),
  D.arrow(20, 130, 112, 86, { color: 'r', w: 2, head: 8, label: 'I₂', lx: -8, ly: 14, math: false }),
  D.arrow(128, 80, 220, 80, { color: 'g', w: 2, head: 8, label: 'I₃', ly: -12, math: false }),
  D.dot(120, 80, { r: 5 }), D.text(120, 150, 'I₁ + I₂ = I₃', { size: 13, color: 'k', math: false })
], 'Junction rule: current in equals current out');

var figKirch = D.svg(400, 210, [
  D.line(50, 30, 330, 30, { w: 1.8 }), D.line(50, 180, 330, 180, { w: 1.8 }),
  D.res(50, 30, 50, 100, { label: '2 Ω', math: false }), D.cell(50, 110, 50, 150, { label: '12 V', math: false, lx: -34 }), D.line(50, 100, 50, 110, { w: 1.8 }), D.line(50, 150, 50, 180, { w: 1.8 }),
  D.res(190, 30, 190, 180, { label: '4 Ω', math: false }),
  D.res(330, 30, 330, 100, { label: '2 Ω', math: false, lx: 24 }), D.cell(330, 110, 330, 150, { label: '6 V', math: false, lx: 32 }), D.line(330, 100, 330, 110, { w: 1.8 }), D.line(330, 150, 330, 180, { w: 1.8 }),
  D.dot(190, 30, { r: 4 }), D.dot(190, 180, { r: 4 }), D.text(190, 16, 'A', { math: true }), D.text(190, 198, 'B', { math: true }),
  D.arrow(70, 90, 70, 55, { color: 'r', w: 1.8, head: 7, label: 'I₁', lx: 14, ly: 0, math: false }),
  D.arrow(210, 85, 210, 125, { color: 'r', w: 1.8, head: 7, label: 'I₂', lx: 14, ly: 0, math: false }),
  D.arrow(310, 55, 310, 90, { color: 'r', w: 1.8, head: 7, label: 'I₃', lx: -14, ly: 0, math: false })
], 'A two-loop circuit solved with Kirchhoff\'s rules');

var figWheat = D.svg(360, 250, [
  D.res(60, 120, 180, 40, { label: 'P', ly: -16, lx: -10 }), D.res(180, 40, 300, 120, { label: 'Q', ly: -16, lx: 10 }),
  D.res(60, 120, 180, 200, { label: 'R', ly: 16, lx: -12 }), D.res(180, 200, 300, 120, { label: 'S', ly: 16, lx: 12 }),
  D.meter(180, 40, 180, 200, { s: 'G' }),
  D.dot(60, 120, { r: 4 }), D.dot(180, 40, { r: 4 }), D.dot(300, 120, { r: 4 }), D.dot(180, 200, { r: 4 }),
  D.text(46, 108, 'A', { math: true }), D.text(180, 24, 'B', { math: true }), D.text(316, 108, 'C', { math: true }), D.text(196, 214, 'D', { math: true }),
  D.line(60, 120, 20, 120, { w: 1.8 }), D.line(20, 120, 20, 235, { w: 1.8 }), D.line(300, 120, 340, 120, { w: 1.8 }), D.line(340, 120, 340, 235, { w: 1.8 }),
  D.line(20, 235, 150, 235, { w: 1.8 }), D.cell(150, 235, 210, 235), D.line(210, 235, 340, 235, { w: 1.8 })
], 'Wheatstone bridge');

var figMetre = D.svg(420, 225, [
  D.line(30, 165, 390, 165, { color: 'o', w: 3 }), D.text(42, 152, '0', { size: 11, color: 'm', math: false }), D.text(366, 152, '100 cm', { size: 11, color: 'm', math: false }),
  D.line(30, 165, 30, 90, { w: 4 }), D.line(30, 90, 120, 90, { w: 4 }), D.res(120, 90, 190, 90, { label: 'R', ly: -18 }), D.line(190, 90, 230, 90, { w: 4 }),
  D.res(230, 90, 300, 90, { label: 'S', ly: -18 }), D.line(300, 90, 390, 90, { w: 4 }), D.line(390, 90, 390, 165, { w: 4 }),
  D.meter(210, 92, 170, 162, { s: 'G' }), D.dot(170, 165, { r: 5, color: 'r' }), D.text(158, 150, 'J', { math: true, color: 'r' }),
  D.arrow(30, 185, 170, 185, { color: 'm', w: 1.1, head: 6, both: true, label: 'l', ly: -8 }), D.arrow(170, 185, 390, 185, { color: 'm', w: 1.1, head: 6, both: true, label: '100 − l', ly: -8, math: false, size: 12 }),
  D.line(30, 165, 15, 165, { w: 1.8 }), D.line(15, 165, 15, 212, { w: 1.8 }), D.line(15, 212, 180, 212, { w: 1.8 }), D.cell(180, 212, 240, 212), D.line(240, 212, 405, 212, { w: 1.8 }), D.line(405, 212, 405, 165, { w: 1.8 }), D.line(405, 165, 390, 165, { w: 1.8 })
], 'Metre bridge');

// ---------- chapter text ----------
JEE.book('physics', 'current-electricity', {
  intro: [
    R`In electrostatics, charges sat still. Connect a battery to a wire, and charges start to flow: an <b>electric current</b>. Currents light our homes, run every phone and computer, and carry signals along our nerves.`,
    R`This chapter explains what a current is at the level of electrons, why conductors resist it (Ohm's law, resistivity and its temperature dependence), how resistors and cells combine, how electrical energy turns into heat, and how Kirchhoff's rules let us solve any circuit, including the Wheatstone and metre bridges used to measure resistance.`
  ],
  sections: [
    { h: R`Electric current`, t: [0], blocks: [
      R`<b>Electric current</b> is the rate of flow of charge through a cross-section: \[I = \frac{dq}{dt}\quad(\text{steady current: } I = q/t)\] Its SI unit is the <b>ampere</b> (A = C/s). By convention, the direction of current is the direction in which <b>positive</b> charges would move, so in a metal wire it is opposite to the actual flow of electrons.`,
      R`Current can be carried by electrons (metals), by positive and negative ions (electrolytes, the human body), by electrons and holes (semiconductors), or by electrons and ions together (gases in discharge tubes, lightning). Although current has a direction, it is a <b>scalar</b>: currents at a junction add as ordinary numbers, not as vectors.`,
      { ex: { q: R`A current of 2 A flows through a wire for 1 minute. How much charge passes, and how many electrons is that?`,
        steps: [R`\(q = It = 2\times60 = 120\) C.`, R`\(n = q/e = 120/1.6\times10^{-19}\).`], ans: R`120 C; 7.5 × 10²⁰ electrons` } },
      { ex: { q: R`The charge through a wire varies as \(q = 3t^2 + 2t\) coulombs. Find the current at t = 2 s.`,
        steps: [R`\(I = dq/dt = 6t + 2\).`], ans: R`14 A` } },
      { check: { q: R`Is current a vector? Why?`, ans: R`No. It has a direction along the wire, but currents do not add by the vector law (at a junction they simply add), so it is a scalar.` } }
    ] },

    { h: R`Current density and drift velocity`, t: [0], blocks: [
      R`The <b>current density</b> \(\vec J\) is the current per unit area perpendicular to the flow: \(J = I/A\) (unit A/m²). It is a vector, along the direction of current, and \(I = \int\vec J\cdot d\vec A\).`,
      R`In a metal, free electrons dart about randomly at about \(10^5\) m/s (their thermal speed), colliding with the vibrating ions. With no field, their average velocity is zero, so there is no current. When a field E is applied, each electron gets a tiny average velocity opposite to E between collisions: the <b>drift velocity</b> \(v_d\).`,
      { fig: figDrift, cap: R`An electron's path is a random zigzag, but in a field it slowly drifts opposite to E.` },
      { derive: R`Drift velocity and current`, steps: [
        R`Between collisions the electron accelerates: \(\vec a = -e\vec E/m\). If τ is the average time between collisions (the <b>relaxation time</b>), the average velocity gained is \[\vec v_d = -\frac{e\vec E}{m}\tau\]`,
        R`In a wire of cross-section A with n free electrons per unit volume, all electrons within a length \(v_d\Delta t\) cross a section in time Δt. Charge crossing = \(neAv_d\Delta t\).`,
        R`\[I = neAv_d\quad\text{and}\quad J = nev_d\]`
      ] },
      { fig: figSlice, cap: R`The electrons in a slice of length \(v_d\Delta t\) all pass through the end face in time Δt.` },
      { ex: { q: R`A copper wire of cross-section 1 mm² carries 1 A. Copper has 8.5 × 10²⁸ free electrons per m³. Find the drift velocity.`,
        steps: [R`\(v_d = \dfrac{I}{neA} = \dfrac{1}{8.5\times10^{28}\times1.6\times10^{-19}\times10^{-6}}\).`], ans: R`≈ 7.4 × 10⁻⁵ m/s, less than 0.1 mm/s (it would take about 4 hours to crawl 1 m)` } },
      R`If electrons drift so slowly, why does a bulb light the instant you flip the switch? Because the <b>electric field</b> travels along the wire at nearly the speed of light, and it sets all the electrons in the whole circuit drifting at once, like pushing water into a pipe that is already full.`,
      { check: { q: R`A wire's cross-section is halved at one point while the current stays the same. What happens to the drift velocity there?`, ans: R`It doubles (\(v_d = I/neA\)).` } }
    ] },

    { h: R`Mobility`, t: [0], blocks: [
      R`The <b>mobility</b> μ of a charge carrier is its drift speed per unit field: \[\mu = \frac{v_d}{E} = \frac{e\tau}{m}\quad(\text{unit: m}^2\,\text{V}^{-1}\,\text{s}^{-1})\] Carriers with longer relaxation times or smaller (effective) masses are more mobile. In semiconductors, electrons are more mobile than holes, which is why n-type devices are faster.`,
      R`In terms of mobility, \(I = neA\mu E\), and the conductivity is \(\sigma = ne\mu\).`,
      { ex: { q: R`For copper, \(\rho = 1.7\times10^{-8}\) Ω m and \(n = 8.5\times10^{28}\) m⁻³. Find the relaxation time and the mobility of its electrons.`,
        steps: [R`\[\tau = \frac{m}{ne^2\rho} = \frac{9.1\times10^{-31}}{8.5\times10^{28}\times(1.6\times10^{-19})^2\times1.7\times10^{-8}}\]`, R`\(\mu = e\tau/m\).`], ans: R`τ ≈ 2.5 × 10⁻¹⁴ s; μ ≈ 4.3 × 10⁻³ m² V⁻¹ s⁻¹` } },
      { check: { q: R`If the temperature of a metal rises, what happens to the relaxation time and mobility of its electrons?`, ans: R`Both decrease: the ions vibrate more and collisions become more frequent.` } }
    ] },

    { h: R`Ohm's law`, t: [1], blocks: [
      R`<b>Ohm's law:</b> at constant temperature (and other physical conditions), the current through a conductor is proportional to the potential difference across it: \[V = IR\] The constant R is the <b>resistance</b> (unit: ohm, Ω = V/A). Its reciprocal \(G = 1/R\) is the conductance (siemens, S).`,
      { derive: R`Ohm's law from the drift model`, steps: [
        R`\(I = neAv_d = neA\dfrac{eE\tau}{m}\), with \(E = V/l\) for a wire of length l.`,
        R`\(I = \dfrac{ne^2\tau A}{ml}V\), so \(V = \left(\dfrac{m}{ne^2\tau}\dfrac lA\right)I\).`,
        R`So \(R = \rho\dfrac lA\) with resistivity \(\rho = \dfrac{m}{ne^2\tau}\). In vector form, Ohm's law reads \(\vec J = \sigma\vec E\), where \(\sigma = 1/\rho\).`
      ] },
      { ex: { q: R`A 12 V battery drives 0.5 A through a heater coil. Find its resistance. What current would flow at 6 V (same temperature)?`,
        steps: [R`\(R = V/I = 12/0.5\).`, R`\(I = 6/24\).`], ans: R`24 Ω; 0.25 A` } },
      { mistake: R`Thinking V = IR is Ohm's law for every device. V = IR is the definition of resistance; Ohm's law is the statement that R stays constant as V changes, which is true only for ohmic conductors.` },
      { check: { q: R`Doubling the voltage across an ohmic resistor does what to the current?`, ans: R`Doubles it.` } }
    ] },

    { h: R`I–V characteristics: ohmic and non-ohmic conductors`, t: [3], blocks: [
      R`A graph of current against voltage shows whether a device obeys Ohm's law.`,
      { fig: figIV, cap: R`I–V graphs of an ohmic conductor (straight line through the origin), a filament lamp (curve bending towards the V axis) and a p-n diode (current flows in one direction only).` },
      { points: [
        R`<b>Ohmic:</b> metals and alloys at constant temperature: a straight line through the origin; the slope is 1/R.`,
        R`<b>Non-linear:</b> a filament lamp: as current heats the filament its resistance rises, so the graph bends.`,
        R`<b>Direction-dependent:</b> a p-n diode conducts easily one way and hardly at all the other way.`,
        R`<b>Negative resistance:</b> in some devices (e.g. GaAs, tunnel diodes) current decreases as voltage increases over a range.`,
        R`<b>Non-unique:</b> in some devices, the same voltage can give more than one current.`
      ] },
      R`For a non-ohmic device, we use the <b>static resistance</b> V/I at a point, or the <b>dynamic resistance</b> dV/dI (the reciprocal slope of the I–V curve).`,
      { check: { q: R`On an I–V graph, which of two ohmic resistors has the steeper line?`, ans: R`The smaller resistance (slope = 1/R).` } }
    ] },

    { h: R`Resistance and resistivity`, t: [2], blocks: [
      R`The resistance of a uniform wire is proportional to its length and inversely proportional to its cross-sectional area: \[R = \rho\frac lA\] The <b>resistivity</b> ρ (unit Ω m) is a property of the material alone (at a given temperature). Its reciprocal is the <b>conductivity</b> \(\sigma = 1/\rho\) (S/m).`,
      { table: { head: [R`Material`, R`Resistivity at 20 °C (Ω m)`, R`Type`], rows: [
        [R`Silver`, R`1.6 × 10⁻⁸`, R`conductor`], [R`Copper`, R`1.7 × 10⁻⁸`, R`conductor`], [R`Nichrome (alloy)`, R`≈ 1.0 × 10⁻⁶`, R`alloy, used in heaters`],
        [R`Germanium`, R`≈ 0.5`, R`semiconductor`], [R`Silicon`, R`≈ 2300`, R`semiconductor`], [R`Glass`, R`10¹⁰–10¹⁴`, R`insulator`]] } },
      { ex: { q: R`Find the resistance of a 10 m copper wire of cross-section 1 mm².`,
        steps: [R`\(R = \dfrac{1.7\times10^{-8}\times10}{10^{-6}}\).`], ans: R`0.17 Ω` } },
      { ex: { q: R`A wire is stretched to twice its length (its volume stays the same). How does its resistance change?`,
        steps: [R`Volume Al is constant, so if l doubles, A halves.`, R`\(R' = \rho\dfrac{2l}{A/2} = 4R\).`], ans: R`It becomes 4 times larger (R ∝ l² when stretched)` } },
      { tip: R`For a stretched wire, \(R\propto l^2\propto1/A^2\propto1/r^4\). A small percentage stretch x% raises R by about 2x%.` },
      { check: { q: R`Two wires of the same material have the same length; one has twice the diameter. Compare their resistances.`, ans: R`The thicker one has 4 times the area, so 1/4 of the resistance.` } }
    ] },

    { h: R`Colour code of carbon resistors`, t: [5], blocks: [
      R`Small carbon resistors are too tiny to print numbers on, so their values are shown by coloured bands. Reading from the end nearest a band: the first two bands are digits, the third is the power of ten (multiplier), and the fourth is the tolerance.`,
      { fig: figColour, cap: R`Yellow (4), violet (7), red (× 10²) and gold (± 5%): 4.7 kΩ ± 5%.` },
      { table: { head: [R`Colour`, R`Digit`, R`Multiplier`], rows: [
        [R`Black`, R`0`, R`10⁰`], [R`Brown`, R`1`, R`10¹`], [R`Red`, R`2`, R`10²`], [R`Orange`, R`3`, R`10³`], [R`Yellow`, R`4`, R`10⁴`],
        [R`Green`, R`5`, R`10⁵`], [R`Blue`, R`6`, R`10⁶`], [R`Violet`, R`7`, R`10⁷`], [R`Grey`, R`8`, R`10⁸`], [R`White`, R`9`, R`10⁹`]] } },
      R`Tolerance band: gold ±5%, silver ±10%, no band ±20%. A popular memory aid for the order is <b>"B B ROY of Great Britain had Very Good Wife"</b>: Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White.`,
      { ex: { q: R`A resistor has bands brown, black, orange, silver. Find its value.`,
        steps: [R`Digits 1, 0; multiplier 10³; tolerance ±10%.`], ans: R`10 kΩ ± 10%` } },
      { ex: { q: R`What colours mark a 220 Ω ± 5% resistor?`,
        steps: [R`22 × 10¹: red, red, brown; gold for ±5%.`], ans: R`Red, red, brown, gold` } },
      { check: { q: R`What is the value of a resistor marked green, blue, black, gold?`, ans: R`56 × 10⁰ = 56 Ω ± 5%.` } }
    ] },

    { h: R`Temperature dependence of resistance`, t: [7], blocks: [
      R`Over a moderate range of temperature, the resistivity of a metal increases roughly linearly: \[\rho_T = \rho_0[1 + \alpha(T - T_0)]\] where α is the <b>temperature coefficient of resistivity</b> (K⁻¹). The same relation holds for resistance, \(R_T = R_0[1 + \alpha\Delta T]\).`,
      { fig: figRhoT, cap: R`Resistivity against temperature for a metal, a semiconductor and a superconductor.` },
      { points: [
        R`<b>Metals:</b> α is positive (≈ 4 × 10⁻³ K⁻¹ for copper). Hotter ions vibrate more, so τ decreases and ρ = m/ne²τ increases.`,
        R`<b>Alloys</b> such as nichrome, manganin and constantan have very small α and high ρ, so they are used for standard resistors and heating elements.`,
        R`<b>Semiconductors and insulators:</b> α is negative. Heating frees many more charge carriers (n increases sharply), so ρ falls.`,
        R`<b>Superconductors:</b> below a critical temperature \(T_c\), the resistance of some materials falls to exactly zero (mercury at 4.2 K).`
      ] },
      { ex: { q: R`A copper coil has resistance 10 Ω at 20 °C. Find its resistance at 70 °C (α = 4 × 10⁻³ K⁻¹).`,
        steps: [R`\(R = 10[1 + 4\times10^{-3}\times50]\).`], ans: R`12 Ω` } },
      { ex: { q: R`A platinum resistance thermometer reads 100 Ω at 0 °C and 139 Ω at 100 °C. What is the temperature when it reads 119.5 Ω?`,
        steps: [R`The change is linear: \(t = \dfrac{119.5 - 100}{139 - 100}\times100\).`], ans: R`50 °C` } },
      { check: { q: R`Why does a bulb's filament draw a larger current just after switching on than later?`, ans: R`When cold, its resistance is much lower; as it heats up, R rises and the current falls.` } }
    ] },

    { h: R`Resistors in series and in parallel`, t: [6], blocks: [
      { fig: figSP, cap: R`Series resistors carry the same current; parallel resistors have the same voltage across them.` },
      { derive: R`Equivalent resistance`, steps: [
        R`<b>Series:</b> the same current I flows through each; voltages add: \(V = IR_1 + IR_2 + IR_3\), so \[R_s = R_1 + R_2 + R_3\]`,
        R`<b>Parallel:</b> the same voltage V across each; currents add: \(I = \dfrac{V}{R_1} + \dfrac{V}{R_2} + \dfrac{V}{R_3}\), so \[\frac1{R_p} = \frac1{R_1} + \frac1{R_2} + \frac1{R_3}\]`
      ] },
      R`The series equivalent is larger than the largest resistor; the parallel equivalent is smaller than the smallest. For two in parallel, \(R_p = \dfrac{R_1R_2}{R_1 + R_2}\) ("product over sum").`,
      { ex: { q: R`Resistors of 2 Ω, 3 Ω and 6 Ω are connected (a) in series (b) in parallel. Find the equivalent resistance in each case.`,
        steps: [R`(a) 2 + 3 + 6.`, R`(b) \(\frac12 + \frac13 + \frac16 = 1\).`], ans: R`(a) 11 Ω (b) 1 Ω` } },
      { points: [R`<b>Voltage divider</b> (series): \(V_1 = V\dfrac{R_1}{R_1 + R_2}\).`, R`<b>Current divider</b> (two in parallel): \(I_1 = I\dfrac{R_2}{R_1 + R_2}\); the smaller resistor takes the larger current.`] },
      { check: { q: R`What is the equivalent of n equal resistors R in parallel?`, ans: R`R/n.` } }
    ] },

    { h: R`Equivalent resistance of networks`, t: [6], blocks: [
      R`Many networks are not simply series or parallel. Useful techniques:`,
      { points: [
        R`<b>Redraw</b> the circuit, naming each junction; points joined by plain wire are the same point.`,
        R`<b>Symmetry:</b> points at the same potential can be joined (or separated) without changing anything, and a resistor between two equipotential points carries no current and can be removed.`,
        R`<b>Balanced Wheatstone bridge:</b> the middle resistor can be removed (see below).`,
        R`<b>Kirchhoff's rules</b> always work when nothing else does.`
      ] },
      { fig: figLadder, cap: R`An infinite ladder: adding one more section at the front does not change the resistance between A and B.` },
      { ex: { q: R`Find the resistance between A and B of the infinite ladder of identical resistors R.`,
        steps: [R`Call it x. The network after the first series R and shunt R is the same ladder, so \(x = R + \dfrac{Rx}{R + x}\).`, R`\(x^2 - Rx - R^2 = 0\), so \(x = \dfrac{1 + \sqrt5}{2}R\).`], ans: R`≈ 1.62 R` } },
      { ex: { q: R`Twelve equal resistors R form the edges of a cube. Find the resistance between opposite corners.`,
        steps: [R`By symmetry, current I entering splits into 3 equal parts (I/3), then each splits into 2 (I/6) through the middle 6 edges, then recombines into 3 (I/3).`, R`Along one path: \(V = R\left(\frac I3 + \frac I6 + \frac I3\right) = \frac56IR\).`], ans: R`5R/6` } },
      { check: { q: R`A wire of resistance R is bent into a circle. What is the resistance between two diametrically opposite points?`, ans: R`Two halves of R/2 in parallel: R/4.` } }
    ] },

    { h: R`Electrical energy and power`, t: [4], blocks: [
      R`When charge q moves through a potential difference V, the field does work qV on it. In a resistor this energy is given to the ions through collisions. The rate of energy transfer is the <b>electric power</b>: \[P = VI = I^2R = \frac{V^2}{R}\quad(\text{unit: watt})\]`,
      R`Electrical energy is \(W = Pt = VIt\). Electricity bills use the <b>kilowatt-hour</b> ("unit"): 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J.`,
      { ex: { q: R`A bulb is rated 100 W, 220 V. Find its resistance and the current it draws.`,
        steps: [R`\(R = V^2/P = 220^2/100\).`, R`\(I = P/V = 100/220\).`], ans: R`484 Ω; ≈ 0.45 A` } },
      { ex: { q: R`A 1 kW heater runs 2 hours a day for 30 days. At ₹8 per unit, what is the cost?`,
        steps: [R`Energy = 1 kW × 60 h = 60 kWh.`], ans: R`₹480` } },
      { tip: R`Which formula to use? For resistors in <b>series</b> (same I), use \(P = I^2R\): the larger resistor dissipates more. In <b>parallel</b> (same V), use \(P = V^2/R\): the smaller resistor dissipates more.` },
      { ex: { q: R`100 W and 60 W bulbs (both 220 V) are connected in series across 220 V. Which glows brighter?`,
        steps: [R`R = 484 Ω and 807 Ω. In series the current is the same, so \(P = I^2R\) is larger for the larger R.`, R`I = 220/1291 ≈ 0.17 A: P ≈ 14 W and 23 W.`], ans: R`The 60 W bulb glows brighter` } },
      { check: { q: R`A heater coil is cut to half its length. Connected to the same supply, what happens to its power?`, ans: R`R halves, so P = V²/R doubles.` } }
    ] },

    { h: R`Heating effect of current (Joule's law)`, t: [4], blocks: [
      R`The energy delivered to a resistor appears as heat. <b>Joule's law of heating:</b> the heat produced in a resistor is \[H = I^2Rt\] It is proportional to the square of the current, to the resistance and to the time.`,
      R`<b>Applications:</b> electric heaters, irons and kettles (nichrome elements: high ρ, high melting point, do not oxidise); filament bulbs (tungsten, very high melting point, in inert gas); <b>fuses</b> (a thin wire of low melting point in series, which melts and breaks the circuit when the current is too large). Unwanted heating in transmission lines is why power is sent at very high voltage and low current (loss ∝ I²).`,
      { ex: { q: R`How long does a 1 kW electric kettle take to heat 1 kg of water from 20 °C to 100 °C, if no heat is lost? (c = 4186 J kg⁻¹ K⁻¹)`,
        steps: [R`Heat needed \(= 1\times4186\times80 = 334\,880\) J.`, R`\(t = H/P = 334\,880/1000\).`], ans: R`≈ 335 s, about 5.6 minutes` } },
      { check: { q: R`Why is a fuse wire connected in series and made of a low-melting-point alloy?`, ans: R`In series, it carries the full current; when the current exceeds the safe value, its I²R heating melts it quickly and breaks the circuit.` } }
    ] },

    { h: R`Cells, emf and internal resistance`, t: [8], blocks: [
      R`A cell uses chemical energy to drive charge round a circuit. Its <b>electromotive force</b> (emf) E is the work done by the cell per unit charge in moving charge through it: the potential difference across its terminals when <b>no current</b> flows. Despite its name, emf is not a force; its unit is the volt.`,
      R`Charge also has to pass through the electrolyte inside the cell, which has some resistance r: the <b>internal resistance</b>. When the cell supplies current I to an external resistor R:`,
      { fig: figCell, cap: R`A real cell behaves like an ideal emf E in series with a small resistance r.` },
      { derive: R`Terminal voltage`, steps: [
        R`Current: \(I = \dfrac{E}{R + r}\).`,
        R`Terminal potential difference: \(V = IR = E - Ir\). It is less than E while the cell is discharging.`,
        R`While the cell is being <b>charged</b> (current forced in the opposite direction), \(V = E + Ir\).`,
        R`So \(r = \left(\dfrac EV - 1\right)R\).`
      ] },
      { fig: figVI, cap: R`Terminal voltage falls linearly with current. The intercept on the V axis is the emf; the slope is −r; the intercept on the I axis is the short-circuit current E/r.` },
      { ex: { q: R`A cell of emf 1.5 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. Find the current, the terminal voltage, and the short-circuit current.`,
        steps: [R`\(I = \dfrac{1.5}{2.5 + 0.5} = 0.5\) A.`, R`V = 1.5 − 0.5 × 0.5. Short circuit: E/r = 1.5/0.5.`], ans: R`0.5 A; 1.25 V; 3 A` } },
      { adv: R`<b>Maximum power transfer.</b> The power delivered to R is \(P = \dfrac{E^2R}{(R + r)^2}\). Setting dP/dR = 0 gives <b>R = r</b>, when \(P_{max} = \dfrac{E^2}{4r}\) and the efficiency is only 50%.` },
      { fig: figPR, cap: R`The power in the external resistor is greatest when R equals the internal resistance r.` },
      { check: { q: R`A voltmeter across a cell reads 1.5 V on open circuit and 1.2 V when the cell sends current through a 4 Ω resistor. Find r.`, ans: R`I = 1.2/4 = 0.3 A; r = (1.5 − 1.2)/0.3 = 1 Ω.` } }
    ] },

    { h: R`Combination of cells`, t: [9], blocks: [
      { fig: figCells, cap: R`Cells in series add their emfs and internal resistances; identical cells in parallel keep the same emf, with a smaller internal resistance.` },
      { points: [
        R`<b>n identical cells in series</b> (each E, r): emf nE, internal resistance nr; \(I = \dfrac{nE}{R + nr}\). Good when R ≫ r.`,
        R`<b>m identical cells in parallel:</b> emf E, internal resistance r/m; \(I = \dfrac{E}{R + r/m}\). Good when R ≪ r.`,
        R`<b>Mixed grouping</b> (m rows in parallel, each of n cells in series): \(I = \dfrac{nE}{R + nr/m}\). The current is maximum when \(R = nr/m\) (external = internal resistance).`,
        R`A cell connected the wrong way round in series <b>subtracts</b> its emf but still <b>adds</b> its internal resistance.`
      ] },
      { adv: R`<b>Two different cells in parallel</b> (E₁, r₁ and E₂, r₂, like terminals together) are equivalent to one cell with \[E_{eq} = \frac{E_1r_2 + E_2r_1}{r_1 + r_2},\qquad r_{eq} = \frac{r_1r_2}{r_1 + r_2}\]` },
      { ex: { q: R`Four cells, each 1.5 V and 0.5 Ω, drive current through a 4 Ω resistor. Find the current when they are (a) in series (b) in parallel.`,
        steps: [R`(a) \(I = \dfrac{6}{4 + 2}\).`, R`(b) \(I = \dfrac{1.5}{4 + 0.125}\).`], ans: R`(a) 1 A (b) ≈ 0.36 A` } },
      { check: { q: R`Three identical cells are in series, but one is reversed. What are the net emf and internal resistance?`, ans: R`E (= E + E − E) and 3r.` } }
    ] },

    { h: R`Kirchhoff's laws`, t: [10], blocks: [
      R`Complicated circuits are solved with two rules due to Gustav Kirchhoff (1845):`,
      { fig: figJunction, cap: R`At any junction, the total current flowing in equals the total current flowing out.` },
      { points: [
        R`<b>Junction rule (first law):</b> the algebraic sum of currents at any junction is zero: \(\sum I = 0\). This is conservation of charge: charge does not pile up at a junction.`,
        R`<b>Loop rule (second law):</b> the algebraic sum of the potential changes around any closed loop is zero: \(\sum\Delta V = 0\). This is conservation of energy: a charge returning to its starting point has the same potential energy.`
      ] },
      { h3: R`Sign conventions for the loop rule` },
      { points: [R`Going through a resistor <b>in</b> the direction of the current: −IR (potential drops). Against the current: +IR.`, R`Going through a cell from − to +: +E. From + to −: −E.`, R`Choose current directions freely; a negative answer simply means the current flows the other way.`] },
      { fig: figKirch, cap: R`Three branches join the junctions A and B. Unknown currents I₁, I₂, I₃ are assigned with arrows.` },
      { ex: { q: R`In the circuit shown, find the three currents.`,
        steps: [R`Junction A: \(I_1 = I_2 + I_3\).`, R`Left loop (through the 12 V cell, 2 Ω and 4 Ω): \(12 - 2I_1 - 4I_2 = 0\).`, R`Right loop (4 Ω, 2 Ω and the 6 V cell): \(4I_2 - 2I_3 - 6 = 0\).`, R`Solving: \(I_2 = 1.8\) A, \(I_1 = 2.4\) A, \(I_3 = 0.6\) A. (Equivalently, \(V_A - V_B = 7.2\) V.)`], ans: R`I₁ = 2.4 A, I₂ = 1.8 A, I₃ = 0.6 A (the 6 V cell is being charged)` } },
      { h3: R`Ammeters and voltmeters` },
      R`An <b>ammeter</b> measures current; it is connected in series and should have a very small resistance so it does not change the current. A <b>voltmeter</b> measures potential difference; it is connected in parallel and should have a very large resistance so it draws almost no current. (How they are made from a galvanometer is covered in the magnetism chapter.)`,
      { check: { q: R`Which conservation law does each of Kirchhoff's rules express?`, ans: R`Junction rule: conservation of charge. Loop rule: conservation of energy.` } }
    ] },

    { h: R`Wheatstone bridge`, t: [11], blocks: [
      R`The <b>Wheatstone bridge</b> is four resistors P, Q, R, S in a loop, with a cell across one diagonal (A–C) and a sensitive galvanometer across the other (B–D).`,
      { fig: figWheat, cap: R`Wheatstone bridge: when the galvanometer shows no deflection, the bridge is balanced.` },
      { derive: R`Balance condition`, steps: [
        R`At balance, no current flows through G, so B and D are at the same potential. P and Q carry the same current \(I_1\); R and S carry the same current \(I_2\).`,
        R`Equal potential drops from A: \(I_1P = I_2R\); and to C: \(I_1Q = I_2S\).`,
        R`Dividing: \[\frac PQ = \frac RS\]`
      ] },
      R`If three resistances are known, the fourth can be found. At balance the galvanometer branch carries no current, so any resistor placed there can be removed when simplifying a network. The balance does not depend on the emf of the cell, or on swapping the cell and galvanometer.`,
      { ex: { q: R`A Wheatstone bridge balances with P = 10 Ω, Q = 20 Ω and R = 15 Ω. Find S.`,
        steps: [R`\(S = R\dfrac QP = 15\times\dfrac{20}{10}\).`], ans: R`30 Ω` } },
      { tip: R`In network problems, look for a hidden balanced bridge: if the ratios of the four arms match, delete the middle resistor and the rest becomes simple series–parallel.` },
      { check: { q: R`Why is the Wheatstone bridge more accurate than using an ammeter and a voltmeter?`, ans: R`It is a null method: at balance no current flows through the galvanometer, so its own resistance and any calibration errors do not matter.` } }
    ] },

    { h: R`Metre bridge`, t: [12], blocks: [
      R`The <b>metre bridge</b> (slide-wire bridge) is a practical Wheatstone bridge. A uniform wire 1 m long is stretched along a scale, and a known resistance R and an unknown S are placed in gaps in a thick copper strip. A galvanometer joins the strip between them to a <b>jockey</b> J that slides along the wire.`,
      { fig: figMetre, cap: R`Metre bridge: the two parts of the wire, of lengths l and 100 − l, act as the two ratio arms.` },
      R`The two parts of the wire act as P and Q. Since the wire is uniform, their resistances are proportional to their lengths. At the balance point, a distance l (in cm) from the left end: \[\frac RS = \frac{l}{100 - l}\quad\Rightarrow\quad S = R\,\frac{100 - l}{l}\]`,
      { ex: { q: R`With a 4 Ω resistor in the left gap, the balance point is at 40 cm. Find the unknown resistance.`,
        steps: [R`\(S = 4\times\dfrac{60}{40}\).`], ans: R`6 Ω` } },
      R`<b>Specific resistance:</b> once S is known for a wire of length L and diameter d, its resistivity is \(\rho = \dfrac{S\pi d^2}{4L}\).`,
      { ex: { q: R`A wire 1 m long with diameter 0.5 mm has a resistance of 6 Ω. Find its resistivity.`,
        steps: [R`\(\rho = \dfrac{6\times\pi\times(0.25\times10^{-3})^2}{1}\).`], ans: R`≈ 1.2 × 10⁻⁶ Ω m (like nichrome)` } },
      { points: [R`The balance point should be near the middle of the wire, where the bridge is most sensitive and end errors matter least.`, R`<b>End corrections:</b> extra resistance at the ends of the wire (contacts, strip) is removed by swapping R and S and averaging.`, R`Current should flow only briefly, so the wire does not heat up and change its resistance.`] },
      { adv: R`<b>Post office box.</b> A compact Wheatstone bridge with plug-in resistances. Two ratio arms (P and Q) have 10, 100 and 1000 Ω coils, and the third arm R has resistances from 1 Ω to 5000 Ω. With P/Q = 10/10, 100/10 or 1000/10, R is adjusted until the galvanometer deflection reverses direction; the unknown is then \(S = R\dfrac QP\), found to 1, 0.1 or 0.01 Ω in successive steps. The battery key is pressed before the galvanometer key to avoid a self-induced kick.` },
      { check: { q: R`In a metre bridge, the balance point is at 50 cm. What can you say about R and S?`, ans: R`They are equal.` } }
    ] }
  ],
  summary: [
    R`\(I = dq/dt\); conventional current is the direction of positive charge flow. Current density \(J = I/A\).`,
    R`Drift: \(v_d = eE\tau/m\); \(I = neAv_d\); mobility \(\mu = v_d/E = e\tau/m\).`,
    R`Ohm's law V = IR (R constant at fixed temperature); \(R = \rho l/A\), \(\rho = m/ne^2\tau\), \(J = \sigma E\).`,
    R`Non-ohmic devices: lamps, diodes, negative-resistance devices; dynamic resistance dV/dI.`,
    R`Stretching a wire: \(R\propto l^2\). Colour code: two digits, multiplier, tolerance (gold 5%, silver 10%).`,
    R`\(\rho_T = \rho_0(1 + \alpha\Delta T)\); α > 0 for metals, < 0 for semiconductors; superconductors have zero resistance below \(T_c\).`,
    R`Series \(R = \sum R_i\); parallel \(1/R = \sum1/R_i\). Use symmetry, balanced bridges and Kirchhoff for networks. Infinite ladder \(\frac{1 + \sqrt5}{2}R\); cube diagonal 5R/6.`,
    R`Power \(P = VI = I^2R = V^2/R\); 1 kWh = 3.6 MJ. Joule heating \(H = I^2Rt\).`,
    R`Cell: \(I = E/(R + r)\), terminal voltage \(V = E - Ir\) (discharging), \(E + Ir\) (charging). Maximum power when R = r: \(E^2/4r\).`,
    R`n cells in series: nE, nr. m in parallel: E, r/m. Mixed: max current when R = nr/m.`,
    R`Kirchhoff: ΣI = 0 at a junction (charge), ΣΔV = 0 round a loop (energy).`,
    R`Wheatstone bridge balanced when P/Q = R/S. Metre bridge: \(S = R(100 - l)/l\).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §9.1 Electrical Current`, url: 'https://openstax.org/books/university-physics-volume-2/pages/9-1-electrical-current' },
    { t: R`OpenStax University Physics Vol. 2, §9.2 Model of Conduction in Metals`, url: 'https://openstax.org/books/university-physics-volume-2/pages/9-2-model-of-conduction-in-metals' },
    { t: R`OpenStax University Physics Vol. 2, §9.3 Resistivity and Resistance`, url: 'https://openstax.org/books/university-physics-volume-2/pages/9-3-resistivity-and-resistance' },
    { t: R`OpenStax University Physics Vol. 2, §9.4 Ohm's Law`, url: 'https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law' },
    { t: R`OpenStax University Physics Vol. 2, §9.5 Electrical Energy and Power`, url: 'https://openstax.org/books/university-physics-volume-2/pages/9-5-electrical-energy-and-power' },
    { t: R`OpenStax University Physics Vol. 2, §10.1 Electromotive Force`, url: 'https://openstax.org/books/university-physics-volume-2/pages/10-1-electromotive-force' },
    { t: R`OpenStax University Physics Vol. 2, §10.2 Resistors in Series and Parallel`, url: 'https://openstax.org/books/university-physics-volume-2/pages/10-2-resistors-in-series-and-parallel' },
    { t: R`OpenStax University Physics Vol. 2, §10.3 Kirchhoff's Rules`, url: 'https://openstax.org/books/university-physics-volume-2/pages/10-3-kirchhoffs-rules' },
    { t: R`Wikipedia: Wheatstone bridge`, url: 'https://en.wikipedia.org/wiki/Wheatstone_bridge' },
    { t: R`Wikipedia: Electronic color code`, url: 'https://en.wikipedia.org/wiki/Electronic_color_code' }
  ]
});
})();
