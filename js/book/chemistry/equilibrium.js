// Book chapter: Equilibrium (chemical and ionic). Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figApproach = D.row([
  [D.plot({ w: 230, h: 180, x: [0, 5], y: [0, 1.1], xlabel: 't', ylabel: 'conc.', mathLabels: false, xticks: [[2.2, 't_{eq}']], yticks: [],
    fns: [{ f: function (t) { return 0.3 + 0.7 * Math.exp(-1.2 * t); }, color: 'b', label: 'reactants', lx: 3, ly: 0.4, math: false }, { f: function (t) { return 0.7 * (1 - Math.exp(-1.2 * t)); }, color: 'r', label: 'products', lx: 3, ly: 0.76, math: false }],
    segs: [{ x1: 2.2, y1: 0, x2: 2.2, y2: 1.05, color: 'm', dash: '3 3', w: 1 }], label: 'concentrations approach equilibrium' }), 'concentrations become constant'],
  [D.plot({ w: 230, h: 180, x: [0, 5], y: [0, 1.1], xlabel: 't', ylabel: 'rate', mathLabels: false, xticks: [[2.2, 't_{eq}']], yticks: [],
    fns: [{ f: function (t) { return 0.35 + 0.65 * Math.exp(-1.3 * t); }, color: 'b', label: 'forward', lx: 0.25, ly: 0.95, math: false }, { f: function (t) { return 0.35 * (1 - Math.exp(-1.3 * t)); }, color: 'r', label: 'backward', lx: 0.6, ly: 0.12, math: false }],
    segs: [{ x1: 2.2, y1: 0, x2: 2.2, y2: 1.05, color: 'm', dash: '3 3', w: 1 }], label: 'rates become equal' }), 'forward rate = backward rate']
]);

var figQK = D.svg(420, 110, [
  D.line(30, 55, 390, 55, { w: 2 }), D.line(210, 40, 210, 70, { color: 'k', w: 2.4 }), D.text(210, 86, 'Q = K: equilibrium', { size: 11, math: false }),
  D.arrow(60, 30, 190, 30, { color: 'g', w: 1.6, head: 7 }), D.text(115, 16, 'Q < K: forward reaction raises Q', { size: 11, math: false, color: 'g' }),
  D.arrow(360, 30, 230, 30, { color: 'r', w: 1.6, head: 7 }), D.text(305, 16, 'Q > K: backward reaction lowers Q', { size: 11, math: false, color: 'r' }),
  D.text(40, 72, 'Q smaller', { size: 10, math: false, color: 'm', anchor: 'start' }), D.text(380, 72, 'Q larger', { size: 10, math: false, color: 'm', anchor: 'end' })
], 'Comparing Q with K predicts the direction of reaction');

var figLeChat = D.plot({
  w: 420, h: 210, x: [0, 10], y: [0, 1.2], xlabel: 't', ylabel: 'conc.', mathLabels: false, xticks: [[4, 'H₂ added']], yticks: [],
  fns: [{ f: function (t) { return t < 4 ? 0.4 : 0.4 + 0.35 * Math.exp(-0.9 * (t - 4)) + 0.15; }, from: 0, to: 10, color: 'b', label: 'H₂', lx: 8.5, ly: 0.64, math: false, steps: 500 },
    { f: function (t) { return t < 4 ? 0.4 : 0.4 - 0.15 * (1 - Math.exp(-0.9 * (t - 4))); }, from: 0, to: 10, color: 'p', label: 'I₂', lx: 8.5, ly: 0.2, math: false, steps: 500 },
    { f: function (t) { return t < 4 ? 0.8 : 0.8 + 0.3 * (1 - Math.exp(-0.9 * (t - 4))); }, from: 0, to: 10, color: 'r', label: 'HI', lx: 8.5, ly: 1.15, math: false, steps: 500 }],
  label: "Adding H2 to H2 + I2 = 2HI: the equilibrium shifts to use up some of it"
});

