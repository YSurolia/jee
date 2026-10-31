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
# Physical quantities and systems of units @0
- Need for measurement; physical quantities and their units
- Systems of units: CGS, FPS, MKS and SI
- The seven SI base units; supplementary units (radian, steradian)
- SI prefixes; practical units (light year, astronomical unit, parsec, atomic mass unit)
# Fundamental and derived units @1
- Fundamental (base) quantities and units
- Derived quantities and their units
- Rules for writing SI units and symbols
# Measuring instruments and least count @2
- Least count of a metre scale, vernier callipers and screw gauge
- Zero error and zero correction
- Methods of measurement for the standard experiments [A]
# Significant figures @3
- Rules for counting significant figures
- Rounding off
- Significant figures in addition, subtraction, multiplication and division
# Errors in measurement @4
- Systematic errors, random errors and least-count error
- Absolute, mean absolute, relative and percentage errors
- Combination of errors in sums, differences, products, quotients and powers
- Accuracy and precision
- Error analysis of experimental results
# Dimensions of physical quantities @5
- Dimensions and dimensional formulae
- Dimensional formulae of common quantities
- Dimensionless quantities and dimensional constants
# Dimensional analysis and its applications @6
- Principle of homogeneity of dimensions
- Checking whether an equation is dimensionally correct
- Converting a quantity from one system of units to another
- Deducing the relation between physical quantities
- Limitations of dimensional analysis
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
# Force and inertia @0
- Aristotle's fallacy and Galileo's law of inertia
- Inertia and mass
- Newton's first law of motion
# Newton's second law; momentum @1
- Linear momentum
- Second law: F = dp/dt = ma
- Units of force; the newton
# Impulse @2
- Impulse and impulsive forces
- Impulse as change in momentum; force–time graphs
# Newton's third law @1
- Action and reaction pairs
- Free-body diagrams
- Normal reaction, tension and spring force
- Connected bodies: strings and pulleys
# Conservation of linear momentum @3
- Law of conservation of linear momentum
- Applications: recoil of a gun, explosions, rocket propulsion
# Equilibrium of concurrent forces @4
- Condition for equilibrium of a particle
- Lami's theorem
# Inertial and non-inertial frames [A]
- Inertial frames of reference
- Uniformly accelerated frames and pseudo forces
- Apparent weight in a lift
# Friction @5
- Static and kinetic friction
- Laws of friction; coefficient of friction
- Angle of friction and angle of repose
- Motion of blocks on rough horizontal and inclined surfaces
# Rolling friction [M] @6
- Rolling friction
- Ways of reducing friction
# Dynamics of uniform circular motion @7
- Centripetal force and its sources
- Vehicle on a level circular road
- Conical pendulum
# Banking of roads @8
- Vehicle on a banked road
- Optimum, maximum and minimum safe speeds
`,

  'work-energy-power': `
# Work @0
- Scalar (dot) product of two vectors
- Work done by a constant force
- Work done by a variable force (area under the force–displacement graph)
- Positive, negative and zero work
# Kinetic energy and the work–energy theorem @2
- Kinetic energy
- Work–energy theorem for constant and variable forces
# Potential energy @1
- Gravitational potential energy near the Earth
- Force as the negative gradient of potential energy (F = −dU/dx)
- Stable, unstable and neutral equilibrium from potential-energy curves
# Potential energy of a spring @4
- Spring force and Hooke's law
- Elastic potential energy ½kx²
# Conservative and non-conservative forces @6
- Definition and examples
- Work done around a closed path
# Conservation of mechanical energy @5
- Law of conservation of mechanical energy
- Different forms of energy; conservation of total energy
# Power @3
- Average and instantaneous power (P = F·v)
- Units: watt, horsepower; kilowatt-hour
# Motion in a vertical circle @7
- Speed and tension at different points
- Minimum speeds at the top and bottom to complete the circle
# Collisions @8
- Elastic and inelastic collisions
- Collisions in one dimension; coefficient of restitution
- Collisions in two dimensions
- Perfectly inelastic collisions and loss of kinetic energy
`,

  'rotational-motion': `
