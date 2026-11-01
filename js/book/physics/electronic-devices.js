// Book chapter: Semiconductor Electronics. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- helpers ----------
// Diode on a horizontal wire from x1 to x2 at height y, pointing right (conventional current flows left to right).
function diode(x1, x2, y, o) {
  o = o || {}; var m = (x1 + x2) / 2, c = o.color || 'k';
  return D.line(x1, y, m - 9, y, { color: c, w: 1.8 }) + D.line(m + 9, y, x2, y, { color: c, w: 1.8 }) +
    D.poly([[m - 9, y - 10], [m + 9, y], [m - 9, y + 10]], { closed: true, color: c, fill: 'soft', w: 1.8 }) + D.line(m + 9, y - 10, m + 9, y + 10, { color: c, w: 2.4 }) +
    (o.zener ? D.line(m + 9, y - 10, m + 4, y - 14, { color: c, w: 2 }) + D.line(m + 9, y + 10, m + 14, y + 14, { color: c, w: 2 }) : '') +
    (o.label ? D.text(m, y - 18, o.label, { size: 12, math: false }) : '');
}
// Vertical diode from y1 (top) to y2, pointing up (o.up) or down.
function vdiode(x, y1, y2, o) {
  o = o || {}; var m = (y1 + y2) / 2, c = o.color || 'k', s = o.up ? -1 : 1;
  return D.line(x, y1, x, m - 9, { color: c, w: 1.8 }) + D.line(x, m + 9, x, y2, { color: c, w: 1.8 }) +
    D.poly([[x - 10, m - 9 * s], [x, m + 9 * s], [x + 10, m - 9 * s]], { closed: true, color: c, fill: 'soft', w: 1.8 }) + D.line(x - 10, m + 9 * s, x + 10, m + 9 * s, { color: c, w: 2.4 }) +
    (o.zener ? D.line(x - 10, m + 9 * s, x - 14, m + 4 * s, { color: c, w: 2 }) + D.line(x + 10, m + 9 * s, x + 14, m + 14 * s, { color: c, w: 2 }) : '') +
    (o.label ? D.text(x + 18, m, o.label, { size: 12, math: false, anchor: 'start' }) : '');
}
function gate(type) {
  var p = [], x = 50, y = 25, bub = /^N(AND|OR|OT)$/.test(type) || type === 'NOT', outX;
  if (type === 'AND' || type === 'NAND') { p.push(D.path('M' + x + ' ' + y + ' L' + (x + 22) + ' ' + y + ' A 20 20 0 0 1 ' + (x + 22) + ' ' + (y + 40) + ' L' + x + ' ' + (y + 40) + ' Z', { color: 'c', fill: 'soft', w: 2 })); outX = x + 42; }
  else if (type === 'OR' || type === 'NOR') { p.push(D.path('M' + x + ' ' + y + ' Q ' + (x + 14) + ' ' + (y + 20) + ' ' + x + ' ' + (y + 40) + ' Q ' + (x + 30) + ' ' + (y + 40) + ' ' + (x + 46) + ' ' + (y + 20) + ' Q ' + (x + 30) + ' ' + y + ' ' + x + ' ' + y + ' Z', { color: 'c', fill: 'soft', w: 2 })); outX = x + 46; }
  else { p.push(D.poly([[x, y], [x + 36, y + 20], [x, y + 40]], { closed: true, color: 'c', fill: 'soft', w: 2 })); outX = x + 36; }
  if (bub) { p.push(D.circle(outX + 5, y + 20, 5, { color: 'c', w: 2 })); outX += 10; }
  if (type === 'NOT') p.push(D.line(15, y + 20, x, y + 20, { w: 1.8 }), D.text(10, y + 20, 'A', { math: true, anchor: 'end' }));
  else { var inset = /OR/.test(type) ? 8 : 0; p.push(D.line(15, y + 10, x + inset, y + 10, { w: 1.8 }), D.line(15, y + 30, x + inset, y + 30, { w: 1.8 }), D.text(10, y + 10, 'A', { math: true, anchor: 'end' }), D.text(10, y + 30, 'B', { math: true, anchor: 'end' })); }
  p.push(D.line(outX, y + 20, 135, y + 20, { w: 1.8 }), D.text(142, y + 20, 'Y', { math: true, anchor: 'start' }));
  return D.svg(160, 90, p, type + ' gate');
}

