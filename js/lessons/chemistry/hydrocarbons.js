// Lesson: Hydrocarbons.
var R = String.raw;
JEE.lesson('chemistry', 'hydrocarbons', {
  theory: [
    { h: R`Alkanes: the saturated hydrocarbons`,
      body: [
        R`<b>Hydrocarbons</b> contain only C and H. <b>Alkanes</b> have only single bonds (they are saturated): \(C_nH_{2n+2}\). Examples: methane, ethane, propane (LPG), butane.`,
        R`<b>Preparation:</b> hydrogenating alkenes/alkynes (with Ni or Pt); the <b>Wurtz reaction</b> (2RX + 2Na → R–R); Kolbe electrolysis of carboxylate salts; and decarboxylation (sodium salt of an acid + soda lime → alkane with one carbon less).`,
        R`<b>Conformations:</b> rotation about a C–C single bond gives different arrangements. In ethane, the <b>staggered</b> form (H atoms as far apart as possible) is more stable than the <b>eclipsed</b> form, by about 12.5 kJ/mol. Newman projections show this.`,
        R`<b>Halogenation:</b> in sunlight, alkanes react with Cl₂ by a free-radical chain (initiation, propagation, termination): CH₄ → CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄.`
      ],
      analogy: R`Alkanes are called "paraffins" (little affinity) because they are quite unreactive. That is why paraffin wax candles sit on your shelf for years unchanged.`,
      points: [R`Ease of replacing H in halogenation: 3° > 2° > 1°.`] },

    { h: R`Alkenes: structure and geometrical isomerism`,
      body: [
        R`<b>Alkenes</b> have one C=C double bond: \(C_nH_{2n}\). The double bond is a σ bond plus a π bond. The π bond is weaker and exposed, so alkenes are much more reactive than alkanes.`,
        R`Since the double bond can't rotate, alkenes with two different groups on each double-bonded carbon show <b>geometrical (cis–trans) isomerism</b>: cis-but-2-ene and trans-but-2-ene.`,
        R`<b>Preparation:</b> dehydration of alcohols (conc. H₂SO₄, heat); dehydrohalogenation of haloalkanes (alcoholic KOH); partial reduction of alkynes (Lindlar catalyst gives cis; Na/liquid NH₃ gives trans).`
      ],
      check: { q: R`Does but-1-ene (CH₂=CH–CH₂CH₃) show geometrical isomerism?`, ans: R`No. One double-bonded carbon has two identical groups (two H atoms).` } },

    { h: R`Reactions of alkenes: addition`,
      body: [
        R`Alkenes add reagents across the double bond. <b>H₂</b> (with Ni) gives an alkane. <b>Br₂</b> gives a dibromide; the red-brown bromine water is decolourised, which is the test for unsaturation. <b>H₂O</b> (with acid) gives an alcohol.`,
        R`<b>Markovnikov's rule:</b> when HX adds to an unsymmetrical alkene, H goes to the carbon that already has more H atoms, because this gives the more stable carbocation. Propene + HBr → 2-bromopropane.`,
        R`<b>Peroxide (Kharasch) effect:</b> with HBr only, in the presence of peroxide, addition goes the anti-Markovnikov way through free radicals: propene → 1-bromopropane.`,
        R`<b>Ozonolysis:</b> O₃ followed by Zn/H₂O cuts the C=C and puts an =O on each carbon. The products reveal where the double bond was. <b>Polymerisation:</b> many alkene units join: ethene → polythene.`
      ],
      analogy: R`Markovnikov's rule is sometimes remembered as "the rich get richer": the carbon that already has more hydrogens gets the new H.`,
      mistake: R`Applying the peroxide effect to HCl or HI. It works only with HBr.` },

    { h: R`Alkynes`,
      body: [
        R`<b>Alkynes</b> have a C≡C triple bond (1σ + 2π): \(C_nH_{2n-2}\). Ethyne (acetylene) is used in welding torches.`,
        R`The H on a terminal alkyne (≡C–H) is weakly <b>acidic</b>, because the sp carbon (50% s-character) holds electrons tightly. It reacts with Na or NaNH₂ to form acetylides. Alkanes and alkenes do not.`,
        R`<b>Additions</b> happen twice (once for each π bond). Hydration with HgSO₄/H₂SO₄ gives a carbonyl compound: ethyne → ethanal; other alkynes → ketones. <b>Cyclic polymerisation:</b> 3 ethyne → benzene (red-hot iron tube).`
      ] },

    { h: R`Benzene and aromaticity`,
      body: [
        R`<b>Benzene</b> (C₆H₆) is a flat ring of 6 carbons. Its 6 π electrons are spread evenly over the whole ring (resonance), so all C–C bonds are the same length, between a single and a double bond.`,
        R`<b>Hückel's rule:</b> a molecule is <b>aromatic</b> if it is cyclic, planar and fully conjugated, with \((4n + 2)\) π electrons (2, 6, 10…). Aromatic rings are unusually stable.`,
        R`So benzene prefers <b>substitution</b> (keeping the stable ring) to addition. In <b>electrophilic substitution</b>, an electrophile attacks the ring, then H⁺ is lost. Examples: nitration (HNO₃ + H₂SO₄ → NO₂⁺), sulphonation (SO₃), halogenation (X₂ + FeX₃) and Friedel–Crafts alkylation/acylation (RCl or RCOCl + AlCl₃).`
      ],
      analogy: R`The 6 π electrons in benzene are like a ring of friends holding hands in a circle. Breaking the circle (addition) is costly, so benzene would rather swap one friend (substitution).` },

    { h: R`Directive influence of substituents`,
      body: [
        R`A group already on the ring decides where the next group goes, and how fast.`,
        R`<b>Ortho/para directors that activate the ring:</b> –OH, –NH₂, –OR, –CH₃. They push electrons into the ring (+M or +I), especially at the o and p positions.`,
        R`<b>Meta directors that deactivate the ring:</b> –NO₂, –CN, –CHO, –COOH, –SO₃H. They pull electrons out, leaving the meta position relatively richer.`,
        R`<b>Halogens</b> are special: they deactivate the ring (–I) but still direct ortho/para (+M).`
      ],
      points: [R`Reactivity: phenol > toluene > benzene > chlorobenzene > nitrobenzene.`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`What does methane give with chlorine in sunlight? What kind of reaction is this?`,
      steps: [R`A Cl atom replaces an H: CH₄ + Cl₂ → CH₃Cl + HCl.`, R`With excess Cl₂ the substitution continues to CH₂Cl₂, CHCl₃ and CCl₄.`],
      ans: R`Chloromethane (and more substituted products); a free-radical substitution` },
    { level: 1, t: 1, q: R`How can you tell ethene from ethane using bromine water?`,
      steps: [R`Ethene's C=C adds Br₂, so the red-brown colour disappears.`, R`Ethane has no π bond, so the colour stays.`],
      ans: R`Ethene decolourises bromine water; ethane does not.` },
    { level: 1, t: 3, q: R`Is benzene aromatic according to Hückel's rule?`,
      steps: [R`Cyclic ✓, planar ✓, fully conjugated ✓.`, R`It has 6 π electrons, which is \(4n + 2\) with n = 1 ✓`],
      ans: R`Yes` },
    { level: 3, t: 1, q: R`An alkene gives propanone (CH₃COCH₃) and methanal (HCHO) on ozonolysis. Identify the alkene.`,
      steps: [R`Ozonolysis turns C=C into two C=O groups. Join the two carbonyl carbons back with a double bond.`, R`(CH₃)₂C=O + O=CH₂ gives (CH₃)₂C=CH₂.`],
      ans: R`2-methylpropene` },
    { level: 3, t: 4, q: R`What forms when phenol is treated with bromine water? Why does this happen so easily, without a catalyst?`,
      steps: [R`–OH strongly activates the ring by donating electrons (+M) to the ortho and para positions.`, R`So all three of these positions are brominated at once, even without FeBr₃.`],
      ans: R`2,4,6-tribromophenol, a white precipitate` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The general formula of the alkanes is:`,
      options: [R`\(C_nH_{2n+2}\)`, R`\(C_nH_{2n}\)`, R`\(C_nH_{2n-2}\)`, R`\(C_nH_n\)`], correct: 0,
      solution: R`Saturated hydrocarbons: \(C_nH_{2n+2}\).` },
    { level: 1, type: 'mcq', q: R`Bromine water is decolourised by:`,
      options: [R`ethane`, R`ethene`, R`methane`, R`benzene (without a catalyst)`], correct: 1,
      solution: R`Ethene's C=C adds Br₂.` },
    { level: 1, type: 'mcq', q: R`Complete hydrogenation of ethyne gives:`,
      options: [R`ethene`, R`methane`, R`benzene`, R`ethane`], correct: 3,
      solution: R`Adding 2 H₂ across the triple bond gives ethane.` },
    { level: 1, type: 'mcq', q: R`Benzene mainly undergoes:`,
      options: [R`addition`, R`nucleophilic substitution`, R`electrophilic substitution`, R`elimination`], correct: 2,
      solution: R`Substitution keeps the stable aromatic ring.` },
    { level: 1, type: 'num', q: R`How many hydrogen atoms are in butane, C₄H₁₀?`,
      answer: 10, tol: 0.001, unit: '',
      solution: R`\(2n + 2 = 10\).` },
    { level: 1, type: 'num', q: R`How many π electrons does benzene have?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`Three C=C π bonds (in a Kekulé structure) give 6 delocalised π electrons.` },
    { level: 2, type: 'mcq', q: R`The major product of propene + HCl is:`,
      options: [R`1-chloropropane`, R`2-chloropropane`, R`1,2-dichloropropane`, R`propane`], correct: 1,
      solution: R`Markovnikov: H goes to CH₂ and Cl to the middle carbon (via the more stable 2° carbocation).` },
    { level: 2, type: 'mcq', q: R`Which compound shows geometrical (cis–trans) isomerism?`,
      options: [R`but-1-ene`, R`propene`, R`ethene`, R`but-2-ene`], correct: 3,
      solution: R`In but-2-ene, each double-bonded carbon carries H and CH₃ (two different groups).` },
    { level: 2, type: 'mcq', q: R`Which compound has the most acidic hydrogen?`,
      options: [R`ethane`, R`ethene`, R`ethyne`, R`methane`], correct: 2,
      solution: R`The sp carbon of ethyne holds the electron pair tightly, so ≡C–H gives up H⁺ most easily.` },
    { level: 2, type: 'mcq', q: R`Which group directs an incoming electrophile to the meta position?`,
      options: [R`–NO₂`, R`–OH`, R`–CH₃`, R`–Cl`], correct: 0,
      solution: R`–NO₂ withdraws electrons and deactivates the o/p positions most.` },
    { level: 2, type: 'num', q: R`How many monochloro structural isomers form when propane is chlorinated?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`1-chloropropane and 2-chloropropane.` },
    { level: 2, type: 'num', q: R`How many moles of H₂ are needed to convert 1 mol of benzene into cyclohexane?`,
      answer: 3, tol: 0.001, unit: 'mol',
      solution: R`Three double bonds (Kekulé) need 3 H₂.` },
    { level: 2, type: 'num', q: R`An alkene gives only propanone on ozonolysis. How many carbon atoms does the alkene have?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`Two propanone units joined by C=C: (CH₃)₂C=C(CH₃)₂, with 6 carbons.` },
    { level: 3, type: 'mcq', q: R`The peroxide (Kharasch) effect is observed only with:`,
      options: [R`HCl`, R`HBr`, R`HI`, R`HF`], correct: 1,
      solution: R`Only with HBr are both radical propagation steps energetically favourable.` },
    { level: 3, type: 'mcq', q: R`Comparing the staggered and eclipsed conformations of ethane:`,
      options: [R`the staggered form is more stable`, R`the eclipsed form is more stable`, R`both are equally stable`, R`neither exists`], correct: 0,
      solution: R`In the staggered form the C–H bonds are farthest apart, so repulsion is lowest.` },
    { level: 3, type: 'num', q: R`How many moles of ethanal does 1 mol of but-2-ene give on ozonolysis?`,
      answer: 2, tol: 0.001, unit: 'mol',
      solution: R`CH₃CH=CHCH₃ splits into two CH₃CHO.` },
    { level: 3, type: 'num', q: R`How many isomers of dichlorobenzene are there?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`ortho (1,2), meta (1,3) and para (1,4).` }
  ]
});
