// Book chapter: Hydrocarbons. Full theory with structures and diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
// Newman projection: front bonds from the centre, back bonds from the circle edge. Angles in degrees (0 = right, 90 = up).
function newman(cx, cy, front, back, fl, bl) {
  var out = [D.circle(cx, cy, 26, { w: 1.8 })], r = 26, L = 50;
  function pt(a, d) { var t = -a * Math.PI / 180; return [cx + d * Math.cos(t), cy + d * Math.sin(t)]; }
  back.forEach(function (a, i) { var p = pt(a, r), q = pt(a, L); out.push(D.line(p[0], p[1], q[0], q[1], { color: 'b', w: 1.8 })); var t = pt(a, L + 10); out.push(lab(t[0], t[1], bl[i], bl[i] === 'H' ? 'b' : 'r', 11, { bold: bl[i] !== 'H' })); });
  front.forEach(function (a, i) { var q = pt(a, L); out.push(D.line(cx, cy, q[0], q[1], { w: 1.8 })); var t = pt(a, L + 10); out.push(lab(t[0], t[1], fl[i], fl[i] === 'H' ? 'k' : 'r', 11, { bold: fl[i] !== 'H' })); });
  out.push(D.dot(cx, cy, { r: 2.5 }));
  return out.join('');
}
function saw(x1, y1, x2, y2, back, front) {
  var out = [D.line(x1, y1, x2, y2, { w: 2 })];
  [[x1, y1, back, 'b'], [x2, y2, front, 'k']].forEach(function (c) {
    c[2].forEach(function (a) { var t = -a * Math.PI / 180, x = c[0] + 34 * Math.cos(t), y = c[1] + 34 * Math.sin(t); out.push(D.line(c[0], c[1], x, y, { color: c[3], w: 1.6 })); out.push(lab(c[0] + 44 * Math.cos(t), c[1] + 44 * Math.sin(t), 'H', c[3], 10)); });
  });
  return out.join('');
}

// ---------- figures ----------
var figEthane = D.row([
  [D.svg(180, 150, [newman(90, 75, [90, 210, 330], [30, 150, 270], ['H', 'H', 'H'], ['H', 'H', 'H'])], 'staggered Newman'), R`Staggered (Newman)`],
  [D.svg(180, 150, [newman(90, 75, [90, 210, 330], [100, 220, 340], ['H', 'H', 'H'], ['H', 'H', 'H'])], 'eclipsed Newman'), R`Eclipsed (Newman)`],
  [D.svg(200, 150, [saw(70, 105, 130, 45, [90, 210, 330], [30, 150, 270])], 'staggered sawhorse'), R`Staggered (Sawhorse)`]
]);

var Eb = function (t) { return 13.93 * (1 + Math.cos(3 * t * Math.PI / 180)) / 2 + 5.07 * (1 + Math.cos(t * Math.PI / 180)) / 2; };
var figButane = D.plot({ w: 460, h: 240, x: [0, 370], y: [-2, 23], noOrigin: true, xlabel: 'φ', ylabel: 'energy / kJ mol⁻¹', mathLabels: false,
  xticks: [[0, '0°'], [60, '60°'], [120, '120°'], [180, '180°'], [240, '240°'], [300, '300°'], [360, '360°']], yticks: [[3.8, '3.8'], [16, '16'], [19, '19']],
  fns: [{ f: Eb, from: 0, to: 360, color: 'b' }],
  texts: [{ x: 180, y: 2, s: 'anti (most stable)', color: 'g', size: 10 }, { x: 60, y: 6.3, s: 'gauche', color: 'o', size: 10 }, { x: 300, y: 6.3, s: 'gauche', color: 'o', size: 10 }, { x: 22, y: 21, s: 'fully eclipsed', color: 'r', size: 10, anchor: 'start' }, { x: 120, y: 17.6, s: 'eclipsed', color: 'm', size: 10 }],
  pts: [{ x: 180, y: 0, color: 'g' }, { x: 60, y: 3.8, color: 'o' }, { x: 300, y: 3.8, color: 'o' }, { x: 0, y: 19, color: 'r' }, { x: 120, y: 15.2, color: 'm' }, { x: 240, y: 15.2, color: 'm' }],
  label: 'Conformational energy of butane' });

var figRadical = D.svg(480, 170, [
  lab(10, 22, 'Initiation:', 'o', 11, { anchor: 'start', bold: true }), lab(110, 22, 'Cl–Cl  →(hν)  Cl•  +  Cl•', 'k', 11, { anchor: 'start' }),
  lab(10, 62, 'Propagation:', 'b', 11, { anchor: 'start', bold: true }), lab(110, 54, 'CH₄ + Cl•  →  •CH₃ + HCl', 'k', 11, { anchor: 'start' }), lab(110, 74, '•CH₃ + Cl₂  →  CH₃Cl + Cl•', 'k', 11, { anchor: 'start' }),
  D.path('M330,74 C380,74 390,54 345,54', { color: 'b', w: 1.4, dash: '4 3' }), lab(400, 64, 'chain repeats', 'b', 9, { anchor: 'start' }),
  lab(10, 116, 'Termination:', 'r', 11, { anchor: 'start', bold: true }), lab(110, 104, 'Cl• + Cl• → Cl₂;  •CH₃ + •CH₃ → C₂H₆', 'k', 11, { anchor: 'start' }), lab(110, 124, '•CH₃ + Cl• → CH₃Cl', 'k', 11, { anchor: 'start' }),
  lab(240, 158, 'ethane in the products is evidence for the free-radical mechanism', 'm', 9)
], 'Free-radical chlorination of methane');

var figEAS = D.svg(480, 120, [
  lab(10, 22, 'Step 1:', 'o', 11, { anchor: 'start', bold: true }), lab(70, 22, 'generate the electrophile, e.g. HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻', 'k', 10, { anchor: 'start' }),
  lab(10, 56, 'Step 2:', 'b', 11, { anchor: 'start', bold: true }), lab(70, 56, 'E⁺ attacks the π cloud → arenium ion (σ-complex), slow step;', 'k', 10, { anchor: 'start' }), lab(70, 72, 'the ring loses aromaticity, the positive charge is spread by resonance', 'm', 9, { anchor: 'start' }),
  lab(10, 104, 'Step 3:', 'g', 11, { anchor: 'start', bold: true }), lab(70, 104, 'a base removes H⁺ from the sp³ carbon → aromaticity restored (fast)', 'k', 10, { anchor: 'start' })
], 'Steps of electrophilic aromatic substitution');

