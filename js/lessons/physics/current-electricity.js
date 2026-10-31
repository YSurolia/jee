// Lesson: Current Electricity.
var R = String.raw;
JEE.lesson('physics', 'current-electricity', {
  theory: [
    { h: R`Electric current and drift velocity`,
      body: [
        R`<b>Electric current</b> is the rate at which charge flows: \(I = \dfrac{Q}{t}\). Its unit is the ampere (A): 1 A = 1 C/s. By convention, current flows from + to −, opposite to the electrons.`,
        R`In a metal, free electrons zoom about randomly at high speed. When a battery is connected, they slowly drift in one direction. This <b>drift velocity</b> is surprisingly tiny (less than 1 mm/s): \(I = neAv_d\), where \(n\) is the number of free electrons per m³.`,
        R`So why does a bulb light up instantly? The electric field travels through the wire at nearly the speed of light, pushing electrons everywhere at once.`
      ],
      analogy: R`A pipe already full of marbles: push one marble in at one end, and one pops out of the other end immediately, even though each marble moves only a little.`,
      check: { q: R`A charge of 600 C flows in 5 minutes. What is the current?`, ans: R`\(I = 600/300 = 2\) A.` } },

    { h: R`Ohm's law, resistance and resistivity`,
      body: [
        R`<b>Ohm's law:</b> at constant temperature, the current through a metal wire is proportional to the voltage across it: \(V = IR\). \(R\) is the <b>resistance</b>, measured in ohms (Ω).`,
        R`Resistance depends on the wire's shape and material: \(R = \rho\dfrac{L}{A}\). Longer wires resist more; thicker wires resist less. \(\rho\) is the <b>resistivity</b>, which depends only on the material and temperature.`,
        R`Copper and silver have very low resistivity (good conductors); nichrome has high resistivity (used in heaters).`
      ],
      analogy: R`Resistance is like a narrow, crowded lane. A long, narrow lane slows traffic more than a short, wide highway.`,
      points: [R`Stretching a wire to \(n\) times its length (same volume) makes its resistance \(n^2\) times larger.`, R`Conductance \(G = 1/R\), measured in siemens.`] },

    { h: R`V–I graphs: ohmic and non-ohmic`,
      body: [
        R`For an <b>ohmic</b> conductor (a metal at constant temperature), the V–I graph is a straight line through the origin, and its slope gives R.`,
        R`<b>Non-ohmic</b> devices have curved graphs: a filament bulb (it heats up, so R rises), a diode (it conducts only one way), a thermistor (R falls as it warms) and electrolytes.`
      ] },

    { h: R`Temperature and the colour code`,
      body: [
        R`For metals, resistance rises with temperature: \(R_T = R_0(1 + \alpha\Delta T)\), where \(\alpha\) is the temperature coefficient. Hotter atoms vibrate more and get in the electrons' way. For semiconductors, resistance falls with temperature.`,
        R`Small resistors are marked with coloured bands. Digits: Black 0, Brown 1, Red 2, Orange 3, Yellow 4, Green 5, Blue 6, Violet 7, Grey 8, White 9. The first two bands are digits, the third is the power of 10, and the fourth is the tolerance (gold ±5%, silver ±10%).`
      ],
      analogy: R`A popular memory trick for the colours is "B B ROY of Great Britain had a Very Good Wife" (Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White).` },

    { h: R`Resistors in series and parallel`,
      body: [
        R`<b>Series</b> (one after another): the same current flows through each, and the voltages add. \(R = R_1 + R_2 + \dots\)`,
        R`<b>Parallel</b> (side by side): the same voltage is across each, and the currents add. \(\dfrac1R = \dfrac1{R_1} + \dfrac1{R_2} + \dots\). The total is always smaller than the smallest resistor.`,
        R`For two in parallel: \(R = \dfrac{R_1R_2}{R_1 + R_2}\) ("product over sum").`
      ],
      analogy: R`Home appliances are wired in parallel, so each one gets the full 220 V and can be switched on or off independently. Old festival light strings were in series: one bulb fuses and they all go dark.`,
      mistake: R`Adding parallel resistances directly. Two 10 Ω resistors in parallel give 5 Ω, not 20 Ω.` },

    { h: R`Electrical energy and power`,
      body: [
        R`A current \(I\) through a voltage \(V\) delivers <b>power</b> \(P = VI = I^2R = \dfrac{V^2}{R}\).`,
        R`Energy used: \(E = Pt\). Electricity boards charge per kilowatt-hour (the "unit"): 1 kWh = 1000 W × 3600 s = \(3.6\times10^6\) J.`,
        R`In a resistor, this energy turns into heat (Joule heating), which is used in heaters, irons, toasters and fuses.`
      ],
      points: [R`A bulb rated "100 W, 220 V" has \(R = V^2/P = 484\) Ω.`, R`In series, the bulb with the higher resistance (lower wattage rating) glows brighter.`] },

    { h: R`EMF, internal resistance and cells`,
      body: [
        R`A battery's <b>emf</b> \(\varepsilon\) is the energy it gives each coulomb of charge. But a real cell has some <b>internal resistance</b> \(r\), so when current flows, its terminal voltage drops: \(V = \varepsilon - Ir\), and \(I = \dfrac{\varepsilon}{R + r}\).`,
        R`<b>Cells in series:</b> the emfs add and the internal resistances add. <b>Identical cells in parallel:</b> the emf stays \(\varepsilon\), and the internal resistance becomes \(r/n\).`,
        R`A source delivers maximum power to an external resistor when \(R = r\).`
      ],
      analogy: R`An old torch cell may show 1.5 V on a meter with no load, but the bulb glows dimly. Its internal resistance has grown, so most of the voltage is lost inside.` },

    { h: R`Kirchhoff's laws`,
      body: [
        R`<b>Junction law (KCL):</b> the total current entering a junction equals the total current leaving it. This is conservation of charge.`,
        R`<b>Loop law (KVL):</b> around any closed loop, the sum of all the voltage rises and drops is zero. This is conservation of energy.`,
        R`<b>Method:</b> mark a current in each branch (guess the directions; a negative answer just means the guess was backwards), write KCL at the junctions and KVL around the loops, then solve.`
      ],
      points: [R`Going through a resistor along the current: −IR. Going through a cell from − to +: +ε.`] },

    { h: R`Wheatstone bridge and metre bridge`,
      body: [
        R`A <b>Wheatstone bridge</b> has four resistors P, Q, R, S in a diamond, with a galvanometer across the middle. When \(\dfrac PQ = \dfrac RS\), no current flows through the galvanometer: the bridge is <b>balanced</b>. Then the middle branch can be removed from the calculation.`,
        R`The <b>metre bridge</b> is a practical Wheatstone bridge using a 1 m uniform wire. With an unknown \(X\) and a known \(R\), the balance point at length \(l\) gives \(\dfrac XR = \dfrac{l}{100 - l}\).`
      ],
      check: { q: R`In a balanced bridge, P = 2 Ω, Q = 4 Ω and R = 6 Ω. Find S.`, ans: R`\(S = RQ/P = 6\times4/2 = 12\) Ω.` } }
  ],

  examples: [
    { level: 1, t: 0, q: R`A current of 2 A flows for 5 minutes. How much charge passes, and how many electrons is that?`,
      steps: [R`\(Q = It = 2\times300 = 600\) C.`, R`Electrons \(= Q/e = 600/(1.6\times10^{-19})\).`],
      ans: R`600 C; \(3.75\times10^{21}\) electrons` },
    { level: 1, t: 6, q: R`Find the total resistance of 2 Ω, 3 Ω and 5 Ω (a) in series (b) in parallel.`,
      steps: [R`(a) \(2 + 3 + 5 = 10\) Ω.`, R`(b) \(\dfrac1R = \dfrac12 + \dfrac13 + \dfrac15 = \dfrac{15 + 10 + 6}{30} = \dfrac{31}{30}\).`],
      ans: R`(a) 10 Ω (b) \(30/31 \approx 0.97\) Ω` },
    { level: 1, t: 4, q: R`A 60 W bulb runs on 220 V. Find its current, its resistance, and the energy it uses in 10 hours.`,
      steps: [R`\(I = P/V = 60/220 \approx 0.27\) A.`, R`\(R = V^2/P = 48400/60 \approx 807\) Ω.`, R`\(E = 0.06\) kW × 10 h.`],
      ans: R`0.27 A; about 807 Ω; 0.6 kWh` },
    { level: 3, t: 6, q: R`A 12 Ω wire is bent into a circle. Find the resistance between (a) two diametrically opposite points (b) two points a quarter-circle apart.`,
      steps: [R`(a) The two halves are 6 Ω each, in parallel: \(6\times6/12 = 3\) Ω.`, R`(b) The arcs are a quarter (3 Ω) and three quarters (9 Ω), in parallel: \(\dfrac{3\times9}{12}\).`],
      ans: R`(a) 3 Ω (b) 2.25 Ω` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of resistance is the:`,
      options: [R`volt`, R`ampere`, R`ohm`, R`watt`], correct: 2,
      solution: R`\(R = V/I\), measured in volts per ampere = ohm (Ω).` },
    { level: 1, type: 'mcq', q: R`Electric current is the rate of flow of:`,
      options: [R`charge`, R`energy`, R`voltage`, R`resistance`], correct: 0,
      solution: R`\(I = Q/t\).` },
    { level: 1, type: 'mcq', q: R`Ohm's law states that:`,
      options: [R`\(V = I/R\)`, R`\(I = VR\)`, R`\(R = VI\)`, R`\(V = IR\)`], correct: 3,
      solution: R`At constant temperature, voltage = current × resistance.` },
    { level: 1, type: 'mcq', q: R`A fuse wire should have a:`,
      options: [R`high melting point`, R`low melting point`, R`zero resistance`, R`very large thickness`], correct: 1,
      solution: R`It must melt quickly when the current gets too large, protecting the circuit.` },
    { level: 1, type: 'num', q: R`Find the current (in A) through a 10 Ω resistor connected across 5 V.`,
      answer: 0.5, tol: 0.001, unit: 'A',
      solution: R`\(I = V/R = 5/10 = 0.5\) A.` },
    { level: 1, type: 'num', q: R`A device draws 2 A from a 220 V supply. Find its power (in W).`,
      answer: 440, tol: 0.1, unit: 'W',
      solution: R`\(P = VI = 220\times2 = 440\) W.` },
    { level: 2, type: 'mcq', q: R`The resistivity of a wire depends on:`,
      options: [R`its length`, R`its cross-sectional area`, R`its material and temperature`, R`its shape`], correct: 2,
      solution: R`Resistance depends on the shape, but resistivity is a property of the material (and changes with temperature).` },
    { level: 2, type: 'mcq', q: R`Kirchhoff's junction law is based on conservation of:`,
      options: [R`energy`, R`charge`, R`momentum`, R`mass`], correct: 1,
      solution: R`Charge can't pile up at a junction, so current in = current out.` },
    { level: 2, type: 'mcq', q: R`Two identical bulbs are connected to the same supply, first in series and then in parallel. The ratio of the total power (series : parallel) is:`,
      options: [R`4 : 1`, R`1 : 2`, R`2 : 1`, R`1 : 4`], correct: 3,
      solution: R`Series: \(2R\), so \(P = V^2/2R\). Parallel: \(R/2\), so \(P = 2V^2/R\). Ratio 1 : 4.` },
    { level: 2, type: 'mcq', q: R`As the temperature of a metal rises, its resistance:`,
      options: [R`increases`, R`decreases`, R`stays the same`, R`becomes zero`], correct: 0,
      solution: R`Atoms vibrate more and scatter electrons more, so \(R = R_0(1 + \alpha\Delta T)\) rises.` },
    { level: 2, type: 'num', q: R`A wire has a resistance of 4 Ω. A second wire of the same material has twice the length and twice the radius. Find its resistance (in Ω).`,
      answer: 2, tol: 0.001, unit: 'Ω',
      solution: R`\(R \propto L/r^2\): \(4\times2/4 = 2\) Ω.` },
    { level: 2, type: 'num', q: R`A cell of emf 6 V and internal resistance 0.5 Ω is connected to a 2.5 Ω resistor. Find its terminal voltage (in V).`,
      answer: 5, tol: 0.001, unit: 'V',
      solution: R`\(I = 6/3 = 2\) A, so \(V = \varepsilon - Ir = 6 - 1 = 5\) V.` },
    { level: 2, type: 'num', q: R`A 100 W bulb is used 5 hours a day for 30 days. How many units (kWh) does it use?`,
      answer: 15, tol: 0.001, unit: 'kWh',
      solution: R`\(0.1\) kW × 5 h × 30 = 15 kWh.` },
    { level: 3, type: 'mcq', q: R`A Wheatstone bridge is balanced with P = 2 Ω, Q = 4 Ω and R = 6 Ω. The value of S is:`,
      options: [R`3 Ω`, R`6 Ω`, R`12 Ω`, R`8 Ω`], correct: 2,
      solution: R`\(P/Q = R/S\), so \(S = RQ/P = 12\) Ω.` },
    { level: 3, type: 'mcq', q: R`A cell of internal resistance \(r\) delivers maximum power to an external resistor \(R\) when:`,
      options: [R`\(R = 0\)`, R`\(R = r\)`, R`\(R = 2r\)`, R`\(R\) is very large`], correct: 1,
      solution: R`\(P = \varepsilon^2R/(R + r)^2\) is maximum when \(R = r\) (maximum power transfer theorem).` },
    { level: 3, type: 'num', q: R`Two identical cells (2 V, 1 Ω each) in parallel are connected to a 1.5 Ω resistor. Find the current (in A).`,
      answer: 1, tol: 0.001, unit: 'A',
      solution: R`In parallel: \(\varepsilon = 2\) V, \(r = 0.5\) Ω. \(I = 2/(1.5 + 0.5) = 1\) A.` },
    { level: 3, type: 'num', q: R`A wire's resistance is 5 Ω at 0 °C and 5.5 Ω at 50 °C. Find its resistance (in Ω) at 100 °C.`,
      answer: 6, tol: 0.001, unit: 'Ω',
      solution: R`\(\alpha = 0.5/(5\times50) = 0.002\) /°C. \(R_{100} = 5(1 + 0.002\times100) = 6\) Ω.` }
  ]
});
