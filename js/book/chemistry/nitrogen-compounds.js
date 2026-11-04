// Book chapter: Organic Compounds Containing Nitrogen (Amines and Diazonium Salts). Full theory with structures.
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 10, math: false, bold: true }) : ''); }

// ---------- figures ----------
var figPyramid = D.svg(200, 140, [
  D.mol({ atoms: [{ x: 100, y: 65, s: 'N', color: 'b', lp: [90] }, { x: 45, y: 100, s: 'R' }, { x: 155, y: 100, s: 'H' }, { x: 112, y: 118, s: 'H' }], bonds: [[0, 1], [0, 2], [0, 3, 'w']] }),
  lab(100, 134, 'sp³ N, pyramidal; C–N–H ≈ 108°', 'm', 9)
], 'Pyramidal amine');

var figSandmeyer = D.svg(500, 250, [
  box(185, 105, 130, 40, 'C₆H₅N₂⁺Cl⁻', 'p', 11),
  [['Cu₂Cl₂/HCl', 'C₆H₅Cl', 70, 25, 'g'], ['Cu₂Br₂/HBr', 'C₆H₅Br', 250, 20, 'o'], ['CuCN/KCN', 'C₆H₅CN', 430, 25, 'b'], ['KI', 'C₆H₅I', 470, 125, 'p'],
   ['HBF₄, heat', 'C₆H₅F', 430, 225, 'g'], ['H₂O, warm', 'C₆H₅OH', 250, 230, 'r'], ['H₃PO₂ or C₂H₅OH', 'C₆H₆', 70, 225, 'k'], ['phenol (OH⁻)', 'azo dye', 35, 125, 'o']].map(function (p) {
    var x = p[2], y = p[3], cx = 250, cy = 125, dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy);
    return D.arrow(cx + dx / L * 70, cy + dy / L * 26, x - dx / L * 26, y - dy / L * 12, { color: 'm', w: 1.3, head: 7 }) +
      lab(x, y, p[1], p[4], 11, { bold: true }) + lab((cx + x) / 2 + (dy === 0 ? 0 : 0), (cy + y) / 2 - 8, p[0], 'm', 9);
  }).join('')
], 'Reactions of benzenediazonium chloride');

