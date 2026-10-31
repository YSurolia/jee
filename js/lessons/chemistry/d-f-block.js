// Lesson: d- and f-Block Elements.
var R = String.raw;
JEE.lesson('chemistry', 'd-f-block', {
  theory: [
    { h: R`What are transition elements?`,
      body: [
        R`The <b>d-block</b> (groups 3–12) is where electrons fill the inner (n − 1)d orbitals. A <b>transition element</b> has a partly filled d subshell either as an atom or in a common ion.`,
        R`General configuration: \((n-1)d^{1-10}ns^{1-2}\). For example, Ti = [Ar] 3d² 4s², Fe = [Ar] 3d⁶ 4s². Exceptions: Cr = [Ar] 3d⁵ 4s¹ and Cu = [Ar] 3d¹⁰ 4s¹ (half-filled and filled d are extra stable).`,
        R`Zn, Cd and Hg have a full d¹⁰ in the atom and the ion, so strictly they are not transition elements, although they are in the d-block.`
      ],
      analogy: R`Transition metals are the "workhorses" of daily life: iron in buildings, copper in wires, titanium in aircraft, chromium in shiny taps.`,
      check: { q: R`Write the configuration of Ti (Z = 22).`, ans: R`[Ar] 3d² 4s².` } },

    { h: R`General physical properties`,
      body: [
        R`Transition metals are hard and strong, with high melting points and densities, because many unpaired d electrons take part in metallic bonding.`,
        R`They form <b>alloys</b> easily (their atoms are similar in size, as in brass and stainless steel) and <b>interstitial compounds</b> (small atoms like C, N and H fit into their crystal lattices, as in steel and TiC).`,
        R`Most are found in nature as oxides, sulphides or carbonates.`
      ] },

    { h: R`Trends: size, ionisation enthalpy, oxidation states`,
      body: [
        R`Across a series, atomic radii decrease at first and then stay nearly constant, because new d electrons shield the outer s electrons quite well.`,
        R`Transition metals show <b>variable oxidation states</b>, because the (n − 1)d and ns electrons have similar energies. The number of states peaks in the middle of the series: Mn goes from +2 to +7.`,
        R`Lower oxidation states tend to be ionic and basic (MnO); higher ones are covalent and acidic (Mn₂O₇).`
      ],
      points: [R`Mn²⁺ (d⁵) is very stable; Fe²⁺ (d⁶) is easily oxidised to Fe³⁺ (d⁵).`] },

    { h: R`Colour, magnetism, catalysis and complexes`,
      body: [
        R`<b>Colour:</b> in a compound, the d orbitals split into groups of slightly different energy. An electron absorbs visible light to jump between them (a d–d transition), and we see the complementary colour. Ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺) are colourless.`,
        R`<b>Magnetism:</b> unpaired electrons make substances paramagnetic. Spin-only magnetic moment: \(\mu = \sqrt{n(n + 2)}\) BM, where n is the number of unpaired electrons.`,
        R`<b>Catalysis:</b> they can change oxidation states easily and adsorb molecules on their surfaces. Examples: Fe in the Haber process, V₂O₅ in the contact process, Ni in hydrogenating oils.`,
        R`<b>Complex formation:</b> their small, highly charged ions with empty d orbitals attract ligands: [Fe(CN)₆]⁴⁻, [Cu(NH₃)₄]²⁺.`
      ],
      analogy: R`Copper sulphate crystals are blue and turquoise jewellery owes its colour to copper ions. Both colours come from d–d transitions.` },

    { h: R`Potassium dichromate, K₂Cr₂O₇`,
      body: [
        R`<b>Preparation:</b> chromite ore (FeCr₂O₄) is fused with Na₂CO₃ in air to give yellow sodium chromate. Acidifying gives orange sodium dichromate, which reacts with KCl to give K₂Cr₂O₇.`,
        R`Chromate and dichromate interconvert with pH: \(2\text{CrO}_4^{2-} + 2\text{H}^+ \rightleftharpoons \text{Cr}_2\text{O}_7^{2-} + \text{H}_2\text{O}\) (yellow in base, orange in acid).`,
        R`It is a strong oxidising agent in acid: \(\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \to 2\text{Cr}^{3+} + 7\text{H}_2\text{O}\) (orange turns green). It is used in titrations and in leather tanning.`
      ] },

    { h: R`Potassium permanganate, KMnO₄`,
      body: [
        R`<b>Preparation:</b> MnO₂ is fused with KOH and an oxidiser to make green K₂MnO₄, which is then oxidised (electrolytically or by Cl₂) to purple KMnO₄.`,
        R`A very strong oxidising agent. In acid: \(\text{MnO}_4^- + 8\text{H}^+ + 5e^- \to \text{Mn}^{2+} + 4\text{H}_2\text{O}\) (purple to colourless). In neutral or weakly basic solution, it goes to MnO₂ (gaining 3e⁻).`,
        R`Uses: in titrations (it is its own indicator), as a disinfectant, and to purify water.`
      ],
      mistake: R`Acidifying KMnO₄ titrations with HCl. KMnO₄ would oxidise Cl⁻ to Cl₂; dilute H₂SO₄ is used instead.` },

    { h: R`Lanthanoids and the lanthanoid contraction`,
      body: [
        R`The <b>lanthanoids</b> (Ce to Lu) fill the 4f orbitals: \([Xe]4f^{1-14}5d^{0-1}6s^2\). Their common oxidation state is <b>+3</b>. Some show +2 or +4 when that gives an empty (f⁰), half-filled (f⁷) or full (f¹⁴) subshell: Ce⁴⁺, Eu²⁺, Yb²⁺.`,
        R`<b>Lanthanoid contraction:</b> across the series, the size shrinks steadily, because 4f electrons shield the outer electrons poorly.`,
        R`Consequences: the 5d elements are almost the same size as the 4d elements just above them (Zr ≈ Hf), so they are very hard to separate; and the basicity of the lanthanoid hydroxides decreases from La(OH)₃ to Lu(OH)₃.`
      ] },

    { h: R`Actinoids`,
      body: [
        R`The <b>actinoids</b> (Th to Lr) fill the 5f orbitals. All of them are radioactive, and most are man-made.`,
        R`They show a wider range of oxidation states (+3 up to +7 for Np and Pu) than the lanthanoids, because the 5f, 6d and 7s orbitals are very close in energy, so more electrons can take part in bonding.`,
        R`Uranium and plutonium are used as fuels in nuclear reactors.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Write the general configuration of the d-block elements and the configuration of titanium (Z = 22).`,
      steps: [R`General: \((n-1)d^{1-10}ns^{1-2}\).`, R`Ti: 22 − 18 = 4 electrons after argon: 4s² 3d².`],
      ans: R`Ti: [Ar] 3d² 4s²` },
    { level: 1, t: 2, q: R`How many unpaired electrons does Cr³⁺ have? Find its spin-only magnetic moment.`,
      steps: [R`Cr = [Ar] 3d⁵ 4s¹; Cr³⁺ = [Ar] 3d³: 3 unpaired electrons.`, R`\(\mu = \sqrt{3\times5} = \sqrt{15}\).`],
      ans: R`3 unpaired; \(\mu \approx 3.87\) BM` },
    { level: 1, t: 1, q: R`Why are transition metals and their compounds good catalysts? Give two examples.`,
      steps: [R`They change oxidation states easily, so they can lend and take back electrons.`, R`Their surfaces adsorb reactant molecules, bringing them together.`],
      ans: R`Variable oxidation states and surface adsorption. Examples: Fe (Haber process), V₂O₅ (contact process), Ni (hydrogenating oils).` },
    { level: 3, t: 3, q: R`Write the balanced ionic equation for acidified dichromate oxidising Fe²⁺. How many moles of Fe²⁺ react with 1 mol of dichromate?`,
      steps: [R`Reduction: \(\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6e^- \to 2\text{Cr}^{3+} + 7\text{H}_2\text{O}\).`, R`Oxidation: \(\text{Fe}^{2+} \to \text{Fe}^{3+} + e^-\), multiplied by 6.`, R`Add them.`],
      ans: R`\(\text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ + 6\text{Fe}^{2+} \to 2\text{Cr}^{3+} + 6\text{Fe}^{3+} + 7\text{H}_2\text{O}\); 6 mol of Fe²⁺` },
    { level: 3, t: 2, q: R`Why is Mn²⁺ much harder to oxidise than Fe²⁺?`,
      steps: [R`Mn²⁺ is 3d⁵ (half-filled, extra stable), so oxidising it would destroy that stability.`, R`Fe²⁺ is 3d⁶; losing one electron gives Fe³⁺ = 3d⁵, the half-filled arrangement.`],
      ans: R`Half-filled d⁵ is extra stable: Mn²⁺ already has it, while Fe²⁺ gains it by oxidation.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Transition elements belong to the:`,
      options: [R`d-block`, R`s-block`, R`p-block`, R`f-block`], correct: 0,
      solution: R`They fill (n − 1)d orbitals.` },
    { level: 1, type: 'mcq', q: R`What colour is an aqueous solution of KMnO₄?`,
      options: [R`green`, R`purple`, R`orange`, R`colourless`], correct: 1,
      solution: R`Permanganate is deep purple.` },
    { level: 1, type: 'mcq', q: R`The catalyst used in the Haber process for ammonia is:`,
      options: [R`iron`, R`nickel`, R`platinum`, R`V₂O₅`], correct: 0,
      solution: R`Finely divided iron (with molybdenum as a promoter).` },
    { level: 1, type: 'mcq', q: R`The lanthanoids belong to the:`,
      options: [R`s-block`, R`p-block`, R`d-block`, R`f-block`], correct: 3,
      solution: R`They fill 4f orbitals.` },
    { level: 1, type: 'num', q: R`How many unpaired electrons does Ti³⁺ have?`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`Ti³⁺ = [Ar] 3d¹.` },
    { level: 1, type: 'num', q: R`Find the spin-only magnetic moment (in BM) of Ni²⁺ (3d⁸).`,
      answer: 2.83, tol: 0.01, unit: 'BM',
      solution: R`3d⁸ has 2 unpaired electrons: \(\sqrt{2\times4} = \sqrt8 \approx 2.83\) BM.` },
    { level: 2, type: 'mcq', q: R`What colour is the dichromate ion, Cr₂O₇²⁻?`,
      options: [R`yellow`, R`orange`, R`green`, R`purple`], correct: 1,
      solution: R`Dichromate is orange; chromate (CrO₄²⁻) is yellow; Cr³⁺ is green.` },
    { level: 2, type: 'mcq', q: R`Zn²⁺ salts are colourless because Zn²⁺ is:`,
      options: [R`d⁰`, R`d⁵`, R`d¹⁰`, R`d¹`], correct: 2,
      solution: R`With a full d¹⁰ subshell, no d–d transition is possible.` },
    { level: 2, type: 'mcq', q: R`The oxidation state of Mn in K₂MnO₄ is:`,
      options: [R`+7`, R`+6`, R`+4`, R`+2`], correct: 1,
      solution: R`\(2(+1) + x + 4(-2) = 0\), so \(x = +6\).` },
    { level: 2, type: 'mcq', q: R`A consequence of the lanthanoid contraction is that:`,
      options: [R`Lu is larger than La`, R`basicity increases across the lanthanoids`, R`Zr and Hf have almost identical radii`, R`all lanthanoids are colourless`], correct: 2,
      solution: R`The contraction cancels the expected increase in size from 4d to 5d.` },
    { level: 2, type: 'num', q: R`How many moles of KMnO₄ are needed to oxidise 5 mol of Fe²⁺ in acidic solution?`,
      answer: 1, tol: 0.001, unit: 'mol',
      solution: R`MnO₄⁻ gains 5 e⁻ and each Fe²⁺ gives 1 e⁻, so the ratio is 1 : 5.` },
    { level: 2, type: 'num', q: R`Find the spin-only magnetic moment (in BM) of Cr³⁺.`,
      answer: 3.87, tol: 0.01, unit: 'BM',
      solution: R`3 unpaired electrons: \(\sqrt{15} \approx 3.87\) BM.` },
    { level: 2, type: 'num', q: R`How many electrons does one Cr₂O₇²⁻ ion gain when it is reduced in acid?`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`Each Cr goes from +6 to +3, gaining 3 e⁻; two Cr atoms gain 6.` },
    { level: 3, type: 'mcq', q: R`Which 3d element shows the highest oxidation state?`,
      options: [R`Cr`, R`Fe`, R`Co`, R`Mn`], correct: 3,
      solution: R`Mn reaches +7 (as in KMnO₄) by using all its 3d and 4s electrons.` },
    { level: 3, type: 'mcq', q: R`Actinoids show more oxidation states than lanthanoids because:`,
      options: [R`they are radioactive`, R`their 5f, 6d and 7s orbitals are close in energy`, R`they are larger atoms`, R`they have no f electrons`], correct: 1,
      solution: R`With these orbitals close in energy, more electrons can take part in bonding.` },
    { level: 3, type: 'num', q: R`What volume (in mL) of 0.1 M KMnO₄ is needed to oxidise 50 mL of 0.5 M Fe²⁺ in acidic solution?`,
      answer: 50, tol: 0.01, unit: 'mL',
      solution: R`Fe²⁺: 0.025 mol, which needs 0.025/5 = 0.005 mol MnO₄⁻. Volume = 0.005/0.1 L = 50 mL.` },
    { level: 3, type: 'num', q: R`An ion has a spin-only magnetic moment of 4.9 BM. How many unpaired electrons does it have?`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`\(n(n + 2) = 4.9^2 \approx 24\), so \(n = 4\).` }
  ]
});
