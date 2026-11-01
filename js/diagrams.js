// Diagram helpers for the book chapters (js/book/*). Every helper returns an SVG string, so figures work offline,
// stay sharp at any size and follow the light/dark theme: colours are CSS classes (see .dia in css/style.css).
//
// Colour keys: 'k' ink (default), 'c' subject colour, 'm' muted, 'o' orange, 'b' blue, 'g' green, 'r' red, 'p' purple.
// Common options: { color, w (stroke width), dash (true or '4 3'), fill (colour key, 'soft' tint of color, or 'none'), op }.
// Text labels accept a little markup: v_0, v_{x}, x^2, x^{-1}; *italic* for symbols.
(function () {
  var JEE = window.JEE = window.JEE || {};
  var D = JEE.D = {};

  function n(v) { return Math.round(v * 10) / 10; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function dashOf(o) { return o.dash ? ' stroke-dasharray="' + (o.dash === true ? '5 4' : o.dash) + '"' : ''; }
  function strokeAttrs(o) {
    o = o || {};
    var c = o.color || 'k', cls = 's-' + c, fill = '';
    if (o.fill === 'soft') cls += ' soft-' + c;
    else if (o.fill && o.fill !== 'none') cls += ' f-' + o.fill;
    else fill = ' fill="none"';
    return ' class="' + cls + '"' + fill + ' stroke-width="' + (o.w || 1.8) + '"' + dashOf(o) + (o.op ? ' opacity="' + o.op + '"' : '');
  }

  // Turn label markup into SVG tspans: v_0, v_{max}, x^2, *italic*.
  function rich(s) {
    var out = '', i = 0, shift = 0;
    s = String(s);
    function seg(text, dy, small, italic) {
      var a = '';
      if (dy) a += ' dy="' + dy + 'em"';
      if (small) a += ' font-size="72%"';
      if (italic) a += ' font-style="italic"';
      return a ? '<tspan' + a + '>' + esc(text) + '</tspan>' : esc(text);
    }
    var buf = '', italic = false;
    function flush() { if (buf) { out += seg(buf, shift ? -shift : 0, false, italic); shift = 0; buf = ''; } }
    while (i < s.length) {
      var ch = s[i];
      if ((ch === '_' || ch === '^') && i + 1 < s.length) {
        flush();
        var j = i + 1, txt;
        if (s[j] === '{') { var k = s.indexOf('}', j); txt = s.slice(j + 1, k); i = k + 1; }
        else { txt = s[j]; i = j + 1; }
        var dy = ch === '_' ? 0.32 : -0.42;
        out += seg(txt, dy - shift, true, italic);
        shift = dy;
        continue;
      }
      if (ch === '*') { flush(); italic = !italic; i++; continue; }
      buf += ch; i++;
    }
    flush();
    if (shift) out += '<tspan dy="' + (-shift) + 'em"></tspan>';
    return out;
  }

  // ---------- wrapper ----------
  D.svg = function (w, h, parts, label) {
    return '<svg class="dia" viewBox="0 0 ' + w + ' ' + h + '" width="' + w + '" role="img" aria-label="' + esc(label || 'diagram') + '">' +
      [].concat(parts).join('') + '</svg>';
  };

  // ---------- primitives (pixel coordinates, y grows downward) ----------
  D.line = function (x1, y1, x2, y2, o) {
    return '<line x1="' + n(x1) + '" y1="' + n(y1) + '" x2="' + n(x2) + '" y2="' + n(y2) + '"' + strokeAttrs(o) + ' stroke-linecap="round"/>';
  };
  D.poly = function (pts, o) {
    o = o || {};
    var tag = o.closed ? 'polygon' : 'polyline';
    return '<' + tag + ' points="' + pts.map(function (p) { return n(p[0]) + ',' + n(p[1]); }).join(' ') + '"' + strokeAttrs(o) + ' stroke-linejoin="round" stroke-linecap="round"/>';
  };
  D.path = function (d, o) { return '<path d="' + d + '"' + strokeAttrs(o) + ' stroke-linejoin="round" stroke-linecap="round"/>'; };
  D.circle = function (cx, cy, r, o) { return '<circle cx="' + n(cx) + '" cy="' + n(cy) + '" r="' + n(r) + '"' + strokeAttrs(o) + '/>'; };
  D.ellipse = function (cx, cy, rx, ry, o) { return '<ellipse cx="' + n(cx) + '" cy="' + n(cy) + '" rx="' + n(rx) + '" ry="' + n(ry) + '"' + strokeAttrs(o) + '/>'; };
  D.rect = function (x, y, w, h, o) {
    o = o || {};
    return '<rect x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) + '" height="' + n(h) + '" rx="' + (o.r || 0) + '"' + strokeAttrs(o) + '/>';
  };
  D.dot = function (x, y, o) {
    o = o || {};
    var c = o.color || 'k';
    return '<circle cx="' + n(x) + '" cy="' + n(y) + '" r="' + (o.r || 3.6) + '" class="s-' + c + (o.open ? ' f-bg' : ' f-' + c) + '" stroke-width="1.8"/>';
  };
  D.text = function (x, y, s, o) {
    o = o || {};
    var a = o.anchor || 'middle';
    return '<text x="' + n(x) + '" y="' + n(y) + '" text-anchor="' + (a === 'start' || a === 'end' ? a : 'middle') + '"' +
      ' dominant-baseline="' + (o.base || 'middle') + '" class="t-' + (o.color || 'k') + (o.math ? ' t-math' : '') + (o.bold ? ' t-bold' : '') + '"' +
      (o.size ? ' font-size="' + o.size + '"' : '') + (o.rot ? ' transform="rotate(' + o.rot + ' ' + n(x) + ' ' + n(y) + ')"' : '') + '>' + (o.raw ? esc(s) : rich(s)) + '</text>';
  };

  // Arrow from (x1,y1) to (x2,y2) with a filled head. o.both: heads at both ends. o.label + o.lx/o.ly offset.
  function head(x1, y1, x2, y2, size, color) {
    var a = Math.atan2(y2 - y1, x2 - x1), s = size;
    var p1 = [x2 - s * Math.cos(a - 0.4), y2 - s * Math.sin(a - 0.4)], p2 = [x2 - s * Math.cos(a + 0.4), y2 - s * Math.sin(a + 0.4)];
    return '<polygon points="' + n(x2) + ',' + n(y2) + ' ' + n(p1[0]) + ',' + n(p1[1]) + ' ' + n(p2[0]) + ',' + n(p2[1]) + '" class="f-' + color + ' s-' + color + '" stroke-width="1" stroke-linejoin="round"/>';
  }
  D.arrow = function (x1, y1, x2, y2, o) {
    o = o || {};
    var c = o.color || 'k', s = o.head || 9, len = Math.hypot(x2 - x1, y2 - y1) || 1;
    var ex = x2 - (x2 - x1) / len * s * 0.6, ey = y2 - (y2 - y1) / len * s * 0.6;
    var sx = x1, sy = y1;
    if (o.both) { sx = x1 + (x2 - x1) / len * s * 0.6; sy = y1 + (y2 - y1) / len * s * 0.6; }
    var out = D.line(sx, sy, ex, ey, { color: c, w: o.w || 2, dash: o.dash }) + head(x1, y1, x2, y2, s, c);
    if (o.both) out += head(x2, y2, x1, y1, s, c);
    if (o.label) {
      var mx = (x1 + x2) / 2 + (o.lx || 0), my = (y1 + y2) / 2 + (o.ly === undefined ? -12 : o.ly);
      if (o.at === 'end') { mx = x2 + (o.lx || 0); my = y2 + (o.ly === undefined ? -12 : o.ly); }
      out += D.text(mx, my, o.label, { color: c, math: o.math !== false, anchor: o.anchor, size: o.size });
    }
    return out;
  };

  // Angle arc at (cx,cy) from a1 to a2 degrees, measured anticlockwise from +x (as in maths, even though screen y is down).
  D.angle = function (cx, cy, r, a1, a2, label, o) {
    o = o || {};
    var t1 = -a1 * Math.PI / 180, t2 = -a2 * Math.PI / 180;
    var p1 = [cx + r * Math.cos(t1), cy + r * Math.sin(t1)], p2 = [cx + r * Math.cos(t2), cy + r * Math.sin(t2)];
    var large = Math.abs(a2 - a1) > 180 ? 1 : 0, sweep = a2 > a1 ? 0 : 1;
    var out = '<path d="M' + n(p1[0]) + ' ' + n(p1[1]) + ' A' + r + ' ' + r + ' 0 ' + large + ' ' + sweep + ' ' + n(p2[0]) + ' ' + n(p2[1]) + '"' +
      strokeAttrs({ color: o.color || 'm', w: o.w || 1.5 }) + '/>';
    if (label) {
      var tm = -((a1 + a2) / 2) * Math.PI / 180, rl = r + (o.lr || 12);
      out += D.text(cx + rl * Math.cos(tm), cy + rl * Math.sin(tm), label, { color: o.color || 'k', math: true, size: o.size });
    }
    return out;
  };

  // Right-angle mark at corner (x,y) between directions (dx1,dy1) and (dx2,dy2) (unit-ish vectors).
  D.square = function (x, y, d1, d2, s, o) {
    s = s || 9;
    var l1 = Math.hypot(d1[0], d1[1]), l2 = Math.hypot(d2[0], d2[1]);
    var a = [d1[0] / l1 * s, d1[1] / l1 * s], b = [d2[0] / l2 * s, d2[1] / l2 * s];
    return D.poly([[x + a[0], y + a[1]], [x + a[0] + b[0], y + a[1] + b[1]], [x + b[0], y + b[1]]], { color: (o && o.color) || 'm', w: 1.3 });
  };

  // Hatched ground or wall: a line from (x1,y1) to (x2,y2) with short hatch marks on one side.
  D.ground = function (x1, y1, x2, y2, o) {
    o = o || {};
    var len = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / len, uy = (y2 - y1) / len, side = o.side || 1;
    var nx = -uy * side, ny = ux * side, out = D.line(x1, y1, x2, y2, { color: 'k', w: 2 });
    for (var d = 6; d < len; d += 10) {
      var px = x1 + ux * d, py = y1 + uy * d;
      out += D.line(px, py, px + (nx - ux) * 7, py + (ny - uy) * 7, { color: 'm', w: 1.2 });
    }
    return out;
  };

  // Zigzag spring from (x1,y1) to (x2,y2): o.coils (default 8), o.amp (half-width, default 8), straight ends of o.end px.
  D.spring = function (x1, y1, x2, y2, o) {
    o = o || {};
    var len = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / len, uy = (y2 - y1) / len, px = -uy, py = ux;
    var e = o.end === undefined ? 8 : o.end, coils = o.coils || 8, amp = o.amp || 8, pts = [[x1, y1], [x1 + ux * e, y1 + uy * e]];
    var body = len - 2 * e, m = coils * 2;
    for (var k = 1; k < m; k++) { var d = e + body * k / m, sgn = k % 2 ? 1 : -1; pts.push([x1 + ux * d + px * amp * sgn, y1 + uy * d + py * amp * sgn]); }
    pts.push([x2 - ux * e, y2 - uy * e], [x2, y2]);
    return D.poly(pts, { color: o.color || 'm', w: o.w || 1.6 });
  };

  // ---------- electricity ----------
  // A point charge: circle with + or −. o.r radius, o.label text drawn beside it.
  D.charge = function (x, y, q, o) {
    o = o || {};
    var c = q > 0 ? 'r' : 'b', r = o.r || 10;
    return D.circle(x, y, r, { color: c, fill: 'soft', w: 1.8 }) + D.text(x, y + 0.5, q > 0 ? '+' : '−', { color: c, bold: true, size: r * 1.5, raw: true }) +
      (o.label ? D.text(x + (o.lx || 0), y + (o.ly === undefined ? r + 13 : o.ly), o.label, { size: 12, math: o.math !== false }) : '');
  };
  // Electric field lines of point charges [{x, y, q}] in pixel space. Lines start on positive charges (or on negative ones when
  // there are no positives) and are traced along E until they reach another charge or leave the box [x0, y0, x1, y1].
  // o: { charges, n: lines per unit charge (8), box, r0 (12), step (3), arrows: positions along a line (fractions, default [0.5]), color }
  D.field = function (o) {
    var Q = o.charges, n = o.n || 8, r0 = o.r0 || 12, ds = o.step || 3, box = o.box, out = [];
    var anyPos = Q.some(function (c) { return c.q > 0; });
    function E(x, y) {
      var ex = 0, ey = 0;
      Q.forEach(function (c) { var dx = x - c.x, dy = y - c.y, r2 = dx * dx + dy * dy, r3 = Math.pow(r2, 1.5) || 1e-9; ex += c.q * dx / r3; ey += c.q * dy / r3; });
      return [ex, ey];
    }
    Q.forEach(function (c) {
      if (anyPos ? c.q <= 0 : c.q >= 0) return;
      var N = Math.max(2, Math.round(n * Math.abs(c.q))), sgn = c.q > 0 ? 1 : -1;
      for (var k = 0; k < N; k++) {
        var a = 2 * Math.PI * (k + (o.offset || 0)) / N, x = c.x + r0 * Math.cos(a), y = c.y + r0 * Math.sin(a), pts = [[x, y]], ok = true;
        for (var i = 0; i < 2000 && ok; i++) {
          var e1 = E(x, y), m1 = Math.hypot(e1[0], e1[1]) || 1;
          var mx = x + sgn * e1[0] / m1 * ds / 2, my = y + sgn * e1[1] / m1 * ds / 2;
          var e2 = E(mx, my), m2 = Math.hypot(e2[0], e2[1]) || 1;
          x += sgn * e2[0] / m2 * ds; y += sgn * e2[1] / m2 * ds; pts.push([x, y]);
          if (x < box[0] || x > box[2] || y < box[1] || y > box[3]) ok = false;
          Q.forEach(function (d) { if (d !== c && Math.hypot(x - d.x, y - d.y) < r0 * 0.9) ok = false; });
        }
        if (sgn < 0) pts.reverse();
        out.push(D.poly(pts, { color: o.color || 'o', w: o.w || 1.3 }));
        (o.arrows || [0.5]).forEach(function (f) {
          var j = Math.min(pts.length - 3, Math.max(0, Math.floor(pts.length * f)));
          if (pts.length > 4) out.push(D.arrow(pts[j][0], pts[j][1], pts[j + 2][0], pts[j + 2][1], { color: o.color || 'o', w: 0.01, head: 7 }));
        });
      }
    });
    Q.forEach(function (c) { out.push(D.charge(c.x, c.y, c.q, { r: c.r || 10 })); });
    return out.join('');
  };
  // Two-terminal circuit elements between (x1,y1) and (x2,y2); the symbol sits in the middle with straight leads.
  function twoTerm(x1, y1, x2, y2, gap, sym, o) {
    var len = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / len, uy = (y2 - y1) / len, mx = (x1 + x2) / 2, my = (y1 + y2) / 2, c = (o && o.color) || 'k';
    var out = D.line(x1, y1, mx - ux * gap / 2, my - uy * gap / 2, { color: c, w: 1.8 }) + D.line(mx + ux * gap / 2, my + uy * gap / 2, x2, y2, { color: c, w: 1.8 }) + sym(mx, my, ux, uy, -uy, ux, c);
    if (o && o.label) out += D.text(mx + (o.lx === undefined ? -uy * 22 : o.lx), my + (o.ly === undefined ? ux * -20 : o.ly), o.label, { size: o.size || 13, math: o.math !== false, color: o.lcolor || 'k' });
    return out;
  }
  D.cap = function (x1, y1, x2, y2, o) {
    return twoTerm(x1, y1, x2, y2, 10, function (mx, my, ux, uy, px, py, c) {
      var h = 14;
      return D.line(mx - ux * 5 + px * h, my - uy * 5 + py * h, mx - ux * 5 - px * h, my - uy * 5 - py * h, { color: c, w: 2.6 }) +
        D.line(mx + ux * 5 + px * h, my + uy * 5 + py * h, mx + ux * 5 - px * h, my + uy * 5 - py * h, { color: c, w: 2.6 });
    }, o);
  };
  D.res = function (x1, y1, x2, y2, o) {
    return twoTerm(x1, y1, x2, y2, 40, function (mx, my, ux, uy, px, py, c) {
      var pts = [[mx - ux * 20, my - uy * 20]];
      for (var k = 1; k < 8; k++) { var d = -20 + 40 * k / 8, s = k % 2 ? 7 : -7; pts.push([mx + ux * d + px * s, my + uy * d + py * s]); }
      pts.push([mx + ux * 20, my + uy * 20]);
      return D.poly(pts, { color: c, w: 1.8 });
    }, o);
  };
  // Cell: long thin plate (+) towards (x1,y1)... set o.flip to swap. o.cells = number of cells (battery).
  D.cell = function (x1, y1, x2, y2, o) {
    o = o || {};
    var cells = o.cells || 1;
    return twoTerm(x1, y1, x2, y2, cells * 14 - 6, function (mx, my, ux, uy, px, py, c) {
      var out = '', f = o.flip ? -1 : 1;
      for (var k = 0; k < cells; k++) {
        var d = (-(cells * 14 - 6) / 2 + k * 14) * f;
        out += D.line(mx + ux * d + px * 14, my + uy * d + py * 14, mx + ux * d - px * 14, my + uy * d - py * 14, { color: c, w: 1.8 });
        out += D.line(mx + ux * (d + 8 * f) + px * 7, my + uy * (d + 8 * f) + py * 7, mx + ux * (d + 8 * f) - px * 7, my + uy * (d + 8 * f) - py * 7, { color: c, w: 3.4 });
      }
      return out;
    }, o);
  };

  // Inductor: a row of loops (o.loops, default 4).
  D.ind = function (x1, y1, x2, y2, o) {
    o = o || {};
    var n = o.loops || 4, gap = n * 12;
    return twoTerm(x1, y1, x2, y2, gap, function (mx, my, ux, uy, px, py, c) {
      var d = 'M' + (mx - ux * gap / 2).toFixed(1) + ' ' + (my - uy * gap / 2).toFixed(1);
      for (var k = 0; k < n; k++) {
        var ex = mx + ux * (-gap / 2 + 12 * (k + 1)), ey = my + uy * (-gap / 2 + 12 * (k + 1));
        var cx = mx + ux * (-gap / 2 + 12 * k + 6) + px * 12, cy = my + uy * (-gap / 2 + 12 * k + 6) + py * 12;
        d += ' Q ' + cx.toFixed(1) + ' ' + cy.toFixed(1) + ' ' + ex.toFixed(1) + ' ' + ey.toFixed(1);
      }
      return D.path(d, { color: c, w: 1.8 });
    }, o);
  };
  // AC source: circle with a sine wave inside.
  D.ac = function (x1, y1, x2, y2, o) {
    return twoTerm(x1, y1, x2, y2, 28, function (mx, my, ux, uy, px, py, c) {
      var d = 'M' + (mx - 8) + ' ' + my + ' Q ' + (mx - 4) + ' ' + (my - 9) + ' ' + mx + ' ' + my + ' T ' + (mx + 8) + ' ' + my;
      return D.circle(mx, my, 14, { color: c, w: 1.8 }) + D.path(d, { color: c, w: 1.6 });
    }, o);
  };
  // Meter (G, A or V) as a circle in a wire from (x1,y1) to (x2,y2).
  D.meter = function (x1, y1, x2, y2, o) {
    o = o || {};
    return twoTerm(x1, y1, x2, y2, 26, function (mx, my, ux, uy, px, py, c) {
      return D.circle(mx, my, 13, { color: c, fill: 'soft', w: 1.8 }) + D.text(mx, my + 0.5, o.s || 'G', { size: 13, bold: true, raw: true, color: c });
    }, o);
  };

  // ---------- ray optics ----------
  // Ray: polyline through pts with an arrowhead in the middle of each segment longer than 30 px. o.dash for virtual rays.
  D.ray = function (pts, o) {
    o = o || {};
    var c = o.color || 'o', out = D.poly(pts, { color: c, w: o.w || 1.6, dash: o.dash });
    if (o.arrows !== false) for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (len > 30 && !(o.noArrow && o.noArrow.indexOf(i) >= 0)) { var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2; out += head(mx - (b[0] - a[0]) / len, my - (b[1] - a[1]) / len, mx + (b[0] - a[0]) / len * 4, my + (b[1] - a[1]) / len * 4, 8, c); }
    }
    return out;
  };
  // Thin lens at x, centred on axis y, half-height h. o.type 'convex' (default) or 'concave'.
  D.lens = function (x, y, h, o) {
    o = o || {};
    var c = o.color || 'c', w = o.w || 10, d;
    if (o.type === 'concave') d = 'M' + (x - w) + ' ' + (y - h) + ' L' + (x + w) + ' ' + (y - h) + ' Q ' + (x + 2) + ' ' + y + ' ' + (x + w) + ' ' + (y + h) + ' L' + (x - w) + ' ' + (y + h) + ' Q ' + (x - 2) + ' ' + y + ' ' + (x - w) + ' ' + (y - h) + ' Z';
    else d = 'M' + x + ' ' + (y - h) + ' Q ' + (x + 2 * w) + ' ' + y + ' ' + x + ' ' + (y + h) + ' Q ' + (x - 2 * w) + ' ' + y + ' ' + x + ' ' + (y - h) + ' Z';
    return D.path(d, { color: c, fill: 'soft', w: 1.6 });
  };
  // Spherical mirror with its pole at (x, y), half-height h, radius R (px); light comes from the left.
  // o.type 'concave' (default) or 'convex'. Hatching on the back.
  D.mirror = function (x, y, h, Rr, o) {
    o = o || {};
    var cc = o.type === 'convex' ? 1 : -1, pts = [], k, out = '';
    for (k = 0; k <= 40; k++) { var dy = -h + 2 * h * k / 40; pts.push([x + cc * (Rr - Math.sqrt(Rr * Rr - dy * dy)), y + dy]); }
    out += D.poly(pts, { color: o.color || 'k', w: 2.4 });
    for (k = 2; k <= 38; k += 4) out += D.line(pts[k][0], pts[k][1], pts[k][0] + 7, pts[k][1] - 5, { color: 'm', w: 1 });
    return out;
  };
  // Object/image arrow standing on the axis at (x, y) with height h (negative = inverted). o.dash for virtual images.
  D.obj = function (x, y, h, o) {
    o = o || {};
    return D.arrow(x, y, x, y - h, { color: o.color || 'g', w: o.w || 2.4, head: 8, dash: o.dash, label: o.label, at: 'end', lx: o.lx === undefined ? 0 : o.lx, ly: o.ly === undefined ? (h > 0 ? -10 : 14) : o.ly, math: o.math, size: o.size });
  };

  // Labelled block (for free-body diagrams).
  D.block = function (x, y, w, h, label, o) {
    o = o || {};
    return D.rect(x, y, w, h, { color: o.color || 'c', fill: 'soft', w: 2, r: 3 }) + (label ? D.text(x + w / 2, y + h / 2, label, { math: o.math, bold: !o.math }) : '');
  };

  // Teardrop-shaped orbital lobe from (cx,cy) pointing at `deg` degrees (anticlockwise from +x).
  D.lobe = function (cx, cy, len, width, deg, o) {
    o = o || {};
    var t = -deg * Math.PI / 180, ux = Math.cos(t), uy = Math.sin(t), px = -uy, py = ux, w = width / 2;
    var tip = [cx + ux * len, cy + uy * len];
    var c1 = [cx + ux * len * 0.15 + px * w * 1.15, cy + uy * len * 0.15 + py * w * 1.15];
    var c2 = [cx + ux * len * 1.05 + px * w * 1.1, cy + uy * len * 1.05 + py * w * 1.1];
    var c3 = [cx + ux * len * 1.05 - px * w * 1.1, cy + uy * len * 1.05 - py * w * 1.1];
    var c4 = [cx + ux * len * 0.15 - px * w * 1.15, cy + uy * len * 0.15 - py * w * 1.15];
    var d = 'M' + n(cx) + ' ' + n(cy) + ' C' + n(c1[0]) + ' ' + n(c1[1]) + ' ' + n(c2[0]) + ' ' + n(c2[1]) + ' ' + n(tip[0]) + ' ' + n(tip[1]) +
      ' C' + n(c3[0]) + ' ' + n(c3[1]) + ' ' + n(c4[0]) + ' ' + n(c4[1]) + ' ' + n(cx) + ' ' + n(cy) + ' Z';
    return D.path(d, { color: o.color || 'c', fill: o.fill || 'soft', w: o.w || 1.6, dash: o.dash });
  };

  // ---------- graphs in data coordinates ----------
  // D.plot({ w, h, x: [min, max], y: [min, max], xlabel, ylabel, xticks: [v or [v, label]], yticks,
  //   fns: [{ f, from, to, color, w, dash, label, lx, ly (label position in data coords) }],
  //   param: [{ fx, fy, t: [a, b], color, w, dash }],
  //   shade: [{ f, g, from, to, color }], pts: [{ x, y, label, open, color, pos: 'ne'|'nw'|'se'|'sw'|'n'|'s'|'e'|'w' }],
  //   segs: [{ x1, y1, x2, y2, color, dash, arrow, label }], guides: [[x, y]], texts: [{ x, y, s, color, anchor }],
  //   extra: function (X, Y) { return [svg strings in pixel space] }, noOrigin, grid })
  var clipId = 0;
  D.plot = function (o) {
    var W = o.w || 360, H = o.h || 240, pad = o.pad || [18, 22, 26, 30]; // top, right, bottom, left
    var x0 = o.x[0], x1 = o.x[1], y0 = o.y[0], y1 = o.y[1];
    // eq: same scale on both axes (so angles and vectors look right); y1 is then worked out from the size.
    if (o.eq) y1 = y0 + (H - pad[0] - pad[2]) * (x1 - x0) / (W - pad[1] - pad[3]);
    function X(x) { return pad[3] + (x - x0) / (x1 - x0) * (W - pad[1] - pad[3]); }
    function Y(y) { return H - pad[2] - (y - y0) / (y1 - y0) * (H - pad[0] - pad[2]); }
    var parts = [];
    var ax = y0 <= 0 && y1 >= 0 ? Y(0) : Y(y0), ay = x0 <= 0 && x1 >= 0 ? X(0) : X(x0);

    if (o.grid) {
      (o.xticks || []).forEach(function (t) { var v = t.length ? t[0] : t; parts.push(D.line(X(v), Y(y0), X(v), Y(y1), { color: 'm', w: 0.6, op: 0.35 })); });
      (o.yticks || []).forEach(function (t) { var v = t.length ? t[0] : t; parts.push(D.line(X(x0), Y(v), X(x1), Y(v), { color: 'm', w: 0.6, op: 0.35 })); });
    }
    (o.shade || []).forEach(function (s) {
      var a = s.from, b = s.to, k, steps = 80, top = [], bot = [];
      for (k = 0; k <= steps; k++) { var x = a + (b - a) * k / steps; top.push([X(x), Y(s.f(x))]); bot.push([X(x), Y(s.g ? s.g(x) : 0)]); }
      parts.push('<polygon points="' + top.concat(bot.reverse()).map(function (p) { return n(p[0]) + ',' + n(p[1]); }).join(' ') + '" class="soft-' + (s.color || 'c') + '" stroke="none"/>');
    });
    // axes
    parts.push(D.arrow(X(x0) - (x0 < 0 ? 0 : 6), ax, X(x1) + 10, ax, { color: 'k', w: 1.4, head: 8 }));
    parts.push(D.arrow(ay, Y(y0) + (y0 < 0 ? 0 : 6), ay, Y(y1) - 10, { color: 'k', w: 1.4, head: 8 }));
    if (o.xlabel) parts.push(D.text(X(x1) + 10, ax + 15, o.xlabel, { anchor: 'end', math: o.mathLabels !== false, color: 'm' }));
    if (o.ylabel) parts.push(D.text(ay + 8, Y(y1) - 8, o.ylabel, { anchor: 'start', math: o.mathLabels !== false, color: 'm' }));
    if (!o.noOrigin && x0 <= 0 && y0 <= 0) parts.push(D.text(ay - 8, ax + 12, 'O', { color: 'm', math: true }));
    (o.xticks || []).forEach(function (t) {
      var v = t.length ? t[0] : t, lab = t.length ? t[1] : String(v);
      parts.push(D.line(X(v), ax - 3, X(v), ax + 3, { color: 'k', w: 1.2 }));
      parts.push(D.text(X(v), ax + 14, lab, { color: 'm', size: 12 }));
    });
    (o.yticks || []).forEach(function (t) {
      var v = t.length ? t[0] : t, lab = t.length ? t[1] : String(v);
      parts.push(D.line(ay - 3, Y(v), ay + 3, Y(v), { color: 'k', w: 1.2 }));
      parts.push(D.text(ay - 7, Y(v), lab, { color: 'm', size: 12, anchor: 'end' }));
    });
    (o.guides || []).forEach(function (g) {
      parts.push(D.line(X(g[0]), Y(g[1]), X(g[0]), ax, { color: 'm', w: 1.1, dash: '3 3' }));
      parts.push(D.line(X(g[0]), Y(g[1]), ay, Y(g[1]), { color: 'm', w: 1.1, dash: '3 3' }));
    });
    // curves y = f(x), broken where the function jumps or is undefined; clipped to the plot area
    var cid = 'dclip' + (++clipId), curves = [];
    parts.push('<clipPath id="' + cid + '"><rect x="' + n(X(x0) - 2) + '" y="' + n(Y(y1) - 2) + '" width="' + n(X(x1) - X(x0) + 4) + '" height="' + n(Y(y0) - Y(y1) + 4) + '"/></clipPath>');
    (o.fns || []).forEach(function (c) {
      var a = c.from === undefined ? x0 : c.from, b = c.to === undefined ? x1 : c.to, steps = c.steps || 240, runs = [], cur = [];
      var span = (y1 - y0);
      for (var k = 0; k <= steps; k++) {
        var x = a + (b - a) * k / steps, y = c.f(x);
        var ok = isFinite(y) && y > y0 - span * 1.5 && y < y1 + span * 1.5;
        if (ok && cur.length) { var prev = cur[cur.length - 1]; if (Math.abs(y - prev[2]) > span * 0.8) ok = false; }
        if (ok) cur.push([X(x), Y(y), y]);
        else { if (cur.length > 1) runs.push(cur); cur = []; if (isFinite(y) && y > y0 - span * 1.5 && y < y1 + span * 1.5) cur.push([X(x), Y(y), y]); }
      }
      if (cur.length > 1) runs.push(cur);
      runs.forEach(function (r) { curves.push(D.poly(r, { color: c.color || 'c', w: c.w || 2.4, dash: c.dash })); });
    });
    (o.param || []).forEach(function (c) {
      var pts = [], steps = c.steps || 200;
      for (var k = 0; k <= steps; k++) { var t = c.t[0] + (c.t[1] - c.t[0]) * k / steps; pts.push([X(c.fx(t)), Y(c.fy(t))]); }
      curves.push(D.poly(pts, { color: c.color || 'c', w: c.w || 2.4, dash: c.dash }));
    });
    parts.push('<g clip-path="url(#' + cid + ')">' + curves.join('') + '</g>');
    (o.fns || []).forEach(function (c) {
      if (c.label) parts.push(D.text(X(c.lx), Y(c.ly), c.label, { color: c.color || 'c', math: c.math !== false, anchor: c.anchor || 'start' }));
    });
    (o.segs || []).forEach(function (s) {
      var f = s.arrow ? D.arrow : D.line;
      parts.push(f(X(s.x1), Y(s.y1), X(s.x2), Y(s.y2), { color: s.color || 'k', w: s.w || 1.8, dash: s.dash, label: s.label, ly: s.ly, lx: s.lx }));
    });
    (o.pts || []).forEach(function (p) {
      parts.push(D.dot(X(p.x), Y(p.y), { open: p.open, color: p.color || 'k' }));
      if (p.label) {
        var off = { n: [0, -14], s: [0, 16], e: [10, 0], w: [-10, 0], ne: [8, -12], nw: [-8, -12], se: [8, 14], sw: [-8, 14] }[p.pos || 'ne'];
        var anc = /e$/.test(p.pos || 'ne') ? 'start' : /w$/.test(p.pos || '') ? 'end' : 'middle';
        parts.push(D.text(X(p.x) + off[0], Y(p.y) + off[1], p.label, { anchor: anc, math: p.math !== false, color: p.lcolor || 'k', size: p.size }));
      }
    });
    (o.texts || []).forEach(function (t) { parts.push(D.text(X(t.x), Y(t.y), t.s, { color: t.color || 'k', anchor: t.anchor, math: t.math, size: t.size })); });
    if (o.extra) parts = parts.concat(o.extra(X, Y));
    return D.svg(W, H, parts, o.label || 'graph');
  };

  // ---------- energy-level (molecular orbital) diagrams ----------
  // D.levels({ w, h, cols: [{ x, title, side: 'l'|'r', levels: [{ id, y, n: boxes, e: electrons, label }] }], links: [[id1, id2]] })
  D.levels = function (o) {
    var W = o.w || 420, H = o.h || 320, parts = [], pos = {}, bw = 26, gap = 8;
    parts.push(D.arrow(18, H - 24, 18, 20, { color: 'm', w: 1.4, head: 8 }));
    parts.push(D.text(8, H / 2, 'Energy', { color: 'm', rot: -90, size: 12 }));
    o.cols.forEach(function (col) {
      if (col.title) parts.push(D.text(col.x, H - 10, col.title, { bold: true, size: 13 }));
      col.levels.forEach(function (lv) {
        var nb = lv.n || 1, tot = nb * bw + (nb - 1) * gap, left = col.x - tot / 2;
        pos[lv.id] = { l: left, r: left + tot, y: lv.y };
        var e = lv.e || 0;
        for (var b = 0; b < nb; b++) {
          var bx = left + b * (bw + gap);
          parts.push(D.line(bx, lv.y, bx + bw, lv.y, { color: lv.color || 'k', w: 2.2 }));
          var up = e > b, down = e > nb + b; // Hund's rule: one up in each box first, then pair
          if (up) parts.push(D.arrow(bx + bw / 2 - (down ? 4 : 0), lv.y - 2, bx + bw / 2 - (down ? 4 : 0), lv.y - 17, { color: 'c', w: 1.6, head: 6 }));
          if (down) parts.push(D.arrow(bx + bw / 2 + 4, lv.y - 17, bx + bw / 2 + 4, lv.y - 2, { color: 'c', w: 1.6, head: 6 }));
        }
        if (lv.label) {
          var side = lv.side || col.side || 'r';
          parts.push(D.text(side === 'l' ? left - 6 : left + tot + 6, lv.y - 4, lv.label, { anchor: side === 'l' ? 'end' : 'start', raw: true, size: 12, color: 'm' }));
        }
      });
    });
    (o.links || []).forEach(function (L) {
      var a = pos[L[0]], b = pos[L[1]];
      if (!a || !b) return;
      var ax = a.r < b.l ? a.r : a.l, bx = a.r < b.l ? b.l : b.r;
      parts.push(D.line(ax + 2, a.y, bx - 2, b.y, { color: 'm', w: 1, dash: '3 3' }));
    });
    return D.svg(W, H, parts, o.label || 'energy level diagram');
  };

  // ---------- molecules ----------
  // D.molecule({ w, h, atoms: [{ x, y, s: 'O', color, lp: [angles of lone pairs], dots: [[angle, count]], q: '+', hide }],
  //   bonds: [[i, j, type]] }) with type 1, 2, 3, 'w' (wedge, towards you), 'h' (hashed, away), 'd' (dashed), 'hb' (hydrogen bond), 1.5 (one solid + one dashed)
  // D.mol returns the raw SVG parts (so several molecules can share one figure; dx/dy shift it); D.molecule wraps them.
  D.molecule = function (o) { return D.svg(o.w || 200, o.h || 160, D.mol(o), o.label || 'molecule'); };
  D.mol = function (o) {
    var parts = [], rr = o.r || 11, dx = o.dx || 0, dy = o.dy || 0;
    var A = o.atoms.map(function (a) { var b = {}; for (var k in a) b[k] = a[k]; b.x += dx; b.y += dy; return b; });
    function trim(a, b) {
      var dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy), ra = a.s && !a.hide ? rr : 0, rb = b.s && !b.hide ? rr : 0;
      return [a.x + dx / L * ra, a.y + dy / L * ra, b.x - dx / L * rb, b.y - dy / L * rb, dx / L, dy / L];
    }
    (o.bonds || []).forEach(function (bd) {
      var t = trim(A[bd[0]], A[bd[1]]), px = -t[5], py = t[4], type = bd[2] === undefined ? 1 : bd[2], c = bd[3] || 'k';
      if (type === 1) parts.push(D.line(t[0], t[1], t[2], t[3], { color: c, w: 2 }));
      else if (type === 2 || type === 1.5) {
        parts.push(D.line(t[0] + px * 3, t[1] + py * 3, t[2] + px * 3, t[3] + py * 3, { color: c, w: 2 }));
        parts.push(D.line(t[0] - px * 3, t[1] - py * 3, t[2] - px * 3, t[3] - py * 3, { color: c, w: 2, dash: type === 1.5 ? '4 3' : false }));
      } else if (type === 3) {
        [-4.5, 0, 4.5].forEach(function (k) { parts.push(D.line(t[0] + px * k, t[1] + py * k, t[2] + px * k, t[3] + py * k, { color: c, w: 1.8 })); });
      } else if (type === 'w') {
        parts.push('<polygon points="' + n(t[0]) + ',' + n(t[1]) + ' ' + n(t[2] + px * 5) + ',' + n(t[3] + py * 5) + ' ' + n(t[2] - px * 5) + ',' + n(t[3] - py * 5) + '" class="f-' + c + ' s-' + c + '" stroke-width="1"/>');
      } else if (type === 'h') {
        for (var k = 1; k <= 6; k++) {
          var f = k / 6, hx = t[0] + (t[2] - t[0]) * f, hy = t[1] + (t[3] - t[1]) * f, half = 5 * f;
          parts.push(D.line(hx + px * half, hy + py * half, hx - px * half, hy - py * half, { color: c, w: 1.4 }));
        }
      } else if (type === 'd') parts.push(D.line(t[0], t[1], t[2], t[3], { color: c, w: 2, dash: '4 3' }));
      else if (type === 'hb') parts.push(D.line(t[0], t[1], t[2], t[3], { color: 'o', w: 2, dash: '2 4' }));
    });
    A.forEach(function (a) {
      if (a.s && !a.hide) parts.push(D.text(a.x, a.y + 1, a.s, { bold: true, size: a.size || 15, color: a.color || 'k' }));
      function pair(ang, cnt, dist) {
        var t = -ang * Math.PI / 180, ux = Math.cos(t), uy = Math.sin(t), cx = a.x + ux * dist, cy = a.y + uy * dist;
        if (cnt === 1) { parts.push(D.dot(cx, cy, { r: 2.2, color: a.dc || 'c' })); return; }
        parts.push(D.dot(cx - uy * 3.6, cy + ux * 3.6, { r: 2.2, color: a.dc || 'c' }));
        parts.push(D.dot(cx + uy * 3.6, cy - ux * 3.6, { r: 2.2, color: a.dc || 'c' }));
      }
      (a.lp || []).forEach(function (ang) { pair(ang, 2, a.lpd || 16); });
      (a.dots || []).forEach(function (d) { pair(d[0], d[1], a.lpd || 16); });
      if (a.q) { var far = (a.dots || a.lp) ? 7 : 0; parts.push(D.text(a.x + 12 + far, a.y - 12 - far, a.q, { size: 13, bold: true, color: 'r' })); }
    });
    (o.texts || []).forEach(function (t) { parts.push(D.text(t.x + dx, t.y + dy, t.s, t)); });
    if (o.extra) parts = parts.concat(o.extra);
    return parts.join('');
  };

  // Put several figures side by side, each with an optional small caption: D.row([[svg, 'caption'], ...]).
  D.row = function (items) {
    return '<div class="fig-row">' + items.map(function (it) {
      return '<div class="fig-cell">' + it[0] + (it[1] ? '<div class="fig-sub">' + it[1] + '</div>' : '') + '</div>';
    }).join('') + '</div>';
  };
})();
