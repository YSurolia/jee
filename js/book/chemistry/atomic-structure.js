// Book chapter: Atomic Structure. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function axes(cx, cy, r) { return D.line(cx - r, cy, cx + r, cy, { color: 'm', w: 0.8, dash: '3 3' }) + D.line(cx, cy - r, cx, cy + r, { color: 'm', w: 0.8, dash: '3 3' }); }
function orb(kind) {
  var cx = 80, cy = 75, p = [axes(cx, cy, 62)];
  if (kind === 's') p.push(D.circle(cx, cy, 36, { color: 'c', fill: 'soft', w: 1.6 }));
  else if (kind === 'px') p.push(D.lobe(cx, cy, 56, 34, 0), D.lobe(cx, cy, 56, 34, 180, { color: 'o' }));
  else if (kind === 'py') p.push(D.lobe(cx, cy, 56, 34, 90), D.lobe(cx, cy, 56, 34, 270, { color: 'o' }));
  else if (kind === 'dxy') { [45, 225].forEach(function (a) { p.push(D.lobe(cx, cy, 52, 28, a)); }); [135, 315].forEach(function (a) { p.push(D.lobe(cx, cy, 52, 28, a, { color: 'o' })); }); }
  else if (kind === 'dx2') { [0, 180].forEach(function (a) { p.push(D.lobe(cx, cy, 52, 28, a)); }); [90, 270].forEach(function (a) { p.push(D.lobe(cx, cy, 52, 28, a, { color: 'o' })); }); }
  else if (kind === 'dz2') { p.push(D.lobe(cx, cy, 56, 30, 90), D.lobe(cx, cy, 56, 30, 270), D.ellipse(cx, cy, 30, 9, { color: 'o', fill: 'soft', w: 1.6 })); }
  var lab = { s: 's', px: 'p_x', py: 'p_y', dxy: 'd_{xy}', dx2: 'd_{x²−y²}', dz2: 'd_{z²}' }[kind];
  p.push(D.text(150, 14, kind === 'py' || kind === 'dz2' ? (kind === 'dz2' ? 'z' : 'y') : 'y', { size: 10, color: 'm', math: true }), D.text(150, cy + 12, 'x', { size: 10, color: 'm', math: true }));
  return [D.svg(160, 150, p, lab + ' orbital'), lab.replace(/_\{(.*)\}/, '<sub>$1</sub>').replace(/_(.)/, '<sub>$1</sub>')];
}
function boxes(x, y, n, filled, lab) {
  var s = '';
  for (var k = 0; k < n; k++) {
    var bx = x + k * 26; s += D.rect(bx, y, 26, 26, { color: 'k', w: 1.4 });
    var e = filled[k] || 0;
    if (e >= 1) s += D.arrow(bx + (e === 2 ? 8 : 13), y + 22, bx + (e === 2 ? 8 : 13), y + 4, { color: 'b', w: 1.6, head: 5 });
    if (e === 2) s += D.arrow(bx + 18, y + 4, bx + 18, y + 22, { color: 'r', w: 1.6, head: 5 });
  }
  return s + D.text(x + n * 13, y + 40, lab, { size: 11, math: false });
}

// ---------- figures ----------
var figModels = D.row([
  [D.svg(180, 160, [D.circle(90, 80, 62, { color: 'r', fill: 'soft', w: 1.6 }), [[60, 55], [110, 50], [80, 85], [120, 95], [55, 105], [95, 120], [130, 70]].map(function (q) { return D.circle(q[0], q[1], 7, { color: 'b', fill: 'soft', w: 1.2 }) + D.text(q[0], q[1], '−', { size: 11, color: 'b', bold: true, raw: true }); }).join(''),
    D.text(90, 152, 'positive sphere', { size: 10, math: false, color: 'r' })], 'Thomson plum-pudding model'), "Thomson: electrons in a positive 'pudding'"],
  [D.svg(180, 160, [D.ellipse(90, 80, 75, 28, { color: 'm', w: 1 }), D.ellipse(90, 80, 75, 28, { color: 'm', w: 1 }).replace('<ellipse', '<ellipse transform="rotate(60 90 80)"'), D.ellipse(90, 80, 75, 28, { color: 'm', w: 1 }).replace('<ellipse', '<ellipse transform="rotate(-60 90 80)"'),
    D.dot(90, 80, { color: 'r', r: 5 }), D.dot(165, 80, { color: 'b', r: 4 }), D.dot(52, 15, { color: 'b', r: 4 }), D.dot(52, 145, { color: 'b', r: 4 }), D.text(90, 152, 'tiny dense nucleus', { size: 10, math: false, color: 'r' })], 'Rutherford nuclear model'), 'Rutherford: nucleus with electrons around it']
]);

var figWave = D.plot({
  w: 420, h: 180, x: [0, 2.2], y: [-1.4, 1.6], xlabel: 'distance', ylabel: '', mathLabels: false, xticks: [], yticks: [],
  fns: [{ f: function (x) { return Math.sin(2 * Math.PI * x); }, color: 'c' }],
  extra: function (X, Y) { return [D.arrow(X(0.25), Y(1.3), X(1.25), Y(1.3), { color: 'r', w: 1.2, head: 6, both: true, label: 'λ', ly: -9 }), D.arrow(X(1.75), Y(0), X(1.75), Y(-1), { color: 'o', w: 1.2, head: 6, both: true, label: 'amplitude', lx: -40, ly: 0, math: false, size: 11 })]; },
  label: 'Wavelength and amplitude of a wave'
});

