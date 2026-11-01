// Book chapter: Gravitation. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figLaw = D.svg(420, 120, [
  D.circle(90, 60, 26, { color: 'c', fill: 'soft' }), D.text(90, 61, 'm₁', { size: 13 }),
  D.circle(330, 60, 18, { color: 'o', fill: 'soft' }), D.text(330, 61, 'm₂', { size: 13 }),
  D.arrow(118, 60, 190, 60, { color: 'r', label: 'F', ly: -12 }), D.arrow(310, 60, 238, 60, { color: 'r', label: 'F', ly: -12 }),
  D.arrow(90, 100, 330, 100, { color: 'm', w: 1.2, head: 6, both: true }), D.text(210, 112, 'r', { math: true, color: 'm' })
], 'Two masses attract each other with equal and opposite forces');

var figField = (function () {
  var p = [D.circle(150, 110, 44, { color: 'b', fill: 'soft', w: 2 }), D.text(150, 111, 'Earth', { size: 12, color: 'b' })];
  for (var k = 0; k < 12; k++) {
    var a = k * Math.PI / 6, c = Math.cos(a), s = Math.sin(a);
    p.push(D.arrow(150 + 96 * c, 110 + 96 * s, 150 + 52 * c, 110 + 52 * s, { color: 'm', w: 1.4, head: 6 }));
  }
  return D.svg(300, 220, p, 'Gravitational field lines point radially into the Earth');
})();

var figGr = D.plot({
  w: 420, h: 230, x: [0, 4.2], y: [0, 1.25], xlabel: 'r', ylabel: 'g (or field E)', xticks: [[1, 'R'], [2, '2R'], [3, '3R'], [4, '4R']], yticks: [[1, 'g'], [0.25, 'g/4']],
  fns: [{ f: function (r) { return r <= 1 ? r : 1 / (r * r); }, from: 0, to: 4.2 }],
  guides: [[1, 1], [2, 0.25]],
  texts: [{ x: 0.5, y: 0.75, s: 'inside: g ∝ r', color: 'c', size: 12 }, { x: 2.6, y: 0.5, s: 'outside: g ∝ 1/r²', color: 'c', size: 12 }],
  label: 'Acceleration due to gravity against distance from the Earth centre'
});

var figKepler = (function () {
  var a = 150, b = 100, cx = 200, cy = 120, c = Math.sqrt(a * a - b * b), fx = cx + c, p = [];
  function pt(t) { return [cx + a * Math.cos(t), cy - b * Math.sin(t)]; }
  function sector(t1, t2, color) {
    var pts = [[fx, cy]]; for (var k = 0; k <= 30; k++) pts.push(pt(t1 + (t2 - t1) * k / 30));
    return D.poly(pts, { closed: true, color: color, fill: 'soft', w: 1 });
  }
  p.push(sector(-0.42, 0.42, 'o'), sector(2.82, 3.46, 'g'));
  p.push(D.ellipse(cx, cy, a, b, { color: 'k', w: 1.8 }));
  p.push(D.circle(fx, cy, 12, { color: 'o', fill: 'o' }), D.text(fx, cy + 26, 'Sun (at a focus)', { size: 11, color: 'o' }));
  p.push(D.dot(cx - c, cy, { r: 3, color: 'm' }), D.text(cx - c, cy + 16, 'empty focus', { size: 10, color: 'm' }));
  p.push(D.text(cx + a + 6, cy - 46, 'near the Sun: fast', { size: 11, color: 'o', anchor: 'start' }), D.text(cx - a - 6, cy - 46, 'far: slow', { size: 11, color: 'g', anchor: 'end' }));
  p.push(D.text(cx, cy - b - 10, 'equal areas in equal times', { size: 12, color: 'm' }));
  return D.svg(420, 240, p, 'An elliptical orbit with the Sun at one focus and equal areas swept in equal times');
})();

