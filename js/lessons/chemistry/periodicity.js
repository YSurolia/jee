// Lesson: Classification of Elements and Periodicity in Properties.
var R = String.raw;
JEE.lesson('chemistry', 'periodicity', {
  theory: [
    { h: R`The modern periodic law and table`,
      body: [
        R`Mendeleev arranged elements by atomic mass and noticed that properties repeat. Moseley later showed that <b>atomic number</b> is the true basis.`,
        R`<b>Modern periodic law:</b> the properties of elements are a periodic function of their atomic numbers.`,
        R`The modern table has <b>7 periods</b> (rows), one for each new electron shell, and <b>18 groups</b> (columns). Elements in a group have the same outer-electron arrangement, so they behave similarly.`
      ],
      analogy: R`The periodic table is like a calendar: just as every Monday falls in the same column, elements with similar properties line up in the same group.`,
      check: { q: R`In which period and group is the element with configuration [Ne] 3s² 3p⁴?`, ans: R`Period 3 (outermost shell n = 3), group 16 (6 valence electrons, in the p-block). It is sulphur.` } },

    { h: R`The s, p, d and f blocks`,
      body: [
        R`Elements are grouped into blocks by the subshell receiving the last electron.`,
        R`<b>s-block</b> (groups 1–2): reactive metals (alkali and alkaline earth metals), configuration ns¹⁻². <b>p-block</b> (groups 13–18): metals, metalloids, non-metals and noble gases, ns² np¹⁻⁶.`,
        R`<b>d-block</b> (groups 3–12): transition metals, (n−1)d¹⁻¹⁰ ns⁰⁻². <b>f-block</b> (lanthanoids and actinoids): inner transition metals, placed separately at the bottom.`
      ],
      points: [R`Group number for p-block = 10 + number of valence electrons (for example, Cl: 7 → group 17).`] },

    { h: R`Atomic and ionic radius`,
      body: [
        R`Two things decide size: the number of shells, and how strongly the nucleus pulls the outer electrons (the <b>effective nuclear charge</b>, Z<sub>eff</sub>, reduced by the shielding of inner electrons).`,
        R`<b>Across a period</b> (left to right): same number of shells, but Z<sub>eff</sub> rises, so atoms get <b>smaller</b>. <b>Down a group</b>: new shells are added, so atoms get <b>bigger</b>.`,
        R`<b>Ions:</b> a cation is smaller than its atom (it loses electrons, often a whole shell); an anion is larger. For <b>isoelectronic</b> ions (same number of electrons), more protons means a smaller ion: N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.`
      ],
      analogy: R`Adding protons across a period is like adding stronger magnets at the centre: they pull the electron cloud in tighter, so the atom shrinks.` },

    { h: R`Ionisation enthalpy`,
      body: [
        R`<b>Ionisation enthalpy (IE)</b> is the energy needed to remove the outermost electron from a gaseous atom. It always takes energy, so IE is positive.`,
        R`Across a period, IE generally <b>increases</b>; down a group, it <b>decreases</b>. Noble gases have the highest values, and alkali metals the lowest.`,
        R`<b>Exceptions:</b> Be > B and Mg > Al (a full s subshell is stable; the p electron is easier to remove). N > O and P > S (a half-filled p subshell is stable).`,
        R`Successive IEs always increase (IE₁ < IE₂ < IE₃). A huge jump shows that an inner, noble-gas shell has been reached, which tells us the group.`
      ],
      mistake: R`Assuming O has a higher IE₁ than N because it is further right. Nitrogen's half-filled 2p³ makes it the exception.` },

    { h: R`Electron gain enthalpy`,
      body: [
        R`<b>Electron gain enthalpy</b> is the energy change when a gaseous atom gains an electron. Halogens release a lot of energy (very negative values) because they become stable anions.`,
        R`It generally becomes more negative across a period and less negative down a group.`,
        R`<b>Exceptions:</b> Cl has a more negative value than F, because F is so small that the incoming electron is strongly repelled. Noble gases and Be, Mg, N have positive or near-zero values.`
      ] },

    { h: R`Electronegativity`,
      body: [
        R`<b>Electronegativity</b> is an atom's ability to attract shared electrons in a bond. It is not an energy but a relative scale (Pauling scale).`,
        R`It increases across a period and decreases down a group. F (4.0) is the most electronegative element, then O (3.5), then N and Cl (3.0).`,
        R`A big electronegativity difference between two atoms gives an ionic bond; a small one gives a covalent (polar) bond.`
      ],
      points: [R`Electronegativity rises → non-metallic character rises.`] },

    { h: R`Valence and oxidation states`,
      body: [
        R`<b>Valence</b> is the combining capacity of an atom. For s- and p-block elements it is usually the number of valence electrons, or 8 minus that number.`,
        R`Group 1 is +1; group 2 is +2; group 13 is +3; group 15 is often −3, +3 or +5; group 17 is −1 (and up to +7 for Cl, Br, I). Transition metals show many oxidation states (Mn goes up to +7).`,
        R`Formulas come from crossing valencies: Al (3) and O (2) give Al₂O₃.`
      ] },

    { h: R`Chemical reactivity and the nature of oxides`,
      body: [
        R`<b>Metals</b> react by losing electrons, so reactivity rises down a group (K reacts more violently with water than Na). <b>Non-metals</b> react by gaining electrons, so reactivity falls down a group (F₂ > Cl₂ > Br₂ > I₂).`,
        R`Across period 3, oxides change from <b>basic</b> (Na₂O, MgO) to <b>amphoteric</b> (Al₂O₃) to <b>acidic</b> (SiO₂, P₄O₁₀, SO₃, Cl₂O₇).`,
        R`<b>Diagonal relationship:</b> some period-2 elements resemble the element diagonally below-right of them (Li–Mg, Be–Al, B–Si), because their sizes and charge densities are similar.`
      ],
      analogy: R`Sodium is stored under kerosene because it reacts with air and water so fast. Gold, at the other extreme, stays shiny for thousands of years.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`An element has the configuration [Ne] 3s² 3p⁴. Find its period, group and name.`,
      steps: [R`Outermost shell n = 3, so period 3.`, R`Valence electrons = 2 + 4 = 6 in the p-block, so group 10 + 6 = 16.`],
      ans: R`Period 3, group 16: sulphur` },
    { level: 1, t: 2, q: R`Which is larger in each pair: (a) Na or Na⁺ (b) Cl or Cl⁻?`,
      steps: [R`(a) Na loses its only 3s electron, and with it the whole third shell.`, R`(b) Cl gains an extra electron, which increases electron–electron repulsion.`],
      ans: R`(a) Na (b) Cl⁻` },
    { level: 1, t: 6, q: R`Arrange F, Cl and Br in decreasing order of electronegativity.`,
      steps: [R`Electronegativity decreases down a group.`],
      ans: R`F > Cl > Br` },
    { level: 3, t: 3, q: R`An element's first three ionisation enthalpies are 738, 1451 and 7733 kJ/mol. Which group is it in?`,
      steps: [R`IE₁ to IE₂ roughly doubles, which is normal. IE₂ to IE₃ jumps more than fivefold.`, R`The huge jump means the 3rd electron comes from an inner noble-gas shell. So the atom has 2 valence electrons.`],
      ans: R`Group 2 (it is magnesium)` },
    { level: 3, t: 7, q: R`Element X forms an oxide X₂O₃ that dissolves in both HCl and NaOH. What kind of oxide is it, and what might X be?`,
      steps: [R`Reacting with both an acid and a base means the oxide is amphoteric.`, R`An X³⁺ oxide that is amphoteric, from period 3, points to aluminium.`],
      ans: R`An amphoteric oxide; X is likely Al (Al₂O₃)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The modern periodic law is based on:`,
      options: [R`atomic number`, R`atomic mass`, R`number of neutrons`, R`density`], correct: 0,
      solution: R`Properties repeat periodically with atomic number (Moseley).` },
    { level: 1, type: 'mcq', q: R`How many periods are there in the modern periodic table?`,
      options: [R`7`, R`8`, R`18`, R`9`], correct: 0,
      solution: R`7 periods (rows) and 18 groups (columns).` },
    { level: 1, type: 'mcq', q: R`Moving from left to right across a period, the atomic radius generally:`,
      options: [R`increases`, R`decreases`, R`stays the same`, R`first increases, then decreases`], correct: 1,
      solution: R`The effective nuclear charge increases while the number of shells stays the same.` },
    { level: 1, type: 'mcq', q: R`The noble gases belong to group:`,
      options: [R`1`, R`17`, R`18`, R`2`], correct: 2,
      solution: R`Group 18 (He, Ne, Ar, Kr, Xe, Rn).` },
    { level: 1, type: 'num', q: R`An element's outer configuration is ns² np⁵. Which group is it in?`,
      answer: 17, tol: 0.001, unit: '',
      solution: R`7 valence electrons in the p-block: group 10 + 7 = 17 (the halogens).` },
    { level: 1, type: 'num', q: R`How many elements are there in period 2?`,
      answer: 8, tol: 0.001, unit: '',
      solution: R`Li to Ne: the 2s and 2p subshells hold 2 + 6 = 8 electrons.` },
    { level: 2, type: 'mcq', q: R`Which element has the highest first ionisation enthalpy?`,
      options: [R`He`, R`Ne`, R`F`, R`H`], correct: 0,
      solution: R`Helium: its two electrons are in the 1s shell, very close to the nucleus.` },
    { level: 2, type: 'mcq', q: R`Which of these isoelectronic ions is the largest?`,
      options: [R`Na⁺`, R`F⁻`, R`O²⁻`, R`N³⁻`], correct: 3,
      solution: R`All have 10 electrons; N³⁻ has the fewest protons (7), so its electrons are held least tightly.` },
    { level: 2, type: 'mcq', q: R`Which element has the most negative electron gain enthalpy?`,
      options: [R`F`, R`Cl`, R`Br`, R`O`], correct: 1,
      solution: R`Cl. Fluorine is so small that an incoming electron is strongly repelled.` },
    { level: 2, type: 'mcq', q: R`Which oxide is amphoteric?`,
      options: [R`Al₂O₃`, R`Na₂O`, R`SO₃`, R`CaO`], correct: 0,
      solution: R`Al₂O₃ reacts with both acids and bases. Na₂O and CaO are basic; SO₃ is acidic.` },
    { level: 2, type: 'num', q: R`What is the atomic number of the element in period 4, group 2?`,
      answer: 20, tol: 0.001, unit: '',
      solution: R`Calcium (Z = 20): [Ar] 4s².` },
    { level: 2, type: 'num', q: R`What is the highest oxidation state shown by chlorine?`,
      answer: 7, tol: 0.001, unit: '',
      solution: R`+7, as in HClO₄ and Cl₂O₇ (Cl uses all 7 valence electrons).` },
    { level: 2, type: 'num', q: R`How many d-block elements are there in period 4?`,
      answer: 10, tol: 0.001, unit: '',
      solution: R`Sc to Zn: the 3d subshell holds 10 electrons.` },
    { level: 3, type: 'mcq', q: R`An element's first three ionisation enthalpies are 738, 1451 and 7733 kJ/mol. It belongs to:`,
      options: [R`group 1`, R`group 13`, R`group 14`, R`group 2`], correct: 3,
      solution: R`The big jump after the 2nd electron shows 2 valence electrons.` },
    { level: 3, type: 'mcq', q: R`Which pair of elements shows a diagonal relationship?`,
      options: [R`Li and Mg`, R`Li and Na`, R`Be and B`, R`Na and Mg`], correct: 0,
      solution: R`Li and Mg have similar sizes and charge densities.` },
    { level: 3, type: 'num', q: R`Element 114 (flerovium) has the outer configuration 7s² 7p². Which group does it belong to?`,
      answer: 14, tol: 0.001, unit: '',
      solution: R`4 valence electrons in the p-block: group 10 + 4 = 14 (the carbon family).` },
    { level: 3, type: 'num', q: R`How many unpaired electrons does the period-3, group-15 element have in its ground state?`,
      answer: 3, tol: 0.001, unit: '',
      solution: R`Phosphorus: 3s² 3p³. By Hund's rule, the three 3p electrons are unpaired.` }
  ]
});
