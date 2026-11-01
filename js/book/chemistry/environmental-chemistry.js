// Book chapter: Environmental Chemistry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold, raw: o.raw }); }
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 10, math: false, bold: true }) : ''); }

// ---------- figures ----------
var figLayers = D.svg(420, 220, [
  D.rect(60, 150, 200, 50, { color: 'g', fill: 'soft', w: 1.2 }), lab(160, 175, 'troposphere (0–10 km)', 'g', 11, { bold: true }),
  D.rect(60, 50, 200, 100, { color: 'b', fill: 'soft', w: 1.2 }), lab(160, 70, 'stratosphere (10–50 km)', 'b', 11, { bold: true }),
  D.rect(60, 95, 200, 22, { color: 'p', fill: 'soft', w: 1.4 }), lab(160, 106, 'ozone layer', 'p', 10, { bold: true }),
  D.rect(60, 15, 200, 35, { color: 'm', fill: 'soft', w: 1.2 }), lab(160, 33, 'mesosphere and above', 'm', 10),
  D.line(40, 205, 280, 205, { w: 2.4 }), lab(160, 215, 'Earth’s surface', 'k', 9),
  lab(275, 175, 'weather, air we breathe;', 'g', 9, { anchor: 'start' }), lab(275, 188, 'smog, gaseous pollutants', 'g', 9, { anchor: 'start' }),
  lab(275, 100, 'O₃ absorbs harmful', 'p', 9, { anchor: 'start' }), lab(275, 113, 'UV radiation', 'p', 9, { anchor: 'start' }),
  D.arrow(330, 20, 300, 92, { color: 'o', w: 1.6 }), lab(335, 16, 'UV from Sun', 'o', 9, { anchor: 'start' })
], 'Layers of the atmosphere');

var figSmog = D.svg(500, 150, [
  box(5, 20, 70, 34, 'NO, HC', 'k'), D.arrow(75, 37, 100, 37, { color: 'm' }), lab(87, 25, 'O₂', 'm', 9),
  box(100, 20, 55, 34, 'NO₂', 'o'), D.arrow(155, 37, 185, 37, { color: 'm' }), lab(170, 25, 'hν', 'o', 9),
  box(185, 20, 70, 34, 'NO + O', 'k'), D.arrow(255, 37, 285, 37, { color: 'm' }), lab(270, 25, '+ O₂', 'm', 9),
  box(285, 20, 50, 34, 'O₃', 'b'), D.arrow(335, 37, 365, 37, { color: 'm' }), lab(350, 25, '+ HC', 'm', 9),
  box(365, 12, 130, 50, '', 'r'), lab(430, 28, 'HCHO, acrolein,', 'r', 10, { bold: true }), lab(430, 44, 'PAN (eye irritants)', 'r', 10, { bold: true }),
  D.path('M310,54 C310,100 140,100 130,58', { color: 'g', w: 1.6, dash: '4 3' }), D.arrow(131, 66, 129, 56, { color: 'g', head: 7 }),
  lab(220, 104, 'O₃ + NO → NO₂ + O₂ (cycle)', 'g', 10),
  lab(250, 135, 'HC = unburnt hydrocarbons from vehicles; needs sunlight, warm dry air', 'm', 9)
], 'Formation of photochemical smog');

var figOzone = D.svg(420, 190, [
  lab(210, 14, 'CF₂Cl₂ + UV → •CF₂Cl + Cl•', 'k', 11, { bold: true }),
  D.circle(120, 105, 26, { color: 'g', fill: 'soft', w: 1.8 }), lab(120, 106, 'Cl•', 'g', 13, { bold: true }),
  D.circle(300, 105, 26, { color: 'o', fill: 'soft', w: 1.8 }), lab(300, 106, 'ClO•', 'o', 13, { bold: true }),
  D.path('M146,95 C190,55 230,55 274,95', { color: 'r', w: 2 }), D.arrow(266, 88, 276, 96, { color: 'r', head: 8 }), lab(210, 52, '+ O₃ → + O₂', 'r', 11, { bold: true }),
  D.path('M274,117 C230,155 190,155 146,117', { color: 'b', w: 2 }), D.arrow(154, 124, 144, 116, { color: 'b', head: 8 }), lab(210, 162, '+ O → + O₂', 'b', 11, { bold: true }),
  lab(210, 184, 'one Cl atom destroys many thousands of O₃ molecules', 'm', 9)
], 'Catalytic destruction of ozone by chlorine');

