// Lesson: Some Basic Principles of Organic Chemistry.
var R = String.raw;
JEE.lesson('chemistry', 'goc', {
  theory: [
    { h: R`Carbon: four bonds and its hybrid shapes`,
      body: [
        R`Organic chemistry is the chemistry of carbon compounds. Carbon has 4 valence electrons, so it forms <b>4 bonds</b> (it is tetravalent). It also bonds strongly to itself, forming long chains and rings (<b>catenation</b>).`,
        R`Carbon's hybridisation depends on its bonds: 4 single bonds → <b>sp³</b> (tetrahedral, 109.5°, as in CH₄); one double bond → <b>sp²</b> (planar, 120°, as in C₂H₄); a triple bond or two double bonds → <b>sp</b> (linear, 180°, as in C₂H₂).`,
        R`More s-character (sp > sp² > sp³) means the carbon holds electrons more tightly: it is more electronegative, and its C–H bonds are more acidic.`
      ],
      analogy: R`Carbon is like a LEGO brick with 4 studs: it can connect to four other bricks in many ways, which is why millions of organic compounds exist.`,
      check: { q: R`What is the hybridisation of each carbon in ethyne (HC≡CH)?`, ans: R`sp: each C has two σ bonds and two π bonds.` } },

    { h: R`Classification and IUPAC naming`,
      body: [
        R`Compounds are classified as <b>acyclic</b> (open chain) or <b>cyclic</b> (alicyclic or aromatic), and by <b>functional group</b>, the atom or group that decides their reactions: –OH (alcohol), –CHO (aldehyde), >C=O (ketone), –COOH (carboxylic acid), –NH₂ (amine), –X (haloalkane)…`,
        R`<b>IUPAC name = prefix + word root + suffix.</b> Word root from the longest chain containing the functional group (meth 1, eth 2, prop 3, but 4, pent 5, hex 6…). Primary suffix: -ane, -ene or -yne. Secondary suffix from the main functional group (-ol, -al, -one, -oic acid). Substituents are prefixes, with locants as low as possible.`
      ],
      points: [R`CH₃CH₂CH₂OH = propan-1-ol; CH₃COCH₃ = propanone; CH₃COOH = ethanoic acid.`] },

    { h: R`Isomerism`,
      body: [
        R`<b>Isomers</b> have the same molecular formula but different structures or arrangements.`,
        R`<b>Structural isomers:</b> chain (different carbon skeletons), position (functional group in a different place), functional (different functional groups, like an alcohol and an ether), and metamerism.`,
        R`<b>Stereoisomers:</b> same bonds, different 3-D arrangement. <b>Geometrical</b> (cis/trans) isomers arise from restricted rotation about C=C. <b>Optical</b> isomers arise from a chiral carbon (4 different groups); a pair of non-superimposable mirror images are <b>enantiomers</b>, which rotate plane-polarised light in opposite directions.`
      ],
      analogy: R`Your left and right hands are mirror images but can't be laid on top of each other. That is chirality, and molecules can have it too.`,
      points: [R`With n chiral centres, there are at most \(2^n\) optical isomers (fewer if a meso form exists).`] },

    { h: R`Breaking bonds: homolytic and heterolytic`,
      body: [
        R`<b>Homolytic fission:</b> the bond breaks evenly, each atom keeping one electron. It gives <b>free radicals</b> (atoms with an unpaired electron). It is favoured by light, heat and non-polar conditions.`,
        R`<b>Heterolytic fission:</b> one atom takes both electrons. It gives ions: a <b>carbocation</b> (C⁺) or a <b>carbanion</b> (C⁻). It is favoured by polar solvents.`
      ] },

    { h: R`Reactive intermediates and their stability`,
      body: [
        R`<b>Carbocations</b> (positive, sp², electron-deficient) and <b>free radicals</b> are stabilised by electron-donating alkyl groups: 3° > 2° > 1° > CH₃. Resonance (allyl, benzyl) stabilises them even more.`,
        R`<b>Carbanions</b> (negative, sp³) are destabilised by alkyl groups, so their order is reversed: CH₃⁻ > 1° > 2° > 3°. Electron-withdrawing groups stabilise them.`,
        R`Carbocations can <b>rearrange</b> (a hydride or methyl shift) to form a more stable carbocation.`
      ],
      mistake: R`Using the carbocation order for carbanions. Alkyl groups push electrons in, which helps a positive centre but hurts a negative one.` },

    { h: R`Electrophiles and nucleophiles`,
      body: [
        R`<b>Electrophiles</b> ("electron-loving") are electron-poor species that accept an electron pair: H⁺, NO₂⁺, carbocations, BF₃, AlCl₃.`,
        R`<b>Nucleophiles</b> ("nucleus-loving") are electron-rich species that donate an electron pair: OH⁻, CN⁻, Cl⁻, H₂O, NH₃, alcohols.`,
        R`Most organic reactions are a nucleophile attacking an electrophilic carbon, or an electrophile attacking an electron-rich double bond or ring.`
      ],
      analogy: R`Think of a nucleophile as a person with spare change (electrons) looking for a place that needs money, and an electrophile as a shop with an empty till.` },

    { h: R`Electronic effects`,
      body: [
        R`<b>Inductive effect (I):</b> a permanent pull or push of electrons along σ bonds, which fades quickly with distance. –I groups pull: –NO₂ > –CN > –COOH > –F > –Cl > –Br > –I. +I groups push: alkyl groups.`,
        R`<b>Electromeric effect:</b> a temporary, complete shift of π electrons when an attacking reagent approaches.`,
        R`<b>Resonance (mesomeric) effect:</b> delocalisation of π electrons or lone pairs through a conjugated system. +M groups donate (–OH, –NH₂, –OR); –M groups withdraw (–NO₂, –CHO, –COOH).`,
        R`<b>Hyperconjugation:</b> σ electrons of C–H bonds next to a carbocation or double bond spread into it. More such α-H atoms means more stability (the "no-bond resonance").`
      ],
      points: [R`Acidity rises when the conjugate base is stabilised (–I, –M groups); it falls with +I or +M groups.`] },

    { h: R`Types of organic reactions`,
      body: [
        R`<b>Substitution:</b> one atom or group replaces another (CH₃Br + OH⁻ → CH₃OH + Br⁻).`,
        R`<b>Addition:</b> atoms add across a double or triple bond (C₂H₄ + Br₂ → C₂H₄Br₂).`,
        R`<b>Elimination:</b> atoms are removed to create a double bond (C₂H₅Br + alcoholic KOH → C₂H₄).`,
        R`<b>Rearrangement:</b> atoms reorganise within the molecule (carbocation shifts; NH₄CNO → urea).`
      ] }
  ],

  examples: [
    { level: 1, t: 1, q: R`Give the IUPAC names of CH₃CH₂CH₂OH, CH₃CH₂CHO and CH₃COOH.`,
      steps: [R`3-carbon alcohol with –OH on C-1: propan-1-ol.`, R`3-carbon aldehyde: propanal.`, R`2-carbon acid: ethanoic acid.`],
      ans: R`Propan-1-ol, propanal, ethanoic acid` },
    { level: 1, t: 0, q: R`Give the hybridisation of carbon in CH₄, C₂H₄ and C₂H₂.`,
      steps: [R`Count σ bonds (+ lone pairs) on each carbon: 4, 3, 2.`],
      ans: R`sp³, sp², sp` },
    { level: 1, t: 2, q: R`How many chain isomers does C₅H₁₂ have? Name them.`,
      steps: [R`Straight chain: pentane.`, R`One branch: 2-methylbutane.`, R`Two branches on the same carbon: 2,2-dimethylpropane.`],
      ans: R`3` },
    { level: 3, t: 4, q: R`Arrange these carbocations in order of stability: CH₃CH₂⁺, (CH₃)₂CH⁺, CH₂=CH–CH₂⁺ (allyl), CH₃⁺.`,
      steps: [R`Allyl is stabilised by resonance (the + charge is shared by two carbons).`, R`Among the alkyl cations: 2° > 1° > methyl (hyperconjugation and +I).`],
      ans: R`Allyl ≥ (CH₃)₂CH⁺ > CH₃CH₂⁺ > CH₃⁺ (allyl and 2° are close; the allyl cation is usually ranked higher)` },
    { level: 3, t: 2, q: R`How many stereoisomers does 2,3-dibromobutane, CH₃CHBrCHBrCH₃, have?`,
      steps: [R`It has 2 chiral carbons, so at most \(2^2 = 4\).`, R`But the two chiral centres are identical, so the (R,S) form has a mirror plane: it is a <b>meso</b> compound, identical to (S,R).`],
      ans: R`3: a pair of enantiomers and one meso form` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The valency of carbon is:`,
      options: [R`4`, R`2`, R`3`, R`6`], correct: 0,
      solution: R`It has 4 valence electrons and forms 4 bonds.` },
    { level: 1, type: 'mcq', q: R`The functional group of an aldehyde is:`,
      options: [R`–OH`, R`–CHO`, R`–COOH`, R`–CO– (within a chain)`], correct: 1,
      solution: R`Aldehydes have –CHO at the end of a chain; ketones have >C=O within it.` },
    { level: 1, type: 'mcq', q: R`The suffix used in naming alkenes is:`,
      options: [R`-ane`, R`-yne`, R`-ol`, R`-ene`], correct: 3,
      solution: R`-ene shows a C=C double bond.` },
    { level: 1, type: 'mcq', q: R`Homolytic fission of a covalent bond produces:`,
      options: [R`free radicals`, R`ions`, R`carbocations only`, R`carbanions only`], correct: 0,
      solution: R`Each atom keeps one electron, giving radicals.` },
    { level: 1, type: 'num', q: R`How many carbon atoms are in a molecule of hexane?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`hex = 6.` },
    { level: 1, type: 'num', q: R`How many chain isomers does C₅H₁₂ have?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Pentane, 2-methylbutane and 2,2-dimethylpropane.` },
    { level: 2, type: 'mcq', q: R`Which carbocation is the most stable?`,
      options: [R`CH₃⁺`, R`primary (1°)`, R`secondary (2°)`, R`tertiary (3°)`], correct: 3,
      solution: R`Three alkyl groups stabilise the charge by +I and hyperconjugation.` },
    { level: 2, type: 'mcq', q: R`Which of these is a nucleophile?`,
      options: [R`BF₃`, R`NO₂⁺`, R`NH₃`, R`AlCl₃`], correct: 2,
      solution: R`NH₃ has a lone pair to donate. The others are electron-pair acceptors.` },
    { level: 2, type: 'mcq', q: R`Which group has an electron-withdrawing inductive (−I) effect?`,
      options: [R`–CH₃`, R`–NO₂`, R`–C₂H₅`, R`–O⁻`], correct: 1,
      solution: R`–NO₂ pulls electrons strongly. Alkyl groups and –O⁻ push electrons.` },
    { level: 2, type: 'mcq', q: R`How many α-hydrogens can take part in hyperconjugation in the tert-butyl cation, (CH₃)₃C⁺?`,
      options: [R`3`, R`6`, R`9`, R`12`], correct: 2,
      solution: R`Three CH₃ groups × 3 H each = 9.` },
    { level: 2, type: 'num', q: R`How many σ bonds are in propene, CH₃–CH=CH₂?`,
      answer: 8, tol: 0.001, unit: '',
      solution: R`6 C–H bonds + 2 C–C σ bonds = 8 (plus 1 π bond).` },
    { level: 2, type: 'num', q: R`Find the degree of unsaturation of C₆H₆.`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`\(C - H/2 + 1 = 6 - 3 + 1 = 4\) (one ring + three double bonds).` },
    { level: 2, type: 'num', q: R`How many structural isomers does C₃H₈O have?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Propan-1-ol, propan-2-ol and methoxyethane.` },
    { level: 3, type: 'mcq', q: R`Which compound is optically active?`,
      options: [R`propan-2-ol`, R`ethanol`, R`methanol`, R`butan-2-ol`], correct: 3,
      solution: R`In butan-2-ol, C-2 carries H, OH, CH₃ and C₂H₅: four different groups, so it is chiral.` },
    { level: 3, type: 'mcq', q: R`The reaction CH₃CH₂Br + alcoholic KOH → CH₂=CH₂ is an example of:`,
      options: [R`elimination`, R`substitution`, R`addition`, R`rearrangement`], correct: 0,
      solution: R`HBr is removed and a double bond forms.` },
    { level: 3, type: 'num', q: R`How many stereoisomers does 2,3-dibromobutane have?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`A pair of enantiomers plus one meso form.` },
    { level: 3, type: 'num', q: R`How many structural isomers does C₄H₉Cl have?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`1-chlorobutane, 2-chlorobutane, 1-chloro-2-methylpropane and 2-chloro-2-methylpropane.` }
  ]
});
