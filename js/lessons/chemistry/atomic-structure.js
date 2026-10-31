// Lesson: Atomic Structure.
var R = String.raw;
JEE.lesson('chemistry', 'atomic-structure', {
  theory: [
    { h: R`Inside the atom: electrons, protons, neutrons`,
      body: [
        R`Atoms are not indivisible. J.J. Thomson discovered the <b>electron</b> (negative, very light) using cathode rays. Goldstein found positive rays, which led to the <b>proton</b>. Chadwick discovered the uncharged <b>neutron</b> in 1932.`,
        R`<b>Thomson's model</b> ("plum pudding"): a ball of positive charge with electrons stuck in it. <b>Rutherford's</b> gold-foil experiment disproved it: since a few alpha particles bounced back, there must be a tiny, dense, positive <b>nucleus</b>, with electrons around it.`,
        R`<b>Atomic number</b> Z = number of protons. <b>Mass number</b> A = protons + neutrons. A neutral atom has Z electrons; an ion has gained or lost some.`
      ],
      analogy: R`If an atom were the size of a cricket stadium, its nucleus would be a small marble at the centre pitch, and the electrons would be specks zooming around the stands. The atom is mostly empty space.`,
      check: { q: R`How many protons, neutrons and electrons are there in \(^{35}_{17}\)Cl⁻?`, ans: R`17 protons, 18 neutrons, 18 electrons (one extra because of the negative charge).` } },

    { h: R`Light, photons and the photoelectric effect`,
      body: [
        R`Light is an <b>electromagnetic wave</b>: \(c = \nu\lambda\), with wavenumber \(\bar\nu = 1/\lambda\).`,
        R`Planck proposed that energy is emitted in packets called <b>quanta</b>: \(E = h\nu\). Einstein used this to explain the <b>photoelectric effect</b>: light of high enough frequency knocks electrons out of a metal, with \(K_{max} = h\nu - h\nu_0\).`,
        R`So light also behaves as particles (photons). Brighter light means more photons; higher frequency means more energy per photon.`
      ],
      points: [R`\(h = 6.626\times10^{-34}\) J s.`, R`Handy: \(E(\text{eV}) = 1240/\lambda(\text{nm})\).`] },

    { h: R`Bohr's model and the hydrogen spectrum`,
      body: [
        R`Heated hydrogen gives off light at only certain wavelengths (a <b>line spectrum</b>). Bohr explained this: the electron moves only in fixed circular orbits with fixed energies, \(E_n = -13.6\dfrac{Z^2}{n^2}\) eV, and radii \(r_n = 0.529\dfrac{n^2}{Z}\) Å.`,
        R`When the electron jumps from a higher orbit \(n_2\) to a lower one \(n_1\), it emits a photon: \(\dfrac1\lambda = R_HZ^2\left(\dfrac1{n_1^2} - \dfrac1{n_2^2}\right)\), with \(R_H = 109{,}677\) cm⁻¹.`,
        R`Series: Lyman (to n = 1, UV), Balmer (to n = 2, visible), Paschen (3), Brackett (4), Pfund (5).`
      ],
      analogy: R`Energy levels are like the floors of a building. An electron can be on the 1st or 2nd floor but not in between. Coming down the stairs releases a fixed amount of energy as a photon of one exact colour.`,
      points: [R`Number of lines when electrons fall from level n to the ground state: \(n(n - 1)/2\).`] },

    { h: R`Why Bohr's model isn't enough: dual nature and uncertainty`,
      body: [
        R`Bohr's model works only for one-electron species (H, He⁺, Li²⁺). It can't explain spectra of bigger atoms, the splitting of lines in magnetic fields, or chemical bonding.`,
        R`<b>de Broglie:</b> electrons also behave as waves, with \(\lambda = \dfrac{h}{mv}\).`,
        R`<b>Heisenberg's uncertainty principle:</b> we cannot know both the exact position and the exact momentum of an electron at the same time: \(\Delta x\cdot\Delta p \ge \dfrac{h}{4\pi}\). So fixed, exactly known orbits make no sense; we can only talk about where an electron is <b>likely</b> to be.`
      ],
      analogy: R`Trying to locate an electron is like trying to photograph a spinning fan blade: if you know exactly where it is, you lose track of how fast it's moving, and vice versa.` },

    { h: R`Orbitals and quantum numbers`,
      body: [
        R`An <b>orbital</b> is a region around the nucleus where an electron is most likely to be found. Each electron is described by four <b>quantum numbers</b>, like an address:`,
        R`<b>n</b> (principal, 1, 2, 3…): the shell, its size and energy. <b>l</b> (azimuthal, 0 to n − 1): the subshell and its shape (s = 0, p = 1, d = 2, f = 3). <b>mₗ</b> (magnetic, −l to +l): which orbital, i.e. its orientation. <b>mₛ</b> (spin, +½ or −½).`,
        R`A subshell has \(2l + 1\) orbitals; a shell has \(n^2\) orbitals and up to \(2n^2\) electrons.`
      ],
      analogy: R`Quantum numbers are like a postal address: n = city, l = street, mₗ = house number, mₛ = which of the two people living there.`,
      mistake: R`Writing "2d" or "1p". For n = 2, l can only be 0 or 1, so 2d does not exist. Likewise 1p does not exist.` },

    { h: R`Shapes of orbitals and nodes`,
      body: [
        R`<b>s</b> orbitals are spheres. <b>p</b> orbitals are dumbbells pointing along x, y and z. <b>d</b> orbitals mostly look like four-leaf clovers (\(d_{xy}, d_{yz}, d_{xz}, d_{x^2-y^2}\)); \(d_{z^2}\) is a dumbbell with a ring around its middle.`,
        R`A <b>node</b> is a place where the electron is never found. <b>Radial nodes</b> (spherical shells) = \(n - l - 1\). <b>Angular nodes</b> (planes or cones) = \(l\). Total = \(n - 1\).`
      ],
      check: { q: R`How many radial and angular nodes does a 3p orbital have?`, ans: R`Radial: 3 − 1 − 1 = 1. Angular: 1.` } },

    { h: R`Filling rules: Aufbau, Pauli and Hund`,
      body: [
        R`<b>Aufbau principle:</b> electrons fill the lowest-energy orbitals first. The order follows the \((n + l)\) rule: lower \(n + l\) first; if two are equal, the lower \(n\) first. The order is 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d…`,
        R`<b>Pauli exclusion principle:</b> no two electrons in an atom can have all four quantum numbers the same, so an orbital holds at most 2 electrons, with opposite spins.`,
        R`<b>Hund's rule:</b> in orbitals of equal energy (such as the three 2p orbitals), electrons first go in singly with parallel spins, and pair up only after that.`
      ],
      analogy: R`Hund's rule is like passengers boarding an empty bus: each takes an empty double seat first, and only shares a seat when every seat has someone in it.` },

    { h: R`Electronic configurations and extra stability`,
      body: [
        R`Write configurations by filling in Aufbau order: Na (11) = 1s² 2s² 2p⁶ 3s¹ = [Ne] 3s¹. Fe (26) = [Ar] 3d⁶ 4s².`,
        R`<b>Exceptions:</b> Cr is [Ar] 3d⁵ 4s¹ and Cu is [Ar] 3d¹⁰ 4s¹. Half-filled (d⁵) and completely filled (d¹⁰) subshells are extra stable, because of symmetry and exchange energy.`,
        R`When forming ions, transition metals lose their 4s electrons <b>before</b> their 3d electrons: Fe³⁺ = [Ar] 3d⁵.`
      ],
      points: [R`Unpaired electrons make an atom or ion paramagnetic: \(\mu = \sqrt{n(n + 2)}\) BM.`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`How many electrons, protons and neutrons are there in the chloride ion \(^{35}_{17}\)Cl⁻?`,
      steps: [R`Protons = Z = 17.`, R`Neutrons = A − Z = 35 − 17 = 18.`, R`Electrons = 17 + 1 (extra, because of the −1 charge).`],
      ans: R`18 electrons, 17 protons, 18 neutrons` },
    { level: 1, t: 10, q: R`Write the electronic configurations of Fe (Z = 26) and Fe³⁺.`,
      steps: [R`Fe: fill up to argon (18), then 4s² and 3d⁶.`, R`Fe³⁺: remove the two 4s electrons first, then one 3d electron.`],
      ans: R`Fe: [Ar] 3d⁶ 4s². Fe³⁺: [Ar] 3d⁵ (half-filled, which is why Fe³⁺ is so stable).` },
    { level: 1, t: 1, q: R`Find the frequency and wavenumber of light of wavelength 500 nm.`,
      steps: [R`\(\nu = c/\lambda = 3\times10^8/(5\times10^{-7}) = 6\times10^{14}\) Hz.`, R`\(\bar\nu = 1/\lambda = 1/(5\times10^{-7})\).`],
      ans: R`\(6\times10^{14}\) Hz; \(2\times10^6\) m⁻¹` },
    { level: 3, t: 2, q: R`Which electron transition in He⁺ gives light of the same wavelength as the n = 2 → n = 1 transition in hydrogen?`,
      steps: [R`H (Z = 1): \(\dfrac1\lambda \propto 1\left(1 - \tfrac14\right) = \tfrac34\).`, R`He⁺ (Z = 2, so \(Z^2 = 4\)): need \(4\left(\dfrac1{n_1^2} - \dfrac1{n_2^2}\right) = \dfrac34\), so \(\dfrac1{n_1^2} - \dfrac1{n_2^2} = \dfrac3{16}\).`, R`\(n_1 = 2, n_2 = 4\) works: \(\tfrac14 - \tfrac1{16} = \tfrac3{16}\).`],
      ans: R`n = 4 → n = 2 in He⁺` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The electron was discovered by:`,
      options: [R`Rutherford`, R`Chadwick`, R`J.J. Thomson`, R`Bohr`], correct: 2,
      solution: R`Thomson discovered the electron in cathode-ray experiments (1897).` },
    { level: 1, type: 'mcq', q: R`The maximum number of electrons an orbital can hold is:`,
      options: [R`1`, R`2`, R`6`, R`8`], correct: 1,
      solution: R`Pauli exclusion principle: 2 electrons with opposite spins.` },
    { level: 1, type: 'mcq', q: R`The shape of an s orbital is:`,
      options: [R`spherical`, R`dumbbell`, R`cloverleaf`, R`a ring`], correct: 0,
      solution: R`s orbitals are spherically symmetric.` },
    { level: 1, type: 'mcq', q: R`A p subshell contains how many orbitals?`,
      options: [R`1`, R`5`, R`7`, R`3`], correct: 3,
      solution: R`l = 1, so \(2l + 1 = 3\) orbitals (pₓ, p_y, p_z).` },
    { level: 1, type: 'num', q: R`How many neutrons are in \(^{23}_{11}\)Na?`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`A − Z = 23 − 11 = 12.` },
    { level: 1, type: 'num', q: R`What is the maximum number of electrons in the n = 2 shell?`,
      answer: 8, tol: 0.001, unit: '',
      solution: R`\(2n^2 = 8\).` },
    { level: 2, type: 'mcq', q: R`Which quantum number describes the spin of an electron?`,
      options: [R`n`, R`l`, R`mₗ`, R`mₛ`], correct: 3,
      solution: R`mₛ = +½ or −½.` },
    { level: 2, type: 'mcq', q: R`Which of these orbitals cannot exist?`,
      options: [R`3d`, R`2p`, R`2d`, R`4f`], correct: 2,
      solution: R`For n = 2, l can only be 0 or 1, so there is no d (l = 2) orbital.` },
    { level: 2, type: 'mcq', q: R`Hund's rule says that electrons in orbitals of equal energy:`,
      options: [R`pair up first`, R`occupy them singly with parallel spins before pairing`, R`fill the highest energy orbital first`, R`never have the same n`], correct: 1,
      solution: R`Maximum multiplicity: singly first, parallel spins.` },
    { level: 2, type: 'mcq', q: R`The ground-state electronic configuration of copper (Z = 29) is:`,
      options: [R`[Ar] 3d¹⁰ 4s¹`, R`[Ar] 3d⁹ 4s²`, R`[Ar] 3d⁸ 4s² 4p¹`, R`[Ar] 3d¹⁰ 4p¹`], correct: 0,
      solution: R`A completely filled 3d¹⁰ is extra stable, so one 4s electron moves into 3d.` },
    { level: 2, type: 'num', q: R`How many nodes in total does a 3s orbital have?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`Total nodes = n − 1 = 2 (both radial, since l = 0).` },
    { level: 2, type: 'num', q: R`Find the energy (in eV) of a hydrogen electron in the n = 4 level.`,
      answer: -0.85, tol: 0.005, unit: 'eV',
      solution: R`\(-13.6/16 = -0.85\) eV.` },
    { level: 2, type: 'num', q: R`How many unpaired electrons does Mn²⁺ (Z of Mn = 25) have?`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`Mn²⁺ = [Ar] 3d⁵: five d electrons, all unpaired (Hund's rule).` },
    { level: 3, type: 'mcq', q: R`Which transition in He⁺ emits light of the same wavelength as the 2 → 1 transition in hydrogen?`,
      options: [R`2 → 1`, R`4 → 3`, R`3 → 1`, R`4 → 2`], correct: 3,
      solution: R`\(Z^2(1/n_1^2 - 1/n_2^2)\) must equal 3/4. With \(Z^2 = 4\): \(1/4 - 1/16 = 3/16\) ✓` },
    { level: 3, type: 'mcq', q: R`An orbital has n = 3 and l = 2. It is a:`,
      options: [R`3p orbital`, R`3d orbital`, R`2d orbital`, R`3s orbital`], correct: 1,
      solution: R`l = 2 means d, so it is 3d.` },
    { level: 3, type: 'num', q: R`Find the de Broglie wavelength (in nm) of an electron moving at \(7.27\times10^5\) m/s. (\(m = 9.1\times10^{-31}\) kg)`,
      answer: 1, tol: 0.01, unit: 'nm',
      solution: R`\(\lambda = h/mv = 6.626\times10^{-34}/(9.1\times10^{-31}\times7.27\times10^5) \approx 1.0\times10^{-9}\) m.` },
    { level: 3, type: 'num', q: R`Electrons in hydrogen atoms fall from n = 6 to the ground state. How many different spectral lines are possible?`,
      answer: 15, tol: 0.001, unit: '',
      solution: R`\(n(n - 1)/2 = 6\times5/2 = 15\).` }
  ]
});
