// Book chapter: Chemical Kinetics. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figRate = D.plot({
  w: 400, h: 220, x: [0, 10], y: [0, 1.1], xlabel: 't', ylabel: '[R]', xticks: [[3, 't']], yticks: [],
  fns: [{ f: function (t) { return Math.exp(-0.3 * t); }, color: 'c' }],
  texts: [{ x: 6.2, y: 0.3, s: 'chord: average rate = −Δ[R]/Δt', size: 11, color: 'o', anchor: 'start' }],
  segs: [{ x1: 1, y1: Math.exp(-0.3), x2: 6, y2: Math.exp(-1.8), color: 'o', dash: '5 4', w: 1.4 }, { x1: 1.4, y1: Math.exp(-0.9) + 0.3 * 1.6 * Math.exp(-0.9), x2: 4.6, y2: Math.exp(-0.9) - 0.3 * 1.6 * Math.exp(-0.9), color: 'r', w: 1.6 }],
  pts: [{ x: 3, y: Math.exp(-0.9), color: 'r', label: 'instantaneous rate = −slope of tangent', pos: 'ne', math: false, size: 11 }],
  label: 'Concentration of a reactant against time'
});

var figOrder = D.row([
  [D.plot({ w: 200, h: 170, x: [0, 5], y: [0, 1.1], xlabel: 't', ylabel: '[R]', xticks: [], yticks: [], fns: [{ f: function (t) { return Math.max(0, 1 - 0.22 * t); }, color: 'b' }], label: 'zero order' }), 'zero order: [R] falls linearly'],
  [D.plot({ w: 200, h: 170, x: [0, 5], y: [0, 1.1], xlabel: 't', ylabel: '[R]', xticks: [], yticks: [], fns: [{ f: function (t) { return Math.exp(-0.6 * t); }, color: 'r' }], label: 'first order' }), 'first order: exponential decay'],
  [D.plot({ w: 200, h: 170, x: [0, 5], y: [-3.2, 0.3], xlabel: 't', ylabel: 'ln[R]', xticks: [], yticks: [], noOrigin: true, fns: [{ f: function (t) { return -0.6 * t; }, color: 'r' }], label: 'ln R against t' }), 'first order: ln[R] linear, slope −k']
]);

var figEa = D.plot({
  w: 420, h: 240, x: [0, 10], y: [0, 10], xlabel: 'reaction coordinate', ylabel: 'potential energy', mathLabels: false, xticks: [], yticks: [],
  fns: [{ f: function (x) { return 3 + 5.5 * Math.exp(-Math.pow((x - 5) / 1.4, 2)) - 1.8 / (1 + Math.exp(-(x - 5) * 1.5)); }, color: 'c', label: 'uncatalysed', lx: 5.6, ly: 8.9, math: false },
    { f: function (x) { return 3 + 3 * Math.exp(-Math.pow((x - 5) / 1.4, 2)) - 1.8 / (1 + Math.exp(-(x - 5) * 1.5)); }, color: 'g', dash: '6 4', label: 'catalysed', lx: 6.2, ly: 5.6, math: false }],
  segs: [{ x1: 1.2, y1: 3, x2: 1.2, y2: 7.7, color: 'r', arrow: true, w: 1.4 }, { x1: 9, y1: 3, x2: 9, y2: 1.2, color: 'o', arrow: true, w: 1.4 }],
  texts: [{ x: 1.4, y: 5.4, s: 'Eₐ', size: 13, color: 'r', anchor: 'start' }, { x: 8.8, y: 2.1, s: 'ΔH', size: 13, color: 'o', anchor: 'end' }, { x: 0.6, y: 2.4, s: 'reactants', size: 11, anchor: 'start' }, { x: 9.8, y: 0.6, s: 'products', size: 11, anchor: 'end' }, { x: 5, y: 9.6, s: 'activated complex', size: 11, color: 'm' }],
  label: 'Energy profile: a catalyst lowers the activation energy'
});

