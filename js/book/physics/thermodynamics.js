// Book chapter: Thermodynamics. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figZeroth = D.svg(380, 140, [
  D.rect(30, 50, 90, 60, { color: 'o', fill: 'soft', w: 1.6, r: 6 }), D.text(75, 81, 'A', { bold: true }),
  D.rect(260, 50, 90, 60, { color: 'b', fill: 'soft', w: 1.6, r: 6 }), D.text(305, 81, 'B', { bold: true }),
  D.rect(145, 70, 90, 50, { color: 'g', fill: 'soft', w: 1.6, r: 6 }), D.text(190, 96, 'C', { bold: true }),
  D.arrow(122, 90, 143, 90, { color: 'm', w: 1.4, head: 6, both: true }), D.arrow(237, 90, 258, 90, { color: 'm', w: 1.4, head: 6, both: true }),
  D.text(190, 30, 'A and B are each in equilibrium with C', { size: 12, color: 'm' }), D.text(190, 136, 'so A and B are in equilibrium with each other', { size: 12, color: 'm' })
], 'Zeroth law of thermodynamics');

var figWorkPV = D.plot({
  w: 380, h: 220, x: [0, 5], y: [0, 5], xlabel: 'V', ylabel: 'P', xticks: [[1, 'V₁'], [4, 'V₂']], yticks: [],
  shade: [{ f: function (v) { return 4 / v; }, from: 1, to: 4, color: 'c' }],
  fns: [{ f: function (v) { return 4 / v; }, from: 0.85, to: 4.6 }],
  pts: [{ x: 1, y: 4, label: '1', pos: 'ne' }, { x: 4, y: 1, label: '2', pos: 'ne' }],
  segs: [{ x1: 2.3, y1: 1.739, x2: 2.6, y2: 1.538, color: 'c', arrow: true, w: 2 }],
  texts: [{ x: 2.5, y: 0.7, s: 'W = area under the curve', size: 12, color: 'c' }],
  label: 'Work done by a gas equals the area under its P-V curve'
});

var figJoule = D.svg(380, 210, [
  D.rect(120, 70, 140, 110, { color: 'b', fill: 'soft', w: 2, r: 4 }), D.text(190, 196, 'insulated water tank', { size: 12, color: 'b', math: false }),
  D.line(190, 30, 190, 160, { color: 'k', w: 2 }),
  D.line(160, 140, 220, 140, { color: 'o', w: 3 }), D.line(165, 120, 215, 120, { color: 'o', w: 3 }), D.line(170, 100, 210, 100, { color: 'o', w: 3 }),
  D.text(240, 110, 'paddles', { size: 12, color: 'o', anchor: 'start', math: false }),
  D.circle(190, 30, 10, { color: 'k', w: 1.6 }),
  D.line(180, 30, 60, 30, { color: 'm', w: 1.4 }), D.circle(60, 40, 10, { color: 'm', w: 1.4 }), D.line(50, 40, 50, 120, { color: 'm', w: 1.4 }),
  D.rect(36, 120, 28, 30, { color: 'r', fill: 'soft', w: 1.6 }), D.text(50, 136, 'm', { math: true, bold: true }),
  D.arrow(80, 120, 80, 160, { color: 'r', w: 1.8, head: 7, label: 'falls h', lx: 22, ly: 0, math: false, size: 12 }),
  D.text(300, 40, 'thermometer', { size: 12, color: 'g', math: false }), D.line(300, 52, 300, 130, { color: 'g', w: 3 }), D.circle(300, 134, 5, { color: 'g', fill: 'g' })
], "Joule's paddle-wheel experiment");

var figProcesses = D.plot({
  w: 420, h: 250, x: [0, 5], y: [0, 5], xlabel: 'V', ylabel: 'P', xticks: [], yticks: [],
  fns: [{ f: function (v) { return 4 / v; }, from: 0.8, to: 4.8, color: 'b', label: 'isothermal (PV = const)', lx: 3.0, ly: 1.75, math: false },
    { f: function (v) { return 4 / Math.pow(v, 1.4); }, from: 0.85, to: 4.8, color: 'r', label: 'adiabatic (PV^γ = const)', lx: 2.2, ly: 0.2, math: false }],
  segs: [{ x1: 1, y1: 4, x2: 4.5, y2: 4, color: 'g', w: 2.2 }, { x1: 1, y1: 4, x2: 1, y2: 0.4, color: 'o', w: 2.2 }],
  pts: [{ x: 1, y: 4, label: 'start', pos: 'nw', math: false, size: 12 }],
  texts: [{ x: 3.2, y: 4.3, s: 'isobaric (P const)', color: 'g', size: 12 }, { x: 1.1, y: 0.62, s: 'isochoric (V const)', color: 'o', size: 12, anchor: 'start' }],
  label: 'Four basic processes starting from the same state'
});

