// Lesson: Three-Dimensional Geometry.
var R = String.raw;
JEE.lesson('maths', '3d-geometry', {
  theory: [
    { h: R`Points in space`,
      body: [
        R`In 3-D we need three numbers to locate a point: (x, y, z), measured along three mutually perpendicular axes.`,
        R`The three axes form three <b>coordinate planes</b> (xy, yz, zx), which split space into 8 <b>octants</b>, depending on the signs of x, y and z.`,
        R`The distance of (x, y, z) from the xy-plane is |z|, from the yz-plane |x|, and from the zx-plane |y|. Its distance from the x-axis is \(\sqrt{y^2 + z^2}\).`
      ],
      analogy: R`To find a bird in a room, you need three numbers: how far along the length, how far across the width, and how high above the floor.`,
      check: { q: R`How far is (3, −2, 5) from the yz-plane?`, ans: R`|x| = 3.` } },

    { h: R`Distance between two points`,
      body: [
        R`The distance between \((x_1, y_1, z_1)\) and \((x_2, y_2, z_2)\) is \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\).`,
        R`It is Pythagoras' theorem used twice. The distance from the origin is \(\sqrt{x^2 + y^2 + z^2}\).`
      ] },

    { h: R`Section formula`,
      body: [
        R`The point dividing the segment from P to Q in the ratio m : n internally is \(\left(\dfrac{mx_2 + nx_1}{m + n}, \dfrac{my_2 + ny_1}{m + n}, \dfrac{mz_2 + nz_1}{m + n}\right)\).`,
        R`Midpoint: average the coordinates. Centroid of a triangle: average the three vertices.`
      ] },

    { h: R`Direction cosines and direction ratios`,
      body: [
        R`If a line makes angles α, β, γ with the x, y and z axes, its <b>direction cosines</b> are \(l = \cos\alpha\), \(m = \cos\beta\), \(n = \cos\gamma\), and always \(l^2 + m^2 + n^2 = 1\).`,
        R`<b>Direction ratios</b> (a, b, c) are any numbers proportional to l, m, n. To turn them into direction cosines, divide by \(\sqrt{a^2 + b^2 + c^2}\).`,
        R`For the line through two points, the direction ratios are \((x_2 - x_1, y_2 - y_1, z_2 - z_1)\).`
      ],
      mistake: R`Using direction ratios as if they were direction cosines. Only direction cosines satisfy \(l^2 + m^2 + n^2 = 1\).` },

    { h: R`Equation of a line`,
      body: [
        R`A line is fixed by a point A on it and a direction \(\vec b\). <b>Vector form:</b> \(\vec r = \vec a + \lambda\vec b\), where λ is any real number.`,
        R`<b>Cartesian form:</b> through \((x_1, y_1, z_1)\) with direction ratios (a, b, c): \(\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}\).`,
        R`Through two points: use \((x_2 - x_1, y_2 - y_1, z_2 - z_1)\) as the direction ratios.`
      ] },

    { h: R`Angle between two lines`,
      body: [
        R`With direction ratios \((a_1, b_1, c_1)\) and \((a_2, b_2, c_2)\): \(\cos\theta = \dfrac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2 + b_1^2 + c_1^2}\sqrt{a_2^2 + b_2^2 + c_2^2}}\).`,
        R`<b>Perpendicular:</b> \(a_1a_2 + b_1b_2 + c_1c_2 = 0\). <b>Parallel:</b> \(\dfrac{a_1}{a_2} = \dfrac{b_1}{b_2} = \dfrac{c_1}{c_2}\).`
      ] },

    { h: R`Skew lines and the shortest distance`,
      body: [
        R`In 3-D, two lines can be neither parallel nor intersecting: these are <b>skew lines</b>, like a road on a flyover and a road passing underneath.`,
        R`The shortest distance between skew lines \(\vec r = \vec a_1 + \lambda\vec b_1\) and \(\vec r = \vec a_2 + \mu\vec b_2\) is along their common perpendicular: \(d = \dfrac{|(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}\).`,
        R`For parallel lines (same direction \(\vec b\)): \(d = \dfrac{|(\vec a_2 - \vec a_1)\times\vec b|}{|\vec b|}\). If d = 0, the lines intersect.`
      ],
      analogy: R`A flyover and the road below it never meet and aren't parallel. The shortest gap between them is the vertical clearance at the crossing point.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`For the point (3, −2, 5), give the signs of its coordinates and its distance from the yz-plane.`,
      steps: [R`x > 0, y < 0, z > 0.`, R`The distance from the yz-plane is |x|.`],
      ans: R`(+, −, +); 3 units` },
    { level: 1, t: 1, q: R`Find the distance of the point (2, 3, 6) from the origin.`,
      steps: [R`\(\sqrt{4 + 9 + 36} = \sqrt{49}\).`],
      ans: R`7` },
    { level: 1, t: 2, q: R`Find the midpoint of the segment joining (1, 2, 3) and (3, 4, 5).`,
      steps: [R`Average each coordinate.`],
      ans: R`(2, 3, 4)` },
    { level: 3, t: 4, q: R`Show that lines with direction ratios (1, 2, −1) and (3, −1, 1) are perpendicular.`,
      steps: [R`\(a_1a_2 + b_1b_2 + c_1c_2 = 3 - 2 - 1 = 0\).`],
      ans: R`The sum is 0, so the angle is 90°.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The distance of the point (3, 4, 5) from the xy-plane is:`,
      options: [R`3`, R`4`, R`5`, R`\(\sqrt{50}\)`], correct: 2,
      solution: R`It is |z| = 5.` },
    { level: 1, type: 'mcq', q: R`The distance between (0, 0, 0) and (1, 2, 2) is:`,
      options: [R`3`, R`5`, R`\(\sqrt5\)`, R`9`], correct: 0,
      solution: R`\(\sqrt{1 + 4 + 4} = 3\).` },
    { level: 1, type: 'mcq', q: R`For the direction cosines of any line, \(l^2 + m^2 + n^2\) equals:`,
      options: [R`0`, R`1`, R`2`, R`l + m + n`], correct: 1,
      solution: R`This is always true for direction cosines.` },
    { level: 1, type: 'mcq', q: R`The midpoint of (1, 2, 3) and (3, 4, 5) is:`,
      options: [R`(4, 6, 8)`, R`(1, 1, 1)`, R`(2, 3, 4)`, R`(2, 2, 2)`], correct: 2,
      solution: R`Average each coordinate.` },
    { level: 1, type: 'num', q: R`Find the distance of (2, 3, 6) from the origin.`,
      answer: 7, tol: 0.001, unit: '',
      solution: R`\(\sqrt{49} = 7\).` },
    { level: 1, type: 'num', q: R`Find the distance between (1, 1, 1) and (4, 5, 1).`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`\(\sqrt{9 + 16 + 0} = 5\).` },
    { level: 2, type: 'mcq', q: R`The direction cosines of the x-axis are:`,
      options: [R`(0, 1, 0)`, R`(1, 0, 0)`, R`(0, 0, 1)`, R`(1, 1, 1)`], correct: 1,
      solution: R`It makes 0° with x and 90° with y and z.` },
    { level: 2, type: 'mcq', q: R`Lines with direction ratios \((a_1, b_1, c_1)\) and \((a_2, b_2, c_2)\) are perpendicular when:`,
      options: [R`\(a_1/a_2 = b_1/b_2 = c_1/c_2\)`, R`\(a_1a_2 + b_1b_2 + c_1c_2 = 1\)`, R`\(a_1 + b_1 + c_1 = 0\)`, R`\(a_1a_2 + b_1b_2 + c_1c_2 = 0\)`], correct: 3,
      solution: R`Then \(\cos\theta = 0\).` },
    { level: 2, type: 'mcq', q: R`Skew lines are lines that are:`,
      options: [R`parallel`, R`intersecting`, R`neither parallel nor intersecting`, R`the same line`], correct: 2,
      solution: R`They exist only in 3-D (they don't lie in one plane).` },
    { level: 2, type: 'mcq', q: R`The line through (1, 2, 3) with direction ratios (2, 3, 4) is:`,
      options: [R`\(\dfrac{x - 2}{1} = \dfrac{y - 3}{2} = \dfrac{z - 4}{3}\)`, R`\(\dfrac{x - 1}{2} = \dfrac{y - 2}{3} = \dfrac{z - 3}{4}\)`, R`\(\dfrac{x + 1}{2} = \dfrac{y + 2}{3} = \dfrac{z + 3}{4}\)`, R`\(\dfrac{x}{2} = \dfrac y3 = \dfrac z4\)`], correct: 1,
      solution: R`\(\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}\).` },
    { level: 2, type: 'num', q: R`Find the angle (in degrees) between lines with direction ratios (1, 0, 0) and (1, 1, 0).`,
      answer: 45, tol: 0.01, unit: '°',
      solution: R`\(\cos\theta = \dfrac{1}{1\times\sqrt2}\), so θ = 45°.` },
    { level: 2, type: 'num', q: R`Find the z-coordinate of the centroid of the triangle with vertices (1, 2, 3), (2, 3, 4) and (3, 4, 8).`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`(3 + 4 + 8)/3 = 5.` },
    { level: 2, type: 'num', q: R`A line has direction ratios (2, 3, 6). Find its direction cosine l (to 4 decimal places).`,
      answer: 0.2857, tol: 0.0005, unit: '',
      solution: R`\(\sqrt{4 + 9 + 36} = 7\), so l = 2/7 ≈ 0.2857.` },
    { level: 3, type: 'mcq', q: R`The lines with direction ratios (1, 2, −1) and (3, −1, 1) are:`,
      options: [R`parallel`, R`perpendicular`, R`at 45°`, R`at 60°`], correct: 1,
      solution: R`3 − 2 − 1 = 0, so they are perpendicular.` },
    { level: 3, type: 'mcq', q: R`A line makes angles α, β, γ with the axes. Then \(\sin^2\alpha + \sin^2\beta + \sin^2\gamma\) equals:`,
      options: [R`1`, R`3`, R`0`, R`2`], correct: 3,
      solution: R`\(3 - (\cos^2\alpha + \cos^2\beta + \cos^2\gamma) = 3 - 1 = 2\).` },
    { level: 3, type: 'num', q: R`Find the distance between the parallel lines \(\vec r = \lambda\hat i\) and \(\vec r = 3\hat j + 4\hat k + \mu\hat i\).`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`\(|(3\hat j + 4\hat k)\times\hat i|/|\hat i| = |4\hat j - 3\hat k| = 5\).` },
    { level: 3, type: 'num', q: R`Find the x-coordinate of the point dividing the segment from (2, 4, 6) to (8, 10, 12) internally in the ratio 1 : 2.`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`\(\dfrac{1(8) + 2(2)}{3} = 4\).` }
  ]
});
