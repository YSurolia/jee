// Book chapter: d- and f-Block Elements. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function mol(w, h, o, label) { return D.svg(w, h, [D.mol(o)].concat(o.more || []), label); }
var EL = ['Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn'];
var xt = EL.map(function (s, i) { return [i + 1, s]; });
function series(vals, color) {
  var segs = [], pts = [];
  vals.forEach(function (v, i) { if (isNaN(v)) return; pts.push({ x: i + 1, y: v, color: color }); if (i && !isNaN(vals[i - 1])) segs.push({ x1: i, y1: vals[i - 1], x2: i + 1, y2: v, color: color }); });
  return { segs: segs, pts: pts };
}
function trend(o) {
  var segs = [], pts = [];
  o.series.forEach(function (s) { var r = series(s[0], s[1]); segs = segs.concat(r.segs); pts = pts.concat(r.pts); });
  var tx = (o.texts || []).slice(); if (o.bottom !== undefined) EL.forEach(function (e, i) { tx.push({ x: i + 1, y: o.bottom, s: e, color: 'm', size: 12 }); });
  return D.plot({ w: o.w || 400, h: o.h || 230, x: [0.3, 10.8], y: o.y, noOrigin: true, xticks: o.bottom !== undefined ? EL.map(function (e, i) { return [i + 1, '']; }) : xt, yticks: o.yticks, ylabel: o.ylabel, mathLabels: false, segs: segs, pts: pts, texts: tx, pad: [20, 20, 26, 46], label: o.label });
}

// ---------- figures ----------
var figMP = trend({ y: [400, 2400], yticks: [[800, '800'], [1600, '1600'], [2400, '2400']], ylabel: 'melting point / K',
  series: [[[1814, 1941, 2183, 2180, 1519, 1811, 1768, 1728, 1358, 693], 'r']], texts: [{ x: 5.4, y: 1350, s: 'Mn (half-filled d⁵)', color: 'm', size: 10 }, { x: 9.1, y: 700, s: 'Zn (d¹⁰)', color: 'm', size: 10, anchor: 'end' }], label: 'Melting points of the 3d metals' });
var figRadii = trend({ y: [110, 170], yticks: [[120, '120'], [140, '140'], [160, '160']], ylabel: 'metallic radius / pm',
  series: [[[164, 147, 135, 129, 137, 126, 125, 125, 128, 137], 'b']], label: 'Metallic radii of the 3d metals' });
var figIE = trend({ y: [400, 2100], yticks: [[600, '600'], [1200, '1200'], [1800, '1800']], ylabel: 'IE / kJ mol⁻¹',
  series: [[[631, 656, 650, 653, 717, 762, 758, 736, 745, 906], 'b'], [[1235, 1309, 1414, 1592, 1509, 1561, 1644, 1752, 1958, 1734], 'r']],
  texts: [{ x: 2.2, y: 830, s: 'IE₁', color: 'b', size: 11 }, { x: 2.2, y: 1450, s: 'IE₂', color: 'r', size: 11 }, { x: 4.4, y: 1720, s: 'Cr⁺ (d⁵)', color: 'm', size: 9 }, { x: 9, y: 2040, s: 'Cu⁺ (d¹⁰)', color: 'm', size: 9 }],
  label: 'First and second ionisation enthalpies of the 3d metals' });
var figE = trend({ bottom: -1.88, y: [-1.95, 0.6], yticks: [[-1.5, '−1.5'], [-1, '−1.0'], [-0.5, '−0.5'], [0.5, '+0.5']], ylabel: 'E°(M²⁺/M) / V',
  series: [[[NaN, -1.63, -1.18, -0.90, -1.18, -0.44, -0.28, -0.25, 0.34, -0.76], 'g']], texts: [{ x: 9, y: 0.48, s: 'Cu: positive', color: 'm', size: 10 }, { x: 5, y: -1.45, s: 'Mn (d⁵)', color: 'm', size: 10 }, { x: 10, y: -1.05, s: 'Zn (d¹⁰)', color: 'm', size: 10 }],
  label: 'Standard electrode potentials M2+/M' });

var aq = [['Ti³⁺', 'purple', '#7b3fa0'], ['V³⁺', 'green', '#2e8b57'], ['Cr³⁺', 'violet', '#8a4fbf'], ['Mn²⁺', 'pale pink', '#f2b8c6'], ['Fe²⁺', 'pale green', '#b5dfa2'], ['Fe³⁺', 'yellow', '#e3be3b'], ['Co²⁺', 'pink', '#e57fa3'], ['Ni²⁺', 'green', '#3f9f4d'], ['Cu²⁺', 'blue', '#2f7fd1'], ['Zn²⁺', 'colourless', 'none']];
var figColour = D.svg(500, 120, aq.map(function (a, i) {
  var x = 28 + i * 49;
  return '<rect x="' + (x - 13) + '" y="15" width="26" height="55" rx="12" fill="' + a[2] + '" fill-opacity="0.85" stroke="currentColor" stroke-opacity="0.4"/>' +
    D.text(x, 86, a[0], { size: 11, math: false, bold: true }) + lab(x, 102, a[1], 'm', 8);
}), 'Colours of hydrated 3d ions');

