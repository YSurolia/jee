// Book chapter: Rotational Motion (system of particles and rigid bodies). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figTwoCM = D.svg(420, 110, [
  D.arrow(20, 70, 400, 70, { w: 1.4, head: 8 }), D.text(398, 88, 'x', { math: true, color: 'm', anchor: 'end' }),
  D.circle(80, 70, 14, { color: 'c', fill: 'soft' }), D.text(80, 71, 'm₁', { size: 12 }), D.text(80, 100, 'x₁', { size: 12, color: 'm' }),
  D.circle(320, 70, 20, { color: 'o', fill: 'soft' }), D.text(320, 71, 'm₂', { size: 12 }), D.text(320, 104, 'x₂', { size: 12, color: 'm' }),
  D.dot(224, 70, { color: 'r', r: 5 }), D.text(224, 46, 'centre of mass', { size: 12, color: 'r' }),
  D.text(224, 100, 'nearer the heavier mass', { size: 11, color: 'm' })
], 'Centre of mass of two particles lies on the line joining them, nearer the heavier one');

var figExplode = D.plot({
  w: 420, h: 200, x: [0, 500], y: [0, 0], eq: true, ylabel: 'y', noOrigin: true,
  param: [{ fx: function (t) { return 40 * t; }, fy: function (t) { return 40 * t - 5 * t * t; }, t: [0, 8], color: 'c' },
    { fx: function (t) { return 160 + 80 * t; }, fy: function (t) { return 80 - 5 * t * t; }, t: [0, 4], color: 'o', dash: '6 4' }],
  segs: [{ x1: 160, y1: 80, x2: 160, y2: 0, color: 'g', dash: '6 4', w: 2 }],
  pts: [{ x: 160, y: 80, label: 'explodes', pos: 'n', math: false, size: 12 }, { x: 320, y: 0, label: 'R', pos: 's' }, { x: 480, y: 0, label: '3R/2', pos: 's' }],
  label: 'Projectile exploding at the top'
});

var figCross = D.svg(260, 200, [
  D.arrow(80, 140, 220, 140, { color: 'c', label: 'A', at: 'end', lx: 8, ly: 10 }),
  D.arrow(80, 140, 150, 175, { color: 'o', label: 'B', at: 'end', lx: 8, ly: 6 }),
  D.arrow(80, 140, 80, 30, { color: 'r', w: 2.6, label: 'A × B', at: 'end', lx: 30, ly: 0 }),
  D.angle(80, 140, 34, -26.6, 0, 'θ', { lr: 10 }),
  D.text(150, 70, 'curl fingers from A to B:', { size: 11, color: 'm', anchor: 'start' }), D.text(150, 86, 'thumb gives A × B', { size: 11, color: 'm', anchor: 'start' })
], 'Right-hand rule for the vector product');

var figWrench = D.svg(360, 170, [
  D.circle(60, 100, 16, { color: 'm', fill: 'soft', w: 1.6 }), D.dot(60, 100, { r: 3 }), D.text(60, 130, 'axis (bolt)', { size: 11, color: 'm' }),
  D.poly([[60, 92], [270, 92], [270, 108], [60, 108]], { closed: true, color: 'm', fill: 'soft', w: 1.4 }),
  D.arrow(60, 100, 265, 100, { color: 'c', label: 'r', ly: 16 }),
  D.arrow(265, 100, 315, 25, { color: 'r', label: 'F', lx: 10, ly: 0 }), D.line(265, 100, 330, 100, { color: 'm', dash: '3 3', w: 1 }),
  D.angle(265, 100, 26, 0, 56.3, 'θ', { lr: 10 }),
  D.text(180, 152, 'τ = rF sin θ', { math: true, color: 'r' })
], 'A wrench turning a bolt');

var figSkater = D.row([
  [D.svg(170, 170, [D.circle(85, 40, 12, { color: 'c', fill: 'soft' }), D.line(85, 52, 85, 110, { color: 'c', w: 3 }), D.line(20, 70, 150, 70, { color: 'c', w: 3 }),
    D.line(85, 110, 70, 150, { color: 'c', w: 3 }), D.line(85, 110, 100, 150, { color: 'c', w: 3 }), D.ellipse(85, 160, 50, 8, { color: 'm', dash: '3 3', w: 1 }), D.text(85, 12, 'large I, slow ω', { size: 11, color: 'm' })], 'arms out'), 'arms out'],
  [D.svg(170, 170, [D.circle(85, 40, 12, { color: 'o', fill: 'soft' }), D.line(85, 52, 85, 110, { color: 'o', w: 3 }), D.line(85, 62, 72, 92, { color: 'o', w: 3 }), D.line(85, 62, 98, 92, { color: 'o', w: 3 }),
    D.line(85, 110, 70, 150, { color: 'o', w: 3 }), D.line(85, 110, 100, 150, { color: 'o', w: 3 }), D.ellipse(85, 160, 50, 8, { color: 'm', dash: '3 3', w: 1 }), D.text(85, 12, 'small I, fast ω', { size: 11, color: 'm' })], 'arms in'), 'arms pulled in']
]);

