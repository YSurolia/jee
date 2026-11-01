// Book chapter: Kinetic Theory of Gases. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figBox = (function () {
  var p = [D.rect(20, 20, 300, 160, { color: 'k', w: 2.2, r: 4 })], seed = 7;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (var k = 0; k < 22; k++) {
    var x = 40 + rnd() * 260, y = 38 + rnd() * 124, a = rnd() * 2 * Math.PI, L = 12 + rnd() * 18;
    p.push(D.arrow(x, y, x + L * Math.cos(a), y + L * Math.sin(a), { color: 'c', w: 1.3, head: 5 }), D.dot(x, y, { color: 'o', r: 4 }));
  }
  return D.svg(340, 200, p, 'Gas molecules moving randomly in a box');
})();

var figWall = D.svg(380, 210, [
  D.poly([[60, 50], [240, 50], [240, 190], [60, 190]], { closed: true, color: 'k', w: 2 }),
  D.poly([[60, 50], [100, 20], [280, 20], [240, 50]], { closed: true, color: 'k', w: 1.4 }), D.poly([[240, 190], [280, 160], [280, 20]], { color: 'k', w: 1.4 }),
  D.poly([[240, 50], [280, 20], [280, 160], [240, 190]], { closed: true, color: 'b', fill: 'soft', w: 0.01 }),
  D.dot(190, 120, { color: 'o', r: 6 }), D.arrow(196, 120, 232, 120, { color: 'r', w: 2.2, label: '+mv_x', ly: -14, size: 13 }),
  D.arrow(184, 140, 140, 140, { color: 'g', w: 2.2, label: '−mv_x after', ly: 16, size: 12, math: false }),
  D.text(300, 95, 'wall A', { color: 'b', size: 12, anchor: 'start', math: false }),
  D.arrow(60, 205, 240, 205, { color: 'm', w: 1.2, head: 6, both: true }), D.text(150, 196, 'L', { math: true, color: 'm' })
], 'A molecule bouncing off one wall of a cube');

var figBoyle = D.plot({
  w: 380, h: 220, x: [0, 5], y: [0, 5], xlabel: 'V', ylabel: 'P', xticks: [], yticks: [],
  fns: [{ f: function (v) { return 2 / v; }, from: 0.42, to: 4.8, color: 'b', label: 'T₁', lx: 2.6, ly: 0.42, math: false },
    { f: function (v) { return 4 / v; }, from: 0.82, to: 4.8, color: 'r', label: 'T₂ > T₁', lx: 2.2, ly: 2.35, math: false }],
  label: "Boyle's law: P-V curves (isotherms) at two temperatures"
});

var figCharles = D.plot({
  w: 420, h: 220, x: [-300, 150], y: [0, 5], xlabel: 't (°C)', ylabel: 'V', mathLabels: false, xticks: [[-273, '−273'], [100, '100']], yticks: [], noOrigin: true,
  fns: [{ f: function (t) { return 3 * (t + 273) / 373; }, from: 0, to: 120, color: 'c' }, { f: function (t) { return 3 * (t + 273) / 373; }, from: -273, to: 0, color: 'c', dash: true, w: 1.6 },
    { f: function (t) { return 4.4 * (t + 273) / 373; }, from: 0, to: 120, color: 'o' }, { f: function (t) { return 4.4 * (t + 273) / 373; }, from: -273, to: 0, color: 'o', dash: true, w: 1.6 }],
  pts: [{ x: -273, y: 0 }], segs: [{ x1: -250, y1: 1.6, x2: -270, y2: 0.18, color: 'm', w: 1.2, arrow: true }],
  texts: [{ x: -285, y: 1.95, s: 'absolute zero', size: 12, anchor: 'start', color: 'm' }, { x: 60, y: 4.45, s: 'lower P', color: 'o', size: 12, anchor: 'end' }, { x: 145, y: 2.5, s: 'higher P', color: 'c', size: 12, anchor: 'end' }],
  label: "Charles' law: every V-t line extrapolates to −273 °C"
});

var figDalton = D.svg(420, 140, [
  D.rect(15, 30, 110, 80, { color: 'b', w: 1.8, r: 4 }), D.rect(155, 30, 110, 80, { color: 'r', w: 1.8, r: 4 }), D.rect(295, 30, 110, 80, { color: 'g', w: 1.8, r: 4 }),
  D.dot(40, 55, { color: 'b' }), D.dot(80, 90, { color: 'b' }), D.dot(100, 50, { color: 'b' }), D.dot(60, 75, { color: 'b' }),
  D.dot(180, 60, { color: 'r' }), D.dot(230, 85, { color: 'r' }), D.dot(210, 50, { color: 'r' }),
  D.dot(320, 55, { color: 'b' }), D.dot(360, 90, { color: 'b' }), D.dot(380, 50, { color: 'b' }), D.dot(340, 75, { color: 'b' }), D.dot(330, 95, { color: 'r' }), D.dot(390, 80, { color: 'r' }), D.dot(355, 45, { color: 'r' }),
  D.text(70, 128, 'gas A: p₁', { size: 12, color: 'b' }), D.text(210, 128, 'gas B: p₂', { size: 12, color: 'r' }), D.text(350, 128, 'mixture: p₁ + p₂', { size: 12, color: 'g' }),
  D.text(140, 70, '+', { size: 18, bold: true }), D.text(280, 70, '=', { size: 18, bold: true }), D.text(210, 14, 'same volume, same temperature', { size: 12, color: 'm' })
], "Dalton's law of partial pressures");

