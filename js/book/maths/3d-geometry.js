// Book chapter: Three-Dimensional Geometry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 11, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function P3(x, y, z) { return [140 + 40 * y - 22 * x, 150 - 40 * z + 14 * x]; }

// ---------- figures ----------
var figOctants = D.svg(320, 230, (function () {
  var out = [], O = P3(0, 0, 0);
  [[3, 0, 0, 'X'], [-2.2, 0, 0, 'X′'], [0, 3.2, 0, 'Y'], [0, -2.6, 0, 'Y′'], [0, 0, 2.8, 'Z'], [0, 0, -1.8, 'Z′']].forEach(function (a) {
    var e = P3(a[0], a[1], a[2]); out.push(D.line(O[0], O[1], e[0], e[1], { color: 'm', w: 1.4, dash: a[3].length > 1 ? '4 3' : false }), lab(e[0] + (a[1] > 0 ? 10 : a[1] < 0 ? -10 : 0), e[1] + (a[2] > 0 ? -8 : a[2] < 0 ? 12 : 10), a[3], 'm', 11, { bold: true }));
  });
  var q = [P3(0, 0, 0), P3(0, 2, 0), P3(0, 2, 1.8), P3(0, 0, 1.8)];
  out.push(D.poly(q, { closed: true, color: 'b', fill: 'soft', w: 0.8 }), lab(P3(0, 1.2, 1.5)[0], P3(0, 1.2, 1.5)[1], 'YZ-plane', 'b', 9));
  var r = [P3(0, 0, 0), P3(2, 0, 0), P3(2, 2, 0), P3(0, 2, 0)];
  out.push(D.poly(r, { closed: true, color: 'g', fill: 'soft', w: 0.8 }), lab(P3(1.2, 1.2, 0)[0], P3(1.2, 1.2, 0)[1] + 6, 'XY-plane', 'g', 9));
  out.push(lab(250, 210, 'three planes → eight octants', 'm', 10));
  return out;
})(), 'Coordinate axes, planes and octants');

var figSkew = D.svg(340, 220, (function () {
  var out = [];
  out.push(D.poly([[30, 170], [230, 170], [310, 120], [110, 120]], { closed: true, color: 'm', fill: 'soft', w: 0.8 }));
  out.push(D.line(50, 160, 290, 128, { color: 'b', w: 2.4 }), lab(296, 124, 'L₁', 'b', 12, { bold: true, anchor: 'start' }));
  out.push(D.line(120, 20, 220, 100, { color: 'o', w: 2.4 }), lab(124, 16, 'L₂', 'o', 12, { bold: true, anchor: 'start' }));
  out.push(D.line(200, 84, 200, 140, { color: 'g', w: 2, dash: '5 4' }), D.dot(200, 84, { color: 'g' }), D.dot(200, 140, { color: 'g' }), lab(192, 104, 'shortest distance', 'g', 10, { anchor: 'end' }), lab(192, 118, '(perpendicular to both)', 'g', 9, { anchor: 'end' }));
  out.push(lab(170, 200, 'skew lines: not parallel and do not meet', 'm', 10));
  return out;
})(), 'Skew lines and their shortest distance');

var figPlane = D.svg(320, 210, (function () {
  var out = [];
  out.push(D.poly([[30, 160], [220, 160], [300, 100], [110, 100]], { closed: true, color: 'b', fill: 'soft', w: 1.4 }));
  out.push(D.arrow(165, 130, 165, 30, { color: 'r', w: 2.2 }), lab(172, 34, 'normal n = (a, b, c)', 'r', 10, { anchor: 'start' }));
  out.push(D.dot(165, 130, { color: 'k' }), lab(150, 146, 'A (on plane)', 'k', 9), D.dot(235, 120, { color: 'k' }), D.line(165, 130, 235, 120, { color: 'g', w: 1.6 }), lab(250, 116, 'P', 'k', 10));
  out.push(lab(160, 196, '(r − a) · n = 0  ⟺  ax + by + cz + d = 0', 'm', 10));
  return out;
})(), 'Plane through a point perpendicular to a normal');