var figAxes = D.row([
  [D.svg(220, 190, [
    D.ellipse(110, 100, 70, 46, { color: 'c', fill: 'soft', w: 1.6 }), D.dot(100, 100, { r: 4, color: 'r' }), D.text(92, 116, 'CM', { size: 11, color: 'r' }),
    D.line(100, 20, 100, 180, { color: 'r', dash: '6 4', w: 1.6 }), D.line(160, 20, 160, 180, { color: 'k', w: 1.8 }),
    D.arrow(100, 40, 160, 40, { color: 'm', w: 1.2, head: 6, both: true }), D.text(130, 30, 'd', { math: true }),
    D.text(100, 14, 'I_{cm}', { size: 13, color: 'r' }), D.text(170, 14, 'I = I_{cm} + Md²', { size: 12, anchor: 'start' })
  ], 'Parallel axes theorem'), '(a) parallel axes'],
  [D.svg(220, 190, [
    D.poly([[40, 140], [140, 165], [200, 110], [100, 85]], { closed: true, color: 'c', fill: 'soft', w: 1.6 }),
    D.arrow(120, 125, 200, 145, { color: 'k', label: 'x', at: 'end', lx: 8, ly: 4 }), D.arrow(120, 125, 70, 105, { color: 'k', label: 'y', at: 'end', lx: -8, ly: -6 }),
    D.arrow(120, 125, 120, 20, { color: 'r', w: 2.2, label: 'z', at: 'end', lx: 10, ly: 0 }), D.text(130, 40, 'I_z = I_x + I_y', { size: 12, anchor: 'start', color: 'r' })
  ], 'Perpendicular axes theorem for a flat lamina'), '(b) perpendicular axes (flat lamina)']
]);

var figPulley = D.svg(220, 220, [
  D.line(40, 20, 180, 20, { w: 2 }), D.ground(40, 20, 180, 20, { side: -1 }), D.line(110, 20, 110, 70, { w: 1.6 }),
  D.circle(110, 80, 34, { color: 'c', fill: 'soft', w: 2 }), D.dot(110, 80, { r: 3 }), D.text(110, 66, 'M, R', { size: 11 }),
  D.line(144, 80, 144, 160, { w: 1.6 }), D.block(124, 160, 40, 34, 'm', { math: true }),
  D.arrow(180, 165, 180, 205, { color: 'r', w: 1.6, head: 7, label: 'a', lx: 12, ly: 0 }),
  D.path('M80 54 A 40 40 0 0 1 140 54', { color: 'g', w: 1.6 }), D.arrow(136, 50, 142, 56, { color: 'g', head: 7 }), D.text(110, 36, 'α', { math: true, color: 'g' })
], 'A block hanging from a string wound on a heavy pulley');

var figSeesaw = D.svg(380, 150, [
  D.ground(20, 130, 360, 130), D.poly([[180, 130], [200, 90], [220, 130]], { closed: true, color: 'm', fill: 'soft', w: 1.4 }),
  D.line(40, 90, 360, 90, { w: 4, color: 'k' }),
  D.block(60, 50, 40, 40, '30 kg'), D.block(300, 50, 40, 40, '40 kg'),
  D.arrow(80, 92, 80, 120, { color: 'r', w: 1.6, head: 6 }), D.arrow(320, 92, 320, 120, { color: 'r', w: 1.6, head: 6 }),
  D.arrow(80, 30, 200, 30, { color: 'm', w: 1.2, head: 6, both: true }), D.text(140, 20, '2 m', { size: 12 }),
  D.arrow(200, 30, 320, 30, { color: 'm', w: 1.2, head: 6, both: true }), D.text(260, 20, 'x = ?', { size: 12 })
], 'A see-saw balanced by two children');

var figLadder = D.svg(260, 220, [
  D.ground(20, 200, 240, 200), D.line(220, 20, 220, 200, { w: 2.4 }), D.ground(220, 200, 220, 20, { side: 1 }),
  D.line(80, 200, 220, 40, { w: 5, color: 'o' }),
  D.angle(80, 200, 34, 0, 48.8, 'θ', { lr: 10 }),
  D.arrow(220, 40, 170, 40, { color: 'b', label: 'N_2', ly: -10 }), D.arrow(80, 200, 80, 140, { color: 'b', label: 'N_1', lx: -14, ly: 0 }),
  D.arrow(80, 200, 130, 200, { color: 'g', label: 'f', ly: 12 }), D.arrow(150, 120, 150, 175, { color: 'r', label: 'W', lx: 14, ly: 0 }),
  D.text(232, 110, 'smooth wall', { size: 11, color: 'm', anchor: 'start', rot: 90 }), D.text(40, 214, 'rough floor', { size: 11, color: 'm', anchor: 'start' })
], 'A ladder leaning against a smooth wall on a rough floor');

var figRolling = D.svg(320, 200, [
  D.ground(10, 180, 310, 180), D.circle(150, 110, 70, { color: 'c', fill: 'soft', w: 2 }), D.dot(150, 110, { r: 4 }),
  D.arrow(150, 110, 210, 110, { color: 'g', label: 'v', ly: -10 }),
  D.arrow(150, 40, 270, 40, { color: 'g', w: 2.4, label: '2v', ly: -10 }), D.dot(150, 40, { r: 3.5 }),
  D.dot(150, 180, { r: 4, color: 'r' }), D.text(160, 166, 'contact point: v = 0', { size: 11, color: 'r', anchor: 'start' }),
  D.dot(220, 110, { r: 3 }), D.arrow(220, 110, 262, 152, { color: 'g', w: 1.8, label: '√2 v', lx: 22, ly: 0, size: 13 }),
  D.path('M110 70 A 56 56 0 0 1 190 70', { color: 'm', w: 1.4 }), D.text(150, 64, 'ω', { math: true, color: 'm' })
], 'Velocities of points on a wheel rolling without slipping');

