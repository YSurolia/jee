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
      { check: { q: R`Why does powdered zinc react with acid faster than a granule?`, ans: R`Its larger surface area gives more collisions with acid per second.` } }
    ] },

    { h: R`Elementary and complex reactions`, t: [2], blocks: [
      R`An <b>elementary reaction</b> takes place in a single step, as written. Most reactions are <b>complex</b>: they occur through a sequence of elementary steps, the <b>mechanism</b>, involving intermediates that do not appear in the overall equation.`,
      R`The overall rate is set by the slowest step, the <b>rate-determining step</b>, like the narrowest point of a funnel. For example, 2NO₂ + F₂ → 2NO₂F occurs as NO₂ + F₂ → NO₂F + F (slow) then NO₂ + F → NO₂F (fast), so rate = k[NO₂][F₂].`,
      { check: { q: R`Can the rate law of a complex reaction be written from its overall equation?`, ans: R`No: it must be found by experiment (it reflects the slow step).` } }
    ] },

    { h: R`Order and molecularity`, t: [3], blocks: [
      R`If the rate law is \(r = k[A]^x[B]^y\), the <b>order</b> of the reaction is x + y (x with respect to A, y with respect to B). Order is found experimentally and can be 0, a fraction, or even negative.`,
      R`<b>Molecularity</b> is the number of reacting species colliding simultaneously in an <b>elementary</b> step: unimolecular, bimolecular, rarely termolecular.`,
      { table: { head: [R`Order`, R`Molecularity`], rows: [[R`experimental, for the overall reaction`, R`theoretical, for an elementary step`], [R`can be 0, fractional or negative`, R`always a small whole number (1, 2, 3)`], [R`applies to elementary and complex reactions`, R`meaningful only for elementary reactions`]] } },
      { h3: R`Pseudo-first-order reactions` },
      R`If one reactant is in large excess, its concentration hardly changes and it drops out of the rate law. Acid hydrolysis of an ester, CH₃COOC₂H₅ + H₂O → CH₃COOH + C₂H₅OH, is bimolecular, but water is in such excess that rate = k′[ester]: pseudo first order. Inversion of cane sugar is another example.`,
      { check: { q: R`For r = k[A]^{1/2}[B]², what is the overall order?`, ans: R`2.5.` } }
    ] },

    { h: R`Rate law and rate constant`, t: [4], blocks: [
      R`The <b>rate law</b> (differential rate equation) expresses the rate in terms of concentrations: \(r = k[A]^x[B]^y\). The <b>rate constant</b> k is the rate when all concentrations are 1 M; it depends on temperature but not on concentration. Its units depend on the order n: \[\text{units of }k = (\text{mol L}^{-1})^{1 - n}\text{ s}^{-1}\]`,
      { table: { head: [R`Order`, R`Units of k`], rows: [[R`0`, R`mol L⁻¹ s⁻¹`], [R`1`, R`s⁻¹`], [R`2`, R`L mol⁻¹ s⁻¹`]] } },
      { h3: R`Finding the order: initial-rate method` },
      R`Measure the initial rate for several experiments, changing one concentration at a time. If doubling [A] doubles the rate, the order in A is 1; if it quadruples it, 2; if no change, 0.`,
      { ex: { q: R`For A + B → products: [A] 0.1, [B] 0.1 gives rate 2 × 10⁻³; [A] 0.2, [B] 0.1 gives 8 × 10⁻³; [A] 0.1, [B] 0.2 gives 4 × 10⁻³ (mol L⁻¹ s⁻¹). Find the rate law and k.`,
        steps: [R`Doubling [A] multiplies the rate by 4: second order in A. Doubling [B] doubles it: first order in B.`, R`r = k[A]²[B]: 2 × 10⁻³ = k(0.01)(0.1).`], ans: R`r = k[A]²[B], k = 2 L² mol⁻² s⁻¹` } },
      { check: { q: R`What are the units of k for a third-order reaction?`, ans: R`L² mol⁻² s⁻¹.` } }
    ] },

    { h: R`Zero-order reactions`, t: [5], blocks: [
      R`For a zero-order reaction, the rate is independent of concentration: \(-\dfrac{d[R]}{dt} = k\). Integrating: \[[R] = [R]_0 - kt,\qquad t_{1/2} = \frac{[R]_0}{2k}\] [R] falls linearly with time, and the half-life is proportional to the initial concentration.`,
      R`Examples: decomposition of NH₃ on a hot platinum surface at high pressure (the surface is saturated), and enzyme reactions at high substrate concentration.`,
      { ex: { q: R`A zero-order reaction has k = 0.02 mol L⁻¹ min⁻¹ and [R]₀ = 0.4 M. Find its half-life and the time for complete reaction.`,
        steps: [R`t½ = 0.4/(2 × 0.02); complete when [R] = 0: t = [R]₀/k.`], ans: R`10 min; 20 min` } },
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
      { tip: R`For a first-order gas-phase reaction followed by pressure, use \(k = \dfrac{2.303}{t}\log\dfrac{p_0}{2p_0 - p_t}\) for A(g) → B(g) + C(g), where \(p_t\) is the total pressure.` },
      { check: { q: R`Does the half-life of a first-order reaction depend on the initial concentration?`, ans: R`No.` } }
    ] },

    { h: R`Effect of temperature: the Arrhenius equation`, t: [6], blocks: [
      R`Most reactions speed up with temperature, about 2 to 3 times per 10 K (the temperature coefficient). <b>Arrhenius equation</b> (1889): \[k = Ae^{-E_a/RT}\] where \(E_a\) is the <b>activation energy</b> and A the pre-exponential (frequency) factor. Taking logs: \(\ln k = \ln A - \dfrac{E_a}{RT}\).`,
      { fig: figArr, cap: R`A plot of ln k against 1/T is a straight line of slope −Ea/R.` },
      { fig: figMB, cap: R`Only molecules with kinetic energy at least Ea can react. A small rise in temperature greatly increases the shaded area (the fraction \(e^{-E_a/RT}\)), which is why rates rise so steeply.` },
      { check: { q: R`What does the factor \(e^{-E_a/RT}\) represent?`, ans: R`The fraction of molecules with energy equal to or greater than the activation energy.` } }
    ] },

    { h: R`Activation energy and its calculation`, t: [6], blocks: [
      R`Reactants must pass over an energy barrier, through an unstable <b>activated complex</b> (transition state), before forming products. The height of the barrier above the reactants is the activation energy.`,
      { fig: figEa, cap: R`Energy profile of an exothermic reaction. The activated complex lies at the top of the barrier; a catalyst provides a lower path.` },
      R`From rate constants at two temperatures: \[\log\frac{k_2}{k_1} = \frac{E_a}{2.303R}\left(\frac{T_2 - T_1}{T_1T_2}\right)\]`,
      { ex: { q: R`The rate constant of a reaction doubles when the temperature rises from 300 K to 310 K. Find Ea.`,
        steps: [R`\(\ln2 = \dfrac{E_a}{8.314}\left(\dfrac1{300} - \dfrac1{310}\right)\).`], ans: R`Ea ≈ 53.6 kJ/mol` } },
      { check: { q: R`For an endothermic reaction, is Ea larger or smaller than ΔH?`, ans: R`Larger (Ea ≥ ΔH; the barrier must be at least as high as the products).` } }
    ] },

    { h: R`Collision theory`, t: [7], blocks: [
      R`<b>Collision theory</b> (Arrhenius, Max Trautz, William Lewis) treats molecules as hard spheres; a reaction occurs only when they collide. The rate is \[r = Z_{AB}\,e^{-E_a/RT}\times P\] where \(Z_{AB}\) is the collision frequency. Two conditions make a collision <b>effective</b>:`,
      { points: [R`The molecules must have energy at least equal to the <b>threshold energy</b> (activation energy above the average).`, R`They must collide with the proper <b>orientation</b>; P, the probability or steric factor, accounts for this.`] },
      R`For example, in CH₃Br + OH⁻ → CH₃OH + Br⁻, the OH⁻ must hit the carbon on the side opposite to bromine. Collision theory explains why only a tiny fraction of collisions lead to reaction, but its hard-sphere picture is too simple for complex molecules.`,
      { check: { q: R`Name the two factors that decide whether a collision is effective.`, ans: R`Sufficient energy (≥ threshold) and proper orientation.` } }
    ] },

    { h: R`Catalysis`, t: [6], blocks: [
      R`A <b>catalyst</b> speeds up a reaction without being used up, by providing an alternative pathway with lower activation energy. It does not change ΔH, ΔG or the equilibrium constant; it speeds up the forward and backward reactions equally, so equilibrium is reached sooner.`,
      { points: [R`<b>Homogeneous catalysis:</b> catalyst and reactants in the same phase: NO in the lead-chamber process (2SO₂ + O₂ → 2SO₃), H⁺ in ester hydrolysis.`, R`<b>Heterogeneous catalysis:</b> catalyst in a different phase, usually a solid surface: Fe in the Haber process, Pt in the oxidation of NH₃ (Ostwald process), Ni in hydrogenation of oils, V₂O₅ in the contact process.`] },
      { adv: R`<b>Adsorption theory</b> of heterogeneous catalysis: reactants diffuse to the surface, are adsorbed, react on the surface (bonds are weakened), and the products desorb and diffuse away. <b>Activity</b> is the ability of a catalyst to speed up a reaction (it depends on the strength of chemisorption: neither too weak nor too strong); <b>selectivity</b> is its ability to direct a reaction to one product (CO + H₂ gives methane over Ni, methanol over Cu/ZnO–Cr₂O₃, and formaldehyde over Cu). <b>Shape-selective catalysts</b> such as zeolites (ZSM-5 converts alcohols to petrol) act according to their pore size. <b>Enzymes</b> are biological catalysts: highly efficient, very specific (lock-and-key), and work best at an optimum temperature (~310 K) and pH; the mechanism is E + S ⇌ ES → E + P.` },
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
    R`Catalysts lower Ea, do not change K or ΔH; homogeneous, heterogeneous, enzymes; activity and selectivity.`
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
