// Book chapter: Sets, Relations and Functions. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 11, math: o.math, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
var vid = 0;
// Venn diagram of two sets with a chosen region shaded: 'AuB', 'AnB', 'A-B', 'Ac', 'AdB' (symmetric difference).
function venn(region, title) {
  var id = 'srfv' + (++vid), ax = 75, bx = 125, y = 70, r = 42, out = [];
  out.push('<defs><clipPath id="' + id + 'a"><circle cx="' + ax + '" cy="' + y + '" r="' + r + '"/></clipPath><clipPath id="' + id + 'b"><circle cx="' + bx + '" cy="' + y + '" r="' + r + '"/></clipPath></defs>');
  out.push(D.rect(10, 15, 180, 110, { color: 'm', w: 1.2 }));
  function fillCircle(cx, clip, cls) { return '<circle cx="' + cx + '" cy="' + y + '" r="' + r + '" class="' + cls + '" stroke="none"' + (clip ? ' clip-path="url(#' + clip + ')"' : '') + '/>'; }
  var S = 'soft-b';
  if (region === 'AuB') { out.push(fillCircle(ax, null, S), fillCircle(bx, null, S)); }
  if (region === 'AnB') { out.push(fillCircle(bx, id + 'a', S)); }
  if (region === 'A-B' || region === 'AdB') {
    out.push('<mask id="' + id + 'm"><rect x="0" y="0" width="200" height="140" fill="white"/><circle cx="' + bx + '" cy="' + y + '" r="' + r + '" fill="black"/></mask>');
    out.push('<circle cx="' + ax + '" cy="' + y + '" r="' + r + '" class="' + S + '" stroke="none" mask="url(#' + id + 'm)"/>');
  }
  if (region === 'AdB') {
    out.push('<mask id="' + id + 'n"><rect x="0" y="0" width="200" height="140" fill="white"/><circle cx="' + ax + '" cy="' + y + '" r="' + r + '" fill="black"/></mask>');
    out.push('<circle cx="' + bx + '" cy="' + y + '" r="' + r + '" class="' + S + '" stroke="none" mask="url(#' + id + 'n)"/>');
  }
  if (region === 'Ac') {
    out.push('<mask id="' + id + 'm"><rect x="0" y="0" width="200" height="140" fill="white"/><circle cx="' + ax + '" cy="' + y + '" r="' + r + '" fill="black"/></mask>');
    out.push('<rect x="11" y="16" width="178" height="108" class="' + S + '" stroke="none" mask="url(#' + id + 'm)"/>');
  }
  out.push(D.circle(ax, y, r, { color: 'b', w: 1.6 }), D.circle(bx, y, r, { color: 'o', w: 1.6 }));
  out.push(lab(45, 40, 'A', 'b', 13, { bold: true }), lab(155, 40, 'B', 'o', 13, { bold: true }), lab(180, 28, 'U', 'm', 11, { anchor: 'end' }));
  return [D.svg(200, 135, out, title), title];
}
function arrows(L, Rr, map, title) {
  var out = [D.ellipse(40, 70, 26, 55, { color: 'b', fill: 'soft' }), D.ellipse(130, 70, 26, 55, { color: 'o', fill: 'soft' })];
  L.forEach(function (s, i) { out.push(lab(40, 30 + i * 27, s, 'k', 11, { bold: true })); });
  Rr.forEach(function (s, i) { out.push(lab(130, 30 + i * 27, s, 'k', 11, { bold: true })); });
  map.forEach(function (m) { out.push(D.arrow(50, 30 + m[0] * 27, 118, 30 + m[1] * 27, { color: 'm', w: 1.3, head: 6 })); });
  return [D.svg(170, 135, out, title), title];
}

