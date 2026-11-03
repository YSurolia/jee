// Book chapter: Complex Numbers and Quadratic Equations. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figArgand = D.plot({ w: 320, h: 300, x: [-1.5, 4.5], y: [-3, 0], eq: true, xlabel: 'Re', ylabel: 'Im', mathLabels: false, xticks: [1, 2, 3], yticks: [1, 2, [-2, '−2']],
  segs: [{ x1: 0, y1: 0, x2: 3, y2: 2, color: 'b', w: 2.2, label: '|z| = r', lx: -18, ly: -10 }, { x1: 0, y1: 0, x2: 3, y2: -2, color: 'o', w: 1.6, dash: '5 4' }, { x1: 3, y1: 2, x2: 3, y2: -2, color: 'm', w: 1, dash: '3 3' }],
  pts: [{ x: 3, y: 2, color: 'b', label: 'z = 3 + 2i', pos: 'ne', math: false }, { x: 3, y: -2, color: 'o', label: 'z̄ = 3 − 2i', pos: 'se', math: false }],
  extra: function (X, Y) { var t = Math.atan2(2, 3); return [D.path('M' + X(0.9) + ',' + Y(0) + ' A' + (X(0.9) - X(0)) + ',' + (X(0.9) - X(0)) + ' 0 0 0 ' + X(0.9 * Math.cos(t)) + ',' + Y(0.9 * Math.sin(t)), { color: 'g', w: 1.6 }), D.text(X(1.15), Y(0.3), 'θ', { color: 'g', size: 13 })]; },
  label: 'Argand diagram' });

var figRotate = D.plot({ w: 300, h: 260, x: [-4.2, 3.8], y: [-1, 0], eq: true, xlabel: 'Re', ylabel: 'Im', mathLabels: false, xticks: [1, 2, 3], yticks: [1, 2, 3],
  segs: [{ x1: 0, y1: 0, x2: 3, y2: 1, color: 'b', w: 2 }, { x1: 0, y1: 0, x2: -1, y2: 3, color: 'o', w: 2 }],
  pts: [{ x: 3, y: 1, color: 'b', label: 'z = 3 + i', pos: 'e', math: false }, { x: -1, y: 3, color: 'o', label: 'iz = −1 + 3i', pos: 'w', math: false }],
  extra: function (X, Y) { return [D.path('M' + X(1.2) + ',' + Y(0.4) + ' A' + (X(1.26) - X(0)) + ',' + (X(1.26) - X(0)) + ' 0 0 0 ' + X(-0.4) + ',' + Y(1.2), { color: 'g', w: 1.6 }), D.text(X(0.7), Y(1.2), '90°', { color: 'g', size: 11, math: false })]; },
  label: 'Multiplication by i rotates by 90 degrees' });

var figOmega = D.plot({ w: 260, h: 250, x: [-1.6, 1.6], y: [-1.4, 0], eq: true, xlabel: 'Re', ylabel: 'Im', mathLabels: false, xticks: [[1, '1'], [-1, '−1']], yticks: [],
  param: [{ fx: Math.cos, fy: Math.sin, t: [0, 2 * Math.PI], color: 'm', w: 1.2 }],
  segs: [{ x1: 1, y1: 0, x2: -0.5, y2: 0.866, color: 'b', w: 1.4 }, { x1: -0.5, y1: 0.866, x2: -0.5, y2: -0.866, color: 'b', w: 1.4 }, { x1: -0.5, y1: -0.866, x2: 1, y2: 0, color: 'b', w: 1.4 }],
  pts: [{ x: 1, y: 0, color: 'r', label: '1', pos: 'ne', math: false }, { x: -0.5, y: 0.866, color: 'r', label: 'ω', pos: 'nw', math: false }, { x: -0.5, y: -0.866, color: 'r', label: 'ω²', pos: 'sw', math: false }],
  label: 'Cube roots of unity' });

function para(a, b, c, title) {
  return [D.plot({ w: 180, h: 160, x: [-1, 5], y: [-2.5, 4], noOrigin: true, xticks: [], yticks: [], fns: [{ f: function (x) { return a * x * x + b * x + c; }, color: 'b' }], label: title }), title];
}
var figNature = D.row([para(1, -4, 3, R`D > 0: two real roots`), para(1, -4, 4, R`D = 0: equal roots`), para(1, -4, 5.5, R`D < 0: no real roots`)]);

