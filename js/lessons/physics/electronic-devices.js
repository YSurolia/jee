// Lesson: Electronic Devices.
var R = String.raw;
JEE.lesson('physics', 'electronic-devices', {
  theory: [
    { h: R`Conductors, insulators and semiconductors`,
      body: [
        R`In a solid, electrons sit in energy <b>bands</b>. The <b>valence band</b> is full of bound electrons; the <b>conduction band</b> above it has electrons free to move. Between them is the <b>band gap</b> \(E_g\).`,
        R`<b>Conductors</b> (metals): the bands overlap, so there are plenty of free electrons. <b>Insulators</b>: a huge gap (over 3 eV), so almost no free electrons. <b>Semiconductors</b> (Si, Ge): a small gap (Si 1.1 eV, Ge 0.7 eV). A little heat lets some electrons jump across.`,
        R`When an electron jumps up, it leaves behind a vacancy called a <b>hole</b>, which behaves like a positive charge carrier.`
      ],
      analogy: R`Think of a two-floor car park. A full ground floor (valence band) means no car can move; an empty upper floor (conduction band) lets any car that gets there drive freely. The band gap is the ramp between floors.`,
      points: [R`Semiconductors conduct better when hot (more electrons jump across), the opposite of metals.`] },

    { h: R`Doping: n-type and p-type`,
      body: [
        R`A pure (intrinsic) semiconductor has equal numbers of free electrons and holes: \(n_e = n_h = n_i\). Adding a tiny amount of impurity (<b>doping</b>) changes this enormously.`,
        R`<b>n-type:</b> add a pentavalent atom (P, As, Sb). Its fifth electron becomes free, so electrons are the majority carriers.`,
        R`<b>p-type:</b> add a trivalent atom (B, Al, Ga, In). It is one electron short, which creates a hole, so holes are the majority carriers.`,
        R`In all cases, \(n_en_h = n_i^2\).`
      ],
      points: [R`A doped semiconductor is still electrically neutral overall.`],
      mistake: R`Calling an n-type semiconductor negatively charged. The extra electrons are balanced by the positive donor ions.` },

    { h: R`The p–n junction diode`,
      body: [
        R`Join p-type and n-type material. Near the junction, electrons and holes cross over and cancel, leaving a thin <b>depletion layer</b> with no free carriers and a <b>barrier potential</b> (about 0.7 V for Si, 0.3 V for Ge).`,
        R`<b>Forward bias</b> (p to +, n to −): the barrier is lowered. Once the voltage passes the <b>knee voltage</b>, the current rises steeply.`,
        R`<b>Reverse bias</b> (p to −, n to +): the depletion layer widens, and only a tiny leakage current flows, until breakdown at a large reverse voltage.`,
        R`So a diode acts like a one-way valve for current.`
      ],
      analogy: R`A diode is like a one-way turnstile at a metro station: easy to go through in one direction, blocked in the other.` },

    { h: R`The diode as a rectifier`,
      body: [
        R`<b>Rectification</b> turns AC into DC. A <b>half-wave rectifier</b> (one diode) passes only the positive halves of the AC wave; its output frequency equals the input frequency.`,
        R`A <b>full-wave rectifier</b> (two diodes with a centre-tapped transformer, or four in a bridge) uses both halves, so the output has twice the input frequency (100 Hz for 50 Hz mains).`,
        R`A capacitor across the output (a <b>filter</b>) smooths the bumpy DC.`
      ],
      analogy: R`Every phone charger contains a rectifier, because your phone battery needs DC but the wall socket gives AC.` },

    { h: R`LEDs, photodiodes and solar cells`,
      body: [
        R`<b>LED</b> (light-emitting diode): forward biased. Electrons falling across the band gap give out light of energy \(\approx E_g\), so the colour depends on the material: \(\lambda = \dfrac{hc}{E_g}\).`,
        R`<b>Photodiode:</b> reverse biased. Light falling on it creates electron–hole pairs, and the small reverse current changes a lot with light intensity. It is used in light sensors.`,
        R`<b>Solar cell:</b> no external bias. Light creates electron–hole pairs that the junction's own field separates, producing an emf (about 0.5 V per cell).`
      ],
      points: [R`LED: forward bias. Photodiode: reverse bias. Solar cell: no bias.`] },

    { h: R`The Zener diode as a voltage regulator`,
      body: [
        R`A <b>Zener diode</b> is designed to work in reverse breakdown. Once broken down, the voltage across it stays almost fixed at \(V_Z\) over a wide range of currents.`,
        R`Connected in reverse bias across a load (with a series resistor), it keeps the load voltage steady at \(V_Z\) even when the input voltage changes. Extra input voltage is dropped across the series resistor.`,
        R`Currents: series current \(= \dfrac{V_{in} - V_Z}{R_s}\); load current \(= V_Z/R_L\); Zener current = series current − load current.`
      ] },

    { h: R`Logic gates`,
      body: [
        R`Digital circuits use only two states: 1 (high) and 0 (low). <b>Logic gates</b> combine inputs to give an output:`,
        R`<b>AND</b> (\(Y = A\cdot B\)): 1 only if both inputs are 1. <b>OR</b> (\(Y = A + B\)): 1 if either input is 1. <b>NOT</b> (\(Y = \bar A\)): flips the input.`,
        R`<b>NAND</b> = NOT(AND): 0 only when both inputs are 1. <b>NOR</b> = NOT(OR): 1 only when both inputs are 0.`,
        R`NAND and NOR are <b>universal gates</b>: any other gate can be built using only NANDs (or only NORs).`
      ],
      analogy: R`AND is like a bank locker that needs both the customer's key and the bank's key. OR is like a room with two doors: either one gets you in.`,
      check: { q: R`What does a NAND gate give when both inputs are 1?`, ans: R`0. AND gives 1, and NOT flips it to 0.` } }
  ],

  examples: [
    { level: 1, t: 5, q: R`Write the truth table of an AND gate, and give its output for A = 1, B = 0.`,
      steps: [R`AND outputs 1 only when both inputs are 1.`, R`Rows (A, B → Y): 0 0 → 0, 0 1 → 0, 1 0 → 0, 1 1 → 1.`],
      ans: R`For A = 1, B = 0: Y = 0` },
    { level: 1, t: 0, q: R`Silicon is doped with (a) phosphorus (b) boron. What type of semiconductor results, and what are the majority carriers?`,
      steps: [R`P has 5 valence electrons, so one is left over and becomes free.`, R`B has 3, so one bond is incomplete, which makes a hole.`],
      ans: R`(a) n-type, electrons (b) p-type, holes` },
    { level: 1, t: 2, q: R`The input to a rectifier is 60 Hz AC. How many output pulses per second are there for (a) half-wave (b) full-wave rectification?`,
      steps: [R`Half-wave: one pulse per cycle.`, R`Full-wave: two pulses per cycle.`],
      ans: R`(a) 60 (b) 120` },
    { level: 3, t: 5, q: R`The output of a NOR gate is fed into a NOT gate. Which single gate does this combination behave like? Show this with a truth table.`,
      steps: [R`NOR: \(Y_1 = \overline{A + B}\). NOT: \(Y = \overline{Y_1} = A + B\).`, R`Truth table (A, B → Y): 00 → 0, 01 → 1, 10 → 1, 11 → 1.`],
      ans: R`An OR gate (and a NOT can itself be made from a NOR with its inputs joined, so NOR alone builds OR)` },
    { level: 3, t: 1, q: R`Two silicon diodes (0.7 V each) are connected in series, forward biased, with a 360 Ω resistor across a 5 V battery. Find the current.`,
      steps: [R`Voltage across the resistor \(= 5 - 2(0.7) = 3.6\) V.`, R`\(I = 3.6/360\).`],
      ans: R`10 mA` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Pure silicon at absolute zero (0 K) behaves as:`,
      options: [R`a conductor`, R`an insulator`, R`a superconductor`, R`a metal`], correct: 1,
      solution: R`With no thermal energy, no electrons can cross the band gap.` },
    { level: 1, type: 'mcq', q: R`The majority charge carriers in a p-type semiconductor are:`,
      options: [R`holes`, R`electrons`, R`protons`, R`ions`], correct: 0,
      solution: R`Trivalent impurities create holes.` },
    { level: 1, type: 'mcq', q: R`The output of an OR gate when both inputs are 0 is:`,
      options: [R`1`, R`equal to A`, R`undefined`, R`0`], correct: 3,
      solution: R`OR is 1 if any input is 1. With none, the output is 0.` },
    { level: 1, type: 'mcq', q: R`A p–n junction diode lets current flow:`,
      options: [R`in both directions`, R`in no direction`, R`only with AC`, R`in one direction only`], correct: 3,
      solution: R`It conducts in forward bias and blocks in reverse bias.` },
    { level: 1, type: 'num', q: R`What is the approximate knee (cut-in) voltage of a silicon diode, in volts?`,
      answer: 0.7, tol: 0.001, unit: 'V',
      solution: R`About 0.7 V for Si (0.3 V for Ge).` },
    { level: 1, type: 'num', q: R`A full-wave rectifier is fed with 50 Hz AC. What is the frequency (in Hz) of its output ripple?`,
      answer: 100, tol: 0.01, unit: 'Hz',
      solution: R`Both halves of each cycle give a pulse: \(2\times50 = 100\) Hz.` },
    { level: 2, type: 'mcq', q: R`Doping germanium with arsenic produces:`,
      options: [R`a p-type semiconductor`, R`an n-type semiconductor`, R`an intrinsic semiconductor`, R`an insulator`], correct: 1,
      solution: R`Arsenic is pentavalent and donates free electrons.` },
    { level: 2, type: 'mcq', q: R`In reverse bias, the depletion layer of a p–n junction:`,
      options: [R`widens`, R`narrows`, R`disappears`, R`stays the same`], correct: 0,
      solution: R`The applied voltage pulls the carriers away from the junction, widening the depletion layer.` },
    { level: 2, type: 'mcq', q: R`A Zener diode is mainly used as a:`,
      options: [R`amplifier`, R`rectifier`, R`voltage regulator`, R`oscillator`], correct: 2,
      solution: R`In breakdown it holds a nearly constant voltage.` },
    { level: 2, type: 'mcq', q: R`Which are the universal gates?`,
      options: [R`AND and OR`, R`NOT and OR`, R`NAND and NOR`, R`XOR and AND`], correct: 2,
      solution: R`Any logic circuit can be built from NAND gates alone, or from NOR gates alone.` },
    { level: 2, type: 'num', q: R`An LED has a band gap of 2.48 eV. Find the wavelength (in nm) of the light it emits.`,
      answer: 500, tol: 0.5, unit: 'nm',
      solution: R`\(\lambda = 1240/2.48 = 500\) nm (green).` },
    { level: 2, type: 'num', q: R`A germanium diode (0.3 V drop) in forward bias is connected in series with a 270 Ω resistor across a 3 V battery. Find the current (in mA).`,
      answer: 10, tol: 0.01, unit: 'mA',
      solution: R`\(I = (3 - 0.3)/270 = 0.01\) A = 10 mA.` },
    { level: 2, type: 'num', q: R`A semiconductor has \(n_i = 10^{16}\) m⁻³. After doping, \(n_e = 10^{20}\) m⁻³. Find \(n_h\) in units of \(10^{12}\) m⁻³.`,
      answer: 1, tol: 0.001, unit: '× 10¹² m⁻³',
      solution: R`\(n_h = n_i^2/n_e = 10^{32}/10^{20} = 10^{12}\) m⁻³.` },
    { level: 3, type: 'mcq', q: R`A NAND gate with both of its inputs joined together behaves as a:`,
      options: [R`NOT gate`, R`AND gate`, R`OR gate`, R`NOR gate`], correct: 0,
      solution: R`\(\overline{A\cdot A} = \bar A\).` },
    { level: 3, type: 'mcq', q: R`A photodiode is normally operated in:`,
      options: [R`forward bias`, R`reverse bias`, R`no bias`, R`either bias equally well`], correct: 1,
      solution: R`In reverse bias, the dark current is tiny, so the current produced by light stands out clearly.` },
    { level: 3, type: 'num', q: R`A 5 V Zener regulates a 1 kΩ load. The supply is 12 V and the series resistor is 350 Ω. Find the current through the Zener (in mA).`,
      answer: 15, tol: 0.01, unit: 'mA',
      solution: R`Series current \(= (12 - 5)/350 = 20\) mA; load current \(= 5/1000 = 5\) mA; Zener current \(= 20 - 5 = 15\) mA.` },
    { level: 3, type: 'num', q: R`Find the output Y = (A NAND B) NOR C for A = 0, B = 1, C = 0.`,
      answer: 0, tol: 0.001, unit: '',
      solution: R`A NAND B = NOT(0·1) = 1. Then 1 NOR 0 = NOT(1 + 0) = 0.` }
  ]
});
