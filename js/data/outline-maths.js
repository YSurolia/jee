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
# Sets and their representation @0
- Sets and their elements; roster and set-builder forms
- Empty, finite and infinite sets; equal sets
- Subsets; intervals as subsets of the real line
- Universal set and Venn diagrams
# Operations on sets @1
- Union, intersection and complement
- Difference of sets
- Symmetric difference [A]
- Algebraic properties of set operations; De Morgan's laws
- Practical problems on union and intersection
# Power set [M] @2
- Power set and the number of its elements
# Cartesian product and relations @3
- Ordered pairs and the Cartesian product of sets
- Relations; domain, codomain and range of a relation
- Types of relations: empty, universal, reflexive, symmetric and transitive
- Equivalence relations and equivalence classes
# Functions @4
- Function as a special relation; functions as mappings
- Domain, codomain and range of a function @7
- One-one, many-one, into and onto functions; bijections
- Even and odd functions [A]
# Special functions
- Polynomial, power, exponential, logarithmic and trigonometric functions
- Absolute value and greatest integer functions
# Algebra and composition of functions @5
- Sum, difference, product and quotient of functions
- Composition of functions
# Invertible functions @6
- Inverse of a function and the condition for invertibility
# Logarithms [A]
- Definition of a logarithm; laws of logarithms
- Change of base; solving simple logarithmic equations
`,

  'complex-quadratic': `
# Complex numbers @0
- Need for complex numbers; powers of i
- Complex numbers as ordered pairs of reals; the form a + ib
- Equality of complex numbers
# Algebra of complex numbers @1
- Addition, subtraction, multiplication and division
- Conjugate and its properties
- Square root of a complex number
# Argand plane @2
- Representation of complex numbers in a plane (Argand diagram)
- Geometric interpretations of complex numbers and their operations [A]
# Modulus and argument @3
- Modulus and its properties
- Triangle inequality [A]
- Argument (amplitude) and principal argument
- Polar representation of a complex number @4
# Cube roots of unity [A] @5
- Cube roots of unity and their properties
# Quadratic equations @6
- Quadratic equations in the real and complex number systems and their solutions
- Statement of the fundamental theorem of algebra [A]
# Relations between roots and coefficients @7
- Sum and product of roots
- Symmetric functions of roots [A]
# Nature of roots @8
- Discriminant and the nature of roots
# Formation of quadratic equations @9
- Forming a quadratic equation with given roots
`,

  'permutations-combinations': `
# Fundamental principle of counting @0
- Multiplication and addition principles
- Factorial notation
# Permutations @1
- Permutation as an arrangement; meaning of P(n, r) @3
- Permutations when some objects are alike
- Permutations with repetition allowed
- Permutations with restrictions
# Combinations @2
- Combination as a selection; meaning of C(n, r) and its properties
- Relation between P(n, r) and C(n, r)
- Selections with restrictions
# Simple applications @4
- Arrangement and selection problems
- Counting lines, triangles and diagonals from given points
`,

  'binomial-theorem': `
# Binomial theorem for a positive integral index @0
- Statement and proof
- Pascal's triangle
- Binomial coefficients
# General term and middle term @1
- General term
- Middle term(s)
- Coefficient of a given power; term independent of x
# Properties of binomial coefficients [A]
- Sums of binomial coefficients
- Identities involving binomial coefficients
# Simple applications @2
- Approximations, divisibility and remainders
`,

  'sequences-series': `
# Sequences and series @0
- Sequences, series and progressions
# Arithmetic progression @0
- nth term and sum of n terms
- Properties of an arithmetic progression
# Geometric progression @0
- nth term and sum of n terms
- Infinite geometric series [A]
# Arithmetic and geometric means @1
- Arithmetic mean; inserting arithmetic means between two numbers
- Geometric mean; inserting geometric means between two numbers
# Relation between AM and GM @2
- AM ≥ GM and its applications
# Special sums [A]
- Sum of the first n natural numbers
- Sums of the squares and cubes of the first n natural numbers
`,

  'trigonometry': `
# Angles and their measurement
- Degree and radian measure; length of an arc
# Trigonometric functions @1
- Trigonometric functions of any angle; signs in the four quadrants
- Domain and range of trigonometric functions
- Periodicity and graphs of trigonometric functions
# Trigonometric identities @0
- Fundamental identities
- Addition and subtraction formulae
- Multiple and sub-multiple angle formulae
- Sum-to-product and product-to-sum formulae
# Trigonometric equations [A] @3
- Principal and general solutions
- Solving trigonometric equations
# Inverse trigonometric functions @2
- Definitions, domains and principal value branches
- Graphs of inverse trigonometric functions
- Elementary properties of inverse trigonometric functions
`,

  'coordinate-geometry': `