// ---------- chapter text ----------
JEE.book('maths', 'complex-quadratic', {
  intro: [
    R`The equation x² + 1 = 0 has no real solution, because the square of a real number is never negative. Mathematicians extended the number system by introducing \(i = \sqrt{-1}\), creating the <b>complex numbers</b>. With them, every polynomial equation has a solution.`,
    R`This chapter covers the algebra of complex numbers, their geometric picture on the Argand plane, modulus and argument, polar form, the cube roots of unity, and quadratic equations: their solutions, the relations between roots and coefficients, the nature of roots and forming equations with given roots.`
  ],
  sections: [
    { h: R`The need for complex numbers; powers of i`, t: [0], blocks: [
      R`We define the <b>imaginary unit</b> i by \(i^2 = -1\). Then \(\sqrt{-a} = i\sqrt{a}\) for a > 0. The powers of i repeat in a cycle of four:`,
      { table: { head: [R`\(i^1\)`, R`\(i^2\)`, R`\(i^3\)`, R`\(i^4\)`], rows: [[R`\(i\)`, R`\(-1\)`, R`\(-i\)`, R`\(1\)`]] } },
      R`So \(i^{4k} = 1,\ i^{4k+1} = i,\ i^{4k+2} = -1,\ i^{4k+3} = -i\). The sum of four consecutive powers of i is 0.`,
      { ex: { q: R`Find \(i^{101}\) and \(i + i^2 + i^3 + \dots + i^{100}\).`,
        steps: [R`101 = 4 × 25 + 1, so \(i^{101} = i\).`, R`100 terms make 25 complete cycles, each summing to 0.`], ans: R`\(i\); 0` } },
      { mistake: R`Writing \(\sqrt{-2}\cdot\sqrt{-3} = \sqrt{6}\). The rule \(\sqrt{a}\sqrt{b} = \sqrt{ab}\) needs a, b ≥ 0. Correctly, \(\sqrt{-2}\sqrt{-3} = (i\sqrt2)(i\sqrt3) = -\sqrt6\).` },
      { check: { q: R`Simplify \(i^{-35}\).`, ans: R`\(i^{-35} = i^{-36} \cdot i = i\).` } }
    ] },

    { h: R`Complex numbers as ordered pairs; equality`, t: [0], blocks: [
      R`A <b>complex number</b> is z = a + ib with real a and b: a = Re(z) is the real part, b = Im(z) the imaginary part. It can also be seen as the ordered pair (a, b) of reals, with the rules (a, b) + (c, d) = (a + c, b + d) and (a, b)(c, d) = (ac − bd, ad + bc); then i = (0, 1). If b = 0 the number is real; if a = 0, b ≠ 0 it is purely imaginary.`,
      R`<b>Equality:</b> a + ib = c + id if and only if a = c and b = d. Complex numbers cannot be ordered: statements like 2 + i > 1 + 3i have no meaning.`,
      { ex: { q: R`Find real x and y if (x + 2y) + i(2x − y) = 5 + 5i.`,
        steps: [R`x + 2y = 5 and 2x − y = 5.`, R`Solving: x = 3, y = 1.`], ans: R`x = 3, y = 1` } },
      { check: { q: R`Is 0 a real number, purely imaginary, or both?`, ans: R`It is real (and 0 = 0 + 0i is usually counted as both).` } }
    ] },

    { h: R`Addition, subtraction, multiplication and division`, t: [1], blocks: [
      { points: [R`\((a + ib) \pm (c + id) = (a \pm c) + i(b \pm d)\)`, R`\((a + ib)(c + id) = (ac - bd) + i(ad + bc)\)`, R`<b>Division:</b> multiply numerator and denominator by the conjugate of the denominator: \[\frac{a + ib}{c + id} = \frac{(a + ib)(c - id)}{c^2 + d^2}\]`] },
      R`These operations satisfy the usual laws (commutative, associative, distributive). Every non-zero z has a multiplicative inverse: \(z^{-1} = \dfrac{\bar z}{|z|^2}\).`,
      { ex: { q: R`Express \(\dfrac{3 + 4i}{1 - 2i}\) in the form a + ib.`,
        steps: [R`Multiply by (1 + 2i): numerator (3 + 4i)(1 + 2i) = 3 + 6i + 4i + 8i² = −5 + 10i.`, R`Denominator 1² + 2² = 5.`], ans: R`−1 + 2i` } },
      { check: { q: R`Find (2 + 3i)(2 − 3i).`, ans: R`4 + 9 = 13.` } }
    ] },

    { h: R`The conjugate and its properties`, t: [1], blocks: [
      R`The <b>conjugate</b> of z = a + ib is \(\bar z = a - ib\) (reflection in the real axis).`,
      { points: [R`\(\overline{\bar z} = z\); \(z + \bar z = 2\,\text{Re}(z)\); \(z - \bar z = 2i\,\text{Im}(z)\).`, R`\(z\bar z = a^2 + b^2 = |z|^2\) (always real and ≥ 0).`, R`\(\overline{z_1 \pm z_2} = \bar z_1 \pm \bar z_2\), \(\overline{z_1 z_2} = \bar z_1 \bar z_2\), \(\overline{z_1/z_2} = \bar z_1 / \bar z_2\).`, R`z is real ⟺ \(z = \bar z\); z is purely imaginary ⟺ \(z = -\bar z\).`] },
      { ex: { q: R`If \(\dfrac{z - 1}{z + 1}\) is purely imaginary, show that |z| = 1.`,
        steps: [R`Purely imaginary w satisfies \(w + \bar w = 0\): \(\dfrac{z - 1}{z + 1} + \dfrac{\bar z - 1}{\bar z + 1} = 0\).`, R`Cross-multiplying: \((z - 1)(\bar z + 1) + (\bar z - 1)(z + 1) = 0 \Rightarrow 2z\bar z - 2 = 0\).`], ans: R`\(z\bar z = 1\), i.e. |z| = 1` } },
      { check: { q: R`What is \(z + \bar z\) for z = 4 − 7i?`, ans: R`8.` } }
    ] },

    { h: R`Square root of a complex number`, t: [1], blocks: [
      R`To find \(\sqrt{a + ib}\), let \(\sqrt{a + ib} = x + iy\). Squaring: \(x^2 - y^2 = a\) and \(2xy = b\). Also \(x^2 + y^2 = \sqrt{a^2 + b^2} = |z|\). Hence \[x^2 = \frac{|z| + a}{2}, \qquad y^2 = \frac{|z| - a}{2},\] with the signs of x and y chosen so that xy has the same sign as b.`,
      { ex: { q: R`Find the square roots of −5 + 12i.`,
        steps: [R`|z| = 13. x² = (13 − 5)/2 = 4, y² = (13 + 5)/2 = 9.`, R`b = 12 > 0, so x and y have the same sign: x + iy = ±(2 + 3i). Check: (2 + 3i)² = 4 + 12i − 9 = −5 + 12i.`], ans: R`±(2 + 3i)` } },
      { check: { q: R`Find the square roots of 2i.`, ans: R`±(1 + i), since (1 + i)² = 2i.` } }
    ] },

    { h: R`The Argand plane`, t: [2], blocks: [
      R`The complex number z = x + iy corresponds to the point P(x, y) in a plane, the <b>Argand plane</b> (or complex plane): the x-axis is the real axis and the y-axis is the imaginary axis. The distance OP is the modulus |z|, and the angle of OP with the positive real axis is the argument θ.`,
      { fig: figArgand, cap: R`z = 3 + 2i and its conjugate z̄ = 3 − 2i, the mirror image in the real axis.` },
      { check: { q: R`Where does −2i lie in the Argand plane?`, ans: R`On the negative imaginary axis, at (0, −2).` } }
    ] },

    { h: R`Geometric interpretation of operations`, t: [2], blocks: [
      { points: [
        R`<b>Addition</b> follows the parallelogram law: z₁ + z₂ is the fourth vertex of the parallelogram with sides 0→z₁ and 0→z₂ (like vector addition).`,
        R`\(|z_1 - z_2|\) is the <b>distance</b> between the points z₁ and z₂.`,
        R`<b>Multiplication</b> by z multiplies moduli and adds arguments. In particular, multiplying by i rotates a point by 90° anticlockwise about the origin; multiplying by \(e^{i\alpha}\) rotates by α.`,
        R`<b>Rotation formula:</b> if z₁, z₂, z₃ are points with angle α at z₁ from z₂ to z₃, then \(\dfrac{z_3 - z_1}{z_2 - z_1} = \dfrac{|z_3 - z_1|}{|z_2 - z_1|} e^{i\alpha}\).`
      ] },
      { fig: figRotate, cap: R`Multiplication by i rotates z through 90° about the origin without changing |z|.` },
      R`<b>Loci:</b> |z − z₀| = r is a circle with centre z₀ and radius r; |z − a| = |z − b| is the perpendicular bisector of the segment joining a and b; |z − a| + |z − b| = 2k (2k > |a − b|) is an ellipse; arg(z − z₀) = θ is a ray from z₀.`,
      { ex: { q: R`Describe the locus of z with |z − 2 − 3i| = 4.`,
        steps: [R`|z − (2 + 3i)| = 4 means distance from (2, 3) is 4.`], ans: R`Circle with centre (2, 3) and radius 4` } },
      { check: { q: R`What is the locus of |z − 1| = |z + 1|?`, ans: R`The perpendicular bisector of the segment from −1 to 1: the imaginary axis (Re z = 0).` } }
    ] },

    { h: R`Modulus and its properties`, t: [3], blocks: [
      R`The <b>modulus</b> of z = a + ib is \(|z| = \sqrt{a^2 + b^2}\), its distance from the origin.`,
      { points: [R`\(|z| \ge 0\), and |z| = 0 ⟺ z = 0; \(|z| = |\bar z| = |-z|\).`, R`\(|z_1 z_2| = |z_1||z_2|\); \(|z_1/z_2| = |z_1|/|z_2|\); \(|z^n| = |z|^n\).`, R`\(|z_1 + z_2|^2 = |z_1|^2 + |z_2|^2 + 2\,\text{Re}(z_1\bar z_2)\).`, R`\(|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)\) (parallelogram law).`] },
      { ex: { q: R`Find \(\left|\dfrac{(3 + 4i)(1 - i)}{(1 + i\sqrt3)}\right|\).`,
        steps: [R`|3 + 4i| = 5, |1 − i| = √2, |1 + i√3| = 2.`, R`Modulus = 5√2/2.`], ans: R`\(\dfrac{5\sqrt2}{2}\)` } },
      { check: { q: R`Find |(1 + i)⁶|.`, ans: R`(√2)⁶ = 8.` } }
    ] },

    { h: R`Triangle inequality`, t: [3], blocks: [
      R`For any complex numbers: \[|z_1 + z_2| \le |z_1| + |z_2|, \qquad |z_1 - z_2| \ge \big||z_1| - |z_2|\big|.\] Geometrically, one side of a triangle is not longer than the sum of the other two. Equality in the first holds when z₁ and z₂ have the same argument (they lie on the same ray from O).`,
      { ex: { q: R`If |z| = 2, find the greatest and least values of |z + 3 − 4i|.`,
        steps: [R`|z + (3 − 4i)| ≤ |z| + 5 = 7.`, R`|z + (3 − 4i)| ≥ |5 − 2| = 3.`], ans: R`greatest 7, least 3` } },
      { check: { q: R`If |z − 1| ≤ 2, what is the largest possible |z|?`, ans: R`|z| ≤ |z − 1| + 1 ≤ 3.` } }
    ] },

    { h: R`Argument and principal argument`, t: [3], blocks: [
      R`The <b>argument</b> (amplitude) of z ≠ 0 is the angle θ that OP makes with the positive real axis, measured anticlockwise; it is defined up to multiples of 2π. The <b>principal argument</b> Arg z is the value in \((-\pi, \pi]\). With α = tan⁻¹|b/a| (acute):`,
      { table: { head: [R`Quadrant of z = a + ib`, R`Principal argument`], rows: [[R`I (a > 0, b > 0)`, R`α`], [R`II (a < 0, b > 0)`, R`π − α`], [R`III (a < 0, b < 0)`, R`−(π − α)`], [R`IV (a > 0, b < 0)`, R`−α`]] } },
      { points: [R`\(\arg(z_1 z_2) = \arg z_1 + \arg z_2\), \(\arg(z_1/z_2) = \arg z_1 - \arg z_2\), \(\arg z^n = n\arg z\) (up to multiples of 2π).`, R`\(\arg \bar z = -\arg z\). Real positive numbers have argument 0, negative reals π.`] },
      { ex: { q: R`Find the principal argument of \(-1 + i\sqrt3\).`,
        steps: [R`α = tan⁻¹√3 = π/3. Second quadrant: π − π/3.`], ans: R`\(2\pi/3\)` } },
      { check: { q: R`What is Arg(−1 − i)?`, ans: R`−3π/4.` } }
    ] },

    { h: R`Polar representation`, t: [4], blocks: [
      R`With r = |z| and θ = arg z: \[z = r(\cos\theta + i\sin\theta) = re^{i\theta}\] (Euler's formula \(e^{i\theta} = \cos\theta + i\sin\theta\)). This form makes multiplication and powers easy: \(z_1z_2 = r_1r_2e^{i(\theta_1 + \theta_2)}\).`,
      { derive: R`De Moivre's theorem`, steps: [R`\((\cos\theta + i\sin\theta)^n = (e^{i\theta})^n = e^{in\theta} = \cos n\theta + i\sin n\theta\) for every integer n.`, R`So \(z^n = r^n(\cos n\theta + i\sin n\theta)\).`] },
      { ex: { q: R`Write 1 + i in polar form and find (1 + i)⁸.`,
        steps: [R`r = √2, θ = π/4: \(1 + i = \sqrt2\,e^{i\pi/4}\).`, R`\((1 + i)^8 = (\sqrt2)^8 e^{i2\pi} = 16\).`], ans: R`\(\sqrt2(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4})\); 16` } },
      { check: { q: R`Write −4 in polar form.`, ans: R`4(cos π + i sin π) = 4e^{iπ}.` } }
    ] },

    { h: R`Cube roots of unity`, t: [5], blocks: [
      R`The equation z³ = 1, i.e. (z − 1)(z² + z + 1) = 0, has three roots: \[1, \quad \omega = \frac{-1 + i\sqrt3}{2} = e^{2\pi i/3}, \quad \omega^2 = \frac{-1 - i\sqrt3}{2} = e^{4\pi i/3}.\]`,
      { fig: figOmega, cap: R`The cube roots of unity lie on the unit circle at the vertices of an equilateral triangle.` },
      { points: [R`\(\omega^3 = 1\) and \(1 + \omega + \omega^2 = 0\).`, R`\(\bar\omega = \omega^2\), \(\omega^{-1} = \omega^2\), \(|\omega| = 1\).`, R`\(\omega^n\) = 1, ω or ω² as n ≡ 0, 1, 2 (mod 3).`, R`Factorisations: \(a^3 - b^3 = (a - b)(a - \omega b)(a - \omega^2 b)\); \(a^2 + b^2 + c^2 - ab - bc - ca = (a + b\omega + c\omega^2)(a + b\omega^2 + c\omega)\).`] },
      { ex: { q: R`Evaluate \((1 + \omega - \omega^2)^3\).`,
        steps: [R`1 + ω = −ω², so 1 + ω − ω² = −2ω².`, R`\((-2\omega^2)^3 = -8\omega^6 = -8\).`], ans: R`−8` } },
      { check: { q: R`Find \(\omega^{100} + \omega^{200} + 1\).`, ans: R`ω¹⁰⁰ = ω, ω²⁰⁰ = ω²: sum = 1 + ω + ω² = 0.` } }
    ] },

    { h: R`Quadratic equations in the real and complex systems`, t: [6], blocks: [
      R`A <b>quadratic equation</b> is \(ax^2 + bx + c = 0\) with a ≠ 0. Completing the square gives the quadratic formula:`,
      { derive: R`The quadratic formula`, open: true, steps: [R`\(x^2 + \frac{b}{a}x = -\frac{c}{a} \Rightarrow \left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}\)`, R`\[x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\]`, R`If \(D = b^2 - 4ac < 0\) the roots are complex: \(x = \dfrac{-b \pm i\sqrt{4ac - b^2}}{2a}\).`] },
      R`If a, b, c are real, complex roots occur in <b>conjugate pairs</b>. If a, b, c are rational and one root is \(p + \sqrt q\) (q not a perfect square), the other is \(p - \sqrt q\).`,
      { ex: { q: R`Solve \(x^2 + x + 1 = 0\).`,
        steps: [R`D = 1 − 4 = −3. \(x = \dfrac{-1 \pm i\sqrt3}{2}\).`], ans: R`ω and ω² (the non-real cube roots of unity)` } },
      { check: { q: R`Solve x² − 4x + 13 = 0.`, ans: R`x = (4 ± √(−36))/2 = 2 ± 3i.` } }
    ] },

    { h: R`The fundamental theorem of algebra`, t: [6], blocks: [
      R`<b>Every polynomial equation of degree n ≥ 1 with complex coefficients has at least one complex root.</b> It follows that it has exactly n roots, counting multiplicity: a polynomial of degree n factors as \(a(x - \alpha_1)(x - \alpha_2)\cdots(x - \alpha_n)\). A quadratic equation therefore has exactly two roots (equal, real or complex), and a quadratic cannot have three distinct roots unless it is identically zero.`,
      { tip: R`If \(ax^2 + bx + c = 0\) is satisfied by three distinct values of x, then a = b = c = 0 (it is an identity).` },
      { check: { q: R`How many roots does a polynomial equation of degree 5 have?`, ans: R`Exactly five (counting multiplicity) in the complex numbers.` } }
    ] },

    { h: R`Sum and product of roots`, t: [7], blocks: [
      R`If α, β are the roots of \(ax^2 + bx + c = 0\), then \(ax^2 + bx + c = a(x - \alpha)(x - \beta)\); comparing coefficients: \[\alpha + \beta = -\frac{b}{a}, \qquad \alpha\beta = \frac{c}{a}.\]`,
      R`For a cubic \(ax^3 + bx^2 + cx + d = 0\) with roots α, β, γ: \(\sum\alpha = -b/a\), \(\sum\alpha\beta = c/a\), \(\alpha\beta\gamma = -d/a\).`,
      { ex: { q: R`If one root of x² − 7x + k = 0 is twice the other, find k.`,
        steps: [R`Roots α and 2α: 3α = 7 ⟹ α = 7/3.`, R`k = 2α² = 2 × 49/9 = 98/9.`], ans: R`k = 98/9` } },
      { check: { q: R`Find the sum and product of the roots of 3x² − 5x + 2 = 0.`, ans: R`Sum 5/3, product 2/3.` } }
    ] },

    { h: R`Symmetric functions of roots`, t: [7], blocks: [
      R`Expressions in α and β that do not change when α and β are swapped can be written using α + β and αβ:`,
      { points: [R`\(\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta\)`, R`\((\alpha - \beta)^2 = (\alpha + \beta)^2 - 4\alpha\beta\), so \(|\alpha - \beta| = \dfrac{\sqrt D}{|a|}\)`, R`\(\alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)\)`, R`\(\dfrac1\alpha + \dfrac1\beta = \dfrac{\alpha + \beta}{\alpha\beta}\)`] },
      { ex: { q: R`If α, β are the roots of 2x² − 3x + 5 = 0, find α² + β².`,
        steps: [R`α + β = 3/2, αβ = 5/2.`, R`α² + β² = 9/4 − 5 = −11/4 (negative, because the roots are complex).`], ans: R`−11/4` } },
      { adv: R`<b>Newton's sums:</b> if Sₙ = αⁿ + βⁿ for roots of ax² + bx + c = 0, then \(aS_{n+2} + bS_{n+1} + cS_n = 0\). This is a quick way to find high powers.` },
      { check: { q: R`For roots of x² − 5x + 6 = 0, find α³ + β³.`, ans: R`125 − 3 × 6 × 5 = 35 (indeed 8 + 27).` } }
    ] },

    { h: R`The discriminant and the nature of roots`, t: [8], blocks: [
      R`For real coefficients, the <b>discriminant</b> \(D = b^2 - 4ac\) decides the nature of the roots:`,
      { table: { head: [R`D`, R`Roots`, R`Graph of y = ax² + bx + c`], rows: [[R`D > 0`, R`real and distinct (rational if D is a perfect square and a, b, c rational)`, R`cuts the x-axis twice`], [R`D = 0`, R`real and equal, x = −b/2a`, R`touches the x-axis`], [R`D < 0`, R`complex conjugate pair`, R`does not meet the x-axis`]] } },
      { fig: figNature, cap: R`For a > 0 the parabola opens upward; D decides how many times it meets the x-axis.` },
      R`For a > 0, the expression \(ax^2 + bx + c\) has minimum value \(-\dfrac{D}{4a}\) at \(x = -\dfrac{b}{2a}\); it is positive for all real x if a > 0 and D < 0.`,
      { ex: { q: R`Find k so that kx² + 4x + 1 = 0 has equal roots.`,
        steps: [R`D = 16 − 4k = 0.`], ans: R`k = 4` } },
      { ex: { q: R`Find the minimum value of x² − 4x + 7.`,
        steps: [R`D = 16 − 28 = −12; minimum = −D/4a = 12/4 = 3 at x = 2.`], ans: R`3` } },
      { check: { q: R`For which values of m is x² + mx + 9 > 0 for all real x?`, ans: R`D = m² − 36 < 0 ⟹ −6 < m < 6.` } }
    ] },

    { h: R`Forming a quadratic equation with given roots`, t: [9], blocks: [
      R`The quadratic equation whose roots are α and β is \[x^2 - (\alpha + \beta)x + \alpha\beta = 0.\] To find an equation whose roots are a function of the roots of a given equation (like 1/α, α², α + 1), express the new sum and product using α + β and αβ, or substitute directly (for roots 1/α, replace x by 1/x; for roots α + k, replace x by x − k).`,
      { ex: { q: R`Form the quadratic equation with roots \(2 + \sqrt3\) and \(2 - \sqrt3\).`,
        steps: [R`Sum = 4, product = 4 − 3 = 1.`], ans: R`\(x^2 - 4x + 1 = 0\)` } },
      { ex: { q: R`If α, β are the roots of x² − 3x + 1 = 0, form the equation with roots α², β².`,
        steps: [R`α + β = 3, αβ = 1. Sum α² + β² = 9 − 2 = 7; product (αβ)² = 1.`], ans: R`\(x^2 - 7x + 1 = 0\)` } },
      { adv: R`<b>Common roots:</b> \(a_1x^2 + b_1x + c_1 = 0\) and \(a_2x^2 + b_2x + c_2 = 0\) have a common root if \((c_1a_2 - c_2a_1)^2 = (b_1c_2 - b_2c_1)(a_1b_2 - a_2b_1)\); both roots are common if \(a_1/a_2 = b_1/b_2 = c_1/c_2\).` },
      { check: { q: R`Form the equation whose roots are 3 and −5.`, ans: R`x² + 2x − 15 = 0.` } }
    ] }
  ],
  summary: [
    R`i² = −1; powers of i repeat with period 4. z = a + ib; equality ⟺ real and imaginary parts equal; no ordering.`,
    R`Division: multiply by the conjugate. z z̄ = |z|²; conjugate of sum/product = sum/product of conjugates. √(a + ib) from x² − y² = a, 2xy = b.`,
    R`Argand plane: |z| distance from O, |z₁ − z₂| distance; ×i rotates 90°; |z − z₀| = r circle; |z − a| = |z − b| perpendicular bisector.`,
    R`|z₁z₂| = |z₁||z₂|; triangle inequality |z₁ + z₂| ≤ |z₁| + |z₂|. Principal argument in (−π, π]; arg(z₁z₂) = arg z₁ + arg z₂.`,
    R`Polar form z = re^{iθ}; De Moivre: (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ. Cube roots of unity 1, ω, ω²: ω³ = 1, 1 + ω + ω² = 0.`,
    R`ax² + bx + c = 0: x = (−b ± √D)/2a; α + β = −b/a, αβ = c/a; D > 0, = 0, < 0. Min of ax² + bx + c (a > 0) is −D/4a. Equation with roots α, β: x² − (α + β)x + αβ = 0.`
  ],
  refs: [
    { t: R`OpenStax Precalculus 2e, §3.1 Complex Numbers`, url: 'https://openstax.org/books/precalculus-2e/pages/3-1-complex-numbers' },
    { t: R`OpenStax Precalculus 2e, §8.5 Polar Form of Complex Numbers`, url: 'https://openstax.org/books/precalculus-2e/pages/8-5-polar-form-of-complex-numbers' },
    { t: R`OpenStax College Algebra 2e, §2.5 Quadratic Equations`, url: 'https://openstax.org/books/college-algebra-2e/pages/2-5-quadratic-equations' },
    { t: R`Wikipedia: Root of unity`, url: 'https://en.wikipedia.org/wiki/Root_of_unity' },
    { t: R`Wikipedia: Vieta's formulas`, url: 'https://en.wikipedia.org/wiki/Vieta%27s_formulas' }
  ]
});
})();
