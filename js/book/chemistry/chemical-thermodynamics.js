// Book chapter: Chemical Thermodynamics. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function box(x, y, w, h, t, c) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + D.text(x + w / 2, y + h / 2, t, { size: 11, math: false, bold: true }); }

// ---------- figures ----------
var figSystems = D.row([
  [D.svg(150, 140, [D.rect(30, 30, 90, 80, { color: 'b', fill: 'soft', w: 1.6, r: 8 }), D.arrow(75, 55, 75, 8, { color: 'r', w: 1.6, head: 6, label: 'matter', lx: 30, ly: 0, math: false, size: 10 }), D.arrow(125, 80, 148, 80, { color: 'o', w: 1.6, head: 6, label: 'energy', lx: 0, ly: -10, math: false, size: 10 })], 'open system'), 'open: matter and energy'],
  [D.svg(150, 140, [D.rect(30, 30, 90, 80, { color: 'b', fill: 'soft', w: 3, r: 8 }), D.arrow(125, 80, 148, 80, { color: 'o', w: 1.6, head: 6, label: 'energy', lx: 0, ly: -10, math: false, size: 10 }), D.text(75, 70, 'sealed', { size: 11, math: false })], 'closed system'), 'closed: energy only'],
  [D.svg(150, 140, [D.rect(22, 22, 106, 96, { color: 'm', w: 1.4, dash: '4 3', r: 10 }), D.rect(30, 30, 90, 80, { color: 'b', fill: 'soft', w: 3, r: 8 }), D.text(75, 70, 'insulated', { size: 11, math: false })], 'isolated system'), 'isolated: neither']
]);

var figPV = D.plot({
  w: 400, h: 210, x: [0, 25], y: [0, 2.6], xlabel: 'V (L)', ylabel: 'P (atm)', mathLabels: false, xticks: [[10, '10'], [20, '20']], yticks: [[1, '1'], [2, '2']],
  shade: [{ f: function (v) { return 1; }, from: 10, to: 20, color: 'o' }],
  fns: [{ f: function (v) { return 20 / v; }, from: 8, to: 24, color: 'b', label: 'reversible (isothermal)', lx: 13.5, ly: 1.75, math: false }],
  segs: [{ x1: 10, y1: 2, x2: 10, y2: 1, color: 'o', w: 2, arrow: true }, { x1: 10, y1: 1, x2: 20, y2: 1, color: 'o', w: 2, arrow: true }],
  texts: [{ x: 15, y: 0.5, s: 'irreversible work against 1 atm (shaded)', size: 11, color: 'o' }],
  label: 'Reversible versus irreversible expansion work'
});

var figHess = D.svg(420, 200, [
  D.line(40, 30, 180, 30, { w: 2 }), D.text(110, 18, 'C(s) + O₂(g)', { size: 12, math: false }),
  D.line(240, 90, 380, 90, { w: 2 }), D.text(310, 78, 'CO(g) + ½O₂(g)', { size: 12, math: false }),
  D.line(40, 175, 380, 175, { w: 2 }), D.text(210, 192, 'CO₂(g)', { size: 12, math: false }),
  D.arrow(80, 32, 80, 172, { color: 'r', w: 2, head: 8, label: '−393.5 kJ', lx: -40, ly: 0, math: false, size: 11 }),
  D.arrow(160, 32, 260, 88, { color: 'b', w: 2, head: 8, label: 'ΔH = ?', lx: 22, ly: -10, math: false, size: 11 }),
  D.arrow(330, 92, 330, 172, { color: 'g', w: 2, head: 8, label: '−283.0 kJ', lx: 42, ly: 0, math: false, size: 11 }),
  D.text(210, 130, 'two paths, same total change', { size: 11, color: 'm', math: false })
], "Hess's law: the enthalpy change is the same by either route");

