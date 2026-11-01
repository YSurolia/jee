// Book chapter: p-Block Elements (groups 13 to 18). Full theory with structure diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 11, math: false, bold: true }) : ''); }
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function mol(w, h, o, label) { return D.svg(w, h, [D.mol(o)].concat(o.more || []), label); }
function flow(items, y, h, label, W) {
  var parts = [], x = 5;
  items.forEach(function (it, i) {
    if (i) { parts.push(D.arrow(x - 34, y + h / 2, x - 2, y + h / 2, { color: 'm' })); if (it[3]) parts.push(lab(x - 18, y - 6, it[3], 'm', 9)); }
    parts.push(box(x, y, it[1], h, it[0], it[2] || 'c', 10)); x += it[1] + 36;
  });
  return D.svg(W || x, y + h + 10, parts, label);
}

// ---------- figures: general ----------
var cols = [['13', ['B', 'Al', 'Ga', 'In', 'Tl'], 'Tl⁺'], ['14', ['C', 'Si', 'Ge', 'Sn', 'Pb'], 'Pb²⁺'], ['15', ['N', 'P', 'As', 'Sb', 'Bi'], 'Bi³⁺']];
var figInert = D.svg(420, 230, cols.map(function (c, k) {
  var x = 40 + k * 95, out = [lab(x + 25, 14, 'group ' + c[0], 'm', 10, { bold: true })];
  c[1].forEach(function (s, i) { out.push(box(x, 24 + i * 36, 50, 28, s, i === 4 ? 'r' : 'b', 12)); });
  out.push(lab(x + 25, 218, c[2] + ' stable', 'r', 10, { bold: true }));
  return out.join('');
}).concat([D.arrow(330, 30, 330, 190, { color: 'r', w: 2 }), lab(340, 90, 'ns² pair', 'r', 10, { anchor: 'start' }), lab(340, 104, 'increasingly', 'r', 10, { anchor: 'start' }), lab(340, 118, 'reluctant to', 'r', 10, { anchor: 'start' }), lab(340, 132, 'bond', 'r', 10, { anchor: 'start' })]),
  'Inert pair effect down groups 13 to 15');

// ---------- group 13 ----------
var figB2H6 = mol(300, 160, { atoms: [{ x: 110, y: 80, s: 'B', color: 'c' }, { x: 190, y: 80, s: 'B', color: 'c' }, { x: 60, y: 40, s: 'H' }, { x: 60, y: 120, s: 'H' }, { x: 240, y: 40, s: 'H' }, { x: 240, y: 120, s: 'H' }, { x: 150, y: 45, s: 'H', color: 'o' }, { x: 150, y: 115, s: 'H', color: 'o' }],
  bonds: [[0, 2], [0, 3], [1, 4], [1, 5], [0, 6, 1, 'o'], [6, 1, 1, 'o'], [0, 7, 1, 'o'], [7, 1, 1, 'o']],
  more: [lab(150, 150, 'two 3-centre–2-electron (banana) bonds', 'o', 10), lab(55, 80, '119 pm', 'm', 9), lab(150, 18, '134 pm', 'o', 9)] }, 'Structure of diborane');
var figAl2Cl6 = mol(230, 150, { atoms: [{ x: 75, y: 75, s: 'Al', color: 'c' }, { x: 155, y: 75, s: 'Al', color: 'c' }, { x: 115, y: 38, s: 'Cl', color: 'g' }, { x: 115, y: 112, s: 'Cl', color: 'g' }, { x: 30, y: 40, s: 'Cl', color: 'g' }, { x: 30, y: 110, s: 'Cl', color: 'g' }, { x: 200, y: 40, s: 'Cl', color: 'g' }, { x: 200, y: 110, s: 'Cl', color: 'g' }],
  bonds: [[0, 2], [2, 1, 'd'], [0, 3, 'd'], [3, 1], [0, 4], [0, 5], [1, 6], [1, 7]], r: 12,
  more: [lab(115, 140, 'Cl bridges; each Al is tetrahedral', 'm', 9)] }, 'Structure of Al2Cl6');
var figBOH3 = mol(170, 150, { atoms: [{ x: 85, y: 78, s: 'B', color: 'c' }, { x: 85, y: 30, s: 'OH', color: 'r' }, { x: 40, y: 108, s: 'OH', color: 'r' }, { x: 130, y: 108, s: 'OH', color: 'r' }], bonds: [[0, 1], [0, 2], [0, 3]], r: 13,
  more: [lab(85, 140, 'planar; layers held by H-bonds', 'm', 9)] }, 'Structure of boric acid');

// ---------- group 14 ----------
function honey(x0, y0, s, nx, ny) {
  var out = [], h = s * Math.sqrt(3) / 2;
  for (var j = 0; j < ny; j++) for (var i = 0; i < nx; i++) {
    var cx = x0 + i * 1.5 * s, cy = y0 + j * 2 * h + (i % 2 ? h : 0), pts = [];
    for (var k = 0; k < 6; k++) pts.push([cx + s * Math.cos(k * Math.PI / 3), cy + s * Math.sin(k * Math.PI / 3)]);
    out.push(D.poly(pts, { closed: true, color: 'k', w: 1.4 }));
  }
  return out.join('');
}
var figCarbon = D.row([
  [mol(170, 150, { atoms: [{ x: 85, y: 75, s: 'C' }, { x: 85, y: 20, s: 'C' }, { x: 30, y: 105, s: 'C' }, { x: 140, y: 112, s: 'C' }, { x: 150, y: 66, s: 'C' }],
    bonds: [[0, 1], [0, 2], [0, 3, 'w'], [0, 4, 'h']], more: [lab(85, 140, 'each C bonded to 4 C (sp³)', 'm', 9)] }, 'diamond unit'), R`Diamond: 3D tetrahedral network`],
  [D.svg(200, 150, [honey(30, 30, 16, 7, 3), lab(100, 140, 'layers of hexagons (sp²), 141.5 pm', 'm', 9)], 'graphite layer'), R`Graphite: one layer`],
  [D.svg(150, 150, [D.line(15, 35, 135, 35, { w: 2 }), D.line(15, 75, 135, 75, { w: 2 }), D.line(15, 115, 135, 115, { w: 2 }), D.arrow(120, 40, 120, 70, { color: 'o', both: true, head: 6 }), lab(85, 55, '340 pm', 'o', 9), lab(75, 140, 'weak forces between layers', 'm', 9)], 'graphite layers'), R`Graphite: layers slide`]
]);

var tri = [];
[0, 1, 2, 3, 4].forEach(function (i) {
  var cx = 40 + i * 50, up = i % 2 === 0, yb = 70;
  var p = up ? [[cx - 25, yb], [cx + 25, yb], [cx, yb - 43]] : [[cx - 25, yb], [cx + 25, yb], [cx, yb + 43]];
  tri.push(D.poly(p, { closed: true, color: 'b', fill: 'soft', w: 1.6 }));
  tri.push(D.dot(cx, up ? yb - 14 : yb + 14, { r: 3, color: 'k' }));
  p.forEach(function (q) { tri.push(D.circle(q[0], q[1], 4, { color: 'r', fill: 'bg', w: 1.4 })); });
});
var figSilicate = D.row([
  [mol(150, 140, { atoms: [{ x: 75, y: 75, s: 'Si', color: 'k' }, { x: 75, y: 20, s: 'O', color: 'r' }, { x: 22, y: 105, s: 'O', color: 'r' }, { x: 128, y: 112, s: 'O', color: 'r' }, { x: 138, y: 66, s: 'O', color: 'r' }],
    bonds: [[0, 1], [0, 2], [0, 3, 'w'], [0, 4, 'h']], more: [lab(75, 132, 'SiO₄⁴⁻ tetrahedron', 'm', 9)] }, 'silicate tetrahedron'), R`The basic unit`],
  [D.svg(260, 140, tri.concat([lab(130, 132, 'each tetrahedron shares 2 O: (SiO₃)ₙ²ⁿ⁻', 'm', 9)]), 'silicate chain'), R`A single-chain silicate (seen from above)`]
]);
var figSilicone = mol(320, 140, { atoms: [{ x: 40, y: 70, s: 'Si', color: 'k' }, { x: 95, y: 70, s: 'O', color: 'r' }, { x: 150, y: 70, s: 'Si', color: 'k' }, { x: 205, y: 70, s: 'O', color: 'r' }, { x: 260, y: 70, s: 'Si', color: 'k' },
  { x: 40, y: 25, s: 'CH₃', color: 'm', size: 12 }, { x: 40, y: 115, s: 'CH₃', color: 'm', size: 12 }, { x: 150, y: 25, s: 'CH₃', color: 'm', size: 12 }, { x: 150, y: 115, s: 'CH₃', color: 'm', size: 12 }, { x: 260, y: 25, s: 'CH₃', color: 'm', size: 12 }, { x: 260, y: 115, s: 'CH₃', color: 'm', size: 12 }],
  bonds: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [0, 6], [2, 7], [2, 8], [4, 9], [4, 10]], r: 13,
  more: [lab(10, 70, '…', 'k', 14), lab(300, 70, '…', 'k', 14)] }, 'Silicone chain');

