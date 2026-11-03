// Book chapter: Statistics and Probability. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 11, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function normal(mu, s) { return function (x) { return Math.exp(-Math.pow(x - mu, 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI)); }; }

// ---------- figures ----------
var freq = [5, 8, 15, 16, 6];
var figHist = D.plot({ w: 360, h: 230, x: [-2, 54], y: [0, 19], noOrigin: true, ylabel: 'frequency', mathLabels: false, xticks: [0, 10, 20, 30, 40, 50].map(function (v) { return [v, String(v)]; }), yticks: [[5, '5'], [10, '10'], [15, '15']],
  extra: function (X, Y) {
    var o = [];
    freq.forEach(function (f, i) { o.push(D.rect(X(i * 10), Y(f), X(10) - X(0), Y(0) - Y(f), { color: i === 3 ? 'o' : 'b', fill: 'soft', w: 1.2 })); o.push(D.text(X(i * 10 + 5), Y(f) - 8, String(f), { size: 10, math: false })); });
    o.push(D.line(X(27), Y(0), X(27), Y(18), { color: 'r', w: 1.6, dash: '5 4' }), D.text(X(27), Y(18.6), 'mean 27', { size: 10, math: false, color: 'r' }));
    return o;
  }, label: 'Histogram of a grouped frequency distribution' });

var figSpread = D.plot({ w: 360, h: 210, x: [-6, 6], y: [0, 0.45], noOrigin: true, xticks: [[0, 'mean']], yticks: [],
  fns: [{ f: normal(0, 1), color: 'b', label: 'σ small', lx: 1.1, ly: 0.36, math: false }, { f: normal(0, 2.2), color: 'o', label: 'σ large', lx: 3.4, ly: 0.12, math: false }],
  label: 'Same mean, different spread' });

var figTree = D.svg(440, 200, [
  lab(20, 100, 'start', 'm', 10), D.line(45, 100, 130, 50, { color: 'b', w: 1.6 }), D.line(45, 100, 130, 150, { color: 'o', w: 1.6 }),
  lab(80, 64, '½', 'm', 11), lab(80, 138, '½', 'm', 11), lab(150, 50, 'Bag I', 'b', 12, { bold: true }), lab(150, 150, 'Bag II', 'o', 12, { bold: true }),
  D.line(180, 50, 280, 25, { color: 'r', w: 1.4 }), D.line(180, 50, 280, 75, { color: 'k', w: 1.4 }), D.line(185, 150, 280, 125, { color: 'r', w: 1.4 }), D.line(185, 150, 280, 175, { color: 'k', w: 1.4 }),
  lab(228, 28, '3/5', 'm', 10), lab(228, 72, '2/5', 'm', 10), lab(228, 128, '1/3', 'm', 10), lab(228, 172, '2/3', 'm', 10),
  lab(300, 25, 'red: ½ × 3/5 = 3/10', 'r', 10, { anchor: 'start' }), lab(300, 75, 'black', 'k', 10, { anchor: 'start' }), lab(300, 125, 'red: ½ × 1/3 = 1/6', 'r', 10, { anchor: 'start' }), lab(300, 175, 'black', 'k', 10, { anchor: 'start' })
], 'Probability tree for two bags');

var figRV = D.plot({ w: 300, h: 200, x: [0, 4.7], y: [0, 0.48], noOrigin: true, xlabel: 'x', ylabel: 'P(X = x)', mathLabels: false, xticks: [0, 1, 2, 3].map(function (v) { return [v + 1, String(v)]; }), yticks: [[0.125, '1/8'], [0.375, '3/8']],
  extra: function (X, Y) { return [0, 1, 2, 3].map(function (x) { var p = [1, 3, 3, 1][x] / 8; return D.rect(X(x + 0.85), Y(p), X(0.3) - X(0), Y(0) - Y(p), { color: 'b', fill: 'soft', w: 1.4 }); }).concat([D.line(X(2.5), Y(0), X(2.5), Y(0.44), { color: 'r', w: 1.6, dash: '5 4' }), D.text(X(2.5), Y(0.465), 'mean 1.5', { size: 10, color: 'r' })]); }, label: 'Distribution of the number of heads in 3 tosses' });

