// Lesson: Redox Reactions and Electrochemistry.
var R = String.raw;
JEE.lesson('chemistry', 'redox-electrochemistry', {
  theory: [
    { h: R`Oxidation, reduction and oxidation numbers`,
      body: [
        R`<b>Oxidation</b> is loss of electrons; <b>reduction</b> is gain of electrons. They always happen together, so these are <b>redox</b> reactions. The substance that gets reduced is the <b>oxidising agent</b>, and vice versa.`,
        R`To keep track, we give each atom an <b>oxidation number (O.N.)</b>, the charge it would have if all bonds were ionic. Oxidation raises the O.N.; reduction lowers it.`,
        R`<b>Rules:</b> elements = 0; monatomic ions = their charge; O is usually −2 (−1 in peroxides); H is usually +1 (−1 in metal hydrides); F is always −1; the O.N.s in a compound add up to its charge.`
      ],
      analogy: R`A memory trick: "OIL RIG": Oxidation Is Loss, Reduction Is Gain (of electrons).`,
      check: { q: R`What is the oxidation number of Mn in KMnO₄?`, ans: R`\(+1 + x + 4(-2) = 0\), so \(x = +7\).` } },

    { h: R`Balancing redox equations`,
      body: [
        R`<b>Half-reaction (ion–electron) method:</b> (1) split the reaction into oxidation and reduction halves; (2) balance the atoms other than O and H; (3) balance O with H₂O; (4) balance H with H⁺ (in acid) or with H₂O/OH⁻ (in base); (5) balance charge with electrons; (6) multiply so that the electrons match, then add the halves.`,
        R`Example: in acid, \(\text{MnO}_4^- \to \text{Mn}^{2+}\) takes 5e⁻, and \(\text{Fe}^{2+} \to \text{Fe}^{3+}\) gives 1e⁻, so 1 MnO₄⁻ reacts with 5 Fe²⁺.`
      ],
      mistake: R`Forgetting to check that the charges balance as well as the atoms. A redox equation is balanced only when both are.` },

    { h: R`Conduction in electrolytes`,
      body: [
        R`<b>Metallic conduction:</b> electrons carry the current, with no chemical change; resistance rises with temperature.`,
        R`<b>Electrolytic conduction:</b> ions carry the current in a solution or melt; chemical changes happen at the electrodes; conductivity rises with temperature.`,
        R`<b>Conductance</b> \(G = 1/R\) (siemens). <b>Conductivity</b> \(\kappa = G\times\dfrac lA\) (S/cm), where \(l/A\) is the cell constant. <b>Molar conductivity</b> \(\Lambda_m = \dfrac{\kappa\times1000}{C}\) (S cm² mol⁻¹), the conductivity per mole of electrolyte.`
      ] },

    { h: R`How conductivity changes on dilution; Kohlrausch's law`,
      body: [
        R`On dilution, conductivity κ <b>decreases</b> (fewer ions per cm³), but molar conductivity Λₘ <b>increases</b> (the ions are freer, and weak electrolytes ionise more).`,
        R`For strong electrolytes Λₘ rises slowly: \(\Lambda_m = \Lambda_m^\circ - A\sqrt C\). For weak electrolytes it rises steeply at low concentration, so \(\Lambda_m^\circ\) can't be found by extrapolating the graph.`,
        R`<b>Kohlrausch's law:</b> at infinite dilution, each ion contributes independently: \(\Lambda_m^\circ = \nu_+\lambda_+^\circ + \nu_-\lambda_-^\circ\). This gives \(\Lambda_m^\circ\) for weak electrolytes from strong ones, and the degree of dissociation \(\alpha = \Lambda_m/\Lambda_m^\circ\).`
      ] },

    { h: R`Electrochemical cells and electrode potentials`,
      body: [
        R`A <b>galvanic cell</b> turns a spontaneous redox reaction into electricity. In the Daniell cell, Zn is oxidised at the <b>anode</b> (−) and Cu²⁺ is reduced at the <b>cathode</b> (+). A <b>salt bridge</b> completes the circuit and keeps both solutions neutral.`,
        R`Each electrode has a <b>reduction potential</b>, measured against the <b>standard hydrogen electrode (SHE)</b>, which is set to 0 V. \(E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode}\).`,
        R`In the <b>electrochemical series</b>, metals with very negative E° (Li, K, Na, Zn) are strong reducing agents that easily lose electrons. Positive E° (Cu, Ag, F₂) means a good oxidising agent. A metal can displace any metal below it from solution.`
      ],
      analogy: R`A galvanic cell is like a water wheel: electrons "fall" from the high-energy anode to the low-energy cathode through the wire, and we use that fall to do work.`,
      points: [R`Cell notation: anode | anode solution || cathode solution | cathode.`] },

    { h: R`The Nernst equation`,
      body: [
        R`Electrode and cell potentials depend on concentration. At 298 K: \(E = E^\circ - \dfrac{0.0591}{n}\log Q\), where Q is the reaction quotient.`,
        R`As a cell runs, products build up, Q grows and E falls. When E reaches 0, the cell is "dead": the reaction is at equilibrium.`,
        R`A <b>concentration cell</b> has the same electrodes in different concentrations: \(E = \dfrac{0.0591}{n}\log\dfrac{C_{higher}}{C_{lower}}\).`
      ] },

    { h: R`Gibbs energy and cell emf`,
      body: [
        R`The electrical work a cell can do equals the drop in Gibbs energy: \(\Delta G = -nFE\), and under standard conditions \(\Delta G^\circ = -nFE^\circ\).`,
        R`Positive E means negative ΔG, so the reaction is spontaneous. Also \(E^\circ = \dfrac{0.0591}{n}\log K\): a large E° means a huge equilibrium constant.`
      ] },

    { h: R`Electrolysis and Faraday's laws`,
      body: [
        R`In <b>electrolysis</b>, an external current drives a non-spontaneous reaction: cations go to the cathode (reduction) and anions go to the anode (oxidation).`,
        R`<b>Faraday's first law:</b> the mass deposited is proportional to the charge passed: \(m = \dfrac{M\times It}{nF}\), where \(F = 96500\) C is the charge on 1 mol of electrons. <b>Second law:</b> the same charge deposits masses in the ratio of the substances' equivalent masses.`,
        R`In water, the more easily reduced or oxidised species wins. Electrolysis of aqueous NaCl gives H₂ at the cathode (not Na) and Cl₂ at the anode.`
      ],
      analogy: R`Silver-plated spoons are made by electrolysis: the spoon is the cathode, and silver ions from the solution are deposited on it.` },

    { h: R`Batteries, fuel cells and corrosion`,
      body: [
        R`<b>Dry cell</b> (torch cell): zinc anode, carbon cathode with MnO₂, about 1.5 V; not rechargeable.`,
        R`<b>Lead storage battery</b> (cars): Pb anode, PbO₂ cathode, H₂SO₄ electrolyte. It is rechargeable; during discharge, H₂SO₄ is used up and its density falls.`,
        R`<b>Fuel cell:</b> H₂ and O₂ react to make water and electricity directly. It is very efficient (about 70%) and clean, and was used in spacecraft.`,
        R`<b>Corrosion</b> (rusting of iron) is an electrochemical redox process. It is prevented by painting, galvanising (zinc coating) or sacrificial protection.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find the oxidation numbers of Mn in KMnO₄ and S in H₂SO₄.`,
      steps: [R`KMnO₄: \(+1 + x + 4(-2) = 0\), so \(x = +7\).`, R`H₂SO₄: \(2(+1) + y + 4(-2) = 0\), so \(y = +6\).`],
      ans: R`Mn: +7; S: +6` },
    { level: 1, t: 5, q: R`Will zinc displace copper from CuSO₄ solution? (\(E^\circ\): Zn²⁺/Zn = −0.76 V, Cu²⁺/Cu = +0.34 V)`,
      steps: [R`The metal with the more negative E° is the stronger reducing agent.`, R`\(E^\circ_{cell} = 0.34 - (-0.76) = +1.10\) V, which is positive, so the reaction is spontaneous.`],
      ans: R`Yes: Zn + Cu²⁺ → Zn²⁺ + Cu (the blue colour fades and copper is deposited)` },
    { level: 1, t: 8, q: R`How much charge is carried by 1 mol of electrons? What mass of silver does this charge deposit from AgNO₃?`,
      steps: [R`1 mol e⁻ = 1 F = 96500 C.`, R`Ag⁺ + e⁻ → Ag: 1 mol e⁻ gives 1 mol of Ag.`],
      ans: R`96500 C; 108 g of silver` },
    { level: 3, t: 6, q: R`Find the emf of the concentration cell Cu | Cu²⁺ (0.01 M) || Cu²⁺ (0.1 M) | Cu at 298 K.`,
      steps: [R`E° = 0 (same electrodes), n = 2.`, R`\(E = \dfrac{0.0591}{2}\log\dfrac{0.1}{0.01} = 0.02955\times1\).`],
      ans: R`\(\approx 0.0296\) V` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Oxidation is:`,
      options: [R`gain of electrons`, R`loss of electrons`, R`gain of hydrogen`, R`loss of oxygen`], correct: 1,
      solution: R`OIL RIG: Oxidation Is Loss of electrons.` },
    { level: 1, type: 'mcq', q: R`The oxidation number of oxygen in H₂O₂ is:`,
      options: [R`−2`, R`0`, R`+1`, R`−1`], correct: 3,
      solution: R`In peroxides, O is −1: \(2(+1) + 2x = 0\).` },
    { level: 1, type: 'mcq', q: R`In a galvanic cell, oxidation takes place at the:`,
      options: [R`anode`, R`cathode`, R`salt bridge`, R`both electrodes`], correct: 0,
      solution: R`Anode = oxidation, cathode = reduction (in every type of cell).` },
    { level: 1, type: 'mcq', q: R`The standard hydrogen electrode is given a potential of:`,
      options: [R`1 V`, R`−1 V`, R`0 V`, R`0.76 V`], correct: 2,
      solution: R`By convention, the SHE is the zero reference.` },
    { level: 1, type: 'num', q: R`What is the value of the Faraday constant, in C/mol?`,
      answer: 96500, tol: 1, unit: 'C/mol',
      solution: R`Charge on 1 mol of electrons \(= 6.022\times10^{23}\times1.6\times10^{-19} \approx 96500\) C.` },
    { level: 1, type: 'num', q: R`Find the oxidation number of Cr in the dichromate ion, Cr₂O₇²⁻.`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`\(2x + 7(-2) = -2\), so \(x = +6\).` },
    { level: 2, type: 'mcq', q: R`Which is the strongest reducing agent?`,
      options: [R`Cu`, R`Ag`, R`Zn`, R`Li`], correct: 3,
      solution: R`Li has the most negative reduction potential (−3.05 V), so it loses electrons most easily.` },
    { level: 2, type: 'mcq', q: R`On dilution, the molar conductivity of a weak electrolyte:`,
      options: [R`decreases`, R`increases sharply`, R`stays constant`, R`becomes zero`], correct: 1,
      solution: R`Its degree of ionisation rises a lot on dilution.` },
    { level: 2, type: 'mcq', q: R`The salt bridge in a galvanic cell:`,
      options: [R`supplies electrons`, R`increases the emf`, R`acts as a catalyst`, R`keeps both solutions electrically neutral and completes the circuit`], correct: 3,
      solution: R`Its ions move to balance the charge building up in each half-cell.` },
    { level: 2, type: 'mcq', q: R`In the electrolysis of aqueous NaCl, the product at the cathode is:`,
      options: [R`Na`, R`Cl₂`, R`H₂`, R`O₂`], correct: 2,
      solution: R`Water is reduced more easily than Na⁺, so H₂ forms.` },
    { level: 2, type: 'num', q: R`Find \(E^\circ_{cell}\) (in V) for Zn | Zn²⁺ || Cu²⁺ | Cu. (\(E^\circ\): Cu²⁺/Cu = +0.34 V, Zn²⁺/Zn = −0.76 V)`,
      answer: 1.1, tol: 0.001, unit: 'V',
      solution: R`\(0.34 - (-0.76) = 1.10\) V.` },
    { level: 2, type: 'num', q: R`What mass (in g) of aluminium is deposited by 3 F of charge? (Al = 27)`,
      answer: 27, tol: 0.01, unit: 'g',
      solution: R`Al³⁺ + 3e⁻ → Al: 3 F deposits 1 mol = 27 g.` },
    { level: 2, type: 'num', q: R`How long (in s) must a 1 A current flow to deposit 1.08 g of silver?`,
      answer: 965, tol: 0.5, unit: 's',
      solution: R`1.08 g = 0.01 mol, which needs 0.01 F = 965 C; at 1 A, that takes 965 s.` },
    { level: 3, type: 'mcq', q: R`As a Daniell cell is used, its emf:`,
      options: [R`increases`, R`decreases`, R`stays constant`, R`becomes negative at once`], correct: 1,
      solution: R`[Zn²⁺] rises and [Cu²⁺] falls, so Q grows and E drops (Nernst).` },
    { level: 3, type: 'mcq', q: R`The rusting of iron is:`,
      options: [R`a purely physical change`, R`a photochemical reaction`, R`an electrochemical redox process`, R`a nuclear reaction`], correct: 2,
      solution: R`Fe is oxidised at anodic spots and O₂ is reduced at cathodic spots, through moisture.` },
    { level: 3, type: 'num', q: R`Find the emf (in V) of Cu | Cu²⁺ (0.01 M) || Cu²⁺ (0.1 M) | Cu at 298 K.`,
      answer: 0.0296, tol: 0.0005, unit: 'V',
      solution: R`\(E = \dfrac{0.0591}{2}\log10 \approx 0.0296\) V.` },
    { level: 3, type: 'num', q: R`A one-electron cell reaction has \(E^\circ = 0.0591\) V at 298 K. Find its equilibrium constant.`,
      answer: 10, tol: 0.01, unit: '',
      solution: R`\(\log K = nE^\circ/0.0591 = 1\), so \(K = 10\).` }
  ]
});