// ---------- group 15 ----------
var figP4 = D.row([
  [mol(170, 150, { atoms: [{ x: 85, y: 25, s: 'P', color: 'o' }, { x: 35, y: 115, s: 'P', color: 'o' }, { x: 135, y: 115, s: 'P', color: 'o' }, { x: 100, y: 88, s: 'P', color: 'o' }],
    bonds: [[0, 1], [0, 2], [1, 2], [0, 3, 'd'], [1, 3, 'd'], [2, 3, 'd']], more: [lab(85, 142, 'P–P–P = 60° (strained)', 'm', 9)] }, 'white phosphorus'), R`White P: discrete P₄ tetrahedra`],
  [D.svg(260, 150, [0, 1, 2].map(function (k) {
    var x = 15 + k * 85;
    return D.mol({ atoms: [{ x: x + 25, y: 22, s: 'P', color: 'r', size: 12 }, { x: x, y: 108, s: 'P', color: 'r', size: 12 }, { x: x + 52, y: 108, s: 'P', color: 'r', size: 12 }, { x: x + 34, y: 78, s: 'P', color: 'r', size: 12 }], bonds: [[0, 1], [0, 2], [1, 2], [0, 3, 'd'], [1, 3, 'd'], [2, 3, 'd']], r: 7 }) + (k < 2 ? D.line(x + 59, 108, x + 78, 108, { color: 'r', w: 2 }) : '');
  }).concat([lab(130, 140, 'P₄ units linked in chains (polymeric)', 'm', 9)]), 'red phosphorus'), R`Red P: chains of linked P₄`]
]);
var figPCl = D.row([
  [mol(170, 150, { atoms: [{ x: 85, y: 75, s: 'P', color: 'o', lp: [90] }, { x: 35, y: 110, s: 'Cl', color: 'g' }, { x: 135, y: 110, s: 'Cl', color: 'g' }, { x: 85, y: 125, s: 'Cl', color: 'g' }], bonds: [[0, 1], [0, 2], [0, 3, 'w']], r: 12 }, 'PCl3'), R`PCl₃: pyramidal (sp³, 1 lone pair)`],
  [mol(200, 170, { atoms: [{ x: 100, y: 85, s: 'P', color: 'o' }, { x: 100, y: 20, s: 'Cl', color: 'g' }, { x: 100, y: 150, s: 'Cl', color: 'g' }, { x: 35, y: 85, s: 'Cl', color: 'g' }, { x: 160, y: 65, s: 'Cl', color: 'g' }, { x: 155, y: 110, s: 'Cl', color: 'g' }],
    bonds: [[0, 1], [0, 2], [0, 3], [0, 4, 'h'], [0, 5, 'w']], r: 12, more: [lab(150, 22, 'axial 240 pm', 'r', 9), lab(45, 112, 'equatorial 202 pm', 'b', 9)] }, 'PCl5'), R`PCl₅: trigonal bipyramidal (sp³d)`]
]);
var figHNO3 = D.row([
  [mol(200, 130, { atoms: [{ x: 25, y: 85, s: 'H' }, { x: 70, y: 85, s: 'O', color: 'r' }, { x: 120, y: 60, s: 'N', color: 'b' }, { x: 120, y: 15, s: 'O', color: 'r' }, { x: 170, y: 85, s: 'O', color: 'r' }],
    bonds: [[0, 1], [1, 2], [2, 3, 2], [2, 4, 1.5]], more: [lab(100, 122, 'planar; N–O bonds 121 pm (resonance)', 'm', 9)] }, 'nitric acid'), R`HNO₃`],
  [mol(140, 130, { atoms: [{ x: 70, y: 45, s: 'N', color: 'b', dots: [[90, 1]] }, { x: 25, y: 90, s: 'O', color: 'r' }, { x: 115, y: 90, s: 'O', color: 'r' }], bonds: [[0, 1, 2], [0, 2, 1.5]], more: [lab(70, 122, 'bent, 134°; odd electron', 'm', 9)] }, 'NO2'), R`NO₂ (paramagnetic)`],
  [mol(200, 130, { atoms: [{ x: 70, y: 65, s: 'N', color: 'b' }, { x: 130, y: 65, s: 'N', color: 'b' }, { x: 35, y: 30, s: 'O', color: 'r' }, { x: 35, y: 100, s: 'O', color: 'r' }, { x: 165, y: 30, s: 'O', color: 'r' }, { x: 165, y: 100, s: 'O', color: 'r' }],
    bonds: [[0, 1], [0, 2, 2], [0, 3, 1.5], [1, 4, 2], [1, 5, 1.5]], more: [lab(100, 122, 'N₂O₄: planar dimer of NO₂', 'm', 9)] }, 'N2O4'), R`N₂O₄ (colourless)`]
]);
function oxoP(title, subs) {
  return mol(150, 150, { atoms: [{ x: 75, y: 75, s: 'P', color: 'o' }, { x: 75, y: 22, s: 'O', color: 'r' }, { x: 25, y: 75, s: subs[0], color: subs[0] === 'H' ? 'k' : 'r' }, { x: 125, y: 75, s: subs[1], color: subs[1] === 'H' ? 'k' : 'r' }, { x: 75, y: 128, s: subs[2], color: subs[2] === 'H' ? 'k' : 'r' }],
    bonds: [[0, 1, 2], [0, 2], [0, 3], [0, 4]], r: 13 }, title);
}
var figOxoP = D.row([
  [oxoP('H3PO2', ['H', 'H', 'OH']), R`H₃PO₂ (hypophosphorous): P is +1, monobasic, 2 P–H`],
  [oxoP('H3PO3', ['H', 'OH', 'OH']), R`H₃PO₃ (phosphorous): P is +3, dibasic, 1 P–H`],
  [oxoP('H3PO4', ['HO', 'OH', 'OH']), R`H₃PO₄ (orthophosphoric): P is +5, tribasic`]
]);
var figOstwald = flow([['4NH₃ + 5O₂', 92, 'b'], ['4NO + 6H₂O', 92, 'o', 'Pt/Rh, 500 K'], ['2NO₂', 60, 'r', '+ O₂'], ['HNO₃ + NO', 90, 'g', '+ H₂O']], 24, 34, 'Ostwald process for nitric acid');

// ---------- group 16 ----------
var figO3SO2 = D.row([
  [mol(170, 130, { atoms: [{ x: 85, y: 40, s: 'O', color: 'r', lp: [90] }, { x: 35, y: 90, s: 'O', color: 'r' }, { x: 135, y: 90, s: 'O', color: 'r' }], bonds: [[0, 1, 1.5], [0, 2, 1.5]], more: [lab(85, 76, '117°', 'm', 10), lab(85, 120, 'O–O 128 pm (both equal)', 'm', 9)] }, 'ozone'), R`O₃: bent, resonance hybrid`],
  [mol(170, 130, { atoms: [{ x: 85, y: 40, s: 'S', color: 'o', lp: [90] }, { x: 35, y: 90, s: 'O', color: 'r' }, { x: 135, y: 90, s: 'O', color: 'r' }], bonds: [[0, 1, 2], [0, 2, 2]], more: [lab(85, 76, '119.5°', 'm', 10), lab(85, 120, 'S–O 143 pm (both equal)', 'm', 9)] }, 'sulphur dioxide'), R`SO₂: bent, sp²`]
]);
var s8 = [], s8b = [];
for (var k = 0; k < 8; k++) { var a = (k + 0.5) * Math.PI / 4; s8.push({ x: 85 + 55 * Math.cos(a), y: 72 + 55 * Math.sin(a), s: 'S', color: k % 2 ? 'b' : 'o', size: 13 }); s8b.push([k, (k + 1) % 8]); }
var figS8 = mol(320, 150, { atoms: s8, bonds: s8b, r: 9, more: [lab(85, 145, 'top view of the S₈ ring', 'm', 9), D.dot(180, 50, { r: 5, color: 'o' }), lab(192, 50, 'atoms above the mean plane', 'o', 10, { anchor: 'start' }), D.dot(180, 74, { r: 5, color: 'b' }), lab(192, 74, 'atoms below the mean plane', 'b', 10, { anchor: 'start' }),
  D.poly([[185, 120], [205, 104], [225, 120], [245, 104], [265, 120], [285, 104]], { color: 'k', w: 1.6 }), lab(235, 138, 'side view: puckered (crown)', 'm', 9)] }, 'S8 ring');
function oxoS(atoms, bonds, w, title) { return mol(w, 150, { atoms: atoms, bonds: bonds, r: 12 }, title); }
var figOxoS = D.row([
  [oxoS([{ x: 85, y: 75, s: 'S', color: 'o' }, { x: 85, y: 22, s: 'O', color: 'r' }, { x: 85, y: 128, s: 'O', color: 'r' }, { x: 30, y: 75, s: 'HO', color: 'r' }, { x: 140, y: 75, s: 'OH', color: 'r' }], [[0, 1, 2], [0, 2, 2], [0, 3], [0, 4]], 170, 'H2SO4'), R`H₂SO₄ (sulphuric acid)`],
  [oxoS([{ x: 70, y: 75, s: 'S', color: 'o' }, { x: 70, y: 22, s: 'O', color: 'r' }, { x: 70, y: 128, s: 'O', color: 'r' }, { x: 20, y: 75, s: 'HO', color: 'r' }, { x: 125, y: 75, s: 'O', color: 'r' }, { x: 180, y: 75, s: 'S', color: 'o' }, { x: 180, y: 22, s: 'O', color: 'r' }, { x: 180, y: 128, s: 'O', color: 'r' }, { x: 230, y: 75, s: 'OH', color: 'r' }], [[0, 1, 2], [0, 2, 2], [0, 3], [0, 4], [4, 5], [5, 6, 2], [5, 7, 2], [5, 8]], 250, 'H2S2O7'), R`H₂S₂O₇ (oleum, pyrosulphuric acid)`],
  [oxoS([{ x: 70, y: 75, s: 'S', color: 'o' }, { x: 70, y: 22, s: 'O', color: 'r' }, { x: 70, y: 128, s: 'O', color: 'r' }, { x: 20, y: 75, s: 'HO', color: 'r' }, { x: 118, y: 75, s: 'O', color: 'p' }, { x: 162, y: 75, s: 'O', color: 'p' }, { x: 210, y: 75, s: 'S', color: 'o' }, { x: 210, y: 22, s: 'O', color: 'r' }, { x: 210, y: 128, s: 'O', color: 'r' }, { x: 260, y: 75, s: 'OH', color: 'r' }], [[0, 1, 2], [0, 2, 2], [0, 3], [0, 4], [4, 5], [5, 6], [6, 7, 2], [6, 8, 2], [6, 9]], 280, 'H2S2O8'), R`H₂S₂O₈ (peroxodisulphuric acid, O–O link)`]
]);
var figContact = flow([['S / sulphide ore', 104, 'k'], ['SO₂', 50, 'o', '+ O₂'], ['SO₃', 50, 'r', 'V₂O₅, 720 K'], ['H₂S₂O₇', 70, 'p', '+ H₂SO₄'], ['H₂SO₄', 70, 'g', '+ H₂O']], 24, 34, 'Contact process for sulphuric acid');

