// Lesson: Some Basic Concepts in Chemistry.
var R = String.raw;
JEE.lesson('chemistry', 'basic-concepts', {
  theory: [
    { h: R`Matter and how we classify it`,
      body: [
        R`<b>Matter</b> is anything that has mass and takes up space. It exists as solid, liquid or gas.`,
        R`<b>Pure substances</b> have a fixed composition: <b>elements</b> contain only one kind of atom (iron, oxygen); <b>compounds</b> are elements chemically joined in a fixed ratio (water, salt).`,
        R`<b>Mixtures</b> have variable composition. In homogeneous mixtures the composition is the same throughout (air, sugar solution, brass); in heterogeneous ones you can see different parts (sand in water).`
      ],
      analogy: R`Lemonade is a mixture: you can add more sugar or more lemon. Water (H₂O) is a compound: it is always 2 H for every 1 O, no matter where it comes from.`,
      check: { q: R`Is air an element, a compound or a mixture?`, ans: R`A homogeneous mixture (of nitrogen, oxygen, argon, CO₂ and so on).` } },

    { h: R`Dalton's theory and the laws of chemical combination`,
      body: [
        R`<b>Dalton's atomic theory</b> (1808): matter is made of tiny indivisible atoms; atoms of one element are identical; atoms combine in simple whole-number ratios; and atoms are only rearranged, never created or destroyed, in reactions.`,
        R`It explained the laws observed in experiments: <b>conservation of mass</b> (mass of reactants = mass of products); <b>definite proportions</b> (a compound always has the same elements in the same mass ratio); <b>multiple proportions</b> (when two elements form more than one compound, the masses of one that combine with a fixed mass of the other are in a small whole-number ratio).`,
        R`For gases: <b>Gay-Lussac's law</b> says reacting gas volumes are in simple ratios, and <b>Avogadro's law</b> says equal volumes of gases at the same T and P contain equal numbers of molecules.`
      ],
      points: [R`Dalton was wrong that atoms are indivisible (they contain electrons, protons and neutrons) and that all atoms of an element are identical (isotopes).`] },

    { h: R`Atomic and molecular mass`,
      body: [
        R`Atoms are far too light to weigh in grams, so we use the <b>atomic mass unit</b>: 1 u = \(\tfrac1{12}\) of the mass of a carbon-12 atom.`,
        R`Most elements are a mix of isotopes, so the <b>average atomic mass</b> is a weighted average: for chlorine, \(0.75\times35 + 0.25\times37 = 35.5\) u.`,
        R`<b>Molecular mass</b> = sum of the atomic masses of all the atoms in the molecule: H₂O = 2(1) + 16 = 18 u. For ionic solids like NaCl we call it the <b>formula mass</b>.`
      ] },

    { h: R`The mole: chemistry's counting unit`,
      body: [
        R`Chemists count atoms the way shopkeepers count eggs by the dozen. Their "dozen" is the <b>mole</b>: \(6.022\times10^{23}\) particles (<b>Avogadro's number</b>, \(N_A\)).`,
        R`The <b>molar mass</b> (mass of 1 mole, in g/mol) has the same number as the atomic or molecular mass in u: 1 mol of water weighs 18 g.`,
        R`Key conversions: \(n = \dfrac{\text{mass}}{\text{molar mass}} = \dfrac{\text{number of particles}}{N_A} = \dfrac{\text{gas volume at STP}}{22.4\text{ L}}\).`
      ],
      analogy: R`A mole is just a very big "dozen". 1 dozen bananas = 12 bananas; 1 mole of carbon atoms = \(6.022\times10^{23}\) carbon atoms, which happens to weigh exactly 12 g.`,
      mistake: R`Mixing up moles of molecules and moles of atoms. 1 mol of O₂ contains 2 mol of O atoms.` },

    { h: R`Percentage composition and formulae`,
      body: [
        R`<b>Percentage composition</b> = (mass of the element in 1 mol ÷ molar mass) × 100. For example, H in water = 2/18 × 100 = 11.1%.`,
        R`The <b>empirical formula</b> is the simplest whole-number ratio of atoms. To find it: divide each % by its atomic mass, divide all the results by the smallest, then round (or multiply) to whole numbers.`,
        R`The <b>molecular formula</b> is the actual number of atoms: \(n\times\) (empirical formula), where \(n = \dfrac{\text{molar mass}}{\text{empirical formula mass}}\). Molar mass of a gas = 2 × vapour density.`
      ],
      check: { q: R`Benzene is C₆H₆. What is its empirical formula?`, ans: R`CH (the ratio 6 : 6 simplifies to 1 : 1).` } },

    { h: R`Chemical equations and stoichiometry`,
      body: [
        R`A balanced equation has the same number of each kind of atom on both sides (conservation of mass). The coefficients give the <b>mole ratios</b> in which substances react.`,
        R`<b>Stoichiometry</b> means using these ratios for calculations: convert the given mass to moles → use the mole ratio → convert back to mass, volume or particles.`
      ],
      analogy: R`A recipe says 2 cups of flour + 1 cup of sugar → 1 cake. The balanced equation is chemistry's recipe, and the coefficients are the cups.` },

    { h: R`Limiting reagent`,
      body: [
        R`If reactants are not mixed in the exact ratio, one runs out first. It is the <b>limiting reagent</b> and it decides how much product can form. The others are in <b>excess</b>.`,
        R`To find it: divide the moles of each reactant by its coefficient in the balanced equation. The smallest result is the limiting reagent.`
      ],
      analogy: R`To make sandwiches you need 2 slices of bread per sandwich. With 10 slices and 3 cheese slices, you can make only 3 sandwiches. Cheese is the limiting reagent.`,
      mistake: R`Choosing the reactant with the smaller <i>mass</i> as limiting. Always compare moles divided by coefficients.` },

    { h: R`Concentration of solutions`,
      body: [
        R`<b>Molarity (M)</b> = moles of solute per litre of solution. <b>Molality (m)</b> = moles of solute per kg of solvent. <b>Mole fraction</b> \(x_A = \dfrac{n_A}{n_{total}}\).`,
        R`Also used: mass percent, and ppm (parts per million) for very dilute solutions.`,
        R`Molarity changes slightly with temperature (volume expands), but molality does not, because it uses mass only.`
      ],
      points: [R`Dilution: \(M_1V_1 = M_2V_2\).`, R`Mole fractions of all the components add up to 1.`] }
  ],

  examples: [
    { level: 1, t: 4, q: R`How many moles and molecules are there in 11 g of CO₂?`,
      steps: [R`Molar mass of CO₂ = 12 + 32 = 44 g/mol.`, R`\(n = 11/44 = 0.25\) mol.`, R`Molecules \(= 0.25\times6.022\times10^{23}\).`],
      ans: R`0.25 mol; \(1.5\times10^{23}\) molecules` },
    { level: 1, t: 3, q: R`Find the molar mass of glucose, C₆H₁₂O₆.`,
      steps: [R`\(6(12) + 12(1) + 6(16) = 72 + 12 + 96\).`],
      ans: R`180 g/mol` },
    { level: 1, t: 7, q: R`Balance the equation: Fe + O₂ → Fe₂O₃.`,
      steps: [R`O: 2 on the left, 3 on the right. Use 3 O₂ and 2 Fe₂O₃ (6 O atoms each side).`, R`Fe: now 4 on the right, so 4 Fe on the left.`],
      ans: R`4Fe + 3O₂ → 2Fe₂O₃` },
    { level: 3, t: 8, q: R`10 g of CaCO₃ is added to 100 mL of 1 M HCl. Find the limiting reagent and the volume of CO₂ formed at STP. (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂)`,
      steps: [R`CaCO₃: 10/100 = 0.1 mol, needing 0.2 mol HCl.`, R`HCl available: 0.1 L × 1 M = 0.1 mol, which is not enough, so HCl is limiting.`, R`CO₂ = 0.1/2 = 0.05 mol = 0.05 × 22.4 L.`],
      ans: R`HCl is limiting; 1.12 L of CO₂ (2.2 g)` },
    { level: 3, t: 6, q: R`A hydrocarbon has 85.7% C and 14.3% H. Its vapour density is 28. Find its molecular formula.`,
      steps: [R`C: 85.7/12 = 7.14; H: 14.3/1 = 14.3. Ratio 1 : 2, so empirical formula CH₂ (mass 14).`, R`Molar mass = 2 × 28 = 56, so \(n = 56/14 = 4\).`],
      ans: R`C₄H₈ (a butene or cyclobutane)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`One mole of any substance contains:`,
      options: [R`\(6.022\times10^{23}\) particles`, R`\(3\times10^8\) particles`, R`\(1.6\times10^{-19}\) particles`, R`22.4 particles`], correct: 0,
      solution: R`That is Avogadro's number.` },
    { level: 1, type: 'mcq', q: R`The molar mass of water is:`,
      options: [R`16 g/mol`, R`18 g/mol`, R`20 g/mol`, R`10 g/mol`], correct: 1,
      solution: R`2(1) + 16 = 18 g/mol.` },
    { level: 1, type: 'mcq', q: R`Which of these is a compound?`,
      options: [R`air`, R`brass`, R`water`, R`oxygen`], correct: 2,
      solution: R`Water has H and O chemically joined in a fixed ratio. Air and brass are mixtures; oxygen is an element.` },
    { level: 1, type: 'mcq', q: R`At STP, 1 mole of an ideal gas occupies:`,
      options: [R`11.2 L`, R`1 L`, R`44.8 L`, R`22.4 L`], correct: 3,
      solution: R`Molar volume at STP (273 K, 1 atm) = 22.4 L.` },
    { level: 1, type: 'num', q: R`How many moles are in 32 g of O₂?`,
      answer: 1, tol: 0.001, unit: 'mol',
      solution: R`Molar mass of O₂ = 32 g/mol, so 1 mol.` },
    { level: 1, type: 'num', q: R`Find the mass (in g) of 0.5 mol of NaCl (molar mass 58.5 g/mol).`,
      answer: 29.25, tol: 0.01, unit: 'g',
      solution: R`\(0.5\times58.5 = 29.25\) g.` },
    { level: 2, type: 'mcq', q: R`Water from a river and from a well both contain hydrogen and oxygen in a 1 : 8 mass ratio. This illustrates the law of:`,
      options: [R`multiple proportions`, R`definite proportions`, R`conservation of mass`, R`gaseous volumes`], correct: 1,
      solution: R`A given compound always has the same elements in the same mass ratio.` },
    { level: 2, type: 'mcq', q: R`The empirical formula of benzene (C₆H₆) is:`,
      options: [R`C₆H₆`, R`C₂H₂`, R`CH₂`, R`CH`], correct: 3,
      solution: R`The simplest ratio 6 : 6 = 1 : 1 gives CH.` },
    { level: 2, type: 'mcq', q: R`Which contains the most molecules?`,
      options: [R`1 g of O₂`, R`1 g of N₂`, R`1 g of H₂`, R`1 g of CO₂`], correct: 2,
      solution: R`Smallest molar mass means the most moles: H₂ gives 0.5 mol, far more than the others.` },
    { level: 2, type: 'mcq', q: R`Molality is often preferred to molarity because:`,
      options: [R`it does not change with temperature`, R`it is easier to measure`, R`it uses the volume of the solution`, R`it is always larger`], correct: 0,
      solution: R`Molality uses mass of solvent, which doesn't change with temperature; volume does.` },
    { level: 2, type: 'num', q: R`Find the percentage of oxygen in H₂SO₄ (molar mass 98).`,
      answer: 65.31, tol: 0.05, unit: '%',
      solution: R`\(64/98\times100 \approx 65.31\%\).` },
    { level: 2, type: 'num', q: R`9.8 g of H₂SO₄ is dissolved to make 500 mL of solution. Find the molarity.`,
      answer: 0.2, tol: 0.001, unit: 'M',
      solution: R`\(n = 9.8/98 = 0.1\) mol, so \(M = 0.1/0.5 = 0.2\) M.` },
    { level: 2, type: 'num', q: R`What mass (in g) of CO₂ forms when 6 g of carbon burns completely?`,
      answer: 22, tol: 0.01, unit: 'g',
      solution: R`C + O₂ → CO₂: 6 g C = 0.5 mol, which gives 0.5 mol CO₂ = 22 g.` },
    { level: 3, type: 'mcq', q: R`3 g of H₂ reacts with 29 g of O₂ to form water. The limiting reagent and the mass of water formed are:`,
      options: [R`O₂ limiting, 27 g`, R`H₂ limiting, 27 g`, R`H₂ limiting, 32 g`, R`O₂ limiting, 32 g`], correct: 1,
      solution: R`2H₂ + O₂ → 2H₂O. H₂: 1.5 mol needs 0.75 mol (24 g) of O₂, and 29 g is available, so H₂ is limiting. Water = 1.5 mol = 27 g.` },
    { level: 3, type: 'mcq', q: R`46 g of ethanol (C₂H₅OH) is mixed with 36 g of water. The mole fraction of ethanol is:`,
      options: [R`1/2`, R`2/3`, R`1/4`, R`1/3`], correct: 3,
      solution: R`Ethanol: 46/46 = 1 mol; water: 36/18 = 2 mol. \(x = 1/3\).` },
    { level: 3, type: 'num', q: R`What volume (in L) of O₂ at STP is needed to burn 1 mol of CH₄ completely?`,
      answer: 44.8, tol: 0.01, unit: 'L',
      solution: R`CH₄ + 2O₂ → CO₂ + 2H₂O: 2 mol O₂ = 2 × 22.4 = 44.8 L.` },
    { level: 3, type: 'num', q: R`A hydrocarbon contains 80% C and 20% H, and its molar mass is 30 g/mol. How many hydrogen atoms are in one molecule?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`C: 6.67, H: 20, ratio 1 : 3, so the empirical formula is CH₃ (15). \(n = 2\), giving C₂H₆: 6 H atoms.` }
  ]
});
