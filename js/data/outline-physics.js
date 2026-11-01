// Complete syllabus outline for Physics: every topic and subtopic of each chapter.
// Built from the official JEE (Main) 2027 syllabus (NTA, October 2026) and the JEE (Advanced) 2026 syllabus
// (IIT Roorkee information brochure, Annexure-I).
// Format: "# Topic" lines, each followed by "- subtopic" lines.
//   [A] = in the JEE Advanced syllabus only, [M] = in the JEE Main syllabus only (no tag = in both).
//   @k  = the topic's index in the chapter's `syllabus` list in js/data/physics.js (links to its solved examples).
window.JEE = window.JEE || {};
JEE.outline = JEE.outline || {};
JEE.outline.physics = {
  'units-measurement': `
# Physical quantities and systems of units @0 >1
- Need for measurement; physical quantities and their units
- Systems of units: CGS, FPS, MKS and SI >2
- The seven SI base units; supplementary units (radian, steradian) >2
- SI prefixes; practical units (light year, astronomical unit, parsec, atomic mass unit) >4
# Fundamental and derived units @1 >3
- Fundamental (base) quantities and units
- Derived quantities and their units
- Rules for writing SI units and symbols
# Measuring instruments and least count @2 >5
- Least count of a metre scale, vernier callipers and screw gauge
- Zero error and zero correction >5
- Methods of measurement for the standard experiments [A]
# Significant figures @3 >7
- Rules for counting significant figures
- Rounding off >8
- Significant figures in addition, subtraction, multiplication and division >8
# Errors in measurement @4 >9
- Systematic errors, random errors and least-count error
- Absolute, mean absolute, relative and percentage errors >10
- Combination of errors in sums, differences, products, quotients and powers >11
- Accuracy and precision >12
- Error analysis of experimental results
# Dimensions of physical quantities @5 >13
- Dimensions and dimensional formulae
- Dimensional formulae of common quantities
- Dimensionless quantities and dimensional constants
# Dimensional analysis and its applications @6 >14
- Principle of homogeneity of dimensions
- Checking whether an equation is dimensionally correct
- Converting a quantity from one system of units to another
- Deducing the relation between physical quantities
- Limitations of dimensional analysis >15
`,

  'kinematics': `
# Frame of reference @0 >1
- Rest and motion are relative
- Frame of reference: origin, axes and a clock
- Motion in one, two and three dimensions
- The particle (point-object) approximation
# Position, path length and displacement @1 >2
- Position on a straight line and choice of positive direction
- Path length (distance) and displacement
- Position–time relation for motion in a straight line
# Speed and velocity @2 >3
- Average speed and average velocity
- Instantaneous velocity (v = dx/dt) and instantaneous speed
- Unit conversion between km/h and m/s
# Uniform and non-uniform motion; acceleration @3 >4
- Uniform and non-uniform motion
- Average and instantaneous acceleration
- Uniformly accelerated motion
- Motion with variable acceleration using calculus
# Equations of uniformly accelerated motion @3 >5
- v = u + at, s = ut + ½at² and v² = u² + 2as
- Derivations using graphs and using calculus
- Distance covered in the nth second
- Motion under gravity: free fall and bodies thrown upward
# Position–time and velocity–time graphs @4 >6
- Position–time graphs: slope gives velocity
- Velocity–time graphs: slope gives acceleration, area gives displacement >7
- Acceleration–time graphs
- Finding distance and displacement from graphs
# Relative velocity @5 >8
- Relative velocity in one dimension
- Overtaking and crossing problems
# Scalars and vectors @6 >9
- Scalar and vector quantities
- Position and displacement vectors; equality of vectors
- Multiplying a vector by a real number
- Addition and subtraction: triangle and parallelogram laws
- Resolution of a vector; unit vectors
- Adding vectors by components
# Motion in a plane @7 >10
- Position vector and displacement in a plane
- Velocity and acceleration in two dimensions
- Motion in a plane with constant acceleration
- Relative velocity in two dimensions: rain and umbrella, river crossing >11
# Projectile motion @8 >12
- Independence of horizontal and vertical motion
- Equation of the path: a parabola
- Time of flight, maximum height and horizontal range
- Maximum range and complementary angles
- Projectile thrown horizontally from a height
# Uniform circular motion @9 >13
- Angular displacement, angular velocity, period and frequency
- Relation between linear and angular speed (v = ωr)
- Centripetal acceleration (v²/r)
`,

  'laws-of-motion': `
# Force and inertia @0 >2
- Aristotle's fallacy and Galileo's law of inertia >2
- Inertia and mass
- Newton's first law of motion >3
# Newton's second law; momentum @1 >4
- Linear momentum
- Second law: F = dp/dt = ma
- Units of force; the newton
# Impulse @2 >5
- Impulse and impulsive forces
- Impulse as change in momentum; force–time graphs
# Newton's third law @1 >6
- Action and reaction pairs
- Free-body diagrams >7
- Normal reaction, tension and spring force >7
- Connected bodies: strings and pulleys >8
# Conservation of linear momentum @3 >10
- Law of conservation of linear momentum
- Applications: recoil of a gun, explosions, rocket propulsion >11
# Equilibrium of concurrent forces @4 >12
- Condition for equilibrium of a particle
- Lami's theorem
# Inertial and non-inertial frames [A] >9
- Inertial frames of reference
- Uniformly accelerated frames and pseudo forces
- Apparent weight in a lift
# Friction @5 >13
- Static and kinetic friction
- Laws of friction; coefficient of friction
- Angle of friction and angle of repose >14
- Motion of blocks on rough horizontal and inclined surfaces >14
# Rolling friction [M] @6 >15
- Rolling friction
- Ways of reducing friction
# Dynamics of uniform circular motion @7 >16
- Centripetal force and its sources
- Vehicle on a level circular road
- Conical pendulum
# Banking of roads @8 >17
- Vehicle on a banked road
- Optimum, maximum and minimum safe speeds
`,

  'work-energy-power': `
# Work @0 >2
- Scalar (dot) product of two vectors >1
- Work done by a constant force >2
- Work done by a variable force (area under the force–displacement graph) >4
- Positive, negative and zero work >3
# Kinetic energy and the work–energy theorem @2 >5
- Kinetic energy
- Work–energy theorem for constant and variable forces
# Potential energy @1 >6
- Gravitational potential energy near the Earth
- Force as the negative gradient of potential energy (F = −dU/dx) >8
- Stable, unstable and neutral equilibrium from potential-energy curves >8
# Potential energy of a spring @4 >9
- Spring force and Hooke's law
- Elastic potential energy ½kx²
# Conservative and non-conservative forces @6 >7
- Definition and examples
- Work done around a closed path
# Conservation of mechanical energy @5 >10
- Law of conservation of mechanical energy
- Different forms of energy; conservation of total energy >11
# Power @3 >12
- Average and instantaneous power (P = F·v)
- Units: watt, horsepower; kilowatt-hour
# Motion in a vertical circle @7 >13
- Speed and tension at different points
- Minimum speeds at the top and bottom to complete the circle
# Collisions @8 >14
- Elastic and inelastic collisions
- Collisions in one dimension; coefficient of restitution >15
- Collisions in two dimensions >17
- Perfectly inelastic collisions and loss of kinetic energy >16
`,

  'rotational-motion': `
# Centre of mass @0 >2
- Centre of mass of a two-particle system
- Centre of mass of a system of particles and of a rigid body >3
- Centre of mass of a rod, ring, disc and other symmetric bodies >3
- Motion of the centre of mass of a system of particles >4
# Basic concepts of rotational motion @7 >1
- Rigid body; translational and rotational motion
- Angular displacement, angular velocity and angular acceleration >5
- Equations of rotational motion with constant angular acceleration >5
- Comparison of linear and rotational motion >13
# Torque (moment of a force) @1 >7
- Vector (cross) product of two vectors >6
- Torque τ = r × F
- Couple and its moment
# Angular momentum @2 >8
- Angular momentum of a particle and of a rigid body
- Relation τ = dL/dt
- Conservation of angular momentum and its applications >9
# Moment of inertia and radius of gyration @3 >10
- Moment of inertia
- Radius of gyration
- Kinetic energy of rotation
# Theorems of parallel and perpendicular axes @4 >11
- Perpendicular axes theorem
- Parallel axes theorem
- Applications of the two theorems
# Moments of inertia of simple bodies @5 >12
- Ring, disc, thin rod, solid and hollow sphere, solid and hollow cylinder
# Dynamics of rotation about a fixed axis @7 >13
- Rotational form of Newton's second law (τ = Iα)
- Work and power in rotational motion
# Equilibrium of rigid bodies @6 >14
- Conditions for translational and rotational equilibrium
- Principle of moments; centre of gravity
# Rolling motion [A] @8 >15
- Rolling without slipping (v = ωR)
- Kinetic energy of a rolling body
- Rings, cylinders and spheres rolling down an incline
# Collision of point masses with rigid bodies [A] >16
- Angular impulse
- Conservation of angular momentum in collisions with rigid bodies
`,

  'gravitation': `
# Universal law of gravitation @0 >1
- Newton's law of gravitation; the constant G
- Gravitational force due to spherical shells and spheres >3
- Gravitational field intensity [A] >2
# Acceleration due to gravity @1 >4
- Acceleration due to gravity at the Earth's surface
- Variation of g with altitude >5
- Variation of g with depth >6
# Kepler's laws of planetary motion @2 >7
- Law of orbits, law of areas and law of periods
- Law of areas and conservation of angular momentum
# Gravitational potential energy and potential @3 >8
- Gravitational potential energy of a two-body system
- Gravitational potential due to a point mass >9
- Gravitational field and potential of a spherical shell and a solid sphere [A] >9
# Escape velocity @4 >10
- Escape velocity from the Earth's surface
# Motion of satellites @5 >11
- Orbital velocity @6
- Time period of a satellite
- Energy of an orbiting satellite; binding energy >12
- Geostationary orbits [A] >13
- Weightlessness >14
`,

  'solids-liquids': `
# Elastic behaviour of solids @0 >1
- Elasticity and plasticity
- Stress and strain: longitudinal, volume and shear >2
- Hooke's law; the stress–strain curve >3
- Elastic potential energy of a stretched wire >4
# Elastic moduli @1 >4
- Young's modulus
- Bulk modulus and compressibility
- Modulus of rigidity (shear modulus)
# Pressure in fluids @2 >5
- Pressure due to a fluid column; effect of gravity on fluid pressure
- Atmospheric pressure and gauge pressure
# Pascal's law and its applications @3 >6
- Pascal's law
- Hydraulic lift and hydraulic brakes
# Buoyancy [A] >7
- Archimedes' principle
- Floating bodies
# Viscosity @4 >8
- Coefficient of viscosity
- Stokes' law >9
- Terminal velocity >9
# Streamline and turbulent flow @5 >10
- Streamline flow and the equation of continuity
- Turbulent flow; critical velocity and Reynolds number [M] >11
# Bernoulli's principle and its applications @6 >12
- Bernoulli's equation
- Speed of efflux (Torricelli's law), venturimeter, dynamic lift >13
# Surface tension @7 >14
- Surface energy and surface tension
- Angle of contact >15
- Excess pressure across a curved surface: drops and bubbles >15
- Capillary rise; effect of detergents >16
# Heat, temperature and thermal expansion @8 >17
- Heat and temperature; temperature scales
- Thermal expansion of solids, liquids and gases >18
- Anomalous expansion of water >18
# Calorimetry and change of state @8 >19
- Specific heat capacity and heat capacity
- Calorimetry: the method of mixtures
- Change of state; latent heat >20
# Heat transfer @9 >21
- Conduction; thermal conductivity; heat conduction in one dimension
- Convection >22
- Radiation >22
- Newton's law of cooling [A] >23
# Blackbody radiation [A] >24
- Absorptive and emissive powers
- Kirchhoff's law
- Wien's displacement law
- Stefan's law
`,

  'thermodynamics': `
# Thermal equilibrium and temperature @0 >1
- Thermal equilibrium >1
- Zeroth law of thermodynamics and the concept of temperature >1
# Heat, work and internal energy @1 >2
- Internal energy as a state function >2
- Work done by a gas (pressure–volume work); P–V diagrams >2
- Equivalence of heat and work >2
# First law of thermodynamics @2 >3
- Statement and sign conventions >3
- Specific heats of a gas: Cp, Cv and Mayer's relation >4
- Cp and Cv for monatomic and diatomic gases >4
# Thermodynamic processes @3 >5
- Isothermal and adiabatic processes >5
- Isobaric and isochoric processes >5
- Work done in each process; adiabatic relation PV^γ = constant >5
- Bulk modulus of gases (isothermal and adiabatic) [A] >6
- Cyclic processes >7
# Second law of thermodynamics @4 >10
- Kelvin–Planck and Clausius statements >10
- Heat engines and refrigerators; efficiency and coefficient of performance >8
# Reversible and irreversible processes @5 >11
- Reversible and irreversible processes >11
# Carnot engine [A] @6 >12
- The Carnot cycle >12
- Efficiency of a Carnot engine >12
`,

  'kinetic-theory': `
# Equation of state of a perfect gas @0 >2
- Boyle's, Charles' and Avogadro's laws >2
- Ideal gas equation PV = nRT >3
- Dalton's law of partial pressures >4
# Work done on compressing a gas @1 >5
- Work done in compressing a gas >5
# Kinetic theory of gases: assumptions @2 >6
- Molecular nature of matter >1
- Assumptions of the kinetic theory of an ideal gas >6
# Concept of pressure @3 >7
- Pressure of an ideal gas: P = ⅓ρv²(rms) >7
# Kinetic interpretation of temperature @4 >8
- Average kinetic energy of a molecule is proportional to T >8
- The Boltzmann constant >8
# Speeds of gas molecules @5 >9
- RMS speed of gas molecules >9
- Average and most probable speeds >9
# Degrees of freedom @6 >10
- Translational, rotational and vibrational degrees of freedom >10
# Law of equipartition of energy @7 >11
- Equipartition of energy >11
- Specific heat capacities of monatomic, diatomic and polyatomic gases >11
# Mean free path [M] @8 >12
- Mean free path of gas molecules >12
# Avogadro's number @9 >13
- Avogadro's number and the mole >13
`,

  'oscillations-waves': `
# Periodic and oscillatory motion @0 >1
- Time period and frequency >1
- Displacement as a function of time; periodic functions >1
# Simple harmonic motion @1 >2
- SHM and its equation: x = A sin(ωt + φ) >2
- Velocity and acceleration in SHM >3
- SHM and uniform circular motion >4
- Phase and phase difference @2 >5
- Linear and angular SHM [A] >6
# Oscillations of a spring @3 >7
- Restoring force and force constant >7
- Time period of a spring–mass system >7
- Springs in series and in parallel >7
# Energy in SHM @4 >8
- Kinetic and potential energy in SHM >8
# Simple pendulum @5 >9
- Derivation of the expression for its time period >9
# Damped and forced oscillations [A] >10
- Damped oscillations >10
- Forced oscillations and resonance >10
# Wave motion @6 >11
- Transverse and longitudinal waves >11
- Wavelength, frequency and wave speed >12
# Speed of a travelling wave @7 >13
- Speed of a transverse wave on a stretched string >13
- Speed of sound in gases (Newton's formula and Laplace's correction) >13
# Displacement relation for a progressive wave @8 >14
- y = A sin(kx − ωt + φ); wave number and angular frequency >14
# Superposition and reflection of waves @9 >15
- Principle of superposition of waves >15
- Reflection of waves at rigid and open boundaries >16
# Standing waves @10 >17
- Nodes and antinodes >17
- Standing waves in strings >17
- Standing waves in open and closed organ pipes (air columns) >18
- Resonance >18
# Fundamental mode and harmonics @11 >19
- Fundamental mode, harmonics and overtones >19
# Beats @12 >20
- Beats and beat frequency >20
# Doppler effect [A] >21
- Doppler effect in sound: moving source and moving observer >21
`,

  'electrostatics': `
# Electric charge @0 >1
- Properties of charge: additivity, quantisation and conservation >1
- Charging by friction, conduction and induction >2
# Coulomb's law @1 >3
- Force between two point charges; permittivity >3
- Forces between multiple charges: the superposition principle >4
- Continuous charge distributions (line, surface and volume densities) >5
# Electric field @2 >6
- Electric field due to a point charge and a system of charges >6
- Electric field lines and their properties >7
# Electric dipole @3 >8
- Electric dipole and dipole moment >8
- Electric field due to a dipole (axial and equatorial) >8
- Torque on a dipole in a uniform electric field >9
- Potential energy of a dipole in a uniform field >9
# Electric flux @4 >10
- Electric flux through a surface >10
# Gauss's law and its applications @5 >11
- Gauss's law >11
- Field due to an infinitely long uniformly charged straight wire >12
- Field due to a uniformly charged infinite plane sheet >12
- Field due to a uniformly charged thin spherical shell >12
# Electric potential @6 >13
- Potential due to a point charge, an electric dipole and a system of charges >13
- Potential difference; relation between field and potential >14
- Electrical potential energy of a system of two point charges >15
# Equipotential surfaces @7 >16
- Equipotential surfaces and their properties >16
# Conductors and insulators @8 >17
- Electrostatics of conductors >17
- Electrostatic shielding >17
# Dielectrics and electric polarisation @9 >18
- Polar and non-polar molecules; polarisation >18
- Dielectric constant >18
# Capacitors and capacitance @10 >19
- Capacitance >19
- Parallel-plate capacitor with and without a dielectric @11 >19
# Combination of capacitors @10 >21
- Capacitors in series and in parallel >21
# Energy stored in a capacitor @12 >22
- Energy stored in a capacitor; energy density of the field >22
- Sharing of charge between capacitors and loss of energy >23
`,

  'current-electricity': `
# Electric current @0 >1
- Electric current and current density >2
- Drift velocity and mobility; their relation with current >2
# Ohm's law @1 >4
- Ohm's law >4
- I–V characteristics of ohmic and non-ohmic conductors @3 >5
# Resistance and resistivity @2 >6
- Electrical resistance, resistivity and conductivity >6
- Colour code of carbon resistors @5 >7
# Temperature dependence of resistance @7 >8
- Variation of resistivity with temperature >8
# Combination of resistors @6 >9
- Resistors in series and in parallel >9
- Equivalent resistance of networks >10
# Electrical energy and power @4 >11
- Electrical energy and power >11
- Heating effect of current (Joule's law) >12
# Cells, emf and internal resistance @8 >13
- Emf, terminal potential difference and internal resistance >13
# Combination of cells @9 >14
- Cells in series and in parallel >14
# Kirchhoff's laws and their applications @10 >15
- Junction rule and loop rule >15
# Wheatstone bridge @11 >16
- Balanced Wheatstone bridge >16
# Metre bridge @12 >17
- Metre bridge >17
- Post office box [A] >17
`,

  'magnetism': `
# Biot–Savart law @0 >1
- Magnetic field due to a current element >1
- Field on the axis of a circular current loop >3
- Field due to a straight current-carrying wire >2
# Ampère's circuital law @1 >4
- Ampère's law >4
- Field of an infinitely long straight wire >2
- Field inside a long straight solenoid >5
# Force on a moving charge @2 >6
- Lorentz force >6
- Motion of a charge in a uniform magnetic field >7
- Force on a moving charge in uniform electric and magnetic fields >8
# Force on a current-carrying conductor @3 >9
- Force on a conductor in a uniform magnetic field >9
# Force between two parallel currents @4 >10
- Force between parallel current-carrying conductors >10
- Definition of the ampere >10
# Torque on a current loop @5 >11
- Torque on a current loop in a uniform magnetic field >11
# Moving-coil galvanometer @6 >12
- Moving-coil galvanometer and its sensitivity >12
- Conversion into an ammeter and a voltmeter >13
# Current loop as a magnetic dipole @7 >14
- Magnetic dipole moment of a current loop >14
- Magnetic moment of a revolving electron >14
# Bar magnet [M] @8 >15
- Bar magnet as an equivalent solenoid >15
- Magnetic field lines >15
- Field of a magnetic dipole along its axis and perpendicular to its axis >15
- Torque on a magnetic dipole in a uniform magnetic field >15
# Magnetic materials [M] @9 >16
- Para-, dia- and ferromagnetic substances with examples >16
- Effect of temperature on magnetic properties >16
`,

  'emi-ac': `
# Faraday's law of induction @0 >2
- Magnetic flux >1
- Faraday's law of electromagnetic induction >2
# Lenz's law @1 >3
- Lenz's law and conservation of energy >3
# Induced emf and current @2 >4
- Motional emf >4
- Emf induced in a rotating rod or coil >5
# Eddy currents [M] @3 >6
- Eddy currents and their applications >6
# Self and mutual inductance @4 >7
- Self-inductance >7
- Mutual inductance >8
- Energy stored in an inductor >9
# RC and LR circuits [A] >10
- Charging and discharging of a capacitor through a resistor >10
- Growth and decay of current in an LR circuit >11
- Time constant >10
# LC circuits [A] >12
- LC oscillations >12
# Alternating current @5 >13
- Peak and RMS values of alternating current and voltage >13
- Phasors >14
# Reactance and impedance @6 >15
- AC through a resistor, an inductor and a capacitor >15
- Inductive and capacitive reactance; impedance >15
# LCR series circuit @7 >16
- Impedance and phase angle >16
- Resonance >17
- Sharpness of resonance and quality factor @8 >18
# Power in AC circuits @9 >19
- Average power and power factor >19
- Wattless current >19
# AC generator and transformer [M] @10 >20
- AC generator >20
- Transformer >21
`,

  'em-waves': `
# Displacement current [M] @0 >1
- Displacement current; Ampère–Maxwell law >1
# Electromagnetic waves and their characteristics @1 >3
- Sources of electromagnetic waves >2
- Oscillating electric and magnetic fields; speed c = 1/√(μ₀ε₀) >3
# Transverse nature of electromagnetic waves @2 >4
- Transverse nature of EM waves >4
# Electromagnetic spectrum @3 >5
- Radio waves, microwaves, infrared, visible, ultraviolet, X-rays and gamma rays >5
# Uses of electromagnetic waves @4 >6
- Elementary facts about the uses of each part of the spectrum >6
`,

  'optics': `
# Reflection of light @0 >1
- Laws of reflection; plane mirrors >1
- Spherical mirrors and the sign convention >2
- Mirror formula and magnification @1 >3
# Refraction of light @0 >4
- Laws of refraction; refractive index >4
- Refraction at a plane surface; real and apparent depth >5
- Refraction at a spherical surface >6
# Total internal reflection and its applications @2 >7
- Critical angle >7
- Applications: optical fibres, mirage, sparkling of diamond >7
# Thin lenses @3 >8
- Lens maker's formula >8
- Thin lens formula; magnification >9
- Power of a lens @4 >10
- Combination of thin lenses in contact >10
- Combinations of mirrors and thin lenses [A] >11
# Refraction through a prism @5 >12
- Angle of deviation and minimum deviation >12
- Dispersion of light by a prism >13
# Optical instruments [M] @6 >14
- Microscope and its magnifying power >14
- Astronomical telescope (refracting and reflecting) and its magnifying power >15
# Wavefront and Huygens' principle @7 >16
- Wavefront and Huygens' principle >16
- Laws of reflection and refraction from Huygens' principle >17
# Interference of light @8 >18
- Coherent sources and sustained interference >18
- Young's double-slit experiment; expression for fringe width >19
# Diffraction @9 >20
- Diffraction due to a single slit >20
- Width of the central maximum >20
# Polarisation @10 >21
- Plane-polarised light >21
- Brewster's law @11 >22
- Uses of plane-polarised light and Polaroids >23
`,

  'dual-nature': `
# Dual nature of radiation @0
- Dual nature of radiation
- Electron emission and work function
# Photoelectric effect @1
- Hertz's and Lenard's observations @2
- Effect of intensity, frequency and potential; stopping potential and threshold frequency
# Einstein's photoelectric equation @3
- Einstein's photoelectric equation
# Particle nature of light @4
- The photon: energy and momentum
# Matter waves @5
- Wave nature of particles
- de Broglie relation @6
- de Broglie wavelength of matter waves
`,

  'atoms-nuclei': `
# Alpha-particle scattering experiment @0
- Geiger–Marsden experiment
- Distance of closest approach and impact parameter
# Rutherford's model of the atom @1
- Rutherford's nuclear model and its limitations
# Bohr model @2
- Bohr's postulates
- Radius, speed and energy of the electron in hydrogen-like atoms
- Energy levels
# Hydrogen spectrum @3
- Spectral series of hydrogen
# X-rays [A]
- Continuous and characteristic X-rays
- Moseley's law
# Composition and size of the nucleus @4
- Atomic masses and composition of the nucleus
- Size of the nucleus
# Mass–energy relation and binding energy @5
- Mass–energy relation
- Mass defect @6
- Binding energy per nucleon and its variation with mass number
# Nuclear fission and fusion @7
- Nuclear fission and fusion
- Energy calculations in fission and fusion
# Radioactivity [A] @8
- α, β and γ radiations
- Law of radioactive decay; decay constant
- Half-life and mean life
`,

  'electronic-devices': `
# Semiconductors [M] @0
- Conductors, semiconductors and insulators
- Intrinsic and extrinsic (n-type and p-type) semiconductors
# Semiconductor diode [M] @1
- p–n junction diode
- I–V characteristics in forward and reverse bias
# Diode as a rectifier [M] @2
- Half-wave and full-wave rectifiers
# LED, photodiode and solar cell [M] @3
- I–V characteristics of LED, photodiode and solar cell
# Zener diode [M] @4
- Zener diode
- Zener diode as a voltage regulator
# Logic gates [M] @5
- OR, AND, NOT, NAND and NOR gates
`,

  'experimental-skills': `
# Vernier callipers @0
- Measuring internal and external diameter and depth of a vessel
# Screw gauge @1
- Measuring the thickness of a thin sheet or diameter of a wire
# Simple pendulum @2
- Determination of g using a simple pendulum [A]
- Dissipation of energy: plot of square of amplitude against time [M]
# Metre scale and the principle of moments [M] @3
- Mass of a given object by the principle of moments
# Young's modulus of a wire @4
- Young's modulus of elasticity of the material of a metallic wire
# Surface tension by capillary rise @5
- Surface tension of water and the effect of detergents
# Viscosity by terminal velocity [M] @6
- Coefficient of viscosity using the terminal velocity of a spherical body
# Speed of sound with a resonance tube @7
- Speed of sound in air at room temperature
# Specific heat capacity by the method of mixtures @8
- Specific heat capacity of a solid [M]
- Specific heat capacity of a liquid using a calorimeter
# Resistivity using a metre bridge @9
- Resistivity of the material of a wire using a metre bridge
- Specific resistance using a post office box [A]
# Ohm's law @10
- Resistance of a wire using a voltmeter and an ammeter
# Galvanometer [M] @11
- Resistance and figure of merit by the half-deflection method
# Focal length of mirrors and lenses @12
- Convex mirror [M]
- Concave mirror and convex lens (u–v or parallax method)
# Prism [M]
- Plot of angle of deviation against angle of incidence
# Refractive index of a glass slab [M] @13
- Using a travelling microscope
# Diodes [M] @14
- Characteristic curves of a p–n junction diode in forward and reverse bias
- Characteristic curves of a Zener diode and its reverse breakdown voltage
# Identifying components [M]
- Identifying a diode, LED, resistor and capacitor from a mixed collection
`
};
