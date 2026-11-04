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

var figArea = D.svg(300, 230, [
  D.rect(70, 30, 120, 120, { color: 'b', fill: 'soft', w: 1.4 }), D.rect(190, 30, 70, 120, { color: 'o', fill: 'soft', w: 1.4 }),
  D.rect(70, 150, 120, 70, { color: 'o', fill: 'soft', w: 1.4 }), D.rect(190, 150, 70, 70, { color: 'g', fill: 'soft', w: 1.4 }),
  D.text(130, 90, 'a²', { size: 16, bold: true }), D.text(225, 90, 'ab', { size: 15 }), D.text(130, 185, 'ab', { size: 15 }), D.text(225, 185, 'b²', { size: 16, bold: true }),
  D.text(130, 18, 'a', { size: 13, color: 'm' }), D.text(225, 18, 'b', { size: 13, color: 'm' }), D.text(56, 90, 'a', { size: 13, color: 'm' }), D.text(56, 185, 'b', { size: 13, color: 'm' })
], 'A square of side a plus b split into a squared, two ab rectangles and b squared');

var figHockey = D.svg(460, 230, (function () {
  var out = [], C = function (n, r) { var v = 1; for (var k = 1; k <= r; k++) v = v * (n - k + 1) / k; return v; };
  for (var n = 0; n <= 6; n++) {
    var y = 20 + n * 30;
    for (var r = 0; r <= n; r++) {
      var x = 210 + (r - n / 2) * 42, hot = (r === 2 && n >= 2 && n <= 5), sum = (n === 6 && r === 3);
      out.push(D.circle(x, y, 13, { color: sum ? 'r' : hot ? 'g' : 'm', fill: 'soft', w: hot || sum ? 1.8 : 1 }));
      out.push(D.text(x, y + 1, String(C(n, r)), { size: 11, bold: hot || sum }));
    }
    out.push(D.text(430, y, 'sum ' + Math.pow(2, n), { size: 10, color: 'b' }));
  }
  out.push(D.text(60, 140, '1 + 3 + 6 + 10', { size: 11, color: 'g', bold: true }), D.text(60, 156, '= 20', { size: 11, color: 'r', bold: true }));
  return out;
})(), 'Pascal triangle showing the hockey-stick pattern and the row sums');

var figPow = D.plot({ w: 340, h: 220, x: [-0.6, 9.8], y: [-11, 20], noOrigin: true, xlabel: 'r', mathLabels: false,
  xticks: [0, 3, 6, 9].map(function (v) { return [v, String(v)]; }), yticks: [[18, '18'], [9, '9'], [-9, '−9']],
  fns: [{ f: function (r) { return 18 - 3 * r; }, from: 0, to: 9, color: 'm', w: 1.2, dash: '4 3' }],
  pts: [0, 1, 2, 3, 4, 5, 7, 8, 9].map(function (r) { return { x: r, y: 18 - 3 * r, color: 'b' }; }).concat([{ x: 6, y: 0, color: 'r', label: 'r = 6: no x', pos: 'ne', math: false, lcolor: 'r' }]),
  texts: [{ x: 0.4, y: -6, s: 'power of x in Tᵣ₊₁ = 18 − 3r', color: 'b', size: 11, anchor: 'start' }],
  label: 'Power of x in each term of (x squared plus 1 over x) to the 9' });

var figApprox = D.plot({ w: 340, h: 230, x: [0, 0.32], y: [0, 14], xlabel: 'x', mathLabels: false,
  xticks: [[0.1, '0.1'], [0.2, '0.2'], [0.3, '0.3']], yticks: [[1, '1'], [5, '5'], [10, '10']],
  fns: [{ f: function (x) { return Math.pow(1 + x, 10); }, color: 'b', label: '(1 + x)¹⁰', lx: 0.205, ly: 11.5, math: false },
    { f: function (x) { return 1 + 10 * x + 45 * x * x; }, color: 'o', label: '1 + 10x + 45x²', lx: 0.232, ly: 4.9, math: false },
    { f: function (x) { return 1 + 10 * x; }, color: 'g', label: '1 + 10x', lx: 0.25, ly: 2.6, math: false }],
  label: 'Binomial approximations of (1 + x) to the 10' });