var figCompress = D.plot({
  w: 380, h: 220, x: [0, 5], y: [0, 5], xlabel: 'V', ylabel: 'P', xticks: [[2, 'V/2'], [4, 'V']], yticks: [],
  shade: [{ f: function (v) { return 4 / v; }, from: 2, to: 4, color: 'o' }],
  fns: [{ f: function (v) { return 4 / v; }, from: 0.85, to: 4.6, color: 'o' }],
  pts: [{ x: 4, y: 1, label: 'start', pos: 'ne', math: false, size: 12 }, { x: 2, y: 2, label: 'end', pos: 'ne', math: false, size: 12 }],
  segs: [{ x1: 3.2, y1: 1.25, x2: 2.8, y2: 1.43, color: 'o', arrow: true, w: 2 }],
  texts: [{ x: 3.0, y: 0.5, s: 'work done on the gas', color: 'o', size: 12 }],
  label: 'Isothermal compression of a gas to half its volume'
});

var figMaxwell = (function () {
  function f(a) { return function (v) { return 4 / Math.sqrt(Math.PI) * v * v / (a * a * a) * Math.exp(-v * v / (a * a)); }; }
  var f1 = f(1), vmp = 1, vav = 2 / Math.sqrt(Math.PI), vr = Math.sqrt(1.5);
  return D.plot({
    w: 440, h: 250, x: [0, 4], y: [0, 1], xlabel: 'v', ylabel: 'f(v)', xticks: [], yticks: [],
    fns: [{ f: f1, color: 'b', label: 'T₁', lx: 0.55, ly: 0.88, math: false }, { f: f(1.6), color: 'r', label: 'T₂ > T₁', lx: 2.35, ly: 0.47, math: false }],
    segs: [{ x1: vmp, y1: 0, x2: vmp, y2: f1(vmp), color: 'b', dash: '3 3', w: 1.2 }, { x1: vav, y1: 0, x2: vav, y2: f1(vav), color: 'b', dash: '3 3', w: 1.2 }, { x1: vr, y1: 0, x2: vr, y2: f1(vr), color: 'b', dash: '3 3', w: 1.2 }],
    texts: [{ x: vmp - 0.04, y: -0.06, s: 'v_{mp}', color: 'b', size: 11, anchor: 'end' }, { x: vav + 0.02, y: -0.06, s: 'v_{av}', color: 'b', size: 11 }, { x: vr + 0.2, y: -0.06, s: 'v_{rms}', color: 'b', size: 11, anchor: 'start' }],
    pad: [18, 22, 34, 30],
    label: 'Maxwell distribution of molecular speeds at two temperatures'
  });
})();

var figDof = D.svg(400, 210, [
  D.arrow(200, 110, 360, 110, { color: 'm', w: 1.2, head: 7, label: 'x (bond axis)', at: 'end', lx: -40, ly: 16, math: false, size: 12 }),
  D.arrow(200, 110, 200, 12, { color: 'm', w: 1.2, head: 7, label: 'y', at: 'end', lx: 10, ly: 4 }),
  D.arrow(200, 110, 130, 180, { color: 'm', w: 1.2, head: 7, label: 'z', at: 'end', lx: -10, ly: 4 }),
  D.line(150, 110, 250, 110, { color: 'k', w: 4 }), D.circle(150, 110, 20, { color: 'o', fill: 'soft', w: 2 }), D.circle(250, 110, 20, { color: 'o', fill: 'soft', w: 2 }),
  D.ellipse(200, 45, 34, 10, { color: 'g', w: 1.8 }), D.arrow(222, 52, 232, 49, { color: 'g', w: 1.6, head: 7 }), D.text(260, 40, 'rotation about y', { size: 12, color: 'g', anchor: 'start', math: false }),
  D.ellipse(150, 162, 10, 28, { color: 'g', w: 1.8 }), D.text(110, 200, 'rotation about z', { size: 12, color: 'g', math: false }),
  D.text(320, 172, 'rotation about x:', { size: 11, color: 'm', math: false }), D.text(320, 187, 'negligible energy', { size: 11, color: 'm', math: false })
], 'Degrees of freedom of a diatomic molecule');

var figMfp = (function () {
  var p = [], seed = 3;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  for (var k = 0; k < 26; k++) p.push(D.circle(25 + rnd() * 370, 20 + rnd() * 150, 6, { color: 'm', fill: 'soft', w: 1 }));
  var path = [[30, 150], [110, 120], [140, 40], [230, 80], [260, 150], [330, 60], [390, 110]];
  p.push(D.poly(path, { color: 'r', w: 2 }));
  path.forEach(function (q, i) { if (i > 0 && i < path.length - 1) p.push(D.dot(q[0], q[1], { color: 'r' })); });
  p.push(D.dot(30, 150, { color: 'o', r: 6 }), D.text(150, 190, 'average straight run between collisions = mean free path λ', { size: 12, color: 'r', math: false }));
  return D.svg(420, 200, p, 'Zigzag path of one gas molecule');
})();

