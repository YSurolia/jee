// Lesson: Trigonometry.
var R = String.raw;
JEE.lesson('maths', 'trigonometry', {
  theory: [
    { h: R`Angles and trigonometric ratios`,
      body: [
        R`Angles are measured in degrees or <b>radians</b>: \(\pi\) radians = 180°. So 90° = \(\pi/2\), 60° = \(\pi/3\), 45° = \(\pi/4\), 30° = \(\pi/6\).`,
        R`In a right-angled triangle, for an angle \(\theta\): \(\sin\theta = \dfrac{\text{opposite}}{\text{hypotenuse}}\), \(\cos\theta = \dfrac{\text{adjacent}}{\text{hypotenuse}}\), \(\tan\theta = \dfrac{\text{opposite}}{\text{adjacent}}\). Their reciprocals are cosec, sec and cot.`,
        R`For any angle, take a point on the <b>unit circle</b> at angle \(\theta\): its coordinates are \((\cos\theta, \sin\theta)\). This extends the ratios to all angles.`
      ],
      analogy: R`Imagine a Ferris wheel of radius 1. As it turns through angle θ, your seat's height above the centre is sin θ and your sideways distance from the centre is cos θ.`,
      points: [R`Standard values: \(\sin30^\circ = \tfrac12\), \(\sin45^\circ = \tfrac1{\sqrt2}\), \(\sin60^\circ = \tfrac{\sqrt3}{2}\); cos takes the same values in reverse order.`],
      check: { q: R`Convert 120° to radians.`, ans: R`\(120\times\pi/180 = 2\pi/3\).` } },

    { h: R`Signs in the four quadrants and allied angles`,
      body: [
        R`Which ratios are positive in each quadrant: <b>I</b> all; <b>II</b> sin (and cosec); <b>III</b> tan (and cot); <b>IV</b> cos (and sec). Remember "All School To College".`,
        R`<b>Allied angles:</b> for \(90^\circ \pm \theta\) and \(270^\circ \pm \theta\), sin becomes cos (and tan becomes cot); for \(180^\circ \pm \theta\) and \(360^\circ \pm \theta\), the function stays the same. Then fix the sign using the quadrant.`
      ],
      check: { q: R`Find \(\sin150^\circ\).`, ans: R`\(\sin(180^\circ - 30^\circ) = \sin30^\circ = \tfrac12\) (sin is positive in quadrant II).` } },

    { h: R`Key identities and compound angles`,
      body: [
        R`<b>Pythagorean identities:</b> \(\sin^2\theta + \cos^2\theta = 1\); \(1 + \tan^2\theta = \sec^2\theta\); \(1 + \cot^2\theta = \csc^2\theta\).`,
        R`<b>Compound angles:</b> \(\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B\); \(\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B\); \(\tan(A + B) = \dfrac{\tan A + \tan B}{1 - \tan A\tan B}\).`
      ],
      mistake: R`Writing \(\sin(A + B) = \sin A + \sin B\). Trig functions don't distribute over addition; use the compound-angle formula.` },

    { h: R`Multiple angles and other formulas`,
      body: [
        R`<b>Double angle:</b> \(\sin2A = 2\sin A\cos A\); \(\cos2A = \cos^2A - \sin^2A = 1 - 2\sin^2A = 2\cos^2A - 1\); \(\tan2A = \dfrac{2\tan A}{1 - \tan^2A}\).`,
        R`<b>Triple angle:</b> \(\sin3A = 3\sin A - 4\sin^3A\); \(\cos3A = 4\cos^3A - 3\cos A\).`,
        R`<b>Sum to product:</b> \(\sin C + \sin D = 2\sin\dfrac{C + D}{2}\cos\dfrac{C - D}{2}\), and similar formulas.`,
        R`<b>Range:</b> \(a\sin x + b\cos x\) lies between \(-\sqrt{a^2 + b^2}\) and \(\sqrt{a^2 + b^2}\).`
      ] },

    { h: R`Trigonometric functions and their graphs`,
      body: [
        R`sin x and cos x have <b>period</b> \(2\pi\) and range \([-1, 1]\). tan x has period \(\pi\), takes every real value, and is undefined at odd multiples of \(\pi/2\).`,
        R`\(\sin(kx)\) has period \(2\pi/k\). A sum of periodic functions has period equal to the LCM of their periods.`,
        R`sin is an odd function (\(\sin(-x) = -\sin x\)); cos is even (\(\cos(-x) = \cos x\)).`
      ],
      analogy: R`Tides rising and falling, or the voltage in your home's AC supply, follow sine waves. They repeat after a fixed period.` },

    { h: R`Inverse trigonometric functions`,
      body: [
        R`To undo sin, we restrict it to an interval where it is one-one. \(\sin^{-1}x\) gives an angle in \([-\pi/2, \pi/2]\); \(\cos^{-1}x\) gives one in \([0, \pi]\); \(\tan^{-1}x\) gives one in \((-\pi/2, \pi/2)\). These are the <b>principal values</b>.`,
        R`<b>Properties:</b> \(\sin^{-1}x + \cos^{-1}x = \dfrac\pi2\); \(\tan^{-1}x + \cot^{-1}x = \dfrac\pi2\); \(\sin^{-1}(-x) = -\sin^{-1}x\); \(\cos^{-1}(-x) = \pi - \cos^{-1}x\).`,
        R`\(\tan^{-1}x + \tan^{-1}y = \tan^{-1}\dfrac{x + y}{1 - xy}\) when \(xy < 1\) (add \(\pi\) when \(xy > 1\) and x, y > 0).`
      ],
      mistake: R`Saying \(\cos^{-1}(-\tfrac12) = -\tfrac\pi3\). The principal value of cos⁻¹ must lie in \([0, \pi]\): it is \(2\pi/3\).` },

    { h: R`Trigonometric equations`,
      body: [
        R`Because trig functions repeat, equations like \(\sin x = \tfrac12\) have infinitely many solutions. The <b>general solution</b> captures all of them:`,
        R`\(\sin x = \sin\alpha\): \(x = n\pi + (-1)^n\alpha\). \(\cos x = \cos\alpha\): \(x = 2n\pi \pm \alpha\). \(\tan x = \tan\alpha\): \(x = n\pi + \alpha\) (n is any integer).`,
        R`Special cases: \(\sin x = 0\) gives \(x = n\pi\); \(\cos x = 0\) gives \(x = (2n + 1)\pi/2\).`,
        R`<b>Strategy:</b> use identities to rewrite the equation in one function, factorise, then solve each factor. Reject impossible values (like \(\sin x = 2\)).`
      ] }
  ],

  examples: [
    { level: 1, t: 1, q: R`Write the values of sin 30°, cos 60° and tan 45°, and convert 120° to radians.`,
      steps: [R`Recall the standard values.`, R`Radians = degrees × π/180.`],
      ans: R`1/2, 1/2, 1; \(2\pi/3\)` },
    { level: 1, t: 0, q: R`If \(\sin\theta = \tfrac35\) and θ is acute, find \(\cos\theta\) and \(\tan\theta\).`,
      steps: [R`\(\cos^2\theta = 1 - \tfrac9{25} = \tfrac{16}{25}\), so \(\cos\theta = \tfrac45\) (positive, since θ is acute).`, R`\(\tan\theta = \sin\theta/\cos\theta\).`],
      ans: R`\(\cos\theta = 4/5\), \(\tan\theta = 3/4\)` },
    { level: 1, t: 2, q: R`Find \(\sin^{-1}\left(\tfrac12\right)\) and \(\cos^{-1}\left(-\tfrac12\right)\).`,
      steps: [R`\(\sin(\pi/6) = 1/2\), and \(\pi/6\) is in \([-\pi/2, \pi/2]\).`, R`\(\cos^{-1}(-x) = \pi - \cos^{-1}x = \pi - \pi/3\).`],
      ans: R`\(\pi/6\) and \(2\pi/3\)` },
    { level: 2, t: 0, q: R`Find the exact value of \(\cos15^\circ\).`,
      steps: [R`\(\cos(45^\circ - 30^\circ) = \cos45^\circ\cos30^\circ + \sin45^\circ\sin30^\circ\).`, R`\(= \dfrac{1}{\sqrt2}\cdot\dfrac{\sqrt3}{2} + \dfrac1{\sqrt2}\cdot\dfrac12\).`],
      ans: R`\(\dfrac{\sqrt6 + \sqrt2}{4} \approx 0.966\)` },
    { level: 2, t: 3, q: R`Find the general solution of \(\tan x = \sqrt3\).`,
      steps: [R`\(\tan(\pi/3) = \sqrt3\).`, R`\(\tan x = \tan\alpha\) gives \(x = n\pi + \alpha\).`],
      ans: R`\(x = n\pi + \dfrac\pi3\), \(n \in \mathbb Z\)` },
    { level: 3, t: 2, q: R`Show that \(\tan^{-1}\tfrac12 + \tan^{-1}\tfrac13 = \dfrac\pi4\).`,
      steps: [R`Here \(xy = 1/6 < 1\), so use \(\tan^{-1}\dfrac{x + y}{1 - xy}\).`, R`\(\dfrac{\frac12 + \frac13}{1 - \frac16} = \dfrac{5/6}{5/6} = 1\).`, R`\(\tan^{-1}1 = \pi/4\).`],
      ans: R`\(\pi/4\)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`\(\sin30^\circ\) equals:`,
      options: [R`1/2`, R`\(\sqrt3/2\)`, R`1`, R`0`], correct: 0,
      solution: R`A standard value to memorise.` },
    { level: 1, type: 'mcq', q: R`\(\pi\) radians is equal to:`,
      options: [R`90°`, R`180°`, R`360°`, R`60°`], correct: 1,
      solution: R`Half a full turn: 180°.` },
    { level: 1, type: 'mcq', q: R`\(\sin^2\theta + \cos^2\theta\) equals:`,
      options: [R`0`, R`2`, R`\(\tan\theta\)`, R`1`], correct: 3,
      solution: R`The Pythagorean identity, true for every θ.` },
    { level: 1, type: 'mcq', q: R`\(\tan45^\circ\) equals:`,
      options: [R`0`, R`\(1/\sqrt3\)`, R`1`, R`\(\sqrt3\)`], correct: 2,
      solution: R`Opposite = adjacent in a 45° right triangle.` },
    { level: 1, type: 'num', q: R`If \(\sin\theta = 3/5\) and θ is acute, find \(\cos\theta\).`,
      answer: 0.8, tol: 0.001, unit: '',
      solution: R`\(\sqrt{1 - 9/25} = 4/5 = 0.8\).` },
    { level: 1, type: 'num', q: R`120° = xπ radians. Find x (to 4 decimal places).`,
      answer: 0.6667, tol: 0.0005, unit: '',
      solution: R`120/180 = 2/3 ≈ 0.6667.` },
    { level: 2, type: 'mcq', q: R`The period of \(\sin x\) is:`,
      options: [R`\(\pi\)`, R`\(2\pi\)`, R`\(\pi/2\)`, R`\(4\pi\)`], correct: 1,
      solution: R`sin repeats every full turn, \(2\pi\).` },
    { level: 2, type: 'mcq', q: R`In the second quadrant, the ratio that is positive is:`,
      options: [R`sin`, R`cos`, R`tan`, R`sec`], correct: 0,
      solution: R`"All School To College": quadrant II is Sin.` },
    { level: 2, type: 'mcq', q: R`The principal value of \(\cos^{-1}\left(-\tfrac12\right)\) is:`,
      options: [R`\(\pi/3\)`, R`\(-\pi/3\)`, R`\(4\pi/3\)`, R`\(2\pi/3\)`], correct: 3,
      solution: R`\(\pi - \pi/3 = 2\pi/3\), which lies in \([0, \pi]\).` },
    { level: 2, type: 'mcq', q: R`\(\cos2\theta\) is equal to:`,
      options: [R`\(2\sin\theta\cos\theta\)`, R`\(1 - 2\sin^2\theta\)`, R`\(2\cos^2\theta + 1\)`, R`\(\sin^2\theta - \cos^2\theta\)`], correct: 1,
      solution: R`\(\cos2\theta = \cos^2\theta - \sin^2\theta = 1 - 2\sin^2\theta\).` },
    { level: 2, type: 'num', q: R`Find \(\cos15^\circ\) to 4 decimal places.`,
      answer: 0.9659, tol: 0.0005, unit: '',
      solution: R`\((\sqrt6 + \sqrt2)/4 \approx 0.9659\).` },
    { level: 2, type: 'num', q: R`Find \(\sin^{-1}(1) + \cos^{-1}(1)\) in degrees.`,
      answer: 90, tol: 0.01, unit: '°',
      solution: R`\(\pi/2 + 0 = \pi/2\), which is 90°.` },
    { level: 2, type: 'num', q: R`Find the maximum value of \(5\sin x + 12\cos x\).`,
      answer: 13, tol: 0.001, unit: '',
      solution: R`\(\sqrt{25 + 144} = 13\).` },
    { level: 3, type: 'mcq', q: R`\(\tan^{-1}\tfrac12 + \tan^{-1}\tfrac13\) equals:`,
      options: [R`\(\pi/6\)`, R`\(\pi/4\)`, R`\(\pi/3\)`, R`\(\pi/2\)`], correct: 1,
      solution: R`\(\tan^{-1}\dfrac{5/6}{5/6} = \tan^{-1}1 = \pi/4\).` },
    { level: 3, type: 'mcq', q: R`The general solution of \(\cos x = 0\) is:`,
      options: [R`\(x = n\pi\)`, R`\(x = 2n\pi\)`, R`\(x = n\pi/2\)`, R`\(x = (2n + 1)\pi/2\)`], correct: 3,
      solution: R`cos is zero at odd multiples of \(\pi/2\).` },
    { level: 3, type: 'num', q: R`How many solutions does \(\sin x = \tfrac12\) have in \([0, 2\pi]\)?`,
      answer: 2, tol: 0.001, unit: '',
      solution: R`\(x = \pi/6\) and \(5\pi/6\).` },
    { level: 3, type: 'num', q: R`Find \(\sin\left(2\tan^{-1}\tfrac12\right)\).`,
      answer: 0.8, tol: 0.001, unit: '',
      solution: R`With \(t = \tan\theta = 1/2\): \(\sin2\theta = \dfrac{2t}{1 + t^2} = \dfrac{1}{1.25} = 0.8\).` }
  ]
});
