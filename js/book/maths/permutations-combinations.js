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

var figRoutes = D.svg(420, 170, (function () {
  var out = [], A = [40, 85], B = [210, 85], C = [380, 85];
  [-50, 0, 50].forEach(function (h, i) { out.push(D.path('M' + (A[0] + 13) + ',' + A[1] + ' Q125,' + (85 + h * 1.4) + ' ' + (B[0] - 13) + ',' + B[1], { color: 'b', w: 1.8 })); });
  [-60, -20, 20, 60].forEach(function (h) { out.push(D.path('M' + (B[0] + 13) + ',' + B[1] + ' Q295,' + (85 + h * 1.2) + ' ' + (C[0] - 13) + ',' + C[1], { color: 'o', w: 1.8 })); });
  [[A, 'A'], [B, 'B'], [C, 'C']].forEach(function (p) { out.push(D.circle(p[0][0], p[0][1], 13, { color: 'k', fill: 'soft', w: 1.4 }), lab(p[0][0], p[0][1] + 1, p[1], 'k', 12, { bold: true })); });
  out.push(lab(125, 160, '3 roads', 'b', 11), lab(295, 160, '4 roads', 'o', 11), lab(210, 14, 'A to C through B: 3 × 4 = 12 routes', 'g', 11));
  return out;
})(), 'Three roads from A to B and four from B to C');

var figGaps = D.svg(420, 110, (function () {
  var out = [];
  for (var i = 0; i < 5; i++) out.push(D.circle(70 + i * 70, 50, 18, { color: 'b', fill: 'soft', w: 1.4 }), lab(70 + i * 70, 51, 'B', 'b', 12, { bold: true }));
  for (var g = 0; g < 6; g++) out.push(D.rect(26 + g * 70, 36, 18, 28, { color: 'o', w: 1.4, dash: '3 3' }), lab(35 + g * 70, 84, '^', 'o', 12));
  out.push(lab(210, 104, '5 boys make 6 gaps; put each girl in a different gap', 'm', 11));
  return out;
})(), 'Gap method');

var figStars = D.svg(420, 110, (function () {
  var out = [], seq = '**|****|****', x = 40;
  seq.split('').forEach(function (ch) { if (ch === '*') out.push(D.circle(x, 45, 11, { color: 'o', fill: 'soft', w: 1.4 })); else out.push(D.line(x, 20, x, 70, { color: 'b', w: 3 })); x += 30; });
  out.push(lab(55, 92, 'box 1: 2', 'm', 11), lab(175, 92, 'box 2: 4', 'm', 11), lab(325, 92, 'box 3: 4', 'm', 11));
  return out;
})(), 'Stars and bars: 10 balls and 2 bars');

