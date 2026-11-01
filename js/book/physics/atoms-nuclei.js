// Book chapter: Atoms and Nuclei. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figGM = D.svg(420, 210, [
  D.rect(20, 85, 50, 40, { color: 'k', fill: 'm', w: 1.4 }), D.dot(60, 105, { color: 'r', r: 4 }), D.text(45, 140, 'α source in lead', { size: 11, math: false }),
  D.ray([[70, 105], [200, 105]], { color: 'r', w: 2 }), D.line(200, 50, 200, 160, { color: 'o', w: 3 }), D.text(200, 176, 'gold foil', { size: 11, color: 'o', math: false }),
  D.path('M200 12 A 93 93 0 0 1 200 198', { color: 'm', w: 1, dash: '4 3' }),
  D.ray([[200, 105], [290, 105]], { color: 'r', w: 1.4 }), D.ray([[200, 105], [284.6, 74.2]], { color: 'r', w: 1.2 }), D.ray([[200, 105], [245, 27]], { color: 'r', w: 1.2 }), D.ray([[200, 105], [122, 60]], { color: 'r', w: 1.2 }),
  D.rect(268, 140, 32, 22, { color: 'g', fill: 'soft', w: 1.4 }), D.text(330, 180, 'ZnS screen + microscope', { size: 11, color: 'g', math: false }), D.angle(200, 105, 40, -30, 0, 'θ', { lr: 10 }),
  D.text(350, 40, 'detector rotates', { size: 11, color: 'm', math: false }), D.text(350, 54, 'round the foil', { size: 11, color: 'm', math: false })
], 'Geiger-Marsden alpha-scattering experiment');

var figTraj = (function () {
  var p = [], N = [250, 120], k = 75;
  [-60, -32, -16, -6, 0, 8, 20, 40, 70].forEach(function (b) {
    var x = 10, y = N[1] + b, vx = 2.2, vy = 0, pts = [[x, y]], dt = 0.5;
    for (var i = 0; i < 1400; i++) {
      var dx = x - N[0], dy = y - N[1], r = Math.hypot(dx, dy), a = k / (r * r * r);
      vx += a * dx * dt; vy += a * dy * dt; x += vx * dt; y += vy * dt; pts.push([x, y]);
      if (x < 0 || x > 430 || y < 0 || y > 240) break;
    }
    p.push(D.poly(pts, { color: Math.abs(b) < 10 ? 'r' : 'o', w: 1.4 }));
  });
  p.push(D.circle(N[0], N[1], 7, { color: 'b', fill: 'soft', w: 1.6 }), D.text(N[0], N[1] + 22, 'nucleus', { size: 11, color: 'b', math: false }));
  p.push(D.arrow(10, 200, 50, 200, { color: 'm', w: 1, head: 6 }), D.text(56, 200, 'α particles', { size: 11, math: false, anchor: 'start', color: 'm' }));
  p.push(D.text(330, 30, 'small impact parameter:', { size: 11, color: 'r', math: false }), D.text(330, 44, 'large deflection', { size: 11, color: 'r', math: false }));
  return D.svg(430, 240, p, 'Paths of alpha particles near a nucleus');
})();

var figLevels = (function () {
  var p = [];
  function yE(E) { return 275 - (E + 13.6) / 13.6 * 255; }
  var lv = [[1, -13.6], [2, -3.4], [3, -1.51], [4, -0.85], [5, -0.54], [6, -0.38]];
  lv.forEach(function (l) { var y = yE(l[1]); p.push(D.line(90, y, 400, y, { color: 'k', w: l[0] > 3 ? 1 : 1.6 })); if (l[0] <= 3) p.push(D.text(80, y, 'n = ' + l[0], { size: 11, anchor: 'end', math: false }), D.text(404, y, l[1] + ' eV', { size: 10, anchor: 'start', color: 'm', math: false })); });
  p.push(D.text(80, yE(-0.6), 'n = 4, 5, 6…', { size: 10, anchor: 'end', math: false }));
  p.push(D.line(90, yE(0), 400, yE(0), { color: 'm', w: 1, dash: '4 3' }), D.text(80, yE(0) - 4, 'n = ∞', { size: 11, anchor: 'end', math: false }), D.text(404, yE(0) - 2, '0 eV', { size: 10, anchor: 'start', color: 'm', math: false }));
  [2, 3, 4, 5].forEach(function (n, i) { p.push(D.arrow(115 + i * 12, yE(lv[n - 1][1]), 115 + i * 12, yE(-13.6), { color: 'p', w: 1.4, head: 6 })); });
  p.push(D.text(135, yE(-13.6) - 10, 'Lyman (UV)', { size: 11, color: 'p', math: false, anchor: 'start' }));
  [3, 4, 5, 6].forEach(function (n, i) { p.push(D.arrow(215 + i * 12, yE(lv[n - 1][1]), 215 + i * 12, yE(-3.4), { color: 'r', w: 1.4, head: 6 })); });
  p.push(D.text(220, yE(-3.4) + 14, 'Balmer (visible)', { size: 11, color: 'r', math: false, anchor: 'start' }));
  [4, 5, 6].forEach(function (n, i) { p.push(D.arrow(320 + i * 12, yE(lv[n - 1][1]), 320 + i * 12, yE(-1.51), { color: 'o', w: 1.4, head: 6 })); });
  p.push(D.text(318, yE(-1.51) + 14, 'Paschen (IR)', { size: 11, color: 'o', math: false, anchor: 'start' }));
  return D.svg(450, 285, p, 'Energy levels of hydrogen and its spectral series');
})();

