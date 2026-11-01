// Book chapter: Experimental Skills (the JEE practical syllabus). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- figures ----------
var figVernier = (function () {
  var p = [D.rect(20, 40, 380, 30, { color: 'm', fill: 'soft', w: 1.2 }), D.text(30, 30, 'main scale (mm)', { size: 11, math: false, color: 'm', anchor: 'start' })];
  for (var k = 0; k <= 36; k++) { var x = 30 + k * 10; p.push(D.line(x, 70, x, k % 10 === 0 ? 50 : k % 5 === 0 ? 56 : 61, { color: 'k', w: 1 })); if (k % 10 === 0) p.push(D.text(x, 46, String(2 + k / 10), { size: 10, math: false })); }
  var v0 = 30 + 3.6 * 10 + 0;
  p.push(D.rect(v0 - 4, 70, 100, 28, { color: 'b', fill: 'soft', w: 1.2 }), D.text(v0 + 50, 112, 'vernier scale (10 divisions = 9 mm)', { size: 11, math: false, color: 'b' }));
  for (k = 0; k <= 10; k++) { var xv = v0 + k * 9; p.push(D.line(xv, 70, xv, k % 5 === 0 ? 92 : 84, { color: k === 6 ? 'r' : 'b', w: k === 6 ? 2 : 1 })); }
  p.push(D.text(v0, 104, '0', { size: 10, math: false, color: 'b' }), D.text(v0 + 54, 64, '6th line coincides', { size: 10, math: false, color: 'r' }));
  return D.svg(420, 125, p, 'Reading a vernier calliper');
})();

var figScrew = D.svg(420, 150, [
  D.rect(30, 60, 60, 30, { color: 'm', fill: 'soft', w: 1.4 }), D.text(60, 108, 'anvil', { size: 11, math: false, color: 'm' }),
  D.rect(120, 68, 40, 14, { color: 'o', fill: 'soft', w: 1.2 }), D.text(140, 50, 'object', { size: 11, math: false, color: 'o' }),
  D.rect(160, 66, 50, 18, { color: 'm', fill: 'soft', w: 1.2 }), D.text(185, 108, 'spindle', { size: 11, math: false, color: 'm' }),
  D.rect(210, 62, 100, 26, { color: 'k', fill: 'soft', w: 1.4 }), D.line(210, 75, 290, 75, { color: 'k', w: 1 }),
  (function () { var s = ''; for (var x = 214; x <= 290; x += 6) s += D.line(x, 75, x, x % 12 === 2 ? 68 : 82, { color: 'k', w: 1 }); return s; })(),
  D.text(260, 54, 'sleeve: main scale', { size: 11, math: false }),
  D.rect(290, 52, 70, 46, { color: 'b', fill: 'soft', w: 1.6, r: 4 }), (function () { var s = ''; for (var y = 56; y <= 94; y += 6) s += D.line(290, y, 300, y, { color: 'b', w: 1 }); return s; })(), D.text(330, 112, 'thimble: circular scale', { size: 11, math: false, color: 'b' }),
  D.rect(360, 64, 40, 22, { color: 'm', fill: 'soft', w: 1.2 }), D.text(380, 52, 'ratchet', { size: 11, math: false, color: 'm' })
], 'Screw gauge');

var figT2 = D.plot({
  w: 360, h: 200, x: [0, 1.2], y: [0, 5], xlabel: 'L (m)', ylabel: 'T² (s²)', mathLabels: false, xticks: [[0.4, '0.4'], [0.8, '0.8']], yticks: [[2, '2'], [4, '4']],
  fns: [{ f: function (l) { return 4 * PI * PI * l / 9.8; }, from: 0, to: 1.15, color: 'c', label: 'slope = 4π²/g', lx: 0.55, ly: 3.4, math: false }],
  pts: [[0.2, 0.83], [0.4, 1.58], [0.6, 2.45], [0.8, 3.2], [1.0, 4.05]].map(function (q) { return { x: q[0], y: q[1], color: 'r' }; }),
  label: 'T squared against length for a simple pendulum'
});

var figAmp = D.plot({
  w: 360, h: 190, x: [0, 10], y: [0, 1.15], xlabel: 't', ylabel: 'A²', xticks: [], yticks: [],
  fns: [{ f: function (t) { return Math.exp(-0.3 * t); }, color: 'o' }],
  texts: [{ x: 5, y: 0.6, s: 'A² ∝ e^{−bt/m}: energy dissipated', size: 11, color: 'o' }],
  label: 'Square of amplitude against time for a damped pendulum'
});

