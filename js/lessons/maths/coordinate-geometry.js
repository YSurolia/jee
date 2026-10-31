// Lesson: Coordinate Geometry.
var R = String.raw;
JEE.lesson('maths', 'coordinate-geometry', {
  theory: [
    { h: R`Points: distance and section formulas`,
      body: [
        R`Every point in a plane has an address (x, y). The <b>distance</b> between \((x_1, y_1)\) and \((x_2, y_2)\) is \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\), which is Pythagoras' theorem.`,
        R`<b>Section formula:</b> the point dividing the segment in the ratio m : n internally is \(\left(\dfrac{mx_2 + nx_1}{m + n}, \dfrac{my_2 + ny_1}{m + n}\right)\). The midpoint is the case m = n: \(\left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)\).`
      ],
      analogy: R`Coordinates work like seat numbers in a cinema hall: row and column together pin down one exact seat.`,
      check: { q: R`Find the distance between (1, 2) and (4, 6).`, ans: R`\(\sqrt{9 + 16} = 5\).` } },

    { h: R`Locus`,
      body: [
        R`A <b>locus</b> is the path traced by a point that moves according to a rule. To find its equation: call the moving point (h, k), write the rule as an equation in h and k, simplify, and finally replace h, k with x, y.`,
        R`Example: points equidistant from two fixed points form the perpendicular bisector; points at a fixed distance from a point form a circle.`
      ] },

    { h: R`Slope, parallel and perpendicular lines`,
      body: [
        R`The <b>slope</b> (gradient) of a line through \((x_1, y_1)\) and \((x_2, y_2)\) is \(m = \dfrac{y_2 - y_1}{x_2 - x_1} = \tan\theta\), where θ is its angle with the positive x-axis.`,
        R`<b>Parallel</b> lines have equal slopes. <b>Perpendicular</b> lines have \(m_1m_2 = -1\).`,
        R`Angle between two lines: \(\tan\theta = \left|\dfrac{m_1 - m_2}{1 + m_1m_2}\right|\).`
      ],
      analogy: R`Slope is the steepness of a road: 1 in 10 means you rise 1 m for every 10 m along. A flat road has slope 0; a vertical wall has undefined slope.` },

    { h: R`Equations of a straight line`,
      body: [
        R`<b>Slope–intercept:</b> \(y = mx + c\). <b>Point–slope:</b> \(y - y_1 = m(x - x_1)\). <b>Two-point:</b> \(y - y_1 = \dfrac{y_2 - y_1}{x_2 - x_1}(x - x_1)\).`,
        R`<b>Intercept form:</b> \(\dfrac xa + \dfrac yb = 1\) (cuts the axes at a and b). <b>Normal form:</b> \(x\cos\alpha + y\sin\alpha = p\). <b>General form:</b> \(ax + by + c = 0\), with slope \(-a/b\).`
      ] },

    { h: R`Distance from a point to a line`,
      body: [
        R`The perpendicular distance from \((x_1, y_1)\) to \(ax + by + c = 0\) is \(\dfrac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}\).`,
        R`The distance between parallel lines \(ax + by + c_1 = 0\) and \(ax + by + c_2 = 0\) is \(\dfrac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}\).`
      ] },

    { h: R`Centres of a triangle`,
      body: [
        R`<b>Centroid</b> G (where the medians meet): the average of the vertices, \(\left(\dfrac{x_1 + x_2 + x_3}{3}, \dfrac{y_1 + y_2 + y_3}{3}\right)\).`,
        R`<b>Circumcentre</b> O (where the perpendicular bisectors meet): equidistant from all three vertices. In a right triangle it is the midpoint of the hypotenuse.`,
        R`<b>Orthocentre</b> H (where the altitudes meet). In a right triangle it is the right-angled vertex. O, G and H lie on one line (the Euler line), and G divides OH in the ratio 1 : 2 (OG : GH = 1 : 2).`
      ],
      points: [R`Area of a triangle = \(\tfrac12|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|\).`] },

    { h: R`Circles`,
      body: [
        R`A circle with centre (h, k) and radius r: \((x - h)^2 + (y - k)^2 = r^2\).`,
        R`<b>General form:</b> \(x^2 + y^2 + 2gx + 2fy + c = 0\), with centre \((-g, -f)\) and radius \(\sqrt{g^2 + f^2 - c}\).`,
        R`<b>Diameter form:</b> with diameter ends \((x_1, y_1)\) and \((x_2, y_2)\): \((x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0\).`
      ],
      mistake: R`Reading the centre of \(x^2 + y^2 - 4x + 6y = 0\) as (−4, 6). The centre is \((-g, -f)\) where \(2g = -4\) and \(2f = 6\), i.e. (2, −3).` },

    { h: R`Conic sections`,
      body: [
        R`<b>Parabola</b> \(y^2 = 4ax\): focus (a, 0), directrix x = −a, latus rectum 4a. Every point is equally far from the focus and the directrix (e = 1). The focal distance of a point (x, y) is x + a.`,
        R`<b>Ellipse</b> \(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1\) (a > b): \(b^2 = a^2(1 - e^2)\), with \(0 < e < 1\); foci \((\pm ae, 0)\); latus rectum \(2b^2/a\). The sum of the distances to the foci is 2a.`,
        R`<b>Hyperbola</b> \(\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1\): \(b^2 = a^2(e^2 - 1)\), with e > 1; foci \((\pm ae, 0)\); asymptotes \(y = \pm\dfrac bax\). The difference of the distances to the foci is 2a. A <b>rectangular</b> hyperbola has a = b and \(e = \sqrt2\).`
      ],
      analogy: R`Car headlights and dish antennas are parabolic: light from the focus reflects into a parallel beam. Planets move in ellipses around the Sun.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find the distance between (1, 2) and (4, 6), and the midpoint of the segment joining them.`,
      steps: [R`Distance \(= \sqrt{3^2 + 4^2}\).`, R`Midpoint \(= \left(\dfrac{1 + 4}{2}, \dfrac{2 + 6}{2}\right)\).`],
      ans: R`5; (2.5, 4)` },
    { level: 1, t: 1, q: R`Find the slope of the line through (1, 2) and (3, 8).`,
      steps: [R`\(m = \dfrac{8 - 2}{3 - 1}\).`],
      ans: R`3` },
    { level: 1, t: 5, q: R`Write the equation of the circle with centre (2, −1) and radius 3.`,
      steps: [R`\((x - h)^2 + (y - k)^2 = r^2\).`],
      ans: R`\((x - 2)^2 + (y + 1)^2 = 9\), i.e. \(x^2 + y^2 - 4x + 2y - 4 = 0\)` },
    { level: 3, t: 5, q: R`Find the equation, centre and radius of the circle with diameter joining (1, 2) and (5, 6).`,
      steps: [R`Diameter form: \((x - 1)(x - 5) + (y - 2)(y - 6) = 0\), i.e. \(x^2 + y^2 - 6x - 8y + 17 = 0\).`, R`Centre = midpoint (3, 4). Radius = \(\sqrt{9 + 16 - 17} = \sqrt8\).`],
      ans: R`\(x^2 + y^2 - 6x - 8y + 17 = 0\); centre (3, 4); radius \(2\sqrt2\)` },
    { level: 3, t: 6, q: R`For the parabola \(y^2 = 12x\), find the focus, directrix and latus rectum, and the focal distance of the point on it where x = 3.`,
      steps: [R`\(4a = 12\), so a = 3: focus (3, 0), directrix x = −3, latus rectum 12.`, R`At x = 3, \(y = \pm6\). Focal distance = distance to the directrix = 3 + 3.`],
      ans: R`Focus (3, 0); directrix x = −3; latus rectum 12; focal distance 6` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The distance between (0, 0) and (3, 4) is:`,
      options: [R`7`, R`5`, R`25`, R`1`], correct: 1,
      solution: R`\(\sqrt{9 + 16} = 5\).` },
    { level: 1, type: 'mcq', q: R`The slope of the line \(y = 3x + 2\) is:`,
      options: [R`2`, R`−3`, R`3`, R`1/3`], correct: 2,
      solution: R`In y = mx + c, m is the slope.` },
    { level: 1, type: 'mcq', q: R`The midpoint of (2, 4) and (6, 8) is:`,
      options: [R`(4, 6)`, R`(8, 12)`, R`(2, 2)`, R`(3, 4)`], correct: 0,
      solution: R`Average the coordinates.` },
    { level: 1, type: 'mcq', q: R`The centre of the circle \(x^2 + y^2 = 25\) is:`,
      options: [R`(5, 5)`, R`(25, 0)`, R`(0, 5)`, R`(0, 0)`], correct: 3,
      solution: R`It is \(x^2 + y^2 = r^2\), centred at the origin.` },
    { level: 1, type: 'num', q: R`Find the radius of the circle \(x^2 + y^2 = 49\).`,
      answer: 7, tol: 0.001, unit: '',
      solution: R`\(r^2 = 49\).` },
    { level: 1, type: 'num', q: R`Find the slope of the line through (1, 2) and (3, 8).`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`6/2 = 3.` },
    { level: 2, type: 'mcq', q: R`Two lines with slopes \(m_1\) and \(m_2\) are perpendicular when:`,
      options: [R`\(m_1 = m_2\)`, R`\(m_1m_2 = -1\)`, R`\(m_1 + m_2 = 0\)`, R`\(m_1m_2 = 1\)`], correct: 1,
      solution: R`Perpendicular slopes are negative reciprocals.` },
    { level: 2, type: 'mcq', q: R`The focus of the parabola \(y^2 = 8x\) is:`,
      options: [R`(8, 0)`, R`(0, 2)`, R`(2, 0)`, R`(4, 0)`], correct: 2,
      solution: R`4a = 8, so a = 2.` },
    { level: 2, type: 'mcq', q: R`The eccentricity of a circle is:`,
      options: [R`0`, R`1`, R`between 0 and 1`, R`greater than 1`], correct: 0,
      solution: R`A circle is an ellipse with a = b, so e = 0.` },
    { level: 2, type: 'mcq', q: R`The centroid of the triangle with vertices (0, 0), (6, 0) and (0, 9) is:`,
      options: [R`(3, 4.5)`, R`(6, 9)`, R`(2, 3)`, R`(1, 1)`], correct: 2,
      solution: R`\(\left(\dfrac{0 + 6 + 0}{3}, \dfrac{0 + 0 + 9}{3}\right)\).` },
    { level: 2, type: 'num', q: R`Find the distance of the point (2, 3) from the line \(4x + 3y - 2 = 0\).`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`\(\dfrac{|8 + 9 - 2|}{5} = 3\).` },
    { level: 2, type: 'num', q: R`Find the radius of the circle \(x^2 + y^2 - 6x + 8y = 0\).`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`Centre (3, −4), c = 0: \(r = \sqrt{9 + 16} = 5\).` },
    { level: 2, type: 'num', q: R`Find the length of the latus rectum of \(\dfrac{x^2}{16} + \dfrac{y^2}{9} = 1\).`,
      answer: 4.5, tol: 0.001, unit: '',
      solution: R`\(2b^2/a = 18/4 = 4.5\).` },
    { level: 3, type: 'mcq', q: R`The locus of a point equidistant from (0, 2) and the line y = −2 is:`,
      options: [R`\(x^2 = 8y\)`, R`\(y^2 = 8x\)`, R`\(x^2 = 4y\)`, R`a circle`], correct: 0,
      solution: R`\(x^2 + (y - 2)^2 = (y + 2)^2\) simplifies to \(x^2 = 8y\) (a parabola with focus (0, 2)).` },
    { level: 3, type: 'mcq', q: R`The eccentricity of a rectangular hyperbola is:`,
      options: [R`1`, R`\(\sqrt2\)`, R`2`, R`\(1/\sqrt2\)`], correct: 1,
      solution: R`a = b gives \(e^2 = 1 + 1 = 2\).` },
    { level: 3, type: 'num', q: R`Find the focal distance of the point on \(y^2 = 12x\) whose x-coordinate is 3.`,
      answer: 6, tol: 0.001, unit: '',
      solution: R`Focal distance = x + a = 3 + 3 = 6.` },
    { level: 3, type: 'num', q: R`Find the acute angle (in degrees) between the lines y = x and \(y = \sqrt3x\).`,
      answer: 15, tol: 0.01, unit: '°',
      solution: R`Their angles with the x-axis are 45° and 60°, so the angle between them is 15°.` }
  ]
});
