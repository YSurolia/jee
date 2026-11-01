// Book chapter: Work, Energy and Power. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figDot = D.svg(300, 170, [
  D.arrow(40, 140, 270, 140, { color: 'c', label: 'B', at: 'end', lx: 12, ly: 0, anchor: 'start' }),
  D.arrow(40, 140, 180, 40, { color: 'o', label: 'A', lx: -10, ly: -8 }),
  D.line(180, 40, 180, 140, { color: 'm', dash: true, w: 1.2 }), D.square(180, 140, [0, -1], [-1, 0], 9),
  D.angle(40, 140, 36, 0, 35.5, 'θ', { lr: 10 }),
  D.arrow(40, 156, 180, 156, { color: 'g', w: 1.4, head: 6, both: true }), D.text(110, 168, 'A cos θ (projection of A on B)', { size: 11, color: 'g' })
], 'Scalar product as projection of one vector on another');

var figWork = D.svg(400, 150, [
  D.ground(10, 120, 390, 120), D.block(70, 80, 60, 40, 'm', { math: true }), D.block(260, 80, 60, 40, 'm', { math: true }),
  D.arrow(130, 100, 200, 60, { color: 'r', label: 'F', lx: 10, ly: -6 }), D.angle(130, 100, 30, 0, 30, 'θ', { lr: 10 }), D.line(130, 100, 190, 100, { color: 'm', dash: '3 3', w: 1 }),
  D.arrow(100, 138, 290, 138, { color: 'b', w: 1.6, head: 7, both: false }), D.text(195, 132, 'displacement d', { size: 12, color: 'b' })
], 'A force F at angle theta moves a block through displacement d');

var figSigns = D.row([
  [D.svg(140, 130, [D.ground(10, 115, 130, 115), D.block(50, 60, 40, 30, ''), D.arrow(70, 60, 70, 15, { color: 'r', label: 'F', lx: 12, ly: 0 }), D.arrow(110, 95, 110, 50, { color: 'b', w: 1.6, head: 6, label: 'd', lx: 10, ly: 0 })], 'lifting a box'), 'positive work (F along d)'],
  [D.svg(150, 130, [D.ground(10, 100, 140, 100), D.block(55, 70, 40, 30, ''), D.arrow(55, 92, 15, 92, { color: 'o', label: 'f', ly: -10 }), D.arrow(70, 115, 130, 115, { color: 'b', w: 1.6, head: 6, label: 'd', ly: -10 })], 'friction on a sliding box'), 'negative work (friction against d)'],
  [D.svg(150, 130, [D.ground(10, 115, 140, 115), D.circle(60, 40, 9, { color: 'c', fill: 'soft' }), D.line(60, 49, 60, 90, { color: 'c', w: 3 }), D.block(70, 50, 34, 22, ''), D.arrow(87, 50, 87, 18, { color: 'r', label: 'F', lx: 12, ly: 0 }), D.arrow(40, 100, 120, 100, { color: 'b', w: 1.6, head: 6, label: 'd', ly: -10 })], 'carrying a box horizontally'), 'zero work (F ⟂ d)']
]);

var figVarForce = D.plot({
  w: 380, h: 210, x: [0, 6], y: [0, 13], xlabel: 'x (m)', ylabel: 'F (N)', mathLabels: false, xticks: [1, 2, 3, 4, 5], yticks: [5, 10],
  shade: [{ f: function (x) { return x < 2 ? 5 * x : 10; }, from: 0, to: 5, color: 'c' }],
  fns: [{ f: function (x) { return x < 2 ? 5 * x : 10; }, from: 0, to: 5 }],
  segs: [{ x1: 5, y1: 0, x2: 5, y2: 10, color: 'm', dash: '3 3', w: 1.2 }],
  texts: [{ x: 1.35, y: 3, s: '10 J', size: 13 }, { x: 3.5, y: 5, s: '30 J', size: 13 }],
  label: 'Force against displacement; the area under the graph is the work'
});

var figPaths = D.svg(320, 200, [
  D.ground(10, 180, 310, 180),
  D.dot(50, 170, { r: 5 }), D.text(40, 160, 'A', { math: true, anchor: 'end' }), D.dot(270, 50, { r: 5 }), D.text(280, 44, 'B', { math: true, anchor: 'start' }),
  D.line(50, 170, 270, 50, { color: 'c', w: 2 }), D.text(150, 104, 'path 1', { color: 'c', size: 12, rot: -28 }),
  D.path('M50 170 C 60 40, 150 20, 270 50', { color: 'o', w: 2, dash: '6 4' }), D.text(110, 60, 'path 2', { color: 'o', size: 12 }),
  D.path('M50 170 L 270 170 L 270 50', { color: 'g', w: 2, dash: '2 4' }), D.text(200, 160, 'path 3', { color: 'g', size: 12 }),
  D.arrow(295, 70, 295, 160, { color: 'm', w: 1.4, head: 6, both: true }), D.text(303, 115, 'h', { math: true, anchor: 'start', color: 'm' })
], 'Three different paths from A to B');

var figU = D.plot({
  w: 420, h: 230, x: [-0.8, 1.9], y: [-1.6, 2.4], xlabel: 'x', ylabel: 'U(x)', xticks: [1], yticks: [1],
  fns: [{ f: function (x) { return 3 * x * x - 2 * x * x * x; }, label: 'U = 3x^2 − 2x^3', lx: 1.2, ly: 2.0 }],
  pts: [{ x: 0, y: 0, label: 'stable (minimum)', pos: 'se', math: false, size: 12, color: 'g', lcolor: 'g' }, { x: 1, y: 1, label: 'unstable (maximum)', pos: 'n', math: false, size: 12, color: 'r', lcolor: 'r' }],
  label: 'Potential energy curve with a stable and an unstable equilibrium point'
});

