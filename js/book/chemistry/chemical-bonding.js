// Book chapter: Chemical Bonding and Molecular Structure. Full theory with diagrams (rendered on the Theory tab).
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var cbFigEnergy = D.plot({
  w: 420, h: 260, x: [30, 300], y: [-520, 320], pad: [18, 22, 30, 46],
  ylabel: 'energy (kJ/mol)', mathLabels: false,
  xticks: [74, 150, 250], yticks: [[-436, '−436'], [-200, '−200'], [200, '200']],
  fns: [{ f: function (r) { var e = 1 - Math.exp(-0.03 * (r - 74)); return 436 * e * e - 436; }, from: 36, to: 300 }],
  guides: [[74, -436]], pts: [{ x: 74, y: -436, label: 'most stable: H₂ forms', pos: 'e', math: false, size: 13 }],
  texts: [{ x: 296, y: 45, s: 'distance between nuclei (pm) →', color: 'm', size: 12, anchor: 'end' }, { x: 225, y: 150, s: 'atoms far apart: no attraction', color: 'm', size: 12 }, { x: 64, y: 250, s: 'nuclei repel', color: 'r', size: 12, anchor: 'start' },
    { x: 150, y: -330, s: 'attraction wins', color: 'g', size: 12, anchor: 'start' }],
  label: 'Potential energy of two hydrogen atoms as they come closer'
});

function cbLewis(sym, dots) { return D.molecule({ w: 70, h: 64, atoms: [{ x: 35, y: 32, s: sym, dots: dots, lpd: sym.length > 1 ? 19 : 15 }], label: 'Lewis symbol of ' + sym }); }
var cbFigLewisSymbols = D.row([
  [cbLewis('Li', [[0, 1]]), 'Li · 1'], [cbLewis('Be', [[0, 1], [180, 1]]), 'Be · 2'], [cbLewis('B', [[0, 1], [90, 1], [180, 1]]), 'B · 3'],
  [cbLewis('C', [[0, 1], [90, 1], [180, 1], [270, 1]]), 'C · 4'], [cbLewis('N', [[90, 2], [0, 1], [180, 1], [270, 1]]), 'N · 5'],
  [cbLewis('O', [[90, 2], [180, 2], [0, 1], [270, 1]]), 'O · 6'], [cbLewis('F', [[90, 2], [180, 2], [270, 2], [0, 1]]), 'F · 7'],
  [cbLewis('Ne', [[90, 2], [180, 2], [270, 2], [0, 2]]), 'Ne · 8']
]);

var cbFigNaCl = D.svg(440, 140, [
  D.mol({ atoms: [{ x: 40, y: 62, s: 'Na', dots: [[0, 1]], dc: 'o' }, { x: 135, y: 62, s: 'Cl', dots: [[90, 2], [270, 2], [0, 2], [180, 1]] }] }),
  D.path('M60 54 Q 88 18 114 52', { color: 'o', w: 1.8 }), D.arrow(106, 42, 115, 54, { color: 'o', head: 8 }),
  D.text(88, 14, 'one electron moves', { color: 'o', size: 12 }),
  D.arrow(180, 62, 228, 62, { w: 2, head: 9 }),
  D.mol({ atoms: [{ x: 268, y: 62, s: 'Na', q: '+' }, { x: 370, y: 62, s: 'Cl', q: '−', dots: [[90, 2], [270, 2], [0, 2], [180, 2]] }] }),
  D.text(40, 100, '2, 8, 1', { color: 'm', size: 12 }), D.text(135, 100, '2, 8, 7', { color: 'm', size: 12 }),
  D.text(268, 100, '2, 8 (like Ne)', { color: 'm', size: 12 }), D.text(370, 100, '2, 8, 8 (like Ar)', { color: 'm', size: 12 }),
  D.text(320, 128, 'opposite charges attract: ionic bond', { color: 'c', size: 12, bold: true })
], 'Sodium gives one electron to chlorine, forming Na+ and Cl- ions');

var cbFigBornHaber = (function () {
  function y(E) { return 40 + (725 - E) * 0.24; }
  return D.svg(470, 335, [
    D.line(20, y(0), 100, y(0), { w: 2.2 }), D.text(104, y(0), 'Na(s) + ½Cl_2(g)', { anchor: 'start', size: 12 }),
    D.line(50, y(108), 130, y(108), { w: 2.2 }), D.text(134, y(108), 'Na(g) + ½Cl_2(g)', { anchor: 'start', size: 12 }),
    D.line(80, y(229), 160, y(229), { w: 2.2 }), D.text(164, y(229), 'Na(g) + Cl(g)', { anchor: 'start', size: 12 }),
    D.line(110, y(725), 320, y(725), { w: 2.2 }), D.text(324, y(725), 'Na^+(g) + e^− + Cl(g)', { anchor: 'start', size: 12 }),
    D.line(250, y(376), 340, y(376), { w: 2.2 }), D.text(344, y(376), 'Na^+(g) + Cl^−(g)', { anchor: 'start', size: 12 }),
    D.line(20, y(-411), 340, y(-411), { w: 2.2, color: 'c' }), D.text(180, y(-411) + 14, 'NaCl(s)', { size: 12, bold: true, color: 'c' }),
    D.arrow(60, y(0), 60, y(108), { color: 'o', head: 7 }), D.text(66, y(54), '+108', { anchor: 'start', size: 11, color: 'o' }),
    D.arrow(90, y(108), 90, y(229), { color: 'o', head: 7 }), D.text(96, y(168), '+121', { anchor: 'start', size: 11, color: 'o' }),
    D.arrow(120, y(229), 120, y(725), { color: 'o', head: 8 }), D.text(126, y(480), '+496 (ionisation)', { anchor: 'start', size: 11, color: 'o' }),
    D.arrow(270, y(725), 270, y(376), { color: 'b', head: 8 }), D.text(264, y(560), '−349 (electron gain)', { anchor: 'end', size: 11, color: 'b' }),
    D.arrow(300, y(376), 300, y(-411), { color: 'g', head: 8, w: 2.6 }), D.text(306, y(-20), '−787 (lattice', { anchor: 'start', size: 11, color: 'g' }),
    D.text(306, y(-20) + 13, 'formation)', { anchor: 'start', size: 11, color: 'g' }),
    D.arrow(30, y(0), 30, y(-411), { color: 'r', head: 8, dash: '5 3' }), D.text(36, y(-200), '−411', { anchor: 'start', size: 11, color: 'r' }),
    D.text(36, y(-200) + 13, '(ΔfH)', { anchor: 'start', size: 11, color: 'r' })
  ], 'Born-Haber cycle for sodium chloride');
})();

var cbFigLewisStructures = D.row([
  [D.molecule({ w: 150, h: 110, atoms: [{ x: 75, y: 50, s: 'O', lp: [45, 135] }, { x: 35, y: 85, s: 'H' }, { x: 115, y: 85, s: 'H' }], bonds: [[0, 1], [0, 2]], label: 'Lewis structure of water' }), 'H₂O: 2 bond pairs, 2 lone pairs'],
  [D.molecule({ w: 170, h: 110, atoms: [{ x: 30, y: 55, s: 'O', lp: [135, 225] }, { x: 85, y: 55, s: 'C' }, { x: 140, y: 55, s: 'O', lp: [45, 315] }], bonds: [[0, 1, 2], [1, 2, 2]], label: 'Lewis structure of carbon dioxide' }), 'CO₂: two double bonds'],
  [D.molecule({ w: 150, h: 110, atoms: [{ x: 45, y: 55, s: 'N', lp: [180] }, { x: 105, y: 55, s: 'N', lp: [0] }], bonds: [[0, 1, 3]], label: 'Lewis structure of nitrogen' }), 'N₂: a triple bond']
]);

