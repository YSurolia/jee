// Book chapter: Laws of Motion. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figGalileo = D.svg(460, 150, [
  D.ground(20, 130, 440, 130),
  D.poly([[30, 40], [130, 130]], { w: 2.2 }), D.poly([[130, 130], [230, 40]], { w: 2, color: 'b' }),
  D.poly([[130, 130], [330, 70]], { w: 2, color: 'g', dash: '6 4' }), D.poly([[130, 130], [440, 130]], { w: 2, color: 'o', dash: '2 4' }),
  D.circle(42, 46, 8, { color: 'c', fill: 'soft' }), D.text(30, 22, 'released here', { size: 11, anchor: 'start' }),
  D.line(20, 40, 450, 40, { color: 'm', dash: '3 4', w: 1 }), D.text(452, 34, 'same height', { size: 11, color: 'm', anchor: 'end' }),
  D.text(232, 34, 'steep', { size: 11, color: 'b' }), D.text(336, 62, 'gentler: goes farther', { size: 11, color: 'g', anchor: 'start' }),
  D.text(380, 120, 'flat: never stops', { size: 11, color: 'o' })
], 'Galileo double inclined plane thought experiment');

var figImpulse = D.plot({
  w: 380, h: 210, x: [0, 12], y: [0, 9], xlabel: 't (ms)', ylabel: 'F (kN)', mathLabels: false, xticks: [2, 4, 6, 8, 10], yticks: [2, 4, 6, 8],
  shade: [{ f: function (t) { return t > 2 && t < 10 ? 8 * Math.sin(Math.PI * (t - 2) / 8) : 0; }, from: 2, to: 10, color: 'o' }],
  fns: [{ f: function (t) { return t > 2 && t < 10 ? 8 * Math.sin(Math.PI * (t - 2) / 8) : 0; }, from: 0, to: 12 }],
  segs: [{ x1: 2, y1: 5.1, x2: 10, y2: 5.1, color: 'g', dash: '5 4', w: 1.6 }],
  texts: [{ x: 6, y: 2.4, s: 'area = impulse', color: 'o', size: 13 }, { x: 10.3, y: 5.6, s: 'average force', color: 'g', anchor: 'start', size: 12 }],
  label: 'Force on a ball during a short impact; the area under the curve is the impulse'
});

var figPairs = D.svg(420, 170, [
  D.ground(10, 150, 410, 150),
  D.rect(150, 100, 120, 50, { color: 'm', fill: 'soft', w: 1.4 }), D.text(256, 140, 'table', { size: 11, color: 'm' }),
  D.block(180, 70, 60, 30, 'book'),
  D.arrow(210, 70, 210, 22, { color: 'b' }), D.text(218, 30, 'N (table on book)', { anchor: 'start', size: 12, color: 'b' }),
  D.arrow(226, 85, 226, 134, { color: 'r' }), D.text(282, 118, 'W (Earth on book)', { anchor: 'start', size: 12, color: 'r' }),
  D.arrow(192, 101, 192, 140, { color: 'o' }), D.text(140, 118, 'N′ (book on table)', { anchor: 'end', size: 12, color: 'o' })
], 'Forces acting on a book resting on a table');

var figFBD = D.row([
  [D.svg(240, 170, [
    D.ground(10, 140, 230, 140), D.block(70, 90, 70, 50, 'm', { math: true }),
    D.line(140, 105, 210, 65, { w: 1.6 }), D.angle(140, 105, 26, 0, 30, 'θ', { lr: 10 }), D.line(140, 105, 200, 105, { color: 'm', dash: '3 3', w: 1 }),
    D.text(214, 58, 'rope', { size: 11, color: 'm', anchor: 'start' })
  ], 'Block pulled by a rope at an angle'), '(a) the situation'],
  [D.svg(240, 190, [
    D.dot(110, 100, { r: 4 }),
    D.arrow(110, 100, 175, 63, { color: 'c', label: 'T', lx: 10, ly: -4 }),
    D.arrow(110, 100, 110, 30, { color: 'b', label: 'N', lx: 12, ly: 0 }),
    D.arrow(110, 100, 110, 172, { color: 'r', label: 'mg', lx: 16, ly: 0 }),
    D.arrow(110, 100, 45, 100, { color: 'o', label: 'f', ly: -10 })
  ], 'Free-body diagram of the block'), '(b) its free-body diagram']
]);

var figTwoBlocks = D.svg(420, 130, [
  D.ground(10, 105, 410, 105), D.block(140, 55, 70, 50, '2 kg'), D.block(210, 65, 60, 40, '3 kg'),
  D.arrow(60, 80, 136, 80, { color: 'r', label: 'F = 10 N', ly: -12, math: false }),
  D.arrow(212, 120, 260, 120, { color: 'b', w: 1.6, head: 7 }), D.text(268, 120, 'contact force on 3 kg', { size: 11, color: 'b', anchor: 'start' })
], 'Two blocks in contact pushed by a force');

var figAtwood = D.svg(220, 230, [
  D.line(40, 20, 180, 20, { w: 2 }), D.ground(40, 20, 180, 20, { side: -1 }), D.line(110, 20, 110, 40, { w: 1.6 }),
  D.circle(110, 52, 18, { color: 'k', w: 2 }), D.dot(110, 52, { r: 2.5 }),
  D.line(92, 52, 92, 150, { w: 1.6 }), D.line(128, 52, 128, 110, { w: 1.6 }),
  D.block(72, 150, 40, 40, '3 kg'), D.block(108, 110, 40, 36, '2 kg'),
  D.arrow(60, 160, 60, 200, { color: 'r', w: 1.6, head: 7, label: 'a', lx: -10, ly: 0 }), D.arrow(160, 140, 160, 100, { color: 'g', w: 1.6, head: 7, label: 'a', lx: 12, ly: 0 })
], 'Atwood machine with masses of 3 kg and 2 kg');

var figLift = D.svg(240, 200, [
  D.rect(60, 20, 120, 170, { color: 'm', w: 2 }), D.line(120, 0, 120, 20, { w: 2 }),
  D.rect(95, 170, 50, 10, { color: 'k', fill: 'soft', w: 1.2 }), D.text(120, 196, 'weighing scale', { size: 10, color: 'm' }),
  D.circle(120, 70, 12, { color: 'c', fill: 'soft' }), D.line(120, 82, 120, 135, { color: 'c', w: 3 }), D.line(120, 135, 108, 168, { color: 'c', w: 3 }), D.line(120, 135, 132, 168, { color: 'c', w: 3 }),
  D.arrow(150, 120, 150, 70, { color: 'b', label: 'N', lx: 12, ly: 0 }), D.arrow(90, 100, 90, 150, { color: 'r', label: 'mg', lx: -18, ly: 0 }),
  D.arrow(205, 120, 205, 60, { color: 'g', w: 2.4, label: 'a', lx: 12, ly: 0 })
], 'Person standing on a scale in a lift accelerating upward');

