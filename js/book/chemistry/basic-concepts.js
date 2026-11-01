// Book chapter: Some Basic Concepts in Chemistry. Full theory with diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function box(x, y, w, h, t, c) { return D.rect(x, y, w, h, { color: c || 'c', fill: 'soft', w: 1.6, r: 6 }) + D.text(x + w / 2, y + h / 2, t, { size: 11, math: false, bold: true }); }
function link(x1, y1, x2, y2) { return D.line(x1, y1, x2, y2, { color: 'm', w: 1.2 }); }

// ---------- figures ----------
var figMatter = D.svg(440, 230, [
  box(170, 10, 100, 30, 'Matter', 'k'), link(220, 40, 120, 70), link(220, 40, 320, 70),
  box(60, 70, 120, 30, 'Pure substances', 'b'), box(260, 70, 120, 30, 'Mixtures', 'o'),
  link(120, 100, 65, 130), link(120, 100, 175, 130), link(320, 100, 265, 130), link(320, 100, 375, 130),
  box(15, 130, 100, 30, 'Elements', 'b'), box(125, 130, 100, 30, 'Compounds', 'b'), box(235, 130, 100, 30, 'Homogeneous', 'o'), box(345, 130, 90, 30, 'Heterogeneous', 'o'),
  D.text(65, 178, 'Fe, O₂, S₈', { size: 11, math: false, color: 'm' }), D.text(175, 178, 'H₂O, NaCl, CO₂', { size: 11, math: false, color: 'm' }), D.text(285, 178, 'air, sugar solution', { size: 11, math: false, color: 'm' }), D.text(390, 178, 'sand + water', { size: 11, math: false, color: 'm' }),
  D.text(120, 205, 'fixed composition', { size: 11, math: false, color: 'b' }), D.text(320, 205, 'variable composition; separable physically', { size: 11, math: false, color: 'o' })
], 'Classification of matter');

function statePanel(kind) {
  var p = [D.rect(15, 15, 150, 120, { color: 'm', w: 1.4, r: 4 })], k, seed = 5;
  function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
  if (kind === 's') for (var i = 0; i < 6; i++) for (var j = 0; j < 5; j++) p.push(D.circle(32 + i * 23, 33 + j * 22, 9, { color: 'b', fill: 'soft', w: 1.2 }));
  else if (kind === 'l') for (k = 0; k < 24; k++) { var x = 30 + (k % 6) * 22 + rnd() * 6, y = 60 + Math.floor(k / 6) * 19 + rnd() * 5; p.push(D.circle(x, y, 9, { color: 'b', fill: 'soft', w: 1.2 })); }
  else for (k = 0; k < 7; k++) { var gx = 30 + rnd() * 120, gy = 30 + rnd() * 90; p.push(D.circle(gx, gy, 9, { color: 'b', fill: 'soft', w: 1.2 }), D.arrow(gx + 9, gy, gx + 26, gy - 10 + rnd() * 20, { color: 'r', w: 1.1, head: 5 })); }
  return D.svg(180, 150, p, kind === 's' ? 'solid' : kind === 'l' ? 'liquid' : 'gas');
}
var figStates = D.row([[statePanel('s'), 'solid: fixed shape and volume'], [statePanel('l'), 'liquid: fixed volume, flows'], [statePanel('g'), 'gas: fills its container']]);

function target(hits, lab) {
  var p = [D.circle(80, 80, 60, { color: 'm', w: 1.2 }), D.circle(80, 80, 40, { color: 'm', w: 1.2 }), D.circle(80, 80, 20, { color: 'm', w: 1.2 }), D.dot(80, 80, { color: 'k', r: 3 })];
  hits.forEach(function (h) { p.push(D.dot(h[0], h[1], { color: 'r', r: 4 })); });
  return D.svg(160, 160, p, lab);
}
var figPrecision = D.row([
  [target([[79, 77], [83, 82], [76, 83], [82, 79]], 'precise and accurate'), 'precise and accurate'],
  [target([[118, 46], [121, 50], [116, 52], [122, 45]], 'precise, not accurate'), 'precise, not accurate'],
  [target([[50, 50], [110, 110], [60, 118], [115, 55]], 'neither'), 'neither precise nor accurate']
]);