var cbFigPolar = D.svg(320, 150, [
  D.ellipse(170, 62, 108, 40, { color: 'c', fill: 'soft', w: 1.2, dash: '4 3' }),
  D.mol({ atoms: [{ x: 95, y: 62, s: 'H' }, { x: 205, y: 62, s: 'Cl', size: 17 }], bonds: [[0, 1]] }),
  D.text(95, 32, 'δ+', { color: 'b', bold: true }), D.text(205, 28, 'δ−', { color: 'r', bold: true }),
  D.line(95, 120, 95, 132, { color: 'k', w: 2 }), D.arrow(89, 126, 210, 126, { color: 'k', w: 2, head: 9 }),
  D.text(150, 144, 'dipole arrow: from + end to − end', { color: 'm', size: 12 })
], 'Polar H-Cl bond with partial charges and the electron cloud pulled towards chlorine');

var cbFigDipole = D.row([
  [D.svg(200, 130, [
    D.mol({ atoms: [{ x: 30, y: 55, s: 'O' }, { x: 100, y: 55, s: 'C' }, { x: 170, y: 55, s: 'O' }], bonds: [[0, 1, 2], [1, 2, 2]] }),
    D.arrow(88, 85, 42, 85, { color: 'r', head: 8 }), D.arrow(112, 85, 158, 85, { color: 'r', head: 8 }),
    D.text(100, 112, 'equal and opposite: μ = 0', { color: 'm', size: 12 })
  ], 'Bond dipoles in carbon dioxide cancel'), 'CO₂ (linear): non-polar'],
  [D.svg(200, 150, [
    D.mol({ atoms: [{ x: 100, y: 45, s: 'O', lp: [45, 135] }, { x: 55, y: 95, s: 'H' }, { x: 145, y: 95, s: 'H' }], bonds: [[0, 1], [0, 2]] }),
    D.arrow(53, 80, 80, 50, { color: 'r', head: 7, w: 1.8 }), D.arrow(147, 80, 120, 50, { color: 'r', head: 7, w: 1.8 }),
    D.arrow(100, 132, 100, 92, { color: 'g', head: 9, w: 2.6 }), D.text(108, 118, 'net μ = 1.85 D', { anchor: 'start', color: 'g', size: 12 })
  ], 'Bond dipoles in water add up'), 'H₂O (bent): polar']
]);

var cbFigVSEPR = D.row([
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 20, y: 60, s: 'Cl' }, { x: 65, y: 60, s: 'Be' }, { x: 110, y: 60, s: 'Cl' }], bonds: [[0, 1], [1, 2]], label: 'linear BeCl2' }), 'BeCl₂ · linear · 180°'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 65, y: 68, s: 'B' }, { x: 65, y: 24, s: 'F' }, { x: 27, y: 90, s: 'F' }, { x: 103, y: 90, s: 'F' }], bonds: [[0, 1], [0, 2], [0, 3]], label: 'trigonal planar BF3' }), 'BF₃ · trigonal planar · 120°'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 62, y: 66, s: 'C' }, { x: 62, y: 20, s: 'H' }, { x: 22, y: 90, s: 'H' }, { x: 90, y: 104, s: 'H' }, { x: 108, y: 76, s: 'H' }], bonds: [[0, 1], [0, 2], [0, 3, 'w'], [0, 4, 'h']], label: 'tetrahedral CH4' }), 'CH₄ · tetrahedral · 109.5°'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 62, y: 62, s: 'P' }, { x: 62, y: 16, s: 'Cl' }, { x: 62, y: 108, s: 'Cl' }, { x: 18, y: 62, s: 'Cl' }, { x: 104, y: 82, s: 'Cl' }, { x: 102, y: 40, s: 'Cl' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4, 'w'], [0, 5, 'h']], label: 'trigonal bipyramidal PCl5' }), 'PCl₅ · trigonal bipyramidal · 90°, 120°'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 65, y: 62, s: 'S' }, { x: 65, y: 16, s: 'F' }, { x: 65, y: 108, s: 'F' }, { x: 20, y: 62, s: 'F' }, { x: 110, y: 62, s: 'F' }, { x: 38, y: 90, s: 'F' }, { x: 92, y: 36, s: 'F' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5, 'w'], [0, 6, 'h']], label: 'octahedral SF6' }), 'SF₆ · octahedral · 90°']
]);

var cbFigLonePairs = D.row([
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 62, y: 52, s: 'N', lp: [90] }, { x: 22, y: 82, s: 'H' }, { x: 84, y: 98, s: 'H' }, { x: 106, y: 70, s: 'H' }], bonds: [[0, 1], [0, 2, 'w'], [0, 3, 'h']], label: 'pyramidal ammonia' }), 'NH₃ · pyramidal · 107°'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 65, y: 52, s: 'O', lp: [55, 125] }, { x: 26, y: 90, s: 'H' }, { x: 104, y: 90, s: 'H' }], bonds: [[0, 1], [0, 2]], label: 'bent water' }), 'H₂O · bent · 104.5°'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 62, y: 62, s: 'Cl', lp: [150, 210] }, { x: 62, y: 16, s: 'F' }, { x: 62, y: 108, s: 'F' }, { x: 110, y: 62, s: 'F' }], bonds: [[0, 1], [0, 2], [0, 3]], label: 'T-shaped ClF3' }), 'ClF₃ · T-shaped'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 65, y: 62, s: 'Xe', lp: [115, 295], lpd: 19 }, { x: 18, y: 62, s: 'F' }, { x: 112, y: 62, s: 'F' }, { x: 40, y: 92, s: 'F' }, { x: 90, y: 34, s: 'F' }], bonds: [[0, 1], [0, 2], [0, 3, 'w'], [0, 4, 'h']], label: 'square planar XeF4' }), 'XeF₄ · square planar'],
  [D.molecule({ w: 130, h: 120, atoms: [{ x: 65, y: 62, s: 'Xe', lp: [90, 230, 310], lpd: 19 }, { x: 18, y: 62, s: 'F' }, { x: 112, y: 62, s: 'F' }], bonds: [[0, 1], [0, 2]], label: 'linear XeF2' }), 'XeF₂ · linear']
]);

var cbFigOverlap = D.row([
  [D.svg(160, 110, [D.circle(62, 55, 34, { color: 'c', fill: 'soft' }), D.circle(98, 55, 34, { color: 'o', fill: 'soft' }), D.dot(62, 55, { r: 2.5 }), D.dot(98, 55, { r: 2.5 }), D.text(80, 102, 's + s', { size: 12, color: 'm' })], 's-s overlap'), '(a) s–s: σ bond (H₂)'],
  [D.svg(200, 110, [D.circle(60, 55, 30, { color: 'c', fill: 'soft' }), D.lobe(95, 55, 46, 34, 180, { color: 'o' }), D.lobe(95, 55, 40, 30, 0, { color: 'o', fill: 'none', dash: '4 3' }), D.dot(60, 55, { r: 2.5 }), D.dot(95, 55, { r: 2.5 }), D.text(95, 102, 's + p (end-on)', { size: 12, color: 'm' })], 's-p overlap'), '(b) s–p: σ bond (HCl)'],
  [D.svg(220, 110, [D.lobe(70, 55, 42, 30, 0, { color: 'c' }), D.lobe(70, 55, 42, 30, 180, { color: 'c', fill: 'none', dash: '4 3' }), D.lobe(140, 55, 42, 30, 180, { color: 'o' }), D.lobe(140, 55, 42, 30, 0, { color: 'o', fill: 'none', dash: '4 3' }), D.dot(70, 55, { r: 2.5 }), D.dot(140, 55, { r: 2.5 }), D.text(105, 102, 'p + p (end-on)', { size: 12, color: 'm' })], 'p-p head-on overlap'), '(c) p–p head-on: σ bond'],
  [D.svg(150, 130, [D.lobe(55, 65, 44, 34, 90, { color: 'c' }), D.lobe(55, 65, 44, 34, 270, { color: 'c' }), D.lobe(95, 65, 44, 34, 90, { color: 'o' }), D.lobe(95, 65, 44, 34, 270, { color: 'o' }), D.line(55, 65, 95, 65, { color: 'k', w: 1.4 }), D.dot(55, 65, { r: 2.5 }), D.dot(95, 65, { r: 2.5 })], 'p-p sideways overlap'), '(d) p–p sideways: π bond']
]);

