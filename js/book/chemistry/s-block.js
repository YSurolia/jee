// Book chapter: s-Block Elements. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 11, math: false, bold: true }) : ''); }
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function flame(x, y, col) {
  return '<path d="M' + x + ',' + (y + 34) + ' C' + (x - 18) + ',' + (y + 14) + ' ' + (x - 9) + ',' + (y - 12) + ' ' + x + ',' + (y - 34) +
    ' C' + (x + 9) + ',' + (y - 12) + ' ' + (x + 18) + ',' + (y + 14) + ' ' + x + ',' + (y + 34) + ' Z" fill="' + col + '" fill-opacity="0.85" stroke="none"/>';
}

// ---------- figures ----------
var figIE = D.plot({ w: 380, h: 250, x: [1.5, 6.6], y: [300, 950], noOrigin: true, xlabel: 'period', ylabel: 'IE₁ (kJ/mol)', mathLabels: false,
  xticks: [2, 3, 4, 5, 6], yticks: [400, 600, 800],
  segs: [{ x1: 2, y1: 520, x2: 3, y2: 496, color: 'r' }, { x1: 3, y1: 496, x2: 4, y2: 419, color: 'r' }, { x1: 4, y1: 419, x2: 5, y2: 403, color: 'r' }, { x1: 5, y1: 403, x2: 6, y2: 376, color: 'r' },
    { x1: 2, y1: 899, x2: 3, y2: 737, color: 'b' }, { x1: 3, y1: 737, x2: 4, y2: 590, color: 'b' }, { x1: 4, y1: 590, x2: 5, y2: 549, color: 'b' }, { x1: 5, y1: 549, x2: 6, y2: 503, color: 'b' }],
  pts: [{ x: 2, y: 520, label: 'Li', color: 'r', pos: 'n', math: false }, { x: 3, y: 496, label: 'Na', color: 'r', pos: 's', math: false }, { x: 4, y: 419, label: 'K', color: 'r', pos: 's', math: false }, { x: 5, y: 403, label: 'Rb', color: 'r', pos: 's', math: false }, { x: 6, y: 376, label: 'Cs', color: 'r', pos: 's', math: false },
    { x: 2, y: 899, label: 'Be', color: 'b', pos: 'e', math: false }, { x: 3, y: 737, label: 'Mg', color: 'b', pos: 'ne', math: false }, { x: 4, y: 590, label: 'Ca', color: 'b', pos: 'ne', math: false }, { x: 5, y: 549, label: 'Sr', color: 'b', pos: 'n', math: false }, { x: 6, y: 503, label: 'Ba', color: 'b', pos: 'n', math: false }],
  texts: [{ x: 4.5, y: 470, s: 'group 1', color: 'r', math: false, size: 11 }, { x: 3.9, y: 800, s: 'group 2', color: 'b', math: false, size: 11 }],
  label: 'First ionisation enthalpy down groups 1 and 2' });

var flames = [['Li', 'crimson', '#d7263d'], ['Na', 'yellow', '#f2b705'], ['K', 'lilac', '#a970d6'], ['Rb', 'red-violet', '#c2185b'], ['Cs', 'blue', '#3d6fd9'], ['Ca', 'brick red', '#c8553d'], ['Sr', 'crimson', '#b3122e'], ['Ba', 'apple green', '#6fb83a']];
var figFlame = D.svg(480, 130, flames.map(function (f, i) {
  var x = 32 + i * 59;
  return flame(x, 50, f[2]) + D.text(x, 100, f[0], { size: 13, math: false, bold: true }) + lab(x, 116, f[1], 'm', 9);
}).concat([D.line(297, 12, 297, 122, { color: 'm', w: 1, dash: '3 3' })]), 'Flame colours of alkali and alkaline earth metals');

var figOxides = D.svg(460, 150, [
  box(10, 55, 70, 36, 'M + O₂', 'k'),
  D.arrow(80, 66, 175, 25, { color: 'm' }), D.arrow(80, 73, 175, 73, { color: 'm' }), D.arrow(80, 80, 175, 121, { color: 'm' }),
  lab(122, 30, 'Li', 'r', 11, { bold: true }), lab(122, 64, 'Na', 'r', 11, { bold: true }), lab(122, 112, 'K, Rb, Cs', 'r', 11, { bold: true }),
  box(175, 8, 110, 34, 'Li₂O  (oxide)', 'c'), box(175, 56, 110, 34, 'Na₂O₂  (peroxide)', 'o'), box(175, 104, 110, 34, 'MO₂  (superoxide)', 'p'),
  lab(295, 25, 'O²⁻', 'c', 11, { anchor: 'start' }), lab(330, 25, 'diamagnetic, colourless', 'm', 9, { anchor: 'start' }),
  lab(295, 73, 'O₂²⁻', 'o', 11, { anchor: 'start' }), lab(330, 73, 'diamagnetic, pale yellow', 'm', 9, { anchor: 'start' }),
  lab(295, 121, 'O₂⁻', 'p', 11, { anchor: 'start' }), lab(330, 121, 'paramagnetic, coloured', 'm', 9, { anchor: 'start' })
], 'Burning alkali metals in excess air gives oxide, peroxide or superoxide');

function nh3(x, y, flip) { return D.text(x, y, flip ? 'H₃N' : 'NH₃', { size: 10, math: false, color: 'b' }); }
var figAmmonia = D.svg(420, 170, [
  D.rect(5, 5, 410, 160, { color: 'b', fill: 'soft', w: 1.2, r: 10 }),
  D.circle(110, 85, 16, { color: 'r', fill: 'bg', w: 1.6 }), D.text(110, 86, 'M⁺', { size: 12, math: false, bold: true, color: 'r' }),
  nh3(110, 40), nh3(110, 132), nh3(55, 86), nh3(165, 86), lab(110, 158, 'ammoniated cation', 'm', 10),
  D.circle(300, 85, 16, { color: 'p', fill: 'bg', w: 1.6 }), D.text(300, 86, 'e⁻', { size: 12, math: false, bold: true, color: 'p' }),
  nh3(300, 40), nh3(300, 132), nh3(245, 86), nh3(355, 86), lab(300, 158, 'ammoniated electron (blue colour)', 'm', 10),
  lab(210, 18, 'M + (x + y)NH₃ → [M(NH₃)ₓ]⁺ + [e(NH₃)ᵧ]⁻', 'k', 11)
], 'Alkali metal dissolved in liquid ammonia');

