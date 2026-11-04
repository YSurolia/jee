// Book chapter: Purification and Characterisation of Organic Compounds. Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
function box(x, y, w, h, t, c, size) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + (t ? D.text(x + w / 2, y + h / 2, t, { size: size || 10, math: false, bold: true }) : ''); }

// ---------- figures ----------
var figDistil = D.svg(500, 210, [
  D.circle(80, 130, 38, { w: 2 }), D.rect(70, 50, 20, 45, { w: 2 }), D.path('M44,150 Q80,175 116,150', { color: 'b', fill: 'soft', w: 0 }),
  lab(80, 150, 'mixture', 'b', 9), D.path('M60,190 L70,172 L80,190 L90,172 L100,190', { color: 'o', w: 2 }), lab(80, 202, 'heat', 'o', 9),
  D.line(80, 40, 80, 62, { color: 'r', w: 1.6 }), lab(80, 32, 'thermometer', 'r', 9),
  D.line(90, 62, 340, 112, { w: 2 }), D.line(90, 72, 340, 122, { w: 2 }),
  D.poly([[150, 64], [330, 100], [330, 130], [150, 94]], { closed: true, color: 'b', fill: 'soft', w: 1.4 }), lab(250, 62, 'condenser (cold water jacket)', 'b', 9),
  D.arrow(318, 150, 318, 128, { color: 'b', head: 6 }), lab(318, 160, 'water in', 'b', 8), D.arrow(162, 66, 162, 40, { color: 'b', head: 6 }), lab(168, 38, 'water out', 'b', 8, { anchor: 'start' }),
  D.path('M380,140 L380,195 L440,195 L440,140', { w: 2 }), D.rect(382, 170, 56, 24, { color: 'g', fill: 'soft', w: 0 }), lab(410, 182, 'distillate', 'g', 9),
  D.line(340, 117, 395, 150, { w: 2 })
], 'Simple distillation');

var figFunnel = D.svg(260, 220, [
  D.path('M90,20 L170,20 L170,40 Q170,120 135,160 L135,190 L125,190 L125,160 Q90,120 90,40 Z', { w: 2 }),
  D.path('M92,45 L168,45 Q168,80 162,90 L98,90 Q92,80 92,45 Z', { color: 'o', fill: 'soft', w: 0 }),
  D.path('M98,90 L162,90 Q150,130 133,158 L127,158 Q110,130 98,90 Z', { color: 'b', fill: 'soft', w: 0 }),
  D.rect(118, 172, 24, 8, { color: 'k', fill: 'soft', w: 1.4 }), lab(160, 178, 'stopcock', 'm', 9, { anchor: 'start' }),
  lab(200, 62, 'organic solvent', 'o', 10, { anchor: 'start' }), lab(200, 76, '(compound dissolves here)', 'o', 9, { anchor: 'start' }),
  lab(200, 110, 'water layer', 'b', 10, { anchor: 'start' }), lab(200, 124, '(impurities)', 'b', 9, { anchor: 'start' }),
  D.line(170, 62, 196, 62, { color: 'o', w: 1 }), D.line(160, 110, 196, 110, { color: 'b', w: 1 })
], 'Separating funnel');

var figTLC = D.svg(300, 230, [
  D.rect(90, 20, 90, 190, { w: 1.8, color: 'k', fill: 'soft' }), D.line(90, 185, 180, 185, { color: 'm', dash: '3 3', w: 1 }), lab(196, 185, 'start (base line)', 'm', 9, { anchor: 'start' }),
  D.line(90, 45, 180, 45, { color: 'b', dash: '3 3', w: 1 }), lab(196, 45, 'solvent front', 'b', 9, { anchor: 'start' }),
  D.circle(115, 185, 4, { color: 'k', fill: 'soft' }), D.circle(155, 185, 4, { color: 'k', fill: 'soft' }),
  D.ellipse(115, 120, 7, 5, { color: 'r', fill: 'soft', w: 1.6 }), D.ellipse(155, 80, 7, 5, { color: 'g', fill: 'soft', w: 1.6 }), D.ellipse(155, 150, 7, 5, { color: 'p', fill: 'soft', w: 1.6 }),
  D.arrow(70, 185, 70, 120, { color: 'r', both: true, head: 6 }), lab(62, 152, 'x', 'r', 11, { anchor: 'end', bold: true }),
  D.arrow(40, 185, 40, 45, { color: 'b', both: true, head: 6 }), lab(32, 115, 'y', 'b', 11, { anchor: 'end', bold: true }),
  lab(250, 120, 'R_f = x / y', 'k', 12, { bold: true })
], 'Thin layer chromatography');

