// Book chapter: Differential Equations. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figFamily = D.plot({ w: 300, h: 230, x: [-2, 2], y: [-4, 4], xticks: [[1, '1'], [-1, '−1']], yticks: [[2, '2'], [-2, '−2']],
  fns: [-1, -0.5, 0.5, 1, 1.5].map(function (C, i) { return { f: function (x) { return C * Math.exp(x); }, color: ['r', 'o', 'g', 'b', 'p'][i], w: 1.8 }; }).concat([{ f: function () { return 0; }, color: 'm', w: 1 }]),
  texts: [{ x: 1.25, y: 3.6, s: 'y = Ceˣ', color: 'b', size: 11 }, { x: -1.6, y: -3.4, s: 'C < 0', color: 'r', size: 10 }],
  label: 'Family of solutions of dy/dx = y' });

var figSlope = D.plot({ w: 260, h: 260, x: [-2.4, 2.4], y: [-2.4, 0], eq: true, xticks: [], yticks: [],
  segs: (function () { var s = []; for (var x = -2; x <= 2.01; x += 0.5) for (var y = -2; y <= 2.01; y += 0.5) { if (Math.abs(y) < 0.01 && Math.abs(x) < 0.01) continue; var dx = y, dy = -x, L = Math.hypot(dx, dy) || 1; s.push({ x1: x - 0.17 * dx / L, y1: y - 0.17 * dy / L, x2: x + 0.17 * dx / L, y2: y + 0.17 * dy / L, color: 'm', w: 1.3 }); } return s; })(),
  param: [1, 1.8].map(function (r, i) { return { fx: function (t) { return r * Math.cos(t); }, fy: function (t) { return r * Math.sin(t); }, t: [0, 2 * Math.PI], color: i ? 'o' : 'b', w: 2 }; }),
  label: 'Slope field of dy/dx = -x/y with solution circles' });

