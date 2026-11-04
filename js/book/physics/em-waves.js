// Book chapter: Electromagnetic Waves. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- figures ----------
var figDisp = D.svg(420, 210, [
  D.line(20, 110, 170, 110, { w: 2 }), D.line(250, 110, 400, 110, { w: 2 }),
  D.line(170, 40, 170, 180, { color: 'r', w: 3.4 }), D.line(250, 40, 250, 180, { color: 'b', w: 3.4 }),
  D.arrow(60, 110, 110, 110, { color: 'r', w: 2.2, head: 8, label: 'i', ly: -12 }),
  D.ellipse(110, 110, 12, 46, { color: 'g', w: 1.6 }), D.text(110, 172, 'surface 1:', { size: 11, color: 'g', math: false }), D.text(110, 186, 'current i passes', { size: 11, color: 'g', math: false }),
  D.path('M110 64 C 160 40, 215 55, 215 110 C 215 165, 160 180, 110 156', { color: 'p', w: 1.6, dash: '5 4' }), D.text(300, 192, 'surface 2 (between plates):', { size: 11, color: 'p', math: false }), D.text(300, 206, 'no current, but E changes', { size: 11, color: 'p', math: false }),
  [70, 95, 125, 150].map(function (y) { return D.arrow(176, y, 244, y, { color: 'o', w: 1.2, head: 6 }); }).join(''), D.text(210, 30, 'E increasing', { size: 11, color: 'o', math: false }),
  D.text(110, 46, 'loop', { size: 11, color: 'g', math: false })
], 'The same loop bounds a surface crossed by current and a surface between the plates');

var figWave = (function () {
  var p = [], ox = 40, oy = 120, L = 340, A = 70;
  p.push(D.arrow(ox, oy, ox + L + 25, oy, { color: 'k', w: 1.4, head: 8, label: 'x', at: 'end', lx: 10, ly: 0 }));
  p.push(D.arrow(ox, oy, ox, oy - A - 25, { color: 'r', w: 1.2, head: 7, label: 'E (y)', at: 'end', lx: 22, ly: 0, math: false, size: 12 }));
  p.push(D.arrow(ox, oy, ox - 40, oy + 50, { color: 'b', w: 1.2, head: 7, label: 'B (z)', at: 'end', lx: -10, ly: 12, math: false, size: 12 }));
  var e = [], b = [];
  for (var k = 0; k <= 200; k++) { var u = k / 200, x = ox + L * u, s = Math.sin(2 * PI * 1.5 * u); e.push([x, oy - A * s]); b.push([x - 30 * s, oy + 38 * s]); }
  for (k = 4; k < 200; k += 8) { var uu = k / 200, xx = ox + L * uu, ss = Math.sin(2 * PI * 1.5 * uu); if (Math.abs(ss) > 0.15) { p.push(D.line(xx, oy, xx, oy - A * ss, { color: 'r', w: 0.8, op: 0.6 }), D.line(xx, oy, xx - 30 * ss, oy + 38 * ss, { color: 'b', w: 0.8, op: 0.6 })); } }
  p.push(D.poly(e, { color: 'r', w: 2.2 }), D.poly(b, { color: 'b', w: 2.2 }));
  p.push(D.arrow(ox + L * 0.17, 28, ox + L * 0.83, 28, { color: 'm', w: 1, head: 6, both: true, label: 'λ', ly: -9 }));
  return D.svg(420, 220, p, 'A plane electromagnetic wave: E, B and the direction of travel are mutually perpendicular');
})();

var figSpectrum = (function () {
  var p = [], x0 = 20, x1 = 420, y = 60, h = 34;
  var bands = [['radio', 20, 110, 'o'], ['microwave', 110, 178, 'g'], ['infrared', 178, 235, 'r'], ['', 235, 252, 'k'], ['UV', 252, 300, 'p'], ['X-rays', 300, 360, 'b'], ['gamma', 360, 420, 'c']];
  bands.forEach(function (bd) { if (bd[0] !== '') { p.push(D.rect(bd[1], y, bd[2] - bd[1], h, { color: bd[3], fill: 'soft', w: 1 })); p.push(D.text((bd[1] + bd[2]) / 2, y + h / 2, bd[0], { size: 10.5, math: false, color: bd[3] })); } });
  p.push('<defs><linearGradient id="vis-grad" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#d00"/><stop offset="0.2" stop-color="#f80"/><stop offset="0.4" stop-color="#ee0"/><stop offset="0.6" stop-color="#2b2"/><stop offset="0.8" stop-color="#22f"/><stop offset="1" stop-color="#80f"/></linearGradient></defs>');
  p.push('<rect x="235" y="' + y + '" width="17" height="' + h + '" fill="url(#vis-grad)"/>');
  p.push(D.text(243, 118, 'visible', { size: 11, math: false }), D.line(243, 96, 243, 108, { color: 'm', w: 1 }));
  p.push(D.arrow(x1, 150, x0, 150, { color: 'm', w: 1.2, head: 7, label: 'wavelength increases', ly: -10, math: false, size: 11 }));
  p.push(D.arrow(x0, 180, x1, 180, { color: 'm', w: 1.2, head: 7, label: 'frequency and photon energy increase', ly: -10, math: false, size: 11 }));
  p.push(D.text(20, 40, '1 km', { size: 10, math: false, color: 'm', anchor: 'start' }), D.text(420, 40, '10⁻¹² m', { size: 10, math: false, color: 'm', anchor: 'end' }), D.text(243, 40, '400–700 nm', { size: 10, math: false, color: 'm' }));
  return D.svg(440, 195, p, 'The electromagnetic spectrum');
})();