var figPseudo = D.svg(300, 170, [
  D.ground(10, 150, 290, 150), D.rect(60, 60, 170, 80, { color: 'm', w: 2, r: 6 }), D.circle(95, 150, 12, { fill: 'k' }), D.circle(195, 150, 12, { fill: 'k' }),
  D.line(145, 62, 115, 122, { w: 1.6 }), D.line(145, 62, 145, 132, { color: 'm', dash: '3 3', w: 1 }), D.circle(115, 122, 8, { color: 'c', fill: 'soft' }),
  D.angle(145, 62, 26, 243.4, 270, 'θ', { lr: 10 }),
  D.arrow(240, 40, 290, 40, { color: 'g', w: 2.4, label: 'a', ly: -10 }), D.text(150, 30, 'car accelerating', { size: 11, color: 'g' })
], 'A bob hanging in an accelerating car tilts backward');

var figRecoil = D.svg(400, 110, [
  D.rect(110, 45, 140, 22, { color: 'm', fill: 'soft', w: 1.6, r: 4 }), D.rect(110, 60, 40, 30, { color: 'm', fill: 'soft', w: 1.6, r: 4 }),
  D.dot(300, 56, { r: 5, color: 'k' }), D.arrow(310, 56, 380, 56, { color: 'r', label: 'v_b', ly: -12 }),
  D.arrow(100, 56, 50, 56, { color: 'b', label: 'v_g', ly: -12 }), D.text(180, 100, 'gun recoils backward', { size: 11, color: 'b' })
], 'A gun recoils when it fires a bullet');

var figLami = D.svg(320, 200, [
  D.line(20, 20, 300, 20, { w: 2 }), D.ground(20, 20, 300, 20, { side: -1 }),
  D.line(60, 20, 160, 78, { w: 1.8 }), D.line(260, 20, 160, 78, { w: 1.8 }),
  D.arrow(160, 78, 108, 48, { color: 'c', label: 'T_1', lx: -6, ly: -12 }), D.arrow(160, 78, 220, 43, { color: 'b', label: 'T_2', lx: 12, ly: -6 }),
  D.circle(160, 100, 14, { color: 'o', fill: 'soft' }), D.text(160, 101, '10 kg', { size: 9 }),
  D.arrow(160, 116, 160, 180, { color: 'r', label: 'W = 100 N', lx: 44, ly: 0, math: false }),
  D.angle(60, 20, 30, -30, 0, '30°', { lr: 14, size: 11 }), D.angle(260, 20, 30, 180, 210, '60°', { lr: 14, size: 11 })
], 'Lamp hung from two strings making 30 and 60 degrees with the ceiling');

var figFriction = D.plot({
  w: 380, h: 230, x: [0, 10], y: [0, 8.2], xlabel: 'applied force F', ylabel: 'friction f', mathLabels: false, noOrigin: false,
  fns: [{ f: function (x) { return x <= 6 ? x : 4.6; }, from: 0, to: 10 }],
  segs: [{ x1: 6, y1: 6, x2: 6, y2: 4.6, color: 'c', dash: '3 3', w: 1.4 }],
  pts: [{ x: 6, y: 6, label: 'limiting friction μ_sN', pos: 'w', size: 12, math: false }],
  texts: [{ x: 1.0, y: 3.4, s: 'static: f = F', color: 'c', size: 12, anchor: 'start' }, { x: 8.2, y: 5.1, s: 'kinetic μ_kN', color: 'o', size: 12 }],
  extra: function (X, Y) { return [D.line(X(6), Y(0), X(6), Y(7.6), { color: 'm', w: 1, dash: '2 3' }), D.text(X(3), Y(7.6), '← no motion', { size: 11, color: 'm' }), D.text(X(8), Y(7.6), 'sliding →', { size: 11, color: 'm' })]; },
  label: 'Friction versus applied force'
});

var figIncline = (function () {
  var t = 30 * Math.PI / 180, ox = 40, oy = 170, L = 300, top = [ox + L * Math.cos(t), oy - L * Math.sin(t)];
  var c = [ox + 170 * Math.cos(t) - 22 * Math.sin(t), oy - 170 * Math.sin(t) - 22 * Math.cos(t)];
  function rot(x, y) { return [c[0] + x * Math.cos(t) + y * Math.sin(t), c[1] - x * Math.sin(t) + y * Math.cos(t)]; }
  var corners = [rot(-26, -20), rot(26, -20), rot(26, 20), rot(-26, 20)];
  var nrm = [-Math.sin(t), -Math.cos(t)], dn = [-Math.cos(t), Math.sin(t)];
  return D.svg(380, 200, [
    D.poly([[ox, oy], [top[0], oy], [top[0], top[1]]], { closed: true, color: 'm', fill: 'soft', w: 1.4 }),
    D.poly(corners, { closed: true, color: 'c', fill: 'soft', w: 2 }),
    D.angle(ox, oy, 40, 0, 30, 'θ', { lr: 12 }),
    D.arrow(c[0], c[1], c[0] + 70 * nrm[0], c[1] + 70 * nrm[1], { color: 'b', label: 'N', lx: -10, ly: -4 }),
    D.arrow(c[0], c[1], c[0], c[1] + 80, { color: 'r', label: 'mg', lx: 16, ly: 6 }),
    D.arrow(c[0], c[1], c[0] - 62 * dn[0], c[1] - 62 * dn[1], { color: 'o', label: 'f', lx: 4, ly: -12 }),
    D.text(150, 190, 'friction acts up the slope when the block slides down', { size: 11, color: 'm' })
  ], 'Forces on a block on a rough inclined plane');
})();

var figRolling = D.svg(320, 150, [
  D.ground(10, 120, 310, 120),
  D.path('M110 120 A 50 50 0 1 1 190 120', { color: 'c', w: 2.2, fill: 'soft' }), D.line(110, 120, 190, 120, { color: 'c', w: 2.2 }),
  D.dot(150, 76, { r: 3 }), D.arrow(150, 76, 220, 76, { color: 'g', w: 1.8, head: 7, label: 'motion', ly: -10, math: false, size: 11 }),
  D.arrow(176, 128, 176, 84, { color: 'b', w: 1.8, head: 7 }), D.text(184, 140, 'push of ground acts slightly ahead', { size: 11, color: 'b', anchor: 'start' }),
  D.text(150, 140, 'flattened contact patch', { size: 11, color: 'm', anchor: 'end' })
], 'A rolling wheel and ground both deform slightly, causing rolling friction');