// ---------- chapter text ----------
JEE.book('maths', 'binomial-theorem', {
  intro: [
    R`Expanding \((a + b)^2\) and \((a + b)^3\) is easy, but \((a + b)^{20}\) by repeated multiplication is not. The <b>binomial theorem</b> gives the expansion of \((a + b)^n\) directly, with coefficients that count combinations. It is used for approximations, divisibility and remainder problems, and appears throughout probability.`,
    R`This chapter covers the statement and proof, Pascal's triangle, the general and middle terms, finding particular coefficients, properties and sums of binomial coefficients, and applications.`
  ],
  sections: [
    { h: R`Statement and proof`, t: [0], blocks: [
      R`Start small. Multiplying out gives \((a + b)^2 = a^2 + 2ab + b^2\) and \((a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\). Look at the pattern: the power of a goes down by one in each term, the power of b goes up by one, and the coefficients (1, 2, 1 and 1, 3, 3, 1) count the number of ways each term can be formed. The binomial theorem says that this pattern continues for every positive integer power.`,
      { fig: figArea, cap: R`Why \((a + b)^2 = a^2 + 2ab + b^2\): a square of side a + b splits into one a × a square, one b × b square and <b>two</b> a × b rectangles. The 2 is the number of ways to pick one a and one b.` },
      R`For any positive integer n: \[(a + b)^n = \sum_{r=0}^{n} {}^nC_r\,a^{n-r}b^r = {}^nC_0a^n + {}^nC_1a^{n-1}b + {}^nC_2a^{n-2}b^2 + \dots + {}^nC_nb^n.\]`,
      { points: [R`There are n + 1 terms.`, R`The power of a falls from n to 0 while the power of b rises from 0 to n; in each term the powers add to n.`, R`Coefficients equidistant from the ends are equal: \({}^nC_r = {}^nC_{n-r}\).`, R`\((a - b)^n\): the signs alternate, \(\sum (-1)^r\,{}^nC_r a^{n-r}b^r\).`, R`\((1 + x)^n = \sum_{r=0}^{n} {}^nC_r x^r\).`] },
      { derive: R`Proof by mathematical induction`, steps: [R`For n = 1: \((a + b)^1 = a + b\) ✓.`, R`Assume true for n = k. Then \((a + b)^{k+1} = (a + b)\sum_r {}^kC_r a^{k-r}b^r\).`, R`Collecting the coefficient of \(a^{k+1-r}b^r\): \({}^kC_r + {}^kC_{r-1} = {}^{k+1}C_r\) (Pascal's rule).`, R`So the formula holds for k + 1, and by induction for all positive integers n.`] },
      R`Combinatorial view: in \((a + b)(a + b)\cdots(a + b)\) (n factors), a term \(a^{n-r}b^r\) arises by choosing b from r of the n factors, which can be done in \({}^nC_r\) ways.`,
      { ex: { q: R`Expand \((2x - 3)^4\).`,
        steps: [R`\({}^4C_0(2x)^4 - {}^4C_1(2x)^3(3) + {}^4C_2(2x)^2(9) - {}^4C_3(2x)(27) + {}^4C_4(81)\).`], ans: R`\(16x^4 - 96x^3 + 216x^2 - 216x + 81\)` } },
      { mistake: R`Writing \((2x)^4\) as \(2x^4\). The whole of each part of the binomial is raised to the power: \((2x)^4 = 16x^4\), and \((-3)^3 = -27\) keeps its sign.` },
      { ex: { q: R`Expand \(\left(x + \dfrac1x\right)^4\).`,
        steps: [R`Coefficients from the n = 4 row: 1, 4, 6, 4, 1.`, R`\(x^4 + 4x^3\cdot\frac1x + 6x^2\cdot\frac1{x^2} + 4x\cdot\frac1{x^3} + \frac1{x^4}\).`], ans: R`\(x^4 + 4x^2 + 6 + \dfrac{4}{x^2} + \dfrac{1}{x^4}\)` } },
      { tip: R`\((a + b)^n + (a - b)^n = 2[{}^nC_0a^n + {}^nC_2a^{n-2}b^2 + \dots]\) keeps only the terms with <b>even</b> powers of b, and \((a + b)^n - (a - b)^n\) keeps only the <b>odd</b> powers of b. Surds often cancel this way.` },
      { ex: { q: R`Evaluate \((\sqrt2 + 1)^5 + (\sqrt2 - 1)^5\).`,
        steps: [R`Only the even powers of 1 survive: \(2[{}^5C_0(\sqrt2)^5 + {}^5C_2(\sqrt2)^3 + {}^5C_4\sqrt2]\).`, R`\((\sqrt2)^5 = 4\sqrt2\) and \((\sqrt2)^3 = 2\sqrt2\): \(2[4\sqrt2 + 10\cdot2\sqrt2 + 5\sqrt2] = 2 \times 29\sqrt2\).`], ans: R`\(58\sqrt2\)` } },
      { check: { q: R`How many terms are in the expansion of (x + y)¹²?`, ans: R`13.` } }
    ] },

    { h: R`Pascal's triangle`, t: [0], blocks: [
      R`Writing the coefficients of \((a + b)^n\) for n = 0, 1, 2, … in rows gives <b>Pascal's triangle</b>: each row starts and ends with 1, and every inner number is the sum of the two numbers just above it, which is Pascal's rule \({}^nC_{r-1} + {}^nC_r = {}^{n+1}C_r\).`,
      { fig: figPascal, cap: R`Pascal's triangle up to n = 6; for example 10 + 10 = 20 in the last row.` },
      { derive: R`Proof of Pascal's rule`, steps: [R`\({}^nC_{r-1} + {}^nC_r = \dfrac{n!}{(r-1)!\,(n-r+1)!} + \dfrac{n!}{r!\,(n-r)!}\).`, R`Take the common denominator \(r!\,(n-r+1)!\): the numerator is \(n!\,[r + (n - r + 1)] = n!\,(n + 1) = (n + 1)!\).`, R`So the sum is \(\dfrac{(n+1)!}{r!\,(n+1-r)!} = {}^{n+1}C_r\).`, R`In words: to choose r things from n + 1, either the last thing is chosen (\({}^nC_{r-1}\) ways) or it is not (\({}^nC_r\) ways).`] },
      { analogy: R`Imagine walking down a grid of streets from the top of the triangle, always going down-left or down-right. The number in each place is the number of different routes that reach it: every route arrives from one of the two places just above, so you add their counts. Reaching place r of row n needs r right-steps out of n, which is \({}^nC_r\) routes.` },
      { h3: R`Patterns hidden in the triangle` },
      { points: [R`Each row reads the same forwards and backwards (\({}^nC_r = {}^nC_{n-r}\)).`, R`The numbers in row n add up to \(2^n\).`, R`<b>Hockey-stick rule:</b> going down a diagonal and adding, \({}^rC_r + {}^{r+1}C_r + \dots + {}^nC_r = {}^{n+1}C_{r+1}\); the total sits just below and to the side of the last number.`, R`The first rows read as powers of 11: 1, 11, 121, 1331, 14641.`] },
      { fig: figHockey, cap: R`Green: going down a diagonal, 1 + 3 + 6 + 10 = 20 (red), so \({}^2C_2 + {}^3C_2 + {}^4C_2 + {}^5C_2 = {}^6C_3\). Blue: the row sums are 1, 2, 4, 8, … = \(2^n\).` },
      { ex: { q: R`Use Pascal's triangle to expand \((1 + x)^6\).`,
        steps: [R`Row 6 is 1, 6, 15, 20, 15, 6, 1 (each number is the sum of the two above it in row 5: 1, 5, 10, 10, 5, 1).`], ans: R`\(1 + 6x + 15x^2 + 20x^3 + 15x^4 + 6x^5 + x^6\)` } },
      { ex: { q: R`Find \({}^3C_3 + {}^4C_3 + {}^5C_3 + {}^6C_3 + {}^7C_3\).`,
        steps: [R`By the hockey-stick rule the sum is \({}^8C_4\).`, R`Check: 1 + 4 + 10 + 20 + 35 = 70.`], ans: R`70` } },
      { check: { q: R`Write the row of Pascal's triangle for n = 4.`, ans: R`1, 4, 6, 4, 1.` } }
    ] },

    { h: R`Binomial coefficients`, t: [0], blocks: [
      R`The numbers \({}^nC_0, {}^nC_1, \dots, {}^nC_n\) (often written \(C_0, C_1, \dots, C_n\)) are the <b>binomial coefficients</b>. They increase up to the middle and then decrease symmetrically.`,
      { fig: figCoeffs, cap: R`For n = 10 the coefficients rise to the greatest value ¹⁰C₅ = 252 in the middle.` },
      R`The <b>greatest binomial coefficient</b> is \({}^nC_{n/2}\) if n is even, and \({}^nC_{(n-1)/2} = {}^nC_{(n+1)/2}\) if n is odd. Distinguish the binomial coefficient \({}^nC_r\) from the <b>numerical coefficient</b> of a term, which also includes the powers of the numbers in a and b.`,
      { ex: { q: R`In \((2x + 3)^5\), find the binomial coefficient and the numerical coefficient of the term in \(x^3\).`,
        steps: [R`The term is \({}^5C_2(2x)^3(3)^2\), so the binomial coefficient is \({}^5C_2 = 10\).`, R`The numerical coefficient is \(10 \times 8 \times 9 = 720\).`], ans: R`10 and 720` } },
      R`<b>Why they rise and then fall.</b> The ratio of neighbours is \[\frac{{}^nC_r}{{}^nC_{r-1}} = \frac{n - r + 1}{r}.\] This is more than 1 while r < (n + 1)/2, so the coefficients grow up to the middle and then shrink. The same ratio is the key to many "coefficients in AP or GP" questions.`,
      { ex: { q: R`The coefficients of the 2nd, 3rd and 4th terms of \((1 + x)^n\) are in arithmetic progression. Find n.`,
        steps: [R`The coefficients are \({}^nC_1, {}^nC_2, {}^nC_3\). AP means \(2\,{}^nC_2 = {}^nC_1 + {}^nC_3\).`, R`\(n(n - 1) = n + \dfrac{n(n-1)(n-2)}{6}\). Divide by n and multiply by 6: \(6n - 6 = 6 + n^2 - 3n + 2\).`, R`\(n^2 - 9n + 14 = 0\), so n = 2 or 7. n = 2 gives only 3 terms, so it is rejected.`], ans: R`n = 7 (coefficients 7, 21, 35)` } },
      { check: { q: R`What is the greatest binomial coefficient in (1 + x)⁷?`, ans: R`⁷C₃ = ⁷C₄ = 35.` } }
    ] },

    { h: R`The general term`, t: [1], blocks: [
      R`The <b>(r + 1)th term</b> of \((a + b)^n\) is \[T_{r+1} = {}^nC_r\,a^{n-r}\,b^r, \qquad r = 0, 1, \dots, n.\] Most questions about a particular term start by writing \(T_{r+1}\) and simplifying the power of x.`,
      R`Think of the general term as a template for every term at once. Once it is written down, any question about "the term containing \(x^5\)", "the 7th term", "the term free of x" or "the rational terms" becomes a question about which value of r fits. Simplify the powers of each letter first, collecting them into a single power of x that depends on r, and only then substitute.`,
      { ex: { q: R`Find the 4th term of \((x + 2y)^7\).`,
        steps: [R`r = 3: \(T_4 = {}^7C_3\,x^4(2y)^3 = 35 \times 8\,x^4y^3\).`], ans: R`\(280x^4y^3\)` } },
      { mistake: R`Using r for the rth term. The formula \({}^nC_r a^{n-r}b^r\) gives the <b>(r + 1)th</b> term, so the 4th term needs r = 3.` },
      R`<b>Counting from the end.</b> The rth term from the end of \((a + b)^n\) is the \((n - r + 2)\)th term from the beginning. Equivalently, it is the rth term from the beginning of \((b + a)^n\).`,
      { ex: { q: R`Find the 5th term from the end of \(\left(x - \dfrac{2}{x^2}\right)^9\).`,
        steps: [R`There are 10 terms, so the 5th from the end is the (9 − 5 + 2) = 6th from the start: r = 5.`, R`\(T_6 = {}^9C_5\,x^4\left(-\dfrac{2}{x^2}\right)^5 = 126 \times (-32)\,x^{4-10}\).`], ans: R`\(-\dfrac{4032}{x^6}\)` } },
      { ex: { q: R`Find the ratio of the 5th term to the 4th term of \((1 + 2x)^{8}\).`,
        steps: [R`\(\dfrac{T_{r+1}}{T_r} = \dfrac{n - r + 1}{r}\cdot\dfrac{b}{a}\) with r = 4: \(\dfrac{5}{4}\cdot 2x\).`], ans: R`\(\dfrac{5x}{2}\)` } },
      { check: { q: R`Which term of \((x + 2)^{10}\) contains \(x^7\)?`, ans: R`The power of x is 10 − r = 7, so r = 3: the 4th term, \({}^{10}C_3\,2^3x^7 = 960x^7\).` } },
      { check: { q: R`Write the general term of (1 − x)ⁿ.`, ans: R`\(T_{r+1} = (-1)^r\,{}^nC_r\,x^r\).` } }
    ] },

    { h: R`Middle term(s)`, t: [1], blocks: [
      R`\((a + b)^n\) has n + 1 terms. If n is <b>even</b>, there is one middle term, \(T_{n/2 + 1}\). If n is <b>odd</b>, there are two middle terms, \(T_{(n+1)/2}\) and \(T_{(n+3)/2}\).`,
      { ex: { q: R`Find the middle term of \(\left(x + \dfrac1x\right)^{10}\).`,
        steps: [R`n = 10, middle term \(T_6\) (r = 5): \({}^{10}C_5\,x^5\,x^{-5}\).`], ans: R`252` } },
      { ex: { q: R`Find the middle terms of \(\left(2x - \dfrac{x^2}{4}\right)^9\).`,
        steps: [R`n = 9 is odd: the middle terms are \(T_5\) (r = 4) and \(T_6\) (r = 5).`, R`\(T_5 = {}^9C_4(2x)^5\left(\dfrac{x^2}{4}\right)^4 = 126\cdot\dfrac{32}{256}x^{13} = \dfrac{63}{4}x^{13}\).`, R`\(T_6 = -{}^9C_5(2x)^4\left(\dfrac{x^2}{4}\right)^5 = -126\cdot\dfrac{16}{1024}x^{14} = -\dfrac{63}{32}x^{14}\).`], ans: R`\(\dfrac{63}{4}x^{13}\) and \(-\dfrac{63}{32}x^{14}\)` } },
      { mistake: R`Taking the "middle term" of \((a + b)^9\) to be \(T_5\) alone. With 10 terms there is no single middle, so both \(T_5\) and \(T_6\) are middle terms.` },
      { note: R`The middle term always carries the <b>greatest binomial coefficient</b>, but it need not be the numerically greatest term, because the powers of the numbers in a and b also matter.`, title: 'Middle term and greatest coefficient' },
      { adv: R`<b>A classic result.</b> The middle term of \((1 + x)^{2n}\) is \({}^{2n}C_n x^n = \dfrac{1\cdot3\cdot5\cdots(2n - 1)}{n!}\,2^n x^n\). Proof: split \((2n)!\) into its odd factors and its even factors, \(2\cdot4\cdots2n = 2^n\,n!\), and cancel one n!. For n = 3: \(\frac{1\cdot3\cdot5}{6}\cdot 8 = 20 = {}^6C_3\).` },
      { check: { q: R`Which terms are the middle terms of (a + b)⁹?`, ans: R`T₅ and T₆.` } }
    ] },

    { h: R`Coefficient of a given power; term independent of x`, t: [1], blocks: [
      R`Write \(T_{r+1}\), collect the power of x as a function of r, set it equal to the required power (0 for the term independent of x), and solve for r. If r is not a whole number between 0 and n, no such term exists.`,
      { ex: { q: R`Find the coefficient of \(x^3\) in \((2x + 3)^5\).`,
        steps: [R`\(T_{r+1} = {}^5C_r(2x)^{5-r}3^r\); power of x: 5 − r = 3 ⟹ r = 2.`, R`Coefficient = \({}^5C_2 \cdot 2^3 \cdot 3^2 = 10 \times 8 \times 9\).`], ans: R`720` } },
      { ex: { q: R`Find the term independent of x in \(\left(x^2 + \dfrac1x\right)^9\).`,
        steps: [R`\(T_{r+1} = {}^9C_r\,x^{2(9-r)}x^{-r} = {}^9C_r\,x^{18-3r}\).`, R`18 − 3r = 0 ⟹ r = 6: \({}^9C_6\).`], ans: R`84 (the 7th term)` } },
      { tip: R`For \(\left(x^p + \dfrac{1}{x^q}\right)^n\) the power of x in \(T_{r+1}\) is \(p(n - r) - qr\). Set it equal to what you want and solve for r.` },
      { fig: figPow, cap: R`For \(\left(x^2 + \frac1x\right)^9\) the power of x drops by 3 from each term to the next: 18, 15, 12, …, −9. It is zero only at r = 6, which gives the term independent of x.` },
      { ex: { q: R`Find the coefficient of \(x^7\) in \(\left(ax^2 + \dfrac{1}{bx}\right)^{11}\).`,
        steps: [R`\(T_{r+1} = {}^{11}C_r\,a^{11-r}x^{22-2r}\,b^{-r}x^{-r}\); power of x: 22 − 3r = 7 ⟹ r = 5.`, R`Coefficient = \({}^{11}C_5\,a^6b^{-5}\).`], ans: R`\(\dfrac{462\,a^6}{b^5}\)` } },
      { ex: { q: R`Find the coefficient of \(x^2\) in \((1 + x)^5(1 - x)^4\).`,
        steps: [R`Pair up the factors: \((1 + x)^5(1 - x)^4 = (1 + x)(1 - x^2)^4\).`, R`\((1 - x^2)^4 = 1 - 4x^2 + 6x^4 - \dots\). Multiplying by (1 + x), the only \(x^2\) term is \(1 \times (-4x^2)\).`], ans: R`−4` } },
      { ex: { q: R`How many rational terms are there in the expansion of \((\sqrt2 + \sqrt[3]{3})^{12}\)?`,
        steps: [R`\(T_{r+1} = {}^{12}C_r\,2^{(12-r)/2}\,3^{r/3}\). It is rational when (12 − r)/2 and r/3 are both whole numbers.`, R`So r must be even and a multiple of 3: r = 0, 6 or 12.`], ans: R`3 rational terms (T₁, T₇ and T₁₃)` } },
      { mistake: R`Multiplying out two long expansions term by term. First look for a way to combine the factors, as above, or pick only the pairs of terms whose powers add up to the one you need.` },
      { check: { q: R`Is there a term independent of x in (x + 1/x)⁵?`, ans: R`No: 5 − 2r = 0 gives r = 2.5, not an integer.` } }
    ] },

    { h: R`Sums of binomial coefficients`, t: [0], blocks: [
      
      R`The identity \((1 + x)^n = C_0 + C_1x + \dots + C_nx^n\) is true for <b>every</b> value of x, so we are free to choose x to make the right-hand side into the sum we want. Choosing x = 1 makes every power equal to 1, which leaves the plain sum of the coefficients; choosing x = −1 makes the signs alternate.`,
      { points: [R`x = 1: \(C_0 + C_1 + C_2 + \dots + C_n = 2^n\).`, R`x = −1: \(C_0 - C_1 + C_2 - \dots + (-1)^nC_n = 0\).`, R`Adding and subtracting: \(C_0 + C_2 + C_4 + \dots = C_1 + C_3 + C_5 + \dots = 2^{n-1}\).`] },
      { ex: { q: R`Find the sum of the coefficients in \((3x - 2y)^7\).`,
        steps: [R`Put x = y = 1: \((3 - 2)^7\).`], ans: R`1` } },
      R`<b>Any polynomial.</b> If \(f(x) = a_0 + a_1x + a_2x^2 + \dots\), the sum of all its coefficients is f(1); the sum of the coefficients of the even powers is \(\frac{f(1) + f(-1)}{2}\), and of the odd powers \(\frac{f(1) - f(-1)}{2}\).`,
      { ex: { q: R`For \((1 + x - 2x^2)^6\), find the sum of all the coefficients and the sum of the coefficients of the even powers of x.`,
        steps: [R`f(1) = (1 + 1 − 2)⁶ = 0; f(−1) = (1 − 1 − 2)⁶ = 64.`, R`Even powers: (0 + 64)/2.`], ans: R`0 and 32` } },
      { ex: { q: R`Show that \(C_0 + 2C_1 + 3C_2 + \dots + (n + 1)C_n = (n + 2)\,2^{n-1}\).`,
        steps: [R`Split \((r + 1)C_r = rC_r + C_r\).`, R`\(\sum rC_r = n2^{n-1}\) and \(\sum C_r = 2^n\), so the total is \(n2^{n-1} + 2\cdot2^{n-1}\).`, R`Check for n = 3: 1 + 6 + 9 + 4 = 20 = 5 × 4.`], ans: R`\((n + 2)\,2^{n-1}\)` } },
      { check: { q: R`Find C₀ + C₁ + … + C₁₀ for n = 10.`, ans: R`2¹⁰ = 1024.` } }
    ] },

    { h: R`Identities involving binomial coefficients`, t: [0], blocks: [
      { points: [R`\(r\,{}^nC_r = n\,{}^{n-1}C_{r-1}\), so \(\sum_{r=1}^{n} r\,C_r = n\,2^{n-1}\) (also by differentiating \((1 + x)^n\) and putting x = 1).`, R`\(\dfrac{{}^nC_r}{r+1} = \dfrac{{}^{n+1}C_{r+1}}{n+1}\), so \(\sum_{r=0}^{n} \dfrac{C_r}{r+1} = \dfrac{2^{n+1} - 1}{n+1}\) (also by integrating from 0 to 1).`, R`<b>Vandermonde:</b> \(\sum_{r=0}^{n} C_r^2 = {}^{2n}C_n\) (coefficient of xⁿ in \((1 + x)^n(1 + x)^n\)).`, R`\(\sum_r {}^mC_r\,{}^nC_{k-r} = {}^{m+n}C_k\).`] },
      { derive: R`Sums by calculus`, steps: [R`Differentiate \((1 + x)^n = \sum C_rx^r\): \(n(1 + x)^{n-1} = \sum rC_rx^{r-1}\). Put x = 1: \(\sum rC_r = n2^{n-1}\).`, R`Integrate from 0 to 1: \(\dfrac{(1 + x)^{n+1}}{n + 1}\Big|_0^1 = \sum \dfrac{C_r}{r + 1}\), so \(\sum\dfrac{C_r}{r + 1} = \dfrac{2^{n+1} - 1}{n + 1}\).`, R`Compare coefficients of \(x^n\) on both sides of \((1 + x)^n(x + 1)^n = (1 + x)^{2n}\): the left side gives \(C_0C_n + C_1C_{n-1} + \dots = \sum C_r^2\), so \(\sum C_r^2 = {}^{2n}C_n\).`] },
      { ex: { q: R`Evaluate \(C_0^2 + C_1^2 + \dots + C_5^2\) for n = 5.`,
        steps: [R`= ¹⁰C₅.`], ans: R`252` } },
      { ex: { q: R`Find \(C_0C_1 + C_1C_2 + \dots + C_{n-1}C_n\).`,
        steps: [R`In \((1 + x)^n(x + 1)^n\), pair \(C_r\) from the first factor with the coefficient of \(x^{n-1-r}\) in the second, which is \(C_{r+1}\) (taking the second factor as \(\sum C_kx^{n-k}\)).`, R`So the sum is the coefficient of \(x^{n-1}\) in \((1 + x)^{2n}\). Check n = 3: 3 + 9 + 3 = 15 = ⁶C₂.`], ans: R`\({}^{2n}C_{n-1}\)` } },
      { ex: { q: R`Evaluate \(C_0 + \dfrac{C_1}{2} + \dfrac{C_2}{3} + \dfrac{C_3}{4} + \dfrac{C_4}{5}\) for n = 4.`,
        steps: [R`By the integration result: \(\dfrac{2^5 - 1}{5}\).`, R`Check: 1 + 2 + 2 + 1 + 0.2 = 6.2.`], ans: R`31/5` } },
      { adv: R`The <b>greatest term</b> (numerically) in \((1 + x)^n\) for x > 0: compute \(\dfrac{T_{r+1}}{T_r} = \dfrac{n - r + 1}{r}\,x\); the terms increase while this ratio exceeds 1.` },
      { ex: { q: R`Find the numerically greatest term in the expansion of \((3 + 2x)^9\) when x = 1.`,
        steps: [R`\(\dfrac{T_{r+1}}{T_r} = \dfrac{10 - r}{r}\cdot\dfrac{2}{3} \ge 1\) ⟺ 20 − 2r ≥ 3r ⟺ r ≤ 4.`, R`At r = 4 the ratio is exactly 1, so \(T_5 = T_4\). Both equal \({}^9C_3\,3^6\,2^3 = 84 \times 729 \times 8\).`], ans: R`\(T_4 = T_5 = 489\,888\)` } },
      { check: { q: R`Find Σ r·¹⁰Cᵣ (r = 1 to 10).`, ans: R`10 × 2⁹ = 5120.` } }
    ] },

    { h: R`Applications: approximations, divisibility and remainders`, t: [2], blocks: [
      R`The binomial theorem is a workhorse well beyond algebra. Because the terms of \((1 + x)^n\) get smaller and smaller when x is small, the first few terms give excellent approximations, which is how many physics formulas are simplified. And because every term except the last contains a chosen number as a factor, the expansion answers "what is the remainder?" questions about huge powers without a calculator.`,
      { h3: R`Approximations` },
      R`For small x, \((1 + x)^n \approx 1 + nx + \frac{n(n-1)}{2}x^2\). Example: \((1.01)^{10} = 1 + 10(0.01) + 45(0.0001) + 120(0.000001) + \dots \approx 1.1046\).`,
      { fig: figApprox, cap: R`For small x the first two or three terms are already very close to \((1 + x)^{10}\). For larger x the neglected terms grow, and the straight line 1 + 10x falls far below the curve.` },
      { mistake: R`Using \((1 + x)^n \approx 1 + nx\) when nx is not small. For \((1.3)^{10}\) the true value is about 13.8, but 1 + 10(0.3) = 4.` },
      { ex: { q: R`Evaluate 99⁵ using the binomial theorem.`,
        steps: [R`\((100 - 1)^5 = 100^5 - 5\cdot100^4 + 10\cdot100^3 - 10\cdot100^2 + 5\cdot100 - 1\).`, R`= 10 000 000 000 − 500 000 000 + 10 000 000 − 100 000 + 500 − 1.`], ans: R`9 509 900 499` } },
      { h3: R`Divisibility and remainders` },
      R`Write the base as (multiple of the divisor) ± small number, then expand: all terms except the last few are divisible.`,
      { ex: { q: R`Find the remainder when \(2^{100}\) is divided by 7.`,
        steps: [R`\(2^{100} = 2 \cdot (2^3)^{33} = 2(7 + 1)^{33}\).`, R`\((7 + 1)^{33} = 7k + 1\), so \(2^{100} = 14k + 2\).`], ans: R`2` } },
      { ex: { q: R`Show that \(6^n - 5n - 1\) is divisible by 25 for all natural n.`,
        steps: [R`\(6^n = (1 + 5)^n = 1 + 5n + {}^nC_2\,5^2 + {}^nC_3\,5^3 + \dots\)`, R`So \(6^n - 5n - 1 = 25({}^nC_2 + {}^nC_3\cdot5 + \dots)\).`], ans: R`divisible by 25` } },
      { ex: { q: R`Find the remainder when \(7^{103}\) is divided by 25.`,
        steps: [R`\(7^2 = 49 = 50 - 1\), so \(7^{103} = 7\cdot(50 - 1)^{51}\).`, R`\((50 - 1)^{51} = 50k - 1\) (every term but the last contains 50), so \(7^{103} = 350k - 7\).`, R`−7 ≡ 18 (mod 25).`], ans: R`18` } },
      { ex: { q: R`Find the last two digits of \(3^{40}\).`,
        steps: [R`\(3^{40} = 9^{20} = (10 - 1)^{20} = 1 - 20\cdot10 + {}^{20}C_2\cdot100 - \dots\)`, R`Every term after the second is a multiple of 100, and −200 is too. So \(3^{40} \equiv 1\) (mod 100).`], ans: R`01` } },
      { tip: R`For a remainder, aim for a base that is (multiple of the divisor) ± 1. Then all but the last term of the expansion vanish, and the last term is just ±1.` },
      { ex: { q: R`Find \((0.99)^5\) correct to three decimal places.`,
        steps: [R`\((1 - 0.01)^5 = 1 - 5(0.01) + 10(0.0001) - 10(0.000001) + \dots\)`, R`= 1 − 0.05 + 0.001 − 0.00001 ≈ 0.95099.`], ans: R`0.951` } },
      { h3: R`The binomial theorem for any index` },
      { adv: [R`For any real n (negative or a fraction) and |x| < 1, \[(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \dots\] This is an <b>infinite</b> series: the coefficients never become zero, because n − r never reaches 0. The condition |x| < 1 is needed for the series to add up to a finite value.`,
        R`Useful special cases: \((1 - x)^{-1} = 1 + x + x^2 + x^3 + \dots\); \((1 + x)^{-1} = 1 - x + x^2 - \dots\); \((1 - x)^{-2} = 1 + 2x + 3x^2 + 4x^3 + \dots\); in general the coefficient of \(x^r\) in \((1 - x)^{-n}\) is \({}^{n+r-1}C_r\).`] },
      { ex: { q: R`Use the binomial series to find \(\sqrt{1.02}\) approximately.`,
        steps: [R`\((1 + 0.02)^{1/2} \approx 1 + \frac12(0.02) + \dfrac{\frac12\left(-\frac12\right)}{2}(0.02)^2\).`, R`= 1 + 0.01 − 0.00005.`], ans: R`≈ 1.00995 (calculator: 1.009950)` } },
      { ex: { q: R`Find the coefficient of \(x^3\) in \(\dfrac{1}{(1 - 2x)^2}\).`,
        steps: [R`\((1 - y)^{-2} = \sum (r + 1)y^r\) with y = 2x.`, R`r = 3: \(4 \times 2^3\).`], ans: R`32 (valid for |x| < ½)` } },
      { check: { q: R`Which is larger: 1.01¹⁰⁰⁰⁰⁰⁰ or 10 000?`, ans: R`1.01¹⁰⁰⁰⁰⁰⁰ > 1 + 10⁶ × 0.01 = 10 001 > 10 000.` } }
    ] }
  ],
  summary: [
    R`(a + b)ⁿ = Σ ⁿCᵣ aⁿ⁻ʳ bʳ: n + 1 terms; coefficients symmetric; proof by induction using Pascal's rule.`,
    R`General term Tᵣ₊₁ = ⁿCᵣ aⁿ⁻ʳ bʳ; middle term T_{n/2+1} (n even), T_{(n+1)/2} and T_{(n+3)/2} (n odd).`,
    R`Coefficient of xᵏ / term independent of x: write Tᵣ₊₁, equate the power of x, solve for integer r.`,
    R`ΣCᵣ = 2ⁿ; alternating sum 0; even = odd = 2ⁿ⁻¹; Σ rCᵣ = n2ⁿ⁻¹; ΣCᵣ² = ²ⁿCₙ.`,
    R`Approximations (1 + x)ⁿ ≈ 1 + nx; remainders by writing the base as (multiple ± 1).`,
    R`Pascal's rule ⁿCᵣ₋₁ + ⁿCᵣ = ⁿ⁺¹Cᵣ; hockey stick ʳCᵣ + … + ⁿCᵣ = ⁿ⁺¹Cᵣ₊₁; rth term from the end = (n − r + 2)th from the start.`,
    R`Tᵣ₊₁/Tᵣ = (n − r + 1)/r · (b/a): use it for coefficients in AP and for the numerically greatest term.`,
    R`Any index (|x| < 1): (1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + …, an infinite series; (1 − x)⁻¹ = 1 + x + x² + …`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §9.6 Binomial Theorem`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-6-binomial-theorem' },
    { t: R`Wikipedia: Binomial theorem`, url: 'https://en.wikipedia.org/wiki/Binomial_theorem' },
    { t: R`Wikipedia: Pascal's triangle`, url: 'https://en.wikipedia.org/wiki/Pascal%27s_triangle' },
    { t: R`Wikipedia: Vandermonde's identity`, url: 'https://en.wikipedia.org/wiki/Vandermonde%27s_identity' }
  ]
});
})();