// ---------- chapter text ----------
JEE.book('physics', 'kinetic-theory', {
  intro: [
    R`A gas is made of an enormous number of tiny molecules flying about at hundreds of metres per second, colliding with each other and with the walls of their container. Yet the gas as a whole behaves very simply: its pressure, volume and temperature obey neat laws such as PV = nRT.`,
    R`The <b>kinetic theory of gases</b> explains these large-scale laws from the motion of the molecules. It tells us what pressure and temperature really are, how fast molecules move, why different gases have different specific heats, and how far a molecule travels between collisions.`
  ],
  sections: [
    { h: R`Molecular nature of matter`, t: [2], blocks: [
      R`The idea that matter is made of tiny indivisible particles (atoms) goes back to Kanad in India and Democritus in Greece. Dalton's atomic theory (1808) made it scientific: elements are made of identical atoms, and atoms combine in simple ratios to form molecules.`,
      R`Today we know that atoms are about \(10^{-10}\) m across. In solids they are tightly packed; in liquids they are close but can move past each other; in a gas they are far apart (about 10 times their size at room conditions) and move almost freely.`,
      { fig: figBox, cap: R`In a gas, molecules move randomly in all directions, colliding with each other and with the walls.` },
      R`Strong evidence for molecular motion is <b>Brownian motion</b>: pollen grains in water jiggle about randomly because they are bombarded unevenly by water molecules. Einstein explained it in 1905, and Perrin's measurements of it confirmed the existence of atoms.`,
      { ex: { q: R`At room conditions a gas contains about \(2.7\times10^{25}\) molecules per cubic metre. Estimate the average spacing between molecules.`,
        steps: [R`Each molecule has a volume of \(1/(2.7\times10^{25})\) m³ to itself.`, R`Spacing ≈ cube root \(= (3.7\times10^{-26})^{1/3}\).`], ans: R`≈ 3.3 × 10⁻⁹ m, about 10 times the size of a molecule` } },
      { check: { q: R`Why are gases easy to compress but solids are not?`, ans: R`Gas molecules are far apart, with lots of empty space between them; in solids the atoms are already packed closely.` } }
    ] },

    { h: R`The gas laws`, t: [0], blocks: [
      R`Experiments with gases at low pressure and high temperature gave three simple laws. For a fixed amount of gas:`,
      { h3: R`Boyle's law` },
      R`At constant temperature, the pressure of a gas is inversely proportional to its volume: \(PV\) = constant, or \(P_1V_1 = P_2V_2\). Each curve of P against V at a fixed temperature is a hyperbola called an <b>isotherm</b>.`,
      { fig: figBoyle, cap: R`Isotherms: at a higher temperature the curve lies further from the axes, because PV is larger.` },
      { ex: { q: R`An air bubble of volume 1 cm³ rises from the bottom of a 10 m deep lake to the surface. If the temperature is the same, what is its volume at the surface? (Atmospheric pressure = 1.013 × 10⁵ Pa)`,
        steps: [R`At the bottom: \(P_1 = P_0 + \rho gh\) = 1.013 × 10⁵ + 1000 × 9.8 × 10 = 1.993 × 10⁵ Pa.`, R`\(V_2 = V_1\dfrac{P_1}{P_2} = 1\times\dfrac{1.993}{1.013}\).`], ans: R`≈ 1.97 cm³ (it almost doubles)` } },
      { h3: R`Charles' law` },
      R`At constant pressure, the volume of a gas is proportional to its absolute temperature: \(V/T\) = constant. Plotting V against temperature in °C gives straight lines that all meet the temperature axis at −273.15 °C. This is <b>absolute zero</b>, the zero of the Kelvin scale: \(T(\text{K}) = t(°\text{C}) + 273.15\).`,
      { fig: figCharles, cap: R`Volume against Celsius temperature at two different pressures. Extended backwards (dashed), every line reaches zero volume at −273 °C.` },
      { ex: { q: R`A balloon holds 2 L of air at 27 °C. What is its volume at 127 °C, at the same pressure?`,
        steps: [R`Use kelvin: 300 K and 400 K.`, R`\(V_2 = 2\times\dfrac{400}{300}\).`], ans: R`≈ 2.67 L` } },
      { h3: R`Gay-Lussac's (pressure) law` },
      R`At constant volume, \(P/T\) = constant. This is why a sealed can may burst when heated, and why tyre pressure rises after a long drive.`,
      { h3: R`Avogadro's law` },
      R`Equal volumes of all gases at the same temperature and pressure contain the same number of molecules. At STP (273 K, 1 atm), one mole of any gas occupies 22.4 L.`,
      { mistake: R`Using °C in gas-law formulas. Always convert to kelvin first; 27 °C to 54 °C is <b>not</b> doubling the temperature (300 K to 327 K).` },
      { check: { q: R`At constant pressure, by what factor does the volume change if the temperature goes from 0 °C to 273 °C?`, ans: R`It doubles (273 K to 546 K).` } }
    ] },

    { h: R`The ideal gas equation`, t: [0], blocks: [
      R`Combining the three laws gives the <b>ideal gas equation</b> (equation of state of a perfect gas): \[PV = nRT\] where n is the number of moles and R = 8.314 J mol⁻¹ K⁻¹ is the universal gas constant. A gas that obeys it exactly at all pressures and temperatures is called an <b>ideal</b> (perfect) gas.`,
      R`Writing \(n = N/N_A\) for N molecules and defining the <b>Boltzmann constant</b> \(k_B = R/N_A = 1.38\times10^{-23}\) J K⁻¹: \[PV = Nk_BT\quad\text{or}\quad P = nk_BT\ \ (n = N/V,\ \text{molecules per m}^3)\]`,
      R`With density \(\rho = \dfrac{nM}{V}\) (M = molar mass), the equation also reads \(P = \dfrac{\rho RT}{M}\).`,
      R`Real gases follow this equation closely only at low pressure and high temperature, where the molecules are far apart and their attractions and own size do not matter.`,
      { ex: { q: R`How many moles of gas are there in a 10 L cylinder at 2 atm and 300 K?`,
        steps: [R`\(n = \dfrac{PV}{RT} = \dfrac{2\times1.013\times10^5\times0.01}{8.314\times300}\).`], ans: R`≈ 0.81 mol` } },
      { ex: { q: R`Find the number of molecules per cubic metre in a gas at STP.`,
        steps: [R`\(n = \dfrac{P}{k_BT} = \dfrac{1.013\times10^5}{1.38\times10^{-23}\times273}\).`], ans: R`≈ 2.69 × 10²⁵ m⁻³ (Loschmidt's number)` } },
      { tip: R`For two states of the same gas, use \(\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}\) directly; you don't need R or n.` },
      { check: { q: R`If both P and T of a gas are doubled, what happens to its volume?`, ans: R`It stays the same (V ∝ T/P).` } }
    ] },

    { h: R`Dalton's law of partial pressures`, t: [0], blocks: [
      R`For a mixture of non-reacting ideal gases, the total pressure is the sum of the pressures each gas would exert if it filled the container alone (its <b>partial pressure</b>): \[P = p_1 + p_2 + p_3 + \dots\]`,
      { fig: figDalton, cap: R`Each gas in a mixture exerts its own pressure as if the others were not there.` },
      R`It follows from PV = nRT: \(P = (n_1 + n_2 + \dots)\dfrac{RT}{V}\). So each partial pressure is proportional to the number of moles: \(p_i = x_iP\), where \(x_i = n_i/n\) is the <b>mole fraction</b>.`,
      { ex: { q: R`A container holds 1 mol of N₂ and 3 mol of H₂ at a total pressure of 4 atm. Find the partial pressures.`,
        steps: [R`Mole fractions: 1/4 and 3/4.`, R`\(p_{N_2} = \frac14\times4\), \(p_{H_2} = \frac34\times4\).`], ans: R`1 atm and 3 atm` } },
      { check: { q: R`Why does Dalton's law need ideal gases?`, ans: R`It assumes the molecules of different gases do not attract each other, which is true only for ideal gases.` } }
    ] },

    { h: R`Work done in compressing a gas`, t: [1], blocks: [
      R`To compress a gas, we must push a piston against the gas pressure. The work done <b>on</b> the gas is \(W = -\int_{V_1}^{V_2}P\,dV\), which is positive when the volume decreases. Its value depends on how the compression is done:`,
      { points: [R`<b>Isothermal</b> (slowly, in contact with a reservoir): \(W_{on} = nRT\ln\dfrac{V_1}{V_2}\); the gas gives this energy out as heat and its temperature stays the same.`, R`<b>Adiabatic</b> (quickly, or insulated): \(W_{on} = \dfrac{nR(T_2 - T_1)}{\gamma - 1}\); all the work goes into internal energy, so the gas heats up.`, R`<b>At constant pressure</b>: \(W_{on} = P(V_1 - V_2)\).`] },
      { fig: figCompress, cap: R`The work done on the gas is the shaded area under the curve, between the final and initial volumes.` },
      { ex: { q: R`One mole of an ideal gas at 300 K is compressed isothermally to half its volume. How much work is done on it?`,
        steps: [R`\(W = nRT\ln2 = 1\times8.314\times300\times0.693\).`], ans: R`≈ 1729 J (all released as heat)` } },
      { check: { q: R`Is more work needed to halve a gas's volume isothermally or adiabatically?`, ans: R`Adiabatically: the pressure rises faster (the gas heats up), so the area under the steeper curve is larger.` } }
    ] },

    { h: R`Assumptions of the kinetic theory`, t: [2], blocks: [
      R`To explain the gas laws from molecular motion, we model an ideal gas with these assumptions:`,
      { points: [
        R`A gas consists of a very large number of identical molecules, which are tiny hard spheres; their own volume is negligible compared with the volume of the container.`,
        R`The molecules move randomly in all directions with a range of speeds, obeying Newton's laws.`,
        R`There are no forces between molecules except during collisions, so between collisions they move in straight lines with constant speed.`,
        R`Collisions with each other and with the walls are perfectly elastic (kinetic energy is conserved) and last for a negligible time.`,
        R`In equilibrium the molecules are spread uniformly through the container, and no direction is special.`
      ] },
      { note: R`Real gases break the first and third assumptions at high pressure (molecules crowd together, so their size matters) and at low temperature (attractions matter). That is when they stop obeying PV = nRT, and eventually liquefy.` },
      { check: { q: R`Which assumption fails when a gas is about to liquefy?`, ans: R`No intermolecular forces: attractions between molecules become important at low temperatures.` } }
    ] },

    { h: R`Pressure of an ideal gas`, t: [3], blocks: [
      R`Pressure is the result of countless molecules hitting the walls and bouncing back. Let us calculate it.`,
      { fig: figWall, cap: R`A molecule with x-velocity \(v_x\) hits wall A and rebounds with \(-v_x\), giving the wall momentum \(2mv_x\).` },
      { derive: R`Pressure from molecular collisions`, steps: [
        R`Take a cube of side L containing N molecules, each of mass m. A molecule with velocity component \(v_x\) hits wall A and bounces back elastically, so its momentum changes by \(2mv_x\); the wall receives momentum \(2mv_x\).`,
        R`It returns to wall A after travelling 2L in the x-direction, a time \(2L/v_x\). So it hits wall A \(v_x/2L\) times per second, and the average force it exerts is \(2mv_x\times\dfrac{v_x}{2L} = \dfrac{mv_x^2}{L}\).`,
        R`Adding over all N molecules: \(F = \dfrac{m}{L}\sum v_x^2 = \dfrac{mN}{L}\overline{v_x^2}\). Pressure \(P = \dfrac{F}{L^2} = \dfrac{mN}{V}\overline{v_x^2}\).`,
        R`No direction is special, so \(\overline{v_x^2} = \overline{v_y^2} = \overline{v_z^2} = \frac13\overline{v^2}\). Hence \[P = \frac13\,\frac{mN}{V}\,\overline{v^2} = \frac13\rho\,v_{rms}^2\] where \(\rho = mN/V\) is the density and \(v_{rms} = \sqrt{\overline{v^2}}\) is the root-mean-square speed.`
      ] },
      R`Writing \(PV = \frac13Nm\overline{v^2} = \frac23N\left(\frac12m\overline{v^2}\right)\): pressure is two-thirds of the translational kinetic energy per unit volume, \(P = \frac23E\) where E is the kinetic energy per unit volume.`,
      { ex: { q: R`Nitrogen at STP has density 1.25 kg/m³. Find the rms speed of its molecules.`,
        steps: [R`\(v_{rms} = \sqrt{\dfrac{3P}{\rho}} = \sqrt{\dfrac{3\times1.013\times10^5}{1.25}}\).`], ans: R`≈ 493 m/s, faster than sound` } },
      { check: { q: R`Why don't collisions between molecules affect the pressure calculation?`, ans: R`Elastic collisions between identical molecules just exchange momentum; the average \(\overline{v_x^2}\) of the whole gas is unchanged.` } }
    ] },

    { h: R`Kinetic interpretation of temperature`, t: [4], blocks: [
      R`Compare the kinetic-theory result \(PV = \frac23N\left(\frac12m\overline{v^2}\right)\) with \(PV = Nk_BT\). They match only if \[\frac12m\overline{v^2} = \frac32k_BT\] The <b>average translational kinetic energy of a molecule is proportional to the absolute temperature</b>, and does not depend on the type of gas, its pressure or volume.`,
      R`So temperature is a measure of the average kinetic energy of random molecular motion. At absolute zero, this classical motion would stop. For one mole, the total translational kinetic energy is \(\frac32RT\).`,
      R`The <b>Boltzmann constant</b> \(k_B = 1.38\times10^{-23}\) J K⁻¹ is the gas constant per molecule (\(R/N_A\)); it links energy at the molecular level to temperature.`,
      { ex: { q: R`Find the average translational kinetic energy of a gas molecule at 300 K, in joules and in electron-volts.`,
        steps: [R`\(\bar E = \frac32\times1.38\times10^{-23}\times300\).`, R`Divide by \(1.6\times10^{-19}\) J/eV.`], ans: R`≈ 6.2 × 10⁻²¹ J ≈ 0.039 eV` } },
      { ex: { q: R`A mixture of hydrogen and oxygen is at a uniform temperature. Compare the average kinetic energies of their molecules.`,
        steps: [R`Average KE depends only on T.`], ans: R`Equal: lighter H₂ molecules simply move faster` } },
      { check: { q: R`By what factor must the absolute temperature rise to double the average kinetic energy?`, ans: R`2 (KE ∝ T).` } }
    ] },

    { h: R`Speeds of gas molecules`, t: [5], blocks: [
      R`From \(\frac12m\overline{v^2} = \frac32k_BT\), the <b>root-mean-square speed</b> is \[v_{rms} = \sqrt{\frac{3k_BT}{m}} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3P}{\rho}}\] where M is the molar mass in kg/mol. Lighter molecules move faster at the same temperature, and \(v_{rms}\propto\sqrt T\).`,
      R`The molecules do not all move at the same speed. Maxwell worked out the distribution of speeds: a few are slow, a few very fast, and most are near the middle.`,
      { fig: figMaxwell, cap: R`The Maxwell speed distribution. At a higher temperature, the peak shifts to higher speeds and flattens; the area under each curve (the total number of molecules) is the same.` },
      R`Three different "typical" speeds are used:`,
      { table: { head: [R`Speed`, R`Formula`, R`Meaning`], rows: [
        [R`Most probable \(v_{mp}\)`, R`\(\sqrt{\dfrac{2RT}{M}}\)`, R`the peak of the distribution`],
        [R`Average \(v_{av}\)`, R`\(\sqrt{\dfrac{8RT}{\pi M}}\)`, R`the mean of the speeds`],
        [R`RMS \(v_{rms}\)`, R`\(\sqrt{\dfrac{3RT}{M}}\)`, R`the square root of the mean of the squared speeds`]] } },
      R`So \(v_{mp} : v_{av} : v_{rms} = \sqrt2 : \sqrt{8/\pi} : \sqrt3 \approx 1 : 1.13 : 1.22\), and always \(v_{mp} < v_{av} < v_{rms}\).`,
      { ex: { q: R`Find the rms, average and most probable speeds of oxygen molecules (M = 32 g/mol) at 300 K.`,
        steps: [R`\(v_{rms} = \sqrt{\dfrac{3\times8.314\times300}{0.032}}\).`, R`Then multiply by 1.596/1.732 and 1.414/1.732.`], ans: R`≈ 484 m/s, 446 m/s and 395 m/s` } },
      { ex: { q: R`At what temperature would the rms speed of hydrogen molecules equal the escape speed from the Earth, 11.2 km/s?`,
        steps: [R`\(T = \dfrac{Mv^2}{3R} = \dfrac{0.002\times(11200)^2}{3\times8.314}\).`], ans: R`≈ 1.0 × 10⁴ K` } },
      R`Even at ordinary temperatures, a small fraction of hydrogen and helium molecules in the tail of the distribution exceed the escape speed, so the Earth slowly loses them; that is why its atmosphere has almost no free hydrogen. The Moon, with an escape speed of only 2.4 km/s, has lost its atmosphere altogether.`,
      { adv: R`<b>Graham's law of effusion.</b> Gas leaking through a tiny hole escapes at a rate proportional to the average molecular speed, so \(\dfrac{r_1}{r_2} = \sqrt{\dfrac{M_2}{M_1}}\). Hydrogen effuses \(\sqrt{32/2} = 4\) times faster than oxygen. Uranium isotopes were first separated this way, using UF₆ gas.` },
      { mistake: R`Thinking that doubling the temperature doubles the speed. \(v\propto\sqrt T\), so you need 4 times the absolute temperature to double the speed.` },
      { check: { q: R`Arrange the three speeds in increasing order.`, ans: R`\(v_{mp} < v_{av} < v_{rms}\).` } }
    ] },

    { h: R`Degrees of freedom`, t: [6], blocks: [
      R`The number of <b>degrees of freedom</b> (f) of a molecule is the number of independent ways it can move and store energy, that is, the number of independent coordinates needed to describe its motion.`,
      { points: [
        R`<b>Translational:</b> every molecule can move along x, y and z, so it has 3 translational degrees of freedom.`,
        R`<b>Rotational:</b> a diatomic (or any linear) molecule can rotate about two axes perpendicular to its bond: 2 rotational degrees of freedom. Rotation about the bond itself has negligible moment of inertia and does not count. A non-linear molecule (H₂O, NH₃) can rotate about all three axes: 3 rotational degrees of freedom.`,
        R`<b>Vibrational:</b> the atoms of a molecule can vibrate along the bond like masses on a spring. Each vibrational mode has 2 degrees of freedom (kinetic and potential energy). These are "frozen" at room temperature for most light gases and only switch on at high temperatures.`
      ] },
      { fig: figDof, cap: R`A diatomic molecule moves along x, y and z (3 translational degrees of freedom) and rotates about the y and z axes (2 rotational).` },
      { table: { head: [R`Molecule`, R`Translational`, R`Rotational`, R`Total f (no vibration)`], rows: [
        [R`Monatomic (He, Ne, Ar)`, R`3`, R`0`, R`3`], [R`Diatomic or linear (N₂, O₂, CO₂)`, R`3`, R`2`, R`5`], [R`Non-linear polyatomic (H₂O, CH₄)`, R`3`, R`3`, R`6`]] } },
      { check: { q: R`How many degrees of freedom does a CO₂ molecule (linear) have at room temperature, ignoring vibrations?`, ans: R`5: 3 translational and 2 rotational.` } }
    ] },

    { h: R`Law of equipartition of energy`, t: [7], blocks: [
      R`The <b>law of equipartition of energy</b> says that in thermal equilibrium at temperature T, every degree of freedom of a molecule gets the same average energy, \(\frac12k_BT\) per molecule (for a vibrational mode, \(\frac12k_BT\) for its kinetic and \(\frac12k_BT\) for its potential energy, so \(k_BT\) in total).`,
      R`So a molecule with f degrees of freedom has average energy \(\frac f2k_BT\), and one mole of the gas has internal energy \[U = \frac f2RT\]`,
      { derive: R`Specific heats from equipartition`, steps: [
        R`\(C_v = \dfrac{1}{n}\dfrac{dU}{dT} = \dfrac f2R\).`,
        R`Mayer's relation: \(C_p = C_v + R = \left(\dfrac f2 + 1\right)R\).`,
        R`Ratio: \(\gamma = \dfrac{C_p}{C_v} = 1 + \dfrac2f\).`
      ] },
      { table: { head: [R`Gas`, R`f`, R`\(C_v\)`, R`\(C_p\)`, R`γ`], rows: [
        [R`Monatomic`, R`3`, R`\(\frac32R\)`, R`\(\frac52R\)`, R`1.67`],
        [R`Diatomic (rigid)`, R`5`, R`\(\frac52R\)`, R`\(\frac72R\)`, R`1.40`],
        [R`Diatomic with vibration`, R`7`, R`\(\frac72R\)`, R`\(\frac92R\)`, R`1.29`],
        [R`Non-linear polyatomic (rigid)`, R`6`, R`3R`, R`4R`, R`1.33`]] } },
      R`These predictions match experiment very well for monatomic gases and for diatomic gases at room temperature. At high temperatures, the specific heat of diatomic gases rises as vibrations switch on, something classical physics could not explain and quantum mechanics later did.`,
      R`<b>Solids:</b> each atom in a solid vibrates in 3 directions, with 6 degrees of freedom (kinetic plus potential for each). So \(U = 3RT\) per mole and the molar heat capacity is 3R ≈ 25 J mol⁻¹ K⁻¹ (the Dulong–Petit law), which most metals obey at room temperature.`,
      { ex: { q: R`Find the internal energy of 2 mol of oxygen at 300 K (ignore vibrations).`,
        steps: [R`\(U = n\dfrac52RT = 2\times2.5\times8.314\times300\).`], ans: R`≈ 12 471 J ≈ 12.5 kJ` } },
      { ex: { q: R`1 mol of helium is mixed with 1 mol of oxygen. Find γ for the mixture.`,
        steps: [R`\(C_v = \dfrac{1\times\frac32R + 1\times\frac52R}{2} = 2R\).`, R`\(C_p = C_v + R = 3R\), so γ = 3R/2R.`], ans: R`γ = 1.5` } },
      { tip: R`For any ideal gas, γ = 1 + 2/f. Remember the table by its denominators: f = 3, 5, 6 give γ = 5/3, 7/5, 4/3.` },
      { check: { q: R`What is the average energy of a molecule of a monatomic gas at temperature T?`, ans: R`\(\frac32k_BT\).` } }
    ] },

    { h: R`Mean free path`, t: [8], blocks: [
      R`Although gas molecules move at hundreds of metres per second, a smell takes seconds to cross a room. That is because each molecule keeps colliding with others, so it follows a random zigzag path.`,
      { fig: figMfp, cap: R`A molecule moves in straight lines between collisions. The average distance it travels between collisions is the mean free path.` },
      R`The <b>mean free path</b> λ is the average distance a molecule travels between two successive collisions.`,
      { derive: R`Mean free path`, steps: [
        R`Treat each molecule as a sphere of diameter d. Two molecules collide if their centres come within a distance d. So as one molecule moves a distance \(\ell\), it sweeps out a collision cylinder of volume \(\pi d^2\ell\).`,
        R`With n molecules per unit volume, it hits \(n\pi d^2\ell\) of them. One collision happens on average when \(n\pi d^2\ell = 1\), so \(\lambda = \dfrac{1}{n\pi d^2}\).`,
        R`Allowing for the motion of the other molecules adds a factor \(\sqrt2\): \[\lambda = \frac{1}{\sqrt2\,n\pi d^2} = \frac{k_BT}{\sqrt2\,\pi d^2P}\]`
      ] },
      R`So λ is larger at lower pressure (fewer molecules in the way) and for smaller molecules. The number of collisions per second is the <b>collision frequency</b> \(\nu = v_{av}/\lambda\).`,
      { ex: { q: R`Estimate the mean free path of air molecules (d ≈ 3 × 10⁻¹⁰ m) at 300 K and 1 atm, and the number of collisions per second (average speed ≈ 476 m/s).`,
        steps: [R`\[\lambda = \frac{1.38\times10^{-23}\times300}{1.414\times3.14\times(3\times10^{-10})^2\times1.013\times10^5}\]`, R`\(\nu = 476/\lambda\).`], ans: R`λ ≈ 1.0 × 10⁻⁷ m (about 300 molecular diameters); about 4.7 × 10⁹ collisions per second` } },
      { check: { q: R`How does the mean free path change if the pressure is halved at constant temperature?`, ans: R`It doubles (λ ∝ 1/P).` } }
    ] },

    { h: R`Avogadro's number`, t: [9], blocks: [
      R`A <b>mole</b> is the amount of substance containing exactly \(N_A = 6.022\times10^{23}\) particles. This number is <b>Avogadro's number</b> (the Avogadro constant, \(6.022\times10^{23}\) mol⁻¹). One mole of a substance has a mass in grams equal to its molecular mass: 1 mol of water is 18 g.`,
      R`It connects the microscopic and macroscopic worlds: \(R = N_Ak_B\) and \(M = N_Am\) (molar mass = Avogadro's number × mass of one molecule).`,
      R`Avogadro's number has been measured in many independent ways: from Brownian motion (Perrin), from electrolysis (the Faraday constant divided by the electron's charge, \(F/e\)), and today from counting atoms in perfect silicon spheres using X-rays. All agree, which is one of the strongest proofs that atoms are real.`,
      { ex: { q: R`How many molecules are there in 1 g of water?`,
        steps: [R`Moles = 1/18.`, R`Molecules = \(\dfrac{6.022\times10^{23}}{18}\).`], ans: R`≈ 3.3 × 10²² molecules` } },
      { ex: { q: R`How many molecules are there in a 0.5 L breath of air at STP?`,
        steps: [R`At STP, 1 mol occupies 22.4 L, so moles = 0.5/22.4.`, R`Molecules = \(\dfrac{0.5}{22.4}\times6.022\times10^{23}\).`], ans: R`≈ 1.3 × 10²² molecules` } },
      { check: { q: R`What is the mass of one oxygen molecule (M = 32 g/mol)?`, ans: R`\(\dfrac{0.032}{6.022\times10^{23}} \approx 5.3\times10^{-26}\) kg.` } }
    ] }
  ],
  summary: [
    R`Matter is made of molecules; gas molecules are far apart and move randomly (evidence: Brownian motion).`,
    R`Boyle (PV const), Charles (V/T const), Gay-Lussac (P/T const), Avogadro (equal volumes contain equal numbers of molecules). Combined: \(PV = nRT = Nk_BT\), \(P = \rho RT/M\).`,
    R`Dalton: \(P = p_1 + p_2 + \dots\), with \(p_i = x_iP\).`,
    R`Work to compress isothermally: \(nRT\ln(V_1/V_2)\).`,
    R`Kinetic theory assumptions: point molecules, random motion, no forces except in elastic collisions.`,
    R`Pressure: \(P = \frac13\rho v_{rms}^2 = \frac23E\) (E = KE per unit volume).`,
    R`Temperature: average translational KE per molecule = \(\frac32k_BT\); \(k_B = R/N_A\).`,
    R`Speeds: \(v_{rms} = \sqrt{3RT/M}\), \(v_{av} = \sqrt{8RT/\pi M}\), \(v_{mp} = \sqrt{2RT/M}\); ratio ≈ 1.22 : 1.13 : 1 (rms : av : mp).`,
    R`Degrees of freedom f: 3 (monatomic), 5 (diatomic), 6 (non-linear), plus 2 per vibrational mode.`,
    R`Equipartition: \(\frac12k_BT\) per degree of freedom; \(U = \frac f2RT\), \(C_v = \frac f2R\), \(\gamma = 1 + \frac2f\).`,
    R`Mean free path \(\lambda = \dfrac{1}{\sqrt2\,n\pi d^2} = \dfrac{k_BT}{\sqrt2\,\pi d^2P}\).`,
    R`Avogadro's number \(N_A = 6.022\times10^{23}\) mol⁻¹; \(R = N_Ak_B\), \(M = N_Am\).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §2.1 Molecular Model of an Ideal Gas`, url: 'https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas' },
    { t: R`OpenStax University Physics Vol. 2, §2.2 Pressure, Temperature, and RMS Speed`, url: 'https://openstax.org/books/university-physics-volume-2/pages/2-2-pressure-temperature-and-rms-speed' },
    { t: R`OpenStax University Physics Vol. 2, §2.3 Heat Capacity and Equipartition of Energy`, url: 'https://openstax.org/books/university-physics-volume-2/pages/2-3-heat-capacity-and-equipartition-of-energy' },
    { t: R`OpenStax University Physics Vol. 2, §2.4 Distribution of Molecular Speeds`, url: 'https://openstax.org/books/university-physics-volume-2/pages/2-4-distribution-of-molecular-speeds' },
    { t: R`Wikipedia: Mean free path`, url: 'https://en.wikipedia.org/wiki/Mean_free_path' },
    { t: R`Wikipedia: Equipartition theorem`, url: 'https://en.wikipedia.org/wiki/Equipartition_theorem' },
    { t: R`Wikipedia: Avogadro constant`, url: 'https://en.wikipedia.org/wiki/Avogadro_constant' }
  ]
});
})();
