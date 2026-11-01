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
- Octet rule and Lewis symbols
- Concept of ionic and covalent bonds
- Limitations of the octet rule
# Ionic bonding @1 >3
- Formation of ionic bonds and factors affecting it
- Calculation of lattice enthalpy (Born–Haber cycle) >4
# Covalent bonding @2 >5
- Lewis structures and formal charge
- Bond parameters: bond length, bond angle, bond enthalpy and bond order >6
- Electronegativity and polar covalent bonds >7
- Fajans' rules [M] >7
# Dipole moment @3 >8
- Dipole moment and polarity of molecules
- Percentage ionic character
# VSEPR theory and shapes of molecules @4 >9
- The VSEPR model and the effect of lone pairs
- Linear, angular, triangular, tetrahedral, pyramidal, square planar, square pyramidal, trigonal bipyramidal and octahedral shapes
# Valence bond theory @5 >10
- Important features of valence bond theory; orbital overlap
- σ and π bonds
# Hybridisation @5 >11
- Hybridisation involving s, p and d orbitals (sp, sp², sp³, sp³d, sp³d²)
- Shapes of molecules from hybridisation
# Resonance @6 >12
- Resonance structures and the resonance hybrid
# Molecular orbital theory @7 >13
- Important features; linear combination of atomic orbitals (LCAO)
- Bonding and antibonding molecular orbitals; σ and π molecular orbitals
- MO energy diagrams and configurations of homonuclear diatomic molecules (up to Ne₂)
- Bond order, bond length, bond energy and magnetic behaviour
# Metallic bonding [M]
- Elementary idea of metallic bonding
# Hydrogen bonding @8 >14
- Intermolecular and intramolecular hydrogen bonds
- Applications of hydrogen bonding
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
# Methods of purification [M] @0
- Crystallisation and sublimation
- Distillation: simple, fractional, under reduced pressure and steam distillation
- Differential extraction
- Chromatography: principles and applications
# Qualitative analysis @1
- Detection of carbon and hydrogen
- Lassaigne's test for nitrogen, sulphur and halogens
- Detection of phosphorus [M]
# Quantitative analysis @2
- Estimation of carbon and hydrogen (combustion method)
- Estimation of nitrogen: Dumas and Kjeldahl methods [M]
- Estimation of halogens, sulphur and phosphorus (Carius method) [M]
# Empirical and molecular formulae @3
- Calculating empirical and molecular formulae from analysis data
# Numerical problems @4
- Numerical problems in organic quantitative analysis
`,

  'goc': `
# Tetravalency of carbon and shapes of molecules @0
- Tetravalency of carbon
- Hybridisation (sp, sp², sp³) and shapes of simple molecules
- σ and π bonds
# Classification of organic compounds @1
- Classification by structure and by functional groups (containing halogens, oxygen, nitrogen and sulphur)
- Homologous series
# Nomenclature @1
- Trivial (common) names
- IUPAC nomenclature of hydrocarbons, simple cyclic compounds and their mono- and bi-functional derivatives
# Isomerism @2
- Structural isomerism: chain, position, functional group, metamerism and tautomerism
- Geometrical (cis–trans) isomerism
- Optical isomerism: chirality and enantiomers
- Diastereomers and meso compounds (up to two asymmetric centres) [A]
# Covalent bond fission @3
- Homolytic and heterolytic fission
# Reactive intermediates @4
- Free radicals, carbocations and carbanions: formation and structure
- Stability of carbocations, carbanions and free radicals
# Electrophiles and nucleophiles @5
- Electrophiles and nucleophiles with examples
# Electronic displacements in a covalent bond @6
- Inductive effect
- Electromeric effect [M]
- Resonance (mesomeric) effect
- Hyperconjugation
- Effects of hydrogen bonding [A]
# Acidity and basicity of organic compounds [A]
- Effect of structure on the acidity of carboxylic acids, phenols and alcohols
- Effect of structure on the basicity of amines
# Common types of organic reactions @7
- Substitution, addition, elimination and rearrangement reactions
`,

  'hydrocarbons': `
