// Book chapter: States of Matter: Gases and Liquids. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figBoyle = D.row([
  [D.plot({ w: 210, h: 170, x: [0, 5], y: [0, 5], xlabel: 'V', ylabel: 'P', xticks: [], yticks: [], fns: [{ f: function (v) { return 2 / v; }, from: 0.42, to: 4.8, color: 'b', label: 'T₁', lx: 3.4, ly: 0.9, math: false }, { f: function (v) { return 4 / v; }, from: 0.82, to: 4.8, color: 'r', label: 'T₂ > T₁', lx: 2.3, ly: 2.2, math: false }], label: 'Boyle isotherms' }), 'Boyle: P against V (isotherms)'],
  [D.plot({ w: 210, h: 170, x: [0, 5], y: [0, 5], xlabel: '1/V', ylabel: 'P', xticks: [], yticks: [], fns: [{ f: function (x) { return 0.8 * x; }, color: 'b' }, { f: function (x) { return 1.5 * x; }, from: 0, to: 3.2, color: 'r' }], label: 'P against 1/V' }), 'P against 1/V: straight lines'],
  [D.plot({ w: 210, h: 170, x: [-300, 120], y: [0, 5], xlabel: 't (°C)', ylabel: 'V', mathLabels: false, xticks: [[-273, '−273']], yticks: [], noOrigin: true,
    fns: [{ f: function (t) { return 3.5 * (t + 273) / 393; }, from: 0, to: 120, color: 'o' }, { f: function (t) { return 3.5 * (t + 273) / 393; }, from: -273, to: 0, color: 'o', dash: true, w: 1.2 }], label: 'Charles law' }), 'Charles: V against t meets −273 °C']
]);

var figSpeeds = (function () {
  function f(a) { return function (v) { return 4 / Math.sqrt(Math.PI) * v * v / (a * a * a) * Math.exp(-v * v / (a * a)); }; }
  var f1 = f(1);
  return D.plot({
    w: 420, h: 220, x: [0, 4], y: [0, 1], xlabel: 'u (molecular speed)', ylabel: 'fraction', mathLabels: false, xticks: [], yticks: [],
    fns: [{ f: f1, color: 'b', label: 'lower T', lx: 0.45, ly: 0.9, math: false }, { f: f(1.6), color: 'r', label: 'higher T', lx: 2.3, ly: 0.47, math: false }],
    segs: [[1, 'u_{mp}'], [1.128, 'u_{av}'], [1.2247, 'u_{rms}']].map(function (s) { return { x1: s[0], y1: 0, x2: s[0], y2: f1(s[0]), color: 'b', dash: '3 3', w: 1 }; }),
    texts: [{ x: 0.98, y: -0.05, s: 'u_{mp}', size: 10, color: 'b', anchor: 'end' }, { x: 1.4, y: -0.05, s: 'u_{av} u_{rms}', size: 10, color: 'b', anchor: 'start' }],
    pad: [18, 22, 34, 30], label: 'Maxwell distribution of molecular speeds'
  });
})();

var figZ = D.plot({
  w: 420, h: 230, x: [0, 1000], y: [0, 2.2], xlabel: 'P (atm)', ylabel: 'Z', mathLabels: false, xticks: [[200, '200'], [400, '400'], [600, '600'], [800, '800']], yticks: [[1, '1']],
  fns: [{ f: function () { return 1; }, color: 'k', dash: '5 4', w: 1.2, label: 'ideal gas', lx: 820, ly: 0.9, math: false },
    { f: function (p) { return 1 + 0.00058 * p; }, color: 'b', label: 'H₂, He', lx: 120, ly: 1.2, math: false },
    { f: function (p) { return 1 - 0.0011 * p + 0.0000021 * p * p; }, color: 'g', label: 'N₂', lx: 955, ly: 1.72, math: false },
    { f: function (p) { return 1 - 0.0037 * p + 0.0000052 * p * p; }, from: 0, to: 950, color: 'r', label: 'CO₂', lx: 520, ly: 0.36, math: false }],
  label: 'Compressibility factor Z against pressure for real gases'
});

