// Book chapter: Properties of Solids and Liquids (elasticity, fluids, surface tension, heat). Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figStressStrain = D.plot({
  w: 420, h: 240, x: [0, 10], y: [0, 10], xlabel: 'strain', ylabel: 'stress', mathLabels: false, noOrigin: false,
  fns: [{ f: function (x) {
    if (x <= 2) return 3 * x;
    if (x <= 3) return 6 + 1.2 * (x - 2);
    if (x <= 7.5) return 7.2 + 1.6 * Math.sin((x - 3) / 4.5 * Math.PI / 2);
    return 8.8 - 0.9 * (x - 7.5);
  }, from: 0, to: 9.2 }],
  pts: [{ x: 2, y: 6, label: 'A: proportional limit', pos: 'nw', math: false, size: 11 }, { x: 3, y: 7.2, label: 'B: elastic limit (yield point)', pos: 'nw', math: false, size: 11 },
    { x: 7.5, y: 8.8, label: 'D: ultimate strength', pos: 'n', math: false, size: 11 }, { x: 9.2, y: 7.3, label: 'E: fracture', pos: 'e', math: false, size: 11 }],
  texts: [{ x: 1.1, y: 1.5, s: 'Hooke region', color: 'c', size: 11, anchor: 'start' }, { x: 5.6, y: 5.6, s: 'plastic region', color: 'o', size: 11 }],
  label: 'Typical stress-strain curve of a metal wire'
});

var figStrains = D.row([
  [D.svg(150, 130, [D.rect(55, 30, 40, 60, { color: 'c', fill: 'soft' }), D.rect(55, 22, 40, 76, { color: 'c', dash: '4 3', w: 1.2 }), D.arrow(75, 30, 75, 8, { color: 'r', head: 7 }), D.arrow(75, 90, 75, 116, { color: 'r', head: 7 }), D.text(115, 60, 'ΔL', { size: 12, color: 'm', anchor: 'start' })], 'tensile strain'), 'longitudinal (Young)'],
  [D.svg(150, 130, [D.ground(20, 100, 130, 100), D.rect(45, 40, 60, 60, { color: 'c', dash: '4 3', w: 1.2 }), D.poly([[45, 100], [105, 100], [125, 40], [65, 40]], { closed: true, color: 'c', fill: 'soft' }), D.arrow(70, 32, 120, 32, { color: 'r', head: 7, label: 'F', ly: -10 }), D.angle(45, 100, 26, 71.6, 90, 'θ', { lr: 8 })], 'shear strain'), 'shear (rigidity)'],
  [D.svg(150, 130, [D.rect(45, 35, 60, 60, { color: 'c', dash: '4 3', w: 1.2 }), D.rect(53, 43, 44, 44, { color: 'c', fill: 'soft' }),
    D.arrow(75, 8, 75, 34, { color: 'r', head: 6 }), D.arrow(75, 122, 75, 96, { color: 'r', head: 6 }), D.arrow(18, 65, 44, 65, { color: 'r', head: 6 }), D.arrow(132, 65, 106, 65, { color: 'r', head: 6 })], 'volume strain'), 'volume (bulk)']
]);

var figColumn = D.svg(240, 200, [
  D.poly([[60, 20], [60, 180], [180, 180], [180, 20]], { color: 'k', w: 2 }), D.rect(62, 50, 116, 128, { color: 'b', fill: 'soft', w: 0.01 }),
  D.line(60, 50, 180, 50, { color: 'b', w: 1.4 }), D.text(120, 40, 'P₀ (atmosphere)', { size: 11, color: 'm' }),
  D.dot(120, 140, { r: 4, color: 'r' }), D.text(120, 160, 'P = P₀ + ρgh', { size: 12, color: 'r' }),
  D.arrow(200, 50, 200, 140, { color: 'm', w: 1.2, head: 6, both: true }), D.text(208, 95, 'h', { math: true, anchor: 'start' })
], 'Pressure at depth h in a liquid');

var figHydraulic = D.svg(380, 180, [
  D.path('M40 40 L40 150 L340 150 L340 40', { color: 'k', w: 2 }), D.path('M80 40 L80 120 L240 120 L240 40', { color: 'k', w: 2 }),
  D.rect(42, 70, 36, 78, { color: 'b', fill: 'soft', w: 0.01 }), D.rect(42, 122, 296, 26, { color: 'b', fill: 'soft', w: 0.01 }), D.rect(242, 60, 96, 62, { color: 'b', fill: 'soft', w: 0.01 }),
  D.rect(42, 62, 36, 8, { color: 'k', fill: 'm' }), D.rect(242, 52, 96, 8, { color: 'k', fill: 'm' }),
  D.arrow(60, 20, 60, 58, { color: 'r', label: 'F₁', lx: 14, ly: -8 }), D.arrow(290, 50, 290, 12, { color: 'g', w: 2.6, label: 'F₂', lx: 16, ly: 6 }),
  D.text(60, 170, 'small piston A₁', { size: 11, color: 'm' }), D.text(290, 170, 'large piston A₂', { size: 11, color: 'm' })
], 'Hydraulic lift');

var figFloat = D.svg(260, 170, [
  D.poly([[30, 20], [30, 150], [230, 150], [230, 20]], { color: 'k', w: 2 }), D.rect(32, 70, 196, 78, { color: 'b', fill: 'soft', w: 0.01 }), D.line(30, 70, 230, 70, { color: 'b', w: 1.4 }),
  D.rect(100, 45, 60, 60, { color: 'o', fill: 'soft', w: 1.8 }), D.line(100, 70, 160, 70, { color: 'b', w: 1 }),
  D.arrow(130, 75, 130, 125, { color: 'r', label: 'W', lx: 14, ly: 0 }), D.arrow(122, 104, 122, 30, { color: 'g' }), D.text(172, 36, 'buoyant force', { color: 'g', size: 11, anchor: 'start' })
], 'A floating block');

var figLayers = (function () {
  var p = [D.ground(20, 160, 300, 160), D.rect(40, 20, 240, 10, { color: 'k', fill: 'm' }), D.arrow(280, 25, 320, 25, { color: 'r', label: 'v', ly: -10 })];
  for (var k = 1; k <= 5; k++) { var y = 160 - k * 22, L = 18 * k; p.push(D.arrow(80, y, 80 + L, y, { color: 'c', w: 1.6, head: 6 })); p.push(D.line(40, y, 280, y, { color: 'm', dash: '3 5', w: 0.8 })); }
  p.push(D.text(200, 100, 'layers slide over each other', { size: 11, color: 'm' }), D.text(180, 178, 'fixed plate', { size: 11, color: 'm' }), D.text(180, 12, 'moving plate', { size: 11, color: 'm' }));
  return D.svg(340, 190, p, 'Velocity of fluid layers between a fixed and a moving plate');
})();

var figTerminal = D.plot({
  w: 380, h: 200, x: [0, 5], y: [0, 1.25], xlabel: 't', ylabel: 'v', xticks: [], yticks: [[1, 'v_t']],
  fns: [{ f: function (t) { return 1 - Math.exp(-1.4 * t); } }, { f: function () { return 1; }, color: 'm', dash: true, w: 1 }],
  texts: [{ x: 2.6, y: 0.7, s: 'speeds up, then levels off at the terminal velocity', color: 'c', size: 11 }],
  label: 'Speed of a ball falling through a viscous liquid'
});

var figContinuity = D.svg(420, 140, [
  D.path('M20 30 L160 30 L240 55 L400 55', { color: 'k', w: 2 }), D.path('M20 110 L160 110 L240 85 L400 85', { color: 'k', w: 2 }),
  D.line(20, 50, 160, 50, { color: 'b', dash: '6 4', w: 1 }), D.line(20, 90, 160, 90, { color: 'b', dash: '6 4', w: 1 }), D.path('M160 50 L240 64 L400 64', { color: 'b', dash: '6 4', w: 1 }), D.path('M160 90 L240 76 L400 76', { color: 'b', dash: '6 4', w: 1 }),
  D.arrow(60, 70, 100, 70, { color: 'g', label: 'v₁ (slow)', ly: -12 }), D.arrow(300, 70, 380, 70, { color: 'g', w: 2.4, label: 'v₂ (fast)', ly: -14 }),
  D.text(90, 128, 'area A₁', { size: 11, color: 'm' }), D.text(320, 104, 'area A₂', { size: 11, color: 'm' })
], 'Water speeds up where a pipe narrows');

