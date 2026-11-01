// Book chapter: Surface Chemistry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D, PI = Math.PI;

// ---------- figures ----------
var figAdsT = D.row([
  [D.plot({ w: 220, h: 170, x: [0, 10], y: [0, 1.1], xlabel: 'T', ylabel: 'x/m', xticks: [], yticks: [], fns: [{ f: function (t) { return Math.exp(-0.35 * t); }, color: 'b' }], label: 'physisorption against temperature' }), 'physisorption falls as T rises'],
  [D.plot({ w: 220, h: 170, x: [0, 10], y: [0, 1.1], xlabel: 'T', ylabel: 'x/m', xticks: [], yticks: [], fns: [{ f: function (t) { return Math.exp(-Math.pow((t - 4.5) / 2.2, 2)); }, color: 'r' }], label: 'chemisorption against temperature' }), 'chemisorption first rises (needs Eₐ)']
]);

var figFreund = D.row([
  [D.plot({ w: 230, h: 180, x: [0, 10], y: [0, 7], xlabel: 'p', ylabel: 'x/m', xticks: [], yticks: [], fns: [{ f: function (p) { return 2 * Math.sqrt(p); }, color: 'c', label: '1/n < 1', lx: 3.2, ly: 2.6, math: false }], texts: [{ x: 8.8, y: 6.4, s: 'saturation', size: 10, color: 'm', anchor: 'end' }], label: 'Freundlich isotherm' }), 'x/m against p'],
  [D.plot({ w: 230, h: 180, x: [0, 2], y: [0, 1.6], xlabel: 'log p', ylabel: 'log(x/m)', xticks: [], yticks: [[0.3, 'log k']], fns: [{ f: function (x) { return 0.3 + 0.5 * x; }, color: 'c', label: 'slope = 1/n', lx: 1.0, ly: 0.6, math: false }], label: 'log form of Freundlich isotherm' }), 'log(x/m) against log p: straight line']
]);

var figScale = D.svg(440, 110, [
  D.rect(20, 40, 110, 30, { color: 'b', fill: 'soft', w: 1.4 }), D.text(75, 55, 'true solution', { size: 11, math: false, bold: true }),
  D.rect(130, 40, 170, 30, { color: 'o', fill: 'soft', w: 1.4 }), D.text(215, 55, 'colloid', { size: 11, math: false, bold: true }),
  D.rect(300, 40, 120, 30, { color: 'r', fill: 'soft', w: 1.4 }), D.text(360, 55, 'suspension', { size: 11, math: false, bold: true }),
  D.text(130, 86, '1 nm', { size: 11, math: false }), D.text(300, 86, '1000 nm', { size: 11, math: false }),
  D.text(75, 25, 'ions, small molecules', { size: 10, math: false, color: 'm' }), D.text(215, 25, 'starch, proteins, gold sol, milk', { size: 10, math: false, color: 'm' }), D.text(360, 25, 'sand in water', { size: 10, math: false, color: 'm' }),
  D.text(215, 102, 'particle size →', { size: 10, math: false, color: 'm' })
], 'Particle size: true solutions, colloids and suspensions');

var figTyndall = D.svg(420, 160, [
  D.rect(10, 70, 40, 20, { color: 'o', fill: 'soft', w: 1.4 }), D.text(30, 104, 'light', { size: 10, math: false }),
  D.path('M110 40 L110 130 L190 130 L190 40', { color: 'k', w: 1.8 }), D.rect(112, 60, 76, 68, { color: 'b', fill: 'soft', w: 0.01 }), D.text(150, 148, 'true solution', { size: 11, math: false }),
  D.path('M250 40 L250 130 L330 130 L330 40', { color: 'k', w: 1.8 }), D.rect(252, 60, 76, 68, { color: 'o', fill: 'soft', w: 0.01 }), D.text(290, 148, 'colloid', { size: 11, math: false }),
  D.line(50, 80, 400, 80, { color: 'o', w: 1, dash: '3 5' }), '<rect x="252" y="76" width="76" height="8" fill="#f5c542" opacity="0.8"/>',
  D.text(290, 30, 'path of light visible', { size: 10, math: false, color: 'o' }), D.text(150, 30, 'beam not seen', { size: 10, math: false, color: 'b' }),
  D.circle(375, 40, 10, { color: 'k', w: 1.2 }), D.arrow(372, 50, 300, 78, { color: 'm', w: 1, head: 5 }), D.text(395, 30, 'eye at 90°', { size: 10, math: false, anchor: 'start' })
], 'Tyndall effect');

