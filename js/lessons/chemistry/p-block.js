// Lesson: p-Block Elements.
var R = String.raw;
JEE.lesson('chemistry', 'p-block', {
  theory: [
    { h: R`The p-block at a glance`,
      body: [
        R`The p-block is groups 13 to 18, where the last electron enters a p orbital. Their outer configuration is \(ns^2np^{1-6}\).`,
        R`It contains metals (Al, Sn, Pb), metalloids (B, Si, Ge, As) and non-metals (C, N, O, F, Cl…), plus the noble gases. Metallic character increases <b>down</b> each group and decreases <b>across</b> a period.`,
        R`Their highest oxidation state equals the number of valence electrons (group number − 10). Lower states, 2 less each time, become more common down the group.`
      ],
      analogy: R`Group 14 is a great example of the change down a group: carbon is a non-metal, silicon and germanium are semiconductors (metalloids), and tin and lead are metals.`,
      check: { q: R`Write the outer configuration of group 16 elements.`, ans: R`\(ns^2np^4\) (6 valence electrons).` } },

    { h: R`Physical properties and the first element's unusual behaviour`,
      body: [
        R`Down a group, atomic size increases, while ionisation enthalpy and electronegativity decrease. Among the halogens, F₂ and Cl₂ are gases, Br₂ is a liquid and I₂ is a solid at room temperature (stronger van der Waals forces in bigger molecules).`,
        R`The <b>first element</b> of each group (B, C, N, O, F) behaves differently from the rest because it is <b>small</b>, very <b>electronegative</b>, and has <b>no d orbitals</b>.`,
        R`So it can't expand its octet (no NCl₅, no OF₄); it forms strong pπ–pπ multiple bonds (N≡N, O=O, C=C); and it often forms hydrogen bonds (H₂O, HF, NH₃).`
      ],
      points: [R`Carbon shows <b>catenation</b> (forming long chains of C atoms), the basis of organic chemistry.`] },

    { h: R`The inert pair effect`,
      body: [
        R`Going down groups 13–16, the two ns electrons become increasingly reluctant to take part in bonding (they are held tightly and poorly shielded). This is the <b>inert pair effect</b>.`,
        R`So the lower oxidation state becomes more stable down the group: Tl⁺ is more stable than Tl³⁺, Pb²⁺ more than Pb⁴⁺, Bi³⁺ more than Bi⁵⁺.`,
        R`Consequences: PbO₂ is a strong oxidising agent (Pb⁴⁺ → Pb²⁺); SnCl₂ is a reducing agent (Sn²⁺ → Sn⁴⁺, because for Sn the +4 state is more stable).`
      ],
      mistake: R`Assuming the group's top oxidation state is always the most stable. For heavy elements like Pb and Tl, the lower state wins.` },

    { h: R`Groups 13 and 14: boron, aluminium, carbon, silicon`,
      body: [
        R`<b>Boron</b> has only 3 valence electrons. Its compounds (BF₃, BCl₃) have an incomplete octet, so they act as <b>Lewis acids</b> (electron-pair acceptors). Diborane (B₂H₆) has unusual "banana" (3-centre, 2-electron) bonds. Borax is used in glass and as a flux.`,
        R`<b>Aluminium</b> is amphoteric: Al₂O₃ dissolves in both acids and bases.`,
        R`<b>Carbon</b> has allotropes: diamond (hard, insulating, sp³), graphite (soft, conducting, sp² layers) and fullerenes (C₆₀). CO is a poisonous, neutral oxide; CO₂ is acidic.`,
        R`<b>Silicon</b> forms silica (SiO₂), silicates (in rocks and glass) and silicones (water-repellent polymers).`
      ],
      analogy: R`Diamond and graphite are both pure carbon, yet one is the hardest natural substance and the other is the soft "lead" of your pencil. The arrangement of atoms makes all the difference.` },

    { h: R`Groups 15 and 16: nitrogen, phosphorus, oxygen, sulphur`,
      body: [
        R`<b>Nitrogen</b> (N≡N) is very unreactive because of its strong triple bond. Ammonia is made by the Haber process; nitric acid by the Ostwald process.`,
        R`<b>Phosphorus</b> exists as white (reactive, P₄ tetrahedra, stored under water), red and black allotropes. Oxoacids: H₃PO₄ (tribasic), H₃PO₃ (dibasic, one P–H bond), H₃PO₂ (monobasic, two P–H bonds; a strong reducer). Only the H atoms bonded to O are acidic.`,
        R`<b>Oxygen</b> exists as O₂ and ozone (O₃, which shields us from UV). <b>Sulphur</b> has rhombic and monoclinic forms. Sulphuric acid is made by the <b>contact process</b> (SO₂ → SO₃ using a V₂O₅ catalyst).`
      ],
      points: [R`Hydrides of group 15: thermal stability and basicity fall from NH₃ to BiH₃.`] },

    { h: R`Groups 17 and 18: halogens and noble gases`,
      body: [
        R`<b>Halogens</b> are very reactive non-metals that gain one electron. Oxidising power: F₂ > Cl₂ > Br₂ > I₂. Acid strength of the hydrogen halides is the reverse: HF < HCl < HBr < HI (bond strength decreases down the group). HF has an unusually high boiling point because of hydrogen bonding.`,
        R`<b>Interhalogens</b> (ClF, ClF₃, BrF₅, IF₇) form between different halogens and are more reactive than the halogens themselves. Oxoacids of chlorine: HOCl, HClO₂, HClO₃, HClO₄ (acid strength increases with the number of O atoms).`,
        R`<b>Noble gases</b> have full shells and are very unreactive. But xenon forms compounds with F and O: XeF₂ (linear), XeF₄ (square planar), XeF₆ (distorted octahedral), XeO₃ (pyramidal). Uses: He in balloons and diving gas, Ne in signs, Ar in bulbs and welding.`
      ],
      analogy: R`Chlorine in swimming pools and bleaching powder kills germs because it is such a strong oxidising agent.` }
  ],

  examples: [
    { level: 1, t: 1, q: R`Write the valence-shell configurations of groups 13, 14 and 16.`,
      steps: [R`Group number − 10 = number of valence electrons: 3, 4 and 6.`],
      ans: R`\(ns^2np^1\), \(ns^2np^2\), \(ns^2np^4\)` },
    { level: 1, t: 0, q: R`In group 14, which element is the most metallic and which the most non-metallic? Give the physical state of each halogen at room temperature.`,
      steps: [R`Metallic character increases down the group.`, R`Halogens: van der Waals forces grow with size.`],
      ans: R`Pb is the most metallic and C the most non-metallic. F₂ and Cl₂ are gases, Br₂ is a liquid, I₂ is a solid.` },
    { level: 1, t: 4, q: R`Name H₂SO₄ and H₂SO₃, and give the basicity of H₂SO₄.`,
      steps: [R`More oxygen: "-ic" acid; less oxygen: "-ous" acid.`, R`H₂SO₄ has two O–H groups, both ionisable.`],
      ans: R`Sulphuric acid and sulphurous acid; H₂SO₄ is dibasic (basicity 2)` },
    { level: 2, t: 2, q: R`Why is BCl₃ a Lewis acid?`,
      steps: [R`B has 3 valence electrons; in BCl₃ it has only 6 electrons around it.`, R`It can accept a lone pair to complete its octet, for example from NH₃.`],
      ans: R`It is electron-deficient (incomplete octet), so it accepts an electron pair.` },
    { level: 3, t: 4, q: R`Predict the hybridisation and shape of XeO₃.`,
      steps: [R`Xe has 8 valence electrons; 6 are used in three Xe=O bonds (σ + π each), leaving 1 lone pair.`, R`3 σ bonds + 1 lone pair = 4 electron pairs, so sp³.`],
      ans: R`sp³, trigonal pyramidal (like NH₃)` },
    { level: 3, t: 2, q: R`HF has a much higher boiling point than HCl, yet HCl is a much stronger acid than HF. Explain both facts.`,
      steps: [R`Boiling point: HF molecules form strong intermolecular hydrogen bonds (F is small and very electronegative).`, R`Acidity: the H–F bond is very strong (small F), so HF releases H⁺ reluctantly. The longer, weaker H–Cl bond breaks easily.`],
      ans: R`Hydrogen bonding raises HF's boiling point; its strong H–F bond makes it a weak acid.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Which halogen is a liquid at room temperature?`,
      options: [R`Br₂`, R`F₂`, R`Cl₂`, R`I₂`], correct: 0,
      solution: R`Bromine is a red-brown liquid; I₂ is a solid, F₂ and Cl₂ are gases.` },
    { level: 1, type: 'mcq', q: R`Which noble gas is used to fill balloons?`,
      options: [R`helium`, R`neon`, R`argon`, R`xenon`], correct: 0,
      solution: R`Helium is very light and non-flammable.` },
    { level: 1, type: 'mcq', q: R`Which allotrope of carbon conducts electricity?`,
      options: [R`diamond`, R`graphite`, R`both`, R`neither`], correct: 1,
      solution: R`In graphite each C uses 3 electrons in bonds; the 4th is free to move along the layers.` },
    { level: 1, type: 'mcq', q: R`Sulphuric acid is made industrially by the:`,
      options: [R`Haber process`, R`Ostwald process`, R`Solvay process`, R`contact process`], correct: 3,
      solution: R`Contact process: SO₂ is oxidised to SO₃ over V₂O₅, then converted to H₂SO₄.` },
    { level: 1, type: 'num', q: R`What is the basicity of phosphoric acid, H₃PO₄?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`All three H atoms are bonded to O and can ionise.` },
    { level: 1, type: 'num', q: R`How many valence electrons do group 15 elements have?`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`\(ns^2np^3\): 5 valence electrons.` },
    { level: 2, type: 'mcq', q: R`Which is the strongest acid?`,
      options: [R`HF`, R`HCl`, R`HBr`, R`HI`], correct: 3,
      solution: R`H–I is the weakest bond, so HI loses H⁺ most easily.` },
    { level: 2, type: 'mcq', q: R`Nitrogen gas is very unreactive because:`,
      options: [R`it is a noble gas`, R`its N≡N triple bond is very strong`, R`it is ionic`, R`it has no valence electrons`], correct: 1,
      solution: R`The triple bond needs about 946 kJ/mol to break.` },
    { level: 2, type: 'mcq', q: R`The shape of XeF₄ is:`,
      options: [R`square planar`, R`tetrahedral`, R`see-saw`, R`octahedral`], correct: 0,
      solution: R`4 bond pairs + 2 lone pairs (sp³d²); the lone pairs sit opposite each other.` },
    { level: 2, type: 'mcq', q: R`In group 14, the +2 oxidation state is most stable for:`,
      options: [R`C`, R`Si`, R`Sn`, R`Pb`], correct: 3,
      solution: R`The inert pair effect is strongest for the heaviest element, lead.` },
    { level: 2, type: 'num', q: R`How many P–O–P bridges are there in a P₄O₁₀ molecule?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`One O bridges each of the 6 edges of the P₄ tetrahedron (plus 4 terminal P=O).` },
    { level: 2, type: 'num', q: R`What is the oxidation state of S in peroxodisulphuric acid, H₂S₂O₈?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`It contains a peroxide (O–O) link: \(2(+1) + 2x + 6(-2) + 2(-1) = 0\), so \(x = +6\).` },
    { level: 2, type: 'num', q: R`How many lone pairs are on the Xe atom in XeF₄?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`8 valence electrons − 4 used in bonds = 4 electrons = 2 lone pairs.` },
    { level: 3, type: 'mcq', q: R`Which compound does NOT exist?`,
      options: [R`PCl₅`, R`SbCl₅`, R`AsCl₅`, R`NCl₅`], correct: 3,
      solution: R`N has no d orbitals, so it cannot expand its octet to form 5 bonds.` },
    { level: 3, type: 'mcq', q: R`The correct order of boiling points of the group 16 hydrides is:`,
      options: [R`H₂O > H₂Te > H₂Se > H₂S`, R`H₂S > H₂Se > H₂Te > H₂O`, R`H₂Te > H₂Se > H₂S > H₂O`, R`H₂O > H₂S > H₂Se > H₂Te`], correct: 0,
      solution: R`H₂O is highest because of H-bonding. For the rest, van der Waals forces grow with size.` },
    { level: 3, type: 'num', q: R`What is the oxidation state of xenon in XeO₃?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`\(x + 3(-2) = 0\), so \(x = +6\).` },
    { level: 3, type: 'num', q: R`How many lone pairs are on the central Cl atom in ClF₃?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`Cl has 7 valence electrons: 3 used in bonds, leaving 4 = 2 lone pairs (T-shaped).` }
  ]
});