var figBB = (function () {
  function g(l, t) { return (1 / Math.pow(l, 5)) / (Math.exp(4.965 / (l * t)) - 1); }
  var k = 1.05 / g(1 / 1.8, 1.8);
  return D.plot({
    w: 400, h: 200, x: [0, 3], y: [0, 1.15], xlabel: 'λ', ylabel: 'intensity', mathLabels: false, xticks: [], yticks: [],
    fns: [[1.8, 'b', 'hotter (white-hot)', 0.75, 1.02], [1.4, 'o', 'medium', 0.95, 0.36], [1.0, 'r', 'cooler (red-hot)', 1.4, 0.12]].map(function (t) { return { f: function (l) { return k * g(l, t[0]); }, from: 0.08, to: 3, color: t[1], label: t[2], lx: t[3], ly: t[4], math: false }; }),
    label: 'Black-body radiation at three temperatures'
  });
})();

var figPsi = D.row([
  [D.plot({ w: 220, h: 170, x: [0, 8], y: [-0.4, 1.1], xlabel: 'r', ylabel: 'ψ', xticks: [[2, '']], yticks: [], fns: [{ f: function (r) { return Math.exp(-r); }, color: 'c', label: '1s', lx: 0.8, ly: 0.7 }, { f: function (r) { return 0.6 * (2 - r) * Math.exp(-r / 2) / 1.2; }, color: 'o', label: '2s', lx: 3.6, ly: -0.3 }], label: 'psi against r for 1s and 2s' }), 'ψ: 2s changes sign (a node)'],
  [D.plot({ w: 220, h: 170, x: [0, 8], y: [0, 1.1], xlabel: 'r', ylabel: 'ψ²', xticks: [], yticks: [], fns: [{ f: function (r) { return Math.exp(-2 * r); }, color: 'c', label: '1s', lx: 0.5, ly: 0.85 }, { f: function (r) { var v = (2 - r) * Math.exp(-r / 2) / 2; return v * v; }, color: 'o', label: '2s', lx: 2.8, ly: 0.2 }], label: 'probability density against r' }), 'ψ²: probability density']
]);

var figRadial = (function () {
  function norm(f, h) { var m = 0; for (var r = 0.01; r < 20; r += 0.01) m = Math.max(m, f(r)); return function (r) { return h * f(r) / m; }; }
  var f1 = norm(function (r) { return r * r * Math.exp(-2 * r); }, 1), f2 = norm(function (r) { var v = (2 - r) * Math.exp(-r / 2); return r * r * v * v; }, 0.55), f3 = norm(function (r) { var v = r * Math.exp(-r / 2); return r * r * v * v; }, 0.6);
  return D.plot({
    w: 420, h: 200, x: [0, 14], y: [0, 1.1], xlabel: 'r (in units of a₀)', ylabel: '4πr²ψ²', mathLabels: false, xticks: [[1, '1'], [5.2, '5.2']], yticks: [],
    fns: [{ f: f1, color: 'c', label: '1s', lx: 1.4, ly: 1.0, math: false }, { f: f2, color: 'o', label: '2s', lx: 6.4, ly: 0.58, math: false }, { f: f3, color: 'g', dash: '5 4', label: '2p', lx: 3.0, ly: 0.66, math: false }],
    label: 'Radial probability distribution for 1s, 2s and 2p'
  });
})();

var figOrbs = D.row([orb('s'), orb('px'), orb('py'), orb('dxy'), orb('dx2'), orb('dz2')]);

var figAufbau = (function () {
  var p = [], rows = [['1s'], ['2s', '2p'], ['3s', '3p', '3d'], ['4s', '4p', '4d', '4f'], ['5s', '5p', '5d', '5f'], ['6s', '6p', '6d'], ['7s', '7p']];
  rows.forEach(function (r, i) { r.forEach(function (o, j) { p.push(D.text(40 + j * 50, 20 + i * 26, o, { size: 13, math: false, bold: true })); }); });
  for (var sm = 1; sm <= 8; sm++) { var lmax = Math.min(3, Math.floor((sm - 1) / 2)), ntop = sm - lmax, nbot = Math.min(sm, 7), lbot = sm - nbot; if (lbot > lmax) continue;
    p.push(D.arrow(40 + lmax * 50 + 18, 20 + (ntop - 1) * 26 - 9, 40 + lbot * 50 - 16, 20 + (nbot - 1) * 26 + 9, { color: 'r', w: 1.1, head: 6 })); }
  p.push(D.text(320, 60, '1s < 2s < 2p < 3s < 3p < 4s', { size: 12, math: false, anchor: 'middle', color: 'm' }), D.text(320, 80, '< 3d < 4p < 5s < 4d < 5p', { size: 12, math: false, color: 'm' }), D.text(320, 100, '< 6s < 4f < 5d < 6p < 7s …', { size: 12, math: false, color: 'm' }));
  p.push(D.text(320, 140, 'lower (n + l) fills first;', { size: 11, math: false, color: 'r' }), D.text(320, 156, 'for equal (n + l), lower n first', { size: 11, math: false, color: 'r' }));
  return D.svg(440, 200, p, 'Order of filling orbitals (Aufbau principle)');
})();

