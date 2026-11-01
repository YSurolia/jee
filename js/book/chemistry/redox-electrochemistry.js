// Book chapter: Redox Reactions and Electrochemistry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function beaker(x, y, w, h, liquid, col) { return D.path('M' + x + ' ' + y + ' L' + x + ' ' + (y + h) + ' L' + (x + w) + ' ' + (y + h) + ' L' + (x + w) + ' ' + y, { color: 'k', w: 1.8 }) + D.rect(x + 2, y + h * 0.3, w - 4, h * 0.7 - 2, { color: col || 'b', fill: 'soft', w: 0.01 }) + D.text(x + w / 2, y + h * 0.8, liquid, { size: 11, math: false }); }

// ---------- figures ----------
var figDaniell = D.svg(440, 230, [
  beaker(40, 90, 130, 120, 'ZnSO₄(aq)', 'b'), beaker(270, 90, 130, 120, 'CuSO₄(aq)', 'c'),
  D.rect(90, 60, 14, 110, { color: 'm', fill: 'soft', w: 1.4 }), D.text(80, 70, 'Zn', { size: 12, math: false, bold: true, anchor: 'end' }), D.rect(325, 60, 14, 110, { color: 'o', fill: 'soft', w: 1.4 }), D.text(350, 70, 'Cu', { size: 12, math: false, bold: true, anchor: 'start' }),
  D.path('M140 150 L140 70 Q 140 50 160 50 L280 50 Q 300 50 300 70 L300 150', { color: 'g', w: 10, fill: 'none' }).replace('stroke-width="10"', 'stroke-width="10" stroke-opacity="0.35"'), D.text(220, 66, 'salt bridge (KCl)', { size: 11, math: false, color: 'g' }),
  D.line(97, 60, 97, 18, { w: 1.6 }), D.line(97, 18, 190, 18, { w: 1.6 }), D.meter(190, 18, 250, 18, { s: 'V' }), D.line(250, 18, 332, 18, { w: 1.6 }), D.line(332, 18, 332, 60, { w: 1.6 }),
  D.arrow(260, 30, 300, 30, { color: 'b', w: 1.4, head: 6, label: 'e⁻', ly: -8, math: false, size: 11 }),
  D.text(97, 225, 'anode (−): Zn → Zn²⁺ + 2e⁻', { size: 10.5, math: false, color: 'r' }), D.text(335, 225, 'cathode (+): Cu²⁺ + 2e⁻ → Cu', { size: 10.5, math: false, color: 'b' })
], 'Daniell cell');

var figSHE = D.svg(260, 215, [
  beaker(60, 70, 140, 120, '1 M H⁺', 'b'), D.path('M120 30 L120 120 Q 120 135 135 135 L140 135', { color: 'k', w: 2 }),
  D.rect(122, 128, 40, 20, { color: 'm', fill: 'soft', w: 1.4 }), D.text(185, 140, 'Pt (platinum black)', { size: 10, math: false, anchor: 'start' }),
  D.line(100, 20, 100, 110, { color: 'k', w: 1.6 }), D.text(70, 20, 'H₂ (1 bar)', { size: 11, math: false, color: 'g', anchor: 'end' }), D.arrow(80, 20, 98, 20, { color: 'g', w: 1.4, head: 6 }),
  [[150, 122], [158, 116], [168, 124], [176, 117]].map(function (q) { return D.circle(q[0], q[1], 3, { color: 'g', w: 1 }); }).join(''),
  D.text(130, 208, 'E° = 0.00 V by definition', { size: 11, math: false, color: 'm' })
], 'Standard hydrogen electrode');

var figLambda = D.plot({
  w: 400, h: 220, x: [0, 0.35], y: [0, 450], xlabel: '√c', ylabel: 'Λm', xticks: [], yticks: [[150, '150'], [400, '400']],
  fns: [{ f: function (x) { return 150 - 94 * x; }, color: 'b', label: 'KCl (strong): Λm = Λ°m − A√c', lx: 0.06, ly: 175, math: false },
    { f: function (x) { var c = x * x, Ka = 1.8e-5, a = (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * c)) / (2 * c); return 390.7 * a; }, from: 0.003, to: 0.35, color: 'r', label: 'CH₃COOH (weak)', lx: 0.11, ly: 60, math: false, steps: 400 }],
  label: 'Molar conductivity against square root of concentration'
});

