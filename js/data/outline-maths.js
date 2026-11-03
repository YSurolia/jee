// Complete syllabus outline for Mathematics: every topic and subtopic of each chapter.
// Built from the official JEE (Main) 2027 syllabus (NTA, October 2026) and the JEE (Advanced) 2026 syllabus
// (IIT Roorkee information brochure, Annexure-I).
// Format: "# Topic" lines, each followed by "- subtopic" lines.
//   [A] = in the JEE Advanced syllabus only, [M] = in the JEE Main syllabus only (no tag = in both).
//   @k  = the topic's index in the chapter's `syllabus` list (links to its solved examples).
//   >n  = section n of the chapter's book chapter (js/book/), for chapters that have one.
window.JEE = window.JEE || {};
JEE.outline = JEE.outline || {};
JEE.outline.maths = {
  'sets-relations-functions': `
# Sets and their representation @0 >1
- Sets and their elements; roster and set-builder forms >1
- Empty, finite and infinite sets; equal sets >1
- Subsets; intervals as subsets of the real line >2
- Universal set and Venn diagrams >3
# Operations on sets @1 >4
- Union, intersection and complement >4
- Difference of sets >4
- Symmetric difference [A] >5
- Algebraic properties of set operations; De Morgan's laws >6
- Practical problems on union and intersection >7
# Power set [M] @2 >8
- Power set and the number of its elements >8
# Cartesian product and relations @3 >9
- Ordered pairs and the Cartesian product of sets >9
- Relations; domain, codomain and range of a relation >10
- Types of relations: empty, universal, reflexive, symmetric and transitive >11
- Equivalence relations and equivalence classes >12
# Functions @4 >13
- Function as a special relation; functions as mappings >13
- Domain, codomain and range of a function @7 >13
- One-one, many-one, into and onto functions; bijections >14
- Even and odd functions [A] >15
# Special functions >16
- Polynomial, power, exponential, logarithmic and trigonometric functions >16
- Absolute value and greatest integer functions >16
# Algebra and composition of functions @5 >17
- Sum, difference, product and quotient of functions >17
- Composition of functions >18
# Invertible functions @6 >19
- Inverse of a function and the condition for invertibility >19
# Logarithms [A] >20
- Definition of a logarithm; laws of logarithms >20
- Change of base; solving simple logarithmic equations >20
`,

  'complex-quadratic': `
# Complex numbers @0 >1
- Need for complex numbers; powers of i >1
- Complex numbers as ordered pairs of reals; the form a + ib >2
- Equality of complex numbers >2
# Algebra of complex numbers @1 >3
- Addition, subtraction, multiplication and division >3
- Conjugate and its properties >4
- Square root of a complex number >5
# Argand plane @2 >6
- Representation of complex numbers in a plane (Argand diagram) >6
- Geometric interpretations of complex numbers and their operations [A] >7
# Modulus and argument @3 >8
- Modulus and its properties >8
- Triangle inequality [A] >9
- Argument (amplitude) and principal argument >10
- Polar representation of a complex number @4 >11
# Cube roots of unity [A] @5 >12
- Cube roots of unity and their properties >12
# Quadratic equations @6 >13
- Quadratic equations in the real and complex number systems and their solutions >13
- Statement of the fundamental theorem of algebra [A] >14
# Relations between roots and coefficients @7 >15
- Sum and product of roots >15
- Symmetric functions of roots [A] >16
# Nature of roots @8 >17
- Discriminant and the nature of roots >17
# Formation of quadratic equations @9 >18
- Forming a quadratic equation with given roots >18
`,

  'permutations-combinations': `
# Fundamental principle of counting @0 >1
- Multiplication and addition principles >1
- Factorial notation >2
# Permutations @1 >3
- Permutation as an arrangement; meaning of P(n, r) @3 >3
- Permutations when some objects are alike >4
- Permutations with repetition allowed >5
- Permutations with restrictions >6
# Combinations @2 >7
- Combination as a selection; meaning of C(n, r) and its properties >7
- Relation between P(n, r) and C(n, r) >8
- Selections with restrictions >9
# Simple applications @4 >10
- Arrangement and selection problems >10
- Counting lines, triangles and diagonals from given points >11
`,

  'binomial-theorem': `
# Binomial theorem for a positive integral index @0 >1
- Statement and proof >1
- Pascal's triangle >2
- Binomial coefficients >3
# General term and middle term @1 >4
- General term >4
- Middle term(s) >5
- Coefficient of a given power; term independent of x >6
# Properties of binomial coefficients [A] >7
- Sums of binomial coefficients >7
- Identities involving binomial coefficients >8
# Simple applications @2 >9
- Approximations, divisibility and remainders >9
`,

  'sequences-series': `
# Sequences and series @0 >1
- Sequences, series and progressions >1
# Arithmetic progression @0 >2
- nth term and sum of n terms >2
- Properties of an arithmetic progression >3
# Geometric progression @0 >4
- nth term and sum of n terms >4
- Infinite geometric series [A] >5
# Arithmetic and geometric means @1 >6
- Arithmetic mean; inserting arithmetic means between two numbers >6
- Geometric mean; inserting geometric means between two numbers >7
# Relation between AM and GM @2 >8
- AM ≥ GM and its applications >8
# Special sums [A] >9
- Sum of the first n natural numbers >9
- Sums of the squares and cubes of the first n natural numbers >10
`,

  'trigonometry': `
# Angles and their measurement >1
- Degree and radian measure; length of an arc >1
# Trigonometric functions @1 >2
- Trigonometric functions of any angle; signs in the four quadrants >2
- Domain and range of trigonometric functions >3
- Periodicity and graphs of trigonometric functions >4
# Trigonometric identities @0 >5
- Fundamental identities >5
- Addition and subtraction formulae >6
- Multiple and sub-multiple angle formulae >7
- Sum-to-product and product-to-sum formulae >8
# Trigonometric equations [A] @3 >9
- Principal and general solutions >9
- Solving trigonometric equations >10
# Inverse trigonometric functions @2 >11
- Definitions, domains and principal value branches >11
- Graphs of inverse trigonometric functions >12
- Elementary properties of inverse trigonometric functions >13
`,

  'coordinate-geometry': `
# Cartesian coordinates @0 >1
- Cartesian system of rectangular coordinates in a plane >1
- Distance formula >2
- Section formula >3
- Shift of origin [A] >4
# Locus @0 >5
- Locus and its equation >5
- Locus problems >6
# Slope of a line @1 >7
- Slope of a line; angle between two lines >7
- Conditions for parallel and perpendicular lines >8
- Intercepts of a line on the coordinate axes >9
# Straight lines @2 >10
- Various forms of the equation of a line >10
- Intersection of lines; condition for concurrence of three lines >11
- Lines through the point of intersection of two given lines [A] >12
- Equations of the bisectors of the angles between two lines [A] >13
# Distance of a point from a line @3 >14
- Distance of a point from a line >14
- Distance between parallel lines >14
# Centres of a triangle @4 >15
- Coordinates of the centroid, orthocentre and circumcentre >15
- Incentre [A] >15
# Circle @5 >16
- Standard and general forms of the equation of a circle; centre and radius >16
- Equation of a circle when the endpoints of a diameter are given >17
- Points of intersection of a line and a circle >18
- Parametric equations of a circle [A] >19
- Equations of tangent, normal and chord [A] >19
- Intersection of two circles; circles through the points of intersection of two circles, or of a circle and a line [A] >20
# Conic sections @6 >21
- Sections of a cone >21
- Parabola in standard form: focus, directrix and latus rectum >22
- Ellipse in standard form: foci, directrices and eccentricity >23
- Hyperbola in standard form: foci, directrices and eccentricity >24
- Parametric equations of conics [A] >25
- Equations of tangent and normal to conics [A] >25
`,

  'matrices-determinants': `
# Matrices @0 >1
- Matrix as a rectangular array of real numbers; order; equality of matrices >1
- Types of matrices: row, column, square, diagonal, scalar, identity and zero >2
# Algebra of matrices @0 >3
- Addition and multiplication by a scalar >3
- Product of matrices and its properties >4
- Transpose of a matrix >5
- Symmetric and skew-symmetric matrices and their properties >6
- Elementary row and column transformations [A] >7
# Determinants @1 >8
- Determinants of order two and three; minors and cofactors >8
- Evaluation and properties of determinants @2 >9
# Area of a triangle using determinants [M] @3 >10
- Area of a triangle; condition for collinearity >10
# Adjoint and inverse of a matrix @4 >11
- Adjoint of a square matrix >11
- Inverse of a square matrix of order up to three >12
- Properties of the adjoint and the inverse >13
# Systems of linear equations @5 >14
- Test of consistency of a system of equations >14
- Solution of simultaneous linear equations in two or three variables using matrices >15
- Solution using determinants (Cramer's rule) >16
`,

  'limits-continuity-differentiability': `
# Real-valued functions and algebra of functions @0 >1
- Real-valued functions; domain and range
- Sum, difference, product, quotient and composition of functions
# Standard functions and their graphs @1 >2
- Polynomial and rational functions
- Trigonometric, exponential and logarithmic functions
- Modulus, greatest integer and other simple functions; their graphs
# Inverse functions @2 >3
- Inverse of a function and its graph
- Inverse trigonometric functions
# Limits @3 >4
- Limit of a function at a real number; left-hand and right-hand limits
- Limits of the sum, difference, product and quotient of two functions >5
- Standard limits and methods of evaluating limits >5
- L'Hospital's rule for evaluating limits [A] >15
# Continuity @3 >6
- Continuity of a function at a point and on an interval
- Continuity of the sum, difference, product and quotient of two functions
- Continuity of composite functions [A]
- Intermediate value property of continuous functions [A]
# Differentiability @3 >8
- Derivative as the slope of the tangent; differentiation from first principles >7
- Differentiability and its relation to continuity
# Rules of differentiation @4 >9
- Derivatives of the sum, difference, product and quotient of two functions
- Chain rule: derivatives of composite functions >11
# Derivatives of standard functions @5 >10
- Polynomial and rational functions
- Trigonometric and inverse trigonometric functions
- Exponential and logarithmic functions
# Implicit, logarithmic and parametric differentiation @5 >11
- Derivatives of implicit functions
- Logarithmic differentiation
- Derivatives of functions in parametric form
# Derivatives of order two @6 >12
- Second-order derivatives, including those of implicit functions
# Rate of change of quantities @7 >13
- Rate of change; related rates
# Tangents and normals [A]
- Equations of tangents and normals; geometric interpretation of the derivative
# Increasing and decreasing functions @7 >14
- Monotonic functions and the sign of the derivative
# Maxima and minima @7 >15
- Local maxima and minima; first and second derivative tests
- Absolute maximum and minimum on a closed interval
- Applied problems
# Mean value theorems [A]
- Rolle's theorem
- Lagrange's mean value theorem
- Geometric interpretation of the two theorems
`,

  'integral-calculus': `
# Integration as an anti-derivative @0 >1
- Indefinite integral as the inverse process of differentiation >1
- Properties of indefinite integrals >2
# Fundamental integrals @1 >3
- Integrals of algebraic, trigonometric, exponential and logarithmic functions >3
# Methods of integration @2 >4
- Integration by substitution >4
- Integration by parts >5
- Integration by partial fractions >6
# Integration using trigonometric identities @3 >7
- Using identities to simplify integrands >7
# Integrals of special forms @4 >8
- ∫dx/(x² ± a²), ∫dx/√(x² ± a²), ∫dx/(a² − x²), ∫dx/√(a² − x²) >8
- ∫dx/(ax² + bx + c), ∫dx/√(ax² + bx + c) >9
- ∫(px + q)dx/(ax² + bx + c), ∫(px + q)dx/√(ax² + bx + c) >10
- ∫√(a² ± x²)dx and ∫√(x² − a²)dx >11
# Definite integrals @5 >12
- Definite integral as the limit of a sum [A] >12
- Fundamental theorem of calculus >13
- Evaluation of definite integrals >14
# Properties of definite integrals @6 >15
- Properties of definite integrals and their use >15
# Area under simple curves @7 >16
- Area bounded by a curve and an axis >16
- Area between two curves >17
- Areas of regions bounded by lines, circles, parabolas and ellipses >18
`,

  'differential-equations': `
# Basic concepts @0 >1
- Ordinary differential equations; order and degree >1
- General and particular solutions >2
- Formation of ordinary differential equations [A] >3
# Variables separable method @1 >4
- Solving equations by separating the variables >4
# Homogeneous differential equations @2 >5
- Homogeneous equations of first order and first degree; the substitution y = vx >5
# Linear differential equations @3 >6
- Equations of the form dy/dx + P(x)y = Q(x) >6
- Integrating factor >7
`,

  '3d-geometry': `
# Coordinates of a point in space @0 >1
- Coordinate axes, coordinate planes and octants >1
# Distance between two points @1 >2
- Distance formula in three dimensions >2
# Section formula @2 >3
- Internal and external division; midpoint and centroid >3
# Direction cosines and direction ratios @3 >4
- Direction cosines and direction ratios of a line >4
- Direction ratios of the line through two points >5
# Equation of a line @6 >6
- Vector and Cartesian equations of a line through a point in a given direction >6
- Line through two points >7
# Angle between two lines @4 >8
- Angle between two intersecting lines; perpendicular and parallel lines >8
# Skew lines and the shortest distance @5 >9
- Skew lines >9
- Shortest distance between two lines and its equation >10
- Distance between parallel lines >11
- Coplanar lines [A] >12
# Plane [A] >13
- Equation of a plane in its various forms >13
- Plane through the intersection of two planes >14
- Distance of a point from a plane >15
- Angle between two planes >16
- Angle between a line and a plane >17
`,

  'vector-algebra': `
# Vectors and scalars @0 >1
- Vectors and scalars; magnitude and direction; position vector >1
- Types of vectors: zero, unit, collinear, coinitial and equal vectors >2
# Addition of vectors @1 >3
- Triangle and parallelogram laws; properties of addition >3
- Multiplication of a vector by a scalar >4
- Section formula in vector form >5
# Components of a vector @2 >6
- Components in two and three dimensions; unit vectors i, j and k >6
- Direction cosines and direction ratios of a vector >7
# Scalar (dot) product @3 >8
- Definition and properties >8
- Angle between two vectors; projection of a vector on a line >9
# Vector (cross) product @3 >10
- Definition and properties >10
- Area of a triangle and a parallelogram >11
# Scalar triple product [A] @4 >12
- Scalar triple product and its geometrical meaning >12
- Condition for coplanarity of three vectors >13
# Vector triple product [A] >14
- Vector triple product and its expansion >14
`,

  'statistics-probability': `
# Measures of central tendency @0
- Mean, median and mode of ungrouped data
- Mean, median and mode of grouped data
# Measures of dispersion @1
- Range and mean deviation
- Variance and standard deviation of ungrouped and grouped data
- Analysis of frequency distributions with the same mean but different variances [A]
# Random experiments and events @2
- Random experiment, outcomes and sample space
- Types of events: impossible, simple and compound; mutually exclusive and exhaustive events
- Probability of an event; computing probabilities using permutations and combinations
# Addition and multiplication theorems @3
- Addition theorem of probability
- Conditional probability
- Multiplication theorem; independent events
# Total probability and Bayes' theorem @4
- Theorem of total probability
- Bayes' theorem
# Random variables and their distributions @5
- Random variable and its probability distribution
- Mean and variance of a random variable
`
};
