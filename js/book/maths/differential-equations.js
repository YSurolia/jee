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

var figParab = D.plot({ w: 300, h: 220, x: [-2.2, 2.2], y: [-3, 3], xticks: [[1, '1'], [-1, '−1']], yticks: [[2, '2'], [-2, '−2']],
  fns: [2, 1, 0.5, -0.5, -1].map(function (C, i) { return { f: function (x) { return C * x * x; }, color: ['p', 'b', 'g', 'o', 'r'][i], w: 1.7 }; }),
  label: 'Family of parabolas y = C x squared' });

var figGrowth = D.plot({ w: 320, h: 220, x: [0, 5.4], y: [0, 5], noOrigin: false, xlabel: 't', mathLabels: false, xticks: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], yticks: [[1, 'N₀']],
  fns: [{ f: function (t) { return Math.exp(0.4 * t); }, color: 'g', label: 'growth, k > 0', lx: 0.6, ly: 3.4, math: false },
    { f: function (t) { return Math.exp(-0.6 * t); }, color: 'r', label: 'decay, k < 0', lx: 2.2, ly: 0.55, math: false },
    { f: function () { return 1; }, color: 'm', w: 1, dash: '4 3' }],
  label: 'Exponential growth and decay N equals N zero e to the k t' });

var figCool = (function () {
  var k = Math.log(1.5) / 10, t40 = Math.log(3) / k;
  return D.plot({ w: 340, h: 230, x: [0, 62], y: [0, 90], xlabel: 't (min)', mathLabels: false, xticks: [[10, '10'], [27.1, '27.1'], [50, '50']], yticks: [[20, '20'], [40, '40'], [60, '60'], [80, '80']],
    fns: [{ f: function (t) { return 20 + 60 * Math.exp(-k * t); }, color: 'o', label: 'T (°C)', lx: 4, ly: 86, math: false }, { f: function () { return 20; }, color: 'b', w: 1.2, dash: '5 4', label: 'room 20 °C', lx: 40, ly: 13, math: false }],
    segs: [{ x1: 10, y1: 0, x2: 10, y2: 60, color: 'm', w: 1, dash: '2 3' }, { x1: t40, y1: 0, x2: t40, y2: 40, color: 'm', w: 1, dash: '2 3' }],
    pts: [{ x: 10, y: 60, color: 'o' }, { x: t40, y: 40, color: 'o' }], label: 'Newton cooling curve' });
})();

var figLinear = D.plot({ w: 320, h: 230, x: [-1.5, 2.5], y: [-2, 6], xticks: [[1, '1'], [2, '2']], yticks: [[2, '2'], [4, '4']],
  fns: [-1, 0, 1, 2].map(function (C, i) { return { f: function (x) { return 0.5 * Math.exp(x) + C * Math.exp(-x); }, color: ['r', 'b', 'g', 'p'][i], w: i === 1 ? 2.4 : 1.6 }; }),
  texts: [{ x: 1.55, y: 5.4, s: 'y = ½eˣ (C = 0)', color: 'b', size: 11 }, { x: -0.5, y: 5.4, s: 'C = 2', color: 'p', size: 10 }, { x: -1.05, y: -1.6, s: 'C = −1', color: 'r', size: 10 }],
  label: 'Solutions of dy/dx + y = e to the x' });

