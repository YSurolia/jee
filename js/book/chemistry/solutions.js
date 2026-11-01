// Book chapter: Solutions. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figIdeal = D.plot({
  w: 400, h: 220, x: [0, 1], y: [0, 90], xlabel: 'x (benzene)', ylabel: 'p (mm Hg)', mathLabels: false, xticks: [[0.5, '0.5']], yticks: [[22, '22'], [75, '75']],
  fns: [{ f: function (x) { return 22 + 53 * x; }, color: 'k', label: 'total P', lx: 0.42, ly: 52, math: false }, { f: function (x) { return 75 * x; }, color: 'b', dash: '6 4', label: 'p(benzene)', lx: 0.72, ly: 44, math: false }, { f: function (x) { return 22 * (1 - x); }, color: 'o', dash: '6 4', label: 'p(toluene)', lx: 0.05, ly: 12, math: false }],
  label: 'Vapour pressure of an ideal solution of benzene and toluene'
});

var figDev = D.row([
  [D.plot({ w: 220, h: 180, x: [0, 1], y: [0, 100], xlabel: 'x_A', ylabel: 'P', xticks: [], yticks: [], fns: [{ f: function (x) { return 30 + 50 * x + 45 * x * (1 - x); }, color: 'r' }, { f: function (x) { return 30 + 50 * x; }, color: 'm', dash: '4 4', w: 1 }], texts: [{ x: 0.5, y: 85, s: 'above Raoult line', size: 10, color: 'r' }], label: 'positive deviation' }), 'positive deviation (ethanol + water)'],
  [D.plot({ w: 220, h: 180, x: [0, 1], y: [0, 100], xlabel: 'x_A', ylabel: 'P', xticks: [], yticks: [], fns: [{ f: function (x) { return 30 + 50 * x - 45 * x * (1 - x); }, color: 'b' }, { f: function (x) { return 30 + 50 * x; }, color: 'm', dash: '4 4', w: 1 }], texts: [{ x: 0.5, y: 28, s: 'below Raoult line', size: 10, color: 'b' }], label: 'negative deviation' }), 'negative deviation (acetone + chloroform)']
]);

var figBPFP = D.plot({
  w: 420, h: 230, x: [-6, 6], y: [0, 6], xlabel: 'T', ylabel: 'vapour pressure', mathLabels: false, xticks: [[-2.6, "T_f'"], [-1.6, 'T_f'], [2.6, 'T_b'], [3.7, "T_b'"]], yticks: [[4.4, '1 atm']], noOrigin: true,
  fns: [{ f: function (t) { return t < -1.6 ? 1.1 * Math.exp(0.38 * (t + 1.6)) : 1.1 * Math.exp(0.32 * (t + 1.6)); }, from: -6, to: 5.5, color: 'b', label: 'pure solvent', lx: 4.1, ly: 5.6, math: false },
    { f: function (t) { return 0.8 * Math.exp(0.32 * (t + 1.6)); }, from: -2.6, to: 5.8, color: 'r', label: 'solution', lx: 4.4, ly: 3.4, math: false },
    { f: function (t) { return 1.1 * Math.exp(0.6 * (t + 1.6)); }, from: -6, to: -1.6, color: 'k', w: 1.6, label: 'solid solvent', lx: -5.8, ly: 0.65, math: false }],
  segs: [{ x1: -6, y1: 4.4, x2: 6, y2: 4.4, color: 'm', dash: '4 3', w: 1 }],
  label: 'A solute lowers the vapour pressure, raising the boiling point and lowering the freezing point'
});

