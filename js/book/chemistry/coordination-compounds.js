// Book chapter: Coordination Compounds. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 11, math: false, bold: true }) : ''); }
// Octahedral complex: L = [top, bottom, left, right, front, back]; mirror flips left/right.
function oct(cx, cy, L, metal, o) {
  o = o || {};
  var m = o.mirror ? -1 : 1;
  var P = [[0, -52], [0, 52], [-52, 0], [52, 0], [-30, 24], [30, -24]];
  var atoms = [{ x: cx, y: cy, s: metal || 'Co', color: 'p', size: 13 }];
  var bonds = [];
  L.forEach(function (l, i) {
    atoms.push({ x: cx + m * P[i][0], y: cy + P[i][1], s: l, color: l === 'Cl' ? 'g' : l === 'NO₂' ? 'r' : l === 'N' ? 'b' : 'k', size: l.length > 2 ? 11 : 13 });
    bonds.push([0, i + 1, i === 4 ? 'w' : i === 5 ? 'h' : 1]);
  });
  var parts = [D.mol({ atoms: atoms, bonds: bonds, r: 12 })];
  (o.en || []).forEach(function (pair) {
    var a = atoms[pair[0] + 1], b = atoms[pair[1] + 1], mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2, dx = mx - cx, dy = my - cy, L2 = Math.hypot(dx, dy) || 1;
    var qx = mx + dx / L2 * 26, qy = my + dy / L2 * 26;
    parts.push(D.path('M' + a.x + ',' + a.y + ' Q' + qx + ',' + qy + ' ' + b.x + ',' + b.y, { color: 'b', w: 2 }));
    parts.push(lab(mx + dx / L2 * 26, my + dy / L2 * 26 + (dy > 0 ? 8 : -4), 'en', 'b', 10, { bold: true }));
  });
  if (o.label) parts.push(lab(cx, cy + 82, o.label, 'm', 10));
  return parts.join('');
}
function sq(cx, cy, L, metal, label) {
  var P = [[0, -48], [0, 48], [-52, 0], [52, 0]], atoms = [{ x: cx, y: cy, s: metal, color: 'p', size: 13 }], bonds = [];
  L.forEach(function (l, i) { atoms.push({ x: cx + P[i][0], y: cy + P[i][1], s: l, color: l === 'Cl' ? 'g' : 'k', size: l.length > 2 ? 11 : 13 }); bonds.push([0, i + 1]); });
  return D.mol({ atoms: atoms, bonds: bonds, r: 12 }) + (label ? lab(cx, cy + 74, label, 'm', 10) : '');
}
// Orbital boxes: cells like 'ud', 'u', '', 'L' (ligand pair).
function orbs(x, y, groups) {
  var out = [], X = x;
  groups.forEach(function (g) {
    g[1].forEach(function (c) {
      out.push(D.rect(X, y, 26, 22, { color: c === 'L' ? 'o' : 'k', fill: c === 'L' ? 'soft' : undefined, w: 1.2 }));
      var t = c === 'ud' ? '↑↓' : c === 'u' ? '↑' : c === 'L' ? '××' : '';
      if (t) out.push(D.text(X + 13, y + 12, t, { size: c === 'L' ? 10 : 12, math: false, color: c === 'L' ? 'o' : 'k', bold: c !== 'L' }));
      X += 26;
    });
    out.push(lab(X - g[1].length * 13, y + 34, g[0], 'm', 9));
    X += 8;
  });
  return out.join('');
}

// ---------- figures ----------
var figWerner = D.svg(420, 170, [
  D.circle(150, 85, 18, { color: 'p', fill: 'soft', w: 1.8 }), D.text(150, 86, 'Co', { size: 13, math: false, bold: true, color: 'p' }),
  ['NH₃', 'NH₃', 'NH₃', 'NH₃', 'NH₃', 'NH₃'].map(function (s, i) { var a = i * Math.PI / 3, x = 150 + 58 * Math.cos(a), y = 85 + 58 * Math.sin(a); return D.line(150 + 20 * Math.cos(a), 85 + 20 * Math.sin(a), x - 14 * Math.cos(a), y - 14 * Math.sin(a), { w: 1.8 }) + D.text(x, y, s, { size: 11, math: false, color: 'b', bold: true }); }).join(''),
  lab(330, 40, 'Cl⁻', 'g', 13, { bold: true }), lab(330, 85, 'Cl⁻', 'g', 13, { bold: true }), lab(330, 130, 'Cl⁻', 'g', 13, { bold: true }),
  D.line(232, 80, 315, 44, { color: 'g', dash: '4 4', w: 1.2 }), D.line(232, 85, 315, 85, { color: 'g', dash: '4 4', w: 1.2 }), D.line(232, 90, 315, 126, { color: 'g', dash: '4 4', w: 1.2 }),
  lab(150, 162, 'secondary valency 6 (solid lines, inside [ ])', 'b', 9), lab(345, 162, 'primary valency 3 (ionisable)', 'g', 9)
], 'Werner representation of [Co(NH3)6]Cl3');

var figChelate = D.row([
  [D.svg(200, 130, [D.mol({ atoms: [{ x: 45, y: 65, s: 'M', color: 'p' }, { x: 100, y: 30, s: 'N', color: 'b' }, { x: 100, y: 100, s: 'N', color: 'b' }, { x: 155, y: 40, s: 'CH₂', size: 12 }, { x: 155, y: 90, s: 'CH₂', size: 12 }, { x: 110, y: 8, s: 'H₂', size: 10, color: 'm' }, { x: 110, y: 122, s: 'H₂', size: 10, color: 'm' }],
    bonds: [[0, 1], [0, 2], [1, 3], [3, 4], [4, 2]], r: 12 })], 'en chelate'), R`ethane-1,2-diamine (en): bidentate, 5-membered ring`],
  [D.svg(200, 130, [D.mol({ atoms: [{ x: 45, y: 65, s: 'M', color: 'p' }, { x: 100, y: 30, s: 'O', color: 'r' }, { x: 100, y: 100, s: 'O', color: 'r' }, { x: 145, y: 40, s: 'C' }, { x: 145, y: 90, s: 'C' }, { x: 185, y: 20, s: 'O', color: 'r' }, { x: 185, y: 110, s: 'O', color: 'r' }],
    bonds: [[0, 1], [0, 2], [1, 3], [3, 4], [4, 2], [3, 5, 2], [4, 6, 2]], r: 11 })], 'oxalate chelate'), R`oxalate (ox²⁻): bidentate`],
  [D.svg(200, 130, [lab(100, 30, 'M ← NO₂⁻  (nitro, via N)', 'b', 11), lab(100, 55, 'M ← ONO⁻  (nitrito, via O)', 'r', 11), lab(100, 85, 'M ← SCN⁻  (thiocyanato, via S)', 'o', 11), lab(100, 110, 'M ← NCS⁻  (isothiocyanato, via N)', 'p', 11)], 'ambidentate'), R`ambidentate ligands bind through either of two atoms`]
]);

