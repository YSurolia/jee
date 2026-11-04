// Book chapter: Principles Related to Practical Chemistry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 10, math: false, bold: true }) : ''); }

// ---------- figures ----------
function pHcurve(V) { var a = 2.5 - 0.1 * V, tot = 25 + V; if (Math.abs(a) < 1e-9) return 7; return a > 0 ? -Math.log10(a / tot) : 14 + Math.log10(-a / tot); }
var figTitration = D.plot({ w: 440, h: 250, x: [0, 50], y: [0, 14], noOrigin: true, xlabel: 'V / mL', ylabel: 'pH', mathLabels: false,
  xticks: [[10, '10'], [25, '25']], yticks: [[3.1, '3.1'], [4.4, '4.4'], [7, '7'], [8.3, '8.3'], [10, '10']],
  shade: [{ f: function () { return 10; }, g: function () { return 8.3; }, from: 0, to: 50, color: 'p' }, { f: function () { return 4.4; }, g: function () { return 3.1; }, from: 0, to: 50, color: 'o' }],
  fns: [{ f: pHcurve, from: 0, to: 50, color: 'b', steps: 600 }],
  texts: [{ x: 44, y: 9.2, s: 'phenolphthalein', color: 'p', size: 10 }, { x: 44, y: 3.75, s: 'methyl orange', color: 'o', size: 10 }, { x: 27, y: 6, s: 'equivalence point', color: 'm', size: 9, anchor: 'start' }],
  pts: [{ x: 25, y: 7, color: 'b' }],
  label: 'Titration curve of HCl with NaOH' });

var groups = [['0', 'NH₄⁺', '(none; test original salt with NaOH)', '—'], ['I', 'Pb²⁺ (Ag⁺, Hg₂²⁺)', 'dil. HCl', 'chlorides'], ['II', 'Pb²⁺, Cu²⁺, Hg²⁺ (Cd²⁺, As³⁺, Sb³⁺, Sn²⁺)', 'H₂S in dil. HCl', 'sulphides'], ['III', 'Fe³⁺, Al³⁺, Cr³⁺', 'NH₄OH + NH₄Cl', 'hydroxides'], ['IV', 'Zn²⁺, Ni²⁺, Mn²⁺, Co²⁺', 'H₂S in NH₄OH', 'sulphides'], ['V', 'Ca²⁺, Ba²⁺, Sr²⁺', '(NH₄)₂CO₃ + NH₄OH + NH₄Cl', 'carbonates'], ['VI', 'Mg²⁺', 'Na₂HPO₄ (in NH₄OH)', 'MgNH₄PO₄']];
var figGroups = D.svg(500, 270, groups.map(function (g, i) {
  var y = 10 + i * 36;
  return box(10, y, 40, 28, g[0], 'p', 11) + box(60, y, 190, 28, '', 'b') + lab(155, y + 14, g[1], 'k', 9) + box(260, y, 150, 28, '', 'o') + lab(335, y + 14, g[2], 'k', 9) + lab(420, y + 14, g[3], 'g', 9, { anchor: 'start' }) + (i < 6 ? D.arrow(30, y + 28, 30, y + 36, { color: 'm', head: 5 }) : '');
}), 'Group separation of cations');

function plab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 11, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
var figBurette = D.svg(300, 260, [
  D.line(60, 20, 60, 245, { color: 'm', w: 3 }), D.line(40, 245, 140, 245, { color: 'm', w: 4 }), D.line(60, 60, 112, 60, { color: 'm', w: 2 }),
  D.rect(112, 20, 16, 150, { color: 'b', w: 1.4 }), D.rect(113, 50, 14, 120, { color: 'b', fill: 'soft', w: 0 }),
  [40, 70, 100, 130].map(function (y) { return D.line(112, y, 120, y, { color: 'b', w: 0.8 }); }).join(''),
  D.line(120, 170, 120, 185, { color: 'b', w: 2 }), D.rect(110, 172, 20, 5, { color: 'k', fill: 'soft', w: 1 }),
  D.path('M100,200 L140,200 L160,240 L80,240 Z', { color: 'o', w: 1.6 }), D.path('M88,225 L152,225 L160,240 L80,240 Z', { color: 'r', fill: 'soft', w: 0 }),
  plab(140, 35, 'burette (KMnO₄ or NaOH)', 'b', 10, { anchor: 'start' }), plab(140, 175, 'stopcock', 'k', 10, { anchor: 'start' }), plab(170, 230, 'conical flask:', 'o', 10, { anchor: 'start' }), plab(170, 244, 'analyte + indicator', 'o', 10, { anchor: 'start' })
], 'Titration apparatus');

var figBrownRing = D.svg(260, 230, [
  D.path('M100,20 L100,190 Q100,215 125,215 Q150,215 150,190 L150,20', { color: 'm', w: 2 }),
  D.rect(102, 60, 46, 100, { color: 'g', fill: 'soft', w: 0 }), D.path('M102,160 L148,160 L148,190 Q148,212 125,212 Q102,212 102,190 Z', { color: 'b', fill: 'soft', w: 0 }),
  D.rect(102, 154, 46, 9, { color: 'o', fill: 'soft', w: 1.6 }),
  plab(160, 100, 'nitrate + FeSO₄ solution', 'g', 10, { anchor: 'start' }), plab(160, 160, 'brown ring', 'o', 11, { anchor: 'start', bold: true }), plab(160, 198, 'conc. H₂SO₄ (denser)', 'b', 10, { anchor: 'start' }),
  D.arrow(60, 30, 98, 60, { color: 'k', w: 1.2, head: 6 }), plab(56, 24, 'acid poured down', 'k', 10, { anchor: 'end' }), plab(56, 38, 'the side', 'k', 10, { anchor: 'end' })
], 'Brown ring test for nitrate');