// ---------- figures ----------
function bandPanel(gap, overlap, lab) {
  var p = [], vbTop = overlap ? 90 : 120, cbBot = overlap ? 70 : 120 - gap;
  p.push(D.rect(30, cbBot - 45, 100, 45, { color: 'b', fill: 'soft', w: 1.4 }), D.text(80, cbBot - 22, 'conduction', { size: 10, math: false, color: 'b' }));
  p.push(D.rect(30, vbTop, 100, 45, { color: 'r', fill: 'soft', w: 1.4 }), D.text(80, vbTop + 22, 'valence', { size: 10, math: false, color: 'r' }));
  if (!overlap) { p.push(D.arrow(145, vbTop, 145, cbBot, { color: 'm', w: 1, head: 5, both: true }), D.text(150, (vbTop + cbBot) / 2, 'E_g', { size: 11, anchor: 'start' })); }
  else p.push(D.text(80, 80, 'bands overlap', { size: 10, math: false, color: 'm' }));
  return D.svg(180, 175, p, lab);
}
var figBands = D.row([[bandPanel(0, true, 'conductor bands'), 'conductor (metal)'], [bandPanel(22, false, 'semiconductor bands'), 'semiconductor: E<sub>g</sub> ≈ 1 eV'], [bandPanel(60, false, 'insulator bands'), 'insulator: E<sub>g</sub> > 3 eV']]);

function lattice(kind) {
  var p = [], cx = [40, 100, 160], cy = [40, 100, 160];
  cy.forEach(function (y) { p.push(D.line(10, y, 190, y, { color: 'm', w: 1, dash: '3 3' })); }); cx.forEach(function (x) { p.push(D.line(x, 10, x, 190, { color: 'm', w: 1, dash: '3 3' })); });
  cx.forEach(function (x) { cy.forEach(function (y) {
    var centre = x === 100 && y === 100, lab = centre && kind === 'n' ? 'P' : centre && kind === 'p' ? 'B' : 'Si';
    p.push(D.circle(x, y, 15, { color: centre && kind ? (kind === 'n' ? 'b' : 'r') : 'k', fill: 'soft', w: 1.6 }), D.text(x, y, lab, { size: 11, math: false, bold: true }));
  }); });
  if (kind === 'n') p.push(D.dot(128, 78, { color: 'b', r: 4 }), D.text(136, 70, 'free electron', { size: 10, color: 'b', math: false, anchor: 'start' }));
  else if (kind === 'p') p.push(D.dot(100, 72, { color: 'r', r: 5, open: true }), D.text(110, 62, 'hole', { size: 10, color: 'r', math: false, anchor: 'start' }));
  else p.push(D.dot(130, 130, { color: 'b', r: 4 }), D.dot(160, 125, { color: 'r', r: 5, open: true }), D.text(130, 145, 'e⁻', { size: 10, color: 'b', math: false }), D.text(170, 140, 'hole', { size: 10, color: 'r', math: false }));
  return D.svg(200, 200, p, kind ? kind + '-type silicon' : 'intrinsic silicon');
}
var figDoping = D.row([[lattice(''), 'intrinsic: pairs from heat'], [lattice('n'), 'n-type: P donates an electron'], [lattice('p'), 'p-type: B leaves a hole']]);

var figPN = (function () {
  var p = [D.rect(20, 30, 380, 90, { color: 'm', w: 1.6 }), D.rect(170, 30, 80, 90, { color: 'o', fill: 'soft', w: 0.01 }), D.line(210, 25, 210, 125, { color: 'k', w: 1.4, dash: '4 3' })];
  [[40, 50], [70, 80], [100, 55], [130, 95], [55, 105], [145, 60], [95, 100]].forEach(function (q) { p.push(D.dot(q[0], q[1], { color: 'r', r: 4, open: true })); });
  [[270, 50], [300, 85], [330, 55], [360, 95], [285, 105], [375, 60], [320, 100]].forEach(function (q) { p.push(D.dot(q[0], q[1], { color: 'b', r: 3.5 })); });
  [50, 75, 100].forEach(function (y) { p.push(D.text(185, y, '−', { color: 'r', bold: true, raw: true, size: 14 }), D.text(235, y, '+', { color: 'b', bold: true, raw: true, size: 14 })); });
  p.push(D.text(95, 20, 'p-side (holes)', { size: 12, color: 'r', math: false }), D.text(325, 20, 'n-side (electrons)', { size: 12, color: 'b', math: false }), D.text(210, 138, 'depletion region', { size: 11, color: 'o', math: false }));
  p.push(D.arrow(245, 112, 175, 112, { color: 'g', w: 1.4, head: 6, label: 'E (barrier field)', ly: 0, lx: 0, size: 10, math: false }));
  var pts = []; for (var x = 20; x <= 400; x += 2) { var u = Math.max(0, Math.min(1, (x - 170) / 80)); pts.push([x, 200 - 40 * (u * u * (3 - 2 * u))]); }
  p.push(D.poly(pts, { color: 'c', w: 2 }), D.text(40, 210, 'potential', { size: 11, color: 'c', math: false, anchor: 'start' }), D.arrow(390, 200, 390, 160, { color: 'm', w: 1, head: 5, both: true }), D.text(384, 182, 'V_B', { size: 12, anchor: 'end' }));
  return D.svg(420, 220, p, 'A p-n junction and its depletion region');
})();

