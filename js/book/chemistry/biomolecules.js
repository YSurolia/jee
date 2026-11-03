// Book chapter: Biomolecules. Full theory with structures and diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }
// Fischer projection: rows of [left, right] around a vertical chain with top and bottom groups.
function fischer(cx, top, rows, bottom, title) {
  var out = [lab(cx, 18, top, 'r', 11, { bold: true })], y = 40;
  out.push(D.line(cx, 26, cx, 40 + rows.length * 26, { w: 1.6 }));
  rows.forEach(function (r) {
    out.push(D.line(cx - 34, y + 2, cx + 34, y + 2, { w: 1.6 }));
    out.push(lab(cx - 46, y + 2, r[0], r[0] === 'H' ? 'k' : 'r', 11, { anchor: 'end' }), lab(cx + 46, y + 2, r[1], r[1] === 'H' ? 'k' : 'r', 11, { anchor: 'start' }));
    y += 26;
  });
  out.push(lab(cx, y + 6, bottom, 'k', 11, { bold: true }), lab(cx, y + 26, title, 'm', 10));
  return out.join('');
}
// Haworth projection of a D-pyranose; anomer 'a' (C1–OH down) or 'b' (up).
function haworth(ox, oy, anomer, title) {
  var P = { C5: [ox + 40, oy], O: [ox + 110, oy], C1: [ox + 150, oy + 30], C2: [ox + 110, oy + 60], C3: [ox + 40, oy + 60], C4: [ox, oy + 30] };
  var out = [D.line(P.C5[0], P.C5[1], P.O[0], P.O[1], { w: 1.6 }), D.line(P.O[0], P.O[1], P.C1[0], P.C1[1], { w: 1.6 }), D.line(P.C1[0], P.C1[1], P.C2[0], P.C2[1], { w: 4 }), D.line(P.C2[0], P.C2[1], P.C3[0], P.C3[1], { w: 5 }), D.line(P.C3[0], P.C3[1], P.C4[0], P.C4[1], { w: 4 }), D.line(P.C4[0], P.C4[1], P.C5[0], P.C5[1], { w: 1.6 })];
  out.push(lab(P.O[0], P.O[1] - 9, 'O', 'r', 12, { bold: true }));
  function sub(p, up, down) { out.push(D.line(p[0], p[1] - 20, p[0], p[1] + 20, { w: 1.4 })); out.push(lab(p[0], p[1] - 27, up, up === 'H' ? 'k' : 'r', 10)); out.push(lab(p[0], p[1] + 28, down, down === 'H' ? 'k' : 'r', 10)); }
  sub(P.C1, anomer === 'b' ? 'OH' : 'H', anomer === 'b' ? 'H' : 'OH'); sub(P.C2, 'H', 'OH'); sub(P.C3, 'OH', 'H'); sub(P.C4, 'H', 'OH');
  out.push(D.line(P.C5[0], P.C5[1], P.C5[0], P.C5[1] - 24, { w: 1.4 }), lab(P.C5[0], P.C5[1] - 33, 'CH₂OH', 'k', 10), D.line(P.C5[0], P.C5[1], P.C5[0], P.C5[1] + 9, { w: 1.4 }), lab(P.C5[0], P.C5[1] + 16, 'H', 'k', 9));
  out.push(lab(P.C1[0] + 10, P.C1[1], '1', 'm', 8, { anchor: 'start' }), lab(P.C4[0] - 8, P.C4[1], '4', 'm', 8, { anchor: 'end' }));
  out.push(lab(ox + 75, oy + 112, title, 'm', 10));
  return out.join('');
}

// ---------- figures ----------
var figFischer = D.svg(460, 200, [
  fischer(110, 'CHO', [['H', 'OH'], ['HO', 'H'], ['H', 'OH'], ['H', 'OH']], 'CH₂OH', 'D-(+)-glucose'),
  fischer(340, 'CH₂OH', [['', '= O'], ['HO', 'H'], ['H', 'OH'], ['H', 'OH']], 'CH₂OH', 'D-(−)-fructose')
], 'Fischer projections of glucose and fructose');