var figCalor = D.svg(300, 230, [
  D.rect(50, 70, 160, 140, { color: 'm', fill: 'soft', w: 1.4, r: 8 }), D.rect(75, 90, 110, 110, { color: 'b', w: 1.8 }), D.rect(76, 120, 108, 79, { color: 'b', fill: 'soft', w: 0 }),
  D.line(150, 20, 150, 180, { color: 'r', w: 2 }), D.circle(150, 182, 5, { color: 'r', fill: 'soft', w: 1.4 }), D.line(110, 40, 110, 170, { color: 'k', w: 1.6 }), D.line(98, 170, 122, 170, { color: 'k', w: 2 }),
  plab(158, 26, 'thermometer', 'r', 10, { anchor: 'start' }), plab(104, 34, 'stirrer', 'k', 10, { anchor: 'end' }), plab(220, 100, 'insulation', 'm', 10, { anchor: 'start' }), plab(220, 150, 'solution', 'b', 10, { anchor: 'start' })
], 'Simple calorimeter');

var figClock = D.plot({ w: 340, h: 210, x: [0, 0.3], y: [0, 0.06], noOrigin: false, xlabel: '[I⁻] (M)', ylabel: '1/t (s⁻¹)', mathLabels: false, xticks: [[0.05, '0.05'], [0.1, '0.10'], [0.2, '0.20']], yticks: [[0.025, '0.025'], [0.05, '0.050']],
  fns: [{ f: function (c) { return 0.25 * c; }, from: 0, to: 0.22, color: 'b', w: 1.6, dash: '5 4' }],
  pts: [[0.05, 0.0125], [0.1, 0.025], [0.15, 0.0375], [0.2, 0.05]].map(function (p) { return { x: p[0], y: p[1], color: 'o' }; }),
  label: 'Iodine clock: 1 over t against iodide concentration' });

