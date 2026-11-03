// Book chapter: Binomial Theorem. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figPascal = D.svg(420, 242, (function () {
  var out = [], rows = 7, C = function (n, r) { var v = 1; for (var k = 1; k <= r; k++) v = v * (n - k + 1) / k; return v; };
  for (var n = 0; n < rows; n++) {
    out.push(D.text(20, 22 + n * 30, 'n = ' + n, { size: 10, math: false, color: 'm', anchor: 'start' }));
    for (var r = 0; r <= n; r++) {
      var x = 230 + (r - n / 2) * 44, y = 22 + n * 30;
      out.push(D.circle(x, y, 13, { color: r === 0 || r === n ? 'b' : 'o', fill: 'soft', w: 1.2 }));
      out.push(D.text(x, y + 1, String(C(n, r)), { size: 11, math: false, bold: true }));
    }
  }
  out.push(D.line(208, 22 + 5 * 30 + 13, 228, 22 + 6 * 30 - 13, { color: 'g', w: 1.8 }), D.line(252, 22 + 5 * 30 + 13, 232, 22 + 6 * 30 - 13, { color: 'g', w: 1.8 }));
  out.push(D.text(230, 232, 'each number = sum of the two above it (10 + 10 = 20)', { size: 10, math: false, color: 'g' }));
  return out;
})(), 'Pascal triangle');

var figCoeffs = D.plot({ w: 360, h: 200, x: [-0.8, 10.8], y: [0, 280], noOrigin: true, xlabel: 'r', ylabel: '¹⁰Cᵣ', mathLabels: false, xticks: [0, 2, 4, 5, 6, 8, 10].map(function (v) { return [v, String(v)]; }), yticks: [[120, '120'], [252, '252']],
  segs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (r) { var c = [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1][r]; return { x1: r, y1: 0, x2: r, y2: c, color: r === 5 ? 'r' : 'b', w: 9 }; }),
  label: 'Binomial coefficients for n = 10' });

