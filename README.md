# JEE Study Hub

A free, static study website for JEE Main and JEE Advanced, covering Physics (20 chapters), Chemistry (29) and Mathematics (14).
The chapters follow the official **JEE Main 2027** syllabus (NTA, October 2026) and **JEE Advanced 2026** syllabus (IIT Roorkee):
the 54 JEE Main units, plus 9 chemistry chapters that are only in JEE Advanced (States of Matter, Hydrogen, s-Block, Environmental
Chemistry, Solid State, Surface Chemistry, Isolation of Metals, Polymers, Chemistry in Everyday Life).

Every chapter lists its **complete syllabus: all 527 topics and 1255 subtopics**, with anything that is only in JEE Main or only in
JEE Advanced marked. The list appears in the chapter index on the left of each chapter page, at the top of the Theory tab, and on the
Syllabus page.
Every chapter page has an **"All chapters" index** on the left (a slide-in drawer on phones) listing every chapter of all three
subjects, with your completed chapters ticked; open any chapter in it to see all its topics and subtopics, so you can jump anywhere.
Each chapter works like a coaching-centre app, with four tabs:

- **Theory**: simple explanations of every syllabus topic, with "think of it like this" analogies, key points, common mistakes and quick checks.
  Chapters with a **book chapter** (see below) show a full textbook-style chapter here instead: numbered sections, diagrams, derivations,
  worked illustrations and a "Chapter at a glance" summary, with a Print / Save as PDF button
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
Content lives in four places:

1. `js/data/physics.js`, `chemistry.js` and `maths.js`: the chapter index (syllabus, key concepts, formulas, topic-wise examples, short-answer questions). These load with every page.
2. `js/lessons/<subject>/<chapter-id>.js`: one "lesson" per chapter (deep theory, extra examples, practice questions). Each loads only when its chapter is opened.
3. `js/data/outline-physics.js`, `outline-chemistry.js` and `outline-maths.js`: the complete topic and subtopic list of every chapter (see below).
4. `js/book/<subject>/<chapter-id>.js` (optional): a full book chapter with diagrams, listed in `js/book/index.js`. When a chapter has one, its Theory tab shows the book instead of the lesson's short theory.

### Complete syllabus outline (`js/data/outline-*.js`)
Each chapter's outline is a block of plain text: a `#` line for each topic, followed by `-` lines for its subtopics.

```
# Projectile motion @8 >12
- Time of flight, maximum height and horizontal range
- Projectile thrown horizontally from a height
# Doppler effect [A]
- Doppler effect in sound: moving source and moving observer
```

- `[A]` marks something only in the JEE Advanced syllabus, `[M]` something only in JEE Main; no tag means both.
- `@k` links the topic (or subtopic) to topic `k` of the chapter's `syllabus` list, which opens its solved examples.
- `>n` links it to section `n` of the chapter's book chapter, for chapters that have one.
- A whole chapter that is only in JEE Advanced has `adv: true` in its data (see `js/data/chemistry-advanced.js`); chapters without a
  lesson file have `lesson: false`.

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

### Book chapters (`js/book/<subject>/<chapter-id>.js`)
Add the chapter to the list in `js/book/index.js` (for example `'physics/kinematics'`), then create the file:

```js
var R = String.raw, D = JEE.D;
JEE.book('physics', 'kinematics', {
  intro: [R`opening paragraph`, R`...`],
  sections: [
    { h: R`Section heading`, t: [0, 1],          // syllabus topic indices this section covers
      blocks: [
        R`a paragraph (HTML allowed)`,
        { h3: R`Sub-heading` },
        { fig: D.plot({ ... }), cap: R`caption` },          // numbered automatically: Fig. 2.1, 2.2 ...
        { derive: R`Deriving ...`, steps: [R`...`], open: false },   // collapsible derivation
        { ex: { q: R`...`, steps: [R`...`], ans: R`...` } },          // worked "Illustration"
        { table: { head: [R`...`], rows: [[R`...`]] } },
        { analogy: R`...` }, { points: [R`...`] }, { mistake: R`...` },
        { note: R`...`, title: 'Good to know' }, { check: { q: R`...`, ans: R`...` } }
      ] }
  ],
  summary: [R`...`]                                // "Chapter at a glance"
});
```

Diagrams come from `js/diagrams.js` (`JEE.D`). Every helper returns an SVG string, so figures work offline and follow the light/dark theme:

- `D.plot({ x, y, fns, param, pts, segs, shade, guides, texts, xticks, yticks, eq })`: graphs in data coordinates (`eq: true` keeps both axes at the same scale)
- `D.svg(w, h, parts)` with `D.line`, `D.arrow`, `D.circle`, `D.rect`, `D.path`, `D.dot`, `D.text`, `D.angle`, `D.ground`, `D.block`, `D.lobe`: free drawings in pixel coordinates
- `D.molecule({ atoms, bonds })` / `D.mol(...)`: Lewis structures and 3-D shapes (bond types 1, 2, 3, `'w'` wedge, `'h'` hashed, `'hb'` hydrogen bond)
- `D.levels({ cols, links })`: energy-level and molecular-orbital diagrams
- `D.row([[svg, 'caption'], ...])`: several small figures side by side

Colours are keys: `'k'` ink, `'c'` subject colour, `'m'` muted, `'o'` orange, `'b'` blue, `'g'` green, `'r'` red, `'p'` purple. Labels accept `v_0`, `x^2` and `*italic*`.

Write math as LaTeX inside `\( ... \)` (inline) or `\[ ... \]` (display). Strings are wrapped in `R\`...\`` (String.raw), so you can type
single backslashes. Don't use a backtick or `${` inside these strings. A superscript at the start of an expression needs a placeholder: `{}^nC_r`.

## Files
- `index.html`: page shell (single-page app with hash routes such as `#/s/physics/kinematics`)
- `js/app.js`: routing, rendering (including the chapter index sidebar), lesson loading, the practice engine, dark mode, and progress and practice scores (saved in the browser's localStorage)
- `js/lessons/`: one lesson file per chapter (54 in total)
- `js/data/outline-*.js`: the complete topic and subtopic outline of every chapter
- `js/data/chemistry-advanced.js`: the 9 chemistry chapters that are only in JEE Advanced
- `js/book/`: full book chapters with diagrams (`index.js` lists which chapters have one)
- `js/diagrams.js`: the SVG diagram helpers used by the book chapters
- `css/style.css`: styles (light and dark themes, mobile-friendly)
- `vendor/katex/`: local copy of KaTeX so formulas work offline
- `js/icons.js`: the Lucide icons used on the home page (ISC licence), stored locally so they work offline
