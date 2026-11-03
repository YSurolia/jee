// Complete syllabus outline for Chemistry: every topic and subtopic of each chapter.
// Built from the official JEE (Main) 2027 syllabus (NTA, October 2026) and the JEE (Advanced) 2026 syllabus
// (IIT Roorkee information brochure, Annexure-I). Chapters marked adv: true in js/data/chemistry-advanced.js are
// JEE Advanced only as a whole, so their topics carry no extra tag.
// Format: "# Topic" lines, each followed by "- subtopic" lines.
//   [A] = in the JEE Advanced syllabus only, [M] = in the JEE Main syllabus only (no tag = in both).
//   @k  = the topic's index in the chapter's `syllabus` list (links to its solved examples).
window.JEE = window.JEE || {};
JEE.outline = JEE.outline || {};
JEE.outline.chemistry = {
  'basic-concepts': `
# Matter and its nature @0 >1
- Importance and scope of chemistry >1
- States of matter; elements, compounds and mixtures >1
- Properties of matter and their measurement; SI units >2
- Uncertainty in measurement: scientific notation, significant figures, precision and accuracy >3
# Dalton's atomic theory @1 >4
- Postulates of Dalton's atomic theory >4
- Concept of atom, molecule, element and compound >4
# Laws of chemical combination @2 >5
- Law of conservation of mass >5
- Law of definite proportions >5
- Law of multiple proportions >5
- Gay-Lussac's law of gaseous volumes >6
- Avogadro's law >6
# Atomic and molecular masses @3 >7
- Atomic mass unit and average atomic mass >7
- Molecular mass and formula mass >8
# Mole concept and molar mass @4 >9
- The mole and Avogadro's number >9
- Molar mass; molar volume of a gas >10
# Percentage composition @5 >11
- Mass percentage of elements in a compound >11
# Empirical and molecular formulae @6 >12
- Finding empirical and molecular formulae from percentage composition >12
# Chemical equations and stoichiometry @7 >13
- Balancing chemical equations >13
- Mass–mass, mass–volume and volume–volume calculations >14
- Limiting reagent and percentage yield @8 >15
- Calculations involving redox, neutralisation and displacement reactions [A] >16
# Concentration of solutions >17
- Mass percent, mole fraction, molarity and molality >17
- Equivalent mass and normality [A] >18
`,

  'atomic-structure': `
# Subatomic particles and early atomic models @0 >1
- Discovery of the electron, proton and neutron >1
- Thomson's model of the atom >2
- Rutherford's nuclear model and its drawbacks >2
- Atomic number, mass number, isotopes and isobars >3
# Electromagnetic radiation and the photoelectric effect @1 >4
- Nature of electromagnetic radiation; the electromagnetic spectrum >4
- Planck's quantum theory >5
- Photoelectric effect >6
# Spectrum of the hydrogen atom @2 >7
- Emission and absorption spectra >7
- Line spectrum of hydrogen; Rydberg formula and spectral series >8
# Bohr's model of the hydrogen atom @3 >9
- Postulates of Bohr's model >9
- Derivation of the energy of the electron and radii of the orbits >9
- Explanation of the hydrogen spectrum >10
- Limitations of Bohr's model >10
# Dual nature of matter @4 >11
- Wave–particle duality; de Broglie relationship >11
# Heisenberg uncertainty principle @5 >12
- Uncertainty principle and its significance >12
# Quantum mechanical model of the atom >13
- Elementary ideas of quantum mechanics; important features of the model >13
- Atomic orbitals as one-electron wave functions >13
- Variation of ψ and ψ² with r for 1s and 2s orbitals (probability density plots) >14
- Energies of orbitals in the hydrogen atom >15
# Quantum numbers @6 >16
- Principal, azimuthal (angular momentum) and magnetic quantum numbers and their significance >16
- Electron spin and the spin quantum number >16
# Shapes of atomic orbitals @7 >17
- Shapes of s, p and d orbitals >17
- Radial and angular nodes @8 >18
# Rules for filling electrons in orbitals @9 >19
- Aufbau principle and the (n + l) rule >19
- Pauli's exclusion principle >20
- Hund's rule of maximum multiplicity >20
# Electronic configuration of atoms @10 >21
- Electronic configurations of elements >21
- Extra stability of half-filled and completely filled orbitals >21
`,

  'chemical-bonding': `
# Kossel–Lewis approach @0 >2
- Octet rule and Lewis symbols >2
- Concept of ionic and covalent bonds >2
- Limitations of the octet rule >2
# Ionic bonding @1 >3
- Formation of ionic bonds and factors affecting it >3
- Calculation of lattice enthalpy (Born–Haber cycle) >4
# Covalent bonding @2 >5
- Lewis structures and formal charge >5
- Bond parameters: bond length, bond angle, bond enthalpy and bond order >6
- Electronegativity and polar covalent bonds >7
- Fajans' rules [M] >7
# Dipole moment @3 >8
- Dipole moment and polarity of molecules >8
- Percentage ionic character >8
# VSEPR theory and shapes of molecules @4 >9
- The VSEPR model and the effect of lone pairs >9
- Linear, angular, triangular, tetrahedral, pyramidal, square planar, square pyramidal, trigonal bipyramidal and octahedral shapes >9
# Valence bond theory @5 >10
- Important features of valence bond theory; orbital overlap >10
- σ and π bonds >10
# Hybridisation @5 >11
- Hybridisation involving s, p and d orbitals (sp, sp², sp³, sp³d, sp³d²) >11
- Shapes of molecules from hybridisation >11
# Resonance @6 >12
- Resonance structures and the resonance hybrid >12
# Molecular orbital theory @7 >13
- Important features; linear combination of atomic orbitals (LCAO) >13
- Bonding and antibonding molecular orbitals; σ and π molecular orbitals >13
- MO energy diagrams and configurations of homonuclear diatomic molecules (up to Ne₂) >13
- Bond order, bond length, bond energy and magnetic behaviour >13
# Metallic bonding [M] >14
- Elementary idea of metallic bonding >14
# Hydrogen bonding @8 >15
- Intermolecular and intramolecular hydrogen bonds >15
- Applications of hydrogen bonding >15
`,

  'states-of-matter': `
# Gas laws @0 >1
- Boyle's, Charles', Gay-Lussac's and Avogadro's laws >1
- Absolute (kelvin) scale of temperature >1
# Ideal gas equation @1 >2
- PV = nRT and the values of R >2
- Density and molar mass of a gas >2
# Dalton's law of partial pressures @2 >3
- Partial pressure and mole fraction >3
- Pressure of a gas collected over water >3
# Diffusion of gases @3 >4
- Graham's law of diffusion and effusion >4
# Kinetic theory of gases @4 >5
- Postulates of the kinetic molecular theory >5
- Kinetic gas equation >5
- Average, root-mean-square and most probable speeds and their relation with temperature >6
# Real gases @5 >7
- Deviation from ideal behaviour; compressibility factor >7
- van der Waals equation; meaning of the constants a and b >8
# Intermolecular forces @6 >9
- Types: London (dispersion), dipole–dipole, dipole–induced dipole forces and hydrogen bonding >9
- Distance dependence of the forces and their effect on properties >9
# Liquid state @7 >10
- Vapour pressure >10
- Surface tension >11
- Viscosity >11
`,

  'chemical-thermodynamics': `
# Fundamentals of thermodynamics @0 >1
- System, surroundings and types of systems >1
- Extensive and intensive properties >2
- State functions and path functions >2
- Types of processes >2
# First law of thermodynamics @1 >4
- Internal energy, work (pressure–volume only) and heat >3
- First law: ΔU = q + w >4
- Enthalpy; ΔH = ΔU + Δn(g)RT >5
- Measuring ΔU and ΔH: calorimetry >6
# Heat capacity @2 >7
- Heat capacity, molar heat capacity and specific heat >7
# Enthalpy changes @4 >8
- Standard state and standard enthalpy of reaction >8
- Enthalpies of formation, combustion, atomisation and bond dissociation >9
- Enthalpies of phase transition: fusion, vaporisation and sublimation >10
- Enthalpies of solution, hydration and ionisation; lattice enthalpy >11
# Hess's law of constant heat summation @3 >12
- Hess's law and its applications >12
# Entropy and the second law @5 >14
- Spontaneous processes >13
- Entropy and entropy change >14
- Second law: ΔS of the universe as the criterion for spontaneity >15
# Gibbs energy and spontaneity @6 >16
- Gibbs energy, G = H − TS >16
- ΔG of the system as the criterion of spontaneity and equilibrium >17
- Effect of temperature on spontaneity >17
# Gibbs energy and the equilibrium constant @7 >18
- Standard Gibbs energy change and the equilibrium constant: ΔG° = −RT ln K >18
`,

  'equilibrium': `
# Equilibrium in physical processes @0 >1
- Dynamic nature of equilibrium >1
- Solid–liquid, liquid–gas, gas–gas and solid–gas equilibria >1
- Henry's law; general characteristics of physical equilibria >1
# Equilibrium in chemical processes @1 >2
- Law of chemical equilibrium (law of mass action) >2
- Equilibrium constants Kp and Kc and their relation >3
- Homogeneous and heterogeneous equilibria >4
- Applications of equilibrium constants >5
# Reaction quotient @2 >6
- Reaction quotient Q and the direction of reaction >6
- Significance of ΔG and ΔG° in chemical equilibrium >7
# Factors affecting equilibrium @3 >8
- Le Chatelier's principle >8
- Effect of concentration, pressure and temperature >8
- Effect of a catalyst >8
# Acids, bases and ionic equilibrium @4 >9
- Weak and strong electrolytes; ionisation of electrolytes >9
- Arrhenius, Brønsted–Lowry and Lewis concepts of acids and bases >9
- Ionisation constants of weak acids and bases >10
- Acid–base equilibria including multistage ionisation >10
# Ionisation of water and the pH scale @5 >11
- Ionic product of water >11
- pH scale; pH of acids and bases >11
# Common-ion effect @6 >12
- Common-ion effect on ionisation >12
# Hydrolysis of salts @7 >13
- Hydrolysis of salts and the pH of their solutions >13
# Buffer solutions @8 >14
- Acidic and basic buffers; Henderson–Hasselbalch equation >14
# Solubility equilibria @9 >15
- Solubility of sparingly soluble salts; solubility product >15
- Applications of the solubility product >15
`,

  'periodicity': `
# Classification of elements @0 >1
- Need for classification; early attempts (Döbereiner, Newlands, Mendeleev) >1
- Modern periodic law and the present form of the periodic table >2
- Nomenclature of elements with atomic number above 100 >3
# Electronic configuration and types of elements @1 >4
- Electronic configurations of elements; periods and groups >4
- s-, p-, d- and f-block elements >5
# Atomic and ionic radii @2 >6
- Atomic and ionic radii; isoelectronic species >6
- Trends across periods and down groups >7
# Ionisation enthalpy @3 >8
- Factors affecting ionisation enthalpy; trends and exceptions >8
# Electron gain enthalpy @4 >9
- Trends and exceptions >9
# Electronegativity @6 >10
- Electronegativity and its trends >10
# Valence and oxidation states @5 >11
- Periodicity of valence and oxidation states >11
# Chemical reactivity @7 >12
- Periodic trends in chemical properties; metallic and non-metallic character >12
- Anomalous properties of second-period elements >12
- Acidic and basic character of oxides >12
`,

  'hydrogen': `
# Position of hydrogen in the periodic table @0 >1
- Resemblance with alkali metals and halogens >1
- Occurrence and isotopes (protium, deuterium, tritium) >2
# Dihydrogen @1 >3
- Laboratory and commercial preparation >3
- Physical and chemical properties >4
- Uses of dihydrogen >5
# Hydrides @2 >6
- Ionic (saline) hydrides >6
- Covalent (molecular) hydrides: electron-deficient, electron-precise and electron-rich >7
- Interstitial (metallic) hydrides >8
# Water @3 >9
- Physical and chemical properties of water >9
- Heavy water: properties and uses >10
# Hydrogen peroxide @4 >11
- Preparation >11
- Reactions: oxidising and reducing behaviour >12
- Structure, strength and uses >12
# Hydrogen as a fuel @5 >13
- Hydrogen economy >13
`,

  's-block': `
# Group 1: alkali metals @0 >1
- Electronic configuration, atomic and ionic radii, ionisation and hydration enthalpies >1
- Physical properties and flame colours >1
# Group 2: alkaline earth metals @0 >2
- Electronic configuration and general trends >2
- Physical properties and flame colours >2
# Chemical reactivity @1 >3
- Reactivity towards air and water; oxides, peroxides and superoxides >3
- Reactivity towards dihydrogen, halogens and acids >4
# Reducing nature @2 >5
- Reducing nature and electrode potentials >5
- Solutions in liquid ammonia >6
# Compounds of s-block elements @3 >7
- Oxides and hydroxides: basic character and solubility >7
- Halides >8
- Salts of oxoacids: carbonates, sulphates and nitrates; thermal stability and solubility >9
# Anomalous behaviour of lithium and beryllium @4 >10
- Anomalous properties of lithium; diagonal relationship with magnesium >10
- Anomalous properties of beryllium; diagonal relationship with aluminium >11
# Important compounds of sodium @5 >12
- Sodium carbonate (Solvay process) >12
- Sodium chloride >13
- Sodium hydroxide >13
- Sodium hydrogencarbonate >13
# Important compounds of calcium @6 >14
- Calcium oxide and calcium hydroxide >14
- Calcium carbonate >14
- Calcium sulphate and plaster of Paris >15
# Uses of s-block elements >16
- Uses of alkali and alkaline earth metals >16
`,

  'purification-characterisation': `
# Methods of purification [M] @0 >1
- Crystallisation and sublimation >1
- Distillation: simple, fractional, under reduced pressure and steam distillation >2
- Differential extraction >3
- Chromatography: principles and applications >4
# Qualitative analysis @1 >5
- Detection of carbon and hydrogen >5
- Lassaigne's test for nitrogen, sulphur and halogens >6
- Detection of phosphorus [M] >7
# Quantitative analysis @2 >8
- Estimation of carbon and hydrogen (combustion method) >8
- Estimation of nitrogen: Dumas and Kjeldahl methods [M] >9
- Estimation of halogens, sulphur and phosphorus (Carius method) [M] >10
# Empirical and molecular formulae @3 >11
- Calculating empirical and molecular formulae from analysis data >11
# Numerical problems @4 >12
- Numerical problems in organic quantitative analysis >12
`,

  'goc': `
# Tetravalency of carbon and shapes of molecules @0 >1
- Tetravalency of carbon >1
- Hybridisation (sp, sp², sp³) and shapes of simple molecules >1
- σ and π bonds >2
# Classification of organic compounds @1 >3
- Classification by structure and by functional groups (containing halogens, oxygen, nitrogen and sulphur) >3
- Homologous series >4
# Nomenclature @1 >5
- Trivial (common) names >5
- IUPAC nomenclature of hydrocarbons, simple cyclic compounds and their mono- and bi-functional derivatives >5
# Isomerism @2 >7
- Structural isomerism: chain, position, functional group, metamerism and tautomerism >7
- Geometrical (cis–trans) isomerism >8
- Optical isomerism: chirality and enantiomers >9
- Diastereomers and meso compounds (up to two asymmetric centres) [A] >10
# Covalent bond fission @3 >11
- Homolytic and heterolytic fission >11
# Reactive intermediates @4 >12
- Free radicals, carbocations and carbanions: formation and structure >12
- Stability of carbocations, carbanions and free radicals >13
# Electrophiles and nucleophiles @5 >14
- Electrophiles and nucleophiles with examples >14
# Electronic displacements in a covalent bond @6 >15
- Inductive effect >15
- Electromeric effect [M] >16
- Resonance (mesomeric) effect >17
- Hyperconjugation >18
- Effects of hydrogen bonding [A] >19
# Acidity and basicity of organic compounds [A] >20
- Effect of structure on the acidity of carboxylic acids, phenols and alcohols >20
- Effect of structure on the basicity of amines >21
# Common types of organic reactions @7 >22
- Substitution, addition, elimination and rearrangement reactions >22
`,

  'hydrocarbons': `
# Alkanes @0 >1
- Classification, isomerism and IUPAC nomenclature of hydrocarbons >1
- Physical properties; effect of branching on melting point, boiling point and density >2
- Preparation from alkyl halides and from aliphatic carboxylic acids >3
- Conformations of ethane: Sawhorse and Newman projections >4
- Conformations of butane (Newman projections) [A] >5
- Reactions: combustion, halogenation and its free-radical mechanism, oxidation >6
- Allylic and benzylic halogenation [A] >7
# Alkenes @1 >8
- Structure, geometrical isomerism and physical properties >8
- Preparation by elimination reactions >9
- Mechanism of electrophilic addition; addition of hydrogen, halogens, water and hydrogen halides >10
- Markovnikov's rule and the peroxide effect >11
- Addition of HOX [A] >12
- Acid-catalysed hydration >13
- Reactions with KMnO₄ and ozone (ozonolysis) >14
- Polymerisation >15
# Alkynes @2 >16
- Structure and preparation >16
- Acidic character; metal acetylides >17
- Addition of hydrogen, halogens, water and hydrogen halides >18
- Reduction of alkenes and alkynes >19
- Polymerisation; cyclic polymerisation of alkynes >20
# Aromatic hydrocarbons @3 >21
- Nomenclature and isomerism >21
- Structure of benzene; resonance and aromaticity >22
- Mechanism of electrophilic substitution >23
- Halogenation, nitration and sulphonation >24
- Friedel–Crafts alkylation and acylation >25
# Directive influence of substituents @4 >26
- Ortho/para- and meta-directing groups in monosubstituted benzene >26
- Activating and deactivating groups >27
`,

  'environmental-chemistry': `
# Environmental pollution @0 >1
- Pollutants and their types >1
# Tropospheric pollution @0 >2
- Gaseous pollutants: oxides of sulphur, nitrogen and carbon; hydrocarbons >2
- Particulate pollutants >3
- Classical and photochemical smog >4
# Stratospheric pollution @1 >5
- Formation and breakdown of ozone >5
- The ozone hole and the role of CFCs >6
# Acid rain and global warming @2 >7
- Acid rain: causes and effects >7
- Greenhouse effect and global warming >8
# Water pollution @3 >9
- Causes: pathogens, organic waste and chemical pollutants >9
- Dissolved oxygen and biochemical oxygen demand (BOD) >10
- International standards for drinking water >11
# Soil pollution and industrial waste @4 >12
- Pesticides and herbicides >12
- Industrial and domestic waste >13
# Strategies to control pollution @5 >14
- Waste management and control strategies >14
# Green chemistry @5 >15
- Principles of green chemistry; atom economy and safer solvents >15
`,

  'solid-state': `
# Classification of solids @0 >1
- Crystalline and amorphous solids >1
- Molecular, ionic, metallic and covalent (network) solids >2
# Crystal lattices and unit cells @1 >3
- Crystal lattice and unit cell; primitive and centred unit cells >3
- Seven crystal systems and cell parameters (a, b, c, α, β, γ); Bravais lattices >4
# Close packing @2 >5
- Close packing in one, two and three dimensions >5
- Hexagonal close packing (hcp) and cubic close packing (ccp or fcc) >5
- Body-centred cubic (bcc) packing >5
- Packing efficiency of simple cubic, bcc, fcc and hcp lattices >7
# Number of atoms in a unit cell and density @3 >6
- Contribution of corner, edge, face and body atoms >6
- Relation between edge length and atomic radius >7
- Density of a unit cell >8
# Voids and ionic crystals @4 >9
- Tetrahedral and octahedral voids and their number >9
- Nearest neighbours and coordination number >10
- Ionic radii and the radius ratio rule >10
- Simple ionic structures (NaCl, CsCl, ZnS) >11
# Imperfections in solids @5 >12
- Point defects: Schottky and Frenkel defects >12
- Impurity defects >13
`,

  'solutions': `
# Types of solutions and concentration @0 >1
- Types of solutions >1
- Mass and volume percentage, mole fraction, molarity and molality >2
# Solubility >3
- Solubility of solids in liquids >3
- Solubility of gases in liquids; Henry's law >4
# Vapour pressure and Raoult's law @1 >5
- Vapour pressure of liquid solutions >5
- Raoult's law >6
# Ideal and non-ideal solutions @2 >7
- Ideal solutions >7
- Non-ideal solutions: positive and negative deviations >8
- Vapour pressure–composition plots for ideal and non-ideal solutions; azeotropes >8
# Colligative properties @3 >9
- Relative lowering of vapour pressure >9
- Elevation of boiling point >10
- Depression of freezing point >10
- Osmosis and osmotic pressure >11
# Determination of molecular mass @4 >12
- Molecular mass from colligative properties >12
# Abnormal molar mass @5 >13
- Association and dissociation of solutes >13
- van 't Hoff factor and its significance >13
`,

  'redox-electrochemistry': `
# Oxidation and reduction @0 >1
- Electronic concepts of oxidation and reduction; redox reactions >1
- Oxidation number and rules for assigning it >2
- Types of redox reactions, including disproportionation >3
# Balancing redox reactions @1 >4
- Oxidation-number method >4
- Half-reaction (ion–electron) method >5
# Electrolytic and metallic conduction @2 >6
- Electrolytic and metallic conduction >6
# Conductance in electrolytic solutions @3 >7
- Resistance, conductance and conductivity (specific conductance) >7
- Molar conductivity and its variation with concentration >7
- Equivalent conductivity [A] >7
# Kohlrausch's law and its applications @4 >8
- Limiting molar conductivity of weak electrolytes >8
- Degree of dissociation from conductivity >8
# Electrochemical cells @5 >9
- Electrolytic and galvanic cells; half-cell and cell reactions >9
- Types of electrodes; standard hydrogen electrode >9
- Electrode potentials and standard electrode potentials; electrochemical series >10
- emf of a galvanic cell and its measurement >11
# Nernst equation and its applications @6 >12
- Nernst equation for electrodes and cells >12
- Equilibrium constant from the standard cell potential >12
# Cell potential and Gibbs energy @7 >13
- ΔG = −nFE; electrochemical work >13
# Electrolysis @8 >14
- Products of electrolysis >14
- Faraday's laws of electrolysis >15
# Batteries and fuel cells @9 >16
- Primary batteries: dry cell >16
- Secondary batteries: lead accumulator >16
- Fuel cells >16
# Corrosion [A] >17
- Electrochemical theory of rusting and its prevention >17
`,

  'chemical-kinetics': `
# Rate of a chemical reaction @0 >1
- Average and instantaneous rate >1
- Expressing rate in terms of different reactants and products >1
# Factors affecting the rate @1 >2
- Concentration, temperature, pressure and catalyst >2
# Elementary and complex reactions @2 >3
- Elementary steps and the rate-determining step >3
# Order and molecularity @3 >4
- Order and molecularity of a reaction and the difference between them >4
- Pseudo-first-order reactions >4
# Rate law and rate constant @4 >5
- Rate law (differential form); units of the rate constant >5
- Finding the order: initial-rate method >5
# Integrated rate equations @5 >6
- Zero-order reactions: integrated form, characteristics and half-life >6
- First-order reactions: integrated form, characteristics and half-life >7
# Effect of temperature on rate @6 >8
- Arrhenius equation >8
- Activation energy and its calculation >9
# Collision theory [M] @7 >10
- Collision theory of bimolecular gaseous reactions (no derivation) >10
# Catalysis [A] >11
- Homogeneous and heterogeneous catalysis >11
- Activity and selectivity of solid catalysts >11
- Enzyme catalysis and its mechanism >11
`,

  'surface-chemistry': `
# Adsorption @0 >1
- Adsorption and absorption; adsorbate and adsorbent >1
- Physisorption and chemisorption >2
# Factors affecting adsorption @1 >3
- Effect of the nature of the gas, surface area, pressure and temperature >3
- Freundlich adsorption isotherm >4
- Applications of adsorption >5
# Colloids and their classification @2 >6
- True solutions, colloids and suspensions >6
- Classification by physical state, by interaction with the medium (lyophilic, lyophobic) and by type of particle >7
# Preparation and purification of colloids @3 >8
- Chemical methods, Bredig's arc method and peptisation >8
- Dialysis, electrodialysis and ultrafiltration >9
# Properties of colloids @4 >10
- Tyndall effect and colour >10
- Brownian movement >11
- Charge on colloidal particles; electrophoresis >12
- Coagulation and the Hardy–Schulze rule; protection of colloids >13
# Emulsions, surfactants and micelles @5 >14
- Emulsions: oil-in-water and water-in-oil; emulsifiers >14
- Surfactants >15
- Micelles and the critical micelle concentration >16
`,

  'metallurgy': `
# Occurrence of metals @0 >1
- Minerals and ores; important ores of iron, copper, zinc and aluminium >1
# Concentration of ores @1 >2
- Hydraulic washing >2
- Magnetic separation >2
- Froth flotation >3
- Leaching >4
# Conversion to oxide @2 >5
- Calcination >5
- Roasting >5
# Thermodynamic principles of metallurgy @3 >6
- Gibbs energy and Ellingham diagrams >6
- Extraction of iron from its oxides (blast furnace) >7
- Extraction of copper (self-reduction) >8
- Extraction of zinc from zinc oxide >9
# Electrochemical principles of metallurgy @4 >10
- ΔG° = −nFE° in metallurgy >10
- Extraction of aluminium (Hall–Héroult process) >11
# Cyanide process @5 >12
- Extraction of silver and gold >12
# Refining of metals @6 >13
- Distillation and liquation >13
- Electrolytic refining >14
- Zone refining >15
- Vapour-phase refining: Mond process and van Arkel method >16
`,

  'p-block': `
# General introduction to groups 13 to 18 @0 >1
- Electronic configuration @1 >1
- General trends in physical and chemical properties across periods and down groups >1
- Oxidation states and trends in chemical reactivity >2
- Inert pair effect @3 >2
# Unique behaviour of the first element @2 >3
- Anomalous properties of boron, carbon, nitrogen, oxygen and fluorine >3
# Group 13: the boron family [A] @4 >4
- Reactivity towards acids, alkalis and halogens >4
- Borax, orthoboric acid and diborane >5
- Boron trifluoride, aluminium chloride and alums >6
- Uses of boron and aluminium >6
# Group 14: the carbon family [A] >7
- Reactivity towards water and halogens >7
- Allotropes of carbon and uses of carbon >8
- Carbon monoxide and carbon dioxide >9
- Silicon dioxide, silicones, silicates and zeolites >10
# Group 15: the nitrogen family [A] >11
- Reactivity towards hydrogen, oxygen and halogens >11
- Allotropes of phosphorus >14
- Dinitrogen, ammonia and nitric acid >12
- Phosphine, phosphorus trichloride and phosphorus pentachloride >14
- Oxides of nitrogen and oxoacids of phosphorus >13
# Group 16: the oxygen family [A] >16
- Reactivity towards hydrogen, oxygen and halogens; simple oxides >16
- Allotropes of sulphur >18
- Dioxygen and ozone >17
- Sulphur dioxide, sulphuric acid and the oxoacids of sulphur >18
# Group 17: the halogens [A] >20
- Reactivity towards hydrogen, oxygen and metals >20
- Chlorine and hydrogen chloride >21
- Interhalogen compounds and oxoacids of halogens >22
- Bleaching powder >21
# Group 18: the noble gases [A] >23
- Chemical properties and uses >23
- Compounds of xenon with fluorine and oxygen >23
`,

  'd-f-block': `
# Transition elements: introduction @0 >1
- Position in the periodic table >1
- Electronic configurations of the d-block elements >1
# Occurrence and general characteristics @1 >2
- Occurrence and characteristics of transition elements >2
# General trends in the first transition series @2 >3
- Physical properties and metallic character >3
- Atomic and ionic radii >4
- Ionisation enthalpy >5
- Oxidation states and their stability; standard electrode potentials >6
- Colour and magnetic properties >8
- Catalytic behaviour >10
- Complex formation, interstitial compounds and alloy formation >11
# Potassium dichromate and potassium permanganate @3 >12
- Preparation, properties and uses >12
- Structures and reactions of the oxoanions of chromium and manganese >12
# Lanthanoids @4 >14
- Electronic configuration and oxidation states >14
- Lanthanoid contraction and its consequences >15
# Actinoids @5 >16
- Electronic configuration and oxidation states >16
- Actinoid contraction and general characteristics >17
# Applications of d- and f-block elements [A] >18
- Uses of transition and inner transition elements and their compounds >18
`,

  'coordination-compounds': `
# Werner's theory @0 >1
- Double salts and coordination compounds >1
- Werner's theory: primary and secondary valencies >1
# Important terms @1 >2
- Coordination entity, central atom, ligands and coordination sphere >2
- Coordination number, denticity, chelation and ambidentate ligands >3
- Oxidation number of the central atom; homoleptic and heteroleptic complexes >4
# IUPAC nomenclature @2 >5
- Writing formulas and names of mononuclear coordination compounds >5
# Isomerism @3 >6
- Structural isomerism: ionisation, linkage, coordination and hydrate isomerism >6
- Stereoisomerism: geometrical (cis–trans) and optical isomerism >7
# Valence bond theory @4 >9
- Hybridisation and geometry: linear, tetrahedral, square planar and octahedral >9
- Inner- and outer-orbital complexes; magnetic properties >10
- Limitations of valence bond theory >11
# Crystal field theory @5 >12
- Crystal field splitting in octahedral and tetrahedral fields >12
- Spectrochemical series; strong- and weak-field ligands >13
- Crystal field stabilisation energy; high-spin and low-spin complexes >14
- Colour and magnetic properties (spin-only moment) of 3d-series complexes >15
# Stability of coordination compounds [A] >16
- Stability of complexes and the chelate effect >16
# Metal carbonyls [A] >17
- Structure and bonding in metal carbonyls >17
# Importance and applications @6 >18
- Uses in qualitative analysis, extraction of metals and biological systems >18
`,

  'haloalkanes': `
# Classification and nomenclature @0 >1
- Classification of haloalkanes and haloarenes >1
- IUPAC nomenclature >2
# Nature of the C–X bond @1 >3
- Polarity, length and strength of the carbon–halogen bond >3
# Methods of preparation @0 >4
- From alcohols and from hydrocarbons >4
- Halogen exchange (Finkelstein and Swarts reactions) >5
- Preparation of haloarenes >6
# Physical properties >7
- Melting and boiling points, density and solubility >7
# Nucleophilic substitution reactions @2 >8
- SN2 mechanism and inversion of configuration >8
- SN1 mechanism, carbocation rearrangements and racemisation >9
- Stereochemical aspects of nucleophilic substitution >10
# Elimination reactions @3 >11
- Dehydrohalogenation and Saytzeff's rule >11
- Elimination versus substitution >12
# Reactions with metals >13
- Grignard reagents and their reactions >13
- Wurtz, Fittig and Wurtz–Fittig reactions >14
# Reactions of haloarenes >15
- Nucleophilic aromatic substitution in haloarenes and substituted haloarenes >15
- Electrophilic substitution in haloarenes >16
# Polyhalogen compounds @4 >17
- Uses and environmental effects of chloroform, iodoform, freons and DDT [M] >17
`,

  'oxygen-compounds': `
# Alcohols: preparation and properties @0 >1
- Classification and nomenclature >1
- Preparation of alcohols >2
- Physical properties and hydrogen bonding >3
# Reactions of alcohols @0 >4
- Reactions with sodium, phosphorus halides, ZnCl₂/conc. HCl and thionyl chloride >4
- Identification of primary, secondary and tertiary alcohols >5
- Esterification >6
- Dehydration to alkenes and ethers; mechanism of dehydration >7
- Oxidation to aldehydes, ketones and carboxylic acids >8
# Phenols @1 >9
- Preparation and physical properties >9
- Acidic nature of phenol and effect of substituents >10
- Electrophilic substitution: halogenation, nitration and sulphonation >11
- Reimer–Tiemann reaction >12
- Kolbe's reaction >13
- Esterification, etherification and the synthesis of aspirin >14
- Oxidation and reduction of phenol >15
# Ethers @2 >16
- Structure and nomenclature >16
- Williamson synthesis >17
- Cleavage of the C–O bond >18
# Aldehydes and ketones: structure and preparation @3 >19
- Nature of the carbonyl group >19
- Preparation from alcohols, acid chlorides, nitriles and esters >20
- Benzaldehyde from toluene and benzene >21
# Nucleophilic addition reactions @3 >23
- Relative reactivities of aldehydes and ketones >22
- Addition of HCN, NaHSO₃, alcohols and Grignard reagents >23
- Addition of ammonia and its derivatives: oximes and hydrazones >24
# Other reactions of aldehydes and ketones @4 >25
- Oxidation; reduction (Clemmensen and Wolff–Kishner) >25
- Acidity of α-hydrogen; aldol condensation >26
- Cannizzaro reaction >27
- Haloform reaction >28
# Tests for aldehydes and ketones @5 >29
- Tollens' and Fehling's tests; distinguishing aldehydes from ketones >29
# Carboxylic acids @6 >30
- Physical properties >30
- Preparation from nitriles, Grignard reagents and hydrolysis of esters and amides >31
- Benzoic acid from alkylbenzenes >32
- Acidic strength and the factors affecting it >33
- Reactions: reduction, halogenation and formation of esters, acid chlorides and amides >34
`,

  'nitrogen-compounds': `
# Structure, classification and nomenclature of amines @0 >1
- Primary, secondary and tertiary amines >1
- Structure and IUPAC nomenclature >2
# Preparation of amines >3
- Reduction of nitro compounds, nitriles and amides >3
- Hoffmann bromamide degradation >4
- Gabriel phthalimide synthesis >5
# Basic character of amines @1 >6
- Basicity of aliphatic and aromatic amines; effect of substituents >6
# Chemical reactions of amines >7
- Alkylation and acylation >7
- Carbylamine reaction >8
- Reaction with nitrous acid >9
# Identification of primary, secondary and tertiary amines @2 >10
- Hinsberg test and other distinguishing tests >10
# Diazonium salts @3 >11
- Preparation (diazotisation) and importance in synthetic organic chemistry >11
- Sandmeyer and related replacement reactions >12
- Azo coupling reactions >13
`,

  'biomolecules': `
# Carbohydrates: classification @0 >1
- Monosaccharides, oligosaccharides and polysaccharides >1
- Aldoses and ketoses; reducing and non-reducing sugars >2
# Monosaccharides @0 >3
- Glucose: open-chain and cyclic structures; anomers >3
- Oxidation and reduction of glucose >4
- Glycoside formation >5
- Fructose >6
# Disaccharides and polysaccharides @0 >7
- Sucrose, maltose and lactose: constituent monosaccharides and hydrolysis >7
- Starch, cellulose and glycogen >8
# Proteins @1 >9
- α-Amino acids and zwitterions >9
- Peptide bond and polypeptides >10
- Fibrous and globular proteins >11
- Primary, secondary, tertiary and quaternary structures >12
- Denaturation of proteins >13
# Enzymes [M] >14
- Enzymes as biological catalysts >14
# Vitamins [M] @2 >15
- Classification and functions of vitamins; deficiency diseases >15
# Nucleic acids @3 >16
- Chemical composition: nucleosides and nucleotides >16
- Structure of DNA and RNA >17
- Biological functions of nucleic acids @4 >18
# Hormones [M] @5 >19
- General introduction to hormones >19
`,

  'polymers': `
# Classification of polymers @0 >1
- By source: natural, semi-synthetic and synthetic >1
- By structure: linear, branched and cross-linked >2
- By molecular forces: elastomers, fibres, thermoplastics and thermosetting polymers >3
# Addition polymerisation @1 >4
- Free-radical (chain-growth) mechanism >4
- Polythene, Teflon, polyacrylonitrile and PVC >5
# Condensation polymerisation @2 >6
- Step-growth polymerisation >6
- Polyamides: nylon-6,6 and nylon-6 >7
- Polyesters >8
- Phenol–formaldehyde polymers: Bakelite >9
# Homopolymers and copolymers @3 >10
- Homopolymers and copolymers (Buna-S, Buna-N) >10
# Rubber and cellulose @4 >11
- Natural rubber and vulcanisation >11
- Synthetic rubbers >12
- Cellulose as a natural polymer >13
# Important polymers @5 >14
- Monomers, properties and uses of polythene, Teflon, PVC, nylon and Bakelite >14
# Biodegradable polymers and applications @6 >15
- Biodegradable polymers (PHBV, nylon-2-nylon-6) >15
- Applications of polymers >16
`,

  'everyday-chemistry': `
# Drugs and drug–target interaction @0 >1
- Classification of drugs >1
- Enzymes as drug targets: catalytic action and inhibition >2
- Receptors as drug targets: agonists and antagonists >3
# Antacids and antihistamines @1 >4
- Antacids >4
- Antihistamines >5
# Tranquilizers and analgesics @2 >6
- Tranquilizers >6
- Non-narcotic and narcotic analgesics >7
# Antimicrobials @3 >8
- Antibiotics: bactericidal and bacteriostatic; broad- and narrow-spectrum >8
- Antiseptics and disinfectants >9
# Antifertility drugs @4 >10
- Synthetic hormones used in antifertility drugs (examples, no structures) >10
# Artificial sweeteners @5 >11
- Artificial sweetening agents (names only) >11
# Soaps and detergents @6 >12
- Soaps: saponification >12
- Synthetic detergents: anionic, cationic and non-ionic >13
- Cleansing action >14
`,

  'practical-chemistry': `
# Detection of extra elements @0 >1
- Nitrogen, sulphur and halogens in organic compounds >1
# Tests for functional groups @1 >2
- Hydroxyl group: alcoholic and phenolic >2
- Carbonyl group: aldehydes and ketones >3
- Carboxyl group >4
- Amino group >5
- Nitro group [A] >6
# Preparation of compounds [M] @2 >7
- Inorganic compounds: Mohr's salt and potash alum >7
- Organic compounds: acetanilide, p-nitroacetanilide, aniline yellow and iodoform >8
# Titrimetric analysis [M] @3 >9
- Acids, bases and the use of indicators >9
- Oxalic acid vs KMnO₄ and Mohr's salt vs KMnO₄ >10
# Qualitative salt analysis: cations @4 >11
- Group separation of cations >11
- JEE Main list: Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, Ni²⁺, Ca²⁺, Ba²⁺, Mg²⁺, NH₄⁺ [M] >12
- JEE Advanced list (groups I–V): Ag⁺, Hg²⁺, Cu²⁺, Pb²⁺, Fe³⁺, Cr³⁺, Al³⁺, Ca²⁺, Ba²⁺, Zn²⁺, Mn²⁺, Mg²⁺ [A] >13
# Qualitative salt analysis: anions @4 >14
- JEE Main list: CO₃²⁻, S²⁻, SO₄²⁻, NO₃⁻, NO₂⁻, Cl⁻, Br⁻, I⁻ [M] >14
- JEE Advanced list: nitrate, halides (except fluoride), carbonate, bicarbonate, sulphate and sulphide [A] >15
# Physical chemistry experiments [M] @5 >16
- Enthalpy of solution of CuSO₄ >16
- Enthalpy of neutralisation of a strong acid and a strong base >17
- Preparation of lyophilic and lyophobic sols @6 >18
- Kinetic study of the reaction of iodide ions with hydrogen peroxide @7 >19
`
};