// ---------- chapter text ----------
JEE.book('maths', 'differential-equations', {
  intro: [
    R`A <b>differential equation</b> relates an unknown function to its derivatives. Many laws of nature are of this kind: the rate of growth of a population is proportional to its size, the rate of cooling to the temperature difference, the acceleration of a spring to its displacement. Solving the equation tells us the function itself.`,
    R`This chapter covers order and degree, general and particular solutions, forming a differential equation from a family of curves, and three methods of solution for first-order equations: variables separable, homogeneous equations and linear equations with an integrating factor.`,
    R`Solving a differential equation is the reverse of differentiating, so integration does most of the work. The art lies in recognising the <b>type</b> of equation and choosing the step that turns it into something you can integrate: separating the variables, a substitution such as y = vx, or multiplying by an integrating factor. Each illustration below names its type first, and a checklist at the end summarises how to choose.`
  ],
  sections: [
    { h: R`Ordinary differential equations; order and degree`, t: [0], blocks: [
      R`An equation involving an independent variable x, a dependent variable y and derivatives of y with respect to x is an <b>ordinary differential equation</b>, e.g. \(\dfrac{dy}{dx} = \cos x\) or \(\dfrac{d^2y}{dx^2} + y = 0\).`,
      R`Think of a derivative as a rate: dy/dx says how fast y changes as x changes. An ordinary algebraic equation like \(x^2 = 4\) asks for a <b>number</b>; a differential equation like \(\dfrac{dy}{dx} = 2x\) asks for a <b>function</b> whose rate of change obeys a rule. Here every \(y = x^2 + C\) works, so a differential equation usually has a whole family of solutions.`,
      R`Differential equations appear wherever something changes. Newton's second law for a mass on a spring, \(m\dfrac{d^2x}{dt^2} = -kx\), is a second-order equation; the charge on a discharging capacitor obeys \(\dfrac{dq}{dt} = -\dfrac{q}{RC}\), a first-order one. In JEE Main the focus is on first-order, first-degree equations and the three standard ways of solving them.`,
      { points: [R`The <b>order</b> is the order of the highest derivative present.`, R`The <b>degree</b> is the power of the highest-order derivative, after the equation is made free of radicals and fractions in the derivatives, <b>provided it is a polynomial in the derivatives</b>. If not (e.g. it contains \(\sin y'\) or \(e^{y''}\)), the degree is not defined.`] },
      { ex: { q: R`Find the order and degree of (a) \(\left(\dfrac{d^2y}{dx^2}\right)^3 + \left(\dfrac{dy}{dx}\right)^4 + y = 0\) (b) \(\sqrt{1 + (y')^2} = y''\) (c) \(y'' + \sin(y') = 0\).`,
        steps: [R`(a) Highest derivative y″, power 3.`, R`(b) Square: 1 + (y′)² = (y″)²: order 2, degree 2.`, R`(c) Not a polynomial in y′: degree not defined.`], ans: R`(a) order 2, degree 3 (b) order 2, degree 2 (c) order 2, degree not defined` } },
      { ex: { q: R`Find the order and degree of \(\left(\dfrac{d^3y}{dx^3}\right)^{2/3} = \dfrac{d^2y}{dx^2}\).`,
        steps: [R`Clear the fractional power by cubing both sides: \(\left(y^{\prime\prime\prime}\right)^2 = \left(y^{\prime\prime}\right)^3\).`, R`Highest derivative y‴, now raised to the power 2.`], ans: R`Order 3, degree 2` } },
      { ex: { q: R`Find the order and degree of \(y = x\dfrac{dy}{dx} + \sqrt{1 + \left(\dfrac{dy}{dx}\right)^2}\).`,
        steps: [R`Isolate the root and square: \((y - xy')^2 = 1 + (y')^2\).`, R`Expanding gives \((x^2 - 1)(y')^2 - 2xyy' + y^2 - 1 = 0\): highest derivative y′, power 2.`], ans: R`Order 1, degree 2` } },
      { mistake: R`Reading off the degree before clearing radicals and fractional powers. In \(\sqrt{y''} = y'\) the degree is not ½: squaring gives \(y'' = (y')^2\), degree 1.` },
      { tip: R`The order of the equation of a family of curves equals the number of independent arbitrary constants in the family, so order questions and formation questions are two sides of the same idea.` },
      { check: { q: R`What are the order and degree of \(\dfrac{dy}{dx} + y = e^x\)?`, ans: R`Order 1, degree 1.` } }
    ] },

    { h: R`General and particular solutions`, t: [0], blocks: [
      R`A function that satisfies the equation is a <b>solution</b>. The <b>general solution</b> contains as many arbitrary constants as the order of the equation; a <b>particular solution</b> is obtained by giving the constants specific values, usually from initial conditions such as y(0) = 1.`,
      { fig: figFamily, cap: R`The general solution y = Ceˣ of dy/dx = y is a family of curves; an initial condition picks out one of them.` },
      { ex: { q: R`Verify that y = A cos x + B sin x is the general solution of y″ + y = 0, and find the particular solution with y(0) = 2, y′(0) = 3.`,
        steps: [R`y″ = −A cos x − B sin x = −y, so y″ + y = 0, with two constants (order 2).`, R`y(0) = A = 2; y′(0) = B = 3.`], ans: R`y = 2 cos x + 3 sin x` } },
      { ex: { q: R`Find the particular solution of \(\dfrac{dy}{dx} = 3x^2\) that passes through (1, 2).`,
        steps: [R`Integrate: the general solution is \(y = x^3 + C\).`, R`At x = 1, y = 2: 2 = 1 + C, so C = 1.`], ans: R`\(y = x^3 + 1\)` } },
      R`A solution may be <b>explicit</b> (y written as a formula in x, like \(y = x^3 + 1\)) or <b>implicit</b> (a relation such as \(x^2 + y^2 = C\)). Both are acceptable; JEE answers are often left in implicit form.`,
      { note: R`An equation together with a starting value, such as dy/dx = 3x², y(1) = 2, is called an <b>initial value problem</b>. The equation fixes the shape of the solution curves; the starting value picks out the one curve that passes through the given point.`, title: 'Initial value problems' },
      { ex: { q: R`Verify that \(y = e^{2x}\) and \(y = e^{-2x}\) are both solutions of \(y'' - 4y = 0\).`,
        steps: [R`For \(y = e^{2x}\): \(y'' = 4e^{2x} = 4y\) ✓. For \(y = e^{-2x}\): \(y'' = 4e^{-2x} = 4y\) ✓.`, R`So the general solution (two constants, order 2) is \(y = Ae^{2x} + Be^{-2x}\).`], ans: R`Both satisfy it` } },
      { check: { q: R`How many arbitrary constants does the general solution of a third-order equation have?`, ans: R`Three.` } }
    ] },

    { h: R`Formation of differential equations`, t: [0], blocks: [
      R`To form the differential equation of a family of curves with n arbitrary constants, differentiate n times and eliminate the constants. The result has order n.`,
      { points: [R`Write the equation of the family and count its <b>essential</b> (independent) constants.`, R`Differentiate as many times as there are constants.`, R`Use the n + 1 equations (the original and its n derivatives) to eliminate every constant.`] },
      { fig: figParab, cap: R`The family y = Cx²: one constant, so one differentiation. Every parabola satisfies xy′ = 2y, the differential equation of the whole family.` },
      { ex: { q: R`Form the differential equation of the family of parabolas \(y = Cx^2\).`,
        steps: [R`\(y' = 2Cx\), so \(C = \dfrac{y'}{2x}\).`, R`Substitute: \(y = \dfrac{y'}{2x}x^2 = \dfrac{xy'}{2}\).`], ans: R`\(x\dfrac{dy}{dx} = 2y\)` } },
      { ex: { q: R`Form the differential equation of the family \(y = Ae^{2x} + Be^{-x}\).`,
        steps: [R`\(y' = 2Ae^{2x} - Be^{-x}\), \(y'' = 4Ae^{2x} + Be^{-x}\).`, R`\(y'' - y' = 2Ae^{2x} + 2Be^{-x} = 2y\).`], ans: R`\(y'' - y' - 2y = 0\)` } },
      { ex: { q: R`Form the differential equation of all circles centred at the origin.`,
        steps: [R`x² + y² = r² (one constant). Differentiate: 2x + 2yy′ = 0.`], ans: R`x + y dy/dx = 0` } },
      { ex: { q: R`Form the differential equation of all straight lines through the origin.`,
        steps: [R`y = mx (one constant). y′ = m, so y = xy′.`], ans: R`\(x\dfrac{dy}{dx} - y = 0\)` } },
      { ex: { q: R`Form the differential equation of \(y = a\sin(x + b)\), where a and b are constants.`,
        steps: [R`Two constants, so differentiate twice: \(y' = a\cos(x + b)\), \(y'' = -a\sin(x + b) = -y\).`], ans: R`\(y'' + y = 0\)` } },
      { ex: { q: R`Form the differential equation of all circles with their centres on the x-axis.`,
        steps: [R`\((x - a)^2 + y^2 = r^2\): two constants a and r.`, R`Differentiate: \((x - a) + yy' = 0\). Differentiate again: \(1 + (y')^2 + yy'' = 0\); both constants have gone.`], ans: R`\(yy'' + (y')^2 + 1 = 0\) (order 2)` } },
      { mistake: R`Counting constants that are not independent. \(y = (A + B)e^x\) looks like it has two constants, but A + B is really one constant, so its equation is y′ = y, of order 1.` },
      { check: { q: R`What is the order of the differential equation of the family y = mx + c (all straight lines)?`, ans: R`2 (two constants): y″ = 0.` } }
    ] },

    { h: R`Variables separable method`, t: [1], blocks: [
      R`If the equation can be written as \(\dfrac{dy}{dx} = f(x)\,g(y)\), separate the variables and integrate both sides: \[\int\frac{dy}{g(y)} = \int f(x)\,dx + C.\]`,
      { fig: figSlope, cap: R`The slope field of dy/dx = −x/y: short lines show the slope at each point, and the solution curves x² + y² = C follow them.` },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = \dfrac{1 + y^2}{1 + x^2}\).`,
        steps: [R`\(\int\dfrac{dy}{1 + y^2} = \int\dfrac{dx}{1 + x^2}\).`], ans: R`\(\tan^{-1}y = \tan^{-1}x + C\)` } },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = 2xy\), y(0) = 1.`,
        steps: [R`\(\int\dfrac{dy}{y} = \int 2x\,dx \Rightarrow \ln|y| = x^2 + C\).`, R`y(0) = 1 ⟹ C = 0.`], ans: R`\(y = e^{x^2}\)` } },
      { ex: { q: R`Solve \((1 + e^{2x})\,dy + (1 + y^2)\,e^x\,dx = 0\) with y(0) = 1.`,
        steps: [R`Separate: \(\dfrac{dy}{1 + y^2} = -\dfrac{e^x\,dx}{1 + e^{2x}}\). Put \(t = e^x\) on the right: \(\tan^{-1}y = -\tan^{-1}e^x + C\).`, R`y(0) = 1: \(\frac\pi4 = -\frac\pi4 + C\), so \(C = \frac\pi2\).`], ans: R`\(\tan^{-1}y + \tan^{-1}e^x = \dfrac\pi2\)` } },
      { h3: R`Equations that become separable after a substitution` },
      R`If \(\dfrac{dy}{dx} = f(ax + by + c)\), put \(z = ax + by + c\). Then \(\dfrac{dz}{dx} = a + b\dfrac{dy}{dx} = a + bf(z)\), which is separable in z and x.`,
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = (x + y)^2\).`,
        steps: [R`Put z = x + y: \(\dfrac{dz}{dx} = 1 + z^2\).`, R`\(\int\dfrac{dz}{1 + z^2} = \int dx \Rightarrow \tan^{-1}z = x + C\).`], ans: R`\(x + y = \tan(x + C)\)` } },
      { h3: R`Applications: growth, decay and cooling` },
      R`<b>Exponential growth and decay.</b> When a quantity changes at a rate proportional to itself, \(\dfrac{dN}{dt} = kN\). Separating, \(\int\dfrac{dN}{N} = \int k\,dt\), so \(\ln N = kt + c\) and \(N = N_0e^{kt}\), where \(N_0\) is the value at t = 0. With k > 0 this is growth (populations, compound interest); with k < 0 it is decay (radioactivity, drug levels in the blood).`,
      { fig: figGrowth, cap: R`Both curves start at \(N_0\). Growth gets faster and faster; decay slows down and never quite reaches zero.` },
      { ex: { q: R`A population doubles in 20 years. Assuming exponential growth, how long does it take to triple?`,
        steps: [R`\(2 = e^{20k}\), so \(k = \dfrac{\ln 2}{20}\).`, R`\(3 = e^{kt}\): \(t = \dfrac{\ln 3}{k} = \dfrac{20\ln3}{\ln2}\).`], ans: R`≈ 31.7 years` } },
      { ex: { q: R`Carbon-14 has a half-life of 5730 years. What fraction of it is left after 2000 years?`,
        steps: [R`\(N = N_0e^{-kt}\) with \(e^{-5730k} = \frac12\), so \(\dfrac{N}{N_0} = \left(\frac12\right)^{t/5730}\).`, R`\(\left(\frac12\right)^{2000/5730} = 2^{-0.349}\).`], ans: R`≈ 0.785 (about 78.5%)` } },
      R`<b>Newton's law of cooling.</b> A hot body cools at a rate proportional to how much hotter it is than its surroundings: \(\dfrac{dT}{dt} = -k(T - T_s)\). This is separable in \(T - T_s\), and gives \[T - T_s = (T_0 - T_s)\,e^{-kt}.\]`,
      { derive: R`Solving the cooling equation`, steps: [R`Let θ = T − T_s, the excess temperature. Since T_s is constant, \(\dfrac{d\theta}{dt} = \dfrac{dT}{dt} = -k\theta\).`, R`Separate: \(\int\dfrac{d\theta}{\theta} = -\int k\,dt\), so \(\ln\theta = -kt + c\) and \(\theta = \theta_0e^{-kt}\).`, R`At t = 0, \(\theta_0 = T_0 - T_s\). So \(T - T_s = (T_0 - T_s)e^{-kt}\): the excess temperature decays exponentially.`] },
      { fig: figCool, cap: R`A body at 80 °C in a 20 °C room: it cools fast at first, then more and more slowly, approaching the room temperature. It reaches 60 °C at 10 min and 40 °C at about 27.1 min.` },
      { ex: { q: R`A body cools from 80 °C to 60 °C in 10 minutes in a room at 20 °C. How long does it take to reach 40 °C (from 80 °C)?`,
        steps: [R`T − 20 = 60e^{−kt}. At t = 10: 40 = 60e^{−10k} ⟹ e^{−10k} = 2/3.`, R`40 °C: 20 = 60e^{−kt} ⟹ e^{−kt} = 1/3 ⟹ t = 10 ln 3/ln(3/2).`], ans: R`≈ 27.1 minutes` } },
      { ex: { q: R`The slope of the tangent at any point of a curve is twice the slope of the line joining that point to the origin. If the curve passes through (1, 2), find it.`,
        steps: [R`The line to the origin has slope y/x, so \(\dfrac{dy}{dx} = \dfrac{2y}{x}\).`, R`\(\int\dfrac{dy}{y} = \int\dfrac{2\,dx}{x} \Rightarrow \ln|y| = 2\ln|x| + c \Rightarrow y = Cx^2\).`, R`Through (1, 2): C = 2.`], ans: R`\(y = 2x^2\)` } },
      { tip: R`In word problems, translate "the rate of change of y" as dy/dt and "is proportional to" as "= k ×". Use the given data first to find k, then answer the question.` },
      { check: { q: R`Solve dy/dx = eˣ⁻ʸ.`, ans: R`eʸ dy = eˣ dx ⟹ eʸ = eˣ + C.` } }
    ] },

    { h: R`Homogeneous differential equations`, t: [2], blocks: [
      R`A function F(x, y) is <b>homogeneous of degree n</b> if \(F(\lambda x, \lambda y) = \lambda^nF(x, y)\). The equation \(\dfrac{dy}{dx} = F(x, y)\) is <b>homogeneous</b> if F is homogeneous of degree 0, i.e. it can be written as a function of y/x alone: \(\dfrac{dy}{dx} = g\!\left(\dfrac yx\right)\).`,
      R`For example, \(x^2 + 3xy\) is homogeneous of degree 2 (every term has total degree 2), \(\sqrt{x^2 + y^2}\) has degree 1, and \(\dfrac{x^2 - y^2}{xy}\) has degree 0. But \(x^2 + y\) is not homogeneous, because its terms have different degrees. An equation dy/dx = f/g is homogeneous when f and g are homogeneous of the <b>same</b> degree.`,
      { derive: R`Method: substitute y = vx`, open: true, steps: [R`Then \(\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}\).`, R`The equation becomes \(v + x\dfrac{dv}{dx} = g(v)\), i.e. \(\dfrac{dv}{g(v) - v} = \dfrac{dx}{x}\): variables separable.`, R`Integrate, then replace v by y/x. (For dx/dy = h(x/y), put x = vy instead.)`] },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = \dfrac{x + y}{x}\).`,
        steps: [R`y = vx: \(v + x\dfrac{dv}{dx} = 1 + v \Rightarrow dv = \dfrac{dx}{x}\).`, R`v = ln|x| + C.`], ans: R`\(y = x\ln|x| + Cx\)` } },
      { ex: { q: R`Solve \((x^2 + y^2)\,dx = 2xy\,dy\).`,
        steps: [R`\(\dfrac{dy}{dx} = \dfrac{x^2 + y^2}{2xy}\); y = vx: \(v + xv' = \dfrac{1 + v^2}{2v} \Rightarrow xv' = \dfrac{1 - v^2}{2v}\).`, R`\(\int\dfrac{2v\,dv}{1 - v^2} = \int\dfrac{dx}{x} \Rightarrow -\ln|1 - v^2| = \ln|x| + c \Rightarrow x(1 - v^2) = C\).`], ans: R`\(x^2 - y^2 = Cx\)` } },
      { ex: { q: R`Solve \(x\dfrac{dy}{dx} = y + x\tan\dfrac{y}{x}\).`,
        steps: [R`Divide by x: \(\dfrac{dy}{dx} = \dfrac yx + \tan\dfrac yx\), a function of y/x.`, R`y = vx: \(v + x\dfrac{dv}{dx} = v + \tan v \Rightarrow \cot v\,dv = \dfrac{dx}{x}\).`, R`\(\ln|\sin v| = \ln|x| + c\), so \(\sin v = Cx\).`], ans: R`\(\sin\dfrac yx = Cx\)` } },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = \dfrac yx + \dfrac xy\) with y(1) = 1.`,
        steps: [R`y = vx: \(v + xv' = v + \dfrac1v \Rightarrow v\,dv = \dfrac{dx}{x}\).`, R`\(\dfrac{v^2}{2} = \ln|x| + C\), i.e. \(y^2 = 2x^2\ln|x| + 2Cx^2\).`, R`y(1) = 1: 1 = 2C, so the constant term is \(x^2\).`], ans: R`\(y^2 = x^2(2\ln x + 1)\)` } },
      { mistake: R`Writing \(\dfrac{dy}{dx} = \dfrac{dv}{dx}\) after putting y = vx. By the product rule, \(\dfrac{dy}{dx} = v + x\dfrac{dv}{dx}\); dropping the v makes every answer wrong.` },
      { tip: R`Quick test for homogeneity: replace x by λx and y by λy. If λ cancels completely from the right-hand side, the equation is homogeneous. For example \(\dfrac{x^3 + y^3}{xy^2}\) gives \(\dfrac{\lambda^3}{\lambda^3}\), so it is.` },
      { adv: R`<b>Reducible to homogeneous.</b> For \(\dfrac{dy}{dx} = \dfrac{a_1x + b_1y + c_1}{a_2x + b_2y + c_2}\) (with \(a_1b_2 \ne a_2b_1\)), shift the origin: put x = X + h, y = Y + k, where (h, k) is the point where the two lines \(a_1x + b_1y + c_1 = 0\) and \(a_2x + b_2y + c_2 = 0\) meet. The constants disappear and the equation becomes homogeneous in X and Y. (If \(a_1/a_2 = b_1/b_2\), put z = a₁x + b₁y instead.)` },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} = \dfrac{x + y - 2}{x - y}\).`,
        steps: [R`The lines x + y = 2 and x = y meet at (1, 1). Put x = X + 1, y = Y + 1: \(\dfrac{dY}{dX} = \dfrac{X + Y}{X - Y}\).`, R`Y = vX: \(X\dfrac{dv}{dX} = \dfrac{1 + v}{1 - v} - v = \dfrac{1 + v^2}{1 - v}\), so \(\int\dfrac{1 - v}{1 + v^2}\,dv = \int\dfrac{dX}{X}\).`, R`\(\tan^{-1}v - \frac12\ln(1 + v^2) = \ln|X| + C\), i.e. \(\tan^{-1}\dfrac YX = \frac12\ln(X^2 + Y^2) + C\).`], ans: R`\(\tan^{-1}\dfrac{y - 1}{x - 1} = \frac12\ln\left[(x - 1)^2 + (y - 1)^2\right] + C\)` } },
      { check: { q: R`Is dy/dx = (x² + y²)/(xy) homogeneous?`, ans: R`Yes: the right side is a function of y/x, namely (1 + v²)/v.` } }
    ] },

    { h: R`Linear differential equations`, t: [3], blocks: [
      R`A first-order <b>linear</b> differential equation has the form \[\frac{dy}{dx} + P(x)\,y = Q(x),\] where P and Q are functions of x only (or constants); y and dy/dx appear only to the first power and are not multiplied together. Similarly \(\dfrac{dx}{dy} + P(y)x = Q(y)\) is linear in x.`,
      { mistake: R`Calling dy/dx + y² = x linear. The y² term makes it non-linear.` },
      R`<b>Linear in x instead of y.</b> Sometimes the equation is not linear in y but becomes linear if x is treated as the unknown function of y. Then use \(\dfrac{dx}{dy} + P(y)\,x = Q(y)\), with IF \(= e^{\int P\,dy}\) and solution \(x\cdot\text{IF} = \int Q\cdot\text{IF}\,dy + C\).`,
      { ex: { q: R`Solve \((x + 2y^2)\dfrac{dy}{dx} = y\) (y > 0).`,
        steps: [R`Flip it: \(\dfrac{dx}{dy} = \dfrac{x + 2y^2}{y}\), i.e. \(\dfrac{dx}{dy} - \dfrac{x}{y} = 2y\): linear in x.`, R`IF \(= e^{-\int dy/y} = \dfrac1y\). Then \(\dfrac xy = \int 2y\cdot\dfrac1y\,dy = 2y + C\).`], ans: R`\(x = 2y^2 + Cy\)` } },
      { check: { q: R`Is \(x\dfrac{dy}{dx} + 2y = x^2\) linear? What are P and Q?`, ans: R`Yes; dividing by x: P = 2/x, Q = x.` } }
    ] },

    { h: R`The integrating factor`, t: [3], blocks: [
      { derive: R`Solution of dy/dx + Py = Q`, open: true, steps: [R`Multiply by the <b>integrating factor</b> \(\text{IF} = e^{\int P\,dx}\). Since \(\dfrac{d}{dx}(\text{IF}) = P\cdot\text{IF}\), the left side becomes \(\dfrac{d}{dx}(y\cdot\text{IF})\).`, R`Integrate: \[y \cdot \text{IF} = \int Q\cdot\text{IF}\,dx + C.\]`] },
      { ex: { q: R`Solve \(x\dfrac{dy}{dx} + 2y = x^2\) (x > 0).`,
        steps: [R`Divide by x: \(\dfrac{dy}{dx} + \dfrac2xy = x\). IF = \(e^{2\ln x} = x^2\).`, R`\(x^2y = \int x^3\,dx = \dfrac{x^4}{4} + C\).`], ans: R`\(y = \dfrac{x^2}{4} + \dfrac{C}{x^2}\)` } },
      { analogy: R`The integrating factor is like a key cut to fit one lock. The left side \(y' + Py\) is not the derivative of anything simple, but after multiplying by \(e^{\int P\,dx}\) it becomes exactly \((y\cdot\text{IF})'\) by the product rule. Then one integration finishes the job.` },
      { mistake: R`Forgetting the constant before dividing by the IF. From \(ye^x = \frac12e^{2x} + C\), dividing gives \(y = \frac12e^x + Ce^{-x}\); adding C only at the end (\(y = \frac12e^x + C\)) is wrong.` },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} + y = e^x\).`,
        steps: [R`IF = \(e^{\int 1\,dx} = e^x\).`, R`\(ye^x = \int e^{2x}\,dx = \tfrac12e^{2x} + C\).`], ans: R`\(y = \tfrac12e^x + Ce^{-x}\)` } },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} + \dfrac{y}{x} = x^2\) (x > 0).`,
        steps: [R`IF = \(e^{\int dx/x} = x\).`, R`\(xy = \int x^3\,dx = \frac{x^4}{4} + C\).`], ans: R`\(y = \dfrac{x^3}{4} + \dfrac Cx\)` } },
      { fig: figLinear, cap: R`Solutions \(y = \frac12e^x + Ce^{-x}\) of dy/dx + y = eˣ. The term \(Ce^{-x}\) dies away as x grows, so every solution approaches \(\frac12e^x\) (blue).` },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} + 2y = 4\) with y(0) = 0.`,
        steps: [R`IF = \(e^{2x}\): \(ye^{2x} = \int 4e^{2x}\,dx = 2e^{2x} + C\), so \(y = 2 + Ce^{-2x}\).`, R`y(0) = 0 ⟹ C = −2.`], ans: R`\(y = 2(1 - e^{-2x})\): it rises towards 2, like a capacitor charging` } },
      { ex: { q: R`Solve \(\dfrac{dy}{dx} + y\tan x = \sec x\).`,
        steps: [R`IF = \(e^{\int\tan x\,dx} = \sec x\).`, R`\(y\sec x = \int\sec^2x\,dx = \tan x + C\); multiply by cos x.`], ans: R`\(y = \sin x + C\cos x\)` } },
      { adv: R`<b>Bernoulli equation</b> \(\dfrac{dy}{dx} + Py = Qy^n\): divide by yⁿ and put \(z = y^{1-n}\); it becomes linear in z: \(\dfrac{dz}{dx} + (1 - n)Pz = (1 - n)Q\).` },
      { ex: { q: R`Solve the Bernoulli equation \(\dfrac{dy}{dx} + y = xy^2\).`,
        steps: [R`n = 2: divide by y² and put \(z = \dfrac1y\), so \(\dfrac{dz}{dx} = -\dfrac{1}{y^2}\dfrac{dy}{dx}\). The equation becomes \(\dfrac{dz}{dx} - z = -x\).`, R`IF = \(e^{-x}\): \(ze^{-x} = -\int xe^{-x}\,dx = xe^{-x} + e^{-x} + C\).`, R`So z = x + 1 + Ceˣ.`], ans: R`\(y = \dfrac{1}{x + 1 + Ce^x}\)` } },
      { tip: R`Useful integrating factors: P = 1/x → IF = x; P = −1/x → IF = 1/x; P = tan x → IF = sec x; P = cot x → IF = sin x.` },
      { ex: { q: R`In an electric circuit with inductance L, resistance R and battery voltage E, the current obeys \(L\dfrac{di}{dt} + Ri = E\), with i = 0 at t = 0. Find i(t).`,
        steps: [R`Divide by L: \(\dfrac{di}{dt} + \dfrac RL i = \dfrac EL\), linear with IF = \(e^{Rt/L}\).`, R`\(ie^{Rt/L} = \dfrac EL\int e^{Rt/L}\,dt = \dfrac ER e^{Rt/L} + C\); i(0) = 0 gives C = −E/R.`], ans: R`\(i = \dfrac ER\left(1 - e^{-Rt/L}\right)\): the current grows towards E/R` } },
      { h3: R`Which method? A checklist` },
      { points: [R`Can you write dy/dx = f(x)·g(y)? → <b>separate the variables</b>.`, R`Is the right side of the form f(ax + by + c)? → put <b>z = ax + by + c</b>, then separate.`, R`Is the right side a function of y/x only (every term of the same degree)? → <b>homogeneous</b>, put y = vx.`, R`Do y and dy/dx appear only to the first power, with coefficients in x? → <b>linear</b>, use IF = \(e^{\int P\,dx}\). If it is linear in x instead, use dx/dy.`, R`Is it linear except for a \(y^n\) on the right? → <b>Bernoulli</b>, put \(z = y^{1-n}\).`, R`Spot an exact derivative such as \(x\,dy + y\,dx = d(xy)\) or \(\dfrac{x\,dy - y\,dx}{x^2} = d\!\left(\dfrac yx\right)\)? → integrate directly.`] },
      { check: { q: R`Find the integrating factor of dy/dx + y tan x = sec x.`, ans: R`e^{∫tan x dx} = sec x.` } }
    ] }
  ],
  summary: [
    R`Order = highest derivative; degree = its power when the equation is a polynomial in derivatives (otherwise undefined).`,
    R`General solution has n constants (order n); particular solution from initial conditions. Formation: differentiate n times and eliminate n constants.`,
    R`Variables separable: ∫dy/g(y) = ∫f(x)dx + C. Growth/decay N = N₀e^{kt}; cooling T − Tₛ = (T₀ − Tₛ)e^{−kt}.`,
    R`Homogeneous dy/dx = g(y/x): put y = vx, separate v and x.`,
    R`Linear dy/dx + Py = Q: IF = e^{∫P dx}; y·IF = ∫Q·IF dx + C. Bernoulli reduces to linear with z = y^{1−n}.`,
    R`Reducible to separable: dy/dx = f(ax + by + c) → put z = ax + by + c.`,
    R`Linear in x: dx/dy + P(y)x = Q(y), IF = e^{∫P dy}.`,
    R`Reducible to homogeneous: shift the origin to the meeting point of the two lines (x = X + h, y = Y + k).`
  ],
  refs: [
    { t: R`OpenStax Calculus Vol. 2, §4.1 Basics of Differential Equations`, url: 'https://openstax.org/books/calculus-volume-2/pages/4-1-basics-of-differential-equations' },
    { t: R`OpenStax Calculus Vol. 2, §4.3 Separable Equations`, url: 'https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations' },
    { t: R`OpenStax Calculus Vol. 2, §4.5 First-order Linear Equations`, url: 'https://openstax.org/books/calculus-volume-2/pages/4-5-first-order-linear-equations' },
    { t: R`Wikipedia: Integrating factor`, url: 'https://en.wikipedia.org/wiki/Integrating_factor' }
  ]
});
})();