var figGL = D.svg(440, 120, [
  box(10, 40, 60, 40, 'H₂', 'b'), box(75, 40, 60, 40, 'H₂', 'b'), D.text(150, 60, '+', { size: 20, bold: true, raw: true }),
  box(165, 40, 60, 40, 'O₂', 'r'), D.text(245, 60, '→', { size: 22, bold: true, raw: true }), box(265, 40, 70, 40, 'H₂O (g)', 'g'), box(340, 40, 70, 40, 'H₂O (g)', 'g'),
  D.text(72, 100, '2 volumes', { size: 11, math: false }), D.text(195, 100, '1 volume', { size: 11, math: false }), D.text(337, 100, '2 volumes', { size: 11, math: false }),
  D.text(220, 18, 'gas volumes (same T and P) are in a simple ratio, 2 : 1 : 2', { size: 11, math: false, color: 'm' })
], "Gay-Lussac's law of gaseous volumes");

var figMole = D.svg(440, 220, [
  box(165, 85, 110, 46, 'MOLES (n)', 'k'),
  box(10, 85, 100, 46, 'mass (g)', 'o'), box(330, 85, 100, 46, 'particles', 'b'), box(165, 10, 110, 40, 'gas volume (L)', 'g'), box(165, 168, 110, 40, 'solution (M, L)', 'p'),
  D.arrow(112, 100, 162, 100, { color: 'o', w: 1.6, head: 7, label: '÷ M', ly: -9, math: false, size: 11 }), D.arrow(162, 118, 112, 118, { color: 'o', w: 1.6, head: 7, label: '× M', ly: 13, math: false, size: 11 }),
  D.arrow(278, 100, 328, 100, { color: 'b', w: 1.6, head: 7, label: '× Nₐ', ly: -9, math: false, size: 11 }), D.arrow(328, 118, 278, 118, { color: 'b', w: 1.6, head: 7, label: '÷ Nₐ', ly: 13, math: false, size: 11 }),
  D.arrow(205, 52, 205, 82, { color: 'g', w: 1.6, head: 7, label: '÷ 22.7 (STP)', lx: -52, ly: 0, math: false, size: 10 }), D.arrow(235, 82, 235, 52, { color: 'g', w: 1.6, head: 7, label: '× 22.7', lx: 34, ly: 0, math: false, size: 10 }),
  D.arrow(205, 134, 205, 165, { color: 'p', w: 1.6, head: 7, label: '÷ V', lx: -22, ly: 0, math: false, size: 11 }), D.arrow(235, 165, 235, 134, { color: 'p', w: 1.6, head: 7, label: '× V', lx: 22, ly: 0, math: false, size: 11 })
], 'The mole map: every conversion goes through moles');

var figLimit = D.svg(440, 140, [
  D.text(80, 15, '10 g H₂ = 5 mol', { size: 12, math: false, color: 'b' }), D.text(220, 15, '64 g O₂ = 2 mol', { size: 12, math: false, color: 'r' }), D.text(360, 15, 'needs 2 : 1', { size: 12, math: false, color: 'm' }),
  (function () { var s = ''; for (var k = 0; k < 5; k++) s += D.rect(20 + k * 24, 30, 20, 24, { color: 'b', fill: 'soft', w: 1.2 }); for (k = 0; k < 2; k++) s += D.rect(190 + k * 30, 30, 26, 24, { color: 'r', fill: 'soft', w: 1.2 }); return s; })(),
  D.text(220, 72, 'O₂ is used up first: it is the limiting reagent', { size: 12, math: false, color: 'r' }),
  (function () { var s = ''; for (var k = 0; k < 4; k++) s += D.rect(40 + k * 34, 92, 30, 24, { color: 'g', fill: 'soft', w: 1.2 }); s += D.rect(220, 92, 20, 24, { color: 'b', fill: 'soft', w: 1.2 }); return s; })(),
  D.text(100, 132, '4 mol H₂O formed', { size: 11, math: false, color: 'g' }), D.text(270, 132, '1 mol H₂ left over (excess)', { size: 11, math: false, color: 'b', anchor: 'start' })
], 'Limiting reagent in 2H2 + O2 -> 2H2O');