var figHaworth = D.svg(440, 160, [haworth(25, 40, 'a', 'α-D-glucopyranose'), haworth(250, 40, 'b', 'β-D-glucopyranose')], 'Haworth projections of glucose anomers');

var figDNA = (function () {
  var W = 420, x0 = 20, x1 = 400, cy = 100, A = 55, a = [], b = [], rungs = [];
  for (var k = 0; k <= 200; k++) { var t = k / 200 * 4 * Math.PI, x = x0 + (x1 - x0) * k / 200; a.push([x, cy - A * Math.sin(t)]); b.push([x, cy + A * Math.sin(t)]); }
  for (var r = 0; r < 26; r++) { var tt = (r + 0.5) / 26 * 4 * Math.PI, xx = x0 + (x1 - x0) * (r + 0.5) / 26, s1 = Math.sin(tt); if (Math.abs(s1) > 0.2) rungs.push(D.line(xx, cy - A * s1, xx, cy + A * s1, { color: r % 2 ? 'g' : 'o', w: 2 })); }
  return D.svg(W, 200, rungs.concat([D.poly(a, { color: 'b', w: 3 }), D.poly(b, { color: 'r', w: 3 }),
    lab(210, 18, 'sugar–phosphate backbones (antiparallel)', 'm', 10), lab(210, 188, 'base pairs: A=T (2 H-bonds), G≡C (3 H-bonds)', 'm', 10)]), 'DNA double helix (schematic)');
})();

