// Book chapter: Alcohols, Phenols, Ethers, Aldehydes, Ketones and Carboxylic Acids. Full theory with structures.
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }

// ---------- figures ----------
var figHbond = D.svg(440, 120, [
  D.mol({ atoms: [{ x: 60, y: 60, s: 'O', color: 'r' }, { x: 30, y: 30, s: 'R' }, { x: 95, y: 72, s: 'H', color: 'b' }, { x: 160, y: 72, s: 'O', color: 'r' }, { x: 160, y: 30, s: 'R' }, { x: 195, y: 95, s: 'H', color: 'b' }, { x: 255, y: 95, s: 'O', color: 'r' }, { x: 275, y: 55, s: 'R' }],
    bonds: [[0, 1], [0, 2], [2, 3, 'hb'], [3, 4], [3, 5], [5, 6, 'hb'], [6, 7]] }),
  lab(360, 50, 'alcohol molecules are', 'm', 10), lab(360, 64, 'associated by H-bonds', 'm', 10), lab(360, 84, '→ high boiling points,', 'm', 10), lab(360, 98, 'soluble in water', 'm', 10)
], 'Hydrogen bonding in alcohols');

var figCarbonyl = D.svg(420, 130, [
  D.mol({ atoms: [{ x: 90, y: 65, s: 'C' }, { x: 160, y: 65, s: 'O', color: 'r' }, { x: 50, y: 30, s: 'R' }, { x: 50, y: 100, s: 'R′' }], bonds: [[0, 1, 2], [0, 2], [0, 3]] }),
  lab(90, 40, 'δ+', 'b', 11, { bold: true }), lab(160, 40, 'δ−', 'r', 11, { bold: true }), lab(120, 115, 'sp², planar, 120°', 'm', 9),
  D.arrow(250, 65, 275, 65, { color: 'm' }),
  lab(330, 50, 'C⁺–O⁻', 'k', 13, { bold: true }), lab(330, 72, '(polar resonance form)', 'm', 9), lab(330, 100, 'C is electrophilic,', 'm', 9), lab(330, 112, 'O is nucleophilic', 'm', 9)
], 'Polarity of the carbonyl group');

var figNuAdd = D.svg(480, 110, [
  lab(10, 22, 'Step 1 (slow):', 'b', 11, { anchor: 'start', bold: true }), lab(115, 22, 'Nu⁻ attacks the δ+ carbon; C changes from sp² (planar) to sp³ (tetrahedral)', 'k', 10, { anchor: 'start' }),
  lab(10, 56, 'Step 2 (fast):', 'g', 11, { anchor: 'start', bold: true }), lab(115, 56, 'the alkoxide O⁻ takes H⁺ (from H₂O, HCN, acid) to give the addition product', 'k', 10, { anchor: 'start' }),
  lab(240, 92, 'R(R′)C=O  +  Nu⁻  →  R(R′)C(O⁻)Nu  →(H⁺)  R(R′)C(OH)Nu', 'm', 11)
], 'Nucleophilic addition');

var figDimer = D.svg(360, 120, [
  D.mol({ atoms: [{ x: 60, y: 60, s: 'R' }, { x: 110, y: 60, s: 'C' }, { x: 140, y: 30, s: 'O', color: 'r' }, { x: 140, y: 90, s: 'O', color: 'r' }, { x: 190, y: 90, s: 'H', color: 'b' }, { x: 220, y: 30, s: 'H', color: 'b' }, { x: 270, y: 30, s: 'O', color: 'r' }, { x: 270, y: 90, s: 'O', color: 'r' }, { x: 300, y: 60, s: 'C' }, { x: 345, y: 60, s: 'R' }],
    bonds: [[0, 1], [1, 2, 2], [1, 3], [3, 4], [4, 7, 'hb'], [2, 5, 'hb'], [5, 6], [6, 8], [7, 8, 2], [8, 9]] }),
  lab(180, 112, 'two hydrogen bonds hold the dimer together', 'm', 9)
], 'Carboxylic acid dimer');