var figCisTrans = D.row([
  [D.svg(150, 150, [sq(75, 62, ['Cl', 'NH₃', 'NH₃', 'Cl'], 'Pt', 'cis')], 'cis-Pt'), R`cis-[Pt(NH₃)₂Cl₂] (cisplatin)`],
  [D.svg(150, 150, [sq(75, 62, ['Cl', 'Cl', 'NH₃', 'NH₃'], 'Pt', 'trans')], 'trans-Pt'), R`trans-[Pt(NH₃)₂Cl₂]`],
  [D.svg(150, 170, [oct(75, 72, ['Cl', 'NH₃', 'NH₃', 'Cl', 'NH₃', 'NH₃'], 'Co', { label: 'cis' })], 'cis-Co'), R`cis-[Co(NH₃)₄Cl₂]⁺ (violet)`],
  [D.svg(150, 170, [oct(75, 72, ['Cl', 'Cl', 'NH₃', 'NH₃', 'NH₃', 'NH₃'], 'Co', { label: 'trans' })], 'trans-Co'), R`trans-[Co(NH₃)₄Cl₂]⁺ (green)`]
]);
var figFacMer = D.row([
  [D.svg(160, 170, [oct(80, 72, ['NO₂', 'NH₃', 'NH₃', 'NO₂', 'NO₂', 'NH₃'], 'Co', { label: 'fac' })], 'fac'), R`fac: the three NO₂ on one face`],
  [D.svg(160, 170, [oct(80, 72, ['NO₂', 'NO₂', 'NH₃', 'NO₂', 'NH₃', 'NH₃'], 'Co', { label: 'mer' })], 'mer'), R`mer: the three NO₂ around a meridian`]
]);
var figOptical = D.svg(380, 180, [
  oct(95, 80, ['Cl', 'N', 'N', 'Cl', 'N', 'N'], 'Co', { en: [[1, 4], [2, 5]] }),
  D.line(190, 10, 190, 170, { color: 'm', dash: '5 4', w: 1.4 }), lab(190, 176, 'mirror', 'm', 9),
  oct(285, 80, ['Cl', 'N', 'N', 'Cl', 'N', 'N'], 'Co', { en: [[1, 4], [2, 5]], mirror: true })
], 'Optical isomers of cis-[CoCl2(en)2]+');

var figVB6 = D.svg(490, 170, [
  lab(5, 14, '[Co(NH₃)₆]³⁺  (Co³⁺ 3d⁶, strong-field NH₃: electrons pair up)', 'k', 10, { anchor: 'start', bold: true }),
  orbs(10, 26, [['3d', ['ud', 'ud', 'ud', 'L', 'L']], ['4s', ['L']], ['4p', ['L', 'L', 'L']]]),
  lab(350, 37, 'd²sp³ inner orbital', 'b', 10, { anchor: 'start', bold: true }), lab(350, 51, 'octahedral, diamagnetic', 'm', 9, { anchor: 'start' }),
  lab(5, 98, '[CoF₆]³⁻  (Co³⁺ 3d⁶, weak-field F⁻: no pairing)', 'k', 10, { anchor: 'start', bold: true }),
  orbs(10, 110, [['3d', ['ud', 'u', 'u', 'u', 'u']], ['4s', ['L']], ['4p', ['L', 'L', 'L']], ['4d', ['L', 'L', '', '']]]),
  lab(410, 121, 'sp³d² outer', 'r', 10, { anchor: 'start', bold: true }), lab(410, 135, 'paramagnetic', 'm', 9, { anchor: 'start' }), lab(410, 148, '(4 unpaired)', 'm', 9, { anchor: 'start' })
], 'Valence bond pictures of two Co(III) complexes');
var figVB4 = D.svg(470, 170, [
  lab(5, 14, '[Ni(CN)₄]²⁻  (Ni²⁺ 3d⁸, CN⁻ strong field)', 'k', 10, { anchor: 'start', bold: true }),
  orbs(10, 26, [['3d', ['ud', 'ud', 'ud', 'ud', 'L']], ['4s', ['L']], ['4p', ['L', 'L', '']]]),
  lab(330, 37, 'dsp²: square planar', 'b', 10, { anchor: 'start', bold: true }), lab(330, 51, 'diamagnetic', 'm', 9, { anchor: 'start' }),
  lab(5, 98, '[NiCl₄]²⁻  (Ni²⁺ 3d⁸, Cl⁻ weak field)', 'k', 10, { anchor: 'start', bold: true }),
  orbs(10, 110, [['3d', ['ud', 'ud', 'ud', 'u', 'u']], ['4s', ['L']], ['4p', ['L', 'L', 'L']]]),
  lab(330, 121, 'sp³: tetrahedral', 'r', 10, { anchor: 'start', bold: true }), lab(330, 135, 'paramagnetic (2 unpaired)', 'm', 9, { anchor: 'start' })
], 'Valence bond pictures of two Ni(II) complexes');

