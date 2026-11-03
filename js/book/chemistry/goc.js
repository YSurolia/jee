// Book chapter: Organic Chemistry – Some Basic Principles and Techniques (General Organic Chemistry). Full theory with structures.
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function mol(w, h, o, label) { return D.svg(w, h, [D.mol(o)].concat(o.more || []), label); }

// ---------- figures (3D shapes and intermediates are drawn by hand; skeletal structures use SMILES blocks) ----------
var figHyb = D.row([
  [mol(150, 140, { atoms: [{ x: 75, y: 70, s: 'C' }, { x: 75, y: 18, s: 'H' }, { x: 25, y: 100, s: 'H' }, { x: 125, y: 108, s: 'H' }, { x: 132, y: 70, s: 'H' }], bonds: [[0, 1], [0, 2], [0, 3, 'w'], [0, 4, 'h']], more: [lab(75, 132, '109.5°, tetrahedral', 'm', 9)] }, 'methane'), R`CH₄: sp³`],
  [mol(190, 140, { atoms: [{ x: 70, y: 70, s: 'C' }, { x: 120, y: 70, s: 'C' }, { x: 40, y: 30, s: 'H' }, { x: 40, y: 110, s: 'H' }, { x: 150, y: 30, s: 'H' }, { x: 150, y: 110, s: 'H' }], bonds: [[0, 1, 2], [0, 2], [0, 3], [1, 4], [1, 5]], more: [lab(95, 132, '120°, planar', 'm', 9)] }, 'ethene'), R`C₂H₄: sp²`],
  [mol(200, 140, { atoms: [{ x: 20, y: 70, s: 'H' }, { x: 70, y: 70, s: 'C' }, { x: 130, y: 70, s: 'C' }, { x: 180, y: 70, s: 'H' }], bonds: [[0, 1], [1, 2, 3], [2, 3]], more: [lab(100, 132, '180°, linear', 'm', 9)] }, 'ethyne'), R`C₂H₂: sp`]
]);

function inter(cx, title, sub, kind) {
  var planar = kind !== '−', out = [];
  var at = planar
    ? [{ x: cx, y: 70, s: 'C', color: kind === '+' ? 'r' : 'o' }, { x: cx - 50, y: 74, s: 'R' }, { x: cx + 36, y: 98, s: 'R' }, { x: cx + 38, y: 50, s: 'R' }]
    : [{ x: cx, y: 62, s: 'C', color: 'b' }, { x: cx - 45, y: 92, s: 'R' }, { x: cx + 45, y: 92, s: 'R' }, { x: cx, y: 110, s: 'R' }];
  if (planar) {
    var c = kind === '+' ? 'r' : 'o';
    out.push(D.lobe(cx, 60, 30, 18, 90, { color: c }), D.lobe(cx, 80, 30, 18, 270, { color: c }));
    if (kind === '•') out.push(D.dot(cx, 40, { r: 3.2, color: 'o' }));
    else out.push(lab(cx - 18, 52, '+', 'r', 15, { bold: true }));
  } else {
    out.push(D.dot(cx - 4, 40, { r: 3, color: 'b' }), D.dot(cx + 4, 40, { r: 3, color: 'b' }), lab(cx + 16, 44, '−', 'b', 14, { bold: true }));
  }
  out.push(D.mol({ atoms: at, bonds: planar ? [[0, 1], [0, 2, 'w'], [0, 3, 'h']] : [[0, 1], [0, 2], [0, 3, 'w']] }));
  out.push(lab(cx, 140, title, 'k', 10, { bold: true }), lab(cx, 154, sub, 'm', 9));
  return out.join('');
}
var figInter = D.svg(480, 170, [inter(80, 'carbocation', 'sp², planar, empty p', '+'), inter(240, 'free radical', 'sp², planar, 1 e⁻ in p', '•'), inter(400, 'carbanion', 'sp³, pyramidal, lone pair', '−')], 'Reactive intermediates');

var figInductive = D.svg(460, 110, [
  lab(60, 40, 'Cl', 'g', 14, { bold: true }), D.line(72, 40, 110, 40, { w: 2 }), lab(124, 40, 'C₁', 'k', 13, { bold: true }), D.line(138, 40, 178, 40, { w: 2 }), lab(192, 40, 'C₂', 'k', 13, { bold: true }), D.line(206, 40, 246, 40, { w: 2 }), lab(260, 40, 'C₃', 'k', 13, { bold: true }),
  D.arrow(100, 52, 80, 52, { color: 'r', head: 6 }), D.arrow(168, 52, 148, 52, { color: 'r', head: 6, w: 1.4 }), D.arrow(236, 52, 216, 52, { color: 'r', head: 5, w: 1 }),
  lab(60, 20, 'δ⁻', 'g', 11), lab(124, 20, 'δ⁺', 'r', 11), lab(192, 20, 'δδ⁺', 'r', 10), lab(260, 20, 'δδδ⁺', 'r', 9),
  lab(370, 34, 'effect weakens quickly', 'm', 10), lab(370, 48, 'along the chain', 'm', 10), lab(370, 62, '(negligible after C₃)', 'm', 9),
  lab(230, 92, '−I group pulls σ-electrons towards itself, permanently polarising the chain', 'm', 9)
], 'Inductive effect');

