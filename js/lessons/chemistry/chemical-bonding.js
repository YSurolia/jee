// Lesson: Chemical Bonding and Molecular Structure.
var R = String.raw;
JEE.lesson('chemistry', 'chemical-bonding', {
  theory: [
    { h: R`Why atoms bond: the octet rule and Lewis structures`,
      body: [
        R`Noble gases (He, Ne, Ar…) hardly react, because their outer shells are full. Other atoms bond to reach a similar stable arrangement, usually 8 outer electrons: the <b>octet rule</b> (Kossel and Lewis).`,
        R`They do this by <b>transferring</b> electrons (ionic bonds) or <b>sharing</b> them (covalent bonds).`,
        R`A <b>Lewis structure</b> shows the valence electrons as dots or lines: shared pairs as bonds, unshared pairs as lone pairs. <b>Formal charge</b> \(= V - L - \tfrac12B\) helps pick the best structure (the one with formal charges closest to zero).`
      ],
      analogy: R`Atoms are like people who feel complete with a full set of eight. Some give away their extra items (metals), some take them (non-metals), and some agree to share.`,
      points: [R`Exceptions: BF₃ has only 6 electrons around B; PCl₅ and SF₆ have more than 8 (expanded octet); odd-electron molecules like NO exist.`] },

    { h: R`Ionic bonds and lattice enthalpy`,
      body: [
        R`A metal with low ionisation energy gives electrons to a non-metal with high electron affinity: Na → Na⁺ + e⁻ and Cl + e⁻ → Cl⁻. The oppositely charged ions attract strongly. This attraction is the <b>ionic bond</b>.`,
        R`In a crystal, each ion is surrounded by many oppositely charged ions. The energy released when gaseous ions come together to form one mole of the crystal is the <b>lattice enthalpy</b>.`,
        R`Lattice enthalpy is larger for <b>smaller</b> ions and <b>higher charges</b>. So MgO (2+, 2−) is far more strongly held than NaCl.`
      ],
      points: [R`Ionic compounds have high melting points, conduct electricity when molten or dissolved, and are usually soluble in water.`] },

    { h: R`Covalent bonds, electronegativity and Fajans' rules`,
      body: [
        R`In a <b>covalent bond</b>, two atoms share a pair of electrons. Two shared pairs make a double bond; three make a triple bond.`,
        R`<b>Electronegativity</b> is an atom's pull on shared electrons. F is the most electronegative (4.0), followed by O, then N and Cl. If two atoms differ in electronegativity, the electrons are pulled towards one side, giving a <b>polar</b> bond with partial charges δ+ and δ−.`,
        R`<b>Fajans' rules:</b> an ionic bond becomes partly covalent when a small, highly charged cation distorts (polarises) a large anion. Covalent character increases with a small cation, a high cation charge and a large anion.`
      ],
      analogy: R`A covalent bond is a tug-of-war over shared electrons. Equal teams (H–H) keep the rope centred. A stronger team (Cl in H–Cl) pulls it towards itself.`,
      check: { q: R`Which is more covalent: LiF or LiI?`, ans: R`LiI. I⁻ is a large anion that is easily polarised.` } },

    { h: R`Dipole moment`,
      body: [
        R`A polar bond has a <b>dipole moment</b> \(\mu = q\times d\) (unit: debye, D). For a molecule, add the bond dipoles as vectors, including lone-pair effects.`,
        R`Symmetric molecules can have zero dipole moment even with polar bonds, because the bond dipoles cancel: CO₂ (linear), BF₃ (trigonal planar), CH₄ and CCl₄ (tetrahedral).`,
        R`H₂O (bent) and NH₃ (pyramidal) are polar. The % ionic character of a bond = (observed μ ÷ μ for a fully ionic bond) × 100.`
      ] },

    { h: R`VSEPR: predicting shapes`,
      body: [
        R`<b>Valence Shell Electron Pair Repulsion</b>: electron pairs around a central atom repel each other and spread out as far apart as possible.`,
        R`Count the pairs (bond pairs + lone pairs): 2 → linear (180°); 3 → trigonal planar (120°); 4 → tetrahedral (109.5°); 5 → trigonal bipyramidal; 6 → octahedral.`,
        R`Lone pairs repel more than bond pairs (lp–lp > lp–bp > bp–bp), so they squeeze the bond angles: CH₄ 109.5°, NH₃ 107° (pyramidal), H₂O 104.5° (bent). The shape is named from the atoms only, not the lone pairs.`
      ],
      analogy: R`Tie balloons together at their necks: 2 balloons point in opposite directions, 3 spread out in a flat triangle, 4 make a tetrahedron. Electron pairs arrange themselves the same way.`,
      points: [R`Common shapes: SF₄ see-saw, ClF₃ T-shaped, XeF₂ linear, XeF₄ square planar, BrF₅ square pyramidal.`] },

    { h: R`Valence bond theory and hybridisation`,
      body: [
        R`In <b>valence bond theory</b>, a covalent bond forms when half-filled orbitals of two atoms overlap. Head-on overlap gives a <b>σ bond</b> (strong); side-on overlap of p orbitals gives a <b>π bond</b> (weaker). A double bond = 1σ + 1π; a triple bond = 1σ + 2π.`,
        R`To explain shapes like CH₄'s four identical bonds, atomic orbitals mix to form new, identical <b>hybrid orbitals</b>.`,
        R`Number of hybrid orbitals = σ bonds + lone pairs on the central atom: 2 → sp (linear), 3 → sp² (trigonal), 4 → sp³ (tetrahedral), 5 → sp³d (trigonal bipyramidal), 6 → sp³d² (octahedral).`
      ],
      check: { q: R`What is the hybridisation of carbon in ethene (C₂H₄)?`, ans: R`sp². Each C forms 3 σ bonds (2 C–H, 1 C–C) and has no lone pairs.` } },

    { h: R`Resonance`,
      body: [
        R`Sometimes one Lewis structure can't describe a molecule properly. Ozone (O₃) can be drawn with the double bond on the left or on the right, but in reality both O–O bonds are identical.`,
        R`The real molecule is a <b>resonance hybrid</b>, a blend of all the valid structures. It is more stable than any single one. Bond order = total bonds ÷ number of positions; for example, each C–O in CO₃²⁻ has bond order 4/3.`
      ],
      analogy: R`A mule is a hybrid of a horse and a donkey. It isn't a horse one moment and a donkey the next; it is always a mule. A resonance hybrid is always the blend, not flipping between structures.` },

    { h: R`Molecular orbital theory`,
      body: [
        R`In <b>MOT</b>, atomic orbitals combine into molecular orbitals spread over the whole molecule: <b>bonding</b> MOs (lower energy) and <b>antibonding</b> MOs (marked *, higher energy).`,
        R`<b>Bond order</b> \(= \tfrac12(N_b - N_a)\). A higher bond order means a stronger and shorter bond; zero means no molecule (He₂ doesn't exist).`,
        R`Filling order up to N₂: σ1s, σ*1s, σ2s, σ*2s, (π2pₓ = π2p_y), σ2p_z, … For O₂ and F₂, σ2p_z comes before the π2p pair. Unpaired electrons make the molecule <b>paramagnetic</b>.`
      ],
      points: [R`Bond orders: N₂ = 3, O₂ = 2, F₂ = 1, O₂⁺ = 2.5, O₂⁻ = 1.5, O₂²⁻ = 1.`, R`O₂ is paramagnetic (2 unpaired π* electrons), which simple Lewis structures can't explain.`] },

    { h: R`Hydrogen bonding`,
      body: [
        R`When H is bonded to a small, very electronegative atom (F, O or N), it becomes strongly δ+ and is attracted to a lone pair on another F, O or N. This attraction is a <b>hydrogen bond</b>.`,
        R`<b>Intermolecular</b> H-bonds (between molecules) raise boiling points: H₂O is a liquid while H₂S is a gas; HF boils far above HCl. <b>Intramolecular</b> H-bonds (within a molecule, as in o-nitrophenol) do the opposite and lower the boiling point.`,
        R`H-bonds explain why ice floats (an open cage-like structure), and they hold DNA's two strands together.`
      ],
      analogy: R`Hydrogen bonds are like Velcro between molecules: each is weak, but millions of them hold things together firmly.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Draw the Lewis structure of ammonia (NH₃). How many bond pairs and lone pairs does N have?`,
      steps: [R`N has 5 valence electrons; each H brings 1.`, R`N shares one electron with each of the three H atoms, giving 3 bond pairs.`, R`The remaining 2 electrons on N form 1 lone pair, completing N's octet.`],
      ans: R`3 bond pairs and 1 lone pair` },
    { level: 1, t: 1, q: R`Which of NaCl, HCl and CH₄ has an ionic bond? Explain briefly.`,
      steps: [R`Ionic bonds form between a metal and a non-metal through electron transfer.`, R`Na (metal) gives an electron to Cl. HCl and CH₄ are non-metals sharing electrons.`],
      ans: R`NaCl. HCl and CH₄ are covalent.` },
    { level: 1, t: 4, q: R`Predict the shapes and bond angles of BeCl₂, BF₃ and CH₄.`,
      steps: [R`BeCl₂: 2 bond pairs, no lone pairs.`, R`BF₃: 3 bond pairs.`, R`CH₄: 4 bond pairs.`],
      ans: R`Linear (180°); trigonal planar (120°); tetrahedral (109.5°)` },
    { level: 3, t: 7, q: R`Compare the bond orders and magnetic behaviour of N₂, N₂⁺ and N₂⁻.`,
      steps: [R`N₂ (14 e): all bonding orbitals filled, \(N_b = 10\), \(N_a = 4\), BO = 3, no unpaired electrons.`, R`N₂⁺ (13 e): one fewer bonding electron, BO = 2.5, one unpaired electron.`, R`N₂⁻ (15 e): one electron in π*, BO = 2.5, one unpaired electron.`],
      ans: R`N₂: 3 (diamagnetic). N₂⁺ and N₂⁻: 2.5 (paramagnetic). N₂⁺ is slightly more stable than N₂⁻, which has an electron in an antibonding orbital.` },
    { level: 3, t: 5, q: R`Describe the hybridisation and shape of PCl₅. Are all the P–Cl bonds the same length?`,
      steps: [R`P forms 5 σ bonds with no lone pairs, so sp³d hybridisation.`, R`The shape is trigonal bipyramidal: 3 equatorial bonds at 120° and 2 axial bonds at 90° to them.`, R`Axial bonds suffer more repulsion (three bonds at 90°), so they are longer.`],
      ans: R`sp³d, trigonal bipyramidal; the 2 axial bonds are longer than the 3 equatorial bonds` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`A bond formed by complete transfer of electrons is:`,
      options: [R`covalent`, R`ionic`, R`metallic`, R`a hydrogen bond`], correct: 1,
      solution: R`Electron transfer makes oppositely charged ions that attract: an ionic bond.` },
    { level: 1, type: 'mcq', q: R`How many lone pairs does the oxygen atom in H₂O have?`,
      options: [R`0`, R`1`, R`2`, R`3`], correct: 2,
      solution: R`O has 6 valence electrons: 2 used in bonds and 4 left as 2 lone pairs.` },
    { level: 1, type: 'mcq', q: R`The shape of a CO₂ molecule is:`,
      options: [R`linear`, R`bent`, R`trigonal planar`, R`tetrahedral`], correct: 0,
      solution: R`C has two double bonds and no lone pairs, so it is linear (180°).` },
    { level: 1, type: 'mcq', q: R`The most electronegative element is:`,
      options: [R`oxygen`, R`nitrogen`, R`chlorine`, R`fluorine`], correct: 3,
      solution: R`Fluorine (4.0 on the Pauling scale).` },
    { level: 1, type: 'num', q: R`What is the H–C–H bond angle (in degrees) in methane?`,
      answer: 109.5, tol: 0.1, unit: '°',
      solution: R`Tetrahedral angle, 109.5° (more precisely 109° 28′).` },
    { level: 1, type: 'num', q: R`How many σ bonds are in an ethene molecule (C₂H₄)?`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`4 C–H σ bonds + 1 C–C σ bond = 5 (plus 1 π bond).` },
    { level: 2, type: 'mcq', q: R`The hybridisation of carbon in ethyne (C₂H₂) is:`,
      options: [R`sp³`, R`sp²`, R`sp`, R`sp³d`], correct: 2,
      solution: R`Each C forms 2 σ bonds (and 2 π bonds), so it is sp and linear.` },
    { level: 2, type: 'mcq', q: R`The shape of ammonia (NH₃) is:`,
      options: [R`planar`, R`pyramidal`, R`tetrahedral`, R`bent`], correct: 1,
      solution: R`3 bond pairs + 1 lone pair: the electron pairs are tetrahedral, but the atoms form a trigonal pyramid.` },
    { level: 2, type: 'mcq', q: R`Which of these molecules is paramagnetic?`,
      options: [R`N₂`, R`F₂`, R`H₂`, R`O₂`], correct: 3,
      solution: R`O₂ has two unpaired electrons in its π* orbitals.` },
    { level: 2, type: 'mcq', q: R`Which compound has the highest lattice enthalpy?`,
      options: [R`MgO`, R`NaCl`, R`KCl`, R`NaI`], correct: 0,
      solution: R`MgO has doubly charged, small ions, giving a much stronger attraction.` },
    { level: 2, type: 'num', q: R`What is the bond order of N₂?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`\(\tfrac12(10 - 4) = 3\), a triple bond.` },
    { level: 2, type: 'num', q: R`How many lone pairs are on the Xe atom in XeF₂?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Xe has 8 valence electrons: 2 used for bonds, 6 left as 3 lone pairs (linear shape).` },
    { level: 2, type: 'num', q: R`The observed dipole moment of HCl is 1.03 D, while a 100% ionic H⁺Cl⁻ would give 6.12 D. Find the percentage ionic character.`,
      answer: 16.83, tol: 0.05, unit: '%',
      solution: R`\(1.03/6.12\times100 \approx 16.8\%\).` },
    { level: 3, type: 'mcq', q: R`The bond order of the peroxide ion, O₂²⁻, is:`,
      options: [R`2`, R`1.5`, R`1`, R`2.5`], correct: 2,
      solution: R`18 electrons: \(N_b = 10\), \(N_a = 8\), so BO = 1.` },
    { level: 3, type: 'mcq', q: R`Which of these molecules has zero dipole moment?`,
      options: [R`NH₃`, R`H₂O`, R`CHCl₃`, R`BF₃`], correct: 3,
      solution: R`BF₃ is trigonal planar and symmetric, so its three B–F bond dipoles cancel.` },
    { level: 3, type: 'num', q: R`How many 90° F–S–F bond angles are there in SF₆?`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`In an octahedron, each of the 6 F atoms is at 90° to 4 others: \(6\times4/2 = 12\).` },
    { level: 3, type: 'num', q: R`What is the bond order of nitric oxide, NO?`,
      answer: 2.5, tol: 0.001, unit: '',
      solution: R`NO has 15 electrons, one more than N₂ (BO 3), and the extra one goes into π*: BO = 2.5.` }
  ]
});
