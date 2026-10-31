// Lesson: Vector Algebra.
var R = String.raw;
JEE.lesson('maths', 'vector-algebra', {
  theory: [
    { h: R`Scalars and vectors`,
      body: [
        R`A <b>scalar</b> has only size (magnitude): mass, time, temperature, speed. A <b>vector</b> has size <b>and direction</b>: displacement, velocity, force.`,
        R`A vector is drawn as an arrow: its length shows the magnitude and its arrowhead shows the direction. We write it \(\vec a\) or \(\overrightarrow{AB}\), and its magnitude \(|\vec a|\).`,
        R`<b>Types:</b> zero vector (length 0), unit vector (length 1), equal vectors (same size and direction), collinear vectors (along the same or parallel lines), coplanar vectors (in the same plane).`
      ],
      analogy: R`"Walk 100 m" isn't enough to reach the shop; you also need "towards the north". That extra direction is what makes displacement a vector.`,
      check: { q: R`Is speed a scalar or a vector?`, ans: R`A scalar. Velocity (speed with direction) is a vector.` } },

    { h: R`Adding and subtracting vectors`,
      body: [
        R`<b>Triangle law:</b> place the tail of \(\vec b\) at the head of \(\vec a\); the sum \(\vec a + \vec b\) goes from the tail of \(\vec a\) to the head of \(\vec b\). The <b>parallelogram law</b> gives the same result.`,
        R`Subtraction: \(\vec a - \vec b = \vec a + (-\vec b)\). Multiplying by a scalar k stretches the vector by k (and reverses it if k < 0).`,
        R`The <b>position vector</b> of a point P is \(\overrightarrow{OP}\). So \(\overrightarrow{AB} = \vec b - \vec a\) (end minus start). The point dividing AB in the ratio m : n has position vector \(\dfrac{m\vec b + n\vec a}{m + n}\).`
      ],
      points: [R`Vector addition is commutative and associative.`, R`Going round a closed polygon, the vectors add up to zero.`] },

    { h: R`Components, magnitude and unit vectors`,
      body: [
        R`Using the unit vectors \(\hat i, \hat j, \hat k\) along x, y, z, any vector is \(\vec a = a_1\hat i + a_2\hat j + a_3\hat k\). Add vectors by adding their matching components.`,
        R`Magnitude: \(|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}\). The unit vector in the direction of \(\vec a\) is \(\hat a = \dfrac{\vec a}{|\vec a|}\).`,
        R`The direction cosines of \(\vec a\) are \(\dfrac{a_1}{|\vec a|}, \dfrac{a_2}{|\vec a|}, \dfrac{a_3}{|\vec a|}\).`
      ],
      analogy: R`Components are like saying "3 steps east, 4 steps north" instead of "5 steps north-east". Both describe the same move.` },

    { h: R`The dot (scalar) product`,
      body: [
        R`\(\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3\). The result is a <b>number</b>.`,
        R`Uses: the <b>angle</b> between vectors, \(\cos\theta = \dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}\); the <b>projection</b> of \(\vec a\) on \(\vec b\), \(\dfrac{\vec a\cdot\vec b}{|\vec b|}\); and a test for <b>perpendicular</b> vectors, \(\vec a\cdot\vec b = 0\).`,
        R`\(\hat i\cdot\hat i = 1\), \(\hat i\cdot\hat j = 0\), and \(\vec a\cdot\vec a = |\vec a|^2\).`
      ],
      analogy: R`In physics, work = force · displacement. Only the part of the force along the motion does work, which is exactly what the dot product measures.` },

    { h: R`The cross (vector) product`,
      body: [
        R`\(\vec a\times\vec b\) is a <b>vector</b> of magnitude \(|\vec a||\vec b|\sin\theta\), perpendicular to both \(\vec a\) and \(\vec b\), with direction given by the right-hand rule.`,
        R`In components, it is the determinant \(\begin{vmatrix}\hat i & \hat j & \hat k\\ a_1 & a_2 & a_3\\ b_1 & b_2 & b_3\end{vmatrix}\).`,
        R`Uses: \(|\vec a\times\vec b|\) = area of the parallelogram with sides \(\vec a\) and \(\vec b\) (half of it for the triangle); \(\vec a\times\vec b = \vec 0\) means the vectors are <b>parallel</b>.`,
        R`\(\hat i\times\hat j = \hat k\), \(\hat j\times\hat k = \hat i\), \(\hat k\times\hat i = \hat j\), and \(\vec b\times\vec a = -\vec a\times\vec b\) (the order matters).`
      ],
      mistake: R`Assuming \(\vec a\times\vec b = \vec b\times\vec a\). Swapping the order flips the direction.` },

    { h: R`The scalar triple product`,
      body: [
        R`\([\vec a\ \vec b\ \vec c] = \vec a\cdot(\vec b\times\vec c)\) = the determinant of their components (one vector per row).`,
        R`Its absolute value is the <b>volume of the parallelepiped</b> with edges \(\vec a, \vec b, \vec c\). If it is zero, the three vectors are <b>coplanar</b>.`,
        R`It doesn't change under a cyclic swap: \([\vec a\ \vec b\ \vec c] = [\vec b\ \vec c\ \vec a]\). If any two vectors are equal, it is 0.`
      ],
      analogy: R`Three vectors from one corner of a box (length, width, height) give its volume. If the "box" is squashed flat (coplanar vectors), the volume is zero.` }
  ],

  examples: [
    { level: 1, t: 2, q: R`Find the magnitude of \(\vec a = 2\hat i + 3\hat j + 6\hat k\) and the unit vector along it.`,
      steps: [R`\(|\vec a| = \sqrt{4 + 9 + 36} = 7\).`, R`\(\hat a = \vec a/7\).`],
      ans: R`7; \(\dfrac{2\hat i + 3\hat j + 6\hat k}{7}\)` },
    { level: 1, t: 1, q: R`For \(\vec a = \hat i + 2\hat j\) and \(\vec b = 3\hat i - \hat j\), find \(\vec a + \vec b\) and \(\vec a - \vec b\).`,
      steps: [R`Add or subtract matching components.`],
      ans: R`\(4\hat i + \hat j\); \(-2\hat i + 3\hat j\)` },
    { level: 1, t: 3, q: R`Find \((\hat i + \hat j + \hat k)\cdot(2\hat i - \hat j + 3\hat k)\).`,
      steps: [R`Multiply matching components and add: \(2 - 1 + 3\).`],
      ans: R`4` },
    { level: 3, t: 3, q: R`Find the angle between \(\vec a = \hat i + \hat j\) and \(\vec b = \hat j + \hat k\).`,
      steps: [R`\(\vec a\cdot\vec b = 0 + 1 + 0 = 1\); \(|\vec a| = |\vec b| = \sqrt2\).`, R`\(\cos\theta = \dfrac{1}{\sqrt2\cdot\sqrt2} = \dfrac12\).`],
      ans: R`60°` },
    { level: 3, t: 4, q: R`Find the volume of the parallelepiped with edges \(\hat i + \hat j\), \(\hat j + \hat k\) and \(\hat k + \hat i\).`,
      steps: [R`\([\vec a\ \vec b\ \vec c] = \begin{vmatrix}1 & 1 & 0\\ 0 & 1 & 1\\ 1 & 0 & 1\end{vmatrix} = 1(1 - 0) - 1(0 - 1) + 0\).`],
      ans: R`2 cubic units` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Which of these is a vector quantity?`,
      options: [R`force`, R`mass`, R`time`, R`temperature`], correct: 0,
      solution: R`Force has both size and direction.` },
    { level: 1, type: 'mcq', q: R`The magnitude of \(3\hat i + 4\hat j\) is:`,
      options: [R`7`, R`1`, R`25`, R`5`], correct: 3,
      solution: R`\(\sqrt{9 + 16} = 5\).` },
    { level: 1, type: 'mcq', q: R`\(\hat i\cdot\hat i\) equals:`,
      options: [R`0`, R`1`, R`\(\hat i\)`, R`\(\hat k\)`], correct: 1,
      solution: R`A unit vector dotted with itself gives \(1\times1\times\cos0 = 1\).` },
    { level: 1, type: 'mcq', q: R`\(\hat i\times\hat j\) equals:`,
      options: [R`\(\hat k\)`, R`\(-\hat k\)`, R`0`, R`1`], correct: 0,
      solution: R`Right-hand rule: x × y = z.` },
    { level: 1, type: 'num', q: R`Find \(|2\hat i + 3\hat j + 6\hat k|\).`,
      answer: 7, tol: 0.001, unit: '',
      solution: R`\(\sqrt{49} = 7\).` },
    { level: 1, type: 'num', q: R`Find \((\hat i + \hat j + \hat k)\cdot(2\hat i - \hat j + 3\hat k)\).`,
      answer: 4, tol: 0.001, unit: '',
      solution: R`2 − 1 + 3 = 4.` },
    { level: 2, type: 'mcq', q: R`For non-zero vectors, \(\vec a\cdot\vec b = 0\) means they are:`,
      options: [R`parallel`, R`perpendicular`, R`equal`, R`opposite`], correct: 1,
      solution: R`cos θ = 0, so θ = 90°.` },
    { level: 2, type: 'mcq', q: R`For non-zero vectors, \(\vec a\times\vec b = \vec 0\) means they are:`,
      options: [R`perpendicular`, R`coplanar only`, R`unit vectors`, R`parallel`], correct: 3,
      solution: R`sin θ = 0, so θ = 0° or 180°.` },
    { level: 2, type: 'mcq', q: R`\(|\vec a\times\vec b|\) is equal to:`,
      options: [R`the area of the parallelogram with sides \(\vec a\) and \(\vec b\)`, R`the volume of a box`, R`the length of \(\vec a\)`, R`the angle between them`], correct: 0,
      solution: R`\(|\vec a||\vec b|\sin\theta\) = base × height.` },
    { level: 2, type: 'mcq', q: R`The projection of \(\vec a\) on \(\vec b\) is:`,
      options: [R`\(\dfrac{\vec a\cdot\vec b}{|\vec a|}\)`, R`\(\dfrac{\vec a\cdot\vec b}{|\vec b|}\)`, R`\(\vec a\times\vec b\)`, R`\(|\vec a||\vec b|\)`], correct: 1,
      solution: R`\(|\vec a|\cos\theta = \dfrac{\vec a\cdot\vec b}{|\vec b|}\).` },
    { level: 2, type: 'num', q: R`Find the angle (in degrees) between \(\hat i + \hat j\) and \(\hat j + \hat k\).`,
      answer: 60, tol: 0.01, unit: '°',
      solution: R`\(\cos\theta = 1/2\), so θ = 60°.` },
    { level: 2, type: 'num', q: R`Find the area of the triangle with two sides along \(\vec a = 2\hat i\) and \(\vec b = 3\hat j\).`,
      answer: 3, tol: 0.001, unit: 'sq units',
      solution: R`\(\tfrac12|\vec a\times\vec b| = \tfrac12|6\hat k| = 3\).` },
    { level: 2, type: 'num', q: R`Find λ if \(2\hat i + \lambda\hat j + \hat k\) is perpendicular to \(\hat i - 2\hat j + 3\hat k\).`,
      answer: 2.5, tol: 0.001, unit: '',
      solution: R`\(2 - 2\lambda + 3 = 0\), so λ = 2.5.` },
    { level: 3, type: 'mcq', q: R`Three vectors \(\vec a, \vec b, \vec c\) are coplanar if and only if:`,
      options: [R`\(\vec a\cdot\vec b = 0\)`, R`\([\vec a\ \vec b\ \vec c] = 0\)`, R`\(\vec a\times\vec b = \vec c\)`, R`they all have the same magnitude`], correct: 1,
      solution: R`Zero volume means they lie in one plane.` },
    { level: 3, type: 'mcq', q: R`\((\vec a\times\vec b)\cdot\vec a\) equals:`,
      options: [R`\(|\vec a|^2\)`, R`\(|\vec a||\vec b|\)`, R`1`, R`0`], correct: 3,
      solution: R`\(\vec a\times\vec b\) is perpendicular to \(\vec a\), so their dot product is 0.` },
    { level: 3, type: 'num', q: R`Find the volume of the parallelepiped with edges \(\hat i + \hat j\), \(\hat j + \hat k\) and \(\hat k + \hat i\).`,
      answer: 2, tol: 0.001, unit: 'cubic units',
      solution: R`The determinant is 1 + 1 = 2.` },
    { level: 3, type: 'num', q: R`\(|\vec a| = 3\), \(|\vec b| = 4\) and \(\vec a\perp\vec b\). Find \(|\vec a + \vec b|\).`,
      answer: 5, tol: 0.001, unit: '',
      solution: R`\(|\vec a + \vec b|^2 = 9 + 16 + 2(0) = 25\).` }
  ]
});
