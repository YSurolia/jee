// Lesson: Organic Compounds Containing Oxygen.
var R = String.raw;
JEE.lesson('chemistry', 'oxygen-compounds', {
  theory: [
    { h: R`Alcohols: types and properties`,
      body: [
        R`<b>Alcohols</b> contain an –OH group on an sp³ carbon. Like haloalkanes, they are <b>primary</b> (RCH₂OH), <b>secondary</b> (R₂CHOH) or <b>tertiary</b> (R₃COH).`,
        R`They form hydrogen bonds, so they boil much higher than alkanes of similar mass, and small alcohols mix completely with water.`,
        R`Alcohols are very weak acids (weaker than water). They react with sodium metal to give H₂ gas and sodium alkoxide.`
      ],
      analogy: R`The –OH group is like a "water-friendly hand". Small alcohols like ethanol have one hand and a small body, so they dissolve completely; long-chain alcohols are mostly oily body, so they don't.`,
      check: { q: R`Classify butan-2-ol: primary, secondary or tertiary?`, ans: R`Secondary: the C carrying –OH is bonded to two other carbons.` } },

    { h: R`Reactions of alcohols: Lucas test, dehydration, oxidation`,
      body: [
        R`<b>Lucas test</b> (conc. HCl + ZnCl₂): 3° alcohols turn cloudy at once, 2° in about 5 minutes, and 1° not at room temperature. The speed follows carbocation stability.`,
        R`<b>Dehydration</b> with conc. H₂SO₄ and heat gives an alkene (the more substituted one, by Saytzeff's rule). Ease: 3° > 2° > 1°.`,
        R`<b>Oxidation</b> (acidified K₂Cr₂O₇ or KMnO₄): 1° alcohol → aldehyde → carboxylic acid; 2° alcohol → ketone; 3° alcohols resist oxidation. With dichromate the colour changes from orange to green, which is the basis of breath-alcohol tests. PCC stops a 1° alcohol at the aldehyde.`
      ],
      points: [R`Heating a 2° alcohol with Cu at 573 K dehydrogenates it to a ketone; a 3° alcohol gives an alkene instead.`] },

    { h: R`Phenols`,
      body: [
        R`In a <b>phenol</b> the –OH is attached directly to a benzene ring. Phenol is a weak acid, but much more acidic than alcohols: it reacts with NaOH (alcohols don't), because the phenoxide ion is stabilised by resonance with the ring.`,
        R`Electron-withdrawing groups (–NO₂) increase its acidity; electron-donating groups (–CH₃) decrease it. 2,4,6-Trinitrophenol (picric acid) is almost as strong as a mineral acid.`,
        R`–OH strongly activates the ring towards electrophiles at the ortho and para positions. Bromine water gives 2,4,6-tribromophenol (a white precipitate) at once; dilute HNO₃ gives o- and p-nitrophenols.`,
        R`<b>Reimer–Tiemann reaction:</b> phenol + CHCl₃ + NaOH gives salicylaldehyde (–CHO at the ortho position). <b>Kolbe's reaction:</b> sodium phenoxide + CO₂ gives salicylic acid, used to make aspirin.`
      ],
      mistake: R`Thinking phenol reacts with NaHCO₃. It doesn't; it is weaker than carbonic acid. Carboxylic acids do react with NaHCO₃ (fizzing).` },

    { h: R`Ethers`,
      body: [
        R`<b>Ethers</b> have an oxygen bridging two carbon groups: R–O–R′. The C–O–C angle is about 111.7°, slightly more than tetrahedral, because the bulky alkyl groups repel each other.`,
        R`They can't H-bond with each other, so they boil much lower than isomeric alcohols. They are fairly unreactive, which makes them good solvents (diethyl ether).`,
        R`<b>Williamson synthesis:</b> sodium alkoxide + primary alkyl halide → ether (by SN2). Use a 1° halide; a 3° halide would just eliminate.`
      ] },

    { h: R`Aldehydes and ketones: nucleophilic addition`,
      body: [
        R`Both contain the <b>carbonyl group</b> C=O. In aldehydes it is at the end of the chain (–CHO); in ketones it is between two carbons (R–CO–R′). The C=O is polar: C is δ+ and O is δ−.`,
        R`Their typical reaction is <b>nucleophilic addition</b>: a nucleophile attacks the δ+ carbon. HCN gives cyanohydrins; NaHSO₃ gives bisulphite addition compounds; NH₂–Z derivatives give oximes (with NH₂OH), hydrazones (NH₂NH₂) and 2,4-DNP derivatives (orange precipitate, a test for C=O).`,
        R`Aldehydes are more reactive than ketones: they are less crowded, and they have fewer electron-donating alkyl groups. HCHO > CH₃CHO > CH₃COCH₃.`
      ],
      analogy: R`The carbonyl carbon is like a magnet with a slightly positive end: nucleophiles (electron-rich) are drawn straight to it.` },

    { h: R`More carbonyl reactions: Grignard, reduction, aldol, Cannizzaro, haloform`,
      body: [
        R`<b>Grignard reagents</b> (RMgX) add to C=O, then water gives an alcohol: HCHO → 1° alcohol, other aldehydes → 2° alcohols, ketones → 3° alcohols.`,
        R`<b>Reduction:</b> NaBH₄ or LiAlH₄ gives alcohols. <b>Clemmensen</b> (Zn–Hg/HCl) and <b>Wolff–Kishner</b> (NH₂NH₂, KOH) turn C=O all the way into CH₂.`,
        R`<b>α-Hydrogens</b> (on the carbon next to C=O) are slightly acidic. With dilute base, compounds that have them undergo <b>aldol condensation</b>, forming a β-hydroxy carbonyl compound that loses water on heating.`,
        R`Aldehydes with <b>no</b> α-H (HCHO, C₆H₅CHO) undergo the <b>Cannizzaro reaction</b> with concentrated base: one molecule is oxidised to an acid salt and the other reduced to an alcohol. <b>Haloform reaction:</b> CH₃CO– groups (and CH₃CH(OH)– groups) with I₂/NaOH give yellow iodoform (CHI₃).`
      ] },

    { h: R`Telling aldehydes and ketones apart`,
      body: [
        R`<b>Tollens' reagent</b> (ammoniacal AgNO₃): aldehydes give a silver mirror. <b>Fehling's solution</b> (blue Cu²⁺): aliphatic aldehydes give a red precipitate of Cu₂O. Ketones give neither, because they resist oxidation.`,
        R`Aromatic aldehydes such as benzaldehyde give Tollens' test but <b>not</b> Fehling's.`,
        R`<b>Iodoform test:</b> positive for methyl ketones, ethanal, ethanol and propan-2-ol.`
      ],
      check: { q: R`Which gives a silver mirror with Tollens' reagent: propanal or propanone?`, ans: R`Propanal (an aldehyde).` } },

    { h: R`Carboxylic acids and their strength`,
      body: [
        R`Carboxylic acids (–COOH) are stronger acids than phenols and alcohols, because the carboxylate ion is stabilised by resonance (two equivalent C–O bonds). They fizz with NaHCO₃, giving CO₂.`,
        R`<b>Electron-withdrawing groups</b> increase acidity: Cl₃CCOOH > Cl₂CHCOOH > ClCH₂COOH > CH₃COOH, and FCH₂COOH > ClCH₂COOH. The effect weakens as the group moves further from –COOH.`,
        R`<b>Electron-donating groups</b> decrease acidity: HCOOH > CH₃COOH > CH₃CH₂COOH. Benzoic acid (pKa 4.2) is stronger than acetic acid (4.76).`
      ],
      points: [R`Lower pKa = stronger acid. A difference of 1 pKa unit = 10 times the Ka.`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`What happens when ethanol is warmed with acidified potassium dichromate?`,
      steps: [R`The 1° alcohol is oxidised: ethanol → ethanal → ethanoic acid.`, R`Cr₂O₇²⁻ (orange) is reduced to Cr³⁺ (green).`],
      ans: R`Ethanol is oxidised to ethanal and then ethanoic acid; the colour turns from orange to green.` },
    { level: 1, t: 1, q: R`Why does phenol dissolve in NaOH solution while ethanol does not react with it?`,
      steps: [R`Phenol loses H⁺ to form phenoxide, whose negative charge spreads over the ring by resonance.`, R`Ethoxide has no such stabilisation, so ethanol is too weak an acid to react with NaOH.`],
      ans: R`Phenol is more acidic because its conjugate base is resonance-stabilised.` },
    { level: 1, t: 6, q: R`Which is the stronger acid: methanoic acid (HCOOH) or ethanoic acid (CH₃COOH)?`,
      steps: [R`The CH₃ group pushes electrons (+I), which destabilises the carboxylate ion.`],
      ans: R`Methanoic acid` },
    { level: 3, t: 1, q: R`What does phenol give when it is heated with chloroform and aqueous NaOH, followed by acid?`,
      steps: [R`CHCl₃ + OH⁻ forms dichlorocarbene (:CCl₂), an electrophile.`, R`It attacks the activated ring at the ortho position, and hydrolysis gives –CHO.`],
      ans: R`Salicylaldehyde (2-hydroxybenzaldehyde): the Reimer–Tiemann reaction` },
    { level: 3, t: 4, q: R`Ethanal is treated with CH₃MgBr, then with dilute acid. Name the product and classify it.`,
      steps: [R`CH₃⁻ (from the Grignard reagent) adds to the carbonyl carbon of CH₃CHO.`, R`Hydrolysis gives CH₃CH(OH)CH₃.`],
      ans: R`Propan-2-ol, a secondary alcohol` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The functional group of alcohols is:`,
      options: [R`–OH`, R`–CHO`, R`–COOH`, R`–O–`], correct: 0,
      solution: R`Alcohols contain a hydroxyl group on an sp³ carbon.` },
    { level: 1, type: 'mcq', q: R`Tollens' reagent gives a silver mirror with:`,
      options: [R`ketones`, R`aldehydes`, R`alcohols`, R`ethers`], correct: 1,
      solution: R`Aldehydes reduce Ag⁺ to metallic silver.` },
    { level: 1, type: 'mcq', q: R`Phenol is:`,
      options: [R`basic`, R`neutral`, R`weakly acidic`, R`as strongly acidic as HCl`], correct: 2,
      solution: R`It is a weak acid (pKa about 10), stronger than alcohols but weaker than carboxylic acids.` },
    { level: 1, type: 'mcq', q: R`Ethanol warmed with excess acidified K₂Cr₂O₇ finally gives:`,
      options: [R`ethene`, R`ethanal only`, R`methanol`, R`ethanoic acid`], correct: 3,
      solution: R`A 1° alcohol is oxidised to an aldehyde and then to a carboxylic acid.` },
    { level: 1, type: 'num', q: R`How many carbon atoms are in propanone?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Prop = 3: CH₃COCH₃.` },
    { level: 1, type: 'num', q: R`What is the molar mass (in g/mol) of ethanoic acid, CH₃COOH?`,
      answer: 60, tol: 0.01, unit: 'g/mol',
      solution: R`2(12) + 4(1) + 2(16) = 60.` },
    { level: 2, type: 'mcq', q: R`Which of these gives a positive iodoform test?`,
      options: [R`methanol`, R`ethanol`, R`propan-1-ol`, R`benzyl alcohol`], correct: 1,
      solution: R`Ethanol has the CH₃CH(OH)– group, which is oxidised to CH₃CO– and then forms CHI₃.` },
    { level: 2, type: 'mcq', q: R`Clemmensen reduction converts a C=O group into:`,
      options: [R`CH₂`, R`CH–OH`, R`COOH`, R`C=C`], correct: 0,
      solution: R`Zn–Hg/conc. HCl removes the oxygen completely.` },
    { level: 2, type: 'mcq', q: R`Which compound undergoes the Cannizzaro reaction?`,
      options: [R`CH₃CHO`, R`CH₃COCH₃`, R`HCHO`, R`CH₃CH₂CHO`], correct: 2,
      solution: R`HCHO has no α-hydrogen.` },
    { level: 2, type: 'mcq', q: R`Which is the strongest acid?`,
      options: [R`CH₃COOH`, R`ClCH₂COOH`, R`Cl₂CHCOOH`, R`Cl₃CCOOH`], correct: 3,
      solution: R`Three Cl atoms withdraw electrons most and stabilise the carboxylate the most.` },
    { level: 2, type: 'num', q: R`Two molecules of ethanal undergo aldol addition. How many carbon atoms does the product (3-hydroxybutanal) have?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`2 + 2 = 4 carbon atoms.` },
    { level: 2, type: 'num', q: R`CH₃MgBr reacts with CH₃CHO, followed by hydrolysis. How many carbon atoms does the alcohol formed have?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Propan-2-ol: 1 + 2 = 3 carbons.` },
    { level: 2, type: 'num', q: R`Acetic acid has \(K_a = 1.8\times10^{-5}\). Find its pKa.`,
      answer: 4.74, tol: 0.01, unit: '',
      solution: R`pKa = −log(1.8 × 10⁻⁵) ≈ 4.74.` },
    { level: 3, type: 'mcq', q: R`The Reimer–Tiemann reaction of phenol gives:`,
      options: [R`salicylic acid`, R`salicylaldehyde`, R`benzaldehyde`, R`benzoic acid`], correct: 1,
      solution: R`CHCl₃/NaOH puts a –CHO group at the ortho position.` },
    { level: 3, type: 'mcq', q: R`Which compound does NOT undergo aldol condensation?`,
      options: [R`CH₃CHO`, R`CH₃COCH₃`, R`HCHO`, R`CH₃CH₂CHO`], correct: 2,
      solution: R`Aldol condensation needs α-hydrogens, and HCHO has none.` },
    { level: 3, type: 'num', q: R`Ethanal and propanal are mixed with dilute NaOH. How many different aldol products (self + crossed) are possible?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`Each can act as the nucleophile (enolate) and each as the electrophile: 2 × 2 = 4.` },
    { level: 3, type: 'num', q: R`Acid A has pKa 3 and acid B has pKa 5. How many times stronger (in Ka) is A?`,
      answer: 100, tol: 0.01, unit: 'times',
      solution: R`A difference of 2 pKa units = \(10^2 = 100\) times the Ka.` }
  ]
});