var figHyper = D.svg(440, 150, [
  D.mol({ atoms: [{ x: 70, y: 75, s: 'C' }, { x: 140, y: 75, s: 'C', color: 'r', q: '+' }, { x: 70, y: 25, s: 'H', color: 'b' }, { x: 25, y: 100, s: 'H' }, { x: 115, y: 105, s: 'H' }, { x: 185, y: 50, s: 'H' }, { x: 185, y: 100, s: 'H' }],
    bonds: [[0, 1], [0, 2, 1, 'b'], [0, 3], [0, 4], [1, 5], [1, 6]] }),
  D.path('M78,32 C110,30 130,45 135,62', { color: 'o', w: 1.8 }), D.arrow(130, 54, 136, 64, { color: 'o', head: 7 }),
  lab(260, 30, 'σ electrons of the C–H bond', 'o', 10, { anchor: 'start' }), lab(260, 46, 'overlap with the empty p', 'o', 10, { anchor: 'start' }), lab(260, 62, 'orbital of C⁺ (delocalisation)', 'o', 10, { anchor: 'start' }),
  lab(260, 96, 'more α-H atoms →', 'm', 10, { anchor: 'start' }), lab(260, 112, 'more hyperconjugative structures', 'm', 10, { anchor: 'start' }), lab(260, 128, '→ more stable', 'm', 10, { anchor: 'start' })
], 'Hyperconjugation in the ethyl cation');

var figFission = D.svg(470, 130, [
  lab(10, 30, 'homolytic:', 'o', 11, { anchor: 'start', bold: true }), lab(110, 30, 'A : B', 'k', 13, { anchor: 'start', bold: true }), D.arrow(165, 30, 205, 30, { color: 'm' }), lab(215, 30, 'A•  +  •B', 'k', 13, { anchor: 'start', bold: true }), lab(320, 30, 'free radicals (heat, light)', 'm', 10, { anchor: 'start' }),
  D.path('M128,18 C124,4 116,6 116,16', { color: 'o', w: 1.4 }), D.path('M128,18 C134,4 142,6 142,16', { color: 'o', w: 1.4 }),
  lab(10, 90, 'heterolytic:', 'p', 11, { anchor: 'start', bold: true }), lab(110, 90, 'A : B', 'k', 13, { anchor: 'start', bold: true }), D.arrow(165, 90, 205, 90, { color: 'm' }), lab(215, 90, 'A⁺  +  :B⁻', 'k', 13, { anchor: 'start', bold: true }), lab(320, 84, 'ions (polar solvents);', 'm', 10, { anchor: 'start' }), lab(320, 98, 'B is more electronegative', 'm', 10, { anchor: 'start' }),
  D.path('M130,78 C134,62 146,64 146,76', { color: 'p', w: 1.4 }), D.arrow(144, 72, 146, 78, { color: 'p', head: 6 }),
  lab(235, 122, 'fish-hook (half) arrow = 1 electron; full arrow = 2 electrons', 'm', 9)
], 'Bond fission');