function lvl(x, y, n, c, w) { var o = []; for (var i = 0; i < n; i++) o.push(D.line(x + i * (w + 6), y, x + i * (w + 6) + w, y, { color: c, w: 2.4 })); return o.join(''); }
var figSplit = D.svg(480, 220, [
  D.line(20, 110, 460, 110, { color: 'm', dash: '3 4', w: 1 }), lab(70, 122, 'average energy (barycentre)', 'm', 9, { anchor: 'start' }),
  lab(130, 14, 'octahedral', 'k', 11, { bold: true }),
  lvl(80, 50, 2, 'r', 34), lab(170, 50, 'e_g  +0.6Δ₀', 'r', 10, { anchor: 'start' }),
  lvl(60, 150, 3, 'b', 30), lab(170, 150, 't₂g  −0.4Δ₀', 'b', 10, { anchor: 'start' }),
  D.arrow(52, 145, 52, 55, { color: 'o', both: true, head: 7 }), lab(40, 100, 'Δ₀', 'o', 11, { anchor: 'end', bold: true }),
  lab(370, 14, 'tetrahedral', 'k', 11, { bold: true }),
  lvl(310, 84, 3, 'b', 30), lab(420, 84, 't₂  +0.4Δt', 'b', 10, { anchor: 'start' }),
  lvl(320, 126, 2, 'r', 34), lab(420, 126, 'e  −0.6Δt', 'r', 10, { anchor: 'start' }),
  D.arrow(300, 121, 300, 89, { color: 'o', both: true, head: 6 }), lab(290, 105, 'Δt', 'o', 10, { anchor: 'end', bold: true }),
  lab(370, 175, 'Δt ≈ (4/9)Δ₀', 'o', 11, { bold: true }), lab(370, 192, 'so tetrahedral complexes', 'm', 9), lab(370, 204, 'are almost always high spin', 'm', 9)
], 'Crystal field splitting');

function spin(x, y, cfgT, cfgE, title, sub) {
  var o = [lvl(x, y + 30, 2, 'r', 30), lvl(x - 10, y + 100, 3, 'b', 26), lab(x + 33, y + 6, title, 'k', 10, { bold: true }), lab(x + 33, y + 130, sub, 'm', 9)];
  cfgE.forEach(function (c, i) { o.push(D.text(x + 15 + i * 36, y + 22, c, { size: 13, math: false, bold: true })); });
  cfgT.forEach(function (c, i) { o.push(D.text(x + 3 + i * 32, y + 92, c, { size: 13, math: false, bold: true })); });
  return o.join('');
}
var figSpin = D.svg(400, 160, [
  spin(40, 10, ['↑↓', '↑', '↑'], ['↑', '↑'], 'high spin d⁶ (Δ₀ < P)', 't₂g⁴ e_g², 4 unpaired'),
  spin(250, 10, ['↑↓', '↑↓', '↑↓'], ['', ''], 'low spin d⁶ (Δ₀ > P)', 't₂g⁶ e_g⁰, 0 unpaired'),
  lab(55, 75, '[CoF₆]³⁻', 'r', 10), lab(265, 75, '[Co(NH₃)₆]³⁺', 'b', 10)
], 'High-spin and low-spin d6');

var figCO = D.svg(440, 150, [
  D.circle(70, 75, 22, { color: 'p', fill: 'soft', w: 1.8 }), D.text(70, 76, 'M', { size: 15, math: false, bold: true, color: 'p' }),
  D.text(200, 76, 'C', { size: 15, math: false, bold: true }), D.text(280, 76, 'O', { size: 15, math: false, bold: true, color: 'r' }),
  D.line(212, 70, 268, 70, { w: 1.8 }), D.line(212, 76, 268, 76, { w: 1.8 }), D.line(212, 82, 268, 82, { w: 1.8 }),
  D.arrow(185, 70, 96, 70, { color: 'b', w: 2 }), lab(140, 58, 'σ donation', 'b', 10, { bold: true }), lab(140, 46, 'lone pair on C → empty M orbital', 'b', 9),
  D.path('M92,88 C130,125 175,120 196,92', { color: 'o', w: 2 }), D.arrow(190, 100, 197, 91, { color: 'o', head: 8 }),
  D.text(140, 132, 'π back-donation: filled M d → empty π* of CO', { size: 9, math: false, color: 'o', bold: true, raw: true }),
  lab(360, 50, 'M–C bond strengthened', 'g', 10, { anchor: 'start' }), lab(360, 66, '(partial double bond)', 'g', 9, { anchor: 'start' }), lab(360, 92, 'C–O bond weakened', 'r', 10, { anchor: 'start' }), D.text(360, 108, '(π* partly filled)', { size: 9, math: false, color: 'r', anchor: 'start', raw: true })
], 'Synergic bonding in metal carbonyls');