var figSpring = D.row([
  [D.svg(240, 120, [
    D.line(20, 20, 20, 100, { w: 2.4 }), D.ground(20, 100, 20, 20, { side: 1 }),
    D.path('M20 60 l12 0 l6 -12 l12 24 l12 -24 l12 24 l12 -24 l12 24 l12 -24 l6 12 l12 0', { color: 'c', w: 2 }),
    D.block(140, 42, 40, 36, 'm', { math: true }),
    D.line(120, 90, 120, 100, { color: 'm', w: 1 }), D.line(140, 90, 140, 100, { color: 'm', w: 1 }), D.text(130, 112, 'x', { math: true, color: 'm' }),
    D.arrow(140, 60, 95, 60, { color: 'r', w: 1.6, head: 7 }), D.text(98, 34, 'F = −kx', { math: true, color: 'r' })
  ], 'A block on a stretched spring'), '(a) spring stretched by x'],
  [D.plot({ w: 230, h: 170, x: [0, 5], y: [0, 5], xlabel: 'x', ylabel: 'kx', xticks: [[4, 'x']], yticks: [[4, 'kx']], noOrigin: true,
    shade: [{ f: function (x) { return x; }, from: 0, to: 4, color: 'o' }], fns: [{ f: function (x) { return x; }, from: 0, to: 4.6 }],
    texts: [{ x: 2.8, y: 1.2, s: 'area = ½kx²', color: 'o', size: 12 }], label: 'Spring force against extension' }), '(b) work = area = ½kx²']
]);

var figEnergy = D.plot({
  w: 400, h: 230, x: [0, 20], y: [0, 450], xlabel: 'h (m)', ylabel: 'energy (J)', mathLabels: false, xticks: [5, 10, 15, 20], yticks: [100, 200, 300, 400], noOrigin: true,
  fns: [{ f: function (h) { return 20 * h; }, color: 'b', label: 'potential energy', lx: 12, ly: 320, math: false },
    { f: function (h) { return 400 - 20 * h; }, color: 'o', label: 'kinetic energy', lx: 1.5, ly: 340, math: false },
    { f: function () { return 400; }, color: 'g', label: 'total = 400 J', lx: 6, ly: 425, math: false }],
  label: 'Kinetic, potential and total energy of a 2 kg ball falling from 20 m'
});

var figVertical = D.svg(300, 260, [
  D.circle(150, 130, 90, { color: 'm', dash: '5 4', w: 1.4 }), D.dot(150, 130, { r: 3 }), D.text(158, 140, 'O', { math: true, color: 'm', anchor: 'start' }),
  D.line(150, 130, 150, 40, { color: 'm', w: 1 }), D.line(150, 130, 150, 220, { color: 'm', w: 1 }), D.line(150, 130, 240, 130, { color: 'm', w: 1 }),
  D.circle(150, 40, 9, { color: 'c', fill: 'soft' }), D.circle(150, 220, 9, { color: 'c', fill: 'soft' }), D.circle(240, 130, 9, { color: 'c', fill: 'soft' }),
  D.arrow(160, 40, 205, 40, { color: 'g', label: 'v_{top} ≥ √(gR)', lx: 50, ly: -2, anchor: 'start', size: 13 }),
  D.arrow(140, 220, 90, 220, { color: 'g', label: 'v_{bottom} ≥ √(5gR)', lx: -60, ly: -16, size: 13 }),
  D.arrow(240, 120, 240, 80, { color: 'g', w: 1.8, head: 7 }),
  D.text(250, 160, 'side: v² = 3gR', { anchor: 'start', size: 12, color: 'm' }), D.text(195, 120, 'R', { math: true, color: 'm' })
], 'A stone whirled in a vertical circle on a string');

var figCollide1D = D.svg(420, 150, [
  D.text(20, 22, 'before', { anchor: 'start', bold: true, size: 12 }), D.ground(10, 60, 410, 60),
  D.circle(90, 42, 16, { color: 'c', fill: 'soft' }), D.text(90, 43, 'm₁', { size: 12 }), D.arrow(110, 42, 170, 42, { color: 'c', label: 'u_1', ly: -12 }),
  D.circle(250, 42, 12, { color: 'o', fill: 'soft' }), D.text(250, 43, 'm₂', { size: 11 }), D.arrow(270, 42, 300, 42, { color: 'o', label: 'u_2', ly: -12 }),
  D.text(20, 92, 'after', { anchor: 'start', bold: true, size: 12 }), D.ground(10, 132, 410, 132),
  D.circle(150, 114, 16, { color: 'c', fill: 'soft' }), D.text(150, 115, 'm₁', { size: 12 }), D.arrow(170, 114, 205, 114, { color: 'c', label: 'v_1', ly: -12 }),
  D.circle(300, 114, 12, { color: 'o', fill: 'soft' }), D.text(300, 115, 'm₂', { size: 11 }), D.arrow(318, 114, 395, 114, { color: 'o', label: 'v_2', ly: -12 })
], 'Head-on collision of two balls');