var figMicelle = (function () {
  var p = [], cx = 110, cy = 100, n = 14;
  for (var k = 0; k < n; k++) { var a = 2 * PI * k / n, x1 = cx + 62 * Math.cos(a), y1 = cy + 62 * Math.sin(a), x2 = cx + 18 * Math.cos(a), y2 = cy + 18 * Math.sin(a);
    p.push(D.path('M' + x1 + ' ' + y1 + ' Q ' + ((x1 + x2) / 2 + 6 * Math.sin(a)) + ' ' + ((y1 + y2) / 2 - 6 * Math.cos(a)) + ' ' + x2 + ' ' + y2, { color: 'o', w: 1.6 }), D.circle(x1, y1, 7, { color: 'b', fill: 'soft', w: 1.4 }), D.text(x1, y1 + 0.5, '−', { size: 10, color: 'b', bold: true, raw: true })); }
  p.push(D.text(cx, cy, 'oil / grease', { size: 10, math: false, color: 'o' }), D.text(250, 60, 'polar head (COO⁻)', { size: 11, math: false, color: 'b', anchor: 'start' }), D.text(250, 80, 'faces water', { size: 11, math: false, color: 'b', anchor: 'start' }),
    D.text(250, 120, 'hydrocarbon tail', { size: 11, math: false, color: 'o', anchor: 'start' }), D.text(250, 140, 'points inwards', { size: 11, math: false, color: 'o', anchor: 'start' }));
  return D.svg(400, 200, p, 'A soap micelle');
})();

