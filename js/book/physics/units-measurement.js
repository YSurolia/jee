// Book chapter: Units and Measurements. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figScale = (function () {
  var items = [[-15, 'proton'], [-10, 'atom'], [-7, 'virus'], [-4, 'hair'], [0, 'you'], [4, 'Everest'], [7, 'Earth'], [11, 'Earth–Sun'], [16, 'light year'], [21, 'galaxy'], [26, 'universe']];
  var X = function (e) { return 30 + (e + 15) * 11.2; }, p = [D.arrow(20, 70, 500, 70, { w: 1.6, head: 8 })];
  for (var e = -15; e <= 26; e++) p.push(D.line(X(e), 66, X(e), 74, { color: 'm', w: e % 5 === 0 ? 1.5 : 0.8 }));
  items.forEach(function (it, k) {
    var up = k % 2 === 0;
    p.push(D.dot(X(it[0]), 70, { color: 'c', r: 4 }));
    p.push(D.text(X(it[0]), up ? 48 : 94, it[1], { size: 11, color: 'c' }));
    p.push(D.text(X(it[0]), up ? 32 : 110, '10^{' + String(it[0]).replace('-', '−') + '} m', { size: 10, color: 'm' }));
  });
  return D.svg(520, 125, p, 'Sizes in the universe on a powers-of-ten scale');
})();

var figParallax = D.svg(440, 190, [
  D.ellipse(80, 95, 26, 70, { color: 'm', dash: '4 4', w: 1.2 }),
  D.circle(80, 95, 9, { color: 'o', fill: 'o' }), D.text(80, 120, 'Sun', { size: 11, color: 'o' }),
  D.dot(80, 25, { color: 'b', r: 5 }), D.text(56, 22, 'Earth', { size: 11, color: 'b', anchor: 'end' }),
  D.dot(80, 165, { color: 'b', r: 5 }), D.text(56, 172, '6 months later', { size: 11, color: 'b', anchor: 'end' }),
  D.line(80, 25, 400, 95, { color: 'k', w: 1.2 }), D.line(80, 165, 400, 95, { color: 'k', w: 1.2 }), D.line(80, 95, 400, 95, { color: 'm', w: 1, dash: true }),
  D.circle(400, 95, 6, { color: 'k', fill: 'k' }), D.text(412, 95, 'star', { anchor: 'start', size: 12 }),
  D.angle(400, 95, 46, 167.6, 180, 'θ', { lr: 12 }),
  D.arrow(100, 95, 100, 30, { color: 'c', w: 1.4, head: 6 }), D.text(108, 62, '1 AU', { anchor: 'start', size: 12, color: 'c' }),
  D.text(240, 108, 'distance d', { color: 'm', size: 12 })
], 'Parallax of a star seen from two ends of the Earth orbit');

var figVernier = (function () {
  var p = [], X = function (mm) { return 20 + mm * 12; }, x0 = X(24.6);
  p.push(D.rect(10, 30, 500, 40, { color: 'm', fill: 'soft', w: 1 }));
  for (var mm = 0; mm <= 40; mm++) {
    var big = mm % 10 === 0, mid = mm % 5 === 0;
    p.push(D.line(X(mm), 70, X(mm), 70 - (big ? 22 : mid ? 15 : 10), { w: big ? 1.6 : 1 }));
    if (big) p.push(D.text(X(mm), 40, String(mm / 10), { size: 12, bold: true }));
  }
  p.push(D.text(500, 20, 'cm', { size: 11, color: 'm' }));
  p.push(D.rect(x0 - 8, 70, 10.8 * 10 + 16, 38, { color: 'c', fill: 'soft', w: 1.2 }));
  for (var k = 0; k <= 10; k++) {
    var xx = x0 + 10.8 * k;
    p.push(D.line(xx, 70, xx, 70 + (k % 5 === 0 ? 20 : 13), { color: k === 6 ? 'r' : 'c', w: k === 6 ? 2.4 : 1.2 }));
    if (k % 5 === 0) p.push(D.text(xx, 100, String(k), { size: 11, color: 'c' }));
  }
  p.push(D.arrow(380, 135, 380, 92, { color: 'r', w: 1.6, head: 7 }), D.text(380, 146, '6th vernier mark lines up', { size: 11, color: 'r' }));
  p.push(D.arrow(x0, 125, x0, 95, { color: 'c', w: 1.6, head: 7 }), D.text(x0 - 6, 146, 'vernier zero', { size: 11, color: 'c', anchor: 'end' }));
  return D.svg(520, 158, p, 'Vernier callipers reading 2.46 cm');
})();

var figScrew = (function () {
  var p = [], X = function (mm) { return 30 + mm * 40; };
  p.push(D.rect(20, 70, 260, 30, { color: 'm', fill: 'soft', w: 1 }));
  p.push(D.line(20, 85, 280, 85, { w: 1.6 }));
  for (var mm = 0; mm <= 5; mm++) {
    p.push(D.line(X(mm), 85, X(mm), 70, { w: 1.4 }));
    p.push(D.text(X(mm), 60, String(mm), { size: 11 }));
    p.push(D.line(X(mm + 0.5), 85, X(mm + 0.5), 98, { w: 1.2 }));
  }
  p.push(D.text(20, 50, 'main scale (mm)', { size: 11, color: 'm', anchor: 'start' }));
  p.push(D.rect(262, 40, 120, 90, { color: 'c', fill: 'soft', w: 1.4, r: 6 }));
  for (var d = 24; d <= 32; d++) {
    var y = 85 - (d - 28) * 9;
    p.push(D.line(262, y, 262 + (d % 5 === 0 ? 20 : 12), y, { color: 'c', w: d === 28 ? 2.4 : 1.2 }));
    if (d % 5 === 0) p.push(D.text(290, y, String(d), { size: 11, color: 'c', anchor: 'start' }));
  }
  p.push(D.text(322, 145, 'thimble (circular scale)', { size: 11, color: 'c' }));
  p.push(D.arrow(400, 85, 330, 85, { color: 'r', w: 1.6, head: 7 }), D.text(404, 85, '28 on the line', { size: 11, color: 'r', anchor: 'start' }));
  return D.svg(500, 155, p, 'Screw gauge reading 5.78 mm');
})();

