// Mathematics: 14 units from the JEE Main syllabus (they also cover JEE Advanced).
// Every content string uses String.raw (R`...`) so LaTeX backslashes stay intact.
// Each solved example is tagged with the syllabus topic it covers (exact string from `syllabus`).
var R = String.raw;
window.JEE = window.JEE || {};
JEE.maths = {
  name: 'Mathematics',
  tagline: 'Algebra, calculus, coordinate geometry, vectors and probability',
  chapters: [
    {
      id: 'sets-relations-functions', title: 'Sets, Relations and Functions', cls: 11,
      syllabus: [R`Sets & their representation`, R`Union, intersection & complement`, R`Power set`, R`Relations: reflexive, symmetric, transitive, equivalence`, R`Functions: one-one, into & onto`, R`Composition of functions`, R`Inverse of a function`, R`Domain & range`],
      concepts: [
        { h: R`Counting relations and functions`, body: R`If \(|A| = m\) and \(|B| = n\), there are \(2^{mn}\) relations from A to B and \(n^m\) functions from A to B. When \(m = n\), there are \(n!\) bijections.` },
        { h: R`Equivalence relation`, body: R`A relation that is reflexive, symmetric and transitive. It splits the set into disjoint equivalence classes.` },
        { h: R`Inverse`, body: R`\(f^{-1}\) exists only if \(f\) is a bijection (one-one and onto). To find it, swap \(x\) and \(y\) in \(y = f(x)\) and solve for \(y\).` }
      ],
      formulas: [
        R`\(n(A\cup B) = n(A) + n(B) - n(A\cap B)\)`,
        R`\(n(A\cup B\cup C) = \sum n(A) - \sum n(A\cap B) + n(A\cap B\cap C)\)`,
        R`De Morgan: \((A\cup B)' = A'\cap B'\), \((A\cap B)' = A'\cup B'\)`,
        R`Onto functions from an \(m\)-set to a 2-set: \(2^m - 2\)`
      ],
      examples: [
        { topic: R`Sets & their representation`, level: 'Main', q: R`Write \(\{x : x \text{ is a prime number less than } 12\}\) in roster form, and \(\{1, 4, 9, 16, 25\}\) in set-builder form.`,
          steps: [R`The primes below 12 are 2, 3, 5, 7, 11.`, R`The second set is the squares of 1 to 5.`],
          ans: R`\(\{2, 3, 5, 7, 11\}\); \(\{x^2 : x\in\mathbb N,\ x \le 5\}\)` },
        { topic: R`Union, intersection & complement`, level: 'Main', q: R`In a class of 50, 30 students like Maths, 25 like Physics and 10 like both. How many like neither?`,
          steps: [R`\(n(M\cup P) = 30 + 25 - 10 = 45\).`, R`Neither \(= 50 - 45\).`],
          ans: R`5` },
        { topic: R`Power set`, level: 'Main', q: R`List the power set of \(\{a, b, c\}\). If \(n(P(A)) = 64\), find \(n(A)\).`,
          steps: [R`\(P = \{\varnothing, \{a\}, \{b\}, \{c\}, \{a,b\}, \{b,c\}, \{a,c\}, \{a,b,c\}\}\), which has \(2^3 = 8\) elements.`, R`\(2^n = 64\).`],
          ans: R`8 subsets; \(n(A) = 6\)` },
        { topic: R`Relations: reflexive, symmetric, transitive, equivalence`, level: 'Main', q: R`How many relations are there on a set with 3 elements?`,
          steps: [R`A relation on A is any subset of \(A\times A\), which has \(3\times3 = 9\) elements.`, R`Number of subsets \(= 2^9\).`],
          ans: R`512` },
        { topic: R`Functions: one-one, into & onto`, level: 'Main', q: R`Is \(f : \mathbb R\to\mathbb R\), \(f(x) = x^2\) one-one? Is it onto? What about \(g(x) = 2x + 3\)?`,
          steps: [R`\(f(1) = f(-1)\), so \(f\) is not one-one. Negative numbers have no pre-image, so it is not onto.`, R`\(g(a) = g(b)\) forces \(a = b\), and every \(y\) has the pre-image \((y - 3)/2\).`],
          ans: R`\(f\) is neither one-one nor onto. \(g\) is a bijection.` },
        { topic: R`Composition of functions`, level: 'Main', q: R`For \(f(x) = x^2\) and \(g(x) = 2x + 1\), find \(f\circ g\) and \(g\circ f\).`,
          steps: [R`\(f(g(x)) = (2x + 1)^2\).`, R`\(g(f(x)) = 2x^2 + 1\).`],
          ans: R`\((2x + 1)^2\) and \(2x^2 + 1\). They are different, so composition is not commutative.` },
        { topic: R`Inverse of a function`, level: 'Main', q: R`Find the inverse of \(f(x) = \dfrac{2x + 1}{x - 3}\), \(x \ne 3\).`,
          steps: [R`\(y(x - 3) = 2x + 1\), so \(x(y - 2) = 3y + 1\).`, R`\(x = \dfrac{3y + 1}{y - 2}\).`],
          ans: R`\(f^{-1}(x) = \dfrac{3x + 1}{x - 2}\), \(x \ne 2\)` },
        { topic: R`Domain & range`, level: 'Main', q: R`Find the domain of \(f(x) = \dfrac{\sqrt{x - 2}}{x - 5}\).`,
          steps: [R`The square root needs \(x \ge 2\).`, R`The denominator must not be zero, so \(x \ne 5\).`],
          ans: R`\([2, 5)\cup(5, \infty)\)` }
      ],
      practice: [
        { q: R`How many functions are there from a 3-element set to a 2-element set? How many of them are onto?`, ans: R`\(2^3 = 8\) functions, of which \(8 - 2 = 6\) are onto` },
        { q: R`Find the inverse of \(f(x) = 2x + 3\).`, ans: R`\(f^{-1}(x) = \dfrac{x - 3}{2}\)` }
      ]
    },
    {
      id: 'complex-quadratic', title: 'Complex Numbers and Quadratic Equations', cls: 11,
      syllabus: [R`Complex numbers as ordered pairs`, R`Algebra of complex numbers`, R`Argand diagram`, R`Modulus & argument`, R`Polar form`, R`Cube roots of unity`, R`Quadratic equations in real & complex systems`, R`Relations between roots & coefficients`, R`Nature of roots`, R`Formation of quadratic equations`],
      concepts: [
        { h: R`Polar form`, body: R`\(z = r(\cos\theta + i\sin\theta) = re^{i\theta}\). When complex numbers are multiplied, their moduli multiply and their arguments add.` },
        { h: R`Cube roots of unity`, body: R`They are \(1, \omega, \omega^2\), with \(\omega = \dfrac{-1 + i\sqrt3}{2}\), \(1 + \omega + \omega^2 = 0\) and \(\omega^3 = 1\).` },
        { h: R`Nature of roots`, body: R`For \(ax^2 + bx + c = 0\): if \(D = b^2 - 4ac > 0\), the roots are real and distinct; if \(D = 0\), they are equal; if \(D < 0\), they are complex conjugates.` }
      ],
      formulas: [
        R`\(|z| = \sqrt{a^2 + b^2}\), \(z\bar z = |z|^2\), \(|z_1z_2| = |z_1||z_2|\)`,
        R`\(\alpha + \beta = -\dfrac ba,\quad \alpha\beta = \dfrac ca\)`,
        R`\(\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta\)`,
        R`De Moivre: \((\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta\)`,
        R`\(i^{4k} = 1,\ i^{4k+1} = i,\ i^{4k+2} = -1,\ i^{4k+3} = -i\)`
      ],
      examples: [
        { topic: R`Complex numbers as ordered pairs`, level: 'Main', q: R`Treating complex numbers as ordered pairs, find \((1, 2)\cdot(3, 4)\). Check it with \(a + ib\) form.`,
          steps: [R`\((a, b)(c, d) = (ac - bd,\ ad + bc) = (3 - 8,\ 4 + 6)\).`, R`\((1 + 2i)(3 + 4i) = 3 + 10i + 8i^2 = -5 + 10i\) ✓`],
          ans: R`\((-5, 10)\)` },
        { topic: R`Algebra of complex numbers`, level: 'Main', q: R`Write \(\dfrac{3 + 2i}{1 - i}\) in the form \(a + ib\).`,
          steps: [R`Multiply the top and bottom by \(1 + i\): \(\dfrac{(3 + 2i)(1 + i)}{2}\).`, R`\(= \dfrac{3 + 5i - 2}{2}\).`],
          ans: R`\(\dfrac12 + \dfrac52i\)` },
        { topic: R`Argand diagram`, level: 'Main', q: R`On the Argand plane, what is the locus of \(z\) with \(|z - 1| = |z + 1|\)?`,
          steps: [R`\(z\) is equally far from the points 1 and \(-1\).`, R`So it lies on the perpendicular bisector of the segment joining them.`],
          ans: R`The imaginary axis, \(x = 0\)` },
        { topic: R`Modulus & argument`, level: 'Main', q: R`Find the modulus and argument of \(1 + i\sqrt3\).`,
          steps: [R`\(r = \sqrt{1 + 3} = 2\).`, R`\(\tan\theta = \sqrt3\), and the point is in the first quadrant, so \(\theta = \pi/3\).`],
          ans: R`\(|z| = 2\), \(\arg z = \pi/3\)` },
        { topic: R`Polar form`, level: 'Main', q: R`Write \(-1 + i\) in polar form, and find \((1 + i)^8\).`,
          steps: [R`\(|-1 + i| = \sqrt2\), and the point is in the 2nd quadrant, so \(\arg = 3\pi/4\).`, R`\(1 + i = \sqrt2 e^{i\pi/4}\), so by De Moivre \((1 + i)^8 = 16e^{i2\pi}\).`],
          ans: R`\(\sqrt2\left(\cos\frac{3\pi}4 + i\sin\frac{3\pi}4\right)\); \((1 + i)^8 = 16\)` },
        { topic: R`Cube roots of unity`, level: 'Main', q: R`Evaluate \((1 + \omega - \omega^2)(1 - \omega + \omega^2)\).`,
          steps: [R`\(1 + \omega = -\omega^2\), so the first bracket is \(-2\omega^2\).`, R`\(1 + \omega^2 = -\omega\), so the second bracket is \(-2\omega\).`, R`Product \(= 4\omega^3\).`],
          ans: R`4` },
        { topic: R`Quadratic equations in real & complex systems`, level: 'Main', q: R`Solve \(x^2 + 2x + 5 = 0\).`,
          steps: [R`\(D = 4 - 20 = -16\).`, R`\(x = \dfrac{-2 \pm 4i}{2}\).`],
          ans: R`\(x = -1 \pm 2i\)` },
        { topic: R`Relations between roots & coefficients`, level: 'Main', q: R`If \(\alpha\) and \(\beta\) are the roots of \(x^2 - 5x + 6 = 0\), find \(\alpha^2 + \beta^2\).`,
          steps: [R`\(\alpha + \beta = 5\), \(\alpha\beta = 6\).`, R`\(\alpha^2 + \beta^2 = 25 - 12\).`],
          ans: R`13` },
        { topic: R`Nature of roots`, level: 'Main', q: R`For what values of \(k\) does \(x^2 - 4x + k = 0\) have real, distinct roots?`,
          steps: [R`We need \(D > 0\): \(16 - 4k > 0\).`],
          ans: R`\(k < 4\)` },
        { topic: R`Formation of quadratic equations`, level: 'Main', q: R`Form the quadratic equation whose roots are \(2 + \sqrt3\) and \(2 - \sqrt3\).`,
          steps: [R`Sum \(= 4\). Product \(= 4 - 3 = 1\).`, R`\(x^2 - (\text{sum})x + \text{product} = 0\).`],
          ans: R`\(x^2 - 4x + 1 = 0\)` }
      ],
      practice: [
        { q: R`Simplify \(i^{2026}\).`, ans: R`\(2026 = 4(506) + 2\), so \(i^{2026} = -1\)` },
        { q: R`For what values of \(k\) does \(x^2 + kx + 9 = 0\) have equal roots?`, ans: R`\(k^2 - 36 = 0\), so \(k = \pm6\)` }
      ]
    },
    {
      id: 'matrices-determinants', title: 'Matrices and Determinants', cls: 12,
      syllabus: [R`Matrices: algebra, types`, R`Determinants of order 2 & 3`, R`Evaluation & properties of determinants`, R`Area of a triangle using determinants`, R`Adjoint & inverse of a square matrix`, R`Solving simultaneous linear equations using determinants & matrices`],
      concepts: [
        { h: R`Properties of determinants`, body: R`Swapping two rows changes the sign. Two identical rows give 0. Adding a multiple of one row to another changes nothing. \(|AB| = |A||B|\).` },
        { h: R`Inverse`, body: R`\(A^{-1} = \dfrac{\text{adj}A}{|A|}\), which exists only when \(|A| \ne 0\) (the matrix is non-singular).` },
        { h: R`Consistency of (AX = B)`, body: R`If \(|A| \ne 0\), there is a unique solution. If \(|A| = 0\) and \((\text{adj}A)B \ne 0\), there is no solution. If both are zero, there are infinitely many solutions or none.` }
      ],
      formulas: [
        R`For \(n\times n\) matrices: \(|kA| = k^n|A|\), \(|\text{adj}A| = |A|^{n-1}\), \(|A^{-1}| = \dfrac{1}{|A|}\)`,
        R`\((AB)^{-1} = B^{-1}A^{-1}\), \((AB)^T = B^TA^T\)`,
        R`Area of a triangle \(= \tfrac12\left|\begin{smallmatrix}x_1 & y_1 & 1\\ x_2 & y_2 & 1\\ x_3 & y_3 & 1\end{smallmatrix}\right|\)`,
        R`Cramer: \(x = \dfrac{\Delta_1}{\Delta}, y = \dfrac{\Delta_2}{\Delta}, z = \dfrac{\Delta_3}{\Delta}\)`
      ],
      examples: [
        { topic: R`Matrices: algebra, types`, level: 'Main', q: R`For \(A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}\) and \(B = \begin{pmatrix}0 & 1\\ 1 & 0\end{pmatrix}\), find \(AB\) and \(BA\).`,
          steps: [R`\(AB = \begin{pmatrix}2 & 1\\ 4 & 3\end{pmatrix}\): multiplying by \(B\) on the right swaps the columns.`, R`\(BA = \begin{pmatrix}3 & 4\\ 1 & 2\end{pmatrix}\): multiplying by \(B\) on the left swaps the rows.`],
          ans: R`\(AB \ne BA\): matrix multiplication is not commutative.` },
        { topic: R`Determinants of order 2 & 3`, level: 'Main', q: R`Evaluate \(\begin{vmatrix}1 & 2 & 3\\ 0 & 1 & 4\\ 5 & 6 & 0\end{vmatrix}\).`,
          steps: [R`Expand along row 1: \(1(0 - 24) - 2(0 - 20) + 3(0 - 5)\).`, R`\(= -24 + 40 - 15\).`],
          ans: R`1` },
        { topic: R`Evaluation & properties of determinants`, level: 'Main', q: R`\(A\) is a \(3\times3\) matrix with \(|A| = 2\). Find \(|3A|\) and \(|\text{adj}A|\).`,
          steps: [R`\(|3A| = 3^3\cdot2 = 54\).`, R`\(|\text{adj}A| = |A|^{2} = 4\).`],
          ans: R`54 and 4` },
        { topic: R`Area of a triangle using determinants`, level: 'Main', q: R`Find the area of the triangle with vertices \((1, 0)\), \((6, 0)\) and \((4, 3)\).`,
          steps: [R`Area \(= \tfrac12|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|\).`, R`\(= \tfrac12|1(0 - 3) + 6(3 - 0) + 4(0)| = \tfrac12(15)\).`],
          ans: R`7.5 square units` },
        { topic: R`Adjoint & inverse of a square matrix`, level: 'Main', q: R`Find the inverse of \(A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}\).`,
          steps: [R`\(|A| = 4 - 6 = -2\).`, R`\(\text{adj}A = \begin{pmatrix}4 & -2\\ -3 & 1\end{pmatrix}\).`, R`\(A^{-1} = -\tfrac12\,\text{adj}A\).`],
          ans: R`\(\begin{pmatrix}-2 & 1\\ 3/2 & -1/2\end{pmatrix}\)` },
        { topic: R`Solving simultaneous linear equations using determinants & matrices`, level: 'Main', q: R`Solve \(x + y = 3\), \(2x - y = 0\) by Cramer's rule.`,
          steps: [R`\(\Delta = \begin{vmatrix}1 & 1\\ 2 & -1\end{vmatrix} = -3\).`, R`\(\Delta_x = \begin{vmatrix}3 & 1\\ 0 & -1\end{vmatrix} = -3\); \(\Delta_y = \begin{vmatrix}1 & 3\\ 2 & 0\end{vmatrix} = -6\).`],
          ans: R`\(x = 1\), \(y = 2\)` }
      ],
      practice: [
        { q: R`If \(A\) is skew-symmetric of odd order, what is \(|A|\)?`, ans: R`0` },
        { q: R`For which \(k\) does \(x + 2y = 3,\ 2x + ky = 6\) have infinitely many solutions?`, ans: R`\(k = 4\) (the two equations are then multiples of each other)` }
      ]
    },
    {
      id: 'permutations-combinations', title: 'Permutations and Combinations', cls: 11,
      syllabus: [R`Fundamental principle of counting`, R`Permutation as an arrangement`, R`Combination as a selection`, R`Meaning of P(n, r) and C(n, r)`, R`Simple applications`],
      concepts: [
        { h: R`Arrange or select?`, body: R`If the order matters, use permutations. If only the choice matters, use combinations. For "at least one" problems, subtract the unwanted cases from the total.` },
        { h: R`Repeated objects`, body: R`\(n\) objects where \(p\) are alike, \(q\) are alike, and so on, can be arranged in \(\dfrac{n!}{p!\,q!\dots}\) ways.` },
        { h: R`Circular arrangements`, body: R`\(n\) different objects can be arranged in a circle in \((n - 1)!\) ways, or \(\dfrac{(n-1)!}{2}\) if clockwise and anticlockwise count as the same (as with a necklace).` }
      ],
      formulas: [
        R`\({}^nP_r = \dfrac{n!}{(n - r)!},\quad {}^nC_r = \dfrac{n!}{r!(n - r)!}\)`,
        R`\({}^nC_r = {^nC_{n-r}},\quad {}^nC_r + {^nC_{r-1}} = {^{n+1}C_r}\)`,
        R`Diagonals of an \(n\)-gon: \(\dfrac{n(n - 3)}{2}\)`,
        R`Distributing \(n\) identical items among \(r\) people: \({}^{n+r-1}C_{r-1}\)`
      ],
      examples: [
        { topic: R`Fundamental principle of counting`, level: 'Main', q: R`How many 3-digit numbers have all their digits different?`,
          steps: [R`The hundreds digit can be 1–9: 9 ways.`, R`The tens digit can be any other digit, including 0: 9 ways. The units digit: 8 ways.`],
          ans: R`\(9\times9\times8 = 648\)` },
        { topic: R`Permutation as an arrangement`, level: 'Main', q: R`How many arrangements of the letters of LETTER are there?`,
          steps: [R`6 letters, with E repeated twice and T repeated twice.`, R`\(\dfrac{6!}{2!\,2!} = \dfrac{720}{4}\).`],
          ans: R`180` },
        { topic: R`Combination as a selection`, level: 'Main', q: R`A committee of 3 is chosen from 5 men and 4 women. How many committees have at least one woman?`,
          steps: [R`Total \(= {^9C_3} = 84\).`, R`All-men committees \(= {^5C_3} = 10\).`, R`Subtract: \(84 - 10\).`],
          ans: R`74` },
        { topic: R`Meaning of P(n, r) and C(n, r)`, level: 'Main', q: R`Find \(n\) if \({}^nP_2 = 56\). How are \({}^nP_r\) and \({}^nC_r\) related?`,
          steps: [R`\(n(n - 1) = 56\), so \(n = 8\).`, R`Each selection of \(r\) items can be arranged in \(r!\) ways.`],
          ans: R`\(n = 8\); \({}^nP_r = r!\cdot{}^nC_r\)` },
        { topic: R`Simple applications`, level: 'Main', q: R`In how many ways can the letters of DAUGHTER be arranged so that the vowels are always together?`,
          steps: [R`The vowels A, U, E form one block. That leaves 5 consonants + 1 block = 6 units: \(6!\) ways.`, R`The vowels can be arranged within the block in \(3!\) ways.`],
          ans: R`\(720\times6 = 4320\)` }
      ],
      practice: [
        { q: R`In how many ways can 6 people sit at a round table?`, ans: R`\(5! = 120\)` },
        { q: R`How many diagonals does a decagon have?`, ans: R`\(\dfrac{10\times7}{2} = 35\)` }
      ]
    },
    {
      id: 'binomial-theorem', title: 'Binomial Theorem', cls: 11,
      syllabus: [R`Binomial theorem for a positive integral index`, R`General term & middle term`, R`Simple applications`],
      concepts: [
        { h: R`General term`, body: R`In \((a + b)^n\), the term \(T_{r+1} = {^nC_r}\,a^{n-r}b^r\). To find a particular power of \(x\), write \(T_{r+1}\), set the power of \(x\) equal to the required value, and solve for \(r\).` },
        { h: R`Middle term`, body: R`If \(n\) is even, there is one middle term, \(T_{n/2 + 1}\). If \(n\) is odd, there are two: \(T_{(n+1)/2}\) and \(T_{(n+3)/2}\).` },
        { h: R`Sums of coefficients`, body: R`Put \(x = 1\) to get the sum of all coefficients. Put \(x = -1\) to get (sum of even-position coefficients) − (sum of odd-position coefficients).` }
      ],
      formulas: [
        R`\((a + b)^n = \sum_{r=0}^{n}{^nC_r}\,a^{n-r}b^r\)`,
        R`\(\sum {^nC_r} = 2^n,\quad {^nC_0} + {^nC_2} + \dots = 2^{n-1}\)`,
        R`Greatest coefficient: \({}^nC_{n/2}\) (\(n\) even)`
      ],
      examples: [
        { topic: R`Binomial theorem for a positive integral index`, level: 'Main', q: R`Expand \((x + 2)^4\).`,
          steps: [R`The coefficients \({}^4C_r\) are 1, 4, 6, 4, 1.`, R`\(x^4 + 4x^3(2) + 6x^2(4) + 4x(8) + 16\).`],
          ans: R`\(x^4 + 8x^3 + 24x^2 + 32x + 16\)` },
        { topic: R`General term & middle term`, level: 'Main', q: R`Find the term independent of \(x\) in \(\left(x^2 + \dfrac1x\right)^9\).`,
          steps: [R`\(T_{r+1} = {^9C_r}(x^2)^{9-r}x^{-r} = {^9C_r}x^{18 - 3r}\).`, R`Set \(18 - 3r = 0\), so \(r = 6\).`, R`\({}^9C_6 = 84\).`],
          ans: R`84` },
        { topic: R`General term & middle term`, level: 'Main', q: R`Find the middle term of \(\left(x + \dfrac1x\right)^8\).`,
          steps: [R`\(n = 8\), so the middle term is \(T_5\) (\(r = 4\)).`, R`\(T_5 = {^8C_4}x^4x^{-4}\).`],
          ans: R`70` },
        { topic: R`Simple applications`, level: 'Main', q: R`Find the remainder when \(2^{30}\) is divided by 7.`,
          steps: [R`\(2^{30} = 8^{10} = (7 + 1)^{10}\).`, R`Every term of the expansion except the last contains a factor of 7. The last term is 1.`],
          ans: R`1` }
      ],
      practice: [
        { q: R`Find the coefficient of \(x^5\) in \((1 + x)^{10}\).`, ans: R`\({}^{10}C_5 = 252\)` },
        { q: R`Find the sum of the coefficients of \((2x - 1)^5\).`, ans: R`Put \(x = 1\): \(1^5 = 1\)` }
      ]
    },
    {
      id: 'sequences-series', title: 'Sequences and Series', cls: 11,
      syllabus: [R`Arithmetic progression & geometric progression`, R`Insertion of arithmetic & geometric means between two numbers`, R`Relation between AM & GM`],
      concepts: [
        { h: R`Choosing terms smartly`, body: R`For three numbers in AP, take \(a - d,\ a,\ a + d\). For three in GP, take \(a/r,\ a,\ ar\). The sums or products then come out neatly.` },
        { h: R`AM ≥ GM`, body: R`For positive numbers, \(\dfrac{a + b}{2} \ge \sqrt{ab}\), with equality only when \(a = b\). This is often used to find minimum or maximum values.` },
        { h: R`Infinite GP`, body: R`An infinite GP has a finite sum only when \(|r| < 1\).` }
      ],
      formulas: [
        R`AP: \(a_n = a + (n - 1)d\), \(S_n = \dfrac n2[2a + (n - 1)d]\)`,
        R`GP: \(a_n = ar^{n-1}\), \(S_n = \dfrac{a(r^n - 1)}{r - 1}\), \(S_\infty = \dfrac{a}{1 - r}\)`,
        R`\(\sum n = \dfrac{n(n+1)}2,\ \sum n^2 = \dfrac{n(n+1)(2n+1)}{6},\ \sum n^3 = \left[\dfrac{n(n+1)}2\right]^2\)`,
        R`AM ≥ GM ≥ HM; for two numbers, \(G^2 = AH\)`
      ],
      examples: [
        { topic: R`Arithmetic progression & geometric progression`, level: 'Main', q: R`Find the sum \(1 + \dfrac12 + \dfrac14 + \dots\) to infinity.`,
          steps: [R`This is a GP with \(a = 1\), \(r = 1/2\).`, R`\(S_\infty = \dfrac{1}{1 - 1/2}\).`],
          ans: R`2` },
        { topic: R`Arithmetic progression & geometric progression`, level: 'Main', q: R`Find the sum of the first 20 terms of the AP 2, 5, 8, …`,
          steps: [R`\(a = 2\), \(d = 3\).`, R`\(S_{20} = \dfrac{20}{2}[2(2) + 19(3)] = 10(61)\).`],
          ans: R`610` },
        { topic: R`Insertion of arithmetic & geometric means between two numbers`, level: 'Main', q: R`Insert 3 arithmetic means between 3 and 19, and 2 geometric means between 2 and 54.`,
          steps: [R`AP: 19 is the 5th term, so \(3 + 4d = 19\), giving \(d = 4\).`, R`GP: 54 is the 4th term, so \(2r^3 = 54\), giving \(r = 3\).`],
          ans: R`AMs: 7, 11, 15. GMs: 6, 18.` },
        { topic: R`Relation between AM & GM`, level: 'Main', q: R`Find the minimum value of \(x + \dfrac1x\) for \(x > 0\).`,
          steps: [R`AM ≥ GM: \(\dfrac{x + 1/x}{2} \ge \sqrt{x\cdot\frac1x} = 1\).`, R`Equality holds when \(x = 1\).`],
          ans: R`2` }
      ],
      practice: [
        { q: R`Find \(1^2 + 2^2 + \dots + 10^2\).`, ans: R`\(\dfrac{10\cdot11\cdot21}{6} = 385\)` },
        { q: R`The 3rd term of an AP is 7 and the 7th term is 15. Find the first term and the common difference.`, ans: R`\(4d = 8\), so \(d = 2\) and \(a = 3\)` }
      ]
    },
    {
      id: 'trigonometry', title: 'Trigonometry', cls: 11,
      syllabus: [R`Trigonometric identities`, R`Trigonometric functions`, R`Inverse trigonometric functions & their properties`, R`Trigonometric equations`],
      concepts: [
        { h: R`Range of (asin x + bcos x)`, body: R`It always lies between \(-\sqrt{a^2 + b^2}\) and \(\sqrt{a^2 + b^2}\).` },
        { h: R`General solutions`, body: R`If \(\sin x = \sin\alpha\), then \(x = n\pi + (-1)^n\alpha\). If \(\cos x = \cos\alpha\), then \(x = 2n\pi \pm \alpha\). If \(\tan x = \tan\alpha\), then \(x = n\pi + \alpha\).` },
        { h: R`Principal values`, body: R`\(\sin^{-1}\) gives values in \([-\pi/2, \pi/2]\), \(\cos^{-1}\) in \([0, \pi]\) and \(\tan^{-1}\) in \((-\pi/2, \pi/2)\).` }
      ],
      formulas: [
        R`\(\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B\)`,
        R`\(\cos2A = \cos^2A - \sin^2A = 1 - 2\sin^2A = 2\cos^2A - 1\)`,
        R`\(\tan(A + B) = \dfrac{\tan A + \tan B}{1 - \tan A\tan B}\)`,
        R`\(\sin^{-1}x + \cos^{-1}x = \dfrac\pi2\); \(\tan^{-1}x + \tan^{-1}y = \tan^{-1}\dfrac{x + y}{1 - xy}\) (\(xy < 1\))`,
        R`Sine rule: \(\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}\); cosine rule: \(c^2 = a^2 + b^2 - 2ab\cos C\)`
      ],
      examples: [
        { topic: R`Trigonometric identities`, level: 'Main', q: R`Find the value of \(\sin75^\circ\).`,
          steps: [R`\(\sin(45^\circ + 30^\circ) = \sin45^\circ\cos30^\circ + \cos45^\circ\sin30^\circ\).`, R`\(= \dfrac{1}{\sqrt2}\cdot\dfrac{\sqrt3}{2} + \dfrac{1}{\sqrt2}\cdot\dfrac12\).`],
          ans: R`\(\dfrac{\sqrt6 + \sqrt2}{4}\)` },
        { topic: R`Trigonometric functions`, level: 'Main', q: R`Find the period of \(\sin3x + \cos2x\), and the range of \(2 + 3\sin x\).`,
          steps: [R`The two periods are \(2\pi/3\) and \(\pi\). Their LCM is \(2\pi\).`, R`\(\sin x\) ranges over \([-1, 1]\), so \(2 + 3\sin x\) ranges over \([-1, 5]\).`],
          ans: R`Period \(2\pi\); range \([-1, 5]\)` },
        { topic: R`Inverse trigonometric functions & their properties`, level: 'Advanced', q: R`Prove that \(\tan^{-1}1 + \tan^{-1}2 + \tan^{-1}3 = \pi\).`,
          steps: [R`\(\tan^{-1}2 + \tan^{-1}3\): here \(xy = 6 > 1\) with both positive, so it equals \(\pi + \tan^{-1}\dfrac{5}{1 - 6} = \pi - \dfrac\pi4\).`, R`Add \(\tan^{-1}1 = \dfrac\pi4\).`],
          ans: R`\(\dfrac\pi4 + \dfrac{3\pi}{4} = \pi\)` },
        { topic: R`Trigonometric equations`, level: 'Main', q: R`Solve \(2\cos^2x + 3\sin x = 0\) for \(x\in[0, 2\pi]\).`,
          steps: [R`Replace \(\cos^2x\) with \(1 - \sin^2x\): \(2\sin^2x - 3\sin x - 2 = 0\).`, R`\((2\sin x + 1)(\sin x - 2) = 0\). \(\sin x = 2\) is impossible, so \(\sin x = -\tfrac12\).`],
          ans: R`\(x = \dfrac{7\pi}{6}, \dfrac{11\pi}{6}\)` }
      ],
      practice: [
        { q: R`Find the maximum value of \(3\sin x + 4\cos x\).`, ans: R`\(\sqrt{9 + 16} = 5\)` },
        { q: R`Find the general solution of \(\sin x = \dfrac12\).`, ans: R`\(x = n\pi + (-1)^n\dfrac\pi6\), \(n\in\mathbb Z\)` }
      ]
    },
    {
      id: 'limits-continuity-differentiability', title: 'Limits, Continuity and Differentiability', cls: 12,
      syllabus: [R`Real-valued functions, algebra of functions`, R`Polynomial, rational, trigonometric, logarithmic & exponential functions`, R`Inverse functions & graphs of simple functions`, R`Limits, continuity & differentiability`, R`Differentiation of sum, difference, product & quotient`, R`Derivatives of trigonometric, inverse trigonometric, logarithmic, exponential, composite & implicit functions`, R`Derivatives up to order two`, R`Applications: rate of change, monotonic functions, maxima & minima of functions of one variable`],
      concepts: [
        { h: R`Continuity and differentiability`, body: R`\(f\) is continuous at \(a\) when the left limit, right limit and \(f(a)\) are all equal. A differentiable function is always continuous, but a continuous one need not be differentiable (\(|x|\) at 0 is the classic example).` },
        { h: R`Indeterminate forms`, body: R`For \(0/0\) or \(\infty/\infty\), factorise, rationalise, use the standard limits, or apply L'Hôpital's rule. For \(1^\infty\), use \(\lim f^g = e^{\lim g(f - 1)}\).` },
        { h: R`Maxima and minima`, body: R`Solve \(f'(x) = 0\) to find the critical points. If \(f'' < 0\) there, the point is a local maximum. If \(f'' > 0\), it is a local minimum.` }
      ],
      formulas: [
        R`\(\displaystyle\lim_{x\to0}\frac{\sin x}{x} = 1,\ \lim_{x\to0}\frac{e^x - 1}{x} = 1,\ \lim_{x\to0}\frac{\ln(1 + x)}{x} = 1,\ \lim_{x\to a}\frac{x^n - a^n}{x - a} = na^{n-1}\)`,
        R`\((uv)' = u'v + uv'\), \(\left(\dfrac uv\right)' = \dfrac{u'v - uv'}{v^2}\), chain rule: \(\dfrac{dy}{dx} = \dfrac{dy}{du}\dfrac{du}{dx}\)`,
        R`\(\dfrac{d}{dx}\tan^{-1}x = \dfrac{1}{1 + x^2},\ \dfrac{d}{dx}\sin^{-1}x = \dfrac{1}{\sqrt{1 - x^2}}\)`,
        R`Tangent at \((x_1, y_1)\): \(y - y_1 = f'(x_1)(x - x_1)\)`
      ],
      examples: [
        { topic: R`Real-valued functions, algebra of functions`, level: 'Main', q: R`For \(f(x) = x + 1\) and \(g(x) = x - 1\), find \(fg\) and \(f/g\), with domains.`,
          steps: [R`\((fg)(x) = x^2 - 1\), for all real \(x\).`, R`\((f/g)(x) = \dfrac{x + 1}{x - 1}\), which needs \(g(x) \ne 0\).`],
          ans: R`\(x^2 - 1\) on \(\mathbb R\); \(\dfrac{x + 1}{x - 1}\) on \(\mathbb R - \{1\}\)` },
        { topic: R`Polynomial, rational, trigonometric, logarithmic & exponential functions`, level: 'Main', q: R`Find the domain of \(f(x) = \log(x^2 - 5x + 6)\).`,
          steps: [R`A logarithm needs a positive argument: \((x - 2)(x - 3) > 0\).`],
          ans: R`\(x < 2\) or \(x > 3\), that is \((-\infty, 2)\cup(3, \infty)\)` },
        { topic: R`Inverse functions & graphs of simple functions`, level: 'Main', q: R`Find the inverse of \(f(x) = \log_2(x - 1)\), \(x > 1\). How are the graphs of \(f\) and \(f^{-1}\) related?`,
          steps: [R`\(y = \log_2(x - 1)\), so \(x = 2^y + 1\).`, R`Swap \(x\) and \(y\).`],
          ans: R`\(f^{-1}(x) = 2^x + 1\). The graphs are mirror images in the line \(y = x\).` },
        { topic: R`Limits, continuity & differentiability`, level: 'Main', q: R`\(f(x) = kx + 1\) for \(x \le 2\) and \(3x - 1\) for \(x > 2\). Find \(k\) so that \(f\) is continuous at 2. Is \(f\) then differentiable at 2?`,
          steps: [R`Continuity: \(2k + 1 = 3(2) - 1 = 5\), so \(k = 2\).`, R`Left-hand derivative \(= k = 2\). Right-hand derivative \(= 3\).`],
          ans: R`\(k = 2\). It is not differentiable at 2: the graph has a corner there.` },
        { topic: R`Differentiation of sum, difference, product & quotient`, level: 'Main', q: R`Differentiate (a) \(x^2\sin x\) (b) \(\dfrac{x}{1 + x^2}\).`,
          steps: [R`(a) Product rule: \(2x\sin x + x^2\cos x\).`, R`(b) Quotient rule: \(\dfrac{(1 + x^2) - x(2x)}{(1 + x^2)^2}\).`],
          ans: R`(a) \(2x\sin x + x^2\cos x\) (b) \(\dfrac{1 - x^2}{(1 + x^2)^2}\)` },
        { topic: R`Derivatives of trigonometric, inverse trigonometric, logarithmic, exponential, composite & implicit functions`, level: 'Main', q: R`Differentiate \(y = x^x\).`,
          steps: [R`Take logs: \(\ln y = x\ln x\).`, R`Differentiate: \(\dfrac{1}{y}\dfrac{dy}{dx} = \ln x + 1\).`],
          ans: R`\(\dfrac{dy}{dx} = x^x(1 + \ln x)\)` },
        { topic: R`Derivatives up to order two`, level: 'Advanced', q: R`For \(x = at^2\), \(y = 2at\), find \(\dfrac{dy}{dx}\) and \(\dfrac{d^2y}{dx^2}\).`,
          steps: [R`\(\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt} = \dfrac{2a}{2at} = \dfrac1t\).`, R`\(\dfrac{d^2y}{dx^2} = \dfrac{d}{dt}\left(\dfrac1t\right)\Big/\dfrac{dx}{dt} = \dfrac{-1/t^2}{2at}\).`],
          ans: R`\(\dfrac1t\) and \(-\dfrac{1}{2at^3}\)` },
        { topic: R`Applications: rate of change, monotonic functions, maxima & minima of functions of one variable`, level: 'Main', q: R`Find the local maximum and minimum values of \(f(x) = x^3 - 3x\).`,
          steps: [R`\(f'(x) = 3x^2 - 3 = 0\), so \(x = \pm1\).`, R`\(f''(x) = 6x\): \(f''(-1) < 0\) gives a maximum and \(f''(1) > 0\) gives a minimum.`, R`\(f(-1) = 2\), \(f(1) = -2\).`],
          ans: R`Local maximum 2 at \(x = -1\); local minimum −2 at \(x = 1\)` }
      ],
      practice: [
        { q: R`Evaluate \(\displaystyle\lim_{x\to2}\frac{x^2 - 4}{x - 2}\).`, ans: R`4` },
        { q: R`Find the equation of the tangent to \(y = x^2\) at \((1, 1)\).`, ans: R`The slope is 2, so the tangent is \(y = 2x - 1\).` }
      ]
    },
    {
      id: 'integral-calculus', title: 'Integral Calculus', cls: 12,
      syllabus: [R`Integral as an anti-derivative`, R`Fundamental integrals (algebraic, trigonometric, exponential, logarithmic)`, R`Integration by substitution, by parts & by partial fractions`, R`Integration using trigonometric identities`, R`Standard forms like \(\int\frac{dx}{x^2 \pm a^2}\), \(\int\frac{dx}{\sqrt{a^2 - x^2}}\)`, R`Fundamental theorem of calculus`, R`Properties of definite integrals`, R`Area under simple curves (lines, circles, parabolas, ellipses)`],
      concepts: [
        { h: R`Integration by parts`, body: R`\(\int uv\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx\). To choose \(u\), use ILATE order: Inverse trig, Log, Algebraic, Trig, Exponential.` },
        { h: R`Key properties of definite integrals`, body: R`\(\int_0^a f(x)dx = \int_0^a f(a - x)dx\) (the "King's property"). If \(f\) is odd, \(\int_{-a}^{a}f = 0\). If \(f\) is even, \(\int_{-a}^{a}f = 2\int_0^a f\).` },
        { h: R`Area between curves`, body: R`Area \(= \int_a^b [f(x) - g(x)]\,dx\), where \(f\) is the upper curve. The limits are where the curves meet.` }
      ],
      formulas: [
        R`\(\int x^n dx = \dfrac{x^{n+1}}{n+1} + C\), \(\int\dfrac{dx}{x} = \ln|x| + C\)`,
        R`\(\int\dfrac{dx}{x^2 + a^2} = \dfrac1a\tan^{-1}\dfrac xa + C\), \(\int\dfrac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\dfrac xa + C\)`,
        R`\(\int\dfrac{dx}{x^2 - a^2} = \dfrac{1}{2a}\ln\left|\dfrac{x - a}{x + a}\right| + C\)`,
        R`\(\int e^x[f(x) + f'(x)]dx = e^xf(x) + C\)`,
        R`\(\int_0^{\pi/2}\sin^n x\,dx = \int_0^{\pi/2}\cos^n x\,dx\)`
      ],
      examples: [
        { topic: R`Integral as an anti-derivative`, level: 'Main', q: R`Find \(f(x)\) if \(f'(x) = 3x^2 + 2\) and \(f(0) = 1\).`,
          steps: [R`\(f(x) = \int(3x^2 + 2)\,dx = x^3 + 2x + C\).`, R`\(f(0) = C = 1\).`],
          ans: R`\(f(x) = x^3 + 2x + 1\)` },
        { topic: R`Fundamental integrals (algebraic, trigonometric, exponential, logarithmic)`, level: 'Main', q: R`Evaluate \(\displaystyle\int\left(x^3 + \frac1x + e^x + \cos x\right)dx\).`,
          steps: [R`Integrate each term using the basic formulas.`],
          ans: R`\(\dfrac{x^4}{4} + \ln|x| + e^x + \sin x + C\)` },
        { topic: R`Integration by substitution, by parts & by partial fractions`, level: 'Main', q: R`Evaluate \(\int xe^x\,dx\).`,
          steps: [R`By parts with \(u = x\), \(v = e^x\).`, R`\(= xe^x - \int e^x\,dx = xe^x - e^x\).`],
          ans: R`\(e^x(x - 1) + C\)` },
        { topic: R`Integration by substitution, by parts & by partial fractions`, level: 'Main', q: R`Evaluate \(\displaystyle\int\frac{dx}{(x - 1)(x - 2)}\).`,
          steps: [R`Partial fractions: \(\dfrac{1}{(x - 1)(x - 2)} = \dfrac{1}{x - 2} - \dfrac{1}{x - 1}\).`, R`Integrate: \(\ln|x - 2| - \ln|x - 1|\).`],
          ans: R`\(\ln\left|\dfrac{x - 2}{x - 1}\right| + C\)` },
        { topic: R`Integration using trigonometric identities`, level: 'Main', q: R`Evaluate \(\int\sin^2x\,dx\).`,
          steps: [R`Use \(\sin^2x = \dfrac{1 - \cos2x}{2}\).`, R`\(\int = \dfrac x2 - \dfrac{\sin2x}{4}\).`],
          ans: R`\(\dfrac x2 - \dfrac{\sin2x}{4} + C\)` },
        { topic: R`Standard forms like \(\int\frac{dx}{x^2 \pm a^2}\), \(\int\frac{dx}{\sqrt{a^2 - x^2}}\)`, level: 'Main', q: R`Evaluate \(\displaystyle\int\frac{dx}{x^2 + 4x + 13}\).`,
          steps: [R`Complete the square: \(x^2 + 4x + 13 = (x + 2)^2 + 9\).`, R`Use \(\int\dfrac{dx}{u^2 + a^2} = \dfrac1a\tan^{-1}\dfrac ua\) with \(a = 3\).`],
          ans: R`\(\dfrac13\tan^{-1}\dfrac{x + 2}{3} + C\)` },
        { topic: R`Fundamental theorem of calculus`, level: 'Advanced', q: R`Find \(\dfrac{d}{dx}\displaystyle\int_0^{x^2}\sin t\,dt\).`,
          steps: [R`Fundamental theorem (Leibniz rule): \(\dfrac{d}{dx}\int_0^{g(x)}f(t)\,dt = f(g(x))\,g'(x)\).`, R`\(= \sin(x^2)\cdot2x\).`],
          ans: R`\(2x\sin(x^2)\)` },
        { topic: R`Properties of definite integrals`, level: 'Advanced', q: R`Evaluate \(\displaystyle\int_0^{\pi/2}\frac{\sin x}{\sin x + \cos x}\,dx\).`,
          steps: [R`Call the integral \(I\). Using \(x \to \pi/2 - x\): \(I = \int_0^{\pi/2}\dfrac{\cos x}{\cos x + \sin x}dx\).`, R`Add the two forms: \(2I = \int_0^{\pi/2}1\,dx = \dfrac\pi2\).`],
          ans: R`\(\dfrac\pi4\)` },
        { topic: R`Area under simple curves (lines, circles, parabolas, ellipses)`, level: 'Main', q: R`Find the area enclosed by the ellipse \(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1\).`,
          steps: [R`By symmetry, Area \(= 4\int_0^a\dfrac ba\sqrt{a^2 - x^2}\,dx\).`, R`\(\int_0^a\sqrt{a^2 - x^2}\,dx = \dfrac{\pi a^2}{4}\) (a quarter circle).`, R`Area \(= 4\cdot\dfrac ba\cdot\dfrac{\pi a^2}{4}\).`],
          ans: R`\(\pi ab\) (for a circle, \(a = b = r\) gives \(\pi r^2\))` }
      ],
      practice: [
        { q: R`Find the area enclosed between \(y = x^2\) and \(y = x\).`, ans: R`\(\int_0^1(x - x^2)dx = \tfrac12 - \tfrac13 = \tfrac16\)` },
        { q: R`Evaluate \(\int_0^\pi x\sin x\,dx\).`, ans: R`\([-x\cos x + \sin x]_0^\pi = \pi\)` }
      ]
    },
    {
      id: 'differential-equations', title: 'Differential Equations', cls: 12,
      syllabus: [R`Ordinary differential equations: order & degree`, R`Solution of differential equations by separation of variables`, R`Solution of homogeneous differential equations`, R`Linear differential equations of the form \(\frac{dy}{dx} + P(x)y = Q(x)\)`],
      concepts: [
        { h: R`Order and degree`, body: R`The order is that of the highest derivative. The degree is the power of that highest derivative once the equation is a polynomial in its derivatives. The degree is not defined when a derivative appears inside sin, log, and so on.` },
        { h: R`Homogeneous equations`, body: R`If \(\dfrac{dy}{dx} = F\left(\dfrac yx\right)\), substitute \(y = vx\). Then \(\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}\), and the variables separate.` },
        { h: R`Linear equations`, body: R`For \(\dfrac{dy}{dx} + Py = Q\), multiply through by the integrating factor \(e^{\int P\,dx}\). The left side becomes the derivative of \(y\cdot\text{IF}\).` }
      ],
      formulas: [
        R`Separable: \(\int g(y)\,dy = \int f(x)\,dx\)`,
        R`Linear: \(y\cdot\text{IF} = \int Q\cdot\text{IF}\,dx + C\), \(\text{IF} = e^{\int P\,dx}\)`,
        R`The number of arbitrary constants in the general solution equals the order`
      ],
      examples: [
        { topic: R`Ordinary differential equations: order & degree`, level: 'Main', q: R`Find the order and degree of \(\left(\dfrac{d^2y}{dx^2}\right)^3 + \left(\dfrac{dy}{dx}\right)^2 + y = 0\).`,
          steps: [R`The highest derivative is the second.`, R`Its power is 3.`],
          ans: R`Order 2, degree 3` },
        { topic: R`Solution of differential equations by separation of variables`, level: 'Main', q: R`Solve \(\dfrac{dy}{dx} = xy\) with \(y(0) = 1\).`,
          steps: [R`Separate the variables: \(\dfrac{dy}{y} = x\,dx\), so \(\ln y = \dfrac{x^2}{2} + C\).`, R`\(y(0) = 1\) gives \(C = 0\).`],
          ans: R`\(y = e^{x^2/2}\)` },
        { topic: R`Solution of homogeneous differential equations`, level: 'Main', q: R`Solve \(\dfrac{dy}{dx} = \dfrac{x + y}{x}\).`,
          steps: [R`It is homogeneous. Put \(y = vx\): \(v + x\dfrac{dv}{dx} = 1 + v\).`, R`\(x\dfrac{dv}{dx} = 1\), so \(v = \ln|x| + C\).`],
          ans: R`\(y = x\ln|x| + Cx\)` },
        { topic: R`Linear differential equations of the form \(\frac{dy}{dx} + P(x)y = Q(x)\)`, level: 'Main', q: R`Solve \(\dfrac{dy}{dx} + y = e^x\).`,
          steps: [R`\(P = 1\), so \(\text{IF} = e^x\).`, R`\(ye^x = \int e^{2x}dx = \dfrac{e^{2x}}{2} + C\).`],
          ans: R`\(y = \dfrac{e^x}{2} + Ce^{-x}\)` }
      ],
      practice: [
        { q: R`Solve \(x\,dy = y\,dx\).`, ans: R`\(\dfrac{dy}{y} = \dfrac{dx}{x}\), so \(y = Cx\)` },
        { q: R`Solve \(\dfrac{dy}{dx} = y\) with \(y(0) = 2\).`, ans: R`\(y = 2e^x\)` }
      ]
    },
    {
      id: 'coordinate-geometry', title: 'Coordinate Geometry', cls: 11,
      syllabus: [R`Distance formula, section formula, locus`, R`Slope, angle between two lines, parallel & perpendicular lines`, R`Various forms of a straight line`, R`Distance of a point from a line`, R`Centroid, orthocentre & circumcentre of a triangle`, R`Circle: standard & general form, equation with given diameter ends`, R`Conic sections: parabola, ellipse & hyperbola in standard form`],
      concepts: [
        { h: R`General circle`, body: R`\(x^2 + y^2 + 2gx + 2fy + c = 0\) has centre \((-g, -f)\) and radius \(\sqrt{g^2 + f^2 - c}\).` },
        { h: R`Conics through eccentricity`, body: R`\(e = 0\): circle. \(0 < e < 1\): ellipse. \(e = 1\): parabola. \(e > 1\): hyperbola. Every conic satisfies \(\text{distance to focus} = e\times\text{distance to directrix}\).` },
        { h: R`Tangent condition`, body: R`The line \(y = mx + c\) touches \(y^2 = 4ax\) when \(c = a/m\), and touches \(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1\) when \(c^2 = a^2m^2 + b^2\).` }
      ],
      formulas: [
        R`Distance from a point to a line: \(\dfrac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}}\); angle: \(\tan\theta = \left|\dfrac{m_1 - m_2}{1 + m_1m_2}\right|\)`,
        R`Parabola \(y^2 = 4ax\): focus \((a, 0)\), directrix \(x = -a\), latus rectum \(4a\)`,
        R`Ellipse \(\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1\) (\(a > b\)): \(b^2 = a^2(1 - e^2)\), foci \((\pm ae, 0)\), latus rectum \(\dfrac{2b^2}{a}\)`,
        R`Hyperbola \(\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1\): \(b^2 = a^2(e^2 - 1)\), asymptotes \(y = \pm\dfrac bax\)`
      ],
      examples: [
        { topic: R`Distance formula, section formula, locus`, level: 'Main', q: R`Find the point dividing the segment from \((1, 2)\) to \((7, 8)\) internally in the ratio 1 : 2. Also find the locus of points equidistant from \((1, 0)\) and \((-1, 0)\).`,
          steps: [R`Section formula: \(\left(\dfrac{1(7) + 2(1)}{3}, \dfrac{1(8) + 2(2)}{3}\right)\).`, R`Locus: \((x - 1)^2 + y^2 = (x + 1)^2 + y^2\), so \(-4x = 0\).`],
          ans: R`\((3, 4)\); the locus is \(x = 0\) (the y-axis)` },
        { topic: R`Slope, angle between two lines, parallel & perpendicular lines`, level: 'Main', q: R`For what \(k\) are the lines \(2x + ky = 5\) and \(3x - 4y = 7\) perpendicular?`,
          steps: [R`The slopes are \(-2/k\) and \(3/4\).`, R`For perpendicular lines the product is \(-1\): \(-\dfrac{2}{k}\cdot\dfrac34 = -1\).`],
          ans: R`\(k = 3/2\)` },
        { topic: R`Various forms of a straight line`, level: 'Main', q: R`Find the line through \((2, 3)\) with slope \(-\tfrac12\), and write it in intercept form.`,
          steps: [R`Point–slope form: \(y - 3 = -\tfrac12(x - 2)\), so \(x + 2y = 8\).`, R`Divide by 8.`],
          ans: R`\(x + 2y = 8\), or \(\dfrac x8 + \dfrac y4 = 1\)` },
        { topic: R`Distance of a point from a line`, level: 'Main', q: R`Find the distance between the parallel lines \(3x + 4y = 5\) and \(3x + 4y = 15\).`,
          steps: [R`\(d = \dfrac{|c_1 - c_2|}{\sqrt{a^2 + b^2}} = \dfrac{10}{5}\).`],
          ans: R`2` },
        { topic: R`Centroid, orthocentre & circumcentre of a triangle`, level: 'Main', q: R`A triangle has vertices \((0, 0)\), \((6, 0)\) and \((0, 8)\). Find its centroid, orthocentre and circumcentre.`,
          steps: [R`Centroid \(= \left(\dfrac{0 + 6 + 0}{3}, \dfrac{0 + 0 + 8}{3}\right)\).`, R`The triangle is right-angled at the origin, so the orthocentre is at that vertex.`, R`The circumcentre is the midpoint of the hypotenuse.`],
          ans: R`Centroid \((2, 8/3)\), orthocentre \((0, 0)\), circumcentre \((3, 4)\) with radius 5` },
        { topic: R`Circle: standard & general form, equation with given diameter ends`, level: 'Main', q: R`Find the centre and radius of \(x^2 + y^2 - 4x + 6y - 3 = 0\).`,
          steps: [R`\(g = -2\), \(f = 3\), \(c = -3\).`, R`Centre \((2, -3)\); radius \(= \sqrt{4 + 9 + 3}\).`],
          ans: R`Centre \((2, -3)\), radius 4` },
        { topic: R`Conic sections: parabola, ellipse & hyperbola in standard form`, level: 'Main', q: R`Find the eccentricity and foci of \(\dfrac{x^2}{25} + \dfrac{y^2}{16} = 1\).`,
          steps: [R`\(16 = 25(1 - e^2)\), so \(e^2 = 9/25\).`, R`\(e = 3/5\), \(ae = 3\).`],
          ans: R`\(e = 3/5\), foci \((\pm3, 0)\)` }
      ],
      practice: [
        { q: R`Find the distance of the point \((1, 2)\) from the line \(3x + 4y - 5 = 0\).`, ans: R`\(\dfrac{|3 + 8 - 5|}{5} = \dfrac65\)` },
        { q: R`Find the eccentricity of \(\dfrac{x^2}{9} - \dfrac{y^2}{16} = 1\).`, ans: R`\(e^2 = 1 + 16/9 = 25/9\), so \(e = 5/3\)` }
      ]
    },
    {
      id: '3d-geometry', title: 'Three-Dimensional Geometry', cls: 12,
      syllabus: [R`Coordinates of a point in space`, R`Distance between two points`, R`Section formula`, R`Direction ratios & direction cosines`, R`Angle between two intersecting lines`, R`Skew lines & the shortest distance between them`, R`Equation of a line`],
      concepts: [
        { h: R`Direction cosines`, body: R`If a line makes angles \(\alpha, \beta, \gamma\) with the axes, then \(l = \cos\alpha\), \(m = \cos\beta\), \(n = \cos\gamma\), and \(l^2 + m^2 + n^2 = 1\). Direction ratios are any numbers proportional to these.` },
        { h: R`Equation of a line`, body: R`Vector form: \(\vec r = \vec a + \lambda\vec b\). Cartesian form: \(\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}\).` },
        { h: R`Skew lines`, body: R`Skew lines are neither parallel nor intersecting. The shortest distance between them lies along their common perpendicular, in the direction \(\vec b_1\times\vec b_2\).` }
      ],
      formulas: [
        R`Angle between lines: \(\cos\theta = \dfrac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2 + b_1^2 + c_1^2}\sqrt{a_2^2 + b_2^2 + c_2^2}}\)`,
        R`Shortest distance: \(d = \dfrac{|(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}\)`,
        R`Distance from a point to a plane: \(\dfrac{|ax_1 + by_1 + cz_1 + d|}{\sqrt{a^2 + b^2 + c^2}}\)`
      ],
      examples: [
        { topic: R`Coordinates of a point in space`, level: 'Main', q: R`For the point \((2, -3, 4)\), find its distance from the xy-plane and from the x-axis.`,
          steps: [R`The distance from the xy-plane is \(|z|\).`, R`The distance from the x-axis is \(\sqrt{y^2 + z^2}\).`],
          ans: R`4 and \(\sqrt{9 + 16} = 5\)` },
        { topic: R`Distance between two points`, level: 'Main', q: R`Find the distance between \((1, 2, 3)\) and \((4, 6, 15)\).`,
          steps: [R`\(\sqrt{3^2 + 4^2 + 12^2} = \sqrt{169}\).`],
          ans: R`13` },
        { topic: R`Section formula`, level: 'Main', q: R`Find the point dividing the segment from \((1, -2, 3)\) to \((3, 4, -5)\) internally in the ratio 2 : 3.`,
          steps: [R`\(\left(\dfrac{2(3) + 3(1)}{5}, \dfrac{2(4) + 3(-2)}{5}, \dfrac{2(-5) + 3(3)}{5}\right)\).`],
          ans: R`\(\left(\tfrac95, \tfrac25, -\tfrac15\right)\)` },
        { topic: R`Direction ratios & direction cosines`, level: 'Main', q: R`Find the direction cosines of the line joining \((1, 2, 3)\) and \((3, 5, 9)\).`,
          steps: [R`Direction ratios: \((2, 3, 6)\), with magnitude \(\sqrt{4 + 9 + 36} = 7\).`],
          ans: R`\(\left(\tfrac27, \tfrac37, \tfrac67\right)\)` },
        { topic: R`Angle between two intersecting lines`, level: 'Main', q: R`Find the angle between lines with direction ratios \((1, 1, 0)\) and \((0, 1, 1)\).`,
          steps: [R`\(\cos\theta = \dfrac{0 + 1 + 0}{\sqrt2\cdot\sqrt2} = \dfrac12\).`],
          ans: R`\(60^\circ\)` },
        { topic: R`Skew lines & the shortest distance between them`, level: 'Advanced', q: R`Find the shortest distance between \(\vec r = \hat i + \lambda\hat j\) and \(\vec r = \hat j + \mu\hat k\).`,
          steps: [R`\(\vec a_1 = \hat i\), \(\vec b_1 = \hat j\); \(\vec a_2 = \hat j\), \(\vec b_2 = \hat k\).`, R`\(\vec b_1\times\vec b_2 = \hat i\), with magnitude 1.`, R`\((\vec a_2 - \vec a_1)\cdot\hat i = (-\hat i + \hat j)\cdot\hat i = -1\).`],
          ans: R`\(d = 1\)` },
        { topic: R`Equation of a line`, level: 'Main', q: R`Write the line through \((1, 2, 3)\) parallel to \(2\hat i - \hat j + 4\hat k\) in vector and Cartesian form.`,
          steps: [R`\(\vec r = \vec a + \lambda\vec b\).`, R`Cartesian form: \(\dfrac{x - x_1}{a} = \dfrac{y - y_1}{b} = \dfrac{z - z_1}{c}\).`],
          ans: R`\(\vec r = (\hat i + 2\hat j + 3\hat k) + \lambda(2\hat i - \hat j + 4\hat k)\); \(\dfrac{x - 1}{2} = \dfrac{y - 2}{-1} = \dfrac{z - 3}{4}\)` }
      ],
      practice: [
        { q: R`Find the direction cosines of the line with direction ratios \((1, 2, 2)\).`, ans: R`\(\left(\tfrac13, \tfrac23, \tfrac23\right)\)` },
        { q: R`Find the distance of \((1, 2, 3)\) from the plane \(2x - y + 2z = 3\).`, ans: R`\(\dfrac{|2 - 2 + 6 - 3|}{3} = 1\)` }
      ]
    },
    {
      id: 'vector-algebra', title: 'Vector Algebra', cls: 12,
      syllabus: [R`Vectors & scalars`, R`Addition of vectors`, R`Components of a vector in 2D & 3D`, R`Scalar (dot) & vector (cross) products`, R`Scalar triple product`],
      concepts: [
        { h: R`Dot product`, body: R`\(\vec a\cdot\vec b = |a||b|\cos\theta\). It is zero exactly when the vectors are perpendicular. Use it for angles and projections.` },
        { h: R`Cross product`, body: R`\(|\vec a\times\vec b| = |a||b|\sin\theta\), and \(\vec a\times\vec b\) is perpendicular to both vectors. Its magnitude is the area of the parallelogram they span. It is zero exactly when the vectors are parallel.` },
        { h: R`Scalar triple product`, body: R`\([\vec a\ \vec b\ \vec c] = \vec a\cdot(\vec b\times\vec c)\) is the volume of the parallelepiped. It is zero exactly when the three vectors are coplanar.` }
      ],
      formulas: [
        R`\(\vec a\cdot\vec b = a_1b_1 + a_2b_2 + a_3b_3\)`,
        R`\(\vec a\times\vec b = \begin{vmatrix}\hat i & \hat j & \hat k\\ a_1 & a_2 & a_3\\ b_1 & b_2 & b_3\end{vmatrix}\)`,
        R`Projection of \(\vec a\) on \(\vec b\): \(\dfrac{\vec a\cdot\vec b}{|\vec b|}\)`,
        R`Area of a triangle \(= \tfrac12|\vec a\times\vec b|\)`
      ],
      examples: [
        { topic: R`Vectors & scalars`, level: 'Main', q: R`Sort into scalars and vectors: displacement, speed, work, force, time, momentum.`,
          steps: [R`A vector needs both magnitude and direction.`],
          ans: R`Vectors: displacement, force, momentum. Scalars: speed, work, time.` },
        { topic: R`Addition of vectors`, level: 'Main', q: R`For \(\vec a = 2\hat i + 3\hat j - \hat k\) and \(\vec b = \hat i - 2\hat j + 2\hat k\), find \(\vec a + \vec b\) and its magnitude.`,
          steps: [R`Add component by component: \(3\hat i + \hat j + \hat k\).`, R`\(|\vec a + \vec b| = \sqrt{9 + 1 + 1}\).`],
          ans: R`\(3\hat i + \hat j + \hat k\), magnitude \(\sqrt{11}\)` },
        { topic: R`Components of a vector in 2D & 3D`, level: 'Main', q: R`Write a vector of magnitude 10 in the xy-plane at \(30^\circ\) to the x-axis. Also find \(\overrightarrow{PQ}\) for \(P(1, 2, 3)\) and \(Q(4, 0, 5)\).`,
          steps: [R`\(10(\cos30^\circ\,\hat i + \sin30^\circ\,\hat j)\).`, R`\(\overrightarrow{PQ} = \) position vector of Q − position vector of P.`],
          ans: R`\(5\sqrt3\,\hat i + 5\hat j\); \(\overrightarrow{PQ} = 3\hat i - 2\hat j + 2\hat k\)` },
        { topic: R`Scalar (dot) & vector (cross) products`, level: 'Main', q: R`For \(\vec a = \hat i + 2\hat j + 3\hat k\) and \(\vec b = 3\hat i - \hat j + \hat k\), find \(\vec a\cdot\vec b\) and \(\vec a\times\vec b\).`,
          steps: [R`\(\vec a\cdot\vec b = 3 - 2 + 3 = 4\).`, R`\(\vec a\times\vec b = (2\cdot1 - 3\cdot(-1))\hat i - (1\cdot1 - 3\cdot3)\hat j + (1\cdot(-1) - 2\cdot3)\hat k\).`],
          ans: R`\(\vec a\cdot\vec b = 4\); \(\vec a\times\vec b = 5\hat i + 8\hat j - 7\hat k\)` },
        { topic: R`Scalar (dot) & vector (cross) products`, level: 'Main', q: R`Find the area of the parallelogram with adjacent sides \(\vec a\) and \(\vec b\) from Example 1.`,
          steps: [R`Area \(= |\vec a\times\vec b| = \sqrt{25 + 64 + 49}\).`],
          ans: R`\(\sqrt{138}\) square units` },
        { topic: R`Scalar triple product`, level: 'Main', q: R`Are \(\hat i + 2\hat j + 3\hat k\), \(2\hat i + 3\hat j + 4\hat k\) and \(3\hat i + 4\hat j + 5\hat k\) coplanar?`,
          steps: [R`\([\vec a\ \vec b\ \vec c] = \begin{vmatrix}1 & 2 & 3\\ 2 & 3 & 4\\ 3 & 4 & 5\end{vmatrix} = 1(15 - 16) - 2(10 - 12) + 3(8 - 9)\).`, R`\(= -1 + 4 - 3 = 0\).`],
          ans: R`Yes. The scalar triple product is 0, so the parallelepiped has zero volume.` }
      ],
      practice: [
        { q: R`For what \(\lambda\) are \(2\hat i + \lambda\hat j + \hat k\) and \(\hat i - 2\hat j + 3\hat k\) perpendicular?`, ans: R`\(2 - 2\lambda + 3 = 0\), so \(\lambda = 5/2\)` },
        { q: R`Find the unit vector along \(3\hat i + 4\hat k\).`, ans: R`\(\dfrac{3\hat i + 4\hat k}{5}\)` }
      ]
    },
    {
      id: 'statistics-probability', title: 'Statistics and Probability', cls: 12,
      syllabus: [R`Measures of dispersion: mean, median, mode of grouped & ungrouped data`, R`Standard deviation, variance & mean deviation`, R`Probability of an event`, R`Addition & multiplication theorems of probability`, R`Bayes' theorem`, R`Probability distribution of a random variable`],
      concepts: [
        { h: R`Variance`, body: R`\(\sigma^2 = \dfrac{\sum x_i^2}{n} - \bar x^2\). Adding a constant to every value leaves the variance unchanged. Multiplying every value by \(k\) multiplies the variance by \(k^2\).` },
        { h: R`Conditional probability`, body: R`\(P(A|B) = \dfrac{P(A\cap B)}{P(B)}\). A and B are independent when \(P(A\cap B) = P(A)P(B)\).` },
        { h: R`Bayes' theorem`, body: R`Use it to work backwards: given that an outcome happened, find the probability that it came from a particular cause.` }
      ],
      formulas: [
        R`\(P(A\cup B) = P(A) + P(B) - P(A\cap B)\)`,
        R`Bayes: \(P(E_i|A) = \dfrac{P(E_i)P(A|E_i)}{\sum_j P(E_j)P(A|E_j)}\)`,
        R`Binomial: \(P(X = r) = {^nC_r}p^rq^{n-r}\), mean \(np\), variance \(npq\)`,
        R`Random variable: \(E(X) = \sum x_ip_i\), \(\text{Var}(X) = E(X^2) - [E(X)]^2\)`
      ],
      examples: [
        { topic: R`Measures of dispersion: mean, median, mode of grouped & ungrouped data`, level: 'Main', q: R`Find the mean, median and mode of 3, 7, 7, 2, 9, 5, 7, 4.`,
          steps: [R`Sum \(= 44\), so the mean \(= 44/8 = 5.5\).`, R`Sorted: 2, 3, 4, 5, 7, 7, 7, 9. The median is the average of the 4th and 5th values: \((5 + 7)/2\).`, R`7 appears most often.`],
          ans: R`Mean 5.5, median 6, mode 7` },
        { topic: R`Standard deviation, variance & mean deviation`, level: 'Main', q: R`Find the mean and variance of 2, 4, 6, 8, 10.`,
          steps: [R`Mean \(= 30/5 = 6\).`, R`Squared deviations: 16, 4, 0, 4, 16, which sum to 40.`, R`Variance \(= 40/5 = 8\).`],
          ans: R`Mean 6, variance 8 (SD \(= 2\sqrt2\))` },
        { topic: R`Probability of an event`, level: 'Main', q: R`Two dice are thrown. What is the probability that the sum is 7?`,
          steps: [R`There are 36 equally likely outcomes.`, R`A sum of 7 comes from (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): 6 outcomes.`],
          ans: R`\(6/36 = 1/6\)` },
        { topic: R`Addition & multiplication theorems of probability`, level: 'Main', q: R`A card is drawn from a pack of 52. Find P(king or heart). Also, if A and B are independent with \(P(A) = 0.5\) and \(P(B) = 0.4\), find \(P(A\cup B)\).`,
          steps: [R`\(P(K\cup H) = \dfrac4{52} + \dfrac{13}{52} - \dfrac1{52}\) (the king of hearts is counted twice).`, R`For independent events, \(P(A\cap B) = 0.2\), so \(P(A\cup B) = 0.5 + 0.4 - 0.2\).`],
          ans: R`\(4/13\); 0.7` },
        { topic: R`Bayes' theorem`, level: 'Main', q: R`Bag I has 3 red and 2 black balls. Bag II has 2 red and 3 black. A bag is picked at random and a red ball is drawn from it. Find the probability that it came from Bag I.`,
          steps: [R`\(P(\text{R}|\text{I}) = 3/5\), \(P(\text{R}|\text{II}) = 2/5\), and each bag has probability \(1/2\).`, R`\(P(\text{I}|\text{R}) = \dfrac{\frac12\cdot\frac35}{\frac12\cdot\frac35 + \frac12\cdot\frac25}\).`],
          ans: R`\(3/5\)` },
        { topic: R`Probability distribution of a random variable`, level: 'Main', q: R`X is the number of heads in 2 tosses of a fair coin. Find its probability distribution, mean and variance.`,
          steps: [R`\(P(0) = \tfrac14,\ P(1) = \tfrac12,\ P(2) = \tfrac14\).`, R`\(E(X) = 0 + \tfrac12 + \tfrac12 = 1\). \(E(X^2) = 0 + \tfrac12 + 1 = \tfrac32\).`, R`\(\text{Var} = \tfrac32 - 1\).`],
          ans: R`Mean 1, variance \(\tfrac12\)` }
      ],
      practice: [
        { q: R`What is the probability of exactly 2 sixes in 4 throws of a die?`, ans: R`\({}^4C_2(1/6)^2(5/6)^2 = \dfrac{25}{216}\)` },
        { q: R`What is the probability of at least one head in 3 coin tosses?`, ans: R`\(1 - 1/8 = 7/8\)` }
      ]
    }
  ]
};
