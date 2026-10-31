// Lesson: Biomolecules.
var R = String.raw;
JEE.lesson('chemistry', 'biomolecules', {
  theory: [
    { h: R`Carbohydrates: the energy molecules`,
      body: [
        R`<b>Carbohydrates</b> are polyhydroxy aldehydes or ketones (or compounds that give them on hydrolysis). Many have the formula \(C_x(H_2O)_y\), hence the name "hydrates of carbon".`,
        R`<b>Monosaccharides</b> can't be broken down further: glucose (an aldohexose) and fructose (a ketohexose). <b>Oligosaccharides</b> give 2–10 units on hydrolysis: sucrose, maltose, lactose. <b>Polysaccharides</b> give many units: starch, cellulose, glycogen.`,
        R`Sugars that reduce Tollens' and Fehling's reagents (all monosaccharides, maltose, lactose) are <b>reducing sugars</b>. Sucrose is non-reducing.`
      ],
      analogy: R`Glucose is like a single brick; sucrose is two bricks glued together; starch is a whole wall made of thousands of glucose bricks.`,
      check: { q: R`Is sucrose a monosaccharide, disaccharide or polysaccharide?`, ans: R`A disaccharide (glucose + fructose).` } },

    { h: R`Glucose: how we know its structure`,
      body: [
        R`Glucose, \(C_6H_{12}O_6\), is an aldohexose. Its reactions reveal its structure: with HI it gives n-hexane (6 carbons in a straight chain); it forms a pentaacetate (5 –OH groups); with HCN and NH₂OH it reacts like a carbonyl compound; with bromine water it gives gluconic acid (so –CHO is present); and with nitric acid it gives saccharic acid (so there is also a primary –OH).`,
        R`In water, glucose mostly exists as a <b>six-membered ring</b> (pyranose), formed when the C-5 –OH adds to the –CHO. This creates two forms, <b>α</b> and <b>β</b>, called <b>anomers</b>, which differ only at C-1.`,
        R`Open-chain glucose has 4 chiral carbons (C-2 to C-5).`
      ],
      mistake: R`Expecting glucose to give a positive Schiff's test. It doesn't, because most of it is in the cyclic form, with the free –CHO tied up.` },

    { h: R`Disaccharides and polysaccharides`,
      body: [
        R`<b>Sucrose</b> = glucose + fructose, joined through both of their reducing carbons, so it is non-reducing. Its hydrolysis changes the sign of optical rotation, so the product is called <b>invert sugar</b>. <b>Maltose</b> = 2 glucose; <b>lactose</b> (milk sugar) = glucose + galactose; both are reducing.`,
        R`<b>Starch</b> (in plants) is made of α-glucose: amylose (straight chain, gives a blue colour with iodine) and amylopectin (branched). <b>Glycogen</b> is "animal starch", highly branched, stored in the liver and muscles. <b>Cellulose</b> is β-glucose in straight chains, the main part of plant cell walls; humans can't digest it.`
      ] },

    { h: R`Proteins`,
      body: [
        R`Proteins are long chains of <b>α-amino acids</b>, each with an –NH₂ and a –COOH group on the same carbon. In water they exist as <b>zwitterions</b> (⁺H₃N–CHR–COO⁻). <b>Essential amino acids</b> must come from food (valine, leucine, lysine…).`,
        R`The –COOH of one amino acid joins the –NH₂ of the next with loss of water, forming a <b>peptide bond</b> (–CO–NH–). A chain of n amino acids has n − 1 peptide bonds.`,
        R`<b>Structure levels:</b> primary (the sequence of amino acids), secondary (α-helix or β-pleated sheet, held by H-bonds), tertiary (the overall 3-D folding) and quaternary (several chains together, as in haemoglobin).`,
        R`<b>Denaturation:</b> heat, acid or alcohol destroys the 2° and 3° structure (the primary structure stays), and the protein loses its function. Enzymes are proteins that act as biological catalysts.`
      ],
      analogy: R`Boiling an egg is denaturation: the clear egg white turns solid white and can't go back. The chain of amino acids is still there, but its folding is destroyed.` },

    { h: R`Vitamins`,
      body: [
        R`<b>Vitamins</b> are organic compounds needed in small amounts for good health; the body can't make enough of them.`,
        R`<b>Fat-soluble:</b> A, D, E, K. They are stored in fatty tissue and the liver. <b>Water-soluble:</b> B group and C. They are washed out in urine, so they must be eaten regularly (except B₁₂, which is stored).`,
        R`Deficiency diseases: A, night blindness; B₁, beriberi; B₁₂, pernicious anaemia; C, scurvy (bleeding gums); D, rickets (soft bones); E, muscle weakness; K, poor blood clotting.`
      ] },

    { h: R`Nucleic acids: DNA and RNA`,
      body: [
        R`Nucleic acids are chains of <b>nucleotides</b>. Each nucleotide = a sugar + a nitrogen base + a phosphate (sugar + base alone is a nucleoside).`,
        R`<b>DNA</b>: sugar = 2-deoxyribose; bases A, G, C, T; two strands wound into a <b>double helix</b>, with A paired to T (2 H-bonds) and G paired to C (3 H-bonds). So in DNA, %A = %T and %G = %C (Chargaff's rule).`,
        R`<b>RNA</b>: sugar = ribose; bases A, G, C and <b>U</b> (uracil instead of thymine); usually single-stranded.`
      ],
      check: { q: R`If one DNA strand reads 5′-ATGC-3′, what is the complementary strand?`, ans: R`3′-TACG-5′ (A pairs with T, G with C, and the strands run in opposite directions).` } },

    { h: R`What nucleic acids do, and hormones`,
      body: [
        R`<b>DNA</b> stores genetic information and passes it on by copying itself (<b>replication</b>) when cells divide. <b>RNA</b> uses this information to make proteins: <b>mRNA</b> carries the code (in three-base codons), <b>tRNA</b> brings the right amino acids, and <b>rRNA</b> forms the ribosomes, where proteins are assembled.`,
        R`<b>Hormones</b> are chemical messengers made by glands and carried in the blood. Types: <b>peptide</b> (insulin, which lowers blood sugar), <b>amino-acid derivatives</b> (thyroxine; lack of iodine causes goitre; adrenaline, the "fight or flight" hormone) and <b>steroids</b> (testosterone, oestrogen, cortisol).`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Classify glucose, sucrose and starch.`,
      steps: [R`Glucose can't be hydrolysed further.`, R`Sucrose gives 2 units on hydrolysis; starch gives many.`],
      ans: R`Glucose: monosaccharide (aldohexose). Sucrose: disaccharide. Starch: polysaccharide.` },
    { level: 1, t: 1, q: R`What are essential amino acids? Give two examples.`,
      steps: [R`They are amino acids the human body cannot make, so they must come from food.`],
      ans: R`Amino acids we must eat. Examples: valine, leucine (also lysine, threonine).` },
    { level: 1, t: 2, q: R`Name the deficiency diseases caused by a lack of vitamins A, B₁, C and D.`,
      steps: [R`Recall each vitamin's main role: A for vision, B₁ for nerves, C for gums and skin, D for bones.`],
      ans: R`A: night blindness; B₁: beriberi; C: scurvy; D: rickets` },
    { level: 3, t: 0, q: R`Glucose reacts with bromine water to give gluconic acid, and with nitric acid to give saccharic acid. What does each reaction tell us about its structure?`,
      steps: [R`Bromine water is a mild oxidant: only the –CHO is oxidised to –COOH, which proves glucose has an aldehyde group.`, R`Nitric acid also oxidises the –CH₂OH at the other end to –COOH, which proves there is a primary alcohol group.`],
      ans: R`Glucose has an aldehyde group (C-1) and a primary –OH (C-6).` },
    { level: 3, t: 3, q: R`One strand of a DNA segment is 5′-ATGCCA-3′. Write the complementary strand, and say how many hydrogen bonds hold the pair together.`,
      steps: [R`Pair A–T and G–C, running antiparallel: 3′-TACGGT-5′.`, R`A–T pairs: 2 H-bonds each (A, T, A: 3 pairs, 6 bonds). G–C pairs: 3 H-bonds each (G, C, C: 3 pairs, 9 bonds).`],
      ans: R`3′-TACGGT-5′; 15 hydrogen bonds` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Glucose is a:`,
      options: [R`monosaccharide`, R`disaccharide`, R`polysaccharide`, R`protein`], correct: 0,
      solution: R`It can't be hydrolysed into smaller sugars.` },
    { level: 1, type: 'mcq', q: R`A peptide bond links:`,
      options: [R`glucose units`, R`amino acids`, R`nucleotides`, R`fatty acids`], correct: 1,
      solution: R`–CO–NH– joins one amino acid to the next.` },
    { level: 1, type: 'mcq', q: R`A deficiency of vitamin D causes:`,
      options: [R`scurvy`, R`night blindness`, R`rickets`, R`beriberi`], correct: 2,
      solution: R`Vitamin D is needed to absorb calcium for strong bones.` },
    { level: 1, type: 'mcq', q: R`Which base is found in RNA but not in DNA?`,
      options: [R`adenine`, R`guanine`, R`cytosine`, R`uracil`], correct: 3,
      solution: R`RNA uses uracil in place of thymine.` },
    { level: 1, type: 'num', q: R`How many carbon atoms does a glucose molecule have?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`It is a hexose, C₆H₁₂O₆.` },
    { level: 1, type: 'num', q: R`How many peptide bonds are there in a pentapeptide?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`n amino acids are joined by n − 1 peptide bonds: 5 − 1 = 4.` },
    { level: 2, type: 'mcq', q: R`Hydrolysis of sucrose gives:`,
      options: [R`glucose + glucose`, R`glucose + fructose`, R`glucose + galactose`, R`fructose only`], correct: 1,
      solution: R`Sucrose is a disaccharide of glucose and fructose.` },
    { level: 2, type: 'mcq', q: R`Cellulose is a polymer of:`,
      options: [R`β-glucose`, R`α-glucose`, R`fructose`, R`amino acids`], correct: 0,
      solution: R`β-glucose units in straight chains; starch is made of α-glucose.` },
    { level: 2, type: 'mcq', q: R`Insulin is a:`,
      options: [R`steroid hormone`, R`vitamin`, R`peptide hormone`, R`carbohydrate`], correct: 2,
      solution: R`It is a small protein (51 amino acids) that lowers blood glucose.` },
    { level: 2, type: 'mcq', q: R`Which vitamin is water-soluble?`,
      options: [R`A`, R`D`, R`K`, R`C`], correct: 3,
      solution: R`The B vitamins and C are water-soluble; A, D, E and K are fat-soluble.` },
    { level: 2, type: 'num', q: R`In a DNA sample, cytosine is 22% of the bases. What percentage is guanine?`,
      answer: 22, tol: 0.001, unit: '%',
      solution: R`G pairs with C, so %G = %C = 22%.` },
    { level: 2, type: 'num', q: R`How many –OH groups does open-chain glucose have?`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`It forms a pentaacetate, showing 5 –OH groups.` },
    { level: 2, type: 'num', q: R`What is the molar mass (in g/mol) of glucose, C₆H₁₂O₆?`,
      answer: 180, tol: 0.01, unit: 'g/mol',
      solution: R`6(12) + 12(1) + 6(16) = 180.` },
    { level: 3, type: 'mcq', q: R`Glucose reacts with bromine water to give:`,
      options: [R`gluconic acid`, R`saccharic acid`, R`n-hexane`, R`sorbitol`], correct: 0,
      solution: R`The mild oxidant turns only –CHO into –COOH.` },
    { level: 3, type: 'mcq', q: R`The strand complementary to 5′-ATGC-3′ in DNA is:`,
      options: [R`3′-UACG-5′`, R`3′-ATGC-5′`, R`3′-GCAT-5′`, R`3′-TACG-5′`], correct: 3,
      solution: R`A–T and G–C pairing, running antiparallel. (U appears only in RNA.)` },
    { level: 3, type: 'num', q: R`How many different tripeptides can be made from glycine, alanine and valine if each is used exactly once?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`The order matters: 3! = 6.` },
    { level: 3, type: 'num', q: R`How many chiral carbon atoms are there in open-chain glucose?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`C-2, C-3, C-4 and C-5 each carry four different groups.` }
  ]
});
