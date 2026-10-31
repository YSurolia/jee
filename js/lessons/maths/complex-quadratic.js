// Lesson: Complex Numbers and Quadratic Equations.
var R = String.raw;
JEE.lesson('maths', 'complex-quadratic', {
  theory: [
    { h: R`Why we need complex numbers`,
      body: [
        R`The equation \(x^2 + 1 = 0\) has no real solution, because no real number squares to −1. So mathematicians invented a new number \(i\) with \(i^2 = -1\).`,
        R`A <b>complex number</b> is \(z = a + ib\), where a is the <b>real part</b> and b the <b>imaginary part</b> (both real). It can also be written as the ordered pair \((a, b)\).`,
        R`Two complex numbers are equal only if both their real parts and their imaginary parts are equal.`
      ],
      analogy: R`Real numbers live on a line. Complex numbers live on a whole plane: a real "east–west" direction and an imaginary "north–south" direction.`,
      check: { q: R`What are the real and imaginary parts of \(3 - 7i\)?`, ans: R`Real part 3, imaginary part −7.` } },

    { h: R`Algebra of complex numbers`,
      body: [
        R`<b>Add and subtract</b> real and imaginary parts separately. <b>Multiply</b> like brackets, then replace \(i^2\) with −1: \((a + ib)(c + id) = (ac - bd) + i(ad + bc)\).`,
        R`The <b>conjugate</b> of \(z = a + ib\) is \(\bar z = a - ib\), and \(z\bar z = a^2 + b^2\) is real. To <b>divide</b>, multiply the top and bottom by the conjugate of the denominator.`,
        R`Powers of i repeat every 4: \(i^1 = i\), \(i^2 = -1\), \(i^3 = -i\), \(i^4 = 1\). So \(i^n\) depends only on the remainder of n ÷ 4.`
      ],
      mistake: R`Writing \(\sqrt{-4}\times\sqrt{-9} = \sqrt{36} = 6\). The correct answer is \(2i\times3i = 6i^2 = -6\).` },

    { h: R`The Argand plane, modulus and argument`,
      body: [
        R`Plot \(z = a + ib\) as the point (a, b): the x-axis is the real axis and the y-axis the imaginary axis. This is the <b>Argand plane</b>.`,
        R`<b>Modulus</b> \(|z| = \sqrt{a^2 + b^2}\) = distance from the origin. <b>Argument</b> \(\arg z = \theta\) = the angle with the positive real axis (principal value in \((-\pi, \pi]\)), found from \(\tan\theta = b/a\) <b>and the quadrant</b>.`,
        R`Useful facts: \(|z_1z_2| = |z_1||z_2|\); \(\arg(z_1z_2) = \arg z_1 + \arg z_2\); \(|z_1 - z_2|\) is the distance between the two points.`
      ],
      analogy: R`Modulus and argument are like giving directions from a starting point: "walk 5 km (modulus) in the direction 53° north of east (argument)".` },

    { h: R`Polar form and De Moivre's theorem`,
      body: [
        R`Any complex number can be written \(z = r(\cos\theta + i\sin\theta) = re^{i\theta}\), where \(r = |z|\) and \(\theta = \arg z\).`,
        R`Multiplying complex numbers multiplies their moduli and adds their arguments, so multiplying by i means rotating by 90°.`,
        R`<b>De Moivre's theorem:</b> \((\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta\). This makes large powers easy.`
      ],
      check: { q: R`Write \(1 + i\) in polar form.`, ans: R`\(r = \sqrt2\), \(\theta = \pi/4\): \(\sqrt2\left(\cos\frac\pi4 + i\sin\frac\pi4\right)\).` } },

    { h: R`Cube roots of unity`,
      body: [
        R`The equation \(z^3 = 1\) has three roots: \(1\), \(\omega = \dfrac{-1 + i\sqrt3}{2}\) and \(\omega^2 = \dfrac{-1 - i\sqrt3}{2}\).`,
        R`Key facts: \(1 + \omega + \omega^2 = 0\) and \(\omega^3 = 1\). On the Argand plane they form an equilateral triangle on the unit circle.`,
        R`Simplify powers by reducing the exponent modulo 3: \(\omega^{3k} = 1\), \(\omega^{3k+1} = \omega\), \(\omega^{3k+2} = \omega^2\).`
      ] },

    { h: R`Solving quadratic equations`,
      body: [
        R`A quadratic \(ax^2 + bx + c = 0\) (\(a \ne 0\)) has roots \(x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}\).`,
        R`If the discriminant \(D = b^2 - 4ac\) is negative, the roots are complex: \(\dfrac{-b \pm i\sqrt{-D}}{2a}\). With real coefficients, complex roots always come in conjugate pairs.`,
        R`Simple quadratics can be solved quickly by factorising: \(x^2 - 5x + 6 = (x - 2)(x - 3)\).`
      ] },

    { h: R`Roots and coefficients`,
      body: [
        R`If \(\alpha\) and \(\beta\) are the roots of \(ax^2 + bx + c = 0\): sum \(\alpha + \beta = -\dfrac ba\), product \(\alpha\beta = \dfrac ca\).`,
        R`Many expressions can be built from these without finding the roots: \(\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta\); \(\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)\); \((\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta\).`
      ],
      analogy: R`It's like knowing two friends' total pocket money and the product of their amounts: you can answer many questions about them without knowing each amount separately.` },

    { h: R`Nature of roots and forming equations`,
      body: [
        R`For real a, b, c: \(D > 0\) gives two different real roots; \(D = 0\) gives two equal real roots; \(D < 0\) gives two complex (conjugate) roots. If D is a perfect square (and a, b, c are rational), the roots are rational.`,
        R`Both roots positive: \(D \ge 0\), sum > 0 and product > 0. Roots of opposite sign: product < 0.`,
        R`<b>Forming an equation</b> from its roots: \(x^2 - (\text{sum})x + (\text{product}) = 0\).`
      ],
      mistake: R`Forgetting to check \(D \ge 0\) in "both roots positive" problems. Sum and product conditions alone are not enough.` }
  ],

  examples: [
    { level: 1, t: 1, q: R`For \(z_1 = 2 + 3i\) and \(z_2 = 4 - i\), find \(z_1 + z_2\) and \(z_1z_2\).`,
      steps: [R`Sum: \((2 + 4) + (3 - 1)i = 6 + 2i\).`, R`Product: \(8 - 2i + 12i - 3i^2 = 8 + 10i + 3\).`],
      ans: R`\(6 + 2i\); \(11 + 10i\)` },
    { level: 1, t: 3, q: R`Find the modulus and conjugate of \(3 + 4i\).`,
      steps: [R`\(|z| = \sqrt{9 + 16}\).`, R`Change the sign of the imaginary part.`],
      ans: R`\(|z| = 5\); \(\bar z = 3 - 4i\)` },
    { level: 1, t: 6, q: R`Solve \(x^2 - 5x + 6 = 0\).`,
      steps: [R`Find two numbers that multiply to 6 and add to 5: 2 and 3.`, R`\((x - 2)(x - 3) = 0\).`],
      ans: R`\(x = 2\) or \(x = 3\)` },
    { level: 3, t: 7, q: R`If \(\alpha\) and \(\beta\) are the roots of \(x^2 - 3x + 1 = 0\), find \(\alpha^3 + \beta^3\).`,
      steps: [R`\(\alpha + \beta = 3\), \(\alpha\beta = 1\).`, R`\(\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = 27 - 9\).`],
      ans: R`18` },
    { level: 3, t: 8, q: R`For what values of k are both roots of \(x^2 - 2kx + k + 6 = 0\) real and positive?`,
      steps: [R`Real: \(D \ge 0\): \(4k^2 - 4(k + 6) \ge 0\), so \(k^2 - k - 6 \ge 0\), i.e. \((k - 3)(k + 2) \ge 0\), giving \(k \le -2\) or \(k \ge 3\).`, R`Sum \(2k > 0\), so \(k > 0\). Product \(k + 6 > 0\), so \(k > -6\).`, R`Combine all three conditions.`],
      ans: R`\(k \ge 3\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`\(i^2\) equals:`,
      options: [R`1`, R`−1`, R`i`, R`−i`], correct: 1,
      solution: R`That is the definition of i.` },
    { level: 1, type: 'mcq', q: R`The conjugate of \(3 - 2i\) is:`,
      options: [R`\(3 + 2i\)`, R`\(-3 + 2i\)`, R`\(-3 - 2i\)`, R`\(2 - 3i\)`], correct: 0,
      solution: R`Change the sign of the imaginary part only.` },
    { level: 1, type: 'mcq', q: R`The modulus of \(5 + 12i\) is:`,
      options: [R`17`, R`7`, R`12`, R`13`], correct: 3,
      solution: R`\(\sqrt{25 + 144} = \sqrt{169} = 13\).` },
    { level: 1, type: 'mcq', q: R`The roots of \(x^2 + 1 = 0\) are:`,
      options: [R`±1`, R`0 and 1`, R`±i`, R`there are no solutions at all`], correct: 2,
      solution: R`\(x^2 = -1\), so \(x = \pm i\) (complex roots).` },
    { level: 1, type: 'num', q: R`Find the sum of the roots of \(2x^2 - 8x + 3 = 0\).`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`\(-b/a = 8/2 = 4\).` },
    { level: 1, type: 'num', q: R`Find the product of the roots of \(x^2 - 7x + 10 = 0\).`,
      answer: 10, tol: 0.001, unit: '',
      solution: R`\(c/a = 10\) (the roots are 2 and 5).` },
    { level: 2, type: 'mcq', q: R`The principal argument of \(i\) is:`,
      options: [R`0`, R`\(\pi/2\)`, R`\(\pi\)`, R`\(-\pi/2\)`], correct: 1,
      solution: R`i is the point (0, 1) on the positive imaginary axis.` },
    { level: 2, type: 'mcq', q: R`For the cube roots of unity, \(1 + \omega + \omega^2\) equals:`,
      options: [R`0`, R`1`, R`−1`, R`3`], correct: 0,
      solution: R`The three roots of \(z^3 - 1 = 0\) add up to 0 (no \(z^2\) term).` },
    { level: 2, type: 'mcq', q: R`If a quadratic with real coefficients has \(D < 0\), its roots are:`,
      options: [R`real and equal`, R`real and distinct`, R`a pair of complex conjugates`, R`one real, one complex`], correct: 2,
      solution: R`The square root of a negative number makes them complex, and they come in conjugate pairs.` },
    { level: 2, type: 'mcq', q: R`The quadratic equation whose roots are 3 and −2 is:`,
      options: [R`\(x^2 + x - 6 = 0\)`, R`\(x^2 - x + 6 = 0\)`, R`\(x^2 + 5x + 6 = 0\)`, R`\(x^2 - x - 6 = 0\)`], correct: 3,
      solution: R`Sum = 1, product = −6: \(x^2 - x - 6 = 0\).` },
    { level: 2, type: 'num', q: R`Find \(\left|\dfrac{1 + i}{1 - i}\right|\).`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`\(|1 + i| = |1 - i| = \sqrt2\), so the ratio is 1. (In fact \(\frac{1 + i}{1 - i} = i\).)` },
    { level: 2, type: 'num', q: R`Find the value of \((1 + \omega)^3\), where \(\omega\) is a complex cube root of unity.`,
      answer: -1, tol: 0.001, unit: '',
      solution: R`\(1 + \omega = -\omega^2\), so \((-\omega^2)^3 = -\omega^6 = -1\).` },
    { level: 2, type: 'num', q: R`If \(\alpha\) and \(\beta\) are the roots of \(x^2 - 4x + 1 = 0\), find \(\alpha^2 + \beta^2\).`,
      answer: 14, tol: 0.001, unit: '',
      solution: R`\((\alpha + \beta)^2 - 2\alpha\beta = 16 - 2 = 14\).` },
    { level: 3, type: 'mcq', q: R`If \(z = 1 + i\), then \(z^4\) equals:`,
      options: [R`4`, R`−4`, R`4i`, R`−4i`], correct: 1,
      solution: R`\(z^2 = 2i\), so \(z^4 = (2i)^2 = -4\).` },
    { level: 3, type: 'mcq', q: R`The locus of z satisfying \(|z - i| = 2\) is:`,
      options: [R`a straight line`, R`a circle with centre (1, 0) and radius 2`, R`a parabola`, R`a circle with centre (0, 1) and radius 2`], correct: 3,
      solution: R`All points at distance 2 from the point i = (0, 1).` },
    { level: 3, type: 'num', q: R`If \(\alpha\) and \(\beta\) are the roots of \(x^2 - 3x + 1 = 0\), find \(\alpha^3 + \beta^3\).`,
      answer: 18, tol: 0.001, unit: '',
      solution: R`\((\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta) = 27 - 9 = 18\).` },
    { level: 3, type: 'num', q: R`Find the smallest integer k for which both roots of \(x^2 - 2kx + k + 6 = 0\) are real and positive.`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`The conditions give \(k \ge 3\), so the smallest integer is 3 (the roots are then equal, both 3).` }
  ]
});
