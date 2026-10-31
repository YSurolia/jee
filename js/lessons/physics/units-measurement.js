// Lesson: Units and Measurements.
var R = String.raw;
JEE.lesson('physics', 'units-measurement', {
  theory: [
    { h: R`Why do we need units?`,
      body: [
        R`If someone says "the table is 2 long", you cannot tell whether they mean 2 metres, 2 feet or 2 hand-spans. Every measurement needs a <b>number</b> and a <b>unit</b>: length = 2 m.`,
        R`A <b>unit</b> is an agreed standard amount that everyone compares against. Scientists all over the world use the <b>SI system</b> (Système International) so that their results can be compared.`,
        R`SI has <b>7 base units</b>: metre (m) for length, kilogram (kg) for mass, second (s) for time, ampere (A) for current, kelvin (K) for temperature, mole (mol) for amount of substance and candela (cd) for luminous intensity.`
      ],
      analogy: R`Units are like a common language. A shopkeeper in Delhi and one in Chennai both understand "1 kg of rice", so trade works. SI does the same for scientists.`,
      points: [R`Measurement = number × unit.`, R`The bigger the unit, the smaller the number: 1 km = 1000 m.`],
      check: { q: R`Which SI base unit is used for temperature?`, ans: R`The kelvin (K). Celsius is allowed in daily life, but K is the SI base unit.` } },

    { h: R`Fundamental and derived units, and prefixes`,
      body: [
        R`The 7 base units are <b>fundamental</b>: they do not depend on any other unit. Every other unit is <b>derived</b> by multiplying or dividing base units.`,
        R`For example, speed = distance ÷ time, so its unit is m/s. Force = mass × acceleration, so its unit is kg m/s², which is given the name newton (N).`,
        R`Very large or very small numbers use <b>prefixes</b>: kilo (k) = \(10^3\), mega (M) = \(10^6\), giga (G) = \(10^9\), centi (c) = \(10^{-2}\), milli (m) = \(10^{-3}\), micro (μ) = \(10^{-6}\), nano (n) = \(10^{-9}\), pico (p) = \(10^{-12}\).`
      ],
      points: [R`Derived units are built from base units: 1 J = 1 N m = 1 kg m² s⁻².`, R`Handy conversion: 1 km/h = \(\tfrac{5}{18}\) m/s.`],
      mistake: R`Writing a symbol in the wrong case: "M" is mega but "m" is milli, a difference of \(10^9\)!` },

    { h: R`Least count: how fine can an instrument measure?`,
      body: [
        R`The <b>least count</b> is the smallest value an instrument can measure correctly. A school ruler has a least count of 1 mm. A vernier calliper reads to 0.1 mm, and a screw gauge to 0.01 mm.`,
        R`Any reading can be wrong by up to one least count, so we write it as, for example, \(12.4 \pm 0.1\) cm.`,
        R`To reduce the error, use an instrument with a smaller least count, or measure many items together and divide (for example, time 20 swings of a pendulum instead of 1).`
      ],
      analogy: R`A kitchen scale that shows only whole grams cannot tell you whether a pinch of salt is 0.3 g or 0.7 g. Its least count, 1 g, is too big for the job.`,
      check: { q: R`A stopwatch has a least count of 0.1 s. Is it better to time 1 swing or 20 swings of a pendulum?`, ans: R`20 swings. The 0.1 s error is then shared over 20 swings, so the error per swing is only 0.005 s.` } },

    { h: R`Significant figures`,
      body: [
        R`Significant figures (sig figs) are the digits in a measurement that we actually trust. They show how precise a measurement is.`,
        R`<b>Rules:</b> (1) All non-zero digits count. (2) Zeros between non-zero digits count (2005 has 4). (3) Zeros at the start do not count (0.0032 has 2). (4) Zeros at the end count if there is a decimal point (2.50 has 3).`,
        R`<b>In calculations:</b> when multiplying or dividing, keep as many sig figs as the least precise number. When adding or subtracting, keep as many <i>decimal places</i> as the least precise number.`
      ],
      points: [R`Changing units never changes sig figs: 2.50 m = 250 cm = 0.00250 km (all 3 sig figs).`, R`Scientific notation removes confusion: \(5.00\times10^2\) clearly has 3 sig figs.`],
      mistake: R`Copying every digit from the calculator. \(2.5\times3.42 = 8.55\) should be reported as 8.6, because 2.5 has only 2 sig figs.` },

    { h: R`Errors in measurement`,
      body: [
        R`No measurement is perfect. The difference between the measured value and the true value is the <b>error</b>.`,
        R`<b>Systematic errors</b> push every reading the same way (a wrongly set zero, a stretched tape). <b>Random errors</b> go up and down unpredictably; taking the average of many readings reduces them.`,
        R`<b>Absolute error</b> \(\Delta a\) is the size of the error. <b>Relative error</b> = \(\Delta a / a\). <b>Percentage error</b> = \(\dfrac{\Delta a}{a}\times100\%\).`,
        R`<b>Combining errors:</b> in a sum or difference, absolute errors add. In a product or quotient, percentage errors add. A power \(n\) multiplies the percentage error by \(n\).`
      ],
      analogy: R`If your bathroom scale always shows 1 kg extra, that is a systematic error. If your hand shakes while reading a ruler, that is a random error.`,
      points: [R`\(Z = A^pB^q/C^r\) gives \(\dfrac{\Delta Z}{Z} = p\dfrac{\Delta A}{A} + q\dfrac{\Delta B}{B} + r\dfrac{\Delta C}{C}\).`, R`Errors always <b>add</b>, even for division: we take the worst case.`],
      mistake: R`Subtracting errors when quantities are divided or subtracted. Errors are always added to get the maximum possible error.` },

    { h: R`Dimensions of physical quantities`,
      body: [
        R`The <b>dimensions</b> of a quantity show how it is built from the base quantities: mass [M], length [L] and time [T] (plus [A] for current and [K] for temperature).`,
        R`For example, speed = length ÷ time, so \([v] = [LT^{-1}]\). Force = mass × acceleration, so \([F] = [MLT^{-2}]\). Energy = force × distance, so \([E] = [ML^2T^{-2}]\).`,
        R`Pure numbers, angles and ratios such as strain have no dimensions; they are called <b>dimensionless</b>.`
      ],
      points: [R`Pressure and stress: \([ML^{-1}T^{-2}]\). Power: \([ML^2T^{-3}]\). Momentum and impulse: \([MLT^{-1}]\).`, R`Work and torque have the same dimensions \([ML^2T^{-2}]\) but are different quantities.`],
      check: { q: R`Find the dimensions of momentum (\(p = mv\)).`, ans: R`\([M][LT^{-1}] = [MLT^{-1}]\).` } },

    { h: R`Using dimensions: checking, converting and deriving`,
      body: [
        R`<b>Principle of homogeneity:</b> you can only add, subtract or equate quantities with the same dimensions. You cannot add a length to a time, just as you cannot add 5 apples to 3 rupees.`,
        R`This gives three uses. <b>(1) Check</b> whether an equation could be right. <b>(2) Convert</b> a value from one system of units to another. <b>(3) Derive</b> a likely formula, by assuming the answer is a product of powers and matching dimensions.`,
        R`<b>Limits:</b> dimensional analysis cannot find pure-number constants such as \(2\pi\) or \(\tfrac12\), cannot handle sums of several terms, and fails for sin, log and exponential functions.`
      ],
      analogy: R`It is like checking a recipe's units: if a step says "add 2 kg of minutes", you know at once it is wrong, without even tasting the food.`,
      points: [R`A dimensionally correct equation <i>may</i> still be wrong (wrong constant). A dimensionally wrong equation is <i>always</i> wrong.`, R`Arguments of sin, cos, log and exp must be dimensionless.`] }
  ],

  examples: [
    { level: 1, t: 0, q: R`Convert 72 km/h into m/s.`,
      steps: [R`\(1\) km/h \(= \dfrac{1000\text{ m}}{3600\text{ s}} = \dfrac{5}{18}\) m/s.`, R`\(72\times\dfrac{5}{18} = 20\).`],
      ans: R`20 m/s` },
    { level: 1, t: 3, q: R`How many significant figures are in (a) 2.050 (b) 0.0030 (c) \(6.02\times10^{23}\)?`,
      steps: [R`(a) 2, 0 (between), 5, 0 (after the decimal point) all count.`, R`(b) The leading zeros do not count; "3" and the trailing "0" after the decimal point do.`, R`(c) In scientific notation, count the digits of 6.02.`],
      ans: R`(a) 4 (b) 2 (c) 3` },
    { level: 1, t: 2, q: R`A pencil measured with a ruler marked in millimetres is 12.4 cm long. What is the least count, and what is the percentage error?`,
      steps: [R`Least count = 1 mm = 0.1 cm, so the length is \(12.4 \pm 0.1\) cm.`, R`Percentage error \(= \dfrac{0.1}{12.4}\times100\).`],
      ans: R`0.1 cm; about 0.8%` },
    { level: 1, t: 5, q: R`Write the dimensions of velocity, acceleration and momentum.`,
      steps: [R`Velocity = length ÷ time.`, R`Acceleration = velocity ÷ time.`, R`Momentum = mass × velocity.`],
      ans: R`\([LT^{-1}]\), \([LT^{-2}]\), \([MLT^{-1}]\)` },
    { level: 3, t: 4, q: R`In a pendulum experiment, \(L = 100.0 \pm 0.1\) cm and \(T = 2.00 \pm 0.01\) s. Find the percentage error in \(g = 4\pi^2L/T^2\).`,
      steps: [R`\(\dfrac{\Delta g}{g} = \dfrac{\Delta L}{L} + 2\dfrac{\Delta T}{T}\).`, R`\(\dfrac{\Delta L}{L} = 0.1\%\); \(\dfrac{\Delta T}{T} = 0.5\%\), doubled to 1%.`, R`Add: \(0.1\% + 1\%\).`],
      ans: R`1.1%. Timing is the main source of error, so time many swings.` },
    { level: 3, t: 6, q: R`In the van der Waals equation \(\left(P + \dfrac{a}{V^2}\right)(V - b) = RT\), find the dimensions of \(a\) and \(b\).`,
      steps: [R`\(b\) is subtracted from \(V\), so \([b] = [V] = [L^3]\).`, R`\(a/V^2\) is added to \(P\), so \([a] = [P][V^2] = [ML^{-1}T^{-2}][L^6]\).`],
      ans: R`\([a] = [ML^5T^{-2}]\), \([b] = [L^3]\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The SI unit of luminous intensity is the:`,
      options: [R`lumen`, R`candela`, R`lux`, R`watt`], correct: 1,
      solution: R`Candela (cd) is one of the 7 SI base units. Lumen and lux are derived units.` },
    { level: 1, type: 'mcq', q: R`Which of these is a derived quantity?`,
      options: [R`mass`, R`time`, R`velocity`, R`electric current`], correct: 2,
      solution: R`Velocity = length ÷ time, so it is derived. The others are base quantities.` },
    { level: 1, type: 'mcq', q: R`The prefix "micro" (μ) stands for:`,
      options: [R`\(10^{-3}\)`, R`\(10^{-9}\)`, R`\(10^{6}\)`, R`\(10^{-6}\)`], correct: 3,
      solution: R`micro = \(10^{-6}\). milli = \(10^{-3}\), nano = \(10^{-9}\), mega = \(10^6\).` },
    { level: 1, type: 'mcq', q: R`How many significant figures are there in 0.04050?`,
      options: [R`4`, R`3`, R`5`, R`6`], correct: 0,
      solution: R`Leading zeros don't count. 4, 0, 5 and the trailing 0 (after the decimal point) do: 4 sig figs.` },
    { level: 1, type: 'num', q: R`Convert 36 km/h into m/s.`,
      answer: 10, tol: 0.01, unit: 'm/s',
      solution: R`\(36\times\tfrac{5}{18} = 10\) m/s.` },
    { level: 1, type: 'num', q: R`A length of 2.0 m is measured with an error of 0.02 m. What is the percentage error?`,
      answer: 1, tol: 0.01, unit: '%',
      solution: R`\(\dfrac{0.02}{2.0}\times100 = 1\%\).` },
    { level: 2, type: 'mcq', q: R`The dimensional formula of work is:`,
      options: [R`\([MLT^{-2}]\)`, R`\([ML^2T^{-2}]\)`, R`\([ML^2T^{-3}]\)`, R`\([ML^{-1}T^{-2}]\)`], correct: 1,
      solution: R`Work = force × distance = \([MLT^{-2}][L] = [ML^2T^{-2}]\).` },
    { level: 2, type: 'mcq', q: R`Which pair of quantities has the same dimensions?`,
      options: [R`force and pressure`, R`power and energy`, R`velocity and acceleration`, R`work and torque`], correct: 3,
      solution: R`Work = force × distance and torque = force × perpendicular distance, so both are \([ML^2T^{-2}]\).` },
    { level: 2, type: 'mcq', q: R`The product \(3.2\times1.25\) written with the correct number of significant figures is:`,
      options: [R`4`, R`4.0`, R`4.00`, R`4.000`], correct: 1,
      solution: R`3.2 has 2 sig figs, so the answer (4.000) is rounded to 2 sig figs: 4.0.` },
    { level: 2, type: 'mcq', q: R`\(Z = \dfrac{A^2B}{C}\). The percentage errors in A, B and C are 1%, 2% and 3%. The maximum percentage error in Z is:`,
      options: [R`6%`, R`5%`, R`7%`, R`4%`], correct: 2,
      solution: R`\(2(1\%) + 2\% + 3\% = 7\%\). Errors always add, even for division.` },
    { level: 2, type: 'num', q: R`In a vernier calliper, 10 vernier divisions equal 9 main-scale divisions of 1 mm each. Find the least count in mm.`,
      answer: 0.1, tol: 0.001, unit: 'mm',
      solution: R`1 VSD = 0.9 mm. LC = 1 MSD − 1 VSD = 1 − 0.9 = 0.1 mm.` },
    { level: 2, type: 'num', q: R`A screw gauge has a pitch of 1 mm and 100 divisions on its circular scale. Find its least count in mm.`,
      answer: 0.01, tol: 0.0001, unit: 'mm',
      solution: R`LC = pitch ÷ number of divisions = 1/100 = 0.01 mm.` },
    { level: 2, type: 'num', q: R`The speed of a body is measured with a 2% error (the mass is exact). What is the percentage error in its kinetic energy?`,
      answer: 4, tol: 0.01, unit: '%',
      solution: R`\(K = \tfrac12mv^2\), so the error in \(v\) is doubled: \(2\times2\% = 4\%\).` },
    { level: 3, type: 'mcq', q: R`The time period \(T\) of a vibrating liquid drop depends on its density \(\rho\), radius \(r\) and surface tension \(S\) (in N/m). Dimensional analysis gives \(T \propto\):`,
      options: [R`\(\sqrt{\rho r^3/S}\)`, R`\(\sqrt{S/(\rho r^3)}\)`, R`\(\rho r/S\)`, R`\(\sqrt{\rho r/S}\)`], correct: 0,
      solution: R`\([S] = [MT^{-2}]\) and \([\rho r^3] = [M]\), so \([\rho r^3/S] = [T^2]\). Taking the square root gives a time.` },
    { level: 3, type: 'mcq', q: R`Which combination of Planck's constant \(h\), the speed of light \(c\) and the gravitational constant \(G\) has the dimensions of length?`,
      options: [R`\(\sqrt{hc/G}\)`, R`\(hG/c\)`, R`\(\sqrt{hG/c^3}\)`, R`\(\sqrt{Gc/h^3}\)`], correct: 2,
      solution: R`\([h] = ML^2T^{-1}\), \([G] = M^{-1}L^3T^{-2}\), \([c] = LT^{-1}\). \(hG = L^5T^{-3}\); dividing by \(c^3 = L^3T^{-3}\) gives \(L^2\); its square root is a length (the Planck length).` },
    { level: 3, type: 'num', q: R`In a new system of units, the unit of mass is 10 kg, the unit of length is 10 m and the unit of time is 10 s. How many new units of energy equal 1 joule?`,
      answer: 0.1, tol: 0.001, unit: '',
      solution: R`\([E] = ML^2T^{-2}\), so \(n_2 = 1\times\left(\tfrac{1}{10}\right)\left(\tfrac{1}{10}\right)^2\left(\tfrac{1}{10}\right)^{-2} = 0.1\).` }
  ]
});
