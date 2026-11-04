// Book chapter: Vector Algebra. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 11, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
// Oblique projection of 3-D point (x, y, z) to the page.
function P3(x, y, z, o) { o = o || [120, 150]; return [o[0] + 40 * y - 22 * x, o[1] - 40 * z + 14 * x]; }

// ---------- figures ----------
var figLaws = D.row([
  [D.svg(220, 160, [D.arrow(20, 130, 130, 130, { color: 'b', w: 2.2 }), D.arrow(130, 130, 190, 40, { color: 'o', w: 2.2 }), D.arrow(20, 130, 190, 40, { color: 'g', w: 2.6 }),
    lab(75, 146, 'a', 'b', 13, { bold: true }), lab(172, 92, 'b', 'o', 13, { bold: true }), lab(90, 70, 'a + b', 'g', 13, { bold: true })], 'triangle law'), R`Triangle law: place b at the head of a`],
  [D.svg(220, 160, [D.arrow(20, 130, 130, 130, { color: 'b', w: 2.2 }), D.arrow(20, 130, 80, 40, { color: 'o', w: 2.2 }), D.line(130, 130, 190, 40, { color: 'm', w: 1.2, dash: '4 3' }), D.line(80, 40, 190, 40, { color: 'm', w: 1.2, dash: '4 3' }), D.arrow(20, 130, 190, 40, { color: 'g', w: 2.6 }),
    lab(75, 146, 'a', 'b', 13, { bold: true }), lab(40, 80, 'b', 'o', 13, { bold: true }), lab(150, 100, 'a + b', 'g', 13, { bold: true })], 'parallelogram law'), R`Parallelogram law: the diagonal from the common tail`]
]);

var figAxes = D.svg(300, 230, (function () {
  var O = P3(0, 0, 0), out = [];
  [[3.2, 0, 0, 'x'], [0, 3.6, 0, 'y'], [0, 0, 3, 'z']].forEach(function (a) { var e = P3(a[0], a[1], a[2]); out.push(D.arrow(O[0], O[1], e[0], e[1], { color: 'm', w: 1.4, head: 8 }), lab(e[0] + (a[3] === 'x' ? -8 : 8), e[1] + (a[3] === 'z' ? -6 : 4), a[3], 'm', 12, { bold: true })); });
  var Pt = P3(2, 3, 2), A = P3(2, 3, 0), B = P3(2, 0, 0), C = P3(0, 3, 0);
  out.push(D.line(A[0], A[1], Pt[0], Pt[1], { color: 'm', dash: '3 3', w: 1 }), D.line(B[0], B[1], A[0], A[1], { color: 'm', dash: '3 3', w: 1 }), D.line(C[0], C[1], A[0], A[1], { color: 'm', dash: '3 3', w: 1 }));
  out.push(D.arrow(O[0], O[1], Pt[0], Pt[1], { color: 'b', w: 2.4 }), D.dot(Pt[0], Pt[1], { color: 'b' }), lab(Pt[0] + 8, Pt[1] - 8, 'P(x, y, z)', 'b', 11, { anchor: 'start' }), lab(Pt[0] + 8, Pt[1] + 8, 'r = xi + yj + zk', 'b', 10, { anchor: 'start' }));
  var I = P3(1, 0, 0), J = P3(0, 1, 0), K = P3(0, 0, 1);
  out.push(D.arrow(O[0], O[1], I[0], I[1], { color: 'r', w: 2.4, head: 7 }), D.arrow(O[0], O[1], J[0], J[1], { color: 'r', w: 2.4, head: 7 }), D.arrow(O[0], O[1], K[0], K[1], { color: 'r', w: 2.4, head: 7 }));
  out.push(lab(I[0] - 10, I[1] + 4, 'i', 'r', 12, { bold: true }), lab(J[0], J[1] + 14, 'j', 'r', 12, { bold: true }), lab(K[0] - 10, K[1], 'k', 'r', 12, { bold: true }));
  return out;
})(), 'Position vector in three dimensions');

var figProj = D.svg(320, 170, [D.arrow(30, 140, 290, 140, { color: 'b', w: 2.2 }), D.arrow(30, 140, 190, 40, { color: 'o', w: 2.2 }), D.line(190, 40, 190, 140, { color: 'm', dash: '4 3', w: 1.2 }),
  D.line(30, 152, 190, 152, { color: 'g', w: 2.6 }), lab(110, 164, '|a| cos θ = a·b / |b|', 'g', 11), lab(280, 128, 'b', 'b', 13, { bold: true }), lab(110, 76, 'a', 'o', 13, { bold: true }),
  D.path('M70,140 A40,40 0 0 0 64,119', { color: 'm', w: 1.4 }), lab(82, 128, 'θ', 'm', 12)], 'Projection of a on b');