var figBeCl2 = D.svg(460, 200, [
  D.mol({ atoms: [{ x: 30, y: 30, s: 'Cl' }, { x: 80, y: 30, s: 'Be', color: 'c' }, { x: 130, y: 30, s: 'Cl' }], bonds: [[0, 1], [1, 2]] }),
  lab(80, 58, 'monomer, linear (above 1200 K)', 'm', 9),
  D.mol({ atoms: [{ x: 210, y: 30, s: 'Cl' }, { x: 255, y: 30, s: 'Be', color: 'c' }, { x: 290, y: 5, s: 'Cl' }, { x: 290, y: 55, s: 'Cl' }, { x: 325, y: 30, s: 'Be', color: 'c' }, { x: 370, y: 30, s: 'Cl' }],
    bonds: [[0, 1], [1, 2], [1, 3], [2, 4, 'd'], [3, 4], [4, 5]], r: 10 }),
  lab(290, 76, 'dimer in the vapour (Cl bridges)', 'm', 9),
  D.mol({ atoms: [{ x: 40, y: 140, s: 'Be', color: 'c' }, { x: 80, y: 112, s: 'Cl' }, { x: 80, y: 168, s: 'Cl' }, { x: 120, y: 140, s: 'Be', color: 'c' }, { x: 160, y: 112, s: 'Cl' }, { x: 160, y: 168, s: 'Cl' }, { x: 200, y: 140, s: 'Be', color: 'c' }, { x: 240, y: 112, s: 'Cl' }, { x: 240, y: 168, s: 'Cl' }, { x: 280, y: 140, s: 'Be', color: 'c' }],
    bonds: [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [3, 5], [4, 6], [5, 6], [6, 7], [6, 8], [7, 9], [8, 9]], r: 10 }),
  lab(370, 132, 'polymeric chain', 'm', 10), lab(370, 148, 'in the solid', 'm', 10), lab(370, 164, '(Be is 4-coordinate)', 'm', 9)
], 'Structures of beryllium chloride');

var carb = [['BeCO₃', 100, 'c'], ['MgCO₃', 540, 'b'], ['CaCO₃', 900, 'g'], ['SrCO₃', 1290, 'o'], ['BaCO₃', 1360, 'r']];
var figCarb = D.svg(400, 210, carb.map(function (c, i) {
  var x = 60 + i * 66, h = c[1] / 1400 * 140;
  return D.rect(x, 170 - h, 40, h, { color: c[2], fill: 'soft', w: 1.4 }) + lab(x + 20, 185, c[0], 'k', 10) + lab(x + 20, 162 - h, '≈' + c[1] + ' °C', 'm', 9);
}).concat([D.line(45, 170, 390, 170, { w: 1.4 }), D.arrow(45, 170, 45, 15, { color: 'k', w: 1.4, head: 8 }), lab(52, 14, 'decomposition temperature', 'm', 10, { anchor: 'start' }),
  lab(225, 203, 'larger cation → less polarisation of CO₃²⁻ → more stable', 'm', 10)]), 'Thermal stability of group 2 carbonates');

var figPolar = D.svg(380, 140, [
  D.circle(80, 70, 14, { color: 'r', fill: 'soft', w: 1.6 }), D.text(80, 71, 'Li⁺', { size: 11, math: false, bold: true }),
  D.path('M140,70 C140,30 230,25 250,70 C230,115 140,110 140,70 Z', { color: 'b', fill: 'soft', w: 1.6 }), D.text(198, 71, 'I⁻', { size: 12, math: false, bold: true }),
  D.arrow(158, 70, 102, 70, { color: 'm', w: 1.4 }), lab(130, 58, 'pull', 'm', 9),
  lab(80, 105, 'small, high charge density', 'r', 9), lab(200, 125, 'large anion, electron cloud distorted', 'b', 9),
  lab(320, 60, 'more covalent', 'k', 11, { bold: true }), lab(320, 76, 'character', 'k', 11, { bold: true })
], 'A small cation polarises a large anion');

var figDiag = D.svg(320, 130, [
  ['Li', 'Be', 'B', 'C'], ['Na', 'Mg', 'Al', 'Si']].map(function (row, r) {
  return row.map(function (s, c) { return box(20 + c * 75, 15 + r * 65, 50, 36, s, r ? 'b' : 'r', 14); }).join('');
}).concat([D.arrow(68, 50, 97, 82, { color: 'g', w: 2 }), D.arrow(143, 50, 172, 82, { color: 'g', w: 2 }), D.arrow(218, 50, 247, 82, { color: 'g', w: 2 })]), 'Diagonal relationship in the second and third periods');

var figSolvay = D.svg(480, 210, [
  box(5, 20, 110, 36, 'brine + NH₃', 'b'), D.arrow(115, 38, 160, 38, { color: 'm' }),
  box(160, 20, 130, 36, 'ammoniated brine', 'b'), D.arrow(290, 38, 335, 38, { color: 'm' }), lab(312, 26, '+ CO₂', 'm', 9),
  box(335, 20, 140, 36, 'NaHCO₃ ↓ + NH₄Cl', 'o'), D.arrow(405, 56, 405, 90, { color: 'm' }), lab(415, 74, 'filter, heat', 'm', 9, { anchor: 'start' }),
  box(335, 90, 140, 36, 'Na₂CO₃ + CO₂ + H₂O', 'g'),
  box(160, 150, 130, 36, 'CaCO₃ → CaO + CO₂', 'k'), D.arrow(255, 150, 320, 56, { color: 'r', dash: '4 3' }), lab(300, 112, 'CO₂', 'r', 9),
  D.arrow(335, 108, 290, 60, { color: 'r', dash: '4 3' }),
  box(5, 150, 130, 36, 'NH₄Cl + Ca(OH)₂', 'p'), D.arrow(70, 150, 70, 56, { color: 'r', dash: '4 3' }), lab(78, 105, 'NH₃ recycled', 'r', 9, { anchor: 'start' }),
  lab(70, 200, 'by-product CaCl₂', 'm', 9)
], 'The Solvay (ammonia-soda) process');

