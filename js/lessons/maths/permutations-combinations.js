// Lesson: Permutations and Combinations.
var R = String.raw;
JEE.lesson('maths', 'permutations-combinations', {
  theory: [
    { h: R`The fundamental principle of counting`,
      body: [
        R`<b>Multiplication principle:</b> if one job can be done in m ways and, after it, a second job in n ways, both together can be done in \(m\times n\) ways. "AND" means multiply.`,
        R`<b>Addition principle:</b> if a job can be done in m ways OR in n other ways (not both), there are \(m + n\) ways. "OR" means add.`,
        R`These two ideas are the root of every counting problem in this chapter.`
      ],
      analogy: R`With 3 shirts and 4 trousers you can make 3 × 4 = 12 different outfits: each shirt goes with each pair of trousers.`,
      check: { q: R`A restaurant offers 4 starters and 5 main dishes. How many two-course meals are possible?`, ans: R`4 × 5 = 20.` } },

    { h: R`Factorials`,
      body: [
        R`\(n! = n\times(n - 1)\times\dots\times2\times1\). For example, \(5! = 120\). By definition, \(0! = 1\).`,
        R`n! counts the ways to arrange n different objects in a row: n choices for the first place, \(n - 1\) for the second, and so on.`
      ] },

    { h: R`Permutations: arrangements where order matters`,
      body: [
        R`The number of ways to arrange r objects chosen from n different objects is \({}^nP_r = \dfrac{n!}{(n - r)!}\).`,
        R`<b>With repetition allowed:</b> \(n^r\). <b>With identical objects:</b> n objects where p are alike, q are alike, … gives \(\dfrac{n!}{p!\,q!\cdots}\).`,
        R`<b>Circular arrangements:</b> n different objects around a circle: \((n - 1)!\). If clockwise and anticlockwise are the same (a necklace or garland), \(\dfrac{(n - 1)!}{2}\).`
      ],
      analogy: R`Choosing a captain and a vice-captain from 11 players is a permutation: Rohit as captain with Virat as vice-captain is different from the other way round.`,
      mistake: R`Using \(n!\) for circular arrangements. Rotating everyone one seat gives the same arrangement, so we divide by n: \((n - 1)!\).` },

    { h: R`Combinations: selections where order doesn't matter`,
      body: [
        R`The number of ways to <b>choose</b> r objects from n different objects is \({}^nC_r = \dfrac{n!}{r!(n - r)!}\).`,
        R`<b>Properties:</b> \({}^nC_0 = {}^nC_n = 1\); \({}^nC_r = {}^nC_{n-r}\) (choosing r to take is the same as choosing \(n - r\) to leave); \({}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r\).`
      ],
      analogy: R`Choosing 3 friends to invite to a movie is a combination: inviting A, B, C is the same group as C, A, B.` },

    { h: R`How P(n, r) and C(n, r) are related`,
      body: [
        R`Every selection of r objects can be arranged in r! ways, so \({}^nP_r = r!\times{}^nC_r\).`,
        R`<b>How to decide:</b> ask "does the order or position matter?" Arrangements, words, numbers and seating are permutations. Teams, committees, groups and hands of cards are combinations.`,
        R`<b>Restrictions:</b> "always together" means glue them into one block, then arrange the block's insides. "Never together" = total − together. "At least one" = total − none.`
      ] },

    { h: R`Common applications`,
      body: [
        R`<b>Geometry:</b> n points (no three collinear) give \({}^nC_2\) lines and \({}^nC_3\) triangles. A polygon with n sides has \({}^nC_2 - n = \dfrac{n(n - 3)}{2}\) diagonals. If m of the points are collinear, subtract the "triangles" that are really straight lines: \({}^mC_3\).`,
        R`<b>Handshakes:</b> each pair shakes hands once, giving \({}^nC_2\).`,
        R`<b>Numbers:</b> watch out for 0 (it can't be the first digit) and for divisibility conditions on the last digit.`
      ] }
  ],

  examples: [
    { level: 1, t: 0, q: R`You have 3 shirts and 4 pairs of trousers. How many different outfits can you wear?`,
      steps: [R`Choose a shirt (3 ways) AND a pair of trousers (4 ways): multiply.`],
      ans: R`12` },
    { level: 1, t: 3, q: R`Find \({}^5P_2\) and \({}^5C_2\).`,
      steps: [R`\({}^5P_2 = \dfrac{5!}{3!} = 5\times4 = 20\).`, R`\({}^5C_2 = \dfrac{20}{2!} = 10\).`],
      ans: R`20 and 10` },
    { level: 1, t: 1, q: R`In how many ways can 4 different books be arranged on a shelf?`,
      steps: [R`4 choices for the first place, 3 for the second, 2, then 1.`],
      ans: R`\(4! = 24\)` },
    { level: 2, t: 2, q: R`In how many ways can a cricket team of 11 be chosen from 15 players?`,
      steps: [R`Order doesn't matter, so this is a combination: \({}^{15}C_{11} = {}^{15}C_4\).`, R`\(= \dfrac{15\times14\times13\times12}{24}\).`],
      ans: R`1365` },
    { level: 3, t: 4, q: R`How many 4-digit numbers with all digits different are divisible by 5?`,
      steps: [R`The last digit must be 0 or 5.`, R`Last digit 0: the first three places use the remaining 9 digits: \(9\times8\times7 = 504\).`, R`Last digit 5: the first digit can't be 0 or 5 (8 choices), then 8 and 7 choices: \(8\times8\times7 = 448\).`],
      ans: R`504 + 448 = 952` },
    { level: 3, t: 1, q: R`How many different arrangements are there of the letters of MISSISSIPPI?`,
      steps: [R`11 letters: M ×1, I ×4, S ×4, P ×2.`, R`\(\dfrac{11!}{4!\,4!\,2!} = \dfrac{39916800}{1152}\).`],
      ans: R`34,650` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`The value of 5! is:`,
      options: [R`20`, R`60`, R`120`, R`24`], correct: 2,
      solution: R`5 × 4 × 3 × 2 × 1 = 120.` },
    { level: 1, type: 'mcq', q: R`The value of 0! is:`,
      options: [R`0`, R`1`, R`undefined`, R`infinite`], correct: 1,
      solution: R`By definition 0! = 1 (there is exactly one way to arrange nothing).` },
    { level: 1, type: 'mcq', q: R`\({}^nC_0\) equals:`,
      options: [R`1`, R`0`, R`n`, R`n!`], correct: 0,
      solution: R`There is exactly one way to choose nothing.` },
    { level: 1, type: 'mcq', q: R`In how many ways can 1 person be chosen from 7?`,
      options: [R`1`, R`49`, R`5040`, R`7`], correct: 3,
      solution: R`\({}^7C_1 = 7\).` },
    { level: 1, type: 'num', q: R`Find \({}^6P_2\).`,
      answer: 30, tol: 0.001, unit: '',
      solution: R`6 × 5 = 30.` },
    { level: 1, type: 'num', q: R`Find \({}^6C_2\).`,
      answer: 15, tol: 0.001, unit: '',
      solution: R`30/2! = 15.` },
    { level: 2, type: 'mcq', q: R`\({}^nC_r\) is always equal to:`,
      options: [R`\({}^nC_{r+1}\)`, R`\({}^nC_{n-r}\)`, R`\({}^nP_r\)`, R`r!`], correct: 1,
      solution: R`Choosing r items to take = choosing n − r items to leave.` },
    { level: 2, type: 'mcq', q: R`How many straight lines can be drawn through 6 points, no three of which are collinear?`,
      options: [R`6`, R`12`, R`15`, R`30`], correct: 2,
      solution: R`Each pair of points gives a line: \({}^6C_2 = 15\).` },
    { level: 2, type: 'mcq', q: R`How many arrangements are there of the letters of APPLE?`,
      options: [R`60`, R`120`, R`30`, R`24`], correct: 0,
      solution: R`5!/2! = 60 (P appears twice).` },
    { level: 2, type: 'mcq', q: R`In how many ways can 5 people sit around a round table?`,
      options: [R`120`, R`60`, R`12`, R`24`], correct: 3,
      solution: R`(5 − 1)! = 24.` },
    { level: 2, type: 'num', q: R`10 people each shake hands once with every other person. How many handshakes are there?`,
      answer: 45, tol: 0.001, unit: '',
      solution: R`\({}^{10}C_2 = 45\).` },
    { level: 2, type: 'num', q: R`In how many ways can a team of 11 be chosen from 15 players?`,
      answer: 1365, tol: 0.001, unit: '',
      solution: R`\({}^{15}C_{11} = {}^{15}C_4 = 1365\).` },
    { level: 2, type: 'num', q: R`How many 3-digit numbers can be formed from the digits 1–5 if digits may repeat?`,
      answer: 125, tol: 0.001, unit: '',
      solution: R`\(5\times5\times5 = 125\).` },
    { level: 3, type: 'mcq', q: R`The number of arrangements of the letters of MISSISSIPPI is:`,
      options: [R`34,650`, R`39,916,800`, R`1,663,200`, R`69,300`], correct: 0,
      solution: R`\(11!/(4!\,4!\,2!) = 34{,}650\).` },
    { level: 3, type: 'mcq', q: R`There are 10 points in a plane, of which exactly 4 are collinear. How many triangles can be formed?`,
      options: [R`120`, R`116`, R`112`, R`104`], correct: 1,
      solution: R`\({}^{10}C_3 - {}^4C_3 = 120 - 4 = 116\).` },
    { level: 3, type: 'num', q: R`How many 4-digit numbers with all digits different are divisible by 5?`,
      answer: 952, tol: 0.001, unit: '',
      solution: R`Ending in 0: 504. Ending in 5: 448. Total 952.` },
    { level: 3, type: 'num', q: R`In how many ways can 3 boys and 3 girls stand in a row so that all the girls are together?`,
      answer: 144, tol: 0.001, unit: '',
      solution: R`Treat the girls as one block: 4 units in 4! ways, and the girls inside the block in 3! ways: 24 × 6 = 144.` }
  ]
});
