// Book chapter: Coordinate Geometry (straight lines, circles and conic sections). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figSection = D.plot({ w: 320, h: 230, x: [-0.5, 9.5], y: [-0.5, 10], noOrigin: true, xticks: [[2, '2'], [4, '4'], [8, '8']], yticks: [[3, '3'], [5, '5'], [9, '9']],
  segs: [{ x1: 2, y1: 3, x2: 8, y2: 9, color: 'b', w: 2 }], guides: [[4, 5]],
  pts: [{ x: 2, y: 3, label: 'A(2, 3)', pos: 'e', math: false }, { x: 8, y: 9, label: 'B(8, 9)', pos: 'w', math: false }, { x: 4, y: 5, color: 'r', label: 'P(4, 5)', pos: 'nw', math: false }],
  texts: [{ x: 3.4, y: 3.6, s: 'm = 1', color: 'o', size: 10 }, { x: 6.5, y: 6.1, s: 'n = 2', color: 'o', size: 10 }],
  label: 'Section formula' });

var figAngle = D.plot({ w: 300, h: 220, x: [-1, 5], y: [-1, 4], noOrigin: false, xticks: [], yticks: [],
  fns: [{ f: function (x) { return 0.35 * (x + 1); }, color: 'b', label: 'L₁: slope m₁ = tan θ₁', lx: 2.2, ly: 0.9, math: false }, { f: function (x) { return 1.6 * (x - 0.7) + 0.6; }, from: 0, to: 2.8, color: 'o', label: 'L₂: slope m₂', lx: 2.0, ly: 3.6, math: false }],
  extra: function (X, Y) { return [D.text(X(1.6), Y(1.7), 'θ', { size: 13, color: 'g' })]; },
  label: 'Angle between two lines' });

var figDist = D.plot({ w: 300, h: 240, x: [-1, 6], y: [-1, 6], eq: true, xticks: [], yticks: [],
  fns: [{ f: function (x) { return (5 - 3 * x) / 4 + 2; }, color: 'b', label: 'ax + by + c = 0', lx: 3.2, ly: -0.6, math: false }],
  pts: [{ x: 3.5, y: 4.5, color: 'r', label: 'P(x₁, y₁)', pos: 'ne', math: false }],
  segs: [{ x1: 3.5, y1: 4.5, x2: 3.5 - 3 * 0.62, y2: 4.5 - 4 * 0.62, color: 'g', w: 2, dash: '5 4', label: 'd', lx: -10 }],
  label: 'Distance of a point from a line' });

var figCentres = D.plot({ w: 340, h: 270, x: [-0.6, 8.6], y: [-0.6, 6.6], eq: true, xticks: [], yticks: [],
  segs: [{ x1: 0, y1: 0, x2: 8, y2: 0, w: 2 }, { x1: 8, y1: 0, x2: 2, y2: 6, w: 2 }, { x1: 2, y1: 6, x2: 0, y2: 0, w: 2 }, { x1: 2, y1: 6, x2: 2, y2: 0, color: 'r', dash: '4 3', w: 1.2 }, { x1: 0, y1: 0, x2: 5, y2: 5, color: 'r', dash: '4 3', w: 1.2 }, { x1: 0.8, y1: 2, x2: 5, y2: 2, color: 'p', w: 1.6 }],
  pts: [{ x: 0, y: 0, label: 'A', pos: 'sw', math: false }, { x: 8, y: 0, label: 'B', pos: 'se', math: false }, { x: 2, y: 6, label: 'C', pos: 'n', math: false }, { x: 2, y: 2, color: 'r', label: 'H', pos: 'nw', math: false }, { x: 10 / 3, y: 2, color: 'g', label: 'G', pos: 'n', math: false }, { x: 4, y: 2, color: 'b', label: 'O', pos: 'ne', math: false }],
  param: [{ fx: function (t) { return 4 + Math.sqrt(20) * Math.cos(t); }, fy: function (t) { return 2 + Math.sqrt(20) * Math.sin(t); }, t: [0, 2 * Math.PI], color: 'b', w: 1, dash: '3 4' }],
  texts: [{ x: 4.3, y: 1.45, s: 'Euler line (HG : GO = 2 : 1)', color: 'p', size: 9, anchor: 'start' }],
  label: 'Orthocentre, centroid and circumcentre' });

var figCircle = D.plot({ w: 300, h: 300, x: [-4, 8], y: [-9, 0], eq: true, xticks: [[2, '2']], yticks: [[-3, '−3']],
  param: [{ fx: function (t) { return 2 + 5 * Math.cos(t); }, fy: function (t) { return -3 + 5 * Math.sin(t); }, t: [0, 2 * Math.PI], color: 'b', w: 2 }],
  segs: [{ x1: 2, y1: -3, x2: 5, y2: 1, color: 'o', w: 1.8, label: 'r = 5', lx: 18, ly: 0 }],
  pts: [{ x: 2, y: -3, color: 'r', label: 'C(2, −3)', pos: 's', math: false }, { x: 5, y: 1, color: 'o' }],
  label: 'Circle with centre (2, -3) and radius 5' });