var figLevelRoad = D.row([
  [D.svg(200, 180, [
    D.circle(100, 95, 70, { color: 'm', dash: '5 4', w: 1.4 }), D.dot(100, 95, { r: 3 }), D.text(100, 110, 'centre', { size: 10, color: 'm' }),
    D.rect(158, 82, 24, 26, { color: 'c', fill: 'soft', w: 1.6, r: 4 }),
    D.arrow(170, 95, 115, 95, { color: 'o', label: 'friction', ly: -12, math: false, size: 11 }), D.arrow(170, 95, 170, 40, { color: 'g', label: 'v', lx: 12, ly: 0 })
  ], 'Top view of a car on a circular level road'), '(a) top view'],
  [D.svg(220, 180, [
    D.ground(10, 140, 210, 140), D.rect(70, 90, 80, 40, { color: 'c', fill: 'soft', w: 1.6, r: 6 }), D.circle(85, 133, 8, { fill: 'k' }), D.circle(135, 133, 8, { fill: 'k' }),
    D.arrow(110, 105, 110, 35, { color: 'b', label: 'N', lx: 12, ly: 0 }), D.arrow(120, 105, 120, 172, { color: 'r', label: 'mg', lx: 18, ly: 10 }),
    D.arrow(100, 140, 25, 140, { color: 'o' }), D.text(60, 158, 'friction f', { size: 11, color: 'o' })
  ], 'Front view of the forces'), '(b) front view (centre to the left)']
]);

var figConical = D.svg(240, 200, [
  D.line(60, 20, 180, 20, { w: 2 }), D.ground(60, 20, 180, 20, { side: -1 }),
  D.line(120, 20, 120, 150, { color: 'm', dash: true, w: 1 }), D.line(120, 20, 190, 140, { w: 1.8 }),
  D.ellipse(120, 140, 70, 16, { color: 'm', dash: '4 4', w: 1.2 }), D.circle(190, 140, 9, { color: 'c', fill: 'soft' }),
  D.angle(120, 20, 34, 270, 300, 'θ', { lr: 10 }), D.text(160, 74, 'L', { math: true, anchor: 'start' }),
  D.arrow(190, 140, 162, 92, { color: 'b', label: 'T', lx: -14, ly: 0 }), D.arrow(190, 140, 190, 190, { color: 'r', label: 'mg', lx: 18, ly: 0 }),
  D.text(150, 160, 'r', { math: true, color: 'm' })
], 'Conical pendulum');

var figBanked = (function () {
  var t = 20 * Math.PI / 180, cx = 160, cy = 100;
  var nrm = [-Math.sin(t), -Math.cos(t)];
  return D.svg(340, 200, [
    D.poly([[20, 170], [320, 170], [320, 170 - 300 * Math.tan(t)]], { closed: true, color: 'm', fill: 'soft', w: 1.4 }),
    D.angle(20, 170, 46, 0, 20, 'θ', { lr: 12 }),
    D.rect(cx - 30, cy - 20, 60, 34, { color: 'c', fill: 'soft', w: 1.6, r: 5 }).replace('<rect', '<rect transform="rotate(-20 ' + cx + ' ' + cy + ')"'),
    D.arrow(cx, cy, cx + 85 * nrm[0], cy + 85 * nrm[1], { color: 'b', label: 'N', lx: -12, ly: 0 }),
    D.arrow(cx, cy, cx, cy + 70, { color: 'r', label: 'mg', lx: 16, ly: 4 }),
    D.line(cx, cy, cx, cy + 85 * nrm[1], { color: 'm', dash: '3 3', w: 1.2 }), D.line(cx, cy + 85 * nrm[1], cx + 85 * nrm[0], cy + 85 * nrm[1], { color: 'm', dash: '3 3', w: 1.2 }),
    D.text(cx + 6, cy - 50, 'N cos θ', { size: 11, color: 'm', anchor: 'start' }), D.text(cx + 85 * nrm[0] / 2, cy + 85 * nrm[1] - 10, 'N sin θ', { size: 11, color: 'm' }),
    D.arrow(70, 188, 20, 188, { color: 'g', w: 1.6, head: 7 }), D.text(76, 188, 'to the centre of the turn', { size: 11, color: 'g', anchor: 'start' })
  ], 'Forces on a car on a banked road');
})();

