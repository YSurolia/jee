// Lesson: Integral Calculus.
var R = String.raw;
JEE.lesson('maths', 'integral-calculus', {
  theory: [
    { h: R`Integration undoes differentiation`,
      body: [
        R`If \(F'(x) = f(x)\), then F is an <b>anti-derivative</b> (integral) of f: \(\int f(x)\,dx = F(x) + C\).`,
        R`The <b>constant C</b> appears because constants vanish when differentiated: \(x^2\), \(x^2 + 5\) and \(x^2 - 7\) all have derivative 2x.`,
        R`<b>Check any answer</b> by differentiating it: you should get back the original function.`
      ],
      analogy: R`Differentiation turns a distance–time record into speed. Integration goes backwards: from speed, rebuild the distance travelled (up to where you started, the "+C").`,
      check: { q: R`Find \(\int2x\,dx\).`, ans: R`\(x^2 + C\), since \(\dfrac{d}{dx}(x^2) = 2x\).` } },

    { h: R`Fundamental integrals`,
      body: [
        R`\(\int x^n\,dx = \dfrac{x^{n+1}}{n + 1} + C\) (\(n \ne -1\)); \(\int\dfrac1x\,dx = \ln|x| + C\); \(\int e^x\,dx = e^x + C\); \(\int a^x\,dx = \dfrac{a^x}{\ln a} + C\).`,
        R`\(\int\sin x\,dx = -\cos x + C\); \(\int\cos x\,dx = \sin x + C\); \(\int\sec^2x\,dx = \tan x + C\); \(\int\sec x\tan x\,dx = \sec x + C\).`,
        R`Integration is linear: integrate a sum term by term, and pull constants outside.`
      ] },

    { h: R`Substitution, by parts and partial fractions`,
      body: [
        R`<b>Substitution:</b> if the integrand contains a function and its derivative, put \(t\) = that function. For example, \(\int2x\cos(x^2)\,dx\): put \(t = x^2\), so \(dt = 2x\,dx\), giving \(\sin(x^2) + C\).`,
        R`<b>By parts:</b> \(\int u\,v\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx\). Choose u by <b>ILATE</b>: Inverse trig, Log, Algebraic, Trig, Exponential (first in the list = u).`,
        R`<b>Partial fractions:</b> split a rational function into simpler fractions, e.g. \(\dfrac{1}{(x - 1)(x - 2)} = \dfrac{1}{x - 2} - \dfrac{1}{x - 1}\), then integrate each.`
      ],
      mistake: R`Forgetting to change \(dx\) when substituting. Every \(x\) and \(dx\) must be rewritten in terms of t and dt.` },

    { h: R`Using trigonometric identities`,
      body: [
        R`Powers and products of trig functions are simplified with identities before integrating:`,
        R`\(\sin^2x = \dfrac{1 - \cos2x}{2}\), \(\cos^2x = \dfrac{1 + \cos2x}{2}\), \(2\sin A\cos B = \sin(A + B) + \sin(A - B)\), \(\tan^2x = \sec^2x - 1\).`
      ] },

    { h: R`Standard forms`,
      body: [
        R`\(\int\dfrac{dx}{x^2 + a^2} = \dfrac1a\tan^{-1}\dfrac xa + C\); \(\int\dfrac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\dfrac xa + C\); \(\int\dfrac{dx}{x^2 - a^2} = \dfrac{1}{2a}\ln\left|\dfrac{x - a}{x + a}\right| + C\).`,
        R`For a quadratic in the denominator, <b>complete the square</b> first to reach one of these forms.`
      ] },

    { h: R`Definite integrals and the fundamental theorem`,
      body: [
        R`The <b>definite integral</b> \(\int_a^bf(x)\,dx\) is a number: the (signed) area under the curve from a to b.`,
        R`<b>Fundamental theorem of calculus:</b> if F is any anti-derivative of f, then \(\int_a^bf(x)\,dx = F(b) - F(a)\). (The C cancels.)`,
        R`Also \(\dfrac{d}{dx}\int_a^xf(t)\,dt = f(x)\): differentiating an integral with a variable upper limit gives back the function.`
      ],
      check: { q: R`Evaluate \(\int_0^2x\,dx\).`, ans: R`\([x^2/2]_0^2 = 2 - 0 = 2\).` } },

    { h: R`Properties of definite integrals`,
      body: [
        R`\(\int_a^bf = -\int_b^af\); \(\int_a^af = 0\); \(\int_a^bf = \int_a^cf + \int_c^bf\).`,
        R`<b>King's property:</b> \(\int_0^af(x)\,dx = \int_0^af(a - x)\,dx\). It is very powerful: add the two forms to make the integral easy.`,
        R`If f is <b>odd</b> (\(f(-x) = -f(x)\)), \(\int_{-a}^af = 0\). If f is <b>even</b>, \(\int_{-a}^af = 2\int_0^af\).`
      ],
      analogy: R`For an odd function, the area on the right of the y-axis is exactly cancelled by an equal negative area on the left, like a see-saw in perfect balance.` },

    { h: R`Area under curves`,
      body: [
        R`The area between a curve \(y = f(x)\) (above the x-axis) and the x-axis from a to b is \(\int_a^bf(x)\,dx\). If part is below the axis, take absolute values piece by piece.`,
        R`Area between two curves: \(\int_a^b[\text{upper} - \text{lower}]\,dx\), with limits where the curves meet.`,
        R`Useful results: circle of radius r: \(\pi r^2\); ellipse: \(\pi ab\); area enclosed by \(y^2 = 4ax\) and the line \(x = c\): \(\tfrac83\sqrt a\,c^{3/2}\).`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find \(\int2x\,dx\) and check your answer.`,
      steps: [R`We need a function whose derivative is 2x: \(x^2\).`, R`Check: \(\dfrac{d}{dx}(x^2 + C) = 2x\) ✓`],
      ans: R`\(x^2 + C\)` },
    { level: 1, t: 1, q: R`Evaluate \(\int(3x^2 + 4)\,dx\).`,
      steps: [R`\(\int3x^2\,dx = x^3\); \(\int4\,dx = 4x\).`],
      ans: R`\(x^3 + 4x + C\)` },
    { level: 1, t: 5, q: R`Evaluate \(\int_0^2x\,dx\). What does it represent?`,
      steps: [R`\(\left[\dfrac{x^2}{2}\right]_0^2 = 2 - 0\).`, R`This is the area of the triangle under y = x from 0 to 2: \(\tfrac12\times2\times2 = 2\) ✓`],
      ans: R`2, the area under the line y = x between x = 0 and x = 2` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`\(\int x\,dx\) equals:`,
      options: [R`\(x^2 + C\)`, R`\(\dfrac{x^2}{2} + C\)`, R`\(1 + C\)`, R`\(2x + C\)`], correct: 1,
      solution: R`\(\dfrac{x^{1+1}}{1 + 1}\).` },
    { level: 1, type: 'mcq', q: R`\(\int\cos x\,dx\) equals:`,
      options: [R`\(-\sin x + C\)`, R`\(\cos x + C\)`, R`\(\sin x + C\)`, R`\(-\cos x + C\)`], correct: 2,
      solution: R`Because \((\sin x)' = \cos x\).` },
    { level: 1, type: 'mcq', q: R`\(\int\dfrac1x\,dx\) equals:`,
      options: [R`\(\ln|x| + C\)`, R`\(x^0 + C\)`, R`\(-\dfrac1{x^2} + C\)`, R`\(e^x + C\)`], correct: 0,
      solution: R`The power rule fails for n = −1; the answer is the logarithm.` },
    { level: 1, type: 'mcq', q: R`\(\int_a^af(x)\,dx\) equals:`,
      options: [R`f(a)`, R`2f(a)`, R`1`, R`0`], correct: 3,
      solution: R`There is no width, so no area.` },
    { level: 1, type: 'num', q: R`Evaluate \(\int_0^2x\,dx\).`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`\([x^2/2]_0^2 = 2\).` },
    { level: 1, type: 'num', q: R`Evaluate \(\int_0^13x^2\,dx\).`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`\([x^3]_0^1 = 1\).` },
    { level: 2, type: 'mcq', q: R`\(\int e^{3x}\,dx\) equals:`,
      options: [R`\(3e^{3x} + C\)`, R`\(e^{3x} + C\)`, R`\(\dfrac{e^{3x}}{3} + C\)`, R`\(\dfrac{e^x}{3} + C\)`], correct: 2,
      solution: R`Divide by the coefficient of x when integrating \(e^{kx}\).` },
    { level: 2, type: 'mcq', q: R`If f is an odd function, \(\int_{-a}^af(x)\,dx\) equals:`,
      options: [R`\(2\int_0^af\)`, R`0`, R`a`, R`it can't be determined`], correct: 1,
      solution: R`The positive and negative areas cancel.` },
    { level: 2, type: 'mcq', q: R`To integrate \(\int x\ln x\,dx\) by parts, the function to choose as u (to differentiate) is:`,
      options: [R`x`, R`either one`, R`ln x`, R`dx`], correct: 2,
      solution: R`ILATE: Log comes before Algebraic.` },
    { level: 2, type: 'mcq', q: R`\(\int\dfrac{dx}{1 + x^2}\) equals:`,
      options: [R`\(\sin^{-1}x + C\)`, R`\(\ln(1 + x^2) + C\)`, R`\(\tan^{-1}x + C\)`, R`\(\dfrac{1}{1 + x} + C\)`], correct: 2,
      solution: R`A standard form, with a = 1.` },
    { level: 2, type: 'num', q: R`Evaluate \(\int_0^\pi\sin x\,dx\).`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`\([-\cos x]_0^\pi = 1 + 1 = 2\).` },
    { level: 2, type: 'num', q: R`Evaluate \(\int_1^e\dfrac1x\,dx\).`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`\(\ln e - \ln1 = 1\).` },
    { level: 2, type: 'num', q: R`Find the area under \(y = x^2\) from x = 0 to x = 3.`,
      answer: 9, tol: 0.001, unit: 'sq units',
      solution: R`\([x^3/3]_0^3 = 9\).` },
    { level: 3, type: 'mcq', q: R`\(\dfrac{d}{dx}\displaystyle\int_0^xt^2\,dt\) equals:`,
      options: [R`\(x^3/3\)`, R`2x`, R`\(x^2\)`, R`0`], correct: 2,
      solution: R`Fundamental theorem: differentiating gives back the integrand at x.` },
    { level: 3, type: 'mcq', q: R`\(\int_0^{\pi/2}\sin^2x\,dx\) equals:`,
      options: [R`\(\pi/2\)`, R`\(\pi/4\)`, R`1`, R`\(\pi\)`], correct: 1,
      solution: R`By King's property it equals \(\int\cos^2x\). Adding them gives \(\int_0^{\pi/2}1\,dx = \pi/2\), so each is \(\pi/4\).` },
    { level: 3, type: 'num', q: R`Find the area enclosed between the parabola \(y^2 = 4x\) and the line \(x = 1\) (to 3 decimal places).`,
      answer: 2.667, tol: 0.005, unit: 'sq units',
      solution: R`\(2\int_0^12\sqrt x\,dx = 4\times\tfrac23 = 8/3 \approx 2.667\).` },
    { level: 3, type: 'num', q: R`Evaluate \(\int_0^4|x - 2|\,dx\).`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`Two triangles, each with base 2 and height 2: \(2 + 2 = 4\).` }
  ]
});