var figElectrolysis = D.svg(300, 220, [
  beaker(70, 70, 160, 120, 'molten NaCl', 'o'), D.rect(105, 40, 12, 120, { color: 'm', fill: 'soft', w: 1.4 }), D.rect(183, 40, 12, 120, { color: 'm', fill: 'soft', w: 1.4 }),
  D.line(111, 40, 111, 20, { w: 1.6 }), D.line(189, 40, 189, 20, { w: 1.6 }), D.line(111, 20, 130, 20, { w: 1.6 }), D.cell(130, 20, 170, 20, { flip: true }), D.line(170, 20, 189, 20, { w: 1.6 }),
  D.text(80, 55, 'cathode (−)', { size: 10, math: false, anchor: 'end', color: 'b' }), D.text(220, 55, 'anode (+)', { size: 10, math: false, anchor: 'start', color: 'r' }),
  D.text(100, 210, 'Na⁺ + e⁻ → Na', { size: 10, math: false, color: 'b' }), D.text(205, 210, '2Cl⁻ → Cl₂ + 2e⁻', { size: 10, math: false, color: 'r' })
], 'Electrolysis of molten sodium chloride');

var figRust = D.svg(420, 170, [
  D.rect(20, 110, 380, 40, { color: 'm', fill: 'soft', w: 1.6 }), D.text(210, 135, 'iron', { size: 12, math: false, bold: true }),
  D.path('M90 110 Q 210 20 330 110 Z', { color: 'b', fill: 'soft', w: 1.6 }), D.text(210, 60, 'water drop (with dissolved O₂, CO₂)', { size: 10.5, math: false, color: 'b' }),
  D.text(210, 100, 'anode: Fe → Fe²⁺ + 2e⁻', { size: 10.5, math: false, color: 'r' }), D.arrow(190, 112, 130, 112, { color: 'k', w: 1.2, head: 6, label: 'e⁻ through iron', ly: 14, math: false, size: 10 }),
  D.text(105, 92, 'cathode (edge, more O₂):', { size: 9.5, math: false, color: 'g', anchor: 'end' }), D.text(105, 104, 'O₂ + 4H⁺ + 4e⁻ → 2H₂O', { size: 9.5, math: false, color: 'g', anchor: 'end' }),
  D.text(210, 165, 'Fe²⁺ is oxidised further by air to rust, Fe₂O₃·xH₂O', { size: 10.5, math: false, color: 'o' })
], 'Rusting is an electrochemical process');

