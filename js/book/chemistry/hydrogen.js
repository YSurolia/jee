// Book chapter: Hydrogen. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function box(x, y, w, h, t, c) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + D.text(x + w / 2, y + h / 2, t, { size: 11, math: false, bold: true }); }

// ---------- figures ----------
var figPosition = D.svg(420, 150, [
  box(165, 55, 90, 40, 'H  (1s¹)', 'k'),
  box(10, 20, 130, 110, '', 'r'), D.text(75, 36, 'like alkali metals', { size: 11, math: false, color: 'r', bold: true }), D.text(75, 60, 'one valence electron', { size: 10, math: false }), D.text(75, 78, 'forms H⁺ (in water)', { size: 10, math: false }), D.text(75, 96, '+1 oxidation state', { size: 10, math: false }), D.text(75, 114, 'reducing agent', { size: 10, math: false }),
  box(280, 20, 130, 110, '', 'b'), D.text(345, 36, 'like halogens', { size: 11, math: false, color: 'b', bold: true }), D.text(345, 60, 'one short of a noble gas', { size: 10, math: false }), D.text(345, 78, 'forms H⁻ (hydrides)', { size: 10, math: false }), D.text(345, 96, 'diatomic, covalent H₂', { size: 10, math: false }), D.text(345, 114, 'high ionisation enthalpy', { size: 10, math: false }),
  D.line(140, 75, 165, 75, { color: 'm', w: 1.2 }), D.line(255, 75, 280, 75, { color: 'm', w: 1.2 })
], 'Hydrogen resembles both the alkali metals and the halogens');

var figHydrides = D.svg(440, 170, [
  box(170, 10, 100, 30, 'Hydrides', 'k'), D.line(220, 40, 70, 65, { color: 'm' }), D.line(220, 40, 220, 65, { color: 'm' }), D.line(220, 40, 370, 65, { color: 'm' }),
  box(15, 65, 110, 30, 'Ionic (saline)', 'r'), box(165, 65, 110, 30, 'Covalent', 'b'), box(315, 65, 115, 30, 'Interstitial', 'o'),
  D.text(70, 112, 's-block metals', { size: 10, math: false }), D.text(70, 126, 'LiH, NaH, CaH₂', { size: 10, math: false }), D.text(70, 140, 'crystalline, H⁻', { size: 10, math: false }),
  D.text(220, 112, 'p-block elements', { size: 10, math: false }), D.text(220, 126, 'B₂H₆ (deficient), CH₄ (precise),', { size: 10, math: false }), D.text(220, 140, 'NH₃, H₂O, HF (rich)', { size: 10, math: false }),
  D.text(372, 112, 'd- and f-block', { size: 10, math: false }), D.text(372, 126, 'non-stoichiometric', { size: 10, math: false }), D.text(372, 140, 'LaH₂.₈₇, TiH₁.₅–₁.₈', { size: 10, math: false })
], 'Classification of hydrides');

var figWater = D.molecule({ w: 220, h: 140, atoms: [{ x: 110, y: 60, s: 'O', lp: [40, 140] }, { x: 55, y: 105, s: 'H' }, { x: 165, y: 105, s: 'H' }], bonds: [[0, 1], [0, 2]], texts: [{ x: 110, y: 98, s: '104.5°', size: 12, color: 'm', math: false }], label: 'Water molecule' });

var figH2O2 = D.svg(320, 190, [
  D.line(120, 95, 200, 95, { color: 'r', w: 3 }), D.circle(120, 95, 14, { color: 'r', fill: 'soft', w: 1.6 }), D.text(120, 96, 'O', { size: 12, math: false, bold: true }), D.circle(200, 95, 14, { color: 'r', fill: 'soft', w: 1.6 }), D.text(200, 96, 'O', { size: 12, math: false, bold: true }),
  D.line(110, 85, 70, 40, { w: 2 }), D.circle(66, 35, 10, { color: 'b', fill: 'soft', w: 1.4 }), D.text(66, 36, 'H', { size: 10, math: false }),
  D.line(210, 105, 255, 150, { w: 2 }), D.circle(259, 154, 10, { color: 'b', fill: 'soft', w: 1.4 }), D.text(259, 155, 'H', { size: 10, math: false }),
  D.text(160, 80, '147.5 pm', { size: 10, math: false, color: 'm' }), D.text(250, 40, 'open-book shape', { size: 11, math: false, color: 'm' }), D.text(250, 56, 'dihedral angle 111.5° (gas)', { size: 10, math: false, color: 'm' }),
  D.text(80, 140, 'H–O–O angle 94.8°', { size: 10, math: false, color: 'm' })
], 'Structure of hydrogen peroxide (gas phase)');