function cone(cx) {
  return [D.line(cx - 50, 20, cx + 50, 200, { w: 1.6 }), D.line(cx + 50, 20, cx - 50, 200, { w: 1.6 }), D.ellipse(cx, 20, 50, 10, { w: 1.4 }), D.ellipse(cx, 200, 50, 10, { w: 1.4 }), D.text(cx + 10, 110, 'V', { size: 10, math: false, bold: true })];
}
var figCone = D.svg(440, 230, (function () {
  var out = cone(110).concat(cone(320));
  out.push(D.ellipse(110, 150, 22, 6, { color: 'g', w: 2.4 }), D.text(150, 140, 'circle', { size: 10, math: false, color: 'g', anchor: 'start' }));
  out.push(D.ellipse(108, 172, 33, 9, { color: 'b', w: 2.2 }).replace('/>', ' transform="rotate(-14 108 172)"/>'), D.text(150, 162, 'ellipse', { size: 10, math: false, color: 'b', anchor: 'start' }));
  out.push(D.path('M146,196 Q120,130 92,190', { color: 'o', w: 2.4 }), D.text(150, 188, 'parabola', { size: 10, math: false, color: 'o', anchor: 'start' }));
  out.push(D.path('M298,22 Q312,80 326,22', { color: 'r', w: 2.4 }), D.path('M298,198 Q312,140 326,198', { color: 'r', w: 2.4 }), D.line(312, 10, 312, 210, { color: 'r', w: 1, dash: '4 3' }));
  out.push(D.text(320, 226, 'hyperbola: the plane cuts both nappes', { size: 10, math: false, color: 'r' }), D.text(110, 226, 'one nappe cut', { size: 10, math: false, color: 'm' }));
  return out;
})(), 'Conic sections from a double cone');

var figParabola = D.plot({ w: 290, h: 340, x: [-4, 8], y: [-7, 7], eq: true, xticks: [[3, '3'], [-3, '−3']], yticks: [[6, '6'], [-6, '−6']],
  param: [{ fx: function (t) { return t * t / 12; }, fy: function (t) { return t; }, t: [-9, 9], color: 'b', w: 2.2 }],
  segs: [{ x1: -3, y1: -7, x2: -3, y2: 7, color: 'o', dash: '5 4', w: 1.6 }, { x1: 3, y1: -6, x2: 3, y2: 6, color: 'g', w: 1.6 }, { x1: 3, y1: 0, x2: 56.25 / 12, y2: 7.5, color: 'm', w: 1, dash: '3 3' }, { x1: -3, y1: 7.5, x2: 56.25 / 12, y2: 7.5, color: 'm', w: 1, dash: '3 3' }],
  pts: [{ x: 3, y: 0, color: 'r', label: 'S(3, 0)', pos: 'se', math: false }, { x: 56.25 / 12, y: 7.5, color: 'b', label: 'P', pos: 'e', math: false }],
  texts: [{ x: -3.2, y: -6.3, s: 'x = −3', color: 'o', size: 10, anchor: 'end' }, { x: 3.3, y: -2.2, s: 'LR = 12', color: 'g', size: 10, anchor: 'start' }, { x: 5.5, y: -4, s: 'y² = 12x', color: 'b', size: 11 }],
  label: 'Parabola y squared = 12x with focus and directrix' });

var figEllipse = D.plot({ w: 340, h: 230, x: [-7.5, 7.5], y: [-4, 4], eq: true, xticks: [[5, '5'], [-5, '−5'], [4, ''], [-4, '']], yticks: [[3, '3'], [-3, '−3']],
  param: [{ fx: function (t) { return 5 * Math.cos(t); }, fy: function (t) { return 3 * Math.sin(t); }, t: [0, 2 * Math.PI], color: 'p', w: 2.2 }],
  segs: [{ x1: 6.25, y1: -4, x2: 6.25, y2: 4, color: 'o', dash: '5 4', w: 1.4 }, { x1: -6.25, y1: -4, x2: -6.25, y2: 4, color: 'o', dash: '5 4', w: 1.4 }, { x1: -4, y1: 0, x2: 3, y2: 2.4, color: 'g', w: 1.2 }, { x1: 4, y1: 0, x2: 3, y2: 2.4, color: 'g', w: 1.2 }],
  pts: [{ x: 4, y: 0, color: 'r', label: 'S(4, 0)', pos: 'se', math: false }, { x: -4, y: 0, color: 'r', label: 'S′(−4, 0)', pos: 'sw', math: false }, { x: 3, y: 2.4, color: 'p', label: 'P', pos: 'n', math: false }],
  texts: [{ x: 6.4, y: 3.4, s: 'x = a/e', color: 'o', size: 9, anchor: 'start' }, { x: 0.3, y: 1.4, s: 'SP + S′P = 2a', color: 'g', size: 10 }],
  label: 'Ellipse with foci and directrices' });

var figHyperbola = D.plot({ w: 340, h: 250, x: [-9, 9], y: [-6, 6], eq: true, xticks: [[4, '4'], [-4, '−4'], [5, ''], [-5, '']], yticks: [[3, '3'], [-3, '−3']],
  param: [{ fx: function (t) { return 4 * Math.cosh(t); }, fy: function (t) { return 3 * Math.sinh(t); }, t: [-1.6, 1.6], color: 'r', w: 2.2 }, { fx: function (t) { return -4 * Math.cosh(t); }, fy: function (t) { return 3 * Math.sinh(t); }, t: [-1.6, 1.6], color: 'r', w: 2.2 }],
  fns: [{ f: function (x) { return 0.75 * x; }, color: 'm', dash: '5 4', w: 1.2 }, { f: function (x) { return -0.75 * x; }, color: 'm', dash: '5 4', w: 1.2 }],
  pts: [{ x: 5, y: 0, color: 'b', label: 'S(5, 0)', pos: 'se', math: false }, { x: -5, y: 0, color: 'b', label: 'S′', pos: 'sw', math: false }],
  texts: [{ x: 7.2, y: 5.8, s: 'y = (3/4)x', color: 'm', size: 9, anchor: 'start' }, { x: 6, y: -1.8, s: 'x²/16 − y²/9 = 1', color: 'r', size: 10 }],
  label: 'Hyperbola with foci and asymptotes' });