var figHertz = D.svg(380, 150, [
  D.line(40, 75, 140, 75, { w: 2.2 }), D.line(160, 75, 260, 75, { w: 2.2 }), D.circle(140, 75, 7, { color: 'k', fill: 'soft', w: 1.6 }), D.circle(160, 75, 7, { color: 'k', fill: 'soft', w: 1.6 }),
  D.rect(20, 55, 20, 40, { color: 'm', fill: 'soft', w: 1.4 }), D.rect(260, 55, 20, 40, { color: 'm', fill: 'soft', w: 1.4 }), D.text(150, 52, 'spark gap', { size: 11, color: 'o', math: false }),
  D.path('M146 70 L150 62 L148 72 L154 66', { color: 'o', w: 1.6 }),
  D.circle(330, 75, 32, { color: 'b', w: 2 }), D.circle(330, 43, 4, { color: 'k', fill: 'soft', w: 1.2 }), D.text(330, 125, 'detector loop', { size: 11, color: 'b', math: false }),
  D.text(150, 115, 'oscillating charges radiate EM waves', { size: 11, color: 'm', math: false })
], "Hertz's experiment: a spark oscillator and a detector loop");

var figBcap = D.plot({ w: 330, h: 210, x: [0, 3.2], y: [0, 1.25], noOrigin: false, xlabel: 'r', ylabel: 'B', mathLabels: false,
  xticks: [[1, 'R']], yticks: [[1, 'Bₘₐₓ']],
  fns: [{ f: function (r) { return r; }, from: 0, to: 1, color: 'b', w: 2.2, label: 'B ∝ r (inside)', lx: 0.08, ly: 1.12, math: false },
    { f: function (r) { return 1 / r; }, from: 1, to: 3.1, color: 'o', w: 2.2, label: 'B ∝ 1/r (outside)', lx: 1.55, ly: 0.85, math: false }],
  segs: [{ x1: 1, y1: 0, x2: 1, y2: 1, color: 'm', w: 1, dash: '3 3' }],
  label: 'Magnetic field between the circular plates of a charging capacitor' });

var figPressure = D.row([
  [D.svg(200, 150, [D.rect(140, 20, 18, 110, { color: 'k', fill: 'soft', w: 1.6 }), D.arrow(20, 75, 132, 75, { color: 'o', w: 2.4, head: 9, label: 'p in', ly: -12, math: false }), D.text(80, 120, 'absorbed: Δp = p', { size: 11, color: 'm' })], 'Light absorbed by a black surface'), '(a) black surface: pressure I/c'],
  [D.svg(200, 150, [D.rect(140, 20, 10, 110, { color: 'b', fill: 'soft', w: 1.6 }), D.arrow(20, 60, 132, 60, { color: 'o', w: 2.4, head: 9, label: 'p in', ly: -12, math: false }), D.arrow(132, 92, 20, 92, { color: 'r', w: 2.4, head: 9, label: 'p out', ly: 16, math: false }), D.text(80, 135, 'reflected: Δp = 2p', { size: 11, color: 'm' })], 'Light reflected by a mirror'), '(b) mirror: pressure 2I/c']
]);

