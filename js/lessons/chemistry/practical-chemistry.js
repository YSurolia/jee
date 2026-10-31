// Lesson: Principles Related to Practical Chemistry.
var R = String.raw;
JEE.lesson('chemistry', 'practical-chemistry', {
  theory: [
    { h: R`Detecting N, S and halogens in organic compounds`,
      body: [
        R`Covalent organic compounds don't give ion tests directly, so they are first fused with sodium (<b>Lassaigne's test</b>) to convert N, S and halogens into NaCN, Na₂S and NaX.`,
        R`<b>N:</b> FeSO₄ + heat, then acid gives <b>Prussian blue</b>. <b>S:</b> sodium nitroprusside gives <b>violet</b>; lead acetate gives a <b>black</b> PbS precipitate. <b>N and S together:</b> FeCl₃ gives <b>blood red</b> (Fe(SCN)²⁺). <b>Halogens:</b> boil with HNO₃, then AgNO₃: AgCl (white, soluble in NH₃), AgBr (pale yellow), AgI (yellow, insoluble in NH₃).`
      ] },

    { h: R`Testing for functional groups`,
      body: [
        R`<b>Alcoholic –OH:</b> ceric ammonium nitrate turns red; sodium metal gives H₂ bubbles. <b>Phenolic –OH:</b> neutral FeCl₃ gives violet; bromine water gives a white precipitate.`,
        R`<b>Aldehydes and ketones:</b> 2,4-DNP gives an orange-red precipitate (both). <b>Aldehydes only:</b> Tollens' (silver mirror), Fehling's (red Cu₂O), Schiff's reagent (pink).`,
        R`<b>Carboxylic acid:</b> NaHCO₃ fizzes (CO₂). <b>Primary amine:</b> carbylamine test (foul smell); aromatic 1° amines form an orange azo dye with β-naphthol after diazotisation.`
      ],
      analogy: R`Functional group tests are like the "symptoms" a doctor checks: each test points to one kind of group, and together they identify the compound.`,
      check: { q: R`A compound fizzes with NaHCO₃. Which functional group does it have?`, ans: R`A carboxylic acid group, –COOH.` } },

    { h: R`Preparing compounds in the lab`,
      body: [
        R`<b>Mohr's salt</b>, FeSO₄·(NH₄)₂SO₄·6H₂O: crystallise equal moles of the two sulphates, adding a little dilute H₂SO₄ to stop Fe²⁺ from hydrolysing. <b>Potash alum</b>, K₂SO₄·Al₂(SO₄)₃·24H₂O, is made the same way.`,
        R`<b>Acetanilide:</b> aniline + acetic anhydride. <b>p-Nitroacetanilide:</b> nitrate acetanilide (the –NHCOCH₃ group protects the amine and directs to para). <b>Aniline yellow:</b> diazotise aniline and couple it with aniline. <b>Iodoform:</b> ethanol or acetone + I₂ + NaOH gives yellow crystals.`
      ] },

    { h: R`Titrations`,
      body: [
        R`In a titration, a solution of known concentration (the titrant) is added from a burette until the reaction is just complete (the end point).`,
        R`<b>KMnO₄ titrations</b> (in dilute H₂SO₄) are redox titrations: \(\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}\). KMnO₄ is its <b>own indicator</b>: purple drops turn colourless until all the reducing agent is used up, and then the first permanent pale pink marks the end point.`,
        R`Against <b>oxalic acid</b>, the solution is warmed to about 60 °C, and the mole ratio is MnO₄⁻ : C₂O₄²⁻ = 2 : 5. Against <b>Mohr's salt</b> (Fe²⁺), it is done cold, with the ratio MnO₄⁻ : Fe²⁺ = 1 : 5.`
      ],
      mistake: R`Acidifying with HCl. KMnO₄ oxidises Cl⁻ to Cl₂, which uses up extra KMnO₄ and gives a wrong result. Use dilute H₂SO₄.` },

    { h: R`Salt analysis: anions and cations`,
      body: [
        R`<b>Anions:</b> dilute H₂SO₄ group (CO₃²⁻ fizzes, S²⁻ gives H₂S, SO₃²⁻, NO₂⁻); concentrated H₂SO₄ group (Cl⁻, Br⁻, I⁻, NO₃⁻; nitrate is confirmed by the <b>brown ring test</b>); independent group (SO₄²⁻ gives white BaSO₄; PO₄³⁻ is tested with ammonium molybdate).`,
        R`<b>Cations</b> are separated into groups by precipitation: Group 0 NH₄⁺; I Pb²⁺ (dil. HCl); II Cu²⁺, Pb²⁺ (H₂S in acid); III Fe³⁺, Al³⁺ (NH₄OH + NH₄Cl); IV Zn²⁺, Ni²⁺, Mn²⁺ (H₂S in alkali); V Ca²⁺, Ba²⁺ (ammonium carbonate); VI Mg²⁺.`,
        R`<b>Why it works:</b> solubility products and the common-ion effect. In acid, [S²⁻] is very low, so only the least soluble sulphides (group II) precipitate. In alkali, [S²⁻] is higher, so group IV sulphides precipitate too.`,
        R`<b>Flame tests:</b> Na golden yellow, K lilac, Ca brick red, Sr crimson, Ba apple green, Cu blue-green.`
      ],
      analogy: R`Salt analysis is like sorting a mixed bag of coins: you sieve out the biggest coins first, then the next size, and so on, until each type is separated.` },

    { h: R`Enthalpy of solution and neutralisation`,
      body: [
        R`<b>Enthalpy of solution:</b> the heat change when 1 mol of a substance dissolves (for example, dissolving NH₄Cl feels cold, so it is endothermic).`,
        R`<b>Enthalpy of neutralisation:</b> the heat released when an acid and a base form 1 mol of water. For any strong acid with any strong base it is about −57.1 kJ/mol, because the reaction is always just H⁺ + OH⁻ → H₂O. With a weak acid or base it is less negative, because some heat is used to ionise the weak electrolyte.`,
        R`Measured with a simple calorimeter: \(q = mc\Delta T\), then divide by the moles of water formed.`
      ] },

    { h: R`Colloids: lyophilic and lyophobic sols`,
      body: [
        R`A <b>sol</b> is a colloid of tiny solid particles in a liquid. <b>Lyophilic</b> ("liquid-loving") sols, such as starch, gelatin and gum, form easily, are stable and are reversible. <b>Lyophobic</b> ("liquid-hating") sols, such as As₂S₃, Fe(OH)₃ and gold, need special methods to prepare, are unstable and coagulate easily.`,
        R`A lyophobic sol's particles carry the same charge, which keeps them apart. Adding an electrolyte neutralises that charge and makes them coagulate. <b>Hardy–Schulze rule:</b> the higher the charge on the ion opposite to the sol's charge, the stronger its coagulating power.`
      ],
      points: [R`Negative sol (As₂S₃): Al³⁺ > Ba²⁺ > Na⁺. Positive sol (Fe(OH)₃): PO₄³⁻ > SO₄²⁻ > Cl⁻.`] },

    { h: R`Kinetics of iodide with hydrogen peroxide`,
      body: [
        R`\(\text{H}_2\text{O}_2 + 2\text{I}^- + 2\text{H}^+ \to \text{I}_2 + 2\text{H}_2\text{O}\). To time it, a small fixed amount of thiosulphate and some starch are added. Thiosulphate instantly turns any I₂ back into I⁻, until it runs out; then free I₂ turns the starch <b>deep blue</b>.`,
        R`The time until the blue appears shows how fast the reaction is going. Changing [I⁻] or [H₂O₂] and noting the times gives the order: the rate is first order in each, so doubling [I⁻] halves the time.`
      ],
      analogy: R`This "iodine clock" is like a fuse: nothing visible happens until the thiosulphate "fuse" burns out, and then the colour flashes on all at once.` }
  ],

  examples: [
    { level: 1, t: 4, q: R`Give the flame colours of sodium, potassium, calcium and barium.`,
      steps: [R`Heating excites the metal's electrons; light of a characteristic colour is given out as they fall back.`],
      ans: R`Na: golden yellow; K: lilac; Ca: brick red; Ba: apple green` },
    { level: 1, t: 1, q: R`How would you show that a compound contains a carboxylic acid group?`,
      steps: [R`Add NaHCO₃ solution.`, R`RCOOH + NaHCO₃ → RCOONa + H₂O + CO₂↑ (brisk effervescence).`],
      ans: R`Brisk effervescence with NaHCO₃ (phenols and alcohols don't do this)` },
    { level: 1, t: 3, q: R`Why is no separate indicator needed in KMnO₄ titrations?`,
      steps: [R`MnO₄⁻ is deep purple; its product Mn²⁺ is almost colourless.`, R`As long as reducing agent remains, each drop is decolourised. One extra drop at the end leaves a permanent pink.`],
      ans: R`KMnO₄ acts as its own indicator (a self-indicator).` },
    { level: 3, t: 3, q: R`25 mL of 0.1 M Mohr's salt solution is titrated against 0.02 M KMnO₄ in acid. What volume of KMnO₄ is needed?`,
      steps: [R`Fe²⁺ present = 25 × 0.1 = 2.5 mmol.`, R`MnO₄⁻ : Fe²⁺ = 1 : 5, so MnO₄⁻ needed = 0.5 mmol.`, R`Volume = 0.5 mmol ÷ 0.02 M.`],
      ans: R`25 mL` },
    { level: 3, t: 4, q: R`A solution contains Pb²⁺ and Cu²⁺. How would you separate them in salt analysis? Why is H₂S passed in acidic solution for group II?`,
      steps: [R`Add dilute HCl: PbCl₂ precipitates (group I) and is filtered off. (Some Pb²⁺ may remain and come down with group II.)`, R`Pass H₂S through the acidic filtrate: black CuS precipitates (group II).`, R`H⁺ (common ion) suppresses H₂S ionisation, so [S²⁻] stays low. Only sulphides with very small Ksp, such as CuS, precipitate; group IV sulphides like ZnS don't.`],
      ans: R`Pb²⁺ as PbCl₂ (group I), then Cu²⁺ as CuS (group II). The acid keeps [S²⁻] low, so the groups separate cleanly.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Which metal gives a brick-red flame?`,
      options: [R`calcium`, R`sodium`, R`potassium`, R`barium`], correct: 0,
      solution: R`Ca: brick red. Na: golden yellow; K: lilac; Ba: apple green.` },
    { level: 1, type: 'mcq', q: R`The indicator used in KMnO₄ titrations is:`,
      options: [R`phenolphthalein`, R`methyl orange`, R`KMnO₄ itself`, R`starch`], correct: 2,
      solution: R`KMnO₄ is a self-indicator.` },
    { level: 1, type: 'mcq', q: R`Effervescence with NaHCO₃ shows the presence of:`,
      options: [R`–COOH`, R`an alcoholic –OH`, R`–CHO`, R`–NH₂`], correct: 0,
      solution: R`Carboxylic acids are strong enough to release CO₂ from bicarbonate.` },
    { level: 1, type: 'mcq', q: R`A starch sol is:`,
      options: [R`lyophobic`, R`lyophilic`, R`a true solution`, R`a suspension`], correct: 1,
      solution: R`Starch is "solvent-loving": it forms a stable, reversible sol.` },
    { level: 1, type: 'num', q: R`About how many kJ of heat is released per mole of water formed when a strong acid neutralises a strong base?`,
      answer: 57.1, tol: 0.3, unit: 'kJ',
      solution: R`ΔH ≈ −57.1 kJ/mol, since the reaction is always H⁺ + OH⁻ → H₂O.` },
    { level: 1, type: 'num', q: R`How many water molecules are in one formula unit of Mohr's salt, FeSO₄·(NH₄)₂SO₄·6H₂O?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`6H₂O.` },
    { level: 2, type: 'mcq', q: R`Group II cations are precipitated as sulphides in:`,
      options: [R`alkaline solution`, R`neutral solution`, R`acidic solution`, R`any solution`], correct: 2,
      solution: R`Acid keeps [S²⁻] low, so only the least soluble sulphides come down.` },
    { level: 2, type: 'mcq', q: R`Phenol gives what colour with neutral FeCl₃ solution?`,
      options: [R`blood red`, R`green`, R`no colour`, R`violet`], correct: 3,
      solution: R`Phenols form a violet complex with Fe³⁺.` },
    { level: 2, type: 'mcq', q: R`For a positive Fe(OH)₃ sol, the order of coagulating power is:`,
      options: [R`Cl⁻ > SO₄²⁻ > PO₄³⁻`, R`PO₄³⁻ > SO₄²⁻ > Cl⁻`, R`SO₄²⁻ > Cl⁻ > PO₄³⁻`, R`all are equal`], correct: 1,
      solution: R`Hardy–Schulze rule: the higher the charge on the oppositely charged ion, the stronger the coagulation.` },
    { level: 2, type: 'mcq', q: R`Acetanilide is prepared from aniline using:`,
      options: [R`ethanol`, R`NaOH`, R`HNO₃`, R`acetic anhydride`], correct: 3,
      solution: R`Acetylation: C₆H₅NH₂ + (CH₃CO)₂O → C₆H₅NHCOCH₃ + CH₃COOH.` },
    { level: 2, type: 'num', q: R`What volume (in mL) of 0.02 M KMnO₄ reacts with 25 mL of 0.1 M Mohr's salt in acidic solution?`,
      answer: 25, tol: 0.01, unit: 'mL',
      solution: R`Fe²⁺ = 2.5 mmol, which needs 0.5 mmol MnO₄⁻; 0.5/0.02 = 25 mL.` },
    { level: 2, type: 'num', q: R`10 g of oxalic acid crystals (H₂C₂O₄·2H₂O, M = 126) is dissolved to make 500 mL of solution. Find its molarity.`,
      answer: 0.1587, tol: 0.001, unit: 'M',
      solution: R`n = 10/126 = 0.0794 mol, so M = 0.0794/0.5 ≈ 0.159 M.` },
    { level: 2, type: 'num', q: R`50 mL of 1 M HCl is mixed with 50 mL of 1 M NaOH. How much heat (in J) is released? (ΔH = −57.1 kJ/mol)`,
      answer: 2855, tol: 1, unit: 'J',
      solution: R`0.05 mol of water forms: 0.05 × 57100 = 2855 J.` },
    { level: 3, type: 'mcq', q: R`In the iodide–H₂O₂ "clock" reaction with thiosulphate and starch, the blue colour appears:`,
      options: [R`as soon as the reactants are mixed`, R`when all the thiosulphate has been used up`, R`when all the H₂O₂ has been used up`, R`when all the iodide has been used up`], correct: 1,
      solution: R`Until then, thiosulphate turns every bit of I₂ back into I⁻.` },
    { level: 3, type: 'mcq', q: R`The brown ring test confirms the presence of:`,
      options: [R`NO₃⁻`, R`SO₄²⁻`, R`Cl⁻`, R`CO₃²⁻`], correct: 0,
      solution: R`NO formed from nitrate gives the brown [Fe(H₂O)₅NO]²⁺ ring.` },
    { level: 3, type: 'num', q: R`In an iodine-clock experiment (first order in I⁻), the blue colour takes 60 s with 0.1 M KI. How long (in s) will it take with 0.3 M KI, all else the same?`,
      answer: 20, tol: 0.01, unit: 's',
      solution: R`Three times the [I⁻] gives three times the rate, so one-third of the time.` },
    { level: 3, type: 'num', q: R`How many electrons does each MnO₄⁻ ion gain when it is reduced to Mn²⁺ in acidic solution?`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`Mn goes from +7 to +2: 5 electrons.` }
  ]
});