// ---------- chapter text ----------
JEE.book('chemistry', 'practical-chemistry', {
  intro: [
    R`JEE asks about the chemistry behind the standard laboratory experiments: how elements and functional groups are detected, how some compounds are prepared, how titrations work, how salts are analysed for their cations and anions, and a few physical chemistry experiments. This chapter explains the principle, the reagents and the observations for each, with the equations behind them, and worked questions of the kind JEE sets.`
  ],
  sections: [
    { h: R`Detection of nitrogen, sulphur and halogens`, t: [0], blocks: [
      R`Organic compounds are fused with sodium to convert covalent N, S and X into ionic NaCN, Na₂S and NaX (Lassaigne's sodium fusion extract; see the Purification chapter for details):`,
      { table: { head: [R`Element`, R`Test on the extract`, R`Positive result`], rows: [
        [R`N`, R`boil with FeSO₄, add conc. H₂SO₄`, R`Prussian blue (Fe₄[Fe(CN)₆]₃)`],
        [R`S`, R`sodium nitroprusside; or lead acetate + acetic acid`, R`violet colour; black PbS`],
        [R`N and S together`, R`FeCl₃`, R`blood-red colour ([Fe(SCN)]²⁺)`],
        [R`Cl, Br, I`, R`boil with dil. HNO₃, add AgNO₃`, R`white AgCl (soluble in NH₃), pale-yellow AgBr (sparingly soluble), yellow AgI (insoluble)`]] } },
      R`Why fuse with sodium? In organic molecules N, S and halogens are held by covalent bonds and do not give ionic tests. Molten sodium breaks those bonds and converts them into ionic sodium salts that dissolve in water. The colours then come from familiar ionic reactions: cyanide forms the deep-blue iron(III) hexacyanoferrate(II), sulphide gives black PbS, and halides give silver halides of different colours and solubilities in ammonia.`,
      { ex: { q: R`The sodium extract of an organic compound gives a blood-red colour with FeCl₃ but no Prussian blue. What does it contain?`,
        steps: [R`When both N and S are present in a 1 : 1 ratio, fusion can give NaSCN instead of NaCN and Na₂S. SCN⁻ gives [Fe(SCN)]²⁺, blood-red.`, R`If excess sodium is used, the thiocyanate is split into NaCN and Na₂S, and the usual separate tests appear.`], ans: R`Both nitrogen and sulphur (as thiocyanate)` } },
      { check: { q: R`Why is the sodium extract boiled with HNO₃ before testing for halogens?`, ans: R`To decompose NaCN and Na₂S, which would otherwise give precipitates with AgNO₃.` } }
    ] },

    { h: R`Tests for the hydroxyl group: alcoholic and phenolic`, t: [1], blocks: [
      { table: { head: [R`Test`, R`Alcohols (R–OH)`, R`Phenols (Ar–OH)`], rows: [
        [R`Sodium metal`, R`effervescence of H₂`, R`effervescence of H₂`],
        [R`Ceric ammonium nitrate`, R`pink/red colour`, R`brown/green precipitate`],
        [R`Neutral FeCl₃ solution`, R`no colour`, R`violet (or blue/green) colour`],
        [R`Bromine water`, R`no reaction`, R`white precipitate of 2,4,6-tribromophenol`],
        [R`Litmus`, R`neutral`, R`weakly acidic (blue → red faintly)`],
        [R`Lucas reagent (ZnCl₂/HCl)`, R`turbidity: 3° immediate, 2° 5 min, 1° none`, R`—`],
        [R`Iodoform test`, R`positive for CH₃CH(OH)– (ethanol, propan-2-ol)`, R`—`]] } },
      R`Liebermann's nitroso test also identifies phenols: with NaNO₂ and conc. H₂SO₄ a deep green or blue colour forms, turning red on dilution and blue/green again with NaOH.`,
      { ex: { q: R`Three alcohols give turbidity with Lucas reagent: A at once, B after about 5 minutes, and C not at room temperature. Classify them.`,
        steps: [R`Lucas reagent converts alcohols to insoluble alkyl chlorides via carbocations; the more stable the carbocation, the faster the reaction.`], ans: R`A tertiary, B secondary, C primary` } },
      { check: { q: R`Which reagent distinguishes phenol from ethanol by a colour?`, ans: R`Neutral FeCl₃: phenol gives a violet colour; ethanol does not.` } }
    ] },

    { h: R`Tests for the carbonyl group: aldehydes and ketones`, t: [1], blocks: [
      { table: { head: [R`Test`, R`Aldehydes`, R`Ketones`], rows: [
        [R`2,4-Dinitrophenylhydrazine (Brady's)`, R`yellow-orange precipitate`, R`yellow-orange precipitate`],
        [R`Tollens' reagent (warm)`, R`silver mirror`, R`no reaction`],
        [R`Fehling's / Benedict's (warm)`, R`red Cu₂O (aliphatic only)`, R`no reaction`],
        [R`Schiff's reagent`, R`pink/magenta colour restored`, R`no colour (except slowly with some)`],
        [R`Sodium nitroprusside + NaOH`, R`—`, R`red colour (methyl ketones like acetone)`],
        [R`Iodoform (I₂ + NaOH)`, R`ethanal only`, R`methyl ketones: yellow CHI₃`],
        [R`NaHSO₃`, R`crystalline adduct`, R`adduct (methyl ketones)`]] } },
      { ex: { q: R`A compound C₃H₆O gives a yellow-orange precipitate with 2,4-DNP and a yellow precipitate with I₂/NaOH, but no silver mirror with Tollens' reagent. Identify it.`,
        steps: [R`2,4-DNP: a carbonyl compound. No Tollens' reaction: not an aldehyde, so a ketone. Iodoform test: a CH₃CO– group.`], ans: R`Propanone (acetone), CH₃COCH₃` } },
      R`The chemistry behind these tests: aldehydes have an H on the carbonyl carbon and are easily oxidised to acids, so they reduce Tollens' reagent (Ag⁺ → Ag) and Fehling's solution (Cu²⁺ → Cu₂O). Ketones have no such H and resist mild oxidation. Both have the C=O group, so both form coloured 2,4-dinitrophenylhydrazones.`,
      { check: { q: R`Which test is given by both aldehydes and ketones?`, ans: R`The 2,4-DNP (Brady's) test: a yellow-orange precipitate.` } }
    ] },

    { h: R`Test for the carboxyl group`, t: [1], blocks: [
      { points: [R`<b>Sodium hydrogencarbonate test:</b> brisk effervescence of CO₂ (turns lime water milky): RCOOH + NaHCO₃ → RCOONa + H₂O + CO₂. Phenols do not give this (except strongly acidic ones like picric acid).`, R`<b>Litmus:</b> blue litmus turns red.`, R`<b>Ester test:</b> warming with ethanol and a few drops of conc. H₂SO₄ gives a fruity smell (ester).`, R`<b>Neutral FeCl₃</b> with the neutralised acid: acetate gives a red colour, benzoate a buff precipitate, formate red.`] },
      R`The NaHCO₃ test works because carboxylic acids (pKa about 4–5) are stronger acids than carbonic acid (pKa 6.4), so they can release CO₂ from hydrogencarbonate. Phenol (pKa 10) is too weak.`,
      { check: { q: R`Which test distinguishes benzoic acid from phenol?`, ans: R`NaHCO₃: benzoic acid gives CO₂ effervescence; phenol does not.` } }
    ] },

    { h: R`Tests for the amino group`, t: [1], blocks: [
      { points: [R`<b>Solubility:</b> amines dissolve in dilute HCl (forming salts) and reprecipitate with NaOH.`, R`<b>Carbylamine test</b> (1° amines only): warm with CHCl₃ and alcoholic KOH → foul-smelling isocyanide.`, R`<b>Azo dye test</b> (1° aromatic amines): diazotise with NaNO₂/HCl at 0–5 °C, add alkaline β-naphthol → orange-red dye.`, R`<b>Hinsberg test</b>: benzenesulphonyl chloride distinguishes 1° (product soluble in KOH), 2° (insoluble), 3° (no reaction).`, R`<b>Nitrous acid</b>: 1° aliphatic → N₂ gas; 2° → yellow oily nitrosamine.`] },
      { check: { q: R`Which test gives an orange dye only with aromatic primary amines?`, ans: R`The azo dye test (diazotisation then coupling with β-naphthol).` } }
    ] },

    { h: R`Test for the nitro group`, t: [1], blocks: [
      R`<b>Mulliken–Barker test:</b> the nitro compound is reduced with zinc dust and NH₄Cl solution (neutral medium) to the corresponding hydroxylamine, R–NHOH, which reduces Tollens' reagent to a grey/black precipitate of silver: R–NO₂ + 4[H] → R–NHOH + H₂O.`,
      R`Alternatively, aromatic nitro compounds are reduced with Sn/HCl to the amine, which then gives the azo dye test.`,
      { adv: R`Primary and secondary nitroalkanes also give colour tests with nitrous acid (red "nitrolic acid" salts and blue "pseudonitroles"); tertiary nitroalkanes do not react.` },
      { check: { q: R`What is formed when nitrobenzene is reduced with Zn and NH₄Cl?`, ans: R`N-Phenylhydroxylamine, C₆H₅NHOH, which reduces Tollens' reagent.` } }
    ] },

    { h: R`Preparation of inorganic compounds: Mohr's salt and potash alum`, t: [2], blocks: [
      R`<b>Mohr's salt</b>, FeSO₄·(NH₄)₂SO₄·6H₂O (ferrous ammonium sulphate), is a <b>double salt</b>. Equimolar amounts of ferrous sulphate and ammonium sulphate are dissolved in the minimum amount of hot water containing a little dilute H₂SO₄ (which prevents hydrolysis of Fe²⁺ and its oxidation). The solution is concentrated and cooled to crystallise pale green crystals. Mohr's salt is preferred to FeSO₄ in titrations because it is not oxidised by air easily and is not efflorescent.`,
      R`<b>Potash alum</b>, K₂SO₄·Al₂(SO₄)₃·24H₂O, is made similarly from equimolar potassium sulphate and aluminium sulphate in water with a little dilute H₂SO₄ (to prevent hydrolysis of Al³⁺), giving colourless octahedral crystals.`,
      R`A <b>double salt</b> such as Mohr's salt or alum exists only in the solid; in water it splits completely into its simple ions (Fe²⁺, NH₄⁺ and SO₄²⁻), so its solution gives the tests of all of them. A complex salt such as K₄[Fe(CN)₆] keeps its complex ion in solution and does not give the tests of Fe²⁺.`,
      { check: { q: R`Why is a little dilute H₂SO₄ added when preparing Mohr's salt?`, ans: R`To prevent hydrolysis of Fe²⁺ (and its oxidation to Fe³⁺).` } }
    ] },

    { h: R`Preparation of organic compounds`, t: [2], blocks: [
      { table: { head: [R`Compound`, R`Method`, R`Equation / note`], rows: [
        [R`Acetanilide`, R`aniline + acetic anhydride (with glacial acetic acid); pour into cold water`, R`C₆H₅NH₂ + (CH₃CO)₂O → C₆H₅NHCOCH₃ + CH₃COOH (white crystals)`],
        [R`p-Nitroacetanilide`, R`nitrate acetanilide with conc. HNO₃ + conc. H₂SO₄ in glacial acetic acid, below 10 °C`, R`–NHCOCH₃ is o/p directing; para product mainly (pale yellow); low temperature avoids dinitration`],
        [R`Aniline yellow (p-aminoazobenzene)`, R`diazotise aniline (NaNO₂/HCl, 0–5 °C) and couple with aniline in mildly acidic solution`, R`C₆H₅N₂⁺Cl⁻ + C₆H₅NH₂ → C₆H₅N=NC₆H₄NH₂ + HCl (yellow dye)`],
        [R`Iodoform`, R`warm ethanol or acetone with I₂ and Na₂CO₃ (or NaOH) solution`, R`CH₃COCH₃ + 3I₂ + 4NaOH → CHI₃↓ + CH₃COONa + 3NaI + 3H₂O (yellow crystals, antiseptic smell)`]] } },
      R`Why acetylate aniline before nitration? Free aniline is oxidised by nitric acid and, in strong acid, is protonated to anilinium, which directs to the meta position. The acetyl group protects the nitrogen and makes it a milder ortho/para director; its bulk favours the para product, and it can be removed afterwards by hydrolysis to give p-nitroaniline.`,
      { check: { q: R`Why is nitration of acetanilide done below 10 °C?`, ans: R`To prevent dinitration and oxidation, giving mainly the mono p-nitro product.` } }
    ] },

    { h: R`Titrimetric analysis: acids, bases and indicators`, t: [3], blocks: [
      R`In a titration, a solution of known concentration (standard solution, in the burette) is added to a known volume of the solution under test until the reaction is just complete (<b>equivalence point</b>), shown by an indicator changing colour (<b>end point</b>). Then M₁V₁/n₁ = M₂V₂/n₂ (n = stoichiometric coefficients), or N₁V₁ = N₂V₂ in normality terms.`,
      R`Primary standards (pure, stable, not hygroscopic, high molar mass) are weighed directly: oxalic acid (H₂C₂O₄·2H₂O), Mohr's salt, K₂Cr₂O₇, Na₂CO₃.`,
      { fig: figTitration, cap: R`25 mL of 0.1 M HCl titrated with 0.1 M NaOH: the pH jumps from about 3.7 to 10.3 near 25 mL, so both indicators work.` },
      { table: { head: [R`Titration`, R`pH at equivalence`, R`Suitable indicator`], rows: [
        [R`Strong acid – strong base`, R`7`, R`phenolphthalein or methyl orange`],
        [R`Weak acid – strong base (oxalic acid/NaOH)`, R`> 7`, R`phenolphthalein (8.3–10)`],
        [R`Strong acid – weak base (HCl/Na₂CO₃, NH₄OH)`, R`< 7`, R`methyl orange (3.1–4.4)`],
        [R`Weak acid – weak base`, R`≈ 7, no sharp jump`, R`no suitable indicator`]] } },
      { ex: { q: R`1.26 g of oxalic acid crystals (H₂C₂O₄·2H₂O, M = 126) is dissolved to make 250 mL of solution. Find its molarity.`,
        steps: [R`1.26/126 = 0.01 mol in 0.25 L.`, R`M = 0.01/0.25 = 0.04 M.`], ans: R`0.04 M` } },
      { fig: figBurette, cap: R`A titration set-up: the standard solution runs from the burette into a measured volume of the solution under test until the indicator (or KMnO₄'s own colour) shows the end point.` },
      { ex: { q: R`What volume of 0.1 M HCl is needed to titrate 25 mL of 0.05 M Na₂CO₃ to the methyl orange end point?`,
        steps: [R`With methyl orange, carbonate is neutralised completely: Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.`, R`n(HCl) = 2 × 0.025 × 0.05 = 2.5 × 10⁻³ mol; V = 2.5 × 10⁻³/0.1 L.`], ans: R`25 mL` } },
      { check: { q: R`Which indicator is used for titrating oxalic acid with NaOH?`, ans: R`Phenolphthalein (the equivalence point is alkaline).` } }
    ] },

    { h: R`Redox titrations with KMnO₄: oxalic acid and Mohr's salt`, t: [3], blocks: [
      R`KMnO₄ is a strong oxidant in acid (dilute H₂SO₄): MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. It acts as its <b>own indicator</b>: the colourless solution turns permanently light pink at the end point. HCl is not used (it is oxidised to Cl₂), nor HNO₃ (itself an oxidant).`,
      { points: [R`<b>Oxalic acid:</b> 2MnO₄⁻ + 5C₂O₄²⁻ + 16H⁺ → 2Mn²⁺ + 10CO₂ + 8H₂O. The solution is warmed to 60–70 °C because the reaction is slow at first; it then speeds up as Mn²⁺ forms (<b>autocatalysis</b>).`, R`<b>Mohr's salt:</b> MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. Done at room temperature (heating would oxidise Fe²⁺ by air).`] },
      { ex: { q: R`20 mL of 0.05 M oxalic acid needs 16 mL of KMnO₄ solution. Find the molarity of KMnO₄.`,
        steps: [R`n(oxalic) = 0.05 × 0.020 = 1.0 × 10⁻³ mol.`, R`n(MnO₄⁻) = (2/5) × 1.0 × 10⁻³ = 4.0 × 10⁻⁴ mol; M = 4.0 × 10⁻⁴/0.016 = 0.025 M.`], ans: R`0.025 M` } },
      { ex: { q: R`What volume of 0.02 M KMnO₄ is needed to titrate 20 mL of 0.1 M Mohr's salt?`,
        steps: [R`n(Fe²⁺) = 0.1 × 0.020 = 2 × 10⁻³ mol; n(MnO₄⁻) = 2 × 10⁻³/5 = 4 × 10⁻⁴ mol.`, R`V = 4 × 10⁻⁴/0.02 = 0.020 L.`], ans: R`20 mL` } },
      { mistake: R`Using the burette reading when the first pink appears and disappears. The end point is the first <b>permanent</b> light-pink colour that lasts about 30 seconds; earlier pinks fade as the remaining reductant reacts.` },
      { check: { q: R`Why is oxalic acid solution warmed before titrating with KMnO₄?`, ans: R`The reaction is slow at room temperature; warming (and the Mn²⁺ formed, autocatalysis) speeds it up.` } }
    ] },

    { h: R`Qualitative analysis: group separation of cations`, t: [4], blocks: [
      R`Cations are separated into groups by adding group reagents in order, each precipitating one group as a sparingly soluble compound. The separation depends on solubility products: for example, in group II, H₂S in <b>acidic</b> solution gives a low [S²⁻] (common-ion effect of H⁺), enough to precipitate only the very insoluble sulphides (CuS, PbS); in group IV, H₂S in <b>ammoniacal</b> solution gives a higher [S²⁻], precipitating ZnS, NiS, MnS, CoS.`,
      { fig: figGroups, cap: R`Group reagents and the form in which each group is precipitated.` },
      R`In group III, NH₄Cl suppresses the ionisation of NH₄OH (common ion), so [OH⁻] is just high enough to precipitate Fe(OH)₃, Al(OH)₃ and Cr(OH)₃ (very low Ksp) but not the hydroxides of groups IV–VI. Pb²⁺ appears in both group I (PbCl₂ is slightly soluble) and group II.`,
      { ex: { q: R`A solution contains Cu²⁺, Zn²⁺ and Al³⁺. Which ion is precipitated when H₂S is passed after adding dilute HCl, and which when NH₄Cl and NH₄OH are added to the filtrate?`,
        steps: [R`In acid, [S²⁻] is very low; only the least soluble sulphide (CuS, group II) precipitates.`, R`NH₄Cl + NH₄OH precipitates the group III hydroxide Al(OH)₃; Zn²⁺ stays in solution until H₂S is passed in ammoniacal medium (group IV).`], ans: R`CuS; then Al(OH)₃` } },
      { check: { q: R`Why is NH₄Cl added before NH₄OH in group III?`, ans: R`It suppresses the ionisation of NH₄OH (common-ion effect), keeping [OH⁻] low so only group III hydroxides precipitate.` } }
    ] },

    { h: R`Confirmatory tests: cations in the JEE Main list`, t: [4], blocks: [
      { table: { head: [R`Cation`, R`Group`, R`Confirmatory test`], rows: [
        [R`NH₄⁺`, R`0`, R`with NaOH, heat: NH₃ (turns red litmus blue, white fumes with HCl); Nessler's reagent gives a brown precipitate`],
        [R`Pb²⁺`, R`I/II`, R`yellow PbCrO₄ with K₂CrO₄; yellow PbI₂ with KI (dissolves on heating, golden spangles on cooling)`],
        [R`Cu²⁺`, R`II`, R`black CuS; deep blue [Cu(NH₃)₄]²⁺ with excess NH₄OH; chocolate-brown Cu₂[Fe(CN)₆] with K₄[Fe(CN)₆]`],
        [R`Al³⁺`, R`III`, R`white gelatinous Al(OH)₃; blue lake test (adsorbs blue litmus)`],
        [R`Fe³⁺`, R`III`, R`reddish-brown Fe(OH)₃; Prussian blue with K₄[Fe(CN)₆]; blood-red with KSCN`],
        [R`Zn²⁺`, R`IV`, R`white ZnS; bluish-white precipitate with K₄[Fe(CN)₆]`],
        [R`Ni²⁺`, R`IV`, R`black NiS; rosy-red precipitate with dimethylglyoxime (DMG) in ammoniacal solution`],
        [R`Ca²⁺`, R`V`, R`white CaC₂O₄ with ammonium oxalate; brick-red flame`],
        [R`Ba²⁺`, R`V`, R`yellow BaCrO₄ with K₂CrO₄; apple-green flame`],
        [R`Mg²⁺`, R`VI`, R`white crystalline MgNH₄PO₄ with Na₂HPO₄ (+ NH₄OH/NH₄Cl); blue lake with magneson`]] } },
      R`<b>Flame tests</b> work because heat promotes electrons of the metal ion to higher levels; as they fall back, they emit light of characteristic wavelengths. Calcium gives brick red, strontium crimson, barium apple green, sodium golden yellow and potassium lilac (seen through blue cobalt glass, which hides the sodium yellow).`,
      { check: { q: R`Which reagent gives a rosy-red precipitate with Ni²⁺?`, ans: R`Dimethylglyoxime (in ammoniacal solution).` } }
    ] },

    { h: R`Confirmatory tests: additional cations for JEE Advanced`, t: [4], blocks: [
      { table: { head: [R`Cation`, R`Group`, R`Confirmatory test`], rows: [
        [R`Ag⁺`, R`I`, R`white AgCl, soluble in NH₄OH ([Ag(NH₃)₂]⁺), reprecipitated by HNO₃; red-brown Ag₂CrO₄ with K₂CrO₄`],
        [R`Hg²⁺`, R`II`, R`black HgS (insoluble in hot dil. HNO₃); with SnCl₂: white Hg₂Cl₂ turning grey (Hg); with KI: scarlet HgI₂ dissolving in excess as K₂[HgI₄]`],
        [R`Cr³⁺`, R`III`, R`green Cr(OH)₃; fused/boiled with Na₂O₂ (or NaOH + H₂O₂) → yellow CrO₄²⁻, which gives yellow PbCrO₄ with lead acetate`],
        [R`Mn²⁺`, R`IV`, R`buff/flesh-coloured MnS; with NaBiO₃ (or PbO₂) and conc. HNO₃ → purple MnO₄⁻`]] } },
      { adv: R`Amphoteric hydroxides (Al(OH)₃, Zn(OH)₂, Pb(OH)₂, Cr(OH)₃, Sn(OH)₂) dissolve in excess NaOH; Fe(OH)₃, Ni(OH)₂, Cu(OH)₂ do not. This helps separate ions within a group (e.g. Al³⁺ from Fe³⁺ in group III).` },
      { check: { q: R`How is Mn²⁺ confirmed?`, ans: R`With sodium bismuthate and conc. HNO₃ it is oxidised to purple permanganate.` } }
    ] },

    { h: R`Anions in the JEE Main list`, t: [4], blocks: [
      R`Anions are detected with <b>dilute H₂SO₄</b> (gases from weak-acid anions), <b>concentrated H₂SO₄</b> (halides and nitrate), and specific tests:`,
      { table: { head: [R`Anion`, R`Preliminary test`, R`Confirmatory test`], rows: [
        [R`CO₃²⁻`, R`dil. H₂SO₄: effervescence of CO₂ (lime water milky)`, R`white BaCO₃ with BaCl₂, soluble in HCl`],
        [R`S²⁻`, R`dil. H₂SO₄: H₂S (rotten egg; blackens lead acetate paper)`, R`violet with sodium nitroprusside`],
        [R`NO₂⁻`, R`dil. H₂SO₄: brown fumes of NO₂`, R`KI + starch: blue (I₂ liberated); brown ring with FeSO₄ and dil. acid`],
        [R`Cl⁻`, R`conc. H₂SO₄: HCl fumes (white fumes with NH₃)`, R`white AgCl, soluble in NH₄OH; chromyl chloride test (K₂Cr₂O₇ + conc. H₂SO₄: red vapours of CrO₂Cl₂ → yellow PbCrO₄)`],
        [R`Br⁻`, R`conc. H₂SO₄: reddish-brown Br₂`, R`pale-yellow AgBr, partly soluble in NH₄OH; layer test with Cl₂ water + CCl₄: orange-brown layer`],
        [R`I⁻`, R`conc. H₂SO₄: violet I₂ vapours`, R`yellow AgI, insoluble in NH₄OH; layer test: violet CCl₄ layer`],
        [R`NO₃⁻`, R`conc. H₂SO₄ + Cu turnings: brown NO₂`, R`<b>brown ring test</b>: FeSO₄ + conc. H₂SO₄ down the side → brown ring of [Fe(H₂O)₅NO]²⁺`],
        [R`SO₄²⁻`, R`no gas with acids`, R`white BaSO₄ with BaCl₂, insoluble in conc. HCl; white PbSO₄ with lead acetate`]] } },
      { fig: figBrownRing, cap: R`Concentrated H₂SO₄ is poured slowly down the side of the tube so that it forms a separate layer underneath. NO formed from the nitrate at the boundary combines with Fe²⁺ to give the brown ring.` },
      { ex: { q: R`A colourless salt gives brown fumes with concentrated H₂SO₄ and copper turnings, and a brown ring test. A solution of it gives no precipitate with BaCl₂ or AgNO₃. Identify the anion.`,
        steps: [R`Brown NO₂ with Cu and conc. H₂SO₄, and the brown ring, both show nitrate.`, R`No BaSO₄ (no sulphate) and no AgX (no halide).`], ans: R`Nitrate, NO₃⁻` } },
      { check: { q: R`What is the brown ring in the nitrate test?`, ans: R`The complex [Fe(H₂O)₅(NO)]²⁺ formed at the junction of the two layers.` } }
    ] },

    { h: R`Anions in the JEE Advanced list`, t: [4], blocks: [
      R`The Advanced syllabus lists nitrate, halides (except fluoride), carbonate, bicarbonate, sulphate and sulphide. The tests above apply; carbonate and bicarbonate are distinguished as follows:`,
      { points: [R`<b>MgSO₄ test:</b> a carbonate gives a white precipitate of MgCO₃ in the cold; a bicarbonate gives the precipitate only on boiling (Mg(HCO₃)₂ is soluble and decomposes on heating).`, R`<b>Heating the solid:</b> bicarbonates release CO₂ on gentle heating (2NaHCO₃ → Na₂CO₃ + H₂O + CO₂); alkali metal carbonates do not.`, R`<b>Phenolphthalein:</b> a carbonate solution is pink (more alkaline); a bicarbonate solution is colourless or faint.`] },
      { tip: R`Before testing for halides with AgNO₃, acidify with HNO₃ (not HCl!) so that CO₃²⁻ and S²⁻ do not interfere and no Cl⁻ is added.` },
      { check: { q: R`How can sodium carbonate be distinguished from sodium bicarbonate using MgSO₄?`, ans: R`Carbonate gives a white precipitate in the cold; bicarbonate only on boiling.` } }
    ] },

    { h: R`Enthalpy of solution of copper sulphate`, t: [5], blocks: [
      R`A known mass of anhydrous (or hydrated) CuSO₄ is dissolved in a known mass of water in a calorimeter (an insulated vessel), and the temperature change is measured. The heat released (or absorbed) is q = (m_water + water equivalent of calorimeter) × c × ΔT, and ΔsolH = −q/n per mole of solute.`,
      { ex: { q: R`5.0 g of anhydrous CuSO₄ (M = 159.6) is dissolved in 100 g of water; the temperature rises by 4.7 K. Find ΔsolH (c = 4.18 J g⁻¹ K⁻¹; neglect the calorimeter).`,
        steps: [R`q = 100 × 4.18 × 4.7 = 1965 J released.`, R`n = 5.0/159.6 = 0.0313 mol; ΔsolH = −1965/0.0313 = −62.7 kJ/mol.`], ans: R`≈ −63 kJ/mol (exothermic)` } },
      { fig: figCalor, cap: R`A simple calorimeter: an insulated vessel with a thermometer and a stirrer. The heat released or absorbed by the process changes the temperature of the known mass of solution.` },
      R`Anhydrous CuSO₄ dissolves exothermically (hydration of ions releases a lot of energy), while CuSO₄·5H₂O dissolves endothermically (its ions are already hydrated).`,
      { check: { q: R`Why is the enthalpy of solution of anhydrous CuSO₄ negative while that of CuSO₄·5H₂O is positive?`, ans: R`The anhydrous salt releases hydration energy on dissolving; the pentahydrate is already hydrated, so lattice breaking dominates.` } }
    ] },

    { h: R`Enthalpy of neutralisation of a strong acid and a strong base`, t: [5], blocks: [
      R`Equal volumes of a strong acid and a strong base of known concentration are mixed in a calorimeter and the rise in temperature is measured. For any strong acid and strong base the reaction is simply H⁺(aq) + OH⁻(aq) → H₂O(l), so ΔneutH ≈ <b>−57.1 kJ/mol</b>. With a weak acid or weak base it is less negative, because some energy is used to ionise the weak electrolyte.`,
      { ex: { q: R`50 mL of 1 M HCl is mixed with 50 mL of 1 M NaOH; the temperature rises by 6.8 K. Find ΔneutH (density 1 g/mL, c = 4.18 J g⁻¹ K⁻¹).`,
        steps: [R`q = 100 × 4.18 × 6.8 = 2842 J; water formed = 0.050 mol.`, R`ΔneutH = −2842/0.050 = −56.8 kJ/mol.`], ans: R`≈ −56.8 kJ/mol` } },
      { check: { q: R`Why is the enthalpy of neutralisation of acetic acid with NaOH less than 57 kJ/mol?`, ans: R`Part of the energy released is used to ionise the weak acetic acid.` } }
    ] },

    { h: R`Preparation of lyophilic and lyophobic sols`, t: [6], blocks: [
      { points: [R`<b>Lyophilic sols</b> form readily by mixing the substance with the dispersion medium (warm water): <b>starch</b> sol (paste of starch poured into boiling water), <b>gum</b> sol, <b>egg albumin</b> sol. They are stable and reversible.`, R`<b>Lyophobic sols</b> need special methods. Ferric hydroxide sol: add FeCl₃ solution drop by drop to boiling water (hydrolysis): FeCl₃ + 3H₂O → Fe(OH)₃ (sol) + 3HCl; reddish-brown, positively charged. Aluminium hydroxide sol: hydrolysis of AlCl₃. Arsenious sulphide sol: pass H₂S through a dilute As₂O₃ solution (double decomposition): As₂O₃ + 3H₂S → As₂S₃ (sol) + 3H₂O; yellow, negatively charged.`] },
      R`The sols are purified by dialysis, and their stability (coagulation by electrolytes, Hardy–Schulze rule) can be compared (see Surface Chemistry).`,
      { check: { q: R`How is ferric hydroxide sol prepared?`, ans: R`By adding FeCl₃ solution drop by drop to boiling water (hydrolysis).` } }
    ] },

    { h: R`Kinetics of the reaction of iodide ions with hydrogen peroxide`, t: [7], blocks: [
      R`In acid, H₂O₂ oxidises iodide to iodine: H₂O₂ + 2I⁻ + 2H⁺ → I₂ + 2H₂O. To follow the rate, a small known amount of sodium thiosulphate and some starch are added. The I₂ formed is immediately reduced back by thiosulphate (2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻); when all the thiosulphate is used up, free I₂ appears and the starch turns <b>blue</b> suddenly (an "iodine clock").`,
      R`The time t for the blue colour corresponds to a fixed amount of reaction, so rate ∝ 1/t. Repeating with different initial [I⁻] (and [H₂O₂]) shows that the rate is proportional to each: rate = k[H₂O₂][I⁻] (first order in each, at constant acidity). The effect of temperature on rate can be studied in the same way.`,
      { ex: { q: R`In an iodine-clock run the blue colour appears after 40 s. When [I⁻] is doubled (all else the same) it appears after 20 s. What is the order with respect to I⁻?`,
        steps: [R`Rate ∝ 1/t: the rate doubled when [I⁻] doubled.`, R`2 = 2ⁿ → n = 1.`], ans: R`First order in I⁻` } },
      { fig: figClock, cap: R`If the reaction is first order in I⁻, a graph of 1/t (proportional to the rate) against the initial [I⁻] is a straight line through the origin.` },
      { check: { q: R`What is the role of sodium thiosulphate in the iodine clock?`, ans: R`It removes I₂ as it forms, so the blue colour appears only after a fixed amount of reaction, giving a measurable time.` } }
    ] }
  ],
  summary: [
    R`Lassaigne: N (Prussian blue), S (violet nitroprusside, black PbS), N+S (blood red), X (AgX after HNO₃).`,
    R`–OH: Na (H₂), CAN (red), Lucas (1°/2°/3°); phenol: FeCl₃ violet, Br₂ water white ppt. C=O: 2,4-DNP; aldehydes: Tollens', Fehling's, Schiff's; methyl ketones: iodoform, nitroprusside. –COOH: NaHCO₃ (CO₂), ester smell. –NH₂: carbylamine, azo dye, Hinsberg. –NO₂: Mulliken–Barker (Zn/NH₄Cl, then Tollens').`,
    R`Mohr's salt and potash alum: equimolar salts + dil. H₂SO₄ (prevents hydrolysis). Acetanilide, p-nitroacetanilide (< 10 °C), aniline yellow (diazotisation + coupling), iodoform.`,
    R`Titrations: M₁V₁/n₁ = M₂V₂/n₂; phenolphthalein for weak acid/strong base, methyl orange for strong acid/weak base. KMnO₄: self-indicator, dil. H₂SO₄; oxalic acid at 60–70 °C (autocatalysis by Mn²⁺); Mohr's salt cold.`,
    R`Cation groups: 0 NH₄⁺; I dil. HCl; II H₂S/H⁺; III NH₄OH + NH₄Cl; IV H₂S/NH₄OH; V (NH₄)₂CO₃; VI Na₂HPO₄. Key tests: DMG (Ni), KSCN/K₄[Fe(CN)₆] (Fe), K₂CrO₄ (Pb, Ba), flame colours, NaBiO₃ (Mn), Nessler (NH₄⁺).`,
    R`Anions: dil. H₂SO₄ (CO₃²⁻, S²⁻, NO₂⁻), conc. H₂SO₄ (Cl⁻, Br⁻, I⁻, NO₃⁻), BaCl₂ (SO₄²⁻); brown ring (NO₃⁻); chromyl chloride (Cl⁻); MgSO₄ (CO₃²⁻ vs HCO₃⁻).`,
    R`Calorimetry: q = mcΔT, ΔH = −q/n; ΔneutH (strong/strong) ≈ −57 kJ/mol. Sols: lyophilic by mixing; Fe(OH)₃ by hydrolysis; As₂S₃ by double decomposition. Iodine clock: rate ∝ 1/t, rate = k[H₂O₂][I⁻].`,
    R`Fused sodium converts covalent N, S, X into ionic NaCN, Na₂S, NaX; KMnO₄ end point = first permanent pink; flame colours from electronic transitions.`
  ],
  refs: [
    { t: R`Wikipedia: Qualitative inorganic analysis`, url: 'https://en.wikipedia.org/wiki/Qualitative_inorganic_analysis' },
    { t: R`Wikipedia: Acid–base titration`, url: 'https://en.wikipedia.org/wiki/Acid%E2%80%93base_titration' },
    { t: R`Wikipedia: Permanganometry`, url: 'https://en.wikipedia.org/wiki/Permanganometry' },
    { t: R`Wikipedia: Iodine clock reaction`, url: 'https://en.wikipedia.org/wiki/Iodine_clock_reaction' },
    { t: R`Wikipedia: Ammonium iron(II) sulfate (Mohr's salt)`, url: 'https://en.wikipedia.org/wiki/Ammonium_iron(II)_sulfate' }
  ]
});
})();