var figBH = (function () {
  function y(e) { return 270 - (e + 411) / 1136 * 245; }
  var s = [], lv = [[0, 20, 200, 'Na(s) + ½Cl₂(g)'], [108, 20, 200, 'Na(g) + ½Cl₂(g)'], [604, 20, 240, 'Na⁺(g) + ½Cl₂(g) + e⁻'], [725, 20, 420, 'Na⁺(g) + Cl(g) + e⁻'], [376, 230, 420, 'Na⁺(g) + Cl⁻(g)'], [-411, 20, 420, 'NaCl(s)']];
  lv.forEach(function (l) { s.push(D.line(l[1], y(l[0]), l[2], y(l[0]), { w: 1.8 }), D.text(l[2], y(l[0]) - 8, l[3], { size: 10.5, math: false, anchor: 'end' })); });
  s.push(D.arrow(40, y(0), 40, y(108), { color: 'o', w: 1.6, head: 6 }), D.text(46, y(54) + 2, '+108', { size: 10, color: 'o', math: false, anchor: 'start' }));
  s.push(D.arrow(70, y(108), 70, y(604), { color: 'o', w: 1.6, head: 6 }), D.text(76, y(356), '+496 (IE)', { size: 10, color: 'o', math: false, anchor: 'start' }));
  s.push(D.arrow(100, y(604), 100, y(725), { color: 'o', w: 1.6, head: 6 }), D.text(106, y(665) + 2, '+121', { size: 10, color: 'o', math: false, anchor: 'start' }));
  s.push(D.arrow(330, y(725), 330, y(376), { color: 'b', w: 1.6, head: 6 }), D.text(336, y(550), '−349 (EA)', { size: 10, color: 'b', math: false, anchor: 'start' }));
  s.push(D.arrow(380, y(376), 380, y(-411), { color: 'r', w: 2, head: 7 }), D.text(374, y(0), 'lattice:', { size: 10, color: 'r', math: false, anchor: 'end' }), D.text(374, y(0) + 13, '−787', { size: 10, color: 'r', math: false, anchor: 'end' }));
  s.push(D.arrow(170, y(0), 170, y(-411), { color: 'g', w: 1.6, head: 6 }), D.text(176, y(-200), 'ΔH_f = −411', { size: 10, color: 'g', math: false, anchor: 'start' }));
  return D.svg(440, 290, s, 'Born-Haber cycle for sodium chloride (kJ/mol)');
})();

var figGT = D.plot({
  w: 400, h: 220, x: [0, 1000], y: [-140, 80], xlabel: 'T (K)', ylabel: 'ΔG (kJ/mol)', mathLabels: false, xticks: [[466, '466 K']], yticks: [], noOrigin: true,
  fns: [{ f: function (t) { return -92.4 + t * 0.1983; }, color: 'c', label: 'N₂ + 3H₂ → 2NH₃ (ΔH < 0, ΔS < 0)', lx: 40, ly: 62, math: false }],
  texts: [{ x: 200, y: -110, s: 'spontaneous below 466 K', size: 11, color: 'g' }, { x: 780, y: -60, s: 'non-spontaneous above', size: 11, color: 'r' }],
  label: 'Gibbs energy change against temperature for ammonia synthesis'
});