// ---------- chapter text ----------
JEE.book('physics', 'em-waves', {
  intro: [
    R`Light, radio, microwaves and X-rays seem completely different, yet they are all the same thing: <b>electromagnetic waves</b>, travelling electric and magnetic fields that need no medium and move through empty space at the speed of light.`,
    R`James Clerk Maxwell predicted them in 1864 by adding one missing piece, the <b>displacement current</b>, to the laws of electricity and magnetism. This chapter explains that idea, the properties of EM waves (their speed, transverse nature, energy and momentum), and the whole electromagnetic spectrum with its uses.`
  ],
  sections: [
    { h: R`Displacement current`, t: [0], blocks: [
      R`Ampère's law, \(\oint\vec B\cdot d\vec l = \mu_0I\), says the current through <b>any</b> surface bounded by the loop should give the same answer. But consider a capacitor being charged:`,
      { fig: figDisp, cap: R`A loop round the wire bounds a flat surface (1) crossed by the current i, and a bulging surface (2) passing between the plates, which no current crosses.` },
      R`Through surface 1, the enclosed current is i; through surface 2, it is zero. Ampère's law gives two different answers for the same loop: it must be incomplete. Maxwell noticed that between the plates, although no charge flows, the <b>electric field is changing</b>. He proposed that a changing electric flux acts like a current, the <b>displacement current</b>: \[i_d = \varepsilon_0\frac{d\Phi_E}{dt}\]`,
      { derive: R`Displacement current equals conduction current`, steps: [
        R`Between the plates: \(E = \dfrac{q}{\varepsilon_0A}\), so \(\Phi_E = EA = \dfrac{q}{\varepsilon_0}\).`,
        R`\(i_d = \varepsilon_0\dfrac{d\Phi_E}{dt} = \dfrac{dq}{dt} = i\). The displacement current between the plates equals the conduction current in the wire, so current is continuous.`
      ] },
      R`<b>Ampère–Maxwell law:</b> \[\oint\vec B\cdot d\vec l = \mu_0\left(i_c + \varepsilon_0\frac{d\Phi_E}{dt}\right)\] Just as a changing magnetic field produces an electric field (Faraday), a changing electric field produces a magnetic field. This symmetry is what makes electromagnetic waves possible.`,
      { table: { head: [R`Maxwell's equations (integral form)`, R`Meaning`], rows: [
        [R`\(\oint\vec E\cdot d\vec A = q/\varepsilon_0\)`, R`Gauss's law: charges produce E`],
        [R`\(\oint\vec B\cdot d\vec A = 0\)`, R`no magnetic monopoles`],
        [R`\(\oint\vec E\cdot d\vec l = -\dfrac{d\Phi_B}{dt}\)`, R`Faraday: changing B produces E`],
        [R`\(\oint\vec B\cdot d\vec l = \mu_0i_c + \mu_0\varepsilon_0\dfrac{d\Phi_E}{dt}\)`, R`Ampère–Maxwell: currents and changing E produce B`]] } },
      { points: [R`In words, Maxwell's four equations say: electric charges are the sources of electric field lines;`, R`magnetic field lines never begin or end (there are no magnetic charges);`, R`a changing magnetic field creates a circulating electric field (this is how generators work);`, R`currents <b>and</b> changing electric fields create circulating magnetic fields. The last half of this statement was Maxwell's addition, and it is the one that predicts light.`] },
      { analogy: R`Think of the wire and the gap as a relay race. In the wire, moving charges carry the "current baton". At the capacitor the charges cannot cross the gap, so the changing electric field takes the baton across and hands it to the charges in the wire on the other side. Either way, the magnetic field around the circuit sees an unbroken current.` },
      { mistake: R`Thinking that the displacement current is a flow of charge. No charge crosses the gap: \(i_d\) is a changing electric flux that produces a magnetic field exactly as a real current would.` },
      { ex: { q: R`A 2 μF capacitor is being charged so that its voltage rises at 10⁶ V/s. Find the displacement current between its plates.`,
        steps: [R`\(i_d = \dfrac{dq}{dt} = C\dfrac{dV}{dt} = 2\times10^{-6}\times10^6\).`], ans: R`2 A` } },
      { ex: { q: R`The electric field between the plates (area 0.01 m²) of a capacitor changes at \(10^{12}\) V m⁻¹ s⁻¹. Find the displacement current.`,
        steps: [R`\(\Phi_E = EA\), so \(i_d = \varepsilon_0A\dfrac{dE}{dt} = 8.85\times10^{-12}\times0.01\times10^{12}\).`], ans: R`≈ 0.089 A` } },
      R`<b>The magnetic field inside a charging capacitor.</b> Take circular plates of radius R. A loop of radius r < R between the plates encloses only the fraction r²/R² of the displacement current, so the Ampère–Maxwell law gives \(B\cdot2\pi r = \mu_0i\dfrac{r^2}{R^2}\), i.e. \(B = \dfrac{\mu_0ir}{2\pi R^2}\), growing linearly with r. Outside the plates (r > R) the whole current is enclosed and \(B = \dfrac{\mu_0i}{2\pi r}\), just as around the wire.`,
      { fig: figBcap, cap: R`The magnetic field between the plates rises linearly up to the edge of the plates, then falls off as 1/r. It is exactly the pattern around a thick wire carrying the same current.` },
      { ex: { q: R`A capacitor with circular plates of radius 6 cm is charged by a current of 0.15 A. Find the magnetic field 3 cm from the axis, between the plates.`,
        steps: [R`\(B = \dfrac{\mu_0ir}{2\pi R^2} = \dfrac{2\times10^{-7}\times0.15\times0.03}{0.0036}\).`], ans: R`2.5 × 10⁻⁷ T (half the value at the edge, 5 × 10⁻⁷ T)` } },
      { check: { q: R`Is there a displacement current between the plates of a capacitor connected to a steady DC supply after it is fully charged?`, ans: R`No: the field is no longer changing, so \(d\Phi_E/dt = 0\).` } }
    ] },

    { h: R`Sources of electromagnetic waves`, t: [1], blocks: [
      R`A charge at rest produces only an electric field; a charge moving steadily produces a steady magnetic field too. But an <b>accelerating</b> charge produces changing electric and magnetic fields that regenerate each other and travel outward: it <b>radiates</b> electromagnetic waves. A charge oscillating at frequency ν radiates waves of the same frequency.`,
      { points: [R`Radio waves: electrons oscillating in an antenna, driven by an LC oscillator circuit.`, R`Light: electrons jumping between energy levels in atoms.`, R`X-rays: fast electrons suddenly decelerated in a metal target.`, R`Gamma rays: transitions inside atomic nuclei.`] },
      { ex: { q: R`An LC circuit with L = 0.5 μH and C = 5 pF drives an antenna. What frequency and wavelength does it radiate?`,
        steps: [R`\(\nu = \dfrac{1}{2\pi\sqrt{LC}} = \dfrac{1}{2\pi\sqrt{2.5\times10^{-18}}}\) ≈ 1.0 × 10⁸ Hz.`, R`\(\lambda = c/\nu\).`], ans: R`≈ 100 MHz, λ ≈ 3 m (FM radio)` } },
      R`To radiate well, an antenna must be comparable in size to the wavelength. That is why a radio station at 1 MHz (λ = 300 m) needs a tall mast, while a mobile phone at about 2 GHz (λ = 15 cm) fits its antenna inside the case. Visible light (λ about 500 nm) is radiated by atoms, which are themselves tiny oscillators.`,
      { fig: figHertz, cap: R`Hertz made sparks jump across a gap in an oscillating circuit; tiny sparks then appeared across the gap of a separate detector loop, proving the waves had crossed the room.` },
      R`In 1887 Heinrich Hertz produced and detected EM waves (about 6 m wavelength) in the laboratory, showing that they reflect, refract and interfere just like light. In 1895 Jagadish Chandra Bose produced much shorter waves (5 mm to 25 mm), and Marconi soon sent radio signals across the Atlantic.`,
      { check: { q: R`Does an electron moving in a straight line at constant velocity radiate EM waves?`, ans: R`No: only accelerated charges radiate.` } }
    ] },

    { h: R`Characteristics of electromagnetic waves`, t: [1], blocks: [
      R`In an EM wave travelling along x, the electric and magnetic fields oscillate in step (in phase): \[E_y = E_0\sin(kx - \omega t),\qquad B_z = B_0\sin(kx - \omega t)\] with \(k = 2\pi/\lambda\) and \(\omega = 2\pi\nu\).`,
      { analogy: R`An EM wave is like two people leapfrogging. The changing electric field creates a magnetic field just ahead of it; that changing magnetic field creates an electric field a little further on, and so on. Each field keeps regenerating the other, so the pair travels through empty space without needing anything to wave.` },
      { fig: figWave, cap: R`A plane EM wave: E oscillates along y, B along z, and the wave moves along x. E and B are in phase.` },
      { derive: R`Speed of EM waves`, steps: [
        R`Maxwell's equations lead to a wave equation for E and B whose speed is \[c = \frac{1}{\sqrt{\mu_0\varepsilon_0}}\]`,
        R`With \(\mu_0 = 4\pi\times10^{-7}\) T m/A and \(\varepsilon_0 = 8.854\times10^{-12}\) C² N⁻¹ m⁻²: c ≈ 3.00 × 10⁸ m/s, exactly the measured speed of light. Maxwell concluded that light is an electromagnetic wave.`,
        R`In a medium: \(v = \dfrac{1}{\sqrt{\mu\varepsilon}} = \dfrac{c}{\sqrt{\mu_r\varepsilon_r}}\), so the refractive index is \(n = \sqrt{\mu_r\varepsilon_r}\).`
      ] },
      { derive: R`Why E₀/B₀ = c`, steps: [R`Apply Faraday's law to a thin rectangle in the xy-plane for the wave \(E_y = E_0\sin(kx - \omega t)\), \(B_z = B_0\sin(kx - \omega t)\). It gives \(\dfrac{\partial E_y}{\partial x} = -\dfrac{\partial B_z}{\partial t}\).`, R`Left side: \(kE_0\cos(kx - \omega t)\). Right side: \(\omega B_0\cos(kx - \omega t)\).`, R`So \(kE_0 = \omega B_0\), and \(\dfrac{E_0}{B_0} = \dfrac{\omega}{k} = \nu\lambda = c\).`] },
      { points: [R`EM waves need no medium; they travel through a vacuum.`, R`The amplitudes are related by \(\dfrac{E_0}{B_0} = c\) (and \(E = cB\) at every instant).`, R`All EM waves travel at c in vacuum, whatever their frequency; \(c = \nu\lambda\).`, R`They carry energy, momentum and angular momentum.`] },
      { ex: { q: R`An EM wave has \(E_y = 30\sin(2\times10^7x - 6\times10^{15}t)\) V/m. Find its wavelength, frequency and the amplitude and direction of its magnetic field.`,
        steps: [R`\(\lambda = 2\pi/k = 2\pi/(2\times10^7)\); \(\nu = \omega/2\pi\).`, R`\(B_0 = E_0/c = 30/(3\times10^8)\); B is along z (perpendicular to E and to x).`], ans: R`λ ≈ 314 nm (ultraviolet); ν ≈ 9.5 × 10¹⁴ Hz; B₀ = 10⁻⁷ T along z` } },
      { ex: { q: R`The magnetic field of a plane EM wave in vacuum has amplitude \(2\times10^{-8}\) T. Find the amplitude of its electric field.`,
        steps: [R`\(E_0 = cB_0 = 3\times10^8\times2\times10^{-8}\).`], ans: R`6 V/m` } },
      { ex: { q: R`Light travels through glass with \(\varepsilon_r = 2.25\) and \(\mu_r = 1\). Find its speed and the refractive index of the glass.`,
        steps: [R`\(n = \sqrt{\mu_r\varepsilon_r} = \sqrt{2.25} = 1.5\).`, R`\(v = c/n = 3\times10^8/1.5\).`], ans: R`n = 1.5, v = 2 × 10⁸ m/s` } },
      { h3: R`Energy and momentum` },
      R`The energy of an EM wave is shared equally between its electric and magnetic fields. The average energy density is \(u = \frac12\varepsilon_0E_0^2\) (with \(\frac14\varepsilon_0E_0^2\) electric and \(\frac14\varepsilon_0E_0^2 = \frac{B_0^2}{4\mu_0}\) magnetic), and the <b>intensity</b> (power per unit area) is \[I = uc = \frac12c\varepsilon_0E_0^2\]`,
      R`Many books use <b>rms values</b>: \(E_{rms} = E_0/\sqrt2\), so \(I = c\varepsilon_0E_{rms}^2\). For a point source of power P radiating equally in all directions, the intensity at distance r is \(I = \dfrac{P}{4\pi r^2}\): it falls off with the square of the distance, and the field amplitude falls off as 1/r.`,
      { ex: { q: R`A 100 W lamp radiates uniformly in all directions. Find the intensity and the amplitudes of E and B at 3 m. (Assume all the power is radiated as EM waves.)`,
        steps: [R`\(I = \dfrac{100}{4\pi\times9}\) ≈ 0.88 W/m².`, R`\(E_0 = \sqrt{\dfrac{2I}{c\varepsilon_0}} = \sqrt{\dfrac{2\times0.88}{3\times10^8\times8.85\times10^{-12}}}\) ≈ 25.8 V/m; \(B_0 = E_0/c\).`], ans: R`I ≈ 0.88 W/m², E₀ ≈ 25.8 V/m (E_rms ≈ 18.2 V/m), B₀ ≈ 8.6 × 10⁻⁸ T` } },
      R`An EM wave also carries momentum \(p = U/c\) for energy U. When it falls on a surface it exerts <b>radiation pressure</b>: \(I/c\) for a perfect absorber and \(2I/c\) for a perfect reflector. Solar sails and the tails of comets (which point away from the Sun) show this pressure.`,
      { fig: figPressure, cap: R`(a) An absorbing surface takes all of the incoming momentum p. (b) A mirror reverses it, so the change in momentum is 2p and the pressure is twice as large.` },
      { ex: { q: R`Light of intensity 1000 W/m² falls normally on a perfectly reflecting mirror of area 2 m². Find the force on it.`,
        steps: [R`Pressure = 2I/c; force = \(\dfrac{2IA}{c} = \dfrac{2\times1000\times2}{3\times10^8}\).`], ans: R`≈ 1.3 × 10⁻⁵ N` } },
      { ex: { q: R`Sunlight reaching the Earth has an intensity of about 1360 W/m². Find the peak electric field and the radiation pressure on a black surface.`,
        steps: [R`\(E_0 = \sqrt{\dfrac{2I}{c\varepsilon_0}} = \sqrt{\dfrac{2\times1360}{3\times10^8\times8.85\times10^{-12}}}\).`, R`\(p = I/c = 1360/(3\times10^8)\).`], ans: R`E₀ ≈ 1.0 × 10³ V/m; pressure ≈ 4.5 × 10⁻⁶ Pa (tiny)` } },
      { tip: R`Energy questions often hide the equal sharing: the average electric and magnetic energy densities are each \(\frac14\varepsilon_0E_0^2\), and together they make \(\frac12\varepsilon_0E_0^2\). Intensity is always energy density × c.` },
      { check: { q: R`In an EM wave, which carries more energy: the electric field or the magnetic field?`, ans: R`Neither: they carry equal shares.` } }
    ] },

    { h: R`Transverse nature of electromagnetic waves`, t: [2], blocks: [
      R`In an EM wave, \(\vec E\) and \(\vec B\) are perpendicular to each other and to the direction of propagation. The direction of travel is along \(\vec E\times\vec B\). EM waves are therefore <b>transverse</b>.`,
      R`Evidence: light can be <b>polarised</b>. A polaroid sheet lets through only the component of E along one direction; two crossed polaroids block light completely. Only transverse waves can be polarised (longitudinal sound waves cannot).`,
      R`The three directions form a right-handed set: curl the fingers of your right hand from \(\vec E\) to \(\vec B\), and your thumb points along the direction of travel. If you know any two of the three directions, this rule gives the third. The fields oscillate <b>in phase</b>: E and B reach their maximum values at the same place and the same instant, and both are zero together.`,
      R`Polarisation is used every day. Polaroid sunglasses block the horizontally polarised glare reflected from roads and water. LCD screens control the brightness of each pixel by rotating the polarisation of light between two polarising films. And TV and satellite antennas are mounted horizontally or vertically to match the polarisation of the transmitted wave.`,
      { ex: { q: R`An EM wave travels along +z, and its electric field points along +x at some instant. In which direction is its magnetic field?`,
        steps: [R`\(\vec E\times\vec B\) must point along +z: \(\hat x\times\hat y = \hat z\).`], ans: R`+y` } },
      { ex: { q: R`An EM wave travels along −x and its electric field is along +z. Find the direction of its magnetic field.`,
        steps: [R`\(\vec E\times\vec B\) must point along −x, and \(\hat z\times\hat y = -\hat x\).`], ans: R`+y` } },
      { mistake: R`Thinking that E and B in a travelling wave are 90° out of phase, as the energies are in an LC circuit. In a travelling EM wave, E and B peak together.` },
      { check: { q: R`Can EM waves have an electric field component along their direction of travel (in free space)?`, ans: R`No: in free space they are purely transverse.` } }
    ] },

    { h: R`The electromagnetic spectrum`, t: [3], blocks: [
      R`EM waves span an enormous range of wavelengths, from kilometres to less than the size of a nucleus. The whole range is the <b>electromagnetic spectrum</b>. All its parts are the same kind of wave, differing only in wavelength (and frequency); they are named by how they are produced and detected.`,
      R`What changes along the spectrum is the energy of each photon, \(E = h\nu = \dfrac{hc}{\lambda}\). A photon of visible light (500 nm) carries about 2.5 eV, enough to trigger the chemistry of vision. An X-ray photon (0.1 nm) carries about 12 keV, enough to knock electrons out of atoms. A radio photon at 100 MHz carries only about 4 × 10⁻⁷ eV. This is why the same kind of wave behaves so differently in each band.`,
      { fig: figSpectrum, cap: R`The electromagnetic spectrum, from long-wavelength radio waves to short-wavelength gamma rays. Visible light is a tiny band from about 400 nm (violet) to 700 nm (red).` },
      { table: { head: [R`Type`, R`Wavelength range`, R`Production`, R`Detection`], rows: [
        [R`Radio`, R`> 0.1 m`, R`oscillating currents in antennas`, R`receiver antennas`],
        [R`Microwave`, R`0.1 m to 1 mm`, R`klystron, magnetron, Gunn diode`, R`point-contact diodes`],
        [R`Infrared`, R`1 mm to 700 nm`, R`hot bodies, molecular vibrations`, R`thermopiles, bolometers, IR film`],
        [R`Visible`, R`700 nm to 400 nm`, R`electrons in atoms changing levels`, R`eye, photocells, film`],
        [R`Ultraviolet`, R`400 nm to 1 nm`, R`inner electrons; the Sun, special lamps`, R`photocells, photographic film`],
        [R`X-rays`, R`1 nm to 10⁻³ nm`, R`X-ray tubes (fast electrons hitting metal)`, R`film, Geiger tubes, ionisation chambers`],
        [R`Gamma rays`, R`< 10⁻³ nm`, R`radioactive nuclei, nuclear reactions`, R`film, Geiger tubes, scintillators`]] } },
      { ex: { q: R`Find the wavelength of (a) an FM radio station at 100 MHz (b) a microwave oven at 2.45 GHz.`,
        steps: [R`\(\lambda = c/\nu\).`], ans: R`(a) 3 m (b) ≈ 12 cm` } },
      { ex: { q: R`To which part of the spectrum does each belong: (a) λ = 10 μm (b) λ = 0.05 nm (c) ν = 5 × 10¹⁴ Hz?`,
        steps: [R`(a) 10 μm = 10⁻⁵ m lies between 1 mm and 700 nm.`, R`(b) 0.05 nm lies in the X-ray range (1 nm to 10⁻³ nm).`, R`(c) λ = c/ν = 600 nm, between 400 and 700 nm.`], ans: R`(a) infrared (b) X-rays (c) visible (orange-red light)` } },
      { h3: R`A walk along the spectrum` },
      { points: [R`<b>Radio waves</b> are made by electrons oscillating in antennas. Long wavelengths bend round hills and buildings, which suits broadcasting.`, R`<b>Microwaves</b> (mm to cm) travel in straight beams and pass through the atmosphere, so they are used for radar and satellite links. Water molecules absorb them strongly, which is how a microwave oven heats food.`, R`<b>Infrared</b> is emitted by every warm object: you feel it as heat. Molecules absorb it by vibrating faster.`, R`<b>Visible light</b> is the narrow band our eyes detect, from violet (400 nm) to red (700 nm).`, R`<b>Ultraviolet</b> photons can break chemical bonds; they cause sunburn and kill germs. The ozone layer absorbs most solar UV.`, R`<b>X-rays</b> pass through soft tissue but are stopped by bone and metal, which makes shadow pictures possible.`, R`<b>Gamma rays</b> come from nuclei. They are the most penetrating and the most damaging to living cells.`] },
      { tip: R`Order of increasing frequency: <b>R</b>adio, <b>M</b>icrowave, <b>I</b>nfrared, <b>V</b>isible, <b>U</b>ltraviolet, <b>X</b>-ray, <b>G</b>amma ("Raging Martians Invaded Venus Using X-ray Guns"). Within visible light, red has the longest wavelength and violet the shortest (VIBGYOR).` },
      { check: { q: R`Which travels faster in vacuum: X-rays or radio waves?`, ans: R`Neither: all EM waves travel at c in vacuum.` } }
    ] },

    { h: R`Uses of electromagnetic waves`, t: [4], blocks: [
      { table: { head: [R`Type`, R`Uses`], rows: [
        [R`Radio waves`, R`AM (530 kHz to 1710 kHz) and FM (88 MHz to 108 MHz) broadcasting, TV, mobile phones (UHF bands), radio astronomy`],
        [R`Microwaves`, R`radar (aircraft navigation, speed guns), satellite communication, microwave ovens (water molecules absorb ~2.45 GHz), Wi-Fi`],
        [R`Infrared`, R`remote controls, night-vision cameras, heat therapy, greenhouse effect (Earth's IR is trapped), optical-fibre communication, weather satellites`],
        [R`Visible light`, R`vision, photography, photosynthesis, optical instruments, lasers`],
        [R`Ultraviolet`, R`sterilising water and surgical instruments, LASIK eye surgery, detecting forged notes, vitamin D production; the ozone layer absorbs most solar UV`],
        [R`X-rays`, R`medical imaging (bones, teeth), CT scans, airport security, studying crystal structures (X-ray diffraction)`],
        [R`Gamma rays`, R`cancer treatment (radiotherapy), sterilising food and medical equipment, astronomy of violent events`]] } },
      R`<b>Communication</b> uses the long-wavelength end. AM radio uses waves hundreds of metres long; FM radio and TV use waves of a few metres; mobile phones, Wi-Fi and GPS use microwaves of 5–30 cm, which can be focused into narrow beams and carry a great deal of information. Optical fibres carry infrared light of about 1.5 μm.`,
      R`Higher frequency means more energy per photon (E = hν, see the Dual Nature chapter). That is why UV, X-rays and gamma rays can damage living cells and must be used carefully, while radio waves and microwaves cannot ionise atoms.`,
      R`<b>The greenhouse effect.</b> Visible sunlight passes through the atmosphere and warms the ground. The warm ground re-radiates the energy as infrared, which carbon dioxide and water vapour absorb, so the energy is trapped and the Earth stays warmer than it otherwise would. More CO₂ traps more infrared, which is the root of global warming.`,
      { ex: { q: R`Why is ultraviolet light used to sterilise drinking water and surgical tools, but microwaves are not?`,
        steps: [R`A UV photon (about 3–10 eV) has enough energy to break bonds in the DNA of bacteria and viruses.`, R`A microwave photon (about 10⁻⁵ eV) is far too weak to break bonds; it only makes water molecules rotate and heat up.`], ans: R`UV photons are energetic enough to damage microbes' DNA` } },
      { tip: R`Exam questions about uses are usually matching exercises. Remember one "signature" use for each band: radio for broadcasting, microwave for radar and ovens, infrared for remote controls and night vision, UV for sterilising, X-rays for bones and gamma rays for cancer treatment.` },
      { ex: { q: R`Name the part of the spectrum used in (a) the remote control of a TV (b) checking bone fractures (c) a car's radar speed trap.`,
        steps: [R`Match each use with the table.`], ans: R`(a) infrared (b) X-rays (c) microwaves` } },
      { check: { q: R`Why do welders wear special goggles?`, ans: R`The welding arc gives off intense ultraviolet light, which can damage the eyes.` } }
    ] }
  ],
  summary: [
    R`Displacement current \(i_d = \varepsilon_0\,d\Phi_E/dt\) makes current continuous through a capacitor; Ampère–Maxwell law \(\oint\vec B\cdot d\vec l = \mu_0(i_c + i_d)\).`,
    R`Accelerated charges radiate EM waves (Hertz 1887, J. C. Bose, Marconi).`,
    R`\(E_y = E_0\sin(kx - \omega t)\), \(B_z = B_0\sin(kx - \omega t)\), in phase; \(E_0/B_0 = c\).`,
    R`\(c = 1/\sqrt{\mu_0\varepsilon_0}\approx3\times10^8\) m/s; in a medium \(v = c/n\), \(n = \sqrt{\mu_r\varepsilon_r}\).`,
    R`Energy density \(\frac12\varepsilon_0E_0^2\) (shared equally); intensity \(\frac12c\varepsilon_0E_0^2\); radiation pressure I/c (absorbed), 2I/c (reflected).`,
    R`Transverse: E ⟂ B ⟂ direction of travel (along E × B); can be polarised.`,
    R`Spectrum (increasing frequency): radio, microwave, infrared, visible (400–700 nm), UV, X-rays, gamma rays.`,
    R`Uses: communication (radio, microwave), heating and sensing (IR), sterilising (UV), imaging (X-rays), radiotherapy (gamma).`,
    R`Inside a charging capacitor with circular plates: B = μ₀ir/(2πR²) for r < R and μ₀i/(2πr) outside.`,
    R`Point source: I = P/(4πr²); I = cε₀E_rms²; photon energy E = hν grows from radio to gamma.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §16.1 Maxwell's Equations and Electromagnetic Waves`, url: 'https://openstax.org/books/university-physics-volume-2/pages/16-1-maxwells-equations-and-electromagnetic-waves' },
    { t: R`OpenStax University Physics Vol. 2, §16.2 Plane Electromagnetic Waves`, url: 'https://openstax.org/books/university-physics-volume-2/pages/16-2-plane-electromagnetic-waves' },
    { t: R`OpenStax University Physics Vol. 2, §16.3 Energy Carried by Electromagnetic Waves`, url: 'https://openstax.org/books/university-physics-volume-2/pages/16-3-energy-carried-by-electromagnetic-waves' },
    { t: R`OpenStax University Physics Vol. 2, §16.4 Momentum and Radiation Pressure`, url: 'https://openstax.org/books/university-physics-volume-2/pages/16-4-momentum-and-radiation-pressure' },
    { t: R`OpenStax University Physics Vol. 2, §16.5 The Electromagnetic Spectrum`, url: 'https://openstax.org/books/university-physics-volume-2/pages/16-5-the-electromagnetic-spectrum' },
    { t: R`Wikipedia: Displacement current`, url: 'https://en.wikipedia.org/wiki/Displacement_current' }
  ]
});
})();
