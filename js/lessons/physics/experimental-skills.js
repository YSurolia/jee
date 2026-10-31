// Lesson: Experimental Skills.
var R = String.raw;
JEE.lesson('physics', 'experimental-skills', {
  theory: [
    { h: R`Measuring well: least count and zero error`,
      body: [
        R`Every JEE experiment question tests the same habits: read the instrument correctly, apply the <b>zero error</b>, and estimate the <b>percentage error</b> in the final answer.`,
        R`<b>Zero error:</b> when an instrument should read zero (jaws closed) but doesn't. If it reads a bit above zero, the error is positive and must be <b>subtracted</b> from every reading. If it reads below zero, the error is negative, and its size is <b>added</b>.`,
        R`True reading = observed reading − (zero error, with its sign).`
      ],
      analogy: R`A bathroom scale that shows 1 kg with nobody on it has a +1 kg zero error. Subtract 1 kg from every weight it shows.`,
      points: [R`Take several readings and average them to reduce random error.`, R`Errors add in a final result: \(\dfrac{\Delta Y}{Y} = \sum(\text{power})\times\dfrac{\Delta x}{x}\).`] },

    { h: R`Vernier callipers and screw gauge`,
      body: [
        R`<b>Vernier callipers:</b> a sliding vernier scale has n divisions equal to (n − 1) main-scale divisions. Least count \(= 1\,\text{MSD} - 1\,\text{VSD} = \dfrac{1\,\text{MSD}}{n}\), typically 0.1 mm. Reading = main scale reading + (coinciding vernier division × LC).`,
        R`<b>Screw gauge:</b> one full turn of the thimble moves the screw by one <b>pitch</b>. Least count \(= \dfrac{\text{pitch}}{\text{number of circular divisions}}\), typically 0.01 mm. Reading = main scale reading + (circular scale reading × LC).`
      ],
      check: { q: R`A screw gauge has a pitch of 0.5 mm and 50 circular divisions. What is its least count?`, ans: R`0.5/50 = 0.01 mm.` } },

    { h: R`Mechanics experiments: pendulum, moments, Searle's`,
      body: [
        R`<b>Simple pendulum:</b> time 20–30 oscillations, find T, and use \(g = \dfrac{4\pi^2L}{T^2}\). Plotting L against T² gives a straight line of slope \(g/4\pi^2\). L is measured to the centre of the bob.`,
        R`<b>Metre scale and moments:</b> balance a metre rule on a knife-edge with masses on both sides. Anticlockwise moments = clockwise moments, which lets you find an unknown mass.`,
        R`<b>Searle's method</b> (Young's modulus): load a long wire and measure its tiny extension with a spirit level and micrometer: \(Y = \dfrac{MgL}{\pi r^2\Delta L}\). Its diameter is measured with a screw gauge at several places.`
      ],
      mistake: R`Forgetting that the diameter is squared in Searle's formula, so its percentage error counts twice.` },

    { h: R`Fluid experiments: surface tension and viscosity`,
      body: [
        R`<b>Capillary rise:</b> measure the height \(h\) of water in a fine glass tube (with a travelling microscope) and the tube's radius: \(T = \dfrac{rh\rho g}{2}\) (for water and clean glass, the contact angle is about 0).`,
        R`<b>Terminal velocity:</b> drop small steel balls through glycerine. Time their fall between two marks once they move at a steady speed: \(\eta = \dfrac{2r^2(\rho - \sigma)g}{9v_t}\).`
      ] },

    { h: R`Heat and sound experiments`,
      body: [
        R`<b>Method of mixtures</b> (specific heat): drop a hot solid into cold water in a calorimeter. Heat lost by the hot body = heat gained by the water (and calorimeter): \(m_sc_s(T_s - T) = m_wc_w(T - T_w)\).`,
        R`<b>Resonance tube</b> (speed of sound): a vibrating fork is held over a tube whose air column length can be changed. Loud resonance occurs at \(l_1 + e = \lambda/4\) and \(l_2 + e = 3\lambda/4\). Subtracting cancels the end correction: \(v = 2f(l_2 - l_1)\), and \(e = \dfrac{l_2 - 3l_1}{2}\).`
      ],
      analogy: R`Blowing across a bottle makes a note. Pour in some water, so the air column is shorter, and the note goes higher. The resonance tube uses the same idea.` },

    { h: R`Electrical experiments: Ohm's law, metre bridge, galvanometer`,
      body: [
        R`<b>Ohm's law:</b> measure V and I for several settings of a rheostat. A straight-line V–I graph through the origin confirms the law; its slope is R.`,
        R`<b>Metre bridge:</b> find the balance length \(l\): \(X = R\dfrac{l}{100 - l}\). Then the resistivity is \(\rho = \dfrac{X\pi r^2}{L}\). Balance near the middle and interchange X and R to reduce errors.`,
        R`<b>Galvanometer (half-deflection method):</b> find R for a deflection θ, then the shunt S that halves it: \(G = \dfrac{RS}{R - S}\). The <b>figure of merit</b> (current per division) is \(k = \dfrac{E}{(R + G)\theta}\).`
      ] },

    { h: R`Optics experiments: focal length and refractive index`,
      body: [
        R`<b>u–v method:</b> place the object at different distances, find a sharp image on the screen, record u and v, and use the mirror or lens formula. A graph of 1/v against 1/u is a straight line cutting both axes at 1/f.`,
        R`A quick check: when the object is at 2F, the image is also at 2F (u = v = 2f).`,
        R`<b>Glass slab:</b> with a travelling microscope, read the position of a mark seen directly, then through the slab, then on the slab's top. \(n = \dfrac{\text{real thickness}}{\text{apparent thickness}}\).`
      ] },

    { h: R`Diode and Zener characteristics`,
      body: [
        R`<b>p–n diode:</b> in forward bias, the current stays tiny until the knee voltage (about 0.7 V for Si), then rises steeply. In reverse bias, only a very small current flows (μA). The dynamic resistance is \(\Delta V/\Delta I\) on the steep part.`,
        R`<b>Zener diode:</b> in reverse bias, at the breakdown voltage \(V_Z\), the current suddenly rises while the voltage stays almost constant. This flat part is what makes it a voltage regulator.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`With the jaws of a vernier calliper closed, the vernier zero is 3 divisions to the right of the main-scale zero (LC = 0.1 mm). A rod reads 25.6 mm. Find the true length.`,
      steps: [R`To the right means a positive zero error: \(+3\times0.1 = +0.3\) mm.`, R`True = observed − zero error \(= 25.6 - 0.3\).`],
      ans: R`25.3 mm` },
    { level: 1, t: 12, q: R`In the u–v method with a concave mirror, an object at 30 cm gives a sharp image at 60 cm (both in front of the mirror). Find the focal length.`,
      steps: [R`\(u = -30\), \(v = -60\).`, R`\(\dfrac1f = \dfrac1v + \dfrac1u = -\dfrac1{60} - \dfrac1{30} = -\dfrac3{60}\).`],
      ans: R`\(f = -20\) cm (a concave mirror of focal length 20 cm)` },
    { level: 1, t: 10, q: R`In an Ohm's law experiment, current is plotted on the y-axis and voltage on the x-axis. The slope is 0.25 A/V. Find the resistance.`,
      steps: [R`Slope of I against V = \(1/R\).`, R`\(R = 1/0.25\).`],
      ans: R`4 Ω` },
    { level: 3, t: 7, q: R`A 500 Hz fork gives resonance in a resonance tube at 16.0 cm and 50.0 cm. Find the speed of sound and the end correction.`,
      steps: [R`\(l_2 - l_1 = \lambda/2 = 34\) cm, so \(\lambda = 68\) cm.`, R`\(v = f\lambda = 500\times0.68 = 340\) m/s.`, R`\(e = \dfrac{l_2 - 3l_1}{2} = \dfrac{50 - 48}{2}\).`],
      ans: R`340 m/s; 1.0 cm` },
    { level: 3, t: 4, q: R`In Searle's experiment, the wire's diameter is \(0.50 \pm 0.01\) mm and its extension is \(1.00 \pm 0.01\) mm (length and load are exact). Find the maximum percentage error in Y.`,
      steps: [R`\(Y \propto \dfrac{1}{d^2\Delta L}\), so \(\dfrac{\Delta Y}{Y} = 2\dfrac{\Delta d}{d} + \dfrac{\Delta(\Delta L)}{\Delta L}\).`, R`\(= 2(2\%) + 1\%\).`],
      ans: R`5%. The diameter measurement contributes most, so measure it carefully.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The least count of a vernier calliper is:`,
      options: [R`1 MSD + 1 VSD`, R`1 MSD − 1 VSD`, R`1 MSD × 1 VSD`, R`1 VSD only`], correct: 1,
      solution: R`Least count = the difference between one main-scale division and one vernier division.` },
    { level: 1, type: 'mcq', q: R`The pitch of a screw gauge is:`,
      options: [R`the number of circular divisions`, R`the length of the screw`, R`10 times the least count`, R`the distance the screw moves in one full turn`], correct: 3,
      solution: R`Pitch = linear distance moved per complete rotation.` },
    { level: 1, type: 'mcq', q: R`To find g from a pendulum experiment, the graph that gives a straight line is:`,
      options: [R`L against T²`, R`L against T`, R`T against 1/L`, R`L against 1/T`], correct: 0,
      solution: R`\(T^2 = (4\pi^2/g)L\), so L against T² is a straight line through the origin.` },
    { level: 1, type: 'mcq', q: R`The method of mixtures is based on the principle that:`,
      options: [R`temperature lost = temperature gained`, R`mass is conserved`, R`heat lost by the hot body = heat gained by the cold body`, R`work = heat`], correct: 2,
      solution: R`Energy conservation: heat lost = heat gained (no heat lost to the surroundings).` },
    { level: 1, type: 'num', q: R`A vernier (LC 0.01 cm) shows a main-scale reading of 3.2 cm, and the 7th vernier division coincides. Find the reading (in cm).`,
      answer: 3.27, tol: 0.001, unit: 'cm',
      solution: R`\(3.2 + 7\times0.01 = 3.27\) cm.` },
    { level: 1, type: 'num', q: R`A screw gauge (LC 0.01 mm) shows a main-scale reading of 2 mm and a circular-scale reading of 45. Find the reading (in mm), with no zero error.`,
      answer: 2.45, tol: 0.001, unit: 'mm',
      solution: R`\(2 + 45\times0.01 = 2.45\) mm.` },
    { level: 2, type: 'mcq', q: R`In a metre-bridge experiment, the balance point should be near the middle of the wire in order to:`,
      options: [R`make the current larger`, R`heat the wire evenly`, R`reduce the percentage error`, R`save wire`], correct: 2,
      solution: R`The relative error in \(l/(100 - l)\) is smallest when \(l \approx 50\) cm.` },
    { level: 2, type: 'mcq', q: R`The end correction in a resonance tube arises because:`,
      options: [R`the tube is narrow`, R`the antinode forms slightly outside the open end`, R`water evaporates`, R`the tuning fork is too loud`], correct: 1,
      solution: R`The antinode is about \(0.3d\) beyond the mouth of the tube, not exactly at it.` },
    { level: 2, type: 'mcq', q: R`A screw gauge has a negative zero error. To correct a reading, you should:`,
      options: [R`ignore it`, R`double it`, R`subtract its size`, R`add its size to the reading`], correct: 3,
      solution: R`True = observed − (zero error). With a negative error, subtracting a negative means adding.` },
    { level: 2, type: 'mcq', q: R`In the u–v method for a convex lens, an object at 2F gives an image at:`,
      options: [R`2F on the other side`, R`F`, R`infinity`, R`between F and 2F`], correct: 0,
      solution: R`\(u = -2f\) gives \(v = +2f\), with equal-sized inverted image.` },
    { level: 2, type: 'num', q: R`A glass slab's real thickness is 4.5 cm and its apparent thickness is 3.0 cm. Find its refractive index.`,
      answer: 1.5, tol: 0.001, unit: '',
      solution: R`\(n = 4.5/3.0 = 1.5\).` },
    { level: 2, type: 'num', q: R`A 0.64 m pendulum has a period of 1.6 s. Find g (in m/s²).`,
      answer: 9.87, tol: 0.02, unit: 'm/s²',
      solution: R`\(g = 4\pi^2L/T^2 = 39.48\times0.64/2.56 \approx 9.87\) m/s².` },
    { level: 2, type: 'num', q: R`A metre bridge balances at 30 cm from the left end, with 7 Ω in the right gap. Find the resistance (in Ω) in the left gap.`,
      answer: 3, tol: 0.001, unit: 'Ω',
      solution: R`\(X = 7\times30/70 = 3\) Ω.` },
    { level: 3, type: 'mcq', q: R`Finding viscosity from the terminal velocity of falling balls is based on:`,
      options: [R`Bernoulli's theorem`, R`Pascal's law`, R`Stokes' law`, R`Archimedes' principle only`], correct: 2,
      solution: R`At terminal velocity, weight = buoyancy + Stokes drag \(6\pi\eta rv\).` },
    { level: 3, type: 'mcq', q: R`In the breakdown region of a Zener diode's characteristic:`,
      options: [R`the current stays constant`, R`the voltage stays nearly constant while the current changes a lot`, R`no current flows`, R`the resistance becomes infinite`], correct: 1,
      solution: R`That nearly vertical part of the graph is what allows voltage regulation.` },
    { level: 3, type: 'num', q: R`Half-deflection method: with R = 4000 Ω the galvanometer gives a deflection θ. A 40 Ω shunt halves it. Find G (in Ω).`,
      answer: 40.4, tol: 0.05, unit: 'Ω',
      solution: R`\(G = \dfrac{RS}{R - S} = \dfrac{4000\times40}{3960} \approx 40.4\) Ω.` },
    { level: 3, type: 'num', q: R`100 g of metal at 100 °C is dropped into 200 g of water at 25 °C, and the final temperature is 28 °C. Find the metal's specific heat (in J/kg K). (\(c_w = 4200\), ignore the calorimeter)`,
      answer: 350, tol: 0.5, unit: 'J/kg K',
      solution: R`\(0.1\,c\,(72) = 0.2\times4200\times3\), so \(c = 2520/7.2 = 350\) J/kg K.` }
  ]
});
