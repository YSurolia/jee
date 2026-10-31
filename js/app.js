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

  // ---------- views ----------
  function homeView() {
    var cards = SUBJECTS.map(function (s) {
      var sub = JEE[s], p = subjectProgress(s);
      return '<a class="card subject-card" style="--c:' + COLORS[s] + '" href="#/s/' + s + '">' +
        '<h3>' + sub.name + '</h3>' +
        '<p>' + sub.chapters.length + ' chapters · ' + esc(sub.tagline) + '</p>' +
        '<div class="progress"><div style="width:' + p.pct + '%"></div></div>' +
        '<div class="progress-label">' + p.n + ' / ' + p.total + ' chapters completed</div></a>';
    }).join('');

    return '' +
      '<section class="hero">' +
        '<h1>Study for JEE Main &amp; Advanced, chapter by chapter</h1>' +
        '<p>Every chapter of Physics, Chemistry and Mathematics, with its syllabus topics, key concepts, a formula sheet, ' +
        'at least one solved example for every syllabus topic (worked step by step), and practice questions. ' +
        'Mark chapters as done to track your progress.</p>' +
        '<input id="search" class="search" type="search" placeholder="Search a chapter or topic, e.g. projectile, Nernst, binomial…" autocomplete="off">' +
        '<div id="results" class="results"></div>' +
      '</section>' +
      '<h2>Subjects</h2><div class="grid">' + cards + '</div>' +
      '<h2>Exam at a glance</h2>' +
      '<div class="card table-wrap"><table class="pattern">' +
        '<tr><th></th><th>JEE Main (Paper 1)</th><th>JEE Advanced</th></tr>' +
        '<tr><td><b>Conducted by</b></td><td>NTA, twice a year (January &amp; April sessions)</td><td>One of the IITs, once a year</td></tr>' +
        '<tr><td><b>Eligibility</b></td><td>Class 12 with PCM</td><td>Top ~2.5 lakh JEE Main qualifiers</td></tr>' +
        '<tr><td><b>Pattern</b></td><td>75 questions (25 per subject): MCQs + numerical-value answers. +4 / −1.</td><td>Two 3-hour papers. MCQs (single and multiple correct), numerical and matching types. The marking scheme changes each year.</td></tr>' +
        '<tr><td><b>Leads to</b></td><td>NITs, IIITs, GFTIs, and qualifying for JEE Advanced</td><td>IITs</td></tr>' +
      '</table></div>' +
      '<p style="color:var(--muted);font-size:.9rem">Pattern details can change. Check the official information bulletin each year.</p>';
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
          '<small>' + o.c.examples.length + ' solved · ' + o.c.practice.length + ' practice</small></a>';
      }).join('');
    }

    return '<div class="crumbs"><a href="#/">Home</a> › ' + sub.name + '</div>' +
      '<h1 style="color:' + COLORS[s] + '">' + sub.name + '</h1>' +
      '<div style="--c:' + COLORS[s] + ';max-width:360px"><div class="progress"><div style="width:' + p.pct + '%"></div></div>' +
      '<div class="progress-label">' + p.n + ' / ' + p.total + ' chapters completed</div></div>' +
      '<h2>Class 11</h2><div class="chapter-list">' + rows(groups[11]) + '</div>' +
      '<h2>Class 12</h2><div class="chapter-list">' + rows(groups[12]) + '</div>';
  }

  function chapterView(s, id) {
    var found = findChapter(s, id);
    if (!found) return notFound();
    var sub = JEE[s], ch = found.ch, i = found.i;
    var prev = sub.chapters[i - 1], next = sub.chapters[i + 1];
    var d = isDone(s, id);

    var concepts = ch.concepts.map(function (c) {
      return '<div class="card concept"><h3>' + c.h + '</h3><p>' + c.body + '</p></div>';
    }).join('');

    var formulas = ch.formulas.map(function (f) { return '<div class="formula">' + f + '</div>'; }).join('');

    // Group solved examples under their syllabus topic, in syllabus order; numbering runs across the chapter.
    var n = 0;
    var examples = ch.syllabus.map(function (topic, t) {
      var list = ch.examples.filter(function (ex) { return ex.topic === topic; });
      if (!list.length) return '';
      return '<h3 class="topic-head" id="topic-' + t + '">' + topic + '</h3>' + list.map(function (ex) {
        n++;
        var lvl = ex.level === 'Advanced' ? '<span class="badge adv">Advanced level</span>' : '<span class="badge">Main level</span>';
        return '<div class="card example"><div class="q"><b>Example ' + n + '.</b> ' + lvl + '<br>' + ex.q + '</div>' +
          '<details><summary>Show solution</summary><ol class="steps">' +
          ex.steps.map(function (st) { return '<li>' + st + '</li>'; }).join('') +
          '</ol><div class="ans"><b>Answer:</b> ' + ex.ans + '</div></details></div>';
      }).join('');
    }).join('');

    var practice = ch.practice.map(function (pr, n) {
      return '<div class="card example"><div class="q"><b>Q' + (n + 1) + '.</b> ' + pr.q + '</div>' +
        '<details><summary>Show answer</summary><div class="ans">' + pr.ans + '</div></details></div>';
    }).join('');

    return '<div class="crumbs"><a href="#/">Home</a> › <a href="#/s/' + s + '">' + sub.name + '</a> › Chapter ' + (i + 1) + '</div>' +
      '<h1>' + esc(ch.title) + '</h1>' +
      '<span class="badge">Class ' + ch.cls + '</span> <span class="badge">' + sub.name + '</span>' +
      '<h2>Syllabus topics</h2><p class="hint">Tap a topic to jump to its solved example.</p><ul class="topics">' +
      ch.syllabus.map(function (t, k) { return '<li><a href="#" data-jump="topic-' + k + '">' + t + '</a></li>'; }).join('') + '</ul>' +
      '<h2>Key concepts</h2>' + concepts +
      '<h2>Formula sheet</h2><div class="formulas">' + formulas + '</div>' +
      '<h2>Solved examples</h2>' + examples +
      '<h2>Practice questions</h2>' + practice +
      '<p><button id="done-btn" class="btn ' + (d ? 'done' : 'primary') + '">' + (d ? '✓ Completed (click to undo)' : 'Mark chapter as done') + '</button></p>' +
      '<div class="pager">' +
        (prev ? '<a class="btn" href="#/s/' + s + '/' + prev.id + '">← ' + esc(prev.title) + '</a>' : '<span></span>') +
        (next ? '<a class="btn" href="#/s/' + s + '/' + next.id + '">' + esc(next.title) + ' →</a>' : '<span></span>') +
      '</div>';
  }

  function syllabusView() {
    var body = SUBJECTS.map(function (s) {
      var sub = JEE[s];
      return '<div class="syl-subject"><h2 style="color:' + COLORS[s] + '">' + sub.name + '</h2>' +
        sub.chapters.map(function (c, i) {
          return '<div class="syl-chapter"><strong><a href="#/s/' + s + '/' + c.id + '">' + (i + 1) + '. ' + esc(c.title) + '</a> ' +
            '<span class="badge">Class ' + c.cls + '</span></strong><span>' + c.syllabus.join(' · ') + '</span></div>';
        }).join('') + '</div>';
    }).join('');
    return '<div class="crumbs"><a href="#/">Home</a> › Syllabus</div>' +
      '<h1>Full syllabus</h1>' +
      '<p style="color:var(--muted)">These are the JEE Main units (20 Physics, 20 Chemistry, 14 Mathematics), which together cover almost all of JEE Advanced as well. ' +
      'JEE Advanced asks deeper, multi-concept questions on the same chapters. For the exact official wording, download the PDFs from ' +
      '<a href="https://jeemain.nta.nic.in" target="_blank" rel="noopener">jeemain.nta.nic.in</a> and ' +
      '<a href="https://jeeadv.ac.in" target="_blank" rel="noopener">jeeadv.ac.in</a>.</p>' + body;
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
    var html;
    if (parts.length === 0) html = homeView();
    else if (parts[0] === 'syllabus') html = syllabusView();
    else if (parts[0] === 's' && JEE[parts[1]] && !parts[2]) html = subjectView(parts[1]);
    else if (parts[0] === 's' && JEE[parts[1]] && parts[2]) html = chapterView(parts[1], parts[2]);
    else html = notFound();

    app.innerHTML = html;
    renderMath(app);
    window.scrollTo(0, 0);

    var title = 'JEE Study Hub';
    var h1 = app.querySelector('h1');
    if (parts.length && h1) title = h1.textContent + ' · ' + title;
    document.title = title;

    bindSearch();
    var btn = document.getElementById('done-btn');
    if (btn) btn.addEventListener('click', function () { toggleDone(parts[1], parts[2]); route(); });
    // Topic chips scroll within the page; a real #anchor would be read as a route by the hash router.
    app.querySelectorAll('[data-jump]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById(a.getAttribute('data-jump'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  document.getElementById('theme-btn').addEventListener('click', function () {
    var root = document.documentElement;
    var dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = dark ? 'light' : 'dark';
    try { localStorage.setItem('jee-theme', root.dataset.theme); } catch (e) {}
  });

  window.addEventListener('hashchange', route);
  route();
})();
