// Book chapter: Trigonometry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- figures ----------
var figRadian = D.svg(300, 210, (function () {
  var cx = 120, cy = 110, r = 80, out = [D.circle(cx, cy, r, { color: 'm', w: 1.2 })];
  out.push(D.line(cx, cy, cx + r, cy, { color: 'b', w: 2 }), D.line(cx, cy, cx + r * Math.cos(1), cy - r * Math.sin(1), { color: 'b', w: 2 }));
  out.push(D.path('M' + (cx + r) + ',' + cy + ' A' + r + ',' + r + ' 0 0 0 ' + (cx + r * Math.cos(1)) + ',' + (cy - r * Math.sin(1)), { color: 'o', w: 3.5 }));
  out.push(D.path('M' + (cx + 22) + ',' + cy + ' A22,22 0 0 0 ' + (cx + 22 * Math.cos(1)) + ',' + (cy - 22 * Math.sin(1)), { color: 'g', w: 1.6 }));
  out.push(D.text(cx + 34, cy - 14, '1 rad', { size: 11, math: false, color: 'g' }), D.text(cx + 40, cy + 14, 'r', { size: 12, color: 'b' }), D.text(cx + 98, cy - 56, 'arc = r', { size: 11, math: false, color: 'o', anchor: 'start' }));
  out.push(D.text(150, 204, 's = rθ (θ in radians); π rad = 180°', { size: 11, math: false, color: 'm' }));
  return out;
})(), 'Definition of a radian');

var figUnit = D.plot({ w: 300, h: 300, x: [-1.5, 1.5], y: [-1.5, 0], eq: true, xticks: [[1, '1'], [-1, '−1']], yticks: [[1, '1'], [-1, '−1']],
  param: [{ fx: Math.cos, fy: Math.sin, t: [0, 2 * PI], color: 'm', w: 1.2 }],
  segs: [{ x1: 0, y1: 0, x2: Math.cos(0.9), y2: Math.sin(0.9), color: 'b', w: 2 }, { x1: Math.cos(0.9), y1: 0, x2: Math.cos(0.9), y2: Math.sin(0.9), color: 'o', w: 2, dash: '4 3' }],
  pts: [{ x: Math.cos(0.9), y: Math.sin(0.9), color: 'b', label: 'P(cos θ, sin θ)', pos: 'ne', math: false }],
  texts: [{ x: 0.85, y: 1.25, s: 'I: all +', color: 'g', size: 11 }, { x: -0.85, y: 1.25, s: 'II: sin +', color: 'g', size: 11 }, { x: -0.85, y: -1.25, s: 'III: tan +', color: 'g', size: 11 }, { x: 0.85, y: -1.25, s: 'IV: cos +', color: 'g', size: 11 }, { x: 0.25, y: 0.12, s: 'θ', color: 'g', size: 12 }],
  label: 'Unit circle and signs in the four quadrants' });

var figGraphs = D.row([
  [D.plot({ w: 300, h: 170, x: [-0.4, 6.8], y: [-1.5, 1.5], xticks: [[PI / 2, 'π/2'], [PI, 'π'], [3 * PI / 2, '3π/2'], [2 * PI, '2π']], yticks: [[1, '1'], [-1, '−1']],
    fns: [{ f: Math.sin, color: 'b', label: 'sin x', lx: 0.5, ly: 1.25, math: false }, { f: Math.cos, color: 'o', label: 'cos x', lx: 5.4, ly: 1.25, math: false }], label: 'sine and cosine' }), R`sin x and cos x: period 2π, range [−1, 1]`],
  [D.plot({ w: 240, h: 170, x: [-2.2, 4.8], y: [-4, 4], xticks: [[-PI / 2, '−π/2'], [PI / 2, 'π/2'], [PI, 'π'], [3 * PI / 2, '3π/2']], yticks: [],
    fns: [{ f: Math.tan, color: 'g', steps: 600 }], segs: [-PI / 2, PI / 2, 3 * PI / 2].map(function (a) { return { x1: a, y1: -4, x2: a, y2: 4, color: 'm', dash: '4 4', w: 1 }; }), label: 'tangent' }), R`tan x: period π, asymptotes at odd multiples of π/2`]
]);