var figGreen = D.svg(440, 210, [
  D.path('M122,210 A110,110 0 0 1 318,210 Z', { color: 'g', fill: 'soft', w: 1.8 }), lab(220, 190, 'Earth', 'g', 12, { bold: true }),
  D.path('M20,100 C120,60 320,60 420,100', { color: 'b', w: 2, dash: '6 4' }), lab(432, 22, 'greenhouse gases', 'b', 10, { anchor: 'end', bold: true }), lab(432, 36, '(CO₂, CH₄, N₂O, CFCs, H₂O)', 'b', 9, { anchor: 'end' }),
  D.arrow(40, 10, 150, 150, { color: 'o', w: 2.2 }), lab(52, 12, 'sunlight (visible, UV)', 'o', 10, { anchor: 'start' }),
  D.arrow(250, 150, 290, 88, { color: 'r', w: 2 }), D.arrow(290, 88, 330, 150, { color: 'r', w: 2, dash: '4 3' }), lab(338, 122, 'IR re-emitted and', 'r', 9, { anchor: 'start' }), lab(338, 134, 'trapped (warming)', 'r', 9, { anchor: 'start' }),
  D.arrow(200, 150, 200, 30, { color: 'm', w: 1.4, dash: '3 3' }), lab(206, 40, 'some IR escapes', 'm', 9, { anchor: 'start' })
], 'The greenhouse effect');

var figPH = D.svg(460, 110, [
  '<defs><linearGradient id="phg" x1="0" x2="1"><stop offset="0" stop-color="#d7263d"/><stop offset="0.5" stop-color="#e9d44c"/><stop offset="0.55" stop-color="#4caf50"/><stop offset="1" stop-color="#3f51b5"/></linearGradient></defs>',
  '<rect x="30" y="40" width="400" height="18" rx="4" fill="url(#phg)" fill-opacity="0.8"/>',
  [0, 2, 4, 6, 7, 8, 10, 12, 14].map(function (v) { var x = 30 + v / 14 * 400; return D.line(x, 58, x, 64, { w: 1.2 }) + lab(x, 74, String(v), 'm', 9); }).join(''),
  D.arrow(30 + 5.6 / 14 * 400, 20, 30 + 5.6 / 14 * 400, 38, { color: 'b', head: 7 }), lab(30 + 5.6 / 14 * 400, 12, 'normal rain 5.6', 'b', 10, { bold: true }),
  D.arrow(30 + 4.2 / 14 * 400, 92, 30 + 4.2 / 14 * 400, 66, { color: 'r', head: 7 }), lab(30 + 4.2 / 14 * 400 - 10, 102, 'acid rain: pH < 5.6 (often 4–5)', 'r', 10, { bold: true }),
  lab(30 + 7 / 14 * 400 + 30, 30, 'neutral 7', 'g', 9)
], 'pH of rain');

var figBOD = D.svg(440, 120, [
  D.rect(30, 40, 75, 24, { color: 'g', fill: 'soft', w: 1.4 }), D.rect(105, 40, 180, 24, { color: 'o', fill: 'soft', w: 1.4 }), D.rect(285, 40, 130, 24, { color: 'r', fill: 'soft', w: 1.4 }),
  lab(67, 52, 'clean', 'g', 10, { bold: true }), lab(195, 52, 'moderately polluted', 'o', 10, { bold: true }), lab(350, 52, 'highly polluted', 'r', 10, { bold: true }),
  lab(105, 78, '5 ppm', 'm', 10), lab(285, 78, '17 ppm', 'm', 10), lab(220, 18, 'BOD of water', 'k', 11, { bold: true }),
  lab(220, 104, 'more organic waste → more O₂ used by bacteria → higher BOD, less dissolved oxygen', 'm', 9)
], 'BOD scale');

