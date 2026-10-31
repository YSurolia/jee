// Lesson: Magnetic Effects of Current and Magnetism.
var R = String.raw;
JEE.lesson('physics', 'magnetism', {
  theory: [
    { h: R`Currents make magnetic fields (Biot–Savart law)`,
      body: [
        R`In 1820 Oersted noticed that a compass needle moved when a current flowed in a nearby wire. <b>Moving charges (currents) produce magnetic fields.</b>`,
        R`The <b>Biot–Savart law</b> gives the field from a tiny piece of wire: \(dB = \dfrac{\mu_0}{4\pi}\dfrac{I\,dl\sin\theta}{r^2}\), where \(\mu_0 = 4\pi\times10^{-7}\) T m/A.`,
        R`Adding up all the pieces of a circular loop gives the field at its centre: \(B = \dfrac{\mu_0I}{2R}\) (multiply by N for N turns). The direction comes from the <b>right-hand rule</b>: curl your fingers along the current, and your thumb points along the field.`
      ],
      analogy: R`Think of the field as a ripple that a current "stirs up" around itself, like water swirling around a stick moved through it.`,
      points: [R`The unit of magnetic field is the tesla (T). The Earth's field is only about \(5\times10^{-5}\) T.`] },

    { h: R`Ampère's law: straight wires and solenoids`,
      body: [
        R`<b>Ampère's law:</b> going around any closed loop, \(\oint\vec B\cdot d\vec l = \mu_0I_{enclosed}\). It is the magnetic cousin of Gauss's law and is easiest to use when there is symmetry.`,
        R`<b>Long straight wire:</b> the field lines are circles around the wire, with \(B = \dfrac{\mu_0I}{2\pi r}\).`,
        R`<b>Solenoid</b> (a long coil): the field inside is strong and uniform, \(B = \mu_0nI\) (\(n\) = turns per metre), and almost zero outside. A <b>toroid</b> (a solenoid bent into a ring) has \(B = \dfrac{\mu_0NI}{2\pi r}\) inside and zero outside.`
      ],
      analogy: R`A solenoid is like a bar magnet you can switch on and off. Put an iron core inside and it becomes an electromagnet, like the ones in scrapyard cranes.`,
      check: { q: R`What is the shape of the magnetic field lines around a long straight current-carrying wire?`, ans: R`Concentric circles centred on the wire.` } },

    { h: R`Force on a moving charge`,
      body: [
        R`A charge \(q\) moving with velocity \(\vec v\) in a magnetic field feels the <b>Lorentz force</b> \(\vec F = q(\vec v\times\vec B)\), of size \(qvB\sin\theta\). With an electric field too: \(\vec F = q(\vec E + \vec v\times\vec B)\).`,
        R`This force is always perpendicular to the velocity, so it <b>never does work</b>. It changes the direction of motion but never the speed.`,
        R`A charge moving perpendicular to a uniform B goes round in a circle of radius \(r = \dfrac{mv}{qB}\), with period \(T = \dfrac{2\pi m}{qB}\), which doesn't depend on the speed! (That is the idea behind the cyclotron.) At an angle, the path is a helix.`
      ],
      points: [R`A charge at rest, or moving along B, feels no magnetic force.`, R`Velocity selector: crossed E and B fields let through undeflected only particles with \(v = E/B\).`],
      mistake: R`Forgetting that electrons are negative. The force on an electron is opposite to the direction given by \(\vec v\times\vec B\).` },

    { h: R`Force on a current-carrying wire`,
      body: [
        R`A current is many moving charges, so a wire in a magnetic field feels a force \(\vec F = I\vec L\times\vec B\), of size \(F = BIL\sin\theta\).`,
        R`<b>Fleming's left-hand rule:</b> hold your first finger along the Field, your seCond finger along the Current, and your thuMb gives the Motion (force).`,
        R`This force is what spins every electric motor.`
      ],
      analogy: R`In a ceiling fan's motor, current-carrying coils sit in a magnetic field. The forces on opposite sides of each coil push in opposite directions and turn the rotor.` },

    { h: R`Force between parallel currents`,
      body: [
        R`Each wire sits in the other's magnetic field, so they push or pull each other: \(\dfrac FL = \dfrac{\mu_0I_1I_2}{2\pi d}\).`,
        R`<b>Currents in the same direction attract; currents in opposite directions repel.</b> (This is the opposite of electric charges!)`,
        R`This defines the <b>ampere</b>: 1 A is the current that, flowing in two long parallel wires 1 m apart, makes each feel \(2\times10^{-7}\) N per metre.`
      ] },

    { h: R`Torque on a current loop and the galvanometer`,
      body: [
        R`A rectangular coil carrying current in a magnetic field feels equal and opposite forces on two of its sides, which form a couple. The torque is \(\tau = NIAB\sin\theta\), where \(\theta\) is the angle between the coil's normal and B.`,
        R`A <b>moving-coil galvanometer</b> uses this torque, balanced by a spring, to detect small currents: the deflection is proportional to the current.`,
        R`<b>Ammeter:</b> add a small <b>shunt</b> resistance in parallel, \(S = \dfrac{I_gG}{I - I_g}\), so that most of the current bypasses the coil. <b>Voltmeter:</b> add a large resistance in series, \(R = \dfrac V{I_g} - G\).`
      ],
      points: [R`An ideal ammeter has zero resistance; an ideal voltmeter has infinite resistance.`] },

    { h: R`A current loop is a magnetic dipole`,
      body: [
        R`A current loop behaves exactly like a tiny bar magnet. Its <b>magnetic moment</b> is \(\vec m = NI\vec A\), pointing along the normal given by the right-hand rule.`,
        R`In a field it feels a torque \(\vec\tau = \vec m\times\vec B\) and has energy \(U = -\vec m\cdot\vec B\), the same formulas as for an electric dipole.`
      ],
      analogy: R`Looking at a loop, if the current goes anticlockwise, that face behaves like a North pole; clockwise means South.` },

    { h: R`The bar magnet`,
      body: [
        R`A bar magnet has a North and a South pole. Outside the magnet, field lines run from N to S; inside, from S to N. They form closed loops, because there are no single magnetic poles (monopoles).`,
        R`For a short magnet of moment \(m\): on the axis, \(B = \dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3}\); on the equator, \(B = \dfrac{\mu_0}{4\pi}\dfrac{m}{r^3}\) (half as big, and pointing the other way).`,
        R`The Earth itself behaves like a giant bar magnet whose magnetic south pole is near the geographic North Pole. That is why a compass's N end points north.`
      ],
      mistake: R`Thinking that cutting a magnet in half separates the N and S poles. Each piece becomes a complete magnet with its own N and S.` },

    { h: R`Magnetic materials`,
      body: [
        R`Materials respond to magnetic fields in three ways, measured by their <b>susceptibility</b> \(\chi\):`,
        R`<b>Diamagnetic</b> (\(\chi\) small and negative): weakly pushed out of strong fields. Examples: copper, bismuth, water, gold.`,
        R`<b>Paramagnetic</b> (\(\chi\) small and positive): weakly pulled in. Examples: aluminium, oxygen. Curie's law: \(\chi \propto 1/T\).`,
        R`<b>Ferromagnetic</b> (\(\chi\) very large): strongly attracted and can become permanent magnets. Examples: iron, cobalt, nickel. Above the <b>Curie temperature</b> they become paramagnetic.`
      ],
      points: [R`Superconductors are perfect diamagnets: they push out all magnetic field (that's how magnetic levitation trains can float).`] }
  ],

  examples: [
    { level: 1, t: 1, q: R`Find the magnetic field 2 cm from a long straight wire carrying 4 A.`,
      steps: [R`\(B = \dfrac{\mu_0I}{2\pi r} = \dfrac{2\times10^{-7}\times4}{0.02}\).`],
      ans: R`\(4\times10^{-5}\) T` },
    { level: 1, t: 3, q: R`A 1 m wire carrying 5 A lies perpendicular to a 0.4 T magnetic field. Find the force on it.`,
      steps: [R`\(F = BIL\sin90^\circ = 0.4\times5\times1\).`],
      ans: R`2 N` },
    { level: 1, t: 2, q: R`A proton moves along +x in a magnetic field pointing along +y. Which way is the force on it? What about an electron?`,
      steps: [R`\(\vec F = q\vec v\times\vec B\), and \(\hat i\times\hat j = \hat k\).`, R`The proton is positive, so the force is along +z. The electron's negative charge reverses it.`],
      ans: R`Proton: +z. Electron: −z.` },
    { level: 3, t: 2, q: R`In a velocity selector, \(E = 10^4\) V/m and \(B = 0.02\) T are perpendicular to each other and to the beam. Which speed passes straight through?`,
      steps: [R`For no deflection, the electric and magnetic forces must cancel: \(qE = qvB\).`, R`\(v = E/B = 10^4/0.02\).`],
      ans: R`\(5\times10^5\) m/s, whatever the charge or mass` },
    { level: 3, t: 2, q: R`A proton moves in a circle in a 1 T magnetic field. Find its time period. Does it depend on how fast the proton moves? (\(m = 1.67\times10^{-27}\) kg)`,
      steps: [R`\(T = \dfrac{2\pi m}{qB} = \dfrac{2\pi\times1.67\times10^{-27}}{1.6\times10^{-19}\times1}\).`, R`There is no \(v\) in the formula: faster protons move in bigger circles but take the same time.`],
      ans: R`\(\approx 6.6\times10^{-8}\) s; it does not depend on speed (the cyclotron principle)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of magnetic field (B) is the:`,
      options: [R`weber`, R`tesla`, R`gauss`, R`henry`], correct: 1,
      solution: R`B is measured in tesla (T). The weber is the unit of magnetic flux.` },
    { level: 1, type: 'mcq', q: R`The magnetic field lines around a long straight current-carrying wire are:`,
      options: [R`straight lines along the wire`, R`spirals`, R`concentric circles around the wire`, R`random`], correct: 2,
      solution: R`They form circles centred on the wire, in the direction given by the right-hand rule.` },
    { level: 1, type: 'mcq', q: R`The magnetic force on a charge at rest in a magnetic field is:`,
      options: [R`zero`, R`\(qvB\)`, R`\(qB\)`, R`infinite`], correct: 0,
      solution: R`\(F = qvB\sin\theta\), and \(v = 0\).` },
    { level: 1, type: 'mcq', q: R`Iron is:`,
      options: [R`diamagnetic`, R`paramagnetic`, R`non-magnetic`, R`ferromagnetic`], correct: 3,
      solution: R`Iron, cobalt and nickel are ferromagnetic: strongly attracted and able to become magnets.` },
    { level: 1, type: 'num', q: R`Find the magnetic field (in μT) at the centre of a single circular loop of radius 0.1 m carrying 1 A.`,
      answer: 6.28, tol: 0.02, unit: 'μT',
      solution: R`\(B = \dfrac{\mu_0I}{2R} = \dfrac{4\pi\times10^{-7}}{0.2} = 6.28\times10^{-6}\) T.` },
    { level: 1, type: 'num', q: R`Find the force (in N) on a 2 m wire carrying 3 A at right angles to a 0.5 T field.`,
      answer: 3, tol: 0.001, unit: 'N',
      solution: R`\(F = BIL = 0.5\times3\times2 = 3\) N.` },
    { level: 2, type: 'mcq', q: R`A charged particle enters a uniform magnetic field at right angles to it. Its path is a:`,
      options: [R`straight line`, R`parabola`, R`circle`, R`helix`], correct: 2,
      solution: R`The force is always perpendicular to the velocity, which gives uniform circular motion.` },
    { level: 2, type: 'mcq', q: R`The magnetic force on a moving charge does:`,
      options: [R`no work`, R`positive work`, R`negative work`, R`work equal to \(qvB\)`], correct: 0,
      solution: R`The force is perpendicular to the velocity, so \(\vec F\cdot\vec v = 0\): no work, and the speed is unchanged.` },
    { level: 2, type: 'mcq', q: R`Two long parallel wires carry currents in opposite directions. They:`,
      options: [R`attract`, R`repel`, R`exert no force`, R`twist about each other`], correct: 1,
      solution: R`Opposite currents repel; same-direction currents attract.` },
    { level: 2, type: 'mcq', q: R`To convert a galvanometer into a voltmeter, you connect:`,
      options: [R`a low resistance in parallel`, R`a low resistance in series`, R`a high resistance in parallel`, R`a high resistance in series`], correct: 3,
      solution: R`A large series resistance makes it draw very little current, and lets it read high voltages.` },
    { level: 2, type: 'num', q: R`A solenoid has 1000 turns per metre and carries 2 A. Find the field inside it (in mT).`,
      answer: 2.51, tol: 0.01, unit: 'mT',
      solution: R`\(B = \mu_0nI = 4\pi\times10^{-7}\times1000\times2 = 2.51\times10^{-3}\) T.` },
    { level: 2, type: 'num', q: R`An electron moving at \(10^6\) m/s enters a \(10^{-3}\) T field at right angles. Find the radius of its path (in mm). (\(m = 9.1\times10^{-31}\) kg)`,
      answer: 5.69, tol: 0.02, unit: 'mm',
      solution: R`\(r = \dfrac{mv}{qB} = \dfrac{9.1\times10^{-31}\times10^6}{1.6\times10^{-19}\times10^{-3}} = 5.69\times10^{-3}\) m.` },
    { level: 2, type: 'num', q: R`Find the magnetic moment (in A m²) of a 100-turn coil of area 0.01 m² carrying 0.5 A.`,
      answer: 0.5, tol: 0.001, unit: 'A m²',
      solution: R`\(m = NIA = 100\times0.5\times0.01 = 0.5\) A m².` },
    { level: 3, type: 'mcq', q: R`The time period of a charged particle circling in a uniform magnetic field does NOT depend on its:`,
      options: [R`mass`, R`charge`, R`the field strength`, R`speed`], correct: 3,
      solution: R`\(T = 2\pi m/(qB)\) has no \(v\) in it.` },
    { level: 3, type: 'mcq', q: R`If the radius of a current loop is doubled (with the same current), its magnetic moment becomes:`,
      options: [R`2 times`, R`4 times`, R`half`, R`8 times`], correct: 1,
      solution: R`\(m = IA = I\pi r^2\), so doubling \(r\) multiplies \(m\) by 4.` },
    { level: 3, type: 'num', q: R`A galvanometer (G = 100 Ω) gives full-scale deflection at 10 mA. Find the shunt (in Ω) needed to make a 0–1 A ammeter.`,
      answer: 1.01, tol: 0.005, unit: 'Ω',
      solution: R`\(S = \dfrac{I_gG}{I - I_g} = \dfrac{0.01\times100}{0.99} \approx 1.01\) Ω.` },
    { level: 3, type: 'num', q: R`In a velocity selector, \(E = 2\times10^4\) V/m and \(B = 0.04\) T. Find the speed (in m/s) of particles that pass undeflected.`,
      answer: 500000, tol: 100, unit: 'm/s',
      solution: R`\(v = E/B = 2\times10^4/0.04 = 5\times10^5\) m/s.` }
  ]
});