var cbFigHybrid = D.row([
  [D.svg(170, 120, [D.lobe(85, 60, 62, 40, 0, { color: 'c' }), D.lobe(85, 60, 62, 40, 180, { color: 'c' }), D.dot(85, 60, { r: 3 }), D.text(85, 112, '2 orbitals, 180°', { size: 12, color: 'm' })], 'sp hybrid orbitals'), 'sp: linear'],
  [D.svg(160, 150, [D.lobe(80, 75, 58, 38, 90, { color: 'o' }), D.lobe(80, 75, 58, 38, 210, { color: 'o' }), D.lobe(80, 75, 58, 38, 330, { color: 'o' }), D.dot(80, 75, { r: 3 }), D.angle(80, 75, 18, 210, 330, '', { color: 'k' }), D.text(80, 108, '120°', { size: 12 })], 'sp2 hybrid orbitals'), 'sp²: trigonal planar'],
  [D.svg(160, 150, [D.lobe(80, 78, 58, 36, 268, { color: 'b', fill: 'none', dash: '4 3' }), D.lobe(80, 78, 58, 38, 90, { color: 'b' }), D.lobe(80, 78, 58, 38, 205, { color: 'b' }), D.lobe(80, 78, 58, 38, 335, { color: 'b' }), D.dot(80, 78, { r: 3 }), D.text(80, 144, '4 orbitals, 109.5°', { size: 12, color: 'm' })], 'sp3 hybrid orbitals'), 'sp³: tetrahedral']
]);

var cbFigEthene = D.svg(360, 170, [
  D.lobe(150, 85, 48, 30, 90, { color: 'o' }), D.lobe(150, 85, 48, 30, 270, { color: 'o' }), D.lobe(210, 85, 48, 30, 90, { color: 'o' }), D.lobe(210, 85, 48, 30, 270, { color: 'o' }),
  D.mol({ atoms: [{ x: 150, y: 85, s: 'C' }, { x: 210, y: 85, s: 'C' }, { x: 100, y: 55, s: 'H' }, { x: 100, y: 115, s: 'H' }, { x: 260, y: 55, s: 'H' }, { x: 260, y: 115, s: 'H' }],
    bonds: [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5]] }),
  D.text(180, 22, 'π bond: sideways overlap above and below', { color: 'o', size: 12 }),
  D.text(180, 162, 'σ bonds: all in one plane (sp²)', { color: 'm', size: 12 })
], 'Bonding in ethene: sp2 sigma framework and a pi bond from unhybridised p orbitals');

var cbFigResonance = D.svg(520, 150, [
  D.mol({ atoms: [{ x: 25, y: 85, s: 'O', lp: [151, 271] }, { x: 75, y: 55, s: 'O', lp: [90], q: '+' }, { x: 125, y: 85, s: 'O', lp: [239, 329, 59], q: '−' }], bonds: [[0, 1, 2], [1, 2]] }),
  D.arrow(158, 70, 200, 70, { both: true, head: 8 }),
  D.mol({ dx: 210, atoms: [{ x: 25, y: 85, s: 'O', lp: [121, 211, 301], q: '−' }, { x: 75, y: 55, s: 'O', lp: [90], q: '+' }, { x: 125, y: 85, s: 'O', lp: [29, 269] }], bonds: [[0, 1], [1, 2, 2]] }),
  D.mol({ dx: 375, atoms: [{ x: 25, y: 85, s: 'O' }, { x: 75, y: 55, s: 'O' }, { x: 125, y: 85, s: 'O' }], bonds: [[0, 1, 1.5], [1, 2, 1.5]] }),
  D.text(395, 112, 'δ−', { color: 'r', size: 12 }), D.text(505, 112, 'δ−', { color: 'r', size: 12 }),
  D.text(180, 140, 'two resonance structures', { color: 'm', size: 12 }), D.text(450, 140, 'the real molecule (hybrid)', { color: 'c', size: 12, bold: true })
], 'Resonance structures of ozone and the resonance hybrid');

var cbFigMOH2 = D.levels({
  w: 400, h: 250, label: 'Molecular orbital diagram for H2',
  cols: [{ x: 80, title: 'H atom', side: 'l', levels: [{ id: 'a', y: 140, e: 1, label: '1s' }] },
    { x: 200, title: 'H₂ molecule', levels: [{ id: 's', y: 200, e: 2, label: 'σ1s (bonding)' }, { id: 'ss', y: 80, e: 0, label: 'σ*1s (antibonding)' }] },
    { x: 330, title: 'H atom', levels: [{ id: 'b', y: 140, e: 1, label: '1s' }] }],
  links: [['a', 's'], ['a', 'ss'], ['b', 's'], ['b', 'ss']]
});

function cbMO(name, atomE, order) {
  var c = order === 'N' ? { s2p: 145, pi: 175 } : { s2p: 182, pi: 158 };
  var e = order === 'N' ? { pi: 4, s2p: 2, pis: 0 } : { pi: 4, s2p: 2, pis: 2 };
  return D.levels({
    w: 400, h: 330, label: 'Molecular orbital diagram for ' + name,
    cols: [{ x: 95, title: name.charAt(0), side: 'l', levels: [{ id: 'a2s', y: 255, e: 2, label: '2s' }, { id: 'a2p', y: 128, n: 3, e: atomE, label: '2p' }] },
      { x: 200, title: name, levels: [{ id: 's', y: 285, e: 2, label: 'σ2s' }, { id: 'ss', y: 228, e: 2, label: 'σ*2s' },
        { id: 'pi', y: c.pi, n: 2, e: e.pi, label: 'π2p' }, { id: 'sp', y: c.s2p, e: e.s2p, label: 'σ2p' },
        { id: 'pis', y: 108, n: 2, e: e.pis, label: 'π*2p' }, { id: 'sps', y: 68, e: 0, label: 'σ*2p' }] },
      { x: 322, title: name.charAt(0), levels: [{ id: 'b2s', y: 255, e: 2, label: '2s' }, { id: 'b2p', y: 128, n: 3, e: atomE, label: '2p' }] }],
    links: [['a2s', 's'], ['a2s', 'ss'], ['b2s', 's'], ['b2s', 'ss'], ['a2p', 'sp'], ['a2p', 'sps'], ['b2p', 'sp'], ['b2p', 'sps']]
  });
}
var cbFigMON2O2 = D.row([[cbMO('N₂', 3, 'N'), 'N₂: bond order 3, no unpaired electrons'], [cbMO('O₂', 4, 'O'), 'O₂: bond order 2, two unpaired electrons']]);

var cbFigHBond = D.row([
  [D.molecule({ w: 300, h: 170, label: 'Hydrogen bonds between water molecules',
    atoms: [{ x: 60, y: 70, s: 'O', color: 'r' }, { x: 28, y: 100, s: 'H' }, { x: 100, y: 92, s: 'H' },
      { x: 150, y: 115, s: 'O', color: 'r' }, { x: 138, y: 158, s: 'H' }, { x: 195, y: 95, s: 'H' },
      { x: 245, y: 60, s: 'O', color: 'r' }, { x: 282, y: 82, s: 'H' }, { x: 240, y: 18, s: 'H' }],
    bonds: [[0, 1], [0, 2], [3, 4], [3, 5], [6, 7], [6, 8], [2, 3, 'hb'], [5, 6, 'hb']],
    texts: [{ x: 132, y: 90, s: 'H-bond', color: 'o', size: 11 }, { x: 228, y: 92, s: 'H-bond', color: 'o', size: 11 }] }), 'water: each H points at an O of the next molecule'],
  [D.molecule({ w: 270, h: 120, label: 'Zig-zag chain of hydrogen fluoride',
    atoms: [{ x: 20, y: 80, s: 'F', color: 'g' }, { x: 60, y: 45, s: 'H' }, { x: 105, y: 80, s: 'F', color: 'g' }, { x: 145, y: 45, s: 'H' }, { x: 190, y: 80, s: 'F', color: 'g' }, { x: 230, y: 45, s: 'H' }],
    bonds: [[0, 1], [1, 2, 'hb'], [2, 3], [3, 4, 'hb'], [4, 5]] }), 'HF: zig-zag chains']
]);