var figIV = D.plot({
  w: 420, h: 230, x: [-6.5, 1.6], y: [-1.2, 1.2], xlabel: 'V', ylabel: 'I', xticks: [[0.7, '0.7 V'], [-5, '−V_{br}']], yticks: [], noOrigin: true,
  fns: [{ f: function (v) { if (v > 0) return Math.min(2, 0.002 * (Math.exp(v * 9.5) - 1)); if (v > -5) return -0.04; return -0.04 - (-5 - v) * 3; }, from: -6.5, to: 1.4, color: 'r', steps: 600 }],
  texts: [{ x: 0.9, y: 0.9, s: 'forward bias', size: 11, color: 'r', anchor: 'end' }, { x: -2.5, y: 0.25, s: 'reverse bias: tiny current', size: 11, color: 'r' }, { x: -5.1, y: -0.75, s: 'breakdown', size: 11, color: 'r', anchor: 'end' }],
  label: 'I-V characteristic of a p-n junction diode (not to scale)'
});

var figHalf = D.row([
  [D.svg(230, 150, [D.ac(30, 40, 30, 110, { label: 'AC in', math: false, lx: -26, ly: 0, size: 11 }), D.line(30, 40, 60, 40, { w: 1.8 }), diode(60, 140, 40), D.line(140, 40, 190, 40, { w: 1.8 }),
    D.res(190, 40, 190, 110, { label: 'R_L', lx: 24, ly: 0 }), D.line(30, 110, 190, 110, { w: 1.8 }), D.text(110, 138, 'output across R_L', { size: 11, math: false, color: 'm' })], 'half-wave rectifier circuit'), 'circuit'],
  [D.plot({ w: 260, h: 170, x: [0, 2.1], y: [-1.3, 1.4], xlabel: 't', ylabel: '', xticks: [], yticks: [], fns: [{ f: function (t) { return Math.sin(2 * PI * t); }, color: 'm', dash: '4 4', w: 1.2, label: 'input', lx: 1.3, ly: -1.15, math: false }, { f: function (t) { return Math.max(0, Math.sin(2 * PI * t)); }, color: 'r', w: 2.4, label: 'output', lx: 0.15, ly: 1.2, math: false }], label: 'half-wave rectified output' }), 'only positive half-cycles pass']
]);

var figFull = D.row([
  [D.svg(250, 190, [D.rect(20, 30, 14, 130, { color: 'm', fill: 'soft', w: 1.2 }), D.text(27, 175, 'transformer', { size: 10, math: false, color: 'm' }),
    D.line(34, 40, 70, 40, { w: 1.8 }), diode(70, 150, 40, { label: 'D₁' }), D.line(34, 150, 70, 150, { w: 1.8 }), diode(70, 150, 150, { label: 'D₂' }),
    D.line(150, 40, 200, 40, { w: 1.8 }), D.line(150, 150, 200, 150, { w: 1.8 }), D.line(200, 40, 200, 150, { w: 1.8 }), D.dot(200, 95, { r: 3 }),
    D.line(34, 95, 90, 95, { w: 1.8 }), D.res(90, 95, 200, 95, { label: 'R_L', ly: -14 }), D.text(40, 88, 'centre tap', { size: 10, math: false, color: 'm', anchor: 'start' })], 'full-wave rectifier circuit'), 'centre-tap full-wave rectifier'],
  [D.plot({ w: 240, h: 170, x: [0, 2.1], y: [-0.2, 1.4], xlabel: 't', ylabel: '', xticks: [], yticks: [], fns: [{ f: function (t) { return Math.abs(Math.sin(2 * PI * t)); }, color: 'r', w: 2.4 }, { f: function (t) { var a = Math.abs(Math.sin(2 * PI * t)); return t < 0.25 ? a : Math.max(a, 1 - 0.35 * ((t - 0.25) % 0.5)); }, color: 'g', w: 1.4, dash: '4 3' }],
    texts: [{ x: 1.05, y: 1.28, s: 'with filter capacitor: nearly steady', size: 10, color: 'g' }], label: 'full-wave rectified output' }), 'both half-cycles used (D₁ then D₂)']
]);

