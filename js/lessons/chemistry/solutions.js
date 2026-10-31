// Lesson: Solutions.
var R = String.raw;
JEE.lesson('chemistry', 'solutions', {
  theory: [
    { h: R`What is a solution?`,
      body: [
        R`A <b>solution</b> is a uniform (homogeneous) mixture of two or more substances. The one present in the largest amount is the <b>solvent</b>; the others are <b>solutes</b>.`,
        R`Solutions can be solid (brass), liquid (sugar in water) or gaseous (air). In JEE, we mostly study liquid solutions.`,
        R`Gases dissolve better at <b>higher pressure</b> and <b>lower temperature</b>. <b>Henry's law:</b> the solubility of a gas is proportional to its partial pressure above the liquid, \(p = K_Hx\).`
      ],
      analogy: R`A cold drink fizzes when opened: inside the sealed bottle, CO₂ is dissolved under high pressure. Open it, the pressure drops, and the gas comes out as bubbles (Henry's law).` },

    { h: R`Ways of expressing concentration`,
      body: [
        R`<b>Mass %</b> = mass of solute ÷ mass of solution × 100. <b>ppm</b> = parts per million, for very dilute solutions.`,
        R`<b>Molarity (M)</b> = moles of solute ÷ volume of solution in L. <b>Molality (m)</b> = moles of solute ÷ mass of solvent in kg. <b>Mole fraction</b> \(x_A = n_A/(n_A + n_B)\).`,
        R`Molality and mole fraction don't change with temperature, so they are used for colligative properties.`
      ],
      mistake: R`Using the mass of the solution in molality. Molality uses the mass of the <b>solvent</b> only.` },

    { h: R`Vapour pressure and Raoult's law`,
      body: [
        R`Molecules at a liquid's surface keep escaping into the vapour. In a closed container, the pressure of this vapour at equilibrium is the liquid's <b>vapour pressure</b>. It rises with temperature.`,
        R`<b>Raoult's law:</b> in a solution, each component's partial vapour pressure equals its mole fraction times its pure vapour pressure: \(p_A = x_Ap_A^\circ\). Total \(P = p_A + p_B\).`,
        R`A <b>non-volatile</b> solute (like sugar or salt) takes up surface space, so fewer solvent molecules escape: the vapour pressure is lowered. The relative lowering equals the solute's mole fraction: \(\dfrac{p^\circ - p}{p^\circ} = x_{solute}\).`
      ],
      analogy: R`Imagine people leaving a crowded hall through its doors. If some of the people near the doors are just standing there (non-volatile solute), fewer people get out per minute.` },

    { h: R`Ideal and non-ideal solutions`,
      body: [
        R`An <b>ideal solution</b> obeys Raoult's law at all compositions. The A–B attractions are just like A–A and B–B attractions, so \(\Delta H_{mix} = 0\) and \(\Delta V_{mix} = 0\). Example: benzene + toluene.`,
        R`<b>Positive deviation</b> (vapour pressure higher than predicted): A–B attractions are weaker, so molecules escape more easily; \(\Delta H_{mix} > 0\). Example: ethanol + water, acetone + carbon disulphide.`,
        R`<b>Negative deviation</b> (lower vapour pressure): A–B attractions are stronger, often a new H-bond forms; \(\Delta H_{mix} < 0\). Example: acetone + chloroform, nitric acid + water.`,
        R`Strongly non-ideal mixtures can form <b>azeotropes</b>, which boil at a constant composition and can't be separated by simple distillation.`
      ] },

    { h: R`Colligative properties`,
      body: [
        R`Some properties depend only on the <b>number</b> of solute particles, not on what they are. These are <b>colligative properties</b>:`,
        R`<b>1. Relative lowering of vapour pressure:</b> \(\dfrac{\Delta p}{p^\circ} = x_{solute}\). <b>2. Elevation of boiling point:</b> \(\Delta T_b = K_bm\). <b>3. Depression of freezing point:</b> \(\Delta T_f = K_fm\). <b>4. Osmotic pressure:</b> \(\pi = CRT\).`,
        R`<b>Osmosis:</b> solvent flows through a semipermeable membrane from the dilute solution into the concentrated one. The pressure needed to stop it is the osmotic pressure. Applying more than that pushes solvent the other way: <b>reverse osmosis</b>, used in water purifiers.`
      ],
      analogy: R`Salt is spread on icy roads in cold countries: it lowers water's freezing point, so ice melts. Raw mango pickled in salt shrivels because water leaves it by osmosis.`,
      points: [R`Water: \(K_b = 0.52\) and \(K_f = 1.86\) K kg/mol.`, R`Solutions with equal osmotic pressure are <b>isotonic</b> (for example, saline drips and blood).`] },

    { h: R`Finding molar mass`,
      body: [
        R`Because colligative properties count particles, measuring one tells us how many moles of solute were dissolved, and therefore its molar mass.`,
        R`From freezing-point depression: \(M = \dfrac{K_f\times w_{solute}\times1000}{\Delta T_f\times w_{solvent}}\) (masses in g). Osmotic pressure is best for large molecules like proteins, because even small concentrations give a measurable \(\pi\).`
      ] },

    { h: R`Abnormal molar masses and the van 't Hoff factor`,
      body: [
        R`Electrolytes break into ions, giving more particles than expected: NaCl → Na⁺ + Cl⁻ gives 2 particles. Some solutes join up (acetic acid pairs into dimers in benzene), giving fewer. The measured molar mass then comes out "wrong" (abnormal).`,
        R`The <b>van 't Hoff factor</b> fixes this: \(i = \dfrac{\text{actual number of particles}}{\text{number of formula units dissolved}}\). The formulas become \(\Delta T_f = iK_fm\), \(\pi = iCRT\), and so on.`,
        R`For dissociation into \(n\) ions with degree \(\alpha\): \(i = 1 + (n - 1)\alpha\). For association into \(n\)-mers: \(i = 1 - \alpha\left(1 - \dfrac1n\right)\).`
      ],
      points: [R`Complete dissociation: NaCl i = 2, CaCl₂ i = 3, AlCl₃ i = 4, K₂SO₄ i = 3.`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`10 g of sugar is dissolved in 90 g of water. Find the mass percentage of sugar.`,
      steps: [R`Mass of solution = 10 + 90 = 100 g.`, R`Mass % \(= 10/100\times100\).`],
      ans: R`10%` },
    { level: 1, t: 1, q: R`Pure water has a vapour pressure of 23.8 mm Hg. A sugar solution has a water mole fraction of 0.98. Find the solution's vapour pressure.`,
      steps: [R`Raoult's law: \(p = x_{water}p^\circ = 0.98\times23.8\).`],
      ans: R`\(\approx 23.3\) mm Hg (lowered, because of the dissolved sugar)` },
    { level: 1, t: 3, q: R`Why is salt spread on icy roads in cold countries?`,
      steps: [R`Dissolved salt is a solute, and solutes lower the freezing point of water (a colligative property).`, R`So the ice-water mixture can't stay frozen at a temperature slightly below 0 °C.`],
      ans: R`It depresses the freezing point, so the ice melts and roads become less slippery.` },
    { level: 2, t: 3, q: R`18 g of glucose (M = 180) is dissolved in 1 kg of water. Find the boiling point of the solution. (\(K_b = 0.52\))`,
      steps: [R`\(m = 0.1/1 = 0.1\) mol/kg.`, R`\(\Delta T_b = 0.52\times0.1 = 0.052\) K.`],
      ans: R`100.052 °C` },
    { level: 3, t: 5, q: R`A 0.1 m aqueous solution of a weak acid HA freezes at −0.2046 °C. Find the degree of dissociation of HA. (\(K_f = 1.86\))`,
      steps: [R`\(i = \dfrac{\Delta T_f}{K_fm} = \dfrac{0.2046}{0.186} = 1.1\).`, R`HA → H⁺ + A⁻, so \(n = 2\) and \(i = 1 + \alpha\).`],
      ans: R`\(\alpha = 0.1\) (10% dissociated)` },
    { level: 3, t: 1, q: R`Liquids A and B form an ideal solution. \(p_A^\circ = 100\) torr and \(p_B^\circ = 60\) torr. The solution has a total vapour pressure of 76 torr. Find the mole fraction of A in the liquid.`,
      steps: [R`\(P = x_Ap_A^\circ + (1 - x_A)p_B^\circ = 60 + 40x_A\).`, R`\(76 = 60 + 40x_A\).`],
      ans: R`\(x_A = 0.4\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The unit of molarity is:`,
      options: [R`mol/kg`, R`mol/L`, R`g/L`, R`it has no unit`], correct: 1,
      solution: R`Molarity = moles of solute per litre of solution.` },
    { level: 1, type: 'mcq', q: R`Colligative properties depend on:`,
      options: [R`the nature of the solute`, R`the colour of the solution`, R`the number of solute particles`, R`the size of the container`], correct: 2,
      solution: R`They count particles, regardless of what the particles are.` },
    { level: 1, type: 'mcq', q: R`When a non-volatile solute is dissolved in a solvent, the vapour pressure of the solvent:`,
      options: [R`decreases`, R`increases`, R`is unchanged`, R`becomes zero`], correct: 0,
      solution: R`Fewer solvent molecules are at the surface to escape.` },
    { level: 1, type: 'mcq', q: R`In osmosis:`,
      options: [R`solute moves from high to low concentration`, R`solvent moves from concentrated to dilute solution`, R`both solute and solvent move freely`, R`solvent moves from dilute to concentrated solution through a semipermeable membrane`], correct: 3,
      solution: R`Only the solvent passes through, towards the more concentrated side.` },
    { level: 1, type: 'num', q: R`2 mol of a solute is dissolved in 500 g of water. Find the molality (in mol/kg).`,
      answer: 4, tol: 0.001, unit: 'mol/kg',
      solution: R`\(m = 2/0.5 = 4\) mol/kg.` },
    { level: 1, type: 'num', q: R`25 g of salt is dissolved in 75 g of water. Find the mass percentage of salt.`,
      answer: 25, tol: 0.01, unit: '%',
      solution: R`\(25/(25 + 75)\times100 = 25\%\).` },
    { level: 2, type: 'mcq', q: R`The van 't Hoff factor of K₂SO₄ (completely dissociated) is:`,
      options: [R`1`, R`2`, R`3`, R`4`], correct: 2,
      solution: R`K₂SO₄ → 2K⁺ + SO₄²⁻: 3 ions.` },
    { level: 2, type: 'mcq', q: R`Which mixture shows a negative deviation from Raoult's law?`,
      options: [R`benzene + toluene`, R`ethanol + hexane`, R`acetone + chloroform`, R`ethanol + water`], correct: 2,
      solution: R`Acetone and chloroform form an H-bond with each other, so the A–B attraction is stronger and the vapour pressure is lower.` },
    { level: 2, type: 'mcq', q: R`Which 0.1 m aqueous solution has the lowest freezing point?`,
      options: [R`glucose`, R`NaCl`, R`CaCl₂`, R`AlCl₃`], correct: 3,
      solution: R`AlCl₃ gives 4 ions (i = 4), the most particles, so the largest depression.` },
    { level: 2, type: 'mcq', q: R`Reverse osmosis is used for:`,
      options: [R`making ice`, R`desalination of sea water`, R`boiling water`, R`making alloys`], correct: 1,
      solution: R`Pushing water through a membrane against osmotic pressure leaves the salt behind (RO purifiers).` },
    { level: 2, type: 'num', q: R`Find the elevation in boiling point (in K) of a 0.2 m urea solution in water. (\(K_b = 0.52\))`,
      answer: 0.104, tol: 0.0005, unit: 'K',
      solution: R`Urea doesn't dissociate: \(\Delta T_b = 0.52\times0.2 = 0.104\) K.` },
    { level: 2, type: 'num', q: R`Find the osmotic pressure (in atm) of 0.05 M NaCl at 300 K, assuming complete dissociation. (R = 0.0821)`,
      answer: 2.463, tol: 0.005, unit: 'atm',
      solution: R`\(\pi = iCRT = 2\times0.05\times0.0821\times300 \approx 2.463\) atm.` },
    { level: 2, type: 'num', q: R`A pure solvent has a vapour pressure of 100 mm Hg. A non-volatile solute is added to make its mole fraction 0.05. Find the new vapour pressure (in mm Hg).`,
      answer: 95, tol: 0.01, unit: 'mm Hg',
      solution: R`\(p = x_{solvent}p^\circ = 0.95\times100 = 95\) mm Hg.` },
    { level: 3, type: 'mcq', q: R`Acetic acid (M = 60) dimerises completely in benzene. Its molar mass found from freezing-point depression would be about:`,
      options: [R`60`, R`120`, R`30`, R`90`], correct: 1,
      solution: R`Dimerisation halves the number of particles (i = 0.5), so the apparent molar mass doubles.` },
    { level: 3, type: 'mcq', q: R`Henry's law states that the solubility of a gas in a liquid is proportional to:`,
      options: [R`the partial pressure of the gas above the liquid`, R`the temperature`, R`1/pressure`, R`nothing; it is independent of pressure`], correct: 0,
      solution: R`\(p = K_Hx\), so the mole fraction dissolved is proportional to the partial pressure.` },
    { level: 3, type: 'num', q: R`For a weak acid HA, the van 't Hoff factor is 1.1. What percentage of HA is dissociated?`,
      answer: 10, tol: 0.01, unit: '%',
      solution: R`\(i = 1 + \alpha\) (2 ions), so \(\alpha = 0.1 = 10\%\).` },
    { level: 3, type: 'num', q: R`2 g of a non-electrolyte in 50 g of benzene lowers its freezing point by 0.4 K. Find its molar mass (in g/mol). (\(K_f\) of benzene = 5.12)`,
      answer: 512, tol: 0.5, unit: 'g/mol',
      solution: R`\(M = \dfrac{5.12\times2\times1000}{0.4\times50} = 512\) g/mol.` }
  ]
});