// ---------- chapter text ----------
JEE.book('chemistry', 'chemical-bonding', {
  intro: [
    R`Why does sodium chloride form hard crystals, water flow as a liquid, and oxygen stick to a magnet when it is liquefied? Why is a water molecule bent but a carbon dioxide molecule straight? The answers all come from <b>chemical bonding</b>: how atoms hold on to each other.`,
    R`In this chapter you will learn why atoms bond at all, the two main kinds of bonds (ionic and covalent), how to predict the <b>shape</b> of a molecule, and two theories that explain bonds in more depth (valence bond theory and molecular orbital theory). This chapter is the foundation of all of chemistry, including organic chemistry, so read it slowly and draw the structures yourself as you go.`
  ],
  sections: [
    { h: R`Why do atoms bond?`, t: [0], blocks: [
      R`Atoms bond for the same reason a ball rolls downhill: to reach a state of <b>lower energy</b>, which is more stable. Two separate hydrogen atoms have more energy than one hydrogen molecule, so they join and release the extra energy.`,
      { fig: cbFigEnergy, cap: R`Energy of two hydrogen atoms as they come closer. Far apart, they don't affect each other. As they approach, attraction lowers the energy. Too close, the nuclei repel. The lowest point (74 pm, −436 kJ/mol) is the H–H bond.` },
      R`The distance at the bottom of this curve is the <b>bond length</b> (74 pm for H₂), and the depth of the dip is the <b>bond enthalpy</b>, the energy needed to break the bond (436 kJ/mol for H₂).`,
      R`Noble gases (He, Ne, Ar…) hardly react. Their outer shells are full (2 electrons for He, 8 for the others). Early chemists guessed that other atoms bond so as to reach such a stable noble-gas arrangement. This idea is the starting point of the next section.`,
      { analogy: R`Think of two magnets on a table. Far apart, nothing happens. Closer, they snap together and you need effort (energy) to pull them apart again. That effort is like the bond energy.` },
      { check: { q: R`On the energy curve, what do the position and the depth of the lowest point represent?`, ans: R`The position (distance) is the bond length; the depth is the bond enthalpy (energy needed to break the bond).` } }
    ] },

    { h: R`The Kossel–Lewis approach: octets and Lewis symbols`, t: [0], blocks: [
      R`In 1916, Kossel and Lewis suggested that atoms combine by <b>losing, gaining or sharing electrons</b> so that each ends up with 8 electrons in its outer shell, like a noble gas. This is the <b>octet rule</b> (for hydrogen, the goal is 2 electrons, like helium: the duplet).`,
      R`Only the outer (<b>valence</b>) electrons take part in bonding. A <b>Lewis symbol</b> shows the element's symbol with its valence electrons as dots around it. The number of dots equals the group number (for groups 1, 2 and 13–18, use the last digit).`,
      { fig: cbFigLewisSymbols, cap: R`Lewis symbols of the second-period elements. The number after each symbol is the number of valence electrons. Electrons are placed singly on the four sides first, then paired.` },
      R`An element's usual <b>valence</b> (combining capacity) follows from this: an atom with 1–4 valence electrons usually uses all of them, while one with 5–7 needs (8 − number of dots) more. So N forms 3 bonds, O forms 2 and F forms 1.`,
      { h3: R`Limits of the octet rule` },
      { table: { head: [R`Exception`, R`Examples`, R`What happens`], rows: [
        [R`Incomplete octet`, R`BeCl₂, BF₃, AlCl₃, LiCl`, R`The central atom has fewer than 8 electrons (Be has 4, B has 6).`],
        [R`Odd-electron molecules`, R`NO, NO₂`, R`The total number of electrons is odd, so not every atom can have 8.`],
        [R`Expanded octet`, R`PCl₅ (10), SF₆ (12), H₂SO₄`, R`Elements of period 3 and beyond can use d orbitals and hold more than 8.`]] } },
      R`The octet rule also cannot explain the <b>shapes</b> of molecules or why some molecules are more stable than others. Later sections (VSEPR, valence bond theory and molecular orbital theory) fix these gaps.`,
      { check: { q: R`How many valence electrons does sulfur have, and how many bonds does it usually form to complete its octet?`, ans: R`Sulfur is in group 16, so it has 6 valence electrons and usually forms 2 bonds (as in H₂S).` } }
    ] },

    { h: R`The ionic bond`, t: [1], blocks: [
      R`An <b>ionic bond</b> forms when one atom <b>gives</b> electrons to another. The atom that loses electrons becomes a positive ion (cation); the one that gains them becomes a negative ion (anion). The strong pull between opposite charges is the ionic bond.`,
      { fig: cbFigNaCl, cap: R`Sodium (2, 8, 1) gives its single outer electron to chlorine (2, 8, 7). Both ions now have noble-gas arrangements, and their opposite charges hold them together.` },
      R`This happens most easily between a metal with a <b>low ionisation enthalpy</b> (it lets go of electrons easily, e.g. Na, K, Ca) and a non-metal with a <b>high electron gain enthalpy</b> (it is happy to accept electrons, e.g. Cl, F, O).`,
      R`An ionic compound is not made of separate molecules. Millions of ions pack together in a regular 3-D pattern called a <b>crystal lattice</b>; in NaCl, every Na⁺ is surrounded by 6 Cl⁻ and every Cl⁻ by 6 Na⁺.`,
      { points: [R`Ionic compounds are hard crystalline solids with high melting and boiling points.`, R`They conduct electricity when melted or dissolved in water (the ions can move), but not as solids.`, R`They usually dissolve in water and not in solvents like kerosene.`] },
      { check: { q: R`Write the electronic change when magnesium (2, 8, 2) combines with oxygen (2, 6).`, ans: R`Mg loses 2 electrons → Mg²⁺ (2, 8); O gains 2 electrons → O²⁻ (2, 8). They form MgO.` } }
    ] },

    { h: R`Lattice enthalpy and the Born–Haber cycle`, t: [1], blocks: [
      R`Removing an electron from Na <i>costs</i> energy (496 kJ/mol), and Cl gaining it gives back only 349 kJ/mol. So why does NaCl form at all? Because when the gaseous ions come together to make the solid crystal, a huge amount of energy is released. This is what makes the whole process "downhill".`,
      R`<b>Lattice enthalpy</b> is the energy needed to break one mole of an ionic solid completely into its gaseous ions. For NaCl it is about +788 kJ/mol: \[\text{NaCl(s)} \rightarrow \text{Na}^+\text{(g)} + \text{Cl}^-\text{(g)}\qquad \Delta H = +788\ \text{kJ/mol}\] The larger the lattice enthalpy, the more stable the ionic solid.`,
      { fig: cbFigBornHaber, cap: R`The Born–Haber cycle for NaCl (values in kJ/mol). Going up costs energy; going down releases it. Both routes from Na(s) + ½Cl₂(g) to NaCl(s) must give the same total, −411 kJ/mol. This lets us calculate the lattice enthalpy, which cannot be measured directly.` },
      { derive: R`Calculating the lattice enthalpy of NaCl (Hess's law)`, steps: [
        R`Route 1 (direct): \(\Delta_fH = -411\) kJ/mol.`,
        R`Route 2 (step by step): sublimation of Na (+108) + half the bond energy of Cl₂ (+121) + ionisation enthalpy of Na (+496) + electron gain enthalpy of Cl (−349) + lattice formation (U).`,
        R`Both routes start and end at the same place, so \(-411 = 108 + 121 + 496 - 349 + U\), giving \(U = -411 - 376 = -787\) kJ/mol.`,
        R`So forming the lattice releases about 787 kJ/mol; breaking it (the lattice enthalpy) needs about +787 ≈ +788 kJ/mol.`
      ] },
      { h3: R`What makes the lattice enthalpy large?` },
      R`The attraction between two ions grows with their charges and shrinks with distance (Coulomb's law). So the lattice enthalpy is larger when <b>the ions carry bigger charges</b> and when <b>the ions are smaller</b> (so they sit closer): \[\text{lattice enthalpy} \propto \frac{z_+\,z_-}{r_+ + r_-}\]`,
      { ex: { q: R`Arrange NaCl, MgO and NaF in order of increasing lattice enthalpy.`,
        steps: [R`MgO has ions with charges +2 and −2 (product 4); NaCl and NaF have +1 and −1 (product 1). So MgO is by far the largest.`, R`Between NaCl and NaF, F⁻ is smaller than Cl⁻, so the ions in NaF are closer and NaF has the larger value.`],
        ans: R`NaCl < NaF < MgO (roughly 790, 920 and 3800 kJ/mol)` } },
      { mistake: R`Thinking that ionic bonds form because the electron transfer itself releases energy. Usually it costs energy overall; the large lattice enthalpy is what makes the ionic solid stable.` }
    ] },

    { h: R`The covalent bond and Lewis structures`, t: [2], blocks: [
      R`Two non-metal atoms (such as two Cl atoms) both want electrons, so neither will give one away. Instead they <b>share</b> a pair of electrons. A shared pair is a <b>covalent bond</b>, drawn as a line. Each atom counts the shared electrons as its own, so both complete their octets.`,
      R`Atoms can share one pair (a single bond, as in H–H), two pairs (a double bond, as in O=O) or three pairs (a triple bond, as in N≡N). Pairs of valence electrons that are not shared are called <b>lone pairs</b>.`,
      { fig: cbFigLewisStructures, cap: R`Lewis structures. Each line is a shared pair of electrons; each pair of dots is a lone pair. Check that every atom (except H) is surrounded by 8 electrons.` },
      { h3: R`How to draw a Lewis structure` },
      { points: [R`Add up the valence electrons of all the atoms. Add one for each negative charge and subtract one for each positive charge.`, R`Put the least electronegative atom in the centre (never H). Join each outer atom to it with a single bond.`, R`Give the remaining electrons to the outer atoms as lone pairs to complete their octets, then put any left over on the central atom.`, R`If the central atom still has fewer than 8, turn lone pairs on outer atoms into double or triple bonds.`] },
      { h3: R`Formal charge` },
      R`When more than one Lewis structure is possible, <b>formal charge</b> helps pick the best one: \[\text{FC} = V - L - \frac{B}{2}\] where V = valence electrons of the free atom, L = electrons in lone pairs on it, and B = electrons in bonds around it. The best structure has formal charges as small as possible.`,
      { ex: { q: R`Find the formal charges on the three oxygen atoms in ozone, O=O–O (the central O has one lone pair, the double-bonded end O has two, and the single-bonded end O has three).`,
        steps: [R`Central O: V = 6, L = 2, B = 6. FC = 6 − 2 − 3 = +1.`, R`Double-bonded end O: V = 6, L = 4, B = 4. FC = 6 − 4 − 2 = 0.`, R`Single-bonded end O: V = 6, L = 6, B = 2. FC = 6 − 6 − 1 = −1.`],
        ans: R`+1 (centre), 0 and −1 (ends); they add up to 0, the charge on O₃` } },
      { check: { q: R`How many lone pairs and bond pairs are there on the N atom in NH₃?`, ans: R`3 bond pairs (to the three H atoms) and 1 lone pair.` } }
    ] },

    { h: R`Bond parameters: length, angle, enthalpy and order`, t: [2], blocks: [
      R`Four numbers describe a covalent bond:`,
      { points: [R`<b>Bond length</b>: the distance between the two nuclei (measured in pm).`, R`<b>Bond angle</b>: the angle between two bonds on the same atom (for example 104.5° in water).`, R`<b>Bond enthalpy</b>: the energy needed to break one mole of these bonds in the gas phase.`, R`<b>Bond order</b>: the number of shared electron pairs between the two atoms (1 for a single bond, 2 for double, 3 for triple).`] },
      { table: { head: [R`Bond`, R`Bond order`, R`Length (pm)`, R`Enthalpy (kJ/mol)`], rows: [
        [R`C–C`, R`1`, R`154`, R`348`], [R`C=C`, R`2`, R`134`, R`614`], [R`C≡C`, R`3`, R`120`, R`839`]] } },
      R`The table shows a key pattern: <b>as bond order increases, the bond gets shorter and stronger</b>. More shared electrons pull the two nuclei closer and hold them more tightly.`,
      { mistake: R`Assuming a double bond is exactly twice as strong as a single bond. C=C (614) is less than twice C–C (348), because the second bond (a π bond, explained later) is weaker than the first.` },
      { check: { q: R`Which is longer: the bond in N₂ or the bond in O₂?`, ans: R`O₂. Its bond order is 2, while N₂'s is 3; higher bond order means a shorter bond.` } }
    ] },

    { h: R`Electronegativity, polar bonds and Fajans' rules`, t: [2], blocks: [
      R`<b>Electronegativity</b> is how strongly an atom in a bond pulls the shared electrons towards itself. On the Pauling scale, F is the highest (4.0), then O (3.5), N and Cl (3.0); metals like Na (0.9) are low. It increases across a period and decreases down a group.`,
      R`When two <i>identical</i> atoms share electrons (H₂, Cl₂), the sharing is equal: a <b>non-polar</b> covalent bond. When the atoms differ, the more electronegative one pulls the pair closer and gets a small negative charge (δ−), leaving a small positive charge (δ+) on the other. This is a <b>polar</b> covalent bond.`,
      { fig: cbFigPolar, cap: R`In H–Cl, chlorine is more electronegative, so the shared electron cloud is pulled towards Cl. Cl becomes δ− and H becomes δ+. The crossed arrow points from the positive end to the negative end.` },
      R`So bonds are not simply "ionic" or "covalent": there is a smooth range between them. A large electronegativity difference (more than about 1.7) gives a mostly ionic bond; a small one gives a polar covalent bond; zero gives a non-polar bond.`,
      { h3: R`Fajans' rules: covalent character in ionic bonds` },
      R`Even in an "ionic" compound, the small, positive cation can pull on the electron cloud of the anion and distort it. This distortion is called <b>polarisation</b>, and it gives the bond some covalent character. Covalent character is <b>greater</b> when:`,
      { points: [R`the <b>cation is small</b> (its charge is concentrated: Li⁺ polarises more than Na⁺);`, R`the <b>anion is large</b> (its outer electrons are loosely held and easily pulled: I⁻ more than Cl⁻ more than F⁻);`, R`the <b>charges are high</b> (Al³⁺ more than Mg²⁺ more than Na⁺);`, R`the cation has a <b>pseudo-noble-gas configuration</b> (18 outer electrons, as in Cu⁺ or Ag⁺), which shields the nucleus poorly.`] },
      { ex: { q: R`Arrange LiCl, NaCl and KCl in order of increasing covalent character. Also explain why AlCl₃ is covalent while NaCl is ionic.`,
        steps: [R`The cations get bigger from Li⁺ to Na⁺ to K⁺, so their polarising power decreases. The smallest cation (Li⁺) gives the most covalent character.`, R`Al³⁺ is small and carries a +3 charge, so it distorts the Cl⁻ cloud strongly; Na⁺ is larger with only +1.`],
        ans: R`KCl < NaCl < LiCl; AlCl₃ is covalent because Al³⁺ has very high polarising power` } },
      { check: { q: R`Which has more covalent character: LiF or LiI?`, ans: R`LiI. The iodide ion is much larger, so its electron cloud is more easily polarised.` } }
    ] },

    { h: R`Dipole moment`, t: [3], blocks: [
      R`A polar bond has a positive end and a negative end, like a tiny battery. Its <b>dipole moment</b> measures how polar it is: \[\mu = q\times d\] where q is the size of the separated charge and d the distance between the charges. Its unit is the <b>debye</b> (D): 1 D = 3.336 × 10⁻³⁰ C m.`,
      R`Dipole moment is a <b>vector</b>; chemists draw it as an arrow from the positive end to the negative end. For a molecule with several bonds, the total dipole moment is the <b>vector sum</b> of the bond dipoles, so the <b>shape</b> of the molecule matters.`,
      { fig: cbFigDipole, cap: R`In straight CO₂, the two C=O bond dipoles are equal and point in opposite directions, so they cancel (μ = 0). In bent H₂O, they add up to a net dipole moment of 1.85 D.` },
      { table: { head: [R`Molecule`, R`Shape`, R`Dipole moment`], rows: [
        [R`CO₂, BF₃, CH₄, CCl₄`, R`symmetrical`, R`0 (bond dipoles cancel)`], [R`H₂O`, R`bent`, R`1.85 D`], [R`NH₃`, R`pyramidal`, R`1.47 D`], [R`NF₃`, R`pyramidal`, R`0.23 D`], [R`CHCl₃`, R`tetrahedral but unsymmetrical`, R`1.04 D`]] } },
      { note: R`NH₃ and NF₃ have the same shape, but NH₃'s dipole moment is much larger. In NH₃, the lone pair's dipole points the same way as the N–H bond dipoles (towards N), so they add. In NF₃, the N–F bond dipoles point away from N (towards F) and partly cancel the lone pair's effect.`, title: 'A famous comparison' },
      R`Dipole moments are useful: they tell us whether a molecule is symmetrical, and they let us estimate the <b>percentage ionic character</b> of a bond: \[\%\ \text{ionic character} = \frac{\mu_{\text{observed}}}{\mu_{\text{if fully ionic}}}\times100\]`,
      { ex: { q: R`HCl has a dipole moment of 1.03 D and a bond length of 127 pm. Find its percentage ionic character. (Electron charge = 1.6 × 10⁻¹⁹ C.)`,
        steps: [R`If fully ionic: \(\mu = 1.6\times10^{-19}\times127\times10^{-12} = 2.03\times10^{-29}\) C m.`, R`In debye: \(2.03\times10^{-29} \div 3.336\times10^{-30} \approx 6.09\) D.`, R`% ionic character = \(\dfrac{1.03}{6.09}\times100\).`],
        ans: R`about 17%` } },
      { check: { q: R`Why is the dipole moment of BF₃ zero even though each B–F bond is polar?`, ans: R`BF₃ is trigonal planar and symmetrical; the three equal bond dipoles at 120° add up to zero.` } }
    ] },

    { h: R`VSEPR theory: predicting the shapes of molecules`, t: [4], blocks: [
      R`Why is CO₂ straight, BF₃ flat and CH₄ a pyramid-like tetrahedron? The <b>Valence Shell Electron Pair Repulsion (VSEPR)</b> theory gives a simple answer: electron pairs around the central atom repel each other, so they spread out as far apart as possible. The shape that keeps them farthest apart is the shape of the molecule.`,
      { analogy: R`Tie two, three, four, five or six balloons together at their necks. They push each other apart and point in fixed directions: in a line, a triangle, a tetrahedron, a double triangular pyramid and an octahedron. Electron pairs behave in the same way.` },
      R`<b>Rules:</b> (1) Count the electron pairs (bond pairs + lone pairs) around the central atom; a double or triple bond counts as one. (2) Arrange them as far apart as possible. (3) Lone pairs repel more than bond pairs: \[\text{lone pair–lone pair} > \text{lone pair–bond pair} > \text{bond pair–bond pair}\] so lone pairs squeeze the bond angles smaller.`,
      { fig: cbFigVSEPR, cap: R`The five basic shapes, with no lone pairs. A solid wedge means a bond coming towards you; a hashed wedge means a bond going away from you.` },
      R`A quick way to count the electron pairs (the <b>steric number</b>) on the central atom: \[\text{SN} = \tfrac12\,(V + M - c + a)\] where V = valence electrons of the central atom, M = number of monovalent atoms around it (H, halogens), c = positive charge and a = negative charge of an ion. Then SN − (number of bonded atoms) = number of lone pairs.`,
      { fig: cbFigLonePairs, cap: R`Shapes with lone pairs. The shape is named from the positions of the <i>atoms</i> only, but the lone pairs still take up space and push the bonds closer together.` },
      { table: { head: [R`Pairs (SN)`, R`Bond pairs`, R`Lone pairs`, R`Shape`, R`Examples`], rows: [
        [R`2`, R`2`, R`0`, R`linear`, R`BeCl₂, CO₂`], [R`3`, R`3`, R`0`, R`trigonal planar`, R`BF₃`], [R`3`, R`2`, R`1`, R`bent (V-shaped)`, R`SO₂`],
        [R`4`, R`4`, R`0`, R`tetrahedral`, R`CH₄, NH₄⁺`], [R`4`, R`3`, R`1`, R`trigonal pyramidal`, R`NH₃`], [R`4`, R`2`, R`2`, R`bent`, R`H₂O`],
        [R`5`, R`5`, R`0`, R`trigonal bipyramidal`, R`PCl₅`], [R`5`, R`4`, R`1`, R`see-saw`, R`SF₄`], [R`5`, R`3`, R`2`, R`T-shaped`, R`ClF₃`], [R`5`, R`2`, R`3`, R`linear`, R`XeF₂, I₃⁻`],
        [R`6`, R`6`, R`0`, R`octahedral`, R`SF₆`], [R`6`, R`5`, R`1`, R`square pyramidal`, R`BrF₅`], [R`6`, R`4`, R`2`, R`square planar`, R`XeF₄`]] } },
      R`Notice the bond angles in CH₄ (109.5°), NH₃ (107°) and H₂O (104.5°). All three have 4 electron pairs, but each extra lone pair pushes the bonds a little closer together.`,
      { ex: { q: R`Predict the shape of XeF₄.`,
        steps: [R`Xe has 8 valence electrons and there are 4 F atoms: SN = ½(8 + 4) = 6.`, R`4 pairs are bonds to F, so 6 − 4 = 2 are lone pairs.`, R`With 6 pairs, the arrangement is octahedral. The two lone pairs go opposite each other (above and below), leaving the four F atoms in a square.`],
        ans: R`Square planar` } },
      { ex: { q: R`Predict the shape of ClF₃.`,
        steps: [R`SN = ½(7 + 3) = 5, with 3 bond pairs and 2 lone pairs.`, R`5 pairs form a trigonal bipyramid. Lone pairs prefer the roomier equatorial positions, so both go there.`, R`The three F atoms are left in a T arrangement (two axial, one equatorial).`],
        ans: R`T-shaped` } },
      { mistake: R`Naming the shape from all the electron pairs, including the lone pairs. H₂O has 4 electron pairs arranged tetrahedrally, but its <i>shape</i> (the positions of the atoms) is bent.` },
      { check: { q: R`What is the shape of NH₄⁺?`, ans: R`SN = ½(5 + 4 − 1) = 4, all bond pairs, so it is tetrahedral (109.5°).` } }
    ] },

    { h: R`Valence bond theory: σ and π bonds`, t: [5], blocks: [
      R`Lewis structures say electrons are "shared", but not <i>how</i>. <b>Valence bond (VB) theory</b> says a covalent bond forms when a <b>half-filled orbital</b> of one atom <b>overlaps</b> with a half-filled orbital of another, and the two electrons (with opposite spins) pair up in the overlap region. The greater the overlap, the stronger the bond.`,
      R`There are two ways orbitals can overlap:`,
      { fig: cbFigOverlap, cap: R`(a)–(c) Head-on (end-to-end) overlap along the line joining the nuclei gives a <b>sigma (σ) bond</b>. (d) Sideways overlap of two parallel p orbitals, above and below that line, gives a <b>pi (π) bond</b>.` },
      { table: { head: [R`σ bond`, R`π bond`], rows: [
        [R`Head-on overlap along the bond axis`, R`Sideways overlap of parallel p orbitals`], [R`Can form from s–s, s–p or p–p overlap`, R`Only from p–p (or p–d, d–d) overlap`],
        [R`Stronger (more overlap)`, R`Weaker (less overlap)`], [R`Every bond between two atoms has exactly one σ bond`, R`Only in double bonds (1 π) and triple bonds (2 π)`], [R`Free rotation about the bond is possible`, R`Prevents rotation about the bond`]] } },
      { points: [R`A single bond = 1 σ. A double bond = 1 σ + 1 π. A triple bond = 1 σ + 2 π.`, R`π bonds form only after a σ bond is already there.`] },
      { check: { q: R`How many σ and π bonds are there in N₂?`, ans: R`N≡N is a triple bond: 1 σ and 2 π.` } }
    ] },

    { h: R`Hybridisation`, t: [5], blocks: [
      R`Carbon's valence electrons are 2s² 2p². If carbon used these orbitals as they are, the four C–H bonds in methane would not all be the same. Yet experiments show that all four are identical, pointing to the corners of a tetrahedron at 109.5°. How?`,
      R`<b>Hybridisation</b> is the idea that, just before bonding, an atom <b>mixes</b> some of its orbitals (of similar energy) to make an equal number of new, identical <b>hybrid orbitals</b>. These point in the directions that keep them farthest apart, and they overlap better, making stronger bonds.`,
      { fig: cbFigHybrid, cap: R`Shapes of hybrid orbitals. sp: two orbitals in a straight line. sp²: three in a flat triangle. sp³: four pointing to the corners of a tetrahedron (the dashed one points behind the page).` },
      { table: { head: [R`Hybridisation`, R`Orbitals mixed`, R`Geometry`, R`Angle`, R`Examples`], rows: [
        [R`sp`, R`1 s + 1 p`, R`linear`, R`180°`, R`BeCl₂, C₂H₂, CO₂ (C)`], [R`sp²`, R`1 s + 2 p`, R`trigonal planar`, R`120°`, R`BF₃, C₂H₄`], [R`sp³`, R`1 s + 3 p`, R`tetrahedral`, R`109.5°`, R`CH₄, NH₃, H₂O`],
        [R`sp³d`, R`1 s + 3 p + 1 d`, R`trigonal bipyramidal`, R`90°, 120°`, R`PCl₅`], [R`sp³d²`, R`1 s + 3 p + 2 d`, R`octahedral`, R`90°`, R`SF₆`]] } },
      R`<b>Shortcut:</b> the hybridisation matches the steric number from VSEPR. SN 2 → sp, 3 → sp², 4 → sp³, 5 → sp³d, 6 → sp³d². Lone pairs sit in hybrid orbitals too, which is why NH₃ and H₂O are sp³.`,
      { h3: R`Double and triple bonds` },
      R`In ethene (C₂H₄), each carbon is <b>sp²</b>. Its three sp² orbitals form σ bonds (one to the other C, two to H atoms), all in one plane. The one unmixed p orbital on each carbon stands upright, and the two p orbitals overlap sideways to form the π bond. In ethyne (C₂H₂), each carbon is <b>sp</b> and has two unmixed p orbitals, giving two π bonds.`,
      { fig: cbFigEthene, cap: R`Ethene: an sp² σ framework (all six atoms in one plane) plus a π bond made by the sideways overlap of the upright p orbitals (orange).` },
      { ex: { q: R`In CH₂=CH–C≡CH, find the hybridisation of each carbon (left to right) and the number of σ and π bonds.`,
        steps: [R`C1 and C2 form a double bond and have 3 σ bonds each: sp². C3 and C4 form a triple bond and have 2 σ bonds each: sp.`, R`σ bonds: 4 C–H + 3 C–C (one in each carbon–carbon link) = 7.`, R`π bonds: 1 in C=C + 2 in C≡C = 3.`],
        ans: R`sp², sp², sp, sp; 7 σ and 3 π bonds` } },
      { mistake: R`Thinking hybridisation is something that happens to an isolated atom. It is a model that explains the bonds an atom forms; we never "see" an atom hybridise on its own.` },
      { check: { q: R`What is the hybridisation of the central atom in BF₃ and in NH₃?`, ans: R`BF₃: SN 3, so sp². NH₃: SN 4 (3 bond pairs + 1 lone pair), so sp³.` } }
    ] },

    { h: R`Resonance`, t: [6], blocks: [
      R`Sometimes one Lewis structure is not enough. In ozone (O₃), we can draw the double bond on the left or on the right. If either picture were true, the two O–O bonds would have different lengths. But experiments show both bonds are <b>identical</b> (128 pm), between a single (148 pm) and a double bond (121 pm).`,
      R`The real molecule is a blend of the possible structures, called the <b>resonance hybrid</b>. The individual structures (the <b>resonance structures</b> or canonical forms) are only drawings on paper; the molecule does not flip between them.`,
      { fig: cbFigResonance, cap: R`Two resonance structures of ozone (joined by a double-headed arrow) and the resonance hybrid, where each O–O bond is "one and a half" bonds and the negative charge is shared by the two end atoms.` },
      { analogy: R`A mule is a cross between a horse and a donkey. It is not a horse one moment and a donkey the next; it is always a mule. Similarly, ozone is always the hybrid, never one of the drawn structures.` },
      { points: [R`Resonance structures have the same arrangement of atoms; only the electrons (π bonds and lone pairs) are placed differently.`, R`The hybrid is more stable than any single structure. The extra stability is the <b>resonance energy</b>.`, R`In the hybrid, bond order = total bonds between those atoms ÷ number of positions they are shared over.`] },
      { ex: { q: R`Find the C–O bond order in the carbonate ion, CO₃²⁻, which has three equivalent resonance structures.`,
        steps: [R`Each structure has one C=O and two C–O bonds: 4 bonds in total, spread over 3 C–O positions.`, R`Bond order = 4/3.`],
        ans: R`\(1\tfrac13\); all three C–O bonds are identical (129 pm)` } },
      { check: { q: R`What is the N–O bond order in the nitrate ion, NO₃⁻?`, ans: R`Like carbonate, 4 bonds over 3 positions: 4/3 ≈ 1.33.` } }
    ] },

    { h: R`Molecular orbital theory`, t: [7], blocks: [
      R`Lewis theory and VB theory cannot explain one striking fact: liquid oxygen sticks to a magnet. That means O₂ has <b>unpaired electrons</b>, yet its Lewis structure (O=O) shows all electrons paired. <b>Molecular orbital (MO) theory</b> explains this.`,
      R`In MO theory, the atomic orbitals of the bonding atoms <b>combine</b> to form new <b>molecular orbitals</b> that belong to the whole molecule. Two atomic orbitals always give two molecular orbitals (this is called the linear combination of atomic orbitals, LCAO):`,
      { points: [R`a <b>bonding MO</b> (σ or π), formed when the waves add up between the nuclei. It is <b>lower</b> in energy and holds the atoms together.`, R`an <b>antibonding MO</b> (σ* or π*), formed when the waves cancel between the nuclei. It is <b>higher</b> in energy and pushes the atoms apart.`] },
      { fig: cbFigMOH2, cap: R`Two H 1s orbitals combine to give a low-energy bonding σ1s orbital and a high-energy antibonding σ*1s orbital. H₂'s two electrons both go into σ1s, so the molecule is more stable than the separate atoms.` },
      R`Electrons fill the MOs just as they fill atomic orbitals: lowest energy first (Aufbau), at most two per orbital with opposite spins (Pauli), and singly into orbitals of equal energy before pairing (Hund).`,
      { h3: R`Bond order and magnetism` },
      R`\[\text{bond order} = \tfrac12\,(N_b - N_a)\] where \(N_b\) and \(N_a\) are the numbers of electrons in bonding and antibonding MOs. A bond order of zero means the molecule doesn't exist (like He₂). A higher bond order means a stronger, shorter bond. If any electrons are unpaired, the molecule is <b>paramagnetic</b> (attracted by a magnet); if all are paired, it is <b>diamagnetic</b>.`,
      { h3: R`Energy order of the MOs` },
      R`For molecules up to N₂ (14 electrons or fewer): \[\sigma1s < \sigma^*1s < \sigma2s < \sigma^*2s < (\pi2p_x = \pi2p_y) < \sigma2p_z < (\pi^*2p_x = \pi^*2p_y) < \sigma^*2p_z\] For O₂ and F₂, σ2p_z drops below the π2p pair: \[\dots\sigma^*2s < \sigma2p_z < (\pi2p_x = \pi2p_y) < (\pi^*2p_x = \pi^*2p_y) < \sigma^*2p_z\]`,
      { fig: cbFigMON2O2, cap: R`Valence MO diagrams of N₂ and O₂ (the filled 1s levels are not shown). N₂ has all electrons paired. In O₂ the last two electrons go singly into the two π*2p orbitals (Hund's rule), so O₂ has two unpaired electrons and is paramagnetic.` },
      { table: { head: [R`Molecule`, R`Electrons`, R`Bond order`, R`Magnetic nature`], rows: [
        [R`H₂`, R`2`, R`1`, R`diamagnetic`], [R`He₂`, R`4`, R`0 (does not exist)`, R`–`], [R`Li₂`, R`6`, R`1`, R`diamagnetic`], [R`B₂`, R`10`, R`1`, R`paramagnetic`], [R`C₂`, R`12`, R`2`, R`diamagnetic`],
        [R`N₂`, R`14`, R`3`, R`diamagnetic`], [R`O₂`, R`16`, R`2`, R`paramagnetic (2 unpaired)`], [R`F₂`, R`18`, R`1`, R`diamagnetic`], [R`Ne₂`, R`20`, R`0 (does not exist)`, R`–`]] } },
      { ex: { q: R`Find the bond orders of O₂, O₂⁺, O₂⁻ and O₂²⁻ and arrange them in order of bond length.`,
        steps: [R`O₂ (16 electrons): 10 bonding, 6 antibonding, so bond order = ½(10 − 6) = 2.`, R`O₂⁺ loses one π* electron: ½(10 − 5) = 2.5. O₂⁻ gains one π* electron: ½(10 − 7) = 1.5. O₂²⁻: ½(10 − 8) = 1.`, R`Higher bond order means a shorter bond.`],
        ans: R`Bond orders 2, 2.5, 1.5, 1; bond length O₂⁺ < O₂ < O₂⁻ < O₂²⁻` } },
      { mistake: R`Counting only the 2p electrons when finding bond order and forgetting the σ2s and σ*2s electrons (or vice versa). Inner electrons cancel out, so use either all electrons or only the valence ones, but count consistently.` },
      { check: { q: R`Why does He₂ not exist?`, ans: R`It would have 2 bonding and 2 antibonding electrons, so bond order = ½(2 − 2) = 0: no bond.` } }
    ] },

    { h: R`Hydrogen bonding`, t: [8], blocks: [
      R`When hydrogen is bonded to a very electronegative small atom (<b>F, O or N</b>), the bond is so polar that the H becomes strongly δ+. This H is then attracted to a lone pair on an F, O or N atom of a neighbouring molecule. This attraction is a <b>hydrogen bond</b>, drawn as a dotted line: X–H···Y.`,
      { fig: cbFigHBond, cap: R`Hydrogen bonds (dotted orange lines). In water, each H of one molecule is attracted to the O of the next. In hydrogen fluoride, the molecules link into zig-zag chains.` },
      R`A hydrogen bond is much weaker than a covalent bond (about 10–40 kJ/mol, compared with 400+ kJ/mol), but it is stronger than ordinary attractions between molecules, and it has big effects.`,
      { h3: R`Two types` },
      { points: [R`<b>Intermolecular</b>: between different molecules, as in water, HF, alcohols and p-nitrophenol. It holds molecules together, raising boiling points.`, R`<b>Intramolecular</b>: within the same molecule, when the H and the acceptor atom are close by, as in o-nitrophenol and salicylaldehyde. It makes a ring inside the molecule, so the molecules hold on to each other less: o-nitrophenol is more volatile than p-nitrophenol.`] },
      { h3: R`Effects of hydrogen bonding` },
      { points: [R`<b>High boiling points</b>: H₂O boils at 100 °C, while H₂S (no H-bonding) boils at −60 °C. HF, NH₃ and H₂O have unusually high boiling points for their sizes.`, R`<b>Ice floats</b>: in ice, H-bonds hold the molecules in an open cage, so ice is less dense than liquid water.`, R`<b>Solubility</b>: alcohols, sugar and ammonia dissolve in water because they can form H-bonds with it.`, R`<b>Life</b>: hydrogen bonds hold the two strands of DNA together and give proteins their shapes.`] },
      { ex: { q: R`Explain why ethanol (C₂H₅OH, boiling point 78 °C) boils at a much higher temperature than dimethyl ether (CH₃OCH₃, boiling point −24 °C), even though both have the formula C₂H₆O.`,
        steps: [R`Ethanol has an O–H group, so its molecules form intermolecular hydrogen bonds.`, R`Dimethyl ether has no H attached to O, so it cannot form hydrogen bonds between its own molecules.`, R`Extra energy is needed to break the hydrogen bonds before ethanol can boil.`],
        ans: R`Hydrogen bonding in ethanol` } },
      { check: { q: R`Which of these can form hydrogen bonds between their own molecules: CH₄, NH₃, HCl, HF?`, ans: R`NH₃ and HF (H attached to N or F). CH₄ cannot, and Cl is too large for strong H-bonds.` } }
    ] }
  ],
  summary: [
    R`Atoms bond to reach lower energy. The bottom of the energy curve gives the bond length and bond enthalpy.`,
    R`Octet rule (Kossel–Lewis): atoms lose, gain or share electrons to get 8 outer electrons. Exceptions: incomplete octet (BF₃), odd electrons (NO), expanded octet (PCl₅, SF₆).`,
    R`Ionic bond: electron transfer from a low-IE metal to a high-electron-gain non-metal; the large lattice enthalpy makes it stable. Lattice enthalpy ∝ \(z_+z_-/(r_+ + r_-)\).`,
    R`Born–Haber cycle (Hess's law) gives the lattice enthalpy: about 788 kJ/mol for NaCl.`,
    R`Covalent bond: sharing of electron pairs. Formal charge FC = V − L − B/2; prefer the structure with the smallest formal charges.`,
    R`Higher bond order → shorter and stronger bond.`,
    R`Electronegativity difference makes bonds polar (δ+/δ−). Fajans' rules: small cation, large anion, high charge or an 18-electron cation → more covalent character.`,
    R`Dipole moment μ = q × d (in debye) is a vector; symmetrical molecules (CO₂, BF₃, CH₄) have μ = 0. NH₃ (1.47 D) > NF₃ (0.23 D).`,
    R`VSEPR: electron pairs spread out as far as possible; lp–lp > lp–bp > bp–bp. SN = ½(V + M − c + a).`,
    R`Shapes: 2 linear, 3 trigonal planar, 4 tetrahedral, 5 trigonal bipyramidal, 6 octahedral; lone pairs give bent, pyramidal, see-saw, T-shaped and square planar shapes.`,
    R`VB theory: bonds form by overlap of half-filled orbitals. σ = head-on (stronger), π = sideways. Single = σ; double = σ + π; triple = σ + 2π.`,
    R`Hybridisation follows the steric number: sp (180°), sp² (120°), sp³ (109.5°), sp³d (TBP), sp³d² (octahedral).`,
    R`Resonance: the real molecule is a hybrid of resonance structures; bond order in CO₃²⁻ and NO₃⁻ is 4/3.`,
    R`MO theory: bond order = ½(N_b − N_a); unpaired electrons → paramagnetic. O₂ is paramagnetic with bond order 2; N₂ has bond order 3. σ2p lies above π2p for molecules up to N₂.`,
    R`Hydrogen bonding (H bonded to F, O or N) explains the high boiling point of water, ice floating, solubility of alcohols and the structure of DNA.`
  ]
});
