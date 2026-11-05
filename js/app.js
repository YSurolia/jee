(function () {
  'use strict';

  var SUBJECTS = ['physics', 'chemistry', 'maths'];
  var COLORS = { physics: 'var(--phy)', chemistry: 'var(--chem)', maths: 'var(--math)' };
  var app = document.getElementById('app');

  // Show Class 11 chapters before Class 12; the sort is stable, so syllabus order is kept within a class.
  SUBJECTS.forEach(function (s) { JEE[s].chapters.sort(function (a, b) { return a.cls - b.cls; }); });

  // ---------- storage helpers (fail silently in private mode) ----------
  function load(key, fallback) {
    try { var v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function save(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }
  var done = load('jee-done', {});

  function isDone(s, c) { return !!done[s + '/' + c]; }
  function toggleDone(s, c) {
    var k = s + '/' + c;
    if (done[k]) delete done[k]; else done[k] = true;
    save('jee-done', done);
  }
  function subjectProgress(s) {
    var chs = JEE[s].chapters;
    var n = chs.filter(function (c) { return isDone(s, c.id); }).length;
    return { n: n, total: chs.length, pct: Math.round(100 * n / chs.length) };
  }

  // ---------- small utilities ----------
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (ch) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch];
    });
  }
  function findChapter(s, id) {
    var chs = JEE[s].chapters;
    for (var i = 0; i < chs.length; i++) if (chs[i].id === id) return { ch: chs[i], i: i };
    return null;
  }
  function renderMath(el) {
    if (window.renderMathInElement) {
      renderMathInElement(el, {
        delimiters: [
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    }
    drawMolecules(el);
  }
  // Skeletal structures from SMILES strings (vendor/smiles-drawer, loaded only when a page has one), coloured from the theme.
  var molLib = { state: '', queue: [] };
  function molTheme() {
    var cs = getComputedStyle(document.documentElement), v = function (n) { return cs.getPropertyValue(n).trim(); };
    return { C: v('--text'), O: v('--d-r'), N: v('--d-b'), F: v('--d-g'), CL: v('--d-g'), BR: v('--d-o'), I: v('--d-p'), P: v('--d-o'),
      S: v('--d-o'), B: v('--d-o'), SI: v('--d-o'), H: v('--muted'), BACKGROUND: v('--surface-2') };
  }
  function drawMolecules(el) {
    var svgs = (el || document).querySelectorAll('svg.smiles');
    if (!svgs.length || molLib.state === 'failed') return;
    if (!window.SmilesDrawer) {
      molLib.queue.push(el);
      if (molLib.state === 'loading') return;
      molLib.state = 'loading';
      var sc = document.createElement('script');
      sc.src = 'vendor/smiles-drawer/smiles-drawer.min.js';
      sc.onload = function () { molLib.state = 'ready'; var q = molLib.queue; molLib.queue = []; q.forEach(drawMolecules); };
      sc.onerror = function () { molLib.state = 'failed'; };
      document.head.appendChild(sc);
      return;
    }
    var theme = molTheme();
    svgs.forEach(function (svg) {
      var w = +svg.getAttribute('data-w'), h = +svg.getAttribute('data-h');
      var drawer = new SmilesDrawer.SvgDrawer({ width: w, height: h, bondThickness: 1.4, bondLength: 26, fontSizeLarge: 10, fontSizeSmall: 8, padding: 10, compactDrawing: false, themes: { site: theme } });
      SmilesDrawer.parse(svg.getAttribute('data-smiles'), function (tree) {
        while (svg.firstChild) svg.removeChild(svg.firstChild);
        drawer.draw(tree, svg, 'site');
        // Fit the viewBox to the drawing and size it at one fixed scale, so every structure has the same bond length.
        try {
          var bb = svg.getBBox(), pad = 6;
          if (bb.width > 0) {
            svg.setAttribute('viewBox', [bb.x - pad, bb.y - pad, bb.width + 2 * pad, bb.height + 2 * pad].join(' '));
            svg.setAttribute('width', Math.round((bb.width + 2 * pad) * 1.15));
            svg.setAttribute('height', Math.round((bb.height + 2 * pad) * 1.15));
          }
        } catch (e) {}
        svg.setAttribute('data-drawn', '1');
      }, function () { svg.setAttribute('data-error', '1'); });
    });
  }
  function strip(html) { return String(html).replace(/<[^>]+>/g, '').replace(/\\[()[\]]/g, ''); }

  // ---------- complete syllabus outline (js/data/outline-<subject>.js) ----------
  // Each chapter's outline is plain text: "# Topic [A|M] @k" lines, each followed by "- subtopic [A|M]" lines.
  // [A] = JEE Advanced only, [M] = JEE Main only; @k links the topic to syllabus[k] (its solved examples);
  // >n links it to section n of the chapter's book (js/book/), when the chapter has one.
  var OUTLINE = {};
  function outlineOf(s, id) {
    var key = s + '/' + id;
    if (OUTLINE[key]) return OUTLINE[key];
    var text = JEE.outline && JEE.outline[s] && JEE.outline[s][id], topics = [];
    function parse(str) {
      var o = { name: str, tag: '', s: -1, sec: 0 }, m;
      if ((m = o.name.match(/\s*>(\d+)/))) { o.sec = +m[1]; o.name = o.name.replace(m[0], ''); }
      if ((m = o.name.match(/\s*@(\d+)/))) { o.s = +m[1]; o.name = o.name.replace(m[0], ''); }
      if ((m = o.name.match(/\s*\[(A|M)\]/))) { o.tag = m[1]; o.name = o.name.replace(m[0], ''); }
      o.name = o.name.trim();
      return o;
    }
    String(text || '').split('\n').forEach(function (line) {
      line = line.trim();
      if (line.charAt(0) === '#') { var t = parse(line.slice(1)); t.sub = []; topics.push(t); }
      else if (line.charAt(0) === '-' && topics.length) topics[topics.length - 1].sub.push(parse(line.slice(1)));
    });
    return (OUTLINE[key] = topics);
  }
  function outlineCount(s, id) {
    var t = outlineOf(s, id), n = 0;
    t.forEach(function (x) { n += x.sub.length; });
    return { topics: t.length, subs: n };
  }
  function tagBadge(tag) {
    return tag ? '<span class="xtag xtag-' + tag + '" title="' + (tag === 'A' ? 'JEE Advanced only' : 'JEE Main only') + '">' + (tag === 'A' ? 'Adv' : 'Main') + '</span>' : '';
  }

  // ---------- views ----------
  // Home-page icons (names refer to js/icons.js): one per chapter, and two for each subject's title box.
  var CHAPTER_ICONS = {
    'units-measurement': 'ruler', 'kinematics': 'gauge', 'laws-of-motion': 'weight', 'work-energy-power': 'dumbbell',
    'rotational-motion': 'rotate-3d', 'gravitation': 'orbit', 'solids-liquids': 'droplets', 'thermodynamics': 'thermometer',
    'kinetic-theory': 'wind', 'oscillations-waves': 'audio-waveform', 'electrostatics': 'zap', 'current-electricity': 'battery',
    'magnetism': 'magnet', 'emi-ac': 'plug-zap', 'em-waves': 'radio', 'optics': 'eye', 'dual-nature': 'sun',
    'atoms-nuclei': 'atom', 'electronic-devices': 'cpu', 'experimental-skills': 'microscope',
    'basic-concepts': 'scale', 'atomic-structure': 'atom', 'chemical-bonding': 'link', 'chemical-thermodynamics': 'flame',
    'solutions': 'beaker', 'equilibrium': 'arrow-left-right', 'redox-electrochemistry': 'battery-charging',
    'chemical-kinetics': 'timer', 'periodicity': 'grid-3x3', 'p-block': 'flask-conical', 'd-f-block': 'gem',
    'coordination-compounds': 'network', 'purification-characterisation': 'filter', 'goc': 'hexagon',
    'hydrocarbons': 'fuel', 'haloalkanes': 'droplet', 'oxygen-compounds': 'wine', 'nitrogen-compounds': 'palette',
    'biomolecules': 'dna', 'practical-chemistry': 'test-tubes',
    'states-of-matter': 'wind', 'hydrogen': 'droplet', 's-block': 'flame', 'environmental-chemistry': 'leaf', 'solid-state': 'box',
    'surface-chemistry': 'layers', 'metallurgy': 'pickaxe', 'polymers': 'link', 'everyday-chemistry': 'pill',
    'sets-relations-functions': 'braces', 'complex-quadratic': 'radical', 'matrices-determinants': 'grid-2x2',
    'permutations-combinations': 'shuffle', 'binomial-theorem': 'triangle', 'sequences-series': 'list-ordered',
    'trigonometry': 'triangle-right', 'limits-continuity-differentiability': 'infinity', 'integral-calculus': 'chart-area',
    'differential-equations': 'activity', 'coordinate-geometry': 'chart-scatter', '3d-geometry': 'box',
    'vector-algebra': 'move-up-right', 'statistics-probability': 'dices'
  };
  var SUBJECT_ICONS = { physics: ['atom', 'orbit'], chemistry: ['flask-conical', 'test-tube'], maths: ['pi', 'calculator'] };

  function icon(name, cls) {
    return '<svg class="' + (cls || 'ico') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (window.ICONS[name] || '') + '</svg>';
  }

  function homeView() {
    // One column per subject: a title box, then every chapter with its first topics underneath.
    var columns = SUBJECTS.map(function (s) {
      var sub = JEE[s], p = subjectProgress(s);
      function items(cls) {
        return sub.chapters.map(function (c, i) {
          if (c.cls !== cls) return '';
          var d = isDone(s, c.id);
          return '<li><a class="topic-item' + (d ? ' done' : '') + '" href="#/s/' + s + '/' + c.id + '">' +
            '<span class="topic-icon">' + icon(d ? 'check' : CHAPTER_ICONS[c.id]) + '</span>' +
            '<span class="topic-text"><b>' + (i + 1) + '. ' + esc(c.title) + tagBadge(chapterTag(s, c)) + '</b>' +
            '<small>' + c.syllabus.slice(0, 3).join(' · ') + '</small></span></a></li>';
        }).join('');
      }
      return '<section class="subject-col" style="--c:' + COLORS[s] + '">' +
        '<a class="subject-banner" href="#/s/' + s + '">' + icon(SUBJECT_ICONS[s][0], 'banner-ico') +
          '<span>' + sub.name + '</span>' + icon(SUBJECT_ICONS[s][1], 'banner-ico') + '</a>' +
        '<div class="topic-card">' +
          '<h3 class="class-label">Class 11</h3><ul class="topic-list">' + items(11) + '</ul>' +
          '<h3 class="class-label">Class 12</h3><ul class="topic-list">' + items(12) + '</ul>' +
          '<div class="topic-foot"><span>' + p.n + ' / ' + p.total + ' chapters done</span>' +
            '<a href="#/s/' + s + '">Open ' + sub.name + icon('arrow-right') + '</a></div>' +
        '</div>' +
      '</section>';
    }).join('');

    return '<h1 class="sr-only">JEE Main and Advanced: Physics, Chemistry and Mathematics</h1>' + heroCard() + dailyCard() +
      '<a class="home-search" href="#/search">' + icon('search') + '<span>Search chapters, topics, formulas and examples</span><kbd>/</kbd></a>' +
      '<div class="subject-columns">' + columns + '</div>' +
      '<h2 class="section-title">Exam at a glance</h2>' +
      '<div class="card glass table-wrap"><table class="pattern">' +
        '<tr><th></th><th>JEE Main (Paper 1)</th><th>JEE Advanced</th></tr>' +
        '<tr><td><b>Conducted by</b></td><td>NTA, twice a year (January &amp; April sessions)</td><td>One of the IITs, once a year</td></tr>' +
        '<tr><td><b>Eligibility</b></td><td>Class 12 with PCM</td><td>Top ~2.5 lakh JEE Main qualifiers</td></tr>' +
        '<tr><td><b>Pattern</b></td><td>75 questions (25 per subject): MCQs + numerical-value answers. +4 / −1.</td><td>Two 3-hour papers. MCQs (single and multiple correct), numerical and matching types. The marking scheme changes each year.</td></tr>' +
        '<tr><td><b>Leads to</b></td><td>NITs, IIITs, GFTIs, and qualifying for JEE Advanced</td><td>IITs</td></tr>' +
      '</table></div>' +
      '<p style="color:var(--muted);font-size:.9rem">Pattern details can change. Check the official information bulletin each year.</p>';
  }

  function topicCountText(s, c) {
    var n = outlineCount(s, c.id);
    return n.topics ? n.topics + ' topics · ' + n.subs + ' subtopics' : c.syllabus.length + ' topics';
  }

  function subjectView(s) {
    var sub = JEE[s], p = subjectProgress(s);
    var groups = { 11: [], 12: [] };
    sub.chapters.forEach(function (c, i) { groups[c.cls].push({ c: c, i: i }); });

    function rows(list) {
      return list.map(function (o) {
        var d = isDone(s, o.c.id);
        return '<a class="chapter-row' + (d ? ' done' : '') + '" href="#/s/' + s + '/' + o.c.id + '">' +
          '<span class="num">' + (d ? '✓' : o.i + 1) + '</span>' +
          '<span class="title">' + esc(o.c.title) + '</span>' +
          '<small>' + (chapterTag(s, o.c) ? tagBadge(chapterTag(s, o.c)) + ' ' : '') + topicCountText(s, o.c) + '</small></a>';
      }).join('');
    }

    return '<div class="crumbs"><a href="#/">Home</a> › ' + sub.name + '</div>' +
      '<h1 style="color:' + COLORS[s] + '">' + sub.name + '</h1>' +
      '<div style="--c:' + COLORS[s] + ';max-width:360px"><div class="progress"><div style="width:' + p.pct + '%"></div></div>' +
      '<div class="progress-label">' + p.n + ' / ' + p.total + ' chapters completed</div></div>' +
      '<h2>Class 11</h2><div class="chapter-list">' + rows(groups[11]) + '</div>' +
      '<h2>Class 12</h2><div class="chapter-list">' + rows(groups[12]) + '</div>';
  }

  // ---------- lessons (deep theory, extra examples, practice) ----------
  // Each chapter's lesson lives in js/lessons/<subject>/<id>.js and is loaded the first time the chapter opens.
  // A <script> tag (rather than fetch) is used so this also works when the site is opened from a local folder.
  var LESSONS = {}, BOOKS = {}, lessonState = {};
  JEE.lesson = function (s, id, data) { LESSONS[s + '/' + id] = data; };
  // Book chapters (full textbook-style theory with diagrams) live in js/book/<subject>/<id>.js.
  JEE.book = function (s, id, data) { BOOKS[s + '/' + id] = data; };

  function lessonReady(s, id) {
    return lessonState[s + '/' + id] === 'ready';
  }
  // Load the chapter's lesson and book files side by side; either may be missing.
  function loadLesson(s, id, done) {
    var k = s + '/' + id;
    if (lessonReady(s, id)) return done();
    if (lessonState[k] === 'loading') return;
    lessonState[k] = 'loading';
    var f = findChapter(s, id);
    var dirs = (f && f.ch.lesson === false ? [] : ['lessons']).concat((JEE.bookList || []).indexOf(k) !== -1 ? ['book'] : []), pending = dirs.length;
    if (!pending) { lessonState[k] = 'ready'; return done(); }
    function settle() { if (--pending === 0) { lessonState[k] = 'ready'; done(); } }
    dirs.forEach(function (dir) {
      var el = document.createElement('script');
      el.src = 'js/' + dir + '/' + s + '/' + id + '.js';
      el.onload = settle;
      el.onerror = settle;
      document.head.appendChild(el);
    });
  }

  var LEVELS = { 1: 'Basic', 2: 'JEE Main', 3: 'JEE Advanced' };
  var TABS = [
    { id: 'theory', label: 'Theory', icon: 'book-open' },
    { id: 'examples', label: 'Examples', icon: 'pencil-line' },
    { id: 'practice', label: 'Practice', icon: 'target' },
    { id: 'formulas', label: 'Formulas', icon: 'sigma' },
    { id: 'revise', label: 'Revise', icon: 'layers' }
  ];

  function levelBadge(level) {
    return '<span class="lvl lvl-' + level + '">' + LEVELS[level] + '</span>';
  }
  function levelFilter(counts) {
    var total = counts[1] + counts[2] + counts[3];
    return '<div class="lvl-filter" role="group" aria-label="Filter by level">' +
      '<button class="chip active" data-level="all">All <span>' + total + '</span></button>' +
      [1, 2, 3].map(function (l) {
        return counts[l] ? '<button class="chip" data-level="' + l + '">' + LEVELS[l] + ' <span>' + counts[l] + '</span></button>' : '';
      }).join('') + '</div>';
  }
  function countLevels(list) {
    var c = { 1: 0, 2: 0, 3: 0 };
    list.forEach(function (x) { c[x.level]++; });
    return c;
  }

  // Existing topic examples (level 'Main'/'Advanced') plus the lesson's extra examples, easiest first.
  function chapterExamples(ch, lesson) {
    var order = {};
    ch.syllabus.forEach(function (t, k) { order[t] = k; });
    var list = ch.examples.map(function (e) {
      return { level: e.level === 'Advanced' ? 3 : 2, topic: e.topic, q: e.q, steps: e.steps, ans: e.ans };
    });
    if (lesson && lesson.examples) {
      list = list.concat(lesson.examples.map(function (e) {
        return { level: e.level, topic: ch.syllabus[e.t], q: e.q, steps: e.steps, ans: e.ans };
      }));
    }
    list.forEach(function (e, i) { e.i = i; });
    return list.sort(function (a, b) { return a.level - b.level || order[a.topic] - order[b.topic] || a.i - b.i; });
  }

  // Practice answers: { 'physics/kinematics': { <question index>: { v: choice or typed value, ok: true/false } } }
  var answers = load('jee-practice', {});
  function practiceScore(s, id, lesson) {
    var a = answers[s + '/' + id] || {}, total = lesson && lesson.practice ? lesson.practice.length : 0;
    var tried = 0, right = 0;
    Object.keys(a).forEach(function (k) { if (+k < total) { tried++; if (a[k].ok) right++; } });
    return { total: total, tried: tried, right: right };
  }

  // ---------- book chapter rendering ----------
  function bookBlock(b, figNo) {
    if (typeof b === 'string') return '<p>' + b + '</p>';
    if (b.h3) return '<h3>' + b.h3 + '</h3>';
    if (b.fig) {
      var no = figNo();
      return '<figure class="figure">' + b.fig + (b.cap ? '<figcaption><b>Fig. ' + no + '</b> ' + b.cap + '</figcaption>' : '') + '</figure>';
    }
    if (b.mol) {
      var mno = figNo(), items = typeof b.mol === 'string' ? [[b.mol, '']] : b.mol;
      return '<figure class="figure"><div class="fig-row mol-row">' + items.map(function (m) {
        return '<div class="fig-cell"><svg class="smiles" data-smiles="' + esc(m[0]) + '" data-w="' + (m[2] || b.w || 200) + '" data-h="' + (m[3] || b.h || 150) + '" role="img" aria-label="' + esc(strip(m[1] || 'structure')) + '"></svg>' +
          (m[1] ? '<div class="fig-sub">' + m[1] + '</div>' : '') + '</div>';
      }).join('') + '</div>' + (b.cap ? '<figcaption><b>Fig. ' + mno + '</b> ' + b.cap + '</figcaption>' : '') + '</figure>';
    }
    if (b.derive) return '<details class="derive"' + (b.open ? ' open' : '') + '><summary>' + icon('sigma') + b.derive + '</summary><ol>' +
      b.steps.map(function (st) { return '<li>' + st + '</li>'; }).join('') + '</ol>' + (b.result ? '<p>' + b.result + '</p>' : '') + '</details>';
    if (b.ex) return '<div class="illus"><b>' + icon('pencil-line') + ' Illustration</b><div class="q">' + b.ex.q + '</div>' +
      '<ol>' + b.ex.steps.map(function (st) { return '<li>' + st + '</li>'; }).join('') + '</ol>' +
      '<div class="ans"><b>Answer:</b> ' + b.ex.ans + '</div></div>';
    if (b.table) return '<div class="table-wrap"><table class="book-table"><thead><tr>' + b.table.head.map(function (h) { return '<th>' + h + '</th>'; }).join('') +
      '</tr></thead><tbody>' + b.table.rows.map(function (r) { return '<tr>' + r.map(function (c) { return '<td>' + c + '</td>'; }).join('') + '</tr>'; }).join('') +
      '</tbody></table></div>';
    if (b.analogy) return '<div class="callout analogy"><b>' + icon('lightbulb') + ' Think of it like this</b><p>' + b.analogy + '</p></div>';
    if (b.points) return '<div class="callout points"><b>' + icon('circle-check') + ' Remember</b><ul>' +
      b.points.map(function (pt) { return '<li>' + pt + '</li>'; }).join('') + '</ul></div>';
    if (b.mistake) return '<div class="callout mistake"><b>' + icon('triangle-alert') + ' Common mistake</b><p>' + b.mistake + '</p></div>';
    if (b.note) return '<div class="callout note"><b>' + icon('book-open') + ' ' + (b.title || 'Good to know') + '</b><p>' + b.note + '</p></div>';
    if (b.tip) return '<div class="callout tip"><b>' + icon('target') + ' ' + (b.title || 'JEE tip') + '</b><p>' + b.tip + '</p></div>';
    if (b.adv) return '<div class="callout advbox"><b>' + icon('trophy') + ' ' + (b.title || 'JEE Advanced') + '</b>' +
      [].concat(b.adv).map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</div>';
    if (b.check) return '<div class="callout check"><b>' + icon('circle-help') + ' Quick check</b><p>' + b.check.q + '</p>' +
      '<details><summary>Show answer</summary><div class="ans">' + b.check.ans + '</div></details></div>';
    return '';
  }

  // Where a topic link goes: the book section that covers it (Theory tab) or else its solved examples.
  function topicLink(s, ch, t) {
    if (t.sec && (JEE.bookList || []).indexOf(s + '/' + ch.id) !== -1) return { href: '#/s/' + s + '/' + ch.id + '/theory', go: 'sec-' + t.sec };
    var book = BOOKS[s + '/' + ch.id];
    if (book && t.s >= 0) {
      for (var j = 0; j < book.sections.length; j++) {
        if ((book.sections[j].t || []).indexOf(t.s) !== -1) return { href: '#/s/' + s + '/' + ch.id + '/theory', go: 'sec-' + (j + 1) };
      }
    }
    return t.s >= 0 ? { href: '#/s/' + s + '/' + ch.id + '/examples/' + t.s } : null;
  }
  function chapterNo(s, id) { var f = findChapter(s, id); return f ? f.i + 1 : 0; }
  function outlineList(s, ch, cls) {
    var n = chapterNo(s, ch.id);
    return '<ol class="ol-topics ' + cls + '">' + outlineOf(s, ch.id).map(function (t, k) {
      var L = topicLink(s, ch, t);
      var head = '<span class="ol-n">' + n + '.' + (k + 1) + '</span><span class="ol-t">' + esc(t.name) + tagBadge(t.tag) + '</span>';
      return '<li>' + (L ? '<a class="ol-topic" href="' + L.href + '"' + (L.go ? ' data-goto="' + L.go + '"' : '') + '>' + head + '</a>'
        : '<span class="ol-topic">' + head + '</span>') +
        (t.sub.length ? '<ul class="ol-subs">' + t.sub.map(function (st) {
          var SL = st.s >= 0 || st.sec ? topicLink(s, ch, st) : null, txt = esc(st.name) + tagBadge(st.tag);
          return '<li>' + (SL ? '<a href="' + SL.href + '"' + (SL.go ? ' data-goto="' + SL.go + '"' : '') + '>' + txt + '</a>' : txt) + '</li>';
        }).join('') + '</ul>' : '') +
        '</li>';
    }).join('') + '</ol>';
  }
  // A whole chapter is Advanced-only (marked in the data) or Main-only (every topic tagged [M]).
  function chapterTag(s, c) {
    if (c.adv) return 'A';
    var t = outlineOf(s, c.id);
    return t.length && t.every(function (x) { return x.tag === 'M'; }) ? 'M' : '';
  }
  function hasTags(s, id) {
    return outlineOf(s, id).some(function (t) { return t.tag || t.sub.some(function (x) { return x.tag; }); });
  }
  var TAG_KEY = '<span class="xtag xtag-A">Adv</span> = only in JEE Advanced, <span class="xtag xtag-M">Main</span> = only in JEE Main; everything else is in both.';
  // The chapter's complete syllabus (every topic and subtopic) shown at the top of the Theory tab.
  function syllabusCard(s, ch, book) {
    var c = outlineCount(s, ch.id);
    if (!c.topics) {
      return '<div class="card glass learn"><h3>' + icon('target') + ' Syllabus topics</h3>' +
        '<p class="hint">Tap a topic to see its solved examples.</p><ul class="topics">' +
        ch.syllabus.map(function (t, k) { return '<li><a href="#/s/' + s + '/' + ch.id + '/examples/' + k + '">' + t + '</a></li>'; }).join('') + '</ul></div>';
    }
    return '<div class="card glass learn outline-card"><h3>' + icon('list-checks') + ' Complete syllabus of this chapter</h3>' +
      '<p class="hint">' + c.topics + ' topics · ' + c.subs + ' subtopics, from the official JEE Main and JEE Advanced syllabi. ' +
      (book ? 'Tap a topic to read it below.' : 'Tap a topic to see its solved examples.') + (hasTags(s, ch.id) ? ' ' + TAG_KEY : '') + '</p>' +
      outlineList(s, ch, 'card-ol') + '</div>';
  }

  function bookView(s, ch, book, chNo) {
    var fig = 0;
    function figNo() { fig++; return chNo + '.' + fig; }
    var toc = '<div class="card toc"><h3>' + icon('list-checks') + ' In this chapter</h3><ol>' +
      book.sections.map(function (sec, k) {
        return '<li><button type="button" data-goto="sec-' + (k + 1) + '"><span class="toc-n">' + chNo + '.' + (k + 1) + '</span><span>' + sec.h + '</span></button></li>';
      }).join('') +
      '<li><button type="button" data-goto="sec-summary"><span class="toc-n">' + icon('circle-check') + '</span><span>Chapter at a glance</span></button></li></ol></div>';
    var intro = '<div class="card book-intro"><span class="ch-label">Chapter ' + chNo + '</span><h2>' + esc(ch.title) + '</h2>' +
      [].concat(book.intro).map(function (p) { return '<p>' + p + '</p>'; }).join('') +
      '<div class="book-actions"><button type="button" class="btn print-btn">' + icon('book-open') + ' Print / Save as PDF</button></div></div>';
    var learn = syllabusCard(s, ch, book), placed = {};
    var secs = book.sections.map(function (sec, k) {
      var sims = SIMS.filter(function (m) {
        if (placed[m.id] || !m.at.some(function (a) { return a[0] === s + '/' + ch.id && a[1].test(strip(sec.h)); })) return false;
        return (placed[m.id] = true);
      });
      return '<article class="card theory book-sec" id="sec-' + (k + 1) + '">' +
        '<h2><span class="theory-num">' + chNo + '.' + (k + 1) + '</span>' + sec.h + '</h2>' +
        sec.blocks.map(function (b) { return bookBlock(b, figNo); }).join('') + sims.map(function (m) { return simBlock(m); }).join('') + '</article>';
    }).join('');
    var summary = '<article class="card summary-card book-sec" id="sec-summary"><h2 class="tab-title" style="margin-top:0">Chapter at a glance</h2><ul>' +
      book.summary.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' +
      (book.refs ? '<h3 class="refs-title">' + icon('book-open') + ' Further reading</h3><ul class="refs">' + book.refs.map(function (r) {
        return '<li><a href="' + esc(r.url) + '" target="_blank" rel="noopener">' + r.t + '</a>' + (r.note ? ' <small>' + r.note + '</small>' : '') + '</li>';
      }).join('') + '</ul><p class="refs-note">The explanations on this page are original. These free resources go further: OpenStax textbooks are licensed CC BY 4.0, Wikipedia articles CC BY-SA 4.0.</p>' : '') +
      '</article>';
    return intro + toc + learn + secs + summary;
  }

  function theoryTab(s, ch, lesson, book, chNo) {
    if (book) {
      return bookView(s, ch, book, chNo) + '<h2 class="tab-title">Quick revision</h2>' + conceptCards(ch);
    }
    var learn = syllabusCard(s, ch, null);

    var sections = '';
    if (lesson && lesson.theory) {
      sections = lesson.theory.map(function (sec, k) {
        var body = [].concat(sec.body).map(function (para) { return '<p>' + para + '</p>'; }).join('');
        return '<article class="card theory">' +
          '<h2><span class="theory-num">' + (k + 1) + '</span>' + sec.h + '</h2>' + body +
          (sec.analogy ? '<div class="callout analogy"><b>' + icon('lightbulb') + ' Think of it like this</b><p>' + sec.analogy + '</p></div>' : '') +
          (sec.points ? '<div class="callout points"><b>' + icon('circle-check') + ' Remember</b><ul>' +
            sec.points.map(function (pt) { return '<li>' + pt + '</li>'; }).join('') + '</ul></div>' : '') +
          (sec.mistake ? '<div class="callout mistake"><b>' + icon('triangle-alert') + ' Common mistake</b><p>' + sec.mistake + '</p></div>' : '') +
          (sec.check ? '<div class="callout check"><b>' + icon('circle-help') + ' Quick check</b><p>' + sec.check.q + '</p>' +
            '<details><summary>Show answer</summary><div class="ans">' + sec.check.ans + '</div></details></div>' : '') +
        '</article>';
      }).join('');
    }

    var revision = '<h2 class="tab-title">' + (sections ? 'Quick revision' : 'Key concepts') + '</h2>' + conceptCards(ch);

    return learn + sections + revision;
  }
  // Key-concept cards; the ids let search results jump straight to one.
  function conceptCards(ch) {
    return ch.concepts.map(function (c, k) { return '<div class="card concept" id="concept-' + (k + 1) + '"><h3>' + c.h + '</h3><p>' + c.body + '</p></div>'; }).join('');
  }

  function examplesTab(ch, lesson, focusTopic) {
    var list = chapterExamples(ch, lesson);
    return levelFilter(countLevels(list)) + '<div class="ex-list">' + list.map(function (ex, n) {
      var t = ch.syllabus.indexOf(ex.topic);
      var isFocus = focusTopic >= 0 && t === focusTopic && list.findIndex(function (e) { return e.topic === ex.topic; }) === n;
      return '<div class="card example" data-level="' + ex.level + '" data-topic="' + t + '" id="' + (isFocus ? 'focus' : 'ex-' + (ex.i + 1)) + '">' +
        '<div class="ex-meta"><b>Example ' + (n + 1) + '</b>' + levelBadge(ex.level) + '<span class="ex-topic">' + ex.topic + '</span></div>' +
        '<div class="q">' + ex.q + '</div>' +
        '<details class="stepper"><summary>Show solution</summary><ol class="steps">' +
        ex.steps.map(function (st, k) { return '<li style="--i:' + k + '">' + st + '</li>'; }).join('') +
        '</ol><div class="ans"><b>Answer:</b> ' + ex.ans + '</div></details></div>';
    }).join('') + '</div>';
  }

  function practiceQuestion(q, qi, saved) {
    var tried = !!saved, body;
    if (q.type === 'mcq') {
      body = '<div class="options">' + q.options.map(function (o, k) {
        var cls = 'opt';
        if (tried && k === q.correct) cls += ' right';
        else if (tried && k === saved.v) cls += ' wrong';
        return '<button class="' + cls + '" data-opt="' + k + '"' + (tried ? ' disabled' : '') + '>' +
          '<span class="opt-key">' + 'ABCD'[k] + '</span><span>' + o + '</span></button>';
      }).join('') + '</div>';
    } else {
      body = '<div class="num-row"><input class="num-input" type="text" inputmode="decimal" placeholder="Your answer"' +
        (tried ? ' value="' + esc(saved.v) + '" disabled' : '') + '>' +
        (q.unit ? '<span class="num-unit">' + q.unit + '</span>' : '') +
        '<button class="btn primary num-check"' + (tried ? ' disabled' : '') + '>Check</button></div>';
    }
    var verdict = '';
    if (tried) {
      verdict = '<div class="verdict ' + (saved.ok ? 'ok' : 'no') + '">' + icon(saved.ok ? 'circle-check' : 'x') +
        (saved.ok ? 'Correct!' : 'Not quite.') +
        (q.type === 'num' ? ' Answer: <b>' + q.answer + (q.unit ? ' ' + q.unit : '') + '</b>' : '') + '</div>' +
        '<div class="solution"><b>Solution:</b> ' + q.solution + '</div>';
    }
    return '<div class="card pq' + (tried ? (saved.ok ? ' is-right' : ' is-wrong') : '') + '" data-level="' + q.level + '" data-qi="' + qi + '">' +
      '<div class="ex-meta"><b>Q' + (qi + 1) + '</b>' + levelBadge(q.level) +
        '<span class="ex-topic">' + (q.type === 'mcq' ? 'Single correct' : 'Numerical answer') + '</span></div>' +
      '<div class="q">' + q.q + '</div>' + body + '<div class="pq-result">' + verdict + '</div></div>';
  }

  function scoreBar(sc) {
    var pct = sc.total ? Math.round(100 * sc.right / sc.total) : 0;
    return '<div class="score-bar card glass"><div class="score-ico">' + icon('trophy') + '</div>' +
      '<div class="score-text"><b>' + sc.right + ' correct</b> out of ' + sc.tried + ' attempted · ' + sc.total + ' questions' +
      (JEE.fx && JEE.fx.stats.run >= 2 ? ' <span class="streak-chip" title="Correct answers in a row">' + icon('flame') + JEE.fx.stats.run + ' in a row</span>' : '') +
      '<div class="progress"><div style="width:' + pct + '%"></div></div></div>' +
      '<button class="btn reset-btn"' + (sc.tried ? '' : ' disabled') + '>' + icon('rotate-ccw') + ' Reset</button></div>';
  }

  function practiceTab(s, ch, lesson) {
    var html = '';
    if (lesson && lesson.practice) {
      var a = answers[s + '/' + ch.id] || {};
      var order = lesson.practice.map(function (q, qi) { return qi; })
        .sort(function (x, y) { return lesson.practice[x].level - lesson.practice[y].level || x - y; });
      html = '<div id="score">' + scoreBar(practiceScore(s, ch.id, lesson)) + '</div>' +
        levelFilter(countLevels(lesson.practice)) +
        '<div class="pq-list">' + order.map(function (qi) { return practiceQuestion(lesson.practice[qi], qi, a[qi]); }).join('') + '</div>';
    }
    return html + '<h2 class="tab-title">Short-answer questions</h2>' + ch.practice.map(function (pr, n) {
      return '<div class="card example" id="sa-' + (n + 1) + '"><div class="q"><b>Q' + (n + 1) + '.</b> ' + pr.q + '</div>' +
        '<details><summary>Show answer</summary><div class="ans">' + pr.ans + '</div></details></div>';
    }).join('');
  }

  // Every formula starts with a short label: "Lens formula: \(...\)". The label is the text before the first
  // ': ' outside \( \) and \[ \]; it heads the formula on the Formulas tab and is the front of its drill card.
  function formulaParts(f) {
    var depth = 0;
    for (var i = 0; i < f.length - 1; i++) {
      if (f[i] === '\\' && (f[i + 1] === '(' || f[i + 1] === '[')) { depth++; i++; continue; }
      if (f[i] === '\\' && (f[i + 1] === ')' || f[i + 1] === ']')) { depth--; i++; continue; }
      if (depth === 0 && i > 1 && f[i] === ':' && f[i + 1] === ' ') return { label: f.slice(0, i), body: f.slice(i + 2) };
    }
    return { label: '', body: f };
  }
  function formulasTab(ch) {
    return '<div class="formulas">' + ch.formulas.map(function (f, k) {
      var p = formulaParts(f);
      return '<div class="formula" id="formula-' + (k + 1) + '">' + (p.label ? '<span class="f-label">' + p.label + '</span>' : '') +
        '<span class="f-body">' + p.body + '</span></div>';
    }).join('') + '</div>';
  }

  // ---------- Revise tab: flashcards and a formula drill ----------
  // The flashcards are the chapter's quick checks (book and lesson) and its short-answer questions; the drill
  // shows a formula's label and asks for the formula. Progress: { 'physics/kinematics': { <card key>: 'k' | 'r' } },
  // 'k' = I knew it, 'r' = review again. The key is a hash of the question, so it survives edits elsewhere.
  var cardState = load('jee-cards', {});
  function hashText(t) {
    t = strip(t).replace(/\s+/g, ' ').trim();
    var h = 5381;
    for (var i = 0; i < t.length; i++) h = ((h << 5) + h + t.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  function reviseDecks(s, ch, lesson, book) {
    var cards = [], seen = {};
    function add(q, a, src) {
      var h = hashText(q);
      if (seen[h]) return;
      seen[h] = 1;
      cards.push({ h: h, q: q, a: a, src: src });
    }
    if (book) book.sections.forEach(function (sec) { sec.blocks.forEach(function (b) { if (b && b.check) add(b.check.q, b.check.ans, sec.h); }); });
    if (lesson && lesson.theory) lesson.theory.forEach(function (sec) { if (sec.check) add(sec.check.q, sec.check.ans, sec.h); });
    ch.practice.forEach(function (p) { add(p.q, p.ans, 'Short-answer question'); });
    var formulas = ch.formulas.map(function (f) {
      var p = formulaParts(f);
      return { h: 'f' + hashText(f), q: p.label || 'Formula', a: p.body, src: 'Formula' };
    });
    return { cards: cards, formulas: formulas };
  }
  function reviseTab(s, ch, lesson, book) {
    var d = reviseDecks(s, ch, lesson, book);
    return '<div class="revise" id="revise">' +
      '<div class="rv-modes" role="group" aria-label="Choose a deck">' +
        '<button class="chip active" data-deck="cards" aria-pressed="true">Flashcards <span>' + d.cards.length + '</span></button>' +
        '<button class="chip" data-deck="formulas" aria-pressed="false">Formula drill <span>' + d.formulas.length + '</span></button></div>' +
      '<div class="rv-score"></div><div class="rv-stage"></div>' +
      '<p class="rv-swipe">' + icon('mouse-pointer') + ' Tap a card to flip it. Then swipe right if you knew it, left to review it again.</p>' +
      '<p class="rv-keys">Keys: <kbd>Space</kbd> show answer · <kbd>K</kbd> I knew it · <kbd>R</kbd> review again · <kbd>←</kbd> <kbd>→</kbd> previous / next</p></div>';
  }
  var reviseKey = null;   // keyboard handler of the Revise tab on screen, if any
  function bindRevise(s, id) {
    var root = document.getElementById('revise');
    reviseKey = null;
    if (!root) return;
    var key = s + '/' + id, f = findChapter(s, id);
    var decks = reviseDecks(s, f.ch, LESSONS[key], BOOKS[key]);
    var scoreEl = root.querySelector('.rv-score'), stage = root.querySelector('.rv-stage');
    var st = { deck: 'cards', order: [], pos: 0, open: false, only: false, shuffle: false };
    function marks() { return cardState[key] || {}; }
    function start() {
      var m = marks(), cards = decks[st.deck];
      st.order = cards.map(function (c, i) { return i; }).filter(function (i) { return !st.only || m[cards[i].h] !== 'k'; });
      if (st.shuffle) {
        for (var i = st.order.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = st.order[i]; st.order[i] = st.order[j]; st.order[j] = t; }
      }
      st.pos = 0; st.open = false;
      draw();
    }
    function draw(scroll, anim) {
      var cards = decks[st.deck], m = marks(), known = 0, review = 0, isF = st.deck === 'formulas';
      cards.forEach(function (c) { if (m[c.h] === 'k') known++; else if (m[c.h] === 'r') review++; });
      var pct = cards.length ? Math.round(100 * known / cards.length) : 0;
      scoreEl.innerHTML = '<div class="score-bar card glass rv-bar"><div class="score-ico">' + icon('layers') + '</div>' +
        '<div class="score-text"><b>' + known + ' known</b> · ' + review + ' to review · ' + cards.length + ' cards' +
        '<div class="progress"><div style="width:' + pct + '%"></div></div></div>' +
        '<div class="rv-tools">' +
          '<button class="btn rv-btn' + (st.shuffle ? ' on' : '') + '" data-rv="shuffle" aria-pressed="' + st.shuffle + '">' + icon('shuffle') + ' Shuffle</button>' +
          '<button class="btn rv-btn' + (st.only ? ' on' : '') + '" data-rv="only" aria-pressed="' + st.only + '">' + icon('target') + ' Not known yet</button>' +
          '<button class="btn rv-btn" data-rv="reset"' + (known + review ? '' : ' disabled') + '>' + icon('rotate-ccw') + ' Reset</button></div></div>';
      var html;
      if (!cards.length) {
        html = '<div class="card rv-done"><p>This chapter has no ' + (isF ? 'formulas' : 'flashcards') + ' yet.</p></div>';
      } else if (!st.order.length) {
        html = '<div class="card rv-done"><h3>' + icon('trophy') + ' You know every card in this deck</h3>' +
          '<p>Switch off <b>Not known yet</b> to go through all ' + cards.length + ' cards again.</p>' +
          '<button class="btn primary" data-rv="all">Show all cards</button></div>';
      } else if (st.pos >= st.order.length) {
        html = '<div class="card rv-done"><h3>' + icon('trophy') + ' Round complete</h3>' +
          '<p>' + known + ' of ' + cards.length + ' cards known' + (review ? ', ' + review + ' marked to review again' : '') + '.</p>' +
          '<div class="rv-actions"><button class="btn" data-rv="again">' + icon('rotate-ccw') + ' Go through again</button>' +
          (known < cards.length ? '<button class="btn primary" data-rv="focus">' + icon('target') + ' Only cards not known yet</button>' : '') + '</div></div>';
      } else {
        var c = cards[st.order[st.pos]], mk = m[c.h];
        html = '<div class="card rv-card' + (isF ? ' rv-formula' : '') + (mk ? ' is-' + mk : '') + (st.open ? ' is-open' : '') + '">' +
          '<span class="rv-stamp k">' + icon('check') + ' Knew it</span><span class="rv-stamp r">' + icon('rotate-ccw') + ' Review</span>' +
          '<div class="ex-meta"><b>Card ' + (st.pos + 1) + ' of ' + st.order.length + '</b>' +
            (mk ? '<span class="rv-state ' + mk + '">' + (mk === 'k' ? 'Known' : 'Review again') + '</span>' : '') +
            (isF ? '' : '<span class="ex-topic">' + c.src + '</span>') + '</div>' +
          (isF ? '<div class="rv-prompt">Write down this formula, then check.</div>' : '') +
          '<div class="rv-q">' + c.q + '</div>' +
          (st.open ? '<div class="rv-a">' + c.a + '</div>' : '') +
          '<div class="rv-actions">' + (st.open
            ? '<button class="btn rv-again" data-rv="r">' + icon('rotate-ccw') + ' Review again</button><button class="btn rv-knew" data-rv="k">' + icon('check') + ' I knew it</button>'
            : '<button class="btn primary" data-rv="show">Show answer</button>') + '</div>' +
          '<div class="rv-nav"><button class="btn" data-rv="prev"' + (st.pos ? '' : ' disabled') + '>' + icon('arrow-left') + ' Previous</button>' +
            '<button class="btn" data-rv="next">Skip ' + icon('arrow-right') + '</button></div></div>';
      }
      stage.innerHTML = html;
      renderMath(root);
      var card = stage.firstChild, top = card.getBoundingClientRect().top;
      if (anim && !still()) card.classList.add(anim);
      if (scroll && top < (document.querySelector('.topbar').offsetHeight + 60)) card.scrollIntoView({ block: 'start' });
    }
    // Card animations: flip to the answer, fly off right (knew it) or left (review again), slide the next one in.
    var busy = false;
    function still() { return !JEE.fx || JEE.fx.calm() || JEE.fx.robot; }
    function out(cls, ms, then, card) {
      card = card || stage.querySelector('.rv-card');
      if (!card || still()) return then();
      busy = true;
      card.classList.add(cls);
      setTimeout(function () { busy = false; then(); }, ms);
    }
    function where(ev, sel) {
      if (ev && ev.clientX) return { x: ev.clientX, y: ev.clientY };
      var el = stage.querySelector(sel || '.rv-card'), r = el ? el.getBoundingClientRect() : { left: innerWidth / 2, top: innerHeight / 2, width: 0 };
      return { x: r.left + r.width / 2, y: r.top + 30 };
    }
    function act(a, ev, swiped) {
      if (busy) return;
      var cards = decks[st.deck];
      if (a === 'show') {
        if (st.open || st.pos >= st.order.length) return;
        out('flip-out', 160, function () { st.open = true; draw(false, 'flip-in'); });
      }
      else if ((a === 'k' || a === 'r') && st.pos < st.order.length) {
        if (!st.open) { act('show'); return; }
        var c = cards[st.order[st.pos]], pt = where(ev, '[data-rv="' + a + '"]');
        cardState[key] = cardState[key] || {};
        cardState[key][c.h] = a;
        save('jee-cards', cardState);
        if (JEE.fx) {
          JEE.fx.reward('card', { key: key + ':' + c.h, mark: a, x: pt.x, y: pt.y });
          if (a === 'k') JEE.fx.confetti(pt.x, pt.y, { n: 14, power: 5 });
        }
        out(swiped ? 'swiped' : a === 'k' ? 'fly-right' : 'fly-left', 260, function () { st.pos++; st.open = false; draw(true, 'enter-next'); }, swiped);
      }
      else if (a === 'next' && st.pos < st.order.length) out('fly-up', 180, function () { st.pos++; st.open = false; draw(true, 'enter-next'); });
      else if (a === 'prev' && st.pos > 0) out('fly-down', 180, function () { st.pos--; st.open = false; draw(true, 'enter-prev'); });
      else if (a === 'shuffle') { st.shuffle = !st.shuffle; start(); }
      else if (a === 'only' || a === 'focus' || a === 'all') { st.only = a === 'only' ? !st.only : a === 'focus'; start(); }
      else if (a === 'again') start();
      else if (a === 'reset') {
        if (!confirm('Clear your progress on this deck?')) return;
        cards.forEach(function (c) { if (cardState[key]) delete cardState[key][c.h]; });
        save('jee-cards', cardState);
        start();
      }
    }
    root.addEventListener('click', function (e) {
      var d = e.target.closest('[data-deck]'), b = e.target.closest('[data-rv]');
      if (d) {
        st.deck = d.getAttribute('data-deck');
        root.querySelectorAll('[data-deck]').forEach(function (x) { x.classList.toggle('active', x === d); x.setAttribute('aria-pressed', x === d); });
        start();
      } else if (b && !b.disabled) act(b.getAttribute('data-rv'), e);
    });
    // Touch and mouse: tap the card to flip it; once the answer shows, swipe right = I knew it, left = review again.
    var drag = null;
    stage.addEventListener('pointerdown', function (e) {
      var card = e.target.closest('.rv-card');
      if (!card || busy || e.target.closest('button, a, .katex-display')) return;
      drag = { x: e.clientX, y: e.clientY, dx: 0, card: card, moved: false, id: e.pointerId };
    });
    stage.addEventListener('pointermove', function (e) {
      if (!drag || e.pointerId !== drag.id) return;
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved) {
        if (Math.abs(dx) < 12 || Math.abs(dx) < Math.abs(dy) || !st.open || still()) return;
        drag.moved = true;
        drag.card.classList.remove('flip-in', 'enter-next', 'enter-prev');   // their fill would override the drag transform
        drag.card.classList.add('dragging');
        try { drag.card.setPointerCapture(e.pointerId); } catch (err) {}
      }
      drag.dx = dx;
      drag.card.style.transform = 'translateX(' + dx + 'px) rotate(' + (dx / 22).toFixed(2) + 'deg)';
      drag.card.classList.toggle('sw-k', dx > 50);
      drag.card.classList.toggle('sw-r', dx < -50);
    });
    function endDrag(e) {
      if (!drag) return;
      var d = drag;
      drag = null;
      if (!d.moved) {
        if (e.type === 'pointerup' && !st.open && !getSelection().toString()) act('show', e);
        return;
      }
      d.card.classList.remove('dragging');
      if (Math.abs(d.dx) > 90) {
        var dir = d.dx > 0 ? 1 : -1;
        d.card.style.transform = 'translateX(' + dir * (innerWidth + 200) + 'px) rotate(' + dir * 28 + 'deg)';
        act(dir > 0 ? 'k' : 'r', e, d.card);
      } else {
        d.card.style.transform = '';
        d.card.classList.remove('sw-k', 'sw-r');
      }
    }
    stage.addEventListener('pointerup', endDrag);
    stage.addEventListener('pointercancel', endDrag);
    reviseKey = function (e) {
      var k = e.key;
      if (k === ' ' || k === 'Enter') { if (!st.open && st.pos < st.order.length) { e.preventDefault(); act('show'); } }
      else if (k === 'k' || k === 'K') act('k');
      else if (k === 'r' || k === 'R') act('r');
      else if (k === 'ArrowRight') act('next');
      else if (k === 'ArrowLeft') act('prev');
    };
    start();
  }

  // Left-hand index of every chapter: the current subject open, the other two folded, and the open chapter's
  // book sections nested under it (Theory tab only). On small screens it becomes a slide-in drawer.
  function sideIndex(s, id) {
    function rows(subj) {
      var html = '', cls = 0;
      JEE[subj].chapters.forEach(function (c, k) {
        if (c.cls !== cls) { cls = c.cls; html += '<li class="side-cls">Class ' + cls + '</li>'; }
        var active = subj === s && c.id === id;
        html += '<li><details class="side-chd"' + (active ? ' open' : '') + ' data-s="' + subj + '" data-id="' + c.id + '"><summary>' +
          '<a class="side-ch' + (active ? ' active' : '') + '" href="#/s/' + subj + '/' + c.id + '"' + (active ? ' aria-current="page"' : '') + '>' +
          '<span class="side-n">' + (k + 1) + '</span><span class="side-t">' + esc(c.title) + tagBadge(chapterTag(subj, c)) + '</span>' +
          (isDone(subj, c.id) ? icon('check', 'side-done') : '') + '</a><span class="side-x" title="Show topics and subtopics"></span></summary>' +
          (active ? outlineList(subj, c, 'side-ol') : '') + '</details></li>';
      });
      return '<ul class="side-list">' + html + '</ul>';
    }
    return '<aside class="ch-side" id="ch-side" aria-label="All chapters">' +
      '<div class="side-head"><span>All chapters &amp; topics</span><button type="button" class="side-close" aria-label="Close chapter list">' + icon('x') + '</button></div>' +
      SUBJECTS.map(function (subj) {
        var p = subjectProgress(subj);
        return '<details class="side-group"' + (subj === s ? ' open' : '') + ' style="--c:' + COLORS[subj] + '">' +
          '<summary>' + icon(SUBJECT_ICONS[subj][0]) + '<span>' + JEE[subj].name + '</span><small>' + p.n + '/' + p.total + ' done</small></summary>' +
          rows(subj) + '</details>';
      }).join('') + '</aside><div class="side-overlay" hidden></div>';
  }

  function chapterView(s, id, tab, focus) {
    var found = findChapter(s, id);
    if (!found) return notFound();
    var sub = JEE[s], ch = found.ch, i = found.i, lesson = LESSONS[s + '/' + id];
    var prev = sub.chapters[i - 1], next = sub.chapters[i + 1];
    var d = isDone(s, id);
    if (!TABS.some(function (t) { return t.id === tab; })) tab = 'theory';

    var nEx = chapterExamples(ch, lesson).length;
    var sc = practiceScore(s, id, lesson);
    var nPr = sc.total + ch.practice.length;
    var content = tab === 'examples' ? examplesTab(ch, lesson, focus)
      : tab === 'practice' ? practiceTab(s, ch, lesson)
      : tab === 'formulas' ? formulasTab(ch)
      : tab === 'revise' ? reviseTab(s, ch, lesson, BOOKS[s + '/' + id])
      : theoryTab(s, ch, lesson, BOOKS[s + '/' + id], i + 1);

    return '<div class="ch-layout">' + sideIndex(s, id) + '<div class="ch-main">' +
      '<div class="crumbs"><button type="button" class="btn side-toggle" aria-controls="ch-side">' + icon('list-checks') + ' All chapters</button>' +
        '<a href="#/">Home</a> › <a href="#/s/' + s + '">' + sub.name + '</a> › Chapter ' + (i + 1) + '</div>' +
      '<header class="ch-hero card glass" style="--c:' + COLORS[s] + '">' +
        '<span class="topic-icon big">' + icon(CHAPTER_ICONS[id]) + '</span>' +
        '<div class="ch-hero-text"><span class="ch-kicker">' + sub.name + ' · Chapter ' + (i + 1) + ' · Class ' + ch.cls + ({ A: ' · JEE Advanced only', M: ' · JEE Main only' }[chapterTag(s, ch)] || '') + '</span>' +
          '<h1>' + esc(ch.title) + '</h1>' +
          '<div class="ch-stats"><span>' + topicCountText(s, ch) + '</span><span>' + nEx + ' solved examples</span>' +
            '<span>' + nPr + ' practice questions</span>' +
            (sc.total ? '<span class="ch-score">' + icon('trophy') + sc.right + '/' + sc.total + ' correct</span>' : '') + '</div></div>' +
      '</header>' +
      '<nav class="tabs" style="--c:' + COLORS[s] + ';--i:' + TABS.map(function (t) { return t.id; }).indexOf(tab) + '" data-i="' + TABS.map(function (t) { return t.id; }).indexOf(tab) + '">' + TABS.map(function (t) {
        return '<a class="tab' + (t.id === tab ? ' active' : '') + '" href="#/s/' + s + '/' + id + '/' + t.id + '">' +
          icon(t.icon) + '<span>' + t.label + '</span></a>';
      }).join('') + '</nav>' +
      '<div class="tab-body" style="--c:' + COLORS[s] + '">' + content + '</div>' +
      '<p class="done-row"><button id="done-btn" class="btn ' + (d ? 'done' : 'primary') + '">' + (d ? '✓ Completed (click to undo)' : 'Mark chapter as done') + '</button></p>' +
      '<div class="pager">' +
        (prev ? '<a class="btn" href="#/s/' + s + '/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
        (next ? '<a class="btn" href="#/s/' + s + '/' + next.id + '">' + esc(next.title) + ' →</a>' : '<span></span>') +
      '</div></div></div>';
  }

  // Phone drawer for the chapter index.
  function setSide(open) {
    var side = document.getElementById('ch-side'), overlay = app.querySelector('.side-overlay');
    document.body.classList.toggle('side-open', !!(open && side));
    if (!side) return;
    side.classList.toggle('open', open);
    overlay.hidden = !open;
  }

  // Level filter chips, practice answering and reset. Called after a chapter page is rendered.
  function bindChapter(s, id) {
    var lesson = LESSONS[s + '/' + id];
    var toggle = app.querySelector('.side-toggle');
    if (toggle) toggle.addEventListener('click', function () { setSide(true); });
    app.querySelector('.side-overlay').addEventListener('click', function () { setSide(false); });
    app.querySelector('.side-close').addEventListener('click', function () { setSide(false); });
    app.querySelectorAll('.ch-side a').forEach(function (a) { a.addEventListener('click', function () { setSide(false); }); });
    var pb = app.querySelector('.print-btn');
    if (pb) pb.addEventListener('click', function () { window.print(); });
    bindRevise(s, id);
    app.querySelectorAll('.lvl-filter').forEach(function (bar) {
      bar.addEventListener('click', function (e) {
        var btn = e.target.closest('.chip');
        if (!btn) return;
        bar.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('active', c === btn); });
        var lvl = btn.getAttribute('data-level');
        app.querySelectorAll('.ex-list > .card, .pq-list > .card').forEach(function (card) {
          card.hidden = lvl !== 'all' && card.getAttribute('data-level') !== lvl;
        });
      });
    });

    var list = app.querySelector('.pq-list');
    if (!list || !lesson) return;
    var key = s + '/' + id;
    function record(qi, v, ok, e) {
      answers[key] = answers[key] || {};
      answers[key][qi] = { v: v, ok: ok };
      save('jee-practice', answers);
      var card = list.querySelector('[data-qi="' + qi + '"]');
      var at = e && e.clientX ? { x: e.clientX, y: e.clientY } : null;
      if (!at) { var r = card.getBoundingClientRect(); at = { x: r.left + r.width / 2, y: r.top + 40 }; }
      var fresh = document.createElement('div');
      fresh.innerHTML = practiceQuestion(lesson.practice[qi], qi, answers[key][qi]);
      fresh = fresh.firstChild;
      fresh.hidden = card.hidden;
      fresh.classList.add(ok ? 'just-right' : 'just-wrong');
      card.replaceWith(fresh);
      renderMath(fresh);
      var fx = JEE.fx;
      if (fx) {
        fx.reward('answer', { key: key + '#' + qi, ok: ok, level: lesson.practice[qi].level, s: s, x: at.x, y: at.y });
        if (ok) fx.confetti(at.x, at.y, { n: 26, power: 7 });
      }
      var scoreEl = document.getElementById('score'), sc = practiceScore(s, id, lesson);
      var bar = scoreEl.querySelector('.progress > div'), from = bar ? bar.style.width : '0%';
      scoreEl.innerHTML = scoreBar(sc);
      bar = scoreEl.querySelector('.progress > div');
      var to = bar.style.width;
      bar.style.width = from; void bar.offsetWidth; bar.style.width = to;
      if (fx && sc.total && sc.right === sc.total) {
        fx.reward('perfect', { key: key });
        fx.confetti(0, 0, { rain: true, n: 180 });
        fx.toast(icon('trophy') + '<b>Perfect score!</b> Every question in this chapter answered correctly.', 'level', 5000);
      }
      bindReset();
    }
    list.addEventListener('click', function (e) {
      var card = e.target.closest('.pq');
      if (!card) return;
      var qi = +card.getAttribute('data-qi'), q = lesson.practice[qi];
      var opt = e.target.closest('.opt');
      if (opt && !opt.disabled) record(qi, +opt.getAttribute('data-opt'), +opt.getAttribute('data-opt') === q.correct, e);
      if (e.target.closest('.num-check')) {
        var input = card.querySelector('.num-input'), raw = input.value.trim().replace(/,/g, '');
        var v = parseFloat(raw);
        if (raw === '' || isNaN(v)) { input.focus(); input.classList.add('shake'); return; }
        record(qi, raw, Math.abs(v - q.answer) <= q.tol, e);
      }
    });
    list.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && e.target.classList.contains('num-input')) e.target.closest('.pq').querySelector('.num-check').click();
    });
    function bindReset() {
      var r = app.querySelector('.reset-btn');
      if (r) r.addEventListener('click', function () {
        if (!confirm('Clear your answers for this chapter?')) return;
        delete answers[key];
        save('jee-practice', answers);
        route();
      });
    }
    bindReset();
  }

  function syllabusView() {
    var totals = { ch: 0, topics: 0, subs: 0 };
    var body = SUBJECTS.map(function (s) {
      var sub = JEE[s], cls = 0;
      return '<section class="syl-subject" style="--c:' + COLORS[s] + '"><h2>' + icon(SUBJECT_ICONS[s][0]) + sub.name + ' <small>' + sub.chapters.length + ' chapters</small></h2>' +
        sub.chapters.map(function (c, i) {
          var n = outlineCount(s, c.id);
          totals.ch++; totals.topics += n.topics; totals.subs += n.subs;
          var head = c.cls !== cls ? '<h3 class="syl-cls">Class ' + (cls = c.cls) + '</h3>' : '';
          return head + '<details class="syl-ch"><summary><span class="syl-num">' + (i + 1) + '</span><span class="syl-title">' + esc(c.title) +
            tagBadge(chapterTag(s, c)) + '</span><small>' + topicCountText(s, c) + '</small></summary>' +
            '<div class="syl-body">' + outlineList(s, c, 'card-ol') +
            '<p><a class="btn" href="#/s/' + s + '/' + c.id + '">Open chapter →</a></p></div></details>';
        }).join('') + '</section>';
    }).join('');
    return '<div class="crumbs"><a href="#/">Home</a> › Syllabus</div>' +
      '<h1>Complete syllabus</h1>' +
      '<p class="syl-intro">Every chapter, topic and subtopic of <b>JEE Main 2027</b> (official NTA syllabus, October 2026) and ' +
      '<b>JEE Advanced 2026</b> (official IIT syllabus), merged into one list: ' + totals.ch + ' chapters, ' + totals.topics + ' topics and ' + totals.subs + ' subtopics. ' +
      TAG_KEY + ' Official documents: <a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener">jeemain.nta.nic.in</a> and ' +
      '<a href="https://jeeadv.ac.in" target="_blank" rel="noopener">jeeadv.ac.in</a>.</p>' +
      '<div class="syl-actions"><button type="button" class="btn" data-syl="open">Expand all</button><button type="button" class="btn" data-syl="close">Collapse all</button></div>' + body;
  }

  function notFound() {
    return '<h1>Page not found</h1><p><a href="#/">Go to the home page</a></p>';
  }

  // ---------- site-wide search (#/search/<words>) ----------
  // The index is built once, from data that is always loaded: chapter titles, outline topics and subtopics,
  // syllabus topics, key concepts, formulas, solved examples and short-answer questions. Every word typed must
  // match; hits are grouped by kind, and within a kind whole-word and title matches come first.
  var KINDS = [
    { id: 'chapter', label: 'Chapters' }, { id: 'topic', label: 'Topics' }, { id: 'concept', label: 'Key concepts' },
    { id: 'formula', label: 'Formulas' }, { id: 'example', label: 'Solved examples' }, { id: 'short', label: 'Short-answer questions' }
  ];
  var SEARCH_SHOW = 12, SEARCH_MAX = 60;
  function norm(t) {
    t = strip(t).toLowerCase().replace(/&[a-z]+;/g, ' ')
      .replace(/\\(?:text|mathrm|mathbf|operatorname|dfrac|tfrac|frac|left|right|quad|qquad|displaystyle)(?![a-z])/g, ' ');
    try { t = t.normalize('NFD').replace(/[̀-ͯ]/g, ''); } catch (e) {}
    try { t = t.replace(/[^\p{L}\p{N}]+/gu, ' '); } catch (e) { t = t.replace(/[\s.,;:!?()[\]{}'"‘’“”\-‐-―/\\^_=+*<>|~`]+/g, ' '); }
    return ' ' + t.trim() + ' ';
  }
  var searchIndex = null;
  function buildSearchIndex() {
    var idx = [];
    function add(kind, s, c, n, title, href, go, extra) {
      idx.push({ kind: kind, s: s, c: c, n: n, title: title, href: href, go: go || '', head: norm(title), text: norm(title + ' ' + (extra || '')) });
    }
    SUBJECTS.forEach(function (s) {
      JEE[s].chapters.forEach(function (c, n) {
        var base = '#/s/' + s + '/' + c.id, seen = {};
        add('chapter', s, c, n, esc(c.title), base, '', JEE[s].name);
        function topic(t, parent) {
          var k = norm(t.name);
          if (seen[k]) return;
          seen[k] = 1;
          var L = (t.s >= 0 || t.sec ? topicLink(s, c, t) : null) || (parent && topicLink(s, c, parent)) || { href: base + '/theory' };
          add('topic', s, c, n, esc(t.name), L.href, L.go, parent ? parent.name : '');
        }
        outlineOf(s, c.id).forEach(function (t) { topic(t); t.sub.forEach(function (x) { topic(x, t); }); });
        c.syllabus.forEach(function (t, k) {
          if (!seen[norm(t)]) { seen[norm(t)] = 1; add('topic', s, c, n, t, base + '/examples/' + k); }
        });
        c.concepts.forEach(function (x, k) { add('concept', s, c, n, x.h, base + '/theory', 'concept-' + (k + 1), x.body); });
        c.formulas.forEach(function (f, k) {
          var p = formulaParts(f);
          add('formula', s, c, n, (p.label ? '<b>' + p.label + '</b> ' : '') + p.body, base + '/formulas', 'formula-' + (k + 1));
        });
        c.examples.forEach(function (e, k) { add('example', s, c, n, e.q, base + '/examples', 'ex-' + (k + 1), e.topic + ' ' + e.ans); });
        c.practice.forEach(function (p, k) { add('short', s, c, n, p.q, base + '/practice', 'sa-' + (k + 1), p.ans); });
      });
    });
    return idx;
  }
  function searchHits(q) {
    var words = norm(q).trim().split(' ').filter(Boolean), groups = {};
    KINDS.forEach(function (k) { groups[k.id] = []; });
    if (!words.length) return { words: words, groups: groups, total: 0 };
    if (!searchIndex) searchIndex = buildSearchIndex();
    var total = 0;
    searchIndex.forEach(function (e, i) {
      for (var w = 0; w < words.length; w++) if (e.text.indexOf(words[w]) === -1) return;
      var score = 0;
      words.forEach(function (w) {
        if (e.text.indexOf(' ' + w) === -1) score += 2;         // only inside a longer word
        if (e.head.indexOf(w) === -1) score += 1;               // not in the title itself
      });
      groups[e.kind].push({ e: e, score: score, i: i });
      total++;
    });
    KINDS.forEach(function (k) { groups[k.id].sort(function (a, b) { return a.score - b.score || a.i - b.i; }); });
    return { words: words, groups: groups, total: total };
  }
  function searchItem(e) {
    return '<a class="sr-item" href="' + e.href + '"' + (e.go ? ' data-goto="' + e.go + '"' : '') + ' style="--c:' + COLORS[e.s] + '">' +
      '<span class="sr-title">' + e.title + '</span>' +
      '<span class="sr-ctx"><b>' + JEE[e.s].name + '</b> · Chapter ' + (e.n + 1) + (e.kind === 'chapter' ? '' : ' · ' + esc(e.c.title)) + '</span></a>';
  }
  function searchResults(q) {
    var r = searchHits(q);
    if (!r.words.length) return '';
    if (!r.total) return '<p class="sr-none">Nothing matches every word of “' + esc(q.trim()) + '”. Try fewer or shorter words.</p>';
    return '<p class="sr-count">' + r.total + ' result' + (r.total === 1 ? '' : 's') + '</p>' + KINDS.map(function (k) {
      var list = r.groups[k.id];
      if (!list.length) return '';
      return '<section class="sr-group" data-kind="' + k.id + '"><h2>' + k.label + ' <small>' + list.length + '</small></h2><div class="sr-list">' +
        list.slice(0, SEARCH_MAX).map(function (h, n) { return n < SEARCH_SHOW ? searchItem(h.e) : searchItem(h.e).replace('<a ', '<a hidden '); }).join('') + '</div>' +
        (list.length > SEARCH_SHOW ? '<button type="button" class="btn sr-more" data-more="' + k.id + '">Show ' + (Math.min(list.length, SEARCH_MAX) - SEARCH_SHOW) + ' more</button>' : '') +
        (list.length > SEARCH_MAX ? '<p class="sr-cap">Showing the first ' + SEARCH_MAX + '. Add another word to narrow it down.</p>' : '') +
        '</section>';
    }).join('');
  }
  function searchView(q) {
    return '<div class="crumbs"><a href="#/">Home</a> › Search</div><h1>Search</h1>' +
      '<div class="search-box">' + icon('search') +
        '<input id="search" class="search" type="search" placeholder="Chapters, topics, formulas, examples…" aria-label="Search the site" autocomplete="off" spellcheck="false" value="' + esc(q) + '"></div>' +
      '<p class="search-hint">Every word must match. Try <a href="#/search/Bernoulli">Bernoulli</a>, <a href="#/search/Hardy%20Schulze">Hardy Schulze</a> or <a href="#/search/Rolle">Rolle</a>.</p>' +
      '<div id="results" class="results" aria-live="polite"></div>';
  }
  function bindSearch() {
    var input = document.getElementById('search'), out = document.getElementById('results'), timer;
    if (!input) return;
    function run() {
      var v = input.value.trim(), url = '#/search' + (v ? '/' + encodeURIComponent(v) : '');
      if (location.hash !== url) history.replaceState(null, '', url);
      out.innerHTML = searchResults(v);
      renderMath(out);
    }
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(run, 160); });
    out.addEventListener('click', function (e) {
      var b = e.target.closest('[data-more]');
      if (!b) return;
      b.parentNode.querySelectorAll('.sr-item[hidden]').forEach(function (a) { a.hidden = false; });
      b.remove();
    });
    run();
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }

  // ---------- interactive simulations (js/sims.js, loaded the first time one is needed) ----------
  // at: where each one appears in the book chapters ([chapter, section-heading pattern]); it is also on the Lab page.
  var SIMS = [
    { id: 'projectile', s: 'physics', at: [['physics/kinematics', /^Projectile motion/]], icon: 'target', t: 'Projectile launcher',
      d: 'Choose the launch speed, angle and planet, then fire. The path, the velocity components and the range, height and flight time update live.',
      tries: ['Launch at 30° and then at 60° with the same speed: the ranges match. Why?', 'Find the angle that gives the longest range. Does it change on the Moon?', 'Watch the green horizontal arrow: it never changes length.'] },
    { id: 'pendulum', s: 'physics', at: [['physics/oscillations-waves', /simple pendulum/i]], icon: 'activity', t: 'Pendulum and SHM',
      d: 'A real pendulum, solved step by step without the small-angle shortcut, with its energy bars and a live displacement–time graph.',
      tries: ['Double the length: the period grows by √2, not 2.', 'Raise the amplitude to 60°: the measured period becomes longer than 2π√(L/g).', 'Watch KE and PE trade places twice every period.'] },
    { id: 'waves', s: 'physics', at: [['physics/oscillations-waves', /superposition/i]], icon: 'audio-waveform', t: 'Superposition of waves',
      d: 'Two sine waves and their sum. Send them the same way or towards each other to make a standing wave with fixed nodes.',
      tries: ['Set the phase difference to 180° with equal amplitudes: the waves cancel.', 'Choose "opposite directions": find the nodes that never move.', 'Make the second wavelength slightly different to see a beat-like pattern.'] },
    { id: 'lens', s: 'physics', at: [['physics/optics', /^Thin lens formula/]], icon: 'eye', t: 'Lens ray diagram',
      d: 'Drag the object along the axis. The three principal rays, the image and its position, size and nature follow instantly.',
      tries: ['Move the object inside F of a convex lens: the image turns virtual, upright and magnified.', 'Put the object at 2F: the image is real, inverted and the same size.', 'Switch to a concave lens: the image is always virtual and smaller.'] },
    { id: 'ydse', s: 'physics', at: [['physics/optics', /double-slit/i]], icon: 'layers', t: "Young's double slit",
      d: 'Change the slit separation, wavelength and screen distance and watch the fringes spread, shrink and change colour.',
      tries: ['Halve the slit separation: the fringe width doubles.', 'Change red light to violet: the fringes get closer together.', 'Check β = λD/d against the measured spacing.'] },
    { id: 'photo', s: 'physics', at: [['physics/dual-nature', /photoelectric equation/i]], icon: 'sun', t: 'Photoelectric effect',
      d: 'Shine light of any colour and intensity on a metal. Electrons fly out only above the threshold frequency.',
      tries: ['Use red light on sodium at full intensity: nothing comes out.', 'Above the threshold, raise the intensity: more electrons, same top speed.', 'Raise the frequency: the stopping potential grows in a straight line.'] },
    { id: 'bohr', s: 'physics', at: [['physics/atoms-nuclei', /hydrogen spectrum/i]], icon: 'atom', t: 'Hydrogen spectrum',
      d: 'Make the electron jump between Bohr levels. Each jump emits a photon whose wavelength and series appear on the spectrum.',
      tries: ['Every jump down to n = 2 is a Balmer line; only these are visible.', 'Find the shortest-wavelength Lyman line (n = ∞ → 1).', 'Compare 3 → 2 with 4 → 2: which is red and which is blue-green?'] },
    { id: 'gas', s: 'chemistry', at: [['chemistry/states-of-matter', /^Kinetic theory/], ['physics/kinetic-theory', /^Pressure of an ideal gas/]], icon: 'wind', t: 'Gas in a box',
      d: 'Molecules bouncing in a box with a piston. Heat the gas, squeeze it or add molecules and read the pressure from PV = nRT.',
      tries: ['Halve the volume at fixed temperature: the pressure doubles (Boyle).', 'Double the absolute temperature: the molecules move √2 times faster.', 'Watch the speed histogram spread out as the gas gets hotter.'] },
    { id: 'titration', s: 'chemistry', at: [['chemistry/equilibrium', /^Buffer solutions/]], icon: 'beaker', t: 'Acid–base titration',
      d: 'Add NaOH to an acid drop by drop. The pH curve, the indicator colour and the equivalence point follow the exact equilibrium maths.',
      tries: ['For acetic acid, find the half-equivalence point: there pH = pKa.', 'Compare the jump at equivalence for HCl and for acetic acid.', 'Which indicator suits the weak-acid titration, and why?'] },
    { id: 'kinetics', s: 'chemistry', at: [['chemistry/chemical-kinetics', /^First-order/]], icon: 'timer', t: 'Reaction order and half-life',
      d: 'Watch a reactant get used up for zero-, first- and second-order reactions, with the straight-line plot for each.',
      tries: ['First order: every half-life is the same length, whatever the start.', 'Zero order: the concentration falls in a straight line, then stops.', 'Second order: each half-life is twice as long as the one before.'] },
    { id: 'unitcircle', s: 'maths', at: [['maths/trigonometry', /^Trigonometric functions of any angle/]], icon: 'triangle-right', t: 'Unit circle',
      d: 'Drag the point round the unit circle. sin, cos and tan appear as lengths and trace out their graphs.',
      tries: ['In which quadrants is tan negative? (All–Sin–Tan–Cos)', 'Watch tan blow up as the angle reaches 90°.', 'Check sin²θ + cos²θ = 1 at any angle.'] },
    { id: 'tangent', s: 'maths', at: [['maths/limits-continuity-differentiability', /^The derivative/]], icon: 'infinity', t: 'From secant to tangent',
      d: 'Shrink h and watch the secant through two points turn into the tangent. Its slope tends to the derivative.',
      tries: ['For x², at x = 1 the secant slopes are 2 + h. Watch them approach 2.', 'Find where the tangent of x³ − 3x is horizontal.', 'Try ln x: the slope at x is exactly 1/x.'] },
    { id: 'riemann', s: 'maths', at: [['maths/integral-calculus', /limit of a sum/i]], icon: 'chart-area', t: 'Area as a limit of sums',
      d: 'Fill the area under a curve with rectangles. Increase their number and the sum closes in on the definite integral.',
      tries: ['With 4 rectangles compare left and right sums for x².', 'The midpoint rule is far more accurate. How many rectangles does it need?', 'Make the error smaller than 0.01.'] },
    { id: 'conics', s: 'maths', at: [['maths/coordinate-geometry', /^Sections of a cone/]], icon: 'orbit', t: 'Conics and eccentricity',
      d: 'One focus, one directrix and a ratio e. Slide e from 0 past 1 to see circles, ellipses, parabolas and hyperbolas.',
      tries: ['At e = 1 the distance to the focus equals the distance to the directrix.', 'Push e above 1: the curve breaks into a hyperbola.', 'Watch PS = e·PM stay true as P moves.'] },
    { id: 'dice', s: 'maths', at: [['maths/statistics-probability', /^Probability of an event/]], icon: 'dices', t: 'Dice and probability',
      d: 'Roll one or two dice hundreds of times. The bars settle onto the theoretical probabilities.',
      tries: ['Roll two dice 1000 times: 7 is the most common sum, with probability 6/36.', 'With one die, how many rolls before every bar is near 1/6?', 'Compare the experimental mean with the expected value 7.'] }
  ];
  function simById(id) { for (var i = 0; i < SIMS.length; i++) if (SIMS[i].id === id) return SIMS[i]; return null; }
  function simBlock(m, full) {
    return '<div class="sim-embed' + (full ? ' full' : '') + '" id="sim-' + m.id + '" style="--c:' + COLORS[m.s] + '">' +
      (full ? '' : '<div class="sim-head"><span class="sim-badge">' + icon('sparkles') + '</span><span class="sim-name"><small>Try it yourself</small><b>' + m.t + '</b></span>' +
        '<a href="#/lab/' + m.id + '">Open in Lab ' + icon('arrow-right') + '</a></div>') +
      '<div class="sim-mount" data-sim="' + m.id + '"><p class="sim-loading">' + icon('sparkles') + ' Loading simulation…</p></div></div>';
  }
  var simLib = { state: '', queue: [] }, simIO = null;
  function loadSims(done) {
    if (simLib.state === 'ready') return done();
    simLib.queue.push(done);
    if (simLib.state === 'loading') return;
    simLib.state = 'loading';
    var sc = document.createElement('script');
    sc.src = 'js/sims.js';
    sc.onload = function () { simLib.state = 'ready'; var q = simLib.queue; simLib.queue = []; q.forEach(function (f) { f(); }); };
    sc.onerror = function () { simLib.state = ''; simLib.queue = []; };
    document.head.appendChild(sc);
  }
  function mountSims(root) {
    var els = root.querySelectorAll('.sim-mount:not([data-on])');
    if (!els.length) return;
    function start(el) {
      el.setAttribute('data-on', '1');
      loadSims(function () {
        var id = el.getAttribute('data-sim'), f = JEE.sims && JEE.sims[id];
        el.innerHTML = '';
        if (!f) { el.innerHTML = '<p class="sim-loading">This simulation could not be loaded.</p>'; return; }
        f(el, { icon: icon, renderMath: renderMath, touched: function () { if (JEE.fx) JEE.fx.reward('sim', { id: id }); } });
      });
    }
    if (!('IntersectionObserver' in window)) { els.forEach(start); return; }
    if (!simIO) simIO = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { simIO.unobserve(e.target); start(e.target); } });
    }, { rootMargin: '300px 0px' });
    els.forEach(function (el) { simIO.observe(el); });
  }
  function simChapter(m) { var a = m.at[0][0].split('/'), f = findChapter(a[0], a[1]); return { s: a[0], id: a[1], ch: f && f.ch }; }
  function labView(id) {
    if (id) {
      var m = simById(id);
      if (!m) return notFound();
      var c = simChapter(m), k = SIMS.indexOf(m), prev = SIMS[(k + SIMS.length - 1) % SIMS.length], next = SIMS[(k + 1) % SIMS.length];
      return '<div class="crumbs"><a href="#/">Home</a> › <a href="#/lab">Lab</a> › ' + m.t + '</div>' +
        '<div class="lab-title" style="--c:' + COLORS[m.s] + '"><span class="topic-icon big">' + icon(m.icon) + '</span><div><span class="ch-kicker">' + JEE[m.s].name + ' · Interactive</span><h1>' + m.t + '</h1></div></div>' +
        '<p class="lab-lead">' + m.d + '</p>' + simBlock(m, true) +
        '<div class="card lab-try" style="--c:' + COLORS[m.s] + '"><h3>' + icon('lightbulb') + ' Things to try</h3><ol>' +
          m.tries.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ol>' +
          (c.ch ? '<a class="btn" href="#/s/' + c.s + '/' + c.id + '/theory" data-goto="sim-' + m.id + '">' + icon('book-open') + ' Read the theory: ' + esc(c.ch.title) + '</a>' : '') + '</div>' +
        '<div class="pager"><a class="btn" href="#/lab/' + prev.id + '">← ' + prev.t + '</a><a class="btn" href="#/lab/' + next.id + '">' + next.t + ' →</a></div>';
    }
    return '<div class="crumbs"><a href="#/">Home</a> › Lab</div><h1>Interactive Lab</h1>' +
      '<p class="lab-lead">' + SIMS.length + ' live simulations. Drag, slide and play: every number on screen comes from the same formulas you use in the exam. Each one also sits inside its chapter.</p>' +
      SUBJECTS.map(function (s) {
        var list = SIMS.filter(function (m) { return m.s === s; });
        return '<section class="lab-group" style="--c:' + COLORS[s] + '"><h2>' + icon(SUBJECT_ICONS[s][0]) + JEE[s].name + '</h2><div class="lab-grid">' +
          list.map(function (m) {
            var c = simChapter(m), seen = JEE.fx && JEE.fx.stats.simSeen[m.id];
            return '<a class="sim-card" href="#/lab/' + m.id + '"><span class="topic-icon">' + icon(m.icon) + '</span><b>' + m.t + (seen ? icon('check', 'ico seen') : '') + '</b>' +
              '<small>' + m.d + '</small><span class="sim-ch">' + (c.ch ? esc(c.ch.title) : '') + '</span></a>';
          }).join('') + '</div></section>';
      }).join('');
  }

  // ---------- home: hero, problem of the day ----------
  function greeting() {
    var h = new Date().getHours();
    return h < 5 ? 'Burning the midnight oil' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  }
  var GLYPHS = ['F = ma', '∫ f(x) dx', 'Σ', 'π', 'E = mc²', 'H₂O', 'λ', 'ΔG = ΔH − TΔS', 'sin²θ + cos²θ = 1', 'PV = nRT', '∞', 'dy/dx', 'CH₄', 'ħ', '√2', 'ω', 'e^{iπ} + 1 = 0', 'NaCl', 'v = u + at', 'pH', '∇', 'ⁿCᵣ'];
  function heroCard() {
    var fx = JEE.fx, L = fx ? fx.levelInfo() : null, st = fx ? fx.dayStreak() : 0;
    var last = load('jee-last', null), lastF = last && JEE[last.s] && findChapter(last.s, last.id);
    var n = { topics: 0, f: 0, ch: 0 };
    SUBJECTS.forEach(function (s) { JEE[s].chapters.forEach(function (c) { n.ch++; n.topics += outlineCount(s, c.id).topics + outlineCount(s, c.id).subs; n.f += c.formulas.length; }); });
    var glyphs = GLYPHS.map(function (g, i) {
      var x = (i * 37 + 11) % 100, y = (i * 53 + 7) % 92, size = .8 + (i * 7 % 5) * .18;
      return '<span style="left:' + x + '%;top:' + y + '%;font-size:' + size.toFixed(2) + 'rem;--dur:' + (14 + (i * 5) % 11) + 's;--delay:-' + (i * 1.7).toFixed(1) + 's">' + g + '</span>';
    }).join('');
    return '<section class="hero">' +
      '<div class="hero-glyphs" aria-hidden="true">' + glyphs + '</div>' +
      '<div class="hero-main"><span class="hero-kicker">' + greeting() + (st ? ' · ' + icon('flame') + st + '-day streak' : '') + '</span>' +
        '<h2 class="hero-title">Crack JEE, <span class="grad">one concept at a time.</span></h2>' +
        '<p class="hero-sub"><b data-count="' + n.ch + '">' + n.ch + '</b> chapters · <b data-count="' + n.topics + '">' + n.topics + '</b> topics and subtopics · ' +
          '<b data-count="' + n.f + '">' + n.f + '</b> formulas · <b data-count="' + SIMS.length + '">' + SIMS.length + '</b> live simulations</p>' +
        '<div class="hero-cta">' + (lastF
          ? '<a class="btn primary" href="#/s/' + last.s + '/' + last.id + '/' + (last.tab || 'theory') + '">' + icon('play') + ' Continue: ' + esc(lastF.ch.title) + '</a>'
          : '<a class="btn primary" href="#/s/physics/units-measurement">' + icon('play') + ' Start with Chapter 1</a>') +
          '<a class="btn" href="#/lab">' + icon('sparkles') + ' Interactive Lab</a></div></div>' +
      (L ? '<a class="hero-me" href="#/me" title="Your progress">' + '<span class="hm-ring">' + fx.ring(L.pct, 44, 9) + '<span><small>Level</small><b>' + L.level + '</b></span></span>' +
        '<span class="hm-text"><b>' + L.title + '</b><small>' + L.xp.toLocaleString('en-IN') + ' XP · ' + (L.to - L.xp) + ' XP to level ' + (L.level + 1) + '</small>' +
        '<small>' + icon('target') + fx.stats.correct + ' solved · ' + icon('flame') + st + ' day streak</small></span></a>' : '') +
      '</section>';
  }
  function dailyPick() {
    var all = [];
    SUBJECTS.forEach(function (s) { JEE[s].chapters.forEach(function (c) { c.examples.forEach(function (e) { all.push({ s: s, c: c, e: e }); }); }); });
    var day = JEE.fx ? JEE.fx.dayKey() : new Date().toDateString();
    return { p: all[parseInt(hashText('daily ' + day), 36) % all.length], day: day };
  }
  function dailyCard() {
    var d = dailyPick(), p = d.p, solved = JEE.fx && JEE.fx.stats.got['daily:' + d.day];
    return '<section class="daily card glass" style="--c:' + COLORS[p.s] + '">' +
      '<div class="daily-head"><span class="daily-badge">' + icon('lightbulb') + ' Problem of the day</span>' + levelBadge(p.e.level === 'Advanced' ? 3 : 2) +
        '<span class="ex-topic">' + JEE[p.s].name + ' · ' + esc(p.c.title) + '</span></div>' +
      '<div class="q">' + p.e.q + '</div>' +
      '<details class="stepper" data-daily="1"><summary>Think it through, then reveal the solution step by step</summary><ol class="steps">' +
        p.e.steps.map(function (st, k) { return '<li style="--i:' + k + '">' + st + '</li>'; }).join('') + '</ol>' +
        '<div class="ans"><b>Answer:</b> ' + p.e.ans + '</div></details>' +
      '<p class="daily-foot">' + (solved ? icon('circle-check') + ' Done for today. A new problem appears tomorrow.' : icon('sparkles') + ' +15 XP when you reach the answer.') +
        ' <a href="#/s/' + p.s + '/' + p.c.id + '/examples/' + Math.max(0, p.c.syllabus.indexOf(p.e.topic)) + '">More like this →</a></p></section>';
  }

  // Step-by-step solutions: opening one shows the first step; "Next step" reveals the rest one at a time.
  function bindSteppers(root) {
    root.querySelectorAll('details.stepper:not([data-bound])').forEach(function (d) {
      d.setAttribute('data-bound', '1');
      d.addEventListener('toggle', function () {
        if (!d.open || d.getAttribute('data-ready')) return;
        d.setAttribute('data-ready', '1');
        var lis = d.querySelectorAll('.steps > li'), ans = d.querySelector('.ans'), shown = 1;
        function finish(ev) {
          if (!d.getAttribute('data-daily') || !JEE.fx) return;
          var r = (ev && ev.clientX) ? { x: ev.clientX, y: ev.clientY } : { x: innerWidth / 2, y: innerHeight / 2 };
          if (JEE.fx.reward('daily', r)) JEE.fx.confetti(r.x, r.y, { n: 40 });
        }
        if (lis.length < 2) { finish(); return; }
        lis.forEach(function (li, k) { if (k) li.hidden = true; li.style.setProperty('--d', 0); });
        if (ans) ans.hidden = true;
        var ctl = document.createElement('div');
        ctl.className = 'step-ctl';
        function label() { ctl.innerHTML = '<button type="button" class="btn primary step-next">' + icon('play') + ' Next step <small>' + (shown + 1) + ' of ' + lis.length + '</small></button>' +
          '<button type="button" class="btn step-all">Show the full solution</button>'; }
        label();
        d.appendChild(ctl);
        ctl.addEventListener('click', function (e) {
          var b = e.target.closest('button');
          if (!b) return;
          var upto = b.classList.contains('step-all') ? lis.length : shown + 1, k0 = shown;
          for (var k = shown; k < upto; k++) { lis[k].style.setProperty('--d', k - k0); lis[k].hidden = false; }
          shown = upto;
          if (shown >= lis.length) {
            if (ans) { ans.style.setProperty('--d', upto - k0); ans.hidden = false; }
            ctl.remove();
            finish(e);
          } else label();
        });
      });
    });
  }

  // ---------- progress page (#/me) ----------
  function meView() {
    var fx = JEE.fx;
    if (!fx) return notFound();
    var S = fx.stats, L = fx.levelInfo(), st = fx.dayStreak(), acc = S.answered ? Math.round(100 * S.correct / S.answered) : 0;
    var nDone = Object.keys(done).length, unlocked = fx.achievements.filter(function (a) { return S.ach[a.id]; }).length;
    var tiles = [['target', S.correct, 'questions answered correctly'], ['activity', acc, '% accuracy', '%'], ['flame', st, 'day streak'],
      ['zap', S.bestRun, 'best run of correct answers'], ['layers', S.cards, 'flashcards known'], ['circle-check', nDone, 'chapters completed']];
    // Activity over the last 18 weeks, one square per day (Monday at the top).
    var today = new Date(), start = new Date(today), cells = '', weeks = 18;
    start.setDate(start.getDate() - ((today.getDay() + 6) % 7) - 7 * (weeks - 1));
    for (var i = 0; i < weeks * 7; i++) {
      var d = new Date(start); d.setDate(start.getDate() + i);
      var k = fx.dayKey(d), v = S.days[k] || 0, lv = v === 0 ? 0 : v < 5 ? 1 : v < 15 ? 2 : v < 30 ? 3 : 4;
      cells += d > today ? '<i class="hm-x"></i>' : '<i class="hm-' + lv + '" title="' + k + ': ' + v + ' action' + (v === 1 ? '' : 's') + '"></i>';
    }
    return '<div class="crumbs"><a href="#/">Home</a> › Your progress</div><h1>Your progress</h1>' +
      '<section class="me-hero card glass"><span class="hm-ring big">' + fx.ring(L.pct, 58, 12) + '<span><small>Level</small><b>' + L.level + '</b></span></span>' +
        '<div class="me-lvl"><span class="ch-kicker">' + L.title + '</span><h2><b data-count="' + L.xp + '">' + L.xp + '</b> XP</h2>' +
        '<div class="progress"><div style="width:' + L.pct + '%"></div></div><small>' + (L.to - L.xp) + ' XP to level ' + (L.level + 1) + ' (' + (fx.titles[Math.min(L.level + 1, fx.titles.length) - 1]) + ')</small>' +
        '<p class="me-how">Earn XP: correct answers (+10 / +15 / +25 by level), flashcards you know (+3), chapters done (+50), a perfect chapter (+100), the daily problem (+15), each new simulation (+5) and +20 for every day you study.</p></div></section>' +
      '<div class="tiles">' + tiles.map(function (t) {
        return '<div class="tile"><span class="tile-ico">' + icon(t[0]) + '</span><b data-count="' + t[1] + '"' + (t[3] ? ' data-suffix="' + t[3] + '"' : '') + '>' + t[1] + (t[3] || '') + '</b><small>' + t[2].replace(/^% /, '') + '</small></div>';
      }).join('') + '</div>' +
      '<h2>' + icon('calendar') + ' Study calendar</h2><div class="card heat-card"><div class="heat">' + cells + '</div>' +
        '<p class="heat-key">Less <i class="hm-0"></i><i class="hm-1"></i><i class="hm-2"></i><i class="hm-3"></i><i class="hm-4"></i> More · best run ' + S.bestRun + ' · ' + Object.keys(S.days).length + ' study days</p></div>' +
      '<h2>' + icon('trophy') + ' Achievements <small class="me-count">' + unlocked + ' / ' + fx.achievements.length + '</small></h2><div class="ach-grid">' +
        fx.achievements.map(function (a) {
          var got = S.ach[a.id];
          return '<div class="ach' + (got ? ' got' : '') + '"><span class="ach-ico">' + icon(got ? a.icon : 'lock') + '</span><b>' + a.t + '</b><small>' + a.d + '</small>' +
            (got ? '<span class="ach-date">' + got + '</span>' : '') + '</div>';
        }).join('') + '</div>' +
      '<h2>' + icon('book-open') + ' Subjects</h2><div class="me-subjects">' + SUBJECTS.map(function (s) {
        var p = subjectProgress(s);
        return '<div class="card me-subj" style="--c:' + COLORS[s] + '"><b>' + icon(SUBJECT_ICONS[s][0]) + JEE[s].name + '</b>' +
          '<div class="progress"><div style="width:' + p.pct + '%"></div></div><small>' + p.n + ' / ' + p.total + ' chapters done · ' + (S.subj[s] || 0) + ' questions attempted</small></div>';
      }).join('') + '</div>' +
      '<p class="me-note">Your progress is saved in this browser only. <button type="button" class="btn me-reset" data-reset-all>' + icon('rotate-ccw') + ' Reset everything</button></p>';
  }

  function bindViews() {
    bindSteppers(app);
    mountSims(app);
    var r = app.querySelector('[data-reset-all]');
    if (r) r.addEventListener('click', function () {
      if (!confirm('Reset all your progress: XP, streaks, achievements, practice answers, flashcards and completed chapters?')) return;
      ['jee-stats', 'jee-practice', 'jee-cards', 'jee-done', 'jee-last'].forEach(function (k) { try { localStorage.removeItem(k); } catch (e) {} });
      location.hash = '#/';
      location.reload();
    });
  }

  // ---------- router ----------
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var isChapter = parts[0] === 's' && JEE[parts[1]] && parts[2];

    // Chapter pages need their lesson file first; show a short loading state and come back here.
    if (isChapter && findChapter(parts[1], parts[2]) && !lessonReady(parts[1], parts[2])) {
      app.innerHTML = '<p class="loading">Loading chapter…</p>';
      loadLesson(parts[1], parts[2], route);
      return;
    }

    var html;
    if (parts.length === 0) html = homeView();
    else if (parts[0] === 'syllabus') html = syllabusView();
    else if (parts[0] === 'lab') html = labView(parts[1]);
    else if (parts[0] === 'me') html = meView();
    else if (parts[0] === 'search') {
      var q = '';
      try { q = decodeURIComponent(parts.slice(1).join('/')); } catch (e) { q = parts.slice(1).join('/'); }
      html = searchView(q);
    }
    else if (parts[0] === 's' && JEE[parts[1]] && !parts[2]) html = subjectView(parts[1]);
    else if (isChapter) html = chapterView(parts[1], parts[2], parts[3], parts[4] === undefined ? -1 : +parts[4]);
    else html = notFound();

    app.innerHTML = html;
    app.classList.remove('page-in'); void app.offsetWidth; app.classList.add('page-in');
    app.classList.toggle('wide', parts.length === 0);
    app.classList.toggle('with-side', !!app.querySelector('.ch-side'));
    document.body.classList.remove('side-open');
    renderMath(app);

    var focus = document.getElementById('focus'), pend = pendingGoto && document.getElementById(pendingGoto);
    pendingGoto = null;
    reviseKey = null;
    if (pend) {
      if (!pend.classList.contains('book-sec')) pend.classList.add('flash');
      pend.scrollIntoView({ block: 'start' });
    } else if (focus) {
      focus.classList.add('flash');
      focus.scrollIntoView({ block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }

    var title = 'jee.yatharth.org · JEE Study Hub';
    var h1 = app.querySelector('h1');
    if (parts.length && h1) title = h1.textContent + ' · jee.yatharth.org';
    document.title = title;

    // Highlight the menu link for the current section.
    var section = parts.length === 0 ? '#/' : '#/' + parts.slice(0, parts[0] === 's' ? 2 : 1).join('/');
    document.querySelectorAll('.topbar nav a').forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === section);
    });

    bindSearch();
    bindViews(parts);
    // Sliding highlight under the chapter tabs: start at the previous tab and glide to the new one.
    var tabs = app.querySelector('.tabs');
    if (tabs) {
      var ti = +tabs.getAttribute('data-i'), here = parts[1] + '/' + parts[2];
      if (lastTab && lastTab.k === here && lastTab.i !== ti && !(JEE.fx && JEE.fx.calm())) {
        tabs.style.setProperty('--i', lastTab.i);
        void tabs.offsetWidth;
        tabs.classList.add('slide');
        tabs.style.setProperty('--i', ti);
      }
      lastTab = { k: here, i: ti };
      save('jee-last', { s: parts[1], id: parts[2], tab: TABS[ti] ? TABS[ti].id : 'theory', t: Date.now() });
    } else lastTab = null;
    readBar.hidden = !app.querySelector('.book-sec');
    onScroll();
    if (JEE.fx) { JEE.fx.resetReveal(); JEE.fx.reveal(app); JEE.fx.countUp(app); JEE.fx.updateBadge(); }
    var btn = document.getElementById('done-btn');
    if (btn) btn.addEventListener('click', function () {
      toggleDone(parts[1], parts[2]);
      var nowDone = isDone(parts[1], parts[2]);
      if (JEE.fx) {
        JEE.fx.reward('chapter', { key: parts[1] + '/' + parts[2], done: nowDone });
        if (nowDone) {
          JEE.fx.confetti(0, 0, { rain: true, n: 160 });
          JEE.fx.toast(icon('circle-check') + '<b>Chapter complete!</b> +50 XP. On to the next one.', 'level', 4000);
        }
      }
      route();
    });
    if (isChapter && app.querySelector('.ch-side')) {
      bindChapter(parts[1], parts[2]);
      // Scroll the chapter list (not the page) so the open chapter is in view.
      var side = document.getElementById('ch-side'), act = side.querySelector('.side-ch.active');
      if (act) side.scrollTop = Math.max(0, act.offsetTop - side.clientHeight / 3);
    }
  }

  var lastTab = null;
  // Reading progress of a book chapter: a thin bar under the top bar.
  var readBar = document.createElement('div');
  readBar.className = 'read-progress';
  readBar.hidden = true;
  readBar.innerHTML = '<div></div>';
  document.body.appendChild(readBar);
  var scrollRaf = 0;
  function onScroll() {
    if (readBar.hidden || scrollRaf) return;
    scrollRaf = requestAnimationFrame(function () {
      scrollRaf = 0;
      var main = app.querySelector('.ch-main') || app, r = main.getBoundingClientRect();
      var k = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - innerHeight)));
      readBar.firstChild.style.transform = 'scaleX(' + k.toFixed(4) + ')';
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // The chapter tab bar sticks just below the top bar, whose height changes when the menu wraps on phones.
  function measureTopbar() {
    document.documentElement.style.setProperty('--topbar-h', document.querySelector('.topbar').offsetHeight + 'px');
  }
  window.addEventListener('resize', measureTopbar);
  measureTopbar();

  document.getElementById('theme-btn').addEventListener('click', function (e) {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    function flip() {
      root.dataset.theme = dark ? 'light' : 'dark';
      try { localStorage.setItem('jee-theme', root.dataset.theme); } catch (err) {}
      drawMolecules(app);
      window.dispatchEvent(new Event('jee-theme'));
    }
    if (document.startViewTransition && !(JEE.fx && JEE.fx.calm())) {
      var r = e.currentTarget.getBoundingClientRect();
      root.style.setProperty('--vt-x', (r.left + r.width / 2) + 'px');
      root.style.setProperty('--vt-y', (r.top + r.height / 2) + 'px');
      document.startViewTransition(flip);
    } else flip();
  });
  try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { drawMolecules(app); }); } catch (e) {}

  // Printing a book chapter: open every collapsed derivation and answer so they appear on paper.
  window.addEventListener('beforeprint', function () {
    app.querySelectorAll('details:not([open])').forEach(function (d) { d.open = true; d.setAttribute('data-print-opened', ''); });
    app.querySelectorAll('.stepper [hidden]').forEach(function (h) { h.hidden = false; });
  });
  window.addEventListener('afterprint', function () {
    app.querySelectorAll('details[data-print-opened]').forEach(function (d) { d.open = false; d.removeAttribute('data-print-opened'); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setSide(false);
    var t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable);
    if (typing || e.ctrlKey || e.metaKey || e.altKey) return;
    // "/" opens search from anywhere; the Revise tab has its own keys.
    if (e.key === '/') {
      e.preventDefault();
      var box = document.getElementById('search');
      if (box) box.focus(); else location.hash = '#/search';
    } else if (reviseKey && document.getElementById('revise') && !(t && t.closest && t.closest('summary, a, .ch-side'))) {
      if (e.key === ' ' || e.key === 'Enter') { if (t && t.tagName === 'BUTTON') return; }
      reviseKey(e);
    }
  });

  // Links to a book section (contents card, syllabus topics, chapter index): scroll if the section is on this
  // page, otherwise let the link open the Theory tab and scroll there once it has rendered.
  var pendingGoto = null;
  app.addEventListener('click', function (e) {
    var a = e.target.closest('[data-goto]');
    if (!a) return;
    var el = document.getElementById(a.getAttribute('data-goto'));
    setSide(false);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    else if (a.getAttribute('href')) pendingGoto = a.getAttribute('data-goto');
  });
  app.addEventListener('click', function (e) {
    var b = e.target.closest('[data-syl]');
    if (b) app.querySelectorAll('.syl-ch').forEach(function (d) { d.open = b.getAttribute('data-syl') === 'open'; });
  });
  // Chapter index: fill in a chapter's topics and subtopics the first time it is opened.
  app.addEventListener('toggle', function (e) {
    var d = e.target;
    if (!d.classList || !d.classList.contains('side-chd') || !d.open || d.querySelector('.ol-topics')) return;
    var f = findChapter(d.getAttribute('data-s'), d.getAttribute('data-id'));
    if (f) { d.insertAdjacentHTML('beforeend', outlineList(d.getAttribute('data-s'), f.ch, 'side-ol')); renderMath(d); }
  }, true);

  window.addEventListener('hashchange', route);
  route();
})();