// ---------- chapter text ----------
JEE.book('maths', '3d-geometry', {
  intro: [
    R`Three-dimensional geometry extends coordinate geometry into space: a point needs three coordinates, a line is described by a point and a direction, and a plane by a point and a normal. Vectors make these descriptions short and natural.`,
    R`This chapter covers coordinates in space, distance and section formulae, direction cosines and ratios, equations of lines, angles between lines, skew lines and shortest distance, and the equation of a plane with distances and angles.`
  ],
  sections: [
    { h: R`Coordinate axes, coordinate planes and octants`, t: [0], blocks: [
      R`Three mutually perpendicular lines through the origin O are the x-, y- and z-axes. They determine three <b>coordinate planes</b>: the XY-plane (z = 0), YZ-plane (x = 0) and ZX-plane (y = 0), which divide space into eight <b>octants</b>. A point P has coordinates (x, y, z): its signed distances from the YZ, ZX and XY planes.`,
      { fig: figOctants, cap: R`The coordinate axes and two of the coordinate planes.` },
      { points: [R`A point on the x-axis is (x, 0, 0); on the XY-plane, (x, y, 0).`, R`The octant with all coordinates positive is the first octant (X O Y Z).`] },
      { check: { q: R`In which octant is (−2, 3, −4)?`, ans: R`The octant X′OYZ′ (x < 0, y > 0, z < 0).` } }
    ] },

    { h: R`Distance formula in three dimensions`, t: [1], blocks: [
      R`\[PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}.\] The distance of P from the origin is \(\sqrt{x^2 + y^2 + z^2}\), and from the x-axis \(\sqrt{y^2 + z^2}\).`,
      { ex: { q: R`Find the distance between (1, 2, 3) and (4, 6, 15).`,
        steps: [R`\(\sqrt{9 + 16 + 144} = \sqrt{169}\).`], ans: R`13` } },
      { check: { q: R`Find the distance of (3, 4, 12) from the origin.`, ans: R`13.` } }
    ] },

    { h: R`Section formula; midpoint and centroid`, t: [2], blocks: [
      R`The point dividing the join of \((x_1, y_1, z_1)\) and \((x_2, y_2, z_2)\) internally in the ratio m : n is \[\left(\frac{mx_2 + nx_1}{m + n}, \frac{my_2 + ny_1}{m + n}, \frac{mz_2 + nz_1}{m + n}\right);\] externally, replace n by −n. Midpoint: averages of the coordinates. Centroid of a triangle: \(\left(\frac{x_1 + x_2 + x_3}{3}, \dots\right)\); of a tetrahedron: averages of four vertices.`,
      { ex: { q: R`Find the point dividing (1, 2, 3) and (4, 5, 6) internally in the ratio 1 : 2, and the centroid of (1, 2, 3), (3, 0, 1), (−1, 1, −4).`,
        steps: [R`((4 + 2)/3, (5 + 4)/3, (6 + 6)/3) = (2, 3, 4).`, R`Centroid ((1 + 3 − 1)/3, (2 + 0 + 1)/3, (3 + 1 − 4)/3) = (1, 1, 0).`], ans: R`(2, 3, 4); (1, 1, 0)` } },
      { tip: R`The ratio in which the XY-plane divides the join of two points is −z₁ : z₂ (similarly for the other planes).` },
      { check: { q: R`Find the midpoint of (2, −1, 4) and (0, 3, −2).`, ans: R`(1, 1, 1).` } }
    ] },

    { h: R`Direction cosines and direction ratios of a line`, t: [3], blocks: [
      R`If a directed line makes angles α, β, γ with the positive x-, y-, z-axes, its <b>direction cosines</b> (DCs) are l = cos α, m = cos β, n = cos γ, with \(l^2 + m^2 + n^2 = 1\). Any three numbers a, b, c proportional to l, m, n are <b>direction ratios</b> (DRs), and \[l = \pm\frac{a}{\sqrt{a^2 + b^2 + c^2}},\ m = \pm\frac{b}{\sqrt{a^2 + b^2 + c^2}},\ n = \pm\frac{c}{\sqrt{a^2 + b^2 + c^2}}.\]`,
      { ex: { q: R`Find the DCs of a line with DRs 2, −1, 2.`,
        steps: [R`√(4 + 1 + 4) = 3.`], ans: R`±(2/3, −1/3, 2/3)` } },
      { check: { q: R`What are the DCs of the z-axis?`, ans: R`0, 0, 1.` } }
    ] },

    { h: R`Direction ratios of the line through two points`, t: [3], blocks: [
      R`The line through \((x_1, y_1, z_1)\) and \((x_2, y_2, z_2)\) has DRs \(x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1\). Three points are collinear if the DRs of AB and BC are proportional.`,
      { ex: { q: R`Show that A(2, 3, 4), B(−1, −2, 1) and C(5, 8, 7) are collinear.`,
        steps: [R`DRs of AB: −3, −5, −3; of BC: 6, 10, 6 = −2 × (−3, −5, −3).`], ans: R`proportional, so collinear` } },
      { check: { q: R`Find DRs of the line through (1, 0, 2) and (3, 4, −1).`, ans: R`2, 4, −3.` } }
    ] },

    { h: R`Equation of a line through a point in a given direction`, t: [6], blocks: [
      R`<b>Vector form:</b> the line through the point with position vector \(\vec a\) parallel to \(\vec b\) is \(\vec r = \vec a + \lambda\vec b\) (λ a real parameter). <b>Cartesian form</b> (through \((x_1, y_1, z_1)\) with DRs a, b, c): \[\frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c}\ (= \lambda).\] Any point of the line is \((x_1 + a\lambda, y_1 + b\lambda, z_1 + c\lambda)\).`,
      { ex: { q: R`Find the line through (1, 2, 3) parallel to 3î + 2ĵ − 2k̂.`,
        steps: [R`Vector: r = (î + 2ĵ + 3k̂) + λ(3î + 2ĵ − 2k̂).`], ans: R`\(\dfrac{x - 1}{3} = \dfrac{y - 2}{2} = \dfrac{z - 3}{-2}\)` } },
      { check: { q: R`Write the general point of (x − 2)/1 = (y + 1)/3 = z/2.`, ans: R`(2 + λ, −1 + 3λ, 2λ).` } }
    ] },

    { h: R`Line through two points`, t: [6], blocks: [
      R`Through points with position vectors \(\vec a\) and \(\vec b\): \(\vec r = \vec a + \lambda(\vec b - \vec a)\). Cartesian: \[\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}.\]`,
      { ex: { q: R`Find the line through (−1, 0, 2) and (3, 4, 6).`,
        steps: [R`DRs 4, 4, 4 ∝ 1, 1, 1.`], ans: R`\(\dfrac{x + 1}{1} = \dfrac{y}{1} = \dfrac{z - 2}{1}\)` } },
      { check: { q: R`Does (1, 2, 4) lie on the line above?`, ans: R`x + 1 = 2, y = 2, z − 2 = 2: yes (λ = 2).` } }
    ] },

    { h: R`Angle between two lines`, t: [4], blocks: [
      R`If lines have DRs \(a_1, b_1, c_1\) and \(a_2, b_2, c_2\) (or direction vectors \(\vec b_1, \vec b_2\)), the angle θ between them is given by \[\cos\theta = \left|\frac{a_1a_2 + b_1b_2 + c_1c_2}{\sqrt{a_1^2 + b_1^2 + c_1^2}\sqrt{a_2^2 + b_2^2 + c_2^2}}\right| = \frac{|\vec b_1\cdot\vec b_2|}{|\vec b_1||\vec b_2|}.\] They are <b>perpendicular</b> if \(a_1a_2 + b_1b_2 + c_1c_2 = 0\) and <b>parallel</b> if \(\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}\). With DCs: \(\cos\theta = |l_1l_2 + m_1m_2 + n_1n_2|\).`,
      { ex: { q: R`Find the angle between lines with DRs (1, 1, 2) and (√3 − 1, −√3 − 1, 4).`,
        steps: [R`Dot = (√3 − 1) − (√3 + 1) + 8 = 6.`, R`Magnitudes √6 and √((√3 − 1)² + (√3 + 1)² + 16) = √24. cos θ = 6/√144 = 1/2.`], ans: R`60°` } },
      { check: { q: R`Are lines with DRs (1, 2, 3) and (3, 0, −1) perpendicular?`, ans: R`Yes: 3 + 0 − 3 = 0.` } }
    ] },

    { h: R`Skew lines`, t: [5], blocks: [
      R`In space, two lines may intersect, be parallel, or be <b>skew</b>: neither parallel nor intersecting (they lie in different planes). The angle between skew lines is the angle between their directions.`,
      { fig: figSkew, cap: R`Skew lines never meet; the shortest distance between them is along their common perpendicular.` },
      { check: { q: R`Can two lines in a plane be skew?`, ans: R`No: coplanar lines either meet or are parallel.` } }
    ] },

    { h: R`Shortest distance between two lines`, t: [5], blocks: [
      R`For \(\vec r = \vec a_1 + \lambda\vec b_1\) and \(\vec r = \vec a_2 + \mu\vec b_2\), the shortest distance (along the common perpendicular, which has direction \(\vec b_1 \times \vec b_2\)) is \[d = \left|\frac{(\vec a_2 - \vec a_1)\cdot(\vec b_1 \times \vec b_2)}{|\vec b_1 \times \vec b_2|}\right|.\] The lines intersect ⟺ d = 0.`,
      { ex: { q: R`Find the shortest distance between \(\vec r = (\hat i + 2\hat j + 3\hat k) + \lambda(\hat i - 3\hat j + 2\hat k)\) and \(\vec r = (4\hat i + 5\hat j + 6\hat k) + \mu(2\hat i + 3\hat j + \hat k)\).`,
        steps: [R`\(\vec b_1 \times \vec b_2 = -9\hat i + 3\hat j + 9\hat k\), magnitude √171 = 3√19.`, R`\(\vec a_2 - \vec a_1 = 3\hat i + 3\hat j + 3\hat k\); dot = −27 + 9 + 27 = 9.`], ans: R`\(d = \dfrac{9}{3\sqrt{19}} = \dfrac{3}{\sqrt{19}}\)` } },
      { adv: R`The equation of the line of shortest distance is found by taking general points P(λ) and Q(μ) on the two lines and requiring \(\overrightarrow{PQ}\) to be perpendicular to both directions; solve the two equations for λ and μ.` },
      { check: { q: R`What is the shortest distance between two intersecting lines?`, ans: R`Zero.` } }
    ] },

    { h: R`Distance between parallel lines`, t: [5], blocks: [
      R`For parallel lines \(\vec r = \vec a_1 + \lambda\vec b\) and \(\vec r = \vec a_2 + \mu\vec b\): \[d = \frac{|\vec b \times (\vec a_2 - \vec a_1)|}{|\vec b|}.\]`,
      { ex: { q: R`Find the distance between r = î + 2ĵ − 4k̂ + λ(2î + 3ĵ + 6k̂) and r = 3î + 3ĵ − 5k̂ + μ(2î + 3ĵ + 6k̂).`,
        steps: [R`a₂ − a₁ = 2î + ĵ − k̂; b × (a₂ − a₁) = |î ĵ k̂; 2 3 6; 2 1 −1| = −9î + 14ĵ − 4k̂.`, R`Magnitude √(81 + 196 + 16) = √293; |b| = 7.`], ans: R`√293/7` } },
      { check: { q: R`How do you recognise that two lines are parallel?`, ans: R`Their direction vectors are proportional.` } }
    ] },

    { h: R`Coplanar lines`, t: [5], blocks: [
      R`Two lines \(\vec r = \vec a_1 + \lambda\vec b_1\) and \(\vec r = \vec a_2 + \mu\vec b_2\) are <b>coplanar</b> ⟺ \((\vec a_2 - \vec a_1)\cdot(\vec b_1 \times \vec b_2) = 0\). In Cartesian form: \[\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix} = 0.\] The plane containing them is then \(\begin{vmatrix} x - x_1 & y - y_1 & z - z_1 \\ a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{vmatrix} = 0\).`,
      { check: { q: R`What does coplanarity mean for the shortest distance?`, ans: R`For non-parallel lines it is zero: they intersect.` } }
    ] },

    { h: R`Equation of a plane in various forms`, t: [6], blocks: [
      R`A plane is fixed by a point A (position vector \(\vec a\)) on it and a normal vector \(\vec n = a\hat i + b\hat j + c\hat k\): for every point P, \(\overrightarrow{AP}\perp\vec n\).`,
      { fig: figPlane, cap: R`Every line in the plane is perpendicular to the normal.` },
      { table: { head: [R`Form`, R`Equation`], rows: [
        [R`Point and normal`, R`\((\vec r - \vec a)\cdot\vec n = 0\); \(a(x - x_1) + b(y - y_1) + c(z - z_1) = 0\)`],
        [R`General`, R`ax + by + cz + d = 0 (normal DRs a, b, c)`],
        [R`Normal form`, R`\(\vec r\cdot\hat n = p\); lx + my + nz = p (p = distance from O)`],
        [R`Intercept form`, R`\(\dfrac xa + \dfrac yb + \dfrac zc = 1\)`],
        [R`Through three points`, R`\(\begin{vmatrix} x - x_1 & y - y_1 & z - z_1 \\ x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\ x_3 - x_1 & y_3 - y_1 & z_3 - z_1 \end{vmatrix} = 0\)`]] } },
      { ex: { q: R`Find the plane through (1, 0, 0), (0, 1, 0) and (0, 0, 1).`,
        steps: [R`Intercepts 1, 1, 1.`], ans: R`x + y + z = 1` } },
      { check: { q: R`Find the plane through (2, 1, −1) with normal 3î − ĵ + 2k̂.`, ans: R`3(x − 2) − (y − 1) + 2(z + 1) = 0, i.e. 3x − y + 2z − 3 = 0.` } }
    ] },

    { h: R`Plane through the intersection of two planes`, t: [6], blocks: [
      R`Every plane through the line of intersection of \(P_1 \equiv a_1x + b_1y + c_1z + d_1 = 0\) and \(P_2 = 0\) has the form \(P_1 + \lambda P_2 = 0\); λ is fixed by one more condition.`,
      { ex: { q: R`Find the plane through the intersection of x + y + z = 1 and 2x + 3y + 4z = 5 passing through (1, 1, 1).`,
        steps: [R`(x + y + z − 1) + λ(2x + 3y + 4z − 5) = 0; at (1, 1, 1): 2 + 4λ = 0 ⟹ λ = −½.`, R`2(x + y + z − 1) − (2x + 3y + 4z − 5) = 0 ⟹ −y − 2z + 3 = 0.`], ans: R`y + 2z = 3` } },
      { check: { q: R`Which plane of the family P₁ + λP₂ = 0 is P₂ itself?`, ans: R`None for finite λ (it corresponds to λ → ∞); P₁ is λ = 0.` } }
    ] },

    { h: R`Distance of a point from a plane`, t: [6], blocks: [
      R`The distance of \((x_1, y_1, z_1)\) from ax + by + cz + d = 0 is \[\frac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}};\] in vector form, the distance of \(\vec a\) from \(\vec r\cdot\vec n = d\) is \(\dfrac{|\vec a\cdot\vec n - d|}{|\vec n|}\). The distance between parallel planes ax + by + cz + d₁ = 0 and ax + by + cz + d₂ = 0 is \(\dfrac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}\).`,
      { ex: { q: R`Find the distance of (2, 5, −3) from the plane \(\vec r\cdot(6\hat i - 3\hat j + 2\hat k) = 4\).`,
        steps: [R`|12 − 15 − 6 − 4| / √(36 + 9 + 4) = 13/7.`], ans: R`13/7` } },
      { check: { q: R`Find the distance of the origin from 2x − y + 2z = 9.`, ans: R`9/3 = 3.` } }
    ] },

    { h: R`Angle between two planes`, t: [6], blocks: [
      R`The angle between two planes is the angle between their normals: \[\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2 + b_1^2 + c_1^2}\sqrt{a_2^2 + b_2^2 + c_2^2}}.\] Perpendicular planes: \(a_1a_2 + b_1b_2 + c_1c_2 = 0\); parallel planes: \(a_1/a_2 = b_1/b_2 = c_1/c_2\).`,
      { ex: { q: R`Find the angle between 2x − y + z = 6 and x + y + 2z = 7.`,
        steps: [R`cos θ = |2 − 1 + 2|/(√6 · √6) = 1/2.`], ans: R`60°` } },
      { check: { q: R`Are x + 2y − z = 1 and 3x − y + z = 4 perpendicular?`, ans: R`3 − 2 − 1 = 0: yes.` } }
    ] },

    { h: R`Angle between a line and a plane`, t: [6], blocks: [
      R`If a line has direction \(\vec b\) and a plane has normal \(\vec n\), the angle φ between the line and the plane is the complement of the angle between \(\vec b\) and \(\vec n\): \[\sin\varphi = \frac{|\vec b\cdot\vec n|}{|\vec b||\vec n|}.\] The line is parallel to the plane if \(\vec b\cdot\vec n = 0\), and perpendicular to it if \(\vec b \parallel \vec n\).`,
      { ex: { q: R`Find the angle between the line with direction 2î + 3ĵ + 6k̂ and the plane 10x + 2y − 11z = 3.`,
        steps: [R`b·n = 20 + 6 − 66 = −40; |b| = 7, |n| = 15.`], ans: R`sin φ = 40/105 = 8/21, φ = sin⁻¹(8/21)` } },
      { check: { q: R`When is a line parallel to a plane?`, ans: R`When its direction is perpendicular to the plane's normal (b·n = 0).` } }
    ] }
  ],
  summary: [
    R`Point (x, y, z); eight octants; distance √(Δx² + Δy² + Δz²); section formula as in 2-D with z added; centroid average.`,
    R`DCs l² + m² + n² = 1; DRs proportional; through two points: (x₂ − x₁, y₂ − y₁, z₂ − z₁).`,
    R`Line: r = a + λb; (x − x₁)/a = (y − y₁)/b = (z − z₁)/c. Angle cos θ = |b₁·b₂|/(|b₁||b₂|).`,
    R`Skew lines: SD = |(a₂ − a₁)·(b₁ × b₂)|/|b₁ × b₂|; parallel lines |b × (a₂ − a₁)|/|b|; coplanar ⟺ (a₂ − a₁)·(b₁ × b₂) = 0.`,
    R`Plane: (r − a)·n = 0; ax + by + cz + d = 0; intercept form; through three points (determinant); family P₁ + λP₂ = 0.`,
    R`Point–plane distance |ax₁ + by₁ + cz₁ + d|/√(a² + b² + c²); angle between planes via normals; line–plane sin φ = |b·n|/(|b||n|).`
  ],
  refs: [
    { t: R`OpenStax Calculus Vol. 3, §2.2 Vectors in Three Dimensions`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-2-vectors-in-three-dimensions' },
    { t: R`OpenStax Calculus Vol. 3, §2.5 Equations of Lines and Planes in Space`, url: 'https://openstax.org/books/calculus-volume-3/pages/2-5-equations-of-lines-and-planes-in-space' },
    { t: R`Wikipedia: Skew lines`, url: 'https://en.wikipedia.org/wiki/Skew_lines' },
    { t: R`Wikipedia: Plane (mathematics)`, url: 'https://en.wikipedia.org/wiki/Plane_(mathematics)' }
  ]
});
})();
