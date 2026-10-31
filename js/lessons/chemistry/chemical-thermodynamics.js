// Lesson: Chemical Thermodynamics.
var R = String.raw;
JEE.lesson('chemistry', 'chemical-thermodynamics', {
  theory: [
    { h: R`System, surroundings and state functions`,
      body: [
        R`The part of the universe we study is the <b>system</b> (say, a reaction in a beaker); everything else is the <b>surroundings</b>.`,
        R`An <b>open</b> system exchanges both matter and energy (tea in an open cup). A <b>closed</b> system exchanges only energy (a sealed bottle). An <b>isolated</b> system exchanges neither (an ideal thermos flask).`,
        R`<b>State functions</b> depend only on the present state, not on how it was reached: U, H, S, G, P, V, T. <b>Path functions</b> depend on the route: heat (q) and work (w).`,
        R`<b>Extensive</b> properties depend on the amount (mass, volume, U, H). <b>Intensive</b> properties don't (temperature, pressure, density).`
      ],
      analogy: R`Your height above sea level is a state function: on a mountain top it is the same whether you climbed or took the cable car. The effort you spent is a path function.`,
      check: { q: R`Is heat a state function?`, ans: R`No. The heat exchanged depends on the path taken.` } },

    { h: R`Internal energy and the first law`,
      body: [
        R`<b>Internal energy (U)</b> is the total energy stored inside the system: the motion and bonds of its particles.`,
        R`It changes when heat (q) flows in or out, or when work (w) is done. The <b>first law</b> (in the chemistry sign convention) is \(\Delta U = q + w\), where q is heat absorbed by the system and w is work done <b>on</b> the system.`,
        R`Expansion work against a constant external pressure: \(w = -P_{ext}\Delta V\). Reversible isothermal expansion of an ideal gas: \(w = -2.303\,nRT\log\dfrac{V_2}{V_1}\).`
      ],
      points: [R`Energy can change form but can never be created or destroyed.`],
      mistake: R`Mixing up sign conventions. Chemistry: \(\Delta U = q + w\) (w done on the system). Physics: \(\Delta U = Q - W\) (W done by the system). The meaning is the same.` },

    { h: R`Enthalpy`,
      body: [
        R`Most reactions happen in open containers at constant pressure, where some energy goes into pushing back the atmosphere. So we use <b>enthalpy</b>: \(H = U + PV\). At constant pressure, \(\Delta H = q_p\), the heat exchanged.`,
        R`For reactions involving gases: \(\Delta H = \Delta U + \Delta n_gRT\), where \(\Delta n_g\) = moles of gaseous products − moles of gaseous reactants.`,
        R`<b>Exothermic</b> reactions release heat (\(\Delta H < 0\)), like burning fuel. <b>Endothermic</b> reactions absorb heat (\(\Delta H > 0\)), like melting ice or photosynthesis.`
      ],
      analogy: R`Lighting a gas stove is exothermic: the flame gives out heat. Cooking an egg is endothermic: the egg must absorb heat to change.` },

    { h: R`Heat capacity and calorimetry`,
      body: [
        R`<b>Heat capacity</b> C is the heat needed to raise the temperature by 1 K: \(q = C\Delta T\). <b>Specific heat</b> is per gram (water: 4.18 J/g K); <b>molar heat capacity</b> is per mole.`,
        R`For an ideal gas: \(C_p - C_v = R\).`,
        R`A <b>bomb calorimeter</b> (sealed, constant volume) measures \(\Delta U\). A coffee-cup calorimeter (open, constant pressure) measures \(\Delta H\).`
      ] },

    { h: R`Different kinds of enthalpy change`,
      body: [
        R`<b>Formation</b> (\(\Delta_fH^\circ\)): 1 mol of a compound is made from its elements in their standard states. For an element in its standard state (O₂(g), C(graphite)), it is zero.`,
        R`<b>Combustion:</b> 1 mol burns completely in oxygen (always negative). <b>Bond dissociation:</b> breaking 1 mol of a bond in the gas phase (always positive). <b>Atomisation:</b> breaking a substance completely into gaseous atoms.`,
        R`<b>Phase changes:</b> fusion (melting), vaporisation and sublimation. <b>Solution</b> and <b>hydration</b> enthalpies apply when substances dissolve; <b>ionisation</b> enthalpy applies when electrons are removed.`,
        R`Useful formula: \(\Delta_rH^\circ = \sum\Delta_fH^\circ(\text{products}) - \sum\Delta_fH^\circ(\text{reactants})\).`
      ] },

    { h: R`Hess's law and bond enthalpies`,
      body: [
        R`<b>Hess's law:</b> because enthalpy is a state function, the total \(\Delta H\) of a reaction is the same whether it happens in one step or in many. So thermochemical equations can be added, subtracted and multiplied like algebra (doing the same to their \(\Delta H\) values).`,
        R`Using bond enthalpies (for gases): \(\Delta H = \sum\text{bonds broken} - \sum\text{bonds formed}\). Breaking bonds takes energy; forming bonds releases it.`
      ],
      analogy: R`Going from the ground floor to the 5th floor gains the same height whether you take the lift directly or stop at every floor. Hess's law says the same about enthalpy.`,
      mistake: R`Writing "products − reactants" with bond enthalpies. With bond enthalpies it is reactants (broken) − products (formed), the opposite of the \(\Delta_fH\) formula.` },

    { h: R`Entropy and the second law`,
      body: [
        R`<b>Entropy (S)</b> measures how spread out or disordered energy and matter are. Gases have more entropy than liquids, and liquids more than solids. Dissolving, melting and increasing the number of gas molecules all raise entropy.`,
        R`For a reversible process at temperature T: \(\Delta S = \dfrac{q_{rev}}{T}\). At a phase change: \(\Delta S = \dfrac{\Delta H}{T}\).`,
        R`<b>Second law:</b> in any spontaneous process, the total entropy of the universe (system + surroundings) increases.`
      ],
      analogy: R`A neat room becomes messy all by itself over a week, but it never tidies itself up. Nature tends towards greater disorder.` },

    { h: R`Gibbs energy, spontaneity and equilibrium`,
      body: [
        R`To predict whether a reaction happens by itself, combine enthalpy and entropy into the <b>Gibbs energy</b>: \(\Delta G = \Delta H - T\Delta S\).`,
        R`\(\Delta G < 0\): spontaneous. \(\Delta G > 0\): not spontaneous (the reverse is). \(\Delta G = 0\): at equilibrium.`,
        R`If ΔH < 0 and ΔS > 0, the reaction is always spontaneous. If both are positive, it is spontaneous only at high T; if both are negative, only at low T. The crossover temperature is \(T = \Delta H/\Delta S\).`,
        R`Standard Gibbs energy and the equilibrium constant are linked: \(\Delta G^\circ = -RT\ln K = -2.303RT\log K\). A large K means a very negative \(\Delta G^\circ\).`
      ],
      points: [R`"Spontaneous" means it can happen by itself; it says nothing about how fast.`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Classify as open, closed or isolated: (a) tea in an open cup (b) soda in a sealed bottle (c) coffee in an ideal thermos flask.`,
      steps: [R`(a) Steam (matter) and heat both escape.`, R`(b) No matter escapes, but heat can pass through the glass.`, R`(c) Neither matter nor heat can pass.`],
      ans: R`(a) Open (b) Closed (c) Isolated` },
    { level: 1, t: 1, q: R`Give the sign of ΔH for: (a) burning petrol (b) melting ice (c) photosynthesis.`,
      steps: [R`Heat released means negative ΔH; heat absorbed means positive ΔH.`],
      ans: R`(a) negative (exothermic) (b) positive (endothermic) (c) positive (endothermic)` },
    { level: 1, t: 1, q: R`For H₂O(l) → H₂O(g) at 373 K, ΔH = 40.7 kJ/mol. Find ΔU. (R = 8.314 J/mol K)`,
      steps: [R`\(\Delta n_g = 1 - 0 = 1\).`, R`\(\Delta U = \Delta H - \Delta n_gRT = 40.7 - \dfrac{8.314\times373}{1000}\).`],
      ans: R`\(\approx 37.6\) kJ/mol` },
    { level: 2, t: 4, q: R`Find ΔH for the combustion of methane, CH₄ + 2O₂ → CO₂ + 2H₂O(l). (\(\Delta_fH^\circ\): CH₄ −74.8, CO₂ −393.5, H₂O(l) −285.8 kJ/mol)`,
      steps: [R`Products: \(-393.5 + 2(-285.8) = -965.1\).`, R`Reactants: \(-74.8 + 0\) (O₂ is an element).`, R`\(\Delta H = -965.1 - (-74.8)\).`],
      ans: R`−890.3 kJ/mol` },
    { level: 3, t: 6, q: R`A reaction has ΔH = −100 kJ/mol and ΔS = −200 J/(K mol). In what temperature range is it spontaneous?`,
      steps: [R`Both are negative, so it is spontaneous only at low temperature.`, R`Crossover: \(T = \Delta H/\Delta S = \dfrac{-100000}{-200}\).`],
      ans: R`Below 500 K` },
    { level: 3, t: 7, q: R`A reaction has ΔG° = −11.4 kJ/mol at 298 K. Find its equilibrium constant.`,
      steps: [R`\(\log K = \dfrac{-\Delta G^\circ}{2.303RT} = \dfrac{11400}{2.303\times8.314\times298}\).`, R`\(= \dfrac{11400}{5706} \approx 2.0\).`],
      ans: R`\(K \approx 100\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Which of these is a state function?`,
      options: [R`heat`, R`work`, R`enthalpy`, R`neither heat, work nor enthalpy`], correct: 2,
      solution: R`Enthalpy depends only on the state. Heat and work depend on the path.` },
    { level: 1, type: 'mcq', q: R`An isolated system can exchange:`,
      options: [R`matter only`, R`energy only`, R`both matter and energy`, R`neither matter nor energy`], correct: 3,
      solution: R`That is the definition of an isolated system.` },
    { level: 1, type: 'mcq', q: R`For an exothermic reaction:`,
      options: [R`ΔH is negative`, R`ΔH is positive`, R`ΔH is zero`, R`ΔS is always negative`], correct: 0,
      solution: R`Heat is released, so the enthalpy of the system falls.` },
    { level: 1, type: 'mcq', q: R`The SI unit of entropy is:`,
      options: [R`J`, R`J/K`, R`K/J`, R`J mol`], correct: 1,
      solution: R`\(\Delta S = q/T\), so J/K (or J/(K mol) per mole).` },
    { level: 1, type: 'num', q: R`A system absorbs 200 J of heat and does 50 J of work on its surroundings. Find ΔU (in J).`,
      answer: 150, tol: 0.01, unit: 'J',
      solution: R`\(\Delta U = q + w = 200 + (-50) = 150\) J.` },
    { level: 1, type: 'num', q: R`How much heat (in J) raises 100 g of water by 5 K? (c = 4.18 J/g K)`,
      answer: 2090, tol: 0.5, unit: 'J',
      solution: R`\(q = mc\Delta T = 100\times4.18\times5 = 2090\) J.` },
    { level: 2, type: 'mcq', q: R`For N₂(g) + 3H₂(g) → 2NH₃(g) at constant temperature:`,
      options: [R`ΔH = ΔU`, R`ΔH > ΔU`, R`ΔH < ΔU`, R`it cannot be predicted`], correct: 2,
      solution: R`\(\Delta n_g = 2 - 4 = -2\), so \(\Delta H = \Delta U - 2RT < \Delta U\).` },
    { level: 2, type: 'mcq', q: R`A reaction is spontaneous at every temperature when:`,
      options: [R`ΔH > 0, ΔS < 0`, R`ΔH < 0, ΔS > 0`, R`ΔH > 0, ΔS > 0`, R`ΔH < 0, ΔS < 0`], correct: 1,
      solution: R`Then \(\Delta G = \Delta H - T\Delta S\) is negative at every T.` },
    { level: 2, type: 'mcq', q: R`The standard enthalpy of formation is zero for:`,
      options: [R`O₃(g)`, R`H₂O(l)`, R`CO₂(g)`, R`O₂(g)`], correct: 3,
      solution: R`It is zero for an element in its standard state, and O₂(g) is oxygen's standard state (ozone is not).` },
    { level: 2, type: 'mcq', q: R`For a system at equilibrium:`,
      options: [R`ΔG = 0`, R`ΔG > 0`, R`ΔG < 0`, R`ΔG = ΔH`], correct: 0,
      solution: R`At equilibrium there is no driving force in either direction.` },
    { level: 2, type: 'num', q: R`Using \(\Delta_fH^\circ\) values CH₄ −74.8, CO₂ −393.5 and H₂O(l) −285.8 kJ/mol, find the enthalpy of combustion of methane (in kJ/mol).`,
      answer: -890.3, tol: 0.1, unit: 'kJ/mol',
      solution: R`\([-393.5 + 2(-285.8)] - [-74.8] = -890.3\) kJ/mol.` },
    { level: 2, type: 'num', q: R`Water boils at 373 K with \(\Delta_{vap}H = 40.7\) kJ/mol. Find \(\Delta_{vap}S\) (in J/K mol).`,
      answer: 109.1, tol: 0.2, unit: 'J/K mol',
      solution: R`\(\Delta S = \Delta H/T = 40700/373 \approx 109.1\) J/(K mol).` },
    { level: 2, type: 'num', q: R`A reaction has ΔH = −50 kJ/mol and ΔS = −100 J/(K mol). Find ΔG (in kJ/mol) at 300 K.`,
      answer: -20, tol: 0.01, unit: 'kJ/mol',
      solution: R`\(\Delta G = -50 - 300(-0.1) = -50 + 30 = -20\) kJ/mol.` },
    { level: 3, type: 'mcq', q: R`A bomb calorimeter directly measures:`,
      options: [R`ΔH`, R`ΔU`, R`ΔG`, R`ΔS`], correct: 1,
      solution: R`It is sealed at constant volume, so no expansion work is done: \(q_v = \Delta U\).` },
    { level: 3, type: 'mcq', q: R`For any spontaneous process, the entropy change of the universe is:`,
      options: [R`zero`, R`negative`, R`positive`, R`undefined`], correct: 2,
      solution: R`Second law: \(\Delta S_{universe} > 0\) for spontaneous processes.` },
    { level: 3, type: 'num', q: R`A reaction has ΔG° = −11.4 kJ/mol at 298 K. Find its equilibrium constant K.`,
      answer: 100, tol: 2, unit: '',
      solution: R`\(\log K = 11400/(2.303\times8.314\times298) \approx 2.0\), so \(K \approx 100\).` },
    { level: 3, type: 'num', q: R`Using bond enthalpies (kJ/mol) C–H 414, Cl–Cl 243, C–Cl 330 and H–Cl 431, find ΔH (in kJ/mol) for CH₄ + Cl₂ → CH₃Cl + HCl.`,
      answer: -104, tol: 0.01, unit: 'kJ/mol',
      solution: R`Broken: C–H + Cl–Cl = 657. Formed: C–Cl + H–Cl = 761. \(\Delta H = 657 - 761 = -104\) kJ/mol.` }
  ]
});