// ---------- chapter text ----------
JEE.book('chemistry', 'biomolecules', {
  intro: [
    R`Living things are made of a few classes of large organic molecules: <b>carbohydrates</b>, <b>proteins</b>, <b>nucleic acids</b> and <b>lipids</b>, helped by smaller ones such as <b>vitamins</b> and <b>hormones</b>. These biomolecules store energy, build structures, catalyse reactions and carry genetic information.`,
    R`This chapter covers the structure and reactions of sugars (glucose in detail), amino acids and the levels of protein structure, enzymes, vitamins, the structure of DNA and RNA, and hormones.`
  ],
  sections: [
    { h: R`Carbohydrates: classification`, t: [0], blocks: [
      R`Carbohydrates are optically active <b>polyhydroxy aldehydes or ketones</b>, or compounds that give these on hydrolysis. Many have the formula Cₓ(H₂O)ᵧ ("hydrates of carbon"), but not all (rhamnose C₆H₁₂O₅ is a carbohydrate; acetic acid C₂H₄O₂ is not).`,
      { table: { head: [R`Class`, R`Hydrolysis`, R`Examples`], rows: [
        [R`Monosaccharides`, R`cannot be hydrolysed further`, R`glucose, fructose, ribose, galactose`],
        [R`Oligosaccharides (2–10 units)`, R`give 2–10 monosaccharides`, R`disaccharides: sucrose, maltose, lactose`],
        [R`Polysaccharides`, R`give a large number of monosaccharides`, R`starch, cellulose, glycogen`]] } },
      R`Sweet, crystalline, water-soluble carbohydrates (mono- and disaccharides) are called <b>sugars</b>; polysaccharides are tasteless and are called non-sugars.`,
      { check: { q: R`Is sucrose a monosaccharide?`, ans: R`No: it is a disaccharide (glucose + fructose).` } }
    ] },

    { h: R`Aldoses and ketoses; reducing and non-reducing sugars`, t: [0], blocks: [
      R`Monosaccharides with an aldehyde group are <b>aldoses</b>; those with a ketone group are <b>ketoses</b>. Combined with the number of carbons: glucose is an <b>aldohexose</b>, fructose a <b>ketohexose</b>, ribose an aldopentose.`,
      R`Carbohydrates that reduce Fehling's solution and Tollens' reagent are <b>reducing sugars</b>. All monosaccharides (aldoses and ketoses) are reducing sugars. In disaccharides, if the reducing groups (C1 of an aldose, C2 of a ketose) of both units are used in the glycosidic bond, the sugar is <b>non-reducing</b> (sucrose); if one is free, it is reducing (maltose, lactose).`,
      { check: { q: R`Why is sucrose a non-reducing sugar?`, ans: R`Its glycosidic bond joins C1 of glucose to C2 of fructose, so no free hemiacetal (reducing) group remains.` } }
    ] },

    { h: R`Glucose: open-chain and cyclic structures; anomers`, t: [0], blocks: [
      R`<b>Preparation:</b> boiling sucrose with dilute acid gives glucose and fructose; commercially, starch is hydrolysed with dilute H₂SO₄ at 393 K and 2–3 atm.`,
      R`<b>Open-chain structure</b> (from its reactions): molecular formula C₆H₁₂O₆; a straight chain of six carbons (HI gives n-hexane); a –CHO group (reacts with NH₂OH and HCN, reduces Tollens'; Br₂ water gives gluconic acid with six C); five –OH groups (acetylation gives a pentaacetate); a primary –OH (HNO₃ gives saccharic acid, a dicarboxylic acid). Its configuration is shown by the Fischer projection; "D" means the –OH on the lowest chiral carbon (C5) is on the right.`,
      { fig: figFischer, cap: R`Fischer projections of D-glucose and D-fructose. The prefix D refers to configuration; (+)/(−) to the direction of optical rotation.` },
      R`<b>Cyclic structure:</b> some facts do not fit the open chain: glucose does not give Schiff's test or form a bisulphite product, its pentaacetate does not react with NH₂OH, and it exists in two crystalline forms. The –OH on C5 adds to the –CHO group to form a six-membered ring (<b>pyranose</b>) with a hemiacetal at C1. C1 becomes a new chiral centre, giving two <b>anomers</b>:`,
      { fig: figHaworth, cap: R`Haworth projections: in α-D-glucose the C1–OH is below the ring (trans to CH₂OH); in β-D-glucose it is above.` },
      R`α-D-glucose (mp 419 K, [α] = +111°) and β-D-glucose (mp 423 K, +19.2°) interconvert in water through the open chain until an equilibrium mixture with [α] = +52.5° is reached: <b>mutarotation</b>. Anomers differ only in configuration at C1.`,
      { check: { q: R`What are anomers?`, ans: R`Cyclic sugars that differ only in the configuration at the hemiacetal carbon (C1 of glucose), e.g. α- and β-D-glucose.` } }
    ] },

    { h: R`Oxidation and reduction of glucose`, t: [0], blocks: [
      { table: { head: [R`Reagent`, R`Product`, R`What it shows`], rows: [
        [R`HI, heat`, R`n-hexane`, R`six carbons in a straight chain`],
        [R`Br₂ water (mild oxidant)`, R`gluconic acid, HOCH₂(CHOH)₄COOH`, R`–CHO group`],
        [R`HNO₃ (strong oxidant)`, R`saccharic (glucaric) acid, HOOC(CHOH)₄COOH`, R`a primary –OH (C6) as well as –CHO`],
        [R`Tollens' / Fehling's`, R`gluconate; Ag mirror / red Cu₂O`, R`reducing sugar`],
        [R`H₂/Ni or NaBH₄`, R`sorbitol (glucitol), a hexahydric alcohol`, R`C=O reduced`],
        [R`NH₂OH; HCN`, R`oxime; cyanohydrin`, R`carbonyl group`],
        [R`(CH₃CO)₂O`, R`glucose pentaacetate`, R`five –OH groups`]] } },
      { ex: { q: R`What mass of CO₂ is produced when 18 g of glucose is fermented to ethanol?`,
        steps: [R`C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂; 18/180 = 0.1 mol glucose → 0.2 mol CO₂.`, R`0.2 × 44 = 8.8 g.`], ans: R`8.8 g` } },
      { check: { q: R`Which reaction shows that glucose has a primary alcohol group?`, ans: R`Oxidation by nitric acid to saccharic (glucaric) acid, a dicarboxylic acid with the same number of carbons.` } }
    ] },

    { h: R`Glycoside formation`, t: [0], blocks: [
      R`The hemiacetal –OH at C1 of a cyclic sugar reacts with an alcohol (dry HCl) to form an acetal called a <b>glycoside</b>; the C–O–C link is a <b>glycosidic bond</b>. With methanol, glucose gives methyl α- and β-D-glucosides. Glycosides do not mutarotate and are non-reducing, because the ring can no longer open.`,
      R`When the "alcohol" is another sugar, a disaccharide forms; long chains of glycosidic links make polysaccharides. Glycosidic bonds are hydrolysed by acids and by specific enzymes.`,
      { check: { q: R`Why don't methyl glucosides reduce Fehling's solution?`, ans: R`The C1 hemiacetal is converted into an acetal, so the ring cannot open to give a free aldehyde.` } }
    ] },

    { h: R`Fructose`, t: [0], blocks: [
      R`Fructose (fruit sugar), C₆H₁₂O₆, is a <b>ketohexose</b> with the C=O at C2; it is laevorotatory, D-(−)-fructose. It forms a five-membered ring (<b>furanose</b>) by addition of the C5–OH to the C2 carbonyl, giving α- and β-anomers. Though a ketone, it is a reducing sugar (it gives Tollens' and Fehling's tests), because in alkaline solution it isomerises to aldoses (via an enediol).`,
      { check: { q: R`What size of ring does fructose form?`, ans: R`A five-membered (furanose) ring, C2 to C5 through O.` } }
    ] },

    { h: R`Sucrose, maltose and lactose`, t: [0], blocks: [
      { table: { head: [R`Disaccharide`, R`Units`, R`Glycosidic link`, R`Reducing?`], rows: [
        [R`Sucrose (cane sugar)`, R`α-D-glucose + β-D-fructose`, R`C1 (glucose) – C2 (fructose)`, R`no`],
        [R`Maltose (malt sugar)`, R`two α-D-glucose`, R`C1 – C4 (α)`, R`yes`],
        [R`Lactose (milk sugar)`, R`β-D-galactose + β-D-glucose`, R`C1 (galactose) – C4 (glucose)`, R`yes`]] } },
      R`<b>Inversion of cane sugar:</b> sucrose is dextrorotatory (+66.5°). On hydrolysis it gives equal amounts of D-(+)-glucose (+52.5°) and D-(−)-fructose (−92.4°). Because fructose rotates more strongly, the mixture is laevorotatory: the sign of rotation is inverted, and the mixture is called <b>invert sugar</b>. The enzyme invertase does the same.`,
      { ex: { q: R`What masses of glucose and fructose are formed by hydrolysing 34.2 g of sucrose (M = 342)?`,
        steps: [R`C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose); 0.1 mol sucrose.`, R`0.1 × 180 = 18 g each.`], ans: R`18 g glucose and 18 g fructose` } },
      { check: { q: R`Which disaccharide is present in milk and which monosaccharides make it?`, ans: R`Lactose: β-D-galactose + β-D-glucose.` } }
    ] },

    { h: R`Starch, cellulose and glycogen`, t: [0], blocks: [
      { points: [
        R`<b>Starch</b>, the main storage carbohydrate of plants, is a polymer of α-D-glucose. It has two parts: <b>amylose</b> (15–20%, water-soluble, unbranched chains of 200–1000 glucose units joined by C1–C4 α-glycosidic links) and <b>amylopectin</b> (80–85%, insoluble, branched: C1–C4 chains with C1–C6 branches). Starch gives a blue colour with iodine.`,
        R`<b>Cellulose</b>, the main structural material of plant cell walls, is a straight-chain polymer of <b>β-D-glucose</b> joined by C1–C4 β-glycosidic links. The chains are held by hydrogen bonds into strong fibres. Humans lack the enzyme to break β-links, so we cannot digest cellulose (cattle can, with help from microorganisms).`,
        R`<b>Glycogen</b>, the storage carbohydrate of animals (liver, muscles, brain), is like amylopectin but more highly branched ("animal starch"). When the body needs glucose, enzymes break it down.`
      ] },
      { check: { q: R`What is the key structural difference between starch and cellulose?`, ans: R`Starch is made of α-D-glucose (α-glycosidic links); cellulose of β-D-glucose (β-glycosidic links).` } }
    ] },

    { h: R`α-Amino acids and zwitterions`, t: [1], blocks: [
      R`Proteins are made from about 20 <b>α-amino acids</b>, RCH(NH₂)COOH, in which the –NH₂ and –COOH are on the same carbon. All except glycine (R = H) are chiral, and natural ones have the L-configuration. They are named by three-letter codes (Gly, Ala, Val…). Amino acids are <b>neutral</b> (one –NH₂, one –COOH), <b>acidic</b> (extra –COOH: aspartic and glutamic acid) or <b>basic</b> (extra –NH₂: lysine, arginine, histidine).`,
      R`<b>Essential amino acids</b> must come from the diet: valine, leucine, isoleucine, threonine, methionine, phenylalanine, tryptophan, lysine, arginine and histidine. The others (non-essential) are made in the body.`,
      { mol: [['NCC(=O)O', 'glycine (neutral form)'], ['[NH3+]CC(=O)[O-]', 'zwitterion'], ['C[C@H](N)C(=O)O', 'L-alanine']], w: 140, h: 110, cap: R`In water, amino acids exist mainly as zwitterions (dipolar ions).` },
      R`In aqueous solution, the –COOH donates a proton to the –NH₂, forming a <b>zwitterion</b>, H₃N⁺–CHR–COO⁻. Amino acids are therefore crystalline solids with high melting points, soluble in water, and <b>amphoteric</b>. The pH at which the zwitterion has no net charge (and does not move in an electric field) is the <b>isoelectric point</b>.`,
      { check: { q: R`Why do amino acids have high melting points?`, ans: R`They exist as zwitterions, held together by strong ionic attractions in the crystal.` } }
    ] },

    { h: R`Peptide bond and polypeptides`, t: [1], blocks: [
      R`The –COOH of one amino acid condenses with the –NH₂ of another, eliminating water, to form an amide link, –CO–NH–, called the <b>peptide bond</b>. Two amino acids give a dipeptide, three a tripeptide, and so on; chains of more than about 10 are polypeptides, and over about 100 (molar mass over 10 000) are proteins. The chain has a free –NH₂ (N-terminal) at one end and a free –COOH (C-terminal) at the other.`,
      { mol: [['NCC(=O)N[C@@H](C)C(=O)O', 'glycylalanine (Gly–Ala)']], w: 220, h: 120, cap: R`A dipeptide: the peptide bond C(=O)–NH links glycine (N-terminal) to alanine (C-terminal).` },
      R`The peptide bond is planar (partial double-bond character from resonance of the N lone pair with C=O), which restricts the shapes a protein chain can take.`,
      { ex: { q: R`How many peptide bonds are in a pentapeptide? How many different tripeptides can be made from Gly, Ala and Val using each once?`,
        steps: [R`n amino acids → n − 1 peptide bonds: 5 − 1 = 4.`, R`Arrangements of 3 different amino acids: 3! = 6.`], ans: R`4; 6` } },
      { check: { q: R`What is lost when a peptide bond forms?`, ans: R`A molecule of water.` } }
    ] },

    { h: R`Fibrous and globular proteins`, t: [1], blocks: [
      { table: { head: [R``, R`Fibrous proteins`, R`Globular proteins`], rows: [
        [R`Shape`, R`long, parallel chains held by H-bonds and disulphide links`, R`chains coiled into a spherical shape`],
        [R`Solubility in water`, R`insoluble`, R`soluble`],
        [R`Role`, R`structural`, R`functional (enzymes, hormones, transport)`],
        [R`Examples`, R`keratin (hair, wool, silk), myosin (muscle), collagen`, R`insulin, albumin, haemoglobin`]] } },
      { check: { q: R`Classify keratin and insulin.`, ans: R`Keratin: fibrous. Insulin: globular.` } }
    ] },

    { h: R`Primary, secondary, tertiary and quaternary structures`, t: [1], blocks: [
      { points: [
        R`<b>Primary structure:</b> the sequence of amino acids in the chain. Changing even one amino acid can change the protein's function (sickle-cell anaemia).`,
        R`<b>Secondary structure:</b> the regular local shape of the chain, held by hydrogen bonds between the C=O and N–H of peptide bonds: the <b>α-helix</b> (a right-handed coil, H-bond between the C=O of residue n and N–H of residue n + 4) and the <b>β-pleated sheet</b> (chains side by side, H-bonded to each other, as in silk).`,
        R`<b>Tertiary structure:</b> the overall folding of the whole chain into a fibrous or globular shape, held by hydrogen bonds, disulphide (–S–S–) bridges, van der Waals forces and electrostatic attractions between side chains.`,
        R`<b>Quaternary structure:</b> the arrangement of two or more polypeptide subunits; haemoglobin has four subunits (2α + 2β).`
      ] },
      { check: { q: R`What holds the α-helix together?`, ans: R`Hydrogen bonds between the C=O of one peptide unit and the N–H of the unit four residues along the chain.` } }
    ] },

    { h: R`Denaturation of proteins`, t: [1], blocks: [
      R`A protein in its natural shape and active form is called <b>native</b>. Heat, changes in pH, heavy metal ions, alcohol or strong agitation disrupt the hydrogen bonds and other forces that hold its secondary and tertiary structures, so the globules unfold and the helices uncoil: the protein loses its biological activity. This is <b>denaturation</b>. The <b>primary structure stays intact</b>.`,
      R`Examples: coagulation of egg white on boiling; curdling of milk (lactic acid from bacteria changes the pH).`,
      { check: { q: R`Which level of protein structure is not affected by denaturation?`, ans: R`The primary structure (the amino-acid sequence; peptide bonds are not broken).` } }
    ] },

    { h: R`Enzymes`, t: [1], blocks: [
      R`<b>Enzymes</b> are biological catalysts, almost all globular proteins. They speed up reactions in cells enormously under mild conditions (body temperature, near-neutral pH), and are highly <b>specific</b>: each enzyme acts on one substrate (or a few) because the substrate fits the <b>active site</b> like a key in a lock. Names usually end in -ase: maltase (maltose → glucose), invertase (sucrose → glucose + fructose), lipase, protease, urease.`,
      R`Enzymes lower the activation energy (sucrose hydrolysis: from 107 kJ/mol with acid to 36 kJ/mol with invertase). Many need non-protein helpers (cofactors: metal ions, coenzymes such as vitamins). Their activity is highest at an optimum temperature (about 310 K) and optimum pH, and they are inhibited by certain molecules (the basis of many drugs).`,
      { check: { q: R`Why are enzymes specific?`, ans: R`The substrate must fit the shape of the enzyme's active site (lock-and-key).` } }
    ] },

    { h: R`Vitamins`, t: [2], blocks: [
      R`<b>Vitamins</b> are organic compounds needed in small amounts in the diet to maintain health; most cannot be made by the body. They are <b>fat-soluble</b> (A, D, E, K: stored in liver and fat tissue) or <b>water-soluble</b> (B group and C: must be taken regularly, since excess is excreted in urine; B₁₂ is stored in the liver).`,
      { table: { head: [R`Vitamin`, R`Sources`, R`Deficiency disease`], rows: [
        [R`A (retinol)`, R`fish liver oil, carrots, butter, milk`, R`xerophthalmia (hardening of cornea), night blindness`],
        [R`B₁ (thiamine)`, R`yeast, milk, green vegetables, cereals`, R`beriberi (loss of appetite, retarded growth)`],
        [R`B₂ (riboflavin)`, R`milk, egg white, liver, kidney`, R`cheilosis (fissuring at corners of mouth), digestive disorders`],
        [R`B₆ (pyridoxine)`, R`yeast, milk, egg yolk, cereals, grams`, R`convulsions`],
        [R`B₁₂ (cyanocobalamin, contains Co)`, R`meat, fish, egg, curd`, R`pernicious anaemia`],
        [R`C (ascorbic acid)`, R`citrus fruits, amla, green leafy vegetables`, R`scurvy (bleeding gums)`],
        [R`D (calciferol)`, R`exposure to sunlight, fish, egg yolk`, R`rickets (children), osteomalacia (adults)`],
        [R`E (tocopherols)`, R`vegetable oils (wheat germ, sunflower)`, R`increased fragility of red blood cells, muscle weakness`],
        [R`K (phylloquinone)`, R`green leafy vegetables`, R`increased blood-clotting time`]] } },
      { check: { q: R`Which vitamins are fat-soluble?`, ans: R`A, D, E and K.` } }
    ] },

    { h: R`Nucleic acids: nucleosides and nucleotides`, t: [3], blocks: [
      R`Nucleic acids (DNA and RNA) are long polymers of <b>nucleotides</b>. Complete hydrolysis gives three kinds of component: a <b>pentose sugar</b> (β-D-2-deoxyribose in DNA; β-D-ribose in RNA), <b>phosphoric acid</b>, and nitrogenous <b>bases</b>.`,
      { mol: [['NC1=NC=NC2=C1N=CN2', 'adenine (A)'], ['NC1=NC2=C(N=CN2)C(=O)N1', 'guanine (G)'], ['NC1=NC(=O)NC=C1', 'cytosine (C)'], ['CC1=CNC(=O)NC1=O', 'thymine (T)'], ['O=C1C=CNC(=O)N1', 'uracil (U)']], w: 130, h: 110, cap: R`Purine bases (A, G) and pyrimidine bases (C, T, U). DNA contains A, G, C, T; RNA contains A, G, C, U.` },
      R`A <b>nucleoside</b> = base + sugar (the base is linked to C1' of the sugar). A <b>nucleotide</b> = base + sugar + phosphate (phosphate esterified at C5' of the sugar). Nucleotides join through <b>phosphodiester links</b> between C5' of one sugar and C3' of the next, forming the sugar–phosphate backbone of the chain.`,
      { check: { q: R`What is the difference between a nucleoside and a nucleotide?`, ans: R`A nucleotide has a phosphate group in addition to the base and sugar of a nucleoside.` } }
    ] },

    { h: R`Structure of DNA and RNA`, t: [3], blocks: [
      R`<b>DNA</b> (James Watson and Francis Crick, 1953) is a <b>double helix</b>: two antiparallel polynucleotide strands are coiled round a common axis, with the sugar–phosphate backbones outside and the bases inside. The bases pair specifically by hydrogen bonds: <b>adenine with thymine</b> (two H-bonds) and <b>guanine with cytosine</b> (three H-bonds). So the two strands are complementary, and in DNA %A = %T and %G = %C (Chargaff's rule).`,
      { fig: figDNA, cap: R`Schematic double helix: two backbones with base-pair "rungs" between them.` },
      R`<b>RNA</b> is usually <b>single-stranded</b> (it may fold back on itself), contains ribose and uracil instead of deoxyribose and thymine. There are three main kinds: <b>messenger RNA (m-RNA)</b>, <b>ribosomal RNA (r-RNA)</b> and <b>transfer RNA (t-RNA)</b>.`,
      { ex: { q: R`A DNA sample contains 30% adenine. What are the percentages of T, G and C?`,
        steps: [R`A = T = 30%; so G + C = 40%, and G = C.`], ans: R`T 30%, G 20%, C 20%` } },
      { check: { q: R`Which base pair is held by three hydrogen bonds?`, ans: R`Guanine–cytosine.` } }
    ] },

    { h: R`Biological functions of nucleic acids`, t: [4], blocks: [
      R`<b>DNA</b> is the chemical basis of heredity: it stores genetic information in the sequence of its bases, and it can <b>replicate</b> (each strand serves as a template for a new complementary strand) so that identical copies pass to daughter cells. <b>RNA</b> carries out <b>protein synthesis</b>: DNA is transcribed into m-RNA, which carries the message to the ribosomes (made with r-RNA), where t-RNA molecules bring the right amino acids according to the code (translation).`,
      R`Some nucleotides have other roles: <b>ATP</b> (adenosine triphosphate) is the energy currency of cells.`,
      { check: { q: R`Which type of RNA brings amino acids to the ribosome?`, ans: R`Transfer RNA (t-RNA).` } }
    ] },

    { h: R`Hormones`, t: [5], blocks: [
      R`<b>Hormones</b> are molecules made in the endocrine glands and carried by the blood to target cells, where they act as chemical messengers to keep the body's activities balanced (homeostasis). Chemically, they are:`,
      { points: [R`<b>Steroids:</b> oestrogens and androgens (sex hormones), cortisone/glucocorticoids (control carbohydrate metabolism, inflammation), mineralocorticoids (salt and water balance).`, R`<b>Polypeptides:</b> <b>insulin</b> (lowers blood glucose) and <b>glucagon</b> (raises it), endorphins.`, R`<b>Amino acid derivatives:</b> <b>adrenaline</b> (epinephrine) and noradrenaline (stress response), <b>thyroxine</b> (from the thyroid; contains iodine; controls metabolic rate; deficiency causes hypothyroidism and goitre).`] },
      { check: { q: R`Which hormone contains iodine?`, ans: R`Thyroxine.` } }
    ] }
  ],
  summary: [
    R`Carbohydrates: polyhydroxy aldehydes/ketones; mono-, oligo-, polysaccharides; aldoses/ketoses; reducing (free C1/C2) vs non-reducing (sucrose).`,
    R`Glucose: aldohexose; HI → n-hexane; Br₂ water → gluconic acid; HNO₃ → saccharic acid; pentaacetate; pyranose ring, α/β anomers, mutarotation (+111° ⇌ +19.2°, eq. +52.5°).`,
    R`Fructose: ketohexose, furanose. Sucrose (α-Glc C1–C2 β-Fru, non-reducing, invert sugar), maltose (α1→4), lactose (β-Gal 1→4 Glc).`,
    R`Starch (α-glucose: amylose + amylopectin), cellulose (β-glucose, linear), glycogen (highly branched).`,
    R`Amino acids: zwitterions, isoelectric point, 10 essential. Peptide bond –CO–NH–; n residues → n − 1 bonds. Fibrous vs globular; 1°, 2° (α-helix, β-sheet), 3°, 4° structure; denaturation keeps 1°.`,
    R`Enzymes: specific protein catalysts. Vitamins: fat-soluble A, D, E, K; water-soluble B, C; deficiency diseases.`,
    R`Nucleic acids: nucleoside = base + sugar; nucleotide + phosphate. DNA: deoxyribose, A=T, G≡C, double helix; RNA: ribose, U, single strand; m-, r-, t-RNA. Hormones: steroids, peptides, amino-acid derivatives.`
  ],
  refs: [
    { t: R`OpenStax Biology 2e, §3.2 Carbohydrates`, url: 'https://openstax.org/books/biology-2e/pages/3-2-carbohydrates' },
    { t: R`OpenStax Biology 2e, §3.4 Proteins`, url: 'https://openstax.org/books/biology-2e/pages/3-4-proteins' },
    { t: R`OpenStax Biology 2e, §3.5 Nucleic Acids`, url: 'https://openstax.org/books/biology-2e/pages/3-5-nucleic-acids' },
    { t: R`Wikipedia: Mutarotation`, url: 'https://en.wikipedia.org/wiki/Mutarotation' },
    { t: R`Wikipedia: Vitamin`, url: 'https://en.wikipedia.org/wiki/Vitamin' }
  ]
});
})();
