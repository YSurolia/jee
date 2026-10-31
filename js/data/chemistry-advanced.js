// Chemistry chapters that are in the JEE Advanced 2026 syllabus but not in JEE Main 2027.
// They use the same format as js/data/chemistry.js. Each example gives `t`, the index of its syllabus topic,
// which is turned into the exact topic string below. These chapters have no lesson file yet (lesson: false).
(function () {
  var R = String.raw, list = JEE.chemistry.chapters;
  function add(where, o) {
    o.adv = true;
    o.lesson = false;
    o.examples.forEach(function (e) { e.topic = o.syllabus[e.t]; delete e.t; });
    var i = list.findIndex(function (c) { return c.id === (where.after || where.before); });
    list.splice(where.after ? i + 1 : i, 0, o);
  }

  add({ after: 'chemical-bonding' }, {
    id: 'states-of-matter', title: 'States of Matter: Gases and Liquids', cls: 11,
    syllabus: [R`Gas laws & absolute scale of temperature`, R`Ideal gas equation`, R`Dalton's law of partial pressures`, R`Graham's law of diffusion`,
      R`Kinetic theory of gases & molecular speeds`, R`Real gases: deviation from ideality & van der Waals equation`, R`Intermolecular forces`, R`Liquids: vapour pressure, surface tension & viscosity`],
    concepts: [
      { h: R`Ideal gases`, body: R`An ideal gas obeys \(PV = nRT\) at all conditions; its molecules have no volume and do not attract each other. Real gases behave nearly ideally at <b>low pressure and high temperature</b>.` },
      { h: R`Three molecular speeds`, body: R`Most probable \(u_{mp} = \sqrt{2RT/M}\), average \(u_{av} = \sqrt{8RT/\pi M}\), root-mean-square \(u_{rms} = \sqrt{3RT/M}\). Their ratio is \(1 : 1.128 : 1.224\). All grow as \(\sqrt{T}\) and fall as \(1/\sqrt{M}\).` },
      { h: R`Real gases`, body: R`The compressibility factor \(Z = PV/nRT\) is 1 for an ideal gas. \(Z < 1\): attractions dominate (gas is easier to compress). \(Z > 1\): molecular size dominates. The van der Waals constant \(a\) measures attraction and \(b\) the excluded volume.` }
    ],
    formulas: [
      R`\(\dfrac{P_1V_1}{T_1} = \dfrac{P_2V_2}{T_2}\); \(PV = nRT\) (\(R = 0.0821\) L atm K⁻¹ mol⁻¹ = 8.314 J K⁻¹ mol⁻¹)`,
      R`Dalton: \(P = p_1 + p_2 + \dots\), \(p_i = x_iP\)`,
      R`Graham: \(\dfrac{r_1}{r_2} = \sqrt{\dfrac{M_2}{M_1}}\)`,
      R`\(u_{rms} = \sqrt{\dfrac{3RT}{M}}\), \(u_{av} = \sqrt{\dfrac{8RT}{\pi M}}\), \(u_{mp} = \sqrt{\dfrac{2RT}{M}}\)`,
      R`van der Waals: \(\left(P + \dfrac{an^2}{V^2}\right)(V - nb) = nRT\); \(Z = \dfrac{PV}{nRT}\)`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`A gas occupies 2 L at 1 atm and 27 °C. What volume will it occupy at 2 atm and 327 °C?`,
        steps: [R`Use kelvin: \(T_1 = 300\) K, \(T_2 = 600\) K.`, R`\(V_2 = \dfrac{P_1V_1T_2}{T_1P_2} = \dfrac{1\times2\times600}{300\times2}\).`], ans: R`2 L` },
      { t: 1, level: 'Main', q: R`Find the pressure exerted by 16 g of O₂ in a 5 L vessel at 27 °C.`,
        steps: [R`\(n = 16/32 = 0.5\) mol.`, R`\(P = \dfrac{nRT}{V} = \dfrac{0.5\times0.0821\times300}{5}\).`], ans: R`≈ 2.46 atm` },
      { t: 2, level: 'Main', q: R`A vessel contains 2 g of H₂ and 16 g of O₂ at a total pressure of 3 atm. Find the partial pressure of each gas.`,
        steps: [R`Moles: H₂ = 1, O₂ = 0.5; total 1.5.`, R`\(p_{H_2} = \frac{1}{1.5}\times3\), \(p_{O_2} = \frac{0.5}{1.5}\times3\).`], ans: R`H₂: 2 atm; O₂: 1 atm` },
      { t: 3, level: 'Main', q: R`Under the same conditions, 100 mL of O₂ diffuses through a hole in 40 s. How long will 100 mL of H₂ take?`,
        steps: [R`\(\dfrac{r_{H_2}}{r_{O_2}} = \sqrt{\dfrac{32}{2}} = 4\): hydrogen is 4 times faster.`, R`Time is inversely proportional to rate: 40/4.`], ans: R`10 s` },
      { t: 4, level: 'Advanced', q: R`Find the rms speed of N₂ molecules at 300 K. At what temperature would O₂ molecules have the same rms speed?`,
        steps: [R`\(u_{rms} = \sqrt{\dfrac{3\times8.314\times300}{0.028}} = \sqrt{2.67\times10^5}\) m/s.`, R`Equal speeds need equal \(T/M\): \(\dfrac{T}{32} = \dfrac{300}{28}\).`], ans: R`≈ 517 m/s; about 343 K` },
      { t: 5, level: 'Advanced', q: R`A gas has compressibility factor Z = 0.8 at 273 K and 1 atm. Find its molar volume. Which forces dominate?`,
        steps: [R`\(V_m = \dfrac{ZRT}{P} = \dfrac{0.8\times0.0821\times273}{1}\).`, R`Z < 1, so the gas is more compressible than an ideal gas.`], ans: R`≈ 17.9 L (less than 22.4 L); attractive forces dominate` },
      { t: 6, level: 'Main', q: R`Arrange CH₄, HCl and H₂O in increasing order of boiling point and name the main intermolecular force in each.`,
        steps: [R`CH₄ is non-polar: only weak London (dispersion) forces.`, R`HCl is polar: dipole–dipole forces. H₂O forms strong hydrogen bonds.`], ans: R`CH₄ < HCl < H₂O` },
      { t: 7, level: 'Main', q: R`How do the vapour pressure, surface tension and viscosity of a liquid change when it is heated? Explain briefly.`,
        steps: [R`More molecules have enough energy to escape, so vapour pressure rises.`, R`Faster molecules overcome intermolecular attractions more easily, so surface tension and viscosity fall.`], ans: R`Vapour pressure increases; surface tension and viscosity decrease` }
    ],
    practice: [
      { q: R`At what temperature is the rms speed of O₂ equal to that of H₂ at 27 °C?`, ans: R`\(T/32 = 300/2\), so T = 4800 K` },
      { q: R`Which has the larger van der Waals constant a: NH₃ or N₂? Why?`, ans: R`NH₃: its molecules attract each other much more strongly (hydrogen bonding), so it is also easier to liquefy.` }
    ]
  });

  add({ after: 'periodicity' }, {
    id: 'hydrogen', title: 'Hydrogen', cls: 11,
    syllabus: [R`Position in the periodic table, occurrence & isotopes`, R`Preparation, properties & uses of dihydrogen`, R`Hydrides: ionic, covalent & interstitial`,
      R`Water & heavy water`, R`Hydrogen peroxide: preparation, reactions, structure & uses`, R`Hydrogen as a fuel`],
    concepts: [
      { h: R`A unique element`, body: R`Hydrogen (1s¹) resembles the alkali metals (one valence electron, forms H⁺) and the halogens (one electron short of a noble gas, forms H⁻ and a diatomic molecule), so it is placed separately. Its isotopes are protium, deuterium and radioactive tritium.` },
      { h: R`Hydrides`, body: R`<b>Ionic</b> (saline) hydrides such as NaH and CaH₂ contain H⁻. <b>Covalent</b> hydrides are electron-deficient (B₂H₆), electron-precise (CH₄) or electron-rich (NH₃, H₂O, HF). <b>Interstitial</b> (metallic) hydrides of d- and f-block metals are often non-stoichiometric.` },
      { h: R`Hydrogen peroxide`, body: R`H₂O₂ has a non-planar "open book" structure. It can act as an <b>oxidising</b> and a <b>reducing</b> agent. Its strength is often given as "volume strength": "x volume" H₂O₂ gives x litres of O₂ at STP per litre of solution.` }
    ],
    formulas: [
      R`Zn + H₂SO₄ → ZnSO₄ + H₂ (laboratory)`,
      R`Water-gas shift: CO + H₂O → CO₂ + H₂`,
      R`2H₂O₂ → 2H₂O + O₂`,
      R`Volume strength = 11.2 × molarity of H₂O₂`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`Give two ways in which hydrogen resembles the alkali metals and two ways in which it resembles the halogens.`,
        steps: [R`Like alkali metals: one valence electron (1s¹); forms a unipositive ion H⁺ (as H₃O⁺); forms oxides and halides.`, R`Like halogens: needs one electron to reach a noble-gas configuration; forms H⁻ in metal hydrides; exists as a diatomic molecule.`], ans: R`So hydrogen is usually placed on its own at the top of the table.` },
      { t: 1, level: 'Main', q: R`How is dihydrogen made in the laboratory, and how is it made on a large scale from coke?`,
        steps: [R`Laboratory: granulated zinc with dilute acid, Zn + 2H⁺ → Zn²⁺ + H₂.`, R`Industry: steam over red-hot coke gives water gas, C + H₂O → CO + H₂; then CO + H₂O → CO₂ + H₂ (shift reaction), and CO₂ is removed.`], ans: R`Zinc + dilute acid; water gas followed by the water-gas shift reaction` },
      { t: 2, level: 'Advanced', q: R`Classify these hydrides: NaH, B₂H₆, CH₄, NH₃, PdHₓ.`,
        steps: [R`NaH contains H⁻: ionic.`, R`B₂H₆ lacks electrons for normal bonds: electron-deficient covalent. CH₄: electron-precise. NH₃ has a lone pair: electron-rich.`, R`PdHₓ: hydrogen sits in the metal lattice: interstitial.`], ans: R`Ionic; electron-deficient; electron-precise; electron-rich; interstitial` },
      { t: 3, level: 'Main', q: R`What is heavy water? Why is it used in nuclear reactors, and what happens when sodium reacts with it?`,
        steps: [R`Heavy water is D₂O (deuterium oxide). Its boiling point is 101.4 °C.`, R`It slows down (moderates) neutrons without absorbing many of them.`, R`2Na + 2D₂O → 2NaOD + D₂.`], ans: R`D₂O; moderator; gives sodium deuteroxide and deuterium gas` },
      { t: 4, level: 'Advanced', q: R`Find the molarity of a "20 volume" solution of H₂O₂.`,
        steps: [R`2H₂O₂ → 2H₂O + O₂: 2 mol of H₂O₂ give 22.4 L of O₂ at STP, so 1 mol gives 11.2 L.`, R`20 volume means 1 L gives 20 L of O₂: moles of H₂O₂ = 20/11.2.`], ans: R`≈ 1.79 M` },
      { t: 5, level: 'Main', q: R`The enthalpy of combustion of H₂ is −286 kJ/mol. How much heat does 1 g of hydrogen give, and why is it called a fuel of the future?`,
        steps: [R`1 g of H₂ = 0.5 mol, so heat = 0.5 × 286.`, R`That is about three times more per gram than petrol, and the only product is water.`], ans: R`143 kJ per gram; it is clean and has a very high energy per gram` }
    ],
    practice: [
      { q: R`Is H₂O₂ acting as an oxidising or a reducing agent in H₂O₂ + 2KI → I₂ + 2KOH?`, ans: R`Oxidising agent (it oxidises I⁻ to I₂).` },
      { q: R`Name the three isotopes of hydrogen. Which is radioactive?`, ans: R`Protium, deuterium and tritium; tritium is radioactive.` }
    ]
  });

  add({ after: 'hydrogen' }, {
    id: 's-block', title: 's-Block Elements', cls: 11,
    syllabus: [R`General characteristics & periodic trends of groups 1 & 2`, R`Reactions with air, water, hydrogen, halogens & acids`, R`Reducing nature & solutions in liquid ammonia`,
      R`Oxides, hydroxides, halides & salts of oxoacids`, R`Anomalous behaviour of lithium & beryllium`, R`Compounds of sodium: Na₂CO₃, NaCl, NaOH, NaHCO₃`, R`Compounds of calcium: CaO, Ca(OH)₂, CaCO₃, CaSO₄`],
    concepts: [
      { h: R`Alkali and alkaline earth metals`, body: R`Group 1 (ns¹) and group 2 (ns²) metals have large atoms and low ionisation enthalpies, so they are very reactive, strongly reducing and form ionic compounds. Many give flame colours: Li crimson, Na yellow, K violet, Ca brick red, Sr crimson, Ba apple green.` },
      { h: R`Trends in compounds`, body: R`Down group 2, the thermal stability of carbonates and the solubility of hydroxides increase, while the solubility of sulphates decreases. Alkali metals form normal oxides (Li₂O), peroxides (Na₂O₂) and superoxides (KO₂) in excess air.` },
      { h: R`Lithium and beryllium are different`, body: R`Their ions are very small with a high charge density, so their compounds are more covalent. Li resembles Mg and Be resembles Al: the <b>diagonal relationship</b>.` }
    ],
    formulas: [
      R`Na + (x + y)NH₃ → [Na(NH₃)ₓ]⁺ + [e(NH₃)ᵧ]⁻ (blue solution)`,
      R`Solvay: NaCl + NH₃ + CO₂ + H₂O → NaHCO₃ + NH₄Cl; 2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O`,
      R`2CaSO₄·2H₂O → 2CaSO₄·½H₂O (plaster of Paris) + 3H₂O at 393 K`,
      R`CaCO₃ → CaO + CO₂; CaO + H₂O → Ca(OH)₂`
    ],
    examples: [
      { t: 0, level: 'Advanced', q: R`Lithium has the highest ionisation enthalpy in group 1, yet it is the strongest reducing agent in water. Why?`,
        steps: [R`Reducing power in water depends on the overall change M(s) → M⁺(aq), not on ionisation enthalpy alone.`, R`The tiny Li⁺ ion has a very large hydration enthalpy, which more than makes up for its higher ionisation enthalpy, so E°(Li⁺/Li) is the most negative.`], ans: R`Because of the very high hydration enthalpy of Li⁺` },
      { t: 1, level: 'Main', q: R`What are the main products when Li, Na and K burn in excess air?`,
        steps: [R`Li forms the normal oxide, Na the peroxide and K the superoxide; larger cations stabilise larger anions.`], ans: R`Li₂O, Na₂O₂, KO₂` },
      { t: 2, level: 'Advanced', q: R`Why is a dilute solution of sodium in liquid ammonia blue and conducting? What changes in a concentrated solution?`,
        steps: [R`Sodium gives up its electron, which becomes trapped among ammonia molecules (an ammoniated electron); this absorbs red light, so the solution looks blue, and it carries current.`, R`At high concentration the electrons pair up: the solution becomes bronze-coloured and diamagnetic.`], ans: R`Ammoniated electrons; concentrated solutions are bronze and diamagnetic` },
      { t: 3, level: 'Main', q: R`Arrange BeCO₃, MgCO₃, CaCO₃ and BaCO₃ in increasing order of thermal stability.`,
        steps: [R`Larger cations polarise the carbonate ion less, so the carbonate is harder to decompose.`], ans: R`BeCO₃ < MgCO₃ < CaCO₃ < BaCO₃` },
      { t: 4, level: 'Main', q: R`Give two similarities between lithium and magnesium.`,
        steps: [R`Both form nitrides when heated in N₂ (Li₃N, Mg₃N₂).`, R`Their carbonates decompose on heating to the oxide and CO₂; their chlorides are deliquescent and soluble in ethanol.`], ans: R`Diagonal relationship between Li and Mg` },
      { t: 5, level: 'Advanced', q: R`Why can potassium carbonate not be made by the Solvay (ammonia–soda) process?`,
        steps: [R`The process works because NaHCO₃ is only slightly soluble and precipitates out.`, R`KHCO₃ is much more soluble, so it does not precipitate.`], ans: R`KHCO₃ is too soluble to separate` },
      { t: 6, level: 'Main', q: R`What is plaster of Paris, and why does it set when mixed with water?`,
        steps: [R`It is calcium sulphate hemihydrate, CaSO₄·½H₂O, made by heating gypsum at about 393 K.`, R`With water it re-forms interlocking crystals of gypsum, CaSO₄·2H₂O, which harden.`], ans: R`CaSO₄·½H₂O; it rehydrates to gypsum` }
    ],
    practice: [
      { q: R`Which alkali metal ion has the largest hydrated radius?`, ans: R`Li⁺ (smallest ion, most strongly hydrated)` },
      { q: R`What are quicklime and slaked lime?`, ans: R`Quicklime is CaO; slaked lime is Ca(OH)₂.` }
    ]
  });

  add({ after: 'hydrocarbons' }, {
    id: 'environmental-chemistry', title: 'Environmental Chemistry', cls: 11,
    syllabus: [R`Atmospheric pollution: gaseous pollutants, particulates & smog`, R`Stratospheric pollution: depletion of the ozone layer`, R`Acid rain & the greenhouse effect`,
      R`Water pollution & its measurement (BOD)`, R`Soil pollution & industrial waste`, R`Strategies to control pollution & green chemistry`],
    concepts: [
      { h: R`Two kinds of smog`, body: R`<b>Classical smog</b> (smoke + fog + SO₂) forms in cool, humid air and is reducing. <b>Photochemical smog</b> forms in warm, sunny air from NOₓ and hydrocarbons; it is oxidising and contains ozone, NO₂ and PAN, which irritate the eyes.` },
      { h: R`Ozone hole`, body: R`Ultraviolet light breaks CFCs, releasing chlorine atoms that destroy ozone in a chain reaction. Over Antarctica, polar stratospheric clouds speed this up in spring.` },
      { h: R`Green chemistry`, body: R`Design reactions to prevent waste: high atom economy, safer solvents (water, supercritical CO₂), renewable feedstocks, catalysts instead of excess reagents, and energy-efficient conditions.` }
    ],
    formulas: [
      R`CF₂Cl₂ → (UV) Cl· + ·CF₂Cl;  Cl· + O₃ → ClO· + O₂;  ClO· + O → Cl· + O₂`,
      R`Acid rain: 2SO₂ + O₂ + 2H₂O → 2H₂SO₄; 4NO₂ + O₂ + 2H₂O → 4HNO₃`,
      R`Normal rain has pH ≈ 5.6 (dissolved CO₂); acid rain has pH < 5.6`,
      R`Atom economy = \(\dfrac{\text{mass of desired product}}{\text{total mass of reactants}}\times100\%\)`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`Compare classical smog and photochemical smog.`,
        steps: [R`Classical: smoke, fog and SO₂; cool humid climate; reducing in nature.`, R`Photochemical: NOₓ and hydrocarbons react in sunlight giving O₃, NO₂, PAN, formaldehyde and acrolein; warm sunny climate; oxidising.`], ans: R`Classical smog is reducing; photochemical smog is oxidising` },
      { t: 1, level: 'Main', q: R`Show with equations how one chlorine atom can destroy many ozone molecules.`,
        steps: [R`Cl· + O₃ → ClO· + O₂.`, R`ClO· + O → Cl· + O₂: the chlorine atom is regenerated and attacks again (a chain reaction).`], ans: R`Chlorine acts as a catalyst for ozone destruction` },
      { t: 2, level: 'Main', q: R`Why is normal rainwater slightly acidic (pH ≈ 5.6), and what makes rain "acid rain"?`,
        steps: [R`CO₂ dissolves to form weak carbonic acid: H₂O + CO₂ ⇌ H₂CO₃.`, R`Oxides of sulphur and nitrogen form strong H₂SO₄ and HNO₃, pushing the pH below 5.6.`], ans: R`Carbonic acid; SO₂ and NO₂ give strong acids` },
      { t: 3, level: 'Main', q: R`A water sample has a BOD of 20 ppm. Is it clean? What does BOD measure?`,
        steps: [R`BOD (biochemical oxygen demand) is the oxygen bacteria need to break down the organic matter in a litre of water.`, R`Clean water has BOD below about 5 ppm; highly polluted water has BOD of 17 ppm or more.`], ans: R`No, it is highly polluted` },
      { t: 4, level: 'Main', q: R`Why is DDT harmful even though it is used in small amounts?`,
        steps: [R`DDT is not biodegradable and dissolves in fat, so it stays in living tissue.`, R`Its concentration rises at each step of the food chain (biomagnification), harming birds and fish.`], ans: R`Persistence and biomagnification` },
      { t: 5, level: 'Advanced', q: R`Find the atom economy for making ethene by the reaction C₂H₅Br + NaOH → C₂H₄ + NaBr + H₂O.`,
        steps: [R`Mass of reactants: C₂H₅Br (109) + NaOH (40) = 149.`, R`Desired product C₂H₄ = 28. Atom economy = 28/149 × 100.`], ans: R`≈ 18.8% (most atoms end up as waste)` }
    ],
    practice: [
      { q: R`Name four greenhouse gases.`, ans: R`CO₂, CH₄, N₂O, CFCs (also water vapour and ozone)` },
      { q: R`Which component of photochemical smog is a strong eye irritant?`, ans: R`PAN (peroxyacetyl nitrate), along with ozone and acrolein` }
    ]
  });

  add({ before: 'solutions' }, {
    id: 'solid-state', title: 'Solid State', cls: 12,
    syllabus: [R`Classification of solids: crystalline & amorphous`, R`Crystal lattices, unit cells & the seven crystal systems`, R`Close packing: hcp, ccp, bcc & packing efficiency`,
      R`Number of atoms per unit cell & density`, R`Voids, nearest neighbours & radius ratio`, R`Point defects`],
    concepts: [
      { h: R`Cubic unit cells`, body: R`Atoms per cell Z: simple cubic 1, body-centred (bcc) 2, face-centred (fcc/ccp) 4. Edge length and radius: sc \(a = 2r\), bcc \(\sqrt3a = 4r\), fcc \(\sqrt2a = 4r\). Packing efficiency: 52.4%, 68% and 74%.` },
      { h: R`Voids`, body: R`In a close-packed arrangement of N spheres there are N octahedral voids and 2N tetrahedral voids. Which void an ion fits depends on the radius ratio \(r_+/r_-\): 0.225–0.414 tetrahedral (CN 4), 0.414–0.732 octahedral (CN 6), 0.732–1 cubic (CN 8).` },
      { h: R`Point defects`, body: R`<b>Schottky</b>: equal numbers of cations and anions missing (NaCl); density falls. <b>Frenkel</b>: an ion (usually the smaller cation) moves into an interstitial site (AgCl, ZnS); density unchanged. AgBr shows both.` }
    ],
    formulas: [
      R`Density \(\rho = \dfrac{Z\,M}{a^3N_A}\)`,
      R`bcc: \(r = \dfrac{\sqrt3}{4}a\); fcc: \(r = \dfrac{a}{2\sqrt2}\)`,
      R`Packing efficiency = \(\dfrac{Z\cdot\frac43\pi r^3}{a^3}\times100\%\)`,
      R`Seven crystal systems, 14 Bravais lattices; cubic: \(a = b = c\), \(\alpha = \beta = \gamma = 90^\circ\)`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`Classify NaCl, diamond, ice, copper and glass by the type of solid.`,
        steps: [R`Crystalline: NaCl (ionic), diamond (covalent network), ice (molecular, hydrogen-bonded), copper (metallic).`, R`Glass has no long-range order: amorphous.`], ans: R`Ionic, covalent, molecular, metallic, amorphous` },
      { t: 1, level: 'Main', q: R`How do the cell parameters of a cubic and a tetragonal crystal differ?`,
        steps: [R`Cubic: a = b = c and all angles 90°.`, R`Tetragonal: a = b ≠ c and all angles 90°.`], ans: R`Tetragonal has one edge of different length` },
      { t: 2, level: 'Advanced', q: R`Show that the packing efficiency of a bcc lattice is about 68%.`,
        steps: [R`Z = 2 and \(a = \dfrac{4r}{\sqrt3}\), so \(a^3 = \dfrac{64r^3}{3\sqrt3}\).`, R`Efficiency = \(\dfrac{2\cdot\frac43\pi r^3}{64r^3/(3\sqrt3)} = \dfrac{\sqrt3\pi}{8}\).`], ans: R`\(\sqrt3\pi/8 \approx 0.68\), i.e. 68%` },
      { t: 3, level: 'Advanced', q: R`Copper forms an fcc lattice with edge length 361 pm. Find its density (M = 63.5 g/mol).`,
        steps: [R`Z = 4; \(a^3 = (361\times10^{-10}\ \text{cm})^3 = 4.70\times10^{-23}\) cm³.`, R`\(\rho = \dfrac{4\times63.5}{6.022\times10^{23}\times4.70\times10^{-23}}\).`], ans: R`≈ 8.97 g/cm³` },
      { t: 4, level: 'Advanced', q: R`Atoms of Y form a ccp lattice and atoms of X occupy 2/3 of the tetrahedral voids. Find the formula.`,
        steps: [R`For N atoms of Y there are 2N tetrahedral voids; X fills \(\frac23\times2N = \frac43N\).`, R`X : Y = 4/3 : 1 = 4 : 3.`], ans: R`X₄Y₃` },
      { t: 5, level: 'Main', q: R`Which defect lowers the density of a crystal, Schottky or Frenkel? Give an example of each.`,
        steps: [R`Schottky removes ions from the crystal, so the mass per volume falls (NaCl, KCl).`, R`Frenkel only moves ions within the crystal (AgCl, ZnS), so the density is unchanged.`], ans: R`Schottky lowers the density` }
    ],
    practice: [
      { q: R`How many atoms does an fcc unit cell contain?`, ans: R`4 (8 × ⅛ + 6 × ½)` },
      { q: R`What is the coordination number of each ion in NaCl?`, ans: R`6 (octahedral)` }
    ]
  });

  add({ after: 'chemical-kinetics' }, {
    id: 'surface-chemistry', title: 'Surface Chemistry', cls: 12,
    syllabus: [R`Adsorption: physisorption & chemisorption`, R`Factors affecting adsorption & the Freundlich isotherm`, R`Colloids: types & classification`,
      R`Preparation & purification of colloids`, R`Properties of colloids: Tyndall effect, Brownian motion, charge & coagulation`, R`Emulsions, surfactants & micelles`],
    concepts: [
      { h: R`Two kinds of adsorption`, body: R`<b>Physisorption</b>: weak van der Waals forces, low enthalpy (20–40 kJ/mol), multilayer, reversible, falls as temperature rises. <b>Chemisorption</b>: chemical bonds, high enthalpy (80–240 kJ/mol), single layer, specific, first rises then falls with temperature (it needs activation).` },
      { h: R`Colloids`, body: R`Particles 1–1000 nm across are colloidal. <b>Lyophilic</b> sols (starch, gum) are stable and reversible; <b>lyophobic</b> sols (metals, As₂S₃) need stabilising charges and coagulate easily.` },
      { h: R`Coagulation`, body: R`Hardy–Schulze rule: the greater the charge on the ion of opposite sign, the stronger its coagulating power. For a negative sol: Al³⁺ > Ba²⁺ > Na⁺.` }
    ],
    formulas: [
      R`Freundlich: \(\dfrac xm = kP^{1/n}\) \((n \ge 1)\); \(\log\dfrac xm = \log k + \dfrac1n\log P\)`,
      R`Adsorption is spontaneous with \(\Delta S < 0\), so \(\Delta H < 0\) (exothermic)`,
      R`Hardy–Schulze (positive sol): [Fe(CN)₆]⁴⁻ > PO₄³⁻ > SO₄²⁻ > Cl⁻`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`Give three differences between physisorption and chemisorption.`,
        steps: [R`Forces: van der Waals vs chemical bonds; enthalpy: 20–40 vs 80–240 kJ/mol.`, R`Layers: multilayer vs monolayer; physisorption is reversible and non-specific, chemisorption is specific and often irreversible.`], ans: R`See the steps` },
      { t: 1, level: 'Advanced', q: R`A plot of log(x/m) against log P is a straight line with slope 0.5 and intercept 0.301. Find k and n, and x/m at P = 4 atm.`,
        steps: [R`Slope = 1/n = 0.5, so n = 2; intercept = log k = 0.301, so k = 2.`, R`\(\dfrac xm = 2\times4^{0.5}\).`], ans: R`k = 2, n = 2, x/m = 4` },
      { t: 2, level: 'Main', q: R`Name the dispersed phase and medium in milk, fog, smoke and shaving cream.`,
        steps: [R`Milk: liquid in liquid (emulsion). Fog: liquid in gas (aerosol).`, R`Smoke: solid in gas (aerosol). Shaving cream: gas in liquid (foam).`], ans: R`Emulsion, aerosol, aerosol, foam` },
      { t: 3, level: 'Main', q: R`How is a ferric hydroxide sol made, and how can it be purified?`,
        steps: [R`Add FeCl₃ to boiling water: FeCl₃ + 3H₂O → Fe(OH)₃ (sol) + 3HCl (hydrolysis).`, R`Remove the dissolved ions by dialysis through a parchment or cellophane membrane.`], ans: R`Hydrolysis; dialysis` },
      { t: 4, level: 'Main', q: R`Which is the most effective in coagulating a negatively charged As₂S₃ sol: NaCl, BaCl₂ or AlCl₃?`,
        steps: [R`The cation neutralises the negative sol; by the Hardy–Schulze rule, the higher its charge, the better.`], ans: R`AlCl₃ (Al³⁺)` },
      { t: 5, level: 'Main', q: R`What is a micelle, and how does soap remove grease?`,
        steps: [R`Above the critical micelle concentration, soap ions cluster with their hydrocarbon tails inward and ionic heads outward.`, R`Grease dissolves in the oily centre and is washed away with the water.`], ans: R`Micelles trap grease inside` }
    ],
    practice: [
      { q: R`What is the Tyndall effect?`, ans: R`Scattering of light by colloidal particles, making the path of a light beam visible.` },
      { q: R`Why is adsorption exothermic?`, ans: R`It happens spontaneously (ΔG < 0) while the gas loses freedom (ΔS < 0), so ΔH must be negative.` }
    ]
  });

  add({ before: 'p-block' }, {
    id: 'metallurgy', title: 'Isolation of Metals (Metallurgy)', cls: 12,
    syllabus: [R`Occurrence of metals: minerals & ores`, R`Concentration of ores`, R`Calcination & roasting`, R`Thermodynamic principles & Ellingham diagrams (iron, copper, zinc)`,
      R`Electrochemical principles: extraction of aluminium`, R`Cyanide process for silver & gold`, R`Refining of metals`],
    concepts: [
      { h: R`From ore to metal`, body: R`Ore → concentration (remove gangue) → calcination or roasting (convert to oxide) → reduction to crude metal → refining. Froth flotation suits sulphide ores; leaching suits bauxite and gold.` },
      { h: R`Ellingham diagrams`, body: R`They plot \(\Delta_fG^\circ\) of oxides against temperature. A metal can reduce the oxide of any metal whose line lies <b>above</b> its own. The C → CO line slopes downward, so carbon becomes a better reducing agent at high temperature.` },
      { h: R`Electrolytic extraction`, body: R`Very reactive metals such as Al are extracted by electrolysis. In the Hall–Héroult process, alumina is dissolved in molten cryolite, which lowers the melting point and increases conductivity.` }
    ],
    formulas: [
      R`\(\Delta G^\circ = \Delta H^\circ - T\Delta S^\circ\); \(\Delta G^\circ = -nFE^\circ\)`,
      R`Blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂`,
      R`Copper: 2Cu₂O + Cu₂S → 6Cu + SO₂ (self-reduction)`,
      R`4Au + 8CN⁻ + 2H₂O + O₂ → 4[Au(CN)₂]⁻ + 4OH⁻; 2[Au(CN)₂]⁻ + Zn → [Zn(CN)₄]²⁻ + 2Au`,
      R`Mond process: Ni + 4CO → Ni(CO)₄ (330–350 K), decomposed at 450–470 K`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`Name the chief ores of iron, aluminium, copper and zinc.`,
        steps: [R`Iron: haematite Fe₂O₃, magnetite Fe₃O₄. Aluminium: bauxite Al₂O₃·xH₂O.`, R`Copper: chalcopyrite CuFeS₂. Zinc: zinc blende ZnS, calamine ZnCO₃.`], ans: R`See the steps` },
      { t: 1, level: 'Main', q: R`Which concentration method suits zinc blende, and which suits bauxite?`,
        steps: [R`Zinc blende is a sulphide ore: froth flotation (pine oil as frother, xanthates as collectors).`, R`Bauxite is leached with NaOH (Bayer's process), which dissolves Al₂O₃ as aluminate.`], ans: R`Froth flotation; leaching` },
      { t: 2, level: 'Main', q: R`Distinguish calcination from roasting with one example each.`,
        steps: [R`Calcination: heating without air to remove CO₂ or water: ZnCO₃ → ZnO + CO₂.`, R`Roasting: heating in air, usually for sulphide ores: 2ZnS + 3O₂ → 2ZnO + 2SO₂.`], ans: R`Calcination: no air; roasting: in air` },
      { t: 3, level: 'Advanced', q: R`Use the Ellingham diagram to explain why aluminium can reduce Cr₂O₃, and why carbon reduces ZnO only at high temperature.`,
        steps: [R`The Al₂O₃ line lies below the Cr₂O₃ line, so 2Al + Cr₂O₃ → Al₂O₃ + 2Cr has negative ΔG° (thermite process).`, R`The C → CO line slopes down; it crosses below the ZnO line only above about 1270 K.`], ans: R`Lower line reduces the higher one` },
      { t: 4, level: 'Advanced', q: R`How much charge is needed to deposit 27 g of aluminium from Al³⁺? What is the role of cryolite?`,
        steps: [R`27 g = 1 mol of Al; Al³⁺ + 3e⁻ → Al needs 3 mol of electrons.`, R`Charge = 3 × 96500 C.`], ans: R`≈ 2.9 × 10⁵ C (3 F); cryolite lowers the melting point and raises conductivity` },
      { t: 5, level: 'Advanced', q: R`Write the reactions of the cyanide process for gold. What is the role of zinc?`,
        steps: [R`Leaching: 4Au + 8CN⁻ + 2H₂O + O₂ → 4[Au(CN)₂]⁻ + 4OH⁻.`, R`Zinc is more reactive and displaces gold: 2[Au(CN)₂]⁻ + Zn → [Zn(CN)₄]²⁻ + 2Au.`], ans: R`Zinc acts as the reducing agent` },
      { t: 6, level: 'Main', q: R`Name a suitable refining method for Ni, Zr, Si and Cu.`,
        steps: [R`Ni: Mond process (via volatile Ni(CO)₄). Zr: van Arkel method (via ZrI₄).`, R`Si (very high purity): zone refining. Cu: electrolytic refining.`], ans: R`Mond, van Arkel, zone refining, electrolysis` }
    ],
    practice: [
      { q: R`What is the role of silica in the extraction of copper?`, ans: R`It is a flux: FeO + SiO₂ → FeSiO₃ (slag), removing iron.` },
      { q: R`Why is froth flotation used for sulphide ores?`, ans: R`Sulphide particles are wetted by oil and carried up in the froth, while the gangue is wetted by water and sinks.` }
    ]
  });

  add({ after: 'biomolecules' }, {
    id: 'polymers', title: 'Polymers', cls: 12,
    syllabus: [R`Classification of polymers`, R`Addition polymerisation`, R`Condensation polymerisation`, R`Homopolymers & copolymers`,
      R`Natural rubber, vulcanisation & cellulose`, R`Important polymers: polythene, Teflon, PVC, nylon, Bakelite`, R`Biodegradable polymers & applications`],
    concepts: [
      { h: R`Two ways to build a polymer`, body: R`<b>Addition</b> (chain-growth) polymers form from unsaturated monomers with no by-product (polythene, PVC, Teflon). <b>Condensation</b> (step-growth) polymers form from monomers with two functional groups, losing a small molecule such as water (nylon-6,6, polyesters, Bakelite).` },
      { h: R`By intermolecular forces`, body: R`Elastomers (rubber) have weak forces; fibres (nylon) have strong forces such as hydrogen bonds; thermoplastics (PVC, polythene) soften on heating; thermosetting polymers (Bakelite) set permanently with cross-links.` },
      { h: R`Rubber`, body: R`Natural rubber is cis-1,4-polyisoprene. Heating it with sulphur (vulcanisation) forms cross-links, making it harder, more elastic and less sticky.` }
    ],
    formulas: [
      R`n CH₂=CH₂ → –(CH₂–CH₂)ₙ– (polythene); n CF₂=CF₂ → Teflon; n CH₂=CHCl → PVC`,
      R`Nylon-6,6: hexamethylenediamine + adipic acid, losing H₂O`,
      R`Nylon-6 from caprolactam; Bakelite from phenol + formaldehyde`,
      R`Degree of polymerisation = \(\dfrac{M_{polymer}}{M_{repeating\ unit}}\)`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`Classify by intermolecular forces: Bakelite, PVC, nylon-6,6, natural rubber.`,
        steps: [R`Bakelite: thermosetting (cross-linked). PVC: thermoplastic.`, R`Nylon-6,6: fibre (hydrogen bonds). Natural rubber: elastomer.`], ans: R`See the steps` },
      { t: 1, level: 'Advanced', q: R`Write the steps of free-radical polymerisation of ethene started by benzoyl peroxide.`,
        steps: [R`Initiation: the peroxide splits into phenyl radicals, which add to CH₂=CH₂.`, R`Propagation: the new radical adds to more ethene molecules, growing the chain.`, R`Termination: two radical chains combine.`], ans: R`Initiation, propagation, termination` },
      { t: 2, level: 'Main', q: R`Name the monomers of nylon-6,6 and the small molecule lost.`,
        steps: [R`Hexamethylenediamine H₂N(CH₂)₆NH₂ and adipic acid HOOC(CH₂)₄COOH join by amide bonds.`], ans: R`Water is eliminated` },
      { t: 3, level: 'Main', q: R`Is Buna-S a homopolymer or a copolymer? Name its monomers.`,
        steps: [R`It is made from two different monomers.`], ans: R`Copolymer of 1,3-butadiene and styrene` },
      { t: 4, level: 'Main', q: R`What is the monomer of natural rubber, and why is rubber vulcanised?`,
        steps: [R`Monomer: isoprene (2-methyl-1,3-butadiene).`, R`Sulphur cross-links make rubber harder, more elastic, less sticky and usable over a wider temperature range.`], ans: R`Isoprene; to improve its properties` },
      { t: 5, level: 'Advanced', q: R`A sample of polythene has molar mass 28 000 g/mol. Find its degree of polymerisation.`,
        steps: [R`Repeating unit –CH₂–CH₂– has mass 28 g/mol.`, R`n = 28 000/28.`], ans: R`1000` },
      { t: 6, level: 'Main', q: R`Name two biodegradable polymers.`,
        steps: [R`PHBV (poly-β-hydroxybutyrate-co-β-hydroxyvalerate) and nylon-2-nylon-6 are broken down by microorganisms.`], ans: R`PHBV and nylon-2-nylon-6` }
    ],
    practice: [
      { q: R`What is the monomer of Teflon?`, ans: R`Tetrafluoroethene, CF₂=CF₂` },
      { q: R`What is the monomer of PVC?`, ans: R`Vinyl chloride, CH₂=CHCl` }
    ]
  });

  add({ after: 'polymers' }, {
    id: 'everyday-chemistry', title: 'Chemistry in Everyday Life', cls: 12,
    syllabus: [R`Drugs & drug–target interaction`, R`Antacids & antihistamines`, R`Tranquilizers & analgesics`, R`Antimicrobials: antibiotics, antiseptics & disinfectants`,
      R`Antifertility drugs`, R`Artificial sweeteners`, R`Soaps, detergents & cleansing action`],
    concepts: [
      { h: R`How drugs work`, body: R`Drugs bind to targets such as <b>enzymes</b> (often as inhibitors that block the active site) or <b>receptors</b> (as agonists that mimic, or antagonists that block, the body's messengers).` },
      { h: R`Medicines by use`, body: R`Antacids neutralise excess stomach acid; antihistamines block histamine; tranquilizers treat stress and anxiety; analgesics relieve pain; antimicrobials act against microbes; antifertility drugs prevent pregnancy.` },
      { h: R`Soaps and detergents`, body: R`Soaps are sodium salts of fatty acids and form scum with hard water. Synthetic detergents (sulphonates, cationic and non-ionic detergents) also work in hard water. Both clean by forming micelles around grease.` }
    ],
    formulas: [
      R`Antacid: NaHCO₃ + HCl → NaCl + H₂O + CO₂; Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O`,
      R`Saponification: fat + 3NaOH → 3RCOONa (soap) + glycerol`,
      R`Sweetness compared with cane sugar: aspartame ≈ 100, saccharin ≈ 550, sucralose ≈ 600, alitame ≈ 2000`
    ],
    examples: [
      { t: 0, level: 'Main', q: R`What is the difference between a competitive enzyme inhibitor and a receptor antagonist?`,
        steps: [R`A competitive inhibitor competes with the substrate for the active site of an enzyme.`, R`An antagonist binds to a receptor and blocks the natural messenger without producing a response.`], ans: R`One blocks an enzyme, the other blocks a receptor` },
      { t: 1, level: 'Advanced', q: R`Why are ranitidine and cimetidine better antacids than sodium bicarbonate?`,
        steps: [R`Bicarbonate only neutralises acid already present; too much makes the stomach alkaline and triggers more acid.`, R`Ranitidine and cimetidine block the histamine receptors that tell the stomach to release acid.`], ans: R`They stop excess acid from being made` },
      { t: 2, level: 'Main', q: R`Give one example each of a tranquilizer, a non-narcotic analgesic and a narcotic analgesic.`,
        steps: [R`Tranquilizer: equanil (meprobamate) or a barbiturate.`, R`Non-narcotic analgesic: aspirin or paracetamol. Narcotic analgesic: morphine.`], ans: R`See the steps` },
      { t: 3, level: 'Main', q: R`How can phenol be both an antiseptic and a disinfectant?`,
        steps: [R`A 0.2% solution of phenol is mild enough for living tissue (antiseptic).`, R`A 1% solution kills microbes on non-living surfaces (disinfectant).`], ans: R`It depends on concentration` },
      { t: 4, level: 'Main', q: R`Name two compounds used in antifertility pills.`,
        steps: [R`They are synthetic hormones (a progestogen and an oestrogen).`], ans: R`Norethindrone and ethynylestradiol (novestrol)` },
      { t: 5, level: 'Main', q: R`Why is aspartame used only in cold foods and drinks?`,
        steps: [R`Aspartame breaks down at cooking temperatures.`], ans: R`It is unstable when heated (sucralose is stable)` },
      { t: 6, level: 'Advanced', q: R`Why does soap not work well in hard water, while detergents do?`,
        steps: [R`Ca²⁺ and Mg²⁺ ions form insoluble calcium and magnesium salts of the fatty acids (scum), using up the soap.`, R`The calcium salts of detergent sulphonates are soluble, so detergents keep working.`], ans: R`Soap forms scum with Ca²⁺ and Mg²⁺` }
    ],
    practice: [
      { q: R`Which artificial sweetener is stable at cooking temperature?`, ans: R`Sucralose` },
      { q: R`Name a broad-spectrum antibiotic.`, ans: R`Chloramphenicol (also ampicillin, amoxycillin)` }
    ]
  });
})();