// ---------- chapter text ----------
JEE.book('physics', 'laws-of-motion', {
  intro: [
    R`In Kinematics we described motion. Now we ask <b>why</b> things move the way they do. Why does a ball rolling on grass stop? Why do you lurch forward when a bus brakes? How does a rocket move in empty space? Isaac Newton answered all these questions with three short laws, published in 1687.`,
    R`This chapter explains force, inertia and momentum, Newton's three laws, impulse, conservation of momentum, friction, and circular motion on level and banked roads. Learning to draw a correct <b>free-body diagram</b> is the single most useful skill here; it is the key to almost every mechanics problem in JEE.`
  ],
  sections: [
    { h: R`What is a force?`, t: [0], blocks: [
      R`A <b>force</b> is a push or a pull that can change the state of motion of a body: start it moving, stop it, speed it up, slow it down or change its direction. It can also change the shape of a body (squeezing a sponge). Force is a vector, measured in newtons (N).`,
      R`Some forces need contact (a push, friction, tension in a rope, the normal force from a floor). Others act at a distance through a field (gravity, electric and magnetic forces). At the deepest level, nature has four fundamental forces: gravitational, electromagnetic, strong nuclear and weak nuclear. All everyday contact forces are electromagnetic forces between atoms.`,
      R`When several forces act on a body, what matters is their vector sum, the <b>net (resultant) force</b>. If the forces balance (net force zero), the body behaves as if no force acted at all.`,
      { check: { q: R`A book rests on a table. Is any force acting on it?`, ans: R`Yes: gravity pulls it down and the table pushes it up. They balance, so the net force is zero.` } }
    ] },

    { h: R`Aristotle, Galileo and the idea of inertia`, t: [0], blocks: [
      R`The Greek thinker Aristotle believed that a force is needed to <b>keep</b> a body moving: stop pushing a cart and it stops. This seems right in daily life, but it is wrong. The cart stops because of an <b>opposing force</b>, friction, not because the push has ended.`,
      R`Galileo found the truth with inclined planes. A ball rolling down one slope rises up an opposite slope to nearly the <b>same height</b>. If the second slope is made gentler, the ball rolls farther to reach that height. If the second surface is flat, the ball should roll forever.`,
      { fig: figGalileo, cap: R`Galileo's thought experiment. The ball always tries to reach its starting height. On a flat surface without friction, it would never stop.` },
      R`So <b>no force is needed to keep a body moving at constant velocity</b>; a force is needed only to change its velocity. The tendency of a body to resist a change in its state of rest or of uniform motion is called <b>inertia</b>. Mass is the measure of inertia: a loaded truck is much harder to start or stop than a bicycle.`,
      { analogy: R`When a bus starts suddenly, your feet move with the bus but your upper body tends to stay where it was, so you fall backward. When the bus brakes, your body tends to keep moving forward. That is inertia.` },
      { check: { q: R`Why do we shake a branch to make mangoes fall?`, ans: R`The branch is moved suddenly, but the mangoes tend to stay at rest because of inertia, so they break off.` } }
    ] },

    { h: R`Newton's first law of motion`, t: [0], blocks: [
      R`<b>First law:</b> every body continues in its state of rest or of uniform motion in a straight line unless an external net force acts on it.`,
      R`So if the net force on a body is zero, its acceleration is zero: it either stays at rest or keeps moving with constant velocity. The first law defines what a force does (it changes motion) and it holds in <b>inertial frames of reference</b>, which we discuss later.`,
      { points: [R`Zero net force ⇔ zero acceleration (not necessarily zero velocity).`, R`A spacecraft far from all stars keeps moving at constant velocity with its engines off.`, R`Seat belts protect passengers because their bodies keep moving forward when a car stops suddenly.`] },
      { mistake: R`Thinking that a moving body must have a force acting in the direction of motion. A hockey puck sliding on ice at constant velocity has zero net force on it.` },
      { check: { q: R`A car moves at a steady 60 km/h on a straight road. What is the net force on it?`, ans: R`Zero. The engine's driving force is balanced by friction and air resistance.` } }
    ] },

    { h: R`Momentum and Newton's second law`, t: [1], blocks: [
      R`<b>Linear momentum</b> is mass times velocity: \(\vec p = m\vec v\). It is a vector with SI unit kg m s⁻¹. A slow truck and a fast bullet can both be dangerous because both have a large momentum.`,
      R`<b>Second law:</b> the rate of change of momentum of a body is equal to the net external force on it, and takes place in the direction of the force: \[\vec F = \frac{d\vec p}{dt}\]`,
      { derive: R`From F = dp/dt to F = ma`, steps: [
        R`For a body whose mass does not change, \(\dfrac{d\vec p}{dt} = \dfrac{d(m\vec v)}{dt} = m\dfrac{d\vec v}{dt}\).`,
        R`Since \(\dfrac{d\vec v}{dt} = \vec a\), we get \(\vec F = m\vec a\).`,
        R`In components: \(F_x = ma_x\), \(F_y = ma_y\), \(F_z = ma_z\). A force changes only the velocity component along its own direction.`
      ] },
      R`The unit of force, the <b>newton</b>, is the force that gives a mass of 1 kg an acceleration of 1 m s⁻². 1 N = 1 kg m s⁻² = 10⁵ dyne (CGS unit).`,
      { points: [R`The force in \(\vec F = m\vec a\) is the <b>net external</b> force; internal forces between parts of a system cancel.`, R`The acceleration at an instant depends on the force at that instant, not on the past motion.`, R`If F = 0, then a = 0: the first law is a special case of the second.`] },
      { ex: { q: R`A net force of 20 N acts on a 5 kg box. Find its acceleration. How long does it take to reach 12 m/s from rest?`,
        steps: [R`\(a = F/m = 20/5 = 4\) m/s².`, R`\(t = v/a = 12/4\).`], ans: R`4 m/s²; 3 s` } },
      { ex: { q: R`A 1000 kg car moving at 20 m/s is brought to rest in 5 s by its brakes. Find the braking force.`,
        steps: [R`Change in momentum = 1000 × (0 − 20) = −2 × 10⁴ kg m/s.`, R`\(F = \Delta p/\Delta t = -2\times10^4/5\).`], ans: R`4000 N, opposite to the motion` } },
      { check: { q: R`What is the momentum of a 0.2 kg ball moving at 15 m/s?`, ans: R`3 kg m/s.` } }
    ] },

    { h: R`Impulse`, t: [2], blocks: [
      R`Some forces act for a very short time: a bat hitting a ball, a hammer striking a nail. Such <b>impulsive forces</b> are large and change quickly, so it is easier to talk about their total effect. The <b>impulse</b> of a force is force × time (more precisely, the area under the force–time graph): \[\vec J = \int\vec F\,dt = \Delta\vec p\]`,
      R`This follows directly from \(\vec F = d\vec p/dt\): integrating over the time of contact gives the change in momentum. Its unit is N s, the same as kg m s⁻¹.`,
      { fig: figImpulse, cap: R`The force on a ball during a short impact rises and falls. The shaded area is the impulse, equal to the change in the ball's momentum. The average force × contact time gives the same area.` },
      { ex: { q: R`A 0.15 kg cricket ball moving at 20 m/s is hit straight back at 30 m/s. The bat touches it for 0.01 s. Find the impulse and the average force.`,
        steps: [R`Take the final direction as positive: \(\Delta p = 0.15\times30 - 0.15\times(-20) = 7.5\) N s.`, R`\(F_{av} = \Delta p/\Delta t = 7.5/0.01\).`], ans: R`7.5 N s; 750 N` } },
      R`For a given change in momentum, a longer contact time means a smaller force. That is why cricketers pull their hands back while catching, cars have crumple zones and airbags, and we land on bent knees after a jump.`,
      { ex: { q: R`A fielder catches the same ball moving at 20 m/s. Find the average force if the ball is stopped in (a) 0.01 s (b) 0.1 s.`,
        steps: [R`\(\Delta p = 0.15\times20 = 3\) N s.`, R`(a) 3/0.01 = 300 N; (b) 3/0.1 = 30 N.`], ans: R`Pulling the hands back reduces the force ten times` } },
      { check: { q: R`What does the area under a force–time graph represent?`, ans: R`The impulse, which equals the change in momentum.` } }
    ] },

    { h: R`Newton's third law`, t: [1], blocks: [
      R`<b>Third law:</b> to every action there is an equal and opposite reaction. If body A exerts a force \(\vec F_{AB}\) on body B, then B exerts a force \(\vec F_{BA} = -\vec F_{AB}\) on A.`,
      { points: [R`Action and reaction act on <b>different bodies</b>, so they never cancel each other.`, R`They act at the same instant; neither comes "first".`, R`They are forces of the same kind (both gravitational, both contact forces, and so on).`] },
      { fig: figPairs, cap: R`A book on a table. The book's weight W (Earth pulls book) and the normal force N (table pushes book) both act on the book; they balance, but they are <b>not</b> an action–reaction pair. The partner of N is N′, the book pushing down on the table; the partner of W is the book pulling the Earth up.` },
      { analogy: R`When you jump off a boat onto the shore, you push the boat backward and the boat pushes you forward. The boat moves away, which is why jumping off a small boat is tricky.` },
      { mistake: R`The "horse and cart paradox": if the cart pulls back on the horse as hard as the horse pulls the cart, how can they move? Because the horse moves forward by pushing <b>backward on the ground</b>; the ground's forward push on the horse is larger than the cart's pull. Always look at the forces on one body at a time.` },
      { check: { q: R`The Earth pulls an apple down with 1 N. With what force does the apple pull the Earth?`, ans: R`1 N upward, acting on the Earth. The Earth's acceleration is tiny because its mass is huge.` } }
    ] },

    { h: R`Common forces and free-body diagrams`, t: [1], blocks: [
      R`To use \(\vec F = m\vec a\), first identify every force on the body. The main ones in mechanics are:`,
      { points: [R`<b>Weight</b> \(mg\): the gravitational pull of the Earth, acting downward at the centre of gravity.`, R`<b>Normal force</b> N: the push of a surface, perpendicular to it. It adjusts itself to stop the body from passing through the surface.`, R`<b>Tension</b> T: the pull of a string or rope, along it, away from the body. For a light (massless) string, tension is the same throughout.`, R`<b>Spring force</b> \(F = -kx\): the push or pull of a spring stretched or compressed by x.`, R`<b>Friction</b> f: the force of a rough surface along the surface, opposing relative sliding.`] },
      R`A <b>free-body diagram</b> (FBD) shows one body as a dot or box, with arrows for all forces acting <b>on it</b> (not forces it exerts on others).`,
      { fig: figFBD, cap: R`(a) A block pulled along a rough floor by a rope at angle θ. (b) Its free-body diagram: tension T along the rope, normal force N, weight mg and friction f.` },
      R`For the block in the figure: vertically, \(N + T\sin\theta = mg\); horizontally, \(T\cos\theta - f = ma\). Notice that pulling at an angle <b>reduces</b> N.`,
      { tip: R`Steps for every problem: (1) choose the body, (2) draw its FBD, (3) choose axes (one along the acceleration), (4) write \(\sum F_x = ma_x\) and \(\sum F_y = ma_y\), (5) solve. For connected bodies, repeat for each body and use the constraint (for example, "the string does not stretch, so both have the same acceleration").` },
      { check: { q: R`A 5 kg block rests on the floor while you pull up on it with 20 N. What is the normal force? (g = 10 m/s²)`, ans: R`N = 50 − 20 = 30 N.` } }
    ] },

    { h: R`Connected bodies: contact forces, strings and pulleys`, t: [1], blocks: [
      { fig: figTwoBlocks, cap: R`A 10 N force pushes a 2 kg block, which pushes a 3 kg block, on a smooth floor.` },
      { ex: { q: R`For the blocks in the figure (smooth floor), find the acceleration and the contact force between the blocks.`,
        steps: [R`Treat both blocks as one system: \(a = \dfrac{F}{m_1 + m_2} = \dfrac{10}{5} = 2\) m/s².`, R`The only horizontal force on the 3 kg block is the contact force: \(N = 3\times2\).`], ans: R`2 m/s²; 6 N` } },
      { fig: figAtwood, cap: R`An Atwood machine: two masses hang from a light string over a smooth, light pulley. The heavier side goes down.` },
      { derive: R`Acceleration and tension in an Atwood machine`, steps: [
        R`Let \(m_1 > m_2\). The string has one tension T and both masses have the same size of acceleration a.`,
        R`For \(m_1\) (moving down): \(m_1g - T = m_1a\). For \(m_2\) (moving up): \(T - m_2g = m_2a\).`,
        R`Adding: \(a = \dfrac{(m_1 - m_2)g}{m_1 + m_2}\). Substituting back: \(T = \dfrac{2m_1m_2g}{m_1 + m_2}\).`
      ] },
      { ex: { q: R`In the Atwood machine of the figure (3 kg and 2 kg, g = 10 m/s²), find the acceleration and the tension.`,
        steps: [R`\(a = \dfrac{(3 - 2)\times10}{5} = 2\) m/s².`, R`\(T = \dfrac{2\times3\times2\times10}{5} = 24\) N.`], ans: R`2 m/s²; 24 N` } },
      { mistake: R`Using the total weight as the tension. The tension lies between the two weights: here 20 N < 24 N < 30 N.` },
      { check: { q: R`If both masses in an Atwood machine are equal, what is the acceleration?`, ans: R`Zero: the system stays at rest or moves at constant speed.` } }
    ] },

    { h: R`Inertial and non-inertial frames`, t: [1], blocks: [
      R`Newton's laws hold only in <b>inertial frames</b>: frames that are not accelerating (at rest or moving with constant velocity). The ground is nearly an inertial frame for everyday problems.`,
      R`An <b>accelerating frame</b> (a lift speeding up, a car braking, a merry-go-round) is <b>non-inertial</b>. In it, objects seem to be pushed by forces that nothing exerts. To use Newton's laws there, we add a <b>pseudo (fictitious) force</b> on each body: \[\vec F_{pseudo} = -m\vec a_0\] where \(\vec a_0\) is the acceleration of the frame. It acts opposite to the frame's acceleration.`,
      { h3: R`Apparent weight in a lift` },
      { fig: figLift, cap: R`A person on a weighing scale in a lift accelerating upward. The scale reads the normal force N, which is the person's apparent weight.` },
      R`For a person of mass m in a lift with upward acceleration a: \(N - mg = ma\), so \(N = m(g + a)\): they feel heavier. If the lift accelerates downward, \(N = m(g - a)\): they feel lighter. In free fall (\(a = g\)), \(N = 0\): they feel weightless.`,
      { ex: { q: R`A 60 kg man stands on a scale in a lift. What does the scale read when the lift (a) accelerates up at 2 m/s² (b) accelerates down at 2 m/s² (c) falls freely? (g = 10 m/s²)`,
        steps: [R`(a) \(N = 60(10 + 2) = 720\) N. (b) \(N = 60(10 - 2) = 480\) N.`, R`(c) \(a = g\), so N = 0.`], ans: R`720 N, 480 N, 0` } },
      { fig: figPseudo, cap: R`A bob hanging inside a car that accelerates forward tilts backward. In the car's frame, a pseudo force \(ma\) acts backward on it.` },
      { adv: [R`<b>Using a pseudo force.</b> In the car's frame, the bob is in equilibrium under tension T, weight mg and pseudo force ma (backward). So \(T\sin\theta = ma\) and \(T\cos\theta = mg\), giving \(\tan\theta = a/g\).`,
        R`For a = 5 m/s² and g = 10 m/s², θ = 26.6°. Problems with wedges, blocks inside accelerating lifts and rotating frames (where the pseudo force is the outward centrifugal force \(m\omega^2r\)) are solved the same way.`] },
      { check: { q: R`Is the centrifugal force a real force?`, ans: R`No. It is a pseudo force that appears only in a rotating (non-inertial) frame.` } }
    ] },

    { h: R`Conservation of linear momentum`, t: [3], blocks: [
      R`<b>Law of conservation of linear momentum:</b> if no net external force acts on a system, its total linear momentum stays constant.`,
      { derive: R`Proof from Newton's second and third laws`, steps: [
        R`Consider two bodies A and B interacting (colliding, pushing apart) with no external force. A exerts \(\vec F_{AB}\) on B and B exerts \(\vec F_{BA}\) on A during a time Δt.`,
        R`Change in momentum of A: \(\Delta\vec p_A = \vec F_{BA}\Delta t\); of B: \(\Delta\vec p_B = \vec F_{AB}\Delta t\).`,
        R`By the third law \(\vec F_{BA} = -\vec F_{AB}\), so \(\Delta\vec p_A + \Delta\vec p_B = 0\): the total momentum does not change.`
      ] },
      { fig: figRecoil, cap: R`Before firing, the gun and bullet are at rest (total momentum zero). After firing, the bullet's forward momentum is balanced by the gun's backward momentum.` },
      { ex: { q: R`A 4 kg gun fires a 50 g bullet at 400 m/s. Find the recoil velocity of the gun.`,
        steps: [R`Initial momentum = 0, so \(Mv_g + mv_b = 0\).`, R`\(v_g = -\dfrac{0.05\times400}{4}\).`], ans: R`5 m/s backward` } },
      { ex: { q: R`A 3 kg shell at rest explodes into two pieces. A 1 kg piece flies east at 30 m/s. Find the velocity of the other piece.`,
        steps: [R`\(0 = 1\times30 + 2\times v\), so v = −15 m/s.`], ans: R`15 m/s towards the west` } },
      { tip: R`Momentum is conserved during collisions and explosions even if external forces such as gravity act, because the impulsive internal forces are much larger and the time is very short.` },
      { check: { q: R`A man standing on frictionless ice throws a ball forward. What happens to him?`, ans: R`He moves backward, so that the total momentum stays zero.` } }
    ] },

    { h: R`Rocket propulsion`, t: [3], blocks: [
      R`A rocket works by throwing mass (hot exhaust gas) backward at high speed. By conservation of momentum, the rocket gains forward momentum. It needs no air to push against, which is why rockets work in space.`,
      R`If gas leaves at a rate \(\left|\dfrac{dm}{dt}\right|\) with speed u relative to the rocket, the forward <b>thrust</b> on the rocket is \[F = u\left|\frac{dm}{dt}\right|\] and the rocket's acceleration is \(a = \dfrac{F}{m} - g\) when it rises vertically against gravity.`,
      { ex: { q: R`A rocket ejects gas at 50 kg/s with an exhaust speed of 2000 m/s. Find the thrust. If its mass is 5000 kg, what is its initial upward acceleration? (g = 10 m/s²)`,
        steps: [R`\(F = 2000\times50 = 10^5\) N.`, R`\(a = \dfrac{10^5}{5000} - 10 = 20 - 10\).`], ans: R`10⁵ N; 10 m/s²` } },
      { check: { q: R`Why does a rocket's acceleration increase as it burns fuel (constant thrust)?`, ans: R`Its mass decreases, so the same thrust gives a larger acceleration.` } }
    ] },

    { h: R`Equilibrium of concurrent forces; Lami's theorem`, t: [4], blocks: [
      R`Forces whose lines of action pass through one point are <b>concurrent</b>. A particle is in <b>equilibrium</b> (at rest or moving uniformly) when the net force on it is zero: \(\sum\vec F = 0\), that is \(\sum F_x = 0\) and \(\sum F_y = 0\).`,
      R`For three concurrent forces in equilibrium, the forces form a closed triangle when drawn head to tail, and <b>Lami's theorem</b> holds: each force is proportional to the sine of the angle between the other two: \[\frac{F_1}{\sin\alpha} = \frac{F_2}{\sin\beta} = \frac{F_3}{\sin\gamma}\]`,
      { fig: figLami, cap: R`A 10 kg lamp hangs from two strings making 30° and 60° with the ceiling. The junction is in equilibrium under T₁, T₂ and the weight.` },
      { ex: { q: R`Find the tensions in the two strings of the figure (g = 10 m/s²).`,
        steps: [R`Horizontal: \(T_1\cos30^\circ = T_2\cos60^\circ\), so \(T_2 = \sqrt3\,T_1\).`, R`Vertical: \(T_1\sin30^\circ + T_2\sin60^\circ = 100\), so \(\tfrac12T_1 + \tfrac32T_1 = 100\).`, R`\(T_1 = 50\) N, \(T_2 = 50\sqrt3\) N.`], ans: R`50 N and ≈ 86.6 N (the steeper string carries more)` } },
      { check: { q: R`Three equal forces act at a point and are in equilibrium. What is the angle between each pair?`, ans: R`120°.` } }
    ] },

    { h: R`Friction: static and kinetic`, t: [5], blocks: [
      R`<b>Friction</b> is the force that opposes relative sliding between two surfaces in contact. It arises because even smooth-looking surfaces have tiny bumps that interlock and stick together.`,
      { fig: figFriction, cap: R`As you push harder, static friction grows to match your push, so nothing moves, until it reaches its limit \(\mu_sN\). Then the block starts sliding, and the friction drops to a nearly constant kinetic value \(\mu_kN\).` },
      { points: [R`<b>Static friction</b> acts when there is no sliding. It is self-adjusting: \(f_s \le \mu_sN\). The maximum value \(\mu_sN\) is called <b>limiting friction</b>.`, R`<b>Kinetic (sliding) friction</b> acts during sliding: \(f_k = \mu_kN\), and usually \(\mu_k < \mu_s\).`] },
      { h3: R`Laws of friction` },
      { points: [R`Limiting friction is proportional to the normal force: \(f = \mu N\).`, R`It does not depend on the area of contact (for the same N).`, R`It depends on the nature of the two surfaces (μ is a property of the pair).`, R`Kinetic friction is nearly independent of speed (for ordinary speeds).`] },
      { ex: { q: R`A 10 kg block rests on a floor with \(\mu_s = 0.5\) and \(\mu_k = 0.4\). Find the friction force and acceleration when it is pushed horizontally with (a) 40 N (b) 60 N. (g = 10 m/s²)`,
        steps: [R`N = 100 N, so limiting friction = 50 N and kinetic friction = 40 N.`, R`(a) 40 N < 50 N: no sliding; static friction = 40 N, a = 0.`, R`(b) 60 N > 50 N: it slides; a = (60 − 40)/10 = 2 m/s².`], ans: R`(a) 40 N, at rest (b) 40 N, 2 m/s²` } },
      { adv: [R`<b>Block on a block.</b> A 2 kg block sits on a 4 kg block on a smooth floor; \(\mu_s = 0.3\) between them. What is the largest horizontal force on the lower block for which they move together?`,
        R`The top block is pushed only by friction, so its largest acceleration is \(\mu_sg = 3\) m/s². Both move together with this acceleration when \(F = (2 + 4)\times3 = 18\) N. A larger force makes the lower block slide out from under the top one.`] },
      { mistake: R`Writing friction = μN even when the body is not sliding. Static friction is only as large as needed to prevent sliding, up to a maximum of \(\mu_sN\).` },
      { check: { q: R`Why is it easier to keep a heavy box sliding than to start it moving?`, ans: R`Because \(\mu_k < \mu_s\): kinetic friction is smaller than limiting static friction.` } }
    ] },

    { h: R`Friction on an inclined plane; angle of repose`, t: [5], blocks: [
      { fig: figIncline, cap: R`A block on a rough incline. Its weight mg splits into \(mg\sin\theta\) down the slope and \(mg\cos\theta\) into the slope. The normal force is \(N = mg\cos\theta\).` },
      R`Along the slope, the block tends to slide down with force \(mg\sin\theta\); friction acts up the slope up to \(\mu_sN = \mu_smg\cos\theta\). The block just begins to slide when \(mg\sin\theta = \mu_smg\cos\theta\), that is, at the angle θ for which \[\tan\theta = \mu_s\] This angle is the <b>angle of repose</b>. The <b>angle of friction</b> λ (between the resultant of N and limiting friction and the normal) also satisfies \(\tan\lambda = \mu_s\).`,
      R`Once sliding, the acceleration down the slope is \(a = g(\sin\theta - \mu_k\cos\theta)\). To push a block <b>up</b> the slope at constant speed you need \(F = mg(\sin\theta + \mu_k\cos\theta)\).`,
      { ex: { q: R`A block slides down a 30° incline with \(\mu_k = 0.2\). Find its acceleration. (g = 10 m/s²)`,
        steps: [R`\(a = 10(\sin30^\circ - 0.2\cos30^\circ) = 10(0.5 - 0.173)\).`], ans: R`≈ 3.27 m/s²` } },
      { ex: { q: R`A coin just begins to slide on a book when the book is tilted to 30°. Find \(\mu_s\).`,
        steps: [R`At the angle of repose, \(\mu_s = \tan30^\circ\).`], ans: R`≈ 0.577` } },
      { check: { q: R`A block rests on an incline with \(\mu_s = 0.5\) tilted at 20°. What is the friction force on a 2 kg block? (g = 10 m/s²)`, ans: R`tan 20° = 0.36 < 0.5, so it stays at rest; static friction = mg sin 20° ≈ 6.8 N.` } }
    ] },

    { h: R`Rolling friction`, t: [6], blocks: [
      R`When a wheel or ball rolls, it does not slide, so there is no sliding friction. But rolling is not perfectly free: both the wheel and the ground get slightly squashed at the contact. The ground pushes back a little ahead of the centre, which opposes rolling. This is <b>rolling friction</b>.`,
      { fig: figRolling, cap: R`A rolling wheel and the ground both deform slightly, causing rolling friction.` },
      R`Rolling friction is usually much smaller than sliding friction (its coefficient is often 0.001–0.01, compared with 0.3–0.8 for sliding). That is why the invention of the wheel was so important.`,
      { h3: R`Ways of reducing friction` },
      { points: [R`Using wheels, ball bearings and roller bearings (replacing sliding with rolling).`, R`Lubricating surfaces with oil or grease.`, R`Polishing surfaces; streamlining vehicles to reduce air drag.`, R`Using an air cushion (hovercraft, air-track).`] },
      { note: R`Friction is not only a nuisance. Without it we could not walk, cars could not grip the road, nails would slip out and knots would untie. Tyres have treads to increase friction on wet roads.`, title: 'Friction is also useful' },
      { check: { q: R`Why are ball bearings used in machines?`, ans: R`They replace sliding friction with much smaller rolling friction.` } }
    ] },

    { h: R`Dynamics of uniform circular motion`, t: [7], blocks: [
      R`In Kinematics we saw that a body in uniform circular motion has an acceleration \(v^2/r\) towards the centre. By Newton's second law there must be a net force towards the centre, called the <b>centripetal force</b>: \[F_c = \frac{mv^2}{r} = m\omega^2r\] It is not a new kind of force: it is provided by tension, gravity, friction, a normal force, or a combination.`,
      { h3: R`A car on a level circular road` },
      { fig: figLevelRoad, cap: R`On a level road, the only horizontal force on a turning car is friction from the road, which points towards the centre of the turn.` },
      R`The friction needed is \(mv^2/r\), and it cannot exceed \(\mu_sN = \mu_smg\). So the car can take the turn safely only if \(\dfrac{mv^2}{r} \le \mu_smg\): \[v_{max} = \sqrt{\mu_srg}\]`,
      { ex: { q: R`Find the maximum safe speed on a level curve of radius 50 m if \(\mu_s = 0.5\). (g = 10 m/s²)`,
        steps: [R`\(v_{max} = \sqrt{0.5\times50\times10} = \sqrt{250}\).`], ans: R`≈ 15.8 m/s ≈ 57 km/h` } },
      { h3: R`Conical pendulum` },
      { fig: figConical, cap: R`A conical pendulum: the bob moves in a horizontal circle of radius r while the string sweeps out a cone.` },
      R`Vertically, \(T\cos\theta = mg\). Horizontally, \(T\sin\theta = \dfrac{mv^2}{r}\). Dividing: \(\tan\theta = \dfrac{v^2}{rg}\). With \(r = L\sin\theta\), the time for one revolution is \[T_p = 2\pi\sqrt{\frac{L\cos\theta}{g}}\]`,
      { ex: { q: R`A conical pendulum of length 1 m makes an angle of 60° with the vertical. Find its period. (g = 10 m/s²)`,
        steps: [R`\(T_p = 2\pi\sqrt{\dfrac{1\times0.5}{10}} = 2\pi\times0.224\).`], ans: R`≈ 1.41 s` } },
      { mistake: R`Adding "centripetal force" as an extra arrow in a free-body diagram. It is the <b>net</b> of the real forces towards the centre, not another force.` },
      { check: { q: R`What provides the centripetal force for the Moon going round the Earth?`, ans: R`The Earth's gravitational pull.` } }
    ] },

    { h: R`Banking of roads`, t: [8], blocks: [
      R`Relying on friction alone to turn is risky, especially on wet roads. So roads at curves are <b>banked</b>: the outer edge is raised, tilting the road by an angle θ. Then part of the normal force points towards the centre and helps provide the centripetal force.`,
      { fig: figBanked, cap: R`On a banked road the normal force tilts towards the centre of the turn. Its horizontal part, \(N\sin\theta\), provides the centripetal force; its vertical part, \(N\cos\theta\), balances the weight.` },
      { derive: R`Optimum, maximum and minimum speeds on a banked road`, steps: [
        R`<b>Without friction:</b> \(N\cos\theta = mg\) and \(N\sin\theta = \dfrac{mv^2}{r}\). Dividing, \(\tan\theta = \dfrac{v^2}{rg}\), so the ideal (optimum) speed is \(v_0 = \sqrt{rg\tan\theta}\). At this speed no friction is needed.`,
        R`<b>Faster than \(v_0\):</b> the car tends to slide outward, so friction acts down the slope. Vertically: \(N\cos\theta = mg + f\sin\theta\); horizontally: \(N\sin\theta + f\cos\theta = \dfrac{mv^2}{r}\). With \(f = \mu N\): \(v_{max} = \sqrt{rg\dfrac{\mu + \tan\theta}{1 - \mu\tan\theta}}\).`,
        R`<b>Slower than \(v_0\):</b> the car tends to slide inward, friction acts up the slope, and \(v_{min} = \sqrt{rg\dfrac{\tan\theta - \mu}{1 + \mu\tan\theta}}\).`
      ] },
      { ex: { q: R`A curve of radius 100 m is designed for 20 m/s. (a) Find the angle of banking. (b) If \(\mu = 0.2\), find the maximum and minimum safe speeds. (g = 10 m/s²)`,
        steps: [R`(a) \(\tan\theta = \dfrac{v^2}{rg} = \dfrac{400}{1000} = 0.4\), so θ ≈ 21.8°.`, R`(b) \(v_{max} = \sqrt{1000\times\dfrac{0.2 + 0.4}{1 - 0.08}} = \sqrt{652}\) ≈ 25.5 m/s.`, R`\(v_{min} = \sqrt{1000\times\dfrac{0.4 - 0.2}{1 + 0.08}} = \sqrt{185}\) ≈ 13.6 m/s.`], ans: R`21.8°; between about 13.6 m/s and 25.5 m/s` } },
      { tip: R`The same formulas apply to a cyclist leaning into a turn: the lean angle satisfies \(\tan\theta = v^2/(rg)\). Railway tracks are banked by raising the outer rail (cant) for the same reason.` },
      { check: { q: R`At the optimum speed of a banked road, how much friction is needed?`, ans: R`None: the horizontal part of the normal force alone provides the centripetal force.` } }
    ] }
  ],
  summary: [
    R`Force changes the state of motion; inertia resists change, and mass measures inertia.`,
    R`First law: zero net force ⇒ constant velocity (in inertial frames).`,
    R`Second law: \(\vec F = d\vec p/dt\); for constant mass \(\vec F = m\vec a\). 1 N = 1 kg m s⁻².`,
    R`Impulse \(\vec J = \int\vec F\,dt = \Delta\vec p\); a longer contact time means a smaller force.`,
    R`Third law: action and reaction are equal, opposite, act on different bodies and never cancel.`,
    R`Draw a free-body diagram for each body; use \(\sum F_x = ma_x\), \(\sum F_y = ma_y\) and constraints. Atwood: \(a = \frac{(m_1 - m_2)g}{m_1 + m_2}\), \(T = \frac{2m_1m_2g}{m_1 + m_2}\).`,
    R`Lift: apparent weight \(m(g \pm a)\); free fall gives weightlessness. In an accelerating frame add a pseudo force \(-m\vec a_0\).`,
    R`No external force ⇒ total momentum conserved (recoil, explosions). Rocket thrust \(= u\,|dm/dt|\).`,
    R`Concurrent forces in equilibrium: \(\sum\vec F = 0\); Lami: \(F_1/\sin\alpha = F_2/\sin\beta = F_3/\sin\gamma\).`,
    R`Static friction \(f_s \le \mu_sN\), kinetic \(f_k = \mu_kN\), \(\mu_k < \mu_s\); angle of repose \(\tan\theta = \mu_s\); down an incline \(a = g(\sin\theta - \mu_k\cos\theta)\).`,
    R`Rolling friction is much smaller than sliding friction; bearings and lubricants reduce friction.`,
    R`Centripetal force \(mv^2/r\) is provided by real forces. Level road: \(v_{max} = \sqrt{\mu rg}\). Conical pendulum: \(\tan\theta = v^2/rg\), \(T = 2\pi\sqrt{L\cos\theta/g}\).`,
    R`Banked road: \(v_0 = \sqrt{rg\tan\theta}\); \(v_{max} = \sqrt{rg\frac{\mu + \tan\theta}{1 - \mu\tan\theta}}\), \(v_{min} = \sqrt{rg\frac{\tan\theta - \mu}{1 + \mu\tan\theta}}\).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §5.2 Newton's First Law`, url: 'https://openstax.org/books/university-physics-volume-1/pages/5-2-newtons-first-law' },
    { t: R`OpenStax University Physics Vol. 1, §5.3 Newton's Second Law`, url: 'https://openstax.org/books/university-physics-volume-1/pages/5-3-newtons-second-law' },
    { t: R`OpenStax University Physics Vol. 1, §5.5 Newton's Third Law`, url: 'https://openstax.org/books/university-physics-volume-1/pages/5-5-newtons-third-law' },
    { t: R`OpenStax University Physics Vol. 1, §5.7 Drawing Free-Body Diagrams`, url: 'https://openstax.org/books/university-physics-volume-1/pages/5-7-drawing-free-body-diagrams' },
    { t: R`OpenStax University Physics Vol. 1, §6.2 Friction`, url: 'https://openstax.org/books/university-physics-volume-1/pages/6-2-friction' },
    { t: R`OpenStax University Physics Vol. 1, §6.3 Centripetal Force`, url: 'https://openstax.org/books/university-physics-volume-1/pages/6-3-centripetal-force' },
    { t: R`OpenStax University Physics Vol. 1, §9.2 Impulse and Collisions`, url: 'https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions' },
    { t: R`OpenStax University Physics Vol. 1, §9.7 Rocket Propulsion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/9-7-rocket-propulsion' },
    { t: R`Wikipedia: Fictitious (pseudo) force`, url: 'https://en.wikipedia.org/wiki/Fictitious_force' },
    { t: R`Wikipedia: Banked turn`, url: 'https://en.wikipedia.org/wiki/Banked_turn' },
    { t: R`Wikipedia: Rolling resistance`, url: 'https://en.wikipedia.org/wiki/Rolling_resistance' }
  ]
});
})();
