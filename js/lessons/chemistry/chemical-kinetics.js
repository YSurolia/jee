// Lesson: Chemical Kinetics.
var R = String.raw;
JEE.lesson('chemistry', 'chemical-kinetics', {
  theory: [
    { h: R`What is the rate of a reaction?`,
      body: [
        R`Thermodynamics tells us whether a reaction <i>can</i> happen; <b>kinetics</b> tells us how <b>fast</b> it happens.`,
        R`The <b>rate</b> is the change in concentration per unit time, in mol L⁻¹ s⁻¹. <b>Average rate</b> = Δ[concentration]/Δt over a time interval; <b>instantaneous rate</b> = the slope of the concentration–time graph at one instant.`,
        R`To get one rate for the whole reaction, divide by the coefficients: for \(aA \to bB\), rate \(= -\dfrac1a\dfrac{d[A]}{dt} = \dfrac1b\dfrac{d[B]}{dt}\).`
      ],
      analogy: R`Rusting of iron takes months; an explosion takes milliseconds. Both are spontaneous, but their rates are wildly different.`,
      check: { q: R`[A] falls from 0.5 M to 0.3 M in 10 s. What is the average rate of disappearance of A?`, ans: R`0.2/10 = 0.02 mol L⁻¹ s⁻¹.` } },

    { h: R`What speeds a reaction up?`,
      body: [
        R`<b>Concentration (or pressure for gases):</b> more molecules per volume means more collisions.`,
        R`<b>Temperature:</b> molecules move faster and many more of them have enough energy to react. As a rough rule, the rate doubles or triples for every 10 °C rise.`,
        R`<b>Surface area:</b> powders react faster than lumps. <b>Catalyst:</b> provides an easier path with lower activation energy. <b>Light</b> speeds up photochemical reactions.`
      ],
      analogy: R`Food cooks faster in a pressure cooker (higher temperature) and spoils faster in summer than in a fridge. Chopped vegetables cook faster than whole ones (more surface area).` },

    { h: R`Rate law and the rate constant`,
      body: [
        R`The <b>rate law</b> shows how the rate depends on concentrations: rate \(= k[A]^x[B]^y\). The powers x and y are found <b>by experiment</b>; they are not necessarily the coefficients in the equation.`,
        R`\(k\) is the <b>rate constant</b>. It depends on temperature (and catalyst) but not on concentration.`,
        R`Units of k for order n: \((\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}\). Zero order: mol L⁻¹ s⁻¹; first order: s⁻¹; second order: L mol⁻¹ s⁻¹.`
      ],
      mistake: R`Writing the rate law straight from the balanced equation. That works only for elementary (single-step) reactions.` },

    { h: R`Order, molecularity, and elementary vs complex reactions`,
      body: [
        R`<b>Order</b> = sum of the powers in the rate law (x + y). It is experimental and can be 0, a fraction, or even negative.`,
        R`An <b>elementary</b> reaction happens in a single step. Its <b>molecularity</b> = the number of particles colliding in that step (1, 2 or rarely 3), always a whole number.`,
        R`A <b>complex</b> reaction happens in several steps (a mechanism). The <b>slowest step</b> controls the overall rate; it is called the rate-determining step.`,
        R`<b>Pseudo-first-order:</b> if one reactant is in huge excess (like water in hydrolysis), its concentration barely changes, so the reaction behaves as first order.`
      ],
      analogy: R`A factory line moves only as fast as its slowest worker. The rate-determining step is that slowest worker.` },

    { h: R`Zero-order reactions`,
      body: [
        R`Rate = k: the rate doesn't depend on concentration. The concentration falls in a straight line: \([A] = [A]_0 - kt\).`,
        R`Half-life: \(t_{1/2} = \dfrac{[A]_0}{2k}\), which gets shorter as the reaction proceeds.`,
        R`Examples: decomposition of NH₃ on a hot platinum surface (the surface is fully covered, so adding more gas doesn't help).`
      ] },

    { h: R`First-order reactions and half-life`,
      body: [
        R`Rate = k[A]. Integrated form: \(k = \dfrac{2.303}{t}\log\dfrac{[A]_0}{[A]}\), or \([A] = [A]_0e^{-kt}\).`,
        R`Half-life \(t_{1/2} = \dfrac{0.693}{k}\), the <b>same</b> no matter how much you start with. After n half-lives, \([A]_0/2^n\) remains.`,
        R`A graph of \(\ln[A]\) (or log[A]) against t is a straight line with slope \(-k\) (or \(-k/2.303\)). Radioactive decay is first order.`
      ],
      points: [R`75% complete = 2 half-lives; 87.5% = 3; 99.9% ≈ 10 half-lives.`] },

    { h: R`Temperature and the Arrhenius equation`,
      body: [
        R`Molecules must have at least a minimum energy, the <b>activation energy</b> \(E_a\), to react. Think of it as an energy hill between reactants and products.`,
        R`<b>Arrhenius equation:</b> \(k = Ae^{-E_a/RT}\). A higher temperature or a lower \(E_a\) means a larger k.`,
        R`Comparing two temperatures: \(\log\dfrac{k_2}{k_1} = \dfrac{E_a}{2.303R}\left(\dfrac1{T_1} - \dfrac1{T_2}\right)\). A graph of log k against 1/T has slope \(-E_a/2.303R\).`,
        R`A <b>catalyst</b> lowers \(E_a\) by giving an alternative path. It doesn't change ΔH or the equilibrium constant, and it isn't used up.`
      ],
      analogy: R`Activation energy is like the boundary wall you must climb before you can run downhill into the next garden. A catalyst is like finding a gate in the wall.` },

    { h: R`Collision theory`,
      body: [
        R`For two molecules to react, they must <b>collide</b>, with <b>enough energy</b> (at least \(E_a\)) and in the <b>right orientation</b>.`,
        R`Rate \(= PZ_{AB}e^{-E_a/RT}\), where \(Z_{AB}\) is the collision frequency, \(e^{-E_a/RT}\) is the fraction of collisions with enough energy, and \(P\) (the steric factor) is the fraction with the correct orientation.`,
        R`Most collisions are "failures", which is why many reactions are slower than the huge number of collisions would suggest.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`The concentration of A falls from 0.5 M to 0.3 M in 10 s. Find the average rate of disappearance of A.`,
      steps: [R`Rate \(= -\dfrac{\Delta[A]}{\Delta t} = -\dfrac{0.3 - 0.5}{10}\).`],
      ans: R`0.02 mol L⁻¹ s⁻¹` },
    { level: 1, t: 4, q: R`Give the units of the rate constant for (a) a zero-order and (b) a first-order reaction.`,
      steps: [R`Use \((\text{mol L}^{-1})^{1-n}\,\text{s}^{-1}\).`, R`(a) n = 0: (mol L⁻¹)¹ s⁻¹. (b) n = 1: (mol L⁻¹)⁰ s⁻¹.`],
      ans: R`(a) mol L⁻¹ s⁻¹ (b) s⁻¹` },
    { level: 1, t: 1, q: R`Why does milk turn sour faster in summer than when kept in a fridge?`,
      steps: [R`Souring is a set of chemical (bacterial) reactions.`, R`At higher temperature, more molecules have energy above the activation energy, so the reactions go faster.`],
      ans: R`Higher temperature increases the rate; cooling slows it down.` },
    { level: 2, t: 5, q: R`Show that a first-order reaction takes about 10 half-lives to reach 99.9% completion.`,
      steps: [R`99.9% complete means \([A] = [A]_0/1000\).`, R`\(t = \dfrac{2.303}{k}\log1000 = \dfrac{6.909}{k}\).`, R`\(t_{1/2} = 0.693/k\), so \(t/t_{1/2} = 6.909/0.693\).`],
      ans: R`\(t \approx 9.97\,t_{1/2}\), i.e. about 10 half-lives` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The unit of the rate of a reaction is:`,
      options: [R`mol L⁻¹ s⁻¹`, R`s⁻¹`, R`L mol⁻¹`, R`mol s`], correct: 0,
      solution: R`Change in concentration (mol/L) per unit time (s).` },
    { level: 1, type: 'mcq', q: R`The rate of most reactions increases when:`,
      options: [R`the temperature is lowered`, R`the temperature is raised`, R`an inert solid is added`, R`a catalyst is removed`], correct: 1,
      solution: R`More molecules then have energy above \(E_a\).` },
    { level: 1, type: 'mcq', q: R`A catalyst speeds up a reaction by:`,
      options: [R`raising the activation energy`, R`changing ΔH`, R`changing the equilibrium constant`, R`lowering the activation energy`], correct: 3,
      solution: R`It provides a lower-energy path; ΔH and K are unchanged.` },
    { level: 1, type: 'mcq', q: R`The half-life of a first-order reaction depends on:`,
      options: [R`the initial concentration only`, R`both k and the initial concentration`, R`neither`, R`the rate constant only`], correct: 3,
      solution: R`\(t_{1/2} = 0.693/k\), independent of concentration.` },
    { level: 1, type: 'num', q: R`A first-order reaction has k = 0.693 min⁻¹. Find its half-life (in min).`,
      answer: 1, tol: 0.001, unit: 'min',
      solution: R`\(t_{1/2} = 0.693/0.693 = 1\) min.` },
    { level: 1, type: 'num', q: R`[A] falls by 0.2 M in 20 s. Find the average rate (in mol L⁻¹ s⁻¹).`,
      answer: 0.01, tol: 0.0001, unit: 'mol L⁻¹ s⁻¹',
      solution: R`0.2/20 = 0.01 mol L⁻¹ s⁻¹.` },
    { level: 2, type: 'mcq', q: R`The order of a reaction:`,
      options: [R`is always a whole number`, R`can be zero or a fraction`, R`can only be 1 or 2`, R`can never be zero`], correct: 1,
      solution: R`Order is experimental and can be 0, a fraction, or even negative.` },
    { level: 2, type: 'mcq', q: R`For a zero-order reaction, the half-life is:`,
      options: [R`proportional to \([A]_0\)`, R`proportional to \(1/[A]_0\)`, R`independent of \([A]_0\)`, R`proportional to \([A]_0^2\)`], correct: 0,
      solution: R`\(t_{1/2} = [A]_0/2k\).` },
    { level: 2, type: 'mcq', q: R`The molecularity of the elementary reaction 2NO + O₂ → 2NO₂ is:`,
      options: [R`1`, R`2`, R`3`, R`0`], correct: 2,
      solution: R`Three molecules (2 NO + 1 O₂) collide in the single step.` },
    { level: 2, type: 'mcq', q: R`For a first-order reaction, a graph of ln[A] against time is:`,
      options: [R`a parabola`, R`a straight line with slope +k`, R`a horizontal line`, R`a straight line with slope −k`], correct: 3,
      solution: R`\(\ln[A] = \ln[A]_0 - kt\).` },
    { level: 2, type: 'num', q: R`A first-order reaction has \(k = 2.303\times10^{-3}\) s⁻¹. How long (in s) does it take to be 90% complete?`,
      answer: 1000, tol: 0.5, unit: 's',
      solution: R`\(t = \dfrac{2.303}{k}\log\dfrac{100}{10} = \dfrac{2.303}{2.303\times10^{-3}} = 1000\) s.` },
    { level: 2, type: 'num', q: R`A zero-order reaction has \([A]_0 = 0.8\) M and k = 0.02 M/s. Find its half-life (in s).`,
      answer: 20, tol: 0.01, unit: 's',
      solution: R`\(t_{1/2} = [A]_0/2k = 0.8/0.04 = 20\) s.` },
    { level: 2, type: 'num', q: R`A reaction has the rate law rate = k[A]²[B]. What is its overall order?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`2 + 1 = 3.` },
    { level: 3, type: 'mcq', q: R`In the Arrhenius plot of log k against 1/T, the slope equals:`,
      options: [R`\(-E_a/R\)`, R`\(-E_a/2.303R\)`, R`\(E_a/2.303R\)`, R`\(-2.303R/E_a\)`], correct: 1,
      solution: R`\(\log k = \log A - \dfrac{E_a}{2.303R}\cdot\dfrac1T\).` },
    { level: 3, type: 'mcq', q: R`If a reaction's rate doubles for every 10 °C rise, by what factor does it increase from 25 °C to 65 °C?`,
      options: [R`4`, R`8`, R`16`, R`32`], correct: 2,
      solution: R`40 °C means four 10° steps: \(2^4 = 16\).` },
    { level: 3, type: 'num', q: R`About how many half-lives does a first-order reaction need to be 99.9% complete? (Give 2 decimals.)`,
      answer: 9.97, tol: 0.02, unit: 'half-lives',
      solution: R`\(t = (2.303/k)\log1000 = 6.909/k\) and \(t_{1/2} = 0.693/k\), so \(6.909/0.693 \approx 9.97\).` },
    { level: 3, type: 'num', q: R`A rate constant becomes 4 times larger when the temperature rises from 300 K to 350 K. Find \(E_a\) (in kJ/mol). (R = 8.314)`,
      answer: 24.2, tol: 0.1, unit: 'kJ/mol',
      solution: R`\(\log4 = \dfrac{E_a}{2.303\times8.314}\left(\dfrac1{300} - \dfrac1{350}\right)\), so \(E_a = \dfrac{0.602\times19.147}{4.762\times10^{-4}} \approx 24{,}200\) J/mol.` }
  ]
});
