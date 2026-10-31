// Book chapter: Limits, Continuity and Differentiability. Full theory with diagrams (rendered on the Theory tab).
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var lcdFigMapping = (function () {
  var xs = [1, 2, 3, 4], ys = [1, 4, 9, 16, 20], p = [];
  p.push(D.ellipse(90, 100, 50, 72, { color: 'c', fill: 'soft' }), D.ellipse(280, 100, 50, 80, { color: 'o', fill: 'soft' }));
  p.push(D.text(90, 14, 'domain A', { color: 'c', bold: true, size: 13 }), D.text(280, 10, 'codomain B', { color: 'o', bold: true, size: 13 }));
  p.push(D.text(185, 20, 'f(x) = x^2', { math: true }));
  function yA(i) { return 50 + i * 33; } function yB(i) { return 40 + i * 30; }
  xs.forEach(function (x, i) {
    p.push(D.text(90, yA(i), String(x), { bold: true }));
    p.push(D.arrow(104, yA(i), 264, yB(i), { color: 'm', w: 1.4, head: 7 }));
  });
  ys.forEach(function (y, i) { p.push(D.text(280, yB(i), String(y), { bold: true, color: i === 4 ? 'm' : 'k' })); });
  p.push(D.text(285, 192, 'range = {1, 4, 9, 16}', { color: 'm', size: 12 }));
  return D.svg(360, 200, p, 'Arrow diagram of the function f(x) = x squared from set A to set B');
})();

var lcdFigGraphs1 = D.row([
  [D.plot({ w: 200, h: 190, x: [-2.2, 2.2], y: [-3, 5], xticks: [-1, 1], yticks: [1],
    fns: [{ f: function (x) { return x * x; }, label: 'y = x^2', lx: 0.12, ly: 4.6 }, { f: function (x) { return x * x * x; }, color: 'o', label: 'y = x^3', lx: -2.1, ly: -2.4 }], label: 'graphs of x squared and x cubed' }), '(a) y = x² and y = x³'],
  [D.plot({ w: 200, h: 190, x: [-4, 4], y: [-4, 4], xticks: [-2, 2], yticks: [2],
    fns: [{ f: function (x) { return 1 / x; }, label: 'y = 1/x', lx: 0.9, ly: 3.2 }], label: 'graph of 1 over x' }), '(b) y = 1/x'],
  [D.plot({ w: 200, h: 190, x: [-3, 4], y: [-3, 4], xticks: [1], yticks: [1],
    fns: [{ f: function (x) { return x; }, color: 'm', w: 1.2, dash: true }, { f: Math.exp, label: 'e^x', lx: -2.8, ly: 0.75 }, { f: Math.log, color: 'o', label: 'ln x', lx: 2.4, ly: 0.35 }], label: 'graphs of e to the x and natural log of x' }), '(c) y = eˣ and y = ln x']
]);

var lcdFigGraphs2 = (function () {
  var PI = Math.PI, segs = [], pts = [];
  for (var k = -2; k <= 1; k++) { segs.push({ x1: k, y1: k, x2: k + 1, y2: k, color: 'c', w: 2.4 }); pts.push({ x: k, y: k, color: 'c' }, { x: k + 1, y: k, open: true, color: 'c' }); }
  return D.row([
    [D.plot({ w: 290, h: 170, x: [-0.6, 7], y: [-1.6, 1.6], xticks: [[PI / 2, 'π/2'], [PI, 'π'], [3 * PI / 2, '3π/2'], [2 * PI, '2π']], yticks: [1, [-1, '−1']],
      fns: [{ f: Math.sin, label: 'sin x', lx: 0.6, ly: 1.25 }, { f: Math.cos, color: 'o', label: 'cos x', lx: 5.7, ly: 1.25 }], label: 'graphs of sine and cosine' }), '(d) y = sin x and y = cos x'],
    [D.plot({ w: 190, h: 170, x: [-2.5, 2.5], y: [-0.6, 2.6], xticks: [-1, 1], yticks: [1, 2], fns: [{ f: Math.abs, label: 'y = |x|', lx: 0.3, ly: 2.2 }], label: 'graph of absolute value of x' }), '(e) y = |x|'],
    [D.plot({ w: 190, h: 170, x: [-2.5, 2.5], y: [-2.5, 2], xticks: [[-2, '−2'], [-1, '−1'], 1, 2], yticks: [1], segs: segs, pts: pts, label: 'graph of greatest integer function' }), '(f) y = [x], the greatest integer ≤ x']
  ]);
})();

var lcdFigInverse = D.plot({
  w: 300, h: 300, x: [-2, 4], y: [-2, 0], eq: true, xticks: [1, 2, 3], yticks: [1, 2, 3],
  fns: [{ f: function (x) { return x; }, color: 'm', w: 1.3, dash: true, label: 'y = x', lx: 2.6, ly: 3.35 },
    { f: Math.exp, label: 'y = e^x', lx: -1.9, ly: 0.55 }, { f: Math.log, color: 'o', label: 'y = ln x', lx: 3.0, ly: 0.65 }],
  segs: [{ x1: 0, y1: 1, x2: 1, y2: 0, color: 'g', dash: '3 3', w: 1.4 }],
  pts: [{ x: 0, y: 1, label: '(0, 1)', pos: 'w' }, { x: 1, y: 0, label: '(1, 0)', pos: 'se' }],
  label: 'e to the x and ln x are mirror images in the line y equals x'
});

var lcdFigHole = D.plot({
  w: 340, h: 230, x: [-1, 3], y: [-0.6, 4], xticks: [1, 2], yticks: [1, 2],
  fns: [{ f: function (x) { return x + 1; }, label: 'y = (x^2 − 1)/(x − 1)', lx: -0.9, ly: 3.7 }],
  guides: [[1, 2]], pts: [{ x: 1, y: 2, open: true, color: 'c' }],
  segs: [{ x1: 0.35, y1: 0.8, x2: 0.8, y2: 1.25, color: 'o', arrow: true, w: 2 }, { x1: 1.7, y1: 2.15, x2: 1.25, y2: 1.7, color: 'g', arrow: true, w: 2 }],
  texts: [{ x: 0.75, y: 0.75, s: 'x → 1^−', color: 'o', anchor: 'start', math: true }, { x: 1.55, y: 1.6, s: 'x → 1^+', color: 'g', anchor: 'start', math: true },
    { x: 1.12, y: 2.45, s: 'hole: f(1) not defined', color: 'm', size: 12, anchor: 'end' }],
  label: 'Graph of (x squared minus 1) over (x minus 1), a line with a hole at x equals 1'
});

var lcdFigSinX = (function () {
  var O = [40, 200], r = 175, t = 35 * Math.PI / 180;
  var A = [O[0] + r, O[1]], P = [O[0] + r * Math.cos(t), O[1] - r * Math.sin(t)], T = [A[0], O[1] - r * Math.tan(t)], M = [P[0], O[1]];
  var arc = 'M' + A[0] + ' ' + A[1] + ' A' + r + ' ' + r + ' 0 0 0 ' + (O[0] + r * Math.cos(1.0)).toFixed(1) + ' ' + (O[1] - r * Math.sin(1.0)).toFixed(1);
  var sector = 'M' + O[0] + ' ' + O[1] + ' L' + A[0] + ' ' + A[1] + ' A' + r + ' ' + r + ' 0 0 0 ' + P[0].toFixed(1) + ' ' + P[1].toFixed(1) + ' Z';
  return D.svg(290, 225, [
    D.path(sector, { color: 'o', fill: 'soft', w: 0.01 }),
    D.path(arc, { color: 'm', w: 1.5 }),
    D.line(O[0], O[1], A[0], A[1], { w: 2 }), D.line(O[0], O[1], T[0], T[1], { w: 2 }), D.line(A[0], A[1], T[0], T[1], { color: 'g', w: 2.4 }),
    D.line(P[0], P[1], A[0], A[1], { color: 'b', w: 1.6 }), D.line(P[0], P[1], M[0], M[1], { color: 'b', w: 1.6, dash: '4 3' }),
    D.angle(O[0], O[1], 34, 0, 35, 'x', { lr: 10 }),
    D.text(O[0] - 10, O[1] + 6, 'O', { math: true }), D.text(A[0] + 10, A[1] + 6, 'A', { math: true }), D.text(P[0] - 8, P[1] - 12, 'P', { math: true }), D.text(T[0] + 10, T[1], 'T', { math: true }),
    D.text((O[0] + M[0]) / 2, O[1] + 14, '1', { color: 'm' }),
    D.text(M[0] - 6, (P[1] + M[1]) / 2, 'sin x', { color: 'b', anchor: 'end', size: 12 }),
    D.text(A[0] + 8, (A[1] + T[1]) / 2, 'tan x', { color: 'g', anchor: 'start', size: 12 })
  ], 'Unit circle with triangle OAP, sector OAP and triangle OAT');
})();