var figInverse = D.row([
  [D.plot({ w: 170, h: 200, x: [-1.4, 1.4], y: [-1.8, 1.8], xticks: [[1, '1'], [-1, '−1']], yticks: [[PI / 2, 'π/2'], [-PI / 2, '−π/2']], fns: [{ f: Math.asin, from: -1, to: 1, color: 'b', steps: 400 }], label: 'arcsine' }), R`y = sin⁻¹x: [−1, 1] → [−π/2, π/2]`],
  [D.plot({ w: 170, h: 200, x: [-1.4, 1.4], y: [-0.3, 3.4], xticks: [[1, '1'], [-1, '−1']], yticks: [[PI / 2, 'π/2'], [PI, 'π']], fns: [{ f: Math.acos, from: -1, to: 1, color: 'o', steps: 400 }], label: 'arccosine' }), R`y = cos⁻¹x: [−1, 1] → [0, π]`],
  [D.plot({ w: 220, h: 200, x: [-5, 5], y: [-1.9, 1.9], xticks: [[1, '1'], [-1, '−1']], yticks: [[PI / 2, 'π/2'], [-PI / 2, '−π/2']], fns: [{ f: Math.atan, color: 'g' }, { f: function () { return PI / 2; }, color: 'm', dash: '4 4', w: 1 }, { f: function () { return -PI / 2; }, color: 'm', dash: '4 4', w: 1 }], label: 'arctangent' }), R`y = tan⁻¹x: ℝ → (−π/2, π/2)`]
]);

