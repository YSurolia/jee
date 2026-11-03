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
      { check: { q: R`Find \(\overrightarrow{AB}\) if A = (1, 2, 3) and B = (4, 0, 5).`, ans: R`3î − 2ĵ + 2k̂.` } }
    ] },

    { h: R`Types of vectors`, t: [0], blocks: [
      { points: [R`<b>Zero (null) vector</b> \(\vec 0\): magnitude 0, no definite direction.`, R`<b>Unit vector</b>: magnitude 1; the unit vector along \(\vec a\) is \(\hat a = \vec a/|\vec a|\).`, R`<b>Coinitial</b> vectors share the same initial point.`, R`<b>Collinear (parallel)</b> vectors lie along the same or parallel lines (\(\vec b = \lambda\vec a\)), whatever their magnitudes or senses.`, R`<b>Equal</b> vectors have the same magnitude and direction (they may start at different points: vectors are "free").`, R`The <b>negative</b> of \(\vec a\) has the same magnitude and opposite direction.`] },
      { ex: { q: R`Find the unit vector in the direction of \(\vec a = 2\hat i - \hat j + 2\hat k\).`,
        steps: [R`|a| = √(4 + 1 + 4) = 3.`], ans: R`\(\frac13(2\hat i - \hat j + 2\hat k)\)` } },
      { check: { q: R`Are 2î − 4ĵ and −î + 2ĵ collinear?`, ans: R`Yes: the first is −2 times the second.` } }
    ] },

    { h: R`Addition of vectors: triangle and parallelogram laws`, t: [1], blocks: [
      R`<b>Triangle law:</b> if \(\vec b\) is placed with its tail at the head of \(\vec a\), then \(\vec a + \vec b\) runs from the tail of \(\vec a\) to the head of \(\vec b\). <b>Parallelogram law:</b> if \(\vec a\) and \(\vec b\) are coinitial sides of a parallelogram, \(\vec a + \vec b\) is the diagonal from the common point.`,
      { fig: figLaws, cap: R`The two laws of vector addition give the same result.` },
      { points: [R`Commutative: \(\vec a + \vec b = \vec b + \vec a\); associative: \((\vec a + \vec b) + \vec c = \vec a + (\vec b + \vec c)\).`, R`Additive identity \(\vec 0\); additive inverse \(-\vec a\).`, R`In a triangle ABC: \(\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CA} = \vec 0\).`, R`Triangle inequality: \(|\vec a + \vec b| \le |\vec a| + |\vec b|\).`] },
      { check: { q: R`In a parallelogram ABCD, express \(\overrightarrow{AC}\) in terms of \(\overrightarrow{AB}\) and \(\overrightarrow{AD}\).`, ans: R`\(\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{AD}\).` } }
    ] },

    { h: R`Multiplication of a vector by a scalar`, t: [1], blocks: [
      R`For a scalar λ, \(\lambda\vec a\) has magnitude \(|\lambda||\vec a|\), the same direction as \(\vec a\) if λ > 0 and the opposite if λ < 0. Distributive laws hold: \(\lambda(\vec a + \vec b) = \lambda\vec a + \lambda\vec b\), \((\lambda + \mu)\vec a = \lambda\vec a + \mu\vec a\). Two non-zero vectors are collinear ⟺ one is a scalar multiple of the other.`,
      { check: { q: R`What is the magnitude of −3â, where â is a unit vector?`, ans: R`3.` } }
    ] },

    { h: R`Section formula in vector form`, t: [1], blocks: [
      R`The point R dividing PQ (position vectors \(\vec a, \vec b\)) internally in the ratio m : n has position vector \[\vec r = \frac{m\vec b + n\vec a}{m + n},\] and externally \(\dfrac{m\vec b - n\vec a}{m - n}\). The midpoint is \(\frac12(\vec a + \vec b)\) and the centroid of a triangle \(\frac13(\vec a + \vec b + \vec c)\).`,
      { ex: { q: R`Find the position vector of the point dividing the join of \(\vec a = \hat i + 2\hat j\) and \(\vec b = 4\hat i - \hat j\) in the ratio 2 : 1 internally.`,
        steps: [R`\(\dfrac{2(4\hat i - \hat j) + (\hat i + 2\hat j)}{3} = \dfrac{9\hat i}{3}\).`], ans: R`\(3\hat i\)` } },
      { check: { q: R`Write the position vector of the midpoint of \(\vec a\) and \(\vec b\).`, ans: R`½(a + b).` } }
    ] },

    { h: R`Components; unit vectors i, j, k`, t: [2], blocks: [
      R`Along the axes we take unit vectors \(\hat i, \hat j, \hat k\). Every vector can be written uniquely as \(\vec a = a_1\hat i + a_2\hat j + a_3\hat k\); \(a_1, a_2, a_3\) are its scalar <b>components</b>, and \(|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}\). Vectors are added and scaled component by component.`,
      { fig: figAxes, cap: R`The position vector of P(x, y, z) is xî + yĵ + zk̂.` },
      { check: { q: R`If a = 2î + ĵ − k̂ and b = î − 3ĵ + 2k̂, find a + 2b.`, ans: R`4î − 5ĵ + 3k̂.` } }
    ] },

    { h: R`Direction cosines and direction ratios`, t: [2], blocks: [
      R`If \(\vec r\) makes angles α, β, γ with the x-, y- and z-axes, its <b>direction cosines</b> are l = cos α, m = cos β, n = cos γ, and \(\hat r = l\hat i + m\hat j + n\hat k\). So \[l^2 + m^2 + n^2 = 1.\] Any numbers proportional to l, m, n are <b>direction ratios</b>; for \(\vec a = a_1\hat i + a_2\hat j + a_3\hat k\) they are \(a_1, a_2, a_3\), and \(l = a_1/|\vec a|\), etc.`,
      { ex: { q: R`Find the direction cosines of 2î − ĵ + 2k̂.`,
        steps: [R`|a| = 3.`], ans: R`2/3, −1/3, 2/3` } },
      { check: { q: R`Can a vector make angles 45°, 60° and 120° with the axes?`, ans: R`Yes: ½ + ¼ + ¼ = 1.` } }
    ] },

    { h: R`Scalar (dot) product: definition and properties`, t: [3], blocks: [
      R`\[\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3,\] where θ is the angle between them (0 ≤ θ ≤ π). The result is a scalar.`,
      { points: [R`Commutative and distributive; \(\vec a\cdot\vec a = |\vec a|^2\).`, R`\(\vec a\cdot\vec b = 0\) ⟺ \(\vec a \perp \vec b\) (for non-zero vectors).`, R`\(\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1\); \(\hat i\cdot\hat j = \hat j\cdot\hat k = \hat k\cdot\hat i = 0\).`, R`\(|\vec a + \vec b|^2 = |\vec a|^2 + |\vec b|^2 + 2\vec a\cdot\vec b\); \((\vec a + \vec b)\cdot(\vec a - \vec b) = |\vec a|^2 - |\vec b|^2\).`, R`Work done by a force: \(W = \vec F\cdot\vec d\).`] },
      { ex: { q: R`For \(\vec a = \hat i + 2\hat j + 3\hat k\) and \(\vec b = 2\hat i - \hat j + \hat k\), find \(\vec a\cdot\vec b\).`,
        steps: [R`2 − 2 + 3.`], ans: R`3` } },
      { check: { q: R`For which λ are 2î + λĵ + k̂ and î − 2ĵ + 3k̂ perpendicular?`, ans: R`2 − 2λ + 3 = 0 ⟹ λ = 5/2.` } }
    ] },

    { h: R`Angle between two vectors; projection`, t: [3], blocks: [
      R`\[\cos\theta = \frac{\vec a\cdot\vec b}{|\vec a||\vec b|}.\] The <b>scalar projection</b> of \(\vec a\) on \(\vec b\) is \(\dfrac{\vec a\cdot\vec b}{|\vec b|} = \vec a\cdot\hat b\), and the vector projection is \(\left(\dfrac{\vec a\cdot\vec b}{|\vec b|^2}\right)\vec b\).`,
      { fig: figProj, cap: R`The projection of a on b is the length of the "shadow" of a on the line of b.` },
      { ex: { q: R`Find the angle between a = î + 2ĵ + 3k̂ and b = 2î − ĵ + k̂, and the projection of a on b.`,
        steps: [R`|a| = √14, |b| = √6, a·b = 3: cos θ = 3/√84.`, R`Projection = 3/√6 = √6/2.`], ans: R`θ = cos⁻¹(3/(2√21)); projection √6/2` } },
      { check: { q: R`Find the projection of 2î + 3ĵ on î.`, ans: R`2.` } }
    ] },

    { h: R`Vector (cross) product: definition and properties`, t: [3], blocks: [
      R`\[\vec a \times \vec b = |\vec a||\vec b|\sin\theta\,\hat n,\] where \(\hat n\) is the unit vector perpendicular to both, given by the <b>right-hand rule</b>. In components: \[\vec a \times \vec b = \begin{vmatrix} \hat i & \hat j & \hat k \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}.\]`,
      { fig: figCross, cap: R`a × b is perpendicular to the plane of a and b; its length is the area of the parallelogram they span.` },
      { points: [R`<b>Anticommutative:</b> \(\vec b \times \vec a = -\vec a \times \vec b\); distributive over addition.`, R`\(\vec a \times \vec b = \vec 0\) ⟺ the vectors are parallel; \(\vec a \times \vec a = \vec 0\).`, R`\(\hat i \times \hat j = \hat k,\ \hat j \times \hat k = \hat i,\ \hat k \times \hat i = \hat j\); \(\hat i \times \hat i = \vec 0\).`, R`Lagrange identity: \(|\vec a \times \vec b|^2 + (\vec a\cdot\vec b)^2 = |\vec a|^2|\vec b|^2\).`, R`Torque \(\vec\tau = \vec r \times \vec F\); the unit vector perpendicular to a and b is \(\pm\dfrac{\vec a \times \vec b}{|\vec a \times \vec b|}\).`] },
      { ex: { q: R`Find \(\vec a \times \vec b\) for a = î + 2ĵ + 3k̂, b = 2î − ĵ + k̂.`,
        steps: [R`î(2·1 − 3·(−1)) − ĵ(1·1 − 3·2) + k̂(1·(−1) − 2·2).`], ans: R`5î + 5ĵ − 5k̂` } },
      { check: { q: R`What is ĵ × î?`, ans: R`−k̂.` } }
    ] },

    { h: R`Area of a triangle and a parallelogram`, t: [3], blocks: [
      R`The parallelogram with adjacent sides \(\vec a, \vec b\) has area \(|\vec a \times \vec b|\); with diagonals \(\vec d_1, \vec d_2\) it has area \(\frac12|\vec d_1 \times \vec d_2|\). The triangle with sides \(\vec a, \vec b\) has area \(\frac12|\vec a \times \vec b|\); with vertices A, B, C: \(\frac12|\overrightarrow{AB} \times \overrightarrow{AC}|\).`,
      { ex: { q: R`Find the area of the parallelogram and of the triangle with adjacent sides a = î + 2ĵ + 3k̂ and b = 2î − ĵ + k̂.`,
        steps: [R`|a × b| = |5î + 5ĵ − 5k̂| = 5√3.`], ans: R`5√3; 5√3/2` } },
      { check: { q: R`Find the area of the triangle with vertices (0,0,0), (1,0,0), (0,1,0).`, ans: R`½|î × ĵ| = ½.` } }
    ] },

    { h: R`Scalar triple product and its geometrical meaning`, t: [4], blocks: [
      R`\[[\vec a\ \vec b\ \vec c] = \vec a\cdot(\vec b \times \vec c) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}.\] Its absolute value is the <b>volume of the parallelepiped</b> with coterminous edges a, b, c (a tetrahedron has one sixth of it).`,
      { fig: figBox, cap: R`The base area is |b × c| and the height is the projection of a on b × c.` },
      { points: [R`Cyclic order does not change it: [a b c] = [b c a] = [c a b]; swapping two vectors changes the sign.`, R`The dot and cross can be interchanged: a·(b × c) = (a × b)·c.`, R`If two of the vectors are equal or parallel, the product is 0.`] },
      { ex: { q: R`Find the volume of the parallelepiped with edges a = î + 2ĵ + 3k̂, b = 2î − ĵ + k̂, c = î + ĵ + k̂.`,
        steps: [R`(a × b)·c = (5, 5, −5)·(1, 1, 1) = 5.`], ans: R`5 cubic units` } },
      { check: { q: R`Find [î ĵ k̂].`, ans: R`1.` } }
    ] },

    { h: R`Condition for coplanarity`, t: [4], blocks: [
      R`Three vectors are <b>coplanar</b> ⟺ \([\vec a\ \vec b\ \vec c] = 0\) (the parallelepiped is flat). Four points A, B, C, D are coplanar ⟺ \([\overrightarrow{AB}\ \overrightarrow{AC}\ \overrightarrow{AD}] = 0\).`,
      { ex: { q: R`Find λ if î − ĵ + k̂, 2î + ĵ − k̂ and λî − ĵ + λk̂ are coplanar.`,
        steps: [R`\(\begin{vmatrix} 1 & -1 & 1 \\ 2 & 1 & -1 \\ \lambda & -1 & \lambda \end{vmatrix} = (\lambda - 1) + (2\lambda + \lambda) + (-2 - \lambda) = 3\lambda - 3\).`], ans: R`λ = 1` } },
      { check: { q: R`Are î, ĵ and î + ĵ coplanar?`, ans: R`Yes: the third is the sum of the first two (determinant 0).` } }
    ] },

    { h: R`Vector triple product`, t: [4], blocks: [
      R`\[\vec a \times (\vec b \times \vec c) = (\vec a\cdot\vec c)\,\vec b - (\vec a\cdot\vec b)\,\vec c\] ("BAC − CAB"). The result lies in the plane of b and c. The cross product is <b>not associative</b>: \((\vec a \times \vec b) \times \vec c = (\vec a\cdot\vec c)\vec b - (\vec b\cdot\vec c)\vec a\), which is generally different.`,
      { ex: { q: R`Evaluate \(\hat i \times (\hat j \times \hat k)\) and \((\hat i \times \hat j) \times \hat j\).`,
        steps: [R`ĵ × k̂ = î, so î × î = 0.`, R`î × ĵ = k̂, and k̂ × ĵ = −î.`], ans: R`\(\vec 0\); \(-\hat i\)` } },
      { check: { q: R`Write a × (b × c) in terms of dot products.`, ans: R`(a·c)b − (a·b)c.` } }
    ] }
  ],
  summary: [
    R`Vectors: magnitude + direction; AB = b − a; unit vector â = a/|a|; collinear ⟺ b = λa.`,
    R`Triangle/parallelogram laws; section formula (mb + na)/(m + n); centroid (a + b + c)/3.`,
    R`a = a₁î + a₂ĵ + a₃k̂, |a| = √(a₁² + a₂² + a₃²); direction cosines l² + m² + n² = 1.`,
    R`a·b = |a||b|cos θ = Σaᵢbᵢ; ⊥ ⟺ a·b = 0; projection a·b/|b|.`,
    R`a × b = |a||b| sin θ n̂ (determinant); parallel ⟺ a × b = 0; area of parallelogram |a × b|, triangle ½|a × b|.`,
    R`[a b c] = a·(b × c) = determinant = volume; coplanar ⟺ [a b c] = 0; a × (b × c) = (a·c)b − (a·b)c.`
  ],
  refs: [
    { t: R`OpenStax Calculus Vol. 3, §2.1 Vectors in the Plane`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-1-vectors-in-the-plane' },
    { t: R`OpenStax Calculus Vol. 3, §2.3 The Dot Product`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product' },
    { t: R`OpenStax Calculus Vol. 3, §2.4 The Cross Product`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product' },
    { t: R`Wikipedia: Triple product`, url: 'https://en.wikipedia.org/wiki/Triple_product' }
  ]
});
})();