var figBernoulli = D.svg(420, 200, [
  D.path('M20 120 L130 120 L250 60 L400 60', { color: 'k', w: 2 }), D.path('M20 170 L130 170 L250 90 L400 90', { color: 'k', w: 2 }),
  D.arrow(50, 145, 90, 145, { color: 'g', label: 'v₁', ly: -12 }), D.arrow(300, 75, 360, 75, { color: 'g', w: 2.4, label: 'v₂', ly: -12 }),
  D.text(60, 108, 'P₁', { size: 13, color: 'r' }), D.text(320, 48, 'P₂', { size: 13, color: 'r' }),
  D.line(10, 190, 410, 190, { color: 'm', w: 1 }), D.arrow(150, 190, 150, 145, { color: 'm', w: 1.2, head: 6 }), D.text(158, 172, 'h₁', { size: 12, anchor: 'start', color: 'm' }),
  D.arrow(380, 190, 380, 75, { color: 'm', w: 1.2, head: 6 }), D.text(388, 140, 'h₂', { size: 12, anchor: 'start', color: 'm' })
], 'Fluid flowing through a pipe that rises and narrows');

var figTorricelli = D.svg(300, 200, [
  D.path('M40 20 L40 170 L180 170 L180 20', { color: 'k', w: 2 }), D.rect(42, 50, 136, 118, { color: 'b', fill: 'soft', w: 0.01 }), D.line(40, 50, 180, 50, { color: 'b', w: 1.4 }),
  D.path('M180 140 Q 230 140, 270 196', { color: 'b', w: 3 }), D.arrow(182, 140, 222, 140, { color: 'g' }), D.text(236, 120, 'v = √(2gh)', { color: 'g', math: true, anchor: 'start', size: 14 }),
  D.arrow(200, 50, 200, 138, { color: 'm', w: 1.2, head: 6, both: true }), D.text(206, 92, 'h', { math: true, anchor: 'start' })
], 'Water flowing out of a hole a depth h below the surface');

var figMolecules = D.svg(320, 170, [
  D.rect(20, 40, 280, 120, { color: 'b', fill: 'soft', w: 0.01 }), D.line(20, 40, 300, 40, { color: 'b', w: 1.6 }),
  D.circle(90, 40, 8, { color: 'c', fill: 'c' }), D.arrow(90, 48, 90, 80, { color: 'r', head: 6 }), D.arrow(82, 44, 58, 60, { color: 'r', head: 6 }), D.arrow(98, 44, 122, 60, { color: 'r', head: 6 }),
  D.text(90, 22, 'surface molecule: net pull inward', { size: 11, color: 'r' }),
  D.circle(220, 110, 8, { color: 'c', fill: 'c' }),
  [[0, -1], [0, 1], [-1, 0], [1, 0], [0.7, 0.7], [-0.7, 0.7], [0.7, -0.7], [-0.7, -0.7]].map(function (d) { return D.arrow(220 + d[0] * 10, 110 + d[1] * 10, 220 + d[0] * 32, 110 + d[1] * 32, { color: 'g', head: 5, w: 1.3 }); }).join(''),
  D.text(220, 158, 'inside: pulls balance', { size: 11, color: 'g' })
], 'Forces on a molecule at the surface and inside a liquid');

var figContact = D.row([
  [D.svg(160, 120, [D.line(20, 100, 140, 100, { w: 2 }), D.path('M30 100 Q 80 40, 130 100', { color: 'b', w: 2, fill: 'soft' }), D.line(30, 100, 70, 60, { color: 'r', w: 1.2, dash: '3 3' }), D.angle(30, 100, 24, 0, 45, 'θ', { lr: 10 })], 'water on glass'), 'water on glass: θ < 90° (wets)'],
  [D.svg(160, 120, [D.line(20, 100, 140, 100, { w: 2 }), D.path('M50 100 C 20 80, 40 40, 80 40 C 120 40, 140 80, 110 100 Z', { color: 'm', w: 2, fill: 'soft' }), D.line(50, 100, 30, 75, { color: 'r', w: 1.2, dash: '3 3' }), D.angle(50, 100, 22, 0, 128, 'θ', { lr: 10 })], 'mercury on glass'), 'mercury on glass: θ > 90°']
]);

var figCapillary = D.row([
  [D.svg(170, 190, [D.rect(10, 120, 150, 60, { color: 'b', fill: 'soft', w: 0.01 }), D.line(10, 120, 160, 120, { color: 'b', w: 1.4 }),
    D.line(75, 40, 75, 170, { w: 2 }), D.line(95, 40, 95, 170, { w: 2 }), D.rect(76, 55, 18, 70, { color: 'b', fill: 'soft', w: 0.01 }), D.path('M76 58 Q 85 66 94 58', { color: 'b', w: 1.6 }),
    D.arrow(125, 120, 125, 60, { color: 'm', w: 1.2, head: 6, both: true }), D.text(132, 90, 'h', { math: true, anchor: 'start' })], 'capillary rise'), 'water rises (concave meniscus)'],
  [D.svg(170, 190, [D.rect(10, 80, 150, 100, { color: 'm', fill: 'soft', w: 0.01 }), D.line(10, 80, 160, 80, { color: 'm', w: 1.4 }),
    D.line(75, 30, 75, 170, { w: 2 }), D.line(95, 30, 95, 170, { w: 2 }), D.rect(76, 112, 18, 60, { color: 'm', fill: 'soft', w: 0.01 }), D.path('M76 116 Q 85 104 94 116', { color: 'm', w: 1.6 }),
    D.arrow(125, 80, 125, 112, { color: 'm', w: 1.2, head: 6, both: true }), D.text(132, 96, 'h', { math: true, anchor: 'start' })], 'capillary fall'), 'mercury falls (convex meniscus)']
]);

var figWater = D.plot({
  w: 380, h: 210, x: [0, 11], y: [0.99960, 1.00004], xlabel: 'T (°C)', ylabel: 'density (g/cm³)', mathLabels: false, noOrigin: true,
  xticks: [0, 2, 4, 6, 8, 10], yticks: [[0.9998, '0.9998'], [1.0, '1.0000']],
  fns: [{ f: function (t) { return 1 - 0.0000068 * (t - 4) * (t - 4) + 0.00000003 * Math.pow(t - 4, 3); } }],
  pts: [{ x: 4, y: 1.0, label: 'maximum at 4 °C', pos: 'se', math: false, size: 12 }],
  label: 'Density of water near 4 degrees Celsius'
});

var figHeating = D.plot({
  w: 420, h: 230, x: [0, 10], y: [-30, 130], xlabel: 'heat supplied', ylabel: 'T (°C)', mathLabels: false, xticks: [], yticks: [[0, '0'], [100, '100']],
  fns: [{ f: function (q) { return q < 0.5 ? -20 + 40 * q : q < 2 ? 0 : q < 4 ? 50 * (q - 2) : q < 8.5 ? 100 : 100 + 40 * (q - 8.5); }, from: 0, to: 9.4 }],
  texts: [{ x: 1.25, y: 12, s: 'ice melts', size: 11, color: 'c' }, { x: 3.0, y: 40, s: 'water warms', size: 11, color: 'c', anchor: 'end' }, { x: 6.2, y: 112, s: 'water boils (latent heat)', size: 11, color: 'c' }, { x: 9.3, y: 125, s: 'steam', size: 11, color: 'c', anchor: 'end' }],
  label: 'Heating curve of ice to steam'
});

