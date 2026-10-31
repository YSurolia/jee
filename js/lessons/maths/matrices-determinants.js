// Lesson: Matrices and Determinants.
var R = String.raw;
JEE.lesson('maths', 'matrices-determinants', {
  theory: [
    { h: R`What is a matrix?`,
      body: [
        R`A <b>matrix</b> is a rectangular arrangement of numbers in rows and columns. A matrix with m rows and n columns has <b>order</b> \(m\times n\).`,
        R`<b>Types:</b> row matrix (1 row), column matrix (1 column), square (m = n), diagonal (non-zero entries only on the main diagonal), scalar (a diagonal with all equal entries), identity \(I\) (1s on the diagonal), and zero matrix.`,
        R`<b>Symmetric:</b> \(A^T = A\). <b>Skew-symmetric:</b> \(A^T = -A\) (its diagonal entries must be 0). Every square matrix is the sum of a symmetric and a skew-symmetric matrix.`
      ],
      analogy: R`A matrix is like a class marks table: rows are students and columns are subjects. Its order tells you the size of the table.`,
      check: { q: R`What is the order of a matrix with 3 rows and 2 columns?`, ans: R`3 × 2 (rows × columns).` } },

    { h: R`Matrix algebra`,
      body: [
        R`<b>Addition:</b> only for matrices of the same order; add matching entries. <b>Scalar multiplication:</b> multiply every entry.`,
        R`<b>Multiplication</b> AB is defined when the number of columns of A equals the number of rows of B. If A is m×n and B is n×p, then AB is m×p. Each entry = row of A "dot" column of B.`,
        R`Matrix multiplication is <b>not commutative</b> (AB ≠ BA in general), but it is associative. AI = IA = A.`,
        R`<b>Transpose</b> \(A^T\): swap rows and columns. \((AB)^T = B^TA^T\) (note the reversed order).`
      ],
      mistake: R`Assuming AB = 0 means A = 0 or B = 0. Two non-zero matrices can multiply to give the zero matrix.` },

    { h: R`Determinants of order 2 and 3`,
      body: [
        R`A square matrix has a number called its <b>determinant</b>, |A|. For 2×2: \(\begin{vmatrix}a & b\\ c & d\end{vmatrix} = ad - bc\).`,
        R`For 3×3, expand along any row or column using <b>cofactors</b>: the <b>minor</b> \(M_{ij}\) is the determinant left after deleting row i and column j; the <b>cofactor</b> is \(C_{ij} = (-1)^{i+j}M_{ij}\). Then \(|A| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}\).`,
        R`Tip: expand along the row or column with the most zeros.`
      ] },

    { h: R`Properties of determinants`,
      body: [
        R`(1) \(|A^T| = |A|\). (2) Swapping two rows changes the sign. (3) Two identical (or proportional) rows give |A| = 0. (4) Multiplying one row by k multiplies |A| by k, so \(|kA| = k^n|A|\) for an n×n matrix.`,
        R`(5) Adding a multiple of one row to another doesn't change |A|. This is the main tool for simplifying determinants. (6) \(|AB| = |A||B|\).`
      ],
      analogy: R`Row operations are like legal moves in a game: some change the score's sign or scale it, and one (adding a multiple of another row) changes nothing at all, so you use it freely to create zeros.` },

    { h: R`Area of a triangle and collinearity`,
      body: [
        R`The area of the triangle with vertices \((x_1, y_1)\), \((x_2, y_2)\), \((x_3, y_3)\) is \(\tfrac12\left|\begin{smallmatrix}x_1 & y_1 & 1\\ x_2 & y_2 & 1\\ x_3 & y_3 & 1\end{smallmatrix}\right|\) (take the absolute value).`,
        R`If this determinant is zero, the three points are <b>collinear</b> (they lie on one line).`
      ] },

    { h: R`Adjoint and inverse`,
      body: [
        R`The <b>adjoint</b> adj A is the transpose of the matrix of cofactors. For 2×2: \(\text{adj}\begin{pmatrix}a & b\\ c & d\end{pmatrix} = \begin{pmatrix}d & -b\\ -c & a\end{pmatrix}\) (swap a and d, change the signs of b and c).`,
        R`\(A(\text{adj}A) = |A|I\), so if \(|A| \ne 0\), the <b>inverse</b> is \(A^{-1} = \dfrac{\text{adj}A}{|A|}\). If |A| = 0, A is <b>singular</b> and has no inverse.`,
        R`Useful results (n×n): \(|\text{adj}A| = |A|^{n-1}\), \(|A^{-1}| = 1/|A|\), \((AB)^{-1} = B^{-1}A^{-1}\).`
      ] },

    { h: R`Solving systems of linear equations`,
      body: [
        R`Write the system as \(AX = B\). If \(|A| \ne 0\), there is a <b>unique solution</b> \(X = A^{-1}B\).`,
        R`<b>Cramer's rule:</b> \(x = \Delta_1/\Delta\), \(y = \Delta_2/\Delta\), \(z = \Delta_3/\Delta\), where \(\Delta_i\) is Δ with column i replaced by the constants.`,
        R`If \(\Delta = 0\): if some \(\Delta_i \ne 0\), there is <b>no solution</b> (inconsistent); if all \(\Delta_i = 0\), there may be infinitely many solutions (or none), so check further.`
      ],
      analogy: R`Two parallel lines never meet (no solution); two crossing lines meet once (unique solution); two identical lines meet everywhere (infinitely many solutions).` }
  ],

  examples: [
    { level: 1, t: 0, q: R`For \(A = \begin{pmatrix}1 & 2\\ 3 & 4\end{pmatrix}\) and \(B = \begin{pmatrix}0 & 1\\ 2 & 3\end{pmatrix}\), find \(A + B\) and \(2A\).`,
      steps: [R`Add matching entries: \(\begin{pmatrix}1 & 3\\ 5 & 7\end{pmatrix}\).`, R`Double every entry of A.`],
      ans: R`\(A + B = \begin{pmatrix}1 & 3\\ 5 & 7\end{pmatrix}\), \(2A = \begin{pmatrix}2 & 4\\ 6 & 8\end{pmatrix}\)` },
    { level: 1, t: 1, q: R`Evaluate \(\begin{vmatrix}3 & 5\\ 2 & 4\end{vmatrix}\).`,
      steps: [R`\(ad - bc = 3(4) - 5(2)\).`],
      ans: R`2` },
    { level: 1, t: 0, q: R`A is 2×3 and B is 3×4. Is AB defined? What is its order? Is BA defined?`,
      steps: [R`AB: columns of A (3) = rows of B (3) ✓, giving order 2×4.`, R`BA: columns of B (4) ≠ rows of A (2).`],
      ans: R`AB is defined (2×4); BA is not defined` },
    { level: 2, t: 2, q: R`Without expanding, find \(\begin{vmatrix}1 & 2 & 3\\ 4 & 5 & 6\\ 7 & 8 & 9\end{vmatrix}\).`,
      steps: [R`Apply R₃ → R₃ − R₂ and R₂ → R₂ − R₁: both become (3, 3, 3).`, R`Two identical rows give a determinant of 0.`],
      ans: R`0` },
    { level: 3, t: 5, q: R`Solve \(2x + y = 5\), \(x + 3y = 5\) using the matrix inverse.`,
      steps: [R`\(A = \begin{pmatrix}2 & 1\\ 1 & 3\end{pmatrix}\), \(|A| = 6 - 1 = 5\).`, R`\(A^{-1} = \tfrac15\begin{pmatrix}3 & -1\\ -1 & 2\end{pmatrix}\).`, R`\(X = A^{-1}\begin{pmatrix}5\\ 5\end{pmatrix} = \tfrac15\begin{pmatrix}10\\ 5\end{pmatrix}\).`],
      ans: R`\(x = 2\), \(y = 1\)` },
    { level: 3, t: 2, q: R`Find x if \(\begin{vmatrix}x & 2\\ 3 & x\end{vmatrix} = 3\).`,
      steps: [R`\(x^2 - 6 = 3\), so \(x^2 = 9\).`],
      ans: R`\(x = \pm3\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`A matrix with 3 rows and 2 columns has order:`,
      options: [R`2 × 3`, R`3 × 2`, R`6`, R`5`], correct: 1,
      solution: R`Order = rows × columns.` },
    { level: 1, type: 'mcq', q: R`The determinant of the 2×2 identity matrix is:`,
      options: [R`1`, R`0`, R`2`, R`−1`], correct: 0,
      solution: R`\(1\times1 - 0\times0 = 1\).` },
    { level: 1, type: 'mcq', q: R`For any square matrix A and identity I of the same order:`,
      options: [R`AI = 0`, R`AI = I`, R`AI = 2A`, R`AI = A`], correct: 3,
      solution: R`The identity matrix leaves A unchanged.` },
    { level: 1, type: 'mcq', q: R`A matrix with \(A^T = A\) is called:`,
      options: [R`symmetric`, R`skew-symmetric`, R`diagonal`, R`singular`], correct: 0,
      solution: R`It is symmetric about the main diagonal.` },
    { level: 1, type: 'num', q: R`Evaluate \(\begin{vmatrix}3 & 5\\ 2 & 4\end{vmatrix}\).`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`12 − 10 = 2.` },
    { level: 1, type: 'num', q: R`How many entries does a 3 × 4 matrix have?`,
      answer: 12, tol: 0.001, unit: '',
      solution: R`3 × 4 = 12.` },
    { level: 2, type: 'mcq', q: R`If two rows of a determinant are identical, its value is:`,
      options: [R`1`, R`0`, R`−1`, R`double the original`], correct: 1,
      solution: R`Swapping them should change the sign, but leaves it unchanged, so it must be 0.` },
    { level: 2, type: 'mcq', q: R`A singular matrix is one with:`,
      options: [R`|A| = 1`, R`A = I`, R`\(A^T = A\)`, R`|A| = 0`], correct: 3,
      solution: R`It has no inverse.` },
    { level: 2, type: 'mcq', q: R`\((AB)^T\) equals:`,
      options: [R`\(B^TA^T\)`, R`\(A^TB^T\)`, R`AB`, R`BA`], correct: 0,
      solution: R`The order reverses when you transpose a product.` },
    { level: 2, type: 'mcq', q: R`The area of the triangle with vertices (1, 2), (2, 4) and (3, 6) is:`,
      options: [R`1`, R`2`, R`0`, R`3`], correct: 2,
      solution: R`The points lie on y = 2x, so they are collinear: area 0.` },
    { level: 2, type: 'num', q: R`Evaluate \(\begin{vmatrix}1 & 2 & 3\\ 4 & 5 & 6\\ 7 & 8 & 9\end{vmatrix}\).`,
      answer: 0, tol: 0.001, unit: '',
      solution: R`After R₃ − R₂ and R₂ − R₁, two rows are equal, so the determinant is 0.` },
    { level: 2, type: 'num', q: R`A is a 3×3 matrix with |A| = 3. Find |adj A|.`,
      answer: 9, tol: 0.001, unit: '',
      solution: R`\(|A|^{n-1} = 3^2 = 9\).` },
    { level: 2, type: 'num', q: R`For \(A = \begin{pmatrix}2 & 0\\ 0 & 3\end{pmatrix}\), find \(|A^2|\).`,
      answer: 36, tol: 0.001, unit: '',
      solution: R`\(|A^2| = |A|^2 = 6^2 = 36\).` },
    { level: 3, type: 'mcq', q: R`The system \(x + y = 2\), \(2x + 2y = 5\) has:`,
      options: [R`a unique solution`, R`infinitely many solutions`, R`no solution`, R`exactly two solutions`], correct: 2,
      solution: R`The lines are parallel (same slope, different intercepts), so they never meet.` },
    { level: 3, type: 'mcq', q: R`If A is a skew-symmetric matrix of odd order, then |A| is:`,
      options: [R`0`, R`1`, R`−1`, R`impossible to tell`], correct: 0,
      solution: R`\(|A| = |A^T| = |-A| = (-1)^n|A| = -|A|\) for odd n, so |A| = 0.` },
    { level: 3, type: 'num', q: R`Solve \(2x + y = 5\) and \(x + 3y = 5\). Give the value of x.`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`Using the inverse (or Cramer's rule): x = 2, y = 1.` },
    { level: 3, type: 'num', q: R`Find the positive value of x for which \(\begin{vmatrix}x & 2\\ 3 & x\end{vmatrix} = 3\).`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`\(x^2 - 6 = 3\), so x = 3 (or −3).` }
  ]
});