var figGrid = D.svg(240, 220, (function () {
  var out = [], s = 40, x0 = 40, y0 = 20;
  for (var i = 0; i <= 4; i++) { out.push(D.line(x0, y0 + i * s, x0 + 4 * s, y0 + i * s, { color: i === 1 || i === 3 ? 'o' : 'm', w: i === 1 || i === 3 ? 2.4 : 1 })); out.push(D.line(x0 + i * s, y0, x0 + i * s, y0 + 4 * s, { color: i === 0 || i === 2 ? 'b' : 'm', w: i === 0 || i === 2 ? 2.4 : 1 })); }
  out.push(D.rect(x0, y0 + s, 2 * s, 2 * s, { color: 'g', fill: 'soft', w: 0.5 }));
  out.push(lab(120, 205, 'pick 2 of 5 vertical and 2 of 5 horizontal lines', 'm', 10));
  return out;
})(), 'Choosing two horizontal and two vertical lines gives a rectangle');

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
      R`Why multiply? For <b>each</b> of the m ways of doing the first job there is a full set of n ways of doing the second, so the total is n + n + … + n (m times) = mn. The tree diagram makes this visible: every first branch splits into the same number of second branches.`,
      { fig: figRoutes, cap: R`Each of the 3 roads from A to B can be followed by any of the 4 roads from B to C.` },
      { ex: { q: R`How many 3-letter code words (letters may repeat) can be formed from the 26 letters? How many if no letter repeats?`,
        steps: [R`With repetition: 26 × 26 × 26 = 17 576.`, R`Without: 26 × 25 × 24 = 15 600.`], ans: R`17 576; 15 600` } },
      { ex: { q: R`A number plate has 2 different letters followed by 4 different digits. How many plates are possible?`,
        steps: [R`Letters: 26 × 25; digits: 10 × 9 × 8 × 7.`], ans: R`3 276 000` } },
      { ex: { q: R`From city A to city B there are 3 bus routes and 2 train routes. In how many ways can a person go from A to B and come back by a different mode of transport?`,
        steps: [R`Go by bus and return by train: 3 × 2 = 6. Go by train and return by bus: 2 × 3 = 6.`, R`The two cases cannot happen together, so add.`], ans: R`12` } },
      { tip: R`"AND" (do this and then that) means multiply; "OR" (either this or that) means add.` },
      { check: { q: R`A restaurant offers 4 starters and 6 main courses. How many two-course meals are possible?`, ans: R`4 × 6 = 24.` } }
    ] },

    { h: R`Factorial notation`, t: [0], blocks: [
      R`\(n! = n(n-1)(n-2)\cdots 2 \cdot 1\) for natural n, and \(0! = 1\). Note that \(n! = n \cdot (n-1)!\).`,
      { ex: { q: R`Evaluate \(\dfrac{8!}{6!\,2!}\) and find n if \(\dfrac{1}{8!} + \dfrac{1}{9!} = \dfrac{n}{10!}\).`,
        steps: [R`\(8!/(6!\,2!) = (8 \times 7)/2 = 28\).`, R`Multiply by 10!: \(10 \times 9 + 10 = n\).`], ans: R`28; n = 100` } },
      { ex: { q: R`Find n if \(\dfrac{n!}{(n - 2)!} = 56\).`,
        steps: [R`\(\dfrac{n!}{(n - 2)!} = n(n - 1) = 56 = 8 \times 7\).`], ans: R`n = 8` } },
      R`Factorials grow astonishingly fast: 5! = 120, 10! = 3 628 800 and 20! is about 2.4 × 10¹⁸. That is why counting by formula, not by listing, is essential. Why is 0! = 1? Because there is exactly one way to arrange nothing, and because it keeps formulas like \({}^nP_n = \frac{n!}{0!}\) and \({}^nC_n = 1\) true.`,
      { adv: R`A useful identity: \(\dfrac{(2n)!}{n!} = 2^n\,[1\cdot3\cdot5\cdots(2n - 1)]\). Separate the even factors of (2n)! as \(2\cdot4\cdots2n = 2^n n!\). For n = 3: 720/6 = 120 = 8 × 15.` },
      { check: { q: R`What is the value of 0!?`, ans: R`1.` } }
    ] },

    { h: R`Permutations: P(n, r)`, t: [1, 3], blocks: [
      R`A <b>permutation</b> is an arrangement of objects in a definite order. The number of arrangements of r objects chosen from n distinct objects (no repetition) is`,
      { derive: R`Formula for ⁿPᵣ`, open: true, steps: [R`The first place can be filled in n ways, the second in (n − 1), …, the r-th in (n − r + 1) ways.`, R`\[{}^nP_r = n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}, \qquad 0 \le r \le n\]`, R`In particular \({}^nP_n = n!\) and \({}^nP_0 = 1\).`] },
      { ex: { q: R`How many 4-digit numbers can be formed from the digits 1 to 9 if no digit repeats?`,
        steps: [R`\({}^9P_4 = 9 \times 8 \times 7 \times 6\).`], ans: R`3024` } },
      { ex: { q: R`How many 4-digit even numbers can be formed with the digits 0–9, without repetition?`,
        steps: [R`Last digit 0: the other three places 9 × 8 × 7 = 504.`, R`Last digit 2, 4, 6 or 8: first digit 8 choices (not 0, not the last digit), then 8 × 7: 4 × 8 × 8 × 7 = 1792.`], ans: R`2296` } },
      { ex: { q: R`If the letters of SACHIN are arranged in all possible ways and listed in dictionary order, what is the rank of the word SACHIN?`,
        steps: [R`Alphabetical order of the letters: A, C, H, I, N, S.`, R`Words beginning with A, C, H, I or N: 5 × 5! = 600.`, R`The first word beginning with S is S A C H I N itself.`], ans: R`601` } },
      { mistake: R`In "how many numbers" questions, forgetting that 0 cannot be the first digit. Fill the restricted place first (first digit, or last digit for even numbers), then the others.` },
      { check: { q: R`Find ⁵P₂.`, ans: R`5 × 4 = 20.` } }
    ] },

    { h: R`Permutations when some objects are alike`, t: [1], blocks: [
      R`The number of arrangements of n objects of which p are alike of one kind, q of another and r of a third (the rest distinct) is \[\frac{n!}{p!\,q!\,r!}.\] Swapping identical objects does not create a new arrangement, so we divide out those orderings.`,
      { ex: { q: R`How many arrangements are there of the letters of MISSISSIPPI?`,
        steps: [R`11 letters: M 1, I 4, S 4, P 2.`, R`\(\dfrac{11!}{4!\,4!\,2!}\).`], ans: R`34 650` } },
      { ex: { q: R`How many arrangements of ALLAHABAD are there? In how many of the arrangements of MISSISSIPPI are the four I's together?`,
        steps: [R`ALLAHABAD: 9 letters with A four times and L twice: \(\dfrac{9!}{4!\,2!}\).`, R`MISSISSIPPI with IIII as one block: 8 objects (M, block, S × 4, P × 2): \(\dfrac{8!}{4!\,2!}\).`], ans: R`7560; 840` } },
      { check: { q: R`How many distinct arrangements does BANANA have?`, ans: R`6!/(3! 2!) = 60.` } }
    ] },

    { h: R`Permutations with repetition allowed`, t: [1], blocks: [
      R`If each of r places can be filled by any of n distinct objects (repetition allowed), the number of arrangements is \(n^r\). Example: 4-digit PINs from 10 digits: \(10^4\) = 10 000.`,
      { ex: { q: R`In how many ways can 5 letters be posted in 3 letter boxes?`,
        steps: [R`Each letter has 3 choices, independently: \(3^5\).`], ans: R`243` } },
      { mistake: R`Writing 5³ for "5 letters in 3 boxes". Each letter (the object being placed) chooses a box, so it is (number of boxes)^(number of letters) = 3⁵.` },
      { ex: { q: R`How many functions are there from a set with 3 elements to a set with 4 elements?`,
        steps: [R`Each of the 3 elements independently chooses one of the 4 images.`], ans: R`4³ = 64` } },
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
      { fig: figGaps, cap: R`The gap method: once the 5 boys stand in a row there are 6 gaps (including both ends). Placing the girls in different gaps guarantees that no two are side by side.` },
      { ex: { q: R`In how many ways can 8 people sit at a round table if two particular people must sit together? And how many necklaces can be made from 6 different beads?`,
        steps: [R`Tie the two together: 7 units round a table, (7 − 1)! = 720, times 2 for the pair's order.`, R`Necklace: a flip gives the same necklace, so (6 − 1)!/2.`], ans: R`1440; 60` } },
      { ex: { q: R`In how many arrangements of the letters of ARTICLE do the vowels occupy only the even places?`,
        steps: [R`7 letters; even places 2, 4, 6 (three of them) for the vowels A, I, E: 3! ways.`, R`The 4 consonants fill the 4 odd places: 4! ways.`], ans: R`3! × 4! = 144` } },
      { tip: R`For round tables, fix one person first and arrange the rest in a line; then apply any other restriction exactly as you would for a row.` },
      { check: { q: R`In how many ways can 6 people sit at a round table?`, ans: R`5! = 120.` } }
    ] },

    { h: R`Combinations: C(n, r) and its properties`, t: [2], blocks: [
      R`A <b>combination</b> is a selection in which order does not matter. The number of ways to choose r objects from n distinct objects is \[{}^nC_r = \binom{n}{r} = \frac{n!}{r!\,(n - r)!}.\]`,
      { points: [R`\({}^nC_0 = {}^nC_n = 1\); \({}^nC_1 = n\).`, R`\({}^nC_r = {}^nC_{n-r}\) (choosing r to take = choosing n − r to leave). So if \({}^nC_x = {}^nC_y\), then x = y or x + y = n.`, R`<b>Pascal's rule:</b> \({}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r\).`, R`\({}^nC_r = \dfrac{n}{r}\,{}^{n-1}C_{r-1}\); \(\sum_{r=0}^{n} {}^nC_r = 2^n\).`] },
      { ex: { q: R`If \({}^nC_9 = {}^nC_8\), find \({}^nC_{17}\).`,
        steps: [R`9 + 8 = n ⟹ n = 17.`], ans: R`¹⁷C₁₇ = 1` } },
      { ex: { q: R`If \({}^{2n}C_3 : {}^nC_3 = 11 : 1\), find n.`,
        steps: [R`\(\dfrac{2n(2n - 1)(2n - 2)}{n(n - 1)(n - 2)} = \dfrac{4(2n - 1)}{n - 2} = 11\).`, R`8n − 4 = 11n − 22, so 3n = 18.`], ans: R`n = 6` } },
      R`<b>Why \({}^nC_r = {}^nC_{n-r}\) and Pascal's rule are true without algebra.</b> Choosing 3 players for a team out of 10 is the same as choosing the 7 who stay out, so \({}^{10}C_3 = {}^{10}C_7\). For Pascal's rule, look at one particular object: a selection of r from n + 1 either includes it (choose the other r − 1 from n) or leaves it out (choose all r from n), so \({}^{n+1}C_r = {}^nC_{r-1} + {}^nC_r\).`,
      { check: { q: R`Find ¹⁰C₃.`, ans: R`120.` } }
    ] },

    { h: R`Relation between P(n, r) and C(n, r)`, t: [2], blocks: [
      R`Each selection of r objects can be arranged in r! ways, so \[{}^nP_r = r!\,{^nC_r}.\] Counting arrangements = counting selections × arranging each selection. This is the bridge between the two ideas.`,
      { ex: { q: R`If \({}^nP_r = 720\) and \({}^nC_r = 120\), find r.`,
        steps: [R`r! = 720/120 = 6 ⟹ r = 3.`], ans: R`r = 3 (and n = 10)` } },
      { ex: { q: R`List the selections and the arrangements of 2 letters from A, B, C.`,
        steps: [R`Selections: {A, B}, {A, C}, {B, C}: ³C₂ = 3.`, R`Each selection can be written in 2! = 2 orders: AB, BA, AC, CA, BC, CB: ³P₂ = 6 = 2! × 3.`], ans: R`3 selections, 6 arrangements` } },
      { tip: R`Ask "does changing the order give something new?" A committee, a hand of cards or a set of chosen questions: no, so use C. A president-and-secretary pair, a number, a word or a queue: yes, so use P.` },
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
      { ex: { q: R`A student must answer 10 of 13 questions, including at least 4 of the first 5. In how many ways can the student choose?`,
        steps: [R`Exactly 4 of the first 5: ⁵C₄ × ⁸C₆ = 5 × 28 = 140.`, R`All 5 of the first 5: ⁵C₅ × ⁸C₅ = 56.`], ans: R`196` } },
      { ex: { q: R`A fruit basket has 3 apples, 4 oranges and 5 mangoes (fruits of one kind are identical). How many selections of at least one fruit are possible?`,
        steps: [R`Apples: take 0 to 3 (4 choices); oranges 5 choices; mangoes 6 choices.`, R`Subtract the empty selection.`], ans: R`4 × 5 × 6 − 1 = 119` } },
      { check: { q: R`How many divisors does 360 = 2³ · 3² · 5 have?`, ans: R`4 × 3 × 2 = 24.` } }
    ] },

    { h: R`Arrangement and selection problems`, t: [4], blocks: [
      R`Many problems need a selection followed by an arrangement: first choose (combinations), then arrange (multiply by the number of orders).`,
      { ex: { q: R`How many words (with or without meaning) of 3 consonants and 2 vowels can be formed from 7 consonants and 4 vowels?`,
        steps: [R`Choose: ⁷C₃ × ⁴C₂ = 35 × 6 = 210.`, R`Arrange the 5 letters: 5! = 120. Total 210 × 120.`], ans: R`25 200` } },
      R`<b>Distribution of identical objects:</b> the number of ways to put n identical objects into r distinct boxes (empty boxes allowed) is \({}^{n+r-1}C_{r-1}\) (stars and bars); with each box non-empty, \({}^{n-1}C_{r-1}\).`,
      { fig: figStars, cap: R`10 identical balls (circles) and 2 bars (dividers) in a row: every arrangement of the 12 symbols is one way of filling 3 boxes. Here the boxes get 2, 4 and 4 balls. Choosing which 2 of the 12 places hold the bars gives ¹²C₂ = 66 ways.` },
      { ex: { q: R`In how many ways can 10 identical balls be put into 3 distinct boxes?`,
        steps: [R`\({}^{10+3-1}C_{3-1} = {}^{12}C_2\).`], ans: R`66` } },
      { ex: { q: R`Find the number of solutions of x + y + z = 10 in (a) non-negative integers (b) positive integers.`,
        steps: [R`(a) This is the ball-and-box problem again: ¹²C₂ = 66.`, R`(b) Give each variable 1 first, leaving 7 to share freely: \({}^{7+2}C_2 = {}^9C_2\).`], ans: R`(a) 66 (b) 36` } },
      { ex: { q: R`In how many ways can 5 different balls be put into 3 different boxes so that no box is empty?`,
        steps: [R`All ways: 3⁵ = 243. Subtract those missing a particular box: 3 × 2⁵ = 96. Add back those missing two boxes (counted twice): 3 × 1 = 3.`], ans: R`243 − 96 + 3 = 150` } },
      { adv: R`<b>Dividing into groups:</b> 2n distinct objects into two equal unlabelled groups: \(\dfrac{(2n)!}{2!\,(n!)^2}\); into groups of sizes p, q, r (all different): \(\dfrac{(p+q+r)!}{p!\,q!\,r!}\). <b>Derangements</b> (no object in its own place): \(D_n = n!\left(1 - \frac1{1!} + \frac1{2!} - \dots + \frac{(-1)^n}{n!}\right)\); D₃ = 2, D₄ = 9.` },
      { ex: { q: R`In how many ways can 12 different books be divided into 3 unlabelled groups of 4?`,
        steps: [R`If the groups were labelled: \(\dfrac{12!}{4!\,4!\,4!}\). The 3 equal groups can be permuted among themselves in 3! ways without changing the division.`], ans: R`\(\dfrac{12!}{(4!)^3\,3!} = 5775\)` } },
      { check: { q: R`How many ways are there to choose 2 books from 5 and arrange them on a shelf?`, ans: R`⁵P₂ = 20.` } }
    ] },

    { h: R`Counting lines, triangles and diagonals`, t: [4], blocks: [
      R`From n points with no three collinear: lines \({}^nC_2\), triangles \({}^nC_3\). A polygon with n vertices has \({}^nC_2 - n = \dfrac{n(n-3)}{2}\) diagonals.`,
      { fig: figPolygon, cap: R`Every pair of vertices gives a side or a diagonal; subtracting the n sides leaves the diagonals.` },
      R`If m of the n points are collinear: lines \({}^nC_2 - {}^mC_2 + 1\); triangles \({}^nC_3 - {}^mC_3\).`,
      R`Why these corrections? Any two of the m collinear points would be counted as a different line, but they all give the <b>same</b> line: so remove the \({}^mC_2\) pairs and add that one line back. Three collinear points do not make a triangle at all, so the \({}^mC_3\) such choices are simply removed.`,
      { ex: { q: R`12 points lie in a plane, 5 of them on one line and no other three collinear. How many lines and triangles do they determine?`,
        steps: [R`Lines: ¹²C₂ − ⁵C₂ + 1 = 66 − 10 + 1 = 57.`, R`Triangles: ¹²C₃ − ⁵C₃ = 220 − 10 = 210.`], ans: R`57 lines; 210 triangles` } },
      { ex: { q: R`How many diagonals does a decagon have?`,
        steps: [R`¹⁰C₂ − 10 = 45 − 10.`], ans: R`35` } },
      { ex: { q: R`How many triangles can be formed from the vertices of an octagon if no side of the triangle is a side of the octagon?`,
        steps: [R`Total triangles ⁸C₃ = 56. A known formula for the "no common side" count is \(\dfrac{n(n - 4)(n - 5)}{6}\); for n = 8 it gives \(\dfrac{8\cdot4\cdot3}{6}\).`, R`Check by subtraction: triangles with exactly one side of the octagon: 8 × 4 = 32; with two sides: 8. 56 − 32 − 8 = 16.`], ans: R`16` } },
      { fig: figGrid, cap: R`Every rectangle on a grid is fixed by choosing 2 of the vertical lines (blue) and 2 of the horizontal lines (orange). A 4 × 4 grid has 5 lines each way, so ⁵C₂ × ⁵C₂ = 100 rectangles.` },
      { ex: { q: R`How many rectangles are there on an 8 × 8 chessboard?`,
        steps: [R`The board has 9 horizontal and 9 vertical lines: ⁹C₂ × ⁹C₂.`], ans: R`36 × 36 = 1296 (of which 1² + 2² + … + 8² = 204 are squares)` } },
      { check: { q: R`A polygon has 44 diagonals. How many sides does it have?`, ans: R`n(n − 3)/2 = 44 ⟹ n = 11.` } }
    ] }
  ],
  summary: [
    R`Multiplication principle (and) and addition principle (or). n! = n(n − 1)!, 0! = 1.`,
    R`ⁿPᵣ = n!/(n − r)!; alike objects n!/(p! q! r!); repetition nʳ; circular (n − 1)!, necklace (n − 1)!/2.`,
    R`Together: treat as a block; never together: gap method.`,
    R`ⁿCᵣ = n!/(r!(n − r)!); ⁿCᵣ = ⁿCₙ₋ᵣ; Pascal ⁿCᵣ + ⁿCᵣ₋₁ = ⁿ⁺¹Cᵣ; ⁿPᵣ = r! ⁿCᵣ; ΣⁿCᵣ = 2ⁿ.`,
    R`At least one = total − none; selections from identical groups (p + 1)(q + 1)… − 1; divisors (a + 1)(b + 1)…; n identical into r boxes ⁿ⁺ʳ⁻¹Cᵣ₋₁.`,
    R`Lines ⁿC₂, triangles ⁿC₃, diagonals n(n − 3)/2; with m collinear points subtract ᵐC₂ (add 1) and ᵐC₃.`,
    R`Rank in dictionary order: count the words that start with each smaller letter, then fix letters one by one.`,
    R`Distinct objects into r boxes, none empty: inclusion–exclusion rⁿ − ʳC₁(r − 1)ⁿ + …; rectangles on a grid: choose 2 lines each way.`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §9.5 Counting Principles`, url: 'https://openstax.org/books/college-algebra-2e/pages/9-5-counting-principles' },
    { t: R`Wikipedia: Permutation`, url: 'https://en.wikipedia.org/wiki/Permutation' },
    { t: R`Wikipedia: Combination`, url: 'https://en.wikipedia.org/wiki/Combination' },
    { t: R`Wikipedia: Stars and bars (combinatorics)`, url: 'https://en.wikipedia.org/wiki/Stars_and_bars_(combinatorics)' }
  ]
});
})();