# Centre of mass @0
- Centre of mass of a two-particle system
- Centre of mass of a system of particles and of a rigid body
- Centre of mass of a rod, ring, disc and other symmetric bodies
- Motion of the centre of mass of a system of particles
# Basic concepts of rotational motion @7
- Rigid body; translational and rotational motion
- Angular displacement, angular velocity and angular acceleration
- Equations of rotational motion with constant angular acceleration
- Comparison of linear and rotational motion
# Torque (moment of a force) @1
- Vector (cross) product of two vectors
- Torque τ = r × F
- Couple and its moment
# Angular momentum @2
- Angular momentum of a particle and of a rigid body
- Relation τ = dL/dt
- Conservation of angular momentum and its applications
# Moment of inertia and radius of gyration @3
- Moment of inertia
- Radius of gyration
- Kinetic energy of rotation
# Theorems of parallel and perpendicular axes @4
- Perpendicular axes theorem
- Parallel axes theorem
- Applications of the two theorems
# Moments of inertia of simple bodies @5
- Ring, disc, thin rod, solid and hollow sphere, solid and hollow cylinder
# Dynamics of rotation about a fixed axis @7
- Rotational form of Newton's second law (τ = Iα)
- Work and power in rotational motion
# Equilibrium of rigid bodies @6
- Conditions for translational and rotational equilibrium
- Principle of moments; centre of gravity
# Rolling motion [A] @8
- Rolling without slipping (v = ωR)
- Kinetic energy of a rolling body
- Rings, cylinders and spheres rolling down an incline
# Collision of point masses with rigid bodies [A]
- Angular impulse
- Conservation of angular momentum in collisions with rigid bodies
`,

  'gravitation': `
# Universal law of gravitation @0
- Newton's law of gravitation; the constant G
- Gravitational force due to spherical shells and spheres
- Gravitational field intensity [A]
# Acceleration due to gravity @1
- Acceleration due to gravity at the Earth's surface
- Variation of g with altitude
- Variation of g with depth
# Kepler's laws of planetary motion @2
- Law of orbits, law of areas and law of periods
- Law of areas and conservation of angular momentum
# Gravitational potential energy and potential @3
- Gravitational potential energy of a two-body system
- Gravitational potential due to a point mass
- Gravitational field and potential of a spherical shell and a solid sphere [A]
# Escape velocity @4
- Escape velocity from the Earth's surface
# Motion of satellites @5
- Orbital velocity @6
- Time period of a satellite
- Energy of an orbiting satellite; binding energy
- Geostationary orbits [A]
- Weightlessness
`,

  'solids-liquids': `