function hexa(cx, cy, mode) {
  var r = 34, pts = [], out = [];
  for (var k = 0; k < 6; k++) { var t = (90 + 60 * k) * Math.PI / 180; pts.push([cx + r * Math.cos(t), cy - r * Math.sin(t)]); }
  out.push(D.poly(pts, { closed: true, w: 2 }));
  if (mode === 'o') out.push(D.circle(cx, cy, 20, { w: 1.6, color: 'b' }));
  else for (var j = mode; j < 6; j += 2) {
    var a = pts[j], b = pts[(j + 1) % 6], ix = cx + (a[0] - cx) * 0.78, iy = cy + (a[1] - cy) * 0.78, jx = cx + (b[0] - cx) * 0.78, jy = cy + (b[1] - cy) * 0.78;
    out.push(D.line(ix, iy, jx, jy, { w: 2 }));
  }
  return out.join('');
}
var figKekule = D.svg(380, 100, [hexa(60, 50, 0), D.text(130, 50, '⟷', { size: 20, math: false, color: 'm' }), hexa(200, 50, 1), D.text(270, 50, '≡', { size: 20, math: false, color: 'm' }), hexa(330, 50, 'o')], 'Kekule structures of benzene');

// ---------- chapter text ----------
JEE.book('chemistry', 'hydrocarbons', {
  intro: [
    R`Hydrocarbons are compounds of carbon and hydrogen only. They are our main fuels (LPG, CNG, petrol, diesel, kerosene) and the starting materials for plastics, dyes, drugs and countless other chemicals.`,
    R`This chapter covers the three families of aliphatic hydrocarbons (alkanes, alkenes and alkynes) and the aromatic hydrocarbons like benzene: their structure, isomerism, preparation, physical properties and the reactions and mechanisms (free-radical substitution, electrophilic addition, electrophilic aromatic substitution) that JEE asks about most.`
  ],
  sections: [
    { h: R`Classification, isomerism and nomenclature`, t: [0], blocks: [
      R`Hydrocarbons are <b>saturated</b> (only C–C single bonds: alkanes CₙH₂ₙ₊₂ and cycloalkanes CₙH₂ₙ), <b>unsaturated</b> (C=C: alkenes CₙH₂ₙ; C≡C: alkynes CₙH₂ₙ₋₂) or <b>aromatic</b> (benzene and its relatives).`,
      R`<b>Alkanes</b> show chain isomerism from C₄ onwards: C₄H₁₀ has 2 isomers, C₅H₁₂ has 3, C₆H₁₄ has 5. Carbons are classified as 1° (bonded to one other C), 2°, 3° or 4°, and so are the hydrogens on them.`,
      { mol: [['CCCCC', 'pentane'], ['CC(C)CC', '2-methylbutane'], ['CC(C)(C)C', '2,2-dimethylpropane']], w: 150, h: 110, cap: R`The three chain isomers of C₅H₁₂.` },
      { ex: { q: R`How many 1°, 2°, 3° and 4° carbons are there in 2,2,4-trimethylpentane (isooctane)?`,
        steps: [R`(CH₃)₃C–CH₂–CH(CH₃)–CH₃: five CH₃ groups (1°), one CH₂ (2°), one CH (3°), one C (4°).`], ans: R`1°: 5, 2°: 1, 3°: 1, 4°: 1` } },
      { check: { q: R`How many structural isomers does C₆H₁₄ have?`, ans: R`Five.` } }
    ] },

    { h: R`Physical properties of alkanes; effect of branching`, t: [0], blocks: [
      R`Alkanes are non-polar; their molecules are held only by weak van der Waals (dispersion) forces. C₁–C₄ are gases, C₅–C₁₇ liquids and higher ones waxy solids. They are insoluble in water but soluble in non-polar solvents ("like dissolves like").`,
      { points: [R`<b>Boiling point</b> increases with molar mass (larger surface area, stronger dispersion forces), by about 20–30 K per CH₂.`, R`<b>Branching lowers the boiling point</b>: the molecule becomes more spherical, so the surface area and contact between molecules decrease. Pentane (309 K) > 2-methylbutane (301 K) > 2,2-dimethylpropane (282.5 K).`, R`<b>Melting point</b> depends also on packing: highly symmetrical molecules pack well, so neopentane melts at a higher temperature than its isomers. Even-carbon alkanes pack better than odd-carbon ones (alternation).`, R`Density increases with molar mass but stays below 1 g/cm³.`] },
      { check: { q: R`Why does neopentane have a lower boiling point than n-pentane?`, ans: R`It is nearly spherical, so it has a smaller surface area and weaker van der Waals forces.` } }
    ] },

    { h: R`Preparation of alkanes`, t: [0], blocks: [
      { points: [
        R`<b>From unsaturated hydrocarbons</b> (hydrogenation): CH₂=CH₂ + H₂ → CH₃–CH₃ with finely divided Pt or Pd at room temperature, or Ni at 523–573 K (Sabatier–Senderens).`,
        R`<b>From alkyl halides:</b> (i) reduction with Zn and dilute HCl: CH₃Cl + H₂ → CH₄ + HCl. (ii) <b>Wurtz reaction</b>: 2R–X + 2Na → R–R + 2NaX (dry ether). It gives alkanes with an even number of carbons (twice the alkyl group); with two different halides a mixture forms, and it does not make methane.`,
        R`<b>From carboxylic acids:</b> (i) <b>decarboxylation</b>: heating the sodium salt with soda lime (NaOH + CaO) removes CO₂: CH₃COONa + NaOH → CH₄ + Na₂CO₃. The alkane has one carbon less. (ii) <b>Kolbe's electrolysis</b> of an aqueous sodium carboxylate gives R–R at the anode: 2CH₃COONa + 2H₂O → CH₃CH₃ + 2CO₂ + H₂ + 2NaOH. Methane cannot be made this way.`
      ] },
      { ex: { q: R`What volume of methane (STP) is obtained by heating 8.2 g of sodium ethanoate with soda lime?`,
        steps: [R`CH₃COONa (82 g/mol) → CH₄; 8.2/82 = 0.1 mol.`, R`0.1 × 22.4 = 2.24 L.`], ans: R`2.24 L` } },
      { ex: { q: R`What volume of ethane (STP) can be made by the Wurtz reaction from 9.5 g of bromomethane?`,
        steps: [R`2CH₃Br + 2Na → C₂H₆ + 2NaBr; 9.5/95 = 0.1 mol CH₃Br → 0.05 mol C₂H₆.`, R`0.05 × 22.4 = 1.12 L.`], ans: R`1.12 L` } },
      { check: { q: R`Which method of preparing alkanes reduces the number of carbon atoms by one?`, ans: R`Decarboxylation of sodium carboxylates with soda lime.` } }
    ] },

    { h: R`Conformations of ethane`, t: [0], blocks: [
      R`Rotation about a C–C single bond gives different spatial arrangements called <b>conformations</b> (conformers or rotamers). They interconvert rapidly at room temperature, so they cannot be isolated. For ethane, the two extremes are:`,
      { fig: figEthane, cap: R`In the Newman projection we look along the C–C bond; the front carbon is the point, the rear carbon the circle.` },
      { points: [R`<b>Staggered:</b> the hydrogens of the two carbons are as far apart as possible (dihedral angle 60°). Lowest energy, most stable.`, R`<b>Eclipsed:</b> the hydrogens are directly behind each other (dihedral angle 0°). Highest energy because of electron-pair repulsion between the C–H bonds (<b>torsional strain</b>).`, R`Skew conformations lie in between. The energy difference is only about <b>12.5 kJ/mol</b>, so rotation is almost free at room temperature.`] },
      { check: { q: R`Why can't the conformers of ethane be isolated?`, ans: R`The rotational energy barrier (12.5 kJ/mol) is so small that they interconvert rapidly at room temperature.` } }
    ] },

    { h: R`Conformations of butane`, t: [0], blocks: [
      R`For butane, rotation about C2–C3 gives conformations of different energy, because the two large CH₃ groups now interact:`,
      { fig: figButane, cap: R`Energy against the dihedral angle φ between the two methyl groups, CH₃–C2–C3–CH₃ (approximate values).` },
      { table: { head: [R`Conformation`, R`CH₃–CH₃ dihedral`, R`Relative energy`], rows: [[R`Anti (staggered)`, R`180°`, R`0 (most stable)`], [R`Gauche (staggered)`, R`60°`, R`≈ 3.8 kJ/mol (steric strain)`], [R`Eclipsed (CH₃/H)`, R`120°`, R`≈ 16 kJ/mol`], [R`Fully eclipsed (syn)`, R`0°`, R`≈ 19 kJ/mol (least stable)`]] } },
      { adv: R`Order of stability: anti > gauche > eclipsed > fully eclipsed. The gauche form has steric (van der Waals) strain between the methyl groups; the fully eclipsed form has both torsional and severe steric strain.` },
      { check: { q: R`Which conformation of butane is the most stable?`, ans: R`Anti (methyl groups at 180°).` } }
    ] },

    { h: R`Reactions of alkanes`, t: [0], blocks: [
      R`Alkanes are fairly unreactive (paraffins = "little affinity") because C–C and C–H bonds are strong and non-polar. Under drastic conditions they react:`,
      { points: [
        R`<b>Combustion:</b> CₓHᵧ + (x + y/4)O₂ → xCO₂ + (y/2)H₂O, highly exothermic (CH₄: ΔcH = −890 kJ/mol). Incomplete combustion gives CO and carbon black.`,
        R`<b>Halogenation</b> in UV light or at 520–670 K: CH₄ + Cl₂ → CH₃Cl → CH₂Cl₂ → CHCl₃ → CCl₄ (with HCl each time). Reactivity F₂ > Cl₂ > Br₂ > I₂ (iodination is reversible and needs an oxidant like HIO₃). Replacement of H: 3° > 2° > 1°.`,
        R`<b>Controlled oxidation:</b> 2CH₄ + O₂ → 2CH₃OH (Cu, 523 K, 100 atm); CH₄ + O₂ → HCHO + H₂O (Mo₂O₃); (CH₃)₃CH → (CH₃)₃COH (KMnO₄).`,
        R`<b>Isomerisation</b> (anhydrous AlCl₃ + HCl), <b>aromatisation</b> (hexane → benzene over Cr₂O₃/V₂O₅/Mo₂O₃ on Al₂O₃, 773 K), <b>reaction with steam</b> (CH₄ + H₂O → CO + 3H₂, Ni) and <b>pyrolysis/cracking</b> (higher alkanes → smaller alkanes and alkenes).`
      ] },
      { fig: figRadical, cap: R`Halogenation is a free-radical chain reaction: initiation, propagation and termination.` },
      { ex: { q: R`10 mL of a gaseous hydrocarbon needs 55 mL of O₂ for complete combustion and gives 40 mL of CO₂ (same conditions). Find its formula.`,
        steps: [R`CₓHᵧ + (x + y/4)O₂ → xCO₂: 10x = 40 → x = 4.`, R`10(x + y/4) = 55 → 4 + y/4 = 5.5 → y = 6.`], ans: R`C₄H₆` } },
      { check: { q: R`Why does the chlorination of methane give some ethane?`, ans: R`Two •CH₃ radicals combine in a termination step, which supports the free-radical mechanism.` } }
    ] },

    { h: R`Allylic and benzylic halogenation`, t: [0], blocks: [
      R`A hydrogen on a carbon next to a C=C (<b>allylic</b>) or next to a benzene ring (<b>benzylic</b>) is replaced especially easily by free-radical halogenation, because the allylic and benzylic radicals are stabilised by resonance.`,
      { mol: [['C=CC', 'propene'], ['C=CCBr', '3-bromopropene (allyl bromide)'], ['CC1=CC=CC=C1', 'toluene'], ['BrCC1=CC=CC=C1', 'benzyl bromide']], w: 150, h: 110, cap: R`Allylic and benzylic positions are brominated with NBS (N-bromosuccinimide) in light or with peroxide.` },
      R`<b>N-Bromosuccinimide (NBS)</b> provides a low, steady concentration of Br₂, so substitution at the allylic position wins over addition to the double bond. Cl₂ at about 773 K also gives allyl chloride from propene: CH₂=CH–CH₃ + Cl₂ → CH₂=CH–CH₂Cl + HCl. Toluene with Cl₂ in light gives benzyl chloride, then benzal chloride and benzotrichloride.`,
      { adv: R`Order of radical stability that explains the selectivity: allyl ≈ benzyl > 3° > 2° > 1° > methyl. Benzylic C–H bonds (≈ 356 kJ/mol) are much weaker than ordinary 1° C–H bonds (≈ 420 kJ/mol).` },
      { check: { q: R`What is the product of toluene with Cl₂ in sunlight (one equivalent)?`, ans: R`Benzyl chloride, C₆H₅CH₂Cl (side-chain substitution).` } }
    ] },

    { h: R`Alkenes: structure, geometrical isomerism and physical properties`, t: [1], blocks: [
      R`Alkenes (olefins) have a C=C double bond made of one σ bond (sp²–sp² overlap) and one π bond (sideways p–p overlap). The C=C bond length is 134 pm and its enthalpy 681 kJ/mol (less than twice C–C, because the π bond is weaker). The π electrons are loosely held, so alkenes are attacked by electrophiles.`,
      R`Alkenes show chain, position and <b>geometrical isomerism</b> (when each doubly bonded carbon has two different groups). Cis isomers are more polar; trans isomers usually melt higher (better packing).`,
      { mol: [['C=CCC', 'but-1-ene'], ['C/C=C\\C', 'cis-but-2-ene'], ['C/C=C/C', 'trans-but-2-ene'], ['C=C(C)C', '2-methylpropene']], w: 140, h: 110, cap: R`The four alkene isomers of C₄H₈.` },
      R`Physical properties: C₂–C₄ are gases, C₅–C₁₇ liquids. Boiling points rise with size and are close to those of the alkanes. Alkenes are slightly more polar than alkanes and insoluble in water.`,
      { check: { q: R`Which isomer of but-2-ene has the larger dipole moment?`, ans: R`The cis isomer (the bond dipoles do not cancel).` } }
    ] },

    { h: R`Preparation of alkenes`, t: [1], blocks: [
      { points: [
        R`<b>From alkynes</b> by partial reduction: with H₂ and <b>Lindlar's catalyst</b> (Pd on CaCO₃ poisoned with quinoline or sulphur) → <b>cis</b>-alkene; with Na in liquid NH₃ → <b>trans</b>-alkene.`,
        R`<b>Dehydrohalogenation</b> of alkyl halides with alcoholic KOH: CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O (β-elimination). Ease: 3° > 2° > 1°; I > Br > Cl.`,
        R`<b>Dehalogenation</b> of vicinal dihalides with zinc: BrCH₂CH₂Br + Zn → CH₂=CH₂ + ZnBr₂.`,
        R`<b>Acidic dehydration</b> of alcohols with conc. H₂SO₄ at 443 K: CH₃CH₂OH → CH₂=CH₂ + H₂O (via a carbocation; ease 3° > 2° > 1°).`
      ] },
      R`<b>Saytzeff (Zaitsev) rule:</b> when more than one alkene can form in an elimination, the <b>more substituted</b> (more stable) alkene is the major product: 2-bromobutane + alc. KOH gives mainly but-2-ene (80%) and some but-1-ene.`,
      { mol: [['CC(Br)CC', '2-bromobutane'], ['CC=CC', 'but-2-ene (major)'], ['C=CCC', 'but-1-ene (minor)']], w: 140, h: 110, cap: R`Elimination follows the Saytzeff rule.` },
      { check: { q: R`What does Lindlar's catalyst give from but-2-yne?`, ans: R`cis-But-2-ene.` } }
    ] },

    { h: R`Electrophilic addition: H₂, halogens, water and hydrogen halides`, t: [1], blocks: [
      R`The π electrons of an alkene attack an electrophile. In the first (slow) step a <b>carbocation</b> forms; in the second, a nucleophile adds to it:`,
      { mol: [['CC=C', 'propene'], ['C[CH+]C', '2° carbocation (more stable)'], ['CC(Br)C', '2-bromopropane (major)']], w: 150, h: 110, cap: R`HBr adds to propene through the more stable secondary carbocation.` },
      { points: [
        R`<b>H₂:</b> CH₂=CH₂ + H₂ → CH₃CH₃ (Pt, Pd or Ni). Syn addition on the catalyst surface.`,
        R`<b>Halogens:</b> CH₂=CH₂ + Br₂ (in CCl₄) → BrCH₂CH₂Br. The reddish-brown colour of bromine disappears: a <b>test for unsaturation</b>. The mechanism goes through a cyclic <b>bromonium ion</b>, so the addition is <b>anti</b>.`,
        R`<b>Hydrogen halides:</b> reactivity HI > HBr > HCl (bond strength decreases). With unsymmetrical alkenes, the orientation follows Markovnikov's rule (next section).`,
        R`<b>Water</b> adds in the presence of acid (next sections).`
      ] },
      { ex: { q: R`What mass of 2-bromopropane is formed from 4.2 g of propene with excess HBr (assume only Markovnikov addition)?`,
        steps: [R`4.2/42 = 0.1 mol propene → 0.1 mol C₃H₇Br (123 g/mol).`, R`0.1 × 123 = 12.3 g.`], ans: R`12.3 g` } },
      { check: { q: R`Why does bromine water lose its colour with ethene?`, ans: R`Br₂ adds across the C=C bond to form colourless 1,2-dibromoethane.` } }
    ] },

    { h: R`Markovnikov's rule and the peroxide effect`, t: [1], blocks: [
      R`<b>Markovnikov's rule:</b> when an unsymmetrical reagent (HX, H₂O) adds to an unsymmetrical alkene, the negative part (X⁻) goes to the carbon with <b>fewer hydrogen atoms</b>. The reason is the stability of the intermediate carbocation: 2° (CH₃–C⁺H–CH₃) is more stable than 1° (CH₃CH₂C⁺H₂).`,
      R`<b>Peroxide (Kharasch) effect:</b> in the presence of an organic peroxide (like benzoyl peroxide), <b>HBr</b> adds in the anti-Markovnikov way: CH₃CH=CH₂ + HBr → CH₃CH₂CH₂Br (1-bromopropane). The mechanism changes to a free-radical chain: Br• adds first to the terminal carbon to give the more stable 2° radical, which then takes H from HBr.`,
      { mol: [['CC=C', 'propene'], ['CC(Br)C', 'HBr: 2-bromopropane'], ['CCCBr', 'HBr + peroxide: 1-bromopropane']], w: 150, h: 110, cap: R`The peroxide effect reverses the orientation of HBr addition.` },
      { mistake: R`Applying the peroxide effect to HCl or HI. It works only for HBr: the H–Cl bond is too strong to be broken by radicals, and the I• radical combines with itself instead of adding to the alkene.` },
      { check: { q: R`What is the major product of 2-methylpropene with HBr (no peroxide)?`, ans: R`2-Bromo-2-methylpropane (via the tertiary carbocation).` } }
    ] },

    { h: R`Addition of HOX`, t: [1], blocks: [
      R`With halogen water (Cl₂ or Br₂ in water), alkenes form <b>halohydrins</b>. The electrophile is X⁺ (from HOX, or via the halonium ion), and water attacks the more substituted carbon: overall Markovnikov orientation with OH on the carbon having fewer H.`,
      { mol: [['CC=C', 'propene'], ['CC(O)CCl', '1-chloropropan-2-ol']], w: 150, h: 110, cap: R`HOCl adds as Cl⁺ and OH⁻: Cl on the terminal carbon, OH on C-2.` },
      { adv: R`Because the reaction goes through a cyclic halonium ion, the halogen and the OH end up anti (trans) to each other in cyclic alkenes: cyclohexene + Br₂/H₂O gives trans-2-bromocyclohexanol.` },
      { check: { q: R`What is the product of ethene with chlorine water?`, ans: R`2-Chloroethanol (ethylene chlorohydrin), ClCH₂CH₂OH.` } }
    ] },

    { h: R`Acid-catalysed hydration`, t: [1], blocks: [
      R`Alkenes add water in the presence of dilute H₂SO₄ (or H₃PO₄) to give alcohols, following Markovnikov's rule. The steps: (1) protonation of the alkene to the more stable carbocation; (2) attack of water; (3) loss of H⁺. Industrially, ethene is converted to ethanol this way. With conc. H₂SO₄, alkyl hydrogen sulphates form first and are hydrolysed by water.`,
      { mol: [['CC(C)=C', '2-methylpropene'], ['CC(C)(C)O', '2-methylpropan-2-ol']], w: 150, h: 110, cap: R`Hydration through the tertiary carbocation.` },
      { tip: R`Since carbocations are involved, look for rearrangements: 3,3-dimethylbut-1-ene + H₂O/H⁺ gives mainly 2,3-dimethylbutan-2-ol after a methyl shift.` },
      { check: { q: R`What alcohol does propene give on acid-catalysed hydration?`, ans: R`Propan-2-ol.` } }
    ] },

    { h: R`Oxidation: KMnO₄ and ozonolysis`, t: [1], blocks: [
      R`<b>Baeyer's reagent</b> (cold, dilute, alkaline KMnO₄) adds two OH groups (syn) to give a 1,2-diol (glycol); its purple colour disappears, another <b>test for unsaturation</b>: CH₂=CH₂ + H₂O + [O] → HOCH₂CH₂OH.`,
      R`<b>Hot, acidic KMnO₄</b> (or K₂Cr₂O₇) cleaves the double bond: =CH₂ → CO₂ + H₂O; =CHR → RCOOH; =CR₂ → R₂C=O. So (CH₃)₂C=CH₂ gives propanone + CO₂ + H₂O.`,
      R`<b>Ozonolysis:</b> O₃ adds to give an ozonide, which is cleaved by Zn/H₂O to aldehydes and/or ketones. Each C=C is replaced by two C=O. It is used to locate the double bond in an unknown alkene.`,
      { mol: [['CC(C)=CCC', '2-methylpent-2-ene'], ['CC(C)=O', 'propanone'], ['CCC=O', 'propanal']], w: 150, h: 110, cap: R`Ozonolysis (O₃, then Zn/H₂O) breaks the C=C: (CH₃)₂C= gives propanone and =CHC₂H₅ gives propanal.` },
      { ex: { q: R`An alkene C₅H₁₀ on ozonolysis gives ethanal and propanone. Identify it.`,
        steps: [R`Join the carbonyl carbons with a C=C: CH₃CH= and =C(CH₃)₂.`], ans: R`2-Methylbut-2-ene, CH₃CH=C(CH₃)₂` } },
      { check: { q: R`What does ethene give with cold alkaline KMnO₄?`, ans: R`Ethane-1,2-diol (ethylene glycol).` } }
    ] },

    { h: R`Polymerisation of alkenes`, t: [1], blocks: [
      R`At high temperature and pressure with a catalyst, many alkene molecules join to form a <b>polymer</b>: n CH₂=CH₂ → –(CH₂–CH₂)ₙ– (polythene). Similarly propene gives polypropene, and chloroethene gives PVC. These are <b>addition polymers</b>, made by a free-radical or Ziegler–Natta mechanism. (See the Polymers chapter.)`,
      { check: { q: R`Name the polymer formed from CH₂=CHCl.`, ans: R`Poly(vinyl chloride), PVC.` } }
    ] },

    { h: R`Alkynes: structure and preparation`, t: [2], blocks: [
      R`Alkynes have a C≡C triple bond: one σ (sp–sp) and two π bonds at right angles. The molecule is linear around the triple bond (H–C≡C–H, 180°), the C≡C bond is short (120 pm) and strong (823 kJ/mol). The cylindrical π cloud is attacked by electrophiles, but less readily than in alkenes.`,
      { points: [
        R`<b>From calcium carbide</b> (ethyne): CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂. CaC₂ is made from quicklime and coke: CaO + 3C → CaC₂ + CO.`,
        R`<b>From vicinal dihalides</b> by double dehydrohalogenation: CH₂Br–CH₂Br + alc. KOH → CH₂=CHBr; then NaNH₂ → CH≡CH.`
      ] },
      R`Alkynes show position and chain isomerism (C₄H₆: but-1-yne and but-2-yne) and functional isomerism with dienes.`,
      { check: { q: R`Why is ethyne a linear molecule?`, ans: R`Each carbon is sp hybridised; the two sp orbitals point 180° apart.` } }
    ] },

    { h: R`Acidic character of alkynes; metal acetylides`, t: [2], blocks: [
      R`A hydrogen on a triply bonded carbon (terminal alkyne, ≡C–H) is <b>weakly acidic</b> (pKa ≈ 25), because the sp carbon has 50% s-character and holds the electron pair of the C–H bond tightly, stabilising the acetylide anion. Acidity: HC≡CH > CH₂=CH₂ > CH₃–CH₃ (pKa ≈ 44, 50).`,
      { points: [R`With sodium or NaNH₂: HC≡CH + Na → HC≡C⁻Na⁺ + ½H₂ (sodium acetylide).`, R`With ammoniacal AgNO₃ (Tollens' reagent): white precipitate of silver acetylide; with ammoniacal Cu₂Cl₂: red copper(I) acetylide. These tests distinguish terminal alkynes (but-1-yne) from internal alkynes (but-2-yne) and alkenes.`, R`Acetylides are strong nucleophiles; with alkyl halides they form longer alkynes: HC≡C⁻Na⁺ + CH₃Br → HC≡C–CH₃ + NaBr.`] },
      { ex: { q: R`What mass of silver acetylide (Ag₂C₂, M = 239.8) forms from 2.6 g of ethyne with excess ammoniacal AgNO₃?`,
        steps: [R`2.6/26 = 0.1 mol C₂H₂ → 0.1 mol Ag₂C₂.`, R`0.1 × 239.8 = 24.0 g.`], ans: R`≈ 24 g` } },
      { check: { q: R`How can but-1-yne be distinguished from but-2-yne?`, ans: R`But-1-yne (terminal) gives a white precipitate with ammoniacal AgNO₃; but-2-yne does not.` } }
    ] },

    { h: R`Addition reactions of alkynes`, t: [2], blocks: [
      { points: [
        R`<b>Hydrogen:</b> HC≡CH + H₂ → CH₂=CH₂ → CH₃CH₃ (Pt/Pd/Ni); partial reduction with Lindlar's catalyst or Na/NH₃ (next section).`,
        R`<b>Halogens:</b> HC≡CH + Br₂ → CHBr=CHBr → CHBr₂CHBr₂ (decolourises bromine).`,
        R`<b>Hydrogen halides</b> (Markovnikov, twice): CH₃C≡CH + HBr → CH₃CBr=CH₂ → CH₃CBr₂CH₃ (gem-dihalide).`,
        R`<b>Water</b> (hydration with dil. H₂SO₄ and HgSO₄ at 333 K): HC≡CH + H₂O → [CH₂=CHOH] (enol) → CH₃CHO (ethanal). Other alkynes give ketones: propyne → propanone.`
      ] },
      { mol: [['C#C', 'ethyne'], ['C=CO', 'ethenol (enol)'], ['CC=O', 'ethanal']], w: 140, h: 110, cap: R`Hydration of ethyne goes through an unstable enol that tautomerises to ethanal.` },
      { check: { q: R`What is the product of propyne with dilute H₂SO₄ and HgSO₄?`, ans: R`Propanone (acetone).` } }
    ] },

    { h: R`Reduction of alkenes and alkynes`, t: [2], blocks: [
      { table: { head: [R`Reagent`, R`Substrate`, R`Product`], rows: [
        [R`H₂/Pt, Pd or Ni (excess)`, R`alkyne or alkene`, R`alkane`],
        [R`H₂/Lindlar's catalyst (Pd–CaCO₃–quinoline)`, R`alkyne`, R`cis-alkene (syn addition)`],
        [R`Na or Li in liquid NH₃ (Birch-type)`, R`alkyne`, R`trans-alkene (anti addition)`],
        [R`H₂/Ni, 523–573 K`, R`alkene`, R`alkane (Sabatier–Senderens)`]] } },
      { mol: [['CC#CC', 'but-2-yne'], ['C/C=C\\C', 'Lindlar → cis'], ['C/C=C/C', 'Na/NH₃ → trans']], w: 140, h: 110, cap: R`The choice of reducing agent fixes the geometry of the alkene.` },
      { check: { q: R`Which reagent converts pent-2-yne into trans-pent-2-ene?`, ans: R`Sodium in liquid ammonia.` } }
    ] },

    { h: R`Polymerisation and cyclic polymerisation of alkynes`, t: [2], blocks: [
      R`Ethyne polymerises in several ways. <b>Linear polymerisation</b> gives polyacetylene, –(CH=CH)ₙ–, a polymer that conducts electricity when doped. <b>Cyclic polymerisation:</b> passing ethyne through a red-hot iron tube at 873 K joins three molecules into <b>benzene</b>: 3HC≡CH → C₆H₆. Propyne similarly gives 1,3,5-trimethylbenzene (mesitylene).`,
      { mol: [['C#C', '3 × ethyne'], ['C1=CC=CC=C1', 'benzene']], w: 130, h: 110, cap: R`Cyclic trimerisation of ethyne (red-hot Fe tube, 873 K).` },
      { check: { q: R`What is formed when propyne is passed through a red-hot iron tube?`, ans: R`1,3,5-Trimethylbenzene (mesitylene).` } }
    ] },

    { h: R`Aromatic hydrocarbons: nomenclature and isomerism`, t: [3], blocks: [
      R`Aromatic hydrocarbons (arenes) contain one or more benzene rings: benzene, toluene (methylbenzene), xylenes (dimethylbenzenes), naphthalene and anthracene. Disubstituted benzenes have three position isomers: 1,2- (ortho), 1,3- (meta) and 1,4- (para).`,
      { mol: [['CC1=CC=CC=C1C', 'o-xylene (1,2-)'], ['CC1=CC=CC(C)=C1', 'm-xylene (1,3-)'], ['CC1=CC=C(C)C=C1', 'p-xylene (1,4-)']], w: 140, h: 120, cap: R`The three isomeric xylenes, C₈H₁₀ (ethylbenzene is a fourth aromatic isomer).` },
      { check: { q: R`How many isomeric dichlorobenzenes are there?`, ans: R`Three: 1,2-, 1,3- and 1,4-dichlorobenzene.` } }
    ] },

    { h: R`Structure of benzene; resonance and aromaticity`, t: [3], blocks: [
      R`Benzene, C₆H₆, has a planar, regular hexagonal ring; all C–C bonds are equal (139 pm, between single 154 pm and double 134 pm), and each C is sp². Kekulé proposed two structures with alternating double bonds; the real molecule is their <b>resonance hybrid</b>. The six p orbitals overlap all round the ring, giving a delocalised π cloud above and below the plane.`,
      { fig: figKekule, cap: R`The two Kekulé structures (double bonds in different places) and the resonance hybrid, drawn as a hexagon with a circle.` },
      R`<b>Resonance energy:</b> hydrogenation of cyclohexene releases 119.5 kJ/mol. For a hypothetical "cyclohexatriene" we expect 3 × 119.5 = 358.5 kJ/mol, but benzene releases only 208.4 kJ/mol. Benzene is thus about <b>150 kJ/mol</b> more stable; this is why it prefers substitution to addition.`,
      R`<b>Aromaticity (Hückel's rule):</b> a compound is aromatic if it is cyclic, planar, fully conjugated (every ring atom has a p orbital) and has <b>(4n + 2) π electrons</b> (n = 0, 1, 2…). Benzene (6), naphthalene (10), the cyclopentadienyl anion (6), the tropylium cation (6) and pyridine (6) are aromatic. Cyclobutadiene (4π) and cyclooctatetraene (8π, non-planar) are not.`,
      { check: { q: R`Is the cyclopentadienyl anion aromatic?`, ans: R`Yes: cyclic, planar, conjugated, with 6 π electrons (4n + 2, n = 1).` } }
    ] },

    { h: R`Mechanism of electrophilic substitution`, t: [3], blocks: [
      R`Benzene's π cloud attracts electrophiles, but addition would destroy the stable aromatic system. So arenes undergo <b>electrophilic aromatic substitution (SE)</b>, in three steps:`,
      { fig: figEAS, cap: R`The general mechanism of electrophilic substitution in benzene.` },
      { mol: [['C1=CC=CC=C1', 'benzene'], ['O=[N+]([O-])C1C=CC=C[CH+]1', 'arenium ion (σ-complex)'], ['O=[N+]([O-])C1=CC=CC=C1', 'nitrobenzene']], w: 150, h: 120, cap: R`Nitration: NO₂⁺ adds to form the arenium ion; loss of H⁺ restores the aromatic ring.` },
      { check: { q: R`Which step of electrophilic substitution is rate-determining?`, ans: R`Formation of the arenium ion (σ-complex), which breaks the aromaticity.` } }
    ] },

    { h: R`Halogenation, nitration and sulphonation`, t: [3], blocks: [
      { table: { head: [R`Reaction`, R`Reagents`, R`Electrophile`, R`Product`], rows: [
        [R`Halogenation`, R`Cl₂ or Br₂ with Lewis acid (FeCl₃, FeBr₃, AlCl₃), dark`, R`Cl⁺ (from Cl₂ + FeCl₃ → Cl⁺ + FeCl₄⁻)`, R`chlorobenzene`],
        [R`Nitration`, R`conc. HNO₃ + conc. H₂SO₄ (nitrating mixture), 323–333 K`, R`NO₂⁺ (nitronium ion)`, R`nitrobenzene`],
        [R`Sulphonation`, R`fuming H₂SO₄ (oleum), heat`, R`SO₃`, R`benzenesulphonic acid (reversible)`]] } },
      R`In the presence of sunlight (no Lewis acid), benzene instead <b>adds</b> chlorine to give benzene hexachloride (C₆H₆Cl₆, BHC, gammaxene, an insecticide): a free-radical addition. Benzene also adds H₂ (Ni, 500 K) to give cyclohexane, and burns with a sooty flame.`,
      { ex: { q: R`What mass of nitrobenzene is obtained from 7.8 g of benzene (100% yield)?`,
        steps: [R`C₆H₆ (78) → C₆H₅NO₂ (123); 7.8/78 = 0.1 mol.`, R`0.1 × 123 = 12.3 g.`], ans: R`12.3 g` } },
      { check: { q: R`Name the electrophile in the nitration of benzene and how it forms.`, ans: R`Nitronium ion NO₂⁺: HNO₃ + 2H₂SO₄ ⇌ NO₂⁺ + H₃O⁺ + 2HSO₄⁻.` } }
    ] },

    { h: R`Friedel–Crafts alkylation and acylation`, t: [3], blocks: [
      R`<b>Friedel–Crafts alkylation:</b> benzene + an alkyl halide with anhydrous AlCl₃ gives an alkylbenzene: C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl. The electrophile is R⁺ (CH₃Cl + AlCl₃ → CH₃⁺ + AlCl₄⁻).`,
      R`<b>Friedel–Crafts acylation:</b> with an acid chloride or anhydride and AlCl₃: C₆H₆ + CH₃COCl → C₆H₅COCH₃ (acetophenone) + HCl. The electrophile is the acylium ion, CH₃C≡O⁺.`,
      { mol: [['CC(=O)C1=CC=CC=C1', 'acetophenone (acylation)'], ['CC(C)C1=CC=CC=C1', 'isopropylbenzene from 1-chloropropane (rearranged)']], w: 170, h: 120, cap: R`Acylation gives a ketone; alkylation with a primary halide can give a rearranged product.` },
      { points: [R`Alkylation has drawbacks: the product (alkylbenzene) is more reactive than benzene, so <b>polyalkylation</b> occurs; and the carbocation can <b>rearrange</b> (n-propyl chloride gives isopropylbenzene).`, R`Acylation avoids both: the acyl group deactivates the ring, and acylium ions do not rearrange. The ketone can then be reduced (Clemmensen) to the straight-chain alkylbenzene.`, R`Friedel–Crafts reactions fail with strongly deactivated rings (nitrobenzene) and with rings bearing –NH₂ (which reacts with AlCl₃).`] },
      { check: { q: R`Why is nitrobenzene used as a solvent for Friedel–Crafts reactions?`, ans: R`Its strongly deactivated ring does not itself undergo Friedel–Crafts substitution.` } }
    ] },

    { h: R`Directive influence: ortho/para- and meta-directing groups`, t: [4], blocks: [
      R`A group already on the ring decides where the next electrophile goes:`,
      { points: [
        R`<b>Ortho/para directors:</b> –OH, –O⁻, –NH₂, –NHR, –NR₂, –OCH₃, –NHCOCH₃, –CH₃ and other alkyl groups, and the halogens. They have a lone pair (or hyperconjugation for alkyl) that increases electron density at the ortho and para positions by resonance (+R).`,
        R`<b>Meta directors:</b> –NO₂, –CN, –CHO, –COR, –COOH, –COOR, –SO₃H, –NR₃⁺, –CCl₃. They withdraw electrons by resonance (−R) or induction, decreasing electron density most at ortho and para, so the meta position is relatively richest.`
      ] },
      { mol: [['NC1=CC=CC=C1', 'aniline'], ['[NH2+]=C1C=CC=C[CH-]1', '− at ortho'], ['[NH2+]=C1C=C[CH-]C=C1', '− at para']], w: 140, h: 120, cap: R`Resonance in aniline puts extra electron density on the ortho and para carbons.` },
      { check: { q: R`Where will nitration of nitrobenzene put the second –NO₂ group?`, ans: R`Meta: the product is 1,3-dinitrobenzene.` } }
    ] },

    { h: R`Activating and deactivating groups`, t: [4], blocks: [
      R`Groups also change the <b>rate</b> of substitution compared with benzene:`,
      { table: { head: [R`Effect`, R`Groups`, R`Directing`], rows: [
        [R`Strongly activating`, R`–NH₂, –NHR, –NR₂, –OH, –O⁻`, R`ortho/para`],
        [R`Moderately activating`, R`–OCH₃, –NHCOCH₃`, R`ortho/para`],
        [R`Weakly activating`, R`–CH₃, –C₂H₅ (alkyl), –C₆H₅`, R`ortho/para`],
        [R`Weakly deactivating`, R`–F, –Cl, –Br, –I`, R`ortho/para`],
        [R`Moderately/strongly deactivating`, R`–CHO, –COR, –COOH, –CN, –SO₃H, –NO₂, –NR₃⁺`, R`meta`]] } },
      R`<b>Halogens are an exception:</b> their strong −I effect withdraws electrons and deactivates the ring, but their +R effect (lone pairs) still directs to ortho and para positions. Activating groups make reactions so fast that phenol and aniline react with bromine water at room temperature to give 2,4,6-tribromo products.`,
      { tip: R`When two groups are present, the more strongly activating group wins the directing contest, and substitution between two meta-related groups is sterically hindered.` },
      { check: { q: R`Why is chlorobenzene ortho/para directing even though it is deactivated?`, ans: R`The −I effect of Cl deactivates the ring, but its +R effect (lone pair donation) stabilises the ortho and para arenium ions.` } }
    ] }
  ],
  summary: [
    R`Alkanes CₙH₂ₙ₊₂: branching lowers bp; prepared by hydrogenation, Wurtz (R–R), decarboxylation (one C less), Kolbe electrolysis.`,
    R`Conformations: ethane staggered more stable (12.5 kJ/mol barrier); butane anti > gauche > eclipsed > fully eclipsed.`,
    R`Alkane halogenation: free-radical chain (initiation, propagation, termination); allylic/benzylic positions react easily (NBS).`,
    R`Alkenes: preparation by Lindlar (cis), Na/NH₃ (trans), dehydrohalogenation (Saytzeff), dehydration. Electrophilic addition via carbocations; Markovnikov; peroxide effect only for HBr.`,
    R`Oxidation: Baeyer's reagent (diol, test), hot KMnO₄ (cleavage), ozonolysis (Zn/H₂O → carbonyls).`,
    R`Alkynes: terminal H acidic (sp, 50% s); white Ag acetylide test; hydration (HgSO₄) → aldehyde/ketone via enol; 3C₂H₂ → C₆H₆ (red-hot Fe).`,
    R`Benzene: resonance hybrid, 139 pm bonds, resonance energy ~150 kJ/mol; Hückel (4n + 2) π electrons. Electrophilic substitution via arenium ion.`,
    R`Halogenation (FeCl₃), nitration (NO₂⁺), sulphonation (SO₃), Friedel–Crafts alkylation (polyalkylation, rearrangement) and acylation.`,
    R`o/p directors: –OH, –NH₂, –OR, alkyl, halogens (halogens deactivate). Meta directors: –NO₂, –CN, –CHO, –COOH, –SO₃H.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §20.1 Hydrocarbons`, url: 'https://openstax.org/books/chemistry-2e/pages/20-1-hydrocarbons' },
    { t: R`OpenStax Organic Chemistry, §3.6 Conformations of Ethane`, url: 'https://openstax.org/books/organic-chemistry/pages/3-6-conformations-of-ethane' },
    { t: R`OpenStax Organic Chemistry, §7.8 Orientation of Electrophilic Additions: Markovnikov's Rule`, url: 'https://openstax.org/books/organic-chemistry/pages/7-8-orientation-of-electrophilic-additions-markovnikovs-rule' },
    { t: R`OpenStax Organic Chemistry, §16.1 Electrophilic Aromatic Substitution`, url: 'https://openstax.org/books/organic-chemistry/pages/16-1-electrophilic-aromatic-substitution-reactions-bromination' },
    { t: R`Wikipedia: Ozonolysis`, url: 'https://en.wikipedia.org/wiki/Ozonolysis' },
    { t: R`Wikipedia: Hückel's rule`, url: 'https://en.wikipedia.org/wiki/H%C3%BCckel%27s_rule' }
  ]
});
})();
