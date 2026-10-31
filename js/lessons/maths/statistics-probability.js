// Lesson: Statistics and Probability.
var R = String.raw;
JEE.lesson('maths', 'statistics-probability', {
  theory: [
    { h: R`Mean, median and mode`,
      body: [
        R`These three numbers describe the "centre" of a data set.`,
        R`<b>Mean</b> (average) = sum of the values ÷ number of values. For a frequency table: \(\bar x = \dfrac{\sum f_ix_i}{\sum f_i}\).`,
        R`<b>Median</b> = the middle value once the data is sorted (for an even count, the average of the two middle values). It isn't pulled around by a few extreme values. <b>Mode</b> = the value that occurs most often.`,
        R`For grouped data, median \(= l + \dfrac{\frac N2 - cf}{f}\times h\), where l is the lower limit of the median class, cf the cumulative frequency before it, f its frequency, and h the class width.`
      ],
      analogy: R`If one billionaire walks into a tea stall, the mean income of the people there shoots up, but the median barely changes. That's why median income is often reported.`,
      check: { q: R`Find the median of 3, 1, 7, 5, 9.`, ans: R`Sorted: 1, 3, 5, 7, 9. The middle value is 5.` } },

    { h: R`Measuring spread: range and mean deviation`,
      body: [
        R`Two classes can have the same average marks but very different spreads. <b>Dispersion</b> measures how spread out the data is.`,
        R`<b>Range</b> = largest − smallest. <b>Mean deviation</b> about a point a = the average of \(|x_i - a|\). Mean deviation about the median is the smallest possible.`
      ] },

    { h: R`Variance and standard deviation`,
      body: [
        R`<b>Variance</b> \(\sigma^2 = \dfrac{\sum(x_i - \bar x)^2}{n} = \dfrac{\sum x_i^2}{n} - \bar x^2\). <b>Standard deviation</b> σ is its square root, in the same units as the data.`,
        R`Adding a constant to every value doesn't change σ (shifting doesn't change spread). Multiplying every value by k multiplies σ by |k| and the variance by \(k^2\).`,
        R`The <b>coefficient of variation</b> \(\dfrac{\sigma}{\bar x}\times100\) compares the consistency of two data sets: the smaller it is, the more consistent.`
      ],
      mistake: R`Thinking variance changes when you add 10 to every mark. It doesn't; only the mean changes.` },

    { h: R`What is probability?`,
      body: [
        R`An <b>experiment</b> has possible outcomes, which together form the <b>sample space</b> S. An <b>event</b> is a set of outcomes we're interested in.`,
        R`If all outcomes are equally likely: \(P(E) = \dfrac{\text{number of favourable outcomes}}{\text{total number of outcomes}}\).`,
        R`\(0 \le P(E) \le 1\); an impossible event has probability 0 and a sure event has 1. The <b>complement</b> ("not E") has \(P(E') = 1 - P(E)\), which is very handy for "at least one" questions.`
      ],
      analogy: R`Rolling a fair die is like picking one of 6 identical chits from a box. Each chit has an equal chance, 1/6.` },

    { h: R`Addition and multiplication theorems`,
      body: [
        R`<b>Addition theorem:</b> \(P(A\cup B) = P(A) + P(B) - P(A\cap B)\). If A and B are <b>mutually exclusive</b> (they can't happen together), \(P(A\cup B) = P(A) + P(B)\).`,
        R`<b>Conditional probability</b> ("A given that B happened"): \(P(A|B) = \dfrac{P(A\cap B)}{P(B)}\).`,
        R`<b>Multiplication theorem:</b> \(P(A\cap B) = P(B)\,P(A|B)\). A and B are <b>independent</b> (one doesn't affect the other) if \(P(A\cap B) = P(A)P(B)\).`
      ],
      mistake: R`Confusing "mutually exclusive" with "independent". Mutually exclusive events (with non-zero probabilities) can never be independent: if one happens, the other definitely can't.` },

    { h: R`Total probability and Bayes' theorem`,
      body: [
        R`If \(E_1, E_2, \dots\) are mutually exclusive causes that cover all possibilities, then \(P(A) = \sum P(E_i)P(A|E_i)\) (<b>total probability</b>).`,
        R`<b>Bayes' theorem</b> works backwards from an observed result to its likely cause: \(P(E_i|A) = \dfrac{P(E_i)P(A|E_i)}{\sum_jP(E_j)P(A|E_j)}\).`
      ],
      analogy: R`A doctor sees a positive test result (A) and asks, "how likely is it that the patient really has the disease (Eᵢ)?" Bayes' theorem answers exactly that, and the answer often surprises people.` },

    { h: R`Random variables and the binomial distribution`,
      body: [
        R`A <b>random variable</b> X assigns a number to each outcome (for example, the number of heads). Its <b>probability distribution</b> lists each value with its probability; the probabilities add up to 1.`,
        R`Mean (expected value) \(E(X) = \sum x_ip_i\); variance \(= \sum x_i^2p_i - [E(X)]^2\).`,
        R`<b>Binomial distribution:</b> for n independent trials, each a success with probability p: \(P(X = r) = {}^nC_rp^rq^{n-r}\), with \(q = 1 - p\). Mean = np, variance = npq.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find the mean of 4, 8, 6, 2 and the median of 3, 1, 7, 5, 9.`,
      steps: [R`Mean = (4 + 8 + 6 + 2)/4 = 20/4.`, R`Sort the second set: 1, 3, 5, 7, 9. The middle value is 5.`],
      ans: R`Mean 5; median 5` },
    { level: 1, t: 2, q: R`A die is rolled. What is the probability of getting an even number?`,
      steps: [R`Favourable outcomes: 2, 4, 6 (3 of them). Total: 6.`],
      ans: R`3/6 = 1/2` },
    { level: 1, t: 2, q: R`One card is drawn from a well-shuffled pack of 52. Find the probability that it is (a) red (b) a king.`,
      steps: [R`(a) 26 red cards out of 52.`, R`(b) 4 kings out of 52.`],
      ans: R`(a) 1/2 (b) 1/13` },
    { level: 3, t: 4, q: R`1% of people have a certain disease. A test detects it 99% of the time, and wrongly shows "positive" for 1% of healthy people. If a person tests positive, what is the probability that they actually have the disease?`,
      steps: [R`P(D) = 0.01, P(+|D) = 0.99; P(healthy) = 0.99, P(+|healthy) = 0.01.`, R`Bayes: \(P(D|+) = \dfrac{0.01\times0.99}{0.01\times0.99 + 0.99\times0.01}\).`],
      ans: R`0.5, only a 50% chance, because healthy people far outnumber sick ones` },
    { level: 3, t: 5, q: R`A fair die is rolled 4 times. What is the probability of getting at least one six?`,
      steps: [R`Use the complement: P(no six in 4 rolls) = \((5/6)^4 = 625/1296\).`, R`P(at least one) = 1 − 625/1296.`],
      ans: R`\(671/1296 \approx 0.518\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The mean of 2, 4, 6, 8 is:`,
      options: [R`5`, R`4`, R`6`, R`20`], correct: 0,
      solution: R`20/4 = 5.` },
    { level: 1, type: 'mcq', q: R`The probability of an impossible event is:`,
      options: [R`1`, R`0.5`, R`−1`, R`0`], correct: 3,
      solution: R`It can never happen, so its probability is 0.` },
    { level: 1, type: 'mcq', q: R`When a fair coin is tossed, the probability of a head is:`,
      options: [R`1`, R`1/2`, R`1/4`, R`0`], correct: 1,
      solution: R`1 favourable outcome out of 2.` },
    { level: 1, type: 'mcq', q: R`The mode of 2, 3, 3, 5, 3, 7 is:`,
      options: [R`2`, R`5`, R`3`, R`7`], correct: 2,
      solution: R`3 occurs most often (three times).` },
    { level: 1, type: 'num', q: R`Find the median of 3, 1, 7, 5, 9.`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`Sorted: 1, 3, 5, 7, 9; the middle value is 5.` },
    { level: 1, type: 'num', q: R`A die is rolled. Find the probability (as a decimal) of an even number.`,
      answer: 0.5, tol: 0.001, unit: '',
      solution: R`3/6 = 0.5.` },
    { level: 2, type: 'mcq', q: R`If A and B are mutually exclusive, \(P(A\cup B)\) equals:`,
      options: [R`P(A)P(B)`, R`P(A) + P(B)`, R`P(A) + P(B) − 1`, R`1`], correct: 1,
      solution: R`\(P(A\cap B) = 0\), so nothing needs to be subtracted.` },
    { level: 2, type: 'mcq', q: R`If every observation is multiplied by 3, the variance becomes:`,
      options: [R`unchanged`, R`3 times`, R`9 times`, R`one-third`], correct: 2,
      solution: R`Variance scales by \(k^2 = 9\).` },
    { level: 2, type: 'mcq', q: R`Events A and B are independent when \(P(A\cap B)\) equals:`,
      options: [R`P(A) + P(B)`, R`0`, R`P(A|B)P(A)`, R`P(A)P(B)`], correct: 3,
      solution: R`That is the definition of independence.` },
    { level: 2, type: 'mcq', q: R`In any probability distribution, the probabilities add up to:`,
      options: [R`1`, R`0`, R`it depends`, R`infinity`], correct: 0,
      solution: R`Something must happen: the total is always 1.` },
    { level: 2, type: 'num', q: R`Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`Mean = 40/8 = 5. Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16, total 32. Variance = 32/8 = 4, so σ = 2.` },
    { level: 2, type: 'num', q: R`Two dice are thrown. Find the probability that the sum is 8 (to 4 decimal places).`,
      answer: 0.1389, tol: 0.0005, unit: '',
      solution: R`(2,6), (3,5), (4,4), (5,3), (6,2): 5 out of 36 ≈ 0.1389.` },
    { level: 2, type: 'num', q: R`Find the mean of a binomial distribution with n = 20 and p = 0.3.`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`np = 20 × 0.3 = 6.` },
    { level: 3, type: 'mcq', q: R`1% of people have a disease, and a test is 99% accurate for both sick and healthy people. Given a positive result, the probability of actually having the disease is:`,
      options: [R`0.99`, R`0.5`, R`0.01`, R`0.1`], correct: 1,
      solution: R`Bayes: \(\dfrac{0.0099}{0.0099 + 0.0099} = 0.5\).` },
    { level: 3, type: 'mcq', q: R`P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2. The events A and B are:`,
      options: [R`mutually exclusive`, R`complementary`, R`impossible`, R`independent`], correct: 3,
      solution: R`P(A)P(B) = 0.2 = P(A ∩ B).` },
    { level: 3, type: 'num', q: R`A fair die is rolled 4 times. Find the probability of at least one six (to 4 decimal places).`,
      answer: 0.5177, tol: 0.001, unit: '',
      solution: R`\(1 - (5/6)^4 = 671/1296 \approx 0.5177\).` },
    { level: 3, type: 'num', q: R`Find the variance of a binomial distribution with n = 10 and p = 0.5.`,
      answer: 2.5, tol: 0.001, unit: '',
      solution: R`npq = 10 × 0.5 × 0.5 = 2.5.` }
  ]
});