var figPhoto = D.row([
  [D.plot({ w: 220, h: 180, x: [-4, 0.6], y: [-1.3, 0.4], xlabel: 'V', ylabel: 'I', xticks: [], yticks: [], noOrigin: true,
    fns: [{ f: function () { return -0.3; }, from: -4, to: 0, color: 'o' }, { f: function () { return -0.65; }, from: -4, to: 0, color: 'r' }, { f: function () { return -1.0; }, from: -4, to: 0, color: 'p' }],
    texts: [{ x: -2, y: -0.2, s: 'I₁', size: 11, color: 'o' }, { x: -2, y: -0.55, s: 'I₂ > I₁', size: 11, color: 'r' }, { x: -2, y: -0.9, s: 'I₃ > I₂', size: 11, color: 'p' }],
    label: 'photodiode reverse current at three light intensities' }), 'photodiode (reverse bias): current ∝ light'],
  [D.plot({ w: 220, h: 180, x: [-0.2, 1.1], y: [-1.3, 0.3], xlabel: 'V', ylabel: 'I', xticks: [[0.85, 'V_{oc}']], yticks: [[-1, 'I_{sc}']], noOrigin: true,
    fns: [{ f: function (v) { return -1 + 0.01 * (Math.exp(v * 5.4) - 1); }, from: 0, to: 0.86, color: 'o' }],
    texts: [{ x: 0.42, y: -0.6, s: 'works in the 4th quadrant', size: 10, color: 'o' }],
    label: 'solar cell I-V curve' }), 'solar cell: no bias, gives power']
]);

var figZener = D.row([
  [D.svg(250, 160, [D.line(20, 40, 60, 40, { w: 1.8 }), D.res(60, 40, 130, 40, { label: 'R_s', ly: -16 }), D.line(130, 40, 210, 40, { w: 1.8 }), vdiode(150, 40, 120, { up: true, zener: true, label: 'V_Z' }), D.res(210, 40, 210, 120, { label: 'R_L', lx: 22, ly: 0 }),
    D.line(20, 120, 210, 120, { w: 1.8 }), D.dot(20, 40, { r: 4, open: true }), D.dot(20, 120, { r: 4, open: true }), D.text(14, 82, 'unregulated', { size: 10, math: false, color: 'm', anchor: 'start' }), D.text(14, 95, 'input', { size: 10, math: false, color: 'm', anchor: 'start' }), D.text(180, 145, 'steady V_Z across R_L', { size: 10, math: false, color: 'g' })], 'Zener regulator circuit'), 'Zener diode as a voltage regulator'],
  [D.plot({ w: 200, h: 170, x: [-7, 1.2], y: [-1.3, 1], xlabel: 'V', ylabel: 'I', xticks: [[-5.5, '−V_Z']], yticks: [], noOrigin: true,
    fns: [{ f: function (v) { if (v > 0) return Math.min(2, 0.002 * (Math.exp(v * 9) - 1)); if (v > -5.5) return -0.02; return -0.02 - (-5.5 - v) * 8; }, from: -7, to: 1.1, color: 'b', steps: 500 }], label: 'Zener I-V curve' }), 'sharp, controlled reverse breakdown']
]);

var figGates = D.row([[gate('AND'), 'AND: Y = A·B'], [gate('OR'), 'OR: Y = A + B'], [gate('NOT'), 'NOT: Y = Ā'], [gate('NAND'), 'NAND: Y = (A·B)‾'], [gate('NOR'), 'NOR: Y = (A + B)‾']]);

