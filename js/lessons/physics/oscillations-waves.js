// Lesson: Oscillations and Waves.
var R = String.raw;
JEE.lesson('physics', 'oscillations-waves', {
  theory: [
    { h: R`Periodic and oscillatory motion`,
      body: [
        R`Motion that repeats itself after equal intervals of time is <b>periodic</b>: the hands of a clock, the Earth going round the Sun, your heartbeat.`,
        R`If the body moves back and forth about a fixed middle point, it is <b>oscillating</b>: a swing, a guitar string, a mass on a spring.`,
        R`The <b>time period</b> \(T\) is the time for one full repetition. The <b>frequency</b> \(f = 1/T\) is the number of repetitions per second, measured in hertz (Hz). Angular frequency \(\omega = 2\pi f\).`
      ],
      analogy: R`A child on a swing goes from one end to the other and back. One full trip is one oscillation; the time it takes is the period.`,
      check: { q: R`A wheel turns 300 times a minute. What are its frequency and period?`, ans: R`\(f = 300/60 = 5\) Hz, so \(T = 0.2\) s.` } },

    { h: R`Simple harmonic motion (SHM)`,
      body: [
        R`SHM is the simplest oscillation. The restoring force always pulls the body back towards the middle and is proportional to the displacement: \(F = -kx\).`,
        R`This gives a sine-wave motion: \(x = A\sin(\omega t + \phi)\), where \(A\) is the <b>amplitude</b> (maximum displacement).`,
        R`Velocity: \(v = \omega\sqrt{A^2 - x^2}\), largest (\(A\omega\)) at the middle and zero at the ends. Acceleration: \(a = -\omega^2x\), largest at the ends and zero in the middle.`
      ],
      analogy: R`A ball rolling inside a round bowl: the farther it goes up the side, the harder it is pulled back towards the bottom.`,
      points: [R`Condition for SHM: \(a \propto -x\).`, R`The period of SHM does not depend on the amplitude.`],
      mistake: R`Saying the speed is maximum at the extreme position. At the extremes the body stops for an instant, so speed is zero there and acceleration is largest.` },

    { h: R`Phase`,
      body: [
        R`The <b>phase</b> \((\omega t + \phi)\) tells exactly where in its cycle the body is and which way it is moving. \(\phi\) is the <b>initial phase</b>, the phase at \(t = 0\).`,
        R`Two oscillators are <b>in phase</b> if they reach the same point together (phase difference 0), and <b>out of phase</b> if one is at +A while the other is at −A (phase difference \(\pi\)).`
      ],
      analogy: R`Two children on swings side by side: if they always go forward together, they are in phase. If one goes forward while the other goes back, they are out of phase.` },

    { h: R`A mass on a spring`,
      body: [
        R`A mass \(m\) on a spring of stiffness \(k\) does SHM with \(\omega = \sqrt{k/m}\) and period \(T = 2\pi\sqrt{\dfrac mk}\).`,
        R`A heavier mass or a softer spring gives slower oscillations.`,
        R`<b>Combining springs:</b> in parallel the stiffnesses add: \(k = k_1 + k_2\). In series, the reciprocals add: \(\dfrac1k = \dfrac1{k_1} + \dfrac1{k_2}\).`
      ],
      points: [R`The period of a spring–mass system is the same on the Moon as on Earth (it doesn't involve \(g\)).`] },

    { h: R`Energy in SHM`,
      body: [
        R`Energy keeps switching between kinetic and potential. At position \(x\): \(U = \tfrac12kx^2\) and \(K = \tfrac12k(A^2 - x^2)\).`,
        R`The total \(E = \tfrac12kA^2\) stays constant: all PE at the ends, all KE in the middle.`
      ],
      points: [R`KE = PE at \(x = A/\sqrt2\).`, R`Energy ∝ (amplitude)².`] },

    { h: R`The simple pendulum`,
      body: [
        R`A small bob on a light string swinging through small angles does SHM with \(T = 2\pi\sqrt{\dfrac Lg}\).`,
        R`The period depends only on the length and on \(g\), not on the bob's mass, and (for small swings) not on the amplitude. This is why pendulums were used in clocks.`,
        R`In a lift accelerating upward with \(a\), use \(g_{eff} = g + a\); accelerating downward, \(g - a\). In free fall, the pendulum stops swinging.`
      ],
      analogy: R`Grandfather clocks run slow in summer: the pendulum rod expands, L increases, so T increases.`,
      check: { q: R`If the length of a pendulum is made 4 times as long, what happens to its period?`, ans: R`\(T \propto \sqrt L\), so the period doubles.` } },

    { h: R`Waves: carrying energy without carrying matter`,
      body: [
        R`A <b>wave</b> is a disturbance that travels through a medium, carrying energy from place to place while the particles of the medium only oscillate about their positions.`,
        R`<b>Transverse waves:</b> particles move perpendicular to the wave direction (waves on a string, ripples on water). <b>Longitudinal waves:</b> particles move along the wave direction, forming compressions and rarefactions (sound in air).`,
        R`Wave speed \(v = f\lambda\). On a stretched string, \(v = \sqrt{T/\mu}\) (tension ÷ mass per unit length). For sound, \(v = \sqrt{\gamma P/\rho}\) (about 340 m/s in air).`
      ],
      analogy: R`In a "Mexican wave" in a cricket stadium, each spectator only stands up and sits down, but the wave runs all the way round the stadium.`,
      points: [R`Transverse mechanical waves need a solid (or a surface); they can't travel inside liquids or gases.`, R`Sound can't travel through vacuum.`] },

    { h: R`The equation of a travelling wave`,
      body: [
        R`A wave moving along +x is written \(y = A\sin(kx - \omega t)\) (or \(\sin(\omega t - kx)\)). Here \(k = \dfrac{2\pi}{\lambda}\) is the <b>wave number</b> and \(\omega = 2\pi f\).`,
        R`Wave speed \(v = \omega/k\). A plus sign, \((kx + \omega t)\), means the wave moves towards −x.`
      ],
      mistake: R`Confusing the particle's speed (\(\partial y/\partial t\), which changes) with the wave's speed (\(\omega/k\), which is constant).` },

    { h: R`Superposition, reflection and standing waves`,
      body: [
        R`When two waves meet, the total displacement is the sum of the individual displacements (<b>superposition</b>). They can add up (constructive) or cancel (destructive).`,
        R`A wave reflected from a fixed end comes back inverted (phase change \(\pi\)); from a free end it comes back upright.`,
        R`A wave and its reflection travelling in opposite directions form a <b>standing wave</b>, with points that never move (<b>nodes</b>) and points that move the most (<b>antinodes</b>). Neighbouring nodes are \(\lambda/2\) apart.`
      ],
      analogy: R`Shake one end of a rope tied to a wall at just the right speed, and it seems to stand still in loops. Those loops are a standing wave.` },

    { h: R`Strings, organ pipes and harmonics`,
      body: [
        R`<b>String fixed at both ends</b> (guitar, sitar): nodes at both ends, so \(f_n = \dfrac{nv}{2L}\), \(n = 1, 2, 3, \dots\) (all harmonics).`,
        R`<b>Open pipe</b> (flute): antinodes at both ends, also all harmonics: \(f_n = \dfrac{nv}{2L}\).`,
        R`<b>Closed pipe</b> (one end closed): node at the closed end, antinode at the open end, so only odd harmonics: \(f = \dfrac{v}{4L}, \dfrac{3v}{4L}, \dfrac{5v}{4L}, \dots\)`,
        R`The lowest frequency is the <b>fundamental</b>; the others are <b>harmonics</b> or overtones.`
      ],
      points: [R`Tightening a sitar string raises \(T\), hence \(v\), hence the pitch.`, R`A closed pipe's fundamental is half that of an open pipe of the same length.`] },

    { h: R`Beats and the Doppler effect`,
      body: [
        R`Two sounds with slightly different frequencies \(f_1\) and \(f_2\) make the loudness rise and fall regularly. These are <b>beats</b>, with beat frequency \(|f_1 - f_2|\). Musicians use beats to tune instruments: when the beats disappear, the notes match.`,
        R`<b>Doppler effect:</b> when a source of sound and a listener approach each other, the heard pitch is higher; when they move apart, it is lower: \(f' = f\dfrac{v \pm v_o}{v \mp v_s}\).`
      ],
      analogy: R`A train's horn sounds higher as it comes towards the platform and suddenly lower as it passes. That is the Doppler effect.`,
      check: { q: R`Tuning forks of 384 Hz and 387 Hz are sounded together. How many beats per second are heard?`, ans: R`\(387 - 384 = 3\) beats per second.` } }
  ],

  examples: [
    { level: 1, t: 0, q: R`A heart beats 72 times per minute. Find the frequency and period of the heartbeat.`,
      steps: [R`\(f = 72/60 = 1.2\) Hz.`, R`\(T = 1/f = 1/1.2\).`],
      ans: R`1.2 Hz; about 0.83 s` },
    { level: 1, t: 7, q: R`Sound travels at 340 m/s in air. Find the wavelength of a 170 Hz note.`,
      steps: [R`\(\lambda = v/f = 340/170\).`],
      ans: R`2 m` },
    { level: 1, t: 5, q: R`A pendulum has a period of 2 s on Earth. What would its period be on the Moon, where \(g\) is one-sixth as large?`,
      steps: [R`\(T \propto 1/\sqrt g\).`, R`\(T_{moon} = 2\times\sqrt6\).`],
      ans: R`\(\approx 4.9\) s` },
    { level: 3, t: 3, q: R`Two identical springs (stiffness \(k\) each) support a mass \(m\), first in parallel and then in series. Find the ratio of the periods (series : parallel).`,
      steps: [R`Parallel: \(k_p = 2k\), so \(T_p = 2\pi\sqrt{m/2k}\).`, R`Series: \(k_s = k/2\), so \(T_s = 2\pi\sqrt{2m/k}\).`, R`\(T_s/T_p = \sqrt{\dfrac{2m/k}{m/2k}} = \sqrt4\).`],
      ans: R`2 : 1` },
    { level: 3, t: 10, q: R`A 1 m sonometer wire of mass 10 g is under 100 N tension. Find its fundamental frequency. What tension would double it?`,
      steps: [R`\(\mu = 0.01\) kg/m, so \(v = \sqrt{100/0.01} = 100\) m/s.`, R`\(f_1 = \dfrac{v}{2L} = \dfrac{100}{2} = 50\) Hz.`, R`\(f \propto \sqrt T\), so doubling \(f\) needs 4 times the tension.`],
      ans: R`50 Hz; 400 N` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of frequency is the:`,
      options: [R`hertz`, R`second`, R`metre`, R`radian`], correct: 0,
      solution: R`1 Hz = 1 oscillation per second.` },
    { level: 1, type: 'mcq', q: R`In SHM, the acceleration is maximum at:`,
      options: [R`the mean position`, R`the extreme positions`, R`halfway between`, R`every point equally`], correct: 1,
      solution: R`\(a = -\omega^2x\) is largest when \(|x| = A\), at the extremes.` },
    { level: 1, type: 'mcq', q: R`Sound waves in air are:`,
      options: [R`transverse`, R`electromagnetic`, R`longitudinal`, R`both transverse and longitudinal`], correct: 2,
      solution: R`Air particles move back and forth along the direction of travel, forming compressions and rarefactions.` },
    { level: 1, type: 'mcq', q: R`For small swings, the period of a simple pendulum does NOT depend on:`,
      options: [R`its length`, R`the value of g`, R`where it is used`, R`the mass of the bob`], correct: 3,
      solution: R`\(T = 2\pi\sqrt{L/g}\): no mass in the formula.` },
    { level: 1, type: 'num', q: R`A wave has a frequency of 500 Hz and a wavelength of 0.68 m. Find its speed (in m/s).`,
      answer: 340, tol: 0.1, unit: 'm/s',
      solution: R`\(v = f\lambda = 500\times0.68 = 340\) m/s.` },
    { level: 1, type: 'num', q: R`A pendulum makes 30 oscillations in 60 s. Find its period (in s).`,
      answer: 2, tol: 0.001, unit: 's',
      solution: R`\(T = 60/30 = 2\) s.` },
    { level: 2, type: 'mcq', q: R`In SHM, at displacement \(x = A/2\), the ratio KE : PE is:`,
      options: [R`1 : 3`, R`3 : 1`, R`1 : 1`, R`1 : 2`], correct: 1,
      solution: R`\(PE \propto x^2 = A^2/4\); \(KE \propto A^2 - A^2/4 = 3A^2/4\). Ratio 3 : 1.` },
    { level: 2, type: 'mcq', q: R`A pipe closed at one end produces:`,
      options: [R`all harmonics`, R`only even harmonics`, R`only odd harmonics`, R`no harmonics`], correct: 2,
      solution: R`There must be a node at the closed end and an antinode at the open end, which allows only \(L = \lambda/4, 3\lambda/4, \dots\)` },
    { level: 2, type: 'mcq', q: R`In a standing wave, the distance between two neighbouring nodes is:`,
      options: [R`\(\lambda/4\)`, R`\(\lambda\)`, R`\(2\lambda\)`, R`\(\lambda/2\)`], correct: 3,
      solution: R`Nodes repeat every half wavelength.` },
    { level: 2, type: 'mcq', q: R`If the tension in a string is made 4 times as large, the speed of waves on it:`,
      options: [R`doubles`, R`halves`, R`becomes 4 times`, R`stays the same`], correct: 0,
      solution: R`\(v = \sqrt{T/\mu}\), so \(v \propto \sqrt T\), and \(\sqrt4 = 2\).` },
    { level: 2, type: 'num', q: R`A 1 kg mass hangs on a spring with \(k = 100\) N/m. Find its angular frequency (in rad/s).`,
      answer: 10, tol: 0.01, unit: 'rad/s',
      solution: R`\(\omega = \sqrt{k/m} = \sqrt{100} = 10\) rad/s.` },
    { level: 2, type: 'num', q: R`A body in SHM has amplitude 0.1 m and \(\omega = 10\) rad/s. Find its maximum speed (in m/s).`,
      answer: 1, tol: 0.001, unit: 'm/s',
      solution: R`\(v_{max} = A\omega = 0.1\times10 = 1\) m/s.` },
    { level: 2, type: 'num', q: R`Tuning forks of 384 Hz and 387 Hz are sounded together. How many beats per second are heard?`,
      answer: 3, tol: 0.001, unit: 'per s',
      solution: R`Beat frequency \(= |387 - 384| = 3\).` },
    { level: 3, type: 'mcq', q: R`The wave \(y = 0.02\sin(4\pi x - 200\pi t)\) (SI units) travels with speed:`,
      options: [R`50 m/s`, R`100 m/s`, R`25 m/s`, R`200 m/s`], correct: 0,
      solution: R`\(v = \omega/k = 200\pi/4\pi = 50\) m/s, towards +x.` },
    { level: 3, type: 'mcq', q: R`A pendulum of period \(T\) is put in a lift accelerating upward at \(g/2\). Its new period is:`,
      options: [R`\(2T\)`, R`\(T\sqrt{3/2}\)`, R`\(T/2\)`, R`\(T\sqrt{2/3}\)`], correct: 3,
      solution: R`\(g_{eff} = 3g/2\), and \(T \propto 1/\sqrt{g}\), so \(T' = T\sqrt{2/3}\).` },
    { level: 3, type: 'num', q: R`An open pipe and a closed pipe have the same length. Find the ratio of their fundamental frequencies (open ÷ closed).`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`Open: \(v/2L\). Closed: \(v/4L\). Ratio = 2.` },
    { level: 3, type: 'num', q: R`A particle does SHM with amplitude 5 cm and period \(\pi\) s. Find its speed (in cm/s) when it is 3 cm from the mean position.`,
      answer: 8, tol: 0.01, unit: 'cm/s',
      solution: R`\(\omega = 2\pi/T = 2\) rad/s. \(v = \omega\sqrt{A^2 - x^2} = 2\sqrt{25 - 9} = 8\) cm/s.` }
  ]
});