var figV = D.plot({
  w: 420, h: 230, x: [0, 4.2], y: [-1.7, 0.3], xlabel: 'r', ylabel: 'V', xticks: [[1, 'R'], [2, '2R'], [3, '3R'], [4, '4R']], yticks: [[-1, '−GM/R'], [-1.5, '−3GM/2R']],
  fns: [{ f: function (r) { return r <= 1 ? -(3 - r * r) / 2 : -1 / r; }, from: 0, to: 4.2 }],
  texts: [{ x: 0.5, y: -1.1, s: 'inside', color: 'c', size: 12 }, { x: 2.8, y: -0.55, s: 'outside: V = −GM/r', color: 'c', size: 12 }],
  label: 'Gravitational potential of a uniform solid sphere'
});

var figOrbit = D.svg(320, 240, [
  D.circle(160, 125, 50, { color: 'b', fill: 'soft', w: 2 }), D.text(160, 126, 'Earth', { size: 12, color: 'b' }),
  D.circle(160, 125, 100, { color: 'm', dash: '5 4', w: 1.4 }),
  D.rect(250, 116, 20, 18, { color: 'c', fill: 'soft', w: 1.6, r: 3 }),
  D.arrow(260, 116, 260, 50, { color: 'g', label: 'v₀', lx: 14, ly: 0 }), D.arrow(250, 125, 212, 125, { color: 'r' }), D.text(258, 152, 'F = GMm/r²', { color: 'r', size: 12, anchor: 'start', math: true }),
  D.line(160, 125, 160, 25, { color: 'm', w: 1 }), D.text(150, 70, 'r = R + h', { size: 12, anchor: 'end' })
], 'A satellite in a circular orbit around the Earth');

var figSatE = D.plot({
  w: 420, h: 230, x: [0.8, 4.5], y: [-1.15, 0.65], xlabel: 'r', ylabel: 'energy', noOrigin: true,
  xticks: [[1, 'R'], [2, '2R'], [3, '3R'], [4, '4R']],
  fns: [{ f: function (r) { return 0.5 / r; }, from: 1, color: 'g', label: 'K = GMm/2r', lx: 1.3, ly: 0.52 },
    { f: function (r) { return -1 / r; }, from: 1, color: 'r', label: 'U = −GMm/r', lx: 2.0, ly: -0.78 },
    { f: function (r) { return -0.5 / r; }, from: 1, color: 'b', label: 'E = −GMm/2r', lx: 2.6, ly: -0.08 }],
  label: 'Kinetic, potential and total energy of a satellite against orbit radius'
});

var figGeo = D.svg(340, 200, [
  D.circle(170, 100, 40, { color: 'b', fill: 'soft', w: 2 }), D.line(120, 100, 220, 100, { color: 'b', dash: '3 3', w: 1 }), D.text(170, 140, 'equator', { size: 10, color: 'b' }),
  D.ellipse(170, 100, 150, 26, { color: 'o', w: 1.6, dash: '6 4' }), D.rect(311, 92, 16, 16, { color: 'o', fill: 'soft', r: 3 }), D.text(300, 70, 'geostationary', { size: 11, color: 'o', anchor: 'end' }),
  D.ellipse(170, 100, 22, 80, { color: 'g', w: 1.6, dash: '3 4' }), D.rect(162, 12, 16, 16, { color: 'g', fill: 'soft', r: 3 }), D.text(190, 22, 'polar', { size: 11, color: 'g', anchor: 'start' })
], 'Geostationary and polar orbits');