// ---------- figures ----------
var figVenn = D.row([venn('AuB', R`A ∪ B`), venn('AnB', R`A ∩ B`), venn('A-B', R`A − B`), venn('Ac', R`A′ (complement)`), venn('AdB', R`A Δ B`)]);
var figMaps = D.row([
  arrows(['1', '2', '3'], ['a', 'b', 'c', 'd'], [[0, 0], [1, 2], [2, 3]], R`one-one, into`),
  arrows(['1', '2', '3', '4'], ['a', 'b', 'c'], [[0, 0], [1, 0], [2, 1], [3, 2]], R`many-one, onto`),
  arrows(['1', '2', '3'], ['a', 'b', 'c'], [[0, 1], [1, 2], [2, 0]], R`one-one, onto (bijection)`),
  arrows(['1', '2', '3'], ['a', 'b', 'c'], [[0, 0], [1, 0], [2, 1]], R`many-one, into`)
]);
var figSpecial = D.row([
  [D.plot({ w: 190, h: 170, x: [-2.5, 2.5], y: [-1.6, 1.6], xticks: [-1, 1], yticks: [1, [-1, '−1']],
    segs: [{ x1: -2.5, y1: -1, x2: 0, y2: -1, color: 'c', w: 2.4 }, { x1: 0, y1: 1, x2: 2.5, y2: 1, color: 'c', w: 2.4 }], pts: [{ x: 0, y: 0, color: 'c' }, { x: 0, y: 1, open: true, color: 'c' }, { x: 0, y: -1, open: true, color: 'c' }], label: 'signum function' }), R`signum: sgn x`],
  [D.plot({ w: 200, h: 170, x: [-2.4, 2.4], y: [-0.4, 1.4], xticks: [-2, -1, 1, 2], yticks: [1],
    segs: [-2, -1, 0, 1].map(function (k) { return { x1: k, y1: 0, x2: k + 1, y2: 1, color: 'o', w: 2.2 }; }), pts: [-2, -1, 0, 1].map(function (k) { return { x: k + 1, y: 1, open: true, color: 'o' }; }), label: 'fractional part' }), R`fractional part {x} = x − [x]`],
  [D.plot({ w: 200, h: 170, x: [-2.5, 2.5], y: [-0.5, 2.5], xticks: [-1, 1], yticks: [1, 2], fns: [{ f: function (x) { return x * x; }, color: 'g', label: 'x²', lx: 1.5, ly: 2.1, math: false }, { f: function (x) { return Math.abs(x); }, color: 'c', label: '|x|', lx: -2.3, ly: 2.3, math: false }], label: 'even functions' }), R`even: x², |x| (symmetric in the y-axis)`]
]);
var figInverse = D.plot({ w: 280, h: 280, x: [-3, 4], y: [-3, 0], eq: true, xticks: [1, 2, 3], yticks: [1, 2, 3],
  fns: [{ f: function (x) { return x; }, color: 'm', w: 1.2, dash: '5 4', label: 'y = x', lx: 2.6, ly: 3.3 }, { f: function (x) { return 2 * x + 1; }, color: 'b', label: 'y = 2x + 1', lx: -2.9, ly: 3.2 }, { f: function (x) { return (x - 1) / 2; }, color: 'o', label: 'y = (x − 1)/2', lx: 0.6, ly: -1.6 }],
  pts: [{ x: 1, y: 3, color: 'b', label: '(1, 3)', pos: 'e' }, { x: 3, y: 1, color: 'o', label: '(3, 1)', pos: 's' }], segs: [{ x1: 1, y1: 3, x2: 3, y2: 1, color: 'g', dash: '3 3', w: 1.2 }],
  label: 'A function and its inverse are mirror images in y = x' });

