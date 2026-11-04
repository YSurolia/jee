// Book chapter: Integral Calculus. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var sq = function (x) { return x * x; };
var figRiemann = D.plot({ w: 320, h: 240, x: [-0.15, 1.25], y: [-0.1, 1.2], noOrigin: false, xticks: [[0.5, '1/2'], [1, '1']], yticks: [[1, '1']],
  fns: [{ f: sq, from: 0, to: 1.15, color: 'b', label: 'y = x²', lx: 0.72, ly: 1.08, math: false }],
  extra: function (X, Y) {
    var o = [], n = 8;
    for (var i = 1; i <= n; i++) { var x0 = (i - 1) / n, x1 = i / n, h = sq(x1); o.push(D.rect(X(x0), Y(h), X(x1) - X(x0), Y(0) - Y(h), { color: 'o', fill: 'soft', w: 1 })); }
    o.push(D.text(X(0.3), Y(0.75), 'Σ f(xᵢ)Δx → ∫₀¹ x² dx = 1/3', { size: 10, math: false, color: 'o' }));
    return o;
  }, label: 'Riemann sum for x squared' });

var figArea = D.row([
  [D.plot({ w: 230, h: 200, x: [-0.3, 2.6], y: [-0.3, 4.6], xticks: [[1, '1'], [2, '2']], yticks: [[1, '1'], [4, '4']],
    shade: [{ f: sq, from: 1, to: 2, color: 'b' }], fns: [{ f: sq, from: 0, to: 2.15, color: 'b', label: 'y = x²', lx: 1.1, ly: 4.2, math: false }], label: 'area under a curve' }), R`area under y = x² from 1 to 2 = 7/3`],
  [D.plot({ w: 230, h: 200, x: [-0.3, 1.5], y: [-0.3, 1.5], eq: true, xticks: [[1, '1']], yticks: [[1, '1']],
    shade: [{ f: function (x) { return x; }, g: sq, from: 0, to: 1, color: 'g' }],
    fns: [{ f: function (x) { return x; }, color: 'o', label: 'y = x', lx: 0.05, ly: 0.85, math: false }, { f: sq, from: 0, to: 1.2, color: 'b', label: 'y = x²', lx: 1.1, ly: 0.8, math: false }], label: 'area between two curves' }), R`between y = x and y = x²: 1/6`]
]);

var figConic = D.row([
  [D.plot({ w: 230, h: 220, x: [-0.6, 2], y: [-2.5, 2.5], xticks: [[1, '1']], yticks: [[2, '2'], [-2, '−2']],
    shade: [{ f: function (x) { return 2 * Math.sqrt(Math.max(x, 0)); }, g: function (x) { return -2 * Math.sqrt(Math.max(x, 0)); }, from: 0, to: 1, color: 'b' }],
    param: [{ fx: function (t) { return t * t / 4; }, fy: function (t) { return t; }, t: [-2.8, 2.8], color: 'b' }], segs: [{ x1: 1, y1: -2.5, x2: 1, y2: 2.5, color: 'o', w: 1.6 }],
    texts: [{ x: 1.55, y: 1.9, s: 'y² = 4x', color: 'b', size: 11 }, { x: 1.25, y: -2.2, s: 'x = 1', color: 'o', size: 11, anchor: 'start' }], label: 'parabola area' }), R`y² = 4x cut by x = 1: area 8/3`],
  [D.plot({ w: 260, h: 200, x: [-3.6, 3.6], y: [-2.6, 2.6], eq: true, xticks: [[3, '3'], [-3, '−3']], yticks: [[2, '2'], [-2, '−2']],
    shade: [{ f: function (x) { return 2 * Math.sqrt(Math.max(0, 1 - x * x / 9)); }, g: function (x) { return -2 * Math.sqrt(Math.max(0, 1 - x * x / 9)); }, from: -3, to: 3, color: 'p' }],
    param: [{ fx: function (t) { return 3 * Math.cos(t); }, fy: function (t) { return 2 * Math.sin(t); }, t: [0, 2 * Math.PI], color: 'p' }], label: 'ellipse area' }), R`x²/9 + y²/4 = 1: area πab = 6π`]
]);

var figFamily = D.plot({ w: 300, h: 230, x: [-2, 2.2], y: [-1.5, 5.2], xticks: [[1, '1'], [-1, '−1']], yticks: [[2, '2'], [4, '4']],
  fns: [-1, 0, 1, 2].map(function (C, i) { return { f: function (x) { return x * x + C; }, color: ['r', 'b', 'g', 'p'][i], w: 1.7 }; }),
  segs: [-1, 0, 1, 2].map(function (C) { return { x1: 0.7, y1: C + 1 - 0.6, x2: 1.3, y2: C + 1 + 0.6, color: 'k', w: 1.6 }; }),
  pts: [-1, 0, 1, 2].map(function (C) { return { x: 1, y: C + 1, color: 'k' }; }),
  texts: [{ x: -0.2, y: 4.8, s: 'y = x² + C', color: 'b', size: 11, anchor: 'end' }], label: 'Antiderivatives of 2x' });

var figAccum = D.plot({ w: 320, h: 210, x: [-0.2, 3.2], y: [-0.15, 1.6], xlabel: 't', mathLabels: false, xticks: [[1.7, 'x'], [2.3, 'x + h']], yticks: [],
  shade: [{ f: function (t) { return 0.5 + 0.3 * t; }, from: 0, to: 1.7, color: 'b' }, { f: function (t) { return 0.5 + 0.3 * t; }, from: 1.7, to: 2.3, color: 'o' }],
  fns: [{ f: function (t) { return 0.5 + 0.3 * t; }, from: 0, to: 3, color: 'b', label: 'y = f(t)', lx: 2.3, ly: 1.45, math: false }],
  texts: [{ x: 0.9, y: 0.4, s: 'A(x)', color: 'b', size: 13 }, { x: 2.75, y: 0.55, s: '≈ f(x)·h', color: 'o', size: 12 }], label: 'The area function and its derivative' });

var figSigned = D.plot({ w: 340, h: 190, x: [-0.3, 6.8], y: [-1.4, 1.4], xticks: [[Math.PI, 'π'], [2 * Math.PI, '2π']], yticks: [[1, '1'], [-1, '−1']],
  shade: [{ f: Math.sin, from: 0, to: Math.PI, color: 'b' }, { f: Math.sin, from: Math.PI, to: 2 * Math.PI, color: 'r' }],
  fns: [{ f: Math.sin, from: 0, to: 2 * Math.PI, color: 'k', w: 1.6 }],
  texts: [{ x: Math.PI / 2, y: 0.4, s: '+2', color: 'b', size: 14 }, { x: 3 * Math.PI / 2, y: -0.4, s: '−2', color: 'r', size: 14 }], label: 'Signed area under sine' });