var figRuler = (function () {
  var p = [], X = function (mm) { return 20 + mm * 8; };
  p.push(D.rect(X(0), 22, X(40) - X(0), 18, { color: 'o', fill: 'soft', w: 1.4 }));
  p.push(D.poly([[X(40), 22], [X(43.6), 31], [X(40), 40]], { color: 'o', fill: 'soft', closed: true, w: 1.4 }));
  p.push(D.rect(X(0) - 6, 50, X(60) - X(0) + 12, 44, { color: 'm', fill: 'soft', w: 1 }));
  for (var mm = 0; mm <= 60; mm++) {
    var big = mm % 10 === 0, mid = mm % 5 === 0;
    p.push(D.line(X(mm), 50, X(mm), 50 + (big ? 18 : mid ? 13 : 8), { w: big ? 1.5 : 1 }));
    if (big) p.push(D.text(X(mm), 80, String(mm / 10), { size: 12, bold: true }));
  }
  p.push(D.line(X(43.6), 14, X(43.6), 104, { color: 'r', dash: '3 3', w: 1.2 }));
  p.push(D.text(X(43.6) + 6, 112, 'about 4.36 cm: the 6 is estimated', { anchor: 'start', size: 12, color: 'r' }));
  return D.svg(520, 122, p, 'Measuring a pencil with a millimetre ruler');
})();

var figTargets = (function () {
  function target(dots, title) {
    var p = [];
    [44, 32, 20, 8].forEach(function (r, i) { p.push(D.circle(55, 55, r, { color: i === 3 ? 'r' : 'm', w: 1.2, fill: i === 3 ? 'soft' : undefined })); });
    dots.forEach(function (d) { p.push(D.dot(55 + d[0], 55 + d[1], { color: 'c', r: 3.4 })); });
    return [D.svg(110, 112, p, title), title];
  }
  return D.row([
    target([[-3, 2], [2, -3], [1, 3], [-2, -1], [3, 1]], 'accurate and precise'),
    target([[24, -22], [27, -19], [22, -25], [26, -24], [29, -21]], 'precise, not accurate'),
    target([[-25, 10], [18, 20], [10, -28], [-14, -18], [28, 4]], 'accurate on average, not precise'),
    target([[-30, 22], [-12, 30], [-34, 6], [-20, 36], [-6, 14]], 'neither')
  ]);
})();

var figSpread = D.plot({
  w: 380, h: 210, x: [1.38, 1.62], y: [0, 9], xlabel: 'T (s)', ylabel: 'number of readings', mathLabels: false, noOrigin: true,
  xticks: [[1.42, '1.42'], [1.46, '1.46'], [1.50, '1.50'], [1.54, '1.54'], [1.58, '1.58']],
  extra: function (X, Y) {
    var counts = [[1.42, 1], [1.44, 2], [1.46, 4], [1.48, 6], [1.50, 8], [1.52, 6], [1.54, 4], [1.56, 2], [1.58, 1]], p = [];
    counts.forEach(function (c) { p.push(D.rect(X(c[0] - 0.009), Y(c[1]), X(c[0] + 0.009) - X(c[0] - 0.009), Y(0) - Y(c[1]), { color: 'c', fill: 'soft', w: 1 })); });
    return p;
  },
  fns: [{ f: function (x) { return 8 * Math.exp(-Math.pow((x - 1.5) / 0.04, 2) / 2); }, color: 'o', w: 2 }],
  segs: [{ x1: 1.5, y1: 0, x2: 1.5, y2: 8.6, color: 'r', dash: true, w: 1.3 }],
  texts: [{ x: 1.505, y: 8.6, s: 'mean', color: 'r', anchor: 'start', size: 12 }],
  label: 'Spread of repeated readings around the mean'
});

var figPendulum = D.svg(220, 180, [
  D.line(40, 20, 180, 20, { w: 2 }), D.ground(40, 20, 180, 20, { side: -1 }),
  D.line(110, 20, 110, 160, { color: 'm', dash: true, w: 1 }),
  D.line(110, 20, 160, 140, { w: 1.8 }), D.circle(160, 140, 12, { color: 'c', fill: 'soft', w: 2 }), D.text(160, 141, 'm', { math: true }),
  D.angle(110, 20, 34, 270, 292.6, 'θ', { lr: 10 }), D.text(146, 76, 'l', { math: true, anchor: 'start' }),
  D.arrow(160, 156, 160, 176, { color: 'r', w: 1.6, head: 6 }), D.text(170, 170, 'g', { math: true, color: 'r', anchor: 'start' })
], 'Simple pendulum of length l and mass m');