var figLassaigne = D.svg(500, 200, [
  box(160, 5, 180, 30, 'organic compound + Na (fuse)', 'k'), D.arrow(250, 35, 250, 52, { color: 'm' }),
  box(140, 52, 220, 30, 'NaCN, Na₂S, NaX → sodium extract', 'o'),
  D.arrow(180, 82, 70, 110, { color: 'b' }), D.arrow(250, 82, 250, 110, { color: 'o' }), D.arrow(320, 82, 420, 110, { color: 'g' }),
  box(5, 110, 140, 36, 'N: + FeSO₄, heat, H₂SO₄', 'b', 9), lab(75, 162, 'Prussian blue', 'b', 10, { bold: true }), lab(75, 176, 'Fe₄[Fe(CN)₆]₃', 'b', 9),
  box(180, 110, 140, 36, 'S: + sodium nitroprusside', 'o', 9), lab(250, 162, 'violet colour', 'p', 10, { bold: true }), lab(250, 176, '(or black PbS with lead acetate)', 'm', 9),
  box(355, 110, 140, 36, 'X: + HNO₃, then AgNO₃', 'g', 9), lab(425, 162, 'AgCl white, AgBr pale', 'g', 9, { bold: true }), lab(425, 176, 'yellow, AgI yellow ppt', 'g', 9, { bold: true }),
  lab(250, 196, 'if both N and S: NaSCN gives blood-red colour with Fe³⁺', 'r', 9)
], 'Lassaigne test');

var figCombust = D.svg(500, 140, [
  D.arrow(5, 70, 40, 70, { color: 'b' }), lab(10, 56, 'O₂', 'b', 10, { anchor: 'start' }),
  D.rect(40, 50, 200, 40, { w: 2 }), D.rect(55, 58, 40, 24, { color: 'k', fill: 'soft', w: 1.2 }), lab(75, 70, 'sample', 'k', 9),
  D.rect(120, 56, 100, 28, { color: 'm', fill: 'soft', w: 1.2 }), lab(170, 70, 'CuO (hot)', 'm', 9),
  D.path('M90,105 L100,95 L110,105 L120,95 L130,105 L140,95 L150,105 L160,95 L170,105 L180,95 L190,105', { color: 'o', w: 1.6 }), lab(140, 120, 'strong heating', 'o', 9),
  D.line(240, 70, 270, 70, { w: 2 }),
  D.path('M270,50 L270,90 L330,90 L330,50', { w: 2 }), D.rect(272, 60, 56, 28, { color: 'b', fill: 'soft', w: 0 }), lab(300, 74, 'CaCl₂', 'b', 9), lab(300, 108, 'absorbs H₂O', 'b', 9),
  D.line(330, 70, 360, 70, { w: 2 }),
  D.path('M360,50 L360,90 L420,90 L420,50', { w: 2 }), D.rect(362, 60, 56, 28, { color: 'g', fill: 'soft', w: 0 }), lab(390, 74, 'KOH', 'g', 9), lab(390, 108, 'absorbs CO₂', 'g', 9),
  D.arrow(420, 70, 470, 70, { color: 'm' }), lab(250, 20, 'C → CO₂, H → H₂O; the tubes are weighed before and after', 'm', 10)
], 'Combustion analysis');

var figColumn = D.svg(320, 250, [
  D.rect(120, 30, 40, 180, { color: 'm', w: 1.6 }), D.rect(121, 50, 38, 159, { color: 'k', fill: 'soft', w: 0 }),
  D.rect(121, 80, 38, 18, { color: 'o', fill: 'soft', w: 0.8 }), D.rect(121, 130, 38, 18, { color: 'b', fill: 'soft', w: 0.8 }), D.rect(121, 175, 38, 16, { color: 'g', fill: 'soft', w: 0.8 }),
  D.line(140, 210, 140, 225, { color: 'm', w: 2 }), D.path('M125,232 L155,232 L150,245 L130,245 Z', { color: 'm', w: 1.2 }),
  D.arrow(140, 6, 140, 28, { color: 'b', w: 1.4, head: 6 }), D.text(150, 12, 'solvent (eluent)', { size: 10, color: 'b', math: false, anchor: 'start' }),
  D.text(170, 90, 'strongly adsorbed (moves slowly)', { size: 10, color: 'o', math: false, anchor: 'start' }), D.text(170, 140, 'moderately adsorbed', { size: 10, color: 'b', math: false, anchor: 'start' }), D.text(170, 184, 'weakly adsorbed (comes out first)', { size: 10, color: 'g', math: false, anchor: 'start' }),
  D.text(110, 120, 'alumina or', { size: 10, color: 'm', math: false, anchor: 'end' }), D.text(110, 134, 'silica gel', { size: 10, color: 'm', math: false, anchor: 'end' })
], 'Column chromatography');