var figMB = (function () {
  function mb(kT) { return function (e) { return 2 / Math.sqrt(Math.PI) * Math.pow(kT, -1.5) * Math.sqrt(Math.max(e, 0)) * Math.exp(-e / kT); }; }
  var f1 = mb(1.0), f2 = mb(1.4);
  return D.plot({
    w: 420, h: 220, x: [0, 8], y: [0, 0.5], xlabel: 'kinetic energy', ylabel: 'fraction of molecules', mathLabels: false, xticks: [[4, 'Eₐ']], yticks: [],
    shade: [{ f: f2, from: 4, to: 8, color: 'r' }, { f: f1, from: 4, to: 8, color: 'b' }],
    fns: [{ f: f1, color: 'b', label: 'T', lx: 0.75, ly: 0.47, math: false }, { f: f2, color: 'r', label: 'T + 10 K', lx: 1.9, ly: 0.36, math: false }],
    segs: [{ x1: 4, y1: 0, x2: 4, y2: 0.42, color: 'm', dash: '4 3', w: 1 }],
    texts: [{ x: 5.9, y: 0.16, s: 'more molecules with E ≥ Eₐ', size: 11, color: 'r' }],
    label: 'Raising the temperature greatly increases the fraction of molecules with energy above Ea'
  });
})();

var figArr = D.plot({
  w: 360, h: 200, x: [0, 5], y: [-6, 0.5], xlabel: '1/T', ylabel: 'ln k', xticks: [], yticks: [], noOrigin: true,
  fns: [{ f: function (x) { return -1.1 * x; }, color: 'c', label: 'slope = −Eₐ/R', lx: 2.2, ly: -1.6, math: false }],
  label: 'Arrhenius plot'
});

var figHalf = D.plot({ w: 360, h: 220, x: [0, 4.4], y: [0, 1.15], xlabel: 't', mathLabels: false,
  xticks: [[1, 't½'], [2, '2t½'], [3, '3t½'], [4, '4t½']], yticks: [[1, '[R]₀'], [0.5, '½'], [0.25, '¼'], [0.125, '⅛']],
  fns: [{ f: function (t) { return Math.pow(0.5, t); }, from: 0, to: 4.3, color: 'b', w: 2.2 }],
  segs: [1, 2, 3].map(function (n) { var y = Math.pow(0.5, n); return { x1: n, y1: 0, x2: n, y2: y, color: 'm', w: 1, dash: '3 3' }; }).concat([1, 2, 3].map(function (n) { var y = Math.pow(0.5, n); return { x1: 0, y1: y, x2: n, y2: y, color: 'm', w: 1, dash: '3 3' }; })),
  pts: [1, 2, 3].map(function (n) { return { x: n, y: Math.pow(0.5, n), color: 'o' }; }),
  label: 'First-order decay: the concentration halves every half-life' });