// ---------- chapter text ----------
JEE.book('physics', 'units-measurement', {
  intro: [
    R`How long is a cricket pitch? How heavy is a bag of rice? How long does a train take to reach Delhi? Every answer is a <b>number with a unit</b>: 20.12 m, 25 kg, 6 h. Physics is built on measurement, so this first chapter teaches the language that every other chapter uses.`,
    R`You will learn what physical quantities and units are, how the International System (SI) works, how to read a vernier callipers and a screw gauge, how to write a measurement honestly using significant figures and error estimates, and how the powerful tool of <b>dimensional analysis</b> lets you check formulas and even discover new ones without any experiment. These ideas appear directly in JEE questions every year, and indirectly in all the others.`
  ],
  sections: [
    { h: R`Why we measure: physical quantities and units`, t: [0], blocks: [
      R`A <b>physical quantity</b> is anything that can be measured and described by a number: length, mass, time, temperature, speed, force, charge. "Beauty" or "honesty" are not physical quantities, because there is no instrument that measures them.`,
      R`To measure a quantity, we compare it with a fixed, agreed amount of the same kind, called a <b>unit</b>. When we say a rope is 5 m long, we mean it is 5 times as long as one metre. So every measurement has two parts: \[\text{physical quantity} = (\text{numerical value})\times(\text{unit}) = n\,u\]`,
      R`If you change to a smaller unit, the number gets bigger in the same proportion: \(n_1u_1 = n_2u_2\). For example, 2 m = 200 cm: the unit became 100 times smaller and the number became 100 times larger.`,
      { h3: R`What makes a good unit?` },
      { points: [R`It must be <b>well defined</b>, so that everyone means exactly the same thing.`, R`It must be <b>reproducible</b> anywhere in the world, at any time.`, R`It should not change with time, temperature or place.`, R`It should be of a convenient size for everyday measurements.`] },
      { analogy: R`Using a "hand-span" as a unit of length is like asking each shopkeeper to use their own weighing stone: two people will get different answers. That is why the world agreed on standard units.` },
      { check: { q: R`A table is 1.5 m long. What is its length in centimetres? Why is the number bigger?`, ans: R`150 cm. The centimetre is 100 times smaller than the metre, so the number becomes 100 times larger (\(n_1u_1 = n_2u_2\)).` } }
    ] },

    { h: R`Systems of units and the SI`, t: [0], blocks: [
      R`A <b>system of units</b> is a complete set of units for all physical quantities. Several systems have been used:`,
      { table: { head: [R`System`, R`Length`, R`Mass`, R`Time`], rows: [
        [R`CGS (Gaussian)`, R`centimetre`, R`gram`, R`second`], [R`FPS (British)`, R`foot`, R`pound`, R`second`], [R`MKS`, R`metre`, R`kilogram`, R`second`], [R`SI (since 1960)`, R`metre`, R`kilogram`, R`second`]] } },
      R`The <b>Système International d'Unités (SI)</b> is now used all over the world in science, trade and in JEE. It has <b>seven base units</b>. Since 2019, each one is defined by fixing the exact value of a constant of nature, so the units can be reproduced in any good laboratory:`,
      { table: { head: [R`Base quantity`, R`Unit (symbol)`, R`Defined by fixing`], rows: [
        [R`Length`, R`metre (m)`, R`speed of light \(c = 299\,792\,458\) m/s`],
        [R`Mass`, R`kilogram (kg)`, R`Planck constant \(h = 6.626\,070\,15\times10^{-34}\) J s`],
        [R`Time`, R`second (s)`, R`caesium-133 frequency \(\Delta\nu_{Cs} = 9\,192\,631\,770\) Hz`],
        [R`Electric current`, R`ampere (A)`, R`elementary charge \(e = 1.602\,176\,634\times10^{-19}\) C`],
        [R`Temperature`, R`kelvin (K)`, R`Boltzmann constant \(k = 1.380\,649\times10^{-23}\) J/K`],
        [R`Amount of substance`, R`mole (mol)`, R`Avogadro constant \(N_A = 6.022\,140\,76\times10^{23}\) mol⁻¹`],
        [R`Luminous intensity`, R`candela (cd)`, R`luminous efficacy of 540 THz light, 683 lm/W`]] } },
      R`Two <b>supplementary</b> (dimensionless) units are also used: the <b>radian</b> (rad) for plane angle and the <b>steradian</b> (sr) for solid angle. One radian is the angle subtended at the centre of a circle by an arc equal to the radius; a full circle is \(2\pi\) rad, and a whole sphere is \(4\pi\) sr.`,
      { h3: R`SI prefixes` },
      R`Prefixes let us write very large or small values neatly:`,
      { table: { head: [R`Power`, R`Prefix (symbol)`, R`Power`, R`Prefix (symbol)`], rows: [
        [R`\(10^{-1}\)`, R`deci (d)`, R`\(10^{1}\)`, R`deca (da)`], [R`\(10^{-2}\)`, R`centi (c)`, R`\(10^{2}\)`, R`hecto (h)`], [R`\(10^{-3}\)`, R`milli (m)`, R`\(10^{3}\)`, R`kilo (k)`],
        [R`\(10^{-6}\)`, R`micro (μ)`, R`\(10^{6}\)`, R`mega (M)`], [R`\(10^{-9}\)`, R`nano (n)`, R`\(10^{9}\)`, R`giga (G)`], [R`\(10^{-12}\)`, R`pico (p)`, R`\(10^{12}\)`, R`tera (T)`],
        [R`\(10^{-15}\)`, R`femto (f)`, R`\(10^{15}\)`, R`peta (P)`], [R`\(10^{-18}\)`, R`atto (a)`, R`\(10^{18}\)`, R`exa (E)`]] } },
      { mistake: R`Mixing up m (milli, \(10^{-3}\)) and M (mega, \(10^{6}\)). The case of a prefix letter matters: 1 mW is a billion times smaller than 1 MW.` },
      { check: { q: R`How many radians are there in 180°?`, ans: R`\(\pi\) rad (≈ 3.14 rad).` } }
    ] },

    { h: R`Fundamental and derived units`, t: [1], blocks: [
      R`The seven base quantities are called <b>fundamental</b> quantities, because they cannot be expressed in terms of each other. All other quantities are <b>derived</b> from them using formulas, and their units are derived units.`,
      { table: { head: [R`Quantity`, R`Defining formula`, R`SI unit`, R`Special name`], rows: [
        [R`Area`, R`length × breadth`, R`m²`, R`–`], [R`Velocity`, R`displacement ÷ time`, R`m s⁻¹`, R`–`], [R`Acceleration`, R`velocity ÷ time`, R`m s⁻²`, R`–`],
        [R`Force`, R`mass × acceleration`, R`kg m s⁻²`, R`newton (N)`], [R`Work, energy`, R`force × distance`, R`kg m² s⁻²`, R`joule (J)`], [R`Power`, R`work ÷ time`, R`kg m² s⁻³`, R`watt (W)`],
        [R`Pressure`, R`force ÷ area`, R`kg m⁻¹ s⁻²`, R`pascal (Pa)`], [R`Frequency`, R`1 ÷ period`, R`s⁻¹`, R`hertz (Hz)`], [R`Charge`, R`current × time`, R`A s`, R`coulomb (C)`],
        [R`Potential difference`, R`work ÷ charge`, R`kg m² s⁻³ A⁻¹`, R`volt (V)`]] } },
      { h3: R`Rules for writing SI units` },
      { points: [R`Unit symbols are written in lower case unless named after a person: m, kg, s, but N (Newton), Pa (Pascal), W (Watt).`, R`The full names of units are always written in lower case: newton, joule, kelvin.`, R`Symbols have no full stop and no plural: 10 kg, not 10 kgs or 10 kg.`, R`Leave a space between the number and the unit: 25 m, not 25m. Use a dot or space between unit symbols: N m (newton metre), not Nm.`, R`Do not use more than one solidus: write m s⁻² or m/s², not m/s/s.`] },
      { ex: { q: R`Express the unit of pressure, the pascal, in terms of base units.`,
        steps: [R`Pressure = force ÷ area, and 1 N = 1 kg m s⁻².`, R`1 Pa = 1 N/m² = 1 kg m s⁻² ÷ m².`],
        ans: R`1 Pa = 1 kg m⁻¹ s⁻²` } },
      { check: { q: R`Which is written correctly: "5 Kg", "5 kgs" or "5 kg"?`, ans: R`5 kg.` } }
    ] },

    { h: R`Very large and very small quantities`, t: [0], blocks: [
      R`Nature covers an enormous range of sizes: from a proton (about \(10^{-15}\) m across) to the observable universe (about \(10^{26}\) m). Scientists write such numbers in <b>powers of ten</b> and use convenient special units.`,
      { fig: figScale, cap: R`Sizes in the universe on a powers-of-ten scale. Each tick is ten times larger than the one before.` },
      { table: { head: [R`Practical unit`, R`Value`, R`Used for`], rows: [
        [R`fermi (fm)`, R`\(10^{-15}\) m`, R`sizes of nuclei`], [R`ångström (Å)`, R`\(10^{-10}\) m`, R`sizes of atoms, wavelengths of light`],
        [R`astronomical unit (AU)`, R`\(1.496\times10^{11}\) m (mean Earth–Sun distance)`, R`distances in the solar system`],
        [R`light year (ly)`, R`\(9.46\times10^{15}\) m (distance light travels in a year)`, R`distances to stars`],
        [R`parsec (pc)`, R`\(3.08\times10^{16}\) m = 3.26 ly`, R`astronomy`],
        [R`atomic mass unit (u)`, R`\(1.66\times10^{-27}\) kg (\(\tfrac1{12}\) of a C-12 atom)`, R`masses of atoms`]] } },
      { h3: R`The parallax method` },
      R`How can we measure the distance to a star we can never visit? Hold a pencil at arm's length and look at it first with one eye and then with the other: it seems to jump against the background. This apparent shift is called <b>parallax</b>. Astronomers observe a nearby star from two ends of the Earth's orbit, six months apart, and measure the tiny angle through which it shifts.`,
      { fig: figParallax, cap: R`Parallax of a star. The baseline is 1 AU (Earth–Sun distance). If the parallax angle is θ (in radians, very small), the distance is \(d \approx \dfrac{1\ \text{AU}}{\theta}\).` },
      R`The <b>parsec</b> ("parallax second") is defined as the distance at which 1 AU subtends an angle of exactly one second of arc (1″ = 1/3600 of a degree).`,
      { ex: { q: R`Show that one parsec is about \(3.08\times10^{16}\) m and about 3.26 light years.`,
        steps: [R`\(1'' = \dfrac{1}{3600}\times\dfrac{\pi}{180}\) rad \(= 4.85\times10^{-6}\) rad.`, R`\(d = \dfrac{1\ \text{AU}}{\theta} = \dfrac{1.496\times10^{11}}{4.85\times10^{-6}}\) m.`, R`Divide by 1 ly \(= 9.46\times10^{15}\) m.`],
        ans: R`\(d \approx 3.08\times10^{16}\) m ≈ 3.26 ly` } },
      { check: { q: R`Is the light year a unit of time or of distance?`, ans: R`Distance: the distance light travels in one year, about \(9.46\times10^{15}\) m.` } }
    ] },

    { h: R`Least count and the vernier callipers`, t: [2], blocks: [
      R`The <b>least count</b> (LC) of an instrument is the smallest value it can measure accurately. A metre scale has a least count of 1 mm. To measure smaller lengths we need cleverer instruments.`,
      { h3: R`How a vernier works` },
      R`Vernier callipers have a main scale (marked in mm) and a small sliding <b>vernier scale</b>. On a common vernier, 10 vernier divisions (VSD) are exactly as long as 9 main-scale divisions (MSD). So each vernier division is 0.9 mm, slightly shorter than a main-scale division. The difference is the least count: \[\text{LC} = 1\ \text{MSD} - 1\ \text{VSD} = \frac{\text{value of 1 MSD}}{\text{number of vernier divisions}} = \frac{1\ \text{mm}}{10} = 0.1\ \text{mm} = 0.01\ \text{cm}\]`,
      { fig: figVernier, cap: R`Reading a vernier. The vernier zero lies just past 2.4 cm on the main scale, and the 6th vernier mark lines up exactly with a main-scale mark. Reading = 2.4 cm + 6 × 0.01 cm = 2.46 cm.` },
      R`<b>Reading</b> = main scale reading (MSR, just before the vernier zero) + (vernier coincidence, VC) × LC.`,
      { h3: R`Zero error and zero correction` },
      R`When the jaws are closed, the vernier zero should coincide with the main-scale zero. If it lies to the <b>right</b>, the instrument reads too much: a <b>positive zero error</b>. If it lies to the left, the error is negative. Always subtract the zero error (with its sign) from the observed reading: \[\text{true reading} = \text{observed reading} - \text{zero error}\]`,
      { ex: { q: R`With the jaws closed, the 3rd vernier mark coincides and the vernier zero is to the right of the main zero. A rod then gives the reading of the figure (2.46 cm). Find its true diameter.`,
        steps: [R`Zero error = +3 × 0.01 cm = +0.03 cm.`, R`True reading = 2.46 − (+0.03).`],
        ans: R`2.43 cm` } },
      { adv: R`JEE Advanced asks about the methods of measurement in the standard experiments (vernier, screw gauge, pendulum, Searle's apparatus, metre bridge and others) and about estimating errors in them. Always ask: what is the least count, what is the zero error, and which reading contributes most to the final error?` },
      { tip: R`For any vernier, LC = (value of the smallest main-scale division) ÷ (number of vernier divisions). If n VSD = (n − 1) MSD, this is the formula. Some questions use other combinations (for example 20 VSD = 19 MSD), so derive LC from "1 MSD − 1 VSD" each time.` },
      { check: { q: R`A vernier has 20 divisions equal to 19 main-scale divisions of 1 mm each. What is its least count?`, ans: R`1 VSD = 19/20 mm = 0.95 mm, so LC = 1 − 0.95 = 0.05 mm.` } }
    ] },

    { h: R`The screw gauge`, t: [2], blocks: [
      R`A screw gauge (micrometer) measures even smaller lengths, such as the diameter of a thin wire. Turning the thimble once moves the spindle forward by a fixed distance called the <b>pitch</b> (often 0.5 mm or 1 mm). The thimble carries a circular scale with N divisions (often 50 or 100). So \[\text{LC} = \frac{\text{pitch}}{\text{number of divisions on the circular scale}}\] With pitch 0.5 mm and 50 divisions, LC = 0.01 mm.`,
      { fig: figScrew, cap: R`Reading a screw gauge with pitch 0.5 mm and 50 circular divisions. The thimble edge has passed the 5.5 mm mark (the lower half-millimetre marks), and division 28 of the circular scale is on the reference line. Reading = 5.5 mm + 28 × 0.01 mm = 5.78 mm.` },
      R`<b>Reading</b> = linear (pitch) scale reading + (circular scale division on the reference line) × LC.`,
      { h3: R`Zero error of a screw gauge` },
      R`With the studs touching, the zero of the circular scale should be on the reference line. If the zero is <b>below</b> the line (the scale has gone past zero), the gauge reads too much: positive zero error. If the zero has not reached the line, the error is negative. As before, true reading = observed reading − zero error.`,
      { ex: { q: R`A screw gauge (LC 0.01 mm) has a zero error of −0.02 mm. It shows the reading in the figure. Find the true diameter.`,
        steps: [R`Observed reading = 5.78 mm.`, R`True reading = 5.78 − (−0.02).`],
        ans: R`5.80 mm` } },
      { mistake: R`Adding a negative zero error with the wrong sign. Always use true = observed − (zero error), keeping the sign of the zero error.` },
      { check: { q: R`A screw gauge has pitch 1 mm and 100 circular divisions. What is its least count?`, ans: R`1/100 mm = 0.01 mm.` } }
    ] },

    { h: R`Significant figures`, t: [3], blocks: [
      R`A measurement should show exactly how precise it is: no more and no less. The <b>significant figures</b> of a measured value are all the digits we are sure of, plus the first uncertain digit. If a ruler marked in mm shows a length between 4.3 cm and 4.4 cm, and we estimate 4.36 cm, then 4.36 has three significant figures.`,
      { fig: figRuler, cap: R`The pencil ends between the 4.3 cm and 4.4 cm marks. The digits 4 and 3 are certain; the last digit, 6, is our best estimate. All three are significant.` },
      { h3: R`Rules for counting significant figures` },
      { points: [R`All non-zero digits are significant: 2.43 has 3.`, R`Zeros between non-zero digits are significant: 2006 has 4.`, R`Leading zeros (before the first non-zero digit) are <b>not</b> significant: 0.0043 has 2. They only show where the decimal point is.`, R`Trailing zeros after a decimal point <b>are</b> significant: 4.300 has 4.`, R`Trailing zeros in a number without a decimal point are ambiguous: 4300 could have 2, 3 or 4. Scientific notation removes the doubt: \(4.3\times10^{3}\) has 2 and \(4.300\times10^{3}\) has 4.`] },
      R`Changing units does not change the number of significant figures: 2.30 m = 230 cm = \(2.30\times10^{2}\) cm = 0.00230 km, always 3 significant figures.`,
      { ex: { q: R`How many significant figures are there in (a) 0.007020 (b) 6.20 × 10³ (c) 3000 (d) 30.00?`,
        steps: [R`(a) Leading zeros don't count; 7, 0, 2 and the trailing 0 after the decimal point do: 4.`, R`(b) 6, 2 and 0: 3.`, R`(c) Without a decimal point, only the 3 is certainly significant: 1 (ambiguous).`, R`(d) Trailing zeros after the decimal point count: 4.`],
        ans: R`(a) 4 (b) 3 (c) 1 (d) 4` } },
      { check: { q: R`How many significant figures are there in 0.0500 kg?`, ans: R`3 (the 5 and the two trailing zeros).` } }
    ] },

    { h: R`Rounding off and calculating with significant figures`, t: [3], blocks: [
      { h3: R`Rounding off` },
      { points: [R`If the digit dropped is more than 5, increase the previous digit by 1: 2.746 → 2.75.`, R`If it is less than 5, leave the previous digit: 2.743 → 2.74.`, R`If it is exactly 5 (with nothing after it), make the previous digit even: 2.745 → 2.74, but 2.735 → 2.74.`] },
      { h3: R`Calculations` },
      { points: [R`<b>Multiplication and division:</b> the result has as many significant figures as the value with the fewest significant figures.`, R`<b>Addition and subtraction:</b> the result has as many decimal places as the value with the fewest decimal places.`, R`Exact numbers (like 2 in 2πr, or the number of items counted) have unlimited significant figures.`] },
      { ex: { q: R`Calculate and round correctly: (a) 4.2 × 1.25 (b) 2.5 + 3.42 + 1.1235.`,
        steps: [R`(a) 4.2 × 1.25 = 5.25. The fewest significant figures is 2 (in 4.2), so round to 2: the dropped digit is exactly 5 and the previous digit 2 is even, so 5.2.`, R`(b) The sum is 7.0435. The fewest decimal places is 1 (in 2.5), so round to 7.0.`],
        ans: R`(a) 5.2 (b) 7.0` } },
      { ex: { q: R`The side of a cube is measured as 1.2 cm. Find its volume with the correct number of significant figures.`,
        steps: [R`\(V = (1.2)^3 = 1.728\) cm³.`, R`The side has 2 significant figures, so the volume should too.`],
        ans: R`1.7 cm³` } },
      { mistake: R`Rounding at every intermediate step. Keep one or two extra digits during a calculation and round only the final answer.` },
      { check: { q: R`What is 12.11 + 18.0 + 1.012, rounded correctly?`, ans: R`31.122 → 31.1 (one decimal place, as in 18.0).` } }
    ] },

    { h: R`Errors in measurement: where they come from`, t: [4], blocks: [
      R`No measurement is perfect. The difference between a measured value and the true value is called the <b>error</b>. Errors are not "mistakes"; they are the honest uncertainty of every measurement. They come in two main kinds.`,
      { h3: R`Systematic errors` },
      R`These push every reading in the <b>same direction</b> (always too high or always too low). They can come from:`,
      { points: [R`<b>Instrumental errors:</b> a faulty or badly calibrated instrument, such as a zero error, or a thermometer whose scale is slightly wrong.`, R`<b>Imperfect technique or set-up:</b> for example measuring body temperature with the thermometer under the arm, or ignoring air resistance in a falling-body experiment.`, R`<b>Personal errors:</b> a habit of the observer, such as always reading a scale at an angle (parallax error).`] },
      R`Systematic errors can be reduced by better instruments, corrections (like zero correction) and improved methods. Repeating the measurement does not remove them.`,
      { h3: R`Random errors` },
      R`These change unpredictably from one reading to the next, sometimes up, sometimes down: small changes in temperature, voltage, reaction time or judgement. Because they scatter on both sides of the true value, <b>taking the mean of many readings reduces them</b>.`,
      { fig: figSpread, cap: R`Twenty-five repeated readings of a pendulum's period scatter around a mean value of 1.50 s. More readings give a better estimate of the true value.` },
      { h3: R`Least-count error` },
      R`Every instrument has a limit set by its least count. A reading with a metre scale can be uncertain by about 1 mm. Using an instrument with a smaller least count, and repeating readings, reduces this error.`,
      { check: { q: R`A stopwatch always starts 0.2 s late. Is this a random or a systematic error? Will averaging many readings remove it?`, ans: R`Systematic. Averaging does not remove it; you must correct for it.` } }
    ] },

    { h: R`Measuring the size of an error`, t: [4], blocks: [
      R`Suppose a quantity is measured n times: \(a_1, a_2, \dots, a_n\). The best estimate of its true value is the <b>mean</b>: \[a_{mean} = \frac{a_1 + a_2 + \dots + a_n}{n}\]`,
      { points: [R`<b>Absolute error</b> of each reading: \(\Delta a_i = |a_i - a_{mean}|\).`, R`<b>Mean absolute error:</b> \(\Delta a_{mean} = \dfrac{\sum|\Delta a_i|}{n}\). The result is written as \(a = a_{mean} \pm \Delta a_{mean}\).`, R`<b>Relative (fractional) error:</b> \(\delta a = \dfrac{\Delta a_{mean}}{a_{mean}}\).`, R`<b>Percentage error:</b> \(\dfrac{\Delta a_{mean}}{a_{mean}}\times100\%\).`] },
      { ex: { q: R`The period of a pendulum is measured five times: 1.52 s, 1.48 s, 1.50 s, 1.55 s, 1.45 s. Find the mean, the mean absolute error and the percentage error.`,
        steps: [R`Mean = 7.50/5 = 1.50 s.`, R`Absolute errors: 0.02, 0.02, 0.00, 0.05, 0.05. Mean absolute error = 0.14/5 = 0.028 ≈ 0.03 s.`, R`Percentage error = 0.03/1.50 × 100 = 2%.`],
        ans: R`T = (1.50 ± 0.03) s, about 2%` } },
      { tip: R`When a question gives a single measurement with an instrument, take the absolute error to be the least count of the instrument (unless told otherwise).` },
      { check: { q: R`A length is given as (25.0 ± 0.1) cm. What is the percentage error?`, ans: R`0.1/25.0 × 100 = 0.4%.` } }
    ] },

    { h: R`Combination of errors`, t: [4], blocks: [
      R`Most results are calculated from several measured quantities. How do their errors combine? We always take the <b>worst case</b>, adding up the errors.`,
      { derive: R`Errors in a sum, a difference, a product and a power`, steps: [
        R`<b>Sum and difference.</b> Let \(Z = A \pm B\) with \(A \pm \Delta A\) and \(B \pm \Delta B\). The largest possible error in Z is when the two errors add up: \(\Delta Z = \Delta A + \Delta B\), for both a sum and a difference.`,
        R`<b>Product.</b> Let \(Z = AB\). Then \(Z \pm \Delta Z = (A \pm \Delta A)(B \pm \Delta B) = AB \pm B\Delta A \pm A\Delta B \pm \Delta A\Delta B\).`,
        R`Divide by \(Z = AB\) and ignore the tiny product \(\Delta A\Delta B\): \(\dfrac{\Delta Z}{Z} = \dfrac{\Delta A}{A} + \dfrac{\Delta B}{B}\). The same result holds for a quotient \(Z = A/B\).`,
        R`<b>Power.</b> \(Z = A^n\) is a product of n equal factors, so \(\dfrac{\Delta Z}{Z} = n\dfrac{\Delta A}{A}\). In general, for \(Z = \dfrac{A^pB^q}{C^r}\): \[\frac{\Delta Z}{Z} = p\frac{\Delta A}{A} + q\frac{\Delta B}{B} + r\frac{\Delta C}{C}\]`
      ] },
      { points: [R`Sums and differences: add <b>absolute</b> errors.`, R`Products and quotients: add <b>relative</b> (or percentage) errors.`, R`Powers: multiply the relative error by the power. So the quantity with the highest power should be measured most carefully.`] },
      { ex: { q: R`In a pendulum experiment, \(g = \dfrac{4\pi^2L}{T^2}\). L = (100.0 ± 0.1) cm and T = (2.00 ± 0.01) s. Find the percentage error in g.`,
        steps: [R`% error in L = 0.1/100 × 100 = 0.1%. % error in T = 0.01/2.00 × 100 = 0.5%.`, R`% error in g = 1 × 0.1 + 2 × 0.5.`],
        ans: R`1.1%` } },
      { ex: { q: R`The density of a cube is found from its mass and side, \(\rho = m/a^3\). The errors in m and a are 2% and 1%. Find the maximum error in ρ.`,
        steps: [R`\(\dfrac{\Delta\rho}{\rho} = \dfrac{\Delta m}{m} + 3\dfrac{\Delta a}{a} = 2\% + 3\times1\%\).`],
        ans: R`5%` } },
      { ex: { q: R`Two resistors \(R_1 = (100 \pm 3)\ \Omega\) and \(R_2 = (200 \pm 4)\ \Omega\) are joined (a) in series (b) in parallel. Find the equivalent resistance with its error.`,
        steps: [R`(a) Series: \(R = R_1 + R_2 = 300\ \Omega\); \(\Delta R = 3 + 4 = 7\ \Omega\).`, R`(b) Parallel: \(\dfrac1R = \dfrac1{R_1} + \dfrac1{R_2}\), so \(R = \dfrac{200}{3} = 66.7\ \Omega\).`, R`Differentiating, \(\dfrac{\Delta R}{R^2} = \dfrac{\Delta R_1}{R_1^2} + \dfrac{\Delta R_2}{R_2^2} = \dfrac{3}{10^4} + \dfrac{4}{4\times10^4} = 4\times10^{-4}\).`, R`\(\Delta R = (66.7)^2\times4\times10^{-4} \approx 1.8\ \Omega\).`],
        ans: R`(a) (300 ± 7) Ω (b) (66.7 ± 1.8) Ω` } },
      { mistake: R`Subtracting errors for a difference. In \(Z = A - B\) the errors still <b>add</b>: \(\Delta Z = \Delta A + \Delta B\). This makes the difference of two nearly equal quantities very uncertain.` },
      { check: { q: R`The radius of a sphere has a 2% error. What is the error in its volume?`, ans: R`\(V \propto r^3\), so 3 × 2% = 6%.` } }
    ] },

    { h: R`Accuracy and precision`, t: [4], blocks: [
      R`These two words are often confused, but they mean different things:`,
      { points: [R`<b>Accuracy</b> is how close a measurement is to the true value.`, R`<b>Precision</b> is how close repeated measurements are to each other (how finely the instrument can resolve).`] },
      { fig: figTargets, cap: R`Accuracy and precision shown as shots on a target (the red centre is the true value). A precise but inaccurate instrument usually has a systematic error.` },
      { ex: { q: R`The true length of a rod is 3.678 cm. Instrument A gives 3.5 cm (least count 0.1 cm). Instrument B gives 3.38 cm (least count 0.01 cm). Which is more accurate, and which more precise?`,
        steps: [R`A differs from the true value by 0.178 cm; B by 0.298 cm. So A is more accurate.`, R`B has the smaller least count, so B is more precise.`],
        ans: R`A is more accurate; B is more precise` } },
      { check: { q: R`A balance always reads 0.5 g too high but gives the same reading every time. Is it precise? Is it accurate?`, ans: R`Precise (repeatable) but not accurate (systematic error).` } }
    ] },

    { h: R`Dimensions and dimensional formulae`, t: [5], blocks: [
      R`Every physical quantity can be written in terms of the base quantities: mass [M], length [L], time [T], current [A], temperature [K], amount [mol] and luminous intensity [cd]. The <b>dimensions</b> of a quantity are the powers to which the base quantities are raised.`,
      R`For example, velocity = length ÷ time, so its dimensional formula is \([M^0LT^{-1}]\): its dimensions are 0 in mass, 1 in length and −1 in time. Force = mass × acceleration, so \([F] = [MLT^{-2}]\).`,
      { table: { head: [R`Quantity`, R`Dimensional formula`, R`Quantity`, R`Dimensional formula`], rows: [
        [R`Velocity`, R`\([LT^{-1}]\)`, R`Acceleration`, R`\([LT^{-2}]\)`], [R`Force, weight`, R`\([MLT^{-2}]\)`, R`Momentum, impulse`, R`\([MLT^{-1}]\)`],
        [R`Work, energy, torque`, R`\([ML^2T^{-2}]\)`, R`Power`, R`\([ML^2T^{-3}]\)`], [R`Pressure, stress, Young's modulus`, R`\([ML^{-1}T^{-2}]\)`, R`Frequency, angular velocity`, R`\([T^{-1}]\)`],
        [R`Angular momentum, Planck's constant h`, R`\([ML^2T^{-1}]\)`, R`Gravitational constant G`, R`\([M^{-1}L^3T^{-2}]\)`], [R`Surface tension, spring constant`, R`\([MT^{-2}]\)`, R`Coefficient of viscosity η`, R`\([ML^{-1}T^{-1}]\)`],
        [R`Specific heat capacity`, R`\([L^2T^{-2}K^{-1}]\)`, R`Gas constant R`, R`\([ML^2T^{-2}K^{-1}mol^{-1}]\)`], [R`Charge`, R`\([AT]\)`, R`Potential difference`, R`\([ML^2T^{-3}A^{-1}]\)`],
        [R`Resistance`, R`\([ML^2T^{-3}A^{-2}]\)`, R`Capacitance`, R`\([M^{-1}L^{-2}T^4A^2]\)`], [R`Magnetic field B`, R`\([MT^{-2}A^{-1}]\)`, R`Permittivity \(\varepsilon_0\)`, R`\([M^{-1}L^{-3}T^4A^2]\)`]] } },
      { h3: R`Dimensionless quantities and dimensional constants` },
      { points: [R`<b>Dimensionless quantities</b> have no dimensions: angle (radian), strain, refractive index, relative density, and pure numbers like π.`, R`<b>Dimensional constants</b> have dimensions: G, h, c, the Boltzmann constant k.`, R`<b>Dimensionless constants</b>: pure numbers such as 2, π, e.`] },
      { ex: { q: R`Find the dimensional formula of Planck's constant from \(E = h\nu\).`,
        steps: [R`\([h] = \dfrac{[E]}{[\nu]} = \dfrac{[ML^2T^{-2}]}{[T^{-1}]}\).`],
        ans: R`\([ML^2T^{-1}]\), the same as angular momentum` } },
      { ex: { q: R`Find the dimensions of the gravitational constant G from \(F = \dfrac{Gm_1m_2}{r^2}\).`,
        steps: [R`\([G] = \dfrac{[F][r^2]}{[m^2]} = \dfrac{[MLT^{-2}][L^2]}{[M^2]}\).`],
        ans: R`\([M^{-1}L^3T^{-2}]\)` } },
      { check: { q: R`Do work and torque have the same dimensions? Are they the same quantity?`, ans: R`Same dimensions \([ML^2T^{-2}]\), but different quantities (work is a scalar, torque a vector).` } }
    ] },

    { h: R`Dimensional analysis and its applications`, t: [6], blocks: [
      R`The <b>principle of homogeneity</b> says that in a correct physical equation, every term must have the same dimensions. You can only add apples to apples. This simple rule has three powerful uses.`,
      { h3: R`1. Checking whether an equation is correct` },
      { ex: { q: R`Check the equation \(s = ut + \frac12at^2\) dimensionally.`,
        steps: [R`\([s] = [L]\); \([ut] = [LT^{-1}][T] = [L]\); \([at^2] = [LT^{-2}][T^2] = [L]\).`, R`All terms have the dimensions of length.`],
        ans: R`Dimensionally correct (the ½ cannot be checked this way)` } },
      { h3: R`2. Converting a quantity from one system of units to another` },
      R`If a quantity has dimensions \([M^aL^bT^c]\), then \(n_2 = n_1\left(\dfrac{M_1}{M_2}\right)^a\left(\dfrac{L_1}{L_2}\right)^b\left(\dfrac{T_1}{T_2}\right)^c\), where \(M_1, L_1, T_1\) are the units of the first system.`,
      { ex: { q: R`Convert 1 joule into ergs (the CGS unit), and \(G = 6.67\times10^{-11}\) N m² kg⁻² into CGS units.`,
        steps: [R`Energy \([ML^2T^{-2}]\): \(n_2 = 1\times\left(\dfrac{1000\ \text{g}}{1\ \text{g}}\right)^1\left(\dfrac{100\ \text{cm}}{1\ \text{cm}}\right)^2 = 10^3\times10^4 = 10^7\).`, R`G \([M^{-1}L^3T^{-2}]\): \(n_2 = 6.67\times10^{-11}\times(1000)^{-1}\times(100)^3 = 6.67\times10^{-8}\).`],
        ans: R`1 J = 10⁷ erg; G = 6.67 × 10⁻⁸ dyn cm² g⁻²` } },
      { h3: R`3. Deriving the relation between quantities` },
      { fig: figPendulum, cap: R`A simple pendulum. Its period might depend on its length l, the mass m of the bob and the acceleration due to gravity g.` },
      { ex: { q: R`Use dimensions to find how the period T of a simple pendulum depends on l, m and g.`,
        steps: [R`Suppose \(T = k\,l^a m^b g^c\), with k a pure number. Then \([T] = [L]^a[M]^b[LT^{-2}]^c\).`, R`Compare powers. M: \(0 = b\). T: \(1 = -2c\), so \(c = -\frac12\). L: \(0 = a + c\), so \(a = \frac12\).`, R`So \(T = k\sqrt{l/g}\). (Experiment or theory gives \(k = 2\pi\).)`],
        ans: R`\(T = k\sqrt{\dfrac lg}\); the period does not depend on the mass` } },
      { ex: { q: R`The viscous force F on a small sphere moving through a fluid depends on the viscosity η, the radius r and the speed v. Find the relation.`,
        steps: [R`Let \(F = k\,\eta^a r^b v^c\): \([MLT^{-2}] = [ML^{-1}T^{-1}]^a[L]^b[LT^{-1}]^c\).`, R`M: \(a = 1\). T: \(-2 = -a - c\), so \(c = 1\). L: \(1 = -a + b + c\), so \(b = 1\).`],
        ans: R`\(F = k\eta rv\) (Stokes' law, with \(k = 6\pi\))` } },
      { tip: R`To find the dimensions of an unknown constant in a formula, use homogeneity. For example, in \(x = A\sin(\omega t)\), ωt must be dimensionless, so \([\omega] = [T^{-1}]\); and in \(v = at + \dfrac{b}{t + c}\), c has the dimensions of time and \([b] = [v][t] = [L]\).` },
      { check: { q: R`In \(P = \dfrac{a - t^2}{bx}\), P is pressure, x is distance and t is time. Find the dimensions of a and b.`, ans: R`a must have the dimensions of \(t^2\): \([T^2]\). Then \([b] = \dfrac{[T^2]}{[P][x]} = \dfrac{[T^2]}{[ML^{-1}T^{-2}][L]} = [M^{-1}T^4]\).` } }
    ] },

    { h: R`Limitations of dimensional analysis`, t: [6], blocks: [
      R`Dimensional analysis is quick and useful, but it cannot do everything:`,
      { points: [R`It cannot find dimensionless constants such as 2π in \(T = 2\pi\sqrt{l/g}\) or ½ in \(\frac12mv^2\).`, R`It cannot derive relations with more than one term added together, such as \(s = ut + \frac12at^2\) (it can only check them).`, R`It fails for trigonometric, exponential and logarithmic relations, such as \(y = A\sin\omega t\) or \(N = N_0e^{-\lambda t}\).`, R`If a quantity depends on more than three base quantities (M, L, T), there are not enough equations to find all the powers.`, R`It cannot tell apart quantities with the same dimensions, such as work and torque, or tell whether a quantity is a scalar or a vector.`] },
      { mistake: R`Concluding that an equation is correct just because it is dimensionally correct. \(s = ut + at^2\) is dimensionally correct but wrong (the factor ½ is missing).` },
      { check: { q: R`Can dimensional analysis derive \(v^2 = u^2 + 2as\)?`, ans: R`No: it has a sum of terms. It can only check that each term has dimensions \([L^2T^{-2}]\).` } }
    ] }
  ],
  summary: [
    R`A physical quantity = number × unit; \(n_1u_1 = n_2u_2\).`,
    R`SI has 7 base units (m, kg, s, A, K, mol, cd), now defined by exact values of constants of nature; radian and steradian are dimensionless supplementary units.`,
    R`Practical units: 1 Å = 10⁻¹⁰ m, 1 fermi = 10⁻¹⁵ m, 1 AU = 1.496 × 10¹¹ m, 1 ly = 9.46 × 10¹⁵ m, 1 pc = 3.08 × 10¹⁶ m = 3.26 ly, 1 u = 1.66 × 10⁻²⁷ kg.`,
    R`Vernier LC = 1 MSD − 1 VSD; screw gauge LC = pitch ÷ number of circular divisions; true reading = observed − zero error.`,
    R`Significant figures: leading zeros don't count; trailing zeros after a decimal point do. × and ÷: fewest significant figures; + and −: fewest decimal places.`,
    R`Systematic errors push readings one way (correct them); random errors scatter (average them out).`,
    R`Mean absolute error, relative error and percentage error describe the uncertainty: \(a = a_{mean} \pm \Delta a_{mean}\).`,
    R`Combining errors: sums and differences add absolute errors; products and quotients add relative errors; powers multiply the relative error by the power.`,
    R`Accuracy = closeness to the true value; precision = closeness of repeated readings.`,
    R`Dimensional formula: powers of M, L, T, A, K, mol, cd. Homogeneity: all terms of a correct equation have the same dimensions.`,
    R`Uses of dimensional analysis: checking equations, converting units, deriving relations. It cannot give dimensionless constants or handle sums, trig, exp or log relations.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §1.2 Units and Standards`, url: 'https://openstax.org/books/university-physics-volume-1/pages/1-2-units-and-standards' },
    { t: R`OpenStax University Physics Vol. 1, §1.3 Unit Conversion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/1-3-unit-conversion' },
    { t: R`OpenStax University Physics Vol. 1, §1.4 Dimensional Analysis`, url: 'https://openstax.org/books/university-physics-volume-1/pages/1-4-dimensional-analysis' },
    { t: R`OpenStax University Physics Vol. 1, §1.6 Significant Figures`, url: 'https://openstax.org/books/university-physics-volume-1/pages/1-6-significant-figures' },
    { t: R`Wikipedia: International System of Units`, url: 'https://en.wikipedia.org/wiki/International_System_of_Units' },
    { t: R`Wikipedia: 2019 revision of the SI`, url: 'https://en.wikipedia.org/wiki/2019_revision_of_the_SI' },
    { t: R`Wikipedia: Vernier scale`, url: 'https://en.wikipedia.org/wiki/Vernier_scale' },
    { t: R`Wikipedia: Micrometer (screw gauge)`, url: 'https://en.wikipedia.org/wiki/Micrometer_(device)' },
    { t: R`Wikipedia: Propagation of uncertainty`, url: 'https://en.wikipedia.org/wiki/Propagation_of_uncertainty' },
    { t: R`Wikipedia: Dimensional analysis`, url: 'https://en.wikipedia.org/wiki/Dimensional_analysis' }
  ]
});
})();