// ---------- chapter text ----------
JEE.book('chemistry', 'basic-concepts', {
  intro: [
    R`Chemistry is the study of matter: what it is made of, how its particles combine, and how one substance changes into another. Before we can study reactions, we need a way to count atoms, since they are far too small to see. That way is the <b>mole</b>.`,
    R`This chapter lays the foundation for all of chemistry: the nature and classification of matter, measurements and significant figures, Dalton's atomic theory and the laws of chemical combination, atomic and molecular masses, the mole concept, percentage composition and formulae, and stoichiometry (calculations from balanced equations), including the limiting reagent, concentration units and equivalents.`
  ],
  sections: [
    { h: R`Matter and its nature`, t: [0], blocks: [
      R`Chemistry touches every part of life: medicines and vaccines, fertilisers that feed billions, fuels, plastics, batteries, clean water, and the materials in every device. Anything that has mass and occupies space is <b>matter</b>.`,
      { fig: figStates, cap: R`Particles are packed tightly in solids, close but mobile in liquids, and far apart and fast-moving in gases.` },
      { table: { head: [R`State`, R`Shape`, R`Volume`, R`Particles`], rows: [
        [R`Solid`, R`definite`, R`definite`, R`closely packed, vibrate about fixed positions`], [R`Liquid`, R`takes the container's shape`, R`definite`, R`close, but can move past each other`], [R`Gas`, R`fills the container`, R`fills the container`, R`far apart, move freely and fast`]] } },
      R`The three states can be changed into one another by changing temperature or pressure (melting, boiling, condensation, freezing, sublimation).`,
      { fig: figMatter, cap: R`Matter is either a pure substance (element or compound) or a mixture (homogeneous or heterogeneous).` },
      { points: [R`An <b>element</b> contains only one kind of atom (about 118 are known).`, R`A <b>compound</b> is formed when two or more elements combine chemically in a fixed ratio by mass; its properties differ from those of its elements, and it can be separated only by chemical methods.`, R`A <b>mixture</b> contains two or more substances in any proportion, each keeping its own properties; it can be separated by physical methods (filtration, distillation, crystallisation, chromatography).`] },
      { check: { q: R`Is air a compound or a mixture? Why?`, ans: R`A (homogeneous) mixture: its composition varies and its components (N₂, O₂, Ar, CO₂) keep their own properties.` } }
    ] },

    { h: R`Properties of matter and their measurement`, t: [0], blocks: [
      R`<b>Physical properties</b> (colour, odour, melting point, density) can be measured without changing the substance. <b>Chemical properties</b> (acidity, combustibility, reactivity) appear only when it reacts.`,
      R`Measurements use the <b>SI system</b>, with seven base units: metre (m), kilogram (kg), second (s), kelvin (K), ampere (A), mole (mol) and candela (cd). In chemistry we often also use litres (1 L = 1 dm³ = 1000 cm³ = 10⁻³ m³) and degrees Celsius.`,
      { points: [R`<b>Mass</b> (kg) is the amount of matter; weight is the force of gravity on it.`, R`<b>Volume</b> (m³, L, mL).`, R`<b>Density</b> = mass/volume (kg m⁻³ or g cm⁻³).`, R`<b>Temperature:</b> K = °C + 273.15; °F = (9/5)°C + 32.`] },
      { ex: { q: R`Convert 25 °C to kelvin and to degrees Fahrenheit.`,
        steps: [R`K = 25 + 273.15; °F = (9/5)(25) + 32.`], ans: R`298.15 K; 77 °F` } },
      { check: { q: R`Which SI base unit is unique to chemistry?`, ans: R`The mole, for the amount of substance.` } }
    ] },

    { h: R`Uncertainty in measurement`, t: [0], blocks: [
      R`Every measurement has some uncertainty. Very large and very small numbers are written in <b>scientific notation</b>, \(N\times10^n\) with 1 ≤ N < 10: e.g. 0.000016 = 1.6 × 10⁻⁵.`,
      R`<b>Significant figures</b> are the meaningful digits in a measurement: all certain digits plus the first uncertain one. Rules:`,
      { points: [R`All non-zero digits are significant (285 has 3).`, R`Zeros between non-zero digits are significant (2.005 has 4).`, R`Leading zeros are not significant (0.0032 has 2).`, R`Trailing zeros after a decimal point are significant (0.200 has 3); in a whole number without a decimal point they are ambiguous (100), so use scientific notation (1.00 × 10²).`, R`Exact numbers (counted objects, defined conversions) have infinitely many significant figures.`] },
      R`<b>In calculations:</b> after multiplication or division, keep as many significant figures as the least precise measurement; after addition or subtraction, keep as many decimal places as the least precise one. When rounding, a final 5 is rounded to make the preceding digit even (for example, 1.35 → 1.4, 1.25 → 1.2).`,
      { fig: figPrecision, cap: R`Precision is how close repeated measurements are to each other; accuracy is how close they are to the true value.` },
      { ex: { q: R`Give the answers with the correct number of significant figures: (a) 2.5 × 1.25 (b) 12.11 + 18.0 + 1.012.`,
        steps: [R`(a) 3.125, but 2.5 has only 2 significant figures: 3.1.`, R`(b) 31.122, but 18.0 has only 1 decimal place: 31.1.`], ans: R`(a) 3.1 (b) 31.1` } },
      { check: { q: R`How many significant figures are there in 0.00500?`, ans: R`Three (5, 0, 0).` } }
    ] },

    { h: R`Dalton's atomic theory`, t: [1], blocks: [
      R`In 1808, John Dalton proposed that matter is made of atoms. His postulates:`,
      { points: [R`Matter consists of indivisible tiny particles called atoms.`, R`All atoms of a given element are identical (same mass and properties); atoms of different elements differ.`, R`Compounds form when atoms of different elements combine in a fixed, simple whole-number ratio.`, R`Chemical reactions only rearrange atoms; atoms are neither created nor destroyed.`] },
      R`The theory explained the laws of chemical combination. Some postulates were later modified: atoms are divisible (electrons, protons, neutrons), and isotopes of the same element have different masses.`,
      R`<b>Definitions:</b> an <b>atom</b> is the smallest particle of an element that takes part in a chemical reaction; a <b>molecule</b> is the smallest particle of a substance that can exist independently and keep its properties (O₂, H₂O, the noble gases are monatomic). Ionic compounds like NaCl exist as <b>formula units</b> in a lattice, not molecules.`,
      { check: { q: R`Which postulate of Dalton's theory is contradicted by the existence of isotopes?`, ans: R`That all atoms of an element have the same mass.` } }
    ] },

    { h: R`Laws of chemical combination: mass relationships`, t: [2], blocks: [
      { points: [
        R`<b>Law of conservation of mass</b> (Lavoisier, 1789): matter is neither created nor destroyed in a chemical reaction; the total mass of reactants equals the total mass of products.`,
        R`<b>Law of definite proportions</b> (Proust, 1799): a given compound always contains the same elements in the same proportion by mass, whatever its source. Pure water is always 11.2% hydrogen and 88.8% oxygen by mass.`,
        R`<b>Law of multiple proportions</b> (Dalton, 1803): when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in a simple whole-number ratio.`
      ] },
      { ex: { q: R`Carbon forms CO and CO₂. Show that they obey the law of multiple proportions.`,
        steps: [R`In CO, 12 g C combines with 16 g O; in CO₂, 12 g C combines with 32 g O.`, R`Ratio of oxygen masses for fixed carbon = 16 : 32.`], ans: R`1 : 2, a simple whole-number ratio` } },
      { ex: { q: R`When 10 g of CaCO₃ is heated completely, 5.6 g of CaO is left. What mass of CO₂ is given off?`,
        steps: [R`Conservation of mass: 10 = 5.6 + mass of CO₂.`], ans: R`4.4 g` } },
      { check: { q: R`Does the law of definite proportions hold for compounds containing different isotopes?`, ans: R`Not exactly: water made with deuterium (D₂O) has a different mass percentage of hydrogen. This is one limitation.` } }
    ] },

    { h: R`Gay-Lussac's law and Avogadro's law`, t: [2], blocks: [
      R`<b>Gay-Lussac's law of gaseous volumes</b> (1808): when gases react, the volumes of the reacting gases and of any gaseous products bear a simple whole-number ratio to each other, at the same temperature and pressure.`,
      { fig: figGL, cap: R`2 volumes of hydrogen combine with 1 volume of oxygen to give 2 volumes of steam.` },
      R`<b>Avogadro's law</b> (1811): equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules. This explained Gay-Lussac's ratios and showed that elements like hydrogen and oxygen exist as diatomic molecules (H₂, O₂): 2 H₂ + O₂ → 2 H₂O fits the 2 : 1 : 2 volume ratio only if oxygen molecules split in two.`,
      { ex: { q: R`What volume of oxygen is needed to burn 10 L of methane completely, and what volume of CO₂ forms (same conditions)? CH₄ + 2O₂ → CO₂ + 2H₂O.`,
        steps: [R`Volume ratio CH₄ : O₂ : CO₂ = 1 : 2 : 1.`], ans: R`20 L of O₂; 10 L of CO₂` } },
      { check: { q: R`Under the same conditions, do 1 L of H₂ and 1 L of CO₂ contain the same number of molecules? The same mass?`, ans: R`The same number of molecules (Avogadro's law), but different masses (CO₂ molecules are 22 times heavier).` } }
    ] },

    { h: R`Atomic mass and average atomic mass`, t: [3], blocks: [
      R`Atoms are far too light to weigh in grams usefully, so their masses are compared with a standard. Since 1961, the standard is carbon-12: one <b>atomic mass unit</b> (unified mass, u) is exactly 1/12 of the mass of one ¹²C atom: \[1\text{ u} = 1.66056\times10^{-27}\text{ kg}\] On this scale, ¹H is 1.0078 u and ¹⁶O is 15.995 u.`,
      R`Most elements occur as a mixture of <b>isotopes</b>, so their atomic mass is a weighted <b>average atomic mass</b>: \[\bar A = \frac{\sum(\%\text{ abundance}\times\text{isotopic mass})}{100}\]`,
      { ex: { q: R`Chlorine is 75.77% ³⁵Cl (34.969 u) and 24.23% ³⁷Cl (36.966 u). Find its average atomic mass.`,
        steps: [R`\(\bar A = 0.7577\times34.969 + 0.2423\times36.966\).`], ans: R`≈ 35.45 u` } },
      { check: { q: R`Why is the atomic mass of chlorine not a whole number?`, ans: R`It is an average over its isotopes, weighted by their natural abundances.` } }
    ] },

    { h: R`Molecular mass and formula mass`, t: [3], blocks: [
      R`The <b>molecular mass</b> is the sum of the atomic masses of all atoms in a molecule: H₂O = 2(1.008) + 16.00 = 18.02 u; C₆H₁₂O₆ = 6(12.01) + 12(1.008) + 6(16.00) = 180.16 u.`,
      R`Ionic compounds (NaCl, CaCO₃) have no discrete molecules, so we use the <b>formula mass</b> of one formula unit: NaCl = 23.0 + 35.5 = 58.5 u.`,
      { ex: { q: R`Find the formula mass of CuSO₄·5H₂O (Cu 63.5, S 32, O 16, H 1).`,
        steps: [R`CuSO₄ = 63.5 + 32 + 64 = 159.5; 5H₂O = 90.`], ans: R`249.5 u` } },
      { check: { q: R`What is the molecular mass of CO₂ (C 12, O 16)?`, ans: R`44 u.` } }
    ] },

    { h: R`The mole and Avogadro's number`, t: [4], blocks: [
      R`Chemists count particles in <b>moles</b>, just as grocers count eggs in dozens. One <b>mole</b> is the amount of substance containing exactly \(N_A = 6.02214076\times10^{23}\) elementary entities (atoms, molecules, ions, electrons). \(N_A\) is the <b>Avogadro constant</b>; the number was chosen so that 1 mol of ¹²C has a mass of 12 g.`,
      R`\[n = \frac{N}{N_A}\qquad(\text{number of moles} = \frac{\text{number of particles}}{6.022\times10^{23}})\]`,
      { ex: { q: R`How many molecules are there in 9 g of water? How many atoms in total?`,
        steps: [R`n = 9/18 = 0.5 mol, so N = 0.5 × 6.022 × 10²³ ≈ 3.01 × 10²³ molecules.`, R`Each molecule has 3 atoms.`], ans: R`≈ 3.01 × 10²³ molecules; ≈ 9.03 × 10²³ atoms` } },
      { check: { q: R`How many electrons are in 1 mol of electrons? What is their total charge?`, ans: R`6.022 × 10²³; about 96 500 C (one faraday).` } }
    ] },

    { h: R`Molar mass and molar volume`, t: [4], blocks: [
      R`The <b>molar mass</b> M is the mass of one mole of a substance in grams; it is numerically equal to the atomic, molecular or formula mass in u: M(H₂O) = 18.02 g/mol. So \[n = \frac{m}{M}\]`,
      R`One mole of any ideal gas occupies the same volume at the same temperature and pressure: the <b>molar volume</b>. At STP (273.15 K and 1 bar) it is 22.7 L; using the older STP of 1 atm it is 22.4 L, the value most JEE problems still use. At 298 K and 1 bar it is 24.8 L.`,
      { fig: figMole, cap: R`The mole map: to convert between mass, particles, gas volume and solution volume, always go through moles.` },
      { ex: { q: R`What volume of CO₂ (at STP, 22.4 L/mol) is produced by heating 10 g of CaCO₃? CaCO₃ → CaO + CO₂.`,
        steps: [R`n(CaCO₃) = 10/100 = 0.1 mol; it gives 0.1 mol of CO₂.`, R`V = 0.1 × 22.4.`], ans: R`2.24 L` } },
      { tip: R`Always convert everything into moles first; then use the mole ratio from the balanced equation; then convert back into whatever is asked. This one habit solves almost every stoichiometry problem.` },
      { check: { q: R`What is the mass of 0.25 mol of NaOH (M = 40 g/mol)?`, ans: R`10 g.` } }
    ] },

    { h: R`Percentage composition`, t: [5], blocks: [
      R`The <b>mass percentage</b> of an element in a compound is \[\%\text{ of element} = \frac{\text{mass of the element in 1 mol}}{\text{molar mass of the compound}}\times100\] It is used to check purity and to find formulae.`,
      { ex: { q: R`Find the mass percentages of C, H and O in glucose, C₆H₁₂O₆ (M = 180).`,
        steps: [R`C: 72/180 × 100; H: 12/180 × 100; O: 96/180 × 100.`], ans: R`C 40%, H 6.67%, O 53.33%` } },
      { check: { q: R`What percentage of CO₂ is carbon?`, ans: R`12/44 × 100 ≈ 27.3%.` } }
    ] },

    { h: R`Empirical and molecular formulae`, t: [6], blocks: [
      R`The <b>empirical formula</b> gives the simplest whole-number ratio of atoms in a compound; the <b>molecular formula</b> gives the actual number of each atom in a molecule. Molecular formula = (empirical formula)ₙ, where \(n = \dfrac{\text{molar mass}}{\text{empirical formula mass}}\). Glucose C₆H₁₂O₆ has empirical formula CH₂O (n = 6).`,
      { h3: R`Finding the empirical formula from percentage composition` },
      { points: [R`Take 100 g of compound, so each percentage becomes a mass in grams.`, R`Divide each mass by the atomic mass to get moles.`, R`Divide all mole numbers by the smallest.`, R`If necessary, multiply by a small integer (2, 3, …) to get whole numbers.`] },
      { ex: { q: R`A compound contains 40.0% C, 6.67% H and 53.3% O. Its molar mass is 180 g/mol. Find its empirical and molecular formulae.`,
        steps: [R`Moles: C 40/12 = 3.33, H 6.67/1 = 6.67, O 53.3/16 = 3.33.`, R`Divide by 3.33: C 1, H 2, O 1, so the empirical formula is CH₂O (mass 30).`, R`n = 180/30 = 6.`], ans: R`Empirical CH₂O; molecular C₆H₁₂O₆ (glucose)` } },
      { mistake: R`Rounding too early. A ratio like 1 : 1.33 means 3 : 4, and 1 : 1.5 means 2 : 3; rounding 1.33 to 1 gives the wrong formula.` },
      { check: { q: R`Benzene is C₆H₆. What is its empirical formula?`, ans: R`CH.` } }
    ] },

    { h: R`Balancing chemical equations`, t: [7], blocks: [
      R`A <b>balanced chemical equation</b> has the same number of each kind of atom on both sides (conservation of mass), and the same total charge for ionic equations. The coefficients give the mole ratios of reactants and products.`,
      { points: [R`Write the correct formulae of all reactants and products (never change a formula to balance).`, R`Balance elements that appear in only one substance on each side first; leave H and O (often appearing in many substances) for last.`, R`Use the smallest whole-number coefficients. State symbols (s), (l), (g), (aq) may be added.`] },
      { ex: { q: R`Balance: C₃H₈ + O₂ → CO₂ + H₂O.`,
        steps: [R`Carbon: 3CO₂. Hydrogen: 8 H, so 4H₂O.`, R`Oxygen on the right: 6 + 4 = 10 atoms, so 5O₂.`], ans: R`C₃H₈ + 5O₂ → 3CO₂ + 4H₂O` } },
      { check: { q: R`Balance Fe + O₂ → Fe₂O₃.`, ans: R`4Fe + 3O₂ → 2Fe₂O₃.` } }
    ] },

    { h: R`Stoichiometric calculations`, t: [7], blocks: [
      R`<b>Stoichiometry</b> is calculating the amounts of reactants and products from the balanced equation. All three common types follow the mole map:`,
      { points: [R`<b>Mass–mass:</b> mass of A → moles of A → (mole ratio) → moles of B → mass of B.`, R`<b>Mass–volume:</b> mass → moles → mole ratio → moles of gas → volume (× 22.4 L at STP).`, R`<b>Volume–volume</b> (gases at the same T and P): volumes are directly in the mole ratio (Gay-Lussac).`] },
      { ex: { q: R`How many grams of water form when 8 g of methane burns completely? CH₄ + 2O₂ → CO₂ + 2H₂O.`,
        steps: [R`n(CH₄) = 8/16 = 0.5 mol.`, R`n(H₂O) = 2 × 0.5 = 1 mol, mass = 18 g.`], ans: R`18 g` } },
      { ex: { q: R`What volume of hydrogen (STP) is released when 6.5 g of zinc reacts with excess HCl? Zn + 2HCl → ZnCl₂ + H₂ (Zn = 65).`,
        steps: [R`n(Zn) = 0.1 mol, so 0.1 mol of H₂.`, R`V = 0.1 × 22.4.`], ans: R`2.24 L` } },
      { check: { q: R`In 2SO₂ + O₂ → 2SO₃, what volume of O₂ reacts with 10 L of SO₂ (same conditions)?`, ans: R`5 L.` } }
    ] },

    { h: R`Limiting reagent and percentage yield`, t: [8], blocks: [
      R`Reactants are often not mixed in the exact mole ratio. The one that is used up first, and so limits how much product can form, is the <b>limiting reagent</b>; the others are <b>in excess</b>.`,
      { fig: figLimit, cap: R`5 mol of H₂ and 2 mol of O₂: the 2 mol of O₂ can react with only 4 mol of H₂, so O₂ limits the product to 4 mol of water.` },
      R`<b>To find it:</b> divide the moles of each reactant by its coefficient in the balanced equation; the smallest quotient identifies the limiting reagent. Then calculate the product from the limiting reagent only.`,
      { ex: { q: R`10 g of H₂ reacts with 64 g of O₂. Find the limiting reagent, the mass of water formed and the reactant left over.`,
        steps: [R`Moles: H₂ = 5, O₂ = 2. Divide by coefficients (2 and 1): H₂ 2.5, O₂ 2, so O₂ is limiting.`, R`2 mol O₂ gives 4 mol H₂O = 72 g, using 4 mol H₂; 1 mol (2 g) of H₂ is left.`], ans: R`O₂ limiting; 72 g of water; 2 g of H₂ in excess` } },
      R`<b>Percentage yield</b> = (actual yield ÷ theoretical yield) × 100. Real reactions rarely give 100%, because of side reactions, incomplete reaction or losses during purification.`,
      { ex: { q: R`In the reaction above, only 63 g of water is actually collected. Find the percentage yield.`,
        steps: [R`63/72 × 100.`], ans: R`87.5%` } },
      { check: { q: R`Is the reactant present in the smaller mass always the limiting reagent?`, ans: R`No: compare moles divided by coefficients, not masses.` } }
    ] },

    { h: R`Calculations involving redox, neutralisation and displacement`, t: [7], blocks: [
      R`The same mole method handles all reaction types. In titrations, the solution of known concentration reacts with the unknown, and at the end point the moles react exactly in the ratio of the equation: \[\frac{M_1V_1}{a} = \frac{M_2V_2}{b}\quad\text{for } aA + bB\to\dots\]`,
      { ex: { q: R`25 mL of NaOH solution is neutralised by 20 mL of 0.1 M H₂SO₄. Find the molarity of the NaOH. (2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O)`,
        steps: [R`n(H₂SO₄) = 0.1 × 0.020 = 0.002 mol, so n(NaOH) = 0.004 mol.`, R`M = 0.004/0.025.`], ans: R`0.16 M` } },
      { adv: R`<b>Redox titration:</b> in acid, \(\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+\to\text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}\), so 1 mol of permanganate oxidises 5 mol of Fe²⁺. If 20 mL of 0.02 M KMnO₄ oxidises 25 mL of Fe²⁺ solution, n(Fe²⁺) = 5 × 0.02 × 0.020 = 0.002 mol and its molarity is 0.08 M. <b>Displacement:</b> Zn + CuSO₄ → ZnSO₄ + Cu: 65 g of Zn deposits 63.5 g of copper.` },
      { check: { q: R`How many moles of Fe²⁺ does 1 mol of dichromate (Cr₂O₇²⁻) oxidise in acid?`, ans: R`6 (each Cr goes from +6 to +3, gaining 3 electrons; 2 Cr gain 6).` } }
    ] },

    { h: R`Concentration of solutions`, t: [4], blocks: [
      R`A solution's concentration can be expressed in several ways:`,
      { table: { head: [R`Term`, R`Definition`, R`Depends on temperature?`], rows: [
        [R`Mass percent (w/w)`, R`\(\dfrac{\text{mass of solute}}{\text{mass of solution}}\times100\)`, R`no`],
        [R`Mole fraction x`, R`\(x_A = \dfrac{n_A}{n_A + n_B + \dots}\) (sum of all = 1)`, R`no`],
        [R`Molarity M`, R`moles of solute per litre of <b>solution</b> (mol L⁻¹)`, R`yes (volume changes)`],
        [R`Molality m`, R`moles of solute per kg of <b>solvent</b> (mol kg⁻¹)`, R`no`],
        [R`ppm`, R`parts of solute per million parts of solution (by mass)`, R`no`]] } },
      { ex: { q: R`5.85 g of NaCl is dissolved to make 500 mL of solution. Find its molarity. Separately, 9 g of glucose is dissolved in 100 g of water; find the molality.`,
        steps: [R`n(NaCl) = 5.85/58.5 = 0.1 mol; M = 0.1/0.5.`, R`n(glucose) = 9/180 = 0.05 mol; m = 0.05/0.1.`], ans: R`0.2 M; 0.5 mol/kg` } },
      { tip: R`Dilution: moles of solute stay the same, so \(M_1V_1 = M_2V_2\). Mixing two solutions of the same solute: \(M = \dfrac{M_1V_1 + M_2V_2}{V_1 + V_2}\).` },
      { check: { q: R`Why is molality preferred over molarity in experiments where temperature changes?`, ans: R`Molality uses mass, which does not change with temperature; molarity uses volume, which does.` } }
    ] },

    { h: R`Equivalent mass and normality`, t: [4], blocks: [
      { adv: R`The <b>equivalent mass</b> of a substance is the mass that reacts with (or supplies) 1 mol of H⁺, OH⁻ or electrons: \(E = \dfrac{M}{n\text{-factor}}\). The n-factor is the basicity of an acid (H₂SO₄: 2), the acidity of a base (Ca(OH)₂: 2), the total charge of the cation or anion of a salt, or the number of electrons gained or lost per formula unit in a redox reaction (KMnO₄ in acid: 5). <b>Normality</b> N = number of gram-equivalents per litre = M × n-factor. The <b>law of equivalence</b>: substances always react in equal numbers of equivalents, so \(N_1V_1 = N_2V_2\) in any titration.` },
      { ex: { q: R`Find the equivalent mass of H₂SO₄ (M = 98) and the normality of a 0.1 M H₂SO₄ solution.`,
        steps: [R`n-factor = 2: E = 98/2 = 49.`, R`N = 0.1 × 2.`], ans: R`49 g/equiv; 0.2 N` } },
      { check: { q: R`What is the n-factor of KMnO₄ in neutral solution, where it is reduced to MnO₂?`, ans: R`3 (Mn goes from +7 to +4).` } }
    ] }
  ],
  summary: [
    R`Matter: pure substances (elements, compounds) and mixtures (homogeneous, heterogeneous); solid, liquid and gas.`,
    R`SI units; scientific notation; significant figures (× ÷ keep fewest s.f.; + − keep fewest decimal places); precision vs accuracy.`,
    R`Dalton's atomic theory; atom, molecule, formula unit.`,
    R`Laws: conservation of mass, definite proportions, multiple proportions, Gay-Lussac's gaseous volumes, Avogadro's law.`,
    R`1 u = 1/12 mass of ¹²C = 1.66 × 10⁻²⁷ kg; average atomic mass is abundance-weighted; molecular and formula mass.`,
    R`Mole: N_A = 6.022 × 10²³; n = m/M = N/N_A = V/22.4 (STP gas) = MV (solution).`,
    R`% composition; empirical formula from mass %; molecular formula = (empirical)ₙ, n = M/empirical mass.`,
    R`Balanced equations give mole ratios; limiting reagent = smallest (moles ÷ coefficient); % yield = actual/theoretical × 100.`,
    R`Titrations: M₁V₁/a = M₂V₂/b; normality N = M × n-factor; N₁V₁ = N₂V₂.`,
    R`Concentration: mass %, mole fraction, molarity (T-dependent), molality, ppm; dilution M₁V₁ = M₂V₂.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §1.5 Measurement Uncertainty, Accuracy, and Precision`, url: 'https://openstax.org/books/chemistry-2e/pages/1-5-measurement-uncertainty-accuracy-and-precision' },
    { t: R`OpenStax Chemistry 2e, §2.1 Early Ideas in Atomic Theory`, url: 'https://openstax.org/books/chemistry-2e/pages/2-1-early-ideas-in-atomic-theory' },
    { t: R`OpenStax Chemistry 2e, §3.1 Formula Mass and the Mole Concept`, url: 'https://openstax.org/books/chemistry-2e/pages/3-1-formula-mass-and-the-mole-concept' },
    { t: R`OpenStax Chemistry 2e, §3.2 Determining Empirical and Molecular Formulas`, url: 'https://openstax.org/books/chemistry-2e/pages/3-2-determining-empirical-and-molecular-formulas' },
    { t: R`OpenStax Chemistry 2e, §3.3 Molarity`, url: 'https://openstax.org/books/chemistry-2e/pages/3-3-molarity' },
    { t: R`OpenStax Chemistry 2e, §4.4 Reaction Yields`, url: 'https://openstax.org/books/chemistry-2e/pages/4-4-reaction-yields' },
    { t: R`OpenStax Chemistry 2e, §4.5 Quantitative Chemical Analysis`, url: 'https://openstax.org/books/chemistry-2e/pages/4-5-quantitative-chemical-analysis' }
  ]
});
})();
