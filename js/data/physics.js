// Physics: 20 units from the JEE Main syllabus (they also cover JEE Advanced).
// Every content string uses String.raw (R`...`) so LaTeX backslashes stay intact.
// Each solved example is tagged with the syllabus topic it covers (exact string from `syllabus`).
var R = String.raw;
window.JEE = window.JEE || {};
JEE.physics = {
  name: 'Physics',
  tagline: 'Mechanics, heat, waves, electricity, optics and modern physics',
  chapters: [
    {
      id: 'units-measurement', title: 'Units and Measurements', cls: 11,
      syllabus: [R`SI units`, R`Fundamental & derived units`, R`Least count`, R`Significant figures`, R`Errors in measurement`, R`Dimensions of physical quantities`, R`Dimensional analysis & its applications`],
      concepts: [
        { h: R`Dimensions`, body: R`Every quantity can be written in terms of mass [M], length [L] and time [T] (plus current [A], temperature [K], and so on). An equation can be correct only if both sides have the same dimensions. This is the <b>principle of homogeneity</b>.` },
        { h: R`Uses and limits of dimensional analysis`, body: R`Use it to check equations, convert units and guess the form of a relation. It cannot find dimensionless constants (such as \(2\pi\)), and it cannot handle trigonometric, exponential or logarithmic functions.` },
        { h: R`Errors`, body: R`When quantities are added or subtracted, their <b>absolute</b> errors add. When they are multiplied or divided, their <b>relative</b> (percentage) errors add. A power multiplies the relative error.` },
        { h: R`Significant figures`, body: R`All non-zero digits are significant. Zeros between them are significant. Leading zeros are not. Trailing zeros after a decimal point are. The result of a multiplication keeps as many significant figures as the least precise factor.` }
      ],
      formulas: [
        R`If \(Z = A \pm B\): \(\Delta Z = \Delta A + \Delta B\)`,
        R`If \(Z = \dfrac{A^p B^q}{C^r}\): \(\dfrac{\Delta Z}{Z} = p\dfrac{\Delta A}{A} + q\dfrac{\Delta B}{B} + r\dfrac{\Delta C}{C}\)`,
        R`Unit conversion: \(n_2 = n_1\left[\dfrac{M_1}{M_2}\right]^a\left[\dfrac{L_1}{L_2}\right]^b\left[\dfrac{T_1}{T_2}\right]^c\)`,
        R`\([G] = M^{-1}L^3T^{-2}\), \([h] = ML^2T^{-1}\), \([\text{Force}] = MLT^{-2}\), \([\text{Energy}] = ML^2T^{-2}\)`
      ],
      examples: [
        { topic: R`SI units`, level: 'Main', q: R`Express 1 kilowatt-hour (the "unit" on an electricity bill) in SI units of energy.`,
          steps: [R`\(1\,\text{kW} = 1000\) W and \(1\,\text{h} = 3600\) s.`, R`\(1\,\text{kWh} = 1000\times3600\) J.`],
          ans: R`\(3.6\times10^6\) J` },
        { topic: R`Fundamental & derived units`, level: 'Main', q: R`Which of these are fundamental (base) quantities in SI: mass, force, electric current, temperature, velocity? Write the newton and the joule in base units.`,
          steps: [R`The 7 SI base quantities are length, mass, time, current, temperature, amount of substance and luminous intensity.`, R`Force and velocity are derived from them.`, R`\(1\,\text{N} = 1\,\text{kg m s}^{-2}\); \(1\,\text{J} = 1\,\text{N m} = 1\,\text{kg m}^2\text{s}^{-2}\).`],
          ans: R`Base: mass, current, temperature. Derived: force, velocity. \(\text{N} = \text{kg m s}^{-2}\), \(\text{J} = \text{kg m}^2\text{s}^{-2}\).` },
        { topic: R`Least count`, level: 'Main', q: R`A stopwatch with least count 0.1 s measures 20 oscillations as 32.4 s. Find the period and its uncertainty.`,
          steps: [R`\(T = 32.4/20 = 1.62\) s.`, R`The error in the total time is the least count, 0.1 s, and it is shared over 20 oscillations: \(\Delta T = 0.1/20\).`],
          ans: R`\(T = (1.620 \pm 0.005)\) s. Timing many oscillations reduces the error.` },
        { topic: R`Significant figures`, level: 'Main', q: R`Give the results with the correct significant figures: (a) \(2.5\times3.42\) (b) \(12.11 + 18.0 + 1.012\).`,
          steps: [R`(a) \(= 8.55\). The least precise factor (2.5) has 2 significant figures, so round to 2 significant figures.`, R`(b) \(= 31.122\). For addition, keep the fewest decimal places (18.0 has one).`],
          ans: R`(a) 8.6 (b) 31.1` },
        { topic: R`Errors in measurement`, level: 'Main', q: R`A resistance is found using \(R = V/I\) with \(V = (100 \pm 5)\,\text{V}\) and \(I = (10 \pm 0.2)\,\text{A}\). Find the percentage error in \(R\).`,
          steps: [R`For a quotient, percentage errors add.`, R`\(\%\) error in \(V = \dfrac{5}{100}\times100 = 5\%\).`, R`\(\%\) error in \(I = \dfrac{0.2}{10}\times100 = 2\%\).`, R`Total \(= 5\% + 2\%\).`],
          ans: R`\(7\%\), so \(R = (10 \pm 0.7)\,\Omega\)` },
        { topic: R`Dimensions of physical quantities`, level: 'Main', q: R`Find the dimensional formula of the gravitational constant \(G\).`,
          steps: [R`From \(F = \dfrac{Gm_1m_2}{r^2}\), \(G = \dfrac{Fr^2}{m_1m_2}\).`, R`\([G] = \dfrac{MLT^{-2}\cdot L^2}{M^2}\).`, R`Simplify: \(M^{-1}L^3T^{-2}\).`],
          ans: R`\([G] = M^{-1}L^{3}T^{-2}\)` },
        { topic: R`Dimensional analysis & its applications`, level: 'Main', q: R`The period \(T\) of a simple pendulum may depend on the bob's mass \(m\), the length \(l\) and \(g\). Use dimensions to find the formula.`,
          steps: [R`Let \(T = k\,m^a l^b g^c\): \([T] = M^a L^b (LT^{-2})^c\).`, R`Compare powers. M: \(a = 0\). T: \(-2c = 1\), so \(c = -\tfrac12\). L: \(b + c = 0\), so \(b = \tfrac12\).`],
          ans: R`\(T = k\sqrt{l/g}\). Experiment gives \(k = 2\pi\), which dimensional analysis cannot find.` }
      ],
      practice: [
        { q: R`Write the dimensional formula of Planck's constant \(h\). (Hint: \(E = h\nu\).)`, ans: R`\(ML^2T^{-1}\)` },
        { q: R`How many significant figures are there in 0.00450?`, ans: R`3 (the digits 4, 5 and the trailing 0)` }
      ]
    },
    {
      id: 'kinematics', title: 'Kinematics', cls: 11,
      syllabus: [R`Frame of reference`, R`Motion in a straight line`, R`Speed & velocity`, R`Uniform & non-uniform motion`, R`Position–time & velocity–time graphs`, R`Relative velocity`, R`Scalars & vectors`, R`Motion in a plane`, R`Projectile motion`, R`Uniform circular motion`],
      concepts: [
        { h: R`Graphs`, body: R`The slope of an x–t graph is velocity. The slope of a v–t graph is acceleration. The area under a v–t graph is displacement.` },
        { h: R`Projectile motion`, body: R`The horizontal and vertical motions are independent. Horizontally the acceleration is zero (constant velocity). Vertically it is \(g\), downward. The path is a parabola.` },
        { h: R`Relative velocity`, body: R`\(\vec v_{AB} = \vec v_A - \vec v_B\). Use it for rain–umbrella, river–boat and chase problems. To cross a river in the shortest time, head straight across. To land directly opposite, aim upstream.` },
        { h: R`Circular motion`, body: R`In uniform circular motion the speed is constant, but there is a centripetal acceleration \(v^2/r\) pointing toward the centre.` }
      ],
      formulas: [
        R`\(v = u + at,\quad s = ut + \tfrac12 at^2,\quad v^2 = u^2 + 2as\)`,
        R`Distance covered in the \(n^\text{th}\) second: \(s_n = u + \dfrac{a}{2}(2n-1)\)`,
        R`Projectile: \(T = \dfrac{2u\sin\theta}{g},\quad H = \dfrac{u^2\sin^2\theta}{2g},\quad R = \dfrac{u^2\sin2\theta}{g}\)`,
        R`Trajectory: \(y = x\tan\theta - \dfrac{gx^2}{2u^2\cos^2\theta}\)`,
        R`Centripetal acceleration: \(a_c = \dfrac{v^2}{r} = \omega^2 r\)`
      ],
      examples: [
        { topic: R`Frame of reference`, level: 'Main', q: R`A ball is dropped inside a train moving at constant velocity. Describe its path as seen by (a) a passenger and (b) a person on the platform.`,
          steps: [R`In the train frame, the ball starts with zero horizontal velocity, so it falls straight down.`, R`In the ground frame, it starts with the train's horizontal velocity and also falls under gravity, which makes a projectile path.`],
          ans: R`(a) A straight vertical line (b) A parabola. Motion depends on the frame of reference.` },
        { topic: R`Motion in a straight line`, level: 'Main', q: R`A ball is thrown vertically upward at 20 m/s. Find the maximum height and the total time of flight. (\(g = 10\,\text{m/s}^2\))`,
          steps: [R`At the top \(v = 0\): \(0 = 20^2 - 2(10)H\), so \(H = 20\) m.`, R`Time to reach the top: \(t = u/g = 2\) s.`, R`The way down takes the same time, so the total time is \(4\) s.`],
          ans: R`\(H = 20\) m, \(T = 4\) s` },
        { topic: R`Speed & velocity`, level: 'Main', q: R`A car covers 30 km at 30 km/h and the next 30 km at 60 km/h. Find its average speed.`,
          steps: [R`Time taken: \(1\) h \(+\ 0.5\) h \(= 1.5\) h.`, R`Average speed \(= \dfrac{\text{total distance}}{\text{total time}} = \dfrac{60}{1.5}\).`],
          ans: R`40 km/h (not 45 km/h: the average of the speeds is not the average speed)` },
        { topic: R`Uniform & non-uniform motion`, level: 'Main', q: R`The velocity of a particle is \(v = 3t^2 - 2t\) m/s, and it starts at \(x = 0\). Find its acceleration at \(t = 2\) s and its displacement in the first 2 s.`,
          steps: [R`\(a = \dfrac{dv}{dt} = 6t - 2\), so \(a(2) = 10\,\text{m/s}^2\).`, R`\(x = \int_0^2(3t^2 - 2t)\,dt = [t^3 - t^2]_0^2 = 8 - 4\).`],
          ans: R`\(a = 10\,\text{m/s}^2\), displacement \(= 4\) m` },
        { topic: R`Position–time & velocity–time graphs`, level: 'Main', q: R`On a v–t graph, a car speeds up uniformly from 0 to 20 m/s in 4 s, moves at 20 m/s for 6 s, then slows uniformly to rest in 2 s. Find the total distance and the first acceleration.`,
          steps: [R`Distance = area under the graph: \(\tfrac12(4)(20) + 20(6) + \tfrac12(2)(20) = 40 + 120 + 20\).`, R`First acceleration = slope \(= 20/4\).`],
          ans: R`180 m; \(5\,\text{m/s}^2\)` },
        { topic: R`Relative velocity`, level: 'Main', q: R`A boat moves at 5 km/h in still water. A river 1 km wide flows at 3 km/h. (a) What is the shortest time to cross, and how far downstream does the boat land? (b) How long does it take to cross to the point directly opposite?`,
          steps: [R`(a) Head straight across: \(t = 1/5\) h \(= 12\) min. Drift \(= 3\times0.2 = 0.6\) km.`, R`(b) Aim upstream so the river's flow is cancelled: speed across \(= \sqrt{5^2 - 3^2} = 4\) km/h, so \(t = 1/4\) h.`],
          ans: R`(a) 12 min, landing 600 m downstream (b) 15 min` },
        { topic: R`Scalars & vectors`, level: 'Main', q: R`Two forces of 3 N and 4 N act at a point with \(60^\circ\) between them. Find the magnitude of their resultant.`,
          steps: [R`\(R^2 = A^2 + B^2 + 2AB\cos\theta = 9 + 16 + 2(3)(4)(0.5)\).`, R`\(R^2 = 37\).`],
          ans: R`\(\sqrt{37} \approx 6.08\) N` },
        { topic: R`Motion in a plane`, level: 'Main', q: R`A particle's position is \(\vec r = 3t\,\hat i + 2t^2\,\hat j\) m. Find its velocity and acceleration at \(t = 1\) s.`,
          steps: [R`\(\vec v = \dfrac{d\vec r}{dt} = 3\hat i + 4t\,\hat j\), so at \(t = 1\): \(3\hat i + 4\hat j\), with magnitude 5 m/s.`, R`\(\vec a = \dfrac{d\vec v}{dt} = 4\hat j\).`],
          ans: R`\(\vec v = 3\hat i + 4\hat j\) (5 m/s), \(\vec a = 4\hat j\,\text{m/s}^2\)` },
        { topic: R`Projectile motion`, level: 'Main', q: R`A projectile is launched at 40 m/s at \(30^\circ\) to the horizontal. Find its time of flight, maximum height and range. (\(g = 10\,\text{m/s}^2\))`,
          steps: [R`\(T = \dfrac{2(40)(1/2)}{10} = 4\) s.`, R`\(H = \dfrac{1600\cdot(1/4)}{20} = 20\) m.`, R`\(R = \dfrac{1600\sin60^\circ}{10} = 160\cdot\dfrac{\sqrt3}{2} = 80\sqrt3\) m.`],
          ans: R`\(T = 4\) s, \(H = 20\) m, \(R = 80\sqrt3 \approx 138.6\) m` },
        { topic: R`Uniform circular motion`, level: 'Main', q: R`A particle moves in a circle of radius 0.5 m at 2 revolutions per second. Find its speed and centripetal acceleration.`,
          steps: [R`\(\omega = 2\pi f = 4\pi\) rad/s.`, R`\(v = \omega r = 2\pi \approx 6.28\) m/s.`, R`\(a = \omega^2 r = 16\pi^2(0.5) = 8\pi^2\).`],
          ans: R`\(v \approx 6.28\) m/s, \(a \approx 79\,\text{m/s}^2\) toward the centre` }
      ],
      practice: [
        { q: R`A car starts from rest with acceleration 2 m/s². How far does it travel in the 5th second?`, ans: R`\(s_5 = 0 + \tfrac{2}{2}(2\cdot5 - 1) = 9\) m` },
        { q: R`Rain falls vertically at 4 m/s. A man walks at 3 m/s. At what angle to the vertical should he hold his umbrella?`, ans: R`The rain's speed relative to him is 5 m/s, at \(\tan^{-1}(3/4) \approx 37^\circ\) from the vertical, so he tilts the umbrella forward by \(37^\circ\).` }
      ]
    },
    {
      id: 'laws-of-motion', title: 'Laws of Motion', cls: 11,
      syllabus: [R`Force & inertia`, R`Newton's laws of motion`, R`Momentum & impulse`, R`Conservation of linear momentum`, R`Equilibrium of concurrent forces`, R`Static & kinetic friction`, R`Rolling friction`, R`Dynamics of uniform circular motion`, R`Banking of roads`],
      concepts: [
        { h: R`Free-body diagrams`, body: R`Isolate each body. Draw every force acting on it (weight, normal, tension, friction, applied). Then write \(\sum \vec F = m\vec a\) along convenient axes.` },
        { h: R`Friction`, body: R`Static friction adjusts itself, up to a maximum of \(\mu_s N\). Once the body slides, kinetic friction is \(\mu_k N\), with \(\mu_k < \mu_s\).` },
        { h: R`Pseudo force`, body: R`In a frame accelerating with \(\vec a_0\), add a pseudo force \(-m\vec a_0\) to every body. This is how lift problems work: apparent weight \(= m(g \pm a)\).` },
        { h: R`Circular motion`, body: R`Some real force must supply the centripetal force \(mv^2/r\): tension, friction, gravity or a component of the normal force (banking).` }
      ],
      formulas: [
        R`\(\vec F = \dfrac{d\vec p}{dt} = m\vec a\), impulse \(J = F\Delta t = \Delta p\)`,
        R`Atwood machine: \(a = \dfrac{(m_1 - m_2)g}{m_1 + m_2},\quad T = \dfrac{2m_1m_2 g}{m_1 + m_2}\)`,
        R`Incline with friction (sliding down): \(a = g(\sin\theta - \mu\cos\theta)\)`,
        R`Maximum speed on a flat curve: \(v = \sqrt{\mu r g}\)`,
        R`Banked road: \(v_{max} = \sqrt{rg\dfrac{\mu + \tan\theta}{1 - \mu\tan\theta}}\); with no friction, \(\tan\theta = \dfrac{v^2}{rg}\)`
      ],
      examples: [
        { topic: R`Force & inertia`, level: 'Main', q: R`Why do standing passengers fall forward when a bus brakes suddenly?`,
          steps: [R`Friction stops their feet along with the bus.`, R`The upper body tends to keep moving forward (inertia of motion, Newton's first law).`],
          ans: R`Because of inertia: the body resists the change in its state of motion. Mass is the measure of inertia.` },
        { topic: R`Newton's laws of motion`, level: 'Main', q: R`Masses of 5 kg and 3 kg hang from the two ends of a light string over a frictionless pulley. Find the acceleration and the tension. (\(g = 10\))`,
          steps: [R`\(a = \dfrac{(5-3)\cdot10}{5+3} = 2.5\,\text{m/s}^2\).`, R`\(T = \dfrac{2\cdot5\cdot3\cdot10}{8} = 37.5\) N.`, R`Check with the 3 kg block: \(T - 30 = 3(2.5)\), so \(T = 37.5\) N ✓`],
          ans: R`\(a = 2.5\,\text{m/s}^2\), \(T = 37.5\) N` },
        { topic: R`Momentum & impulse`, level: 'Main', q: R`A 0.15 kg ball arrives at 20 m/s and is hit straight back at 30 m/s. The bat is in contact for 0.01 s. Find the impulse and the average force.`,
          steps: [R`Take the return direction as positive: \(\Delta p = 0.15(30 - (-20)) = 7.5\) N s.`, R`\(F = \Delta p/\Delta t = 7.5/0.01\).`],
          ans: R`Impulse 7.5 N s, average force 750 N` },
        { topic: R`Conservation of linear momentum`, level: 'Main', q: R`A 4 kg rifle fires a 20 g bullet at 400 m/s. Find the rifle's recoil speed.`,
          steps: [R`The initial momentum is zero, so \(0 = 0.02(400) + 4V\).`, R`\(V = -8/4\).`],
          ans: R`2 m/s, opposite to the bullet` },
        { topic: R`Equilibrium of concurrent forces`, level: 'Main', q: R`A 10 kg mass hangs from two strings that make \(30^\circ\) and \(60^\circ\) with the horizontal. Find the tensions. (\(g = 10\))`,
          steps: [R`Horizontal: \(T_1\cos30^\circ = T_2\cos60^\circ\), so \(T_2 = \sqrt3\,T_1\).`, R`Vertical: \(T_1\sin30^\circ + T_2\sin60^\circ = 100\), so \(\tfrac12T_1 + \tfrac32T_1 = 100\).`, R`\(T_1 = 50\) N, \(T_2 = 50\sqrt3\) N.`],
          ans: R`50 N (in the \(30^\circ\) string) and \(\approx 86.6\) N (in the \(60^\circ\) string)` },
        { topic: R`Static & kinetic friction`, level: 'Main', q: R`A block slides down a \(30^\circ\) incline with \(\mu_k = 0.2\). Find its acceleration. (\(g = 10\))`,
          steps: [R`Along the incline: \(mg\sin\theta - \mu mg\cos\theta = ma\).`, R`\(a = 10(0.5 - 0.2\times0.866)\).`, R`\(a = 10(0.5 - 0.173) = 3.27\,\text{m/s}^2\).`],
          ans: R`\(\approx 3.27\,\text{m/s}^2\)` },
        { topic: R`Rolling friction`, level: 'Main', q: R`A 1000 kg car on a level road has a coefficient of rolling friction of 0.02. What force keeps it moving at constant speed? (\(g = 10\))`,
          steps: [R`At constant velocity, the driving force equals the rolling friction.`, R`\(F = \mu_r mg = 0.02\times1000\times10\).`],
          ans: R`200 N. Rolling friction is much smaller than sliding friction, which is why wheels and ball bearings help.` },
        { topic: R`Dynamics of uniform circular motion`, level: 'Main', q: R`A 1000 kg car crosses a hump (part of a circle of radius 40 m) at 10 m/s. Find the normal force at the top, and the speed at which the car would lose contact. (\(g = 10\))`,
          steps: [R`At the top: \(mg - N = \dfrac{mv^2}{r}\), so \(N = 1000(10 - 100/40)\).`, R`Contact is lost when \(N = 0\): \(v = \sqrt{gr} = \sqrt{400}\).`],
          ans: R`\(N = 7500\) N; contact is lost at 20 m/s` },
        { topic: R`Banking of roads`, level: 'Main', q: R`A curve of radius 100 m is designed for 20 m/s. At what angle should it be banked so that no friction is needed? (\(g = 10\))`,
          steps: [R`\(\tan\theta = \dfrac{v^2}{rg} = \dfrac{400}{1000} = 0.4\).`],
          ans: R`\(\theta = \tan^{-1}0.4 \approx 21.8^\circ\)` }
      ],
      practice: [
        { q: R`A 60 kg person stands in a lift accelerating upward at 2 m/s². What does the scale read? (\(g = 10\))`, ans: R`\(N = m(g + a) = 60 \times 12 = 720\) N` },
        { q: R`Find the maximum safe speed on a flat circular road of radius 50 m with \(\mu = 0.5\). (\(g = 10\))`, ans: R`\(v = \sqrt{0.5\cdot50\cdot10} = \sqrt{250} \approx 15.8\) m/s` }
      ]
    },
    {
      id: 'work-energy-power', title: 'Work, Energy and Power', cls: 11,
      syllabus: [R`Work done by constant & variable force`, R`Kinetic & potential energy`, R`Work–energy theorem`, R`Power`, R`Potential energy of a spring`, R`Conservation of mechanical energy`, R`Conservative & non-conservative forces`, R`Motion in a vertical circle`, R`Elastic & inelastic collisions in 1D & 2D`],
      concepts: [
        { h: R`Work–energy theorem`, body: R`The work done by <i>all</i> forces equals the change in kinetic energy: \(W_{net} = \Delta K\). This holds even when the forces vary.` },
        { h: R`Conservative forces`, body: R`For forces such as gravity and spring forces, work does not depend on the path, and mechanical energy is conserved. Friction is non-conservative.` },
        { h: R`Collisions`, body: R`Momentum is always conserved in a collision. Kinetic energy is conserved only in elastic collisions. The coefficient of restitution is \(e = \dfrac{\text{speed of separation}}{\text{speed of approach}}\).` },
        { h: R`Vertical circle`, body: R`To complete a vertical circle on a string, the speed at the lowest point must be at least \(\sqrt{5gR}\), and at the top at least \(\sqrt{gR}\).` }
      ],
      formulas: [
        R`\(W = \vec F\cdot\vec s = Fs\cos\theta,\quad W = \int \vec F\cdot d\vec s\)`,
        R`\(K = \tfrac12 mv^2 = \dfrac{p^2}{2m},\quad U_{spring} = \tfrac12 kx^2\)`,
        R`\(P = \dfrac{dW}{dt} = \vec F\cdot\vec v\)`,
        R`1D elastic collision: \(v_1 = \dfrac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2}\)`,
        R`KE lost in a perfectly inelastic collision: \(\Delta K = \dfrac{m_1m_2}{2(m_1 + m_2)}(u_1 - u_2)^2\)`
      ],
      examples: [
        { topic: R`Work done by constant & variable force`, level: 'Main', q: R`A force \(F = 3x^2\) N acts along the x-axis. Find the work it does as a body moves from \(x = 1\) m to \(x = 2\) m.`,
          steps: [R`For a variable force, \(W = \int F\,dx = \int_1^2 3x^2\,dx\).`, R`\(= [x^3]_1^2 = 8 - 1\).`],
          ans: R`7 J` },
        { topic: R`Kinetic & potential energy`, level: 'Main', q: R`Bodies of mass 1 kg and 4 kg have equal kinetic energy. Find the ratio of their momenta.`,
          steps: [R`\(p = \sqrt{2mK}\), so with equal \(K\), \(p \propto \sqrt m\).`, R`\(p_1 : p_2 = \sqrt1 : \sqrt4\).`],
          ans: R`1 : 2` },
        { topic: R`Work–energy theorem`, level: 'Main', q: R`A 2 kg block sliding at 10 m/s on a rough floor (\(\mu = 0.5\)) comes to rest. How far does it slide? (\(g = 10\))`,
          steps: [R`Work–energy: the work done by friction equals the change in KE: \(-\mu mg\,d = 0 - \tfrac12mv^2\).`, R`\(d = \dfrac{v^2}{2\mu g} = \dfrac{100}{10}\).`],
          ans: R`10 m` },
        { topic: R`Power`, level: 'Main', q: R`A car moves at a constant 20 m/s against a total resistive force of 500 N. What power does its engine deliver?`,
          steps: [R`At constant speed, the engine force equals the resistance, 500 N.`, R`\(P = Fv = 500\times20\).`],
          ans: R`10 kW` },
        { topic: R`Potential energy of a spring`, level: 'Main', q: R`A spring (\(k = 200\) N/m) is compressed by 0.1 m and then launches a 0.5 kg block across a smooth floor. Find the block's speed.`,
          steps: [R`Energy stored: \(\tfrac12(200)(0.1)^2 = 1\) J.`, R`All of it becomes kinetic energy: \(\tfrac12(0.5)v^2 = 1\).`, R`\(v^2 = 4\).`],
          ans: R`\(v = 2\) m/s` },
        { topic: R`Conservation of mechanical energy`, level: 'Main', q: R`A ball is dropped from a height of 20 m. Find its speed when it is 5 m above the ground. (\(g = 10\))`,
          steps: [R`Mechanical energy is conserved, so the fall of 15 m turns PE into KE: \(\tfrac12v^2 = g(15)\).`, R`\(v = \sqrt{300}\).`],
          ans: R`\(\approx 17.3\) m/s` },
        { topic: R`Conservative & non-conservative forces`, level: 'Main', q: R`A 1 kg block slides down a rough curved track from a height of 5 m and reaches the bottom at 8 m/s. Find the work done by friction. (\(g = 10\))`,
          steps: [R`PE lost \(= 1\times10\times5 = 50\) J. KE gained \(= \tfrac12(1)(64) = 32\) J.`, R`Friction is non-conservative and took away the difference.`],
          ans: R`\(W_f = -18\) J` },
        { topic: R`Motion in a vertical circle`, level: 'Advanced', q: R`A 0.2 kg stone on a 0.5 m string moves in a vertical circle, with speed 3 m/s at the top. Find the tension at the top and at the bottom. (\(g = 10\))`,
          steps: [R`Top: \(T + mg = \dfrac{mv^2}{r}\), so \(T = \dfrac{0.2\times9}{0.5} - 2 = 1.6\) N.`, R`Energy: \(v_b^2 = v_t^2 + 4gr = 9 + 20 = 29\).`, R`Bottom: \(T = mg + \dfrac{mv_b^2}{r} = 2 + \dfrac{0.2\times29}{0.5} = 13.6\) N.`],
          ans: R`1.6 N at the top, 13.6 N at the bottom (they differ by \(6mg = 12\) N)` },
        { topic: R`Elastic & inelastic collisions in 1D & 2D`, level: 'Main', q: R`A 2 kg ball moving at 6 m/s hits a 4 kg ball at rest and sticks to it. Find the common velocity and the kinetic energy lost.`,
          steps: [R`Momentum: \(2(6) = 6v\), so \(v = 2\) m/s.`, R`Initial KE \(= \tfrac12(2)(36) = 36\) J.`, R`Final KE \(= \tfrac12(6)(4) = 12\) J.`, R`Loss \(= 36 - 12\).`],
          ans: R`\(v = 2\) m/s, KE lost \(= 24\) J` }
      ],
      practice: [
        { q: R`What is the minimum speed at the bottom for a stone on a 1 m string to complete a vertical circle? (\(g = 10\))`, ans: R`\(\sqrt{5gR} = \sqrt{50} \approx 7.07\) m/s` },
        { q: R`A pump lifts 100 kg of water through 10 m in 10 s. Find its power. (\(g = 10\))`, ans: R`\(P = mgh/t = 100\cdot10\cdot10/10 = 1000\) W` }
      ]
    },
    {
      id: 'rotational-motion', title: 'Rotational Motion', cls: 11,
      syllabus: [R`Centre of mass of two-particle & rigid bodies`, R`Torque`, R`Angular momentum & its conservation`, R`Moment of inertia & radius of gyration`, R`Parallel & perpendicular axis theorems`, R`Moments of inertia of simple bodies`, R`Equilibrium of rigid bodies`, R`Rigid body rotation & equations of rotational motion`, R`Rolling motion`],
      concepts: [
        { h: R`Linear vs rotational`, body: R`Each linear quantity has a rotational partner: \(x \to \theta\), \(v \to \omega\), \(m \to I\), \(F \to \tau\), \(p \to L\). The equations of motion have the same form.` },
        { h: R`Moment of inertia`, body: R`\(I = \sum m r^2\) depends on the axis. The parallel axis theorem is \(I = I_{cm} + Md^2\). The perpendicular axis theorem, for flat bodies only, is \(I_z = I_x + I_y\).` },
        { h: R`Rolling without slipping`, body: R`\(v_{cm} = R\omega\). Total KE \(= \tfrac12 Mv^2(1 + k^2/R^2)\). For the same height, the body with the smallest \(k^2/R^2\) reaches the bottom first: solid sphere, then disc, then ring.` },
        { h: R`Conservation of angular momentum`, body: R`If the net external torque is zero, \(I\omega\) is constant. A skater who pulls in their arms lowers \(I\) and spins faster.` }
      ],
      formulas: [
        R`\(\tau = rF\sin\theta = I\alpha,\quad L = I\omega,\quad \tau = \dfrac{dL}{dt}\)`,
        R`Ring \(MR^2\), disc \(\tfrac12MR^2\), solid sphere \(\tfrac25MR^2\), hollow sphere \(\tfrac23MR^2\), rod about its centre \(\tfrac1{12}ML^2\)`,
        R`Rolling down an incline: \(a = \dfrac{g\sin\theta}{1 + k^2/R^2},\quad v = \sqrt{\dfrac{2gh}{1 + k^2/R^2}}\)`,
        R`\(K_{rot} = \tfrac12 I\omega^2\), \(P = \tau\omega\)`
      ],
      examples: [
        { topic: R`Centre of mass of two-particle & rigid bodies`, level: 'Main', q: R`Masses of 2 kg at \(x = 0\) and 3 kg at \(x = 5\) m lie on the x-axis. Find their centre of mass.`,
          steps: [R`\(x_{cm} = \dfrac{m_1x_1 + m_2x_2}{m_1 + m_2} = \dfrac{0 + 15}{5}\).`],
          ans: R`\(x = 3\) m (closer to the heavier mass)` },
        { topic: R`Torque`, level: 'Main', q: R`A disc (mass 2 kg, radius 0.5 m) is free to rotate about its axis. A force of 10 N is applied tangentially at its rim. Find the angular acceleration.`,
          steps: [R`\(I = \tfrac12(2)(0.5)^2 = 0.25\,\text{kg m}^2\).`, R`\(\tau = FR = 10(0.5) = 5\) N m.`, R`\(\alpha = \tau/I = 5/0.25\).`],
          ans: R`\(\alpha = 20\,\text{rad/s}^2\)` },
        { topic: R`Angular momentum & its conservation`, level: 'Advanced', q: R`A disc (\(I = 2\,\text{kg m}^2\)) spins at 10 rad/s. A second disc (\(I = 3\,\text{kg m}^2\)) at rest is dropped onto it on the same axis, and they rotate together. Find the final \(\omega\) and the KE lost.`,
          steps: [R`Angular momentum is conserved: \(2(10) = 5\omega\), so \(\omega = 4\) rad/s.`, R`KE before \(= \tfrac12(2)(100) = 100\) J. KE after \(= \tfrac12(5)(16) = 40\) J.`],
          ans: R`\(\omega = 4\) rad/s; 60 J is lost (to friction between the discs)` },
        { topic: R`Moment of inertia & radius of gyration`, level: 'Main', q: R`Find the moment of inertia and radius of gyration of a 2 kg disc of radius 0.2 m about its central axis.`,
          steps: [R`\(I = \tfrac12MR^2 = \tfrac12(2)(0.04) = 0.04\,\text{kg m}^2\).`, R`\(I = Mk^2\), so \(k = \sqrt{0.04/2} = R/\sqrt2\).`],
          ans: R`\(I = 0.04\,\text{kg m}^2\), \(k \approx 0.141\) m` },
        { topic: R`Parallel & perpendicular axis theorems`, level: 'Main', q: R`Find the moment of inertia of a disc about (a) a diameter (b) a tangent in its plane.`,
          steps: [R`Perpendicular axes: \(I_z = I_x + I_y = 2I_d\), so \(I_d = \tfrac12\cdot\tfrac12MR^2 = \tfrac14MR^2\).`, R`Parallel axes: \(I_t = \tfrac14MR^2 + MR^2\).`],
          ans: R`(a) \(\tfrac14MR^2\) (b) \(\tfrac54MR^2\)` },
        { topic: R`Moments of inertia of simple bodies`, level: 'Main', q: R`Find the moment of inertia of a uniform rod (3 kg, 2 m) about an axis through one end, perpendicular to the rod.`,
          steps: [R`About an end: \(I = \tfrac13ML^2 = \tfrac13(3)(4)\).`, R`Check: \(\tfrac1{12}ML^2 + M(L/2)^2 = 1 + 3 = 4\) ✓`],
          ans: R`\(4\,\text{kg m}^2\)` },
        { topic: R`Equilibrium of rigid bodies`, level: 'Main', q: R`A uniform 4 m plank of 20 kg rests on supports at its two ends. A 60 kg person stands 1 m from the left end. Find the support forces. (\(g = 10\))`,
          steps: [R`Torques about the left end: \(R_B(4) = 200(2) + 600(1)\), so \(R_B = 250\) N.`, R`Forces: \(R_A + R_B = 800\), so \(R_A = 550\) N.`],
          ans: R`Left support 550 N, right support 250 N` },
        { topic: R`Rigid body rotation & equations of rotational motion`, level: 'Main', q: R`A wheel speeds up uniformly from rest to 20 rad/s in 5 s. Find \(\alpha\) and the number of revolutions made.`,
          steps: [R`\(\alpha = 20/5 = 4\,\text{rad/s}^2\).`, R`\(\theta = \tfrac12\alpha t^2 = \tfrac12(4)(25) = 50\) rad.`, R`Revolutions \(= 50/2\pi\).`],
          ans: R`\(\alpha = 4\,\text{rad/s}^2\), about 7.96 revolutions` },
        { topic: R`Rolling motion`, level: 'Main', q: R`A solid sphere rolls without slipping from rest down an incline of height 7 m. Find its speed at the bottom. (\(g = 10\))`,
          steps: [R`For a solid sphere, \(k^2/R^2 = 2/5\).`, R`\(v = \sqrt{\dfrac{2gh}{1 + 2/5}} = \sqrt{\dfrac{10gh}{7}}\).`, R`\(v = \sqrt{\dfrac{10\cdot10\cdot7}{7}} = \sqrt{100}\).`],
          ans: R`\(10\) m/s` }
      ],
      practice: [
        { q: R`Find the moment of inertia of a ring about a tangent lying in its own plane.`, ans: R`About a diameter it is \(\tfrac12MR^2\). By the parallel axis theorem, \(I = \tfrac12MR^2 + MR^2 = \tfrac32MR^2\).` },
        { q: R`A skater spinning at 2 rev/s halves their moment of inertia. What is their new angular speed?`, ans: R`\(I\omega\) is constant, so \(\omega\) doubles to 4 rev/s.` }
      ]
    },
    {
      id: 'gravitation', title: 'Gravitation', cls: 11,
      syllabus: [R`Universal law of gravitation`, R`Acceleration due to gravity & its variation with altitude and depth`, R`Kepler's laws of planetary motion`, R`Gravitational potential energy & potential`, R`Escape velocity`, R`Motion of a satellite`, R`Orbital velocity, time period & energy of a satellite`],
      concepts: [
        { h: R`Variation of g`, body: R`\(g\) decreases with height and with depth, and is maximum at the surface. Near the surface, \(g_h \approx g(1 - 2h/R)\) and \(g_d = g(1 - d/R)\).` },
        { h: R`Kepler's laws`, body: R`(1) Orbits are ellipses with the Sun at one focus. (2) The line joining planet and Sun sweeps equal areas in equal times, because angular momentum is conserved. (3) \(T^2 \propto a^3\).` },
        { h: R`Satellite energies`, body: R`For a circular orbit: \(KE = \dfrac{GMm}{2r}\), \(PE = -\dfrac{GMm}{r}\), total \(E = -\dfrac{GMm}{2r}\). A negative total energy means the satellite is bound.` }
      ],
      formulas: [
        R`\(F = \dfrac{Gm_1m_2}{r^2},\quad g = \dfrac{GM}{R^2}\)`,
        R`\(g_h = \dfrac{g}{(1 + h/R)^2},\quad g_d = g\left(1 - \dfrac{d}{R}\right)\)`,
        R`\(v_e = \sqrt{\dfrac{2GM}{R}} = \sqrt{2gR},\quad v_o = \sqrt{\dfrac{GM}{r}}\)`,
        R`\(T = 2\pi\sqrt{\dfrac{r^3}{GM}},\quad V = -\dfrac{GM}{r},\quad U = -\dfrac{GMm}{r}\)`
      ],
      examples: [
        { topic: R`Universal law of gravitation`, level: 'Main', q: R`Masses \(m\) and \(4m\) are a distance \(d\) apart. Where between them is the net gravitational field zero?`,
          steps: [R`At distance \(x\) from \(m\): \(\dfrac{Gm}{x^2} = \dfrac{G(4m)}{(d - x)^2}\).`, R`\(\dfrac{d - x}{x} = 2\), so \(x = d/3\).`],
          ans: R`At \(d/3\) from the smaller mass` },
        { topic: R`Acceleration due to gravity & its variation with altitude and depth`, level: 'Main', q: R`Find \(g\) at (a) a height equal to Earth's radius and (b) a depth of \(R/2\).`,
          steps: [R`(a) \(g_h = \dfrac{g}{(1 + 1)^2} = \dfrac{g}{4}\).`, R`(b) \(g_d = g(1 - \tfrac12) = \dfrac{g}{2}\).`],
          ans: R`(a) \(g/4\), (b) \(g/2\)` },
        { topic: R`Kepler's laws of planetary motion`, level: 'Main', q: R`At perihelion a planet is \(1\times10^{11}\) m from the Sun, moving at \(6\times10^4\) m/s. Find its speed at aphelion, \(1.5\times10^{11}\) m away.`,
          steps: [R`Kepler's second law, which is conservation of angular momentum: \(v_1r_1 = v_2r_2\).`, R`\(v_2 = \dfrac{6\times10^4\times1}{1.5}\).`],
          ans: R`\(4\times10^4\) m/s (planets move fastest when nearest the Sun)` },
        { topic: R`Gravitational potential energy & potential`, level: 'Main', q: R`How much energy is needed to raise a 100 kg satellite from Earth's surface to a height equal to Earth's radius? (\(g = 10\), \(R = 6.4\times10^6\) m)`,
          steps: [R`\(\Delta U = GMm\left(\dfrac1R - \dfrac1{2R}\right) = \dfrac{GMm}{2R} = \dfrac{mgR}{2}\).`, R`\(= \dfrac{100\times10\times6.4\times10^6}{2}\).`],
          ans: R`\(3.2\times10^9\) J` },
        { topic: R`Escape velocity`, level: 'Main', q: R`Calculate the escape velocity from Earth. (\(g = 9.8\,\text{m/s}^2\), \(R = 6.4\times10^6\) m)`,
          steps: [R`\(v_e = \sqrt{2gR} = \sqrt{2\times9.8\times6.4\times10^6}\).`, R`\(= \sqrt{1.254\times10^8}\).`, R`\(\approx 1.12\times10^4\) m/s.`],
          ans: R`\(\approx 11.2\) km/s` },
        { topic: R`Motion of a satellite`, level: 'Main', q: R`Why does an astronaut in an orbiting spacecraft feel weightless, even though gravity there is almost as strong as on Earth?`,
          steps: [R`The astronaut and the spacecraft fall freely together with the same acceleration \(g'\).`, R`So the floor pushes on the astronaut with zero normal force, and weight is felt through the normal force.`],
          ans: R`Both are in free fall, so the apparent weight is zero. Gravity is not zero; it provides the centripetal force.` },
        { topic: R`Orbital velocity, time period & energy of a satellite`, level: 'Main', q: R`A satellite orbits at a height equal to Earth's radius. Find its orbital speed and period. (\(g = 10\), \(R = 6.4\times10^6\) m)`,
          steps: [R`\(r = 2R\): \(v = \sqrt{\dfrac{GM}{2R}} = \sqrt{\dfrac{gR}{2}} = \sqrt{3.2\times10^7}\).`, R`\(v \approx 5.66\) km/s.`, R`\(T = \dfrac{2\pi r}{v} = \dfrac{2\pi(1.28\times10^7)}{5657}\).`],
          ans: R`\(v \approx 5.66\) km/s, \(T \approx 1.42\times10^4\) s \(\approx 3.95\) h` }
      ],
      practice: [
        { q: R`A satellite's orbital radius becomes 4 times larger. What happens to its period?`, ans: R`\(T \propto r^{3/2}\), so \(T\) becomes \(4^{3/2} = 8\) times larger.` },
        { q: R`What is the ratio of kinetic energy to total energy for a satellite in a circular orbit?`, ans: R`\(KE : E = \dfrac{GMm}{2r} : \left(-\dfrac{GMm}{2r}\right) = -1\)` }
      ]
    },
    {
      id: 'solids-liquids', title: 'Properties of Solids and Liquids', cls: 11,
      syllabus: [R`Elastic behaviour, stress–strain, Hooke's law`, R`Young's, bulk & shear moduli`, R`Pressure due to a fluid column`, R`Pascal's law`, R`Viscosity, Stokes' law, terminal velocity`, R`Streamline & turbulent flow, Reynolds number`, R`Bernoulli's principle`, R`Surface tension & surface energy, capillary rise`, R`Heat, temperature, thermal expansion, specific heat, calorimetry, latent heat`, R`Conduction, convection & radiation`],
      concepts: [
        { h: R`Elasticity`, body: R`Within the elastic limit, stress \(\propto\) strain (Hooke's law). Young's modulus applies to change in length, the bulk modulus to change in volume, and the shear modulus to change in shape.` },
        { h: R`Fluid flow`, body: R`Continuity: \(A_1v_1 = A_2v_2\). Bernoulli: \(P + \tfrac12\rho v^2 + \rho gh\) is constant along a streamline for an ideal fluid.` },
        { h: R`Surface tension`, body: R`Molecules at the surface pull on each other, so the surface behaves like a stretched membrane. A soap bubble has <b>two</b> surfaces, so its excess pressure is \(4T/r\). A drop has one surface, giving \(2T/r\).` },
        { h: R`Heat transfer`, body: R`Conduction rate: \(\dfrac{dQ}{dt} = \dfrac{kA\Delta T}{L}\). Stefan's law: \(E = \sigma e A T^4\). Wien's law: \(\lambda_m T = b\). Newton's law of cooling: the cooling rate is proportional to \(T - T_0\).` }
      ],
      formulas: [
        R`\(Y = \dfrac{FL}{A\Delta L},\quad B = -\dfrac{\Delta P}{\Delta V/V}\)`,
        R`Stokes: \(F = 6\pi\eta r v\); terminal velocity \(v_t = \dfrac{2r^2(\rho - \sigma)g}{9\eta}\)`,
        R`Torricelli: \(v = \sqrt{2gh}\)`,
        R`Capillary rise: \(h = \dfrac{2T\cos\theta}{r\rho g}\)`,
        R`Thermal expansion: \(\Delta L = L\alpha\Delta T,\quad \beta = 2\alpha,\quad \gamma = 3\alpha\)`,
        R`Calorimetry: \(Q = mc\Delta T\), \(Q = mL\)`
      ],
      examples: [
        { topic: R`Elastic behaviour, stress–strain, Hooke's law`, level: 'Main', q: R`A wire under a stress of \(2\times10^8\) Pa has a strain of \(10^{-3}\). Find Young's modulus and the elastic energy stored per unit volume.`,
          steps: [R`Hooke's law: \(Y = \dfrac{\text{stress}}{\text{strain}} = 2\times10^{11}\) Pa.`, R`Energy density \(= \tfrac12\times\text{stress}\times\text{strain} = \tfrac12(2\times10^8)(10^{-3})\).`],
          ans: R`\(Y = 2\times10^{11}\) Pa; \(10^5\,\text{J/m}^3\)` },
        { topic: R`Young's, bulk & shear moduli`, level: 'Main', q: R`A steel wire 2 m long with cross-section \(10^{-6}\,\text{m}^2\) is stretched by 100 N. Find the extension. (\(Y = 2\times10^{11}\) Pa)`,
          steps: [R`\(\Delta L = \dfrac{FL}{AY}\).`, R`\(= \dfrac{100\times2}{10^{-6}\times2\times10^{11}} = \dfrac{200}{2\times10^5}\).`],
          ans: R`\(10^{-3}\) m = 1 mm` },
        { topic: R`Pressure due to a fluid column`, level: 'Main', q: R`Find the absolute pressure at the bottom of a 10 m deep pool. (\(P_0 = 1.01\times10^5\) Pa, \(g = 10\))`,
          steps: [R`\(P = P_0 + \rho gh = 1.01\times10^5 + 1000(10)(10)\).`],
          ans: R`\(2.01\times10^5\) Pa (about 2 atm)` },
        { topic: R`Pascal's law`, level: 'Main', q: R`In a hydraulic lift, the small piston has area 10 cm² and the large one 1000 cm². What force on the small piston lifts a 1000 kg car? (\(g = 10\))`,
          steps: [R`Pascal's law: the pressure is the same on both pistons, so \(\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}\).`, R`\(F_1 = 10^4\times\dfrac{10}{1000}\).`],
          ans: R`100 N` },
        { topic: R`Viscosity, Stokes' law, terminal velocity`, level: 'Main', q: R`Find the terminal velocity of a water droplet of radius 0.1 mm falling through air. (\(\eta_{air} = 1.8\times10^{-5}\) Pa s, ignore the air's density, \(g = 10\))`,
          steps: [R`\(v_t = \dfrac{2r^2\rho g}{9\eta} = \dfrac{2(10^{-8})(1000)(10)}{9(1.8\times10^{-5})}\).`, R`\(= \dfrac{2\times10^{-4}}{1.62\times10^{-4}}\).`],
          ans: R`\(\approx 1.23\) m/s` },
        { topic: R`Streamline & turbulent flow, Reynolds number`, level: 'Main', q: R`Water (\(\eta = 10^{-3}\) Pa s) flows at 0.5 m/s through a 2 cm pipe. Is the flow streamline or turbulent?`,
          steps: [R`\(Re = \dfrac{\rho vD}{\eta} = \dfrac{1000\times0.5\times0.02}{10^{-3}} = 10{,}000\).`, R`Roughly, \(Re < 2000\) is streamline and \(Re > 3000\) is turbulent.`],
          ans: R`\(Re = 10^4\), so the flow is turbulent` },
        { topic: R`Bernoulli's principle`, level: 'Main', q: R`Water flows through a horizontal pipe that narrows from 4 cm² to 2 cm². The speed in the wide part is 2 m/s. Find the pressure difference.`,
          steps: [R`Continuity: \(v_2 = 2\times4/2 = 4\) m/s.`, R`Bernoulli: \(P_1 - P_2 = \tfrac12\rho(v_2^2 - v_1^2) = 500(16 - 4)\).`],
          ans: R`6000 Pa, with lower pressure in the narrow part` },
        { topic: R`Surface tension & surface energy, capillary rise`, level: 'Main', q: R`Find the excess pressure inside a soap bubble of radius 1 cm. (\(T = 0.03\) N/m)`,
          steps: [R`A bubble has two surfaces: \(\Delta P = \dfrac{4T}{r}\).`, R`\(= \dfrac{4\times0.03}{0.01}\).`],
          ans: R`12 Pa` },
        { topic: R`Heat, temperature, thermal expansion, specific heat, calorimetry, latent heat`, level: 'Main', q: R`100 g of ice at 0 °C is mixed with 100 g of water at 80 °C. Find the final temperature. (\(L_f = 80\) cal/g, \(c_{water} = 1\) cal/g °C)`,
          steps: [R`Heat needed to melt all the ice \(= 100\times80 = 8000\) cal.`, R`Heat the water gives out cooling to 0 °C \(= 100\times1\times80 = 8000\) cal.`, R`These are exactly equal.`],
          ans: R`0 °C, with all the ice just melted (200 g of water)` },
        { topic: R`Conduction, convection & radiation`, level: 'Main', q: R`A copper rod (\(k = 400\) W/m K) is 1 m long with cross-section \(10^{-4}\) m². Its ends are at 100 °C and 0 °C. Find the rate of heat flow.`,
          steps: [R`\(\dfrac{dQ}{dt} = \dfrac{kA\Delta T}{L} = \dfrac{400\times10^{-4}\times100}{1}\).`],
          ans: R`4 W` }
      ],
      practice: [
        { q: R`Water flows out of a small hole 5 m below the surface in a large tank. What is its speed? (\(g = 10\))`, ans: R`\(v = \sqrt{2gh} = 10\) m/s` },
        { q: R`How high does water rise in a capillary of radius 0.5 mm? (\(T = 0.07\) N/m, \(\theta = 0\), \(g = 10\))`, ans: R`\(h = \dfrac{2(0.07)}{5\times10^{-4}\cdot1000\cdot10} = 0.028\) m = 2.8 cm` }
      ]
    },
    {
      id: 'thermodynamics', title: 'Thermodynamics', cls: 11,
      syllabus: [R`Thermal equilibrium & zeroth law`, R`Heat, work & internal energy`, R`First law of thermodynamics`, R`Isothermal & adiabatic processes`, R`Second law of thermodynamics`, R`Reversible & irreversible processes`, R`Carnot engine & efficiency`],
      concepts: [
        { h: R`First law`, body: R`\(\Delta Q = \Delta U + \Delta W\). Heat <i>given to</i> the system is positive, and work done <i>by</i> the system is positive. \(U\) is a state function. \(Q\) and \(W\) depend on the path.` },
        { h: R`Processes`, body: R`Isothermal: \(\Delta U = 0\). Adiabatic: \(Q = 0\). Isochoric: \(W = 0\). Isobaric: \(W = P\Delta V\). On a P–V graph, an adiabatic curve is steeper than an isothermal one.` },
        { h: R`Second law`, body: R`No engine converts heat completely into work (Kelvin–Planck). Heat does not flow from cold to hot on its own (Clausius). A Carnot engine has the highest possible efficiency between two temperatures.` }
      ],
      formulas: [
        R`Isothermal work: \(W = nRT\ln\dfrac{V_2}{V_1}\)`,
        R`Adiabatic: \(PV^\gamma = \text{const},\quad W = \dfrac{P_1V_1 - P_2V_2}{\gamma - 1}\)`,
        R`\(\Delta U = nC_v\Delta T,\quad C_p - C_v = R\)`,
        R`Carnot: \(\eta = 1 - \dfrac{T_2}{T_1}\); refrigerator \(\text{COP} = \dfrac{T_2}{T_1 - T_2}\)`
      ],
      examples: [
        { topic: R`Thermal equilibrium & zeroth law`, level: 'Main', q: R`Bodies A and B are each in thermal equilibrium with body C. What can you say about A and B? Why does this matter?`,
          steps: [R`By the zeroth law, A and B are also in thermal equilibrium with each other.`, R`This is what lets temperature be defined, and lets a thermometer (C) compare A and B.`],
          ans: R`A and B are at the same temperature. The zeroth law is the basis of thermometry.` },
        { topic: R`Heat, work & internal energy`, level: 'Main', q: R`A gas expands at a constant pressure of \(10^5\) Pa from 1 L to 3 L. Find the work done by the gas.`,
          steps: [R`\(W = P\Delta V = 10^5\times(3 - 1)\times10^{-3}\).`],
          ans: R`200 J` },
        { topic: R`First law of thermodynamics`, level: 'Main', q: R`2 mol of a monatomic ideal gas is heated at constant volume from 300 K to 400 K. Find \(Q\), \(W\) and \(\Delta U\). (\(R = 8.314\))`,
          steps: [R`Constant volume, so \(W = 0\).`, R`\(\Delta U = nC_v\Delta T = 2\times\tfrac32(8.314)(100) \approx 2494\) J.`, R`First law: \(Q = \Delta U + W\).`],
          ans: R`\(Q = \Delta U \approx 2494\) J, \(W = 0\)` },
        { topic: R`Isothermal & adiabatic processes`, level: 'Main', q: R`1 mol of an ideal gas expands isothermally at 300 K from volume \(V\) to \(2V\). Find the work done by the gas. (\(R = 8.314\))`,
          steps: [R`\(W = nRT\ln 2 = 1\times8.314\times300\times0.693\).`],
          ans: R`\(\approx 1729\) J (the gas absorbs the same amount of heat, since \(\Delta U = 0\))` },
        { topic: R`Second law of thermodynamics`, level: 'Main', q: R`An inventor claims an engine working between 400 K and 300 K that is 30% efficient. Is that possible?`,
          steps: [R`The maximum (Carnot) efficiency is \(1 - 300/400 = 25\%\).`, R`No engine between these temperatures can beat a Carnot engine.`],
          ans: R`No. 30% > 25%, so the claim violates the second law.` },
        { topic: R`Reversible & irreversible processes`, level: 'Main', q: R`What makes a process reversible? Is the free expansion of a gas into a vacuum reversible?`,
          steps: [R`A reversible process is quasi-static (always close to equilibrium) and has no dissipation (no friction or heat loss across a finite temperature difference).`, R`Free expansion happens suddenly and never passes through equilibrium states. The gas never goes back on its own.`],
          ans: R`Free expansion is irreversible. All real processes are irreversible to some extent.` },
        { topic: R`Carnot engine & efficiency`, level: 'Main', q: R`A Carnot engine works between 500 K and 300 K. Find its efficiency.`,
          steps: [R`\(\eta = 1 - \dfrac{300}{500} = 0.4\).`],
          ans: R`40%` }
      ],
      practice: [
        { q: R`A gas absorbs 100 J of heat and does 40 J of work. Find the change in its internal energy.`, ans: R`\(\Delta U = 100 - 40 = 60\) J` },
        { q: R`What is \(\gamma\) for a monatomic ideal gas?`, ans: R`\(C_v = \tfrac32R\), \(C_p = \tfrac52R\), so \(\gamma = 5/3\)` }
      ]
    },
    {
      id: 'kinetic-theory', title: 'Kinetic Theory of Gases', cls: 11,
      syllabus: [R`Equation of state of a perfect gas`, R`Work done on compressing a gas`, R`Assumptions of kinetic theory`, R`Concept of pressure`, R`Kinetic interpretation of temperature`, R`RMS speed of gas molecules`, R`Degrees of freedom`, R`Law of equipartition of energy & specific heats`, R`Mean free path`, R`Avogadro's number`],
      concepts: [
        { h: R`Pressure from collisions`, body: R`Molecules bounce off the walls and transfer momentum, giving \(P = \tfrac13\rho v_{rms}^2\). Temperature measures the average translational KE of the molecules.` },
        { h: R`Equipartition`, body: R`Each degree of freedom carries \(\tfrac12kT\) per molecule. Monatomic gases have 3 degrees of freedom. Rigid diatomic gases have 5, or 7 at high temperature when vibration counts.` },
        { h: R`Molecular speeds`, body: R`\(v_{rms} > v_{avg} > v_{mp}\), in the ratio \(\sqrt3 : \sqrt{8/\pi} : \sqrt2\).` }
      ],
      formulas: [
        R`\(PV = nRT = NkT,\quad P = \tfrac13\rho v_{rms}^2\)`,
        R`\(v_{rms} = \sqrt{\dfrac{3RT}{M}},\quad v_{avg} = \sqrt{\dfrac{8RT}{\pi M}},\quad v_{mp} = \sqrt{\dfrac{2RT}{M}}\)`,
        R`Average KE per molecule \(= \tfrac32kT\)`,
        R`\(C_v = \dfrac{f}{2}R,\quad \gamma = 1 + \dfrac{2}{f}\)`,
        R`Mean free path: \(\lambda = \dfrac{1}{\sqrt2\pi d^2 n}\)`
      ],
      examples: [
        { topic: R`Equation of state of a perfect gas`, level: 'Main', q: R`A gas occupies 4 L at 27 °C and 2 atm. What volume does it occupy at 127 °C and 1 atm?`,
          steps: [R`\(\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}\), using kelvin: 300 K and 400 K.`, R`\(V_2 = \dfrac{2\times4\times400}{1\times300}\).`],
          ans: R`\(\approx 10.7\) L` },
        { topic: R`Work done on compressing a gas`, level: 'Main', q: R`2 mol of an ideal gas at 300 K is compressed isothermally from 10 L to 5 L. Find the work done on the gas. (\(R = 8.314\))`,
          steps: [R`\(W_{on} = nRT\ln\dfrac{V_1}{V_2} = 2(8.314)(300)\ln2\).`],
          ans: R`\(\approx 3458\) J` },
        { topic: R`Assumptions of kinetic theory`, level: 'Main', q: R`Which assumptions of kinetic theory fail at high pressure and low temperature?`,
          steps: [R`The theory assumes the molecules take up no volume and do not attract each other.`, R`At high pressure the molecular volume matters. At low temperature the attractions matter.`],
          ans: R`Negligible molecular size and no intermolecular forces. This is why real gases deviate (van der Waals).` },
        { topic: R`Concept of pressure`, level: 'Main', q: R`A gas has density 1.2 kg/m³ at a pressure of \(10^5\) Pa. Find the rms speed of its molecules.`,
          steps: [R`\(P = \tfrac13\rho v_{rms}^2\), so \(v_{rms} = \sqrt{3P/\rho} = \sqrt{2.5\times10^5}\).`],
          ans: R`500 m/s` },
        { topic: R`Kinetic interpretation of temperature`, level: 'Main', q: R`At what temperature does hydrogen have the same rms speed as oxygen at 320 K?`,
          steps: [R`\(v_{rms} \propto \sqrt{T/M}\), so \(\dfrac{T_H}{2} = \dfrac{320}{32}\).`],
          ans: R`20 K` },
        { topic: R`RMS speed of gas molecules`, level: 'Main', q: R`Find the rms speed of oxygen molecules at 300 K. (\(M = 0.032\) kg/mol)`,
          steps: [R`\(v_{rms} = \sqrt{\dfrac{3\times8.314\times300}{0.032}}\).`, R`\(= \sqrt{233{,}831}\).`],
          ans: R`\(\approx 484\) m/s` },
        { topic: R`Degrees of freedom`, level: 'Main', q: R`How many degrees of freedom does a rigid non-linear triatomic molecule (such as H₂O) have? Find \(C_v\) and \(\gamma\).`,
          steps: [R`3 translational + 3 rotational = 6.`, R`\(C_v = \tfrac62R = 3R\), \(C_p = 4R\).`],
          ans: R`\(f = 6\), \(C_v = 3R\), \(\gamma = 4/3\)` },
        { topic: R`Law of equipartition of energy & specific heats`, level: 'Main', q: R`Find \(C_v\), \(C_p\) and \(\gamma\) for a rigid diatomic gas.`,
          steps: [R`\(f = 5\) (3 translational + 2 rotational).`, R`\(C_v = \tfrac52R\), \(C_p = C_v + R = \tfrac72R\).`, R`\(\gamma = 7/5\).`],
          ans: R`\(C_v = 2.5R\), \(C_p = 3.5R\), \(\gamma = 1.4\)` },
        { topic: R`Mean free path`, level: 'Advanced', q: R`Estimate the mean free path of air molecules at STP. (\(d = 3\times10^{-10}\) m, \(k = 1.38\times10^{-23}\) J/K)`,
          steps: [R`\(n = \dfrac{P}{kT} = \dfrac{1.013\times10^5}{1.38\times10^{-23}\times273} \approx 2.69\times10^{25}\,\text{m}^{-3}\).`, R`\(\lambda = \dfrac{1}{\sqrt2\pi d^2n} = \dfrac{1}{1.414\times3.14\times9\times10^{-20}\times2.69\times10^{25}}\).`],
          ans: R`\(\approx 9.3\times10^{-8}\) m (about 300 molecular diameters)` },
        { topic: R`Avogadro's number`, level: 'Main', q: R`How many gas molecules are there in 1 cm³ at STP?`,
          steps: [R`1 mol (\(6.022\times10^{23}\) molecules) occupies 22,400 cm³ at STP.`, R`\(N = \dfrac{6.022\times10^{23}}{22400}\).`],
          ans: R`\(\approx 2.69\times10^{19}\) (Loschmidt's number)` }
      ],
      practice: [
        { q: R`At the same temperature, what is \(v_{rms}(\text{H}_2) : v_{rms}(\text{O}_2)\)?`, ans: R`\(\sqrt{32/2} = 4 : 1\)` },
        { q: R`Find the average KE of a gas molecule at 300 K. (\(k = 1.38\times10^{-23}\) J/K)`, ans: R`\(\tfrac32kT = 6.21\times10^{-21}\) J` }
      ]
    },
    {
      id: 'oscillations-waves', title: 'Oscillations and Waves', cls: 11,
      syllabus: [R`Periodic motion, time period, frequency`, R`Simple harmonic motion & its equation`, R`Phase`, R`Oscillations of a spring`, R`Energy in SHM`, R`Simple pendulum`, R`Wave motion: longitudinal & transverse waves`, R`Speed of a travelling wave`, R`Displacement relation for a progressive wave`, R`Principle of superposition, reflection of waves`, R`Standing waves in strings & organ pipes`, R`Fundamental mode & harmonics`, R`Beats`],
      concepts: [
        { h: R`SHM`, body: R`The restoring force is proportional to displacement: \(F = -kx\). Then \(x = A\sin(\omega t + \phi)\). The speed is maximum at the mean position and the acceleration is maximum at the extremes.` },
        { h: R`Standing waves`, body: R`They form when two identical waves travel in opposite directions. Nodes are points of zero displacement. In a string fixed at both ends and in an open pipe, every harmonic is present. A closed pipe has only odd harmonics.` },
        { h: R`Beats`, body: R`Two waves with slightly different frequencies make the loudness rise and fall \(|f_1 - f_2|\) times per second.` },
        { h: R`Doppler effect`, body: R`When the source and observer approach each other, the observed frequency rises. When they move apart, it falls.` }
      ],
      formulas: [
        R`\(\omega = \sqrt{k/m},\quad T = 2\pi\sqrt{m/k},\quad T_{pendulum} = 2\pi\sqrt{L/g}\)`,
        R`\(v = \omega\sqrt{A^2 - x^2},\quad E = \tfrac12kA^2\)`,
        R`Wave on a string: \(v = \sqrt{T/\mu}\); sound: \(v = \sqrt{\gamma P/\rho}\)`,
        R`String / open pipe: \(f_n = \dfrac{nv}{2L}\); closed pipe: \(f_n = \dfrac{(2n-1)v}{4L}\)`,
        R`Doppler: \(f' = f\,\dfrac{v \pm v_o}{v \mp v_s}\)`
      ],
      examples: [
        { topic: R`Periodic motion, time period, frequency`, level: 'Main', q: R`A motor turns at 1200 rpm. Find the frequency and period of its rotation.`,
          steps: [R`\(f = 1200/60 = 20\) Hz.`, R`\(T = 1/f\).`],
          ans: R`20 Hz, 0.05 s` },
        { topic: R`Simple harmonic motion & its equation`, level: 'Main', q: R`For \(x = 5\sin(\pi t + \pi/3)\) cm, find the amplitude, period, initial phase and maximum speed.`,
          steps: [R`Compare with \(A\sin(\omega t + \phi)\): \(A = 5\) cm, \(\omega = \pi\) rad/s.`, R`\(T = 2\pi/\omega = 2\) s, \(\phi = \pi/3\).`, R`\(v_{max} = A\omega = 5\pi\) cm/s.`],
          ans: R`5 cm, 2 s, \(\pi/3\), \(5\pi \approx 15.7\) cm/s` },
        { topic: R`Phase`, level: 'Main', q: R`A particle in SHM with amplitude 4 cm is at \(x = 2\) cm at \(t = 0\), moving toward \(+x\). Find its initial phase, with \(x = A\sin(\omega t + \phi)\).`,
          steps: [R`\(2 = 4\sin\phi\), so \(\sin\phi = \tfrac12\), giving \(\phi = \pi/6\) or \(5\pi/6\).`, R`Moving toward \(+x\) means \(v = A\omega\cos\phi > 0\), so \(\cos\phi > 0\).`],
          ans: R`\(\phi = \pi/6\)` },
        { topic: R`Oscillations of a spring`, level: 'Main', q: R`A 0.5 kg mass is attached to a spring with \(k = 50\) N/m. Find the period of oscillation.`,
          steps: [R`\(T = 2\pi\sqrt{0.5/50} = 2\pi\sqrt{0.01}\).`, R`\(= 2\pi(0.1)\).`],
          ans: R`\(0.2\pi \approx 0.628\) s` },
        { topic: R`Energy in SHM`, level: 'Main', q: R`At what displacement in SHM is the kinetic energy equal to the potential energy?`,
          steps: [R`\(\tfrac12k(A^2 - x^2) = \tfrac12kx^2\).`, R`\(2x^2 = A^2\).`],
          ans: R`\(x = \pm A/\sqrt2\)` },
        { topic: R`Simple pendulum`, level: 'Main', q: R`Find the length of a seconds pendulum (period 2 s). (\(g = 9.8\))`,
          steps: [R`\(L = \dfrac{gT^2}{4\pi^2} = \dfrac{9.8\times4}{39.48}\).`],
          ans: R`\(\approx 0.993\) m` },
        { topic: R`Wave motion: longitudinal & transverse waves`, level: 'Main', q: R`Why can transverse mechanical waves travel through solids but not through liquids or gases? Is sound in air transverse or longitudinal?`,
          steps: [R`Transverse waves need the medium to resist shearing (rigidity). Fluids have no shear modulus.`, R`Longitudinal waves need only compressibility, so they travel in all media.`],
          ans: R`Fluids cannot support shear. Sound in air is longitudinal (compressions and rarefactions).` },
        { topic: R`Speed of a travelling wave`, level: 'Main', q: R`A string with linear mass density 0.01 kg/m is under 100 N tension. Find the wave speed.`,
          steps: [R`\(v = \sqrt{T/\mu} = \sqrt{100/0.01}\).`],
          ans: R`100 m/s` },
        { topic: R`Displacement relation for a progressive wave`, level: 'Main', q: R`A wave is \(y = 0.05\sin(10\pi t - 0.5\pi x)\) in SI units. Find its amplitude, frequency, wavelength, speed and direction.`,
          steps: [R`\(A = 0.05\) m, \(\omega = 10\pi\), so \(f = 5\) Hz.`, R`\(k = 0.5\pi\), so \(\lambda = 2\pi/k = 4\) m.`, R`\(v = f\lambda = 20\) m/s. The form \((\omega t - kx)\) means it travels toward \(+x\).`],
          ans: R`0.05 m, 5 Hz, 4 m, 20 m/s, toward \(+x\)` },
        { topic: R`Principle of superposition, reflection of waves`, level: 'Main', q: R`Waves of amplitude 3 mm and 4 mm overlap. Find the resultant amplitude if they are (a) in phase (b) out of phase. What happens to a pulse reflected from a fixed end?`,
          steps: [R`Superposition: the displacements add.`, R`(a) \(3 + 4\). (b) \(4 - 3\).`, R`At a fixed end the reflected pulse is inverted (phase change of \(\pi\)). At a free end it is not.`],
          ans: R`(a) 7 mm (b) 1 mm. A pulse reflected from a fixed end comes back inverted.` },
        { topic: R`Standing waves in strings & organ pipes`, level: 'Main', q: R`A pipe 0.85 m long is closed at one end. Find its fundamental frequency and its next possible frequency. (\(v = 340\) m/s)`,
          steps: [R`\(f_1 = \dfrac{v}{4L} = \dfrac{340}{3.4} = 100\) Hz.`, R`A closed pipe has only odd harmonics, so the next one is \(3f_1\).`],
          ans: R`100 Hz and 300 Hz` },
        { topic: R`Fundamental mode & harmonics`, level: 'Main', q: R`An open organ pipe is 0.5 m long. Find its fundamental frequency and the next two harmonics. (\(v = 340\) m/s)`,
          steps: [R`Open pipe: \(f_n = \dfrac{nv}{2L} = n\times340\) Hz.`, R`An open pipe has all harmonics.`],
          ans: R`340 Hz, 680 Hz, 1020 Hz` },
        { topic: R`Beats`, level: 'Main', q: R`Fork A makes 4 beats/s with a 256 Hz fork. When A is loaded with a little wax, it makes 6 beats/s. Find A's original frequency.`,
          steps: [R`Possible values: 252 Hz or 260 Hz.`, R`Loading lowers A's frequency. From 260 Hz the beats would drop; from 252 Hz they would rise.`],
          ans: R`252 Hz` }
      ],
      practice: [
        { q: R`A simple pendulum is made 4 times longer. What happens to its period?`, ans: R`\(T \propto \sqrt L\), so the period doubles.` },
        { q: R`Tuning forks of 256 Hz and 260 Hz sound together. How many beats are heard per second?`, ans: R`4 beats per second` }
      ]
    },
    {
      id: 'electrostatics', title: 'Electrostatics', cls: 12,
      syllabus: [R`Electric charges & conservation of charge`, R`Coulomb's law & superposition`, R`Electric field & field lines`, R`Electric dipole: field & torque`, R`Electric flux`, R`Gauss's law & its applications`, R`Electric potential & potential difference`, R`Equipotential surfaces`, R`Conductors & insulators`, R`Dielectrics & polarisation`, R`Capacitors: series & parallel`, R`Capacitance with & without a dielectric`, R`Energy stored in a capacitor`],
      concepts: [
        { h: R`Gauss's law`, body: R`The total flux through a closed surface is \(q_{enc}/\varepsilon_0\). Choose a symmetric Gaussian surface (sphere, cylinder or pillbox) to find the field quickly.` },
        { h: R`Conductors`, body: R`Inside a conductor, \(E = 0\). All charge sits on the surface, and the whole conductor is at one potential. The field just outside is \(\sigma/\varepsilon_0\).` },
        { h: R`Capacitors`, body: R`A dielectric of constant \(K\) multiplies the capacitance by \(K\). In series, \(1/C\) values add. In parallel, \(C\) values add.` }
      ],
      formulas: [
        R`\(F = \dfrac{1}{4\pi\varepsilon_0}\dfrac{q_1q_2}{r^2},\quad E = \dfrac{kq}{r^2},\quad V = \dfrac{kq}{r}\)`,
        R`Dipole: \(E_{axial} = \dfrac{2kp}{r^3},\ E_{eq} = \dfrac{kp}{r^3},\ \tau = pE\sin\theta\)`,
        R`Line charge: \(E = \dfrac{\lambda}{2\pi\varepsilon_0 r}\); infinite sheet: \(E = \dfrac{\sigma}{2\varepsilon_0}\)`,
        R`\(C = \dfrac{K\varepsilon_0 A}{d},\quad U = \tfrac12CV^2 = \dfrac{Q^2}{2C}\)`,
        R`\(E = -\dfrac{dV}{dr}\)`
      ],
      examples: [
        { topic: R`Electric charges & conservation of charge`, level: 'Main', q: R`How many electrons must be removed from a neutral body to give it a charge of \(+1\,\mu\text{C}\)?`,
          steps: [R`Charge is quantised: \(q = ne\).`, R`\(n = \dfrac{10^{-6}}{1.6\times10^{-19}}\).`],
          ans: R`\(6.25\times10^{12}\) electrons` },
        { topic: R`Coulomb's law & superposition`, level: 'Main', q: R`Charges of 2 μC and 3 μC are 0.3 m apart. Find the force between them.`,
          steps: [R`\(F = \dfrac{9\times10^9\times2\times10^{-6}\times3\times10^{-6}}{(0.3)^2}\).`, R`\(= \dfrac{54\times10^{-3}}{0.09}\).`],
          ans: R`0.6 N (repulsive)` },
        { topic: R`Electric field & field lines`, level: 'Main', q: R`Charges of \(+4\,\mu\)C and \(-4\,\mu\)C are 0.2 m apart. Find the electric field at the midpoint.`,
          steps: [R`Each charge gives \(E = \dfrac{9\times10^9\times4\times10^{-6}}{(0.1)^2} = 3.6\times10^6\) N/C.`, R`At the midpoint both fields point toward the negative charge, so they add.`],
          ans: R`\(7.2\times10^6\) N/C, toward the negative charge` },
        { topic: R`Electric dipole: field & torque`, level: 'Main', q: R`A dipole of moment \(2\times10^{-8}\) C m makes \(30^\circ\) with a uniform field of \(10^4\) N/C. Find the torque on it, and the work needed to turn it from \(0^\circ\) to \(180^\circ\).`,
          steps: [R`\(\tau = pE\sin\theta = 2\times10^{-8}\times10^4\times0.5 = 10^{-4}\) N m.`, R`\(W = pE(\cos0^\circ - \cos180^\circ) = 2pE\).`],
          ans: R`\(10^{-4}\) N m; \(4\times10^{-4}\) J` },
        { topic: R`Electric flux`, level: 'Main', q: R`A uniform field of 200 N/C points along x. Find the flux through a 10 cm × 10 cm square whose normal makes \(60^\circ\) with the x-axis.`,
          steps: [R`\(\Phi = EA\cos\theta = 200\times0.01\times0.5\).`],
          ans: R`\(1\,\text{N m}^2/\text{C}\)` },
        { topic: R`Gauss's law & its applications`, level: 'Main', q: R`Use Gauss's law to find the field 0.1 m from a long line charge of \(2\,\mu\)C/m.`,
          steps: [R`Take a coaxial cylinder of radius \(r\) and length \(l\): \(E(2\pi rl) = \lambda l/\varepsilon_0\).`, R`\(E = \dfrac{\lambda}{2\pi\varepsilon_0 r} = \dfrac{2\times9\times10^9\times2\times10^{-6}}{0.1}\).`],
          ans: R`\(3.6\times10^5\) N/C, pointing radially outward` },
        { topic: R`Electric potential & potential difference`, level: 'Main', q: R`Charges of \(+1, +2, -3, +4\,\mu\)C sit at the corners of a square with diagonal 2 m. Find the potential at the centre.`,
          steps: [R`Each corner is 1 m from the centre. Potential is a scalar, so just add.`, R`\(V = 9\times10^9\times\dfrac{(1 + 2 - 3 + 4)\times10^{-6}}{1}\).`],
          ans: R`\(3.6\times10^4\) V` },
        { topic: R`Equipotential surfaces`, level: 'Main', q: R`How much work is done in moving a \(2\,\mu\)C charge between two points on a 50 V equipotential surface? What is the angle between field lines and equipotentials?`,
          steps: [R`\(W = q\Delta V\), and \(\Delta V = 0\).`, R`If no work is done for any move along the surface, the field has no component along it.`],
          ans: R`Zero work. Field lines are always perpendicular to equipotential surfaces.` },
        { topic: R`Conductors & insulators`, level: 'Main', q: R`A hollow conducting sphere of radius 10 cm carries \(1\,\mu\)C. Find the field and potential at its centre.`,
          steps: [R`Inside a conductor, \(E = 0\).`, R`The potential is constant inside and equals the surface value: \(V = \dfrac{kq}{R} = \dfrac{9\times10^9\times10^{-6}}{0.1}\).`],
          ans: R`\(E = 0\), \(V = 9\times10^4\) V` },
        { topic: R`Dielectrics & polarisation`, level: 'Main', q: R`A 10 μF capacitor is charged to 100 V and disconnected. A dielectric of \(K = 5\) is then inserted. Find the new voltage and energy.`,
          steps: [R`Isolated, so \(Q\) is constant. \(C\) becomes 50 μF.`, R`\(V = Q/C = 100/5 = 20\) V.`, R`\(U = \dfrac{Q^2}{2C}\) falls from \(\tfrac12(10\,\mu)(100)^2 = 0.05\) J to \(0.01\) J.`],
          ans: R`20 V; the energy falls from 0.05 J to 0.01 J (the dielectric is pulled in)` },
        { topic: R`Capacitors: series & parallel`, level: 'Main', q: R`Three 6 μF capacitors are connected (a) in series (b) in parallel (c) two in series, with the third in parallel to them. Find each equivalent capacitance.`,
          steps: [R`(a) \(6/3\). (b) \(6 \times 3\).`, R`(c) Two in series give 3 μF; adding the third in parallel gives \(3 + 6\).`],
          ans: R`(a) 2 μF (b) 18 μF (c) 9 μF` },
        { topic: R`Capacitance with & without a dielectric`, level: 'Main', q: R`A parallel-plate capacitor has plate area 0.01 m² and separation 1 mm. Find its capacitance, and its capacitance when filled with a dielectric of \(K = 5\).`,
          steps: [R`\(C = \dfrac{8.85\times10^{-12}\times0.01}{10^{-3}} = 8.85\times10^{-11}\) F.`, R`With the dielectric: \(C' = KC = 5\times88.5\) pF.`],
          ans: R`88.5 pF and 442.5 pF` },
        { topic: R`Energy stored in a capacitor`, level: 'Advanced', q: R`A 4 μF capacitor charged to 200 V is connected to an identical uncharged capacitor. Find the energy before and after.`,
          steps: [R`Before: \(\tfrac12(4\times10^{-6})(200)^2 = 0.08\) J.`, R`Charge is shared: the common voltage is \(800\,\mu\text{C}/8\,\mu\text{F} = 100\) V.`, R`After: \(\tfrac12(8\times10^{-6})(100)^2 = 0.04\) J.`],
          ans: R`0.08 J becomes 0.04 J. Half is lost as heat and radiation in the wires.` }
      ],
      practice: [
        { q: R`Find the equivalent capacitance of 2 μF and 3 μF in series.`, ans: R`\(\dfrac{2\times3}{2+3} = 1.2\) μF` },
        { q: R`What is the electric field inside a uniformly charged hollow conducting sphere?`, ans: R`Zero` }
      ]
    },
    {
      id: 'current-electricity', title: 'Current Electricity', cls: 12,
      syllabus: [R`Electric current & drift velocity`, R`Ohm's law`, R`Electrical resistance & resistivity`, R`V–I characteristics (ohmic & non-ohmic)`, R`Electrical energy & power`, R`Colour code for resistors`, R`Series & parallel combinations`, R`Temperature dependence of resistance`, R`Internal resistance, emf & potential difference`, R`Cells in series & parallel`, R`Kirchhoff's laws`, R`Wheatstone bridge`, R`Metre bridge`],
      concepts: [
        { h: R`Kirchhoff's laws`, body: R`Junction law: the current entering a junction equals the current leaving it (conservation of charge). Loop law: the sum of potential changes around any loop is zero (conservation of energy).` },
        { h: R`Internal resistance`, body: R`A real cell has emf \(\varepsilon\) and internal resistance \(r\). While it delivers current, its terminal voltage is \(V = \varepsilon - Ir\).` },
        { h: R`Stretching a wire`, body: R`The volume stays the same. If the length becomes \(n\) times larger, the area becomes \(1/n\) times, so the resistance becomes \(n^2\) times.` }
      ],
      formulas: [
        R`\(I = neAv_d,\quad R = \dfrac{\rho L}{A},\quad R_T = R_0(1 + \alpha\Delta T)\)`,
        R`\(P = VI = I^2R = \dfrac{V^2}{R}\)`,
        R`\(I = \dfrac{\varepsilon}{R + r},\quad V = \varepsilon - Ir\)`,
        R`Balanced Wheatstone bridge: \(\dfrac{P}{Q} = \dfrac{R}{S}\); metre bridge: \(\dfrac{X}{R} = \dfrac{l}{100 - l}\)`
      ],
      examples: [
        { topic: R`Electric current & drift velocity`, level: 'Main', q: R`A copper wire with cross-section \(10^{-6}\) m² carries 1.6 A. Find the drift velocity. (\(n = 8.5\times10^{28}\,\text{m}^{-3}\))`,
          steps: [R`\(v_d = \dfrac{I}{neA} = \dfrac{1.6}{8.5\times10^{28}\times1.6\times10^{-19}\times10^{-6}}\).`],
          ans: R`\(\approx 1.2\times10^{-4}\) m/s, very slow` },
        { topic: R`Ohm's law`, level: 'Main', q: R`A conductor carries 0.3 A when 6 V is applied across it. What current flows at 15 V (same temperature)?`,
          steps: [R`\(R = V/I = 20\,\Omega\).`, R`\(I = 15/20\).`],
          ans: R`0.75 A` },
        { topic: R`Electrical resistance & resistivity`, level: 'Main', q: R`Find the resistance of a 10 m wire with cross-section 1 mm² and resistivity \(1.7\times10^{-8}\,\Omega\) m.`,
          steps: [R`\(R = \dfrac{\rho L}{A} = \dfrac{1.7\times10^{-8}\times10}{10^{-6}}\).`],
          ans: R`\(0.17\,\Omega\)` },
        { topic: R`V–I characteristics (ohmic & non-ohmic)`, level: 'Main', q: R`Which of these are non-ohmic: a metal wire at constant temperature, a p–n diode, a thermistor, a filament bulb?`,
          steps: [R`A device is ohmic only if its V–I graph is a straight line through the origin.`, R`A diode conducts one way only. A thermistor and a filament change resistance as they heat up.`],
          ans: R`The diode, thermistor and filament bulb are non-ohmic. The metal wire at constant temperature is ohmic.` },
        { topic: R`Electrical energy & power`, level: 'Main', q: R`A 1000 W heater runs 2 hours a day for 30 days. Electricity costs ₹8 per unit. Find the bill.`,
          steps: [R`Energy \(= 1\,\text{kW}\times2\,\text{h}\times30 = 60\) kWh (units).`, R`Cost \(= 60\times8\).`],
          ans: R`₹480` },
        { topic: R`Colour code for resistors`, level: 'Main', q: R`Find the resistances with these colour bands: (a) brown, black, red, gold (b) yellow, violet, orange, silver.`,
          steps: [R`Digits: black 0, brown 1, red 2, orange 3, yellow 4, green 5, blue 6, violet 7, grey 8, white 9. The 3rd band is the power of 10.`, R`(a) \(10\times10^2\) (b) \(47\times10^3\). Gold is ±5%, silver ±10%.`],
          ans: R`(a) 1 kΩ ± 5% (b) 47 kΩ ± 10%` },
        { topic: R`Series & parallel combinations`, level: 'Main', q: R`3 Ω and 6 Ω resistors in parallel are connected in series with a 4 Ω resistor across a 12 V supply. Find the current through the 3 Ω resistor.`,
          steps: [R`Parallel part: \(\dfrac{3\cdot6}{9} = 2\,\Omega\). Total \(= 6\,\Omega\).`, R`Total current \(= 12/6 = 2\) A.`, R`Voltage across the parallel part \(= 2\times2 = 4\) V.`, R`Current through 3 Ω \(= 4/3\) A.`],
          ans: R`\(4/3 \approx 1.33\) A` },
        { topic: R`Temperature dependence of resistance`, level: 'Main', q: R`A wire has resistance 10 Ω at 20 °C and \(\alpha = 0.004\,/^\circ\text{C}\). Find its resistance at 120 °C.`,
          steps: [R`\(R = R_0(1 + \alpha\Delta T) = 10(1 + 0.004\times100)\).`],
          ans: R`\(14\,\Omega\)` },
        { topic: R`Internal resistance, emf & potential difference`, level: 'Main', q: R`A cell of emf 12 V and internal resistance 1 Ω is connected to a 5 Ω resistor. Find the current and the terminal voltage.`,
          steps: [R`\(I = \dfrac{12}{5 + 1} = 2\) A.`, R`\(V = 12 - 2(1) = 10\) V.`],
          ans: R`2 A, 10 V` },
        { topic: R`Cells in series & parallel`, level: 'Main', q: R`Five cells, each of emf 1.5 V and internal resistance 0.5 Ω, drive current through a 5 Ω resistor. Find the current with the cells (a) in series (b) in parallel.`,
          steps: [R`(a) \(\varepsilon = 7.5\) V, \(r = 2.5\,\Omega\): \(I = 7.5/7.5\).`, R`(b) \(\varepsilon = 1.5\) V, \(r = 0.1\,\Omega\): \(I = 1.5/5.1\).`],
          ans: R`(a) 1 A (b) \(\approx 0.29\) A` },
        { topic: R`Kirchhoff's laws`, level: 'Advanced', q: R`Three branches join points A and B: (1) a 10 V cell with 2 Ω, (2) a 4 V cell with 1 Ω, (3) a 4 Ω resistor. Both cells have their + terminal toward A. Find the current in each branch.`,
          steps: [R`Take \(V_B = 0\). Junction rule at A: \(\dfrac{V - 10}{2} + \dfrac{V - 4}{1} + \dfrac{V}{4} = 0\).`, R`Multiply by 4: \(7V = 36\), so \(V_A = 36/7 \approx 5.14\) V.`, R`\(I_1 = (10 - V)/2 = 17/7\) A out of cell 1; \(I_3 = V/4 = 9/7\) A; \(I_2 = (V - 4)/1 = 8/7\) A into cell 2.`],
          ans: R`2.43 A from the 10 V cell, 1.29 A through 4 Ω, and 1.14 A charging the 4 V cell` },
        { topic: R`Wheatstone bridge`, level: 'Main', q: R`A Wheatstone bridge has all four arms of 10 Ω and a 5 Ω galvanometer. Find the equivalent resistance between the input terminals.`,
          steps: [R`\(P/Q = R/S\), so the bridge is balanced and no current flows through the galvanometer, which can be removed.`, R`Two 20 Ω paths in parallel.`],
          ans: R`\(10\,\Omega\)` },
        { topic: R`Metre bridge`, level: 'Main', q: R`In a metre bridge, a 1 m wire of diameter 0.5 mm is in the left gap and 4 Ω is in the right gap. The balance point is at 60 cm. Find the wire's resistance and resistivity.`,
          steps: [R`\(X = 4\times\dfrac{60}{40} = 6\,\Omega\).`, R`\(\rho = \dfrac{XA}{L} = 6\times\pi(0.25\times10^{-3})^2\).`],
          ans: R`\(6\,\Omega\); \(\rho \approx 1.18\times10^{-6}\,\Omega\) m` }
      ],
      practice: [
        { q: R`A wire is stretched to twice its length. What happens to its resistance?`, ans: R`It becomes 4 times larger.` },
        { q: R`Find the resistance of a 100 W, 220 V bulb.`, ans: R`\(R = V^2/P = 48400/100 = 484\,\Omega\)` }
      ]
    },
    {
      id: 'magnetism', title: 'Magnetic Effects of Current and Magnetism', cls: 12,
      syllabus: [R`Biot–Savart law & applications to a circular loop`, R`Ampère's law & applications (straight wire, solenoid)`, R`Force on a moving charge in uniform E & B fields`, R`Force on a current-carrying conductor`, R`Force between two parallel currents (the ampere)`, R`Torque on a current loop`, R`Moving-coil galvanometer & its conversion to ammeter & voltmeter`, R`Current loop as a magnetic dipole`, R`Bar magnet: field lines, field on axis & equator`, R`Para-, dia- & ferromagnetic substances`],
      concepts: [
        { h: R`Lorentz force`, body: R`\(\vec F = q(\vec E + \vec v\times\vec B)\). A magnetic force never does work, so it can change only the direction of a charge's velocity, not its speed. In a uniform \(B\), the charge moves in a circle (or a helix).` },
        { h: R`Parallel currents`, body: R`Currents in the same direction attract. Currents in opposite directions repel.` },
        { h: R`Galvanometer conversion`, body: R`To make an ammeter, add a small resistance (shunt) in parallel: \(S = \dfrac{I_g G}{I - I_g}\). To make a voltmeter, add a large resistance in series: \(R = \dfrac{V}{I_g} - G\).` },
        { h: R`Magnetic materials`, body: R`Diamagnetic materials: \(\chi < 0\) (weakly repelled). Paramagnetic: small positive \(\chi\). Ferromagnetic: large \(\chi\), which falls with temperature above the Curie point.` }
      ],
      formulas: [
        R`Straight wire: \(B = \dfrac{\mu_0 I}{2\pi r}\); centre of a loop: \(B = \dfrac{\mu_0 I}{2R}\); solenoid: \(B = \mu_0 n I\)`,
        R`\(r = \dfrac{mv}{qB},\quad T = \dfrac{2\pi m}{qB}\)`,
        R`\(\vec F = I\vec L\times\vec B,\quad \dfrac{F}{L} = \dfrac{\mu_0 I_1 I_2}{2\pi d}\)`,
        R`Torque on a loop: \(\tau = NIAB\sin\theta = MB\sin\theta\)`
      ],
      examples: [
        { topic: R`Biot–Savart law & applications to a circular loop`, level: 'Main', q: R`Find the magnetic field at the centre of a circular loop of radius 0.1 m carrying 5 A.`,
          steps: [R`\(B = \dfrac{\mu_0 I}{2R} = \dfrac{4\pi\times10^{-7}\times5}{0.2}\).`],
          ans: R`\(\pi\times10^{-5} \approx 3.14\times10^{-5}\) T` },
        { topic: R`Ampère's law & applications (straight wire, solenoid)`, level: 'Main', q: R`A solenoid 0.5 m long has 500 turns and carries 2 A. Find the field inside it.`,
          steps: [R`\(n = 500/0.5 = 1000\) turns/m.`, R`\(B = \mu_0nI = 4\pi\times10^{-7}\times1000\times2\).`],
          ans: R`\(\approx 2.51\times10^{-3}\) T` },
        { topic: R`Force on a moving charge in uniform E & B fields`, level: 'Main', q: R`A proton moves at \(10^6\) m/s perpendicular to a 0.1 T field. Find the radius of its path. (\(m = 1.67\times10^{-27}\) kg)`,
          steps: [R`\(r = \dfrac{mv}{qB} = \dfrac{1.67\times10^{-27}\times10^6}{1.6\times10^{-19}\times0.1}\).`],
          ans: R`\(\approx 0.104\) m` },
        { topic: R`Force on a current-carrying conductor`, level: 'Main', q: R`A 0.5 m wire carrying 4 A makes \(30^\circ\) with a 0.2 T field. Find the force on it.`,
          steps: [R`\(F = BIL\sin\theta = 0.2\times4\times0.5\times0.5\).`],
          ans: R`0.2 N` },
        { topic: R`Force between two parallel currents (the ampere)`, level: 'Main', q: R`Two long wires 5 cm apart carry 5 A and 10 A in opposite directions. Find the force per metre. How is the ampere defined?`,
          steps: [R`\(\dfrac FL = \dfrac{\mu_0I_1I_2}{2\pi d} = \dfrac{2\times10^{-7}\times50}{0.05}\).`, R`Opposite currents repel.`],
          ans: R`\(2\times10^{-4}\) N/m, repulsive. 1 A is the current that gives \(2\times10^{-7}\) N/m between wires 1 m apart.` },
        { topic: R`Torque on a current loop`, level: 'Main', q: R`A 50-turn coil of area 0.01 m² carries 2 A in a 0.5 T field, with its plane parallel to the field. Find the torque.`,
          steps: [R`The plane is parallel to \(B\), so the normal is at \(90^\circ\) to \(B\).`, R`\(\tau = NIAB\sin90^\circ = 50\times2\times0.01\times0.5\).`],
          ans: R`0.5 N m (the maximum)` },
        { topic: R`Moving-coil galvanometer & its conversion to ammeter & voltmeter`, level: 'Main', q: R`A galvanometer of 50 Ω gives full-scale deflection at 1 mA. How do you convert it to (a) a 0–1 A ammeter (b) a 0–10 V voltmeter?`,
          steps: [R`(a) Shunt \(S = \dfrac{I_gG}{I - I_g} = \dfrac{10^{-3}\times50}{0.999}\).`, R`(b) Series \(R = \dfrac{V}{I_g} - G = 10{,}000 - 50\).`],
          ans: R`(a) about 0.05 Ω in parallel (b) 9950 Ω in series` },
        { topic: R`Current loop as a magnetic dipole`, level: 'Main', q: R`Find the magnetic moment of a circular loop of radius 0.1 m carrying 2 A.`,
          steps: [R`\(m = IA = 2\times\pi(0.1)^2\).`],
          ans: R`\(\approx 0.063\,\text{A m}^2\), perpendicular to the loop (right-hand rule)` },
        { topic: R`Bar magnet: field lines, field on axis & equator`, level: 'Main', q: R`A short bar magnet has moment \(1\,\text{A m}^2\). Find the field 0.1 m away on its axis and on its equator.`,
          steps: [R`Axis: \(B = \dfrac{\mu_0}{4\pi}\dfrac{2m}{r^3} = 10^{-7}\times\dfrac{2}{10^{-3}}\).`, R`Equator: half the axial value.`],
          ans: R`\(2\times10^{-4}\) T on the axis, \(10^{-4}\) T on the equator` },
        { topic: R`Para-, dia- & ferromagnetic substances`, level: 'Main', q: R`Classify Bi, Cu, Al, liquid O₂ and Fe. A paramagnet has \(\chi = 1.2\times10^{-5}\) at 300 K. Find \(\chi\) at 200 K.`,
          steps: [R`Diamagnetic: Bi, Cu. Paramagnetic: Al, O₂. Ferromagnetic: Fe.`, R`Curie's law: \(\chi \propto 1/T\), so \(\chi = 1.2\times10^{-5}\times\dfrac{300}{200}\).`],
          ans: R`\(\chi = 1.8\times10^{-5}\)` }
      ],
      practice: [
        { q: R`Two long parallel wires 0.1 m apart each carry 10 A in the same direction. Find the force per metre between them.`, ans: R`\(\dfrac{2\times10^{-7}\times100}{0.1} = 2\times10^{-4}\) N/m, attractive` },
        { q: R`Find \(B\) at 5 cm from a long straight wire carrying 10 A.`, ans: R`\(\dfrac{2\times10^{-7}\times10}{0.05} = 4\times10^{-5}\) T` }
      ]
    },
    {
      id: 'emi-ac', title: 'Electromagnetic Induction and Alternating Currents', cls: 12,
      syllabus: [R`Faraday's law`, R`Lenz's law`, R`Induced emf & current`, R`Eddy currents`, R`Self & mutual inductance`, R`Peak & rms values of AC`, R`Reactance & impedance`, R`LCR series circuit & resonance`, R`Quality factor`, R`Power in AC circuits, wattless current`, R`AC generator & transformer`],
      concepts: [
        { h: R`Faraday & Lenz`, body: R`The induced emf equals minus the rate of change of magnetic flux. The induced current flows in the direction that <i>opposes</i> the change that causes it (the minus sign). This is conservation of energy.` },
        { h: R`Phase in AC`, body: R`In a resistor, \(V\) and \(I\) are in phase. In an inductor, \(V\) leads \(I\) by \(90^\circ\). In a capacitor, \(V\) lags \(I\) by \(90^\circ\).` },
        { h: R`Resonance`, body: R`When \(X_L = X_C\), the impedance is smallest (\(Z = R\)), the current is largest, and the power factor is 1.` }
      ],
      formulas: [
        R`\(\varepsilon = -\dfrac{d\Phi}{dt}\); motional emf \(\varepsilon = Blv\)`,
        R`\(L = \mu_0 n^2 A l,\quad U = \tfrac12 LI^2\)`,
        R`\(V_{rms} = \dfrac{V_0}{\sqrt2},\quad X_L = \omega L,\quad X_C = \dfrac{1}{\omega C}\)`,
        R`\(Z = \sqrt{R^2 + (X_L - X_C)^2},\quad \cos\phi = \dfrac{R}{Z}\)`,
        R`\(f_0 = \dfrac{1}{2\pi\sqrt{LC}},\quad P = V_{rms}I_{rms}\cos\phi\)`,
        R`Transformer: \(\dfrac{V_s}{V_p} = \dfrac{N_s}{N_p} = \dfrac{I_p}{I_s}\)`
      ],
      examples: [
        { topic: R`Faraday's law`, level: 'Main', q: R`A 100-turn coil of area 0.01 m² is in a field that falls from 0.5 T to 0 in 0.1 s. Find the average induced emf.`,
          steps: [R`\(\varepsilon = N\dfrac{\Delta\Phi}{\Delta t} = \dfrac{100\times0.01\times0.5}{0.1}\).`],
          ans: R`5 V` },
        { topic: R`Lenz's law`, level: 'Main', q: R`The N-pole of a magnet is pushed toward a loop. Which way does the induced current flow, as seen from the magnet's side?`,
          steps: [R`By Lenz's law, the loop opposes the approach, so its near face becomes a N-pole and repels the magnet.`, R`A face looks like a N-pole when the current is anticlockwise as seen from that side.`],
          ans: R`Anticlockwise, as seen from the magnet` },
        { topic: R`Induced emf & current`, level: 'Main', q: R`A 0.5 m rod moves at 4 m/s perpendicular to a 0.2 T field. Find the emf induced across it.`,
          steps: [R`\(\varepsilon = Blv = 0.2\times0.5\times4\).`],
          ans: R`0.4 V` },
        { topic: R`Eddy currents`, level: 'Main', q: R`Why are transformer cores laminated? Give two useful applications of eddy currents.`,
          steps: [R`A changing flux induces circulating (eddy) currents in a solid core, which waste energy as heat.`, R`Thin insulated sheets break up the current paths.`],
          ans: R`To reduce eddy-current losses. Uses: magnetic braking in trains, induction furnaces and cooktops, damping in galvanometers.` },
        { topic: R`Self & mutual inductance`, level: 'Main', q: R`The current in a 0.2 H coil falls from 5 A to 1 A in 0.1 s. Find the self-induced emf, and the energy stored at 5 A.`,
          steps: [R`\(\varepsilon = L\dfrac{\Delta I}{\Delta t} = 0.2\times\dfrac{4}{0.1}\).`, R`\(U = \tfrac12LI^2 = \tfrac12(0.2)(25)\).`],
          ans: R`8 V; 2.5 J` },
        { topic: R`Peak & rms values of AC`, level: 'Main', q: R`Mains supply in India is 220 V at 50 Hz. Find the peak voltage and write the equation for the voltage.`,
          steps: [R`\(V_0 = \sqrt2\times220 \approx 311\) V.`, R`\(\omega = 2\pi(50) = 100\pi\).`],
          ans: R`\(v = 311\sin(100\pi t)\) V` },
        { topic: R`Reactance & impedance`, level: 'Main', q: R`Find the reactance of (a) a 0.1 H inductor (b) a 100 μF capacitor at 50 Hz.`,
          steps: [R`(a) \(X_L = 2\pi fL = 2\pi(50)(0.1)\).`, R`(b) \(X_C = \dfrac{1}{2\pi fC} = \dfrac{1}{2\pi(50)(10^{-4})}\).`],
          ans: R`(a) 31.4 Ω (b) 31.8 Ω` },
        { topic: R`LCR series circuit & resonance`, level: 'Main', q: R`A series LCR circuit has \(R = 30\,\Omega\), \(X_L = 80\,\Omega\), \(X_C = 40\,\Omega\) and \(V_{rms} = 100\) V. Find \(Z\), \(I\) and the power factor.`,
          steps: [R`\(Z = \sqrt{30^2 + 40^2} = 50\,\Omega\).`, R`\(I = 100/50 = 2\) A.`, R`\(\cos\phi = 30/50 = 0.6\).`],
          ans: R`\(Z = 50\,\Omega\), \(I = 2\) A, power factor \(= 0.6\)` },
        { topic: R`Quality factor`, level: 'Main', q: R`Find the Q-factor of a series LCR circuit with \(L = 0.1\) H, \(C = 10\) μF and \(R = 10\,\Omega\).`,
          steps: [R`\(Q = \dfrac1R\sqrt{\dfrac LC} = \dfrac1{10}\sqrt{\dfrac{0.1}{10^{-5}}} = \dfrac{100}{10}\).`],
          ans: R`10. A higher Q means sharper resonance.` },
        { topic: R`Power in AC circuits, wattless current`, level: 'Main', q: R`In an AC circuit, \(V_{rms} = 200\) V and \(I_{rms} = 5\) A, with a phase difference of \(60^\circ\). Find the power. What is the power in a pure inductor?`,
          steps: [R`\(P = V_{rms}I_{rms}\cos\phi = 200\times5\times0.5\).`, R`In a pure L or C, \(\phi = 90^\circ\), so \(\cos\phi = 0\).`],
          ans: R`500 W. A pure inductor takes zero average power ("wattless current").` },
        { topic: R`AC generator & transformer`, level: 'Main', q: R`A generator coil of 100 turns and area 0.1 m² rotates at 50 rev/s in a 0.1 T field. Find the peak emf.`,
          steps: [R`\(\omega = 2\pi(50) = 100\pi\).`, R`\(\varepsilon_0 = NAB\omega = 100\times0.1\times0.1\times100\pi\).`],
          ans: R`\(100\pi \approx 314\) V` }
      ],
      practice: [
        { q: R`Find the resonant frequency of an LC circuit with \(L = 0.1\) H and \(C = 10\) μF.`, ans: R`\(f_0 = \dfrac{1}{2\pi\sqrt{10^{-6}}} = \dfrac{1000}{2\pi} \approx 159\) Hz` },
        { q: R`An ideal transformer with turns ratio \(N_s/N_p = 10\) has 220 V on the primary. Find the secondary voltage.`, ans: R`2200 V (step-up)` }
      ]
    },
    {
      id: 'em-waves', title: 'Electromagnetic Waves', cls: 12,
      syllabus: [R`Displacement current`, R`Electromagnetic waves & their characteristics`, R`Transverse nature of EM waves`, R`Electromagnetic spectrum (radio, microwaves, infrared, visible, UV, X-rays, gamma rays)`, R`Applications of EM waves`],
      concepts: [
        { h: R`Nature`, body: R`Electric and magnetic fields oscillate perpendicular to each other and to the direction of travel. The wave needs no medium. In vacuum it travels at \(c = 1/\sqrt{\mu_0\varepsilon_0}\).` },
        { h: R`Displacement current`, body: R`Maxwell added \(\varepsilon_0\dfrac{d\Phi_E}{dt}\) to Ampère's law, so that a changing electric field also produces a magnetic field (for example, between capacitor plates).` },
        { h: R`Spectrum (increasing frequency)`, body: R`Radio → microwave → infrared → visible → UV → X-rays → gamma rays. Microwaves are used in radar and ovens, IR in remote controls, UV in sterilisation, and X-rays in medical imaging.` }
      ],
      formulas: [
        R`\(c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}} = 3\times10^8\) m/s, \(c = f\lambda\)`,
        R`\(\dfrac{E_0}{B_0} = c\)`,
        R`Intensity: \(I = \tfrac12 c\,\varepsilon_0 E_0^2\)`,
        R`\(I_d = \varepsilon_0\dfrac{d\Phi_E}{dt}\)`
      ],
      examples: [
        { topic: R`Displacement current`, level: 'Main', q: R`Between the plates (area 0.01 m²) of a charging capacitor, the field changes at \(10^{12}\) V/m per second. Find the displacement current.`,
          steps: [R`\(I_d = \varepsilon_0\dfrac{d\Phi_E}{dt} = \varepsilon_0A\dfrac{dE}{dt} = 8.85\times10^{-12}\times0.01\times10^{12}\).`],
          ans: R`\(\approx 0.089\) A, equal to the conduction current in the wires` },
        { topic: R`Electromagnetic waves & their characteristics`, level: 'Main', q: R`An EM wave has electric-field amplitude 30 V/m. Find its magnetic-field amplitude.`,
          steps: [R`\(B_0 = E_0/c = 30/(3\times10^8)\).`],
          ans: R`\(10^{-7}\) T` },
        { topic: R`Transverse nature of EM waves`, level: 'Main', q: R`An EM wave travels along \(+z\) with \(\vec E\) along \(x\). Along which direction is \(\vec B\)?`,
          steps: [R`The wave travels along \(\vec E\times\vec B\).`, R`\(\hat i\times\hat j = \hat k\), so \(\vec B\) is along \(y\).`],
          ans: R`Along \(\pm y\) (in phase with E), perpendicular to both E and the direction of travel. The wave is transverse.` },
        { topic: R`Electromagnetic spectrum (radio, microwaves, infrared, visible, UV, X-rays, gamma rays)`, level: 'Main', q: R`Find the wavelength of a 100 MHz FM radio wave.`,
          steps: [R`\(\lambda = c/f = 3\times10^8/10^8\).`],
          ans: R`3 m` },
        { topic: R`Applications of EM waves`, level: 'Main', q: R`Name the radiation used for: (a) airport radar (b) TV remote controls (c) water purifiers (d) bone fracture images (e) cancer treatment.`,
          steps: [R`Match each use to a region of the spectrum.`],
          ans: R`(a) Microwaves (b) Infrared (c) Ultraviolet (d) X-rays (e) Gamma rays` }
      ],
      practice: [
        { q: R`Which EM radiation is used to kill germs in water purifiers?`, ans: R`Ultraviolet` },
        { q: R`Do EM waves carry momentum?`, ans: R`Yes. A wave carrying energy \(U\) has momentum \(p = U/c\), which is why light exerts radiation pressure.` }
      ]
    },
    {
      id: 'optics', title: 'Optics', cls: 12,
      syllabus: [R`Reflection & refraction at plane and spherical surfaces`, R`Mirror formula`, R`Total internal reflection`, R`Lens formula & lensmaker's formula`, R`Power & magnification, combination of thin lenses`, R`Refraction & dispersion by a prism`, R`Microscope & telescope`, R`Wave optics: wavefront & Huygens' principle`, R`Interference: Young's double-slit experiment`, R`Diffraction due to a single slit`, R`Polarisation, plane-polarised light`, R`Brewster's law, Polaroids`],
      concepts: [
        { h: R`Sign convention`, body: R`Measure all distances from the pole or optical centre. Distances in the direction of the incident light are positive. Real objects therefore have negative \(u\).` },
        { h: R`Total internal reflection`, body: R`It happens when light goes from a denser to a rarer medium and the angle of incidence is greater than the critical angle \(C\), where \(\sin C = 1/n\). Optical fibres and diamond sparkle rely on it.` },
        { h: R`YDSE`, body: R`Light from two coherent slits interferes to make equally spaced bright and dark fringes. The bright fringes of a single-slit pattern are not equal: the central maximum is twice as wide as the others.` },
        { h: R`Polarisation`, body: R`Malus's law: \(I = I_0\cos^2\theta\). Unpolarised light loses half its intensity through a polaroid. Reflected light is fully polarised at Brewster's angle, where \(\tan i_B = n\).` }
      ],
      formulas: [
        R`Mirror: \(\dfrac1v + \dfrac1u = \dfrac1f\); lens: \(\dfrac1v - \dfrac1u = \dfrac1f\)`,
        R`Lensmaker: \(\dfrac1f = (n - 1)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)\); \(P = \dfrac{1}{f(\text{m})}\)`,
        R`Prism: \(n = \dfrac{\sin\frac{A + \delta_m}{2}}{\sin\frac A2}\)`,
        R`YDSE: \(\beta = \dfrac{\lambda D}{d}\); single slit minima at \(a\sin\theta = n\lambda\)`,
        R`\(I = I_1 + I_2 + 2\sqrt{I_1I_2}\cos\phi\)`
      ],
      examples: [
        { topic: R`Reflection & refraction at plane and spherical surfaces`, level: 'Main', q: R`A coin lies at the bottom of 12 cm of water (\(n = 4/3\)). How deep does it appear when viewed from above?`,
          steps: [R`Apparent depth \(= \dfrac{\text{real depth}}{n} = \dfrac{12}{4/3}\).`],
          ans: R`9 cm (it appears raised by 3 cm)` },
        { topic: R`Mirror formula`, level: 'Main', q: R`An object is 10 cm in front of a concave mirror of focal length 15 cm. Find the image.`,
          steps: [R`\(u = -10\), \(f = -15\): \(\dfrac1v = \dfrac1f - \dfrac1u = -\dfrac1{15} + \dfrac1{10} = \dfrac1{30}\).`, R`\(v = +30\) cm (behind the mirror). \(m = -v/u = 3\).`],
          ans: R`A virtual, upright image, 3 times larger, 30 cm behind the mirror (how a shaving mirror works)` },
        { topic: R`Total internal reflection`, level: 'Main', q: R`An optical fibre has a core of \(n = 1.5\) and a cladding of \(n = 1.4\). Find the critical angle at the core–cladding boundary.`,
          steps: [R`\(\sin C = \dfrac{n_2}{n_1} = \dfrac{1.4}{1.5} \approx 0.933\).`],
          ans: R`\(C \approx 69^\circ\). Rays hitting the boundary at more than this are totally reflected.` },
        { topic: R`Lens formula & lensmaker's formula`, level: 'Main', q: R`An object is 30 cm in front of a convex lens of focal length 20 cm. Find the image position and magnification.`,
          steps: [R`\(u = -30\), \(f = +20\).`, R`\(\dfrac1v = \dfrac1{20} + \dfrac1{-30} = \dfrac{1}{60}\), so \(v = +60\) cm.`, R`\(m = v/u = 60/(-30) = -2\).`],
          ans: R`A real, inverted image 60 cm behind the lens, twice the size of the object` },
        { topic: R`Power & magnification, combination of thin lenses`, level: 'Main', q: R`A short-sighted person cannot see clearly beyond 2 m. What lens is needed?`,
          steps: [R`Distant objects must form an image at 2 m: \(u = -\infty\), \(v = -2\) m, so \(f = -2\) m.`, R`\(P = 1/f\).`],
          ans: R`A concave lens of power \(-0.5\) D` },
        { topic: R`Refraction & dispersion by a prism`, level: 'Main', q: R`A \(60^\circ\) prism gives a minimum deviation of \(30^\circ\). Find its refractive index.`,
          steps: [R`\(n = \dfrac{\sin\frac{A + \delta_m}{2}}{\sin\frac A2} = \dfrac{\sin45^\circ}{\sin30^\circ}\).`],
          ans: R`\(\sqrt2 \approx 1.414\)` },
        { topic: R`Microscope & telescope`, level: 'Main', q: R`An astronomical telescope has \(f_o = 100\) cm and \(f_e = 5\) cm. Find its magnifying power and tube length in normal adjustment.`,
          steps: [R`\(M = f_o/f_e = 20\).`, R`\(L = f_o + f_e\).`],
          ans: R`20; 105 cm` },
        { topic: R`Wave optics: wavefront & Huygens' principle`, level: 'Main', q: R`Light of wavelength 600 nm passes from air into glass (\(n = 1.5\)). Which of frequency, speed and wavelength change?`,
          steps: [R`By Huygens' principle, wavelets travel slower in glass, but the source sets the frequency, which does not change.`, R`\(v = c/n = 2\times10^8\) m/s and \(\lambda' = \lambda/n\).`],
          ans: R`The frequency is unchanged. The speed becomes \(2\times10^8\) m/s and the wavelength 400 nm.` },
        { topic: R`Interference: Young's double-slit experiment`, level: 'Main', q: R`In YDSE, \(\lambda = 600\) nm, \(d = 0.5\) mm and \(D = 1\) m. Find the fringe width.`,
          steps: [R`\(\beta = \dfrac{6\times10^{-7}\times1}{5\times10^{-4}}\).`],
          ans: R`\(1.2\times10^{-3}\) m = 1.2 mm` },
        { topic: R`Diffraction due to a single slit`, level: 'Main', q: R`Light of 500 nm passes through a 0.2 mm slit onto a screen 1 m away. Find the width of the central maximum.`,
          steps: [R`First minimum at \(y = \dfrac{\lambda D}{a} = \dfrac{5\times10^{-7}}{2\times10^{-4}} = 2.5\) mm.`, R`The central maximum stretches from \(-y\) to \(+y\).`],
          ans: R`5 mm` },
        { topic: R`Polarisation, plane-polarised light`, level: 'Main', q: R`Unpolarised light of intensity \(I_0\) passes through two polaroids whose axes are at \(60^\circ\). Find the final intensity.`,
          steps: [R`The first polaroid halves it: \(I_0/2\).`, R`Malus's law: \(\dfrac{I_0}{2}\cos^260^\circ = \dfrac{I_0}{2}\cdot\dfrac14\).`],
          ans: R`\(I_0/8\)` },
        { topic: R`Brewster's law, Polaroids`, level: 'Main', q: R`Find Brewster's angle for glass with \(n = \sqrt3\), and the angle of refraction at that angle.`,
          steps: [R`\(\tan i_B = n = \sqrt3\), so \(i_B = 60^\circ\).`, R`At Brewster's angle, the reflected and refracted rays are perpendicular: \(r = 90^\circ - 60^\circ\).`],
          ans: R`\(60^\circ\); \(r = 30^\circ\). The reflected light is fully polarised.` }
      ],
      practice: [
        { q: R`Find the critical angle for glass with \(n = 1.5\).`, ans: R`\(\sin C = 2/3\), so \(C \approx 41.8^\circ\)` },
        { q: R`A lens of focal length 25 cm touches a lens of focal length −50 cm. Find the combined power.`, ans: R`\(P = 4 - 2 = +2\) D` }
      ]
    },
    {
      id: 'dual-nature', title: 'Dual Nature of Matter and Radiation', cls: 12,
      syllabus: [R`Dual nature of radiation`, R`Photoelectric effect`, R`Hertz & Lenard's observations`, R`Einstein's photoelectric equation`, R`Particle nature of light`, R`Matter waves: wave nature of particles`, R`de Broglie relation`],
      concepts: [
        { h: R`Photoelectric effect`, body: R`Electrons are emitted only if the light's frequency is above a threshold. The maximum KE depends on the frequency, not on the intensity. The intensity controls only the number of electrons (the photocurrent). Emission is instantaneous.` },
        { h: R`Stopping potential`, body: R`\(eV_0 = K_{max}\). A graph of \(V_0\) against \(\nu\) is a straight line with slope \(h/e\).` },
        { h: R`Matter waves`, body: R`Every moving particle has a wavelength \(\lambda = h/p\). Electron diffraction (the Davisson–Germer experiment) confirmed it.` }
      ],
      formulas: [
        R`\(E = h\nu = \dfrac{hc}{\lambda}\); handy: \(E(\text{eV}) = \dfrac{1240}{\lambda(\text{nm})}\)`,
        R`\(K_{max} = h\nu - \phi = eV_0\)`,
        R`\(\lambda = \dfrac{h}{p} = \dfrac{h}{\sqrt{2mK}}\); electron: \(\lambda = \dfrac{1.227}{\sqrt V}\) nm`
      ],
      examples: [
        { topic: R`Dual nature of radiation`, level: 'Main', q: R`Which phenomena show the wave nature of light, and which show its particle nature?`,
          steps: [R`Waves: interference, diffraction, polarisation.`, R`Particles: the photoelectric effect and Compton scattering.`],
          ans: R`Light shows both. Which one you see depends on the experiment (wave–particle duality).` },
        { topic: R`Photoelectric effect`, level: 'Main', q: R`A metal has a work function of 4.14 eV. Find its threshold frequency. (\(h = 4.14\times10^{-15}\) eV s)`,
          steps: [R`\(\nu_0 = \dfrac{\phi}{h} = \dfrac{4.14}{4.14\times10^{-15}}\).`],
          ans: R`\(10^{15}\) Hz (in the UV)` },
        { topic: R`Hertz & Lenard's observations`, level: 'Main', q: R`What did Hertz and Lenard observe that classical wave theory could not explain?`,
          steps: [R`Hertz (1887): UV light helped sparks jump across a gap. Lenard: UV on a metal plate ejected electrons and caused a current.`, R`Below a threshold frequency, no electrons came out however bright the light. Above it, emission was instantaneous.`],
          ans: R`The threshold frequency and the instantaneous emission. Wave theory predicted that any frequency would work, given enough intensity and time.` },
        { topic: R`Einstein's photoelectric equation`, level: 'Main', q: R`Light of wavelength 400 nm falls on a metal with work function 2 eV. Find \(K_{max}\) and the stopping potential.`,
          steps: [R`Photon energy \(= 1240/400 = 3.1\) eV.`, R`\(K_{max} = 3.1 - 2 = 1.1\) eV.`, R`\(V_0 = K_{max}/e\).`],
          ans: R`\(K_{max} = 1.1\) eV, \(V_0 = 1.1\) V` },
        { topic: R`Particle nature of light`, level: 'Main', q: R`A 1 mW laser emits light of 500 nm. How many photons does it emit per second?`,
          steps: [R`\(E = 1240/500 = 2.48\) eV \(= 3.97\times10^{-19}\) J per photon.`, R`\(N = \dfrac{10^{-3}}{3.97\times10^{-19}}\).`],
          ans: R`\(\approx 2.5\times10^{15}\) photons per second` },
        { topic: R`Matter waves: wave nature of particles`, level: 'Main', q: R`Find the de Broglie wavelength of a 0.15 kg cricket ball moving at 30 m/s. Why don't we notice it?`,
          steps: [R`\(\lambda = \dfrac{h}{mv} = \dfrac{6.63\times10^{-34}}{4.5}\).`],
          ans: R`\(\approx 1.5\times10^{-34}\) m, far too small to detect, so large objects behave classically.` },
        { topic: R`de Broglie relation`, level: 'Main', q: R`Find the de Broglie wavelength of an electron accelerated through 100 V.`,
          steps: [R`\(\lambda = \dfrac{1.227}{\sqrt{100}}\) nm.`],
          ans: R`0.1227 nm (≈ 1.23 Å)` }
      ],
      practice: [
        { q: R`Find the threshold wavelength of a metal with work function 2.48 eV.`, ans: R`\(\lambda_0 = 1240/2.48 = 500\) nm` },
        { q: R`If the intensity of light is doubled (at the same frequency), what happens to the stopping potential?`, ans: R`Nothing. Only the photocurrent increases.` }
      ]
    },
    {
      id: 'atoms-nuclei', title: 'Atoms and Nuclei', cls: 12,
      syllabus: [R`Alpha-particle scattering experiment`, R`Rutherford's model of the atom`, R`Bohr model, energy levels`, R`Hydrogen spectrum`, R`Composition & size of the nucleus`, R`Atomic masses, mass–energy relation`, R`Mass defect & binding energy per nucleon`, R`Nuclear fission & fusion`, R`Radioactivity, half-life`],
      concepts: [
        { h: R`Bohr model`, body: R`Electrons move in orbits where \(mvr = nh/2\pi\). The atom emits a photon when the electron jumps to a lower level. Spectral series: Lyman (to n = 1, UV), Balmer (to n = 2, visible), Paschen (to n = 3, IR).` },
        { h: R`Binding energy`, body: R`The mass of a nucleus is less than the total mass of its nucleons. That mass defect is the binding energy (\(1\,\text{u} = 931.5\) MeV). The binding energy per nucleon peaks near Fe-56. Heavy nuclei release energy by fission and light nuclei by fusion.` },
        { h: R`Radioactive decay`, body: R`Decay is random, but its rate is proportional to the number of nuclei present: \(N = N_0 e^{-\lambda t}\). After \(n\) half-lives, \(N = N_0/2^n\).` }
      ],
      formulas: [
        R`\(E_n = -\dfrac{13.6Z^2}{n^2}\) eV, \(r_n = 0.529\dfrac{n^2}{Z}\) Å`,
        R`\(\dfrac1\lambda = RZ^2\left(\dfrac1{n_1^2} - \dfrac1{n_2^2}\right)\)`,
        R`\(R = R_0A^{1/3}\), \(R_0 \approx 1.2\) fm`,
        R`\(T_{1/2} = \dfrac{0.693}{\lambda}\), mean life \(\tau = 1/\lambda\)`,
        R`\(\Delta E = \Delta m\,c^2\), \(1\,\text{u} \equiv 931.5\) MeV`
      ],
      examples: [
        { topic: R`Alpha-particle scattering experiment`, level: 'Advanced', q: R`A 5 MeV alpha particle heads straight at a gold nucleus (\(Z = 79\)). Find the distance of closest approach.`,
          steps: [R`All the KE becomes PE: \(K = \dfrac{k(2e)(79e)}{r_0}\).`, R`\(r_0 = \dfrac{9\times10^9\times158\times1.6\times10^{-19}}{5\times10^6}\) (with K in eV, one factor of \(e\) cancels).`],
          ans: R`\(\approx 4.5\times10^{-14}\) m, which sets an upper limit on the size of the nucleus` },
        { topic: R`Rutherford's model of the atom`, level: 'Main', q: R`Give two failures of Rutherford's nuclear model.`,
          steps: [R`An orbiting electron is accelerating, so classically it should radiate energy and spiral into the nucleus.`, R`It would emit a continuous spectrum, but atoms emit line spectra.`],
          ans: R`It cannot explain why atoms are stable, or why they emit line spectra. Bohr's model fixed both.` },
        { topic: R`Bohr model, energy levels`, level: 'Main', q: R`Find the ionisation energy of \(\text{He}^+\) and the ground-state energy of \(\text{Li}^{2+}\).`,
          steps: [R`\(E_1 = -13.6Z^2\) eV.`, R`He⁺ (\(Z = 2\)): \(-54.4\) eV. Li²⁺ (\(Z = 3\)): \(-122.4\) eV.`],
          ans: R`54.4 eV; \(-122.4\) eV` },
        { topic: R`Hydrogen spectrum`, level: 'Main', q: R`Find the energy and wavelength of the photon emitted when a hydrogen electron falls from n = 2 to n = 1.`,
          steps: [R`\(\Delta E = 13.6\left(1 - \tfrac14\right) = 10.2\) eV.`, R`\(\lambda = 1240/10.2\).`],
          ans: R`10.2 eV, \(\approx 121.6\) nm (the first Lyman line, in the UV)` },
        { topic: R`Composition & size of the nucleus`, level: 'Main', q: R`What is in the nucleus of \(^{56}_{26}\text{Fe}\), and what is its radius? (\(R_0 = 1.2\) fm)`,
          steps: [R`Protons \(= Z = 26\). Neutrons \(= A - Z = 30\).`, R`\(R = 1.2\times56^{1/3} = 1.2\times3.83\).`],
          ans: R`26 protons and 30 neutrons; \(R \approx 4.6\) fm` },
        { topic: R`Atomic masses, mass–energy relation`, level: 'Main', q: R`How much energy is equivalent to 1 g of mass?`,
          steps: [R`\(E = mc^2 = 10^{-3}\times(3\times10^8)^2\).`],
          ans: R`\(9\times10^{13}\) J` },
        { topic: R`Mass defect & binding energy per nucleon`, level: 'Main', q: R`Find the binding energy of the deuteron. (\(m_p = 1.007276\) u, \(m_n = 1.008665\) u, \(m_d = 2.013553\) u)`,
          steps: [R`\(\Delta m = (1.007276 + 1.008665) - 2.013553 = 0.002388\) u.`, R`\(BE = 0.002388\times931.5\).`],
          ans: R`\(\approx 2.22\) MeV (1.11 MeV per nucleon)` },
        { topic: R`Nuclear fission & fusion`, level: 'Main', q: R`Each fission of U-235 releases about 200 MeV. Find the energy from fissioning 1 kg completely.`,
          steps: [R`\(N = \dfrac{1000}{235}\times6.022\times10^{23} = 2.56\times10^{24}\) nuclei.`, R`\(E = 2.56\times10^{24}\times200\times1.6\times10^{-13}\) J.`],
          ans: R`\(\approx 8.2\times10^{13}\) J` },
        { topic: R`Radioactivity, half-life`, level: 'Main', q: R`A sample has a half-life of 10 days. What fraction remains after 30 days?`,
          steps: [R`30 days is \(30/10 = 3\) half-lives.`, R`Fraction \(= (1/2)^3\).`],
          ans: R`1/8` }
      ],
      practice: [
        { q: R`The mass defect of He-4 is 0.0304 u. Find its binding energy.`, ans: R`\(0.0304\times931.5 \approx 28.3\) MeV (7.07 MeV per nucleon)` },
        { q: R`Find the ratio of the nuclear radii of Al-27 and H-1.`, ans: R`\((27)^{1/3} : 1 = 3 : 1\)` }
      ]
    },
    {
      id: 'electronic-devices', title: 'Electronic Devices', cls: 12,
      syllabus: [R`Semiconductors`, R`Semiconductor diode: I–V characteristics in forward & reverse bias`, R`Diode as a rectifier`, R`LED, photodiode, solar cell`, R`Zener diode as a voltage regulator`, R`Logic gates (OR, AND, NOT, NAND, NOR)`],
      concepts: [
        { h: R`Doping`, body: R`Adding pentavalent atoms (P, As) gives an n-type semiconductor, where electrons carry most of the current. Adding trivalent atoms (B, Al) gives a p-type semiconductor, where holes do.` },
        { h: R`p–n junction`, body: R`In forward bias, current flows once the voltage passes the knee voltage (≈ 0.7 V for Si, 0.3 V for Ge). In reverse bias only a tiny current flows, until breakdown.` },
        { h: R`Rectifiers`, body: R`A half-wave rectifier's output has the same frequency as its input. A full-wave rectifier's output ripple has <b>twice</b> the input frequency.` },
        { h: R`Logic gates`, body: R`NAND and NOR are <b>universal gates</b>: any other gate can be built from them alone.` }
      ],
      formulas: [
        R`AND: \(Y = A\cdot B\); OR: \(Y = A + B\); NOT: \(Y = \bar A\)`,
        R`NAND: \(Y = \overline{A\cdot B}\); NOR: \(Y = \overline{A + B}\)`,
        R`Intrinsic semiconductor: \(n_e = n_h = n_i\); in general \(n_e n_h = n_i^2\)`
      ],
      examples: [
        { topic: R`Semiconductors`, level: 'Main', q: R`Silicon (\(n_i = 1.5\times10^{16}\,\text{m}^{-3}\)) is doped with \(10^{22}\,\text{m}^{-3}\) donor atoms. Find the electron and hole concentrations. What type is it?`,
          steps: [R`Each donor gives an electron: \(n_e \approx 10^{22}\,\text{m}^{-3}\).`, R`\(n_h = \dfrac{n_i^2}{n_e} = \dfrac{2.25\times10^{32}}{10^{22}}\).`],
          ans: R`\(n_e = 10^{22}\), \(n_h = 2.25\times10^{10}\,\text{m}^{-3}\); n-type` },
        { topic: R`Semiconductor diode: I–V characteristics in forward & reverse bias`, level: 'Main', q: R`A silicon diode (drop 0.7 V) is forward-biased in series with a 1 kΩ resistor across a 5 V supply. Find the current.`,
          steps: [R`Voltage across the resistor \(= 5 - 0.7 = 4.3\) V.`, R`\(I = 4.3/1000\).`],
          ans: R`4.3 mA` },
        { topic: R`Diode as a rectifier`, level: 'Main', q: R`220 V rms, 50 Hz AC goes into an ideal half-wave rectifier. Find the peak output voltage and the output frequency.`,
          steps: [R`Peak \(= \sqrt2\times220\).`, R`Half-wave: one pulse per cycle, so the output frequency equals the input frequency. (A full-wave rectifier gives 100 Hz.)`],
          ans: R`\(\approx 311\) V; 50 Hz` },
        { topic: R`LED, photodiode, solar cell`, level: 'Main', q: R`A red LED emits light of 650 nm. Estimate its band gap. Why is a photodiode used in reverse bias?`,
          steps: [R`\(E_g \approx \dfrac{1240}{650}\) eV.`, R`In reverse bias the dark current is tiny, so the extra current from light is easy to measure.`],
          ans: R`\(\approx 1.9\) eV. Reverse bias makes the photodiode's current depend strongly on the light. A solar cell needs no bias.` },
        { topic: R`Zener diode as a voltage regulator`, level: 'Main', q: R`A 6 V Zener regulates the voltage across a 300 Ω load. The supply is 10 V and the series resistor is 100 Ω. Find the current through the Zener.`,
          steps: [R`Series current \(= (10 - 6)/100 = 40\) mA.`, R`Load current \(= 6/300 = 20\) mA.`, R`Zener current \(= 40 - 20\).`],
          ans: R`20 mA` },
        { topic: R`Logic gates (OR, AND, NOT, NAND, NOR)`, level: 'Main', q: R`Write the output of a NOR gate for the inputs (A, B) = (0,0), (0,1), (1,0), (1,1).`,
          steps: [R`NOR is OR followed by NOT.`, R`OR outputs: 0, 1, 1, 1.`, R`Inverting them gives the result.`],
          ans: R`1, 0, 0, 0` }
      ],
      practice: [
        { q: R`The input to a full-wave rectifier is 50 Hz AC. What is the output ripple frequency?`, ans: R`100 Hz` },
        { q: R`Which gates are called universal gates?`, ans: R`NAND and NOR` }
      ]
    },
    {
      id: 'experimental-skills', title: 'Experimental Skills', cls: 12,
      syllabus: [R`Vernier callipers`, R`Screw gauge`, R`Simple pendulum`, R`Metre scale & principle of moments`, R`Young's modulus by Searle's method`, R`Surface tension by capillary rise`, R`Viscosity by terminal velocity`, R`Speed of sound using a resonance tube`, R`Specific heat by method of mixtures`, R`Resistivity using a metre bridge`, R`Ohm's law`, R`Galvanometer: resistance & figure of merit`, R`Focal length of mirrors & lenses`, R`Refractive index of a glass slab`, R`Diode & Zener characteristics`],
      concepts: [
        { h: R`Vernier callipers`, body: R`Least count = 1 MSD − 1 VSD. Reading = main scale reading + (coinciding vernier division × LC), then subtract the zero error.` },
        { h: R`Screw gauge`, body: R`Least count = pitch ÷ number of circular-scale divisions. A <b>positive</b> zero error is subtracted from the reading.` },
        { h: R`Metre bridge`, body: R`For best accuracy, the balance point should lie near the middle of the wire. Swap the two resistors and take the average of the two results to cancel end errors.` }
      ],
      formulas: [
        R`Vernier LC \(= 1\,\text{MSD} - 1\,\text{VSD} = \dfrac{1\,\text{MSD}}{n}\) (when \(n\) VSD \(= (n-1)\) MSD)`,
        R`Screw gauge LC \(= \dfrac{\text{pitch}}{\text{no. of circular divisions}}\)`,
        R`Pendulum: \(g = \dfrac{4\pi^2L}{T^2}\)`,
        R`Resonance tube: \(v = 2f(l_2 - l_1)\)`
      ],
      examples: [
        { topic: R`Vernier callipers`, level: 'Main', q: R`On a vernier, 10 VSD = 9 MSD, and 1 MSD = 1 mm. The main scale reads 2.3 cm and the 6th vernier division coincides. Find the reading.`,
          steps: [R`LC \(= 1 - 0.9 = 0.1\) mm \(= 0.01\) cm.`, R`Reading \(= 2.3 + 6\times0.01\).`],
          ans: R`2.36 cm` },
        { topic: R`Screw gauge`, level: 'Main', q: R`A screw gauge has pitch 0.5 mm and 50 circular divisions. It reads 3 mm on the main scale and 35 on the circular scale, with a zero error of +0.03 mm. Find the true reading.`,
          steps: [R`LC \(= 0.5/50 = 0.01\) mm.`, R`Observed \(= 3 + 35\times0.01 = 3.35\) mm.`, R`True \(= 3.35 - 0.03\).`],
          ans: R`3.32 mm` },
        { topic: R`Simple pendulum`, level: 'Main', q: R`A 1.00 m pendulum makes 20 oscillations in 40.2 s. Find \(g\).`,
          steps: [R`\(T = 40.2/20 = 2.01\) s.`, R`\(g = \dfrac{4\pi^2L}{T^2} = \dfrac{39.48}{4.040}\).`],
          ans: R`\(\approx 9.77\,\text{m/s}^2\)` },
        { topic: R`Metre scale & principle of moments`, level: 'Main', q: R`A metre scale balances on a pivot at 50 cm with 20 g hung at the 20 cm mark and an unknown mass at the 70 cm mark. Find the unknown mass.`,
          steps: [R`Principle of moments about the pivot: \(20\times30 = m\times20\).`],
          ans: R`30 g` },
        { topic: R`Young's modulus by Searle's method`, level: 'Main', q: R`In Searle's experiment, a 2 m wire of diameter 0.5 mm stretches by 2.5 mm under a 5 kg load. Find \(Y\). (\(g = 10\))`,
          steps: [R`\(A = \pi(0.25\times10^{-3})^2 = 1.96\times10^{-7}\,\text{m}^2\).`, R`\(Y = \dfrac{FL}{A\,\Delta L} = \dfrac{50\times2}{1.96\times10^{-7}\times2.5\times10^{-3}}\).`],
          ans: R`\(\approx 2.0\times10^{11}\) Pa (steel)` },
        { topic: R`Surface tension by capillary rise`, level: 'Main', q: R`Water rises 6 cm in a capillary of radius 0.25 mm. Find its surface tension. (\(\theta = 0\), \(g = 9.8\))`,
          steps: [R`\(T = \dfrac{rh\rho g}{2} = \dfrac{0.25\times10^{-3}\times0.06\times1000\times9.8}{2}\).`],
          ans: R`\(\approx 0.074\) N/m` },
        { topic: R`Viscosity by terminal velocity`, level: 'Main', q: R`A steel ball (radius 1 mm, density 7800) falls through glycerine (density 1260) at a terminal velocity of 2 cm/s. Find \(\eta\). (\(g = 9.8\))`,
          steps: [R`\(\eta = \dfrac{2r^2(\rho - \sigma)g}{9v} = \dfrac{2\times10^{-6}\times6540\times9.8}{9\times0.02}\).`],
          ans: R`\(\approx 0.71\) Pa s` },
        { topic: R`Speed of sound using a resonance tube`, level: 'Main', q: R`With a 512 Hz fork, a resonance tube gives resonance lengths of 16 cm and 49 cm. Find the speed of sound and the end correction.`,
          steps: [R`\(v = 2f(l_2 - l_1) = 2\times512\times0.33\).`, R`End correction \(e = \dfrac{l_2 - 3l_1}{2} = \dfrac{49 - 48}{2}\).`],
          ans: R`\(\approx 338\) m/s; 0.5 cm` },
        { topic: R`Specific heat by method of mixtures`, level: 'Main', q: R`200 g of metal at 100 °C is dropped into 100 g of water at 20 °C, and the final temperature is 30 °C. Find the metal's specific heat. (\(c_w = 4200\) J/kg K, ignore the calorimeter)`,
          steps: [R`Heat lost = heat gained: \(0.2\,c(70) = 0.1(4200)(10)\).`, R`\(c = 4200/14\).`],
          ans: R`300 J/kg K` },
        { topic: R`Resistivity using a metre bridge`, level: 'Main', q: R`A 50 cm wire of diameter 0.4 mm is in the left gap of a metre bridge and 2 Ω is in the right gap. The balance point is at 60 cm. Find the wire's resistivity.`,
          steps: [R`\(X = 2\times60/40 = 3\,\Omega\).`, R`\(\rho = \dfrac{XA}{L} = \dfrac{3\times\pi(0.2\times10^{-3})^2}{0.5}\).`],
          ans: R`\(\approx 7.5\times10^{-7}\,\Omega\) m` },
        { topic: R`Ohm's law`, level: 'Main', q: R`V–I readings for a resistor: (1 V, 0.2 A), (2 V, 0.4 A), (3 V, 0.6 A). Is Ohm's law obeyed? Find R.`,
          steps: [R`V/I is the same for every reading, so the graph is a straight line through the origin.`, R`R = slope of V against I.`],
          ans: R`Yes; \(R = 5\,\Omega\)` },
        { topic: R`Galvanometer: resistance & figure of merit`, level: 'Main', q: R`Half-deflection method: with \(R = 5000\,\Omega\) the galvanometer reads 30 divisions. A shunt of 50 Ω brings it to 15. Find G, and the figure of merit (cell emf 2 V).`,
          steps: [R`\(G = \dfrac{RS}{R - S} = \dfrac{5000\times50}{4950} \approx 50.5\,\Omega\).`, R`\(k = \dfrac{E}{(R + G)\theta} = \dfrac{2}{5050.5\times30}\).`],
          ans: R`\(G \approx 50.5\,\Omega\), \(k \approx 1.3\times10^{-5}\) A per division` },
        { topic: R`Focal length of mirrors & lenses`, level: 'Main', q: R`In the u–v method, an object at 40 cm gives a sharp image 40 cm on the other side of a convex lens. Find \(f\).`,
          steps: [R`\(\dfrac1f = \dfrac1v - \dfrac1u = \dfrac1{40} + \dfrac1{40}\).`],
          ans: R`20 cm (the object and image are at \(2f\))` },
        { topic: R`Refractive index of a glass slab`, level: 'Main', q: R`A travelling microscope shows a glass slab's real thickness as 3.0 cm and its apparent thickness as 2.0 cm. Find \(n\).`,
          steps: [R`\(n = \dfrac{\text{real thickness}}{\text{apparent thickness}}\).`],
          ans: R`1.5` },
        { topic: R`Diode & Zener characteristics`, level: 'Main', q: R`On a diode's forward characteristic, the current rises from 10 mA to 30 mA as the voltage goes from 0.70 V to 0.75 V. Find the dynamic resistance.`,
          steps: [R`\(r_d = \dfrac{\Delta V}{\Delta I} = \dfrac{0.05}{0.02}\).`],
          ans: R`\(2.5\,\Omega\)` }
      ],
      practice: [
        { q: R`In a metre bridge with 30 Ω in the right gap, the balance point is 40 cm from the left end. Find the unknown resistance X in the left gap.`, ans: R`\(X = 30\times\dfrac{40}{60} = 20\,\Omega\)` },
        { q: R`Why is a long pendulum preferred when measuring \(g\)?`, ans: R`A longer pendulum has a longer period, so the timing error is a smaller percentage of the period.` }
      ]
    }
  ]
};
