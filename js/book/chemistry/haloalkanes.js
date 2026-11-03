// Book chapter: Haloalkanes and Haloarenes. Full theory with structures and diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }

// ---------- figures ----------
var figSN2 = D.svg(500, 170, [
  lab(30, 80, 'HO⁻', 'b', 13, { bold: true }), D.path('M48,72 C70,50 95,55 105,70', { color: 'b', w: 1.6 }), D.arrow(100, 64, 106, 72, { color: 'b', head: 7 }),
  D.mol({ atoms: [{ x: 120, y: 80, s: 'C' }, { x: 120, y: 35, s: 'H' }, { x: 95, y: 115, s: 'H' }, { x: 148, y: 112, s: 'H' }, { x: 175, y: 80, s: 'Br', color: 'o' }], bonds: [[0, 1], [0, 2, 'w'], [0, 3, 'h'], [0, 4]] }),
  D.arrow(200, 80, 228, 80, { color: 'm' }),
  lab(250, 80, 'HO', 'b', 12, { bold: true }), D.line(262, 80, 290, 80, { color: 'm', dash: '3 3', w: 1.4 }), lab(302, 80, 'C', 'k', 13, { bold: true }), D.line(314, 80, 342, 80, { color: 'm', dash: '3 3', w: 1.4 }), lab(356, 80, 'Br', 'o', 12, { bold: true }),
  D.line(302, 70, 302, 40, { w: 1.6 }), lab(302, 32, 'H', 'k', 11), D.line(297, 88, 285, 112, { w: 1.6 }), lab(282, 120, 'H', 'k', 11), D.line(307, 88, 319, 112, { w: 1.6 }), lab(322, 120, 'H', 'k', 11),
  lab(303, 12, 'transition state (C is 5-coordinate)', 'm', 9), lab(303, 150, 'three H in one plane', 'm', 9),
  D.arrow(380, 80, 405, 80, { color: 'm' }),
  D.mol({ atoms: [{ x: 445, y: 80, s: 'C' }, { x: 445, y: 35, s: 'H' }, { x: 470, y: 115, s: 'H' }, { x: 418, y: 112, s: 'H' }, { x: 495, y: 80, s: 'OH', color: 'b' }], bonds: [[0, 1], [0, 2, 'w'], [0, 3, 'h'], [0, 4]] }),
  lab(463, 150, '+ Br⁻ (inverted)', 'o', 9)
], 'SN2 mechanism');

function smooth(P) { // cosine interpolation through key points (zero slope at each)
  return function (x) {
    for (var k = 0; k < P.length - 1; k++) if (x >= P[k][0] && x <= P[k + 1][0]) { var t = (x - P[k][0]) / (P[k + 1][0] - P[k][0]); return P[k][1] + (P[k + 1][1] - P[k][1]) * (1 - Math.cos(Math.PI * t)) / 2; }
    return NaN;
  };
}
var figProfiles = D.plot({ w: 460, h: 220, x: [0, 10], y: [0, 10], noOrigin: true, xlabel: 'reaction progress', ylabel: 'energy', mathLabels: false,
  fns: [{ f: smooth([[0.3, 3], [2.5, 7.6], [4.7, 1.5]]), from: 0.3, to: 4.7, color: 'b' }, { f: smooth([[5.4, 3], [6.4, 7.4], [7.3, 5.2], [8.2, 6.6], [9.7, 1.5]]), from: 5.4, to: 9.7, color: 'r' }],
  texts: [{ x: 2.5, y: 8.4, s: 'one transition state', color: 'b', size: 10 }, { x: 2.5, y: 0.7, s: 'SN2 (one step)', color: 'b', size: 11 },
    { x: 6.4, y: 8.2, s: 'TS1 (slow)', color: 'r', size: 10 }, { x: 8.3, y: 7.4, s: 'TS2', color: 'r', size: 10 }, { x: 7.3, y: 4.4, s: 'R⁺', color: 'r', size: 10 }, { x: 7.5, y: 0.7, s: 'SN1 (two steps)', color: 'r', size: 11 }],
  label: 'Energy profiles of SN2 and SN1' });

