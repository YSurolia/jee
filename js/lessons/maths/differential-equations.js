// Lesson: Differential Equations.
var R = String.raw;
JEE.lesson('maths', 'differential-equations', {
  theory: [
    { h: R`What is a differential equation?`,
      body: [
        R`A <b>differential equation (DE)</b> is an equation that contains derivatives, such as \(\dfrac{dy}{dx} = 2x\) or \(\dfrac{d^2y}{dx^2} + y = 0\).`,
        R`They describe how things <b>change</b>: population growth (\(\dfrac{dP}{dt} = kP\)), cooling of tea, radioactive decay, the motion of a spring.`,
        R`<b>Solving</b> a DE means finding the function y(x) that satisfies it.`
      ],
      analogy: R`A DE is like a rule saying "your speed right now depends on where you are". Solving it means working out the whole journey from that rule.` },

    { h: R`Order, degree and kinds of solution`,
      body: [
        R`<b>Order</b> = the highest derivative that appears. <b>Degree</b> = the power of that highest derivative, once the equation is written as a polynomial in its derivatives. If a derivative is inside sin, log, e, and so on, the degree is <b>not defined</b>.`,
        R`The <b>general solution</b> contains arbitrary constants, as many as the order. A <b>particular solution</b> fixes the constants using given conditions (like y(0) = 1).`
      ],
      mistake: R`Reading the degree before clearing fractional powers. For \(\sqrt{1 + (y')^2} = y''\), square both sides first: the degree is 2.`,
      check: { q: R`Find the order and degree of \(\left(\dfrac{d^2y}{dx^2}\right)^2 + \dfrac{dy}{dx} = x\).`, ans: R`Order 2 (second derivative), degree 2 (its power).` } },

    { h: R`Separation of variables`,
      body: [
        R`If the equation can be written as \(g(y)\,dy = f(x)\,dx\), with all the y's on one side and all the x's on the other, integrate both sides: \(\int g(y)\,dy = \int f(x)\,dx + C\).`,
        R`Example: \(\dfrac{dy}{dx} = ky\) gives \(\dfrac{dy}{y} = k\,dx\), so \(\ln|y| = kx + C\) and \(y = Ae^{kx}\). This is <b>exponential growth</b> (k > 0) or <b>decay</b> (k < 0).`
      ],
      analogy: R`It's like sorting a mixed pile of laundry into "x" and "y" baskets, then dealing with each basket separately.` },

    { h: R`Homogeneous differential equations`,
      body: [
        R`A DE is <b>homogeneous</b> if it can be written as \(\dfrac{dy}{dx} = F\!\left(\dfrac yx\right)\): the right side depends only on the ratio y/x.`,
        R`<b>Method:</b> put \(y = vx\), so \(\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}\). The equation then separates in v and x. Solve, and finally replace v with y/x.`
      ] },

    { h: R`Linear first-order equations`,
      body: [
        R`A <b>linear</b> DE has the form \(\dfrac{dy}{dx} + P(x)\,y = Q(x)\).`,
        R`Multiply both sides by the <b>integrating factor</b> \(\text{IF} = e^{\int P\,dx}\). The left side then becomes \(\dfrac{d}{dx}(y\cdot\text{IF})\), so \(y\cdot\text{IF} = \int Q\cdot\text{IF}\,dx + C\).`,
        R`Useful: \(e^{\ln x} = x\), so \(P = 1/x\) gives IF = x, and \(P = 2/x\) gives IF = \(x^2\).`
      ],
      check: { q: R`What is the integrating factor of \(\dfrac{dy}{dx} + y = e^x\)?`, ans: R`\(e^{\int1\,dx} = e^x\).` } },

    { h: R`Applications: growth, decay and cooling`,
      body: [
        R`<b>Growth/decay:</b> \(\dfrac{dN}{dt} = kN\) gives \(N = N_0e^{kt}\). If a quantity doubles in time T, then \(k = \dfrac{\ln2}{T}\).`,
        R`<b>Newton's law of cooling:</b> \(\dfrac{dT}{dt} = -k(T - T_s)\) gives \(T - T_s = (T_0 - T_s)e^{-kt}\).`
      ],
      analogy: R`Money in a bank with continuous compounding grows by the same rule as a bacteria colony: the bigger it is, the faster it grows.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find the order and degree of (a) \(\dfrac{dy}{dx} + y = 0\) (b) \(\dfrac{d^2y}{dx^2} + \left(\dfrac{dy}{dx}\right)^3 = x\).`,
      steps: [R`(a) Highest derivative is the first, to the power 1.`, R`(b) Highest derivative is the second, to the power 1. (The cube is on the first derivative, which isn't the highest.)`],
      ans: R`(a) order 1, degree 1 (b) order 2, degree 1` },
    { level: 1, t: 1, q: R`Solve \(\dfrac{dy}{dx} = 2x\).`,
      steps: [R`\(dy = 2x\,dx\).`, R`Integrate both sides.`],
      ans: R`\(y = x^2 + C\)` },
    { level: 1, t: 1, q: R`Show that \(y = e^{2x}\) is a solution of \(\dfrac{dy}{dx} = 2y\).`,
      steps: [R`\(\dfrac{dy}{dx} = 2e^{2x}\).`, R`\(2y = 2e^{2x}\). They are equal ✓`],
      ans: R`It satisfies the equation, so it is a solution.` },
    { level: 2, t: 3, q: R`Solve \(\dfrac{dy}{dx} + \dfrac2xy = x\) (x > 0).`,
      steps: [R`\(P = 2/x\), so \(\text{IF} = e^{2\ln x} = x^2\).`, R`\(x^2y = \int x^3\,dx = \dfrac{x^4}{4} + C\).`],
      ans: R`\(y = \dfrac{x^2}{4} + \dfrac{C}{x^2}\)` },
    { level: 3, t: 1, q: R`A population grows at a rate proportional to its size and doubles in 10 years. How long does it take to triple?`,
      steps: [R`\(P = P_0e^{kt}\); doubling gives \(e^{10k} = 2\), so \(k = \dfrac{\ln2}{10}\).`, R`Tripling: \(e^{kt} = 3\), so \(t = \dfrac{\ln3}{k} = \dfrac{10\ln3}{\ln2}\).`],
      ans: R`\(\approx 15.85\) years` },
    { level: 3, t: 2, q: R`Solve \(\dfrac{dy}{dx} = \dfrac yx + \tan\dfrac yx\).`,
      steps: [R`Homogeneous: put \(y = vx\): \(v + x\dfrac{dv}{dx} = v + \tan v\).`, R`\(\cot v\,dv = \dfrac{dx}{x}\), so \(\ln|\sin v| = \ln|x| + \ln C\).`],
      ans: R`\(\sin\dfrac yx = Cx\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The order of \(\dfrac{d^2y}{dx^2} + y = 0\) is:`,
      options: [R`1`, R`2`, R`3`, R`0`], correct: 1,
      solution: R`The highest derivative is the second.` },
    { level: 1, type: 'mcq', q: R`The general solution of \(\dfrac{dy}{dx} = 2x\) is:`,
      options: [R`y = 2`, R`y = 2x + C`, R`\(y = x^2\)`, R`\(y = x^2 + C\)`], correct: 3,
      solution: R`Integrate, and don't forget the constant.` },
    { level: 1, type: 'mcq', q: R`The general solution of a second-order DE contains how many arbitrary constants?`,
      options: [R`0`, R`1`, R`2`, R`3`], correct: 2,
      solution: R`As many as the order.` },
    { level: 1, type: 'mcq', q: R`The degree of \(\left(\dfrac{dy}{dx}\right)^2 + y = 0\) is:`,
      options: [R`2`, R`1`, R`0`, R`not defined`], correct: 0,
      solution: R`The highest derivative (the first) appears squared.` },
    { level: 1, type: 'num', q: R`If \(\dfrac{dy}{dx} = 3x^2\) and y(0) = 1, find y(1).`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`\(y = x^3 + 1\), so y(1) = 2.` },
    { level: 1, type: 'num', q: R`What is the order of \(\dfrac{d^3y}{dx^3} + y = x\)?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`The highest derivative is the third.` },
    { level: 2, type: 'mcq', q: R`The integrating factor of \(\dfrac{dy}{dx} + y = x\) is:`,
      options: [R`x`, R`\(e^{-x}\)`, R`\(e^x\)`, R`ln x`], correct: 2,
      solution: R`\(e^{\int1\,dx} = e^x\).` },
    { level: 2, type: 'mcq', q: R`The general solution of \(\dfrac{dy}{dx} = \dfrac yx\) is:`,
      options: [R`y = Cx`, R`y = x + C`, R`\(y = Ce^x\)`, R`xy = C`], correct: 0,
      solution: R`\(dy/y = dx/x\), so \(\ln y = \ln x + \ln C\).` },
    { level: 2, type: 'mcq', q: R`The degree of \(\dfrac{d^2y}{dx^2} + \sin\left(\dfrac{dy}{dx}\right) = 0\) is:`,
      options: [R`1`, R`2`, R`0`, R`not defined`], correct: 3,
      solution: R`A derivative inside sin means the equation isn't a polynomial in its derivatives.` },
    { level: 2, type: 'mcq', q: R`A homogeneous differential equation is solved with the substitution:`,
      options: [R`y = v + x`, R`y = vx`, R`\(y = e^v\)`, R`y = x/v`], correct: 1,
      solution: R`y = vx turns it into an equation that separates.` },
    { level: 2, type: 'num', q: R`Solve \(\dfrac{dy}{dx} = y\) with y(0) = 3. Find y(ln 2).`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`\(y = 3e^x\), so \(y(\ln2) = 3\times2 = 6\).` },
    { level: 2, type: 'num', q: R`The integrating factor of \(\dfrac{dy}{dx} + \dfrac2xy = x\) is a power of x. Find its value at x = 3.`,
      answer: 9, tol: 0.001, unit: '',
      solution: R`\(\text{IF} = x^2\), which is 9 at x = 3.` },
    { level: 2, type: 'num', q: R`Solve \(\dfrac{dy}{dx} = 2y\) with y(0) = 1. Find y(1) (to 3 decimal places).`,
      answer: 7.389, tol: 0.002, unit: '',
      solution: R`\(y = e^{2x}\), so \(y(1) = e^2 \approx 7.389\).` },
    { level: 3, type: 'mcq', q: R`The solution of \(\dfrac{dy}{dx} = \dfrac yx + \tan\dfrac yx\) is:`,
      options: [R`\(\cos(y/x) = Cx\)`, R`\(\tan(y/x) = Cx\)`, R`\(\sin(y/x) = Cx\)`, R`\(\sin(y/x) = x + C\)`], correct: 2,
      solution: R`With y = vx: \(\cot v\,dv = dx/x\), giving \(\sin v = Cx\).` },
    { level: 3, type: 'mcq', q: R`A population grows exponentially and doubles every 10 years. After 30 years it will be how many times its original size?`,
      options: [R`3`, R`6`, R`8`, R`9`], correct: 2,
      solution: R`Three doublings: \(2^3 = 8\).` },
    { level: 3, type: 'num', q: R`A population that doubles every 10 years (exponential growth) triples in how many years? (2 decimal places)`,
      answer: 15.85, tol: 0.02, unit: 'years',
      solution: R`\(t = 10\ln3/\ln2 \approx 15.85\).` },
    { level: 3, type: 'num', q: R`Solve \(\dfrac{dy}{dx} + \dfrac2xy = x\) with y(1) = 1. Find y(2).`,
      answer: 1.1875, tol: 0.001, unit: '',
      solution: R`\(y = \dfrac{x^2}{4} + \dfrac C{x^2}\); y(1) = 1 gives C = 3/4; \(y(2) = 1 + \dfrac{3}{16} = 1.1875\).` }
  ]
});