var figCycle = D.plot({
  w: 380, h: 220, x: [0, 4], y: [0, 4], xlabel: 'V (L)', ylabel: 'P (10⁵ Pa)', mathLabels: false, xticks: [1, 3], yticks: [1, 3],
  shade: [{ f: function () { return 3; }, g: function () { return 1; }, from: 1, to: 3, color: 'g' }],
  segs: [{ x1: 1, y1: 3, x2: 3, y2: 3, color: 'k', w: 2, arrow: true }, { x1: 3, y1: 3, x2: 3, y2: 1, color: 'k', w: 2, arrow: true }, { x1: 3, y1: 1, x2: 1, y2: 1, color: 'k', w: 2, arrow: true }, { x1: 1, y1: 1, x2: 1, y2: 3, color: 'k', w: 2, arrow: true }],
  texts: [{ x: 2, y: 2, s: 'net work = area enclosed', size: 12, color: 'g' }],
  label: 'A clockwise cycle on a P-V diagram'
});

function reservoirDiagram(engine) {
  var p = [];
  p.push(D.rect(110, 10, 160, 36, { color: 'r', fill: 'soft', w: 1.6, r: 6 }), D.text(190, 29, 'hot reservoir T₁', { size: 12, color: 'r' }));
  p.push(D.rect(110, 174, 160, 36, { color: 'b', fill: 'soft', w: 1.6, r: 6 }), D.text(190, 193, 'cold reservoir T₂', { size: 12, color: 'b' }));
  p.push(D.circle(190, 110, 34, { color: 'c', fill: 'soft', w: 2 }), D.text(190, 111, engine ? 'engine' : 'fridge', { size: 12, bold: true }));
  if (engine) {
    p.push(D.arrow(190, 46, 190, 74, { color: 'r', w: 2.4, label: 'Q₁', lx: 16, ly: 0 }), D.arrow(190, 146, 190, 172, { color: 'b', w: 2.4, label: 'Q₂', lx: 16, ly: 0 }), D.arrow(226, 110, 330, 110, { color: 'g', w: 2.6, label: 'W = Q₁ − Q₂', lx: 14, ly: -14, size: 12 }));
  } else {
    p.push(D.arrow(190, 74, 190, 46, { color: 'r', w: 2.4, label: 'Q₁', lx: 16, ly: 0 }), D.arrow(190, 172, 190, 146, { color: 'b', w: 2.4, label: 'Q₂', lx: 16, ly: 0 }), D.arrow(330, 110, 226, 110, { color: 'g', w: 2.6, label: 'W (work in)', lx: 14, ly: -14, size: 12, math: false }));
  }
  return D.svg(360, 215, p, engine ? 'Schematic of a heat engine' : 'Schematic of a refrigerator');
}
var figEngine = reservoirDiagram(true), figFridge = reservoirDiagram(false);

var figCarnot = (function () {
  var g = 2.2, Va = 1, Vb = 2, T1 = 4, T2 = 2;
  var Vc = Vb * Math.pow(T1 / T2, 1 / (g - 1)), Vd = Va * Math.pow(T1 / T2, 1 / (g - 1));
  function iso(T) { return function (v) { return T / v; }; }
  function adi(V0, T) { var K = (T / V0) * Math.pow(V0, g); return function (v) { return K / Math.pow(v, g); }; }
  return D.plot({
    w: 440, h: 260, x: [0, 4.3], y: [0, 4.6], xlabel: 'V', ylabel: 'P', xticks: [], yticks: [],
    fns: [{ f: iso(T1), from: Va, to: Vb, color: 'r', w: 2.6 }, { f: adi(Vb, T1), from: Vb, to: Vc, color: 'k', w: 2 },
      { f: iso(T2), from: Vd, to: Vc, color: 'b', w: 2.6 }, { f: adi(Va, T1), from: Va, to: Vd, color: 'k', w: 2 }],
    pts: [{ x: Va, y: T1 / Va, label: 'A', pos: 'nw' }, { x: Vb, y: T1 / Vb, label: 'B', pos: 'ne' }, { x: Vc, y: T2 / Vc, label: 'C', pos: 'se' }, { x: Vd, y: T2 / Vd, label: 'D', pos: 'sw' }],
    texts: [{ x: 1.6, y: 3.05, s: 'isothermal at T₁: Q₁ in', color: 'r', size: 12, anchor: 'start' }, { x: 1.9, y: 0.32, s: 'isothermal at T₂: Q₂ out', color: 'b', size: 12, anchor: 'start' },
      { x: 3.0, y: 1.35, s: 'adiabatic', size: 11, color: 'm', anchor: 'start' }, { x: 0.95, y: 1.9, s: 'adiabatic', size: 11, color: 'm', anchor: 'end' }],
    label: 'The Carnot cycle on a P-V diagram'
  });
})();