var figConduct = D.svg(400, 150, [
  D.rect(20, 40, 70, 70, { color: 'r', fill: 'soft', w: 1.4 }), D.text(55, 76, 'hot T₁', { size: 12, color: 'r' }),
  D.rect(310, 40, 70, 70, { color: 'b', fill: 'soft', w: 1.4 }), D.text(345, 76, 'cold T₂', { size: 12, color: 'b' }),
  D.rect(90, 60, 220, 30, { color: 'o', fill: 'soft', w: 1.6 }), D.arrow(130, 75, 270, 75, { color: 'o', w: 2.4, label: 'heat flow H', ly: -24, math: false, size: 12 }),
  D.arrow(90, 125, 310, 125, { color: 'm', w: 1.2, head: 6, both: true }), D.text(200, 140, 'length L, area A', { size: 11, color: 'm' })
], 'Heat conducted along a rod between a hot and a cold body');

var figPlanck = (function () {
  function f(l, T) { return 1 / (Math.pow(l, 5) * (Math.exp(14388 / (l * T)) - 1)); }
  var s = 1 / f(2898 / 5000, 5000);
  return D.plot({
    w: 420, h: 230, x: [0, 3], y: [0, 1.15], xlabel: 'λ (μm)', ylabel: 'intensity', mathLabels: false, xticks: [0.5, 1, 1.5, 2, 2.5], yticks: [],
    fns: [{ f: function (l) { return l > 0.05 ? s * f(l, 5000) : 0; }, color: 'r', label: '5000 K', lx: 0.62, ly: 1.07, math: false },
      { f: function (l) { return l > 0.05 ? s * f(l, 4000) : 0; }, color: 'o', label: '4000 K', lx: 0.9, ly: 0.47, math: false },
      { f: function (l) { return l > 0.05 ? s * f(l, 3000) : 0; }, color: 'b', label: '3000 K', lx: 1.25, ly: 0.2, math: false }],
    segs: [{ x1: 0.58, y1: 0, x2: 0.58, y2: 1, color: 'm', dash: '3 3', w: 1 }, { x1: 0.97, y1: 0, x2: 0.97, y2: 0.33, color: 'm', dash: '3 3', w: 1 }],
    texts: [{ x: 1.9, y: 0.75, s: 'hotter: more radiation, peak shifts to shorter λ', size: 11, color: 'm' }],
    label: 'Blackbody radiation curves at three temperatures'
  });
})();

