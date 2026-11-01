// Book chapter: General Principles and Processes of Isolation of Metals (Metallurgy). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 11, math: false, bold: true }) : ''); }
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }

// ---------- figures ----------
var figSteps = D.svg(500, 90, [
  box(5, 25, 70, 40, 'Ore', 'k', 12), D.arrow(75, 45, 95, 45, { color: 'm' }),
  box(95, 25, 95, 40, '', 'b'), lab(142, 39, 'Concentration', 'b', 10, { bold: true }), lab(142, 53, '(remove gangue)', 'm', 9),
  D.arrow(190, 45, 210, 45, { color: 'm' }),
  box(210, 25, 90, 40, '', 'o'), lab(255, 39, 'To oxide', 'o', 10, { bold: true }), lab(255, 53, 'calcine / roast', 'm', 9),
  D.arrow(300, 45, 320, 45, { color: 'm' }),
  box(320, 25, 80, 40, '', 'r'), lab(360, 39, 'Reduction', 'r', 10, { bold: true }), lab(360, 53, 'to crude metal', 'm', 9),
  D.arrow(400, 45, 420, 45, { color: 'm' }),
  box(420, 25, 75, 40, '', 'g'), lab(457, 39, 'Refining', 'g', 10, { bold: true }), lab(457, 53, 'pure metal', 'm', 9)
], 'The main steps of metallurgy');

var figMagnet = D.svg(380, 170, [
  D.line(30, 50, 250, 50, { w: 2 }), D.line(30, 80, 250, 80, { w: 2 }), D.circle(30, 65, 15, { w: 1.6 }), D.circle(250, 65, 15, { color: 'r', fill: 'soft', w: 1.8 }),
  lab(250, 66, 'N S', 'r', 9, { bold: true }), lab(250, 98, 'magnetic roller', 'r', 9),
  D.dot(80, 44, { color: 'm' }), D.dot(110, 44, { color: 'k' }), D.dot(140, 44, { color: 'm' }), D.dot(170, 44, { color: 'k' }), D.dot(200, 44, { color: 'm' }),
  lab(62, 26, 'powdered ore on a belt', 'm', 10, { anchor: 'start' }), D.arrow(56, 26, 30, 26, { color: 'm', head: 7 }),
  D.path('M262,50 C300,52 320,90 330,140', { color: 'm', w: 1.4, dash: '4 3' }), D.path('M262,78 C268,100 270,120 272,140', { color: 'k', w: 1.4, dash: '4 3' }),
  D.rect(250, 140, 40, 20, { color: 'k', fill: 'soft', w: 1.4 }), D.rect(310, 140, 50, 20, { color: 'm', fill: 'soft', w: 1.4 }),
  lab(270, 167, 'magnetic', 'k', 9), lab(335, 167, 'non-magnetic', 'm', 9)
], 'Magnetic separation');

var bub = [];
[[90, 45], [110, 40], [130, 46], [150, 41], [170, 46], [190, 40], [210, 45], [230, 41]].forEach(function (p) { bub.push(D.circle(p[0], p[1], 8, { color: 'b', w: 1.2 })); bub.push(D.dot(p[0], p[1] - 3, { r: 2.4, color: 'k' })); });
var figFroth = D.svg(420, 200, [
  D.path('M70,20 L70,170 L250,170 L250,20', { w: 2 }), D.rect(72, 32, 176, 22, { color: 'b', fill: 'soft', w: 0 }),
  D.rect(72, 120, 176, 48, { color: 'm', fill: 'soft', w: 0 })
].concat(bub).concat([
  D.line(160, 5, 160, 110, { w: 2 }), D.line(140, 110, 180, 110, { w: 3, color: 'o' }), lab(205, 100, 'rotating paddle', 'o', 9, { anchor: 'start' }),
  D.arrow(30, 150, 72, 150, { color: 'g' }), lab(30, 138, 'air', 'g', 10),
  lab(260, 40, 'froth carries the', 'b', 10, { anchor: 'start' }), lab(260, 54, 'sulphide ore particles', 'b', 10, { anchor: 'start' }), lab(260, 68, '(wetted by pine oil)', 'm', 9, { anchor: 'start' }),
  lab(160, 85, 'water + pine oil + collector', 'm', 9),
  D.dot(100, 160, { r: 3, color: 'm' }), D.dot(130, 158, { r: 3, color: 'm' }), D.dot(190, 161, { r: 3, color: 'm' }), D.dot(225, 158, { r: 3, color: 'm' }),
  lab(260, 150, 'gangue (wetted by water)', 'm', 10, { anchor: 'start' }), lab(260, 164, 'sinks to the bottom', 'm', 10, { anchor: 'start' })
]), 'Froth flotation');

var ell = [
  ['4Cu + O₂ → 2Cu₂O', -337, 0.150, 'o'], ['2Fe + O₂ → 2FeO', -544, 0.142, 'r'], ['2Zn + O₂ → 2ZnO', -700, 0.200, 'b'],
  ['4/3Cr + O₂ → 2/3Cr₂O₃', -754, 0.170, 'p'], ['4/3Al + O₂ → 2/3Al₂O₃', -1117, 0.210, 'k'], ['2Mg + O₂ → 2MgO', -1202, 0.220, 'k', '9 4'],
  ['2C + O₂ → 2CO', -221, -0.179, 'g'], ['C + O₂ → CO₂', -394, -0.003, 'm', '2 3'], ['2CO + O₂ → 2CO₂', -566, 0.173, 'm', '6 4']];