var figHund = D.svg(440, 150, [
  D.text(20, 20, 'N (1s² 2s² 2p³):', { size: 12, math: false, anchor: 'start' }), boxes(140, 6, 1, [2], '1s'), boxes(190, 6, 1, [2], '2s'), boxes(240, 6, 3, [1, 1, 1], '2p'),
  D.text(345, 20, '✓ Hund', { size: 12, math: false, color: 'g', anchor: 'start' }),
  D.text(20, 95, 'not:', { size: 12, math: false, anchor: 'start' }), boxes(240, 80, 3, [2, 1, 0], '2p'), D.text(345, 94, '✗ pairing before', { size: 12, math: false, color: 'r', anchor: 'start' }), D.text(345, 110, 'all singly filled', { size: 12, math: false, color: 'r', anchor: 'start' })
], "Hund's rule: electrons occupy equal-energy orbitals singly, with parallel spins, before pairing");

// ---------- chapter text ----------
JEE.book('chemistry', 'atomic-structure', {
  intro: [
    R`Why do elements behave so differently? Why is sodium violently reactive while neon does nothing? The answers lie in how electrons are arranged inside atoms. This chapter traces how scientists discovered the parts of the atom and how quantum mechanics describes where electrons are.`,
    R`We cover subatomic particles and early models, electromagnetic radiation and Planck's quantum theory, the hydrogen spectrum and Bohr's model, the dual nature of matter and the uncertainty principle, the quantum mechanical model with orbitals and quantum numbers, the shapes and nodes of orbitals, and the rules for writing electronic configurations.`
  ],
  sections: [
    { h: R`Discovery of the electron, proton and neutron`, t: [0], blocks: [
      { points: [
        R`<b>Electron</b> (J. J. Thomson, 1897): cathode rays in discharge tubes are streams of negative particles, the same whatever the gas or electrode. Thomson measured their charge-to-mass ratio, \(e/m = 1.76\times10^{11}\) C/kg. Millikan's oil-drop experiment (1909) found the charge, \(e = 1.6\times10^{-19}\) C, giving \(m_e = 9.1\times10^{-31}\) kg.`,
        R`<b>Proton</b> (Goldstein's canal rays, 1886; Rutherford): positive rays whose e/m depends on the gas; the lightest, from hydrogen, is the proton, 1836 times heavier than the electron.`,
        R`<b>Neutron</b> (Chadwick, 1932): neutral particles knocked out when beryllium is bombarded with alpha particles, with mass slightly greater than the proton's.`
      ] },
      { table: { head: [R`Particle`, R`Charge (C)`, R`Relative charge`, R`Mass (kg)`, R`Mass (u)`], rows: [
        [R`Electron`, R`−1.602 × 10⁻¹⁹`, R`−1`, R`9.109 × 10⁻³¹`, R`0.00055`], [R`Proton`, R`+1.602 × 10⁻¹⁹`, R`+1`, R`1.673 × 10⁻²⁷`, R`1.00727`], [R`Neutron`, R`0`, R`0`, R`1.675 × 10⁻²⁷`, R`1.00867`]] } },
      { check: { q: R`Why were cathode rays concluded to be a universal constituent of matter?`, ans: R`Their e/m was the same whatever gas or electrode metal was used.` } }
    ] },

    { h: R`Thomson's and Rutherford's models`, t: [0], blocks: [
      { fig: figModels, cap: R`Thomson pictured electrons embedded in a uniform sphere of positive charge; Rutherford's alpha-scattering experiment showed a tiny dense nucleus instead.` },
      R`<b>Thomson's model</b> (1898): the atom is a uniform sphere of positive charge with electrons embedded in it, like seeds in a watermelon. It explained neutrality but not Rutherford's results.`,
      R`<b>Rutherford's nuclear model</b> (1911): alpha particles fired at gold foil mostly passed through, but a few bounced back. So the positive charge and almost all the mass are concentrated in a tiny <b>nucleus</b> (radius about 10⁻¹⁵ m, against 10⁻¹⁰ m for the atom), with electrons moving round it. (The experiment is described in detail in the Physics chapter on Atoms and Nuclei.)`,
      R`<b>Drawbacks:</b> by classical electromagnetism, an orbiting (accelerating) electron should radiate energy and spiral into the nucleus, so atoms would be unstable. The model also says nothing about the arrangement of electrons or why atoms give line spectra.`,
      { check: { q: R`What did the large-angle scattering of a few alpha particles show?`, ans: R`That positive charge and mass are concentrated in a tiny, dense nucleus.` } }
    ] },

    { h: R`Atomic number, mass number, isotopes and isobars`, t: [0], blocks: [
      R`The <b>atomic number</b> Z = number of protons (= number of electrons in a neutral atom). The <b>mass number</b> A = protons + neutrons. An atom is written \(^A_Z\text{X}\); neutrons N = A − Z.`,
      { points: [R`<b>Isotopes:</b> same Z, different A: ¹H, ²H (deuterium), ³H (tritium); ¹²C, ¹³C, ¹⁴C. Same chemical properties (same electrons).`, R`<b>Isobars:</b> same A, different Z: ¹⁴C and ¹⁴N; ⁴⁰Ar and ⁴⁰Ca.`, R`<b>Isotones:</b> same number of neutrons: ¹⁴C and ¹⁶O (both N = 8).`, R`<b>Isoelectronic</b> species: same number of electrons: N³⁻, O²⁻, F⁻, Ne, Na⁺, Mg²⁺ (all 10).`] },
      { ex: { q: R`How many protons, neutrons and electrons are in \(^{35}_{17}\text{Cl}^-\)?`,
        steps: [R`Z = 17 protons; N = 35 − 17 = 18; electrons = 17 + 1.`], ans: R`17 p, 18 n, 18 e⁻` } },
      { check: { q: R`Which of Na⁺, Mg²⁺, Cl⁻ and Ne are isoelectronic with each other?`, ans: R`Na⁺, Mg²⁺ and Ne (10 electrons each); Cl⁻ has 18.` } }
    ] },

    { h: R`Electromagnetic radiation`, t: [1], blocks: [
      R`Light and other radiations are electromagnetic waves: oscillating electric and magnetic fields travelling at \(c = 3.0\times10^8\) m/s in vacuum. A wave is described by its <b>wavelength</b> λ, <b>frequency</b> ν, and <b>wavenumber</b> \(\bar\nu = 1/\lambda\) (number of waves per unit length, often in cm⁻¹): \[c = \nu\lambda\]`,
      { fig: figWave, cap: R`Wavelength is the distance between successive crests; amplitude is the height of a crest.` },
      R`The <b>electromagnetic spectrum</b> runs from radio waves (long λ, low ν) through microwaves, infrared, visible (400–750 nm), ultraviolet and X-rays to gamma rays (short λ, high ν).`,
      { ex: { q: R`Find the frequency and wavenumber of yellow light of wavelength 580 nm.`,
        steps: [R`\(\nu = c/\lambda = 3\times10^8/580\times10^{-9}\).`, R`\(\bar\nu = 1/\lambda = 1/(580\times10^{-7}\text{ cm})\).`], ans: R`≈ 5.17 × 10¹⁴ Hz; ≈ 1.72 × 10⁴ cm⁻¹` } },
      { check: { q: R`Which has the higher frequency, X-rays or radio waves?`, ans: R`X-rays.` } }
    ] },

    { h: R`Planck's quantum theory`, t: [1], blocks: [
      R`The wave picture could not explain <b>black-body radiation</b>: the colour of a hot object depends on its temperature, and the intensity curve peaks at a wavelength that shifts to shorter values as it gets hotter (red-hot to white-hot).`,
      { fig: figBB, cap: R`As a black body gets hotter, it emits more radiation and its peak moves to shorter wavelengths.` },
      R`In 1900 Max Planck explained it by proposing that radiation is emitted or absorbed not continuously but in small packets, <b>quanta</b>, each of energy \[E = h\nu,\qquad h = 6.626\times10^{-34}\text{ J s}\] (Planck's constant). Energy can only be exchanged in whole numbers of quanta: E = nhν. Einstein called a quantum of light a <b>photon</b>.`,
      { ex: { q: R`Find the energy of one photon and of one mole of photons of wavelength 500 nm.`,
        steps: [R`\(E = \dfrac{hc}{\lambda} = \dfrac{6.626\times10^{-34}\times3\times10^8}{5\times10^{-7}} = 3.98\times10^{-19}\) J.`, R`Per mole: × 6.022 × 10²³.`], ans: R`3.98 × 10⁻¹⁹ J; ≈ 239 kJ/mol` } },
      { check: { q: R`Does a photon of red light or violet light carry more energy?`, ans: R`Violet (higher frequency).` } }
    ] },

    { h: R`The photoelectric effect`, t: [1], blocks: [
      R`When light of high enough frequency strikes a metal surface (e.g. potassium, caesium), electrons are ejected immediately. Below a <b>threshold frequency</b> ν₀, no electrons come out however bright the light; above it, their maximum kinetic energy grows with frequency, not intensity. Einstein explained this with photons: \[h\nu = h\nu_0 + \frac12m_ev^2\] where \(h\nu_0 = W_0\) is the work function. Brighter light means more photons and more electrons, not faster ones.`,
      { ex: { q: R`Light of frequency 1.0 × 10¹⁵ Hz falls on a metal with threshold frequency 7.0 × 10¹⁴ Hz. Find the maximum kinetic energy of the photoelectrons.`,
        steps: [R`\(K = h(\nu - \nu_0) = 6.626\times10^{-34}\times3\times10^{14}\).`], ans: R`≈ 1.99 × 10⁻¹⁹ J (≈ 1.24 eV)` } },
      { check: { q: R`Doubling the intensity of light (above threshold) does what to the kinetic energy of photoelectrons?`, ans: R`Nothing; it doubles their number.` } }
    ] },

    { h: R`Emission and absorption spectra`, t: [2], blocks: [
      R`Passing white light through a prism gives a <b>continuous spectrum</b>. When atoms are excited (heated or in an electric discharge), they emit light only at certain wavelengths: a <b>line emission spectrum</b> of bright lines on a dark background. When white light passes through a cool gas, those same wavelengths are absorbed: an <b>absorption spectrum</b> of dark lines.`,
      R`Each element has its own unique set of lines, like a fingerprint. Helium was discovered in the Sun's spectrum before it was found on Earth, and the colours of fireworks and flame tests (sodium yellow, copper green, lithium red) come from line spectra.`,
      { check: { q: R`Why do atoms give line spectra rather than continuous spectra?`, ans: R`Electrons can only have certain energies in atoms, so only certain energy differences (photon energies) are possible.` } }
    ] },

    { h: R`The hydrogen spectrum`, t: [2], blocks: [
      R`Hydrogen's lines fall into series. Rydberg found that all of them fit \[\bar\nu = \frac1\lambda = R_H\left(\frac1{n_1^2} - \frac1{n_2^2}\right),\qquad R_H = 109\,677\text{ cm}^{-1}\] with \(n_2 > n_1\).`,
      { table: { head: [R`Series`, R`n₁`, R`n₂`, R`Region`], rows: [
        [R`Lyman`, R`1`, R`2, 3, …`, R`ultraviolet`], [R`Balmer`, R`2`, R`3, 4, …`, R`visible`], [R`Paschen`, R`3`, R`4, 5, …`, R`infrared`], [R`Brackett`, R`4`, R`5, 6, …`, R`infrared`], [R`Pfund`, R`5`, R`6, 7, …`, R`infrared`]] } },
      { ex: { q: R`Find the wavelength of the Balmer line for n₂ = 4.`,
        steps: [R`\(\bar\nu = 109\,677\left(\frac14 - \frac1{16}\right) = 20\,564\) cm⁻¹.`], ans: R`λ ≈ 486 nm (blue-green)` } },
      { tip: R`For hydrogen-like ions (He⁺, Li²⁺) multiply by Z²: \(\bar\nu = R_HZ^2\left(\frac1{n_1^2} - \frac1{n_2^2}\right)\). The maximum number of lines from level n to the ground state is n(n − 1)/2.` },
      { check: { q: R`In which region does the Lyman series lie?`, ans: R`Ultraviolet.` } }
    ] },

    { h: R`Bohr's model of the hydrogen atom`, t: [3], blocks: [
      R`In 1913 Niels Bohr applied quantum ideas to the hydrogen atom:`,
      { points: [R`The electron moves round the nucleus in circular orbits of fixed energy (<b>stationary states</b> or energy levels) without radiating.`, R`The allowed orbits are those for which the angular momentum is quantised: \(mvr = n\dfrac{h}{2\pi}\), n = 1, 2, 3, …`, R`The electron emits or absorbs radiation only when it jumps between orbits: \(\Delta E = E_2 - E_1 = h\nu\).`] },
      { derive: R`Energies and radii`, steps: [
        R`Electrostatic attraction provides the centripetal force; combining with the quantisation rule gives the radius of the nth orbit: \(r_n = 52.9\dfrac{n^2}{Z}\) pm (52.9 pm = 0.529 Å is the <b>Bohr radius</b>).`,
        R`The energy is \(E_n = -2.18\times10^{-18}\dfrac{Z^2}{n^2}\) J \(= -13.6\dfrac{Z^2}{n^2}\) eV. The speed is \(v_n = 2.18\times10^6\dfrac Zn\) m/s.`,
        R`Energy is zero for a free electron (n = ∞); bound states have negative energy. Higher orbits are less negative, i.e. higher in energy.`
      ] },
      { ex: { q: R`Find the energy needed to ionise a ground-state He⁺ ion, and the radius of its first orbit.`,
        steps: [R`Z = 2: \(E_1 = -13.6\times4 = -54.4\) eV, so the ionisation energy is 54.4 eV.`, R`\(r_1 = 52.9\times\dfrac12\) pm.`], ans: R`54.4 eV; 26.45 pm` } },
      { check: { q: R`What is the energy of the electron in the n = 2 level of hydrogen?`, ans: R`−13.6/4 = −3.4 eV.` } }
    ] },

    { h: R`Explaining the hydrogen spectrum; limitations of Bohr's model`, t: [3], blocks: [
      R`When the electron drops from level \(n_2\) to \(n_1\), it emits a photon with \[\Delta E = 2.18\times10^{-18}\left(\frac1{n_1^2} - \frac1{n_2^2}\right)\text{ J}\] Dividing by hc gives exactly Rydberg's formula, with \(R_H = 2.18\times10^{-18}/hc = 109\,677\) cm⁻¹. This explanation of the hydrogen spectrum was Bohr's great success.`,
      R`<b>Limitations:</b>`,
      { points: [R`It fails for atoms with more than one electron.`, R`It cannot explain the fine structure (closely spaced lines) of the hydrogen spectrum, nor the splitting of lines in magnetic fields (Zeeman effect) and electric fields (Stark effect).`, R`It contradicts the dual nature of electrons and the uncertainty principle: it assumes the electron has a definite path (orbit) with definite position and momentum.`, R`It cannot explain the shapes of molecules or chemical bonding.`] },
      { check: { q: R`Why can Bohr's model not be correct according to Heisenberg?`, ans: R`It gives the electron a precisely defined orbit (exact position and momentum together), which the uncertainty principle forbids.` } }
    ] },

    { h: R`Dual nature of matter`, t: [4], blocks: [
      R`In 1924 de Broglie proposed that, just as light has particle properties, particles such as electrons have wave properties, with wavelength \[\lambda = \frac hp = \frac h{mv}\] This was confirmed by electron diffraction (Davisson and Germer, 1927). The electron microscope uses electron waves to magnify objects about 15 million times.`,
      { ex: { q: R`Find the de Broglie wavelength of an electron moving at 1.0 × 10⁶ m/s.`,
        steps: [R`\(\lambda = \dfrac{6.626\times10^{-34}}{9.11\times10^{-31}\times10^6}\).`], ans: R`≈ 7.3 × 10⁻¹⁰ m = 0.73 nm` } },
      R`de Broglie's idea also explains Bohr's quantisation: an electron wave fits round an orbit only if the circumference is a whole number of wavelengths, \(2\pi r = n\lambda\), which gives \(mvr = nh/2\pi\).`,
      { check: { q: R`Why don't we notice the wave nature of a moving car?`, ans: R`Its mass is so large that its wavelength (≈ 10⁻³⁸ m) is far too small to detect.` } }
    ] },

    { h: R`Heisenberg's uncertainty principle`, t: [5], blocks: [
      R`<b>Heisenberg's uncertainty principle</b> (1927): it is impossible to determine simultaneously the exact position and exact momentum (or velocity) of a microscopic particle such as an electron: \[\Delta x\cdot\Delta p\geq\frac{h}{4\pi}\quad\text{or}\quad\Delta x\cdot\Delta v\geq\frac{h}{4\pi m}\]`,
      R`<b>Significance:</b> to "see" an electron we must hit it with light of very short wavelength, whose photons are energetic enough to change its momentum. So electrons cannot have definite orbits; we can only speak of the <b>probability</b> of finding an electron in a region. For everyday objects the uncertainties are negligible.`,
      { ex: { q: R`An electron's position is known within 0.1 nm (about the size of an atom). Find the minimum uncertainty in its velocity.`,
        steps: [R`\(\Delta v = \dfrac{h}{4\pi m\Delta x} = \dfrac{6.626\times10^{-34}}{4\pi\times9.11\times10^{-31}\times10^{-10}}\).`], ans: R`≈ 5.8 × 10⁵ m/s, comparable to its speed in the atom: so its orbit cannot be defined` } },
      { check: { q: R`Does the uncertainty principle matter for a 0.1 kg ball located within 1 mm?`, ans: R`No: Δv ≥ h/(4πmΔx) ≈ 5 × 10⁻³¹ m/s, utterly negligible.` } }
    ] },

    { h: R`The quantum mechanical model of the atom`, t: [6], blocks: [
      R`<b>Quantum mechanics</b> (Schrödinger and Heisenberg, 1926) takes the wave nature of electrons into account. The behaviour of an electron is described by a <b>wave function</b> ψ, found by solving the <b>Schrödinger equation</b>, \(\hat H\psi = E\psi\), where \(\hat H\) is the Hamiltonian (total energy) operator.`,
      { points: [
        R`The energy of electrons in atoms is quantised: only certain solutions ψ (with certain energies) are allowed.`,
        R`Each allowed one-electron wave function is an <b>atomic orbital</b>. An electron in an atom occupies orbitals.`,
        R`ψ itself has no physical meaning, but \(|\psi|^2\) gives the <b>probability density</b> of finding the electron at a point. An orbital is the region where the electron is most likely to be found (e.g. 90% of the time).`,
        R`Each orbital is labelled by three quantum numbers (n, l, m_l), which fix its energy, shape and orientation.`
      ] },
      { check: { q: R`What is the difference between an orbit and an orbital?`, ans: R`An orbit is a definite circular path (Bohr), which is not allowed by the uncertainty principle; an orbital is a region of space where the probability of finding the electron is high, described by a wave function.` } }
    ] },

    { h: R`Variation of ψ and ψ² with distance`, t: [8], blocks: [
      { fig: figPsi, cap: R`For 1s, ψ and ψ² fall steadily from the nucleus. For 2s, ψ changes sign at one distance: there ψ² = 0, a radial node.` },
      R`The probability density ψ² is largest at the nucleus for s orbitals. But the probability of finding the electron in a thin spherical shell of radius r and thickness dr is \(4\pi r^2\psi^2\,dr\): the <b>radial probability distribution</b>. Because the shell's volume grows as r², this is zero at the nucleus.`,
      { fig: figRadial, cap: R`Radial probability: for 1s it peaks at r = a₀ = 52.9 pm (Bohr's radius!); 2s has two maxima separated by a node; 2p has one maximum.` },
      { check: { q: R`For a 1s electron, where is the probability density greatest, and where is the radial probability greatest?`, ans: R`Probability density: at the nucleus. Radial probability: at r = 52.9 pm.` } }
    ] },

    { h: R`Energies of orbitals`, t: [6], blocks: [
      R`In the <b>hydrogen atom</b> (one electron), the energy depends only on n: 2s and 2p have the same energy (they are <b>degenerate</b>), as do 3s, 3p and 3d: 1s < 2s = 2p < 3s = 3p = 3d < 4s = …`,
      R`In <b>multi-electron atoms</b>, electrons repel each other and inner electrons <b>shield</b> outer ones from the full nuclear charge. The effective nuclear charge \(Z_{eff}\) felt by an electron depends on how close it gets to the nucleus (its <b>penetration</b>): s penetrates most, then p, then d, then f. So for the same n, energy order is s < p < d < f, and the energies depend on both n and l. This even makes 4s lower than 3d in potassium and calcium.`,
      { check: { q: R`Are 3s and 3p orbitals degenerate in sodium?`, ans: R`No: 3s penetrates more, feels a larger Z_eff and is lower in energy. They are degenerate only in hydrogen.` } }
    ] },

    { h: R`Quantum numbers`, t: [6], blocks: [
      R`Each electron in an atom is described by four quantum numbers:`,
      { table: { head: [R`Quantum number`, R`Values`, R`Determines`], rows: [
        [R`Principal, n`, R`1, 2, 3, … (shells K, L, M, N…)`, R`size and energy of the orbital; a shell holds 2n² electrons and has n² orbitals`],
        [R`Azimuthal (angular momentum), l`, R`0, 1, …, n − 1 (s, p, d, f)`, R`shape of the orbital (subshell); orbital angular momentum \(\sqrt{l(l + 1)}\,\dfrac{h}{2\pi}\)`],
        [R`Magnetic, m_l`, R`−l, …, 0, …, +l (2l + 1 values)`, R`orientation of the orbital in space`],
        [R`Spin, m_s`, R`+½ or −½`, R`spin of the electron (two orientations)`]] } },
      { points: [R`Subshells: n = 1: 1s; n = 2: 2s, 2p; n = 3: 3s, 3p, 3d; n = 4: 4s, 4p, 4d, 4f.`, R`Number of orbitals in a subshell = 2l + 1: s 1, p 3, d 5, f 7.`, R`The spin quantum number came from experiments (Stern–Gerlach, 1922): an electron behaves like a tiny spinning magnet that can point "up" or "down" in a field.`] },
      { ex: { q: R`Which sets of quantum numbers are not allowed? (a) n = 2, l = 2, m = 0 (b) n = 3, l = 1, m = −1 (c) n = 1, l = 0, m = 1`,
        steps: [R`(a) l must be less than n: not allowed. (b) allowed (a 3p orbital). (c) for l = 0, m must be 0: not allowed.`], ans: R`(a) and (c) are not allowed` } },
      { check: { q: R`How many electrons can have n = 3?`, ans: R`2n² = 18.` } }
    ] },

    { h: R`Shapes of s, p and d orbitals`, t: [7], blocks: [
      { fig: figOrbs, cap: R`Boundary surfaces of s, p and d orbitals. Colours show the sign (phase) of ψ in each lobe; p_z (not shown) points along the z axis.` },
      { points: [
        R`<b>s orbitals</b> (l = 0) are spherical. Size grows with n: 1s < 2s < 3s.`,
        R`<b>p orbitals</b> (l = 1) are dumb-bell shaped, with two lobes on opposite sides of the nucleus and a nodal plane between them. The three (p_x, p_y, p_z) point along the three axes and are degenerate.`,
        R`<b>d orbitals</b> (l = 2): five orbitals. d_xy, d_yz and d_zx have four lobes between the axes; d_{x²−y²} has four lobes along the x and y axes; d_{z²} has two lobes along z and a doughnut ring in the xy plane. All five are degenerate in a free atom.`
      ] },
      { check: { q: R`Which d orbital has lobes along the x and y axes?`, ans: R`\(d_{x^2 - y^2}\).` } }
    ] },

    { h: R`Radial and angular nodes`, t: [8], blocks: [
      R`A <b>node</b> is a region where the probability of finding the electron is zero (ψ = 0).`,
      { points: [R`<b>Radial nodes</b> (spherical surfaces): n − l − 1.`, R`<b>Angular nodes</b> (planes or cones through the nucleus): l.`, R`<b>Total nodes:</b> n − 1.`] },
      { table: { head: [R`Orbital`, R`Radial nodes`, R`Angular nodes`], rows: [[R`1s`, R`0`, R`0`], [R`2s`, R`1`, R`0`], [R`2p`, R`0`, R`1`], [R`3s`, R`2`, R`0`], [R`3p`, R`1`, R`1`], [R`3d`, R`0`, R`2`], [R`4f`, R`0`, R`3`]] } },
      { ex: { q: R`How many radial and angular nodes does a 4p orbital have?`,
        steps: [R`Radial: n − l − 1 = 4 − 1 − 1. Angular: l = 1.`], ans: R`2 radial, 1 angular` } },
      { check: { q: R`How many total nodes does a 3d orbital have?`, ans: R`n − 1 = 2 (both angular).` } }
    ] },

    { h: R`Rules for filling electrons: the Aufbau principle`, t: [9], blocks: [
      R`<b>Aufbau ("building-up") principle:</b> in the ground state, electrons fill orbitals in order of increasing energy. The order follows the <b>(n + l) rule</b>: the subshell with the lower n + l fills first; if two have the same n + l, the one with lower n fills first.`,
      { fig: figAufbau, cap: R`Follow the diagonal arrows from top to bottom to get the filling order.` },
      { ex: { q: R`Which fills first: 4s or 3d? 4p or 5s?`,
        steps: [R`4s: n + l = 4; 3d: 3 + 2 = 5. So 4s first.`, R`4p: 4 + 1 = 5; 5s: 5 + 0 = 5; equal, so the lower n, 4p, first.`], ans: R`4s before 3d; 4p before 5s` } },
      { check: { q: R`Arrange 3d, 4s, 4p and 5s in the order they fill.`, ans: R`4s, 3d, 4p, 5s.` } }
    ] },

    { h: R`Pauli's exclusion principle and Hund's rule`, t: [9], blocks: [
      R`<b>Pauli's exclusion principle:</b> no two electrons in an atom can have the same set of all four quantum numbers. So an orbital can hold at most two electrons, and they must have opposite spins. Hence a subshell holds 2(2l + 1) electrons: s 2, p 6, d 10, f 14.`,
      R`<b>Hund's rule of maximum multiplicity:</b> electrons fill orbitals of equal energy (a degenerate subshell) singly, with parallel spins, before any pairing occurs. Pairing requires extra energy because paired electrons repel more.`,
      { fig: figHund, cap: R`In nitrogen, the three 2p electrons occupy the three 2p orbitals singly with parallel spins.` },
      { ex: { q: R`How many unpaired electrons are there in O (Z = 8) and Fe (Z = 26)?`,
        steps: [R`O: 1s² 2s² 2p⁴; four electrons in three p orbitals give one pair and two singles.`, R`Fe: [Ar] 3d⁶ 4s²; six d electrons in five d orbitals give one pair and four singles.`], ans: R`O: 2; Fe: 4` } },
      { check: { q: R`What is the maximum number of electrons in an f subshell?`, ans: R`14.` } }
    ] },

    { h: R`Electronic configurations of atoms`, t: [10], blocks: [
      R`The <b>electronic configuration</b> lists the occupied subshells with the number of electrons in each, e.g. Na: 1s² 2s² 2p⁶ 3s¹, written in short form as [Ne] 3s¹ using the previous noble gas core.`,
      { table: { head: [R`Element`, R`Z`, R`Configuration`], rows: [
        [R`C`, R`6`, R`1s² 2s² 2p²`], [R`O`, R`8`, R`1s² 2s² 2p⁴`], [R`Na`, R`11`, R`[Ne] 3s¹`], [R`Cl`, R`17`, R`[Ne] 3s² 3p⁵`], [R`K`, R`19`, R`[Ar] 4s¹`], [R`Cr`, R`24`, R`[Ar] 3d⁵ 4s¹ (not 3d⁴ 4s²)`], [R`Fe`, R`26`, R`[Ar] 3d⁶ 4s²`], [R`Cu`, R`29`, R`[Ar] 3d¹⁰ 4s¹ (not 3d⁹ 4s²)`], [R`Zn`, R`30`, R`[Ar] 3d¹⁰ 4s²`]] } },
      R`<b>Ions:</b> for transition metals, the 4s electrons are removed before the 3d: Fe²⁺ is [Ar] 3d⁶, Fe³⁺ is [Ar] 3d⁵.`,
      { h3: R`Extra stability of half-filled and completely filled subshells` },
      R`Half-filled (p³, d⁵, f⁷) and completely filled (p⁶, d¹⁰, f¹⁴) subshells are especially stable, because of their <b>symmetrical distribution</b> of electrons and their large <b>exchange energy</b> (stabilisation from electrons with parallel spins exchanging places; the more such pairs, the greater the stability). This explains why Cr is 3d⁵ 4s¹ and Cu is 3d¹⁰ 4s¹, and why Fe³⁺ (d⁵) is more stable than Fe²⁺ (d⁶).`,
      { ex: { q: R`Write the configurations of Mn (Z = 25) and Mn²⁺.`,
        steps: [R`Mn: [Ar] 3d⁵ 4s².`, R`Mn²⁺ loses the two 4s electrons.`], ans: R`[Ar] 3d⁵ 4s²; Mn²⁺ = [Ar] 3d⁵ (half-filled, stable)` } },
      { check: { q: R`How many exchange pairs are there in a d⁵ configuration?`, ans: R`5C2 = 10 (every pair of the five parallel electrons).` } }
    ] }
  ],
  summary: [
    R`Electron (Thomson, e/m; Millikan, e), proton, neutron (Chadwick). Thomson's model; Rutherford's nuclear model and its drawbacks.`,
    R`Z = protons, A = protons + neutrons; isotopes, isobars, isotones, isoelectronic species.`,
    R`c = νλ, \(\bar\nu = 1/\lambda\); Planck: E = hν; photoelectric: hν = hν₀ + ½mv².`,
    R`Hydrogen spectrum: \(\bar\nu = R_HZ^2(1/n_1^2 - 1/n_2^2)\), R_H = 109 677 cm⁻¹; Lyman (UV), Balmer (visible), Paschen, Brackett, Pfund (IR).`,
    R`Bohr: mvr = nh/2π; \(r_n = 52.9\,n^2/Z\) pm, \(E_n = -13.6\,Z^2/n^2\) eV; fails for multi-electron atoms, fine structure, uncertainty.`,
    R`de Broglie λ = h/mv; Heisenberg Δx·Δp ≥ h/4π.`,
    R`Quantum mechanics: ψ (orbital), ψ² = probability density, radial probability 4πr²ψ²; energies depend on n only in H, on n and l in multi-electron atoms.`,
    R`Quantum numbers n, l (0…n−1), m_l (−l…+l), m_s (±½); orbitals per subshell 2l + 1.`,
    R`Shapes: s sphere, p dumb-bell, d four-lobed (d_z² with ring). Nodes: radial n − l − 1, angular l, total n − 1.`,
    R`Aufbau (n + l rule), Pauli (max 2 per orbital, opposite spins), Hund (singly first, parallel spins). Cr 3d⁵4s¹, Cu 3d¹⁰4s¹: half-filled and filled subshells are extra stable (symmetry, exchange energy).`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §6.1 Electromagnetic Energy`, url: 'https://openstax.org/books/chemistry-2e/pages/6-1-electromagnetic-energy' },
    { t: R`OpenStax Chemistry 2e, §6.2 The Bohr Model`, url: 'https://openstax.org/books/chemistry-2e/pages/6-2-the-bohr-model' },
    { t: R`OpenStax Chemistry 2e, §6.3 Development of Quantum Theory`, url: 'https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory' },
    { t: R`OpenStax Chemistry 2e, §6.4 Electronic Structure of Atoms (Electron Configurations)`, url: 'https://openstax.org/books/chemistry-2e/pages/6-4-electronic-structure-of-atoms-electron-configurations' },
    { t: R`Wikipedia: Atomic orbital`, url: 'https://en.wikipedia.org/wiki/Atomic_orbital' },
    { t: R`Wikipedia: Aufbau principle`, url: 'https://en.wikipedia.org/wiki/Aufbau_principle' }
  ]
});
})();
