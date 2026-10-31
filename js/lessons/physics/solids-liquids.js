// Lesson: Properties of Solids and Liquids.
var R = String.raw;
JEE.lesson('physics', 'solids-liquids', {
  theory: [
    { h: R`Elasticity: stress, strain and Hooke's law`,
      body: [
        R`Pull a rubber band and it stretches; let go and it comes back. This ability to return to the original shape is called <b>elasticity</b>.`,
        R`<b>Stress</b> = force per unit area inside the material: \(\sigma = F/A\) (unit Pa = N/m²). <b>Strain</b> = fractional change in size, for example \(\Delta L/L\). Strain has no unit.`,
        R`<b>Hooke's law:</b> for small deformations, stress ∝ strain. Beyond the <b>elastic limit</b>, the material stays permanently deformed (plastic), and eventually it breaks.`
      ],
      analogy: R`A spring in a mattress returns to shape after you get up. But if a heavy almirah sits on it for years, it may stay squashed. It has gone past its elastic limit.`,
      points: [R`Elastic energy stored per unit volume \(= \tfrac12\times\text{stress}\times\text{strain}\).`],
      check: { q: R`Which is more elastic, steel or rubber?`, ans: R`Steel! "More elastic" in physics means a larger force is needed for the same strain (higher modulus), and steel returns to shape more perfectly.` } },

    { h: R`Young's, bulk and shear moduli`,
      body: [
        R`The <b>modulus of elasticity</b> = stress ÷ strain tells how stiff a material is. There are three, depending on how you deform it:`,
        R`<b>Young's modulus</b> (stretching or squashing a wire): \(Y = \dfrac{F/A}{\Delta L/L} = \dfrac{FL}{A\Delta L}\).`,
        R`<b>Bulk modulus</b> (squeezing from all sides): \(B = -\dfrac{\Delta P}{\Delta V/V}\). Its inverse is called compressibility.`,
        R`<b>Shear modulus</b> (twisting or sliding layers): \(G = \dfrac{F/A}{\theta}\).`
      ],
      points: [R`Liquids and gases have only a bulk modulus (they cannot resist shear).`, R`Extension of a wire: \(\Delta L = \dfrac{FL}{AY}\). Longer or thinner wires stretch more.`] },

    { h: R`Pressure in a fluid`,
      body: [
        R`<b>Pressure</b> is force per unit area: \(P = F/A\). In a liquid at rest, pressure increases with depth, because the liquid above presses down: \(P = P_0 + \rho gh\).`,
        R`It acts equally in all directions at a point, and it depends only on depth, not on the shape of the container.`,
        R`An object in a fluid feels an upward <b>buoyant force</b> equal to the weight of fluid it pushes aside (Archimedes' principle).`
      ],
      analogy: R`Dams are built much thicker at the bottom than at the top, because the water pressure is greatest at the bottom.`,
      mistake: R`Mixing up gauge and absolute pressure. Gauge pressure is \(\rho gh\); absolute pressure adds the atmosphere: \(P_0 + \rho gh\).` },

    { h: R`Pascal's law`,
      body: [
        R`<b>Pressure applied to an enclosed liquid is passed on equally to every part of it.</b>`,
        R`In a hydraulic lift, a small force on a small piston creates a pressure \(F_1/A_1\). The same pressure acts on a big piston, giving a much larger force \(F_2 = F_1\dfrac{A_2}{A_1}\).`
      ],
      analogy: R`At a car service station, a mechanic lifts a whole car with a hydraulic jack using one hand. That is Pascal's law at work.` },

    { h: R`Viscosity and terminal velocity`,
      body: [
        R`<b>Viscosity</b> is the "thickness" or internal friction of a fluid. Honey has high viscosity; water has low viscosity.`,
        R`A small sphere moving slowly through a fluid feels a drag force given by <b>Stokes' law</b>: \(F = 6\pi\eta rv\), where \(\eta\) is the viscosity.`,
        R`A falling sphere speeds up until the drag plus the buoyant force balances its weight. After that it falls at a constant <b>terminal velocity</b>: \(v_t = \dfrac{2r^2(\rho - \sigma)g}{9\eta}\).`
      ],
      analogy: R`Raindrops don't hit us like bullets, because air drag gives them a small terminal velocity. A parachute works by giving a huge drag and a low terminal velocity.`,
      points: [R`\(v_t \propto r^2\): bigger drops fall faster.`, R`The viscosity of liquids decreases with temperature; that of gases increases.`] },

    { h: R`Streamline flow, turbulence and continuity`,
      body: [
        R`In <b>streamline</b> (smooth) flow, every particle follows the path of the one before it. At high speeds the flow becomes <b>turbulent</b>, full of eddies and swirls.`,
        R`The <b>Reynolds number</b> \(Re = \dfrac{\rho vD}{\eta}\) predicts which happens: below about 2000 the flow is streamline, above about 3000 it is turbulent.`,
        R`<b>Equation of continuity:</b> what goes in must come out, so \(A_1v_1 = A_2v_2\). Where a pipe narrows, the fluid speeds up.`
      ],
      analogy: R`Pressing your thumb over the end of a garden pipe makes the water shoot out faster. You made the area smaller, so the speed went up.` },

    { h: R`Bernoulli's principle`,
      body: [
        R`For an ideal fluid flowing smoothly, the total energy per unit volume stays constant along a streamline: \(P + \tfrac12\rho v^2 + \rho gh = \text{constant}\).`,
        R`So <b>where the fluid moves faster, its pressure is lower</b> (at the same height).`,
        R`Uses: aeroplane wings (faster air on top means lower pressure on top, giving lift), the atomiser and perfume spray, and the speed of water from a hole in a tank (<b>Torricelli</b>): \(v = \sqrt{2gh}\).`
      ],
      analogy: R`During a strong storm, tin roofs can fly off. Fast wind over the roof lowers the pressure above, while the still air inside pushes up.`,
      check: { q: R`Why do two boats moving side by side close together tend to be pulled towards each other?`, ans: R`Water rushing fast between them has lower pressure than the water outside, which pushes them together.` } },

    { h: R`Surface tension and capillary rise`,
      body: [
        R`Molecules at a liquid's surface are pulled inward by their neighbours, so the surface behaves like a stretched skin. <b>Surface tension</b> \(T\) is the force per unit length along the surface (N/m), which also equals the surface energy per unit area (J/m²).`,
        R`Because of surface tension, drops are round and the pressure inside is higher: \(\Delta P = \dfrac{2T}{r}\) for a drop, \(\dfrac{4T}{r}\) for a soap bubble (two surfaces).`,
        R`In a thin tube (capillary), water climbs up because it sticks to glass (adhesion > cohesion): \(h = \dfrac{2T\cos\theta}{r\rho g}\). Mercury does the opposite and drops down.`
      ],
      analogy: R`Insects like water striders can walk on water because surface tension supports them, just as a trampoline supports you.`,
      points: [R`Thinner tube → higher rise (\(h \propto 1/r\)).`, R`Soap and detergents reduce surface tension, which helps them clean.`] },

    { h: R`Heat, temperature, expansion and calorimetry`,
      body: [
        R`<b>Temperature</b> measures how hot something is; <b>heat</b> is energy that flows from hot to cold. Conversion: \(K = ^\circ C + 273\); \(^\circ F = \tfrac95{}^\circ C + 32\).`,
        R`Most materials expand on heating: \(\Delta L = L\alpha\Delta T\) (length), with area and volume coefficients \(\beta = 2\alpha\) and \(\gamma = 3\alpha\).`,
        R`<b>Specific heat</b> \(c\) is the heat needed to warm 1 kg by 1 K: \(Q = mc\Delta T\). Water has a high \(c\) (4200 J/kg K). During melting or boiling, the temperature stays constant while <b>latent heat</b> is absorbed: \(Q = mL\).`,
        R`<b>Calorimetry</b>: when hot and cold bodies are mixed, heat lost = heat gained.`
      ],
      analogy: R`Railway tracks have small gaps between rails so that they can expand in summer without bending.`,
      mistake: R`Using \(Q = mc\Delta T\) during melting. While ice melts, the temperature doesn't change; use \(Q = mL\).` },

    { h: R`Conduction, convection and radiation`,
      body: [
        R`<b>Conduction:</b> heat passes from particle to particle in solids: \(\dfrac{dQ}{dt} = \dfrac{kA\Delta T}{L}\). Metals have a high conductivity \(k\).`,
        R`<b>Convection:</b> heat is carried by the moving fluid itself. Hot fluid rises and cold fluid sinks (sea breezes, boiling water).`,
        R`<b>Radiation:</b> heat travels as electromagnetic waves, even through vacuum (sunlight). A body radiates power \(P = \sigma eAT^4\) (Stefan's law), and its peak wavelength obeys \(\lambda_mT = b\) (Wien's law).`,
        R`<b>Newton's law of cooling:</b> a body cools at a rate proportional to its temperature excess over the surroundings.`
      ],
      analogy: R`A steel spoon in hot tea gets hot by conduction, the tea circulates by convection, and you feel the warmth of a bonfire on your face by radiation.`,
      points: [R`Doubling the absolute temperature makes radiated power 16 times larger.`, R`Good absorbers are good emitters (black bodies are best at both).`] }
  ],

  examples: [
    { level: 1, t: 2, q: R`What is the gauge pressure at the bottom of a 2 m deep water tank? (ρ = 1000 kg/m³, g = 10)`,
      steps: [R`Gauge pressure \(= \rho gh = 1000\times10\times2\).`],
      ans: R`\(2\times10^4\) Pa` },
    { level: 1, t: 8, q: R`How much heat is needed to warm 2 kg of water from 20 °C to 70 °C? (c = 4200 J/kg K)`,
      steps: [R`\(Q = mc\Delta T = 2\times4200\times50\).`],
      ans: R`420,000 J = 420 kJ` },
    { level: 1, t: 0, q: R`A 100 N load hangs from a 2 m wire of cross-section 2 mm². The wire stretches by 1 mm. Find the stress and the strain.`,
      steps: [R`Stress \(= F/A = \dfrac{100}{2\times10^{-6}} = 5\times10^7\) Pa.`, R`Strain \(= \Delta L/L = \dfrac{10^{-3}}{2}\).`],
      ans: R`Stress \(5\times10^7\) Pa; strain \(5\times10^{-4}\)` },
    { level: 3, t: 6, q: R`Air flows at 80 m/s over the top of an aeroplane wing and 70 m/s under it. The wing area is 20 m² and the air's density is 1.2 kg/m³. Find the lift force.`,
      steps: [R`Bernoulli: \(\Delta P = \tfrac12\rho(v_{top}^2 - v_{bottom}^2) = 0.6(6400 - 4900) = 900\) Pa.`, R`Lift \(= \Delta P\times A = 900\times20\).`],
      ans: R`18,000 N, pushing upward` },
    { level: 3, t: 9, q: R`A cup of tea cools from 80 °C to 60 °C in 10 min in a room at 20 °C. Estimate the time to cool from 60 °C to 40 °C (using Newton's law of cooling with average temperatures).`,
      steps: [R`First stretch: \(\dfrac{20}{10} = k\left(\dfrac{80 + 60}{2} - 20\right) = 50k\), so \(k = 0.04\) per minute.`, R`Second stretch: \(\dfrac{20}{t} = 0.04\left(\dfrac{60 + 40}{2} - 20\right) = 0.04\times30 = 1.2\).`, R`\(t = 20/1.2\).`],
      ans: R`About 16.7 min. Cooling slows down as the tea approaches room temperature.` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of stress is:`,
      options: [R`pascal (Pa)`, R`newton (N)`, R`newton metre (N m)`, R`joule (J)`], correct: 0,
      solution: R`Stress = force/area = N/m² = Pa.` },
    { level: 1, type: 'mcq', q: R`A hydraulic lift works on the principle of:`,
      options: [R`Bernoulli's theorem`, R`Archimedes' principle`, R`Pascal's law`, R`Hooke's law`], correct: 2,
      solution: R`Pressure applied to an enclosed liquid is transmitted equally, so a small piston can lift a load on a big one.` },
    { level: 1, type: 'mcq', q: R`Because of surface tension, a small free liquid drop takes the shape of a:`,
      options: [R`flat disc`, R`cube`, R`cylinder`, R`sphere`], correct: 3,
      solution: R`A sphere has the least surface area for a given volume, so it has the least surface energy.` },
    { level: 1, type: 'mcq', q: R`Heat from the Sun reaches the Earth by:`,
      options: [R`radiation`, R`conduction`, R`convection`, R`all three`], correct: 0,
      solution: R`Space is a vacuum; only radiation can travel through it.` },
    { level: 1, type: 'num', q: R`Find the gauge pressure (in Pa) 5 m below the surface of water. (ρ = 1000, g = 10)`,
      answer: 50000, tol: 1, unit: 'Pa',
      solution: R`\(\rho gh = 1000\times10\times5 = 5\times10^4\) Pa.` },
    { level: 1, type: 'num', q: R`How much heat (in J) raises 1 kg of water by 10 °C? (c = 4200 J/kg K)`,
      answer: 42000, tol: 1, unit: 'J',
      solution: R`\(Q = mc\Delta T = 1\times4200\times10 = 42000\) J.` },
    { level: 2, type: 'mcq', q: R`The speed of water coming out of a small hole in the side of a tank depends on:`,
      options: [R`the area of the hole`, R`the density of the liquid`, R`the depth of the hole below the water surface`, R`the area of the tank`], correct: 2,
      solution: R`Torricelli: \(v = \sqrt{2gh}\), where \(h\) is the depth of the hole below the surface.` },
    { level: 2, type: 'mcq', q: R`The terminal velocity of a small sphere falling through a viscous liquid is proportional to:`,
      options: [R`\(r\)`, R`\(r^2\)`, R`\(1/r\)`, R`\(r^3\)`], correct: 1,
      solution: R`\(v_t = \dfrac{2r^2(\rho - \sigma)g}{9\eta}\), so \(v_t \propto r^2\).` },
    { level: 2, type: 'mcq', q: R`Water rises in a thin glass tube because:`,
      options: [R`its viscosity is high`, R`gravity is weak inside the tube`, R`its adhesion to glass is greater than its cohesion`, R`its cohesion is greater than its adhesion`], correct: 2,
      solution: R`Water molecules stick to glass more strongly than to each other, so the water climbs the walls (concave meniscus).` },
    { level: 2, type: 'mcq', q: R`Water flows faster where a pipe becomes narrower. This is explained by:`,
      options: [R`Stokes' law`, R`Pascal's law`, R`Bernoulli's theorem`, R`the equation of continuity`], correct: 3,
      solution: R`\(A_1v_1 = A_2v_2\): a smaller area means a larger speed.` },
    { level: 2, type: 'num', q: R`Find the excess pressure (in Pa) inside a water drop of radius 1 mm. (T = 0.07 N/m)`,
      answer: 140, tol: 0.1, unit: 'Pa',
      solution: R`\(\Delta P = 2T/r = 2(0.07)/0.001 = 140\) Pa.` },
    { level: 2, type: 'num', q: R`A 1 m steel rod is heated by 100 °C. Find its increase in length (in mm). (\(\alpha = 1.2\times10^{-5}\)/°C)`,
      answer: 1.2, tol: 0.001, unit: 'mm',
      solution: R`\(\Delta L = L\alpha\Delta T = 1\times1.2\times10^{-5}\times100 = 1.2\times10^{-3}\) m = 1.2 mm.` },
    { level: 2, type: 'num', q: R`How much heat (in kJ) is needed to melt 0.5 kg of ice at 0 °C? (\(L_f = 3.36\times10^5\) J/kg)`,
      answer: 168, tol: 0.1, unit: 'kJ',
      solution: R`\(Q = mL = 0.5\times3.36\times10^5 = 1.68\times10^5\) J = 168 kJ.` },
    { level: 3, type: 'mcq', q: R`If the absolute temperature of a black body is doubled, the power it radiates becomes:`,
      options: [R`2 times`, R`4 times`, R`8 times`, R`16 times`], correct: 3,
      solution: R`Stefan's law: \(P \propto T^4\), and \(2^4 = 16\).` },
    { level: 3, type: 'mcq', q: R`A second wire of the same material has twice the length and twice the radius of the first. Under the same load, its extension is:`,
      options: [R`the same`, R`half`, R`double`, R`4 times`], correct: 1,
      solution: R`\(\Delta L = FL/(AY)\). Length ×2 and area ×4 give \(2/4 = 1/2\).` },
    { level: 3, type: 'num', q: R`Water flows at 2 m/s through a horizontal pipe of area 10 cm², where the pressure is \(2\times10^5\) Pa. Find the pressure (in Pa) where the area narrows to 5 cm².`,
      answer: 194000, tol: 10, unit: 'Pa',
      solution: R`Continuity: \(v_2 = 4\) m/s. Bernoulli: \(P_2 = 2\times10^5 - \tfrac12(1000)(16 - 4) = 200000 - 6000 = 194000\) Pa.` },
    { level: 3, type: 'num', q: R`The Sun's radiation peaks at about 500 nm. Using Wien's constant \(b = 2.9\times10^{-3}\) m K, estimate the Sun's surface temperature (in K).`,
      answer: 5800, tol: 5, unit: 'K',
      solution: R`\(T = b/\lambda_m = 2.9\times10^{-3}/(5\times10^{-7}) = 5800\) K.` }
  ]
});
