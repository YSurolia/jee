// Book chapter: The Solid State. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers: a cube drawn in oblique projection ----------
function P(x, y, s, d, u, v, w) { return [x + u * s + w * d, y + (1 - v) * s - w * d]; } // u,v,w in [0,1]
function cube(x, y0, s, d, atoms, lab) {
  var y = y0 + d, p = [], c = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], e = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  e.forEach(function (k) { var a = P(x, y, s, d, c[k[0]][0], c[k[0]][1], c[k[0]][2]), b = P(x, y, s, d, c[k[1]][0], c[k[1]][1], c[k[1]][2]); p.push(D.line(a[0], a[1], b[0], b[1], { color: 'm', w: 1.1, dash: (k[0] >= 4 && k[1] >= 4) || k[0] === 3 && k[1] === 7 ? null : null })); });
  atoms.sort(function (a, b) { return b[2] - a[2]; }).forEach(function (t) { var q = P(x, y, s, d, t[0], t[1], t[2]); p.push(D.circle(q[0], q[1], t[3] || 8, { color: t[4] || 'b', fill: 'soft', w: 1.4 })); });
  return D.svg(x * 2 + s + d, y + s + 20, p, lab);
}
var CORN = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]];
function atomsOf(kind) {
  var a = CORN.map(function (q) { return q.concat([8, 'b']); });
  if (kind === 'bcc') a.push([0.5, 0.5, 0.5, 9, 'r']);
  if (kind === 'fcc') [[0.5, 0.5, 0], [0.5, 0.5, 1], [0.5, 0, 0.5], [0.5, 1, 0.5], [0, 0.5, 0.5], [1, 0.5, 0.5]].forEach(function (q) { a.push(q.concat([8, 'o'])); });
  return a;
}

// ---------- figures ----------
var figCells = D.row([[cube(25, 10, 100, 40, atomsOf('sc'), 'simple cubic'), 'simple cubic: 1 atom'], [cube(25, 10, 100, 40, atomsOf('bcc'), 'body-centred cubic'), 'bcc: 2 atoms'], [cube(25, 10, 100, 40, atomsOf('fcc'), 'face-centred cubic'), 'fcc (ccp): 4 atoms']]);

var figAmorph = D.row([
  [D.svg(180, 150, (function () { var p = []; for (var i = 0; i < 6; i++) for (var j = 0; j < 5; j++) { p.push(D.circle(25 + i * 26, 25 + j * 26, 6, { color: 'b', fill: 'soft', w: 1.2 })); if (i < 5) p.push(D.line(31 + i * 26, 25 + j * 26, 45 + i * 26, 25 + j * 26, { color: 'm', w: 1 })); if (j < 4) p.push(D.line(25 + i * 26, 31 + j * 26, 25 + i * 26, 45 + j * 26, { color: 'm', w: 1 })); } return p; })(), 'crystalline'), 'crystalline: long-range order'],
  [D.svg(180, 150, (function () { var p = [], seed = 3, pts = []; function r() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; } for (var k = 0; k < 28; k++) pts.push([20 + r() * 140, 20 + r() * 110]); pts.forEach(function (q) { p.push(D.circle(q[0], q[1], 6, { color: 'o', fill: 'soft', w: 1.2 })); }); return p; })(), 'amorphous'), 'amorphous: short-range order only']
]);

function layer(cx, cy, n, r, color, dx) { var p = []; for (var i = 0; i < n; i++) for (var j = 0; j < 3; j++) p.push(D.circle(cx + i * 2 * r + (j % 2) * r + (dx || 0), cy + j * r * 1.732, r, { color: color, fill: 'soft', w: 1.3 })); return p.join(''); }
var figPacking = D.row([
  [D.svg(200, 150, [layer(30, 40, 4, 16, 'b'), layer(30 + 16, 40 + 9.24, 3, 16, 'r').replace(/<circle/g, '<circle opacity="0.85"')], 'hcp layers'), 'ABAB… : hexagonal close packing (hcp)'],
  [D.svg(200, 150, [layer(30, 40, 4, 16, 'b'), layer(30 + 16, 40 + 9.24, 3, 16, 'r').replace(/<circle/g, '<circle opacity="0.85"'), layer(30 + 32, 40 + 18.5, 3, 12, 'g')], 'ccp layers'), 'ABCABC… : cubic close packing (ccp = fcc)']
]);

var figVoids = D.row([
  [D.svg(180, 160, [D.circle(60, 105, 32, { color: 'b', fill: 'soft', w: 1.4 }), D.circle(124, 105, 32, { color: 'b', fill: 'soft', w: 1.4 }), D.circle(92, 50, 32, { color: 'b', fill: 'soft', w: 1.4 }), D.circle(92, 87, 30, { color: 'r', fill: 'soft', w: 1.4, dash: '4 3' }).replace('soft-r', 'soft-r').replace('<circle', '<circle opacity="0.75"'), D.dot(92, 88, { color: 'k', r: 4 }), D.text(92, 150, 'atom above three: 4 spheres', { size: 10, math: false })], 'tetrahedral void'), 'tetrahedral void (4 neighbours)'],
  [D.svg(180, 160, [[[60, 50], [124, 50], [60, 114], [124, 114]].map(function (q) { return D.circle(q[0], q[1], 30, { color: 'b', fill: 'soft', w: 1.4 }); }).join(''), D.dot(92, 82, { color: 'k', r: 4 }), D.text(92, 154, '6 spheres (2 more above and below)', { size: 10, math: false })], 'octahedral void'), 'octahedral void (6 neighbours)']
]);