var figRodHit = D.svg(320, 170, [
  D.dot(60, 90, { r: 5 }), D.text(56, 114, 'pivot', { size: 11, color: 'm' }),
  D.rect(60, 84, 200, 12, { color: 'o', fill: 'soft', w: 1.6, r: 3 }), D.text(160, 74, 'rod M, L', { size: 12 }),
  D.circle(260, 150, 8, { color: 'c', fill: 'soft' }), D.arrow(260, 140, 260, 104, { color: 'c', label: 'v', lx: 12, ly: 0 }), D.text(274, 154, 'm', { math: true, anchor: 'start' }),
  D.path('M150 40 A 110 110 0 0 1 250 70', { color: 'g', w: 1.4 }), D.arrow(244, 64, 252, 72, { color: 'g', head: 7 }), D.text(220, 36, 'ω after', { size: 11, color: 'g' })
], 'A ball hits the end of a pivoted rod and sticks');

// ---------- chapter text ----------
JEE.book('physics', 'rotational-motion', {
  intro: [
    R`So far we treated every body as a point. Real bodies have size and shape, and they can spin as well as move: a wheel, a ceiling fan, a spinning top, the Earth. This chapter extends Newton's laws to <b>systems of particles</b> and <b>rigid bodies</b>.`,
    R`You will meet the centre of mass, torque, angular momentum, moment of inertia, the parallel and perpendicular axes theorems, the dynamics of rotation, equilibrium of rigid bodies and rolling. Each rotational idea has a linear twin (torque ↔ force, moment of inertia ↔ mass, angular momentum ↔ momentum), so keep comparing them as you read. Rotation is one of the highest-scoring and most-feared chapters in JEE.`
  ],
  sections: [
    { h: R`Rigid bodies: translation and rotation`, t: [7], blocks: [
      R`A <b>rigid body</b> is one whose shape and size do not change: the distance between any two of its particles stays fixed. Real bodies deform a little, but for most problems they can be treated as rigid.`,
      R`A rigid body can move in two basic ways. In pure <b>translation</b>, every particle moves with the same velocity (a block sliding down an incline). In pure <b>rotation about a fixed axis</b>, every particle moves in a circle centred on the axis (a ceiling fan). General motion, such as a rolling wheel, is a combination of translation of the centre of mass and rotation about it.`,
      { check: { q: R`Is the motion of a car's wheel on a road pure rotation?`, ans: R`No. It is rolling: translation of its centre plus rotation about the centre.` } }
    ] },

    { h: R`Centre of mass of a two-particle system`, t: [0], blocks: [
      R`The <b>centre of mass</b> (CM) of a system is the point that moves as if all the mass were concentrated there and all external forces acted there. For two particles on the x-axis: \[x_{cm} = \frac{m_1x_1 + m_2x_2}{m_1 + m_2}\]`,
      { fig: figTwoCM, cap: R`The centre of mass of two particles lies on the line joining them, closer to the heavier one. For equal masses it is exactly midway.` },
      { ex: { q: R`A 2 kg ball is at x = 0 and a 3 kg ball at x = 5 m. Where is their centre of mass?`,
        steps: [R`\(x_{cm} = \dfrac{2\times0 + 3\times5}{5}\).`], ans: R`x = 3 m (nearer the 3 kg ball)` } },
      { check: { q: R`Two particles of 1 kg and 4 kg are 10 m apart. How far is their CM from the 4 kg particle?`, ans: R`2 m (it divides the line in the inverse ratio of the masses, 4 : 1).` } }
    ] },

    { h: R`Centre of mass of a system of particles and of rigid bodies`, t: [0], blocks: [
      R`For n particles: \[\vec r_{cm} = \frac{\sum m_i\vec r_i}{M},\qquad M = \sum m_i\] (separately for x, y and z). For a continuous body, the sum becomes an integral: \(\vec r_{cm} = \dfrac{1}{M}\int\vec r\,dm\).`,
      { ex: { q: R`Masses 1 kg, 2 kg and 3 kg are placed at (0, 0), (4, 0) and (0, 6) metres. Find the centre of mass.`,
        steps: [R`\(x_{cm} = \dfrac{1\times0 + 2\times4 + 3\times0}{6} = \dfrac43\) m.`, R`\(y_{cm} = \dfrac{0 + 0 + 3\times6}{6} = 3\) m.`], ans: R`(1.33 m, 3 m)` } },
      { ex: { q: R`A rod of length L has a mass per unit length λ = kx, increasing from one end (x = 0). Find its centre of mass.`,
        steps: [R`\(dm = kx\,dx\); \(M = \int_0^Lkx\,dx = \frac{kL^2}{2}\).`, R`\(x_{cm} = \dfrac{\int_0^Lx\cdot kx\,dx}{M} = \dfrac{kL^3/3}{kL^2/2}\).`], ans: R`\(\frac{2L}{3}\) from the light end` } },
      R`For a uniform symmetric body (rod, ring, disc, sphere, cube), the CM is at the geometric centre. Other useful results, measured from the centre of the flat face or from the centre of the full circle:`,
      { table: { head: [R`Uniform body`, R`Position of CM`], rows: [
        [R`Semicircular ring of radius R`, R`\(\dfrac{2R}{\pi}\) from the centre`], [R`Semicircular disc`, R`\(\dfrac{4R}{3\pi}\) from the centre`],
        [R`Solid hemisphere`, R`\(\dfrac{3R}{8}\) from the flat face`], [R`Hollow hemisphere`, R`\(\dfrac R2\) from the flat face`], [R`Solid cone of height h`, R`\(\dfrac h4\) from the base`]] } },
      { tip: R`For a body with a hole, treat the hole as a negative mass: \(x_{cm} = \dfrac{M_1x_1 - M_2x_2}{M_1 - M_2}\), where \(M_2\) is the mass that was removed.` },
      { check: { q: R`Where is the centre of mass of a uniform ring? Is there any mass there?`, ans: R`At its centre, where there is no mass at all.` } }
    ] },

    { h: R`Motion of the centre of mass`, t: [0], blocks: [
      R`Differentiating \(M\vec r_{cm} = \sum m_i\vec r_i\) twice and noting that internal forces cancel in pairs (Newton's third law): \[M\vec a_{cm} = \vec F_{ext}\] The centre of mass moves like a single particle of mass M acted on by the total external force. The total momentum is \(\vec P = M\vec v_{cm}\), so if \(\vec F_{ext} = 0\), the CM moves with constant velocity.`,
      { fig: figExplode, cap: R`A shell explodes at the top of its path into two equal pieces; one falls straight down. Internal forces cannot change the motion of the CM, which still lands at the original range R. So the other piece lands at \(\frac{3R}{2}\).` },
      { ex: { q: R`A shell would have a range of R. At its highest point it explodes into two equal halves; one half falls vertically. Where does the other half land?`,
        steps: [R`The first half lands at R/2 (directly below the top). The CM still lands at R.`, R`\(\dfrac{m\cdot\frac R2 + m\cdot x}{2m} = R\), so \(x = \dfrac{3R}{2}\).`], ans: R`At 3R/2 from the launch point` } },
      { check: { q: R`A man walks from one end of a boat to the other on still water. What happens to the CM of the man–boat system?`, ans: R`It stays at rest (no horizontal external force); the boat moves backward.` } }
    ] },

    { h: R`Rotational kinematics`, t: [7], blocks: [
      R`For rotation about a fixed axis, every particle turns through the same angle. We describe the motion with <b>angular displacement</b> θ (rad), <b>angular velocity</b> \(\omega = d\theta/dt\) (rad/s) and <b>angular acceleration</b> \(\alpha = d\omega/dt\) (rad/s²).`,
      R`A particle at distance r from the axis has speed \(v = \omega r\), tangential acceleration \(a_t = \alpha r\) and centripetal acceleration \(a_c = \omega^2r\).`,
      R`With constant α, the equations look exactly like those for constant linear acceleration: \[\omega = \omega_0 + \alpha t,\quad \theta = \omega_0t + \tfrac12\alpha t^2,\quad \omega^2 = \omega_0^2 + 2\alpha\theta\]`,
      { ex: { q: R`A wheel starts from rest with α = 2 rad/s². Find its angular velocity and the angle turned after 5 s. How many revolutions is that?`,
        steps: [R`\(\omega = 2\times5 = 10\) rad/s; \(\theta = \frac12\times2\times25 = 25\) rad.`, R`Revolutions = 25/(2π).`], ans: R`10 rad/s; 25 rad ≈ 4 revolutions` } },
      { check: { q: R`Two points on a rotating disc are at 10 cm and 20 cm from the axis. Compare their angular speeds and their linear speeds.`, ans: R`Same ω; the outer point has twice the linear speed.` } }
    ] },

    { h: R`The vector (cross) product`, t: [1], blocks: [
      R`Rotation needs a second way of multiplying vectors. The <b>vector product</b> \(\vec A\times\vec B\) is a vector of magnitude \(AB\sin\theta\), perpendicular to both \(\vec A\) and \(\vec B\), with direction given by the <b>right-hand rule</b>.`,
      { fig: figCross, cap: R`Right-hand rule: curl the fingers of your right hand from \(\vec A\) towards \(\vec B\); the thumb points along \(\vec A\times\vec B\).` },
      { points: [R`It is not commutative: \(\vec B\times\vec A = -\vec A\times\vec B\).`, R`\(\vec A\times\vec A = 0\); parallel vectors have zero cross product.`, R`\(\hat i\times\hat j = \hat k\), \(\hat j\times\hat k = \hat i\), \(\hat k\times\hat i = \hat j\) (cyclic order).`, R`In components: \(\vec A\times\vec B = \begin{vmatrix}\hat i & \hat j & \hat k\\ A_x & A_y & A_z\\ B_x & B_y & B_z\end{vmatrix}\).`] },
      { ex: { q: R`Find \((2\hat i + 3\hat j)\times(\hat i - \hat j)\).`,
        steps: [R`\(2\hat i\times(-\hat j) = -2\hat k\); \(3\hat j\times\hat i = -3\hat k\); \(\hat i\times\hat i = \hat j\times\hat j = 0\).`], ans: R`\(-5\hat k\)` } },
      { check: { q: R`What is \(\hat k\times\hat j\)?`, ans: R`\(-\hat i\).` } }
    ] },

    { h: R`Torque: the turning effect of a force`, t: [1], blocks: [
      R`To open a door you push far from the hinges, at right angles to the door. The turning effect of a force depends on the force, the distance from the axis and the angle. This is the <b>torque</b> (moment of a force): \[\vec\tau = \vec r\times\vec F,\qquad \tau = rF\sin\theta = F\times(\text{perpendicular distance from the axis to the line of the force})\] Its unit is N m.`,
      { fig: figWrench, cap: R`A wrench turns a bolt. Only the component \(F\sin\theta\) perpendicular to the wrench turns it. A longer wrench gives more torque for the same force.` },
      { ex: { q: R`A 20 N force is applied at the end of a 0.3 m spanner. Find the torque when the force is (a) perpendicular to the spanner (b) at 30° to it.`,
        steps: [R`(a) \(\tau = 0.3\times20 = 6\) N m. (b) \(\tau = 0.3\times20\times\sin30^\circ = 3\) N m.`], ans: R`6 N m; 3 N m` } },
      R`A <b>couple</b> is a pair of equal and opposite forces whose lines of action are different. It produces rotation without translation. Its moment is F × (distance between the forces), the same about every point. Turning a steering wheel or a tap uses a couple.`,
      { check: { q: R`Why are door handles placed far from the hinges?`, ans: R`A larger perpendicular distance gives more torque for the same push.` } }
    ] },

    { h: R`Angular momentum`, t: [2], blocks: [
      R`The rotational twin of momentum is <b>angular momentum</b>. For a particle with momentum \(\vec p\) at position \(\vec r\): \[\vec L = \vec r\times\vec p,\qquad L = rp\sin\theta = mvr_\perp\] For a rigid body rotating about a fixed axis, \(L = I\omega\), where I is the moment of inertia (defined below).`,
      { derive: R`Torque is the rate of change of angular momentum`, steps: [
        R`\(\dfrac{d\vec L}{dt} = \dfrac{d\vec r}{dt}\times\vec p + \vec r\times\dfrac{d\vec p}{dt} = \vec v\times m\vec v + \vec r\times\vec F\).`,
        R`\(\vec v\times\vec v = 0\), so \(\dfrac{d\vec L}{dt} = \vec r\times\vec F = \vec\tau\).`,
        R`For a system, internal torques cancel, so \(\vec\tau_{ext} = \dfrac{d\vec L}{dt}\), just like \(\vec F_{ext} = \dfrac{d\vec P}{dt}\).`
      ] },
      { ex: { q: R`A 0.5 kg particle moves at 4 m/s along the line y = 3 m (parallel to the x-axis). Find its angular momentum about the origin.`,
        steps: [R`\(L = mvr_\perp\), with \(r_\perp = 3\) m (the distance of the line from the origin).`, R`\(L = 0.5\times4\times3\).`], ans: R`6 kg m²/s (constant, since no force acts)` } },
      { check: { q: R`Does a particle moving in a straight line have angular momentum?`, ans: R`Yes, about any point not on its line of motion.` } }
    ] },

    { h: R`Conservation of angular momentum`, t: [2], blocks: [
      R`If the net external torque on a system is zero, its angular momentum stays constant: \[\tau_{ext} = 0\ \Rightarrow\ I_1\omega_1 = I_2\omega_2\]`,
      { fig: figSkater, cap: R`An ice skater spins slowly with arms out (large moment of inertia) and fast with arms pulled in (small moment of inertia). Angular momentum Iω stays the same.` },
      { ex: { q: R`A skater spinning at 2 rev/s with I = 4 kg m² pulls in her arms, reducing I to 1.6 kg m². Find her new spin rate. What happens to her kinetic energy?`,
        steps: [R`\(\omega_2 = \dfrac{I_1\omega_1}{I_2} = \dfrac{4\times2}{1.6} = 5\) rev/s.`, R`\(K = \dfrac{L^2}{2I}\) with L constant, so K becomes \(4/1.6 = 2.5\) times larger. The extra energy comes from the work her muscles do pulling the arms in.`], ans: R`5 rev/s; KE increases 2.5 times` } },
      { points: [R`Divers and gymnasts tuck in to spin faster.`, R`A planet moves faster when it is closer to the Sun (Kepler's law of areas).`, R`A collapsing star spins up enormously, becoming a fast-spinning pulsar.`] },
      { check: { q: R`If the Earth suddenly shrank to half its radius (same mass), how long would a day be?`, ans: R`I falls to ¼, so ω becomes 4 times larger: a day would last 6 hours.` } }
    ] },

    { h: R`Moment of inertia and radius of gyration`, t: [3], blocks: [
      R`A heavy flywheel is hard to start spinning and hard to stop. In rotation, the role of mass is played by the <b>moment of inertia</b>: \[I = \sum m_ir_i^2 = \int r^2\,dm\] where r is the perpendicular distance of each particle from the axis. It depends not only on the mass but on <b>how far the mass is from the axis</b>, so the same body has different moments of inertia about different axes. Unit: kg m².`,
      R`The <b>radius of gyration</b> k is the distance from the axis at which the whole mass could be put to give the same I: \(I = Mk^2\), so \(k = \sqrt{I/M}\).`,
      { derive: R`Kinetic energy of rotation`, steps: [
        R`A particle at distance \(r_i\) moves with speed \(v_i = \omega r_i\), so its KE is \(\frac12m_i\omega^2r_i^2\).`,
        R`Adding for all particles: \(K = \frac12\left(\sum m_ir_i^2\right)\omega^2 = \frac12I\omega^2\), the twin of \(\frac12mv^2\).`
      ] },
      { ex: { q: R`Four 1 kg masses sit at the corners of a light square frame of side 2 m. Find the moment of inertia about an axis through the centre, perpendicular to the frame.`,
        steps: [R`Each mass is at half the diagonal from the centre: \(r = \sqrt2\) m, so \(r^2 = 2\) m².`, R`\(I = 4\times1\times2\).`], ans: R`8 kg m²` } },
      { check: { q: R`Why does a flywheel have most of its mass in the rim?`, ans: R`Mass far from the axis gives a large moment of inertia for little total mass.` } }
    ] },

    { h: R`Theorems of parallel and perpendicular axes`, t: [4], blocks: [
      { fig: figAxes, cap: R`(a) Parallel axes: I about any axis equals I about a parallel axis through the CM plus Md². (b) Perpendicular axes: for a flat lamina, I about the z-axis (perpendicular to its plane) equals the sum of I about two perpendicular axes x and y in its plane meeting at the same point.` },
      R`<b>Parallel axes theorem</b> (any body): \(I = I_{cm} + Md^2\), where d is the distance between the two parallel axes. So I is smallest about an axis through the centre of mass.`,
      R`<b>Perpendicular axes theorem</b> (flat bodies only): \(I_z = I_x + I_y\).`,
      { ex: { q: R`The moment of inertia of a uniform disc about its central axis (perpendicular to its face) is \(\frac12MR^2\). Find it about (a) a diameter (b) a tangent perpendicular to its face (c) a tangent in its plane.`,
        steps: [R`(a) By symmetry \(I_x = I_y\), so \(2I_d = \frac12MR^2\): \(I_d = \frac14MR^2\).`, R`(b) Parallel axes: \(\frac12MR^2 + MR^2 = \frac32MR^2\).`, R`(c) Parallel to a diameter, distance R: \(\frac14MR^2 + MR^2 = \frac54MR^2\).`], ans: R`\(\frac14MR^2\), \(\frac32MR^2\), \(\frac54MR^2\)` } },
      { mistake: R`Using the perpendicular axes theorem for a 3-D body such as a sphere or cylinder. It works only for flat laminas.` },
      { check: { q: R`A ring has \(I = MR^2\) about its central axis. What is its I about a diameter?`, ans: R`\(\frac12MR^2\).` } }
    ] },

    { h: R`Moments of inertia of simple bodies`, t: [5], blocks: [
      { table: { head: [R`Body (uniform, mass M)`, R`Axis`, R`Moment of inertia`], rows: [
        [R`Thin ring, radius R`, R`central, perpendicular to plane`, R`\(MR^2\)`], [R`Thin ring`, R`a diameter`, R`\(\frac12MR^2\)`],
        [R`Disc, radius R`, R`central, perpendicular to plane`, R`\(\frac12MR^2\)`], [R`Disc`, R`a diameter`, R`\(\frac14MR^2\)`],
        [R`Thin rod, length L`, R`through centre, perpendicular`, R`\(\frac1{12}ML^2\)`], [R`Thin rod`, R`through one end, perpendicular`, R`\(\frac13ML^2\)`],
        [R`Solid sphere, radius R`, R`a diameter`, R`\(\frac25MR^2\)`], [R`Hollow sphere (thin shell)`, R`a diameter`, R`\(\frac23MR^2\)`],
        [R`Solid cylinder`, R`its own axis`, R`\(\frac12MR^2\)`], [R`Hollow cylinder (thin)`, R`its own axis`, R`\(MR^2\)`],
        [R`Rectangular plate a × b`, R`central, perpendicular to plate`, R`\(\frac{1}{12}M(a^2 + b^2)\)`]] } },
      { derive: R`Deriving the results for a rod and a disc`, steps: [
        R`<b>Rod about its centre:</b> mass per length λ = M/L. \(I = \int_{-L/2}^{L/2}x^2\lambda\,dx = \lambda\dfrac{L^3}{12} = \dfrac{ML^2}{12}\). About an end, by the parallel axes theorem: \(\dfrac{ML^2}{12} + M\left(\dfrac L2\right)^2 = \dfrac{ML^2}{3}\).`,
        R`<b>Ring:</b> all the mass is at distance R, so \(I = MR^2\).`,
        R`<b>Disc:</b> split it into thin rings of radius r and width dr, mass \(dm = \dfrac{M}{\pi R^2}2\pi r\,dr\). \(I = \int_0^Rr^2\,dm = \dfrac{2M}{R^2}\int_0^Rr^3\,dr = \dfrac12MR^2\).`
      ] },
      { ex: { q: R`Find the radius of gyration of a solid sphere about a diameter.`,
        steps: [R`\(Mk^2 = \frac25MR^2\).`], ans: R`\(k = \sqrt{2/5}\,R \approx 0.63R\)` } },
      { tip: R`Bodies with mass concentrated far from the axis (ring, hollow cylinder, hollow sphere) have larger I than solid ones of the same mass and radius. Remember the ordering: ring/hollow cylinder (1) > hollow sphere (2/3) > disc/solid cylinder (1/2) > solid sphere (2/5).` },
      { check: { q: R`Which has the larger moment of inertia about its axis: a ring or a disc of the same mass and radius?`, ans: R`The ring (\(MR^2\) versus \(\frac12MR^2\)).` } }
    ] },

    { h: R`Dynamics of rotation about a fixed axis`, t: [7], blocks: [
      R`Newton's second law for rotation about a fixed axis is \[\tau = I\alpha\] the twin of F = ma. Work done by a torque is \(W = \int\tau\,d\theta\), power is \(P = \tau\omega\), and the work–energy theorem becomes \(W = \Delta\left(\frac12I\omega^2\right)\).`,
      { table: { head: [R`Linear motion`, R`Rotational motion`], rows: [
        [R`displacement x`, R`angle θ`], [R`velocity v`, R`angular velocity ω`], [R`acceleration a`, R`angular acceleration α`], [R`mass m`, R`moment of inertia I`],
        [R`force F = ma`, R`torque τ = Iα`], [R`momentum p = mv`, R`angular momentum L = Iω`], [R`KE = ½mv²`, R`KE = ½Iω²`], [R`work F dx; power Fv`, R`work τ dθ; power τω`]] } },
      { fig: figPulley, cap: R`A block of mass m hangs from a light string wound on a pulley (a solid disc of mass M and radius R) that turns about a fixed axle.` },
      { ex: { q: R`In the figure, m = 1 kg, M = 2 kg and R = 0.1 m. Find the acceleration of the block and the tension. (g = 10 m/s²)`,
        steps: [R`Block: \(mg - T = ma\). Pulley: \(TR = I\alpha = \frac12MR^2\cdot\dfrac aR\), so \(T = \frac12Ma\).`, R`Adding: \(mg = \left(m + \frac M2\right)a\), so \(a = \dfrac{10}{1 + 1} = 5\) m/s².`, R`\(T = \frac12\times2\times5 = 5\) N.`], ans: R`5 m/s²; 5 N (less than the 10 N weight)` } },
      { ex: { q: R`A motor applies a constant torque of 10 N m to a shaft turning at 300 rpm. Find its power.`,
        steps: [R`\(\omega = 300\times\dfrac{2\pi}{60} = 31.4\) rad/s.`, R`\(P = \tau\omega\).`], ans: R`≈ 314 W` } },
      { check: { q: R`A constant torque acts on a wheel at rest. Is its angular velocity constant?`, ans: R`No: constant torque gives constant angular acceleration, so ω increases steadily.` } }
    ] },

    { h: R`Equilibrium of rigid bodies`, t: [6], blocks: [
      R`A rigid body is in <b>mechanical equilibrium</b> when it has neither linear nor angular acceleration. Two conditions must hold: \[\sum\vec F_{ext} = 0\ \text{(translational)},\qquad \sum\vec\tau_{ext} = 0\ \text{about any point (rotational)}\]`,
      R`The <b>principle of moments</b> (for a lever in equilibrium): sum of clockwise moments = sum of anticlockwise moments. The <b>centre of gravity</b> is the point through which the total weight acts; in a uniform gravitational field it coincides with the centre of mass.`,
      { fig: figSeesaw, cap: R`A see-saw balances when the moments of the two children about the pivot are equal.` },
      { ex: { q: R`A 30 kg child sits 2 m from the pivot of a see-saw. Where must a 40 kg child sit to balance it?`,
        steps: [R`\(30g\times2 = 40g\times x\).`], ans: R`x = 1.5 m on the other side` } },
      { fig: figLadder, cap: R`A uniform ladder leans against a smooth wall. The rough floor supplies friction f; the wall can only push horizontally (N₂).` },
      { adv: [R`<b>Ladder problem.</b> For a uniform ladder of length L and weight W at angle θ with the floor: horizontal forces give \(f = N_2\), vertical forces give \(N_1 = W\).`,
        R`Taking moments about the foot: \(N_2L\sin\theta = W\dfrac L2\cos\theta\), so \(f = \dfrac{W}{2\tan\theta}\). The ladder does not slip if \(f \le \mu N_1 = \mu W\), that is \(\tan\theta \ge \dfrac{1}{2\mu}\). With μ = 0.5, the ladder must make at least 45° with the floor.`] },
      { check: { q: R`Can a body have zero net force on it but still not be in equilibrium?`, ans: R`Yes, if a couple acts: zero net force but non-zero torque, so it starts rotating.` } }
    ] },

    { h: R`Rolling motion`, t: [8], blocks: [
      R`A wheel rolling <b>without slipping</b> combines translation of its centre (speed \(v_{cm}\)) with rotation about the centre (angular speed ω). Its contact point is momentarily at rest, which gives the rolling condition \[v_{cm} = \omega R\]`,
      { fig: figRolling, cap: R`On a wheel rolling without slipping, the contact point is momentarily at rest, the centre moves at v and the top moves at 2v. Every point moves as if the wheel were rotating about the contact point.` },
      R`The kinetic energy of a rolling body is translational plus rotational: \[K = \tfrac12Mv^2 + \tfrac12I\omega^2 = \tfrac12Mv^2\left(1 + \frac{k^2}{R^2}\right)\]`,
      { derive: R`Rolling down an inclined plane`, steps: [
        R`A body of mass M, radius R and radius of gyration k rolls down an incline of angle θ. Friction f acts up the slope (it is static: no energy is lost).`,
        R`Translation: \(Mg\sin\theta - f = Ma\). Rotation about the CM: \(fR = I\alpha = Mk^2\dfrac aR\), so \(f = \dfrac{Mk^2}{R^2}a\).`,
        R`Adding: \(a = \dfrac{g\sin\theta}{1 + k^2/R^2}\). By energy conservation, the speed after falling a height h is \(v = \sqrt{\dfrac{2gh}{1 + k^2/R^2}}\).`
      ] },
      { table: { head: [R`Body`, R`\(k^2/R^2\)`, R`Acceleration down the incline`], rows: [
        [R`Solid sphere`, R`2/5`, R`\(\frac57g\sin\theta\)`], [R`Disc / solid cylinder`, R`1/2`, R`\(\frac23g\sin\theta\)`], [R`Hollow sphere`, R`2/3`, R`\(\frac35g\sin\theta\)`], [R`Ring / hollow cylinder`, R`1`, R`\(\frac12g\sin\theta\)`]] } },
      { ex: { q: R`A solid sphere rolls without slipping from rest down a slope from a height of 7 m. Find its speed at the bottom. (g = 10 m/s²)`,
        steps: [R`\(v = \sqrt{\dfrac{2gh}{1 + 2/5}} = \sqrt{\dfrac{10gh}{7}} = \sqrt{100}\).`], ans: R`10 m/s (a sliding block without friction would reach about 11.8 m/s)` } },
      { tip: R`In a race down the same slope, the body with the smallest \(k^2/R^2\) wins: solid sphere first, then disc, then hollow sphere, then ring, regardless of mass or radius. A body that slides without friction beats them all.` },
      { check: { q: R`For a ring rolling without slipping, what fraction of its kinetic energy is rotational?`, ans: R`Half (\(k^2/R^2 = 1\), so the two parts are equal).` } }
    ] },

    { h: R`Collisions of point masses with rigid bodies`, t: [8], blocks: [
      R`When a ball hits a rigid body that can rotate, the impulsive forces at a fixed pivot can change linear momentum, but their torque about the pivot is zero. So <b>angular momentum about the pivot is conserved</b> during the collision. For a free body (no pivot), both linear momentum and angular momentum about the centre of mass are conserved.`,
      R`An impulse J applied at distance d from the CM changes the angular momentum by the <b>angular impulse</b> \(Jd = \Delta L\).`,
      { fig: figRodHit, cap: R`A small ball moving at v hits the free end of a rod pivoted at the other end, and sticks to it.` },
      { adv: [R`<b>Ball sticking to a pivoted rod.</b> Angular momentum about the pivot is conserved: \(mvL = \left(\frac13ML^2 + mL^2\right)\omega\), so \(\omega = \dfrac{mv}{(M/3 + m)L}\). For M = 3 kg, L = 1 m, m = 1 kg and v = 4 m/s, \(\omega = \dfrac{4}{2\times1} = 2\) rad/s.`,
        R`<b>Free rod on a smooth table, struck at one end</b> by an impulse J perpendicular to it: \(v_{cm} = J/M\) and \(\omega = \dfrac{J\cdot L/2}{ML^2/12} = \dfrac{6J}{ML}\). The point that is momentarily at rest lies at L/6 from the centre, on the other side; a bat struck at its "sweet spot" gives no jolt at the hands for the same reason.`] },
      { mistake: R`Conserving linear momentum when the rod is pivoted. The pivot exerts an impulsive force, so linear momentum changes; only angular momentum about the pivot is conserved.` },
      { check: { q: R`During the collision with a pivoted rod, about which point is angular momentum conserved?`, ans: R`About the pivot (the pivot force has zero torque about it).` } }
    ] }
  ],
  summary: [
    R`Centre of mass: \(\vec r_{cm} = \frac{\sum m_i\vec r_i}{M}\) (or \(\frac1M\int\vec r\,dm\)); \(M\vec a_{cm} = \vec F_{ext}\); internal forces cannot move the CM.`,
    R`Standard CMs: semicircular ring 2R/π, semicircular disc 4R/3π, solid hemisphere 3R/8, hollow hemisphere R/2, cone h/4.`,
    R`Rotational kinematics: \(\omega = \omega_0 + \alpha t\), \(\theta = \omega_0t + \frac12\alpha t^2\), \(\omega^2 = \omega_0^2 + 2\alpha\theta\); \(v = \omega r\), \(a_t = \alpha r\), \(a_c = \omega^2r\).`,
    R`Torque \(\vec\tau = \vec r\times\vec F\), \(\tau = rF\sin\theta\); a couple turns without translating.`,
    R`Angular momentum \(\vec L = \vec r\times\vec p\), \(L = I\omega\); \(\vec\tau_{ext} = d\vec L/dt\); zero external torque ⇒ \(I_1\omega_1 = I_2\omega_2\).`,
    R`\(I = \sum mr^2\), \(I = Mk^2\); rotational KE \(\frac12I\omega^2 = \frac{L^2}{2I}\).`,
    R`Parallel axes \(I = I_{cm} + Md^2\); perpendicular axes (laminas) \(I_z = I_x + I_y\).`,
    R`Ring \(MR^2\), disc \(\frac12MR^2\), rod \(\frac1{12}ML^2\) (centre) / \(\frac13ML^2\) (end), solid sphere \(\frac25MR^2\), hollow sphere \(\frac23MR^2\).`,
    R`\(\tau = I\alpha\); work \(\int\tau\,d\theta\); power \(\tau\omega\).`,
    R`Equilibrium: \(\sum\vec F = 0\) and \(\sum\vec\tau = 0\); principle of moments; ladder on a smooth wall slips unless \(\tan\theta \ge 1/2\mu\).`,
    R`Rolling: \(v = \omega R\); \(K = \frac12Mv^2(1 + k^2/R^2)\); down an incline \(a = \frac{g\sin\theta}{1 + k^2/R^2}\): sphere > disc > hollow sphere > ring.`,
    R`Collisions with a pivoted body conserve angular momentum about the pivot; with a free body, both linear and angular momentum.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §9.6 Center of Mass`, url: 'https://openstax.org/books/university-physics-volume-1/pages/9-6-center-of-mass' },
    { t: R`OpenStax University Physics Vol. 1, §10.1 Rotational Variables`, url: 'https://openstax.org/books/university-physics-volume-1/pages/10-1-rotational-variables' },
    { t: R`OpenStax University Physics Vol. 1, §10.5 Calculating Moments of Inertia`, url: 'https://openstax.org/books/university-physics-volume-1/pages/10-5-calculating-moments-of-inertia' },
    { t: R`OpenStax University Physics Vol. 1, §10.6 Torque`, url: 'https://openstax.org/books/university-physics-volume-1/pages/10-6-torque' },
    { t: R`OpenStax University Physics Vol. 1, §10.7 Newton's Second Law for Rotation`, url: 'https://openstax.org/books/university-physics-volume-1/pages/10-7-newtons-second-law-for-rotation' },
    { t: R`OpenStax University Physics Vol. 1, §11.1 Rolling Motion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/11-1-rolling-motion' },
    { t: R`OpenStax University Physics Vol. 1, §11.3 Conservation of Angular Momentum`, url: 'https://openstax.org/books/university-physics-volume-1/pages/11-3-conservation-of-angular-momentum' },
    { t: R`OpenStax University Physics Vol. 1, §12.1 Conditions for Static Equilibrium`, url: 'https://openstax.org/books/university-physics-volume-1/pages/12-1-conditions-for-static-equilibrium' },
    { t: R`Wikipedia: List of moments of inertia`, url: 'https://en.wikipedia.org/wiki/List_of_moments_of_inertia' },
    { t: R`Wikipedia: Parallel axis theorem`, url: 'https://en.wikipedia.org/wiki/Parallel_axis_theorem' }
  ]
});
})();