# Elastic behaviour of solids @0
- Elasticity and plasticity
- Stress and strain: longitudinal, volume and shear
- Hooke's law; the stress–strain curve
- Elastic potential energy of a stretched wire
# Elastic moduli @1
- Young's modulus
- Bulk modulus and compressibility
- Modulus of rigidity (shear modulus)
# Pressure in fluids @2
- Pressure due to a fluid column; effect of gravity on fluid pressure
- Atmospheric pressure and gauge pressure
# Pascal's law and its applications @3
- Pascal's law
- Hydraulic lift and hydraulic brakes
# Buoyancy [A]
- Archimedes' principle
- Floating bodies
# Viscosity @4
- Coefficient of viscosity
- Stokes' law
- Terminal velocity
# Streamline and turbulent flow @5
- Streamline flow and the equation of continuity
- Turbulent flow; critical velocity and Reynolds number [M]
# Bernoulli's principle and its applications @6
- Bernoulli's equation
- Speed of efflux (Torricelli's law), venturimeter, dynamic lift
# Surface tension @7
- Surface energy and surface tension
- Angle of contact
- Excess pressure across a curved surface: drops and bubbles
- Capillary rise; effect of detergents
# Heat, temperature and thermal expansion @8
- Heat and temperature; temperature scales
- Thermal expansion of solids, liquids and gases
- Anomalous expansion of water
# Calorimetry and change of state @8
- Specific heat capacity and heat capacity
- Calorimetry: the method of mixtures
- Change of state; latent heat
# Heat transfer @9
- Conduction; thermal conductivity; heat conduction in one dimension
- Convection
- Radiation
- Newton's law of cooling [A]
# Blackbody radiation [A]
- Absorptive and emissive powers
- Kirchhoff's law
- Wien's displacement law
- Stefan's law
`,

  'thermodynamics': `
# Thermal equilibrium and temperature @0
- Thermal equilibrium
- Zeroth law of thermodynamics and the concept of temperature
# Heat, work and internal energy @1
- Internal energy as a state function
- Work done by a gas (pressure–volume work); P–V diagrams
- Equivalence of heat and work
# First law of thermodynamics @2
- Statement and sign conventions
- Specific heats of a gas: Cp, Cv and Mayer's relation
- Cp and Cv for monatomic and diatomic gases
# Thermodynamic processes @3
- Isothermal and adiabatic processes
- Isobaric and isochoric processes
- Work done in each process; adiabatic relation PV^γ = constant
- Bulk modulus of gases (isothermal and adiabatic) [A]
- Cyclic processes
# Second law of thermodynamics @4
- Kelvin–Planck and Clausius statements
- Heat engines and refrigerators; efficiency and coefficient of performance
# Reversible and irreversible processes @5
- Reversible and irreversible processes
# Carnot engine [A] @6
- The Carnot cycle
- Efficiency of a Carnot engine
`,

  'kinetic-theory': `
# Equation of state of a perfect gas @0
- Boyle's, Charles' and Avogadro's laws
- Ideal gas equation PV = nRT
- Dalton's law of partial pressures
# Work done on compressing a gas @1
- Work done in compressing a gas
# Kinetic theory of gases: assumptions @2
- Molecular nature of matter
- Assumptions of the kinetic theory of an ideal gas
# Concept of pressure @3
- Pressure of an ideal gas: P = ⅓ρv²(rms)
# Kinetic interpretation of temperature @4
- Average kinetic energy of a molecule is proportional to T
- The Boltzmann constant
# Speeds of gas molecules @5
- RMS speed of gas molecules
- Average and most probable speeds
# Degrees of freedom @6
- Translational, rotational and vibrational degrees of freedom
# Law of equipartition of energy @7
- Equipartition of energy
- Specific heat capacities of monatomic, diatomic and polyatomic gases
# Mean free path [M] @8
- Mean free path of gas molecules
# Avogadro's number @9
- Avogadro's number and the mole
`,

  'oscillations-waves': `
# Periodic and oscillatory motion @0
- Time period and frequency
- Displacement as a function of time; periodic functions
# Simple harmonic motion @1
- SHM and its equation: x = A sin(ωt + φ)
- Velocity and acceleration in SHM
- SHM and uniform circular motion
- Phase and phase difference @2
- Linear and angular SHM [A]
# Oscillations of a spring @3
- Restoring force and force constant
- Time period of a spring–mass system
- Springs in series and in parallel
# Energy in SHM @4
- Kinetic and potential energy in SHM
# Simple pendulum @5
- Derivation of the expression for its time period
# Damped and forced oscillations [A]
- Damped oscillations
- Forced oscillations and resonance
# Wave motion @6
- Transverse and longitudinal waves
- Wavelength, frequency and wave speed
# Speed of a travelling wave @7
- Speed of a transverse wave on a stretched string
- Speed of sound in gases (Newton's formula and Laplace's correction)
# Displacement relation for a progressive wave @8
- y = A sin(kx − ωt + φ); wave number and angular frequency
# Superposition and reflection of waves @9
- Principle of superposition of waves
- Reflection of waves at rigid and open boundaries
# Standing waves @10
- Nodes and antinodes
- Standing waves in strings
- Standing waves in open and closed organ pipes (air columns)
- Resonance
# Fundamental mode and harmonics @11
- Fundamental mode, harmonics and overtones
# Beats @12
- Beats and beat frequency
# Doppler effect [A]
- Doppler effect in sound: moving source and moving observer
`,

  'electrostatics': `
# Electric charge @0
- Properties of charge: additivity, quantisation and conservation
- Charging by friction, conduction and induction
# Coulomb's law @1
- Force between two point charges; permittivity
- Forces between multiple charges: the superposition principle
- Continuous charge distributions (line, surface and volume densities)
# Electric field @2
- Electric field due to a point charge and a system of charges
- Electric field lines and their properties
# Electric dipole @3
- Electric dipole and dipole moment
- Electric field due to a dipole (axial and equatorial)
- Torque on a dipole in a uniform electric field
- Potential energy of a dipole in a uniform field
# Electric flux @4
- Electric flux through a surface
# Gauss's law and its applications @5
- Gauss's law
- Field due to an infinitely long uniformly charged straight wire
- Field due to a uniformly charged infinite plane sheet
- Field due to a uniformly charged thin spherical shell
# Electric potential @6
- Potential due to a point charge, an electric dipole and a system of charges
- Potential difference; relation between field and potential
- Electrical potential energy of a system of two point charges
# Equipotential surfaces @7
- Equipotential surfaces and their properties
# Conductors and insulators @8
- Electrostatics of conductors
- Electrostatic shielding
# Dielectrics and electric polarisation @9
- Polar and non-polar molecules; polarisation
- Dielectric constant
# Capacitors and capacitance @10
- Capacitance
- Parallel-plate capacitor with and without a dielectric @11
# Combination of capacitors @10
- Capacitors in series and in parallel
# Energy stored in a capacitor @12
- Energy stored in a capacitor; energy density of the field
- Sharing of charge between capacitors and loss of energy
`,

  'current-electricity': `
# Electric current @0
- Electric current and current density
- Drift velocity and mobility; their relation with current
# Ohm's law @1
- Ohm's law
- I–V characteristics of ohmic and non-ohmic conductors @3
# Resistance and resistivity @2
- Electrical resistance, resistivity and conductivity
- Colour code of carbon resistors @5
# Temperature dependence of resistance @7
- Variation of resistivity with temperature
# Combination of resistors @6
- Resistors in series and in parallel
- Equivalent resistance of networks
# Electrical energy and power @4
- Electrical energy and power
- Heating effect of current (Joule's law)
# Cells, emf and internal resistance @8
- Emf, terminal potential difference and internal resistance
# Combination of cells @9
- Cells in series and in parallel
# Kirchhoff's laws and their applications @10
- Junction rule and loop rule
# Wheatstone bridge @11
- Balanced Wheatstone bridge
# Metre bridge @12
- Metre bridge
- Post office box [A]
`,

  'magnetism': `
# Biot–Savart law @0
- Magnetic field due to a current element
- Field on the axis of a circular current loop
- Field due to a straight current-carrying wire
# Ampère's circuital law @1
- Ampère's law
- Field of an infinitely long straight wire
- Field inside a long straight solenoid
# Force on a moving charge @2
- Lorentz force
- Motion of a charge in a uniform magnetic field
- Force on a moving charge in uniform electric and magnetic fields
# Force on a current-carrying conductor @3
- Force on a conductor in a uniform magnetic field
# Force between two parallel currents @4
- Force between parallel current-carrying conductors
- Definition of the ampere
# Torque on a current loop @5
- Torque on a current loop in a uniform magnetic field
# Moving-coil galvanometer @6
- Moving-coil galvanometer and its sensitivity
- Conversion into an ammeter and a voltmeter
# Current loop as a magnetic dipole @7
- Magnetic dipole moment of a current loop
- Magnetic moment of a revolving electron
# Bar magnet [M] @8
- Bar magnet as an equivalent solenoid
- Magnetic field lines
- Field of a magnetic dipole along its axis and perpendicular to its axis
- Torque on a magnetic dipole in a uniform magnetic field
# Magnetic materials [M] @9
- Para-, dia- and ferromagnetic substances with examples
- Effect of temperature on magnetic properties
`,

  'emi-ac': `
# Faraday's law of induction @0
- Magnetic flux
- Faraday's law of electromagnetic induction
# Lenz's law @1
- Lenz's law and conservation of energy
# Induced emf and current @2
- Motional emf
- Emf induced in a rotating rod or coil
# Eddy currents [M] @3
- Eddy currents and their applications
# Self and mutual inductance @4
- Self-inductance
- Mutual inductance
- Energy stored in an inductor
# RC and LR circuits [A]
- Charging and discharging of a capacitor through a resistor
- Growth and decay of current in an LR circuit
- Time constant
# LC circuits [A]
- LC oscillations
# Alternating current @5
- Peak and RMS values of alternating current and voltage
- Phasors
# Reactance and impedance @6
- AC through a resistor, an inductor and a capacitor
- Inductive and capacitive reactance; impedance
# LCR series circuit @7
- Impedance and phase angle
- Resonance
- Sharpness of resonance and quality factor @8
# Power in AC circuits @9
- Average power and power factor
- Wattless current
# AC generator and transformer [M] @10
- AC generator
- Transformer
`,

  'em-waves': `
# Displacement current [M] @0
- Displacement current; Ampère–Maxwell law
# Electromagnetic waves and their characteristics @1
- Sources of electromagnetic waves
- Oscillating electric and magnetic fields; speed c = 1/√(μ₀ε₀)
# Transverse nature of electromagnetic waves @2
- Transverse nature of EM waves
# Electromagnetic spectrum @3
- Radio waves, microwaves, infrared, visible, ultraviolet, X-rays and gamma rays
# Uses of electromagnetic waves @4
- Elementary facts about the uses of each part of the spectrum
`,

  'optics': `
# Reflection of light @0
- Laws of reflection; plane mirrors
- Spherical mirrors and the sign convention
- Mirror formula and magnification @1
# Refraction of light @0
- Laws of refraction; refractive index
- Refraction at a plane surface; real and apparent depth
- Refraction at a spherical surface
# Total internal reflection and its applications @2
- Critical angle
- Applications: optical fibres, mirage, sparkling of diamond
# Thin lenses @3
- Lens maker's formula
- Thin lens formula; magnification
- Power of a lens @4
- Combination of thin lenses in contact
- Combinations of mirrors and thin lenses [A]
# Refraction through a prism @5
- Angle of deviation and minimum deviation
- Dispersion of light by a prism
# Optical instruments [M] @6
- Microscope and its magnifying power
- Astronomical telescope (refracting and reflecting) and its magnifying power
# Wavefront and Huygens' principle @7
- Wavefront and Huygens' principle
- Laws of reflection and refraction from Huygens' principle
# Interference of light @8
- Coherent sources and sustained interference
- Young's double-slit experiment; expression for fringe width
# Diffraction @9
- Diffraction due to a single slit
- Width of the central maximum
# Polarisation @10
- Plane-polarised light
- Brewster's law @11
- Uses of plane-polarised light and Polaroids
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