var figNaCl = cube(30, 10, 140, 50, (function () {
  var a = [];
  for (var i = 0; i <= 2; i++) for (var j = 0; j <= 2; j++) for (var k = 0; k <= 2; k++) {
    a.push([i / 2, j / 2, k / 2, (i + j + k) % 2 ? 6 : 10, (i + j + k) % 2 ? 'r' : 'g']);
  }
  return a;
})(), 'NaCl unit cell');

var figDefects = D.row([
  [D.svg(200, 160, (function () { var p = []; for (var i = 0; i < 5; i++) for (var j = 0; j < 4; j++) { if ((i === 1 && j === 1) || (i === 3 && j === 2)) { p.push(D.rect(25 + i * 36 - 10, 25 + j * 34 - 10, 20, 20, { color: 'm', w: 1, dash: '3 3' })); continue; } var plus = (i + j) % 2 === 0; p.push(D.circle(25 + i * 36, 25 + j * 34, plus ? 8 : 12, { color: plus ? 'r' : 'g', fill: 'soft', w: 1.2 })); } return p; })(), 'Schottky defect'), 'Schottky: a cation and an anion missing'],
  [D.svg(200, 160, (function () { var p = []; for (var i = 0; i < 5; i++) for (var j = 0; j < 4; j++) { var plus = (i + j) % 2 === 0; if (i === 2 && j === 2) { p.push(D.rect(25 + i * 36 - 10, 25 + j * 34 - 10, 20, 20, { color: 'm', w: 1, dash: '3 3' })); continue; } p.push(D.circle(25 + i * 36, 25 + j * 34, plus ? 8 : 12, { color: plus ? 'r' : 'g', fill: 'soft', w: 1.2 })); } p.push(D.circle(25 + 2.5 * 36, 25 + 1.5 * 34, 7, { color: 'r', fill: 'soft', w: 1.6 }), D.arrow(25 + 2 * 36, 25 + 2 * 34 - 8, 25 + 2.5 * 36 - 6, 25 + 1.5 * 34 + 6, { color: 'k', w: 1, head: 5 })); return p; })(), 'Frenkel defect'), 'Frenkel: a cation moved into an interstitial site']
]);

var figShare = D.row([
  [cube(25, 10, 100, 40, [[0, 0, 0, 12, 'r']], 'corner atom'), 'corner: shared by 8 cells → ⅛'],
  [cube(25, 10, 100, 40, [[0.5, 0, 0, 12, 'o']], 'edge atom'), 'edge centre: shared by 4 → ¼'],
  [cube(25, 10, 100, 40, [[0.5, 0.5, 0, 12, 'g']], 'face atom'), 'face centre: shared by 2 → ½']
]);

var figDiag = (function () {
  var s1 = 120, r1 = Math.SQRT2 * s1 / 4, x1 = 60, y1 = 50;
  var fcc = D.svg(250, 240, [D.rect(x1, y1, s1, s1, { color: 'm', w: 1.4 }),
    D.circle(x1, y1 + s1, r1, { color: 'b', fill: 'soft', w: 1.2 }), D.circle(x1 + s1, y1, r1, { color: 'b', fill: 'soft', w: 1.2 }), D.circle(x1 + s1 / 2, y1 + s1 / 2, r1, { color: 'o', fill: 'soft', w: 1.4 }),
    D.line(x1, y1 + s1, x1 + s1, y1, { color: 'r', w: 1.8 }), D.text(x1 + s1 / 2, y1 + s1 + 16, 'a', { size: 12, color: 'm' }), D.text(x1 + s1 + 8, y1 + s1 / 2 + 30, '√2 a = 4r', { size: 12, color: 'r', anchor: 'start' })], 'fcc face diagonal');
  var h = 100, w = Math.SQRT2 * h, r2 = Math.sqrt(3) * h / 4, x2 = 50, y2 = 50;
  var bcc = D.svg(260, 240, [D.rect(x2, y2, w, h, { color: 'm', w: 1.4 }),
    D.circle(x2, y2 + h, r2, { color: 'b', fill: 'soft', w: 1.2 }), D.circle(x2 + w, y2, r2, { color: 'b', fill: 'soft', w: 1.2 }), D.circle(x2 + w / 2, y2 + h / 2, r2, { color: 'r', fill: 'soft', w: 1.4 }),
    D.line(x2, y2 + h, x2 + w, y2, { color: 'r', w: 1.8, dash: '5 4' }), D.text(x2 + w / 2, y2 + h + 16, '√2 a', { size: 12, color: 'm' }), D.text(x2 - 10, y2 + h / 2 - 30, 'a', { size: 12, color: 'm', anchor: 'end' }), D.text(x2 + w / 2, 22, '√3 a = 4r', { size: 12, color: 'r' })], 'bcc body diagonal');
  return D.row([[fcc, 'fcc: a face of the cell'], [bcc, 'bcc: the plane through a body diagonal']]);
})();

