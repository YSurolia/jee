// Book chapter: Sequences and Series. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figAPGP = D.row([
  [D.plot({ w: 220, h: 190, x: [0, 8.5], y: [0, 34], noOrigin: true, xlabel: 'n', ylabel: 'aₙ', mathLabels: false, xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return [v, String(v)]; }), yticks: [[10, '10'], [20, '20'], [30, '30']],
    segs: [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) { return { x1: n, y1: 0, x2: n, y2: 3 + 4 * (n - 1), color: 'b', w: 8 }; }), label: 'arithmetic progression' }), R`AP 3, 7, 11, …: equal steps (d = 4)`],
  [D.plot({ w: 220, h: 190, x: [0, 8.5], y: [0, 34], noOrigin: true, xlabel: 'n', ylabel: 'aₙ', mathLabels: false, xticks: [1, 2, 3, 4, 5, 6, 7, 8].map(function (v) { return [v, String(v)]; }), yticks: [[10, '10'], [20, '20'], [30, '30']],
    segs: [1, 2, 3, 4, 5, 6].map(function (n) { return { x1: n, y1: 0, x2: n, y2: Math.min(32, Math.pow(2, n - 1)), color: 'o', w: 8 }; }), label: 'geometric progression' }), R`GP 1, 2, 4, 8, …: equal ratios (r = 2)`]
]);
var figInfinite = D.plot({ w: 360, h: 210, x: [0, 10.5], y: [0, 2.3], noOrigin: true, xlabel: 'n', ylabel: 'Sₙ', mathLabels: false, xticks: [2, 4, 6, 8, 10].map(function (v) { return [v, String(v)]; }), yticks: [[1, '1'], [2, '2']],
  fns: [{ f: function () { return 2; }, color: 'r', dash: '5 4', w: 1.4 }],
  pts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return { x: n, y: 2 - Math.pow(0.5, n - 1), color: 'b' }; }),
  texts: [{ x: 6, y: 2.15, s: 'limit S = a/(1 − r) = 2', color: 'r', size: 10 }],
  label: 'Partial sums of 1 + 1/2 + 1/4 + ...' });
var figAMGM = D.svg(340, 200, (function () {
  var a = 9, b = 4, s = 18, cx = 30 + (a + b) / 2 * s, cy = 170, r = (a + b) / 2 * s, px = 30 + a * s, h = Math.sqrt(a * b) * s, out = [];
  out.push(D.path('M' + (cx - r) + ',' + cy + ' A' + r + ',' + r + ' 0 0 1 ' + (cx + r) + ',' + cy, { color: 'm', w: 1.6 }));
  out.push(D.line(cx - r, cy, cx + r, cy, { w: 1.8 }));
  out.push(D.line(px, cy, px, cy - h, { color: 'b', w: 2.4 }), D.line(cx, cy, cx, cy - r, { color: 'r', w: 2.4, dash: '5 4' }));
  out.push(D.text((cx - r + px) / 2, cy + 14, 'a = 9', { size: 11, math: false }), D.text((px + cx + r) / 2, cy + 14, 'b = 4', { size: 11, math: false }));
  out.push(D.text(px + 6, cy - h / 2, 'GM = √(ab) = 6', { size: 11, math: false, color: 'b', anchor: 'start' }), D.text(cx - 8, cy - r + 62, 'AM = (a + b)/2 = 6.5', { size: 11, math: false, color: 'r', anchor: 'end' }));
  return out;
})(), 'Geometric proof of AM ≥ GM');

var figTypes = D.row([
  [D.plot({ w: 220, h: 180, x: [0, 10.5], y: [0, 1.15], noOrigin: true, xlabel: 'n', mathLabels: false, xticks: [2, 4, 6, 8, 10].map(function (v) { return [v, String(v)]; }), yticks: [[1, '1']],
    pts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return { x: n, y: 1 / n, color: 'b' }; }), label: 'the sequence 1 over n' }), R`\(a_n = 1/n\): decreasing, getting closer to 0`],
  [D.plot({ w: 220, h: 180, x: [0, 10.5], y: [-1.3, 1.3], xlabel: 'n', mathLabels: false, xticks: [2, 4, 6, 8, 10].map(function (v) { return [v, String(v)]; }), yticks: [[1, '1'], [-1, '−1']],
    pts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (n) { return { x: n, y: n % 2 ? -1 : 1, color: 'o' }; }), label: 'the sequence minus 1 to the n' }), R`\(a_n = (-1)^n\): jumps between −1 and 1`]
]);