// ---------- chapter text ----------
JEE.book('chemistry', 'chemical-kinetics', {
  intro: [
    R`Thermodynamics tells us whether a reaction can happen; <b>chemical kinetics</b> tells us how fast it happens and by what steps. Some reactions are instant (an explosion, a precipitation), some take minutes (milk souring), and some take years (rusting, diamond turning into graphite).`,
    R`This chapter covers the rate of a reaction and the factors affecting it, elementary and complex reactions, order and molecularity, rate laws and rate constants, integrated rate equations and half-lives, the effect of temperature (Arrhenius equation), collision theory, and catalysis.`
  ],
  sections: [
    { h: R`Rate of a chemical reaction`, t: [0], blocks: [
      R`The <b>rate of reaction</b> is the change in concentration of a reactant or product per unit time (mol L⁻¹ s⁻¹). For R → P: \[\text{average rate} = -\frac{\Delta[R]}{\Delta t} = \frac{\Delta[P]}{\Delta t}\] The minus sign makes the rate positive, since [R] decreases.`,
      { fig: figRate, cap: R`The average rate over an interval is the slope of the chord; the instantaneous rate at a moment is the (negative) slope of the tangent there.` },
      R`The <b>instantaneous rate</b> is the rate at a particular moment: \(r = -\dfrac{d[R]}{dt}\), the slope of the tangent to the concentration–time curve.`,
      { h3: R`Rate in terms of different species` },
      R`For \(aA + bB\to cC + dD\), the rates of change of different species differ, so the rate of reaction is defined as \[r = -\frac1a\frac{d[A]}{dt} = -\frac1b\frac{d[B]}{dt} = \frac1c\frac{d[C]}{dt} = \frac1d\frac{d[D]}{dt}\]`,
      { ex: { q: R`For 2N₂O₅ → 4NO₂ + O₂, NO₂ forms at 0.04 mol L⁻¹ s⁻¹. Find the rate of disappearance of N₂O₅ and the rate of reaction.`,
        steps: [R`r = ¼ d[NO₂]/dt = 0.01 mol L⁻¹ s⁻¹.`, R`−d[N₂O₅]/dt = 2r.`], ans: R`0.02 mol L⁻¹ s⁻¹; rate of reaction 0.01 mol L⁻¹ s⁻¹` } },
      { ex: { q: R`In a reaction R → P, [R] falls from 0.60 M to 0.40 M in 20 minutes. Find the average rate in mol L⁻¹ min⁻¹ and in mol L⁻¹ s⁻¹.`,
        steps: [R`\(-\dfrac{\Delta[R]}{\Delta t} = -\dfrac{0.40 - 0.60}{20}\) = 0.010 mol L⁻¹ min⁻¹.`, R`Divide by 60 for seconds.`], ans: R`0.010 mol L⁻¹ min⁻¹ ≈ 1.7 × 10⁻⁴ mol L⁻¹ s⁻¹` } },
      R`For gases, concentration is proportional to partial pressure at constant temperature, so rates are often given in atm s⁻¹ or bar min⁻¹. Experimentally, rates are followed by measuring anything that changes with concentration: colour (with a colorimeter), pressure, volume of gas given off, electrical conductivity, or by taking samples and titrating them.`,
      { check: { q: R`Why is the instantaneous rate usually different from the average rate?`, ans: R`The rate keeps changing (usually falling as reactants are used up); the average smooths over the interval.` } }
    ] },

    { h: R`Factors affecting the rate`, t: [1], blocks: [
      { points: [
        R`<b>Concentration</b> (or pressure for gases): more particles per unit volume give more frequent collisions.`,
        R`<b>Temperature:</b> the rate typically doubles or triples for a 10 K rise, because many more molecules have enough energy to react.`,
        R`<b>Catalyst:</b> provides an alternative path with lower activation energy.`,
        R`<b>Surface area</b> of solid reactants: powders react faster than lumps.`,
        R`<b>Nature of reactants</b> and <b>light</b> (photochemical reactions such as H₂ + Cl₂ in sunlight).`
      ] },
      R`Everyday life is full of these factors. Food is kept in a refrigerator because lowering the temperature slows the reactions of decay. Coal dust and flour dust can explode, because their huge surface area lets them burn almost instantly. A pressure cooker cooks faster because water boils at a higher temperature inside it.`,
      { check: { q: R`Why does powdered zinc react with acid faster than a granule?`, ans: R`Its larger surface area gives more collisions with acid per second.` } }
    ] },

    { h: R`Elementary and complex reactions`, t: [2], blocks: [
      R`An <b>elementary reaction</b> takes place in a single step, as written. Most reactions are <b>complex</b>: they occur through a sequence of elementary steps, the <b>mechanism</b>, involving intermediates that do not appear in the overall equation.`,
      R`The overall rate is set by the slowest step, the <b>rate-determining step</b>, like the narrowest point of a funnel. For example, 2NO₂ + F₂ → 2NO₂F occurs as NO₂ + F₂ → NO₂F + F (slow) then NO₂ + F → NO₂F (fast), so rate = k[NO₂][F₂].`,
      { ex: { q: R`The reaction 2NO + O₂ → 2NO₂ is believed to occur in two steps: NO + NO ⇌ N₂O₂ (fast equilibrium, constant K), then N₂O₂ + O₂ → 2NO₂ (slow). Find the rate law and name the intermediate.`,
        steps: [R`The slow step gives rate = k₂[N₂O₂][O₂].`, R`N₂O₂ is an intermediate; from the fast equilibrium, [N₂O₂] = K[NO]². Substitute.`], ans: R`rate = k₂K[NO]²[O₂] = k[NO]²[O₂]; intermediate N₂O₂` } },
      { tip: R`An intermediate is formed in one step and used up in a later one; it never appears in the overall equation or in the final rate law. A catalyst, by contrast, is used up in one step and given back in a later one.` },
      { check: { q: R`Can the rate law of a complex reaction be written from its overall equation?`, ans: R`No: it must be found by experiment (it reflects the slow step).` } }
    ] },

    { h: R`Order and molecularity`, t: [3], blocks: [
      R`If the rate law is \(r = k[A]^x[B]^y\), the <b>order</b> of the reaction is x + y (x with respect to A, y with respect to B). Order is found experimentally and can be 0, a fraction, or even negative.`,
      R`<b>Molecularity</b> is the number of reacting species colliding simultaneously in an <b>elementary</b> step: unimolecular, bimolecular, rarely termolecular.`,
      { table: { head: [R`Order`, R`Molecularity`], rows: [[R`experimental, for the overall reaction`, R`theoretical, for an elementary step`], [R`can be 0, fractional or negative`, R`always a small whole number (1, 2, 3)`], [R`applies to elementary and complex reactions`, R`meaningful only for elementary reactions`]] } },
      { h3: R`Pseudo-first-order reactions` },
      R`If one reactant is in large excess, its concentration hardly changes and it drops out of the rate law. Acid hydrolysis of an ester, CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH, is bimolecular, but water is in such excess that rate = k′[ester]: pseudo first order. Inversion of cane sugar is another example.`,
      { mistake: R`Reading the order from the balanced equation. For 2N₂O₅ → 4NO₂ + O₂ the rate is k[N₂O₅], first order, not second. Only for an elementary step do the coefficients give the order.` },
      { ex: { q: R`For the elementary step 2NO + Cl₂ → 2NOCl, state the molecularity and the order. What happens to the rate if [NO] is doubled?`,
        steps: [R`An elementary step: three molecules collide, so it is termolecular, and rate = k[NO]²[Cl₂] (order 3).`, R`Doubling [NO] multiplies the rate by 2² = 4.`], ans: R`Molecularity 3, order 3; the rate becomes 4 times` } },
      R`In the inversion of cane sugar, C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose) in dilute acid, water is the solvent and is present in huge excess, so rate = k′[sucrose]. The reaction is followed with a polarimeter, because the optical rotation changes from positive (sucrose) to negative (the product mixture), hence the name inversion.`,
      { check: { q: R`For r = k[A]^{1/2}[B]², what is the overall order?`, ans: R`2.5.` } }
    ] },

    { h: R`Rate law and rate constant`, t: [4], blocks: [
      R`The <b>rate law</b> (differential rate equation) expresses the rate in terms of concentrations: \(r = k[A]^x[B]^y\). The <b>rate constant</b> k is the rate when all concentrations are 1 M; it depends on temperature but not on concentration. Its units depend on the order n: \[\text{units of }k = (\text{mol L}^{-1})^{1 - n}\text{ s}^{-1}\]`,
      { table: { head: [R`Order`, R`Units of k`], rows: [[R`0`, R`mol L⁻¹ s⁻¹`], [R`1`, R`s⁻¹`], [R`2`, R`L mol⁻¹ s⁻¹`]] } },
      { h3: R`Finding the order: initial-rate method` },
      R`Measure the initial rate for several experiments, changing one concentration at a time. If doubling [A] doubles the rate, the order in A is 1; if it quadruples it, 2; if no change, 0.`,
      { ex: { q: R`For A + B → products: [A] 0.1, [B] 0.1 gives rate 2 × 10⁻³; [A] 0.2, [B] 0.1 gives 8 × 10⁻³; [A] 0.1, [B] 0.2 gives 4 × 10⁻³ (mol L⁻¹ s⁻¹). Find the rate law and k.`,
        steps: [R`Doubling [A] multiplies the rate by 4: second order in A. Doubling [B] doubles it: first order in B.`, R`r = k[A]²[B]: 2 × 10⁻³ = k(0.01)(0.1).`], ans: R`r = k[A]²[B], k = 2 L² mol⁻² s⁻¹` } },
      { ex: { q: R`The rate constant of a reaction is 2.3 × 10⁻⁵ L mol⁻¹ s⁻¹. What is its order, and how does the rate change if the concentration of the reactant is tripled?`,
        steps: [R`Units (mol L⁻¹)^{1−n} s⁻¹ = L mol⁻¹ s⁻¹ means 1 − n = −1, so n = 2.`, R`Rate ∝ [A]², so tripling gives 3² = 9 times.`], ans: R`Second order; 9 times faster` } },
      { check: { q: R`What are the units of k for a third-order reaction?`, ans: R`L² mol⁻² s⁻¹.` } }
    ] },

    { h: R`Zero-order reactions`, t: [5], blocks: [
      R`For a zero-order reaction, the rate is independent of concentration: \(-\dfrac{d[R]}{dt} = k\). Integrating: \[[R] = [R]_0 - kt,\qquad t_{1/2} = \frac{[R]_0}{2k}\] [R] falls linearly with time, and the half-life is proportional to the initial concentration.`,
      { derive: R`Integrated zero-order equation`, steps: [R`\(-\dfrac{d[R]}{dt} = k\), so \(d[R] = -k\,dt\).`, R`Integrate from [R]₀ at t = 0: \([R] - [R]_0 = -kt\).`, R`Half-life: put [R] = [R]₀/2: \(\dfrac{[R]_0}{2} = kt_{1/2}\), giving \(t_{1/2} = \dfrac{[R]_0}{2k}\).`] },
      R`Examples: decomposition of NH₃ on a hot platinum surface at high pressure (the surface is saturated), and enzyme reactions at high substrate concentration.`,
      { ex: { q: R`A zero-order reaction has k = 0.02 mol L⁻¹ min⁻¹ and [R]₀ = 0.4 M. Find its half-life and the time for complete reaction.`,
        steps: [R`t½ = 0.4/(2 × 0.02); complete when [R] = 0: t = [R]₀/k.`], ans: R`10 min; 20 min` } },
      { tip: R`Telling the orders apart from data: if [R] falls by equal amounts in equal times, it is zero order; if it falls by equal <b>fractions</b> in equal times (constant half-life), it is first order.` },
      { check: { q: R`For a zero-order reaction, does the half-life increase or decrease as the reaction proceeds?`, ans: R`It decreases (t½ ∝ [R]₀, which is getting smaller).` } }
    ] },

    { h: R`First-order reactions`, t: [5], blocks: [
      { derive: R`Integrated first-order equation`, steps: [
        R`\(-\dfrac{d[R]}{dt} = k[R]\), so \(\dfrac{d[R]}{[R]} = -k\,dt\).`,
        R`Integrating from [R]₀ at t = 0: \(\ln\dfrac{[R]_0}{[R]} = kt\), i.e. \([R] = [R]_0e^{-kt}\), or \[k = \frac{2.303}{t}\log\frac{[R]_0}{[R]}\]`,
        R`Half-life ([R] = [R]₀/2): \[t_{1/2} = \frac{0.693}{k}\] independent of the initial concentration.`
      ] },
      { fig: figOrder, cap: R`Zero order: [R] against t is a straight line. First order: [R] decays exponentially, and ln[R] against t is a straight line of slope −k.` },
      R`Examples: radioactive decay, decomposition of N₂O₅ and H₂O₂, hydrogenation of ethene, and the pseudo-first-order hydrolysis of esters.`,
      { ex: { q: R`A first-order reaction has a half-life of 30 min. Find k and the fraction left after 2 hours.`,
        steps: [R`k = 0.693/30 min⁻¹.`, R`2 h = 4 half-lives: (½)⁴.`], ans: R`k ≈ 0.0231 min⁻¹; 1/16 remains` } },
      { ex: { q: R`How many half-lives does it take for 99.9% of a first-order reaction to be completed?`,
        steps: [R`\(t = \dfrac{2.303}{k}\log1000 = \dfrac{6.909}{k}\) and \(t_{1/2} = 0.693/k\).`], ans: R`About 10 half-lives` } },
      { fig: figHalf, cap: R`In a first-order reaction the concentration halves in every half-life, whatever the starting value: [R]₀ → ½ → ¼ → ⅛. After n half-lives, the fraction left is (½)ⁿ.` },
      { ex: { q: R`20% of a first-order reaction is completed in 10 minutes. Find k and the half-life.`,
        steps: [R`80% remains: \(k = \dfrac{2.303}{10}\log\dfrac{100}{80}\) ≈ 0.0223 min⁻¹.`, R`t½ = 0.693/k.`], ans: R`k ≈ 0.0223 min⁻¹; t½ ≈ 31 min` } },
      { tip: R`For a first-order gas-phase reaction followed by pressure, use \(k = \dfrac{2.303}{t}\log\dfrac{p_0}{2p_0 - p_t}\) for A(g) → B(g) + C(g), where \(p_t\) is the total pressure.` },
      { ex: { q: R`For A(g) → B(g) + C(g), the initial pressure is 0.40 atm and after 100 s the total pressure is 0.50 atm. Find k.`,
        steps: [R`If A falls by x, the total pressure is p₀ + x, so x = 0.10 atm and p_A = 0.40 − 0.10 = 2p₀ − p_t = 0.30 atm.`, R`\(k = \dfrac{2.303}{100}\log\dfrac{0.40}{0.30}\).`], ans: R`k ≈ 2.9 × 10⁻³ s⁻¹` } },
      { ex: { q: R`Radioactive decay is first order. Wood from an ancient boat shows one-quarter of the ¹⁴C activity of living wood. How old is it? (t½ of ¹⁴C = 5730 years)`,
        steps: [R`¼ = (½)², so 2 half-lives have passed.`], ans: R`About 11 460 years` } },
      { check: { q: R`Does the half-life of a first-order reaction depend on the initial concentration?`, ans: R`No.` } }
    ] },

    { h: R`Effect of temperature: the Arrhenius equation`, t: [6], blocks: [
      R`Most reactions speed up with temperature, about 2 to 3 times per 10 K (the temperature coefficient). <b>Arrhenius equation</b> (1889): \[k = Ae^{-E_a/RT}\] where \(E_a\) is the <b>activation energy</b> and A the pre-exponential (frequency) factor. Taking logs: \(\ln k = \ln A - \dfrac{E_a}{RT}\).`,
      { fig: figArr, cap: R`A plot of ln k against 1/T is a straight line of slope −Ea/R.` },
      { fig: figMB, cap: R`Only molecules with kinetic energy at least Ea can react. A small rise in temperature greatly increases the shaded area (the fraction \(e^{-E_a/RT}\)), which is why rates rise so steeply.` },
      { ex: { q: R`A plot of ln k against 1/T is a straight line of slope −6000 K. Find the activation energy. At 300 K, what fraction of molecules has at least 50 kJ/mol of energy?`,
        steps: [R`Slope = −Ea/R, so Ea = 6000 × 8.314 J/mol ≈ 49.9 kJ/mol.`, R`Fraction = \(e^{-E_a/RT} = e^{-50\,000/(8.314\times300)} = e^{-20.0}\).`], ans: R`≈ 50 kJ/mol; ≈ 2 × 10⁻⁹ (two molecules in a billion)` } },
      R`That tiny fraction is the key to the temperature effect. Raising T from 300 K to 310 K changes \(e^{-E_a/RT}\) by a factor of about \(e^{0.65} \approx 1.9\), so the rate nearly doubles, even though the average energy of the molecules rises by only about 3%.`,
      { check: { q: R`What does the factor \(e^{-E_a/RT}\) represent?`, ans: R`The fraction of molecules with energy equal to or greater than the activation energy.` } }
    ] },

    { h: R`Activation energy and its calculation`, t: [6], blocks: [
      R`Reactants must pass over an energy barrier, through an unstable <b>activated complex</b> (transition state), before forming products. The height of the barrier above the reactants is the activation energy.`,
      { fig: figEa, cap: R`Energy profile of an exothermic reaction. The activated complex lies at the top of the barrier; a catalyst provides a lower path.` },
      { derive: R`The two-temperature form`, steps: [R`Write \(\ln k = \ln A - \dfrac{E_a}{RT}\) at T₁ and at T₂, assuming A and Ea do not change.`, R`Subtract: \(\ln\dfrac{k_2}{k_1} = \dfrac{E_a}{R}\left(\dfrac{1}{T_1} - \dfrac{1}{T_2}\right) = \dfrac{E_a}{R}\cdot\dfrac{T_2 - T_1}{T_1T_2}\).`, R`Change to base-10 logarithms by dividing by 2.303.`] },
      R`From rate constants at two temperatures: \[\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{T_2 - T_1}{T_1T_2}\right)\]`,
      { ex: { q: R`The rate constant of a reaction doubles when the temperature rises from 300 K to 310 K. Find Ea.`,
        steps: [R`\(\ln2 = \dfrac{E_a}{8.314}\left(\dfrac1{300} - \dfrac1{310}\right)\).`], ans: R`Ea ≈ 53.6 kJ/mol` } },
      { ex: { q: R`A forward reaction has Ea = 80 kJ/mol and ΔH = −30 kJ/mol. Find the activation energy of the backward reaction.`,
        steps: [R`From the energy profile: Ea(backward) = Ea(forward) − ΔH = 80 − (−30).`], ans: R`110 kJ/mol` } },
      { check: { q: R`For an endothermic reaction, is Ea larger or smaller than ΔH?`, ans: R`Larger (Ea ≥ ΔH; the barrier must be at least as high as the products).` } }
    ] },

    { h: R`Collision theory`, t: [7], blocks: [
      R`<b>Collision theory</b> (Arrhenius, Max Trautz, William Lewis) treats molecules as hard spheres; a reaction occurs only when they collide. The rate is \[r = Z_{AB}\,e^{-E_a/RT}\times P\] where \(Z_{AB}\) is the collision frequency. Two conditions make a collision <b>effective</b>:`,
      { points: [R`The molecules must have energy at least equal to the <b>threshold energy</b> (activation energy above the average).`, R`They must collide with the proper <b>orientation</b>; P, the probability or steric factor, accounts for this.`] },
      R`For example, in CH₃Br + OH⁻ → CH₃OH + Br⁻, the OH⁻ must hit the carbon on the side opposite to bromine. Collision theory explains why only a tiny fraction of collisions lead to reaction, but its hard-sphere picture is too simple for complex molecules.`,
      R`To see how few collisions succeed: in a gas at 1 atm and room temperature, each molecule suffers about 10⁹ collisions per second, and a litre of gas has about 10³¹ collisions per second in all. If every one led to reaction, all gas reactions would be over in a fraction of a second. In reality only collisions that are energetic enough <b>and</b> correctly oriented count.`,
      { check: { q: R`Name the two factors that decide whether a collision is effective.`, ans: R`Sufficient energy (≥ threshold) and proper orientation.` } }
    ] },

    { h: R`Catalysis`, t: [6], blocks: [
      R`A <b>catalyst</b> speeds up a reaction without being used up, by providing an alternative pathway with lower activation energy. It does not change ΔH, ΔG or the equilibrium constant; it speeds up the forward and backward reactions equally, so equilibrium is reached sooner.`,
      { points: [R`<b>Homogeneous catalysis:</b> catalyst and reactants in the same phase: NO in the lead-chamber process (2SO₂ + O₂ → 2SO₃), H⁺ in ester hydrolysis.`, R`<b>Heterogeneous catalysis:</b> catalyst in a different phase, usually a solid surface: Fe in the Haber process, Pt in the oxidation of NH₃ (Ostwald process), Ni in hydrogenation of oils, V₂O₅ in the contact process.`] },
      { ex: { q: R`A catalyst lowers the activation energy of a reaction by 20 kJ/mol at 300 K. By roughly what factor does the rate increase (assume A is unchanged)?`,
        steps: [R`\(\dfrac{k_{cat}}{k} = e^{\Delta E_a/RT} = e^{20\,000/(8.314\times300)} = e^{8.02}\).`], ans: R`About 3000 times faster` } },
      { points: [R`A catalyst is needed only in small amounts and is unchanged in mass and chemical composition at the end.`, R`It cannot start a reaction that is thermodynamically impossible (ΔG > 0); it only speeds up one that can happen.`, R`<b>Promoters</b> increase a catalyst's activity (molybdenum for iron in the Haber process); <b>poisons</b> decrease it (CO or arsenic compounds poisoning platinum).`] },
      { adv: R`<b>Adsorption theory</b> of heterogeneous catalysis: reactants diffuse to the surface, are adsorbed, react on the surface (bonds are weakened), and the products desorb and diffuse away. <b>Activity</b> is the ability of a catalyst to speed up a reaction (it depends on the strength of chemisorption: neither too weak nor too strong); <b>selectivity</b> is its ability to direct a reaction to one product (CO + H₂ gives methane over Ni, methanol over Cu/ZnO–Cr₂O₃, and formaldehyde over Cu). <b>Shape-selective catalysts</b> such as zeolites (ZSM-5 converts alcohols to petrol) act according to their pore size. <b>Enzymes</b> are biological catalysts: highly efficient, very specific (lock-and-key), and work best at an optimum temperature (~310 K) and pH; the mechanism is E + S ⇌ ES → E + P.` },
      R`Familiar enzymes: <b>invertase</b> converts sucrose into glucose and fructose; <b>zymase</b> converts glucose into ethanol and CO₂ (fermentation); <b>urease</b> hydrolyses urea; <b>pepsin</b> breaks proteins into peptides in the stomach; <b>diastase</b> turns starch into maltose. Each works on one substrate only, because the substrate must fit the shape of the enzyme's active site like a key in a lock.`,
      { check: { q: R`Does a catalyst change the equilibrium constant of a reaction?`, ans: R`No: it changes only how fast equilibrium is reached.` } }
    ] }
  ],
  summary: [
    R`Rate = −(1/a)d[A]/dt = (1/c)d[C]/dt; average vs instantaneous rate.`,
    R`Factors: concentration, temperature, catalyst, surface area, light.`,
    R`Elementary vs complex reactions; slowest step is rate-determining.`,
    R`Order (experimental, may be 0 or fractional) vs molecularity (elementary steps, whole number). Pseudo-first order (ester hydrolysis).`,
    R`Rate law r = k[A]^x[B]^y; units of k (mol L⁻¹)^{1−n} s⁻¹; initial-rate method.`,
    R`Zero order: [R] = [R]₀ − kt, t½ = [R]₀/2k. First order: k = (2.303/t) log([R]₀/[R]), t½ = 0.693/k.`,
    R`Arrhenius: k = Ae^{−Ea/RT}; log(k₂/k₁) = (Ea/2.303R)(T₂ − T₁)/(T₁T₂).`,
    R`Collision theory: effective collisions need threshold energy and correct orientation.`,
    R`Catalysts lower Ea, do not change K or ΔH; homogeneous, heterogeneous, enzymes; activity and selectivity.`,
    R`After n half-lives (first order) the fraction left is (½)ⁿ; Ea(backward) = Ea(forward) − ΔH; a catalyst lowering Ea by ΔEa speeds the reaction by e^{ΔEa/RT}.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §12.1 Chemical Reaction Rates`, url: 'https://openstax.org/books/chemistry-2e/pages/12-1-chemical-reaction-rates' },
    { t: R`OpenStax Chemistry 2e, §12.3 Rate Laws`, url: 'https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws' },
    { t: R`OpenStax Chemistry 2e, §12.4 Integrated Rate Laws`, url: 'https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws' },
    { t: R`OpenStax Chemistry 2e, §12.5 Collision Theory`, url: 'https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory' },
    { t: R`OpenStax Chemistry 2e, §12.6 Reaction Mechanisms`, url: 'https://openstax.org/books/chemistry-2e/pages/12-6-reaction-mechanisms' },
    { t: R`OpenStax Chemistry 2e, §12.7 Catalysis`, url: 'https://openstax.org/books/chemistry-2e/pages/12-7-catalysis' }
  ]
});
})();