// ---------- chapter text ----------
JEE.book('chemistry', 'purification-characterisation', {
  intro: [
    R`Before we can study an organic compound, we must get it pure and find out what it is made of. A compound extracted from a natural source or made in the lab is usually mixed with other substances.`,
    R`This chapter covers the methods of <b>purification</b> (crystallisation, sublimation, distillation, extraction, chromatography), <b>qualitative analysis</b> (which elements are present), <b>quantitative analysis</b> (how much of each), and finally how these data give the empirical and molecular formulae.`
  ],
  sections: [
    { h: R`Crystallisation and sublimation`, t: [0], blocks: [
      R`The purity of a compound is checked by its sharp <b>melting point</b> (or boiling point), and by chromatography. Impurities lower and broaden the melting point.`,
      { h3: R`Crystallisation` },
      R`The most common method for purifying solids. It uses the difference in solubility of the compound and the impurities in a suitable solvent. The impure compound is dissolved in the minimum amount of hot solvent, in which it is sparingly soluble at room temperature but appreciably soluble when hot. The hot solution is filtered (removing insoluble impurities) and cooled: the pure compound crystallises out, while soluble impurities stay in the mother liquor. Coloured impurities are removed by adding activated charcoal. If the solubilities are similar, repeated (<b>fractional</b>) crystallisation is used.`,
      { h3: R`Sublimation` },
      R`Some solids change directly into vapour on heating without melting, and the vapour condenses back to a solid. Sublimable compounds (camphor, naphthalene, anthracene, benzoic acid, iodine, NH₄Cl) are separated from non-sublimable impurities this way.`,
      { ex: { q: R`Suggest a method to purify (a) camphor mixed with sand (b) impure benzoic acid (c) a mixture of two solids with similar solubilities in water.`,
        steps: [R`(a) Camphor sublimes; sand does not.`, R`(b) Benzoic acid is much more soluble in hot water than cold: crystallisation.`, R`(c) Repeated (fractional) crystallisation, collecting the crystals in stages.`], ans: R`(a) sublimation (b) crystallisation from hot water (c) fractional crystallisation` } },
      R`<b>How do we know a compound is pure?</b> A pure solid melts sharply at a fixed temperature (impurities lower and broaden the melting range), a pure liquid boils at a constant temperature, and a pure substance gives a single spot in thin-layer chromatography. Chemists check these after every purification step.`,
      { check: { q: R`Why is the minimum amount of hot solvent used in crystallisation?`, ans: R`So that the solution becomes saturated and the maximum amount of pure compound crystallises on cooling.` } }
    ] },

    { h: R`Distillation`, t: [0], blocks: [
      R`Distillation separates (i) volatile liquids from non-volatile impurities, and (ii) liquids with sufficiently different boiling points. The liquid is vaporised by heating, and the vapour is condensed and collected.`,
      { fig: figDistil, cap: R`Simple distillation: the vapour of the lower-boiling liquid is condensed and collected first.` },
      { points: [
        R`<b>Simple distillation:</b> for liquids whose boiling points differ by a large amount (more than about 25 K), e.g. chloroform (334 K) and aniline (457 K).`,
        R`<b>Fractional distillation:</b> when the boiling points are close. A <b>fractionating column</b> gives many successive vaporisation–condensation steps (theoretical plates), so the vapour becomes richer in the more volatile component. Used to separate crude oil fractions and acetone–methanol.`,
        R`<b>Distillation under reduced pressure (vacuum distillation):</b> for liquids that decompose at or below their normal boiling point. Lowering the pressure lowers the boiling point. Used to concentrate sugar-cane juice (glycerol is also purified this way from spent lye in soap industry).`,
        R`<b>Steam distillation:</b> for compounds that are steam-volatile and immiscible with water (aniline, essential oils, o-nitrophenol). Steam is passed through the heated mixture; the liquid boils when the sum of its vapour pressure and that of water equals atmospheric pressure (p₁ + p₂ = p), so it distils below its boiling point (and below 373 K).`
      ] },
      { tip: R`o-Nitrophenol is steam volatile (intramolecular H-bond), but p-nitrophenol is not (intermolecular H-bonding with water and itself). This separates the two isomers.` },
      { ex: { q: R`Which kind of distillation would you use for (a) glycerol, which decomposes at its boiling point (b) aniline from an aqueous mixture (c) chloroform (bp 334 K) from aniline (bp 457 K) (d) petrol from crude oil?`,
        steps: [R`Large boiling-point differences need only simple distillation; close ones need a fractionating column; heat-sensitive liquids are distilled at lower pressure; steam-volatile, water-immiscible liquids by steam.`], ans: R`(a) under reduced pressure (b) steam distillation (c) simple distillation (d) fractional distillation` } },
      { check: { q: R`Why does aniline distil below 373 K in steam distillation even though its boiling point is 457 K?`, ans: R`The mixture boils when the sum of the vapour pressures of water and aniline equals atmospheric pressure.` } }
    ] },

    { h: R`Differential extraction`, t: [0], blocks: [
      R`An organic compound present in water is separated by shaking the solution with an <b>organic solvent</b> (ether, chloroform) in which the compound is more soluble and which is immiscible with water. The two layers separate in a <b>separating funnel</b>, and the organic layer is run off. The solvent is then evaporated or distilled off to recover the compound.`,
      { fig: figFunnel, cap: R`The compound moves into the solvent layer; the two immiscible layers are separated using the stopcock.` },
      R`Several extractions with small portions of solvent are more efficient than one extraction with the same total volume. If the compound has low solubility in the organic solvent, <b>continuous extraction</b> is used.`,
      { ex: { q: R`10 g of a compound is dissolved in 100 mL of water. Its distribution coefficient (C_ether/C_water) is 4. How much is extracted by (a) 100 mL of ether in one portion (b) two portions of 50 mL?`,
        steps: [R`(a) \(\dfrac{x/100}{(10 - x)/100} = 4\), so x = 8 g.`, R`(b) First 50 mL: \(\dfrac{x/50}{(10 - x)/100} = 4\) gives x = 6.67 g; second 50 mL on the remaining 3.33 g gives 2.22 g; total 8.89 g.`], ans: R`(a) 8.0 g (b) 8.9 g: several small portions extract more` } },
      { check: { q: R`Which is better: one extraction with 100 mL of ether, or four with 25 mL each?`, ans: R`Four extractions with 25 mL each remove more compound.` } }
    ] },

    { h: R`Chromatography`, t: [0], blocks: [
      R`<b>Chromatography</b> separates mixtures by distributing the components between a <b>stationary phase</b> (solid or liquid) and a <b>mobile phase</b> (liquid or gas) that moves through it. Components move at different rates because they are adsorbed or dissolved to different extents.`,
      { points: [
        R`<b>Adsorption chromatography</b> (stationary phase: silica gel or alumina): <b>column chromatography</b> (mixture separated in a column; the less strongly adsorbed component comes out first) and <b>thin layer chromatography (TLC)</b> on a glass plate coated with silica gel.`,
        R`<b>Partition chromatography</b>: continuous distribution between two liquid phases. In <b>paper chromatography</b>, water trapped in the cellulose of the paper is the stationary phase.`
      ] },
      { fig: figTLC, cap: R`The retardation factor R<sub>f</sub> is characteristic of a compound for a given solvent and plate.` },
      R`The <b>retardation factor</b> is R<sub>f</sub> = (distance moved by the substance from the base line)/(distance moved by the solvent from the base line). Colourless spots are made visible under UV light, or by spraying with a reagent (ninhydrin for amino acids) or exposure to iodine vapour.`,
      { ex: { q: R`In a TLC run, a spot moves 3.0 cm while the solvent front moves 7.5 cm from the base line. Find R<sub>f</sub>.`,
        steps: [R`R<sub>f</sub> = 3.0/7.5.`], ans: R`0.40` } },
      R`Chromatography works on two different principles. In <b>adsorption chromatography</b> (column and thin-layer), components stick to a solid such as alumina or silica gel to different extents, so they travel at different speeds as the solvent flows past. In <b>partition chromatography</b> (paper), the "stationary phase" is water held in the fibres of the paper, and the components separate according to how they share themselves between that water and the moving solvent.`,
      { fig: figColumn, cap: R`In column chromatography the mixture is placed at the top of a column of adsorbent and washed down with solvent. The least strongly adsorbed component moves fastest and is collected first; the others follow in separate bands.` },
      { tip: R`Colourless spots on a TLC plate are seen under ultraviolet light or by exposing the plate to iodine vapour.` },
      { check: { q: R`Can R<sub>f</sub> be greater than 1?`, ans: R`No: a substance cannot move further than the solvent front.` } }
    ] },

    { h: R`Detection of carbon and hydrogen`, t: [1], blocks: [
      R`The compound is heated with <b>copper(II) oxide</b>. Carbon is oxidised to CO₂, which turns lime water milky, and hydrogen to water, which turns anhydrous copper sulphate blue:`,
      { points: [R`C + 2CuO → 2Cu + CO₂; CO₂ + Ca(OH)₂ → CaCO₃↓ + H₂O`, R`2H + CuO → Cu + H₂O; 5H₂O + CuSO₄ (white) → CuSO₄·5H₂O (blue)`] },
      R`The compound is mixed with dry copper(II) oxide and heated in a hard-glass tube. Carbon is oxidised to CO₂, which turns lime water milky, and hydrogen to water, which turns white anhydrous copper sulphate blue: C + 2CuO → 2Cu + CO₂ and 2H + CuO → Cu + H₂O.`,
      { check: { q: R`How is the presence of hydrogen in an organic compound shown?`, ans: R`Heated with CuO it gives water, which turns anhydrous CuSO₄ blue.` } }
    ] },

    { h: R`Lassaigne's test for nitrogen, sulphur and halogens`, t: [1], blocks: [
      R`The covalently bonded N, S and halogens are converted into ionic form by fusing the compound with <b>sodium metal</b>. The fused mass is boiled with water to give the <b>sodium fusion extract</b> (Lassaigne's extract): Na + C + N → NaCN; 2Na + S → Na₂S; Na + X → NaX.`,
      { fig: figLassaigne, cap: R`The three tests performed on the sodium fusion extract.` },
      { points: [
        R`<b>Nitrogen:</b> boil the extract with FeSO₄, then acidify with conc. H₂SO₄: a Prussian blue colour (Fe₄[Fe(CN)₆]₃·xH₂O) shows N. (6CN⁻ + Fe²⁺ → [Fe(CN)₆]⁴⁻; 3[Fe(CN)₆]⁴⁻ + 4Fe³⁺ → Fe₄[Fe(CN)₆]₃.)`,
        R`<b>Sulphur:</b> with sodium nitroprusside a violet colour ([Fe(CN)₅NOS]⁴⁻); with lead acetate a black precipitate of PbS.`,
        R`<b>Nitrogen and sulphur together</b> give NaSCN, which gives a blood-red colour with Fe³⁺ ([Fe(SCN)]²⁺); no Prussian blue forms because there are no free CN⁻ ions.`,
        R`<b>Halogens:</b> acidify the extract with HNO₃, boil (to decompose NaCN and Na₂S, which would otherwise interfere), then add AgNO₃: white AgCl (soluble in NH₃), pale yellow AgBr (sparingly soluble in NH₃), yellow AgI (insoluble in NH₃).`
      ] },
      { mistake: R`Testing for halogens without first boiling with HNO₃. CN⁻ and S²⁻ would give precipitates with Ag⁺ (AgCN, Ag₂S) and give a false result.` },
      { check: { q: R`Why does hydrazine (NH₂NH₂) not give the Lassaigne test for nitrogen?`, ans: R`It contains no carbon, so NaCN cannot form during fusion.` } }
    ] },

    { h: R`Detection of phosphorus`, t: [1], blocks: [
      R`The compound is heated with an oxidising agent (sodium peroxide). Phosphorus is oxidised to phosphate. The solution is boiled with nitric acid and treated with <b>ammonium molybdate</b>: a yellow precipitate of ammonium phosphomolybdate, (NH₄)₃PO₄·12MoO₃, shows phosphorus.`,
      { points: [R`Na₃PO₄ + 3HNO₃ → H₃PO₄ + 3NaNO₃`, R`H₃PO₄ + 12(NH₄)₂MoO₄ + 21HNO₃ → (NH₄)₃PO₄·12MoO₃↓ + 21NH₄NO₃ + 12H₂O`] },
      R`The compound is heated with an oxidising agent (sodium peroxide) so that phosphorus is converted into phosphate. The solution is boiled with nitric acid and then ammonium molybdate is added; a canary-yellow precipitate of ammonium phosphomolybdate, (NH₄)₃PO₄·12MoO₃, shows that phosphorus is present.`,
      { check: { q: R`What is the colour of ammonium phosphomolybdate?`, ans: R`Canary yellow.` } }
    ] },

    { h: R`Estimation of carbon and hydrogen`, t: [2], blocks: [
      R`A known mass of compound is burnt completely in dry oxygen with CuO. The water formed is absorbed in anhydrous CaCl₂ and the CO₂ in concentrated KOH, in weighed U-tubes. The increases in mass give the masses of H₂O and CO₂ (Liebig's method).`,
      { fig: figCombust, cap: R`Combustion analysis. The CaCl₂ tube must come before the KOH tube, since KOH would also absorb water.` },
      { derive: R`Percentages of C and H`, open: true, steps: [R`\[\%C = \frac{12}{44}\times\frac{m(CO_2)}{m}\times 100\]`, R`\[\%H = \frac{2}{18}\times\frac{m(H_2O)}{m}\times 100\]`, R`where m is the mass of the compound taken.`] },
      { ex: { q: R`0.246 g of an organic compound gave 0.198 g of CO₂ and 0.1014 g of H₂O on complete combustion. Find the percentages of C and H.`,
        steps: [R`%C = (12/44) × (0.198/0.246) × 100 = 21.95%.`, R`%H = (2/18) × (0.1014/0.246) × 100 = 4.58%.`], ans: R`C 21.95%, H 4.58%` } },
      { check: { q: R`Why is the CaCl₂ tube placed before the KOH tube?`, ans: R`KOH absorbs both water and CO₂; CaCl₂ must remove the water first.` } }
    ] },

    { h: R`Estimation of nitrogen: Dumas and Kjeldahl methods`, t: [2], blocks: [
      { h3: R`Dumas method` },
      R`The compound is heated with CuO in an atmosphere of CO₂. Nitrogen is set free as N₂ (any oxides of N are reduced back to N₂ over hot copper gauze). The gases are passed over KOH solution, which absorbs CO₂; N₂ is collected in a nitrometer and its volume measured.`,
      { derive: R`Percentage of nitrogen (Dumas)`, open: true, steps: [R`Correct the volume to STP: \(\dfrac{p_1V_1}{T_1} = \dfrac{p_0V_0}{T_0}\), where p₁ = atmospheric pressure − aqueous tension.`, R`\[\%N = \frac{28}{22400}\times\frac{V_0\ (\text{mL at STP})}{m}\times 100\]`] },
      { ex: { q: R`0.3 g of a compound gave 50 mL of N₂ collected at 300 K and 715 mm pressure (aqueous tension 15 mm). Find %N.`,
        steps: [R`p₁ = 715 − 15 = 700 mm. V₀ = (700 × 50 × 273)/(760 × 300) = 41.9 mL.`, R`%N = (28 × 41.9 × 100)/(22400 × 0.3) = 17.46%.`], ans: R`≈ 17.5%` } },
      { h3: R`Kjeldahl method` },
      R`The compound is heated with concentrated H₂SO₄ (with a little K₂SO₄ and CuSO₄ catalyst), converting nitrogen into ammonium sulphate. This is heated with excess NaOH, and the liberated NH₃ is absorbed in a known excess of standard acid. The unused acid is found by titration with alkali, giving the acid used by NH₃.`,
      { derive: R`Percentage of nitrogen (Kjeldahl)`, open: true, steps: [R`Moles of NH₃ = moles of H⁺ used = (molarity of acid × basicity × volume used in L).`, R`\[\%N = \frac{1.4 \times \text{molarity} \times \text{basicity} \times V_{\text{acid used (mL)}}}{m}\]`] },
      R`Kjeldahl's method <b>cannot</b> be used for compounds with nitrogen in nitro or azo groups, or in a ring (pyridine), because this nitrogen is not converted into ammonium sulphate.`,
      { ex: { q: R`The ammonia from 0.5 g of a compound neutralised 10 mL of 1 M H₂SO₄. Find %N.`,
        steps: [R`H⁺ used = 2 × 1 × 0.010 = 0.02 mol = mol NH₃ = mol N.`, R`Mass of N = 0.02 × 14 = 0.28 g; %N = 0.28/0.5 × 100 = 56%.`], ans: R`56%` } },
      { check: { q: R`Why can't Kjeldahl's method be used for nitrobenzene?`, ans: R`The nitrogen of the nitro group is not converted to ammonium sulphate under the conditions.` } }
    ] },

    { h: R`Estimation of halogens, sulphur and phosphorus: Carius method`, t: [2], blocks: [
      R`<b>Halogens:</b> a known mass of compound is heated with fuming HNO₃ and AgNO₃ in a sealed hard-glass tube (Carius tube). Carbon and hydrogen are oxidised; the halogen forms silver halide, which is filtered, washed, dried and weighed.`,
      { table: { head: [R`Element`, R`Weighed as`, R`Formula`], rows: [
        [R`Cl`, R`AgCl (143.5)`, R`%Cl = (35.5/143.5) × m(AgCl)/m × 100`],
        [R`Br`, R`AgBr (188)`, R`%Br = (80/188) × m(AgBr)/m × 100`],
        [R`I`, R`AgI (235)`, R`%I = (127/235) × m(AgI)/m × 100`],
        [R`S`, R`BaSO₄ (233)`, R`%S = (32/233) × m(BaSO₄)/m × 100`],
        [R`P`, R`Mg₂P₂O₇ (222)`, R`%P = (62/222) × m(Mg₂P₂O₇)/m × 100`]] } },
      R`<b>Sulphur:</b> the compound is heated with fuming HNO₃ (or Na₂O₂) in a Carius tube; sulphur is oxidised to H₂SO₄, which is precipitated as BaSO₄ by adding BaCl₂. <b>Phosphorus:</b> oxidised to H₃PO₄ and precipitated as ammonium phosphomolybdate (%P = 31 × m/(1877 × m₀) × 100) or as MgNH₄PO₄, which is ignited to Mg₂P₂O₇.`,
      { ex: { q: R`In a Carius estimation, 0.15 g of an organic compound gave 0.12 g of AgBr. Find %Br.`,
        steps: [R`%Br = (80/188) × (0.12/0.15) × 100 = 34.04%.`], ans: R`≈ 34.0%` } },
      { ex: { q: R`0.157 g of an organic compound gave 0.4813 g of BaSO₄. Find %S.`,
        steps: [R`%S = (32/233) × (0.4813/0.157) × 100 = 42.10%.`], ans: R`≈ 42.1%` } },
      { check: { q: R`In what form is sulphur weighed in the Carius method?`, ans: R`As barium sulphate, BaSO₄.` } }
    ] },

    { h: R`Empirical and molecular formulae`, t: [3], blocks: [
      R`Oxygen is usually found by difference: %O = 100 − (sum of all other percentages). From the percentage composition we find the <b>empirical formula</b> (simplest whole-number ratio of atoms); with the molar mass, the <b>molecular formula</b>:`,
      { points: [R`Divide each percentage by the atomic mass (relative moles).`, R`Divide by the smallest value; multiply by a small integer if needed to get whole numbers.`, R`n = molar mass / empirical formula mass; molecular formula = (empirical formula)ₙ.`] },
      { ex: { q: R`A compound contains C 40.0%, H 6.67% and O 53.33%. Its molar mass is 60 g/mol. Find its empirical and molecular formulae.`,
        steps: [R`C: 40/12 = 3.33; H: 6.67/1 = 6.67; O: 53.33/16 = 3.33.`, R`Ratio 1 : 2 : 1 → empirical formula CH₂O (mass 30).`, R`n = 60/30 = 2 → C₂H₄O₂.`], ans: R`CH₂O; C₂H₄O₂ (e.g. ethanoic acid)` } },
      { ex: { q: R`A hydrocarbon contains 85.7% C and 14.3% H, and its molar mass is 56 g/mol. Find its molecular formula.`,
        steps: [R`Moles: C 85.7/12 = 7.14; H 14.3/1 = 14.3. Ratio 1 : 2: empirical formula CH₂ (mass 14).`, R`n = 56/14 = 4.`], ans: R`C₄H₈ (a butene or a cycloalkane)` } },
      { tip: R`When a mole ratio comes out as 1 : 1.33 or 1 : 1.5, multiply all the numbers by 3 or 2 to make them whole. Never round 1.5 to 2.` },
      { check: { q: R`How is the percentage of oxygen usually found?`, ans: R`By difference: 100 minus the sum of the percentages of the other elements.` } }
    ] },

    { h: R`Numerical problems in quantitative analysis`, t: [4], blocks: [
      R`JEE problems usually combine the steps above. Keep track of which mass is the sample and which is the product weighed, and use the right fraction (12/44 for C in CO₂, 2/18 for H in H₂O, 28/22400 for N₂ volume, element/compound for AgX, BaSO₄, Mg₂P₂O₇).`,
      { ex: { q: R`0.2 g of a hydrocarbon on combustion gave 0.44 g CO₂ and 0.18 g H₂O. Does it contain only C and H? Find its empirical formula.`,
        steps: [R`%C = (12/44) × (0.44/0.2) × 100 = 60%; %H = (2/18) × (0.18/0.2) × 100 = 10%.`, R`Total only 70%, so the rest (30%) is oxygen: it is not a hydrocarbon.`, R`C 60/12 = 5, H 10/1 = 10, O 30/16 = 1.875 → divide by 1.875: 2.67 : 5.33 : 1 → × 3: 8 : 16 : 3.`], ans: R`Contains O; empirical formula C₈H₁₆O₃` } },
      { ex: { q: R`0.25 g of an organic compound gave 0.40 g of AgCl in the Carius method. Find %Cl.`,
        steps: [R`%Cl = (35.5/143.5) × (0.40/0.25) × 100 = 39.6%.`], ans: R`≈ 39.6%` } },
      { tip: R`For Kjeldahl problems, remember H₂SO₄ is dibasic: 1 mol H₂SO₄ neutralises 2 mol NH₃.` },
      { check: { q: R`A compound gives 22.4 mL of N₂ (STP) per 0.1 g. What is %N?`, ans: R`28 × 22.4/(22400 × 0.1) × 100 = 28%.` } }
    ] }
  ],
  summary: [
    R`Purity: sharp melting/boiling point; chromatography.`,
    R`Crystallisation (solubility difference), sublimation (camphor, naphthalene), distillation: simple, fractional (close bp), reduced pressure (decomposes), steam (immiscible, steam-volatile).`,
    R`Differential extraction with immiscible solvent; chromatography: adsorption (column, TLC) and partition (paper); R<sub>f</sub> = distance by substance / distance by solvent.`,
    R`Detection: C, H with CuO; Lassaigne extract: N (Prussian blue), S (violet with nitroprusside, black PbS), N + S (blood red), X (AgX after boiling with HNO₃); P (yellow phosphomolybdate).`,
    R`%C = (12/44)(m_CO₂/m)100; %H = (2/18)(m_H₂O/m)100; Dumas %N = (28/22400)(V₀/m)100; Kjeldahl %N = 1.4 × M × basicity × V/m (not for nitro, azo, ring N).`,
    R`Carius: %X from AgX, %S from BaSO₄ (32/233), %P from Mg₂P₂O₇ (62/222). %O by difference.`,
    R`Empirical formula from mole ratio; molecular formula = (empirical)ₙ with n = M/empirical mass.`,
    R`Several small extractions remove more solute than one large one; adsorption (column, TLC) vs partition (paper) chromatography.`
  ],
  refs: [
    { t: R`Wikipedia: Recrystallization (chemistry)`, url: 'https://en.wikipedia.org/wiki/Recrystallization_(chemistry)' },
    { t: R`Wikipedia: Steam distillation`, url: 'https://en.wikipedia.org/wiki/Steam_distillation' },
    { t: R`Wikipedia: Thin-layer chromatography`, url: 'https://en.wikipedia.org/wiki/Thin-layer_chromatography' },
    { t: R`Wikipedia: Sodium fusion test`, url: 'https://en.wikipedia.org/wiki/Sodium_fusion_test' },
    { t: R`Wikipedia: Kjeldahl method`, url: 'https://en.wikipedia.org/wiki/Kjeldahl_method' },
    { t: R`Wikipedia: Combustion analysis`, url: 'https://en.wikipedia.org/wiki/Combustion_analysis' }
  ]
});
})();