var figSNAr = D.svg(470, 90, [
  lab(10, 20, 'Ease of replacing Cl by OH increases with NO₂ groups at ortho/para:', 'k', 10, { anchor: 'start', bold: true }),
  lab(10, 46, 'chlorobenzene: NaOH, 623 K, 300 atm', 'm', 10, { anchor: 'start' }), lab(250, 46, '4-nitrochlorobenzene: 443 K', 'o', 10, { anchor: 'start' }),
  lab(10, 70, '2,4-dinitrochlorobenzene: 368 K', 'r', 10, { anchor: 'start' }), lab(250, 70, '2,4,6-trinitrochlorobenzene: warm water', 'p', 10, { anchor: 'start' })
], 'Activation by nitro groups');

// ---------- chapter text ----------
JEE.book('chemistry', 'haloalkanes', {
  intro: [
    R`Replacing hydrogen atoms of a hydrocarbon by halogen atoms gives <b>haloalkanes</b> (alkyl halides, R–X) and <b>haloarenes</b> (aryl halides, Ar–X). They are used as solvents, refrigerants, anaesthetics and pesticides, and are important starting materials because the C–X bond is easily replaced.`,
    R`This chapter covers their classification, the nature of the C–X bond, preparation, physical properties, the SN1 and SN2 mechanisms (with their stereochemistry), elimination, reactions with metals, the unusual behaviour of haloarenes and the polyhalogen compounds.`
  ],
  sections: [
    { h: R`Classification`, t: [0], blocks: [
      { points: [
        R`By the <b>number of halogen atoms</b>: mono-, di-, tri- and polyhalogen compounds.`,
        R`<b>Csp³–X compounds:</b> alkyl halides, classified as primary (1°), secondary (2°) or tertiary (3°) by the carbon bearing X; <b>allylic halides</b> (X on a carbon next to C=C, CH₂=CH–CH₂Cl) and <b>benzylic halides</b> (X on a carbon next to a ring, C₆H₅CH₂Cl).`,
        R`<b>Csp²–X compounds:</b> <b>vinylic halides</b> (X on a C=C carbon, CH₂=CHCl) and <b>aryl halides</b> (X on a benzene ring, C₆H₅Cl).`,
        R`Dihalides: <b>geminal</b> (both X on the same carbon, CH₃CHCl₂: alkylidene halides) and <b>vicinal</b> (on adjacent carbons, ClCH₂CH₂Cl: alkylene dihalides).`
      ] },
      { mol: [['CC(C)Cl', '2° alkyl'], ['C=CCCl', 'allylic'], ['C=CCl', 'vinylic'], ['ClCC1=CC=CC=C1', 'benzylic'], ['ClC1=CC=CC=C1', 'aryl']], w: 130, h: 110, cap: R`The position of the halogen decides the type and the reactivity.` },
      { check: { q: R`Classify C₆H₅CH₂Br and CH₂=CHBr.`, ans: R`Benzylic (Csp³–X) and vinylic (Csp²–X).` } }
    ] },

    { h: R`Nomenclature`, t: [0], blocks: [
      R`Common names: alkyl group + halide (methyl chloride, isopropyl bromide, tert-butyl chloride). IUPAC names treat the halogen as a prefix (fluoro, chloro, bromo, iodo) on the parent hydrocarbon: CH₃CH(Cl)CH₃ is 2-chloropropane; (CH₃)₃CBr is 2-bromo-2-methylpropane; CH₂=CHCH₂Br is 3-bromoprop-1-ene. For dihalobenzenes, 1,2- (o-), 1,3- (m-) and 1,4- (p-).`,
      { table: { head: [R`Structure`, R`Common name`, R`IUPAC name`], rows: [
        [R`CH₃CH₂CH(Cl)CH₃`, R`sec-butyl chloride`, R`2-chlorobutane`], [R`(CH₃)₂CHCH₂Cl`, R`isobutyl chloride`, R`1-chloro-2-methylpropane`], [R`CH₂Cl₂`, R`methylene chloride`, R`dichloromethane`], [R`CHCl₃`, R`chloroform`, R`trichloromethane`], [R`CH₃CHCl₂`, R`ethylidene chloride`, R`1,1-dichloroethane`], [R`C₆H₅CH₂Cl`, R`benzyl chloride`, R`(chloromethyl)benzene`]] } },
      { check: { q: R`Give the IUPAC name of (CH₃)₃CCH₂Br.`, ans: R`1-Bromo-2,2-dimethylpropane (neopentyl bromide).` } }
    ] },

    { h: R`Nature of the C–X bond`, t: [1], blocks: [
      R`Halogens are more electronegative than carbon, so the C–X bond is polar: C<sup>δ+</sup>–X<sup>δ−</sup>. The carbon is electrophilic and is attacked by nucleophiles. Down the group the halogen atom gets bigger, so the bond gets <b>longer and weaker</b>:`,
      { table: { head: [R`Bond`, R`Bond length / pm`, R`Bond enthalpy / kJ mol⁻¹`, R`Dipole moment of CH₃X / D`], rows: [
        [R`C–F`, R`139`, R`452`, R`1.847`], [R`C–Cl`, R`178`, R`351`, R`1.860`], [R`C–Br`, R`193`, R`293`, R`1.830`], [R`C–I`, R`214`, R`234`, R`1.636`]] } },
      R`So the reactivity of R–X in substitution is <b>R–I > R–Br > R–Cl > R–F</b> (the weakest bond breaks most easily). CH₃Cl has a slightly higher dipole moment than CH₃F: the C–F bond is more polar, but much shorter, and dipole moment = charge × distance.`,
      { check: { q: R`Why is CH₃I more reactive than CH₃Cl towards nucleophiles?`, ans: R`The C–I bond is longer and weaker, and I⁻ is a better leaving group.` } }
    ] },

    { h: R`Preparation from alcohols and hydrocarbons`, t: [0], blocks: [
      { h3: R`From alcohols` },
      { points: [R`<b>HX:</b> R–OH + HCl (with anhydrous ZnCl₂, Groove's process) → R–Cl + H₂O. Reactivity of alcohols 3° > 2° > 1°; 3° alcohols react with conc. HCl even without ZnCl₂. HBr and HI react directly (NaBr + H₂SO₄).`, R`<b>Phosphorus halides:</b> 3R–OH + PCl₃ → 3R–Cl + H₃PO₃; R–OH + PCl₅ → R–Cl + POCl₃ + HCl; red P + Br₂ or I₂ (PBr₃, PI₃ formed in situ).`, R`<b>Thionyl chloride</b> (best method): R–OH + SOCl₂ → R–Cl + SO₂↑ + HCl↑. Both by-products are gases, so the product is easily pure.`] },
      { h3: R`From hydrocarbons` },
      { points: [R`Free-radical halogenation of alkanes (gives mixtures): CH₃CH₂CH₂CH₃ + Cl₂ (hν) → 1-chlorobutane + 2-chlorobutane.`, R`Addition of HX to alkenes (Markovnikov; peroxide effect with HBr) and of X₂ (vicinal dihalides).`] },
      { check: { q: R`Why is thionyl chloride preferred for converting alcohols into alkyl chlorides?`, ans: R`The by-products SO₂ and HCl are gases and escape, leaving a pure product.` } }
    ] },

    { h: R`Halogen exchange: Finkelstein and Swarts reactions`, t: [0], blocks: [
      R`<b>Finkelstein reaction:</b> alkyl iodides are made by heating chlorides or bromides with NaI in dry acetone: R–Cl + NaI → R–I + NaCl↓. NaCl and NaBr are insoluble in acetone and precipitate, driving the equilibrium forward (Le Chatelier).`,
      R`<b>Swarts reaction:</b> alkyl fluorides are made by heating alkyl chlorides or bromides with a metallic fluoride such as AgF, Hg₂F₂, CoF₂ or SbF₃: CH₃Br + AgF → CH₃F + AgBr.`,
      { check: { q: R`Why is dry acetone used in the Finkelstein reaction?`, ans: R`NaI dissolves in it but NaCl/NaBr do not, so they precipitate and drive the reaction forward.` } }
    ] },

    { h: R`Preparation of haloarenes`, t: [0], blocks: [
      { points: [
        R`<b>Electrophilic substitution:</b> benzene + Cl₂ or Br₂ with Lewis acid (FeCl₃, FeBr₃) in the dark → chlorobenzene or bromobenzene. Toluene gives o- and p-chlorotoluene. Iodination needs an oxidant (HNO₃, HIO₄) because the reaction is reversible; fluorine is too reactive.`,
        R`<b>Sandmeyer reaction:</b> an aryl diazonium salt (from aniline + NaNO₂ + HCl at 273–278 K) with Cu₂Cl₂/HCl or Cu₂Br₂/HBr gives the aryl chloride or bromide: C₆H₅N₂⁺Cl⁻ → C₆H₅Cl + N₂.`,
        R`<b>Gattermann reaction:</b> the same using copper powder and HX.`,
        R`<b>Iodobenzene:</b> diazonium salt + KI (no catalyst): C₆H₅N₂⁺Cl⁻ + KI → C₆H₅I + KCl + N₂. <b>Fluorobenzene</b> by the Balz–Schiemann reaction (heating ArN₂⁺BF₄⁻).`
      ] },
      { check: { q: R`How is iodobenzene prepared from aniline?`, ans: R`Diazotise (NaNO₂ + HCl, 273–278 K), then warm the diazonium salt with KI.` } }
    ] },

    { h: R`Physical properties`, t: [0], blocks: [
      R`Haloalkanes are colourless when pure (bromides and iodides turn coloured in light). They are polar, so their boiling points are higher than those of hydrocarbons of similar mass. Methyl chloride, methyl bromide, ethyl chloride and some chlorofluoromethanes are gases at room temperature.`,
      { points: [
        R`<b>Boiling point</b> increases with the size of the halogen (stronger dispersion forces): RF < RCl < RBr < RI (CH₃F 195 K, CH₃Cl 249 K, CH₃Br 277 K, CH₃I 315 K); and with the size of the alkyl group. Branching lowers the boiling point.`,
        R`<b>Melting point:</b> para-dihalobenzenes melt higher than ortho and meta (p-dichlorobenzene 323 K vs o- 256 K, m- 249 K) because their symmetrical shape packs better in the crystal.`,
        R`<b>Density</b> increases with the number and mass of halogen atoms: bromo, iodo and polychloro compounds are denser than water (n-C₃H₇Cl 0.89, n-C₃H₇Br 1.335, n-C₃H₇I 1.747 g/mL; CCl₄ 1.595).`,
        R`<b>Solubility:</b> only slightly soluble in water (they cannot form hydrogen bonds strong enough to replace those of water), but soluble in organic solvents.`
      ] },
      { check: { q: R`Why does p-dichlorobenzene have a higher melting point than its ortho and meta isomers?`, ans: R`Its symmetrical structure fits better in the crystal lattice.` } }
    ] },

    { h: R`SN2 mechanism and inversion of configuration`, t: [2], blocks: [
      R`In a <b>nucleophilic substitution</b>, a nucleophile (Nu⁻) replaces the halide: R–X + Nu⁻ → R–Nu + X⁻. In the <b>SN2</b> mechanism (substitution, nucleophilic, bimolecular) this happens in <b>one step</b>: the nucleophile attacks the carbon from the side opposite the leaving group (<b>backside attack</b>), and the C–Nu bond forms as the C–X bond breaks.`,
      { fig: figSN2, cap: R`SN2: the nucleophile enters from the back; in the transition state the carbon is partly bonded to both OH and Br, and the other three groups flip over like an umbrella in the wind.` },
      { points: [R`<b>Rate = k[R–X][Nu⁻]</b>: second-order kinetics.`, R`<b>Inversion of configuration</b> (Walden inversion): a chiral substrate gives a product with the opposite spatial arrangement.`, R`Reactivity: <b>CH₃X > 1° > 2° > 3°</b>, because bulky groups hinder the backside attack (steric hindrance). Tertiary halides practically do not react by SN2.`, R`Favoured by strong nucleophiles and polar aprotic solvents (acetone, DMSO, DMF).`] },
      { mol: [['CC[C@@H](C)Br', '(R)-2-bromobutane'], ['CC[C@H](C)O', '(S)-butan-2-ol']], w: 150, h: 110, cap: R`SN2 with OH⁻ inverts the configuration at the stereocentre.` },
      { ex: { q: R`For an SN2 reaction, what happens to the rate if [R–X] is doubled and [OH⁻] is tripled?`,
        steps: [R`Rate = k[R–X][OH⁻] → 2 × 3 = 6 times.`], ans: R`The rate becomes 6 times` } },
      { check: { q: R`Arrange CH₃Br, (CH₃)₃CBr, CH₃CH₂Br and (CH₃)₂CHBr in order of SN2 reactivity.`, ans: R`CH₃Br > CH₃CH₂Br > (CH₃)₂CHBr > (CH₃)₃CBr.` } }
    ] },

    { h: R`SN1 mechanism, carbocation rearrangements and racemisation`, t: [2], blocks: [
      R`The <b>SN1</b> mechanism (substitution, nucleophilic, unimolecular) takes <b>two steps</b>: (1) the C–X bond ionises slowly to give a <b>carbocation</b> and X⁻ (rate-determining); (2) the nucleophile attacks the planar carbocation quickly.`,
      { fig: figProfiles, cap: R`SN2 has a single transition state; SN1 has two, with a carbocation intermediate in the valley between them.` },
      { points: [R`<b>Rate = k[R–X]</b>: first order, independent of the nucleophile.`, R`Reactivity: <b>3° > 2° > 1° > CH₃X</b>, the order of carbocation stability. Allylic and benzylic halides react fast by SN1 (resonance-stabilised cations).`, R`Favoured by polar protic solvents (water, alcohols), which stabilise the ions by solvation; weak nucleophiles.`, R`<b>Rearrangements:</b> a carbocation may shift a hydride or methyl group to give a more stable cation before the nucleophile attacks.`] },
      { mol: [['CC(C)(C)Br', '2-bromo-2-methylpropane'], ['C[C+](C)C', 'tert-butyl cation'], ['CC(C)(C)O', '2-methylpropan-2-ol']], w: 140, h: 110, cap: R`Hydrolysis of a tertiary halide by SN1.` },
      { tip: R`Benzylic and allylic halides can react by both SN1 and SN2; 1° benzylic/allylic halides are very reactive in SN2 too, because the π system stabilises the transition state.` },
      { ex: { q: R`The hydrolysis of 2-bromo-2-methylpropane is first order. What happens to the rate if [OH⁻] is doubled? If [R–X] is halved?`,
        steps: [R`Rate = k[R–X]; OH⁻ does not appear in the rate law (it reacts after the slow step).`], ans: R`Doubling [OH⁻]: no change. Halving [R–X]: rate halves.` } },
      { check: { q: R`Why do tertiary halides react by SN1 rather than SN2?`, ans: R`They form stable tertiary carbocations, and the bulky groups block backside attack.` } }
    ] },

    { h: R`Stereochemical aspects of nucleophilic substitution`, t: [2], blocks: [
      R`Optically active compounds rotate plane-polarised light; a molecule is chiral when it has a carbon with four different groups. Following the configuration through a reaction tells us the mechanism:`,
      { table: { head: [R`Mechanism`, R`Stereochemical result`, R`Why`], rows: [
        [R`SN2`, R`complete <b>inversion</b> (optically active product of opposite configuration)`, R`backside attack`],
        [R`SN1`, R`<b>racemisation</b> (mixture of both configurations, usually with some excess of inversion)`, R`the planar carbocation can be attacked from either face`]] } },
      { points: [R`<b>Retention</b> of configuration means the spatial arrangement is preserved (as when no bond to the stereocentre is broken).`, R`A <b>racemic mixture</b> (±) contains equal amounts of the two enantiomers and is optically inactive (external compensation).`, R`Remember: d/l (+/−) is the measured direction of rotation, while R/S is the configuration; an R compound can be either (+) or (−).`] },
      { check: { q: R`Optically active 2-bromobutane is hydrolysed and the product is optically inactive. Which mechanism operated?`, ans: R`SN1: the planar carbocation was attacked from both sides, giving a racemic mixture.` } }
    ] },

    { h: R`Dehydrohalogenation and Saytzeff's rule`, t: [3], blocks: [
      R`Heating a haloalkane with <b>alcoholic KOH</b> removes the halogen and a hydrogen from the β-carbon (<b>β-elimination</b>), forming an alkene: CH₃CH₂Br + KOH(alc) → CH₂=CH₂ + KBr + H₂O.`,
      R`<b>Saytzeff (Zaitsev) rule:</b> "in dehydrohalogenation, the preferred product is the alkene with the greater number of alkyl groups on the doubly bonded carbons", i.e. the more substituted, more stable alkene.`,
      { mol: [['CCC(C)(C)Br', '2-bromo-2-methylbutane'], ['CC=C(C)C', '2-methylbut-2-ene (major)'], ['CCC(C)=C', '2-methylbut-1-ene (minor)']], w: 150, h: 110, cap: R`Elimination gives the more substituted alkene as the main product.` },
      R`Ease of dehydrohalogenation: 3° > 2° > 1° haloalkane, and R–I > R–Br > R–Cl. Elimination may go by <b>E2</b> (one step, strong base, anti-periplanar H and X) or <b>E1</b> (via the carbocation, for 3° halides in weakly basic conditions).`,
      { check: { q: R`What is the main product of 2-bromobutane with alcoholic KOH?`, ans: R`But-2-ene (Saytzeff product).` } }
    ] },

    { h: R`Elimination versus substitution`, t: [3], blocks: [
      R`A base/nucleophile like OH⁻ can either attack carbon (substitution) or remove a β-hydrogen (elimination). The outcome depends on:`,
      { table: { head: [R`Factor`, R`Favours substitution`, R`Favours elimination`], rows: [
        [R`Substrate`, R`1° (and CH₃X)`, R`3° (and bulky 2°)`],
        [R`Reagent`, R`good nucleophile, weak base (I⁻, CN⁻)`, R`strong, bulky base (alc. KOH, (CH₃)₃CO⁻K⁺)`],
        [R`Solvent`, R`aqueous (KOH(aq))`, R`alcoholic (KOH(alc))`],
        [R`Temperature`, R`lower`, R`higher`]] } },
      { tip: R`Aqueous KOH → alcohol (substitution); alcoholic KOH → alkene (elimination). The alkoxide RO⁻ in alcohol is a stronger base than OH⁻ in water.` },
      { check: { q: R`What does (CH₃)₃CBr give with sodium ethoxide in ethanol?`, ans: R`Mainly 2-methylpropene (elimination), since the tertiary carbon is too hindered for SN2.` } }
    ] },

    { h: R`Grignard reagents and their reactions`, t: [0], blocks: [
      R`Haloalkanes react with magnesium in <b>dry ether</b> to give alkylmagnesium halides, the <b>Grignard reagents</b>: CH₃CH₂Br + Mg → CH₃CH₂MgBr. The C–Mg bond is highly polar (C<sup>δ−</sup>–Mg<sup>δ+</sup>), so the alkyl group behaves as a carbanion: a strong base and a strong nucleophile.`,
      { points: [R`With any source of protons (water, alcohols, amines, terminal alkynes) they give hydrocarbons: RMgX + H₂O → RH + Mg(OH)X. So they must be prepared and kept absolutely dry.`, R`With carbonyl compounds they form alcohols: HCHO → 1° alcohol; other aldehydes → 2° alcohol; ketones → 3° alcohol (after hydrolysis with dilute acid).`, R`With CO₂ (dry ice) they give carboxylic acids: RMgX + CO₂ → RCOOMgX → RCOOH.`] },
      { mol: [['CC=O', 'ethanal'], ['CC(O)C', 'propan-2-ol (2°)']], w: 140, h: 110, cap: R`CH₃MgBr adds to ethanal; hydrolysis gives a secondary alcohol.` },
      { ex: { q: R`What volume of methane (STP) is formed when 1.42 g of CH₃MgI (M = 166) reacts with excess water? Which alcohol would CH₃MgI give with propanone?`,
        steps: [R`CH₃MgI + H₂O → CH₄ + Mg(OH)I; 1.42/166 = 0.00855 mol CH₄ × 22.4 L = 0.19 L.`, R`(CH₃)₂C=O + CH₃MgI → (CH₃)₃C–OMgI → (H₃O⁺) (CH₃)₃C–OH.`], ans: R`≈ 0.19 L CH₄; 2-methylpropan-2-ol (a 3° alcohol)` } },
      { check: { q: R`Why are Grignard reagents prepared in dry ether?`, ans: R`They react with water (even moisture) to form alkanes; ether also stabilises the reagent by coordinating to Mg.` } }
    ] },

    { h: R`Wurtz, Fittig and Wurtz–Fittig reactions`, t: [0], blocks: [
      { points: [
        R`<b>Wurtz:</b> 2R–X + 2Na → R–R + 2NaX (dry ether). Makes symmetrical alkanes with double the number of carbons.`,
        R`<b>Fittig:</b> 2Ar–X + 2Na → Ar–Ar + 2NaX (dry ether). Two aryl halides join: chlorobenzene gives biphenyl.`,
        R`<b>Wurtz–Fittig:</b> Ar–X + R–X + 2Na → Ar–R + 2NaX. An aryl and an alkyl halide join: bromobenzene + bromomethane → toluene.`
      ] },
      { mol: [['C1=CC=C(C=C1)C1=CC=CC=C1', 'biphenyl (Fittig)'], ['CC1=CC=CC=C1', 'toluene (Wurtz–Fittig)']], w: 170, h: 110, cap: R`Sodium joins two halide molecules by removing the halogens.` },
      { check: { q: R`Which reaction converts bromobenzene and bromoethane into ethylbenzene?`, ans: R`The Wurtz–Fittig reaction (Na, dry ether).` } }
    ] },

    { h: R`Nucleophilic substitution in haloarenes`, t: [2], blocks: [
      R`Aryl (and vinylic) halides are <b>much less reactive</b> than alkyl halides towards nucleophiles, for four reasons:`,
      { points: [R`<b>Resonance:</b> a lone pair of the halogen is delocalised into the ring, giving the C–X bond partial double-bond character (shorter, stronger).`, R`The carbon is <b>sp²</b> hybridised: it holds the bonding electrons more tightly, so the C–X bond is shorter (C–Cl 169 pm in C₆H₅Cl vs 177 pm in CH₃Cl).`, R`The phenyl cation is very unstable, so SN1 is impossible.`, R`The electron-rich ring repels the incoming nucleophile, and backside attack is blocked by the ring (no SN2).`] },
      { mol: [['ClC1=CC=CC=C1', 'chlorobenzene'], ['[Cl+]=C1C=CC=C[CH-]1', 'C=Cl⁺ form (ortho)'], ['[Cl+]=C1C=C[CH-]C=C1', 'C=Cl⁺ form (para)']], w: 140, h: 110, cap: R`Resonance gives the C–Cl bond partial double-bond character.` },
      R`<b>Forcing conditions:</b> chlorobenzene gives phenol only with NaOH at 623 K and 300 atm (Dow process). <b>Electron-withdrawing groups</b> (–NO₂) at ortho and para positions greatly increase the reactivity, because they stabilise the negatively charged intermediate (Meisenheimer complex) by resonance. A meta –NO₂ has little effect.`,
      { fig: figSNAr, cap: R`Each extra ortho/para nitro group makes the substitution easier.` },
      { check: { q: R`Why does p-nitrochlorobenzene react with NaOH more easily than chlorobenzene?`, ans: R`The para –NO₂ group withdraws electrons and stabilises the negatively charged intermediate by resonance.` } }
    ] },

    { h: R`Electrophilic substitution in haloarenes`, t: [2], blocks: [
      R`Halogens are <b>deactivating</b> (strong −I) but <b>ortho/para-directing</b> (+R). So haloarenes undergo electrophilic substitution more slowly than benzene, and the products are mixtures of ortho and para isomers (para usually major for steric reasons):`,
      { points: [R`Halogenation (FeCl₃): chlorobenzene → 1,2- and 1,4-dichlorobenzene.`, R`Nitration (HNO₃ + H₂SO₄): → 1-chloro-2-nitrobenzene + 1-chloro-4-nitrobenzene (major).`, R`Sulphonation (conc. H₂SO₄): → 2- and 4-chlorobenzenesulphonic acid (major).`, R`Friedel–Crafts alkylation and acylation: → 2- and 4-chlorotoluene; 2- and 4-chloroacetophenone.`] },
      { check: { q: R`What is the main product of nitrating chlorobenzene?`, ans: R`1-Chloro-4-nitrobenzene (para), with some ortho isomer.` } }
    ] },

    { h: R`Polyhalogen compounds`, t: [4], blocks: [
      { table: { head: [R`Compound`, R`Uses`, R`Hazards / environmental effects`], rows: [
        [R`Dichloromethane CH₂Cl₂`, R`solvent, paint remover, propellant, metal cleaning`, R`affects the central nervous system; dizziness, skin burns`],
        [R`Chloroform CHCl₃`, R`solvent for fats and alkaloids; making freon refrigerant R-22; once an anaesthetic`, R`slowly oxidised by air in light to poisonous <b>phosgene</b> (2CHCl₃ + O₂ → 2COCl₂ + 2HCl), so it is stored in dark-coloured bottles filled to the top`],
        [R`Iodoform CHI₃`, R`antiseptic (owing to the I₂ it releases)`, R`objectionable smell; replaced by other antiseptics`],
        [R`Carbon tetrachloride CCl₄`, R`solvent, refrigerants, propellants, fire extinguishers (earlier)`, R`liver damage, cancer risk; depletes ozone`],
        [R`Freons (CFCs, e.g. CCl₂F₂, freon-12)`, R`refrigeration, air conditioning, aerosol propellants`, R`very stable; reach the stratosphere and release Cl• that destroys ozone`],
        [R`DDT (p,p'-dichlorodiphenyltrichloroethane)`, R`first chlorinated insecticide; controls malaria and typhus mosquitoes`, R`non-biodegradable, stored in fatty tissue, biomagnified in food chains; banned in many countries`]] } },
      { mol: [['ClC1=CC=C(C=C1)C(C1=CC=C(Cl)C=C1)C(Cl)(Cl)Cl', 'DDT']], w: 240, h: 150, cap: R`DDT: two p-chlorophenyl groups and a CCl₃ group on one carbon.` },
      { check: { q: R`Why is chloroform stored in closed, dark bottles filled to the brim?`, ans: R`To prevent its oxidation by air in light to poisonous phosgene (COCl₂).` } }
    ] }
  ],
  summary: [
    R`Types: 1°, 2°, 3° alkyl, allylic, benzylic (Csp³–X); vinylic, aryl (Csp²–X); geminal and vicinal dihalides.`,
    R`C–X: polar, length and weakness increase F → I; reactivity R–I > R–Br > R–Cl > R–F. μ(CH₃Cl) > μ(CH₃F).`,
    R`Preparation: ROH + HX/ZnCl₂, PCl₃, PCl₅, SOCl₂ (best); Finkelstein (NaI/acetone), Swarts (AgF); haloarenes by FeCl₃, Sandmeyer, Gattermann, KI.`,
    R`bp: RI > RBr > RCl > RF; branching lowers bp; p-dihalobenzene highest mp; bromides, iodides denser than water.`,
    R`SN2: one step, rate = k[RX][Nu], inversion, CH₃ > 1° > 2° > 3°. SN1: carbocation, rate = k[RX], racemisation, 3° > 2° > 1°, rearrangements.`,
    R`Elimination with alc. KOH; Saytzeff product. Aqueous KOH → substitution; alcoholic KOH → elimination.`,
    R`Grignard RMgX (dry ether): carbanion-like; + H₂O → RH; + HCHO/RCHO/R₂CO → 1°/2°/3° alcohols; + CO₂ → RCOOH. Wurtz (R–R), Fittig (Ar–Ar), Wurtz–Fittig (Ar–R).`,
    R`Haloarenes: unreactive to nucleophiles (resonance, sp² C); o/p NO₂ activates; electrophilic substitution o/p (deactivated). CHCl₃ → phosgene; CFCs deplete ozone; DDT biomagnifies.`
  ],
  refs: [
    { t: R`OpenStax Organic Chemistry, §11.2 The SN2 Reaction`, url: 'https://openstax.org/books/organic-chemistry/pages/11-2-the-sn2-reaction' },
    { t: R`OpenStax Organic Chemistry, §11.4 The SN1 Reaction`, url: 'https://openstax.org/books/organic-chemistry/pages/11-4-the-sn1-reaction' },
    { t: R`Wikipedia: Finkelstein reaction`, url: 'https://en.wikipedia.org/wiki/Finkelstein_reaction' },
    { t: R`Wikipedia: Grignard reagent`, url: 'https://en.wikipedia.org/wiki/Grignard_reagent' },
    { t: R`Wikipedia: Nucleophilic aromatic substitution`, url: 'https://en.wikipedia.org/wiki/Nucleophilic_aromatic_substitution' },
    { t: R`Wikipedia: DDT`, url: 'https://en.wikipedia.org/wiki/DDT' }
  ]
});
})();
