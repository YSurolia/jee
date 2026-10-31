// Lesson: Electromagnetic Waves.
var R = String.raw;
JEE.lesson('physics', 'em-waves', {
  theory: [
    { h: R`Displacement current: Maxwell's missing piece`,
      body: [
        R`Ampère's law says currents make magnetic fields. But consider a capacitor being charged: current flows in the wires, yet no charge crosses the gap between the plates. Is there a magnetic field around the gap?`,
        R`Maxwell said yes. A <b>changing electric field</b> also makes a magnetic field, as if it were a current. He called it the <b>displacement current</b>: \(I_d = \varepsilon_0\dfrac{d\Phi_E}{dt}\).`,
        R`So the full law is \(\oint\vec B\cdot d\vec l = \mu_0(I_c + I_d)\). Between the capacitor plates, \(I_d\) exactly equals the current in the wires.`
      ],
      analogy: R`A changing magnetic field makes an electric field (Faraday). Maxwell completed the symmetry: a changing electric field makes a magnetic field. Each keeps creating the other.`,
      check: { q: R`A capacitor is being charged by a 2 A current. What is the displacement current between its plates?`, ans: R`2 A, the same as the conduction current in the wires.` } },

    { h: R`What an electromagnetic wave is`,
      body: [
        R`An oscillating charge makes a changing electric field, which makes a changing magnetic field, which makes a changing electric field… This self-sustaining chain travels outward as an <b>electromagnetic (EM) wave</b>.`,
        R`EM waves need <b>no medium</b>; they cross empty space. In vacuum, all of them travel at \(c = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}} = 3\times10^8\) m/s. In a material they are slower: \(v = c/n\).`,
        R`The two fields are linked: \(\dfrac{E_0}{B_0} = c\), and they rise and fall together (in phase).`
      ],
      analogy: R`It's like two dancers who keep handing a movement to each other: the electric field's change starts the magnetic field's change and back again, and the "dance" travels across the universe.`,
      points: [R`Light, radio, X-rays and so on are all the same kind of wave, differing only in wavelength.`, R`\(c = f\lambda\) for every EM wave in vacuum.`] },

    { h: R`EM waves are transverse`,
      body: [
        R`In an EM wave, \(\vec E\), \(\vec B\) and the direction of travel are all at right angles to each other. The wave travels along \(\vec E\times\vec B\).`,
        R`Because the fields wave perpendicular to the direction of travel, EM waves are <b>transverse</b>. That is why light can be <b>polarised</b> (sound cannot).`
      ],
      mistake: R`Saying EM waves are longitudinal because they don't need a medium. Not needing a medium has nothing to do with being transverse.` },

    { h: R`Energy and momentum carried by EM waves`,
      body: [
        R`EM waves carry energy: that is how the Sun warms the Earth. The average <b>intensity</b> (power per unit area) is \(I = \tfrac12c\varepsilon_0E_0^2\).`,
        R`They also carry momentum \(p = U/c\), so light pushes on surfaces (<b>radiation pressure</b>): \(I/c\) on an absorbing surface and \(2I/c\) on a perfect mirror.`
      ],
      analogy: R`Solar sails on spacecraft are giant thin mirrors. The gentle, steady push of sunlight on them can slowly speed a spacecraft up, with no fuel.` },

    { h: R`The electromagnetic spectrum`,
      body: [
        R`In order of increasing frequency (decreasing wavelength): <b>radio waves</b> (> 0.1 m) → <b>microwaves</b> (1 mm to 0.1 m) → <b>infrared</b> → <b>visible light</b> (about 400–700 nm) → <b>ultraviolet</b> → <b>X-rays</b> → <b>gamma rays</b> (< 0.01 nm).`,
        R`Higher frequency means higher photon energy and more penetrating power. UV, X-rays and gamma rays can damage living cells.`,
        R`How they are produced: radio waves by oscillating charges in antennas; microwaves by special vacuum tubes (klystrons, magnetrons); IR by hot bodies; visible and UV by electrons jumping between levels in atoms; X-rays by fast electrons hitting a metal; gamma rays by atomic nuclei.`
      ],
      analogy: R`A memory line for the order: "Raju Must Inform Vikram's Uncle's X-ray Group" (Radio, Microwave, IR, Visible, UV, X-ray, Gamma).` },

    { h: R`Uses of EM waves`,
      body: [
        R`<b>Radio waves:</b> radio, TV and mobile communication. <b>Microwaves:</b> radar, microwave ovens, satellite links. <b>Infrared:</b> TV remotes, night-vision cameras, physiotherapy heat lamps, greenhouse warming.`,
        R`<b>Visible light:</b> sight, photography, fibre optics. <b>Ultraviolet:</b> sterilising water and instruments, detecting forged notes, LASIK eye surgery. Most UV from the Sun is absorbed by the ozone layer.`,
        R`<b>X-rays:</b> seeing broken bones, airport baggage scanners, studying crystal structure. <b>Gamma rays:</b> cancer treatment (radiotherapy) and sterilising medical equipment.`
      ],
      check: { q: R`Which EM radiation does a TV remote use?`, ans: R`Infrared.` } }
  ],

  examples: [
    { level: 1, t: 3, q: R`Find the frequency of yellow light of wavelength 600 nm.`,
      steps: [R`\(f = c/\lambda = \dfrac{3\times10^8}{6\times10^{-7}}\).`],
      ans: R`\(5\times10^{14}\) Hz` },
    { level: 1, t: 4, q: R`Name the EM radiation used for: (a) cooking in a microwave oven (b) sun-tanning (c) seeing in the dark with night-vision goggles (d) checking bags at an airport.`,
      steps: [R`Match each use to its part of the spectrum.`],
      ans: R`(a) Microwaves (b) Ultraviolet (c) Infrared (d) X-rays` },
    { level: 1, t: 1, q: R`How fast does light travel in glass of refractive index 1.5?`,
      steps: [R`\(v = c/n = 3\times10^8/1.5\).`],
      ans: R`\(2\times10^8\) m/s` },
    { level: 2, t: 1, q: R`An EM wave has an electric-field amplitude of 100 V/m. Find its average intensity. (\(\varepsilon_0 = 8.85\times10^{-12}\))`,
      steps: [R`\(I = \tfrac12c\varepsilon_0E_0^2 = 0.5\times3\times10^8\times8.85\times10^{-12}\times10^4\).`],
      ans: R`\(\approx 13.3\) W/m²` },
    { level: 3, t: 0, q: R`A capacitor with circular plates of radius 0.1 m is charged by a 0.15 A current. Find the magnetic field between the plates, 0.05 m from the axis.`,
      steps: [R`The displacement current is 0.15 A, spread evenly over the plate area. A circle of radius \(r = 0.05\) m encloses a fraction \(r^2/R^2 = 1/4\) of it.`, R`Ampère–Maxwell: \(B(2\pi r) = \mu_0\times0.15\times\tfrac14\).`, R`\(B = \dfrac{4\pi\times10^{-7}\times0.0375}{2\pi\times0.05}\).`],
      ans: R`\(1.5\times10^{-7}\) T` },
    { level: 3, t: 2, q: R`An EM wave travels along +z with its electric field along x and amplitude 50 V/m. Find the direction and amplitude of its magnetic field.`,
      steps: [R`It travels along \(\vec E\times\vec B\): \(\hat i\times\vec B\) must be \(\hat k\), so \(\vec B\) is along \(\hat j\).`, R`\(B_0 = E_0/c = 50/(3\times10^8)\).`],
      ans: R`Along y; \(B_0 \approx 1.67\times10^{-7}\) T` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The speed of electromagnetic waves in vacuum is:`,
      options: [R`\(3\times10^6\) m/s`, R`\(3\times10^8\) m/s`, R`\(3\times10^{10}\) m/s`, R`340 m/s`], correct: 1,
      solution: R`\(c = 3\times10^8\) m/s. (340 m/s is the speed of sound.)` },
    { level: 1, type: 'mcq', q: R`Which of these has the longest wavelength?`,
      options: [R`X-rays`, R`ultraviolet`, R`radio waves`, R`gamma rays`], correct: 2,
      solution: R`Radio waves are at the long-wavelength end of the spectrum.` },
    { level: 1, type: 'mcq', q: R`Electromagnetic waves are:`,
      options: [R`transverse`, R`longitudinal`, R`both transverse and longitudinal`, R`mechanical`], correct: 0,
      solution: R`E and B oscillate perpendicular to the direction of travel.` },
    { level: 1, type: 'mcq', q: R`TV remote controls use:`,
      options: [R`ultraviolet`, R`X-rays`, R`gamma rays`, R`infrared`], correct: 3,
      solution: R`Remotes send coded pulses of infrared light.` },
    { level: 1, type: 'num', q: R`Find the wavelength (in cm) of 3 GHz microwaves.`,
      answer: 10, tol: 0.01, unit: 'cm',
      solution: R`\(\lambda = c/f = 3\times10^8/(3\times10^9) = 0.1\) m = 10 cm.` },
    { level: 1, type: 'num', q: R`Find the frequency of light of wavelength 500 nm, in units of \(10^{14}\) Hz.`,
      answer: 6, tol: 0.001, unit: '× 10¹⁴ Hz',
      solution: R`\(f = 3\times10^8/(5\times10^{-7}) = 6\times10^{14}\) Hz.` },
    { level: 2, type: 'mcq', q: R`Displacement current exists wherever there is:`,
      options: [R`a conductor`, R`an electric field changing with time`, R`a permanent magnet`, R`a steady current`], correct: 1,
      solution: R`\(I_d = \varepsilon_0\,d\Phi_E/dt\): it needs a changing electric flux.` },
    { level: 2, type: 'mcq', q: R`For an EM wave in vacuum, the ratio \(E_0/B_0\) equals:`,
      options: [R`\(c\)`, R`\(1/c\)`, R`\(c^2\)`, R`1`], correct: 0,
      solution: R`\(E_0 = cB_0\).` },
    { level: 2, type: 'mcq', q: R`The ozone layer protects us mainly by absorbing:`,
      options: [R`infrared`, R`radio waves`, R`visible light`, R`ultraviolet`], correct: 3,
      solution: R`Ozone absorbs most of the Sun's harmful UV radiation.` },
    { level: 2, type: 'mcq', q: R`Which list is in order of increasing frequency?`,
      options: [R`X-rays, visible, IR, radio`, R`visible, radio, IR, X-rays`, R`radio, IR, visible, X-rays`, R`IR, radio, X-rays, visible`], correct: 2,
      solution: R`Radio < microwave < IR < visible < UV < X-rays < gamma.` },
    { level: 2, type: 'num', q: R`An EM wave has \(E_0 = 600\) V/m. Find \(B_0\) (in μT).`,
      answer: 2, tol: 0.001, unit: 'μT',
      solution: R`\(B_0 = E_0/c = 600/(3\times10^8) = 2\times10^{-6}\) T.` },
    { level: 2, type: 'num', q: R`Find the average intensity (in W/m²) of an EM wave with \(E_0 = 200\) V/m. (\(\varepsilon_0 = 8.85\times10^{-12}\))`,
      answer: 53.1, tol: 0.2, unit: 'W/m²',
      solution: R`\(I = \tfrac12c\varepsilon_0E_0^2 = 0.5\times3\times10^8\times8.85\times10^{-12}\times4\times10^4 \approx 53.1\) W/m².` },
    { level: 3, type: 'mcq', q: R`An EM wave travels along −x and its electric field is along +y. Its magnetic field points along:`,
      options: [R`+z`, R`−z`, R`+y`, R`−x`], correct: 1,
      solution: R`The direction of travel is \(\vec E\times\vec B\). \(\hat j\times(-\hat k) = -\hat i\), so \(\vec B\) is along −z.` },
    { level: 3, type: 'mcq', q: R`Light of intensity \(I\) falls normally on a perfectly reflecting mirror. The radiation pressure is:`,
      options: [R`\(I/c\)`, R`\(Ic\)`, R`\(I/2c\)`, R`\(2I/c\)`], correct: 3,
      solution: R`Reflection reverses the momentum, giving twice the change: \(2I/c\).` },
    { level: 3, type: 'num', q: R`The voltage across a 2 μF capacitor is changing at 1000 V/s. Find the displacement current (in mA) between its plates.`,
      answer: 2, tol: 0.001, unit: 'mA',
      solution: R`\(I_d = C\,dV/dt = 2\times10^{-6}\times1000 = 2\times10^{-3}\) A.` },
    { level: 3, type: 'num', q: R`Sunlight of intensity 1500 W/m² falls normally on a 1 m² black (fully absorbing) surface. Find the force on it (in μN).`,
      answer: 5, tol: 0.01, unit: 'μN',
      solution: R`\(F = IA/c = 1500/(3\times10^8) = 5\times10^{-6}\) N.` }
  ]
});