var figBalmer = D.svg(420, 80, [
  '<rect x="20" y="15" width="380" height="40" rx="4" fill="#111"/>',
  [[656.3, '#e33', 1], [486.1, '#3cf', 1], [434.0, '#55f', 1], [410.2, '#a3f', 1], [397.0, '#83c', 0], [388.9, '#727', 0]].map(function (l) { var x = 20 + (l[0] - 370) / (680 - 370) * 380; return '<rect x="' + (x - 1.5).toFixed(1) + '" y="15" width="3" height="40" fill="' + l[1] + '"/>' + (l[2] ? D.text(x, 68, String(Math.round(l[0])), { size: 10, color: 'm', math: false }) : ''); }).join(''),
  D.text(20, 8, 'λ (nm)', { size: 10, color: 'm', math: false, anchor: 'start' }), D.text(381, 8, 'Hα', { size: 11, math: false, color: 'r' })
], 'Balmer lines of hydrogen in the visible spectrum');

var figXray = D.plot({
  w: 400, h: 210, x: [0, 10], y: [0, 1.3], xlabel: 'λ', ylabel: 'I', xticks: [[1.5, 'λ_{min}']], yticks: [],
  fns: [{ f: function (l) { if (l < 1.5) return 0; var u = l - 1.5; var c = 0.55 * u * Math.exp(-u / 1.5) * 1.6; return c + 0.75 * Math.exp(-Math.pow((l - 3.6) / 0.08, 2)) + 0.5 * Math.exp(-Math.pow((l - 3.1) / 0.08, 2)); }, from: 1.5, to: 10, color: 'b', steps: 800 }],
  texts: [{ x: 3.75, y: 1.18, s: 'K_α', size: 12, color: 'r', anchor: 'start' }, { x: 2.9, y: 0.9, s: 'K_β', size: 12, color: 'r', anchor: 'end' }, { x: 7, y: 0.5, s: 'continuous spectrum', size: 11, color: 'b' }],
  label: 'X-ray spectrum: continuous radiation plus characteristic lines'
});

var figMoseley = D.plot({
  w: 340, h: 200, x: [0, 50], y: [0, 5], xlabel: 'Z', ylabel: '√ν', xticks: [[1, '']], yticks: [],
  fns: [{ f: function (z) { return 0.1 * (z - 1); }, from: 1, to: 48, color: 'g' }],
  pts: [[11, 1.0], [20, 1.9], [26, 2.5], [29, 2.8], [42, 4.1]].map(function (q) { return { x: q[0], y: q[1], color: 'g' }; }),
  texts: [{ x: 18, y: 3.4, s: '√ν = a(Z − b)', size: 12, color: 'g' }],
  label: "Moseley's law for K-alpha lines"
});

function semf(A) { var Z = A / (1.98 + 0.0155 * Math.pow(A, 2 / 3)); return (15.8 * A - 18.3 * Math.pow(A, 2 / 3) - 0.714 * Z * (Z - 1) / Math.pow(A, 1 / 3) - 23.2 * Math.pow(A - 2 * Z, 2) / A) / A; }
var figBE = D.plot({
  w: 440, h: 240, x: [0, 250], y: [0, 10.8], xlabel: 'A', ylabel: 'BE/A (MeV)', mathLabels: false, xticks: [[50, '50'], [100, '100'], [150, '150'], [200, '200']], yticks: [[2, '2'], [4, '4'], [6, '6'], [8, '8']],
  fns: [{ f: semf, from: 14, to: 245, color: 'c' }],
  pts: [{ x: 2, y: 1.11, label: '²H', pos: 'e', math: false }, { x: 4, y: 7.07, label: '⁴He', pos: 'se', math: false }, { x: 12, y: 7.68, label: '¹²C', pos: 'ne', math: false }, { x: 56, y: 8.79, label: '⁵⁶Fe (most stable)', pos: 'n', math: false, size: 11 }, { x: 238, y: 7.57, label: '²³⁸U', pos: 'n', math: false }],
  texts: [{ x: 35, y: 3.2, s: '← fusion releases energy', size: 11, color: 'o', anchor: 'start' }, { x: 220, y: 5.6, s: 'fission releases energy →', size: 11, color: 'r', anchor: 'end' }],
  label: 'Binding energy per nucleon against mass number'
});

var figDecay = D.plot({
  w: 400, h: 210, x: [0, 4.4], y: [0, 1.15], xlabel: 't', ylabel: 'N', xticks: [[1, 'T½'], [2, '2T½'], [3, '3T½']], yticks: [[1, 'N₀'], [0.5, 'N₀/2'], [0.25, 'N₀/4']],
  fns: [{ f: function (t) { return Math.pow(0.5, t); }, color: 'r' }], guides: [[1, 0.5], [2, 0.25], [3, 0.125]],
  label: 'Radioactive decay: N halves every half-life'
});

var figABG = (function () {
  var p = [D.rect(180, 175, 60, 35, { color: 'k', fill: 'm', w: 1.4 }), D.dot(210, 180, { color: 'r', r: 4 }), D.text(210, 222, 'source in lead block', { size: 11, math: false })];
  for (var x = 40; x <= 380; x += 40) for (var y = 25; y <= 145; y += 40) p.push(D.circle(x, y, 5, { color: 'm', w: 1 }) + D.line(x - 3.5, y - 3.5, x + 3.5, y + 3.5, { color: 'm', w: 1 }) + D.line(x - 3.5, y + 3.5, x + 3.5, y - 3.5, { color: 'm', w: 1 }));
  p.push(D.path('M210 175 Q 205 90 170 15', { color: 'r', w: 2.4 }), D.text(160, 12, 'α (+)', { size: 12, color: 'r', math: false, anchor: 'end' }));
  p.push(D.path('M210 175 Q 230 100 340 40', { color: 'b', w: 2.4 }), D.text(350, 34, 'β⁻ (−)', { size: 12, color: 'b', math: false, anchor: 'start' }));
  p.push(D.line(210, 175, 210, 10, { color: 'g', w: 2.4 }), D.text(222, 12, 'γ (neutral)', { size: 12, color: 'g', math: false, anchor: 'start' }));
  p.push(D.text(390, 160, 'B into page', { size: 11, color: 'm', math: false, anchor: 'end' }));
  return D.svg(420, 230, p, 'Alpha, beta and gamma rays in a magnetic field');
})();