// ---------- group 17 ----------
var bde = [['F₂', 158.8, 'g'], ['Cl₂', 242.6, 'c'], ['Br₂', 192.8, 'o'], ['I₂', 151.1, 'p']];
var figBDE = D.svg(320, 190, bde.map(function (b, i) {
  var x = 50 + i * 65, h = b[1] / 260 * 130;
  return D.rect(x, 155 - h, 40, h, { color: b[2], fill: 'soft', w: 1.4 }) + lab(x + 20, 170, b[0], 'k', 11, { bold: true }) + lab(x + 20, 147 - h, String(b[1]), 'm', 9);
}).concat([D.line(35, 155, 310, 155, { w: 1.4 }), D.arrow(35, 155, 35, 12, { color: 'k', w: 1.4, head: 8 }), lab(42, 12, 'bond enthalpy (kJ/mol)', 'm', 10, { anchor: 'start' })]), 'Bond dissociation enthalpies of the halogens');
var figInter = D.row([
  [mol(170, 160, { atoms: [{ x: 80, y: 80, s: 'Cl', color: 'g', lp: [150, 210] }, { x: 80, y: 20, s: 'F', color: 'c' }, { x: 80, y: 140, s: 'F', color: 'c' }, { x: 140, y: 80, s: 'F', color: 'c' }], bonds: [[0, 1], [0, 2], [0, 3]], r: 11 }, 'ClF3'), R`ClF₃: T-shaped (sp³d, 2 lone pairs)`],
  [mol(170, 160, { atoms: [{ x: 85, y: 80, s: 'Br', color: 'o', lp: [270] }, { x: 85, y: 18, s: 'F', color: 'c' }, { x: 26, y: 88, s: 'F', color: 'c' }, { x: 144, y: 88, s: 'F', color: 'c' }, { x: 122, y: 52, s: 'F', color: 'c' }, { x: 48, y: 116, s: 'F', color: 'c' }], bonds: [[0, 1], [0, 2], [0, 3], [0, 4, 'h'], [0, 5, 'w']], r: 11 }, 'BrF5'), R`BrF₅: square pyramidal (sp³d²)`]
]);

// ---------- group 18 ----------
var figXe = D.row([
  [mol(150, 160, { atoms: [{ x: 75, y: 80, s: 'Xe', color: 'p', lp: [0, 180] }, { x: 75, y: 20, s: 'F', color: 'c' }, { x: 75, y: 140, s: 'F', color: 'c' }], bonds: [[0, 1], [0, 2]], r: 12, more: [lab(75, 156, '3 lone pairs, linear', 'm', 9)] }, 'XeF2'), R`XeF₂ (sp³d)`],
  [mol(170, 160, { atoms: [{ x: 85, y: 80, s: 'Xe', color: 'p', lp: [90, 270] }, { x: 25, y: 80, s: 'F', color: 'c' }, { x: 145, y: 80, s: 'F', color: 'c' }, { x: 128, y: 48, s: 'F', color: 'c' }, { x: 42, y: 112, s: 'F', color: 'c' }], bonds: [[0, 1], [0, 2], [0, 3, 'h'], [0, 4, 'w']], r: 12, more: [lab(85, 156, 'square planar', 'm', 9)] }, 'XeF4'), R`XeF₄ (sp³d²)`],
  [mol(160, 160, { atoms: [{ x: 80, y: 70, s: 'Xe', color: 'p', lp: [90] }, { x: 30, y: 110, s: 'O', color: 'r' }, { x: 130, y: 110, s: 'O', color: 'r' }, { x: 80, y: 128, s: 'O', color: 'r' }], bonds: [[0, 1, 2], [0, 2, 2], [0, 3, 2]], r: 12, more: [lab(80, 156, 'pyramidal', 'm', 9)] }, 'XeO3'), R`XeO₃ (sp³)`]
]);