// ---------- chapter text ----------
JEE.book('physics', 'solids-liquids', {
  intro: [
    R`A steel bridge sags a little under a truck and springs back; a ship of iron floats; an aeroplane wing lifts thousands of kilograms; water climbs up a thin tube by itself; a pressure cooker cooks faster; a kettle of water takes ages to boil away. This chapter explains all of these with the physics of matter in bulk.`,
    R`It has three parts: the <b>elastic</b> behaviour of solids (stress, strain, Hooke's law and the elastic moduli); <b>fluids</b> at rest and in motion (pressure, Pascal's law, buoyancy, viscosity, Bernoulli's principle and surface tension); and <b>heat</b> (temperature, thermal expansion, calorimetry, change of state and heat transfer, including radiation laws). It is a long chapter, so take it one part at a time.`
  ],
  sections: [
    { h: R`Elasticity and plasticity`, t: [0], blocks: [
      R`When you stretch a rubber band and let go, it returns to its original length. When you bend a paper clip far enough, it stays bent. The property of a body by which it regains its original shape and size after the deforming force is removed is <b>elasticity</b>. A body that does not regain its shape is <b>plastic</b> (putty, wet clay).`,
      R`No real material is perfectly elastic. Steel is more elastic than rubber in the physics sense: it needs a much larger force for the same deformation and returns very precisely to its shape. Elasticity comes from the interatomic forces that act like tiny springs holding atoms in their places.`,
      { check: { q: R`Which is more elastic, rubber or steel?`, ans: R`Steel: it has a much larger elastic modulus.` } }
    ] },

    { h: R`Stress and strain`, t: [0], blocks: [
      R`When a deforming force acts on a body, internal restoring forces appear. The restoring force per unit area is the <b>stress</b>: \(\sigma = \dfrac FA\) (unit N/m² or Pa). The fractional change in size or shape is the <b>strain</b> (no unit).`,
      { fig: figStrains, cap: R`Three kinds of strain: stretching (longitudinal), sliding of layers (shear) and change of volume (bulk).` },
      { table: { head: [R`Type`, R`Stress`, R`Strain`], rows: [
        [R`Longitudinal (tensile or compressive)`, R`F/A, perpendicular to the area`, R`\(\Delta L/L\)`],
        [R`Shear`, R`F/A, parallel to the area (tangential)`, R`\(\Delta x/L = \tan\theta \approx \theta\)`],
        [R`Volume (hydraulic)`, R`change in pressure Δp`, R`\(\Delta V/V\)`]] } },
      { check: { q: R`A force of 100 N pulls a wire of cross-section 2 mm². Find the stress.`, ans: R`\(100/(2\times10^{-6}) = 5\times10^7\) Pa.` } }
    ] },

    { h: R`Hooke's law and the stress–strain curve`, t: [0], blocks: [
      R`<b>Hooke's law:</b> for small deformations, stress is proportional to strain: \[\text{stress} = (\text{modulus of elasticity})\times\text{strain}\]`,
      { fig: figStressStrain, cap: R`Typical stress–strain curve of a metal wire. Up to A the graph is straight (Hooke's law). Beyond B the wire does not return to its original length (plastic). D is the maximum stress (ultimate tensile strength) and E is where it breaks.` },
      { points: [R`<b>Ductile</b> materials (copper, aluminium) have a long plastic region and can be drawn into wires.`, R`<b>Brittle</b> materials (glass, cast iron) break soon after the elastic limit.`, R`<b>Elastomers</b> (rubber) can be stretched to several times their length but do not obey Hooke's law well.`] },
      { check: { q: R`On the curve, which point marks where Hooke's law stops being valid?`, ans: R`The proportional limit A.` } }
    ] },

    { h: R`Elastic moduli`, t: [1], blocks: [
      { table: { head: [R`Modulus`, R`Definition`, R`Applies to`], rows: [
        [R`Young's modulus Y`, R`\(Y = \dfrac{F/A}{\Delta L/L} = \dfrac{FL}{A\,\Delta L}\)`, R`solids (stretching or compressing)`],
        [R`Bulk modulus B`, R`\(B = -\dfrac{\Delta p}{\Delta V/V}\); compressibility = 1/B`, R`solids, liquids and gases`],
        [R`Modulus of rigidity (shear) G`, R`\(G = \dfrac{F/A}{\theta}\)`, R`solids only`]] } },
      R`The minus sign in B makes it positive (an increase in pressure decreases volume). Steel has \(Y \approx 2\times10^{11}\) Pa; water has \(B \approx 2.2\times10^9\) Pa. Liquids and gases have no shear modulus, because they flow.`,
      { ex: { q: R`A steel wire 2 m long with cross-section 1 mm² carries a load of 100 N. Find its extension. (\(Y = 2\times10^{11}\) Pa)`,
        steps: [R`\(\Delta L = \dfrac{FL}{AY} = \dfrac{100\times2}{10^{-6}\times2\times10^{11}}\).`], ans: R`1 mm` } },
      { ex: { q: R`By what fraction does the volume of water shrink at a depth where the extra pressure is 100 atm? (\(B = 2.2\times10^9\) Pa, 1 atm = 1.013 × 10⁵ Pa)`,
        steps: [R`\(\dfrac{\Delta V}{V} = \dfrac{\Delta p}{B} = \dfrac{1.013\times10^7}{2.2\times10^9}\).`], ans: R`≈ 0.46%: water is nearly incompressible` } },
      { h3: R`Elastic potential energy of a stretched wire` },
      R`Stretching a wire is like stretching a spring with \(k = YA/L\). The work done, stored as elastic energy, is \(U = \frac12F\Delta L\), and the energy per unit volume is \[u = \tfrac12\times\text{stress}\times\text{strain}\]`,
      { ex: { q: R`Find the energy stored in the wire of the first example.`,
        steps: [R`\(U = \frac12\times100\times10^{-3}\).`], ans: R`0.05 J` } },
      { tip: R`For two wires of the same material, \(\Delta L \propto \dfrac{FL}{A} \propto \dfrac{FL}{r^2}\). Double the length doubles the extension; double the radius makes it four times smaller.` },
      { check: { q: R`Why are bridges and cranes built with steel rather than copper or aluminium?`, ans: R`Steel has a larger Young's modulus and strength, so it deforms less under the same load.` } }
    ] },

    { h: R`Pressure in a fluid`, t: [2], blocks: [
      R`A fluid (liquid or gas) at rest pushes perpendicularly on every surface it touches. <b>Pressure</b> is the normal force per unit area: \(P = F/A\). At a point inside a fluid at rest, pressure acts equally in all directions.`,
      { derive: R`Pressure at depth h`, steps: [
        R`Imagine a vertical column of liquid of area A and height h. Its weight is \(\rho Ahg\).`,
        R`The column is in equilibrium: the pressure force at the bottom equals the force at the top plus the weight: \(PA = P_0A + \rho Ahg\).`,
        R`So \(P = P_0 + \rho gh\). Pressure grows linearly with depth and does not depend on the shape of the container.`
      ] },
      { fig: figColumn, cap: R`Pressure at depth h: \(P = P_0 + \rho gh\), where \(P_0\) is the atmospheric pressure on the surface.` },
      R`Atmospheric pressure at sea level is about 1.013 × 10⁵ Pa (1 atm), the weight of the air column above each square metre. A mercury barometer measures it as a column of 76 cm of mercury. The pressure above atmospheric, \(P - P_0 = \rho gh\), is the <b>gauge pressure</b>, measured with a manometer.`,
      { ex: { q: R`Find the pressure 10 m below the surface of a lake. (ρ = 1000 kg/m³, g = 9.8 m/s²)`,
        steps: [R`\(P = 1.013\times10^5 + 1000\times9.8\times10 = 1.013\times10^5 + 0.98\times10^5\).`], ans: R`≈ 2 × 10⁵ Pa, about 2 atm` } },
      { check: { q: R`Three vessels of different shapes are filled with water to the same height. Which has the largest pressure at the bottom?`, ans: R`All are equal: pressure depends only on depth (the "hydrostatic paradox").` } }
    ] },

    { h: R`Pascal's law and its applications`, t: [3], blocks: [
      R`<b>Pascal's law:</b> a change in pressure applied to an enclosed fluid is transmitted undiminished to every part of the fluid and to the walls of its container.`,
      { fig: figHydraulic, cap: R`A hydraulic lift. A small force on the small piston creates a pressure that acts on the large piston, which gives a large force.` },
      R`Since the pressure is the same on both pistons, \(\dfrac{F_1}{A_1} = \dfrac{F_2}{A_2}\), so \(F_2 = F_1\dfrac{A_2}{A_1}\). The force is multiplied, but energy is not created: the large piston moves a much smaller distance.`,
      { ex: { q: R`In a hydraulic lift, the small piston has area 10 cm² and the large one 1000 cm². What force on the small piston lifts a 1000 kg car? (g = 10 m/s²)`,
        steps: [R`\(F_1 = F_2\dfrac{A_1}{A_2} = 10^4\times\dfrac{10}{1000}\).`], ans: R`100 N` } },
      R`Hydraulic brakes in cars work the same way: the driver's push on the brake pedal is transmitted by brake fluid to larger pistons at each wheel.`,
      { check: { q: R`If the small piston moves down 50 cm, how far does the car rise?`, ans: R`The volume of fluid moved is the same: 50 × 10 = d × 1000, so d = 0.5 cm.` } }
    ] },

    { h: R`Buoyancy and Archimedes' principle`, t: [2], blocks: [
      R`Why does a heavy ship float while a small stone sinks? Because a fluid pushes up on any body immersed in it. The pressure on the bottom of the body is larger than on its top, giving a net upward <b>buoyant force</b> (upthrust).`,
      R`<b>Archimedes' principle:</b> a body wholly or partly immersed in a fluid experiences an upward buoyant force equal to the weight of the fluid it displaces: \[F_B = \rho_{fluid}V_{submerged}\,g\]`,
      { fig: figFloat, cap: R`A floating block sinks until the weight of the water it displaces equals its own weight.` },
      { points: [R`If the body's density is less than the fluid's, it floats with a fraction \(\rho_{body}/\rho_{fluid}\) of its volume submerged.`, R`If it is greater, the body sinks, but it weighs less in the fluid: apparent weight = true weight − buoyant force.`] },
      { ex: { q: R`(a) What fraction of an iceberg is under water? (ice 917 kg/m³, sea water 1025 kg/m³) (b) What is the apparent weight of a 1 kg steel ball (density 8000 kg/m³) in water? (g = 9.8 m/s²)`,
        steps: [R`(a) Fraction submerged = 917/1025.`, R`(b) Volume = 1/8000 m³, so \(F_B = 1000\times\dfrac{1}{8000}\times9.8 = 1.225\) N. Apparent weight = 9.8 − 1.225.`], ans: R`(a) ≈ 89.5% ("the tip of the iceberg") (b) ≈ 8.58 N` } },
      { check: { q: R`A ship sails from the sea into a river. Does it rise or sink a little?`, ans: R`It sinks a little: river water is less dense, so it must displace more volume.` } }
    ] },

    { h: R`Viscosity`, t: [4], blocks: [
      R`Honey flows slowly; water flows easily. When a fluid flows, its layers slide over one another, and a frictional force acts between them. This internal friction is <b>viscosity</b>.`,
      { fig: figLayers, cap: R`A fluid between a fixed plate and a moving plate: the layer touching each plate moves with it, and the speed changes steadily in between.` },
      R`<b>Newton's law of viscosity:</b> the force needed to keep the layers sliding is proportional to the area A and to the <b>velocity gradient</b> dv/dx: \[F = \eta A\frac{dv}{dx}\] η is the <b>coefficient of viscosity</b>, with SI unit Pa s (also called poiseuille). Water has η ≈ 10⁻³ Pa s, glycerine about 1.5 Pa s.`,
      { points: [R`The viscosity of liquids <b>decreases</b> as temperature rises (hot honey flows easily).`, R`The viscosity of gases <b>increases</b> with temperature.`] },
      { ex: { q: R`A plate of area 0.1 m² slides at 0.5 m/s over a 1 mm layer of water (η = 10⁻³ Pa s) on a fixed surface. Find the force needed.`,
        steps: [R`\(F = \eta A\dfrac vd = 10^{-3}\times0.1\times\dfrac{0.5}{10^{-3}}\).`], ans: R`0.05 N` } },
      { check: { q: R`Why is engine oil thicker in winter?`, ans: R`The viscosity of liquids increases as the temperature falls.` } }
    ] },

    { h: R`Stokes' law and terminal velocity`, t: [4], blocks: [
      R`A small sphere of radius r moving slowly with speed v through a fluid of viscosity η feels a viscous drag (<b>Stokes' law</b>): \[F = 6\pi\eta rv\]`,
      { fig: figTerminal, cap: R`A ball dropped in a viscous liquid speeds up at first, but the drag grows with speed until the forces balance; it then falls at a constant terminal velocity.` },
      { derive: R`Terminal velocity of a falling sphere`, steps: [
        R`Forces on the sphere (density ρ) in a liquid (density σ): weight \(\frac43\pi r^3\rho g\) down; buoyant force \(\frac43\pi r^3\sigma g\) up; viscous drag \(6\pi\eta rv\) up.`,
        R`At terminal velocity the net force is zero: \(\frac43\pi r^3(\rho - \sigma)g = 6\pi\eta rv_t\).`,
        R`So \(v_t = \dfrac{2r^2(\rho - \sigma)g}{9\eta}\). It is proportional to \(r^2\): big raindrops fall faster than small ones.`
      ] },
      { ex: { q: R`A steel ball of radius 1 mm (density 7800 kg/m³) falls through glycerine (density 1260 kg/m³, η = 1.5 Pa s). Find its terminal velocity. (g = 9.8 m/s²)`,
        steps: [R`\(v_t = \dfrac{2\times(10^{-3})^2\times6540\times9.8}{9\times1.5}\).`], ans: R`≈ 9.5 mm/s` } },
      { ex: { q: R`Estimate the terminal velocity of a raindrop of radius 0.1 mm in air (η = 1.8 × 10⁻⁵ Pa s; ignore the air's buoyancy).`,
        steps: [R`\(v_t = \dfrac{2\times10^{-8}\times1000\times9.8}{9\times1.8\times10^{-5}}\).`], ans: R`≈ 1.2 m/s (a gentle drizzle)` } },
      { check: { q: R`If the radius of a falling drop is doubled, how does its terminal velocity change?`, ans: R`It becomes 4 times larger (\(v_t \propto r^2\)).` } }
    ] },

    { h: R`Streamline flow and the equation of continuity`, t: [5], blocks: [
      R`In <b>streamline (steady, laminar) flow</b>, the velocity of the fluid at each point stays the same over time. The paths of fluid particles are smooth <b>streamlines</b> that never cross.`,
      { fig: figContinuity, cap: R`Water speeds up where a pipe narrows, so the same volume passes every cross-section each second.` },
      R`For an incompressible fluid, the volume entering one end of a tube of flow each second equals the volume leaving the other end. This is the <b>equation of continuity</b>, a form of conservation of mass: \[A_1v_1 = A_2v_2 = \text{constant (the volume flow rate)}\]`,
      { ex: { q: R`Water flows at 1 m/s in a pipe of diameter 4 cm, which narrows to 2 cm. Find the speed in the narrow part.`,
        steps: [R`\(v_2 = v_1\dfrac{A_1}{A_2} = 1\times\left(\dfrac42\right)^2\).`], ans: R`4 m/s` } },
      { check: { q: R`Why does water come out faster when you partly cover the end of a garden hose?`, ans: R`The same flow rate passes through a smaller area, so the speed increases (\(Av\) is constant).` } }
    ] },

    { h: R`Turbulent flow and Reynolds number`, t: [5], blocks: [
      R`If a fluid flows too fast, the smooth streamlines break up into swirls and eddies: <b>turbulent flow</b> (smoke rising and then breaking up, rapids in a river). The speed at which streamline flow changes into turbulence is the <b>critical velocity</b>.`,
      R`Whether flow is streamline or turbulent is decided by the dimensionless <b>Reynolds number</b>: \[R_e = \frac{\rho vD}{\eta}\] where D is the diameter of the pipe. Roughly, \(R_e < 1000\)–2000 gives streamline flow, \(R_e > 2000\)–3000 turbulent flow, with an unsteady range in between.`,
      { ex: { q: R`Water (η = 10⁻³ Pa s) flows at 0.5 m/s through a pipe 2 cm wide. Is the flow streamline or turbulent?`,
        steps: [R`\(R_e = \dfrac{1000\times0.5\times0.02}{10^{-3}} = 10\,000\).`], ans: R`Turbulent (well above 3000)` } },
      { check: { q: R`Which flow is more likely to be turbulent: thick honey or water, at the same speed in the same pipe?`, ans: R`Water: its much lower viscosity gives a much larger Reynolds number.` } }
    ] },

    { h: R`Bernoulli's principle`, t: [6], blocks: [
      R`<b>Bernoulli's principle:</b> along a streamline in steady flow of an ideal (incompressible, non-viscous) fluid, \[P + \tfrac12\rho v^2 + \rho gh = \text{constant}\] The three terms are the pressure energy, kinetic energy and potential energy per unit volume. Where the fluid moves faster, its pressure is lower.`,
      { fig: figBernoulli, cap: R`Fluid flows from a wide, low section to a narrow, high one. It speeds up and rises, so its pressure falls.` },
      { derive: R`Deriving Bernoulli's equation from the work–energy theorem`, steps: [
        R`Consider a small volume ΔV of fluid moving from section 1 to section 2. The fluid behind pushes it forward, doing work \(P_1\Delta V\); the fluid ahead pushes back, doing work \(-P_2\Delta V\).`,
        R`Net work by pressure \(= (P_1 - P_2)\Delta V\). This changes the kinetic energy by \(\frac12\rho\Delta V(v_2^2 - v_1^2)\) and the potential energy by \(\rho\Delta Vg(h_2 - h_1)\).`,
        R`Work–energy theorem: \((P_1 - P_2)\Delta V = \frac12\rho\Delta V(v_2^2 - v_1^2) + \rho\Delta Vg(h_2 - h_1)\). Rearranging: \(P_1 + \frac12\rho v_1^2 + \rho gh_1 = P_2 + \frac12\rho v_2^2 + \rho gh_2\).`
      ] },
      { ex: { q: R`Water flows in a horizontal pipe at 1 m/s where the pressure is 2 × 10⁵ Pa. The pipe narrows so that the speed becomes 4 m/s. Find the pressure there.`,
        steps: [R`\(P_2 = P_1 + \frac12\rho(v_1^2 - v_2^2) = 2\times10^5 + 500\times(1 - 16)\).`], ans: R`1.925 × 10⁵ Pa` } },
      { check: { q: R`Two sheets of paper held a little apart come together when you blow between them. Why?`, ans: R`The fast-moving air between them has lower pressure than the still air outside.` } }
    ] },

    { h: R`Applications of Bernoulli's principle`, t: [6], blocks: [
      { h3: R`Speed of efflux: Torricelli's law` },
      R`Water flows out of a small hole at depth h below the surface of an open tank. Applying Bernoulli between the surface (speed ≈ 0, pressure \(P_0\)) and the hole (pressure \(P_0\)): \[v = \sqrt{2gh}\] the same speed as a body falling freely through h.`,
      { fig: figTorricelli, cap: R`Water leaving a hole a depth h below the surface has speed \(\sqrt{2gh}\).` },
      { ex: { q: R`Find the speed of water leaving a hole 5 m below the surface of a tank. (g = 9.8 m/s²)`,
        steps: [R`\(v = \sqrt{2\times9.8\times5}\).`], ans: R`≈ 9.9 m/s` } },
      { h3: R`Venturimeter` },
      R`A venturimeter measures flow speed in a pipe. At its narrow throat the speed is higher and the pressure lower; a manometer measures the pressure difference, and Bernoulli plus continuity give the speed: \(v_1 = \sqrt{\dfrac{2\Delta P}{\rho\left((A_1/A_2)^2 - 1\right)}}\). Carburettors, sprayers and atomisers use the same low-pressure throat to suck in liquid.`,
      { h3: R`Dynamic lift` },
      R`An aeroplane wing is shaped so that air flows faster over its curved top than under its flatter bottom. The pressure below is greater, giving an upward <b>dynamic lift</b>. A spinning ball swerves (the Magnus effect) for a similar reason: the spin makes air move faster on one side. Strong winds blow off roofs because fast wind above lowers the pressure on top.`,
      { check: { q: R`Why should you not stand very close to the edge of a railway platform when a fast train passes?`, ans: R`The fast-moving air near the train has low pressure, so the higher pressure behind you can push you towards the train.` } }
    ] },

    { h: R`Surface tension and surface energy`, t: [7], blocks: [
      R`A needle can float on water; small drops are round; insects walk on ponds. The surface of a liquid behaves like a stretched elastic skin. This is <b>surface tension</b>.`,
      { fig: figMolecules, cap: R`A molecule inside a liquid is pulled equally in all directions. A molecule at the surface is pulled only sideways and inward, so the surface tends to shrink.` },
      R`<b>Surface tension</b> T is the force per unit length acting along the surface, perpendicular to any line drawn on it: \(T = F/L\) (N/m). Water at room temperature has T ≈ 0.072 N/m. It decreases as temperature rises, and detergents reduce it greatly.`,
      R`To increase the surface area, molecules must be brought up from inside against the inward pull, which needs energy. <b>Surface energy</b> is the work done per unit increase in area, and it equals the surface tension: \(W = T\,\Delta A\) (so N/m = J/m²).`,
      { ex: { q: R`Find the work needed to blow a soap bubble of radius 1 cm. (T = 0.03 N/m)`,
        steps: [R`A soap film has two surfaces (inside and outside), so \(\Delta A = 2\times4\pi r^2\).`, R`\(W = 8\pi r^2T = 8\pi\times10^{-4}\times0.03\).`], ans: R`≈ 7.5 × 10⁻⁵ J` } },
      { adv: R`<b>Splitting a drop.</b> A drop of radius R breaks into n equal droplets, each of radius \(r = R/n^{1/3}\) (volume is conserved). The total area grows from \(4\pi R^2\) to \(n\cdot4\pi r^2 = 4\pi R^2n^{1/3}\), so the energy needed is \(4\pi R^2T(n^{1/3} - 1)\). For R = 1 mm, n = 1000 and T = 0.072 N/m this is about 8.1 × 10⁻⁶ J. Merging droplets releases the same energy as heat.` },
      { check: { q: R`Why are small drops of liquid nearly spherical?`, ans: R`Surface tension minimises the surface area, and a sphere has the least area for a given volume.` } }
    ] },

    { h: R`Angle of contact; excess pressure in drops and bubbles`, t: [7], blocks: [
      R`Where a liquid surface meets a solid, the angle between the solid and the tangent to the liquid surface (measured inside the liquid) is the <b>angle of contact</b> θ. It depends on the balance between <b>adhesion</b> (liquid–solid attraction) and <b>cohesion</b> (liquid–liquid attraction).`,
      { fig: figContact, cap: R`Water wets glass (adhesion > cohesion, θ < 90°, nearly 0°). Mercury does not wet glass (cohesion wins, θ ≈ 140°).` },
      R`Because of surface tension, the pressure inside a curved surface is greater than outside. For a liquid drop (one surface) and a soap bubble (two surfaces) of radius r: \[P_{in} - P_{out} = \frac{2T}{r}\ \text{(drop)},\qquad P_{in} - P_{out} = \frac{4T}{r}\ \text{(bubble)}\]`,
      { derive: R`Excess pressure inside a drop`, steps: [
        R`Increase the radius of a drop from r to r + dr. The extra surface energy is \(T\cdot d(4\pi r^2) = 8\pi rT\,dr\).`,
        R`This comes from the work done by the excess pressure: \(\Delta P\cdot d\left(\frac43\pi r^3\right) = \Delta P\cdot4\pi r^2\,dr\).`,
        R`Equating: \(\Delta P = \dfrac{2T}{r}\). A bubble has two surfaces, so \(\Delta P = \dfrac{4T}{r}\).`
      ] },
      { ex: { q: R`Find the excess pressure inside (a) a water drop of radius 1 mm (T = 0.072 N/m) (b) a soap bubble of radius 1 cm (T = 0.025 N/m).`,
        steps: [R`(a) \(2T/r = 0.144/10^{-3}\). (b) \(4T/r = 0.1/0.01\).`], ans: R`(a) 144 Pa (b) 10 Pa` } },
      { tip: R`Smaller bubbles have higher pressure inside. If two bubbles of different sizes are connected by a tube, air flows from the small one into the big one: the small one shrinks and the big one grows.` },
      { check: { q: R`Why is it harder to start blowing a balloon or bubble than to keep blowing it?`, ans: R`When it is small, r is small, so the excess pressure needed (∝ 1/r) is large.` } }
    ] },

    { h: R`Capillary rise`, t: [7], blocks: [
      R`Dip a thin glass tube (a <b>capillary</b>) into water and the water rises inside it above the outside level. In mercury, the level inside falls. This is <b>capillarity</b>.`,
      { fig: figCapillary, cap: R`Water rises in a thin glass tube with a curved (concave) surface; mercury is pushed down with a convex surface.` },
      { derive: R`Height of capillary rise`, steps: [
        R`Surface tension acts along the circular line of contact (length \(2\pi r\)) at the angle of contact θ. Its upward component is \(2\pi rT\cos\theta\).`,
        R`This holds up the weight of the raised column: \(\pi r^2h\rho g\) (ignoring the small meniscus).`,
        R`So \(h = \dfrac{2T\cos\theta}{r\rho g}\). If θ > 90°, cos θ is negative and the liquid is depressed.`
      ] },
      { ex: { q: R`How high does water rise in a glass capillary of radius 0.5 mm? (T = 0.072 N/m, θ = 0°, ρ = 1000 kg/m³, g = 9.8 m/s²)`,
        steps: [R`\(h = \dfrac{2\times0.072}{0.5\times10^{-3}\times1000\times9.8}\).`], ans: R`≈ 2.9 cm` } },
      { points: [R`A narrower tube gives a higher rise (\(h \propto 1/r\)); so does a liquid with larger surface tension.`, R`Capillarity draws oil up a lamp wick, ink into a nib, and water through soil and plant tissues.`, R`Detergent lowers T, so water with detergent rises less (an experiment in the syllabus).`] },
      { check: { q: R`A capillary tube is shorter than the height to which water would rise. Does water overflow from the top?`, ans: R`No. The meniscus becomes flatter (its radius of curvature grows) so that the surface tension supports the shorter column.` } }
    ] },

    { h: R`Heat, temperature and temperature scales`, t: [8], blocks: [
      R`<b>Temperature</b> tells how hot or cold a body is: it is a measure of the average kinetic energy of its molecules. <b>Heat</b> is energy that flows from a hotter body to a colder one because of the temperature difference. Bodies contain internal energy; they do not "contain heat".`,
      R`Temperature scales use two fixed points, the melting point of ice and the boiling point of water at 1 atm:`,
      { table: { head: [R`Scale`, R`Ice point`, R`Steam point`, R`Conversion`], rows: [
        [R`Celsius`, R`0 °C`, R`100 °C`, R`–`], [R`Fahrenheit`, R`32 °F`, R`212 °F`, R`\(F = \frac95C + 32\)`], [R`Kelvin (absolute)`, R`273.15 K`, R`373.15 K`, R`\(T = C + 273.15\)`]] } },
      R`The Kelvin scale starts at <b>absolute zero</b> (0 K = −273.15 °C), the lowest possible temperature. An ideal-gas thermometer defines it: the pressure of a gas at constant volume is proportional to its absolute temperature.`,
      { ex: { q: R`At what temperature do the Celsius and Fahrenheit scales give the same reading?`,
        steps: [R`Set F = C: \(C = \frac95C + 32\), so \(-\frac45C = 32\).`], ans: R`−40° (−40 °C = −40 °F)` } },
      { check: { q: R`Convert 37 °C to kelvin and to Fahrenheit.`, ans: R`310.15 K; 98.6 °F.` } }
    ] },

    { h: R`Thermal expansion`, t: [8], blocks: [
      R`Most materials expand when heated, because their molecules vibrate more and move slightly apart. For a temperature rise ΔT:`,
      { table: { head: [R`Type`, R`Formula`, R`Coefficient`], rows: [
        [R`Linear`, R`\(\Delta L = \alpha L\Delta T\)`, R`α (per K)`], [R`Area`, R`\(\Delta A = \beta A\Delta T\)`, R`\(\beta = 2\alpha\)`], [R`Volume`, R`\(\Delta V = \gamma V\Delta T\)`, R`\(\gamma = 3\alpha\)`]] } },
      R`Liquids and gases have only volume expansion. For an ideal gas at constant pressure, \(\gamma = 1/T\) (about 1/273 per K at 0 °C), far larger than for solids.`,
      { ex: { q: R`A 25 m steel rail (α = 1.2 × 10⁻⁵ per K) heats up by 40 °C in summer. How much longer does it get?`,
        steps: [R`\(\Delta L = 25\times1.2\times10^{-5}\times40\).`], ans: R`1.2 cm, which is why gaps are left between rails` } },
      { h3: R`Anomalous expansion of water` },
      { fig: figWater, cap: R`Water contracts when heated from 0 °C to 4 °C and expands above 4 °C, so it is densest at 4 °C.` },
      R`Because water is densest at 4 °C, in winter the coldest water floats to the top of a lake and freezes there. The ice insulates the water below, which stays at about 4 °C, so fish survive.`,
      { adv: R`<b>Thermal stress.</b> If a rod is clamped so it cannot expand, heating it creates a compressive stress \(Y\alpha\Delta T\) (the stress needed to squeeze it back by the expansion it wanted). This is why bridges have expansion joints and railway tracks have gaps.` },
      { check: { q: R`A metal plate with a hole is heated. Does the hole get bigger or smaller?`, ans: R`Bigger: the whole plate, including the hole, expands like a photographic enlargement.` } }
    ] },

    { h: R`Calorimetry and specific heat capacity`, t: [8], blocks: [
      R`The heat needed to raise the temperature of a body is \[Q = mc\Delta T\] where c is the <b>specific heat capacity</b> (J kg⁻¹ K⁻¹), a property of the material. Water has an unusually large value, 4200 J kg⁻¹ K⁻¹, which is why it is used in car radiators and hot-water bottles, and why coastal climates are mild. <b>Heat capacity</b> of a body is mc; <b>molar heat capacity</b> is the heat per mole per kelvin.`,
      R`<b>Principle of calorimetry</b> (method of mixtures): when hot and cold bodies are mixed in an insulated container, heat lost by the hot bodies = heat gained by the cold bodies.`,
      { ex: { q: R`0.2 kg of water at 80 °C is mixed with 0.3 kg of water at 20 °C. Find the final temperature.`,
        steps: [R`\(0.2\times c\times(80 - T) = 0.3\times c\times(T - 20)\).`, R`\(16 - 0.2T = 0.3T - 6\), so \(0.5T = 22\).`], ans: R`44 °C` } },
      { ex: { q: R`A 0.1 kg piece of metal at 100 °C is dropped into 0.2 kg of water at 20 °C. The final temperature is 24 °C. Find the specific heat of the metal (ignore the container).`,
        steps: [R`Heat lost by metal = heat gained by water: \(0.1\,c\times76 = 0.2\times4200\times4 = 3360\).`], ans: R`≈ 442 J kg⁻¹ K⁻¹ (close to iron)` } },
      { check: { q: R`Why does sand on a beach get hotter than the sea on a sunny day?`, ans: R`Sand has a much smaller specific heat than water, so the same heat raises its temperature more.` } }
    ] },

    { h: R`Change of state and latent heat`, t: [8], blocks: [
      R`During melting or boiling, heat is absorbed but the temperature stays constant: the energy goes into breaking intermolecular bonds rather than speeding up the molecules. The heat per unit mass needed for a change of state at constant temperature is the <b>latent heat</b>: \(Q = mL\).`,
      { fig: figHeating, cap: R`Heating ice from −20 °C to steam. The flat parts are changes of state: melting at 0 °C and boiling at 100 °C. Boiling takes much longer because the latent heat of vaporisation is large.` },
      { table: { head: [R`Quantity for water`, R`Value`], rows: [
        [R`Specific heat of ice`, R`2100 J kg⁻¹ K⁻¹`], [R`Specific heat of water`, R`4200 J kg⁻¹ K⁻¹`], [R`Latent heat of fusion`, R`3.34 × 10⁵ J/kg (80 cal/g)`], [R`Latent heat of vaporisation`, R`2.26 × 10⁶ J/kg (540 cal/g)`]] } },
      { ex: { q: R`How much heat converts 1 kg of ice at −10 °C into steam at 100 °C?`,
        steps: [R`Warm the ice: 1 × 2100 × 10 = 21 000 J. Melt it: 334 000 J.`, R`Warm the water: 1 × 4200 × 100 = 420 000 J. Boil it: 2 260 000 J.`], ans: R`≈ 3.04 × 10⁶ J (three-quarters of it for boiling)` } },
      { ex: { q: R`0.1 kg of ice at 0 °C is dropped into 0.5 kg of water at 30 °C. Find the final temperature.`,
        steps: [R`Heat to melt the ice = 0.1 × 334 000 = 33 400 J. The water can give up to 0.5 × 4200 × 30 = 63 000 J cooling to 0 °C, so all the ice melts.`, R`\(0.5\times4200\times(30 - T) = 33\,400 + 0.1\times4200\times T\), so \(63\,000 - 2100T = 33\,400 + 420T\).`], ans: R`T ≈ 11.7 °C` } },
      R`Boiling point rises with pressure, which is how a pressure cooker cooks faster (water boils at about 120 °C inside). Melting point of ice falls slightly with pressure (regelation).`,
      { mistake: R`Assuming the mixture always ends above 0 °C. First check whether there is enough heat to melt all the ice; if not, the final temperature is 0 °C with some ice left.` },
      { check: { q: R`Why does steam at 100 °C cause worse burns than water at 100 °C?`, ans: R`Steam releases its large latent heat (2.26 MJ/kg) when it condenses on the skin, in addition to the heat released as the water cools.` } }
    ] },

    { h: R`Heat transfer: conduction`, t: [9], blocks: [
      R`Heat travels in three ways: conduction, convection and radiation. In <b>conduction</b>, heat passes through a material from molecule to molecule (and, in metals, carried by free electrons) without the material itself moving.`,
      { fig: figConduct, cap: R`Heat flows along a rod from the hot end to the cold end.` },
      R`In the steady state, the rate of heat flow through a rod of length L and area A is \[H = \frac{dQ}{dt} = \frac{kA(T_1 - T_2)}{L}\] where k is the <b>thermal conductivity</b> (W m⁻¹ K⁻¹): about 400 for copper, 0.8 for brick, 0.02 for air.`,
      R`This is like Ohm's law: heat current = temperature difference ÷ <b>thermal resistance</b> \(R_{th} = \dfrac{L}{kA}\). Slabs in series add their thermal resistances; slabs in parallel add their conductances.`,
      { ex: { q: R`A copper rod (k = 400 W/m K) of area 1 cm² and length 0.5 m has its ends at 100 °C and 0 °C. Find the rate of heat flow.`,
        steps: [R`\(H = \dfrac{400\times10^{-4}\times100}{0.5}\).`], ans: R`8 W` } },
      { ex: { q: R`A wall has two layers, each 10 cm thick, with k = 0.8 and 0.2 W/m K. The outside faces are at 30 °C and 0 °C. Find the heat flow per m² and the temperature of the interface.`,
        steps: [R`Thermal resistances per m²: 0.1/0.8 = 0.125 and 0.1/0.2 = 0.5; total 0.625.`, R`Heat flow = 30/0.625 = 48 W/m². Interface: 30 − 48 × 0.125.`], ans: R`48 W/m²; 24 °C` } },
      { check: { q: R`Why do double-glazed windows keep a house warm?`, ans: R`The trapped air layer has very low thermal conductivity, giving a large thermal resistance.` } }
    ] },

    { h: R`Convection and radiation`, t: [9], blocks: [
      R`<b>Convection</b> is heat transfer by the actual movement of a fluid. Warm fluid expands, becomes less dense and rises; cooler fluid sinks to take its place, setting up convection currents. Natural convection drives sea breezes, land breezes and trade winds; forced convection uses fans or pumps (a room heater with a fan, a car radiator).`,
      R`<b>Radiation</b> is heat transfer by electromagnetic waves (mainly infrared). It needs no medium: this is how the Sun's heat reaches us across empty space, and it travels at the speed of light. All bodies above absolute zero radiate; hotter bodies radiate much more.`,
      { points: [R`Dark, rough surfaces are good absorbers and good emitters; shiny, light surfaces are poor absorbers and poor emitters.`, R`A thermos flask reduces all three: vacuum (no conduction or convection), silvered walls (little radiation).`, R`The greenhouse effect: sunlight passes in, but the infrared re-emitted by the warm ground is trapped.`] },
      { check: { q: R`Why are cooking pots often black on the bottom and shiny on the sides?`, ans: R`The black base absorbs heat well; the shiny sides lose little heat by radiation.` } }
    ] },

    { h: R`Newton's law of cooling`, t: [9], blocks: [
      R`<b>Newton's law of cooling:</b> the rate at which a body loses heat is proportional to the difference between its temperature T and the surrounding temperature \(T_s\), provided the difference is small: \[\frac{dT}{dt} = -k(T - T_s)\]`,
      R`Integrating gives exponential cooling: \(T - T_s = (T_0 - T_s)e^{-kt}\). For quick calculations, JEE often uses the average form: \(\dfrac{T_1 - T_2}{t} = k\left(\dfrac{T_1 + T_2}{2} - T_s\right)\).`,
      { ex: { q: R`A body cools from 80 °C to 60 °C in 5 minutes in a room at 20 °C. How long will it take to cool from 60 °C to 40 °C?`,
        steps: [R`First interval: \(\dfrac{20}{5} = k(70 - 20)\), so k = 0.08 per minute.`, R`Second interval: \(\dfrac{20}{t} = 0.08\times(50 - 20) = 2.4\), so t ≈ 8.3 min.`], ans: R`≈ 8.3 minutes (the exact exponential law gives 8.5 min)` } },
      { check: { q: R`Why does hot tea cool quickly at first and then more slowly?`, ans: R`The cooling rate is proportional to the temperature difference, which keeps shrinking.` } }
    ] },

    { h: R`Blackbody radiation`, t: [9], blocks: [
      R`A <b>perfect blackbody</b> absorbs all radiation falling on it, whatever the wavelength. A small hole in a hollow box with blackened walls is a good practical blackbody. When heated, a blackbody is also the best possible emitter.`,
      R`<b>Absorptive power</b> a is the fraction of incident radiation a surface absorbs (a = 1 for a blackbody). <b>Emissive power</b> e is the energy it radiates per unit area per second (at a given wavelength or in total).`,
      { points: [R`<b>Kirchhoff's law:</b> at a given temperature, the ratio of emissive power to absorptive power is the same for all bodies and equals the emissive power of a blackbody. Good absorbers are good emitters.`, R`<b>Stefan–Boltzmann law:</b> the total energy radiated per second by a body of area A and emissivity e at absolute temperature T is \(P = e\sigma AT^4\), with \(\sigma = 5.67\times10^{-8}\) W m⁻² K⁻⁴. The net loss to surroundings at \(T_s\) is \(e\sigma A(T^4 - T_s^4)\).`, R`<b>Wien's displacement law:</b> the wavelength at which a blackbody radiates most is inversely proportional to its temperature: \(\lambda_mT = b\), with \(b = 2.9\times10^{-3}\) m K.`] },
      { fig: figPlanck, cap: R`Energy radiated by a blackbody against wavelength. A hotter body radiates far more in total (the area under the curve ∝ T⁴), and its peak moves to shorter wavelengths: a heated iron rod glows dull red, then orange, then white.` },
      { ex: { q: R`(a) A blackbody sphere of radius 10 cm is at 1000 K. Find the power it radiates. (b) The Sun's spectrum peaks at about 500 nm. Estimate its surface temperature.`,
        steps: [R`(a) \(P = \sigma AT^4 = 5.67\times10^{-8}\times4\pi(0.1)^2\times10^{12}\).`, R`(b) \(T = \dfrac{b}{\lambda_m} = \dfrac{2.9\times10^{-3}}{500\times10^{-9}}\).`], ans: R`(a) ≈ 7.1 kW (b) ≈ 5800 K` } },
      { tip: R`If the absolute temperature doubles, the radiated power increases 2⁴ = 16 times and the peak wavelength halves.` },
      { check: { q: R`Why do stars that look blue have higher surface temperatures than red stars?`, ans: R`By Wien's law, a shorter peak wavelength (blue) means a higher temperature.` } }
    ] }
  ],
  summary: [
    R`Stress = F/A, strain = fractional deformation; Hooke's law: stress ∝ strain up to the proportional limit.`,
    R`\(Y = \frac{FL}{A\Delta L}\), \(B = -\frac{\Delta p}{\Delta V/V}\), \(G = \frac{F/A}{\theta}\); elastic energy density = ½ × stress × strain.`,
    R`Fluid pressure \(P = P_0 + \rho gh\), independent of container shape; 1 atm = 1.013 × 10⁵ Pa = 76 cm Hg.`,
    R`Pascal's law: \(F_1/A_1 = F_2/A_2\) (hydraulic lift and brakes).`,
    R`Archimedes: buoyant force = weight of fluid displaced; a floating body has fraction \(\rho_b/\rho_f\) submerged.`,
    R`Viscosity \(F = \eta A\,dv/dx\); Stokes \(F = 6\pi\eta rv\); terminal velocity \(v_t = \frac{2r^2(\rho - \sigma)g}{9\eta}\).`,
    R`Continuity \(A_1v_1 = A_2v_2\); Reynolds number \(R_e = \rho vD/\eta\) (streamline below ~2000).`,
    R`Bernoulli: \(P + \frac12\rho v^2 + \rho gh\) = constant; efflux speed \(\sqrt{2gh}\); venturimeter; dynamic lift.`,
    R`Surface tension T = F/L = surface energy per area; excess pressure 2T/r (drop), 4T/r (bubble); capillary rise \(h = \frac{2T\cos\theta}{r\rho g}\).`,
    R`\(F = \frac95C + 32\), T = C + 273.15; expansion \(\Delta L = \alpha L\Delta T\), β = 2α, γ = 3α; water is densest at 4 °C.`,
    R`\(Q = mc\Delta T\); calorimetry: heat lost = heat gained; latent heat \(Q = mL\) (water: 3.34 × 10⁵ and 2.26 × 10⁶ J/kg).`,
    R`Conduction \(H = kA\Delta T/L\), thermal resistance L/kA; convection by moving fluid; radiation needs no medium.`,
    R`Newton's law of cooling: rate ∝ \(T - T_s\) (exponential decay of the excess temperature).`,
    R`Kirchhoff: good absorbers are good emitters; Stefan \(P = e\sigma AT^4\); Wien \(\lambda_mT = 2.9\times10^{-3}\) m K.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §12.3 Stress, Strain, and Elastic Modulus`, url: 'https://openstax.org/books/university-physics-volume-1/pages/12-3-stress-strain-and-elastic-modulus' },
    { t: R`OpenStax University Physics Vol. 1, §14.1 Fluids, Density, and Pressure`, url: 'https://openstax.org/books/university-physics-volume-1/pages/14-1-fluids-density-and-pressure' },
    { t: R`OpenStax University Physics Vol. 1, §14.3 Pascal's Principle and Hydraulics`, url: 'https://openstax.org/books/university-physics-volume-1/pages/14-3-pascals-principle-and-hydraulics' },
    { t: R`OpenStax University Physics Vol. 1, §14.4 Archimedes' Principle and Buoyancy`, url: 'https://openstax.org/books/university-physics-volume-1/pages/14-4-archimedes-principle-and-buoyancy' },
    { t: R`OpenStax University Physics Vol. 1, §14.6 Bernoulli's Equation`, url: 'https://openstax.org/books/university-physics-volume-1/pages/14-6-bernoullis-equation' },
    { t: R`OpenStax University Physics Vol. 1, §14.7 Viscosity and Turbulence`, url: 'https://openstax.org/books/university-physics-volume-1/pages/14-7-viscosity-and-turbulence' },
    { t: R`OpenStax University Physics Vol. 2, §1.3 Thermal Expansion`, url: 'https://openstax.org/books/university-physics-volume-2/pages/1-3-thermal-expansion' },
    { t: R`OpenStax University Physics Vol. 2, §1.5 Phase Changes`, url: 'https://openstax.org/books/university-physics-volume-2/pages/1-5-phase-changes' },
    { t: R`OpenStax University Physics Vol. 2, §1.6 Mechanisms of Heat Transfer`, url: 'https://openstax.org/books/university-physics-volume-2/pages/1-6-mechanisms-of-heat-transfer' },
    { t: R`Wikipedia: Surface tension`, url: 'https://en.wikipedia.org/wiki/Surface_tension' },
    { t: R`Wikipedia: Capillary action`, url: 'https://en.wikipedia.org/wiki/Capillary_action' },
    { t: R`Wikipedia: Black-body radiation`, url: 'https://en.wikipedia.org/wiki/Black-body_radiation' }
  ]
});
})();
