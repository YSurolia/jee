# JEE Study Hub

A free, static study website for JEE Main and JEE Advanced, covering Physics (20 chapters), Chemistry (20) and Mathematics (14).
Each chapter has its syllabus topics, key concepts, a formula sheet, solved examples worked step by step, and practice questions.

## Run it locally
Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000. An internet connection is needed for the math rendering (KaTeX loads from cdnjs).

## Host it for free
- **GitHub Pages:** push this folder to a GitHub repo, then go to Settings → Pages → Deploy from branch → `main` / root.
- **Netlify:** drag and drop this folder at https://app.netlify.com/drop

## Add or edit content
All content is in `js/data/physics.js`, `chemistry.js` and `maths.js`. Each chapter is one object:

```js
{ id, title, cls: 11 | 12,
  syllabus: [...],                       // topic chips
  concepts: [{ h, body }],               // short notes
  formulas: [...],                       // formula sheet
  examples: [{ topic, level, q, steps: [...], ans }],
  practice: [{ q, ans }] }
```

Every syllabus topic has at least one solved example. An example's `topic` must be **exactly** one of the strings in that chapter's
`syllabus` array. The chapter page groups examples under their topic, and each topic chip jumps to its examples.
An example whose `topic` does not match any syllabus string will not be shown.

Write math as LaTeX inside `\( ... \)` (inline) or `\[ ... \]` (display). Strings are wrapped in `R\`...\`` (String.raw), so you can type single backslashes.
To add another solved example, append an object to that chapter's `examples` array. The page picks it up automatically.

## Files
- `index.html`: page shell (single-page app with hash routes such as `#/s/physics/kinematics`)
- `js/app.js`: routing, rendering, search, dark mode, progress tracking (saved in the browser's localStorage)
- `css/style.css`: styles (light and dark themes, mobile-friendly)
