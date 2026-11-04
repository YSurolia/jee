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

function mlab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 12, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
var figMul = D.svg(440, 150, (function () {
  var out = [];
  function grid(x0, y0, rows, cols, vals, hiRow, hiCol, color) {
    for (var i = 0; i < rows; i++) for (var j = 0; j < cols; j++) {
      var hot = (hiRow === i) || (hiCol === j);
      if (hot) out.push(D.rect(x0 + j * 34 - 15, y0 + i * 30 - 13, 30, 26, { color: color, fill: 'soft', w: 0.8 }));
      out.push(mlab(x0 + j * 34, y0 + i * 30 + 1, String(vals[i][j]), hot ? color : 'k', 13, { bold: hot }));
    }
    out.push(D.path('M' + (x0 - 20) + ',' + (y0 - 18) + ' l-6,0 l0,' + (rows * 30 + 6) + ' l6,0', { color: 'm', w: 1.4 }), D.path('M' + (x0 + cols * 34 - 14) + ',' + (y0 - 18) + ' l6,0 l0,' + (rows * 30 + 6) + ' l-6,0', { color: 'm', w: 1.4 }));
  }
  grid(40, 50, 2, 2, [[1, 2], [3, 4]], 0, -1, 'b'); out.push(mlab(125, 66, '×', 'm', 16));
  grid(160, 50, 2, 2, [[5, 6], [7, 8]], -1, 0, 'o'); out.push(mlab(245, 66, '=', 'm', 16));
  grid(285, 50, 2, 2, [[19, 22], [43, 50]], -1, -1, 'g');
  out.push(D.rect(270, 37, 30, 26, { color: 'g', fill: 'soft', w: 1.4 }));
  out.push(mlab(220, 130, 'row 1 of A · column 1 of B = 1×5 + 2×7 = 19', 'g', 12));
  return out;
})(), 'Matrix multiplication: row times column');

var figShear = D.plot({ w: 320, h: 220, x: [-0.5, 3.6], y: [-0.5, 1.8], eq: true, xticks: [[1, '1'], [2, '2'], [3, '3']], yticks: [[1, '1']],
  extra: function (X, Y) { return [
    D.poly([[X(0), Y(0)], [X(1), Y(0)], [X(1), Y(1)], [X(0), Y(1)]], { closed: true, color: 'b', fill: 'soft', w: 1.6 }),
    D.poly([[X(0), Y(0)], [X(2), Y(0)], [X(3), Y(1)], [X(1), Y(1)]], { closed: true, color: 'o', fill: 'soft', w: 1.6 }),
    D.text(X(0.5), Y(0.5), 'area 1', { size: 11, color: 'b' }), D.text(X(1.9), Y(0.5), 'area 2', { size: 11, color: 'o' })]; },
  label: 'The matrix with rows (2, 1) and (0, 1) maps the unit square to a parallelogram of area 2' });

var figSystems = D.row([
  [D.plot({ w: 160, h: 140, x: [-0.5, 4], y: [-0.5, 4], noOrigin: true, xticks: [], yticks: [], fns: [{ f: function (x) { return 3 - x; }, color: 'b' }, { f: function (x) { return x / 2 + 0.5; }, color: 'o' }], pts: [{ x: 5 / 3, y: 4 / 3, color: 'r' }], label: 'unique' }), 'one point: |A| ≠ 0'],
  [D.plot({ w: 160, h: 140, x: [-0.5, 4], y: [-0.5, 4], noOrigin: true, xticks: [], yticks: [], fns: [{ f: function (x) { return 1.5 - x / 2; }, color: 'b' }, { f: function (x) { return 3 - x / 2; }, color: 'o' }], label: 'parallel' }), 'parallel: no solution'],
  [D.plot({ w: 160, h: 140, x: [-0.5, 4], y: [-0.5, 4], noOrigin: true, xticks: [], yticks: [], fns: [{ f: function (x) { return 1.5 - x / 2; }, color: 'b', w: 4 }, { f: function (x) { return 1.5 - x / 2; }, color: 'o', w: 1.6, dash: '5 4' }], label: 'same line' }), 'same line: infinitely many']
]);

