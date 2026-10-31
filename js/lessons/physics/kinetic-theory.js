// Lesson: Kinetic Theory of Gases.
var R = String.raw;
JEE.lesson('physics', 'kinetic-theory', {
  theory: [
    { h: R`The ideal gas equation`,
      body: [
        R`A gas is described by its pressure \(P\), volume \(V\), temperature \(T\) and amount \(n\) (in moles). For an <b>ideal gas</b> they are linked by \(PV = nRT\), where \(R = 8.314\) J/(mol K).`,
        R`It combines the older gas laws: Boyle's (\(PV\) constant at fixed T), Charles's (\(V \propto T\) at fixed P) and Avogadro's (equal volumes contain equal numbers of molecules).`,
        R`Written per molecule: \(PV = NkT\), where \(N\) is the number of molecules and \(k = 1.38\times10^{-23}\) J/K is Boltzmann's constant.`
      ],
      analogy: R`A pressure cooker is a sealed, fixed volume. As T rises, P rises, until the whistle releases some steam.`,
      points: [R`Always use T in kelvin.`, R`1 mol of any ideal gas occupies 22.4 L at STP (273 K, 1 atm).`],
      check: { q: R`At constant temperature, a gas is squeezed to half its volume. What happens to its pressure?`, ans: R`It doubles (Boyle's law: \(PV\) = constant).` } },

    { h: R`Work done on compressing a gas`,
      body: [
        R`Pushing a piston into a gas means doing work on it: \(W = -\int P\,dV\) (positive work done on the gas when \(V\) decreases).`,
        R`Isothermal compression from \(V_1\) to \(V_2\): \(W_{on} = nRT\ln\dfrac{V_1}{V_2}\). Isobaric: \(W_{on} = P(V_1 - V_2)\).`
      ],
      points: [R`On a P–V graph, work = area under the curve.`] },

    { h: R`What kinetic theory assumes`,
      body: [
        R`Kinetic theory explains gas behaviour from tiny moving molecules. It assumes: (1) a gas is a huge number of identical molecules in random motion; (2) the molecules themselves take up almost no volume; (3) they don't attract or repel each other except during collisions; (4) collisions are perfectly elastic; (5) collisions last a negligible time.`,
        R`Real gases follow these assumptions well at <b>low pressure and high temperature</b>, when molecules are far apart and fast.`
      ],
      analogy: R`Imagine a room full of thousands of bouncing ping-pong balls that never stick together. That is the kinetic-theory picture of a gas.` },

    { h: R`Where pressure comes from`,
      body: [
        R`Gas pressure is the combined effect of countless molecules hitting the walls and bouncing back. Each bounce gives the wall a tiny push.`,
        R`Adding up all these pushes gives \(P = \tfrac13\rho v_{rms}^2 = \tfrac13\dfrac{N}{V}mv_{rms}^2\), where \(\rho\) is the gas density.`
      ],
      analogy: R`Rain drumming on a tin roof: no single drop is heavy, but millions of them together make a steady push. Gas pressure works the same way.` },

    { h: R`What temperature really means`,
      body: [
        R`Comparing \(P = \tfrac13\dfrac NVmv^2\) with \(PV = NkT\) gives an amazing result: the <b>average translational KE of a molecule</b> is \(\tfrac12mv_{rms}^2 = \tfrac32kT\).`,
        R`So <b>temperature is a measure of how fast the molecules move</b>. At absolute zero (0 K), molecular motion would (classically) stop.`,
        R`<b>Avogadro's number</b> \(N_A = 6.022\times10^{23}\) is the number of molecules in one mole. It links the two constants: \(R = N_Ak\).`
      ],
      points: [R`At the same temperature, all gases have the same average KE per molecule, whatever their mass.`, R`KE of 1 mole (translational) = \(\tfrac32RT\).`] },

    { h: R`How fast do molecules move?`,
      body: [
        R`Molecules have a spread of speeds. Three useful averages:`,
        R`RMS speed \(v_{rms} = \sqrt{\dfrac{3RT}{M}}\); mean speed \(v_{avg} = \sqrt{\dfrac{8RT}{\pi M}}\); most probable speed \(v_{mp} = \sqrt{\dfrac{2RT}{M}}\). Here \(M\) is the molar mass in kg/mol.`,
        R`Lighter molecules move faster: at the same temperature, hydrogen molecules move 4 times faster than oxygen molecules.`
      ],
      points: [R`\(v_{rms} > v_{avg} > v_{mp}\).`, R`\(v \propto \sqrt{T/M}\).`],
      mistake: R`Using M in g/mol. In \(\sqrt{3RT/M}\), M must be in kg/mol (oxygen: 0.032, not 32).` },

    { h: R`Degrees of freedom and equipartition`,
      body: [
        R`<b>Degrees of freedom (f)</b> are the independent ways a molecule can store energy. A monatomic gas (He) can only move in x, y and z: \(f = 3\). A rigid diatomic gas (O₂) can also rotate about 2 axes: \(f = 5\). At high temperatures vibration adds 2 more.`,
        R`<b>Law of equipartition:</b> each degree of freedom gets an average energy of \(\tfrac12kT\) per molecule.`,
        R`This predicts the specific heats: \(U = \tfrac f2nRT\), so \(C_v = \tfrac f2R\), \(C_p = C_v + R\) and \(\gamma = 1 + \dfrac2f\).`
      ],
      points: [R`Monatomic: \(C_v = \tfrac32R\), \(\gamma = 5/3\). Diatomic: \(C_v = \tfrac52R\), \(\gamma = 7/5\). Non-linear polyatomic: \(f = 6\), \(\gamma = 4/3\).`] },

    { h: R`Mean free path`,
      body: [
        R`A molecule doesn't travel far before bumping into another. The average distance between collisions is the <b>mean free path</b>: \(\lambda = \dfrac{1}{\sqrt2\pi d^2n}\), where \(d\) is the molecular diameter and \(n\) the number of molecules per m³.`,
        R`Fewer molecules (lower pressure) or smaller molecules mean a longer free path. In air at room conditions, \(\lambda\) is only about 0.1 μm.`
      ],
      analogy: R`Walking through a crowded railway station, you bump into someone every few steps. In an empty station you can walk far without a bump. Lower crowd density, longer free path.`,
      check: { q: R`If the pressure of a gas is halved at constant temperature, what happens to its mean free path?`, ans: R`It doubles, because the number density \(n\) halves.` } }
  ],

  examples: [
    { level: 1, t: 0, q: R`1 mol of an ideal gas is kept in a 10 L container at 300 K. Find its pressure. (R = 8.314)`,
      steps: [R`\(P = \dfrac{nRT}{V} = \dfrac{1\times8.314\times300}{0.010}\).`],
      ans: R`\(\approx 2.49\times10^5\) Pa (about 2.5 atm)` },
    { level: 1, t: 9, q: R`How many atoms are there in 4 g of helium (molar mass 4 g/mol)?`,
      steps: [R`Moles \(= 4/4 = 1\).`, R`Atoms \(= 1\times N_A\).`],
      ans: R`\(6.022\times10^{23}\)` },
    { level: 1, t: 6, q: R`State the degrees of freedom of He, O₂ and CO₂ (linear, rigid) at room temperature.`,
      steps: [R`He is monatomic: 3 translational only.`, R`O₂ is diatomic: 3 translational + 2 rotational.`, R`CO₂ is linear like O₂: 3 + 2.`],
      ans: R`He: 3; O₂: 5; CO₂: 5` },
    { level: 3, t: 7, q: R`1 mol of helium is mixed with 1 mol of oxygen. Find \(C_v\), \(C_p\) and \(\gamma\) for the mixture.`,
      steps: [R`\(C_v = \dfrac{1\times\tfrac32R + 1\times\tfrac52R}{2} = 2R\).`, R`\(C_p = C_v + R = 3R\).`, R`\(\gamma = 3R/2R\).`],
      ans: R`\(C_v = 2R\), \(C_p = 3R\), \(\gamma = 1.5\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The ideal gas equation for \(n\) moles is:`,
      options: [R`\(PV = nRT\)`, R`\(P = nRTV\)`, R`\(PV = RT/n\)`, R`\(P/V = nRT\)`], correct: 0,
      solution: R`\(PV = nRT\), with T in kelvin.` },
    { level: 1, type: 'mcq', q: R`The average kinetic energy of gas molecules is directly proportional to the gas's:`,
      options: [R`pressure`, R`volume`, R`absolute temperature`, R`density`], correct: 2,
      solution: R`\(\bar K = \tfrac32kT\), proportional to T in kelvin.` },
    { level: 1, type: 'mcq', q: R`The number of molecules in one mole of a substance is:`,
      options: [R`\(3\times10^8\)`, R`\(1.38\times10^{-23}\)`, R`8.314`, R`\(6.022\times10^{23}\)`], correct: 3,
      solution: R`Avogadro's number, \(N_A = 6.022\times10^{23}\).` },
    { level: 1, type: 'mcq', q: R`A monatomic gas molecule has how many degrees of freedom?`,
      options: [R`1`, R`3`, R`5`, R`6`], correct: 1,
      solution: R`Only translation along x, y and z: 3.` },
    { level: 1, type: 'num', q: R`Find the average translational KE of a gas molecule at 300 K, in units of \(10^{-21}\) J. (\(k = 1.38\times10^{-23}\) J/K)`,
      answer: 6.21, tol: 0.01, unit: '× 10⁻²¹ J',
      solution: R`\(\tfrac32kT = 1.5\times1.38\times10^{-23}\times300 = 6.21\times10^{-21}\) J.` },
    { level: 1, type: 'num', q: R`How many moles are in 88 g of CO₂ (molar mass 44 g/mol)?`,
      answer: 2, tol: 0.001, unit: 'mol',
      solution: R`\(n = 88/44 = 2\) mol.` },
    { level: 2, type: 'mcq', q: R`If the absolute temperature of a gas is made 4 times larger, its rms speed becomes:`,
      options: [R`the same`, R`2 times`, R`4 times`, R`half`], correct: 1,
      solution: R`\(v_{rms} \propto \sqrt T\), and \(\sqrt4 = 2\).` },
    { level: 2, type: 'mcq', q: R`For a rigid diatomic gas, \(\gamma = C_p/C_v\) is:`,
      options: [R`1.67`, R`1.33`, R`1.4`, R`1.0`], correct: 2,
      solution: R`\(f = 5\): \(\gamma = 1 + 2/5 = 1.4\).` },
    { level: 2, type: 'mcq', q: R`According to kinetic theory, the pressure of a gas is:`,
      options: [R`\(\tfrac13\rho v_{rms}^2\)`, R`\(\tfrac23\rho v_{rms}^2\)`, R`\(\rho v_{rms}^2\)`, R`\(\tfrac12\rho v_{rms}^2\)`], correct: 0,
      solution: R`\(P = \tfrac13\rho v_{rms}^2\). The 1/3 appears because motion is shared equally among the 3 directions.` },
    { level: 2, type: 'mcq', q: R`The mean free path of gas molecules increases when:`,
      options: [R`pressure increases`, R`molecular diameter increases`, R`pressure decreases (T constant)`, R`number density increases`], correct: 2,
      solution: R`\(\lambda = 1/(\sqrt2\pi d^2n)\). Lower pressure means smaller \(n\) and a larger \(\lambda\).` },
    { level: 2, type: 'num', q: R`Find the rms speed (in m/s) of nitrogen molecules (M = 0.028 kg/mol) at 300 K. (R = 8.314)`,
      answer: 517, tol: 1.5, unit: 'm/s',
      solution: R`\(\sqrt{3RT/M} = \sqrt{3\times8.314\times300/0.028} = \sqrt{267{,}236} \approx 517\) m/s.` },
    { level: 2, type: 'num', q: R`Find the pressure (in Pa) of 2 mol of an ideal gas in 0.05 m³ at 300 K. (R = 8.314)`,
      answer: 99768, tol: 10, unit: 'Pa',
      solution: R`\(P = nRT/V = 2\times8.314\times300/0.05 = 99{,}768\) Pa.` },
    { level: 2, type: 'num', q: R`What is \(C_v\) of a rigid diatomic gas, in units of R?`,
      answer: 2.5, tol: 0.001, unit: 'R',
      solution: R`\(C_v = \tfrac f2R = \tfrac52R\).` },
    { level: 3, type: 'mcq', q: R`At what temperature will oxygen molecules have the same rms speed as hydrogen molecules at 300 K?`,
      options: [R`19200 K`, R`4800 K`, R`1200 K`, R`300 K`], correct: 1,
      solution: R`\(T/M\) must be equal: \(T/32 = 300/2\), so \(T = 4800\) K.` },
    { level: 3, type: 'mcq', q: R`The ratio \(v_{rms} : v_{avg} : v_{mp}\) for a gas is:`,
      options: [R`\(\sqrt2 : \sqrt3 : \sqrt{8/\pi}\)`, R`1 : 1 : 1`, R`\(\sqrt{8/\pi} : \sqrt3 : \sqrt2\)`, R`\(\sqrt3 : \sqrt{8/\pi} : \sqrt2\)`], correct: 3,
      solution: R`The coefficients under the root are 3, 8/π (≈ 2.55) and 2, in that order.` },
    { level: 3, type: 'num', q: R`2 mol of helium is mixed with 1 mol of nitrogen. Find \(\gamma\) for the mixture (to 3 decimal places).`,
      answer: 1.545, tol: 0.005, unit: '',
      solution: R`\(C_v = \dfrac{2(1.5R) + 1(2.5R)}{3} = 1.833R\); \(C_p = 2.833R\); \(\gamma = 2.833/1.833 \approx 1.545\).` },
    { level: 3, type: 'num', q: R`Find the total translational kinetic energy (in J) of 1 mol of an ideal gas at 300 K. (R = 8.314)`,
      answer: 3741.3, tol: 1, unit: 'J',
      solution: R`\(\tfrac32RT = 1.5\times8.314\times300 \approx 3741.3\) J.` }
  ]
});
