// Book chapter: Dual Nature of Matter and Radiation. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figSetup = D.svg(420, 220, [
  D.rect(70, 30, 280, 100, { color: 'm', fill: 'soft', w: 2, r: 40 }), D.text(210, 22, 'evacuated glass tube', { size: 11, color: 'm', math: false }),
  D.line(110, 50, 110, 110, { color: 'k', w: 5 }), D.text(122, 112, 'C (emitter)', { size: 11, math: false, anchor: 'start' }),
  D.line(310, 50, 310, 110, { color: 'k', w: 5 }), D.text(298, 112, 'A (collector)', { size: 11, math: false, anchor: 'end' }),
  D.arrow(60, 10, 104, 58, { color: 'p', w: 1.6, head: 7 }), D.arrow(40, 30, 104, 80, { color: 'p', w: 1.6, head: 7 }), D.text(30, 18, 'light (ν)', { size: 11, color: 'p', math: false }),
  D.arrow(120, 70, 190, 70, { color: 'b', w: 1.4, head: 6 }), D.arrow(120, 90, 200, 90, { color: 'b', w: 1.4, head: 6 }), D.text(200, 58, 'photoelectrons', { size: 11, color: 'b', math: false }),
  D.line(110, 110, 110, 190, { w: 1.6 }), D.line(310, 110, 310, 190, { w: 1.6 }), D.line(110, 190, 160, 190, { w: 1.6 }), D.meter(160, 190, 220, 190, { s: 'A' }), D.cell(220, 190, 270, 190, { cells: 2 }), D.line(270, 190, 310, 190, { w: 1.6 }),
  D.text(245, 214, 'variable potential', { size: 11, color: 'm', math: false })
], 'Apparatus for studying the photoelectric effect');

var figIntensity = D.plot({
  w: 380, h: 210, x: [-2.5, 5], y: [0, 1.3], xlabel: 'V (anode)', ylabel: 'I', mathLabels: false, xticks: [[-1.6, '−V₀']], yticks: [], noOrigin: true,
  fns: [{ f: function (v) { return v < -1.6 ? 0 : 1.1 * (1 - Math.exp(-(v + 1.6) * 1.4)); }, from: -2.5, color: 'r', label: 'high intensity', lx: 2.2, ly: 1.17, math: false },
    { f: function (v) { return v < -1.6 ? 0 : 0.55 * (1 - Math.exp(-(v + 1.6) * 1.4)); }, from: -2.5, color: 'b', label: 'low intensity', lx: 2.2, ly: 0.63, math: false }],
  label: 'Photocurrent against anode potential at two intensities (same frequency)'
});

var figFreq = D.plot({
  w: 380, h: 210, x: [-3, 5], y: [0, 1.2], xlabel: 'V (anode)', ylabel: 'I', mathLabels: false, xticks: [[-2.4, '−V₀₂'], [-1.2, '−V₀₁']], yticks: [], noOrigin: true,
  fns: [{ f: function (v) { return v < -2.4 ? 0 : 0.9 * (1 - Math.exp(-(v + 2.4) * 1.3)); }, from: -3, color: 'p', label: 'ν₂ (higher)', lx: 2.4, ly: 1.02, math: false },
    { f: function (v) { return v < -1.2 ? 0 : 0.9 * (1 - Math.exp(-(v + 1.2) * 1.3)); }, from: -3, color: 'o', dash: '6 4', label: 'ν₁', lx: 0.2, ly: 0.45, math: false }],
  label: 'Photocurrent against anode potential at two frequencies (same intensity)'
});