var figPH = D.svg(440, 90, [
  '<defs><linearGradient id="ph-grad" x1="0" x2="1"><stop offset="0" stop-color="#d33"/><stop offset="0.3" stop-color="#f90"/><stop offset="0.5" stop-color="#3b3"/><stop offset="0.75" stop-color="#36c"/><stop offset="1" stop-color="#639"/></linearGradient></defs>',
  '<rect x="20" y="20" width="400" height="24" rx="4" fill="url(#ph-grad)"/>',
  [0, 2, 4, 6, 7, 8, 10, 12, 14].map(function (v) { var x = 20 + v / 14 * 400; return D.line(x, 44, x, 50, { w: 1.2 }) + D.text(x, 60, String(v), { size: 10, math: false }); }).join(''),
  D.text(60, 80, 'acidic', { size: 11, math: false, color: 'r' }), D.text(220, 80, 'neutral (7 at 298 K)', { size: 11, math: false, color: 'g' }), D.text(380, 80, 'basic', { size: 11, math: false, color: 'b' })
], 'The pH scale');

var figTitr = D.plot({
  w: 400, h: 220, x: [0, 50], y: [0, 14], xlabel: 'volume of NaOH added (mL)', ylabel: 'pH', mathLabels: false, xticks: [[25, '25']], yticks: [[7, '7']],
  fns: [{ f: function (v) { var a = 0.1 * 25, b = 0.1 * v, tot = (25 + v) / 1000 * 1000; if (Math.abs(a - b) < 1e-9) return 7; if (b < a) return -Math.log10((a - b) / (25 + v) * 1000 / 1000); return 14 + Math.log10((b - a) / (25 + v)); }, from: 0, to: 50, color: 'r', steps: 600, label: 'strong acid + strong base', lx: 28, ly: 4, math: false },
    { f: function (v) { var Ka = 1.8e-5, a = 2.5, b = 0.1 * v; if (v < 0.05) return 2.87; if (b < a - 1e-6) return -Math.log10(Ka) + Math.log10(b / (a - b)); if (Math.abs(b - a) < 1e-6) return 8.72; return 14 + Math.log10((b - a) / (25 + v)); }, from: 0, to: 50, color: 'b', steps: 600, dash: '6 4', label: 'weak acid', lx: 3, ly: 6.6, math: false }],
  label: 'Titration curves of 25 mL of 0.1 M acid with 0.1 M NaOH'
});

