// Lesson: Dual Nature of Matter and Radiation.
var R = String.raw;
JEE.lesson('physics', 'dual-nature', {
  theory: [
    { h: R`Is light a wave or a stream of particles?`,
      body: [
        R`Interference, diffraction and polarisation can only be explained if light is a <b>wave</b>. But some experiments, above all the photoelectric effect, can only be explained if light comes in tiny packets of energy, like <b>particles</b>.`,
        R`The answer is that light has a <b>dual nature</b>: it behaves as a wave when it travels and spreads out, and as particles (photons) when it gives or takes energy.`
      ],
      analogy: R`A coin is still one coin, even though you see heads from one side and tails from the other. Light is one thing that shows a "wave face" in some experiments and a "particle face" in others.` },

    { h: R`The photoelectric effect: what Hertz and Lenard saw`,
      body: [
        R`When light of high enough frequency (often UV) falls on a metal surface, electrons are knocked out. These are <b>photoelectrons</b>, and this is the <b>photoelectric effect</b>.`,
        R`Hertz (1887) noticed that UV light helped sparks jump across a gap. Hallwachs and Lenard studied it carefully and found:`,
        R`(1) Below a certain <b>threshold frequency</b> \(\nu_0\), no electrons come out, however bright the light. (2) Above it, emission starts <b>instantly</b>. (3) The <b>maximum KE</b> of the electrons depends on the frequency, not on the brightness. (4) Brighter light gives <b>more</b> electrons (more current), not faster ones.`
      ],
      points: [R`Each metal has its own threshold frequency.`],
      check: { q: R`Will very bright red light eject electrons from a metal whose threshold is in the blue region?`, ans: R`No. Below the threshold frequency, brightness doesn't help at all.` } },

    { h: R`Why the wave picture fails`,
      body: [
        R`If light were only a wave, brighter light would carry more energy, so it should make electrons faster, and even dim light of any colour should eventually work if you wait long enough. Experiments show neither.`,
        R`So the energy must be delivered in separate lumps, and one lump must be big enough by itself to free an electron.`
      ] },

    { h: R`Einstein's photoelectric equation`,
      body: [
        R`Einstein said light is made of <b>photons</b>, each carrying energy \(E = h\nu = \dfrac{hc}{\lambda}\), where \(h = 6.63\times10^{-34}\) J s is Planck's constant.`,
        R`One photon gives all its energy to one electron. Part of it is used to escape the metal (the <b>work function</b> \(\phi = h\nu_0\)); the rest becomes kinetic energy: \(K_{max} = h\nu - \phi\).`,
        R`The <b>stopping potential</b> \(V_0\) is the reverse voltage that just stops the fastest electrons: \(eV_0 = K_{max}\). A graph of \(V_0\) against \(\nu\) is a straight line with slope \(h/e\) that cuts the axis at \(\nu_0\).`
      ],
      analogy: R`Think of a fairground game where a ball must be thrown hard enough to knock a coconut off. Throwing more slow balls (bright, low-frequency light) never works. One fast ball (one high-frequency photon) does it at once.`,
      points: [R`Handy shortcut: \(E(\text{eV}) = \dfrac{1240}{\lambda(\text{nm})}\).`],
      mistake: R`Thinking brighter light gives a higher stopping potential. Brightness changes only the number of electrons (the current), not their maximum energy.` },

    { h: R`Photons: light as particles`,
      body: [
        R`A photon has energy \(E = h\nu\) and momentum \(p = \dfrac{h}{\lambda} = \dfrac Ec\), but zero rest mass. It always travels at \(c\) in vacuum.`,
        R`Intensity is about how many photons arrive per second, while frequency decides the energy of each photon. A source of power \(P\) emits \(N = \dfrac{P}{h\nu}\) photons per second.`
      ] },

    { h: R`Matter waves: de Broglie's bold idea`,
      body: [
        R`If waves (light) can act like particles, de Broglie asked, can particles act like waves? Yes! Every moving particle has a wavelength \(\lambda = \dfrac hp = \dfrac{h}{mv}\).`,
        R`For a particle with kinetic energy K: \(\lambda = \dfrac{h}{\sqrt{2mK}}\). For an electron accelerated through V volts: \(\lambda = \dfrac{1.227}{\sqrt V}\) nm.`,
        R`For everyday objects, \(\lambda\) is unimaginably small, so we never notice it. For electrons, it is about the size of atoms, so it really matters.`
      ],
      analogy: R`A cricket ball's wavelength is about \(10^{-34}\) m, far smaller than an atomic nucleus, so it just behaves like a ball. An electron's wavelength is about as big as an atom, so it can diffract like a wave.`,
      points: [R`At the same KE, the lighter particle has the longer wavelength.`] },

    { h: R`Proof of matter waves`,
      body: [
        R`In 1927, <b>Davisson and Germer</b> fired electrons at a nickel crystal and saw them diffract, just as X-rays do. The measured wavelength matched de Broglie's formula.`,
        R`The electron microscope uses electron waves, which have far shorter wavelengths than light, to see much finer detail than any light microscope.`
      ] }
  ],

  examples: [
    { level: 1, t: 4, q: R`Find the energy of a photon of wavelength 620 nm, in eV and in joules.`,
      steps: [R`\(E = 1240/620 = 2\) eV.`, R`\(2\times1.6\times10^{-19}\) J.`],
      ans: R`2 eV = \(3.2\times10^{-19}\) J` },
    { level: 1, t: 1, q: R`A metal has a work function of 2.3 eV. Will light of wavelength 600 nm eject electrons from it?`,
      steps: [R`Photon energy \(= 1240/600 \approx 2.07\) eV.`, R`2.07 eV is less than 2.3 eV.`],
      ans: R`No, however bright the light is` },
    { level: 1, t: 6, q: R`A photon and an electron both have a wavelength of 1 nm. Compare their momenta.`,
      steps: [R`For both, \(p = h/\lambda\).`, R`\(p = 6.63\times10^{-34}/10^{-9}\).`],
      ans: R`Equal: \(6.63\times10^{-25}\) kg m/s each` },
    { level: 3, t: 3, q: R`For one metal, the stopping potential is 2.07 V for light of \(1.0\times10^{15}\) Hz and 4.14 V for \(1.5\times10^{15}\) Hz. Find Planck's constant and the threshold frequency.`,
      steps: [R`\(eV_0 = h\nu - \phi\), so the slope \(h/e = \dfrac{\Delta V_0}{\Delta\nu} = \dfrac{2.07}{0.5\times10^{15}} = 4.14\times10^{-15}\) V s.`, R`\(h = 1.6\times10^{-19}\times4.14\times10^{-15} \approx 6.6\times10^{-34}\) J s.`, R`\(V_0 = 0\) at \(\nu_0\): \(2.07 = 4.14\times10^{-15}(10^{15} - \nu_0)\), so \(\nu_0 = 0.5\times10^{15}\) Hz.`],
      ans: R`\(h \approx 6.6\times10^{-34}\) J s; \(\nu_0 = 5\times10^{14}\) Hz` },
    { level: 3, t: 6, q: R`A proton and an alpha particle are accelerated through the same potential difference. Find the ratio of their de Broglie wavelengths.`,
      steps: [R`KE gained \(= qV\), so \(\lambda = \dfrac{h}{\sqrt{2mqV}}\).`, R`\(\dfrac{\lambda_p}{\lambda_\alpha} = \sqrt{\dfrac{m_\alpha q_\alpha}{m_pq_p}} = \sqrt{4\times2}\).`],
      ans: R`\(2\sqrt2 : 1\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The energy of a photon of frequency \(\nu\) is:`,
      options: [R`\(h\nu\)`, R`\(h/\nu\)`, R`\(\nu/h\)`, R`\(h\lambda\)`], correct: 0,
      solution: R`Planck: \(E = h\nu\).` },
    { level: 1, type: 'mcq', q: R`The photoelectric effect shows that light behaves as:`,
      options: [R`waves`, R`particles (photons)`, R`neither`, R`sound`], correct: 1,
      solution: R`Energy delivered in single packets, the threshold and the instant emission all point to particles.` },
    { level: 1, type: 'mcq', q: R`The maximum kinetic energy of photoelectrons depends on the:`,
      options: [R`intensity of the light`, R`time of exposure`, R`frequency of the light`, R`area of the plate`], correct: 2,
      solution: R`\(K_{max} = h\nu - \phi\): only the frequency (and the metal) matter.` },
    { level: 1, type: 'mcq', q: R`The de Broglie wavelength of a particle of momentum \(p\) is:`,
      options: [R`\(p/h\)`, R`\(hp\)`, R`\(h/m\)`, R`\(h/p\)`], correct: 3,
      solution: R`\(\lambda = h/p\).` },
    { level: 1, type: 'num', q: R`Find the energy (in eV) of a photon of wavelength 400 nm.`,
      answer: 3.1, tol: 0.01, unit: 'eV',
      solution: R`\(1240/400 = 3.1\) eV.` },
    { level: 1, type: 'num', q: R`Photons of 5 eV fall on a metal of work function 2 eV. Find the maximum KE (in eV) of the photoelectrons.`,
      answer: 3, tol: 0.001, unit: 'eV',
      solution: R`\(K_{max} = 5 - 2 = 3\) eV.` },
    { level: 2, type: 'mcq', q: R`The intensity of light (above the threshold frequency) is doubled. The photoelectric current:`,
      options: [R`halves`, R`doubles`, R`stays the same`, R`becomes zero`], correct: 1,
      solution: R`Twice as many photons per second free twice as many electrons.` },
    { level: 2, type: 'mcq', q: R`The stopping potential depends on:`,
      options: [R`the intensity only`, R`the distance of the source`, R`the area of the plate`, R`the frequency of the light and the work function`], correct: 3,
      solution: R`\(eV_0 = h\nu - \phi\).` },
    { level: 2, type: 'mcq', q: R`The slope of a graph of stopping potential against frequency is:`,
      options: [R`\(h\)`, R`\(e/h\)`, R`\(h/e\)`, R`\(e\)`], correct: 2,
      solution: R`\(V_0 = (h/e)\nu - \phi/e\): a straight line of slope \(h/e\).` },
    { level: 2, type: 'mcq', q: R`The Davisson–Germer experiment confirmed:`,
      options: [R`the wave nature of electrons`, R`the particle nature of light`, R`the existence of the nucleus`, R`the quantisation of charge`], correct: 0,
      solution: R`Electrons diffracted from a crystal, just like waves.` },
    { level: 2, type: 'num', q: R`A metal's work function is 3.3 eV. Find its threshold frequency in units of \(10^{14}\) Hz. (h = \(6.6\times10^{-34}\) J s)`,
      answer: 8, tol: 0.01, unit: '× 10¹⁴ Hz',
      solution: R`\(\nu_0 = \phi/h = 3.3\times1.6\times10^{-19}/6.6\times10^{-34} = 8\times10^{14}\) Hz.` },
    { level: 2, type: 'num', q: R`An electron is accelerated through 150 V. Find its de Broglie wavelength (in Å).`,
      answer: 1, tol: 0.01, unit: 'Å',
      solution: R`\(\lambda = 1.227/\sqrt{150}\) nm ≈ 0.100 nm = 1.0 Å.` },
    { level: 2, type: 'num', q: R`A 6.63 W lamp emits light of wavelength 600 nm. How many photons per second does it emit, in units of \(10^{19}\)?`,
      answer: 2, tol: 0.01, unit: '× 10¹⁹ per s',
      solution: R`Each photon: \(hc/\lambda = 6.63\times10^{-34}\times3\times10^8/6\times10^{-7} = 3.315\times10^{-19}\) J. \(N = 6.63/3.315\times10^{-19} = 2\times10^{19}\).` },
    { level: 3, type: 'mcq', q: R`A proton and an electron have the same kinetic energy. Which has the longer de Broglie wavelength?`,
      options: [R`the proton`, R`the electron`, R`both are equal`, R`it depends on their speed`], correct: 1,
      solution: R`\(\lambda = h/\sqrt{2mK}\): the smaller mass (electron) gives the longer wavelength.` },
    { level: 3, type: 'mcq', q: R`The frequency of light falling on a metal (already above threshold) is doubled. The maximum KE of the photoelectrons becomes:`,
      options: [R`the same`, R`exactly double`, R`more than double`, R`less than double`], correct: 2,
      solution: R`New \(K = 2h\nu - \phi\), which is more than \(2(h\nu - \phi) = 2h\nu - 2\phi\).` },
    { level: 3, type: 'num', q: R`Light of wavelength 200 nm falls on a metal of work function 4.2 eV. Find the stopping potential (in V).`,
      answer: 2, tol: 0.01, unit: 'V',
      solution: R`Photon energy \(= 1240/200 = 6.2\) eV. \(K_{max} = 2.0\) eV, so \(V_0 = 2\) V.` },
    { level: 3, type: 'num', q: R`Electron A has a KE of 25 eV and electron B has 100 eV. Find the ratio \(\lambda_A/\lambda_B\) of their de Broglie wavelengths.`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`\(\lambda \propto 1/\sqrt K\), so \(\lambda_A/\lambda_B = \sqrt{100/25} = 2\).` }
  ]
});