// ---------- chapter text ----------
JEE.book('chemistry', 'environmental-chemistry', {
  intro: [
    R`Environmental chemistry studies the origin, transport, reactions and effects of chemical species in the environment. Human activities (burning fuels, industry, farming, waste) add substances to air, water and soil faster than nature can remove them. This is <b>pollution</b>.`,
    R`This chapter covers air pollution in the troposphere (gases, particulates, smog) and stratosphere (ozone depletion), acid rain and global warming, water and soil pollution, and finally strategies for control, including green chemistry.`
  ],
  sections: [
    { h: R`Environmental pollution and pollutants`, t: [0], blocks: [
      R`<b>Environmental pollution</b> is an undesirable change in the physical, chemical or biological characteristics of air, water and soil that harms living things. A <b>pollutant</b> is any substance that causes this harm; it can be a solid, liquid or gas, produced in higher concentration than normal.`,
      { points: [R`<b>Biodegradable</b> pollutants (sewage, vegetable waste) are broken down by microorganisms; they cause harm only in excess.`, R`<b>Non-biodegradable</b> pollutants (DDT, plastics, heavy metals like Hg and Pb, radioactive waste) are not easily broken down and can accumulate in food chains.`, R`<b>Primary pollutants</b> stay in the form in which they were emitted (NO, SO₂); <b>secondary pollutants</b> form by reactions among primary ones (PAN, O₃ in smog).`] },
      { fig: figLayers, cap: R`The lowest layer, the troposphere, is where we live; the stratosphere above it contains the protective ozone layer.` },
      { check: { q: R`Classify DDT and sewage as biodegradable or non-biodegradable.`, ans: R`DDT: non-biodegradable. Sewage: biodegradable.` } }
    ] },

    { h: R`Gaseous air pollutants`, t: [0], blocks: [
      { table: { head: [R`Pollutant`, R`Main sources`, R`Effects`], rows: [
        [R`<b>Oxides of sulphur</b> (SO₂, SO₃)`, R`burning sulphur-containing coal and oil; smelting`, R`respiratory disease, asthma, eye irritation; SO₂ → SO₃ (catalysed by particulates) gives acid rain; damages plants`],
        [R`<b>Oxides of nitrogen</b> (NO, NO₂)`, R`N₂ + O₂ → 2NO at high temperature in car engines and power plants; lightning`, R`NO₂ is a brown, toxic gas; damages lungs and leaves; key to photochemical smog and acid rain`],
        [R`<b>Carbon monoxide</b>`, R`incomplete combustion (vehicle exhaust, stoves)`, R`binds haemoglobin 300× more strongly than O₂, forming carboxyhaemoglobin; headache, death at high levels`],
        [R`<b>Carbon dioxide</b>`, R`burning fossil fuels, deforestation`, R`greenhouse gas → global warming`],
        [R`<b>Hydrocarbons</b>`, R`incomplete combustion of fuel in vehicles`, R`carcinogenic; contribute to photochemical smog`]] } },
      R`Reactions: 2SO₂ + O₂ → 2SO₃ (slow, but catalysed by particulate matter and by O₃ and H₂O₂); 2NO + O₂ → 2NO₂ (fast when NO reacts with O₃: NO + O₃ → NO₂ + O₂).`,
      { ex: { q: R`A power station burns 1 tonne of coal containing 2% sulphur. What mass of SO₂ is released?`,
        steps: [R`S in coal = 20 kg; S + O₂ → SO₂, 32 g S gives 64 g SO₂.`, R`20 × 64/32 = 40 kg.`], ans: R`40 kg SO₂` } },
      { check: { q: R`Why is CO more dangerous than CO₂ at the same concentration?`, ans: R`CO binds strongly to haemoglobin and blocks oxygen transport; CO₂ does not.` } }
    ] },

    { h: R`Particulate pollutants`, t: [0], blocks: [
      R`<b>Particulates</b> are minute solid particles or liquid droplets suspended in air: from vehicle exhaust, factories, burning, construction and dust storms.`,
      { points: [R`<b>Viable</b> particulates are tiny living organisms: bacteria, fungi, moulds, algae, pollen (cause allergies and diseases).`, R`<b>Non-viable</b> particulates: <b>smoke</b> (from burning organic matter, e.g. cigarette smoke, oil smoke), <b>dust</b> (fine solid particles, over 1 μm, from crushing and grinding), <b>mists</b> (liquid droplets from sprays, condensing vapours; e.g. herbicide and insecticide mists), <b>fumes</b> (condensed vapours of metals, organic solvents).`] },
      R`Their effect depends on size. Particles larger than 5 μm stay in the nose and throat; smaller ones (PM₂.₅, below 2.5 μm) reach deep into the lungs, causing asthma, bronchitis and cancer. Lead particulates from leaded petrol damage the nervous system. Particulates also reduce visibility (fog, smog) and catalyse the oxidation of SO₂.`,
      { check: { q: R`Which particulates are most dangerous to the lungs?`, ans: R`Very fine particles (below about 2.5–5 μm), which go deep into the lungs.` } }
    ] },

    { h: R`Smog: classical and photochemical`, t: [0], blocks: [
      R`<b>Smog</b> (smoke + fog) is the most common form of air pollution in cities. There are two types:`,
      { table: { head: [R``, R`Classical smog`, R`Photochemical smog`], rows: [
        [R`Climate`, R`cool, humid`, R`warm, dry, sunny`],
        [R`Components`, R`smoke, fog, SO₂`, R`NOₓ, O₃, hydrocarbons, PAN, aldehydes`],
        [R`Chemical nature`, R`reducing (SO₂)`, R`oxidising (O₃, NO₂)`],
        [R`Example`, R`London (1952)`, R`Los Angeles`],
        [R`Effects`, R`bronchitis, breathing problems`, R`eye irritation, headache, cracking of rubber, damage to plants`]] } },
      R`<b>Formation of photochemical smog:</b> fossil fuel burning releases hydrocarbons and NO. NO is oxidised to NO₂, which absorbs sunlight and splits: NO₂ + hν → NO + O. The oxygen atoms form ozone: O + O₂ ⇌ O₃. Ozone reacts with NO (regenerating NO₂) and with the unburnt hydrocarbons to form formaldehyde, acrolein and <b>peroxyacetyl nitrate (PAN)</b>, which are powerful eye irritants.`,
      { fig: figSmog, cap: R`Sunlight drives the chain of reactions that produces ozone and the irritants of photochemical smog.` },
      R`<b>Control:</b> catalytic converters in cars (reduce NOₓ and hydrocarbons), and certain plants (Pinus, Juniperus, Quercus, Pyrus, Vitis) that metabolise NO₂.`,
      { check: { q: R`Is photochemical smog oxidising or reducing? Name one oxidant in it.`, ans: R`Oxidising; ozone (or NO₂, PAN).` } }
    ] },

    { h: R`Formation and breakdown of ozone`, t: [1], blocks: [
      R`In the stratosphere, UV radiation splits oxygen molecules, and the atoms combine with O₂ to form ozone:`,
      { derive: R`Natural ozone cycle`, open: true, steps: [R`O₂(g) + UV → O(g) + O(g)`, R`O(g) + O₂(g) ⇌ O₃(g)`, R`O₃ is broken down by UV back to O₂ and O, so there is a steady balance between formation and decomposition.`] },
      R`The ozone layer absorbs most of the Sun's harmful UV radiation (200–315 nm), protecting life on Earth. This balance is upset by pollutants that destroy ozone faster than it forms.`,
      { check: { q: R`Why is ozone in the stratosphere beneficial but in the troposphere harmful?`, ans: R`Stratospheric O₃ absorbs harmful UV; tropospheric O₃ is a toxic oxidant in smog.` } }
    ] },

    { h: R`The ozone hole and the role of CFCs`, t: [1], blocks: [
      R`<b>Chlorofluorocarbons (CFCs, Freons)</b> such as CF₂Cl₂ were used in refrigerators, air conditioners, aerosol sprays and plastic foams. They are very unreactive, so they drift into the stratosphere, where UV breaks them up into chlorine radicals, which destroy ozone in a <b>chain reaction</b>:`,
      { derive: R`Chain destruction of ozone`, open: true, steps: [R`CF₂Cl₂(g) + UV → •CF₂Cl(g) + Cl•(g)`, R`Cl•(g) + O₃(g) → ClO•(g) + O₂(g)`, R`ClO•(g) + O(g) → Cl•(g) + O₂(g)`, R`The Cl• radical is regenerated, so one chlorine atom can destroy many thousands of ozone molecules.`] },
      { fig: figOzone, cap: R`The chlorine atom acts as a catalyst in a cycle that converts O₃ and O into O₂.` },
      R`<b>The ozone hole over Antarctica:</b> in winter, special <b>polar stratospheric clouds</b> form. On their surfaces, chlorine reservoir compounds are converted into active forms: ClO• + NO₂ → ClONO₂; ClONO₂ + H₂O → HOCl + HNO₃; ClONO₂ + HCl → Cl₂ + HNO₃. When the sunlight returns in spring (September–October), HOCl and Cl₂ are split into Cl atoms (HOCl + hν → •OH + Cl•; Cl₂ + hν → 2Cl•), which rapidly destroy ozone.`,
      R`<b>Effects of ozone depletion:</b> more UV reaches the Earth, causing skin cancer, cataracts, sunburn, damage to plants and plankton, and reduced crop yields. The <b>Montreal Protocol</b> (1987) phased out CFCs, and the ozone layer is slowly recovering.`,
      { check: { q: R`Why can one Cl atom destroy many ozone molecules?`, ans: R`It acts as a catalyst: it is regenerated in the ClO• + O step and can start the cycle again.` } }
    ] },

    { h: R`Acid rain`, t: [2], blocks: [
      R`Normal rainwater has pH about <b>5.6</b>, because dissolved CO₂ forms the weak acid H₂CO₃: H₂O + CO₂ ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻. When the pH falls below 5.6, it is called <b>acid rain</b>. It is caused by oxides of sulphur and nitrogen from burning fossil fuels:`,
      { points: [R`2SO₂(g) + O₂(g) + 2H₂O(l) → 2H₂SO₄(aq)`, R`4NO₂(g) + O₂(g) + 2H₂O(l) → 4HNO₃(aq)`, R`Acids may fall as rain, fog, snow, or as dry particles (dry deposition).`] },
      { fig: figPH, cap: R`Rain is naturally slightly acidic; acid rain is more acidic than pH 5.6.` },
      R`<b>Effects:</b> acid rain dissolves nutrients from the soil (harming plants and forests), releases toxic metals like Al and Hg into lakes (killing fish), corrodes metal structures, and attacks marble and limestone buildings: CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂. The <b>Taj Mahal</b> is damaged by acid rain from industries around Agra. Control: use low-sulphur fuels, scrubbers in power plants, catalytic converters, and liming of lakes.`,
      { ex: { q: R`Estimate the pH of rainwater that contains 1.0 × 10⁻⁵ M H₂SO₄ (fully dissociated).`,
        steps: [R`[H⁺] = 2 × 1.0 × 10⁻⁵ = 2.0 × 10⁻⁵ M.`, R`pH = −log(2.0 × 10⁻⁵) = 4.7.`], ans: R`pH ≈ 4.7 (acid rain)` } },
      { check: { q: R`Why is rainwater slightly acidic even in an unpolluted atmosphere?`, ans: R`Dissolved CO₂ forms the weak acid H₂CO₃, giving pH about 5.6.` } }
    ] },

    { h: R`Greenhouse effect and global warming`, t: [2], blocks: [
      R`About 75% of the solar energy reaching the Earth is absorbed by its surface, which warms up and radiates energy back as <b>infrared</b> (heat) radiation. Gases such as CO₂, CH₄, N₂O, CFCs, O₃ and water vapour absorb this IR radiation and re-emit part of it back to the surface, keeping the Earth warm, just as the glass of a greenhouse traps heat. This is the <b>greenhouse effect</b>. Without it, the average temperature of the Earth would be about −18 °C instead of about 15 °C.`,
      { fig: figGreen, cap: R`Sunlight passes through the atmosphere; outgoing infrared is partly trapped by greenhouse gases.` },
      R`Human activities have greatly increased the concentration of greenhouse gases: CO₂ has risen from about 280 ppm before industrialisation to over 420 ppm today, mainly from burning fossil fuels and deforestation. Methane comes from rice paddies, cattle, landfills and coal mines. The result is <b>global warming</b>: rising average temperatures, melting polar ice and glaciers, rising sea levels, changing rainfall, and the spread of diseases like malaria and dengue.`,
      { tip: R`CO₂ is the most important greenhouse gas by amount, but molecule for molecule methane (about 30× over 100 years) and CFCs (thousands of times) are far more powerful.` },
      { check: { q: R`Name four greenhouse gases.`, ans: R`CO₂, CH₄, N₂O, CFCs (also O₃ and water vapour).` } }
    ] },

    { h: R`Water pollution: causes`, t: [3], blocks: [
      { points: [
        R`<b>Pathogens:</b> bacteria and other organisms from domestic sewage and animal excreta (e.g. Escherichia coli, Streptococcus faecalis) cause gastrointestinal diseases.`,
        R`<b>Organic wastes:</b> leaves, grass, sewage and food waste are decomposed by aerobic bacteria, which use up the dissolved oxygen. Fertiliser run-off (nitrates, phosphates) causes excessive growth of algae: <b>eutrophication</b>. When the algae die and decompose, the oxygen is depleted further and fish die.`,
        R`<b>Chemical pollutants:</b> heavy metals (Cd, Hg, Pb, Ni) from industry damage the kidneys, liver and nervous system (mercury caused Minamata disease); petroleum products, PCBs (polychlorinated biphenyls, carcinogenic), detergents (whose alkylbenzene sulphonates are biodegradable, but phosphate builders cause eutrophication), and pesticides.`
      ] },
      { check: { q: R`What is eutrophication?`, ans: R`Nutrient (phosphate, nitrate) enrichment of water that causes excessive algal growth, depleting dissolved oxygen and killing aquatic life.` } }
    ] },

    { h: R`Dissolved oxygen and biochemical oxygen demand`, t: [3], blocks: [
      R`The amount of oxygen dissolved in water (<b>DO</b>) is vital for aquatic life. Cold water can hold up to about 10 ppm of dissolved oxygen; if it falls below about 6 ppm, the growth of fish is inhibited. Oxygen enters water from the air and from photosynthesis, and is removed by respiration and by the decomposition of organic matter.`,
      R`The <b>biochemical oxygen demand (BOD)</b> is the amount of oxygen required by bacteria to break down the organic matter in a certain volume of water (usually measured over 5 days at 20 °C, in ppm or mg/L). It is a measure of organic pollution:`,
      { fig: figBOD, cap: R`Clean water has a BOD below 5 ppm; highly polluted water 17 ppm or more.` },
      { ex: { q: R`A water sample is diluted 5 times with oxygen-saturated water. The DO falls from 8.0 to 2.0 mg/L in 5 days at 20 °C. Find the BOD of the original sample.`,
        steps: [R`Oxygen used in the diluted sample = 8.0 − 2.0 = 6.0 mg/L.`, R`Original sample was diluted 5 times: BOD = 6.0 × 5 = 30 mg/L.`], ans: R`30 ppm: highly polluted` } },
      { check: { q: R`What does a high BOD indicate?`, ans: R`A large amount of biodegradable organic matter, i.e. heavily polluted water with low dissolved oxygen.` } }
    ] },

    { h: R`International standards for drinking water`, t: [3], blocks: [
      R`Drinking water must be free of pathogens and harmful levels of chemicals. Some limits (approximate, as set by international standards):`,
      { table: { head: [R`Substance`, R`Limit`, R`Problem if exceeded`], rows: [
        [R`Fluoride`, R`about 1 ppm (≤ 1.5)`, R`below 1 ppm: tooth decay; above 2 ppm: mottling (brown teeth); above 10 ppm: harmful to bones`],
        [R`Lead`, R`50 ppb`, R`damages kidneys, liver, nervous system`],
        [R`Sulphate`, R`< 500 ppm`, R`laxative effect`],
        [R`Nitrate`, R`50 ppm`, R`methaemoglobinaemia ("blue baby" syndrome)`],
        [R`Other metals (mg/L)`, R`Fe 0.2, Mn 0.05, Al 0.2, Cu 3.0, Zn 5.0, Cd 0.005`, R`toxicity, taste, staining`]] } },
      R`Fluoride converts the hydroxyapatite of tooth enamel, Ca₅(PO₄)₃OH, into harder fluorapatite, Ca₅(PO₄)₃F, which is why fluoride is added to some water and toothpastes in small amounts.`,
      { ex: { q: R`A 1 kg water sample contains 2 mg of lead. Express this in ppm and compare with the standard.`,
        steps: [R`2 mg in 10⁶ mg of water = 2 ppm = 2000 ppb.`, R`Standard is 50 ppb, so it is 40 times the limit.`], ans: R`2 ppm: far too high` } },
      { check: { q: R`What happens if the fluoride level in drinking water exceeds 2 ppm?`, ans: R`Brown mottling of teeth; at much higher levels bones become harmful.` } }
    ] },

    { h: R`Soil pollution: pesticides and herbicides`, t: [4], blocks: [
      R`<b>Pesticides</b> protect crops from pests: insecticides, fungicides and rodenticides. Early organochlorine insecticides like <b>DDT</b>, aldrin and dieldrin are non-biodegradable and fat-soluble. They pass up the food chain and accumulate in fatty tissue, reaching high concentrations in top predators: <b>biomagnification</b>. DDT thinned birds' eggshells and is now banned or restricted.`,
      R`Newer organophosphates and carbamates are more biodegradable but are severe nerve poisons and more toxic to humans. Pests also develop resistance to them.`,
      R`<b>Herbicides</b> kill weeds: sodium chlorate (NaClO₃), sodium arsenite (Na₃AsO₃) and many organic compounds. Most are toxic to mammals; some cause birth defects. Arsenic compounds persist in soil.`,
      { check: { q: R`What is biomagnification?`, ans: R`The increase in concentration of a non-biodegradable pollutant (like DDT) at each step up a food chain.` } }
    ] },

    { h: R`Industrial and domestic waste`, t: [4], blocks: [
      R`<b>Industrial solid waste</b> includes fly ash (from thermal power plants), slag (steel industry), toxic metals and chemicals, and non-biodegradable materials. Fly ash and slag are now used to make cement; but toxic wastes must be handled carefully, as they can leach into soil and groundwater.`,
      R`<b>Domestic waste</b> is <b>biodegradable</b> (food, paper, garden waste) or <b>non-biodegradable</b> (plastics, glass, metal scrap). Plastics are the biggest problem: they persist for centuries, block drains, harm animals that swallow them, and release toxic gases (like dioxins) when burnt in the open.`,
      { check: { q: R`Why is open burning of plastics harmful?`, ans: R`It releases toxic gases such as dioxins and furans and adds particulates to air.` } }
    ] },

    { h: R`Strategies to control pollution`, t: [5], blocks: [
      { points: [
        R`<b>Waste management:</b> reduce, reuse and recycle; separate biodegradable and non-biodegradable waste; compost the biodegradable part; use sanitary landfills; incinerate only under controlled conditions.`,
        R`<b>Air:</b> catalytic converters, electrostatic precipitators and scrubbers in factories; clean fuels (CNG, low-sulphur diesel); renewable energy.`,
        R`<b>Water:</b> treat sewage and industrial effluents before discharge; reduce phosphates in detergents; control fertiliser use.`,
        R`<b>Soil:</b> integrated pest management, biopesticides, organic farming, proper disposal of hazardous waste.`
      ] },
      { check: { q: R`Name a device used to reduce pollutants from car exhausts.`, ans: R`A catalytic converter.` } }
    ] },

    { h: R`Green chemistry`, t: [5], blocks: [
      R`<b>Green chemistry</b> is the design of chemical products and processes that reduce or eliminate the use and generation of hazardous substances. It aims to prevent pollution at its source rather than clean it up later. Key principles include:`,
      { points: [R`<b>Prevent waste</b> rather than treat it.`, R`<b>Atom economy:</b> design reactions so that as many reactant atoms as possible end up in the product.`, R`<b>Safer solvents:</b> use water or supercritical CO₂ instead of toxic organic solvents.`, R`Use catalysts instead of stoichiometric reagents; design energy-efficient processes (room temperature and pressure).`, R`Use renewable feedstocks and design products that degrade after use.`] },
      { derive: R`Atom economy`, open: true, steps: [R`\[\text{atom economy} = \frac{\text{molar mass of desired product}}{\text{total molar mass of all reactants}} \times 100\%\]`, R`Addition reactions (e.g. hydrogenation, hydration of ethene) have 100% atom economy; substitution and elimination reactions waste atoms in by-products.`] },
      { ex: { q: R`Find the atom economy for making ethyl ethanoate: CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O.`,
        steps: [R`Reactants: 60 + 46 = 106 g/mol. Product: 88 g/mol.`, R`88/106 × 100 = 83%.`], ans: R`≈ 83%` } },
      R`<b>Examples in daily life:</b> liquid CO₂ with a suitable detergent replaces tetrachloroethene (Cl₂C=CCl₂) in dry cleaning; H₂O₂ with a catalyst bleaches paper instead of chlorine; ethanal is made by oxidising ethene with an ionic catalyst in water (90% yield).`,
      { check: { q: R`What is the atom economy of an addition reaction like CH₂=CH₂ + H₂O → C₂H₅OH?`, ans: R`100%: all reactant atoms end up in the product.` } }
    ] }
  ],
  summary: [
    R`Pollutants: biodegradable vs non-biodegradable; primary vs secondary.`,
    R`Gaseous pollutants: SO₂ (acid rain, respiratory), NOₓ (smog), CO (binds haemoglobin), CO₂ (greenhouse), hydrocarbons.`,
    R`Particulates: viable (pollen, bacteria) and non-viable (smoke, dust, mist, fumes); fine particles reach the lungs.`,
    R`Classical smog: cool, humid, reducing (SO₂). Photochemical smog: warm, sunny, oxidising (O₃, NO₂, PAN, aldehydes).`,
    R`Ozone layer destroyed by Cl• from CFCs in a catalytic chain; Antarctic hole from polar stratospheric clouds in spring.`,
    R`Acid rain: pH < 5.6, from H₂SO₄ and HNO₃; damages marble (Taj Mahal), forests, lakes. Greenhouse gases: CO₂, CH₄, N₂O, CFCs, O₃, H₂O.`,
    R`Water: pathogens, organic waste (BOD: clean < 5 ppm, polluted ≥ 17 ppm), eutrophication, heavy metals. F⁻ ≈ 1 ppm; Pb 50 ppb; NO₃⁻ 50 ppm.`,
    R`Soil: pesticides (DDT, biomagnification), herbicides. Green chemistry: prevent waste, atom economy = M(product)/ΣM(reactants) × 100%, safer solvents.`
  ],
  refs: [
    { t: R`Wikipedia: Photochemical smog`, url: 'https://en.wikipedia.org/wiki/Smog' },
    { t: R`Wikipedia: Ozone depletion`, url: 'https://en.wikipedia.org/wiki/Ozone_depletion' },
    { t: R`Wikipedia: Acid rain`, url: 'https://en.wikipedia.org/wiki/Acid_rain' },
    { t: R`Wikipedia: Greenhouse effect`, url: 'https://en.wikipedia.org/wiki/Greenhouse_effect' },
    { t: R`Wikipedia: Biochemical oxygen demand`, url: 'https://en.wikipedia.org/wiki/Biochemical_oxygen_demand' },
    { t: R`Wikipedia: Green chemistry`, url: 'https://en.wikipedia.org/wiki/Green_chemistry' }
  ]
});
})();