var figEll = D.plot({ w: 560, h: 330, pad: [20, 175, 26, 50], x: [0, 2100], y: [-1250, 40], noOrigin: true, xlabel: 'T / K', ylabel: 'ΔG° / kJ per mol O₂', mathLabels: false,
  xticks: [[500, '500'], [1000, '1000'], [1500, '1500'], [2000, '2000']], yticks: [[-400, '−400'], [-800, '−800'], [-1200, '−1200']], grid: true,
  fns: ell.map(function (e, i) { return { f: function (T) { return e[1] + e[2] * T; }, from: 300, to: 2050, color: e[3], w: i === 6 ? 3.2 : 2, dash: e[4] }; }),
  pts: [{ x: 1006, y: -401, color: 'g' }],
  extra: function (X, Y) {
    var out = [];
    ell.forEach(function (e, i) {
      var y = 62 + i * 26, x = 400;
      out.push(D.line(x, y, x + 18, y, { color: e[3], w: 2.4, dash: e[4] || false }));
      out.push(D.text(x + 24, y, e[0], { size: 10, math: false, anchor: 'start', color: e[3] === 'k' ? 'k' : e[3] }));
    });
    out.push(D.line(X(1006), Y(-401), X(1040), Y(-640), { color: 'g', w: 1, dash: '2 2' }));
    out.push(D.text(X(1045), Y(-660), 'C reduces FeO', { size: 9, math: false, color: 'g', anchor: 'start' }));
    out.push(D.text(X(1045), Y(-660) + 12, 'above ≈ 1000 K', { size: 9, math: false, color: 'g', anchor: 'start' }));
    out.push(D.text(X(1550), Y(-640), '2C + O₂ → 2CO', { size: 10, math: false, color: 'g', anchor: 'start', bold: true }));
    return out;
  },
  label: 'Simplified Ellingham diagram' });

var figBlast = D.svg(460, 300, [
  D.path('M150,30 L120,150 L135,250 L245,250 L260,150 L230,30 Z', { color: 'k', w: 2.2 }),
  D.rect(135, 230, 110, 20, { color: 'r', fill: 'soft', w: 0 }), D.rect(135, 214, 110, 16, { color: 'o', fill: 'soft', w: 0 }),
  lab(190, 241, 'molten iron', 'r', 9, { bold: true }), lab(190, 222, 'slag', 'o', 9, { bold: true }),
  D.arrow(190, 5, 190, 40, { color: 'k' }), lab(250, 12, 'ore + coke + limestone', 'k', 10, { anchor: 'start' }),
  D.arrow(160, 30, 140, 8, { color: 'm', head: 7 }), lab(132, 10, 'waste gases', 'm', 9, { anchor: 'end' }),
  D.arrow(80, 200, 128, 200, { color: 'g' }), D.arrow(300, 200, 252, 200, { color: 'g' }), lab(60, 188, 'hot air', 'g', 9),
  D.arrow(245, 240, 290, 260, { color: 'r', head: 7 }), D.arrow(135, 222, 95, 240, { color: 'o', head: 7 }), lab(70, 250, 'slag', 'o', 9), lab(300, 270, 'iron', 'r', 9),
  D.line(140, 75, 240, 75, { color: 'm', dash: '3 3', w: 1 }), D.line(124, 135, 256, 135, { color: 'm', dash: '3 3', w: 1 }),
  lab(275, 55, '500–800 K', 'b', 10, { anchor: 'start', bold: true }), lab(275, 69, '3Fe₂O₃ + CO → 2Fe₃O₄ + CO₂', 'k', 9, { anchor: 'start' }), lab(275, 81, 'Fe₃O₄ + 4CO → 3Fe + 4CO₂', 'k', 9, { anchor: 'start' }),
  lab(275, 105, '900–1500 K', 'o', 10, { anchor: 'start', bold: true }), lab(275, 119, 'C + CO₂ → 2CO', 'k', 9, { anchor: 'start' }), lab(275, 131, 'FeO + CO → Fe + CO₂', 'k', 9, { anchor: 'start' }), lab(275, 143, 'CaO + SiO₂ → CaSiO₃ (slag)', 'k', 9, { anchor: 'start' }),
  lab(330, 175, 'about 2170 K', 'r', 10, { anchor: 'start', bold: true }), lab(330, 189, 'C + O₂ → CO₂', 'k', 9, { anchor: 'start' }), lab(330, 201, 'FeO + C → Fe + CO', 'k', 9, { anchor: 'start' })
], 'Blast furnace');

var figHall = D.svg(420, 220, [
  D.path('M40,60 L40,190 L300,190 L300,60', { color: 'k', w: 4 }), D.path('M48,60 L48,182 L292,182 L292,60', { color: 'm', w: 3 }),
  D.rect(50, 150, 240, 30, { color: 'm', fill: 'soft', w: 0 }), lab(170, 166, 'molten aluminium', 'k', 10, { bold: true }),
  D.rect(50, 80, 240, 70, { color: 'o', fill: 'soft', w: 0 }), lab(170, 126, 'Al₂O₃ in molten cryolite (Na₃AlF₆) + CaF₂', 'o', 9), lab(170, 139, 'about 1173 K', 'o', 9),
  D.rect(90, 20, 40, 95, { color: 'k', fill: 'soft', w: 1.6 }), D.rect(210, 20, 40, 95, { color: 'k', fill: 'soft', w: 1.6 }), lab(170, 12, 'graphite anodes (+)', 'k', 10),
  D.circle(140, 100, 4, { color: 'g', w: 1.2 }), D.circle(146, 90, 3, { color: 'g', w: 1.2 }), D.circle(200, 98, 4, { color: 'g', w: 1.2 }), lab(170, 72, 'CO₂', 'g', 9),
  lab(315, 100, 'steel tank lined', 'm', 9, { anchor: 'start' }), lab(315, 112, 'with carbon', 'm', 9, { anchor: 'start' }), lab(315, 124, '= cathode (−)', 'm', 9, { anchor: 'start' }),
  lab(170, 206, 'cathode: Al³⁺ + 3e⁻ → Al    anode: C + 2O²⁻ → CO₂ + 4e⁻', 'k', 10)
], 'Hall–Héroult cell for aluminium');

