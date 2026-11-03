// Book chapter: Permutations and Combinations. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 11, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }

// ---------- figures ----------
var figTree = D.svg(460, 200, (function () {
  var out = [lab(30, 100, 'start', 'm', 10)], shirts = ['S₁', 'S₂', 'S₃'], pants = ['P₁', 'P₂'];
  shirts.forEach(function (s, i) {
    var y = 40 + i * 60;
    out.push(D.line(55, 100, 140, y, { color: 'b', w: 1.6 }), lab(155, y, s, 'b', 12, { bold: true }));
    pants.forEach(function (p, j) {
      var y2 = y - 15 + j * 30;
      out.push(D.line(170, y, 250, y2, { color: 'o', w: 1.4 }), lab(265, y2, p, 'o', 11, { bold: true }), lab(300, y2, '(' + s + ', ' + p + ')', 'm', 10, { anchor: 'start' }));
    });
  });
  out.push(lab(420, 100, '3 × 2 = 6', 'g', 13, { bold: true }), lab(420, 118, 'outfits', 'g', 10));
  return out;
})(), 'Tree diagram for the multiplication principle');

var figCircle = D.svg(220, 200, (function () {
  var out = [D.circle(110, 100, 60, { color: 'm', w: 1.2 })], names = ['A', 'B', 'C', 'D', 'E', 'F'];
  names.forEach(function (n, i) { var a = -Math.PI / 2 + i * 2 * Math.PI / 6, x = 110 + 60 * Math.cos(a), y = 100 + 60 * Math.sin(a); out.push(D.circle(x, y, 14, { color: 'b', fill: 'soft', w: 1.4 }), lab(x, y + 1, n, 'b', 12, { bold: true })); });
  out.push(lab(110, 100, 'table', 'm', 10), lab(110, 190, 'fix A; arrange the other 5: 5!', 'g', 10));
  return out;
})(), 'Circular arrangement');

var figPolygon = D.svg(240, 220, (function () {
  var out = [], n = 8, P = [];
  for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; P.push([120 + 80 * Math.cos(a), 105 + 80 * Math.sin(a)]); }
  for (var i2 = 0; i2 < n; i2++) for (var j = i2 + 2; j < n; j++) { if (i2 === 0 && j === n - 1) continue; out.push(D.line(P[i2][0], P[i2][1], P[j][0], P[j][1], { color: 'o', w: 0.9, dash: '3 3' })); }
  out.push(D.poly(P, { closed: true, color: 'b', w: 2 }));
  P.forEach(function (p) { out.push(D.dot(p[0], p[1], { r: 3.5, color: 'b' })); });
  out.push(lab(120, 210, 'octagon: ⁸C₂ − 8 = 20 diagonals', 'm', 10));
  return out;
})(), 'Diagonals of an octagon');