// ---------- chapter text ----------
JEE.book('maths', 'statistics-probability', {
  intro: [
    R`Statistics summarises data: where it is centred and how spread out it is. Probability measures how likely an event is, from coin tosses to quality control. Together they are the mathematics of uncertainty.`,
    R`This chapter covers mean, median and mode (for raw and grouped data), measures of dispersion (range, mean deviation, variance, standard deviation), probability with sample spaces and counting, the addition and multiplication theorems, conditional probability, total probability and Bayes' theorem, and random variables with their mean and variance.`
  ],
  sections: [
    { h: R`Mean, median and mode of ungrouped data`, t: [0], blocks: [
      { points: [R`<b>Mean:</b> \(\bar x = \dfrac{\sum x_i}{n}\); for a frequency table \(\bar x = \dfrac{\sum f_ix_i}{\sum f_i}\).`, R`<b>Median:</b> the middle value of the ordered data: the \(\frac{n + 1}{2}\)th value if n is odd; the average of the \(\frac n2\)th and \((\frac n2 + 1)\)th values if n is even.`, R`<b>Mode:</b> the most frequent value.`, R`For moderately skewed data: mode ≈ 3 median − 2 mean.`] },
      { ex: { q: R`Find the mean, median and mode of 2, 4, 4, 5, 7, 8.`,
        steps: [R`Mean = 30/6 = 5.`, R`n = 6: median = (4 + 5)/2 = 4.5.`, R`4 occurs twice: mode 4.`], ans: R`5, 4.5, 4` } },
      { tip: R`If every observation is multiplied by k and increased by c, the mean, median and mode become k(·) + c; the standard deviation becomes |k| times (unaffected by c).` },
      { check: { q: R`Find the median of 3, 9, 1, 7, 5.`, ans: R`Ordered 1, 3, 5, 7, 9: median 5.` } }
    ] },

    { h: R`Mean, median and mode of grouped data`, t: [0], blocks: [
      R`For a grouped distribution with class marks (midpoints) \(x_i\) and frequencies \(f_i\), N = Σfᵢ, class width h:`,
      { points: [R`<b>Mean:</b> \(\bar x = \dfrac{\sum f_ix_i}{N}\), or with step deviation \(u_i = \frac{x_i - A}{h}\): \(\bar x = A + h\,\dfrac{\sum f_iu_i}{N}\).`, R`<b>Median:</b> \(l + \dfrac{\frac N2 - C}{f}\,h\), where l is the lower limit of the median class (the class containing the N/2th value), C the cumulative frequency before it, f its frequency.`, R`<b>Mode:</b> \(l + \dfrac{f_1 - f_0}{2f_1 - f_0 - f_2}\,h\), where f₁ is the frequency of the modal class and f₀, f₂ those of the classes before and after.`] },
      { fig: figHist, cap: R`Frequencies 5, 8, 15, 16, 6 in classes 0–10, …, 40–50; the modal class (30–40) is highlighted.` },
      { ex: { q: R`For the distribution in the figure, find the mean, median and mode.`,
        steps: [R`Σfx = 5·5 + 8·15 + 15·25 + 16·35 + 6·45 = 1350; N = 50: mean = 27.`, R`N/2 = 25; cumulative 5, 13, 28 → median class 20–30: 20 + (25 − 13)/15 × 10 = 28.`, R`Modal class 30–40 (f₁ = 16, f₀ = 15, f₂ = 6): 30 + 1/(32 − 21) × 10 = 30.9.`], ans: R`mean 27, median 28, mode ≈ 30.9` } },
      { check: { q: R`What is the class mark of the class 20–30?`, ans: R`25.` } }
    ] },

    { h: R`Range and mean deviation`, t: [1], blocks: [
      R`<b>Range</b> = largest − smallest value (simple, but depends only on two values). The <b>mean deviation</b> about a central value a (mean or median) is \[\text{MD}(a) = \frac{\sum |x_i - a|}{n} \quad\text{or}\quad \frac{\sum f_i|x_i - a|}{N}.\] The mean deviation is least when taken about the median.`,
      { ex: { q: R`Find the mean deviation about the mean of 2, 4, 4, 5, 7, 8.`,
        steps: [R`Mean 5; |deviations| 3, 1, 1, 0, 2, 3; sum 10.`], ans: R`10/6 ≈ 1.67` } },
      { check: { q: R`Find the range of 12, 7, 19, 3, 10.`, ans: R`19 − 3 = 16.` } }
    ] },

    { h: R`Variance and standard deviation`, t: [1], blocks: [
      R`<b>Variance</b> is the mean of the squared deviations from the mean, and the <b>standard deviation</b> σ is its square root: \[\sigma^2 = \frac{\sum (x_i - \bar x)^2}{n} = \frac{\sum x_i^2}{n} - \bar x^2, \qquad \sigma^2 = \frac{\sum f_i x_i^2}{N} - \bar x^2.\] With step deviations: \(\sigma^2 = h^2\left[\dfrac{\sum f_iu_i^2}{N} - \left(\dfrac{\sum f_iu_i}{N}\right)^2\right]\).`,
      { ex: { q: R`Find the variance and standard deviation of 2, 4, 4, 5, 7, 8.`,
        steps: [R`Squared deviations from 5: 9, 1, 1, 0, 4, 9; sum 24.`, R`σ² = 24/6 = 4.`], ans: R`variance 4, σ = 2` } },
      { points: [R`Adding a constant to every value does not change σ; multiplying by k multiplies σ by |k| and σ² by k².`, R`Variance of the first n natural numbers is \(\dfrac{n^2 - 1}{12}\).`, R`For two groups combined: \(\sigma^2 = \dfrac{n_1(\sigma_1^2 + d_1^2) + n_2(\sigma_2^2 + d_2^2)}{n_1 + n_2}\), where \(d_i = \bar x_i - \bar x\).`] },
      { check: { q: R`If the SD of a set is 3, what is the SD after multiplying every value by −2?`, ans: R`6.` } }
    ] },

    { h: R`Distributions with the same mean but different variances`, t: [1], blocks: [
      R`Two data sets may have the same mean but very different spreads. To compare variability, especially when means differ, use the <b>coefficient of variation</b>: \[\text{CV} = \frac{\sigma}{\bar x}\times 100.\] The series with the larger CV is more variable (less consistent).`,
      { fig: figSpread, cap: R`Both distributions have the same mean; the orange one is more spread out (larger σ).` },
      { ex: { q: R`Batsman A: mean 50, σ = 15; batsman B: mean 40, σ = 10. Who is more consistent?`,
        steps: [R`CV(A) = 30%; CV(B) = 25%.`], ans: R`B (smaller CV)` } },
      { check: { q: R`What is the CV of a set with mean 20 and SD 4?`, ans: R`20%.` } }
    ] },

    { h: R`Random experiments, outcomes and sample space`, t: [2], blocks: [
      R`A <b>random experiment</b> has more than one possible outcome, and the outcome cannot be predicted in advance (tossing a coin, rolling a die). The set of all possible outcomes is the <b>sample space</b> S. Tossing two coins: S = {HH, HT, TH, TT}; rolling two dice: 36 ordered pairs.`,
      { check: { q: R`How many outcomes are in the sample space of tossing 3 coins?`, ans: R`2³ = 8.` } }
    ] },

    { h: R`Types of events`, t: [2], blocks: [
      R`An <b>event</b> is a subset of S.`,
      { points: [R`<b>Impossible event</b> ∅; <b>sure event</b> S.`, R`<b>Simple (elementary)</b> event: one outcome; <b>compound</b> event: more than one.`, R`<b>Complement</b> A′ (not A): \(P(A') = 1 - P(A)\).`, R`<b>Mutually exclusive</b> events cannot happen together: A ∩ B = ∅.`, R`<b>Exhaustive</b> events: their union is S. Events that are both mutually exclusive and exhaustive partition S.`] },
      { check: { q: R`When a die is rolled, are "even" and "odd" mutually exclusive and exhaustive?`, ans: R`Yes, both.` } }
    ] },

    { h: R`Probability of an event; counting methods`, t: [2], blocks: [
      R`For a sample space of equally likely outcomes, \[P(A) = \frac{n(A)}{n(S)}.\] Axioms: 0 ≤ P(A) ≤ 1, P(S) = 1, and P(A ∪ B) = P(A) + P(B) for mutually exclusive A and B. For larger problems, count n(A) and n(S) with permutations and combinations.`,
      { ex: { q: R`Two dice are thrown. Find the probability that the sum is 7.`,
        steps: [R`Favourable: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 of 36.`], ans: R`1/6` } },
      { ex: { q: R`3 people are chosen at random from 5 boys and 4 girls. Find the probability that exactly 2 are girls.`,
        steps: [R`n(S) = ⁹C₃ = 84; n(A) = ⁴C₂ × ⁵C₁ = 30.`], ans: R`30/84 = 5/14` } },
      { check: { q: R`A card is drawn from a pack of 52. What is the probability that it is an ace?`, ans: R`4/52 = 1/13.` } }
    ] },

    { h: R`Addition theorem of probability`, t: [3], blocks: [
      R`\[P(A \cup B) = P(A) + P(B) - P(A \cap B).\] For three events: \(P(A\cup B\cup C) = \sum P(A) - \sum P(A\cap B) + P(A\cap B\cap C)\). If A and B are mutually exclusive, P(A ∪ B) = P(A) + P(B).`,
      { ex: { q: R`A card is drawn from a pack. Find the probability that it is a king or a heart.`,
        steps: [R`P(K) = 4/52, P(H) = 13/52, P(K ∩ H) = 1/52.`], ans: R`16/52 = 4/13` } },
      { check: { q: R`If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, find P(A ∪ B).`, ans: R`0.7.` } }
    ] },

    { h: R`Conditional probability`, t: [3], blocks: [
      R`The probability of A given that B has occurred (P(B) > 0) is \[P(A \mid B) = \frac{P(A \cap B)}{P(B)}.\] B becomes the new (reduced) sample space. Properties: P(S|B) = P(B|B) = 1; P(A′|B) = 1 − P(A|B).`,
      { ex: { q: R`Two dice are thrown. Find the probability that the sum is 8, given that the first die shows 3.`,
        steps: [R`B: first die 3 (6 outcomes). A ∩ B: (3, 5) only.`], ans: R`1/6` } },
      { mistake: R`Confusing P(A|B) with P(B|A). "The probability of a positive test given disease" is not the same as "the probability of disease given a positive test" (Bayes' theorem connects them).` },
      { check: { q: R`If P(A ∩ B) = 0.2 and P(B) = 0.5, find P(A|B).`, ans: R`0.4.` } }
    ] },

    { h: R`Multiplication theorem; independent events`, t: [3], blocks: [
      R`\[P(A \cap B) = P(A)\,P(B \mid A) = P(B)\,P(A \mid B).\] A and B are <b>independent</b> if the occurrence of one does not affect the other: P(A|B) = P(A), equivalently \[P(A \cap B) = P(A)\,P(B).\] If A and B are independent, so are A and B′, A′ and B, A′ and B′. (Independent ≠ mutually exclusive: mutually exclusive events with non-zero probabilities are always dependent.)`,
      { ex: { q: R`A and B are independent with P(A) = 0.3 and P(B) = 0.4. Find P(A ∪ B) and P(neither).`,
        steps: [R`P(A ∩ B) = 0.12; P(A ∪ B) = 0.3 + 0.4 − 0.12 = 0.58.`, R`P(neither) = 0.7 × 0.6 = 0.42 (= 1 − 0.58).`], ans: R`0.58; 0.42` } },
      { ex: { q: R`Two cards are drawn without replacement from a pack. Find the probability that both are aces.`,
        steps: [R`(4/52)(3/51) = 12/2652.`], ans: R`1/221` } },
      { check: { q: R`A coin is tossed and a die is rolled. Find P(head and a 6).`, ans: R`½ × 1/6 = 1/12.` } }
    ] },

    { h: R`Theorem of total probability`, t: [4], blocks: [
      R`If \(E_1, E_2, \dots, E_n\) partition the sample space (mutually exclusive and exhaustive, each with P > 0), then for any event A: \[P(A) = \sum_{i=1}^{n} P(E_i)\,P(A \mid E_i).\] A probability tree makes this easy: multiply along each branch and add the branches ending in A.`,
      { fig: figTree, cap: R`Choose a bag at random, then draw a ball: P(red) = 3/10 + 1/6 = 7/15.` },
      { ex: { q: R`Bag I has 3 red and 2 black balls; bag II has 2 red and 4 black. A bag is chosen at random and a ball drawn. Find P(red).`,
        steps: [R`P(R) = ½ × 3/5 + ½ × 2/6 = 3/10 + 1/6.`], ans: R`7/15` } },
      { check: { q: R`What two conditions must the events Eᵢ satisfy?`, ans: R`They must be mutually exclusive and exhaustive.` } }
    ] },

    { h: R`Bayes' theorem`, t: [4], blocks: [
      R`Bayes' theorem "reverses" the conditioning: given that A has occurred, the probability that it came from \(E_i\) is \[P(E_i \mid A) = \frac{P(E_i)\,P(A \mid E_i)}{\sum_j P(E_j)\,P(A \mid E_j)}.\] P(Eᵢ) are the <b>prior</b> probabilities and P(Eᵢ|A) the <b>posterior</b> probabilities.`,
      { ex: { q: R`In the two-bag example, a red ball is drawn. What is the probability it came from bag I?`,
        steps: [R`P(I | R) = (3/10)/(7/15) = 45/70.`], ans: R`9/14` } },
      { ex: { q: R`A test detects a disease in 99% of patients who have it, but also gives a positive result for 2% of healthy people. If 1% of the population has the disease, what is the probability that a person who tests positive has it?`,
        steps: [R`P(+) = 0.01 × 0.99 + 0.99 × 0.02 = 0.0099 + 0.0198 = 0.0297.`, R`P(D | +) = 0.0099/0.0297.`], ans: R`1/3 ≈ 33%` } },
      { check: { q: R`What does the denominator of Bayes' formula represent?`, ans: R`The total probability P(A).` } }
    ] },

    { h: R`Random variable and its probability distribution`, t: [5], blocks: [
      R`A <b>random variable</b> X is a real-valued function on the sample space (e.g. the number of heads in 3 tosses). Its <b>probability distribution</b> lists the values xᵢ with probabilities pᵢ, where each pᵢ ≥ 0 and Σpᵢ = 1.`,
      { fig: figRV, cap: R`X = number of heads in three tosses: P(X = 0, 1, 2, 3) = 1/8, 3/8, 3/8, 1/8.` },
      { ex: { q: R`Find the probability distribution of X, the number of heads in 3 tosses of a fair coin.`,
        steps: [R`8 equally likely outcomes; heads counts 0, 1, 2, 3 occur 1, 3, 3, 1 times.`], ans: R`1/8, 3/8, 3/8, 1/8` } },
      { check: { q: R`If P(X = 0) = k, P(X = 1) = 2k, P(X = 2) = 3k, find k.`, ans: R`6k = 1 ⟹ k = 1/6.` } }
    ] },

    { h: R`Mean and variance of a random variable`, t: [5], blocks: [
      R`The <b>mean (expectation)</b> and <b>variance</b> of X are \[E(X) = \mu = \sum x_ip_i, \qquad \text{Var}(X) = \sum x_i^2p_i - \mu^2 = E(X^2) - [E(X)]^2.\]`,
      { ex: { q: R`Find the mean and variance of the number of heads in 3 tosses.`,
        steps: [R`E(X) = 0 + 3/8 + 6/8 + 3/8 = 12/8 = 1.5.`, R`E(X²) = 0 + 3/8 + 12/8 + 9/8 = 3; Var = 3 − 2.25 = 0.75.`], ans: R`mean 1.5, variance 0.75` } },
      { adv: R`<b>Binomial distribution:</b> for n independent trials each with success probability p, \(P(X = r) = {}^nC_r\,p^rq^{n-r}\) (q = 1 − p), with mean np and variance npq. For example, the probability of exactly 5 heads in 10 tosses is \({}^{10}C_5/2^{10} = 252/1024 \approx 0.246\).` },
      { check: { q: R`A fair die is rolled. Find E(X).`, ans: R`(1 + 2 + … + 6)/6 = 3.5.` } }
    ] }
  ],
  summary: [
    R`Mean Σx/n (Σfx/N); median middle value / l + (N/2 − C)h/f; mode l + (f₁ − f₀)h/(2f₁ − f₀ − f₂).`,
    R`Range; mean deviation Σ|x − a|/n (least about the median); σ² = Σx²/n − x̄²; CV = σ/x̄ × 100.`,
    R`P(A) = n(A)/n(S); P(A′) = 1 − P(A); P(A ∪ B) = P(A) + P(B) − P(A ∩ B).`,
    R`P(A|B) = P(A ∩ B)/P(B); P(A ∩ B) = P(A)P(B|A); independent ⟺ P(A ∩ B) = P(A)P(B).`,
    R`Total probability P(A) = Σ P(Eᵢ)P(A|Eᵢ); Bayes P(Eᵢ|A) = P(Eᵢ)P(A|Eᵢ)/ΣP(Eⱼ)P(A|Eⱼ).`,
    R`Random variable: Σpᵢ = 1; E(X) = Σxᵢpᵢ; Var(X) = E(X²) − [E(X)]²; binomial mean np, variance npq.`
  ],
  refs: [
    { t: R`OpenStax Introductory Statistics, §2.5 Measures of the Center of the Data`, url: 'https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data' },
    { t: R`OpenStax Introductory Statistics, §2.7 Measures of the Spread of the Data`, url: 'https://openstax.org/books/introductory-statistics-2e/pages/2-7-measures-of-the-spread-of-the-data' },
    { t: R`OpenStax Introductory Statistics, §3.2 Independent and Mutually Exclusive Events`, url: 'https://openstax.org/books/introductory-statistics-2e/pages/3-2-independent-and-mutually-exclusive-events' },
    { t: R`Wikipedia: Bayes' theorem`, url: 'https://en.wikipedia.org/wiki/Bayes%27_theorem' },
    { t: R`Wikipedia: Law of total probability`, url: 'https://en.wikipedia.org/wiki/Law_of_total_probability' }
  ]
});
})();