var figParLine = D.plot({ w: 300, h: 290, x: [-0.6, 5], y: [-0.6, 5], eq: true, xticks: [[4, '4']], yticks: [[4, '4']],
  shade: [{ f: function (x) { return 2 * Math.sqrt(Math.max(x, 0)); }, g: function (x) { return x; }, from: 0, to: 4, color: 'g' }],
  fns: [{ f: function (x) { return 2 * Math.sqrt(Math.max(x, 0)); }, from: 0, to: 4.9, color: 'b', label: 'y² = 4x', lx: 0.5, ly: 3.4, math: false }, { f: function (x) { return x; }, from: -0.5, to: 4.9, color: 'o', label: 'y = x', lx: 3.4, ly: 2.4, math: false }],
  pts: [{ x: 4, y: 4, label: '(4, 4)', pos: 'nw', math: false }], label: 'Region between a parabola and a line' });

// ---------- chapter text ----------
JEE.book('maths', 'integral-calculus', {
  intro: [
    R`Integration is the reverse of differentiation, and also the tool for adding up infinitely many small pieces: areas, volumes, work done, total change. The two ideas meet in the fundamental theorem of calculus.`,
    R`This chapter covers indefinite integrals and their standard results, the methods of substitution, parts and partial fractions, integrals using trigonometric identities and special standard forms, definite integrals (as a limit of sums, evaluation and properties), and areas of regions bounded by curves.`
  ],
  sections: [
    { h: R`Integration as anti-differentiation`, t: [0], blocks: [
      R`If \(\dfrac{d}{dx}F(x) = f(x)\), then F is an <b>anti-derivative</b> (primitive) of f, and we write \[\int f(x)\,dx = F(x) + C,\] where C is an arbitrary constant of integration (any two anti-derivatives differ by a constant). f is the integrand. Geometrically, the integrals of f form a family of curves y = F(x) + C, all parallel (shifted vertically).`,
      { fig: figFamily, cap: R`Every curve \(y = x^2 + C\) has the same slope 2x at each x (the short black tangents at x = 1 are parallel). So \(\int 2x\,dx\) is the whole family, and a condition such as "passes through (1, 3)" picks out one member.` },
      R`Why the constant? Differentiation destroys constants: \(x^2\), \(x^2 + 5\) and \(x^2 - 7\) all have derivative 2x. Going backwards, we cannot tell which one we started from, so we write + C to cover them all. Leaving out C is a common way to lose marks.`,
      { ex: { q: R`Evaluate \(\int\dfrac{x^3 - 1}{x - 1}\,dx\).`,
        steps: [R`Simplify first: \(x^3 - 1 = (x - 1)(x^2 + x + 1)\).`, R`\(\int(x^2 + x + 1)\,dx\).`], ans: R`\(\dfrac{x^3}{3} + \dfrac{x^2}{2} + x + C\)` } },
      { check: { q: R`Find \(\int 3x^2\,dx\).`, ans: R`x³ + C.` } }
    ] },

    { h: R`Properties of indefinite integrals`, t: [0], blocks: [
      { points: [R`\(\dfrac{d}{dx}\int f(x)\,dx = f(x)\) and \(\int f'(x)\,dx = f(x) + C\).`, R`\(\int [f(x) \pm g(x)]\,dx = \int f\,dx \pm \int g\,dx\).`, R`\(\int k f(x)\,dx = k\int f(x)\,dx\) for a constant k.`, R`There is no general product or quotient rule for integrals: \(\int fg\,dx \ne \int f\,dx \int g\,dx\).`] },
      { ex: { q: R`Evaluate \(\int \left(2x^3 - \dfrac{3}{x} + e^x\right)dx\).`,
        steps: [R`Integrate term by term.`], ans: R`\(\dfrac{x^4}{2} - 3\ln|x| + e^x + C\)` } },
      { ex: { q: R`Evaluate \(\int(\sin x + \cos x)^2\,dx\).`,
        steps: [R`Expand: \(\sin^2x + \cos^2x + 2\sin x\cos x = 1 + \sin2x\).`, R`Integrate term by term.`], ans: R`\(x - \dfrac{\cos2x}{2} + C\)` } },
      { mistake: R`Integrating a product factor by factor, as in \(\int x\cos x\,dx = \frac{x^2}{2}\sin x\). Differentiate the answer to check: it does not give back x cos x. Products need substitution or integration by parts.` },
      R`The properties above say that integration is <b>linear</b>: sums and constant multiples can be pulled apart. So the first job with any integrand is to simplify it, by expanding brackets, dividing out, or using an identity, until it becomes a sum of standard forms. Most of the methods later in this chapter are ways of reaching that point.`
      ,{ check: { q: R`If F′(x) = 2x and F(1) = 3, find F(x).`, ans: R`F(x) = x² + 2.` } }
    ] },

    { h: R`Fundamental integrals`, t: [1], blocks: [
      { table: { head: [R`Integral`, R`Result`], rows: [
        [R`\(\int x^n\,dx\ (n \ne -1)\)`, R`\(\dfrac{x^{n+1}}{n+1} + C\)`], [R`\(\int \frac1x\,dx\)`, R`\(\ln|x| + C\)`], [R`\(\int e^x\,dx\)`, R`\(e^x + C\)`], [R`\(\int a^x\,dx\)`, R`\(\dfrac{a^x}{\ln a} + C\)`],
        [R`\(\int \sin x\,dx\)`, R`\(-\cos x + C\)`], [R`\(\int \cos x\,dx\)`, R`\(\sin x + C\)`], [R`\(\int \sec^2x\,dx\)`, R`\(\tan x + C\)`], [R`\(\int \csc^2x\,dx\)`, R`\(-\cot x + C\)`],
        [R`\(\int \sec x\tan x\,dx\)`, R`\(\sec x + C\)`], [R`\(\int \csc x\cot x\,dx\)`, R`\(-\csc x + C\)`], [R`\(\int \tan x\,dx\)`, R`\(\ln|\sec x| + C\)`], [R`\(\int \cot x\,dx\)`, R`\(\ln|\sin x| + C\)`],
        [R`\(\int \sec x\,dx\)`, R`\(\ln|\sec x + \tan x| + C\)`], [R`\(\int \csc x\,dx\)`, R`\(\ln|\csc x - \cot x| + C\)`], [R`\(\int \ln x\,dx\)`, R`\(x\ln x - x + C\)`], [R`\(\int \frac{dx}{\sqrt{1 - x^2}}\); \(\int \frac{dx}{1 + x^2}\)`, R`\(\sin^{-1}x + C\); \(\tan^{-1}x + C\)`]] } },
      R`If \(\int f(x)\,dx = F(x)\), then \(\int f(ax + b)\,dx = \dfrac{1}{a}F(ax + b) + C\). E.g. \(\int \cos(3x + 1)\,dx = \frac13\sin(3x + 1) + C\).`,
      { ex: { q: R`Evaluate \(\int\dfrac{dx}{1 + \cos2x}\) and \(\int\dfrac{dx}{\sqrt{1 - 4x^2}}\).`,
        steps: [R`\(1 + \cos2x = 2\cos^2x\), so the first is \(\frac12\int\sec^2x\,dx\).`, R`The second is \(\int\dfrac{dx}{\sqrt{1 - (2x)^2}}\): use \(\int f(ax + b)\,dx = \frac1aF(ax + b)\) with a = 2.`], ans: R`\(\dfrac{\tan x}{2} + C\); \(\dfrac12\sin^{-1}2x + C\)` } },
      { tip: R`Always check an integral by differentiating your answer. It takes a few seconds and catches most sign and factor mistakes.` },
      { check: { q: R`Find \(\int e^{2x+1}\,dx\).`, ans: R`½e^{2x+1} + C.` } }
    ] },

    { h: R`Integration by substitution`, t: [2], blocks: [
      R`If the integrand contains a function and its derivative, put t = g(x), dt = g′(x) dx: \[\int f(g(x))\,g'(x)\,dx = \int f(t)\,dt.\] Important special cases: \(\int \dfrac{f'(x)}{f(x)}\,dx = \ln|f(x)| + C\) and \(\int [f(x)]^n f'(x)\,dx = \dfrac{[f(x)]^{n+1}}{n + 1} + C\).`,
      { ex: { q: R`Evaluate \(\int \dfrac{2x + 3}{x^2 + 3x + 2}\,dx\) and \(\int \sin^3x\cos x\,dx\).`,
        steps: [R`The numerator is the derivative of the denominator: \(\ln|x^2 + 3x + 2| + C\).`, R`Put t = sin x: \(\int t^3\,dt = \frac{t^4}{4}\).`], ans: R`\(\ln|x^2 + 3x + 2| + C\); \(\dfrac{\sin^4x}{4} + C\)` } },
      { ex: { q: R`Evaluate \(\int\dfrac{dx}{x\ln x}\), \(\int\dfrac{dx}{1 + e^{-x}}\) and \(\int\dfrac{x\,dx}{1 + x^4}\).`,
        steps: [R`t = ln x, dt = dx/x: \(\int\frac{dt}{t} = \ln|t|\).`, R`Multiply top and bottom by \(e^x\): \(\int\frac{e^x\,dx}{e^x + 1}\), numerator = derivative of denominator.`, R`t = x², dt = 2x dx: \(\frac12\int\frac{dt}{1 + t^2}\).`], ans: R`\(\ln|\ln x| + C\); \(\ln(1 + e^x) + C\); \(\dfrac12\tan^{-1}x^2 + C\)` } },
      R`<b>How to spot the substitution.</b> Look for a function whose derivative is also present (up to a constant factor): \(x^2\) with x, \(\sin x\) with \(\cos x\), \(\ln x\) with 1/x, \(e^x\) with \(e^x\). Put t equal to the "inside" function, replace dx, and the integral should contain only t.`,
      { tip: R`Trigonometric substitutions: \(\sqrt{a^2 - x^2}\): x = a sin θ; \(\sqrt{a^2 + x^2}\): x = a tan θ; \(\sqrt{x^2 - a^2}\): x = a sec θ.` },
      { check: { q: R`Find \(\int x e^{x^2}\,dx\).`, ans: R`Put t = x²: ½e^{x²} + C.` } }
    ] },

    { h: R`Integration by parts`, t: [2], blocks: [
      R`From the product rule: \[\int u\,v\,dx = u\int v\,dx - \int\left(\frac{du}{dx}\int v\,dx\right)dx.\] Choose u (to be differentiated) in the order <b>ILATE</b>: Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential.`,
      { derive: R`Where the formula comes from`, steps: [R`Product rule: \(\dfrac{d}{dx}(uw) = u\dfrac{dw}{dx} + w\dfrac{du}{dx}\), where \(w = \int v\,dx\), so dw/dx = v.`, R`Integrate both sides: \(uw = \int uv\,dx + \int w\dfrac{du}{dx}\,dx\).`, R`Rearrange: \(\int uv\,dx = u\int v\,dx - \int\left(\dfrac{du}{dx}\int v\,dx\right)dx\).`] },
      R`ILATE is a rule of thumb, not a law. The idea is to differentiate the function that becomes simpler when differentiated (ln x → 1/x, x² → 2x) and to integrate the one that is easy to integrate (eˣ, sin x). If ln x or tan⁻¹x appears alone, take the second function to be 1.`,
      { ex: { q: R`Evaluate \(\int x e^x\,dx\) and \(\int \ln x\,dx\).`,
        steps: [R`u = x, v = eˣ: \(xe^x - \int e^x\,dx = xe^x - e^x\).`, R`u = ln x, v = 1: \(x\ln x - \int x\cdot\frac1x\,dx = x\ln x - x\).`], ans: R`\((x - 1)e^x + C\); \(x\ln x - x + C\)` } },
      { ex: { q: R`Evaluate \(\int x^2e^x\,dx\) and \(\int\tan^{-1}x\,dx\).`,
        steps: [R`Parts twice: \(x^2e^x - \int 2xe^x\,dx = x^2e^x - 2(x - 1)e^x\).`, R`u = tan⁻¹x, v = 1: \(x\tan^{-1}x - \int\frac{x}{1 + x^2}dx = x\tan^{-1}x - \frac12\ln(1 + x^2)\).`], ans: R`\(e^x(x^2 - 2x + 2) + C\); \(x\tan^{-1}x - \frac12\ln(1 + x^2) + C\)` } },
      R`<b>A special form:</b> \(\int e^x[f(x) + f'(x)]\,dx = e^x f(x) + C\). E.g. \(\int e^x\left(\frac1x - \frac1{x^2}\right)dx = \frac{e^x}{x} + C\).`,
      { ex: { q: R`Evaluate \(\int e^x(\sin x + \cos x)\,dx\) and \(\int e^x\sin x\,dx\).`,
        steps: [R`First: f = sin x, f′ = cos x, so it is \(e^x\sin x\).`, R`Second: parts twice gives \(I = e^x\sin x - e^x\cos x - I\), so \(2I = e^x(\sin x - \cos x)\).`], ans: R`\(e^x\sin x + C\); \(\dfrac{e^x(\sin x - \cos x)}{2} + C\)` } },
      { adv: R`Integrals like \(\int e^{ax}\sin bx\,dx\) repeat after two integrations by parts; solve for the integral: \(\int e^{ax}\sin bx\,dx = \dfrac{e^{ax}}{a^2 + b^2}(a\sin bx - b\cos bx) + C\).` },
      { check: { q: R`Which function is taken as u in ∫x sin x dx?`, ans: R`x (algebraic comes before trigonometric in ILATE). Result: −x cos x + sin x + C.` } }
    ] },

    { h: R`Integration by partial fractions`, t: [2], blocks: [
      R`A proper rational function P(x)/Q(x) (degree of P less than degree of Q) can be split into simpler fractions according to the factors of Q:`,
      { table: { head: [R`Factor in Q(x)`, R`Partial fraction(s)`], rows: [[R`(x − a)`, R`A/(x − a)`], [R`(x − a)²`, R`A/(x − a) + B/(x − a)²`], [R`(x² + bx + c) irreducible`, R`(Ax + B)/(x² + bx + c)`]] } },
      R`If the fraction is improper, divide first. Find the constants by comparing coefficients or by substituting the roots (cover-up rule).`,
      { ex: { q: R`Evaluate \(\int \dfrac{dx}{(x - 1)(x + 2)}\).`,
        steps: [R`\(\dfrac{1}{(x - 1)(x + 2)} = \dfrac{1/3}{x - 1} - \dfrac{1/3}{x + 2}\) (put x = 1, then x = −2).`, R`Integrate: \(\frac13\ln|x - 1| - \frac13\ln|x + 2|\).`], ans: R`\(\dfrac13\ln\left|\dfrac{x - 1}{x + 2}\right| + C\)` } },
      { ex: { q: R`Evaluate \(\int\dfrac{x\,dx}{(x + 1)(x + 2)}\).`,
        steps: [R`\(\dfrac{x}{(x + 1)(x + 2)} = \dfrac{A}{x + 1} + \dfrac{B}{x + 2}\). Cover-up: x = −1 gives A = −1; x = −2 gives B = 2.`], ans: R`\(2\ln|x + 2| - \ln|x + 1| + C\)` } },
      { ex: { q: R`Evaluate \(\int\dfrac{dx}{x(x + 1)^2}\).`,
        steps: [R`\(\dfrac{1}{x(x + 1)^2} = \dfrac Ax + \dfrac{B}{x + 1} + \dfrac{C}{(x + 1)^2}\): A = 1 (x = 0), C = −1 (x = −1), and comparing x² terms, A + B = 0, so B = −1.`, R`Integrate: \(\ln|x| - \ln|x + 1| + \dfrac{1}{x + 1}\).`], ans: R`\(\ln\left|\dfrac{x}{x + 1}\right| + \dfrac{1}{x + 1} + C\)` } },
      { ex: { q: R`Evaluate \(\int\dfrac{x^2}{x^2 - 1}\,dx\) (an improper fraction).`,
        steps: [R`Divide: \(\dfrac{x^2}{x^2 - 1} = 1 + \dfrac{1}{x^2 - 1}\).`, R`\(\int\dfrac{dx}{x^2 - 1} = \dfrac12\ln\left|\dfrac{x - 1}{x + 1}\right|\).`], ans: R`\(x + \dfrac12\ln\left|\dfrac{x - 1}{x + 1}\right| + C\)` } },
      { check: { q: R`Write the form of partial fractions for 1/(x(x² + 1)).`, ans: R`A/x + (Bx + C)/(x² + 1).` } }
    ] },

    { h: R`Integration using trigonometric identities`, t: [3], blocks: [
      { points: [R`Even powers: use \(\sin^2x = \frac{1 - \cos 2x}{2}\), \(\cos^2x = \frac{1 + \cos 2x}{2}\).`, R`Odd powers: split off one factor and substitute, e.g. \(\int\sin^3x\,dx = \int(1 - \cos^2x)\sin x\,dx\) with t = cos x.`, R`Products: use \(2\sin A\cos B = \sin(A + B) + \sin(A - B)\) etc.`, R`\(\int \tan^2x\,dx = \int(\sec^2x - 1)\,dx = \tan x - x + C\).`] },
      { ex: { q: R`Evaluate \(\int \sin^2x\,dx\) and \(\int \sin 3x\cos 2x\,dx\).`,
        steps: [R`\(\int\frac{1 - \cos 2x}{2}dx = \frac x2 - \frac{\sin 2x}{4}\).`, R`\(\frac12\int(\sin 5x + \sin x)dx = -\frac{\cos 5x}{10} - \frac{\cos x}{2}\).`], ans: R`\(\dfrac x2 - \dfrac{\sin 2x}{4} + C\); \(-\dfrac{\cos 5x}{10} - \dfrac{\cos x}{2} + C\)` } },
      { ex: { q: R`Evaluate \(\int\cos^3x\,dx\) and \(\int\sin^4x\,dx\).`,
        steps: [R`Odd power: \(\int(1 - \sin^2x)\cos x\,dx\), t = sin x: \(\sin x - \frac{\sin^3x}{3}\).`, R`Even power: \(\sin^4x = \left(\frac{1 - \cos2x}{2}\right)^2 = \frac38 - \frac{\cos2x}{2} + \frac{\cos4x}{8}\).`], ans: R`\(\sin x - \dfrac{\sin^3x}{3} + C\); \(\dfrac{3x}{8} - \dfrac{\sin2x}{4} + \dfrac{\sin4x}{32} + C\)` } },
      { ex: { q: R`Evaluate \(\int\dfrac{dx}{1 + \sin x}\).`,
        steps: [R`Multiply by \(\dfrac{1 - \sin x}{1 - \sin x}\): \(\int\dfrac{1 - \sin x}{\cos^2x}dx = \int(\sec^2x - \sec x\tan x)\,dx\).`], ans: R`\(\tan x - \sec x + C\)` } },
      { check: { q: R`Find \(\int \cos^2x\,dx\).`, ans: R`x/2 + sin 2x/4 + C.` } }
    ] },

    { h: R`Standard integrals involving x² ± a²`, t: [4], blocks: [
      { table: { head: [R`Integral`, R`Result`], rows: [
        [R`\(\int \dfrac{dx}{x^2 + a^2}\)`, R`\(\dfrac1a\tan^{-1}\dfrac xa + C\)`],
        [R`\(\int \dfrac{dx}{x^2 - a^2}\)`, R`\(\dfrac{1}{2a}\ln\left|\dfrac{x - a}{x + a}\right| + C\)`],
        [R`\(\int \dfrac{dx}{a^2 - x^2}\)`, R`\(\dfrac{1}{2a}\ln\left|\dfrac{a + x}{a - x}\right| + C\)`],
        [R`\(\int \dfrac{dx}{\sqrt{a^2 - x^2}}\)`, R`\(\sin^{-1}\dfrac xa + C\)`],
        [R`\(\int \dfrac{dx}{\sqrt{x^2 + a^2}}\)`, R`\(\ln|x + \sqrt{x^2 + a^2}| + C\)`],
        [R`\(\int \dfrac{dx}{\sqrt{x^2 - a^2}}\)`, R`\(\ln|x + \sqrt{x^2 - a^2}| + C\)`]] } },
      { derive: R`Derivation of the first two`, steps: [R`Put x = a tan θ: \(\int \dfrac{a\sec^2\theta\,d\theta}{a^2\sec^2\theta} = \dfrac{\theta}{a} = \dfrac1a\tan^{-1}\dfrac xa\).`, R`Partial fractions: \(\dfrac{1}{x^2 - a^2} = \dfrac{1}{2a}\left(\dfrac{1}{x - a} - \dfrac{1}{x + a}\right)\).`] },
      { ex: { q: R`Evaluate \(\int\dfrac{dx}{4 - x^2}\) and \(\int\dfrac{dx}{\sqrt{9x^2 + 4}}\).`,
        steps: [R`a = 2: \(\dfrac{1}{4}\ln\left|\dfrac{2 + x}{2 - x}\right|\).`, R`Write \(9x^2 + 4 = (3x)^2 + 2^2\) and divide by the 3 from d(3x): \(\frac13\ln|3x + \sqrt{9x^2 + 4}|\).`], ans: R`\(\dfrac14\ln\left|\dfrac{2 + x}{2 - x}\right| + C\); \(\dfrac13\ln|3x + \sqrt{9x^2 + 4}| + C\)` } },
      { mistake: R`Mixing up \(\int\frac{dx}{x^2 - a^2}\) and \(\int\frac{dx}{a^2 - x^2}\). Their logs have the fractions upside down relative to each other; when in doubt, use partial fractions.` },
      { check: { q: R`Find \(\int \dfrac{dx}{x^2 + 9}\).`, ans: R`⅓ tan⁻¹(x/3) + C.` } }
    ] },

    { h: R`Integrals of the form 1/(ax² + bx + c) and 1/√(ax² + bx + c)`, t: [4], blocks: [
      R`<b>Complete the square</b> in the denominator to reduce to one of the standard forms: \[ax^2 + bx + c = a\left[\left(x + \frac{b}{2a}\right)^2 + \frac{4ac - b^2}{4a^2}\right].\]`,
      { ex: { q: R`Evaluate \(\int \dfrac{dx}{x^2 + 4x + 13}\).`,
        steps: [R`\(x^2 + 4x + 13 = (x + 2)^2 + 3^2\).`], ans: R`\(\dfrac13\tan^{-1}\dfrac{x + 2}{3} + C\)` } },
      { ex: { q: R`Evaluate \(\int \dfrac{dx}{\sqrt{6x - x^2}}\).`,
        steps: [R`\(6x - x^2 = 9 - (x - 3)^2\).`], ans: R`\(\sin^{-1}\dfrac{x - 3}{3} + C\)` } },
      { ex: { q: R`Evaluate \(\int\dfrac{dx}{2x^2 + x - 1}\).`,
        steps: [R`\(2x^2 + x - 1 = 2\left[\left(x + \frac14\right)^2 - \left(\frac34\right)^2\right]\).`, R`\(\dfrac12\cdot\dfrac{1}{2\cdot\frac34}\ln\left|\dfrac{x + \frac14 - \frac34}{x + \frac14 + \frac34}\right| = \dfrac13\ln\left|\dfrac{x - \frac12}{x + 1}\right|\).`, R`(The factor ½ inside the log only adds a constant.)`], ans: R`\(\dfrac13\ln\left|\dfrac{2x - 1}{x + 1}\right| + C\)` } },
      { check: { q: R`Complete the square: x² − 6x + 10.`, ans: R`(x − 3)² + 1.` } }
    ] },

    { h: R`Integrals of the form (px + q)/(ax² + bx + c)`, t: [4], blocks: [
      R`Write the numerator as a multiple of the derivative of the denominator plus a constant: \[px + q = A\frac{d}{dx}(ax^2 + bx + c) + B = A(2ax + b) + B,\] then the integral splits into a logarithm (or a square root, for the √ form) and a standard form.`,
      { ex: { q: R`Evaluate \(\int \dfrac{x + 3}{x^2 + 2x + 2}\,dx\).`,
        steps: [R`\(x + 3 = \frac12(2x + 2) + 2\).`, R`\(\frac12\int\frac{2x + 2}{x^2 + 2x + 2}dx + 2\int\frac{dx}{(x + 1)^2 + 1}\).`], ans: R`\(\dfrac12\ln(x^2 + 2x + 2) + 2\tan^{-1}(x + 1) + C\)` } },
      R`For \(\int \dfrac{px + q}{\sqrt{ax^2 + bx + c}}dx\), the first part gives \(2A\sqrt{ax^2 + bx + c}\).`,
      { ex: { q: R`Evaluate \(\int\dfrac{x + 2}{\sqrt{x^2 + 2x + 3}}\,dx\).`,
        steps: [R`\(x + 2 = \frac12(2x + 2) + 1\).`, R`The first part gives \(\sqrt{x^2 + 2x + 3}\); the second is \(\int\frac{dx}{\sqrt{(x + 1)^2 + 2}}\).`], ans: R`\(\sqrt{x^2 + 2x + 3} + \ln\left|x + 1 + \sqrt{x^2 + 2x + 3}\right| + C\)` } },
      { check: { q: R`Find \(\int \dfrac{2x}{\sqrt{x^2 + 1}}\,dx\).`, ans: R`2√(x² + 1) + C.` } }
    ] },

    { h: R`Integrals of √(a² ± x²) and √(x² − a²)`, t: [4], blocks: [
      { points: [R`\(\int\sqrt{a^2 - x^2}\,dx = \dfrac x2\sqrt{a^2 - x^2} + \dfrac{a^2}{2}\sin^{-1}\dfrac xa + C\)`, R`\(\int\sqrt{x^2 + a^2}\,dx = \dfrac x2\sqrt{x^2 + a^2} + \dfrac{a^2}{2}\ln|x + \sqrt{x^2 + a^2}| + C\)`, R`\(\int\sqrt{x^2 - a^2}\,dx = \dfrac x2\sqrt{x^2 - a^2} - \dfrac{a^2}{2}\ln|x + \sqrt{x^2 - a^2}| + C\)`] },
      { derive: R`Proof of the first formula`, steps: [R`Let \(I = \int\sqrt{a^2 - x^2}\cdot1\,dx\). By parts: \(I = x\sqrt{a^2 - x^2} - \int x\cdot\dfrac{-x}{\sqrt{a^2 - x^2}}dx\).`, R`Write \(x^2 = a^2 - (a^2 - x^2)\): the last integral is \(\int\dfrac{a^2\,dx}{\sqrt{a^2 - x^2}} - I\).`, R`So \(2I = x\sqrt{a^2 - x^2} + a^2\sin^{-1}\dfrac xa\), which gives the result.`] },
      R`These are proved by integration by parts (taking 1 as the second function) and then adding the original integral to both sides. For \(\int\sqrt{ax^2 + bx + c}\,dx\), complete the square first.`,
      { ex: { q: R`Using the first result, find the area of a circle of radius a.`,
        steps: [R`Area = \(4\int_0^a \sqrt{a^2 - x^2}\,dx = 4\left[0 + \frac{a^2}{2}\cdot\frac\pi2\right]\).`], ans: R`πa²` } },
      { ex: { q: R`Evaluate \(\int\sqrt{x^2 + 4x + 5}\,dx\).`,
        steps: [R`Complete the square: \(x^2 + 4x + 5 = (x + 2)^2 + 1\).`, R`Use the second formula with x + 2 in place of x and a = 1.`], ans: R`\(\dfrac{x + 2}{2}\sqrt{x^2 + 4x + 5} + \dfrac12\ln\left|x + 2 + \sqrt{x^2 + 4x + 5}\right| + C\)` } },
      { check: { q: R`Evaluate \(\int_0^2 \sqrt{4 - x^2}\,dx\).`, ans: R`Quarter of a circle of radius 2: π.` } }
    ] },

    { h: R`The definite integral as the limit of a sum`, t: [5], blocks: [
      R`Divide [a, b] into n equal parts of width h = (b − a)/n. The area under y = f(x) (f ≥ 0) is approximated by rectangles, and in the limit: \[\int_a^b f(x)\,dx = \lim_{n\to\infty} h\sum_{r=1}^{n} f(a + rh) = \lim_{h\to0} h\,[f(a + h) + f(a + 2h) + \dots + f(a + nh)].\]`,
      { fig: figRiemann, cap: R`With 8 rectangles the sum is 0.398; as n → ∞ the sum approaches the exact area 1/3.` },
      { ex: { q: R`Find \(\int_0^1 x^2\,dx\) as the limit of a sum.`,
        steps: [R`h = 1/n: \(\sum_{r=1}^{n} \frac1n\left(\frac rn\right)^2 = \frac{1}{n^3}\cdot\frac{n(n + 1)(2n + 1)}{6}\).`, R`As n → ∞ this tends to 2/6.`], ans: R`1/3` } },
      { tip: R`Limits of sums of the form \(\lim \frac1n\sum f(r/n)\) convert directly to \(\int_0^1 f(x)\,dx\): replace r/n by x and 1/n by dx.` },
      { ex: { q: R`Evaluate \(\displaystyle\lim_{n\to\infty}\sum_{r=1}^{n}\frac{n}{n^2 + r^2}\).`,
        steps: [R`Divide top and bottom by n²: \(\dfrac1n\sum\dfrac{1}{1 + (r/n)^2}\).`, R`This is \(\int_0^1\dfrac{dx}{1 + x^2} = \tan^{-1}1\).`], ans: R`π/4` } },
      { ex: { q: R`Evaluate \(\int_0^2(x + 1)\,dx\) as the limit of a sum.`,
        steps: [R`h = 2/n: \(h\sum_{r=1}^{n}(rh + 1) = h^2\dfrac{n(n + 1)}{2} + nh = \dfrac{4}{n^2}\cdot\dfrac{n(n + 1)}{2} + 2\).`, R`As n → ∞: 2 + 2.`], ans: R`4 (check: [x²/2 + x]₀² = 4)` } },
      { check: { q: R`Evaluate \(\lim_{n\to\infty}\frac1n\sum_{r=1}^{n}\frac{r}{n}\).`, ans: R`∫₀¹ x dx = 1/2.` } }
    ] },

    { h: R`The fundamental theorem of calculus`, t: [5], blocks: [
      R`<b>First part:</b> if f is continuous on [a, b] and \(A(x) = \int_a^x f(t)\,dt\), then \(A'(x) = f(x)\). More generally (Leibniz rule): \(\dfrac{d}{dx}\int_{g(x)}^{h(x)} f(t)\,dt = f(h(x))h'(x) - f(g(x))g'(x)\).`,
      { fig: figAccum, cap: R`A(x) is the area under f from 0 to x. Moving x a little to x + h adds a thin strip of area about f(x)·h, so \(\frac{A(x + h) - A(x)}{h} \to f(x)\): the area function is an anti-derivative of f.` },
      R`<b>Second part:</b> if F is any anti-derivative of f, then \[\int_a^b f(x)\,dx = F(b) - F(a) = \big[F(x)\big]_a^b.\] The constant of integration cancels.`,
      { ex: { q: R`Find \(\dfrac{d}{dx}\int_0^{x^2}\sin t\,dt\).`,
        steps: [R`\(\sin(x^2)\cdot 2x - 0\).`], ans: R`\(2x\sin x^2\)` } },
      { ex: { q: R`Find the points of local maximum and minimum of \(F(x) = \int_0^x(t - 1)(t - 2)\,dt\).`,
        steps: [R`By the first part, F′(x) = (x − 1)(x − 2), which is zero at x = 1 and x = 2.`, R`F′ changes from + to − at x = 1 and from − to + at x = 2.`], ans: R`Local maximum at x = 1, local minimum at x = 2` } },
      { check: { q: R`Evaluate \(\int_1^e \frac{dx}{x}\).`, ans: R`ln e − ln 1 = 1.` } }
    ] },

    { h: R`Evaluation of definite integrals`, t: [5], blocks: [
      R`Find an anti-derivative and subtract. When substituting t = g(x), <b>change the limits</b> too (no need to return to x).`,
      { ex: { q: R`Evaluate \(\int_0^{\pi/2} \sin^2x\cos x\,dx\).`,
        steps: [R`t = sin x: limits 0 → 1: \(\int_0^1 t^2\,dt = \frac13\).`], ans: R`1/3` } },
      { ex: { q: R`Evaluate \(\int_0^{\pi} x\sin x\,dx\).`,
        steps: [R`By parts: \([-x\cos x]_0^\pi + \int_0^\pi \cos x\,dx = \pi + 0\).`], ans: R`π` } },
      { ex: { q: R`Evaluate \(\int_1^2\dfrac{x\,dx}{x^2 + 1}\) and \(\int_0^{\pi/4}\tan^2x\,dx\).`,
        steps: [R`\(\left[\frac12\ln(x^2 + 1)\right]_1^2 = \frac12(\ln5 - \ln2)\).`, R`\(\int(\sec^2x - 1)\,dx = [\tan x - x]_0^{\pi/4} = 1 - \frac\pi4\).`], ans: R`\(\dfrac12\ln\dfrac52\); \(1 - \dfrac\pi4\)` } },
      { ex: { q: R`Evaluate \(\int_{-1}^{2}|x|\,dx\).`,
        steps: [R`|x| = −x on [−1, 0] and x on [0, 2]: \(\int_{-1}^0(-x)\,dx + \int_0^2x\,dx = \frac12 + 2\).`], ans: R`5/2` } },
      { mistake: R`Changing the variable but keeping the old limits. With t = sin x on [0, π/2], the new limits are sin 0 = 0 and sin(π/2) = 1, not 0 and π/2.` },
      { check: { q: R`Evaluate \(\int_0^1 \dfrac{dx}{1 + x^2}\).`, ans: R`tan⁻¹1 − tan⁻¹0 = π/4.` } }
    ] },

    { h: R`Properties of definite integrals`, t: [6], blocks: [
      { points: [
        R`\(\int_a^b f(x)\,dx = \int_a^b f(t)\,dt\); \(\int_a^b = -\int_b^a\); \(\int_a^a = 0\).`,
        R`\(\int_a^b f = \int_a^c f + \int_c^b f\) (useful for |x| and [x]).`,
        R`<b>King's property:</b> \(\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx\); in particular \(\int_0^a f(x)\,dx = \int_0^a f(a - x)\,dx\).`,
        R`\(\int_0^{2a} f(x)\,dx = 2\int_0^a f(x)\,dx\) if f(2a − x) = f(x), and 0 if f(2a − x) = −f(x).`,
        R`\(\int_{-a}^{a} f(x)\,dx = 2\int_0^a f(x)\,dx\) if f is even, and 0 if f is odd.`,
        R`If f has period T: \(\int_0^{nT} f = n\int_0^T f\).`
      ] },
      { derive: R`Proof of King's property`, steps: [R`In \(\int_a^bf(a + b - x)\,dx\) put t = a + b − x, so dx = −dt; x = a gives t = b and x = b gives t = a.`, R`The integral becomes \(-\int_b^af(t)\,dt = \int_a^bf(t)\,dt\), which is the original integral.`, R`Geometrically, x → a + b − x reflects the graph about the middle of [a, b], which does not change the area.`] },
      { ex: { q: R`Evaluate \(\int_0^{\pi/2} \dfrac{\sin x}{\sin x + \cos x}\,dx\).`,
        steps: [R`Call it I. By King's property (x → π/2 − x), \(I = \int_0^{\pi/2}\frac{\cos x}{\cos x + \sin x}dx\).`, R`Adding: \(2I = \int_0^{\pi/2} 1\,dx = \frac\pi2\).`], ans: R`π/4` } },
      { ex: { q: R`Evaluate \(\int_{-1}^{1} (x^3 + x\cos x + 3)\,dx\).`,
        steps: [R`x³ and x cos x are odd: their integrals vanish.`, R`\(\int_{-1}^1 3\,dx = 6\).`], ans: R`6` } },
      { ex: { q: R`Evaluate \(\int_0^\pi\dfrac{x\sin x}{1 + \cos^2x}\,dx\).`,
        steps: [R`King's property (x → π − x): \(I = \int_0^\pi\frac{(\pi - x)\sin x}{1 + \cos^2x}dx\). Add: \(2I = \pi\int_0^\pi\frac{\sin x}{1 + \cos^2x}dx\).`, R`t = cos x: \(\int_{-1}^{1}\frac{dt}{1 + t^2} = \frac\pi2\), so \(2I = \frac{\pi^2}{2}\).`], ans: R`\(\dfrac{\pi^2}{4}\)` } },
      { ex: { q: R`Evaluate \(\int_0^2[x]\,dx\), where [x] is the greatest integer function.`,
        steps: [R`Split at the jump: \(\int_0^1 0\,dx + \int_1^2 1\,dx\).`], ans: R`1` } },
      { adv: R`A classic use of these properties: \(I = \int_0^{\pi/2}\ln\sin x\,dx\). By King's property I also equals \(\int_0^{\pi/2}\ln\cos x\,dx\), so \(2I = \int_0^{\pi/2}\ln\left(\frac{\sin2x}{2}\right)dx\). Substituting t = 2x and using symmetry turns the first part back into I, giving \(I = -\frac\pi2\ln2\).` },
      { check: { q: R`Evaluate \(\int_{-2}^{2} |x|\,dx\).`, ans: R`2∫₀² x dx = 4.` } }
    ] },

    { h: R`Area bounded by a curve and an axis`, t: [7], blocks: [
      R`The area between y = f(x) ≥ 0, the x-axis and the lines x = a, x = b is \(\int_a^b f(x)\,dx\). If the curve goes below the axis, that part gives a negative integral, so take absolute values piece by piece: area = \(\int_a^b |f(x)|\,dx\). Similarly the area between x = g(y), the y-axis and y = c, y = d is \(\int_c^d g(y)\,dy\).`,
      { fig: figArea, cap: R`Left: area under a curve. Right: area between two curves = ∫(upper − lower) dx.` },
      { ex: { q: R`Find the area between y = x², the x-axis and x = 1, x = 2.`,
        steps: [R`\(\int_1^2 x^2\,dx = \frac{8 - 1}{3}\).`], ans: R`7/3 square units` } },
      { fig: figSigned, cap: R`\(\int_0^{2\pi}\sin x\,dx = 0\), because the part below the axis counts as negative. The <b>area</b> is 2 + 2 = 4: split where the curve crosses the axis and add the sizes.` },
      { ex: { q: R`Find the area between y = x³, the x-axis and the lines x = −1, x = 1.`,
        steps: [R`x³ is negative on (−1, 0), so split: \(\left|\int_{-1}^0x^3\,dx\right| + \int_0^1x^3\,dx = \frac14 + \frac14\).`], ans: R`1/2 (whereas the integral itself is 0)` } },
      { check: { q: R`Find the area between y = sin x and the x-axis from 0 to 2π.`, ans: R`2∫₀^π sin x dx = 4 (the integral itself is 0).` } }
    ] },

    { h: R`Area between two curves`, t: [7], blocks: [
      R`If f(x) ≥ g(x) on [a, b], the area between them is \[\int_a^b [f(x) - g(x)]\,dx\] (upper minus lower). Find a and b as the x-coordinates of the intersection points; if the curves cross inside the interval, split it.`,
      R`To decide which curve is on top, test one point between the intersections: at x = ½, for example, x = 0.5 is bigger than x² = 0.25, so y = x is the upper curve on (0, 1). If the curves swap over inside the interval, find the crossing point and integrate the two pieces separately, each as upper minus lower, so that every piece is positive.`,
      { ex: { q: R`Find the area enclosed between y = x and y = x².`,
        steps: [R`They meet where x = x², i.e. x = 0, 1; y = x is above on (0, 1).`, R`\(\int_0^1 (x - x^2)\,dx = \frac12 - \frac13\).`], ans: R`1/6 square unit` } },
      { fig: figParLine, cap: R`The parabola y² = 4x (upper half y = 2√x) and the line y = x meet at (0, 0) and (4, 4); the parabola is the upper curve in between.` },
      { ex: { q: R`Find the area of the region between the parabola y² = 4x and the line y = x.`,
        steps: [R`Intersection: x² = 4x gives x = 0 and 4.`, R`\(\int_0^4(2\sqrt x - x)\,dx = \left[\frac43x^{3/2} - \frac{x^2}{2}\right]_0^4 = \frac{32}{3} - 8\).`], ans: R`8/3 square units` } },
      { ex: { q: R`Find the area enclosed between the parabolas y² = 4x and x² = 4y.`,
        steps: [R`They meet at (0, 0) and (4, 4). Upper curve 2√x, lower curve x²/4.`, R`\(\int_0^4\left(2\sqrt x - \frac{x^2}{4}\right)dx = \frac{32}{3} - \frac{16}{3}\).`], ans: R`16/3 square units (in general 16a²/3 for y² = 4ax and x² = 4ay)` } },
      { check: { q: R`Find the area between y = 4 − x² and the x-axis.`, ans: R`∫₋₂² (4 − x²) dx = 32/3.` } }
    ] },

    { h: R`Areas bounded by lines, circles, parabolas and ellipses`, t: [7], blocks: [
      { fig: figConic, cap: R`Using symmetry: compute one part and multiply.` },
      { ex: { q: R`Find the area of the region bounded by the parabola y² = 4x and the line x = 1.`,
        steps: [R`By symmetry about the x-axis: \(2\int_0^1 2\sqrt x\,dx = 4\cdot\frac23\).`], ans: R`8/3 square units` } },
      { ex: { q: R`Find the area of the ellipse \(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1\).`,
        steps: [R`Area = \(4\int_0^a \frac ba\sqrt{a^2 - x^2}\,dx = 4\cdot\frac ba\cdot\frac{\pi a^2}{4}\).`], ans: R`πab (for a = 3, b = 2: 6π)` } },
      { ex: { q: R`Find the area between the parabolas x = y² and x = 2 − y² using horizontal strips.`,
        steps: [R`They meet where y² = 2 − y², i.e. y = ±1. For each y, the strip runs from x = y² (left) to x = 2 − y² (right).`, R`\(\int_{-1}^{1}(2 - 2y^2)\,dy = \left[2y - \frac{2y^3}{3}\right]_{-1}^{1} = 2\left(2 - \frac23\right)\).`], ans: R`8/3 square units` } },
      { tip: R`Sketch the region first, mark intersection points, and use symmetry; sometimes integrating with respect to y (horizontal strips) is much easier.` },
      { ex: { q: R`Find the area of the part of the circle x² + y² = 4 that lies to the right of the line x = 1.`,
        steps: [R`By symmetry about the x-axis: \(2\int_1^2\sqrt{4 - x^2}\,dx = 2\left[\frac x2\sqrt{4 - x^2} + 2\sin^{-1}\frac x2\right]_1^2\).`, R`\(= 2\left[\pi - \left(\frac{\sqrt3}{2} + \frac\pi3\right)\right]\).`], ans: R`\(\dfrac{4\pi}{3} - \sqrt3 \approx 2.46\) square units` } },
      { check: { q: R`What is the area of the circle x² + y² = 16?`, ans: R`16π.` } }
    ] }
  ],
  summary: [
    R`∫f dx = F + C where F′ = f; linearity; standard table (xⁿ, 1/x, eˣ, aˣ, trig, sec x, ln x).`,
    R`Substitution (f′/f → ln|f|); by parts ∫uv = u∫v − ∫(u′∫v) with ILATE; ∫eˣ(f + f′) = eˣf; partial fractions for rational functions.`,
    R`Trig identities for powers and products; standard forms 1/(x² ± a²), 1/√(a² − x²), 1/√(x² ± a²), √(a² ± x²); complete the square; px + q = A(derivative) + B.`,
    R`∫ₐᵇ f = lim h Σ f(a + rh); FTC: d/dx ∫ₐˣ f = f(x), ∫ₐᵇ f = F(b) − F(a); Leibniz rule.`,
    R`Properties: King's ∫ₐᵇ f(x) = ∫ₐᵇ f(a + b − x); even/odd on [−a, a]; periodicity.`,
    R`Area = ∫|f| dx; between curves ∫(upper − lower) dx; circle πr², ellipse πab, parabola segments by symmetry.`,
    R`Area function A(x) = ∫ₐˣ f has A′ = f; areas below the axis count as negative in an integral, so split at the crossings.`,
    R`Between curves: ∫(upper − lower); y² = 4ax and x² = 4ay enclose 16a²/3.`
  ],
  refs: [
    { t: R`OpenStax Calculus Vol. 1, §4.10 Antiderivatives`, url: 'https://openstax.org/books/calculus-volume-1/pages/4-10-antiderivatives' },
    { t: R`OpenStax Calculus Vol. 1, §5.3 The Fundamental Theorem of Calculus`, url: 'https://openstax.org/books/calculus-volume-1/pages/5-3-the-fundamental-theorem-of-calculus' },
    { t: R`OpenStax Calculus Vol. 2, §3.1 Integration by Parts`, url: 'https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts' },
    { t: R`OpenStax Calculus Vol. 2, §3.4 Partial Fractions`, url: 'https://openstax.org/books/calculus-volume-2/pages/3-4-partial-fractions' },
    { t: R`OpenStax Calculus Vol. 1, §6.1 Areas between Curves`, url: 'https://openstax.org/books/calculus-volume-1/pages/6-1-areas-between-curves' }
  ]
});
})();
