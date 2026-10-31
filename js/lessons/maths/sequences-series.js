// Lesson: Sequences and Series.
var R = String.raw;
JEE.lesson('maths', 'sequences-series', {
  theory: [
    { h: R`Sequences and series`,
      body: [
        R`A <b>sequence</b> is a list of numbers in a definite order, following a rule: 2, 4, 6, 8, … Its terms are written \(a_1, a_2, a_3, \dots\), with \(a_n\) as the nth (general) term.`,
        R`A <b>series</b> is what you get when you add the terms: \(2 + 4 + 6 + 8 + \dots\). The sum of the first n terms is \(S_n\).`
      ],
      analogy: R`Saving ₹10 more each week than the week before (10, 20, 30, …) is a sequence. Your total savings after many weeks is the series.` },

    { h: R`Arithmetic progression (AP)`,
      body: [
        R`In an <b>AP</b>, each term is the previous one plus a fixed <b>common difference</b> d: \(a, a + d, a + 2d, \dots\)`,
        R`nth term: \(a_n = a + (n - 1)d\). Sum of n terms: \(S_n = \dfrac n2[2a + (n - 1)d] = \dfrac n2(\text{first} + \text{last})\).`,
        R`Handy tricks: take three terms in AP as \(a - d, a, a + d\), so their sum is just 3a. The middle term of three AP terms is the average of the other two.`
      ],
      check: { q: R`Find the 10th term of the AP 3, 7, 11, …`, ans: R`\(a = 3\), \(d = 4\): \(3 + 9\times4 = 39\).` } },

    { h: R`Geometric progression (GP)`,
      body: [
        R`In a <b>GP</b>, each term is the previous one multiplied by a fixed <b>common ratio</b> r: \(a, ar, ar^2, \dots\)`,
        R`nth term: \(a_n = ar^{n-1}\). Sum of n terms: \(S_n = \dfrac{a(r^n - 1)}{r - 1}\) (for \(r \ne 1\)).`,
        R`If \(|r| < 1\), the terms shrink towards zero and the infinite sum has a finite value: \(S_\infty = \dfrac{a}{1 - r}\).`
      ],
      analogy: R`A bouncing ball that rises to half its previous height each time makes a GP of heights. The total distance it travels is finite, even with infinitely many bounces.`,
      mistake: R`Using \(S_\infty = a/(1 - r)\) when \(|r| \ge 1\). Then the series doesn't add up to a finite number.` },

    { h: R`Inserting means between two numbers`,
      body: [
        R`<b>n arithmetic means</b> between a and b: they form an AP with b as the \((n + 2)\)th term, so \(d = \dfrac{b - a}{n + 1}\).`,
        R`<b>n geometric means</b> between a and b: \(r = \left(\dfrac ba\right)^{\frac{1}{n + 1}}\).`,
        R`The single AM of a and b is \(\dfrac{a + b}{2}\); the single GM is \(\sqrt{ab}\); the single HM is \(\dfrac{2ab}{a + b}\).`
      ] },

    { h: R`AM ≥ GM`,
      body: [
        R`For positive numbers, the <b>arithmetic mean is always at least the geometric mean</b>: \(\dfrac{a + b}{2} \ge \sqrt{ab}\), with equality only when \(a = b\). In general, AM ≥ GM ≥ HM, and \(G^2 = AH\) for two numbers.`,
        R`<b>Why it's useful:</b> it finds maximum and minimum values quickly. If a + b is fixed, ab is largest when a = b. If ab is fixed, a + b is smallest when a = b.`
      ],
      analogy: R`Of all rectangles with the same perimeter, the square has the largest area. That is AM ≥ GM in disguise: the sides add to a fixed number, and the product is largest when the sides are equal.`,
      check: { q: R`For x > 0, what is the minimum value of \(x + \dfrac1x\)?`, ans: R`2, reached when x = 1.` } },

    { h: R`Useful standard sums`,
      body: [
        R`\(\sum_{k=1}^n k = \dfrac{n(n + 1)}{2}\); \(\sum k^2 = \dfrac{n(n + 1)(2n + 1)}{6}\); \(\sum k^3 = \left[\dfrac{n(n + 1)}{2}\right]^2\).`,
        R`The sum of the first n odd numbers is \(n^2\).`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find the 10th term of the AP 3, 7, 11, …`,
      steps: [R`\(a = 3\), \(d = 4\).`, R`\(a_{10} = 3 + 9\times4\).`],
      ans: R`39` },
    { level: 1, t: 0, q: R`Find the 6th term of the GP 2, 6, 18, …`,
      steps: [R`\(a = 2\), \(r = 3\).`, R`\(a_6 = 2\times3^5 = 2\times243\).`],
      ans: R`486` },
    { level: 1, t: 1, q: R`Find the AM and GM of 4 and 16.`,
      steps: [R`AM \(= (4 + 16)/2 = 10\).`, R`GM \(= \sqrt{4\times16} = \sqrt{64}\).`],
      ans: R`AM 10, GM 8 (AM ≥ GM, as expected)` },
    { level: 2, t: 0, q: R`Find the sum of the first 10 terms of the GP 1, 2, 4, 8, …`,
      steps: [R`\(S_{10} = \dfrac{1(2^{10} - 1)}{2 - 1}\).`],
      ans: R`1023` },
    { level: 3, t: 2, q: R`Two positive numbers add up to 10. What is the largest their product can be?`,
      steps: [R`AM ≥ GM: \(\dfrac{a + b}{2} \ge \sqrt{ab}\), so \(5 \ge \sqrt{ab}\) and \(ab \le 25\).`, R`Equality holds when a = b = 5.`],
      ans: R`25` },
    { level: 3, t: 0, q: R`Three numbers in AP add up to 15 and multiply to 80. Find them.`,
      steps: [R`Take \(a - d, a, a + d\): the sum is 3a = 15, so a = 5.`, R`Product: \((5 - d)(5)(5 + d) = 80\), so \(25 - d^2 = 16\) and \(d = \pm3\).`],
      ans: R`2, 5, 8 (or 8, 5, 2)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The common difference of the AP 5, 8, 11, … is:`,
      options: [R`2`, R`3`, R`5`, R`8`], correct: 1,
      solution: R`8 − 5 = 3.` },
    { level: 1, type: 'mcq', q: R`The common ratio of the GP 2, 6, 18, … is:`,
      options: [R`3`, R`2`, R`4`, R`6`], correct: 0,
      solution: R`6/2 = 3.` },
    { level: 1, type: 'mcq', q: R`The arithmetic mean of 6 and 10 is:`,
      options: [R`16`, R`60`, R`4`, R`8`], correct: 3,
      solution: R`(6 + 10)/2 = 8.` },
    { level: 1, type: 'mcq', q: R`The geometric mean of 4 and 9 is:`,
      options: [R`6.5`, R`36`, R`6`, R`13`], correct: 2,
      solution: R`\(\sqrt{36} = 6\).` },
    { level: 1, type: 'num', q: R`Find the 10th term of the AP 3, 7, 11, …`,
      answer: 39, tol: 0.001, unit: '',
      solution: R`3 + 9 × 4 = 39.` },
    { level: 1, type: 'num', q: R`Find the sum of the first 10 natural numbers.`,
      answer: 55, tol: 0.001, unit: '',
      solution: R`\(10\times11/2 = 55\).` },
    { level: 2, type: 'mcq', q: R`An infinite GP has a finite sum only when:`,
      options: [R`r > 1`, R`|r| < 1`, R`r = 1`, R`for any r`], correct: 1,
      solution: R`Only then do the terms shrink to zero fast enough.` },
    { level: 2, type: 'mcq', q: R`The nth term of a GP with first term a and ratio r is:`,
      options: [R`\(ar^n\)`, R`\(a + (n - 1)r\)`, R`\(ar^{n+1}\)`, R`\(ar^{n-1}\)`], correct: 3,
      solution: R`The first term is \(ar^0\), so the nth term is \(ar^{n-1}\).` },
    { level: 2, type: 'mcq', q: R`For two positive numbers, the AM, GM and HM satisfy:`,
      options: [R`AM ≥ GM ≥ HM`, R`HM ≥ GM ≥ AM`, R`GM ≥ AM ≥ HM`, R`AM = GM = HM always`], correct: 0,
      solution: R`AM ≥ GM ≥ HM, with equality only when the numbers are equal.` },
    { level: 2, type: 'mcq', q: R`The sum of the first n odd numbers, 1 + 3 + 5 + …, is:`,
      options: [R`n`, R`2n`, R`n(n + 1)`, R`\(n^2\)`], correct: 3,
      solution: R`\(\dfrac n2[2 + (n - 1)2] = n^2\).` },
    { level: 2, type: 'num', q: R`Find the sum of the first 10 terms of 1 + 2 + 4 + 8 + …`,
      answer: 1023, tol: 0.001, unit: '',
      solution: R`\(2^{10} - 1 = 1023\).` },
    { level: 2, type: 'num', q: R`Find the sum to infinity of 6 + 3 + 1.5 + …`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`\(a = 6\), \(r = 1/2\): \(6/(1 - 1/2) = 12\).` },
    { level: 2, type: 'num', q: R`Find \(1^3 + 2^3 + 3^3 + 4^3 + 5^3\).`,
      answer: 225, tol: 0.001, unit: '',
      solution: R`\((5\times6/2)^2 = 15^2 = 225\).` },
    { level: 3, type: 'mcq', q: R`If a and b are positive and a + b = 10, the maximum value of ab is:`,
      options: [R`20`, R`25`, R`50`, R`100`], correct: 1,
      solution: R`AM ≥ GM gives \(ab \le 25\), with equality at a = b = 5.` },
    { level: 3, type: 'mcq', q: R`Three numbers in AP have sum 15 and product 80. The numbers are:`,
      options: [R`1, 5, 9`, R`3, 5, 7`, R`2, 5, 8`, R`4, 5, 6`], correct: 2,
      solution: R`Middle term 5; \(25 - d^2 = 16\) gives d = 3.` },
    { level: 3, type: 'num', q: R`How many terms of the AP 3, 7, 11, … must be added to get a sum of 210?`,
      answer: 10, tol: 0.001, unit: '',
      solution: R`\(\dfrac n2[6 + 4(n - 1)] = 210\), so \(2n^2 + n - 210 = 0\) and n = 10.` },
    { level: 3, type: 'num', q: R`For x > 0, find the minimum value of \(4x + \dfrac9x\).`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`AM ≥ GM: \(4x + 9/x \ge 2\sqrt{36} = 12\), reached at x = 3/2.` }
  ]
});