var figCollide2D = D.svg(380, 220, [
  D.circle(60, 110, 14, { color: 'c', fill: 'soft' }), D.arrow(78, 110, 150, 110, { color: 'c', label: 'u', ly: -12 }),
  D.circle(190, 110, 14, { color: 'o', fill: 'soft' }), D.text(190, 136, 'at rest', { size: 11, color: 'm' }),
  D.line(190, 110, 360, 110, { color: 'm', dash: '3 3', w: 1 }),
  D.arrow(190, 110, 190 + 130 * Math.cos(Math.PI / 6), 110 - 130 * Math.sin(Math.PI / 6), { color: 'c', label: 'v_1', lx: 6, ly: -12 }),
  D.arrow(190, 110, 190 + 75 * Math.cos(Math.PI / 3), 110 + 75 * Math.sin(Math.PI / 3), { color: 'o', label: 'v_2', lx: 14, ly: 4 }),
  D.angle(190, 110, 46, 0, 30, 'θ₁', { lr: 12, size: 13 }), D.angle(190, 110, 34, -60, 0, 'θ₂', { lr: 12, size: 13 })
], 'Oblique (two-dimensional) collision with a ball at rest');

// ---------- chapter text ----------
JEE.book('physics', 'work-energy-power', {
  intro: [
    R`In everyday language "work" means any effort, and "energy" means feeling fresh. In physics both words have exact meanings. Work is done when a force moves something; energy is the capacity to do work; power is how fast work is done.`,
    R`These ideas give a second, often much quicker, way to solve mechanics problems. Instead of finding accelerations with Newton's laws, we track energy, which is never created or destroyed. This chapter covers work by constant and variable forces, kinetic and potential energy, the work–energy theorem, conservative forces, conservation of energy, power, motion in a vertical circle and collisions.`
  ],
  sections: [
    { h: R`The scalar (dot) product`, t: [0], blocks: [
      R`Work combines two vectors (force and displacement) into a number. The mathematical tool for this is the <b>scalar product</b>: \[\vec A\cdot\vec B = AB\cos\theta\] where θ is the angle between the vectors. The result is a scalar.`,
      { fig: figDot, cap: R`\(A\cos\theta\) is the projection (shadow) of \(\vec A\) on \(\vec B\). So \(\vec A\cdot\vec B\) = (projection of A on B) × B.` },
      { points: [R`It is commutative: \(\vec A\cdot\vec B = \vec B\cdot\vec A\), and distributive: \(\vec A\cdot(\vec B + \vec C) = \vec A\cdot\vec B + \vec A\cdot\vec C\).`, R`\(\hat i\cdot\hat i = \hat j\cdot\hat j = \hat k\cdot\hat k = 1\) and \(\hat i\cdot\hat j = \hat j\cdot\hat k = \hat k\cdot\hat i = 0\).`, R`In components: \(\vec A\cdot\vec B = A_xB_x + A_yB_y + A_zB_z\).`, R`\(\vec A\cdot\vec B = 0\) for perpendicular vectors; \(\vec A\cdot\vec A = A^2\).`] },
      { ex: { q: R`Find the angle between \(\vec A = \hat i + 2\hat j + 2\hat k\) and \(\vec B = 2\hat i - \hat j + 2\hat k\).`,
        steps: [R`\(\vec A\cdot\vec B = 2 - 2 + 4 = 4\); \(A = B = 3\).`, R`\(\cos\theta = \dfrac{4}{9}\).`], ans: R`θ = cos⁻¹(4/9) ≈ 63.6°` } },
      { check: { q: R`What is \(\hat i\cdot(\hat i + \hat j)\)?`, ans: R`1.` } }
    ] },

    { h: R`Work done by a constant force`, t: [0], blocks: [
      R`A force does <b>work</b> on a body when the body moves and the force has a component along the motion. For a constant force \(\vec F\) and displacement \(\vec d\): \[W = \vec F\cdot\vec d = Fd\cos\theta\]`,
      { fig: figWork, cap: R`Only the part of the force along the displacement, \(F\cos\theta\), does work. The vertical part \(F\sin\theta\) does none (the block does not move vertically).` },
      R`Work is a scalar. Its SI unit is the <b>joule</b>: 1 J = 1 N × 1 m. Other units: 1 erg = 10⁻⁷ J; 1 electron volt (eV) = 1.6 × 10⁻¹⁹ J; 1 kilowatt-hour = 3.6 × 10⁶ J.`,
      { ex: { q: R`A child pulls a sled 10 m with a rope at 60° to the ground, with a force of 50 N. How much work does the child do?`,
        steps: [R`\(W = Fd\cos\theta = 50\times10\times\cos60^\circ\).`], ans: R`250 J` } },
      { check: { q: R`You hold a heavy bag still for 10 minutes. How much work do you do on it?`, ans: R`Zero: there is no displacement (even though your muscles get tired).` } }
    ] },

    { h: R`Positive, negative and zero work`, t: [0], blocks: [
      { fig: figSigns, cap: R`The sign of work depends on the angle between the force and the displacement.` },
      { points: [R`<b>Positive work</b> (0° ≤ θ < 90°): the force helps the motion, for example the pull of the engine on a car, or gravity on a falling ball.`, R`<b>Negative work</b> (90° < θ ≤ 180°): the force opposes the motion, for example friction on a sliding box, or gravity on a ball thrown upward.`, R`<b>Zero work</b> (θ = 90°): the force is perpendicular to the motion, for example the normal force on a box sliding on a floor, the tension in the string of a conical pendulum, or the centripetal force in uniform circular motion.`] },
      { mistake: R`Thinking that a force must be zero for its work to be zero. A large force does no work if it is perpendicular to the motion.` },
      { check: { q: R`A satellite moves in a circular orbit. How much work does gravity do on it in one revolution?`, ans: R`Zero: gravity is always perpendicular to the velocity in a circular orbit.` } }
    ] },

    { h: R`Work done by a variable force`, t: [0], blocks: [
      R`If the force changes as the body moves, split the motion into tiny steps dx. In each step the force is almost constant, so the work is \(F\,dx\). Adding up all the steps gives an integral: \[W = \int_{x_1}^{x_2}F(x)\,dx\] Graphically, <b>work is the area under the force–displacement graph</b>.`,
      { fig: figVarForce, cap: R`The force rises from 0 to 10 N over the first 2 m and then stays at 10 N up to 5 m. Work = area of the triangle (10 J) + area of the rectangle (30 J) = 40 J.` },
      { ex: { q: R`A force \(F = 3x^2\) N acts on a body along the x-axis. Find the work done from x = 0 to x = 2 m.`,
        steps: [R`\(W = \int_0^2 3x^2\,dx = [x^3]_0^2\).`], ans: R`8 J` } },
      { check: { q: R`On an F–x graph, how does work done by a force against the motion show up?`, ans: R`As area below the x-axis (negative F), which counts as negative work.` } }
    ] },

    { h: R`Kinetic energy and the work–energy theorem`, t: [2], blocks: [
      R`A moving body can do work (a moving hammer drives a nail). The energy it has because of its motion is its <b>kinetic energy</b>: \[K = \tfrac12mv^2\] It is a scalar, never negative, and in terms of momentum \(K = \dfrac{p^2}{2m}\).`,
      { derive: R`The work–energy theorem`, open: true, steps: [
        R`For a constant net force along x: \(v^2 = u^2 + 2ad\). Multiply by \(\frac m2\): \(\frac12mv^2 - \frac12mu^2 = mad = F_{net}d\).`,
        R`For a variable force: \(F = m\dfrac{dv}{dt} = m\dfrac{dv}{dx}\dfrac{dx}{dt} = mv\dfrac{dv}{dx}\). So \(\int F\,dx = \int_u^v mv\,dv = \frac12mv^2 - \frac12mu^2\).`,
        R`<b>Work–energy theorem:</b> the work done by the net force (all forces together) on a body equals the change in its kinetic energy: \(W_{net} = \Delta K\).`
      ] },
      { ex: { q: R`A 20 g bullet moving at 300 m/s enters a wooden block and stops after 5 cm. Find the average resistive force.`,
        steps: [R`\(\Delta K = 0 - \frac12\times0.02\times300^2 = -900\) J.`, R`\(-F\times0.05 = -900\).`], ans: R`18 000 N` } },
      { ex: { q: R`Two bodies have equal momentum. Which has more kinetic energy: the heavier or the lighter one?`,
        steps: [R`\(K = p^2/2m\): with equal p, smaller m gives larger K.`], ans: R`The lighter one` } },
      { tip: R`The work–energy theorem is often the fastest route when a question gives distances and speeds but not times. It works even when forces vary along the path.` },
      { check: { q: R`If the speed of a car doubles, what happens to its kinetic energy and its braking distance (same braking force)?`, ans: R`Both become four times larger.` } }
    ] },

    { h: R`Potential energy`, t: [1], blocks: [
      R`Energy can also be <b>stored</b> because of a body's position or shape. A raised hammer, a stretched bow and a compressed spring all store energy that can later do work. This stored energy is called <b>potential energy</b> U.`,
      R`<b>Gravitational potential energy</b> near the Earth's surface: lifting a mass m slowly through a height h needs work mgh against gravity, which is stored as \[U = mgh\] measured from any chosen reference level (only changes in U matter).`,
      { ex: { q: R`A 2 kg book is lifted from the floor to a 5 m high shelf. Find the increase in its potential energy. (g = 10 m/s²)`,
        steps: [R`\(\Delta U = mgh = 2\times10\times5\).`], ans: R`100 J` } },
      R`In general, potential energy is defined only for a <b>conservative force</b> (next section): the change in U is the negative of the work done by that force: \[\Delta U = -W_{conservative} = -\int\vec F\cdot d\vec r\]`,
      { check: { q: R`Can potential energy be negative?`, ans: R`Yes; its value depends on the chosen zero level. Only differences in U have physical meaning.` } }
    ] },

    { h: R`Conservative and non-conservative forces`, t: [6], blocks: [
      R`A force is <b>conservative</b> if the work it does on a body moving between two points depends only on the end points, not on the path taken. Equivalently, the work done by it around any <b>closed path</b> is zero.`,
      { fig: figPaths, cap: R`Gravity does the same work, −mgh, on a body moving from A to B along any of the three paths. Gravity is conservative.` },
      { table: { head: [R`Conservative forces`, R`Non-conservative forces`], rows: [
        [R`gravity, spring force, electrostatic force`, R`friction, air resistance, viscous drag`],
        [R`work is path-independent; zero round a closed path`, R`work depends on the path; usually negative round a closed path`],
        [R`a potential energy can be defined`, R`no potential energy; energy is turned into heat`]] } },
      { ex: { q: R`A 2 kg box is pushed around a rectangular path 4 m × 3 m on a floor with friction force 5 N, back to its starting point. Find the work done by friction and by gravity.`,
        steps: [R`Friction always opposes the motion: \(W_f = -5\times14 = -70\) J.`, R`The box starts and ends at the same height: \(W_g = 0\).`], ans: R`Friction: −70 J; gravity: 0` } },
      { check: { q: R`Is the work done by friction path-independent?`, ans: R`No. A longer path means more negative work, so friction is non-conservative.` } }
    ] },

    { h: R`Force from potential energy; stability`, t: [1], blocks: [
      R`For a conservative force in one dimension, the force is the negative slope of the potential-energy graph: \[F = -\frac{dU}{dx}\] The force always pushes the body towards lower potential energy, like a ball rolling downhill.`,
      R`At points where \(dU/dx = 0\), the force is zero: these are <b>equilibrium</b> positions.`,
      { points: [R`<b>Stable equilibrium:</b> U is a minimum (\(d^2U/dx^2 > 0\)). A small push creates a force back towards equilibrium, like a ball in a bowl.`, R`<b>Unstable equilibrium:</b> U is a maximum (\(d^2U/dx^2 < 0\)). A small push makes it run away, like a ball on top of a hill.`, R`<b>Neutral equilibrium:</b> U is constant nearby. The body stays wherever it is put, like a ball on a flat table.`] },
      { fig: figU, cap: R`For \(U = 3x^2 - 2x^3\): x = 0 is a stable equilibrium (a valley) and x = 1 is unstable (a hilltop).` },
      { ex: { q: R`For \(U(x) = 3x^2 - 2x^3\) (in joules, x in metres), find the equilibrium points and their nature, and the force at x = 2 m.`,
        steps: [R`\(F = -\dfrac{dU}{dx} = -(6x - 6x^2)\). F = 0 at x = 0 and x = 1.`, R`\(\dfrac{d^2U}{dx^2} = 6 - 12x\): +6 at x = 0 (stable), −6 at x = 1 (unstable).`, R`At x = 2: \(F = -(12 - 24) = 12\) N.`], ans: R`x = 0 stable, x = 1 unstable; F(2) = +12 N` } },
      { check: { q: R`On a U–x graph, where is the force largest?`, ans: R`Where the graph is steepest.` } }
    ] },

    { h: R`Potential energy of a spring`, t: [4], blocks: [
      R`A spring stretched or compressed by x pulls or pushes back with a <b>restoring force</b> \(F = -kx\) (Hooke's law), where k is the spring constant (N/m). The minus sign shows that the force is opposite to the displacement.`,
      { fig: figSpring, cap: R`(a) Stretching a spring by x. (b) The force needed grows from 0 to kx, so the work done (the area of the triangle) is \(\frac12kx^2\).` },
      { derive: R`Elastic potential energy`, steps: [
        R`To stretch the spring slowly we apply a force kx (equal and opposite to the spring force).`,
        R`Work done \(= \int_0^xkx\,dx = \frac12kx^2\). This work is stored in the spring.`,
        R`So the elastic potential energy is \(U = \frac12kx^2\), the same for stretching or compressing by x.`
      ] },
      { ex: { q: R`A spring (k = 200 N/m) is compressed by 10 cm and released, pushing a 0.5 kg block along a smooth floor. Find the speed of the block.`,
        steps: [R`\(U = \frac12\times200\times0.1^2 = 1\) J.`, R`All of it becomes kinetic energy: \(\frac12\times0.5\times v^2 = 1\).`], ans: R`v = 2 m/s` } },
      { mistake: R`Using \(U = kx^2\) or forgetting to convert cm to m. Always use x in metres and the factor ½.` },
      { check: { q: R`If a spring's extension is doubled, how does its stored energy change?`, ans: R`It becomes four times larger.` } }
    ] },

    { h: R`Conservation of mechanical energy`, t: [5], blocks: [
      R`<b>Mechanical energy</b> is the sum of kinetic and potential energies: \(E = K + U\).`,
      { derive: R`Why mechanical energy is conserved under conservative forces`, steps: [
        R`Work–energy theorem: \(W_{c} = \Delta K\) when only conservative forces do work.`,
        R`Definition of potential energy: \(W_{c} = -\Delta U\).`,
        R`So \(\Delta K = -\Delta U\), that is \(\Delta K + \Delta U = 0\): \(K + U\) stays constant.`
      ] },
      R`<b>If only conservative forces do work, the total mechanical energy is conserved.</b> If non-conservative forces such as friction act, \(W_{nc} = \Delta K + \Delta U = \Delta E\), so mechanical energy decreases (the lost energy becomes heat).`,
      { fig: figEnergy, cap: R`A 2 kg ball dropped from 20 m (g = 10 m/s²). As it falls, potential energy turns into kinetic energy, but their sum stays 400 J.` },
      { ex: { q: R`A ball is dropped from 20 m. Find its speed (a) when it has fallen 5 m (b) just before hitting the ground. (g = 10 m/s², no air resistance)`,
        steps: [R`\(\frac12mv^2 = mg\times(\text{distance fallen})\), so \(v = \sqrt{2gh}\).`, R`(a) \(\sqrt{2\times10\times5} = 10\) m/s. (b) \(\sqrt{2\times10\times20} = 20\) m/s.`], ans: R`10 m/s; 20 m/s` } },
      { ex: { q: R`A 1 kg block slides down a rough 5 m high ramp from rest and reaches the bottom at 8 m/s. How much energy did friction remove? (g = 10 m/s²)`,
        steps: [R`Initial E = mgh = 50 J. Final E = ½ × 1 × 64 = 32 J.`, R`\(W_{friction} = \Delta E = 32 - 50\).`], ans: R`18 J (turned into heat)` } },
      { check: { q: R`A pendulum swings without friction. Where is its speed greatest?`, ans: R`At the lowest point, where its potential energy is smallest.` } }
    ] },

    { h: R`Many forms of energy; conservation of total energy`, t: [5], blocks: [
      R`Mechanical energy is only one form. Energy also exists as heat (internal energy of random molecular motion), chemical energy (stored in bonds of fuels and food), electrical energy, light and other radiation, sound, and nuclear energy. One form can change into another: a power station turns chemical energy of coal into heat, then mechanical energy of a turbine, then electrical energy.`,
      R`<b>Law of conservation of energy:</b> energy can be transformed from one form to another, but the total energy of an isolated system remains constant. It can neither be created nor destroyed.`,
      R`Einstein showed that mass itself is a form of energy: \(E = mc^2\). In nuclear reactions a small loss of mass appears as a huge amount of energy. With this, conservation of energy holds in all known processes.`,
      { analogy: R`Energy is like money moving between your pocket, your bank account and your piggy bank. It changes places and forms, but if nobody adds or removes any, the total stays the same.` },
      { check: { q: R`When a car brakes to a stop, where does its kinetic energy go?`, ans: R`Mostly into heat in the brakes and tyres (and a little sound).` } }
    ] },

    { h: R`Power`, t: [3], blocks: [
      R`Two people may lift the same load to the same height (same work), but one may do it faster. <b>Power</b> is the rate of doing work: \[P_{av} = \frac{W}{t},\qquad P = \frac{dW}{dt} = \vec F\cdot\vec v\] The last form follows because \(dW = \vec F\cdot d\vec r\) and \(d\vec r/dt = \vec v\).`,
      R`The SI unit is the <b>watt</b>: 1 W = 1 J/s. Larger units: 1 kW = 1000 W; 1 horsepower (hp) = 746 W. Electricity bills use the <b>kilowatt-hour</b>, which is a unit of <b>energy</b>: 1 kWh = 1000 W × 3600 s = 3.6 × 10⁶ J.`,
      { ex: { q: R`A lift raises a 500 kg load through 20 m at constant speed in 10 s. Find the power in kW and in hp. (g = 10 m/s²)`,
        steps: [R`\(W = mgh = 500\times10\times20 = 10^5\) J.`, R`\(P = 10^5/10 = 10^4\) W; in hp: 10 000/746.`], ans: R`10 kW ≈ 13.4 hp` } },
      { ex: { q: R`A car's engine provides a driving force of 2000 N while the car moves at a steady 25 m/s. Find the power.`,
        steps: [R`\(P = Fv = 2000\times25\).`], ans: R`50 kW` } },
      { mistake: R`Calling the kilowatt-hour a unit of power. It is a unit of energy (power × time).` },
      { check: { q: R`A 100 W bulb is on for 10 hours. How many units (kWh) does it use?`, ans: R`0.1 kW × 10 h = 1 kWh.` } }
    ] },

    { h: R`Motion in a vertical circle`, t: [7], blocks: [
      R`Whirl a stone on a string in a <b>vertical</b> circle. Unlike horizontal circular motion, its speed changes: it slows down going up and speeds up coming down, because gravity does work. We use energy conservation for the speed and Newton's second law (towards the centre) for the tension.`,
      { fig: figVertical, cap: R`A stone of mass m on a string of length R moving in a vertical circle. To complete the circle, the string must stay tight even at the top.` },
      { derive: R`The minimum speeds needed to complete the circle`, steps: [
        R`At the top, both tension and gravity point down (towards the centre): \(T_{top} + mg = \dfrac{mv_{top}^2}{R}\). The string stays tight only if \(T_{top} \ge 0\), so \(v_{top} \ge \sqrt{gR}\).`,
        R`Energy from bottom to top (height gain 2R): \(\frac12mv_{bottom}^2 = \frac12mv_{top}^2 + mg(2R)\). With \(v_{top}^2 = gR\): \(v_{bottom}^2 = 5gR\). So the minimum speed at the bottom is \(\sqrt{5gR}\).`,
        R`At the bottom: \(T_{bottom} - mg = \dfrac{mv_{bottom}^2}{R}\). In the critical case \(T_{bottom} = 6mg\); in general \(T_{bottom} - T_{top} = 6mg\).`,
        R`At the side (level with the centre), \(v^2 = v_{bottom}^2 - 2gR = 3gR\) in the critical case, and the tension there is \(T = mv^2/R = 3mg\).`
      ] },
      { ex: { q: R`A 0.5 kg stone moves in a vertical circle of radius 1 m. (a) Find the minimum speeds at the top and bottom. (b) If its speed at the bottom is 8 m/s, find the tension there. (g = 10 m/s²)`,
        steps: [R`(a) \(v_{top} = \sqrt{10} \approx 3.16\) m/s; \(v_{bottom} = \sqrt{50} \approx 7.07\) m/s.`, R`(b) \(T = m\left(g + \dfrac{v^2}{R}\right) = 0.5(10 + 64)\).`], ans: R`(a) 3.16 m/s and 7.07 m/s (b) 37 N` } },
      { note: R`If the stone is fixed on a light <b>rigid rod</b> instead of a string, the rod can push as well as pull, so the stone only needs to reach the top with speed ≥ 0. Then the minimum speed at the bottom is \(\sqrt{4gR}\).`, title: 'String versus rod' },
      { check: { q: R`At which point of a vertical circle is the string most likely to break?`, ans: R`At the bottom, where the tension is greatest.` } }
    ] },

    { h: R`Collisions: the basic ideas`, t: [8], blocks: [
      R`In a <b>collision</b>, two bodies exert large forces on each other for a very short time. External forces (like gravity) are tiny by comparison during that time, so:`,
      { points: [R`<b>Total linear momentum is always conserved</b> in a collision.`, R`Total energy is conserved too, but <b>kinetic energy</b> may or may not be conserved: some may turn into heat, sound or deformation.`] },
      { table: { head: [R`Type`, R`Momentum`, R`Kinetic energy`, R`Example`], rows: [
        [R`Elastic`, R`conserved`, R`conserved`, R`collisions of atoms; nearly, of billiard balls`],
        [R`Inelastic`, R`conserved`, R`partly lost`, R`most real collisions`],
        [R`Perfectly inelastic`, R`conserved`, R`maximum loss; bodies stick together`, R`a bullet embedding in a block`]] } },
      R`The <b>coefficient of restitution</b> e measures how "bouncy" a collision is: \[e = \frac{\text{speed of separation}}{\text{speed of approach}} = \frac{v_2 - v_1}{u_1 - u_2}\] e = 1 for elastic, 0 < e < 1 for inelastic and e = 0 for perfectly inelastic collisions.`,
      { ex: { q: R`A ball dropped from 5 m bounces off the floor with e = 0.6. How high does it rise?`,
        steps: [R`Speed just before impact \(\sqrt{2gh}\); just after, \(e\sqrt{2gh}\).`, R`New height \(= e^2h = 0.36\times5\).`], ans: R`1.8 m` } },
      { check: { q: R`In a perfectly inelastic collision, is momentum conserved?`, ans: R`Yes. Momentum is conserved in every collision; only kinetic energy is lost.` } }
    ] },

    { h: R`Elastic collisions in one dimension`, t: [8], blocks: [
      { fig: figCollide1D, cap: R`A head-on collision: both balls move along the same line before and after.` },
      { derive: R`Final velocities in a one-dimensional elastic collision`, steps: [
        R`Momentum: \(m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2\), so \(m_1(u_1 - v_1) = m_2(v_2 - u_2)\). (1)`,
        R`Kinetic energy: \(m_1(u_1^2 - v_1^2) = m_2(v_2^2 - u_2^2)\), so \(m_1(u_1 - v_1)(u_1 + v_1) = m_2(v_2 - u_2)(v_2 + u_2)\). (2)`,
        R`Dividing (2) by (1): \(u_1 + v_1 = v_2 + u_2\), that is \(v_2 - v_1 = u_1 - u_2\): the speed of separation equals the speed of approach (e = 1).`,
        R`Solving: \(v_1 = \dfrac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2}\), \(v_2 = \dfrac{(m_2 - m_1)u_2 + 2m_1u_1}{m_1 + m_2}\).`
      ] },
      { h3: R`Special cases (\(m_2\) initially at rest, \(u_2 = 0\))` },
      { points: [R`<b>Equal masses:</b> \(v_1 = 0\), \(v_2 = u_1\). The balls exchange velocities (Newton's cradle).`, R`<b>Heavy hits light</b> (\(m_1 \gg m_2\)): \(v_1 \approx u_1\), \(v_2 \approx 2u_1\).`, R`<b>Light hits heavy</b> (\(m_1 \ll m_2\)): \(v_1 \approx -u_1\) (bounces straight back), \(v_2 \approx 0\).`] },
      { ex: { q: R`A 2 kg ball moving at 6 m/s collides elastically head-on with a 1 kg ball at rest. Find their velocities after the collision and check that kinetic energy is conserved.`,
        steps: [R`\(v_1 = \dfrac{(2 - 1)\times6}{3} = 2\) m/s; \(v_2 = \dfrac{2\times2\times6}{3} = 8\) m/s.`, R`KE before = ½ × 2 × 36 = 36 J; after = ½ × 2 × 4 + ½ × 1 × 64 = 4 + 32 = 36 J. ✓`], ans: R`2 m/s and 8 m/s, both forward` } },
      { tip: R`For any head-on collision, use two equations: momentum conservation and \(v_2 - v_1 = e(u_1 - u_2)\). This handles elastic (e = 1), inelastic and perfectly inelastic (e = 0) cases with the same method.` },
      { check: { q: R`A neutron hits a stationary nucleus of the same mass head-on and elastically. What happens?`, ans: R`The neutron stops and the nucleus moves off with the neutron's velocity. (This is why hydrogen-rich moderators slow neutrons well.)` } }
    ] },

    { h: R`Inelastic and perfectly inelastic collisions`, t: [8], blocks: [
      R`When the bodies stick together, they move with a common velocity: \[v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}\] and the loss of kinetic energy is \[\Delta K = \frac{m_1m_2}{2(m_1 + m_2)}(u_1 - u_2)^2\]`,
      { ex: { q: R`The 2 kg ball (6 m/s) and the 1 kg ball (at rest) from the last section stick together instead. Find the common velocity and the loss of kinetic energy.`,
        steps: [R`\(v = \dfrac{2\times6}{3} = 4\) m/s.`, R`KE after = ½ × 3 × 16 = 24 J, so the loss = 36 − 24 = 12 J. Check: \(\dfrac{2\times1}{2\times3}\times36 = 12\) J. ✓`], ans: R`4 m/s; 12 J lost` } },
      { adv: [R`<b>Ballistic pendulum.</b> A 10 g bullet is fired into a 0.99 kg block hanging on strings. The block (with the bullet inside) swings up by 20 cm. How fast was the bullet?`,
        R`After the collision, energy is conserved: \(v = \sqrt{2gh} = \sqrt{2\times10\times0.2} = 2\) m/s. During the collision, momentum is conserved: \(0.01\,u = 1.00\times2\), so u = 200 m/s. Note the two stages: momentum for the collision, energy for the swing. Using energy conservation across the collision would be wrong, because the collision is perfectly inelastic.`] },
      { check: { q: R`In which type of collision is the loss of kinetic energy greatest?`, ans: R`Perfectly inelastic (the bodies stick together).` } }
    ] },

    { h: R`Collisions in two dimensions`, t: [8], blocks: [
      R`If the collision is not head-on (a glancing or oblique collision), the bodies move off at angles. Momentum is conserved separately along x and along y. For a ball of mass \(m_1\) hitting \(m_2\) at rest:`,
      R`\[m_1u_1 = m_1v_1\cos\theta_1 + m_2v_2\cos\theta_2,\qquad 0 = m_1v_1\sin\theta_1 - m_2v_2\sin\theta_2\]`,
      { fig: figCollide2D, cap: R`An oblique collision with a ball at rest. Momentum is conserved along the original direction and perpendicular to it.` },
      R`With three equations (two momentum components and, if elastic, energy) and four unknowns (\(v_1, v_2, \theta_1, \theta_2\)), one more piece of information is needed, usually one of the angles.`,
      { points: [R`<b>Equal masses, elastic, one at rest:</b> the two balls always move off at right angles to each other (\(\theta_1 + \theta_2 = 90^\circ\)). Snooker players use this!`] },
      { ex: { q: R`A 1 kg ball at 10 m/s strikes an identical ball at rest elastically. The first ball moves off at 30° to its original direction. Find the speeds after the collision.`,
        steps: [R`Equal masses, elastic: the second ball moves at 60° on the other side.`, R`x: \(10 = v_1\cos30^\circ + v_2\cos60^\circ\); y: \(v_1\sin30^\circ = v_2\sin60^\circ\), so \(v_1 = \sqrt3\,v_2\).`, R`Then \(10 = \frac32v_2 + \frac12v_2 = 2v_2\): \(v_2 = 5\) m/s, \(v_1 = 5\sqrt3 \approx 8.66\) m/s.`], ans: R`8.66 m/s at 30° and 5 m/s at 60°` } },
      { check: { q: R`In the example, check that kinetic energy is conserved.`, ans: R`Before: ½ × 100 = 50 J. After: ½(75) + ½(25) = 50 J. ✓` } }
    ] }
  ],
  summary: [
    R`Scalar product \(\vec A\cdot\vec B = AB\cos\theta = A_xB_x + A_yB_y + A_zB_z\).`,
    R`Work \(W = \vec F\cdot\vec d = Fd\cos\theta\) (positive, negative or zero); for a variable force \(W = \int F\,dx\) = area under the F–x graph.`,
    R`Kinetic energy \(K = \frac12mv^2 = \frac{p^2}{2m}\). Work–energy theorem: \(W_{net} = \Delta K\).`,
    R`Conservative forces (gravity, spring, electrostatic) do path-independent work, zero round a closed path; \(\Delta U = -W_c\) and \(F = -dU/dx\).`,
    R`Equilibrium where dU/dx = 0: U minimum = stable, maximum = unstable, constant = neutral.`,
    R`Gravitational PE \(mgh\); spring PE \(\frac12kx^2\) (spring force \(-kx\)).`,
    R`Only conservative forces ⇒ K + U constant; with friction, \(W_{nc} = \Delta E\). Total energy (including \(mc^2\)) is always conserved.`,
    R`Power \(P = dW/dt = \vec F\cdot\vec v\); 1 hp = 746 W; 1 kWh = 3.6 × 10⁶ J (a unit of energy).`,
    R`Vertical circle on a string: \(v_{top} \ge \sqrt{gR}\), \(v_{bottom} \ge \sqrt{5gR}\), \(T_{bottom} - T_{top} = 6mg\); on a rod, \(v_{bottom} \ge \sqrt{4gR}\).`,
    R`All collisions conserve momentum; elastic ones also conserve KE. \(e = \frac{v_2 - v_1}{u_1 - u_2}\); a bounce rises to \(e^2h\).`,
    R`1D elastic: \(v_1 = \frac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2}\), \(v_2 = \frac{(m_2 - m_1)u_2 + 2m_1u_1}{m_1 + m_2}\); equal masses exchange velocities.`,
    R`Perfectly inelastic: \(v = \frac{m_1u_1 + m_2u_2}{m_1 + m_2}\), KE lost \(= \frac{m_1m_2}{2(m_1 + m_2)}(u_1 - u_2)^2\).`,
    R`2D collisions: conserve momentum along x and y separately; equal masses (elastic, one at rest) separate at 90°.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §7.1 Work`, url: 'https://openstax.org/books/university-physics-volume-1/pages/7-1-work' },
    { t: R`OpenStax University Physics Vol. 1, §7.3 Work–Energy Theorem`, url: 'https://openstax.org/books/university-physics-volume-1/pages/7-3-work-energy-theorem' },
    { t: R`OpenStax University Physics Vol. 1, §7.4 Power`, url: 'https://openstax.org/books/university-physics-volume-1/pages/7-4-power' },
    { t: R`OpenStax University Physics Vol. 1, §8.2 Conservative and Non-Conservative Forces`, url: 'https://openstax.org/books/university-physics-volume-1/pages/8-2-conservative-and-non-conservative-forces' },
    { t: R`OpenStax University Physics Vol. 1, §8.3 Conservation of Energy`, url: 'https://openstax.org/books/university-physics-volume-1/pages/8-3-conservation-of-energy' },
    { t: R`OpenStax University Physics Vol. 1, §8.4 Potential Energy Diagrams and Stability`, url: 'https://openstax.org/books/university-physics-volume-1/pages/8-4-potential-energy-diagrams-and-stability' },
    { t: R`OpenStax University Physics Vol. 1, §9.4 Types of Collisions`, url: 'https://openstax.org/books/university-physics-volume-1/pages/9-4-types-of-collisions' },
    { t: R`OpenStax University Physics Vol. 1, §9.5 Collisions in Multiple Dimensions`, url: 'https://openstax.org/books/university-physics-volume-1/pages/9-5-collisions-in-multiple-dimensions' },
    { t: R`Wikipedia: Coefficient of restitution`, url: 'https://en.wikipedia.org/wiki/Coefficient_of_restitution' },
    { t: R`Wikipedia: Ballistic pendulum`, url: 'https://en.wikipedia.org/wiki/Ballistic_pendulum' }
  ]
});
})();