var figGrid = D.plot({ w: 300, h: 220, x: [0, 4.2], y: [0, 4.2], noOrigin: true, xlabel: 'A', ylabel: 'B', mathLabels: false, xticks: [[1, '1'], [2, '2'], [3, '3']], yticks: [[1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']],
  pts: (function () { var p = []; for (var i = 1; i <= 3; i++) for (var j = 1; j <= 4; j++) { var inR = (i === 1 && j === 1) || (i === 2 && j === 3) || (i === 3 && j === 3); p.push({ x: i, y: j, color: inR ? 'r' : 'm' }); } return p; })(),
  label: 'Cartesian product A × B with a relation highlighted' });

var figMachine = D.svg(440, 110, [
  D.text(30, 55, 'x', { size: 14, math: true }), D.arrow(42, 55, 95, 55, { color: 'm', w: 1.6, head: 7 }),
  D.rect(100, 30, 80, 50, { color: 'b', fill: 'soft', w: 1.6, r: 6 }), D.text(140, 56, 'g', { size: 15, math: true, color: 'b' }),
  D.arrow(180, 55, 245, 55, { color: 'm', w: 1.6, head: 7 }), D.text(212, 42, 'g(x)', { size: 12, math: false }),
  D.rect(250, 30, 80, 50, { color: 'o', fill: 'soft', w: 1.6, r: 6 }), D.text(290, 56, 'f', { size: 15, math: true, color: 'o' }),
  D.arrow(330, 55, 385, 55, { color: 'm', w: 1.6, head: 7 }), D.text(410, 55, 'f(g(x))', { size: 12, math: false }),
  D.text(220, 100, '(f∘g)(x): apply g first, then f', { size: 11, math: false, color: 'g' })
], 'Composition of functions as two machines');

// ---------- chapter text ----------
JEE.book('maths', 'sets-relations-functions', {
  intro: [
    R`Sets are the language of modern mathematics: almost every object we study is a set or is built from sets. Relations describe how elements of sets are connected, and functions are the special relations that assign exactly one output to each input. They are used in every later chapter of JEE Maths.`,
    R`This chapter covers sets and their operations (with Venn diagrams), power sets and Cartesian products, relations and their types (especially equivalence relations), functions and their types, special functions, composition and inverses, and finally logarithms.`
  ],
  sections: [
    { h: R`Sets and their representation`, t: [0], blocks: [
      R`A <b>set</b> is a well-defined collection of distinct objects, called its <b>elements</b>. "Well-defined" means we can decide for any object whether it belongs: "the vowels of English" is a set, "the good books" is not. We write \(a \in A\) if a belongs to A and \(a \notin A\) otherwise. Standard sets: \(\mathbb{N}\) (natural numbers), \(\mathbb{Z}\) (integers), \(\mathbb{Q}\) (rationals), \(\mathbb{R}\) (reals), \(\mathbb{C}\) (complex numbers).`,
      { points: [R`<b>Roster (tabular) form:</b> list the elements in braces: {a, e, i, o, u}. Order does not matter, and repetition is ignored.`, R`<b>Set-builder form:</b> describe the property: {x : x is a natural number less than 6} = {1, 2, 3, 4, 5}.`] },
      { h3: R`Empty, finite, infinite and equal sets` },
      R`The <b>empty (null) set</b> ∅ = { } has no elements (e.g. \(\{x \in \mathbb{R} : x^2 = -1\}\)). A set is <b>finite</b> if it has a definite number of elements n(A) (its cardinal number), otherwise <b>infinite</b> (\(\mathbb{N}\), the points on a line). Two sets are <b>equal</b> if they have exactly the same elements; <b>equivalent</b> if they have the same number of elements.`,
      { check: { q: R`Write {x : x² − 5x + 6 = 0} in roster form.`, ans: R`{2, 3}.` } }
    ] },

    { h: R`Subsets and intervals`, t: [0], blocks: [
      R`A is a <b>subset</b> of B (\(A \subseteq B\)) if every element of A is in B. If also \(A \neq B\), A is a <b>proper subset</b> (\(A \subset B\)). Every set is a subset of itself, and ∅ is a subset of every set. Two sets are equal if and only if \(A \subseteq B\) and \(B \subseteq A\).`,
      R`A set with n elements has \(2^n\) subsets and \(2^n - 1\) proper subsets.`,
      R`<b>Intervals</b> are subsets of \(\mathbb{R}\): open \((a, b) = \{x : a < x < b\}\); closed \([a, b] = \{x : a \le x \le b\}\); half-open \([a, b)\), \((a, b]\); and infinite intervals like \((a, \infty)\), \((-\infty, b]\). The length of each of these bounded intervals is b − a.`,
      { check: { q: R`How many subsets does {a, b, c, d} have?`, ans: R`2⁴ = 16.` } }
    ] },

    { h: R`Universal set and Venn diagrams`, t: [0], blocks: [
      R`The <b>universal set</b> U contains all the elements under discussion (e.g. \(\mathbb{R}\) when studying sets of real numbers). <b>Venn diagrams</b> show U as a rectangle and its subsets as circles inside it; overlapping regions show common elements.`,
      { fig: figVenn, cap: R`The shaded regions show union, intersection, difference, complement and symmetric difference.` },
      { check: { q: R`In a Venn diagram, what represents the universal set?`, ans: R`The rectangle containing all the circles.` } }
    ] },

    { h: R`Union, intersection, complement and difference`, t: [1], blocks: [
      { points: [
        R`<b>Union:</b> \(A \cup B = \{x : x \in A \text{ or } x \in B\}\).`,
        R`<b>Intersection:</b> \(A \cap B = \{x : x \in A \text{ and } x \in B\}\). A and B are <b>disjoint</b> if \(A \cap B = \varnothing\).`,
        R`<b>Difference:</b> \(A - B = \{x : x \in A,\ x \notin B\} = A \cap B'\).`,
        R`<b>Complement:</b> \(A' = U - A = \{x \in U : x \notin A\}\).`
      ] },
      { ex: { q: R`If U = {1, 2, …, 10}, A = {2, 4, 6, 8}, B = {1, 2, 3, 4, 5}, find A ∪ B, A ∩ B, A − B and A′.`,
        steps: [R`A ∪ B = {1, 2, 3, 4, 5, 6, 8}; A ∩ B = {2, 4}.`, R`A − B = {6, 8}; A′ = {1, 3, 5, 7, 9, 10}.`], ans: R`as above` } },
      { check: { q: R`What is A ∩ A′?`, ans: R`The empty set ∅.` } }
    ] },

    { h: R`Symmetric difference`, t: [1], blocks: [
      R`The <b>symmetric difference</b> of A and B is the set of elements in exactly one of them: \[A \,\Delta\, B = (A - B) \cup (B - A) = (A \cup B) - (A \cap B).\]`,
      { points: [R`It is commutative and associative: \(A\,\Delta\,B = B\,\Delta\,A\).`, R`\(A\,\Delta\,\varnothing = A\), \(A\,\Delta\,A = \varnothing\).`, R`\(n(A\,\Delta\,B) = n(A) + n(B) - 2\,n(A \cap B)\).`] },
      { ex: { q: R`If A = {1, 2, 3, 4} and B = {3, 4, 5}, find A Δ B.`,
        steps: [R`A − B = {1, 2}; B − A = {5}.`], ans: R`{1, 2, 5}` } },
      { check: { q: R`If n(A) = 10, n(B) = 8 and n(A ∩ B) = 3, find n(A Δ B).`, ans: R`10 + 8 − 6 = 12.` } }
    ] },

    { h: R`Algebraic properties; De Morgan's laws`, t: [1], blocks: [
      { table: { head: [R`Law`, R`Union`, R`Intersection`], rows: [
        [R`Idempotent`, R`\(A \cup A = A\)`, R`\(A \cap A = A\)`],
        [R`Identity`, R`\(A \cup \varnothing = A\)`, R`\(A \cap U = A\)`],
        [R`Commutative`, R`\(A \cup B = B \cup A\)`, R`\(A \cap B = B \cap A\)`],
        [R`Associative`, R`\((A \cup B) \cup C = A \cup (B \cup C)\)`, R`\((A \cap B) \cap C = A \cap (B \cap C)\)`],
        [R`Distributive`, R`\(A \cup (B \cap C) = (A \cup B) \cap (A \cup C)\)`, R`\(A \cap (B \cup C) = (A \cap B) \cup (A \cap C)\)`],
        [R`Complement`, R`\(A \cup A' = U\)`, R`\(A \cap A' = \varnothing\)`]] } },
      R`<b>De Morgan's laws:</b> \[(A \cup B)' = A' \cap B', \qquad (A \cap B)' = A' \cup B'.\] Also \((A')' = A\), \(U' = \varnothing\), \(\varnothing' = U\).`,
      { derive: R`Proof of (A ∪ B)′ = A′ ∩ B′`, steps: [R`Let \(x \in (A \cup B)'\). Then \(x \notin A \cup B\), so \(x \notin A\) and \(x \notin B\), i.e. \(x \in A'\) and \(x \in B'\). So \(x \in A' \cap B'\).`, R`Conversely, every step reverses. Hence the two sets are subsets of each other, and so equal.`] },
      { check: { q: R`Simplify (A′ ∪ B′)′.`, ans: R`A ∩ B (by De Morgan's law and (X′)′ = X).` } }
    ] },

    { h: R`Practical problems on union and intersection`, t: [1], blocks: [
      R`For finite sets: \[n(A \cup B) = n(A) + n(B) - n(A \cap B),\] \[n(A \cup B \cup C) = n(A) + n(B) + n(C) - n(A \cap B) - n(B \cap C) - n(A \cap C) + n(A \cap B \cap C).\] If A and B are disjoint, \(n(A \cup B) = n(A) + n(B)\). Also \(n(A - B) = n(A) - n(A \cap B)\).`,
      { ex: { q: R`In a class of 100 students, 50 study Maths, 40 Physics and 35 Chemistry; 15 study Maths and Physics, 10 Physics and Chemistry, 12 Maths and Chemistry, and 5 study all three. How many study none of the three?`,
        steps: [R`n(M ∪ P ∪ C) = 50 + 40 + 35 − 15 − 10 − 12 + 5 = 93.`, R`None = 100 − 93 = 7.`], ans: R`7 students` } },
      { ex: { q: R`In a group of 70 people, 37 like coffee, 52 like tea, and each person likes at least one. How many like both?`,
        steps: [R`70 = 37 + 52 − n(C ∩ T) → n(C ∩ T) = 19.`], ans: R`19` } },
      { check: { q: R`If n(A) = 20, n(B) = 15 and n(A ∪ B) = 30, find n(A ∩ B).`, ans: R`20 + 15 − 30 = 5.` } }
    ] },

    { h: R`Power set`, t: [2], blocks: [
      R`The <b>power set</b> P(A) is the set of all subsets of A. If n(A) = m, then \(n(P(A)) = 2^m\). For A = {1, 2}: P(A) = {∅, {1}, {2}, {1, 2}}.`,
      { ex: { q: R`If n(A) = 3, find n(P(P(A))).`,
        steps: [R`n(P(A)) = 2³ = 8.`, R`n(P(P(A))) = 2⁸ = 256.`], ans: R`256` } },
      R`Why 2ⁿ subsets? Building a subset means making a yes/no choice for each of the n elements, and the choices are independent, so there are 2 × 2 × … × 2 = 2ⁿ possibilities, including the empty set (all "no") and the set itself (all "yes").`,
      { check: { q: R`What is P(∅)?`, ans: R`{∅}: a set with one element.` } }
    ] },

    { h: R`Ordered pairs and the Cartesian product`, t: [3], blocks: [
      R`An <b>ordered pair</b> (a, b) has a first and a second element; (a, b) = (c, d) if and only if a = c and b = d. The <b>Cartesian product</b> of A and B is \[A \times B = \{(a, b) : a \in A,\ b \in B\}, \qquad n(A \times B) = n(A)\,n(B).\] \(\mathbb{R} \times \mathbb{R}\) is the coordinate plane. In general \(A \times B \ne B \times A\). Also \(A \times (B \cup C) = (A \times B) \cup (A \times C)\) and \(A \times (B \cap C) = (A \times B) \cap (A \times C)\).`,
      { ex: { q: R`If A = {1, 2} and B = {x, y, z}, list A × B and find n(A × B).`,
        steps: [R`A × B = {(1, x), (1, y), (1, z), (2, x), (2, y), (2, z)}.`], ans: R`6 ordered pairs` } },
      { fig: figGrid, cap: R`A × B for A = {1, 2, 3} and B = {a, b, c, d} has 3 × 4 = 12 ordered pairs, shown as a grid of points. Any relation from A to B is a subset of these points; the red ones are R = {(1, a), (2, c), (3, c)}, which happens to be a function.` },
      { check: { q: R`If (x + 1, y − 2) = (3, 1), find x and y.`, ans: R`x = 2, y = 3.` } }
    ] },

    { h: R`Relations: domain, codomain and range`, t: [3], blocks: [
      R`A <b>relation</b> R from A to B is any subset of \(A \times B\). If \((a, b) \in R\) we write aRb. The <b>domain</b> is the set of first elements, the <b>codomain</b> is B, and the <b>range</b> is the set of second elements (a subset of the codomain). A relation on A is a subset of \(A \times A\).`,
      R`If n(A) = m and n(B) = n, the number of relations from A to B is \(2^{mn}\) (the number of subsets of A × B).`,
      { ex: { q: R`Let A = {1, 2, 3, 4} and R = {(a, b) : b = a + 1, a, b ∈ A}. Find R, its domain and range.`,
        steps: [R`R = {(1, 2), (2, 3), (3, 4)}.`], ans: R`domain {1, 2, 3}; range {2, 3, 4}` } },
      { check: { q: R`How many relations are there from a 2-element set to a 3-element set?`, ans: R`2⁶ = 64.` } }
    ] },

    { h: R`Types of relations`, t: [3], blocks: [
      R`Let R be a relation on a set A:`,
      { points: [
        R`<b>Empty (void):</b> R = ∅ (no element is related to any). <b>Universal:</b> R = A × A.`,
        R`<b>Reflexive:</b> (a, a) ∈ R for every a ∈ A.`,
        R`<b>Symmetric:</b> (a, b) ∈ R ⟹ (b, a) ∈ R.`,
        R`<b>Transitive:</b> (a, b) ∈ R and (b, c) ∈ R ⟹ (a, c) ∈ R.`,
        R`<b>Antisymmetric:</b> (a, b) ∈ R and (b, a) ∈ R ⟹ a = b (e.g. ≤ on ℝ).`
      ] },
      { table: { head: [R`Relation on a set with n elements`, R`Number`], rows: [[R`all relations`, R`\(2^{n^2}\)`], [R`reflexive`, R`\(2^{n^2 - n}\)`], [R`symmetric`, R`\(2^{n(n+1)/2}\)`], [R`reflexive and symmetric`, R`\(2^{n(n-1)/2}\)`]] } },
      { ex: { q: R`Is R = {(a, b) : a ≤ b} on ℝ reflexive, symmetric, transitive?`,
        steps: [R`a ≤ a: reflexive.`, R`1 ≤ 2 but 2 ≰ 1: not symmetric.`, R`a ≤ b, b ≤ c ⟹ a ≤ c: transitive.`], ans: R`Reflexive and transitive, not symmetric` } },
      { check: { q: R`On A = {1, 2, 3}, is R = {(1, 1), (2, 2), (3, 3), (1, 2)} symmetric?`, ans: R`No: (1, 2) ∈ R but (2, 1) ∉ R.` } }
    ] },

    { h: R`Equivalence relations and equivalence classes`, t: [3], blocks: [
      R`A relation that is <b>reflexive, symmetric and transitive</b> is an <b>equivalence relation</b>. It splits A into disjoint subsets called <b>equivalence classes</b>, where [a] = {x ∈ A : xRa}. Any two classes are either identical or disjoint, and their union is A (a <b>partition</b> of A).`,
      { ex: { q: R`Show that R = {(a, b) : 2 divides a − b} on ℤ is an equivalence relation, and find its classes.`,
        steps: [R`a − a = 0 is divisible by 2: reflexive.`, R`If 2 | (a − b) then 2 | (b − a): symmetric.`, R`If 2 | (a − b) and 2 | (b − c), then 2 | (a − c): transitive.`, R`Classes: [0] = even integers, [1] = odd integers.`], ans: R`An equivalence relation with two classes: evens and odds` } },
      { tip: R`Congruence modulo n, "is parallel to" (including a line with itself), and "has the same birthday as" are equivalence relations; "is perpendicular to" and "is less than" are not.` },
      R`An equivalence relation always <b>partitions</b> its set: the classes do not overlap, and together they cover every element. Congruence modulo 5 sorts all integers into five drawers by their remainder; "has the same birthday as" sorts people into 366 groups. Conversely, any partition of a set defines an equivalence relation ("is in the same part as").`,
      { check: { q: R`How many equivalence classes does "congruence modulo 5" have on ℤ?`, ans: R`Five: [0], [1], [2], [3], [4].` } }
    ] },

    { h: R`Functions as mappings; domain, codomain and range`, t: [4, 7], blocks: [
      R`A <b>function</b> (mapping) f from A to B, \(f: A \to B\), is a relation in which <b>every</b> element of A has <b>exactly one</b> image in B. A is the domain, B the codomain, and the set of images f(A) is the range (a subset of B). For a real function given by a formula, the domain is the largest set of real x for which the formula is defined.`,
      { points: [R`Even roots need non-negative arguments: \(\sqrt{g(x)}\) needs \(g(x) \ge 0\).`, R`Denominators must not be zero.`, R`\(\log g(x)\) needs \(g(x) > 0\) (and base positive, ≠ 1).`, R`\(\sin^{-1} g(x)\), \(\cos^{-1} g(x)\) need \(-1 \le g(x) \le 1\).`] },
      { ex: { q: R`Find the domain of \(f(x) = \sqrt{x - 2} + \dfrac{1}{x - 5}\).`,
        steps: [R`x − 2 ≥ 0 ⟹ x ≥ 2; and x ≠ 5.`], ans: R`[2, 5) ∪ (5, ∞)` } },
      { ex: { q: R`Find the range of \(f(x) = \dfrac{x^2}{1 + x^2}\).`,
        steps: [R`Let y = x²/(1 + x²) ⟹ x² = y/(1 − y), which must be ≥ 0.`, R`So 0 ≤ y < 1.`], ans: R`[0, 1)` } },
      { check: { q: R`Is the relation {(1, a), (1, b), (2, c)} a function from {1, 2} to {a, b, c}?`, ans: R`No: 1 has two images.` } }
    ] },

    { h: R`One-one, many-one, into and onto functions`, t: [4], blocks: [
      { fig: figMaps, cap: R`Arrow diagrams of the four kinds of functions.` },
      { points: [R`<b>One-one (injective):</b> different inputs give different outputs: f(x₁) = f(x₂) ⟹ x₁ = x₂. Graphically, every horizontal line meets the graph at most once. A strictly monotonic function is one-one.`, R`<b>Many-one:</b> at least two inputs share an output.`, R`<b>Onto (surjective):</b> range = codomain. Otherwise <b>into</b>.`, R`<b>Bijective:</b> both one-one and onto. Only bijections have inverses.`] },
      { table: { head: [R`From A (m elements) to B (n elements)`, R`Number`], rows: [[R`all functions`, R`\(n^m\)`], [R`one-one functions (m ≤ n)`, R`\(^nP_m = \dfrac{n!}{(n - m)!}\)`], [R`bijections (m = n)`, R`\(n!\)`], [R`onto functions`, R`\(\sum_{r=0}^{n} (-1)^r \binom{n}{r} (n - r)^m\)`]] } },
      { ex: { q: R`How many onto functions are there from a 4-element set to a 3-element set?`,
        steps: [R`3⁴ − ³C₁·2⁴ + ³C₂·1⁴ = 81 − 48 + 3.`], ans: R`36` } },
      { ex: { q: R`How many functions are there from A = {1, 2, 3} to B = {a, b}? How many of them are onto?`,
        steps: [R`Each of the 3 elements has 2 choices: 2³ = 8 functions.`, R`Only the two constant functions miss an element of B, so 8 − 2 are onto.`], ans: R`8 functions; 6 onto (none is one-one, since 3 > 2)` } },
      { check: { q: R`Is f: ℝ → ℝ, f(x) = x² one-one?`, ans: R`No: f(2) = f(−2) = 4. (It is many-one and into.)` } }
    ] },

    { h: R`Even and odd functions`, t: [4], blocks: [
      R`A function defined on a set symmetric about 0 is <b>even</b> if f(−x) = f(x) (graph symmetric about the y-axis: x², cos x, |x|) and <b>odd</b> if f(−x) = −f(x) (graph symmetric about the origin: x³, sin x, tan x).`,
      { fig: figSpecial, cap: R`The signum and fractional-part functions, and two even functions.` },
      { points: [R`Every function can be written uniquely as even + odd: \(f(x) = \dfrac{f(x) + f(-x)}{2} + \dfrac{f(x) - f(-x)}{2}\). For example \(e^x = \cosh x + \sinh x\).`, R`even × even = even, odd × odd = even, even × odd = odd.`, R`The only function that is both even and odd is f(x) = 0.`] },
      { check: { q: R`Is f(x) = x³ + sin x even, odd or neither?`, ans: R`Odd: f(−x) = −x³ − sin x = −f(x).` } }
    ] },

    { h: R`Special functions`, t: [4], blocks: [
      { table: { head: [R`Function`, R`Formula`, R`Domain`, R`Range`], rows: [
        [R`Identity`, R`f(x) = x`, R`ℝ`, R`ℝ`],
        [R`Constant`, R`f(x) = c`, R`ℝ`, R`{c}`],
        [R`Polynomial`, R`\(a_0 + a_1x + \dots + a_nx^n\)`, R`ℝ`, R`depends on degree`],
        [R`Exponential`, R`\(a^x\), a > 0, a ≠ 1`, R`ℝ`, R`(0, ∞)`],
        [R`Logarithmic`, R`\(\log_a x\)`, R`(0, ∞)`, R`ℝ`],
        [R`Modulus`, R`\(|x| = x\ (x \ge 0),\ -x\ (x < 0)\)`, R`ℝ`, R`[0, ∞)`],
        [R`Greatest integer`, R`[x] = greatest integer ≤ x`, R`ℝ`, R`ℤ`],
        [R`Fractional part`, R`{x} = x − [x]`, R`ℝ`, R`[0, 1)`],
        [R`Signum`, R`sgn x = |x|/x (x ≠ 0), 0 at 0`, R`ℝ`, R`{−1, 0, 1}`],
        [R`sin x, cos x`, R`—`, R`ℝ`, R`[−1, 1]`]] } },
      R`Useful facts: [x + n] = [x] + n for integer n; [x] + [−x] = 0 if x is an integer, −1 otherwise; |x| ≥ 0 and |xy| = |x||y|.`,
      { ex: { q: R`Solve [x]² − 5[x] + 6 = 0.`,
        steps: [R`([x] − 2)([x] − 3) = 0 ⟹ [x] = 2 or 3.`, R`[x] = 2 ⟹ 2 ≤ x < 3; [x] = 3 ⟹ 3 ≤ x < 4.`], ans: R`x ∈ [2, 4)` } },
      { check: { q: R`What is [−2.3]?`, ans: R`−3 (the greatest integer less than or equal to −2.3).` } }
    ] },

    { h: R`Algebra of functions`, t: [5], blocks: [
      R`For f, g: X → ℝ we define (f ± g)(x) = f(x) ± g(x), (fg)(x) = f(x)g(x), (cf)(x) = c·f(x), and \(\left(\dfrac{f}{g}\right)(x) = \dfrac{f(x)}{g(x)}\) where g(x) ≠ 0. The domain of each is the intersection of the domains (minus the zeros of g for the quotient).`,
      { ex: { q: R`If f(x) = √x and g(x) = √(4 − x), find the domain of f + g and of f/g.`,
        steps: [R`Domain of f: [0, ∞); of g: (−∞, 4]. Intersection: [0, 4].`, R`For f/g, also g ≠ 0 ⟹ x ≠ 4.`], ans: R`f + g: [0, 4]; f/g: [0, 4)` } },
      { check: { q: R`If f(x) = x² and g(x) = 2x, find (f − g)(3).`, ans: R`9 − 6 = 3.` } }
    ] },

    { h: R`Composition of functions`, t: [5], blocks: [
      R`If f: A → B and g: B → C, the <b>composite</b> g∘f: A → C is (g∘f)(x) = g(f(x)). It is defined only when the range of f lies in the domain of g. In general g∘f ≠ f∘g, but composition is associative: h∘(g∘f) = (h∘g)∘f.`,
      { points: [R`If f and g are one-one, so is g∘f; if both are onto, so is g∘f.`, R`If g∘f is one-one, f is one-one; if g∘f is onto, g is onto.`] },
      { ex: { q: R`If f(x) = x² and g(x) = 2x + 1, find f∘g and g∘f.`,
        steps: [R`(f∘g)(x) = f(2x + 1) = (2x + 1)².`, R`(g∘f)(x) = g(x²) = 2x² + 1.`], ans: R`(2x + 1)² and 2x² + 1 (not equal)` } },
      { fig: figMachine, cap: R`Think of each function as a machine: (f∘g)(x) feeds x into g, then feeds the output into f. The order matters; g∘f uses the machines the other way round.` },
      { check: { q: R`If f(x) = 3x − 2, find (f∘f)(x).`, ans: R`3(3x − 2) − 2 = 9x − 8.` } }
    ] },

    { h: R`Inverse of a function`, t: [6], blocks: [
      R`A function f: A → B is <b>invertible</b> if there is g: B → A with g∘f = I_A and f∘g = I_B; then g = f⁻¹. <b>f is invertible if and only if it is a bijection.</b> To find f⁻¹: write y = f(x) and solve for x in terms of y.`,
      { fig: figInverse, cap: R`The graph of f⁻¹ is the reflection of the graph of f in the line y = x.` },
      { points: [R`(f⁻¹)⁻¹ = f; (g∘f)⁻¹ = f⁻¹∘g⁻¹.`, R`If (a, b) lies on f, then (b, a) lies on f⁻¹.`, R`The graphs of f and f⁻¹ can meet off the line y = x only if f is decreasing.`] },
      { ex: { q: R`Find the inverse of f(x) = (2x + 3)/(x − 1), x ≠ 1.`,
        steps: [R`y(x − 1) = 2x + 3 ⟹ x(y − 2) = y + 3 ⟹ x = (y + 3)/(y − 2).`], ans: R`f⁻¹(x) = (x + 3)/(x − 2), x ≠ 2` } },
      { check: { q: R`Why does f(x) = x² on ℝ have no inverse?`, ans: R`It is not one-one (f(2) = f(−2)), so not a bijection.` } }
    ] },

    { h: R`Logarithms`, t: [4], blocks: [
      R`For a > 0, a ≠ 1 and x > 0: \(\log_a x = y \iff a^y = x\). Common logarithms use base 10, natural logarithms base e (written ln).`,
      { derive: R`Laws of logarithms`, open: true, steps: [R`\(\log_a (mn) = \log_a m + \log_a n\)`, R`\(\log_a (m/n) = \log_a m - \log_a n\)`, R`\(\log_a m^k = k\log_a m\)`, R`Change of base: \[\log_a x = \frac{\log_b x}{\log_b a}, \qquad \log_a b \cdot \log_b a = 1\]`, R`\(a^{\log_a x} = x\), \(\log_a a = 1\), \(\log_a 1 = 0\), \(\log_{a^k} x = \frac{1}{k}\log_a x\).`] },
      { ex: { q: R`Solve \(\log_2 x + \log_2 (x - 2) = 3\).`,
        steps: [R`\(\log_2[x(x - 2)] = 3 \Rightarrow x^2 - 2x = 8 \Rightarrow (x - 4)(x + 2) = 0\).`, R`x > 2 is required, so x = −2 is rejected.`], ans: R`x = 4` } },
      { ex: { q: R`Evaluate \(\log_2 3 \cdot \log_3 4 \cdot \log_4 8\).`,
        steps: [R`By change of base the product telescopes to \(\log_2 8\).`], ans: R`3` } },
      { mistake: R`Writing log(m + n) = log m + log n. The product rule is log(mn) = log m + log n; there is no rule for the log of a sum.` },
      { check: { q: R`Find x if \(\log_x 64 = 3\).`, ans: R`x³ = 64 ⟹ x = 4.` } }
    ] }
  ],
  summary: [
    R`Sets: roster/set-builder; ∅; subsets (2ⁿ of them); intervals; universal set; Venn diagrams.`,
    R`Operations: ∪, ∩, A − B = A ∩ B′, complement, A Δ B = (A − B) ∪ (B − A); De Morgan: (A ∪ B)′ = A′ ∩ B′, (A ∩ B)′ = A′ ∪ B′.`,
    R`n(A ∪ B) = n(A) + n(B) − n(A ∩ B); three-set inclusion–exclusion. n(P(A)) = 2ⁿ; n(A × B) = n(A)n(B); relations from A to B: 2^(mn).`,
    R`Relations: reflexive, symmetric, transitive; equivalence relations partition the set into classes.`,
    R`Functions: each input exactly one output; domain from conditions (roots ≥ 0, denominators ≠ 0, log args > 0). One-one, onto, bijection; counts nᵐ, ⁿPₘ, n!, onto by inclusion–exclusion.`,
    R`Even/odd; special functions |x|, [x], {x}, sgn x. (f∘g)(x) = f(g(x)); f invertible ⟺ bijective; f⁻¹ is the reflection in y = x.`,
    R`Logs: log(mn) = log m + log n, log mᵏ = k log m, change of base log_a x = log_b x / log_b a.`
  ],
  refs: [
    { t: R`OpenStax Precalculus 2e, §1.1 Functions and Function Notation`, url: 'https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation' },
    { t: R`OpenStax Precalculus 2e, §1.7 Inverse Functions`, url: 'https://openstax.org/books/precalculus-2e/pages/1-7-inverse-functions' },
    { t: R`OpenStax Precalculus 2e, §4.3 Logarithmic Functions`, url: 'https://openstax.org/books/precalculus-2e/pages/4-3-logarithmic-functions' },
    { t: R`Wikipedia: Equivalence relation`, url: 'https://en.wikipedia.org/wiki/Equivalence_relation' },
    { t: R`Wikipedia: Inclusion–exclusion principle`, url: 'https://en.wikipedia.org/wiki/Inclusion%E2%80%93exclusion_principle' }
  ]
});
})();