var figBounce = D.plot({ w: 380, h: 210, x: [0, 8.4], y: [0, 11], noOrigin: true, ylabel: 'height (m)', mathLabels: false, xticks: [], yticks: [[10, '10'], [5, '5'], [2.5, '2.5']],
  param: (function () { var arcs = [{ fx: function (t) { return t; }, fy: function (t) { return 10 * (1 - t * t); }, t: [0, 1], color: 'b', w: 2 }], x = 1, h = 5; for (var i = 0; i < 6; i++) { (function (x0, hh) { var w = 2 * Math.sqrt(hh / 10); arcs.push({ fx: function (t) { return x0 + w * t; }, fy: function (t) { return 4 * hh * t * (1 - t); }, t: [0, 1], color: 'b', w: 2 }); })(x, h); x += 2 * Math.sqrt(h / 10); h /= 2; } return arcs; })(),
  texts: [{ x: 1.1, y: 10.3, s: 'dropped from 10 m', color: 'm', size: 10, anchor: 'start' }, { x: 2.6, y: 5.6, s: 'up 5, down 5', color: 'o', size: 10 }, { x: 4.4, y: 3.1, s: '2.5 + 2.5', color: 'o', size: 10 }],
  label: 'A ball bouncing to half its height each time' });

var figStair = D.svg(320, 210, (function () {
  var out = [], s = 26, n = 5, x0 = 60, y0 = 180;
  for (var c = 0; c < n; c++) for (var r = 0; r <= n; r++) {
    var mine = r < c + 1; out.push(D.rect(x0 + c * s, y0 - (r + 1) * s, s, s, { color: mine ? 'b' : 'o', fill: 'soft', w: 1 }));
  }
  out.push(D.text(x0 + n * s / 2, y0 + 16, 'n = 5 columns', { size: 11, color: 'm' }), D.text(x0 - 12, y0 - (n + 1) * s / 2, 'n + 1 = 6', { size: 11, color: 'm', anchor: 'end' }));
  out.push(D.text(x0 + n * s + 12, y0 - 40, 'blue: 1 + 2 + 3 + 4 + 5', { size: 11, color: 'b', anchor: 'start' }), D.text(x0 + n * s + 12, y0 - 110, 'orange: the same', { size: 11, color: 'o', anchor: 'start' }), D.text(x0 + n * s + 12, y0 - 94, 'staircase, flipped', { size: 11, color: 'o', anchor: 'start' }));
  return out;
})(), 'Two copies of the staircase 1 to 5 fill a 5 by 6 rectangle');