// ---------- chapter text ----------
JEE.book('maths', 'binomial-theorem', {
  intro: [
    R`Expanding \((a + b)^2\) and \((a + b)^3\) is easy, but \((a + b)^{20}\) by repeated multiplication is not. The <b>binomial theorem</b> gives the expansion of \((a + b)^n\) directly, with coefficients that count combinations. It is used for approximations, divisibility and remainder problems, and appears throughout probability.`,
    R`This chapter covers the statement and proof, Pascal's triangle, the general and middle terms, finding particular coefficients, properties and sums of binomial coefficients, and applications.`
  ],
  sections: [
    { h: R`Statement and proof`, t: [0], blocks: [
      R`For any positive integer n: \[(a + b)^n = \sum_{r=0}^{n} {}^nC_r\,a^{n-r}b^r = {}^nC_0a^n + {}^nC_1a^{n-1}b + {}^nC_2a^{n-2}b^2 + \dots + {}^nC_nb^n.\]`,
      { points: [R`There are n + 1 terms.`, R`The power of a falls from n to 0 while the power of b rises from 0 to n; in each term the powers add to n.`, R`Coefficients equidistant from the ends are equal: \({}^nC_r = {}^nC_{n-r}\).`, R`\((a - b)^n\): the signs alternate, \(\sum (-1)^r\,{}^nC_r a^{n-r}b^r\).`, R`\((1 + x)^n = \sum_{r=0}^{n} {}^nC_r x^r\).`] },
      { derive: R`Proof by mathematical induction`, steps: [R`For n = 1: \((a + b)^1 = a + b\) ✓.`, R`Assume true for n = k. Then \((a + b)^{k+1} = (a + b)\sum_r {}^kC_r a^{k-r}b^r\).`, R`Collecting the coefficient of \(a^{k+1-r}b^r\): \({}^kC_r + {}^kC_{r-1} = {}^{k+1}C_r\) (Pascal's rule).`, R`So the formula holds for k + 1, and by induction for all positive integers n.`] },
      R`Combinatorial view: in \((a + b)(a + b)\cdots(a + b)\) (n factors), a term \(a^{n-r}b^r\) arises by choosing b from r of the n factors, which can be done in \({}^nC_r\) ways.`,
      { ex: { q: R`Expand \((2x - 3)^4\).`,
        steps: [R`\({}^4C_0(2x)^4 - {}^4C_1(2x)^3(3) + {}^4C_2(2x)^2(9) - {}^4C_3(2x)(27) + {}^4C_4(81)\).`], ans: R`\(16x^4 - 96x^3 + 216x^2 - 216x + 81\)` } },
      { check: { q: R`How many terms are in the expansion of (x + y)¹²?`, ans: R`13.` } }
    ] },

    { h: R`Pascal's triangle`, t: [0], blocks: [
      R`Writing the coefficients of \((a + b)^n\) for n = 0, 1, 2, … in rows gives <b>Pascal's triangle</b>: each row starts and ends with 1, and every inner number is the sum of the two numbers just above it, which is Pascal's rule \({}^nC_{r-1} + {}^nC_r = {}^{n+1}C_r\).`,
      { fig: figPascal, cap: R`Pascal's triangle up to n = 6; for example 10 + 10 = 20 in the last row.` },
      { check: { q: R`Write the row of Pascal's triangle for n = 4.`, ans: R`1, 4, 6, 4, 1.` } }
    ] },

    { h: R`Binomial coefficients`, t: [0], blocks: [
      R`The numbers \({}^nC_0, {}^nC_1, \dots, {}^nC_n\) (often written \(C_0, C_1, \dots, C_n\)) are the <b>binomial coefficients</b>. They increase up to the middle and then decrease symmetrically.`,
      { fig: figCoeffs, cap: R`For n = 10 the coefficients rise to the greatest value ¹⁰C₅ = 252 in the middle.` },
      R`The <b>greatest binomial coefficient</b> is \({}^nC_{n/2}\) if n is even, and \({}^nC_{(n-1)/2} = {}^nC_{(n+1)/2}\) if n is odd. Distinguish the binomial coefficient \({}^nC_r\) from the <b>numerical coefficient</b> of a term, which also includes the powers of the numbers in a and b.`,
      { check: { q: R`What is the greatest binomial coefficient in (1 + x)⁷?`, ans: R`⁷C₃ = ⁷C₄ = 35.` } }
    ] },

    { h: R`The general term`, t: [1], blocks: [
      R`The <b>(r + 1)th term</b> of \((a + b)^n\) is \[T_{r+1} = {}^nC_r\,a^{n-r}\,b^r, \qquad r = 0, 1, \dots, n.\] Most questions about a particular term start by writing \(T_{r+1}\) and simplifying the power of x.`,
      { ex: { q: R`Find the 4th term of \((x + 2y)^7\).`,
        steps: [R`r = 3: \(T_4 = {}^7C_3\,x^4(2y)^3 = 35 \times 8\,x^4y^3\).`], ans: R`\(280x^4y^3\)` } },
      { check: { q: R`Write the general term of (1 − x)ⁿ.`, ans: R`\(T_{r+1} = (-1)^r\,{}^nC_r\,x^r\).` } }
    ] },

    { h: R`Middle term(s)`, t: [1], blocks: [
      R`\((a + b)^n\) has n + 1 terms. If n is <b>even</b>, there is one middle term, \(T_{n/2 + 1}\). If n is <b>odd</b>, there are two middle terms, \(T_{(n+1)/2}\) and \(T_{(n+3)/2}\).`,
      { ex: { q: R`Find the middle term of \(\left(x + \dfrac1x\right)^{10}\).`,
        steps: [R`n = 10, middle term \(T_6\) (r = 5): \({}^{10}C_5\,x^5\,x^{-5}\).`], ans: R`252` } },
      { check: { q: R`Which terms are the middle terms of (a + b)⁹?`, ans: R`T₅ and T₆.` } }
    ] },

    { h: R`Coefficient of a given power; term independent of x`, t: [1], blocks: [
      R`Write \(T_{r+1}\), collect the power of x as a function of r, set it equal to the required power (0 for the term independent of x), and solve for r. If r is not a whole number between 0 and n, no such term exists.`,
      { ex: { q: R`Find the coefficient of \(x^3\) in \((2x + 3)^5\).`,
        steps: [R`\(T_{r+1} = {}^5C_r(2x)^{5-r}3^r\); power of x: 5 − r = 3 ⟹ r = 2.`, R`Coefficient = \({}^5C_2 \cdot 2^3 \cdot 3^2 = 10 \times 8 \times 9\).`], ans: R`720` } },
      { ex: { q: R`Find the term independent of x in \(\left(x^2 + \dfrac1x\right)^9\).`,
        steps: [R`\(T_{r+1} = {}^9C_r\,x^{2(9-r)}x^{-r} = {}^9C_r\,x^{18-3r}\).`, R`18 − 3r = 0 ⟹ r = 6: \({}^9C_6\).`], ans: R`84 (the 7th term)` } },
      { check: { q: R`Is there a term independent of x in (x + 1/x)⁵?`, ans: R`No: 5 − 2r = 0 gives r = 2.5, not an integer.` } }
    ] },

    { h: R`Sums of binomial coefficients`, t: [0], blocks: [
      R`Putting suitable values of x in \((1 + x)^n = C_0 + C_1x + C_2x^2 + \dots + C_nx^n\):`,
      { points: [R`x = 1: \(C_0 + C_1 + C_2 + \dots + C_n = 2^n\).`, R`x = −1: \(C_0 - C_1 + C_2 - \dots + (-1)^nC_n = 0\).`, R`Adding and subtracting: \(C_0 + C_2 + C_4 + \dots = C_1 + C_3 + C_5 + \dots = 2^{n-1}\).`] },
      { ex: { q: R`Find the sum of the coefficients in \((3x - 2y)^7\).`,
        steps: [R`Put x = y = 1: \((3 - 2)^7\).`], ans: R`1` } },
      { check: { q: R`Find C₀ + C₁ + … + C₁₀ for n = 10.`, ans: R`2¹⁰ = 1024.` } }
    ] },

    { h: R`Identities involving binomial coefficients`, t: [0], blocks: [
      { points: [R`\(r\,{}^nC_r = n\,{}^{n-1}C_{r-1}\), so \(\sum_{r=1}^{n} r\,C_r = n\,2^{n-1}\) (also by differentiating \((1 + x)^n\) and putting x = 1).`, R`\(\dfrac{{}^nC_r}{r+1} = \dfrac{{}^{n+1}C_{r+1}}{n+1}\), so \(\sum_{r=0}^{n} \dfrac{C_r}{r+1} = \dfrac{2^{n+1} - 1}{n+1}\) (also by integrating from 0 to 1).`, R`<b>Vandermonde:</b> \(\sum_{r=0}^{n} C_r^2 = {}^{2n}C_n\) (coefficient of xⁿ in \((1 + x)^n(1 + x)^n\)).`, R`\(\sum_r {}^mC_r\,{}^nC_{k-r} = {}^{m+n}C_k\).`] },
      { ex: { q: R`Evaluate \(C_0^2 + C_1^2 + \dots + C_5^2\) for n = 5.`,
        steps: [R`= ¹⁰C₅.`], ans: R`252` } },
      { adv: R`The <b>greatest term</b> (numerically) in \((1 + x)^n\) for x > 0: compute \(\dfrac{T_{r+1}}{T_r} = \dfrac{n - r + 1}{r}\,x\); the terms increase while this ratio exceeds 1.` },
      { check: { q: R`Find Σ r·¹⁰Cᵣ (r = 1 to 10).`, ans: R`10 × 2⁹ = 5120.` } }
    ] },

    { h: R`Applications: approximations, divisibility and remainders`, t: [2], blocks: [
      { h3: R`Approximations` },
      R`For small x, \((1 + x)^n \approx 1 + nx + \frac{n(n-1)}{2}x^2\). Example: \((1.01)^{10} = 1 + 10(0.01) + 45(0.0001) + 120(0.000001) + \dots \approx 1.1046\).`,
      { ex: { q: R`Evaluate 99⁵ using the binomial theorem.`,
        steps: [R`\((100 - 1)^5 = 100^5 - 5\cdot100^4 + 10\cdot100^3 - 10\cdot100^2 + 5\cdot100 - 1\).`, R`= 10 000 000 000 − 500 000 000 + 10 000 000 − 100 000 + 500 − 1.`], ans: R`9 509 900 499` } },
      { h3: R`Divisibility and remainders` },
      R`Write the base as (multiple of the divisor) ± small number, then expand: all terms except the last few are divisible.`,
      { ex: { q: R`Find the remainder when \(2^{100}\) is divided by 7.`,
        steps: [R`\(2^{100} = 2 \cdot (2^3)^{33} = 2(7 + 1)^{33}\).`, R`\((7 + 1)^{33} = 7k + 1\), so \(2^{100} = 14k + 2\).`], ans: R`2` } },
      { ex: { q: R`Show that \(6^n - 5n - 1\) is divisible by 25 for all natural n.`,
        steps: [R`\(6^n = (1 + 5)^n = 1 + 5n + {}^nC_2\,5^2 + {}^nC_3\,5^3 + \dots\)`, R`So \(6^n - 5n - 1 = 25({}^nC_2 + {}^nC_3\cdot5 + \dots)\).`], ans: R`divisible by 25` } },
      { adv: R`<b>Binomial theorem for any index:</b> for |x| < 1 and any real n, \((1 + x)^n = 1 + nx + \dfrac{n(n-1)}{2!}x^2 + \dfrac{n(n-1)(n-2)}{3!}x^3 + \dots\) (an infinite series). For example \(\sqrt{1.02} \approx 1 + \frac12(0.02) - \frac18(0.02)^2 = 1.00995\).` },
      { check: { q: R`Which is larger: 1.01¹⁰⁰⁰⁰⁰⁰ or 10 000?`, ans: R`1.01¹⁰⁰⁰⁰⁰⁰ > 1 + 10⁶ × 0.01 = 10 001 > 10 000.` } }
    ] }
  ],
  summary: [
    R`(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ: n + 1 terms; coefficients symmetric; proof by induction using Pascal's rule.`,
    R`General term Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ; middle term T_{n/2+1} (n even), T_{(n+1)/2} and T_{(n+3)/2} (n odd).`,
    R`Coefficient of xᵏ / term independent of x: write Tᵣ₊₁, equate the power of x, solve for integer r.`,
    R`ΣCᵣ = 2ⁿ; alternating sum 0; even = odd = 2ⁿ⁻¹; Σ rCᵣ = n2ⁿ⁻¹; ΣCᵣ² = ²ⁿCₙ.`,
    R`Approximations (1 + x)ⁿ ≈ 1 + nx; remainders by writing the base as (multiple ± 1).`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §9.6 Binomial Theorem`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-6-binomial-theorem' },
    { t: R`Wikipedia: Binomial theorem`, url: 'https://en.wikipedia.org/wiki/Binomial_theorem' },
    { t: R`Wikipedia: Pascal's triangle`, url: 'https://en.wikipedia.org/wiki/Pascal%27s_triangle' },
    { t: R`Wikipedia: Vandermonde's identity`, url: 'https://en.wikipedia.org/wiki/Vandermonde%27s_identity' }
  ]
});
})();
