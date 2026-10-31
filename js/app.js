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

    return '<h1 class="sr-only">JEE Main and Advanced: Physics, Chemistry and Mathematics</h1>' +
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
    { id: 'formulas', label: 'Formulas', icon: 'sigma' }
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
    var learn = syllabusCard(s, ch, book);
    var secs = book.sections.map(function (sec, k) {
      return '<article class="card theory book-sec" id="sec-' + (k + 1) + '">' +
        '<h2><span class="theory-num">' + chNo + '.' + (k + 1) + '</span>' + sec.h + '</h2>' +
        sec.blocks.map(function (b) { return bookBlock(b, figNo); }).join('') + '</article>';
    }).join('');
    var summary = '<article class="card summary-card book-sec" id="sec-summary"><h2 class="tab-title" style="margin-top:0">Chapter at a glance</h2><ul>' +
      book.summary.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul></article>';
    return intro + toc + learn + secs + summary;
  }

  function theoryTab(s, ch, lesson, book, chNo) {
    if (book) {
      return bookView(s, ch, book, chNo) + '<h2 class="tab-title">Quick revision</h2>' +
        ch.concepts.map(function (c) { return '<div class="card concept"><h3>' + c.h + '</h3><p>' + c.body + '</p></div>'; }).join('');
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

    var revision = '<h2 class="tab-title">' + (sections ? 'Quick revision' : 'Key concepts') + '</h2>' +
      ch.concepts.map(function (c) { return '<div class="card concept"><h3>' + c.h + '</h3><p>' + c.body + '</p></div>'; }).join('');

    return learn + sections + revision;
  }

  function examplesTab(ch, lesson, focusTopic) {
    var list = chapterExamples(ch, lesson);
    return levelFilter(countLevels(list)) + '<div class="ex-list">' + list.map(function (ex, n) {
      var t = ch.syllabus.indexOf(ex.topic);
      return '<div class="card example" data-level="' + ex.level + '" data-topic="' + t + '"' +
        (focusTopic >= 0 && t === focusTopic && list.findIndex(function (e) { return e.topic === ex.topic; }) === n ? ' id="focus"' : '') + '>' +
        '<div class="ex-meta"><b>Example ' + (n + 1) + '</b>' + levelBadge(ex.level) + '<span class="ex-topic">' + ex.topic + '</span></div>' +
        '<div class="q">' + ex.q + '</div>' +
        '<details><summary>Show solution</summary><ol class="steps">' +
        ex.steps.map(function (st) { return '<li>' + st + '</li>'; }).join('') +
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
      return '<div class="card example"><div class="q"><b>Q' + (n + 1) + '.</b> ' + pr.q + '</div>' +
        '<details><summary>Show answer</summary><div class="ans">' + pr.ans + '</div></details></div>';
    }).join('');
  }

  function formulasTab(ch) {
    return '<div class="formulas">' + ch.formulas.map(function (f) { return '<div class="formula">' + f + '</div>'; }).join('') + '</div>';
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
      '<nav class="tabs" style="--c:' + COLORS[s] + '">' + TABS.map(function (t) {
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
    function record(qi, v, ok) {
      answers[key] = answers[key] || {};
      answers[key][qi] = { v: v, ok: ok };
      save('jee-practice', answers);
      var card = list.querySelector('[data-qi="' + qi + '"]');
      var fresh = document.createElement('div');
      fresh.innerHTML = practiceQuestion(lesson.practice[qi], qi, answers[key][qi]);
      fresh = fresh.firstChild;
      fresh.hidden = card.hidden;
      card.replaceWith(fresh);
      renderMath(fresh);
      var scoreEl = document.getElementById('score');
      scoreEl.innerHTML = scoreBar(practiceScore(s, id, lesson));
      bindReset();
    }
    list.addEventListener('click', function (e) {
      var card = e.target.closest('.pq');
      if (!card) return;
      var qi = +card.getAttribute('data-qi'), q = lesson.practice[qi];
      var opt = e.target.closest('.opt');
      if (opt && !opt.disabled) record(qi, +opt.getAttribute('data-opt'), +opt.getAttribute('data-opt') === q.correct);
      if (e.target.closest('.num-check')) {
        var input = card.querySelector('.num-input'), raw = input.value.trim().replace(/,/g, '');
        var v = parseFloat(raw);
        if (raw === '' || isNaN(v)) { input.focus(); input.classList.add('shake'); return; }
        record(qi, raw, Math.abs(v - q.answer) <= q.tol);
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

  // ---------- search ----------
  var index = null;
  function buildIndex() {
    index = [];
    SUBJECTS.forEach(function (s) {
      JEE[s].chapters.forEach(function (c) {
        var text = [c.title].concat(c.syllabus, c.concepts.map(function (k) { return k.h; })).map(strip).join(' ').toLowerCase();
        index.push({ s: s, c: c, text: text });
      });
    });
  }
  function bindSearch() {
    var input = document.getElementById('search'), out = document.getElementById('results');
    if (!input) return;
    input.addEventListener('input', function () {
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { out.innerHTML = ''; return; }
      if (!index) buildIndex();
      var words = q.split(/\s+/);
      var hits = index.filter(function (e) {
        return words.every(function (w) { return e.text.indexOf(w) !== -1; });
      }).slice(0, 10);
      out.innerHTML = hits.length ? hits.map(function (h) {
        var topic = h.c.syllabus.map(strip).filter(function (t) { return t.toLowerCase().indexOf(words[0]) !== -1; })[0];
        return '<a href="#/s/' + h.s + '/' + h.c.id + '">' + esc(h.c.title) + ' <small>· ' + JEE[h.s].name +
          (topic ? ' · ' + esc(topic) : '') + '</small></a>';
      }).join('') : '<p style="color:var(--muted)">No chapters found.</p>';
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
    else if (parts[0] === 's' && JEE[parts[1]] && !parts[2]) html = subjectView(parts[1]);
    else if (isChapter) html = chapterView(parts[1], parts[2], parts[3], parts[4] === undefined ? -1 : +parts[4]);
    else html = notFound();

    app.innerHTML = html;
    app.classList.toggle('wide', parts.length === 0);
    app.classList.toggle('with-side', !!app.querySelector('.ch-side'));
    document.body.classList.remove('side-open');
    renderMath(app);

    var focus = document.getElementById('focus'), pend = pendingGoto && document.getElementById(pendingGoto);
    pendingGoto = null;
    if (pend) {
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
    var btn = document.getElementById('done-btn');
    if (btn) btn.addEventListener('click', function () { toggleDone(parts[1], parts[2]); route(); });
    if (isChapter && app.querySelector('.ch-side')) {
      bindChapter(parts[1], parts[2]);
      // Scroll the chapter list (not the page) so the open chapter is in view.
      var side = document.getElementById('ch-side'), act = side.querySelector('.side-ch.active');
      if (act) side.scrollTop = Math.max(0, act.offsetTop - side.clientHeight / 3);
    }
  }

  // The chapter tab bar sticks just below the top bar, whose height changes when the menu wraps on phones.
  function measureTopbar() {
    document.documentElement.style.setProperty('--topbar-h', document.querySelector('.topbar').offsetHeight + 'px');
  }
  window.addEventListener('resize', measureTopbar);
  measureTopbar();

  document.getElementById('theme-btn').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('jee-theme', root.dataset.theme); } catch (e) {}
  });

  // Printing a book chapter: open every collapsed derivation and answer so they appear on paper.
  window.addEventListener('beforeprint', function () {
    app.querySelectorAll('details:not([open])').forEach(function (d) { d.open = true; d.setAttribute('data-print-opened', ''); });
  });
  window.addEventListener('afterprint', function () {
    app.querySelectorAll('details[data-print-opened]').forEach(function (d) { d.open = false; d.removeAttribute('data-print-opened'); });
  });

  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setSide(false); });

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