// ---------- chapter text ----------
JEE.book('maths', 'sequences-series', {
  intro: [
    R`A sequence is an ordered list of numbers that follows a rule; adding its terms gives a series. Arithmetic progressions (equal differences) and geometric progressions (equal ratios) model savings, loans, populations, radioactive decay and much more.`,
    R`This chapter covers APs and GPs (terms, sums, properties), infinite geometric series, arithmetic and geometric means, the inequality AM ≥ GM, and the special sums of natural numbers, their squares and cubes. Along the way you will meet the classic JEE question types: maximum sums, ratios of sums, inserting means, and telescoping series.`
  ],
  sections: [
    { h: R`Sequences, series and progressions`, t: [0], blocks: [
      R`A <b>sequence</b> is a function from the natural numbers (or a part of them) to the reals: \(a_1, a_2, a_3, \dots, a_n, \dots\), where \(a_n\) is the nth (general) term. It is finite or infinite. A <b>series</b> is the sum of the terms: \(a_1 + a_2 + \dots + a_n = \sum_{k=1}^{n} a_k\). A sequence whose terms follow a definite pattern is a <b>progression</b>.`,
      R`Think of a sequence as a numbered list: there is a first term, a second term, and so on, and the position n tells you which term you are looking at. A sequence can increase, decrease, settle down towards a value, or jump about. The two simplest and most useful patterns are adding the same number each time (an AP) and multiplying by the same number each time (a GP).`,
      { fig: figTypes, cap: R`Two infinite sequences drawn as points (n, aₙ). The first settles towards 0; the second never settles.` },
      R`A sequence may be given by a formula (\(a_n = n^2 + 1\)) or recursively (Fibonacci: \(a_1 = a_2 = 1,\ a_{n+2} = a_{n+1} + a_n\)).`,
      { tip: R`If \(S_n\) is given, find the general term by \(a_n = S_n - S_{n-1}\) (n ≥ 2) and \(a_1 = S_1\).` },
      { ex: { q: R`Write the first four terms of \(a_n = \dfrac{(-1)^{n+1}}{n^2}\), and of the sequence \(a_1 = 2,\ a_{n+1} = 3a_n - 1\).`,
        steps: [R`First: 1, −1/4, 1/9, −1/16.`, R`Second: 2, 3·2 − 1 = 5, 3·5 − 1 = 14, 3·14 − 1 = 41.`], ans: R`1, −1/4, 1/9, −1/16 and 2, 5, 14, 41` } },
      { ex: { q: R`The sum of the first n terms of a sequence is \(S_n = 3n^2 + 5n\). Find its nth term and show that it is an AP.`,
        steps: [R`\(a_n = S_n - S_{n-1} = 3n^2 + 5n - 3(n - 1)^2 - 5(n - 1) = 6n + 2\) (n ≥ 2), and \(a_1 = S_1 = 8\) fits the same formula.`, R`\(a_{n+1} - a_n = 6\), a constant.`], ans: R`aₙ = 6n + 2: an AP with a = 8, d = 6` } },
      { check: { q: R`If Sₙ = n² + 2n, find the nth term.`, ans: R`aₙ = (n² + 2n) − ((n − 1)² + 2(n − 1)) = 2n + 1.` } }
    ] },

    { h: R`Arithmetic progression: nth term and sum`, t: [0], blocks: [
      R`An <b>arithmetic progression (AP)</b> has a constant <b>common difference</b> d: a, a + d, a + 2d, …`,
      { fig: figAPGP, cap: R`An AP grows by equal steps; a GP grows by equal factors.` },
      { derive: R`nth term and sum of an AP`, open: true, steps: [R`\(a_n = a + (n - 1)d\); the nth term from the end is \(l - (n - 1)d\), where l is the last term.`, R`Write \(S_n\) forwards and backwards and add: each pair sums to a + l, and there are n pairs: \(2S_n = n(a + l)\).`, R`\[S_n = \frac{n}{2}(a + l) = \frac{n}{2}\big[2a + (n - 1)d\big]\]`] },
      { ex: { q: R`Find the 20th term and the sum of the first 20 terms of 3, 7, 11, …`,
        steps: [R`a = 3, d = 4: a₂₀ = 3 + 19 × 4 = 79.`, R`S₂₀ = 10(3 + 79) = 820.`], ans: R`79; 820` } },
      { ex: { q: R`Which term of the AP 5, 9, 13, … is 101?`,
        steps: [R`5 + (n − 1)4 = 101 ⟹ n − 1 = 24.`], ans: R`The 25th term` } },
      { ex: { q: R`Find the sum of all two-digit numbers that are multiples of 3.`,
        steps: [R`They are 12, 15, …, 99: an AP with a = 12, d = 3, l = 99, so n = (99 − 12)/3 + 1 = 30.`, R`S = \(\frac{30}{2}(12 + 99)\).`], ans: R`1665` } },
      { ex: { q: R`For the AP 20, 18, 16, …, find the greatest value of the sum Sₙ.`,
        steps: [R`The terms are positive up to the 10th term (2); the 11th term is 0 and after that they are negative.`, R`So the sum is greatest at n = 10 (and equally at n = 11): \(S_{10} = 5(20 + 2)\).`], ans: R`110` } },
      { mistake: R`Using n instead of n − 1 in \(a_n = a + (n - 1)d\). The first term already counts as one term, so to reach the nth term you add d only n − 1 times.` },
      { check: { q: R`How many terms of 1, 3, 5, … add up to 100?`, ans: R`n² = 100 ⟹ n = 10.` } }
    ] },

    { h: R`Properties of an arithmetic progression`, t: [0], blocks: [
      { points: [R`Adding, subtracting, multiplying or dividing every term by a constant gives another AP.`, R`Three numbers in AP are best taken as a − d, a, a + d; four as a − 3d, a − d, a + d, a + 3d.`, R`a, b, c are in AP ⟺ 2b = a + c.`, R`In a finite AP, the sum of terms equidistant from the beginning and end is constant (= first + last).`, R`If \(S_n = An^2 + Bn\), the sequence is an AP with d = 2A.`] },
      { ex: { q: R`Three numbers in AP have sum 15 and product 80. Find them.`,
        steps: [R`Take a − d, a, a + d: 3a = 15 ⟹ a = 5.`, R`(5 − d)·5·(5 + d) = 80 ⟹ 25 − d² = 16 ⟹ d = ±3.`], ans: R`2, 5, 8` } },
      { ex: { q: R`Four numbers in AP have sum 20 and the sum of their squares is 120. Find them.`,
        steps: [R`Take a − 3d, a − d, a + d, a + 3d (common difference 2d): 4a = 20, so a = 5.`, R`Squares: \(4a^2 + 20d^2 = 120 \Rightarrow 100 + 20d^2 = 120 \Rightarrow d = \pm1\).`], ans: R`2, 4, 6, 8` } },
      { ex: { q: R`The sums of n terms of two APs are in the ratio (7n + 1) : (4n + 27). Find the ratio of their nth terms.`,
        steps: [R`\(\dfrac{S_n}{S'_n} = \dfrac{2a + (n - 1)d}{2a' + (n - 1)d'}\). Replacing n by 2n − 1 turns the right side into \(\dfrac{a + (n - 1)d}{a' + (n - 1)d'} = \dfrac{a_n}{a'_n}\).`, R`So put n → 2n − 1 in (7n + 1)/(4n + 27).`], ans: R`(14n − 6) : (8n + 23)` } },
      { tip: R`Ratio of nth terms from the ratio of sums: replace n by 2n − 1. Ratio of sums from the ratio of nth terms: replace n by (n + 1)/2.` },
      { check: { q: R`If the pth term of an AP is q and the qth term is p, find the (p + q)th term.`, ans: R`d = −1, and a_{p+q} = 0.` } }
    ] },

    { h: R`Geometric progression: nth term and sum`, t: [0], blocks: [
      R`A <b>geometric progression (GP)</b> has a constant <b>common ratio</b> r ≠ 0: a, ar, ar², …`,
      R`An AP grows by the same <b>amount</b> each step; a GP grows by the same <b>factor</b>. That small difference matters enormously: doubling 30 times turns 1 into more than a billion, while adding 2 thirty times only reaches 61. GPs describe anything that grows or shrinks by a fixed percentage, such as money at compound interest, bacteria, or a radioactive sample.`,
      { derive: R`nth term and sum of a GP`, open: true, steps: [R`\(a_n = ar^{n-1}\).`, R`\(S_n = a + ar + \dots + ar^{n-1}\); multiply by r and subtract: \(S_n - rS_n = a - ar^n\).`, R`\[S_n = \frac{a(1 - r^n)}{1 - r} = \frac{a(r^n - 1)}{r - 1}\ (r \ne 1), \qquad S_n = na\ (r = 1)\]`] },
      { ex: { q: R`Find the 8th term and the sum of 8 terms of 2, 6, 18, …`,
        steps: [R`a = 2, r = 3: a₈ = 2 × 3⁷ = 4374.`, R`S₈ = 2(3⁸ − 1)/(3 − 1) = 6561 − 1 = 6560.`], ans: R`4374; 6560` } },
      { ex: { q: R`The 3rd term of a GP is 24 and the 6th term is 192. Find the GP.`,
        steps: [R`\(ar^2 = 24\) and \(ar^5 = 192\); divide: \(r^3 = 8\), so r = 2 and a = 6.`], ans: R`6, 12, 24, 48, …` } },
      { ex: { q: R`Three numbers in GP have product 216 and sum 19. Find them.`,
        steps: [R`Take a/r, a, ar: the product is \(a^3 = 216\), so a = 6.`, R`\(\frac6r + 6 + 6r = 19 \Rightarrow 6r^2 - 13r + 6 = 0 \Rightarrow r = \frac32\) or \(\frac23\).`], ans: R`4, 6, 9 (in either order)` } },
      { ex: { q: R`₹10 000 is invested at 10% compound interest per year. What is it worth after 3 years?`,
        steps: [R`Each year the amount is multiplied by 1.1, so the amounts form a GP with r = 1.1.`, R`\(10\,000\times1.1^3\).`], ans: R`₹13 310` } },
      { tip: R`Use the form \(\dfrac{a(r^n - 1)}{r - 1}\) when r > 1 and \(\dfrac{a(1 - r^n)}{1 - r}\) when r < 1, so that the numerator and denominator are both positive and signs are less likely to slip.` },
      { points: [R`Three numbers in GP: a/r, a, ar. a, b, c in GP ⟺ b² = ac.`, R`Multiplying all terms by a constant, or taking reciprocals or powers of all terms, gives a GP.`, R`If a, b, c are in GP, then log a, log b, log c are in AP.`] },
      { check: { q: R`Which term of 2, 4, 8, … is 1024?`, ans: R`2ⁿ = 1024 ⟹ n = 10.` } }
    ] },

    { h: R`Infinite geometric series`, t: [0], blocks: [
      R`If |r| < 1, then \(r^n \to 0\) as n → ∞, so the partial sums approach a limit: \[S_\infty = a + ar + ar^2 + \dots = \frac{a}{1 - r}, \qquad |r| < 1.\] If |r| ≥ 1 the series does not converge (except trivially).`,
      { fig: figInfinite, cap: R`The partial sums of 1 + ½ + ¼ + … approach 2 but never exceed it.` },
      { ex: { q: R`Express the recurring decimal \(0.\overline{36}\) as a fraction.`,
        steps: [R`0.363636… = 36/100 + 36/10⁴ + … = (36/100)/(1 − 1/100).`], ans: R`36/99 = 4/11` } },
      { ex: { q: R`Express \(0.2\overline{3} = 0.2333\dots\) as a fraction.`,
        steps: [R`\(0.2 + (0.03 + 0.003 + \dots) = \dfrac{2}{10} + \dfrac{0.03}{1 - 0.1} = \dfrac15 + \dfrac1{30}\).`], ans: R`7/30` } },
      { fig: figBounce, cap: R`A ball dropped from 10 m rises to half its previous height after each bounce. The heights 10, 5, 2.5, … form a GP with r = ½.` },
      { ex: { q: R`For the ball in the figure, find the total distance it travels before coming to rest.`,
        steps: [R`Down 10 m, then up and down 5 m, 2.5 m, … each twice.`, R`Total = 10 + 2(5 + 2.5 + 1.25 + …) = \(10 + 2\cdot\dfrac{5}{1 - \frac12}\).`], ans: R`30 m` } },
      { ex: { q: R`The sum of an infinite GP is 20 and its first term is 5. Find the common ratio.`,
        steps: [R`\(\dfrac{5}{1 - r} = 20 \Rightarrow 1 - r = \frac14\).`], ans: R`r = 3/4` } },
      { mistake: R`Using \(S_\infty = \dfrac{a}{1 - r}\) when |r| ≥ 1. For 1 + 2 + 4 + …, the formula would give −1, but the sum actually grows without limit.` },
      { check: { q: R`Find the sum of 1 − 1/3 + 1/9 − 1/27 + …`, ans: R`a = 1, r = −1/3: 1/(4/3) = 3/4.` } }
    ] },

    { h: R`Arithmetic mean; inserting arithmetic means`, t: [1], blocks: [
      R`The <b>arithmetic mean</b> of a and b is \(A = \dfrac{a + b}{2}\) (so a, A, b are in AP). To insert n AMs \(A_1, \dots, A_n\) between a and b, the n + 2 numbers form an AP with \[d = \frac{b - a}{n + 1}, \qquad A_k = a + kd.\] The sum of the n AMs is \(n \cdot \dfrac{a + b}{2}\).`,
      { ex: { q: R`Insert 3 arithmetic means between 2 and 18.`,
        steps: [R`d = (18 − 2)/4 = 4.`], ans: R`6, 10, 14` } },
      { ex: { q: R`m arithmetic means are inserted between 1 and 31 so that the ratio of the 7th mean to the (m − 1)th mean is 5 : 9. Find m.`,
        steps: [R`\(d = \dfrac{30}{m + 1}\); \(A_7 = 1 + 7d\), \(A_{m-1} = 1 + (m - 1)d\).`, R`\(9(1 + 7d) = 5(1 + (m - 1)d) \Rightarrow 4 + 63d = 5(m - 1)d\).`, R`Put d = 30/(m + 1): \(4(m + 1) + 1890 = 150(m - 1)\), so 146m = 2044.`], ans: R`m = 14` } },
      { check: { q: R`What is the sum of 5 AMs inserted between 3 and 13?`, ans: R`5 × (3 + 13)/2 = 40.` } }
    ] },

    { h: R`Geometric mean; inserting geometric means`, t: [1], blocks: [
      R`The <b>geometric mean</b> of positive a and b is \(G = \sqrt{ab}\) (so a, G, b are in GP). To insert n GMs between a and b: \[r = \left(\frac{b}{a}\right)^{1/(n+1)}, \qquad G_k = ar^k.\] The product of the n GMs is \((\sqrt{ab})^n\).`,
      { ex: { q: R`Insert 2 geometric means between 3 and 81.`,
        steps: [R`r³ = 81/3 = 27 ⟹ r = 3.`], ans: R`9, 27` } },
      { ex: { q: R`The AM and GM of two positive numbers are 10 and 8. Find the numbers.`,
        steps: [R`a + b = 20 and ab = 64, so a and b are the roots of \(t^2 - 20t + 64 = 0\).`, R`(t − 16)(t − 4) = 0.`], ans: R`16 and 4` } },
      R`The <b>harmonic mean</b> is \(H = \dfrac{2ab}{a + b}\) (a, H, b in HP: their reciprocals are in AP). For positive a, b: \(G^2 = AH\).`,
      R`A <b>harmonic progression</b> (HP) is a sequence whose reciprocals form an AP, such as 1, ½, ⅓, ¼, …. There is no formula for the sum of an HP; questions are solved by turning them into an AP of reciprocals. For the numbers 16 and 4 above, A = 10, G = 8 and \(H = \dfrac{2\cdot64}{20} = 6.4 = \dfrac{G^2}{A}\), and indeed A > G > H.`,
      { check: { q: R`Find the GM of 4 and 25.`, ans: R`√100 = 10.` } }
    ] },

    { h: R`AM ≥ GM and its applications`, t: [2], blocks: [
      R`For positive numbers a and b: \[\frac{a + b}{2} \ge \sqrt{ab},\] with equality if and only if a = b. More generally, for positive \(a_1, \dots, a_n\): \(\dfrac{a_1 + \dots + a_n}{n} \ge \sqrt[n]{a_1a_2\cdots a_n}\). Also A ≥ G ≥ H.`,
      { derive: R`Proof for two numbers`, open: true, steps: [R`\(\dfrac{a + b}{2} - \sqrt{ab} = \dfrac{(\sqrt a - \sqrt b)^2}{2} \ge 0\).`, R`Equality holds exactly when √a = √b.`] },
      { fig: figAMGM, cap: R`In a semicircle on a diameter a + b, the radius is the AM and the half-chord at the join is the GM; a radius is never shorter than a half-chord.` },
      { ex: { q: R`Find the minimum value of \(x + \dfrac{4}{x}\) for x > 0.`,
        steps: [R`AM ≥ GM: \(\dfrac{x + 4/x}{2} \ge \sqrt{4} = 2\).`, R`Equality when x = 4/x, i.e. x = 2.`], ans: R`4 (at x = 2)` } },
      { ex: { q: R`If a, b, c are positive with a + b + c = 12, find the greatest value of abc.`,
        steps: [R`\(\dfrac{a + b + c}{3} \ge \sqrt[3]{abc} \Rightarrow 4 \ge \sqrt[3]{abc}\).`], ans: R`64 (when a = b = c = 4)` } },
      { ex: { q: R`Find the minimum value of \(4^x + 4^{1-x}\).`,
        steps: [R`Both terms are positive and their product is \(4^x\cdot4^{1-x} = 4\), a constant.`, R`AM ≥ GM: \(4^x + 4^{1-x} \ge 2\sqrt4 = 4\), with equality when \(4^x = 4^{1-x}\), i.e. x = ½.`], ans: R`4` } },
      { ex: { q: R`If x, y > 0 and x + y = 10, find the greatest value of \(xy^2\).`,
        steps: [R`Split y into two equal parts so that the sum stays fixed: \(x + \frac y2 + \frac y2 = 10\).`, R`AM ≥ GM: \(\dfrac{10}{3} \ge \sqrt[3]{x\cdot\frac y2\cdot\frac y2}\), so \(xy^2 \le 4\left(\frac{10}{3}\right)^3\). Equality at x = y/2, i.e. x = 10/3, y = 20/3.`], ans: R`4000/27 ≈ 148.1` } },
      { mistake: R`Claiming a minimum from AM ≥ GM when equality can never happen. The bound is only the minimum if all the parts can actually be made equal within the allowed values.` },
      { tip: R`To use AM ≥ GM for a minimum, split the expression so that the product of the parts is constant; for a maximum, so that the sum is constant.` },
      { check: { q: R`Show that (a + b)(1/a + 1/b) ≥ 4 for positive a, b.`, ans: R`a + b ≥ 2√(ab) and 1/a + 1/b ≥ 2/√(ab); multiply.` } }
    ] },

    { h: R`Sum of the first n natural numbers`, t: [0], blocks: [
      R`\[\sum_{k=1}^{n} k = 1 + 2 + \dots + n = \frac{n(n + 1)}{2}\] (an AP with a = 1, d = 1). Example: 1 + 2 + … + 100 = 5050.`,
      R`A famous story says that the young Carl Friedrich Gauss found 1 + 2 + … + 100 in seconds: he paired 1 with 100, 2 with 99 and so on, making 50 pairs of 101. The picture below shows the same idea for any n.`,
      { fig: figStair, cap: R`Two copies of the staircase 1 + 2 + 3 + 4 + 5 fit together into a 5 × 6 rectangle, so the sum is 30/2 = 15. In general \(2(1 + 2 + \dots + n) = n(n + 1)\).` },
      { ex: { q: R`Find the sum of all natural numbers from 1 to 100 that are not divisible by 5.`,
        steps: [R`All of them: 5050. Multiples of 5: 5 + 10 + … + 100 = 5(1 + 2 + … + 20) = 5 × 210 = 1050.`], ans: R`5050 − 1050 = 4000` } },
      { check: { q: R`Find the sum of all natural numbers from 1 to 50.`, ans: R`50 × 51/2 = 1275.` } }
    ] },

    { h: R`Sums of squares and cubes; method of differences`, t: [0], blocks: [
      { derive: R`Sum of squares`, open: true, steps: [R`Use \((k + 1)^3 - k^3 = 3k^2 + 3k + 1\) and add for k = 1 to n: the left side telescopes to \((n + 1)^3 - 1\).`, R`\((n + 1)^3 - 1 = 3\sum k^2 + 3\cdot\dfrac{n(n + 1)}{2} + n\).`, R`\[\sum_{k=1}^{n} k^2 = \frac{n(n + 1)(2n + 1)}{6}\]`] },
      R`Similarly \[\sum_{k=1}^{n} k^3 = \left[\frac{n(n + 1)}{2}\right]^2 = \left(\sum k\right)^2.\] For n = 10: Σk = 55, Σk² = 385, Σk³ = 3025.`,
      { ex: { q: R`Find the sum 1·2 + 2·3 + 3·4 + … to n terms.`,
        steps: [R`General term \(k(k + 1) = k^2 + k\).`, R`\(\sum (k^2 + k) = \dfrac{n(n+1)(2n+1)}{6} + \dfrac{n(n+1)}{2} = \dfrac{n(n+1)(n+2)}{3}\).`], ans: R`\(\dfrac{n(n + 1)(n + 2)}{3}\) (for n = 10: 440)` } },
      { ex: { q: R`Find \(1^2 + 3^2 + 5^2 + \dots\) to n terms.`,
        steps: [R`General term \((2k - 1)^2 = 4k^2 - 4k + 1\).`, R`\(\sum = \dfrac{4n(n+1)(2n+1)}{6} - 2n(n + 1) + n = \dfrac{n(2n - 1)(2n + 1)}{3}\).`, R`Check n = 3: 1 + 9 + 25 = 35 = 3·5·7/3.`], ans: R`\(\dfrac{n(4n^2 - 1)}{3}\)` } },
      { ex: { q: R`Find the sum \(\dfrac{1}{1\cdot3} + \dfrac{1}{3\cdot5} + \dfrac{1}{5\cdot7} + \dots\) to n terms.`,
        steps: [R`Split each term: \(\dfrac{1}{(2k - 1)(2k + 1)} = \dfrac12\left(\dfrac{1}{2k - 1} - \dfrac{1}{2k + 1}\right)\).`, R`The sum telescopes: \(\dfrac12\left(1 - \dfrac{1}{2n + 1}\right)\).`], ans: R`\(\dfrac{n}{2n + 1}\)` } },
      { ex: { q: R`Find the nth term and the sum of n terms of 1 + 3 + 7 + 13 + 21 + …`,
        steps: [R`The differences 2, 4, 6, 8, … form an AP, so \(a_n = 1 + (2 + 4 + \dots + 2(n - 1)) = n^2 - n + 1\).`, R`\(S_n = \sum k^2 - \sum k + n = \dfrac{n(n^2 + 2)}{3}\). Check n = 5: 45 = 1 + 3 + 7 + 13 + 21.`], ans: R`\(a_n = n^2 - n + 1\), \(S_n = \dfrac{n(n^2 + 2)}{3}\)` } },
      { ex: { q: R`Find the sum of the infinite series \(1 + 2x + 3x^2 + 4x^3 + \dots\) for |x| < 1, and its value at x = ½.`,
        steps: [R`An arithmetico-geometric series: S − xS = 1 + x + x² + … = \(\dfrac{1}{1 - x}\).`, R`So \(S = \dfrac{1}{(1 - x)^2}\); at x = ½, S = 4.`], ans: R`\(\dfrac{1}{(1 - x)^2}\); 4` } },
      { adv: [R`<b>Method of differences:</b> if the differences of successive terms form an AP or GP, write \(a_n\) as a cubic/exponential and sum. Telescoping: \(\sum \dfrac{1}{k(k + 1)} = \sum\left(\dfrac1k - \dfrac{1}{k + 1}\right) = 1 - \dfrac{1}{n + 1}\).`, R`<b>Arithmetico-geometric series</b> \(a + (a + d)r + (a + 2d)r^2 + \dots\): multiply by r and subtract, as for a GP; for |r| < 1, \(S_\infty = \dfrac{a}{1 - r} + \dfrac{dr}{(1 - r)^2}\).`] },
      { check: { q: R`Find 1² + 2² + … + 20².`, ans: R`20 × 21 × 41/6 = 2870.` } }
    ] }
  ],
  summary: [
    R`aₙ = Sₙ − Sₙ₋₁. AP: aₙ = a + (n − 1)d, Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l); 2b = a + c.`,
    R`GP: aₙ = arⁿ⁻¹, Sₙ = a(rⁿ − 1)/(r − 1); S∞ = a/(1 − r) for |r| < 1; b² = ac.`,
    R`AM (a + b)/2, n AMs: d = (b − a)/(n + 1); GM √(ab), n GMs: r = (b/a)^{1/(n+1)}; HM 2ab/(a + b); G² = AH.`,
    R`AM ≥ GM ≥ HM for positive numbers, equality iff all equal; used for maxima/minima.`,
    R`Σk = n(n + 1)/2; Σk² = n(n + 1)(2n + 1)/6; Σk³ = [n(n + 1)/2]²; telescoping and AGP methods.`,
    R`Max of Sₙ for a decreasing AP: add terms while they are positive. Ratio of nth terms from the ratio of sums: n → 2n − 1.`,
    R`Harmonic progression: reciprocals in AP; A ≥ G ≥ H and G² = AH for two positive numbers.`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §9.2 Arithmetic Sequences`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-2-arithmetic-sequences' },
    { t: R`OpenStax College Algebra 2e, §9.3 Geometric Sequences`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-3-geometric-sequences' },
    { t: R`OpenStax College Algebra 2e, §9.4 Series and Their Notations`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-4-series-and-their-notations' },
    { t: R`Wikipedia: Inequality of arithmetic and geometric means`, url: 'https://en.wikipedia.org/wiki/Inequality_of_arithmetic_and_geometric_means' }
  ]
});
})();