var lcdFigDiscont = D.row([
  [D.plot({ w: 190, h: 160, x: [-0.5, 3], y: [-0.5, 3.4], xticks: [[1.5, 'a']], fns: [{ f: function (x) { return 0.8 * x + 0.6; } }],
    pts: [{ x: 1.5, y: 1.8, open: true }, { x: 1.5, y: 2.9, color: 'o' }], noOrigin: true, label: 'removable discontinuity' }), '(a) removable: a hole'],
  [D.plot({ w: 190, h: 160, x: [-0.5, 3], y: [-0.5, 3.4], xticks: [[1.5, 'a']],
    fns: [{ f: function (x) { return 0.5 * x + 0.4; }, to: 1.5 }, { f: function (x) { return 0.5 * x + 1.7; }, from: 1.5 }],
    pts: [{ x: 1.5, y: 1.15, open: true }, { x: 1.5, y: 2.45, color: 'c' }], noOrigin: true, label: 'jump discontinuity' }), '(b) jump: LHL ≠ RHL'],
  [D.plot({ w: 190, h: 160, x: [-0.5, 3], y: [-0.5, 3.4], xticks: [[1.5, 'a']],
    fns: [{ f: function (x) { return 0.3 / ((x - 1.5) * (x - 1.5)); } }], segs: [{ x1: 1.5, y1: -0.4, x2: 1.5, y2: 3.3, color: 'm', dash: true, w: 1 }], noOrigin: true, label: 'infinite discontinuity' }), '(c) infinite: the graph shoots up']
]);

var lcdFigSecant = (function () {
  function f(x) { return 0.2 * x * x + 0.6; }
  var a = 1.5, b = 4, m = (f(b) - f(a)) / (b - a);
  return D.plot({
    w: 360, h: 260, x: [0, 5.2], y: [0, 6], xticks: [[a, 'a'], [b, 'a + h']], yticks: [],
    fns: [{ f: f, label: 'y = f(x)', lx: 4.45, ly: 5.5 },
      { f: function (x) { return f(a) + m * (x - a); }, from: 0.3, to: 5, color: 'o', w: 1.8, label: 'secant PQ', lx: 2.3, ly: 2.6, anchor: 'end' },
      { f: function (x) { return f(a) + 0.4 * a * (x - a); }, from: 0.2, to: 5, color: 'g', w: 1.8, label: 'tangent at P', lx: 4.15, ly: 2.15 }],
    segs: [{ x1: a, y1: f(a), x2: b, y2: f(a), color: 'm', dash: '3 3', w: 1.2 }, { x1: b, y1: f(a), x2: b, y2: f(b), color: 'm', dash: '3 3', w: 1.2 }],
    pts: [{ x: a, y: f(a), label: 'P', pos: 'nw' }, { x: b, y: f(b), label: 'Q', pos: 'nw' }],
    texts: [{ x: (a + b) / 2, y: f(a) - 0.3, s: 'h', math: true, color: 'm' }, { x: b + 0.08, y: 1.55, s: 'f(a + h) − f(a)', anchor: 'start', math: true, color: 'm', size: 13 }],
    label: 'A secant line through P and Q turning into the tangent at P as h shrinks'
  });
})();

var lcdFigCorner = D.plot({
  w: 300, h: 200, x: [-2.5, 2.5], y: [-0.6, 2.6], xticks: [[-1, '−1'], 1], yticks: [1, 2],
  fns: [{ f: Math.abs, label: 'y = |x|', lx: 1.2, ly: 2.35 }],
  pts: [{ x: 0, y: 0, label: 'sharp corner at 0', pos: 'se', math: false, size: 12 }],
  texts: [{ x: -1.4, y: 0.75, s: 'slope −1', color: 'o', size: 12 }, { x: 1.45, y: 0.75, s: 'slope +1', color: 'g', size: 12 }],
  label: 'Graph of absolute value of x with a corner at the origin'
});

var lcdFigMonotone = D.plot({
  w: 340, h: 250, x: [-2.4, 2.4], y: [-3, 3.2], xticks: [[-1, '−1'], 1], yticks: [[-2, '−2'], 2],
  fns: [{ f: function (x) { return x * x * x - 3 * x; }, to: -1, color: 'g' }, { f: function (x) { return x * x * x - 3 * x; }, from: -1, to: 1, color: 'r' }, { f: function (x) { return x * x * x - 3 * x; }, from: 1, color: 'g' }],
  segs: [{ x1: -1.6, y1: 2, x2: -0.4, y2: 2, color: 'm', dash: '4 3', w: 1.3 }, { x1: 0.4, y1: -2, x2: 1.6, y2: -2, color: 'm', dash: '4 3', w: 1.3 }],
  pts: [{ x: -1, y: 2, label: 'local max (−1, 2)', pos: 'n', math: false, size: 12 }, { x: 1, y: -2, label: 'local min (1, −2)', pos: 's', math: false, size: 12 }],
  texts: [{ x: -2.05, y: -1.2, s: 'increasing', color: 'g', size: 12 }, { x: 0.5, y: 0.85, s: 'decreasing', color: 'r', size: 12, anchor: 'start' }, { x: 2.1, y: -1.6, s: 'increasing', color: 'g', size: 12 }],
  label: 'Graph of x cubed minus 3x showing increasing and decreasing parts'
});

var lcdFigConcave = D.row([
  [D.plot({ w: 180, h: 140, x: [-2, 2], y: [-0.5, 3], fns: [{ f: function (x) { return 0.7 * x * x; } }], noOrigin: true, label: 'concave up' }), "f'' > 0: concave up (holds water)"],
  [D.plot({ w: 180, h: 140, x: [-2, 2], y: [-3, 0.5], fns: [{ f: function (x) { return -0.7 * x * x; }, color: 'o' }], noOrigin: true, label: 'concave down' }), "f'' < 0: concave down (spills water)"]
]);

var lcdFigExtrema = (function () {
  function f(x) { return 0.1 * x * x * x - 0.9 * x * x + 2 * x + 1; }
  var r = Math.sqrt(1.8 * 1.8 - 4 * 0.3 * 2), c1 = (1.8 - r) / 0.6, c2 = (1.8 + r) / 0.6, a = 0.3, b = 6.3;
  return D.plot({
    w: 380, h: 230, x: [0, 7], y: [0, 3.4], xticks: [[a, 'a'], [c1, 'c₁'], [c2, 'c₂'], [b, 'b']], yticks: [],
    fns: [{ f: f, from: a, to: b }],
    segs: [{ x1: c1 - 0.7, y1: f(c1), x2: c1 + 0.7, y2: f(c1), color: 'g', w: 1.4, dash: '4 3' }, { x1: c2 - 0.7, y1: f(c2), x2: c2 + 0.7, y2: f(c2), color: 'g', w: 1.4, dash: '4 3' },
      { x1: c1, y1: 0, x2: c1, y2: f(c1), color: 'm', w: 1, dash: '2 3' }, { x1: c2, y1: 0, x2: c2, y2: f(c2), color: 'm', w: 1, dash: '2 3' }],
    pts: [{ x: a, y: f(a) }, { x: c1, y: f(c1), label: 'local max', pos: 'n', math: false, size: 12 }, { x: c2, y: f(c2), label: 'local min = absolute min', pos: 's', math: false, size: 12 },
      { x: b, y: f(b), label: 'absolute max (at an end)', pos: 'w', math: false, size: 12, color: 'r', lcolor: 'r' }],
    label: 'A curve on a closed interval with a local maximum, a local minimum and the absolute maximum at the right end'
  });
})();