// ---------- chapter text ----------
JEE.book('maths', 'differential-equations', {
  intro: [
    R`A <b>differential equation</b> relates an unknown function to its derivatives. Many laws of nature are of this kind: the rate of growth of a population is proportional to its size, the rate of cooling to the temperature difference, the acceleration of a spring to its displacement. Solving the equation tells us the function itself.`,
    R`This chapter covers order and degree, general and particular solutions, forming a differential equation from a family of curves, and three methods of solution for first-order equations: variables separable, homogeneous equations and linear equations with an integrating factor.`
  ],
  sections: [
    { h: R`Ordinary differential equations; order and degree`, t: [0], blocks: [
      R`An equation involving an independent variable x, a dependent variable y and derivatives of y with respect to x is an <b>ordinary differential equation</b>, e.g. \(\dfrac{dy}{dx} = \cos x\) or \(\dfrac{d^2y}{dx^2} + y = 0\).`,
      { points: [R`The <b>order</b> is the order of the highest derivative present.`, R`The <b>degree</b> is the power of the highest-order derivative, after the equation is made free of radicals and fractions in the derivatives, <b>provided it is a polynomial in the derivatives</b>. If not (e.g. it contains \(\sin y'\) or \(e^{y''}\)), the degree is not defined.`] },
      { ex: { q: R`Find the order and degree of (a) \(\left(\dfrac{d^2y}{dx^2}\right)^3 + \left(\dfrac{dy}{dx}\right)^4 + y = 0\) (b) \(\sqrt{1 + (y')^2} = y''\) (c) \(y'' + \sin(y') = 0\).`,
        steps: [R`(a) Highest derivative y″, power 3.`, R`(b) Square: 1 + (y′)² = (y″)²: order 2, degree 2.`, R`(c) Not a polynomial in y′: degree not defined.`], ans: R`(a) order 2, degree 3 (b) order 2, degree 2 (c) order 2, degree not defined` } },
      { check: { q: R`What are the order and degree of \(\dfrac{dy}{dx} + y = e^x\)?`, ans: R`Order 1, degree 1.` } }
    ] },

    { h: R`General and particular solutions`, t: [0], blocks: [
      R`A function that satisfies the equation is a <b>solution</b>. The <b>general solution</b> contains as many arbitrary constants as the order of the equation; a <b>particular solution</b> is obtained by giving the constants specific values, usually from initial conditions such as y(0) = 1.`,
      { fig: figFamily, cap: R`The general solution y = Ceˣ of dy/dx = y is a family of curves; an initial condition picks out one of them.` },
      { ex: { q: R`Verify that y = A cos x + B sin x is the general solution of y″ + y = 0, and find the particular solution with y(0) = 2, y′(0) = 3.`,
        steps: [R`y″ = −A cos x − B sin x = −y, so y″ + y = 0, with two constants (order 2).`, R`y(0) = A = 2; y′(0) = B = 3.`], ans: R`y = 2 cos x + 3 sin x` } },
      { check: { q: R`How many arbitrary constants does the general solution of a third-order equation have?`, ans: R`Three.` } }
    ] },

    { h: R`Formation of differential equations`, t: [0], blocks: [
      R`To form the differential equation of a family of curves with n arbitrary constants, differentiate n times and eliminate the constants. The result has order n.`,
      { ex: { q: R`Form the differential equation of the family \(y = Ae^{2x} + Be^{-x}\).`,
        steps: [R`\(y' = 2Ae^{2x} - Be^{-x}\), \(y'' = 4Ae^{2x} + Be^{-x}\).`, R`\(y'' - y' = 2Ae^{2x} + 2Be^{-x} = 2y\).`], ans: R`\(y'' - y' - 2y = 0\)` } },
      { ex: { q: R`Form the differential equation of all circles centred at the origin.`,
        steps: [R`x² + y² = r² (one constant). Differentiate: 2x + 2yy′ = 0.`], ans: R`x + y dy/dx = 0` } },
      { check: { q: R`What is the order of the differential equation of the family y = mx + c (all straight lines)?`, ans: R`2 (two constants): y″ = 0.` } }
    ] },

    { h: R`Variables separable method`, t: [1], blocks: [
      R`If the equation can be written as \(\dfrac{dy}{dx} = f(x)\,g(y)\), separate the variables and integrate both sides: \[\int\frac{dy}{g(y)} = \int f(x)\,dx + C.\]`,
      { fig: figSlope, cap: R`The slope field of dy/dx = −x/y: short lines show the slope at each point, and the solution curves x² + y² = C follow them.` },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = \dfrac{1 + y^2}{1 + x^2}\).`,
        steps: [R`\(\int\dfrac{dy}{1 + y^2} = \int\dfrac{dx}{1 + x^2}\).`], ans: R`\(\tan^{-1}y = \tan^{-1}x + C\)` } },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = 2xy\), y(0) = 1.`,
        steps: [R`\(\int\dfrac{dy}{y} = \int 2x\,dx \Rightarrow \ln|y| = x^2 + C\).`, R`y(0) = 1 ⟹ C = 0.`], ans: R`\(y = e^{x^2}\)` } },
      { h3: R`Applications: growth, decay and cooling` },
      R`<b>Exponential growth/decay:</b> \(\dfrac{dN}{dt} = kN \Rightarrow N = N_0e^{kt}\) (populations, radioactive decay with k < 0, compound interest). <b>Newton's law of cooling:</b> \(\dfrac{dT}{dt} = -k(T - T_s) \Rightarrow T - T_s = (T_0 - T_s)e^{-kt}\).`,
      { ex: { q: R`A body cools from 80 °C to 60 °C in 10 minutes in a room at 20 °C. How long does it take to reach 40 °C (from 80 °C)?`,
        steps: [R`T − 20 = 60e^{−kt}. At t = 10: 40 = 60e^{−10k} ⟹ e^{−10k} = 2/3.`, R`40 °C: 20 = 60e^{−kt} ⟹ e^{−kt} = 1/3 ⟹ t = 10 ln 3/ln(3/2).`], ans: R`≈ 27.1 minutes` } },
      { check: { q: R`Solve dy/dx = eˣ⁻ʸ.`, ans: R`eʸ dy = eˣ dx ⟹ eʸ = eˣ + C.` } }
    ] },

    { h: R`Homogeneous differential equations`, t: [2], blocks: [
      R`A function F(x, y) is <b>homogeneous of degree n</b> if \(F(\lambda x, \lambda y) = \lambda^nF(x, y)\). The equation \(\dfrac{dy}{dx} = F(x, y)\) is <b>homogeneous</b> if F is homogeneous of degree 0, i.e. it can be written as a function of y/x alone: \(\dfrac{dy}{dx} = g\!\left(\dfrac yx\right)\).`,
      { derive: R`Method: substitute y = vx`, open: true, steps: [R`Then \(\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}\).`, R`The equation becomes \(v + x\dfrac{dv}{dx} = g(v)\), i.e. \(\dfrac{dv}{g(v) - v} = \dfrac{dx}{x}\): variables separable.`, R`Integrate, then replace v by y/x. (For dx/dy = h(x/y), put x = vy instead.)`] },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = \dfrac{x + y}{x}\).`,
        steps: [R`y = vx: \(v + x\dfrac{dv}{dx} = 1 + v \Rightarrow dv = \dfrac{dx}{x}\).`, R`v = ln|x| + C.`], ans: R`\(y = x\ln|x| + Cx\)` } },
      { ex: { q: R`Solve \((x^2 + y^2)\,dx = 2xy\,dy\).`,
        steps: [R`\(\dfrac{dy}{dx} = \dfrac{x^2 + y^2}{2xy}\); y = vx: \(v + xv' = \dfrac{1 + v^2}{2v} \Rightarrow xv' = \dfrac{1 - v^2}{2v}\).`, R`\(\int\dfrac{2v\,dv}{1 - v^2} = \int\dfrac{dx}{x} \Rightarrow -\ln|1 - v^2| = \ln|x| + c \Rightarrow x(1 - v^2) = C\).`], ans: R`\(x^2 - y^2 = Cx\)` } },
      { check: { q: R`Is dy/dx = (x² + y²)/(xy) homogeneous?`, ans: R`Yes: the right side is a function of y/x, namely (1 + v²)/v.` } }
    ] },

    { h: R`Linear differential equations`, t: [3], blocks: [
      R`A first-order <b>linear</b> differential equation has the form \[\frac{dy}{dx} + P(x)\,y = Q(x),\] where P and Q are functions of x only (or constants); y and dy/dx appear only to the first power and are not multiplied together. Similarly \(\dfrac{dx}{dy} + P(y)x = Q(y)\) is linear in x.`,
      { mistake: R`Calling dy/dx + y² = x linear. The y² term makes it non-linear.` },
      { check: { q: R`Is \(x\dfrac{dy}{dx} + 2y = x^2\) linear? What are P and Q?`, ans: R`Yes; dividing by x: P = 2/x, Q = x.` } }
    ] },

    { h: R`The integrating factor`, t: [3], blocks: [
      { derive: R`Solution of dy/dx + Py = Q`, open: true, steps: [R`Multiply by the <b>integrating factor</b> \(\text{IF} = e^{\int P\,dx}\). Since \(\dfrac{d}{dx}(\text{IF}) = P\cdot\text{IF}\), the left side becomes \(\dfrac{d}{dx}(y\cdot\text{IF})\).`, R`Integrate: \[y \cdot \text{IF} = \int Q\cdot\text{IF}\,dx + C.\]`] },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} + y = e^x\).`,
        steps: [R`IF = \(e^{\int 1\,dx} = e^x\).`, R`\(ye^x = \int e^{2x}\,dx = \tfrac12e^{2x} + C\).`], ans: R`\(y = \tfrac12e^x + Ce^{-x}\)` } },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} + \dfrac{y}{x} = x^2\) (x > 0).`,
        steps: [R`IF = \(e^{\int dx/x} = x\).`, R`\(xy = \int x^3\,dx = \frac{x^4}{4} + C\).`], ans: R`\(y = \dfrac{x^3}{4} + \dfrac Cx\)` } },
      { adv: R`<b>Bernoulli equation</b> \(\dfrac{dy}{dx} + Py = Qy^n\): divide by yⁿ and put \(z = y^{1-n}\); it becomes linear in z: \(\dfrac{dz}{dx} + (1 - n)Pz = (1 - n)Q\).` },
      { tip: R`Useful integrating factors: P = 1/x → IF = x; P = −1/x → IF = 1/x; P = tan x → IF = sec x; P = cot x → IF = sin x.` },
      { check: { q: R`Find the integrating factor of dy/dx + y tan x = sec x.`, ans: R`e^{∫tan x dx} = sec x.` } }
    ] }
  ],
  summary: [
    R`Order = highest derivative; degree = its power when the equation is a polynomial in derivatives (otherwise undefined).`,
    R`General solution has n constants (order n); particular solution from initial conditions. Formation: differentiate n times and eliminate n constants.`,
    R`Variables separable: ∫dy/g(y) = ∫f(x)dx + C. Growth/decay N = N₀e^{kt}; cooling T − Tₛ = (T₀ − Tₛ)e^{−kt}.`,
    R`Homogeneous dy/dx = g(y/x): put y = vx, separate v and x.`,
    R`Linear dy/dx + Py = Q: IF = e^{∫P dx}; y·IF = ∫Q·IF dx + C. Bernoulli reduces to linear with z = y^{1−n}.`
  ],
  refs: [
    { t: R`OpenStax Calculus Vol. 2, §4.1 Basics of Differential Equations`, url: 'https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations' },
    { t: R`OpenStax Calculus Vol. 2, §4.3 Separable Equations`, url: 'https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations' },
    { t: R`OpenStax Calculus Vol. 2, §4.5 First-order Linear Equations`, url: 'https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations' },
    { t: R`Wikipedia: Integrating factor`, url: 'https://en.wikipedia.org/wiki/Integrating_factor' }
  ]
});
})();