// ---------- chapter text ----------
JEE.book('maths', 'trigonometry', {
  intro: [
    R`Trigonometry began as the study of triangles, but its functions (sine, cosine, tangent…) describe anything periodic: waves, oscillations, rotations, alternating current. JEE uses trigonometry everywhere, from calculus to coordinate geometry.`,
    R`This chapter covers angle measurement, the trigonometric functions of any angle and their graphs, the identities (sum, multiple-angle, sum-to-product), trigonometric equations, and the inverse trigonometric functions.`
  ],
  sections: [
    { h: R`Degree and radian measure; length of an arc`, t: [1], blocks: [
      R`An angle is the amount of rotation of a ray about its initial point. One <b>degree</b> is 1/360 of a full turn (1° = 60′, 1′ = 60″). One <b>radian</b> is the angle subtended at the centre of a circle by an arc equal in length to the radius.`,
      { fig: figRadian, cap: R`1 radian is the angle at the centre when the arc equals the radius.` },
      R`A full turn is the circumference 2πr divided by r, i.e. 2π radians, so \[\pi\ \text{rad} = 180^\circ, \qquad 1\ \text{rad} = \frac{180^\circ}{\pi} \approx 57^\circ 16', \qquad 1^\circ = \frac{\pi}{180}\ \text{rad}.\] An arc of a circle of radius r subtending angle θ (radians) at the centre has length \(s = r\theta\); the sector has area \(\frac12 r^2\theta\).`,
      { ex: { q: R`Find the length of an arc of a circle of radius 10 cm that subtends 60° at the centre.`,
        steps: [R`60° = π/3 rad.`, R`s = 10 × π/3 = 10.47 cm.`], ans: R`≈ 10.47 cm` } },
      { check: { q: R`Convert 225° to radians.`, ans: R`225 × π/180 = 5π/4.` } }
    ] },

    { h: R`Trigonometric functions of any angle; signs`, t: [1], blocks: [
      R`Place the angle θ at the centre of a <b>unit circle</b>, starting from the positive x-axis. If its terminal side meets the circle at P(x, y), then \(\cos\theta = x\), \(\sin\theta = y\), and \(\tan\theta = y/x\), \(\cot\theta = x/y\), \(\sec\theta = 1/x\), \(\csc\theta = 1/y\) (where defined).`,
      { fig: figUnit, cap: R`On the unit circle, cos θ and sin θ are the coordinates of P. "All Students Take Coffee" gives the positive functions in quadrants I–IV.` },
      { table: { head: [R`θ`, R`0`, R`π/6`, R`π/4`, R`π/3`, R`π/2`], rows: [
        [R`sin θ`, R`0`, R`1/2`, R`1/√2`, R`√3/2`, R`1`], [R`cos θ`, R`1`, R`√3/2`, R`1/√2`, R`1/2`, R`0`], [R`tan θ`, R`0`, R`1/√3`, R`1`, R`√3`, R`not defined`]] } },
      R`<b>Allied angles:</b> sin(−θ) = −sin θ, cos(−θ) = cos θ; for angles \(\frac{n\pi}{2} \pm \theta\): if n is odd, sin ↔ cos (tan ↔ cot); if n is even, the function stays the same; the sign is that of the original function in the quadrant where the angle lies (θ treated as acute). For example \(\sin(\pi - \theta) = \sin\theta\), \(\cos(\frac{\pi}{2} + \theta) = -\sin\theta\), \(\tan(\pi + \theta) = \tan\theta\).`,
      { ex: { q: R`Find sin 765° and cos(−1710°).`,
        steps: [R`765° = 2 × 360° + 45°, so sin 765° = sin 45° = 1/√2.`, R`cos(−1710°) = cos 1710° = cos(4 × 360° + 270°) = cos 270° = 0.`], ans: R`1/√2; 0` } },
      { check: { q: R`In which quadrant are both sin θ and cos θ negative?`, ans: R`The third quadrant.` } }
    ] },

    { h: R`Domain and range of trigonometric functions`, t: [1], blocks: [
      { table: { head: [R`Function`, R`Domain`, R`Range`], rows: [
        [R`sin x, cos x`, R`ℝ`, R`[−1, 1]`],
        [R`tan x, sec x`, R`ℝ − {(2n + 1)π/2}`, R`ℝ; (−∞, −1] ∪ [1, ∞)`],
        [R`cot x, csc x`, R`ℝ − {nπ}`, R`ℝ; (−∞, −1] ∪ [1, ∞)`]] } },
      R`<b>Range of a sin x + b cos x:</b> writing \(a\sin x + b\cos x = \sqrt{a^2 + b^2}\,\sin(x + \alpha)\) with \(\tan\alpha = b/a\), the range is \([-\sqrt{a^2 + b^2}, \sqrt{a^2 + b^2}]\).`,
      { ex: { q: R`Find the maximum and minimum values of 3 sin x + 4 cos x.`,
        steps: [R`√(9 + 16) = 5.`], ans: R`maximum 5, minimum −5` } },
      { check: { q: R`What is the range of sec x?`, ans: R`(−∞, −1] ∪ [1, ∞).` } }
    ] },

    { h: R`Periodicity and graphs`, t: [1], blocks: [
      R`A function is <b>periodic</b> with period T if f(x + T) = f(x) for all x, T being the least positive such number. sin, cos, sec, csc have period 2π; tan and cot have period π. The period of \(\sin(ax + b)\) is \(2\pi/|a|\); of \(\tan(ax + b)\) is \(\pi/|a|\); \(|\sin x|\) and \(\sin^2 x\) have period π.`,
      { fig: figGraphs, cap: R`Graphs of the main trigonometric functions over one or two periods.` },
      { check: { q: R`What is the period of sin 3x?`, ans: R`2π/3.` } }
    ] },

    { h: R`Fundamental identities`, t: [0], blocks: [
      R`From \(x^2 + y^2 = 1\) on the unit circle: \[\sin^2\theta + \cos^2\theta = 1, \qquad 1 + \tan^2\theta = \sec^2\theta, \qquad 1 + \cot^2\theta = \csc^2\theta.\] Also \(\tan\theta = \sin\theta/\cos\theta\) and the reciprocal relations.`,
      { ex: { q: R`If \(\sec\theta + \tan\theta = 3\), find \(\sec\theta - \tan\theta\) and \(\sin\theta\).`,
        steps: [R`\((\sec\theta + \tan\theta)(\sec\theta - \tan\theta) = 1\), so \(\sec\theta - \tan\theta = 1/3\).`, R`Adding: \(2\sec\theta = 10/3 \Rightarrow \sec\theta = 5/3\); subtracting: \(\tan\theta = 4/3\). So \(\sin\theta = \tan\theta/\sec\theta = 4/5\).`], ans: R`1/3; 4/5` } },
      { check: { q: R`Simplify (1 − cos²θ)(1 + cot²θ).`, ans: R`sin²θ · csc²θ = 1.` } }
    ] },

    { h: R`Addition and subtraction formulae`, t: [0], blocks: [
      R`\[\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B, \qquad \cos(A \pm B) = \cos A\cos B \mp \sin A\sin B,\] \[\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}.\]`,
      { derive: R`Proof of cos(A − B)`, steps: [R`Take points P(cos A, sin A) and Q(cos B, sin B) on the unit circle; the angle POQ is A − B.`, R`Distance² PQ² = (cos A − cos B)² + (sin A − sin B)² = 2 − 2(cos A cos B + sin A sin B).`, R`By the cosine rule in triangle POQ, PQ² = 1 + 1 − 2cos(A − B). Comparing gives cos(A − B) = cos A cos B + sin A sin B; the others follow.`] },
      R`Useful results: \(\sin(A + B)\sin(A - B) = \sin^2A - \sin^2B\); \(\cos(A + B)\cos(A - B) = \cos^2A - \sin^2B\); \(\tan(\frac\pi4 + A) = \frac{1 + \tan A}{1 - \tan A}\).`,
      { ex: { q: R`Find sin 75° and tan 15°.`,
        steps: [R`sin 75° = sin(45° + 30°) = (1/√2)(√3/2) + (1/√2)(1/2) = (√6 + √2)/4 ≈ 0.966.`, R`tan 15° = tan(45° − 30°) = (1 − 1/√3)/(1 + 1/√3) = 2 − √3.`], ans: R`(√6 + √2)/4; 2 − √3` } },
      { check: { q: R`If A + B = 45°, find (1 + tan A)(1 + tan B).`, ans: R`2 (since tan A + tan B + tan A tan B = 1).` } }
    ] },

    { h: R`Multiple and sub-multiple angle formulae`, t: [0], blocks: [
      { points: [R`\(\sin 2A = 2\sin A\cos A = \dfrac{2\tan A}{1 + \tan^2A}\)`, R`\(\cos 2A = \cos^2A - \sin^2A = 2\cos^2A - 1 = 1 - 2\sin^2A = \dfrac{1 - \tan^2A}{1 + \tan^2A}\)`, R`\(\tan 2A = \dfrac{2\tan A}{1 - \tan^2A}\)`, R`\(\sin 3A = 3\sin A - 4\sin^3A\), \(\cos 3A = 4\cos^3A - 3\cos A\), \(\tan 3A = \dfrac{3\tan A - \tan^3A}{1 - 3\tan^2A}\)`, R`Half angles: \(\sin^2\frac A2 = \frac{1 - \cos A}{2}\), \(\cos^2\frac A2 = \frac{1 + \cos A}{2}\), \(\tan\frac A2 = \frac{\sin A}{1 + \cos A} = \frac{1 - \cos A}{\sin A}\)`] },
      { ex: { q: R`Find sin 18°.`,
        steps: [R`Let θ = 18°: 5θ = 90° ⟹ 2θ = 90° − 3θ ⟹ sin 2θ = cos 3θ.`, R`2 sin θ cos θ = 4cos³θ − 3 cos θ ⟹ 2 sin θ = 4(1 − sin²θ) − 3 ⟹ 4sin²θ + 2 sin θ − 1 = 0.`, R`sin θ = (−2 + √20)/8 (positive root).`], ans: R`sin 18° = (√5 − 1)/4; similarly cos 36° = (√5 + 1)/4` } },
      { tip: R`\(\cos A\cos 2A\cos 4A \cdots \cos 2^{n-1}A = \dfrac{\sin 2^nA}{2^n\sin A}\); e.g. cos 20° cos 40° cos 80° = 1/8.` },
      { check: { q: R`If tan A = 1/2, find tan 2A.`, ans: R`(1)/(1 − 1/4) = 4/3.` } }
    ] },

    { h: R`Sum-to-product and product-to-sum formulae`, t: [0], blocks: [
      R`<b>Product to sum:</b> \(2\sin A\cos B = \sin(A + B) + \sin(A - B)\); \(2\cos A\cos B = \cos(A + B) + \cos(A - B)\); \(2\sin A\sin B = \cos(A - B) - \cos(A + B)\).`,
      R`<b>Sum to product:</b> \[\sin C + \sin D = 2\sin\tfrac{C + D}{2}\cos\tfrac{C - D}{2}, \qquad \sin C - \sin D = 2\cos\tfrac{C + D}{2}\sin\tfrac{C - D}{2},\] \[\cos C + \cos D = 2\cos\tfrac{C + D}{2}\cos\tfrac{C - D}{2}, \qquad \cos C - \cos D = -2\sin\tfrac{C + D}{2}\sin\tfrac{C - D}{2}.\]`,
      { ex: { q: R`Prove that \(\dfrac{\sin 5x + \sin 3x}{\cos 5x + \cos 3x} = \tan 4x\).`,
        steps: [R`Numerator = 2 sin 4x cos x; denominator = 2 cos 4x cos x.`], ans: R`ratio = tan 4x` } },
      { check: { q: R`Write 2 sin 3x cos x as a sum.`, ans: R`sin 4x + sin 2x.` } }
    ] },

    { h: R`Principal and general solutions`, t: [3], blocks: [
      R`Solutions of a trigonometric equation in [0, 2π) are <b>principal solutions</b>; the expression giving all solutions (with an integer n) is the <b>general solution</b>:`,
      { table: { head: [R`Equation`, R`General solution (n ∈ ℤ)`], rows: [
        [R`sin x = 0`, R`x = nπ`], [R`cos x = 0`, R`x = (2n + 1)π/2`], [R`tan x = 0`, R`x = nπ`],
        [R`sin x = sin α`, R`x = nπ + (−1)ⁿα`], [R`cos x = cos α`, R`x = 2nπ ± α`], [R`tan x = tan α`, R`x = nπ + α`],
        [R`sin²x = sin²α (or cos², tan²)`, R`x = nπ ± α`]] } },
      { ex: { q: R`Find the principal and general solutions of sin x = √3/2.`,
        steps: [R`sin x = sin(π/3): principal solutions π/3 and 2π/3.`], ans: R`x = nπ + (−1)ⁿπ/3` } },
      { check: { q: R`Find the general solution of tan x = −1.`, ans: R`x = nπ − π/4.` } }
    ] },

    { h: R`Solving trigonometric equations`, t: [3], blocks: [
      { points: [R`Reduce to a single function (often a quadratic in sin x or cos x) and solve.`, R`Factorise: if f(x)g(x) = 0, solve f = 0 and g = 0 separately.`, R`For a sin x + b cos x = c, divide by √(a² + b²) to get sin(x + α) = c/√(a² + b²) (solutions only if |c| ≤ √(a² + b²)).`, R`Check that solutions do not make any term undefined, and do not cancel factors (you may lose roots).`] },
      { ex: { q: R`Solve 2cos²x + 3 sin x = 0.`,
        steps: [R`2(1 − sin²x) + 3 sin x = 0 ⟹ 2sin²x − 3 sin x − 2 = 0 ⟹ (2 sin x + 1)(sin x − 2) = 0.`, R`sin x = 2 is impossible; sin x = −1/2 = sin(−π/6).`], ans: R`x = nπ + (−1)ⁿ(−π/6), i.e. nπ − (−1)ⁿπ/6` } },
      { ex: { q: R`Solve sin x + cos x = 1.`,
        steps: [R`Divide by √2: sin(x + π/4) = 1/√2 = sin(π/4).`, R`x + π/4 = nπ + (−1)ⁿπ/4.`], ans: R`x = 2nπ or x = 2nπ + π/2` } },
      { check: { q: R`How many solutions does sin x = 1/2 have in [0, 2π]?`, ans: R`Two: π/6 and 5π/6.` } }
    ] },

    { h: R`Inverse trigonometric functions: domains and principal branches`, t: [2], blocks: [
      R`Trigonometric functions are not one-one on ℝ, so we restrict them to an interval where they are bijective (the <b>principal value branch</b>) and invert:`,
      { table: { head: [R`Function`, R`Domain`, R`Range (principal value branch)`], rows: [
        [R`sin⁻¹x`, R`[−1, 1]`, R`[−π/2, π/2]`], [R`cos⁻¹x`, R`[−1, 1]`, R`[0, π]`], [R`tan⁻¹x`, R`ℝ`, R`(−π/2, π/2)`],
        [R`cot⁻¹x`, R`ℝ`, R`(0, π)`], [R`sec⁻¹x`, R`ℝ − (−1, 1)`, R`[0, π] − {π/2}`], [R`csc⁻¹x`, R`ℝ − (−1, 1)`, R`[−π/2, π/2] − {0}`]] } },
      { mistake: R`Confusing sin⁻¹x with 1/sin x. The inverse function sin⁻¹x is an angle; (sin x)⁻¹ = csc x.` },
      { check: { q: R`Find the principal value of cos⁻¹(−1/2).`, ans: R`2π/3.` } }
    ] },

    { h: R`Graphs of inverse trigonometric functions`, t: [2], blocks: [
      R`The graph of each inverse function is the reflection in the line y = x of the principal branch of the original function.`,
      { fig: figInverse, cap: R`sin⁻¹x and tan⁻¹x are increasing; cos⁻¹x is decreasing. tan⁻¹x approaches ±π/2 asymptotically.` },
      { check: { q: R`Is sin⁻¹x an odd function?`, ans: R`Yes: sin⁻¹(−x) = −sin⁻¹x.` } }
    ] },

    { h: R`Properties of inverse trigonometric functions`, t: [2], blocks: [
      { points: [
        R`\(\sin(\sin^{-1}x) = x\) for x ∈ [−1, 1]; \(\sin^{-1}(\sin x) = x\) only for x ∈ [−π/2, π/2] (similarly for others in their branches).`,
        R`\(\sin^{-1}(-x) = -\sin^{-1}x\), \(\tan^{-1}(-x) = -\tan^{-1}x\), but \(\cos^{-1}(-x) = \pi - \cos^{-1}x\), \(\cot^{-1}(-x) = \pi - \cot^{-1}x\).`,
        R`\(\sin^{-1}x + \cos^{-1}x = \dfrac{\pi}{2}\), \(\tan^{-1}x + \cot^{-1}x = \dfrac{\pi}{2}\), \(\sec^{-1}x + \csc^{-1}x = \dfrac{\pi}{2}\).`,
        R`\(\sin^{-1}\frac1x = \csc^{-1}x\), \(\cos^{-1}\frac1x = \sec^{-1}x\), \(\tan^{-1}\frac1x = \cot^{-1}x\) (x > 0).`,
        R`\(\tan^{-1}x + \tan^{-1}y = \tan^{-1}\dfrac{x + y}{1 - xy}\) (xy < 1); \(\tan^{-1}x - \tan^{-1}y = \tan^{-1}\dfrac{x - y}{1 + xy}\).`,
        R`\(2\tan^{-1}x = \sin^{-1}\dfrac{2x}{1 + x^2} = \cos^{-1}\dfrac{1 - x^2}{1 + x^2} = \tan^{-1}\dfrac{2x}{1 - x^2}\) (for |x| < 1).`
      ] },
      { ex: { q: R`Show that \(\tan^{-1}\frac12 + \tan^{-1}\frac13 = \frac\pi4\).`,
        steps: [R`xy = 1/6 < 1: \(\tan^{-1}\dfrac{1/2 + 1/3}{1 - 1/6} = \tan^{-1}1\).`], ans: R`π/4` } },
      { ex: { q: R`Evaluate \(\sin^{-1}(\sin\frac{2\pi}{3})\).`,
        steps: [R`2π/3 is not in [−π/2, π/2]; sin(2π/3) = sin(π/3), and π/3 is in the branch.`], ans: R`π/3 (not 2π/3)` } },
      { check: { q: R`Find cos(sin⁻¹(3/5)).`, ans: R`4/5.` } }
    ] }
  ],
  summary: [
    R`π rad = 180°; arc s = rθ; sector area ½r²θ.`,
    R`Unit circle: cos θ = x, sin θ = y; ASTC signs; allied-angle rule; standard values at 0, π/6, π/4, π/3, π/2.`,
    R`Ranges: sin, cos ∈ [−1, 1]; a sin x + b cos x ∈ [−√(a² + b²), √(a² + b²)]. Periods 2π (sin, cos), π (tan); sin(ax + b) has period 2π/|a|.`,
    R`sin² + cos² = 1; sin(A ± B), cos(A ± B), tan(A ± B); sin 2A, cos 2A (three forms), tan 2A, sin 3A, cos 3A; half-angle; sum-to-product and product-to-sum.`,
    R`General solutions: sin x = sin α → nπ + (−1)ⁿα; cos x = cos α → 2nπ ± α; tan x = tan α → nπ + α.`,
    R`Principal branches: sin⁻¹ [−π/2, π/2], cos⁻¹ [0, π], tan⁻¹ (−π/2, π/2); sin⁻¹x + cos⁻¹x = π/2; tan⁻¹x + tan⁻¹y = tan⁻¹((x + y)/(1 − xy)).`
  ],
  refs: [
    { t: R`OpenStax Precalculus 2e, §5.1 Angles`, url: 'https://openstax.org/books/precalculus-2e/pages/5-1-angles' },
    { t: R`OpenStax Precalculus 2e, §7.2 Sum and Difference Identities`, url: 'https://openstax.org/books/precalculus-2e/pages/7-2-sum-and-difference-identities' },
    { t: R`OpenStax Precalculus 2e, §7.5 Solving Trigonometric Equations`, url: 'https://openstax.org/books/precalculus-2e/pages/7-5-solving-trigonometric-equations' },
    { t: R`OpenStax Precalculus 2e, §6.3 Inverse Trigonometric Functions`, url: 'https://openstax.org/books/precalculus-2e/pages/6-3-inverse-trigonometric-functions' },
    { t: R`Wikipedia: List of trigonometric identities`, url: 'https://en.wikipedia.org/wiki/List_of_trigonometric_identities' }
  ]
});
})();