// ---------- chapter text ----------
JEE.book('physics', 'thermodynamics', {
  intro: [
    R`A car engine burns petrol and moves the car. A refrigerator uses electricity to pump heat out of its cold inside. A pressure cooker whistles. All of these are about converting between heat and work, the subject of <b>thermodynamics</b>.`,
    R`Thermodynamics deals with large-scale quantities (pressure, volume, temperature, internal energy) rather than individual molecules; the molecular picture is the subject of the next chapter, Kinetic Theory. Here you will learn the zeroth, first and second laws, the four basic processes for an ideal gas, specific heats of gases, heat engines and refrigerators, and the Carnot engine, the most efficient engine possible.`
  ],
  sections: [
    { h: R`Thermal equilibrium and the zeroth law`, t: [0], blocks: [
      R`A <b>thermodynamic system</b> is the part of the universe we study (a gas in a cylinder, say); everything else is the <b>surroundings</b>. Its state is described by a few <b>state variables</b>: pressure, volume, temperature, internal energy.`,
      R`Two systems in contact through a wall that lets heat pass are in <b>thermal equilibrium</b> when their state variables no longer change. At that point no net heat flows between them.`,
      { fig: figZeroth, cap: R`If A and B are each in thermal equilibrium with C, then A and B are in thermal equilibrium with each other.` },
      R`<b>Zeroth law of thermodynamics:</b> two systems that are each in thermal equilibrium with a third system are in thermal equilibrium with each other. This law (named after the first and second laws, though it is more basic) is what makes <b>temperature</b> meaningful: temperature is the property that is equal for systems in thermal equilibrium. It is also why a thermometer (system C) works.`,
      { check: { q: R`What quantity is the same for two bodies in thermal equilibrium?`, ans: R`Temperature.` } }
    ] },

    { h: R`Heat, work and internal energy`, t: [1], blocks: [
      R`The <b>internal energy</b> U of a system is the total energy of its molecules: their kinetic energy (random motion) plus the potential energy of their interactions. It does not include the kinetic energy of the system moving as a whole. U is a <b>state function</b>: it depends only on the present state, not on how the system got there. For an ideal gas, U depends only on temperature.`,
      R`There are two ways to change U: by <b>heat</b> Q (energy transfer because of a temperature difference) and by <b>work</b> W (energy transfer by mechanical means, such as pushing a piston). Heat and work are <b>not</b> state functions; they depend on the path.`,
      { derive: R`Work done by a gas`, steps: [
        R`A gas at pressure P pushes a piston of area A outward by a small distance dx. Work done by the gas \(dW = F\,dx = PA\,dx = P\,dV\).`,
        R`For a change from \(V_1\) to \(V_2\): \(W = \int_{V_1}^{V_2}P\,dV\), the area under the P–V curve.`,
        R`If the gas expands, W > 0 (work done by the gas); if it is compressed, W < 0 (work done on the gas).`
      ] },
      { fig: figWorkPV, cap: R`The work done by a gas expanding from state 1 to state 2 is the area under its P–V curve. A different path between the same states encloses a different area, so the work is different.` },
      { h3: R`Equivalence of heat and work` },
      R`Before the 1840s, heat was thought to be a fluid ("caloric"). James Joule showed that the same temperature rise could be produced by doing work instead of heating. In his experiment, falling weights turned paddles inside an insulated tank of water, and the water warmed up by an amount proportional to the work done.`,
      { fig: figJoule, cap: R`Joule's experiment: the work done by the falling mass \(mgh\) is converted into internal energy of the water, which warms up.` },
      R`He found that 4.186 J of work always produces the same effect as 1 calorie of heat. This number, \(J = 4.186\) J/cal, is called the <b>mechanical equivalent of heat</b>. Today we measure heat directly in joules, so heat and work are simply two ways of transferring energy.`,
      { ex: { q: R`Water at the top of a 50 m waterfall lands in a pool. If all its gravitational potential energy turns into internal energy of the water, by how much does its temperature rise? (Specific heat of water = 4186 J kg⁻¹ K⁻¹)`,
        steps: [R`Per kilogram: \(gh = c\,\Delta T\).`, R`\(\Delta T = \dfrac{9.8\times50}{4186}\).`], ans: R`≈ 0.12 K: tiny, which is why the equivalence was hard to discover` } },
      { ex: { q: R`A gas at a constant pressure of 1 × 10⁵ Pa expands from 1 L to 3 L. How much work does it do?`,
        steps: [R`\(W = P\Delta V = 10^5\times(3 - 1)\times10^{-3}\).`], ans: R`200 J` } },
      { check: { q: R`Is the work done in going from state 1 to state 2 the same for every path?`, ans: R`No. Work depends on the path (the area under the curve); only ΔU is path-independent.` } }
    ] },

    { h: R`The first law of thermodynamics`, t: [2], blocks: [
      R`<b>First law:</b> the heat supplied to a system is used partly to increase its internal energy and partly to do work on the surroundings: \[\Delta Q = \Delta U + \Delta W\] This is the law of conservation of energy applied to heat and work. Here ΔQ is heat <b>given to</b> the system and ΔW is work done <b>by</b> the system.`,
      { table: { head: [R`Quantity`, R`Positive when`, R`Negative when`], rows: [
        [R`ΔQ`, R`heat is added to the system`, R`heat leaves the system`], [R`ΔW`, R`the system does work (expands)`, R`work is done on it (compressed)`], [R`ΔU`, R`the temperature rises (ideal gas)`, R`the temperature falls`]] } },
      { ex: { q: R`A gas absorbs 500 J of heat and does 200 J of work. Find the change in its internal energy.`,
        steps: [R`\(\Delta U = \Delta Q - \Delta W = 500 - 200\).`], ans: R`+300 J (it gets hotter)` } },
      { mistake: R`Mixing sign conventions. Chemistry books often write \(\Delta U = q + w\) with w = work done <b>on</b> the system. Both are the same law; just be consistent within a problem.` },
      { check: { q: R`A gas is compressed with no heat exchange. What happens to its internal energy?`, ans: R`ΔQ = 0 and ΔW < 0, so ΔU = −ΔW > 0: it heats up (as in a bicycle pump).` } }
    ] },

    { h: R`Specific heats of a gas`, t: [2], blocks: [
      R`Heating a gas at constant volume needs less heat than heating it at constant pressure, because at constant pressure the gas also expands and does work. So a gas has two molar specific heats: \(C_v\) (constant volume) and \(C_p\) (constant pressure).`,
      { derive: R`Mayer's relation: \(C_p - C_v = R\)`, steps: [
        R`At constant volume, ΔW = 0, so the heat \(nC_v\Delta T\) all goes into internal energy: \(\Delta U = nC_v\Delta T\). This holds for any process of an ideal gas, since U depends only on T.`,
        R`At constant pressure: \(nC_p\Delta T = \Delta U + P\Delta V = nC_v\Delta T + nR\Delta T\) (using PV = nRT).`,
        R`Dividing by \(n\Delta T\): \(C_p - C_v = R\). The ratio \(\gamma = C_p/C_v\) is always greater than 1.`
      ] },
      { table: { head: [R`Gas`, R`\(C_v\)`, R`\(C_p\)`, R`\(\gamma\)`], rows: [
        [R`Monatomic (He, Ar)`, R`\(\frac32R\)`, R`\(\frac52R\)`, R`5/3 ≈ 1.67`], [R`Diatomic (N₂, O₂), room temperature`, R`\(\frac52R\)`, R`\(\frac72R\)`, R`7/5 = 1.4`], [R`Polyatomic, non-linear (rigid)`, R`3R`, R`4R`, R`4/3 ≈ 1.33`]] } },
      R`These values follow from the law of equipartition of energy (next chapter): each degree of freedom contributes \(\frac12R\) to \(C_v\).`,
      { adv: R`<b>Mixtures of gases.</b> For \(n_1\) moles of one gas and \(n_2\) of another, \(C_v = \dfrac{n_1C_{v1} + n_2C_{v2}}{n_1 + n_2}\) (and similarly \(C_p\)). One mole of a monatomic gas mixed with one mole of a diatomic gas has \(C_v = 2R\), \(C_p = 3R\) and γ = 1.5.` },
      { check: { q: R`Why is \(C_p\) greater than \(C_v\)?`, ans: R`At constant pressure the gas expands and does work, so extra heat is needed for the same temperature rise.` } }
    ] },

    { h: R`Thermodynamic processes`, t: [3], blocks: [
      R`A process is the path by which a system changes from one state to another. For a <b>quasi-static</b> process the change is so slow that the system is always nearly in equilibrium, so P, V and T are defined at every stage. Four special processes are important:`,
      { fig: figProcesses, cap: R`Four processes starting from the same state. The adiabatic curve is steeper than the isothermal one, because γ > 1.` },
      { table: { head: [R`Process`, R`Constant`, R`Work done by the gas`, R`First law`], rows: [
        [R`Isothermal`, R`T (so U)`, R`\(nRT\ln\dfrac{V_2}{V_1}\)`, R`ΔU = 0, so Q = W`],
        [R`Adiabatic`, R`no heat flow (Q = 0)`, R`\(\dfrac{P_1V_1 - P_2V_2}{\gamma - 1} = \dfrac{nR(T_1 - T_2)}{\gamma - 1}\)`, R`ΔU = −W`],
        [R`Isobaric`, R`P`, R`\(P(V_2 - V_1) = nR\Delta T\)`, R`\(Q = nC_p\Delta T\)`],
        [R`Isochoric`, R`V`, R`0`, R`\(Q = \Delta U = nC_v\Delta T\)`]] } },
      { h3: R`Isothermal process` },
      R`The gas is kept in good thermal contact with a large reservoir and changes slowly, so T stays constant: PV = constant (Boyle's law). All heat supplied is converted into work.`,
      { derive: R`Work in an isothermal process`, steps: [
        R`\(W = \int_{V_1}^{V_2}P\,dV\) with \(P = \dfrac{nRT}{V}\).`,
        R`\(W = nRT\int_{V_1}^{V_2}\dfrac{dV}{V} = nRT\ln\dfrac{V_2}{V_1}\).`
      ] },
      { ex: { q: R`2 mol of an ideal gas expand isothermally at 300 K to twice their volume. Find the work done and the heat absorbed.`,
        steps: [R`\(W = 2\times8.314\times300\times\ln2\).`, R`ΔU = 0, so Q = W.`], ans: R`W = Q ≈ 3458 J` } },
      { h3: R`Adiabatic process` },
      R`No heat enters or leaves (an insulated cylinder, or a change so fast that heat has no time to flow, like a bicycle pump or the compression stroke of a diesel engine). Then \[PV^\gamma = \text{constant},\quad TV^{\gamma - 1} = \text{constant},\quad P^{1 - \gamma}T^\gamma = \text{constant}\]`,
      { derive: R`Deriving \(PV^\gamma\) = constant`, steps: [
        R`With dQ = 0: \(0 = nC_v\,dT + P\,dV\).`,
        R`From PV = nRT: \(P\,dV + V\,dP = nR\,dT\), so \(n\,dT = \dfrac{P\,dV + V\,dP}{R}\).`,
        R`Substituting: \(C_v(P\,dV + V\,dP) + RP\,dV = 0\), so \((C_v + R)P\,dV + C_vV\,dP = 0\), i.e. \(\gamma\dfrac{dV}{V} + \dfrac{dP}{P} = 0\).`,
        R`Integrating: \(\gamma\ln V + \ln P\) = constant, so \(PV^\gamma\) = constant.`
      ] },
      { ex: { q: R`Air (γ = 1.4) at 300 K is compressed adiabatically to one-eighth of its volume, as in a diesel engine. Find its final temperature and the pressure ratio.`,
        steps: [R`\(T_2 = T_1\left(\dfrac{V_1}{V_2}\right)^{\gamma - 1} = 300\times8^{0.4}\).`, R`\(\dfrac{P_2}{P_1} = 8^{1.4}\).`], ans: R`≈ 689 K (hot enough to ignite diesel); pressure ≈ 18.4 times larger` } },
      { h3: R`Isobaric and isochoric processes` },
      { ex: { q: R`2 mol of a monatomic gas are heated from 300 K to 400 K (a) at constant volume (b) at constant pressure. Find the heat needed in each case and the work done in (b).`,
        steps: [R`(a) \(Q = nC_v\Delta T = 2\times\frac32\times8.314\times100\).`, R`(b) \(Q = nC_p\Delta T = 2\times\frac52\times8.314\times100\); \(W = nR\Delta T = 2\times8.314\times100\).`], ans: R`(a) ≈ 2494 J (b) ≈ 4157 J, of which ≈ 1663 J is work` } },
      { h3: R`Free expansion` },
      R`If a gas in an insulated container suddenly rushes into an evacuated space (a membrane is burst), it pushes against nothing, so W = 0; it is insulated, so Q = 0. Then ΔU = 0, and for an ideal gas the temperature does not change. Free expansion is not quasi-static (P is not defined during it), so it cannot be drawn as a curve on a P–V diagram.`,
      { adv: R`<b>Polytropic processes.</b> Many processes follow \(PV^x\) = constant for some number x: x = 0 (isobaric), x = 1 (isothermal), x = γ (adiabatic), x → ∞ (isochoric). The work done is \(W = \dfrac{P_1V_1 - P_2V_2}{x - 1} = \dfrac{nR(T_1 - T_2)}{x - 1}\), and the molar heat capacity along the process is \[C = C_v + \frac{R}{1 - x}\] For example, a monatomic gas taken along \(PV^2\) = constant has \(C = \frac32R - R = \frac12R\).` },
      { tip: R`The slope of an adiabatic curve on a P–V graph is γ times the slope of the isothermal curve at the same point (\(dP/dV = -\gamma P/V\) versus \(-P/V\)). So an adiabatic expansion does less work than an isothermal one between the same volumes, and an adiabatic compression needs more.` },
      { check: { q: R`In which process does all the heat supplied go into work?`, ans: R`Isothermal (for an ideal gas, ΔU = 0).` } }
    ] },

    { h: R`Bulk modulus of a gas`, t: [3], blocks: [
      R`A gas resists compression, so it has a bulk modulus \(B = -\dfrac{dP}{dV/V}\). Its value depends on how it is compressed:`,
      { points: [R`<b>Isothermal:</b> from PV = constant, \(P\,dV + V\,dP = 0\), so \(B_{iso} = P\).`, R`<b>Adiabatic:</b> from \(PV^\gamma\) = constant, \(\gamma P\,dV + V\,dP = 0\), so \(B_{adi} = \gamma P\).`] },
      R`This explains the speed of sound in a gas, \(v = \sqrt{B/\rho}\). Newton assumed the compressions in a sound wave were isothermal and got \(\sqrt{P/\rho} \approx 280\) m/s for air, too low. Laplace realised they are adiabatic (too fast for heat to flow), giving \(\sqrt{\gamma P/\rho} \approx 331\) m/s, matching experiment.`,
      { check: { q: R`Which is larger for a gas: the isothermal or the adiabatic bulk modulus?`, ans: R`Adiabatic, by a factor γ.` } }
    ] },

    { h: R`Cyclic processes`, t: [3], blocks: [
      R`In a <b>cyclic process</b>, the system returns to its initial state. Since U is a state function, \(\Delta U = 0\) for a complete cycle, so the net heat absorbed equals the net work done: \(Q_{net} = W_{net}\).`,
      { fig: figCycle, cap: R`On a P–V diagram, the net work done in one cycle is the area enclosed by the loop. It is positive (work done by the gas) when the cycle runs clockwise.` },
      { ex: { q: R`A gas is taken round the rectangular cycle of the figure, between 1 × 10⁵ Pa and 3 × 10⁵ Pa and between 1 L and 3 L, clockwise. Find the net work done and the net heat absorbed per cycle.`,
        steps: [R`Area = (3 − 1) × 10⁵ Pa × (3 − 1) × 10⁻³ m³.`, R`ΔU = 0 for a cycle, so Q = W.`], ans: R`400 J of work; 400 J of heat absorbed` } },
      { check: { q: R`If the same cycle is run anticlockwise, what is the sign of the net work done by the gas?`, ans: R`Negative: work is done on the gas (this is how a refrigerator runs).` } }
    ] },

    { h: R`Heat engines`, t: [4], blocks: [
      R`A <b>heat engine</b> repeatedly takes heat \(Q_1\) from a hot reservoir (burning fuel, steam), converts part of it into work W, and rejects the rest \(Q_2\) to a cold reservoir (the atmosphere, a river). It works in a cycle, so \(W = Q_1 - Q_2\).`,
      { fig: figEngine, cap: R`A heat engine: heat \(Q_1\) in from the hot reservoir, work W out, waste heat \(Q_2\) to the cold reservoir.` },
      R`Its <b>efficiency</b> is the fraction of the heat input turned into work: \[\eta = \frac{W}{Q_1} = 1 - \frac{Q_2}{Q_1}\] Real engines are far from 100% efficient: a petrol engine manages about 25–30%, a diesel engine about 35–40%.`,
      { ex: { q: R`An engine absorbs 1000 J of heat per cycle and rejects 600 J. Find the work done per cycle and the efficiency.`,
        steps: [R`W = 1000 − 600 = 400 J.`, R`η = 400/1000.`], ans: R`400 J; 40%` } },
      { check: { q: R`Can a heat engine convert all the heat it absorbs into work?`, ans: R`No. The second law says some heat must always be rejected to a colder reservoir.` } }
    ] },

    { h: R`Refrigerators and heat pumps`, t: [4], blocks: [
      R`A <b>refrigerator</b> is a heat engine run backwards. Using work W (from the electric motor of its compressor), it extracts heat \(Q_2\) from the cold inside and dumps heat \(Q_1 = Q_2 + W\) into the warmer room (which is why the back of a fridge is warm).`,
      { fig: figFridge, cap: R`A refrigerator: work W is used to move heat \(Q_2\) from the cold reservoir to the hot one.` },
      R`Its performance is measured by the <b>coefficient of performance</b> \[\alpha = \frac{Q_2}{W} = \frac{Q_2}{Q_1 - Q_2}\] which can be larger than 1. A <b>heat pump</b> uses the same machine to heat a house, pumping heat from the cold outside air to the warm inside.`,
      { ex: { q: R`A refrigerator removes 300 J of heat from its inside for every 100 J of electrical work. Find its coefficient of performance and the heat it releases to the room.`,
        steps: [R`α = 300/100 = 3.`, R`\(Q_1 = Q_2 + W = 300 + 100\).`], ans: R`3; 400 J` } },
      { check: { q: R`Can you cool a closed room by leaving the refrigerator door open?`, ans: R`No. The fridge releases more heat (\(Q_2 + W\)) than it removes, so the room actually gets warmer.` } }
    ] },

    { h: R`The second law of thermodynamics`, t: [4], blocks: [
      R`The first law says energy is conserved, but it does not say which way processes go. Heat flows from hot to cold by itself, never the reverse; a moving car stops by friction, but a stopped car never cools its brakes to start moving. The <b>second law</b> captures this one-way nature of nature. It has two equivalent statements:`,
      { points: [R`<b>Kelvin–Planck statement:</b> no process is possible whose sole result is the absorption of heat from a reservoir and its complete conversion into work. (No heat engine can be 100% efficient.)`, R`<b>Clausius statement:</b> no process is possible whose sole result is the transfer of heat from a colder body to a hotter body. (A refrigerator needs work.)`] },
      R`If either statement were false, the other could be broken too, so they are equivalent. The second law sets the maximum possible efficiency of any engine, which we find with the Carnot engine.`,
      { check: { q: R`Does a refrigerator violate the Clausius statement?`, ans: R`No. It moves heat from cold to hot only because work is done on it; that is not the "sole result".` } }
    ] },

    { h: R`Reversible and irreversible processes`, t: [5], blocks: [
      R`A process is <b>reversible</b> if it can be run backwards so that both the system and its surroundings return exactly to their original states, with no other change anywhere. This needs the process to be quasi-static (always in equilibrium) and free of dissipative effects such as friction, viscosity and electrical resistance.`,
      R`All real processes are <b>irreversible</b>: heat flowing across a finite temperature difference, free expansion of a gas into a vacuum, mixing of two gases, friction. A reversible process is an ideal limit, like a frictionless surface, but it is extremely useful because reversible engines are the most efficient possible.`,
      { check: { q: R`Is the free expansion of a gas into a vacuum reversible?`, ans: R`No. The gas never collects itself back into one half on its own.` } }
    ] },

    { h: R`The Carnot engine`, t: [6], blocks: [
      R`In 1824 Sadi Carnot imagined an ideal reversible engine working between two reservoirs at temperatures \(T_1\) (hot) and \(T_2\) (cold). Its working substance (an ideal gas) goes through a cycle of four reversible steps:`,
      { fig: figCarnot, cap: R`The Carnot cycle: isothermal expansion A→B at \(T_1\) (heat \(Q_1\) absorbed), adiabatic expansion B→C (cools to \(T_2\)), isothermal compression C→D at \(T_2\) (heat \(Q_2\) rejected), and adiabatic compression D→A back to \(T_1\). (Not to scale: the adiabatic curves are drawn steeper for clarity.)` },
      { derive: R`Efficiency of a Carnot engine`, steps: [
        R`Isothermal steps: \(Q_1 = nRT_1\ln\dfrac{V_B}{V_A}\) and \(Q_2 = nRT_2\ln\dfrac{V_C}{V_D}\).`,
        R`Adiabatic steps: \(T_1V_B^{\gamma - 1} = T_2V_C^{\gamma - 1}\) and \(T_1V_A^{\gamma - 1} = T_2V_D^{\gamma - 1}\). Dividing, \(\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}\).`,
        R`So \(\dfrac{Q_2}{Q_1} = \dfrac{T_2}{T_1}\) and the efficiency is \(\eta = 1 - \dfrac{Q_2}{Q_1} = 1 - \dfrac{T_2}{T_1}\).`
      ] },
      { points: [R`<b>Carnot's theorem:</b> no engine working between two given temperatures can be more efficient than a reversible (Carnot) engine, and all reversible engines between those temperatures have the same efficiency, whatever the working substance.`, R`The efficiency depends only on the reservoir temperatures (in kelvin). It could be 100% only if \(T_2 = 0\) K, which is impossible.`, R`For a Carnot refrigerator, the coefficient of performance is \(\dfrac{T_2}{T_1 - T_2}\).`] },
      { ex: { q: R`A Carnot engine works between 500 K and 300 K. Find its efficiency. If it absorbs 1000 J per cycle, how much work does it do?`,
        steps: [R`\(\eta = 1 - \dfrac{300}{500} = 0.4\).`, R`W = 0.4 × 1000.`], ans: R`40%; 400 J` } },
      { tip: R`To increase the efficiency of a Carnot engine, lowering \(T_2\) by ΔT helps more than raising \(T_1\) by the same ΔT (since \(T_2 < T_1\)). Always use kelvin temperatures in these formulas.` },
      { check: { q: R`An inventor claims an engine working between 400 K and 300 K with 30% efficiency. Is it possible?`, ans: R`No: the Carnot limit is 1 − 300/400 = 25%.` } }
    ] }
  ],
  summary: [
    R`Zeroth law: thermal equilibrium is transitive; it defines temperature.`,
    R`Internal energy U is a state function (for an ideal gas, a function of T only); heat and work depend on the path. \(W = \int P\,dV\) = area under the P–V curve.`,
    R`First law: \(\Delta Q = \Delta U + \Delta W\) (W done by the system).`,
    R`\(\Delta U = nC_v\Delta T\) for any process of an ideal gas; \(C_p - C_v = R\); γ = 5/3 (monatomic), 7/5 (diatomic), 4/3 (polyatomic).`,
    R`Isothermal: ΔU = 0, \(W = nRT\ln(V_2/V_1)\). Adiabatic: Q = 0, \(PV^\gamma\) and \(TV^{\gamma - 1}\) constant, \(W = \frac{nR(T_1 - T_2)}{\gamma - 1}\).`,
    R`Isobaric: \(W = P\Delta V\), \(Q = nC_p\Delta T\). Isochoric: W = 0, \(Q = nC_v\Delta T\).`,
    R`Bulk modulus of a gas: P (isothermal), γP (adiabatic); Laplace's correction for the speed of sound.`,
    R`Cycle: ΔU = 0, net work = area enclosed (clockwise positive).`,
    R`Engine efficiency \(\eta = W/Q_1 = 1 - Q_2/Q_1\); refrigerator COP \(\alpha = Q_2/W\).`,
    R`Second law (Kelvin–Planck and Clausius): no 100% efficient engine; heat does not flow from cold to hot on its own.`,
    R`Real processes are irreversible; reversible ones are quasi-static and frictionless.`,
    R`Carnot engine: \(\eta = 1 - T_2/T_1\), the maximum for any engine between those temperatures; Carnot fridge COP \(T_2/(T_1 - T_2)\).`
  ],
  refs: [
    { t: R`OpenStax University Physics Vol. 2, §3.2 Work, Heat, and Internal Energy`, url: 'https://openstax.org/books/university-physics-volume-2/pages/3-2-work-heat-and-internal-energy' },
    { t: R`OpenStax University Physics Vol. 2, §3.3 First Law of Thermodynamics`, url: 'https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics' },
    { t: R`OpenStax University Physics Vol. 2, §3.5 Heat Capacities of an Ideal Gas`, url: 'https://openstax.org/books/university-physics-volume-2/pages/3-5-heat-capacities-of-an-ideal-gas' },
    { t: R`OpenStax University Physics Vol. 2, §3.6 Adiabatic Processes for an Ideal Gas`, url: 'https://openstax.org/books/university-physics-volume-2/pages/3-6-adiabatic-processes-for-an-ideal-gas' },
    { t: R`OpenStax University Physics Vol. 2, §4.2 Heat Engines`, url: 'https://openstax.org/books/university-physics-volume-2/pages/4-2-heat-engines' },
    { t: R`OpenStax University Physics Vol. 2, §4.3 Refrigerators and Heat Pumps`, url: 'https://openstax.org/books/university-physics-volume-2/pages/4-3-refrigerators-and-heat-pumps' },
    { t: R`OpenStax University Physics Vol. 2, §4.5 The Carnot Cycle`, url: 'https://openstax.org/books/university-physics-volume-2/pages/4-5-the-carnot-cycle' },
    { t: R`Wikipedia: Carnot cycle`, url: 'https://en.wikipedia.org/wiki/Carnot_cycle' }
  ]
});
})();