var figCastner = D.svg(440, 190, [
  D.rect(20, 40, 200, 110, { color: 'k', w: 1.6 }), D.rect(240, 40, 180, 110, { color: 'k', w: 1.6 }),
  D.rect(21, 130, 398, 19, { color: 'm', fill: 'soft', w: 0 }), lab(220, 140, 'mercury (cathode) flows along the bottom', 'k', 9),
  D.rect(105, 15, 30, 85, { color: 'k', fill: 'soft', w: 1.4 }), lab(120, 10, 'graphite anode', 'm', 9),
  lab(60, 75, 'brine', 'b', 11), D.arrow(150, 30, 175, 5, { color: 'g' }), lab(185, 10, 'Cl₂', 'g', 11, { anchor: 'start' }),
  lab(330, 75, 'water', 'b', 11), D.arrow(380, 30, 400, 5, { color: 'g' }), lab(405, 18, 'H₂', 'g', 11, { anchor: 'start' }),
  lab(330, 110, 'Na–Hg + H₂O → NaOH', 'o', 10),
  lab(120, 172, 'Na⁺ + e⁻ + Hg → Na–Hg', 'm', 10), lab(330, 172, '2Na–Hg + 2H₂O → 2NaOH + H₂ + 2Hg', 'm', 9)
], 'Castner–Kellner cell for sodium hydroxide');

var figPoP = D.svg(460, 140, [
  box(5, 40, 120, 44, '', 'b'), lab(65, 55, 'gypsum', 'b', 11, { bold: true }), lab(65, 72, 'CaSO₄·2H₂O', 'k', 10),
  D.arrow(125, 62, 175, 62, { color: 'm' }), lab(150, 50, '393 K', 'm', 9),
  box(175, 40, 120, 44, '', 'o'), lab(235, 55, 'plaster of Paris', 'o', 11, { bold: true }), lab(235, 72, 'CaSO₄·½H₂O', 'k', 10),
  D.arrow(295, 62, 340, 62, { color: 'm' }), lab(318, 50, '> 393 K', 'm', 9),
  box(340, 40, 115, 44, '', 'r'), lab(398, 55, 'dead-burnt', 'r', 11, { bold: true }), lab(398, 72, 'CaSO₄', 'k', 10),
  D.path('M235,84 C235,125 65,125 65,88', { color: 'g', w: 1.6, dash: '4 3' }), D.arrow(66, 96, 65, 86, { color: 'g', head: 8 }),
  lab(150, 128, '+ water: sets (5–15 min) back to gypsum', 'g', 10)
], 'Gypsum, plaster of Paris and dead-burnt plaster');

