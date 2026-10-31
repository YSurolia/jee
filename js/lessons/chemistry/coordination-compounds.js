// Lesson: Coordination Compounds.
var R = String.raw;
JEE.lesson('chemistry', 'coordination-compounds', {
  theory: [
    { h: R`What is a coordination compound? Werner's theory`,
      body: [
        R`A <b>coordination compound</b> contains a central metal atom or ion bonded to surrounding molecules or ions called <b>ligands</b>, which donate electron pairs to it. Example: [Co(NH₃)₆]Cl₃.`,
        R`<b>Werner's theory</b> (1893): a metal has a <b>primary valence</b> (its oxidation state, satisfied by ions outside the complex) and a <b>secondary valence</b> (its coordination number, satisfied by ligands inside the square brackets, in a fixed geometry).`,
        R`Unlike double salts (such as Mohr's salt, which break up completely into simple ions in water), complex ions stay intact in solution.`
      ],
      analogy: R`The metal ion is like the hub of a bicycle wheel and the ligands are the spokes: they all point to and hold onto the centre.`,
      check: { q: R`CoCl₃·6NH₃ gives 3 mol of AgCl per mole with AgNO₃. Write its formula.`, ans: R`[Co(NH₃)₆]Cl₃: all 3 Cl⁻ are outside the coordination sphere.` } },

    { h: R`Ligands, coordination number and chelation`,
      body: [
        R`<b>Coordination number</b> = the number of donor atoms bonded to the metal (commonly 4 or 6). The metal and its ligands together, inside the square brackets, form the <b>coordination sphere</b>.`,
        R`<b>Denticity</b> = how many donor atoms one ligand uses. Monodentate: NH₃, H₂O, Cl⁻, CN⁻. Bidentate: ethylenediamine (en), oxalate (C₂O₄²⁻). Hexadentate: EDTA⁴⁻.`,
        R`A polydentate ligand that grips the metal at two or more points forms a ring: this is <b>chelation</b>, and chelates are extra stable. An <b>ambidentate</b> ligand can bind through either of two atoms: NO₂⁻ (through N or O), SCN⁻ (through S or N).`
      ],
      analogy: R`A chelating ligand is like a crab holding something with both claws: much harder to pull away than something held with one claw.` },

    { h: R`Naming coordination compounds (IUPAC)`,
      body: [
        R`<b>1.</b> Name the cation first, then the anion. <b>2.</b> Inside the complex, name the ligands first in alphabetical order, then the metal. <b>3.</b> Use di-, tri-, tetra- for the number of each ligand (bis-, tris- for complicated names).`,
        R`<b>4.</b> Anionic ligands end in "-o" (chlorido, cyanido, hydroxido, oxalato); neutral ligands keep their names, except aqua (H₂O), ammine (NH₃) and carbonyl (CO). <b>5.</b> Give the metal's oxidation state in Roman numerals. <b>6.</b> If the complex is an anion, the metal name ends in "-ate" (ferrate, cuprate, argentate, aurate).`
      ],
      points: [R`[Co(NH₃)₆]Cl₃ = hexaamminecobalt(III) chloride.`, R`K₃[Fe(CN)₆] = potassium hexacyanidoferrate(III).`] },

    { h: R`Isomerism`,
      body: [
        R`<b>Structural isomers</b> have different bonds: <b>ionisation</b> ([Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br swap an ion between inside and outside); <b>linkage</b> (NO₂⁻ bonded through N or O); <b>coordination</b> (ligands swapped between a cationic and an anionic complex); <b>hydrate</b> (water inside or outside the sphere).`,
        R`<b>Stereoisomers</b> have the same bonds but different 3-D arrangements. <b>Geometrical:</b> cis (same ligands side by side) and trans (opposite), in square planar [MA₂B₂] and octahedral [MA₄B₂]; fac and mer in [MA₃B₃].`,
        R`<b>Optical:</b> non-superimposable mirror images, like your left and right hands. Common in octahedral complexes with chelating ligands, such as [Co(en)₃]³⁺ and cis-[Co(en)₂Cl₂]⁺.`
      ] },

    { h: R`Valence bond theory`,
      body: [
        R`The metal ion offers empty orbitals, which hybridise and accept lone pairs from the ligands.`,
        R`Coordination number 4: sp³ (tetrahedral, e.g. [Ni(CO)₄]) or dsp² (square planar, e.g. [Ni(CN)₄]²⁻). Coordination number 6: d²sp³ (inner-orbital, using (n − 1)d) or sp³d² (outer-orbital, using nd), both octahedral.`,
        R`VBT explains shapes and magnetism, but not colours, and it can't predict which hybridisation will occur.`
      ] },

    { h: R`Crystal field theory`,
      body: [
        R`In CFT the ligands are treated as point charges. In an <b>octahedral</b> field, the five d orbitals split into a lower set \(t_{2g}\) (three orbitals) and an upper set \(e_g\) (two). The gap is \(\Delta_o\). In a tetrahedral field the order is reversed and the gap is smaller: \(\Delta_t \approx \tfrac49\Delta_o\).`,
        R`<b>Spectrochemical series</b> (weak to strong): I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < H₂O < NH₃ < en < CN⁻ < CO. <b>Strong-field</b> ligands give a large Δ, so electrons pair up in \(t_{2g}\) (<b>low spin</b>). <b>Weak-field</b> ligands give a small Δ, so electrons spread out (<b>high spin</b>).`,
        R`<b>CFSE</b> \(= (-0.4\,n_{t_{2g}} + 0.6\,n_{e_g})\Delta_o\). <b>Colour</b> comes from an electron jumping from \(t_{2g}\) to \(e_g\) by absorbing visible light. <b>Magnetism</b> comes from unpaired electrons.`
      ],
      analogy: R`Imagine five rooms (d orbitals) where two (e_g) face a noisy road (the ligands' approach) and three (t₂g) face a quiet garden. Electrons prefer the quiet rooms, and pair up there if the noise (Δ) is bad enough.`,
      mistake: R`Saying H₂O is a strong-field ligand. It is in the middle of the series; for most M²⁺ ions it gives high-spin complexes.` },

    { h: R`Why coordination compounds matter`,
      body: [
        R`<b>Biology:</b> haemoglobin (Fe), chlorophyll (Mg) and vitamin B₁₂ (Co) are coordination compounds.`,
        R`<b>Medicine:</b> cisplatin, [Pt(NH₃)₂Cl₂], is an anticancer drug; EDTA removes lead from the body in lead poisoning.`,
        R`<b>Analysis and industry:</b> water hardness is measured by EDTA titration; dimethylglyoxime detects Ni²⁺ (red precipitate); silver and gold are extracted as cyanide complexes; Wilkinson's catalyst is used for hydrogenation.`
      ] }
  ],

  examples: [
    { level: 1, t: 1, q: R`Find the coordination number and oxidation state of iron in [Fe(CN)₆]³⁻.`,
      steps: [R`6 CN⁻ ligands, each monodentate, so the coordination number is 6.`, R`\(x + 6(-1) = -3\).`],
      ans: R`CN = 6; Fe is +3` },
    { level: 1, t: 2, q: R`Name [Co(NH₃)₆]Cl₃ using IUPAC rules.`,
      steps: [R`The complex is a cation: 6 NH₃ = hexaammine.`, R`Co: \(x + 0 = +3\), so cobalt(III).`, R`Anion: chloride.`],
      ans: R`Hexaamminecobalt(III) chloride` },
    { level: 1, t: 1, q: R`Give the denticity of NH₃, ethylenediamine (en), oxalate and EDTA⁴⁻.`,
      steps: [R`Count the donor atoms each ligand uses.`],
      ans: R`NH₃: 1; en: 2; oxalate: 2; EDTA⁴⁻: 6` },
    { level: 3, t: 5, q: R`[CoF₆]³⁻ is paramagnetic, but [Co(NH₃)₆]³⁺ is diamagnetic. Explain, and find the magnetic moment of [CoF₆]³⁻.`,
      steps: [R`Both contain Co³⁺, which is d⁶.`, R`F⁻ is weak-field (small Δₒ): high spin, \(t_{2g}^4e_g^2\), 4 unpaired electrons.`, R`NH₃ is stronger for Co³⁺ (large Δₒ): low spin, \(t_{2g}^6\), no unpaired electrons.`, R`\(\mu = \sqrt{4\times6} = \sqrt{24}\).`],
      ans: R`About 4.9 BM. The ligand field strength decides high or low spin.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`What is the coordination number of iron in [Fe(CN)₆]⁴⁻?`,
      options: [R`6`, R`4`, R`2`, R`8`], correct: 0,
      solution: R`Six monodentate CN⁻ ligands.` },
    { level: 1, type: 'mcq', q: R`Which of these is a bidentate ligand?`,
      options: [R`NH₃`, R`ethylenediamine (en)`, R`Cl⁻`, R`H₂O`], correct: 1,
      solution: R`en binds through both of its N atoms.` },
    { level: 1, type: 'mcq', q: R`EDTA⁴⁻ is a:`,
      options: [R`monodentate ligand`, R`bidentate ligand`, R`tetradentate ligand`, R`hexadentate ligand`], correct: 3,
      solution: R`It binds through 2 N and 4 O atoms.` },
    { level: 1, type: 'mcq', q: R`In [Cu(NH₃)₄]SO₄, the part inside the coordination sphere is:`,
      options: [R`[Cu(NH₃)₄]²⁺`, R`SO₄²⁻`, R`NH₃ only`, R`Cu²⁺ alone`], correct: 0,
      solution: R`Everything inside the square brackets: the metal and its ligands.` },
    { level: 1, type: 'num', q: R`What is the oxidation state of Ni in [Ni(CO)₄]?`,
      answer: 0, tol: 0.001, unit: '',
      solution: R`CO is neutral and the complex is neutral, so Ni is 0.` },
    { level: 1, type: 'num', q: R`What is the oxidation state of Co in [Co(NH₃)₅Cl]Cl₂?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`The complex ion is [Co(NH₃)₅Cl]²⁺: \(x + 0 - 1 = +2\), so \(x = +3\).` },
    { level: 2, type: 'mcq', q: R`Which ligand is ambidentate?`,
      options: [R`NH₃`, R`en`, R`H₂O`, R`NO₂⁻`], correct: 3,
      solution: R`NO₂⁻ can bind through N (nitro) or O (nitrito).` },
    { level: 2, type: 'mcq', q: R`The geometry of [Ni(CO)₄] is:`,
      options: [R`square planar`, R`tetrahedral`, R`octahedral`, R`linear`], correct: 1,
      solution: R`Ni(0) is sp³ hybridised, so tetrahedral.` },
    { level: 2, type: 'mcq', q: R`Which of these is a strong-field ligand?`,
      options: [R`I⁻`, R`Cl⁻`, R`H₂O`, R`CN⁻`], correct: 3,
      solution: R`CN⁻ is near the strong end of the spectrochemical series.` },
    { level: 2, type: 'mcq', q: R`[Co(NH₃)₅Br]SO₄ and [Co(NH₃)₅SO₄]Br are:`,
      options: [R`linkage isomers`, R`coordination isomers`, R`ionisation isomers`, R`geometrical isomers`], correct: 2,
      solution: R`They swap an ion between inside and outside the sphere, so they give different ions in solution.` },
    { level: 2, type: 'num', q: R`How many ions does [Co(NH₃)₅Cl]Cl₂ give per formula unit in water?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`[Co(NH₃)₅Cl]²⁺ + 2Cl⁻ = 3 ions.` },
    { level: 2, type: 'num', q: R`How many unpaired electrons are in [Fe(CN)₆]³⁻?`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`Fe³⁺ is d⁵; CN⁻ is strong-field, so it is low spin, \(t_{2g}^5\): 1 unpaired electron.` },
    { level: 2, type: 'num', q: R`How many moles of AgCl precipitate when excess AgNO₃ is added to 1 mol of [Co(NH₃)₆]Cl₃?`,
      answer: 3, tol: 0.001, unit: 'mol',
      solution: R`All 3 Cl⁻ ions are outside the sphere, so they are free to precipitate.` },
    { level: 3, type: 'mcq', q: R`The hybridisation of Ni in [Ni(CN)₄]²⁻ is:`,
      options: [R`sp³`, R`dsp²`, R`sp³d²`, R`d²sp³`], correct: 1,
      solution: R`Ni²⁺ (d⁸) with strong-field CN⁻ pairs up its electrons, freeing one 3d orbital: dsp², square planar.` },
    { level: 3, type: 'mcq', q: R`Which complex is optically active?`,
      options: [R`cis-[Co(en)₂Cl₂]⁺`, R`trans-[Co(en)₂Cl₂]⁺`, R`[Co(NH₃)₆]³⁺`, R`[Ni(CO)₄]`], correct: 0,
      solution: R`The cis form has no plane of symmetry, so its mirror image is different. The trans form has one.` },
    { level: 3, type: 'num', q: R`Find the CFSE (in units of Δₒ, ignoring pairing energy) of a low-spin d⁶ octahedral complex.`,
      answer: -2.4, tol: 0.001, unit: 'Δₒ',
      solution: R`\(t_{2g}^6e_g^0\): \(6\times(-0.4) = -2.4\,\Delta_o\).` },
    { level: 3, type: 'num', q: R`Find the spin-only magnetic moment (in BM) of [CoF₆]³⁻.`,
      answer: 4.9, tol: 0.01, unit: 'BM',
      solution: R`High-spin d⁶ has 4 unpaired electrons: \(\sqrt{24} \approx 4.90\) BM.` }
  ]
});
