// Lesson: Optics.
var R = String.raw;
JEE.lesson('physics', 'optics', {
  theory: [
    { h: R`Reflection and spherical mirrors`,
      body: [
        R`<b>Laws of reflection:</b> the angle of incidence equals the angle of reflection, and the incident ray, reflected ray and normal all lie in one plane.`,
        R`A plane mirror makes an image that is virtual, upright, the same size, and as far behind the mirror as the object is in front.`,
        R`Spherical mirrors are curved: <b>concave</b> (caves in, converges light) and <b>convex</b> (bulges out, spreads light). The focal length is half the radius of curvature: \(f = R/2\).`,
        R`<b>Sign convention:</b> measure every distance from the mirror's pole. Distances in the direction the light travels are positive; distances against it are negative. Real objects therefore have negative \(u\).`
      ],
      analogy: R`A car's side mirror is convex: it shows a wider view but makes things look smaller ("objects are closer than they appear"). A dentist's mirror is concave, to show a magnified image of a tooth.`,
      points: [R`Concave mirror: \(f\) negative. Convex mirror: \(f\) positive.`] },

    { h: R`The mirror formula`,
      body: [
        R`For any spherical mirror: \(\dfrac1v + \dfrac1u = \dfrac1f\), and the magnification \(m = -\dfrac vu = \dfrac{h_i}{h_o}\).`,
        R`Negative \(m\) means the image is inverted (and real). Positive \(m\) means it is upright (and virtual). \(|m| > 1\) means magnified.`,
        R`A convex mirror always gives a virtual, upright, smaller image. A concave mirror gives a real image unless the object is between F and the mirror.`
      ],
      mistake: R`Forgetting the signs. Put in \(u = -30\) for an object 30 cm in front, and \(f = -10\) for a concave mirror of focal length 10 cm.` },

    { h: R`Refraction and Snell's law`,
      body: [
        R`Light bends when it passes from one medium into another, because its speed changes. This is <b>refraction</b>. The <b>refractive index</b> \(n = c/v\) tells how much a medium slows light.`,
        R`<b>Snell's law:</b> \(n_1\sin i = n_2\sin r\). Going into a denser medium, light bends towards the normal; going into a rarer one, it bends away.`,
        R`Objects under water look closer than they are: apparent depth = real depth ÷ n.`,
        R`At a curved surface between media: \(\dfrac{n_2}{v} - \dfrac{n_1}{u} = \dfrac{n_2 - n_1}{R}\).`
      ],
      analogy: R`A pencil in a glass of water looks bent at the surface. Light from the underwater part bends as it leaves the water, so your eye sees that part in the wrong place.`,
      check: { q: R`A coin lies at the bottom of 30 cm of water (n = 4/3). How deep does it appear?`, ans: R`\(30/(4/3) = 22.5\) cm.` } },

    { h: R`Total internal reflection`,
      body: [
        R`When light goes from a denser to a rarer medium, it bends away from the normal. At one particular angle, the <b>critical angle</b> \(C\), the refracted ray just skims along the surface: \(\sin C = \dfrac{n_2}{n_1}\).`,
        R`If the angle of incidence is bigger than \(C\), no light gets out: it is all reflected back. This is <b>total internal reflection (TIR)</b>.`,
        R`TIR is used in optical fibres (internet cables), in prisms in binoculars, and it gives diamonds their sparkle (diamond's critical angle is only about 24°). Mirages on hot roads are also caused by it.`
      ],
      points: [R`Two conditions: denser → rarer, and \(i > C\).`] },

    { h: R`Lenses: the lens formula and lensmaker's formula`,
      body: [
        R`A <b>convex</b> (converging) lens is thicker in the middle; a <b>concave</b> (diverging) lens is thinner in the middle.`,
        R`<b>Lens formula:</b> \(\dfrac1v - \dfrac1u = \dfrac1f\), with magnification \(m = \dfrac vu\). Convex lenses have \(f > 0\); concave lenses have \(f < 0\).`,
        R`<b>Lensmaker's formula:</b> \(\dfrac1f = (n - 1)\left(\dfrac1{R_1} - \dfrac1{R_2}\right)\). In a liquid, replace \(n\) with \(n_{lens}/n_{liquid}\).`
      ],
      mistake: R`Using the mirror formula (with a + sign) for lenses. The lens formula has a minus sign: \(1/v - 1/u = 1/f\).` },

    { h: R`Power and combinations of lenses`,
      body: [
        R`The <b>power</b> of a lens is \(P = \dfrac1{f}\), with \(f\) in metres. The unit is the dioptre (D). A converging lens has positive power.`,
        R`For thin lenses in contact, the powers simply add: \(P = P_1 + P_2\), i.e. \(\dfrac1f = \dfrac1{f_1} + \dfrac1{f_2}\).`,
        R`Eye defects: <b>myopia</b> (short-sight) is corrected with a concave lens; <b>hypermetropia</b> (long-sight) with a convex lens.`
      ],
      analogy: R`An optician's prescription of "−2.5" means a concave lens of power −2.5 D, i.e. focal length −40 cm, for a short-sighted person.` },

    { h: R`Prisms and dispersion`,
      body: [
        R`A glass prism bends light twice, deviating it towards its base. The deviation is smallest (minimum deviation \(\delta_m\)) when the light passes symmetrically, and then \(n = \dfrac{\sin\frac{A + \delta_m}{2}}{\sin\frac A2}\).`,
        R`Different colours have slightly different refractive indices: violet bends the most and red the least. So white light splits into a spectrum. This is <b>dispersion</b>.`,
        R`For a thin prism, deviation \(\delta = (n - 1)A\).`
      ],
      analogy: R`A rainbow is sunlight dispersed by raindrops, each drop acting like a tiny prism (with a reflection inside it too).` },

    { h: R`The microscope and the telescope`,
      body: [
        R`A <b>simple microscope</b> (magnifying glass) is a convex lens held close to the eye: \(m = 1 + \dfrac Df\) (image at the near point, \(D = 25\) cm).`,
        R`A <b>compound microscope</b> has a short-focus objective that makes a real, magnified image, which the eyepiece magnifies again: \(M \approx \dfrac{L}{f_o}\cdot\dfrac{D}{f_e}\).`,
        R`An <b>astronomical telescope</b> has a long-focus objective and a short-focus eyepiece. In normal adjustment, \(M = \dfrac{f_o}{f_e}\) and the tube length is \(f_o + f_e\).`
      ],
      points: [R`Microscope: both lenses have short focal lengths. Telescope: big \(f_o\), small \(f_e\).`] },

    { h: R`Wave optics: Huygens' principle and interference`,
      body: [
        R`Light is also a wave. A <b>wavefront</b> is a surface on which all points vibrate in step. <b>Huygens' principle:</b> every point on a wavefront acts as a source of tiny wavelets, and the new wavefront is the surface touching them all. This explains reflection and refraction.`,
        R`When two <b>coherent</b> light waves (same frequency, constant phase difference) overlap, they <b>interfere</b>: bright where crest meets crest, dark where crest meets trough.`,
        R`<b>Young's double-slit experiment:</b> light through two narrow slits makes equally spaced bright and dark fringes on a screen, with fringe width \(\beta = \dfrac{\lambda D}{d}\). Bright fringes satisfy path difference \(= n\lambda\); dark ones, \((n + \tfrac12)\lambda\).`
      ],
      analogy: R`The rainbow colours on a soap bubble or an oil film on a wet road come from interference between light reflected from the top and bottom of the thin film.`,
      points: [R`Immersing the apparatus in water (index n) reduces the fringe width by a factor n.`] },

    { h: R`Diffraction`,
      body: [
        R`Light bends slightly around edges and spreads after passing through narrow openings. This is <b>diffraction</b>, and it is noticeable when the opening is comparable to the wavelength.`,
        R`Through a single slit of width \(a\), there is a bright central maximum, with dark fringes where \(a\sin\theta = n\lambda\). The central maximum is twice as wide as the other bright fringes: width \(= \dfrac{2\lambda D}{a}\).`
      ],
      analogy: R`You can hear someone talking around a corner but not see them. Sound waves (metres long) diffract around the corner easily; light (under a micrometre) hardly does.` },

    { h: R`Polarisation and Brewster's law`,
      body: [
        R`In ordinary light, the electric field vibrates in all directions perpendicular to the ray. A <b>Polaroid</b> lets through only one direction of vibration, producing <b>plane-polarised</b> light. Only transverse waves can be polarised.`,
        R`<b>Malus's law:</b> polarised light through a second Polaroid at angle \(\theta\) has intensity \(I = I_0\cos^2\theta\). Unpolarised light loses half its intensity at the first Polaroid.`,
        R`<b>Brewster's law:</b> light reflected at the angle where \(\tan i_B = n\) is completely polarised. At that angle, the reflected and refracted rays are at \(90^\circ\) to each other.`
      ],
      analogy: R`Polaroid sunglasses cut the glare from roads and water, because that reflected glare is partly polarised.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Light travels from air into glass (n = 1.5) at an angle of incidence of \(30^\circ\). Find the angle of refraction.`,
      steps: [R`Snell's law: \(1\times\sin30^\circ = 1.5\sin r\).`, R`\(\sin r = 0.5/1.5 = 0.333\).`],
      ans: R`\(r \approx 19.5^\circ\) (bent towards the normal)` },
    { level: 1, t: 1, q: R`An object is 30 cm in front of a concave mirror of focal length 10 cm. Find the image.`,
      steps: [R`\(u = -30\), \(f = -10\): \(\dfrac1v = \dfrac1f - \dfrac1u = -\dfrac1{10} + \dfrac1{30} = -\dfrac2{30}\).`, R`\(v = -15\) cm (in front of the mirror, so real).`, R`\(m = -v/u = -(-15)/(-30) = -0.5\).`],
      ans: R`Real, inverted, half-size image 15 cm in front of the mirror` },
    { level: 1, t: 4, q: R`Find the power of a convex lens of focal length 50 cm. What is such a lens used for?`,
      steps: [R`\(P = 1/f = 1/0.5\).`],
      ans: R`+2 D; for example, reading glasses for long-sightedness` },
    { level: 3, t: 3, q: R`An equiconvex glass lens (n = 1.5) has radii of 20 cm and a focal length of 20 cm in air. What is its focal length in water (n = 4/3)?`,
      steps: [R`In air: \(\dfrac1f = 0.5\times\dfrac2{20}\), so \(f = 20\) cm ✓`, R`In water: relative index \(= 1.5/(4/3) = 1.125\), so \(\dfrac1{f'} = 0.125\times\dfrac{2}{20} = 0.0125\).`],
      ans: R`80 cm. The lens becomes 4 times weaker in water.` },
    { level: 3, t: 8, q: R`In a Young's double-slit experiment the fringe width is 1.2 mm in air. What does it become if the whole apparatus is put under water (n = 4/3)?`,
      steps: [R`In water the wavelength becomes \(\lambda/n\).`, R`\(\beta' = \beta/n = 1.2\times\tfrac34\).`],
      ans: R`0.9 mm` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`Light hits a mirror at an angle of incidence of \(40^\circ\). The angle of reflection is:`,
      options: [R`\(20^\circ\)`, R`\(40^\circ\)`, R`\(50^\circ\)`, R`\(80^\circ\)`], correct: 1,
      solution: R`Angle of reflection = angle of incidence.` },
    { level: 1, type: 'mcq', q: R`The image formed by a plane mirror is:`,
      options: [R`real and inverted`, R`virtual and magnified`, R`real and diminished`, R`virtual, upright and the same size`], correct: 3,
      solution: R`A plane mirror gives a virtual, upright, same-size image, as far behind as the object is in front.` },
    { level: 1, type: 'mcq', q: R`The unit of the power of a lens is the:`,
      options: [R`dioptre`, R`watt`, R`metre`, R`joule`], correct: 0,
      solution: R`\(P = 1/f\) (f in metres), measured in dioptres (D).` },
    { level: 1, type: 'mcq', q: R`A rainbow is formed by:`,
      options: [R`polarisation`, R`diffraction`, R`dispersion of sunlight by raindrops`, R`interference`], correct: 2,
      solution: R`Raindrops split white light into its colours (with an internal reflection).` },
    { level: 1, type: 'num', q: R`Find the speed of light in a medium of refractive index 2, in units of \(10^8\) m/s.`,
      answer: 1.5, tol: 0.001, unit: '× 10⁸ m/s',
      solution: R`\(v = c/n = 3\times10^8/2 = 1.5\times10^8\) m/s.` },
    { level: 1, type: 'num', q: R`Find the power (in D) of a convex lens of focal length 25 cm.`,
      answer: 4, tol: 0.001, unit: 'D',
      solution: R`\(P = 1/0.25 = 4\) D.` },
    { level: 2, type: 'mcq', q: R`Total internal reflection happens when light travels:`,
      options: [R`from rarer to denser, with \(i > C\)`, R`from denser to rarer, with \(i > C\)`, R`from denser to rarer, with \(i < C\)`, R`in any direction, with \(i = 0\)`], correct: 1,
      solution: R`Both conditions are needed: denser → rarer and an angle of incidence greater than the critical angle.` },
    { level: 2, type: 'mcq', q: R`An object is placed at 2F in front of a convex lens. The image is:`,
      options: [R`at F`, R`beyond 2F`, R`at infinity`, R`at 2F on the other side, inverted and the same size`], correct: 3,
      solution: R`\(u = -2f\) gives \(v = 2f\) and \(m = -1\).` },
    { level: 2, type: 'mcq', q: R`In Young's experiment, if the distance between the slits is doubled, the fringe width:`,
      options: [R`halves`, R`doubles`, R`is unchanged`, R`becomes 4 times`], correct: 0,
      solution: R`\(\beta = \lambda D/d\), so doubling \(d\) halves \(\beta\).` },
    { level: 2, type: 'mcq', q: R`Light can be polarised because light waves are:`,
      options: [R`longitudinal`, R`coherent`, R`very fast`, R`transverse`], correct: 3,
      solution: R`Only transverse waves have a vibration direction that can be selected.` },
    { level: 2, type: 'num', q: R`An object is 60 cm from a convex lens of focal length 20 cm. Find the image distance (in cm).`,
      answer: 30, tol: 0.01, unit: 'cm',
      solution: R`\(\dfrac1v = \dfrac1{20} + \dfrac1{-60} = \dfrac{2}{60}\), so \(v = 30\) cm.` },
    { level: 2, type: 'num', q: R`Find the critical angle (in degrees) for a material with \(n = \sqrt2\) in air.`,
      answer: 45, tol: 0.05, unit: '°',
      solution: R`\(\sin C = 1/\sqrt2\), so \(C = 45^\circ\).` },
    { level: 2, type: 'num', q: R`A telescope has \(f_o = 150\) cm and \(f_e = 5\) cm. Find its magnifying power in normal adjustment.`,
      answer: 30, tol: 0.01, unit: '',
      solution: R`\(M = f_o/f_e = 150/5 = 30\).` },
    { level: 3, type: 'mcq', q: R`A glass lens (n = 1.5) is dipped into a liquid that also has n = 1.5. The lens:`,
      options: [R`has double its focal length`, R`has half its focal length`, R`stops focusing light (f becomes infinite)`, R`is unchanged`], correct: 2,
      solution: R`The relative index is 1, so \(1/f = (1 - 1)(\dots) = 0\). The lens becomes invisible to light.` },
    { level: 3, type: 'mcq', q: R`In single-slit diffraction, if the slit is made half as wide, the central bright band becomes:`,
      options: [R`half as wide`, R`twice as wide`, R`the same width`, R`4 times as wide`], correct: 1,
      solution: R`Width \(= 2\lambda D/a\), so halving \(a\) doubles the width.` },
    { level: 3, type: 'num', q: R`Lenses of power +5 D and −3 D are placed in contact. Find the focal length (in cm) of the combination.`,
      answer: 50, tol: 0.01, unit: 'cm',
      solution: R`\(P = +2\) D, so \(f = 0.5\) m = 50 cm.` },
    { level: 3, type: 'num', q: R`Unpolarised light passes through three Polaroids. The first and third are crossed, and the middle one is at \(45^\circ\) to both. What fraction of the original intensity comes out?`,
      answer: 0.125, tol: 0.001, unit: '',
      solution: R`\(I = \dfrac{I_0}{2}\cos^245^\circ\cos^245^\circ = \dfrac{I_0}{2}\cdot\dfrac12\cdot\dfrac12 = \dfrac{I_0}{8}\).` }
  ]
});
