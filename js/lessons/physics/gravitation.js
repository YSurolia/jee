// Lesson: Gravitation.
var R = String.raw;
JEE.lesson('physics', 'gravitation', {
  theory: [
    { h: R`Everything pulls everything: the universal law`,
      body: [
        R`Newton realised that the force making an apple fall is the same force keeping the Moon in orbit. <b>Every mass attracts every other mass.</b>`,
        R`For two masses \(m_1\) and \(m_2\) a distance \(r\) apart: \(F = \dfrac{Gm_1m_2}{r^2}\), where \(G = 6.67\times10^{-11}\) N m²/kg² is the <b>universal gravitational constant</b>.`,
        R`The force follows an <b>inverse-square law</b>: double the distance and the force becomes a quarter. Because \(G\) is so tiny, we only notice gravity when at least one mass is huge, like the Earth.`
      ],
      analogy: R`You and your friend attract each other gravitationally right now, but the force is less than the weight of a speck of dust. The Earth, with its enormous mass, pulls you with about 600 N.`,
      points: [R`Gravity is always attractive.`, R`It acts along the line joining the two centres.`, R`It is the weakest of the fundamental forces, but it has infinite range.`],
      check: { q: R`If the distance between two masses is tripled, what happens to the force?`, ans: R`It becomes \(1/9\) of the original (inverse-square law).` } },

    { h: R`Acceleration due to gravity (g)`,
      body: [
        R`The Earth pulls a mass \(m\) at its surface with force \(\dfrac{GMm}{R^2}\). Dividing by \(m\) gives the acceleration of any falling body: \(g = \dfrac{GM}{R^2} \approx 9.8\) m/s². It does not depend on the falling body's own mass.`,
        R`<b>Mass</b> (kg) is the amount of matter and is the same everywhere. <b>Weight</b> \(= mg\) (N) is the gravitational pull, which changes from place to place.`
      ],
      analogy: R`An astronaut of mass 60 kg has a mass of 60 kg on the Moon too, but weighs only about a sixth as much, because the Moon's \(g\) is about \(1.6\) m/s².`,
      mistake: R`Saying "my weight is 50 kg". 50 kg is your mass; your weight is about 500 N.` },

    { h: R`How g changes with height and depth`,
      body: [
        R`<b>Going up:</b> you move farther from the Earth's centre, so \(g\) decreases: \(g_h = \dfrac{g}{(1 + h/R)^2}\). For small heights, \(g_h \approx g\left(1 - \dfrac{2h}{R}\right)\).`,
        R`<b>Going down</b> (into a mine): the shell of rock above you pulls you equally in all directions, so its pulls cancel out. Only the smaller ball of Earth below your depth pulls you, so \(g_d = g\left(1 - \dfrac{d}{R}\right)\), which becomes zero at the centre.`,
        R`So \(g\) is greatest at the Earth's surface. It is also slightly less at the equator than at the poles, because of the Earth's rotation and bulging shape.`
      ],
      points: [R`At height \(h = R\): \(g/4\). At depth \(d = R/2\): \(g/2\). At the centre: 0.`, R`Weight at the centre of the Earth is zero.`] },

    { h: R`Kepler's three laws of planetary motion`,
      body: [
        R`<b>1. Law of orbits:</b> every planet moves in an ellipse with the Sun at one focus.`,
        R`<b>2. Law of areas:</b> the line from the Sun to the planet sweeps out equal areas in equal times. So a planet moves fastest when nearest the Sun. This comes from conservation of angular momentum.`,
        R`<b>3. Law of periods:</b> \(T^2 \propto a^3\), where \(a\) is the average distance (semi-major axis). Farther planets take much longer to go round.`
      ],
      analogy: R`Like a skater pulling in her arms, a planet speeds up as it comes closer to the Sun and slows down as it moves away.`,
      check: { q: R`A planet is 4 times as far from the Sun as Earth. How long is its year?`, ans: R`\(T \propto a^{3/2} = 4^{3/2} = 8\) Earth years.` } },

    { h: R`Gravitational potential energy and potential`,
      body: [
        R`\(U = mgh\) only works near the surface. In general, the gravitational potential energy of two masses is \(U = -\dfrac{GMm}{r}\). It is zero when they are infinitely far apart and becomes more negative as they come closer.`,
        R`The negative sign means the masses are <b>bound</b>: you must supply energy to separate them.`,
        R`<b>Gravitational potential</b> is the potential energy per unit mass: \(V = -\dfrac{GM}{r}\). The <b>gravitational field</b> (force per unit mass) is \(E = \dfrac{GM}{r^2}\), which equals \(g\) at the surface.`
      ],
      mistake: R`Using \(mgh\) for heights comparable to the Earth's radius. Use \(\Delta U = GMm\left(\dfrac1{r_1} - \dfrac1{r_2}\right)\) instead.` },

    { h: R`Escape velocity`,
      body: [
        R`If you throw a ball up faster and faster, eventually it will never come back. The minimum launch speed for that is the <b>escape velocity</b>.`,
        R`Its KE must be enough to cancel the negative PE: \(\tfrac12mv_e^2 = \dfrac{GMm}{R}\), so \(v_e = \sqrt{\dfrac{2GM}{R}} = \sqrt{2gR} \approx 11.2\) km/s for Earth.`,
        R`It does not depend on the mass of the object or the direction of launch.`
      ],
      analogy: R`The Moon has no air because its escape velocity is only about 2.4 km/s. Gas molecules there move fast enough to escape into space.`,
      points: [R`\(v_e = \sqrt2\times\) (orbital speed close to the surface).`] },

    { h: R`Satellites: orbital speed, period and energy`,
      body: [
        R`A satellite falls towards the Earth all the time, but moves sideways so fast that it keeps missing it! Gravity provides the centripetal force: \(\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}\), so \(v_o = \sqrt{\dfrac{GM}{r}}\). Close to the surface, \(v_o = \sqrt{gR} \approx 7.9\) km/s.`,
        R`Its period is \(T = \dfrac{2\pi r}{v_o} = 2\pi\sqrt{\dfrac{r^3}{GM}}\) (Kepler's third law again).`,
        R`Energies: \(K = \dfrac{GMm}{2r}\), \(U = -\dfrac{GMm}{r}\), total \(E = -\dfrac{GMm}{2r}\).`,
        R`A <b>geostationary</b> satellite orbits above the equator once every 24 h in the same direction as the Earth spins, at a height of about 36,000 km, so it appears fixed in the sky (used for TV and weather). Astronauts feel <b>weightless</b> because they and their spacecraft are falling together.`
      ],
      points: [R`Higher orbit → slower speed, longer period, but more (less negative) total energy.`, R`\(K = -E\) and \(U = 2E\) for a circular orbit.`],
      mistake: R`Thinking there is no gravity in the space station. Gravity there is about 90% of its value on the ground; the astronauts are simply in free fall.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Find the Earth's pull on a 1 kg ball at its surface. (\(M = 6\times10^{24}\) kg, \(R = 6.4\times10^6\) m, \(G = 6.67\times10^{-11}\))`,
      steps: [R`\(F = \dfrac{GMm}{R^2} = \dfrac{6.67\times10^{-11}\times6\times10^{24}\times1}{(6.4\times10^6)^2}\).`, R`\(= \dfrac{4.0\times10^{14}}{4.1\times10^{13}}\).`],
      ans: R`\(\approx 9.8\) N, which is why \(g \approx 9.8\) m/s²` },
    { level: 1, t: 1, q: R`A 60 kg astronaut goes to the Moon, where \(g\) is one-sixth of Earth's. Find her mass and weight there. (Earth g = 10)`,
      steps: [R`Mass does not change: 60 kg.`, R`Weight \(= m\times\dfrac{g}{6} = 60\times\dfrac{10}{6}\).`],
      ans: R`Mass 60 kg; weight 100 N (on Earth it is 600 N)` },
    { level: 1, t: 2, q: R`A planet is 4 AU from the Sun (Earth is 1 AU). How many Earth years does it take to go round once?`,
      steps: [R`Kepler's third law: \(T^2 \propto a^3\).`, R`\(T = 1\times4^{3/2} = 8\).`],
      ans: R`8 years` },
    { level: 3, t: 1, q: R`At what depth below the surface is \(g\) the same as its value at a height \(R/2\) above the surface?`,
      steps: [R`At height \(R/2\): \(g_h = \dfrac{g}{(1 + 1/2)^2} = \dfrac{4g}{9}\).`, R`At depth \(d\): \(g\left(1 - \dfrac dR\right) = \dfrac{4g}{9}\).`, R`\(\dfrac dR = \dfrac59\).`],
      ans: R`\(d = \dfrac{5R}{9}\)` },
    { level: 3, t: 6, q: R`How much energy is needed to move a 1000 kg satellite from a circular orbit of radius \(2R\) to one of radius \(3R\)? (g = 10, \(R = 6.4\times10^6\) m)`,
      steps: [R`\(E = -\dfrac{GMm}{2r}\), so \(\Delta E = \dfrac{GMm}{2}\left(\dfrac1{2R} - \dfrac1{3R}\right) = \dfrac{GMm}{12R}\).`, R`\(GM = gR^2\), so \(\Delta E = \dfrac{mgR}{12} = \dfrac{1000\times10\times6.4\times10^6}{12}\).`],
      ans: R`\(\approx 5.3\times10^9\) J` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The value of the universal gravitational constant \(G\) is:`,
      options: [R`\(6.67\times10^{-11}\) N m²/kg²`, R`9.8 m/s²`, R`\(6.67\times10^{11}\) N m²/kg²`, R`\(3\times10^8\) m/s`], correct: 0,
      solution: R`\(G = 6.67\times10^{-11}\) N m²/kg². 9.8 m/s² is \(g\), which is a different quantity.` },
    { level: 1, type: 'mcq', q: R`If the distance between two masses is doubled, the gravitational force between them becomes:`,
      options: [R`half`, R`double`, R`4 times`, R`one-fourth`], correct: 3,
      solution: R`\(F \propto 1/r^2\): \(1/2^2 = 1/4\).` },
    { level: 1, type: 'mcq', q: R`The weight of a body at the centre of the Earth is:`,
      options: [R`maximum`, R`zero`, R`the same as at the surface`, R`infinite`], correct: 1,
      solution: R`\(g_d = g(1 - d/R)\) becomes 0 when \(d = R\).` },
    { level: 1, type: 'mcq', q: R`Compared with its value on Earth, the mass of a body on the Moon is:`,
      options: [R`the same`, R`one-sixth`, R`six times`, R`zero`], correct: 0,
      solution: R`Mass is the amount of matter and does not change. Only the weight changes.` },
    { level: 1, type: 'num', q: R`On the Moon, \(g = 10/6\) m/s². What is the weight (in N) of a 90 kg astronaut there?`,
      answer: 150, tol: 0.5, unit: 'N',
      solution: R`\(W = mg = 90\times\tfrac{10}{6} = 150\) N.` },
    { level: 1, type: 'num', q: R`A planet has twice the Earth's mass and the same radius. Its \(g\) is how many times the Earth's?`,
      answer: 2, tol: 0.01, unit: '',
      solution: R`\(g = GM/R^2 \propto M\), so it is 2 times.` },
    { level: 2, type: 'mcq', q: R`For a small height \(h\) above the Earth's surface, \(g\) becomes approximately:`,
      options: [R`\(g(1 - h/R)\)`, R`\(g(1 - 2h/R)\)`, R`\(g(1 + 2h/R)\)`, R`\(g(1 - h/2R)\)`], correct: 1,
      solution: R`\(g/(1 + h/R)^2 \approx g(1 - 2h/R)\) for \(h \ll R\).` },
    { level: 2, type: 'mcq', q: R`Kepler's second law (equal areas in equal times) follows from conservation of:`,
      options: [R`energy`, R`linear momentum`, R`angular momentum`, R`mass`], correct: 2,
      solution: R`Gravity acts towards the Sun, so it exerts no torque about it. The planet's angular momentum is therefore constant, which gives equal areal speed.` },
    { level: 2, type: 'mcq', q: R`Escape velocity \(v_e\) and orbital velocity \(v_o\) close to the Earth's surface are related by:`,
      options: [R`\(v_e = \sqrt2\,v_o\)`, R`\(v_e = v_o\)`, R`\(v_e = 2v_o\)`, R`\(v_o = \sqrt2\,v_e\)`], correct: 0,
      solution: R`\(v_e = \sqrt{2gR}\) and \(v_o = \sqrt{gR}\), so \(v_e = \sqrt2\,v_o\).` },
    { level: 2, type: 'mcq', q: R`The period of a geostationary satellite is:`,
      options: [R`1 hour`, R`12 hours`, R`365 days`, R`24 hours`], correct: 3,
      solution: R`It must turn with the Earth, so its period is one day (24 h).` },
    { level: 2, type: 'num', q: R`A planet's orbit is 9 times the size of Earth's (same Sun). How many Earth years is its period?`,
      answer: 27, tol: 0.01, unit: 'years',
      solution: R`\(T \propto a^{3/2} = 9^{3/2} = 27\).` },
    { level: 2, type: 'num', q: R`What fraction of the surface value is \(g\) at a depth of \(R/4\)?`,
      answer: 0.75, tol: 0.001, unit: '',
      solution: R`\(g_d/g = 1 - d/R = 1 - 1/4 = 0.75\).` },
    { level: 2, type: 'num', q: R`Find the orbital speed (in km/s) of a satellite just above the Earth's surface. (g = 10, \(R = 6.4\times10^6\) m)`,
      answer: 8, tol: 0.05, unit: 'km/s',
      solution: R`\(v = \sqrt{gR} = \sqrt{6.4\times10^7} = 8000\) m/s \(= 8\) km/s.` },
    { level: 3, type: 'mcq', q: R`The total energy of a satellite of mass \(m\) in a circular orbit of radius \(r\) is:`,
      options: [R`\(GMm/2r\)`, R`\(-GMm/r\)`, R`\(-GMm/2r\)`, R`\(-2GMm/r\)`], correct: 2,
      solution: R`\(K = GMm/2r\) and \(U = -GMm/r\); adding them gives \(-GMm/2r\).` },
    { level: 3, type: 'mcq', q: R`If the Earth shrank to half its radius with no change in mass, the value of \(g\) at its surface would become:`,
      options: [R`\(g/2\)`, R`\(2g\)`, R`\(g/4\)`, R`\(4g\)`], correct: 3,
      solution: R`\(g = GM/R^2\). Halving \(R\) multiplies \(g\) by 4.` },
    { level: 3, type: 'num', q: R`A planet has 8 times the Earth's mass and 2 times its radius. Find its escape velocity (in km/s), taking Earth's as 11.2 km/s.`,
      answer: 22.4, tol: 0.05, unit: 'km/s',
      solution: R`\(v_e \propto \sqrt{M/R} = \sqrt{8/2} = 2\), so \(v_e = 22.4\) km/s.` },
    { level: 3, type: 'num', q: R`For a satellite in a circular orbit, find the ratio of its kinetic energy to its potential energy.`,
      answer: -0.5, tol: 0.001, unit: '',
      solution: R`\(K = GMm/2r\) and \(U = -GMm/r\), so \(K/U = -1/2\).` }
  ]
});