// ---------- chapter text ----------
JEE.book('chemistry', 'equilibrium', {
  intro: [
    R`Many processes stop before they are complete, not because they stop happening but because the reverse process catches up. In a sealed bottle of soda, CO₂ keeps escaping from the liquid and dissolving back at equal rates. This balanced state is <b>equilibrium</b>.`,
    R`This chapter treats equilibrium in physical and chemical processes, the law of mass action with K_c and K_p, the reaction quotient, Le Chatelier's principle, and then ionic equilibria: acids and bases, ionisation constants, pH, the common-ion effect, salt hydrolysis, buffers and the solubility product.`
  ],
  sections: [
    { h: R`Equilibrium in physical processes`, t: [0], blocks: [
      R`Equilibrium is <b>dynamic</b>: the forward and backward processes keep going at equal rates, so no net change is seen. Examples of physical equilibria:`,
      { points: [R`<b>Solid ⇌ liquid:</b> ice and water at 0 °C and 1 atm (the normal melting point); the amounts stay constant.`, R`<b>Liquid ⇌ vapour:</b> water in a closed vessel reaches a constant vapour pressure.`, R`<b>Solid ⇌ vapour:</b> iodine or camphor in a closed vessel (sublimation).`, R`<b>Solid ⇌ solution:</b> a saturated sugar solution with excess sugar; radioactive sugar added to it spreads into both phases, proving the exchange continues.`, R`<b>Gas ⇌ solution:</b> CO₂ dissolved in soda under pressure (Henry's law).`] },
      R`<b>General features:</b> equilibrium is possible only in a closed system at a given temperature; both opposing processes occur at the same rate; all measurable properties are constant; and at equilibrium some quantity has a fixed value at a given temperature (vapour pressure, solubility, the ratio [gas in solution]/[gas above]).`,
      { check: { q: R`Why does the level of water in a sealed bottle stay constant though evaporation never stops?`, ans: R`Condensation occurs at the same rate as evaporation: a dynamic equilibrium.` } }
    ] },

    { h: R`The law of chemical equilibrium`, t: [1], blocks: [
      R`For a reversible reaction in a closed vessel, the forward reaction slows as reactants are used up and the backward reaction speeds up as products build up, until the two rates are equal.`,
      { fig: figApproach, cap: R`At equilibrium, concentrations stop changing because the forward and backward rates have become equal.` },
      R`<b>Law of chemical equilibrium</b> (Guldberg and Waage's law of mass action): for \(aA + bB\rightleftharpoons cC + dD\) at equilibrium at a given temperature, \[K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}\] is a constant, the <b>equilibrium constant</b>. Its value depends only on temperature, not on the starting amounts.`,
      { points: [R`For the reverse reaction, K′ = 1/K.`, R`If the equation is multiplied by n, K′ = Kⁿ; for adding equations, multiply their K values.`, R`K is written with products on top; pure solids and liquids are left out (their "concentrations" are constant).`] },
      { ex: { q: R`1 mol each of H₂ and I₂ are heated in a 1 L flask; K_c = 50 for H₂ + I₂ ⇌ 2HI. Find the equilibrium amount of HI.`,
        steps: [R`At equilibrium: H₂ = I₂ = 1 − x, HI = 2x: \(\dfrac{(2x)^2}{(1 - x)^2} = 50\).`, R`Square root: \(\dfrac{2x}{1 - x} = 7.07\), so x = 0.78.`], ans: R`≈ 1.56 mol of HI` } },
      { check: { q: R`For N₂ + 3H₂ ⇌ 2NH₃, K = 0.5. What is K for 2NH₃ ⇌ N₂ + 3H₂?`, ans: R`1/0.5 = 2.` } }
    ] },

    { h: R`Kp and Kc`, t: [1], blocks: [
      R`For gaseous reactions it is convenient to use partial pressures: \(K_p = \dfrac{p_C^c\,p_D^d}{p_A^a\,p_B^b}\). Since p = (n/V)RT = [X]RT, \[K_p = K_c(RT)^{\Delta n_g}\] where \(\Delta n_g\) = moles of gaseous products − moles of gaseous reactants. Use R = 0.0821 L atm K⁻¹ mol⁻¹ (pressures in atm) or 0.0831 L bar K⁻¹ mol⁻¹ (bar).`,
      { ex: { q: R`For N₂O₄(g) ⇌ 2NO₂(g), K_c = 4.6 × 10⁻³ at 298 K. Find K_p.`,
        steps: [R`Δn_g = 2 − 1 = 1: K_p = 4.6 × 10⁻³ × 0.0821 × 298.`], ans: R`K_p ≈ 0.113` } },
      { check: { q: R`For which of these is K_p = K_c: H₂ + I₂ ⇌ 2HI, or PCl₅ ⇌ PCl₃ + Cl₂?`, ans: R`H₂ + I₂ ⇌ 2HI (Δn_g = 0).` } }
    ] },

    { h: R`Homogeneous and heterogeneous equilibria`, t: [1], blocks: [
      R`In a <b>homogeneous</b> equilibrium all species are in the same phase (all gases: N₂ + 3H₂ ⇌ 2NH₃; all in solution: esterification). In a <b>heterogeneous</b> equilibrium more than one phase is present; pure solids and liquids are omitted from K:`,
      { points: [R`CaCO₃(s) ⇌ CaO(s) + CO₂(g): \(K_p = p_{CO_2}\).`, R`H₂O(l) ⇌ H₂O(g): \(K_p = p_{H_2O}\) (the vapour pressure).`, R`Ni(s) + 4CO(g) ⇌ Ni(CO)₄(g): \(K_c = \dfrac{[Ni(CO)_4]}{[CO]^4}\).`] },
      { check: { q: R`Write K_c for Ag₂O(s) + 2HNO₃(aq) ⇌ 2AgNO₃(aq) + H₂O(l).`, ans: R`\(K_c = [AgNO_3]^2/[HNO_3]^2\).` } }
    ] },

    { h: R`Applications of equilibrium constants`, t: [1], blocks: [
      { points: [R`<b>Extent of reaction:</b> K > 10³: products predominate (nearly complete); K < 10⁻³: reactants predominate (hardly proceeds); in between: appreciable amounts of both.`, R`<b>Direction of reaction</b> (using Q, next section).`, R`<b>Equilibrium concentrations</b> from initial amounts, using an ICE (initial–change–equilibrium) table.`] },
      { tip: R`ICE tables: write the initial amounts, the changes in the ratio of the coefficients (−x, −x, +2x…), and the equilibrium amounts; then substitute into K. If K is very small, x ≪ initial amounts and the algebra simplifies.` },
      { check: { q: R`K for a reaction is 10⁻³⁰. Will you get much product?`, ans: R`No: the reaction hardly proceeds.` } }
    ] },

    { h: R`The reaction quotient`, t: [2], blocks: [
      R`The <b>reaction quotient</b> Q has the same form as K but uses the concentrations at any moment (not necessarily at equilibrium). Comparing Q with K predicts the direction of change:`,
      { fig: figQK, cap: R`If Q < K, the reaction proceeds forward to make more products; if Q > K, it proceeds backward; if Q = K, it is at equilibrium.` },
      { ex: { q: R`For N₂ + 3H₂ ⇌ 2NH₃, K_c = 0.061 at 500 K. A mixture has [N₂] = 2, [H₂] = 1 and [NH₃] = 1 mol/L. Which way will it react?`,
        steps: [R`\(Q = \dfrac{1^2}{2\times1^3} = 0.5\).`, R`Q > K.`], ans: R`Backward: some NH₃ decomposes` } },
      { check: { q: R`If Q < K, which way does the reaction go?`, ans: R`Forward (towards products).` } }
    ] },

    { h: R`ΔG, ΔG° and equilibrium`, t: [2], blocks: [
      R`The Gibbs energy links thermodynamics with equilibrium: \[\Delta G = \Delta G^\circ + RT\ln Q\] At equilibrium ΔG = 0 and Q = K, so \[\Delta G^\circ = -RT\ln K = -2.303RT\log K\]`,
      { points: [R`ΔG° < 0 ⇒ K > 1 (products favoured).`, R`ΔG° > 0 ⇒ K < 1 (reactants favoured).`, R`At any moment, ΔG < 0 (Q < K) means the forward reaction is spontaneous.`] },
      { ex: { q: R`For a reaction at 300 K, ΔG° = −5.74 kJ/mol. Find K.`,
        steps: [R`\(\log K = \dfrac{5740}{2.303\times8.314\times300} = 1.0\).`], ans: R`K = 10` } },
      { check: { q: R`At equilibrium, what is ΔG?`, ans: R`Zero.` } }
    ] },

    { h: R`Le Chatelier's principle`, t: [3], blocks: [
      R`<b>Le Chatelier's principle:</b> if a system at equilibrium is disturbed by a change in concentration, pressure or temperature, the equilibrium shifts in the direction that tends to undo the change.`,
      { fig: figLeChat, cap: R`After extra H₂ is added, some of it reacts with I₂ to form more HI, and a new equilibrium is established with the same K.` },
      { table: { head: [R`Change`, R`Shift`, R`Does K change?`], rows: [
        [R`Add a reactant (or remove a product)`, R`forward`, R`no`], [R`Increase pressure (decrease volume)`, R`towards fewer gas moles`, R`no`], [R`Add an inert gas at constant volume`, R`no shift`, R`no`], [R`Add an inert gas at constant pressure`, R`towards more gas moles (like lowering pressure)`, R`no`],
        [R`Raise temperature`, R`in the endothermic direction`, R`yes: K rises for endothermic, falls for exothermic reactions`], [R`Add a catalyst`, R`no shift; equilibrium reached faster`, R`no`]] } },
      R`<b>Haber process</b> (N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92 kJ): high pressure (about 200 atm) favours ammonia (fewer moles); low temperature would too, but the rate would be too slow, so a compromise of about 700 K with an iron catalyst is used, and NH₃ is removed as it forms.`,
      { check: { q: R`How does increasing pressure affect H₂ + I₂ ⇌ 2HI?`, ans: R`No shift: both sides have 2 mol of gas.` } }
    ] },

    { h: R`Acids and bases`, t: [4], blocks: [
      R`Substances that conduct electricity in solution are <b>electrolytes</b>. <b>Strong electrolytes</b> (strong acids and bases, most salts) ionise completely; <b>weak electrolytes</b> (acetic acid, ammonia) ionise only partly, setting up an ionic equilibrium.`,
      { table: { head: [R`Theory`, R`Acid`, R`Base`, R`Example`], rows: [
        [R`Arrhenius`, R`gives H⁺ (H₃O⁺) in water`, R`gives OH⁻ in water`, R`HCl, NaOH (limited to water)`],
        [R`Brønsted–Lowry`, R`proton donor`, R`proton acceptor`, R`NH₃ + H₂O ⇌ NH₄⁺ + OH⁻`],
        [R`Lewis`, R`electron-pair acceptor`, R`electron-pair donor`, R`BF₃ + :NH₃ → F₃B←NH₃`]] } },
      R`<b>Conjugate pairs</b> (Brønsted): an acid and the base formed from it by losing a proton (HCl/Cl⁻, NH₄⁺/NH₃, H₂O/OH⁻). The stronger the acid, the weaker its conjugate base. Water is <b>amphoteric</b>: it acts as an acid with NH₃ and as a base with HCl.`,
      { check: { q: R`What is the conjugate base of HSO₄⁻, and the conjugate acid of HSO₄⁻?`, ans: R`SO₄²⁻; H₂SO₄.` } }
    ] },

    { h: R`Ionisation constants of weak acids and bases`, t: [4], blocks: [
      R`A weak acid HA ionises partly: HA + H₂O ⇌ H₃O⁺ + A⁻, \(K_a = \dfrac{[H^+][A^-]}{[HA]}\). With initial concentration c and degree of ionisation α (Ostwald's dilution law): \[K_a = \frac{c\alpha^2}{1 - \alpha}\approx c\alpha^2,\qquad\alpha = \sqrt{K_a/c},\qquad[H^+] = \sqrt{K_ac}\]`,
      R`Similarly for a weak base, \(K_b\) and \([OH^-] = \sqrt{K_bc}\). We often use \(pK_a = -\log K_a\); a smaller pK_a means a stronger acid. For a conjugate pair, \(K_aK_b = K_w\) (= 10⁻¹⁴ at 298 K).`,
      { ex: { q: R`Find the pH and degree of ionisation of 0.1 M acetic acid (K_a = 1.8 × 10⁻⁵).`,
        steps: [R`\([H^+] = \sqrt{1.8\times10^{-5}\times0.1} = 1.34\times10^{-3}\) M.`, R`pH = −log[H⁺]; α = [H⁺]/c.`], ans: R`pH ≈ 2.87; α ≈ 0.013 (1.3%)` } },
      { h3: R`Multistage ionisation` },
      R`Polyprotic acids ionise in steps, each with its own constant: H₂S ⇌ H⁺ + HS⁻ (K_{a1} = 9.1 × 10⁻⁸), HS⁻ ⇌ H⁺ + S²⁻ (K_{a2} = 1.2 × 10⁻¹³). Always \(K_{a1} > K_{a2} > K_{a3}\) (it is harder to remove H⁺ from a negative ion), so [H⁺] comes almost entirely from the first step.`,
      { check: { q: R`Diluting a weak acid: does α increase or decrease?`, ans: R`Increases (α = √(K_a/c)), though [H⁺] decreases.` } }
    ] },

    { h: R`The ionic product of water and the pH scale`, t: [5], blocks: [
      R`Water ionises slightly: H₂O + H₂O ⇌ H₃O⁺ + OH⁻. The <b>ionic product of water</b> is \[K_w = [H^+][OH^-] = 1.0\times10^{-14}\ \text{at 298 K}\] In pure water [H⁺] = [OH⁻] = 10⁻⁷ M. K_w increases with temperature (ionisation is endothermic).`,
      R`<b>pH</b> = −log[H⁺] (Sørensen). Similarly pOH = −log[OH⁻], and pH + pOH = pK_w = 14 at 298 K.`,
      { fig: figPH, cap: R`pH below 7 is acidic, above 7 basic, at 298 K. Each unit is a tenfold change in [H⁺].` },
      { ex: { q: R`Find the pH of (a) 0.01 M HCl (b) 0.001 M NaOH (c) 10⁻⁸ M HCl.`,
        steps: [R`(a) [H⁺] = 10⁻²: pH 2. (b) [OH⁻] = 10⁻³: pOH 3, pH 11.`, R`(c) Not pH 8! Water's own 10⁻⁷ M H⁺ dominates: [H⁺] ≈ 1.05 × 10⁻⁷.`], ans: R`(a) 2 (b) 11 (c) ≈ 6.98 (slightly acidic)` } },
      { check: { q: R`Is pure water at 80 °C acidic, since its pH is about 6.3?`, ans: R`No: [H⁺] = [OH⁻], so it is neutral; K_w is larger at higher temperature.` } }
    ] },

    { h: R`The common-ion effect`, t: [6], blocks: [
      R`Adding an ion that is already present in an equilibrium shifts the equilibrium to use it up (Le Chatelier). For weak electrolytes, this <b>suppresses ionisation</b>: adding sodium acetate to acetic acid lowers [H⁺]; adding NH₄Cl to NH₄OH lowers [OH⁻]. This is the <b>common-ion effect</b>.`,
      { ex: { q: R`Find [H⁺] in a solution 0.1 M in acetic acid and 0.1 M in sodium acetate (K_a = 1.8 × 10⁻⁵).`,
        steps: [R`The acetate from the salt suppresses ionisation, so [A⁻] ≈ 0.1 and [HA] ≈ 0.1.`, R`[H⁺] = K_a[HA]/[A⁻] = K_a.`], ans: R`1.8 × 10⁻⁵ M (pH 4.74), much lower than 1.34 × 10⁻³ M without acetate` } },
      R`It is used in qualitative analysis: H₂S is passed in acidic solution (HCl provides H⁺, which suppresses S²⁻), so only the very insoluble sulphides of group II precipitate.`,
      { check: { q: R`Why is NH₄Cl added along with NH₄OH in group III analysis?`, ans: R`The common ion NH₄⁺ suppresses the ionisation of NH₄OH, keeping [OH⁻] low so only the group III hydroxides precipitate.` } }
    ] },

    { h: R`Hydrolysis of salts`, t: [7], blocks: [
      R`Ions of a salt from a weak acid or a weak base react with water (<b>hydrolysis</b>), changing the pH:`,
      { table: { head: [R`Salt of`, R`Example`, R`Solution`, R`pH (298 K)`], rows: [
        [R`strong acid + strong base`, R`NaCl, KNO₃`, R`neutral`, R`7`],
        [R`weak acid + strong base`, R`CH₃COONa, Na₂CO₃`, R`basic (anion hydrolyses)`, R`\(7 + \frac12pK_a + \frac12\log c\)`],
        [R`strong acid + weak base`, R`NH₄Cl, CuSO₄`, R`acidic (cation hydrolyses)`, R`\(7 - \frac12pK_b - \frac12\log c\)`],
        [R`weak acid + weak base`, R`CH₃COONH₄`, R`depends on K_a vs K_b`, R`\(7 + \frac12(pK_a - pK_b)\)`]] } },
      { ex: { q: R`Find the pH of 0.1 M sodium acetate (pK_a = 4.74) and 0.1 M NH₄Cl (pK_b = 4.74).`,
        steps: [R`Acetate: pH = 7 + 2.37 + ½(−1) = 8.87.`, R`NH₄Cl: pH = 7 − 2.37 − ½(−1) = 5.13.`], ans: R`≈ 8.87 (basic); ≈ 5.13 (acidic)` } },
      { check: { q: R`Is a solution of sodium carbonate acidic or basic?`, ans: R`Basic: CO₃²⁻ (from the weak acid H₂CO₃) hydrolyses to give OH⁻.` } }
    ] },

    { h: R`Buffer solutions`, t: [8], blocks: [
      R`A <b>buffer</b> resists changes in pH when small amounts of acid or base are added or when it is diluted. Blood is buffered at pH 7.4 by H₂CO₃/HCO₃⁻.`,
      { points: [R`<b>Acidic buffer:</b> a weak acid and its salt with a strong base (CH₃COOH + CH₃COONa). Added H⁺ is taken up by acetate; added OH⁻ is neutralised by acetic acid.`, R`<b>Basic buffer:</b> a weak base and its salt with a strong acid (NH₄OH + NH₄Cl).`] },
      R`<b>Henderson–Hasselbalch equation:</b> \[\text{pH} = pK_a + \log\frac{[\text{salt}]}{[\text{acid}]},\qquad\text{pOH} = pK_b + \log\frac{[\text{salt}]}{[\text{base}]}\] A buffer works best when [salt] ≈ [acid], i.e. pH ≈ pK_a (buffer range pK_a ± 1).`,
      { fig: figTitr, cap: R`Titrating a weak acid gives a flat buffer region (\(\text{pH}\approx pK_a\) at half-neutralisation, 12.5 mL) and a basic equivalence point at 25 mL; a strong acid stays low and jumps sharply through pH 7.` },
      { ex: { q: R`Find the pH of a buffer with 0.2 M sodium acetate and 0.1 M acetic acid (pK_a = 4.74).`,
        steps: [R`pH = 4.74 + log(0.2/0.1) = 4.74 + 0.30.`], ans: R`≈ 5.04` } },
      { check: { q: R`Does diluting a buffer change its pH?`, ans: R`Practically no: the ratio [salt]/[acid] stays the same.` } }
    ] },

    { h: R`Solubility product`, t: [9], blocks: [
      R`For a sparingly soluble salt in equilibrium with its saturated solution, e.g. AgCl(s) ⇌ Ag⁺ + Cl⁻, \[K_{sp} = [Ag^+][Cl^-]\] the <b>solubility product</b>. In general for \(M_xA_y\): \(K_{sp} = [M^{y+}]^x[A^{x-}]^y = x^xy^y\,s^{x+y}\), where s is the molar solubility.`,
      { table: { head: [R`Type`, R`Example`, R`K_sp in terms of s`], rows: [[R`AB`, R`AgCl, BaSO₄`, R`s²`], [R`AB₂ or A₂B`, R`CaF₂, Ag₂CrO₄`, R`4s³`], [R`AB₃`, R`Fe(OH)₃`, R`27s⁴`], [R`A₃B₂`, R`Ca₃(PO₄)₂`, R`108s⁵`]] } },
      { ex: { q: R`K_sp of AgCl is 1.8 × 10⁻¹⁰. Find its solubility in water and in 0.1 M NaCl.`,
        steps: [R`Water: s = √(1.8 × 10⁻¹⁰).`, R`In 0.1 M Cl⁻ (common ion): s = K_sp/0.1.`], ans: R`≈ 1.34 × 10⁻⁵ M; 1.8 × 10⁻⁹ M (ten thousand times less)` } },
      { h3: R`Applications` },
      { points: [R`<b>Predicting precipitation:</b> if the ionic product Q_sp > K_sp, a precipitate forms; if Q_sp < K_sp, the solution is unsaturated.`, R`<b>Common-ion effect</b> lowers solubility (salting out of soap with NaCl; purifying NaCl by passing HCl gas into its saturated solution).`, R`<b>Qualitative analysis:</b> separating cations by selective precipitation of sulphides and hydroxides.`] },
      { ex: { q: R`Find the solubility of CaF₂ (K_sp = 3.9 × 10⁻¹¹).`,
        steps: [R`K_sp = 4s³: s = (3.9 × 10⁻¹¹/4)^{1/3}.`], ans: R`≈ 2.1 × 10⁻⁴ M` } },
      { check: { q: R`Equal volumes of 10⁻⁴ M AgNO₃ and 10⁻⁴ M NaCl are mixed. Does AgCl precipitate (K_sp = 1.8 × 10⁻¹⁰)?`, ans: R`After mixing each is 5 × 10⁻⁵ M; Q = 2.5 × 10⁻⁹ > K_sp, so yes.` } }
    ] }
  ],
  summary: [
    R`Equilibrium is dynamic; physical equilibria (melting, vaporisation, sublimation, dissolution, Henry's law).`,
    R`Law of mass action: K_c = [C]^c[D]^d/[A]^a[B]^b; K_p = K_c(RT)^{Δn_g}; omit pure solids and liquids; K depends only on T.`,
    R`Q vs K: Q < K forward, Q > K backward. ΔG° = −RT ln K; ΔG = ΔG° + RT ln Q.`,
    R`Le Chatelier: concentration, pressure (fewer gas moles at high P), temperature (changes K), catalyst (no shift).`,
    R`Arrhenius, Brønsted–Lowry (conjugate pairs), Lewis acids and bases.`,
    R`Weak acid: α = √(K_a/c), [H⁺] = √(K_ac); K_aK_b = K_w; K_a1 > K_a2.`,
    R`K_w = 10⁻¹⁴ (298 K); pH = −log[H⁺]; pH + pOH = 14.`,
    R`Common-ion effect suppresses ionisation and solubility.`,
    R`Salt hydrolysis: WA+SB basic, SA+WB acidic, WA+WB pH = 7 + ½(pK_a − pK_b).`,
    R`Buffers: pH = pK_a + log([salt]/[acid]).`,
    R`K_sp: AB s², AB₂ 4s³, AB₃ 27s⁴; precipitation when Q_sp > K_sp.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §13.2 Equilibrium Constants`, url: 'https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants' },
    { t: R`OpenStax Chemistry 2e, §13.3 Shifting Equilibria: Le Châtelier's Principle`, url: 'https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle' },
    { t: R`OpenStax Chemistry 2e, §14.2 pH and pOH`, url: 'https://openstax.org/books/chemistry-2e/pages/14-2-ph-and-poh' },
    { t: R`OpenStax Chemistry 2e, §14.3 Relative Strengths of Acids and Bases`, url: 'https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases' },
    { t: R`OpenStax Chemistry 2e, §14.6 Buffers`, url: 'https://openstax.org/books/chemistry-2e/pages/14-6-buffers' },
    { t: R`OpenStax Chemistry 2e, §15.1 Precipitation and Dissolution`, url: 'https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution' }
  ]
});
})();
