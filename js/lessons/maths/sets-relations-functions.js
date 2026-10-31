// Lesson: Sets, Relations and Functions.
var R = String.raw;
JEE.lesson('maths', 'sets-relations-functions', {
  theory: [
    { h: R`Sets and how to write them`,
      body: [
        R`A <b>set</b> is a well-defined collection of distinct objects, called its <b>elements</b>. "Well-defined" means we can always tell whether something belongs: "vowels of English" is a set; "tall students" is not.`,
        R`<b>Roster form</b> lists the elements: \(V = \{a, e, i, o, u\}\). <b>Set-builder form</b> describes a rule: \(\{x : x \text{ is a vowel}\}\).`,
        R`Types: the <b>empty set</b> \(\varnothing\) (no elements), finite and infinite sets, equal sets (same elements), and <b>subsets</b> (\(A \subseteq B\) if every element of A is in B). Intervals such as \([a, b]\) and \((a, b)\) are subsets of \(\mathbb R\).`
      ],
      analogy: R`A set is like a cricket team's playing XI: each player is listed once, and the order you list them in doesn't matter.`,
      check: { q: R`Is \(\{x \in \mathbb N : x < 1\}\) empty?`, ans: R`Yes. No natural number is less than 1.` } },

    { h: R`Union, intersection, complement and Venn diagrams`,
      body: [
        R`<b>Union</b> \(A \cup B\): elements in A or B (or both). <b>Intersection</b> \(A \cap B\): elements in both. <b>Difference</b> \(A - B\): in A but not in B. <b>Complement</b> \(A'\): everything in the universal set U that is not in A.`,
        R`<b>De Morgan's laws:</b> \((A \cup B)' = A' \cap B'\) and \((A \cap B)' = A' \cup B'\).`,
        R`<b>Counting:</b> \(n(A \cup B) = n(A) + n(B) - n(A \cap B)\). We subtract the overlap because it was counted twice.`
      ],
      analogy: R`In a class, A = students who like cricket and B = students who like football. A ∪ B is everyone who likes at least one sport; A ∩ B is those who like both.` },

    { h: R`Power sets and Cartesian products`,
      body: [
        R`The <b>power set</b> \(P(A)\) is the set of all subsets of A, including \(\varnothing\) and A itself. If A has n elements, \(P(A)\) has \(2^n\) elements.`,
        R`The <b>Cartesian product</b> \(A \times B\) is the set of all ordered pairs (a, b) with a in A and b in B. \(n(A \times B) = n(A)\times n(B)\).`
      ],
      points: [R`Each element is either in a subset or not, so there are 2 choices per element: \(2^n\) subsets.`] },

    { h: R`Relations`,
      body: [
        R`A <b>relation</b> R from A to B is any subset of \(A \times B\). If (a, b) is in R we write a R b. There are \(2^{n(A)n(B)}\) possible relations from A to B.`,
        R`A relation on a set A is: <b>reflexive</b> if a R a for every a; <b>symmetric</b> if a R b implies b R a; <b>transitive</b> if a R b and b R c imply a R c.`,
        R`If it is all three, it is an <b>equivalence relation</b>, and it splits A into separate <b>equivalence classes</b>.`
      ],
      analogy: R`"Was born in the same month as" is an equivalence relation on people: it is reflexive, symmetric and transitive. It splits everyone into 12 classes, one per month.`,
      mistake: R`Thinking symmetric and transitive together imply reflexive. They don't, if some element isn't related to anything.` },

    { h: R`Functions: one-one, onto and bijective`,
      body: [
        R`A <b>function</b> \(f: A \to B\) is a special relation where every element of A (the <b>domain</b>) is linked to <b>exactly one</b> element of B (the <b>co-domain</b>). The set of actual outputs is the <b>range</b>.`,
        R`<b>One-one (injective):</b> different inputs always give different outputs. <b>Onto (surjective):</b> every element of B is an output, i.e. range = co-domain. If a function is not onto, it is called <b>into</b>. <b>Bijective:</b> both one-one and onto.`,
        R`Counting functions from a set with m elements to one with n elements: all functions \(n^m\); one-one functions \(n(n - 1)\cdots(n - m + 1)\) (for \(m \le n\)).`
      ],
      analogy: R`Roll numbers to students is one-one (no two students share a roll number). Students to blood groups is usually onto (every group is used) but not one-one.`,
      check: { q: R`Is \(f(x) = x^2\) from \(\mathbb R\) to \(\mathbb R\) one-one?`, ans: R`No: \(f(2) = f(-2) = 4\).` } },

    { h: R`Domain and range of common functions`,
      body: [
        R`<b>Domain</b>: all inputs for which the formula makes sense. Watch for division by zero, even roots of negative numbers, and logs of non-positive numbers.`,
        R`Useful functions: identity \(f(x) = x\); constant; modulus \(|x|\) (range \([0, \infty)\)); greatest integer \([x]\) (range \(\mathbb Z\)); polynomial (domain \(\mathbb R\)); rational \(p(x)/q(x)\) (excluding the zeros of q).`,
        R`To find the range, write \(y = f(x)\), solve for x, and see which values of y are allowed.`
      ],
      mistake: R`Forgetting to exclude points where the denominator is zero, or where a square root has a negative argument.` },

    { h: R`Composition of functions`,
      body: [
        R`\((g\circ f)(x) = g(f(x))\): first apply f, then apply g to the result.`,
        R`In general \(g\circ f \ne f\circ g\): composition is <b>not commutative</b>. It is associative: \(h\circ(g\circ f) = (h\circ g)\circ f\).`
      ],
      analogy: R`Putting on socks and then shoes is not the same as shoes and then socks. The order of composing functions matters in the same way.` },

    { h: R`Inverse functions`,
      body: [
        R`If f is a bijection, it has an <b>inverse</b> \(f^{-1}\) that undoes it: \(f^{-1}(f(x)) = x\).`,
        R`To find it: write \(y = f(x)\), solve for x in terms of y, then swap x and y.`,
        R`The graph of \(f^{-1}\) is the mirror image of the graph of f in the line \(y = x\).`
      ],
      check: { q: R`Find the inverse of \(f(x) = 3x - 5\).`, ans: R`\(y = 3x - 5\), so \(x = (y + 5)/3\). Hence \(f^{-1}(x) = \dfrac{x + 5}{3}\).` } }
  ],

  examples: [
    { level: 1, t: 0, q: R`Write \(\{x : x^2 = 4\}\) in roster form. Is \(\{x \in \mathbb N : x < 1\}\) empty?`,
      steps: [R`\(x^2 = 4\) gives \(x = 2\) or \(x = -2\).`, R`There is no natural number less than 1.`],
      ans: R`\(\{-2, 2\}\); yes, it is the empty set` },
    { level: 1, t: 1, q: R`For A = {1, 2, 3, 4} and B = {3, 4, 5}, find \(A \cup B\), \(A \cap B\) and \(A - B\).`,
      steps: [R`Union: everything in either set.`, R`Intersection: the common elements.`, R`Difference: in A but not in B.`],
      ans: R`{1, 2, 3, 4, 5}; {3, 4}; {1, 2}` },
    { level: 1, t: 7, q: R`Find the range of \(f(x) = x^2 + 1\) for real x.`,
      steps: [R`\(x^2 \ge 0\), so \(x^2 + 1 \ge 1\).`, R`Every value from 1 upward is reached.`],
      ans: R`\([1, \infty)\)` },
    { level: 3, t: 3, q: R`On the integers, a R b means "a − b is divisible by 3". Show that R is an equivalence relation and find its equivalence classes.`,
      steps: [R`Reflexive: a − a = 0 is divisible by 3 ✓. Symmetric: if 3 divides a − b, it divides b − a ✓. Transitive: (a − b) + (b − c) = a − c, so it is divisible by 3 ✓.`, R`Integers are grouped by their remainder on division by 3.`],
      ans: R`It is an equivalence relation with 3 classes: {…, −3, 0, 3, 6, …}, {…, −2, 1, 4, …} and {…, −1, 2, 5, …}` },
    { level: 3, t: 4, q: R`How many one-one functions are there from a 3-element set A to a 5-element set B?`,
      steps: [R`The first element of A has 5 choices, the second has 4 (it must differ), and the third has 3.`],
      ans: R`\(5\times4\times3 = 60\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`How many subsets does {a, b} have?`,
      options: [R`2`, R`3`, R`4`, R`8`], correct: 2,
      solution: R`\(2^2 = 4\): \(\varnothing\), {a}, {b}, {a, b}.` },
    { level: 1, type: 'mcq', q: R`\(A \cap \varnothing\) equals:`,
      options: [R`A`, R`\(\varnothing\)`, R`U`, R`A′`], correct: 1,
      solution: R`Nothing is common with the empty set.` },
    { level: 1, type: 'mcq', q: R`Which of these is the empty set?`,
      options: [R`{0}`, R`{∅}`, R`{1}`, R`\(\{x \in \mathbb N : x < 1\}\)`], correct: 3,
      solution: R`{0} and {∅} each have one element. No natural number is less than 1.` },
    { level: 1, type: 'mcq', q: R`If \(f(x) = 2x + 1\), then \(f(3)\) is:`,
      options: [R`7`, R`5`, R`6`, R`8`], correct: 0,
      solution: R`\(2(3) + 1 = 7\).` },
    { level: 1, type: 'num', q: R`A set has 4 elements. How many elements does its power set have?`,
      answer: 16, tol: 0.001, unit: '',
      solution: R`\(2^4 = 16\).` },
    { level: 1, type: 'num', q: R`If n(A) = 3 and n(B) = 2, find n(A × B).`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`\(3\times2 = 6\) ordered pairs.` },
    { level: 2, type: 'mcq', q: R`The relation R = {(1,1), (2,2), (3,3)} on {1, 2, 3} is:`,
      options: [R`reflexive only`, R`symmetric only`, R`an equivalence relation`, R`not reflexive`], correct: 2,
      solution: R`This identity relation is reflexive, symmetric and transitive.` },
    { level: 2, type: 'mcq', q: R`The function \(f: \mathbb R \to \mathbb R\), \(f(x) = x^3\), is:`,
      options: [R`bijective`, R`one-one but not onto`, R`onto but not one-one`, R`neither`], correct: 0,
      solution: R`It is strictly increasing (one-one) and takes every real value (onto).` },
    { level: 2, type: 'mcq', q: R`The domain of \(f(x) = \dfrac{1}{x - 2}\) is:`,
      options: [R`\(\mathbb R\)`, R`\(\mathbb R - \{2\}\)`, R`\((2, \infty)\)`, R`\(\mathbb R - \{0\}\)`], correct: 1,
      solution: R`The only problem is division by zero at x = 2.` },
    { level: 2, type: 'mcq', q: R`If \(f(x) = x + 1\) and \(g(x) = x^2\), then \((g\circ f)(x)\) is:`,
      options: [R`\(x^2 + 1\)`, R`\(x^2 + x\)`, R`\(2x + 1\)`, R`\((x + 1)^2\)`], correct: 3,
      solution: R`\(g(f(x)) = g(x + 1) = (x + 1)^2\).` },
    { level: 2, type: 'num', q: R`n(A) = 20, n(B) = 15 and n(A ∩ B) = 5. Find n(A ∪ B).`,
      answer: 30, tol: 0.001, unit: '',
      solution: R`20 + 15 − 5 = 30.` },
    { level: 2, type: 'num', q: R`If \(f(x) = 3x - 5\), find \(f^{-1}(4)\).`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`\(f^{-1}(x) = (x + 5)/3\), so \(f^{-1}(4) = 9/3 = 3\).` },
    { level: 2, type: 'num', q: R`How many relations are there from a 2-element set to a 3-element set?`,
      answer: 64, tol: 0.001, unit: '',
      solution: R`\(A\times B\) has 6 elements, so \(2^6 = 64\) subsets.` },
    { level: 3, type: 'mcq', q: R`How many equivalence relations can be defined on {1, 2, 3}?`,
      options: [R`1`, R`3`, R`8`, R`5`], correct: 3,
      solution: R`One for each way of splitting the set into groups: {1}{2}{3}, {12}{3}, {13}{2}, {23}{1}, {123}. That makes 5.` },
    { level: 3, type: 'mcq', q: R`The range of \(f(x) = |x|\) for real x is:`,
      options: [R`\(\mathbb R\)`, R`\([0, \infty)\)`, R`\((0, \infty)\)`, R`\((-\infty, 0]\)`], correct: 1,
      solution: R`|x| is never negative, and it equals 0 at x = 0.` },
    { level: 3, type: 'num', q: R`How many one-one functions are there from a 3-element set to a 5-element set?`,
      answer: 60, tol: 0.001, unit: '',
      solution: R`\(5\times4\times3 = 60\).` },
    { level: 3, type: 'num', q: R`How many onto functions are there from a 4-element set to a 2-element set?`,
      answer: 14, tol: 0.001, unit: '',
      solution: R`All functions \(2^4 = 16\), minus the 2 constant functions (which aren't onto): 14.` }
  ]
});
