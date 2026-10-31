// Lesson: Rotational Motion.
var R = String.raw;
JEE.lesson('physics', 'rotational-motion', {
  theory: [
    { h: R`Centre of mass: the "balance point"`,
      body: [
        R`A <b>rigid body</b> is an object whose shape does not change, like a wheel or a bat. To study it, we first find its <b>centre of mass (COM)</b>: the single point that moves as if all the mass were there and all the forces acted there.`,
        R`For particles: \(x_{cm} = \dfrac{m_1x_1 + m_2x_2 + \dots}{m_1 + m_2 + \dots}\) (and the same for y and z). For a symmetric uniform body, the COM is at its geometric centre.`,
        R`The COM need not be on the body: for a ring it is the empty centre.`
      ],
      analogy: R`Balance a ruler on one finger. The point where it balances is its centre of mass. A cricket bat balances closer to the heavy end, because that is where most of its mass is.`,
      points: [R`If no external force acts, the COM keeps moving with constant velocity, even if the body explodes.`, R`The COM of two masses lies closer to the heavier one.`] },

    { h: R`Describing rotation`,
      body: [
        R`For rotation we use angle-based versions of motion words: <b>angular displacement</b> \(\theta\) (radians), <b>angular velocity</b> \(\omega = \dfrac{d\theta}{dt}\) (rad/s) and <b>angular acceleration</b> \(\alpha = \dfrac{d\omega}{dt}\) (rad/s²).`,
        R`Every point of a rotating rigid body has the same \(\omega\), but points farther from the axis move faster: \(v = \omega r\).`,
        R`For constant \(\alpha\), the equations look just like the linear ones: \(\omega = \omega_0 + \alpha t\), \(\theta = \omega_0t + \tfrac12\alpha t^2\), \(\omega^2 = \omega_0^2 + 2\alpha\theta\).`
      ],
      analogy: R`On a merry-go-round, a child at the edge and a child near the centre go round in the same time (same \(\omega\)), but the one at the edge moves much faster (bigger \(v\)).`,
      points: [R`1 revolution = \(2\pi\) rad. Convert rpm to rad/s: \(\omega = 2\pi\times\dfrac{\text{rpm}}{60}\).`] },

    { h: R`Torque: the turning effect of a force`,
      body: [
        R`A force makes a body turn when it acts away from the axis. This turning effect is called <b>torque</b>: \(\tau = rF\sin\theta\), where \(r\) is the distance from the axis and \(\theta\) is the angle between \(\vec r\) and \(\vec F\). As a vector, \(\vec\tau = \vec r\times\vec F\).`,
        R`Torque is largest when you push perpendicular to the lever, far from the axis. If the force passes through the axis, the torque is zero, however big the force.`
      ],
      analogy: R`Door handles are fixed far from the hinges. Try pushing a door near its hinge: you need a much bigger force, because \(r\) is small.`,
      points: [R`Unit of torque: N m (not joule, although the dimensions are the same).`, R`Longer spanner → bigger \(r\) → more torque for the same force.`],
      check: { q: R`Why is it easier to open a tight nut with a long spanner?`, ans: R`Torque = \(r\times F\). A longer spanner increases \(r\), so the same force gives more torque.` } },

    { h: R`Moment of inertia and radius of gyration`,
      body: [
        R`<b>Moment of inertia (I)</b> is the rotational version of mass: it tells how hard it is to change a body's rotation. \(I = \sum m r^2\), so mass far from the axis counts much more than mass near it.`,
        R`Common results (mass \(M\), radius \(R\), about the central symmetry axis): ring \(MR^2\); disc \(\tfrac12MR^2\); solid sphere \(\tfrac25MR^2\); hollow sphere \(\tfrac23MR^2\); thin rod about its middle \(\tfrac1{12}ML^2\), about one end \(\tfrac13ML^2\).`,
        R`The <b>radius of gyration</b> \(k\) is the distance at which all the mass could be placed to give the same \(I\): \(I = Mk^2\).`
      ],
      analogy: R`A tightrope walker carries a long pole. Its mass is spread far from the body, giving a large moment of inertia, so the walker does not tip over easily.`,
      mistake: R`Forgetting that \(I\) depends on the axis. The same rod has \(I = \tfrac1{12}ML^2\) about its middle but \(\tfrac13ML^2\) about one end.` },

    { h: R`Parallel and perpendicular axis theorems`,
      body: [
        R`<b>Parallel axis theorem:</b> to shift the axis away from the centre of mass by a distance \(d\): \(I = I_{cm} + Md^2\). It works for any body.`,
        R`<b>Perpendicular axis theorem:</b> for a <i>flat</i> (planar) body lying in the xy-plane, \(I_z = I_x + I_y\). For example, a disc has \(I_z = \tfrac12MR^2\), so each diameter has \(I = \tfrac14MR^2\).`
      ],
      mistake: R`Using the perpendicular axis theorem for 3-D bodies like spheres or cylinders. It only works for flat objects.` },

    { h: R`Newton's second law for rotation`,
      body: [
        R`Just as \(F = ma\), for rotation \(\tau = I\alpha\). A bigger torque gives faster spin-up; a bigger moment of inertia gives slower spin-up.`,
        R`A rotating body has <b>rotational kinetic energy</b> \(K = \tfrac12I\omega^2\). Work done by a torque is \(W = \tau\theta\) and power is \(P = \tau\omega\).`
      ],
      points: [R`Linear ↔ rotational: \(m \leftrightarrow I\), \(F \leftrightarrow \tau\), \(v \leftrightarrow \omega\), \(a \leftrightarrow \alpha\), \(p \leftrightarrow L\).`] },

    { h: R`Angular momentum and its conservation`,
      body: [
        R`<b>Angular momentum</b> is "rotational momentum": \(L = I\omega\). For a particle, \(\vec L = \vec r\times\vec p\). Torque changes it: \(\tau = \dfrac{dL}{dt}\).`,
        R`If no external torque acts, \(L\) stays constant: \(I_1\omega_1 = I_2\omega_2\). Reduce \(I\) and the body spins faster.`
      ],
      analogy: R`A Kathak dancer spinning with arms stretched out spins slowly. As she pulls her arms in, \(I\) drops and she spins faster, with no push from anyone.`,
      check: { q: R`If a spinning skater halves her moment of inertia, what happens to her angular speed?`, ans: R`It doubles, because \(I\omega\) stays constant.` } },

    { h: R`Equilibrium of a rigid body`,
      body: [
        R`A rigid body is fully in equilibrium only if it neither moves nor starts turning. That needs <b>two</b> conditions: net force = 0 (\(\sum\vec F = 0\)) and net torque about any point = 0 (\(\sum\vec\tau = 0\)).`,
        R`<b>Principle of moments:</b> for a balanced lever, clockwise torques = anticlockwise torques.`
      ],
      analogy: R`On a see-saw, a heavier child must sit closer to the middle to balance a lighter child sitting farther away: \(m_1d_1 = m_2d_2\).` },

    { h: R`Rolling motion`,
      body: [
        R`A rolling wheel does two things at once: its centre moves forward (translation) and it spins (rotation). For <b>rolling without slipping</b>, \(v_{cm} = R\omega\).`,
        R`The point touching the ground is momentarily at rest, and the top point moves at \(2v_{cm}\).`,
        R`Total KE = translational + rotational: \(K = \tfrac12Mv^2 + \tfrac12I\omega^2 = \tfrac12Mv^2\left(1 + \dfrac{k^2}{R^2}\right)\).`,
        R`On an incline, \(a = \dfrac{g\sin\theta}{1 + k^2/R^2}\). The smaller \(k^2/R^2\), the faster it rolls. The order of arrival is: solid sphere (2/5), then disc (1/2), then hollow sphere (2/3), then ring (1).`
      ],
      points: [R`For a rolling disc, \(\tfrac13\) of the KE is rotational. For a ring, \(\tfrac12\).`, R`Friction on a body rolling without slipping does no work.`],
      mistake: R`Using \(v = \sqrt{2gh}\) for a rolling ball. Some energy goes into spinning, so the speed is less: \(v = \sqrt{\dfrac{2gh}{1 + k^2/R^2}}\).` }
  ],

  examples: [
    { level: 1, t: 1, q: R`A 20 N force acts at the end of a 0.5 m spanner. Find the torque when the force is (a) perpendicular to the spanner (b) at \(30^\circ\) to it.`,
      steps: [R`(a) \(\tau = rF = 0.5\times20 = 10\) N m.`, R`(b) \(\tau = rF\sin30^\circ = 10\times0.5 = 5\) N m.`],
      ans: R`(a) 10 N m (b) 5 N m` },
    { level: 1, t: 7, q: R`A wheel's angular speed rises uniformly from 10 rad/s to 30 rad/s in 4 s. Find its angular acceleration and the angle turned.`,
      steps: [R`\(\alpha = \dfrac{30 - 10}{4} = 5\) rad/s².`, R`\(\theta = \dfrac{\omega_0 + \omega}{2}t = \dfrac{10 + 30}{2}\times4\).`],
      ans: R`5 rad/s²; 80 rad` },
    { level: 1, t: 0, q: R`Masses of 1 kg at (0, 0), 2 kg at (3, 0) and 3 kg at (0, 6) (in m). Find their centre of mass.`,
      steps: [R`Total mass = 6 kg.`, R`\(x_{cm} = \dfrac{1(0) + 2(3) + 3(0)}{6} = 1\).`, R`\(y_{cm} = \dfrac{1(0) + 2(0) + 3(6)}{6} = 3\).`],
      ans: R`(1 m, 3 m)` },
    { level: 3, t: 8, q: R`A solid cylinder rolls without slipping at 6 m/s and then rolls up an incline. What vertical height does it reach? (g = 10)`,
      steps: [R`For a solid cylinder, \(k^2/R^2 = \tfrac12\), so \(K = \tfrac12mv^2\left(1 + \tfrac12\right) = \tfrac34mv^2\).`, R`All the KE becomes PE: \(\tfrac34mv^2 = mgh\).`, R`\(h = \dfrac{3v^2}{4g} = \dfrac{3\times36}{40}\).`],
      ans: R`2.7 m (a sliding block with no friction would reach only 1.8 m)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of torque is:`,
      options: [R`N`, R`N m`, R`N/m`, R`J/s`], correct: 1,
      solution: R`Torque = force × perpendicular distance, so N m.` },
    { level: 1, type: 'mcq', q: R`The moment of inertia of a body depends on:`,
      options: [R`only its mass`, R`only the axis`, R`its mass and how that mass is spread about the axis`, R`only its shape`], correct: 2,
      solution: R`\(I = \sum mr^2\): it depends on the masses and their distances from the chosen axis.` },
    { level: 1, type: 'mcq', q: R`In rotational motion, the quantity that plays the role of mass is:`,
      options: [R`moment of inertia`, R`torque`, R`angular velocity`, R`angular momentum`], correct: 0,
      solution: R`Moment of inertia measures resistance to changes in rotation, just as mass measures resistance to changes in linear motion.` },
    { level: 1, type: 'mcq', q: R`The centre of mass of a uniform ring is:`,
      options: [R`on the rim`, R`impossible to define`, R`anywhere on the ring`, R`at its centre`], correct: 3,
      solution: R`By symmetry it is at the centre, even though there is no material there.` },
    { level: 1, type: 'num', q: R`A 50 N force acts perpendicular to a lever at 0.2 m from the pivot. Find the torque (in N m).`,
      answer: 10, tol: 0.01, unit: 'N m',
      solution: R`\(\tau = rF = 0.2\times50 = 10\) N m.` },
    { level: 1, type: 'num', q: R`A wheel turns at 120 rpm. Find its angular speed in rad/s.`,
      answer: 12.57, tol: 0.03, unit: 'rad/s',
      solution: R`\(\omega = 2\pi\times\dfrac{120}{60} = 4\pi \approx 12.57\) rad/s.` },
    { level: 2, type: 'mcq', q: R`The moment of inertia of a solid sphere about a diameter is:`,
      options: [R`\(MR^2\)`, R`\(\tfrac12MR^2\)`, R`\(\tfrac25MR^2\)`, R`\(\tfrac23MR^2\)`], correct: 2,
      solution: R`Solid sphere: \(\tfrac25MR^2\). (\(\tfrac23MR^2\) is for a hollow sphere.)` },
    { level: 2, type: 'mcq', q: R`A spinning ice skater pulls her arms in. Her:`,
      options: [R`angular velocity decreases`, R`angular velocity increases`, R`angular momentum increases`, R`angular momentum decreases`], correct: 1,
      solution: R`No external torque, so \(L = I\omega\) is constant. \(I\) decreases, so \(\omega\) increases.` },
    { level: 2, type: 'mcq', q: R`A wheel rolls without slipping with centre speed \(v\). The speed of the point touching the ground is:`,
      options: [R`\(2v\)`, R`\(v\)`, R`\(v/2\)`, R`zero`], correct: 3,
      solution: R`Contact point: \(v - \omega R = v - v = 0\). It is momentarily at rest.` },
    { level: 2, type: 'mcq', q: R`The radius of gyration of a uniform disc about its central axis is:`,
      options: [R`\(R/\sqrt2\)`, R`\(R\)`, R`\(R/2\)`, R`\(\sqrt2R\)`], correct: 0,
      solution: R`\(Mk^2 = \tfrac12MR^2\), so \(k = R/\sqrt2\).` },
    { level: 2, type: 'num', q: R`Find the moment of inertia (in kg m²) of a 2 kg ring of radius 0.5 m about its central axis.`,
      answer: 0.5, tol: 0.001, unit: 'kg m²',
      solution: R`\(I = MR^2 = 2\times0.25 = 0.5\) kg m².` },
    { level: 2, type: 'num', q: R`A torque of 2 N m acts on a disc with \(I = 0.5\) kg m². Find its angular acceleration (in rad/s²).`,
      answer: 4, tol: 0.01, unit: 'rad/s²',
      solution: R`\(\alpha = \tau/I = 2/0.5 = 4\) rad/s².` },
    { level: 2, type: 'num', q: R`A flywheel with \(I = 2\) kg m² spins at 10 rad/s. Find its rotational KE (in J).`,
      answer: 100, tol: 0.01, unit: 'J',
      solution: R`\(\tfrac12I\omega^2 = \tfrac12\times2\times100 = 100\) J.` },
    { level: 3, type: 'mcq', q: R`A solid sphere and a hollow sphere of the same mass and radius are released together from the top of the same incline and roll without slipping. Which reaches the bottom first?`,
      options: [R`the hollow sphere`, R`the solid sphere`, R`both together`, R`it depends on their mass`], correct: 1,
      solution: R`\(a = g\sin\theta/(1 + k^2/R^2)\). The solid sphere has the smaller \(k^2/R^2\) (2/5 versus 2/3), so it accelerates faster.` },
    { level: 3, type: 'mcq', q: R`For a disc rolling without slipping, what fraction of its total kinetic energy is rotational?`,
      options: [R`1/2`, R`2/3`, R`1/4`, R`1/3`], correct: 3,
      solution: R`\(K_{rot} = \tfrac12\cdot\tfrac12MR^2\cdot\omega^2 = \tfrac14Mv^2\); total \(= \tfrac34Mv^2\). Ratio \(= 1/3\).` },
    { level: 3, type: 'num', q: R`A uniform rod (3 kg, 1 m) rotates about an axis perpendicular to it through a point 0.25 m from its centre. Find its moment of inertia (in kg m²).`,
      answer: 0.4375, tol: 0.001, unit: 'kg m²',
      solution: R`\(I = \tfrac1{12}ML^2 + Md^2 = \tfrac{3}{12} + 3(0.25)^2 = 0.25 + 0.1875 = 0.4375\) kg m².` },
    { level: 3, type: 'num', q: R`A ring of mass 2 kg and radius 0.5 m rolls without slipping at 3 m/s. Find its total kinetic energy (in J).`,
      answer: 18, tol: 0.01, unit: 'J',
      solution: R`For a ring, \(k = R\), so \(K = \tfrac12mv^2(1 + 1) = mv^2 = 2\times9 = 18\) J.` }
  ]
});