// ---------- chapter text ----------
JEE.book('maths', 'coordinate-geometry', {
  intro: [
    R`Coordinate geometry (analytic geometry) turns geometry into algebra: every point becomes a pair of numbers and every curve an equation. Questions about lines, circles and conics can then be answered by calculation.`,
    R`This chapter covers coordinates, distance and section formulae, locus, slopes and the many forms of the equation of a straight line, distances and angles, the centres of a triangle, circles, and the conic sections (parabola, ellipse and hyperbola).`
  ],
  sections: [
    { h: R`The Cartesian coordinate system`, t: [0], blocks: [
      R`Two perpendicular number lines, the x-axis and y-axis, meet at the origin O. Every point P of the plane is given by an ordered pair (x, y): its abscissa and ordinate. The axes divide the plane into four quadrants: I (+, +), II (−, +), III (−, −), IV (+, −).`,
      { check: { q: R`In which quadrant is (−3, 4)?`, ans: R`The second quadrant.` } }
    ] },

    { h: R`Distance formula`, t: [0], blocks: [
      R`By Pythagoras, the distance between \(P(x_1, y_1)\) and \(Q(x_2, y_2)\) is \[PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}.\] The distance of P from the origin is \(\sqrt{x_1^2 + y_1^2}\).`,
      R`Uses: checking whether points are collinear (PQ + QR = PR), or form an isosceles/equilateral/right triangle, a square, rhombus or parallelogram.`,
      { ex: { q: R`Find the distance between (1, 2) and (4, 6).`,
        steps: [R`\(\sqrt{3^2 + 4^2}\).`], ans: R`5` } },
      { check: { q: R`Is the triangle with vertices (0, 0), (3, 0), (0, 4) right-angled?`, ans: R`Yes: sides 3, 4, 5 satisfy 3² + 4² = 5².` } }
    ] },

    { h: R`Section formula`, t: [0], blocks: [
      R`The point P dividing the segment from \(A(x_1, y_1)\) to \(B(x_2, y_2)\) <b>internally</b> in the ratio m : n is \[P = \left(\frac{mx_2 + nx_1}{m + n},\ \frac{my_2 + ny_1}{m + n}\right),\] and <b>externally</b> \(\left(\dfrac{mx_2 - nx_1}{m - n}, \dfrac{my_2 - ny_1}{m - n}\right)\). The midpoint (m = n) is \(\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)\).`,
      { fig: figSection, cap: R`P divides AB internally in the ratio 1 : 2.` },
      { ex: { q: R`Find the point dividing the join of (2, 3) and (8, 9) in the ratio 1 : 2 internally and externally.`,
        steps: [R`Internally: ((8 + 4)/3, (9 + 6)/3) = (4, 5).`, R`Externally: ((8 − 4)/(1 − 2), (9 − 6)/(1 − 2)) = (−4, −3).`], ans: R`(4, 5); (−4, −3)` } },
      { tip: R`The ratio in which the x-axis divides the join of (x₁, y₁) and (x₂, y₂) is −y₁ : y₂ (positive means internal).` },
      { check: { q: R`Find the midpoint of (−2, 5) and (6, −1).`, ans: R`(2, 2).` } }
    ] },

    { h: R`Shift of origin`, t: [0], blocks: [
      R`If the origin is shifted to (h, k) without rotating the axes, a point with old coordinates (x, y) has new coordinates (X, Y) with \[x = X + h, \qquad y = Y + k.\] This is used to simplify equations: substituting removes linear terms (completing the square).`,
      { ex: { q: R`Shift the origin to remove the first-degree terms from x² + y² − 4x + 6y − 3 = 0.`,
        steps: [R`(x − 2)² + (y + 3)² = 16. Put x = X + 2, y = Y − 3 (new origin (2, −3)).`], ans: R`X² + Y² = 16` } },
      { check: { q: R`The origin is shifted to (1, −2). What are the new coordinates of (3, 4)?`, ans: R`(2, 6).` } }
    ] },

    { h: R`Locus and its equation`, t: [0], blocks: [
      R`A <b>locus</b> is the path traced by a point moving under a given condition. Its <b>equation</b> is the relation between x and y satisfied by every point on it and by no other point. To find it: let the moving point be P(h, k), write the condition as an equation in h and k, simplify, and finally replace h, k by x, y.`,
      { ex: { q: R`Find the locus of a point equidistant from (1, 0) and (−1, 0).`,
        steps: [R`(h − 1)² + k² = (h + 1)² + k² ⟹ −2h = 2h ⟹ h = 0.`], ans: R`x = 0 (the y-axis: the perpendicular bisector)` } },
      { check: { q: R`What is the locus of a point at distance 3 from the origin?`, ans: R`The circle x² + y² = 9.` } }
    ] },

    { h: R`Locus problems`, t: [0], blocks: [
      { ex: { q: R`Find the locus of a point whose distance from (2, 0) equals its distance from the line x = −2.`,
        steps: [R`\(\sqrt{(h - 2)^2 + k^2} = |h + 2|\).`, R`Squaring: \(h^2 - 4h + 4 + k^2 = h^2 + 4h + 4 \Rightarrow k^2 = 8h\).`], ans: R`\(y^2 = 8x\) (a parabola)` } },
      { ex: { q: R`A rod of length 6 slides with its ends on the x- and y-axes. Find the locus of its midpoint.`,
        steps: [R`Ends (2h, 0) and (0, 2k): (2h)² + (2k)² = 36.`], ans: R`x² + y² = 9` } },
      { check: { q: R`Find the locus of a point P such that PA = 2PB with A(0, 0) and B(3, 0).`, ans: R`x² + y² = 4[(x − 3)² + y²], i.e. 3x² + 3y² − 24x + 36 = 0, a circle.` } }
    ] },

    { h: R`Slope of a line; angle between two lines`, t: [1], blocks: [
      R`The <b>slope</b> (gradient) of a non-vertical line making angle θ with the positive x-axis is m = tan θ. Through two points: \(m = \dfrac{y_2 - y_1}{x_2 - x_1}\). A horizontal line has slope 0; a vertical line has no defined slope.`,
      R`The acute angle θ between lines with slopes m₁ and m₂ is given by \[\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1m_2}\right|.\]`,
      { fig: figAngle, cap: R`The angle between two lines is the difference of their inclinations.` },
      { ex: { q: R`Find the acute angle between lines with slopes 1/√3 and √3.`,
        steps: [R`\(\tan\theta = \left|\dfrac{1/\sqrt3 - \sqrt3}{1 + 1}\right| = \dfrac{1}{\sqrt3}\).`], ans: R`30°` } },
      { check: { q: R`Find the slope of the line through (2, 3) and (5, 9).`, ans: R`6/3 = 2.` } }
    ] },

    { h: R`Conditions for parallel and perpendicular lines`, t: [1], blocks: [
      R`Non-vertical lines are <b>parallel</b> ⟺ m₁ = m₂, and <b>perpendicular</b> ⟺ m₁m₂ = −1. For lines a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0: parallel if a₁/a₂ = b₁/b₂, perpendicular if a₁a₂ + b₁b₂ = 0. Three points A, B, C are collinear if slope AB = slope BC.`,
      { ex: { q: R`Find k if the lines 2x + 3y = 5 and kx − 4y = 1 are perpendicular.`,
        steps: [R`a₁a₂ + b₁b₂ = 2k − 12 = 0.`], ans: R`k = 6` } },
      { check: { q: R`Are the lines y = 2x + 1 and 4x − 2y + 7 = 0 parallel?`, ans: R`Yes: both have slope 2.` } }
    ] },

    { h: R`Intercepts of a line on the axes`, t: [1], blocks: [
      R`The <b>x-intercept</b> is where the line meets the x-axis (put y = 0); the <b>y-intercept</b> is where it meets the y-axis (put x = 0). For ax + by + c = 0: x-intercept −c/a, y-intercept −c/b. The intercept form is \(\dfrac xa + \dfrac yb = 1\).`,
      { ex: { q: R`Find the intercepts of 3x + 4y = 12 and the area of the triangle it makes with the axes.`,
        steps: [R`x/4 + y/3 = 1: intercepts 4 and 3.`, R`Area = ½ × 4 × 3.`], ans: R`4, 3; area 6` } },
      { check: { q: R`Write the line with intercepts 2 and −5.`, ans: R`x/2 − y/5 = 1, i.e. 5x − 2y = 10.` } }
    ] },

    { h: R`Various forms of the equation of a line`, t: [2], blocks: [
      { table: { head: [R`Form`, R`Equation`, R`Given`], rows: [
        [R`Horizontal / vertical`, R`y = k / x = h`, R`a point`],
        [R`Point–slope`, R`\(y - y_1 = m(x - x_1)\)`, R`point and slope`],
        [R`Two-point`, R`\(y - y_1 = \dfrac{y_2 - y_1}{x_2 - x_1}(x - x_1)\)`, R`two points`],
        [R`Slope–intercept`, R`y = mx + c`, R`slope and y-intercept`],
        [R`Intercept`, R`\(\dfrac xa + \dfrac yb = 1\)`, R`both intercepts`],
        [R`Normal`, R`x cos α + y sin α = p`, R`perpendicular distance p from O and its angle α`],
        [R`Symmetric (parametric)`, R`\(\dfrac{x - x_1}{\cos\theta} = \dfrac{y - y_1}{\sin\theta} = r\)`, R`point, angle, distance r along the line`],
        [R`General`, R`ax + by + c = 0`, R`slope −a/b`]] } },
      { ex: { q: R`Find the line through (2, 3) with slope −1/2.`,
        steps: [R`y − 3 = −½(x − 2) ⟹ 2y − 6 = −x + 2.`], ans: R`x + 2y − 8 = 0` } },
      { ex: { q: R`Find the line whose perpendicular from the origin has length 5 and makes 60° with the x-axis.`,
        steps: [R`x cos 60° + y sin 60° = 5.`], ans: R`x + √3y = 10` } },
      { check: { q: R`Find the line through (1, 2) and (3, 6).`, ans: R`Slope 2: y − 2 = 2(x − 1), i.e. y = 2x.` } }
    ] },

    { h: R`Intersection of lines; concurrence`, t: [2], blocks: [
      R`The point of intersection of two lines is found by solving their equations simultaneously. Three lines \(a_ix + b_iy + c_i = 0\) are <b>concurrent</b> (pass through one point) if the point of intersection of two of them lies on the third, or equivalently if \[\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0\] (with no two of them parallel).`,
      { ex: { q: R`Find k so that 2x − y − 1 = 0, x + y − 5 = 0 and 3x + ky − 7 = 0 are concurrent.`,
        steps: [R`The first two meet at (2, 3).`, R`6 + 3k − 7 = 0.`], ans: R`k = 1/3` } },
      { check: { q: R`Where do x + y = 4 and x − y = 2 meet?`, ans: R`(3, 1).` } }
    ] },

    { h: R`Lines through the point of intersection of two lines`, t: [2], blocks: [
      R`Every line through the intersection of \(L_1 \equiv a_1x + b_1y + c_1 = 0\) and \(L_2 \equiv a_2x + b_2y + c_2 = 0\) has the form \[L_1 + \lambda L_2 = 0\] for some constant λ (a <b>family of lines</b>). Find λ from one more condition.`,
      { ex: { q: R`Find the line through the intersection of x + y = 3 and 2x − y = 0 that also passes through (1, 5).`,
        steps: [R`(x + y − 3) + λ(2x − y) = 0. Through (1, 5): (1 + 5 − 3) + λ(2 − 5) = 0 ⟹ λ = 1.`, R`(x + y − 3) + (2x − y) = 0.`], ans: R`3x − 3 = 0, i.e. x = 1` } },
      { check: { q: R`Which family of lines all pass through (1, 2)?`, ans: R`(y − 2) + λ(x − 1) = 0 (together with x = 1).` } }
    ] },

    { h: R`Bisectors of the angles between two lines`, t: [2], blocks: [
      R`The bisectors of the angles between \(a_1x + b_1y + c_1 = 0\) and \(a_2x + b_2y + c_2 = 0\) are the loci of points equidistant from both: \[\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm\frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}.\] The two bisectors are perpendicular. With c₁, c₂ made positive, the "+" sign gives the bisector of the angle containing the origin.`,
      { ex: { q: R`Find the bisectors of the angles between 3x − 4y + 7 = 0 and 12x + 5y − 2 = 0.`,
        steps: [R`\(\dfrac{3x - 4y + 7}{5} = \pm\dfrac{12x + 5y - 2}{13}\).`, R`"+": 39x − 52y + 91 = 60x + 25y − 10 ⟹ 21x + 77y − 101 = 0. "−": 39x − 52y + 91 = −60x − 25y + 10 ⟹ 99x − 27y + 81 = 0, i.e. 11x − 3y + 9 = 0.`], ans: R`21x + 77y − 101 = 0 and 11x − 3y + 9 = 0` } },
      { check: { q: R`What is the angle between the two bisectors?`, ans: R`90°.` } }
    ] },

    { h: R`Distance of a point from a line; parallel lines`, t: [3], blocks: [
      R`The perpendicular distance of \(P(x_1, y_1)\) from \(ax + by + c = 0\) is \[d = \frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}.\] The distance between parallel lines \(ax + by + c_1 = 0\) and \(ax + by + c_2 = 0\) is \(\dfrac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}\).`,
      { fig: figDist, cap: R`The shortest distance from a point to a line is along the perpendicular.` },
      { ex: { q: R`Find the distance of (3, 4) from 3x + 4y − 5 = 0, and between 3x + 4y = 5 and 3x + 4y = 15.`,
        steps: [R`|9 + 16 − 5|/5 = 4.`, R`|−5 + 15|/5 = 2.`], ans: R`4; 2` } },
      { tip: R`The foot of the perpendicular (h, k) from (x₁, y₁) to ax + by + c = 0 satisfies \(\dfrac{h - x_1}{a} = \dfrac{k - y_1}{b} = -\dfrac{ax_1 + by_1 + c}{a^2 + b^2}\); the image doubles this.` },
      { check: { q: R`Find the distance of the origin from x + y = 2.`, ans: R`2/√2 = √2.` } }
    ] },

    { h: R`Centroid, orthocentre, circumcentre and incentre`, t: [4], blocks: [
      { table: { head: [R`Centre`, R`Definition`, R`Coordinates / method`], rows: [
        [R`Centroid G`, R`intersection of medians`, R`\(\left(\dfrac{x_1 + x_2 + x_3}{3}, \dfrac{y_1 + y_2 + y_3}{3}\right)\)`],
        [R`Orthocentre H`, R`intersection of altitudes`, R`solve two altitude equations; for a right triangle, the right-angled vertex`],
        [R`Circumcentre O`, R`intersection of perpendicular bisectors; centre of the circumcircle`, R`point equidistant from the vertices; for a right triangle, the midpoint of the hypotenuse`],
        [R`Incentre I`, R`intersection of angle bisectors; centre of the incircle`, R`\(\left(\dfrac{ax_1 + bx_2 + cx_3}{a + b + c}, \dfrac{ay_1 + by_2 + cy_3}{a + b + c}\right)\), a, b, c = sides opposite the vertices`]] } },
      { fig: figCentres, cap: R`For A(0, 0), B(8, 0), C(2, 6): H(2, 2), G(10/3, 2), O(4, 2) lie on the Euler line, with HG = 2 GO.` },
      { ex: { q: R`For the triangle with vertices (0, 0), (6, 0), (0, 8), find the centroid, orthocentre, circumcentre and incentre.`,
        steps: [R`G = (2, 8/3). Right angle at the origin, so H = (0, 0) and O = midpoint of the hypotenuse = (3, 4).`, R`Sides: a = 10 (opposite (0, 0)), b = 8, c = 6: I = ((0 + 48 + 0)/24, (0 + 0 + 48)/24) = (2, 2).`], ans: R`G(2, 8/3), H(0, 0), O(3, 4), I(2, 2)` } },
      { check: { q: R`For an equilateral triangle, how are G, H, O and I related?`, ans: R`They coincide.` } }
    ] },

    { h: R`Equation of a circle: standard and general forms`, t: [5], blocks: [
      R`A <b>circle</b> is the locus of points at a constant distance r (radius) from a fixed point (h, k) (centre): \[(x - h)^2 + (y - k)^2 = r^2.\] Expanding gives the <b>general form</b> \[x^2 + y^2 + 2gx + 2fy + c = 0, \quad \text{centre } (-g, -f), \quad r = \sqrt{g^2 + f^2 - c}.\] It is a real circle if g² + f² − c > 0, a point circle if = 0. A second-degree equation is a circle only if the coefficients of x² and y² are equal and there is no xy term.`,
      { fig: figCircle, cap: R`x² + y² − 4x + 6y − 12 = 0 has centre (2, −3) and radius 5.` },
      { ex: { q: R`Find the centre and radius of x² + y² − 4x + 6y − 12 = 0.`,
        steps: [R`g = −2, f = 3, c = −12: centre (2, −3), r = √(4 + 9 + 12).`], ans: R`(2, −3), 5` } },
      { check: { q: R`Write the circle with centre (1, −1) and radius 3.`, ans: R`(x − 1)² + (y + 1)² = 9.` } }
    ] },

    { h: R`Circle with given endpoints of a diameter`, t: [5], blocks: [
      R`If \((x_1, y_1)\) and \((x_2, y_2)\) are the ends of a diameter, then for any point P on the circle the angle in the semicircle is 90°, so \[(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0.\]`,
      { ex: { q: R`Find the circle on the join of (1, 2) and (5, 6) as diameter.`,
        steps: [R`(x − 1)(x − 5) + (y − 2)(y − 6) = 0.`], ans: R`x² + y² − 6x − 8y + 17 = 0 (centre (3, 4), r = 2√2)` } },
      { check: { q: R`Find the circle with diameter from (0, 0) to (4, 0).`, ans: R`x(x − 4) + y² = 0.` } }
    ] },

    { h: R`Intersection of a line and a circle`, t: [5], blocks: [
      R`Let d be the distance from the centre to the line: if d > r the line misses the circle; if d = r it <b>touches</b> (is a tangent); if d < r it cuts the circle in two points, and the chord has length \(2\sqrt{r^2 - d^2}\). The points of intersection come from solving the line and circle together (a quadratic).`,
      R`<b>Tangency condition:</b> y = mx + c touches x² + y² = a² if \(c^2 = a^2(1 + m^2)\).`,
      { ex: { q: R`For which c does y = x + c touch x² + y² = 8?`,
        steps: [R`c² = 8(1 + 1) = 16.`], ans: R`c = ±4` } },
      { ex: { q: R`Find the length of the chord cut by 3x + 4y = 5 on x² + y² = 25.`,
        steps: [R`d = 5/5 = 1, r = 5: chord = 2√(25 − 1).`], ans: R`4√6 ≈ 9.8` } },
      { check: { q: R`Does x + y = 10 meet x² + y² = 25?`, ans: R`d = 10/√2 ≈ 7.07 > 5: no.` } }
    ] },

    { h: R`Parametric form; tangent, normal and chord`, t: [5], blocks: [
      R`<b>Parametric equations:</b> the circle (x − h)² + (y − k)² = r² is x = h + r cos θ, y = k + r sin θ.`,
      { points: [R`<b>Tangent</b> at \((x_1, y_1)\) on \(x^2 + y^2 + 2gx + 2fy + c = 0\): \(T = 0\), i.e. \(xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0\). For \(x^2 + y^2 = a^2\): \(xx_1 + yy_1 = a^2\); in slope form \(y = mx \pm a\sqrt{1 + m^2}\).`, R`<b>Normal</b> at a point passes through the centre.`, R`<b>Chord with midpoint</b> \((x_1, y_1)\): \(T = S_1\). <b>Length of tangent</b> from \((x_1, y_1)\): \(\sqrt{S_1}\), where \(S_1 = x_1^2 + y_1^2 + 2gx_1 + 2fy_1 + c\).`, R`<b>Chord of contact</b> of tangents from \((x_1, y_1)\): T = 0.`] },
      { ex: { q: R`Find the tangent to x² + y² = 25 at (3, 4) and the length of the tangent from (7, 1).`,
        steps: [R`Tangent: 3x + 4y = 25.`, R`S₁ = 49 + 1 − 25 = 25 ⟹ length 5.`], ans: R`3x + 4y = 25; 5` } },
      { check: { q: R`Write the parametric form of x² + y² = 9.`, ans: R`x = 3 cos θ, y = 3 sin θ.` } }
    ] },

    { h: R`Two circles; families of circles`, t: [5], blocks: [
      R`For circles with centres C₁, C₂ and radii r₁, r₂ at distance d = C₁C₂: d > r₁ + r₂ separate (4 common tangents); d = r₁ + r₂ touch externally (3); |r₁ − r₂| < d < r₁ + r₂ intersect (2); d = |r₁ − r₂| touch internally (1); d < |r₁ − r₂| one inside the other (0).`,
      { points: [R`Circles through the intersection of S₁ = 0 and S₂ = 0: \(S_1 + \lambda S_2 = 0\) (λ ≠ −1); λ = −1 gives the <b>common chord</b> (radical axis) S₁ − S₂ = 0.`, R`Circles through the intersection of S = 0 and a line L = 0: S + λL = 0.`, R`<b>Orthogonal circles</b> (tangents at intersection perpendicular): \(2g_1g_2 + 2f_1f_2 = c_1 + c_2\).`] },
      { ex: { q: R`Find the common chord of x² + y² − 4 = 0 and x² + y² − 2x − 2 = 0.`,
        steps: [R`S₁ − S₂ = 0: (−4) − (−2x − 2) = 0 ⟹ 2x − 2 = 0.`], ans: R`x = 1` } },
      { check: { q: R`How many common tangents do two circles touching externally have?`, ans: R`Three.` } }
    ] },

    { h: R`Sections of a cone`, t: [6], blocks: [
      R`Cutting a double right circular cone by a plane gives the <b>conic sections</b>. If β is the angle between the plane and the axis and α the semi-vertical angle: β = 90° gives a circle; α < β < 90° an ellipse; β = α a parabola; β < α a hyperbola. Planes through the vertex give degenerate conics (a point, a line, a pair of lines).`,
      { fig: figCone, cap: R`Circle, ellipse, parabola and hyperbola from one double cone.` },
      R`<b>Focus–directrix definition:</b> a conic is the locus of a point whose distance from a fixed point (focus) is e times its distance from a fixed line (directrix). The constant e is the <b>eccentricity</b>: e = 0 circle, 0 < e < 1 ellipse, e = 1 parabola, e > 1 hyperbola.`,
      { check: { q: R`What is the eccentricity of a parabola?`, ans: R`1.` } }
    ] },

    { h: R`Parabola in standard form`, t: [6], blocks: [
      R`A <b>parabola</b> is the locus of points equidistant from a focus and a directrix. With focus (a, 0) and directrix x = −a: \[y^2 = 4ax.\] The <b>vertex</b> is the origin, the <b>axis</b> is the x-axis, and the <b>latus rectum</b> (focal chord perpendicular to the axis) has length 4a, ends (a, ±2a).`,
      { fig: figParabola, cap: R`For y² = 12x: a = 3, focus (3, 0), directrix x = −3, latus rectum 12. Every point P is as far from S as from the directrix.` },
      { table: { head: [R`Equation`, R`Focus`, R`Directrix`, R`Opens`], rows: [[R`y² = 4ax`, R`(a, 0)`, R`x = −a`, R`right`], [R`y² = −4ax`, R`(−a, 0)`, R`x = a`, R`left`], [R`x² = 4ay`, R`(0, a)`, R`y = −a`, R`up`], [R`x² = −4ay`, R`(0, −a)`, R`y = a`, R`down`]] } },
      R`Focal distance of a point (x₁, y₁) on y² = 4ax: \(SP = x_1 + a\).`,
      { ex: { q: R`Find the focus, directrix and length of the latus rectum of y² = 12x.`,
        steps: [R`4a = 12 ⟹ a = 3.`], ans: R`focus (3, 0); x = −3; LR = 12` } },
      { check: { q: R`Find the focus of x² = −8y.`, ans: R`4a = 8, a = 2: focus (0, −2).` } }
    ] },

    { h: R`Ellipse in standard form`, t: [6], blocks: [
      R`An <b>ellipse</b> is the locus of points whose distances from two foci add up to a constant 2a. In standard form (a > b): \[\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, \qquad b^2 = a^2(1 - e^2), \quad c = ae = \sqrt{a^2 - b^2}.\] Foci (±ae, 0), directrices \(x = \pm a/e\), major axis 2a, minor axis 2b, latus rectum \(2b^2/a\), and for a point P: SP + S′P = 2a.`,
      { fig: figEllipse, cap: R`x²/25 + y²/9 = 1: a = 5, b = 3, c = 4, e = 4/5; directrices x = ±25/4.` },
      { ex: { q: R`Find the eccentricity, foci, directrices and latus rectum of x²/25 + y²/9 = 1.`,
        steps: [R`c = √(25 − 9) = 4, e = 4/5.`, R`Foci (±4, 0); directrices x = ±a/e = ±25/4; LR = 2b²/a = 18/5.`], ans: R`e = 4/5; (±4, 0); x = ±25/4; 18/5` } },
      R`If b > a, the major axis is along the y-axis: foci (0, ±be), \(a^2 = b^2(1 - e^2)\).`,
      { check: { q: R`What is the eccentricity of a circle viewed as an ellipse?`, ans: R`0 (a = b).` } }
    ] },

    { h: R`Hyperbola in standard form`, t: [6], blocks: [
      R`A <b>hyperbola</b> is the locus of points whose distances from two foci differ by a constant 2a: \[\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1, \qquad b^2 = a^2(e^2 - 1), \quad c = ae = \sqrt{a^2 + b^2}.\] Foci (±ae, 0), directrices \(x = \pm a/e\), transverse axis 2a, conjugate axis 2b, latus rectum \(2b^2/a\), |SP − S′P| = 2a. Its <b>asymptotes</b> are \(y = \pm\frac bax\).`,
      { fig: figHyperbola, cap: R`x²/16 − y²/9 = 1: a = 4, b = 3, c = 5, e = 5/4; the branches approach the asymptotes y = ±¾x.` },
      { ex: { q: R`Find e, the foci, the asymptotes and the latus rectum of x²/16 − y²/9 = 1.`,
        steps: [R`c = √(16 + 9) = 5, e = 5/4.`, R`Foci (±5, 0); asymptotes y = ±3x/4; LR = 2 × 9/4 = 9/2.`], ans: R`e = 5/4; (±5, 0); y = ±¾x; 9/2` } },
      R`A <b>rectangular hyperbola</b> has a = b, e = √2, perpendicular asymptotes: x² − y² = a², or xy = c² when the asymptotes are the axes.`,
      { check: { q: R`What is the eccentricity of x² − y² = 4?`, ans: R`√2.` } }
    ] },

    { h: R`Parametric equations; tangents and normals to conics`, t: [6], blocks: [
      { table: { head: [R`Conic`, R`Parametric point`, R`Tangent at (x₁, y₁)`, R`Tangent of slope m`], rows: [
        [R`y² = 4ax`, R`(at², 2at)`, R`yy₁ = 2a(x + x₁); at t: ty = x + at²`, R`\(y = mx + \dfrac am\)`],
        [R`x²/a² + y²/b² = 1`, R`(a cos θ, b sin θ)`, R`\(\dfrac{xx_1}{a^2} + \dfrac{yy_1}{b^2} = 1\)`, R`\(y = mx \pm \sqrt{a^2m^2 + b^2}\)`],
        [R`x²/a² − y²/b² = 1`, R`(a sec θ, b tan θ)`, R`\(\dfrac{xx_1}{a^2} - \dfrac{yy_1}{b^2} = 1\)`, R`\(y = mx \pm \sqrt{a^2m^2 - b^2}\)`]] } },
      R`The <b>normal</b> is the line perpendicular to the tangent at the point of contact. For y² = 4ax at (at², 2at): \(y = -tx + 2at + at^3\); for the ellipse at (x₁, y₁): \(\dfrac{a^2x}{x_1} - \dfrac{b^2y}{y_1} = a^2 - b^2\).`,
      { ex: { q: R`Find the tangent to y² = 8x at (2, 4) and its slope.`,
        steps: [R`4a = 8, a = 2: yy₁ = 2a(x + x₁) ⟹ 4y = 4(x + 2).`], ans: R`y = x + 2 (slope 1)` } },
      { ex: { q: R`For which c is y = 2x + c a tangent to x²/4 + y²/3 = 1?`,
        steps: [R`c² = a²m² + b² = 4 × 4 + 3 = 19.`], ans: R`c = ±√19` } },
      { tip: R`A tangent to y² = 4ax has the form y = mx + a/m; the point of contact is (a/m², 2a/m). The <b>director circle</b> of an ellipse (locus of points from which perpendicular tangents are drawn) is x² + y² = a² + b².` },
      { check: { q: R`Write the tangent to x²/9 + y²/4 = 1 at (3 cos θ, 2 sin θ).`, ans: R`(x cos θ)/3 + (y sin θ)/2 = 1.` } }
    ] }
  ],
  summary: [
    R`Distance √((x₂ − x₁)² + (y₂ − y₁)²); section ((mx₂ + nx₁)/(m + n), …); shift of origin x = X + h; locus: write the condition in (h, k).`,
    R`Slope m = tan θ = (y₂ − y₁)/(x₂ − x₁); tan θ = |(m₁ − m₂)/(1 + m₁m₂)|; parallel m₁ = m₂, perpendicular m₁m₂ = −1.`,
    R`Forms: point–slope, two-point, y = mx + c, x/a + y/b = 1, x cos α + y sin α = p, general ax + by + c = 0. Concurrency: determinant zero; family L₁ + λL₂ = 0; bisectors (L₁/√(a₁² + b₁²) = ±L₂/√(a₂² + b₂²)).`,
    R`Distance from a point |ax₁ + by₁ + c|/√(a² + b²); between parallels |c₁ − c₂|/√(a² + b²).`,
    R`Centroid average of vertices; incentre (ax₁ + bx₂ + cx₃)/(a + b + c); H, G, O collinear with HG : GO = 2 : 1.`,
    R`Circle: centre (−g, −f), r = √(g² + f² − c); diameter form; tangent T = 0; length of tangent √S₁; c² = a²(1 + m²); common chord S₁ − S₂ = 0.`,
    R`Parabola y² = 4ax (focus (a, 0), LR 4a); ellipse x²/a² + y²/b² = 1 (b² = a²(1 − e²), SP + S′P = 2a); hyperbola x²/a² − y²/b² = 1 (b² = a²(e² − 1), asymptotes y = ±bx/a). Tangents y = mx + a/m, y = mx ± √(a²m² ± b²).`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §2.1 The Rectangular Coordinate Systems and Graphs`, url: 'https://openstax.org/books/college-algebra-2e/pages/2-1-the-rectangular-coordinate-systems-and-graphs' },
    { t: R`OpenStax Precalculus 2e, §10.1 The Ellipse`, url: 'https://openstax.org/books/precalculus-2e/pages/10-1-the-ellipse' },
    { t: R`OpenStax Precalculus 2e, §10.2 The Hyperbola`, url: 'https://openstax.org/books/precalculus-2e/pages/10-2-the-hyperbola' },
    { t: R`OpenStax Precalculus 2e, §10.3 The Parabola`, url: 'https://openstax.org/books/precalculus-2e/pages/10-3-the-parabola' },
    { t: R`Wikipedia: Conic section`, url: 'https://en.wikipedia.org/wiki/Conic_section' }
  ]
});
})();
