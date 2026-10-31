// Lesson: Organic Compounds Containing Halogens.
var R = String.raw;
JEE.lesson('chemistry', 'haloalkanes', {
  theory: [
    { h: R`Haloalkanes and haloarenes: classification and preparation`,
      body: [
        R`Replace an H in a hydrocarbon with a halogen (F, Cl, Br, I) and you get a <b>haloalkane</b> (R–X) or, on a benzene ring, a <b>haloarene</b> (Ar–X).`,
        R`Haloalkanes are <b>primary (1°)</b>, <b>secondary (2°)</b> or <b>tertiary (3°)</b> depending on how many carbons are attached to the carbon carrying X: CH₃CH₂Cl is 1°, (CH₃)₂CHCl is 2°, (CH₃)₃CCl is 3°.`,
        R`<b>From alcohols:</b> with HX (with ZnCl₂ for HCl), PCl₃, PCl₅, or best of all <b>SOCl₂</b> (its by-products SO₂ and HCl are gases, leaving a pure product). <b>From alkenes:</b> adding HX or X₂. <b>Halogen exchange:</b> Finkelstein (R–Cl + NaI in acetone → R–I) and Swarts (R–Br + AgF → R–F). <b>Haloarenes:</b> from diazonium salts (Sandmeyer) or by direct halogenation with a Lewis acid.`
      ],
      analogy: R`Halogens are like "handles" stuck onto a carbon chain. Chemists grab these handles to swap in other groups, which makes haloalkanes very useful starting materials.`,
      check: { q: R`Is (CH₃)₂CHBr a primary, secondary or tertiary haloalkane?`, ans: R`Secondary: the C carrying Br is attached to two other carbons.` } },

    { h: R`The C–X bond and physical properties`,
      body: [
        R`Halogens are more electronegative than carbon, so the C–X bond is <b>polar</b>: C becomes δ+ and X becomes δ−. The δ+ carbon attracts electron-rich nucleophiles.`,
        R`Going down the group (C–F → C–I), the bond gets longer and weaker, so reactivity is R–I > R–Br > R–Cl > R–F.`,
        R`Boiling points rise with molecular size (stronger van der Waals forces): CH₃F < CH₃Cl < CH₃Br < CH₃I. For isomers, branching lowers the boiling point. Haloalkanes are only slightly soluble in water, because they can't hydrogen-bond with it.`
      ],
      points: [R`Dipole moment order: CH₃Cl > CH₃F > CH₃Br > CH₃I (charge × bond length is largest for C–Cl).`] },

    { h: R`Nucleophilic substitution: SN2 and SN1`,
      body: [
        R`A nucleophile (OH⁻, CN⁻, NH₃…) replaces the halogen: R–X + Nu⁻ → R–Nu + X⁻.`,
        R`<b>SN2</b> (bimolecular, one step): the nucleophile attacks from the side opposite the halogen while X leaves. Rate = k[RX][Nu]. The configuration flips like an umbrella turning inside out (<b>Walden inversion</b>). It is fastest for CH₃X and 1°, and slowest for 3° (crowding blocks the backside attack).`,
        R`<b>SN1</b> (unimolecular, two steps): X leaves first, forming a carbocation, which the nucleophile then attacks. Rate = k[RX]. It is fastest for 3° (and benzyl or allyl) halides, which form stable carbocations, and is favoured by polar protic solvents. A chiral substrate gives a mostly <b>racemic</b> product (attack from both faces).`
      ],
      analogy: R`SN2 is like a relay baton handover: the new runner grabs the baton as the old one lets go. SN1 is like someone leaving a chair first; only then does the next person sit down.`,
      mistake: R`Expecting 3° haloalkanes to react fast by SN2. They are too crowded; they react by SN1 (or eliminate).` },

    { h: R`Elimination reactions`,
      body: [
        R`With a strong base in alcohol (alcoholic KOH), H and X are removed from neighbouring carbons, forming an alkene: this is <b>β-elimination</b> (dehydrohalogenation).`,
        R`<b>Saytzeff's rule:</b> when more than one alkene is possible, the more substituted (more alkyl groups on the C=C) alkene is the major product, because it is more stable.`,
        R`Substitution and elimination compete: aqueous KOH favours substitution (giving an alcohol); alcoholic KOH and heat favour elimination (giving an alkene). 3° halides eliminate most readily.`
      ],
      check: { q: R`What is the major product of 2-bromobutane with alcoholic KOH?`, ans: R`But-2-ene (more substituted), with but-1-ene as the minor product.` } },

    { h: R`Reactions with metals, and haloarenes`,
      body: [
        R`<b>Wurtz reaction:</b> 2R–X + 2Na (dry ether) → R–R. <b>Grignard reagent:</b> R–X + Mg (dry ether) → RMgX, a powerful carbon nucleophile used to build bigger molecules.`,
        R`<b>Haloarenes</b> are much less reactive towards nucleophiles: the C–X bond gains partial double-bond character from resonance with the ring, the carbon is sp² (bond shorter and stronger), and the phenyl cation is unstable. Electron-withdrawing groups (–NO₂) at the ortho/para positions make them more reactive.`,
        R`In electrophilic substitution, the halogen on a benzene ring deactivates it slightly but directs new groups to the ortho and para positions.`
      ] },

    { h: R`Polyhalogen compounds and the environment`,
      body: [
        R`<b>Dichloromethane</b>: solvent and paint remover. <b>Chloroform (CHCl₃)</b>: once an anaesthetic. In light and air it slowly oxidises to poisonous phosgene (COCl₂), so it is stored in dark bottles filled to the top. <b>Iodoform (CHI₃)</b>: yellow solid, used as an antiseptic. <b>CCl₄</b>: solvent, but toxic and harmful to the ozone layer.`,
        R`<b>Freons</b> (CFCs, like CCl₂F₂) were used in fridges and aerosols. In the stratosphere, UV light frees Cl atoms from them, which destroy ozone in a chain reaction.`,
        R`<b>DDT</b> is a powerful insecticide, but it does not break down easily, so it builds up in food chains (biomagnification) and harms birds and fish. Many countries have banned it.`
      ],
      analogy: R`One chlorine atom from a CFC can destroy thousands of ozone molecules, like a single spark that keeps lighting fires because it is never used up.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Classify as 1°, 2° or 3°: CH₃CH₂Cl, (CH₃)₂CHCl, (CH₃)₃CCl.`,
      steps: [R`Count the carbons attached to the carbon carrying Cl: 1, 2 and 3.`],
      ans: R`1°, 2°, 3°` },
    { level: 1, t: 1, q: R`Why do the boiling points rise in the order CH₃F < CH₃Cl < CH₃Br < CH₃I?`,
      steps: [R`Going down the group, the halogen atom gets bigger and heavier.`, R`Bigger electron clouds give stronger van der Waals forces between molecules.`],
      ans: R`Increasing size and molar mass lead to stronger intermolecular forces.` },
    { level: 1, t: 0, q: R`What does bromoethane give with (a) aqueous KOH (b) KCN (c) AgCN?`,
      steps: [R`(a) OH⁻ replaces Br.`, R`(b) CN⁻ (ionic) attacks through carbon.`, R`(c) AgCN is covalent, so attack happens through nitrogen.`],
      ans: R`(a) Ethanol (b) Propanenitrile, CH₃CH₂CN (c) Ethyl isocyanide, CH₃CH₂NC` },
    { level: 2, t: 2, q: R`(R)-2-bromobutane reacts with OH⁻ by an SN2 mechanism. What is the product, and what is its configuration?`,
      steps: [R`SN2 = backside attack, causing Walden inversion.`, R`So the spatial arrangement flips: R becomes S (here the priorities stay in the same order).`],
      ans: R`(S)-butan-2-ol` },
    { level: 3, t: 2, q: R`Arrange in order of SN1 reactivity: chlorobenzene, chloroethane, 2-chloro-2-methylpropane, benzyl chloride.`,
      steps: [R`SN1 depends on the stability of the carbocation formed.`, R`The 3° cation and the benzyl cation (resonance) are the most stable; ethyl (1°) is poor; the phenyl cation essentially doesn't form.`],
      ans: R`(CH₃)₃CCl ≈ C₆H₅CH₂Cl > CH₃CH₂Cl > C₆H₅Cl` },
    { level: 3, t: 3, q: R`What are the major and minor products of 2-bromo-2-methylbutane with alcoholic KOH?`,
      steps: [R`H can be removed from C-1 or C-3 (the carbons next to C-2).`, R`Removing it from C-3 gives (CH₃)₂C=CHCH₃ (trisubstituted); from C-1 gives CH₂=C(CH₃)CH₂CH₃ (disubstituted).`, R`Saytzeff: the more substituted alkene is the major product.`],
      ans: R`Major: 2-methylbut-2-ene. Minor: 2-methylbut-1-ene.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`(CH₃)₃CCl is a:`,
      options: [R`tertiary haloalkane`, R`primary haloalkane`, R`secondary haloalkane`, R`haloarene`], correct: 0,
      solution: R`Its C–Cl carbon is attached to three other carbons.` },
    { level: 1, type: 'mcq', q: R`Bromoethane reacts with aqueous KOH to give:`,
      options: [R`ethene`, R`ethanol`, R`ethane`, R`diethyl ether`], correct: 1,
      solution: R`Aqueous OH⁻ substitutes for Br.` },
    { level: 1, type: 'mcq', q: R`The best reagent for converting an alcohol into an alkyl chloride is:`,
      options: [R`NaCl`, R`Cl₂`, R`HClO₄`, R`SOCl₂`], correct: 3,
      solution: R`SOCl₂ gives gaseous by-products (SO₂, HCl), leaving a pure product.` },
    { level: 1, type: 'mcq', q: R`Iodoform (CHI₃) is used as:`,
      options: [R`an anaesthetic`, R`an antiseptic`, R`a refrigerant`, R`an insecticide`], correct: 1,
      solution: R`It releases iodine slowly, which kills germs.` },
    { level: 1, type: 'num', q: R`DDT has the formula C₁₄H₉Cl₅. How many chlorine atoms does each molecule contain?`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`Cl₅ means 5 chlorine atoms.` },
    { level: 1, type: 'num', q: R`How many chlorine atoms are in a molecule of chloroform?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Chloroform is CHCl₃.` },
    { level: 2, type: 'mcq', q: R`An SN2 reaction at a chiral carbon leads to:`,
      options: [R`retention of configuration`, R`racemisation`, R`no change`, R`inversion of configuration`], correct: 3,
      solution: R`Backside attack turns the molecule inside out (Walden inversion).` },
    { level: 2, type: 'mcq', q: R`The rate of an SN1 reaction depends on:`,
      options: [R`the concentration of the substrate only`, R`the concentration of the nucleophile only`, R`both`, R`neither`], correct: 0,
      solution: R`The slow step is the substrate ionising: rate = k[RX].` },
    { level: 2, type: 'mcq', q: R`Freons (CFCs) are harmful mainly because they:`,
      options: [R`cause acid rain`, R`deplete the ozone layer`, R`cause global cooling`, R`pollute rivers`], correct: 1,
      solution: R`They release Cl atoms in the stratosphere, which destroy ozone.` },
    { level: 2, type: 'mcq', q: R`The general formula of a Grignard reagent is:`,
      options: [R`RLi`, R`R₂Mg`, R`RMgX`, R`RNa`], correct: 2,
      solution: R`Made from R–X and Mg in dry ether.` },
    { level: 2, type: 'num', q: R`How many structural isomers does C₃H₇Cl have?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`1-chloropropane and 2-chloropropane.` },
    { level: 2, type: 'num', q: R`Bromoethane undergoes the Wurtz reaction. How many carbon atoms does the product have?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`Two ethyl groups join: butane, C₄H₁₀.` },
    { level: 2, type: 'num', q: R`An SN2 reaction has rate = k[RX][Nu]. What is its overall order?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`1 + 1 = 2.` },
    { level: 3, type: 'mcq', q: R`Chlorobenzene is much less reactive than chloroethane towards nucleophiles mainly because:`,
      options: [R`its C–Cl bond is weaker`, R`resonance gives its C–Cl bond partial double-bond character`, R`chlorine is larger in chlorobenzene`, R`its C–Cl bond is ionic`], correct: 1,
      solution: R`Resonance with the ring (and the sp² carbon) makes the C–Cl bond shorter and stronger.` },
    { level: 3, type: 'mcq', q: R`The major product of 2-bromo-2-methylbutane with alcoholic KOH is:`,
      options: [R`2-methylbutan-2-ol`, R`3-methylbut-1-ene`, R`2-methylbut-1-ene`, R`2-methylbut-2-ene`], correct: 3,
      solution: R`Saytzeff's rule: the more substituted alkene is the major product.` },
    { level: 3, type: 'num', q: R`Including geometrical isomers, how many alkenes can form when 2-bromobutane is heated with alcoholic KOH?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`But-1-ene, cis-but-2-ene and trans-but-2-ene.` },
    { level: 3, type: 'num', q: R`How many optical isomers does 2-chlorobutane have?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`One chiral carbon (C-2), so 2 enantiomers.` }
  ]
});