// ---------- chapter text ----------
JEE.book('chemistry', 'coordination-compounds', {
  intro: [
    R`Coordination compounds contain a central metal atom or ion bonded to a set of molecules or ions (ligands) by coordinate bonds. They are everywhere: haemoglobin (iron), chlorophyll (magnesium), vitamin B₁₂ (cobalt), and the catalysts and dyes of industry.`,
    R`This chapter introduces Werner's theory, the language and naming of complexes, the many kinds of isomerism, and the two bonding models used in JEE: valence bond theory and crystal field theory, which explain shape, colour and magnetism. It ends with stability, metal carbonyls and applications.`
  ],
  sections: [
    { h: R`Double salts and Werner's theory`, t: [0], blocks: [
      R`When two salts crystallise together, they may form a <b>double salt</b> or a <b>complex</b>. A double salt (carnallite KCl·MgCl₂·6H₂O, Mohr's salt FeSO₄·(NH₄)₂SO₄·6H₂O, potash alum) dissociates completely into simple ions in water. A complex keeps its identity: K₄[Fe(CN)₆] gives [Fe(CN)₆]⁴⁻ ions, not Fe²⁺ and CN⁻.`,
      R`In 1898 Alfred Werner explained the complexes of cobalt(III) chloride with ammonia. With AgNO₃ they precipitated different numbers of Cl⁻ per formula:`,
      { table: { head: [R`Formula`, R`Colour`, R`Moles of AgCl per mole`, R`Werner formula`], rows: [
        [R`CoCl₃·6NH₃`, R`yellow`, R`3`, R`[Co(NH₃)₆]Cl₃`],
        [R`CoCl₃·5NH₃`, R`purple`, R`2`, R`[CoCl(NH₃)₅]Cl₂`],
        [R`CoCl₃·4NH₃`, R`green`, R`1`, R`trans-[CoCl₂(NH₃)₄]Cl`],
        [R`CoCl₃·4NH₃`, R`violet`, R`1`, R`cis-[CoCl₂(NH₃)₄]Cl`]] } },
      R`<b>Werner's postulates:</b> (1) metals show two kinds of valency: <b>primary</b> (ionisable, satisfied by negative ions; equal to the oxidation state) and <b>secondary</b> (non-ionisable, satisfied by neutral molecules or negative ions; equal to the coordination number). (2) Each metal has a fixed secondary valency. (3) The groups satisfying the secondary valency are arranged in definite directions in space (geometry): octahedral, tetrahedral or square planar. The last two cobalt complexes have the same formula but different colours: they are <b>isomers</b>.`,
      { fig: figWerner, cap: R`Werner's picture of [Co(NH₃)₆]Cl₃: six NH₃ in the coordination sphere, three ionisable Cl⁻ outside.` },
      { ex: { q: R`0.01 mol of CoCl₃·5NH₃ is treated with excess AgNO₃. What mass of AgCl precipitates?`,
        steps: [R`[CoCl(NH₃)₅]Cl₂ has 2 ionisable Cl⁻: 0.02 mol AgCl.`, R`0.02 × 143.5 = 2.87 g.`], ans: R`2.87 g` } },
      { check: { q: R`How does a double salt differ from a complex in solution?`, ans: R`A double salt dissociates fully into simple ions; a complex ion keeps its identity.` } }
    ] },

    { h: R`Coordination entity, ligands and coordination sphere`, t: [1], blocks: [
      { points: [
        R`<b>Coordination entity:</b> a central metal atom or ion bonded to a fixed number of ions or molecules, e.g. [CoCl₃(NH₃)₃], [Ni(CO)₄], [Fe(CN)₆]⁴⁻.`,
        R`<b>Central atom/ion:</b> the atom to which the ligands are bonded; it is a Lewis acid (Ni²⁺ in [NiCl₂(H₂O)₄]).`,
        R`<b>Ligands:</b> ions or molecules bound to the central atom; they are Lewis bases donating at least one lone pair (Cl⁻, H₂O, NH₃, CN⁻, CO).`,
        R`<b>Coordination sphere:</b> the central atom and its ligands, written in square brackets. Ions outside the brackets are <b>counter ions</b> (K⁺ in K₄[Fe(CN)₆]).`,
        R`<b>Coordination polyhedron:</b> the spatial arrangement of the ligand atoms around the centre: octahedral [Co(NH₃)₆]³⁺, square planar [Ni(CN)₄]²⁻, tetrahedral [Ni(CO)₄].`
      ] },
      { check: { q: R`In K₃[Fe(CN)₆], identify the central ion, the ligand and the counter ion.`, ans: R`Fe³⁺ central ion, CN⁻ ligand, K⁺ counter ion.` } }
    ] },

    { h: R`Coordination number, denticity, chelation and ambidentate ligands`, t: [1], blocks: [
      R`The <b>coordination number</b> (CN) is the number of ligand donor atoms directly bonded to the metal (only σ bonds are counted). In [PtCl₆]²⁻ it is 6; in [Fe(C₂O₄)₃]³⁻ it is also 6 (three bidentate oxalates).`,
      R`<b>Denticity</b> is the number of donor atoms in one ligand: <b>unidentate</b> (Cl⁻, H₂O, NH₃), <b>bidentate</b> (ethane-1,2-diamine "en", H₂NCH₂CH₂NH₂; oxalate C₂O₄²⁻), <b>polydentate</b> (EDTA⁴⁻ is <b>hexadentate</b>: 2 N and 4 O donors).`,
      R`A di- or polydentate ligand that binds through two or more atoms at once forms a ring with the metal; it is a <b>chelating ligand</b>, and the complex a <b>chelate</b>. Chelates are more stable than similar complexes of unidentate ligands (the chelate effect). <b>Ambidentate</b> ligands have two different donor atoms but bind through only one at a time.`,
      { fig: figChelate, cap: R`Chelating ligands make rings; ambidentate ligands give linkage isomers.` },
      { check: { q: R`What is the coordination number of Co in [Co(en)₃]³⁺?`, ans: R`6 (three bidentate en ligands).` } }
    ] },

    { h: R`Oxidation number; homoleptic and heteroleptic complexes`, t: [1], blocks: [
      R`The <b>oxidation number</b> of the central atom is the charge it would carry if all ligands were removed with the electron pairs they share. It is written in Roman numerals in the name: in [Cu(CN)₄]³⁻, x + 4(−1) = −3, so Cu is +1.`,
      { ex: { q: R`Find the oxidation number of the metal in (a) K₃[Fe(C₂O₄)₃] (b) [Ni(CO)₄] (c) [Co(NH₃)₅Cl]Cl₂.`,
        steps: [R`(a) 3 + x + 3(−2) = 0 → x = +3.`, R`(b) CO is neutral → x = 0.`, R`(c) complex ion is [Co(NH₃)₅Cl]²⁺: x + 0 − 1 = +2 → x = +3.`], ans: R`+3, 0, +3` } },
      R`Complexes with only one kind of ligand are <b>homoleptic</b> ([Co(NH₃)₆]³⁺); those with more than one kind are <b>heteroleptic</b> ([Co(NH₃)₄Cl₂]⁺).`,
      { check: { q: R`Is [PtCl₂(NH₃)₂] homoleptic or heteroleptic?`, ans: R`Heteroleptic (two kinds of ligand).` } }
    ] },

    { h: R`IUPAC nomenclature`, t: [2], blocks: [
      { h3: R`Writing formulas` },
      { points: [R`The central atom is written first, then ligands in alphabetical order (regardless of charge).`, R`Polydentate ligand abbreviations go in alphabetical order too; formulas of polyatomic ligands are enclosed in brackets.`, R`The whole coordination entity is enclosed in square brackets; its charge is written outside as a superscript.`] },
      { h3: R`Writing names` },
      { points: [R`The cation is named first, then the anion (as in simple salts).`, R`Ligands are named in alphabetical order before the metal. Anionic ligands end in -o (chlorido, cyanido, hydroxido, oxido, nitrito-N for NO₂⁻, sulfato, oxalato). Neutral ligands keep their names except aqua (H₂O), ammine (NH₃), carbonyl (CO), nitrosyl (NO). Cationic ligands end in -ium.`, R`Prefixes di-, tri-, tetra- give the number of simple ligands; bis-, tris-, tetrakis- are used when the ligand name already has a numerical prefix (bis(ethane-1,2-diamine)). Prefixes are ignored in alphabetical order.`, R`The oxidation state of the metal follows in Roman numerals in parentheses.`, R`If the complex is an anion, the metal name ends in -ate (cobaltate, ferrate, cuprate, argentate, aurate, stannate, plumbate). Neutral complexes are written as one word.`] },
      { table: { head: [R`Formula`, R`IUPAC name`], rows: [
        [R`[Cr(NH₃)₃(H₂O)₃]Cl₃`, R`triamminetriaquachromium(III) chloride`],
        [R`[Co(H₂NCH₂CH₂NH₂)₃]₂(SO₄)₃`, R`tris(ethane-1,2-diamine)cobalt(III) sulfate`],
        [R`[Ag(NH₃)₂][Ag(CN)₂]`, R`diamminesilver(I) dicyanidoargentate(I)`],
        [R`K₄[Fe(CN)₆]`, R`potassium hexacyanidoferrate(II)`],
        [R`[Pt(NH₃)₂Cl(NO₂)]`, R`diamminechloridonitrito-N-platinum(II)`],
        [R`K₃[Fe(C₂O₄)₃]`, R`potassium trioxalatoferrate(III)`],
        [R`[CoCl₂(en)₂]Cl`, R`dichloridobis(ethane-1,2-diamine)cobalt(III) chloride`]] } },
      { tip: R`Alphabetical order uses the ligand's name, not its prefix: in "triamminetriaquachromium", "ammine" (a) comes before "aqua" (a-q) because m comes before q.` },
      { check: { q: R`Write the IUPAC name of [Co(NH₃)₅Cl]Cl₂.`, ans: R`Pentaamminechloridocobalt(III) chloride.` } }
    ] },

    { h: R`Structural isomerism`, t: [3], blocks: [
      R`<b>Isomers</b> have the same formula but different arrangements of atoms. In <b>structural isomers</b> the bonds are different:`,
      { points: [
        R`<b>Linkage isomerism:</b> an ambidentate ligand binds through different atoms: [Co(NH₃)₅(NO₂)]Cl₂ (nitrito-N, yellow) and [Co(NH₃)₅(ONO)]Cl₂ (nitrito-O, red).`,
        R`<b>Coordination isomerism:</b> ligands are exchanged between the cationic and anionic entities of a salt: [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆].`,
        R`<b>Ionisation isomerism:</b> a counter ion and a ligand swap places, so the compounds give different ions in solution: [Co(NH₃)₅(SO₄)]Br (gives Br⁻, precipitate with AgNO₃) and [Co(NH₃)₅Br]SO₄ (gives SO₄²⁻, precipitate with BaCl₂).`,
        R`<b>Solvate (hydrate) isomerism:</b> water is a ligand in one isomer and water of crystallisation in another: [Cr(H₂O)₆]Cl₃ (violet), [Cr(H₂O)₅Cl]Cl₂·H₂O (grey-green), [Cr(H₂O)₄Cl₂]Cl·2H₂O (dark green).`
      ] },
      { check: { q: R`What type of isomerism is shown by [Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄?`, ans: R`Ionisation isomerism.` } }
    ] },

    { h: R`Geometrical isomerism`, t: [3], blocks: [
      R`<b>Stereoisomers</b> have the same bonds but different arrangements in space. <b>Geometrical (cis–trans) isomers</b> arise in heteroleptic complexes because ligands can occupy adjacent (<b>cis</b>, 90°) or opposite (<b>trans</b>, 180°) positions.`,
      { fig: figCisTrans, cap: R`Square planar [MX₂L₂] and octahedral [MX₂L₄] each have cis and trans forms.` },
      R`Square planar [MABXL] type complexes have three geometrical isomers. Tetrahedral complexes do not show geometrical isomerism (all positions are adjacent). Octahedral [MA₃B₃] complexes show <b>facial (fac)</b> and <b>meridional (mer)</b> isomers:`,
      { fig: figFacMer, cap: R`fac- and mer-[Co(NH₃)₃(NO₂)₃]. In fac the three NO₂ are mutually cis; in mer two of them are trans.` },
      { table: { head: [R`Type`, R`Geometrical isomers`], rows: [[R`MA₂B₂ (square planar)`, R`2 (cis, trans)`], [R`MA₄B₂ (octahedral)`, R`2 (cis, trans)`], [R`MA₃B₃ (octahedral)`, R`2 (fac, mer)`], [R`M(AA)₂B₂ (octahedral)`, R`2 (cis, trans); cis is chiral`], [R`MA₄ or MA₂B₂ (tetrahedral)`, R`none`]] } },
      { check: { q: R`Why don't tetrahedral complexes show geometrical isomerism?`, ans: R`All four positions are adjacent to each other, so no cis/trans distinction is possible.` } }
    ] },

    { h: R`Optical isomerism`, t: [3], blocks: [
      R`<b>Optical isomers</b> (enantiomers) are non-superimposable mirror images. They rotate plane-polarised light in opposite directions: dextro (d, +) and laevo (l, −). It is common in octahedral complexes containing bidentate ligands.`,
      { fig: figOptical, cap: R`cis-[CoCl₂(en)₂]⁺ and its mirror image cannot be superimposed: they are enantiomers. The trans isomer has a mirror plane and is optically inactive.` },
      { points: [R`[Co(en)₃]³⁺ exists as d and l forms.`, R`cis-[PtCl₂(en)₂]²⁺ is optically active; trans is not.`, R`Square planar complexes are rarely optically active (the plane is a mirror plane), unless the ligands themselves are chiral.`] },
      { ex: { q: R`How many stereoisomers does [CoCl₂(en)₂]⁺ have?`,
        steps: [R`Geometrical: cis and trans.`, R`trans is symmetric (optically inactive); cis is chiral, giving d and l forms.`], ans: R`3 (trans, d-cis, l-cis)` } },
      { check: { q: R`Which isomer of [CoCl₂(en)₂]⁺ is optically active?`, ans: R`The cis isomer.` } }
    ] },

    { h: R`Valence bond theory: hybridisation and geometry`, t: [4], blocks: [
      R`In VBT, the metal uses <b>hybridised orbitals</b> (s, p and d) to accept the lone pairs of the ligands. The number and type of hybrid orbitals fixes the geometry:`,
      { table: { head: [R`CN`, R`Hybridisation`, R`Geometry`, R`Example`], rows: [
        [R`2`, R`sp`, R`linear`, R`[Ag(NH₃)₂]⁺`], [R`4`, R`sp³`, R`tetrahedral`, R`[NiCl₄]²⁻, [Ni(CO)₄]`], [R`4`, R`dsp²`, R`square planar`, R`[Ni(CN)₄]²⁻, [PtCl₄]²⁻`], [R`5`, R`sp³d`, R`trigonal bipyramidal`, R`[Fe(CO)₅]`], [R`6`, R`d²sp³`, R`octahedral (inner)`, R`[Co(NH₃)₆]³⁺`], [R`6`, R`sp³d²`, R`octahedral (outer)`, R`[CoF₆]³⁻`]] } },
      { fig: figVB4, cap: R`Ni²⁺ (3d⁸): CN⁻ forces the two unpaired electrons to pair, freeing one 3d orbital for dsp²; Cl⁻ does not, so sp³ is used.` },
      { check: { q: R`What is the hybridisation and shape of [Ni(CN)₄]²⁻?`, ans: R`dsp², square planar (diamagnetic).` } }
    ] },

    { h: R`Inner- and outer-orbital complexes; magnetic properties`, t: [4], blocks: [
      R`For octahedral complexes, if the inner (n−1)d orbitals are used (d²sp³) the complex is an <b>inner-orbital</b> or low-spin complex; if the outer nd orbitals are used (sp³d²) it is an <b>outer-orbital</b> or high-spin complex. Strong ligands (CN⁻, CO, NH₃ with Co³⁺) cause pairing; weak ligands (F⁻, H₂O usually) do not.`,
      { fig: figVB6, cap: R`Co³⁺ (3d⁶): NH₃ gives an inner-orbital, diamagnetic complex; F⁻ gives an outer-orbital, paramagnetic complex.` },
      R`The number of unpaired electrons, measured from the magnetic moment (μ = √(n(n+2)) BM), tells us which orbitals are used. [Fe(CN)₆]³⁻ (1 unpaired, 1.73 BM) is inner orbital d²sp³; [FeF₆]³⁻ (5 unpaired, 5.92 BM) is outer orbital sp³d².`,
      { ex: { q: R`[Mn(CN)₆]³⁻ has a magnetic moment of about 2.8 BM. Find the number of unpaired electrons and the hybridisation.`,
        steps: [R`√(n(n+2)) ≈ 2.83 → n = 2.`, R`Mn³⁺ is 3d⁴; with 2 unpaired, all four are in three d orbitals (one pair, two single), leaving two 3d orbitals empty.`, R`So d²sp³, inner-orbital octahedral.`], ans: R`2 unpaired; d²sp³` } },
      { check: { q: R`Is [CoF₆]³⁻ inner- or outer-orbital?`, ans: R`Outer-orbital (sp³d²), high spin, paramagnetic.` } }
    ] },

    { h: R`Limitations of valence bond theory`, t: [4], blocks: [
      { points: [R`It involves many assumptions about which orbitals are used.`, R`It gives no quantitative interpretation of magnetic data (it cannot explain orbital contributions or temperature dependence).`, R`It does not explain the <b>colour</b> of complexes.`, R`It cannot distinguish weak and strong ligands, or predict whether a 4-coordinate complex is tetrahedral or square planar.`, R`It does not give quantitative interpretation of thermodynamic or kinetic stability.`] },
      { check: { q: R`State one property of complexes that VBT cannot explain.`, ans: R`Their colour (also the weak/strong-field distinction).` } }
    ] },

    { h: R`Crystal field theory: splitting in octahedral and tetrahedral fields`, t: [5], blocks: [
      R`<b>Crystal field theory</b> treats the metal–ligand bond as purely <b>electrostatic</b>: ligands are point charges (anions) or point dipoles (neutral molecules). In a free ion the five d orbitals are degenerate. In a spherical field of negative charge they all rise equally, but in the field of real ligands they <b>split</b>, because some d orbitals point at the ligands and some between them.`,
      R`<b>Octahedral field:</b> ligands approach along the x, y and z axes. The d<sub>x²−y²</sub> and d<sub>z²</sub> orbitals (the <b>e<sub>g</sub></b> set) point at the ligands and are raised in energy; d<sub>xy</sub>, d<sub>yz</sub>, d<sub>xz</sub> (the <b>t<sub>2g</sub></b> set) point between them and are lowered. The energy gap is the <b>crystal field splitting energy, Δ₀</b>. The barycentre is preserved: e<sub>g</sub> at +0.6Δ₀ and t<sub>2g</sub> at −0.4Δ₀.`,
      R`<b>Tetrahedral field:</b> the four ligands lie between the axes, so the splitting is <b>reversed</b> (e lower, t₂ higher) and much smaller: Δt ≈ (4/9)Δ₀. Pairing is almost never favoured, so tetrahedral complexes are high spin.`,
      { fig: figSplit, cap: R`Splitting of the d orbitals in octahedral and tetrahedral crystal fields.` },
      { check: { q: R`Which d orbitals form the e<sub>g</sub> set in an octahedral field?`, ans: R`d<sub>x²−y²</sub> and d<sub>z²</sub> (they point directly at the ligands).` } }
    ] },

    { h: R`Spectrochemical series; strong- and weak-field ligands`, t: [5], blocks: [
      R`The size of Δ₀ depends on the ligand (and on the metal and its charge). Arranging ligands by the splitting they produce gives the experimentally determined <b>spectrochemical series</b>:`,
      R`I⁻ < Br⁻ < SCN⁻ < Cl⁻ < S²⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO`,
      R`Ligands at the left (halides) give small Δ₀: <b>weak-field ligands</b>. Those at the right (CN⁻, CO) give large Δ₀: <b>strong-field ligands</b>. For a given ligand, Δ₀ increases with the charge of the metal ion (M³⁺ > M²⁺) and down a group (4d, 5d > 3d), so 4d and 5d complexes are almost always low spin.`,
      { mistake: R`Assuming the most electronegative or most charged ligand gives the biggest splitting. F⁻ is a weak-field ligand while neutral CO is the strongest; the order comes from experiment (and π-bonding), not simple electrostatics.` },
      { check: { q: R`Which gives the larger Δ₀ with Co³⁺: H₂O or NH₃?`, ans: R`NH₃ (it lies to the right of H₂O in the spectrochemical series).` } }
    ] },

    { h: R`Crystal field stabilisation energy; high-spin and low-spin complexes`, t: [5], blocks: [
      R`Electrons fill the t<sub>2g</sub> orbitals first. For d¹–d³ there is only one arrangement. For <b>d⁴–d⁷</b> in octahedral complexes there are two choices for the next electron: enter e<sub>g</sub> (costs Δ₀) or pair up in t<sub>2g</sub> (costs the <b>pairing energy P</b>).`,
      { points: [R`If Δ₀ < P (weak field): the electron enters e<sub>g</sub> → <b>high-spin</b> complex, maximum unpaired electrons (t<sub>2g</sub>³e<sub>g</sub>¹ for d⁴).`, R`If Δ₀ > P (strong field): pairing in t<sub>2g</sub> → <b>low-spin</b> complex (t<sub>2g</sub>⁴e<sub>g</sub>⁰ for d⁴).`] },
      { fig: figSpin, cap: R`Co³⁺ (d⁶): the weak F⁻ field gives high spin; the strong NH₃ field gives low spin.` },
      { derive: R`Crystal field stabilisation energy (CFSE)`, steps: [R`\[\text{CFSE} = (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\,\Delta_0 \;(+\;\text{pairing energy for extra pairs})\]`, R`For a tetrahedral complex: \(\text{CFSE} = (-0.6\,n_e + 0.4\,n_{t_2})\,\Delta_t\).`] },
      { ex: { q: R`Calculate the CFSE (in units of Δ₀) of (a) low-spin d⁶ and (b) high-spin d⁶ octahedral complexes, ignoring pairing energy.`,
        steps: [R`(a) t<sub>2g</sub>⁶: 6 × (−0.4) = −2.4Δ₀.`, R`(b) t<sub>2g</sub>⁴e<sub>g</sub>²: 4(−0.4) + 2(0.6) = −0.4Δ₀.`], ans: R`−2.4Δ₀; −0.4Δ₀` } },
      { table: { head: [R`d<sup>n</sup>`, R`High spin (weak field)`, R`Unpaired`, R`Low spin (strong field)`, R`Unpaired`], rows: [
        [R`d⁴`, R`t<sub>2g</sub>³e<sub>g</sub>¹`, R`4`, R`t<sub>2g</sub>⁴`, R`2`], [R`d⁵`, R`t<sub>2g</sub>³e<sub>g</sub>²`, R`5`, R`t<sub>2g</sub>⁵`, R`1`], [R`d⁶`, R`t<sub>2g</sub>⁴e<sub>g</sub>²`, R`4`, R`t<sub>2g</sub>⁶`, R`0`], [R`d⁷`, R`t<sub>2g</sub>⁵e<sub>g</sub>²`, R`3`, R`t<sub>2g</sub>⁶e<sub>g</sub>¹`, R`1`]] } },
      { check: { q: R`How many unpaired electrons does [Fe(CN)₆]⁴⁻ have?`, ans: R`None: Fe²⁺ is d⁶ and CN⁻ is strong-field, giving t<sub>2g</sub>⁶.` } }
    ] },

    { h: R`Colour and magnetic properties of complexes`, t: [5], blocks: [
      R`CFT explains colour: when white light falls on a complex, an electron is excited from t<sub>2g</sub> to e<sub>g</sub> by absorbing light of energy Δ₀. The complex shows the <b>complementary colour</b>. [Ti(H₂O)₆]³⁺ (d¹) absorbs green-yellow light (λ<sub>max</sub> ≈ 498 nm) and appears <b>purple</b>.`,
      { ex: { q: R`[Ti(H₂O)₆]³⁺ absorbs most strongly at 498 nm. Find Δ₀ in kJ/mol.`,
        steps: [R`E per photon = hc/λ = (6.626 × 10⁻³⁴ × 2.998 × 10⁸)/(498 × 10⁻⁹) = 3.99 × 10⁻¹⁹ J.`, R`× N<sub>A</sub>: 3.99 × 10⁻¹⁹ × 6.022 × 10²³ = 2.40 × 10⁵ J/mol.`], ans: R`≈ 240 kJ/mol` } },
      R`Changing ligands changes Δ₀ and hence the colour: [Ni(H₂O)₆]²⁺ is green, [Ni(NH₃)₆]²⁺ blue-violet, [Ni(en)₃]²⁺ violet (absorbing at shorter wavelengths as Δ₀ rises). Anhydrous CuSO₄ is white (no ligand field from water), CuSO₄·5H₂O is blue. Complexes of d⁰ and d¹⁰ ions are colourless (no d–d transitions).`,
      R`Magnetic properties follow from the number of unpaired electrons in the CFT configuration: [Fe(H₂O)₆]³⁺ (high spin d⁵) 5.92 BM; [Fe(CN)₆]³⁻ (low spin d⁵) 1.73 BM; [Ni(CN)₄]²⁻ diamagnetic.`,
      { check: { q: R`Why is [Sc(H₂O)₆]³⁺ colourless?`, ans: R`Sc³⁺ is d⁰: there are no d electrons to undergo a d–d transition.` } }
    ] },

    { h: R`Stability of complexes and the chelate effect`, t: [1], blocks: [
      R`The stability of a complex in solution is measured by its <b>stability (formation) constant</b>. For stepwise formation M + L ⇌ ML (K₁), ML + L ⇌ ML₂ (K₂) … the overall constant is βₙ = K₁K₂…Kₙ. For [Cu(NH₃)₄]²⁺, β₄ = 2.1 × 10¹³. A larger β means a more stable complex; the reciprocal is the instability constant.`,
      { points: [R`Stability increases with the charge and decreases with the size of the metal ion (Fe³⁺ forms more stable complexes than Fe²⁺).`, R`More basic ligands, and strong-field ligands, form more stable complexes.`, R`<b>Chelate effect:</b> chelating ligands form much more stable complexes than an equal number of similar unidentate ligands, e.g. [Ni(en)₃]²⁺ is far more stable than [Ni(NH₃)₆]²⁺. Replacing six NH₃ by three en increases the number of free particles, so the entropy increases (ΔS > 0) and ΔG becomes more negative. Five- and six-membered chelate rings are the most stable.`] },
      { adv: R`Successive stepwise constants usually decrease (K₁ > K₂ > K₃ …), because there are fewer sites available for each new ligand and statistical and steric factors work against it.` },
      { check: { q: R`Why is [Ni(en)₃]²⁺ more stable than [Ni(NH₃)₆]²⁺?`, ans: R`Chelate effect: chelation increases the entropy of the system (more free molecules released), making ΔG more negative.` } }
    ] },

    { h: R`Metal carbonyls: structure and bonding`, t: [4], blocks: [
      R`<b>Metal carbonyls</b> are homoleptic complexes of CO with metals in low oxidation states (often 0): Ni(CO)₄ is tetrahedral, Fe(CO)₅ trigonal bipyramidal, Cr(CO)₆ octahedral. Mn₂(CO)₁₀ has two square pyramidal Mn(CO)₅ units joined by an Mn–Mn bond; Co₂(CO)₈ has a Co–Co bond and two bridging CO groups.`,
      R`The metal–carbon bond has both σ and π character (<b>synergic bonding</b>): CO donates its carbon lone pair into an empty metal orbital (σ bond), and the metal donates electrons from a filled d orbital back into the empty π* antibonding orbital of CO (π back-bond). Each strengthens the other.`,
      { fig: figCO, cap: R`Synergic bonding: σ donation from CO and π back-donation from the metal.` },
      R`Back-bonding strengthens the M–C bond and weakens the C≡O bond: the C–O stretching frequency in carbonyls is lower than in free CO (2143 cm⁻¹), and the more electron-rich the metal, the lower it goes. Many stable carbonyls follow the <b>18-electron (effective atomic number) rule</b>: Fe(CO)₅ has 26 + 10 = 36 electrons (Kr configuration), Ni(CO)₄ 28 + 8 = 36.`,
      { check: { q: R`Why is the C–O bond in a metal carbonyl weaker than in free CO?`, ans: R`π back-donation from the metal puts electrons into the antibonding π* orbital of CO.` } }
    ] },

    { h: R`Importance and applications of coordination compounds`, t: [6], blocks: [
      { points: [
        R`<b>Qualitative analysis:</b> detecting ions by complex formation, e.g. Ni²⁺ with dimethylglyoxime (red precipitate), Fe³⁺ with SCN⁻ (blood red), Cu²⁺ with NH₃ (deep blue). Hardness of water is estimated by titration with EDTA (Ca²⁺ and Mg²⁺ form stable complexes).`,
        R`<b>Metallurgy:</b> extraction of silver and gold by the cyanide process ([Ag(CN)₂]⁻, [Au(CN)₂]⁻); purification of nickel by the Mond process (Ni(CO)₄).`,
        R`<b>Biological systems:</b> chlorophyll (Mg), haemoglobin (Fe), vitamin B₁₂ (cyanocobalamin, Co), and many metalloenzymes.`,
        R`<b>Catalysis:</b> Wilkinson's catalyst [(Ph₃P)₃RhCl] for hydrogenation of alkenes; Ziegler–Natta catalysts.`,
        R`<b>Medicine:</b> cisplatin, cis-[PtCl₂(NH₃)₂], is used against cancer; EDTA treats lead poisoning; chelating agents remove excess copper and iron.`,
        R`<b>Photography and electroplating:</b> hypo dissolves undecomposed AgBr as [Ag(S₂O₃)₂]³⁻; smooth gold and silver plating uses [Au(CN)₂]⁻ and [Ag(CN)₂]⁻ baths.`
      ] },
      { check: { q: R`Which complex is used to treat some cancers?`, ans: R`Cisplatin, cis-[PtCl₂(NH₃)₂].` } }
    ] }
  ],
  summary: [
    R`Werner: primary valency (ionisable, oxidation state) and secondary valency (coordination number, directional).`,
    R`Terms: ligand (Lewis base), coordination sphere, CN, denticity, chelate, ambidentate (NO₂⁻/ONO⁻, SCN⁻/NCS⁻), homoleptic/heteroleptic.`,
    R`IUPAC: cation first; ligands alphabetical; -ido for anions; aqua, ammine, carbonyl, nitrosyl; -ate for anionic complexes; oxidation state in Roman numerals.`,
    R`Isomerism: structural (linkage, coordination, ionisation, solvate) and stereo (cis–trans, fac–mer, optical: cis-[M(AA)₂B₂], [M(AA)₃]).`,
    R`VBT: sp³ tetrahedral, dsp² square planar, d²sp³ inner and sp³d² outer octahedral; μ = √(n(n+2)) BM. Cannot explain colour.`,
    R`CFT: octahedral t<sub>2g</sub> (−0.4Δ₀) and e<sub>g</sub> (+0.6Δ₀); tetrahedral reversed, Δt = 4/9 Δ₀. Spectrochemical series I⁻ < … < CN⁻ < CO. High spin if Δ₀ < P.`,
    R`Colour = complementary to light absorbed in d–d transitions. Stability: βₙ; chelate effect (entropy).`,
    R`Carbonyls: synergic σ donation + π back-bonding; 18-electron rule. Applications: analysis, metallurgy, biology, catalysis, medicine.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §19.2 Coordination Chemistry of Transition Metals`, url: 'https://openstax.org/books/chemistry-2e/pages/19-2-coordination-chemistry-of-transition-metals' },
    { t: R`OpenStax Chemistry 2e, §19.3 Spectroscopic and Magnetic Properties of Coordination Compounds`, url: 'https://openstax.org/books/chemistry-2e/pages/19-3-spectroscopic-and-magnetic-properties-of-coordination-compounds' },
    { t: R`Wikipedia: Crystal field theory`, url: 'https://en.wikipedia.org/wiki/Crystal_field_theory' },
    { t: R`Wikipedia: Spectrochemical series`, url: 'https://en.wikipedia.org/wiki/Spectrochemical_series' },
    { t: R`Wikipedia: Chelation`, url: 'https://en.wikipedia.org/wiki/Chelation' },
    { t: R`Wikipedia: Metal carbonyl`, url: 'https://en.wikipedia.org/wiki/Metal_carbonyl' }
  ]
});
})();
