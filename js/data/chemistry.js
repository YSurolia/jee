// Chemistry: 20 units from the JEE Main syllabus (physical, inorganic, organic, practical).
// Every content string uses String.raw (R`...`) so LaTeX backslashes stay intact.
// Each solved example is tagged with the syllabus topic it covers (exact string from `syllabus`).
var R = String.raw;
window.JEE = window.JEE || {};
JEE.chemistry = {
  name: 'Chemistry',
  tagline: 'Physical, inorganic and organic chemistry',
  chapters: [
    {
      id: 'basic-concepts', title: 'Some Basic Concepts in Chemistry', cls: 11,
      syllabus: [R`Matter & its nature`, R`Dalton's atomic theory`, R`Laws of chemical combination`, R`Atomic & molecular masses`, R`Mole concept & molar mass`, R`Percentage composition`, R`Empirical & molecular formulae`, R`Chemical equations & stoichiometry`, R`Limiting reagent`],
      concepts: [
        { h: R`The mole`, body: R`1 mol contains \(N_A = 6.022\times10^{23}\) particles. Moles = mass ÷ molar mass, which equals volume at STP ÷ 22.4 L.` },
        { h: R`Empirical formula`, body: R`Divide each element's % mass by its atomic mass. Then divide every result by the smallest, and round to whole numbers (multiplying all of them by a factor if needed). The molecular formula is \(n\times\) the empirical formula, where \(n = M/M_{empirical}\).` },
        { h: R`Limiting reagent`, body: R`The reactant that runs out first decides how much product forms. Divide each reactant's moles by its stoichiometric coefficient. The smallest result identifies the limiting reagent.` }
      ],
      formulas: [
        R`\(n = \dfrac{m}{M} = \dfrac{N}{N_A} = \dfrac{V_{STP}}{22.4\,\text{L}}\)`,
        R`Molarity \(M = \dfrac{n_{solute}}{V_{solution}(\text{L})}\), molality \(m = \dfrac{n_{solute}}{W_{solvent}(\text{kg})}\)`,
        R`Mole fraction: \(x_A = \dfrac{n_A}{n_A + n_B}\)`,
        R`\(M_1V_1 = M_2V_2\) (dilution)`
      ],
      examples: [
        { topic: R`Matter & its nature`, level: 'Main', q: R`Classify each as an element, a compound or a mixture: air, sugar, brass, water, oxygen.`,
          steps: [R`An element has one kind of atom. A compound has elements combined in a fixed ratio. A mixture has a variable composition.`],
          ans: R`Elements: oxygen. Compounds: sugar, water. Mixtures (homogeneous): air, brass.` },
        { topic: R`Dalton's atomic theory`, level: 'Main', q: R`Which postulates of Dalton's atomic theory had to be changed later, and why?`,
          steps: [R`"Atoms are indivisible": atoms contain electrons, protons and neutrons.`, R`"All atoms of an element are identical": isotopes have different masses.`],
          ans: R`The indivisibility of atoms and the identical masses of an element's atoms. The laws of chemical combination still hold.` },
        { topic: R`Laws of chemical combination`, level: 'Main', q: R`12 g of carbon combines with 16 g of oxygen in CO and with 32 g in CO₂. Which law does this show?`,
          steps: [R`For a fixed mass of C, the masses of O are 16 : 32 = 1 : 2.`, R`This is a simple whole-number ratio.`],
          ans: R`The law of multiple proportions` },
        { topic: R`Atomic & molecular masses`, level: 'Main', q: R`Chlorine is 75% \(^{35}\)Cl and 25% \(^{37}\)Cl. Find its average atomic mass, and the molecular mass of H₂SO₄.`,
          steps: [R`\(0.75(35) + 0.25(37) = 26.25 + 9.25\).`, R`H₂SO₄: \(2(1) + 32 + 4(16)\).`],
          ans: R`35.5 u; 98 u` },
        { topic: R`Mole concept & molar mass`, level: 'Main', q: R`How many moles and molecules are there in 9 g of water?`,
          steps: [R`\(M(\text{H}_2\text{O}) = 18\) g/mol, so \(n = 9/18 = 0.5\) mol.`, R`Molecules \(= 0.5\times6.022\times10^{23}\).`],
          ans: R`0.5 mol, \(3.011\times10^{23}\) molecules` },
        { topic: R`Percentage composition`, level: 'Main', q: R`Find the percentage of nitrogen in urea, CO(NH₂)₂.`,
          steps: [R`Molar mass \(= 12 + 16 + 2(14) + 4(1) = 60\) g/mol.`, R`\(\%N = \dfrac{28}{60}\times100\).`],
          ans: R`46.7%` },
        { topic: R`Empirical & molecular formulae`, level: 'Main', q: R`A compound contains C 40%, H 6.67% and O 53.3%. Find its empirical formula.`,
          steps: [R`C: \(40/12 = 3.33\). H: \(6.67/1 = 6.67\). O: \(53.3/16 = 3.33\).`, R`Divide each by 3.33 to get 1 : 2 : 1.`],
          ans: R`\(\text{CH}_2\text{O}\)` },
        { topic: R`Chemical equations & stoichiometry`, level: 'Main', q: R`How much CO₂ and O₂ are involved when 16 g of methane burns completely?`,
          steps: [R`\(\text{CH}_4 + 2\text{O}_2 \to \text{CO}_2 + 2\text{H}_2\text{O}\).`, R`16 g CH₄ = 1 mol. It needs 2 mol O₂ (64 g) and gives 1 mol CO₂ (44 g).`],
          ans: R`It uses 64 g of O₂ and produces 44 g of CO₂` },
        { topic: R`Limiting reagent`, level: 'Main', q: R`28 g of N₂ reacts with 10 g of H₂ to form NH₃. Find the limiting reagent, the mass of NH₃, and the excess left over.`,
          steps: [R`N₂: 1 mol, which needs 3 mol (6 g) of H₂. 5 mol of H₂ is available.`, R`So N₂ is limiting, and it gives 2 mol NH₃ \(= 34\) g.`, R`H₂ left \(= 10 - 6 = 4\) g.`],
          ans: R`N₂ is limiting; 34 g NH₃; 4 g H₂ left` }
      ],
      practice: [
        { q: R`Find the molarity of a solution made by dissolving 4 g of NaOH in 250 mL of solution.`, ans: R`\(n = 4/40 = 0.1\) mol; \(M = 0.1/0.25 = 0.4\) M` },
        { q: R`4 g of \(\text{H}_2\) reacts with 16 g of \(\text{O}_2\). Which is the limiting reagent, and how much water forms?`, ans: R`\(\text{H}_2\): 2 mol, \(\text{O}_2\): 0.5 mol. \(\text{O}_2\) is limiting (0.5 mol needs only 1 mol of \(\text{H}_2\)). 1 mol of water forms, which is 18 g.` }
      ]
    },
    {
      id: 'atomic-structure', title: 'Atomic Structure', cls: 11,
      syllabus: [R`Thomson & Rutherford models`, R`Electromagnetic radiation & photoelectric effect`, R`Hydrogen spectrum`, R`Bohr's model & its limitations`, R`Dual nature of matter, de Broglie relation`, R`Heisenberg uncertainty principle`, R`Quantum numbers`, R`Shapes of s, p, d orbitals`, R`Nodes`, R`Aufbau principle, Pauli exclusion principle, Hund's rule`, R`Electronic configuration & stability of half-filled/full orbitals`],
      concepts: [
        { h: R`Quantum numbers`, body: R`\(n\) (shell), \(l = 0\) to \(n - 1\) (subshell: s, p, d, f), \(m_l = -l\) to \(+l\) (orbital), and \(m_s = \pm\tfrac12\) (spin). No two electrons share all four.` },
        { h: R`Nodes`, body: R`Radial nodes \(= n - l - 1\). Angular nodes \(= l\). Total nodes \(= n - 1\).` },
        { h: R`Filling order`, body: R`Use the \((n + l)\) rule: lower \(n + l\) fills first, and if two are equal, the lower \(n\) goes first. Exceptions: Cr is \([\text{Ar}]3d^54s^1\) and Cu is \([\text{Ar}]3d^{10}4s^1\), because half-filled and filled subshells are extra stable.` }
      ],
      formulas: [
        R`\(E_n = -13.6\dfrac{Z^2}{n^2}\) eV, \(r_n = 0.529\dfrac{n^2}{Z}\) Å, \(v_n = 2.18\times10^6\dfrac{Z}{n}\) m/s`,
        R`Number of spectral lines from level \(n\): \(\dfrac{n(n-1)}{2}\)`,
        R`\(\lambda = \dfrac{h}{mv}\), \(\Delta x\,\Delta p \ge \dfrac{h}{4\pi}\)`,
        R`Maximum electrons: \(2n^2\) in a shell, \(2(2l + 1)\) in a subshell`,
        R`Spin-only magnetic moment: \(\mu = \sqrt{n(n+2)}\) BM`
      ],
      examples: [
        { topic: R`Thomson & Rutherford models`, level: 'Main', q: R`What did Rutherford's gold-foil experiment show, and why did it rule out Thomson's model?`,
          steps: [R`Most α-particles went straight through, so the atom is mostly empty space.`, R`A few were deflected through large angles (about 1 in 20,000 bounced back), so there must be a tiny, dense, positive centre.`],
          ans: R`The atom has a tiny, heavy, positive nucleus. Thomson's spread-out positive charge could not cause large deflections.` },
        { topic: R`Electromagnetic radiation & photoelectric effect`, level: 'Main', q: R`Find the energy of one photon, and of one mole of photons, of 300 nm light.`,
          steps: [R`\(E = \dfrac{hc}{\lambda} = \dfrac{6.626\times10^{-34}\times3\times10^8}{3\times10^{-7}} = 6.63\times10^{-19}\) J.`, R`Per mole: \(\times6.022\times10^{23}\).`],
          ans: R`\(6.63\times10^{-19}\) J per photon; \(\approx 399\) kJ/mol` },
        { topic: R`Hydrogen spectrum`, level: 'Main', q: R`Electrons in a sample of H atoms fall from n = 5 to the ground state. How many different spectral lines are possible?`,
          steps: [R`Lines \(= \dfrac{n(n-1)}{2} = \dfrac{5\times4}{2}\).`],
          ans: R`10` },
        { topic: R`Bohr's model & its limitations`, level: 'Main', q: R`Find the radius of the second Bohr orbit of \(\text{He}^+\).`,
          steps: [R`\(r = 0.529\times\dfrac{n^2}{Z} = 0.529\times\dfrac{4}{2}\).`],
          ans: R`1.058 Å` },
        { topic: R`Dual nature of matter, de Broglie relation`, level: 'Main', q: R`Find the de Broglie wavelength of an electron moving at \(10^6\) m/s. (\(m = 9.1\times10^{-31}\) kg)`,
          steps: [R`\(\lambda = \dfrac{h}{mv} = \dfrac{6.626\times10^{-34}}{9.1\times10^{-31}\times10^6}\).`],
          ans: R`\(\approx 7.3\times10^{-10}\) m = 7.3 Å` },
        { topic: R`Heisenberg uncertainty principle`, level: 'Advanced', q: R`An electron's position is known to within 1 Å. Find the minimum uncertainty in its velocity.`,
          steps: [R`\(\Delta v \ge \dfrac{h}{4\pi m\Delta x} = \dfrac{6.626\times10^{-34}}{4\pi(9.1\times10^{-31})(10^{-10})}\).`],
          ans: R`\(\approx 5.8\times10^5\) m/s, which is huge, so a fixed Bohr orbit makes no sense` },
        { topic: R`Quantum numbers`, level: 'Main', q: R`Give the four quantum numbers of the outermost electron of Na. Is the set \(n = 1, l = 0, m_l = 1\) allowed?`,
          steps: [R`Na is \(1s^22s^22p^63s^1\): \(n = 3\), \(l = 0\), \(m_l = 0\), \(m_s = +\tfrac12\).`, R`For \(l = 0\), \(m_l\) can only be 0.`],
          ans: R`\((3, 0, 0, +\tfrac12)\). The set \(n = 1, l = 0, m_l = 1\) is not allowed.` },
        { topic: R`Shapes of s, p, d orbitals`, level: 'Main', q: R`Describe the shapes of s, p and d orbitals. Which d orbitals have lobes along the axes?`,
          steps: [R`s: spherical (1 orbital). p: dumbbell (3 orbitals, along x, y, z). d: mostly cloverleaf (5 orbitals).`, R`\(d_{x^2-y^2}\) has lobes on the x and y axes. \(d_{z^2}\) has lobes on z plus a ring ("doughnut") in the xy-plane.`],
          ans: R`\(d_{x^2-y^2}\) and \(d_{z^2}\) lie along the axes. \(d_{xy}, d_{yz}, d_{xz}\) lie between them.` },
        { topic: R`Nodes`, level: 'Main', q: R`Find the radial, angular and total nodes of a 4d orbital.`,
          steps: [R`\(n = 4\), \(l = 2\).`, R`Radial \(= n - l - 1 = 1\). Angular \(= l = 2\).`],
          ans: R`1 radial, 2 angular, 3 in total` },
        { topic: R`Aufbau principle, Pauli exclusion principle, Hund's rule`, level: 'Main', q: R`Write the electronic configuration of nitrogen and show how its 2p electrons are arranged.`,
          steps: [R`Aufbau: \(1s^2\,2s^2\,2p^3\).`, R`Hund's rule: the three 2p electrons occupy separate orbitals with parallel spins. Pauli: at most 2 electrons, with opposite spins, per orbital.`],
          ans: R`\(1s^22s^22p_x^1 2p_y^1 2p_z^1\): 3 unpaired electrons` },
        { topic: R`Electronic configuration & stability of half-filled/full orbitals`, level: 'Main', q: R`Write the configurations of Cr (Z = 24) and Cu (Z = 29). Why are they "exceptions"?`,
          steps: [R`Expected: Cr \([\text{Ar}]3d^44s^2\), Cu \([\text{Ar}]3d^94s^2\).`, R`Moving one 4s electron gives a half-filled \(3d^5\) or a full \(3d^{10}\) subshell, which is more stable (symmetry and exchange energy).`],
          ans: R`Cr: \([\text{Ar}]3d^54s^1\). Cu: \([\text{Ar}]3d^{10}4s^1\).` }
      ],
      practice: [
        { q: R`How many radial nodes does a 3p orbital have?`, ans: R`\(n - l - 1 = 3 - 1 - 1 = 1\)` },
        { q: R`What is the energy of an electron in the third orbit of hydrogen?`, ans: R`\(-13.6/9 \approx -1.51\) eV` }
      ]
    },
    {
      id: 'chemical-bonding', title: 'Chemical Bonding and Molecular Structure', cls: 11,
      syllabus: [R`Kossel–Lewis approach`, R`Ionic bond & lattice enthalpy`, R`Covalent bond, electronegativity, Fajans' rules`, R`Dipole moment`, R`VSEPR theory & shapes of molecules`, R`Valence bond theory & hybridisation (s, p, d)`, R`Resonance`, R`Molecular orbital theory, bond order, magnetic behaviour (homonuclear diatomics)`, R`Hydrogen bonding`],
      concepts: [
        { h: R`VSEPR`, body: R`Electron pairs around the central atom repel each other, so they spread as far apart as possible. The strength of repulsion is lone–lone > lone–bond > bond–bond, which is why NH₃ (107°) and H₂O (104.5°) have angles below 109.5°.` },
        { h: R`Hybridisation`, body: R`Steric number = σ bonds + lone pairs. 2 → sp, 3 → sp², 4 → sp³, 5 → sp³d, 6 → sp³d².` },
        { h: R`MOT`, body: R`Bond order = ½(bonding − antibonding electrons). Unpaired electrons make a molecule paramagnetic, so O₂ is paramagnetic. Up to N₂, s–p mixing changes the order of the energy levels.` }
      ],
      formulas: [
        R`Bond order \(= \tfrac12(N_b - N_a)\)`,
        R`\(\mu = q\times d\) (in debye, D)`,
        R`Steric number \(= \tfrac12[V + M - c + a]\) (valence electrons, monovalent atoms, cationic charge, anionic charge)`,
        R`Higher bond order means a shorter, stronger bond`
      ],
      examples: [
        { topic: R`Kossel–Lewis approach`, level: 'Main', q: R`Find the formal charges on the atoms of ozone, O₃ (O=O–O).`,
          steps: [R`Formal charge \(= V - L - \tfrac12B\).`, R`Central O: \(6 - 2 - 3 = +1\). Double-bonded O: \(6 - 4 - 2 = 0\). Single-bonded O: \(6 - 6 - 1 = -1\).`],
          ans: R`\(+1\) (central), 0 and \(-1\) (ends). The overall charge is 0.` },
        { topic: R`Ionic bond & lattice enthalpy`, level: 'Main', q: R`Arrange NaF, NaCl, NaBr and MgO in decreasing order of lattice enthalpy.`,
          steps: [R`Lattice enthalpy rises with ionic charge and falls with ionic size.`, R`MgO has 2+/2− ions. Among the sodium halides, the smaller anion gives the larger value.`],
          ans: R`MgO > NaF > NaCl > NaBr` },
        { topic: R`Covalent bond, electronegativity, Fajans' rules`, level: 'Main', q: R`Using Fajans' rules, say which is more covalent: (a) NaCl or AlCl₃ (b) LiF or LiI.`,
          steps: [R`A small, highly charged cation polarises the anion more strongly.`, R`A large anion is easier to polarise.`],
          ans: R`(a) AlCl₃ (b) LiI` },
        { topic: R`Dipole moment`, level: 'Main', q: R`Both NH₃ and NF₃ are pyramidal. Why is NH₃'s dipole moment (1.47 D) much larger than NF₃'s (0.23 D)?`,
          steps: [R`In NH₃, the N–H bond dipoles point toward N, the same direction as the lone pair's dipole, so they add.`, R`In NF₃, the N–F dipoles point away from N, opposite to the lone pair, so they partly cancel.`],
          ans: R`The lone-pair dipole adds to the bond dipoles in NH₃ but opposes them in NF₃.` },
        { topic: R`VSEPR theory & shapes of molecules`, level: 'Main', q: R`Use VSEPR to predict the shapes of SF₄ and H₂O.`,
          steps: [R`SF₄: 4 bond pairs + 1 lone pair = 5 pairs. The lone pair goes in the equatorial position.`, R`H₂O: 2 bond pairs + 2 lone pairs = 4 pairs (tetrahedral arrangement).`],
          ans: R`SF₄: see-saw. H₂O: bent (104.5°).` },
        { topic: R`Valence bond theory & hybridisation (s, p, d)`, level: 'Main', q: R`Predict the hybridisation and shape of \(\text{XeF}_4\).`,
          steps: [R`Xe has 8 valence electrons. 4 of them bond to the F atoms, leaving 2 lone pairs.`, R`Steric number \(= 4 + 2 = 6\), so sp³d².`, R`The lone pairs sit opposite each other, which makes the molecule square planar.`],
          ans: R`sp³d², square planar` },
        { topic: R`Resonance`, level: 'Main', q: R`Find the C–O bond order in the carbonate ion. Are all three bonds the same length?`,
          steps: [R`There are 3 equivalent resonance structures, each with one C=O and two C–O⁻ bonds.`, R`Bond order \(= \dfrac{\text{total bonds}}{\text{positions}} = \dfrac{4}{3}\).`],
          ans: R`1.33. All three bonds have the same length, between a single and a double bond.` },
        { topic: R`Molecular orbital theory, bond order, magnetic behaviour (homonuclear diatomics)`, level: 'Main', q: R`Find the bond order of \(\text{O}_2\) and of \(\text{O}_2^-\), and say whether each is magnetic.`,
          steps: [R`O₂ has 16 electrons: \(N_b = 10\), \(N_a = 6\), so BO \(= 2\). There are 2 unpaired electrons in the π* orbitals.`, R`O₂⁻ has one more electron in π*: \(N_a = 7\), so BO \(= 1.5\), with 1 unpaired electron.`],
          ans: R`O₂: BO 2, paramagnetic. O₂⁻: BO 1.5, paramagnetic.` },
        { topic: R`Hydrogen bonding`, level: 'Main', q: R`(a) Why is H₂O a liquid while H₂S is a gas at room temperature? (b) Why is o-nitrophenol more volatile than p-nitrophenol?`,
          steps: [R`(a) H₂O molecules hydrogen-bond to each other. S is not electronegative enough for H₂S to do this.`, R`(b) The ortho isomer forms an <i>intra</i>molecular H-bond, while the para isomer forms <i>inter</i>molecular H-bonds, which link its molecules together.`],
          ans: R`(a) Intermolecular H-bonding in water (b) Intramolecular H-bonding in the ortho isomer, which is why it can be steam-distilled.` }
      ],
      practice: [
        { q: R`Give the hybridisation and shape of \(\text{SF}_6\).`, ans: R`sp³d², octahedral` },
        { q: R`Why is the dipole moment of \(\text{CO}_2\) zero?`, ans: R`It is linear, so the two equal C=O bond dipoles cancel.` }
      ]
    },
    {
      id: 'chemical-thermodynamics', title: 'Chemical Thermodynamics', cls: 11,
      syllabus: [R`System, surroundings, state functions`, R`First law, internal energy & enthalpy`, R`Heat capacity & specific heat`, R`Hess's law`, R`Enthalpies of bond dissociation, combustion, formation, atomisation, sublimation, phase transition, hydration, ionisation & solution`, R`Entropy & second law`, R`Gibbs energy & spontaneity`, R`ΔG° and equilibrium constant`],
      concepts: [
        { h: R`Spontaneity`, body: R`A process is spontaneous when \(\Delta G < 0\). If \(\Delta H < 0\) and \(\Delta S > 0\), it is always spontaneous. If both are positive, it is spontaneous at high \(T\). If both are negative, it is spontaneous at low \(T\).` },
        { h: R`Hess's law`, body: R`The enthalpy change depends only on the start and end states. So you can add and subtract thermochemical equations just like algebraic equations.` },
        { h: R`ΔH vs ΔU`, body: R`They differ only because of the gaseous moles: \(\Delta H = \Delta U + \Delta n_g RT\).` }
      ],
      formulas: [
        R`\(\Delta U = q + w\) (with \(w\) = work done <i>on</i> the system, IUPAC convention)`,
        R`\(\Delta H = \Delta U + \Delta n_g RT\)`,
        R`\(\Delta G = \Delta H - T\Delta S,\quad \Delta G^\circ = -RT\ln K = -2.303RT\log K\)`,
        R`Reversible isothermal: \(w = -2.303\,nRT\log\dfrac{V_2}{V_1}\)`,
        R`\(\Delta S = \dfrac{q_{rev}}{T}\), \(\Delta H_r = \sum\Delta H_f(\text{products}) - \sum\Delta H_f(\text{reactants})\)`
      ],
      examples: [
        { topic: R`System, surroundings, state functions`, level: 'Main', q: R`Which of these are state functions: q, w, U, H, S, G, T, P? What kind of system is a sealed thermos flask?`,
          steps: [R`A state function depends only on the present state, not on how it was reached.`, R`A thermos exchanges neither matter nor energy with its surroundings.`],
          ans: R`State functions: U, H, S, G, T, P (q and w depend on the path). A thermos is an isolated system.` },
        { topic: R`First law, internal energy & enthalpy`, level: 'Main', q: R`A system absorbs 300 J of heat and does 100 J of work on its surroundings. Find \(\Delta U\).`,
          steps: [R`\(\Delta U = q + w\), with \(q = +300\) J and \(w = -100\) J (work done <i>by</i> the system).`],
          ans: R`\(+200\) J` },
        { topic: R`Heat capacity & specific heat`, level: 'Main', q: R`How much heat raises 50 g of water from 25 °C to 75 °C? (\(c = 4.18\) J/g K)`,
          steps: [R`\(q = mc\Delta T = 50\times4.18\times50\).`],
          ans: R`10,450 J ≈ 10.5 kJ` },
        { topic: R`Hess's law`, level: 'Main', q: R`Given C + O₂ → CO₂, ΔH = −393.5 kJ and CO + ½O₂ → CO₂, ΔH = −283.0 kJ, find ΔH for C + ½O₂ → CO.`,
          steps: [R`Subtract the second equation from the first.`, R`\(\Delta H = -393.5 - (-283.0)\).`],
          ans: R`−110.5 kJ/mol` },
        { topic: R`Enthalpies of bond dissociation, combustion, formation, atomisation, sublimation, phase transition, hydration, ionisation & solution`, level: 'Main', q: R`Use bond enthalpies to find \(\Delta H\) for \(\text{H}_2 + \text{Cl}_2 \to 2\text{HCl}\). (H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol)`,
          steps: [R`\(\Delta H = \sum\text{bonds broken} - \sum\text{bonds formed}\).`, R`\(= (436 + 242) - 2(431) = 678 - 862\).`],
          ans: R`\(-184\) kJ (exothermic)` },
        { topic: R`Entropy & second law`, level: 'Main', q: R`Find the entropy change when 1 mol of ice melts at 0 °C. (\(\Delta H_{fus} = 6.01\) kJ/mol)`,
          steps: [R`At the melting point the process is reversible: \(\Delta S = \dfrac{\Delta H}{T} = \dfrac{6010}{273}\).`],
          ans: R`\(\approx +22.0\) J/(K mol) (the liquid is more disordered)` },
        { topic: R`Gibbs energy & spontaneity`, level: 'Main', q: R`A reaction has \(\Delta H = +40\) kJ/mol and \(\Delta S = +100\) J/(K·mol). Above what temperature is it spontaneous?`,
          steps: [R`It is spontaneous when \(T\Delta S > \Delta H\).`, R`\(T > \dfrac{40000}{100}\).`],
          ans: R`Above 400 K` },
        { topic: R`ΔG° and equilibrium constant`, level: 'Main', q: R`A reaction has \(K = 10\) at 300 K. Find \(\Delta G^\circ\).`,
          steps: [R`\(\Delta G^\circ = -2.303RT\log K = -2.303\times8.314\times300\times1\).`],
          ans: R`\(\approx -5.74\) kJ/mol. \(K > 1\) means \(\Delta G^\circ < 0\).` }
      ],
      practice: [
        { q: R`For N₂ + 3H₂ → 2NH₃, write \(\Delta H\) in terms of \(\Delta U\).`, ans: R`\(\Delta n_g = 2 - 4 = -2\), so \(\Delta H = \Delta U - 2RT\)` },
        { q: R`What is the sign of \(\Delta S\) when water freezes?`, ans: R`Negative, because the system becomes more ordered.` }
      ]
    },
    {
      id: 'solutions', title: 'Solutions', cls: 12,
      syllabus: [R`Ways of expressing concentration (molarity, molality, mole fraction, % composition)`, R`Vapour pressure & Raoult's law`, R`Ideal & non-ideal solutions, deviations`, R`Colligative properties: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, osmotic pressure`, R`Determination of molecular mass`, R`Abnormal molar mass & van 't Hoff factor`],
      concepts: [
        { h: R`Colligative properties`, body: R`These depend only on the <b>number</b> of solute particles, not on what they are. Electrolytes break into ions, so they have a bigger effect. The van 't Hoff factor \(i\) accounts for this.` },
        { h: R`Deviations`, body: R`A positive deviation (for example ethanol + water) means the vapour pressure is higher than Raoult's law predicts, because A–B attractions are weaker. A negative deviation (for example acetone + chloroform) means A–B attractions are stronger. These mixtures form azeotropes.` },
        { h: R`van 't Hoff factor`, body: R`Dissociation: \(i = 1 + (n - 1)\alpha\). Association into \(n\)-mers: \(i = 1 - \alpha(1 - 1/n)\).` }
      ],
      formulas: [
        R`Raoult: \(p_A = x_A p_A^\circ\); \(\dfrac{p^\circ - p}{p^\circ} = x_{solute}\)`,
        R`\(\Delta T_b = iK_b m,\quad \Delta T_f = iK_f m\)`,
        R`Osmotic pressure: \(\pi = iCRT\)`,
        R`\(M_2 = \dfrac{K_f\,w_2\times1000}{\Delta T_f\,w_1}\)`
      ],
      examples: [
        { topic: R`Ways of expressing concentration (molarity, molality, mole fraction, % composition)`, level: 'Main', q: R`20 g of NaOH is dissolved in 500 g of water. Find the molality and the mole fraction of NaOH.`,
          steps: [R`\(n_{NaOH} = 20/40 = 0.5\) mol; molality \(= 0.5/0.5\) kg \(= 1\) m.`, R`\(n_{water} = 500/18 = 27.78\); \(x = \dfrac{0.5}{28.28}\).`],
          ans: R`1 mol/kg; \(x \approx 0.0177\)` },
        { topic: R`Vapour pressure & Raoult's law`, level: 'Main', q: R`Benzene (\(p^\circ = 75\) torr) and toluene (\(p^\circ = 22\) torr) form an ideal solution with \(x_{benzene} = 0.4\). Find the total vapour pressure and the mole fraction of benzene in the vapour.`,
          steps: [R`\(p_B = 0.4\times75 = 30\); \(p_T = 0.6\times22 = 13.2\). Total \(= 43.2\) torr.`, R`\(y_B = 30/43.2\).`],
          ans: R`43.2 torr; \(y_B \approx 0.69\) (the vapour is richer in the more volatile component)` },
        { topic: R`Ideal & non-ideal solutions, deviations`, level: 'Main', q: R`Classify these as ideal, positive-deviation or negative-deviation mixtures: benzene + toluene, ethanol + water, acetone + chloroform.`,
          steps: [R`Similar molecules give an ideal mixture.`, R`Weaker A–B attraction (it breaks H-bonds) gives a positive deviation. Stronger A–B attraction (a new H-bond) gives a negative deviation.`],
          ans: R`Benzene + toluene: ideal. Ethanol + water: positive (minimum-boiling azeotrope). Acetone + chloroform: negative (maximum-boiling azeotrope).` },
        { topic: R`Colligative properties: relative lowering of vapour pressure, elevation of boiling point, depression of freezing point, osmotic pressure`, level: 'Main', q: R`Find the osmotic pressure of 0.1 M glucose at 300 K. (\(R = 0.0821\) L atm/(K mol))`,
          steps: [R`Glucose does not dissociate, so \(i = 1\).`, R`\(\pi = 0.1\times0.0821\times300\).`],
          ans: R`2.46 atm` },
        { topic: R`Determination of molecular mass`, level: 'Main', q: R`1.8 g of a non-electrolyte in 100 g of water lowers the freezing point by 0.186 K. Find its molar mass. (\(K_f = 1.86\))`,
          steps: [R`\(M = \dfrac{K_f\,w_2\times1000}{\Delta T_f\,w_1} = \dfrac{1.86\times1.8\times1000}{0.186\times100}\).`],
          ans: R`180 g/mol (glucose)` },
        { topic: R`Abnormal molar mass & van 't Hoff factor`, level: 'Main', q: R`Find the depression in freezing point of a 0.1 molal NaCl solution. (\(K_f = 1.86\) K kg/mol, complete dissociation)`,
          steps: [R`NaCl → Na⁺ + Cl⁻, so \(i = 2\).`, R`\(\Delta T_f = 2\times1.86\times0.1\).`],
          ans: R`0.372 K` }
      ],
      practice: [
        { q: R`Which solution has the highest boiling point: 0.1 m glucose, 0.1 m NaCl or 0.1 m CaCl₂?`, ans: R`0.1 m CaCl₂ (\(i = 3\))` },
        { q: R`What is \(i\) for acetic acid that fully dimerises in benzene?`, ans: R`\(i = 1 - 1(1 - \tfrac12) = 0.5\)` }
      ]
    },
    {
      id: 'equilibrium', title: 'Equilibrium', cls: 11,
      syllabus: [R`Equilibria in physical & chemical processes`, R`Law of mass action, Kp & Kc`, R`Reaction quotient`, R`Le Chatelier's principle`, R`Ionic equilibrium: acids & bases (Arrhenius, Brønsted–Lowry, Lewis)`, R`Ionisation of water, pH scale`, R`Common-ion effect`, R`Hydrolysis of salts`, R`Buffer solutions`, R`Solubility product`],
      concepts: [
        { h: R`Le Chatelier's principle`, body: R`When an equilibrium is disturbed, it shifts to undo the change. Raising the pressure favours the side with fewer gas moles. Raising the temperature favours the endothermic direction.` },
        { h: R`Q vs K`, body: R`If \(Q < K\), the reaction moves forward. If \(Q > K\), it moves backward. If \(Q = K\), it is at equilibrium. A precipitate forms when the ionic product is greater than \(K_{sp}\).` },
        { h: R`Buffers`, body: R`A weak acid with its salt (or a weak base with its salt) resists changes in pH. A buffer works best when \(\text{pH} \approx \text{p}K_a\).` }
      ],
      formulas: [
        R`\(K_p = K_c(RT)^{\Delta n_g}\)`,
        R`\(\text{pH} = -\log[\text{H}^+],\quad \text{pH} + \text{pOH} = 14\) (at 25 °C)`,
        R`Weak acid: \([\text{H}^+] = \sqrt{K_aC}\), \(\alpha = \sqrt{K_a/C}\)`,
        R`Henderson: \(\text{pH} = \text{p}K_a + \log\dfrac{[\text{salt}]}{[\text{acid}]}\)`,
        R`AB type: \(K_{sp} = s^2\); AB₂ type: \(K_{sp} = 4s^3\)`
      ],
      examples: [
        { topic: R`Equilibria in physical & chemical processes`, level: 'Main', q: R`Water is kept in a closed flask at constant temperature. Why does the water level stop falling after a while, even though evaporation continues?`,
          steps: [R`Molecules keep evaporating, while vapour molecules condense back.`, R`Eventually the rate of evaporation equals the rate of condensation.`],
          ans: R`A dynamic equilibrium is reached. Both processes continue at equal rates, and the vapour pressure becomes constant.` },
        { topic: R`Law of mass action, Kp & Kc`, level: 'Main', q: R`For \(\text{H}_2 + \text{I}_2 \rightleftharpoons 2\text{HI}\), the equilibrium concentrations are [H₂] = [I₂] = 0.1 M and [HI] = 0.8 M. Find \(K_c\) and \(K_p\).`,
          steps: [R`\(K_c = \dfrac{(0.8)^2}{(0.1)(0.1)}\).`, R`\(\Delta n_g = 0\), so \(K_p = K_c\).`],
          ans: R`\(K_c = K_p = 64\)` },
        { topic: R`Reaction quotient`, level: 'Main', q: R`For the same reaction (\(K_c = 64\)), a mixture has [H₂] = [I₂] = 0.2 M and [HI] = 0.4 M. Which way will it move?`,
          steps: [R`\(Q = \dfrac{(0.4)^2}{(0.2)^2} = 4\).`, R`\(Q < K\).`],
          ans: R`Forward, forming more HI` },
        { topic: R`Le Chatelier's principle`, level: 'Main', q: R`For \(\text{N}_2 + 3\text{H}_2 \rightleftharpoons 2\text{NH}_3\) (\(\Delta H = -92\) kJ), what happens to the yield of NH₃ when you (a) raise the pressure (b) raise the temperature (c) add a catalyst?`,
          steps: [R`(a) The forward direction reduces the gas moles from 4 to 2.`, R`(b) The forward reaction is exothermic, so heating favours the backward reaction, and \(K\) decreases.`, R`(c) A catalyst speeds up both directions equally.`],
          ans: R`(a) It increases (b) It decreases (c) No change, but equilibrium is reached faster` },
        { topic: R`Ionic equilibrium: acids & bases (Arrhenius, Brønsted–Lowry, Lewis)`, level: 'Main', q: R`Find the pH of 0.1 M acetic acid. (\(K_a = 1.8\times10^{-5}\))`,
          steps: [R`\([\text{H}^+] = \sqrt{1.8\times10^{-5}\times0.1} = \sqrt{1.8\times10^{-6}}\).`, R`\(= 1.34\times10^{-3}\) M.`, R`\(\text{pH} = 3 - \log1.34 = 3 - 0.13\).`],
          ans: R`pH ≈ 2.87` },
        { topic: R`Ionisation of water, pH scale`, level: 'Advanced', q: R`Find the pH of \(10^{-8}\) M HCl.`,
          steps: [R`The answer cannot be pH 8: an acid cannot be basic. The water's own \(10^{-7}\) M of H⁺ matters here.`, R`\([\text{H}^+] \approx 10^{-8} + 10^{-7} = 1.1\times10^{-7}\).`, R`\(\text{pH} = 7 - \log1.1\).`],
          ans: R`\(\approx 6.96\)` },
        { topic: R`Common-ion effect`, level: 'Main', q: R`Find the solubility of AgCl (\(K_{sp} = 1.8\times10^{-10}\)) in 0.1 M NaCl.`,
          steps: [R`[Cl⁻] ≈ 0.1 M from the NaCl (the common ion).`, R`\(s = \dfrac{K_{sp}}{0.1}\).`],
          ans: R`\(1.8\times10^{-9}\) M, about 7000 times less than in pure water` },
        { topic: R`Hydrolysis of salts`, level: 'Main', q: R`Find the pH of 0.1 M CH₃COONa. (\(K_a = 1.8\times10^{-5}\))`,
          steps: [R`The salt of a weak acid and a strong base hydrolyses to make the solution basic: \(\text{pH} = 7 + \tfrac12\text{p}K_a + \tfrac12\log C\).`, R`\(= 7 + 2.37 - 0.5\).`],
          ans: R`\(\approx 8.87\)` },
        { topic: R`Buffer solutions`, level: 'Main', q: R`Find the pH of a buffer containing 0.2 M NH₃ and 0.1 M NH₄Cl. (\(\text{p}K_b = 4.74\))`,
          steps: [R`\(\text{pOH} = \text{p}K_b + \log\dfrac{[\text{salt}]}{[\text{base}]} = 4.74 + \log0.5 = 4.44\).`, R`\(\text{pH} = 14 - 4.44\).`],
          ans: R`9.56` },
        { topic: R`Solubility product`, level: 'Main', q: R`\(K_{sp}\) of AgCl is \(1.8\times10^{-10}\). Find its solubility in mol/L.`,
          steps: [R`\(K_{sp} = s^2\).`, R`\(s = \sqrt{1.8\times10^{-10}}\).`],
          ans: R`\(1.34\times10^{-5}\) mol/L` }
      ],
      practice: [
        { q: R`Find the pH of 0.001 M NaOH.`, ans: R`pOH = 3, so pH = 11` },
        { q: R`A buffer contains 0.1 M CH₃COOH and 0.1 M CH₃COONa (\(\text{p}K_a = 4.74\)). Find its pH.`, ans: R`pH = 4.74 (log 1 = 0)` }
      ]
    },
    {
      id: 'redox-electrochemistry', title: 'Redox Reactions and Electrochemistry', cls: 12,
      syllabus: [R`Oxidation & reduction, oxidation number`, R`Balancing redox reactions`, R`Electrolytic & metallic conduction`, R`Conductance, specific & molar conductivity & variation with concentration`, R`Kohlrausch's law`, R`Electrochemical cells, electrode potential, SHE`, R`Nernst equation`, R`Gibbs energy & emf`, R`Electrolysis & Faraday's laws`, R`Dry cell, lead accumulator, fuel cells`],
      concepts: [
        { h: R`Oxidation number`, body: R`Oxidation is a loss of electrons, which raises the oxidation number. Reduction is a gain of electrons. Remember "OIL RIG": Oxidation Is Loss, Reduction Is Gain.` },
        { h: R`Cells`, body: R`In both galvanic and electrolytic cells, oxidation happens at the anode. In a galvanic cell the anode is negative. \(E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode}\), and a positive value means the cell reaction is spontaneous.` },
        { h: R`Conductivity`, body: R`Molar conductivity rises on dilution. For strong electrolytes it rises slowly and linearly with \(\sqrt C\). For weak electrolytes it rises steeply. Use Kohlrausch's law to find \(\Lambda^\circ_m\) for weak electrolytes.` }
      ],
      formulas: [
        R`Nernst: \(E = E^\circ - \dfrac{0.0591}{n}\log Q\) (at 298 K)`,
        R`\(\Delta G^\circ = -nFE^\circ\), \(E^\circ = \dfrac{0.0591}{n}\log K\)`,
        R`Faraday: \(m = \dfrac{MIt}{nF}\), \(F = 96500\) C/mol`,
        R`\(\Lambda_m = \dfrac{\kappa\times1000}{C}\), \(\alpha = \dfrac{\Lambda_m}{\Lambda_m^\circ}\)`
      ],
      examples: [
        { topic: R`Oxidation & reduction, oxidation number`, level: 'Main', q: R`In \(\text{Zn} + \text{CuSO}_4 \to \text{ZnSO}_4 + \text{Cu}\), which species is oxidised and which is the oxidising agent? Also find the average oxidation number of S in \(\text{S}_4\text{O}_6^{2-}\).`,
          steps: [R`Zn: 0 → +2 (oxidised; it is the reducing agent). Cu²⁺: +2 → 0 (reduced; it is the oxidising agent).`, R`\(4x + 6(-2) = -2\), so \(x = 2.5\).`],
          ans: R`Zn is oxidised and Cu²⁺ is the oxidising agent. The average O.N. of S is +2.5.` },
        { topic: R`Balancing redox reactions`, level: 'Main', q: R`Balance \(\text{MnO}_4^- + \text{Fe}^{2+} \to \text{Mn}^{2+} + \text{Fe}^{3+}\) in acidic solution.`,
          steps: [R`Reduction: \(\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}\).`, R`Oxidation: \(\text{Fe}^{2+} \to \text{Fe}^{3+} + e^-\), multiplied by 5.`, R`Add them so the electrons cancel.`],
          ans: R`\(\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \to \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}\)` },
        { topic: R`Electrolytic & metallic conduction`, level: 'Main', q: R`Compare metallic and electrolytic conduction.`,
          steps: [R`Metallic: electrons carry the current, there is no chemical change, and conductivity falls as temperature rises.`, R`Electrolytic: ions carry the current, there is a chemical change at the electrodes, and conductivity rises with temperature.`],
          ans: R`They differ in charge carriers, chemical change and temperature effect, as above.` },
        { topic: R`Conductance, specific & molar conductivity & variation with concentration`, level: 'Main', q: R`0.1 M KCl has a conductivity of 0.0129 S/cm. Find its molar conductivity.`,
          steps: [R`\(\Lambda_m = \dfrac{\kappa\times1000}{C} = \dfrac{0.0129\times1000}{0.1}\).`],
          ans: R`129 S cm² mol⁻¹` },
        { topic: R`Kohlrausch's law`, level: 'Main', q: R`Given \(\Lambda^\circ\)(HCl) = 426, \(\Lambda^\circ\)(CH₃COONa) = 91 and \(\Lambda^\circ\)(NaCl) = 126 S cm² mol⁻¹, find \(\Lambda^\circ\)(CH₃COOH). If its \(\Lambda_m\) is 39.1, find \(\alpha\).`,
          steps: [R`Kohlrausch: \(\Lambda^\circ(\text{CH}_3\text{COOH}) = 426 + 91 - 126 = 391\).`, R`\(\alpha = 39.1/391\).`],
          ans: R`391 S cm² mol⁻¹; \(\alpha = 0.1\)` },
        { topic: R`Electrochemical cells, electrode potential, SHE`, level: 'Main', q: R`Find \(E^\circ\) for the Zn–Ag cell and name the anode. (\(E^\circ_{\text{Ag}^+/\text{Ag}} = 0.80\) V, \(E^\circ_{\text{Zn}^{2+}/\text{Zn}} = -0.76\) V)`,
          steps: [R`The more negative electrode is oxidised, so Zn is the anode.`, R`\(E^\circ = 0.80 - (-0.76)\).`],
          ans: R`1.56 V; zinc is the anode` },
        { topic: R`Nernst equation`, level: 'Advanced', q: R`Find the emf of Zn | Zn²⁺ (0.1 M) ‖ Cu²⁺ (1 M) | Cu at 298 K. (\(E^\circ = 1.10\) V)`,
          steps: [R`\(Q = \dfrac{[\text{Zn}^{2+}]}{[\text{Cu}^{2+}]} = 0.1\).`, R`\(E = 1.10 - \dfrac{0.0591}{2}\log 0.1 = 1.10 + 0.0296\).`],
          ans: R`≈ 1.13 V` },
        { topic: R`Gibbs energy & emf`, level: 'Main', q: R`For the Daniell cell (\(E^\circ = 1.10\) V), find \(\Delta G^\circ\).`,
          steps: [R`Zn + Cu²⁺ → Zn²⁺ + Cu, \(n = 2\).`, R`\(\Delta G^\circ = -2\times96500\times1.10 = -212{,}300\) J.`],
          ans: R`−212.3 kJ/mol` },
        { topic: R`Electrolysis & Faraday's laws`, level: 'Main', q: R`The same charge passes through AgNO₃ and CuSO₄ cells in series, depositing 1.08 g of Ag. What mass of Cu is deposited?`,
          steps: [R`Faraday's second law: the masses are in the ratio of their equivalent masses.`, R`\(m_{Cu} = 1.08\times\dfrac{63.5/2}{108}\).`],
          ans: R`0.3175 g` },
        { topic: R`Dry cell, lead accumulator, fuel cells`, level: 'Main', q: R`Write the electrode reactions of a lead storage battery during discharge. Why does the acid's density fall?`,
          steps: [R`Anode: \(\text{Pb} + \text{SO}_4^{2-} \to \text{PbSO}_4 + 2e^-\).`, R`Cathode: \(\text{PbO}_2 + \text{SO}_4^{2-} + 4\text{H}^+ + 2e^- \to \text{PbSO}_4 + 2\text{H}_2\text{O}\).`],
          ans: R`H₂SO₄ is used up and water forms, so the density falls. (An H₂–O₂ fuel cell, by contrast, produces only water.)` }
      ],
      practice: [
        { q: R`What mass of Cu is deposited by 2 A flowing for 965 s? (Cu = 63.5)`, ans: R`\(Q = 1930\) C = 0.02 F, which deposits 0.01 mol of Cu = 0.635 g` },
        { q: R`What is the oxidation number of Cr in K₂Cr₂O₇?`, ans: R`+6` }
      ]
    },
    {
      id: 'chemical-kinetics', title: 'Chemical Kinetics', cls: 12,
      syllabus: [R`Rate of a reaction`, R`Factors affecting rate: concentration, temperature, pressure, catalyst`, R`Elementary & complex reactions`, R`Order & molecularity`, R`Rate law, rate constant & its units`, R`Integrated rate equations & half-lives (zero & first order)`, R`Effect of temperature, Arrhenius theory, activation energy`, R`Collision theory of bimolecular gaseous reactions`],
      concepts: [
        { h: R`Order vs molecularity`, body: R`Order is found by experiment. It can be zero or a fraction, and it applies to the overall rate law. Molecularity is the number of species colliding in an elementary step, which is always a whole number (1, 2 or 3).` },
        { h: R`First order`, body: R`The half-life does not depend on the starting concentration. Radioactive decay is first order. A graph of \(\ln[A]\) against \(t\) is a straight line with slope \(-k\).` },
        { h: R`Temperature`, body: R`As a rough rule, the rate doubles or triples for every 10 K rise, because many more molecules then have energy above \(E_a\). A catalyst lowers \(E_a\) but does not change \(\Delta H\) or \(K\).` }
      ],
      formulas: [
        R`Zero order: \([A] = [A]_0 - kt\), \(t_{1/2} = \dfrac{[A]_0}{2k}\)`,
        R`First order: \(k = \dfrac{2.303}{t}\log\dfrac{[A]_0}{[A]}\), \(t_{1/2} = \dfrac{0.693}{k}\)`,
        R`Arrhenius: \(k = Ae^{-E_a/RT}\), \(\log\dfrac{k_2}{k_1} = \dfrac{E_a}{2.303R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right)\)`,
        R`Units of \(k\): \((\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}\)`
      ],
      examples: [
        { topic: R`Rate of a reaction`, level: 'Main', q: R`For \(2\text{N}_2\text{O}_5 \to 4\text{NO}_2 + \text{O}_2\), N₂O₅ disappears at 0.02 M/s. Find the rates of formation of NO₂ and O₂, and the rate of the reaction.`,
          steps: [R`Rate \(= -\dfrac12\dfrac{d[\text{N}_2\text{O}_5]}{dt} = \dfrac14\dfrac{d[\text{NO}_2]}{dt} = \dfrac{d[\text{O}_2]}{dt}\).`, R`Rate \(= 0.01\) M/s.`],
          ans: R`NO₂: 0.04 M/s; O₂: 0.01 M/s; reaction rate: 0.01 M/s` },
        { topic: R`Factors affecting rate: concentration, temperature, pressure, catalyst`, level: 'Main', q: R`Why does powdered marble react faster with HCl than marble chips? Name two other factors that raise the rate.`,
          steps: [R`Powder has a much larger surface area, so more particles collide per second.`],
          ans: R`Larger surface area. Raising the concentration (or pressure), raising the temperature, and adding a catalyst also increase the rate.` },
        { topic: R`Elementary & complex reactions`, level: 'Advanced', q: R`For \(\text{NO}_2 + \text{CO} \to \text{NO} + \text{CO}_2\), the measured rate law is rate \(= k[\text{NO}_2]^2\). Why isn't it \(k[\text{NO}_2][\text{CO}]\)?`,
          steps: [R`The reaction is complex. Slow step: \(2\text{NO}_2 \to \text{NO}_3 + \text{NO}\). Fast step: \(\text{NO}_3 + \text{CO} \to \text{NO}_2 + \text{CO}_2\).`, R`The slowest step decides the rate, and CO does not appear in it.`],
          ans: R`The rate law comes from the rate-determining step, not from the overall equation.` },
        { topic: R`Order & molecularity`, level: 'Main', q: R`Ester hydrolysis in a large excess of water follows first-order kinetics. What are its order and molecularity?`,
          steps: [R`Two molecules (the ester and water) collide, so the molecularity is 2.`, R`[H₂O] hardly changes, so it is absorbed into \(k\). This is pseudo-first-order.`],
          ans: R`Order 1 (pseudo-first-order), molecularity 2` },
        { topic: R`Rate law, rate constant & its units`, level: 'Main', q: R`Doubling [A] doubles the rate, and doubling [B] quadruples it. At [A] = [B] = 0.1 M, the rate is \(2\times10^{-3}\) M/s. Find the rate law and \(k\).`,
          steps: [R`So the reaction is first order in A and second order in B: rate \(= k[A][B]^2\).`, R`\(k = \dfrac{2\times10^{-3}}{0.1\times0.01}\).`],
          ans: R`Rate \(= k[A][B]^2\), overall order 3, \(k = 2\) L² mol⁻² s⁻¹` },
        { topic: R`Integrated rate equations & half-lives (zero & first order)`, level: 'Main', q: R`A first-order reaction has \(k = 0.0693\) min⁻¹. Find its half-life and the time for 75% completion.`,
          steps: [R`\(t_{1/2} = 0.693/0.0693 = 10\) min.`, R`75% complete means 25% is left, which takes 2 half-lives.`],
          ans: R`10 min, 20 min` },
        { topic: R`Effect of temperature, Arrhenius theory, activation energy`, level: 'Advanced', q: R`A reaction's rate doubles when the temperature rises from 300 K to 310 K. Find \(E_a\).`,
          steps: [R`\(\log 2 = \dfrac{E_a}{2.303\times8.314}\cdot\dfrac{10}{300\times310}\).`, R`\(E_a = 0.301\times19.147\times9300\).`],
          ans: R`≈ 53.6 kJ/mol` },
        { topic: R`Collision theory of bimolecular gaseous reactions`, level: 'Advanced', q: R`What fraction of molecules have energy of at least \(E_a = 50\) kJ/mol at 300 K? Why can the rate still be lower than collision theory predicts?`,
          steps: [R`Fraction \(= e^{-E_a/RT} = e^{-50000/(8.314\times300)} = e^{-20.05}\).`, R`The molecules must also hit with the correct orientation. This is the steric factor \(P\).`],
          ans: R`\(\approx 2\times10^{-9}\). Rate \(= PZ_{AB}e^{-E_a/RT}\).` }
      ],
      practice: [
        { q: R`What are the units of the rate constant for a second-order reaction?`, ans: R`L mol⁻¹ s⁻¹` },
        { q: R`How does the half-life of a zero-order reaction depend on \([A]_0\)?`, ans: R`It is directly proportional to \([A]_0\).` }
      ]
    },
    {
      id: 'periodicity', title: 'Classification of Elements and Periodicity in Properties', cls: 11,
      syllabus: [R`Modern periodic law & present form of the periodic table`, R`s, p, d & f block elements`, R`Periodic trends: atomic & ionic radii`, R`Ionisation enthalpy`, R`Electron gain enthalpy`, R`Valence, oxidation states`, R`Electronegativity`, R`Chemical reactivity`],
      concepts: [
        { h: R`Across a period (left to right)`, body: R`The effective nuclear charge increases. Atomic radius decreases, while ionisation enthalpy, electronegativity and non-metallic character increase.` },
        { h: R`Down a group`, body: R`New shells are added. Radius increases, while ionisation enthalpy and electronegativity decrease. Metallic character increases.` },
        { h: R`Exceptions to remember`, body: R`IE: Be > B and N > O, because Be has a filled 2s and N a half-filled 2p. Electron gain enthalpy: Cl is more negative than F, because the small F atom repels the incoming electron.` }
      ],
      formulas: [
        R`Isoelectronic species: a larger nuclear charge gives a smaller radius`,
        R`\(\text{IE}_1 < \text{IE}_2 < \text{IE}_3 \dots\)`,
        R`Radius order: cation < neutral atom < anion`
      ],
      examples: [
        { topic: R`Modern periodic law & present form of the periodic table`, level: 'Main', q: R`State the modern periodic law. Find the period and group of the element with Z = 35.`,
          steps: [R`Properties are a periodic function of <b>atomic number</b>.`, R`Z = 35: \([\text{Ar}]3d^{10}4s^24p^5\). Its highest shell is n = 4, and it has 7 valence electrons in the p-block.`],
          ans: R`Period 4, group 17 (bromine)` },
        { topic: R`s, p, d & f block elements`, level: 'Main', q: R`Which block do these belong to: Z = 29, 56, 64?`,
          steps: [R`The block is named after the subshell that receives the last electron.`, R`29: \(3d^{10}4s^1\). 56: \(6s^2\). 64: \(4f^75d^16s^2\).`],
          ans: R`Cu: d-block. Ba: s-block. Gd: f-block.` },
        { topic: R`Periodic trends: atomic & ionic radii`, level: 'Main', q: R`Arrange O²⁻, F⁻, Na⁺ and Mg²⁺ in decreasing order of size.`,
          steps: [R`All four have 10 electrons.`, R`Nuclear charges: O 8, F 9, Na 11, Mg 12. A larger charge pulls the electrons in tighter.`],
          ans: R`O²⁻ > F⁻ > Na⁺ > Mg²⁺` },
        { topic: R`Ionisation enthalpy`, level: 'Main', q: R`Arrange B, C, N and O in increasing order of first ionisation enthalpy.`,
          steps: [R`The general trend increases across the period.`, R`But N (half-filled 2p³) is higher than O.`],
          ans: R`B < C < O < N` },
        { topic: R`Electron gain enthalpy`, level: 'Main', q: R`Arrange F, Cl, Br and I in order of how negative their electron gain enthalpies are.`,
          steps: [R`In general, adding an electron releases less energy going down the group.`, R`F is an exception: its 2p shell is so small that electron–electron repulsion is high.`],
          ans: R`Cl > F > Br > I` },
        { topic: R`Valence, oxidation states`, level: 'Main', q: R`Write the formula of the compound formed by Al and O. What is the highest oxidation state of Mn?`,
          steps: [R`Al has valency 3 and O has valency 2, so cross them over.`, R`Mn \(3d^54s^2\) can lose all 7 electrons (as in KMnO₄).`],
          ans: R`Al₂O₃; +7` },
        { topic: R`Electronegativity`, level: 'Main', q: R`Which bond is most polar: H–F, H–Cl or H–Br? Which element has the highest electronegativity?`,
          steps: [R`Polarity grows with the electronegativity difference.`, R`F has the highest value (4.0 on the Pauling scale).`],
          ans: R`H–F is the most polar; F is the most electronegative.` },
        { topic: R`Chemical reactivity`, level: 'Main', q: R`How does reactivity change down group 1 and down group 17? Classify Na₂O, Al₂O₃ and SO₃.`,
          steps: [R`Alkali metals lose electrons more easily going down: Li < Na < K.`, R`Halogens gain electrons less readily going down: F₂ > Cl₂ > Br₂ > I₂.`],
          ans: R`Alkali metal reactivity increases down the group; halogen reactivity decreases. Na₂O is basic, Al₂O₃ amphoteric, SO₃ acidic.` }
      ],
      practice: [
        { q: R`Which element has the most negative electron gain enthalpy?`, ans: R`Chlorine` },
        { q: R`Arrange Na, Mg and Al in decreasing order of atomic radius.`, ans: R`Na > Mg > Al` }
      ]
    },
    {
      id: 'p-block', title: 'p-Block Elements', cls: 12,
      syllabus: [R`Groups 13 to 18: general trends`, R`Electronic configuration & physical properties`, R`Unique behaviour of the first element of each group`, R`Inert pair effect`, R`Important compounds & their structures (oxides, oxoacids, halides, interhalogens, noble-gas compounds)`],
      concepts: [
        { h: R`Anomalous first members`, body: R`B, C, N, O and F are small, highly electronegative and have <b>no d orbitals</b>. So nitrogen cannot form NCl₅, and carbon and nitrogen form strong pπ–pπ multiple bonds.` },
        { h: R`Inert pair effect`, body: R`Down groups 13–15, the ns² pair becomes reluctant to bond, so the lower oxidation state becomes more stable: Tl⁺ > Tl³⁺, Pb²⁺ > Pb⁴⁺, Bi³⁺ > Bi⁵⁺.` },
        { h: R`Oxoacids of phosphorus`, body: R`Only the H atoms attached to O are acidic. H₃PO₄ is tribasic, H₃PO₃ (one P–H bond) is dibasic, and H₃PO₂ (two P–H bonds) is monobasic and a strong reducing agent.` }
      ],
      formulas: [
        R`Acid strength of hydrogen halides: HF < HCl < HBr < HI`,
        R`Thermal stability of hydrides: NH₃ > PH₃ > AsH₃ > SbH₃`,
        R`Shapes: ClF₃ T-shaped, XeF₂ linear, XeF₄ square planar, XeF₆ distorted octahedral, SF₄ see-saw`
      ],
      examples: [
        { topic: R`Groups 13 to 18: general trends`, level: 'Main', q: R`Arrange H₂O, H₂S, H₂Se and H₂Te in increasing order of acidic strength.`,
          steps: [R`Going down group 16, the H–E bond gets longer and weaker, so H⁺ comes off more easily.`],
          ans: R`H₂O < H₂S < H₂Se < H₂Te` },
        { topic: R`Electronic configuration & physical properties`, level: 'Main', q: R`Give the valence configurations of groups 15 and 17. How does metallic character change down group 14?`,
          steps: [R`Group 15: \(ns^2np^3\). Group 17: \(ns^2np^5\).`, R`Going down the group, the ionisation enthalpy falls and atoms get bigger.`],
          ans: R`Metallic character increases down group 14: C (non-metal), Si and Ge (metalloids), Sn and Pb (metals).` },
        { topic: R`Unique behaviour of the first element of each group`, level: 'Main', q: R`Why does nitrogen form only NCl₃, while phosphorus forms both PCl₃ and PCl₅?`,
          steps: [R`To make five bonds, the atom must expand its octet using d orbitals.`, R`N (period 2) has no 2d orbitals. P has empty 3d orbitals.`],
          ans: R`Nitrogen has no d orbitals, so it cannot expand its octet.` },
        { topic: R`Inert pair effect`, level: 'Main', q: R`Why is PbO₂ a strong oxidising agent while SnCl₂ is a reducing agent?`,
          steps: [R`Inert pair effect: for Pb the +2 state is more stable, so Pb(IV) readily takes electrons to become Pb(II).`, R`For Sn the +4 state is more stable, so Sn(II) readily gives up electrons to become Sn(IV).`],
          ans: R`Pb⁴⁺ → Pb²⁺ (so PbO₂ oxidises others). Sn²⁺ → Sn⁴⁺ (so SnCl₂ reduces others).` },
        { topic: R`Important compounds & their structures (oxides, oxoacids, halides, interhalogens, noble-gas compounds)`, level: 'Main', q: R`What is the basicity of H₃PO₃? Explain using its structure.`,
          steps: [R`Its structure is HP(=O)(OH)₂: one H is bonded directly to P.`, R`Only the two O–H hydrogens can ionise.`],
          ans: R`2 (dibasic)` }
      ],
      practice: [
        { q: R`What is the shape of ClF₃?`, ans: R`T-shaped (sp³d, with 2 lone pairs)` },
        { q: R`Which is more stable, Tl⁺ or Tl³⁺? Why?`, ans: R`Tl⁺, because of the inert pair effect` }
      ]
    },
    {
      id: 'd-f-block', title: 'd- and f-Block Elements', cls: 12,
      syllabus: [R`Transition elements: general introduction & electronic configuration`, R`Occurrence & characteristics`, R`General trends: metallic character, ionisation enthalpy, oxidation states, ionic radii, colour, catalytic behaviour, magnetic properties, complex formation, interstitial compounds, alloy formation`, R`Preparation, properties & uses of K₂Cr₂O₇ & KMnO₄`, R`Lanthanoids: configuration, oxidation states, lanthanoid contraction`, R`Actinoids: configuration & oxidation states`],
      concepts: [
        { h: R`Why transition metals are special`, body: R`They have partly filled d orbitals, which give them variable oxidation states, coloured ions (from d–d transitions), paramagnetism, catalytic activity and the ability to form complexes.` },
        { h: R`Lanthanoid contraction`, body: R`4f electrons shield the nucleus poorly, so radius shrinks steadily across the lanthanoids. As a result, Zr and Hf (and Nb and Ta) have almost the same size and are hard to separate.` },
        { h: R`KMnO₄ and K₂Cr₂O₇`, body: R`Both are strong oxidising agents. In acid: MnO₄⁻ → Mn²⁺ (gains 5e⁻) and Cr₂O₇²⁻ → 2Cr³⁺ (gains 6e⁻).` }
      ],
      formulas: [
        R`\(\mu_{spin} = \sqrt{n(n+2)}\) BM`,
        R`\(\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}\)`,
        R`\(\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \to 2\text{Cr}^{3+} + 7\text{H}_2\text{O}\)`
      ],
      examples: [
        { topic: R`Transition elements: general introduction & electronic configuration`, level: 'Main', q: R`Write the configurations of Cr³⁺, Mn²⁺ and Cu⁺. Why is Zn not usually counted as a transition element?`,
          steps: [R`Transition metals lose their 4s electrons first.`, R`Cr³⁺: \([\text{Ar}]3d^3\). Mn²⁺: \([\text{Ar}]3d^5\). Cu⁺: \([\text{Ar}]3d^{10}\).`],
          ans: R`As above. Zn has a full \(3d^{10}\) subshell both as an atom and as Zn²⁺, so it has no partly filled d orbitals.` },
        { topic: R`Occurrence & characteristics`, level: 'Main', q: R`Why do transition metals have high melting points and readily form alloys and interstitial compounds?`,
          steps: [R`Many unpaired d electrons take part in metallic bonding, which makes it strong.`, R`Their atoms are similar in size, so they substitute for each other easily (alloys). Small atoms such as C, N and H fit into the gaps in their lattices (TiC, Fe₃C).`],
          ans: R`Strong metallic bonding involving d electrons; similar atomic radii; holes in the lattice for small atoms.` },
        { topic: R`General trends: metallic character, ionisation enthalpy, oxidation states, ionic radii, colour, catalytic behaviour, magnetic properties, complex formation, interstitial compounds, alloy formation`, level: 'Main', q: R`Find the spin-only magnetic moment of Fe³⁺.`,
          steps: [R`Fe is \([\text{Ar}]3d^64s^2\), so Fe³⁺ is \(3d^5\), with 5 unpaired electrons.`, R`\(\mu = \sqrt{5\times7} = \sqrt{35}\).`],
          ans: R`≈ 5.92 BM` },
        { topic: R`General trends: metallic character, ionisation enthalpy, oxidation states, ionic radii, colour, catalytic behaviour, magnetic properties, complex formation, interstitial compounds, alloy formation`, level: 'Main', q: R`Why are Sc³⁺ and Zn²⁺ colourless while Cu²⁺ is blue?`,
          steps: [R`Colour comes from d–d transitions, which need a partly filled d subshell.`, R`Sc³⁺ is d⁰ and Zn²⁺ is d¹⁰, so no d–d transition is possible. Cu²⁺ (d⁹) can absorb visible light.`],
          ans: R`d⁰ and d¹⁰ ions are colourless. Cu²⁺ (d⁹) is coloured.` },
        { topic: R`Preparation, properties & uses of K₂Cr₂O₇ & KMnO₄`, level: 'Main', q: R`Outline how K₂Cr₂O₇ is made from chromite ore. What happens when you add acid to a yellow chromate solution?`,
          steps: [R`\(4\text{FeCr}_2\text{O}_4 + 8\text{Na}_2\text{CO}_3 + 7\text{O}_2 \to 8\text{Na}_2\text{CrO}_4 + 2\text{Fe}_2\text{O}_3 + 8\text{CO}_2\).`, R`Acidify: \(2\text{CrO}_4^{2-} + 2\text{H}^+ \rightleftharpoons \text{Cr}_2\text{O}_7^{2-} + \text{H}_2\text{O}\). Then add KCl to get K₂Cr₂O₇.`],
          ans: R`The yellow chromate turns into orange dichromate. The change is pH-dependent and reverses in base.` },
        { topic: R`Lanthanoids: configuration, oxidation states, lanthanoid contraction`, level: 'Main', q: R`Most lanthanoids are +3. Why do Ce show +4 and Eu and Yb show +2?`,
          steps: [R`These states give empty, half-filled or full 4f subshells.`, R`Ce⁴⁺: \(4f^0\). Eu²⁺: \(4f^7\). Yb²⁺: \(4f^{14}\).`],
          ans: R`Because of the extra stability of \(f^0\), \(f^7\) and \(f^{14}\)` },
        { topic: R`Actinoids: configuration & oxidation states`, level: 'Main', q: R`Why do actinoids show a wider range of oxidation states than lanthanoids?`,
          steps: [R`In actinoids, the 5f, 6d and 7s levels are very close in energy, so many electrons can take part in bonding.`, R`The 4f orbitals of lanthanoids are buried deep in the atom.`],
          ans: R`The 5f, 6d and 7s energies are close, giving states from +3 up to +7 (Np, Pu).` }
      ],
      practice: [
        { q: R`Find the spin-only magnetic moment of Cu²⁺.`, ans: R`1 unpaired electron, so \(\sqrt3 \approx 1.73\) BM` },
        { q: R`What is the most common oxidation state of the lanthanoids?`, ans: R`+3` }
      ]
    },
    {
      id: 'coordination-compounds', title: 'Coordination Compounds', cls: 12,
      syllabus: [R`Werner's theory`, R`Ligands, coordination number, denticity, chelation`, R`IUPAC nomenclature`, R`Isomerism (structural & stereo)`, R`Valence bond theory: hybridisation, shapes`, R`Crystal field theory: splitting, CFSE, colour & magnetic properties`, R`Importance & applications`],
      concepts: [
        { h: R`Naming rules`, body: R`Name the ligands in alphabetical order before the metal. Give the metal's oxidation state in Roman numerals. In an anionic complex, the metal name ends in "-ate" (ferrate, cuprate, argentate).` },
        { h: R`Crystal field theory`, body: R`In an octahedral field, the d orbitals split into \(t_{2g}\) (lower) and \(e_g\) (upper). Strong-field ligands (CN⁻, CO) cause pairing, giving low-spin complexes. Weak-field ligands (I⁻, Br⁻, Cl⁻, F⁻) give high-spin complexes.` },
        { h: R`Spectrochemical series`, body: R`I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO` }
      ],
      formulas: [
        R`Octahedral: \(\Delta_t = \tfrac49\Delta_o\) (tetrahedral splitting is smaller)`,
        R`CFSE (octahedral) \(= (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\Delta_o + \) pairing energy terms`,
        R`Isomers: [MA₂B₂] square planar → 2 geometrical; [MA₄B₂] octahedral → 2 (cis, trans); [MA₃B₃] → 2 (fac, mer)`
      ],
      examples: [
        { topic: R`Werner's theory`, level: 'Main', q: R`One mole of CoCl₃·5NH₃ gives 2 mol of AgCl with excess AgNO₃. Write its formula using Werner's theory.`,
          steps: [R`Only the chloride ions outside the coordination sphere are precipitated, and there are 2 of them.`, R`Co(III) has a coordination number of 6: 5 NH₃ + 1 Cl inside the sphere.`],
          ans: R`\([\text{Co(NH}_3)_5\text{Cl}]\text{Cl}_2\). It forms 3 ions in solution. Primary valence 3, secondary valence 6.` },
        { topic: R`Ligands, coordination number, denticity, chelation`, level: 'Main', q: R`Find the coordination number of Co in \([\text{Co(en)}_3]^{3+}\). Why are chelate complexes extra stable?`,
          steps: [R`Ethylenediamine (en) is bidentate, so each en uses two donor atoms: \(3\times2 = 6\).`, R`A ligand that grips the metal in two places forms a ring, and it is unlikely to let go of both at once.`],
          ans: R`CN = 6. Chelation increases stability (the chelate effect). EDTA⁴⁻ is hexadentate.` },
        { topic: R`IUPAC nomenclature`, level: 'Main', q: R`Write the IUPAC name of K₄[Fe(CN)₆].`,
          steps: [R`Charge balance: \(4(+1) + x + 6(-1) = 0\), so \(x = +2\).`, R`The complex is an anion, so the metal is named "ferrate".`],
          ans: R`Potassium hexacyanidoferrate(II)` },
        { topic: R`Isomerism (structural & stereo)`, level: 'Advanced', q: R`How many stereoisomers does \([\text{Co(en)}_2\text{Cl}_2]^+\) have?`,
          steps: [R`Geometrical: the two Cl can be cis or trans.`, R`The trans form has a plane of symmetry, so it is achiral. The cis form is chiral and exists as a pair of enantiomers.`],
          ans: R`3 (trans, plus d- and l-cis)` },
        { topic: R`Valence bond theory: hybridisation, shapes`, level: 'Main', q: R`Give the hybridisation and magnetic nature of \([\text{Co(NH}_3)_6]^{3+}\).`,
          steps: [R`Co³⁺ is \(3d^6\). NH₃ is a strong ligand for Co³⁺, so the electrons pair up as \(t_{2g}^6e_g^0\).`, R`Two empty inner 3d orbitals are used, giving d²sp³ hybridisation.`],
          ans: R`d²sp³ (inner orbital), octahedral, diamagnetic` },
        { topic: R`Crystal field theory: splitting, CFSE, colour & magnetic properties`, level: 'Main', q: R`Compare \([\text{Fe(H}_2\text{O)}_6]^{2+}\) and \([\text{Fe(CN)}_6]^{4-}\): CFSE and magnetic moment.`,
          steps: [R`Fe²⁺ is \(d^6\). With H₂O (weak field) it is high spin: \(t_{2g}^4e_g^2\), CFSE \(= -0.4\Delta_o\), with 4 unpaired electrons.`, R`With CN⁻ (strong field) it is low spin: \(t_{2g}^6\), CFSE \(= -2.4\Delta_o\), with no unpaired electrons.`],
          ans: R`Aqua: \(\mu = \sqrt{24} \approx 4.9\) BM, paramagnetic. Cyano: diamagnetic.` },
        { topic: R`Importance & applications`, level: 'Main', q: R`Give four real-world uses of coordination compounds.`,
          steps: [R`Think of medicine, biology and analysis.`],
          ans: R`Cisplatin (anticancer drug); haemoglobin (Fe) and chlorophyll (Mg); EDTA titration to measure water hardness; \([\text{Ag(CN)}_2]^-\) in silver electroplating.` }
      ],
      practice: [
        { q: R`How many geometrical isomers does [Pt(NH₃)₂Cl₂] have?`, ans: R`2 (cis and trans)` },
        { q: R`Is [Ni(CN)₄]²⁻ paramagnetic or diamagnetic?`, ans: R`Diamagnetic. It is square planar (dsp²), with all 8 d electrons paired.` }
      ]
    },
    {
      id: 'purification-characterisation', title: 'Purification and Characterisation of Organic Compounds', cls: 11,
      syllabus: [R`Crystallisation, sublimation, distillation, differential extraction, chromatography`, R`Qualitative analysis: detection of N, S, P & halogens (Lassaigne test)`, R`Quantitative analysis: estimation of C, H, N (Dumas, Kjeldahl), halogens, S, P (Carius)`, R`Empirical & molecular formulae`, R`Numerical problems`],
      concepts: [
        { h: R`Choosing a method`, body: R`Use simple distillation when boiling points differ widely, and fractional distillation when they are close. Use steam distillation for steam-volatile, water-immiscible compounds such as aniline. Use sublimation for camphor, naphthalene and iodine.` },
        { h: R`Lassaigne test`, body: R`Fuse the compound with Na. N gives Prussian blue (with FeSO₄ and Fe³⁺). S gives violet with sodium nitroprusside. Halogens give a precipitate with AgNO₃ (AgCl white, AgBr pale yellow, AgI yellow).` },
        { h: R`Chromatography`, body: R`\(R_f = \dfrac{\text{distance moved by compound}}{\text{distance moved by solvent}}\). A larger \(R_f\) means the compound sticks less to the stationary phase.` }
      ],
      formulas: [
        R`Carius (halogen): \(\%X = \dfrac{\text{at. mass of }X}{\text{mol. mass of }AgX}\times\dfrac{w_{AgX}}{w}\times100\)`,
        R`Kjeldahl: \(\%N = \dfrac{1.4\times N_{acid}\times V_{acid}}{w}\)`,
        R`\(\%C = \dfrac{12}{44}\times\dfrac{w_{CO_2}}{w}\times100\), \(\%H = \dfrac{2}{18}\times\dfrac{w_{H_2O}}{w}\times100\)`
      ],
      examples: [
        { topic: R`Crystallisation, sublimation, distillation, differential extraction, chromatography`, level: 'Main', q: R`Choose a purification method for: (a) naphthalene mixed with salt (b) glycerol from spent lye (c) a mixture of dyes (d) impure benzoic acid.`,
          steps: [R`Match each method to the property being exploited.`],
          ans: R`(a) Sublimation (b) Distillation under reduced pressure (glycerol decomposes at its normal boiling point) (c) Chromatography (d) Crystallisation from hot water` },
        { topic: R`Qualitative analysis: detection of N, S, P & halogens (Lassaigne test)`, level: 'Main', q: R`In the Lassaigne test, why is the compound fused with sodium? What does a blood-red colour with Fe³⁺ show?`,
          steps: [R`Fusion turns covalently bonded N, S and X into ionic NaCN, Na₂S and NaX, which can then be tested.`, R`If N and S are both present, NaSCN forms, which gives red \([\text{Fe(SCN)}]^{2+}\).`],
          ans: R`It converts the elements into ions. A blood-red colour means both N and S are present.` },
        { topic: R`Quantitative analysis: estimation of C, H, N (Dumas, Kjeldahl), halogens, S, P (Carius)`, level: 'Main', q: R`In a Carius estimation, 0.2 g of a compound gave 0.287 g of AgCl. Find the % of chlorine.`,
          steps: [R`\(\%\text{Cl} = \dfrac{35.5}{143.5}\times\dfrac{0.287}{0.2}\times100\).`, R`\(= \dfrac{0.071}{0.2}\times100\).`],
          ans: R`35.5%` },
        { topic: R`Empirical & molecular formulae`, level: 'Main', q: R`0.42 g of a hydrocarbon burns to give 1.32 g of CO₂ and 0.54 g of H₂O. Its molar mass is 42. Find its molecular formula.`,
          steps: [R`C \(= \tfrac{12}{44}\times1.32 = 0.36\) g, which is 0.03 mol. H \(= \tfrac{2}{18}\times0.54 = 0.06\) g, which is 0.06 mol.`, R`C : H = 1 : 2, so the empirical formula is CH₂ (14 g/mol).`, R`\(n = 42/14 = 3\).`],
          ans: R`C₃H₆` },
        { topic: R`Numerical problems`, level: 'Main', q: R`In a Kjeldahl estimation, the ammonia from 0.5 g of a compound neutralised 10 mL of 1 M H₂SO₄. Find the % of nitrogen.`,
          steps: [R`1 M H₂SO₄ is 2 N.`, R`\(\%N = \dfrac{1.4\times2\times10}{0.5}\).`],
          ans: R`56%` }
      ],
      practice: [
        { q: R`A spot moves 2.4 cm while the solvent front moves 6 cm. Find \(R_f\).`, ans: R`0.4` },
        { q: R`Which method is used to purify aniline?`, ans: R`Steam distillation` }
      ]
    },
    {
      id: 'goc', title: 'Some Basic Principles of Organic Chemistry', cls: 11,
      syllabus: [R`Tetravalency of carbon, hybridisation`, R`Classification & IUPAC nomenclature`, R`Isomerism: structural & stereo`, R`Covalent bond fission: homolytic & heterolytic`, R`Free radicals, carbocations, carbanions & their stability`, R`Electrophiles & nucleophiles`, R`Inductive effect, electromeric effect, resonance, hyperconjugation`, R`Types of reactions: substitution, addition, elimination, rearrangement`],
      concepts: [
        { h: R`Electronic effects`, body: R`The inductive effect is a permanent shift of electrons through σ bonds, and it fades with distance. Resonance (the mesomeric effect) moves π electrons and lone pairs. Hyperconjugation means α C–H σ electrons interact with a neighbouring π system or empty p orbital.` },
        { h: R`Stability of intermediates`, body: R`Carbocations and free radicals: 3° > 2° > 1° > methyl. Resonance (allyl, benzyl) makes them even more stable. Carbanions follow the reverse order.` },
        { h: R`Acidity`, body: R`Anything that stabilises the conjugate base increases acidity. Electron-withdrawing groups (−I, −M) make acids stronger. Electron-donating groups make them weaker.` }
      ],
      formulas: [
        R`Electron-withdrawing (−I) strength: \(-\text{NO}_2 > -\text{CN} > -\text{COOH} > -\text{F} > -\text{Cl} > -\text{Br} > -\text{I}\)`,
        R`+I strength: \(-\text{C(CH}_3)_3 > -\text{CH(CH}_3)_2 > -\text{CH}_2\text{CH}_3 > -\text{CH}_3\)`,
        R`Degree of unsaturation \(= C - \dfrac{H + X}{2} + \dfrac{N}{2} + 1\)`
      ],
      examples: [
        { topic: R`Tetravalency of carbon, hybridisation`, level: 'Main', q: R`Give the hybridisation of each carbon in CH₂=CH–C≡N, and count its σ and π bonds.`,
          steps: [R`C1 and C2 have double bonds, so they are sp². C3 has a triple bond, so it is sp.`, R`σ: 3 C–H + C=C + C–C + C≡N = 6. π: 1 (C=C) + 2 (C≡N) = 3.`],
          ans: R`sp², sp², sp; 6 σ and 3 π bonds` },
        { topic: R`Classification & IUPAC nomenclature`, level: 'Main', q: R`Give the IUPAC names of (a) CH₃CH₂CH(CH₃)CH₂CH₃ (b) CH₃COCH₂CH₃.`,
          steps: [R`(a) The longest chain has 5 carbons, with the methyl at C-3.`, R`(b) It is a 4-carbon ketone, with C=O at C-2.`],
          ans: R`(a) 3-methylpentane (b) butan-2-one` },
        { topic: R`Isomerism: structural & stereo`, level: 'Main', q: R`How many structural isomers does C₄H₁₀O have?`,
          steps: [R`Alcohols: butan-1-ol, butan-2-ol, 2-methylpropan-1-ol and 2-methylpropan-2-ol, which makes 4.`, R`Ethers: methoxypropane, 2-methoxypropane and ethoxyethane, which makes 3.`],
          ans: R`7` },
        { topic: R`Covalent bond fission: homolytic & heterolytic`, level: 'Main', q: R`Classify the bond fission: (a) Cl₂ in UV light (b) (CH₃)₃C–Br ionising in a polar solvent.`,
          steps: [R`(a) The bond splits evenly, giving each Cl atom one electron: 2Cl•.`, R`(b) Br takes both electrons: (CH₃)₃C⁺ + Br⁻.`],
          ans: R`(a) Homolytic (free radicals) (b) Heterolytic (ions)` },
        { topic: R`Free radicals, carbocations, carbanions & their stability`, level: 'Main', q: R`Arrange these carbocations by stability: CH₃⁺, CH₃CH₂⁺, (CH₃)₂CH⁺, (CH₃)₃C⁺.`,
          steps: [R`Alkyl groups stabilise the positive charge by +I and by hyperconjugation.`, R`Number of α-hydrogens: 9, 6, 3, 0.`],
          ans: R`(CH₃)₃C⁺ > (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺` },
        { topic: R`Electrophiles & nucleophiles`, level: 'Main', q: R`Sort into electrophiles and nucleophiles: H₂O, NO₂⁺, CN⁻, BF₃, NH₃, AlCl₃.`,
          steps: [R`Nucleophiles donate an electron pair (they have a lone pair or negative charge).`, R`Electrophiles accept an electron pair (they are positive or electron-deficient).`],
          ans: R`Nucleophiles: H₂O, CN⁻, NH₃. Electrophiles: NO₂⁺, BF₃, AlCl₃.` },
        { topic: R`Inductive effect, electromeric effect, resonance, hyperconjugation`, level: 'Main', q: R`Arrange CH₃COOH, ClCH₂COOH, Cl₂CHCOOH and Cl₃CCOOH in increasing order of acidity.`,
          steps: [R`Each Cl is electron-withdrawing (−I) and stabilises the carboxylate ion.`, R`More Cl atoms make the acid stronger.`],
          ans: R`CH₃COOH < ClCH₂COOH < Cl₂CHCOOH < Cl₃CCOOH` },
        { topic: R`Types of reactions: substitution, addition, elimination, rearrangement`, level: 'Main', q: R`Classify: (a) CH₃Br + OH⁻ → CH₃OH (b) C₂H₄ + Br₂ → C₂H₄Br₂ (c) C₂H₅OH → C₂H₄ + H₂O (conc. H₂SO₄) (d) NH₄CNO → NH₂CONH₂.`,
          steps: [R`Ask what happened: a group was replaced, groups were added across a π bond, groups were removed, or atoms were reorganised.`],
          ans: R`(a) Substitution (b) Addition (c) Elimination (d) Rearrangement` }
      ],
      practice: [
        { q: R`Give the IUPAC name of (CH₃)₂CHCH₂OH.`, ans: R`2-methylpropan-1-ol` },
        { q: R`Which is more stable: the benzyl cation or the tert-butyl cation?`, ans: R`The benzyl cation is generally treated as more stable in JEE (resonance with the ring). The two are close, though, and the answer depends on the medium.` }
      ]
    },
    {
      id: 'hydrocarbons', title: 'Hydrocarbons', cls: 11,
      syllabus: [R`Alkanes: conformations, preparation, reactions (halogenation)`, R`Alkenes: geometrical isomerism, preparation, addition (H₂, X₂, HX, H₂O), Markovnikov & peroxide effect, ozonolysis, polymerisation`, R`Alkynes: acidic character, addition reactions, polymerisation`, R`Aromatic hydrocarbons: benzene structure, aromaticity, electrophilic substitution (nitration, sulphonation, halogenation, Friedel–Crafts)`, R`Directive influence of substituents`],
      concepts: [
        { h: R`Markovnikov vs anti-Markovnikov`, body: R`When HX adds to an unsymmetrical alkene, H goes to the carbon that already has more H atoms, because this gives the more stable carbocation. With HBr in the presence of peroxide, the addition goes the opposite way (by a free-radical mechanism).` },
        { h: R`Aromaticity (Hückel)`, body: R`A molecule is aromatic if it is cyclic, planar and fully conjugated, with \((4n + 2)\) π electrons.` },
        { h: R`Directing groups`, body: R`−OH, −NH₂, −CH₃ and halogens direct substitution to the ortho and para positions. Halogens still deactivate the ring. −NO₂, −CHO, −COOH and −CN direct to the meta position and deactivate the ring.` }
      ],
      formulas: [
        R`Kolbe: \(2\text{RCOONa} \xrightarrow{\text{electrolysis}} \text{R–R}\)`,
        R`Wurtz: \(2\text{RX} + 2\text{Na} \xrightarrow{\text{dry ether}} \text{R–R}\)`,
        R`Ozonolysis: \(\text{R}_2\text{C=CR}'_2 \xrightarrow{\text{O}_3,\ \text{Zn/H}_2\text{O}} \text{R}_2\text{C=O} + \text{O=CR}'_2\)`,
        R`Terminal alkyne: \(\text{RC}\equiv\text{CH} + \text{NaNH}_2 \to \text{RC}\equiv\text{C}^-\text{Na}^+\)`
      ],
      examples: [
        { topic: R`Alkanes: conformations, preparation, reactions (halogenation)`, level: 'Main', q: R`Which conformation of ethane is more stable? How many monochloro products does free-radical chlorination of 2-methylbutane give?`,
          steps: [R`Staggered is more stable than eclipsed (by about 12.5 kJ/mol), because the C–H bonds repel less.`, R`2-methylbutane has 4 kinds of H: the two equivalent CH₃ groups on C-2, the H on C-2, the CH₂ at C-3, and the CH₃ at C-4.`],
          ans: R`Staggered; 4 structural isomers` },
        { topic: R`Alkenes: geometrical isomerism, preparation, addition (H₂, X₂, HX, H₂O), Markovnikov & peroxide effect, ozonolysis, polymerisation`, level: 'Main', q: R`Propene reacts with HBr (a) without peroxide and (b) with peroxide. Give the products.`,
          steps: [R`(a) Ionic addition goes through the more stable 2° carbocation (Markovnikov).`, R`(b) Free-radical addition goes through the more stable 2° radical, which puts Br on C-1.`],
          ans: R`(a) 2-bromopropane, (b) 1-bromopropane` },
        { topic: R`Alkenes: geometrical isomerism, preparation, addition (H₂, X₂, HX, H₂O), Markovnikov & peroxide effect, ozonolysis, polymerisation`, level: 'Main', q: R`What does but-2-ene give on ozonolysis?`,
          steps: [R`The C=C bond in CH₃CH=CHCH₃ is cut.`, R`Each half becomes a CH₃CHO molecule.`],
          ans: R`Two molecules of ethanal (CH₃CHO)` },
        { topic: R`Alkynes: acidic character, addition reactions, polymerisation`, level: 'Main', q: R`What does propyne give with dilute H₂SO₄/HgSO₄? Why does ethyne react with Na but ethene does not?`,
          steps: [R`Markovnikov hydration gives an enol, which tautomerises to a ketone.`, R`An sp carbon has 50% s-character and holds electrons tightly, so ≡C–H is weakly acidic.`],
          ans: R`Propanone (acetone). Ethyne's terminal H is acidic and forms sodium acetylide.` },
        { topic: R`Aromatic hydrocarbons: benzene structure, aromaticity, electrophilic substitution (nitration, sulphonation, halogenation, Friedel–Crafts)`, level: 'Main', q: R`Outline the mechanism for the nitration of benzene.`,
          steps: [R`The electrophile forms: \(\text{HNO}_3 + 2\text{H}_2\text{SO}_4 \to \text{NO}_2^+ + \text{H}_3\text{O}^+ + 2\text{HSO}_4^-\).`, R`NO₂⁺ attacks the ring to give a resonance-stabilised arenium ion (σ-complex).`, R`Losing H⁺ restores aromaticity.`],
          ans: R`Electrophilic aromatic substitution via NO₂⁺, giving nitrobenzene` },
        { topic: R`Directive influence of substituents`, level: 'Main', q: R`What do toluene and nitrobenzene give on nitration? Arrange phenol, toluene, benzene, chlorobenzene and nitrobenzene by reactivity.`,
          steps: [R`–CH₃ directs ortho/para and activates the ring. –NO₂ directs meta and deactivates it.`, R`–OH activates strongly, and –Cl deactivates slightly.`],
          ans: R`Toluene gives o- and p-nitrotoluene; nitrobenzene gives m-dinitrobenzene. Phenol > toluene > benzene > chlorobenzene > nitrobenzene.` }
      ],
      practice: [
        { q: R`What does Kolbe electrolysis of sodium ethanoate give?`, ans: R`Ethane (plus CO₂)` },
        { q: R`Is cyclopentadienyl anion aromatic?`, ans: R`Yes. It is cyclic, planar and conjugated, with 6 π electrons.` }
      ]
    },
    {
      id: 'haloalkanes', title: 'Organic Compounds Containing Halogens', cls: 12,
      syllabus: [R`General methods of preparation, properties & reactions`, R`Nature of the C–X bond`, R`Mechanisms of substitution reactions (SN1, SN2)`, R`Elimination reactions`, R`Uses & environmental effects of chloroform, iodoform, freons & DDT`],
      concepts: [
        { h: R`SN2`, body: R`The reaction happens in one step, with the nucleophile attacking from the back. It inverts the configuration (Walden inversion). The rate order is CH₃X > 1° > 2° > 3°, because crowding blocks the attack.` },
        { h: R`SN1`, body: R`The reaction happens in two steps, through a carbocation. A chiral substrate gives a racemic product. The rate order is 3° > 2° > 1°. Polar protic solvents favour SN1.` },
        { h: R`Haloarenes`, body: R`They are much less reactive towards nucleophiles, because the C–X bond gains partial double-bond character from resonance and the carbon is sp². Electron-withdrawing groups at the o/p positions make them more reactive.` }
      ],
      formulas: [
        R`Alcoholic KOH → elimination (alkene); aqueous KOH → substitution (alcohol)`,
        R`Saytzeff rule: the more substituted alkene is the major product`,
        R`Reactivity of R–X: R–I > R–Br > R–Cl > R–F`
      ],
      examples: [
        { topic: R`General methods of preparation, properties & reactions`, level: 'Main', q: R`Why is SOCl₂ the preferred reagent for converting ethanol into chloroethane? Name the reactions that make CH₃I and CH₃F from other haloalkanes.`,
          steps: [R`\(\text{C}_2\text{H}_5\text{OH} + \text{SOCl}_2 \to \text{C}_2\text{H}_5\text{Cl} + \text{SO}_2\uparrow + \text{HCl}\uparrow\): both by-products are gases, which leaves a pure product.`, R`Finkelstein: R–Cl + NaI (in acetone) → R–I. Swarts: R–Br + AgF → R–F.`],
          ans: R`SOCl₂ gives gaseous by-products. The Finkelstein reaction makes CH₃I and the Swarts reaction makes CH₃F.` },
        { topic: R`Nature of the C–X bond`, level: 'Main', q: R`Arrange CH₃F, CH₃Cl, CH₃Br and CH₃I by dipole moment.`,
          steps: [R`\(\mu = q\times d\). F has the largest charge, but its C–F bond is very short.`, R`In CH₃Cl the charge and the bond length combine to give the largest product.`],
          ans: R`CH₃Cl > CH₃F > CH₃Br > CH₃I` },
        { topic: R`Mechanisms of substitution reactions (SN1, SN2)`, level: 'Main', q: R`Arrange CH₃Br, CH₃CH₂Br, (CH₃)₂CHBr and (CH₃)₃CBr in decreasing order of SN2 reactivity.`,
          steps: [R`In SN2, crowding around the carbon slows the attack from the back.`],
          ans: R`CH₃Br > CH₃CH₂Br > (CH₃)₂CHBr > (CH₃)₃CBr` },
        { topic: R`Elimination reactions`, level: 'Main', q: R`What does 2-bromobutane give with alcoholic KOH? Which product is the major one?`,
          steps: [R`Dehydrohalogenation removes H from a neighbouring carbon.`, R`Saytzeff: the more substituted alkene is favoured.`],
          ans: R`But-2-ene (major) and but-1-ene (minor)` },
        { topic: R`Uses & environmental effects of chloroform, iodoform, freons & DDT`, level: 'Main', q: R`Why is chloroform stored in dark bottles filled to the top? Why are freons and DDT harmful?`,
          steps: [R`Air and light oxidise CHCl₃ to the poisonous gas phosgene, COCl₂.`, R`In the stratosphere, freons release Cl radicals that destroy ozone. DDT does not break down and builds up in food chains.`],
          ans: R`To prevent phosgene from forming. Freons deplete the ozone layer; DDT accumulates in living things.` }
      ],
      practice: [
        { q: R`Why is chlorobenzene less reactive than chloroethane towards nucleophiles?`, ans: R`Resonance gives the C–Cl bond partial double-bond character, and the carbon is sp², so the bond is stronger and harder to break.` },
        { q: R`What does Wurtz reaction of CH₃Br give?`, ans: R`Ethane` }
      ]
    },
    {
      id: 'oxygen-compounds', title: 'Organic Compounds Containing Oxygen', cls: 12,
      syllabus: [R`Alcohols: identification of 1°, 2°, 3°, dehydration, oxidation`, R`Phenols: acidic nature, electrophilic substitution (halogenation, nitration, sulphonation), Reimer–Tiemann reaction`, R`Ethers: structure`, R`Aldehydes & ketones: nucleophilic addition, reactions with HCN, NH₃ derivatives`, R`Grignard reagent, oxidation, reduction (Wolff–Kishner & Clemmensen), acidity of α-H, aldol condensation, Cannizzaro reaction, haloform reaction`, R`Chemical tests (Tollens', Fehling's)`, R`Carboxylic acids: acidic strength & factors affecting it`],
      concepts: [
        { h: R`Acidity`, body: R`Carboxylic acids are more acidic than phenols, which are more acidic than water, which is more acidic than alcohols. Resonance stabilises the carboxylate ion (two equivalent structures) and the phenoxide ion.` },
        { h: R`Aldehydes vs ketones`, body: R`Aldehydes are more reactive towards nucleophiles: they are less crowded, and the carbonyl carbon is more electron-poor. Only aldehydes give positive Tollens' and Fehling's tests.` },
        { h: R`Name reactions`, body: R`Aldol: needs an α-H and dilute base, and gives a β-hydroxy carbonyl. Cannizzaro: no α-H, concentrated base, and the compound is both oxidised and reduced (disproportionation). Haloform: given by CH₃CO– and CH₃CH(OH)– groups.` }
      ],
      formulas: [
        R`Lucas test speed: 3° (instant) > 2° (~5 min) > 1° (no turbidity at room temperature)`,
        R`Clemmensen: \(\text{C=O} \xrightarrow{\text{Zn–Hg/HCl}} \text{CH}_2\); Wolff–Kishner: \(\xrightarrow{\text{NH}_2\text{NH}_2,\ \text{KOH}}\text{CH}_2\)`,
        R`Grignard: \(\text{RMgX} + \text{HCHO} \to 1^\circ\), \(+\ \text{RCHO} \to 2^\circ\), \(+\ \text{R}_2\text{CO} \to 3^\circ\) alcohol`
      ],
      examples: [
        { topic: R`Alcohols: identification of 1°, 2°, 3°, dehydration, oxidation`, level: 'Main', q: R`How would you tell propan-1-ol from propan-2-ol?`,
          steps: [R`Lucas test: the 2° alcohol turns cloudy in about 5 min. The 1° alcohol shows no cloudiness at room temperature.`, R`Oxidation: the 1° alcohol gives propanal, then propanoic acid. The 2° alcohol gives propanone.`],
          ans: R`The Lucas test, or the iodoform test (positive only for propan-2-ol, which has a CH₃CH(OH)– group)` },
        { topic: R`Phenols: acidic nature, electrophilic substitution (halogenation, nitration, sulphonation), Reimer–Tiemann reaction`, level: 'Main', q: R`Arrange phenol, p-nitrophenol and p-cresol in increasing order of acidity.`,
          steps: [R`−NO₂ withdraws electrons and stabilises the phenoxide ion, which increases acidity.`, R`−CH₃ donates electrons, which decreases acidity.`],
          ans: R`p-cresol < phenol < p-nitrophenol` },
        { topic: R`Ethers: structure`, level: 'Main', q: R`Which pair of reactants gives tert-butyl methyl ether by Williamson synthesis: (a) CH₃ONa + (CH₃)₃CBr or (b) (CH₃)₃CONa + CH₃Br?`,
          steps: [R`Williamson synthesis is an SN2 reaction, so it needs an unhindered (1°) halide.`, R`With a 3° halide, the strong base causes elimination (giving an alkene) instead.`],
          ans: R`(b). The C–O–C bond angle in ethers (about 111.7°) is above the tetrahedral angle because the alkyl groups repel.` },
        { topic: R`Aldehydes & ketones: nucleophilic addition, reactions with HCN, NH₃ derivatives`, level: 'Main', q: R`Arrange HCHO, CH₃CHO and CH₃COCH₃ by reactivity toward HCN.`,
          steps: [R`The nucleophile attacks the carbonyl carbon.`, R`Alkyl groups donate electrons (+I) and add crowding, which lowers reactivity.`],
          ans: R`HCHO > CH₃CHO > CH₃COCH₃. Each gives a cyanohydrin.` },
        { topic: R`Grignard reagent, oxidation, reduction (Wolff–Kishner & Clemmensen), acidity of α-H, aldol condensation, Cannizzaro reaction, haloform reaction`, level: 'Main', q: R`What does HCHO give with concentrated NaOH?`,
          steps: [R`HCHO has no α-H, so it undergoes the Cannizzaro reaction.`, R`One molecule is oxidised and another is reduced.`],
          ans: R`Methanol + sodium formate (HCOONa)` },
        { topic: R`Chemical tests (Tollens', Fehling's)`, level: 'Main', q: R`How would you distinguish ethanal from propanone? Does benzaldehyde respond to Fehling's solution?`,
          steps: [R`Tollens' reagent gives a silver mirror and Fehling's solution a red Cu₂O precipitate, but only with aldehydes.`, R`Aromatic aldehydes reduce Tollens' reagent but not Fehling's solution.`],
          ans: R`Ethanal is positive with both and propanone with neither. Benzaldehyde gives Tollens' but not Fehling's.` },
        { topic: R`Carboxylic acids: acidic strength & factors affecting it`, level: 'Main', q: R`Arrange CH₃COOH, HCOOH, ClCH₂COOH and FCH₂COOH by acid strength.`,
          steps: [R`An electron-withdrawing group stabilises the carboxylate ion, and F withdraws more strongly than Cl.`, R`CH₃ donates electrons (+I), so acetic acid is weaker than formic acid.`],
          ans: R`FCH₂COOH > ClCH₂COOH > HCOOH > CH₃COOH` }
      ],
      practice: [
        { q: R`Which of ethanol and methanol gives the iodoform test?`, ans: R`Ethanol, because it has a CH₃CH(OH)– group.` },
        { q: R`What does ethanal give with dilute NaOH?`, ans: R`3-hydroxybutanal (an aldol), which loses water on heating to give but-2-enal` }
      ]
    },
    {
      id: 'nitrogen-compounds', title: 'Organic Compounds Containing Nitrogen', cls: 12,
      syllabus: [R`Amines: nomenclature, classification, structure`, R`Basic character of amines & its identification`, R`Primary, secondary & tertiary amines and their identification`, R`Diazonium salts: importance in synthetic organic chemistry`],
      concepts: [
        { h: R`Basicity`, body: R`The lone pair on N makes amines basic. In water, solvation and steric effects compete, so (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃. Aromatic amines are weak bases, because the lone pair is delocalised into the ring.` },
        { h: R`Telling the amines apart`, body: R`Hinsberg reagent: a 1° amine gives a product that dissolves in alkali, a 2° amine gives one that does not, and a 3° amine does not react. Carbylamine test (CHCl₃ + KOH): only 1° amines give a foul-smelling isocyanide.` },
        { h: R`Diazonium salts`, body: R`ArN₂⁺Cl⁻ forms at 0–5 °C. The N₂ group can be replaced by Cl, Br or CN (Sandmeyer), by I (with KI), by OH (warm water) or by H (H₃PO₂). Coupling with phenols or amines gives azo dyes.` }
      ],
      formulas: [
        R`Hoffmann bromamide: \(\text{RCONH}_2 + \text{Br}_2 + 4\text{NaOH} \to \text{RNH}_2\) (one carbon shorter)`,
        R`Diazotisation: \(\text{ArNH}_2 \xrightarrow{\text{NaNO}_2/\text{HCl},\ 273–278\,\text{K}} \text{ArN}_2^+\text{Cl}^-\)`,
        R`Gabriel phthalimide synthesis gives pure 1° aliphatic amines`
      ],
      examples: [
        { topic: R`Amines: nomenclature, classification, structure`, level: 'Main', q: R`What does acetamide give with Br₂ and NaOH?`,
          steps: [R`This is the Hoffmann bromamide degradation, which removes the carbonyl carbon.`],
          ans: R`Methylamine (CH₃NH₂)` },
        { topic: R`Amines: nomenclature, classification, structure`, level: 'Main', q: R`Name and classify (1°, 2° or 3°): CH₃NHCH₂CH₃, (CH₃)₃N, C₆H₅NH₂.`,
          steps: [R`Count the carbons bonded to N.`],
          ans: R`N-methylethanamine (2°); N,N-dimethylmethanamine (3°); benzenamine, or aniline (1°). N is sp³ and the molecules are pyramidal.` },
        { topic: R`Basic character of amines & its identification`, level: 'Main', q: R`Arrange aniline, p-nitroaniline and p-toluidine (p-methylaniline) by basic strength.`,
          steps: [R`An electron-donating –CH₃ makes the N lone pair more available.`, R`An electron-withdrawing –NO₂ pulls the lone pair into the ring.`],
          ans: R`p-toluidine > aniline > p-nitroaniline` },
        { topic: R`Primary, secondary & tertiary amines and their identification`, level: 'Main', q: R`What happens with Hinsberg's reagent (C₆H₅SO₂Cl) and KOH for ethanamine, N-ethylethanamine and triethylamine?`,
          steps: [R`A 1° amine gives a sulphonamide with an acidic N–H, which dissolves in KOH.`, R`A 2° amine gives a sulphonamide with no N–H, which does not dissolve. A 3° amine does not react.`],
          ans: R`1°: soluble product. 2°: insoluble product. 3°: no reaction.` },
        { topic: R`Diazonium salts: importance in synthetic organic chemistry`, level: 'Main', q: R`Benzenediazonium chloride is treated with (a) CuCl/HCl and (b) phenol in alkali. Give the products.`,
          steps: [R`(a) This is a Sandmeyer reaction: N₂ is replaced by Cl.`, R`(b) Coupling happens at the para position of phenol.`],
          ans: R`(a) Chlorobenzene, (b) p-hydroxyazobenzene (an orange dye)` }
      ],
      practice: [
        { q: R`Which test distinguishes a primary amine from a secondary amine?`, ans: R`The carbylamine test (positive only for 1°) or the Hinsberg test` },
        { q: R`Why is aniline a weaker base than methylamine?`, ans: R`The lone pair on N in aniline is delocalised into the benzene ring.` }
      ]
    },
    {
      id: 'biomolecules', title: 'Biomolecules', cls: 12,
      syllabus: [R`Carbohydrates: classification, monosaccharides (glucose, fructose), oligo- & polysaccharides`, R`Proteins: α-amino acids, peptide bond, polypeptides, structure, denaturation`, R`Vitamins: classification & functions`, R`Nucleic acids: chemical constitution of DNA & RNA`, R`Biological functions of nucleic acids`, R`Hormones (general introduction)`],
      concepts: [
        { h: R`Glucose`, body: R`An aldohexose. With HI it gives n-hexane, which shows a straight chain. It gives a pentaacetate (5 OH groups) and reduces Tollens' reagent. It mostly exists as cyclic α- and β-pyranose forms (anomers).` },
        { h: R`Reducing sugars`, body: R`Sugars with a free hemiacetal group are reducing: glucose, fructose, maltose and lactose. Sucrose is non-reducing, because the glycosidic link joins C1 of glucose to C2 of fructose.` },
        { h: R`Nucleic acids`, body: R`DNA contains deoxyribose and the bases A, G, C and T, in a double helix (A pairs with T, G with C). RNA contains ribose, has U in place of T, and is usually single-stranded.` }
      ],
      formulas: [
        R`Sucrose \(\xrightarrow{\text{hydrolysis}}\) glucose + fructose (invert sugar: the sign of rotation flips)`,
        R`Peptide bonds in an \(n\)-peptide: \(n - 1\)`,
        R`Fat-soluble vitamins: A, D, E, K; water-soluble: B group and C`
      ],
      examples: [
        { topic: R`Carbohydrates: classification, monosaccharides (glucose, fructose), oligo- & polysaccharides`, level: 'Main', q: R`How do we know glucose has a straight chain of six carbons?`,
          steps: [R`Heating glucose for a long time with HI gives n-hexane.`],
          ans: R`The HI → n-hexane reaction shows that all 6 carbons are in a straight chain.` },
        { topic: R`Carbohydrates: classification, monosaccharides (glucose, fructose), oligo- & polysaccharides`, level: 'Main', q: R`Why is sucrose called a non-reducing sugar?`,
          steps: [R`Its two monosaccharides are joined through their reducing carbons (C1 of glucose and C2 of fructose).`, R`So it has no free aldehyde or ketone group.`],
          ans: R`Neither reducing group is free, so sucrose does not reduce Tollens' or Fehling's reagent.` },
        { topic: R`Proteins: α-amino acids, peptide bond, polypeptides, structure, denaturation`, level: 'Main', q: R`How many dipeptides can glycine and alanine form together? What happens to a protein when it is denatured (for example, boiling an egg)?`,
          steps: [R`The order matters: Gly-Ala and Ala-Gly.`, R`Heat breaks the H-bonds that hold the secondary and tertiary structure. The peptide bonds survive.`],
          ans: R`2 dipeptides. Denaturation destroys the 2° and 3° structure, but the primary structure stays intact.` },
        { topic: R`Vitamins: classification & functions`, level: 'Main', q: R`Why must vitamins B and C be eaten regularly, while A and D need not be? Name the deficiency diseases of A, D and K.`,
          steps: [R`B and C are water-soluble, so the body excretes them and cannot store them.`, R`A, D, E and K are fat-soluble and are stored in the liver and fatty tissue.`],
          ans: R`A: night blindness. D: rickets. K: poor blood clotting.` },
        { topic: R`Nucleic acids: chemical constitution of DNA & RNA`, level: 'Main', q: R`30% of the bases in a DNA sample are adenine. Find the percentage of guanine.`,
          steps: [R`Chargaff's rule: A = T and G = C.`, R`A + T = 60%, so G + C = 40%.`],
          ans: R`G = 20%` },
        { topic: R`Biological functions of nucleic acids`, level: 'Main', q: R`What are the roles of DNA and the three main kinds of RNA?`,
          steps: [R`DNA stores genetic information and copies itself (replication).`, R`RNA makes proteins: mRNA carries the code (codons), tRNA brings the amino acids, and rRNA forms the ribosome.`],
          ans: R`DNA is responsible for heredity; RNA for protein synthesis.` },
        { topic: R`Hormones (general introduction)`, level: 'Main', q: R`Classify these hormones by chemical type: insulin, thyroxine, testosterone.`,
          steps: [R`Hormones can be peptides, amino-acid derivatives or steroids.`],
          ans: R`Insulin: peptide (lowers blood sugar). Thyroxine: iodinated amino acid (lack of it causes goitre). Testosterone: steroid.` }
      ],
      practice: [
        { q: R`How many peptide bonds does a tripeptide have?`, ans: R`2` },
        { q: R`Which disease does a deficiency of vitamin C cause?`, ans: R`Scurvy` }
      ]
    },
    {
      id: 'practical-chemistry', title: 'Principles Related to Practical Chemistry', cls: 12,
      syllabus: [R`Detection of extra elements (N, S, halogens) in organic compounds`, R`Functional groups: alcoholic & phenolic –OH, aldehyde, ketone, carboxyl, amino`, R`Preparation of inorganic & organic compounds (Mohr's salt, potash alum, acetanilide, p-nitroacetanilide, aniline yellow, iodoform)`, R`Chemistry of titrations: oxalic acid & Mohr's salt vs KMnO₄`, R`Chemical principles of qualitative salt analysis (cations & anions)`, R`Enthalpy of solution & neutralisation`, R`Lyophilic & lyophobic sols`, R`Kinetics of reaction of iodide with H₂O₂`],
      concepts: [
        { h: R`Titrations with KMnO₄`, body: R`KMnO₄ acts as its own indicator: the end point is the first permanent pink colour. The titration is done in dilute H₂SO₄. HCl is not used because KMnO₄ would oxidise it.` },
        { h: R`Functional group tests`, body: R`Phenol gives violet with neutral FeCl₃. Aldehydes give a silver mirror with Tollens' reagent. Carboxylic acids fizz with NaHCO₃. Aldehydes and ketones give an orange precipitate with 2,4-DNP. 1° amines give the carbylamine test.` },
        { h: R`Salt analysis`, body: R`Group reagents for cations: Group I dil. HCl (Pb²⁺), Group II H₂S in acid (Cu²⁺), Group III NH₄OH/NH₄Cl (Al³⁺, Fe³⁺), Group IV H₂S in alkali (Zn²⁺, Ni²⁺), Group V (NH₄)₂CO₃ (Ca²⁺, Ba²⁺).` }
      ],
      formulas: [
        R`\(2\text{MnO}_4^- + 5\text{C}_2\text{O}_4^{2-} + 16\text{H}^+ \to 2\text{Mn}^{2+} + 10\text{CO}_2 + 8\text{H}_2\text{O}\)`,
        R`\(\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \to \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}\)`,
        R`Equivalents: \(N_1V_1 = N_2V_2\)`
      ],
      examples: [
        { topic: R`Detection of extra elements (N, S, halogens) in organic compounds`, level: 'Main', q: R`A sodium-fusion extract gives a blood-red colour with FeCl₃ but no Prussian blue. Which elements are present?`,
          steps: [R`N and S together form SCN⁻, which gives red \([\text{Fe(SCN)}]^{2+}\).`, R`When there is too little Na, SCN⁻ remains instead of separate CN⁻ and S²⁻, so no Prussian blue forms.`],
          ans: R`Both nitrogen and sulphur` },
        { topic: R`Functional groups: alcoholic & phenolic –OH, aldehyde, ketone, carboxyl, amino`, level: 'Main', q: R`Compound X fizzes with NaHCO₃, Y turns violet with neutral FeCl₃, and Z gives an orange precipitate with 2,4-DNP but no silver mirror. Identify the functional groups.`,
          steps: [R`Effervescence (CO₂): an acid stronger than carbonic acid.`, R`Violet with FeCl₃: a phenol. 2,4-DNP positive but Tollens' negative: a carbonyl compound that is not an aldehyde.`],
          ans: R`X: –COOH. Y: phenolic –OH. Z: a ketone.` },
        { topic: R`Preparation of inorganic & organic compounds (Mohr's salt, potash alum, acetanilide, p-nitroacetanilide, aniline yellow, iodoform)`, level: 'Main', q: R`Why is dilute H₂SO₄ added when crystallising Mohr's salt, FeSO₄·(NH₄)₂SO₄·6H₂O?`,
          steps: [R`Fe²⁺ hydrolyses in water, which makes the solution cloudy and lets the iron be oxidised to Fe³⁺.`],
          ans: R`To suppress hydrolysis of Fe²⁺, giving clear, pale-green crystals` },
        { topic: R`Chemistry of titrations: oxalic acid & Mohr's salt vs KMnO₄`, level: 'Main', q: R`20 mL of 0.1 M oxalic acid needs 10 mL of KMnO₄ to reach the end point. Find the molarity of the KMnO₄.`,
          steps: [R`Moles of oxalate \(= 0.1\times0.020 = 2\times10^{-3}\).`, R`Moles of MnO₄⁻ \(= \tfrac25\times2\times10^{-3} = 8\times10^{-4}\).`, R`\(M = 8\times10^{-4}/0.010\).`],
          ans: R`0.08 M` },
        { topic: R`Chemical principles of qualitative salt analysis (cations & anions)`, level: 'Main', q: R`What is the brown ring test used for, and what causes the brown ring?`,
          steps: [R`It is a test for the nitrate ion. Add FeSO₄ solution, then pour concentrated H₂SO₄ carefully down the side of the tube.`, R`NO forms and joins Fe²⁺ to make \([\text{Fe(H}_2\text{O)}_5\text{NO}]^{2+}\).`],
          ans: R`It detects NO₃⁻. The brown ring is the \([\text{Fe(H}_2\text{O)}_5(\text{NO})]^{2+}\) complex.` },
        { topic: R`Enthalpy of solution & neutralisation`, level: 'Main', q: R`Mixing 100 mL of 1 M HCl with 100 mL of 1 M NaOH raises the temperature by 6.8 °C. Find the enthalpy of neutralisation. (Take 200 g of solution, \(c = 4.18\) J/g K)`,
          steps: [R`\(q = 200\times4.18\times6.8 \approx 5685\) J for 0.1 mol of water formed.`, R`Per mole: \(5685/0.1\).`],
          ans: R`\(\Delta H \approx -57\) kJ/mol (for a strong acid with a strong base)` },
        { topic: R`Lyophilic & lyophobic sols`, level: 'Main', q: R`Compare starch and As₂S₃ sols. Arrange NaCl, BaCl₂ and AlCl₃ by their power to coagulate a negative As₂S₃ sol.`,
          steps: [R`Starch is lyophilic: it is solvated, stable and easily re-formed. As₂S₃ is lyophobic: it is unstable and coagulates easily.`, R`Hardy–Schulze rule: the higher the charge on the opposite ion, the greater the coagulating power.`],
          ans: R`AlCl₃ > BaCl₂ > NaCl (Al³⁺ > Ba²⁺ > Na⁺)` },
        { topic: R`Kinetics of reaction of iodide with H₂O₂`, level: 'Main', q: R`In the iodide–H₂O₂ "clock" reaction, the blue colour appears after 40 s with 0.1 M KI. Estimate the time with 0.2 M KI (all else unchanged).`,
          steps: [R`Rate \(= k[\text{H}_2\text{O}_2][\text{I}^-]\): first order in I⁻.`, R`Doubling [I⁻] doubles the rate, so the fixed amount of thiosulphate is used up twice as fast.`],
          ans: R`About 20 s` }
      ],
      practice: [
        { q: R`What flame colours do Na and Ca give?`, ans: R`Na: golden yellow. Ca: brick red.` },
        { q: R`Which cation gives a yellow precipitate with KI?`, ans: R`Pb²⁺ (PbI₂)` }
      ]
    }
  ]
};
