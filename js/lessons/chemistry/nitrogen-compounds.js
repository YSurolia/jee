// Lesson: Organic Compounds Containing Nitrogen.
var R = String.raw;
JEE.lesson('chemistry', 'nitrogen-compounds', {
  theory: [
    { h: R`What are amines?`,
      body: [
        R`<b>Amines</b> are derivatives of ammonia (NH₃) in which one or more H atoms are replaced by carbon groups.`,
        R`<b>Primary (1°)</b>: one carbon group, R–NH₂. <b>Secondary (2°)</b>: two, R₂NH. <b>Tertiary (3°)</b>: three, R₃N. (Note that this classification counts groups on the <b>nitrogen</b>, unlike alcohols, where we look at the carbon.)`,
        R`IUPAC names use "-amine": CH₃NH₂ = methanamine; (CH₃)₂NH = N-methylmethanamine; C₆H₅NH₂ = benzenamine (aniline).`,
        R`The N atom is sp³, with a lone pair, so amines are pyramidal (C–N–C angle about 108°).`
      ],
      analogy: R`Think of ammonia as a hand with three fingers (H atoms). Replacing one finger with a carbon group makes a 1° amine, two fingers a 2° amine, three fingers a 3° amine.`,
      check: { q: R`Is (CH₃)₂NH a primary, secondary or tertiary amine?`, ans: R`Secondary: two carbon groups on the nitrogen.` } },

    { h: R`Making amines`,
      body: [
        R`<b>Reducing nitro compounds:</b> nitrobenzene + Sn/HCl (or H₂/Pd) gives aniline. This is the main route to aromatic amines.`,
        R`<b>Ammonolysis of haloalkanes</b>: R–X + NH₃ gives a mixture of 1°, 2° and 3° amines and quaternary salts. <b>Gabriel phthalimide synthesis</b> gives pure 1° aliphatic amines.`,
        R`<b>Hoffmann bromamide degradation:</b> RCONH₂ + Br₂ + NaOH gives RNH₂, with <b>one carbon less</b>. Nitriles and amides can also be reduced to amines with LiAlH₄.`
      ] },

    { h: R`Why amines are bases`,
      body: [
        R`The lone pair on nitrogen can accept a proton: R–NH₂ + H⁺ → R–NH₃⁺. So amines are bases and form salts with acids (such as CH₃NH₃⁺Cl⁻).`,
        R`Alkyl groups push electrons onto N (+I), making the lone pair more available, so aliphatic amines are stronger bases than NH₃. In water, solvation of the protonated ion and crowding also matter. Methylamines: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃. Ethylamines: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.`,
        R`<b>Aromatic amines</b> like aniline are much <b>weaker</b> bases, because the lone pair is spread into the benzene ring. Electron-donating groups on the ring increase basicity; electron-withdrawing groups (–NO₂) decrease it.`
      ],
      points: [R`Larger Kb (smaller pKb) means a stronger base.`],
      mistake: R`Assuming 3° amines are always the strongest bases because they have the most alkyl groups. In water, solvation and crowding change the order.` },

    { h: R`Telling 1°, 2° and 3° amines apart`,
      body: [
        R`<b>Hinsberg's test</b> (benzenesulphonyl chloride, then KOH): a 1° amine gives a sulphonamide that dissolves in KOH; a 2° amine gives one that doesn't dissolve; a 3° amine doesn't react.`,
        R`<b>Carbylamine test</b> (CHCl₃ + alcoholic KOH, warm): only <b>1°</b> amines give an isocyanide with a terrible smell.`,
        R`<b>Nitrous acid</b> (NaNO₂ + HCl): 1° aliphatic amines give N₂ gas (bubbles) and an alcohol; 1° aromatic amines in the cold give diazonium salts; 2° amines give yellow, oily N-nitrosoamines.`
      ] },

    { h: R`Diazonium salts`,
      body: [
        R`<b>Diazotisation:</b> aniline + NaNO₂ + HCl at <b>0–5 °C</b> gives benzenediazonium chloride, C₆H₅N₂⁺Cl⁻.`,
        R`It must be kept cold: above about 5 °C it decomposes (to phenol + N₂). Aromatic diazonium salts are stabilised by resonance with the ring; aliphatic ones decompose immediately.`
      ],
      analogy: R`A diazonium salt is like a "universal adapter" for the benzene ring: the –N₂⁺ group can be swapped for many other groups, because N₂ is an extremely good leaving group.` },

    { h: R`Using diazonium salts in synthesis`,
      body: [
        R`<b>Replacement reactions</b> (N₂ gas leaves): CuCl/HCl → Cl, CuBr/HBr → Br, CuCN → CN (<b>Sandmeyer</b>); Cu powder with HX (<b>Gattermann</b>); KI → I; HBF₄ then heat → F; warm water → OH (phenol); H₃PO₂ → H (back to benzene).`,
        R`<b>Coupling reactions</b> (N₂ is kept): with phenol (in alkali) or aniline (in mild acid) at the para position, forming brightly coloured <b>azo dyes</b> (–N=N–), such as orange p-hydroxyazobenzene and yellow aniline yellow.`,
        R`So diazonium salts let us put groups on a benzene ring (like F, I or CN) that are hard to add directly.`
      ],
      check: { q: R`Which reagent replaces –N₂⁺Cl⁻ with –H?`, ans: R`Hypophosphorous acid, H₃PO₂.` } }
  ],

  examples: [
    { level: 1, t: 0, q: R`Classify and name: CH₃NH₂, (CH₃)₂NH and (CH₃)₃N.`,
      steps: [R`Count the carbon groups on N: 1, 2, 3.`],
      ans: R`Methanamine (1°), N-methylmethanamine (2°), N,N-dimethylmethanamine (3°)` },
    { level: 1, t: 1, q: R`Why are amines basic? What forms when methylamine reacts with HCl?`,
      steps: [R`The lone pair on N accepts a proton.`, R`CH₃NH₂ + HCl → CH₃NH₃⁺Cl⁻.`],
      ans: R`Because of the lone pair on N. The product is the salt methylammonium chloride.` },
    { level: 1, t: 3, q: R`Give the conditions for diazotising aniline, and explain why the temperature must be low.`,
      steps: [R`Aniline + NaNO₂ + HCl gives benzenediazonium chloride.`, R`Above about 5 °C, the diazonium salt decomposes to phenol and N₂.`],
      ans: R`NaNO₂ + dilute HCl at 0–5 °C; it is kept cold because the diazonium salt is unstable.` },
    { level: 2, t: 0, q: R`How is aniline made from nitrobenzene?`,
      steps: [R`The –NO₂ group is reduced to –NH₂.`, R`Reagents: Sn (or Fe) with HCl, or H₂ with a Pd catalyst.`],
      ans: R`C₆H₅NO₂ + 6[H] → C₆H₅NH₂ + 2H₂O (Sn/HCl)` },
    { level: 3, t: 3, q: R`How would you convert aniline into (a) iodobenzene (b) benzonitrile?`,
      steps: [R`First diazotise: aniline + NaNO₂/HCl at 0–5 °C gives C₆H₅N₂⁺Cl⁻.`, R`(a) Add KI: –N₂⁺ is replaced by I.`, R`(b) Add CuCN (Sandmeyer): –N₂⁺ is replaced by CN.`],
      ans: R`(a) Diazotise, then KI (b) Diazotise, then CuCN` },
    { level: 3, t: 1, q: R`Arrange the ethylamines and ammonia in order of basicity in water.`,
      steps: [R`+I effect alone would predict 3° > 2° > 1° > NH₃.`, R`But in water, the protonated ion must be solvated by H-bonds; the 3° ammonium ion has only one N–H and is crowded, so it is less stabilised.`],
      ans: R`(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Methylamine, CH₃NH₂, is a:`,
      options: [R`primary amine`, R`secondary amine`, R`tertiary amine`, R`quaternary ammonium salt`], correct: 0,
      solution: R`One carbon group on the nitrogen.` },
    { level: 1, type: 'mcq', q: R`Amines are basic because of:`,
      options: [R`their H atoms`, R`the lone pair on nitrogen`, R`a double bond`, R`an oxygen atom`], correct: 1,
      solution: R`The lone pair accepts a proton.` },
    { level: 1, type: 'mcq', q: R`Diazotisation of aniline is carried out at:`,
      options: [R`100 °C`, R`room temperature`, R`0–5 °C`, R`500 °C`], correct: 2,
      solution: R`Diazonium salts decompose at higher temperatures.` },
    { level: 1, type: 'mcq', q: R`The formula of aniline is:`,
      options: [R`C₆H₅NO₂`, R`C₆H₅OH`, R`C₆H₅CH₃`, R`C₆H₅NH₂`], correct: 3,
      solution: R`Aniline is aminobenzene. C₆H₅NO₂ is nitrobenzene.` },
    { level: 1, type: 'num', q: R`How many H atoms are attached to the nitrogen in a secondary amine?`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`R₂NH: one H on N.` },
    { level: 1, type: 'num', q: R`How many carbon atoms are in N,N-dimethylmethanamine, (CH₃)₃N?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Three methyl groups.` },
    { level: 2, type: 'mcq', q: R`The carbylamine test is given by:`,
      options: [R`primary amines only`, R`secondary amines only`, R`tertiary amines only`, R`all amines`], correct: 0,
      solution: R`Only R–NH₂ forms the foul-smelling isocyanide R–NC.` },
    { level: 2, type: 'mcq', q: R`Which is the strongest base in aqueous solution?`,
      options: [R`NH₃`, R`CH₃NH₂`, R`(CH₃)₂NH`, R`C₆H₅NH₂`], correct: 2,
      solution: R`For methylamines in water, 2° > 1° > 3° > NH₃; aniline is the weakest.` },
    { level: 2, type: 'mcq', q: R`Hoffmann bromamide degradation of benzamide (C₆H₅CONH₂) gives:`,
      options: [R`benzylamine`, R`aniline`, R`benzoic acid`, R`nitrobenzene`], correct: 1,
      solution: R`It removes one carbon: C₆H₅CONH₂ → C₆H₅NH₂.` },
    { level: 2, type: 'mcq', q: R`Benzenediazonium chloride coupled with phenol in alkali gives:`,
      options: [R`benzene`, R`phenol`, R`aniline`, R`an orange azo dye`], correct: 3,
      solution: R`Coupling at the para position gives p-hydroxyazobenzene.` },
    { level: 2, type: 'num', q: R`Aniline has pKb = 9.38. Find the pKa of its conjugate acid, the anilinium ion.`,
      answer: 4.62, tol: 0.01, unit: '',
      solution: R`pKa + pKb = 14, so pKa = 4.62.` },
    { level: 2, type: 'num', q: R`What is the molar mass (in g/mol) of aniline, C₆H₇N?`,
      answer: 93, tol: 0.01, unit: 'g/mol',
      solution: R`6(12) + 7(1) + 14 = 93.` },
    { level: 2, type: 'num', q: R`How many moles of Br₂ react with 1 mol of aniline to form 2,4,6-tribromoaniline?`,
      answer: 3, tol: 0.001, unit: 'mol',
      solution: R`Three H atoms on the ring are replaced, one Br₂ each.` },
    { level: 3, type: 'mcq', q: R`To convert benzenediazonium chloride into benzene, use:`,
      options: [R`CuCl`, R`KI`, R`warm water`, R`H₃PO₂`], correct: 3,
      solution: R`Hypophosphorous acid replaces –N₂⁺ with H.` },
    { level: 3, type: 'mcq', q: R`The order of basicity of ethylamines in water is:`,
      options: [R`(C₂H₅)₃N > (C₂H₅)₂NH > C₂H₅NH₂ > NH₃`, R`(C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃`, R`NH₃ > C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N`, R`C₂H₅NH₂ > (C₂H₅)₂NH > (C₂H₅)₃N > NH₃`], correct: 1,
      solution: R`+I effect, solvation and steric effects together give 2° > 3° > 1° > NH₃ for ethylamines.` },
    { level: 3, type: 'num', q: R`How many structural isomers of amines have the formula C₃H₉N?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`Propan-1-amine, propan-2-amine, N-methylethanamine and N,N-dimethylmethanamine.` },
    { level: 3, type: 'num', q: R`How many of the C₃H₉N amine isomers are primary amines?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`Propan-1-amine and propan-2-amine.` }
  ]
});
