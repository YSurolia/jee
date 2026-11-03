// Book chapter: Polymers. Full theory with structures and diagrams (rendered on the Theory tab).
(function () {
var R = String.raw, D = JEE.D;

// ---------- helpers ----------
function lab(x, y, t, c, size, o) { o = o || {}; return D.text(x, y, t, { size: size || 10, math: false, color: c || 'k', anchor: o.anchor, bold: o.bold }); }

// ---------- figures ----------
function chainLine(x, y, n, step, amp, c) { var p = []; for (var k = 0; k <= n; k++) p.push([x + k * step, y + (k % 2 ? amp : -amp)]); return D.poly(p, { color: c || 'k', w: 2 }); }
var figStructure = D.svg(480, 150, [
  chainLine(15, 40, 16, 8, 6, 'b'), chainLine(15, 70, 16, 8, 6, 'b'), lab(80, 100, 'linear (HDPE, PVC)', 'b', 10),
  chainLine(175, 40, 16, 8, 6, 'o'), chainLine(199, 34, 4, 6, 5, 'o').replace('points="', 'transform="rotate(-60 199 34)" points="'), chainLine(239, 46, 4, 6, 5, 'o').replace('points="', 'transform="rotate(60 239 46)" points="'),
  chainLine(175, 80, 16, 8, 6, 'o'), chainLine(215, 74, 4, 6, 5, 'o').replace('points="', 'transform="rotate(-60 215 74)" points="'), lab(240, 110, 'branched (LDPE)', 'o', 10),
  chainLine(340, 30, 16, 8, 5, 'g'), chainLine(340, 80, 16, 8, 5, 'g'), D.line(356, 35, 356, 75, { color: 'r', w: 2 }), D.line(388, 35, 388, 75, { color: 'r', w: 2 }), D.line(420, 35, 420, 75, { color: 'r', w: 2 }), lab(405, 110, 'cross-linked (Bakelite,', 'g', 10), lab(405, 124, 'vulcanised rubber)', 'g', 10)
], 'Linear, branched and cross-linked polymers');

var figRadical = D.svg(480, 150, [
  lab(10, 22, 'Initiation:', 'o', 11, { anchor: 'start', bold: true }), lab(100, 22, '(C₆H₅COO)₂ → 2C₆H₅COO• → 2C₆H₅• + 2CO₂;  C₆H₅• + CH₂=CH₂ → C₆H₅–CH₂–CH₂•', 'k', 9, { anchor: 'start' }),
  lab(10, 66, 'Propagation:', 'b', 11, { anchor: 'start', bold: true }), lab(100, 66, 'C₆H₅–CH₂–CH₂• + n CH₂=CH₂ → C₆H₅–(CH₂–CH₂)ₙ–CH₂–CH₂•', 'k', 10, { anchor: 'start' }),
  lab(10, 110, 'Termination:', 'r', 11, { anchor: 'start', bold: true }), lab(100, 110, 'two growing radicals combine: …–CH₂–CH₂• + •CH₂–CH₂–… → …–CH₂–CH₂–CH₂–CH₂–…', 'k', 9, { anchor: 'start' }),
  lab(240, 140, 'benzoyl peroxide is the initiator; each step adds one monomer to the radical chain end', 'm', 9)
], 'Free-radical addition polymerisation');

// ---------- chapter text ----------
JEE.book('chemistry', 'polymers', {
  intro: [
    R`<b>Polymers</b> (Greek poly = many, meros = parts) are very large molecules (macromolecules, molar mass 10³–10⁷ g/mol) built by joining many small repeating units called <b>monomers</b>. The process is <b>polymerisation</b>. Plastics, fibres, rubbers, paints and adhesives are polymers, and so are starch, cellulose, proteins and DNA.`,
    R`This chapter classifies polymers, explains the two main ways they are made (addition and condensation), looks at copolymers and rubber, and lists the important polymers with their monomers and uses, ending with biodegradable polymers.`
  ],
  sections: [
    { h: R`Classification by source`, t: [0], blocks: [
      { points: [R`<b>Natural polymers</b> are found in plants and animals: proteins, cellulose, starch, natural rubber, some resins.`, R`<b>Semi-synthetic polymers</b> are made by chemically modifying natural ones: cellulose acetate (rayon), cellulose nitrate, vulcanised rubber.`, R`<b>Synthetic polymers</b> are man-made: polythene, PVC, nylon-6,6, Buna-S, Bakelite.`] },
      { check: { q: R`Is rayon natural, semi-synthetic or synthetic?`, ans: R`Semi-synthetic (made from cellulose).` } }
    ] },

    { h: R`Classification by structure`, t: [0], blocks: [
      { fig: figStructure, cap: R`The shape of the chains decides how closely they pack and how the polymer behaves on heating.` },
      { points: [R`<b>Linear polymers</b> have long straight chains that pack closely: high density, high melting point, high tensile strength (high-density polythene, PVC).`, R`<b>Branched-chain polymers</b> have side chains that prevent close packing: lower density and melting point (low-density polythene).`, R`<b>Cross-linked (network) polymers</b> have strong covalent bonds between chains (usually from bi- or tri-functional monomers): hard, rigid and brittle (Bakelite, melamine, vulcanised rubber).`] },
      { check: { q: R`Why does LDPE have a lower density than HDPE?`, ans: R`Its branched chains cannot pack closely.` } }
    ] },

    { h: R`Classification by molecular forces`, t: [0], blocks: [
      R`The mechanical properties of a polymer depend on the strength of the intermolecular forces between its chains:`,
      { table: { head: [R`Type`, R`Forces`, R`Properties`, R`Examples`], rows: [
        [R`Elastomers`, R`weakest (van der Waals); a few cross-links`, R`rubber-like, stretch and return`, R`natural rubber, Buna-S, Buna-N, neoprene`],
        [R`Fibres`, R`strong (H-bonds, dipole) and close packing; crystalline`, R`high tensile strength, thread-forming`, R`nylon-6,6, polyester (terylene)`],
        [R`Thermoplastics`, R`intermediate`, R`soften on heating, harden on cooling (repeatedly)`, R`polythene, polystyrene, PVC`],
        [R`Thermosetting polymers`, R`extensive cross-linking on heating`, R`set permanently on moulding; cannot be re-softened`, R`Bakelite, urea–formaldehyde resin`]] } },
      { check: { q: R`Why can't a thermosetting plastic be remoulded?`, ans: R`On heating it forms an infusible, cross-linked network that cannot soften again.` } }
    ] },

    { h: R`Addition (chain-growth) polymerisation: free-radical mechanism`, t: [1], blocks: [
      R`In <b>addition polymerisation</b>, monomers with double or triple bonds (alkenes, dienes and their derivatives) add to each other with no loss of atoms. The polymer has the same empirical formula as the monomer. Chains grow quickly by adding one monomer at a time to an active end (a free radical, cation or anion): chain-growth polymerisation.`,
      { fig: figRadical, cap: R`Free-radical polymerisation of ethene with benzoyl peroxide as initiator.` },
      { ex: { q: R`A sample of polythene has an average molar mass of 28 000 g/mol. What is its average degree of polymerisation?`,
        steps: [R`Repeating unit –CH₂–CH₂– has mass 28 g/mol.`, R`n = 28 000/28 = 1000.`], ans: R`1000` } },
      { check: { q: R`What is the role of benzoyl peroxide in the polymerisation of ethene?`, ans: R`It is the initiator: it decomposes into free radicals that start the chain.` } }
    ] },

    { h: R`Polythene, Teflon, polyacrylonitrile and PVC`, t: [1], blocks: [
      { mol: [['C=C', 'ethene'], ['FC(F)=C(F)F', 'tetrafluoroethene'], ['C=CC#N', 'acrylonitrile'], ['C=CCl', 'vinyl chloride'], ['C=CC1=CC=CC=C1', 'styrene']], w: 130, h: 100, cap: R`Monomers of common addition polymers.` },
      { points: [
        R`<b>Low-density polythene (LDPE):</b> ethene at 350–570 K and 1000–2000 atm with traces of O₂ or peroxide (free radical). Highly branched; tough, flexible, chemically inert, poor conductor: squeeze bottles, toys, insulation, flexible pipes.`,
        R`<b>High-density polythene (HDPE):</b> ethene at 333–343 K and 6–7 atm with a <b>Ziegler–Natta catalyst</b> (triethylaluminium + titanium tetrachloride). Linear; tougher and harder: buckets, dustbins, bottles, pipes.`,
        R`<b>Teflon</b> (polytetrafluoroethene, PTFE): CF₂=CF₂ with a persulphate catalyst at high pressure. Chemically inert, resistant to corrosive reagents: non-stick coatings, oil seals, gaskets.`,
        R`<b>Polyacrylonitrile (PAN, orlon, acrilan)</b>: CH₂=CHCN with a peroxide catalyst; a substitute for wool in fibres.`,
        R`<b>PVC</b>: CH₂=CHCl; pipes, insulation, raincoats, flooring. <b>Polystyrene</b>: insulation, packaging, toys.`
      ] },
      { check: { q: R`Which catalyst is used to make HDPE?`, ans: R`Ziegler–Natta catalyst (Al(C₂H₅)₃ + TiCl₄).` } }
    ] },

    { h: R`Condensation (step-growth) polymerisation`, t: [2], blocks: [
      R`In <b>condensation polymerisation</b>, bi-functional (or tri-functional) monomers react with each other, usually with the loss of a small molecule (water, alcohol, HCl). Each step joins two units into a larger unit that still has reactive ends, so the chain grows step by step: <b>step-growth polymerisation</b>. The polymer has a different empirical formula from the monomers.`,
      { table: { head: [R``, R`Addition (chain-growth)`, R`Condensation (step-growth)`], rows: [
        [R`Monomers`, R`unsaturated (C=C)`, R`two or more functional groups`],
        [R`By-product`, R`none`, R`H₂O, ROH, HCl…`],
        [R`Empirical formula`, R`same as monomer`, R`different`],
        [R`Growth`, R`fast, at a chain end`, R`step by step between any two units`],
        [R`Examples`, R`polythene, PVC, Teflon`, R`nylon, terylene, Bakelite`]] } },
      { check: { q: R`Name the small molecule eliminated in forming nylon-6,6.`, ans: R`Water.` } }
    ] },

    { h: R`Polyamides: nylon-6,6 and nylon-6`, t: [2], blocks: [
      R`<b>Polyamides</b> contain amide links (–CO–NH–), like proteins.`,
      { points: [R`<b>Nylon-6,6</b> is made by heating <b>hexamethylenediamine</b> (6 C) and <b>adipic acid</b> (6 C) under pressure at high temperature: n H₂N(CH₂)₆NH₂ + n HOOC(CH₂)₄COOH → –[NH(CH₂)₆NHCO(CH₂)₄CO]ₙ– + 2n H₂O. The numbers give the carbons in each monomer. Used in sheets, bristles for brushes and in the textile industry.`, R`<b>Nylon-6</b> is made by heating <b>caprolactam</b> with water at high temperature (ring-opening): –[NH(CH₂)₅CO]ₙ–. Used for tyre cords, fabrics and ropes.`] },
      { mol: [['NCCCCCCN', 'hexamethylenediamine'], ['OC(=O)CCCCC(=O)O', 'adipic acid'], ['O=C1CCCCCN1', 'caprolactam']], w: 170, h: 100, cap: R`Monomers of nylon-6,6 (diamine + diacid) and nylon-6 (caprolactam).` },
      R`The strong hydrogen bonds between –NH– and C=O of neighbouring chains make nylons strong fibres.`,
      { ex: { q: R`What is the molar mass of the repeating unit of nylon-6,6?`,
        steps: [R`Repeat unit –NH(CH₂)₆NH–CO(CH₂)₄CO– = C₁₂H₂₂N₂O₂.`, R`12 × 12.01 + 22 × 1.008 + 2 × 14.01 + 2 × 16.00 = 226.3 g/mol.`], ans: R`≈ 226 g/mol` } },
      { check: { q: R`Why is it called nylon-6,6?`, ans: R`Both monomers (hexamethylenediamine and adipic acid) contain six carbon atoms.` } }
    ] },

    { h: R`Polyesters`, t: [2], blocks: [
      R`<b>Polyesters</b> are made by condensing a diol with a dicarboxylic acid. <b>Terylene (Dacron)</b> is made from <b>ethylene glycol</b> (ethane-1,2-diol) and <b>terephthalic acid</b> (benzene-1,4-dicarboxylic acid) at 420–460 K with a zinc acetate–antimony trioxide catalyst. It is crease-resistant and used in fabrics (blended with cotton and wool) and in safety helmets. <b>Glyptal</b> (from ethylene glycol and phthalic acid) is used in paints and lacquers.`,
      { mol: [['OCCO', 'ethylene glycol'], ['OC(=O)C1=CC=C(C=C1)C(=O)O', 'terephthalic acid']], w: 180, h: 110, cap: R`Monomers of terylene (Dacron).` },
      { check: { q: R`Name the monomers of terylene.`, ans: R`Ethylene glycol and terephthalic acid.` } }
    ] },

    { h: R`Phenol–formaldehyde polymers: Bakelite`, t: [2], blocks: [
      R`Phenol and formaldehyde (methanal) condense in the presence of an acid or base catalyst. First o- and p-hydroxymethylphenols form; these join through –CH₂– bridges to give a linear product, <b>Novolac</b> (used in paints). On heating with more formaldehyde, Novolac becomes extensively <b>cross-linked</b>, forming the infusible thermosetting solid <b>Bakelite</b>.`,
      { mol: [['OC1=CC=CC=C1', 'phenol'], ['C=O', 'methanal'], ['OCC1=CC=CC=C1O', 'o-hydroxymethylphenol']], w: 130, h: 100, cap: R`Phenol and methanal form hydroxymethylphenols, which link through –CH₂– groups.` },
      R`Bakelite is used for combs, phonograph records, electrical switches and handles of utensils. A related thermoset, <b>melamine–formaldehyde</b>, makes unbreakable crockery.`,
      { check: { q: R`Is Bakelite a thermoplastic or a thermosetting polymer?`, ans: R`Thermosetting (cross-linked network).` } }
    ] },

    { h: R`Homopolymers and copolymers`, t: [3], blocks: [
      R`A <b>homopolymer</b> is made from a single kind of monomer (polythene, PVC, nylon-6). A <b>copolymer</b> contains more than one kind of monomer unit (nylon-6,6 strictly has two). Chain-growth copolymers are made by polymerising a mixture of monomers: they have properties quite different from the homopolymers.`,
      { points: [R`<b>Buna-S</b> (styrene–butadiene rubber, SBR): buta-1,3-diene + styrene. Tough; a substitute for natural rubber in tyres, footwear, cable insulation.`, R`<b>Buna-N</b> (nitrile rubber): buta-1,3-diene + acrylonitrile. Resistant to petrol, lubricating oil and organic solvents: oil seals, tank linings.`] },
      { mol: [['C=CC=C', 'buta-1,3-diene'], ['C=CC1=CC=CC=C1', 'styrene'], ['C=CC#N', 'acrylonitrile']], w: 130, h: 100, cap: R`Buna-S = butadiene + styrene; Buna-N = butadiene + acrylonitrile. "Bu" = butadiene, "Na" = sodium (the old catalyst).` },
      { check: { q: R`Which copolymer is used for oil seals, and why?`, ans: R`Buna-N: it resists swelling in oil and solvents.` } }
    ] },

    { h: R`Natural rubber and vulcanisation`, t: [4], blocks: [
      R`<b>Natural rubber</b> is obtained as latex (a colloidal dispersion) from rubber trees. It is a linear polymer of <b>isoprene</b> (2-methylbuta-1,3-diene), <b>cis-1,4-polyisoprene</b>: –[CH₂–C(CH₃)=CH–CH₂]ₙ–. The cis arrangement makes the chains coil; they are held only by weak van der Waals forces, so rubber is elastic.`,
      { mol: [['C=CC(C)=C', 'isoprene'], ['C=CC(Cl)=C', 'chloroprene']], w: 140, h: 100, cap: R`Isoprene (natural rubber) and chloroprene (neoprene).` },
      R`Raw natural rubber becomes soft and sticky when warm, brittle when cold, has high water absorption and is attacked by oxidising agents. <b>Vulcanisation</b> (Charles Goodyear): heating rubber with sulphur (and an accelerator such as zinc oxide) at 373–415 K forms <b>sulphur cross-links</b> at the reactive allylic positions of the double bonds. The rubber becomes stiffer, stronger and less sticky over a wider temperature range. Tyre rubber contains about 5% S; more sulphur gives hard ebonite.`,
      { check: { q: R`What is the monomer of natural rubber, and what is its configuration in the polymer?`, ans: R`Isoprene; cis-1,4 linkage.` } }
    ] },

    { h: R`Synthetic rubbers`, t: [4], blocks: [
      R`<b>Synthetic rubbers</b> are vulcanisable polymers that can be stretched to twice their length and return. They are homopolymers of buta-1,3-diene derivatives or copolymers of butadiene with another unsaturated monomer:`,
      { table: { head: [R`Rubber`, R`Monomer(s)`, R`Properties and uses`], rows: [
        [R`Neoprene (polychloroprene)`, R`chloroprene (2-chlorobuta-1,3-diene)`, R`resistant to vegetable and mineral oils: conveyor belts, gaskets, hoses`],
        [R`Buna-N`, R`buta-1,3-diene + acrylonitrile`, R`oil and solvent resistant: oil seals, tank linings`],
        [R`Buna-S (SBR)`, R`buta-1,3-diene + styrene`, R`tyres, footwear, floor tiles`]] } },
      { check: { q: R`Which synthetic rubber is a homopolymer of chloroprene?`, ans: R`Neoprene.` } }
    ] },

    { h: R`Cellulose as a natural polymer`, t: [4], blocks: [
      R`<b>Cellulose</b> is the most abundant natural polymer, the structural material of plant cell walls (cotton is almost pure cellulose). It is a linear condensation polymer of <b>β-D-glucose</b> units joined by β(1→4) glycosidic links; hydrogen bonds between chains give strong fibres. Chemical modification gives semi-synthetic polymers: <b>cellulose acetate</b> (rayon, films), <b>cellulose nitrate</b> (gun-cotton, celluloid), and regenerated cellulose such as viscose rayon.`,
      { check: { q: R`Which monomer makes up cellulose?`, ans: R`β-D-glucose.` } }
    ] },

    { h: R`Important polymers: monomers, properties and uses`, t: [5], blocks: [
      { table: { head: [R`Polymer`, R`Monomer(s)`, R`Type`, R`Uses`], rows: [
        [R`Polythene (LDPE/HDPE)`, R`ethene`, R`addition, thermoplastic`, R`films, bottles, pipes, insulation`],
        [R`Teflon (PTFE)`, R`tetrafluoroethene`, R`addition`, R`non-stick coatings, seals`],
        [R`PVC`, R`vinyl chloride`, R`addition`, R`pipes, raincoats, flooring`],
        [R`Polystyrene`, R`styrene`, R`addition`, R`insulation, packaging, toys`],
        [R`Polyacrylonitrile (orlon)`, R`acrylonitrile`, R`addition`, R`wool substitute`],
        [R`PMMA (Perspex, Lucite)`, R`methyl methacrylate`, R`addition`, R`unbreakable windows, lenses`],
        [R`Nylon-6,6`, R`hexamethylenediamine + adipic acid`, R`condensation (polyamide)`, R`fabrics, bristles, ropes`],
        [R`Nylon-6`, R`caprolactam`, R`condensation`, R`tyre cords, fabrics`],
        [R`Terylene (Dacron)`, R`ethylene glycol + terephthalic acid`, R`condensation (polyester)`, R`fabrics, safety belts`],
        [R`Bakelite`, R`phenol + formaldehyde`, R`condensation, thermoset`, R`switches, combs, handles`],
        [R`Melamine–formaldehyde`, R`melamine + formaldehyde`, R`condensation, thermoset`, R`unbreakable crockery`],
        [R`Natural rubber`, R`isoprene (cis)`, R`addition`, R`tyres (after vulcanisation)`],
        [R`Neoprene`, R`chloroprene`, R`addition`, R`hoses, gaskets`]] } },
      { adv: [R`<b>Molar mass of polymers:</b> a polymer sample contains chains of different lengths, so we use averages. Number-average Mₙ = ΣNᵢMᵢ/ΣNᵢ; weight-average M_w = ΣNᵢMᵢ²/ΣNᵢMᵢ. The ratio M_w/Mₙ is the <b>polydispersity index</b> (PDI): 1 for natural polymers (monodisperse), more than 1 for synthetic polymers.`, R`Example: 30 molecules of mass 20 000 and 20 molecules of 30 000: Mₙ = (30 × 20 000 + 20 × 30 000)/50 = 24 000; M_w = (30 × 20 000² + 20 × 30 000²)/(1.2 × 10⁶) = 25 000; PDI = 1.04.`] },
      { check: { q: R`Which polymer is used to make unbreakable crockery?`, ans: R`Melamine–formaldehyde resin.` } }
    ] },

    { h: R`Biodegradable polymers`, t: [6], blocks: [
      R`Most synthetic polymers resist degradation and accumulate as solid waste. <b>Biodegradable polymers</b> contain functional groups (often ester or amide links) like those in biopolymers, so microorganisms can break them down:`,
      { points: [R`<b>PHBV</b> (poly-β-hydroxybutyrate-co-β-hydroxyvalerate): a copolymer of 3-hydroxybutanoic acid and 3-hydroxypentanoic acid. Used in packaging, orthopaedic devices and controlled drug release.`, R`<b>Nylon-2-nylon-6</b>: an alternating polyamide copolymer of glycine (H₂N–CH₂–COOH) and aminocaproic acid (H₂N–(CH₂)₅–COOH).`] },
      { mol: [['CC(O)CC(=O)O', '3-hydroxybutanoic acid'], ['CCC(O)CC(=O)O', '3-hydroxypentanoic acid'], ['NCC(=O)O', 'glycine'], ['NCCCCCC(=O)O', 'aminocaproic acid']], w: 140, h: 100, cap: R`Monomers of PHBV (first two) and nylon-2-nylon-6 (last two).` },
      { check: { q: R`Name the monomers of nylon-2-nylon-6.`, ans: R`Glycine and aminocaproic acid (6-aminohexanoic acid).` } }
    ] },

    { h: R`Applications of polymers`, t: [6], blocks: [
      R`Polymers are used in almost every part of modern life: packaging (polythene, polystyrene), construction (PVC pipes, insulation), clothing (nylon, polyester, acrylic fibres), transport (tyres, lightweight composites), electrical insulation (PVC, Bakelite), medicine (sutures, implants, drug delivery with biodegradable polymers), household goods (non-stick pans, crockery) and adhesives and paints (glyptal, epoxy resins).`,
      R`The problem of plastic waste is addressed by recycling, using biodegradable polymers, and reducing single-use plastics.`,
      { check: { q: R`Give one advantage of biodegradable polymers in medicine.`, ans: R`They can be used as sutures or drug carriers that the body breaks down safely, so they need not be removed.` } }
    ] }
  ],
  summary: [
    R`Polymers: macromolecules of repeating monomers. Source: natural, semi-synthetic, synthetic. Structure: linear, branched, cross-linked. Forces: elastomers < thermoplastics < fibres; thermosets cross-link.`,
    R`Addition (chain-growth, free radical: initiation, propagation, termination): LDPE (high P, peroxide), HDPE (Ziegler–Natta), Teflon, PAN, PVC, polystyrene.`,
    R`Condensation (step-growth, loses H₂O etc.): nylon-6,6 (hexamethylenediamine + adipic acid), nylon-6 (caprolactam), terylene (ethylene glycol + terephthalic acid), Bakelite (phenol + HCHO; Novolac → cross-linked).`,
    R`Copolymers: Buna-S (butadiene + styrene), Buna-N (butadiene + acrylonitrile). Natural rubber: cis-1,4-polyisoprene; vulcanisation with S (cross-links). Neoprene from chloroprene.`,
    R`Biodegradable: PHBV (3-hydroxybutanoic + 3-hydroxypentanoic acids), nylon-2-nylon-6 (glycine + aminocaproic acid). Mₙ = ΣNM/ΣN; M_w = ΣNM²/ΣNM; PDI = M_w/Mₙ.`
  ],
  refs: [
    { t: R`OpenStax Organic Chemistry, §31.1 Chain-Growth Polymers`, url: 'https://openstax.org/books/organic-chemistry/pages/31-1-chain-growth-polymers' },
    { t: R`Wikipedia: Addition polymer`, url: 'https://en.wikipedia.org/wiki/Addition_polymer' },
    { t: R`Wikipedia: Condensation polymer`, url: 'https://en.wikipedia.org/wiki/Condensation_polymer' },
    { t: R`Wikipedia: Vulcanization`, url: 'https://en.wikipedia.org/wiki/Vulcanization' },
    { t: R`Wikipedia: Biodegradable polymer`, url: 'https://en.wikipedia.org/wiki/Biodegradable_polymer' }
  ]
});
})();