var figOsmosis = D.svg(420, 200, [
  D.path('M60 40 L60 180 L360 180 L360 40', { color: 'k', w: 2 }), D.line(210, 60, 210, 180, { color: 'g', w: 3, dash: '6 4' }), D.text(210, 52, 'semipermeable membrane', { size: 11, color: 'g', math: false }),
  D.rect(62, 110, 146, 68, { color: 'b', fill: 'soft', w: 0.01 }), D.rect(212, 80, 146, 98, { color: 'p', fill: 'soft', w: 0.01 }),
  D.line(60, 110, 208, 110, { color: 'b', w: 1.4 }), D.line(212, 80, 360, 80, { color: 'p', w: 1.4 }),
  D.text(135, 145, 'pure solvent', { size: 12, math: false, color: 'b' }), D.text(285, 135, 'solution', { size: 12, math: false, color: 'p' }),
  D.arrow(170, 150, 250, 150, { color: 'o', w: 2.2, head: 8, label: 'solvent flows in', ly: 18, math: false, size: 11 }),
  D.arrow(385, 110, 385, 80, { color: 'm', w: 1.2, head: 6, both: true }), D.text(392, 96, 'h', { math: true, anchor: 'start' }), D.line(360, 110, 390, 110, { color: 'm', w: 0.8, dash: '3 3' }),
  D.arrow(285, 20, 285, 76, { color: 'r', w: 2, head: 8, label: 'π stops it', lx: 40, ly: -10, math: false, size: 11 })
], 'Osmosis and osmotic pressure');

