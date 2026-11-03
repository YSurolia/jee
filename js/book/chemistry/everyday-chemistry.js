// Book chapter: Chemistry in Everyday Life. Full theory with structures and diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }

// ---------- figures ----------
var figLock = D.svg(460, 140, [
  D.path('M40,40 L150,40 L150,70 L120,70 L110,85 L100,70 L80,70 L80,90 L40,90 Z', { color: 'b', fill: 'soft', w: 1.8 }), lab(95, 108, 'enzyme with active site', 'b', 10),
  D.path('M110,20 L110,35 L100,35 L110,50 L120,35 L120,20 Z', { color: 'g', fill: 'soft', w: 1.6 }), lab(160, 22, 'substrate fits the site', 'g', 10, { anchor: 'start' }),
  D.path('M280,40 L390,40 L390,70 L360,70 L350,85 L340,70 L320,70 L320,90 L280,90 Z', { color: 'b', fill: 'soft', w: 1.8 }),
  D.path('M340,52 L340,64 L350,82 L360,64 L360,52 Z', { color: 'r', fill: 'soft', w: 1.6 }), lab(335, 108, 'competitive inhibitor (drug) blocks the site', 'r', 10),
  lab(350, 125, '→ substrate cannot bind', 'm', 9)
], 'Enzyme inhibition by a drug');

var tails = [], heads = [];
for (var k = 0; k < 14; k++) { var a = k * 2 * Math.PI / 14, cx = 150, cy = 90, r1 = 62, r2 = 22; tails.push(D.line(cx + r2 * Math.cos(a), cy + r2 * Math.sin(a), cx + (r1 - 8) * Math.cos(a), cy + (r1 - 8) * Math.sin(a), { color: 'o', w: 2 })); heads.push(D.circle(cx + r1 * Math.cos(a), cy + r1 * Math.sin(a), 7, { color: 'b', fill: 'soft', w: 1.4 })); heads.push(lab(cx + r1 * Math.cos(a), cy + r1 * Math.sin(a) + 1, '−', 'b', 10, { bold: true })); }
var figMicelle = D.svg(440, 180, tails.concat(heads).concat([
  D.ellipse(150, 90, 18, 14, { color: 'k', fill: 'soft', w: 1.4 }), lab(150, 91, 'grease', 'k', 8),
  lab(300, 50, 'polar –COO⁻ heads face the water', 'b', 10, { anchor: 'start' }), lab(300, 80, 'hydrocarbon tails dissolve', 'o', 10, { anchor: 'start' }), lab(300, 94, 'the oily dirt in the centre', 'o', 10, { anchor: 'start' }),
  lab(300, 126, 'Na⁺ ions in the water around;', 'm', 9, { anchor: 'start' }), lab(300, 140, 'micelles repel each other and', 'm', 9, { anchor: 'start' }), lab(300, 154, 'are rinsed away', 'm', 9, { anchor: 'start' })
]), 'Soap micelle trapping grease');