// ---------- chapter text ----------
JEE.book('chemistry', 'surface-chemistry', {
  intro: [
    R`Much important chemistry happens at surfaces: gas masks trap poisons on charcoal, catalytic converters clean car exhaust on metal surfaces, and soap lifts grease from cloth. <b>Surface chemistry</b> studies what happens at the boundary between phases.`,
    R`This chapter covers adsorption (physisorption and chemisorption, the factors affecting it, and the Freundlich isotherm), colloids and their classification, preparation and purification, their special properties (Tyndall effect, Brownian movement, charge and coagulation), and emulsions, surfactants and micelles. (Catalysis is treated in the Chemical Kinetics chapter.)`
  ],
  sections: [
    { h: R`Adsorption`, t: [0], blocks: [
      R`<b>Adsorption</b> is the accumulation of molecules of a substance at the surface of another, rather than in its bulk. The substance adsorbed is the <b>adsorbate</b> and the surface material is the <b>adsorbent</b> (charcoal, silica gel, alumina, finely divided metals). Removing adsorbed molecules is <b>desorption</b>.`,
      R`<b>Absorption</b> is different: the substance spreads uniformly through the bulk (water absorbed by a sponge, ammonia by water). When both happen together, it is called <b>sorption</b>. Silica gel adsorbs water vapour; anhydrous CaCl₂ absorbs it.`,
      R`Surface particles have unbalanced attractive forces, so adsorption lowers the surface energy: it is always <b>exothermic</b> (ΔH < 0). Although the entropy of the adsorbate decreases (ΔS < 0), ΔG = ΔH − TΔS is negative while ΔH outweighs TΔS; as adsorption continues, ΔH becomes less negative until ΔG = 0 and equilibrium is reached.`,
      { check: { q: R`Is adsorption exothermic or endothermic?`, ans: R`Always exothermic.` } }
    ] },

    { h: R`Physisorption and chemisorption`, t: [0], blocks: [
      { table: { head: [R`Physisorption`, R`Chemisorption`], rows: [
        [R`van der Waals forces`, R`chemical bonds (activated adsorption)`], [R`low enthalpy, 20–40 kJ/mol`, R`high enthalpy, 80–240 kJ/mol`], [R`not specific`, R`highly specific`], [R`reversible`, R`usually irreversible`],
        [R`multimolecular layers`, R`a single (unimolecular) layer`], [R`decreases with rise in temperature`, R`first increases (needs activation energy), then decreases`], [R`easily liquefiable gases (higher T_c) adsorb more`, R`depends on chemical reactivity`]] } },
      { fig: figAdsT, cap: R`Physisorption decreases steadily with temperature; chemisorption first increases (activation energy is needed) and then decreases.` },
      { check: { q: R`Which forms a single layer of adsorbed molecules?`, ans: R`Chemisorption.` } }
    ] },

    { h: R`Factors affecting adsorption of gases on solids`, t: [1], blocks: [
      { points: [
        R`<b>Nature of the gas:</b> easily liquefiable gases (NH₃, SO₂, HCl, with high critical temperatures and stronger van der Waals forces) are adsorbed more than H₂, N₂, O₂.`,
        R`<b>Surface area:</b> finely divided and porous adsorbents (activated charcoal, silica gel) adsorb more.`,
        R`<b>Pressure:</b> adsorption increases with pressure, quickly at first and then levelling off as the surface saturates.`,
        R`<b>Temperature:</b> being exothermic, physisorption decreases with temperature (Le Chatelier).`,
        R`<b>Activation of the adsorbent:</b> heating charcoal in steam, or subdividing it, increases its surface and adsorbing power.`
      ] },
      { check: { q: R`Which is adsorbed more by charcoal: NH₃ or H₂?`, ans: R`NH₃ (higher critical temperature, more easily liquefied).` } }
    ] },

    { h: R`Freundlich adsorption isotherm`, t: [1], blocks: [
      R`An <b>adsorption isotherm</b> shows how the amount adsorbed per gram of adsorbent, x/m, varies with pressure at constant temperature. Freundlich (1909) gave the empirical relation \[\frac xm = k\,p^{1/n}\quad(n > 1)\] Taking logs: \(\log\dfrac xm = \log k + \dfrac1n\log p\): a straight line with slope 1/n and intercept log k.`,
      { fig: figFreund, cap: R`Freundlich isotherm: x/m rises with p and flattens at high pressure; its log plot is a straight line of slope 1/n.` },
      { points: [R`At low pressure, 1/n ≈ 1: x/m ∝ p.`, R`At high pressure, 1/n → 0: x/m is constant (saturation).`, R`The isotherm fails at high pressures; it applies to adsorption from solution too, using concentration C instead of p.`] },
      { ex: { q: R`A plot of log(x/m) against log p is a straight line with slope 0.5 and intercept 0.3. Find k, n and x/m at p = 4 atm.`,
        steps: [R`log k = 0.3, so k = 2; 1/n = 0.5, so n = 2.`, R`x/m = 2 × 4^{0.5}.`], ans: R`k = 2, n = 2, x/m = 4` } },
      { check: { q: R`What is the value of 1/n at very high pressure?`, ans: R`Close to 0 (x/m becomes independent of pressure).` } }
    ] },

    { h: R`Applications of adsorption`, t: [1], blocks: [
      { points: [
        R`Gas masks (activated charcoal adsorbs poisonous gases); high vacuum (charcoal in Dewar flasks).`,
        R`Removing colour from cane sugar solutions (animal charcoal) and humidity control (silica gel).`,
        R`Heterogeneous catalysis (Fe in the Haber process, Ni in hydrogenation).`,
        R`Separating inert gases (adsorbed to different extents on coconut charcoal), and chromatography.`,
        R`Froth flotation of sulphide ores (pine oil), adsorption indicators in precipitation titrations (eosin, fluorescein), and curing diseases (drugs adsorbed by germs).`
      ] },
      { check: { q: R`Why is activated charcoal used in gas masks?`, ans: R`Its huge porous surface adsorbs poisonous gases strongly while letting air pass.` } }
    ] },

    { h: R`True solutions, colloids and suspensions`, t: [2], blocks: [
      R`A <b>colloid</b> is a heterogeneous system in which one substance (the <b>dispersed phase</b>) is spread as very fine particles, 1 nm to 1000 nm in size, through another (the <b>dispersion medium</b>).`,
      { fig: figScale, cap: R`Colloids lie between true solutions (particles below 1 nm) and suspensions (above 1000 nm).` },
      { table: { head: [R`Property`, R`True solution`, R`Colloid`, R`Suspension`], rows: [
        [R`Nature`, R`homogeneous`, R`heterogeneous (appears homogeneous)`, R`heterogeneous`], [R`Passes through filter paper`, R`yes`, R`yes`, R`no`], [R`Passes through parchment (membrane)`, R`yes`, R`no`, R`no`],
        [R`Visibility of particles`, R`invisible`, R`seen only by scattered light (ultramicroscope)`, R`visible`], [R`Settles on standing`, R`no`, R`no (only in an ultracentrifuge)`, R`yes`], [R`Tyndall effect`, R`no`, R`yes`, R`yes`]] } },
      { check: { q: R`Can colloidal particles be separated by filter paper?`, ans: R`No; they pass through it (but not through parchment or cellophane).` } }
    ] },

    { h: R`Classification of colloids`, t: [2], blocks: [
      { h3: R`By physical state of the two phases` },
      { table: { head: [R`Dispersed phase`, R`Medium`, R`Type`, R`Examples`], rows: [
        [R`Solid`, R`liquid`, R`sol`, R`paints, cell fluids, gold sol`], [R`Liquid`, R`liquid`, R`emulsion`, R`milk, hair cream`], [R`Gas`, R`liquid`, R`foam`, R`froth, whipped cream, soap lather`], [R`Solid`, R`gas`, R`aerosol`, R`smoke, dust`],
        [R`Liquid`, R`gas`, R`aerosol`, R`fog, mist, cloud`], [R`Liquid`, R`solid`, R`gel`, R`cheese, butter, jellies`], [R`Solid`, R`solid`, R`solid sol`, R`coloured glass, gemstones`], [R`Gas`, R`solid`, R`solid foam`, R`pumice, foam rubber`]] } },
      { h3: R`By interaction with the medium` },
      { points: [R`<b>Lyophilic</b> ("solvent-loving") colloids: gum, gelatin, starch, rubber. Formed simply by mixing; stable; <b>reversible</b> (can be re-formed after evaporation); highly solvated.`, R`<b>Lyophobic</b> ("solvent-hating") colloids: metal sols, sulphides, hydroxides. Need special methods to prepare; unstable, coagulated easily by electrolytes; <b>irreversible</b>.`] },
      { h3: R`By type of particle` },
      { points: [R`<b>Multimolecular</b>: aggregates of many small molecules (gold sol, sulphur sol) held by van der Waals forces.`, R`<b>Macromolecular</b>: single large molecules of colloidal size (starch, proteins, cellulose, nylon); usually lyophilic.`, R`<b>Associated colloids</b> (micelles): substances like soaps that behave as normal electrolytes at low concentration but form aggregates above a certain concentration.`] },
      { check: { q: R`What type of colloid is fog?`, ans: R`An aerosol (liquid dispersed in gas).` } }
    ] },

    { h: R`Preparation of colloids`, t: [3], blocks: [
      { points: [
        R`<b>Chemical methods</b> (double decomposition, oxidation, reduction, hydrolysis) produce insoluble substances as tiny particles: As₂O₃ + 3H₂S → As₂S₃ (sol) + 3H₂O; SO₂ + 2H₂S → 3S (sol) + 2H₂O; 2AuCl₃ + 3HCHO + 3H₂O → 2Au (sol) + 3HCOOH + 6HCl; FeCl₃ + 3H₂O (boiling) → Fe(OH)₃ (sol) + 3HCl.`,
        R`<b>Electrical disintegration (Bredig's arc method):</b> an electric arc between metal electrodes under water (ice-cooled) vaporises the metal, which condenses into colloidal particles: sols of Au, Ag, Pt.`,
        R`<b>Peptisation:</b> converting a freshly made precipitate into a colloid by shaking it with a small amount of an electrolyte (the peptising agent), whose ions are adsorbed and charge the particles so they repel apart: fresh Fe(OH)₃ with a little FeCl₃.`
      ] },
      { check: { q: R`What is the role of the electrolyte in peptisation?`, ans: R`Its common ion is adsorbed on the precipitate particles, giving them the same charge so they repel and disperse.` } }
    ] },

    { h: R`Purification of colloids`, t: [3], blocks: [
      R`Colloids usually contain excess electrolytes, which destabilise them. They are purified by:`,
      { points: [R`<b>Dialysis:</b> the sol is placed in a parchment or cellophane bag in running water; small ions and molecules diffuse out, colloidal particles stay behind.`, R`<b>Electrodialysis:</b> applying an electric field speeds up dialysis when the impurities are electrolytes.`, R`<b>Ultrafiltration:</b> filter papers impregnated with collodion (with very fine pores) hold back colloidal particles; ultracentrifugation can also settle them.`] },
      R`Our kidneys work like a dialysis unit; artificial kidney machines purify blood by dialysis.`,
      { check: { q: R`Which purification method uses an electric field?`, ans: R`Electrodialysis.` } }
    ] },

    { h: R`Tyndall effect and colour`, t: [4], blocks: [
      R`When a beam of light passes through a colloid, its path becomes visible as a bright cone when viewed from the side, because the colloidal particles scatter light: the <b>Tyndall effect</b>. True solutions do not show it.`,
      { fig: figTyndall, cap: R`The beam is invisible in a true solution but visible in a colloid, seen at right angles to the beam.` },
      R`It needs the particle size not much smaller than the wavelength of light, and a large difference in refractive index between the phases. Examples: the blue sky, sunbeams in a dusty room, headlights in fog. The ultramicroscope (Zsigmondy) uses it to see colloidal particles as bright spots.`,
      R`<b>Colour</b> of a sol depends on the wavelength scattered, which depends on particle size: finest gold sol is red, larger particles purple, then blue, then golden. Milk looks blue in reflected light and red in transmitted light.`,
      { check: { q: R`Why does the sky look blue?`, ans: R`Fine particles and molecules in the air scatter blue light (short wavelength) much more than red.` } }
    ] },

    { h: R`Brownian movement`, t: [4], blocks: [
      R`Viewed through an ultramicroscope, colloidal particles move in a continuous random zigzag: <b>Brownian movement</b> (first seen by Robert Brown in pollen grains in water, 1827). It is caused by unbalanced bombardment of the particles by the molecules of the medium, and it is faster for smaller particles and less viscous media.`,
      R`Brownian movement keeps colloidal particles stirred up, opposing the pull of gravity, which is why sols do not settle and are stable.`,
      { check: { q: R`Does Brownian movement depend on the nature of the colloid?`, ans: R`No: only on particle size and the viscosity of the medium.` } }
    ] },

    { h: R`Charge on colloidal particles and electrophoresis`, t: [4], blocks: [
      R`Colloidal particles carry an electric charge (all particles of a sol have the same sign), which keeps them apart. The charge comes from preferential adsorption of ions from the medium, electron capture during Bredig's arc, or ionisation of surface groups.`,
      { points: [R`<b>Positive sols:</b> hydrated metal oxides and hydroxides (Fe(OH)₃, Al(OH)₃), basic dyes (methylene blue), haemoglobin.`, R`<b>Negative sols:</b> metals (Cu, Ag, Au), metal sulphides (As₂S₃), acidic dyes (eosin), starch, gum, clay.`, R`<b>Example:</b> AgI formed from KI in excess adsorbs I⁻ and is negative (AgI/I⁻); formed from AgNO₃ in excess, it adsorbs Ag⁺ and is positive (AgI/Ag⁺).`] },
      R`The adsorbed layer attracts a diffuse layer of opposite ions from the medium (the <b>Helmholtz electrical double layer</b>); the potential difference across it is the <b>zeta (electrokinetic) potential</b>.`,
      R`<b>Electrophoresis:</b> in an electric field, colloidal particles move towards the electrode of opposite charge; this shows their sign. If the particles are held still, the medium moves instead: <b>electro-osmosis</b>.`,
      { check: { q: R`Which way does a ferric hydroxide sol move in electrophoresis?`, ans: R`Towards the cathode (it is positively charged).` } }
    ] },

    { h: R`Coagulation and the Hardy–Schulze rule; protection of colloids`, t: [4], blocks: [
      R`<b>Coagulation</b> (flocculation) is the settling of colloidal particles, caused by neutralising their charge. It can be brought about by adding an electrolyte, by electrophoresis, by mixing two oppositely charged sols, or by boiling or persistent dialysis.`,
      R`<b>Hardy–Schulze rule:</b> the ion with charge opposite to that of the sol particles causes coagulation, and its coagulating power increases with its charge (valency).`,
      { points: [R`For a negative sol (As₂S₃): Al³⁺ > Ba²⁺ > Na⁺.`, R`For a positive sol (Fe(OH)₃): [Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻.`, R`The <b>coagulating (flocculation) value</b> is the minimum concentration (mmol/L) of electrolyte needed to coagulate a sol in 2 hours; the smaller it is, the greater the coagulating power.`] },
      R`<b>Protection:</b> lyophilic colloids, added to lyophobic sols, form a protective layer around their particles and prevent coagulation by electrolytes. Their protective power is measured by the <b>gold number</b>: the milligrams of protective colloid needed to prevent coagulation of 10 mL of gold sol by 1 mL of 10% NaCl. A smaller gold number means a better protector (gelatin ≈ 0.005–0.01, starch ≈ 15–25).`,
      { ex: { q: R`Arrange NaCl, BaCl₂ and AlCl₃ in order of coagulating power for an As₂S₃ sol.`,
        steps: [R`As₂S₃ is negative, so the cations matter: Na⁺ (1), Ba²⁺ (2), Al³⁺ (3).`], ans: R`AlCl₃ > BaCl₂ > NaCl` } },
      { check: { q: R`Why is alum used to purify muddy water?`, ans: R`Its Al³⁺ ions coagulate the negatively charged clay particles, which settle.` } }
    ] },

    { h: R`Emulsions`, t: [5], blocks: [
      R`An <b>emulsion</b> is a colloid of one liquid dispersed in another immiscible liquid. Two types:`,
      { points: [R`<b>Oil in water (o/w):</b> oil drops in water: milk, vanishing cream.`, R`<b>Water in oil (w/o):</b> water drops in oil: butter, cold cream.`] },
      R`Emulsions separate on standing unless an <b>emulsifying agent</b> (emulsifier) is added, which forms a film between the drops. Proteins, gums and soaps stabilise o/w emulsions; heavy metal salts of fatty acids and long-chain alcohols stabilise w/o emulsions. Emulsions show Brownian movement and the Tyndall effect, and can be broken by heating, freezing or centrifuging (demulsification).`,
      { check: { q: R`Which type of emulsion is milk, and what stabilises it?`, ans: R`Oil (fat) in water; stabilised by the protein casein.` } }
    ] },

    { h: R`Surfactants`, t: [5], blocks: [
      R`<b>Surfactants</b> (surface-active agents) are molecules with a polar (water-loving) head and a long non-polar (water-hating) hydrocarbon tail. They collect at surfaces and interfaces and lower surface tension.`,
      { points: [R`<b>Anionic:</b> soaps (sodium stearate, C₁₇H₃₅COO⁻ Na⁺) and synthetic detergents (sodium lauryl sulphate, alkylbenzenesulphonates).`, R`<b>Cationic:</b> quaternary ammonium salts (cetyltrimethylammonium bromide), used in hair conditioners and as germicides.`, R`<b>Non-ionic:</b> polyethylene glycol esters, used in liquid dishwashing detergents.`] },
      { check: { q: R`Why can detergents be used in hard water but soaps cannot?`, ans: R`Soaps form insoluble scum with Ca²⁺ and Mg²⁺; the calcium salts of detergents (sulphonates) are soluble.` } }
    ] },

    { h: R`Micelles and the critical micelle concentration`, t: [5], blocks: [
      R`At low concentration a soap behaves as a normal electrolyte. Above a certain concentration, the <b>critical micelle concentration</b> (CMC, about 10⁻⁴ to 10⁻³ mol/L for soaps), and above a certain temperature (the Kraft temperature), the ions cluster into aggregates called <b>micelles</b> (associated colloids), each containing about 100 or more ions.`,
      { fig: figMicelle, cap: R`In a micelle, the hydrocarbon tails point inward (away from water) and the ionic heads face outward into the water. Grease is held inside.` },
      R`<b>Cleansing action of soap:</b> soap molecules surround a grease drop with their tails dissolved in the grease and their heads in water, forming a micelle around it. The charged micelles repel each other, and the grease is washed away with the water.`,
      { check: { q: R`What happens to soap molecules below the CMC?`, ans: R`They stay as separate ions (a true solution); micelles form only above the CMC.` } }
    ] }
  ],
  summary: [
    R`Adsorption is a surface phenomenon; always exothermic. Adsorbate, adsorbent, desorption; absorption is bulk.`,
    R`Physisorption (van der Waals, low ΔH, multilayer, falls with T) vs chemisorption (bonds, high ΔH, monolayer, specific, rises then falls with T).`,
    R`Factors: nature of gas (liquefiable gases more), surface area, pressure, temperature.`,
    R`Freundlich: x/m = kp^{1/n}; log(x/m) = log k + (1/n) log p.`,
    R`Colloids 1–1000 nm; sol, emulsion, foam, aerosol, gel; lyophilic (reversible, stable) vs lyophobic; multimolecular, macromolecular, associated.`,
    R`Preparation: chemical, Bredig's arc, peptisation. Purification: dialysis, electrodialysis, ultrafiltration.`,
    R`Properties: Tyndall effect, colour, Brownian movement, charge (double layer, zeta potential), electrophoresis.`,
    R`Coagulation; Hardy–Schulze: higher charge of the opposite ion coagulates more; gold number (smaller = better protection).`,
    R`Emulsions o/w and w/o, emulsifiers; surfactants (anionic, cationic, non-ionic); micelles above the CMC; cleansing action of soap.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §11.5 Colloids`, url: 'https://openstax.org/books/chemistry-2e/pages/11-5-colloids' },
    { t: R`Wikipedia: Adsorption`, url: 'https://en.wikipedia.org/wiki/Adsorption' },
    { t: R`Wikipedia: Freundlich equation`, url: 'https://en.wikipedia.org/wiki/Freundlich_equation' },
    { t: R`Wikipedia: Tyndall effect`, url: 'https://en.wikipedia.org/wiki/Tyndall_effect' },
    { t: R`Wikipedia: Micelle`, url: 'https://en.wikipedia.org/wiki/Micelle' }
  ]
});
})();