// ---------- chapter text ----------
JEE.book('physics', 'electronic-devices', {
  intro: [
    R`Your phone holds billions of tiny switches made of silicon. They are built from <b>semiconductors</b>, materials whose conductivity lies between that of metals and insulators, and can be controlled precisely by adding impurities, light or voltage.`,
    R`This chapter explains energy bands and why semiconductors behave as they do, intrinsic and doped (n-type and p-type) semiconductors, the p–n junction diode and its uses as a rectifier, special diodes (LED, photodiode, solar cell, Zener diode), and the logic gates from which every digital circuit is built.`
  ],
  sections: [
    { h: R`Conductors, semiconductors and insulators`, t: [0], blocks: [
      R`In an isolated atom, electrons occupy sharp energy levels. In a solid, the atoms are so close that each level spreads into a band of very closely spaced levels. Two bands matter most:`,
      { points: [R`The <b>valence band</b>: the highest band filled with electrons at absolute zero.`, R`The <b>conduction band</b>: the next band above, empty at absolute zero. Electrons in it are free to move and carry current.`, R`The <b>energy gap</b> \(E_g\) (forbidden gap) between them, where no electron states exist.`] },
      { fig: figBands, cap: R`Energy bands: in a metal the bands overlap; in a semiconductor the gap is small (about 1 eV); in an insulator it is large.` },
      { table: { head: [R`Material`, R`Energy gap`, R`Resistivity (Ω m)`, R`Examples`], rows: [
        [R`Conductor`, R`none (bands overlap)`, R`10⁻⁸ to 10⁻²`, R`copper, silver, aluminium`], [R`Semiconductor`, R`small, < 3 eV (Si 1.1 eV, Ge 0.7 eV)`, R`10⁻⁵ to 10⁶`, R`silicon, germanium, GaAs`], [R`Insulator`, R`large, > 3 eV (diamond 5.4 eV)`, R`10¹¹ to 10¹⁹`, R`glass, diamond, rubber`]] } },
      R`At room temperature, thermal energy (about 0.025 eV per particle on average, but much more for a few) lifts some electrons across the small gap of a semiconductor, so it conducts a little. Heating it frees more electrons: unlike a metal, a semiconductor's resistance <b>falls</b> as it gets hotter.`,
      { check: { q: R`Why is diamond an insulator but silicon a semiconductor, though both have the same crystal structure?`, ans: R`Diamond's band gap (5.4 eV) is far too large for thermal energy to bridge; silicon's (1.1 eV) is small enough for some electrons to cross.` } }
    ] },

    { h: R`Intrinsic semiconductors`, t: [0], blocks: [
      R`A pure semiconductor is <b>intrinsic</b>. Silicon and germanium have 4 valence electrons; each atom forms covalent bonds with 4 neighbours. When thermal energy breaks a bond, an electron becomes free, leaving behind a vacancy, a <b>hole</b>, which behaves like a positive charge +e: a neighbouring electron can jump into it, so the hole moves.`,
      R`In an intrinsic semiconductor, electrons and holes are created in pairs, so \[n_e = n_h = n_i\] where \(n_i\) is the intrinsic carrier concentration (about 1.5 × 10¹⁶ m⁻³ for silicon at room temperature, compared with about 10²⁸ m⁻³ free electrons in a metal). Current is carried by both: \(I = I_e + I_h\).`,
      { check: { q: R`In an intrinsic semiconductor, which is greater: the number of free electrons or the number of holes?`, ans: R`They are equal.` } }
    ] },

    { h: R`Extrinsic semiconductors: n-type and p-type`, t: [0], blocks: [
      R`Adding a tiny, controlled amount of impurity (<b>doping</b>, typically 1 atom in a million) increases the conductivity enormously. The result is an <b>extrinsic</b> semiconductor.`,
      { fig: figDoping, cap: R`Left: thermal pair creation in pure silicon. Middle: a pentavalent phosphorus atom gives a free electron. Right: a trivalent boron atom leaves a hole.` },
      { points: [
        R`<b>n-type:</b> doped with a <b>pentavalent</b> impurity (P, As, Sb). Four of its five electrons form bonds; the fifth is very loosely bound and easily becomes free. The impurity is a <b>donor</b>. Electrons are the <b>majority carriers</b>, holes the minority carriers: \(n_e \gg n_h\).`,
        R`<b>p-type:</b> doped with a <b>trivalent</b> impurity (B, Al, In). It can form only three bonds, leaving a hole that accepts an electron from a neighbour. The impurity is an <b>acceptor</b>. Holes are the majority carriers: \(n_h \gg n_e\).`,
        R`Both types are electrically <b>neutral</b> overall: each free carrier is balanced by an ionised impurity atom.`
      ] },
      R`In thermal equilibrium, the product of the carrier concentrations is fixed: \[n_en_h = n_i^2\] Adding donors increases \(n_e\) and so reduces \(n_h\) (more electrons fill holes).`,
      { ex: { q: R`Silicon (\(n_i = 1.5\times10^{16}\) m⁻³) is doped with 10²² donor atoms per m³. Find the hole concentration.`,
        steps: [R`\(n_e \approx 10^{22}\) m⁻³ (each donor gives one electron).`, R`\(n_h = n_i^2/n_e = (1.5\times10^{16})^2/10^{22}\).`], ans: R`≈ 2.25 × 10¹⁰ m⁻³ (electrons outnumber holes by 10¹² to 1)` } },
      { check: { q: R`Is an n-type semiconductor negatively charged?`, ans: R`No. It is neutral: the extra electrons are balanced by positive donor ions.` } }
    ] },

    { h: R`The p–n junction diode`, t: [1], blocks: [
      R`A <b>p–n junction</b> is formed when one side of a single crystal is made p-type and the other n-type. At the junction, electrons diffuse from the n-side (where they are plentiful) into the p-side, and holes diffuse the other way. They recombine, leaving behind a thin layer of fixed, uncovered ions: negative acceptor ions on the p-side and positive donor ions on the n-side.`,
      { fig: figPN, cap: R`The depletion region contains no free carriers, only fixed ions. Their field opposes further diffusion, creating the barrier potential \(V_B\).` },
      { points: [R`This layer, empty of mobile carriers, is the <b>depletion region</b> (about 1 μm thick).`, R`The ions create an electric field from the n-side to the p-side, and a <b>potential barrier</b> \(V_B\) (about 0.7 V for Si, 0.3 V for Ge) that stops further diffusion. In equilibrium, the diffusion current is balanced by a drift current.`, R`The device made from such a junction, with metal contacts, is a <b>semiconductor diode</b>. Its symbol is an arrow (the p-side, anode) pointing to a bar (the n-side, cathode), in the direction of easy current flow.`] },
      { check: { q: R`Why is the depletion region so called?`, ans: R`It is depleted of free charge carriers (electrons and holes), containing only fixed ions.` } }
    ] },

    { h: R`Forward and reverse bias: I–V characteristics`, t: [1], blocks: [
      { points: [
        R`<b>Forward bias:</b> p-side connected to the positive terminal. The applied voltage opposes the barrier, the depletion region narrows, and majority carriers flow easily across. Above the <b>threshold (knee) voltage</b> (≈ 0.7 V for Si), the current rises steeply (exponentially).`,
        R`<b>Reverse bias:</b> p-side to the negative terminal. The barrier increases, the depletion region widens, and only a tiny current of minority carriers flows (microamperes), almost independent of voltage. At a large reverse voltage, the <b>breakdown voltage</b>, the current suddenly rises sharply.`
      ] },
      { fig: figIV, cap: R`A diode conducts easily in forward bias above about 0.7 V, and hardly at all in reverse bias until breakdown.` },
      R`Because its I–V graph is not a straight line, a diode is non-ohmic. Its <b>dynamic resistance</b> at a point is \(r_d = \dfrac{\Delta V}{\Delta I}\), small in forward bias and very large in reverse bias.`,
      { ex: { q: R`In forward bias, raising the voltage across a diode from 0.70 V to 0.80 V increases the current from 10 mA to 20 mA. Find the dynamic resistance.`,
        steps: [R`\(r_d = \dfrac{0.1}{0.01}\).`], ans: R`10 Ω` } },
      { check: { q: R`What happens to the width of the depletion region in reverse bias?`, ans: R`It increases.` } }
    ] },

    { h: R`The diode as a rectifier`, t: [2], blocks: [
      R`A diode conducts in one direction only, so it can turn alternating current into one-directional (DC) current: <b>rectification</b>. Every phone charger and power supply contains rectifiers.`,
      { h3: R`Half-wave rectifier` },
      { fig: figHalf, cap: R`A single diode passes only the positive half-cycles of the AC input; the output is a series of pulses.` },
      R`During the positive half-cycle the diode is forward biased and current flows through the load R_L; during the negative half-cycle it is reverse biased and no current flows. The output frequency equals the input frequency (50 Hz from 50 Hz mains). It wastes half the input.`,
      { h3: R`Full-wave rectifier` },
      { fig: figFull, cap: R`A centre-tapped transformer with two diodes: D₁ conducts on one half-cycle and D₂ on the other, sending current the same way through \(R_L\) both times.` },
      R`Both halves of each cycle are used, so the output pulses come at twice the input frequency (100 Hz from 50 Hz mains) and the efficiency is higher. A <b>bridge rectifier</b> with four diodes does the same without a centre-tapped transformer. A <b>capacitor filter</b> across the load charges at each peak and discharges slowly in between, smoothing the pulsating output into nearly steady DC.`,
      { check: { q: R`For 50 Hz input, what is the frequency of the ripple in the output of a full-wave rectifier?`, ans: R`100 Hz.` } }
    ] },

    { h: R`LED, photodiode and solar cell`, t: [3], blocks: [
      { h3: R`Light-emitting diode (LED)` },
      R`In a forward-biased junction of a suitable semiconductor (GaAs, GaAsP, GaN), electrons and holes recombine and release energy as light. The photon energy is about the band gap: \(\lambda\approx\dfrac{hc}{E_g}\). The colour is set by the material. LEDs need a small voltage (about 1.5 V to 3 V), last very long, switch fast and are very efficient. Their I–V graph is like a diode's, with a higher threshold voltage.`,
      { ex: { q: R`An LED is made from a semiconductor with a band gap of 1.9 eV. What colour does it emit?`,
        steps: [R`\(\lambda = 1240/1.9\) nm.`], ans: R`≈ 653 nm: red` } },
      { h3: R`Photodiode` },
      R`A <b>photodiode</b> is operated in <b>reverse bias</b>. Light with photon energy above \(E_g\) creates electron–hole pairs in the depletion region; the field sweeps them apart, adding to the reverse current. The reverse current is proportional to the light intensity, so photodiodes detect light (in remote-control receivers, fibre-optic links and smoke detectors). Reverse bias is used because the tiny reverse current makes the change due to light easy to measure.`,
      { h3: R`Solar cell` },
      R`A <b>solar cell</b> is a p–n junction with a large area and no external bias. Light creates electron–hole pairs that the junction field separates, building up a voltage (the photovoltaic effect) that drives current through a load. Its I–V curve lies in the fourth quadrant: it supplies power. Key values are the <b>open-circuit voltage</b> \(V_{oc}\) and the <b>short-circuit current</b> \(I_{sc}\). Silicon (\(E_g\) = 1.1 eV) is ideal because it absorbs most of the solar spectrum.`,
      { fig: figPhoto, cap: R`Left: a photodiode's reverse current increases with light intensity. Right: a solar cell's I–V curve, with open-circuit voltage and short-circuit current.` },
      { check: { q: R`A photodiode has a band gap of 2.8 eV. What is the longest wavelength it can detect?`, ans: R`1240/2.8 ≈ 443 nm (violet); longer wavelengths cannot create electron–hole pairs.` } }
    ] },

    { h: R`The Zener diode`, t: [4], blocks: [
      R`A <b>Zener diode</b> is a heavily doped p–n junction designed to work in <b>reverse breakdown</b>. Its very thin depletion region gives a sharp breakdown at a precise voltage \(V_Z\) (from about 2 V to 200 V). In breakdown, the voltage across it stays almost constant at \(V_Z\) over a wide range of current.`,
      { fig: figZener, cap: R`A Zener diode in reverse bias across the load keeps the output voltage steady at \(V_Z\) even when the input voltage or the load changes. Its I–V curve has a sharp, vertical breakdown.` },
      R`<b>As a voltage regulator:</b> the Zener (reverse-biased) is connected in parallel with the load, with a series resistor \(R_s\). If the input voltage rises, the extra voltage drops across \(R_s\) as the Zener draws more current, while the output stays at \(V_Z\). The current through \(R_s\) splits: \(I = I_Z + I_L\).`,
      { ex: { q: R`An unregulated supply varies from 10 V to 15 V. A 6 V Zener with a 450 Ω series resistor feeds a 1 kΩ load. Find the Zener current at both input voltages.`,
        steps: [R`Load current \(I_L = 6/1000 = 6\) mA (fixed).`, R`At 15 V: \(I = (15 - 6)/450 = 20\) mA, so \(I_Z = 14\) mA.`, R`At 10 V: \(I = 4/450 \approx 8.9\) mA, so \(I_Z \approx 2.9\) mA.`], ans: R`14 mA and ≈ 2.9 mA; the output stays at 6 V` } },
      { check: { q: R`Why is a Zener diode connected in reverse bias in a regulator?`, ans: R`Its useful property, a constant voltage over a wide range of current, appears only in reverse breakdown.` } }
    ] },

    { h: R`Logic gates`, t: [5], blocks: [
      R`Digital circuits work with just two voltage levels: high (1) and low (0). A <b>logic gate</b> is a circuit with one or more inputs and one output, whose output depends on the inputs according to a fixed logical rule. Its behaviour is summarised by a <b>truth table</b> and a Boolean expression.`,
      { fig: figGates, cap: R`Symbols of the five basic logic gates. A small circle (bubble) at the output means "NOT".` },
      { table: { head: [R`A`, R`B`, R`AND (A·B)`, R`OR (A + B)`, R`NAND`, R`NOR`], rows: [
        [R`0`, R`0`, R`0`, R`0`, R`1`, R`1`], [R`0`, R`1`, R`0`, R`1`, R`1`, R`0`], [R`1`, R`0`, R`0`, R`1`, R`1`, R`0`], [R`1`, R`1`, R`1`, R`1`, R`0`, R`0`]] } },
      { points: [R`<b>NOT</b> (inverter): one input; output is the opposite, \(Y = \bar A\).`, R`<b>AND:</b> output 1 only if all inputs are 1.`, R`<b>OR:</b> output 1 if any input is 1.`, R`<b>NAND</b> (NOT-AND) and <b>NOR</b> (NOT-OR) invert the AND and OR outputs.`] },
      R`NAND and NOR are <b>universal gates</b>: any logic circuit can be built from NAND gates alone (or NOR gates alone). For example, a NAND gate with both inputs joined is a NOT gate; a NAND followed by a NOT is an AND gate.`,
      { ex: { q: R`The output of an OR gate is fed into a NOT gate. Which gate does the combination act as, and what is its output for A = 1, B = 0?`,
        steps: [R`NOT(A + B) is NOR.`, R`A + B = 1, so the output is 0.`], ans: R`NOR; output 0` } },
      { tip: R`De Morgan's theorems: \(\overline{A\cdot B} = \bar A + \bar B\) and \(\overline{A + B} = \bar A\cdot\bar B\). They let you convert between NAND/OR and NOR/AND forms quickly.` },
      { check: { q: R`For what inputs is the output of a NOR gate 1?`, ans: R`Only when both inputs are 0.` } }
    ] }
  ],
  summary: [
    R`Energy bands: conductors (overlap), semiconductors (E_g ≈ 1 eV; Si 1.1, Ge 0.7), insulators (> 3 eV). Semiconductor resistance falls with temperature.`,
    R`Intrinsic: n_e = n_h = n_i. Extrinsic: n-type (pentavalent donors, electrons majority), p-type (trivalent acceptors, holes majority); n_e n_h = n_i²; both neutral.`,
    R`p–n junction: diffusion creates a depletion region and barrier (0.7 V Si, 0.3 V Ge).`,
    R`Forward bias: barrier lowered, large current above the knee; reverse bias: tiny current until breakdown. Dynamic resistance ΔV/ΔI.`,
    R`Half-wave rectifier: output frequency = input; full-wave: twice the input; capacitor filter smooths.`,
    R`LED: forward bias, λ ≈ hc/E_g. Photodiode: reverse bias, current ∝ light. Solar cell: no bias, 4th-quadrant I–V, V_oc and I_sc.`,
    R`Zener: heavily doped, sharp reverse breakdown at V_Z; regulator in parallel with load, I = I_Z + I_L.`,
    R`Gates: AND, OR, NOT, NAND, NOR (truth tables); NAND and NOR are universal; De Morgan's theorems.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 3, §9.5 Band Theory of Solids`, url: 'https://openstax.org/books/university-physics-volume-3/pages/9-5-band-theory-of-solids' },
    { t: R`OpenStax University Physics Vol. 3, §9.6 Semiconductors and Doping`, url: 'https://openstax.org/books/university-physics-volume-3/pages/9-6-semiconductors-and-doping' },
    { t: R`OpenStax University Physics Vol. 3, §9.7 Semiconductor Devices`, url: 'https://openstax.org/books/university-physics-volume-3/pages/9-7-semiconductor-devices' },
    { t: R`Wikipedia: Zener diode`, url: 'https://en.wikipedia.org/wiki/Zener_diode' },
    { t: R`Wikipedia: Logic gate`, url: 'https://en.wikipedia.org/wiki/Logic_gate' }
  ]
});
})();
