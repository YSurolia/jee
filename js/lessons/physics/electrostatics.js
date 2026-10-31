// Lesson: Electrostatics.
var R = String.raw;
JEE.lesson('physics', 'electrostatics', {
  theory: [
    { h: R`Electric charge`,
      body: [
        R`Rub a plastic comb in dry hair and it picks up bits of paper. Rubbing moved tiny <b>electrons</b> from your hair to the comb, giving it a <b>negative charge</b>; your hair is left <b>positive</b>.`,
        R`There are two kinds of charge. <b>Like charges repel, unlike charges attract.</b>`,
        R`Charge is <b>quantised</b>: it always comes in whole multiples of \(e = 1.6\times10^{-19}\) C, so \(q = ne\). Charge is also <b>conserved</b>: it can be moved from one body to another, but never created or destroyed.`
      ],
      analogy: R`Charge is like money moving between accounts. When you pay a friend, your balance drops and theirs rises by exactly the same amount; the total is unchanged.`,
      points: [R`Unit of charge: coulomb (C). 1 C is about \(6.25\times10^{18}\) electrons.`, R`A body gets a positive charge by <i>losing</i> electrons, not by gaining protons.`],
      check: { q: R`A glass rod rubbed with silk becomes positively charged. What did the silk gain?`, ans: R`Electrons, so the silk becomes negatively charged by exactly the same amount.` } },

    { h: R`Coulomb's law and superposition`,
      body: [
        R`The force between two point charges is \(F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2} = \dfrac{kq_1q_2}{r^2}\), with \(k = 9\times10^9\) N m²/C². Like gravity, it follows an inverse-square law, but it can attract or repel.`,
        R`<b>Superposition principle:</b> with many charges, find the force from each one separately, as if the others were absent, and add them <i>as vectors</i>.`,
        R`In a medium of dielectric constant \(K\), the force becomes \(K\) times weaker.`
      ],
      mistake: R`Adding Coulomb forces as plain numbers. Forces are vectors; draw the directions first, then add components.` },

    { h: R`Electric field and field lines`,
      body: [
        R`A charge changes the space around it; we call this the <b>electric field</b>. The field at a point is the force on a tiny +1 C test charge placed there: \(\vec E = \vec F/q\). For a point charge, \(E = \dfrac{kq}{r^2}\).`,
        R`<b>Field lines</b> are drawn to picture the field. They start on positive charges and end on negative charges; the tangent gives the field's direction; closely packed lines mean a strong field; and two lines never cross.`
      ],
      analogy: R`A heater warms the air around it even before you put your hand near it. Similarly, a charge creates a field all around it, and any other charge placed there feels it.`,
      points: [R`Force on a charge in a field: \(\vec F = q\vec E\). An electron is pushed opposite to the field.`] },

    { h: R`The electric dipole`,
      body: [
        R`Two equal and opposite charges \(\pm q\) a small distance \(2a\) apart form a <b>dipole</b>. Its <b>dipole moment</b> \(p = q\times2a\) points from − to +.`,
        R`Field on the axis: \(E = \dfrac{2kp}{r^3}\). Field on the perpendicular bisector: \(E = \dfrac{kp}{r^3}\). Both fall off as \(1/r^3\), faster than for a single charge.`,
        R`In a uniform field a dipole feels no net force but a <b>torque</b> \(\tau = pE\sin\theta\), which tries to line it up with the field. Its energy is \(U = -pE\cos\theta\).`
      ],
      analogy: R`A compass needle is a magnetic dipole that turns to line up with the Earth's field. An electric dipole turns to line up with an electric field in the same way.` },

    { h: R`Electric flux and Gauss's law`,
      body: [
        R`<b>Electric flux</b> measures how many field lines pass through a surface: \(\Phi = \vec E\cdot\vec A = EA\cos\theta\).`,
        R`<b>Gauss's law:</b> the total flux out of any closed surface equals the charge inside divided by \(\varepsilon_0\): \(\oint\vec E\cdot d\vec A = \dfrac{q_{inside}}{\varepsilon_0}\).`,
        R`By choosing a symmetric surface, we get fields quickly: infinite line charge \(E = \dfrac{\lambda}{2\pi\varepsilon_0r}\); infinite plane sheet \(E = \dfrac{\sigma}{2\varepsilon_0}\) (the same at every distance!); outside a charged sphere, \(E = \dfrac{kq}{r^2}\), as if all the charge were at the centre.`
      ],
      points: [R`Charges outside the surface contribute zero net flux.`, R`A charge at the centre of a cube sends \(q/6\varepsilon_0\) through each face.`] },

    { h: R`Electric potential`,
      body: [
        R`<b>Potential</b> \(V\) at a point is the work done to bring +1 C from infinity to that point. For a point charge, \(V = \dfrac{kq}{r}\). It is a scalar, so potentials from many charges simply add, with their signs.`,
        R`<b>Potential difference</b> \(V_A - V_B\) is the work per coulomb to move a charge from B to A. Moving a charge \(q\) through a PD \(V\) takes work \(W = qV\). The unit is the volt: 1 V = 1 J/C.`,
        R`Field and potential are linked: \(E = -\dfrac{dV}{dr}\). The field points in the direction in which the potential falls fastest.`
      ],
      analogy: R`Potential is like height for water. Water flows from high to low; positive charges are pushed from high potential to low potential.`,
      points: [R`Electron volt: 1 eV = \(1.6\times10^{-19}\) J, the energy gained by an electron through 1 V.`] },

    { h: R`Equipotential surfaces`,
      body: [
        R`An <b>equipotential surface</b> joins points that are all at the same potential. Moving a charge along it takes no work.`,
        R`Field lines always cross equipotential surfaces at right angles. For a point charge, the equipotentials are concentric spheres; for a uniform field, they are parallel planes.`
      ],
      check: { q: R`How much work is done in moving a 5 μC charge between two points on a 100 V equipotential surface?`, ans: R`Zero, because \(\Delta V = 0\).` } },

    { h: R`Conductors and insulators`,
      body: [
        R`<b>Conductors</b> (metals) have free electrons that move easily; <b>insulators</b> (plastic, glass, rubber) don't.`,
        R`In a conductor in equilibrium: the field inside is zero; any extra charge sits on the outer surface; the whole conductor is at one potential; and the field just outside is perpendicular to the surface, with \(E = \sigma/\varepsilon_0\).`,
        R`Charge crowds onto sharp points, which is why lightning conductors are pointed. A hollow conductor shields its inside from outside fields (<b>electrostatic shielding</b>).`
      ],
      analogy: R`During a thunderstorm it is safer to sit inside a car than outside. The metal body acts as a shield, and the charge stays on its outer surface.` },

    { h: R`Dielectrics and polarisation`,
      body: [
        R`An insulator placed in a field doesn't conduct, but its molecules stretch or turn slightly, with + ends towards one side and − ends towards the other. This is <b>polarisation</b>.`,
        R`The tiny surface charges this creates oppose the outside field, so the field inside a dielectric is reduced by a factor \(K\), the <b>dielectric constant</b> (\(K = 1\) for vacuum, about 80 for water).`
      ] },

    { h: R`Capacitors`,
      body: [
        R`A <b>capacitor</b> stores charge: two conductors separated by an insulator. Charge \(Q\) on it creates a PD \(V\), and \(C = Q/V\) is its <b>capacitance</b>, measured in farads (F).`,
        R`For parallel plates of area \(A\) and gap \(d\): \(C = \dfrac{\varepsilon_0A}{d}\). Filling the gap with a dielectric multiplies it by \(K\).`,
        R`<b>Parallel:</b> \(C = C_1 + C_2 + \dots\) (same V). <b>Series:</b> \(\dfrac1C = \dfrac1{C_1} + \dfrac1{C_2} + \dots\) (same Q).`,
        R`Energy stored: \(U = \tfrac12CV^2 = \dfrac{Q^2}{2C} = \tfrac12QV\). This energy lives in the electric field between the plates.`
      ],
      analogy: R`A capacitor is like a water tank that fills up quickly and can empty all at once. A camera flash charges a capacitor, then dumps its energy in a fraction of a second.`,
      points: [R`If a capacitor stays connected to a battery, V is fixed. If it is disconnected, Q is fixed. Always decide which one first.`],
      mistake: R`Using the resistor rules for capacitors. Capacitors in parallel add directly; in series, their reciprocals add (the opposite of resistors).` }
  ],

  examples: [
    { level: 1, t: 1, q: R`Find the force between two charges of 1 μC each, placed 1 m apart in air.`,
      steps: [R`\(F = \dfrac{kq_1q_2}{r^2} = \dfrac{9\times10^9\times10^{-6}\times10^{-6}}{1^2}\).`],
      ans: R`\(9\times10^{-3}\) N (repulsive)` },
    { level: 1, t: 6, q: R`How much work is needed to move a 2 μC charge through a potential difference of 50 V?`,
      steps: [R`\(W = qV = 2\times10^{-6}\times50\).`],
      ans: R`\(10^{-4}\) J` },
    { level: 1, t: 2, q: R`Find the electric field 0.3 m from a 3 μC charge, and the force on an electron placed there.`,
      steps: [R`\(E = \dfrac{kq}{r^2} = \dfrac{9\times10^9\times3\times10^{-6}}{0.09} = 3\times10^5\) N/C.`, R`\(F = eE = 1.6\times10^{-19}\times3\times10^5\).`],
      ans: R`\(3\times10^5\) N/C; \(4.8\times10^{-14}\) N (towards the charge)` },
    { level: 3, t: 1, q: R`Charges of +4 μC and +1 μC sit at x = 0 and x = 3 m. Where should a third charge be placed so that it feels no net force?`,
      steps: [R`It must lie between them, where the two repulsions oppose each other. Let it be at distance \(x\) from the 4 μC charge.`, R`\(\dfrac{4}{x^2} = \dfrac{1}{(3 - x)^2}\), so \(\dfrac2x = \dfrac1{3 - x}\).`, R`\(6 - 2x = x\), so \(x = 2\).`],
      ans: R`At x = 2 m (whatever the sign or size of the third charge)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of electric charge is the:`,
      options: [R`coulomb`, R`ampere`, R`volt`, R`farad`], correct: 0,
      solution: R`Charge is measured in coulombs (C). 1 C = 1 A × 1 s.` },
    { level: 1, type: 'mcq', q: R`Two like charges:`,
      options: [R`attract each other`, R`repel each other`, R`exert no force on each other`, R`only rotate`], correct: 1,
      solution: R`Like charges repel; unlike charges attract.` },
    { level: 1, type: 'mcq', q: R`Electric field lines start from:`,
      options: [R`negative charges`, R`neutral bodies`, R`positive charges`, R`nowhere`], correct: 2,
      solution: R`Field lines begin on positive charges and end on negative charges.` },
    { level: 1, type: 'mcq', q: R`The unit of capacitance is the:`,
      options: [R`volt`, R`ohm`, R`coulomb`, R`farad`], correct: 3,
      solution: R`\(C = Q/V\), measured in coulomb per volt = farad (F).` },
    { level: 1, type: 'num', q: R`Find the force (in N) between charges of 2 μC and 5 μC placed 0.3 m apart.`,
      answer: 1, tol: 0.001, unit: 'N',
      solution: R`\(F = \dfrac{9\times10^9\times2\times10^{-6}\times5\times10^{-6}}{0.09} = 1\) N.` },
    { level: 1, type: 'num', q: R`A 10 μF capacitor is connected to a 12 V battery. How much charge (in μC) does it store?`,
      answer: 120, tol: 0.01, unit: 'μC',
      solution: R`\(Q = CV = 10\times12 = 120\) μC.` },
    { level: 2, type: 'mcq', q: R`If the distance between two charges is halved, the force between them becomes:`,
      options: [R`half`, R`double`, R`4 times`, R`one-fourth`], correct: 2,
      solution: R`\(F \propto 1/r^2\): halving \(r\) multiplies F by 4.` },
    { level: 2, type: 'mcq', q: R`The electric field inside a charged conducting sphere is:`,
      options: [R`zero`, R`maximum`, R`\(kq/r^2\)`, R`\(kq/R\)`], correct: 0,
      solution: R`In a conductor in equilibrium, the charge stays on the surface and the field inside is zero.` },
    { level: 2, type: 'mcq', q: R`The total electric flux through a closed surface that encloses a charge \(q\) is:`,
      options: [R`\(q\varepsilon_0\)`, R`\(q/\varepsilon_0\)`, R`\(\varepsilon_0/q\)`, R`zero`], correct: 1,
      solution: R`Gauss's law: \(\Phi = q_{inside}/\varepsilon_0\).` },
    { level: 2, type: 'mcq', q: R`The torque on an electric dipole in a uniform field is greatest when the dipole makes an angle of:`,
      options: [R`\(0^\circ\)`, R`\(180^\circ\)`, R`\(45^\circ\)`, R`\(90^\circ\)`], correct: 3,
      solution: R`\(\tau = pE\sin\theta\) is largest when \(\sin\theta = 1\), i.e. \(90^\circ\).` },
    { level: 2, type: 'num', q: R`Find the potential (in V) 0.1 m from a 1 nC point charge.`,
      answer: 90, tol: 0.01, unit: 'V',
      solution: R`\(V = kq/r = 9\times10^9\times10^{-9}/0.1 = 90\) V.` },
    { level: 2, type: 'num', q: R`Three 3 μF capacitors are connected in parallel. Find the total capacitance (in μF).`,
      answer: 9, tol: 0.001, unit: 'μF',
      solution: R`In parallel, the capacitances add: \(3 + 3 + 3 = 9\) μF.` },
    { level: 2, type: 'num', q: R`Find the energy (in J) stored in a 5 μF capacitor charged to 100 V.`,
      answer: 0.025, tol: 0.0001, unit: 'J',
      solution: R`\(U = \tfrac12CV^2 = \tfrac12\times5\times10^{-6}\times10^4 = 0.025\) J.` },
    { level: 3, type: 'mcq', q: R`A parallel-plate capacitor is charged and then disconnected from the battery. Its plates are then pulled apart to twice the separation. Which statement is true?`,
      options: [R`The charge doubles.`, R`The capacitance doubles.`, R`The stored energy doubles.`, R`The voltage halves.`], correct: 2,
      solution: R`Disconnected, so Q is fixed. \(C\) halves, so \(V = Q/C\) doubles and \(U = Q^2/2C\) doubles. The extra energy comes from your work pulling the plates apart.` },
    { level: 3, type: 'mcq', q: R`The electric field produced by an infinite, uniformly charged plane sheet:`,
      options: [R`does not depend on the distance from the sheet`, R`varies as \(1/r\)`, R`varies as \(1/r^2\)`, R`increases with distance`], correct: 0,
      solution: R`Gauss's law gives \(E = \sigma/2\varepsilon_0\), which has no \(r\) in it.` },
    { level: 3, type: 'num', q: R`A 2 μF capacitor charged to 100 V and a 4 μF capacitor charged to 50 V are connected together (positive plate to positive plate). Find the common voltage (in V).`,
      answer: 66.67, tol: 0.05, unit: 'V',
      solution: R`Total charge \(= 200 + 200 = 400\) μC; total capacitance \(= 6\) μF; \(V = 400/6 \approx 66.67\) V.` },
    { level: 3, type: 'num', q: R`How much work (in J) is needed to bring a 1 μC charge from infinity to a point 0.3 m from a fixed 3 μC charge?`,
      answer: 0.09, tol: 0.0001, unit: 'J',
      solution: R`\(W = qV = \dfrac{kQq}{r} = \dfrac{9\times10^9\times3\times10^{-6}\times10^{-6}}{0.3} = 0.09\) J.` }
  ]
});