// ---------- chapter text ----------
JEE.book('chemistry', 'solutions', {
  intro: [
    R`Sea water, blood, air, brass and soft drinks are all solutions. Many properties of solutions depend only on <b>how many</b> solute particles are present, not on what they are: this is why salt melts ice on roads, why antifreeze protects car radiators, and why a cucumber shrivels in brine.`,
    R`This chapter covers types of solutions and concentration units, solubility and Henry's law, vapour pressure and Raoult's law, ideal and non-ideal solutions and azeotropes, the four colligative properties, finding molar masses from them, and abnormal molar masses explained by the van 't Hoff factor.`
  ],
  sections: [
    { h: R`Types of solutions`, t: [0], blocks: [
      R`A <b>solution</b> is a homogeneous mixture of two or more substances. The component in the largest amount is usually the <b>solvent</b>; the others are <b>solutes</b>. A binary solution has two components.`,
      { table: { head: [R`Solvent`, R`Solute`, R`Example`], rows: [
        [R`Gas`, R`gas / liquid / solid`, R`air (O₂ in N₂) / water vapour in air / camphor in N₂`], [R`Liquid`, R`gas / liquid / solid`, R`O₂ in water, soda / ethanol in water / glucose or salt in water`], [R`Solid`, R`gas / liquid / solid`, R`H₂ in palladium / amalgam of mercury with sodium / brass, gold alloys`]] } },
      { check: { q: R`What kind of solution is brass?`, ans: R`A solid solution (zinc in copper).` } }
    ] },

    { h: R`Expressing concentration`, t: [0], blocks: [
      { table: { head: [R`Term`, R`Definition`], rows: [
        [R`Mass percentage (w/w)`, R`mass of component / mass of solution × 100`], [R`Volume percentage (v/v)`, R`volume of component / volume of solution × 100 (e.g. 10% ethanol)`], [R`Mass by volume (w/v)`, R`grams of solute per 100 mL of solution (medicine, pharmacy)`],
        [R`ppm`, R`parts of component per 10⁶ parts of solution (pollutants: 5.8 ppm O₂ in sea water)`], [R`Mole fraction x`, R`moles of component / total moles (Σx = 1)`], [R`Molarity M`, R`moles of solute per litre of solution (changes with temperature)`], [R`Molality m`, R`moles of solute per kg of solvent (independent of temperature)`]] } },
      { ex: { q: R`A solution contains 18 g of glucose (M = 180) in 180 g of water. Find the molality and the mole fraction of glucose.`,
        steps: [R`n(glucose) = 0.1 mol; mass of water 0.18 kg: m = 0.1/0.18.`, R`n(water) = 10 mol: x = 0.1/10.1.`], ans: R`m ≈ 0.556 mol/kg; x ≈ 0.0099` } },
      { check: { q: R`Why is molality preferred to molarity for colligative properties?`, ans: R`It is based on mass, so it does not change with temperature.` } }
    ] },

    { h: R`Solubility of solids in liquids`, t: [0], blocks: [
      R`<b>Solubility</b> is the maximum amount of a substance that dissolves in a given amount of solvent at a given temperature: the solution is then <b>saturated</b>, in dynamic equilibrium between dissolving and crystallising.`,
      { points: [R`<b>"Like dissolves like":</b> polar and ionic solutes dissolve in polar solvents (salt, sugar in water); non-polar solutes in non-polar solvents (naphthalene in benzene).`, R`<b>Temperature:</b> by Le Chatelier's principle, if dissolving is endothermic (most salts, ΔH_sol > 0), solubility rises with temperature; if exothermic, it falls (Ce₂(SO₄)₃, CaO).`, R`<b>Pressure</b> has almost no effect, since solids and liquids are incompressible.`] },
      { check: { q: R`Why does sugar dissolve better in hot tea than in cold?`, ans: R`Dissolving sugar is endothermic, so higher temperature increases its solubility.` } }
    ] },

    { h: R`Solubility of gases in liquids: Henry's law`, t: [0], blocks: [
      R`<b>Henry's law:</b> at a constant temperature, the solubility of a gas in a liquid is proportional to the partial pressure of the gas above the liquid. In terms of mole fraction: \[p = K_Hx\] where \(K_H\) is Henry's constant (larger \(K_H\) means lower solubility).`,
      { points: [R`Soft drinks are bottled under high CO₂ pressure; opening the bottle lowers the pressure and the gas bubbles out.`, R`Deep-sea divers breathe compressed air: extra N₂ dissolves in their blood; rising too fast releases bubbles ("the bends"). Air tanks are diluted with helium, which is less soluble.`, R`At high altitude, the low partial pressure of O₂ means less dissolved O₂ in blood (anoxia).`, R`Gases dissolve less in hot water (dissolving is exothermic): aquatic animals prefer cold water.`] },
      { ex: { q: R`If the Henry's law constant gives a solubility of 1.3 × 10⁻³ mol/L per atm for O₂ in water, how much O₂ (in mg/L) dissolves from air (p(O₂) = 0.21 atm)?`,
        steps: [R`c = 1.3 × 10⁻³ × 0.21 mol/L = 2.73 × 10⁻⁴ mol/L.`, R`× 32 g/mol × 1000.`], ans: R`≈ 8.7 mg/L` } },
      { check: { q: R`Does Henry's law hold for gases that react with water, like NH₃ or HCl?`, ans: R`No: they react with water, so their solubility is far higher than Henry's law predicts.` } }
    ] },

    { h: R`Vapour pressure of liquid solutions`, t: [1], blocks: [
      R`In a closed vessel, a liquid evaporates until its vapour reaches equilibrium with it; the pressure then is its <b>vapour pressure</b>. In a solution of two volatile liquids, both contribute to the vapour. If a <b>non-volatile</b> solute is dissolved, it takes up some of the surface, so fewer solvent molecules escape: the vapour pressure is lowered.`,
      { check: { q: R`Which has the higher vapour pressure: pure water or salt water at the same temperature?`, ans: R`Pure water.` } }
    ] },

    { h: R`Raoult's law`, t: [1], blocks: [
      R`<b>Raoult's law:</b> for a solution of volatile liquids, the partial vapour pressure of each component is its mole fraction times its vapour pressure as a pure liquid: \[p_1 = x_1p_1^\circ,\qquad p_2 = x_2p_2^\circ,\qquad P_{total} = p_1^\circ + (p_2^\circ - p_1^\circ)x_2\] The total pressure varies linearly with composition.`,
      { fig: figIdeal, cap: R`For an ideal solution, each partial pressure and the total pressure are straight lines against mole fraction.` },
      R`The vapour is richer in the more volatile component: its mole fraction in the vapour is \(y_1 = p_1/P_{total}\). This is the basis of fractional distillation.`,
      { ex: { q: R`Benzene (p° = 75 mm Hg) and toluene (p° = 22 mm Hg) are mixed in equal moles. Find the total vapour pressure and the mole fraction of benzene in the vapour.`,
        steps: [R`P = 0.5 × 75 + 0.5 × 22 = 48.5 mm Hg.`, R`y(benzene) = 37.5/48.5.`], ans: R`48.5 mm Hg; ≈ 0.77` } },
      { tip: R`Raoult's law is a special case of Henry's law with \(K_H = p^\circ\).` },
      { check: { q: R`In the vapour above an ideal solution, which component is enriched?`, ans: R`The more volatile one (higher p°).` } }
    ] },

    { h: R`Ideal solutions`, t: [2], blocks: [
      R`An <b>ideal solution</b> obeys Raoult's law over the whole range of compositions. This happens when the A–B attractions are about the same as A–A and B–B attractions. Then: \[\Delta_{mix}H = 0,\qquad\Delta_{mix}V = 0\] Examples: n-hexane + n-heptane, benzene + toluene, bromoethane + chloroethane.`,
      { check: { q: R`Is ΔS_mix zero for an ideal solution?`, ans: R`No: mixing increases disorder, ΔS_mix > 0 (which is why ideal solutions form spontaneously).` } }
    ] },

    { h: R`Non-ideal solutions: positive and negative deviations`, t: [2], blocks: [
      R`Most solutions are <b>non-ideal</b>: their vapour pressures differ from Raoult's law.`,
      { fig: figDev, cap: R`Positive deviation: vapour pressure above the Raoult line. Negative deviation: below it.` },
      { table: { head: [R``, R`Positive deviation`, R`Negative deviation`], rows: [
        [R`A–B attractions`, R`weaker than A–A, B–B`, R`stronger than A–A, B–B`], [R`Vapour pressure`, R`higher than predicted`, R`lower than predicted`], [R`ΔH_mix, ΔV_mix`, R`> 0 (absorbs heat), > 0`, R`< 0 (releases heat), < 0`],
        [R`Examples`, R`ethanol + water, ethanol + acetone, CS₂ + acetone`, R`acetone + chloroform, HNO₃ + water, phenol + aniline`]] } },
      R`In ethanol + acetone, acetone breaks up ethanol's hydrogen bonds, so molecules escape more easily (positive). In acetone + chloroform, a new hydrogen bond forms between them (Cl₃C–H···O=C), holding them more tightly (negative).`,
      { h3: R`Azeotropes` },
      R`Large deviations give <b>azeotropes</b>: mixtures that boil at a constant temperature with the same composition in liquid and vapour, so they cannot be separated by fractional distillation. Positive deviation gives a <b>minimum-boiling</b> azeotrope (95% ethanol + water, b.p. 351 K); negative deviation gives a <b>maximum-boiling</b> azeotrope (68% HNO₃ + water, b.p. 393.5 K).`,
      { check: { q: R`Why can't pure ethanol be made from dilute ethanol by fractional distillation alone?`, ans: R`It forms a minimum-boiling azeotrope at about 95% ethanol, which distils unchanged.` } }
    ] },

    { h: R`Colligative properties: relative lowering of vapour pressure`, t: [3], blocks: [
      R`<b>Colligative properties</b> depend only on the number of solute particles in a given amount of solvent, not on their nature. There are four: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, and osmotic pressure.`,
      { derive: R`Relative lowering of vapour pressure`, steps: [
        R`For a non-volatile solute (2) in solvent (1): \(p_1 = x_1p_1^\circ = (1 - x_2)p_1^\circ\).`,
        R`\[\frac{p_1^\circ - p_1}{p_1^\circ} = x_2 = \frac{n_2}{n_1 + n_2}\approx\frac{n_2}{n_1}\ \text{(dilute)}\]`,
        R`So \(\dfrac{\Delta p}{p^\circ} = \dfrac{w_2M_1}{M_2w_1}\), which gives the molar mass \(M_2\) of the solute.`
      ] },
      { ex: { q: R`The vapour pressure of water is 23.8 mm Hg at 25 °C. Find the vapour pressure of a solution of 18 g glucose in 180 g water.`,
        steps: [R`x(glucose) = 0.1/10.1 ≈ 0.0099.`, R`p = 23.8(1 − 0.0099).`], ans: R`≈ 23.56 mm Hg` } },
      { check: { q: R`Does relative lowering of vapour pressure depend on the temperature?`, ans: R`No: it equals the mole fraction of the solute.` } }
    ] },

    { h: R`Elevation of boiling point and depression of freezing point`, t: [3], blocks: [
      R`A liquid boils when its vapour pressure equals the external pressure. A solution has a lower vapour pressure, so it must be heated more: its boiling point is <b>raised</b>. It freezes at a <b>lower</b> temperature, since its vapour pressure meets that of the pure solid at a lower temperature.`,
      { fig: figBPFP, cap: R`The solution's vapour-pressure curve lies below the pure solvent's: it reaches 1 atm at a higher temperature (\(T_b' > T_b\)) and meets the solid's curve at a lower temperature (\(T_f' < T_f\)).` },
      R`For dilute solutions: \[\Delta T_b = K_b\,m,\qquad\Delta T_f = K_f\,m\] where m is the molality, and \(K_b\), \(K_f\) are the <b>ebullioscopic</b> and <b>cryoscopic</b> constants (molal elevation and depression constants), properties of the solvent: water \(K_b\) = 0.52, \(K_f\) = 1.86 K kg mol⁻¹; benzene 2.53 and 5.12.`,
      { ex: { q: R`Find the boiling point of a 0.1 m urea solution and the freezing point of a 0.1 m NaCl solution (complete dissociation).`,
        steps: [R`Urea: ΔT_b = 0.52 × 0.1 = 0.052 K.`, R`NaCl gives 2 ions: ΔT_f = 2 × 1.86 × 0.1 = 0.372 K.`], ans: R`373.202 K (100.052 °C); −0.372 °C` } },
      { adv: R`\(K_b = \dfrac{RT_b^2M_1}{1000\,\Delta_{vap}H}\) (with M₁ in g/mol and ΔH in J/mol): for water, 8.314 × 373² × 18/(1000 × 40 700) ≈ 0.51 K kg mol⁻¹.` },
      { check: { q: R`Why is ethylene glycol added to car radiators in cold countries?`, ans: R`It depresses the freezing point of water (antifreeze).` } }
    ] },

    { h: R`Osmosis and osmotic pressure`, t: [3], blocks: [
      R`<b>Osmosis:</b> when a solution and pure solvent are separated by a <b>semipermeable membrane</b> (which lets solvent but not solute pass), solvent flows into the solution. The extra pressure that must be applied to the solution to stop this flow is the <b>osmotic pressure</b> π.`,
      { fig: figOsmosis, cap: R`Solvent passes through the membrane into the solution, raising its level by h; applying a pressure π on the solution stops the flow.` },
      R`\[\pi = CRT = \frac{n_2}{V}RT\] (van 't Hoff equation; C in mol/L, R = 0.0821 L atm K⁻¹ mol⁻¹). Osmotic pressure is large even for dilute solutions, so it is the best method for finding the molar masses of proteins and polymers.`,
      { points: [R`<b>Isotonic</b> solutions have equal osmotic pressures (0.9% saline is isotonic with blood).`, R`A cell in a <b>hypertonic</b> solution (more concentrated) shrinks; in a <b>hypotonic</b> solution it swells and may burst.`, R`<b>Reverse osmosis:</b> applying a pressure greater than π drives solvent out of the solution, used to desalinate sea water.`] },
      { ex: { q: R`Find the osmotic pressure of a 0.1 M glucose solution at 300 K.`,
        steps: [R`π = 0.1 × 0.0821 × 300.`], ans: R`≈ 2.46 atm` } },
      { check: { q: R`Why do raisins swell when placed in water?`, ans: R`Water moves by osmosis into the more concentrated solution inside the raisin.` } }
    ] },

    { h: R`Molecular mass from colligative properties`, t: [4], blocks: [
      R`Each colligative property gives the molar mass of a non-volatile solute of mass \(w_2\) in solvent mass \(w_1\):`,
      { table: { head: [R`Property`, R`Molar mass`], rows: [
        [R`Relative lowering of VP`, R`\(M_2 = \dfrac{w_2M_1p^\circ}{w_1\Delta p}\)`], [R`Elevation of b.p.`, R`\(M_2 = \dfrac{1000\,K_bw_2}{\Delta T_bw_1}\) (w in g)`], [R`Depression of f.p.`, R`\(M_2 = \dfrac{1000\,K_fw_2}{\Delta T_fw_1}\)`], [R`Osmotic pressure`, R`\(M_2 = \dfrac{w_2RT}{\pi V}\)`]] } },
      { ex: { q: R`1 g of a protein in 100 mL of solution has an osmotic pressure of 0.0025 atm at 300 K. Find its molar mass.`,
        steps: [R`\(M = \dfrac{wRT}{\pi V} = \dfrac{1\times0.0821\times300}{0.0025\times0.1}\).`], ans: R`≈ 98 500 g/mol` } },
      { check: { q: R`Why is osmotic pressure preferred for finding the molar mass of polymers?`, ans: R`It gives measurable values even at the tiny molar concentrations of large molecules, at room temperature (no heating that could damage them).` } }
    ] },

    { h: R`Abnormal molar mass and the van 't Hoff factor`, t: [5], blocks: [
      R`Electrolytes dissociate in water (NaCl → Na⁺ + Cl⁻), producing more particles, so colligative properties are larger than expected and the calculated molar mass is too small. Some solutes associate (ethanoic acid forms dimers in benzene), giving fewer particles and too large a molar mass. Such values are <b>abnormal molar masses</b>.`,
      R`The <b>van 't Hoff factor</b> \[i = \frac{\text{observed colligative property}}{\text{calculated colligative property}} = \frac{\text{normal molar mass}}{\text{abnormal molar mass}}\] is included in all formulas: \(\Delta T_b = iK_bm\), \(\Delta T_f = iK_fm\), \(\pi = iCRT\), \(\Delta p/p^\circ = i\,x_2\).`,
      { points: [R`<b>Dissociation</b> into n particles with degree α: \(i = 1 + (n - 1)\alpha\). For complete dissociation, NaCl i = 2, K₂SO₄ i = 3.`, R`<b>Association</b> of n molecules into one: \(i = 1 - \alpha\left(1 - \dfrac1n\right)\). Ethanoic acid dimerising completely in benzene: i = ½.`] },
      { ex: { q: R`A 0.1 m solution of a weak acid HA freezes at −0.2046 °C (K_f = 1.86). Find its degree of dissociation.`,
        steps: [R`\(i = \dfrac{0.2046}{1.86\times0.1} = 1.1\).`, R`HA → H⁺ + A⁻ (n = 2): 1.1 = 1 + α.`], ans: R`α = 0.1 (10%)` } },
      { ex: { q: R`K₂SO₄ is 80% dissociated. Find i.`,
        steps: [R`n = 3: i = 1 + 2(0.8).`], ans: R`2.6` } },
      { check: { q: R`Which 0.1 m solution has the lowest freezing point: glucose, NaCl, CaCl₂ or AlCl₃?`, ans: R`AlCl₃ (i = 4, the most particles).` } }
    ] }
  ],
  summary: [
    R`Concentration: mass %, volume %, ppm, mole fraction, molarity (T-dependent), molality (T-independent).`,
    R`Solids: like dissolves like; solubility vs T depends on ΔH_sol. Gases: Henry's law p = K_Hx; less soluble when hot.`,
    R`Raoult: pᵢ = xᵢpᵢ°; ideal solutions ΔH_mix = ΔV_mix = 0.`,
    R`Positive deviation (weaker A–B; ΔH > 0; min-boiling azeotrope) vs negative (stronger A–B; ΔH < 0; max-boiling azeotrope).`,
    R`Colligative: Δp/p° = x₂; ΔT_b = K_bm; ΔT_f = K_fm; π = CRT (water K_b 0.52, K_f 1.86).`,
    R`Molar mass from each property; osmotic pressure best for polymers. Isotonic, hypertonic, hypotonic; reverse osmosis.`,
    R`van 't Hoff factor i: dissociation i = 1 + (n − 1)α; association i = 1 − α(1 − 1/n); multiply all colligative formulas by i.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §11.3 Solubility`, url: 'https://openstax.org/books/chemistry-2e/pages/11-3-solubility' },
    { t: R`OpenStax Chemistry 2e, §11.4 Colligative Properties`, url: 'https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties' },
    { t: R`Wikipedia: Raoult's law`, url: 'https://en.wikipedia.org/wiki/Raoult%27s_law' },
    { t: R`Wikipedia: Azeotrope`, url: 'https://en.wikipedia.org/wiki/Azeotrope' },
    { t: R`Wikipedia: Van 't Hoff factor`, url: 'https://en.wikipedia.org/wiki/Van_%27t_Hoff_factor' }
  ]
});
})();