var figFission = D.svg(440, 170, [
  D.dot(20, 85, { color: 'm', r: 6 }), D.arrow(28, 85, 78, 85, { color: 'm', w: 1.6, head: 7 }), D.text(30, 70, 'n', { math: true }),
  D.circle(115, 85, 30, { color: 'r', fill: 'soft', w: 1.8 }), D.text(115, 86, '²³⁵U', { size: 13, math: false, bold: true }),
  D.arrow(150, 85, 190, 85, { color: 'k', w: 1.4, head: 7 }), D.ellipse(230, 85, 36, 26, { color: 'o', fill: 'soft', w: 1.8 }), D.text(230, 86, '²³⁶U*', { size: 12, math: false }), D.text(230, 128, 'unstable', { size: 11, color: 'm', math: false }),
  D.arrow(268, 75, 318, 40, { color: 'k', w: 1.4, head: 7 }), D.arrow(268, 95, 318, 130, { color: 'k', w: 1.4, head: 7 }),
  D.circle(345, 35, 22, { color: 'b', fill: 'soft', w: 1.6 }), D.text(345, 36, '¹⁴¹Ba', { size: 11, math: false, bold: true }), D.circle(345, 135, 20, { color: 'g', fill: 'soft', w: 1.6 }), D.text(345, 136, '⁹²Kr', { size: 11, math: false, bold: true }),
  D.dot(300, 85, { color: 'm', r: 5 }), D.dot(320, 85, { color: 'm', r: 5 }), D.dot(340, 85, { color: 'm', r: 5 }), D.arrow(348, 85, 400, 85, { color: 'm', w: 1.4, head: 7, label: '3 n', ly: -10, math: false }),
  D.text(436, 112, '+ ≈ 200 MeV', { size: 12, color: 'r', math: false, anchor: 'end' })
], 'Fission of uranium-235 by a slow neutron');