// ---------- chapter text ----------
JEE.book('chemistry', 'redox-electrochemistry', {
  intro: [
    R`Burning, rusting, respiration, photosynthesis and every battery involve <b>redox reactions</b>: the transfer of electrons from one substance to another. When the electron flow is made to pass through a wire, chemical energy becomes electrical energy; when an external current drives a reaction, electrical energy becomes chemical energy. This is <b>electrochemistry</b>.`,
    R`This chapter covers oxidation numbers and balancing redox equations, electrolytic conduction and conductivity, Kohlrausch's law, galvanic cells and electrode potentials, the Nernst equation, the link between cell potential and Gibbs energy, electrolysis and Faraday's laws, batteries and fuel cells, and corrosion.`
  ],
  sections: [
    { h: R`Oxidation and reduction`, t: [0], blocks: [
      R`Originally, <b>oxidation</b> meant adding oxygen (or removing hydrogen) and <b>reduction</b> the reverse. In terms of electrons: \[\text{oxidation = loss of electrons},\qquad\text{reduction = gain of electrons}\] (OIL RIG). The substance oxidised is the <b>reducing agent</b> (it gives electrons); the substance reduced is the <b>oxidising agent</b>.`,
      R`Oxidation and reduction always occur together, in a <b>redox reaction</b>: in Zn + Cu²⁺ → Zn²⁺ + Cu, zinc is oxidised (loses 2e⁻) and Cu²⁺ is reduced (gains 2e⁻).`,
      { check: { q: R`In 2Na + Cl₂ → 2NaCl, which is the oxidising agent?`, ans: R`Cl₂ (it gains electrons and is reduced).` } }
    ] },

    { h: R`Oxidation number`, t: [0], blocks: [
      R`The <b>oxidation number</b> (oxidation state) of an atom is the charge it would have if all its bonds were completely ionic (electrons assigned to the more electronegative atom). Oxidation is an increase in oxidation number; reduction is a decrease.`,
      { points: [R`Free elements: 0 (Na, O₂, P₄, S₈).`, R`Monatomic ions: their charge (Na⁺ +1, Cl⁻ −1).`, R`Oxygen: −2 (except peroxides −1, superoxides −½, OF₂ +2).`, R`Hydrogen: +1 (except metal hydrides like NaH, −1).`, R`Fluorine always −1; alkali metals +1; alkaline earth metals +2.`, R`The sum of oxidation numbers equals the charge of the species (zero for neutral molecules).`] },
      { ex: { q: R`Find the oxidation number of Cr in K₂Cr₂O₇, Mn in KMnO₄, and Fe in Fe₃O₄.`,
        steps: [R`K₂Cr₂O₇: 2(+1) + 2x + 7(−2) = 0, so x = +6.`, R`KMnO₄: +1 + x − 8 = 0, so x = +7.`, R`Fe₃O₄: 3x − 8 = 0, so x = +8/3 (an average: the compound contains Fe²⁺ and Fe³⁺).`], ans: R`+6, +7, +8/3` } },
      { check: { q: R`What is the oxidation number of S in H₂SO₄?`, ans: R`+6.` } }
    ] },

    { h: R`Types of redox reactions`, t: [0], blocks: [
      { points: [
        R`<b>Combination:</b> C + O₂ → CO₂; 2Mg + N₂ → Mg₃N₂.`,
        R`<b>Decomposition:</b> 2KClO₃ → 2KCl + 3O₂.`,
        R`<b>Displacement:</b> a more reactive metal displaces a less reactive one: Zn + CuSO₄ → ZnSO₄ + Cu; Cl₂ + 2KBr → 2KCl + Br₂.`,
        R`<b>Disproportionation:</b> the same element is simultaneously oxidised and reduced: Cl₂ + 2OH⁻ → Cl⁻ + ClO⁻ + H₂O (Cl: 0 → −1 and +1); 2H₂O₂ → 2H₂O + O₂ (O: −1 → −2 and 0).`
      ] },
      { check: { q: R`Can F₂ undergo disproportionation?`, ans: R`No: fluorine cannot have a positive oxidation state, so it can only be reduced.` } }
    ] },

    { h: R`Balancing redox reactions: oxidation-number method`, t: [1], blocks: [
      { points: [R`Write the skeleton equation and the oxidation numbers of the atoms that change.`, R`Find the increase and decrease in oxidation number; multiply to make them equal.`, R`Balance the atoms other than O and H; then balance O with H₂O and H with H⁺ (acid) or with H₂O and OH⁻ (base).`] },
      { ex: { q: R`Balance: Cu + HNO₃ (dilute) → Cu(NO₃)₂ + NO + H₂O.`,
        steps: [R`Cu: 0 → +2 (increase 2). N: +5 → +2 (decrease 3).`, R`Multiply: 3Cu and 2NO (6 electrons each way).`, R`Add 6 NO₃⁻ for the 3Cu(NO₃)₂: 8HNO₃ in total; balance H and O with 4H₂O.`], ans: R`3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O` } },
      { check: { q: R`In this reaction, how many HNO₃ molecules act as oxidising agent?`, ans: R`2 (those reduced to NO); the other 6 just supply nitrate ions.` } }
    ] },

    { h: R`Balancing redox reactions: half-reaction method`, t: [1], blocks: [
      { points: [R`Split the reaction into oxidation and reduction half-reactions.`, R`Balance atoms other than O and H; then O with H₂O, H with H⁺; then charge with electrons.`, R`Multiply the half-reactions to equalise electrons and add. In basic solution, add OH⁻ to both sides to cancel the H⁺.`] },
      { ex: { q: R`Balance in acid: MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺.`,
        steps: [R`Reduction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O.`, R`Oxidation: Fe²⁺ → Fe³⁺ + e⁻ (× 5).`], ans: R`MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O` } },
      { tip: R`Redox titrations use these ratios directly: 1 mol of permanganate oxidises 5 mol of Fe²⁺ in acid; 1 mol of dichromate oxidises 6 mol of Fe²⁺.` },
      { check: { q: R`How many electrons does MnO₄⁻ gain in acid? In neutral solution (to MnO₂)?`, ans: R`5; 3.` } }
    ] },

    { h: R`Electrolytic and metallic conduction`, t: [2], blocks: [
      { table: { head: [R``, R`Metallic (electronic)`, R`Electrolytic (ionic)`], rows: [
        [R`Carriers`, R`electrons`, R`ions (in solution or molten)`], [R`Chemical change`, R`none`, R`yes, at the electrodes`], [R`Matter transferred`, R`no`, R`yes`],
        [R`Effect of rising temperature`, R`conductance decreases`, R`conductance increases (ions move faster, viscosity falls)`]] } },
      R`Electrolytic conductance depends on the nature of the electrolyte (strong or weak), the size and solvation of ions, the solvent and its viscosity, concentration and temperature.`,
      { check: { q: R`Why does the conductivity of a salt solution increase with temperature?`, ans: R`Ions move faster (lower viscosity, more kinetic energy), and weak electrolytes ionise more.` } }
    ] },

    { h: R`Conductance and conductivity`, t: [3], blocks: [
      R`Like any conductor, an electrolyte has resistance \(R = \rho\dfrac lA\). Its reciprocal is the <b>conductance</b> G = 1/R (siemens, S), and the reciprocal of resistivity is the <b>conductivity</b> (specific conductance) \(\kappa = \dfrac1\rho = \dfrac{G^*}{R}\), where \(G^* = l/A\) is the <b>cell constant</b> (found using a standard KCl solution).`,
      R`<b>Molar conductivity</b> is the conductivity of a solution per mole of electrolyte: \[\Lambda_m = \frac{\kappa}{c}\quad(\kappa\text{ in S cm}^{-1},\ c\text{ in mol cm}^{-3};\ \text{or } \Lambda_m = \frac{1000\,\kappa}{c}\ \text{with } c\text{ in mol/L})\] Unit: S cm² mol⁻¹ (or S m² mol⁻¹).`,
      { ex: { q: R`A 0.1 M KCl solution (κ = 1.29 S/m) has a resistance of 100 Ω in a cell. Find the cell constant and the molar conductivity.`,
        steps: [R`G* = κR = 1.29 × 100 = 129 m⁻¹.`, R`c = 0.1 mol/L = 100 mol/m³: Λm = 1.29/100 S m²/mol.`], ans: R`129 m⁻¹; 0.0129 S m² mol⁻¹ = 129 S cm² mol⁻¹` } },
      { h3: R`Variation with concentration` },
      R`On dilution, <b>conductivity decreases</b> (fewer ions per unit volume), but <b>molar conductivity increases</b> (each mole of electrolyte has more freedom: weaker interionic attraction, and for weak electrolytes more ionisation). The value at infinite dilution is the <b>limiting molar conductivity</b> \(\Lambda_m^\circ\).`,
      { fig: figLambda, cap: R`For strong electrolytes Λm rises slightly and linearly as √c falls (Debye–Hückel–Onsager: Λm = Λ°m − A√c). For weak electrolytes it rises steeply at low concentration because ionisation increases.` },
      { adv: R`<b>Equivalent conductivity</b> \(\Lambda_{eq} = \dfrac{1000\,\kappa}{N}\) (N = normality) is the conductivity per gram-equivalent; \(\Lambda_m = \Lambda_{eq}\times\) n-factor (for CaCl₂, Λm = 2Λeq).` },
      { check: { q: R`On diluting acetic acid, what happens to κ and Λm?`, ans: R`κ decreases; Λm increases (sharply).` } }
    ] },

    { h: R`Kohlrausch's law and its applications`, t: [4], blocks: [
      R`<b>Kohlrausch's law of independent migration of ions:</b> at infinite dilution, each ion contributes a definite amount to the molar conductivity, whatever the other ion: \[\Lambda_m^\circ = \nu_+\lambda_+^\circ + \nu_-\lambda_-^\circ\] (ν = number of each ion in the formula; Λ°m(CaCl₂) = λ°(Ca²⁺) + 2λ°(Cl⁻)).`,
      R`<b>Application 1: Λ°m of a weak electrolyte</b>, which cannot be found by extrapolation: \[\Lambda_m^\circ(\text{CH}_3\text{COOH}) = \Lambda_m^\circ(\text{HCl}) + \Lambda_m^\circ(\text{CH}_3\text{COONa}) - \Lambda_m^\circ(\text{NaCl})\]`,
      R`<b>Application 2: degree of dissociation and K_a</b> of a weak electrolyte: \(\alpha = \dfrac{\Lambda_m^c}{\Lambda_m^\circ}\), then \(K_a = \dfrac{c\alpha^2}{1 - \alpha}\).`,
      { ex: { q: R`Λ°m values: HCl 426.2, CH₃COONa 91.0, NaCl 126.5 S cm²/mol. 0.001028 M acetic acid has Λm = 48.15 S cm²/mol. Find α and K_a.`,
        steps: [R`Λ°m(CH₃COOH) = 426.2 + 91.0 − 126.5 = 390.7.`, R`α = 48.15/390.7 = 0.123; K_a = cα²/(1 − α).`], ans: R`α ≈ 0.123; K_a ≈ 1.78 × 10⁻⁵` } },
      { check: { q: R`Why can Λ°m of a strong electrolyte be found by extrapolation but not that of a weak electrolyte?`, ans: R`A strong electrolyte's Λm–√c graph is a straight line; a weak electrolyte's rises steeply near zero concentration and cannot be extrapolated.` } }
    ] },

    { h: R`Electrochemical cells`, t: [5], blocks: [
      R`A <b>galvanic (voltaic) cell</b> converts the chemical energy of a spontaneous redox reaction into electrical energy. An <b>electrolytic cell</b> uses electrical energy to drive a non-spontaneous reaction.`,
      { fig: figDaniell, cap: R`Daniell cell: zinc is oxidised at the anode, copper ions are reduced at the cathode; electrons flow through the wire from Zn to Cu, and the salt bridge completes the circuit.` },
      { points: [R`Each half (an electrode in its solution) is a <b>half-cell</b>. Oxidation occurs at the <b>anode</b> (negative in a galvanic cell); reduction at the <b>cathode</b> (positive).`, R`The <b>salt bridge</b> (KCl or KNO₃ in agar) lets ions flow to keep both solutions neutral and completes the circuit.`, R`<b>Cell notation:</b> anode on the left: Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s).`] },
      { h3: R`Types of electrodes` },
      R`Metal–metal ion electrodes (Zn | Zn²⁺), gas electrodes (Pt, H₂ | H⁺), redox electrodes (Pt | Fe²⁺, Fe³⁺), and metal–insoluble salt electrodes (Ag | AgCl | Cl⁻; the calomel electrode Hg | Hg₂Cl₂ | Cl⁻).`,
      { check: { q: R`In a galvanic cell, is the anode positive or negative?`, ans: R`Negative (electrons are released there).` } }
    ] },

    { h: R`Electrode potentials and the electrochemical series`, t: [5], blocks: [
      R`Each half-cell has a tendency to gain electrons, its <b>reduction potential</b>. It cannot be measured alone, so it is measured against the <b>standard hydrogen electrode</b> (SHE), whose standard potential is defined as 0.00 V.`,
      { fig: figSHE, cap: R`SHE: platinum coated with platinum black, in 1 M H⁺, with hydrogen gas at 1 bar bubbling over it.` },
      R`The <b>standard electrode potential</b> E° is measured with all concentrations 1 M (gases 1 bar) at 298 K. Listing them gives the <b>electrochemical series</b>:`,
      { table: { head: [R`Half-reaction`, R`E° (V)`], rows: [
        [R`F₂ + 2e⁻ → 2F⁻`, R`+2.87`], [R`MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O`, R`+1.51`], [R`Cl₂ + 2e⁻ → 2Cl⁻`, R`+1.36`], [R`Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O`, R`+1.33`], [R`Ag⁺ + e⁻ → Ag`, R`+0.80`],
        [R`Cu²⁺ + 2e⁻ → Cu`, R`+0.34`], [R`2H⁺ + 2e⁻ → H₂`, R`0.00`], [R`Zn²⁺ + 2e⁻ → Zn`, R`−0.76`], [R`Mg²⁺ + 2e⁻ → Mg`, R`−2.36`], [R`Li⁺ + e⁻ → Li`, R`−3.05`]] } },
      { points: [R`Higher (more positive) E°: stronger oxidising agent (F₂ is the strongest). Lower E°: stronger reducing agent (Li is the strongest).`, R`A metal with lower E° displaces one with higher E° from its salt (Zn displaces Cu).`, R`Metals with negative E° displace hydrogen from dilute acids.`] },
      { check: { q: R`Can copper displace hydrogen from dilute HCl?`, ans: R`No: E°(Cu²⁺/Cu) = +0.34 V is above hydrogen.` } }
    ] },

    { h: R`The emf of a galvanic cell`, t: [5], blocks: [
      R`The <b>cell potential</b> (emf) is the difference between the reduction potentials of the cathode and the anode: \[E^\circ_{cell} = E^\circ_{cathode} - E^\circ_{anode} = E^\circ_{right} - E^\circ_{left}\] A positive \(E_{cell}\) means the cell reaction is spontaneous as written. It is measured with a high-resistance voltmeter (or potentiometer) so that almost no current flows.`,
      { ex: { q: R`Find E° for the Daniell cell.`,
        steps: [R`E° = E°(Cu²⁺/Cu) − E°(Zn²⁺/Zn) = 0.34 − (−0.76).`], ans: R`1.10 V` } },
      { mistake: R`Multiplying E° by the coefficients when balancing. Electrode potentials are intensive: E°(Ag⁺/Ag) is 0.80 V whether one or two electrons are transferred.` },
      { check: { q: R`Which cell has the larger emf: Zn–Cu or Mg–Cu?`, ans: R`Mg–Cu: 0.34 − (−2.36) = 2.70 V.` } }
    ] },

    { h: R`The Nernst equation`, t: [6], blocks: [
      R`Electrode and cell potentials depend on concentration. For a reduction \(M^{n+} + ne^-\to M\): \[E = E^\circ - \frac{RT}{nF}\ln\frac{1}{[M^{n+}]} = E^\circ - \frac{0.0591}{n}\log\frac{1}{[M^{n+}]}\ \ \text{(298 K)}\] For a whole cell with reaction quotient Q: \[E_{cell} = E^\circ_{cell} - \frac{0.0591}{n}\log Q\]`,
      { ex: { q: R`Find the emf of Zn | Zn²⁺(0.1 M) || Cu²⁺(0.001 M) | Cu.`,
        steps: [R`Q = [Zn²⁺]/[Cu²⁺] = 100; n = 2.`, R`E = 1.10 − (0.0591/2) log 100.`], ans: R`≈ 1.041 V` } },
      { h3: R`Equilibrium constant from the cell potential` },
      R`At equilibrium the cell is "flat": E_cell = 0 and Q = K, so \[E^\circ_{cell} = \frac{0.0591}{n}\log K\quad\text{or}\quad\log K = \frac{nE^\circ_{cell}}{0.0591}\]`,
      { ex: { q: R`Find K for Zn + Cu²⁺ ⇌ Zn²⁺ + Cu at 298 K.`,
        steps: [R`log K = 2 × 1.10/0.0591 = 37.2.`], ans: R`K ≈ 1.6 × 10³⁷: the reaction goes essentially to completion` } },
      { adv: R`<b>Concentration cells</b> have the same electrodes in solutions of different concentration: E° = 0 and \(E = \dfrac{0.0591}{n}\log\dfrac{c_2}{c_1}\) (c₂ at the cathode). The pH of a solution can be measured with a hydrogen electrode: E = −0.0591 pH.` },
      { check: { q: R`What is E_cell when the cell reaction reaches equilibrium?`, ans: R`Zero.` } }
    ] },

    { h: R`Cell potential and Gibbs energy`, t: [7], blocks: [
      R`The electrical work done by a cell (charge × potential) equals the decrease in Gibbs energy: \[\Delta G = -nFE_{cell},\qquad\Delta G^\circ = -nFE^\circ_{cell}\] where F = 96 485 C/mol (the <b>Faraday constant</b>, the charge on 1 mol of electrons). Positive E means negative ΔG: spontaneous. Combining with ΔG° = −RT ln K gives the same link between E° and K.`,
      { ex: { q: R`Find ΔG° for the Daniell cell.`,
        steps: [R`ΔG° = −2 × 96 485 × 1.10 J.`], ans: R`≈ −212 kJ/mol` } },
      { check: { q: R`If E°_cell is negative, is the reaction spontaneous?`, ans: R`No: ΔG° > 0; the reverse reaction is spontaneous.` } }
    ] },

    { h: R`Electrolysis and its products`, t: [8], blocks: [
      R`In <b>electrolysis</b>, a direct current drives a non-spontaneous reaction. Cations move to the cathode (−) and are reduced; anions move to the anode (+) and are oxidised.`,
      { fig: figElectrolysis, cap: R`Electrolysis of molten NaCl gives sodium metal at the cathode and chlorine gas at the anode.` },
      R`In aqueous solutions, water can also be oxidised or reduced, and the products depend on the electrode potentials (and overpotential):`,
      { table: { head: [R`Electrolyte (inert electrodes)`, R`Cathode`, R`Anode`], rows: [
        [R`Molten NaCl`, R`Na`, R`Cl₂`], [R`Aqueous NaCl (concentrated)`, R`H₂ (water reduced; Na⁺ is too hard to reduce)`, R`Cl₂ (overpotential of O₂)`], [R`Aqueous CuSO₄ (Pt electrodes)`, R`Cu`, R`O₂`],
        [R`Aqueous CuSO₄ (Cu electrodes)`, R`Cu deposited`, R`Cu dissolves (used to purify copper)`], [R`Dilute H₂SO₄`, R`H₂`, R`O₂`]] } },
      { check: { q: R`Why is sodium not formed when aqueous NaCl is electrolysed?`, ans: R`Water (E° = −0.83 V) is reduced far more easily than Na⁺ (−2.71 V), so H₂ forms.` } }
    ] },

    { h: R`Faraday's laws of electrolysis`, t: [8], blocks: [
      { points: [R`<b>First law:</b> the mass of substance deposited or liberated at an electrode is proportional to the charge passed: m = ZQ = ZIt (Z is the electrochemical equivalent).`, R`<b>Second law:</b> when the same charge passes through different electrolytes, the masses liberated are proportional to their equivalent masses (M/n).`] },
      R`Combined: \[m = \frac{Q}{F}\times\frac{M}{n} = \frac{ItM}{nF}\] 1 F (96 485 C) deposits 1 mol of a monovalent ion (108 g of Ag), ½ mol of a divalent ion (31.75 g of Cu).`,
      { ex: { q: R`A current of 2 A flows through CuSO₄ solution for 965 s. What mass of copper is deposited?`,
        steps: [R`Q = 1930 C = 0.02 F.`, R`Cu²⁺ needs 2 F per mol: 0.01 mol × 63.5 g/mol.`], ans: R`≈ 0.635 g` } },
      { check: { q: R`The same charge deposits 1.08 g of silver. What mass of copper does it deposit?`, ans: R`0.01 F: Cu = 0.005 mol = 0.3175 g.` } }
    ] },

    { h: R`Batteries and fuel cells`, t: [9], blocks: [
      { table: { head: [R`Cell`, R`Anode`, R`Cathode`, R`Electrolyte`, R`Voltage / use`], rows: [
        [R`Dry (Leclanché) cell, primary`, R`zinc container`, R`carbon rod with MnO₂`, R`NH₄Cl + ZnCl₂ paste`, R`1.5 V; torches, clocks`],
        [R`Mercury cell, primary`, R`Zn–Hg amalgam`, R`HgO + carbon`, R`KOH + ZnO paste`, R`1.35 V, constant; watches, hearing aids`],
        [R`Lead storage battery, secondary`, R`Pb`, R`PbO₂`, R`38% H₂SO₄`, R`2 V per cell; cars`],
        [R`Nickel–cadmium, secondary`, R`Cd`, R`NiO(OH)`, R`KOH`, R`1.2 V; rechargeable`],
        [R`H₂–O₂ fuel cell`, R`H₂ (porous carbon + catalyst)`, R`O₂`, R`hot KOH`, R`1.23 V; spacecraft (Apollo)`]] } },
      { points: [R`<b>Primary</b> cells cannot be recharged; <b>secondary</b> cells can be recharged by passing current in the reverse direction.`, R`<b>Lead accumulator</b> discharge: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O; the density of the acid falls as it discharges.`, R`<b>Fuel cells</b> convert the energy of a fuel directly into electricity, with about 70% efficiency (vs 40% for power stations) and only water as product: 2H₂ + O₂ → 2H₂O.`] },
      { check: { q: R`Why can't a dry cell be recharged?`, ans: R`Its reactions are not reversible (the products do not reform the reactants when current is reversed).` } }
    ] },

    { h: R`Corrosion`, t: [9], blocks: [
      R`<b>Corrosion</b> is the slow destruction of metals by their environment: rusting of iron, tarnishing of silver, green coating on copper. Rusting is an electrochemical process:`,
      { fig: figRust, cap: R`Under a water drop, iron is oxidised at one region (anode) and oxygen is reduced at another (cathode); the iron itself conducts electrons between them.` },
      R`Anode: 2Fe → 2Fe²⁺ + 4e⁻ (E° = −0.44 V). Cathode: O₂ + 4H⁺ + 4e⁻ → 2H₂O (E° = +1.23 V). Overall E°_cell = 1.67 V. Fe²⁺ is further oxidised to hydrated iron(III) oxide, rust (Fe₂O₃·xH₂O). Salt water and acidic air speed it up.`,
      { points: [R`<b>Barrier protection:</b> paint, oil, grease, plastic coatings.`, R`<b>Galvanising:</b> coating with zinc, which is more reactive and corrodes first even if scratched (sacrificial protection).`, R`<b>Cathodic protection:</b> connecting a more reactive metal (Mg, Zn blocks) to ships' hulls and pipelines.`, R`<b>Alloying</b> (stainless steel with Cr) and using anti-rust solutions.`] },
      { check: { q: R`Why does a scratched galvanised iron sheet still not rust, while scratched tin-plated iron does?`, ans: R`Zinc is more reactive than iron and corrodes instead; tin is less reactive, so iron becomes the anode and corrodes faster.` } }
    ] }
  ],
  summary: [
    R`Oxidation = loss of electrons / increase in oxidation number; reduction the reverse. Oxidising agent is reduced.`,
    R`Oxidation-number rules; types: combination, decomposition, displacement, disproportionation.`,
    R`Balancing: oxidation-number method; half-reaction (ion–electron) method in acid or base.`,
    R`Metallic vs electrolytic conduction. κ = G*/R; Λm = 1000κ/c; κ falls and Λm rises on dilution.`,
    R`Kohlrausch: Λ°m = ν₊λ°₊ + ν₋λ°₋; α = Λm/Λ°m; K_a = cα²/(1 − α).`,
    R`Galvanic cell: anode (−) oxidation, cathode (+) reduction; salt bridge; E°cell = E°cathode − E°anode; SHE = 0 V.`,
    R`Electrochemical series: high E° strong oxidant (F₂), low E° strong reductant (Li).`,
    R`Nernst: E = E° − (0.0591/n) log Q; log K = nE°/0.0591; ΔG = −nFE.`,
    R`Electrolysis products depend on E° and overpotential. Faraday: m = ItM/(nF), F = 96 485 C.`,
    R`Dry cell 1.5 V, mercury cell 1.35 V, lead accumulator 2 V, H₂–O₂ fuel cell 1.23 V.`,
    R`Rusting is electrochemical; prevented by barriers, galvanising, cathodic (sacrificial) protection, alloying.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §17.1 Review of Redox Chemistry`, url: 'https://openstax.org/books/chemistry-2e/pages/17-1-review-of-redox-chemistry' },
    { t: R`OpenStax Chemistry 2e, §17.2 Galvanic Cells`, url: 'https://openstax.org/books/chemistry-2e/pages/17-2-galvanic-cells' },
    { t: R`OpenStax Chemistry 2e, §17.3 Electrode and Cell Potentials`, url: 'https://openstax.org/books/chemistry-2e/pages/17-3-electrode-and-cell-potentials' },
    { t: R`OpenStax Chemistry 2e, §17.4 Potential, Free Energy, and Equilibrium`, url: 'https://openstax.org/books/chemistry-2e/pages/17-4-potential-free-energy-and-equilibrium' },
    { t: R`OpenStax Chemistry 2e, §17.5 Batteries and Fuel Cells`, url: 'https://openstax.org/books/chemistry-2e/pages/17-5-batteries-and-fuel-cells' },
    { t: R`OpenStax Chemistry 2e, §17.6 Corrosion`, url: 'https://openstax.org/books/chemistry-2e/pages/17-6-corrosion' },
    { t: R`OpenStax Chemistry 2e, §17.7 Electrolysis`, url: 'https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis' },
    { t: R`Wikipedia: Kohlrausch's law`, url: 'https://en.wikipedia.org/wiki/Kohlrausch%27s_law' }
  ]
});
})();