var figV0 = D.plot({
  w: 400, h: 220, x: [0, 10], y: [-2.5, 4], xlabel: 'ν', ylabel: 'V₀', mathLabels: false, xticks: [[4, 'ν₀₁'], [6, 'ν₀₂']], yticks: [[-1.6, '−φ₀/e']],
  fns: [{ f: function (n) { return 0.4 * (n - 4); }, from: 0, to: 10, color: 'c', dash: '3 3', w: 1 }, { f: function (n) { return 0.4 * (n - 4); }, from: 4, to: 10, color: 'c', label: 'metal 1 (slope h/e)', lx: 5.4, ly: 2.2, math: false },
    { f: function (n) { return 0.4 * (n - 6); }, from: 6, to: 10, color: 'o', label: 'metal 2', lx: 8.6, ly: 0.3, math: false }],
  label: 'Stopping potential against frequency for two metals'
});

var figDG = D.row([
  [D.svg(210, 190, [D.rect(10, 40, 60, 24, { color: 'm', fill: 'soft', w: 1.4 }), D.text(40, 30, 'electron gun', { size: 11, math: false, color: 'm' }),
    D.arrow(70, 52, 150, 120, { color: 'b', w: 1.8, head: 7 }), D.rect(130, 120, 50, 20, { color: 'k', fill: 'soft', w: 1.6 }), D.text(155, 156, 'nickel crystal', { size: 11, math: false }),
    D.arrow(155, 120, 190, 40, { color: 'b', w: 1.8, head: 7 }), D.circle(194, 32, 9, { color: 'g', fill: 'soft', w: 1.4 }), D.text(160, 18, 'detector', { size: 11, color: 'g', math: false }),
    D.line(155, 120, 155, 40, { color: 'm', w: 1, dash: '3 3' }), D.angle(155, 120, 36, 66, 90, '', { color: 'm' }), D.text(168, 76, 'θ', { math: true })], 'Davisson-Germer apparatus'), 'electrons scattered from a crystal'],
  [D.plot({ w: 230, h: 190, x: [0, 90], y: [0, 1.2], xlabel: 'θ', ylabel: 'I', xticks: [[50, '50°']], yticks: [], fns: [{ f: function (t) { return 0.35 + 0.65 * Math.exp(-Math.pow((t - 50) / 9, 2)) - 0.002 * t; }, from: 5, to: 88, color: 'b' }], label: 'scattered intensity against angle at 54 V' }), 'peak at 50° for 54 V electrons']
]);

var figTwoMetals = D.plot({ w: 360, h: 280, x: [0, 15], y: [-5.2, 4.2], xlabel: 'ν (10¹⁴ Hz)', ylabel: 'Kₘₐₓ (eV)', mathLabels: false,
  xticks: [[5.2, '5.2'], [11.2, '11.2']], yticks: [[2, '2'], [-2.14, '−2.14'], [-4.65, '−4.65']],
  fns: [{ f: function (v) { return 0.4136 * v - 2.14; }, from: 0, to: 12.3, color: 'b', w: 2, label: 'caesium', lx: 9.2, ly: 3.6, math: false },
    { f: function (v) { return 0.4136 * v - 4.65; }, from: 0, to: 12.3, color: 'o', w: 2, label: 'copper', lx: 11.4, ly: 0.9, math: false }],
  pts: [{ x: 5.17, y: 0, color: 'b' }, { x: 11.24, y: 0, color: 'o' }],
  label: 'Maximum kinetic energy against frequency for two metals' });

