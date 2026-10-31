// Lesson: Laws of Motion.
var R = String.raw;
JEE.lesson('physics', 'laws-of-motion', {
  theory: [
    { h: R`Force and inertia (Newton's first law)`,
      body: [
        R`A <b>force</b> is a push or a pull. Forces can start motion, stop it, speed it up, slow it down or change its direction.`,
        R`Things are "lazy": they keep doing what they are already doing. A body at rest stays at rest, and a moving body keeps moving in a straight line at the same speed, <b>unless a net force acts on it</b>. This is <b>Newton's first law</b>, and this laziness is called <b>inertia</b>.`,
        R`The more mass something has, the more inertia it has, and the harder it is to change its motion.`
      ],
      analogy: R`When a bus brakes suddenly, your feet stop with the bus but your upper body keeps moving forward, so you lurch ahead. That is inertia of motion. When the bus starts suddenly, you fall backward: inertia of rest.`,
      points: [R`Mass is the measure of inertia.`, R`No net force means no change in velocity (it can still be moving!).`],
      check: { q: R`Why does dust fly out when you beat a carpet with a stick?`, ans: R`The carpet suddenly moves, but the dust particles, by inertia of rest, stay where they were and separate from the carpet.` } },

    { h: R`Newton's second law: F = ma`,
      body: [
        R`<b>Momentum</b> is "mass in motion": \(\vec p = m\vec v\). Newton's second law says the net force equals the rate of change of momentum: \(\vec F = \dfrac{d\vec p}{dt}\). For constant mass, this becomes \(\vec F = m\vec a\).`,
        R`The unit of force is the newton: 1 N is the force that gives 1 kg an acceleration of 1 m/s².`,
        R`<b>How to solve any problem:</b> (1) Draw the body alone. (2) Draw <i>every</i> force on it: weight \(mg\) down, normal force from surfaces, tension along strings, friction along surfaces, and any applied force. This drawing is the <b>free-body diagram</b>. (3) Write \(\sum F = ma\) along convenient directions.`
      ],
      analogy: R`Pushing an empty shopping trolley makes it zoom; pushing a full one with the same force makes it crawl. Same force, more mass, less acceleration.`,
      points: [R`Force and acceleration are always in the same direction.`, R`Weight \(W = mg\) is a force (in N); mass (in kg) is not.`],
      mistake: R`Including "ma" as a force in the free-body diagram. \(ma\) is the <i>result</i> of the forces, not one of them.` },

    { h: R`Newton's third law: action and reaction`,
      body: [
        R`Whenever A pushes B, B pushes A back with an equal and opposite force. These two forces form an <b>action–reaction pair</b>.`,
        R`The key point: they act on <b>different bodies</b>, so they never cancel each other. That is why you can walk: you push the ground backward, and the ground pushes you forward.`
      ],
      analogy: R`When you jump off a small boat onto the shore, the boat slides backward. You pushed the boat; the boat pushed you.`,
      points: [R`Action and reaction are equal in size, opposite in direction, act on different bodies, and act at the same time.`],
      mistake: R`Calling weight and the normal force on a book on a table an action–reaction pair. Both act on the <i>same</i> book, so they are not a pair. The partner of the book's weight is the book's pull on the Earth.` },

    { h: R`Momentum, impulse and conservation of momentum`,
      body: [
        R`<b>Impulse</b> is a force acting for a time: \(J = F\Delta t\). It equals the change in momentum: \(J = \Delta p\). A big force for a short time can do the same job as a small force for a long time.`,
        R`If no external force acts on a system, its total momentum stays constant: \(m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2\). This is the <b>law of conservation of linear momentum</b>.`,
        R`It explains gun recoil (bullet forward, gun backward), rockets (gas pushed back, rocket forward) and explosions (the pieces' momenta add up to the original momentum).`
      ],
      analogy: R`A cricketer pulls his hands back while catching a fast ball. This increases the time of contact, so the force on his hands becomes smaller for the same change in momentum.`,
      points: [R`Impulse = area under the force–time graph.`, R`Momentum is conserved in every collision and explosion (if no outside force acts).`] },

    { h: R`Equilibrium of concurrent forces`,
      body: [
        R`Forces whose lines of action meet at one point are called <b>concurrent</b>. The body is in <b>equilibrium</b> if their vector sum is zero: \(\sum F_x = 0\) and \(\sum F_y = 0\).`,
        R`For exactly three forces in equilibrium, <b>Lami's theorem</b> gives a shortcut: each force is proportional to the sine of the angle between the other two: \(\dfrac{F_1}{\sin\alpha} = \dfrac{F_2}{\sin\beta} = \dfrac{F_3}{\sin\gamma}\).`
      ],
      analogy: R`In a tug-of-war that is not moving, the two teams pull with equal force in opposite directions. The rope is in equilibrium even though large forces act on it.`,
      check: { q: R`A lamp hangs at rest from a single cord. What is the tension in the cord if the lamp weighs 20 N?`, ans: R`20 N. Equilibrium means tension up = weight down.` } },

    { h: R`Friction`,
      body: [
        R`<b>Friction</b> is the force that opposes sliding between two surfaces. It comes from tiny bumps on the surfaces locking together.`,
        R`<b>Static friction</b> acts when nothing is sliding yet. It is "smart": it grows just enough to stop motion, up to a maximum of \(f_s = \mu_sN\). <b>Kinetic friction</b> acts once sliding starts: \(f_k = \mu_kN\), and it is a bit smaller (\(\mu_k < \mu_s\)).`,
        R`<b>Rolling friction</b> (wheels, ball bearings) is much smaller than sliding friction. That is why the wheel was such a great invention.`,
        R`On an incline, a block is just about to slide when \(\tan\theta = \mu_s\). This angle is called the <b>angle of repose</b>.`
      ],
      analogy: R`It is hard to start pushing a heavy almirah, but once it moves it gets easier. That is static friction (bigger) giving way to kinetic friction (smaller).`,
      points: [R`Friction does not depend on contact area, only on \(\mu\) and \(N\).`, R`Friction lets us walk, write and drive; without it we would slip everywhere.`],
      mistake: R`Writing friction = \(\mu_sN\) even when the applied force is smaller. If you push a 40 N-limit block with 30 N, friction is only 30 N.` },

    { h: R`Circular motion and banking of roads`,
      body: [
        R`Anything moving in a circle needs a force towards the centre, the <b>centripetal force</b> \(F = \dfrac{mv^2}{r}\). It is not a new kind of force; some real force does this job: tension, friction, gravity or a component of the normal force.`,
        R`A car taking a flat turn relies on friction: the maximum safe speed is \(v = \sqrt{\mu rg}\). To make turns safer, roads are <b>banked</b> (tilted). Then part of the normal force points towards the centre.`,
        R`With no friction, the perfect speed for a banked road is given by \(\tan\theta = \dfrac{v^2}{rg}\).`
      ],
      analogy: R`Racing tracks and railway curves are tilted inward, like a cyclist leaning into a turn, so that the push from the road helps the vehicle go round.`,
      points: [R`Centripetal force always points to the centre and does no work.`, R`Lift problems: apparent weight \(= m(g + a)\) going up with acceleration, \(m(g - a)\) going down.`] }
  ],

  examples: [
    { level: 1, t: 1, q: R`What force is needed to give a 5 kg box an acceleration of 2 m/s² on a smooth floor?`,
      steps: [R`\(F = ma = 5\times2\).`],
      ans: R`10 N` },
    { level: 1, t: 0, q: R`Why do we fall forward when we jump out of a moving bus?`,
      steps: [R`While in the bus, our whole body moves with the bus's speed.`, R`On landing, our feet stop, but our upper body keeps moving forward because of inertia of motion.`],
      ans: R`Inertia of motion. Running a few steps forward after landing prevents the fall.` },
    { level: 1, t: 5, q: R`A 10 kg block rests on a floor with \(\mu_s = 0.4\). (a) What minimum horizontal force starts it moving? (b) If you push with only 30 N, what is the friction force? (g = 10)`,
      steps: [R`\(N = mg = 100\) N, so maximum static friction \(= 0.4\times100 = 40\) N.`, R`(a) You need just over 40 N.`, R`(b) 30 N is below the limit, so static friction matches it.`],
      ans: R`(a) 40 N (b) 30 N; the block stays at rest` },
    { level: 3, t: 1, q: R`Blocks of 2 kg and 3 kg touch each other on a smooth floor. A 10 N force pushes the 2 kg block (and so both blocks). Find the acceleration and the force between the blocks.`,
      steps: [R`The two blocks move together: \(a = \dfrac{10}{2 + 3} = 2\) m/s².`, R`The only horizontal force on the 3 kg block is the contact force \(N\): \(N = 3\times2\).`],
      ans: R`2 m/s²; 6 N` },
    { level: 3, t: 3, q: R`A 10 g bullet at 500 m/s hits and stays inside a 990 g block hanging from a string. How high does the block swing? (g = 10)`,
      steps: [R`Momentum is conserved in the collision: \(0.01\times500 = (1.0)V\), so \(V = 5\) m/s.`, R`After that, energy is conserved as it swings: \(\tfrac12V^2 = gh\).`, R`\(h = \dfrac{25}{20}\).`],
      ans: R`1.25 m (this is the ballistic pendulum)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Newton's first law of motion tells us about:`,
      options: [R`energy`, R`power`, R`inertia`, R`momentum`], correct: 2,
      solution: R`The first law says bodies resist changes in their motion. That property is inertia.` },
    { level: 1, type: 'mcq', q: R`The SI unit of impulse is:`,
      options: [R`N s`, R`N/s`, R`N m`, R`kg m/s²`], correct: 0,
      solution: R`Impulse = force × time, so N s (equal to kg m/s, the unit of momentum).` },
    { level: 1, type: 'mcq', q: R`Action and reaction forces:`,
      options: [R`act on the same body`, R`cancel each other`, R`are unequal in size`, R`act on different bodies`], correct: 3,
      solution: R`They are equal and opposite but act on different bodies, so they never cancel.` },
    { level: 1, type: 'mcq', q: R`When a bus starts suddenly, standing passengers tend to fall:`,
      options: [R`forward`, R`backward`, R`sideways`, R`upward`], correct: 1,
      solution: R`Their feet move with the bus, but their upper body stays behind because of inertia of rest.` },
    { level: 1, type: 'num', q: R`A 2 kg body accelerates at 4 m/s². What net force (in N) acts on it?`,
      answer: 8, tol: 0.01, unit: 'N',
      solution: R`\(F = ma = 2\times4 = 8\) N.` },
    { level: 1, type: 'num', q: R`Find the momentum of a 0.5 kg ball moving at 20 m/s (in kg m/s).`,
      answer: 10, tol: 0.01, unit: 'kg m/s',
      solution: R`\(p = mv = 0.5\times20 = 10\) kg m/s.` },
    { level: 2, type: 'mcq', q: R`A 2 kg block on a rough floor (\(\mu_k = 0.25\)) is pulled horizontally with 10 N. Its acceleration is (g = 10):`,
      options: [R`5 m/s²`, R`2.5 m/s²`, R`1.5 m/s²`, R`0`], correct: 1,
      solution: R`Friction \(= 0.25\times20 = 5\) N. Net force \(= 10 - 5 = 5\) N, so \(a = 5/2 = 2.5\) m/s².` },
    { level: 2, type: 'mcq', q: R`A lift falls freely (acceleration \(g\) downward). The apparent weight of a person inside it is:`,
      options: [R`\(mg\)`, R`\(2mg\)`, R`zero`, R`\(mg/2\)`], correct: 2,
      solution: R`Apparent weight \(= m(g - a) = m(g - g) = 0\). The person feels weightless.` },
    { level: 2, type: 'mcq', q: R`The angle of repose \(\theta\) and the coefficient of static friction \(\mu_s\) are related by:`,
      options: [R`\(\mu_s = \tan\theta\)`, R`\(\mu_s = \sin\theta\)`, R`\(\mu_s = \cos\theta\)`, R`\(\mu_s = \cot\theta\)`], correct: 0,
      solution: R`At the point of slipping, \(mg\sin\theta = \mu_s mg\cos\theta\), so \(\mu_s = \tan\theta\).` },
    { level: 2, type: 'mcq', q: R`On a frictionless banked road of angle \(\theta\) and radius \(r\), the correct speed \(v\) satisfies:`,
      options: [R`\(v^2 = rg\sin\theta\)`, R`\(v^2 = rg\tan\theta\)`, R`\(v = rg\tan\theta\)`, R`\(v^2 = r\tan\theta/g\)`], correct: 1,
      solution: R`\(N\sin\theta = mv^2/r\) and \(N\cos\theta = mg\). Dividing: \(\tan\theta = v^2/(rg)\).` },
    { level: 2, type: 'num', q: R`A 50 g bullet moving at 200 m/s is stopped by a wooden block in 0.01 s. Find the average force (in N) on the bullet.`,
      answer: 1000, tol: 0.5, unit: 'N',
      solution: R`\(F = \dfrac{\Delta p}{\Delta t} = \dfrac{0.05\times200}{0.01} = 1000\) N.` },
    { level: 2, type: 'num', q: R`A 5 kg gun fires a 25 g bullet at 400 m/s. Find the recoil speed of the gun (in m/s).`,
      answer: 2, tol: 0.01, unit: 'm/s',
      solution: R`\(0 = 0.025\times400 - 5V\), so \(V = 10/5 = 2\) m/s.` },
    { level: 2, type: 'num', q: R`A 1000 kg car rounds a flat curve of radius 50 m at 10 m/s. How much friction force (in N) is needed?`,
      answer: 2000, tol: 0.5, unit: 'N',
      solution: R`Friction provides the centripetal force: \(\dfrac{mv^2}{r} = \dfrac{1000\times100}{50} = 2000\) N.` },
    { level: 3, type: 'mcq', q: R`Masses \(m\) and \(3m\) hang from the two ends of a light string over a smooth pulley. Their acceleration is:`,
      options: [R`\(g/4\)`, R`\(g/3\)`, R`\(g/2\)`, R`\(2g/3\)`], correct: 2,
      solution: R`\(a = \dfrac{(3m - m)g}{3m + m} = \dfrac{2mg}{4m} = \dfrac g2\).` },
    { level: 3, type: 'mcq', q: R`A block is just about to slide down an incline of \(30^\circ\). The coefficient of static friction is:`,
      options: [R`\(1/2\)`, R`\(1/\sqrt3\)`, R`\(\sqrt3\)`, R`\(\sqrt3/2\)`], correct: 1,
      solution: R`\(\mu_s = \tan30^\circ = 1/\sqrt3\).` },
    { level: 3, type: 'num', q: R`Blocks of 4 kg and 6 kg are joined by a light string on a smooth table. A 20 N force pulls the 6 kg block. Find the tension (in N) in the string.`,
      answer: 8, tol: 0.01, unit: 'N',
      solution: R`\(a = 20/10 = 2\) m/s². The string alone pulls the 4 kg block: \(T = 4\times2 = 8\) N.` },
    { level: 3, type: 'num', q: R`A road of radius 100 m is banked at \(45^\circ\), with \(\mu = 0.5\). Find the maximum safe speed (in m/s). (g = 10)`,
      answer: 54.8, tol: 0.2, unit: 'm/s',
      solution: R`\(v^2 = rg\dfrac{\mu + \tan\theta}{1 - \mu\tan\theta} = 1000\times\dfrac{1.5}{0.5} = 3000\), so \(v \approx 54.8\) m/s.` }
  ]
});