# Alkanes @0
- Classification, isomerism and IUPAC nomenclature of hydrocarbons
- Physical properties; effect of branching on melting point, boiling point and density
- Preparation from alkyl halides and from aliphatic carboxylic acids
- Conformations of ethane: Sawhorse and Newman projections
- Conformations of butane (Newman projections) [A]
- Reactions: combustion, halogenation and its free-radical mechanism, oxidation
- Allylic and benzylic halogenation [A]
# Alkenes @1
- Structure, geometrical isomerism and physical properties
- Preparation by elimination reactions
- Mechanism of electrophilic addition; addition of hydrogen, halogens, water and hydrogen halides
- Markovnikov's rule and the peroxide effect
- Addition of HOX [A]
- Acid-catalysed hydration
- Reactions with KMnO₄ and ozone (ozonolysis)
- Polymerisation
# Alkynes @2
- Structure and preparation
- Acidic character; metal acetylides
- Addition of hydrogen, halogens, water and hydrogen halides
- Reduction of alkenes and alkynes
- Polymerisation; cyclic polymerisation of alkynes
# Aromatic hydrocarbons @3
- Nomenclature and isomerism
- Structure of benzene; resonance and aromaticity
- Mechanism of electrophilic substitution
- Halogenation, nitration and sulphonation
- Friedel–Crafts alkylation and acylation
# Directive influence of substituents @4
- Ortho/para- and meta-directing groups in monosubstituted benzene
- Activating and deactivating groups
`,

  'environmental-chemistry': `
# Environmental pollution @0
- Pollutants and their types
# Tropospheric pollution @0
- Gaseous pollutants: oxides of sulphur, nitrogen and carbon; hydrocarbons
- Particulate pollutants
- Classical and photochemical smog
# Stratospheric pollution @1
- Formation and breakdown of ozone
- The ozone hole and the role of CFCs
# Acid rain and global warming @2
- Acid rain: causes and effects
- Greenhouse effect and global warming
# Water pollution @3
- Causes: pathogens, organic waste and chemical pollutants
- Dissolved oxygen and biochemical oxygen demand (BOD)
- International standards for drinking water
# Soil pollution and industrial waste @4
- Pesticides and herbicides
- Industrial and domestic waste
# Strategies to control pollution @5
- Waste management and control strategies
# Green chemistry @5
- Principles of green chemistry; atom economy and safer solvents
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
# General introduction to groups 13 to 18 @0
- Electronic configuration @1
- General trends in physical and chemical properties across periods and down groups
- Oxidation states and trends in chemical reactivity
- Inert pair effect @3
# Unique behaviour of the first element @2
- Anomalous properties of boron, carbon, nitrogen, oxygen and fluorine
# Group 13: the boron family [A] @4
- Reactivity towards acids, alkalis and halogens
- Borax, orthoboric acid and diborane
- Boron trifluoride, aluminium chloride and alums
- Uses of boron and aluminium
# Group 14: the carbon family [A]
- Reactivity towards water and halogens
- Allotropes of carbon and uses of carbon
- Carbon monoxide and carbon dioxide
- Silicon dioxide, silicones, silicates and zeolites
# Group 15: the nitrogen family [A]
- Reactivity towards hydrogen, oxygen and halogens
- Allotropes of phosphorus
- Dinitrogen, ammonia and nitric acid
- Phosphine, phosphorus trichloride and phosphorus pentachloride
- Oxides of nitrogen and oxoacids of phosphorus
# Group 16: the oxygen family [A]
- Reactivity towards hydrogen, oxygen and halogens; simple oxides
- Allotropes of sulphur
- Dioxygen and ozone
- Sulphur dioxide, sulphuric acid and the oxoacids of sulphur
# Group 17: the halogens [A]
- Reactivity towards hydrogen, oxygen and metals
- Chlorine and hydrogen chloride
- Interhalogen compounds and oxoacids of halogens
- Bleaching powder
# Group 18: the noble gases [A]
- Chemical properties and uses
- Compounds of xenon with fluorine and oxygen
`,

  'd-f-block': `
# Transition elements: introduction @0
- Position in the periodic table
- Electronic configurations of the d-block elements
# Occurrence and general characteristics @1
- Occurrence and characteristics of transition elements
# General trends in the first transition series @2
- Physical properties and metallic character
- Atomic and ionic radii
- Ionisation enthalpy
- Oxidation states and their stability; standard electrode potentials
- Colour and magnetic properties
- Catalytic behaviour
- Complex formation, interstitial compounds and alloy formation
# Potassium dichromate and potassium permanganate @3
- Preparation, properties and uses
- Structures and reactions of the oxoanions of chromium and manganese
# Lanthanoids @4
- Electronic configuration and oxidation states
- Lanthanoid contraction and its consequences
# Actinoids @5
- Electronic configuration and oxidation states
- Actinoid contraction and general characteristics
# Applications of d- and f-block elements [A]
- Uses of transition and inner transition elements and their compounds
`,

  'coordination-compounds': `