// ---------- chapter text ----------
JEE.book('chemistry', 'everyday-chemistry', {
  intro: [
    R`Chemistry touches daily life in medicines, food and cleaning. This chapter looks at how drugs act on their targets in the body, the main classes of drugs (antacids, antihistamines, tranquilizers, analgesics, antimicrobials, antifertility drugs), chemicals added to food (sweeteners, preservatives), and soaps and detergents, including how they remove dirt.`
  ],
  sections: [
    { h: R`Drugs and their classification`, t: [0], blocks: [
      R`<b>Drugs</b> are low-molecular-mass chemicals (about 100–500 u) that interact with macromolecular targets in the body and produce a biological response. A drug that is useful in treatment is a <b>medicine</b>; chemotherapy is the use of chemicals for treatment. Most drugs are harmful in doses higher than recommended.`,
      { table: { head: [R`Basis`, R`Description`, R`Example`], rows: [
        [R`Pharmacological effect`, R`what the drug does; useful to doctors`, R`analgesics (pain relief), antiseptics (kill microbes)`],
        [R`Drug action`, R`action on a particular biochemical process`, R`antihistamines inhibit histamine`],
        [R`Chemical structure`, R`common structural features, often similar action`, R`sulphonamides`],
        [R`Molecular targets`, R`the biomolecule the drug interacts with; most useful to medicinal chemists`, R`enzyme inhibitors, receptor blockers`]] } },
      { check: { q: R`Which classification of drugs is most useful to medicinal chemists?`, ans: R`Classification by molecular targets.` } }
    ] },

    { h: R`Enzymes as drug targets`, t: [0], blocks: [
      R`Enzymes catalyse reactions in two steps: they <b>hold the substrate</b> in the active site (by ionic bonds, H-bonds, van der Waals and dipole–dipole forces) and provide <b>functional groups</b> that attack the substrate. Drugs that block either step are <b>enzyme inhibitors</b>:`,
      { fig: figLock, cap: R`A competitive inhibitor resembles the substrate and occupies the active site.` },
      { points: [R`<b>Competitive inhibitors</b> compete with the natural substrate for the active site.`, R`<b>Allosteric (non-competitive) inhibitors</b> bind to a different site (allosteric site) and change the shape of the active site so the substrate cannot fit.`, R`If the inhibitor binds by a strong covalent bond, the enzyme is blocked permanently, and the body must make new enzyme molecules.`] },
      { check: { q: R`How does an allosteric inhibitor work?`, ans: R`It binds at a site other than the active site and changes the active site's shape, so the substrate cannot bind.` } }
    ] },

    { h: R`Receptors as drug targets: agonists and antagonists`, t: [0], blocks: [
      R`<b>Receptors</b> are proteins embedded in cell membranes, important for communication in the body. A chemical messenger (neurotransmitter or hormone) binds to the receptor's site outside the cell; this changes the receptor's shape and transfers the message into the cell without the messenger entering. The messenger then leaves and the receptor returns to its original shape.`,
      { points: [R`<b>Antagonists</b> bind to the receptor site and block it, preventing the natural messenger from acting. Useful when the message must be blocked.`, R`<b>Agonists</b> mimic the natural messenger and switch on the receptor. Useful when there is a lack of the natural chemical messenger.`] },
      { check: { q: R`What is an agonist?`, ans: R`A drug that mimics the natural messenger and activates the receptor.` } }
    ] },

    { h: R`Antacids`, t: [1], blocks: [
      R`Excess acid in the stomach causes irritation, pain and, in severe cases, ulcers. <b>Antacids</b> neutralise the excess acid: sodium hydrogencarbonate, or a mixture of aluminium and magnesium hydroxides (insoluble, so they do not make the stomach too alkaline). However, metal hydroxides treat only the symptoms, not the cause.`,
      R`A major advance came when it was found that <b>histamine</b> stimulates secretion of HCl and pepsin. <b>Cimetidine</b> (Tagamet) and later <b>ranitidine</b> (Zantac) prevent histamine from binding to the receptors in the stomach wall, so less acid is released. Modern drugs like <b>omeprazole and lansoprazole</b> block the proton pump directly.`,
      { check: { q: R`Why are Mg(OH)₂ and Al(OH)₃ preferred to NaHCO₃ as antacids?`, ans: R`They are insoluble, so they do not raise the pH of the stomach above 7; excess NaHCO₃ makes the stomach alkaline and triggers more acid.` } }
    ] },

    { h: R`Antihistamines`, t: [1], blocks: [
      R`Histamine is a potent vasodilator; it contracts the smooth muscles of the bronchi and gut and relaxes other muscles such as those in blood vessel walls. It is responsible for nasal congestion during colds and for allergic responses to pollen. <b>Antihistamines</b> (synthetic drugs such as <b>brompheniramine</b> (Dimetapp) and <b>terfenadine</b> (Seldane)) compete with histamine for its receptor sites.`,
      R`Antihistamines do not affect acid secretion, because they and the antacids interact with <b>different receptors</b>.`,
      { check: { q: R`Why don't antihistamines like terfenadine reduce stomach acid?`, ans: R`They bind to different histamine receptors from those in the stomach wall.` } }
    ] },

    { h: R`Tranquilizers`, t: [2], blocks: [
      R`<b>Tranquilizers</b> are neurologically active drugs that treat stress and mild or severe mental diseases. They relieve anxiety, stress, irritability or excitement and are an essential part of sleeping pills.`,
      { points: [R`<b>Noradrenaline</b> is a neurotransmitter that affects mood; low levels cause depression. <b>Antidepressants</b> such as iproniazid and phenelzine inhibit the enzymes that degrade noradrenaline, so its level stays up.`, R`Chlordiazepoxide and meprobamate are mild tranquilizers for relieving tension; <b>equanil</b> is used for depression and hypertension.`, R`<b>Barbiturates</b> (derivatives of barbituric acid) are hypnotics (sleep-producing): veronal, amytal, nembutal, luminal, seconal. Valium and serotonin are also tranquilizers.`] },
      { check: { q: R`How do iproniazid and phenelzine act as antidepressants?`, ans: R`They inhibit the enzymes that break down noradrenaline, keeping its level high.` } }
    ] },

    { h: R`Non-narcotic and narcotic analgesics`, t: [2], blocks: [
      R`<b>Analgesics</b> reduce or abolish pain without causing impairment of consciousness, mental confusion, paralysis or other disturbances of the nervous system.`,
      { points: [R`<b>Non-narcotic (non-addictive)</b>: <b>aspirin</b> and <b>paracetamol</b>. Aspirin inhibits the synthesis of <b>prostaglandins</b>, which cause inflammation and pain; it is also antipyretic (reduces fever) and prevents blood clotting (used against heart attacks), but it can cause stomach bleeding.`, R`<b>Narcotic</b> analgesics: <b>morphine</b> and its derivatives (codeine, heroin), the opiates. In medicinal doses they relieve severe pain and produce sleep; in higher doses they cause stupor, coma, convulsions and death. They are used for post-operative pain, cardiac pain, terminal cancer pain and in childbirth. They are addictive.`] },
      { mol: [['CC(=O)OC1=CC=CC=C1C(O)=O', 'aspirin'], ['CC(=O)NC1=CC=C(O)C=C1', 'paracetamol']], w: 160, h: 120, cap: R`Two common non-narcotic analgesics.` },
      { check: { q: R`Why is aspirin used to prevent heart attacks?`, ans: R`It has an anti-blood-clotting action.` } }
    ] },

    { h: R`Antibiotics`, t: [3], blocks: [
      R`<b>Antimicrobials</b> destroy or prevent the growth of microorganisms (bacteria, fungi, viruses, parasites). <b>Antibiotics</b> were originally defined as substances produced by microorganisms that inhibit other microorganisms; today the term includes synthetic compounds. Paul Ehrlich's <b>salvarsan</b> (an arsenic compound) was the first effective treatment for syphilis. Prontosil led to the sulphonamides (sulphapyridine). Alexander Fleming discovered <b>penicillin</b> (1929).`,
      { table: { head: [R`Type`, R`Action`, R`Examples`], rows: [
        [R`Bactericidal`, R`kill bacteria`, R`penicillin, aminoglycosides, ofloxacin`],
        [R`Bacteriostatic`, R`inhibit growth of bacteria`, R`erythromycin, tetracycline, chloramphenicol`]] } },
      R`The <b>spectrum</b> is the range of microorganisms affected. <b>Broad-spectrum</b> antibiotics kill or inhibit a wide range of Gram-positive and Gram-negative bacteria: ampicillin, amoxycillin, chloramphenicol (also used for typhoid, meningitis, pneumonia), vancomycin, ofloxacin. <b>Narrow-spectrum</b> antibiotics act mainly on one group: penicillin G. A limited-spectrum antibiotic acts on a single organism or disease.`,
      { check: { q: R`Classify chloramphenicol by action and spectrum.`, ans: R`Bacteriostatic; broad-spectrum.` } }
    ] },

    { h: R`Antiseptics and disinfectants`, t: [3], blocks: [
      R`Both kill or prevent the growth of microorganisms, but <b>antiseptics</b> are applied to living tissues (wounds, cuts, skin), while <b>disinfectants</b> are applied to inanimate objects (floors, drains, instruments), being harmful to living tissue.`,
      { points: [R`<b>Antiseptics:</b> Dettol (a mixture of chloroxylenol and terpineol), bithionol (added to soaps), tincture of iodine (2–3% I₂ in alcohol–water), iodoform, boric acid (weak antiseptic for eyes), soframicin, furacin.`, R`<b>Disinfectants:</b> chlorine (0.2–0.4 ppm in drinking water), SO₂ in very low concentration.`, R`The same substance can be both, depending on concentration: <b>0.2% phenol</b> is an antiseptic, <b>1% phenol</b> is a disinfectant.`] },
      { mol: [['CC1=CC(O)=CC(C)=C1Cl', 'chloroxylenol (in Dettol)']], w: 180, h: 120, cap: R`Chloroxylenol is the main antiseptic in Dettol.` },
      { check: { q: R`What is the difference between an antiseptic and a disinfectant?`, ans: R`Antiseptics are safe for living tissue; disinfectants are used on non-living objects.` } }
    ] },

    { h: R`Antifertility drugs`, t: [4], blocks: [
      R`Birth control pills contain a mixture of synthetic <b>oestrogen</b> and <b>progesterone</b> derivatives, which are more potent than the natural hormones. Progesterone suppresses ovulation. <b>Norethindrone</b> is a synthetic progesterone derivative widely used in antifertility drugs, and <b>ethynylestradiol (novestrol)</b> is the oestrogen derivative used in combination with it.`,
      { check: { q: R`Name a synthetic progesterone derivative used in birth control pills.`, ans: R`Norethindrone.` } }
    ] },

    { h: R`Artificial sweeteners and other food additives`, t: [5], blocks: [
      R`Food additives include preservatives, flavours, colours, sweeteners, antioxidants, nutritional supplements and emulsifiers. <b>Artificial sweeteners</b> are non-nutritive substitutes for sugar, useful for diabetic people and calorie control:`,
      { table: { head: [R`Sweetener`, R`Sweetness relative to sucrose`, R`Notes`], rows: [
        [R`Aspartame`, R`100`, R`unstable at cooking temperature: used only in cold foods and drinks`],
        [R`Saccharin`, R`550`, R`first popular sweetener; excreted unchanged in urine, inert and harmless`],
        [R`Sucralose`, R`600`, R`trichloro derivative of sucrose; stable at cooking temperature, no calories`],
        [R`Alitame`, R`2000`, R`high-potency; sweetness control is difficult`]] } },
      { mol: [['O=C1NS(=O)(=O)C2=CC=CC=C12', 'saccharin']], w: 160, h: 120, cap: R`Saccharin (ortho-sulphobenzimide).` },
      R`<b>Preservatives</b> prevent spoilage by microbial growth: table salt, sugar, vegetable oils, <b>sodium benzoate</b> (C₆H₅COONa), salts of sorbic and propanoic acids. <b>Antioxidants</b> like BHT (butylated hydroxytoluene) and BHA (butylated hydroxyanisole) slow down oxidation of food.`,
      { ex: { q: R`Saccharin is 550 times as sweet as sucrose. What mass of saccharin gives the sweetness of 1.1 kg of sugar?`,
        steps: [R`1100 g ÷ 550 = 2 g.`], ans: R`2 g` } },
      { check: { q: R`Why is aspartame used only in cold foods?`, ans: R`It is unstable at cooking temperature.` } }
    ] },

    { h: R`Soaps: saponification`, t: [6], blocks: [
      R`<b>Soaps</b> are sodium or potassium salts of long-chain fatty acids (stearic, oleic, palmitic). They are made by heating fats or oils (glyceryl esters of fatty acids) with aqueous NaOH: <b>saponification</b>. Common salt is added to precipitate the soap (it is less soluble in brine), and glycerol is recovered from the solution.`,
      { mol: [['CCCCCCCCCCCCCCCCCC(=O)[O-]', 'stearate ion (sodium stearate is a soap)']], w: 300, h: 90, cap: R`A long hydrophobic tail with a hydrophilic carboxylate head.` },
      { points: [R`Toilet soaps use better-grade fats and oils, with colour and perfume. Floating soaps have air bubbles beaten in. Transparent soaps are made by dissolving soap in ethanol and evaporating. Medicated soaps contain antiseptics; shaving soaps contain glycerol (to prevent rapid drying) and a gum (rosin) for lather; laundry soaps contain fillers such as sodium rosinate, sodium silicate, borax and sodium carbonate.`, R`<b>Soaps do not work in hard water</b>: Ca²⁺ and Mg²⁺ form insoluble scum (2C₁₇H₃₅COONa + CaCl₂ → (C₁₇H₃₅COO)₂Ca↓ + 2NaCl), wasting soap and sticking to fabrics.`] },
      { ex: { q: R`What mass of NaOH is needed to saponify 89.1 g of glyceryl tristearate (M = 891.5), and what mass of sodium stearate (M = 306.5) forms?`,
        steps: [R`(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa + C₃H₅(OH)₃; 89.1/891.5 = 0.1 mol fat.`, R`NaOH: 0.3 × 40 = 12.0 g. Sodium stearate: 0.3 × 306.5 = 91.9 g.`], ans: R`12.0 g NaOH; ≈ 91.9 g soap (and 9.2 g glycerol)` } },
      { check: { q: R`Why is common salt added during soap making?`, ans: R`To precipitate the soap from solution (salting out).` } }
    ] },

    { h: R`Synthetic detergents`, t: [6], blocks: [
      R`<b>Synthetic detergents</b> have the cleansing properties of soaps but contain no soap. They <b>work in hard water and even in ice-cold water</b>, because their calcium and magnesium salts are soluble. Three types:`,
      { table: { head: [R`Type`, R`Hydrophilic head`, R`Example`, R`Uses`], rows: [
        [R`Anionic`, R`–SO₃⁻ or –OSO₃⁻ (negative)`, R`sodium dodecylbenzenesulphonate; sodium lauryl sulphate`, R`household detergents, toothpastes`],
        [R`Cationic`, R`quaternary ammonium (positive)`, R`cetyltrimethylammonium bromide`, R`hair conditioners; germicidal; expensive`],
        [R`Non-ionic`, R`polyether chain (no charge)`, R`ester of stearic acid with polyethylene glycol`, R`liquid dishwashing detergents`]] } },
      { mol: [['CCCCCCCCCCCCC1=CC=C(C=C1)S(=O)(=O)[O-]', 'dodecylbenzenesulphonate (anionic)']], w: 320, h: 110, cap: R`An anionic detergent ion.` },
      R`<b>Biodegradability:</b> detergents with highly <b>branched</b> hydrocarbon chains are not easily degraded by bacteria and cause foaming in rivers and sewage. Modern detergents use <b>unbranched</b> chains, which are biodegradable.`,
      { check: { q: R`Why do detergents work in hard water but soaps do not?`, ans: R`The Ca and Mg salts of detergent anions (sulphonates) are soluble, while those of fatty acids form insoluble scum.` } }
    ] },

    { h: R`Cleansing action`, t: [6], blocks: [
      R`Soap and detergent molecules have a long non-polar hydrocarbon <b>tail</b> (hydrophobic, dissolves in grease) and a polar <b>head</b> (hydrophilic, dissolves in water). In water, above the critical micelle concentration, they cluster into <b>micelles</b>: tails point inward and heads outward.`,
      { fig: figMicelle, cap: R`Oily dirt dissolves in the hydrocarbon core of the micelle and is carried away with the water.` },
      R`When fabric with greasy dirt is washed, the tails dissolve in the grease and the heads stay in the water. Each grease drop becomes surrounded by negative heads, forming an emulsion. Rubbing helps break up the dirt; the negatively charged droplets repel each other, do not recombine, and are washed away.`,
      { check: { q: R`Which part of a soap molecule dissolves the grease?`, ans: R`The long hydrocarbon (hydrophobic) tail.` } }
    ] }
  ],
  summary: [
    R`Drugs: classified by pharmacological effect, drug action, structure, molecular target. Enzyme inhibitors: competitive (active site) or allosteric. Receptors: agonists mimic, antagonists block.`,
    R`Antacids: Mg(OH)₂, Al(OH)₃, NaHCO₃; cimetidine, ranitidine block histamine; omeprazole blocks the proton pump. Antihistamines: brompheniramine, terfenadine.`,
    R`Tranquilizers: iproniazid, phenelzine (noradrenaline), equanil, barbiturates (veronal, luminal…), valium. Analgesics: non-narcotic (aspirin, paracetamol), narcotic (morphine, codeine, heroin).`,
    R`Antibiotics: bactericidal (penicillin, ofloxacin, aminoglycosides) vs bacteriostatic (erythromycin, tetracycline, chloramphenicol); broad vs narrow spectrum. Antiseptics (Dettol, bithionol, tincture of iodine; 0.2% phenol) vs disinfectants (Cl₂, SO₂; 1% phenol).`,
    R`Antifertility: norethindrone, ethynylestradiol. Sweeteners: aspartame 100, saccharin 550, sucralose 600, alitame 2000 × sucrose. Preservative: sodium benzoate; antioxidants BHT, BHA.`,
    R`Soap: saponification of fats with NaOH; scum in hard water. Detergents: anionic, cationic, non-ionic; work in hard water; unbranched = biodegradable. Micelles: tails inward around grease, heads outward.`
  ],
  refs: [
    { t: R`Wikipedia: Enzyme inhibitor`, url: 'https://en.wikipedia.org/wiki/Enzyme_inhibitor' },
    { t: R`Wikipedia: Antacid`, url: 'https://en.wikipedia.org/wiki/Antacid' },
    { t: R`Wikipedia: Antibiotic`, url: 'https://en.wikipedia.org/wiki/Antibiotic' },
    { t: R`Wikipedia: Sugar substitute`, url: 'https://en.wikipedia.org/wiki/Sugar_substitute' },
    { t: R`Wikipedia: Soap`, url: 'https://en.wikipedia.org/wiki/Soap' },
    { t: R`Wikipedia: Detergent`, url: 'https://en.wikipedia.org/wiki/Detergent' }
  ]
});
})();