// ---------- chapter text ----------
JEE.book('physics', 'atoms-nuclei', {
  intro: [
    R`What is inside an atom? By 1900 it was known that atoms contain electrons, but how the positive charge and mass were arranged was a mystery. Rutherford's alpha-scattering experiment revealed a tiny, dense <b>nucleus</b>, and Bohr's model explained why atoms emit light only at particular wavelengths.`,
    R`This chapter follows that story and then goes inside the nucleus itself: its composition and size, mass defect and binding energy, the enormous energy released in fission and fusion, X-rays, and radioactive decay with its half-life.`
  ],
  sections: [
    { h: R`The alpha-particle scattering experiment`, t: [0], blocks: [
      R`In J. J. Thomson's "plum pudding" model (1898), an atom was a sphere of positive charge with electrons embedded in it. To test it, Geiger and Marsden (1911, under Rutherford) fired a narrow beam of 5.5 MeV alpha particles (helium nuclei) from a radioactive source at a very thin gold foil, and counted the scattered particles at different angles θ with a zinc sulphide screen and microscope.`,
      { fig: figGM, cap: R`Alpha particles from a shielded source strike a gold foil; a detector that can rotate about the foil counts the particles scattered through each angle θ.` },
      { points: [R`Most alpha particles passed straight through or were deflected by only a degree or two.`, R`About 1 in 8000 was deflected by more than 90°, and a few bounced almost straight back.`] },
      R`Rutherford said it was "as if you fired a 15-inch shell at a piece of tissue paper and it came back and hit you". The thin, spread-out positive charge of the Thomson model could never deflect a fast, heavy alpha particle so much. The positive charge and nearly all the mass must be concentrated in a tiny <b>nucleus</b>. The number of particles scattered through θ is proportional to \(\dfrac{1}{\sin^4(\theta/2)}\), as his nuclear model predicted.`,
      { check: { q: R`Why was a very thin foil used?`, ans: R`So that each alpha particle is scattered by at most one nucleus (single scattering).` } }
    ] },

    { h: R`Distance of closest approach and impact parameter`, t: [0], blocks: [
      { fig: figTraj, cap: R`Each alpha particle follows a hyperbolic path. Those aimed nearly at the nucleus (small impact parameter) are deflected strongly; a head-on one comes straight back.` },
      R`<b>Impact parameter</b> b: the perpendicular distance of the initial velocity of the alpha particle from the centre of the nucleus. Small b means large deflection: \(b = \dfrac{kZe^2\cot(\theta/2)}{K}\), where K is the alpha particle's kinetic energy (with charge 2e). For b = 0 (head-on), θ = 180°.`,
      { derive: R`Distance of closest approach`, steps: [
        R`In a head-on collision, the alpha particle (charge 2e) stops momentarily at distance r₀ from the nucleus (charge Ze); all its kinetic energy has become electrostatic potential energy.`,
        R`\(K = \dfrac{1}{4\pi\varepsilon_0}\dfrac{(2e)(Ze)}{r_0}\), so \[r_0 = \frac{2kZe^2}{K}\] This gives an upper limit on the size of the nucleus.`
      ] },
      { ex: { q: R`Find the distance of closest approach of a 5.5 MeV alpha particle to a gold nucleus (Z = 79). Use \(ke^2 = 1.44\) eV nm.`,
        steps: [R`\(r_0 = \dfrac{2\times1.44\text{ eV nm}\times79}{5.5\times10^6\text{ eV}}\).`], ans: R`≈ 4.1 × 10⁻⁵ nm = 41 fm (the gold nucleus is about 7 fm across, the atom about 300 000 fm)` } },
      { check: { q: R`If the alpha particle's kinetic energy is doubled, what happens to the distance of closest approach?`, ans: R`It halves (r₀ ∝ 1/K).` } }
    ] },

    { h: R`Rutherford's nuclear model of the atom`, t: [1], blocks: [
      R`Rutherford's model: an atom has a tiny, massive, positively charged <b>nucleus</b> (about 10⁻¹⁵ to 10⁻¹⁴ m across, compared with 10⁻¹⁰ m for the atom), with electrons revolving around it like planets round the Sun, held by electrostatic attraction. The atom is mostly empty space, and it is neutral overall.`,
      { h3: R`Limitations` },
      { points: [R`<b>Stability:</b> a revolving electron is accelerating, so by classical electrodynamics it must radiate energy continuously, spiralling into the nucleus in about 10⁻⁸ s. Real atoms are stable.`, R`<b>Spectrum:</b> a spiralling electron would emit a continuous range of frequencies, but atoms emit sharp lines at definite wavelengths.`] },
      { check: { q: R`What two facts about atoms could Rutherford's model not explain?`, ans: R`Their stability and their line spectra.` } }
    ] },

    { h: R`Bohr's postulates`, t: [2], blocks: [
      R`In 1913 Niels Bohr combined Rutherford's model with Planck's quantum idea, with three postulates for the hydrogen atom:`,
      { points: [
        R`<b>Stationary orbits:</b> an electron can revolve in certain stable orbits without radiating energy.`,
        R`<b>Quantisation of angular momentum:</b> the allowed orbits are those for which the angular momentum is a whole-number multiple of h/2π: \(mvr = \dfrac{nh}{2\pi}\), n = 1, 2, 3, … (n is the principal quantum number).`,
        R`<b>Frequency condition:</b> an electron jumping from an orbit of energy \(E_i\) to a lower one \(E_f\) emits a photon of frequency \(h\nu = E_i - E_f\). Absorbing a photon of exactly the right energy lifts it to a higher orbit.`
      ] },
      R`de Broglie later explained the second postulate: an orbit is allowed only if a whole number of electron wavelengths fits round it, \(2\pi r = n\lambda = n\dfrac{h}{mv}\), which is exactly \(mvr = nh/2\pi\): a standing wave round the orbit.`,
      { check: { q: R`What is the angular momentum of the electron in the second Bohr orbit?`, ans: R`2h/2π = h/π.` } }
    ] },

    { h: R`Radius, speed and energy in hydrogen-like atoms`, t: [2], blocks: [
      { derive: R`Bohr orbits (nucleus of charge Ze, one electron)`, steps: [
        R`Electrostatic force provides the centripetal force: \(\dfrac{mv^2}{r} = \dfrac{kZe^2}{r^2}\).`,
        R`With \(mvr = \dfrac{nh}{2\pi}\): \[r_n = \frac{n^2h^2}{4\pi^2mkZe^2} = 0.529\frac{n^2}{Z}\ \text{Å},\qquad v_n = \frac{2\pi kZe^2}{nh} = 2.19\times10^6\frac Zn\ \text{m/s}\]`,
        R`Energy: kinetic \(K = \dfrac{kZe^2}{2r}\), potential \(U = -\dfrac{kZe^2}{r}\), total \(E = -\dfrac{kZe^2}{2r}\): \[E_n = -13.6\frac{Z^2}{n^2}\ \text{eV}\]`
      ] },
      { table: { head: [R`Quantity`, R`Depends on n and Z as`], rows: [[R`radius r`, R`n²/Z`], [R`speed v`, R`Z/n`], [R`energy E, kinetic energy K`, R`Z²/n²`], [R`time period T`, R`n³/Z²`], [R`angular momentum`, R`n`]] } },
      R`Note \(K = -E\) and \(U = 2E\). The radius of the first orbit of hydrogen, 0.529 Å, is the <b>Bohr radius</b> a₀. The speed in the first orbit is about c/137.`,
      { ex: { q: R`Find the radius, speed and energy of the electron in the n = 2 orbit of He⁺ (Z = 2).`,
        steps: [R`\(r = 0.529\times\dfrac{4}{2}\) Å; \(v = 2.19\times10^6\times\dfrac22\) m/s; \(E = -13.6\times\dfrac44\) eV.`], ans: R`1.06 Å; 2.19 × 10⁶ m/s; −13.6 eV` } },
      { check: { q: R`If the total energy of an electron in an orbit is −3.4 eV, what are its kinetic and potential energies?`, ans: R`K = +3.4 eV, U = −6.8 eV.` } }
    ] },

    { h: R`Energy levels`, t: [2], blocks: [
      R`The allowed energies \(E_n = -13.6/n^2\) eV form a ladder of <b>energy levels</b>: −13.6 eV (n = 1), −3.4 eV (n = 2), −1.51 eV (n = 3), …, approaching 0 as n → ∞. The negative sign means the electron is bound.`,
      { points: [R`<b>Ground state:</b> the lowest level (n = 1), where the atom normally is.`, R`<b>Excited states:</b> n = 2, 3, …; the atom stays in them only about 10⁻⁸ s before dropping back, emitting photons.`, R`<b>Ionisation energy:</b> the energy needed to remove the electron from the ground state: 13.6 eV for hydrogen. The corresponding potential, 13.6 V, is the ionisation potential.`, R`<b>Excitation energy:</b> the energy to lift the electron from the ground state to a higher level: 10.2 eV to n = 2, 12.09 eV to n = 3.`] },
      { fig: figLevels, cap: R`Energy-level diagram of hydrogen. Transitions ending on n = 1 give the Lyman series, on n = 2 the Balmer series, on n = 3 the Paschen series.` },
      { check: { q: R`A hydrogen atom in its ground state absorbs a 10.2 eV photon. To which level is it raised?`, ans: R`n = 2 (−13.6 + 10.2 = −3.4 eV).` } }
    ] },

    { h: R`The hydrogen spectrum`, t: [3], blocks: [
      R`Hot hydrogen gas emits light only at certain wavelengths: a <b>line spectrum</b>. When an electron falls from level \(n_i\) to \(n_f\), it emits a photon with \[\frac1\lambda = RZ^2\left(\frac1{n_f^2} - \frac1{n_i^2}\right)\] where \(R = 1.097\times10^7\) m⁻¹ is the <b>Rydberg constant</b>. This formula, found experimentally by Balmer (1885) and Rydberg, was derived by Bohr.`,
      { table: { head: [R`Series`, R`Final level n_f`, R`Initial levels`, R`Region`], rows: [
        [R`Lyman`, R`1`, R`2, 3, 4, …`, R`ultraviolet`], [R`Balmer`, R`2`, R`3, 4, 5, …`, R`visible`], [R`Paschen`, R`3`, R`4, 5, …`, R`infrared`], [R`Brackett`, R`4`, R`5, 6, …`, R`infrared`], [R`Pfund`, R`5`, R`6, 7, …`, R`far infrared`]] } },
      { fig: figBalmer, cap: R`The Balmer series: the red Hα line (656 nm, n = 3 → 2) and the lines crowding towards the series limit at 365 nm.` },
      { ex: { q: R`Find the wavelength of the Hα line (n = 3 → 2) and the shortest wavelength in the Lyman series.`,
        steps: [R`Hα: \(\dfrac1\lambda = R\left(\dfrac14 - \dfrac19\right) = \dfrac{5R}{36}\), λ = 36/(5R).`, R`Lyman limit (∞ → 1): \(\dfrac1\lambda = R\), λ = 1/R.`], ans: R`≈ 656 nm (red); ≈ 91.2 nm` } },
      { tip: R`The number of different spectral lines possible when electrons fall from level n to the ground state (via any route) is \(\dfrac{n(n - 1)}{2}\). From n = 4: 6 lines.` },
      { check: { q: R`Which series of hydrogen lies in the visible region?`, ans: R`The Balmer series.` } }
    ] },

    { h: R`X-rays`, t: [3], blocks: [
      R`X-rays are produced when fast electrons strike a metal target, in a <b>Coolidge tube</b>: electrons from a hot filament are accelerated through a high voltage V (tens of kilovolts) and hit a tungsten or molybdenum target.`,
      { fig: figXray, cap: R`An X-ray spectrum: a continuous spectrum that starts sharply at a minimum wavelength, with sharp characteristic peaks (K_α, K_β) on top.` },
      { points: [
        R`<b>Continuous X-rays</b> (bremsstrahlung, "braking radiation"): electrons slowing down in the electric fields of the target nuclei radiate a continuous range of wavelengths. An electron that loses all its energy eV in one go gives the shortest wavelength, the cut-off: \[\lambda_{min} = \frac{hc}{eV} = \frac{1240}{V}\ \text{nm}\ (V \text{ in volts})\] (the Duane–Hunt law). It depends only on the voltage, not on the target.`,
        R`<b>Characteristic X-rays:</b> an incoming electron knocks out an electron from an inner shell (K shell, n = 1) of a target atom. An electron from the L shell (n = 2) falls into the vacancy, emitting a K_α photon; from the M shell, K_β. These lines are characteristic of the target element.`
      ] },
      R`<b>Moseley's law</b> (1913): the frequency of a characteristic line depends on the atomic number Z: \[\sqrt\nu = a(Z - b)\] For K_α lines, b ≈ 1 (one remaining K electron screens the nucleus), and Bohr's formula gives \(\nu = \dfrac34Rc(Z - 1)^2\). Moseley used this to show that atomic number, not atomic mass, orders the periodic table, and to predict missing elements.`,
      { fig: figMoseley, cap: R`\(\sqrt\nu\) against Z is a straight line for the \(K_\alpha\) lines of different elements.` },
      { ex: { q: R`Find the cut-off wavelength of X-rays from a tube operated at 30 kV, and the K_α wavelength of copper (Z = 29).`,
        steps: [R`\(\lambda_{min} = 1240/30\,000\) nm.`, R`\(\dfrac1\lambda = \dfrac34R(29 - 1)^2 = \dfrac34\times1.097\times10^7\times784\).`], ans: R`≈ 0.041 nm; ≈ 0.155 nm` } },
      { check: { q: R`If the accelerating voltage of an X-ray tube is increased, what happens to λ_min and to the K_α wavelength?`, ans: R`λ_min decreases; the K_α wavelength is unchanged (it depends only on the target).` } }
    ] },

    { h: R`Composition of the nucleus and atomic masses`, t: [4], blocks: [
      R`A nucleus contains <b>protons</b> (charge +e) and <b>neutrons</b> (neutral, discovered by Chadwick in 1932), together called <b>nucleons</b>. A nucleus is written \(^A_ZX\), where Z = atomic number (number of protons), A = mass number (number of nucleons) and N = A − Z = neutron number.`,
      { points: [R`<b>Isotopes:</b> same Z, different A (¹H, ²H, ³H; ³⁵Cl, ³⁷Cl). Same chemistry.`, R`<b>Isobars:</b> same A, different Z (³H and ³He; ⁴⁰Ar and ⁴⁰Ca).`, R`<b>Isotones:</b> same N, different Z (¹⁹⁸Hg and ¹⁹⁷Au, both N = 118).`] },
      R`Atomic masses are measured in <b>atomic mass units</b>: 1 u is one-twelfth of the mass of a ¹²C atom, \(1\text{ u} = 1.6605\times10^{-27}\) kg. Proton mass = 1.007276 u, neutron mass = 1.008665 u, electron mass = 0.000549 u. Masses are measured very precisely with mass spectrometers.`,
      { check: { q: R`How many protons, neutrons and electrons does a neutral ²³⁸₉₂U atom have?`, ans: R`92 protons, 146 neutrons, 92 electrons.` } }
    ] },

    { h: R`Size of the nucleus`, t: [4], blocks: [
      R`Scattering experiments with fast electrons and alpha particles show that the radius of a nucleus of mass number A is \[R = R_0A^{1/3},\qquad R_0\approx1.2\ \text{fm}\ (1\text{ fm} = 10^{-15}\text{ m})\] So the volume is proportional to A: each nucleon takes up the same space, like drops packed in a liquid.`,
      { derive: R`Nuclear density is the same for all nuclei`, steps: [
        R`Mass ≈ A × (1.66 × 10⁻²⁷ kg); volume = \(\frac43\pi R_0^3A\).`,
        R`Density \(= \dfrac{1.66\times10^{-27}}{\frac43\pi(1.2\times10^{-15})^3}\approx2.3\times10^{17}\) kg/m³, independent of A.`
      ] },
      R`That is about 10¹⁴ times the density of water: a teaspoon of nuclear matter would weigh about a billion tonnes. Neutron stars are made of matter at this density.`,
      { ex: { q: R`Find the radii of ⁵⁶Fe and ²³⁸U nuclei.`,
        steps: [R`\(R = 1.2\times56^{1/3}\) fm and \(1.2\times238^{1/3}\) fm.`], ans: R`≈ 4.6 fm and ≈ 7.4 fm` } },
      { check: { q: R`By what factor is the radius of a nucleus with A = 216 larger than one with A = 27?`, ans: R`(216/27)^{1/3} = 8^{1/3} = 2.` } }
    ] },

    { h: R`Mass–energy relation`, t: [5], blocks: [
      R`Einstein's special theory of relativity showed that mass is a form of energy: \[E = mc^2\] A mass m can be converted into energy mc², and energy can appear as mass. In nuclear reactions these conversions are large enough to measure.`,
      R`Useful conversion: \(1\text{ u}\times c^2 = 1.6605\times10^{-27}\times(3\times10^8)^2\) J ≈ 1.49 × 10⁻¹⁰ J = <b>931.5 MeV</b>.`,
      { ex: { q: R`How much energy is equivalent to 1 g of matter?`,
        steps: [R`\(E = 10^{-3}\times(3\times10^8)^2\).`], ans: R`9 × 10¹³ J, about the energy of a 20-kilotonne bomb` } },
      { check: { q: R`Express the energy equivalent of an electron's mass (0.000549 u) in MeV.`, ans: R`0.000549 × 931.5 ≈ 0.511 MeV.` } }
    ] },

    { h: R`Mass defect and binding energy`, t: [6], blocks: [
      R`The mass of a nucleus is always <b>less</b> than the total mass of its separate protons and neutrons. The difference is the <b>mass defect</b>: \[\Delta m = Zm_p + (A - Z)m_n - M_{nucleus}\] This missing mass is the energy released when the nucleons come together, the <b>binding energy</b> \(E_b = \Delta m\,c^2\): the energy needed to pull the nucleus apart into separate nucleons.`,
      { ex: { q: R`Find the binding energy and binding energy per nucleon of ⁴He. Atomic masses: ¹H 1.007825 u, n 1.008665 u, ⁴He 4.002603 u.`,
        steps: [R`Using atomic masses (the electron masses cancel): Δm = 2(1.007825) + 2(1.008665) − 4.002603 = 0.030377 u.`, R`\(E_b = 0.030377\times931.5\) MeV; divide by 4.`], ans: R`≈ 28.3 MeV; ≈ 7.07 MeV per nucleon` } },
      { mistake: R`Mixing nuclear and atomic masses. If you use the atomic mass of the nucleus, use the hydrogen atom mass (1.007825 u), not the bare proton mass, so the electrons cancel.` },
      { check: { q: R`Is the mass of a deuteron more or less than the sum of a proton's and a neutron's masses?`, ans: R`Less, by the mass equivalent of its binding energy (2.22 MeV).` } }
    ] },

    { h: R`Binding energy per nucleon and nuclear forces`, t: [6], blocks: [
      R`The <b>binding energy per nucleon</b> \(E_{bn} = E_b/A\) measures how tightly a nucleus is held together, and so its stability.`,
      { fig: figBE, cap: R`Binding energy per nucleon rises steeply for light nuclei, peaks near A = 56 (iron) at about 8.8 MeV, and falls slowly for heavy nuclei.` },
      { points: [
        R`It is roughly constant, about 8 MeV, for 30 < A < 170: each nucleon interacts only with its near neighbours (the nuclear force is <b>short-ranged</b> and <b>saturates</b>).`,
        R`Light nuclei have lower values; combining them (<b>fusion</b>) gives a more tightly bound nucleus and releases energy.`,
        R`Heavy nuclei (A > 170) have lower values because of the growing repulsion between protons; splitting them (<b>fission</b>) into middle-sized nuclei releases energy.`,
        R`⁴He, ¹²C and ¹⁶O stand out as especially stable.`
      ] },
      { h3: R`The nuclear force` },
      { points: [R`It is the <b>strongest</b> force in nature, about 100 times stronger than the electrostatic force at nuclear distances, and overcomes the protons' repulsion.`, R`It is <b>short-ranged</b>: strongly attractive at about 1 to 2 fm, negligible beyond a few fm, and repulsive below about 0.8 fm (so nuclei do not collapse).`, R`It is <b>charge-independent</b>: the same between p–p, n–n and p–n.`] },
      { check: { q: R`Why is energy released when a uranium nucleus splits into two middle-sized nuclei?`, ans: R`The products have higher binding energy per nucleon (≈ 8.5 MeV vs ≈ 7.6 MeV), so the total binding energy increases and the difference is released.` } }
    ] },

    { h: R`Nuclear fission and fusion`, t: [7], blocks: [
      R`<b>Fission:</b> a heavy nucleus splits into two medium nuclei. In 1938 Hahn and Strassmann found that uranium-235 absorbing a slow neutron splits, for example: \[{}^1_0n + {}^{235}_{92}U \to {}^{236}_{92}U^* \to {}^{141}_{56}Ba + {}^{92}_{36}Kr + 3\,{}^1_0n + \approx200\text{ MeV}\]`,
      { fig: figFission, cap: R`A slow neutron is absorbed by ²³⁵U; the unstable ²³⁶U splits into two fragments and 2 or 3 fast neutrons, releasing about 200 MeV.` },
      { points: [R`The extra neutrons can cause further fissions: a <b>chain reaction</b>. Uncontrolled, it is an atomic bomb; controlled, a <b>nuclear reactor</b>.`, R`<b>In a reactor:</b> a <b>moderator</b> (heavy water, graphite) slows the fast neutrons so U-235 can capture them; <b>control rods</b> (cadmium, boron) absorb neutrons to keep the rate steady (multiplication factor k = 1); a <b>coolant</b> carries the heat away to make steam for turbines.`, R`Fission of 1 kg of U-235 releases about 8 × 10¹³ J, millions of times more than burning 1 kg of coal.`] },
      R`<b>Fusion:</b> light nuclei combine into a heavier one, releasing energy. The Sun and stars shine by fusing hydrogen into helium (the proton–proton cycle): \(4\,{}^1_1H \to {}^4_2He + 2e^+ + 2\nu + 26.7\) MeV. Fusion needs extremely high temperatures (about 10⁷ K or more) so that the nuclei move fast enough to overcome their electrostatic repulsion: <b>thermonuclear</b> fusion. Fusion reactors (tokamaks such as ITER) try to confine such hot plasma with magnetic fields.`,
      { check: { q: R`Why must neutrons in a reactor be slowed down?`, ans: R`Slow (thermal) neutrons are much more likely to be captured by U-235 and cause fission.` } }
    ] },

    { h: R`Energy calculations in nuclear reactions`, t: [7], blocks: [
      R`The energy released in a nuclear reaction, its <b>Q-value</b>, is found from the masses: \[Q = (m_{reactants} - m_{products})c^2\] or equivalently Q = (total binding energy of products) − (total binding energy of reactants). Q > 0 means energy is released (exothermic).`,
      { ex: { q: R`Find the energy released in the D–T fusion reaction \(^2_1H + {}^3_1H \to {}^4_2He + {}^1_0n\). Masses: ²H 2.014102 u, ³H 3.016049 u, ⁴He 4.002603 u, n 1.008665 u.`,
        steps: [R`Δm = (2.014102 + 3.016049) − (4.002603 + 1.008665) = 0.018883 u.`, R`Q = 0.018883 × 931.5 MeV.`], ans: R`≈ 17.6 MeV` } },
      { ex: { q: R`In fission, a nucleus of A = 240 (7.6 MeV per nucleon) splits into two nuclei of A = 120 (8.5 MeV per nucleon). Estimate the energy released.`,
        steps: [R`Q = 240 × 8.5 − 240 × 7.6 = 240 × 0.9.`], ans: R`≈ 216 MeV` } },
      { tip: R`Per nucleon, fusion releases more energy than fission (17.6 MeV over 5 nucleons ≈ 3.5 MeV each, compared with 200/236 ≈ 0.85 MeV each for fission).` },
      { check: { q: R`In any nuclear reaction, which quantities are conserved?`, ans: R`Charge (Z total), nucleon number (A total), and total energy (including rest-mass energy) and momentum.` } }
    ] },

    { h: R`Radioactivity: alpha, beta and gamma radiations`, t: [8], blocks: [
      R`In 1896 Henri Becquerel found that uranium salts emit penetrating radiation on their own: <b>radioactivity</b>, the spontaneous decay of unstable nuclei. Marie and Pierre Curie discovered polonium and radium. Rutherford identified three kinds of radiation by how they bend in a magnetic field:`,
      { fig: figABG, cap: R`In a magnetic field, positive α particles bend one way, negative β particles bend more sharply the other way, and neutral γ rays go straight.` },
      { table: { head: [R`Property`, R`α (alpha)`, R`β⁻ (beta)`, R`γ (gamma)`], rows: [
        [R`Nature`, R`helium nucleus ⁴₂He`, R`electron`, R`high-energy photon`], [R`Charge`, R`+2e`, R`−e`, R`0`],
        [R`Penetrating power`, R`least (stopped by paper)`, R`medium (a few mm of aluminium)`, R`most (several cm of lead)`], [R`Ionising power`, R`most`, R`medium`, R`least`]] } },
      R`<b>Decay equations</b> (charge and nucleon number are conserved):`,
      { points: [R`<b>α decay:</b> \(^A_ZX \to {}^{A-4}_{Z-2}Y + {}^4_2He\). Example: \(^{238}_{92}U \to {}^{234}_{90}Th + \alpha\).`, R`<b>β⁻ decay:</b> a neutron turns into a proton: \(^A_ZX \to {}^A_{Z+1}Y + e^- + \bar\nu\). The antineutrino \(\bar\nu\) shares the energy, so β particles have a continuous range of energies.`, R`<b>β⁺ decay:</b> \(^A_ZX \to {}^A_{Z-1}Y + e^+ + \nu\).`, R`<b>γ decay:</b> an excited nucleus drops to a lower energy state, emitting a photon; A and Z do not change.`] },
      { ex: { q: R`²³⁸U decays to ²⁰⁶Pb through a series of α and β⁻ decays. How many of each?`,
        steps: [R`Mass number falls by 32, and only α changes A (by 4): 8 α decays.`, R`8 α decays lower Z by 16 (92 → 76), but Pb has Z = 82, so 6 β⁻ decays raise Z by 6.`], ans: R`8 α and 6 β⁻` } },
      { check: { q: R`Which radiation is the most ionising, and which the most penetrating?`, ans: R`α is the most ionising; γ the most penetrating.` } }
    ] },

    { h: R`Law of radioactive decay`, t: [8], blocks: [
      R`Radioactive decay is random: we cannot predict when a particular nucleus will decay, but in a large sample the number decaying per second is proportional to the number present: \[\frac{dN}{dt} = -\lambda N\quad\Rightarrow\quad N = N_0e^{-\lambda t}\] where λ is the <b>decay constant</b>, a property of the nuclide, unaffected by temperature, pressure or chemical state.`,
      R`The <b>activity</b> (decay rate) is \(A = \lambda N = A_0e^{-\lambda t}\). Units: the <b>becquerel</b> (1 Bq = 1 decay/s) and the <b>curie</b> (1 Ci = 3.7 × 10¹⁰ Bq, roughly the activity of 1 g of radium).`,
      { fig: figDecay, cap: R`The number of undecayed nuclei falls exponentially, halving every half-life.` },
      { ex: { q: R`A sample has an activity of 8000 Bq. What is its activity after three half-lives?`,
        steps: [R`Each half-life halves it: 8000 → 4000 → 2000 → 1000.`], ans: R`1000 Bq` } },
      { check: { q: R`Does heating a radioactive sample change its decay rate?`, ans: R`No: nuclear decay is not affected by ordinary physical or chemical conditions.` } }
    ] },

    { h: R`Half-life and mean life`, t: [8], blocks: [
      { derive: R`Half-life and mean life`, steps: [
        R`<b>Half-life</b> T½: the time for half the nuclei to decay. \(\dfrac{N_0}{2} = N_0e^{-\lambda T_{1/2}}\) gives \[T_{1/2} = \frac{\ln2}{\lambda} = \frac{0.693}{\lambda}\]`,
        R`<b>Mean life</b> τ: the average lifetime of a nucleus, \(\tau = \dfrac1\lambda\). So \(T_{1/2} = 0.693\,\tau\).`,
        R`After n half-lives, \(N = N_0\left(\frac12\right)^n\); in time t, \(n = t/T_{1/2}\).`
      ] },
      { table: { head: [R`Nuclide`, R`Half-life`], rows: [[R`Polonium-214`, R`164 μs`], [R`Iodine-131`, R`8.0 days`], [R`Cobalt-60`, R`5.27 years`], [R`Carbon-14`, R`5730 years`], [R`Radium-226`, R`1600 years`], [R`Uranium-238`, R`4.5 × 10⁹ years`]] } },
      { ex: { q: R`The half-life of a nuclide is 10 days. What fraction remains after 30 days, and what is its mean life?`,
        steps: [R`30 days = 3 half-lives: (1/2)³.`, R`τ = T½/0.693 = 10/0.693 days.`], ans: R`1/8 remains; τ ≈ 14.4 days` } },
      { ex: { q: R`What fraction of a sample decays in one mean life?`,
        steps: [R`Remaining: \(e^{-1}\approx0.37\).`], ans: R`≈ 63%` } },
      R`<b>Radiocarbon dating:</b> living things keep a constant ratio of ¹⁴C to ¹²C. After death, ¹⁴C decays with a half-life of 5730 years, so measuring the remaining fraction gives the age of wood, bones or cloth up to about 50 000 years old.`,
      { check: { q: R`A sample's activity falls to 1/16 of its original value in 40 hours. What is its half-life?`, ans: R`1/16 = (1/2)⁴, so 4 half-lives in 40 h: 10 hours.` } }
    ] }
  ],
  summary: [
    R`Geiger–Marsden: most α pass through, a few bounce back ⇒ tiny massive nucleus. Closest approach \(r_0 = 2kZe^2/K\); impact parameter \(b = kZe^2\cot(\theta/2)/K\).`,
    R`Rutherford model fails on stability and line spectra.`,
    R`Bohr: stationary orbits, \(mvr = nh/2\pi\), \(h\nu = E_i - E_f\). \(r_n = 0.529\,n^2/Z\) Å, \(v_n = 2.19\times10^6\,Z/n\) m/s, \(E_n = -13.6\,Z^2/n^2\) eV; K = −E, U = 2E.`,
    R`Spectrum: \(\frac1\lambda = RZ^2(\frac1{n_f^2} - \frac1{n_i^2})\); Lyman (UV), Balmer (visible), Paschen, Brackett, Pfund (IR). Lines from level n: n(n − 1)/2.`,
    R`X-rays: continuous with \(\lambda_{min} = hc/eV = 1240/V\) nm; characteristic K_α, K_β; Moseley \(\sqrt\nu = a(Z - b)\).`,
    R`Nucleus \(^A_ZX\): isotopes, isobars, isotones; 1 u = 1.6605 × 10⁻²⁷ kg = 931.5 MeV; R = 1.2 A^{1/3} fm; density ≈ 2.3 × 10¹⁷ kg/m³.`,
    R`Mass defect \(\Delta m = Zm_p + Nm_n - M\); binding energy Δm c²; BE/A peaks near Fe-56 (8.8 MeV). Nuclear force: strong, short-range, charge-independent.`,
    R`Fission (U-235 + n, ≈ 200 MeV, chain reaction, moderator, control rods); fusion (D–T 17.6 MeV, stars, needs ~10⁷ K). Q = Δm c².`,
    R`α (He nucleus), β⁻ (electron + antineutrino), γ (photon). Decay law \(N = N_0e^{-\lambda t}\), A = λN; T½ = 0.693/λ, τ = 1/λ.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 3, §6.4 Bohr's Model of the Hydrogen Atom`, url: 'https://openstax.org/books/university-physics-volume-3/pages/6-4-bohrs-model-of-the-hydrogen-atom' },
    { t: R`OpenStax University Physics Vol. 3, §8.5 Atomic Spectra and X-rays`, url: 'https://openstax.org/books/university-physics-volume-3/pages/8-5-atomic-spectra-and-x-rays' },
    { t: R`OpenStax University Physics Vol. 3, §10.1 Properties of Nuclei`, url: 'https://openstax.org/books/university-physics-volume-3/pages/10-1-properties-of-nuclei' },
    { t: R`OpenStax University Physics Vol. 3, §10.2 Nuclear Binding Energy`, url: 'https://openstax.org/books/university-physics-volume-3/pages/10-2-nuclear-binding-energy' },
    { t: R`OpenStax University Physics Vol. 3, §10.3 Radioactive Decay`, url: 'https://openstax.org/books/university-physics-volume-3/pages/10-3-radioactive-decay' },
    { t: R`OpenStax University Physics Vol. 3, §10.5 Fission`, url: 'https://openstax.org/books/university-physics-volume-3/pages/10-5-fission' },
    { t: R`OpenStax University Physics Vol. 3, §10.6 Nuclear Fusion`, url: 'https://openstax.org/books/university-physics-volume-3/pages/10-6-nuclear-fusion' },
    { t: R`Wikipedia: Geiger–Marsden experiments`, url: 'https://en.wikipedia.org/wiki/Geiger%E2%80%93Marsden_experiments' },
    { t: R`Wikipedia: Moseley's law`, url: 'https://en.wikipedia.org/wiki/Moseley%27s_law' }
  ]
});
})();
