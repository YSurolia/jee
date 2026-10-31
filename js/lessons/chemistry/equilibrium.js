// Lesson: Equilibrium.
var R = String.raw;
JEE.lesson('chemistry', 'equilibrium', {
  theory: [
    { h: R`Dynamic equilibrium`,
      body: [
        R`Many processes go both ways at once. When the forward and backward rates become equal, the amounts stop changing. This is <b>equilibrium</b>, and it is <b>dynamic</b>: both processes are still happening, just at equal speed.`,
        R`<b>Physical equilibria:</b> water ⇌ vapour in a closed bottle, ice ⇌ water at 0 °C, a saturated sugar solution. <b>Chemical equilibria:</b> N₂ + 3H₂ ⇌ 2NH₃.`,
        R`Equilibrium can be reached from either side, and it needs a closed system.`
      ],
      analogy: R`Picture an escalator with people going up and others coming down at the same rate. The number of people on each floor stays the same, but people are always moving.`,
      check: { q: R`At equilibrium, has the reaction stopped?`, ans: R`No. Forward and backward reactions continue at equal rates.` } },

    { h: R`The law of mass action: Kc and Kp`,
      body: [
        R`For \(aA + bB \rightleftharpoons cC + dD\), at equilibrium \(K_c = \dfrac{[C]^c[D]^d}{[A]^a[B]^b}\). Pure solids and liquids are left out.`,
        R`For gases we can use partial pressures: \(K_p = \dfrac{p_C^cp_D^d}{p_A^ap_B^b}\), and \(K_p = K_c(RT)^{\Delta n_g}\), where \(\Delta n_g\) = gas moles of products − gas moles of reactants.`,
        R`A large K (> 10³) means mostly products; a small K (< 10⁻³) means mostly reactants. K changes only with temperature.`
      ],
      points: [R`Reverse the reaction: K becomes 1/K. Multiply the equation by n: K becomes \(K^n\). Add reactions: multiply their K values.`],
      mistake: R`Including solids or pure liquids in K. For CaCO₃(s) ⇌ CaO(s) + CO₂(g), \(K_p = p_{CO_2}\) only.` },

    { h: R`The reaction quotient Q`,
      body: [
        R`\(Q\) has the same formula as K, but uses the concentrations at any moment, not just at equilibrium.`,
        R`If \(Q < K\), there are too few products, so the reaction moves forward. If \(Q > K\), it moves backward. If \(Q = K\), it is at equilibrium.`
      ],
      analogy: R`K is your target score; Q is your current score. If you're below the target, you keep going forward.` },

    { h: R`Le Chatelier's principle`,
      body: [
        R`<b>If an equilibrium is disturbed, it shifts in the direction that undoes the disturbance.</b>`,
        R`<b>Add a reactant</b> → shifts forward to use it up. <b>Raise the pressure</b> (squeeze) → shifts to the side with fewer gas moles. <b>Raise the temperature</b> → shifts in the endothermic direction (and K changes).`,
        R`A <b>catalyst</b> speeds up both directions equally, so it doesn't shift the equilibrium; it is just reached sooner. Adding an inert gas at constant volume has no effect.`
      ],
      analogy: R`In a see-saw that's balanced, if someone sits on one side, the other side reacts to restore balance. Equilibria behave in the same "resisting" way.`,
      points: [R`Haber process (N₂ + 3H₂ ⇌ 2NH₃, exothermic): high pressure and moderate temperature favour ammonia.`] },

    { h: R`Acids and bases`,
      body: [
        R`<b>Arrhenius:</b> acids give H⁺ in water, bases give OH⁻. <b>Brønsted–Lowry:</b> acids donate protons, bases accept them. Every acid has a <b>conjugate base</b> (what's left after losing H⁺), and every base has a <b>conjugate acid</b>. <b>Lewis:</b> acids accept an electron pair (BF₃, AlCl₃, H⁺); bases donate one (NH₃, OH⁻).`,
        R`<b>Strong</b> acids (HCl, HNO₃, H₂SO₄) ionise completely. <b>Weak</b> acids (CH₃COOH) ionise only partly, described by \(K_a = \dfrac{[H^+][A^-]}{[HA]}\). For a weak acid, \([H^+] = \sqrt{K_aC}\) and \(\alpha = \sqrt{K_a/C}\).`,
        R`The stronger an acid, the weaker its conjugate base: \(K_a\times K_b = K_w\).`
      ],
      check: { q: R`What is the conjugate base of H₂O?`, ans: R`OH⁻. Its conjugate acid is H₃O⁺.` } },

    { h: R`Ionisation of water and the pH scale`,
      body: [
        R`Water ionises a tiny bit: H₂O ⇌ H⁺ + OH⁻, with \(K_w = [H^+][OH^-] = 10^{-14}\) at 25 °C.`,
        R`\(\text{pH} = -\log[H^+]\) and \(\text{pOH} = -\log[OH^-]\), with \(\text{pH} + \text{pOH} = 14\).`,
        R`pH < 7 is acidic, 7 is neutral, and > 7 is basic. Each pH unit is a <b>10-fold</b> change in [H⁺].`
      ],
      analogy: R`Lemon juice has a pH of about 2, milk about 6.5, blood 7.4 and soap solution about 10. A pH 2 liquid is 100,000 times more acidic than pH 7 water.`,
      mistake: R`Saying pure water is neutral because pH = 7. It is neutral because [H⁺] = [OH⁻]. At higher temperatures, neutral water has a pH below 7.` },

    { h: R`Common-ion effect and salt hydrolysis`,
      body: [
        R`<b>Common-ion effect:</b> adding an ion that is already part of an equilibrium pushes that equilibrium back. For example, adding CH₃COONa to acetic acid suppresses its ionisation, and adding NaCl makes AgCl less soluble.`,
        R`<b>Hydrolysis:</b> ions from salts can react with water. A salt of a strong acid + weak base (NH₄Cl) is <b>acidic</b>. A salt of a weak acid + strong base (CH₃COONa) is <b>basic</b>. A salt of a strong acid + strong base (NaCl) is neutral.`,
        R`For a weak-acid/strong-base salt: \(\text{pH} = 7 + \tfrac12\text{p}K_a + \tfrac12\log C\).`
      ] },

    { h: R`Buffer solutions`,
      body: [
        R`A <b>buffer</b> resists changes in pH when a little acid or base is added. It is a weak acid with its salt (CH₃COOH + CH₃COONa) or a weak base with its salt (NH₄OH + NH₄Cl).`,
        R`<b>Henderson equation:</b> \(\text{pH} = \text{p}K_a + \log\dfrac{[\text{salt}]}{[\text{acid}]}\), or for basic buffers \(\text{pOH} = \text{p}K_b + \log\dfrac{[\text{salt}]}{[\text{base}]}\).`,
        R`A buffer works best when \(\text{pH} \approx \text{p}K_a\) (equal amounts of salt and acid).`
      ],
      analogy: R`Your blood is a buffer (around pH 7.4). A shock absorber in a car similarly soaks up bumps so that the ride stays smooth.` },

    { h: R`Solubility product`,
      body: [
        R`For a sparingly soluble salt in a saturated solution, AgCl(s) ⇌ Ag⁺ + Cl⁻, the equilibrium constant is the <b>solubility product</b> \(K_{sp} = [Ag^+][Cl^-]\).`,
        R`If the solubility is \(s\) mol/L: AB type, \(K_{sp} = s^2\); AB₂ or A₂B type, \(K_{sp} = 4s^3\); AB₃ type, \(K_{sp} = 27s^4\).`,
        R`A precipitate forms when the ionic product (Q) exceeds \(K_{sp}\). This is used in salt analysis.`
      ] }
  ],

  examples: [
    { level: 1, t: 5, q: R`Find the pH and [OH⁻] of 0.001 M HCl.`,
      steps: [R`HCl is strong, so [H⁺] = \(10^{-3}\) M and pH = 3.`, R`\([OH^-] = 10^{-14}/10^{-3}\).`],
      ans: R`pH 3; \([OH^-] = 10^{-11}\) M` },
    { level: 1, t: 4, q: R`Give the conjugate bases of H₂O, HCl and NH₄⁺, and the conjugate acid of NH₃.`,
      steps: [R`Conjugate base = acid minus H⁺; conjugate acid = base plus H⁺.`],
      ans: R`OH⁻, Cl⁻, NH₃; and NH₄⁺` },
    { level: 1, t: 1, q: R`Write the expression for \(K_c\) for N₂(g) + 3H₂(g) ⇌ 2NH₃(g). Is \(K_p\) equal to \(K_c\)?`,
      steps: [R`Products over reactants, each raised to its coefficient.`, R`\(\Delta n_g = 2 - 4 = -2 \ne 0\).`],
      ans: R`\(K_c = \dfrac{[NH_3]^2}{[N_2][H_2]^3}\); no, \(K_p = K_c(RT)^{-2}\)` },
    { level: 3, t: 1, q: R`1 mol of PCl₅ is heated in a 1 L flask: PCl₅ ⇌ PCl₃ + Cl₂. At equilibrium, 0.4 mol of Cl₂ is present. Find \(K_c\).`,
      steps: [R`0.4 mol of PCl₅ reacted, leaving 0.6 mol, and 0.4 mol each of PCl₃ and Cl₂ formed.`, R`\(K_c = \dfrac{0.4\times0.4}{0.6}\).`],
      ans: R`\(K_c \approx 0.267\) mol/L` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`At chemical equilibrium:`,
      options: [R`all reactions stop`, R`the forward and backward rates are equal`, R`all the reactants are used up`, R`the concentrations of reactants and products are equal`], correct: 1,
      solution: R`Equilibrium is dynamic: equal rates, constant (not necessarily equal) concentrations.` },
    { level: 1, type: 'mcq', q: R`The pH of pure water at 25 °C is:`,
      options: [R`0`, R`1`, R`7`, R`14`], correct: 2,
      solution: R`\([H^+] = 10^{-7}\) M, so pH = 7.` },
    { level: 1, type: 'mcq', q: R`According to Lewis, an acid is:`,
      options: [R`a proton donor`, R`an OH⁻ donor`, R`an electron-pair donor`, R`an electron-pair acceptor`], correct: 3,
      solution: R`Lewis acids accept electron pairs (BF₃, AlCl₃, H⁺).` },
    { level: 1, type: 'mcq', q: R`Adding a catalyst to a reaction at equilibrium:`,
      options: [R`does not shift it, but equilibrium is reached faster`, R`shifts it forward`, R`shifts it backward`, R`changes K`], correct: 0,
      solution: R`A catalyst speeds up both directions equally.` },
    { level: 1, type: 'num', q: R`Find the pH of 0.01 M NaOH at 25 °C.`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`pOH = 2, so pH = 14 − 2 = 12.` },
    { level: 1, type: 'num', q: R`A solution has pH 4. Find [H⁺] (in mol/L).`,
      answer: 0.0001, tol: 0.0000001, unit: 'mol/L',
      solution: R`\([H^+] = 10^{-4}\) M.` },
    { level: 2, type: 'mcq', q: R`For which reaction is \(K_p = K_c\)?`,
      options: [R`N₂ + 3H₂ ⇌ 2NH₃`, R`H₂ + I₂ ⇌ 2HI`, R`PCl₅ ⇌ PCl₃ + Cl₂`, R`2SO₂ + O₂ ⇌ 2SO₃`], correct: 1,
      solution: R`Only for \(\Delta n_g = 0\): H₂ + I₂ ⇌ 2HI has 2 gas moles on each side.` },
    { level: 2, type: 'mcq', q: R`For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), increasing the pressure:`,
      options: [R`shifts it forward`, R`shifts it backward`, R`has no effect`, R`increases K`], correct: 1,
      solution: R`It shifts towards fewer gas moles: 1 mol on the left versus 2 on the right.` },
    { level: 2, type: 'mcq', q: R`An aqueous solution of NH₄Cl is:`,
      options: [R`neutral`, R`basic`, R`acidic`, R`amphoteric`], correct: 2,
      solution: R`It is a salt of a strong acid (HCl) and a weak base (NH₃); NH₄⁺ hydrolyses to give H⁺.` },
    { level: 2, type: 'mcq', q: R`The conjugate base of HSO₄⁻ is:`,
      options: [R`H₂SO₄`, R`H₂O`, R`OH⁻`, R`SO₄²⁻`], correct: 3,
      solution: R`Removing H⁺ from HSO₄⁻ gives SO₄²⁻.` },
    { level: 2, type: 'num', q: R`For A ⇌ B, K = 4. Find K for 2B ⇌ 2A.`,
      answer: 0.0625, tol: 0.0001, unit: '',
      solution: R`Reversing gives 1/4; doubling squares it: \((1/4)^2 = 1/16 = 0.0625\).` },
    { level: 2, type: 'num', q: R`A buffer has [salt]/[acid] = 10 and \(\text{p}K_a = 4.74\). Find its pH.`,
      answer: 5.74, tol: 0.001, unit: '',
      solution: R`\(\text{pH} = 4.74 + \log10 = 5.74\).` },
    { level: 2, type: 'num', q: R`BaSO₄ has \(K_{sp} = 10^{-10}\). Find its solubility in units of \(10^{-5}\) mol/L.`,
      answer: 1, tol: 0.001, unit: '× 10⁻⁵ mol/L',
      solution: R`\(s = \sqrt{K_{sp}} = 10^{-5}\) mol/L.` },
    { level: 3, type: 'mcq', q: R`For Ag₂CrO₄ with solubility \(s\) mol/L, \(K_{sp}\) equals:`,
      options: [R`\(s^2\)`, R`\(2s^2\)`, R`\(4s^3\)`, R`\(27s^4\)`], correct: 2,
      solution: R`Ag₂CrO₄ → 2Ag⁺ + CrO₄²⁻: \(K_{sp} = (2s)^2(s) = 4s^3\).` },
    { level: 3, type: 'mcq', q: R`For an exothermic reaction, raising the temperature:`,
      options: [R`increases K`, R`decreases K`, R`doesn't change K`, R`stops the reaction`], correct: 1,
      solution: R`Heat acts like a product; adding heat shifts the equilibrium backward, so K decreases.` },
    { level: 3, type: 'num', q: R`1 mol PCl₅ in a 1 L flask gives 0.4 mol Cl₂ at equilibrium (PCl₅ ⇌ PCl₃ + Cl₂). Find \(K_c\).`,
      answer: 0.267, tol: 0.002, unit: 'mol/L',
      solution: R`\(K_c = (0.4)(0.4)/0.6 \approx 0.267\).` },
    { level: 3, type: 'num', q: R`50 mL of 0.1 M HCl is mixed with 50 mL of 0.08 M NaOH. Find the pH of the mixture.`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`H⁺: 5 mmol; OH⁻: 4 mmol. 1 mmol of H⁺ is left in 100 mL, so [H⁺] = 0.01 M and pH = 2.` }
  ]
});