// ---------- chapter text ----------
JEE.book('chemistry', 'oxygen-compounds', {
  intro: [
    R`Oxygen-containing functional groups are everywhere: ethanol in drinks and fuels, phenol in disinfectants, ethers as solvents and anaesthetics, aldehydes and ketones in flavours and perfumes, and carboxylic acids in vinegar, fats and medicines like aspirin.`,
    R`This chapter covers alcohols (–OH on an sp³ carbon), phenols (–OH on a benzene ring), ethers (R–O–R'), aldehydes and ketones (the carbonyl group C=O), and carboxylic acids (–COOH): their preparation, properties, reactions, mechanisms and distinguishing tests.`
  ],
  sections: [
    { h: R`Alcohols: classification and nomenclature`, t: [0], blocks: [
      R`Alcohols are <b>monohydric</b> (one –OH), dihydric (glycols, two –OH) or trihydric (glycerol). Monohydric alcohols are classified by the carbon bearing –OH: <b>primary (1°)</b> RCH₂OH, <b>secondary (2°)</b> R₂CHOH, <b>tertiary (3°)</b> R₃COH; also allylic, benzylic and vinylic (enol) types.`,
      { mol: [['CCCCO', 'butan-1-ol (1°)'], ['CCC(C)O', 'butan-2-ol (2°)'], ['CC(C)(C)O', '2-methylpropan-2-ol (3°)'], ['OCC1=CC=CC=C1', 'phenylmethanol (benzylic)']], w: 140, h: 110, cap: R`Primary, secondary, tertiary and benzylic alcohols.` },
      R`IUPAC names replace the final -e of the alkane with <b>-ol</b>, with the lowest locant for –OH: CH₃CH(OH)CH₃ is propan-2-ol; HOCH₂CH₂OH is ethane-1,2-diol; HOCH₂CH(OH)CH₂OH is propane-1,2,3-triol. The O of alcohols is sp³; the C–O–H angle in methanol is 108.9°.`,
      { check: { q: R`Classify (CH₃)₂CHCH₂OH.`, ans: R`Primary alcohol (2-methylpropan-1-ol): –OH is on a CH₂.` } }
    ] },

    { h: R`Preparation of alcohols`, t: [0], blocks: [
      { points: [
        R`<b>From alkenes:</b> acid-catalysed hydration (Markovnikov): CH₃CH=CH₂ + H₂O → CH₃CH(OH)CH₃. <b>Hydroboration–oxidation</b> (anti-Markovnikov, no rearrangement): CH₃CH=CH₂ + B₂H₆, then H₂O₂/OH⁻ → CH₃CH₂CH₂OH.`,
        R`<b>From carbonyl compounds</b> by reduction (H₂/Pd, NaBH₄ or LiAlH₄): aldehydes → 1° alcohols, ketones → 2° alcohols. Carboxylic acids and esters are reduced to 1° alcohols by LiAlH₄ (or by catalytic hydrogenation of esters).`,
        R`<b>From Grignard reagents:</b> RMgX + HCHO → 1° alcohol; + RCHO → 2°; + R₂CO → 3° (after hydrolysis).`,
        R`<b>Commercially:</b> methanol from CO + 2H₂ (ZnO–Cr₂O₃, 573–673 K, 200–300 atm); ethanol by fermentation of sugars (invertase, zymase) or hydration of ethene.`
      ] },
      { mol: [['CC=C', 'propene'], ['CC(C)O', 'H₂O/H⁺ → propan-2-ol'], ['CCCO', 'B₂H₆; H₂O₂/OH⁻ → propan-1-ol']], w: 150, h: 110, cap: R`Acid hydration follows Markovnikov's rule; hydroboration–oxidation gives the anti-Markovnikov alcohol.` },
      { ex: { q: R`What mass of ethanol is formed by reducing 4.4 g of ethanal completely with NaBH₄?`,
        steps: [R`CH₃CHO (44) → CH₃CH₂OH (46); 4.4/44 = 0.1 mol.`, R`0.1 × 46 = 4.6 g.`], ans: R`4.6 g` } },
      { check: { q: R`Which Grignard reaction gives 2-methylpropan-2-ol?`, ans: R`CH₃MgBr with propanone, then hydrolysis.` } }
    ] },

    { h: R`Physical properties of alcohols; hydrogen bonding`, t: [0], blocks: [
      R`Alcohols have much higher boiling points than hydrocarbons, ethers and haloalkanes of similar mass, because their molecules are associated by <b>intermolecular hydrogen bonds</b>. Lower alcohols are miscible with water, also because of H-bonding; solubility decreases as the hydrophobic alkyl part grows.`,
      { fig: figHbond, cap: R`The O–H group forms hydrogen bonds with neighbouring molecules.` },
      { points: [R`Boiling points rise with the number of carbons and fall with branching (butan-1-ol 391 K > butan-2-ol 373 K > 2-methylpropan-2-ol 355 K).`, R`Compare similar masses: ethanol (bp 351 K) vs methoxymethane (248 K) vs propane (231 K).`] },
      { check: { q: R`Why is ethanol miscible with water while ethane is not?`, ans: R`Ethanol forms hydrogen bonds with water molecules.` } }
    ] },

    { h: R`Reactions of alcohols: Na, phosphorus halides, HCl/ZnCl₂ and SOCl₂`, t: [0], blocks: [
      R`Alcohols react either by breaking the <b>O–H bond</b> (acting as acids or nucleophiles) or the <b>C–O bond</b> (substitution, dehydration).`,
      { points: [
        R`<b>Acidity (O–H cleavage):</b> 2R–OH + 2Na → 2R–O⁻Na⁺ + H₂. Alcohols are weaker acids than water (pKa ≈ 16 vs 15.7). Acidity 1° > 2° > 3° (alkyl groups push electrons onto O⁻ and hinder its solvation).`,
        R`<b>Phosphorus halides:</b> 3ROH + PX₃ → 3RX + H₃PO₃; ROH + PCl₅ → RCl + POCl₃ + HCl (also a test for –OH: fumes of HCl).`,
        R`<b>HX:</b> R–OH + HX → R–X + H₂O. With HCl, anhydrous ZnCl₂ is needed for 1° and 2° alcohols (Lucas reagent).`,
        R`<b>SOCl₂:</b> R–OH + SOCl₂ → R–Cl + SO₂ + HCl (gases escape; pure product).`
      ] },
      { check: { q: R`Why are alcohols weaker acids than water?`, ans: R`The alkyl group (+I) increases electron density on O and destabilises the alkoxide ion.` } }
    ] },

    { h: R`Identification of primary, secondary and tertiary alcohols`, t: [0], blocks: [
      R`<b>Lucas test:</b> the alcohol is shaken with Lucas reagent (conc. HCl + anhydrous ZnCl₂). Alkyl chlorides are insoluble and make the solution <b>turbid</b>. The speed reflects the SN1 reactivity (carbocation stability):`,
      { table: { head: [R`Alcohol`, R`Observation with Lucas reagent`], rows: [[R`Tertiary`, R`turbidity immediately`], [R`Secondary`, R`turbidity within about 5 minutes`], [R`Primary`, R`no turbidity at room temperature (only on heating)`]] } },
      R`<b>Oxidation / dehydrogenation test:</b> passing the vapour over heated copper at 573 K: 1° alcohols give aldehydes, 2° give ketones, and 3° alcohols are dehydrated to alkenes (they have no α-H to lose).`,
      { check: { q: R`An alcohol gives turbidity with Lucas reagent immediately. What type is it?`, ans: R`Tertiary.` } }
    ] },

    { h: R`Esterification`, t: [0], blocks: [
      R`Alcohols (and phenols) react with carboxylic acids, acid chlorides or anhydrides to form <b>esters</b>. With acids the reaction is reversible and needs conc. H₂SO₄ as catalyst; the water is removed to shift the equilibrium:`,
      R`CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (conc. H₂SO₄). Labelling with ¹⁸O shows the O of the ester comes from the <b>alcohol</b>: the acid loses its –OH, the alcohol loses its H.`,
      { ex: { q: R`For CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O, Kc = 4. Starting with 1 mol of each, how much ester forms at equilibrium?`,
        steps: [R`x²/(1 − x)² = 4 → x/(1 − x) = 2 → x = 2/3.`], ans: R`0.67 mol` } },
      R`With acid chlorides (in pyridine, which removes HCl) the reaction is fast and complete: R'OH + RCOCl → RCOOR' + HCl. Acetylation with (CH₃CO)₂O introduces CH₃CO–.`,
      { check: { q: R`Which atom of the alcohol ends up in the ester?`, ans: R`Its oxygen (the acid supplies the acyl group and loses OH).` } }
    ] },

    { h: R`Dehydration to alkenes and ethers; mechanism`, t: [0], blocks: [
      R`Heating with protic acids (conc. H₂SO₄, H₃PO₄) or Al₂O₃ removes water. Conditions decide the product: ethanol + conc. H₂SO₄ at <b>443 K → ethene</b>; at <b>413 K (excess alcohol) → ethoxyethane</b> (diethyl ether).`,
      { derive: R`Mechanism of acid-catalysed dehydration (E1)`, open: true, steps: [R`1. Protonation: CH₃CH₂–OH + H⁺ → CH₃CH₂–OH₂⁺ (fast).`, R`2. Loss of water gives the carbocation (slow): CH₃CH₂–OH₂⁺ → CH₃CH₂⁺ + H₂O.`, R`3. Loss of H⁺ from the β-carbon gives the alkene: CH₃CH₂⁺ → CH₂=CH₂ + H⁺.`, R`For ethers, step 3 is replaced by attack of a second alcohol molecule (SN2 for 1° alcohols).`] },
      R`Ease of dehydration: <b>3° > 2° > 1°</b> (milder conditions for 3°: 20% H₂SO₄ at 358 K). The Saytzeff alkene predominates, and carbocations can rearrange.`,
      { check: { q: R`Why is ethene obtained at 443 K but diethyl ether at 413 K from ethanol and H₂SO₄?`, ans: R`Higher temperature favours elimination (entropy); at lower temperature with excess alcohol, substitution by a second ethanol molecule gives the ether.` } }
    ] },

    { h: R`Oxidation of alcohols`, t: [0], blocks: [
      { points: [
        R`<b>Primary alcohols</b> → aldehydes → carboxylic acids. Strong oxidants (acidified KMnO₄ or K₂Cr₂O₇) go all the way to the acid; <b>PCC</b> (pyridinium chlorochromate) or CrO₃ in anhydrous medium stops at the aldehyde.`,
        R`<b>Secondary alcohols</b> → ketones (CrO₃ or K₂Cr₂O₇/H⁺).`,
        R`<b>Tertiary alcohols</b> resist oxidation; under drastic conditions they break into smaller fragments.`,
        R`<b>Dehydrogenation</b> over Cu at 573 K: RCH₂OH → RCHO + H₂; R₂CHOH → R₂CO + H₂; R₃COH → alkene + H₂O.`
      ] },
      { mol: [['CCO', 'ethanol'], ['CC=O', 'PCC → ethanal'], ['CC(=O)O', 'K₂Cr₂O₇/H⁺ → ethanoic acid']], w: 140, h: 110, cap: R`A mild oxidant stops at the aldehyde; a strong one gives the acid.` },
      { tip: R`The orange → green colour change of acidified dichromate (Cr₂O₇²⁻ → Cr³⁺) was the basis of the old breathalyser test for ethanol.` },
      { check: { q: R`What does propan-2-ol give with acidified K₂Cr₂O₇?`, ans: R`Propanone (a ketone).` } }
    ] },

    { h: R`Phenols: preparation and physical properties`, t: [1], blocks: [
      { points: [
        R`<b>From haloarenes (Dow process):</b> chlorobenzene + NaOH at 623 K, 300 atm → sodium phenoxide; acidify → phenol.`,
        R`<b>From benzenesulphonic acid:</b> fuse with NaOH, then acidify.`,
        R`<b>From diazonium salts:</b> warm aqueous benzenediazonium chloride: C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl.`,
        R`<b>From cumene (commercial):</b> cumene (isopropylbenzene) is oxidised by air to cumene hydroperoxide, which is cleaved by dilute acid to <b>phenol and acetone</b> (two useful products).`
      ] },
      { mol: [['CC(C)C1=CC=CC=C1', 'cumene'], ['CC(C)(OO)C1=CC=CC=C1', 'cumene hydroperoxide'], ['OC1=CC=CC=C1', 'phenol'], ['CC(C)=O', '+ propanone']], w: 140, h: 120, cap: R`The cumene process.` },
      R`Phenol is a colourless crystalline solid (mp 314 K) that turns pink in air (oxidation). Its boiling point (455 K) is high because of H-bonding, and it is moderately soluble in water.`,
      { check: { q: R`Name the two products of the cumene process.`, ans: R`Phenol and propanone (acetone).` } }
    ] },

    { h: R`Acidic nature of phenol and the effect of substituents`, t: [1], blocks: [
      R`Phenol (pKa 10.0) is a much stronger acid than alcohols (pKa ≈ 16) but weaker than carboxylic acids. It turns blue litmus red only weakly, reacts with NaOH (forming sodium phenoxide) but <b>not with NaHCO₃</b>. The phenoxide ion is stabilised because its negative charge is delocalised into the ring (ortho and para carbons); the sp² carbon attached to O also makes O more positive.`,
      { mol: [['[O-]C1=CC=CC=C1', 'phenoxide'], ['O=C1C=CC=C[CH-]1', 'C⁻ at ortho'], ['O=C1C=C[CH-]C=C1', 'C⁻ at para']], w: 140, h: 120, cap: R`Resonance spreads the negative charge of phenoxide onto the ring.` },
      { table: { head: [R`Compound`, R`pKa`], rows: [[R`o-Nitrophenol`, R`7.2`], [R`m-Nitrophenol`, R`8.3`], [R`p-Nitrophenol`, R`7.1`], [R`Phenol`, R`10.0`], [R`p-Cresol (4-methylphenol)`, R`10.2`], [R`2,4,6-Trinitrophenol (picric acid)`, R`0.4`], [R`Ethanol`, R`15.9`]] } },
      R`<b>Electron-withdrawing groups</b> (–NO₂, –CN, –X) increase acidity, especially at ortho and para (where they can delocalise the charge by resonance). <b>Electron-donating groups</b> (–CH₃, –OCH₃) decrease acidity. Picric acid is as strong as many mineral acids.`,
      { check: { q: R`Arrange phenol, p-nitrophenol and p-cresol in order of acid strength.`, ans: R`p-Cresol < phenol < p-nitrophenol.` } }
    ] },

    { h: R`Electrophilic substitution in phenol`, t: [1], blocks: [
      R`The –OH group is strongly <b>activating</b> and ortho/para-directing, so phenol reacts under very mild conditions:`,
      { points: [
        R`<b>Bromination:</b> with <b>bromine water</b>, a white precipitate of <b>2,4,6-tribromophenol</b> forms at once (test for phenol). In a non-polar solvent (CHCl₃ or CS₂) at low temperature, mono-bromophenols (o and p) form.`,
        R`<b>Nitration:</b> dilute HNO₃ at 298 K gives a mixture of o- and p-nitrophenol (separated by steam distillation: the ortho isomer is steam-volatile because of intramolecular H-bonding). Concentrated HNO₃ gives <b>picric acid</b> (2,4,6-trinitrophenol).`,
        R`<b>Sulphonation:</b> conc. H₂SO₄ gives mainly o-phenolsulphonic acid at room temperature and the para isomer at 373 K.`
      ] },
      { mol: [['OC1=CC=CC=C1', 'phenol'], ['OC1=C(Br)C=C(Br)C=C1Br', '2,4,6-tribromophenol (white ppt)']], w: 160, h: 120, cap: R`Phenol decolourises bromine water and gives a white precipitate.` },
      { ex: { q: R`What mass of 2,4,6-tribromophenol (M = 330.7) forms from 0.94 g of phenol with excess bromine water?`,
        steps: [R`0.94/94 = 0.01 mol phenol → 0.01 mol product.`, R`0.01 × 330.7 = 3.31 g.`], ans: R`3.31 g` } },
      { check: { q: R`How are o- and p-nitrophenol separated?`, ans: R`By steam distillation: o-nitrophenol is steam-volatile (intramolecular H-bond).` } }
    ] },

    { h: R`Reimer–Tiemann reaction`, t: [1], blocks: [
      R`Phenol heated with <b>chloroform and aqueous NaOH</b> (about 340 K), followed by acid, gives <b>salicylaldehyde</b> (2-hydroxybenzaldehyde). The –CHO group goes mainly to the ortho position. The electrophile is <b>dichlorocarbene</b>, :CCl₂, formed from CHCl₃ + OH⁻; the dichloromethyl intermediate is hydrolysed to –CHO.`,
      { mol: [['OC1=CC=CC=C1', 'phenol'], ['OC1=CC=CC=C1C=O', 'salicylaldehyde']], w: 150, h: 120, cap: R`Reimer–Tiemann: phenol + CHCl₃/NaOH, then H⁺ → salicylaldehyde. With CCl₄ instead, salicylic acid forms.` },
      { check: { q: R`What is the electrophile in the Reimer–Tiemann reaction?`, ans: R`Dichlorocarbene, :CCl₂.` } }
    ] },

    { h: R`Kolbe's reaction`, t: [1], blocks: [
      R`Sodium phenoxide (more reactive than phenol towards weak electrophiles) reacts with <b>CO₂</b> at about 400 K and 4–7 atm. Acidification gives <b>salicylic acid</b> (2-hydroxybenzoic acid), the starting material for aspirin.`,
      { mol: [['[O-]C1=CC=CC=C1', 'sodium phenoxide'], ['OC(=O)C1=CC=CC=C1O', 'salicylic acid']], w: 150, h: 120, cap: R`Kolbe's reaction: CO₂ is the weak electrophile; it attacks the ortho position.` },
      { check: { q: R`Why is the phenoxide ion used instead of phenol in Kolbe's reaction?`, ans: R`The phenoxide ion is much more strongly activating, so it reacts with the weak electrophile CO₂.` } }
    ] },

    { h: R`Esterification, etherification and the synthesis of aspirin`, t: [1], blocks: [
      R`Phenols form esters with acid chlorides or anhydrides (not easily with acids). <b>Acetylation of salicylic acid</b> with acetic anhydride gives <b>aspirin</b> (acetylsalicylic acid), a painkiller, antipyretic and anti-inflammatory drug.`,
      { mol: [['OC(=O)C1=CC=CC=C1O', 'salicylic acid'], ['CC(=O)OC1=CC=CC=C1C(O)=O', 'aspirin']], w: 160, h: 120, cap: R`Salicylic acid + (CH₃CO)₂O → aspirin + CH₃COOH.` },
      { ex: { q: R`What mass of aspirin (M = 180) can be made from 13.8 g of salicylic acid (M = 138)?`,
        steps: [R`13.8/138 = 0.1 mol → 0.1 mol aspirin.`, R`0.1 × 180 = 18.0 g.`], ans: R`18.0 g` } },
      R`<b>Etherification:</b> sodium phenoxide + alkyl halide gives an aryl alkyl ether (Williamson): C₆H₅O⁻Na⁺ + CH₃I → C₆H₅OCH₃ (anisole) + NaI.`,
      { check: { q: R`Which functional group of salicylic acid is acetylated to make aspirin?`, ans: R`The phenolic –OH group.` } }
    ] },

    { h: R`Oxidation and reduction of phenol`, t: [1], blocks: [
      R`<b>Oxidation:</b> phenol is oxidised by chromic acid (Na₂Cr₂O₇/H₂SO₄) to <b>benzo-1,4-quinone</b>, a yellow conjugated diketone. In air, phenols slowly turn pink/dark from such oxidation products.`,
      R`<b>Reduction:</b> distilling phenol with <b>zinc dust</b> removes the oxygen: C₆H₅OH + Zn → C₆H₆ + ZnO.`,
      { mol: [['OC1=CC=CC=C1', 'phenol'], ['O=C1C=CC(=O)C=C1', 'benzoquinone'], ['C1=CC=CC=C1', 'benzene (Zn dust)']], w: 140, h: 120, cap: R`Oxidation to benzoquinone; reduction to benzene with zinc dust.` },
      { check: { q: R`What is formed when phenol is heated with zinc dust?`, ans: R`Benzene.` } }
    ] },

    { h: R`Ethers: structure and nomenclature`, t: [2], blocks: [
      R`Ethers have the general formula R–O–R'. They are <b>simple (symmetrical)</b> if R = R' (diethyl ether) and <b>mixed (unsymmetrical)</b> if R ≠ R' (methoxyethane). IUPAC names them as <b>alkoxyalkanes</b>: the larger group is the parent (CH₃OC₂H₅: methoxyethane; C₆H₅OCH₃: methoxybenzene, anisole).`,
      R`The oxygen is sp³ with two lone pairs, and the C–O–C angle (111.7° in methoxymethane) is a little larger than tetrahedral because of repulsion between the bulky alkyl groups. Ethers have a small dipole moment; they cannot H-bond with each other, so their boiling points are close to those of alkanes, but they are somewhat soluble in water (they accept H-bonds).`,
      { mol: [['CCOCC', 'ethoxyethane (diethyl ether)'], ['COC1=CC=CC=C1', 'methoxybenzene (anisole)']], w: 160, h: 110, cap: R`A simple aliphatic ether and an aryl alkyl ether.` },
      { check: { q: R`Why is the C–O–C angle in ethers slightly more than 109.5°?`, ans: R`Repulsion between the two bulky alkyl groups opens the angle.` } }
    ] },

    { h: R`Williamson synthesis`, t: [2], blocks: [
      R`An <b>alkyl halide reacts with a sodium alkoxide</b> (or phenoxide) by SN2: R–X + R'–O⁻Na⁺ → R–O–R' + NaX. It makes both symmetrical and unsymmetrical ethers.`,
      R`Because it is SN2, the alkyl halide should be <b>primary</b>. With tertiary halides, the alkoxide (a strong base) causes elimination instead. To make tert-butyl methyl ether, use (CH₃)₃C–O⁻Na⁺ + CH₃Br, not CH₃O⁻Na⁺ + (CH₃)₃CBr (which gives 2-methylpropene).`,
      R`Ethers can also be made by acid-catalysed dehydration of 1° alcohols at 413 K, but this suits only symmetrical ethers from primary alcohols.`,
      { check: { q: R`Which pair of reagents is best for making ethyl phenyl ether?`, ans: R`Sodium phenoxide + bromoethane (aryl halides do not undergo SN2).` } }
    ] },

    { h: R`Cleavage of the C–O bond in ethers`, t: [2], blocks: [
      R`Ethers are fairly unreactive, but the C–O bond is cleaved by hot concentrated <b>HI</b> (or HBr): R–O–R + HX → R–X + R–OH; with excess HX the alcohol also becomes R–X. Reactivity HI > HBr > HCl.`,
      { points: [R`For mixed ethers with two primary/secondary groups, the halide forms from the <b>smaller</b> alkyl group (SN2 at the less hindered carbon): CH₃OC₂H₅ + HI → CH₃I + C₂H₅OH.`, R`If one group is tertiary, the halide forms from the tertiary group (SN1 via the stable carbocation): (CH₃)₃C–O–CH₃ + HI → (CH₃)₃C–I + CH₃OH.`, R`<b>Aryl alkyl ethers</b> give phenol and alkyl halide, because the Ar–O bond has partial double-bond character: C₆H₅OCH₃ + HI → C₆H₅OH + CH₃I.`] },
      R`The –OR group activates the benzene ring (+R) towards electrophilic substitution at ortho and para: anisole gives o- and p-bromoanisole with Br₂ in ethanoic acid, and Friedel–Crafts products with AlCl₃.`,
      { check: { q: R`What are the products of anisole with hot HI?`, ans: R`Phenol and iodomethane.` } }
    ] },

    { h: R`Aldehydes and ketones: nature of the carbonyl group`, t: [3], blocks: [
      R`Aldehydes (R–CHO) and ketones (R–CO–R') contain the <b>carbonyl group</b>, >C=O. The carbon is sp² hybridised and forms three σ bonds in a plane (≈120°); the π bond is formed by sideways overlap of p orbitals of C and O. Oxygen is more electronegative, so the bond is <b>polar</b>: the carbon is an electrophile (Lewis acid) and the oxygen a nucleophile (Lewis base).`,
      { fig: figCarbonyl, cap: R`The carbonyl group is planar and polar; resonance places a partial positive charge on carbon.` },
      R`Names: aldehydes end in <b>-al</b>, ketones in <b>-one</b> (methanal HCHO, ethanal CH₃CHO, propanone CH₃COCH₃, butan-2-one). They have higher boiling points than hydrocarbons and ethers of similar mass (dipole–dipole forces) but lower than alcohols (no H-bonding between molecules). Lower members are soluble in water (H-bonds with water).`,
      { check: { q: R`Why is the carbonyl carbon attacked by nucleophiles?`, ans: R`It carries a partial positive charge because oxygen pulls the π electrons towards itself.` } }
    ] },

    { h: R`Preparation of aldehydes and ketones`, t: [3], blocks: [
      { points: [
        R`<b>Oxidation/dehydrogenation of alcohols:</b> 1° → aldehydes (PCC, or Cu at 573 K); 2° → ketones (K₂Cr₂O₇/H⁺).`,
        R`<b>From acid chlorides:</b> <b>Rosenmund reduction</b>: RCOCl + H₂ → RCHO + HCl, using Pd on BaSO₄ (poisoned, so the aldehyde is not reduced further). Ketones from acid chlorides with dialkylcadmium: 2RCOCl + R'₂Cd → 2RCOR' + CdCl₂.`,
        R`<b>From nitriles:</b> <b>Stephen reaction</b>: RCN + SnCl₂ + HCl → imine → (H₃O⁺) RCHO. DIBAL-H also reduces nitriles to aldehydes. Nitriles + Grignard reagents then hydrolysis give <b>ketones</b>: CH₃CN + C₆H₅MgBr → C₆H₅COCH₃.`,
        R`<b>From esters:</b> DIBAL-H (diisobutylaluminium hydride) at low temperature reduces esters to aldehydes.`,
        R`<b>From alkynes</b> (hydration, HgSO₄/H₂SO₄): ethyne → ethanal; others → ketones. Ozonolysis of alkenes also gives carbonyl compounds.`
      ] },
      { check: { q: R`Why is the Pd catalyst poisoned with BaSO₄ in the Rosenmund reduction?`, ans: R`To stop the reduction at the aldehyde (preventing further reduction to the alcohol).` } }
    ] },

    { h: R`Benzaldehyde from toluene and benzene`, t: [3], blocks: [
      { points: [
        R`<b>Etard reaction:</b> toluene + chromyl chloride (CrO₂Cl₂) in CS₂ forms a chromium complex, which is hydrolysed to benzaldehyde.`,
        R`<b>Chromic oxide in acetic anhydride:</b> toluene → benzylidene diacetate → (hydrolysis) benzaldehyde.`,
        R`<b>Side-chain chlorination:</b> toluene + Cl₂ (hν) → benzal chloride (C₆H₅CHCl₂) → hydrolysis at 373 K → benzaldehyde (a commercial method).`,
        R`<b>Gattermann–Koch reaction:</b> benzene + CO + HCl with anhydrous AlCl₃/CuCl → benzaldehyde.`,
        R`<b>Friedel–Crafts acylation</b> of benzene gives aromatic ketones (acetophenone, benzophenone).`
      ] },
      { mol: [['CC1=CC=CC=C1', 'toluene'], ['ClC(Cl)C1=CC=CC=C1', 'benzal chloride'], ['O=CC1=CC=CC=C1', 'benzaldehyde']], w: 140, h: 110, cap: R`Side-chain chlorination then hydrolysis converts toluene into benzaldehyde.` },
      { check: { q: R`Name the reagent used in the Etard reaction.`, ans: R`Chromyl chloride, CrO₂Cl₂.` } }
    ] },

    { h: R`Relative reactivity of aldehydes and ketones`, t: [3], blocks: [
      R`Aldehydes are generally <b>more reactive</b> than ketones in nucleophilic addition:`,
      { points: [R`<b>Steric:</b> ketones have two alkyl groups that hinder the approach of the nucleophile; aldehydes have one (and an H).`, R`<b>Electronic:</b> two alkyl groups (+I) reduce the positive charge on the carbonyl carbon of ketones more than one does in aldehydes.`] },
      R`Order: HCHO > CH₃CHO > CH₃COCH₃ > CH₃COC₂H₅. Aromatic aldehydes (benzaldehyde) are less reactive than aliphatic ones, because the ring donates electrons to the carbonyl group by resonance.`,
      { check: { q: R`Which is more reactive towards HCN: ethanal or propanone? Why?`, ans: R`Ethanal: less steric hindrance and a more positive carbonyl carbon.` } }
    ] },

    { h: R`Nucleophilic addition: HCN, NaHSO₃, alcohols and Grignard reagents`, t: [3], blocks: [
      { fig: figNuAdd, cap: R`The general mechanism of nucleophilic addition to the carbonyl group.` },
      { points: [
        R`<b>HCN</b> (base catalysed: CN⁻ is the nucleophile) gives <b>cyanohydrins</b>: CH₃CHO + HCN → CH₃CH(OH)CN. Cyanohydrins are useful intermediates (hydrolysis gives α-hydroxy acids).`,
        R`<b>Sodium hydrogensulphite</b> gives crystalline bisulphite addition products, R₂C(OH)SO₃⁻Na⁺, which regenerate the carbonyl compound with dilute acid or alkali, used to <b>separate and purify aldehydes</b> (and methyl ketones).`,
        R`<b>Alcohols</b> (dry HCl): aldehydes give <b>hemiacetals</b> then <b>acetals</b>, RCH(OR')₂; ketones with ethane-1,2-diol give cyclic <b>ketals</b>. Acetals protect the carbonyl group, as they are stable to bases and are hydrolysed back by aqueous acid.`,
        R`<b>Grignard reagents</b> add to give alcohols after hydrolysis (HCHO → 1°, RCHO → 2°, R₂CO → 3°).`
      ] },
      { mol: [['CC=O', 'ethanal'], ['CC(O)C#N', 'ethanal cyanohydrin'], ['CC(OCC)OCC', 'acetal with ethanol']], w: 140, h: 110, cap: R`Products of nucleophilic addition to ethanal.` },
      { check: { q: R`How can an aldehyde be separated from a mixture with a non-carbonyl compound?`, ans: R`By forming the crystalline bisulphite (NaHSO₃) addition product, filtering it, and regenerating the aldehyde with dilute acid.` } }
    ] },

    { h: R`Addition of ammonia derivatives: oximes and hydrazones`, t: [3], blocks: [
      R`Ammonia derivatives Z–NH₂ add to the carbonyl group and then lose water (<b>addition–elimination</b>), forming >C=N–Z. The reaction is carried out at pH about 3.5 (mild acid).`,
      { table: { head: [R`Reagent Z–NH₂`, R`Product >C=N–Z`], rows: [
        [R`hydroxylamine, NH₂OH`, R`oxime, >C=N–OH`], [R`hydrazine, NH₂NH₂`, R`hydrazone, >C=N–NH₂`], [R`phenylhydrazine, C₆H₅NHNH₂`, R`phenylhydrazone`],
        [R`2,4-dinitrophenylhydrazine (2,4-DNP, Brady's reagent)`, R`2,4-dinitrophenylhydrazone (yellow-orange-red precipitate)`], [R`semicarbazide, NH₂NHCONH₂`, R`semicarbazone`]] } },
      R`2,4-DNP derivatives are crystalline with sharp melting points, used to identify carbonyl compounds.`,
      { mol: [['CC(C)=O', 'propanone'], ['CC(C)=NO', 'propanone oxime']], w: 140, h: 110, cap: R`Propanone + NH₂OH → oxime + H₂O.` },
      { check: { q: R`Which reagent gives an orange precipitate with all aldehydes and ketones?`, ans: R`2,4-Dinitrophenylhydrazine (Brady's reagent).` } }
    ] },

    { h: R`Oxidation and reduction of aldehydes and ketones`, t: [4], blocks: [
      R`<b>Oxidation:</b> aldehydes are easily oxidised to carboxylic acids, even by mild oxidants (Tollens', Fehling's: see below). Ketones are oxidised only by strong oxidants at high temperature, with cleavage of C–C bonds (Popoff's rule: the carbonyl stays with the smaller alkyl group).`,
      { points: [R`<b>To alcohols:</b> NaBH₄ or LiAlH₄ (or H₂/Pd): aldehydes → 1° alcohols; ketones → 2° alcohols.`, R`<b>To hydrocarbons</b> (C=O → CH₂): <b>Clemmensen reduction</b> with zinc amalgam and conc. HCl (acidic conditions); <b>Wolff–Kishner reduction</b> with hydrazine then KOH in ethylene glycol on heating (basic conditions).`] },
      { mol: [['CC(=O)C1=CC=CC=C1', 'acetophenone'], ['CCC1=CC=CC=C1', 'ethylbenzene']], w: 150, h: 110, cap: R`Clemmensen (Zn–Hg/HCl) or Wolff–Kishner (NH₂NH₂, KOH) reduces C=O to CH₂.` },
      { tip: R`Choose Clemmensen for acid-stable compounds and Wolff–Kishner for base-stable ones.` },
      { check: { q: R`What is the product of Wolff–Kishner reduction of propanone?`, ans: R`Propane.` } }
    ] },

    { h: R`Acidity of α-hydrogen; aldol condensation`, t: [4], blocks: [
      R`Hydrogen atoms on the carbon next to the carbonyl group (<b>α-hydrogens</b>) are weakly acidic (pKa ≈ 19–20), because the carbanion (enolate) formed is stabilised by resonance with the C=O group.`,
      R`<b>Aldol reaction:</b> aldehydes and ketones with at least one α-H react in dilute NaOH: the enolate of one molecule adds to the carbonyl of another, giving a β-hydroxy aldehyde (<b>aldol</b>) or β-hydroxy ketone (ketol). On heating these lose water to give α,β-unsaturated carbonyl compounds (<b>aldol condensation</b>).`,
      { mol: [['CC=O', '2 × ethanal'], ['CC(O)CC=O', '3-hydroxybutanal (aldol)'], ['CC=CC=O', 'but-2-enal (on heating)']], w: 150, h: 110, cap: R`Aldol reaction and condensation of ethanal.` },
      R`<b>Cross aldol:</b> with two different carbonyl compounds, four products are possible; if one has no α-H (like benzaldehyde), fewer form: benzaldehyde + ethanal → cinnamaldehyde (Claisen–Schmidt).`,
      { check: { q: R`Does benzaldehyde undergo aldol condensation with itself?`, ans: R`No: it has no α-hydrogen.` } }
    ] },

    { h: R`Cannizzaro reaction`, t: [4], blocks: [
      R`Aldehydes with <b>no α-hydrogen</b> (HCHO, C₆H₅CHO, (CH₃)₃CCHO) undergo self oxidation–reduction (<b>disproportionation</b>) with concentrated NaOH: one molecule is reduced to the alcohol and another is oxidised to the carboxylate salt.`,
      R`2HCHO + conc. NaOH → CH₃OH + HCOONa; 2C₆H₅CHO + conc. NaOH → C₆H₅CH₂OH + C₆H₅COONa. The key step is hydride (H⁻) transfer from one aldehyde to another. In a <b>crossed Cannizzaro</b> with HCHO, HCHO is always oxidised (to formate).`,
      { ex: { q: R`0.6 g of methanal undergoes the Cannizzaro reaction. How many moles of methanol form?`,
        steps: [R`0.6/30 = 0.02 mol HCHO; 2 HCHO → 1 CH₃OH + 1 HCOO⁻.`, R`0.02/2 = 0.01 mol.`], ans: R`0.01 mol CH₃OH (and 0.01 mol sodium methanoate)` } },
      { check: { q: R`Which compound is oxidised in a crossed Cannizzaro reaction of benzaldehyde with methanal?`, ans: R`Methanal (to formate); benzaldehyde is reduced to benzyl alcohol.` } }
    ] },

    { h: R`Haloform reaction`, t: [4], blocks: [
      R`Compounds containing the <b>CH₃CO–</b> group (methyl ketones and ethanal), or the CH₃CH(OH)– group (which is first oxidised to CH₃CO–), react with sodium hypohalite (X₂ + NaOH). The three α-H of the methyl group are replaced by X, and the CX₃ group is then cleaved to give the <b>haloform</b> CHX₃ and the carboxylate with one carbon less:`,
      R`R–CO–CH₃ + 3NaOX → R–CO–CX₃ → R–COONa + CHX₃. With iodine, yellow crystalline <b>iodoform</b> (CHI₃, characteristic smell) forms: the <b>iodoform test</b>.`,
      { ex: { q: R`What mass of iodoform (M = 393.7) forms from 5.8 g of propanone?`,
        steps: [R`CH₃COCH₃ + 3I₂ + 4NaOH → CHI₃ + CH₃COONa + 3NaI + 3H₂O.`, R`5.8/58 = 0.1 mol → 0.1 × 393.7 = 39.4 g.`], ans: R`≈ 39.4 g` } },
      { mistake: R`Saying methanol or propan-1-ol gives the iodoform test. Only compounds with CH₃CO– or CH₃CH(OH)– do: ethanol, propan-2-ol, ethanal, propanone, acetophenone do; methanol, propan-1-ol, propanal and pentan-3-one do not.` },
      { check: { q: R`Which gives a positive iodoform test: pentan-2-one or pentan-3-one?`, ans: R`Pentan-2-one (it has a CH₃CO– group).` } }
    ] },

    { h: R`Tests for aldehydes: Tollens' and Fehling's`, t: [5], blocks: [
      { table: { head: [R`Test`, R`Reagent`, R`Positive result`, R`Given by`], rows: [
        [R`Tollens'`, R`ammoniacal silver nitrate, [Ag(NH₃)₂]⁺`, R`silver mirror (Ag) on warming`, R`all aldehydes (aliphatic and aromatic); also HCOOH, α-hydroxy ketones`],
        [R`Fehling's`, R`Fehling A (CuSO₄) + Fehling B (alkaline sodium potassium tartrate)`, R`red-brown precipitate of Cu₂O`, R`aliphatic aldehydes (not aromatic aldehydes)`],
        [R`Benedict's`, R`alkaline Cu²⁺ citrate`, R`red Cu₂O`, R`aliphatic aldehydes, reducing sugars`],
        [R`Schiff's`, R`decolourised rosaniline`, R`pink/magenta colour restored`, R`aldehydes`]] } },
      R`Tollens': RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCOO⁻ + 2Ag↓ + 2H₂O + 4NH₃. Fehling's: RCHO + 2Cu²⁺ + 5OH⁻ → RCOO⁻ + Cu₂O↓ + 3H₂O. Ketones give neither test, which distinguishes them from aldehydes.`,
      { ex: { q: R`What mass of silver is deposited when 0.44 g of ethanal is completely oxidised by Tollens' reagent?`,
        steps: [R`0.44/44 = 0.01 mol ethanal; each gives 2 Ag.`, R`0.02 × 107.9 = 2.16 g.`], ans: R`≈ 2.16 g` } },
      { check: { q: R`How can benzaldehyde be distinguished from ethanal?`, ans: R`Fehling's solution: ethanal gives a red precipitate, benzaldehyde does not (both give Tollens'; ethanal also gives the iodoform test).` } }
    ] },

    { h: R`Carboxylic acids: physical properties`, t: [6], blocks: [
      R`Carboxylic acids contain the <b>carboxyl group</b>, –COOH. The lower members (C₁–C₉) are liquids with sharp smells; higher ones are waxy solids. They have <b>higher boiling points</b> than alcohols of similar mass, because they form <b>dimers</b> held by two hydrogen bonds (even in the vapour). Lower acids (up to C₄) are miscible with water; solubility falls with chain length. Benzoic acid is nearly insoluble in cold water.`,
      { fig: figDimer, cap: R`Carboxylic acids exist as hydrogen-bonded dimers.` },
      { check: { q: R`Why do carboxylic acids have higher boiling points than alcohols of similar molar mass?`, ans: R`They form strongly H-bonded dimers, which effectively doubles the molecular size.` } }
    ] },

    { h: R`Preparation of carboxylic acids`, t: [6], blocks: [
      { points: [
        R`<b>Oxidation</b> of 1° alcohols and aldehydes (KMnO₄, K₂Cr₂O₇/H⁺).`,
        R`<b>From nitriles and amides:</b> acid or base hydrolysis: R–CN → R–CONH₂ → R–COOH.`,
        R`<b>From Grignard reagents:</b> RMgX + CO₂ (dry ice) → RCOOMgX → (H₃O⁺) RCOOH. The acid has one carbon more than the alkyl halide.`,
        R`<b>From esters:</b> acid hydrolysis gives the acid directly; base hydrolysis (<b>saponification</b>) gives the carboxylate, acidified to the acid.`,
        R`<b>From acyl halides and anhydrides</b> by hydrolysis with water.`
      ] },
      { ex: { q: R`What mass of benzoic acid is obtained from 0.1 mol of phenylmagnesium bromide with excess dry ice, then acid?`,
        steps: [R`C₆H₅MgBr + CO₂ → C₆H₅COOMgBr → C₆H₅COOH (122 g/mol).`, R`0.1 × 122 = 12.2 g.`], ans: R`12.2 g` } },
      { check: { q: R`How can propanoic acid be made from bromoethane?`, ans: R`Make the Grignard reagent (Mg, dry ether), add CO₂, then hydrolyse; or convert to CH₃CH₂CN with KCN and hydrolyse.` } }
    ] },

    { h: R`Benzoic acid from alkylbenzenes`, t: [6], blocks: [
      R`Any alkylbenzene with at least one hydrogen on the benzylic carbon is oxidised by hot <b>alkaline KMnO₄</b> (or chromic acid) to <b>benzoic acid</b>; the whole side chain is cut down to –COOH, whatever its length. Tertiary alkyl side chains (–C(CH₃)₃, no benzylic H) are not oxidised.`,
      { mol: [['CCC1=CC=CC=C1', 'ethylbenzene'], ['OC(=O)C1=CC=CC=C1', 'benzoic acid']], w: 150, h: 110, cap: R`KMnO₄/KOH, heat, then H⁺: any side chain with a benzylic H becomes –COOH.` },
      { check: { q: R`What does p-xylene give on vigorous oxidation with KMnO₄?`, ans: R`Benzene-1,4-dicarboxylic acid (terephthalic acid).` } }
    ] },

    { h: R`Acidic strength and the factors affecting it`, t: [6], blocks: [
      R`Carboxylic acids are weak acids (pKa ≈ 4–5) but stronger than phenols and alcohols. They react with NaHCO₃ releasing CO₂ (a test for –COOH). The carboxylate ion is stabilised by <b>resonance</b>: the negative charge is shared equally between two oxygens (both C–O bonds are 127 pm).`,
      { table: { head: [R`Acid`, R`pKa`, R`Effect`], rows: [
        [R`CF₃COOH`, R`0.23`, R`three strongly −I F atoms`], [R`Cl₃CCOOH`, R`0.7`, R`−I`], [R`ClCH₂COOH`, R`2.86`, R`−I`], [R`HCOOH`, R`3.75`, R`no +I group`], [R`p-Nitrobenzoic acid`, R`3.41`, R`−R, −I`], [R`C₆H₅COOH`, R`4.19`, R`sp² ring`], [R`p-Methoxybenzoic acid`, R`4.46`, R`+R`], [R`CH₃COOH`, R`4.76`, R`+I of CH₃`]] } },
      { points: [R`<b>Electron-withdrawing groups</b> (−I, −R) increase acidity; more of them, and closer to –COOH, have a greater effect. F > Cl > Br > I in −I.`, R`<b>Electron-donating groups</b> (+I, +R) decrease acidity.`, R`Direct attachment of a phenyl or vinyl group increases acidity (sp² carbon is electron-withdrawing): benzoic acid is stronger than acetic acid.`] },
      { check: { q: R`Arrange in increasing acidity: CH₃COOH, ClCH₂COOH, HCOOH, CF₃COOH.`, ans: R`CH₃COOH < HCOOH < ClCH₂COOH < CF₃COOH.` } }
    ] },

    { h: R`Reactions of carboxylic acids`, t: [6], blocks: [
      { points: [
        R`<b>Reduction</b> to 1° alcohols with LiAlH₄ or diborane (B₂H₆ does not reduce esters, nitro or halo groups).`,
        R`<b>Hell–Volhard–Zelinsky (HVZ) reaction:</b> acids with an α-H react with Cl₂ or Br₂ and red phosphorus to give α-halo acids: CH₃COOH → ClCH₂COOH.`,
        R`<b>Esters:</b> RCOOH + R'OH ⇌ RCOOR' + H₂O (H⁺).`,
        R`<b>Acid chlorides:</b> with PCl₅, PCl₃ or SOCl₂ (best): RCOOH + SOCl₂ → RCOCl + SO₂ + HCl.`,
        R`<b>Amides:</b> RCOOH + NH₃ → RCOO⁻NH₄⁺ → (heat) RCONH₂ + H₂O. Anhydrides by heating with P₂O₅ or conc. H₂SO₄.`,
        R`<b>Decarboxylation:</b> sodium salt + soda lime → alkane with one C less; Kolbe electrolysis → R–R.`,
        R`<b>Ring substitution</b> in benzoic acid: –COOH is a deactivating meta director (nitration → m-nitrobenzoic acid); it does not undergo Friedel–Crafts reactions.`
      ] },
      { mol: [['CC(=O)O', 'ethanoic acid'], ['CC(=O)Cl', 'ethanoyl chloride'], ['CC(N)=O', 'ethanamide'], ['ClCC(=O)O', 'chloroethanoic acid (HVZ)']], w: 130, h: 110, cap: R`Some derivatives of ethanoic acid.` },
      { check: { q: R`Which reagent converts CH₃COOH into ClCH₂COOH?`, ans: R`Cl₂ with red phosphorus (Hell–Volhard–Zelinsky reaction).` } }
    ] }
  ],
  summary: [
    R`Alcohols: 1°/2°/3°; from alkenes (H₃O⁺ Markovnikov; hydroboration anti-Markovnikov), carbonyl reduction, Grignard. H-bonding → high bp. Lucas test: 3° immediate, 2° ~5 min, 1° none.`,
    R`Dehydration via carbocation: 443 K → alkene, 413 K → ether; 3° > 2° > 1°. Oxidation: 1° → aldehyde (PCC) → acid; 2° → ketone; 3° resistant.`,
    R`Phenol (pKa 10): resonance-stabilised phenoxide; −NO₂ increases, −CH₃ decreases acidity; no reaction with NaHCO₃. Bromine water → 2,4,6-tribromophenol; Reimer–Tiemann → salicylaldehyde; Kolbe → salicylic acid → aspirin; Zn dust → benzene.`,
    R`Ethers: Williamson (1° halide + alkoxide); HI cleavage (smaller group → RI; tertiary → R₃CI; anisole → phenol + CH₃I).`,
    R`Carbonyl: sp², polar; aldehydes more reactive than ketones. Preparation: Rosenmund, Stephen, DIBAL-H, Etard, Gattermann–Koch.`,
    R`Nucleophilic addition: HCN, NaHSO₃, alcohols (acetals), RMgX; addition–elimination with NH₂–Z (oxime, hydrazone, 2,4-DNP, semicarbazone).`,
    R`Clemmensen (Zn–Hg/HCl), Wolff–Kishner (N₂H₄/KOH): C=O → CH₂. Aldol (α-H, dil. NaOH); Cannizzaro (no α-H, conc. NaOH); haloform (CH₃CO–); Tollens' (all aldehydes), Fehling's (aliphatic).`,
    R`Acids: H-bonded dimers; from nitriles, RMgX + CO₂, oxidation; −I groups increase acidity; HVZ α-halogenation; SOCl₂ → RCOCl; –COOH is meta-directing.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §20.2 Alcohols and Ethers`, url: 'https://openstax.org/books/chemistry-2e/pages/20-2-alcohols-and-ethers' },
    { t: R`OpenStax Chemistry 2e, §20.3 Aldehydes, Ketones, Carboxylic Acids, and Esters`, url: 'https://openstax.org/books/chemistry-2e/pages/20-3-aldehydes-ketones-carboxylic-acids-and-esters' },
    { t: R`Wikipedia: Reimer–Tiemann reaction`, url: 'https://en.wikipedia.org/wiki/Reimer%E2%80%93Tiemann_reaction' },
    { t: R`Wikipedia: Aldol condensation`, url: 'https://en.wikipedia.org/wiki/Aldol_condensation' },
    { t: R`Wikipedia: Cannizzaro reaction`, url: 'https://en.wikipedia.org/wiki/Cannizzaro_reaction' },
    { t: R`Wikipedia: Haloform reaction`, url: 'https://en.wikipedia.org/wiki/Haloform_reaction' }
  ]
});
})();