var figCuRef = D.svg(380, 200, [
  D.path('M60,40 L60,170 L300,170 L300,40', { w: 2 }), D.rect(62, 65, 236, 103, { color: 'b', fill: 'soft', w: 0 }),
  D.rect(100, 30, 22, 110, { color: 'o', fill: 'soft', w: 1.6 }), D.rect(240, 30, 12, 110, { color: 'r', fill: 'soft', w: 1.6 }),
  lab(111, 20, 'impure Cu (+)', 'o', 10), lab(246, 20, 'pure Cu (−)', 'r', 10),
  D.arrow(140, 95, 225, 95, { color: 'm' }), lab(182, 85, 'Cu²⁺', 'm', 10),
  D.ellipse(111, 160, 30, 6, { color: 'k', fill: 'soft', w: 1 }), lab(111, 186, 'anode mud (Ag, Au, Pt, Se, Te)', 'm', 9),
  lab(200, 130, 'CuSO₄ + dil. H₂SO₄', 'b', 10)
], 'Electrolytic refining of copper');

var figZone = D.svg(440, 130, [
  D.rect(30, 55, 380, 26, { color: 'm', fill: 'soft', w: 1.6, r: 4 }), D.rect(170, 55, 40, 26, { color: 'r', fill: 'soft', w: 1.6 }),
  D.rect(165, 45, 50, 8, { color: 'o', fill: 'soft', w: 1.4 }), D.rect(165, 83, 50, 8, { color: 'o', fill: 'soft', w: 1.4 }), lab(190, 35, 'circular heater', 'o', 10),
  lab(190, 68, 'molten', 'r', 9, { bold: true }), lab(100, 68, 'pure (re-solidified)', 'g', 9), lab(300, 68, 'impure', 'k', 9),
  D.arrow(225, 105, 300, 105, { color: 'o' }), lab(262, 118, 'heater moves slowly', 'o', 9),
  lab(395, 40, 'impurities', 'p', 9), lab(395, 52, 'collect here', 'p', 9), D.arrow(395, 58, 400, 66, { color: 'p', head: 6 })
], 'Zone refining');

var figVapour = D.row([
  [D.svg(240, 90, [
    lab(35, 30, 'Ni (impure)', 'k', 10), D.arrow(70, 30, 160, 30, { color: 'm' }), lab(115, 18, '+ 4CO, 330–350 K', 'm', 9), lab(200, 30, 'Ni(CO)₄', 'o', 11, { bold: true }),
    D.arrow(200, 42, 200, 65, { color: 'm' }), lab(150, 56, '450–470 K', 'm', 9), lab(200, 78, 'Ni (pure) + 4CO', 'g', 10, { bold: true })], 'Mond process'), R`Mond process (nickel)`],
  [D.svg(240, 90, [
    lab(35, 30, 'Zr (impure)', 'k', 10), D.arrow(70, 30, 160, 30, { color: 'm' }), lab(115, 18, '+ 2I₂, heat', 'm', 9), lab(200, 30, 'ZrI₄ (vapour)', 'o', 11, { bold: true }),
    D.arrow(200, 42, 200, 65, { color: 'm' }), lab(130, 56, 'hot W filament, 1800 K', 'm', 9), lab(200, 78, 'Zr (pure) + 2I₂', 'g', 10, { bold: true })], 'van Arkel method'), R`van Arkel method (Zr, Ti)`]
]);