// ---------- chapter text ----------
JEE.book('chemistry', 's-block', {
  intro: [
    R`The s-block elements are the elements whose last electron enters the s orbital: group 1 (the <b>alkali metals</b> Li, Na, K, Rb, Cs, Fr) and group 2 (the <b>alkaline earth metals</b> Be, Mg, Ca, Sr, Ba, Ra). They are soft, highly reactive metals that are never found free in nature.`,
    R`In this chapter we follow the trends down each group, their reactions, their unusual solutions in liquid ammonia, the stability and solubility of their compounds, the odd behaviour of lithium and beryllium, and the important compounds of sodium and calcium that are made on a huge scale in industry.`
  ],
  sections: [
    { h: R`Group 1: the alkali metals`, t: [0], blocks: [
      R`The alkali metals have the configuration [noble gas] ns¹. The single outer electron is far from the nucleus and well shielded, so it is lost very easily to give M⁺. They are the most electropositive metals.`,
      { h3: R`Atomic and ionic radii` },
      R`They have the <b>largest atoms</b> in their periods. Radii increase down the group as new shells are added (Li 152 pm → Cs 265 pm). The M⁺ ions are much smaller than the atoms because the outer shell is removed.`,
      { h3: R`Ionisation enthalpy` },
      R`First ionisation enthalpies are low and decrease down the group (Li 520 → Cs 376 kJ/mol) as size increases. The second ionisation enthalpy is enormous (it would break a noble-gas core), so they show only the +1 state.`,
      { fig: figIE, cap: R`IE₁ falls down both groups; group 2 values are higher because of greater nuclear charge and smaller size.` },
      { h3: R`Hydration enthalpy` },
      R`Gaseous ions release energy when surrounded by water. Smaller ions attract water more strongly, so hydration enthalpy falls in magnitude down the group: Li⁺ (−506) > Na⁺ > K⁺ > Rb⁺ > Cs⁺ (−276 kJ/mol). Li⁺ is the most heavily hydrated, so its salts are often hydrated (LiCl·2H₂O) and the <b>hydrated</b> Li⁺ ion is the largest, moving the slowest in solution.`,
      { table: { head: [R`Property`, R`Li`, R`Na`, R`K`, R`Rb`, R`Cs`], rows: [
        [R`Metallic radius / pm`, R`152`, R`186`, R`227`, R`248`, R`265`],
        [R`M⁺ radius / pm`, R`76`, R`102`, R`138`, R`152`, R`167`],
        [R`IE₁ / kJ mol⁻¹`, R`520`, R`496`, R`419`, R`403`, R`376`],
        [R`ΔhydH (M⁺) / kJ mol⁻¹`, R`−506`, R`−406`, R`−330`, R`−310`, R`−276`],
        [R`Density / g cm⁻³`, R`0.53`, R`0.97`, R`0.86`, R`1.53`, R`1.90`],
        [R`Melting point / K`, R`454`, R`371`, R`336`, R`312`, R`302`]] } },
      { h3: R`Physical properties and flame colours` },
      R`They are silvery-white, soft (cut with a knife), light metals with low melting and boiling points, because the metallic bond (one electron per atom) is weak. Density generally increases down the group, but K is lighter than Na. They colour a flame: the energy of the flame excites the outer electron, and light of a characteristic wavelength is emitted when it falls back. Because they lose electrons so easily, Cs and K are used in <b>photoelectric cells</b>.`,
      { mistake: R`Saying density increases steadily down group 1. K (0.86) is less dense than Na (0.97), because its atomic size increases more than its mass.` },
      { check: { q: R`Why do alkali metals show only the +1 oxidation state?`, ans: R`Removing a second electron would break a stable noble-gas core; IE₂ is extremely high.` } }
    ] },

    { h: R`Group 2: the alkaline earth metals`, t: [0], blocks: [
      R`The alkaline earth metals have the configuration [noble gas] ns². Compared with group 1 in the same period, they have a greater nuclear charge, so their atoms and ions are <b>smaller</b>, their ionisation enthalpies are <b>higher</b>, and they are harder and denser with higher melting points (two electrons per atom in the metallic bond).`,
      R`Their first ionisation enthalpies are higher than those of group 1, but their second ionisation enthalpies are lower than group 1's second. They form M²⁺ ions because the extra energy is more than repaid by the much larger lattice and hydration enthalpies of the doubly charged, small ions. Hydration enthalpies are about four times those of group 1 (Be²⁺ −2494, Mg²⁺ −1921 kJ/mol), so their salts are often heavily hydrated (MgCl₂·6H₂O, CaCl₂·6H₂O).`,
      { table: { head: [R`Property`, R`Be`, R`Mg`, R`Ca`, R`Sr`, R`Ba`], rows: [
        [R`Metallic radius / pm`, R`112`, R`160`, R`197`, R`215`, R`222`],
        [R`M²⁺ radius / pm`, R`31`, R`72`, R`100`, R`118`, R`135`],
        [R`IE₁ / kJ mol⁻¹`, R`899`, R`737`, R`590`, R`549`, R`503`],
        [R`IE₂ / kJ mol⁻¹`, R`1757`, R`1450`, R`1145`, R`1064`, R`965`],
        [R`ΔhydH (M²⁺) / kJ mol⁻¹`, R`−2494`, R`−1921`, R`−1577`, R`−1443`, R`−1305`]] } },
      R`<b>Flame colours:</b> Ca brick red, Sr crimson, Ba apple green. Be and Mg do not colour the flame: their electrons are held so tightly that the flame cannot excite them.`,
      { fig: figFlame, cap: R`Flame colours (left of the dashed line: group 1; right: group 2). Be and Mg give no colour.` },
      { check: { q: R`Why do Be and Mg not impart colour to a flame?`, ans: R`Their small size holds the electrons so strongly that the flame's energy cannot excite them to higher levels.` } }
    ] },

    { h: R`Reactivity towards air and water`, t: [1], blocks: [
      R`Alkali metals tarnish quickly in air, forming an oxide or hydroxide film, and are stored under kerosene. Burned in excess air, they form different oxides because larger cations stabilise larger anions:`,
      { fig: figOxides, cap: R`Li gives the oxide, Na the peroxide, and K, Rb, Cs the superoxide.` },
      R`Lithium also reacts directly with nitrogen to form Li₃N (the only alkali metal to do so; Mg does it too). The superoxide ion O₂⁻ has one unpaired electron, so superoxides are paramagnetic and coloured.`,
      R`With <b>water</b>, alkali metals give hydroxides and hydrogen: 2M + 2H₂O → 2M⁺ + 2OH⁻ + H₂. Lithium reacts least vigorously even though its E° is the most negative: this is a kinetic effect (Li is small, has a high melting point and does not melt or spread out over the water). Na reacts vigorously; K, Rb and Cs react explosively.`,
      R`Group 2: Be and Mg are kinetically inert to air and water because of a protective oxide film. Powdered Be burns to BeO and Be₃N₂; Mg burns with a dazzling white light (used in flash bulbs). Ca, Sr and Ba react with cold water; Mg reacts with hot water or steam; Be does not react even with steam.`,
      { ex: { q: R`How many litres of O₂ at STP are released when 7.8 g of Na₂O₂ reacts with water?`,
        steps: [R`2Na₂O₂ + 2H₂O → 4NaOH + O₂`, R`7.8/78 = 0.1 mol Na₂O₂, giving 0.05 mol O₂.`, R`0.05 × 22.4 = 1.12 L.`], ans: R`1.12 L` } },
      { check: { q: R`Which alkali metal forms a nitride directly?`, ans: R`Lithium (Li₃N).` } }
    ] },

    { h: R`Reactivity towards dihydrogen, halogens and acids`, t: [1], blocks: [
      { points: [
        R`<b>Dihydrogen:</b> alkali metals form ionic hydrides M⁺H⁻ on heating (2M + H₂ → 2MH). All group 2 metals except Be form MH₂; BeH₂ (covalent, polymeric) is made indirectly: 2BeCl₂ + LiAlH₄ → 2BeH₂ + LiCl + AlCl₃.`,
        R`<b>Halogens:</b> they react vigorously to form halides, M⁺X⁻ (group 1) and MX₂ (group 2). Lithium halides are somewhat covalent (Li⁺ polarises the halide strongly), and BeCl₂ is essentially covalent.`,
        R`<b>Acids:</b> all react readily with acids, liberating H₂: Mg + 2HCl → MgCl₂ + H₂.`
      ] },
      { ex: { q: R`What volume of hydrogen at STP is produced when 2.4 g of magnesium dissolves completely in dilute HCl?`,
        steps: [R`Mg + 2HCl → MgCl₂ + H₂`, R`2.4/24 = 0.1 mol Mg gives 0.1 mol H₂ = 2.24 L.`], ans: R`2.24 L` } },
      { check: { q: R`Why is BeH₂ not made by direct reaction of Be with H₂?`, ans: R`Be does not react directly with H₂; BeH₂ is prepared from BeCl₂ and LiAlH₄.` } }
    ] },

    { h: R`Reducing nature and electrode potentials`, t: [2], blocks: [
      R`All s-block metals are strong reducing agents because they lose electrons easily. Their standard reduction potentials are very negative:`,
      { table: { head: [R`M⁺/M`, R`Li`, R`Na`, R`K`, R`Rb`, R`Cs`], rows: [[R`E° / V`, R`−3.04`, R`−2.71`, R`−2.93`, R`−2.98`, R`−3.03`]] } },
      R`Surprisingly, <b>lithium</b> has the most negative E° and is the strongest reducing agent in water, even though its ionisation enthalpy is the highest. The reducing power in water depends on three steps together: sublimation, M(s) → M(g); ionisation, M(g) → M⁺(g); and hydration, M⁺(g) → M⁺(aq). The very large hydration enthalpy of the tiny Li⁺ ion makes up for its high ionisation enthalpy.`,
      { derive: R`Why lithium is the best reducing agent in water`, steps: [R`Three steps: \[\mathrm{M(s)} \xrightarrow{\Delta_{sub}H} \mathrm{M(g)} \xrightarrow{IE} \mathrm{M^+(g)} \xrightarrow{\Delta_{hyd}H} \mathrm{M^+(aq)}\]`, R`Overall: \(\Delta H = \Delta_{sub}H + IE + \Delta_{hyd}H\); the more negative this is, the more negative E°.`, R`Li has the largest IE, but its \(\Delta_{hyd}H\) (−506 kJ/mol) is far more negative than that of the others, so E°(Li⁺/Li) is the most negative.`] },
      R`In group 2, E° values are also very negative (Mg −2.37, Ca −2.87, Ba −2.91 V), with Be the least reducing (−1.85 V) because of its high sublimation and ionisation energies.`,
      { tip: R`Reducing power in the gas phase follows IE (Cs strongest), but in water it follows E° (Li strongest). Read the question carefully.` },
      { check: { q: R`Why is Li the strongest reducing agent in aqueous solution?`, ans: R`Its very large hydration enthalpy more than compensates for its high ionisation enthalpy, giving the most negative E°.` } }
    ] },

    { h: R`Solutions in liquid ammonia`, t: [2], blocks: [
      R`Alkali metals (and Ca, Sr, Ba) dissolve in liquid ammonia to give deep <b>blue</b> solutions that conduct electricity:`,
      { fig: figAmmonia, cap: R`Both the metal ion and the released electron are surrounded by ammonia molecules.` },
      R`The blue colour comes from the <b>ammoniated electron</b>, which absorbs light in the red region of the visible spectrum. The solutions are paramagnetic (unpaired electrons) and strongly reducing. On standing they slowly liberate hydrogen: M⁺ + e⁻ + NH₃ → MNH₂ + ½H₂ (forming the amide). In concentrated solutions the colour changes to <b>bronze</b> and the solution becomes diamagnetic, because the free electrons pair up and form metal-ion clusters.`,
      { check: { q: R`What causes the blue colour of sodium in liquid ammonia?`, ans: R`Ammoniated (solvated) electrons, which absorb in the red part of the spectrum.` } }
    ] },

    { h: R`Oxides and hydroxides`, t: [3], blocks: [
      R`Alkali metal oxides react with water to give strong bases: M₂O + H₂O → 2MOH. Peroxides give H₂O₂ and superoxides give H₂O₂ and O₂: 2KO₂ + 2H₂O → 2KOH + H₂O₂ + O₂. KO₂ is used in breathing apparatus because it absorbs CO₂ and releases O₂: 4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂.`,
      R`The <b>hydroxides</b> MOH are white crystalline solids, the strongest bases known, very soluble in water. Basic strength increases down the group (LiOH < NaOH < KOH < RbOH < CsOH) as the M–O bond becomes weaker and more ionic.`,
      R`Group 2 oxides (MO) are high-melting ionic solids (BeO is covalent). <b>BeO and Be(OH)₂ are amphoteric</b>: Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻ and Be(OH)₂ + 2HCl + 2H₂O → [Be(OH₂)₄]Cl₂. The others are basic, increasing down the group. The solubility of the hydroxides <b>increases</b> down group 2 (Mg(OH)₂ almost insoluble; Ba(OH)₂ quite soluble) because the lattice enthalpy falls faster than the hydration enthalpy.`,
      { ex: { q: R`How many litres of O₂ (STP) can 142 g of KO₂ supply in a breathing mask that absorbs exhaled CO₂?`,
        steps: [R`4KO₂ + 2CO₂ → 2K₂CO₃ + 3O₂`, R`142/71 = 2 mol KO₂ gives (3/4) × 2 = 1.5 mol O₂.`, R`1.5 × 22.4 = 33.6 L.`], ans: R`33.6 L` } },
      { check: { q: R`Arrange Be(OH)₂, Mg(OH)₂, Ca(OH)₂, Ba(OH)₂ by basic strength.`, ans: R`Be(OH)₂ (amphoteric) < Mg(OH)₂ < Ca(OH)₂ < Ba(OH)₂.` } }
    ] },

    { h: R`Halides`, t: [3], blocks: [
      R`Alkali metal halides MX are colourless, high-melting ionic solids. For the same metal, melting points fall in the order fluoride > chloride > bromide > iodide, because the lattice enthalpy falls as the anion becomes larger. For the same halide, lattice enthalpy falls down the group.`,
      R`<b>Lithium halides</b> show some covalent character: the tiny Li⁺ distorts (polarises) the electron cloud of a large halide such as I⁻ (Fajans' rules). LiCl is soluble in organic solvents like ethanol and pyridine. LiF is the least soluble lithium halide in water, because of its very high lattice enthalpy.`,
      { fig: figPolar, cap: R`Fajans' rules: a small, highly charged cation and a large anion give more covalent character.` },
      R`Group 2 halides: except for Be, they are ionic. <b>BeCl₂</b> is covalent: polymeric in the solid, a dimer in the vapour, and a linear monomer above about 1200 K. Group 2 fluorides are much less soluble than the chlorides (CaF₂ occurs as the mineral fluorite).`,
      { fig: figBeCl2, cap: R`BeCl₂ has a chain structure in the solid and a bridged dimer in the vapour.` },
      { check: { q: R`Why is LiCl soluble in ethanol, unlike NaCl?`, ans: R`The small Li⁺ polarises Cl⁻, giving LiCl appreciable covalent character.` } }
    ] },

    { h: R`Salts of oxoacids: carbonates, sulphates and nitrates`, t: [3], blocks: [
      { h3: R`Carbonates and bicarbonates` },
      R`Alkali metal carbonates M₂CO₃ and bicarbonates MHCO₃ are stable to heat (except Li₂CO₃, which decomposes: Li₂CO₃ → Li₂O + CO₂) and soluble in water. Thermal stability increases down the group as the cation becomes larger and less polarising. LiHCO₃ does not exist as a solid.`,
      R`Group 2 carbonates are insoluble in water and decompose on heating (MCO₃ → MO + CO₂). Their stability increases down the group:`,
      { fig: figCarb, cap: R`Approximate decomposition temperatures of the group 2 carbonates.` },
      { h3: R`Sulphates` },
      R`Group 2 sulphates: <b>solubility decreases</b> down the group, BeSO₄ and MgSO₄ are very soluble, CaSO₄ slightly, and SrSO₄ and BaSO₄ almost insoluble. For the small Be²⁺ and Mg²⁺, the large hydration enthalpy beats the lattice enthalpy. The large SO₄²⁻ anion makes lattice enthalpy almost constant, while hydration enthalpy falls quickly with cation size.`,
      { h3: R`Nitrates` },
      R`Most alkali metal nitrates decompose on heating to nitrites: 2NaNO₃ → 2NaNO₂ + O₂. <b>LiNO₃</b> (like the group 2 nitrates) decomposes to the oxide: 4LiNO₃ → 2Li₂O + 4NO₂ + O₂; 2Mg(NO₃)₂ → 2MgO + 4NO₂ + O₂.`,
      { table: { head: [R`Down group 2`, R`Trend`, R`Reason`], rows: [
        [R`Solubility of hydroxides`, R`increases`, R`lattice enthalpy falls faster than hydration enthalpy`],
        [R`Solubility of sulphates`, R`decreases`, R`hydration enthalpy falls faster (lattice ≈ constant with large SO₄²⁻)`],
        [R`Thermal stability of carbonates`, R`increases`, R`larger cation polarises CO₃²⁻ less`],
        [R`Basic strength of hydroxides`, R`increases`, R`M–OH bond becomes more ionic`]] } },
      { ex: { q: R`10 g of CaCO₃ is heated strongly. Find the mass of the residue and the volume of CO₂ at STP.`,
        steps: [R`CaCO₃ → CaO + CO₂`, R`10/100 = 0.1 mol, giving 0.1 × 56 = 5.6 g CaO and 0.1 × 22.4 = 2.24 L CO₂.`], ans: R`5.6 g CaO; 2.24 L CO₂` } },
      { check: { q: R`Which is more soluble in water: BeSO₄ or BaSO₄? Why?`, ans: R`BeSO₄: the tiny Be²⁺ has a huge hydration enthalpy that beats its lattice enthalpy.` } }
    ] },

    { h: R`Anomalous behaviour of lithium`, t: [4], blocks: [
      R`The first member of each group differs from the rest because of its <b>very small size, high charge density and high polarising power</b>, and because it has no d orbitals in its valence shell. Lithium is harder, with higher melting and boiling points, and it is the least reactive alkali metal but the strongest reducing agent in water.`,
      { points: [R`Forms a normal oxide Li₂O (not a peroxide or superoxide) and a nitride Li₃N.`, R`LiCl is deliquescent and crystallises as LiCl·2H₂O; Li salts are often hydrated.`, R`Li₂CO₃ and LiNO₃ decompose on heating (to Li₂O); LiHCO₃ is not a solid.`, R`LiF, Li₂CO₃ and Li₃PO₄ are only slightly soluble (unlike Na salts).`, R`Lithium reacts with ethyne to give no ethynide.`] },
      { h3: R`Diagonal relationship with magnesium` },
      { fig: figDiag, cap: R`Each element of period 2 resembles the element diagonally below-right in period 3.` },
      R`Moving right increases charge density, and moving down decreases it, so Li⁺ and Mg²⁺ have similar polarising power (and similar ionic radii: 76 and 72 pm). Hence Li resembles Mg:`,
      { points: [R`Both are harder and lighter than other members of their groups.`, R`Both form nitrides (Li₃N, Mg₃N₂) and only normal oxides (Li₂O, MgO) on burning.`, R`Their carbonates decompose to oxides and CO₂; their nitrates give NO₂.`, R`LiCl and MgCl₂ are deliquescent and form hydrates; both are soluble in ethanol.`, R`Neither forms a solid bicarbonate.`] },
      { check: { q: R`Name two reasons for lithium's anomalous behaviour.`, ans: R`Very small size (high charge density/polarising power) and high ionisation enthalpy; no d orbitals.` } }
    ] },

    { h: R`Anomalous behaviour of beryllium`, t: [4], blocks: [
      R`Beryllium differs from the other alkaline earth metals for the same reasons: tiny size (Be²⁺ 31 pm), high ionisation enthalpy and no d orbitals, so its maximum covalency is 4.`,
      { points: [R`Its compounds are largely covalent (BeCl₂, BeH₂) and easily hydrolysed.`, R`BeO and Be(OH)₂ are amphoteric.`, R`It does not react with water even at high temperature.`, R`It forms complexes readily ([BeF₄]²⁻).`] },
      { h3: R`Diagonal relationship with aluminium` },
      R`Be²⁺ and Al³⁺ have similar charge/radius ratios, so beryllium resembles aluminium:`,
      { points: [R`Both are rendered passive by nitric acid (protective oxide film).`, R`Both hydroxides are amphoteric: Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻ (beryllate); Al(OH)₃ + OH⁻ → [Al(OH)₄]⁻ (aluminate).`, R`The chlorides are covalent, Lewis acids (Friedel–Crafts catalysts), and have bridged structures in the vapour; both are soluble in organic solvents.`, R`Both form fluoro-complexes, [BeF₄]²⁻ and [AlF₆]³⁻.`] },
      { adv: R`Why is the maximum covalency of Be 4 while Mg can show 6? Be has only the 2s and 2p orbitals in its valence shell (4 orbitals); Mg can use 3d orbitals and its larger size allows six neighbours.` },
      { check: { q: R`Which element of group 13 shows a diagonal relationship with beryllium?`, ans: R`Aluminium.` } }
    ] },

    { h: R`Sodium carbonate (washing soda)`, t: [5], blocks: [
      R`Sodium carbonate is usually made by the <b>Solvay (ammonia-soda) process</b>. CO₂ is passed through brine saturated with ammonia. Sodium hydrogencarbonate is precipitated because it is only sparingly soluble in the presence of NH₄Cl:`,
      { derive: R`Reactions of the Solvay process`, open: true, steps: [R`2NH₃ + H₂O + CO₂ → (NH₄)₂CO₃`, R`(NH₄)₂CO₃ + H₂O + CO₂ → 2NH₄HCO₃`, R`NH₄HCO₃ + NaCl → NH₄Cl + NaHCO₃↓`, R`2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O (on heating)`] },
      { fig: figSolvay, cap: R`CO₂ and NH₃ are recycled; the only by-product is CaCl₂.` },
      R`Ammonia is recovered by heating NH₄Cl with slaked lime: 2NH₄Cl + Ca(OH)₂ → 2NH₃ + CaCl₂ + 2H₂O. The Solvay process <b>cannot make K₂CO₃</b>, because KHCO₃ is too soluble to precipitate.`,
      R`<b>Properties:</b> washing soda is Na₂CO₃·10H₂O. It loses water on standing (efflorescence) to Na₂CO₃·H₂O and becomes anhydrous soda ash above 373 K. Its aqueous solution is alkaline by hydrolysis: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻. <b>Uses:</b> softening water, laundering, glass, soap, borax and caustic soda manufacture.`,
      { ex: { q: R`What is the maximum mass of Na₂CO₃ obtainable from 1 tonne of NaCl in the Solvay process?`,
        steps: [R`Overall: 2NaCl → Na₂CO₃ (sodium is conserved).`, R`2 × 58.5 = 117 g NaCl gives 106 g Na₂CO₃.`, R`1000 kg × 106/117 = 906 kg.`], ans: R`≈ 906 kg` } },
      { check: { q: R`Why can't potassium carbonate be made by the Solvay process?`, ans: R`KHCO₃ is too soluble in water to be precipitated.` } }
    ] },

    { h: R`Sodium chloride, sodium hydroxide and sodium hydrogencarbonate`, t: [5], blocks: [
      { h3: R`Sodium chloride` },
      R`Common salt comes mainly from the evaporation of sea water (about 2.7–2.9% salt). Crude salt contains CaSO₄, Na₂SO₄, CaCl₂ and MgCl₂ (the chlorides make it deliquescent). It is purified by dissolving in a minimum of water and passing HCl gas through: pure NaCl crystallises out (common ion effect). It melts at 1081 K and has a solubility of about 36 g per 100 g of water.`,
      { h3: R`Sodium hydroxide (caustic soda)` },
      R`NaOH is made by electrolysis of brine in the <b>Castner–Kellner cell</b>, which uses a mercury cathode and a carbon anode. Sodium discharged at the cathode forms an amalgam with mercury, which then reacts with water in a separate chamber.`,
      { fig: figCastner, cap: R`Chlorine leaves at the anode; sodium amalgam reacts with water to give NaOH and H₂.` },
      R`NaOH is a white, translucent, deliquescent solid that absorbs CO₂ from air to form Na₂CO₃. It is a strong base. <b>Uses:</b> soap, paper, artificial silk, petroleum refining, purification of bauxite, mercerising cotton, and as a laboratory reagent.`,
      { h3: R`Sodium hydrogencarbonate (baking soda)` },
      R`NaHCO₃ is made by saturating Na₂CO₃ solution with CO₂: Na₂CO₃ + H₂O + CO₂ → 2NaHCO₃. On heating it gives CO₂, which makes cakes and bread rise. It is a mild antiseptic for skin infections and is used in fire extinguishers.`,
      { ex: { q: R`Find the mass of Na₂CO₃ and the volume of CO₂ (STP) formed when 8.4 g of NaHCO₃ is heated completely.`,
        steps: [R`2NaHCO₃ → Na₂CO₃ + H₂O + CO₂`, R`8.4/84 = 0.1 mol NaHCO₃ gives 0.05 mol Na₂CO₃ (5.3 g) and 0.05 mol CO₂ (1.12 L).`], ans: R`5.3 g; 1.12 L` } },
      { check: { q: R`Why is mercury used as the cathode in the Castner–Kellner cell?`, ans: R`Na⁺ is discharged at mercury (high overpotential for H₂) and forms an amalgam, so NaOH is made away from the chlorine.` } }
    ] },

    { h: R`Calcium oxide, calcium hydroxide and calcium carbonate`, t: [6], blocks: [
      R`<b>Calcium oxide (quicklime)</b> is made by heating limestone in a rotary kiln at 1070–1270 K: CaCO₃ ⇌ CaO + CO₂. CO₂ is removed to drive the reaction forward. It is a white, basic solid that reacts with water to form slaked lime (slaking, highly exothermic): CaO + H₂O → Ca(OH)₂. As a basic oxide, it combines with acidic oxides: CaO + SiO₂ → CaSiO₃ (slag). It is used in cement, sugar purification and drying of gases.`,
      R`<b>Calcium hydroxide (slaked lime)</b> is a white powder, sparingly soluble in water. A clear solution is <b>lime water</b>, and a suspension is <b>milk of lime</b>. Lime water turns milky with CO₂ (insoluble CaCO₃), and the milkiness disappears with excess CO₂ (soluble Ca(HCO₃)₂). Milk of lime reacts with chlorine to give <b>bleaching powder</b>: 2Ca(OH)₂ + 2Cl₂ → CaCl₂ + Ca(OCl)₂ + 2H₂O. It is used in mortar, whitewash and as a disinfectant.`,
      R`<b>Calcium carbonate</b> occurs as limestone, chalk and marble. It is made by passing CO₂ through slaked lime, or by adding Na₂CO₃ to CaCl₂. It decomposes to CaO and CO₂ at about 1200 K and dissolves in dilute acids with effervescence. It is used in building materials, as a flux in iron extraction, and (precipitated) in toothpaste and as an antacid.`,
      { check: { q: R`Why does lime water turn milky with CO₂ and then clear again with excess CO₂?`, ans: R`First insoluble CaCO₃ forms; excess CO₂ converts it to soluble Ca(HCO₃)₂.` } }
    ] },

    { h: R`Calcium sulphate and plaster of Paris`, t: [6], blocks: [
      R`<b>Plaster of Paris</b> is calcium sulphate hemihydrate, CaSO₄·½H₂O. It is made by heating gypsum, CaSO₄·2H₂O, at 393 K. Above 393 K all the water is lost, giving anhydrous CaSO₄ (<b>dead-burnt plaster</b>), which does not set with water.`,
      { fig: figPoP, cap: R`Mixed with water, plaster of Paris sets quickly to a hard mass of gypsum.` },
      R`When mixed with water it forms a plastic mass that sets into a hard solid in 5–15 minutes, expanding slightly. <b>Uses:</b> plaster casts for broken bones, statues, moulds, dental work, and making buildings fire-proof.`,
      R`<b>Cement</b> (Portland cement) is also a calcium product: limestone and clay are heated to about 1800 K, giving <b>clinker</b> (mainly dicalcium and tricalcium silicates, and tricalcium aluminate), which is ground with 2–3% gypsum to slow down setting.`,
      { ex: { q: R`What percentage of its mass does gypsum lose when converted to plaster of Paris?`,
        steps: [R`CaSO₄·2H₂O (172) → CaSO₄·½H₂O (145) + 1½H₂O (27)`, R`27/172 × 100 = 15.7%.`], ans: R`≈ 15.7%` } },
      { check: { q: R`What is dead-burnt plaster and why is it useless for casts?`, ans: R`Anhydrous CaSO₄, formed above 393 K; it does not set when mixed with water.` } }
    ] },

    { h: R`Uses and biological importance of s-block elements`, t: [5, 6], blocks: [
      { points: [
        R`<b>Lithium:</b> alloys (Li–Pb for bearings, Li–Al for aircraft), lithium batteries (lightest metal, most negative E°).`,
        R`<b>Sodium:</b> Na–Pb alloy for making tetraethyl lead, liquid sodium as a coolant in fast breeder reactors.`,
        R`<b>Potassium and caesium:</b> KOH as an electrolyte and for soft soap; KCl as a fertiliser; Cs in photoelectric cells.`,
        R`<b>Beryllium:</b> alloys (Cu–Be springs), X-ray tube windows. <b>Magnesium:</b> light alloys with Al (aircraft), flash powder, Mg(OH)₂ as an antacid (milk of magnesia). <b>Calcium:</b> extraction of metals; CaO, Ca(OH)₂ and CaCO₃ as above. <b>Barium:</b> BaSO₄ for X-ray "barium meal". <b>Radium:</b> radiotherapy.`
      ] },
      R`<b>Biological importance:</b> Na⁺ (outside cells) and K⁺ (inside cells) carry nerve signals, regulate fluid flow across cell membranes, and activate enzymes; the sodium–potassium pump keeps their concentrations different. Mg²⁺ is part of chlorophyll and activates the enzymes that use ATP. Ca²⁺ is in bones and teeth (about 1.2 kg in an adult) and controls muscle contraction and blood clotting.`,
      { check: { q: R`Which ion is found mainly inside cells: Na⁺ or K⁺?`, ans: R`K⁺.` } }
    ] }
  ],
  summary: [
    R`Group 1 ns¹, group 2 ns²; largest atoms, low IE; IE and hydration enthalpy fall down each group; group 2 is smaller, harder, with higher IE.`,
    R`Flame colours: Li crimson, Na yellow, K lilac, Rb red-violet, Cs blue; Ca brick red, Sr crimson, Ba apple green; Be and Mg none.`,
    R`In excess air: Li₂O, Na₂O₂, KO₂ (paramagnetic). Li reacts slowly with water despite the most negative E° (kinetics).`,
    R`Li is the strongest reducing agent in water (large hydration enthalpy). Blue solutions in liquid NH₃ due to ammoniated electrons.`,
    R`Down group 2: hydroxide solubility and basicity rise, sulphate solubility falls, carbonate stability rises. BeO and Be(OH)₂ are amphoteric.`,
    R`Li and Be are anomalous (small size, high polarising power, no d orbitals); diagonal relationships Li–Mg and Be–Al.`,
    R`Solvay process for Na₂CO₃ (not K₂CO₃); Castner–Kellner cell for NaOH; NaHCO₃ for baking.`,
    R`CaO (quicklime), Ca(OH)₂ (slaked lime, lime water), CaCO₃; plaster of Paris CaSO₄·½H₂O from gypsum at 393 K.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §18.1 Periodicity`, url: 'https://openstax.org/books/chemistry-2e/pages/18-1-periodicity' },
    { t: R`OpenStax Chemistry 2e, §18.2 Occurrence and Preparation of the Representative Metals`, url: 'https://openstax.org/books/chemistry-2e/pages/18-2-occurrence-and-preparation-of-the-representative-metals' },
    { t: R`Wikipedia: Alkali metal`, url: 'https://en.wikipedia.org/wiki/Alkali_metal' },
    { t: R`Wikipedia: Alkaline earth metal`, url: 'https://en.wikipedia.org/wiki/Alkaline_earth_metal' },
    { t: R`Wikipedia: Solvay process`, url: 'https://en.wikipedia.org/wiki/Solvay_process' },
    { t: R`Wikipedia: Diagonal relationship`, url: 'https://en.wikipedia.org/wiki/Diagonal_relationship' }
  ]
});
})();
