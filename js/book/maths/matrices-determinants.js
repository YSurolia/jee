// Book chapter: Matrices and Determinants. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figSarrus = D.svg(440, 170, (function () {
  var out = [], xs = [40, 90, 140, 190, 240], ys = [40, 80, 120], L = ['a₁', 'b₁', 'c₁', 'a₁', 'b₁', 'a₂', 'b₂', 'c₂', 'a₂', 'b₂', 'a₃', 'b₃', 'c₃', 'a₃', 'b₃'];
  for (var r = 0; r < 3; r++) for (var c = 0; c < 5; c++) out.push(D.text(xs[c], ys[r], L[r * 5 + c], { size: 14, math: false, color: c > 2 ? 'm' : 'k', bold: c <= 2 }));
  out.push(D.line(20, 22, 20, 138, { w: 1.6 }), D.line(160, 22, 160, 138, { w: 1.6 }));
  [0, 1, 2].forEach(function (k) { out.push(D.line(xs[k] + 8, ys[0] + 8, xs[k + 2] - 8, ys[2] - 8, { color: 'g', w: 1.4 })); out.push(D.line(xs[k + 2] - 8, ys[0] + 8, xs[k] + 8, ys[2] - 8, { color: 'r', w: 1.4, dash: '4 3' })); });
  out.push(D.text(330, 50, '+ (green) diagonals', { size: 11, math: false, color: 'g', anchor: 'start' }), D.text(330, 70, '− (red) diagonals', { size: 11, math: false, color: 'r', anchor: 'start' }));
  out.push(D.text(330, 100, 'works for 3 × 3 only', { size: 10, math: false, color: 'm', anchor: 'start' }));
  out.push(D.text(140, 160, 'copy the first two columns to the right', { size: 10, math: false, color: 'm' }));
  return out;
})(), 'Rule of Sarrus');

var figArea = D.plot({ w: 300, h: 240, x: [-0.5, 8], y: [-0.5, 7], noOrigin: true, xticks: [1, 4, 7], yticks: [2, 3, 6],
  segs: [{ x1: 1, y1: 2, x2: 4, y2: 6, color: 'b', w: 2 }, { x1: 4, y1: 6, x2: 7, y2: 3, color: 'b', w: 2 }, { x1: 7, y1: 3, x2: 1, y2: 2, color: 'b', w: 2 }],
  pts: [{ x: 1, y: 2, label: 'A(1, 2)', pos: 'w', math: false }, { x: 4, y: 6, label: 'B(4, 6)', pos: 'n', math: false }, { x: 7, y: 3, label: 'C(7, 3)', pos: 'e', math: false }],
  shade: [{ f: function (x) { return x <= 4 ? 2 + (x - 1) * 4 / 3 : 6 - (x - 4); }, g: function (x) { return 2 + (x - 1) / 6; }, from: 1, to: 7, color: 'b' }],
  label: 'Triangle with vertices A, B, C' });

