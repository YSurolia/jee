# JEE Study Hub

A free, static study website for JEE Main and JEE Advanced, covering Physics (20 chapters), Chemistry (20) and Mathematics (14).
Each chapter works like a coaching-centre app, with four tabs:

- **Theory**: simple explanations of every syllabus topic, with "think of it like this" analogies, key points, common mistakes and quick checks
- **Examples**: solved examples ordered from Basic → JEE Main → JEE Advanced, with a level filter
- **Practice**: multiple-choice and numerical questions with instant right/wrong feedback, full solutions and a saved score
- **Formulas**: the chapter's formula sheet

## Run it locally
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000. No internet connection is needed: the math renderer (KaTeX 0.16.9, MIT licence)
is bundled in `vendor/katex/`. Your "done" progress is saved in the browser you use.

## Live site
The site is published at **https://jee.yatharth.org** from the GitHub repo `YSurolia/jee`.
Every push to `main` runs `.github/workflows/pages.yml`, which deploys the repository root to GitHub Pages
(Settings → Pages → Source: GitHub Actions; custom domain `jee.yatharth.org`, a DNS CNAME record pointing to `ysurolia.github.io`).
You can also re-run it by hand from the repo's Actions tab ("Deploy to GitHub Pages" → Run workflow).

Other free options: drag and drop this folder at https://app.netlify.com/drop

## Add or edit content
Content lives in two places:

1. `js/data/physics.js`, `chemistry.js` and `maths.js`: the chapter index (syllabus, key concepts, formulas, topic-wise examples, short-answer questions). These load with every page.
2. `js/lessons/<subject>/<chapter-id>.js`: one "lesson" per chapter (deep theory, extra examples, practice questions). Each loads only when its chapter is opened.

### Chapter index (`js/data/*.js`)
Each chapter is one object:

```js
{ id, title, cls: 11 | 12,
  syllabus: [...],                       // topic chips
  concepts: [{ h, body }],               // short notes
  formulas: [...],                       // formula sheet
  examples: [{ topic, level, q, steps: [...], ans }],
  practice: [{ q, ans }] }
```

Every syllabus topic has at least one solved example. An example's `topic` must be **exactly** one of the strings in that chapter's
`syllabus` array; tapping a topic chip on the Theory tab jumps to that topic's first example. `level` is `'Main'` or `'Advanced'`.

### Lessons (`js/lessons/<subject>/<chapter-id>.js`)
Each file registers one lesson; the subject and chapter id must match the chapter index:

```js
var R = String.raw;
JEE.lesson('physics', 'kinematics', {
  theory: [
    { h: R`Heading`, body: [R`paragraph`, R`paragraph`],
      analogy: R`...`, points: [R`...`], mistake: R`...`,   // all three optional
      check: { q: R`...`, ans: R`...` } }                     // optional
  ],
  examples: [                       // added to the chapter's examples
    { level: 1, t: 3, q: R`...`, steps: [R`...`], ans: R`...` }
  ],
  practice: [                       // keep ordered from level 1 to 3
    { level: 1, type: 'mcq', q: R`...`, options: [R`A`, R`B`, R`C`, R`D`], correct: 1, solution: R`...` },
    { level: 2, type: 'num', q: R`...`, answer: 24, tol: 0.01, unit: 'm', solution: R`...` }
  ]
});
```

- `level`: 1 = Basic, 2 = JEE Main, 3 = JEE Advanced. On the Examples tab, index examples count as level 2 (`'Main'`) or 3 (`'Advanced'`).
- `t` is the **index** of the topic in the chapter's `syllabus` array (0 = first topic).
- `correct` is the index of the right option (0 = A … 3 = D).
- `tol` is how far a typed numerical answer may be from `answer` and still count as correct.
- If a lesson file is missing, the chapter still works using only its index content.

Write math as LaTeX inside `\( ... \)` (inline) or `\[ ... \]` (display). Strings are wrapped in `R\`...\`` (String.raw), so you can type
single backslashes. Don't use a backtick or `${` inside these strings. A superscript at the start of an expression needs a placeholder: `{}^nC_r`.

## Files
- `index.html`: page shell (single-page app with hash routes such as `#/s/physics/kinematics`)
- `js/app.js`: routing, rendering, lesson loading, the practice engine, dark mode, and progress and practice scores (saved in the browser's localStorage)
- `js/lessons/`: one lesson file per chapter (54 in total)
- `css/style.css`: styles (light and dark themes, mobile-friendly)
- `vendor/katex/`: local copy of KaTeX so formulas work offline
- `js/icons.js`: the Lucide icons used on the home page (ISC licence), stored locally so they work offline