// ---------- chapter text ----------
JEE.book('maths', 'limits-continuity-differentiability', {
  intro: [
    R`How fast is a car going at exactly 3 seconds? How quickly is a balloon's radius growing as you pump air into it? What is the largest box you can make from a sheet of cardboard? All these questions are about <b>change</b>, and the branch of maths that handles change is called <b>calculus</b>.`,
    R`This chapter builds calculus step by step: first <b>functions</b> and their graphs, then the idea of a <b>limit</b> (what a function approaches), then <b>continuity</b> (graphs without breaks), and finally the <b>derivative</b> (the rate of change) with its rules and uses. Every later chapter of calculus (integration, differential equations, areas) rests on this one, so make sure each idea is clear before moving on.`
  ],
  sections: [
    { h: R`Functions: a rule that gives one output`, t: [0], blocks: [
      R`A <b>function</b> is like a machine: you put in a number x, and it gives out exactly <b>one</b> number f(x). For example, the machine "square it" takes 3 and gives 9: \(f(x) = x^2\), so f(3) = 9.`,
      R`The set of allowed inputs is the <b>domain</b>. The set the outputs belong to is the <b>codomain</b>, and the set of outputs actually produced is the <b>range</b>. A <b>real-valued function</b> is one whose outputs are real numbers.`,
      { fig: lcdFigMapping, cap: R`The function \(f(x) = x^2\) from A = {1, 2, 3, 4} to B = {1, 4, 9, 16, 20}. Every element of A has exactly one arrow. The range is {1, 4, 9, 16}; 20 is in the codomain but no input reaches it.` },
      { points: [R`Each input must have exactly <b>one</b> output. Two inputs may share an output (both 2 and −2 give 4 for \(x^2\)), but one input can't give two outputs.`, R`To find the domain of a formula, remove the values where it breaks down: division by zero, square roots of negative numbers, and logarithms of numbers ≤ 0.`] },
      { h3: R`Algebra of functions` },
      R`Functions can be combined like numbers. For two functions f and g: \((f + g)(x) = f(x) + g(x)\), \((f - g)(x) = f(x) - g(x)\), \((fg)(x) = f(x)\,g(x)\) and \(\left(\dfrac fg\right)(x) = \dfrac{f(x)}{g(x)}\) (wherever \(g(x) \neq 0\)). The domain of each is the common part of the two domains.`,
      R`<b>Composition</b> means feeding the output of one machine into another: \((f\circ g)(x) = f(g(x))\). The order matters!`,
      { ex: { q: R`Let \(f(x) = x^2\) and \(g(x) = x + 1\). Find \((f\circ g)(x)\) and \((g\circ f)(x)\), and evaluate both at x = 2.`,
        steps: [R`\((f\circ g)(x) = f(x + 1) = (x + 1)^2\). At x = 2: 9.`, R`\((g\circ f)(x) = g(x^2) = x^2 + 1\). At x = 2: 5.`],
        ans: R`\((x + 1)^2\) and \(x^2 + 1\); 9 and 5, so \(f\circ g \neq g\circ f\)` } },
      { ex: { q: R`Find the domain of \(f(x) = \dfrac{\sqrt{x - 1}}{x - 3}\).`,
        steps: [R`The square root needs \(x - 1 \ge 0\), so \(x \ge 1\).`, R`The denominator can't be zero, so \(x \neq 3\).`],
        ans: R`\([1, 3) \cup (3, \infty)\)` } },
      { check: { q: R`If \(f(x) = 2x + 3\), what is f(f(1))?`, ans: R`f(1) = 5, then f(5) = 13.` } }
    ] },

    { h: R`Graphs of the standard functions`, t: [1], blocks: [
      R`You should be able to sketch these graphs from memory. They are the building blocks for almost every question in calculus.`,
      { fig: lcdFigGraphs1, cap: R`(a) Polynomials: \(x^2\) is a U-shaped parabola, \(x^3\) rises through the origin. (b) The rational function 1/x has two separate branches and never touches the axes. (c) The exponential \(e^x\) is always positive; the logarithm ln x exists only for x > 0. They are mirror images in the dashed line y = x.` },
      { fig: lcdFigGraphs2, cap: R`(d) The trigonometric functions sin x and cos x are waves that repeat every 2π and stay between −1 and 1. (e) The modulus |x| makes every value non-negative: a V shape. (f) The greatest integer function [x] jumps up by 1 at every integer, like a staircase (filled dot = included, open dot = not included).` },
      { table: { head: [R`Function`, R`Domain`, R`Range`], rows: [
        [R`\(x^2\)`, R`\(\mathbb R\)`, R`\([0, \infty)\)`], [R`\(x^3\)`, R`\(\mathbb R\)`, R`\(\mathbb R\)`], [R`\(\dfrac1x\)`, R`\(\mathbb R - \{0\}\)`, R`\(\mathbb R - \{0\}\)`], [R`\(\sqrt x\)`, R`\([0, \infty)\)`, R`\([0, \infty)\)`],
        [R`\(|x|\)`, R`\(\mathbb R\)`, R`\([0, \infty)\)`], [R`\([x]\)`, R`\(\mathbb R\)`, R`\(\mathbb Z\) (integers)`], [R`\(e^x\), \(a^x\)`, R`\(\mathbb R\)`, R`\((0, \infty)\)`], [R`\(\ln x\), \(\log_ax\)`, R`\((0, \infty)\)`, R`\(\mathbb R\)`],
        [R`\(\sin x\), \(\cos x\)`, R`\(\mathbb R\)`, R`\([-1, 1]\)`], [R`\(\tan x\)`, R`\(\mathbb R - \{(2n + 1)\frac\pi2\}\)`, R`\(\mathbb R\)`]] } },
      { points: [R`A <b>polynomial</b> is \(a_0 + a_1x + \dots + a_nx^n\); its graph is smooth and unbroken. A <b>rational function</b> is a ratio of two polynomials; it is undefined where the denominator is 0.`, R`\(e^x\) grows faster than any power of x; \(\ln x\) grows slower than any positive power of x.`, R`\(\ln x\) is negative for 0 < x < 1, zero at x = 1, and positive for x > 1.`] },
      { mistake: R`Writing \([-2.5] = -2\). The greatest integer <i>not exceeding</i> −2.5 is −3 (go left on the number line).` },
      { check: { q: R`What is the range of \(f(x) = 2 + \sin x\)?`, ans: R`sin x is between −1 and 1, so f(x) is between 1 and 3: the range is [1, 3].` } }
    ] },

    { h: R`Inverse functions`, t: [2], blocks: [
      R`An <b>inverse function</b> \(f^{-1}\) undoes what f does: if f takes 2 to 7, then \(f^{-1}\) takes 7 back to 2. So \(f^{-1}(f(x)) = x\).`,
      R`Only some functions can be undone. f must be <b>one-one</b> (different inputs always give different outputs; otherwise we wouldn't know which input to go back to) and <b>onto</b> (every element of the codomain is an output). Such a function is called a <b>bijection</b>.`,
      { fig: lcdFigInverse, cap: R`The graphs of a function and its inverse are mirror images in the line y = x. Here \(e^x\) passes through (0, 1), so its inverse ln x passes through (1, 0).` },
      { h3: R`How to find an inverse` },
      R`Write y = f(x), solve for x in terms of y, then swap the letters.`,
      { ex: { q: R`Find the inverse of \(f(x) = 3x - 5\).`,
        steps: [R`y = 3x − 5, so 3x = y + 5 and \(x = \dfrac{y + 5}{3}\).`, R`Swap the letters: \(f^{-1}(x) = \dfrac{x + 5}{3}\).`, R`Check: \(f(f^{-1}(x)) = 3\cdot\dfrac{x + 5}{3} - 5 = x\). ✓`],
        ans: R`\(f^{-1}(x) = \dfrac{x + 5}{3}\)` } },
      { h3: R`Inverse trigonometric functions` },
      R`sin x is not one-one (sin 0 = sin π = 0), so to define \(\sin^{-1}x\) we restrict sin x to a <b>principal branch</b> where it is one-one. The output of an inverse trig function always lies in its principal range:`,
      { table: { head: [R`Function`, R`Domain`, R`Principal range`], rows: [
        [R`\(\sin^{-1}x\)`, R`\([-1, 1]\)`, R`\([-\frac\pi2, \frac\pi2]\)`], [R`\(\cos^{-1}x\)`, R`\([-1, 1]\)`, R`\([0, \pi]\)`], [R`\(\tan^{-1}x\)`, R`\(\mathbb R\)`, R`\((-\frac\pi2, \frac\pi2)\)`],
        [R`\(\cot^{-1}x\)`, R`\(\mathbb R\)`, R`\((0, \pi)\)`], [R`\(\sec^{-1}x\)`, R`\(\mathbb R - (-1, 1)\)`, R`\([0, \pi] - \{\frac\pi2\}\)`], [R`\(\csc^{-1}x\)`, R`\(\mathbb R - (-1, 1)\)`, R`\([-\frac\pi2, \frac\pi2] - \{0\}\)`]] } },
      { ex: { q: R`Find \(\sin^{-1}\left(\sin\dfrac{2\pi}{3}\right)\).`,
        steps: [R`It is tempting to answer 2π/3, but 2π/3 is not in the principal range \([-\pi/2, \pi/2]\).`, R`\(\sin\dfrac{2\pi}{3} = \sin\dfrac\pi3 = \dfrac{\sqrt3}{2}\), and π/3 is in the principal range.`],
        ans: R`\(\dfrac\pi3\)` } },
      { mistake: R`Confusing \(\sin^{-1}x\) (the inverse function) with \((\sin x)^{-1} = \dfrac{1}{\sin x}\). They are completely different.` },
      { check: { q: R`What is \(\cos^{-1}(-1)\)?`, ans: R`π, because cos π = −1 and π is in [0, π].` } }
    ] },

    { h: R`The idea of a limit`, t: [3], blocks: [
      R`Look at \(f(x) = \dfrac{x^2 - 1}{x - 1}\). At x = 1 it gives \(\frac00\), which is meaningless, so f(1) is not defined. But what happens when x gets <i>close</i> to 1?`,
      { table: { head: [R`x`, R`0.9`, R`0.99`, R`0.999`, R`1`, R`1.001`, R`1.01`, R`1.1`], rows: [[R`f(x)`, R`1.9`, R`1.99`, R`1.999`, R`?`, R`2.001`, R`2.01`, R`2.1`]] } },
      R`As x gets closer and closer to 1 (from either side), f(x) gets closer and closer to 2. We say <b>the limit of f(x) as x tends to 1 is 2</b>: \[\lim_{x\to1}\frac{x^2 - 1}{x - 1} = 2\] In fact, for x ≠ 1, \(\dfrac{x^2 - 1}{x - 1} = \dfrac{(x - 1)(x + 1)}{x - 1} = x + 1\), which is close to 2 when x is close to 1.`,
      { fig: lcdFigHole, cap: R`The graph is the line y = x + 1 with a hole at (1, 2). Coming from the left (x → 1⁻) or from the right (x → 1⁺), the curve heads to the same height, 2. That height is the limit, even though f(1) itself doesn't exist.` },
      { analogy: R`A limit is like walking towards a door. Even if the door is locked and you can never step on the exact spot, everyone can see where you are heading.` },
      { h3: R`Left-hand and right-hand limits` },
      R`The <b>left-hand limit</b> (LHL) is the value f(x) approaches as x comes from values smaller than a, written \(\lim_{x\to a^-}f(x)\). The <b>right-hand limit</b> (RHL), \(\lim_{x\to a^+}f(x)\), uses values larger than a. In practice we put x = a − h or x = a + h and let h → 0 (h > 0).`,
      { note: R`\(\lim_{x\to a}f(x)\) exists only when the LHL and RHL both exist and are equal. The value f(a) itself does not matter for the limit; it may be different or not defined at all.`, title: 'Key rule' },
      { ex: { q: R`Does \(\lim_{x\to0}\dfrac{|x|}{x}\) exist?`,
        steps: [R`For x > 0, \(|x| = x\), so the fraction is 1: RHL = 1.`, R`For x < 0, \(|x| = -x\), so the fraction is −1: LHL = −1.`, R`LHL ≠ RHL.`],
        ans: R`No, the limit does not exist` } },
      { check: { q: R`If LHL = RHL = 5 at x = 2, but f(2) = 7, what is \(\lim_{x\to2}f(x)\)?`, ans: R`5. The limit depends only on nearby values, not on f(2).` } }
    ] },

    { h: R`Evaluating limits: methods and standard limits`, t: [3], blocks: [
      R`Limits obey the usual rules of arithmetic: the limit of a sum, difference, product or quotient is the sum, difference, product or quotient of the limits (as long as we don't divide by zero). This gives a set of methods to try in order:`,
      { points: [R`<b>Direct substitution:</b> if putting x = a gives a proper number, that is the limit. \(\lim_{x\to2}(x^2 + 3) = 7\).`, R`<b>Factorise and cancel:</b> if you get \(\frac00\), factorise and cancel the common factor (as with \(\frac{x^2 - 1}{x - 1}\)).`, R`<b>Rationalise:</b> for square roots, multiply the top and bottom by the conjugate.`, R`<b>Limits at infinity:</b> divide the top and bottom by the highest power of x; then use \(\frac1x\to0\).`] },
      { h3: R`The standard limits` },
      { table: { head: [R`Limit`, R`Value`], rows: [
        [R`\(\displaystyle\lim_{x\to a}\frac{x^n - a^n}{x - a}\)`, R`\(na^{n-1}\)`], [R`\(\displaystyle\lim_{x\to0}\frac{\sin x}{x}\)`, R`1 (x in radians)`], [R`\(\displaystyle\lim_{x\to0}\frac{\tan x}{x}\)`, R`1`],
        [R`\(\displaystyle\lim_{x\to0}\frac{1 - \cos x}{x^2}\)`, R`\(\frac12\)`], [R`\(\displaystyle\lim_{x\to0}\frac{e^x - 1}{x}\)`, R`1`], [R`\(\displaystyle\lim_{x\to0}\frac{a^x - 1}{x}\)`, R`\(\ln a\)`],
        [R`\(\displaystyle\lim_{x\to0}\frac{\ln(1 + x)}{x}\)`, R`1`], [R`\(\displaystyle\lim_{x\to0}(1 + x)^{1/x}\)`, R`e`]] } },
      { derive: R`Why is \(\lim_{x\to a}\frac{x^n - a^n}{x - a} = na^{n-1}\)?`, steps: [
        R`Factorise: \(x^n - a^n = (x - a)(x^{n-1} + x^{n-2}a + x^{n-3}a^2 + \dots + a^{n-1})\).`,
        R`Cancel (x − a): the fraction equals \(x^{n-1} + x^{n-2}a + \dots + a^{n-1}\), a sum of n terms.`,
        R`As x → a, each of the n terms becomes \(a^{n-1}\). So the limit is \(na^{n-1}\).`
      ] },
      { fig: lcdFigSinX, cap: R`A circle of radius 1 and a small angle x (in radians). Triangle OAP has area ½ sin x, the shaded sector OAP has area ½ x, and triangle OAT has area ½ tan x.` },
      { derive: R`Why is \(\lim_{x\to0}\frac{\sin x}{x} = 1\)?`, steps: [
        R`In the figure, triangle OAP fits inside sector OAP, which fits inside triangle OAT. So \(\tfrac12\sin x < \tfrac12x < \tfrac12\tan x\) (for small x > 0).`,
        R`Divide everything by \(\tfrac12\sin x\) (positive): \(1 < \dfrac{x}{\sin x} < \dfrac{1}{\cos x}\). Flip all three (which reverses the signs): \(\cos x < \dfrac{\sin x}{x} < 1\).`,
        R`As x → 0, cos x → 1. The fraction is squeezed between two things that both tend to 1, so it must tend to 1 as well (the <b>sandwich theorem</b>). For x < 0 the fraction has the same values, since \(\frac{\sin(-x)}{-x} = \frac{\sin x}{x}\).`
      ] },
      { ex: { q: R`Evaluate \(\displaystyle\lim_{x\to2}\frac{x^3 - 8}{x - 2}\).`,
        steps: [R`This is the standard form with n = 3 and a = 2.`, R`Limit = \(3\times2^2\).`],
        ans: R`12` } },
      { ex: { q: R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sin3x}{x}\).`,
        steps: [R`Make the angle and the denominator match: \(\dfrac{\sin3x}{x} = 3\cdot\dfrac{\sin3x}{3x}\).`, R`As x → 0, 3x → 0 too, so \(\dfrac{\sin3x}{3x}\to1\).`],
        ans: R`3` } },
      { ex: { q: R`Evaluate \(\displaystyle\lim_{x\to0}\frac{\sqrt{1 + x} - 1}{x}\).`,
        steps: [R`Multiply the top and bottom by the conjugate \(\sqrt{1 + x} + 1\): the top becomes \((1 + x) - 1 = x\).`, R`So the fraction is \(\dfrac{x}{x(\sqrt{1 + x} + 1)} = \dfrac{1}{\sqrt{1 + x} + 1}\), which tends to \(\dfrac12\).`],
        ans: R`\(\frac12\)` } },
      { ex: { q: R`Evaluate \(\displaystyle\lim_{x\to\infty}\frac{3x^2 + 2x}{5x^2 - 1}\) and \(\displaystyle\lim_{x\to\infty}\left(1 + \frac2x\right)^x\).`,
        steps: [R`Divide by \(x^2\): \(\dfrac{3 + 2/x}{5 - 1/x^2}\to\dfrac35\).`, R`For the second, put \(t = \frac2x\) (t → 0): \(\left(1 + t\right)^{2/t} = \left[(1 + t)^{1/t}\right]^2\to e^2\).`],
        ans: R`\(\frac35\) and \(e^2\)` } },
      { mistake: R`Using \(\lim\frac{\sin x}{x} = 1\) with x in degrees. The standard limits work only in radians.` },
      { check: { q: R`Evaluate \(\displaystyle\lim_{x\to0}\frac{e^{2x} - 1}{x}\).`, ans: R`\(2\cdot\dfrac{e^{2x} - 1}{2x}\to2\times1 = 2\).` } }
    ] },

    { h: R`Continuity`, t: [3], blocks: [
      R`Roughly, a function is <b>continuous</b> if you can draw its graph without lifting your pencil. Precisely, f is continuous at x = a when three things are true:`,
      { points: [R`f(a) is defined;`, R`\(\lim_{x\to a}f(x)\) exists (LHL = RHL);`, R`the limit equals the value: \(\lim_{x\to a}f(x) = f(a)\).`] },
      R`If any one of these fails, f is <b>discontinuous</b> at a. The three common kinds of break are shown below.`,
      { fig: lcdFigDiscont, cap: R`(a) Removable: the limit exists but f(a) is missing or misplaced; redefining one value fixes it. (b) Jump: the left and right limits are different. (c) Infinite: the function blows up near a.` },
      R`Good news: polynomials, sin x, cos x, \(e^x\), |x| are continuous everywhere, and rational functions, tan x and ln x are continuous wherever they are defined. Sums, differences, products, quotients (where the denominator isn't 0) and compositions of continuous functions are continuous too. So you usually only need to check the special points, such as where a piecewise function changes its formula.`,
      { ex: { q: R`Find k so that \(f(x) = \begin{cases} kx + 1, & x \le 2\\ 3x - 1, & x > 2\end{cases}\) is continuous at x = 2.`,
        steps: [R`f(2) = LHL = 2k + 1 (the first formula holds at x = 2 and to its left).`, R`RHL = \(\lim_{x\to2^+}(3x - 1) = 5\).`, R`Continuity needs 2k + 1 = 5.`],
        ans: R`k = 2` } },
      { ex: { q: R`Where is the greatest integer function \(f(x) = [x]\) discontinuous?`,
        steps: [R`At an integer n: LHL = n − 1 (just to the left, [x] = n − 1) but RHL = n.`, R`Between integers, [x] is constant, so it is continuous there.`],
        ans: R`At every integer` } },
      { note: R`If f is continuous on [a, b], it takes every value between f(a) and f(b) (the <b>intermediate value theorem</b>). So if f(a) and f(b) have opposite signs, f(x) = 0 has a root between a and b.`, title: 'A useful consequence' },
      { check: { q: R`Is \(f(x) = \dfrac{1}{x - 3}\) continuous at x = 3?`, ans: R`No. f(3) is not defined (infinite discontinuity).` } }
    ] },

    { h: R`The derivative: the slope of the tangent`, t: [3], blocks: [
      R`On a straight line, the slope (steepness) is the same everywhere: rise ÷ run. On a curve, the steepness changes from point to point. The <b>derivative</b> measures the steepness at a single point: it is the slope of the <b>tangent</b> line there.`,
      R`Take a point P = (a, f(a)) and a nearby point Q = (a + h, f(a + h)). The line through them (a <b>secant</b>) has slope \(\dfrac{f(a + h) - f(a)}{h}\). Now slide Q towards P (let h → 0). The secant turns into the tangent at P.`,
      { fig: lcdFigSecant, cap: R`The secant PQ (orange) has slope \(\frac{f(a + h) - f(a)}{h}\). As h shrinks, Q slides down the curve to P and the secant turns into the tangent at P (green).` },
      R`So the <b>derivative of f at a</b> is \[f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h}\] provided this limit exists. Doing this for every x gives a new function, \(f'(x)\), also written \(\dfrac{dy}{dx}\) or \(\dfrac{d}{dx}f(x)\). Finding a derivative straight from this definition is called differentiating from <b>first principles</b>.`,
      { analogy: R`On a speedometer, the derivative is the reading at this instant. Average speed over a trip is like the secant; the speedometer reading is like the tangent.` },
      { ex: { q: R`Find the derivative of \(f(x) = x^2\) from first principles.`,
        steps: [R`\(\dfrac{f(x + h) - f(x)}{h} = \dfrac{x^2 + 2xh + h^2 - x^2}{h} = \dfrac{2xh + h^2}{h} = 2x + h\).`, R`As h → 0, this tends to 2x.`],
        ans: R`\(\dfrac{d}{dx}x^2 = 2x\)` } },
      { ex: { q: R`Find the derivative of \(f(x) = \sin x\) from first principles.`,
        steps: [R`\(\sin(x + h) - \sin x = 2\cos\left(x + \frac h2\right)\sin\frac h2\) (sum-to-product formula).`, R`So \(\dfrac{f(x + h) - f(x)}{h} = \cos\left(x + \frac h2\right)\cdot\dfrac{\sin(h/2)}{h/2}\).`, R`As h → 0, the first factor → cos x and the second → 1.`],
        ans: R`\(\dfrac{d}{dx}\sin x = \cos x\)` } },
      { check: { q: R`Using first principles, what is the derivative of f(x) = 5x + 2?`, ans: R`\(\frac{5(x + h) + 2 - 5x - 2}{h} = 5\). The slope of a straight line is constant.` } }
    ] },

    { h: R`Differentiability`, t: [3], blocks: [
      R`A function is <b>differentiable</b> at a if \(f'(a)\) exists, which means the curve has a single, clear tangent there. As with limits, we check both sides:`,
      R`\[\text{LHD} = \lim_{h\to0^+}\frac{f(a - h) - f(a)}{-h},\qquad \text{RHD} = \lim_{h\to0^+}\frac{f(a + h) - f(a)}{h}\] f is differentiable at a only if LHD = RHD (and both are finite).`,
      { fig: lcdFigCorner, cap: R`|x| is continuous at 0 (no break), but it has a sharp corner there. The slope is −1 on the left and +1 on the right, so there is no single tangent: |x| is not differentiable at 0.` },
      { points: [R`Differentiable ⇒ continuous. If a function has a derivative at a point, it can't have a break there.`, R`Continuous ⇏ differentiable. A graph can be unbroken but still have a corner (|x| at 0) or a vertical tangent (\(\sqrt[3]{x}\) at 0).`] },
      { ex: { q: R`Is \(f(x) = |x - 2|\) differentiable at x = 2?`,
        steps: [R`RHD: \(\dfrac{|h| - 0}{h} = 1\). LHD: \(\dfrac{|-h| - 0}{-h} = -1\).`, R`LHD ≠ RHD (it is still continuous at 2).`],
        ans: R`No; it has a corner at x = 2` } },
      { ex: { q: R`Is \(f(x) = x|x|\) differentiable at x = 0?`,
        steps: [R`RHD: \(\dfrac{h|h|}{h} = |h|\to0\). LHD: \(\dfrac{(-h)|-h|}{-h} = |h|\to0\).`, R`Both are 0.`],
        ans: R`Yes, and f'(0) = 0` } },
      { check: { q: R`True or false: every continuous function is differentiable.`, ans: R`False. |x| is continuous at 0 but not differentiable there.` } }
    ] },

    { h: R`Rules of differentiation`, t: [4], blocks: [
      R`Using first principles every time would be slow. Instead we use a few rules, each proved once from the definition. Let u and v be functions of x, and c a constant.`,
      { table: { head: [R`Rule`, R`Formula`], rows: [
        [R`Constant`, R`\(\dfrac{d}{dx}(c) = 0\)`], [R`Power rule`, R`\(\dfrac{d}{dx}x^n = nx^{n-1}\) (for any real n)`], [R`Constant multiple`, R`\(\dfrac{d}{dx}(cu) = c\,u'\)`],
        [R`Sum and difference`, R`\((u \pm v)' = u' \pm v'\)`], [R`Product rule`, R`\((uv)' = u'v + uv'\)`], [R`Quotient rule`, R`\(\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}\)`]] } },
      { derive: R`Proving the product rule`, steps: [
        R`\(u(x + h)v(x + h) - u(x)v(x) = u(x + h)\,[v(x + h) - v(x)] + v(x)\,[u(x + h) - u(x)]\) (add and subtract \(u(x + h)v(x)\)).`,
        R`Divide by h: \(u(x + h)\cdot\dfrac{v(x + h) - v(x)}{h} + v(x)\cdot\dfrac{u(x + h) - u(x)}{h}\).`,
        R`Let h → 0: \(u(x + h)\to u(x)\) (differentiable functions are continuous), and the fractions become v' and u'. So \((uv)' = uv' + vu'\).`
      ] },
      { analogy: R`Product rule in words: "first times derivative of second, plus second times derivative of first". Quotient rule: "low d-high minus high d-low, over low squared".` },
      { ex: { q: R`Differentiate \(y = x^2\sin x\).`,
        steps: [R`Product rule with u = x², v = sin x: \(y' = 2x\cdot\sin x + x^2\cdot\cos x\).`],
        ans: R`\(2x\sin x + x^2\cos x\)` } },
      { ex: { q: R`Differentiate \(y = \dfrac{x + 1}{x - 1}\).`,
        steps: [R`Quotient rule: \(y' = \dfrac{1\cdot(x - 1) - (x + 1)\cdot1}{(x - 1)^2}\).`, R`The top simplifies to −2.`],
        ans: R`\(-\dfrac{2}{(x - 1)^2}\)` } },
      { ex: { q: R`Differentiate \(y = 3x^4 - \dfrac{2}{x} + 5\sqrt x\).`,
        steps: [R`Write as powers: \(3x^4 - 2x^{-1} + 5x^{1/2}\).`, R`Power rule term by term: \(12x^3 + 2x^{-2} + \frac52x^{-1/2}\).`],
        ans: R`\(12x^3 + \dfrac{2}{x^2} + \dfrac{5}{2\sqrt x}\)` } },
      { mistake: R`Writing \((uv)' = u'v'\). The derivative of a product is not the product of the derivatives: \((x\cdot x)' = 2x\), but \(1\cdot1 = 1\).` },
      { check: { q: R`Differentiate \(x^{10}\).`, ans: R`\(10x^9\).` } }
    ] },

    { h: R`Derivatives of trigonometric, inverse trigonometric, exponential and logarithmic functions`, t: [5], blocks: [
      R`Learn this table well; it is used in almost every calculus question.`,
      { table: { head: [R`f(x)`, R`f'(x)`, R`f(x)`, R`f'(x)`], rows: [
        [R`\(\sin x\)`, R`\(\cos x\)`, R`\(\sin^{-1}x\)`, R`\(\dfrac{1}{\sqrt{1 - x^2}}\)`], [R`\(\cos x\)`, R`\(-\sin x\)`, R`\(\cos^{-1}x\)`, R`\(-\dfrac{1}{\sqrt{1 - x^2}}\)`],
        [R`\(\tan x\)`, R`\(\sec^2x\)`, R`\(\tan^{-1}x\)`, R`\(\dfrac{1}{1 + x^2}\)`], [R`\(\cot x\)`, R`\(-\csc^2x\)`, R`\(\cot^{-1}x\)`, R`\(-\dfrac{1}{1 + x^2}\)`],
        [R`\(\sec x\)`, R`\(\sec x\tan x\)`, R`\(\sec^{-1}x\)`, R`\(\dfrac{1}{|x|\sqrt{x^2 - 1}}\)`], [R`\(\csc x\)`, R`\(-\csc x\cot x\)`, R`\(\csc^{-1}x\)`, R`\(-\dfrac{1}{|x|\sqrt{x^2 - 1}}\)`],
        [R`\(e^x\)`, R`\(e^x\)`, R`\(\ln x\)`, R`\(\dfrac1x\)`], [R`\(a^x\)`, R`\(a^x\ln a\)`, R`\(\log_ax\)`, R`\(\dfrac{1}{x\ln a}\)`]] } },
      { derive: R`Where do \((e^x)' = e^x\) and \((\ln x)' = \frac1x\) come from?`, steps: [
        R`\(\dfrac{e^{x + h} - e^x}{h} = e^x\cdot\dfrac{e^h - 1}{h}\to e^x\times1\), using the standard limit.`,
        R`\(\dfrac{\ln(x + h) - \ln x}{h} = \dfrac{\ln(1 + h/x)}{h} = \dfrac1x\cdot\dfrac{\ln(1 + h/x)}{h/x}\to\dfrac1x\times1\).`,
        R`So \(e^x\) is the special function that is its own derivative: at every point, its slope equals its height.`
      ] },
      { derive: R`Derivative of \(\sin^{-1}x\)`, steps: [
        R`Let \(y = \sin^{-1}x\), so \(\sin y = x\), with y between −π/2 and π/2.`,
        R`Differentiate both sides with respect to x: \(\cos y\,\dfrac{dy}{dx} = 1\), so \(\dfrac{dy}{dx} = \dfrac{1}{\cos y}\).`,
        R`In this range cos y ≥ 0, so \(\cos y = \sqrt{1 - \sin^2y} = \sqrt{1 - x^2}\). Hence \(\dfrac{dy}{dx} = \dfrac{1}{\sqrt{1 - x^2}}\).`
      ] },
      { ex: { q: R`Using the quotient rule, show that \(\dfrac{d}{dx}\tan x = \sec^2x\).`,
        steps: [R`\(\tan x = \dfrac{\sin x}{\cos x}\), so the derivative is \(\dfrac{\cos x\cdot\cos x - \sin x\cdot(-\sin x)}{\cos^2x}\).`, R`The top is \(\cos^2x + \sin^2x = 1\).`],
        ans: R`\(\dfrac{1}{\cos^2x} = \sec^2x\)` } },
      { check: { q: R`Differentiate \(e^x\sin x\).`, ans: R`Product rule: \(e^x\sin x + e^x\cos x = e^x(\sin x + \cos x)\).` } }
    ] },

    { h: R`The chain rule; implicit, logarithmic and parametric differentiation`, t: [5], blocks: [
      R`How do we differentiate \(\sin(x^2)\) or \((3x + 1)^5\)? These are functions inside functions (composites). The <b>chain rule</b> says: if y depends on u, and u depends on x, then \[\frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}\] In words: differentiate the outer function (leaving the inside alone), then multiply by the derivative of the inside.`,
      { analogy: R`Three gears: if gear A turns 3 times for every turn of B, and B turns 2 times for every turn of C, then A turns 3 × 2 = 6 times for each turn of C. Rates of change multiply along a chain in the same way.` },
      { ex: { q: R`Differentiate (a) \(\sin(x^2)\) (b) \((3x + 1)^5\) (c) \(e^{\sin x}\) (d) \(\ln(\cos x)\).`,
        steps: [R`(a) Outer sin, inner x²: \(\cos(x^2)\cdot2x\).`, R`(b) Outer ( )⁵, inner 3x + 1: \(5(3x + 1)^4\cdot3\).`, R`(c) Outer \(e^{(\ )}\), inner sin x: \(e^{\sin x}\cos x\).`, R`(d) Outer ln, inner cos x: \(\dfrac{1}{\cos x}\cdot(-\sin x)\).`],
        ans: R`(a) \(2x\cos(x^2)\) (b) \(15(3x + 1)^4\) (c) \(e^{\sin x}\cos x\) (d) \(-\tan x\)` } },
      { h3: R`Implicit differentiation` },
      R`Sometimes y is mixed up with x in an equation, like \(x^2 + y^2 = 25\) (a circle), and it is awkward to solve for y. Just differentiate both sides with respect to x, remembering that y is a function of x, so \(\dfrac{d}{dx}(y^2) = 2y\dfrac{dy}{dx}\) (chain rule). Then solve for \(\dfrac{dy}{dx}\).`,
      { ex: { q: R`Find \(\dfrac{dy}{dx}\) for \(x^2 + y^2 = 25\), and the slope of the tangent at (3, 4).`,
        steps: [R`\(2x + 2y\dfrac{dy}{dx} = 0\), so \(\dfrac{dy}{dx} = -\dfrac xy\).`, R`At (3, 4): \(-\dfrac34\).`],
        ans: R`\(-\dfrac xy\); slope \(-\frac34\) at (3, 4)` } },
      { h3: R`Logarithmic differentiation` },
      R`For a variable raised to a variable power, like \(x^x\), or a long product, take ln of both sides first; the logarithm turns powers into products.`,
      { ex: { q: R`Differentiate \(y = x^x\) (x > 0).`,
        steps: [R`\(\ln y = x\ln x\).`, R`Differentiate: \(\dfrac1y\dfrac{dy}{dx} = \ln x + x\cdot\dfrac1x = \ln x + 1\).`, R`Multiply by y.`],
        ans: R`\(\dfrac{dy}{dx} = x^x(1 + \ln x)\)` } },
      { h3: R`Parametric differentiation` },
      R`If x and y are both given in terms of a third variable t (a parameter), then \(\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}\).`,
      { ex: { q: R`If \(x = a\cos t\) and \(y = a\sin t\), find \(\dfrac{dy}{dx}\).`,
        steps: [R`\(\dfrac{dx}{dt} = -a\sin t\) and \(\dfrac{dy}{dt} = a\cos t\).`, R`\(\dfrac{dy}{dx} = \dfrac{a\cos t}{-a\sin t}\).`],
        ans: R`\(-\cot t\)` } },
      { mistake: R`Forgetting to multiply by the derivative of the inside function: writing \(\frac{d}{dx}\sin(x^2) = \cos(x^2)\) instead of \(2x\cos(x^2)\).` },
      { check: { q: R`Differentiate \(\sqrt{1 + x^2}\).`, ans: R`\(\dfrac{1}{2\sqrt{1 + x^2}}\cdot2x = \dfrac{x}{\sqrt{1 + x^2}}\).` } }
    ] },

    { h: R`The second derivative`, t: [6], blocks: [
      R`The derivative f'(x) is itself a function, so we can differentiate it again. The result is the <b>second derivative</b>: \[f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)\] It measures how fast the slope itself is changing.`,
      { analogy: R`If x is position and t is time, the first derivative dx/dt is velocity and the second derivative d²x/dt² is acceleration: how quickly the velocity changes.` },
      { fig: lcdFigConcave, cap: R`When f'' > 0, the slope keeps increasing and the curve bends upward (concave up, like a cup). When f'' < 0, the slope keeps decreasing and the curve bends downward (concave down, like a cap).` },
      { ex: { q: R`If \(y = x^3 - 3x^2 + 4\), find \(\dfrac{d^2y}{dx^2}\) at x = 2.`,
        steps: [R`\(y' = 3x^2 - 6x\).`, R`\(y'' = 6x - 6\). At x = 2: 12 − 6.`],
        ans: R`6` } },
      { ex: { q: R`Show that \(y = A\sin x + B\cos x\) satisfies \(\dfrac{d^2y}{dx^2} + y = 0\) for any constants A and B.`,
        steps: [R`\(y' = A\cos x - B\sin x\).`, R`\(y'' = -A\sin x - B\cos x = -y\).`],
        ans: R`So \(y'' + y = 0\) ✓` } },
      { check: { q: R`Find the second derivative of \(e^{3x}\).`, ans: R`\(3e^{3x}\), then \(9e^{3x}\).` } }
    ] },

    { h: R`Applications: rate of change`, t: [7], blocks: [
      R`\(\dfrac{dy}{dx}\) tells us how fast y changes when x changes. When both change with time, the chain rule links their rates: \(\dfrac{dy}{dt} = \dfrac{dy}{dx}\cdot\dfrac{dx}{dt}\). These are called <b>related rates</b> problems.`,
      { points: [R`Write an equation linking the quantities (area, volume, distance…).`, R`Differentiate both sides with respect to time t.`, R`Substitute the known values <i>after</i> differentiating, then solve for the unknown rate.`] },
      { ex: { q: R`The radius of a circle increases at 0.5 cm/s. How fast is its area increasing when the radius is 4 cm?`,
        steps: [R`\(A = \pi r^2\), so \(\dfrac{dA}{dt} = 2\pi r\dfrac{dr}{dt}\).`, R`At r = 4: \(2\pi\times4\times0.5 = 4\pi\).`],
        ans: R`\(4\pi \approx 12.6\) cm²/s` } },
      { ex: { q: R`Air is pumped into a spherical balloon at 100 cm³/s. How fast is the radius increasing when the radius is 5 cm?`,
        steps: [R`\(V = \frac43\pi r^3\), so \(\dfrac{dV}{dt} = 4\pi r^2\dfrac{dr}{dt}\).`, R`\(100 = 4\pi\times25\times\dfrac{dr}{dt}\), so \(\dfrac{dr}{dt} = \dfrac{100}{100\pi} = \dfrac1\pi\).`],
        ans: R`\(\frac1\pi \approx 0.318\) cm/s` } },
      { mistake: R`Substituting the value (like r = 4) before differentiating. Then r becomes a constant and its rate wrongly turns into zero.` },
      { check: { q: R`The side of a square grows at 2 cm/s. How fast is its area growing when the side is 10 cm?`, ans: R`\(A = s^2\), so \(\frac{dA}{dt} = 2s\frac{ds}{dt} = 2\times10\times2 = 40\) cm²/s.` } }
    ] },

    { h: R`Increasing and decreasing functions`, t: [7], blocks: [
      R`A function is <b>increasing</b> on an interval if its graph rises as you move to the right, and <b>decreasing</b> if it falls. A function that is only increasing or only decreasing on an interval is called <b>monotonic</b> there. The derivative tells us which, because it is the slope:`,
      { points: [R`f'(x) > 0 on an interval ⇒ f is (strictly) increasing there.`, R`f'(x) < 0 on an interval ⇒ f is (strictly) decreasing there.`, R`f'(x) = 0 on a whole interval ⇒ f is constant there.`] },
      { fig: lcdFigMonotone, cap: R`\(f(x) = x^3 - 3x\). Its derivative \(3x^2 - 3 = 3(x - 1)(x + 1)\) is positive for x < −1 and x > 1 (green, increasing) and negative between −1 and 1 (red, decreasing). The tangent is flat at the turning points x = ±1.` },
      { ex: { q: R`Find the intervals on which \(f(x) = x^3 - 3x\) is increasing or decreasing.`,
        steps: [R`\(f'(x) = 3x^2 - 3 = 3(x - 1)(x + 1)\). It is zero at x = −1 and x = 1.`, R`Test a value in each region: f'(−2) = 9 > 0, f'(0) = −3 < 0, f'(2) = 9 > 0.`],
        ans: R`Increasing on \((-\infty, -1)\) and \((1, \infty)\); decreasing on \((-1, 1)\)` } },
      { note: R`\(x^3\) is increasing everywhere even though its derivative \(3x^2\) is zero at x = 0. A derivative that is zero only at isolated points doesn't stop a function from being increasing.`, title: 'Fine print' },
      { check: { q: R`Is \(f(x) = e^x\) increasing or decreasing?`, ans: R`Increasing everywhere, since \(f'(x) = e^x > 0\).` } }
    ] },

    { h: R`Maxima and minima`, t: [7], blocks: [
      R`Businesses want the maximum profit; engineers want the minimum material. Calculus finds these "best" values.`,
      R`f has a <b>local maximum</b> at c if f(c) is bigger than all nearby values (the top of a hill), and a <b>local minimum</b> if f(c) is smaller than all nearby values (the bottom of a valley). At a smooth hilltop or valley floor, the tangent is flat, so f'(c) = 0. Points where f'(c) = 0 (or f' doesn't exist) are called <b>critical points</b>.`,
      { fig: lcdFigExtrema, cap: R`On the closed interval [a, b]: a local maximum at c₁ and a local minimum at c₂, both with flat (horizontal) tangents. The local minimum is also the lowest point overall, but the highest point overall is at the end b, not at the local maximum.` },
      { h3: R`Two tests` },
      { points: [R`<b>First derivative test:</b> if f' changes from + to − as x passes c, then c is a local maximum; from − to +, a local minimum; no change of sign, neither.`, R`<b>Second derivative test:</b> if f'(c) = 0 and f''(c) < 0, local maximum (the curve is a cap); if f''(c) > 0, local minimum (a cup); if f''(c) = 0, the test fails, so use the first test.`] },
      R`<b>Absolute (overall) maximum and minimum on [a, b]:</b> find the critical points inside the interval, work out f at those points and at the two ends a and b, and pick the largest and smallest values.`,
      { ex: { q: R`Find the local maxima and minima of \(f(x) = x^3 - 3x\).`,
        steps: [R`\(f'(x) = 3x^2 - 3 = 0\) gives x = ±1. \(f''(x) = 6x\).`, R`At x = −1: f'' = −6 < 0, so a local maximum, f(−1) = −1 + 3 = 2.`, R`At x = 1: f'' = 6 > 0, so a local minimum, f(1) = 1 − 3 = −2.`],
        ans: R`Local max 2 at x = −1; local min −2 at x = 1` } },
      { ex: { q: R`Find the absolute maximum and minimum of \(f(x) = x^3 - 3x\) on [0, 2].`,
        steps: [R`The only critical point inside is x = 1.`, R`Values: f(0) = 0, f(1) = −2, f(2) = 8 − 6 = 2.`],
        ans: R`Absolute max 2 (at x = 2); absolute min −2 (at x = 1)` } },
      { ex: { q: R`A rectangle has perimeter 20 cm. Find the largest possible area.`,
        steps: [R`Let the sides be x and y: 2x + 2y = 20, so y = 10 − x.`, R`Area \(A = x(10 - x) = 10x - x^2\). \(A' = 10 - 2x = 0\) gives x = 5.`, R`\(A'' = -2 < 0\), so this is a maximum: x = y = 5 (a square).`],
        ans: R`25 cm², when the rectangle is a 5 cm × 5 cm square` } },
      { mistake: R`Forgetting to check the end points when looking for the absolute maximum or minimum on a closed interval. As the figure shows, the answer can be at an end.` },
      { check: { q: R`f'(c) = 0 and f''(c) = 4. What kind of point is c?`, ans: R`A local minimum (f'' > 0: the curve is cup-shaped there).` } },
      { note: R`For limits of the form \(\frac00\) or \(\frac\infty\infty\), you may differentiate the top and bottom separately: \(\lim\frac{f(x)}{g(x)} = \lim\frac{f'(x)}{g'(x)}\). For example, \(\lim_{x\to0}\frac{e^x - 1 - x}{x^2} = \lim_{x\to0}\frac{e^x - 1}{2x} = \frac12\). It is a quick way to check your answers.`, title: "L'Hôpital's rule (a handy shortcut)" }
    ] }
  ],
  summary: [
    R`A function gives exactly one output for each input. Domain = allowed inputs; range = outputs actually produced. \((f\circ g)(x) = f(g(x))\), and usually \(f\circ g \neq g\circ f\).`,
    R`Know the graphs, domains and ranges of \(x^n\), 1/x, |x|, [x], \(e^x\), ln x, sin x, cos x and tan x.`,
    R`An inverse exists only for one-one, onto functions; its graph is the reflection in y = x. Inverse trig functions give values in their principal ranges.`,
    R`\(\lim_{x\to a}f(x)\) exists when LHL = RHL; f(a) itself doesn't matter.`,
    R`Methods: substitute, factorise, rationalise, divide by the highest power. Standard limits: \(\frac{x^n - a^n}{x - a}\to na^{n-1}\), \(\frac{\sin x}{x}\to1\), \(\frac{e^x - 1}{x}\to1\), \(\frac{\ln(1 + x)}{x}\to1\), \((1 + x)^{1/x}\to e\).`,
    R`Continuous at a: \(\lim_{x\to a}f(x) = f(a)\). Discontinuities: removable, jump, infinite.`,
    R`Derivative = slope of the tangent: \(f'(a) = \lim_{h\to0}\frac{f(a + h) - f(a)}{h}\).`,
    R`Differentiable ⇒ continuous, but not the other way round (|x| at 0).`,
    R`Rules: power \(nx^{n-1}\); product \(u'v + uv'\); quotient \(\frac{u'v - uv'}{v^2}\); chain \(\frac{dy}{du}\cdot\frac{du}{dx}\).`,
    R`\((\sin x)' = \cos x\), \((\cos x)' = -\sin x\), \((\tan x)' = \sec^2x\), \((e^x)' = e^x\), \((\ln x)' = \frac1x\), \((\sin^{-1}x)' = \frac{1}{\sqrt{1 - x^2}}\), \((\tan^{-1}x)' = \frac{1}{1 + x^2}\).`,
    R`Implicit: differentiate both sides, treating y as a function of x. Logarithmic: take ln first (for \(x^x\)). Parametric: \(\frac{dy}{dx} = \frac{dy/dt}{dx/dt}\).`,
    R`Second derivative: the rate of change of the slope; f'' > 0 concave up, f'' < 0 concave down.`,
    R`Related rates: differentiate the linking equation with respect to t, then substitute.`,
    R`f' > 0 increasing, f' < 0 decreasing. Critical points: f'(c) = 0. f''(c) < 0 → local max, f''(c) > 0 → local min. For absolute extremes on [a, b], also check the end points.`
  ]
});