// ---------- chapter text ----------
JEE.book('maths', 'matrices-determinants', {
  intro: [
    R`A matrix is a rectangular array of numbers. Matrices let us handle many numbers at once: they represent systems of linear equations, transformations of the plane, networks and data tables. A determinant is a single number attached to a square matrix that tells us, among other things, whether the matrix has an inverse.`,
    R`This chapter covers types of matrices, their algebra (addition, multiplication, transpose), symmetric and skew-symmetric matrices, determinants and their properties, area of a triangle, adjoint and inverse, and solving systems of linear equations by matrices and by Cramer's rule.`
  ],
  sections: [
    { h: R`Matrices: order and equality`, t: [0], blocks: [
      R`A <b>matrix</b> of <b>order m × n</b> has m rows and n columns: \(A = [a_{ij}]_{m\times n}\), where \(a_{ij}\) is the element in row i and column j. For example \[A = \begin{pmatrix} 1 & -2 & 0 \\ 3 & 5 & 4 \end{pmatrix}\] is 2 × 3 and \(a_{21} = 3\). A matrix of order m × n has mn elements.`,
      R`Two matrices are <b>equal</b> if they have the same order and all corresponding elements are equal.`,
      { ex: { q: R`Construct the 2 × 2 matrix with \(a_{ij} = i + 2j\).`,
        steps: [R`\(a_{11} = 3,\ a_{12} = 5,\ a_{21} = 4,\ a_{22} = 6\).`], ans: R`\(\begin{pmatrix} 3 & 5 \\ 4 & 6 \end{pmatrix}\)` } },
      { check: { q: R`How many possible orders can a matrix with 12 elements have?`, ans: R`Six: 1×12, 2×6, 3×4, 4×3, 6×2, 12×1.` } }
    ] },

    { h: R`Types of matrices`, t: [0], blocks: [
      { table: { head: [R`Type`, R`Definition`, R`Example`], rows: [
        [R`Row / column matrix`, R`one row (1 × n) / one column (m × 1)`, R`\((1\ 2\ 3)\)`],
        [R`Square matrix`, R`m = n; the \(a_{ii}\) form the principal diagonal`, R`2 × 2, 3 × 3`],
        [R`Diagonal matrix`, R`square, all non-diagonal elements 0`, R`diag(1, 4, 7)`],
        [R`Scalar matrix`, R`diagonal with all diagonal elements equal`, R`diag(3, 3, 3) = 3I`],
        [R`Identity matrix I`, R`diagonal with all diagonal elements 1`, R`\(I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}\)`],
        [R`Zero (null) matrix O`, R`all elements 0`, R`—`],
        [R`Upper / lower triangular`, R`all elements below / above the diagonal are 0`, R`—`]] } },
      { check: { q: R`Is every scalar matrix a diagonal matrix?`, ans: R`Yes (but not every diagonal matrix is scalar).` } }
    ] },

    { h: R`Addition and multiplication by a scalar`, t: [0], blocks: [
      R`Matrices of the <b>same order</b> are added element by element: \(A + B = [a_{ij} + b_{ij}]\). A scalar k multiplies every element: \(kA = [k\,a_{ij}]\). Addition is commutative and associative, O is the additive identity, and −A the additive inverse. Also k(A + B) = kA + kB and (k + l)A = kA + lA.`,
      { ex: { q: R`Find X if \(2X + \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 8 \\ 7 & 2 \end{pmatrix}\).`,
        steps: [R`\(2X = \begin{pmatrix} 2 & 6 \\ 4 & -2 \end{pmatrix}\).`], ans: R`\(X = \begin{pmatrix} 1 & 3 \\ 2 & -1 \end{pmatrix}\)` } },
      { check: { q: R`Can a 2 × 3 matrix be added to a 3 × 2 matrix?`, ans: R`No: they must have the same order.` } }
    ] },

    { h: R`Product of matrices and its properties`, t: [0], blocks: [
      R`If A is m × n and B is n × p (columns of A = rows of B), then AB is m × p with \[(AB)_{ik} = \sum_{j=1}^{n} a_{ij}\,b_{jk}\] (row i of A "dot" column k of B).`,
      { points: [R`<b>Not commutative</b> in general: AB ≠ BA (even when both exist).`, R`Associative: (AB)C = A(BC); distributive: A(B + C) = AB + AC.`, R`AI = IA = A for square A.`, R`AB = O does <b>not</b> imply A = O or B = O; AB = AC does not imply B = C.`, R`Powers: \(A^2 = AA\), \(A^{n+1} = A^nA\). A is idempotent if A² = A, nilpotent if \(A^k = O\), involutory if A² = I.`] },
      { ex: { q: R`For \(A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\) and \(B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\), find AB and BA.`,
        steps: [R`\(AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}\) (columns swapped).`, R`\(BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}\) (rows swapped).`], ans: R`AB ≠ BA` } },
      { mistake: R`Using \((A + B)^2 = A^2 + 2AB + B^2\) for matrices. Correctly \((A + B)^2 = A^2 + AB + BA + B^2\), which equals the usual expansion only if AB = BA.` },
      { check: { q: R`If A is 2 × 3 and B is 3 × 4, what is the order of AB? Does BA exist?`, ans: R`AB is 2 × 4; BA does not exist (4 ≠ 2).` } }
    ] },

    { h: R`Transpose of a matrix`, t: [0], blocks: [
      R`The <b>transpose</b> A′ (or Aᵀ) is obtained by interchanging rows and columns: if A is m × n, A′ is n × m with \((A')_{ij} = a_{ji}\).`,
      { points: [R`(A′)′ = A; (kA)′ = kA′; (A + B)′ = A′ + B′.`, R`<b>Reversal law:</b> (AB)′ = B′A′.`] },
      { check: { q: R`Write the transpose of (1 2 3).`, ans: R`The 3 × 1 column matrix with entries 1, 2, 3.` } }
    ] },

    { h: R`Symmetric and skew-symmetric matrices`, t: [0], blocks: [
      R`A square matrix is <b>symmetric</b> if A′ = A (\(a_{ij} = a_{ji}\)) and <b>skew-symmetric</b> if A′ = −A (\(a_{ij} = -a_{ji}\)); the diagonal elements of a skew-symmetric matrix are all 0.`,
      { points: [R`For any square A: A + A′ is symmetric and A − A′ is skew-symmetric.`, R`Every square matrix is uniquely the sum of a symmetric and a skew-symmetric matrix: \[A = \tfrac12(A + A') + \tfrac12(A - A').\]`, R`The determinant of a skew-symmetric matrix of odd order is 0.`] },
      { ex: { q: R`Write \(A = \begin{pmatrix} 1 & 5 \\ 7 & 3 \end{pmatrix}\) as the sum of a symmetric and a skew-symmetric matrix.`,
        steps: [R`\(P = \tfrac12(A + A') = \begin{pmatrix} 1 & 6 \\ 6 & 3 \end{pmatrix}\).`, R`\(Q = \tfrac12(A - A') = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\).`], ans: R`A = P + Q` } },
      { check: { q: R`What are the diagonal elements of a skew-symmetric matrix?`, ans: R`All zero (since a_ii = −a_ii).` } }
    ] },

    { h: R`Elementary row and column transformations`, t: [0], blocks: [
      R`There are three <b>elementary operations</b> on rows (or columns): (i) interchange two rows, \(R_i \leftrightarrow R_j\); (ii) multiply a row by a non-zero number, \(R_i \to kR_i\); (iii) add a multiple of another row, \(R_i \to R_i + kR_j\).`,
      R`<b>Inverse by row operations (Gauss–Jordan):</b> write A = IA; apply row operations to A on the left and the same to I on the right until the left becomes I; then I = BA and B = A⁻¹. If a row of zeros appears on the left, A⁻¹ does not exist.`,
      { ex: { q: R`Find the inverse of \(\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}\) by row operations.`,
        steps: [R`Start with \([A \mid I]\). \(R_1 \to \tfrac12R_1\), then \(R_2 \to R_2 - 5R_1\): left becomes \(\begin{pmatrix} 1 & 1/2 \\ 0 & 1/2 \end{pmatrix}\), right \(\begin{pmatrix} 1/2 & 0 \\ -5/2 & 1 \end{pmatrix}\).`, R`\(R_2 \to 2R_2\), then \(R_1 \to R_1 - \tfrac12R_2\): left = I, right = \(\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}\).`], ans: R`\(\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}\)` } },
      { check: { q: R`Name the three elementary row operations.`, ans: R`Swap two rows; multiply a row by a non-zero scalar; add a multiple of one row to another.` } }
    ] },

    { h: R`Determinants of order two and three; minors and cofactors`, t: [1], blocks: [
      R`Every square matrix A has a number |A| (or det A). For order 2: \[\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc.\]`,
      R`The <b>minor</b> \(M_{ij}\) of \(a_{ij}\) is the determinant left after deleting row i and column j; the <b>cofactor</b> is \(C_{ij} = (-1)^{i+j}M_{ij}\). A determinant equals the sum of the products of the elements of <b>any</b> row (or column) with their cofactors. Expanding along row 1: \[\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = a_1(b_2c_3 - b_3c_2) - b_1(a_2c_3 - a_3c_2) + c_1(a_2b_3 - a_3b_2).\]`,
      { fig: figSarrus, cap: R`The rule of Sarrus: add the products along the three green diagonals and subtract those along the red ones.` },
      R`The sum of the products of the elements of a row with the cofactors of a <b>different</b> row is 0.`,
      { ex: { q: R`Evaluate \(\begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{vmatrix}\).`,
        steps: [R`= 1(0 − 24) − 2(0 − 20) + 3(0 − 5) = −24 + 40 − 15.`], ans: R`1` } },
      { check: { q: R`Find the cofactor of 4 in \(\begin{vmatrix} 1 & 2 \\ 3 & 4 \end{vmatrix}\).`, ans: R`\(C_{22} = (+1)(1) = 1\).` } }
    ] },

    { h: R`Properties of determinants`, t: [2], blocks: [
      { points: [
        R`|A′| = |A| (rows and columns are interchangeable).`,
        R`Interchanging two rows (or columns) changes the sign.`,
        R`If two rows (or columns) are identical or proportional, the determinant is 0.`,
        R`Multiplying a row by k multiplies the determinant by k; so \(|kA| = k^n|A|\) for an n × n matrix.`,
        R`If each element of a row is a sum of two terms, the determinant splits into a sum of two determinants.`,
        R`Adding a multiple of one row to another (\(R_i \to R_i + kR_j\)) does not change the determinant.`,
        R`|AB| = |A||B|; the determinant of a triangular (or diagonal) matrix is the product of its diagonal elements.`
      ] },
      { ex: { q: R`Show that \(\begin{vmatrix} 1 & a & a^2 \\ 1 & b & b^2 \\ 1 & c & c^2 \end{vmatrix} = (a - b)(b - c)(c - a)\).`,
        steps: [R`\(R_2 \to R_2 - R_1,\ R_3 \to R_3 - R_1\): rows become (0, b − a, b² − a²) and (0, c − a, c² − a²).`, R`Take out (b − a)(c − a): remaining \(\begin{vmatrix} 1 & b + a \\ 1 & c + a \end{vmatrix} = c - b\).`, R`Product (b − a)(c − a)(c − b) = (a − b)(b − c)(c − a).`], ans: R`proved (Vandermonde determinant)` } },
      { tip: R`Before expanding, use row/column operations to create zeros. Look for a common factor in a row, or for rows that become identical when you substitute a value (then that factor divides the determinant).` },
      { check: { q: R`If A is 3 × 3 with |A| = 2, find |3A|.`, ans: R`3³ × 2 = 54.` } }
    ] },

    { h: R`Area of a triangle; condition for collinearity`, t: [3], blocks: [
      R`The area of the triangle with vertices \((x_1, y_1), (x_2, y_2), (x_3, y_3)\) is \[\Delta = \frac12\left|\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}\right|.\] Three points are <b>collinear</b> if and only if this determinant is 0.`,
      { fig: figArea, cap: R`The determinant formula gives the area of triangle ABC directly from the coordinates.` },
      { ex: { q: R`Find the area of the triangle with vertices (1, 2), (4, 6), (7, 3).`,
        steps: [R`Determinant = 1(6 − 3) − 2(4 − 7) + 1(12 − 42) = 3 + 6 − 30 = −21.`, R`Area = ½ × 21.`], ans: R`10.5 square units` } },
      { ex: { q: R`For what k are (k, 2), (3, 4) and (5, 6) collinear?`,
        steps: [R`k(4 − 6) − 2(3 − 5) + 1(18 − 20) = −2k + 4 − 2 = 0.`], ans: R`k = 1` } },
      { check: { q: R`Are (1, 2), (3, 4), (5, 6) collinear?`, ans: R`Yes: they lie on y = x + 1, and the determinant is 0.` } }
    ] },

    { h: R`Adjoint of a square matrix`, t: [4], blocks: [
      R`The <b>adjoint</b> adj A is the transpose of the matrix of cofactors: \((\text{adj}\,A)_{ij} = C_{ji}\). For a 2 × 2 matrix: \[\text{adj}\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}\] (swap the diagonal, change the sign of the off-diagonal).`,
      { derive: R`The key identity`, open: true, steps: [R`\(A(\text{adj}\,A) = (\text{adj}\,A)A = |A|\,I\)`, R`Because each element of a row times its own cofactors gives |A|, and times another row's cofactors gives 0.`] },
      { check: { q: R`Find adj of \(\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}\).`, ans: R`\(\begin{pmatrix} 4 & -3 \\ -1 & 2 \end{pmatrix}\).` } }
    ] },

    { h: R`Inverse of a square matrix`, t: [4], blocks: [
      R`A square matrix is <b>singular</b> if |A| = 0 and <b>non-singular</b> otherwise. A has an inverse (AB = BA = I) <b>if and only if |A| ≠ 0</b>, and then \[A^{-1} = \frac{1}{|A|}\,\text{adj}\,A.\]`,
      { ex: { q: R`Find the inverse of \(A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}\).`,
        steps: [R`|A| = 1 (computed above).`, R`Cofactors: C₁₁ = −24, C₁₂ = 20, C₁₃ = −5, C₂₁ = 18, C₂₂ = −15, C₂₃ = 4, C₃₁ = 5, C₃₂ = −4, C₃₃ = 1.`, R`\(A^{-1} = \text{adj}\,A = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}\)`], ans: R`as above (check: AA⁻¹ = I)` } },
      { check: { q: R`Does \(\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}\) have an inverse?`, ans: R`No: its determinant is 4 − 4 = 0.` } }
    ] },

    { h: R`Properties of the adjoint and the inverse`, t: [4], blocks: [
      R`For non-singular n × n matrices A and B:`,
      { points: [R`\((AB)^{-1} = B^{-1}A^{-1}\); \((A^{-1})^{-1} = A\); \((A')^{-1} = (A^{-1})'\); \((kA)^{-1} = \frac1k A^{-1}\).`, R`\(|A^{-1}| = \dfrac{1}{|A|}\).`, R`\(|\text{adj}\,A| = |A|^{n-1}\); \(\text{adj}(\text{adj}\,A) = |A|^{n-2}A\); \(|\text{adj}(\text{adj}\,A)| = |A|^{(n-1)^2}\).`, R`adj(AB) = (adj B)(adj A); adj(A′) = (adj A)′; adj(kA) = kⁿ⁻¹ adj A.`] },
      { ex: { q: R`A is 3 × 3 with |A| = 2. Find |adj A|, |A⁻¹| and |adj(adj A)|.`,
        steps: [R`|adj A| = 2² = 4; |A⁻¹| = 1/2.`, R`|adj(adj A)| = 2⁽³⁻¹⁾² = 2⁴ = 16.`], ans: R`4, 1/2, 16` } },
      { adv: R`<b>Cayley–Hamilton theorem:</b> every square matrix satisfies its own characteristic equation |A − λI| = 0. For 2 × 2: \(A^2 - (\text{tr}A)A + |A|I = O\). Multiplying by A⁻¹ gives \(A^{-1} = \frac{1}{|A|}((\text{tr}A)I - A)\).` },
      { check: { q: R`If |A| = 5 for a 2 × 2 matrix, find |adj A|.`, ans: R`5¹ = 5.` } }
    ] },

    { h: R`Consistency of a system of linear equations`, t: [5], blocks: [
      R`A system of linear equations is <b>consistent</b> if it has at least one solution, and <b>inconsistent</b> if it has none. Write the system as AX = B, with coefficient matrix A, unknowns X and constants B:`,
      { table: { head: [R`Condition`, R`Conclusion`], rows: [
        [R`|A| ≠ 0`, R`unique solution X = A⁻¹B (consistent)`],
        [R`|A| = 0 and (adj A)B ≠ O`, R`no solution (inconsistent)`],
        [R`|A| = 0 and (adj A)B = O`, R`infinitely many solutions or none (check the equations)`]] } },
      R`A <b>homogeneous</b> system AX = O always has the trivial solution X = O; it has non-trivial solutions if and only if |A| = 0.`,
      { ex: { q: R`Classify: x + 2y = 3, 2x + 4y = 6; and x + 2y = 3, 2x + 4y = 7.`,
        steps: [R`|A| = 4 − 4 = 0 in both.`, R`First: the second equation is twice the first: infinitely many solutions. Second: the lines are parallel and distinct: no solution.`], ans: R`infinitely many; inconsistent` } },
      { check: { q: R`When does a homogeneous system have a non-trivial solution?`, ans: R`When the determinant of the coefficient matrix is zero.` } }
    ] },

    { h: R`Solving equations using matrices`, t: [5], blocks: [
      R`If |A| ≠ 0, then AX = B gives \(X = A^{-1}B\).`,
      { ex: { q: R`Solve x + y + z = 6, x − y + z = 2, 2x + y − z = 1 by the matrix method.`,
        steps: [R`\(A = \begin{pmatrix} 1 & 1 & 1 \\ 1 & -1 & 1 \\ 2 & 1 & -1 \end{pmatrix}\), |A| = 1(1 − 1) − 1(−1 − 2) + 1(1 + 2) = 6.`, R`adj A = \(\begin{pmatrix} 0 & 2 & 2 \\ 3 & -3 & 0 \\ 3 & 1 & -2 \end{pmatrix}\); \(X = \frac16\,\text{adj}A\begin{pmatrix} 6 \\ 2 \\ 1 \end{pmatrix} = \frac16\begin{pmatrix} 6 \\ 12 \\ 18 \end{pmatrix}\).`], ans: R`x = 1, y = 2, z = 3` } },
      { check: { q: R`Why can't the matrix method be used when |A| = 0?`, ans: R`A⁻¹ does not exist.` } }
    ] },

    { h: R`Cramer's rule`, t: [5], blocks: [
      R`For a system with |A| = D ≠ 0, replace the column of coefficients of each unknown by the constants to get \(D_x, D_y, D_z\). Then \[x = \frac{D_x}{D}, \qquad y = \frac{D_y}{D}, \qquad z = \frac{D_z}{D}.\]`,
      { ex: { q: R`Solve the same system x + y + z = 6, x − y + z = 2, 2x + y − z = 1 by Cramer's rule.`,
        steps: [R`D = 6.`, R`\(D_x = \begin{vmatrix} 6 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{vmatrix} = 6\), \(D_y = 12\), \(D_z = 18\).`], ans: R`x = 1, y = 2, z = 3` } },
      { table: { head: [R`Case`, R`Result`], rows: [[R`D ≠ 0`, R`unique solution`], [R`D = 0 and at least one of Dₓ, D_y, D_z ≠ 0`, R`no solution`], [R`D = Dₓ = D_y = D_z = 0`, R`infinitely many solutions or none`]] } },
      { check: { q: R`For which k does kx + y = 2, 3x + y = 4 have a unique solution?`, ans: R`D = k − 3 ≠ 0, i.e. k ≠ 3.` } }
    ] }
  ],
  summary: [
    R`Matrix of order m × n; types: row, column, square, diagonal, scalar, identity, zero, triangular.`,
    R`A + B (same order); AB defined when columns of A = rows of B; AB ≠ BA in general; (AB)′ = B′A′.`,
    R`Symmetric A′ = A, skew A′ = −A (zero diagonal); A = ½(A + A′) + ½(A − A′). Elementary row operations give A⁻¹ (Gauss–Jordan).`,
    R`Determinant by cofactor expansion; |A′| = |A|, swap rows changes sign, equal rows → 0, |kA| = kⁿ|A|, |AB| = |A||B|, Rᵢ → Rᵢ + kRⱼ leaves it unchanged.`,
    R`Area = ½|det[[x₁, y₁, 1], …]|; zero ⟺ collinear.`,
    R`A(adj A) = |A|I; A⁻¹ = adj A/|A| (exists ⟺ |A| ≠ 0); |adj A| = |A|ⁿ⁻¹; (AB)⁻¹ = B⁻¹A⁻¹.`,
    R`AX = B: |A| ≠ 0 → X = A⁻¹B unique; Cramer x = Dₓ/D; |A| = 0 → none or infinitely many. Homogeneous non-trivial ⟺ |A| = 0.`
  ],
  refs: [
    { t: R`OpenStax College Algebra 2e, §7.5 Matrices and Matrix Operations`, url: 'https://openstax.org/books/college-algebra-2e/pages/7-5-matrices-and-matrix-operations' },
    { t: R`OpenStax College Algebra 2e, §7.7 Solving Systems with Inverses`, url: 'https://openstax.org/books/college-algebra-2e/pages/7-7-solving-systems-with-inverses' },
    { t: R`OpenStax College Algebra 2e, §7.8 Solving Systems with Cramer's Rule`, url: 'https://openstax.org/books/college-algebra-2e/pages/7-8-solving-systems-with-cramers-rule' },
    { t: R`Wikipedia: Determinant`, url: 'https://en.wikipedia.org/wiki/Determinant' },
    { t: R`Wikipedia: Adjugate matrix`, url: 'https://en.wikipedia.org/wiki/Adjugate_matrix' }
  ]
});
})();