var figDD = D.svg(380, 170, [
  D.line(40, 120, 120, 120, { w: 2.4 }), lab(80, 138, 'five d orbitals (free ion)', 'm', 9),
  D.line(170, 140, 220, 140, { color: 'b', w: 2.4 }), D.line(225, 140, 275, 140, { color: 'b', w: 2.4 }), D.line(280, 140, 330, 140, { color: 'b', w: 2.4 }), lab(355, 140, 't₂g', 'b', 11, { anchor: 'start' }),
  D.line(195, 60, 245, 60, { color: 'r', w: 2.4 }), D.line(255, 60, 305, 60, { color: 'r', w: 2.4 }), lab(355, 60, 'e_g', 'r', 11, { anchor: 'start' }),
  D.line(120, 120, 170, 140, { color: 'm', w: 1, dash: '3 3' }), D.line(120, 120, 195, 60, { color: 'm', w: 1, dash: '3 3' }),
  D.arrow(195, 132, 220, 70, { color: 'o', w: 2 }), lab(150, 90, 'absorbs visible', 'o', 9), lab(150, 102, 'light (Δ₀)', 'o', 9),
  D.text(197, 136, '↑', { size: 14, math: false, color: 'k' }), lab(250, 20, 'ligands split the d orbitals', 'm', 10)
], 'd-d transition');

function oxo(cx, cy, s, c, extra) {
  return { atoms: [{ x: cx, y: cy, s: s, color: c }, { x: cx, y: cy - 50, s: 'O', color: 'r' }, { x: cx - 45, y: cy + 25, s: 'O', color: 'r' }, { x: cx + 45, y: cy + 32, s: 'O', color: 'r' }, { x: cx + 35, y: cy + 5, s: 'O', color: 'r' }],
    bonds: [[0, 1, 2], [0, 2, 1.5], [0, 3, 'w'], [0, 4, 'h']], r: 11, more: extra };
}
var figCrMn = D.row([
  [mol(140, 130, oxo(70, 70, 'Cr', 'o', [lab(70, 122, 'tetrahedral', 'm', 9)]), 'chromate'), R`CrO₄²⁻ (yellow)`],
  [mol(250, 130, { atoms: [{ x: 70, y: 70, s: 'Cr', color: 'o' }, { x: 125, y: 95, s: 'O', color: 'p' }, { x: 180, y: 70, s: 'Cr', color: 'o' }, { x: 70, y: 22, s: 'O', color: 'r' }, { x: 22, y: 85, s: 'O', color: 'r' }, { x: 60, y: 118, s: 'O', color: 'r' }, { x: 180, y: 22, s: 'O', color: 'r' }, { x: 228, y: 85, s: 'O', color: 'r' }, { x: 190, y: 118, s: 'O', color: 'r' }],
    bonds: [[0, 1], [1, 2], [0, 3, 2], [0, 4, 1.5], [0, 5, 'w'], [2, 6, 2], [2, 7, 1.5], [2, 8, 'w']], r: 11, more: [lab(125, 120, 'Cr–O–Cr 126°', 'p', 9)] }, 'dichromate'), R`Cr₂O₇²⁻ (orange): two tetrahedra sharing one O`],
  [mol(140, 130, oxo(70, 70, 'Mn', 'p', [lab(70, 122, 'tetrahedral', 'm', 9)]), 'permanganate'), R`MnO₄⁻ (purple)`]
]);

var LN = ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'];
var lnR = [103, 102, 99, 98.3, 97, 95.8, 94.7, 93.8, 92.3, 91.2, 90.1, 89, 88, 86.8, 86.1];
var lnSegs = [], lnPts = [];
lnR.forEach(function (v, i) { lnPts.push({ x: i + 1, y: v, color: 'p' }); if (i) lnSegs.push({ x1: i, y1: lnR[i - 1], x2: i + 1, y2: v, color: 'p' }); });
var figLn = D.plot({ w: 460, h: 230, x: [0.3, 15.8], y: [84, 105], noOrigin: true, xticks: LN.map(function (s, i) { return [i + 1, s]; }), yticks: [[86, '86'], [94, '94'], [102, '102']], ylabel: 'Ln³⁺ radius / pm', mathLabels: false,
  segs: lnSegs, pts: lnPts, pad: [20, 16, 26, 40], label: 'Lanthanoid contraction' });