var figCross = D.svg(320, 210, (function () {
  var o = [110, 160], out = [], A = [250, 160], B = [170, 110], N = [110, 40];
  out.push(D.poly([o, A, [A[0] + 60, A[1] - 50], B], { closed: true, color: 'b', fill: 'soft', w: 1 }));
  out.push(D.arrow(o[0], o[1], A[0], A[1], { color: 'b', w: 2.2 }), D.arrow(o[0], o[1], B[0], B[1], { color: 'o', w: 2.2 }), D.arrow(o[0], o[1], N[0], N[1], { color: 'g', w: 2.6 }));
  out.push(lab(245, 176, 'a', 'b', 13, { bold: true }), lab(168, 98, 'b', 'o', 13, { bold: true }), lab(98, 40, 'a × b', 'g', 13, { bold: true, anchor: 'end' }));
  out.push(lab(215, 150, 'area = |a × b|', 'b', 10), lab(160, 200, 'a × b is perpendicular to both (right-hand rule)', 'm', 10));
  return out;
})(), 'Cross product');

var figBox = D.svg(300, 210, (function () {
  var o = [70, 170], a = [130, 0], b = [50, -40], c = [20, -100], out = [];
  function add() { var s = [o[0], o[1]]; for (var i = 0; i < arguments.length; i++) { s[0] += arguments[i][0]; s[1] += arguments[i][1]; } return s; }
  var pts = { O: o, A: add(a), B: add(b), C: add(c), AB: add(a, b), AC: add(a, c), BC: add(b, c), ABC: add(a, b, c) };
  [['A', 'AB'], ['B', 'AB'], ['C', 'AC'], ['C', 'BC'], ['A', 'AC'], ['B', 'BC'], ['AB', 'ABC'], ['AC', 'ABC'], ['BC', 'ABC']].forEach(function (e) { out.push(D.line(pts[e[0]][0], pts[e[0]][1], pts[e[1]][0], pts[e[1]][1], { color: 'm', w: 1.2, dash: '4 3' })); });
  out.push(D.arrow(o[0], o[1], pts.A[0], pts.A[1], { color: 'b', w: 2.2 }), D.arrow(o[0], o[1], pts.B[0], pts.B[1], { color: 'o', w: 2.2 }), D.arrow(o[0], o[1], pts.C[0], pts.C[1], { color: 'g', w: 2.2 }));
  out.push(lab(pts.A[0] + 4, pts.A[1] + 14, 'a', 'b', 13, { bold: true }), lab(pts.B[0] + 10, pts.B[1] + 4, 'b', 'o', 13, { bold: true }), lab(pts.C[0] - 10, pts.C[1], 'c', 'g', 13, { bold: true }));
  out.push(lab(150, 200, 'volume = |[a b c]| = |a · (b × c)|', 'm', 11));
  return out;
})(), 'Parallelepiped and scalar triple product');

var figSection = D.svg(340, 200, [
  D.dot(40, 170, { color: 'k' }), lab(30, 184, 'O', 'k', 12, { bold: true }),
  D.line(90, 60, 300, 110, { color: 'm', w: 1.4 }), D.dot(90, 60, { color: 'b' }), D.dot(300, 110, { color: 'o' }), D.dot(230, 93.3, { color: 'g' }),
  lab(84, 48, 'A', 'b', 13, { bold: true }), lab(306, 100, 'B', 'o', 13, { bold: true }), lab(232, 80, 'R', 'g', 13, { bold: true }),
  D.arrow(40, 170, 90, 60, { color: 'b', w: 2 }), D.arrow(40, 170, 300, 110, { color: 'o', w: 2 }), D.arrow(40, 170, 230, 93.3, { color: 'g', w: 2.2 }),
  lab(52, 110, 'a', 'b', 13, { bold: true }), lab(190, 152, 'b', 'o', 13, { bold: true }), lab(150, 118, 'r', 'g', 13, { bold: true }),
  lab(160, 64, 'm', 'm', 12), lab(268, 90, 'n', 'm', 12),
  lab(170, 194, 'r = (m b + n a)/(m + n)', 'g', 11)
], 'Section formula: R divides AB in the ratio m to n');