var figRot = D.plot({ w: 260, h: 240, x: [-0.4, 1.5], y: [-0.4, 1.4], eq: true, xticks: [[1, '1']], yticks: [[1, '1']],
  param: [{ fx: Math.cos, fy: Math.sin, t: [0, Math.PI / 2], color: 'm', w: 1, dash: '3 3' }],
  segs: [{ x1: 0, y1: 0, x2: 1, y2: 0, color: 'b', w: 2.2, arrow: true }, { x1: 0, y1: 0, x2: Math.cos(0.7), y2: Math.sin(0.7), color: 'o', w: 2.2, arrow: true }],
  pts: [{ x: 1, y: 0, label: '(1, 0)', pos: 'se', math: false }, { x: Math.cos(0.7), y: Math.sin(0.7), label: '(cos θ, sin θ)', pos: 'ne', math: false }],
  texts: [{ x: 0.3, y: 0.1, s: 'θ', color: 'm', size: 13 }], label: 'Rotation matrix acting on (1, 0)' });

// ---------- chapter text ----------
JEE.book('maths', 'matrices-determinants', {
  intro: [
    R`A matrix is a rectangular array of numbers. Matrices let us handle many numbers at once: they represent systems of linear equations, transformations of the plane, networks and data tables. A determinant is a single number attached to a square matrix that tells us, among other things, whether the matrix has an inverse.`,
    R`This chapter covers types of matrices, their algebra (addition, multiplication, transpose), symmetric and skew-symmetric matrices, determinants and their properties, area of a triangle, adjoint and inverse, and solving systems of linear equations by matrices and by Cramer's rule. Matrices are the language of computer graphics (every rotation and scaling on a screen is a matrix), of economics models and of quantum physics, so the ideas here go far beyond JEE.`
  ],
  sections: [
    { h: R`Matrices: order and equality`, t: [0], blocks: [
      R`A <b>matrix</b> of <b>order m × n</b> has m rows and n columns: \(A = [a_{ij}]_{m\times n}\), where \(a_{ij}\) is the element in row i and column j. For example \[A = \begin{pmatrix} 1 & -2 & 0 \\ 3 & 5 & 4 \end{pmatrix}\] is 2 × 3 and \(a_{21} = 3\). A matrix of order m × n has mn elements.`,
      R`Two matrices are <b>equal</b> if they have the same order and all corresponding elements are equal. So one matrix equation can hide several ordinary equations, one for each position.`,
      { ex: { q: R`Construct the 2 × 2 matrix with \(a_{ij} = i + 2j\).`,
        steps: [R`\(a_{11} = 3,\ a_{12} = 5,\ a_{21} = 4,\ a_{22} = 6\).`], ans: R`\(\begin{pmatrix} 3 & 5 \\ 4 & 6 \end{pmatrix}\)` } },
      { ex: { q: R`Find x and y if \(\begin{pmatrix} x + y & 2 \\ 5 & x - y \end{pmatrix} = \begin{pmatrix} 6 & 2 \\ 5 & 2 \end{pmatrix}\).`,
        steps: [R`Equal matrices have equal corresponding elements: x + y = 6 and x − y = 2.`], ans: R`x = 4, y = 2` } },
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
      { tip: R`Matrix equations can be solved like ordinary ones as long as you never divide: from 2X + A = B, subtract A and multiply by ½ to get X = ½(B − A).` },
      { check: { q: R`Can a 2 × 3 matrix be added to a 3 × 2 matrix?`, ans: R`No: they must have the same order.` } }
    ] },

    { h: R`Product of matrices and its properties`, t: [0], blocks: [
      R`If A is m × n and B is n × p (columns of A = rows of B), then AB is m × p with \[(AB)_{ik} = \sum_{j=1}^{n} a_{ij}\,b_{jk}\] (row i of A "dot" column k of B).`,
      { fig: figMul, cap: R`Each element of AB is a row of A "dotted" with a column of B: multiply matching entries and add. Here (AB)₁₁ = 1·5 + 2·7 = 19.` },
      { points: [R`<b>Not commutative</b> in general: AB ≠ BA (even when both exist).`, R`Associative: (AB)C = A(BC); distributive: A(B + C) = AB + AC.`, R`AI = IA = A for square A.`, R`AB = O does <b>not</b> imply A = O or B = O; AB = AC does not imply B = C.`, R`Powers: \(A^2 = AA\), \(A^{n+1} = A^nA\). A is idempotent if A² = A, nilpotent if \(A^k = O\), involutory if A² = I.`] },
      { ex: { q: R`For \(A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\) and \(B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\), find AB and BA.`,
        steps: [R`\(AB = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}\) (columns swapped).`, R`\(BA = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}\) (rows swapped).`], ans: R`AB ≠ BA` } },
      { mistake: R`Using \((A + B)^2 = A^2 + 2AB + B^2\) for matrices. Correctly \((A + B)^2 = A^2 + AB + BA + B^2\), which equals the usual expansion only if AB = BA.` },
      { ex: { q: R`Show that \(A = \begin{pmatrix} 3 & 1 \\ -1 & 2 \end{pmatrix}\) satisfies \(A^2 - 5A + 7I = O\).`,
        steps: [R`\(A^2 = \begin{pmatrix} 9 - 1 & 3 + 2 \\ -3 - 2 & -1 + 4 \end{pmatrix} = \begin{pmatrix} 8 & 5 \\ -5 & 3 \end{pmatrix}\).`, R`\(A^2 - 5A + 7I = \begin{pmatrix} 8 - 15 + 7 & 5 - 5 \\ -5 + 5 & 3 - 10 + 7 \end{pmatrix}\).`], ans: R`= O ✓` } },
      { ex: { q: R`If \(A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\), find \(A^n\).`,
        steps: [R`\(A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\), \(A^3 = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}\): the top-right entry goes up by 1 each time.`, R`Prove by induction: \(A^{n+1} = A^nA\) adds 1 again.`], ans: R`\(A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}\)` } },
      { check: { q: R`If A is 2 × 3 and B is 3 × 4, what is the order of AB? Does BA exist?`, ans: R`AB is 2 × 4; BA does not exist (4 ≠ 2).` } }
    ] },

    { h: R`Transpose of a matrix`, t: [0], blocks: [
      R`The <b>transpose</b> A′ (or Aᵀ) is obtained by interchanging rows and columns: if A is m × n, A′ is n × m with \((A')_{ij} = a_{ji}\).`,
      { points: [R`(A′)′ = A; (kA)′ = kA′; (A + B)′ = A′ + B′.`, R`<b>Reversal law:</b> (AB)′ = B′A′.`] },
      R`Why does the order reverse in (AB)′ = B′A′? If A is m × n and B is n × p, then (AB)′ is p × m; B′A′ is (p × n)(n × m) = p × m, which fits, whereas A′B′ would not even be defined in general. Taking the transpose turns every row-times-column product into a column-times-row product the other way round.`,
      { ex: { q: R`For \(A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}\) and \(B = \begin{pmatrix} 1 & 0 \\ 4 & 1 \end{pmatrix}\), verify that (AB)′ = B′A′.`,
        steps: [R`\(AB = \begin{pmatrix} 9 & 2 \\ 12 & 3 \end{pmatrix}\), so \((AB)' = \begin{pmatrix} 9 & 12 \\ 2 & 3 \end{pmatrix}\).`, R`\(B'A' = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 2 & 3 \end{pmatrix} = \begin{pmatrix} 9 & 12 \\ 2 & 3 \end{pmatrix}\) ✓.`], ans: R`Both equal \(\begin{pmatrix} 9 & 12 \\ 2 & 3 \end{pmatrix}\)` } },
      { check: { q: R`Write the transpose of (1 2 3).`, ans: R`The 3 × 1 column matrix with entries 1, 2, 3.` } }
    ] },

    { h: R`Symmetric and skew-symmetric matrices`, t: [0], blocks: [
      R`A square matrix is <b>symmetric</b> if A′ = A (\(a_{ij} = a_{ji}\)) and <b>skew-symmetric</b> if A′ = −A (\(a_{ij} = -a_{ji}\)); the diagonal elements of a skew-symmetric matrix are all 0.`,
      { points: [R`For any square A: A + A′ is symmetric and A − A′ is skew-symmetric.`, R`Every square matrix is uniquely the sum of a symmetric and a skew-symmetric matrix: \[A = \tfrac12(A + A') + \tfrac12(A - A').\]`, R`The determinant of a skew-symmetric matrix of odd order is 0.`] },
      { ex: { q: R`Write \(A = \begin{pmatrix} 1 & 5 \\ 7 & 3 \end{pmatrix}\) as the sum of a symmetric and a skew-symmetric matrix.`,
        steps: [R`\(P = \tfrac12(A + A') = \begin{pmatrix} 1 & 6 \\ 6 & 3 \end{pmatrix}\).`, R`\(Q = \tfrac12(A - A') = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\).`], ans: R`A = P + Q` } },
      { mistake: R`Assuming the product of two symmetric matrices is symmetric. (AB)′ = B′A′ = BA, so AB is symmetric only if A and B commute.` },
      { check: { q: R`What are the diagonal elements of a skew-symmetric matrix?`, ans: R`All zero (since a_ii = −a_ii).` } }
    ] },

    { h: R`Elementary row and column transformations`, t: [0], blocks: [
      R`There are three <b>elementary operations</b> on rows (or columns): (i) interchange two rows, \(R_i \leftrightarrow R_j\); (ii) multiply a row by a non-zero number, \(R_i \to kR_i\); (iii) add a multiple of another row, \(R_i \to R_i + kR_j\).`,
      R`<b>Inverse by row operations (Gauss–Jordan):</b> write A = IA; apply row operations to A on the left and the same to I on the right until the left becomes I; then I = BA and B = A⁻¹. If a row of zeros appears on the left, A⁻¹ does not exist.`,
      { ex: { q: R`Find the inverse of \(\begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}\) by row operations.`,
        steps: [R`Start with \([A \mid I]\). \(R_1 \to \tfrac12R_1\), then \(R_2 \to R_2 - 5R_1\): left becomes \(\begin{pmatrix} 1 & 1/2 \\ 0 & 1/2 \end{pmatrix}\), right \(\begin{pmatrix} 1/2 & 0 \\ -5/2 & 1 \end{pmatrix}\).`, R`\(R_2 \to 2R_2\), then \(R_1 \to R_1 - \tfrac12R_2\): left = I, right = \(\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}\).`], ans: R`\(\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}\)` } },
      R`Each elementary operation can be undone by another elementary operation (swap back, divide by k, subtract the multiple), so it never destroys information. That is why reducing A to I by row operations is possible exactly when A is invertible.`,
      { check: { q: R`Name the three elementary row operations.`, ans: R`Swap two rows; multiply a row by a non-zero scalar; add a multiple of one row to another.` } }
    ] },

    { h: R`Determinants of order two and three; minors and cofactors`, t: [1], blocks: [
      R`Every square matrix A has a number |A| (or det A). For order 2: \[\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc.\]`,
      R`The <b>minor</b> \(M_{ij}\) of \(a_{ij}\) is the determinant left after deleting row i and column j; the <b>cofactor</b> is \(C_{ij} = (-1)^{i+j}M_{ij}\). A determinant equals the sum of the products of the elements of <b>any</b> row (or column) with their cofactors. Expanding along row 1: \[\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = a_1(b_2c_3 - b_3c_2) - b_1(a_2c_3 - a_3c_2) + c_1(a_2b_3 - a_3b_2).\]`,
      R`The signs \((-1)^{i+j}\) form a chessboard pattern starting with + in the top-left corner: + − + in the first row, − + − in the second, + − + in the third. Expanding along a row or column with many zeros saves most of the work.`,
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
      { ex: { q: R`Evaluate \(\begin{vmatrix} x & a & a \\ a & x & a \\ a & a & x \end{vmatrix}\).`,
        steps: [R`\(C_1 \to C_1 + C_2 + C_3\): the first column becomes x + 2a in every row; take it out.`, R`Then \(R_2 \to R_2 - R_1\), \(R_3 \to R_3 - R_1\) leave a triangular determinant with diagonal 1, x − a, x − a.`], ans: R`\((x + 2a)(x - a)^2\)` } },
      { fig: figShear, cap: R`The determinant measures how a matrix scales area. \(\begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix}\) sends the unit square (blue) to a parallelogram (orange) of area 2 = |det|. A zero determinant would squash the square flat, which is why such a matrix has no inverse.` },
      { tip: R`Before expanding, use row/column operations to create zeros. Look for a common factor in a row, or for rows that become identical when you substitute a value (then that factor divides the determinant).` },
      { check: { q: R`If A is 3 × 3 with |A| = 2, find |3A|.`, ans: R`3³ × 2 = 54.` } }
    ] },

    { h: R`Area of a triangle; condition for collinearity`, t: [3], blocks: [
      R`The area of the triangle with vertices \((x_1, y_1), (x_2, y_2), (x_3, y_3)\) is \[\Delta = \frac12\left|\begin{vmatrix} x_1 & y_1 & 1 \\ x_2 & y_2 & 1 \\ x_3 & y_3 & 1 \end{vmatrix}\right|.\] Three points are <b>collinear</b> if and only if this determinant is 0.`,
      { fig: figArea, cap: R`The determinant formula gives the area of triangle ABC directly from the coordinates.` },
      R`Where does the formula come from? Expanding the determinant gives \(x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\), which is twice the signed area found by splitting the triangle into trapeziums under its sides (the "shoelace" formula). The sign only records whether the vertices are listed clockwise or anticlockwise, which is why we take the absolute value.`,
      { ex: { q: R`Find the area of the triangle with vertices (1, 2), (4, 6), (7, 3).`,
        steps: [R`Determinant = 1(6 − 3) − 2(4 − 7) + 1(12 − 42) = 3 + 6 − 30 = −21.`, R`Area = ½ × 21.`], ans: R`10.5 square units` } },
      { ex: { q: R`For what k are (k, 2), (3, 4) and (5, 6) collinear?`,
        steps: [R`k(4 − 6) − 2(3 − 5) + 1(18 − 20) = −2k + 4 − 2 = 0.`], ans: R`k = 1` } },
      { check: { q: R`Are (1, 2), (3, 4), (5, 6) collinear?`, ans: R`Yes: they lie on y = x + 1, and the determinant is 0.` } }
    ] },

    { h: R`Adjoint of a square matrix`, t: [4], blocks: [
      R`The <b>adjoint</b> adj A is the transpose of the matrix of cofactors: \((\text{adj}\,A)_{ij} = C_{ji}\). For a 2 × 2 matrix: \[\text{adj}\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}\] (swap the diagonal, change the sign of the off-diagonal).`,
      { derive: R`The key identity`, open: true, steps: [R`\(A(\text{adj}\,A) = (\text{adj}\,A)A = |A|\,I\)`, R`Because each element of a row times its own cofactors gives |A|, and times another row's cofactors gives 0.`] },
      R`Remember the transpose: the cofactor of the element in row i, column j goes into row j, column i of the adjoint. Forgetting to transpose is the most common error in finding inverses; always check by multiplying A by your answer.`,
      { check: { q: R`Find adj of \(\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}\).`, ans: R`\(\begin{pmatrix} 4 & -3 \\ -1 & 2 \end{pmatrix}\).` } }
    ] },

    { h: R`Inverse of a square matrix`, t: [4], blocks: [
      R`A square matrix is <b>singular</b> if |A| = 0 and <b>non-singular</b> otherwise. A has an inverse (AB = BA = I) <b>if and only if |A| ≠ 0</b>, and then \[A^{-1} = \frac{1}{|A|}\,\text{adj}\,A.\]`,
      { ex: { q: R`Find the inverse of \(A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}\).`,
        steps: [R`|A| = 1 (computed above).`, R`Cofactors: C₁₁ = −24, C₁₂ = 20, C₁₃ = −5, C₂₁ = 18, C₂₂ = −15, C₂₃ = 4, C₃₁ = 5, C₃₂ = −4, C₃₃ = 1.`, R`\(A^{-1} = \text{adj}\,A = \begin{pmatrix} -24 & 18 & 5 \\ 20 & -15 & -4 \\ -5 & 4 & 1 \end{pmatrix}\)`], ans: R`as above (check: AA⁻¹ = I)` } },
      { ex: { q: R`Find the inverse of \(\begin{pmatrix} 3 & 2 \\ 7 & 5 \end{pmatrix}\).`,
        steps: [R`|A| = 15 − 14 = 1. For a 2 × 2 matrix: swap the diagonal, change the signs of the other two, divide by |A|.`], ans: R`\(\begin{pmatrix} 5 & -2 \\ -7 & 3 \end{pmatrix}\)` } },
      { check: { q: R`Does \(\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}\) have an inverse?`, ans: R`No: its determinant is 4 − 4 = 0.` } }
    ] },

    { h: R`Properties of the adjoint and the inverse`, t: [4], blocks: [
      R`For non-singular n × n matrices A and B:`,
      { points: [R`\((AB)^{-1} = B^{-1}A^{-1}\); \((A^{-1})^{-1} = A\); \((A')^{-1} = (A^{-1})'\); \((kA)^{-1} = \frac1k A^{-1}\).`, R`\(|A^{-1}| = \dfrac{1}{|A|}\).`, R`\(|\text{adj}\,A| = |A|^{n-1}\); \(\text{adj}(\text{adj}\,A) = |A|^{n-2}A\); \(|\text{adj}(\text{adj}\,A)| = |A|^{(n-1)^2}\).`, R`adj(AB) = (adj B)(adj A); adj(A′) = (adj A)′; adj(kA) = kⁿ⁻¹ adj A.`] },
      { ex: { q: R`A is 3 × 3 with |A| = 2. Find |adj A|, |A⁻¹| and |adj(adj A)|.`,
        steps: [R`|adj A| = 2² = 4; |A⁻¹| = 1/2.`, R`|adj(adj A)| = 2⁽³⁻¹⁾² = 2⁴ = 16.`], ans: R`4, 1/2, 16` } },
      { adv: R`<b>Cayley–Hamilton theorem:</b> every square matrix satisfies its own characteristic equation |A − λI| = 0. For 2 × 2: \(A^2 - (\text{tr}A)A + |A|I = O\). Multiplying by A⁻¹ gives \(A^{-1} = \frac{1}{|A|}((\text{tr}A)I - A)\).` },
      { ex: { q: R`Use \(A^2 - 5A + 7I = O\) for \(A = \begin{pmatrix} 3 & 1 \\ -1 & 2 \end{pmatrix}\) to find A⁻¹.`,
        steps: [R`Multiply by A⁻¹: \(A - 5I + 7A^{-1} = O\), so \(A^{-1} = \frac17(5I - A)\).`], ans: R`\(A^{-1} = \dfrac17\begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}\)` } },
      { fig: figRot, cap: R`\(R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}\) turns every vector through θ about O. Its determinant is cos²θ + sin²θ = 1 (areas are unchanged), and its inverse is R(−θ) = R(θ)′.` },
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
      { fig: figSystems, cap: R`Two equations in two unknowns are two lines. They meet in one point (unique solution), are parallel (no solution) or coincide (infinitely many). The last two cases are exactly those with |A| = 0.` },
      { ex: { q: R`Find k for which the system x + ky + 3z = 0, 3x + ky − 2z = 0, 2x + 3y − 4z = 0 has a non-trivial solution.`,
        steps: [R`Need |A| = 0: \(1(-4k + 6) - k(-12 + 4) + 3(9 - 2k) = -2k + 33\).`], ans: R`k = 33/2` } },
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
      { derive: R`Why Cramer's rule works (for x)`, steps: [R`Multiply the first column of D by x: \(xD = \begin{vmatrix} a_1x & b_1 & c_1 \\ a_2x & b_2 & c_2 \\ a_3x & b_3 & c_3 \end{vmatrix}\).`, R`Add y times column 2 and z times column 3 to column 1 (this does not change the value): column 1 becomes \(a_ix + b_iy + c_iz = d_i\), the constants.`, R`So \(xD = D_x\), and if D ≠ 0, \(x = D_x/D\). The same argument gives y and z.`] },
      { ex: { q: R`Solve the same system x + y + z = 6, x − y + z = 2, 2x + y − z = 1 by Cramer's rule.`,
        steps: [R`D = 6.`, R`\(D_x = \begin{vmatrix} 6 & 1 & 1 \\ 2 & -1 & 1 \\ 1 & 1 & -1 \end{vmatrix} = 6\), \(D_y = 12\), \(D_z = 18\).`], ans: R`x = 1, y = 2, z = 3` } },
      { table: { head: [R`Case`, R`Result`], rows: [[R`D ≠ 0`, R`unique solution`], [R`D = 0 and at least one of Dₓ, D_y, D_z ≠ 0`, R`no solution`], [R`D = Dₓ = D_y = D_z = 0`, R`infinitely many solutions or none`]] } },
      { ex: { q: R`For the system x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = μ, find the values of λ and μ for which it has (a) a unique solution (b) no solution (c) infinitely many solutions.`,
        steps: [R`D = \(\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 2 & \lambda \end{vmatrix} = \lambda - 3\) (subtract R₂ from R₃).`, R`If λ = 3, the last two equations have the same left side: x + 2y + 3z = 10 and = μ. They agree only if μ = 10.`], ans: R`(a) λ ≠ 3 (b) λ = 3, μ ≠ 10 (c) λ = 3, μ = 10` } },
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
    R`AX = B: |A| ≠ 0 → X = A⁻¹B unique; Cramer x = Dₓ/D; |A| = 0 → none or infinitely many. Homogeneous non-trivial ⟺ |A| = 0.`,
    R`Determinant = area (volume) scale factor of the matrix; a 2 × 2 system is two lines: meeting, parallel or coincident.`
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