// ---------- chapter text ----------
JEE.book('chemistry', 'metallurgy', {
  intro: [
    R`Only a few unreactive metals, like gold and platinum, are found free in nature. Most metals occur combined with other elements as oxides, sulphides, carbonates and silicates. <b>Metallurgy</b> is the science and technology of extracting metals from their natural compounds and refining them.`,
    R`In this chapter we follow the journey from rock to pure metal: finding and concentrating the ore, converting it to an oxide, reducing it (using the thermodynamic tools of Ellingham diagrams, or electrolysis), and finally refining the crude metal.`,
    { fig: figSteps, cap: R`The general sequence of steps in extracting a metal.` }
  ],
  sections: [
    { h: R`Occurrence of metals: minerals and ores`, t: [0], blocks: [
      R`The naturally occurring compounds of metals, mixed with earthy impurities, are <b>minerals</b>. A mineral from which a metal can be extracted <b>profitably and conveniently</b> is an <b>ore</b>. So all ores are minerals, but not all minerals are ores. For example, aluminium occurs in many clays (minerals), but it is extracted only from bauxite (the ore).`,
      R`The unwanted earthy material (sand, rock, clay) mixed with the ore is called <b>gangue</b> or matrix.`,
      { table: { head: [R`Metal`, R`Ore`, R`Composition`], rows: [
        [R`Aluminium`, R`Bauxite; kaolinite (a clay)`, R`AlOₓ(OH)₃₋₂ₓ (0 < x < 1); [Al₂(OH)₄Si₂O₅]`],
        [R`Iron`, R`Haematite; magnetite; siderite; iron pyrites`, R`Fe₂O₃; Fe₃O₄; FeCO₃; FeS₂`],
        [R`Copper`, R`Copper pyrites; malachite; cuprite; copper glance`, R`CuFeS₂; CuCO₃·Cu(OH)₂; Cu₂O; Cu₂S`],
        [R`Zinc`, R`Zinc blende (sphalerite); calamine; zincite`, R`ZnS; ZnCO₃; ZnO`]] } },
      { ex: { q: R`Find the percentage of copper in copper pyrites, CuFeS₂ (Cu 63.5, Fe 55.85, S 32.07).`,
        steps: [R`M = 63.5 + 55.85 + 2 × 32.07 = 183.5 g/mol.`, R`% Cu = 63.5/183.5 × 100 = 34.6%.`], ans: R`≈ 34.6%` } },
      { tip: R`Iron pyrites (FeS₂) is not used as an ore of iron: its iron content is low and roasting it releases a lot of SO₂. It is a mineral, not an ore of iron.` },
      { check: { q: R`Why are all ores minerals, but not all minerals ores?`, ans: R`An ore is a mineral from which the metal can be extracted economically; many minerals have too little metal or are hard to process.` } }
    ] },

    { h: R`Concentration: hydraulic washing and magnetic separation`, t: [1], blocks: [
      R`Removing gangue from the ore is called <b>concentration</b>, dressing or benefaction. The method depends on the differences in physical properties between the ore and the gangue.`,
      { h3: R`Hydraulic washing (gravity separation)` },
      R`This uses a difference in density. The powdered ore is washed with an upward stream of running water: the lighter gangue particles are carried away, while the heavier ore particles stay behind. It suits heavy oxide ores such as haematite and tinstone (SnO₂), and native gold.`,
      { h3: R`Magnetic separation` },
      R`If either the ore or the gangue is magnetic, the powdered ore is carried on a conveyor belt over a magnetic roller. The magnetic part sticks to the roller longer and falls close to it, while the non-magnetic part is thrown further away.`,
      { fig: figMagnet, cap: R`Magnetite (Fe₃O₄) and chromite are magnetic; wolframite is separated from tinstone this way.` },
      { check: { q: R`Which physical property is used in hydraulic washing?`, ans: R`The difference in density (specific gravity) between ore and gangue.` } }
    ] },

    { h: R`Concentration: froth flotation`, t: [1], blocks: [
      R`<b>Froth flotation</b> is used for <b>sulphide ores</b> (ZnS, PbS, CuFeS₂). It works because sulphide particles are wetted preferentially by oil, while gangue particles are wetted by water.`,
      { fig: figFroth, cap: R`Air bubbles stabilised by the froth carry sulphide particles to the surface.` },
      { points: [R`<b>Collectors</b> (pine oil, fatty acids, xanthates) make the ore particles water-repellent so they attach to the bubbles.`, R`<b>Froth stabilisers</b> (cresols, aniline) keep the froth stable.`, R`<b>Depressants</b> stop one sulphide from frothing so two ores can be separated. NaCN depresses ZnS but lets PbS come into the froth (it forms the complex Na₂[Zn(CN)₄] on the ZnS surface).`] },
      { check: { q: R`What is the role of NaCN in separating PbS from ZnS by froth flotation?`, ans: R`It is a depressant: it stops ZnS from entering the froth, while PbS floats.` } }
    ] },

    { h: R`Concentration: leaching`, t: [1], blocks: [
      R`<b>Leaching</b> is a chemical method: the ore is dissolved in a suitable reagent that does not dissolve the gangue.`,
      { h3: R`Leaching of bauxite (Bayer process)` },
      R`Bauxite usually contains SiO₂, iron oxides and TiO₂. It is digested with concentrated NaOH at 473–523 K and 35–36 bar. Al₂O₃ dissolves as sodium aluminate (and SiO₂ as silicate), leaving the iron oxides behind:`,
      { points: [R`Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) → 2Na[Al(OH)₄](aq)`, R`The aluminate is neutralised by CO₂ (or seeded with fresh hydrated alumina): 2Na[Al(OH)₄] + CO₂ → Al₂O₃·xH₂O↓ + 2NaHCO₃.`, R`The hydrated alumina is filtered, dried and heated at 1470 K to give pure Al₂O₃.`] },
      { h3: R`Leaching of silver and gold` },
      R`Silver and gold are leached with dilute NaCN or KCN in the presence of air (see the cyanide process below). Low-grade copper ores are leached with acid or bacteria.`,
      { check: { q: R`Why does bauxite dissolve in NaOH but the iron oxide impurity does not?`, ans: R`Al₂O₃ is amphoteric and dissolves as aluminate; Fe₂O₃ is basic and stays undissolved.` } }
    ] },

    { h: R`Conversion to oxide: calcination and roasting`, t: [2], blocks: [
      R`Reducing an oxide is easier than reducing a carbonate or sulphide, so the concentrated ore is first converted to the oxide.`,
      { table: { head: [R``, R`Calcination`, R`Roasting`], rows: [
        [R`What happens`, R`Heating in limited air or absence of air`, R`Heating in a regular supply of air`],
        [R`Temperature`, R`Below the melting point`, R`Below the melting point`],
        [R`Used for`, R`Carbonate and hydrated oxide ores`, R`Sulphide ores`],
        [R`Removes`, R`CO₂, water, volatile matter`, R`S (as SO₂), As, Sb`],
        [R`Examples`, R`ZnCO₃ → ZnO + CO₂; CaCO₃·MgCO₃ → CaO + MgO + 2CO₂; Fe₂O₃·xH₂O → Fe₂O₃ + xH₂O`, R`2ZnS + 3O₂ → 2ZnO + 2SO₂; 2PbS + 3O₂ → 2PbO + 2SO₂; 2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂`]] } },
      R`Roasting is done in a reverberatory furnace. The SO₂ produced is used to make sulphuric acid. For copper, the iron in the ore is removed as slag with silica (FeO + SiO₂ → FeSiO₃); a <b>flux</b> combines with gangue to form a fusible <b>slag</b>.`,
      { ex: { q: R`How many litres of SO₂ at STP are formed when 97.4 g of ZnS is roasted? How much ZnO is obtained?`,
        steps: [R`2ZnS + 3O₂ → 2ZnO + 2SO₂; 97.4 g ZnS = 1 mol.`, R`1 mol ZnO = 81.4 g and 1 mol SO₂ = 22.4 L.`], ans: R`22.4 L SO₂; 81.4 g ZnO` } },
      { check: { q: R`Calcination or roasting: which is used for zinc blende, and which for calamine?`, ans: R`Zinc blende (ZnS): roasting. Calamine (ZnCO₃): calcination.` } }
    ] },

    { h: R`Thermodynamic principles: Gibbs energy and Ellingham diagrams`, t: [3], blocks: [
      R`The reduction of an oxide by a reducing agent is feasible when the Gibbs energy change is negative: ΔG = ΔH − TΔS < 0. Think of it as two reactions coupled together: the oxide losing oxygen (MₓO → xM + ½O₂, with +ΔG) and the reducing agent gaining it (C + ½O₂ → CO, with −ΔG). The sum must be negative.`,
      { derive: R`Slope of an Ellingham line`, steps: [
        R`For the formation of an oxide, per mole of O₂: \(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\). This is a straight line against T with slope \(-\Delta S^\circ\).`,
        R`For \(2M(s) + O_2(g) \to 2MO(s)\), a gas is used up, so \(\Delta S^\circ < 0\) and the line slopes <b>upwards</b>: oxides become less stable at high T.`,
        R`For \(2C(s) + O_2(g) \to 2CO(g)\), one mole of gas gives two, so \(\Delta S^\circ > 0\) and the line slopes <b>downwards</b>: CO becomes more stable at high T.`,
        R`For \(C + O_2 \to CO_2\), \(\Delta S \approx 0\): the line is nearly flat. For \(2CO + O_2 \to 2CO_2\), \(\Delta S < 0\): it slopes upwards.`
      ] },
      R`An <b>Ellingham diagram</b> plots ΔG° for the formation of oxides (per mole of O₂) against temperature. A metal (or C, CO) whose line lies <b>lower</b> can reduce the oxide of any line lying above it at that temperature, because the difference gives a negative ΔG° for the reduction.`,
      { fig: figEll, cap: R`Approximate ΔG° lines for several oxides. The C → CO line slopes down and crosses the metal-oxide lines at high temperature.` },
      { ex: { q: R`Using ΔG°(2C + O₂ → 2CO) = −221 − 0.179T and ΔG°(2Fe + O₂ → 2FeO) = −544 + 0.142T kJ, find ΔG° for 2FeO + 2C → 2Fe + 2CO at 1200 K.`,
        steps: [R`At 1200 K: C→CO: −221 − 215 = −436 kJ; Fe→FeO: −544 + 170 = −374 kJ.`, R`ΔG° = −436 − (−374) = −62 kJ < 0, so the reduction is feasible.`, R`It becomes feasible when the lines cross: −221 − 0.179T = −544 + 0.142T, so T ≈ 1006 K.`], ans: R`−62 kJ; feasible above ≈ 1000 K` } },
      { points: [R`A metal can reduce any oxide whose line lies above its own (thermite: Al reduces Cr₂O₃ and Fe₂O₃).`, R`Kinks in lines appear at melting and especially boiling points of the metal, where the entropy change is larger.`, R`Limitations: the diagram tells us only whether reduction is feasible, not how fast (kinetics); it assumes reactants and products are in equilibrium.`] },
      { adv: R`Why can't aluminium oxide be reduced by carbon economically? The C → CO line crosses the Al₂O₃ line only above about 2300 K. Such temperatures are too costly, and carbon would form aluminium carbide. So Al is extracted by electrolysis.` },
      { check: { q: R`Why does the line for 2C + O₂ → 2CO slope downwards?`, ans: R`The number of gas molecules increases (1 → 2), so ΔS° is positive and ΔG° becomes more negative with temperature.` } }
    ] },

    { h: R`Extraction of iron: the blast furnace`, t: [3], blocks: [
      R`Iron oxides (haematite, magnetite) are concentrated and calcined/roasted, then reduced in a <b>blast furnace</b> with coke and limestone, using a blast of hot air from the bottom.`,
      { fig: figBlast, cap: R`In the lower, hottest part carbon reduces FeO; higher up CO is the reducing agent.` },
      R`At lower temperatures (500–800 K) the CO → CO₂ line lies below the iron oxide line, so CO is the reducing agent. Higher up the temperature (900–1500 K) lets carbon itself reduce FeO and CO₂ is converted back to CO. Limestone decomposes to CaO, which removes silica as calcium silicate slag. Slag is lighter and floats on the molten iron, protecting it from oxidation.`,
      { table: { head: [R`Form of iron`, R`Carbon content`, R`Properties`], rows: [
        [R`Pig iron`, R`about 4%`, R`hard, brittle; from the blast furnace`],
        [R`Cast iron`, R`about 3%`, R`pig iron melted with scrap and coke; very hard and brittle`],
        [R`Wrought iron`, R`< 0.2%`, R`purest; malleable; made by oxidising impurities in a furnace lined with haematite`],
        [R`Steel`, R`0.2–1.5%`, R`alloys with Cr, Ni, Mn etc.`]] } },
      R`Wrought iron reaction: Fe₂O₃ + 3C → 2Fe + 3CO. Limestone is added as a flux, and sulphur, silicon and phosphorus are oxidised into the slag.`,
      { check: { q: R`What is the role of limestone in the blast furnace?`, ans: R`It decomposes to CaO, a flux that removes silica as slag (CaSiO₃).` } }
    ] },

    { h: R`Extraction of copper: self-reduction`, t: [3], blocks: [
      R`Copper pyrites is concentrated by froth flotation and roasted to give Cu₂S and FeS. Iron oxide is removed as slag in a furnace with silica: FeO + SiO₂ → FeSiO₃. The molten mixture of Cu₂S with a little FeS is called <b>copper matte</b>.`,
      R`Carbon cannot reduce a sulphide: CS₂ is less stable than the metal sulphide (its ΔfG° is positive), so carbon cannot take the sulphur away. Instead, the matte is placed in a <b>silica-lined (Bessemer) converter</b> with a blast of air, which turns part of the sulphide into oxide:`,
      { points: [R`2FeS + 3O₂ → 2FeO + 2SO₂; FeO + SiO₂ → FeSiO₃ (remaining iron removed as slag).`, R`2Cu₂S + 3O₂ → 2Cu₂O + 2SO₂`, R`<b>Self-reduction:</b> 2Cu₂O + Cu₂S → 6Cu + SO₂ (sulphide reduces the oxide).`] },
      R`The copper produced looks blistered, because SO₂ escapes as it solidifies: it is called <b>blister copper</b> (about 98% pure). Copper oxide ore (Cu₂O) can be reduced directly with coke: Cu₂O + C → 2Cu + CO, because the Cu₂O line lies high in the Ellingham diagram.`,
      { check: { q: R`What is copper matte?`, ans: R`A molten mixture of Cu₂S with some FeS formed in the furnace.` } }
    ] },

    { h: R`Extraction of zinc from zinc oxide`, t: [3], blocks: [
      R`Zinc blende is roasted and calamine calcined to ZnO. The oxide is mixed with powdered coke and heated to about 1673 K in a fireclay retort: ZnO + C → Zn + CO.`,
      R`Zinc boils at 1180 K, so at this temperature it distils off as vapour and is condensed (and collected by rapid chilling). Because zinc leaves as a gas, the reaction is pulled forward. The crude zinc is refined by distillation or electrolysis.`,
      { tip: R`On the Ellingham diagram, the C → CO line crosses the ZnO line at about 1260 K (with our simple numbers), so coke reduces ZnO only above roughly this temperature. Industrial retorts run hotter to make it fast.` },
      { check: { q: R`Why is zinc collected by distillation during its extraction?`, ans: R`At the reduction temperature (~1673 K) zinc (bp 1180 K) is a vapour, so it is condensed separately.` } }
    ] },

    { h: R`Electrochemical principles of metallurgy`, t: [4], blocks: [
      R`For very reactive metals (Na, Mg, Al) whose oxides are too stable for carbon, the oxide or chloride is reduced by electrolysis. The link to thermodynamics is:`,
      { derive: R`Gibbs energy and cell potential`, open: true, steps: [R`\[\Delta G^\circ = -nFE^\circ\]`, R`A reduction is feasible (ΔG° < 0) only if E° of the overall reaction is positive. If E° is negative, an external voltage larger than |E°| must be applied.`, R`More reactive metals have more negative reduction potentials, so they are hard to reduce.`] },
      R`Electrolysis can also be used in displacement: a more reactive metal reduces the ions of a less reactive one, e.g. Cu²⁺(aq) + Fe(s) → Cu(s) + Fe²⁺(aq) (recovering copper from leached solutions).`,
      { h3: R`Extraction of chlorine from brine` },
      R`2Cl⁻(aq) + 2H₂O(l) → 2OH⁻(aq) + H₂(g) + Cl₂(g), ΔG° = +422 kJ. So E° = −422000/(2 × 96485) ≈ −2.2 V, and an external EMF greater than 2.2 V is needed (more in practice because of overpotential).`,
      { ex: { q: R`For a reaction with n = 3 and E° = +1.5 V, find ΔG°.`,
        steps: [R`ΔG° = −nFE° = −3 × 96485 × 1.5 J.`, R`= −434 kJ.`], ans: R`≈ −434 kJ (feasible)` } },
      { check: { q: R`A reduction has E° = −0.5 V. Is it spontaneous?`, ans: R`No. ΔG° = −nFE° is positive; an external voltage above 0.5 V is needed.` } }
    ] },

    { h: R`Extraction of aluminium: Hall–Héroult process`, t: [4], blocks: [
      R`Purified alumina (from the Bayer process) is dissolved in molten <b>cryolite</b> (Na₃AlF₆) with some CaF₂. This lowers the melting point (Al₂O₃ alone melts above 2300 K) to about 1173 K and makes the melt a better conductor.`,
      { fig: figHall, cap: R`The carbon-lined steel tank is the cathode; graphite rods are the anodes.` },
      { points: [R`Cathode: Al³⁺(melt) + 3e⁻ → Al(l)`, R`Anode: C(s) + O²⁻(melt) → CO(g) + 2e⁻; C(s) + 2O²⁻(melt) → CO₂(g) + 4e⁻`, R`Overall: 2Al₂O₃ + 3C → 4Al + 3CO₂`] },
      R`The oxygen released at the anode burns the carbon anodes away, so they must be replaced regularly (about 0.5 kg of carbon per kg of aluminium in practice). The process uses huge amounts of electricity.`,
      { ex: { q: R`How long must a cell carrying 100 000 A run to produce 1 kg of aluminium?`,
        steps: [R`n(Al) = 1000/27 = 37.04 mol; charge = 37.04 × 3 × 96485 = 1.072 × 10⁷ C.`, R`t = Q/I = 1.072 × 10⁷ / 10⁵ = 107 s.`], ans: R`≈ 107 s (about 1.8 minutes)` } },
      { ex: { q: R`From the overall equation, what mass of carbon is burnt (theoretically) per kg of aluminium?`,
        steps: [R`2Al₂O₃ + 3C → 4Al + 3CO₂: 3 × 12 = 36 g C per 4 × 27 = 108 g Al.`, R`1000 × 36/108 = 333 g.`], ans: R`≈ 0.33 kg (more in practice, as some CO forms and anodes oxidise in air)` } },
      { check: { q: R`State two roles of cryolite in the extraction of aluminium.`, ans: R`It lowers the melting point of the electrolyte and increases its electrical conductivity.` } }
    ] },

    { h: R`The cyanide process for silver and gold`, t: [5], blocks: [
      R`Silver and gold (often present in low concentration in their ores) are extracted by <b>leaching with dilute NaCN or KCN</b> in the presence of air. Oxygen oxidises the metal, which dissolves as a stable cyanide complex:`,
      { points: [R`4Au(s) + 8CN⁻(aq) + 2H₂O(l) + O₂(g) → 4[Au(CN)₂]⁻(aq) + 4OH⁻(aq)`, R`4Ag(s) + 8CN⁻(aq) + 2H₂O(l) + O₂(g) → 4[Ag(CN)₂]⁻(aq) + 4OH⁻(aq)`, R`The metal is then recovered by <b>displacement with zinc</b>: 2[Au(CN)₂]⁻(aq) + Zn(s) → [Zn(CN)₄]²⁻(aq) + 2Au(s)`] },
      R`Here zinc acts as the reducing agent. Silver from argentite (Ag₂S) is leached similarly: Ag₂S + 4NaCN → 2Na[Ag(CN)₂] + Na₂S.`,
      { ex: { q: R`What mass of zinc is needed to recover 197 g (1 mol) of gold from [Au(CN)₂]⁻?`,
        steps: [R`2[Au(CN)₂]⁻ + Zn → [Zn(CN)₄]²⁻ + 2Au: 1 mol Zn per 2 mol Au.`, R`0.5 × 65.4 = 32.7 g.`], ans: R`32.7 g` } },
      { check: { q: R`What is the role of O₂ in the cyanide process?`, ans: R`It oxidises Au (or Ag) to Au⁺ so that it can form the soluble [Au(CN)₂]⁻ complex.` } }
    ] },

    { h: R`Refining: distillation and liquation`, t: [6], blocks: [
      R`The metal obtained by reduction still contains impurities. <b>Refining</b> gives a high-purity metal; the method depends on the metal and its impurities.`,
      { points: [R`<b>Distillation:</b> for metals with low boiling points, like zinc and mercury. The impure metal is evaporated and the pure metal collected as the distillate.`, R`<b>Liquation:</b> for low-melting metals like tin (also Pb, Bi). The impure metal is placed on a sloping hearth and heated just above its melting point: the metal melts and flows down, leaving higher-melting impurities behind.`, R`<b>Poling:</b> stirring molten copper (or tin) with green wood poles; the hydrocarbons released reduce any oxide back to the metal.`] },
      { check: { q: R`Which refining method suits mercury?`, ans: R`Distillation (it has a low boiling point).` } }
    ] },

    { h: R`Refining: electrolytic refining`, t: [6], blocks: [
      R`The impure metal is made the <b>anode</b>, a thin strip of pure metal the <b>cathode</b>, and a solution of a salt of the same metal is the electrolyte. On passing current, the metal dissolves from the anode and pure metal deposits on the cathode: Anode M → Mⁿ⁺ + ne⁻; Cathode Mⁿ⁺ + ne⁻ → M.`,
      { fig: figCuRef, cap: R`More reactive impurities (Fe, Zn) stay in solution; less reactive ones (Ag, Au, Pt) fall as anode mud.` },
      R`Copper, zinc, nickel, silver, tin and gold are refined in this way. For zinc, the anode is impure zinc and the electrolyte is acidified ZnSO₄.`,
      { ex: { q: R`What mass of copper is deposited at the cathode by a current of 2 A in 1 hour?`,
        steps: [R`Q = 2 × 3600 = 7200 C; n(e⁻) = 7200/96485 = 0.0746 mol.`, R`Cu²⁺ + 2e⁻ → Cu: 0.0373 mol × 63.5 = 2.37 g.`], ans: R`≈ 2.37 g` } },
      { check: { q: R`Why do Ag and Au collect in the anode mud during copper refining?`, ans: R`They are less reactive than copper, so they are not oxidised at the anode and fall off as metal.` } }
    ] },

    { h: R`Refining: zone refining`, t: [6], blocks: [
      R`<b>Zone refining</b> is based on the fact that impurities are more soluble in the melt than in the solid metal. A circular heater moves slowly along a rod of impure metal. A thin molten zone moves with it: as the heater leaves, the pure metal crystallises, and the impurities move along with the molten zone to the end.`,
      { fig: figZone, cap: R`Repeating the process many times gives extremely pure metal, and the impure end is cut off.` },
      R`It is done in an inert-gas atmosphere and gives semiconductor-grade (very high purity) <b>silicon, germanium, boron, gallium and indium</b>.`,
      { h3: R`Chromatographic methods` },
      R`Column chromatography separates elements present in small amounts and those with similar properties: the mixture is adsorbed on a column of Al₂O₃ and eluted with a solvent, each component moving at its own speed.`,
      { check: { q: R`Which elements are purified by zone refining?`, ans: R`Semiconductors such as Si, Ge, B, Ga and In.` } }
    ] },

    { h: R`Refining: vapour-phase refining`, t: [6], blocks: [
      R`The metal is converted into a volatile compound, which is collected and then decomposed to give the pure metal. Two conditions are needed: the metal must form a volatile compound with a suitable reagent, and the compound must decompose easily.`,
      { fig: figVapour, cap: R`The Mond process for nickel and the van Arkel method for zirconium and titanium.` },
      { points: [R`<b>Mond process (Ni):</b> Ni + 4CO → Ni(CO)₄ at 330–350 K; the volatile carbonyl decomposes at 450–470 K to give pure Ni.`, R`<b>van Arkel method (Zr, Ti):</b> the crude metal is heated with iodine in a vacuum to form the volatile iodide, which decomposes on a white-hot tungsten filament (about 1800 K): ZrI₄ → Zr + 2I₂. It removes oxygen and nitrogen impurities, which are harmful in these metals.`] },
      { table: { head: [R`Metal`, R`Refining method`], rows: [[R`Zn, Hg`, R`distillation`], [R`Sn, Pb, Bi`, R`liquation`], [R`Cu, Zn, Ni, Ag, Au`, R`electrolytic`], [R`Si, Ge, B, Ga, In`, R`zone refining`], [R`Ni`, R`Mond process`], [R`Zr, Ti`, R`van Arkel`]] } },
      { check: { q: R`Name the method used to refine (a) nickel (b) zirconium.`, ans: R`(a) Mond process (b) van Arkel method.` } }
    ] },

    { h: R`Uses of aluminium, copper, zinc and iron`, t: [0], blocks: [
      { points: [
        R`<b>Aluminium:</b> foils for wrapping, kitchen utensils, electrical cables (light and a good conductor), alloys for aircraft (duralumin), paints, and as a reducing agent (thermite welding).`,
        R`<b>Copper:</b> electrical wires, water pipes, alloys: brass (Cu + Zn), bronze (Cu + Sn), coinage.`,
        R`<b>Zinc:</b> galvanising iron, batteries, alloys (brass), zinc dust as a reducing agent (e.g. in the cyanide process).`,
        R`<b>Iron:</b> cast iron for stoves, pipes and railway sleepers; wrought iron for anchors, wires and bolts; steel (nickel steel for cables and automobiles, chrome steel for cutting tools).`
      ] },
      { check: { q: R`Name the metal used to galvanise iron.`, ans: R`Zinc.` } }
    ] }
  ],
  summary: [
    R`Ore: a mineral from which a metal is extracted profitably. Gangue is the earthy impurity.`,
    R`Concentration: hydraulic washing (density), magnetic separation, froth flotation (sulphides; NaCN depresses ZnS), leaching (Bayer process for bauxite; cyanide for Ag/Au).`,
    R`Calcination (carbonates, limited air) vs roasting (sulphides, excess air).`,
    R`Ellingham diagram: ΔG° vs T per mol O₂; slope = −ΔS°. A lower line reduces an oxide above it. C → CO slopes down.`,
    R`Iron: blast furnace (CO at 500–800 K, C above 900 K; CaO flux). Copper: matte + Bessemer converter; self-reduction 2Cu₂O + Cu₂S → 6Cu + SO₂. Zinc: ZnO + C at 1673 K, distilled.`,
    R`ΔG° = −nFE°. Aluminium: Hall–Héroult, Al₂O₃ in molten cryolite; anode carbon burns away.`,
    R`Cyanide process: Au/Ag + CN⁻ + O₂ → [M(CN)₂]⁻; Zn displaces the metal.`,
    R`Refining: distillation (Zn, Hg), liquation (Sn), electrolytic (Cu; anode mud), zone refining (Si, Ge), Mond (Ni), van Arkel (Zr, Ti), chromatography.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §18.2 Occurrence and Preparation of the Representative Metals`, url: 'https://openstax.org/books/chemistry-2e/pages/18-2-occurrence-and-preparation-of-the-representative-metals' },
    { t: R`OpenStax Chemistry 2e, §19.1 Occurrence, Preparation, and Properties of Transition Metals`, url: 'https://openstax.org/books/chemistry-2e/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
    { t: R`Wikipedia: Ellingham diagram`, url: 'https://en.wikipedia.org/wiki/Ellingham_diagram' },
    { t: R`Wikipedia: Froth flotation`, url: 'https://en.wikipedia.org/wiki/Froth_flotation' },
    { t: R`Wikipedia: Hall–Héroult process`, url: 'https://en.wikipedia.org/wiki/Hall%E2%80%93H%C3%A9roult_process' },
    { t: R`Wikipedia: Blast furnace`, url: 'https://en.wikipedia.org/wiki/Blast_furnace' },
    { t: R`Wikipedia: Zone melting`, url: 'https://en.wikipedia.org/wiki/Zone_melting' }
  ]
});
})();