// ---------- chapter text ----------
JEE.book('physics', 'dual-nature', {
  intro: [
    R`Is light a wave or a stream of particles? Interference, diffraction and polarisation prove it is a wave. Yet when light knocks electrons out of a metal, it behaves like a hail of particles. And electrons, which we think of as particles, can diffract like waves.`,
    R`This chapter explains this <b>wave–particle duality</b>: the photoelectric effect and Einstein's photon explanation, the energy and momentum of photons, and de Broglie's bold idea that every moving particle has a wavelength, confirmed by the Davisson–Germer experiment. These ideas launched quantum physics, and they are behind solar cells, digital cameras and electron microscopes.`
  ],
  sections: [
    { h: R`Dual nature of radiation`, t: [0], blocks: [
      R`By 1900, light was firmly established as an electromagnetic wave: it shows interference, diffraction and polarisation, and its speed matches Maxwell's prediction. But some experiments could not be explained by waves: the spectrum of hot bodies (explained by Planck in 1900 using energy packets hν), the photoelectric effect (Einstein, 1905) and the scattering of X-rays by electrons (Compton, 1923).`,
      R`The conclusion is that radiation has a <b>dual nature</b>. In propagation (interference, diffraction) it behaves as a wave; in interaction with matter (emission, absorption, photoelectric effect) it behaves as a stream of particles, <b>photons</b>. Both pictures are needed, but no single experiment shows both at once.`,
      R`<b>Planck's quantum idea.</b> A hot body glows red, then white, as it gets hotter. Wave theory predicted that it should pour out unlimited energy at short wavelengths, which is plainly false. Max Planck fixed this in 1900 by assuming that the oscillating charges in the body could only emit or absorb energy in whole packets of size hν. It seemed a mathematical trick at first; Einstein took it seriously and applied it to light itself.`,
      R`<b>Compton's experiment</b> (1923) clinched the particle picture: X-rays scattered by electrons came out with a <b>longer</b> wavelength, exactly as if a photon of momentum h/λ had collided with an electron like a billiard ball and lost some of its energy.`,
      { analogy: R`Think of energy arriving at a beach. A wave spreads its energy along the whole shore; a hail of pebbles delivers it in separate lumps, each lump hitting one spot. Light behaves like the wave when it travels and spreads, and like the pebbles when it is absorbed by a single electron.` },
      { check: { q: R`Name one phenomenon that shows the wave nature of light and one that shows its particle nature.`, ans: R`Wave: interference (Young's experiment) or diffraction. Particle: the photoelectric effect (or Compton scattering).` } }
    ] },

    { h: R`Electron emission and work function`, t: [0], blocks: [
      R`Free electrons in a metal are held inside it by the attraction of the positive ions. To pull one out, a minimum energy must be supplied: the <b>work function</b> φ₀ of the metal, usually given in electron-volts (1 eV = 1.6 × 10⁻¹⁹ J).`,
      { table: { head: [R`Metal`, R`Work function (eV)`], rows: [[R`Caesium`, R`2.14`], [R`Potassium`, R`2.30`], [R`Sodium`, R`2.75`], [R`Calcium`, R`3.20`], [R`Copper`, R`4.65`], [R`Platinum`, R`5.65`]] } },
      R`Electrons can be given this energy in three ways:`,
      { points: [R`<b>Thermionic emission:</b> heating the metal (the filament of an X-ray tube or old TV tube).`, R`<b>Field emission:</b> a very strong electric field (about 10⁸ V/m) pulls electrons out (spark plugs, electron microscopes).`, R`<b>Photoelectric emission:</b> light of high enough frequency knocks them out.`] },
      R`Why is there an energy barrier at all? Near the surface, an escaping electron leaves behind a positive charge that pulls it back, and the surface layer of ions acts like a fence. The work function depends on the metal and on the cleanliness of its surface; a thin layer of oxide or dirt can change it noticeably.`,
      { ex: { q: R`Find the threshold wavelength for caesium (φ₀ = 2.14 eV). Which metals in the table emit electrons when lit by green light of 500 nm?`,
        steps: [R`\(\lambda_0 = \dfrac{1240}{2.14}\) nm ≈ 579 nm.`, R`A 500 nm photon carries 1240/500 = 2.48 eV, more than the work functions of caesium (2.14 eV) and potassium (2.30 eV) but less than sodium's (2.75 eV).`], ans: R`≈ 579 nm; caesium and potassium only` } },
      { check: { q: R`Why are alkali metals like caesium used in photocells for visible light?`, ans: R`Their work functions are low (≈ 2 eV), so even visible photons can eject electrons.` } }
    ] },

    { h: R`Hertz's and Lenard's observations`, t: [2], blocks: [
      R`In 1887, while producing EM waves with spark gaps, Heinrich Hertz noticed that the sparks jumped more easily when the gap was lit by ultraviolet light. Hallwachs and Lenard (1886–1902) studied this <b>photoelectric effect</b> carefully, using an evacuated tube with two electrodes.`,
      { fig: figSetup, cap: R`Light falls on the emitter C. Ejected electrons travel to the collector A, and the current is measured. The potential of A relative to C can be varied and even reversed.` },
      R`They found that when UV light fell on the emitter, a current flowed even with no battery, and that it stopped completely below a certain frequency of light, however bright the light. Lenard showed that the particles emitted were electrons (photoelectrons).`,
      R`A simple demonstration uses a negatively charged gold-leaf electroscope with a clean zinc plate on top. Shine ultraviolet light on the plate and the leaves fall together as the plate loses electrons. With visible light, however bright, nothing happens; and a <b>positively</b> charged plate does not discharge at all, because any electrons freed are pulled straight back.`,
      { check: { q: R`Why must the tube be evacuated?`, ans: R`So that the photoelectrons are not stopped by collisions with gas molecules on their way to the collector.` } }
    ] },

    { h: R`Effect of intensity, potential and frequency`, t: [1], blocks: [
      { h3: R`Effect of intensity` },
      R`For light of a fixed frequency (above threshold), the photocurrent is proportional to the <b>intensity</b>: brighter light ejects more electrons per second.`,
      { h3: R`Effect of potential` },
      R`Making the collector more positive increases the current until all ejected electrons are collected: the <b>saturation current</b>. Making it negative repels the electrons; only the faster ones reach it. At one particular negative potential, the <b>stopping potential</b> V₀, even the fastest electrons are stopped and the current becomes zero. So \[K_{max} = \frac12mv_{max}^2 = eV_0\]`,
      { fig: figIntensity, cap: R`At a fixed frequency, a higher intensity gives a higher saturation current but the same stopping potential: the maximum kinetic energy does not depend on intensity.` },
      { h3: R`Effect of frequency` },
      { fig: figFreq, cap: R`At the same intensity, light of higher frequency needs a larger stopping potential: the maximum kinetic energy increases with frequency.` },
      { points: [R`For each metal there is a <b>threshold frequency</b> ν₀: below it, no electrons are emitted, however intense the light.`, R`Above ν₀, the stopping potential (maximum kinetic energy) increases <b>linearly</b> with frequency and is independent of intensity.`, R`Emission is <b>instantaneous</b> (within about 10⁻⁹ s), even for very dim light.`] },
      { h3: R`Why the wave theory fails` },
      R`In the wave picture, energy is spread uniformly over the wavefront and absorbed continuously. Brighter light should give faster electrons, any frequency should work if the light is bright enough, and dim light should need time to build up enough energy in one electron. All three predictions are wrong.`,
      { ex: { q: R`The saturation photocurrent in a cell is 2.0 μA. How many photoelectrons reach the collector each second? If the lamp is moved to half its distance from the cell, what happens to the current and to the stopping potential?`,
        steps: [R`n = I/e = 2.0 × 10⁻⁶ / 1.6 × 10⁻¹⁹ ≈ 1.25 × 10¹³ per second.`, R`Halving the distance makes the intensity 4 times larger (inverse-square law), so 4 times as many photons arrive per second. Each photon still has the same energy.`], ans: R`1.25 × 10¹³ s⁻¹; the current becomes 8 μA, the stopping potential is unchanged` } },
      { mistake: R`Thinking that brighter light gives faster photoelectrons. Intensity controls how many photons arrive (the current), not how much energy each one carries (the stopping potential).` },
      { check: { q: R`If the intensity of light is doubled (frequency unchanged), what happens to the stopping potential and the saturation current?`, ans: R`The stopping potential is unchanged; the saturation current doubles.` } }
    ] },

    { h: R`Einstein's photoelectric equation`, t: [3], blocks: [
      R`In 1905, Einstein proposed that light energy comes in packets (<b>quanta</b>, later called photons), each of energy \(E = h\nu\), where \(h = 6.63\times10^{-34}\) J s is Planck's constant. A photon gives all its energy to a single electron at once. Part of it (at least φ₀) is used to get the electron out; the rest is kinetic energy: \[K_{max} = h\nu - \phi_0\quad\text{or}\quad eV_0 = h\nu - h\nu_0\]`,
      { points: [R`If hν < φ₀ (ν < ν₀ = φ₀/h), no electron can escape: the threshold frequency.`, R`K_max grows linearly with ν, independent of intensity.`, R`More intense light means more photons, hence more electrons (larger current), not faster ones.`, R`One photon is absorbed in a single event, so emission is instantaneous.`] },
      { derive: R`The straight-line graph of V₀ against ν`, steps: [R`Einstein's equation with \(K_{max} = eV_0\): \(eV_0 = h\nu - \phi_0\).`, R`Divide by e: \(V_0 = \left(\dfrac he\right)\nu - \dfrac{\phi_0}{e}\), which has the form y = mx + c.`, R`So the slope is h/e (the same for every metal), the intercept on the V₀ axis is −φ₀/e, and V₀ = 0 at \(\nu = \phi_0/h = \nu_0\).`] },
      { fig: figV0, cap: R`V₀ against ν is a straight line of slope h/e for every metal; it cuts the frequency axis at the threshold frequency ν₀ and the V₀ axis at −φ₀/e.` },
      R`Millikan tested this equation carefully in 1916. His V₀–ν graphs were straight lines, and their slope gave a value of h agreeing with Planck's. Einstein received the 1921 Nobel Prize for this work.`,
      { ex: { q: R`Light of wavelength 400 nm falls on a metal of work function 2.3 eV. Find the maximum kinetic energy of the photoelectrons, the stopping potential and the threshold wavelength.`,
        steps: [R`Photon energy: \(E = \dfrac{hc}{\lambda} = \dfrac{1240\text{ eV nm}}{400\text{ nm}} = 3.1\) eV.`, R`\(K_{max} = 3.1 - 2.3 = 0.8\) eV, so V₀ = 0.8 V.`, R`\(\lambda_0 = \dfrac{1240}{2.3}\) nm.`], ans: R`0.8 eV; 0.8 V; ≈ 539 nm` } },
      { ex: { q: R`Light of frequency 1.0 × 10¹⁵ Hz gives a stopping potential of 1.84 V from a metal surface; light of 6.0 × 10¹⁴ Hz gives 0.18 V. Find Planck's constant and the work function.`,
        steps: [R`Subtract the two Einstein equations: \(e(V_1 - V_2) = h(\nu_1 - \nu_2)\), so \(h = \dfrac{1.6\times10^{-19}\times1.66}{4.0\times10^{14}}\) ≈ 6.64 × 10⁻³⁴ J s.`, R`\(\phi_0 = h\nu_1 - eV_1\): hν₁ = 6.64 × 10⁻¹⁹ J = 4.15 eV, so φ₀ = 4.15 − 1.84.`], ans: R`h ≈ 6.6 × 10⁻³⁴ J s; φ₀ ≈ 2.3 eV` } },
      { ex: { q: R`Find the maximum speed of the photoelectrons in the first example above (K_max = 0.8 eV).`,
        steps: [R`\(v = \sqrt{\dfrac{2K}{m}} = \sqrt{\dfrac{2\times0.8\times1.6\times10^{-19}}{9.11\times10^{-31}}}\).`], ans: R`≈ 5.3 × 10⁵ m/s` } },
      { fig: figTwoMetals, cap: R`Kₘₐₓ against ν for caesium (φ₀ = 2.14 eV) and copper (φ₀ = 4.65 eV). The lines are parallel because the slope is h for every metal; each cuts the frequency axis at its own threshold, and the extended lines meet the K axis at −φ₀.` },
      { tip: R`Use \(hc = 1240\) eV nm: the photon energy in eV is 1240 divided by the wavelength in nm. It saves a lot of arithmetic.` },
      R`<b>Photocells</b> put the effect to work. A photosensitive surface and a collector in a vacuum tube give a current that switches on and off with the light: they were used in burglar alarms, automatic doors, light meters and for reading the sound track of old films. Modern devices use semiconductor photodiodes and solar cells, which rely on the same idea of one photon freeing one electron.`,
      { check: { q: R`For a given metal, what does the slope of the V₀–ν graph depend on?`, ans: R`Nothing about the metal: it is h/e, a universal constant.` } }
    ] },

    { h: R`The photon: energy and momentum`, t: [4], blocks: [
      R`A <b>photon</b> is a quantum of electromagnetic radiation. Its properties:`,
      { points: [
        R`Energy \(E = h\nu = \dfrac{hc}{\lambda}\), independent of the intensity of the radiation.`,
        R`Momentum \(p = \dfrac E c = \dfrac h\lambda\).`,
        R`It travels at the speed of light c in vacuum and has zero rest mass.`,
        R`It is electrically neutral, so electric and magnetic fields do not deflect it.`,
        R`In collisions with particles, energy and momentum are conserved, but the number of photons need not be (they can be created or absorbed).`,
        R`Brighter light of the same colour means more photons per second, each with the same energy.`
      ] },
      { ex: { q: R`Find the energy and momentum of a photon of green light (λ = 500 nm).`,
        steps: [R`E = 1240/500 eV = 2.48 eV ≈ 3.97 × 10⁻¹⁹ J.`, R`\(p = h/\lambda = 6.63\times10^{-34}/5\times10^{-7}\).`], ans: R`2.48 eV; ≈ 1.33 × 10⁻²⁷ kg m/s` } },
      { ex: { q: R`A 1 mW laser emits light of 632.8 nm. How many photons does it emit per second?`,
        steps: [R`Energy per photon \(= 1240/632.8 \approx 1.96\) eV ≈ 3.14 × 10⁻¹⁹ J.`, R`n = P/E.`], ans: R`≈ 3.2 × 10¹⁵ photons per second` } },
      { ex: { q: R`Sunlight delivers about 1000 W/m² at the ground. Taking an average wavelength of 550 nm, how many photons fall on each square metre per second? Also find the momentum of an X-ray photon of wavelength 0.1 nm.`,
        steps: [R`Energy per photon \(= \dfrac{hc}{\lambda} = 3.61\times10^{-19}\) J, so n = 1000/(3.61 × 10⁻¹⁹).`, R`\(p = h/\lambda = 6.63\times10^{-34}/10^{-10}\).`], ans: R`≈ 2.8 × 10²¹ photons m⁻² s⁻¹; ≈ 6.6 × 10⁻²⁴ kg m/s` } },
      R`The huge photon numbers explain why light usually looks continuous: we see the average of billions of tiny packets. Only with very dim light and very sensitive detectors does the "graininess" of light show up, as individual clicks or dots on a screen.`,
      { check: { q: R`Which has more energy per photon: red light or blue light?`, ans: R`Blue (higher frequency).` } }
    ] },

    { h: R`Wave nature of particles`, t: [5], blocks: [
      R`Nature loves symmetry. If light waves can behave like particles, Louis de Broglie argued in 1924, then particles such as electrons might behave like waves. He proposed that every moving particle has an associated <b>matter wave</b>, with wavelength given by the same relation as for photons, λ = h/p.`,
      R`For ordinary objects, h is so tiny that the wavelength is far too small to notice. But for electrons, the wavelength is comparable to the spacing of atoms in a crystal, so electron waves can be diffracted by crystals, just as X-rays are.`,
      { ex: { q: R`Find the de Broglie wavelength of a 0.1 kg ball moving at 10 m/s.`,
        steps: [R`\(\lambda = \dfrac{h}{mv} = \dfrac{6.63\times10^{-34}}{0.1\times10}\).`], ans: R`≈ 6.6 × 10⁻³⁴ m: far too small to observe any wave effects` } },
      { ex: { q: R`Find the de Broglie wavelength of an electron moving at 3 × 10⁶ m/s (1% of the speed of light).`,
        steps: [R`\(\lambda = \dfrac{h}{m_ev} = \dfrac{6.63\times10^{-34}}{9.11\times10^{-31}\times3\times10^6}\).`], ans: R`≈ 0.24 nm, comparable to atomic spacings` } },
      R`So whether wave effects are noticeable depends on comparing λ with the size of whatever the wave meets. A 0.24 nm electron wave meeting rows of atoms 0.2 nm apart diffracts strongly; a ball's 10⁻³⁴ m wave meeting a 1 m gap does nothing measurable.`,
      { check: { q: R`Why do we not see wave effects for a moving cricket ball?`, ans: R`Its de Broglie wavelength is about 10⁻³⁴ m, vastly smaller than any slit or obstacle.` } }
    ] },

    { h: R`The de Broglie relation and matter waves`, t: [6], blocks: [
      R`<b>de Broglie relation:</b> \[\lambda = \frac hp = \frac h{mv}\] In terms of kinetic energy K: \(p = \sqrt{2mK}\), so \(\lambda = \dfrac{h}{\sqrt{2mK}}\). For a particle of charge q accelerated through a potential difference V, \(K = qV\) and \(\lambda = \dfrac{h}{\sqrt{2mqV}}\).`,
      { derive: R`Electron wavelength`, steps: [
        R`For an electron accelerated through V volts: \(\lambda = \dfrac{h}{\sqrt{2m_eeV}}\).`,
        R`Substituting the constants: \[\lambda = \frac{1.227}{\sqrt V}\ \text{nm}\]`
      ] },
      { ex: { q: R`Find the de Broglie wavelength of an electron accelerated through 100 V.`,
        steps: [R`\(\lambda = 1.227/\sqrt{100}\) nm.`], ans: R`≈ 0.123 nm, about the size of an atom` } },
      { ex: { q: R`A proton and an electron have the same kinetic energy. Compare their de Broglie wavelengths.`,
        steps: [R`\(\lambda\propto1/\sqrt m\) at equal K: \(\dfrac{\lambda_e}{\lambda_p} = \sqrt{\dfrac{m_p}{m_e}}\).`], ans: R`The electron's is ≈ 43 times longer` } },
      { ex: { q: R`Through what potential difference must an electron be accelerated to have a de Broglie wavelength of 0.1 nm? And what is the wavelength of an electron with kinetic energy 50 eV?`,
        steps: [R`\(\sqrt V = 1.227/0.1 = 12.27\), so V ≈ 150 V.`, R`K = 50 eV is the same as acceleration through 50 V: λ = 1.227/√50 nm.`], ans: R`≈ 150 V; ≈ 0.17 nm` } },
      { ex: { q: R`A proton and an α-particle are accelerated through the same potential difference. Find the ratio of their de Broglie wavelengths.`,
        steps: [R`\(\lambda = \dfrac{h}{\sqrt{2mqV}}\), so \(\dfrac{\lambda_p}{\lambda_\alpha} = \sqrt{\dfrac{m_\alpha q_\alpha}{m_pq_p}} = \sqrt{4\times2}\).`], ans: R`λ_p : λ_α = 2√2 : 1` } },
      { mistake: R`Using λ = h/(mv) with v taken from the accelerating voltage as if v = V. Always find the momentum from the kinetic energy: p = √(2mK) with K = qV.` },
      { h3: R`The Davisson–Germer experiment (1927)` },
      { fig: figDG, cap: R`Electrons accelerated through 54 V and scattered from a nickel crystal showed a strong peak at 50°, exactly as expected for waves of λ = 0.167 nm diffracted by rows of atoms.` },
      R`Davisson and Germer fired electrons at a nickel crystal and measured the scattered intensity at different angles. At 54 V, they found a sharp peak at θ = 50°. Diffraction by atomic rows spaced d = 0.215 nm gives \(d\sin\theta = \lambda\), i.e. λ = 0.215 × sin 50° ≈ 0.165 nm, matching de Broglie's prediction of \(1.227/\sqrt{54} \approx 0.167\) nm. G. P. Thomson observed electron diffraction rings through thin films at the same time. Electron microscopes use the very short wavelength of fast electrons to see details far smaller than light can resolve.`,
      R`<b>Electron microscopes.</b> A light microscope cannot show details much smaller than the wavelength of light, about 500 nm. Electrons accelerated through tens of thousands of volts have wavelengths below 0.01 nm, so an electron microscope, which focuses electron beams with magnetic "lenses", can show viruses and even rows of atoms.`,
      { adv: R`<b>Thermal neutrons</b> at temperature T have \(K = \frac32k_BT\), so \(\lambda = \dfrac{h}{\sqrt{3mk_BT}}\) ≈ 0.145 nm at 300 K: ideal for diffraction by crystals. <b>Heisenberg's uncertainty principle</b>, \(\Delta x\,\Delta p \geq \dfrac{h}{4\pi}\), follows from the wave nature of particles: a wave confined to a small region must contain a spread of wavelengths (momenta).` },
      { tip: R`For a photon λ = hc/E, but for a particle λ = h/√(2mK). So a photon and an electron with the same energy have very different wavelengths: at 100 eV the photon's is about 12.4 nm and the electron's about 0.12 nm.` },
      { check: { q: R`If an electron's speed is doubled (non-relativistic), what happens to its de Broglie wavelength?`, ans: R`It halves (λ ∝ 1/v).` } }
    ] }
  ],
  summary: [
    R`Radiation shows wave behaviour in propagation and particle behaviour (photons) in interactions with matter.`,
    R`Work function φ₀: minimum energy to free an electron. Emission: thermionic, field, photoelectric.`,
    R`Photoelectric effect: current ∝ intensity; K_max = eV₀ independent of intensity; threshold frequency ν₀; no time lag. Wave theory fails.`,
    R`Einstein: \(K_{max} = h\nu - \phi_0\), \(eV_0 = h(\nu - \nu_0)\); V₀–ν slope = h/e.`,
    R`Photon: E = hν = hc/λ (hc = 1240 eV nm), p = h/λ, zero rest mass, speed c.`,
    R`de Broglie: \(\lambda = h/p = h/\sqrt{2mK} = h/\sqrt{2mqV}\); electron \(\lambda = 1.227/\sqrt V\) nm.`,
    R`Davisson–Germer (54 V, 50°, nickel) confirmed electron waves.`,
    R`Two-frequency method: h = e(V₁ − V₂)/(ν₁ − ν₂); K_max–ν lines for different metals are parallel (slope h).`,
    R`Number of photons per second = P/(hν); photoelectrons per second = I_sat/e.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 3, §6.2 Photoelectric Effect`, url: 'https://openstax.org/books/university-physics-volume-3/pages/6-2-photoelectric-effect' },
    { t: R`OpenStax University Physics Vol. 3, §6.5 De Broglie's Matter Waves`, url: 'https://openstax.org/books/university-physics-volume-3/pages/6-5-de-broglies-matter-waves' },
    { t: R`OpenStax University Physics Vol. 3, §6.6 Wave-Particle Duality`, url: 'https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality' },
    { t: R`Wikipedia: Photoelectric effect`, url: 'https://en.wikipedia.org/wiki/Photoelectric_effect' },
    { t: R`Wikipedia: Davisson–Germer experiment`, url: 'https://en.wikipedia.org/wiki/Davisson%E2%80%93Germer_experiment' }
  ]
});
})();
