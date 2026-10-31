// Lesson: Work, Energy and Power.
var R = String.raw;
JEE.lesson('physics', 'work-energy-power', {
  theory: [
    { h: R`What "work" means in physics`,
      body: [
        R`In daily life, "work" means any effort. In physics, <b>work is done only when a force moves something</b>. Holding a heavy bag still for an hour does zero physics work!`,
        R`For a constant force \(F\) that moves a body a distance \(s\), with angle \(\theta\) between them: \(W = Fs\cos\theta = \vec F\cdot\vec s\). The unit is the joule (J): 1 J = 1 N × 1 m.`,
        R`Work can be <b>positive</b> (force helps the motion, \(\theta < 90^\circ\)), <b>negative</b> (force opposes it, like friction or braking) or <b>zero</b> (force perpendicular to the motion, like gravity on a body sliding on a level floor).`
      ],
      analogy: R`Pulling a suitcase by its handle at an angle: only the part of your pull along the floor (\(F\cos\theta\)) moves it forward. The upward part does no work on the forward motion.`,
      points: [R`\(\theta = 90^\circ\) gives zero work, e.g. centripetal force and the normal force on level ground.`],
      check: { q: R`A coolie carries a box on his head and walks along a level platform. How much work does he do on the box against gravity?`, ans: R`Zero. His upward force is perpendicular to the horizontal motion.` } },

    { h: R`Work done by a variable force`,
      body: [
        R`When the force changes as the body moves, split the path into tiny bits, find the work on each bit and add them: \(W = \int F\,dx\).`,
        R`Graphically, <b>work = area under the force–displacement graph</b>. Area above the axis is positive work; area below is negative work.`
      ],
      points: [R`For a spring, \(F = kx\) grows with \(x\); the area under the line gives \(W = \tfrac12kx^2\).`] },

    { h: R`Energy: kinetic and potential`,
      body: [
        R`<b>Energy</b> is the ability to do work. It is measured in joules, just like work.`,
        R`<b>Kinetic energy</b> is energy of motion: \(K = \tfrac12mv^2 = \dfrac{p^2}{2m}\). Double the speed and KE becomes four times as large.`,
        R`<b>Potential energy</b> is stored energy because of position or shape. Lifting a mass \(m\) through a height \(h\) stores \(U = mgh\). A stretched or compressed spring stores \(U = \tfrac12kx^2\).`
      ],
      analogy: R`Water stored high up in a dam has potential energy. When it rushes down, that turns into kinetic energy, which spins the turbines that make electricity.`,
      mistake: R`Thinking KE can be negative. \(v^2\) is never negative, so \(K \ge 0\) always.` },

    { h: R`The work–energy theorem`,
      body: [
        R`<b>The work done by all the forces on a body equals the change in its kinetic energy:</b> \(W_{net} = K_f - K_i\).`,
        R`This is one of the most useful tools in mechanics. It works even when forces change, and you don't need to know the time taken.`
      ],
      analogy: R`Braking a bicycle: the brakes do negative work, which removes the cycle's kinetic energy until it stops.`,
      check: { q: R`A 1 kg ball speeds up from 2 m/s to 4 m/s. How much net work was done on it?`, ans: R`\(\tfrac12(1)(16) - \tfrac12(1)(4) = 8 - 2 = 6\) J.` } },

    { h: R`Conservative forces and conservation of energy`,
      body: [
        R`A force is <b>conservative</b> if the work it does depends only on the start and end points, not on the path. Gravity and spring forces are conservative, so we can define potential energy for them, with \(F = -\dfrac{dU}{dx}\).`,
        R`Friction and air drag are <b>non-conservative</b>: the longer the path, the more energy they turn into heat.`,
        R`If only conservative forces do work, <b>mechanical energy is conserved</b>: \(K + U\) stays the same. When friction acts, the "lost" mechanical energy equals the work done against friction (it becomes heat).`
      ],
      analogy: R`A swing (jhoola) keeps converting between PE at the top and KE at the bottom. Slowly the swings get smaller because air resistance turns a little energy into heat each time.`,
      points: [R`Total energy (including heat, sound and so on) is always conserved.`, R`Work done by a conservative force around a closed loop is zero.`] },

    { h: R`Power`,
      body: [
        R`<b>Power</b> is how fast work is done: \(P = \dfrac{W}{t}\). For a force acting on a moving body, \(P = \vec F\cdot\vec v\).`,
        R`The unit is the watt: 1 W = 1 J/s. Other units: 1 kW = 1000 W, 1 horsepower ≈ 746 W. Electricity bills use the kilowatt-hour: 1 kWh = 3.6 × 10⁶ J (energy, not power!).`
      ],
      analogy: R`Two boys of equal weight climb the same stairs. Both do the same work, but the one who runs up has more power because he does it faster.`,
      mistake: R`Confusing kW (power) with kWh (energy). A 2 kW heater used for 3 hours uses 6 kWh of energy.` },

    { h: R`Motion in a vertical circle`,
      body: [
        R`A stone whirled in a vertical circle on a string speeds up as it falls and slows down as it rises, because gravity does work on it. Use energy conservation to link speeds at different points: \(v_{bottom}^2 = v_{top}^2 + 4gr\).`,
        R`At the top, both tension and gravity pull towards the centre: \(T + mg = \dfrac{mv^2}{r}\). The string goes slack if \(T\) would become negative, so the minimum speed at the top is \(\sqrt{gr}\), and at the bottom it is \(\sqrt{5gr}\).`
      ],
      points: [R`Tension is largest at the bottom and smallest at the top; they differ by \(6mg\).`, R`For a rigid rod (instead of a string), the bob only needs to reach the top with speed ≥ 0, so \(v_{bottom} \ge \sqrt{4gr}\).`] },

    { h: R`Collisions`,
      body: [
        R`In every collision, <b>momentum is conserved</b> (the collision forces are internal). Kinetic energy may or may not be conserved.`,
        R`<b>Elastic collision:</b> KE is also conserved (like ideal billiard balls). <b>Inelastic:</b> some KE turns into heat, sound or deformation. <b>Perfectly inelastic:</b> the bodies stick together and the most KE is lost.`,
        R`The <b>coefficient of restitution</b> \(e = \dfrac{\text{speed of separation}}{\text{speed of approach}}\): 1 for elastic, 0 for perfectly inelastic. In 2-D collisions, apply momentum conservation separately along x and y.`
      ],
      analogy: R`A rubber ball bouncing back almost to the same height is nearly elastic. A lump of wet clay hitting the floor and sticking is perfectly inelastic.`,
      points: [R`Equal masses in a 1-D elastic collision exchange velocities.`, R`Ball dropped from height \(h\) rebounds to \(e^2h\).`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`A 10 N force pulls a box 5 m along the floor. The force makes \(60^\circ\) with the floor. How much work does it do?`,
      steps: [R`\(W = Fs\cos\theta = 10\times5\times\cos60^\circ\).`, R`\(= 50\times0.5\).`],
      ans: R`25 J` },
    { level: 1, t: 1, q: R`A 2 kg ball moves at 3 m/s at a height of 5 m. Find its kinetic and potential energy. (g = 10)`,
      steps: [R`\(K = \tfrac12mv^2 = \tfrac12(2)(9) = 9\) J.`, R`\(U = mgh = 2\times10\times5 = 100\) J.`],
      ans: R`KE = 9 J, PE = 100 J` },
    { level: 1, t: 3, q: R`A 60 kg boy climbs a 10 m high staircase in 20 s. Find his power. (g = 10)`,
      steps: [R`Work against gravity \(= mgh = 60\times10\times10 = 6000\) J.`, R`\(P = W/t = 6000/20\).`],
      ans: R`300 W` },
    { level: 3, t: 8, q: R`A 1 kg ball moving at 4 m/s collides elastically head-on with a 3 kg ball at rest. Find their velocities after the collision.`,
      steps: [R`\(v_1 = \dfrac{m_1 - m_2}{m_1 + m_2}u_1 = \dfrac{1 - 3}{4}(4) = -2\) m/s (it bounces back).`, R`\(v_2 = \dfrac{2m_1}{m_1 + m_2}u_1 = \dfrac{2}{4}(4) = 2\) m/s.`, R`Check KE: before \(= 8\) J; after \(= \tfrac12(1)(4) + \tfrac12(3)(4) = 2 + 6 = 8\) J ✓`],
      ans: R`1 kg ball: 2 m/s backwards; 3 kg ball: 2 m/s forwards` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`A box slides along a level floor. The work done on it by gravity is:`,
      options: [R`positive`, R`negative`, R`zero`, R`infinite`], correct: 2,
      solution: R`Gravity acts downward and the motion is horizontal (\(\theta = 90^\circ\)), so \(W = 0\).` },
    { level: 1, type: 'mcq', q: R`The SI unit of power is the:`,
      options: [R`joule`, R`watt`, R`newton`, R`pascal`], correct: 1,
      solution: R`Power = work/time, measured in J/s = watt (W).` },
    { level: 1, type: 'mcq', q: R`If the speed of a body is doubled, its kinetic energy becomes:`,
      options: [R`half`, R`the same`, R`2 times`, R`4 times`], correct: 3,
      solution: R`\(K \propto v^2\), so \(2^2 = 4\) times.` },
    { level: 1, type: 'mcq', q: R`The energy stored in a stretched spring is:`,
      options: [R`potential energy`, R`kinetic energy`, R`heat energy`, R`chemical energy`], correct: 0,
      solution: R`It is stored because of a change in shape: elastic potential energy \(\tfrac12kx^2\).` },
    { level: 1, type: 'num', q: R`How much work (in J) is done in lifting a 5 kg bag through 2 m? (g = 10)`,
      answer: 100, tol: 0.01, unit: 'J',
      solution: R`\(W = mgh = 5\times10\times2 = 100\) J.` },
    { level: 1, type: 'num', q: R`Find the kinetic energy (in J) of a 4 kg trolley moving at 5 m/s.`,
      answer: 50, tol: 0.01, unit: 'J',
      solution: R`\(\tfrac12\times4\times25 = 50\) J.` },
    { level: 2, type: 'mcq', q: R`The work done by kinetic friction on a sliding block is:`,
      options: [R`positive`, R`negative`, R`zero`, R`dependent only on mass`], correct: 1,
      solution: R`Friction acts opposite to the motion (\(\theta = 180^\circ\)), so its work is negative.` },
    { level: 2, type: 'mcq', q: R`In a perfectly inelastic collision:`,
      options: [R`momentum and KE are both conserved`, R`neither is conserved`, R`momentum is conserved but KE is not`, R`KE is conserved but momentum is not`], correct: 2,
      solution: R`Momentum is conserved in every collision. In a perfectly inelastic collision the bodies stick together and the most KE is lost.` },
    { level: 2, type: 'mcq', q: R`The potential energy of a particle is \(U = 3x^2\) J (x in m). The force on it at \(x = 2\) m is:`,
      options: [R`12 N`, R`−12 N`, R`6 N`, R`−6 N`], correct: 1,
      solution: R`\(F = -\dfrac{dU}{dx} = -6x = -12\) N, pointing towards the origin.` },
    { level: 2, type: 'mcq', q: R`Bodies of mass 1 kg and 4 kg have equal momentum. The ratio of their kinetic energies is:`,
      options: [R`1 : 4`, R`1 : 2`, R`2 : 1`, R`4 : 1`], correct: 3,
      solution: R`\(K = p^2/2m\): for equal \(p\), \(K \propto 1/m\), so \(K_1 : K_2 = 4 : 1\).` },
    { level: 2, type: 'num', q: R`A spring with \(k = 400\) N/m is compressed by 5 cm. How much energy (in J) is stored?`,
      answer: 0.5, tol: 0.001, unit: 'J',
      solution: R`\(\tfrac12kx^2 = \tfrac12(400)(0.05)^2 = 0.5\) J.` },
    { level: 2, type: 'num', q: R`A motor lifts 200 kg through 15 m in 30 s. Find its power (in W). (g = 10)`,
      answer: 1000, tol: 0.5, unit: 'W',
      solution: R`\(P = \dfrac{mgh}{t} = \dfrac{200\times10\times15}{30} = 1000\) W.` },
    { level: 2, type: 'num', q: R`A ball is dropped from a height of 5 m. Using energy conservation, find its speed (in m/s) just before it hits the ground. (g = 10)`,
      answer: 10, tol: 0.01, unit: 'm/s',
      solution: R`\(mgh = \tfrac12mv^2\), so \(v = \sqrt{2gh} = \sqrt{100} = 10\) m/s.` },
    { level: 3, type: 'mcq', q: R`For a stone on a string to just complete a vertical circle of radius \(r\), its speed at the top must be at least:`,
      options: [R`\(\sqrt{gr}\)`, R`\(\sqrt{2gr}\)`, R`\(\sqrt{5gr}\)`, R`0`], correct: 0,
      solution: R`At the top, with \(T = 0\): \(mg = mv^2/r\), so \(v = \sqrt{gr}\).` },
    { level: 3, type: 'mcq', q: R`A ball collides head-on and elastically with an identical ball at rest. After the collision:`,
      options: [R`both balls stop`, R`they stick together`, R`they exchange velocities`, R`the first ball rebounds with the same speed`], correct: 2,
      solution: R`For equal masses in a 1-D elastic collision, \(v_1 = 0\) and \(v_2 = u_1\): the velocities are exchanged.` },
    { level: 3, type: 'num', q: R`A 0.5 kg bob on a 1 m string moves in a vertical circle with speed 8 m/s at the bottom. Find the tension (in N) at the top. (g = 10)`,
      answer: 7, tol: 0.01, unit: 'N',
      solution: R`\(v_{top}^2 = 64 - 4(10)(1) = 24\). At the top: \(T = m\left(\dfrac{v^2}{r} - g\right) = 0.5(24 - 10) = 7\) N.` },
    { level: 3, type: 'num', q: R`A ball dropped from 10 m rebounds to a height of 2.5 m. Find the coefficient of restitution.`,
      answer: 0.5, tol: 0.001, unit: '',
      solution: R`\(h' = e^2h\), so \(e = \sqrt{2.5/10} = 0.5\).` }
  ]
});