// ---------- chapter text ----------
JEE.book('physics', 'gravitation', {
  intro: [
    R`An apple falls to the ground, the Moon circles the Earth, the Earth circles the Sun. Newton's great insight was that one and the same force is behind all of these: <b>gravitation</b>, a pull between every pair of masses in the universe.`,
    R`This chapter covers Newton's law of gravitation, the gravitational field, how the acceleration due to gravity changes with height and depth, Kepler's laws of planetary motion, gravitational potential energy and potential, escape velocity, and the motion and energy of satellites, including geostationary ones.`
  ],
  sections: [
    { h: R`Newton's law of universal gravitation`, t: [0], blocks: [
      R`Every particle in the universe attracts every other particle with a force that is proportional to the product of their masses and inversely proportional to the square of the distance between them: \[F = \frac{Gm_1m_2}{r^2}\] The force acts along the line joining them, on both bodies, in opposite directions (an action–reaction pair).`,
      { fig: figLaw, cap: R`Two masses pull each other with equal and opposite forces, whatever their sizes.` },
      R`G is the <b>universal gravitational constant</b>: \(G = 6.67\times10^{-11}\) N m² kg⁻². Its tiny value is why we don't feel the pull of everyday objects. Henry Cavendish first measured G (1798) with a torsion balance, which also let him "weigh the Earth". In vector form, the force on \(m_2\) due to \(m_1\) is \(\vec F_{21} = -\dfrac{Gm_1m_2}{r^2}\hat r_{12}\), and forces from several masses add as vectors (superposition).`,
      { ex: { q: R`Find the gravitational force between two 100 kg spheres whose centres are 1 m apart.`,
        steps: [R`\(F = \dfrac{6.67\times10^{-11}\times100\times100}{1^2}\).`], ans: R`\(6.67\times10^{-7}\) N, less than the weight of a grain of dust` } },
      { mistake: R`Thinking that the Earth pulls an apple harder than the apple pulls the Earth. The forces are equal (third law); the apple accelerates far more because its mass is tiny.` },
      { check: { q: R`If the distance between two masses is halved, how does the force change?`, ans: R`It becomes 4 times larger (inverse square law).` } }
    ] },

    { h: R`The gravitational field`, t: [0], blocks: [
      R`A mass creates a <b>gravitational field</b> around itself: a region in which any other mass feels a force. The <b>field intensity</b> at a point is the force per unit mass placed there: \[\vec E = \frac{\vec F}{m},\qquad E = \frac{GM}{r^2}\ \text{(for a point mass M)}\] It is directed towards the mass. Its unit is N/kg, the same as m/s²: near the Earth the field intensity is just g.`,
      { fig: figField, cap: R`Gravitational field lines around the Earth point radially inward. They are closer together where the field is stronger.` },
      { check: { q: R`What is the gravitational field intensity at the Earth's surface?`, ans: R`About 9.8 N/kg, which equals g.` } }
    ] },

    { h: R`Gravity of spherical shells and spheres`, t: [0], blocks: [
      R`Newton proved two remarkable results (the <b>shell theorem</b>) for a uniform thin spherical shell:`,
      { points: [R`Outside the shell, it attracts as if all its mass were at its centre.`, R`Inside the shell, the net gravitational force is <b>zero</b> everywhere.`] },
      R`A solid sphere is a set of nested shells. So outside a uniform sphere of mass M and radius R, \(E = GM/r^2\). Inside, at distance r from the centre, only the mass within radius r pulls (the outer shells give zero): \[E_{inside} = \frac{G}{r^2}\left(M\frac{r^3}{R^3}\right) = \frac{GMr}{R^3}\] which grows linearly from zero at the centre to its maximum at the surface.`,
      { fig: figGr, cap: R`Field (or g) of a uniform solid sphere: proportional to r inside, and to 1/r² outside. It is largest at the surface.` },
      { adv: R`JEE Advanced uses these results for spherical shells and spheres, including cavities: a sphere with a spherical cavity can be treated as the full sphere minus a smaller sphere of negative mass. Inside such a cavity the field turns out to be uniform.` },
      { ex: { q: R`Find the gravitational field at a distance R/2 from the centre of the Earth and at a height R above its surface, in terms of g.`,
        steps: [R`Inside: \(E = \dfrac{GMr}{R^3} = g\dfrac rR = \dfrac g2\) at r = R/2.`, R`Outside at r = 2R: \(E = \dfrac{GM}{4R^2} = \dfrac g4\).`], ans: R`g/2 and g/4` } },
      { check: { q: R`What is the gravitational force on a body at the centre of the Earth?`, ans: R`Zero.` } }
    ] },

    { h: R`Acceleration due to gravity at the surface`, t: [1], blocks: [
      R`A body of mass m at the Earth's surface feels \(\dfrac{GMm}{R^2} = mg\), so \[g = \frac{GM}{R^2} = \frac43\pi G\rho R\] where ρ is the Earth's mean density. g does not depend on the mass of the falling body, which is why all bodies fall with the same acceleration (ignoring air).`,
      { ex: { q: R`Estimate the mass of the Earth from g = 9.8 m/s², R = 6.37 × 10⁶ m and G = 6.67 × 10⁻¹¹ N m² kg⁻².`,
        steps: [R`\(M = \dfrac{gR^2}{G} = \dfrac{9.8\times(6.37\times10^6)^2}{6.67\times10^{-11}}\).`], ans: R`≈ 6.0 × 10²⁴ kg` } },
      { check: { q: R`On a planet with twice the Earth's mass and twice its radius, what is g?`, ans: R`\(g' = \dfrac{G(2M)}{(2R)^2} = \dfrac g2\).` } }
    ] },

    { h: R`Variation of g with altitude`, t: [1], blocks: [
      R`At a height h above the surface, the distance from the centre is R + h: \[g_h = \frac{GM}{(R + h)^2} = \frac{g}{(1 + h/R)^2}\] For heights much smaller than R, the binomial approximation gives \(g_h \approx g\left(1 - \dfrac{2h}{R}\right)\).`,
      { ex: { q: R`By what percentage does g decrease at a height of 64 km? At what height is g one quarter of its surface value? (R = 6400 km)`,
        steps: [R`\(\dfrac{2h}{R} = \dfrac{128}{6400} = 0.02\), a 2% decrease.`, R`\(\dfrac{g}{(1 + h/R)^2} = \dfrac g4\) gives \(1 + h/R = 2\), so h = R.`], ans: R`About 2%; at h = R = 6400 km` } },
      { check: { q: R`Why do astronauts in orbit 400 km up feel weightless, even though g there is about 89% of g at the surface?`, ans: R`Because they and their spacecraft are in free fall together (see the last section), not because gravity is absent.` } }
    ] },

    { h: R`Variation of g with depth`, t: [1], blocks: [
      R`At a depth d, the body is at distance R − d from the centre, and only the inner sphere of radius R − d attracts it. Using the inside formula: \[g_d = \frac{GM(R - d)}{R^3} = g\left(1 - \frac dR\right)\] So g decreases linearly with depth and becomes zero at the centre.`,
      { ex: { q: R`Find g at a depth of half the Earth's radius. At what depth does g equal its value at a small height h?`,
        steps: [R`\(g_d = g(1 - \tfrac12) = \tfrac g2\).`, R`Set \(g(1 - d/R) = g(1 - 2h/R)\): \(d = 2h\).`], ans: R`g/2; at a depth d = 2h (for small h)` } },
      { note: R`The Earth's rotation also reduces the effective g slightly, most at the equator and not at all at the poles. The Earth's slightly flattened shape adds to this effect, so g is a little larger at the poles.`, title: 'Latitude also matters' },
      { check: { q: R`Is g larger at the bottom of a mine or at the top of a mountain of the same "height"?`, ans: R`At the bottom of the mine (g falls more slowly with depth than with height).` } }
    ] },

    { h: R`Kepler's laws of planetary motion`, t: [2], blocks: [
      R`Johannes Kepler studied Tycho Brahe's careful observations of the planets and found three laws, later explained by Newton's gravitation:`,
      { points: [R`<b>Law of orbits:</b> every planet moves in an ellipse with the Sun at one focus.`, R`<b>Law of areas:</b> the line joining a planet to the Sun sweeps out equal areas in equal intervals of time.`, R`<b>Law of periods:</b> the square of the period is proportional to the cube of the semi-major axis: \(T^2 \propto a^3\).`] },
      { fig: figKepler, cap: R`An elliptical orbit with the Sun at a focus. The two shaded regions have equal areas, swept in equal times, so the planet moves faster when it is near the Sun.` },
      { derive: R`Why the law of areas holds`, steps: [
        R`In a short time dt, the line to the planet sweeps a thin triangle of area \(dA = \frac12r^2\,d\theta\), so \(\dfrac{dA}{dt} = \frac12r^2\omega = \dfrac{L}{2m}\), where \(L = mr^2\omega\) is the angular momentum.`,
        R`Gravity points towards the Sun, so its torque about the Sun is zero and L is constant. Hence \(dA/dt\) is constant: equal areas in equal times.`
      ] },
      { ex: { q: R`Mars orbits the Sun at about 1.52 times the Earth–Sun distance. Estimate the length of a Martian year.`,
        steps: [R`\(T_{Mars} = T_E\left(\dfrac{a_{Mars}}{a_E}\right)^{3/2} = 1\times(1.52)^{1.5}\).`], ans: R`≈ 1.87 Earth years` } },
      { check: { q: R`If a planet's orbit radius were 4 times larger, how would its period change?`, ans: R`\(T \propto a^{3/2}\): 8 times longer.` } }
    ] },

    { h: R`Gravitational potential energy`, t: [3], blocks: [
      R`The formula mgh works only near the surface, where g is constant. For large distances we need the general form. Choosing the potential energy to be zero when the masses are infinitely far apart: \[U = -\frac{GMm}{r}\]`,
      { derive: R`Deriving U = −GMm/r`, steps: [
        R`Bring m from infinity to distance r. The gravitational force on it is \(\dfrac{GMm}{x^2}\) towards M, and gravity does positive work as m comes in.`,
        R`Work done by gravity \(= \int_\infty^r\left(-\dfrac{GMm}{x^2}\right)dx = \dfrac{GMm}{r}\) (taking outward as positive, the force is \(-GMm/x^2\) and dx is negative).`,
        R`\(U(r) - U(\infty) = -W_{gravity} = -\dfrac{GMm}{r}\). With \(U(\infty) = 0\), \(U = -GMm/r\).`
      ] },
      R`The negative sign means the bodies are bound: energy must be supplied to separate them. Near the surface, \(U(R + h) - U(R) = GMm\left(\dfrac1R - \dfrac1{R + h}\right) \approx \dfrac{GMm}{R^2}h = mgh\), recovering the familiar formula.`,
      R`For a system of several particles, add the potential energy of every pair: \(U = -\sum_{pairs}\dfrac{Gm_im_j}{r_{ij}}\).`,
      { ex: { q: R`How much energy is needed to lift a 1000 kg satellite from the Earth's surface to a height equal to R? (g = 9.8 m/s², R = 6.4 × 10⁶ m)`,
        steps: [R`\(\Delta U = -\dfrac{GMm}{2R} - \left(-\dfrac{GMm}{R}\right) = \dfrac{GMm}{2R} = \dfrac{mgR}{2}\).`, R`\(= \dfrac{1000\times9.8\times6.4\times10^6}{2}\).`], ans: R`≈ 3.1 × 10¹⁰ J (only half of mgR, because g weakens with height)` } },
      { check: { q: R`Three equal masses m sit at the corners of an equilateral triangle of side a. What is the potential energy of the system?`, ans: R`Three pairs: \(U = -\dfrac{3Gm^2}{a}\).` } }
    ] },

    { h: R`Gravitational potential`, t: [3], blocks: [
      R`<b>Gravitational potential</b> at a point is the potential energy per unit mass there: \(V = U/m\). For a point mass, \(V = -\dfrac{GM}{r}\) (J/kg). Field and potential are linked by \(E = -\dfrac{dV}{dr}\).`,
      { table: { head: [R`Source`, R`Potential outside (r ≥ R)`, R`Potential inside (r < R)`], rows: [
        [R`Thin spherical shell`, R`\(-\dfrac{GM}{r}\)`, R`\(-\dfrac{GM}{R}\) (constant, so E = 0)`],
        [R`Uniform solid sphere`, R`\(-\dfrac{GM}{r}\)`, R`\(-\dfrac{GM}{2R^3}(3R^2 - r^2)\)`]] } },
      { fig: figV, cap: R`Potential of a uniform solid sphere. It is most negative (−3GM/2R) at the centre, equals −GM/R at the surface and rises towards zero far away.` },
      { adv: R`Inside a shell the potential is constant, so the field \(-dV/dr\) is zero, consistent with the shell theorem. At the centre of a solid sphere the potential is 1.5 times its surface value.` },
      { check: { q: R`Where is the gravitational potential of the Earth lowest?`, ans: R`At its centre (−3GM/2R).` } }
    ] },

    { h: R`Escape velocity`, t: [4], blocks: [
      R`Throw a ball up and it comes back. Throw it fast enough, and it never returns. The <b>escape velocity</b> is the minimum launch speed from the surface needed to escape the planet's gravity completely (reaching infinity with zero speed).`,
      { derive: R`Deriving the escape velocity`, steps: [
        R`Total energy at launch: \(\frac12mv_e^2 - \dfrac{GMm}{R}\). Total energy just escaping (at infinity, at rest): 0.`,
        R`Energy conservation: \(\frac12mv_e^2 = \dfrac{GMm}{R}\), so \(v_e = \sqrt{\dfrac{2GM}{R}} = \sqrt{2gR}\).`
      ] },
      { ex: { q: R`Calculate the escape velocity from the Earth (g = 9.8 m/s², R = 6.4 × 10⁶ m) and from the Moon (g = 1.62 m/s², R = 1.74 × 10⁶ m).`,
        steps: [R`Earth: \(\sqrt{2\times9.8\times6.4\times10^6} \approx 1.12\times10^4\) m/s.`, R`Moon: \(\sqrt{2\times1.62\times1.74\times10^6} \approx 2.4\times10^3\) m/s.`], ans: R`11.2 km/s; 2.4 km/s` } },
      R`The escape velocity does not depend on the direction of launch or on the mass of the body. The Moon has no atmosphere because many gas molecules, warmed by the Sun, move fast enough to escape its weak gravity.`,
      { check: { q: R`If the radius of a planet is doubled at the same density, what happens to its escape velocity?`, ans: R`\(v_e = \sqrt{2gR}\) with \(g \propto \rho R\), so \(v_e \propto R\): it doubles.` } }
    ] },

    { h: R`Satellites: orbital velocity and period`, t: [5, 6], blocks: [
      R`A <b>satellite</b> is a body orbiting a planet: the Moon is a natural satellite of the Earth; there are thousands of artificial ones. Gravity supplies the centripetal force for a circular orbit of radius r = R + h: \[\frac{mv_0^2}{r} = \frac{GMm}{r^2}\ \Rightarrow\ v_0 = \sqrt{\frac{GM}{r}} = \sqrt{\frac{gR^2}{R + h}}\]`,
      { fig: figOrbit, cap: R`A satellite in a circular orbit of radius r = R + h. Gravity always points to the Earth's centre and provides the centripetal force.` },
      R`The period is the time for one revolution: \[T = \frac{2\pi r}{v_0} = 2\pi\sqrt{\frac{r^3}{GM}}\] which is exactly Kepler's third law, \(T^2 \propto r^3\). Notice that \(v_0\) and T do not depend on the satellite's mass.`,
      { ex: { q: R`Find the orbital speed and period of a satellite orbiting just above the Earth's surface (h ≪ R).`,
        steps: [R`\(v_0 = \sqrt{gR} = \sqrt{9.8\times6.4\times10^6} \approx 7.9\) km/s.`, R`\(T = 2\pi\sqrt{R/g} = 2\pi\sqrt{6.4\times10^6/9.8} \approx 5080\) s.`], ans: R`≈ 7.9 km/s; ≈ 85 minutes` } },
      { ex: { q: R`Two satellites orbit the Earth at radii r and 4r. Compare their speeds and periods.`,
        steps: [R`\(v_0 \propto r^{-1/2}\): the outer one is \(\sqrt4 = 2\) times slower.`, R`\(T \propto r^{3/2}\): the outer one takes \(4^{3/2} = 8\) times longer.`], ans: R`Speeds 2 : 1; periods 1 : 8` } },
      { tip: R`Useful link: \(v_e = \sqrt2\,v_0\) for an orbit near the surface. A satellite already orbiting needs its speed multiplied by \(\sqrt2\) (an increase of about 41%) to escape.` },
      { check: { q: R`Do heavier satellites need to move faster to stay in the same orbit?`, ans: R`No. Orbital speed depends only on M and r, not on the satellite's mass.` } }
    ] },

    { h: R`Energy of an orbiting satellite`, t: [5, 6], blocks: [
      R`For a satellite of mass m in a circular orbit of radius r:`,
      { points: [R`Kinetic energy: \(K = \frac12mv_0^2 = \dfrac{GMm}{2r}\).`, R`Potential energy: \(U = -\dfrac{GMm}{r}\).`, R`Total energy: \(E = K + U = -\dfrac{GMm}{2r}\). Notice \(K = -E\) and \(U = 2E\).`] },
      { fig: figSatE, cap: R`Energies of a satellite against orbit radius. The total energy is negative: the satellite is bound to the Earth.` },
      R`The <b>binding energy</b> of the satellite is the energy that must be supplied to free it completely: \(+\dfrac{GMm}{2r}\). Moving to a higher orbit raises the total energy (it becomes less negative), even though the speed decreases.`,
      { ex: { q: R`A 1000 kg satellite orbits at a height equal to the Earth's radius. Find its total energy and binding energy. (g = 9.8 m/s², R = 6.4 × 10⁶ m)`,
        steps: [R`r = 2R. \(E = -\dfrac{GMm}{2(2R)} = -\dfrac{gR^2m}{4R} = -\dfrac{mgR}{4}\).`, R`\(= -\dfrac{1000\times9.8\times6.4\times10^6}{4}\).`], ans: R`E ≈ −1.57 × 10¹⁰ J; binding energy ≈ 1.57 × 10¹⁰ J` } },
      { ex: { q: R`How much extra energy must be given to a satellite of mass m orbiting at radius r so that it escapes the Earth completely?`,
        steps: [R`Its total energy is \(-\dfrac{GMm}{2r}\); to escape it needs total energy 0.`], ans: R`\(\dfrac{GMm}{2r}\), its binding energy` } },
      { check: { q: R`A satellite loses energy because of air drag. Does it speed up or slow down?`, ans: R`It speeds up: losing energy moves it to a lower orbit, where \(v_0 = \sqrt{GM/r}\) is larger.` } }
    ] },

    { h: R`Geostationary and polar satellites`, t: [5], blocks: [
      R`A <b>geostationary</b> satellite orbits above the equator, in the same direction as the Earth's rotation, with a period of exactly one day. It therefore appears fixed in the sky, so a dish antenna can point at it permanently. Communication and TV satellites use such orbits.`,
      { fig: figGeo, cap: R`A geostationary orbit lies in the equatorial plane, about 36 000 km above the surface. A polar orbit passes over the poles while the Earth turns beneath it.` },
      { derive: R`Height of a geostationary orbit`, steps: [
        R`\(T^2 = \dfrac{4\pi^2r^3}{GM}\) with \(GM = gR^2\): \(r^3 = \dfrac{gR^2T^2}{4\pi^2}\).`,
        R`With T = 24 h = 86 400 s, g = 9.8 m/s² and R = 6.4 × 10⁶ m, \(r \approx 4.23\times10^7\) m.`,
        R`Height \(h = r - R \approx 3.6\times10^7\) m, about 36 000 km (nearly 5.6 Earth radii).`
      ] },
      R`<b>Polar satellites</b> fly in low orbits (about 500–800 km) passing over the poles. As the Earth spins beneath them, they scan the whole surface strip by strip, which is ideal for weather monitoring, mapping and remote sensing (for example India's remote-sensing satellites).`,
      { check: { q: R`Can a geostationary satellite stay above New Delhi?`, ans: R`No. A geostationary orbit must lie in the equatorial plane, so the satellite can only stay fixed above a point on the equator.` } }
    ] },

    { h: R`Weightlessness`, t: [5], blocks: [
      R`What we feel as weight is the push of the floor (the normal force) on us. Inside an orbiting satellite, both the astronaut and the spacecraft are falling freely towards the Earth with the same acceleration (the local g). The floor does not need to push the astronaut at all, so the normal force is zero: the astronaut feels <b>weightless</b>.`,
      R`Gravity has not disappeared; it is exactly what keeps them in orbit. The same feeling happens in a freely falling lift, as we saw in Laws of Motion. In this state a pendulum does not swing and water does not pour from a tilted glass.`,
      { check: { q: R`Would a simple pendulum keep time inside an orbiting spacecraft?`, ans: R`No: with zero effective g, it would not oscillate at all.` } }
    ] }
  ],
  summary: [
    R`\(F = Gm_1m_2/r^2\), \(G = 6.67\times10^{-11}\) N m² kg⁻²; gravitational forces add as vectors.`,
    R`Field \(E = F/m = GM/r^2\). Shell: zero field inside, point-mass field outside. Solid sphere: \(E = GMr/R^3\) inside.`,
    R`\(g = GM/R^2 = \frac43\pi G\rho R\); height: \(g_h = \frac{g}{(1 + h/R)^2} \approx g(1 - \frac{2h}R)\); depth: \(g_d = g(1 - \frac dR)\), zero at the centre.`,
    R`Kepler: elliptical orbits, equal areas in equal times (angular momentum conserved), \(T^2 \propto a^3\).`,
    R`\(U = -GMm/r\) (mgh near the surface); for a system add all pairs. \(V = -GM/r\); \(E = -dV/dr\).`,
    R`Shell potential: −GM/R inside (constant); solid sphere centre: −3GM/2R.`,
    R`Escape velocity \(v_e = \sqrt{2GM/R} = \sqrt{2gR}\) ≈ 11.2 km/s for Earth; independent of mass and direction.`,
    R`Orbit: \(v_0 = \sqrt{GM/r}\), \(T = 2\pi\sqrt{r^3/GM}\); near the surface \(v_0 \approx 7.9\) km/s, \(T \approx 85\) min, and \(v_e = \sqrt2\,v_0\).`,
    R`Satellite energies: \(K = \frac{GMm}{2r}\), \(U = -\frac{GMm}{r}\), \(E = -\frac{GMm}{2r}\); binding energy \(\frac{GMm}{2r}\).`,
    R`Geostationary: equatorial, T = 24 h, height ≈ 36 000 km. Polar: low orbit over the poles for mapping and weather.`,
    R`Weightlessness in orbit is free fall: the normal force is zero, not gravity.`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 1, §13.1 Newton's Law of Universal Gravitation`, url: 'https://openstax.org/books/university-physics-volume-1/pages/13-1-newtons-law-of-universal-gravitation' },
    { t: R`OpenStax University Physics Vol. 1, §13.2 Gravitation Near Earth's Surface`, url: 'https://openstax.org/books/university-physics-volume-1/pages/13-2-gravitation-near-earths-surface' },
    { t: R`OpenStax University Physics Vol. 1, §13.3 Gravitational Potential Energy and Total Energy`, url: 'https://openstax.org/books/university-physics-volume-1/pages/13-3-gravitational-potential-energy-and-total-energy' },
    { t: R`OpenStax University Physics Vol. 1, §13.4 Satellite Orbits and Energy`, url: 'https://openstax.org/books/university-physics-volume-1/pages/13-4-satellite-orbits-and-energy' },
    { t: R`OpenStax University Physics Vol. 1, §13.5 Kepler's Laws of Planetary Motion`, url: 'https://openstax.org/books/university-physics-volume-1/pages/13-5-keplers-laws-of-planetary-motion' },
    { t: R`Wikipedia: Shell theorem`, url: 'https://en.wikipedia.org/wiki/Shell_theorem' },
    { t: R`Wikipedia: Escape velocity`, url: 'https://en.wikipedia.org/wiki/Escape_velocity' },
    { t: R`Wikipedia: Geostationary orbit`, url: 'https://en.wikipedia.org/wiki/Geostationary_orbit' }
  ]
});
})();