// ---------- chapter text ----------
JEE.book('chemistry', 'chemical-thermodynamics', {
  intro: [
    R`Why does petrol burn but water does not? Why does ice melt at room temperature but not in a freezer? <b>Thermodynamics</b> answers such questions using energy: how much heat a reaction gives out or takes in, and whether it can happen on its own.`,
    R`This chapter covers systems and state functions, the first law and enthalpy, heat capacity and calorimetry, the many kinds of enthalpy change, Hess's law (including bond enthalpies and the Born–Haber cycle), entropy and the second law, Gibbs energy as the test for spontaneity, and the link ΔG° = −RT ln K.`
  ],
  sections: [
    { h: R`System, surroundings and types of systems`, t: [0], blocks: [
      R`The part of the universe we study is the <b>system</b> (for example, a reaction mixture in a beaker); everything else is the <b>surroundings</b>. Together they form the universe. The boundary between them may be real or imaginary.`,
      { fig: figSystems, cap: R`An open system exchanges both matter and energy; a closed system only energy; an isolated system neither (an ideal thermos flask).` },
      { check: { q: R`Is a cup of hot tea with a lid an open, closed or isolated system?`, ans: R`Closed (approximately): heat escapes, but matter (vapour) mostly does not.` } }
    ] },

    { h: R`Properties, state functions and processes`, t: [0], blocks: [
      { points: [R`<b>Extensive properties</b> depend on the amount of matter: mass, volume, internal energy, enthalpy, heat capacity.`, R`<b>Intensive properties</b> do not: temperature, pressure, density, molar heat capacity, boiling point.`, R`The ratio of two extensive properties is intensive (density = mass/volume).`] },
      R`A <b>state function</b> depends only on the present state of the system, not on how it got there: P, V, T, U, H, S, G. Its change is (final − initial) whatever the path. <b>Path functions</b> such as heat q and work w depend on how the change is carried out.`,
      { table: { head: [R`Process`, R`Condition`], rows: [[R`Isothermal`, R`constant temperature (ΔT = 0)`], [R`Adiabatic`, R`no heat exchange (q = 0)`], [R`Isobaric`, R`constant pressure`], [R`Isochoric`, R`constant volume`], [R`Cyclic`, R`returns to the initial state (ΔU = ΔH = 0)`], [R`Reversible`, R`carried out infinitely slowly through equilibrium states`]] } },
      { check: { q: R`Is molar volume an intensive or extensive property?`, ans: R`Intensive (volume per mole).` } }
    ] },

    { h: R`Internal energy, heat and work`, t: [1], blocks: [
      R`The <b>internal energy</b> U of a system is the total of all the energies of its particles (kinetic, potential, chemical, nuclear). Only changes, ΔU, can be measured. U can be changed by heat q or work w.`,
      R`<b>Sign convention (IUPAC):</b> q and w are positive when energy enters the system (heat absorbed, work done on the system) and negative when energy leaves it.`,
      { derive: R`Pressure–volume work`, steps: [
        R`A gas expanding against a constant external pressure \(p_{ext}\) pushes a piston: \(w = -p_{ext}\Delta V\) (negative, since the gas does work).`,
        R`For a <b>reversible isothermal</b> expansion of an ideal gas, \(p_{ext}\) always equals the gas pressure nRT/V: \[w_{rev} = -\int_{V_1}^{V_2}\frac{nRT}{V}dV = -2.303\,nRT\log\frac{V_2}{V_1}\]`,
        R`<b>Free expansion</b> (into a vacuum, \(p_{ext} = 0\)): w = 0.`
      ] },
      { fig: figPV, cap: R`The work done by a gas is the area under the P–V path. A reversible expansion does the maximum work.` },
      { ex: { q: R`1 mol of an ideal gas at 300 K expands from 10 L to 20 L (a) reversibly and isothermally (b) against a constant external pressure of 1 atm. Find w in each case.`,
        steps: [R`(a) \(w = -nRT\ln2 = -8.314\times300\times0.693\).`, R`(b) \(w = -p\Delta V = -1\times10\) L atm = −10 × 101.3 J.`], ans: R`(a) ≈ −1729 J (b) ≈ −1013 J` } },
      { check: { q: R`Which gives more work: a reversible or an irreversible expansion between the same states?`, ans: R`Reversible (the maximum possible work).` } }
    ] },

    { h: R`The first law of thermodynamics`, t: [1], blocks: [
      R`<b>First law:</b> energy can be neither created nor destroyed; the energy of an isolated system is constant. For a closed system, \[\Delta U = q + w\]`,
      { points: [R`Isothermal process of an ideal gas: ΔU = 0, so q = −w.`, R`Adiabatic process: q = 0, so ΔU = w.`, R`At constant volume (no PV work): ΔU = q_v.`] },
      { ex: { q: R`A system absorbs 500 J of heat and does 200 J of work. Find ΔU.`,
        steps: [R`q = +500, w = −200.`], ans: R`ΔU = +300 J` } },
      { mistake: R`Mixing sign conventions. Chemistry uses ΔU = q + w with w = work done <b>on</b> the system; some physics books use ΔU = q − W with W = work done <b>by</b> the system. Both are fine; just be consistent.` },
      { check: { q: R`What is ΔU for a cyclic process?`, ans: R`Zero (U is a state function).` } }
    ] },

    { h: R`Enthalpy`, t: [1], blocks: [
      R`Most reactions happen at constant pressure (open to the atmosphere), so the heat absorbed there is more useful. <b>Enthalpy</b> is defined as \(H = U + PV\), a state function. At constant pressure, \[\Delta H = \Delta U + P\Delta V = q_p\]`,
      R`For reactions involving gases, \(P\Delta V = \Delta n_gRT\), where \(\Delta n_g\) = moles of gaseous products − moles of gaseous reactants: \[\Delta H = \Delta U + \Delta n_gRT\]`,
      { points: [R`ΔH < 0: <b>exothermic</b> (heat released).`, R`ΔH > 0: <b>endothermic</b> (heat absorbed).`] },
      { ex: { q: R`For CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(l), ΔU = −885.4 kJ/mol at 298 K. Find ΔH.`,
        steps: [R`\(\Delta n_g = 1 - 3 = -2\).`, R`\(\Delta H = -885.4 + (-2)(8.314\times10^{-3})(298) = -885.4 - 4.96\).`], ans: R`ΔH ≈ −890.4 kJ/mol` } },
      { check: { q: R`For which reaction is ΔH = ΔU: N₂ + O₂ → 2NO or N₂ + 3H₂ → 2NH₃?`, ans: R`N₂ + O₂ → 2NO (Δn_g = 0).` } }
    ] },

    { h: R`Measuring ΔU and ΔH: calorimetry`, t: [1], blocks: [
      R`Heat changes are measured with a <b>calorimeter</b>, from the temperature change of something of known heat capacity: q = C ΔT.`,
      { points: [R`<b>Bomb calorimeter</b> (constant volume): the substance is burnt in oxygen in a sealed steel bomb immersed in water. It measures \(q_v = \Delta U\).`, R`<b>Coffee-cup calorimeter</b> (constant pressure, open to air): used for reactions in solution (neutralisation, dissolution). It measures \(q_p = \Delta H\).`] },
      { ex: { q: R`Burning 0.5 g of graphite in a bomb calorimeter (heat capacity 10 kJ/K) raises the temperature by 1.64 K. Find ΔU of combustion per mole of carbon.`,
        steps: [R`q = 10 × 1.64 = 16.4 kJ for 0.5 g.`, R`Per mole (12 g): 16.4 × 24; the reaction releases heat.`], ans: R`ΔU ≈ −393.6 kJ/mol` } },
      { check: { q: R`Which calorimeter measures ΔH directly?`, ans: R`The constant-pressure (coffee-cup) calorimeter.` } }
    ] },

    { h: R`Heat capacity and specific heat`, t: [2], blocks: [
      R`The <b>heat capacity</b> C of a body is the heat needed to raise its temperature by 1 K: q = CΔT. The <b>specific heat</b> c is the heat capacity per gram (q = mcΔT), and the <b>molar heat capacity</b> \(C_m\) is per mole (q = nC_mΔT). Water's specific heat is high: 4.18 J g⁻¹ K⁻¹.`,
      R`For gases, the molar heat capacity at constant pressure is larger than at constant volume (extra heat is needed for expansion work): \(C_p - C_v = R\) for an ideal gas. Then \(\Delta U = nC_v\Delta T\) and \(\Delta H = nC_p\Delta T\).`,
      { ex: { q: R`How much heat is needed to warm 100 g of water from 25 °C to 75 °C?`,
        steps: [R`q = 100 × 4.18 × 50.`], ans: R`20.9 kJ` } },
      { check: { q: R`Why do coastal areas have milder climates than inland areas?`, ans: R`Water's high specific heat means the sea warms and cools slowly, moderating temperatures.` } }
    ] },

    { h: R`Standard enthalpy of reaction`, t: [4], blocks: [
      R`Enthalpy changes depend on conditions, so we use a <b>standard state</b>: the pure substance at 1 bar (and a specified temperature, usually 298 K) in its most stable form. The <b>standard enthalpy of reaction</b> \(\Delta_rH^\circ\) is the enthalpy change when the reaction occurs with all reactants and products in their standard states.`,
      R`A <b>thermochemical equation</b> shows the balanced equation with physical states and ΔH: \(\text{C(graphite)} + \text{O}_2(\text{g})\to\text{CO}_2(\text{g})\), \(\Delta_rH^\circ = -393.5\) kJ/mol. Reversing a reaction changes the sign of ΔH; multiplying the equation multiplies ΔH.`,
      { check: { q: R`If 2H₂(g) + O₂(g) → 2H₂O(l) has ΔH = −571.6 kJ, what is ΔH for H₂O(l) → H₂(g) + ½O₂(g)?`, ans: R`+285.8 kJ.` } }
    ] },

    { h: R`Enthalpies of formation, combustion, atomisation and bond dissociation`, t: [4], blocks: [
      { points: [
        R`<b>Standard enthalpy of formation</b> \(\Delta_fH^\circ\): for forming 1 mol of a compound from its elements in their standard states. For elements in their standard states it is zero.`,
        R`<b>Enthalpy of combustion</b> \(\Delta_cH^\circ\): for burning 1 mol of a substance completely in oxygen (always negative). Fuels and foods are compared this way.`,
        R`<b>Enthalpy of atomisation</b> \(\Delta_aH^\circ\): for breaking 1 mol of a substance completely into gaseous atoms.`,
        R`<b>Bond dissociation enthalpy:</b> for breaking 1 mol of a particular bond in gaseous molecules (H–H: 436 kJ/mol). For bonds that occur in different molecules (C–H), we use average <b>bond enthalpies</b>.`
      ] },
      R`From formation enthalpies: \[\Delta_rH^\circ = \sum\Delta_fH^\circ(\text{products}) - \sum\Delta_fH^\circ(\text{reactants})\] From bond enthalpies (gases): \(\Delta_rH^\circ = \sum\)(bonds broken) − \(\sum\)(bonds formed).`,
      { ex: { q: R`Using \(\Delta_fH^\circ\) (kJ/mol): CH₄ −74.8, CO₂ −393.5, H₂O(l) −285.8, find the enthalpy of combustion of methane.`,
        steps: [R`\(\Delta H = [-393.5 + 2(-285.8)] - [-74.8 + 0]\).`], ans: R`≈ −890.3 kJ/mol` } },
      { ex: { q: R`Estimate ΔH for H₂ + Cl₂ → 2HCl using bond enthalpies H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol.`,
        steps: [R`Bonds broken: 436 + 242 = 678; bonds formed: 2 × 431 = 862.`], ans: R`ΔH ≈ −184 kJ` } },
      { check: { q: R`What is the standard enthalpy of formation of O₂(g)?`, ans: R`Zero (an element in its standard state).` } }
    ] },

    { h: R`Enthalpies of phase transition`, t: [4], blocks: [
      R`Changes of state at constant temperature also involve enthalpy:`,
      { points: [R`<b>Fusion</b> (melting) \(\Delta_{fus}H\): ice, 6.01 kJ/mol at 273 K.`, R`<b>Vaporisation</b> \(\Delta_{vap}H\): water, 40.7 kJ/mol at 373 K (much larger: all intermolecular attractions must be overcome).`, R`<b>Sublimation</b> (solid → gas directly): \(\Delta_{sub}H = \Delta_{fus}H + \Delta_{vap}H\) (at the same temperature, by Hess's law). Dry ice and naphthalene sublime.`] },
      { check: { q: R`Why does steam at 100 °C cause worse burns than water at 100 °C?`, ans: R`Condensing steam releases its large enthalpy of vaporisation (40.7 kJ/mol) onto the skin.` } }
    ] },

    { h: R`Enthalpies of solution, hydration and ionisation; lattice enthalpy`, t: [4], blocks: [
      { points: [
        R`<b>Lattice enthalpy</b>: the enthalpy change for completely separating 1 mol of an ionic solid into gaseous ions (positive). It measures ionic bond strength; it is larger for smaller, more highly charged ions (MgO ≫ NaCl).`,
        R`<b>Hydration enthalpy</b>: the enthalpy change when 1 mol of gaseous ions dissolve in water (negative). Small, highly charged ions are hydrated most strongly.`,
        R`<b>Enthalpy of solution</b>: for dissolving 1 mol of solute in a large amount of solvent: \(\Delta_{sol}H = \Delta_{lattice}H + \Delta_{hyd}H\).`,
        R`<b>Ionisation enthalpy</b> of a weak electrolyte (e.g. the enthalpy of ionisation of acetic acid), and the enthalpy of neutralisation of a strong acid by a strong base, −57.1 kJ per mole of water formed.`
      ] },
      { fig: figBH, cap: R`Born–Haber cycle: forming NaCl(s) directly (\(\Delta H_f\)) equals the sum of the steps through gaseous atoms and ions. This gives the lattice enthalpy, which cannot be measured directly.` },
      { ex: { q: R`Using: sublimation of Na +108, ionisation enthalpy of Na +496, ½ bond enthalpy of Cl₂ +121, electron gain enthalpy of Cl −349, ΔH_f(NaCl) −411 kJ/mol, find the lattice enthalpy of NaCl.`,
        steps: [R`\(-411 = 108 + 496 + 121 - 349 - U\).`], ans: R`U = 787 kJ/mol` } },
      { check: { q: R`Why is NaCl soluble in water even though its lattice enthalpy is large?`, ans: R`The hydration enthalpy of Na⁺ and Cl⁻ almost balances it, and the dissolving increases entropy.` } }
    ] },

    { h: R`Hess's law of constant heat summation`, t: [3], blocks: [
      R`<b>Hess's law</b> (1840): the total enthalpy change of a reaction is the same whether it occurs in one step or several, because enthalpy is a state function. So thermochemical equations can be added and subtracted like algebraic equations.`,
      { fig: figHess, cap: R`Carbon can burn directly to CO₂, or first to CO and then to CO₂. The total ΔH is the same, so the unknown step can be found.` },
      { ex: { q: R`Given C + O₂ → CO₂, ΔH = −393.5 kJ and CO + ½O₂ → CO₂, ΔH = −283.0 kJ, find ΔH for C + ½O₂ → CO.`,
        steps: [R`Subtract the second equation from the first: C + ½O₂ → CO.`, R`ΔH = −393.5 − (−283.0).`], ans: R`−110.5 kJ/mol` } },
      R`<b>Applications:</b> finding enthalpies of formation that cannot be measured directly (CO, benzene), enthalpies of transition (graphite → diamond), lattice enthalpies (Born–Haber cycle) and resonance energies.`,
      { check: { q: R`Why can the enthalpy of formation of CO not be measured directly?`, ans: R`Burning carbon in limited oxygen always gives a mixture of CO and CO₂.` } }
    ] },

    { h: R`Spontaneous processes`, t: [5], blocks: [
      R`A <b>spontaneous process</b> occurs on its own without continuous outside help (it may still be slow): water flows downhill, heat flows from hot to cold, iron rusts, ice melts above 0 °C. Its reverse is non-spontaneous.`,
      R`Exothermic reactions are often spontaneous, but not always: ice melting, NH₄Cl dissolving and water evaporating are spontaneous yet endothermic. So ΔH alone cannot decide spontaneity; we also need <b>entropy</b>.`,
      { check: { q: R`Is a spontaneous reaction necessarily fast?`, ans: R`No. Diamond turning into graphite is spontaneous but immeasurably slow; spontaneity is about direction, not rate.` } }
    ] },

    { h: R`Entropy and entropy change`, t: [5], blocks: [
      R`<b>Entropy</b> S is a measure of the randomness or disorder of a system: the number of ways its energy and particles can be arranged. It is a state function. Entropy increases from solid to liquid to gas, with temperature, on dissolving, and when the number of gas molecules increases.`,
      R`For a reversible process at temperature T, \[\Delta S = \frac{q_{rev}}{T}\quad(\text{J K}^{-1}\text{ mol}^{-1})\] At a phase transition: \(\Delta S = \dfrac{\Delta H_{transition}}{T_{transition}}\).`,
      { ex: { q: R`Find the entropy of vaporisation of water (ΔH_vap = 40.7 kJ/mol at 373 K).`,
        steps: [R`\(\Delta S = 40\,700/373\).`], ans: R`≈ 109 J K⁻¹ mol⁻¹` } },
      { tip: R`Predict the sign of ΔS quickly from gases: if a reaction increases the number of moles of gas (CaCO₃(s) → CaO(s) + CO₂(g)), ΔS > 0; if it decreases them (N₂ + 3H₂ → 2NH₃), ΔS < 0.` },
      { adv: R`<b>Third law:</b> the entropy of a perfect crystal at absolute zero is zero. This allows absolute entropies to be measured, and \(\Delta_rS^\circ = \sum S^\circ(\text{products}) - \sum S^\circ(\text{reactants})\).` },
      { check: { q: R`Does entropy increase or decrease when water freezes?`, ans: R`It decreases (the molecules become more ordered).` } }
    ] },

    { h: R`The second law: entropy and spontaneity`, t: [5], blocks: [
      R`<b>Second law of thermodynamics:</b> in any spontaneous process, the total entropy of the universe increases: \[\Delta S_{total} = \Delta S_{system} + \Delta S_{surroundings} > 0\] At equilibrium, \(\Delta S_{total} = 0\).`,
      R`The surroundings gain entropy when the system releases heat: \(\Delta S_{surr} = -\dfrac{\Delta H_{sys}}{T}\). So an exothermic reaction increases the entropy of the surroundings, which is why many exothermic reactions are spontaneous even when the system's own entropy falls.`,
      { check: { q: R`Water freezes spontaneously below 0 °C even though ΔS_system < 0. How is the second law satisfied?`, ans: R`The heat released raises the entropy of the colder surroundings by more than the system's entropy falls, so ΔS_total > 0.` } }
    ] },

    { h: R`Gibbs energy`, t: [6], blocks: [
      R`Working out the entropy of the surroundings is awkward. Gibbs combined both effects into one property of the system, the <b>Gibbs energy</b>: \[G = H - TS,\qquad \Delta G = \Delta H - T\Delta S\ \ (\text{constant }T, P)\]`,
      { derive: R`ΔG and the total entropy`, steps: [
        R`\(\Delta S_{total} = \Delta S_{sys} - \dfrac{\Delta H_{sys}}{T}\).`,
        R`Multiply by −T: \(-T\Delta S_{total} = \Delta H_{sys} - T\Delta S_{sys} = \Delta G_{sys}\).`,
        R`So ΔS_total > 0 is the same as ΔG < 0.`
      ] },
      R`ΔG is also the maximum <b>useful (non-expansion) work</b> a process can do, for example the electrical work of a cell: \(\Delta G = -nFE_{cell}\).`,
      { check: { q: R`What is the unit of G?`, ans: R`J (or J/mol, kJ/mol), the same as H.` } }
    ] },

    { h: R`ΔG as the criterion of spontaneity`, t: [6], blocks: [
      { points: [R`ΔG < 0: spontaneous.`, R`ΔG = 0: at equilibrium.`, R`ΔG > 0: non-spontaneous (the reverse is spontaneous).`] },
      { h3: R`Effect of temperature` },
      { table: { head: [R`ΔH`, R`ΔS`, R`ΔG = ΔH − TΔS`, R`Spontaneous`], rows: [
        [R`−`, R`+`, R`always −`, R`at all temperatures`], [R`+`, R`−`, R`always +`, R`never`], [R`−`, R`−`, R`− at low T`, R`below T = ΔH/ΔS`], [R`+`, R`+`, R`− at high T`, R`above T = ΔH/ΔS`]] } },
      { fig: figGT, cap: R`For ammonia synthesis (ΔH < 0, ΔS < 0), ΔG becomes positive above about 466 K.` },
      { ex: { q: R`For N₂ + 3H₂ → 2NH₃, ΔH = −92.4 kJ and ΔS = −198.3 J/K. Find ΔG at 298 K and the temperature above which the reaction stops being spontaneous.`,
        steps: [R`ΔG = −92.4 − 298(−0.1983) = −33.3 kJ.`, R`T = ΔH/ΔS = 92.4/0.1983.`], ans: R`ΔG ≈ −33.3 kJ (spontaneous); above ≈ 466 K` } },
      { ex: { q: R`For CaCO₃ → CaO + CO₂, ΔH = +178 kJ and ΔS = +160 J/K. Above what temperature does it decompose spontaneously?`,
        steps: [R`T = 178 000/160.`], ans: R`≈ 1113 K` } },
      { check: { q: R`A reaction has ΔH > 0 and ΔS > 0. At what temperatures is it spontaneous?`, ans: R`At high temperatures (T > ΔH/ΔS).` } }
    ] },

    { h: R`Gibbs energy and the equilibrium constant`, t: [7], blocks: [
      R`The standard Gibbs energy change \(\Delta G^\circ\) (all species in their standard states) is related to the equilibrium constant: \[\Delta G^\circ = -RT\ln K = -2.303RT\log K\] More generally, \(\Delta G = \Delta G^\circ + RT\ln Q\), where Q is the reaction quotient; at equilibrium ΔG = 0 and Q = K.`,
      { points: [R`ΔG° < 0 ⇒ K > 1: products favoured at equilibrium.`, R`ΔG° > 0 ⇒ K < 1: reactants favoured.`, R`ΔG° = 0 ⇒ K = 1.`] },
      { ex: { q: R`For ammonia synthesis at 298 K, ΔG° = −33.3 kJ/mol. Find K.`,
        steps: [R`\(\ln K = \dfrac{33\,300}{8.314\times298} = 13.44\).`], ans: R`K ≈ 6.9 × 10⁵` } },
      { check: { q: R`If K = 1, what is ΔG°?`, ans: R`Zero.` } }
    ] }
  ],
  summary: [
    R`System and surroundings; open, closed, isolated. Extensive vs intensive; state functions (U, H, S, G) vs path functions (q, w).`,
    R`w = −p_ext ΔV; reversible isothermal w = −2.303 nRT log(V₂/V₁); free expansion w = 0.`,
    R`First law ΔU = q + w; ΔH = ΔU + Δn_gRT; q_v = ΔU (bomb), q_p = ΔH (coffee cup).`,
    R`q = mcΔT = nC_mΔT; C_p − C_v = R.`,
    R`ΔrH° = ΣΔfH°(products) − ΣΔfH°(reactants) = Σ(bonds broken) − Σ(bonds formed). Formation, combustion, atomisation, bond, phase transition, solution, hydration, lattice enthalpies.`,
    R`Hess's law; Born–Haber cycle gives lattice enthalpy.`,
    R`Entropy: ΔS = q_rev/T; ΔS_vap = ΔH_vap/T_b. Second law: ΔS_total > 0 for spontaneous change.`,
    R`G = H − TS; ΔG = ΔH − TΔS < 0 for spontaneity; T = ΔH/ΔS at the crossover.`,
    R`ΔG° = −RT ln K = −2.303RT log K; ΔG = ΔG° + RT ln Q.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §5.1 Energy Basics`, url: 'https://openstax.org/books/chemistry-2e/pages/5-1-energy-basics' },
    { t: R`OpenStax Chemistry 2e, §5.2 Calorimetry`, url: 'https://openstax.org/books/chemistry-2e/pages/5-2-calorimetry' },
    { t: R`OpenStax Chemistry 2e, §5.3 Enthalpy`, url: 'https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy' },
    { t: R`OpenStax Chemistry 2e, §16.2 Entropy`, url: 'https://openstax.org/books/chemistry-2e/pages/16-2-entropy' },
    { t: R`OpenStax Chemistry 2e, §16.3 The Second and Third Laws of Thermodynamics`, url: 'https://openstax.org/books/chemistry-2e/pages/16-3-the-second-and-third-laws-of-thermodynamics' },
    { t: R`OpenStax Chemistry 2e, §16.4 Free Energy`, url: 'https://openstax.org/books/chemistry-2e/pages/16-4-free-energy' },
    { t: R`Wikipedia: Born–Haber cycle`, url: 'https://en.wikipedia.org/wiki/Born%E2%80%93Haber_cycle' }
  ]
});
})();