var figIMF = D.plot({
  w: 400, h: 210, x: [0.8, 3.2], y: [-1.2, 1.5], xlabel: 'distance between molecules', ylabel: 'potential energy', mathLabels: false, xticks: [], yticks: [], noOrigin: true,
  fns: [{ f: function (r) { return 4 * (Math.pow(1 / r, 12) - Math.pow(1 / r, 6)); }, from: 0.95, to: 3.2, color: 'c' }],
  texts: [{ x: 1.0, y: 1.2, s: 'repulsion', size: 11, color: 'r', anchor: 'start' }, { x: 1.8, y: -0.75, s: 'attraction (well)', size: 11, color: 'b', anchor: 'start' }],
  label: 'Potential energy of two molecules against distance'
});

var figVP = D.plot({
  w: 400, h: 210, x: [0, 120], y: [0, 1000], xlabel: 't (°C)', ylabel: 'vapour pressure (mm Hg)', mathLabels: false, xticks: [[34.6, '34.6'], [78.4, '78.4'], [100, '100']], yticks: [[760, '760']],
  fns: [[1, 'r', 'diethyl ether', 34.6], [1, 'o', 'ethanol', 78.4], [1, 'b', 'water', 100]].map(function (t) { return { f: function (x) { return 760 * Math.exp(0.045 * (x - t[3])); }, from: 0, to: 120, color: t[1], label: t[2], lx: t[3] - 30, ly: 760 * Math.exp(0.045 * (-28)) + 90, math: false }; }),
  segs: [{ x1: 0, y1: 760, x2: 120, y2: 760, color: 'm', dash: '4 3', w: 1 }],
  label: 'Vapour pressure against temperature; each liquid boils where its curve reaches 760 mm Hg'
});