var figIndustrial = D.svg(460, 130, [
  box(5, 45, 90, 40, 'CH₄ + H₂O', 'k'), D.arrow(95, 65, 150, 65, { color: 'm' }), D.text(122, 50, 'Ni, 1270 K', { size: 9, math: false, color: 'm' }),
  box(150, 45, 90, 40, 'CO + 3H₂', 'b'), D.text(195, 100, 'syngas', { size: 10, math: false, color: 'b' }), D.arrow(240, 65, 300, 65, { color: 'm' }), D.text(270, 38, '+ H₂O', { size: 9, math: false, color: 'm' }), D.text(270, 50, 'Fe–Cr, 673 K', { size: 9, math: false, color: 'm' }),
  box(300, 45, 90, 40, 'CO₂ + 4H₂', 'o'), D.arrow(390, 65, 420, 65, { color: 'm' }), D.text(440, 65, 'H₂', { size: 13, math: false, bold: true, color: 'g' }),
  D.text(345, 105, 'CO₂ washed out', { size: 9, math: false, color: 'm' }), D.text(345, 117, '(sodium arsenite)', { size: 9, math: false, color: 'm' })
], 'Industrial hydrogen from methane: steam reforming then the water-gas shift');

// ---------- chapter text ----------
JEE.book('chemistry', 'hydrogen', {
  intro: [
    R`Hydrogen is the simplest and most abundant element in the universe: about 70% of the mass of the Sun and stars. On Earth it is found mostly combined, in water and in organic compounds. It may become the clean fuel of the future.`,
    R`This chapter covers hydrogen's unusual position in the periodic table, its isotopes, the preparation, properties and uses of dihydrogen, the three classes of hydrides, water and heavy water, hydrogen peroxide, and hydrogen as a fuel.`
  ],
  sections: [
    { h: R`Position of hydrogen in the periodic table`, t: [0], blocks: [
      R`Hydrogen (1s¹) has only one electron, so it fits awkwardly in the periodic table. It resembles both groups at the two ends:`,
      { fig: figPosition, cap: R`Hydrogen is placed above the alkali metals in group 1 but is a unique element.` },
      R`It differs from alkali metals because its ionisation enthalpy (1312 kJ/mol) is far higher and it is a non-metal; and from halogens because H⁻ is much less stable than halide ions. The bare proton H⁺ is extremely small (about 10⁻¹⁵ m) and never exists free in water: it is always H₃O⁺. Hence hydrogen is usually placed separately at the top of the table.`,
      { check: { q: R`Why does H⁺ not exist freely in solution?`, ans: R`Its tiny size gives it an enormous charge density, so it immediately attaches to a water molecule (H₃O⁺).` } }
    ] },

    { h: R`Occurrence and isotopes`, t: [0], blocks: [
      R`Dihydrogen makes up only about 0.15% of the Earth's crust by mass, mostly combined in water, minerals, hydrocarbons and living matter. Hydrogen has three isotopes:`,
      { table: { head: [R`Isotope`, R`Symbol`, R`Neutrons`, R`Abundance`, R`Stability`], rows: [[R`Protium`, R`¹H (H)`, R`0`, R`99.985%`, R`stable`], [R`Deuterium`, R`²H (D)`, R`1`, R`0.0156%`, R`stable`], [R`Tritium`, R`³H (T)`, R`2`, R`~1 in 10¹⁸`, R`radioactive (β⁻, t½ 12.33 y)`]] } },
      R`Isotopes have the same chemical properties but react at different rates (the <b>isotope effect</b>): bonds to D are stronger than to H, so reactions of deuterium compounds are slower. This is used to study reaction mechanisms.`,
      { check: { q: R`Which isotope of hydrogen is radioactive?`, ans: R`Tritium.` } }
    ] },

    { h: R`Preparation of dihydrogen`, t: [1], blocks: [
      { points: [
        R`<b>Laboratory:</b> granulated zinc with dilute HCl or H₂SO₄: Zn + 2H⁺ → Zn²⁺ + H₂. Or zinc with aqueous alkali: Zn + 2NaOH → Na₂ZnO₂ + H₂.`,
        R`<b>Electrolysis</b> of acidified water (Pt electrodes): very pure H₂ at the cathode. Also a by-product of brine electrolysis (chlor-alkali process).`,
        R`<b>Steam reforming</b> of hydrocarbons: CH₄ + H₂O → CO + 3H₂ (1270 K, Ni catalyst). The mixture of CO and H₂ is <b>water gas</b> or <b>synthesis gas (syngas)</b>; from coal it is coal gasification.`,
        R`<b>Water-gas shift reaction:</b> CO + H₂O → CO₂ + H₂ (673 K, iron chromate catalyst). CO₂ is removed by washing with sodium arsenite solution. About 77% of industrial H₂ comes from petrochemicals.`
      ] },
      { fig: figIndustrial, cap: R`Steam reforming makes syngas; the shift reaction converts its CO into more H₂.` },
      { check: { q: R`Why can't pure zinc be used for preparing hydrogen in the lab?`, ans: R`Pure zinc reacts slowly; impurities in granulated zinc set up tiny cells that speed up the reaction.` } }
    ] },

    { h: R`Properties of dihydrogen`, t: [1], blocks: [
      R`<b>Physical:</b> colourless, odourless, tasteless, combustible gas; lighter than air (density 0.09 g/L); almost insoluble in water. Its H–H bond enthalpy is very high, 435.9 kJ/mol, which makes it fairly unreactive at room temperature.`,
      R`<b>Chemical:</b>`,
      { points: [R`With halogens: H₂ + X₂ → 2HX (reactivity F₂ > Cl₂ > Br₂ > I₂; with F₂ even in the dark).`, R`With oxygen: 2H₂ + O₂ → 2H₂O (highly exothermic).`, R`With nitrogen: N₂ + 3H₂ ⇌ 2NH₃ (Haber process, Fe catalyst, 673 K, 200 atm).`, R`With metals: forms hydrides (2Na + H₂ → 2NaH).`, R`Reduces metal oxides: CuO + H₂ → Cu + H₂O.`, R`Hydrogenation of unsaturated organic compounds: vegetable oils + H₂ → vanaspati ghee (Ni catalyst); CO + 2H₂ → CH₃OH (cobalt catalyst).`] },
      { check: { q: R`Why is dihydrogen relatively unreactive at room temperature?`, ans: R`Its H–H bond enthalpy is very high (436 kJ/mol).` } }
    ] },

    { h: R`Uses of dihydrogen`, t: [1], blocks: [
      { points: [R`Synthesis of ammonia (fertilisers) and methanol.`, R`Hydrogenation of vegetable oils into solid fats.`, R`Making metal hydrides and HCl.`, R`Metallurgy: reducing metal oxides (W, Mo).`, R`Rocket fuel (liquid H₂ with liquid O₂) and fuel cells.`, R`Atomic hydrogen and oxy-hydrogen torches for welding (up to about 4000 K).`] },
      { check: { q: R`Name the largest single use of hydrogen.`, ans: R`Making ammonia (Haber process).` } }
    ] },

    { h: R`Ionic (saline) hydrides`, t: [2], blocks: [
      R`Compounds of hydrogen with other elements are <b>hydrides</b>, of three types.`,
      { fig: figHydrides, cap: R`Ionic, covalent and interstitial hydrides.` },
      R`<b>Ionic hydrides</b> are formed by most s-block metals (the most electropositive). They are crystalline, non-volatile, non-conducting solids containing H⁻, and they react violently with water: NaH + H₂O → NaOH + H₂. On electrolysis of the melt, H₂ is liberated at the <b>anode</b>, which proves the presence of H⁻. LiH reacts with Al₂Cl₆ to give LiAlH₄, a strong reducing agent.`,
      { check: { q: R`At which electrode is hydrogen liberated when molten NaH is electrolysed?`, ans: R`The anode (H⁻ is oxidised).` } }
    ] },

    { h: R`Covalent (molecular) hydrides`, t: [2], blocks: [
      R`p-block elements form <b>covalent hydrides</b>, mostly volatile molecules, classified by the electrons around the central atom:`,
      { points: [R`<b>Electron-deficient:</b> too few electrons for normal covalent bonds: group 13 hydrides like diborane B₂H₆ (with three-centre bonds). They act as Lewis acids.`, R`<b>Electron-precise:</b> the exact number of electrons for normal bonds: group 14 (CH₄, SiH₄); tetrahedral.`, R`<b>Electron-rich:</b> lone pairs on the central atom: groups 15–17 (NH₃ with 1 lone pair, H₂O 2, HF 3). They act as Lewis bases; strong H-bonding raises the boiling points of NH₃, H₂O and HF.`] },
      { check: { q: R`Classify B₂H₆, CH₄ and NH₃ as electron-deficient, -precise or -rich.`, ans: R`Deficient, precise and rich respectively.` } }
    ] },

    { h: R`Interstitial (metallic) hydrides`, t: [2], blocks: [
      R`Many d- and f-block metals absorb hydrogen into the gaps of their lattices, forming <b>interstitial hydrides</b>. They are often <b>non-stoichiometric</b> (LaH₂.₈₇, YbH₂.₅₅, TiH₁.₅–₁.₈) and keep their metallic properties. Metals of groups 7–9 do not form hydrides (the <b>hydride gap</b>), except chromium in group 6.`,
      R`Palladium and platinum absorb very large volumes of hydrogen (Pd up to 900 times its own volume), so they can be used to store, purify and transport hydrogen.`,
      { check: { q: R`Why are interstitial hydrides useful for hydrogen storage?`, ans: R`The metal absorbs a large volume of H₂ and releases it on heating.` } }
    ] },

    { h: R`Water`, t: [3], blocks: [
      R`Water is the most common compound on Earth and in our bodies (about 65% of body mass). Its unusual properties come from <b>hydrogen bonding</b>.`,
      { fig: figWater, cap: R`Water is bent (104.5°) with two lone pairs on oxygen; it is highly polar.` },
      { points: [R`High boiling point, specific heat, surface tension and heat of vaporisation (compared with H₂S).`, R`Excellent solvent for ionic and polar substances (high dielectric constant ≈ 78).`, R`Ice has an open hexagonal hydrogen-bonded structure, so it is less dense than water and floats; water is densest at 4 °C.`] },
      R`<b>Chemical properties:</b> water is <b>amphoteric</b> (acts as an acid with NH₃ and as a base with H₂S); it takes part in redox reactions (2Na + 2H₂O → 2NaOH + H₂ reduces water; 2F₂ + 2H₂O → 4HF + O₂ oxidises water); it <b>hydrolyses</b> many compounds (P₄O₁₀ + 6H₂O → 4H₃PO₄, SiCl₄ + 2H₂O → SiO₂ + 4HCl); and it forms <b>hydrates</b> (coordinated, interstitial or H-bonded water, as in CuSO₄·5H₂O).`,
      { h3: R`Hard and soft water` },
      R`Water with dissolved calcium and magnesium salts is <b>hard</b>; it does not lather well with soap and forms scale in boilers. <b>Temporary hardness</b> (bicarbonates) is removed by boiling (Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂) or by Clark's method (adding slaked lime). <b>Permanent hardness</b> (chlorides and sulphates) is removed by washing soda (Na₂CO₃), Calgon (sodium hexametaphosphate), or ion exchange (zeolites, synthetic resins).`,
      R`Hardness is expressed in <b>ppm of CaCO₃</b>: milligrams of CaCO₃ equivalent per litre (10⁶ mg) of water.`,
      { ex: { q: R`A water sample contains 0.162 g of Ca(HCO₃)₂ and 0.12 g of MgSO₄ per litre. Find its hardness in ppm of CaCO₃.`,
        steps: [R`Ca(HCO₃)₂: 0.162/162 = 0.001 mol; MgSO₄: 0.12/120 = 0.001 mol.`, R`Each mole is equivalent to 1 mol (100 g) of CaCO₃: 0.002 × 100 = 0.2 g = 200 mg per litre.`], ans: R`200 ppm (100 temporary + 100 permanent)` } },
      { check: { q: R`Why does ice float on water?`, ans: R`Its open hydrogen-bonded structure makes it less dense than liquid water.` } }
    ] },

    { h: R`Heavy water`, t: [3], blocks: [
      R`<b>Heavy water</b>, D₂O, is made by prolonged electrolysis of water (H₂O is electrolysed faster, so D₂O is concentrated) or as a by-product in fertiliser plants. It has a higher melting point (276.8 K), boiling point (374.4 K) and density (1.106 g/cm³ at 298 K) than ordinary water.`,
      { points: [R`Used as a <b>moderator</b> in nuclear reactors (slows neutrons without absorbing many).`, R`Used to prepare deuterium compounds (CaC₂ + 2D₂O → C₂D₂ + Ca(OD)₂) and as a tracer to study reaction mechanisms.`, R`It is harmful to living things in large amounts (reactions slow down).`] },
      { check: { q: R`Why is heavy water used in nuclear reactors?`, ans: R`It is an effective moderator: it slows down fast neutrons while absorbing very few of them.` } }
    ] },

    { h: R`Hydrogen peroxide: preparation`, t: [4], blocks: [
      { points: [R`Acidifying barium peroxide and removing the precipitate: BaO₂·8H₂O + H₂SO₄ → BaSO₄ + H₂O₂ + 8H₂O.`, R`Electrolysis of acidified sulphate solutions at high current density gives peroxodisulphate, which is hydrolysed to H₂O₂.`, R`<b>Industrially</b>, by auto-oxidation of 2-ethylanthraquinol: it is oxidised by air to the anthraquinone and H₂O₂, and the quinone is reduced back with H₂/Pd and reused.`] },
      R`H₂O₂ is concentrated by distillation under reduced pressure (it decomposes on heating). Its strength is often given as <b>volume strength</b>: "10 volume" means 1 mL of the solution gives 10 mL of O₂ at STP on decomposition (2H₂O₂ → 2H₂O + O₂). Since 2 mol H₂O₂ give 22.4 L of O₂, molarity = volume strength/11.2.`,
      { ex: { q: R`Find the molarity and the percentage strength (w/v) of 10-volume H₂O₂.`,
        steps: [R`M = 10/11.2 ≈ 0.893 mol/L.`, R`× 34 g/mol = 30.4 g/L = 3.04 g per 100 mL.`], ans: R`≈ 0.89 M; ≈ 3% w/v` } },
      { check: { q: R`What is the molarity of "20 volume" H₂O₂?`, ans: R`20/11.2 ≈ 1.79 M.` } }
    ] },

    { h: R`Hydrogen peroxide: reactions, structure and uses`, t: [4], blocks: [
      R`H₂O₂ (oxygen in the −1 state) can be either reduced (to −2) or oxidised (to 0), so it acts as an <b>oxidising and a reducing agent</b>, in both acidic and basic media:`,
      { table: { head: [R`Behaviour`, R`Acidic medium`, R`Basic medium`], rows: [
        [R`Oxidising`, R`2Fe²⁺ + 2H⁺ + H₂O₂ → 2Fe³⁺ + 2H₂O; PbS + 4H₂O₂ → PbSO₄ + 4H₂O`, R`2Fe²⁺ + H₂O₂ → 2Fe³⁺ + 2OH⁻; Mn²⁺ → Mn⁴⁺`],
        [R`Reducing`, R`2MnO₄⁻ + 6H⁺ + 5H₂O₂ → 2Mn²⁺ + 8H₂O + 5O₂`, R`I₂ + H₂O₂ + 2OH⁻ → 2I⁻ + 2H₂O + O₂`]] } },
      { ex: { q: R`25 mL of an H₂O₂ solution needs 20 mL of 0.02 M KMnO₄ in acid. Find its molarity.`,
        steps: [R`2MnO₄⁻ + 5H₂O₂ + 6H⁺ → 2Mn²⁺ + 5O₂ + 8H₂O`, R`mol MnO₄⁻ = 0.02 × 0.020 = 4 × 10⁻⁴; mol H₂O₂ = (5/2) × 4 × 10⁻⁴ = 10⁻³.`, R`M = 10⁻³ / 0.025 = 0.04 M (volume strength 0.448).`], ans: R`0.04 M` } },
      { tip: R`To decide oxidant or reductant: if H₂O₂ gives O₂, it was oxidised (it acted as a reducing agent); if it gives H₂O or OH⁻, it acted as an oxidising agent.` },
      { fig: figH2O2, cap: R`H₂O₂ is non-planar, with an open-book structure: the two O–H bonds lie in different planes.` },
      R`It decomposes slowly in light (2H₂O₂ → 2H₂O + O₂), so it is stored in wax-lined, coloured plastic bottles in the dark, with a little urea as a stabiliser. <b>Uses:</b> bleaching (hair, textiles, paper pulp), antiseptic (perhydrol), pollution control (treating industrial effluent), making sodium perborate and percarbonate for detergents, and as a rocket propellant. It also restores the colour of old oil paintings, by oxidising black PbS to white PbSO₄.`,
      { check: { q: R`Why is H₂O₂ kept away from light and in plastic bottles?`, ans: R`Light, dust and metal surfaces (including traces in glass) catalyse its decomposition.` } }
    ] },

    { h: R`Hydrogen as a fuel`, t: [5], blocks: [
      R`Burning hydrogen releases more energy per gram than any other fuel (about 142 kJ/g, compared with 50 for natural gas and 47 for petrol), and its only product is water, so it is pollution-free. The <b>hydrogen economy</b> is the idea of storing and transporting energy as hydrogen instead of fossil fuels.`,
      R`<b>Challenges:</b> it must be made cheaply (electrolysis using renewable electricity); it is hard to store (very low density as a gas; liquefying needs about 20 K; metal hydride storage is heavy); and it is flammable and leaks easily. Hydrogen is already used in fuel cells for buses and cars, and India began using hydrogen-blended CNG (5% H₂) in vehicles.`,
      { check: { q: R`Why is hydrogen called a clean fuel?`, ans: R`Its combustion product is only water; no CO₂ or particulates.` } }
    ] }
  ],
  summary: [
    R`H (1s¹) resembles alkali metals (H⁺, +1) and halogens (H⁻, diatomic); placed separately.`,
    R`Isotopes: protium, deuterium, tritium (radioactive); isotope effect on reaction rates.`,
    R`Preparation: Zn + acid/alkali; electrolysis; steam reforming (syngas); water-gas shift.`,
    R`Properties: high H–H bond enthalpy; reacts with halogens, O₂, N₂ (Haber), metals; hydrogenation.`,
    R`Hydrides: ionic (s-block, H⁻), covalent (electron-deficient B₂H₆, -precise CH₄, -rich NH₃/H₂O/HF), interstitial (d/f-block, non-stoichiometric).`,
    R`Water: H-bonded, amphoteric, hydrolysis, hydrates; temporary vs permanent hardness. Heavy water D₂O: moderator.`,
    R`H₂O₂: prepared by anthraquinol auto-oxidation; volume strength = 11.2 × M; oxidant and reductant in acid and base; open-book structure; bleaching, antiseptic.`,
    R`Hydrogen economy: clean, high energy per gram; storage and production are the challenges.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §18.5 Occurrence, Preparation, and Compounds of Hydrogen`, url: 'https://openstax.org/books/chemistry-2e/pages/18-5-occurrence-preparation-and-compounds-of-hydrogen' },
    { t: R`Wikipedia: Hydrogen peroxide`, url: 'https://en.wikipedia.org/wiki/Hydrogen_peroxide' },
    { t: R`Wikipedia: Heavy water`, url: 'https://en.wikipedia.org/wiki/Heavy_water' },
    { t: R`Wikipedia: Hydrogen economy`, url: 'https://en.wikipedia.org/wiki/Hydrogen_economy' }
  ]
});
})();