// ---------- chapter text ----------
JEE.book('chemistry', 'nitrogen-compounds', {
  intro: [
    R`Amines are derivatives of ammonia in which one or more hydrogen atoms are replaced by alkyl or aryl groups. They are found in proteins, vitamins, alkaloids and hormones, and are used to make dyes, drugs and polymers.`,
    R`This chapter covers the structure, naming and preparation of amines, why they are basic (and how structure changes basicity), their reactions and identification tests, and the very useful arenediazonium salts that turn aromatic amines into almost any other benzene derivative.`
  ],
  sections: [
    { h: R`Primary, secondary and tertiary amines`, t: [0], blocks: [
      R`Replacing one, two or three hydrogens of NH₃ gives <b>primary</b> (RNH₂), <b>secondary</b> (R₂NH) and <b>tertiary</b> (R₃N) amines. If all groups are alkyl, the amine is aliphatic; if N is attached to a benzene ring, it is an aryl amine (aniline, C₆H₅NH₂). Simple amines have identical groups; mixed amines different groups. Four groups on N give a <b>quaternary ammonium salt</b>, R₄N⁺X⁻.`,
      { mol: [['CCN', 'ethanamine (1°)'], ['CNC', 'N-methylmethanamine (2°)'], ['CN(C)C', 'N,N-dimethylmethanamine (3°)'], ['NC1=CC=CC=C1', 'aniline (aryl, 1°)']], w: 140, h: 110, cap: R`Primary, secondary and tertiary amines; note that 1°/2°/3° refers to the number of groups on nitrogen, not on carbon.` },
      { mistake: R`Using the alcohol definition. (CH₃)₃C–NH₂ is a <b>primary</b> amine (one group on N), even though the carbon is tertiary.` },
      { ex: { q: R`Classify each amine as 1°, 2° or 3°: (a) C₆H₅NHCH₃ (b) (CH₃)₃C–NH₂ (c) (C₂H₅)₃N (d) H₂N–CH₂–CH₂–NH₂.`,
        steps: [R`Count the carbon groups attached to N: (a) two (phenyl and methyl); (b) one (tert-butyl); (c) three; (d) one on each N.`], ans: R`(a) 2° (b) 1° (c) 3° (d) 1° (a diamine)` } },
      { check: { q: R`Classify (CH₃)₂N–C₂H₅.`, ans: R`Tertiary amine (three carbon groups on N): N,N-dimethylethanamine.` } }
    ] },

    { h: R`Structure and IUPAC nomenclature`, t: [0], blocks: [
      R`The nitrogen in amines is <b>sp³</b> hybridised, with three bonds and one lone pair: amines are <b>pyramidal</b>, and the C–N–H or C–N–C angle (≈108° in trimethylamine) is slightly less than tetrahedral because the lone pair repels the bonds more strongly.`,
      { fig: figPyramid, cap: R`Like ammonia, amines are pyramidal with a lone pair on nitrogen.` },
      R`<b>IUPAC names:</b> the -e of the alkane is replaced by <b>-amine</b> (CH₃CH₂NH₂: ethanamine; CH₃CH(NH₂)CH₃: propan-2-amine). In secondary and tertiary amines, the largest group is the parent and the others are prefixed with N (CH₃NHC₂H₅: N-methylethanamine). H₂N–CH₂CH₂–NH₂ is ethane-1,2-diamine. Aryl amines are named as derivatives of benzenamine (aniline): C₆H₅NHCH₃ is N-methylaniline; CH₃C₆H₄NH₂ are toluidines.`,
      R`<b>Physical properties:</b> lower aliphatic amines are gases with a fishy smell. 1° and 2° amines form intermolecular H-bonds (weaker than in alcohols, since N is less electronegative than O), so their boiling points are higher than those of similar hydrocarbons but lower than alcohols. 3° amines cannot H-bond with each other. Order of bp for isomers: 1° > 2° > 3°. Lower amines are water-soluble. Aniline is a colourless liquid that darkens on standing in air (oxidation).`,
      { ex: { q: R`Give IUPAC names: (a) CH₃CH₂CH(NH₂)CH₃ (b) C₆H₅CH₂NH₂ (c) (CH₃)₂CHNH₂ (d) CH₃N(C₂H₅)₂.`,
        steps: [R`Find the longest chain carrying N; for 2° and 3° amines, the largest group on N is the parent and the others take the prefix N-.`], ans: R`(a) butan-2-amine (b) phenylmethanamine (benzylamine) (c) propan-2-amine (d) N-ethyl-N-methylethanamine` } },
      { check: { q: R`Why does trimethylamine have a lower boiling point than propan-1-amine?`, ans: R`It has no N–H bond, so it cannot form intermolecular hydrogen bonds.` } }
    ] },

    { h: R`Preparation: reduction of nitro compounds, nitriles and amides; ammonolysis`, t: [0], blocks: [
      { points: [
        R`<b>Reduction of nitro compounds:</b> with H₂/Ni, Pt or Pd, or with metal and acid (Sn/HCl or Fe/HCl). C₆H₅NO₂ + 3H₂ → C₆H₅NH₂ + 2H₂O. Fe scrap with HCl is preferred industrially because the FeCl₂ formed is hydrolysed to release HCl, so only a little acid is needed.`,
        R`<b>Ammonolysis of alkyl halides</b> (Hofmann): R–X + NH₃ → RNH₂ → R₂NH → R₃N → R₄N⁺X⁻. A mixture forms; a large excess of NH₃ favours the primary amine. Aryl halides do not react (poor SN reactivity).`,
        R`<b>Reduction of nitriles:</b> R–C≡N + 4[H] (LiAlH₄ or H₂/Ni, or Na/C₂H₅OH, the Mendius reduction) → R–CH₂–NH₂. This is a <b>step-up</b>: the amine has one carbon more than the alkyl halide used to make the nitrile.`,
        R`<b>Reduction of amides:</b> R–CONH₂ + LiAlH₄ (then H₂O) → R–CH₂–NH₂ (same number of carbons).`
      ] },
      { mol: [['[O-][N+](=O)C1=CC=CC=C1', 'nitrobenzene'], ['NC1=CC=CC=C1', 'aniline']], w: 150, h: 110, cap: R`Sn/HCl or Fe/HCl (or catalytic hydrogenation) reduces nitrobenzene to aniline.` },
      { ex: { q: R`How is aniline made from benzene? Why can it not be made by heating chlorobenzene with ammonia?`,
        steps: [R`Nitrate benzene (conc. HNO₃ + conc. H₂SO₄) to nitrobenzene, then reduce with Sn/HCl (or Fe/HCl) and neutralise with NaOH.`, R`The C–Cl bond of chlorobenzene has partial double-bond character (resonance with the ring), so NH₃ cannot displace Cl under ordinary conditions.`], ans: R`Benzene → nitrobenzene → aniline; aryl halides resist nucleophilic substitution` } },
      { check: { q: R`How can ethanamine be made from methyl bromide?`, ans: R`CH₃Br + KCN → CH₃CN; reduce with LiAlH₄ or H₂/Ni → CH₃CH₂NH₂ (ascent by one carbon).` } }
    ] },

    { h: R`Hoffmann bromamide degradation`, t: [0], blocks: [
      R`An amide heated with <b>Br₂ and aqueous (or ethanolic) NaOH</b> gives a primary amine with <b>one carbon less</b>: R–CONH₂ + Br₂ + 4NaOH → R–NH₂ + Na₂CO₃ + 2NaBr + 2H₂O. The alkyl or aryl group migrates from the carbonyl carbon to nitrogen (via an isocyanate, R–N=C=O, which is hydrolysed).`,
      { mol: [['CC(N)=O', 'ethanamide'], ['CN', 'methanamine']], w: 140, h: 100, cap: R`Hoffmann bromamide degradation: a step-down reaction.` },
      { ex: { q: R`What mass of methanamine is obtained from 5.9 g of ethanamide by the Hoffmann reaction (100% yield)?`,
        steps: [R`CH₃CONH₂ (59) → CH₃NH₂ (31); 5.9/59 = 0.1 mol.`, R`0.1 × 31 = 3.1 g.`], ans: R`3.1 g` } },
      R`<b>What happens in the flask?</b> Br₂ and NaOH first replace an H on the amide nitrogen by Br (an N-bromoamide). The base removes the remaining N–H, and the alkyl group moves from carbon to nitrogen as Br⁻ leaves, giving an isocyanate R–N=C=O. Hydrolysis of the isocyanate releases CO₂ (trapped as carbonate) and leaves the amine. The carbon that is lost is the C=O carbon.`,
      { ex: { q: R`Identify the amine formed when propanamide is treated with Br₂ and NaOH.`,
        steps: [R`CH₃CH₂CONH₂ loses its C=O carbon: CH₃CH₂–NH₂.`], ans: R`Ethanamine (one carbon fewer)` } },
      { check: { q: R`Which amide gives aniline in the Hoffmann bromamide reaction?`, ans: R`Benzamide, C₆H₅CONH₂.` } }
    ] },

    { h: R`Gabriel phthalimide synthesis`, t: [0], blocks: [
      R`Phthalimide (an imide whose N–H is acidic) is converted by ethanolic KOH into potassium phthalimide. This nucleophile attacks an alkyl halide (SN2) to give N-alkylphthalimide, which is hydrolysed (alkali, or hydrazine) to the <b>pure primary amine</b>, uncontaminated by 2° and 3° amines.`,
      { mol: [['O=C1NC(=O)C2=CC=CC=C12', 'phthalimide'], ['CCN1C(=O)C2=CC=CC=C2C1=O', 'N-ethylphthalimide'], ['CCN', 'ethanamine']], w: 150, h: 120, cap: R`Gabriel synthesis of ethanamine using bromoethane.` },
      R`<b>Limitation:</b> aromatic primary amines (aniline) cannot be made this way, because aryl halides do not undergo nucleophilic substitution with the phthalimide anion.`,
      { ex: { q: R`Which amine is obtained by Gabriel synthesis from benzyl chloride? Could you make p-toluidine (4-methylaniline) this way?`,
        steps: [R`Benzyl chloride, C₆H₅CH₂Cl, is an alkyl-type halide that reacts readily by SN2 with potassium phthalimide; hydrolysis gives C₆H₅CH₂NH₂.`, R`p-Toluidine needs N on the ring carbon, which would require an aryl halide (p-chlorotoluene), and aryl halides do not react.`], ans: R`Benzylamine; no` } },
      { check: { q: R`Why is the Gabriel synthesis useful?`, ans: R`It gives pure primary amines without secondary or tertiary amines as by-products.` } }
    ] },

    { h: R`Basic character of amines`, t: [1], blocks: [
      R`The lone pair on nitrogen makes amines <b>Lewis and Brønsted bases</b>: R–NH₂ + H₂O ⇌ R–NH₃⁺ + OH⁻, and with acids they form salts (RNH₃⁺Cl⁻), which are soluble in water and regenerate the amine with NaOH. Basic strength is measured by Kb (or pKb = −log Kb; smaller pKb = stronger base).`,
      { table: { head: [R`Amine`, R`pKb (in water)`], rows: [[R`Ammonia`, R`4.75`], [R`Methanamine`, R`3.38`], [R`N-Methylmethanamine`, R`3.27`], [R`N,N-Dimethylmethanamine`, R`4.22`], [R`Ethanamine`, R`3.29`], [R`N-Ethylethanamine`, R`3.00`], [R`N,N-Diethylethanamine`, R`3.25`], [R`Benzenamine (aniline)`, R`9.38`], [R`N-Methylaniline`, R`9.30`], [R`p-Toluidine`, R`8.92`], [R`p-Nitroaniline`, R`13.0`]] } },
      { points: [
        R`<b>Aliphatic amines are stronger bases than ammonia</b>: alkyl groups (+I) push electron density onto N.`,
        R`<b>In the gas phase</b> the order is simply 3° > 2° > 1° > NH₃. <b>In water</b>, the cation is also stabilised by hydration (H-bonding through N–H), which favours 1° and 2°; steric hindrance to solvation hurts 3°. Result: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃ and (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃.`,
        R`<b>Aryl amines are much weaker bases</b>: the lone pair is delocalised into the ring by resonance, and the anilinium ion has fewer resonance structures than aniline. Electron-donating groups (–CH₃, –OCH₃ at para) increase, and electron-withdrawing groups (–NO₂, –CN, –X) decrease the basicity of aniline.`
      ] },
      { ex: { q: R`Calculate the pH of a 0.10 M solution of methanamine (pKb = 3.38).`,
        steps: [R`pOH = ½(pKb − log C) = ½(3.38 + 1) = 2.19.`, R`pH = 14 − 2.19 = 11.81.`], ans: R`pH ≈ 11.8` } },
      { ex: { q: R`Explain why aniline (pKb 9.38) is a much weaker base than cyclohexylamine (pKb 3.3).`,
        steps: [R`In aniline the nitrogen lone pair is delocalised into the benzene ring (five resonance structures), so it is less available to accept a proton.`, R`Protonation destroys this resonance: the anilinium ion has only two Kekulé structures. In cyclohexylamine there is no ring to share the lone pair, and the alkyl group is electron-releasing.`], ans: R`Resonance makes the lone pair of aniline less available` } },
      { ex: { q: R`Arrange in increasing basic strength: p-nitroaniline, aniline, p-toluidine.`,
        steps: [R`–NO₂ withdraws electrons (−R, −I), pulling the lone pair further away; –CH₃ pushes electrons (+I, hyperconjugation) onto the ring and nitrogen.`], ans: R`p-nitroaniline < aniline < p-toluidine (pKb 13.0, 9.38, 8.92)` } },
      { check: { q: R`Arrange in increasing basicity in water: aniline, NH₃, CH₃NH₂, (CH₃)₂NH.`, ans: R`Aniline < NH₃ < CH₃NH₂ < (CH₃)₂NH.` } }
    ] },

    { h: R`Alkylation and acylation`, t: [0], blocks: [
      R`<b>Alkylation:</b> amines are nucleophiles and react with alkyl halides: RNH₂ + R'X → RNHR' → RNR'₂ → R₄N⁺X⁻ (quaternary salt), a series of SN2 reactions.`,
      R`<b>Acylation:</b> 1° and 2° amines (with N–H) react with acid chlorides, anhydrides or esters (nucleophilic acyl substitution) to give <b>amides</b>; pyridine is added to remove HCl. C₂H₅NH₂ + CH₃COCl → C₂H₅NHCOCH₃ + HCl. <b>Benzoylation</b> uses benzoyl chloride (C₆H₅COCl): CH₃NH₂ + C₆H₅COCl → CH₃NHCOC₆H₅ + HCl. Tertiary amines do not react (no H on N).`,
      { mol: [['NC1=CC=CC=C1', 'aniline'], ['CC(=O)NC1=CC=CC=C1', 'acetanilide (N-phenylethanamide)']], w: 160, h: 110, cap: R`Acetylation of aniline: the –NHCOCH₃ group is a milder activator than –NH₂.` },
      { h3: R`Electrophilic substitution in aniline` },
      { points: [R`<b>Bromination:</b> aniline + bromine water at room temperature gives a white precipitate of <b>2,4,6-tribromoaniline</b> immediately (–NH₂ is strongly activating). To get only the mono-bromo (para) product, the –NH₂ is first acetylated, then brominated, then hydrolysed.`, R`<b>Nitration:</b> direct nitration oxidises aniline and gives, besides o- and p-, a large amount (about 47%) of <b>m-nitroaniline</b>, because in strong acid aniline is protonated to the anilinium ion (–NH₃⁺ is meta-directing). Protection by acetylation gives mainly p-nitroaniline.`, R`<b>Sulphonation:</b> heating anilinium hydrogensulphate at 453–473 K gives <b>sulphanilic acid</b> (4-aminobenzenesulphonic acid), which exists as a zwitterion.`, R`Aniline does <b>not</b> undergo Friedel–Crafts reactions: it forms a salt with the Lewis acid AlCl₃, and the positive N deactivates the ring.`] },
      { ex: { q: R`What mass of 2,4,6-tribromoaniline (M = 329.8) is formed from 0.93 g of aniline with excess bromine water?`,
        steps: [R`0.93/93 = 0.01 mol → 0.01 mol product.`, R`0.01 × 329.8 = 3.30 g.`], ans: R`≈ 3.3 g` } },
      { ex: { q: R`How would you prepare p-bromoaniline from aniline?`,
        steps: [R`Protect: acetylate with (CH₃CO)₂O to acetanilide; –NHCOCH₃ is a milder o,p-director and its bulk favours para.`, R`Brominate (Br₂ in acetic acid) to p-bromoacetanilide.`, R`Deprotect: hydrolyse with aqueous acid or alkali.`], ans: R`Aniline → acetanilide → p-bromoacetanilide → p-bromoaniline` } },
      { ex: { q: R`What is the product of aniline with excess methyl iodide?`,
        steps: [R`Each CH₃I alkylates the nitrogen in turn until no N–H remains, then a fourth group gives the quaternary salt.`], ans: R`N,N,N-trimethylanilinium iodide, C₆H₅N(CH₃)₃⁺I⁻` } },
      { check: { q: R`Why does nitration of aniline give a lot of meta product?`, ans: R`In the acidic nitrating mixture aniline is protonated to anilinium (–NH₃⁺), which is meta-directing.` } }
    ] },

    { h: R`Carbylamine reaction`, t: [2], blocks: [
      R`Only <b>primary</b> amines (aliphatic and aromatic), when warmed with <b>chloroform and alcoholic KOH</b>, give <b>isocyanides</b> (carbylamines) with an extremely unpleasant smell:`,
      R`R–NH₂ + CHCl₃ + 3KOH → R–N≡C + 3KCl + 3H₂O. Secondary and tertiary amines do not give this reaction, so it is a <b>test for primary amines</b> (the isocyanide test).`,
      { mol: [['NC1=CC=CC=C1', 'aniline'], ['[C-]#[N+]C1=CC=CC=C1', 'phenyl isocyanide']], w: 150, h: 110, cap: R`Aniline gives phenyl isocyanide (foul smell).` },
      { ex: { q: R`Four amines have the formula C₃H₉N. Which of them give the carbylamine test?`,
        steps: [R`Isomers: propan-1-amine and propan-2-amine (1°), N-methylethanamine (2°) and N,N-dimethylmethanamine (3°).`, R`Only 1° amines, with two N–H bonds, can form isocyanides.`], ans: R`Propan-1-amine and propan-2-amine` } },
      R`Isocyanides are isomers of nitriles: in R–N≡C the alkyl group is bonded to nitrogen, while in a nitrile R–C≡N it is bonded to carbon. Their smell is so strong and unpleasant that the test is done in a fume cupboard with tiny amounts.`,
      { check: { q: R`Which type of amine gives the carbylamine test?`, ans: R`Primary amines only.` } }
    ] },

    { h: R`Reaction with nitrous acid`, t: [2], blocks: [
      R`Nitrous acid (HNO₂) is unstable, so it is made in situ from NaNO₂ and dilute HCl. Its reactions differ for each class of amine:`,
      { table: { head: [R`Amine`, R`Reaction with HNO₂`, R`Observation`], rows: [
        [R`1° aliphatic`, R`RNH₂ + HNO₂ → [RN₂⁺Cl⁻] → ROH + N₂ + HCl (unstable diazonium salt decomposes)`, R`brisk effervescence of N₂ (used to estimate amino acids and proteins)`],
        [R`1° aromatic (273–278 K)`, R`C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O`, R`stable benzenediazonium chloride solution (diazotisation)`],
        [R`2° (aliphatic or aromatic)`, R`R₂NH + HNO₂ → R₂N–N=O + H₂O`, R`yellow oily N-nitrosamine (Liebermann's nitroso test)`],
        [R`3° aliphatic`, R`forms a soluble nitrite salt`, R`no visible change`],
        [R`3° aromatic (N,N-dimethylaniline)`, R`ring nitrosation at para: p-nitroso-N,N-dimethylaniline`, R`green crystals`]] } },
      { ex: { q: R`A compound C₂H₇N reacts with nitrous acid with brisk effervescence and gives a compound C₂H₆O. Identify both.`,
        steps: [R`Evolution of N₂ with HNO₂ is the sign of a 1° aliphatic amine; the diazonium ion breaks down to an alcohol.`], ans: R`Ethanamine, C₂H₅NH₂, giving ethanol` } },
      { check: { q: R`What is observed when ethanamine is treated with NaNO₂ and HCl?`, ans: R`Brisk effervescence of nitrogen gas (ethanol also forms).` } }
    ] },

    { h: R`Hinsberg test and other distinguishing tests`, t: [2], blocks: [
      R`<b>Hinsberg's reagent</b> is benzenesulphonyl chloride, C₆H₅SO₂Cl. It distinguishes the three classes of amines:`,
      { table: { head: [R`Amine`, R`Product`, R`Behaviour with KOH`], rows: [
        [R`1°`, R`N-alkylbenzenesulphonamide, C₆H₅SO₂NHR (has an acidic H on N)`, R`soluble in alkali`],
        [R`2°`, R`N,N-dialkylbenzenesulphonamide, C₆H₅SO₂NR₂ (no H on N)`, R`insoluble in alkali`],
        [R`3°`, R`no reaction`, R`—`]] } },
      { mol: [['CCNS(=O)(=O)C1=CC=CC=C1', 'from a 1° amine (soluble in KOH)'], ['CCN(CC)S(=O)(=O)C1=CC=CC=C1', 'from a 2° amine (insoluble)']], w: 170, h: 120, cap: R`The H on N of the 1° sulphonamide is acidic (next to the strongly electron-withdrawing SO₂ group).` },
      { points: [R`<b>Carbylamine test:</b> only 1° amines (foul-smelling isocyanide).`, R`<b>Nitrous acid test:</b> 1° aliphatic → N₂ gas; 1° aromatic → diazonium salt (gives orange dye with β-naphthol); 2° → yellow oily nitrosamine; 3° → no gas.`, R`<b>Azo dye test</b> for aromatic 1° amines: diazotise and couple with alkaline β-naphthol → orange-red dye.`] },
      { ex: { q: R`How would you distinguish (a) methanamine from N-methylmethanamine (b) aniline from N-methylaniline?`,
        steps: [R`(a) Carbylamine test: only methanamine (1°) gives the foul isocyanide smell. Hinsberg: methanamine's sulphonamide dissolves in KOH; dimethylamine's does not.`, R`(b) Carbylamine test again (aniline gives phenyl isocyanide); or diazotise and add β-naphthol: only aniline gives an orange dye.`], ans: R`Carbylamine or Hinsberg tests` } },
      { check: { q: R`An amine reacts with Hinsberg's reagent to give a product insoluble in KOH. What is it?`, ans: R`A secondary amine.` } }
    ] },

    { h: R`Diazonium salts: preparation and importance`, t: [3], blocks: [
      R`<b>Arenediazonium salts</b>, Ar–N₂⁺X⁻, are made by <b>diazotisation</b>: aniline in cold dilute HCl is treated with aqueous NaNO₂ at <b>273–278 K</b>: C₆H₅NH₂ + NaNO₂ + 2HCl → C₆H₅N₂⁺Cl⁻ + NaCl + 2H₂O.`,
      R`<b>Stability:</b> aliphatic diazonium salts decompose instantly. Arenediazonium salts are stable in cold solution because the positive charge is delocalised over the benzene ring by resonance. They are usually used immediately; solid salts are explosive when dry (the fluoroborate is an exception and can be stored).`,
      R`<b>Importance:</b> the –N₂⁺ group is an excellent leaving group (N₂ gas). It can be replaced by F, Cl, Br, I, CN, OH, NO₂ or H, groups that often cannot be introduced directly into the ring. Diazonium salts also couple to give azo dyes.`,
      { ex: { q: R`What volume of N₂ (STP) is released when 0.1 mol of benzenediazonium chloride is warmed with water? What is the organic product?`,
        steps: [R`C₆H₅N₂⁺Cl⁻ + H₂O → C₆H₅OH + N₂ + HCl; 0.1 mol N₂ × 22.4 L.`], ans: R`2.24 L N₂; phenol` } },
      { mistake: R`Writing a diazonium salt for an aliphatic amine as a stable product. Alkanediazonium ions lose N₂ instantly to give a carbocation, which forms a mixture of alcohol, alkene and halide; only arenediazonium salts are stable enough to use.` },
      { check: { q: R`Why is diazotisation carried out at 273–278 K?`, ans: R`Diazonium salts decompose at higher temperatures (to phenol and N₂).` } }
    ] },

    { h: R`Sandmeyer and related replacement reactions`, t: [3], blocks: [
      { fig: figSandmeyer, cap: R`Benzenediazonium chloride is a gateway to many benzene derivatives.` },
      { table: { head: [R`Replacement`, R`Reagent`, R`Name`], rows: [
        [R`–Cl, –Br`, R`Cu₂Cl₂/HCl or Cu₂Br₂/HBr`, R`Sandmeyer reaction`],
        [R`–Cl, –Br`, R`Cu powder + HCl or HBr`, R`Gattermann reaction`],
        [R`–CN`, R`CuCN/KCN`, R`Sandmeyer`],
        [R`–I`, R`KI (no catalyst needed)`, R`—`],
        [R`–F`, R`HBF₄, then heat ArN₂⁺BF₄⁻`, R`Balz–Schiemann`],
        [R`–OH`, R`warm water`, R`—`],
        [R`–NO₂`, R`HBF₄, then NaNO₂/Cu, heat`, R`—`],
        [R`–H`, R`H₃PO₂ (hypophosphorous acid) or ethanol`, R`deamination`]] } },
      { tip: R`Deamination with H₃PO₂ lets you use –NH₂ as a temporary directing group: e.g. making 1,3,5-tribromobenzene from aniline (brominate, diazotise, remove N₂⁺).` },
      { ex: { q: R`Show how aniline can be converted into (a) phenol (b) chlorobenzene (c) iodobenzene (d) benzene.`,
        steps: [R`First diazotise: NaNO₂ + HCl at 273–278 K gives C₆H₅N₂⁺Cl⁻.`, R`Then (a) warm with water; (b) Cu₂Cl₂/HCl; (c) KI; (d) H₃PO₂.`], ans: R`Each is one step from benzenediazonium chloride` } },
      { ex: { q: R`Make 1,3,5-tribromobenzene from aniline.`,
        steps: [R`Bromine water gives 2,4,6-tribromoaniline (the –NH₂ directs Br to both ortho positions and the para position).`, R`Diazotise, then remove the –N₂⁺ group with H₃PO₂. The three Br atoms are left meta to each other.`], ans: R`Aniline → 2,4,6-tribromoaniline → diazonium salt → 1,3,5-tribromobenzene` } },
      { check: { q: R`How is benzonitrile made from aniline?`, ans: R`Diazotise (NaNO₂/HCl, 273–278 K), then treat with CuCN/KCN (Sandmeyer).` } }
    ] },

    { h: R`Azo coupling reactions`, t: [3], blocks: [
      R`The diazonium ion is a weak electrophile. It attacks the <b>para</b> position of strongly activated rings (phenols, aromatic amines) to form brightly coloured <b>azo compounds</b> (–N=N– linking two rings), keeping the nitrogen atoms. These are <b>azo dyes</b>.`,
      { points: [R`With phenol in mildly alkaline solution: <b>p-hydroxyazobenzene</b> (orange).`, R`With aniline in mildly acidic solution: <b>p-aminoazobenzene</b> (yellow).`, R`With β-naphthol (alkaline): an orange-red dye, used as a test for aromatic primary amines.`] },
      { mol: [['OC1=CC=C(C=C1)/N=N/C1=CC=CC=C1', 'p-hydroxyazobenzene (orange)'], ['NC1=CC=C(C=C1)/N=N/C1=CC=CC=C1', 'p-aminoazobenzene (yellow)']], w: 210, h: 110, cap: R`Coupling occurs at the para position of the activated ring.` },
      R`Methyl orange (an acid–base indicator) is an azo dye made by coupling diazotised sulphanilic acid with N,N-dimethylaniline.`,
      { ex: { q: R`Why is coupling with phenol done in mildly alkaline solution, but with aniline in mildly acidic solution?`,
        steps: [R`In alkali, phenol becomes phenoxide (–O⁻), a far stronger activator, so the weak diazonium electrophile attacks it easily. Too much alkali would convert the diazonium ion into an unreactive diazotate.`, R`For aniline, mild acid keeps the diazonium ion intact, while the solution is not acidic enough to protonate all the aniline (anilinium would be deactivated).`], ans: R`Each pH maximises the activated form of the partner while keeping the diazonium ion stable` } },
      { check: { q: R`What is the colour of the product of benzenediazonium chloride with phenol?`, ans: R`Orange (p-hydroxyazobenzene).` } }
    ] }
  ],
  summary: [
    R`Amines: 1° RNH₂, 2° R₂NH, 3° R₃N (by groups on N); sp³, pyramidal; bp 1° > 2° > 3°.`,
    R`Preparation: reduction of RNO₂ (Sn/HCl, Fe/HCl, H₂), RCN (LiAlH₄; one C more), RCONH₂ (LiAlH₄); ammonolysis (mixture); Hoffmann bromamide (one C less); Gabriel (pure 1° aliphatic only).`,
    R`Basicity: aliphatic > NH₃ > aromatic. In water: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃; (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃. –NO₂ weakens, –CH₃/–OCH₃ strengthen aniline's basicity.`,
    R`Reactions: alkylation, acylation (protects –NH₂); aniline + Br₂ water → 2,4,6-tribromoaniline; nitration gives m-product via anilinium; no Friedel–Crafts; sulphanilic acid.`,
    R`Tests: carbylamine (1° only, CHCl₃/KOH); Hinsberg (1° sulphonamide soluble in KOH, 2° insoluble, 3° no reaction); HNO₂ (1° aliphatic → N₂; 2° → yellow nitrosamine).`,
    R`Diazotisation: ArNH₂ + NaNO₂/HCl at 273–278 K. Replacements: Sandmeyer (Cl, Br, CN), Gattermann, KI (I), HBF₄ (F), H₂O (OH), H₃PO₂ (H). Coupling with phenol (orange) or aniline (yellow) at para gives azo dyes.`,
    R`Conversions via diazonium salts: OH (water), Cl/Br (Sandmeyer), CN, I (KI), F (Balz–Schiemann), H (H₃PO₂); protect –NH₂ by acetylation for mono-substitution.`
  ],
  refs: [
    { t: R`OpenStax Organic Chemistry, §24.3 Basicity of Amines`, url: 'https://openstax.org/books/organic-chemistry/pages/24-3-basicity-of-amines' },
    { t: R`OpenStax Organic Chemistry, §24.8 Reactions of Arylamines`, url: 'https://openstax.org/books/organic-chemistry/pages/24-8-reactions-of-arylamines' },
    { t: R`Wikipedia: Hofmann rearrangement`, url: 'https://en.wikipedia.org/wiki/Hofmann_rearrangement' },
    { t: R`Wikipedia: Gabriel synthesis`, url: 'https://en.wikipedia.org/wiki/Gabriel_synthesis' },
    { t: R`Wikipedia: Hinsberg reaction`, url: 'https://en.wikipedia.org/wiki/Hinsberg_reaction' },
    { t: R`Wikipedia: Sandmeyer reaction`, url: 'https://en.wikipedia.org/wiki/Sandmeyer_reaction' }
  ]
});
})();
