// Lesson: Electromagnetic Induction and Alternating Currents.
var R = String.raw;
JEE.lesson('physics', 'emi-ac', {
  theory: [
    { h: R`Magnetic flux and Faraday's law`,
      body: [
        R`Currents make magnetic fields. Faraday asked the reverse question: can magnets make currents? Yes, but only when something is <b>changing</b>.`,
        R`<b>Magnetic flux</b> through a loop measures how much field passes through it: \(\Phi = BA\cos\theta\), measured in webers (Wb).`,
        R`<b>Faraday's law:</b> whenever the flux through a coil changes, an emf is induced: \(\varepsilon = -N\dfrac{d\Phi}{dt}\). The faster the change, the bigger the emf.`,
        R`Flux can change in three ways: change \(B\) (move a magnet), change \(A\) (stretch or slide part of the circuit), or change \(\theta\) (rotate the coil).`
      ],
      analogy: R`A bicycle dynamo spins a magnet next to a coil. The flux through the coil keeps changing, which makes the emf that lights the lamp. Stop pedalling and the light goes out.`,
      points: [R`A steady magnet next to a still coil induces nothing; something must change.`],
      check: { q: R`The flux through a single loop falls from 0.5 Wb to 0.1 Wb in 0.2 s. What emf is induced?`, ans: R`\(0.4/0.2 = 2\) V.` } },

    { h: R`Lenz's law: nature resists change`,
      body: [
        R`The minus sign in Faraday's law is <b>Lenz's law</b>: the induced current always flows so as to <b>oppose the change</b> that produced it.`,
        R`Push a magnet's N-pole towards a coil and the coil's near face becomes N, pushing back. Pull it away and the face becomes S, pulling back.`,
        R`This is conservation of energy: you must do work against this opposition, and that work becomes electrical energy.`
      ],
      analogy: R`It's like a stubborn friend who always resists: you push, they push back; you pull, they hold on.`,
      mistake: R`Thinking the induced field always opposes the magnet's field. It opposes the <i>change</i> in flux. If the flux is falling, the induced field adds to it.` },

    { h: R`Motional emf and induced current`,
      body: [
        R`A rod of length \(l\) moving at speed \(v\) through a field \(B\) (all mutually perpendicular) has an emf across its ends: \(\varepsilon = Blv\). The magnetic force pushes the free charges to one end.`,
        R`If the rod is part of a closed circuit of resistance \(R\), a current \(I = \varepsilon/R\) flows. The field then pushes back on the current with a force \(BIl\), which you must overcome to keep the rod moving.`
      ] },

    { h: R`Eddy currents`,
      body: [
        R`A changing flux through a solid piece of metal induces swirling currents inside it, called <b>eddy currents</b>. They waste energy as heat.`,
        R`To reduce them, transformer cores are made from thin insulated sheets (laminations).`,
        R`They can also be useful: induction cooktops, magnetic braking in trains, metal detectors and damping in meters all use eddy currents.`
      ],
      analogy: R`Drop a strong magnet down a copper pipe and it falls slowly, as if through honey. Eddy currents in the pipe oppose its fall.` },

    { h: R`Self and mutual inductance`,
      body: [
        R`A coil resists changes in its own current, because the changing current changes its own flux and induces an opposing emf: \(\varepsilon = -L\dfrac{dI}{dt}\). \(L\) is the <b>self-inductance</b>, measured in henry (H). For a solenoid, \(L = \mu_0n^2Al\).`,
        R`Two coils near each other: a changing current in one induces an emf in the other: \(\varepsilon_2 = -M\dfrac{dI_1}{dt}\). \(M\) is the <b>mutual inductance</b>.`,
        R`An inductor stores energy in its magnetic field: \(U = \tfrac12LI^2\).`
      ],
      analogy: R`An inductor is like a heavy flywheel for current: hard to start, hard to stop. That is why switching off a big motor can make a spark.` },

    { h: R`Alternating current: peak and rms values`,
      body: [
        R`<b>AC</b> keeps reversing direction: \(V = V_0\sin\omega t\). In India the mains frequency is 50 Hz, so it reverses 100 times every second.`,
        R`The average of AC over a full cycle is zero, so we use the <b>rms</b> (root mean square) value, which gives the same heating as that much DC: \(V_{rms} = \dfrac{V_0}{\sqrt2}\), \(I_{rms} = \dfrac{I_0}{\sqrt2}\).`,
        R`"220 V mains" means 220 V rms; the peak is about 311 V.`
      ],
      points: [R`Meters (ammeters and voltmeters) for AC show rms values.`] },

    { h: R`Reactance and impedance`,
      body: [
        R`<b>Resistor:</b> \(V\) and \(I\) are in phase. <b>Inductor:</b> opposes AC with reactance \(X_L = \omega L\) (bigger at high frequency); the current lags the voltage by \(90^\circ\). <b>Capacitor:</b> reactance \(X_C = \dfrac1{\omega C}\) (smaller at high frequency); the current leads by \(90^\circ\).`,
        R`In a series LCR circuit, the total opposition is the <b>impedance</b> \(Z = \sqrt{R^2 + (X_L - X_C)^2}\), with \(I = V/Z\) and phase angle \(\tan\phi = \dfrac{X_L - X_C}{R}\).`
      ],
      analogy: R`A memory trick: "CIVIL". In a C circuit, I leads V; in an L circuit, V leads I.` },

    { h: R`Resonance and the quality factor`,
      body: [
        R`At one special frequency, \(X_L = X_C\) and they cancel. Then \(Z = R\) (its smallest value) and the current is largest. This is <b>resonance</b>: \(\omega_0 = \dfrac1{\sqrt{LC}}\), \(f_0 = \dfrac{1}{2\pi\sqrt{LC}}\).`,
        R`The <b>quality factor</b> \(Q = \dfrac{\omega_0L}{R} = \dfrac1R\sqrt{\dfrac LC}\) measures how sharp the resonance is. At resonance, the voltage across L (or C) can be \(Q\) times the supply voltage!`
      ],
      analogy: R`Tuning a radio means adjusting C until the circuit resonates with one station's frequency. A high-Q circuit picks that station cleanly without mixing in its neighbours.` },

    { h: R`Power in AC circuits`,
      body: [
        R`Average power: \(P = V_{rms}I_{rms}\cos\phi\). The factor \(\cos\phi = R/Z\) is the <b>power factor</b>.`,
        R`For a pure resistor, \(\cos\phi = 1\). For a pure L or C, \(\phi = 90^\circ\) and \(P = 0\): current flows but no average power is used. This is called <b>wattless current</b>.`
      ],
      points: [R`Industries use capacitors to improve the power factor so that less current is wasted in the wires.`] },

    { h: R`The AC generator and the transformer`,
      body: [
        R`<b>Generator:</b> a coil of N turns and area A rotates at \(\omega\) in a field B. Its flux changes as \(\cos\omega t\), so it produces \(\varepsilon = NAB\omega\sin\omega t\), with peak \(NAB\omega\).`,
        R`<b>Transformer:</b> two coils on one iron core. AC in the primary makes a changing flux, which induces an emf in the secondary: \(\dfrac{V_s}{V_p} = \dfrac{N_s}{N_p}\). For an ideal transformer, power in = power out, so \(\dfrac{I_s}{I_p} = \dfrac{N_p}{N_s}\).`,
        R`<b>Step-up</b> transformers raise the voltage for long-distance transmission (less current means less \(I^2R\) loss). <b>Step-down</b> transformers bring it back to 220 V for homes.`
      ],
      mistake: R`Using a transformer with DC. Steady DC gives a steady flux, so no emf is induced in the secondary.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`The magnetic flux through a single loop falls from 0.5 Wb to 0.1 Wb in 0.2 s. Find the average induced emf.`,
      steps: [R`\(\varepsilon = \dfrac{\Delta\Phi}{\Delta t} = \dfrac{0.5 - 0.1}{0.2}\).`],
      ans: R`2 V` },
    { level: 1, t: 5, q: R`The rms voltage of a supply is 230 V. Find its peak voltage.`,
      steps: [R`\(V_0 = \sqrt2V_{rms} = 1.414\times230\).`],
      ans: R`\(\approx 325\) V` },
    { level: 1, t: 10, q: R`A transformer steps 220 V down to 11 V. The primary has 2000 turns. How many turns does the secondary need?`,
      steps: [R`\(\dfrac{N_s}{N_p} = \dfrac{V_s}{V_p} = \dfrac{11}{220} = \dfrac1{20}\).`, R`\(N_s = 2000/20\).`],
      ans: R`100 turns` },
    { level: 3, t: 7, q: R`A series LCR circuit has \(R = 10\) Ω, \(L = 0.1\) H and \(C = 10\) μF, connected to a 100 V (rms) variable-frequency supply. At resonance, find the current and the voltage across the inductor.`,
      steps: [R`\(\omega_0 = 1/\sqrt{LC} = 1/\sqrt{10^{-6}} = 1000\) rad/s.`, R`At resonance \(Z = R\), so \(I = 100/10 = 10\) A.`, R`\(X_L = \omega_0L = 100\) Ω, so \(V_L = IX_L = 1000\) V.`],
      ans: R`10 A; 1000 V (ten times the supply, since Q = 10)` },
    { level: 3, t: 4, q: R`Two coils have a mutual inductance of 0.5 H. The current in the first rises steadily from 0 to 4 A in 0.1 s. Find the emf induced in the second coil.`,
      steps: [R`\(\dfrac{dI}{dt} = 4/0.1 = 40\) A/s.`, R`\(\varepsilon = M\dfrac{dI}{dt} = 0.5\times40\).`],
      ans: R`20 V` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of magnetic flux is the:`,
      options: [R`tesla`, R`weber`, R`henry`, R`farad`], correct: 1,
      solution: R`Flux = B × A, measured in T m² = weber (Wb).` },
    { level: 1, type: 'mcq', q: R`Lenz's law is a consequence of the conservation of:`,
      options: [R`charge`, R`momentum`, R`energy`, R`mass`], correct: 2,
      solution: R`The opposition means work must be done to produce the induced current, so energy is conserved.` },
    { level: 1, type: 'mcq', q: R`The SI unit of inductance is the:`,
      options: [R`henry`, R`weber`, R`tesla`, R`ohm`], correct: 0,
      solution: R`Inductance is measured in henry (H).` },
    { level: 1, type: 'mcq', q: R`A transformer works with:`,
      options: [R`DC only`, R`both AC and DC`, R`neither`, R`AC only`], correct: 3,
      solution: R`It needs a changing flux, which only AC provides.` },
    { level: 1, type: 'num', q: R`The flux through each turn of a 50-turn coil changes by 0.02 Wb in 0.1 s. Find the induced emf (in V).`,
      answer: 10, tol: 0.01, unit: 'V',
      solution: R`\(\varepsilon = N\Delta\Phi/\Delta t = 50\times0.02/0.1 = 10\) V.` },
    { level: 1, type: 'num', q: R`Find the peak voltage (in V) of a 100 V rms AC supply.`,
      answer: 141.4, tol: 0.2, unit: 'V',
      solution: R`\(V_0 = \sqrt2\times100 \approx 141.4\) V.` },
    { level: 2, type: 'mcq', q: R`In a purely inductive AC circuit, the current:`,
      options: [R`leads the voltage by \(90^\circ\)`, R`lags the voltage by \(90^\circ\)`, R`is in phase with the voltage`, R`lags the voltage by \(180^\circ\)`], correct: 1,
      solution: R`In an inductor, V leads I by \(90^\circ\) (remember CIVIL).` },
    { level: 2, type: 'mcq', q: R`At resonance in a series LCR circuit, the impedance is:`,
      options: [R`zero`, R`maximum`, R`equal to R`, R`equal to \(X_L + X_C\)`], correct: 2,
      solution: R`\(X_L = X_C\) cancel, leaving \(Z = R\), the minimum possible.` },
    { level: 2, type: 'mcq', q: R`As the frequency increases, the reactance of a capacitor:`,
      options: [R`decreases`, R`increases`, R`stays the same`, R`becomes infinite`], correct: 0,
      solution: R`\(X_C = 1/(\omega C)\) falls as \(\omega\) rises.` },
    { level: 2, type: 'mcq', q: R`The power factor of a purely resistive AC circuit is:`,
      options: [R`0`, R`0.5`, R`1`, R`−1`], correct: 2,
      solution: R`V and I are in phase, so \(\cos0^\circ = 1\).` },
    { level: 2, type: 'num', q: R`Find the reactance (in Ω) of a 0.5 H inductor at 50 Hz.`,
      answer: 157.08, tol: 0.1, unit: 'Ω',
      solution: R`\(X_L = 2\pi fL = 2\pi\times50\times0.5 \approx 157.08\) Ω.` },
    { level: 2, type: 'num', q: R`How much energy (in J) is stored in a 2 H inductor carrying 3 A?`,
      answer: 9, tol: 0.001, unit: 'J',
      solution: R`\(U = \tfrac12LI^2 = \tfrac12\times2\times9 = 9\) J.` },
    { level: 2, type: 'num', q: R`A 0.2 m rod moves at 5 m/s at right angles to a 0.5 T field. Find the emf across it (in V).`,
      answer: 0.5, tol: 0.001, unit: 'V',
      solution: R`\(\varepsilon = Blv = 0.5\times0.2\times5 = 0.5\) V.` },
    { level: 3, type: 'mcq', q: R`A current is called "wattless" when the phase difference between voltage and current is:`,
      options: [R`\(90^\circ\)`, R`\(0^\circ\)`, R`\(45^\circ\)`, R`\(180^\circ\)`], correct: 0,
      solution: R`\(P = V_{rms}I_{rms}\cos90^\circ = 0\).` },
    { level: 3, type: 'mcq', q: R`The quality factor of a series LCR circuit is:`,
      options: [R`\(R\sqrt{L/C}\)`, R`\(\dfrac1R\sqrt{L/C}\)`, R`\(\dfrac1R\sqrt{C/L}\)`, R`\(\sqrt{LC}/R\)`], correct: 1,
      solution: R`\(Q = \omega_0L/R\) with \(\omega_0 = 1/\sqrt{LC}\), giving \(Q = \dfrac1R\sqrt{L/C}\).` },
    { level: 3, type: 'num', q: R`A series circuit has \(R = 8\) Ω, \(X_L = 10\) Ω and \(X_C = 4\) Ω. Find its power factor.`,
      answer: 0.8, tol: 0.001, unit: '',
      solution: R`\(Z = \sqrt{64 + 36} = 10\) Ω, so \(\cos\phi = R/Z = 0.8\).` },
    { level: 3, type: 'num', q: R`A transformer that is 90% efficient takes 1000 W at 200 V and delivers its output at 2000 V. Find the secondary current (in A).`,
      answer: 0.45, tol: 0.001, unit: 'A',
      solution: R`Output power = 900 W, so \(I_s = 900/2000 = 0.45\) A.` }
  ]
});
