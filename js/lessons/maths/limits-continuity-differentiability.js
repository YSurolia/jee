// Lesson: Limits, Continuity and Differentiability.
var R = String.raw;
JEE.lesson('maths', 'limits-continuity-differentiability', {
  theory: [
    { h: R`Real functions and their algebra`,
      body: [
        R`A <b>real function</b> takes real numbers to real numbers. Its <b>domain</b> is the set of inputs where the formula makes sense.`,
        R`Functions can be combined: \((f + g)(x) = f(x) + g(x)\), \((fg)(x) = f(x)g(x)\), \((f/g)(x) = f(x)/g(x)\). The domain of the combination is where both are defined, and for \(f/g\) we also need \(g(x) \ne 0\).`
      ] },

    { h: R`Standard functions and their graphs`,
      body: [
        R`<b>Polynomials</b> (like \(x^2 - 3x + 2\)) are defined everywhere. <b>Rational</b> functions \(p(x)/q(x)\) are defined except where \(q(x) = 0\).`,
        R`<b>Trigonometric:</b> sin x and cos x everywhere; tan x except at odd multiples of \(\pi/2\). <b>Exponential</b> \(e^x\): defined everywhere, always positive. <b>Logarithm</b> \(\ln x\): defined only for \(x > 0\).`,
        R`Knowing these shapes (parabola, sine wave, exponential curve, log curve) helps enormously with limits, domains and graphs.`
      ],
      check: { q: R`What is the domain of \(\ln(x - 3)\)?`, ans: R`\(x - 3 > 0\), so \(x > 3\).` } },

    { h: R`Inverse functions and their graphs`,
      body: [
        R`A one-one function has an inverse that undoes it. The graph of \(f^{-1}\) is the reflection of the graph of f in the line \(y = x\).`,
        R`\(e^x\) and \(\ln x\) are inverses of each other: \(\ln(e^x) = x\) and \(e^{\ln x} = x\). Likewise sin and sin⁻¹ (on the restricted domain).`
      ] },

    { h: R`Limits`,
      body: [
        R`\(\displaystyle\lim_{x\to a}f(x) = L\) means f(x) gets as close as we like to L when x gets close to a (but not equal to it). The limit exists only if the <b>left-hand limit</b> equals the <b>right-hand limit</b>.`,
        R`<b>Methods:</b> substitute directly; if you get \(0/0\), factorise and cancel, rationalise, or use standard limits.`,
        R`<b>Standard limits:</b> \(\lim\limits_{x\to0}\dfrac{\sin x}{x} = 1\), \(\lim\limits_{x\to0}\dfrac{e^x - 1}{x} = 1\), \(\lim\limits_{x\to0}\dfrac{\ln(1 + x)}{x} = 1\), \(\lim\limits_{x\to a}\dfrac{x^n - a^n}{x - a} = na^{n-1}\), \(\lim\limits_{x\to\infty}\left(1 + \dfrac1x\right)^x = e\).`
      ],
      analogy: R`A limit is like walking towards a door. Even if the door is locked (the function isn't defined at that point), you can still say exactly which door you're approaching.`,
      mistake: R`Writing \(0/0 = 1\) or 0. "0/0" means "simplify first"; it's not an answer.` },

    { h: R`Continuity and differentiability`,
      body: [
        R`f is <b>continuous</b> at a if \(\lim\limits_{x\to a}f(x) = f(a)\): the graph can be drawn there without lifting the pen.`,
        R`f is <b>differentiable</b> at a if the left-hand and right-hand derivatives are equal: the graph is smooth there, with no sharp corner.`,
        R`Differentiable ⇒ continuous, but continuous ⇏ differentiable. Example: \(|x|\) is continuous at 0 but has a corner there, so it isn't differentiable.`
      ],
      analogy: R`A continuous graph is an unbroken road. A differentiable graph is an unbroken road with no sharp turns. You can drive smoothly along it.` },

    { h: R`Rules of differentiation`,
      body: [
        R`The <b>derivative</b> \(f'(x) = \lim\limits_{h\to0}\dfrac{f(x + h) - f(x)}{h}\) is the slope of the curve, i.e. the instantaneous rate of change.`,
        R`<b>Basic:</b> \(\dfrac{d}{dx}x^n = nx^{n-1}\); \((\sin x)' = \cos x\); \((\cos x)' = -\sin x\); \((\tan x)' = \sec^2x\); \((e^x)' = e^x\); \((\ln x)' = 1/x\); \((\sin^{-1}x)' = \dfrac{1}{\sqrt{1 - x^2}}\); \((\tan^{-1}x)' = \dfrac{1}{1 + x^2}\).`,
        R`<b>Rules:</b> sum and difference term by term; product \((uv)' = u'v + uv'\); quotient \(\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}\); chain \(\dfrac{d}{dx}f(g(x)) = f'(g(x))\,g'(x)\).`
      ],
      check: { q: R`Differentiate \(\sin(3x)\).`, ans: R`Chain rule: \(3\cos3x\).` } },

    { h: R`Implicit, logarithmic and second derivatives`,
      body: [
        R`<b>Implicit differentiation:</b> when y isn't written alone (e.g. \(x^2 + y^2 = 25\)), differentiate both sides with respect to x, remembering \(\dfrac{d}{dx}(y^2) = 2y\dfrac{dy}{dx}\).`,
        R`<b>Logarithmic differentiation:</b> for things like \(x^x\), take ln of both sides first.`,
        R`<b>Second derivative</b> \(\dfrac{d^2y}{dx^2}\) is the derivative of the derivative. It tells how the slope is changing (curvature).`
      ] },

    { h: R`Applications of derivatives`,
      body: [
        R`<b>Rate of change:</b> if \(A = \pi r^2\) and r changes with time, \(\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt}\).`,
        R`<b>Increasing/decreasing:</b> \(f'(x) > 0\) means increasing; \(f'(x) < 0\) means decreasing.`,
        R`<b>Maxima and minima:</b> at a local maximum or minimum, \(f'(x) = 0\) (a critical point). Second-derivative test: \(f'' < 0\) gives a maximum and \(f'' > 0\) a minimum. For the absolute max/min on [a, b], also check the end points.`,
        R`<b>Tangent</b> at \((x_1, y_1)\): \(y - y_1 = f'(x_1)(x - x_1)\).`
      ],
      analogy: R`At the top of a hill, the ground is momentarily flat (slope 0), and it curves downward (negative second derivative). That's a maximum.` }
  ],

  examples: [
    { level: 1, t: 3, q: R`Evaluate \(\displaystyle\lim_{x\to3}\frac{x^2 - 9}{x - 3}\).`,
      steps: [R`Direct substitution gives 0/0.`, R`Factorise: \(\dfrac{(x - 3)(x + 3)}{x - 3} = x + 3\).`, R`Now substitute x = 3.`],
      ans: R`6` },
    { level: 1, t: 4, q: R`Differentiate \(x^3 + 5x^2 - 2\).`,
      steps: [R`Use \((x^n)' = nx^{n-1}\) on each term; constants differentiate to 0.`],
      ans: R`\(3x^2 + 10x\)` },
    { level: 1, t: 5, q: R`Differentiate \(\sin(3x)\) and \(e^{2x}\).`,
      steps: [R`Chain rule: derivative of the outside function × derivative of the inside.`, R`\(\cos(3x)\times3\); \(e^{2x}\times2\).`],
      ans: R`\(3\cos3x\); \(2e^{2x}\)` },
    { level: 2, t: 7, q: R`The radius of a circular ripple grows at 2 cm/s. How fast is its area growing when the radius is 5 cm?`,
      steps: [R`\(A = \pi r^2\), so \(\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt}\).`, R`\(= 2\pi(5)(2)\).`],
      ans: R`\(20\pi\) cm²/s` },
    { level: 3, t: 7, q: R`Find where \(f(x) = x^3 - 6x^2 + 9x + 1\) is increasing and where it is decreasing, and find its local maximum value.`,
      steps: [R`\(f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)\).`, R`\(f' > 0\) for \(x < 1\) or \(x > 3\); \(f' < 0\) for \(1 < x < 3\).`, R`It changes from increasing to decreasing at x = 1: local maximum \(f(1) = 1 - 6 + 9 + 1\).`],
      ans: R`Increasing on \((-\infty, 1)\) and \((3, \infty)\), decreasing on \((1, 3)\); local maximum value 5 at x = 1` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`\(\dfrac{d}{dx}(x^2)\) equals:`,
      options: [R`x`, R`2x`, R`\(x^2/2\)`, R`2`], correct: 1,
      solution: R`\(nx^{n-1}\) with n = 2.` },
    { level: 1, type: 'mcq', q: R`\(\displaystyle\lim_{x\to0}\frac{\sin x}{x}\) equals:`,
      options: [R`0`, R`∞`, R`1`, R`undefined`], correct: 2,
      solution: R`A standard limit (x in radians).` },
    { level: 1, type: 'mcq', q: R`\(\dfrac{d}{dx}(e^x)\) equals:`,
      options: [R`\(e^x\)`, R`\(xe^{x-1}\)`, R`e`, R`ln x`], correct: 0,
      solution: R`\(e^x\) is its own derivative.` },
    { level: 1, type: 'mcq', q: R`\(\dfrac{d}{dx}(\sin x)\) equals:`,
      options: [R`\(-\cos x\)`, R`\(\sin x\)`, R`\(\cos x\)`, R`\(-\sin x\)`], correct: 2,
      solution: R`The derivative of sin is cos.` },
    { level: 1, type: 'num', q: R`Evaluate \(\displaystyle\lim_{x\to3}\frac{x^2 - 9}{x - 3}\).`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`Cancel (x − 3) to get x + 3 = 6.` },
    { level: 1, type: 'num', q: R`Find the derivative of \(x^3\) at x = 2.`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`\(3x^2 = 12\).` },
    { level: 2, type: 'mcq', q: R`At x = 0, the function \(f(x) = |x|\) is:`,
      options: [R`differentiable`, R`continuous but not differentiable`, R`discontinuous`, R`undefined`], correct: 1,
      solution: R`Left slope −1 and right slope +1 differ (a corner), but there is no break.` },
    { level: 2, type: 'mcq', q: R`\(\dfrac{d}{dx}(\ln x)\) equals:`,
      options: [R`x`, R`\(e^x\)`, R`\(1/x\)`, R`ln x`], correct: 2,
      solution: R`Standard derivative, for x > 0.` },
    { level: 2, type: 'mcq', q: R`If \(f'(x) > 0\) at every point of an interval, then f on that interval is:`,
      options: [R`decreasing`, R`constant`, R`increasing`, R`at a maximum`], correct: 2,
      solution: R`A positive slope means the function is going up.` },
    { level: 2, type: 'mcq', q: R`The product rule says \((uv)'\) equals:`,
      options: [R`\(u'v'\)`, R`\(u'v - uv'\)`, R`\(u'v + uv'\)`, R`\((u'v - uv')/v^2\)`], correct: 2,
      solution: R`Differentiate each factor in turn and add.` },
    { level: 2, type: 'num', q: R`Find the derivative of \(\sin(3x)\) at x = 0.`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`\(3\cos(0) = 3\).` },
    { level: 2, type: 'num', q: R`Find the second derivative of \(x^4\) at x = 1.`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`\(f' = 4x^3\), \(f'' = 12x^2 = 12\).` },
    { level: 2, type: 'num', q: R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{2x} - 1}{x}\).`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`\(2\cdot\dfrac{e^{2x} - 1}{2x} \to 2\times1 = 2\).` },
    { level: 3, type: 'mcq', q: R`The function \(f(x) = x^3 - 6x^2 + 9x + 1\) is decreasing on:`,
      options: [R`\((-\infty, 1)\)`, R`\((1, 3)\)`, R`\((3, \infty)\)`, R`all real numbers`], correct: 1,
      solution: R`\(f' = 3(x - 1)(x - 3) < 0\) between the roots.` },
    { level: 3, type: 'mcq', q: R`\(\displaystyle\lim_{x\to\infty}\left(1 + \frac1x\right)^x\) equals:`,
      options: [R`1`, R`0`, R`e`, R`∞`], correct: 2,
      solution: R`This is the definition of e (about 2.718).` },
    { level: 3, type: 'num', q: R`Find the local maximum value of \(f(x) = x^3 - 6x^2 + 9x + 1\).`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`At x = 1: \(1 - 6 + 9 + 1 = 5\) (since \(f''(1) = -6 < 0\)).` },
    { level: 3, type: 'num', q: R`A circle's radius grows at 2 cm/s. When r = 5 cm, its area grows at kπ cm²/s. Find k.`,
      answer: 20, tol: 0.001, unit: '',
      solution: R`\(dA/dt = 2\pi r\,dr/dt = 20\pi\).` }
  ]
});