var figMoments = D.svg(420, 130, [
  D.rect(20, 50, 380, 12, { color: 'o', fill: 'soft', w: 1.4 }), D.poly([[210, 62], [198, 90], [222, 90]], { closed: true, color: 'k', fill: 'soft', w: 1.4 }), D.text(210, 104, 'knife edge at 50 cm (centre of gravity)', { size: 11, math: false }),
  D.line(80, 62, 80, 80, { w: 1.2 }), D.rect(68, 80, 24, 20, { color: 'b', fill: 'soft', w: 1.4 }), D.text(80, 114, 'known 50 g at 20 cm', { size: 11, color: 'b', math: false }),
  D.line(370, 62, 370, 80, { w: 1.2 }), D.rect(358, 80, 24, 20, { color: 'r', fill: 'soft', w: 1.4 }), D.text(370, 114, 'unknown m at 90 cm', { size: 11, color: 'r', math: false }),
  D.arrow(80, 36, 210, 36, { color: 'm', w: 1, head: 5, both: true, label: '30 cm', ly: -8, math: false, size: 11 }), D.arrow(210, 36, 370, 36, { color: 'm', w: 1, head: 5, both: true, label: '40 cm', ly: -8, math: false, size: 11 })
], 'Finding a mass with a metre scale and the principle of moments');

var figExt = D.plot({
  w: 340, h: 190, x: [0, 5], y: [0, 5], xlabel: 'load (kg)', ylabel: 'extension (mm)', mathLabels: false, xticks: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], yticks: [[1, '0.5'], [2, '1.0'], [3, '1.5'], [4, '2.0']],
  fns: [{ f: function (m) { return m; }, from: 0, to: 4.6, color: 'c' }], pts: [[1, 1.02], [2, 1.98], [3, 3.05], [4, 3.96]].map(function (q) { return { x: q[0], y: q[1], color: 'r' }; }),
  label: "Extension against load in Searle's experiment"
});

var figCap = D.svg(300, 200, [
  D.rect(20, 120, 260, 70, { color: 'b', fill: 'soft', w: 0.01 }), D.line(20, 120, 280, 120, { color: 'b', w: 1.4 }), D.path('M20 120 L20 190 L280 190 L280 120', { color: 'k', w: 1.6 }),
  D.line(140, 20, 140, 170, { color: 'k', w: 1.6 }), D.line(156, 20, 156, 170, { color: 'k', w: 1.6 }), D.rect(141, 50, 14, 120, { color: 'b', fill: 'soft', w: 0.01 }),
  D.path('M141 50 Q 148 58 155 50', { color: 'b', w: 1.4 }), D.arrow(200, 120, 200, 52, { color: 'm', w: 1, head: 6, both: true }), D.text(208, 86, 'h', { math: true, anchor: 'start' }),
  D.line(156, 51, 200, 51, { color: 'm', w: 0.8, dash: '3 3' }), D.text(110, 30, 'capillary tube, radius r', { size: 11, math: false, anchor: 'end' })
], 'Capillary rise of water');

var figResTube = D.svg(380, 210, [
  D.path('M150 20 L150 195 L190 195 L190 20', { color: 'k', w: 1.8 }), D.rect(151, 120, 38, 74, { color: 'b', fill: 'soft', w: 0.01 }), D.line(150, 120, 190, 120, { color: 'b', w: 1.4 }),
  D.path('M160 6 L160 -2 M180 6 L180 -2', { color: 'm', w: 2 }), D.path('M155 12 C 155 0, 185 0, 185 12', { color: 'g', w: 2 }), D.text(220, 10, 'tuning fork (ν)', { size: 11, color: 'g', math: false, anchor: 'start' }),
  D.arrow(120, 20, 120, 120, { color: 'm', w: 1, head: 6, both: true }), D.text(112, 70, 'l', { math: true, anchor: 'end' }),
  D.text(230, 120, 'water level (adjustable)', { size: 11, color: 'b', math: false, anchor: 'start' }),
  D.path('M170 20 C 140 50, 140 90, 170 120', { color: 'o', w: 1.2, dash: '4 3' }), D.path('M170 20 C 200 50, 200 90, 170 120', { color: 'o', w: 1.2, dash: '4 3' }),
  D.text(230, 60, 'first resonance: l₁ + e = λ/4', { size: 11, color: 'o', math: false, anchor: 'start' }), D.text(230, 78, 'second: l₂ + e = 3λ/4', { size: 11, color: 'o', math: false, anchor: 'start' })
], 'Resonance tube');

var figOhm = D.svg(360, 190, [
  D.cell(40, 40, 120, 40, { cells: 2, label: 'battery', math: false, size: 11 }), D.line(120, 40, 150, 40, { w: 1.8 }), D.meter(150, 40, 220, 40, { s: 'A' }), D.line(220, 40, 320, 40, { w: 1.8 }),
  D.line(320, 40, 320, 120, { w: 1.8 }), D.res(320, 120, 200, 120, { label: 'wire R', math: false, ly: 22, size: 11 }), D.line(200, 120, 40, 120, { w: 1.8 }), D.line(40, 120, 40, 40, { w: 1.8 }),
  D.res(140, 120, 70, 120, { label: 'rheostat', math: false, ly: 22, size: 11 }),
  D.line(300, 120, 300, 165, { w: 1.4 }), D.line(220, 120, 220, 165, { w: 1.4 }), D.meter(220, 165, 300, 165, { s: 'V' }), D.dot(300, 120, { r: 3 }), D.dot(220, 120, { r: 3 })
], "Circuit for verifying Ohm's law");