# Cartesian coordinates @0
- Cartesian system of rectangular coordinates in a plane
- Distance formula
- Section formula
- Shift of origin [A]
# Locus @0
- Locus and its equation
- Locus problems
# Slope of a line @1
- Slope of a line; angle between two lines
- Conditions for parallel and perpendicular lines
- Intercepts of a line on the coordinate axes
# Straight lines @2
- Various forms of the equation of a line
- Intersection of lines; condition for concurrence of three lines
- Lines through the point of intersection of two given lines [A]
- Equations of the bisectors of the angles between two lines [A]
# Distance of a point from a line @3
- Distance of a point from a line
- Distance between parallel lines
# Centres of a triangle @4
- Coordinates of the centroid, orthocentre and circumcentre
- Incentre [A]
# Circle @5
- Standard and general forms of the equation of a circle; centre and radius
- Equation of a circle when the endpoints of a diameter are given
- Points of intersection of a line and a circle
- Parametric equations of a circle [A]
- Equations of tangent, normal and chord [A]
- Intersection of two circles; circles through the points of intersection of two circles, or of a circle and a line [A]
# Conic sections @6
- Sections of a cone
- Parabola in standard form: focus, directrix and latus rectum
- Ellipse in standard form: foci, directrices and eccentricity
- Hyperbola in standard form: foci, directrices and eccentricity
- Parametric equations of conics [A]
- Equations of tangent and normal to conics [A]
`,

  'matrices-determinants': `
# Matrices @0
- Matrix as a rectangular array of real numbers; order; equality of matrices
- Types of matrices: row, column, square, diagonal, scalar, identity and zero
# Algebra of matrices @0
- Addition and multiplication by a scalar
- Product of matrices and its properties
- Transpose of a matrix
- Symmetric and skew-symmetric matrices and their properties
- Elementary row and column transformations [A]
# Determinants @1
- Determinants of order two and three; minors and cofactors
- Evaluation and properties of determinants @2
# Area of a triangle using determinants [M] @3
- Area of a triangle; condition for collinearity
# Adjoint and inverse of a matrix @4
- Adjoint of a square matrix
- Inverse of a square matrix of order up to three
- Properties of the adjoint and the inverse
# Systems of linear equations @5
- Test of consistency of a system of equations
- Solution of simultaneous linear equations in two or three variables using matrices
- Solution using determinants (Cramer's rule)
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
# Integration as an anti-derivative @0
- Indefinite integral as the inverse process of differentiation
- Properties of indefinite integrals
# Fundamental integrals @1
- Integrals of algebraic, trigonometric, exponential and logarithmic functions
# Methods of integration @2
- Integration by substitution
- Integration by parts
- Integration by partial fractions
# Integration using trigonometric identities @3
- Using identities to simplify integrands
# Integrals of special forms @4
- ∫dx/(x² ± a²), ∫dx/√(x² ± a²), ∫dx/(a² − x²), ∫dx/√(a² − x²)
- ∫dx/(ax² + bx + c), ∫dx/√(ax² + bx + c)
- ∫(px + q)dx/(ax² + bx + c), ∫(px + q)dx/√(ax² + bx + c)
- ∫√(a² ± x²)dx and ∫√(x² − a²)dx
# Definite integrals @5
- Definite integral as the limit of a sum [A]
- Fundamental theorem of calculus
- Evaluation of definite integrals
# Properties of definite integrals @6
- Properties of definite integrals and their use
# Area under simple curves @7
- Area bounded by a curve and an axis
- Area between two curves
- Areas of regions bounded by lines, circles, parabolas and ellipses
`,

  'differential-equations': `
# Basic concepts @0
- Ordinary differential equations; order and degree
- General and particular solutions
- Formation of ordinary differential equations [A]
# Variables separable method @1
- Solving equations by separating the variables
# Homogeneous differential equations @2
- Homogeneous equations of first order and first degree; the substitution y = vx
# Linear differential equations @3
- Equations of the form dy/dx + P(x)y = Q(x)
- Integrating factor
`,

  '3d-geometry': `
# Coordinates of a point in space @0
- Coordinate axes, coordinate planes and octants
# Distance between two points @1
- Distance formula in three dimensions
# Section formula @2
- Internal and external division; midpoint and centroid
# Direction cosines and direction ratios @3
- Direction cosines and direction ratios of a line
- Direction ratios of the line through two points
# Equation of a line @6
- Vector and Cartesian equations of a line through a point in a given direction
- Line through two points
# Angle between two lines @4
- Angle between two intersecting lines; perpendicular and parallel lines
# Skew lines and the shortest distance @5
- Skew lines
- Shortest distance between two lines and its equation
- Distance between parallel lines
- Coplanar lines [A]
# Plane [A]
- Equation of a plane in its various forms
- Plane through the intersection of two planes
- Distance of a point from a plane
- Angle between two planes
- Angle between a line and a plane
`,

  'vector-algebra': `
# Vectors and scalars @0
- Vectors and scalars; magnitude and direction; position vector
- Types of vectors: zero, unit, collinear, coinitial and equal vectors
# Addition of vectors @1
- Triangle and parallelogram laws; properties of addition
- Multiplication of a vector by a scalar
- Section formula in vector form
# Components of a vector @2
- Components in two and three dimensions; unit vectors i, j and k
- Direction cosines and direction ratios of a vector
# Scalar (dot) product @3
- Definition and properties
- Angle between two vectors; projection of a vector on a line
# Vector (cross) product @3
- Definition and properties
- Area of a triangle and a parallelogram
# Scalar triple product [A] @4
- Scalar triple product and its geometrical meaning
- Condition for coplanarity of three vectors
# Vector triple product [A]
- Vector triple product and its expansion
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