// ---------- chapter text ----------
JEE.book('maths', 'vector-algebra', {
  intro: [
    R`Many physical quantities (displacement, velocity, force) have both a size and a direction: they are <b>vectors</b>. Vector algebra gives a compact language for geometry and physics, and leads naturally into three-dimensional geometry.`,
    R`This chapter covers types of vectors, addition and scalar multiplication, components and direction cosines, the scalar (dot) and vector (cross) products with their geometric meanings, and the scalar and vector triple products.`
  ],
  sections: [
    { h: R`Vectors and scalars; position vectors`, t: [0], blocks: [
      R`A <b>scalar</b> has magnitude only (mass, temperature, speed). A <b>vector</b> has magnitude and direction (displacement, force, velocity), drawn as a directed line segment \(\overrightarrow{AB}\) from initial point A to terminal point B. Its <b>magnitude</b> (length) is \(|\overrightarrow{AB}|\).`,
      R`The <b>position vector</b> of a point P(x, y, z) is \(\vec r = \overrightarrow{OP} = x\hat i + y\hat j + z\hat k\), with \(|\vec r| = \sqrt{x^2 + y^2 + z^2}\). For any two points, \(\overrightarrow{AB} = \vec b - \vec a\) (position vector of B minus that of A).`,
      R`Why does direction matter? Walk 3 km and then 4 km: you could end up 7 km from home, 1 km from home, or 5 km from home (if the walks were at right angles). Distances (scalars) add like ordinary numbers; displacements (vectors) add according to their directions. That is the whole reason for vector algebra.`,
      { ex: { q: R`For A(1, 2, 3) and B(3, −1, 9), find \(\overrightarrow{AB}\) and its magnitude.`,
        steps: [R`\(\overrightarrow{AB} = (3 - 1)\hat i + (-1 - 2)\hat j + (9 - 3)\hat k = 2\hat i - 3\hat j + 6\hat k\).`, R`\(|\overrightarrow{AB}| = \sqrt{4 + 9 + 36}\).`], ans: R`\(2\hat i - 3\hat j + 6\hat k\); 7` } },
      { check: { q: R`Find \(\overrightarrow{AB}\) if A = (1, 2, 3) and B = (4, 0, 5).`, ans: R`3î − 2ĵ + 2k̂.` } }
    ] },

    { h: R`Types of vectors`, t: [0], blocks: [
      { points: [R`<b>Zero (null) vector</b> \(\vec 0\): magnitude 0, no definite direction.`, R`<b>Unit vector</b>: magnitude 1; the unit vector along \(\vec a\) is \(\hat a = \vec a/|\vec a|\).`, R`<b>Coinitial</b> vectors share the same initial point.`, R`<b>Collinear (parallel)</b> vectors lie along the same or parallel lines (\(\vec b = \lambda\vec a\)), whatever their magnitudes or senses.`, R`<b>Equal</b> vectors have the same magnitude and direction (they may start at different points: vectors are "free").`, R`The <b>negative</b> of \(\vec a\) has the same magnitude and opposite direction.`] },
      { ex: { q: R`Find the unit vector in the direction of \(\vec a = 2\hat i - \hat j + 2\hat k\).`,
        steps: [R`|a| = √(4 + 1 + 4) = 3.`], ans: R`\(\frac13(2\hat i - \hat j + 2\hat k)\)` } },
      { ex: { q: R`Find a vector of magnitude 9 in the direction of \(2\hat i - \hat j + 2\hat k\).`,
        steps: [R`The unit vector is \(\frac13(2\hat i - \hat j + 2\hat k)\); multiply by 9.`], ans: R`\(6\hat i - 3\hat j + 6\hat k\)` } },
      { mistake: R`Treating "equal vectors" as vectors that start at the same point. Equal vectors only need the same magnitude and direction; the opposite sides AB and DC of a parallelogram are equal vectors even though they are in different places.` },
      { check: { q: R`Are 2î − 4ĵ and −î + 2ĵ collinear?`, ans: R`Yes: the first is −2 times the second.` } }
    ] },

    { h: R`Addition of vectors: triangle and parallelogram laws`, t: [1], blocks: [
      R`<b>Triangle law:</b> if \(\vec b\) is placed with its tail at the head of \(\vec a\), then \(\vec a + \vec b\) runs from the tail of \(\vec a\) to the head of \(\vec b\). <b>Parallelogram law:</b> if \(\vec a\) and \(\vec b\) are coinitial sides of a parallelogram, \(\vec a + \vec b\) is the diagonal from the common point.`,
      { fig: figLaws, cap: R`The two laws of vector addition give the same result.` },
      R`<b>Subtraction</b> is addition of the negative: \(\vec a - \vec b = \vec a + (-\vec b)\). In the parallelogram of \(\vec a\) and \(\vec b\), one diagonal is \(\vec a + \vec b\) and the other is \(\vec a - \vec b\) (from the head of \(\vec b\) to the head of \(\vec a\)). Many geometry proofs come down to writing one side of a figure as a sum or difference of others.`,
      { points: [R`Commutative: \(\vec a + \vec b = \vec b + \vec a\); associative: \((\vec a + \vec b) + \vec c = \vec a + (\vec b + \vec c)\).`, R`Additive identity \(\vec 0\); additive inverse \(-\vec a\).`, R`In a triangle ABC: \(\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \vec 0\).`, R`Triangle inequality: \(|\vec a + \vec b| \le |\vec a| + |\vec b|\).`] },
      { ex: { q: R`If |a| = 3, |b| = 4 and the angle between them is 60°, find |a + b|.`,
        steps: [R`By the parallelogram law (or the cosine rule): \(|\vec a + \vec b|^2 = 9 + 16 + 2\cdot3\cdot4\cos60° = 37\).`], ans: R`√37 ≈ 6.08` } },
      { ex: { q: R`Prove that the line joining the midpoints of two sides of a triangle is parallel to the third side and half as long.`,
        steps: [R`Let A be the origin, with \(\overrightarrow{AB} = \vec b\) and \(\overrightarrow{AC} = \vec c\). The midpoints of AB and AC have position vectors \(\frac12\vec b\) and \(\frac12\vec c\).`, R`The vector joining them is \(\frac12\vec c - \frac12\vec b = \frac12(\vec c - \vec b) = \frac12\overrightarrow{BC}\).`], ans: R`It is ½ BC: parallel to BC and half its length` } },
      { check: { q: R`In a parallelogram ABCD, express \(\overrightarrow{AC}\) in terms of \(\overrightarrow{AB}\) and \(\overrightarrow{AD}\).`, ans: R`\(\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}\).` } }
    ] },

    { h: R`Multiplication of a vector by a scalar`, t: [1], blocks: [
      R`For a scalar λ, \(\lambda\vec a\) has magnitude \(|\lambda||\vec a|\), the same direction as \(\vec a\) if λ > 0 and the opposite if λ < 0. Distributive laws hold: \(\lambda(\vec a + \vec b) = \lambda\vec a + \lambda\vec b\), \((\lambda + \mu)\vec a = \lambda\vec a + \mu\vec a\). Two non-zero vectors are collinear ⟺ one is a scalar multiple of the other.`,
      { ex: { q: R`Show that A(1, 2, 3), B(2, 3, 4) and C(4, 5, 6) are collinear.`,
        steps: [R`\(\overrightarrow{AB} = \hat i + \hat j + \hat k\) and \(\overrightarrow{AC} = 3\hat i + 3\hat j + 3\hat k = 3\overrightarrow{AB}\).`, R`The two vectors are parallel and share the point A.`], ans: R`Collinear (C is three times as far from A as B)` } },
      R`If \(\vec a\) and \(\vec b\) are not collinear, every vector in their plane can be written in exactly one way as \(x\vec a + y\vec b\). Such vectors are called <b>linearly independent</b>. In space, three non-coplanar vectors play the same role, which is why \(\hat i, \hat j, \hat k\) can describe every vector.`,
      { check: { q: R`What is the magnitude of −3â, where â is a unit vector?`, ans: R`3.` } }
    ] },

    { h: R`Section formula in vector form`, t: [1], blocks: [
      R`The point R dividing PQ (position vectors \(\vec a, \vec b\)) internally in the ratio m : n has position vector \[\vec r = \frac{m\vec b + n\vec a}{m + n},\] and externally \(\dfrac{m\vec b - n\vec a}{m - n}\). The midpoint is \(\frac12(\vec a + \vec b)\) and the centroid of a triangle \(\frac13(\vec a + \vec b + \vec c)\).`,
      { fig: figSection, cap: R`R divides AB in the ratio m : n, so \(\vec r\) is a "weighted average" of \(\vec a\) and \(\vec b\); the point closer to B gets more weight on \(\vec b\).` },
      { ex: { q: R` and \(\vec b = 4\hat i - \hat j\) in the ratio 2 : 1 internally.`,
        steps: [R`\(\dfrac{2(4\hat i - \hat j) + (\hat i + 2\hat j)}{3} = \dfrac{9\hat i}{3}\).`], ans: R`\(3\hat i\)` } },
      { ex: { q: R`P and Q have position vectors \(2\vec a + \vec b\) and \(\vec a - 3\vec b\). Find the point R dividing PQ externally in the ratio 1 : 2, and show that P is the midpoint of RQ.`,
        steps: [R`\(\vec r = \dfrac{1(\vec a - 3\vec b) - 2(2\vec a + \vec b)}{1 - 2} = \dfrac{-3\vec a - 5\vec b}{-1} = 3\vec a + 5\vec b\).`, R`Midpoint of RQ: \(\frac12(3\vec a + 5\vec b + \vec a - 3\vec b) = 2\vec a + \vec b\), which is P.`], ans: R`\(\vec r = 3\vec a + 5\vec b\)` } },
      { check: { q: R`Write the position vector of the midpoint of \(\vec a\) and \(\vec b\).`, ans: R`½(a + b).` } }
    ] },

    { h: R`Components; unit vectors i, j, k`, t: [2], blocks: [
      R`Along the axes we take unit vectors \(\hat i, \hat j, \hat k\). Every vector can be written uniquely as \(\vec a = a_1\hat i + a_2\hat j + a_3\hat k\); \(a_1, a_2, a_3\) are its scalar <b>components</b>, and \(|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}\). Vectors are added and scaled component by component.`,
      { fig: figAxes, cap: R`The position vector of P(x, y, z) is xî + yĵ + zk̂.` },
      { ex: { q: R`A vector of length 10 makes an angle of 30° with the positive x-axis in the xy-plane. Write it in component form.`,
        steps: [R`Components: \(10\cos30° = 5\sqrt3\) and \(10\sin30° = 5\).`], ans: R`\(5\sqrt3\,\hat i + 5\hat j\)` } },
      { check: { q: R`If a = 2î + ĵ − k̂ and b = î − 3ĵ + 2k̂, find a + 2b.`, ans: R`4î − 5ĵ + 3k̂.` } }
    ] },

    { h: R`Direction cosines and direction ratios`, t: [2], blocks: [
      R`If \(\vec r\) makes angles α, β, γ with the x-, y- and z-axes, its <b>direction cosines</b> are l = cos α, m = cos β, n = cos γ, and \(\hat r = l\hat i + m\hat j + n\hat k\). So \[l^2 + m^2 + n^2 = 1.\] Any numbers proportional to l, m, n are <b>direction ratios</b>; for \(\vec a = a_1\hat i + a_2\hat j + a_3\hat k\) they are \(a_1, a_2, a_3\), and \(l = a_1/|\vec a|\), etc.`,
      R`Direction ratios are not unique (2, −1, 2 and 4, −2, 4 describe the same direction), but direction cosines are, apart from sign. To turn direction ratios a, b, c into direction cosines, divide each by \(\sqrt{a^2 + b^2 + c^2}\).`,
      { ex: { q: R`Find the direction cosines of 2î − ĵ + 2k̂.`,
        steps: [R`|a| = 3.`], ans: R`2/3, −1/3, 2/3` } },
      { ex: { q: R`Find the direction cosines of the line joining (1, 2, −3) and (−1, −2, 1).`,
        steps: [R`Direction ratios: −2, −4, 4; their root-sum-square is 6.`], ans: R`−1/3, −2/3, 2/3 (or their negatives, for the opposite direction)` } },
      { ex: { q: R`A vector makes equal acute angles with the three axes. Find its direction cosines.`,
        steps: [R`l = m = n and 3l² = 1.`], ans: R`\(\dfrac{1}{\sqrt3}, \dfrac{1}{\sqrt3}, \dfrac{1}{\sqrt3}\)` } },
      { check: { q: R`Can a vector make angles 45°, 60° and 120° with the axes?`, ans: R`Yes: ½ + ¼ + ¼ = 1.` } }
    ] },

    { h: R`Scalar (dot) product: definition and properties`, t: [3], blocks: [
      R`\[\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3,\] where θ is the angle between them (0 ≤ θ ≤ π). The result is a scalar.`,
      R`<b>What the dot product measures.</b> It tells you how much two vectors point the same way. If they point in the same direction, cos θ = 1 and the dot product is as large as it can be; if they are perpendicular it is zero; if they point in opposite directions it is negative. In physics, only the part of a force along the motion does work, which is exactly \(F\cos\theta\) times the distance.`,
      { points: [R`Commutative and distributive; \(\vec a\cdot\vec a = |\vec a|^2\).`, R`\(\vec a\cdot\vec b = 0\) ⟺ \(\vec a \perp \vec b\) (for non-zero vectors).`, R`\(\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1\); \(\hat i\cdot\hat j = \hat j\cdot\hat k = \hat k\cdot\hat i = 0\).`, R`\(|\vec a + \vec b|^2 = |\vec a|^2 + |\vec b|^2 + 2\vec a\cdot\vec b\); \((\vec a + \vec b)\cdot(\vec a - \vec b) = |\vec a|^2 - |\vec b|^2\).`, R`Work done by a force: \(W = \vec F\cdot\vec d\).`] },
      { derive: R`From |a||b| cos θ to the component formula`, steps: [R`Expand \((a_1\hat i + a_2\hat j + a_3\hat k)\cdot(b_1\hat i + b_2\hat j + b_3\hat k)\) using the distributive law: nine products.`, R`Since \(\hat i\cdot\hat i = 1\) and \(\hat i\cdot\hat j = 0\) (and so on), only the three "matching" products survive.`, R`So \(\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3\).`] },
            { ex: { q: R`For \(\vec a = \hat i + 2\hat j + 3\hat k\) and \(\vec b = 2\hat i - \hat j + \hat k\), find \(\vec a\cdot\vec b\).`,
        steps: [R`2 − 2 + 3.`], ans: R`3` } },
      { ex: { q: R`Unit vectors a and b satisfy |a + b| = √3. Find the angle between them.`,
        steps: [R`\(|\vec a + \vec b|^2 = 1 + 1 + 2\cos\theta = 3\), so \(\cos\theta = \frac12\).`], ans: R`60°` } },
      { ex: { q: R`A force \(\vec F = 2\hat i + \hat j - \hat k\) moves a particle from (1, 1, 1) to (3, 2, 4). Find the work done.`,
        steps: [R`Displacement \(\vec d = 2\hat i + \hat j + 3\hat k\).`, R`\(W = \vec F\cdot\vec d = 4 + 1 - 3\).`], ans: R`2 units` } },
      { check: { q: R`For which λ are 2î + λĵ + k̂ and î − 2ĵ + 3k̂ perpendicular?`, ans: R`2 − 2λ + 3 = 0 ⟹ λ = 5/2.` } }
    ] },

    { h: R`Angle between two vectors; projection`, t: [3], blocks: [
      R`\[\cos\theta = \frac{\vec a\cdot\vec b}{|\vec a||\vec b|}.\] The <b>scalar projection</b> of \(\vec a\) on \(\vec b\) is \(\dfrac{\vec a\cdot\vec b}{|\vec b|} = \vec a\cdot\hat b\), and the vector projection is \(\left(\dfrac{\vec a\cdot\vec b}{|\vec b|^2}\right)\vec b\).`,
      { fig: figProj, cap: R`The projection of a on b is the length of the "shadow" of a on the line of b.` },
      { ex: { q: R`Find the angle between a = î + 2ĵ + 3k̂ and b = 2î − ĵ + k̂, and the projection of a on b.`,
        steps: [R`|a| = √14, |b| = √6, a·b = 3: cos θ = 3/√84.`, R`Projection = 3/√6 = √6/2.`], ans: R`θ = cos⁻¹(3/(2√21)); projection √6/2` } },
      { ex: { q: R`Vectors a, b, c satisfy a + b + c = 0 with |a| = 3, |b| = 5, |c| = 7. Find the angle between a and b.`,
        steps: [R`\(\vec c = -(\vec a + \vec b)\), so \(49 = 9 + 25 + 2\vec a\cdot\vec b\), giving \(\vec a\cdot\vec b = 7.5\).`, R`\(\cos\theta = \dfrac{7.5}{3\times5} = \dfrac12\).`], ans: R`60°` } },
      { tip: R`When a sum of vectors is zero, move one to the other side and square (dot it with itself). Magnitudes turn into dot products, and angles drop out.` },
      { check: { q: R`Find the projection of 2î + 3ĵ on î.`, ans: R`2.` } }
    ] },

    { h: R`Vector (cross) product: definition and properties`, t: [3], blocks: [
      R`\[\vec a \times \vec b = |\vec a||\vec b|\sin\theta\,\hat n,\] where \(\hat n\) is the unit vector perpendicular to both, given by the <b>right-hand rule</b>. In components: \[\vec a \times \vec b = \begin{vmatrix} \hat i & \hat j & \hat k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}.\]`,
      R`<b>What the cross product measures.</b> Its size, \(|\vec a||\vec b|\sin\theta\), is largest when the vectors are perpendicular and zero when they are parallel: it measures how much they "turn" away from each other. Its direction is found by the right-hand rule: point your fingers along \(\vec a\), curl them towards \(\vec b\), and your thumb gives \(\vec a \times \vec b\). This is why it describes rotation, such as torque and angular momentum.`,
      { fig: figCross, cap: R`a × b is perpendicular to the plane of a and b; its length is the area of the parallelogram they span.` },
      { points: [R`<b>Anticommutative:</b> \(\vec b \times \vec a = -\vec a \times \vec b\); distributive over addition.`, R`\(\vec a \times \vec b = \vec 0\) ⟺ the vectors are parallel; \(\vec a \times \vec a = \vec 0\).`, R`\(\hat i \times \hat j = \hat k,\ \hat j \times \hat k = \hat i,\ \hat k \times \hat i = \hat j\); \(\hat i \times \hat i = \vec 0\).`, R`Lagrange identity: \(|\vec a \times \vec b|^2 + (\vec a\cdot\vec b)^2 = |\vec a|^2|\vec b|^2\).`, R`Torque \(\vec\tau = \vec r \times \vec F\); the unit vector perpendicular to a and b is \(\pm\dfrac{\vec a \times \vec b}{|\vec a \times \vec b|}\).`] },
      { ex: { q: R`Find \(\vec a \times \vec b\) for a = î + 2ĵ + 3k̂, b = 2î − ĵ + k̂.`,
        steps: [R`î(2·1 − 3·(−1)) − ĵ(1·1 − 3·2) + k̂(1·(−1) − 2·2).`], ans: R`5î + 5ĵ − 5k̂` } },
      { ex: { q: R`Find a unit vector perpendicular to both \(\hat i + \hat j + \hat k\) and \(\hat i + 2\hat j + 3\hat k\).`,
        steps: [R`\(\vec a \times \vec b = \hat i(3 - 2) - \hat j(3 - 1) + \hat k(2 - 1) = \hat i - 2\hat j + \hat k\), of magnitude √6.`], ans: R`\(\pm\dfrac{1}{\sqrt6}(\hat i - 2\hat j + \hat k)\)` } },
      { ex: { q: R`If |a| = 2, |b| = 5 and |a × b| = 8, find a · b.`,
        steps: [R`Lagrange identity: \((\vec a\cdot\vec b)^2 = |\vec a|^2|\vec b|^2 - |\vec a \times \vec b|^2 = 100 - 64\).`], ans: R`±6` } },
      { mistake: R`Writing \(\vec a \times \vec b = \vec b \times \vec a\). Swapping the order reverses the direction; also, the middle (ĵ) term of the determinant carries a minus sign.` },
      { check: { q: R`What is ĵ × î?`, ans: R`−k̂.` } }
    ] },

    { h: R`Area of a triangle and a parallelogram`, t: [3], blocks: [
      R`The parallelogram with adjacent sides \(\vec a, \vec b\) has area \(|\vec a \times \vec b|\); with diagonals \(\vec d_1, \vec d_2\) it has area \(\frac12|\vec d_1 \times \vec d_2|\). The triangle with sides \(\vec a, \vec b\) has area \(\frac12|\vec a \times \vec b|\); with vertices A, B, C: \(\frac12|\overrightarrow{AB} \times \overrightarrow{AC}|\).`,
      { ex: { q: R`Find the area of the parallelogram and of the triangle with adjacent sides a = î + 2ĵ + 3k̂ and b = 2î − ĵ + k̂.`,
        steps: [R`|a × b| = |5î + 5ĵ − 5k̂| = 5√3.`], ans: R`5√3; 5√3/2` } },
      { ex: { q: R`Find the area of the triangle with vertices A(1, 1, 1), B(1, 2, 3) and C(2, 3, 1).`,
        steps: [R`\(\overrightarrow{AB} = \hat j + 2\hat k\), \(\overrightarrow{AC} = \hat i + 2\hat j\).`, R`\(\overrightarrow{AB}\times\overrightarrow{AC} = -4\hat i + 2\hat j - \hat k\), of magnitude √21.`], ans: R`\(\dfrac{\sqrt{21}}{2}\) square units` } },
      { ex: { q: R`The diagonals of a parallelogram are \(3\hat i + \hat j - 2\hat k\) and \(\hat i - 3\hat j + 4\hat k\). Find its area.`,
        steps: [R`\(\vec d_1 \times \vec d_2 = -2\hat i - 14\hat j - 10\hat k\), of magnitude \(\sqrt{300} = 10\sqrt3\).`, R`Area = ½|d₁ × d₂|.`], ans: R`\(5\sqrt3\) square units` } },
      { tip: R`For the area of a triangle given its three vertices, always form two side vectors from the <b>same</b> vertex (such as AB and AC). Using AB and CA instead still works, but mixing directions is where sign slips creep in.` },
      { check: { q: R`Find the area of the triangle with vertices (0,0,0), (1,0,0), (0,1,0).`, ans: R`½|î × ĵ| = ½.` } }
    ] },

    { h: R`Scalar triple product and its geometrical meaning`, t: [4], blocks: [
      R`\[[\vec a\ \vec b\ \vec c] = \vec a\cdot(\vec b \times \vec c) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}.\] Its absolute value is the <b>volume of the parallelepiped</b> with coterminous edges a, b, c (a tetrahedron has one sixth of it).`,
      { fig: figBox, cap: R`The base area is |b × c| and the height is the projection of a on b × c.` },
      R`<b>Why it is the volume.</b> The base of the box is the parallelogram of \(\vec b\) and \(\vec c\), with area \(|\vec b \times \vec c|\). The height is the part of \(\vec a\) perpendicular to the base, which is the projection of \(\vec a\) on \(\vec b \times \vec c\), namely \(\dfrac{\vec a\cdot(\vec b \times \vec c)}{|\vec b \times \vec c|}\). Base × height is \(\vec a\cdot(\vec b \times \vec c)\). A negative value only means that a, b, c form a left-handed set.`,
      { points: [R`Cyclic order does not change it: [a b c] = [b c a] = [c a b]; swapping two vectors changes the sign.`, R`The dot and cross can be interchanged: a·(b × c) = (a × b)·c.`, R`If two of the vectors are equal or parallel, the product is 0.`] },
      { ex: { q: R`Find the volume of the parallelepiped with edges a = î + 2ĵ + 3k̂, b = 2î − ĵ + k̂, c = î + ĵ + k̂.`,
        steps: [R`(a × b)·c = (5, 5, −5)·(1, 1, 1) = 5.`], ans: R`5 cubic units` } },
      { ex: { q: R`Find the volume of the tetrahedron with vertices O(0, 0, 0), A(1, 0, 0), B(0, 1, 0) and C(0, 0, 1).`,
        steps: [R`The edges from O are \(\hat i, \hat j, \hat k\), and \([\hat i\ \hat j\ \hat k] = 1\).`, R`A tetrahedron is one-sixth of the parallelepiped.`], ans: R`1/6 cubic unit` } },
      { ex: { q: R`Show that \([\vec a + \vec b\ \ \vec b + \vec c\ \ \vec c + \vec a] = 2[\vec a\ \vec b\ \vec c]\).`,
        steps: [R`Expand by linearity: every term with a repeated vector is 0, leaving \([\vec a\ \vec b\ \vec c] + [\vec b\ \vec c\ \vec a]\).`, R`The cyclic property makes these equal.`], ans: R`Proved` } },
      { check: { q: R`Find [î ĵ k̂].`, ans: R`1.` } }
    ] },

    { h: R`Condition for coplanarity`, t: [4], blocks: [
      R`Three vectors are <b>coplanar</b> ⟺ \([\vec a\ \vec b\ \vec c] = 0\) (the parallelepiped is flat). Four points A, B, C, D are coplanar ⟺ \([\overrightarrow{AB}\ \overrightarrow{AC}\ \overrightarrow{AD}] = 0\).`,
      { ex: { q: R`Find λ if î − ĵ + k̂, 2î + ĵ − k̂ and λî − ĵ + λk̂ are coplanar.`,
        steps: [R`\(\begin{vmatrix} 1 & -1 & 1 \\ 2 & 1 & -1 \\ \lambda & -1 & \lambda \end{vmatrix} = (\lambda - 1) + (2\lambda + \lambda) + (-2 - \lambda) = 3\lambda - 3\).`], ans: R`λ = 1` } },
      { ex: { q: R`Show that A(0, −1, −1), B(4, 5, 1), C(3, 9, 4) and D(−4, 4, 4) are coplanar.`,
        steps: [R`\(\overrightarrow{AB} = (4, 6, 2)\), \(\overrightarrow{AC} = (3, 10, 5)\), \(\overrightarrow{AD} = (-4, 5, 5)\).`, R`\(\begin{vmatrix} 4 & 6 & 2 \\ 3 & 10 & 5 \\ -4 & 5 & 5 \end{vmatrix} = 4(25) - 6(35) + 2(55) = 100 - 210 + 110 = 0\).`], ans: R`Coplanar` } },
      { check: { q: R`Are î, ĵ and î + ĵ coplanar?`, ans: R`Yes: the third is the sum of the first two (determinant 0).` } }
    ] },

    { h: R`Vector triple product`, t: [4], blocks: [
      R`\[\vec a \times (\vec b \times \vec c) = (\vec a\cdot\vec c)\,\vec b - (\vec a\cdot\vec b)\,\vec c\] ("BAC − CAB"). The result lies in the plane of b and c. The cross product is <b>not associative</b>: \((\vec a \times \vec b) \times \vec c = (\vec a\cdot\vec c)\vec b - (\vec b\cdot\vec c)\vec a\), which is generally different.`,
      { ex: { q: R`Evaluate \(\hat i \times (\hat j \times \hat k)\) and \((\hat i \times \hat j) \times \hat j\).`,
        steps: [R`ĵ × k̂ = î, so î × î = 0.`, R`î × ĵ = k̂, and k̂ × ĵ = −î.`], ans: R`\(\vec 0\); \(-\hat i\)` } },
      R`<b>Why it lies in the plane of b and c.</b> \(\vec b \times \vec c\) is perpendicular to that plane, and crossing it again with \(\vec a\) gives a vector perpendicular to \(\vec b \times \vec c\), so it must lie back in the plane of b and c. That is why the answer is a combination of \(\vec b\) and \(\vec c\) only.`,
      { ex: { q: R`Prove that \(\hat i \times (\vec a \times \hat i) + \hat j \times (\vec a \times \hat j) + \hat k \times (\vec a \times \hat k) = 2\vec a\).`,
        steps: [R`\(\hat i \times (\vec a \times \hat i) = (\hat i\cdot\hat i)\vec a - (\hat i\cdot\vec a)\hat i = \vec a - a_1\hat i\), and similarly for ĵ and k̂.`, R`Adding: \(3\vec a - (a_1\hat i + a_2\hat j + a_3\hat k) = 3\vec a - \vec a\).`], ans: R`\(2\vec a\)` } },
      { adv: R`Two more identities worth knowing: \((\vec a \times \vec b)\cdot(\vec c \times \vec d) = (\vec a\cdot\vec c)(\vec b\cdot\vec d) - (\vec a\cdot\vec d)(\vec b\cdot\vec c)\), and \([\vec a \times \vec b\ \ \vec b \times \vec c\ \ \vec c \times \vec a] = [\vec a\ \vec b\ \vec c]^2\). With \(\vec c = \vec a\) and \(\vec d = \vec b\), the first becomes the Lagrange identity.` },
      { check: { q: R`Write a × (b × c) in terms of dot products.`, ans: R`(a·c)b − (a·b)c.` } }
    ] }
  ],
  summary: [
    R`Vectors: magnitude + direction; AB = b − a; unit vector â = a/|a|; collinear ⟺ b = λa.`,
    R`Triangle/parallelogram laws; section formula (mb + na)/(m + n); centroid (a + b + c)/3.`,
    R`a = a₁î + a₂ĵ + a₃k̂, |a| = √(a₁² + a₂² + a₃²); direction cosines l² + m² + n² = 1.`,
    R`a·b = |a||b|cos θ = Σaᵢbᵢ; ⊥ ⟺ a·b = 0; projection a·b/|b|.`,
    R`a × b = |a||b| sin θ n̂ (determinant); parallel ⟺ a × b = 0; area of parallelogram |a × b|, triangle ½|a × b|.`,
    R`[a b c] = a·(b × c) = determinant = volume; coplanar ⟺ [a b c] = 0; a × (b × c) = (a·c)b − (a·b)c.`,
    R`Linearly independent: non-collinear a, b span their plane; i, j, k span space. a + b + c = 0: square to turn magnitudes into dot products.`
  ],
  refs: [
    { t: R`OpenStax Calculus Vol. 3, §2.1 Vectors in the Plane`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane' },
    { t: R`OpenStax Calculus Vol. 3, §2.3 The Dot Product`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product' },
    { t: R`OpenStax Calculus Vol. 3, §2.4 The Cross Product`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product' },
    { t: R`Wikipedia: Triple product`, url: 'https://en.wikipedia.org/wiki/Triple_product' }
  ]
});
})();