// ---------- chapter text ----------
JEE.book('chemistry', 'solid-state', {
  intro: [
    R`Diamond, salt, ice, copper and glass are all solids, yet they behave very differently. The arrangement of their particles explains why: in most solids, atoms, ions or molecules are packed in regular repeating patterns called crystal lattices.`,
    R`This chapter classifies solids, describes unit cells and the seven crystal systems, close packing and packing efficiency, how to count atoms in a unit cell and find density, voids and the radius ratio rule, common ionic structures (NaCl, CsCl, ZnS) and the defects found in real crystals.`
  ],
  sections: [
    { h: R`Crystalline and amorphous solids`, t: [0], blocks: [
      R`In solids, particles are held in fixed positions by strong forces and can only vibrate. Solids have a definite shape, volume and mass, and are rigid and incompressible.`,
      { fig: figAmorph, cap: R`A crystalline solid has a regular repeating arrangement throughout (long-range order); an amorphous solid has order only over short distances.` },
      { table: { head: [R`Property`, R`Crystalline`, R`Amorphous`], rows: [
        [R`Arrangement`, R`long-range order`, R`short-range order only`], [R`Melting point`, R`sharp`, R`softens over a range`], [R`Cleavage`, R`clean, plane surfaces`, R`irregular surfaces`], [R`Heat of fusion`, R`definite`, R`not definite`],
        [R`Anisotropy`, R`anisotropic (properties differ with direction)`, R`isotropic`], [R`Examples`, R`NaCl, quartz, diamond, ice`, R`glass, rubber, plastics, quartz glass`]] } },
      R`<b>Anisotropy</b> means that a property such as electrical conductivity, refractive index or strength has different values along different directions in the crystal. Along one direction you meet the particles in one order and spacing, along another in a different order, so the property changes. In an amorphous solid the particles are jumbled in the same way in every direction, so the properties are the same whichever way you measure them (<b>isotropic</b>).`,
      { ex: { q: R`Quartz (crystalline SiO₂) and quartz glass (amorphous SiO₂) have the same formula. Which of them (a) melts sharply (b) splits into flat pieces when struck (c) has the same refractive index in every direction?`,
        steps: [R`Crystalline quartz has long-range order: sharp melting point, clean cleavage, anisotropic.`, R`Quartz glass has only short-range order: it softens over a range, breaks irregularly, and is isotropic.`], ans: R`(a) quartz (b) quartz (c) quartz glass` } },
      R`Amorphous solids are sometimes called <b>supercooled liquids</b> because they flow very slowly (old window panes are thicker at the bottom). On heating, some amorphous solids become crystalline.`,
      { check: { q: R`Why does glass not have a sharp melting point?`, ans: R`It is amorphous: its bonds are not all equivalent, so they break over a range of temperatures.` } }
    ] },

    { h: R`Classification of crystalline solids`, t: [0], blocks: [
      { table: { head: [R`Type`, R`Particles`, R`Forces`, R`Properties`, R`Examples`], rows: [
        [R`Molecular`, R`molecules`, R`London, dipole–dipole or hydrogen bonds`, R`soft, low melting, insulators`, R`I₂, CO₂ (dry ice), ice, sugar`],
        [R`Ionic`, R`ions`, R`electrostatic attraction`, R`hard, brittle, high melting; conduct when molten or dissolved`, R`NaCl, MgO, CaF₂`],
        [R`Metallic`, R`metal ions in a sea of electrons`, R`metallic bonding`, R`malleable, ductile, lustrous, good conductors`, R`Cu, Fe, Na`],
        [R`Covalent (network)`, R`atoms`, R`covalent bonds throughout`, R`very hard, very high melting, insulators (except graphite)`, R`diamond, SiO₂ (quartz), SiC, graphite`]] } },
      { points: [R`<b>Molecular solids</b> are held together only by the weak forces between molecules, so they are soft and melt low. Non-polar ones (Ar, CCl₄, I₂) use London forces; polar ones (solid HCl, SO₂) use dipole–dipole forces; ice uses hydrogen bonds and melts higher than its size suggests.`, R`<b>Ionic solids</b> have oppositely charged ions locked in place. The ions cannot move in the solid, so it does not conduct; melted or dissolved, the ions are free and it does.`, R`<b>Metallic solids</b> are kernels in a sea of free electrons, which explains their conductivity, lustre and malleability.`, R`<b>Covalent network solids</b> are giant molecules: every atom is bonded to its neighbours by covalent bonds right through the crystal, so they are the hardest and highest-melting solids.`] },
      { ex: { q: R`Classify each solid: (a) SiC (b) P₄O₁₀ (c) solid argon (d) brass (e) MgO.`,
        steps: [R`SiC is a giant 3-D network of Si–C bonds; P₄O₁₀ is made of discrete molecules; argon atoms are held by London forces; brass is an alloy of metals; MgO is made of Mg²⁺ and O²⁻ ions.`], ans: R`(a) covalent network (b) molecular (c) molecular (non-polar) (d) metallic (e) ionic` } },
      { check: { q: R`Graphite is a covalent network solid. Why does it conduct electricity?`, ans: R`Each carbon uses three electrons in bonds; the fourth is delocalised over the layers and can move.` } }
    ] },

    { h: R`Crystal lattices and unit cells`, t: [1], blocks: [
      R`A <b>crystal lattice</b> is a regular three-dimensional array of points (lattice points), each representing an identical particle or group of particles. The smallest repeating portion that generates the whole lattice is the <b>unit cell</b>, described by its edge lengths a, b, c and angles α, β, γ.`,
      { fig: figCells, cap: R`Cubic unit cells: simple (atoms only at corners), body-centred (one more at the centre) and face-centred (one more at each face centre).` },
      { points: [R`<b>Primitive (simple) unit cell:</b> lattice points only at the corners.`, R`<b>Centred unit cells:</b> extra points at the body centre (body-centred), at the centres of all faces (face-centred), or at the centres of two opposite faces (end-centred).`] },
      R`Think of a tiled floor. The pattern of the whole floor is the lattice; one tile, repeated over and over without gaps, is the unit cell. Moving the unit cell by its own edge lengths in each of the three directions reproduces the entire crystal. Each lattice point may stand for a single atom (as in copper) or for a group of atoms (as in NaCl, where each lattice point carries one Na⁺ and one Cl⁻).`,
      { check: { q: R`What is the difference between a lattice and a unit cell?`, ans: R`The lattice is the whole infinite array of points; the unit cell is the smallest repeating unit from which it is built.` } }
    ] },

    { h: R`The seven crystal systems and Bravais lattices`, t: [1], blocks: [
      R`Based on their axial lengths and angles, unit cells fall into seven <b>crystal systems</b>. Combining these with the possible centrings gives 14 <b>Bravais lattices</b>.`,
      { table: { head: [R`System`, R`Edges`, R`Angles`, R`Bravais lattices`, R`Example`], rows: [
        [R`Cubic`, R`a = b = c`, R`α = β = γ = 90°`, R`simple, bcc, fcc`, R`NaCl, Cu`], [R`Tetragonal`, R`a = b ≠ c`, R`all 90°`, R`simple, body-centred`, R`SnO₂, white tin`],
        [R`Orthorhombic`, R`a ≠ b ≠ c`, R`all 90°`, R`simple, bcc, fcc, end-centred`, R`rhombic sulphur, KNO₃`], [R`Hexagonal`, R`a = b ≠ c`, R`α = β = 90°, γ = 120°`, R`simple`, R`graphite, ZnO`],
        [R`Rhombohedral`, R`a = b = c`, R`α = β = γ ≠ 90°`, R`simple`, R`calcite, NaNO₃`], [R`Monoclinic`, R`a ≠ b ≠ c`, R`α = γ = 90°, β ≠ 90°`, R`simple, end-centred`, R`monoclinic sulphur`],
        [R`Triclinic`, R`a ≠ b ≠ c`, R`α ≠ β ≠ γ ≠ 90°`, R`simple`, R`CuSO₄·5H₂O`]] } },
      R`Read the table from the most symmetric system to the least. Cubic has all edges equal and all angles 90°. Make one edge different and you get tetragonal; make all three edges different and you get orthorhombic. Tilting angles away from 90° gives rhombohedral (edges still equal), monoclinic (one angle tilted) and triclinic (nothing equal). Hexagonal is the odd one out, with a 120° angle.`,
      { ex: { q: R`A unit cell has a = b = 0.65 nm, c = 0.47 nm and α = β = γ = 90°. Name its crystal system.`,
        steps: [R`Two equal edges and one different, with all angles 90°.`], ans: R`Tetragonal` } },
      { tip: R`The triclinic system (no equal edges, no right angles) is the least symmetric; cubic is the most symmetric. Only the cubic system has three Bravais lattices; orthorhombic has the most (four).` },
      { check: { q: R`How many Bravais lattices does the cubic system have?`, ans: R`Three: simple, body-centred and face-centred.` } }
    ] },

    { h: R`Close packing`, t: [2], blocks: [
      R`Metals and many ionic solids pack their particles (treated as hard spheres) as tightly as possible.`,
      { points: [R`<b>One dimension:</b> spheres in a row, each touching two neighbours.`, R`<b>Two dimensions:</b> square packing (coordination number 4) or the denser <b>hexagonal close packing</b> of a layer (coordination number 6), with triangular gaps.`, R`<b>Three dimensions:</b> a second layer sits in the hollows of the first. The third layer can either sit exactly above the first (ABAB…) or over the hollows not used before (ABCABC…).`] },
      { fig: figPacking, cap: R`Stacking close-packed layers: ABAB… gives hcp (Mg, Zn); ABCABC… gives ccp, which is the same as fcc (Cu, Ag, Al).` },
      R`Both hcp and ccp have <b>coordination number 12</b> and fill 74% of space. <b>Body-centred cubic (bcc)</b> packing (Na, K, Fe) is less efficient: coordination number 8, 68% of space.`,
      R`<b>Why 12 neighbours?</b> In a close-packed layer each sphere touches 6 others around it. Three spheres of the layer above sit in the hollows around it, and three more of the layer below do the same. So 6 + 3 + 3 = 12 spheres touch each sphere, the largest number possible for equal spheres.`,
      { ex: { q: R`Magnesium has the hcp structure, aluminium ccp and iron (at room temperature) bcc. Which packs its atoms least efficiently, and what are the coordination numbers?`,
        steps: [R`hcp and ccp both fill 74% of space with coordination number 12.`, R`bcc fills 68% with coordination number 8.`], ans: R`Iron (bcc); 12, 12 and 8` } },
      { mistake: R`Thinking that hcp and ccp differ in how tightly they pack. Both are equally close packed (74%, coordination 12); they differ only in how the third layer is placed.` },
      { check: { q: R`What is the coordination number of an atom in ccp?`, ans: R`12.` } }
    ] },

    { h: R`Number of atoms in a unit cell`, t: [3], blocks: [
      R`An atom at a corner of a cubic cell is shared by 8 cells; on an edge, by 4; on a face, by 2; in the body, by 1. So it contributes 1/8, 1/4, 1/2 or 1 to the cell.`,
      { table: { head: [R`Cubic cell`, R`Counting`, R`Atoms per cell (Z)`], rows: [[R`Simple`, R`8 × ⅛`, R`1`], [R`Body-centred`, R`8 × ⅛ + 1`, R`2`], [R`Face-centred`, R`8 × ⅛ + 6 × ½`, R`4`]] } },
      { ex: { q: R`A compound has A atoms at the corners and B atoms at the face centres of a cubic cell. Find its formula.`,
        steps: [R`A: 8 × ⅛ = 1. B: 6 × ½ = 3.`], ans: R`AB₃` } },
      { fig: figShare, cap: R`Each cube is one unit cell. A corner atom is shared by the 8 cells that meet at that corner, an edge atom by the 4 cells around the edge, and a face atom by the 2 cells on either side of the face.` },
      { ex: { q: R`In a cubic cell, A atoms are at the corners, B at the body centre and C at the face centres. Find the formula.`,
        steps: [R`A: 8 × ⅛ = 1; B: 1; C: 6 × ½ = 3.`], ans: R`ABC₃ (the perovskite structure, like CaTiO₃)` } },
      { ex: { q: R`In the fcc compound AB₃ (A at corners, B at face centres), the B atoms on two opposite faces are removed. Find the new formula.`,
        steps: [R`A: still 1. B: 4 face centres remain, 4 × ½ = 2.`], ans: R`AB₂` } },
      { check: { q: R`How many atoms are there in an hcp unit cell (hexagonal prism)?`, ans: R`6 (12 corners × ⅙ + 2 face centres × ½ + 3 inside).` } }
    ] },

    { h: R`Edge length, atomic radius and packing efficiency`, t: [2, 3], blocks: [
      R`In each cubic cell, atoms touch along a particular line, which links the edge length a to the atomic radius r:`,
      { table: { head: [R`Cell`, R`Atoms touch along`, R`Relation`, R`Packing efficiency`], rows: [
        [R`Simple cubic`, R`the edge`, R`a = 2r`, R`π/6 ≈ 52.4%`], [R`bcc`, R`the body diagonal (√3 a)`, R`√3 a = 4r`, R`√3π/8 ≈ 68%`], [R`fcc (ccp)`, R`the face diagonal (√2 a)`, R`√2 a = 4r`, R`π/(3√2) ≈ 74%`]] } },
      { derive: R`Packing efficiency of fcc`, steps: [
        R`4 atoms per cell, volume \(4\times\frac43\pi r^3\).`,
        R`Cell volume \(a^3 = (2\sqrt2\,r)^3 = 16\sqrt2\,r^3\).`,
        R`Efficiency = \(\dfrac{16\pi r^3/3}{16\sqrt2\,r^3} = \dfrac{\pi}{3\sqrt2}\approx0.74\). The same holds for hcp.`
      ] },
      { fig: figDiag, cap: R`Where the atoms touch. In fcc the corner atoms touch the face-centre atom along a face diagonal (length √2 a, spanning 4 radii). In bcc they touch the body-centre atom along the body diagonal (length √3 a).` },
      { derive: R`Packing efficiency of simple cubic and bcc`, steps: [R`Simple cubic: 1 atom, a = 2r, so efficiency = \(\dfrac{\frac43\pi r^3}{8r^3} = \dfrac\pi6 \approx 52.4\%\).`, R`bcc: 2 atoms, \(a = \dfrac{4r}{\sqrt3}\), so \(a^3 = \dfrac{64r^3}{3\sqrt3}\) and efficiency = \(\dfrac{2\cdot\frac43\pi r^3}{64r^3/(3\sqrt3)} = \dfrac{\sqrt3\pi}{8} \approx 68\%\).`] },
      { ex: { q: R`Copper is fcc with a = 361 pm. Sodium is bcc with a = 429 pm. Find their atomic radii.`,
        steps: [R`Cu: \(r = a/(2\sqrt2) = 361/2.828\).`, R`Na: \(r = \sqrt3a/4 = 1.732\times429/4\).`], ans: R`Cu ≈ 128 pm; Na ≈ 186 pm` } },
      { ex: { q: R`Silver is fcc with atomic radius 144 pm. Find the edge length of its unit cell.`,
        steps: [R`\(a = 2\sqrt2\,r = 2.828\times144\).`], ans: R`≈ 407 pm` } },
      { ex: { q: R`Find the distance between nearest neighbours in sodium (bcc, a = 429 pm).`,
        steps: [R`Nearest neighbours are a corner atom and the body-centre atom, half the body diagonal apart: \(\dfrac{\sqrt3a}{2}\).`], ans: R`≈ 372 pm (= 2r)` } },
      { check: { q: R`Which wastes more space: bcc or simple cubic?`, ans: R`Simple cubic (52% filled vs 68%).` } }
    ] },

    { h: R`Density of a unit cell`, t: [3], blocks: [
      R`The density of a crystal equals the density of its unit cell: \[d = \frac{Z\times M}{a^3\times N_A}\] where Z = atoms (or formula units) per cell, M = molar mass, a = edge length (in cm for g/cm³), N_A = Avogadro's number.`,
      { ex: { q: R`Copper (M = 63.5 g/mol) is fcc with a = 361 pm. Find its density.`,
        steps: [R`\(a^3 = (3.61\times10^{-8}\text{ cm})^3 = 4.70\times10^{-23}\) cm³.`, R`\(d = \dfrac{4\times63.5}{4.70\times10^{-23}\times6.022\times10^{23}}\).`], ans: R`≈ 8.97 g/cm³` } },
      { ex: { q: R`A bcc metal has density 7.87 g/cm³ and a = 286.6 pm. Find its molar mass and identify it.`,
        steps: [R`\[M = \frac{d\,a^3N_A}{Z} = \frac{7.87\times(2.866\times10^{-8})^3\times6.022\times10^{23}}{2}\]`], ans: R`≈ 55.8 g/mol: iron` } },
      { ex: { q: R`Aluminium (M = 27.0 g/mol) has density 2.70 g/cm³ and a cubic cell with a = 405 pm. Is the cell simple, body-centred or face-centred?`,
        steps: [R`\[Z = \frac{d\,a^3N_A}{M} = \frac{2.70\times(4.05\times10^{-8})^3\times6.022\times10^{23}}{27.0}\]`, R`This gives Z ≈ 4.0.`], ans: R`Z = 4: face-centred cubic` } },
      R`The density formula works in four directions: given any three of d, Z, M and a, you can find the fourth. JEE often hides one of them, for example asking for Avogadro's number from X-ray data, or for the type of cell (Z = 1, 2 or 4) from a measured density.`,
      { tip: R`Convert pm to cm: 1 pm = 10⁻¹⁰ cm. Many errors in density problems come from units.` },
      { check: { q: R`If the edge length doubles with the same Z and M, what happens to the density?`, ans: R`It becomes 1/8.` } }
    ] },

    { h: R`Voids in close-packed structures`, t: [4], blocks: [
      R`Even in close packing, 26% of space is empty, in two kinds of holes (voids):`,
      { fig: figVoids, cap: R`A tetrahedral void is surrounded by 4 spheres; an octahedral void by 6.` },
      { points: [R`<b>Tetrahedral void:</b> formed where a sphere sits over three touching spheres; surrounded by 4 spheres. Number = 2N (N = number of close-packed spheres). In an fcc cell: 8, on the body diagonals.`, R`<b>Octahedral void:</b> formed between three spheres of one layer and three of the next; surrounded by 6 spheres. Number = N. In an fcc cell: 4 (one at the body centre, 12 on edge centres × ¼).`] },
      { ex: { q: R`Oxide ions form ccp; aluminium ions occupy two-thirds of the octahedral voids. Find the formula.`,
        steps: [R`N O²⁻ ions give N octahedral voids; Al³⁺ = ⅔N.`, R`Al : O = ⅔ : 1 = 2 : 3.`], ans: R`Al₂O₃` } },
      { ex: { q: R`Atoms of B form a ccp lattice and atoms of A occupy one-third of the tetrahedral voids. Find the formula.`,
        steps: [R`N atoms of B give 2N tetrahedral voids, so A = ⅓ × 2N = ⅔N.`, R`A : B = ⅔ : 1 = 2 : 3.`], ans: R`A₂B₃` } },
      { ex: { q: R`In the mineral spinel, O²⁻ ions form ccp, Mg²⁺ ions occupy one-eighth of the tetrahedral voids and Al³⁺ ions occupy half of the octahedral voids. Find its formula.`,
        steps: [R`Take 4 O²⁻ (one fcc cell): 8 tetrahedral voids and 4 octahedral voids.`, R`Mg²⁺ = 8 × ⅛ = 1; Al³⁺ = 4 × ½ = 2. Charge check: +2 + 6 = 8 = 4 × 2 ✓.`], ans: R`MgAl₂O₄` } },
      R`<b>Where are the voids in an fcc cell?</b> Each of the 8 small cubes (one-eighth of the cell) has a tetrahedral void at its centre, on a body diagonal a quarter of the way in from a corner. The octahedral voids sit at the body centre of the cell and at the midpoint of each of the 12 edges (each shared by 4 cells): 1 + 12 × ¼ = 4.`,
      { check: { q: R`In a ccp array of 100 atoms, how many tetrahedral and octahedral voids are there?`, ans: R`200 tetrahedral and 100 octahedral.` } }
    ] },

    { h: R`Coordination number and the radius ratio rule`, t: [4], blocks: [
      R`The <b>coordination number</b> is the number of nearest neighbours of a particle. In ionic crystals, it depends on the ratio of the cation and anion radii, \(r_+/r_-\): a larger cation can be surrounded by more anions without the anions touching each other.`,
      { table: { head: [R`r₊/r₋`, R`Coordination number`, R`Arrangement`, R`Example`], rows: [
        [R`0.155–0.225`, R`3`, R`triangular`, R`B₂O₃`], [R`0.225–0.414`, R`4`, R`tetrahedral`, R`ZnS`], [R`0.414–0.732`, R`6`, R`octahedral`, R`NaCl`], [R`0.732–1.0`, R`8`, R`cubic`, R`CsCl`]] } },
      { derive: R`The limit 0.414 for an octahedral site`, steps: [R`In an octahedral void, four of the six anions lie in a square around the cation. Along a diagonal of that square, two anions just touch the cation.`, R`The diagonal is 2(R + r) and the side of the square is 2R (the anions touch each other), so \(2(R + r) = \sqrt2\times2R\).`, R`\(\dfrac rR = \sqrt2 - 1 = 0.414\). A smaller cation would rattle in the hole, so the structure switches to the tetrahedral arrangement.`] },
      R`The limits come from geometry: an ion just fits a tetrahedral void when r/R = 0.225, an octahedral void when r/R = 0.414 (= √2 − 1), and a cubic site when r/R = 0.732 (= √3 − 1).`,
      { ex: { q: R`The radii of Na⁺ and Cl⁻ are 102 pm and 181 pm. Predict the coordination number and the edge length of the NaCl unit cell.`,
        steps: [R`r₊/r₋ = 102/181 = 0.56, in the octahedral range: coordination number 6.`, R`In NaCl, ions touch along the edge: a = 2(r₊ + r₋) = 2(283).`], ans: R`6; a ≈ 566 pm (measured 564 pm)` } },
      { ex: { q: R`What is the radius of the largest sphere that fits into an octahedral void of a ccp lattice of spheres of radius 100 pm? And a tetrahedral void?`,
        steps: [R`Octahedral: r = 0.414R; tetrahedral: r = 0.225R.`], ans: R`≈ 41.4 pm and ≈ 22.5 pm` } },
      { check: { q: R`What coordination number is expected for a radius ratio of 0.8?`, ans: R`8 (cubic).` } }
    ] },

    { h: R`Simple ionic structures`, t: [4], blocks: [
      { fig: figNaCl, cap: R`The NaCl (rock salt) structure: Cl⁻ ions (larger, green) form an fcc lattice (corners and face centres) and Na⁺ ions (red) occupy all the octahedral voids (edge centres and body centre).` },
      { table: { head: [R`Structure`, R`Arrangement`, R`Coordination`, R`Formula units per cell`, R`Examples`], rows: [
        [R`Rock salt (NaCl)`, R`Cl⁻ fcc; Na⁺ in all octahedral voids`, R`6 : 6`, R`4`, R`NaCl, KCl, MgO, AgCl`],
        [R`Caesium chloride (CsCl)`, R`Cl⁻ at corners; Cs⁺ at body centre`, R`8 : 8`, R`1`, R`CsCl, CsBr, TlCl`],
        [R`Zinc blende (ZnS)`, R`S²⁻ fcc; Zn²⁺ in half the tetrahedral voids`, R`4 : 4`, R`4`, R`ZnS, CuCl, AgI`],
        [R`Fluorite (CaF₂)`, R`Ca²⁺ fcc; F⁻ in all tetrahedral voids`, R`8 : 4`, R`4`, R`CaF₂, SrF₂`]] } },
      R`<b>Reading the structures.</b> In <b>rock salt</b>, the anions build an fcc cell and the smaller cations fill every octahedral hole, so each ion has 6 neighbours of the other kind and the ions touch along the cell edge: a = 2(r₊ + r₋). In <b>CsCl</b> the large Cs⁺ ion sits in a cubic hole at the body centre with 8 Cl⁻ around it, touching along the body diagonal: \(\sqrt3a = 2(r_+ + r_-)\). In <b>zinc blende</b>, the small Zn²⁺ ions fill alternate tetrahedral holes of an fcc array of S²⁻, so the Zn–S distance is a quarter of the body diagonal, \(\sqrt3a/4\).`,
      { ex: { q: R`The radii of Cs⁺ and Cl⁻ are 169 pm and 181 pm. Find the edge length of the CsCl unit cell.`,
        steps: [R`\(\sqrt3a = 2(169 + 181) = 700\) pm.`], ans: R`a ≈ 404 pm` } },
      { ex: { q: R`Zinc blende has a = 541 pm. Find the shortest Zn–S distance.`,
        steps: [R`\(d = \dfrac{\sqrt3a}{4} = \dfrac{1.732\times541}{4}\).`], ans: R`≈ 234 pm` } },
      { ex: { q: R`KCl has the rock-salt structure with a = 629 pm. Find its density (M = 74.5 g/mol).`,
        steps: [R`Z = 4: \[d = \frac{4\times74.5}{(6.29\times10^{-8})^3\times6.022\times10^{23}}\]`], ans: R`≈ 1.99 g/cm³` } },
      { check: { q: R`In CsCl, is the structure body-centred cubic?`, ans: R`No: the corner and centre particles are different ions, so it is two interpenetrating simple cubic lattices.` } }
    ] },

    { h: R`Imperfections in solids: point defects`, t: [5], blocks: [
      R`Real crystals have defects. <b>Point defects</b> are irregularities at single lattice sites.`,
      { fig: figDefects, cap: R`In a Schottky defect equal numbers of cations and anions are missing; in a Frenkel defect an ion (usually the smaller cation) leaves its site for an interstitial position.` },
      { table: { head: [R`Defect`, R`Description`, R`Effect on density`, R`Found in`], rows: [
        [R`Vacancy (non-ionic)`, R`an atom missing from its site`, R`decreases`, R`metals, on heating`], [R`Interstitial (non-ionic)`, R`an extra atom in a gap`, R`increases`, R`metals`],
        [R`Schottky`, R`equal numbers of cations and anions missing (stays neutral)`, R`decreases`, R`ionic solids with similar-sized ions: NaCl, KCl, CsCl, AgBr`],
        [R`Frenkel (dislocation)`, R`smaller ion shifts to an interstitial site`, R`unchanged`, R`ions of very different sizes: ZnS, AgCl, AgBr, AgI`]] } },
      R`AgBr shows both Schottky and Frenkel defects. Defects increase electrical conductivity in ionic solids, because ions can hop into neighbouring vacancies.`,
      R`<b>Why do defects form at all?</b> At any temperature above absolute zero, particles vibrate, and occasionally one escapes its site. Creating a vacancy costs energy but makes the arrangement more disordered (higher entropy), so a small number of defects is always favourable, and their number grows with temperature. A crystal grown very quickly also traps more defects than one grown slowly.`,
      { mistake: R`Saying that Frenkel defects are found in alkali halides like NaCl. NaCl shows Schottky defects (similar-sized ions). Frenkel defects need a much smaller cation that can squeeze into an interstitial gap, as in AgCl, AgBr and ZnS.` },
      { ex: { q: R`Which defect (a) lowers the density of a crystal (b) leaves the density unchanged? Give one example of each.`,
        steps: [R`Schottky: ions are missing from the crystal, so its mass falls while the volume stays the same.`, R`Frenkel: ions only move to interstitial sites, so the mass and volume are unchanged.`], ans: R`(a) Schottky, e.g. NaCl (b) Frenkel, e.g. AgCl` } },
      { check: { q: R`Why does a Frenkel defect not change the density?`, ans: R`No ions leave the crystal; one just moves to a different position.` } }
    ] },

    { h: R`Impurity defects`, t: [5], blocks: [
      R`When a foreign ion replaces a host ion, defects may form to keep the crystal neutral. If molten NaCl containing a little SrCl₂ crystallises, each Sr²⁺ replaces two Na⁺ ions: it occupies one site and leaves the other vacant, creating <b>cationic vacancies</b>. CdCl₂ in AgCl does the same.`,
      { adv: R`<b>Non-stoichiometric defects:</b> (i) metal excess due to anionic vacancies occupied by electrons (<b>F-centres</b>): heating NaCl in sodium vapour makes it yellow, KCl violet, LiCl pink, because the trapped electrons absorb visible light. (ii) Metal excess due to extra interstitial cations (ZnO turns yellow on heating, losing oxygen). (iii) Metal deficiency: FeO is really Fe₀.₉₅O, with some Fe³⁺ compensating for missing Fe²⁺. These defects give solids colour and semiconducting properties.` },
      { ex: { q: R`NaCl is doped with 10⁻³ mol% of SrCl₂. How many cation vacancies form per mole of NaCl?`,
        steps: [R`10⁻³ mol% = 10⁻⁵ mol of Sr²⁺ per mol NaCl; each creates one vacancy.`, R`Vacancies = 10⁻⁵ × 6.022 × 10²³.`], ans: R`≈ 6.02 × 10¹⁸ per mole` } },
      { ex: { q: R`Why does NaCl crystal turn yellow when heated in sodium vapour?`,
        steps: [R`Na atoms deposit on the surface and lose electrons to become Na⁺; Cl⁻ ions move out to the surface to combine with them, leaving anion vacancies.`, R`The released electrons fill these vacancies (F-centres) and absorb part of visible light, so the crystal looks yellow.`], ans: R`Metal-excess defect: electrons trapped in anion vacancies (F-centres)` } },
      { check: { q: R`Why does adding CaCl₂ to NaCl create cation vacancies?`, ans: R`Each Ca²⁺ replaces two Na⁺ to keep the crystal neutral, leaving one cation site empty.` } }
    ] }
  ],
  summary: [
    R`Crystalline (long-range order, sharp m.p., anisotropic) vs amorphous (short-range order, isotropic).`,
    R`Molecular, ionic, metallic and covalent network solids.`,
    R`Unit cell: a, b, c, α, β, γ; 7 crystal systems, 14 Bravais lattices.`,
    R`Atoms per cell: sc 1, bcc 2, fcc 4 (corner ⅛, edge ¼, face ½, body 1).`,
    R`a and r: sc a = 2r; bcc √3a = 4r; fcc √2a = 4r. Packing: 52.4%, 68%, 74% (fcc = hcp). Coordination: 6, 8, 12.`,
    R`Density d = ZM/(a³N_A).`,
    R`Voids: tetrahedral 2N, octahedral N. Radius ratio: 0.225 (4), 0.414 (6), 0.732 (8).`,
    R`NaCl (6:6), CsCl (8:8), ZnS (4:4), CaF₂ (8:4).`,
    R`Defects: Schottky (density falls), Frenkel (density same), impurity (cation vacancies), F-centres (colour).`,
    R`Nearest-neighbour distance: sc a, bcc √3a/2, fcc √2a/2; rock salt a = 2(r₊ + r₋); CsCl √3a = 2(r₊ + r₋); ZnS Zn–S = √3a/4.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §10.5 The Solid State of Matter`, url: 'https://openstax.org/books/chemistry-2e/pages/10-5-the-solid-state-of-matter' },
    { t: R`OpenStax Chemistry 2e, §10.6 Lattice Structures in Crystalline Solids`, url: 'https://openstax.org/books/chemistry-2e/pages/10-6-lattice-structures-in-crystalline-solids' },
    { t: R`Wikipedia: Bravais lattice`, url: 'https://en.wikipedia.org/wiki/Bravais_lattice' },
    { t: R`Wikipedia: Close-packing of equal spheres`, url: 'https://en.wikipedia.org/wiki/Close-packing_of_equal_spheres' },
    { t: R`Wikipedia: Crystallographic defect`, url: 'https://en.wikipedia.org/wiki/Crystallographic_defect' }
  ]
});
})();