// ---------- chapter text ----------
JEE.book('chemistry', 'd-f-block', {
  intro: [
    R`The <b>d-block</b> occupies the middle of the periodic table (groups 3 to 12), where the d orbitals of the penultimate shell are being filled. The <b>f-block</b>, placed separately at the bottom, contains the <b>lanthanoids</b> (4f) and <b>actinoids</b> (5f). These elements include iron, copper, silver, gold, platinum and uranium, the metals on which civilisation has been built.`,
    R`Their partly filled d (or f) orbitals give them variable oxidation states, coloured ions, magnetism, catalytic power and a strong tendency to form complexes. This chapter explains these properties, the important compounds K₂Cr₂O₇ and KMnO₄, and the lanthanoids and actinoids.`
  ],
  sections: [
    { h: R`Position and electronic configuration`, t: [0], blocks: [
      R`The d-block has four series: 3d (Sc to Zn), 4d (Y to Cd), 5d (La, Hf to Hg) and 6d (Ac, Rf to Cn). The general configuration is <b>(n−1)d¹⁻¹⁰ ns¹⁻²</b>. A <b>transition element</b> is one that has an incompletely filled d subshell in its ground state <b>or in any of its common oxidation states</b>. So Zn, Cd and Hg (d¹⁰ in the atom and in their ions) are not regarded as transition elements, while Cu (Cu²⁺ is d⁹) is.`,
      { table: { head: [R`Element`, R`Sc`, R`Ti`, R`V`, R`Cr`, R`Mn`, R`Fe`, R`Co`, R`Ni`, R`Cu`, R`Zn`], rows: [
        [R`Z`, R`21`, R`22`, R`23`, R`24`, R`25`, R`26`, R`27`, R`28`, R`29`, R`30`],
        [R`4s`, R`2`, R`2`, R`2`, R`1`, R`2`, R`2`, R`2`, R`2`, R`1`, R`2`],
        [R`3d`, R`1`, R`2`, R`3`, R`5`, R`5`, R`6`, R`7`, R`8`, R`10`, R`10`]] } },
      R`Cr (3d⁵4s¹) and Cu (3d¹⁰4s¹) are exceptions because half-filled and completely filled d subshells are extra stable (exchange energy and symmetry). The 3d and 4s energies are very close, which is why such exceptions occur. When the atoms form ions, the <b>4s electrons are lost first</b>: Fe (3d⁶4s²) → Fe²⁺ (3d⁶) → Fe³⁺ (3d⁵).`,
      { mistake: R`Writing Fe²⁺ as 3d⁴4s². Electrons leave the 4s orbital first, so Fe²⁺ is 3d⁶.` },
      { check: { q: R`Why is zinc not considered a transition element?`, ans: R`It has a completely filled 3d¹⁰ subshell both in the atom and in its only ion Zn²⁺.` } }
    ] },

    { h: R`Occurrence and general characteristics`, t: [1], blocks: [
      R`Transition metals occur mostly as oxides, sulphides and carbonates (iron as haematite and magnetite, copper as copper pyrites, titanium as ilmenite and rutile). Iron is the fourth most abundant element in the Earth's crust. All transition elements are metals, and they share these characteristics:`,
      { points: [R`They are hard, strong, lustrous metals with high melting and boiling points and high densities (except Zn, Cd, Hg).`, R`They are good conductors of heat and electricity.`, R`They show variable oxidation states.`, R`Their compounds are often coloured and paramagnetic.`, R`They and their compounds are good catalysts.`, R`They form complexes, interstitial compounds and alloys.`] },
      { check: { q: R`Name three properties typical of transition metals.`, ans: R`Variable oxidation states, coloured compounds, catalytic activity (also paramagnetism, complex formation).` } }
    ] },

    { h: R`Physical properties and metallic character`, t: [2], blocks: [
      R`Transition metals have typical metallic structures (bcc, ccp or hcp). Their strong metallic bonding involves both the ns and the unpaired (n−1)d electrons, so they are hard and have high melting points. The melting points rise to a maximum around d⁵ (V, Cr) and then fall as d electrons start pairing and fewer unpaired electrons are available for bonding.`,
      { fig: figMP, cap: R`Mn and Zn break the pattern: Mn (d⁵) holds its half-filled shell tightly; Zn (d¹⁰) has no unpaired d electrons.` },
      R`Enthalpies of atomisation follow the same pattern; high atomisation enthalpy also makes a metal "noble" (unreactive). Metals of the 4d and 5d series have higher enthalpies of atomisation than the 3d metals, which is why heavy transition metals form more metal–metal bonds.`,
      { check: { q: R`Why do transition metals have high melting points?`, ans: R`Strong metallic bonds involving many unpaired (n−1)d electrons as well as ns electrons.` } }
    ] },

    { h: R`Atomic and ionic radii`, t: [2], blocks: [
      R`Across a series the radius decreases at first, then stays almost constant. Each new electron enters an inner (n−1)d orbital, which shields the outer electrons quite well, so the increase in nuclear charge is largely cancelled.`,
      { fig: figRadii, cap: R`Radii change little across the 3d series.` },
      R`Down a group the 4d atoms are larger than the 3d atoms, but the <b>4d and 5d atoms are almost the same size</b> (Zr 160 pm, Hf 159 pm). The 14 lanthanoids that come before Hf add 4f electrons, which shield poorly, so the nuclear charge pulls the 5d atoms in: the <b>lanthanoid contraction</b> (see below). As a result Zr and Hf have very similar chemistry and are hard to separate.`,
      R`Ionic radii decrease with increasing charge (Fe²⁺ 77 pm > Fe³⁺ 65 pm, both high spin), and for ions of the same charge they decrease slowly across the series. Because the radii are similar, the densities of transition metals rise across the series (Sc 3.0 → Cu 8.9 g/cm³).`,
      { check: { q: R`Why are the atomic radii of Zr and Hf nearly equal?`, ans: R`Lanthanoid contraction: poor shielding by 4f electrons pulls the 5d atoms in, cancelling the expected size increase.` } }
    ] },

    { h: R`Ionisation enthalpy`, t: [2], blocks: [
      R`Ionisation enthalpies increase slowly and irregularly across each series, because the added d electrons shield the 4s electrons fairly well. The irregularities come from the extra stability of d⁰, d⁵ and d¹⁰ configurations:`,
      { fig: figIE, cap: R`The second IE is very high for Cr and Cu because Cr⁺ (d⁵) and Cu⁺ (d¹⁰) have stable configurations.` },
      { points: [R`IE₂ of Cr and Cu are unusually high: removing a second electron breaks a stable d⁵ or d¹⁰ arrangement.`, R`IE₂ of Zn is lower than Cu's: Zn⁺ (3d¹⁰4s¹) loses its 4s electron easily to give stable d¹⁰.`, R`IE₃ of Mn is very high (Mn²⁺ is d⁵), and IE₃ of Fe is relatively low (Fe²⁺ d⁶ → Fe³⁺ d⁵). So Mn²⁺ and Fe³⁺ are stable.`] },
      { check: { q: R`Why is the third ionisation enthalpy of manganese unusually high?`, ans: R`Mn²⁺ is 3d⁵; removing a third electron would break the stable half-filled d subshell.` } }
    ] },

    { h: R`Oxidation states and their stability`, t: [2], blocks: [
      R`Because the (n−1)d and ns electrons have similar energies, transition metals show many oxidation states, usually differing by one unit (Fe²⁺/Fe³⁺, Cu⁺/Cu²⁺). This contrasts with p-block elements, whose states often differ by two.`,
      { table: { head: [R`Sc`, R`Ti`, R`V`, R`Cr`, R`Mn`, R`Fe`, R`Co`, R`Ni`, R`Cu`, R`Zn`], rows: [
        [R`+3`, R`+2, +3, <b>+4</b>`, R`+2 to <b>+5</b>`, R`+2, <b>+3</b>, +6`, R`<b>+2</b> to +7`, R`<b>+2, +3</b>`, R`<b>+2</b>, +3`, R`<b>+2</b>`, R`+1, <b>+2</b>`, R`<b>+2</b>`]] } },
      R`The number of oxidation states is greatest in the middle (Mn shows +2 to +7). At the start there are too few electrons to lose; at the end there are too few unpaired d electrons to share. The highest state equals the total number of 4s and 3d electrons up to Mn (Sc +3, Ti +4, V +5, Cr +6, Mn +7).`,
      { points: [R`High states are stabilised by <b>oxygen</b> and <b>fluorine</b> (small, electronegative, and O can form multiple bonds): Mn₂O₇ and CrO₃ exist, but the highest fluoride of Mn is MnF₄. Oxygen's ability to form multiple bonds makes oxides better than fluorides at stabilising very high states.`, R`Low states (0, +1) are stabilised by π-acceptor ligands such as CO: Ni(CO)₄, Fe(CO)₅.`, R`Oxides: lower-state oxides are <b>basic</b> (MnO), intermediate amphoteric (Mn₂O₃, MnO₂), higher states <b>acidic</b> (Mn₂O₇ gives HMnO₄; CrO₃ gives H₂CrO₄).`] },
      { tip: R`In the 4d and 5d series, the higher oxidation states are more stable (MoO₃, WO₃ are stable; CrO₃ is a strong oxidant), the opposite of the p-block trend.` },
      { check: { q: R`Why does Mn show the maximum number of oxidation states in the 3d series?`, ans: R`It has 5 unpaired 3d electrons plus 2 4s electrons, all of which can be involved in bonding (+2 to +7).` } }
    ] },

    { h: R`Standard electrode potentials`, t: [2], blocks: [
      R`E°(M²⁺/M) reflects three energy terms: atomisation, ionisation (IE₁ + IE₂) and hydration of M²⁺. The values become less negative across the series, roughly as IE₁ + IE₂ increases.`,
      { fig: figE, cap: R`Copper is the only 3d metal with a positive E°(M²⁺/M).` },
      { points: [R`<b>Cu</b> has a positive E° (+0.34 V): its high enthalpy of atomisation and high IE₂ are not repaid by its hydration enthalpy. So Cu does not liberate H₂ from acids.`, R`<b>Mn, Ni and Zn</b> are more negative than the trend suggests: Mn²⁺ (d⁵) and Zn²⁺ (d¹⁰) are stable configurations; Ni²⁺ has the highest negative hydration enthalpy.`] },
      R`E°(M³⁺/M²⁺) values explain the stability of ions in water: Mn³⁺/Mn²⁺ is +1.57 V and Co³⁺/Co²⁺ +1.97 V, so Mn³⁺ and Co³⁺ are strong <b>oxidising agents</b> (Mn²⁺ d⁵ is stable). Cr³⁺/Cr²⁺ is −0.41 V and Ti³⁺/Ti²⁺ −0.37 V, so Cr²⁺ and Ti²⁺ are strong <b>reducing agents</b> (Cr³⁺ with half-filled t₂g³ is stable). Fe³⁺/Fe²⁺ is +0.77 V.`,
      { check: { q: R`Why is Cr²⁺ a reducing agent while Mn³⁺ is an oxidising agent, though both are d⁴?`, ans: R`Cr²⁺ → Cr³⁺ gives the stable d³ (half-filled t₂g); Mn³⁺ → Mn²⁺ gives the stable half-filled d⁵.` } }
    ] },

    { h: R`Magnetic properties`, t: [2], blocks: [
      R`Substances with unpaired electrons are <b>paramagnetic</b> (attracted into a magnetic field); those with all electrons paired are <b>diamagnetic</b> (weakly repelled). Fe, Co and Ni are <b>ferromagnetic</b>, an extreme form of paramagnetism. For 3d ions the magnetic moment comes mainly from electron spin, and the <b>spin-only formula</b> gives it in Bohr magnetons (BM):`,
      { derive: R`Spin-only magnetic moment`, open: true, steps: [R`\[\mu = \sqrt{n(n+2)}\ \text{BM}\] where n is the number of unpaired electrons.`, R`n = 1, 2, 3, 4, 5 gives μ = 1.73, 2.83, 3.87, 4.90, 5.92 BM.`] },
      { table: { head: [R`Ion`, R`Configuration`, R`Unpaired e⁻`, R`μ (BM)`], rows: [
        [R`Sc³⁺, Ti⁴⁺`, R`3d⁰`, R`0`, R`0 (diamagnetic)`], [R`Ti³⁺`, R`3d¹`, R`1`, R`1.73`], [R`V³⁺`, R`3d²`, R`2`, R`2.83`], [R`Cr³⁺`, R`3d³`, R`3`, R`3.87`], [R`Fe²⁺`, R`3d⁶`, R`4`, R`4.90`], [R`Mn²⁺, Fe³⁺`, R`3d⁵`, R`5`, R`5.92`], [R`Cu²⁺`, R`3d⁹`, R`1`, R`1.73`], [R`Zn²⁺, Cu⁺`, R`3d¹⁰`, R`0`, R`0`]] } },
      { ex: { q: R`A divalent 3d metal ion has a spin-only magnetic moment of 3.87 BM. Identify possible ions.`,
        steps: [R`√(n(n+2)) = 3.87 → n(n+2) = 15 → n = 3.`, R`M²⁺ with 3 unpaired electrons: d³ (V²⁺) or d⁷ high spin (Co²⁺).`], ans: R`V²⁺ or Co²⁺` } },
      { check: { q: R`Calculate the spin-only moment of Fe³⁺.`, ans: R`3d⁵, 5 unpaired: √35 = 5.92 BM.` } }
    ] },

    { h: R`Colour of transition metal ions`, t: [2], blocks: [
      R`Most transition metal ions are coloured in solution and in the solid. In a complex, the ligands split the five d orbitals into groups of different energy. An electron can absorb a photon of visible light and jump from a lower to a higher d orbital (a <b>d–d transition</b>). The colour we see is the <b>complementary colour</b> of the light absorbed.`,
      { fig: figDD, cap: R`In an octahedral field the d orbitals split into t<sub>2g</sub> and e<sub>g</sub>; the energy gap matches visible light.` },
      { fig: figColour, cap: R`Colours of some hydrated 3d ions. Ions with d⁰ or d¹⁰ (Sc³⁺, Ti⁴⁺, Zn²⁺, Cu⁺) are colourless.` },
      R`The colour depends on the metal, its oxidation state and the ligands: [Cu(H₂O)₄]²⁺ is pale blue, but [Cu(NH₃)₄]²⁺ is deep blue. Ions with d⁰ or d¹⁰ configurations have no possible d–d transition and are colourless. (KMnO₄ and K₂Cr₂O₇ are intensely coloured even though Mn(VII) and Cr(VI) are d⁰: their colour comes from charge transfer from O to the metal.)`,
      { check: { q: R`Why is Zn²⁺ colourless while Cu²⁺ is coloured?`, ans: R`Zn²⁺ is d¹⁰: no d–d transition is possible. Cu²⁺ is d⁹ and can absorb visible light by a d–d transition.` } }
    ] },

    { h: R`Catalytic behaviour`, t: [2], blocks: [
      R`Transition metals and their compounds are excellent catalysts because they can <b>use several oxidation states</b> (forming unstable intermediates) and can provide a <b>surface</b> on which reactants are adsorbed and their bonds weakened (using d and s electrons).`,
      { table: { head: [R`Catalyst`, R`Process`], rows: [
        [R`Fe (with Mo promoter)`, R`Haber process for NH₃`], [R`V₂O₅`, R`Contact process for H₂SO₄`], [R`Ni (finely divided)`, R`hydrogenation of oils`], [R`Pt/Rh`, R`Ostwald process (NH₃ → NO)`], [R`TiCl₄ + Al(CH₃)₃ (Ziegler–Natta)`, R`polymerisation of ethene and propene`], [R`Pd (Wacker process)`, R`ethene → ethanal`], [R`Fe³⁺`, R`reaction of I⁻ with S₂O₈²⁻`]] } },
      R`Example of changing oxidation state: Fe³⁺ catalyses 2I⁻ + S₂O₈²⁻ → I₂ + 2SO₄²⁻ by 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂, then 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻. Two negative ions repel, so the direct reaction is slow; the positive catalyst avoids this.`,
      { check: { q: R`Give two reasons why transition metals are good catalysts.`, ans: R`Variable oxidation states (forming intermediates) and a large surface for adsorption using d electrons.` } }
    ] },

    { h: R`Complex formation, interstitial compounds and alloys`, t: [2], blocks: [
      R`<b>Complexes:</b> transition metal ions are small, highly charged, and have vacant d orbitals of suitable energy, so they accept lone pairs from ligands: [Fe(CN)₆]³⁻, [Cu(NH₃)₄]²⁺, [Ni(CN)₄]²⁻, [PtCl₄]²⁻. (Next chapter.)`,
      R`<b>Interstitial compounds</b> form when small atoms like H, C, N or B are trapped in the voids of the metal lattice: TiC, Mn₄N, Fe₃H, VH₀.₅₆, TiH₁.₇. They are usually non-stoichiometric, very hard (some borides approach diamond), have high melting points, retain metallic conductivity, and are chemically inert. Steel and cast iron are interstitial compounds of iron with carbon.`,
      R`<b>Alloys</b> are blends of metals (homogeneous solid solutions). Transition metals form alloys easily because their atomic radii are similar (within about 15%), so one atom can replace another in the lattice. Examples: brass (Cu–Zn), bronze (Cu–Sn), stainless steel (Fe–Cr–Ni), alloy steels with Cr, V, W, Mo, Mn.`,
      { check: { q: R`Why do transition metals form alloys readily?`, ans: R`Their atomic sizes are very similar, so atoms of one metal easily replace those of another in the crystal lattice.` } }
    ] },

    { h: R`Potassium dichromate`, t: [3], blocks: [
      R`<b>Preparation</b> from chromite ore, FeCr₂O₄:`,
      { derive: R`Steps`, open: true, steps: [R`Fusion with Na₂CO₃ in air: 4FeCr₂O₄ + 8Na₂CO₃ + 7O₂ → 8Na₂CrO₄ + 2Fe₂O₃ + 8CO₂`, R`Acidify the yellow chromate solution: 2Na₂CrO₄ + 2H⁺ → Na₂Cr₂O₇ + 2Na⁺ + H₂O`, R`Convert to the less soluble potassium salt: Na₂Cr₂O₇ + 2KCl → K₂Cr₂O₇ + 2NaCl (orange crystals)`] },
      R`<b>Chromate–dichromate equilibrium:</b> 2CrO₄²⁻ (yellow) + 2H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O. In acid the dichromate dominates; in alkali the chromate: Cr₂O₇²⁻ + 2OH⁻ → 2CrO₄²⁻ + H₂O. The oxidation state of Cr (+6) does not change.`,
      { fig: figCrMn, cap: R`Chromate and permanganate are tetrahedral; dichromate is two CrO₄ tetrahedra sharing a corner.` },
      R`<b>Oxidising action</b> (acidic medium, used in volumetric analysis): Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O, E° = +1.33 V (orange → green). It oxidises: I⁻ → I₂; Fe²⁺ → Fe³⁺; Sn²⁺ → Sn⁴⁺; H₂S → S. For example, Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O.`,
      R`<b>Uses:</b> primary standard in volumetric analysis (not hygroscopic, unlike Na₂Cr₂O₇), leather tanning, chrome alum, oxidising agent in organic chemistry. The <b>chromyl chloride test</b> for Cl⁻ gives red CrO₂Cl₂ vapour.`,
      { ex: { q: R`What mass of K₂Cr₂O₇ (M = 294) is needed to oxidise 1 mol of FeSO₄ in acidic solution?`,
        steps: [R`Cr₂O₇²⁻ gains 6e⁻; each Fe²⁺ loses 1e⁻, so 1 mol dichromate oxidises 6 mol Fe²⁺.`, R`1/6 mol × 294 = 49 g.`], ans: R`49 g` } },
      { check: { q: R`What colour change is seen when a chromate solution is acidified?`, ans: R`Yellow (CrO₄²⁻) to orange (Cr₂O₇²⁻).` } }
    ] },

    { h: R`Potassium permanganate`, t: [3], blocks: [
      R`<b>Preparation:</b> pyrolusite (MnO₂) is fused with KOH and an oxidant (air or KNO₃) to give dark green potassium manganate, which disproportionates in neutral or acidic solution:`,
      { points: [R`2MnO₂ + 4KOH + O₂ → 2K₂MnO₄ + 2H₂O`, R`3MnO₄²⁻ + 4H⁺ → 2MnO₄⁻ + MnO₂ + 2H₂O`, R`Commercially, manganate is oxidised electrolytically in alkaline solution: MnO₄²⁻ → MnO₄⁻ + e⁻. In the lab, Mn²⁺ is oxidised by peroxodisulphate: 2Mn²⁺ + 5S₂O₈²⁻ + 8H₂O → 2MnO₄⁻ + 10SO₄²⁻ + 16H⁺.`] },
      R`<b>Properties:</b> dark purple crystals, diamagnetic (Mn(VII) is d⁰) whereas manganate (green, d¹) is paramagnetic; both ions are tetrahedral. On heating at 513 K: 2KMnO₄ → K₂MnO₄ + MnO₂ + O₂.`,
      { table: { head: [R`Medium`, R`Half-reaction`, R`n`, R`Example`], rows: [
        [R`Acidic`, R`MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O (E° 1.52 V)`, R`5`, R`Fe²⁺ → Fe³⁺; C₂O₄²⁻ → CO₂; I⁻ → I₂; H₂S → S; SO₂ → SO₄²⁻`],
        [R`Neutral / weakly alkaline`, R`MnO₄⁻ + 2H₂O + 3e⁻ → MnO₂ + 4OH⁻`, R`3`, R`I⁻ → IO₃⁻; S₂O₃²⁻ → SO₄²⁻; Mn²⁺ → MnO₂`],
        [R`Strongly alkaline`, R`MnO₄⁻ + e⁻ → MnO₄²⁻`, R`1`, R`—`]] } },
      R`Titrations with KMnO₄ need no indicator (it is its own indicator: the first excess drop gives a pink colour). HCl is not used to acidify because it is oxidised to Cl₂; dilute H₂SO₄ is used. Uses: oxidant in analysis and organic synthesis, disinfectant, bleaching wool and cotton.`,
      { ex: { q: R`What volume of 0.02 M KMnO₄ is needed to oxidise 3.92 g of Mohr's salt, FeSO₄·(NH₄)₂SO₄·6H₂O (M = 392), in acid?`,
        steps: [R`n(Fe²⁺) = 3.92/392 = 0.01 mol; MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O.`, R`n(MnO₄⁻) = 0.01/5 = 0.002 mol; V = 0.002/0.02 = 0.1 L.`], ans: R`100 mL` } },
      { check: { q: R`Why is HCl not used to acidify KMnO₄ in titrations?`, ans: R`KMnO₄ oxidises HCl to Cl₂, so part of it would be consumed and the result would be wrong.` } }
    ] },

    { h: R`Lanthanoids: configuration and oxidation states`, t: [4], blocks: [
      R`The <b>lanthanoids</b> are the 14 elements after lanthanum, Ce (58) to Lu (71), in which the 4f orbitals are filled. Their general configuration is [Xe] 4f¹⁻¹⁴ 5d⁰⁻¹ 6s². Lanthanum (4f⁰) is usually studied with them.`,
      R`The common oxidation state is <b>+3</b> for all. Some show +2 or +4 when this gives an empty, half-filled or filled f subshell:`,
      { points: [R`<b>Ce⁴⁺</b> (4f⁰) is a good oxidising agent (E° Ce⁴⁺/Ce³⁺ = +1.74 V), used in analysis.`, R`<b>Eu²⁺</b> (4f⁷) and <b>Yb²⁺</b> (4f¹⁴) are reducing agents (they change to the common +3 state).`, R`Tb⁴⁺ (4f⁷) is an oxidant.`] },
      R`<b>General characteristics:</b> silvery-white soft metals that tarnish in air; hardness increases with atomic number (Sm is steel-hard). They are reactive, similar to calcium: they burn in O₂ to Ln₂O₃, react with water to give H₂, with acids to give H₂, with carbon to give carbides, and with N₂ to give LnN. Many Ln³⁺ ions are coloured (f–f transitions); La³⁺ and Lu³⁺ (f⁰, f¹⁴) are colourless. Ln(OH)₃ are basic, like alkaline earth hydroxides. <b>Mischmetall</b> (about 95% lanthanoid metals, 5% Fe) is used in lighter flints and Mg alloys.`,
      { check: { q: R`Why is Ce⁴⁺ a good oxidising agent?`, ans: R`Ce prefers its common +3 state; Ce⁴⁺ readily gains an electron (E° = +1.74 V).` } }
    ] },

    { h: R`Lanthanoid contraction and its consequences`, t: [4], blocks: [
      R`The atomic and ionic radii of the lanthanoids <b>decrease steadily</b> from La to Lu. This is the <b>lanthanoid contraction</b>. Each added 4f electron shields the outer electrons imperfectly (f orbitals are diffuse), so the effective nuclear charge rises and pulls the electron cloud in.`,
      { fig: figLn, cap: R`Ln³⁺ radii (coordination number 6) shrink steadily from La³⁺ to Lu³⁺.` },
      { points: [R`<b>Similar radii of 4d and 5d elements:</b> Zr 160 pm and Hf 159 pm; Nb and Ta; Mo and W. These pairs occur together and are very hard to separate.`, R`<b>Basicity of Ln(OH)₃ decreases</b> from La(OH)₃ to Lu(OH)₃, as the smaller cation holds OH⁻ more covalently.`, R`<b>Separation of lanthanoids is difficult</b> because their sizes and chemistry are so similar (they are separated by ion exchange).`, R`Higher density and higher ionisation enthalpies of the 5d metals compared with the 4d metals; this makes gold, platinum and mercury so unreactive.`] },
      { check: { q: R`Give two consequences of the lanthanoid contraction.`, ans: R`Zr and Hf (and Nb–Ta, Mo–W) have nearly equal radii and similar chemistry; basicity of Ln(OH)₃ decreases from La to Lu.` } }
    ] },

    { h: R`Actinoids: configuration and oxidation states`, t: [5], blocks: [
      R`The <b>actinoids</b> are the 14 elements after actinium, Th (90) to Lr (103), with the 5f orbitals being filled: [Rn] 5f¹⁻¹⁴ 6d⁰⁻¹ 7s². All are <b>radioactive</b>; only Th and U occur naturally in significant amounts. Elements after uranium are made artificially (transuranium elements), many in tiny amounts with short half-lives.`,
      R`The 5f, 6d and 7s levels have very similar energies, so the actinoids show a much <b>wider range of oxidation states</b> than the lanthanoids. +3 is common, but early actinoids reach higher states: Th +4, Pa +5, U +6, Np and Pu +7. Later actinoids mainly show +3 (and No +2).`,
      { table: { head: [R`Element`, R`Th`, R`Pa`, R`U`, R`Np`, R`Pu`, R`Am`], rows: [[R`Oxidation states`, R`<b>+4</b>`, R`+4, <b>+5</b>`, R`+3, +4, +5, <b>+6</b>`, R`+3 to +7`, R`+3 to +7`, R`+3 to +6`]] } },
      { check: { q: R`Why do actinoids show more oxidation states than lanthanoids?`, ans: R`The 5f, 6d and 7s energies are very close, so a varying number of electrons can be used in bonding.` } }
    ] },

    { h: R`Actinoid contraction and general characteristics`, t: [5], blocks: [
      R`Across the actinoids there is a gradual decrease in atomic and ionic radii, the <b>actinoid contraction</b>, which is <b>greater</b> from element to element than the lanthanoid contraction, because 5f electrons shield even more poorly than 4f.`,
      { table: { head: [R`Feature`, R`Lanthanoids`, R`Actinoids`], rows: [
        [R`Orbitals filled`, R`4f`, R`5f`],
        [R`Oxidation states`, R`mainly +3 (some +2, +4)`, R`+3 to +7, wide range`],
        [R`Radioactivity`, R`only Pm`, R`all radioactive`],
        [R`Complex formation`, R`less`, R`greater`],
        [R`Contraction`, R`smaller, regular`, R`larger`],
        [R`Oxocations`, R`do not form`, R`form UO₂²⁺, PuO₂²⁺`],
        [R`Shielding by f electrons`, R`poor`, R`even poorer (5f more diffuse)`]] } },
      R`Actinoid metals are silvery and highly reactive, especially when finely divided: they react with boiling water to give oxide and hydride, combine with most non-metals, and are attacked by HCl but only slightly by HNO₃ (protective oxide). Their magnetic properties are more complex than those of the lanthanoids.`,
      { check: { q: R`Why is the actinoid contraction greater than the lanthanoid contraction?`, ans: R`5f electrons shield the outer electrons even less effectively than 4f electrons.` } }
    ] },

    { h: R`Applications of d- and f-block elements`, t: [1], blocks: [
      { points: [
        R`<b>Iron and steels</b> are the most important construction materials; alloy steels with Cr, Ni, Mn, V, Mo, W.`,
        R`<b>TiO₂</b> is the white pigment in paints; <b>MnO₂</b> is used in dry cells (Leclanché and alkaline batteries); Zn and Ni/Cd in batteries.`,
        R`<b>Coinage metals</b> Cu, Ag and Au, and alloys for coins and jewellery.`,
        R`<b>Catalysts:</b> V₂O₅ (Contact process), TiCl₄ + Al(CH₃)₃ (Ziegler–Natta polymerisation), Fe (Haber process), Ni (hydrogenation), PdCl₂ (Wacker process).`,
        R`<b>AgBr</b> in photography (light-sensitive).`,
        R`<b>Lanthanoids:</b> mischmetall in lighter flints, lanthanoid oxides in television screens and fluorescent lamps (phosphors), Nd in powerful magnets. <b>Actinoids:</b> U and Pu as nuclear fuels.`
      ] },
      { check: { q: R`Name the catalyst used in the Contact process.`, ans: R`Vanadium pentoxide, V₂O₅.` } }
    ] }
  ],
  summary: [
    R`d-block: (n−1)d¹⁻¹⁰ns¹⁻²; transition element = incomplete d subshell in atom or common ion (Zn, Cd, Hg excluded). Cr 3d⁵4s¹, Cu 3d¹⁰4s¹. Ions lose 4s first.`,
    R`High melting points (max near d⁵), similar radii across a series; 4d ≈ 5d (lanthanoid contraction).`,
    R`Variable oxidation states (Mn +2 to +7); high states stabilised by O and F; Mn²⁺ and Fe³⁺ (d⁵) stable. Cu has positive E°(M²⁺/M).`,
    R`μ = √(n(n+2)) BM. Colour from d–d transitions; d⁰ and d¹⁰ colourless. Catalysts: variable states + surface.`,
    R`Interstitial compounds (TiC, Fe₃H) and alloys (similar radii).`,
    R`K₂Cr₂O₇ from chromite; 2CrO₄²⁻ + 2H⁺ ⇌ Cr₂O₇²⁻ + H₂O; Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.`,
    R`KMnO₄ from MnO₂ via K₂MnO₄; n = 5 (acid), 3 (neutral), 1 (strongly alkaline); self-indicator.`,
    R`Lanthanoids: 4f, mainly +3 (Ce⁴⁺ oxidant, Eu²⁺/Yb²⁺ reductants); lanthanoid contraction. Actinoids: 5f, radioactive, many states (U +6, Np/Pu +7), larger contraction.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §19.1 Occurrence, Preparation, and Properties of Transition Metals and Their Compounds`, url: 'https://openstax.org/books/chemistry-2e/pages/19-1-occurrence-preparation-and-properties-of-transition-metals-and-their-compounds' },
    { t: R`Wikipedia: Transition metal`, url: 'https://en.wikipedia.org/wiki/Transition_metal' },
    { t: R`Wikipedia: Lanthanide contraction`, url: 'https://en.wikipedia.org/wiki/Lanthanide_contraction' },
    { t: R`Wikipedia: Potassium permanganate`, url: 'https://en.wikipedia.org/wiki/Potassium_permanganate' },
    { t: R`Wikipedia: Potassium dichromate`, url: 'https://en.wikipedia.org/wiki/Potassium_dichromate' },
    { t: R`Wikipedia: Actinide`, url: 'https://en.wikipedia.org/wiki/Actinide' }
  ]
});
})();