# Werner's theory @0
- Double salts and coordination compounds
- Werner's theory: primary and secondary valencies
# Important terms @1
- Coordination entity, central atom, ligands and coordination sphere
- Coordination number, denticity, chelation and ambidentate ligands
- Oxidation number of the central atom; homoleptic and heteroleptic complexes
# IUPAC nomenclature @2
- Writing formulas and names of mononuclear coordination compounds
# Isomerism @3
- Structural isomerism: ionisation, linkage, coordination and hydrate isomerism
- Stereoisomerism: geometrical (cis–trans) and optical isomerism
# Valence bond theory @4
- Hybridisation and geometry: linear, tetrahedral, square planar and octahedral
- Inner- and outer-orbital complexes; magnetic properties
- Limitations of valence bond theory
# Crystal field theory @5
- Crystal field splitting in octahedral and tetrahedral fields
- Spectrochemical series; strong- and weak-field ligands
- Crystal field stabilisation energy; high-spin and low-spin complexes
- Colour and magnetic properties (spin-only moment) of 3d-series complexes
# Stability of coordination compounds [A]
- Stability of complexes and the chelate effect
# Metal carbonyls [A]
- Structure and bonding in metal carbonyls
# Importance and applications @6
- Uses in qualitative analysis, extraction of metals and biological systems
`,

  'haloalkanes': `
# Classification and nomenclature @0
- Classification of haloalkanes and haloarenes
- IUPAC nomenclature
# Nature of the C–X bond @1
- Polarity, length and strength of the carbon–halogen bond
# Methods of preparation @0
- From alcohols and from hydrocarbons
- Halogen exchange (Finkelstein and Swarts reactions)
- Preparation of haloarenes
# Physical properties
- Melting and boiling points, density and solubility
# Nucleophilic substitution reactions @2
- SN2 mechanism and inversion of configuration
- SN1 mechanism, carbocation rearrangements and racemisation
- Stereochemical aspects of nucleophilic substitution
# Elimination reactions @3
- Dehydrohalogenation and Saytzeff's rule
- Elimination versus substitution
# Reactions with metals
- Grignard reagents and their reactions
- Wurtz, Fittig and Wurtz–Fittig reactions
# Reactions of haloarenes
- Nucleophilic aromatic substitution in haloarenes and substituted haloarenes
- Electrophilic substitution in haloarenes
# Polyhalogen compounds @4
- Uses and environmental effects of chloroform, iodoform, freons and DDT [M]
`,

  'oxygen-compounds': `
# Alcohols: preparation and properties @0
- Classification and nomenclature
- Preparation of alcohols
- Physical properties and hydrogen bonding
# Reactions of alcohols @0
- Reactions with sodium, phosphorus halides, ZnCl₂/conc. HCl and thionyl chloride
- Identification of primary, secondary and tertiary alcohols
- Esterification
- Dehydration to alkenes and ethers; mechanism of dehydration
- Oxidation to aldehydes, ketones and carboxylic acids
# Phenols @1
- Preparation and physical properties
- Acidic nature of phenol and effect of substituents
- Electrophilic substitution: halogenation, nitration and sulphonation
- Reimer–Tiemann reaction
- Kolbe's reaction
- Esterification, etherification and the synthesis of aspirin
- Oxidation and reduction of phenol
# Ethers @2
- Structure and nomenclature
- Williamson synthesis
- Cleavage of the C–O bond
# Aldehydes and ketones: structure and preparation @3
- Nature of the carbonyl group
- Preparation from alcohols, acid chlorides, nitriles and esters
- Benzaldehyde from toluene and benzene
# Nucleophilic addition reactions @3
- Relative reactivities of aldehydes and ketones
- Addition of HCN, NaHSO₃, alcohols and Grignard reagents
- Addition of ammonia and its derivatives: oximes and hydrazones
# Other reactions of aldehydes and ketones @4
- Oxidation; reduction (Clemmensen and Wolff–Kishner)
- Acidity of α-hydrogen; aldol condensation
- Cannizzaro reaction
- Haloform reaction
# Tests for aldehydes and ketones @5
- Tollens' and Fehling's tests; distinguishing aldehydes from ketones
# Carboxylic acids @6
- Physical properties
- Preparation from nitriles, Grignard reagents and hydrolysis of esters and amides
- Benzoic acid from alkylbenzenes
- Acidic strength and the factors affecting it
- Reactions: reduction, halogenation and formation of esters, acid chlorides and amides
`,

  'nitrogen-compounds': `
# Structure, classification and nomenclature of amines @0
- Primary, secondary and tertiary amines
- Structure and IUPAC nomenclature
# Preparation of amines
- Reduction of nitro compounds, nitriles and amides
- Hoffmann bromamide degradation
- Gabriel phthalimide synthesis
# Basic character of amines @1
- Basicity of aliphatic and aromatic amines; effect of substituents
# Chemical reactions of amines
- Alkylation and acylation
- Carbylamine reaction
- Reaction with nitrous acid
# Identification of primary, secondary and tertiary amines @2
- Hinsberg test and other distinguishing tests
# Diazonium salts @3
- Preparation (diazotisation) and importance in synthetic organic chemistry
- Sandmeyer and related replacement reactions
- Azo coupling reactions
`,

  'biomolecules': `
