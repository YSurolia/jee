// Lesson: Binomial Theorem.
var R = String.raw;
JEE.lesson('maths', 'binomial-theorem', {
  theory: [
    { h: R`Expanding powers: Pascal's triangle`,
      body: [
        R`Multiplying out \((a + b)^2 = a^2 + 2ab + b^2\) is easy, but \((a + b)^{10}\) by hand would take ages. The binomial theorem gives a shortcut.`,
        R`Look at the coefficients: \((a + b)^1\): 1 1; \((a + b)^2\): 1 2 1; \((a + b)^3\): 1 3 3 1; \((a + b)^4\): 1 4 6 4 1. Each number is the sum of the two above it. This is <b>Pascal's triangle</b>.`,
        R`In each term, the power of a goes down by one and the power of b goes up by one, and the two powers always add up to n.`
      ],
      analogy: R`Pascal's triangle is like a pyramid of building blocks where each block holds the sum of the two blocks resting directly above it.`,
      check: { q: R`Write out \((a + b)^3\).`, ans: R`\(a^3 + 3a^2b + 3ab^2 + b^3\).` } },

    { h: R`The binomial theorem`,
      body: [
        R`For a positive integer n: \((a + b)^n = {}^nC_0a^n + {}^nC_1a^{n-1}b + {}^nC_2a^{n-2}b^2 + \dots + {}^nC_nb^n\).`,
        R`The numbers \({}^nC_r\) are the <b>binomial coefficients</b>; they are exactly the rows of Pascal's triangle.`,
        R`<b>Facts:</b> there are \(n + 1\) terms; the coefficients are symmetric (\({}^nC_r = {}^nC_{n-r}\)); and for \((a - b)^n\) the signs alternate.`
      ] },

    { h: R`The general term`,
      body: [
        R`The \((r + 1)\)th term is \(T_{r+1} = {}^nC_r\,a^{n-r}b^r\), where r runs from 0 to n.`,
        R`<b>To find a particular power of x:</b> write \(T_{r+1}\), collect all the powers of x, set the power equal to the one you want, and solve for r.`,
        R`<b>Term independent of x</b> (the constant term): set the power of x to 0.`
      ],
      mistake: R`Mixing up the term number and r. \(T_{r+1}\) uses r, so the 4th term has r = 3.` },

    { h: R`Middle terms`,
      body: [
        R`If n is <b>even</b>, there is one middle term: \(T_{\frac n2 + 1}\).`,
        R`If n is <b>odd</b>, there are two middle terms: \(T_{\frac{n+1}{2}}\) and \(T_{\frac{n+3}{2}}\).`,
        R`The middle term(s) carry the greatest binomial coefficient: \({}^nC_{n/2}\) for even n.`
      ] },

    { h: R`Sums of coefficients`,
      body: [
        R`Put \(x = 1\) in an expansion to get the sum of all its coefficients. For \((1 + x)^n\): \({}^nC_0 + {}^nC_1 + \dots + {}^nC_n = 2^n\).`,
        R`Put \(x = -1\): \({}^nC_0 - {}^nC_1 + {}^nC_2 - \dots = 0\), so the sum of the even-position coefficients equals the sum of the odd-position coefficients, each \(2^{n-1}\).`
      ] },

    { h: R`Simple applications`,
      body: [
        R`<b>Approximations:</b> for small x, \((1 + x)^n \approx 1 + nx\). For example, \((1.01)^5 \approx 1.05\) (more exactly, 1.051).`,
        R`<b>Remainders:</b> write the number as (multiple of the divisor ± 1) and expand. For example, \(9^{10} = (8 + 1)^{10}\) leaves remainder 1 when divided by 8.`,
        R`<b>Comparing large numbers:</b> \((1 + x)^n > 1 + nx\) for \(x > 0\), \(n > 1\).`
      ],
      analogy: R`Bank interest: ₹100 at 1% per month for 5 months grows to \(100(1.01)^5 \approx ₹105.10\), a little more than ₹105, because the interest itself earns interest.` }
  ],

  examples: [
    { level: 1, t: 0, q: R`Expand \((1 + x)^5\).`,
      steps: [R`Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1.`, R`Powers of x go from 0 to 5.`],
      ans: R`\(1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5\)` },
    { level: 1, t: 1, q: R`How many terms are in the expansion of \((x + y)^{10}\)?`,
      steps: [R`There are n + 1 terms.`],
      ans: R`11` },
    { level: 1, t: 0, q: R`Write row 4 of Pascal's triangle and use it to expand \((a + b)^4\).`,
      steps: [R`Row 4: 1, 4, 6, 4, 1.`],
      ans: R`\(a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4\)` },
    { level: 2, t: 1, q: R`Find the 4th term of \((2x + 3)^5\).`,
      steps: [R`4th term means r = 3: \(T_4 = {}^5C_3(2x)^2(3)^3\).`, R`\(= 10\times4x^2\times27\).`],
      ans: R`\(1080x^2\)` },
    { level: 3, t: 2, q: R`Which is larger: \((1.01)^{1{,}000{,}000}\) or 10,000?`,
      steps: [R`\((1 + x)^n > 1 + nx\) for x > 0.`, R`\((1.01)^{1000000} > 1 + 1{,}000{,}000\times0.01 = 10{,}001\).`],
      ans: R`\((1.01)^{1000000}\) is larger (by an enormous margin)` },
    { level: 3, t: 1, q: R`The coefficients of the 2nd, 3rd and 4th terms of \((1 + x)^n\) are in AP. Find n.`,
      steps: [R`The coefficients are \({}^nC_1, {}^nC_2, {}^nC_3\). AP means \(2\,{}^nC_2 = {}^nC_1 + {}^nC_3\).`, R`\(n(n - 1) = n + \dfrac{n(n - 1)(n - 2)}{6}\). Divide by n and simplify: \(n^2 - 9n + 14 = 0\).`, R`\(n = 7\) or \(n = 2\); n = 2 has no 4th term.`],
      ans: R`n = 7 (the coefficients are 7, 21, 35)` }
  ],

  practice: [
    { level: 1, type: 'mcq', q: R`How many terms are in the expansion of \((a + b)^7\)?`,
      options: [R`7`, R`8`, R`9`, R`14`], correct: 1,
      solution: R`n + 1 = 8.` },
    { level: 1, type: 'mcq', q: R`The coefficients in \((a + b)^4\) are:`,
      options: [R`1, 4, 6, 4, 1`, R`1, 3, 3, 1`, R`1, 5, 10, 10, 5, 1`, R`1, 2, 1`], correct: 0,
      solution: R`Row 4 of Pascal's triangle.` },
    { level: 1, type: 'mcq', q: R`The middle term of \((x + y)^6\) is:`,
      options: [R`\(T_3\)`, R`\(T_5\)`, R`\(T_3\) and \(T_4\)`, R`\(T_4\)`], correct: 3,
      solution: R`n = 6 is even, so the single middle term is \(T_{6/2 + 1} = T_4\).` },
    { level: 1, type: 'mcq', q: R`The sum of the coefficients of \((1 + x)^5\) is:`,
      options: [R`5`, R`32`, R`10`, R`25`], correct: 1,
      solution: R`Put x = 1: \(2^5 = 32\).` },
    { level: 1, type: 'num', q: R`Find the coefficient of \(x^2\) in \((1 + x)^5\).`,
      answer: 10, tol: 0.001, unit: '',
      solution: R`\({}^5C_2 = 10\).` },
    { level: 1, type: 'num', q: R`How many terms are in the expansion of \((x + y)^{10}\)?`,
      answer: 11, tol: 0.001, unit: '',
      solution: R`n + 1 = 11.` },
    { level: 2, type: 'mcq', q: R`The general term of \((a + b)^n\) is:`,
      options: [R`\({}^nC_ra^rb^r\)`, R`\({}^nP_ra^{n-r}b^r\)`, R`\({}^nC_ra^{n-r}b^r\)`, R`\({}^nC_ra^nb^r\)`], correct: 2,
      solution: R`\(T_{r+1} = {}^nC_ra^{n-r}b^r\).` },
    { level: 2, type: 'mcq', q: R`The term independent of x in \(\left(x + \dfrac1x\right)^4\) is:`,
      options: [R`4`, R`6`, R`1`, R`0`], correct: 1,
      solution: R`\(T_{r+1} = {}^4C_rx^{4-2r}\); r = 2 gives \({}^4C_2 = 6\).` },
    { level: 2, type: 'mcq', q: R`The coefficient of \(x^3\) in \((1 - x)^5\) is:`,
      options: [R`10`, R`5`, R`−5`, R`−10`], correct: 3,
      solution: R`\({}^5C_3(-1)^3 = -10\).` },
    { level: 2, type: 'mcq', q: R`Using the binomial theorem, \((1.01)^5\) is closest to:`,
      options: [R`1.051`, R`1.5`, R`1.01`, R`1.0`], correct: 0,
      solution: R`\(1 + 5(0.01) + 10(0.0001) + \dots \approx 1.051\).` },
    { level: 2, type: 'num', q: R`Find the coefficient of the 4th term in \((2x + 3)^5\).`,
      answer: 1080, tol: 0.001, unit: '',
      solution: R`\({}^5C_3\times2^2\times3^3 = 10\times4\times27 = 1080\).` },
    { level: 2, type: 'num', q: R`Find the sum of the coefficients of \((2x - 1)^6\).`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`Put x = 1: \((2 - 1)^6 = 1\).` },
    { level: 2, type: 'num', q: R`Find the remainder when \(9^{10}\) is divided by 8.`,
      answer: 1, tol: 0.001, unit: '',
      solution: R`\((8 + 1)^{10}\): every term except the last is a multiple of 8.` },
    { level: 3, type: 'mcq', q: R`Which is larger: \((1.01)^{1000000}\) or 10,000?`,
      options: [R`10,000`, R`\((1.01)^{1000000}\)`, R`they are equal`, R`they can't be compared`], correct: 1,
      solution: R`\((1.01)^{n} > 1 + 0.01n = 10{,}001\).` },
    { level: 3, type: 'mcq', q: R`The greatest binomial coefficient in the expansion of \((1 + x)^{10}\) is:`,
      options: [R`210`, R`120`, R`45`, R`252`], correct: 3,
      solution: R`It belongs to the middle term: \({}^{10}C_5 = 252\).` },
    { level: 3, type: 'num', q: R`The coefficients of the 2nd, 3rd and 4th terms of \((1 + x)^n\) are in AP. Find n.`,
      answer: 7, tol: 0.001, unit: '',
      solution: R`\(2\,{}^nC_2 = {}^nC_1 + {}^nC_3\) gives \(n^2 - 9n + 14 = 0\), so n = 7.` },
    { level: 3, type: 'num', q: R`Find the term independent of x in \(\left(2x - \dfrac1x\right)^6\).`,
      answer: -160, tol: 0.001, unit: '',
      solution: R`\(T_{r+1} = {}^6C_r(2x)^{6-r}(-1/x)^r\), with power \(6 - 2r = 0\), so r = 3: \(20\times8\times(-1) = -160\).` }
  ]
});
