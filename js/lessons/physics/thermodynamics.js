// Lesson: Thermodynamics.
var R = String.raw;
JEE.lesson('physics', 'thermodynamics', {
  theory: [
    { h: R`Systems and the zeroth law`,
      body: [
        R`Thermodynamics studies heat, work and energy. We pick a <b>system</b> to study (say, the gas in a cylinder); everything else is the <b>surroundings</b>.`,
        R`Two bodies in contact exchange heat until they reach the same temperature. Then they are in <b>thermal equilibrium</b> and no more heat flows.`,
        R`<b>Zeroth law:</b> if A is in thermal equilibrium with C, and B is in thermal equilibrium with C, then A and B are in equilibrium with each other. This is why a thermometer (C) works and why "temperature" makes sense.`
      ],
      analogy: R`When a doctor puts a thermometer under your tongue, they wait a minute. The thermometer and your body reach thermal equilibrium, so the reading equals your temperature.`,
      check: { q: R`Which quantity becomes equal for two bodies in thermal equilibrium?`, ans: R`Temperature.` } },

    { h: R`Heat, work and internal energy`,
      body: [
        R`<b>Internal energy (U)</b> is the total energy of all the molecules inside the system. For an ideal gas it depends <b>only on temperature</b>.`,
        R`There are two ways to change U: give <b>heat</b> (Q), or do <b>work</b> (W). When a gas expands against a pressure, it does work \(W = \int P\,dV\), which is the area under the P–V graph. At constant pressure, \(W = P\Delta V\).`,
        R`Heat and work depend on the <b>path</b> taken. Internal energy depends only on the <b>state</b> (P, V, T), so it is called a <b>state function</b>.`
      ],
      points: [R`Expansion: the gas does positive work. Compression: work is done on the gas.`, R`Work = area under the P–V curve.`] },

    { h: R`The first law: energy is never lost`,
      body: [
        R`The first law is conservation of energy for heat engines: \(Q = \Delta U + W\).`,
        R`In words: the heat you supply partly raises the internal energy and partly gets used for work done by the gas.`,
        R`<b>Signs (physics convention):</b> Q is positive when heat goes <i>in</i>; W is positive when the gas does work <i>on</i> the surroundings.`
      ],
      analogy: R`Your salary (Q) is partly saved in the bank (ΔU) and partly spent (W). Money in = savings + spending.`,
      mistake: R`Mixing sign conventions. Chemistry books often write \(\Delta U = q + w\), where \(w\) is work done <i>on</i> the system. Stick to one convention in a problem.` },

    { h: R`Isothermal, adiabatic and other processes`,
      body: [
        R`<b>Isothermal</b> (constant T): \(\Delta U = 0\), so \(Q = W = nRT\ln\dfrac{V_2}{V_1}\). The process must be slow, with good heat contact.`,
        R`<b>Adiabatic</b> (no heat exchange, Q = 0): \(W = -\Delta U\). The gas cools when it expands and heats when compressed. \(PV^\gamma\) = constant and \(TV^{\gamma - 1}\) = constant.`,
        R`<b>Isochoric</b> (constant V): W = 0, so \(Q = \Delta U\). <b>Isobaric</b> (constant P): \(W = P\Delta V\).`,
        R`Molar heat capacities: \(C_p - C_v = R\) and \(\gamma = C_p/C_v\) (5/3 for monatomic gases, 7/5 for diatomic).`
      ],
      analogy: R`Pumping up a cycle tyre quickly makes the pump warm. The compression is nearly adiabatic, so the work you do heats the air.`,
      points: [R`On a P–V graph, an adiabatic curve is steeper than an isothermal one through the same point.`, R`\(\Delta U = nC_v\Delta T\) for <i>any</i> process on an ideal gas.`] },

    { h: R`Heat engines and the second law`,
      body: [
        R`A <b>heat engine</b> takes heat \(Q_1\) from a hot source, turns part of it into work \(W\), and throws the rest \(Q_2\) into a cold sink. Efficiency: \(\eta = \dfrac{W}{Q_1} = 1 - \dfrac{Q_2}{Q_1}\).`,
        R`<b>Second law (Kelvin–Planck):</b> no engine can turn heat completely into work; some heat must always be rejected. <b>(Clausius):</b> heat cannot flow from cold to hot on its own; a refrigerator needs work to do it.`,
        R`The second law also explains why many things happen in only one direction: a hot cup cools down, but never heats up by itself.`
      ],
      analogy: R`A car engine burns petrol (hot source), turns about a third of the energy into motion, and the rest goes out as hot exhaust and through the radiator (cold sink).` },

    { h: R`Reversible and irreversible processes`,
      body: [
        R`A <b>reversible</b> process can be run backward so that both the system and the surroundings return exactly to their start. It must be extremely slow (quasi-static) with no friction and no heat flow across a finite temperature difference.`,
        R`All real processes are <b>irreversible</b>: friction, sudden expansion, mixing, and heat flowing from hot to cold all waste some energy. Reversible processes are an ideal limit, like a perfectly frictionless surface.`
      ],
      check: { q: R`Is the free expansion of a gas into a vacuum reversible?`, ans: R`No. It happens suddenly and the gas never goes back into the corner on its own.` } },

    { h: R`The Carnot engine and refrigerators`,
      body: [
        R`The <b>Carnot engine</b> is an ideal reversible engine running between two temperatures \(T_1\) (hot) and \(T_2\) (cold), using two isothermal and two adiabatic steps.`,
        R`Its efficiency is the highest possible between those temperatures: \(\eta = 1 - \dfrac{T_2}{T_1}\) (temperatures in kelvin). No real engine can do better.`,
        R`A <b>refrigerator</b> is an engine run backward. Its coefficient of performance is \(\text{COP} = \dfrac{Q_2}{W} = \dfrac{T_2}{T_1 - T_2}\).`
      ],
      points: [R`η = 100% would need \(T_2 = 0\) K, which is impossible.`, R`Use kelvin, never °C, in these formulas.`],
      mistake: R`Writing \(\eta = 1 - 27/127\) with Celsius values. Convert first: \(1 - 300/400 = 25\%\).` }
  ],

  examples: [
    { level: 1, t: 1, q: R`A gas does 300 J of work while its internal energy rises by 200 J. How much heat was supplied?`,
      steps: [R`First law: \(Q = \Delta U + W\).`, R`\(Q = 200 + 300\).`],
      ans: R`500 J` },
    { level: 1, t: 6, q: R`An engine takes 1000 J of heat from a hot source and rejects 600 J to the sink. Find the work done and the efficiency.`,
      steps: [R`\(W = Q_1 - Q_2 = 400\) J.`, R`\(\eta = W/Q_1 = 400/1000\).`],
      ans: R`400 J; 40%` },
    { level: 1, t: 3, q: R`An ideal gas does 150 J of work while expanding isothermally. How much heat does it absorb?`,
      steps: [R`Isothermal, so T is constant and \(\Delta U = 0\).`, R`\(Q = \Delta U + W = 0 + 150\).`],
      ans: R`150 J` },
    { level: 3, t: 3, q: R`A monatomic ideal gas at 300 K is compressed adiabatically to one-eighth of its volume. Find its final temperature.`,
      steps: [R`Adiabatic: \(TV^{\gamma - 1}\) = constant, with \(\gamma = 5/3\), so \(\gamma - 1 = 2/3\).`, R`\(T_2 = T_1\left(\dfrac{V_1}{V_2}\right)^{2/3} = 300\times8^{2/3} = 300\times4\).`],
      ans: R`1200 K` },
    { level: 3, t: 6, q: R`A refrigerator keeps its inside at −3 °C in a room at 27 °C. How much work is needed (ideally) to remove 900 J of heat from inside?`,
      steps: [R`In kelvin: \(T_2 = 270\) K, \(T_1 = 300\) K.`, R`\(\text{COP} = \dfrac{270}{300 - 270} = 9\).`, R`\(W = Q_2/\text{COP} = 900/9\).`],
      ans: R`100 J` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The zeroth law of thermodynamics leads to the idea of:`,
      options: [R`temperature`, R`heat`, R`work`, R`internal energy`], correct: 0,
      solution: R`It says thermal equilibrium is transitive, which is what lets us define temperature.` },
    { level: 1, type: 'mcq', q: R`In an isothermal process, which quantity stays constant?`,
      options: [R`pressure`, R`volume`, R`temperature`, R`heat`], correct: 2,
      solution: R`"Iso-thermal" means equal temperature.` },
    { level: 1, type: 'mcq', q: R`In an adiabatic process:`,
      options: [R`temperature stays constant`, R`no work is done`, R`pressure stays constant`, R`no heat is exchanged`], correct: 3,
      solution: R`Adiabatic means Q = 0: no heat enters or leaves.` },
    { level: 1, type: 'mcq', q: R`The work done by a gas in an isochoric (constant volume) process is:`,
      options: [R`zero`, R`\(P\Delta V\)`, R`\(nRT\)`, R`maximum`], correct: 0,
      solution: R`\(W = \int P\,dV = 0\), because \(dV = 0\).` },
    { level: 1, type: 'num', q: R`A gas absorbs 500 J of heat and does 200 J of work. Find the change in its internal energy (in J).`,
      answer: 300, tol: 0.01, unit: 'J',
      solution: R`\(\Delta U = Q - W = 500 - 200 = 300\) J.` },
    { level: 1, type: 'num', q: R`An engine takes in 2000 J of heat and does 500 J of work. Find its efficiency (in %).`,
      answer: 25, tol: 0.01, unit: '%',
      solution: R`\(\eta = 500/2000 = 0.25 = 25\%\).` },
    { level: 2, type: 'mcq', q: R`The internal energy of an ideal gas depends on:`,
      options: [R`pressure only`, R`volume only`, R`temperature only`, R`density only`], correct: 2,
      solution: R`Ideal-gas molecules don't attract each other, so U is just their KE, which depends only on T.` },
    { level: 2, type: 'mcq', q: R`Compared with an isothermal curve through the same point on a P–V diagram, an adiabatic curve is:`,
      options: [R`less steep`, R`steeper`, R`equally steep`, R`parallel`], correct: 1,
      solution: R`Slope of an adiabatic = \(-\gamma P/V\); slope of an isothermal = \(-P/V\). Since \(\gamma > 1\), the adiabatic is steeper.` },
    { level: 2, type: 'mcq', q: R`The efficiency of a Carnot engine working between 400 K and 300 K is:`,
      options: [R`75%`, R`33%`, R`50%`, R`25%`], correct: 3,
      solution: R`\(\eta = 1 - 300/400 = 0.25\).` },
    { level: 2, type: 'mcq', q: R`For an ideal gas, \(C_p - C_v\) per mole equals:`,
      options: [R`\(R\)`, R`\(2R\)`, R`\(R/2\)`, R`0`], correct: 0,
      solution: R`Mayer's relation: \(C_p - C_v = R\).` },
    { level: 2, type: 'num', q: R`A gas expands at a constant pressure of \(2\times10^5\) Pa from 1 L to 4 L. Find the work it does (in J).`,
      answer: 600, tol: 0.1, unit: 'J',
      solution: R`\(W = P\Delta V = 2\times10^5\times3\times10^{-3} = 600\) J.` },
    { level: 2, type: 'num', q: R`Find the efficiency (in %) of a Carnot engine working between 527 °C and 127 °C.`,
      answer: 50, tol: 0.01, unit: '%',
      solution: R`\(T_1 = 800\) K, \(T_2 = 400\) K, so \(\eta = 1 - 400/800 = 50\%\).` },
    { level: 2, type: 'num', q: R`Find the coefficient of performance of an ideal refrigerator working between 250 K and 300 K.`,
      answer: 5, tol: 0.01, unit: '',
      solution: R`\(\text{COP} = \dfrac{T_2}{T_1 - T_2} = \dfrac{250}{50} = 5\).` },
    { level: 3, type: 'mcq', q: R`In a complete cyclic process, the net change in the internal energy of the gas is:`,
      options: [R`positive`, R`negative`, R`zero`, R`equal to the work done`], correct: 2,
      solution: R`The gas returns to its starting state, and U is a state function, so \(\Delta U = 0\).` },
    { level: 3, type: 'mcq', q: R`A diatomic gas (\(\gamma = 1.4\)) is compressed adiabatically to half its volume. Its absolute temperature is multiplied by about:`,
      options: [R`2`, R`1.32`, R`1.41`, R`0.76`], correct: 1,
      solution: R`\(T_2/T_1 = 2^{\gamma - 1} = 2^{0.4} \approx 1.32\).` },
    { level: 3, type: 'num', q: R`2 mol of a monatomic ideal gas is heated at constant pressure through 50 K. How much heat (in J) is absorbed? (R = 8.314)`,
      answer: 2078.5, tol: 1, unit: 'J',
      solution: R`\(C_p = \tfrac52R\), so \(Q = nC_p\Delta T = 2\times2.5\times8.314\times50 \approx 2078.5\) J.` },
    { level: 3, type: 'num', q: R`A Carnot engine has an efficiency of 40%. Lowering its sink temperature by 50 K (with the source unchanged) raises the efficiency to 50%. Find the source temperature (in K).`,
      answer: 500, tol: 0.5, unit: 'K',
      solution: R`\(T_2 = 0.6T_1\) and \(T_2 - 50 = 0.5T_1\). Subtracting: \(0.1T_1 = 50\), so \(T_1 = 500\) K.` }
  ]
});
