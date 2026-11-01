// Book chapter: Classification of Elements and Periodicity in Properties. Full theory with diagrams.
(function () {
var R = String.raw, D = JEE.D;

// ---------- figures ----------
var figTable = (function () {
  var p = [], cw = 23, ch = 21, x0 = 14, y0 = 26;
  function cell(col, row, c, t) { var x = x0 + (col - 1) * cw, y = y0 + (row - 1) * ch; p.push(D.rect(x, y, cw - 2, ch - 2, { color: c, fill: 'soft', w: 1 })); if (t) p.push(D.text(x + (cw - 2) / 2, y + (ch - 2) / 2 + 0.5, t, { size: 9, math: false })); }
  var sym = { '1,1': 'H', '18,1': 'He', '1,2': 'Li', '2,2': 'Be', '13,2': 'B', '14,2': 'C', '15,2': 'N', '16,2': 'O', '17,2': 'F', '18,2': 'Ne', '1,3': 'Na', '2,3': 'Mg', '13,3': 'Al', '14,3': 'Si', '15,3': 'P', '16,3': 'S', '17,3': 'Cl', '18,3': 'Ar', '1,4': 'K', '2,4': 'Ca', '3,4': 'Sc', '26,0': '', '8,4': 'Fe', '11,4': 'Cu', '12,4': 'Zn', '17,4': 'Br', '17,5': 'I', '1,7': 'Fr', '11,6': 'Au' };
  for (var row = 1; row <= 7; row++) for (var col = 1; col <= 18; col++) {
    if (row === 1 && col > 1 && col < 18) continue;
    if (row <= 3 && col > 2 && col < 13) continue;
    var c = col <= 2 ? 'r' : col >= 13 ? 'b' : 'o';
    if (row === 1 && col === 18) c = 'b';
    cell(col, row, c, sym[col + ',' + row] || '');
  }
  for (var k = 0; k < 14; k++) { cell(4 + k, 9.0, 'g', ''); cell(4 + k, 10.0, 'g', ''); }
  p.push(D.text(x0 + 3 * cw - 6, y0 + 8.45 * ch, 'Ln', { size: 9, math: false, anchor: 'end' }), D.text(x0 + 3 * cw - 6, y0 + 9.45 * ch, 'An', { size: 9, math: false, anchor: 'end' }));
  [1, 2, 13, 18].forEach(function (g) { p.push(D.text(x0 + (g - 1) * cw + (cw - 2) / 2, y0 - 8, String(g), { size: 9, math: false, color: 'm' })); });
  p.push(D.text(x0 + 6.5 * cw, y0 + 2.1 * ch, 'd-block (groups 3–12)', { size: 10, math: false, color: 'o' }), D.text(x0 + 1 * cw, y0 + 7.45 * ch, 's-block', { size: 10, math: false, color: 'r' }), D.text(x0 + 15 * cw, y0 + 7.45 * ch, 'p-block', { size: 10, math: false, color: 'b' }), D.text(x0 + 10.5 * cw, y0 + 10.4 * ch, 'f-block (lanthanoids, actinoids)', { size: 10, math: false, color: 'g' }));
  return D.svg(x0 * 2 + 18 * cw, y0 + 10.9 * ch, p, 'Blocks of the periodic table');
})();

var IE = [1312, 2372, 520, 899, 801, 1086, 1402, 1314, 1681, 2081, 496, 738, 578, 787, 1012, 1000, 1251, 1521, 419, 590], SYM = ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca'];
var figIE = D.plot({
  w: 440, h: 240, x: [0, 21], y: [0, 2600], xlabel: 'Z', ylabel: 'IE₁ (kJ/mol)', mathLabels: false, xticks: [[2, '2'], [10, '10'], [18, '18']], yticks: [[1000, '1000'], [2000, '2000']],
  extra: function (X, Y) { var pts = IE.map(function (v, i) { return [X(i + 1), Y(v)]; }), out = [D.poly(pts, { color: 'c', w: 1.8 })]; IE.forEach(function (v, i) { out.push(D.dot(X(i + 1), Y(v), { color: [1, 9, 17].indexOf(i) >= 0 ? 'r' : 'c', r: 3 })); if ([0, 1, 2, 3, 4, 6, 7, 9, 10, 11, 12, 14, 15, 17, 18].indexOf(i) >= 0) out.push(D.text(X(i + 1), Y(v) - 10, SYM[i], { size: 9, math: false })); }); return out; },
  label: 'First ionisation enthalpy of the first 20 elements'
});

var figRadius = D.plot({
  w: 400, h: 220, x: [0, 8], y: [0, 200], xlabel: 'group (1, 2, 13–17)', ylabel: 'radius (pm)', mathLabels: false, xticks: [], yticks: [[100, '100'], [200, '200']],
  extra: function (X, Y) {
    var out = [], per2 = [152, 111, 88, 77, 74, 66, 64], per3 = [186, 160, 143, 117, 110, 104, 99], s2 = ['Li', 'Be', 'B', 'C', 'N', 'O', 'F'], s3 = ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'];
    [[per2, s2, 'b'], [per3, s3, 'r']].forEach(function (d) { out.push(D.poly(d[0].map(function (v, i) { return [X(i + 1), Y(v)]; }), { color: d[2], w: 2 })); d[0].forEach(function (v, i) { out.push(D.dot(X(i + 1), Y(v), { color: d[2], r: 3 }), D.text(X(i + 1), Y(v) - 11, d[1][i], { size: 9, math: false, color: d[2] })); }); });
    out.push(D.text(X(7.2), Y(60), 'period 2', { size: 10, math: false, color: 'b', anchor: 'start' }), D.text(X(7.2), Y(115), 'period 3', { size: 10, math: false, color: 'r', anchor: 'start' }));
    return out;
  },
  label: 'Atomic radius across periods 2 and 3'
});

var figTrends = D.svg(420, 200, [
  D.rect(90, 40, 260, 130, { color: 'm', w: 1.4, r: 6 }), D.text(220, 105, 'periodic table', { size: 12, math: false, color: 'm' }),
  D.arrow(100, 25, 340, 25, { color: 'g', w: 2, head: 8 }), D.text(220, 14, 'across a period: IE, EA, electronegativity ↑; radius, metallic character ↓', { size: 10, math: false, color: 'g' }),
  D.arrow(365, 45, 365, 165, { color: 'r', w: 2, head: 8 }), D.text(372, 70, 'down', { size: 10, math: false, color: 'r', anchor: 'start' }), D.text(372, 84, 'a group:', { size: 10, math: false, color: 'r', anchor: 'start' }), D.text(372, 100, 'radius,', { size: 10, math: false, color: 'r', anchor: 'start' }), D.text(372, 114, 'metallic ↑', { size: 10, math: false, color: 'r', anchor: 'start' }), D.text(372, 130, 'IE, EN ↓', { size: 10, math: false, color: 'r', anchor: 'start' }),
  D.text(50, 60, 'most', { size: 10, math: false, color: 'o' }), D.text(50, 74, 'metallic', { size: 10, math: false, color: 'o' }), D.text(50, 150, '(Cs, Fr)', { size: 10, math: false, color: 'o' }), D.arrow(80, 160, 95, 165, { color: 'o', w: 1, head: 5 }),
  D.text(300, 190, 'most electronegative: F (top right)', { size: 10, math: false, color: 'b' })
], 'Summary of periodic trends');

// ---------- chapter text ----------
JEE.book('chemistry', 'periodicity', {
  intro: [
    R`There are 118 known elements. Studying each separately would be impossible, but arranging them in the <b>periodic table</b> reveals patterns: elements in the same column behave alike, and properties change gradually along rows. These patterns come directly from electronic configurations.`,
    R`This chapter traces the history of classification, the modern periodic law and the long form of the table, the s, p, d and f blocks, and the periodic trends in atomic and ionic radii, ionisation enthalpy, electron gain enthalpy, electronegativity, valence, and chemical reactivity.`
  ],
  sections: [
    { h: R`Why classify? Early attempts`, t: [0], blocks: [
      R`By the mid-1800s, more than 60 elements were known. Chemists looked for patterns to organise this knowledge and predict new elements.`,
      { points: [
        R`<b>Döbereiner's triads</b> (1829): groups of three similar elements in which the middle element's atomic mass is about the average of the other two: Li, Na, K (7, 23, 39); Cl, Br, I. Only a few triads worked.`,
        R`<b>Newlands' law of octaves</b> (1865): arranged by atomic mass, every eighth element resembled the first, like notes in music. It worked only up to calcium.`,
        R`<b>Mendeleev's periodic law</b> (1869): the properties of elements are a periodic function of their <b>atomic masses</b>. He arranged elements in rows and columns by mass and similar properties, boldly <b>left gaps</b> for undiscovered elements and predicted their properties (eka-aluminium = gallium, eka-silicon = germanium), and corrected some atomic masses. Lothar Meyer independently found similar patterns.`
      ] },
      R`Mendeleev's table had anomalies: some elements had to be placed out of mass order (Ar 39.9 before K 39.1; Te 127.6 before I 126.9), and isotopes had no proper place.`,
      { check: { q: R`What was the most remarkable feature of Mendeleev's table?`, ans: R`The gaps he left for undiscovered elements, whose properties he predicted correctly.` } }
    ] },

    { h: R`The modern periodic law and the periodic table`, t: [0], blocks: [
      R`In 1913 Moseley showed (from X-ray spectra) that atomic number, not atomic mass, is the fundamental property. <b>Modern periodic law:</b> the physical and chemical properties of elements are periodic functions of their <b>atomic numbers</b>. This resolved Mendeleev's anomalies.`,
      { fig: figTable, cap: R`The long form of the periodic table: 18 groups and 7 periods, divided into s, p, d and f blocks.` },
      R`The <b>long form</b> of the periodic table has 7 horizontal rows (<b>periods</b>) and 18 vertical columns (<b>groups</b>, numbered 1–18 by IUPAC). The period number equals the principal quantum number of the outermost shell. Periods contain 2, 8, 8, 18, 18, 32 and 32 elements. The lanthanoids (Z = 58–71) and actinoids (Z = 90–103) are placed separately at the bottom.`,
      { check: { q: R`How many elements are in the 4th period, and why?`, ans: R`18: filling 4s (2), 3d (10) and 4p (6).` } }
    ] },

    { h: R`Nomenclature of elements with Z > 100`, t: [0], blocks: [
      R`Newly made elements get a temporary IUPAC name until a permanent one is approved. The name is built from the digits of the atomic number using roots, ending in -ium:`,
      { table: { head: [R`Digit`, R`0`, R`1`, R`2`, R`3`, R`4`, R`5`, R`6`, R`7`, R`8`, R`9`], rows: [[R`Root`, R`nil`, R`un`, R`bi`, R`tri`, R`quad`, R`pent`, R`hex`, R`sept`, R`oct`, R`enn`], [R`Symbol`, R`n`, R`u`, R`b`, R`t`, R`q`, R`p`, R`h`, R`s`, R`o`, R`e`]] } },
      { ex: { q: R`Give the IUPAC temporary name and symbol for Z = 109 and Z = 120.`,
        steps: [R`109: un-nil-enn-ium; 120: un-bi-nil-ium.`], ans: R`Unnilennium (Une, now meitnerium); Unbinilium (Ubn)` } },
      { check: { q: R`What is the temporary symbol for element 114?`, ans: R`Uuq (ununquadium, now flerovium, Fl).` } }
    ] },

    { h: R`Electronic configurations: periods and groups`, t: [1], blocks: [
      R`The position of an element in the table follows from its electronic configuration. Each period starts with an element having one electron in a new shell (ns¹) and ends with a noble gas (ns²np⁶, except He 1s²). Elements in the same group have the same <b>outer (valence) configuration</b>, which is why they have similar properties: group 1 is ns¹, group 17 is ns²np⁵.`,
      { ex: { q: R`An element has configuration 1s² 2s² 2p⁶ 3s² 3p⁴. Find its period, group and block.`,
        steps: [R`Outermost shell n = 3: period 3.`, R`Last electron in a p subshell: p-block; group = 10 + (2 + 4) = 16.`], ans: R`Period 3, group 16, p-block (sulphur)` } },
      { check: { q: R`How is the group number of a p-block element found from its configuration?`, ans: R`10 + number of electrons in the outermost s and p subshells.` } }
    ] },

    { h: R`The s, p, d and f blocks`, t: [1], blocks: [
      { table: { head: [R`Block`, R`Groups`, R`Outer configuration`, R`Features`], rows: [
        [R`s-block`, R`1, 2`, R`ns¹⁻²`, R`reactive metals (alkali, alkaline earth); low IE; mostly ionic compounds; +1, +2 states`],
        [R`p-block`, R`13–18`, R`ns²np¹⁻⁶`, R`metals, metalloids, non-metals and noble gases; most non-metals are here`],
        [R`d-block (transition)`, R`3–12`, R`(n−1)d¹⁻¹⁰ns⁰⁻²`, R`metals; variable oxidation states; coloured, paramagnetic ions; catalysts`],
        [R`f-block (inner transition)`, R`lanthanoids, actinoids`, R`(n−2)f¹⁻¹⁴(n−1)d⁰⁻¹ns²`, R`metals; actinoids radioactive; most beyond U are synthetic`]] } },
      R`Elements are also classified as <b>metals</b> (left and centre, about 78% of elements), <b>non-metals</b> (top right) and <b>metalloids</b> (along the zigzag line: B, Si, Ge, As, Sb, Te), with intermediate properties.`,
      { check: { q: R`Which block contains elements with configuration (n−1)d¹⁰ns²?`, ans: R`The d-block (group 12: Zn, Cd, Hg).` } }
    ] },

    { h: R`Atomic and ionic radii`, t: [2], blocks: [
      R`The size of an atom is not exact (the electron cloud has no sharp edge), so radii are measured from bond distances: the <b>covalent radius</b> (half the distance between two bonded atoms of the same element) and the <b>metallic radius</b> (half the distance between neighbouring atoms in a metal).`,
      { points: [R`A <b>cation</b> is smaller than its atom (fewer electrons, same nuclear charge, often a lost shell): Na 186 pm, Na⁺ 95 pm.`, R`An <b>anion</b> is larger than its atom (more electrons repelling each other, same nuclear charge): F 64 pm, F⁻ 136 pm.`, R`<b>Isoelectronic species</b> have the same number of electrons; among them, the one with the larger nuclear charge is smaller: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺ (all 10 electrons).`] },
      { ex: { q: R`Arrange N³⁻, O²⁻, F⁻, Na⁺ and Mg²⁺ in order of increasing size.`,
        steps: [R`All have 10 electrons; nuclear charges 7, 8, 9, 11, 12.`, R`More protons pull the same electrons closer.`], ans: R`Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻` } },
      { check: { q: R`Which is larger, Fe²⁺ or Fe³⁺?`, ans: R`Fe²⁺ (more electrons for the same nuclear charge).` } }
    ] },

    { h: R`Trends in atomic radius`, t: [2], blocks: [
      { fig: figRadius, cap: R`Atomic radius decreases across a period and is larger in period 3 than period 2.` },
      { points: [R`<b>Across a period</b> (left to right), radius decreases: electrons enter the same shell while the nuclear charge increases, so the effective nuclear charge pulls them closer.`, R`<b>Down a group</b>, radius increases: a new shell is added each time, outweighing the increase in nuclear charge (inner electrons shield the outer ones).`, R`Noble gases are not compared, since their radii are van der Waals radii (larger).`] },
      R`Exceptions: in the d-block the radius decreases only slightly across (the added electrons enter an inner d subshell and shield well), and the 4d and 5d elements have nearly equal radii (Zr 160 pm, Hf 159 pm) because of the <b>lanthanoid contraction</b>.`,
      { check: { q: R`Which is larger: Li or F?`, ans: R`Li (radius decreases across the period).` } }
    ] },

    { h: R`Ionisation enthalpy`, t: [3], blocks: [
      R`The <b>ionisation enthalpy</b> \(\Delta_iH\) is the energy needed to remove the most loosely held electron from an isolated gaseous atom in its ground state: X(g) → X⁺(g) + e⁻. Successive ionisation enthalpies always increase: \(\Delta_iH_1 < \Delta_iH_2 < \Delta_iH_3\) (removing an electron from a positive ion is harder). A huge jump marks the start of a new (inner) shell: for Mg, IE₃ ≫ IE₂.`,
      { fig: figIE, cap: R`First ionisation enthalpy peaks at the noble gases and falls sharply at each alkali metal. Note the dips at B, O, Al and S.` },
      { h3: R`Factors and trends` },
      { points: [R`Larger nuclear charge and smaller size increase IE; more shielding by inner electrons and larger size decrease it.`, R`<b>Across a period</b>, IE generally increases (Zeff increases, size decreases).`, R`<b>Down a group</b>, IE decreases (size and shielding increase).`] },
      { h3: R`Exceptions` },
      { points: [R`<b>Be > B</b> (and Mg > Al): B loses a 2p electron, which is higher in energy and better shielded than Be's 2s electron.`, R`<b>N > O</b> (and P > S): N has a stable half-filled 2p³; in O, the fourth p electron is paired and repelled by its partner, so it is easier to remove.`] },
      { ex: { q: R`The first four ionisation enthalpies of an element are 578, 1817, 2745 and 11 577 kJ/mol. Which group is it in?`,
        steps: [R`The big jump comes after the third electron.`], ans: R`Three valence electrons: group 13 (it is aluminium)` } },
      { check: { q: R`Why does nitrogen have a higher first ionisation enthalpy than oxygen?`, ans: R`Nitrogen's half-filled 2p³ configuration is extra stable; oxygen's paired 2p electron is easier to remove.` } }
    ] },

    { h: R`Electron gain enthalpy`, t: [4], blocks: [
      R`The <b>electron gain enthalpy</b> \(\Delta_{eg}H\) is the enthalpy change when an electron is added to an isolated gaseous atom: X(g) + e⁻ → X⁻(g). It is negative (energy released) for most atoms, especially the halogens; it is positive for noble gases and for adding a second electron (O⁻ + e⁻ → O²⁻ requires energy, against repulsion).`,
      { points: [R`<b>Across a period</b>, it generally becomes more negative (halogens are the most negative in each period).`, R`<b>Down a group</b>, it generally becomes less negative (the added electron is farther from the nucleus).`] },
      { h3: R`Exceptions` },
      { points: [R`<b>Cl has a more negative electron gain enthalpy than F</b> (−349 vs −328 kJ/mol): fluorine's 2p subshell is so small that the incoming electron is strongly repelled by the electrons already there.`, R`Likewise O is less negative than S.`, R`Be, Mg (filled s²), N (half-filled p³) and the noble gases have positive or nearly zero values.`] },
      { check: { q: R`Which element has the most negative electron gain enthalpy?`, ans: R`Chlorine.` } }
    ] },

    { h: R`Electronegativity`, t: [6], blocks: [
      R`<b>Electronegativity</b> is the tendency of an atom <b>in a molecule</b> to attract the shared electron pair towards itself. It is not a measurable energy but a relative scale; on the <b>Pauling scale</b>, F = 4.0 (most electronegative), O 3.5, N 3.0, Cl 3.0, C 2.5, H 2.1, Na 0.9, Cs 0.7.`,
      { points: [R`It increases across a period and decreases down a group.`, R`It is linked to non-metallic character: high electronegativity means non-metal.`, R`The difference in electronegativity between bonded atoms decides bond polarity: a large difference (> 1.7) gives mainly ionic bonds.`] },
      { fig: figTrends, cap: R`Summary: across a period, ionisation enthalpy, electron gain enthalpy (more negative) and electronegativity increase while size decreases; down a group the reverse.` },
      { check: { q: R`How is electronegativity different from electron gain enthalpy?`, ans: R`Electronegativity refers to a bonded atom attracting a shared pair (a relative number); electron gain enthalpy is a measurable energy for an isolated gaseous atom gaining an electron.` } }
    ] },

    { h: R`Periodicity of valence and oxidation states`, t: [5], blocks: [
      R`The <b>valence</b> of representative elements is usually equal to the number of valence electrons (groups 1, 2, 13, 14) or 8 minus that number (groups 15–17). The oxidation states follow suit: Na +1, Mg +2, Al +3, C ±4, N −3, O −2, F −1. In oxygen compounds, elements show their group valency: Na₂O, MgO, Al₂O₃, SiO₂, P₄O₁₀, SO₃, Cl₂O₇.`,
      R`Heavier p-block elements also show lower oxidation states (the <b>inert pair effect</b>: Tl⁺ and Pb²⁺ are more stable than Tl³⁺ and Pb⁴⁺), and transition metals show many variable oxidation states (Mn +2 to +7).`,
      { ex: { q: R`Predict the formula of the compound formed between Al and O, and between Si and Cl.`,
        steps: [R`Al +3, O −2: Al₂O₃. Si +4, Cl −1: SiCl₄.`], ans: R`Al₂O₃; SiCl₄` } },
      { check: { q: R`Why is the oxidation state of fluorine always −1 in compounds?`, ans: R`It is the most electronegative element and needs just one electron to complete its octet.` } }
    ] },

    { h: R`Chemical reactivity and metallic character`, t: [7], blocks: [
      R`<b>Metallic character</b> (tendency to lose electrons) increases down a group and decreases across a period, so the most reactive metals (Cs, Fr) are at the bottom left and the most reactive non-metal (F) at the top right. Reactivity of metals rises down a group (Li → Cs); that of non-metals falls down a group (F → I).`,
      { h3: R`Anomalous properties of second-period elements` },
      R`The first member of each group (Li, Be, B, C, N, O, F) differs from the rest of its group because of its very small size, high charge/radius ratio, high electronegativity, and absence of d orbitals (so maximum covalency is 4). For example, Li resembles Mg and Be resembles Al: <b>diagonal relationship</b>. Nitrogen and oxygen form strong pπ–pπ multiple bonds (N≡N, O=O) while their heavier congeners do not.`,
      { h3: R`Acidic and basic character of oxides` },
      R`Across a period, oxides change from strongly <b>basic</b> (Na₂O) through <b>amphoteric</b> (Al₂O₃) to strongly <b>acidic</b> (Cl₂O₇): Na₂O + H₂O → 2NaOH; Cl₂O₇ + H₂O → 2HClO₄. Down a group, basic character increases. Some oxides are <b>neutral</b>: CO, NO, N₂O.`,
      { check: { q: R`Is Al₂O₃ acidic or basic?`, ans: R`Amphoteric: it reacts with both acids and bases.` } }
    ] }
  ],
  summary: [
    R`Döbereiner's triads, Newlands' octaves, Mendeleev's table (atomic mass, gaps, predictions); Moseley: atomic number.`,
    R`Modern law: properties are periodic functions of atomic number; 7 periods, 18 groups; IUPAC names for Z > 100 (nil, un, bi, …).`,
    R`Blocks: s (groups 1–2), p (13–18), d (3–12), f (lanthanoids, actinoids).`,
    R`Radius: decreases across, increases down; cation < atom < anion; isoelectronic: more protons, smaller.`,
    R`Ionisation enthalpy: increases across, decreases down; exceptions Be > B, N > O; jumps reveal valence electrons.`,
    R`Electron gain enthalpy: most negative for halogens; Cl more negative than F; positive for noble gases.`,
    R`Electronegativity (Pauling): F 4.0; increases across, decreases down.`,
    R`Valence and oxidation states periodic; inert pair effect.`,
    R`Metallic character down and left; second-period anomalies; diagonal relationship; oxides basic → amphoteric → acidic across a period.`
  ],
  refs: [
    { t: R`OpenStax Chemistry 2e, §2.5 The Periodic Table`, url: 'https://openstax.org/books/chemistry-2e/pages/2-5-the-periodic-table' },
    { t: R`OpenStax Chemistry 2e, §6.5 Periodic Variations in Element Properties`, url: 'https://openstax.org/books/chemistry-2e/pages/6-5-periodic-variations-in-element-properties' },
    { t: R`Wikipedia: Periodic trends`, url: 'https://en.wikipedia.org/wiki/Periodic_trends' },
    { t: R`Wikipedia: Systematic element name`, url: 'https://en.wikipedia.org/wiki/Systematic_element_name' }
  ]
});
})();