// ---------- chapter text ----------
JEE.book('chemistry', 'p-block', {
  intro: [
    R`The p-block contains groups 13 to 18, where the last electron enters a p orbital (configuration ns² np¹⁻⁶). It is the most varied block of the periodic table: it holds metals (Al, Sn, Pb), metalloids (B, Si, Ge, As, Sb, Te), non-metals (C, N, O, the halogens) and the noble gases.`,
    R`This chapter first looks at the common trends (oxidation states, the inert pair effect, the unusual first element of each group), then goes group by group through their important compounds and structures, which are a favourite of JEE questions.`
  ],
  sections: [
    { h: R`General introduction: configuration and trends`, t: [0, 1], blocks: [
      R`The valence shell configuration is ns² np¹ (group 13) to ns² np⁶ (group 18). Helium (1s²) is the exception in group 18. Because the p-block includes elements from metals to non-metals, the <b>non-metallic character decreases down a group</b> and increases across a period.`,
      { table: { head: [R`Group`, R`13`, R`14`, R`15`, R`16`, R`17`, R`18`], rows: [
        [R`Configuration`, R`ns²np¹`, R`ns²np²`, R`ns²np³`, R`ns²np⁴`, R`ns²np⁵`, R`ns²np⁶`],
        [R`First member`, R`B`, R`C`, R`N`, R`O`, R`F`, R`He`],
        [R`Group oxidation state`, R`+3`, R`+4`, R`+5`, R`+6`, R`+7`, R`+8`],
        [R`Other states`, R`+1`, R`+2, −4`, R`+3, −3`, R`+4, +2, −2`, R`+1, +3, +5, −1`, R`+2, +4, +6`]] } },
      R`Across a period, atomic radius decreases and ionisation enthalpy and electronegativity generally increase. Down a group, atomic radius increases and ionisation enthalpy decreases, but not always smoothly: elements after the d-block (Ga, Ge, As…) and after the f-block (Tl, Pb, Bi) feel the poor shielding of d and f electrons. For example, Ga (135 pm) is slightly <b>smaller</b> than Al (143 pm).`,
      { check: { q: R`Why is gallium's atomic radius smaller than aluminium's?`, ans: R`The ten 3d electrons in Ga shield the outer electrons poorly, so the effective nuclear charge is higher.` } }
    ] },

    { h: R`Oxidation states, reactivity and the inert pair effect`, t: [0, 3], blocks: [
      R`The highest oxidation state of a p-block element equals the total number of valence electrons (group number − 10). Down each group, an oxidation state <b>two less</b> than the group state becomes more and more stable. This is the <b>inert pair effect</b>: the ns² electrons become increasingly reluctant to take part in bonding.`,
      { fig: figInert, cap: R`Tl⁺, Pb²⁺ and Bi³⁺ are more stable than Tl³⁺, Pb⁴⁺ and Bi⁵⁺.` },
      R`Why? Down the group the ns electrons penetrate close to the nucleus and are poorly shielded by the filled d and f subshells, so they are held more tightly. Also, the bonds formed by heavy atoms are weaker, so the energy released in forming two extra bonds does not repay the energy needed to unpair and promote the ns² electrons.`,
      { points: [R`Tl³⁺ and Pb⁴⁺ compounds are strong <b>oxidising agents</b> (they readily gain 2 electrons): PbO₂ is a strong oxidant.`, R`Sn²⁺ is a <b>reducing agent</b> (Sn⁴⁺ is the more stable state for tin), while Pb²⁺ is stable.`, R`Bi(V) as in NaBiO₃ is a strong oxidising agent.`] },
      R`Elements in the lower states tend to form ionic compounds, and those in the higher states covalent compounds (high charge, high polarising power). The <b>first element</b> of each group has no d orbitals, so its maximum covalency is 4; heavier members can expand their octet (PCl₅, SF₆, IF₇).`,
      { tip: R`Oxidising power of the +4 state: CO₂ < SiO₂ < GeO₂ < SnO₂ < PbO₂. Reducing power of the +2 state: Ge²⁺ > Sn²⁺ > Pb²⁺.` },
      { check: { q: R`Which is the stronger oxidising agent, SnO₂ or PbO₂? Why?`, ans: R`PbO₂: Pb(IV) is unstable relative to Pb(II) because of the inert pair effect, so it readily accepts electrons.` } }
    ] },

    { h: R`Unique behaviour of the first element`, t: [2], blocks: [
      R`B, C, N, O and F differ from the rest of their groups because of their <b>small size, high electronegativity, high ionisation enthalpy and the absence of d orbitals</b>.`,
      { points: [
        R`<b>Maximum covalency 4</b> (only s and p orbitals available): BF₄⁻ exists but no BF₆³⁻; NCl₅ does not exist but PCl₅ does.`,
        R`<b>pπ–pπ multiple bonds</b>: the first members form strong double and triple bonds with themselves and with each other (C=C, C≡C, N≡N, O=O, C=O, C≡N). Heavier elements, with larger and more diffuse orbitals, do not (they form P₄, S₈ instead of P₂, S₂). Heavier members form dπ–pπ bonds instead (in P=O, S=O).`,
        R`<b>Catenation</b> (self-linking into chains) is strongest for carbon because the C–C bond is strong; it decreases down the group (C ≫ Si > Ge ≈ Sn; Pb does not).`,
        R`Nitrogen and oxygen form strong <b>hydrogen bonds</b> (NH₃, H₂O, HF have abnormally high boiling points).`,
        R`<b>Weaker single bonds</b> in N–N, O–O and F–F than in P–P, S–S, Cl–Cl, because of strong repulsion between the lone pairs on the small atoms.`
      ] },
      { check: { q: R`Why does nitrogen exist as N₂ but phosphorus as P₄?`, ans: R`Small N forms strong pπ–pπ triple bonds; P's larger orbitals overlap poorly sideways, so P prefers single bonds in P₄ tetrahedra.` } }
    ] },

    { h: R`Group 13: the boron family`, t: [0, 3, 4], blocks: [
      R`B, Al, Ga, In, Tl (ns² np¹). Boron is a non-metal (metalloid), the rest are metals. Boron's very small size and high ionisation enthalpy mean it forms only covalent compounds, and its trihalides are <b>electron-deficient</b> (only 6 electrons around B), so they are Lewis acids.`,
      { table: { head: [R`Property`, R`B`, R`Al`, R`Ga`, R`In`, R`Tl`], rows: [
        [R`Atomic radius / pm`, R`85`, R`143`, R`135`, R`167`, R`170`],
        [R`IE₁ / kJ mol⁻¹`, R`801`, R`577`, R`579`, R`558`, R`589`],
        [R`Electronegativity`, R`2.0`, R`1.5`, R`1.6`, R`1.7`, R`1.8`],
        [R`Melting point / K`, R`2453`, R`933`, R`303`, R`430`, R`576`]] } },
      R`Note gallium's very low melting point (303 K: it melts in your hand) but high boiling point (2676 K), which makes it useful in high-temperature thermometers.`,
      { h3: R`Chemical reactivity` },
      { points: [R`<b>Air:</b> amorphous boron and aluminium form B₂O₃ and Al₂O₃ on heating; with N₂, BN and AlN. Al is protected by a thin oxide layer.`, R`<b>Acids and alkalis:</b> boron does not react with non-oxidising acids. Aluminium dissolves in dilute HCl (2Al + 6HCl → 2Al³⁺ + 6Cl⁻ + 3H₂) and in alkali: 2Al + 2NaOH + 6H₂O → 2Na⁺[Al(OH)₄]⁻ + 3H₂ (amphoteric). Concentrated HNO₃ makes Al <b>passive</b>.`, R`<b>Halogens:</b> all form trihalides MX₃ (except TlI₃).`, R`Oxides: B₂O₃ is acidic, Al₂O₃ and Ga₂O₃ amphoteric, In₂O₃ and Tl₂O₃ basic.`] },
      { check: { q: R`Arrange B₂O₃, Al₂O₃ and Tl₂O₃ in order of increasing basic character.`, ans: R`B₂O₃ (acidic) < Al₂O₃ (amphoteric) < Tl₂O₃ (basic).` } }
    ] },

    { h: R`Borax, boric acid and diborane`, t: [4], blocks: [
      { h3: R`Borax` },
      R`Borax, Na₂[B₄O₅(OH)₄]·8H₂O (often written Na₂B₄O₇·10H₂O), is the most important boron compound. Its solution is alkaline: Na₂B₄O₇ + 7H₂O → 2NaOH + 4H₃BO₃. On heating it swells into a glassy <b>borax bead</b> (NaBO₂ + B₂O₃), which gives coloured metaborates with transition metal oxides (e.g. Co(BO₂)₂ blue): the <b>borax bead test</b>.`,
      { ex: { q: R`What mass of borax (Na₂B₄O₇·10H₂O, M = 381.4) is neutralised by 20 mL of 0.1 M HCl?`,
        steps: [R`Na₂B₄O₇ + 2HCl + 5H₂O → 2NaCl + 4H₃BO₃: 1 mol borax ≡ 2 mol HCl.`, R`HCl = 0.002 mol, so borax = 0.001 mol = 0.381 g.`], ans: R`0.381 g` } },
      { h3: R`Orthoboric acid` },
      R`H₃BO₃, a white crystalline solid with a soapy feel. It has a layered structure in which planar B(OH)₃ units are joined by hydrogen bonds. It is a weak <b>monobasic Lewis acid</b>: it does not give a proton itself, but accepts OH⁻ from water: B(OH)₃ + 2H₂O → [B(OH)₄]⁻ + H₃O⁺. On heating above 370 K it forms metaboric acid HBO₂, and then B₂O₃.`,
      { fig: D.row([[figBOH3, R`B(OH)₃`], [figB2H6, R`B₂H₆`]]), cap: R`Boric acid is planar; diborane has two bridging H atoms held by 3-centre–2-electron bonds.` },
      { h3: R`Diborane` },
      R`B₂H₆ is prepared by 4BF₃ + 3LiAlH₄ → 2B₂H₆ + 3LiF + 3AlF₃ (lab: 2NaBH₄ + I₂ → B₂H₆ + 2NaI + H₂). It is a colourless, highly toxic gas that catches fire in air (B₂H₆ + 3O₂ → B₂O₃ + 3H₂O, ΔH = −1976 kJ/mol). It is hydrolysed to boric acid, and with Lewis bases it splits: B₂H₆ + 2NMe₃ → 2BH₃·NMe₃. With NH₃ on heating it forms <b>borazine</b> B₃N₃H₆ ("inorganic benzene").`,
      R`<b>Structure:</b> the four terminal H atoms and two B atoms lie in one plane; the two bridging H atoms lie above and below it. Each B is sp³; the B–H–B bridges are <b>three-centre two-electron (banana) bonds</b>, because diborane has only 12 valence electrons, too few for 8 normal bonds.`,
      { check: { q: R`Why is boric acid a Lewis acid rather than a Brønsted acid?`, ans: R`B has an empty p orbital: it accepts an OH⁻ from water, releasing H⁺ indirectly.` } }
    ] },

    { h: R`Boron trifluoride, aluminium chloride, alums and uses`, t: [4], blocks: [
      R`<b>BF₃</b> is trigonal planar (sp²) and electron-deficient: a strong Lewis acid (BF₃ + NH₃ → F₃B←NH₃; BF₃ + F⁻ → BF₄⁻). The Lewis acid strength of boron trihalides is <b>BF₃ < BCl₃ < BBr₃ < BI₃</b>, the opposite of what electronegativity suggests, because of strong pπ–pπ back-bonding from F to the empty p orbital of B, which reduces its electron deficiency.`,
      R`<b>AlCl₃</b> exists as the dimer Al₂Cl₆ in the vapour and in non-polar solvents, with Cl bridges. It is a Lewis acid used as a catalyst in Friedel–Crafts reactions. In water it is hydrolysed and the solution is acidic: [Al(H₂O)₆]³⁺ forms.`,
      { fig: figAl2Cl6, cap: R`In Al₂Cl₆ each Al completes its octet by accepting a lone pair from a bridging Cl.` },
      R`<b>Alums</b> are double sulphates M₂SO₄·M'₂(SO₄)₃·24H₂O, where M is a univalent ion (K⁺, Na⁺, NH₄⁺) and M' a trivalent ion (Al³⁺, Cr³⁺, Fe³⁺). Potash alum K₂SO₄·Al₂(SO₄)₃·24H₂O is used to purify water (it coagulates suspended matter), as a mordant in dyeing, and to stop bleeding.`,
      R`<b>Uses:</b> boron fibres in bullet-proof vests and aircraft; ¹⁰B as a neutron absorber in nuclear reactors; borax and boric acid in heat-resistant glass (Pyrex) and as antiseptics. Aluminium in packaging, utensils, construction, aircraft and electrical cables.`,
      { check: { q: R`Why is BF₃ a weaker Lewis acid than BCl₃?`, ans: R`Strong back-bonding (pπ–pπ) from F into B's empty p orbital partly satisfies boron's electron deficiency.` } }
    ] },

    { h: R`Group 14: the carbon family`, t: [0, 4], blocks: [
      R`C, Si, Ge, Sn, Pb (ns² np²). C and Si are non-metals, Ge a metalloid, Sn and Pb metals. The common oxidation states are +4 and +2; +2 becomes more stable down the group (inert pair), so Pb²⁺ is stable and PbO₂ an oxidant. Carbon also shows −4 (in carbides like Al₄C₃). Carbon shows <b>catenation</b> to a unique degree.`,
      { table: { head: [R`Property`, R`C`, R`Si`, R`Ge`, R`Sn`, R`Pb`], rows: [
        [R`Covalent radius / pm`, R`77`, R`118`, R`122`, R`140`, R`146`],
        [R`IE₁ / kJ mol⁻¹`, R`1086`, R`786`, R`761`, R`708`, R`715`],
        [R`Bond enthalpy E–E / kJ mol⁻¹`, R`348`, R`297`, R`260`, R`240`, R`—`]] } },
      { h3: R`Reactivity towards water and halogens` },
      R`C, Si and Ge are not affected by water. Tin decomposes steam: Sn + 2H₂O → SnO₂ + 2H₂. Lead is not attacked by water, probably because of a protective oxide film.`,
      R`All form tetrahalides MX₄ (covalent, tetrahedral). Except CCl₄, they are hydrolysed by water, because the central atom can use its d orbitals to accept a lone pair from water: SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl. CCl₄ is not hydrolysed because carbon has no d orbitals. PbI₄ does not exist (Pb⁴⁺ oxidises I⁻). Dihalides become more stable down the group.`,
      { check: { q: R`Why does SiCl₄ hydrolyse readily but CCl₄ does not?`, ans: R`Si has vacant 3d orbitals that can accept a lone pair from water; C has none and is also sterically protected.` } }
    ] },

    { h: R`Allotropes of carbon`, t: [4], blocks: [
      R`Carbon has several allotropes: <b>diamond, graphite</b>, the <b>fullerenes</b>, and related forms like graphene and carbon nanotubes.`,
      { fig: figCarbon, cap: R`Diamond: every C is sp³ and tetrahedrally bonded in a rigid 3D network. Graphite: sp² carbons in hexagonal layers held by weak forces.` },
      { points: [R`<b>Diamond:</b> hardest natural substance; C–C 154 pm; no free electrons, so an electrical insulator; very high refractive index (sparkle). Used in cutting tools and jewellery.`, R`<b>Graphite:</b> layers of hexagonal rings, C–C 141.5 pm; layers 340 pm apart held by van der Waals forces, so the layers slide (lubricant, pencils). Each C has one delocalised electron per atom, so graphite <b>conducts electricity</b> along the layers. Thermodynamically the most stable form of carbon (ΔfH° = 0).`, R`<b>Fullerenes:</b> C₆₀ (buckminsterfullerene) is a cage of 20 six-membered and 12 five-membered rings, shaped like a soccer ball; each C is sp² hybridised. They were made by heating graphite in an electric arc in an inert gas. Fullerenes are the only <b>pure</b> form of carbon (no dangling bonds).`] },
      R`Other forms: <b>coke, charcoal, carbon black</b> are impure forms of graphite or fullerene. Activated charcoal is used to adsorb poisonous gases and to decolourise sugar; carbon black as a black pigment and filler in tyres.`,
      { check: { q: R`Why is graphite a good conductor of electricity while diamond is not?`, ans: R`In graphite each C has one delocalised (free) electron in the layer; in diamond all four valence electrons are used in localised σ bonds.` } }
    ] },

    { h: R`Carbon monoxide and carbon dioxide`, t: [4], blocks: [
      R`<b>Carbon monoxide</b> forms on burning carbon in limited air. Lab: dehydration of formic acid by conc. H₂SO₄: HCOOH → H₂O + CO. Industrially as water gas (C + H₂O → CO + H₂) or producer gas (CO + N₂). It is a colourless, odourless, almost insoluble gas, a strong reducing agent (used in metallurgy: Fe₂O₃ + 3CO → 2Fe + 3CO₂), and a ligand (lone pair on C, π-acceptor): Ni(CO)₄, Fe(CO)₅.`,
      R`CO is <b>highly poisonous</b>: it binds to haemoglobin about 300 times more strongly than O₂, forming carboxyhaemoglobin and stopping oxygen transport. Its structure is :C≡O: with one σ and two π bonds.`,
      R`<b>Carbon dioxide</b> forms on complete combustion of carbon fuels; lab: CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. It is a linear molecule (O=C=O, sp carbon, zero dipole moment). In water it forms the weak dibasic acid H₂CO₃. Photosynthesis converts it to glucose. Solid CO₂ is <b>dry ice</b> (refrigerant). It is a <b>greenhouse gas</b>: its rising level contributes to global warming.`,
      { ex: { q: R`What volume of CO₂ at STP is formed by burning 1 g of carbon completely?`,
        steps: [R`C + O₂ → CO₂: 12 g C gives 22.4 L.`, R`1 g gives 22.4/12 = 1.87 L.`], ans: R`≈ 1.87 L` } },
      { check: { q: R`Why is CO poisonous?`, ans: R`It forms a stable complex with haemoglobin (carboxyhaemoglobin), blocking oxygen transport.` } }
    ] },

    { h: R`Silicon dioxide, silicones, silicates and zeolites`, t: [4], blocks: [
      R`<b>Silica (SiO₂)</b> is a covalent 3D network solid: each Si is tetrahedrally bonded to four O, and each O is shared by two Si. Quartz, cristobalite and tridymite are crystalline forms. It is very unreactive, but is attacked by HF (SiO₂ + 4HF → SiF₄ + 2H₂O) and by NaOH (SiO₂ + 2NaOH → Na₂SiO₃ + H₂O). Quartz is used as a piezoelectric material; silica gel as a drying agent.`,
      R`<b>Silicones</b> are organosilicon polymers with the repeating unit –(R₂SiO)–. They are made by hydrolysing alkyl chlorosilanes: (CH₃)₂SiCl₂ + 2H₂O → (CH₃)₂Si(OH)₂ + 2HCl, followed by condensation. (CH₃)₃SiCl is used to block the chain ends. Silicones are water-repelling, heat-stable, good insulators and chemically inert: used as sealants, greases, insulators and in surgical implants.`,
      { fig: figSilicone, cap: R`A dimethylsilicone chain: alternating Si and O atoms with methyl groups on silicon.` },
      R`<b>Silicates</b> are built from SiO₄⁴⁻ tetrahedra. Depending on how many corners are shared, they form discrete units (SiO₄⁴⁻), pairs (Si₂O₇⁶⁻), rings, chains, sheets (mica, clay) or 3D networks. In 3D silicates, replacing some Si⁴⁺ by Al³⁺ gives <b>aluminosilicates</b> such as feldspar and zeolites.`,
      { fig: figSilicate, cap: R`Each tetrahedron is a Si atom surrounded by four O; tetrahedra link by sharing O corners.` },
      R`<b>Zeolites</b> are 3D aluminosilicates with a honeycomb of cavities; they act as shape-selective catalysts (ZSM-5 converts alcohols to petrol) and are used to soften hard water (ion exchange).`,
      { check: { q: R`What is the general formula of a silicone?`, ans: R`(R₂SiO)ₙ, a chain of alternating Si and O atoms with organic groups on Si.` } }
    ] },

    { h: R`Group 15: the nitrogen family`, t: [0, 4], blocks: [
      R`N, P, As, Sb, Bi (ns² np³). The half-filled p subshell gives them extra stability and high ionisation enthalpies. N and P are non-metals, As and Sb metalloids, Bi a metal. Common oxidation states are −3, +3 and +5; +3 becomes more stable down the group (inert pair): Bi(V) is a strong oxidant. Nitrogen shows every state from −3 to +5 in its oxides and other compounds.`,
      { h3: R`Reactivity towards hydrogen` },
      R`All form hydrides EH₃: NH₃, PH₃, AsH₃, SbH₃, BiH₃. Down the group:`,
      { table: { head: [R`Property of EH₃`, R`Trend`, R`Reason`], rows: [
        [R`Thermal stability`, R`decreases`, R`E–H bond weakens as E gets larger`],
        [R`Reducing character`, R`increases (BiH₃ strongest)`, R`weaker E–H bonds`],
        [R`Basicity`, R`decreases (NH₃ > PH₃ > … > BiH₃)`, R`lone pair on a larger, more diffuse atom`],
        [R`Bond angle`, R`NH₃ 107.8°, PH₃ 93.6°, AsH₃ 91.8°`, R`less s-p mixing in larger atoms`],
        [R`Boiling point`, R`PH₃ < AsH₃ < NH₃ < SbH₃ < BiH₃`, R`NH₃ is raised by H-bonding`]] } },
      { h3: R`Reactivity towards oxygen and halogens` },
      R`They form oxides E₂O₃ and E₂O₅. The oxide in the higher state is more acidic. Down the group acidic character falls: N₂O₃ and P₂O₃ are acidic, As₂O₃ and Sb₂O₃ amphoteric, Bi₂O₃ basic. With halogens they form trihalides EX₃ (all) and pentahalides EX₅ (except N, which has no d orbitals). Pentahalides are more covalent than trihalides.`,
      { check: { q: R`Why does NCl₅ not exist while PCl₅ does?`, ans: R`Nitrogen has no d orbitals, so it cannot expand its octet beyond four bonds.` } }
    ] },

    { h: R`Dinitrogen and ammonia`, t: [4], blocks: [
      R`<b>Dinitrogen</b> is made commercially by liquefying and fractionally distilling air. Lab: NH₄Cl(aq) + NaNO₂(aq) → N₂ + 2H₂O + NaCl. Very pure N₂ comes from heating sodium or barium azide: Ba(N₃)₂ → Ba + 3N₂. Thermal decomposition of ammonium dichromate also gives N₂: (NH₄)₂Cr₂O₇ → N₂ + 4H₂O + Cr₂O₃.`,
      R`N₂ is very inert at room temperature because of its very strong N≡N triple bond (946 kJ/mol). At high temperatures it combines with metals (6Li + N₂ → 2Li₃N), with O₂ (N₂ + O₂ ⇌ 2NO, in lightning) and with H₂ (Haber process). Uses: making NH₃ and fertilisers, an inert atmosphere, liquid N₂ as a refrigerant.`,
      R`<b>Ammonia</b> is made by the <b>Haber process</b>: N₂ + 3H₂ ⇌ 2NH₃, ΔH = −46.1 kJ/mol (per mol NH₃). By Le Chatelier's principle, high pressure (about 200 atm) and a moderate temperature (about 700 K) with an iron oxide catalyst (with K₂O and Al₂O₃ promoters) give a good yield at a reasonable rate. Lab: 2NH₄Cl + Ca(OH)₂ → 2NH₃ + 2H₂O + CaCl₂.`,
      R`NH₃ is a pyramidal molecule (sp³, one lone pair, bond angle 107°). It is very soluble in water (H-bonding), a weak base (NH₃ + H₂O ⇌ NH₄⁺ + OH⁻), and a Lewis base and ligand: with Cu²⁺ it forms deep blue [Cu(NH₃)₄]²⁺; with Ag⁺, [Ag(NH₃)₂]⁺ (dissolving AgCl).`,
      { ex: { q: R`What mass of ammonia can be made from 28 kg of N₂, assuming complete conversion?`,
        steps: [R`N₂ + 3H₂ → 2NH₃: 28 g N₂ gives 34 g NH₃.`, R`28 kg gives 34 kg.`], ans: R`34 kg` } },
      { check: { q: R`Why is N₂ unreactive at room temperature?`, ans: R`The N≡N triple bond is very strong (946 kJ/mol).` } }
    ] },

    { h: R`Oxides of nitrogen and nitric acid`, t: [4], blocks: [
      { table: { head: [R`Oxide`, R`N state`, R`Preparation`, R`Nature, colour`], rows: [
        [R`N₂O (laughing gas)`, R`+1`, R`NH₄NO₃ → N₂O + 2H₂O (heat)`, R`neutral, colourless, linear N=N=O`],
        [R`NO`, R`+2`, R`3Cu + 8HNO₃(dil) → 3Cu(NO₃)₂ + 2NO + 4H₂O`, R`neutral, colourless, paramagnetic`],
        [R`N₂O₃`, R`+3`, R`2NO + N₂O₄ → 2N₂O₃ (250 K)`, R`acidic, blue solid`],
        [R`NO₂`, R`+4`, R`2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂ (673 K)`, R`acidic, brown, paramagnetic`],
        [R`N₂O₄`, R`+4`, R`2NO₂ ⇌ N₂O₄ (cooling)`, R`acidic, colourless`],
        [R`N₂O₅`, R`+5`, R`4HNO₃ + P₄O₁₀ → 4HPO₃ + 2N₂O₅`, R`acidic, colourless solid`]] } },
      { fig: figHNO3, cap: R`Nitric acid and nitrogen dioxide. NO₂ has an odd electron and dimerises to N₂O₄.` },
      R`<b>Nitric acid</b> is made by the <b>Ostwald process</b>: catalytic oxidation of ammonia on a Pt/Rh gauze (500 K, 9 bar): 4NH₃ + 5O₂ → 4NO + 6H₂O; 2NO + O₂ ⇌ 2NO₂; 3NO₂ + H₂O → 2HNO₃ + NO (recycled). Distillation gives about 68% HNO₃, concentrated to 98% with conc. H₂SO₄.`,
      { fig: figOstwald, cap: R`The Ostwald process. The NO formed in the last step is oxidised and recycled.` },
      R`HNO₃ is a strong acid and a strong oxidising agent. The products depend on the concentration and the metal: 3Cu + 8HNO₃(dilute) → 3Cu(NO₃)₂ + 2NO + 4H₂O; Cu + 4HNO₃(conc.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O; 4Zn + 10HNO₃(dilute) → 4Zn(NO₃)₂ + N₂O + 5H₂O. It oxidises non-metals: I₂ → HIO₃, C → CO₂, S₈ → H₂SO₄, P₄ → H₃PO₄. Cr and Al are made passive. <b>Brown ring test</b> for nitrate: [Fe(H₂O)₅(NO)]²⁺ forms at the junction with conc. H₂SO₄.`,
      { ex: { q: R`In the Ostwald process, what mass of HNO₃ can be made from 17 kg of NH₃ (100% conversion, NO recycled)?`,
        steps: [R`Overall: NH₃ + 2O₂ → HNO₃ + H₂O, 1 mol NH₃ → 1 mol HNO₃.`, R`17 kg NH₃ = 1 kmol → 63 kg HNO₃.`], ans: R`63 kg` } },
      { check: { q: R`Which oxide of nitrogen is brown and paramagnetic?`, ans: R`NO₂.` } }
    ] },

    { h: R`Phosphorus: allotropes, phosphine and the chlorides`, t: [4], blocks: [
      R`Phosphorus has several allotropes:`,
      { fig: figP4, cap: R`White phosphorus is made of strained P₄ tetrahedra; red phosphorus is polymeric.` },
      { points: [R`<b>White P:</b> translucent, waxy, soft, poisonous, insoluble in water but soluble in CS₂; glows in the dark (chemiluminescence); catches fire in air at about 303 K (so stored under water). Its high reactivity comes from the angular strain of the 60° bonds in P₄.`, R`<b>Red P:</b> made by heating white P at 573 K in an inert atmosphere; polymeric chains of P₄ units; much less reactive, not poisonous, does not glow, insoluble in CS₂.`, R`<b>Black P:</b> α- and β-forms, made by heating red P in a sealed tube (or white P under high pressure); the most stable, a layered structure.`] },
      R`<b>Phosphine</b> PH₃: made by heating white P with conc. NaOH in an inert atmosphere: P₄ + 3NaOH + 3H₂O → PH₃ + 3NaH₂PO₂ (a disproportionation). Also Ca₃P₂ + 6H₂O → 3Ca(OH)₂ + 2PH₃. It is a colourless, poisonous gas smelling of rotten fish; weakly basic (PH₃ + HI → PH₄I). Pure PH₃ is not inflammable, but the impurity P₂H₄ makes it catch fire (used in Holme's signals).`,
      R`<b>PCl₃</b> (P₄ + 6Cl₂ → 4PCl₃) is a colourless oily liquid, hydrolysed by water: PCl₃ + 3H₂O → H₃PO₃ + 3HCl. It is pyramidal. <b>PCl₅</b> (P₄ + 10Cl₂ → 4PCl₅) is a yellowish-white powder; in moist air it hydrolyses (PCl₅ + H₂O → POCl₃ + 2HCl; then POCl₃ + 3H₂O → H₃PO₄ + 3HCl). It converts –OH groups into –Cl (CH₃COOH + PCl₅ → CH₃COCl + POCl₃ + HCl) and dissociates on heating: PCl₅ ⇌ PCl₃ + Cl₂.`,
      { fig: figPCl, cap: R`In PCl₅ the two axial bonds are longer (more repelled) than the three equatorial bonds, which makes PCl₅ reactive.` },
      { adv: R`In the solid state PCl₅ is ionic: [PCl₄]⁺[PCl₆]⁻ (tetrahedral cation, octahedral anion).` },
      { check: { q: R`Why is white phosphorus more reactive than red phosphorus?`, ans: R`Its discrete P₄ molecules have strained 60° bond angles; red phosphorus is a polymer.` } }
    ] },

    { h: R`Oxoacids of phosphorus`, t: [4], blocks: [
      R`In all oxoacids of phosphorus, P is tetrahedrally surrounded and has one P=O bond and at least one P–OH bond. Only the H atoms attached to O (P–OH) are <b>ionisable</b>; H atoms bonded directly to P (P–H) are not, but they make the acid a good <b>reducing agent</b>.`,
      { fig: figOxoP, cap: R`Basicity = number of P–OH groups.` },
      { table: { head: [R`Acid`, R`Formula`, R`P state`, R`Basicity`, R`Prepared by`], rows: [
        [R`Hypophosphorous`, R`H₃PO₂`, R`+1`, R`1`, R`white P₄ + alkali`],
        [R`Orthophosphorous`, R`H₃PO₃`, R`+3`, R`2`, R`P₂O₃ + water`],
        [R`Pyrophosphorous`, R`H₄P₂O₅`, R`+3`, R`2`, R`PCl₃ + H₃PO₃`],
        [R`Orthophosphoric`, R`H₃PO₄`, R`+5`, R`3`, R`P₄O₁₀ + water`],
        [R`Pyrophosphoric`, R`H₄P₂O₇`, R`+5`, R`4`, R`heating H₃PO₄`],
        [R`Metaphosphoric`, R`(HPO₃)ₙ`, R`+5`, R`1 per P`, R`phosphorous acid + Br₂, heat`]] } },
      R`H₃PO₃ disproportionates on heating: 4H₃PO₃ → 3H₃PO₄ + PH₃. H₃PO₂ reduces AgNO₃ to Ag: 4AgNO₃ + 2H₂O + H₃PO₂ → 4Ag + 4HNO₃ + H₃PO₄.`,
      { ex: { q: R`How many moles of NaOH are needed to neutralise 0.1 mol of H₃PO₃ completely?`,
        steps: [R`H₃PO₃ has two P–OH groups (one H is on P), so it is dibasic.`, R`0.1 × 2 = 0.2 mol.`], ans: R`0.2 mol` } },
      { check: { q: R`Why is H₃PO₂ a good reducing agent?`, ans: R`It contains two P–H bonds.` } }
    ] },

    { h: R`Group 16: the oxygen family`, t: [0, 4], blocks: [
      R`O, S, Se, Te, Po (ns² np⁴), the <b>chalcogens</b> ("ore-forming"). Oxygen shows −2 (mostly), −1 in peroxides, and +2 only in OF₂. The others show −2, +2, +4 and +6; +4 and +6 are common with oxygen, and +4 becomes more stable down the group (inert pair). Oxygen's electron gain enthalpy is less negative than sulphur's, because its small size crowds the incoming electron.`,
      { h3: R`Reactivity towards hydrogen` },
      R`They form hydrides H₂E: H₂O, H₂S, H₂Se, H₂Te. Down the group: acidity increases (H₂O < H₂S < H₂Se < H₂Te) as the H–E bond weakens; thermal stability decreases; reducing character increases; bond angles decrease (104.5° → 92° → 91° → 90°). H₂O has an abnormally high boiling point because of H-bonding.`,
      { h3: R`Reactivity towards oxygen and halogens; simple oxides` },
      R`All form dioxides EO₂ (SO₂ gas, SeO₂ solid) and trioxides EO₃ (SO₃, SeO₃, TeO₃), both acidic; reducing power of the dioxides decreases down the group (SO₂ reducing, TeO₂ oxidising). With halogens they form hexafluorides EF₆ (SF₆ is exceptionally stable and inert, octahedral, used as an insulator), tetrahalides (SF₄, see-saw) and dihalides.`,
      R`Binary compounds of oxygen with other elements are <b>oxides</b>: <b>acidic</b> (SO₂, Cl₂O₇, CO₂, N₂O₅; most non-metal oxides and high-state metal oxides like Mn₂O₇, CrO₃), <b>basic</b> (Na₂O, CaO, BaO), <b>amphoteric</b> (Al₂O₃, ZnO, BeO) and <b>neutral</b> (CO, NO, N₂O).`,
      { check: { q: R`Arrange H₂O, H₂S, H₂Se, H₂Te in order of acid strength.`, ans: R`H₂O < H₂S < H₂Se < H₂Te.` } }
    ] },

    { h: R`Dioxygen and ozone`, t: [4], blocks: [
      R`<b>Dioxygen</b> is prepared by heating oxygen-rich salts (2KClO₃ → 2KCl + 3O₂ with MnO₂ catalyst), by decomposing H₂O₂ (with MnO₂), from oxides (2Ag₂O → 4Ag + O₂; 2HgO → 2Hg + O₂), and industrially by fractional distillation of liquid air or electrolysis of water. It is paramagnetic (two unpaired electrons, as MO theory predicts). It reacts with most metals and non-metals, and is used in respiration, welding torches (oxy-acetylene) and steel-making.`,
      R`<b>Ozone</b> (O₃) is made by passing a silent electric discharge through dry O₂: 3O₂ → 2O₃, ΔH = +142 kJ/mol. Being endothermic, it decomposes easily and is a powerful <b>oxidising agent</b>: O₃ → O₂ + O. It oxidises PbS to PbSO₄, I⁻ to I₂ (estimation of ozone: 2I⁻ + H₂O + O₃ → 2OH⁻ + I₂ + O₂), and NO to NO₂.`,
      { fig: figO3SO2, cap: R`Ozone is a bent molecule; its two O–O bonds are equal (resonance). SO₂ has a similar shape.` },
      R`The <b>ozone layer</b> in the stratosphere absorbs harmful UV radiation. It is depleted by NO from supersonic jets (NO + O₃ → NO₂ + O₂) and by chlorine atoms from CFCs.`,
      { ex: { q: R`When a volume of O₂ is partly converted to O₃, the gas volume decreases by 50 mL. What volume of O₃ was formed?`,
        steps: [R`3O₂ → 2O₃: 3 volumes become 2; the contraction is 1 volume per 2 volumes of O₃.`, R`Contraction 50 mL → O₃ = 100 mL.`], ans: R`100 mL` } },
      { check: { q: R`Why is ozone thermodynamically unstable compared with O₂?`, ans: R`Its formation is endothermic (ΔH positive) and the decomposition 2O₃ → 3O₂ has negative ΔG.` } }
    ] },

    { h: R`Sulphur: allotropes and sulphur dioxide`, t: [4], blocks: [
      R`Sulphur has many allotropes; the two important ones are <b>rhombic (α)</b> sulphur, yellow and stable below 369 K, and <b>monoclinic (β)</b> sulphur, stable above 369 K (the transition temperature). Both are made of puckered, crown-shaped <b>S₈ rings</b>. At high temperature (≈ 1000 K) S₂ molecules form, which are paramagnetic like O₂.`,
      { fig: figS8, cap: R`The S₈ crown: S–S–S angle about 107°.` },
      R`<b>Sulphur dioxide</b> is made by burning sulphur (S + O₂ → SO₂) or roasting sulphide ores, and in the lab by SO₃²⁻ + 2H⁺ → H₂O + SO₂. It is a colourless gas with a pungent smell, very soluble in water, forming sulphurous acid (SO₂ + H₂O ⇌ H₂SO₃). It is a <b>reducing agent</b> in moist conditions: it turns acidified KMnO₄ colourless (a test for SO₂) and converts Fe³⁺ to Fe²⁺. It is used to make H₂SO₄, as a bleach (by reduction) and as a preservative. Its structure is bent (sp², 119.5°) with two equal S–O bonds (resonance).`,
      { check: { q: R`How can SO₂ be tested?`, ans: R`It decolourises acidified potassium permanganate (pink → colourless).` } }
    ] },

    { h: R`Sulphuric acid and the oxoacids of sulphur`, t: [4], blocks: [
      R`Sulphur forms many oxoacids: sulphurous acid H₂SO₃ (S +4), sulphuric acid H₂SO₄ (+6), pyrosulphuric acid (oleum) H₂S₂O₇ (+6), peroxodisulphuric acid H₂S₂O₈ (+6, with an O–O link). In all, S is tetrahedral.`,
      { fig: figOxoS, cap: R`Structures of three oxoacids of sulphur.` },
      R`<b>Sulphuric acid</b> is made by the <b>Contact process</b>: (i) burning sulphur or roasting sulphide ores to SO₂; (ii) catalytic oxidation 2SO₂ + O₂ ⇌ 2SO₃ (V₂O₅ catalyst, 720 K, 2 bar; exothermic, so moderate temperature); (iii) absorbing SO₃ in conc. H₂SO₄ to form <b>oleum</b>, H₂S₂O₇, which is diluted to the required concentration. SO₃ is not absorbed directly in water, because that gives a fine mist of acid.`,
      { fig: figContact, cap: R`The Contact process.` },
      { points: [R`<b>Strong dibasic acid:</b> H₂SO₄ + H₂O → H₃O⁺ + HSO₄⁻ (Ka₁ very large); HSO₄⁻ ⇌ H⁺ + SO₄²⁻ (Ka₂ = 1.2 × 10⁻²).`, R`<b>Low volatility:</b> makes more volatile acids from their salts: 2MX + H₂SO₄ → 2HX + M₂SO₄.`, R`<b>Dehydrating agent:</b> chars sugar (C₁₂H₂₂O₁₁ → 12C + 11H₂O) and dries gases.`, R`<b>Oxidising agent</b> (hot, conc.): Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O; C + 2H₂SO₄ → CO₂ + 2SO₂ + 2H₂O.`] },
      R`Uses: fertilisers (ammonium sulphate, superphosphate), petroleum refining, detergents, pigments, storage batteries.`,
      { ex: { q: R`A sample of oleum is labelled "109%". What percentage of free SO₃ does it contain?`,
        steps: [R`100 g oleum + 9 g water → 109 g H₂SO₄. The water reacts with free SO₃: SO₃ + H₂O → H₂SO₄.`, R`9 g H₂O = 0.5 mol, so SO₃ = 0.5 × 80 = 40 g in 100 g.`], ans: R`40% free SO₃` } },
      { check: { q: R`Why is SO₃ dissolved in H₂SO₄ rather than water in the Contact process?`, ans: R`Dissolving directly in water gives a mist of acid droplets that is hard to condense; absorbing in H₂SO₄ gives oleum smoothly.` } }
    ] },

    { h: R`Group 17: the halogens`, t: [0, 4], blocks: [
      R`F, Cl, Br, I, At (ns² np⁵) are one electron short of a noble gas, so they are highly reactive non-metals with very negative electron gain enthalpies. They are coloured (F₂ pale yellow, Cl₂ greenish-yellow, Br₂ red-brown liquid, I₂ violet solid) because they absorb visible light to excite outer electrons. Fluorine shows only −1; the others also show +1, +3, +5 and +7 (in oxoacids and interhalogens).`,
      { table: { head: [R`Property`, R`F`, R`Cl`, R`Br`, R`I`], rows: [
        [R`Electron gain enthalpy / kJ mol⁻¹`, R`−333`, R`−349`, R`−325`, R`−296`],
        [R`Electronegativity`, R`4.0`, R`3.2`, R`3.0`, R`2.7`],
        [R`X–X bond enthalpy / kJ mol⁻¹`, R`158.8`, R`242.6`, R`192.8`, R`151.1`],
        [R`E°(X₂/X⁻) / V`, R`2.87`, R`1.36`, R`1.09`, R`0.54`]] } },
      R`Two anomalies of fluorine: its electron gain enthalpy is less negative than chlorine's (small size, strong electron repulsion in the compact 2p subshell), and its F–F bond is weaker than Cl–Cl (lone pair repulsion between the small atoms).`,
      { fig: figBDE, cap: R`The F–F bond is unusually weak, one reason for the high reactivity of fluorine.` },
      R`Fluorine is the <b>strongest oxidising agent</b> (E° = 2.87 V): it oxidises water to O₂ (2F₂ + 2H₂O → 4H⁺ + 4F⁻ + O₂), and each halogen oxidises the halide ions below it: F₂ + 2X⁻ → 2F⁻ + X₂ (X = Cl, Br, I).`,
      { h3: R`Reactivity towards hydrogen, oxygen and metals` },
      R`With hydrogen they form HX: F₂ explodes even in the dark; I₂ reacts only with a catalyst. Acid strength: HF < HCl < HBr < HI (HF is weak because of its strong H–F bond and H-bonding); thermal stability is the reverse. With oxygen, F forms OF₂ and O₂F₂ (oxygen fluorides, because F is more electronegative); Cl, Br and I form oxides like Cl₂O, ClO₂, Cl₂O₇, which are strong oxidants. With metals they form halides; ionic character M–F > M–Cl > M–Br > M–I.`,
      { check: { q: R`Why is HF a weaker acid than HCl even though F is more electronegative?`, ans: R`The H–F bond is much stronger and HF molecules are H-bonded, so it ionises less.` } }
    ] },

    { h: R`Chlorine, hydrogen chloride and bleaching powder`, t: [4], blocks: [
      R`<b>Chlorine</b> is prepared by oxidising HCl with MnO₂ (MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O) or KMnO₄ (2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 8H₂O + 5Cl₂). Industrially it is made by electrolysis of brine (by-product of NaOH) or by the <b>Deacon process</b>: 4HCl + O₂ → 2Cl₂ + 2H₂O (CuCl₂ catalyst, 723 K).`,
      { points: [R`With cold dilute alkali: 2NaOH + Cl₂ → NaCl + NaOCl + H₂O. With hot conc. alkali: 6NaOH + 3Cl₂ → 5NaCl + NaClO₃ + 3H₂O (disproportionation).`, R`With excess NH₃: 8NH₃ + 3Cl₂ → 6NH₄Cl + N₂; with excess Cl₂: NH₃ + 3Cl₂ → NCl₃ (explosive) + 3HCl.`, R`It bleaches by <b>oxidation</b> in the presence of moisture: Cl₂ + H₂O → 2HCl + [O] (permanent bleaching).`, R`Uses: bleaching wood pulp and cotton, sterilising water, making CCl₄, PVC, DDT and poisonous gases (phosgene, mustard gas).`] },
      R`<b>Hydrogen chloride</b> is made by heating NaCl with conc. H₂SO₄ (NaCl + H₂SO₄ → NaHSO₄ + HCl). It is a colourless, pungent gas, very soluble in water (strong acid). <b>Aqua regia</b> (3 parts conc. HCl + 1 part conc. HNO₃) dissolves gold and platinum: Au + 4H⁺ + NO₃⁻ + 4Cl⁻ → AuCl₄⁻ + NO + 2H₂O.`,
      R`<b>Bleaching powder</b>, Ca(OCl)₂·CaCl₂·Ca(OH)₂·2H₂O (often written CaOCl₂), is made by passing Cl₂ over dry slaked lime: 2Ca(OH)₂ + 2Cl₂ → Ca(OCl)₂ + CaCl₂ + 2H₂O. With dilute acids it releases chlorine ("available chlorine"); it is used for bleaching and disinfecting water.`,
      { ex: { q: R`What volume of Cl₂ at STP is obtained from 8.7 g of MnO₂ with excess conc. HCl?`,
        steps: [R`MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O; 8.7/87 = 0.1 mol MnO₂.`, R`0.1 mol Cl₂ = 2.24 L.`], ans: R`2.24 L` } },
      { check: { q: R`What is the action of chlorine on hot, concentrated NaOH?`, ans: R`It disproportionates into chloride and chlorate: 6NaOH + 3Cl₂ → 5NaCl + NaClO₃ + 3H₂O.` } }
    ] },

    { h: R`Interhalogen compounds and oxoacids of halogens`, t: [4], blocks: [
      R`<b>Interhalogen compounds</b> form between two different halogens: XX', XX'₃, XX'₅ and XX'₇, where X is the larger, less electronegative halogen (ClF, BrF₃, IF₅, IF₇). They are covalent, mostly diamagnetic, and <b>more reactive than the halogens</b> (except F₂) because the X–X' bond is weaker than X–X. They are fluorinating agents (ClF₃ for making UF₆), and are hydrolysed to halide and oxohalide ions: XX' + H₂O → HX' + HOX. Shapes follow VSEPR: XX'₃ T-shaped, XX'₅ square pyramidal, IF₇ pentagonal bipyramidal.`,
      { fig: figInter, cap: R`Shapes of ClF₃ and BrF₅ (lone pairs on the central atom are shown as dot pairs).` },
      R`<b>Oxoacids of halogens:</b> fluorine forms only HOF. Chlorine forms four:`,
      { table: { head: [R`Acid`, R`Formula`, R`Cl state`, R`Anion shape`], rows: [
        [R`Hypochlorous`, R`HOCl`, R`+1`, R`—`],
        [R`Chlorous`, R`HOClO`, R`+3`, R`bent (ClO₂⁻)`],
        [R`Chloric`, R`HOClO₂`, R`+5`, R`pyramidal (ClO₃⁻)`],
        [R`Perchloric`, R`HOClO₃`, R`+7`, R`tetrahedral (ClO₄⁻)`]] } },
      R`Acid strength increases with the oxidation state of Cl: <b>HOCl < HClO₂ < HClO₃ < HClO₄</b>, because the negative charge of the anion is spread over more O atoms (more stable conjugate base). Oxidising power is the reverse (HOCl strongest). For the same type of acid, strength falls down the group: HOCl > HOBr > HOI.`,
      { check: { q: R`Which is the strongest oxoacid of chlorine and why?`, ans: R`HClO₄: its anion ClO₄⁻ spreads the negative charge over four O atoms, making it most stable.` } }
    ] },

    { h: R`Group 18: the noble gases`, t: [4], blocks: [
      R`He, Ne, Ar, Kr, Xe, Rn have completely filled shells (ns² np⁶; He 1s²), very high ionisation enthalpies and positive (unfavourable) electron gain enthalpies, so they are monatomic and very unreactive. Their boiling points are very low (only weak dispersion forces) and increase down the group. Rn is radioactive.`,
      R`<b>Uses:</b> He in balloons and weather probes (light and non-inflammable), in breathing mixtures for divers (less soluble in blood than N₂), and to cool superconducting magnets (MRI); Ne in discharge tubes and signs; Ar as an inert atmosphere in welding and bulbs; Xe and Kr in special lamps.`,
      R`<b>Compounds of xenon:</b> in 1962 Neil Bartlett made O₂⁺[PtF₆]⁻ and, noting that IE(O₂) ≈ IE(Xe), then made Xe⁺[PtF₆]⁻, the first noble gas compound. Xenon reacts directly with fluorine:`,
      { points: [R`Xe + F₂ → XeF₂ (excess Xe, 673 K); Xe + 2F₂ → XeF₄ (1:5 ratio, 873 K, 7 bar); Xe + 3F₂ → XeF₆ (1:20, 573 K, 60–70 bar).`, R`Hydrolysis: 2XeF₂ + 2H₂O → 2Xe + 4HF + O₂; XeF₆ + 3H₂O → XeO₃ + 6HF (partial: XeF₆ + H₂O → XeOF₄ + 2HF).`, R`Fluoride donors/acceptors: XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻; XeF₆ + MF → M⁺[XeF₇]⁻.`] },
      { fig: figXe, cap: R`XeF₂ linear, XeF₄ square planar, XeO₃ pyramidal. XeF₆ is a distorted octahedron (sp³d³, one lone pair).` },
      { table: { head: [R`Compound`, R`Hybridisation`, R`Lone pairs on Xe`, R`Shape`], rows: [
        [R`XeF₂`, R`sp³d`, R`3`, R`linear`], [R`XeF₄`, R`sp³d²`, R`2`, R`square planar`], [R`XeF₆`, R`sp³d³`, R`1`, R`distorted octahedral`], [R`XeO₃`, R`sp³`, R`1`, R`pyramidal`], [R`XeOF₄`, R`sp³d²`, R`1`, R`square pyramidal`]] } },
      { ex: { q: R`How many moles of HF are produced by complete hydrolysis of 0.1 mol of XeF₆?`,
        steps: [R`XeF₆ + 3H₂O → XeO₃ + 6HF`, R`0.1 × 6 = 0.6 mol.`], ans: R`0.6 mol` } },
      { check: { q: R`What gave Bartlett the idea that xenon could form compounds?`, ans: R`The first ionisation enthalpy of xenon (1170 kJ/mol) is almost the same as that of O₂ (1175 kJ/mol), which forms O₂⁺[PtF₆]⁻.` } }
    ] }
  ],
  summary: [
    R`p-block: ns² np¹⁻⁶. Non-metallic character rises across, falls down. Inert pair effect: lower states (Tl⁺, Pb²⁺, Bi³⁺) more stable down the group; Pb(IV), Tl(III), Bi(V) oxidising.`,
    R`First elements (B, C, N, O, F): covalency ≤ 4, pπ–pπ multiple bonds, catenation (C), H-bonding.`,
    R`Group 13: B₂O₃ acidic → Tl₂O₃ basic; borax (bead test), H₃BO₃ (monobasic Lewis acid), B₂H₆ (3c–2e bonds), BF₃ < BCl₃ < BBr₃ Lewis acidity (back-bonding), Al₂Cl₆ dimer, alums.`,
    R`Group 14: catenation; diamond/graphite/fullerenes; CO poisonous ligand, CO₂ linear; SiO₂ network; silicones (R₂SiO)ₙ; silicates from SiO₄⁴⁻; zeolites.`,
    R`Group 15: NH₃ (Haber) basic, pyramidal; oxides of N from +1 to +5; HNO₃ (Ostwald) oxidising; white P (P₄) reactive, red P polymeric; PH₃, PCl₃, PCl₅ (TBP); basicity of P oxoacids = number of P–OH.`,
    R`Group 16: O₃ (bent, strong oxidant), rhombic/monoclinic S₈, SO₂ (reducing, bleach), H₂SO₄ (Contact process: V₂O₅, oleum; acid, dehydrating, oxidising).`,
    R`Group 17: F₂ strongest oxidant; F anomalies (electron gain, weak F–F); HF weakest HX acid; Cl₂ (Deacon, bleach), bleaching powder; interhalogens; HOCl < HClO₂ < HClO₃ < HClO₄ (acid strength).`,
    R`Group 18: inert; uses of He, Ne, Ar; XeF₂ (linear), XeF₄ (square planar), XeF₆ (distorted octahedral), XeO₃ (pyramidal).`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §18.3 Structure and General Properties of the Metalloids`, url: 'https://openstax.org/books/chemistry-2e/pages/18-3-structure-and-general-properties-of-the-metalloids' },
    { t: R`OpenStax Chemistry 2e, §18.4 Structure and General Properties of the Nonmetals`, url: 'https://openstax.org/books/chemistry-2e/pages/18-4-structure-and-general-properties-of-the-nonmetals' },
    { t: R`OpenStax Chemistry 2e, §18.7 Occurrence, Preparation, and Properties of Nitrogen`, url: 'https://openstax.org/books/chemistry-2e/pages/18-7-occurrence-preparation-and-properties-of-nitrogen' },
    { t: R`OpenStax Chemistry 2e, §18.9 Occurrence, Preparation, and Compounds of Oxygen`, url: 'https://openstax.org/books/chemistry-2e/pages/18-9-occurrence-preparation-and-compounds-of-oxygen' },
    { t: R`OpenStax Chemistry 2e, §18.11 Occurrence, Preparation, and Properties of Halogens`, url: 'https://openstax.org/books/chemistry-2e/pages/18-11-occurrence-preparation-and-properties-of-halogens' },
    { t: R`OpenStax Chemistry 2e, §18.12 Occurrence, Preparation, and Properties of the Noble Gases`, url: 'https://openstax.org/books/chemistry-2e/pages/18-12-occurrence-preparation-and-properties-of-the-noble-gases' },
    { t: R`Wikipedia: Inert-pair effect`, url: 'https://en.wikipedia.org/wiki/Inert-pair_effect' },
    { t: R`Wikipedia: Diborane`, url: 'https://en.wikipedia.org/wiki/Diborane' },
    { t: R`Wikipedia: Contact process`, url: 'https://en.wikipedia.org/wiki/Contact_process' },
    { t: R`Wikipedia: Xenon compounds`, url: 'https://en.wikipedia.org/wiki/Xenon_compounds' }
  ]
});
})();