var figHalfDef = D.svg(360, 170, [
  D.cell(30, 40, 90, 40, { label: 'E', ly: -18 }), D.line(90, 40, 110, 40, { w: 1.8 }), D.res(110, 40, 210, 40, { label: 'R (high, resistance box)', math: false, ly: -18, size: 11 }), D.line(210, 40, 250, 40, { w: 1.8 }),
  D.line(250, 40, 250, 70, { w: 1.8 }), D.meter(250, 70, 250, 130, { s: 'G', lx: 0 }), D.line(250, 130, 250, 150, { w: 1.8 }), D.line(250, 150, 30, 150, { w: 1.8 }), D.line(30, 150, 30, 40, { w: 1.8 }),
  D.line(250, 60, 320, 60, { w: 1.4, dash: '4 3' }), D.res(320, 60, 320, 140, { label: 'S (shunt)', math: false, lx: 30, ly: 0, size: 11 }), D.line(320, 140, 250, 140, { w: 1.4, dash: '4 3' })
], 'Half-deflection method for galvanometer resistance');

var figUV = D.plot({
  w: 340, h: 210, x: [0, 6], y: [0, 6], xlabel: '1/|u|', ylabel: '1/v', mathLabels: false, xticks: [[5, '1/f']], yticks: [[5, '1/f']],
  fns: [{ f: function (x) { return 5 - x; }, from: 0, to: 5, color: 'c' }], pts: [[1, 4.05], [2, 2.95], [3, 2.02], [4, 0.97]].map(function (q) { return { x: q[0], y: q[1], color: 'r' }; }),
  label: 'Convex lens: 1/v against 1/u gives intercepts 1/f on both axes'
});

var figPrismDI = D.plot({
  w: 340, h: 190, x: [25, 85], y: [33, 50], xlabel: 'i', ylabel: 'δ', xticks: [[48.6, 'i = e']], yticks: [[37.2, 'δ_m']], noOrigin: true,
  fns: [{ f: function (i) { var d = PI / 180, r1 = Math.asin(Math.sin(i * d) / 1.5) / d, s = 1.5 * Math.sin((60 - r1) * d); return s >= 1 ? NaN : i + Math.asin(s) / d - 60; }, from: 28, to: 85, color: 'c' }],
  guides: [[48.6, 37.2]], label: 'Angle of deviation against angle of incidence'
});

var figTravel = D.svg(380, 200, [
  D.rect(20, 160, 340, 12, { color: 'm', fill: 'soft', w: 1 }), D.text(190, 188, 'paper with an ink mark', { size: 11, math: false, color: 'm' }), D.dot(110, 160, { color: 'r', r: 4 }),
  D.rect(70, 110, 80, 50, { color: 'c', fill: 'soft', w: 1.6 }), D.text(110, 100, 'glass slab', { size: 11, math: false, color: 'c' }), D.dot(110, 136, { color: 'r', r: 3, open: true }),
  D.line(240, 160, 240, 30, { color: 'k', w: 1.6 }), D.text(260, 36, 'vertical scale of the microscope', { size: 11, math: false, anchor: 'start' }),
  D.line(236, 160, 300, 160, { color: 'r', w: 1, dash: '3 3' }), D.text(306, 160, 'R₁: mark directly', { size: 11, math: false, anchor: 'start', color: 'r' }),
  D.line(150, 136, 300, 136, { color: 'r', w: 1, dash: '3 3' }), D.text(306, 136, 'R₂: mark through slab', { size: 11, math: false, anchor: 'start', color: 'r' }),
  D.line(150, 110, 300, 110, { color: 'g', w: 1, dash: '3 3' }), D.text(306, 110, 'R₃: top of slab', { size: 11, math: false, anchor: 'start', color: 'g' })
], 'Refractive index with a travelling microscope');

var figDiodeCkt = D.svg(380, 180, [
  D.cell(30, 40, 90, 40, { label: 'battery', math: false, size: 11, ly: -18 }), D.res(90, 40, 170, 40, { label: 'rheostat', math: false, size: 11, ly: -18 }), D.meter(170, 40, 230, 40, { s: 'mA' }),
  D.line(230, 40, 270, 40, { w: 1.8 }), D.line(270, 40, 270, 70, { w: 1.8 }),
  D.line(270, 70, 270, 92, { w: 1.8 }), D.poly([[260, 92], [280, 92], [270, 110]], { closed: true, color: 'k', fill: 'soft', w: 1.8 }), D.line(258, 110, 282, 110, { w: 2.4 }), D.line(270, 110, 270, 140, { w: 1.8 }),
  D.line(270, 140, 270, 150, { w: 1.8 }), D.line(270, 150, 30, 150, { w: 1.8 }), D.line(30, 150, 30, 40, { w: 1.8 }), D.text(290, 101, 'diode', { size: 11, math: false, anchor: 'start' }),
  D.line(270, 70, 340, 70, { w: 1.4 }), D.line(270, 140, 340, 140, { w: 1.4 }), D.meter(340, 70, 340, 140, { s: 'V' }), D.text(200, 172, 'forward bias (reverse the diode and use a μA meter for reverse bias)', { size: 10, math: false, color: 'm' })
], 'Circuit for the I-V characteristic of a diode');