// ---------- chapter text ----------
JEE.book('chemistry', 'states-of-matter', {
  intro: [
    R`Why does a balloon shrink in the cold? Why do pressure cookers cook faster? Why does water rise in a thin tube? The behaviour of gases and liquids depends on a balance between two things: the <b>thermal energy</b> of molecules, which keeps them moving apart, and the <b>intermolecular forces</b> that pull them together.`,
    R`This chapter studies the gas laws and the ideal gas equation, Dalton's and Graham's laws, the kinetic theory of gases and molecular speeds, real gases and the van der Waals equation, the types of intermolecular forces, and the properties of liquids: vapour pressure, surface tension and viscosity.`
  ],
  sections: [
    { h: R`The gas laws`, t: [0], blocks: [
      R`The state of a gas is described by pressure P, volume V, temperature T and amount n. Pressure is measured in pascals (Pa), bar (10⁵ Pa), atmospheres (1 atm = 101 325 Pa = 760 mm Hg = 760 torr) or mm Hg.`,
      { points: [
        R`<b>Boyle's law</b> (1662): at constant T and n, \(P\propto\dfrac1V\), i.e. PV = constant, \(P_1V_1 = P_2V_2\).`,
        R`<b>Charles' law</b> (1787): at constant P and n, \(V\propto T\) (kelvin), \(\dfrac{V_1}{T_1} = \dfrac{V_2}{T_2}\).`,
        R`<b>Gay-Lussac's law:</b> at constant V and n, \(P\propto T\).`,
        R`<b>Avogadro's law:</b> at constant T and P, \(V\propto n\); equal volumes contain equal numbers of molecules.`
      ] },
      { fig: figBoyle, cap: R`Boyle's law: P–V curves are hyperbolas, and P against 1/V is a straight line. Charles' law: V against t (°C) is a straight line that extrapolates to zero volume at −273.15 °C.` },
      { h3: R`The absolute (kelvin) scale of temperature` },
      R`Charles found that a gas expands by 1/273.15 of its volume at 0 °C for each degree rise. Extrapolated, every gas would have zero volume at −273.15 °C, the lowest possible temperature, <b>absolute zero</b>. Kelvin's scale starts there: T(K) = t(°C) + 273.15. (Real gases liquefy long before reaching it.)`,
      { ex: { q: R`A gas occupies 2 L at 1 atm. What is its volume at 0.5 atm (same temperature)? A balloon of 1 L at 27 °C is warmed to 87 °C at constant pressure; find its new volume.`,
        steps: [R`Boyle: \(V_2 = 1\times2/0.5\).`, R`Charles: \(V_2 = 1\times360/300\).`], ans: R`4 L; 1.2 L` } },
      { check: { q: R`Why must kelvin temperatures be used in gas laws?`, ans: R`Volume and pressure are proportional to absolute temperature, not to Celsius temperature (which can be zero or negative).` } }
    ] },

    { h: R`The ideal gas equation`, t: [1], blocks: [
      R`Combining the gas laws gives the <b>ideal gas equation</b>: \[PV = nRT\] R is the universal gas constant: 8.314 J K⁻¹ mol⁻¹ = 0.0821 L atm K⁻¹ mol⁻¹ = 0.08314 L bar K⁻¹ mol⁻¹ = 1.987 cal K⁻¹ mol⁻¹. For a fixed amount, \(\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}\) (the combined gas law).`,
      { h3: R`Density and molar mass` },
      R`With n = m/M: \(PV = \dfrac mMRT\), so the density is \[d = \frac mV = \frac{PM}{RT}\quad\text{and}\quad M = \frac{dRT}{P}\] This is used to find molar masses of gases and vapours.`,
      { ex: { q: R`How many moles of gas are in 10 L at 2 atm and 300 K? A gas has density 1.25 g/L at STP; find its molar mass.`,
        steps: [R`\(n = \dfrac{PV}{RT} = \dfrac{2\times10}{0.0821\times300}\).`, R`At STP, 1 mol occupies 22.4 L: M = 1.25 × 22.4.`], ans: R`≈ 0.81 mol; 28 g/mol (N₂ or CO)` } },
      { check: { q: R`Which is denser at STP: CO₂ or N₂?`, ans: R`CO₂ (density ∝ M: 44 vs 28).` } }
    ] },

    { h: R`Dalton's law of partial pressures`, t: [2], blocks: [
      R`<b>Dalton's law:</b> the total pressure of a mixture of non-reacting gases is the sum of the partial pressures of its components: \(P = p_1 + p_2 + p_3 + \dots\) The <b>partial pressure</b> of a gas is the pressure it would exert alone in the same volume and temperature, and \(p_i = x_iP\) where \(x_i\) is its mole fraction.`,
      R`<b>Gas collected over water:</b> the gas is saturated with water vapour, so \(p_{dry\,gas} = P_{total} - \text{aqueous tension}\) (the vapour pressure of water at that temperature).`,
      { ex: { q: R`Oxygen is collected over water at 25 °C, with total pressure 750 mm Hg. The vapour pressure of water at 25 °C is 23.8 mm Hg. Find the pressure of dry oxygen.`,
        steps: [R`\(p_{O_2} = 750 - 23.8\).`], ans: R`726.2 mm Hg` } },
      { check: { q: R`A mixture has 2 mol N₂ and 3 mol O₂ at a total pressure of 10 atm. What is the partial pressure of N₂?`, ans: R`(2/5) × 10 = 4 atm.` } }
    ] },

    { h: R`Graham's law of diffusion and effusion`, t: [3], blocks: [
      R`<b>Diffusion</b> is the spreading of one gas through another; <b>effusion</b> is the escape of a gas through a tiny hole. <b>Graham's law</b> (1829): at the same temperature and pressure, the rate is inversely proportional to the square root of the density or molar mass: \[\frac{r_1}{r_2} = \sqrt{\frac{d_2}{d_1}} = \sqrt{\frac{M_2}{M_1}}\] Since rate = volume/time (or moles/time), for equal volumes \(\dfrac{t_1}{t_2} = \sqrt{\dfrac{M_1}{M_2}}\).`,
      { ex: { q: R`Compare the rates of effusion of CH₄ and SO₂.`,
        steps: [R`\(\dfrac{r_{CH_4}}{r_{SO_2}} = \sqrt{\dfrac{64}{16}}\).`], ans: R`Methane effuses twice as fast` } },
      { tip: R`Graham's law follows from kinetic theory: rate ∝ average speed ∝ \(\sqrt{T/M}\). It was used in the Manhattan Project to enrich uranium (²³⁵UF₆ effuses 0.43% faster than ²³⁸UF₆).` },
      { check: { q: R`Which diffuses faster: NH₃ or HCl? Where does the white ring of NH₄Cl form in a tube with the two gases released from opposite ends?`, ans: R`NH₃ (M = 17) diffuses faster than HCl (36.5), so the ring forms nearer the HCl end.` } }
    ] },

    { h: R`Kinetic theory of gases`, t: [4], blocks: [
      R`The <b>kinetic molecular theory</b> explains the gas laws from molecular motion. Its postulates:`,
      { points: [R`A gas consists of a large number of tiny particles whose own volume is negligible compared with the volume of the container.`, R`The particles move randomly in straight lines and collide with each other and the walls; the collisions are perfectly elastic.`, R`There are no attractive or repulsive forces between particles (except during collisions).`, R`Pressure is due to collisions of the particles with the walls.`, R`The average kinetic energy of the particles is proportional to the absolute temperature.`] },
      { derive: R`Kinetic gas equation`, steps: [
        R`Consider N molecules of mass m in a cube; the momentum change at each wall collision and the collision rate give the force on the walls (see the Physics chapter on kinetic theory).`,
        R`Result: \[PV = \frac13mNu_{rms}^2\] where \(u_{rms}\) is the root-mean-square speed.`,
        R`Comparing with PV = nRT for one mole: the average kinetic energy per mole is \(\frac32RT\), and per molecule \(\frac32kT\) (k = R/N_A = 1.38 × 10⁻²³ J/K).`
      ] },
      { ex: { q: R`Find the total kinetic energy of 1 mol of a gas at 300 K.`,
        steps: [R`\(E = \frac32RT = 1.5\times8.314\times300\).`], ans: R`≈ 3741 J (the same for every gas at this temperature)` } },
      { check: { q: R`Two gases are at the same temperature. Do their molecules have the same average speed? The same average kinetic energy?`, ans: R`Same average kinetic energy, but lighter molecules move faster.` } }
    ] },

    { h: R`Molecular speeds`, t: [4], blocks: [
      R`Molecules in a gas have a spread of speeds, given by the <b>Maxwell–Boltzmann distribution</b>. Three characteristic speeds:`,
      { table: { head: [R`Speed`, R`Formula`, R`Ratio`], rows: [[R`Most probable \(u_{mp}\)`, R`\(\sqrt{\dfrac{2RT}{M}}\)`, R`1`], [R`Average \(u_{av}\)`, R`\(\sqrt{\dfrac{8RT}{\pi M}}\)`, R`1.128`], [R`Root mean square \(u_{rms}\)`, R`\(\sqrt{\dfrac{3RT}{M}}\)`, R`1.224`]] } },
      { fig: figSpeeds, cap: R`At higher temperature the curve flattens and shifts to higher speeds; the area (total number of molecules) stays the same.` },
      R`All three speeds increase as \(\sqrt T\) and decrease as \(1/\sqrt M\). Use M in kg/mol to get speeds in m/s.`,
      { ex: { q: R`Find the rms speed of N₂ at 300 K. At what temperature would O₂ have the same rms speed?`,
        steps: [R`\(u_{rms} = \sqrt{\dfrac{3\times8.314\times300}{0.028}}\).`, R`Equal speeds need equal T/M: \(T = 300\times\dfrac{32}{28}\).`], ans: R`≈ 517 m/s; ≈ 343 K` } },
      { check: { q: R`By what factor must T increase to double u_rms?`, ans: R`4.` } }
    ] },

    { h: R`Real gases: deviation from ideal behaviour`, t: [5], blocks: [
      R`Real gases deviate from PV = nRT, especially at <b>high pressure and low temperature</b>. The deviation is measured by the <b>compressibility factor</b> \[Z = \frac{PV}{nRT} = \frac{V_{real}}{V_{ideal}}\] Z = 1 for an ideal gas.`,
      { fig: figZ, cap: R`For H₂ and He, Z > 1 at all pressures at room temperature. For N₂ and CO₂, Z dips below 1 at moderate pressure (attractions dominate), then rises above 1 at high pressure (molecular size dominates).` },
      { points: [R`<b>Z < 1:</b> the gas is more compressible than ideal; attractive forces dominate (easily liquefiable gases like CO₂, NH₃).`, R`<b>Z > 1:</b> less compressible; the finite size of molecules (repulsion) dominates.`, R`Two faulty assumptions of the ideal model cause this: molecules do have volume, and they do attract each other.`] },
      { ex: { q: R`1 mol of a gas at 0 °C and 100 atm occupies 0.2 L. Find Z and say which force dominates.`,
        steps: [R`\(Z = \dfrac{100\times0.2}{0.0821\times273}\).`], ans: R`Z ≈ 0.89 < 1: attractions dominate` } },
      { check: { q: R`Under what conditions do real gases behave most nearly ideally?`, ans: R`Low pressure and high temperature.` } }
    ] },

    { h: R`The van der Waals equation`, t: [5], blocks: [
      R`Van der Waals (1873) corrected the ideal gas equation for both faults: \[\left(P + \frac{an^2}{V^2}\right)(V - nb) = nRT\]`,
      { points: [
        R`<b>Volume correction b</b> (L/mol): the molecules themselves occupy volume, so the free volume is V − nb. b is about four times the actual volume of the molecules in one mole, and measures molecular size.`,
        R`<b>Pressure correction a</b> (L² atm mol⁻²): attractions pull molecules back from the wall, so the measured pressure is less than the ideal one by \(an^2/V^2\). A larger a means stronger attractions and an easier-to-liquefy gas.`
      ] },
      { ex: { q: R`Find the pressure of 1 mol of CO₂ in 1 L at 300 K using the van der Waals equation (a = 3.59, b = 0.0427), and compare with the ideal value.`,
        steps: [R`\(P = \dfrac{nRT}{V - nb} - \dfrac{an^2}{V^2} = \dfrac{24.63}{0.9573} - 3.59\).`], ans: R`≈ 22.1 atm, versus 24.6 atm for an ideal gas` } },
      { adv: R`At low pressure, Z ≈ 1 + (b − a/RT)·(P/RT)·… so Z < 1 when a/RT > b. The <b>Boyle temperature</b> \(T_B = \dfrac{a}{Rb}\) is where a real gas obeys Boyle's law over a wide range. The <b>critical constants</b> are \(T_c = \dfrac{8a}{27Rb}\), \(P_c = \dfrac{a}{27b^2}\), \(V_c = 3b\). For CO₂, \(T_c\) ≈ 303 K: above it, CO₂ cannot be liquefied however much it is compressed. A gas must be cooled below \(T_c\) before pressure can liquefy it.` },
      { check: { q: R`Which gas has the larger value of a: NH₃ or He?`, ans: R`NH₃ (strong intermolecular forces, including hydrogen bonding).` } }
    ] },

    { h: R`Intermolecular forces`, t: [6], blocks: [
      R`<b>Intermolecular forces</b> are the attractions between molecules (much weaker than covalent bonds within molecules). Collectively they are called van der Waals forces, plus hydrogen bonding:`,
      { table: { head: [R`Force`, R`Between`, R`Energy varies as`, R`Example`], rows: [
        [R`London (dispersion)`, R`all molecules, including non-polar: temporary (instantaneous) dipoles induce dipoles`, R`\(1/r^6\)`, R`noble gases, I₂, CH₄`],
        [R`Dipole–dipole`, R`polar molecules with permanent dipoles`, R`\(1/r^3\) (fixed), \(1/r^6\) (rotating)`, R`HCl, SO₂`],
        [R`Dipole–induced dipole`, R`a polar molecule and a non-polar one`, R`\(1/r^6\)`, R`HCl with Ar`],
        [R`Hydrogen bonding`, R`H bonded to N, O or F, attracted to another N, O or F`, R`strong, ~10–40 kJ/mol`, R`H₂O, NH₃, HF`]] } },
      { fig: figIMF, cap: R`Two molecules attract at moderate distances and repel strongly when pushed together; the balance gives a potential-energy well.` },
      R`<b>Effect on properties:</b> stronger intermolecular forces give higher boiling and melting points, lower vapour pressure, higher viscosity and surface tension. London forces grow with the size (polarisability) of the molecule: boiling points rise from F₂ to I₂, and from CH₄ to C₄H₁₀. Water's unusually high boiling point comes from hydrogen bonding.`,
      R`<b>Thermal energy versus intermolecular forces</b> decides the state: when forces dominate, the substance is solid or liquid; when thermal energy dominates, it is a gas.`,
      { check: { q: R`Why does H₂O (M = 18) boil at 100 °C while H₂S (M = 34) boils at −60 °C?`, ans: R`Water molecules are linked by strong hydrogen bonds; H₂S has only weaker dipole–dipole and London forces.` } }
    ] },

    { h: R`The liquid state: vapour pressure`, t: [7], blocks: [
      R`Molecules at the surface of a liquid with enough energy escape into the vapour (evaporation). In a closed container, evaporation and condensation reach equilibrium; the pressure of the vapour then is the liquid's <b>vapour pressure</b>. It increases with temperature and is lower for liquids with stronger intermolecular forces.`,
      { fig: figVP, cap: R`A liquid boils when its vapour pressure equals the external pressure. At 1 atm (760 mm Hg) this is its normal boiling point.` },
      R`<b>Boiling point:</b> the temperature at which the vapour pressure equals the external pressure. At 1 atm it is the normal boiling point (at 1 bar, the standard boiling point). At high altitude (lower pressure) water boils below 100 °C, so food takes longer to cook; in a pressure cooker (higher pressure) it boils above 100 °C, so food cooks faster.`,
      { check: { q: R`Which has the higher vapour pressure at room temperature: diethyl ether or water?`, ans: R`Diethyl ether (weaker intermolecular forces, lower boiling point).` } }
    ] },

    { h: R`Surface tension and viscosity`, t: [7], blocks: [
      R`<b>Surface tension</b> γ: a molecule inside a liquid is pulled equally in all directions, but one at the surface is pulled inward. The surface behaves like a stretched membrane and tries to shrink to the smallest area. γ is the force per unit length acting along the surface (N/m), or the energy needed to increase the surface area by 1 m² (J/m²). It explains spherical drops, capillary rise, and why some insects walk on water. Surface tension <b>decreases</b> as temperature rises (molecules have more kinetic energy) and is lowered by detergents.`,
      R`<b>Viscosity</b> η: the resistance of a liquid to flow, due to friction between layers moving at different speeds. The force between layers is \(F = \eta A\dfrac{dv}{dx}\) (η in Pa s; 1 poise = 0.1 Pa s). Liquids with strong intermolecular forces (glycerol, honey) are very viscous. Viscosity <b>decreases</b> as temperature rises.`,
      { table: { head: [R`Liquid (20 °C)`, R`Surface tension (N/m)`, R`Viscosity (mPa s)`], rows: [[R`Water`, R`0.073`, R`1.0`], [R`Ethanol`, R`0.022`, R`1.2`], [R`Glycerol`, R`0.063`, R`1490`], [R`Mercury`, R`0.487`, R`1.55`]] } },
      { check: { q: R`Why are falling raindrops nearly spherical?`, ans: R`Surface tension minimises the surface area, and a sphere has the smallest area for a given volume.` } }
    ] }
  ],
  summary: [
    R`Boyle PV = const; Charles V ∝ T; Gay-Lussac P ∝ T; Avogadro V ∝ n; absolute zero −273.15 °C.`,
    R`PV = nRT (R = 8.314 J K⁻¹ mol⁻¹ = 0.0821 L atm K⁻¹ mol⁻¹); d = PM/RT.`,
    R`Dalton: P = Σpᵢ, pᵢ = xᵢP; dry gas = total − aqueous tension.`,
    R`Graham: r₁/r₂ = √(M₂/M₁).`,
    R`Kinetic theory: PV = ⅓mNu²_rms; KE = (3/2)RT per mole; u_mp : u_av : u_rms = 1 : 1.128 : 1.224.`,
    R`Real gases: Z = PV/nRT; Z < 1 attractions, Z > 1 size; ideal at low P, high T.`,
    R`van der Waals: (P + an²/V²)(V − nb) = nRT; T_B = a/Rb, T_c = 8a/27Rb.`,
    R`Intermolecular forces: London, dipole–dipole, dipole–induced dipole, H-bonding; stronger forces raise b.p., viscosity and surface tension.`,
    R`Liquids: vapour pressure rises with T; boils when VP = external P; surface tension and viscosity fall with T.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §9.2 Relating Pressure, Volume, Amount, and Temperature: The Ideal Gas Law`, url: 'https://openstax.org/books/chemistry-2e/pages/9-2-relating-pressure-volume-amount-and-temperature-the-ideal-gas-law' },
    { t: R`OpenStax Chemistry 2e, §9.4 Effusion and Diffusion of Gases`, url: 'https://openstax.org/books/chemistry-2e/pages/9-4-effusion-and-diffusion-of-gases' },
    { t: R`OpenStax Chemistry 2e, §9.5 The Kinetic-Molecular Theory`, url: 'https://openstax.org/books/chemistry-2e/pages/9-5-the-kinetic-molecular-theory' },
    { t: R`OpenStax Chemistry 2e, §9.6 Non-Ideal Gas Behavior`, url: 'https://openstax.org/books/chemistry-2e/pages/9-6-non-ideal-gas-behavior' },
    { t: R`OpenStax Chemistry 2e, §10.1 Intermolecular Forces`, url: 'https://openstax.org/books/chemistry-2e/pages/10-1-intermolecular-forces' },
    { t: R`OpenStax Chemistry 2e, §10.2 Properties of Liquids`, url: 'https://openstax.org/books/chemistry-2e/pages/10-2-properties-of-liquids' }
  ]
});
})();