// ---------- chapter text ----------
JEE.book('chemistry', 'goc', {
  intro: [
    R`Organic chemistry is the chemistry of carbon compounds. Carbon forms more compounds than all other elements put together, because it can bond to itself in chains and rings (catenation) and form strong single, double and triple bonds.`,
    R`This chapter lays the foundation for all of organic chemistry: the shapes of molecules, how compounds are classified and named, the many kinds of isomerism, how bonds break, the reactive intermediates formed, and the electronic effects (inductive, resonance, hyperconjugation) that control acidity, basicity and reactivity.`
  ],
  sections: [
    { h: R`Tetravalency of carbon and hybridisation`, t: [0], blocks: [
      R`Carbon (1s² 2s² 2p²) is <b>tetravalent</b>: it forms four covalent bonds by mixing (hybridising) its 2s and 2p orbitals. The type of hybridisation fixes the shape:`,
      { fig: figHyb, cap: R`sp³ carbons are tetrahedral, sp² carbons trigonal planar, sp carbons linear.` },
      { table: { head: [R`Hybridisation`, R`s-character`, R`Shape, angle`, R`C–C bond length`, R`Example`], rows: [
        [R`sp³`, R`25%`, R`tetrahedral, 109.5°`, R`154 pm`, R`CH₄, C₂H₆`],
        [R`sp²`, R`33%`, R`trigonal planar, 120°`, R`134 pm (C=C)`, R`C₂H₄, benzene (139 pm)`],
        [R`sp`, R`50%`, R`linear, 180°`, R`120 pm (C≡C)`, R`C₂H₂, CO₂`]] } },
      R`Greater s-character means the orbital is closer to the nucleus, so the carbon is <b>more electronegative</b> (sp > sp² > sp³) and its bonds are shorter and stronger. This is why ethyne's H is weakly acidic (HC≡CH + NaNH₂ → HC≡C⁻Na⁺ + NH₃) while ethane's is not.`,
      { tip: R`Count hybridisation quickly: number of σ bonds + lone pairs on the atom = 4 → sp³, 3 → sp², 2 → sp.` },
      { check: { q: R`State the hybridisation of each carbon in CH₂=CH–C≡N.`, ans: R`sp², sp², sp.` } }
    ] },

    { h: R`σ and π bonds`, t: [0], blocks: [
      R`A <b>σ (sigma) bond</b> is formed by head-on overlap of orbitals along the internuclear axis; every single bond is a σ bond, and free rotation is possible about it. A <b>π (pi) bond</b> is formed by sideways overlap of parallel p orbitals above and below the axis. A double bond = 1σ + 1π; a triple bond = 1σ + 2π. π bonds prevent rotation (hence cis–trans isomerism) and their electrons are more exposed, so π bonds are the reactive centres of alkenes and alkynes.`,
      { ex: { q: R`Count the σ and π bonds in CH₂=CH–C≡N (acrylonitrile).`,
        steps: [R`σ: 3 C–H + C=C (1) + C–C (1) + C≡N (1) = 6.`, R`π: C=C (1) + C≡N (2) = 3.`], ans: R`6 σ, 3 π` } },
      R`<b>Degree of unsaturation</b> (double bond equivalents, DBE) gives the number of rings + π bonds from a molecular formula CₐHᵦNᵧXₓ: DBE = a − (b + x)/2 + y/2 + 1. Benzene C₆H₆: 6 − 3 + 1 = 4 (one ring + three π bonds).`,
      { check: { q: R`Find the DBE of C₄H₆.`, ans: R`4 − 3 + 1 = 2 (e.g. a triple bond, two double bonds, or a ring + double bond).` } }
    ] },

    { h: R`Classification of organic compounds`, t: [1], blocks: [
      R`By <b>structure</b>, organic compounds are acyclic (open chain, aliphatic) or cyclic. Cyclic compounds are <b>alicyclic</b> (carbocyclic rings that behave like aliphatic compounds), <b>aromatic</b> (benzene and its derivatives: benzenoid; also non-benzenoid like tropolone) or <b>heterocyclic</b> (rings containing atoms other than carbon, like O, N, S).`,
      { mol: [['CC(C)CC', 'acyclic: 2-methylbutane'], ['C1CCCCC1', 'alicyclic: cyclohexane'], ['C1=CC=CC=C1', 'aromatic: benzene'], ['C1=CC=NC=C1', 'heterocyclic: pyridine'], ['C1=COC=C1', 'heterocyclic: furan']], w: 150, h: 120, cap: R`Examples of the structural classes.` },
      R`By <b>functional group</b>: a functional group is an atom or group of atoms that determines the characteristic chemical properties of the compound.`,
      { table: { head: [R`Class`, R`Functional group`, R`Example`], rows: [
        [R`Alkene / alkyne`, R`C=C / C≡C`, R`CH₂=CH₂, HC≡CH`], [R`Haloalkane`, R`–X`, R`CH₃Cl`], [R`Alcohol`, R`–OH`, R`C₂H₅OH`], [R`Ether`, R`–O–`, R`CH₃OCH₃`],
        [R`Aldehyde`, R`–CHO`, R`CH₃CHO`], [R`Ketone`, R`>C=O`, R`CH₃COCH₃`], [R`Carboxylic acid`, R`–COOH`, R`CH₃COOH`], [R`Ester`, R`–COOR`, R`CH₃COOC₂H₅`],
        [R`Acid chloride / amide`, R`–COCl / –CONH₂`, R`CH₃COCl, CH₃CONH₂`], [R`Amine`, R`–NH₂`, R`CH₃NH₂`], [R`Nitrile`, R`–C≡N`, R`CH₃CN`], [R`Nitro compound`, R`–NO₂`, R`C₆H₅NO₂`], [R`Sulphonic acid / thiol`, R`–SO₃H / –SH`, R`C₆H₅SO₃H, C₂H₅SH`]] } },
      { check: { q: R`Is cyclohexane aromatic?`, ans: R`No. It is alicyclic: a saturated carbocyclic ring with no delocalised π system.` } }
    ] },

    { h: R`Homologous series`, t: [1], blocks: [
      R`A <b>homologous series</b> is a group of compounds with the same functional group and general formula, in which successive members differ by a –CH₂– unit (14 mass units). Examples: alkanes CₙH₂ₙ₊₂, alkenes CₙH₂ₙ, alcohols CₙH₂ₙ₊₁OH, aldehydes CₙH₂ₙ₊₁CHO, carboxylic acids CₙH₂ₙ₊₁COOH.`,
      { points: [R`Members have similar chemical properties (same functional group) and can be prepared by similar general methods.`, R`Physical properties (boiling point, density) change gradually with molar mass.`, R`They can be represented by a general formula.`] },
      { check: { q: R`What is the mass difference between successive members of a homologous series?`, ans: R`14 u (one CH₂ unit).` } }
    ] },

    { h: R`Nomenclature: common names and IUPAC rules for hydrocarbons`, t: [1], blocks: [
      R`Many compounds have <b>trivial (common) names</b> based on their source: formic acid (from ants, Latin formica), acetic acid (vinegar, acetum), citric acid (citrus). Common names for alkyl groups: isopropyl (CH₃)₂CH–, sec-butyl CH₃CH₂CH(CH₃)–, isobutyl (CH₃)₂CHCH₂–, tert-butyl (CH₃)₃C–, neopentyl (CH₃)₃CCH₂–.`,
      R`<b>IUPAC system:</b> a name has a <b>word root</b> (chain length: meth, eth, prop, but, pent, hex…), a <b>primary suffix</b> (-ane, -ene, -yne), a <b>secondary suffix</b> for the principal functional group, and <b>prefixes</b> for substituents.`,
      { points: [
        R`Select the <b>longest chain</b> (parent chain) containing the principal group and the maximum number of multiple bonds.`,
        R`Number it to give the lowest locants to: the principal functional group, then multiple bonds, then substituents (the <b>lowest set of locants</b> rule).`,
        R`Name substituents in <b>alphabetical order</b> with their locants (prefixes di-, tri-, sec-, tert- are ignored for alphabetising; iso and neo are not).`,
        R`For cyclic compounds, the ring is the parent if it has more carbons than the chain (or carries the principal group): cyclo + root.`
      ] },
      { mol: [['CCC(C)CC(C)C', '2,4-dimethylhexane'], ['CC=CC(C)C', '4-methylpent-2-ene'], ['CC1CCCC1C', '1,2-dimethylcyclopentane']], w: 170, h: 120, cap: R`Applying the rules: lowest locants to the substituents and to the double bond.` },
      { check: { q: R`Name (CH₃)₃C–CH₂–CH₃ by the IUPAC system.`, ans: R`2,2-Dimethylbutane.` } }
    ] },

    { h: R`Nomenclature of compounds with functional groups`, t: [1], blocks: [
      R`When a compound has more than one functional group, the <b>principal group</b> (named as the suffix) is chosen by this priority; the others are named as prefixes:`,
      R`–COOH > –SO₃H > –COOR > –COCl > –CONH₂ > –CN > –CHO > >C=O > –OH > –NH₂ > C=C > C≡C. Halogens (halo), –NO₂ (nitro), –OR (alkoxy) and alkyl groups are always prefixes.`,
      { table: { head: [R`Compound`, R`IUPAC name`], rows: [
        [R`CH₃CH(OH)CH₃`, R`propan-2-ol`], [R`CH₃COCH₂CH₃`, R`butan-2-one`], [R`CH₂=CHCHO`, R`prop-2-enal`], [R`HOCH₂CH₂COOH`, R`3-hydroxypropanoic acid`],
        [R`CH₃COCH₂COOH`, R`3-oxobutanoic acid`], [R`NCCH₂CH₂CN`, R`butanedinitrile`], [R`CH₃CH(NH₂)COOH`, R`2-aminopropanoic acid`], [R`CH₃OCH₂CH₃`, R`methoxyethane`], [R`ClCH₂CH₂OH`, R`2-chloroethan-1-ol`]] } },
      { mol: [['OC(=O)CC(=O)C', '3-oxobutanoic acid'], ['OCC=CC(=O)O', '4-hydroxybut-2-enoic acid'], ['NC1=CC=C(C=C1)C(=O)O', '4-aminobenzoic acid']], w: 180, h: 130, cap: R`The principal group (–COOH here) gives the suffix and gets the lowest locant (C-1).` },
      R`<b>Benzene derivatives:</b> for disubstituted benzenes, positions 1,2- (ortho, o-), 1,3- (meta, m-), 1,4- (para, p-). Common names like toluene (methylbenzene), phenol, aniline, benzaldehyde, benzoic acid are accepted.`,
      { check: { q: R`Name CH₃–CH(OH)–CH₂–CHO.`, ans: R`3-Hydroxybutanal (–CHO is the principal group).` } }
    ] },

    { h: R`Structural isomerism`, t: [2], blocks: [
      R`<b>Isomers</b> have the same molecular formula but different properties. In <b>structural isomers</b> the atoms are connected differently:`,
      { points: [
        R`<b>Chain isomerism:</b> different carbon skeletons: pentane, 2-methylbutane and 2,2-dimethylpropane (C₅H₁₂).`,
        R`<b>Position isomerism:</b> same skeleton, different position of a functional group or multiple bond: propan-1-ol and propan-2-ol.`,
        R`<b>Functional group isomerism:</b> different functional groups: ethanol and methoxymethane (C₂H₆O); propanal and propanone (C₃H₆O).`,
        R`<b>Metamerism:</b> different alkyl groups on either side of a polyvalent functional group: methoxypropane CH₃OC₃H₇ and ethoxyethane C₂H₅OC₂H₅.`,
        R`<b>Tautomerism:</b> isomers that readily interconvert by migration of an H atom, existing in dynamic equilibrium, e.g. keto–enol tautomerism.`
      ] },
      { mol: [['CC(=O)C', 'keto form (propanone)'], ['CC(O)=C', 'enol form (prop-1-en-2-ol)']], w: 170, h: 110, cap: R`Keto–enol tautomerism: the keto form strongly predominates for simple ketones. It needs an α-hydrogen.` },
      { ex: { q: R`How many structural isomers are possible for C₄H₁₀O that are alcohols?`,
        steps: [R`Straight chain: butan-1-ol, butan-2-ol.`, R`Branched: 2-methylpropan-1-ol, 2-methylpropan-2-ol.`], ans: R`4 (plus 3 ethers as functional isomers)` } },
      { check: { q: R`What type of isomerism exists between ethanol and methoxymethane?`, ans: R`Functional group isomerism.` } }
    ] },

    { h: R`Geometrical (cis–trans) isomerism`, t: [2], blocks: [
      R`<b>Stereoisomers</b> have the same connectivity but a different arrangement of atoms in space. Because there is no free rotation about a C=C double bond (or in a ring), groups can be on the same side (<b>cis</b>) or opposite sides (<b>trans</b>). This requires that <b>each</b> doubly bonded carbon carries two different groups: abC=Cab or abC=Cde.`,
      { mol: [['C/C=C\\C', 'cis-but-2-ene'], ['C/C=C/C', 'trans-but-2-ene']], w: 170, h: 110, cap: R`cis- and trans-but-2-ene are different compounds with different physical properties.` },
      { points: [R`Cis isomers usually have higher dipole moments and boiling points (cis-but-2-ene bp 277 K, trans 274 K).`, R`Trans isomers pack better in crystals, so they usually have higher melting points.`, R`For more complex alkenes, the <b>E/Z</b> system is used: rank the two groups on each carbon by CIP priority (higher atomic number first); Z (zusammen) if the higher-priority groups are on the same side, E (entgegen) if opposite.`] },
      { check: { q: R`Can propene (CH₃CH=CH₂) show geometrical isomerism?`, ans: R`No: one carbon carries two identical H atoms.` } }
    ] },

    { h: R`Optical isomerism: chirality and enantiomers`, t: [2], blocks: [
      R`Some compounds rotate the plane of <b>plane-polarised light</b>: they are <b>optically active</b>. Dextrorotatory (d, +) compounds rotate it clockwise, laevorotatory (l, −) anticlockwise. Optical activity arises when a molecule is <b>chiral</b>: it is not superimposable on its mirror image. The commonest cause is a carbon with four different groups, an <b>asymmetric (chiral) carbon</b>, marked C*.`,
      { mol: [['C[C@H](O)C(=O)O', '(S)-lactic acid'], ['C[C@@H](O)C(=O)O', '(R)-lactic acid']], w: 170, h: 120, cap: R`The two forms of lactic acid are non-superimposable mirror images: enantiomers.` },
      { points: [R`<b>Enantiomers</b> have identical physical properties (except the direction of rotation) and identical chemical properties towards non-chiral reagents.`, R`A 50 : 50 mixture of enantiomers is a <b>racemic mixture</b> (±); it is optically inactive by external compensation. Separating it is <b>resolution</b>.`, R`<b>R/S configuration:</b> rank the four groups by CIP priority (1 highest); view with the lowest (4) pointing away; 1 → 2 → 3 clockwise = R, anticlockwise = S.`] },
      { mistake: R`Assuming any molecule with a chiral carbon is optically active. A molecule with two (or more) chiral centres may have a plane of symmetry (meso) and be inactive.` },
      { check: { q: R`Is butan-2-ol chiral?`, ans: R`Yes: C-2 carries H, OH, CH₃ and C₂H₅, four different groups.` } }
    ] },

    { h: R`Diastereomers and meso compounds`, t: [2], blocks: [
      R`Stereoisomers that are not mirror images of each other are <b>diastereomers</b>. They have different physical and chemical properties. With n different chiral centres, the maximum number of stereoisomers is 2ⁿ.`,
      R`A <b>meso compound</b> contains chiral centres but also has an internal plane of symmetry, so it is superimposable on its mirror image and optically inactive (internal compensation). Tartaric acid has two chiral centres but only three stereoisomers: (+), (−) and meso.`,
      { mol: [['OC(=O)[C@@H](O)[C@H](O)C(=O)O', 'meso-tartaric acid'], ['OC(=O)[C@@H](O)[C@@H](O)C(=O)O', '(+)/(−)-tartaric acid (one enantiomer)']], w: 200, h: 130, cap: R`The meso form has a plane of symmetry between C-2 and C-3; the other two forms are a pair of enantiomers.` },
      { ex: { q: R`How many stereoisomers does CH₃CH(OH)CH(Cl)CH₃ have?`,
        steps: [R`Two different chiral centres (C-2 with OH, C-3 with Cl); the ends differ, so no meso form.`, R`2² = 4 (two pairs of enantiomers).`], ans: R`4` } },
      { check: { q: R`Why is meso-tartaric acid optically inactive?`, ans: R`It has an internal plane of symmetry: the rotation by one half cancels that of the other.` } }
    ] },

    { h: R`Covalent bond fission`, t: [3], blocks: [
      R`Reactions involve breaking and forming bonds. A covalent bond can break in two ways:`,
      { fig: figFission, cap: R`Homolysis gives two radicals; heterolysis gives a cation and an anion.` },
      { points: [R`<b>Homolytic fission (homolysis):</b> each atom keeps one electron, forming <b>free radicals</b>. Favoured by heat, light (UV) or peroxides, in the gas phase or non-polar solvents. Movement of single electrons is shown by fish-hook (half-headed) arrows.`, R`<b>Heterolytic fission (heterolysis):</b> one atom takes both electrons, forming a cation and an anion. Favoured in polar solvents. For a C–X bond, carbon usually becomes a <b>carbocation</b>; if carbon is bonded to a more electropositive atom (C–Li, C–MgBr), it becomes a <b>carbanion</b>.`] },
      { check: { q: R`Which type of fission occurs when Cl₂ is exposed to sunlight?`, ans: R`Homolytic: Cl₂ → 2Cl•.` } }
    ] },

    { h: R`Reactive intermediates: free radicals, carbocations and carbanions`, t: [4], blocks: [
      R`Bond fission produces short-lived, highly reactive species called <b>reactive intermediates</b>:`,
      { fig: figInter, cap: R`Carbocations and free radicals are sp² hybridised and planar; carbanions are sp³ and pyramidal (like NH₃).` },
      { table: { head: [R`Intermediate`, R`Charge`, R`Electrons on C`, R`Hybridisation, shape`, R`Nature`], rows: [
        [R`Carbocation R₃C⁺`, R`+`, R`6 (sextet)`, R`sp², planar (empty p orbital)`, R`electrophile`],
        [R`Free radical R₃C•`, R`0`, R`7 (one unpaired)`, R`sp², planar (nearly)`, R`electron-deficient, paramagnetic`],
        [R`Carbanion R₃C⁻`, R`−`, R`8 (one lone pair)`, R`sp³, pyramidal`, R`nucleophile`],
        [R`Carbene R₂C:`, R`0`, R`6 (two non-bonding)`, R`singlet sp², triplet sp`, R`electrophile`]] } },
      { check: { q: R`Why is a carbocation planar?`, ans: R`The carbon uses three sp² orbitals for its three bonds; the empty p orbital is perpendicular to the plane.` } }
    ] },

    { h: R`Stability of carbocations, carbanions and free radicals`, t: [4], blocks: [
      R`Any effect that spreads (delocalises) the charge or the odd electron stabilises the intermediate:`,
      { points: [
        R`<b>Carbocations:</b> 3° > 2° > 1° > CH₃⁺, because alkyl groups donate electrons (+I) and by <b>hyperconjugation</b>. Resonance stabilises more: benzyl C₆H₅CH₂⁺ and allyl CH₂=CH–CH₂⁺ are about as stable as 2° cations; (C₆H₅)₃C⁺ is very stable.`,
        R`<b>Free radicals:</b> the same order: benzyl, allyl > 3° > 2° > 1° > CH₃•.`,
        R`<b>Carbanions:</b> the reverse order: CH₃⁻ > 1° > 2° > 3° (alkyl groups push more electron density onto an already negative carbon). Electron-withdrawing groups and resonance stabilise carbanions (CH₂=CH–CH₂⁻, ⁻CH₂–C(=O)–R).`
      ] },
      { mol: [['C=C[CH2+]', 'allyl cation'], ['[CH2+]C=C', 'its resonance form'], ['[CH2+]C1=CC=CC=C1', 'benzyl cation']], w: 160, h: 110, cap: R`Resonance spreads the positive charge over two (allyl) or four (benzyl) carbons.` },
      { tip: R`Carbocations rearrange (1,2-hydride or 1,2-methyl shift) whenever this gives a more stable cation. Watch for this in SN1, E1 and alkene addition questions.` },
      { check: { q: R`Arrange in order of stability: CH₃⁺, (CH₃)₃C⁺, (CH₃)₂CH⁺, C₆H₅CH₂⁺.`, ans: R`CH₃⁺ < (CH₃)₂CH⁺ < (CH₃)₃C⁺ ≈ C₆H₅CH₂⁺ (benzyl is resonance-stabilised; with tertiary alkyl it is comparable).` } }
    ] },

    { h: R`Electrophiles and nucleophiles`, t: [5], blocks: [
      R`Most organic reactions are attacks of an electron-rich reagent on an electron-poor centre, or vice versa:`,
      { table: { head: [R``, R`Electrophile ("electron-loving")`, R`Nucleophile ("nucleus-loving")`], rows: [
        [R`Seeks`, R`electron-rich site`, R`electron-poor site (positive carbon)`],
        [R`Nature`, R`Lewis acid (electron-pair acceptor)`, R`Lewis base (electron-pair donor)`],
        [R`Charged examples`, R`H⁺, NO₂⁺, Cl⁺, Br⁺, CH₃⁺, R₃C⁺`, R`OH⁻, CN⁻, Cl⁻, Br⁻, RO⁻, R⁻ (carbanion)`],
        [R`Neutral examples`, R`BF₃, AlCl₃, SO₃, carbonyl carbon (>C=O)`, R`H₂O, NH₃, R–OH, R–NH₂ (lone pairs), alkenes (π electrons)`]] } },
      R`Some species can act as both: e.g. CH₃CHO has a nucleophilic oxygen and an electrophilic carbonyl carbon. <b>Nucleophilicity</b> differs from basicity: in protic solvents I⁻ > Br⁻ > Cl⁻ > F⁻ for nucleophilicity (larger ions are less solvated and more polarisable), though F⁻ is the strongest base.`,
      { check: { q: R`Classify BF₃ and NH₃ as electrophile or nucleophile.`, ans: R`BF₃: electrophile (empty orbital). NH₃: nucleophile (lone pair).` } }
    ] },

    { h: R`Inductive effect`, t: [6], blocks: [
      R`When an atom more electronegative than carbon is bonded to it, the σ electrons of the bond shift towards that atom, making carbon slightly positive. This polarity is passed along the chain, decreasing rapidly: the <b>inductive effect</b>. It is a permanent effect.`,
      { fig: figInductive, cap: R`The −I effect of Cl dies out after about three carbons.` },
      { points: [R`<b>−I groups</b> (electron-withdrawing): –NO₂ > –CN > –SO₃H > –CHO > –CO– > –COOH > –F > –Cl > –Br > –I > –OCH₃ > –OH > –C₆H₅.`, R`<b>+I groups</b> (electron-donating): –O⁻ > –COO⁻ > –C(CH₃)₃ > –CH(CH₃)₂ > –CH₂CH₃ > –CH₃.`] },
      R`<b>Effect on acidity:</b> −I groups stabilise a carboxylate anion and increase acidity; the effect is larger with more −I groups and when they are closer to –COOH.`,
      { table: { head: [R`Acid`, R`pKa`], rows: [[R`CH₃COOH`, R`4.76`], [R`ClCH₂COOH`, R`2.86`], [R`Cl₂CHCOOH`, R`1.29`], [R`Cl₃CCOOH`, R`0.65`], [R`FCH₂COOH`, R`2.59`], [R`HCOOH`, R`3.75`]] } },
      { check: { q: R`Why is formic acid stronger than acetic acid?`, ans: R`The +I effect of CH₃ destabilises the acetate ion; formate has no such donating group.` } }
    ] },

    { h: R`Electromeric effect`, t: [6], blocks: [
      R`The <b>electromeric effect (E)</b> is a <b>temporary</b> effect: in the presence of an attacking reagent, the π electrons of a multiple bond shift completely to one of the atoms. It disappears when the reagent is removed.`,
      { points: [R`<b>+E effect:</b> the π electrons move towards the atom to which the reagent attaches (e.g. H⁺ adding to an alkene).`, R`<b>−E effect:</b> the π electrons move away from the atom to which the reagent attaches (e.g. CN⁻ adding to the C of C=O, electrons move to O).`, R`When inductive and electromeric effects act in opposite directions, the electromeric effect predominates.`] },
      { check: { q: R`Is the electromeric effect permanent or temporary?`, ans: R`Temporary: it operates only in the presence of the attacking reagent.` } }
    ] },

    { h: R`Resonance (mesomeric) effect`, t: [6], blocks: [
      R`When a molecule cannot be represented by a single Lewis structure, it is described as a <b>resonance hybrid</b> of several contributing structures (canonical forms) differing only in the positions of electrons. The hybrid is more stable than any contributor; the extra stability is the <b>resonance energy</b> (about 150 kJ/mol for benzene).`,
      { points: [R`Only electrons (π electrons and lone pairs) move; nuclei stay in place.`, R`Contributing structures must have the same number of unpaired electrons.`, R`More stable contributors: more covalent bonds, complete octets, less charge separation, negative charge on the more electronegative atom.`] },
      { mol: [['[O-]C1=CC=CC=C1', 'phenoxide'], ['O=C1C=CC=C[CH-]1', 'C⁻ at ortho (C-2)'], ['O=C1C=C[CH-]C=C1', 'C⁻ at para (C-4)']], w: 160, h: 120, cap: R`Resonance in the phenoxide ion delocalises the negative charge onto the ring (ortho and para carbons), which is why phenol is acidic.` },
      R`The <b>resonance (mesomeric) effect (R or M)</b> is the polarity produced by delocalisation of π electrons or lone pairs through a conjugated system:`,
      { points: [R`<b>+R groups</b> donate electrons into the ring or double bond (they have a lone pair on the atom attached): –OH, –OR, –NH₂, –NHR, –NHCOCH₃, halogens. They increase electron density at ortho and para positions.`, R`<b>−R groups</b> withdraw electrons by resonance: –NO₂, –CN, –CHO, –COR, –COOH, –SO₃H. They decrease electron density, especially at ortho and para positions.`] },
      { mistake: R`Thinking resonance structures are real and that the molecule flips between them. Only the hybrid exists; the contributing structures are just pictures for bookkeeping.` },
      { check: { q: R`Is –NO₂ a +R or −R group?`, ans: R`−R (it withdraws electrons from the π system).` } }
    ] },

    { h: R`Hyperconjugation`, t: [6], blocks: [
      R`<b>Hyperconjugation</b> (σ–π conjugation, or "no-bond resonance") is the delocalisation of σ electrons of a C–H bond on a carbon next to (α to) an unsaturated carbon or a carbocation into the adjacent empty or π orbital.`,
      { fig: figHyper, cap: R`Overlap of a C–H σ bond with the empty p orbital spreads out the positive charge.` },
      { points: [R`Stability of carbocations: (CH₃)₃C⁺ (9 α-H) > (CH₃)₂CH⁺ (6) > CH₃CH₂⁺ (3) > CH₃⁺ (0).`, R`Stability of alkenes increases with the number of α-hydrogens: (CH₃)₂C=C(CH₃)₂ > (CH₃)₂C=CHCH₃ > … > CH₂=CH₂ (heats of hydrogenation decrease).`, R`It also explains the +R-like ortho/para-directing behaviour of the methyl group in toluene (Baker–Nathan effect: –CH₃ > –CH₂CH₃ > –CH(CH₃)₂ > –C(CH₃)₃ in hyperconjugation).`] },
      { check: { q: R`How many hyperconjugative structures does the tert-butyl cation have?`, ans: R`9 (one for each α-C–H bond).` } }
    ] },

    { h: R`Effects of hydrogen bonding`, t: [6], blocks: [
      R`Hydrogen bonding strongly affects physical properties and acidity:`,
      { points: [
        R`<b>Intermolecular</b> H-bonding raises boiling points and solubility in water: ethanol (bp 351 K) vs methoxymethane (bp 248 K), both C₂H₆O. p-Nitrophenol is less volatile and more soluble in water than o-nitrophenol.`,
        R`<b>Intramolecular</b> H-bonding (chelation) lowers boiling points and water solubility: o-nitrophenol is steam-volatile.`,
        R`<b>Acidity:</b> salicylic acid (2-hydroxybenzoic acid, pKa 2.98) is much stronger than benzoic acid (4.20), because the salicylate anion is stabilised by an intramolecular H-bond. Similarly, maleic acid (cis) has a lower pKa₁ but higher pKa₂ than fumaric acid (trans).`
      ] },
      { adv: R`Effects can conflict: in o-hydroxybenzoic acid the H-bond stabilises the anion (more acidic), but in o-nitrophenol it holds the phenolic H (slightly less acidic than expected compared with p-nitrophenol: pKa 7.23 vs 7.15).` },
      { check: { q: R`Why does o-nitrophenol have a lower boiling point than p-nitrophenol?`, ans: R`Intramolecular H-bonding in the ortho isomer prevents association; the para isomer forms intermolecular H-bonds.` } }
    ] },

    { h: R`Acidity of carboxylic acids, phenols and alcohols`, t: [6], blocks: [
      R`An acid is stronger when its <b>conjugate base is more stable</b>. Charge delocalisation (resonance) and electron-withdrawing groups stabilise the anion:`,
      { table: { head: [R`Compound`, R`pKa`, R`Reason`], rows: [
        [R`Ethanol`, R`≈ 16`, R`ethoxide charge localised on O; +I of ethyl`],
        [R`Water`, R`15.7`, R`reference`],
        [R`Phenol`, R`10.0`, R`phenoxide stabilised by resonance into the ring (C atoms)`],
        [R`p-Nitrophenol`, R`7.15`, R`−R and −I of NO₂ delocalise charge onto NO₂`],
        [R`Picric acid (2,4,6-trinitrophenol)`, R`0.38`, R`three NO₂ groups`],
        [R`Benzoic acid`, R`4.20`, R`carboxylate: charge on two equivalent O atoms`],
        [R`Acetic acid`, R`4.76`, R`+I of CH₃`]] } },
      { points: [R`Order: carboxylic acids > phenols > water > alcohols. Carboxylic acids react with NaHCO₃ (releasing CO₂); phenol does not (except strongly substituted ones like picric acid).`, R`Electron-donating groups (–CH₃, –OCH₃ at para) decrease the acidity of phenols and benzoic acids; electron-withdrawing groups (–NO₂, –CN, halogens) increase it.`, R`Alcohols: 1° > 2° > 3° in acidity (in solution), as more alkyl groups destabilise the alkoxide.`, R`<b>Ortho effect:</b> almost all ortho-substituted benzoic acids are stronger than benzoic acid (steric inhibition of resonance twists –COOH out of the ring plane).`] },
      { check: { q: R`Arrange in increasing acidity: phenol, ethanol, acetic acid, p-nitrophenol.`, ans: R`Ethanol < phenol < p-nitrophenol < acetic acid.` } }
    ] },

    { h: R`Basicity of amines`, t: [6], blocks: [
      R`Amines are bases because of the lone pair on nitrogen. Anything that increases the availability of this lone pair (or stabilises the conjugate acid) increases basicity:`,
      { points: [
        R`Alkyl groups (+I) make aliphatic amines stronger bases than ammonia. In the <b>gas phase</b>: 3° > 2° > 1° > NH₃.`,
        R`In <b>water</b>, solvation of the ammonium ion by H-bonding (best for RNH₃⁺ with three N–H) and steric hindrance also matter: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃, and (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.`,
        R`<b>Aryl amines</b> are much weaker bases: in aniline (pKb 9.38) the lone pair is delocalised into the ring by resonance. Electron-withdrawing groups (–NO₂) decrease, and donating groups (–CH₃, –OCH₃ at para) increase the basicity of aniline.`,
        R`Amides (RCONH₂) are almost neutral: the lone pair is delocalised onto the carbonyl oxygen.`
      ] },
      { table: { head: [R`Base`, R`pKb`], rows: [[R`NH₃`, R`4.75`], [R`CH₃NH₂`, R`3.38`], [R`(CH₃)₂NH`, R`3.27`], [R`(CH₃)₃N`, R`4.22`], [R`(C₂H₅)₂NH`, R`3.00`], [R`C₆H₅NH₂ (aniline)`, R`9.38`]] } },
      { check: { q: R`Why is aniline a weaker base than methylamine?`, ans: R`Aniline's lone pair is delocalised into the benzene ring, so it is less available; methyl's +I effect increases availability in methylamine.` } }
    ] },

    { h: R`Common types of organic reactions`, t: [7], blocks: [
      { table: { head: [R`Type`, R`What happens`, R`Example`], rows: [
        [R`Substitution`, R`one atom or group is replaced by another (nucleophilic, electrophilic or free-radical)`, R`CH₃Br + OH⁻ → CH₃OH + Br⁻; C₆H₆ + Cl₂ → C₆H₅Cl + HCl (FeCl₃); CH₄ + Cl₂ → CH₃Cl + HCl (hν)`],
        [R`Addition`, R`atoms add across a multiple bond`, R`CH₂=CH₂ + Br₂ → BrCH₂CH₂Br; CH₃CHO + HCN → CH₃CH(OH)CN`],
        [R`Elimination`, R`atoms or groups are removed from adjacent carbons, forming a multiple bond`, R`CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O`],
        [R`Rearrangement`, R`atoms in a molecule reorganise to give an isomer`, R`carbocation shifts; Beckmann, pinacol rearrangements`],
        [R`Redox`, R`oxidation (gain of O / loss of H) or reduction`, R`CH₃CH₂OH → CH₃CHO → CH₃COOH`]] } },
      R`Reactions are also classified by mechanism (the step-by-step path): SN1, SN2, E1, E2, electrophilic addition, electrophilic aromatic substitution, nucleophilic addition to C=O. These are studied in the later chapters.`,
      { check: { q: R`Classify: CH₃CH₂OH → CH₂=CH₂ + H₂O (conc. H₂SO₄, 443 K).`, ans: R`Elimination (dehydration).` } }
    ] }
  ],
  summary: [
    R`Carbon: tetravalent; sp³ (109.5°), sp² (120°), sp (180°); more s-character → more electronegative. Double bond = σ + π. DBE = C − (H + X)/2 + N/2 + 1.`,
    R`Classification: acyclic, alicyclic, aromatic, heterocyclic; functional groups; homologous series differ by CH₂.`,
    R`IUPAC: longest chain with principal group; lowest locants; alphabetical prefixes; priority –COOH > –SO₃H > ester > acid halide > amide > –CN > –CHO > ketone > –OH > –NH₂.`,
    R`Isomerism: chain, position, functional, metamerism, tautomerism; geometrical (cis/trans, E/Z); optical (chiral C, enantiomers, racemic, R/S); diastereomers, meso; 2ⁿ stereoisomers maximum.`,
    R`Homolysis → radicals; heterolysis → ions. Carbocation (sp², planar), radical (sp²), carbanion (sp³, pyramidal). Stability: cations and radicals 3° > 2° > 1°; anions reverse.`,
    R`Electrophiles: electron-pair acceptors (H⁺, NO₂⁺, BF₃). Nucleophiles: donors (OH⁻, CN⁻, NH₃, H₂O).`,
    R`Inductive (permanent, σ), electromeric (temporary, π), resonance (±R; delocalisation), hyperconjugation (α C–H), H-bonding.`,
    R`Acidity: RCOOH > PhOH > H₂O > ROH; −I/−R groups increase acidity. Basicity in water: 2° > 1° > 3° > NH₃ (methyl); aniline weak (resonance).`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §20.1 Hydrocarbons`, url: 'https://openstax.org/books/chemistry-2e/pages/20-1-hydrocarbons' },
    { t: R`OpenStax Organic Chemistry, §5.2 Chirality and Enantiomers`, url: 'https://openstax.org/books/organic-chemistry/pages/5-2-the-reason-for-handedness-in-molecules-chirality' },
    { t: R`OpenStax Organic Chemistry, §2.4 Resonance`, url: 'https://openstax.org/books/organic-chemistry/pages/2-4-resonance' },
    { t: R`Wikipedia: Inductive effect`, url: 'https://en.wikipedia.org/wiki/Inductive_effect' },
    { t: R`Wikipedia: Hyperconjugation`, url: 'https://en.wikipedia.org/wiki/Hyperconjugation' },
    { t: R`Wikipedia: IUPAC nomenclature of organic chemistry`, url: 'https://en.wikipedia.org/wiki/IUPAC_nomenclature_of_organic_chemistry' }
  ]
});
})();