// ---------- chapter text ----------
JEE.book('physics', 'experimental-skills', {
  intro: [
    R`Physics is an experimental science, and JEE tests your familiarity with the standard laboratory experiments: what each measures, the principle and formula behind it, how to read the instruments, the graph to plot and the main sources of error.`,
    R`This chapter goes through every experiment in the syllabus: the vernier callipers and screw gauge, the pendulum, moments, Young's modulus, surface tension, viscosity, the resonance tube, specific heat, the metre bridge and post office box, Ohm's law, the galvanometer, focal lengths, the prism, the travelling microscope and diode characteristics. Each comes with a worked reading. (For least count, significant figures and error analysis, see the Units and Measurements chapter.)`
  ],
  sections: [
    { h: R`Vernier callipers`, t: [0], blocks: [
      R`A <b>vernier callipers</b> measures lengths to 0.1 mm (or 0.02 mm). A sliding <b>vernier scale</b> has n divisions equal to (n − 1) divisions of the <b>main scale</b>. Its <b>least count</b> (vernier constant) is \[\text{LC} = 1\text{ MSD} - 1\text{ VSD} = \frac{1\text{ MSD}}{n}\] For 10 vernier divisions = 9 mm, LC = 0.1 mm = 0.01 cm.`,
      { fig: figVernier, cap: R`The vernier zero lies just past 2.3 cm on the main scale, and the 6th vernier line coincides with a main-scale line: reading = 2.3 + 6 × 0.01 = 2.36 cm.` },
      R`<b>Reading</b> = main-scale reading (just before the vernier zero) + (coinciding vernier division × LC). <b>Zero error:</b> if the vernier zero lies to the right of the main zero when the jaws are closed, the zero error is positive and must be subtracted; to the left, negative (subtracting it adds its size). Corrected reading = observed reading − zero error.`,
      R`<b>Uses:</b> the outer jaws measure external diameters, the inner jaws internal diameters (of a beaker or ring), and the thin strip at the end measures depth.`,
      { ex: { q: R`A vernier (LC 0.01 cm) reads 2.36 cm. With the jaws closed, the vernier zero was 2 divisions to the right of the main zero. Find the correct length.`,
        steps: [R`Zero error = +2 × 0.01 = +0.02 cm.`, R`Correct reading = 2.36 − 0.02.`], ans: R`2.34 cm` } },
      { check: { q: R`A vernier has 20 divisions equal to 19 mm. What is its least count?`, ans: R`1/20 mm = 0.05 mm.` } }
    ] },

    { h: R`Screw gauge`, t: [1], blocks: [
      R`A <b>screw gauge</b> (micrometer) measures small thicknesses and wire diameters to 0.01 mm. Turning the thimble once moves the spindle forward by the <b>pitch</b> p. With N divisions on the circular scale, \[\text{LC} = \frac{\text{pitch}}{N}\] A pitch of 0.5 mm with 50 divisions gives LC = 0.01 mm.`,
      { fig: figScrew, cap: R`The object is gripped between the anvil and spindle, using the ratchet so it is not over-tightened. Read the sleeve scale and the circular scale.` },
      R`<b>Reading</b> = main-scale reading + (circular-scale division on the line × LC). <b>Zero error:</b> with the faces touching, if the circular zero is below the reference line, the error is positive; above it, negative. <b>Backlash error</b> (play in the screw) is avoided by always turning the screw in the same direction.`,
      { ex: { q: R`A screw gauge (pitch 0.5 mm, 50 divisions) shows main scale 3.5 mm and circular division 27. The zero error is −0.03 mm. Find the diameter of the wire.`,
        steps: [R`LC = 0.01 mm. Observed = 3.5 + 27 × 0.01 = 3.77 mm.`, R`Corrected = 3.77 − (−0.03).`], ans: R`3.80 mm` } },
      { check: { q: R`Why is a ratchet provided on a screw gauge?`, ans: R`To apply the same gentle pressure every time, so the object is not squeezed or the screw damaged.` } }
    ] },

    { h: R`Simple pendulum`, t: [2], blocks: [
      { adv: R`<b>Determining g.</b> Time 20 or more oscillations for each of several lengths L (measured from the point of suspension to the centre of the bob), keeping the amplitude small (< 10°). Since \(T = 2\pi\sqrt{L/g}\), plot \(T^2\) against L: a straight line through the origin with slope \(4\pi^2/g\), so \(g = 4\pi^2/\text{slope}\).` },
      { fig: figT2, cap: R`T² against L is a straight line through the origin; g = 4π²/slope.` },
      { ex: { q: R`A 1.00 m pendulum makes 20 oscillations in 40.2 s. Find g.`,
        steps: [R`T = 40.2/20 = 2.01 s.`, R`\(g = \dfrac{4\pi^2L}{T^2} = \dfrac{4\pi^2\times1}{2.01^2}\).`], ans: R`≈ 9.77 m/s²` } },
      R`<b>Dissipation of energy:</b> a pendulum's swings slowly die out because of air resistance. Measure the amplitude A at regular time intervals and plot \(A^2\) (proportional to the energy) against time. The graph is an exponential decay, and \(\ln A^2\) against t is a straight line whose slope gives the damping.`,
      { fig: figAmp, cap: R`The square of the amplitude (proportional to the energy) decreases exponentially with time.` },
      { check: { q: R`Why time 20 oscillations rather than one?`, ans: R`The reaction-time error is spread over many oscillations, so the percentage error in T becomes 20 times smaller.` } }
    ] },

    { h: R`Metre scale and the principle of moments`, t: [3], blocks: [
      R`<b>Principle of moments:</b> a body is in rotational equilibrium when the sum of the clockwise moments about a pivot equals the sum of the anticlockwise moments. First balance the metre scale on a knife edge to find its centre of gravity. Then hang a known mass on one side and the unknown on the other, and adjust their positions until the scale balances again.`,
      { fig: figMoments, cap: R`With the scale balanced at its centre of gravity, the moments of the two masses about the knife edge must be equal.` },
      { ex: { q: R`A metre scale balances at 50 cm. A 50 g mass at the 20 cm mark balances an unknown mass at the 90 cm mark. Find the unknown mass.`,
        steps: [R`50 × (50 − 20) = m × (90 − 50).`], ans: R`m = 37.5 g` } },
      { check: { q: R`Why is the scale first balanced without any masses?`, ans: R`To find its centre of gravity, so that the weight of the scale itself has no moment about the pivot.` } }
    ] },

    { h: R`Young's modulus of a wire (Searle's method)`, t: [4], blocks: [
      R`Two identical long wires hang from the same support: a reference wire and the experimental wire. A spirit level connects them, and a micrometer screw measures how far the experimental wire stretches as loads are added (the reference wire cancels effects of temperature and support sagging).`,
      R`\[Y = \frac{\text{stress}}{\text{strain}} = \frac{MgL}{\pi r^2\,\Delta L}\] Plot extension ΔL against load M: a straight line (within the elastic limit) with slope \(\dfrac{gL}{\pi r^2Y}\). Measure the diameter with a screw gauge at several places, since r appears squared and is the main source of error.`,
      { fig: figExt, cap: R`Extension is proportional to load: Hooke's law.` },
      { ex: { q: R`A wire 2 m long and 0.5 mm in diameter stretches 1.0 mm under a 2 kg load. Find Young's modulus.`,
        steps: [R`\(Y = \dfrac{2\times9.8\times2}{\pi(0.25\times10^{-3})^2\times10^{-3}}\).`], ans: R`≈ 2.0 × 10¹¹ N/m² (steel)` } },
      { check: { q: R`Why is a long, thin wire used?`, ans: R`To make the extension large enough to measure accurately (ΔL ∝ L/r²).` } }
    ] },

    { h: R`Surface tension by capillary rise`, t: [5], blocks: [
      R`Water rises in a narrow clean glass tube because of surface tension. Measuring the rise h with a travelling microscope and the radius r of the bore, \[T = \frac{rh\rho g}{2\cos\theta}\approx\frac{rh\rho g}{2}\] (θ ≈ 0 for clean water and glass).`,
      { fig: figCap, cap: R`The rise h is measured from the flat water surface to the bottom of the meniscus.` },
      { ex: { q: R`Water rises 5.9 cm in a capillary of radius 0.25 mm. Find the surface tension of water.`,
        steps: [R`\(T = \dfrac{0.25\times10^{-3}\times0.059\times1000\times9.8}{2}\).`], ans: R`≈ 0.072 N/m` } },
      R`<b>Effect of detergent:</b> adding detergent lowers the surface tension of water, so the capillary rise decreases. That is also why detergents help water wet and penetrate greasy cloth.`,
      { check: { q: R`If the tube is narrower, will the rise be higher or lower?`, ans: R`Higher (h ∝ 1/r).` } }
    ] },

    { h: R`Viscosity by terminal velocity`, t: [6], blocks: [
      R`Small steel balls are dropped into a tall jar of a viscous liquid (glycerine or castor oil). After falling a short distance they reach a steady <b>terminal velocity</b> v, found by timing the fall between two marks well below the surface. By Stokes' law, \[\eta = \frac{2r^2(\rho - \sigma)g}{9v}\] where ρ is the density of the ball and σ that of the liquid.`,
      { ex: { q: R`A steel ball of radius 1 mm (ρ = 7800 kg/m³) falls through glycerine (σ = 1260 kg/m³) at a terminal speed of 1.0 cm/s. Find the viscosity of glycerine.`,
        steps: [R`\(\eta = \dfrac{2\times(10^{-3})^2\times6540\times9.8}{9\times0.01}\).`], ans: R`≈ 1.4 Pa s` } },
      { points: [R`The upper mark must be far enough down that the ball has reached terminal velocity.`, R`The jar should be wide, so the walls do not slow the ball.`, R`Temperature must be noted, since viscosity falls sharply as it rises.`] },
      { check: { q: R`How does the terminal velocity depend on the ball's radius?`, ans: R`v ∝ r²: doubling the radius quadruples it.` } }
    ] },

    { h: R`Speed of sound with a resonance tube`, t: [7], blocks: [
      R`A vibrating tuning fork of known frequency ν is held over the open end of a tube whose water level can be lowered. Resonance (a loud sound) is heard when the air column length matches a natural frequency of the closed pipe: first at \(l_1\) and again at \(l_2\).`,
      { fig: figResTube, cap: R`At the first resonance, the air column (plus the end correction e) is a quarter wavelength; at the second, three quarters.` },
      R`\(l_1 + e = \dfrac\lambda4\) and \(l_2 + e = \dfrac{3\lambda}4\). Subtracting removes the end correction: \[v = \nu\lambda = 2\nu(l_2 - l_1),\qquad e = \frac{l_2 - 3l_1}{2}\]`,
      { ex: { q: R`With a 512 Hz fork, resonances occur at 16.0 cm and 49.5 cm. Find the speed of sound and the end correction.`,
        steps: [R`\(v = 2\times512\times(0.495 - 0.160)\).`, R`\(e = (49.5 - 48.0)/2\) cm.`], ans: R`≈ 343 m/s; 0.75 cm` } },
      { check: { q: R`Why use the difference of two resonance lengths?`, ans: R`The unknown end correction cancels out.` } }
    ] },

    { h: R`Specific heat capacity by the method of mixtures`, t: [8], blocks: [
      R`A hot body is mixed with a cold one in an insulated <b>calorimeter</b>; heat lost by the hot body = heat gained by the cold body and the calorimeter.`,
      { points: [R`<b>Solid:</b> heat the solid in a steam bath (to about 100 °C) and drop it quickly into a known mass of water in the calorimeter; record the highest final temperature.`, R`<b>Liquid:</b> drop a hot solid of known specific heat into the liquid (or heat the liquid electrically and compare with water).`] },
      R`For a solid of mass m at \(T_1\) dropped into water of mass \(m_w\) in a calorimeter of mass \(m_c\), both at \(T_2\), reaching T: \[mc(T_1 - T) = (m_wc_w + m_cc_c)(T - T_2)\]`,
      { ex: { q: R`A 100 g metal piece at 100 °C is dropped into 200 g of water at 20 °C in a 50 g copper calorimeter (c = 390 J kg⁻¹ K⁻¹). The final temperature is 24 °C. Find the specific heat of the metal.`,
        steps: [R`Heat gained = (0.2 × 4186 + 0.05 × 390) × 4 ≈ 3427 J.`, R`\(c = \dfrac{3427}{0.1\times76}\).`], ans: R`≈ 451 J kg⁻¹ K⁻¹ (iron)` } },
      { check: { q: R`What is the main source of error, and how is it reduced?`, ans: R`Heat lost to the surroundings, reduced by insulating the calorimeter, transferring the solid quickly and stirring.` } }
    ] },

    { h: R`Resistivity using a metre bridge and post office box`, t: [9], blocks: [
      R`With a known resistance R in one gap and the wire (resistance S) in the other, find the balance length l. Then \(S = R\dfrac{100 - l}{l}\) and \[\rho = \frac{S\pi d^2}{4L}\] where L is the length and d the diameter (screw gauge) of the wire. Repeat with R and S interchanged and average, to cancel end errors. See the Current Electricity chapter for the theory and a full diagram.`,
      { ex: { q: R`With 4 Ω in the left gap, balance is at 40.0 cm. The wire is 1.00 m long with diameter 0.50 mm. Find its resistivity.`,
        steps: [R`\(S = 4\times\dfrac{60}{40} = 6\) Ω.`, R`\(\rho = \dfrac{6\times\pi\times(0.5\times10^{-3})^2}{4\times1}\).`], ans: R`≈ 1.2 × 10⁻⁶ Ω m` } },
      { adv: R`<b>Post office box:</b> set the ratio arms P and Q (10:10, then 100:10, then 1000:10), and adjust R until the galvanometer deflection reverses between two values R and R + 1. Then S lies between \(R\dfrac QP\) and \((R + 1)\dfrac QP\). With Q/P = 1/100, S is found to 0.01 Ω. Always press the battery key before the galvanometer key.` },
      { check: { q: R`Why is the balance point kept near the middle of the metre bridge wire?`, ans: R`The bridge is most sensitive there, and the percentage error from end resistances is smallest.` } }
    ] },

    { h: R`Ohm's law: resistance with a voltmeter and ammeter`, t: [10], blocks: [
      R`Connect the wire in series with an ammeter, a rheostat and a battery, with a voltmeter across the wire. Vary the current with the rheostat and record pairs of V and I.`,
      { fig: figOhm, cap: R`Circuit for Ohm's law: the ammeter in series, the voltmeter in parallel with the wire, and a rheostat to vary the current.` },
      R`A graph of V against I is a straight line through the origin; its slope is R. Keep the current small so the wire does not heat up (which would raise its resistance).`,
      { ex: { q: R`Readings: (0.10 A, 0.50 V), (0.20 A, 1.00 V), (0.30 A, 1.50 V), (0.40 A, 2.00 V). Find R.`,
        steps: [R`Slope = ΔV/ΔI = 1.50/0.30.`], ans: R`5.0 Ω` } },
      { check: { q: R`If the V–I graph curves upward at high currents, what is happening?`, ans: R`The wire is heating up and its resistance increasing.` } }
    ] },

    { h: R`Galvanometer: resistance and figure of merit`, t: [11], blocks: [
      R`<b>Half-deflection method:</b> connect the galvanometer G in series with a cell E and a high resistance R. Note the deflection θ. Now connect a shunt S across G and adjust it until the deflection halves to θ/2. If R ≫ G, the current through the circuit hardly changes, so half of it flows through S, giving \[G = \frac{RS}{R - S}\approx S\]`,
      { fig: figHalfDef, cap: R`Half-deflection method: a shunt across the galvanometer is adjusted until the deflection halves.` },
      R`<b>Figure of merit</b> k: the current per division of deflection, \(k = \dfrac{I}{\theta} = \dfrac{E}{(R + G)\theta}\).`,
      { ex: { q: R`With R = 5000 Ω and E = 2 V, the deflection is 30 divisions; a shunt of 50 Ω halves it. Find G and the figure of merit.`,
        steps: [R`\(G = \dfrac{5000\times50}{5000 - 50}\approx50.5\) Ω.`, R`\(k = \dfrac{2}{(5000 + 50.5)\times30}\).`], ans: R`G ≈ 50.5 Ω; k ≈ 1.3 × 10⁻⁵ A per division` } },
      { check: { q: R`Why must R be much larger than G?`, ans: R`So that adding the shunt does not change the total current appreciably, making the half-deflection formula accurate.` } }
    ] },

    { h: R`Focal length of mirrors and lenses`, t: [12], blocks: [
      R`<b>u–v method:</b> place an object needle in front of a concave mirror or convex lens, and locate its real image with a second needle by <b>removing parallax</b> (move your eye side to side; when the image and the needle do not separate, they are at the same place). Measure u and v for several positions.`,
      { points: [R`Concave mirror: \(\dfrac1f = \dfrac1v + \dfrac1u\). With u = −30 cm and v = −60 cm, f = −20 cm.`, R`Convex lens: \(\dfrac1f = \dfrac1v - \dfrac1u\). With u = −30 cm and v = +60 cm, f = +20 cm.`, R`Plot 1/v against 1/u (magnitudes): a straight line meeting both axes at 1/f.`] },
      { fig: figUV, cap: R`For a convex lens, 1/v plotted against 1/|u| is a straight line with intercepts 1/f on both axes.` },
      R`<b>Convex mirror:</b> it forms only virtual images, so a convex lens is used to form a real image first; the mirror is then placed so that the rays strike it normally and retrace their path, and its centre of curvature lies at the lens's image position. Then R is measured and f = R/2.`,
      { check: { q: R`What is the minimum distance between an object and its real image for a convex lens of focal length f?`, ans: R`4f (when u = v = 2f).` } }
    ] },

    { h: R`Angle of minimum deviation of a prism`, t: [12], blocks: [
      R`Place the prism on a sheet of paper, trace its outline, and send a ray (marked by two pins) at an angle of incidence i. Locate the emergent ray with two more pins, and measure the deviation δ. Repeat for many values of i from about 30° to 60°.`,
      { fig: figPrismDI, cap: R`δ first decreases, reaches a minimum when i = e, then increases.` },
      R`From the minimum deviation \(\delta_m\) and the prism angle A, \(n = \dfrac{\sin\frac{A + \delta_m}{2}}{\sin\frac A2}\). For a 60° prism with \(\delta_m\) = 37.2°, n = 1.5.`,
      { check: { q: R`At minimum deviation, how does the ray pass through the prism?`, ans: R`Symmetrically: parallel to the base for an isosceles prism, with i = e.` } }
    ] },

    { h: R`Refractive index of a glass slab with a travelling microscope`, t: [13], blocks: [
      R`A travelling microscope moves vertically on a scale with a vernier. Focus on an ink mark on paper (reading R₁); place the slab over it and refocus on the image of the mark (R₂); then focus on a speck of powder on top of the slab (R₃).`,
      { fig: figTravel, cap: R`Three readings give the real thickness (R₃ − R₁) and the apparent thickness (R₃ − R₂).` },
      R`\[n = \frac{\text{real depth}}{\text{apparent depth}} = \frac{R_3 - R_1}{R_3 - R_2}\]`,
      { ex: { q: R`Readings: R₁ = 2.524 cm, R₂ = 3.012 cm, R₃ = 4.012 cm. Find n.`,
        steps: [R`\(n = \dfrac{4.012 - 2.524}{4.012 - 3.012} = \dfrac{1.488}{1.000}\).`], ans: R`≈ 1.49` } },
      { check: { q: R`Why does the image of the mark appear raised?`, ans: R`Refraction at the top surface of the slab (apparent depth = real depth/n).` } }
    ] },

    { h: R`Characteristics of p–n junction and Zener diodes`, t: [14], blocks: [
      R`<b>Forward bias:</b> connect the diode (p-side to +) with a milliammeter in series and a voltmeter across it. Increase the voltage in small steps from zero with a rheostat or potential divider. The current stays near zero until the knee voltage (about 0.7 V for Si), then rises steeply.`,
      R`<b>Reverse bias:</b> reverse the diode, use a microammeter and a higher-range voltmeter. The current is a tiny, nearly constant leakage current until breakdown.`,
      { fig: figDiodeCkt, cap: R`Circuit for a diode's forward characteristic.` },
      R`<b>Zener diode:</b> in reverse bias with a series resistor, the current stays almost zero until the <b>breakdown (Zener) voltage</b> (e.g. 5.1 V), where it rises sharply while the voltage stays nearly constant. Read V_Z where the curve turns sharply.`,
      { check: { q: R`Why is a series resistor always used with a diode in these experiments?`, ans: R`To limit the current, so that the diode is not destroyed once it conducts heavily.` } }
    ] },

    { h: R`Identifying electronic components`, t: [14], blocks: [
      R`Given a mixed collection of a diode, an LED, a resistor and a capacitor (and perhaps a transistor or IC), identify each with a multimeter (or a battery and bulb):`,
      { table: { head: [R`Component`, R`Appearance`, R`Multimeter test`], rows: [
        [R`Resistor`, R`two leads; colour bands`, R`same finite resistance in both directions; value matches the colour code`],
        [R`Diode`, R`two leads; a band marks the cathode`, R`conducts (low resistance) one way only`],
        [R`LED`, R`two leads (one longer, the anode); coloured dome`, R`conducts one way only and glows when forward biased`],
        [R`Capacitor`, R`two leads; often marked in μF or pF`, R`resistance starts low and rises to very high (it charges); no steady current in either direction`],
        [R`Transistor`, R`three leads`, R`behaves like two diodes between base and the other leads`],
        [R`IC`, R`many pins in a block`, R`easily recognised by its many pins`]] } },
      { check: { q: R`How would you tell a diode from an LED if both look similar and the multimeter shows one-way conduction for both?`, ans: R`Forward bias them with a battery and series resistor: the LED glows, the ordinary diode does not.` } }
    ] }
  ],
  summary: [
    R`Vernier LC = 1 MSD/n; screw gauge LC = pitch/N; correct reading = observed − zero error (with sign).`,
    R`Pendulum: \(g = 4\pi^2/\text{slope}\) of T²–L; A² decays exponentially. Moments: m₁d₁ = m₂d₂.`,
    R`Searle: \(Y = MgL/\pi r^2\Delta L\). Capillary: \(T = rh\rho g/2\). Viscosity: \(\eta = 2r^2(\rho - \sigma)g/9v\).`,
    R`Resonance tube: \(v = 2\nu(l_2 - l_1)\), \(e = (l_2 - 3l_1)/2\). Mixtures: heat lost = heat gained.`,
    R`Metre bridge \(S = R(100 - l)/l\), \(\rho = S\pi d^2/4L\); PO box: S = RQ/P. Ohm's law: slope of V–I = R.`,
    R`Galvanometer: G ≈ RS/(R − S) (half deflection); figure of merit E/((R + G)θ).`,
    R`Focal length by u–v and parallax; 1/v–1/u graph intercepts 1/f. Prism δ–i curve gives δ_m. Travelling microscope: \(n = (R_3 - R_1)/(R_3 - R_2)\).`,
    R`Diode: knee ≈ 0.7 V (Si); Zener: sharp breakdown at V_Z. Identify components by multimeter behaviour.`
  ],
  refs: [
    { t: R`Wikipedia: Vernier scale`, url: 'https://en.wikipedia.org/wiki/Vernier_scale' },
    { t: R`Wikipedia: Micrometer (device)`, url: 'https://en.wikipedia.org/wiki/Micrometer_(device)' },
    { t: R`Wikipedia: Young's modulus`, url: 'https://en.wikipedia.org/wiki/Young%27s_modulus' },
    { t: R`Wikipedia: Capillary action`, url: 'https://en.wikipedia.org/wiki/Capillary_action' },
    { t: R`Wikipedia: Stokes' law`, url: 'https://en.wikipedia.org/wiki/Stokes%27_law' },
    { t: R`OpenStax University Physics Vol. 1, §17.4 Normal Modes of a Standing Sound Wave`, url: 'https://openstax.org/books/university-physics-volume-1/pages/17-4-normal-modes-of-a-standing-sound-wave' }
  ]
});
})();
