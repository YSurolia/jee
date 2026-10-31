// Lesson: Atoms and Nuclei.
var R = String.raw;
JEE.lesson('physics', 'atoms-nuclei', {
  theory: [
    { h: R`Rutherford's alpha-scattering experiment`,
      body: [
        R`Rutherford's team fired fast alpha particles (helium nuclei, charge +2e) at a very thin gold foil and watched where they went.`,
        R`<b>Results:</b> most passed straight through; some were deflected by small angles; and about 1 in 20,000 bounced almost straight back.`,
        R`<b>Conclusions:</b> the atom is mostly empty space, and all its positive charge and nearly all its mass are packed into a tiny centre, the <b>nucleus</b>, about \(10^{-15}\) m across (the atom is about \(10^{-10}\) m).`
      ],
      analogy: R`Rutherford said it was "as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you." Only something tiny and very heavy could do that.`,
      points: [R`Distance of closest approach: \(r_0 = \dfrac{k(2e)(Ze)}{K}\), where all the alpha particle's KE becomes PE.`] },

    { h: R`Rutherford's model and its problems`,
      body: [
        R`Rutherford pictured the atom as a tiny nucleus with electrons orbiting it, like planets round the Sun.`,
        R`But classical physics says an accelerating (orbiting) electron must radiate energy, lose speed and spiral into the nucleus in a fraction of a second. Atoms would collapse. It also could not explain why atoms give out light only at certain sharp wavelengths (line spectra).`
      ] },

    { h: R`Bohr's model: energy levels`,
      body: [
        R`Bohr added three rules: (1) electrons move only in certain allowed orbits without radiating; (2) in these orbits, angular momentum is a whole number of \(h/2\pi\): \(mvr = \dfrac{nh}{2\pi}\); (3) light is emitted or absorbed only when an electron jumps between orbits: \(h\nu = E_2 - E_1\).`,
        R`For hydrogen-like atoms (one electron, nuclear charge Z): radius \(r_n = 0.529\dfrac{n^2}{Z}\) Å and energy \(E_n = -13.6\dfrac{Z^2}{n^2}\) eV.`,
        R`The negative energy means the electron is bound. \(n = 1\) is the ground state; giving it 13.6 eV frees the electron (ionisation).`
      ],
      analogy: R`Energy levels are like the steps of a staircase: you can stand on a step but not between steps. Jumping down releases a fixed amount of energy as a photon.`,
      points: [R`\(r \propto n^2\), \(E \propto -1/n^2\), \(v \propto 1/n\).`],
      mistake: R`Thinking higher levels have less energy because the numbers get smaller. −1.51 eV (n = 3) is higher than −13.6 eV (n = 1).` },

    { h: R`The hydrogen spectrum`,
      body: [
        R`When excited electrons jump down, they emit photons of exact wavelengths: \(\dfrac1\lambda = RZ^2\left(\dfrac1{n_1^2} - \dfrac1{n_2^2}\right)\), with \(R \approx 1.097\times10^7\) m⁻¹.`,
        R`The lines form series named by the lower level \(n_1\): <b>Lyman</b> (to 1, ultraviolet), <b>Balmer</b> (to 2, visible), <b>Paschen</b> (to 3, infrared), <b>Brackett</b> (to 4) and <b>Pfund</b> (to 5).`,
        R`From level \(n\), the number of possible lines is \(\dfrac{n(n - 1)}{2}\).`
      ],
      analogy: R`Each element's set of lines is like a fingerprint. Astronomers use these "fingerprints" in starlight to find out which elements stars are made of.` },

    { h: R`The nucleus: what it is made of and how big it is`,
      body: [
        R`A nucleus contains \(Z\) protons and \(N\) neutrons; together they are <b>nucleons</b>, and \(A = Z + N\) is the mass number. It is written \(^A_ZX\).`,
        R`<b>Isotopes:</b> same Z, different A (like \(^{12}\)C and \(^{14}\)C). <b>Isobars:</b> same A, different Z. <b>Isotones:</b> same N.`,
        R`Nuclear radius \(R = R_0A^{1/3}\) (\(R_0 \approx 1.2\) fm). So the volume is proportional to A, and all nuclei have about the same, enormous density (\(\approx 2\times10^{17}\) kg/m³).`,
        R`What holds protons together despite their repulsion? The <b>nuclear force</b>: very strong, very short-ranged, and the same between any two nucleons.`
      ],
      check: { q: R`How many protons and neutrons are in \(^{238}_{92}\)U?`, ans: R`92 protons and \(238 - 92 = 146\) neutrons.` } },

    { h: R`Mass and energy`,
      body: [
        R`Einstein showed that mass and energy are interchangeable: \(E = mc^2\). A tiny amount of mass corresponds to a huge amount of energy.`,
        R`Atomic masses are measured in <b>atomic mass units</b>: 1 u = \(\tfrac1{12}\) of the mass of a \(^{12}\)C atom \(= 1.66\times10^{-27}\) kg, which is equivalent to 931.5 MeV.`
      ] },

    { h: R`Mass defect and binding energy`,
      body: [
        R`A nucleus always weighs <b>less</b> than its separate protons and neutrons. The missing mass, the <b>mass defect</b> \(\Delta m\), became the energy that binds the nucleus together: \(BE = \Delta m\,c^2\).`,
        R`The <b>binding energy per nucleon</b> (BE ÷ A) shows how tightly each nucleon is held. It rises quickly for light nuclei, peaks at about 8.8 MeV near iron-56 (the most stable nucleus), then slowly falls for heavy nuclei.`,
        R`So energy is released if heavy nuclei split (fission) or light nuclei join (fusion), because both move towards iron's more tightly bound state.`
      ],
      analogy: R`It's like a group discount: when nucleons "team up", they pay less mass than buying separately. The "saved" mass is released as energy.` },

    { h: R`Fission and fusion`,
      body: [
        R`<b>Fission:</b> a heavy nucleus like \(^{235}\)U absorbs a neutron and splits into two medium nuclei, releasing about 200 MeV and 2–3 new neutrons. These can split more nuclei, a <b>chain reaction</b>. Nuclear reactors control it (with control rods and moderators); atom bombs don't.`,
        R`<b>Fusion:</b> light nuclei such as hydrogen isotopes join to make helium. It needs millions of degrees so that the nuclei can overcome their repulsion. It powers the Sun and the stars.`
      ],
      points: [R`Fusion releases more energy per kilogram of fuel than fission.`] },

    { h: R`Radioactivity and half-life`,
      body: [
        R`Unstable nuclei decay on their own, giving out radiation: <b>alpha</b> (helium nucleus: A − 4, Z − 2), <b>beta-minus</b> (an electron, as a neutron turns into a proton: Z + 1) and <b>gamma</b> (high-energy photons; no change in A or Z).`,
        R`Decay is random, but the rate is proportional to how many nuclei remain: \(N = N_0e^{-\lambda t}\), where \(\lambda\) is the decay constant.`,
        R`The <b>half-life</b> \(T_{1/2} = \dfrac{0.693}{\lambda}\) is the time for half of the nuclei to decay. After \(n\) half-lives, \(N_0/2^n\) remain. The <b>mean life</b> is \(\tau = 1/\lambda\). <b>Activity</b> \(A = \lambda N\) is measured in becquerel (1 decay/s).`
      ],
      analogy: R`Half-life is like a box of popcorn kernels popping: you can't say which kernel pops next, but you can say that half will have popped after a certain time.`,
      mistake: R`Thinking everything has decayed after 2 half-lives. After 2 half-lives, a quarter still remains.` }
  ],

  examples: [
    { level: 1, t: 2, q: R`What is the energy of a hydrogen atom's electron in the n = 2 level? How much energy is needed to ionise it from there?`,
      steps: [R`\(E_2 = -13.6/4 = -3.4\) eV.`, R`To free it, raise its energy to 0.`],
      ans: R`−3.4 eV; 3.4 eV` },
    { level: 1, t: 8, q: R`A sample's activity falls from 800 to 100 counts per minute in 6 hours. Find its half-life.`,
      steps: [R`800 → 400 → 200 → 100: three halvings.`, R`3 half-lives = 6 h.`],
      ans: R`2 hours` },
    { level: 1, t: 4, q: R`How many protons and neutrons does a \(^{238}_{92}\)U nucleus have?`,
      steps: [R`Protons = Z = 92.`, R`Neutrons = A − Z = 238 − 92.`],
      ans: R`92 protons, 146 neutrons` },
    { level: 3, t: 3, q: R`Find the ratio of the longest wavelength in the Lyman series to the longest wavelength in the Balmer series of hydrogen.`,
      steps: [R`Longest Lyman line: 2 → 1, \(\dfrac1\lambda = R\left(1 - \tfrac14\right) = \tfrac34R\).`, R`Longest Balmer line: 3 → 2, \(\dfrac1\lambda = R\left(\tfrac14 - \tfrac19\right) = \tfrac5{36}R\).`, R`\(\dfrac{\lambda_L}{\lambda_B} = \dfrac{5/36}{3/4}\).`],
      ans: R`5 : 27` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`An atomic nucleus contains:`,
      options: [R`electrons and protons`, R`protons and neutrons`, R`only neutrons`, R`only electrons`], correct: 1,
      solution: R`Nucleons = protons + neutrons. Electrons are outside the nucleus.` },
    { level: 1, type: 'mcq', q: R`In Rutherford's experiment, most alpha particles:`,
      options: [R`bounced back`, R`were absorbed`, R`passed straight through`, R`stopped inside the foil`], correct: 2,
      solution: R`Most of an atom is empty space.` },
    { level: 1, type: 'mcq', q: R`Isotopes of an element have the same:`,
      options: [R`atomic number`, R`mass number`, R`number of neutrons`, R`nuclear mass`], correct: 0,
      solution: R`Isotopes: same Z (same element), different number of neutrons.` },
    { level: 1, type: 'mcq', q: R`The Sun's energy comes from:`,
      options: [R`nuclear fission`, R`chemical burning`, R`radioactive decay`, R`nuclear fusion`], correct: 3,
      solution: R`Hydrogen nuclei fuse into helium in the Sun's core.` },
    { level: 1, type: 'num', q: R`Find the ionisation energy (in eV) of a hydrogen atom in its ground state.`,
      answer: 13.6, tol: 0.01, unit: 'eV',
      solution: R`\(E_1 = -13.6\) eV, so 13.6 eV is needed to free the electron.` },
    { level: 1, type: 'num', q: R`What percentage of a radioactive sample remains after 3 half-lives?`,
      answer: 12.5, tol: 0.01, unit: '%',
      solution: R`\((1/2)^3 = 1/8 = 12.5\%\).` },
    { level: 2, type: 'mcq', q: R`In Bohr's model, the radius of the \(n\)th orbit is proportional to:`,
      options: [R`\(n\)`, R`\(n^2\)`, R`\(1/n\)`, R`\(1/n^2\)`], correct: 1,
      solution: R`\(r_n = 0.529\,n^2/Z\) Å.` },
    { level: 2, type: 'mcq', q: R`The Balmer series of hydrogen lies in the:`,
      options: [R`ultraviolet`, R`infrared`, R`visible region`, R`microwave region`], correct: 2,
      solution: R`Jumps down to n = 2 give visible lines (for example the red 656 nm line).` },
    { level: 2, type: 'mcq', q: R`In beta-minus decay:`,
      options: [R`a proton turns into a neutron`, R`a neutron turns into a proton, emitting an electron and an antineutrino`, R`an electron is captured by the nucleus`, R`the nucleus splits in two`], correct: 1,
      solution: R`\(n \to p + e^- + \bar\nu\): Z rises by 1 and A stays the same.` },
    { level: 2, type: 'mcq', q: R`Nuclear density:`,
      options: [R`is roughly the same for all nuclei`, R`is proportional to A`, R`is proportional to \(A^{1/3}\)`, R`is proportional to \(1/A\)`], correct: 0,
      solution: R`Volume \(\propto R^3 \propto A\) and mass \(\propto A\), so the density doesn't depend on A.` },
    { level: 2, type: 'num', q: R`Find the wavelength (in nm) of the photon emitted when a hydrogen electron falls from n = 3 to n = 2.`,
      answer: 656.5, tol: 1.5, unit: 'nm',
      solution: R`\(\Delta E = 13.6(1/4 - 1/9) = 1.889\) eV, so \(\lambda = 1240/1.889 \approx 656\) nm (red Balmer line).` },
    { level: 2, type: 'num', q: R`A nuclide has a half-life of 6.93 s. Find its decay constant (in s⁻¹).`,
      answer: 0.1, tol: 0.0005, unit: 's⁻¹',
      solution: R`\(\lambda = 0.693/T_{1/2} = 0.693/6.93 = 0.1\) s⁻¹.` },
    { level: 2, type: 'num', q: R`How much energy (in MeV) is released when 0.002 u of mass is converted into energy?`,
      answer: 1.863, tol: 0.005, unit: 'MeV',
      solution: R`\(0.002\times931.5 = 1.863\) MeV.` },
    { level: 3, type: 'mcq', q: R`When a nucleus emits an alpha particle, its mass number A and atomic number Z change by:`,
      options: [R`A − 2, Z − 4`, R`A unchanged, Z + 1`, R`A − 4, Z + 2`, R`A − 4, Z − 2`], correct: 3,
      solution: R`An alpha particle is \(^4_2\)He, so A drops by 4 and Z by 2.` },
    { level: 3, type: 'mcq', q: R`\(^{238}_{92}\)U decays to \(^{206}_{82}\)Pb. How many alpha and beta-minus decays take place?`,
      options: [R`8 alpha, 6 beta`, R`6 alpha, 8 beta`, R`8 alpha, 8 beta`, R`4 alpha, 6 beta`], correct: 0,
      solution: R`Alpha: \((238 - 206)/4 = 8\), taking Z to \(92 - 16 = 76\). Beta: to reach 82 needs 6.` },
    { level: 3, type: 'num', q: R`A radioactive sample has a half-life of 693 s. Find its mean life (in s).`,
      answer: 1000, tol: 0.5, unit: 's',
      solution: R`\(\lambda = 0.693/693 = 10^{-3}\) s⁻¹, so \(\tau = 1/\lambda = 1000\) s.` },
    { level: 3, type: 'num', q: R`Helium-4 has a binding energy of 28.3 MeV. Find its binding energy per nucleon (in MeV).`,
      answer: 7.075, tol: 0.01, unit: 'MeV',
      solution: R`\(28.3/4 \approx 7.08\) MeV per nucleon.` }
  ]
});
