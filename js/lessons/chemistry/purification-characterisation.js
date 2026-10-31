// Lesson: Purification and Characterisation of Organic Compounds.
var R = String.raw;
JEE.lesson('chemistry', 'purification-characterisation', {
  theory: [
    { h: R`Why purify, and how do we know it's pure?`,
      body: [
        R`Organic compounds made in the lab or taken from plants are usually mixed with impurities. Before studying a compound we must purify it.`,
        R`A pure compound has a <b>sharp</b>, fixed melting point (for solids) or boiling point (for liquids). Impurities lower and widen the melting range.`,
        R`The method we choose depends on the property that separates the compound from the impurities: solubility, volatility or adsorption.`
      ],
      check: { q: R`A sample melts over a range of 110–118 °C instead of sharply. What does this suggest?`, ans: R`It is impure.` } },

    { h: R`Crystallisation, sublimation and distillation`,
      body: [
        R`<b>Crystallisation:</b> dissolve the solid in a minimum of hot solvent; on cooling, the pure compound crystallises out while the impurities stay dissolved. (Benzoic acid from hot water.)`,
        R`<b>Sublimation:</b> for solids that turn directly into vapour on heating: camphor, naphthalene, iodine, ammonium chloride.`,
        R`<b>Distillation:</b> <i>simple</i>, for liquids with very different boiling points (chloroform 61 °C and aniline 184 °C); <i>fractional</i>, for close boiling points (crude oil, acetone and methanol); <i>under reduced pressure</i>, for liquids that decompose at their normal boiling point (glycerol); <i>steam distillation</i>, for steam-volatile liquids that don't mix with water (aniline, essential oils).`
      ],
      analogy: R`Making clear salt crystals by evaporating sea water is a rough kind of crystallisation; the dirt is left behind.` },

    { h: R`Differential extraction and chromatography`,
      body: [
        R`<b>Differential extraction:</b> shake the aqueous mixture with an immiscible solvent (like ether) in which the compound is much more soluble. The compound moves into the organic layer, which is then separated using a separating funnel.`,
        R`<b>Chromatography</b> separates mixtures by how strongly each component sticks to a <b>stationary phase</b> while a <b>mobile phase</b> carries them along. Types: column, thin-layer (TLC) and paper chromatography.`,
        R`The <b>retardation factor</b> \(R_f = \dfrac{\text{distance moved by the compound}}{\text{distance moved by the solvent front}}\). Each compound has a characteristic \(R_f\) in a given solvent.`
      ],
      analogy: R`Draw a dot with a felt pen on filter paper and dip its edge in water. As the water climbs, the ink splits into coloured bands, because each dye travels at its own speed. That is paper chromatography.` },

    { h: R`Detecting elements (qualitative analysis)`,
      body: [
        R`<b>Carbon and hydrogen:</b> heat the compound with CuO. C becomes CO₂ (turns lime water milky) and H becomes water (turns anhydrous CuSO₄ blue).`,
        R`<b>Lassaigne's test:</b> fuse the compound with sodium metal. This converts covalent N, S and halogens into ionic NaCN, Na₂S and NaX, which can then be tested in water (the "sodium extract").`,
        R`<b>N:</b> boil with FeSO₄, then acidify; a <b>Prussian blue</b> colour. <b>S:</b> sodium nitroprusside gives violet; lead acetate gives a black precipitate. <b>N and S together:</b> blood-red colour with Fe³⁺ (from NaSCN). <b>Halogens:</b> boil with HNO₃, then add AgNO₃: white AgCl, pale yellow AgBr, yellow AgI. <b>P:</b> oxidise to phosphate, then add ammonium molybdate for a yellow precipitate.`
      ],
      mistake: R`Adding AgNO₃ before boiling the extract with HNO₃. If N or S is present, NaCN and Na₂S would also give precipitates with Ag⁺ and confuse the halogen test.` },

    { h: R`Estimating elements (quantitative analysis)`,
      body: [
        R`<b>Carbon and hydrogen (Liebig):</b> burn the compound; weigh the CO₂ and H₂O formed: \(\%C = \dfrac{12}{44}\times\dfrac{m_{CO_2}}{m}\times100\), \(\%H = \dfrac{2}{18}\times\dfrac{m_{H_2O}}{m}\times100\).`,
        R`<b>Nitrogen (Dumas):</b> convert N to N₂ gas and measure its volume. <b>Nitrogen (Kjeldahl):</b> convert N to NH₃ and titrate it with acid: \(\%N = \dfrac{1.4\times N\times V}{m}\). Kjeldahl doesn't work for nitro, azo or ring-N (pyridine) compounds.`,
        R`<b>Halogens (Carius):</b> heat with fuming HNO₃ and AgNO₃; weigh the AgX formed. <b>Sulphur:</b> convert to BaSO₄ and weigh. <b>Phosphorus:</b> weigh as Mg₂P₂O₇ or ammonium phosphomolybdate.`
      ] },

    { h: R`From percentages to formulae`,
      body: [
        R`Once the % of each element is known (oxygen is usually found by subtracting the rest from 100), find the <b>empirical formula</b>: divide each % by its atomic mass, divide by the smallest result, and convert to whole numbers.`,
        R`Then find the molar mass (for example, molar mass = 2 × vapour density) and the <b>molecular formula</b> = n × empirical formula, where n = molar mass ÷ empirical formula mass.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`How would you separate a mixture of chloroform (b.p. 61 °C) and aniline (b.p. 184 °C)?`,
      steps: [R`The boiling points differ by more than 100 °C.`, R`Chloroform distils off first, leaving aniline behind.`],
      ans: R`Simple distillation` },
    { level: 1, t: 1, q: R`In Lassaigne's test, what colour shows that nitrogen is present?`,
      steps: [R`N in the compound becomes NaCN, which forms ferrocyanide with FeSO₄, and then iron(III) ferrocyanide on acidifying.`],
      ans: R`Prussian blue` },
    { level: 1, t: 0, q: R`In a paper chromatogram, a spot travels 3 cm while the solvent front travels 8 cm. Find the \(R_f\) value.`,
      steps: [R`\(R_f = 3/8\).`],
      ans: R`0.375` },
    { level: 2, t: 2, q: R`In a Dumas estimation, 0.3 g of an organic compound gave 50 mL of N₂ at STP. Find the percentage of nitrogen.`,
      steps: [R`22,400 mL of N₂ at STP weighs 28 g, so 50 mL weighs \(\dfrac{28\times50}{22400} = 0.0625\) g.`, R`\(\%N = \dfrac{0.0625}{0.3}\times100\).`],
      ans: R`\(\approx 20.8\%\)` },
    { level: 3, t: 2, q: R`In a sulphur estimation, 0.468 g of a compound gave 0.668 g of BaSO₄. Find the percentage of sulphur. (BaSO₄ = 233)`,
      steps: [R`233 g of BaSO₄ contains 32 g of S.`, R`\(\%S = \dfrac{32}{233}\times\dfrac{0.668}{0.468}\times100\).`],
      ans: R`\(\approx 19.6\%\)` },
    { level: 3, t: 3, q: R`A compound contains C 54.5%, H 9.1% and the rest oxygen. Its molar mass is 88 g/mol. Find its molecular formula.`,
      steps: [R`O = 100 − 54.5 − 9.1 = 36.4%.`, R`C: 54.5/12 = 4.54; H: 9.1/1 = 9.1; O: 36.4/16 = 2.275. Divide by 2.275 to get 2 : 4 : 1.`, R`Empirical formula C₂H₄O (44); \(n = 88/44 = 2\).`],
      ans: R`C₄H₈O₂ (for example, ethyl acetate or butanoic acid)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Camphor is purified by:`,
      options: [R`sublimation`, R`distillation`, R`crystallisation`, R`chromatography`], correct: 0,
      solution: R`Camphor sublimes, turning directly from solid to vapour.` },
    { level: 1, type: 'mcq', q: R`A Prussian blue colour in Lassaigne's test shows the presence of:`,
      options: [R`sulphur`, R`nitrogen`, R`chlorine`, R`phosphorus`], correct: 1,
      solution: R`NaCN → ferrocyanide → Prussian blue.` },
    { level: 1, type: 'mcq', q: R`The coloured pigments of a leaf are best separated by:`,
      options: [R`distillation`, R`sublimation`, R`chromatography`, R`filtration`], correct: 2,
      solution: R`The pigments stick to the stationary phase to different extents.` },
    { level: 1, type: 'mcq', q: R`Aniline is purified by:`,
      options: [R`simple distillation`, R`sublimation`, R`crystallisation`, R`steam distillation`], correct: 3,
      solution: R`It is steam-volatile and doesn't mix with water.` },
    { level: 1, type: 'num', q: R`A spot moves 3 cm while the solvent front moves 8 cm. Find the \(R_f\) value.`,
      answer: 0.375, tol: 0.001, unit: '',
      solution: R`3/8 = 0.375.` },
    { level: 1, type: 'num', q: R`What percentage of the mass of CO₂ is carbon?`,
      answer: 27.27, tol: 0.05, unit: '%',
      solution: R`12/44 × 100 ≈ 27.27%.` },
    { level: 2, type: 'mcq', q: R`The Kjeldahl method can NOT be used for estimating nitrogen in:`,
      options: [R`amines`, R`amides`, R`nitro and azo compounds`, R`proteins`], correct: 2,
      solution: R`Their nitrogen is not converted into ammonium sulphate under Kjeldahl conditions.` },
    { level: 2, type: 'mcq', q: R`In the Carius method, a halogen is weighed as:`,
      options: [R`AgX`, R`BaSO₄`, R`Mg₂P₂O₇`, R`NH₃`], correct: 0,
      solution: R`It is precipitated as the silver halide.` },
    { level: 2, type: 'mcq', q: R`The sodium extract gives a violet colour with sodium nitroprusside. This shows:`,
      options: [R`nitrogen`, R`sulphur`, R`a halogen`, R`phosphorus`], correct: 1,
      solution: R`S²⁻ forms a violet complex with nitroprusside.` },
    { level: 2, type: 'mcq', q: R`Fractional distillation is used when the boiling points of the liquids:`,
      options: [R`are very different`, R`are equal`, R`are very close`, R`are above 300 °C`], correct: 2,
      solution: R`The fractionating column gives repeated evaporation and condensation to separate close boilers.` },
    { level: 2, type: 'num', q: R`In a Dumas estimation, 0.3 g of a compound gives 50 mL of N₂ at STP. Find % N.`,
      answer: 20.83, tol: 0.05, unit: '%',
      solution: R`Mass of N₂ = 28 × 50/22400 = 0.0625 g, so % N = 0.0625/0.3 × 100 ≈ 20.83%.` },
    { level: 2, type: 'num', q: R`In a Kjeldahl estimation, the ammonia from 1 g of a compound neutralised 20 mL of 0.5 M H₂SO₄. Find % N.`,
      answer: 28, tol: 0.01, unit: '%',
      solution: R`0.5 M H₂SO₄ = 1 N. % N = 1.4 × 1 × 20/1 = 28%.` },
    { level: 2, type: 'num', q: R`In a Carius estimation, 0.25 g of a compound gives 0.574 g of AgCl. Find % Cl.`,
      answer: 56.8, tol: 0.05, unit: '%',
      solution: R`35.5/143.5 × 0.574/0.25 × 100 ≈ 56.8%.` },
    { level: 3, type: 'mcq', q: R`A compound has the empirical formula CH₂O and a molar mass of 180. Its molecular formula is:`,
      options: [R`C₆H₁₂O₆`, R`C₂H₄O₂`, R`C₃H₆O₃`, R`C₄H₈O₄`], correct: 0,
      solution: R`CH₂O = 30; 180/30 = 6, so C₆H₁₂O₆ (glucose).` },
    { level: 3, type: 'mcq', q: R`Before testing for halogens with AgNO₃, a sodium extract containing N and S is boiled with HNO₃ in order to:`,
      options: [R`neutralise the excess sodium`, R`decompose NaCN and Na₂S`, R`precipitate AgCl`, R`oxidise the halides`], correct: 1,
      solution: R`CN⁻ and S²⁻ would otherwise give precipitates with Ag⁺; boiling drives them off as HCN and H₂S.` },
    { level: 3, type: 'num', q: R`0.468 g of a compound gives 0.668 g of BaSO₄. Find % S. (BaSO₄ = 233)`,
      answer: 19.6, tol: 0.05, unit: '%',
      solution: R`32/233 × 0.668/0.468 × 100 ≈ 19.6%.` },
    { level: 3, type: 'num', q: R`A compound has C 54.5%, H 9.1% and O 36.4%, with molar mass 88. How many carbon atoms are in one molecule?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`Empirical formula C₂H₄O (44); n = 2, so C₄H₈O₂: 4 carbon atoms.` }
  ]
});