// ---------- chapter text ----------
JEE.book('maths', 'permutations-combinations', {
  intro: [
    R`How many passwords, number plates, teams or seating plans are possible? Listing them is impossible when the numbers are large, so we need systematic ways to count. <b>Permutations</b> count arrangements (order matters) and <b>combinations</b> count selections (order does not matter).`,
    R`This chapter builds everything from the fundamental principle of counting, then develops formulas for permutations (with alike objects, repetition and restrictions), combinations and their properties, and applies them to arrangement, selection and geometry problems.`
  ],
  sections: [
    { h: R`Fundamental principle of counting`, t: [0], blocks: [
      R`<b>Multiplication principle:</b> if one job can be done in m ways, and after it a second job can be done in n ways, the two jobs <b>in succession</b> can be done in m × n ways. It extends to any number of jobs.`,
      R`<b>Addition principle:</b> if a job can be done in m ways <b>or</b> (exclusively) in n ways, it can be done in m + n ways.`,
      { fig: figTree, cap: R`With 3 shirts and 2 pairs of trousers there are 3 × 2 = 6 outfits.` },
      { ex: { q: R`How many 3-letter code words (letters may repeat) can be formed from the 26 letters? How many if no letter repeats?`,
        steps: [R`With repetition: 26 × 26 × 26 = 17 576.`, R`Without: 26 × 25 × 24 = 15 600.`], ans: R`17 576; 15 600` } },
      { tip: R`"AND" (do this and then that) means multiply; "OR" (either this or that) means add.` },
      { check: { q: R`A restaurant offers 4 starters and 6 main courses. How many two-course meals are possible?`, ans: R`4 × 6 = 24.` } }
    ] },

    { h: R`Factorial notation`, t: [0], blocks: [
      R`\(n! = n(n-1)(n-2)\cdots 2 \cdot 1\) for natural n, and \(0! = 1\). Note that \(n! = n \cdot (n-1)!\).`,
      { ex: { q: R`Evaluate \(\dfrac{8!}{6!\,2!}\) and find n if \(\dfrac{1}{8!} + \dfrac{1}{9!} = \dfrac{n}{10!}\).`,
        steps: [R`\(8!/(6!\,2!) = (8 \times 7)/2 = 28\).`, R`Multiply by 10!: \(10 \times 9 + 10 = n\).`], ans: R`28; n = 100` } },
      { check: { q: R`What is the value of 0!?`, ans: R`1.` } }
    ] },

    { h: R`Permutations: P(n, r)`, t: [1, 3], blocks: [
      R`A <b>permutation</b> is an arrangement of objects in a definite order. The number of arrangements of r objects chosen from n distinct objects (no repetition) is`,
      { derive: R`Formula for ⁿPᵣ`, open: true, steps: [R`The first place can be filled in n ways, the second in (n − 1), …, the r-th in (n − r + 1) ways.`, R`\[{}^nP_r = n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}, \qquad 0 \le r \le n\]`, R`In particular \({}^nP_n = n!\) and \({}^nP_0 = 1\).`] },
      { ex: { q: R`How many 4-digit numbers can be formed from the digits 1 to 9 if no digit repeats?`,
        steps: [R`\({}^9P_4 = 9 \times 8 \times 7 \times 6\).`], ans: R`3024` } },
      { ex: { q: R`How many 4-digit even numbers can be formed with the digits 0–9, without repetition?`,
        steps: [R`Last digit 0: the other three places 9 × 8 × 7 = 504.`, R`Last digit 2, 4, 6 or 8: first digit 8 choices (not 0, not the last digit), then 8 × 7: 4 × 8 × 8 × 7 = 1792.`], ans: R`2296` } },
      { check: { q: R`Find ⁵P₂.`, ans: R`5 × 4 = 20.` } }
    ] },

    { h: R`Permutations when some objects are alike`, t: [1], blocks: [
      R`The number of arrangements of n objects of which p are alike of one kind, q of another and r of a third (the rest distinct) is \[\frac{n!}{p!\,q!\,r!}.\] Swapping identical objects does not create a new arrangement, so we divide out those orderings.`,
      { ex: { q: R`How many arrangements are there of the letters of MISSISSIPPI?`,
        steps: [R`11 letters: M 1, I 4, S 4, P 2.`, R`\(\dfrac{11!}{4!\,4!\,2!}\).`], ans: R`34 650` } },
      { check: { q: R`How many distinct arrangements does BANANA have?`, ans: R`6!/(3! 2!) = 60.` } }
    ] },

    { h: R`Permutations with repetition allowed`, t: [1], blocks: [
      R`If each of r places can be filled by any of n distinct objects (repetition allowed), the number of arrangements is \(n^r\). Example: 4-digit PINs from 10 digits: \(10^4\) = 10 000.`,
      { ex: { q: R`In how many ways can 5 letters be posted in 3 letter boxes?`,
        steps: [R`Each letter has 3 choices, independently: \(3^5\).`], ans: R`243` } },
      { mistake: R`Writing 5³ for "5 letters in 3 boxes". Each letter (the object being placed) chooses a box, so it is (number of boxes)^(number of letters) = 3⁵.` },
      { check: { q: R`How many 4-digit numbers (repetition allowed) can be formed from the digits 1–9?`, ans: R`9⁴ = 6561.` } }
    ] },

    { h: R`Permutations with restrictions; circular permutations`, t: [1], blocks: [
      { points: [
        R`<b>Objects together:</b> treat the group as one unit, arrange the units, then arrange inside the group.`,
        R`<b>No two of some objects together:</b> arrange the others first, then place the restricted objects in the gaps between them (gap method).`,
        R`<b>Fixed positions:</b> place the restricted objects first.`
      ] },
      { ex: { q: R`In how many ways can 5 boys and 3 girls stand in a row if (a) the girls are together; (b) no two girls are together?`,
        steps: [R`(a) Girls as one block: 6 units → 6!; girls inside → 3!: 720 × 6 = 4320.`, R`(b) Boys first: 5! = 120; 6 gaps for 3 girls: ⁶P₃ = 120; total 14 400.`], ans: R`4320; 14 400` } },
      R`<b>Circular permutations:</b> n distinct objects around a circle can be arranged in \((n - 1)!\) ways (fix one object to remove identical rotations). If clockwise and anticlockwise arrangements are the same (necklace, garland), the number is \(\frac{(n - 1)!}{2}\).`,
      { fig: figCircle, cap: R`Rotating everyone one seat gives the same circular arrangement, so we fix one person.` },
      { check: { q: R`In how many ways can 6 people sit at a round table?`, ans: R`5! = 120.` } }
    ] },

    { h: R`Combinations: C(n, r) and its properties`, t: [2], blocks: [
      R`A <b>combination</b> is a selection in which order does not matter. The number of ways to choose r objects from n distinct objects is \[{}^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}.\]`,
      { points: [R`\({}^nC_0 = {}^nC_n = 1\); \({}^nC_1 = n\).`, R`\({}^nC_r = {}^nC_{n-r}\) (choosing r to take = choosing n − r to leave). So if \({}^nC_x = {}^nC_y\), then x = y or x + y = n.`, R`<b>Pascal's rule:</b> \({}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r\).`, R`\({}^nC_r = \dfrac{n}{r}\,{}^{n-1}C_{r-1}\); \(\sum_{r=0}^{n} {}^nC_r = 2^n\).`] },
      { ex: { q: R`If \({}^nC_9 = {}^nC_8\), find \({}^nC_{17}\).`,
        steps: [R`9 + 8 = n ⟹ n = 17.`], ans: R`¹⁷C₁₇ = 1` } },
      { check: { q: R`Find ¹⁰C₃.`, ans: R`120.` } }
    ] },

    { h: R`Relation between P(n, r) and C(n, r)`, t: [2], blocks: [
      R`Each selection of r objects can be arranged in r! ways, so \[{}^nP_r = r!\,{^nC_r}.\] Counting arrangements = counting selections × arranging each selection. This is the bridge between the two ideas.`,
      { ex: { q: R`If \({}^nP_r = 720\) and \({}^nC_r = 120\), find r.`,
        steps: [R`r! = 720/120 = 6 ⟹ r = 3.`], ans: R`r = 3 (and n = 10)` } },
      { check: { q: R`Which is larger for r ≥ 2: ⁿPᵣ or ⁿCᵣ?`, ans: R`ⁿPᵣ, since it equals r! × ⁿCᵣ.` } }
    ] },

    { h: R`Selections with restrictions`, t: [2], blocks: [
      { points: [
        R`<b>Particular objects always included:</b> choose the rest from the remaining: \({}^{n-k}C_{r-k}\). <b>Always excluded:</b> \({}^{n-k}C_r\).`,
        R`<b>"At least one":</b> total minus "none".`,
        R`<b>Total selections</b> (any number, at least one) from n distinct objects: \(2^n - 1\).`,
        R`<b>Identical objects:</b> from p alike of one kind, q of another, r of another, the number of selections (taking any number) is \((p+1)(q+1)(r+1) - 1\) (excluding the empty selection).`,
        R`The number of divisors of \(N = p_1^{a}p_2^{b}p_3^{c}\) is \((a+1)(b+1)(c+1)\).`
      ] },
      { ex: { q: R`A committee of 4 is to be chosen from 6 men and 4 women. In how many ways if it must contain at least one woman?`,
        steps: [R`Total ¹⁰C₄ = 210; all men ⁶C₄ = 15.`], ans: R`195` } },
      { ex: { q: R`In how many ways can a committee of 3 men and 2 women be formed from 7 men and 5 women?`,
        steps: [R`⁷C₃ × ⁵C₂ = 35 × 10.`], ans: R`350` } },
      { check: { q: R`How many divisors does 360 = 2³ · 3² · 5 have?`, ans: R`4 × 3 × 2 = 24.` } }
    ] },

    { h: R`Arrangement and selection problems`, t: [4], blocks: [
      R`Many problems need a selection followed by an arrangement: first choose (combinations), then arrange (multiply by the number of orders).`,
      { ex: { q: R`How many words (with or without meaning) of 3 consonants and 2 vowels can be formed from 7 consonants and 4 vowels?`,
        steps: [R`Choose: ⁷C₃ × ⁴C₂ = 35 × 6 = 210.`, R`Arrange the 5 letters: 5! = 120. Total 210 × 120.`], ans: R`25 200` } },
      R`<b>Distribution of identical objects:</b> the number of ways to put n identical objects into r distinct boxes (empty boxes allowed) is \({}^{n+r-1}C_{r-1}\) (stars and bars); with each box non-empty, \({}^{n-1}C_{r-1}\).`,
      { ex: { q: R`In how many ways can 10 identical balls be put into 3 distinct boxes?`,
        steps: [R`\({}^{10+3-1}C_{3-1} = {}^{12}C_2\).`], ans: R`66` } },
      { adv: R`<b>Dividing into groups:</b> 2n distinct objects into two equal unlabelled groups: \(\dfrac{(2n)!}{2!\,(n!)^2}\); into groups of sizes p, q, r (all different): \(\dfrac{(p+q+r)!}{p!\,q!\,r!}\). <b>Derangements</b> (no object in its own place): \(D_n = n!\left(1 - \frac1{1!} + \frac1{2!} - \dots + \frac{(-1)^n}{n!}\right)\); D₃ = 2, D₄ = 9.` },
      { check: { q: R`How many ways are there to choose 2 books from 5 and arrange them on a shelf?`, ans: R`⁵P₂ = 20.` } }
    ] },

    { h: R`Counting lines, triangles and diagonals`, t: [4], blocks: [
      R`From n points with no three collinear: lines \({}^nC_2\), triangles \({}^nC_3\). A polygon with n vertices has \({}^nC_2 - n = \dfrac{n(n-3)}{2}\) diagonals.`,
      { fig: figPolygon, cap: R`Every pair of vertices gives a side or a diagonal; subtracting the n sides leaves the diagonals.` },
      R`If m of the n points are collinear: lines \({}^nC_2 - {}^mC_2 + 1\); triangles \({}^nC_3 - {}^mC_3\).`,
      { ex: { q: R`12 points lie in a plane, 5 of them on one line and no other three collinear. How many lines and triangles do they determine?`,
        steps: [R`Lines: ¹²C₂ − ⁵C₂ + 1 = 66 − 10 + 1 = 57.`, R`Triangles: ¹²C₃ − ⁵C₃ = 220 − 10 = 210.`], ans: R`57 lines; 210 triangles` } },
      { ex: { q: R`How many diagonals does a decagon have?`,
        steps: [R`¹⁰C₂ − 10 = 45 − 10.`], ans: R`35` } },
      { check: { q: R`A polygon has 44 diagonals. How many sides does it have?`, ans: R`n(n − 3)/2 = 44 ⟹ n = 11.` } }
    ] }
  ],
  summary: [
    R`Multiplication principle (and) and addition principle (or). n! = n(n − 1)!, 0! = 1.`,
    R`ⁿPᵣ = n!/(n − r)!; alike objects n!/(p! q! r!); repetition nʳ; circular (n − 1)!, necklace (n − 1)!/2.`,
    R`Together: treat as a block; never together: gap method.`,
    R`ⁿCᵣ = n!/(r!(n − r)!); ⁿCᵣ = ⁿCₙ₋ᵣ; Pascal ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ; ⁿPᵣ = r! ⁿCᵣ; ΣⁿCᵣ = 2ⁿ.`,
    R`At least one = total − none; selections from identical groups (p + 1)(q + 1)… − 1; divisors (a + 1)(b + 1)…; n identical into r boxes ⁿ⁺ʳ⁻¹Cᵣ₋₁.`,
    R`Lines ⁿC₂, triangles ⁿC₃, diagonals n(n − 3)/2; with m collinear points subtract ᵐC₂ (add 1) and ᵐC₃.`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §9.5 Counting Principles`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-5-counting-principles' },
    { t: R`Wikipedia: Permutation`, url: 'https://en.wikipedia.org/wiki/Permutation' },
    { t: R`Wikipedia: Combination`, url: 'https://en.wikipedia.org/wiki/Combination' },
    { t: R`Wikipedia: Stars and bars (combinatorics)`, url: 'https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)' }
  ]
});
})();