# Carbohydrates: classification @0
- Monosaccharides, oligosaccharides and polysaccharides
- Aldoses and ketoses; reducing and non-reducing sugars
# Monosaccharides @0
- Glucose: open-chain and cyclic structures; anomers
- Oxidation and reduction of glucose
- Glycoside formation
- Fructose
# Disaccharides and polysaccharides @0
- Sucrose, maltose and lactose: constituent monosaccharides and hydrolysis
- Starch, cellulose and glycogen
# Proteins @1
- α-Amino acids and zwitterions
- Peptide bond and polypeptides
- Fibrous and globular proteins
- Primary, secondary, tertiary and quaternary structures
- Denaturation of proteins
# Enzymes [M]
- Enzymes as biological catalysts
# Vitamins [M] @2
- Classification and functions of vitamins; deficiency diseases
# Nucleic acids @3
- Chemical composition: nucleosides and nucleotides
- Structure of DNA and RNA
- Biological functions of nucleic acids @4
# Hormones [M] @5
- General introduction to hormones
`,

  'polymers': `
# Classification of polymers @0
- By source: natural, semi-synthetic and synthetic
- By structure: linear, branched and cross-linked
- By molecular forces: elastomers, fibres, thermoplastics and thermosetting polymers
# Addition polymerisation @1
- Free-radical (chain-growth) mechanism
- Polythene, Teflon, polyacrylonitrile and PVC
# Condensation polymerisation @2
- Step-growth polymerisation
- Polyamides: nylon-6,6 and nylon-6
- Polyesters
- Phenol–formaldehyde polymers: Bakelite
# Homopolymers and copolymers @3
- Homopolymers and copolymers (Buna-S, Buna-N)
# Rubber and cellulose @4
- Natural rubber and vulcanisation
- Synthetic rubbers
- Cellulose as a natural polymer
# Important polymers @5
- Monomers, properties and uses of polythene, Teflon, PVC, nylon and Bakelite
# Biodegradable polymers and applications @6
- Biodegradable polymers (PHBV, nylon-2-nylon-6)
- Applications of polymers
`,

  'everyday-chemistry': `
# Drugs and drug–target interaction @0
- Classification of drugs
- Enzymes as drug targets: catalytic action and inhibition
- Receptors as drug targets: agonists and antagonists
# Antacids and antihistamines @1
- Antacids
- Antihistamines
# Tranquilizers and analgesics @2
- Tranquilizers
- Non-narcotic and narcotic analgesics
# Antimicrobials @3
- Antibiotics: bactericidal and bacteriostatic; broad- and narrow-spectrum
- Antiseptics and disinfectants
# Antifertility drugs @4
- Synthetic hormones used in antifertility drugs (examples, no structures)
# Artificial sweeteners @5
- Artificial sweetening agents (names only)
# Soaps and detergents @6
- Soaps: saponification
- Synthetic detergents: anionic, cationic and non-ionic
- Cleansing action
`,

  'practical-chemistry': `
# Detection of extra elements @0
- Nitrogen, sulphur and halogens in organic compounds
# Tests for functional groups @1
- Hydroxyl group: alcoholic and phenolic
- Carbonyl group: aldehydes and ketones
- Carboxyl group
- Amino group
- Nitro group [A]
# Preparation of compounds [M] @2
- Inorganic compounds: Mohr's salt and potash alum
- Organic compounds: acetanilide, p-nitroacetanilide, aniline yellow and iodoform
# Titrimetric analysis [M] @3
- Acids, bases and the use of indicators
- Oxalic acid vs KMnO₄ and Mohr's salt vs KMnO₄
# Qualitative salt analysis: cations @4
- Group separation of cations
- JEE Main list: Pb²⁺, Cu²⁺, Al³⁺, Fe³⁺, Zn²⁺, Ni²⁺, Ca²⁺, Ba²⁺, Mg²⁺, NH₄⁺ [M]
- JEE Advanced list (groups I–V): Ag⁺, Hg²⁺, Cu²⁺, Pb²⁺, Fe³⁺, Cr³⁺, Al³⁺, Ca²⁺, Ba²⁺, Zn²⁺, Mn²⁺, Mg²⁺ [A]
# Qualitative salt analysis: anions @4
- JEE Main list: CO₃²⁻, S²⁻, SO₄²⁻, NO₃⁻, NO₂⁻, Cl⁻, Br⁻, I⁻ [M]
- JEE Advanced list: nitrate, halides (except fluoride), carbonate, bicarbonate, sulphate and sulphide [A]
# Physical chemistry experiments [M] @5
- Enthalpy of solution of CuSO₄
- Enthalpy of neutralisation of a strong acid and a strong base
- Preparation of lyophilic and lyophobic sols @6
- Kinetic study of the reaction of iodide ions with hydrogen peroxide @7
`
};
