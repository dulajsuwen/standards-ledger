/* =============================================================================
   THE STANDARDS LEDGER — application logic

   No framework, no build step. Reads window.STANDARDS_DB, which the files in
   /data populate. Everything below is view logic over that one array.
   ========================================================================== */
(function () {
  "use strict";

  var DB = window.STANDARDS_DB || { meta: {}, standards: [] };
  var ALL = DB.standards;

  /* ------------------------------- labels -------------------------------- */

  var FAMILY = [
    { key: "FRAMEWORK", label: "Conceptual Framework" },
    { key: "IFRS",      label: "IFRS Accounting Standards" },
    { key: "IAS",       label: "IAS Standards" },
    { key: "IFRIC",     label: "IFRIC Interpretations" },
    { key: "SIC",       label: "SIC Interpretations" },
    { key: "SUST",      label: "Sustainability — ISSB & AASB S" },
    { key: "AASB",      label: "AASB — Australian only" },
    { key: "ADJACENT",  label: "Adjacent frameworks" }
  ];

  var STATUS = [
    { key: "active",     label: "In force" },
    { key: "future",     label: "Not yet effective" },
    { key: "sunsetting", label: "Being replaced" },
    { key: "superseded", label: "Superseded" }
  ];

  var STATUS_SHORT = {
    active: "In force", future: "Coming", sunsetting: "Replaced soon", superseded: "Superseded"
  };

  var TOPIC_LABEL = {
    "revenue": "Revenue", "leases": "Leases", "financial-instruments": "Financial instruments",
    "consolidation": "Consolidation", "business-combinations": "Business combinations",
    "assets": "Assets", "impairment": "Impairment", "liabilities-provisions": "Provisions",
    "employee-benefits": "Employee benefits", "tax": "Tax", "presentation": "Presentation",
    "liabilities": "Liabilities",
    "disclosure": "Disclosure", "fair-value": "Fair value", "foreign-currency": "Foreign currency",
    "insurance": "Insurance", "agriculture": "Agriculture", "extractives": "Extractives",
    "public-sector": "Public sector", "not-for-profit": "Not-for-profit",
    "sustainability": "Sustainability", "first-time-adoption": "First-time adoption",
    "interim": "Interim", "segments": "Segments", "eps": "EPS", "cash-flows": "Cash flows",
    "inventories": "Inventories", "related-parties": "Related parties",
    "superannuation": "Superannuation", "equity": "Equity", "measurement": "Measurement",
    "recognition": "Recognition", "reduced-disclosure": "Reduced disclosure",
    "regulatory": "Rate regulation", "audit": "Audit", "assurance": "Assurance",
    "ethics": "Ethics", "legal": "Law", "us-gaap": "US GAAP"
  };

  function topicLabel(t) { return TOPIC_LABEL[t] || t; }

  /* ------------------------------ elements ------------------------------- */

  var $ = function (id) { return document.getElementById(id); };

  var elQ = $("q"),
      elLedger = $("ledger"),
      elTimeline = $("timeline"),
      elBridge = $("bridge-body"),
      elShown = $("shown-count"),
      elAll = $("all-count"),
      elDrawer = $("drawer"),
      elScrim = $("scrim"),
      elDrawerBody = $("drawer-body"),
      elDrawerTitle = $("drawer-title"),
      elDrawerCodes = $("drawer-codes");

  var state = {
    q: "",
    families: {},   // key -> true
    statuses: {},
    topics: {},
    view: "library",
    openCode: null
  };

  /* ------------------------------- search -------------------------------- */

  // Pre-compute a searchable blob per record so typing stays instant.
  ALL.forEach(function (s) {
    var parts = [s.code, s.au || "", s.title, s.summary, s.watch || "",
                 (s.points || []).join(" "), (s.topics || []).join(" "),
                 (s.related || []).join(" "), s.effective || ""];
    s._hay = parts.join(" · ").toLowerCase();
    s._compact = s._hay.replace(/[\s\-]/g, "");   // so "ias1" finds "IAS 1"
  });

  function matchesQuery(s, terms) {
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      if (s._hay.indexOf(t) === -1 && s._compact.indexOf(t.replace(/[\s\-]/g, "")) === -1) {
        return false;
      }
    }
    return true;
  }

  function anyOn(obj) { for (var k in obj) { if (obj[k]) return true; } return false; }

  function filtered() {
    var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
    var fOn = anyOn(state.families), sOn = anyOn(state.statuses), tOn = anyOn(state.topics);

    return ALL.filter(function (s) {
      if (fOn && !state.families[s.family]) return false;
      if (sOn && !state.statuses[s.status]) return false;
      if (tOn) {
        var hit = (s.topics || []).some(function (t) { return state.topics[t]; });
        if (!hit) return false;
      }
      if (terms.length && !matchesQuery(s, terms)) return false;
      return true;
    });
  }

  /* ------------------------------ utilities ------------------------------ */

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function byCode(code) {
    for (var i = 0; i < ALL.length; i++) {
      if (ALL[i].code === code || ALL[i].au === code) return ALL[i];
    }
    return null;
  }

  // Short effective-date label for the ledger's right-hand column.
  function effShort(s) {
    if (s.status === "superseded") return "—";
    if (s.effSort) {
      var d = new Date(s.effSort + "T00:00:00");
      if (!isNaN(d)) {
        return d.toLocaleDateString("en-AU", { month: "short", year: "numeric" });
      }
    }
    return "in force";
  }

  /* ------------------------------- filters ------------------------------- */

  function buildFilters() {
    var famCounts = {}, statCounts = {}, topicCounts = {};
    ALL.forEach(function (s) {
      famCounts[s.family] = (famCounts[s.family] || 0) + 1;
      statCounts[s.status] = (statCounts[s.status] || 0) + 1;
      (s.topics || []).forEach(function (t) { topicCounts[t] = (topicCounts[t] || 0) + 1; });
    });

    $("family-filters").innerHTML = FAMILY.filter(function (f) { return famCounts[f.key]; })
      .map(function (f) {
        return '<button class="rail-item" type="button" data-kind="families" data-key="' + f.key +
               '" aria-pressed="false"><span>' + esc(f.label) + '</span>' +
               '<span class="rail-count">' + famCounts[f.key] + '</span></button>';
      }).join("");

    $("status-filters").innerHTML = STATUS.filter(function (s) { return statCounts[s.key]; })
      .map(function (s) {
        return '<button class="rail-item" type="button" data-kind="statuses" data-key="' + s.key +
               '" aria-pressed="false"><span>' + esc(s.label) + '</span>' +
               '<span class="rail-count">' + statCounts[s.key] + '</span></button>';
      }).join("");

    var topics = Object.keys(topicCounts).sort(function (a, b) {
      return topicCounts[b] - topicCounts[a] || a.localeCompare(b);
    });
    $("topic-filters").innerHTML = topics.map(function (t) {
      return '<button class="chip" type="button" data-kind="topics" data-key="' + esc(t) +
             '" aria-pressed="false">' + esc(topicLabel(t)) + '</button>';
    }).join("");

    document.getElementById("rail").addEventListener("click", function (e) {
      var btn = e.target.closest("[data-kind]");
      if (!btn) return;
      var kind = btn.dataset.kind, key = btn.dataset.key;
      state[kind][key] = !state[kind][key];
      btn.setAttribute("aria-pressed", state[kind][key] ? "true" : "false");
      render();
    });
  }

  /* ------------------------------- ledger -------------------------------- */

  function rowHTML(s) {
    var alt = "";
    if (s.au && s.au !== s.code) alt = '<span class="alt">' + esc(s.au) + "</span>";

    var cls = "row" + (state.openCode === s.code ? " is-open" : "");
    return '<button class="' + cls + '" type="button" data-code="' + esc(s.code) + '">' +
             '<span class="row-code">' + esc(s.code) + alt + '</span>' +
             '<span class="row-main">' +
               '<span class="row-title">' + esc(s.title) + '</span>' +
               '<span class="row-sub">' + esc(s.summary) + '</span>' +
             '</span>' +
             '<span class="row-aside">' +
               '<span class="eff-date">' + esc(effShort(s)) + '</span>' +
               '<span class="pill pill--' + s.status + '">' + esc(STATUS_SHORT[s.status]) + '</span>' +
             '</span>' +
           '</button>';
  }

  function renderLedger(list) {
    if (!list.length) {
      elLedger.innerHTML = '<div class="empty"><strong>Nothing matches that</strong>' +
        'Try a standard number (AASB 1058), a topic (impairment), or a phrase from the text ' +
        '(expected credit loss). Then clear the filters in the left rail.</div>';
      return;
    }

    var html = [];
    FAMILY.forEach(function (f) {
      var group = list.filter(function (s) { return s.family === f.key; });
      if (!group.length) return;
      html.push('<div class="group-head"><h2>' + esc(f.label) + '</h2>' +
                '<span class="hr"></span><span class="n">' + group.length + '</span></div>');
      group.forEach(function (s) { html.push(rowHTML(s)); });
    });
    elLedger.innerHTML = html.join("");
  }

  /* ------------------------------ timeline ------------------------------- */

  function renderTimeline(list) {
    var dated = list.filter(function (s) { return s.effSort; })
                    .sort(function (a, b) { return a.effSort < b.effSort ? -1 : 1; });

    if (!dated.length) {
      elTimeline.innerHTML = '<div class="empty"><strong>No dated changes in this selection</strong>' +
        'Clear the filters to see everything with an effective date ahead of it.</div>';
      return;
    }

    var thisYear = new Date().getFullYear();
    var years = {};
    dated.forEach(function (s) {
      var y = s.effSort.slice(0, 4);
      (years[y] = years[y] || []).push(s);
    });

    elTimeline.innerHTML = Object.keys(years).sort().map(function (y) {
      var n = parseInt(y, 10);
      var when = n < thisYear ? "already in" : (n === thisYear ? "this year" : "ahead");
      var items = years[y].map(function (s) {
        var amber = (s.status === "future" || s.status === "sunsetting") ? " is-amber" : "";
        return '<button class="tl-item' + amber + '" type="button" data-code="' + esc(s.code) + '">' +
                 '<span class="c">' + esc(s.code) + (s.au && s.au !== s.code ? "<br>" + esc(s.au) : "") + '</span>' +
                 '<span><span class="t">' + esc(s.title) + '</span>' +
                 '<span class="d">' + esc(s.effective) + '</span></span>' +
               '</button>';
      }).join("");
      return '<div class="tl-year' + (n === thisYear ? " is-now" : "") + '">' +
               '<div class="tl-label">' + y + '<span>' + when + '</span></div>' +
               '<div class="tl-items">' + items + '</div>' +
             '</div>';
    }).join("");
  }

  /* ------------------------------- bridge -------------------------------- */

  function renderBridge(list) {
    var rows = list.filter(function (s) { return s.family !== "ADJACENT"; });
    elBridge.innerHTML = rows.map(function (s) {
      var intl = s.family === "AASB" ? '<span style="color:var(--muted)">— no equivalent</span>' : esc(s.code);
      var au = s.au ? esc(s.au) : '<span style="color:var(--muted)">—</span>';
      var same = (s.au && s.code && s.au.replace("AASB ", "") === s.code.replace(/IFRS |IAS /, "")) ? " same" : "";
      return '<tr data-code="' + esc(s.code) + '">' +
               '<td class="code-cell">' + intl + '</td>' +
               '<td class="code-cell au' + same + '">' + au + '</td>' +
               '<td>' + esc(s.title) + '</td>' +
               '<td><span class="pill pill--' + s.status + '">' + esc(STATUS_SHORT[s.status]) + '</span></td>' +
             '</tr>';
    }).join("");
  }

  /* -------------------------------- drawer ------------------------------- */

  function openDrawer(code) {
    var s = byCode(code);
    if (!s) return;
    state.openCode = s.code;

    var codes = '<span class="drawer-code">' + esc(s.code) + "</span>";
    if (s.au && s.au !== s.code) codes += '<span class="drawer-code au">' + esc(s.au) + "</span>";
    elDrawerCodes.innerHTML = codes;
    elDrawerTitle.textContent = s.title;

    var html = [];

    html.push('<div class="fact-grid">');
    html.push('<div class="fact span"><dt>Effective</dt><dd>' + esc(s.effective) + "</dd></div>");
    html.push('<div class="fact"><dt>Issued</dt><dd>' + esc(s.issued) + "</dd></div>");
    html.push('<div class="fact"><dt>Status</dt><dd>' + esc(STATUS_SHORT[s.status]) + "</dd></div>");
    html.push("</div>");

    html.push('<div class="sec"><h4>What it covers</h4><p class="lede">' + esc(s.summary) + "</p></div>");

    if (s.points && s.points.length) {
      html.push('<div class="sec"><h4>How it works</h4><ul>' +
        s.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul></div>");
    }

    if (s.watch) {
      html.push('<div class="sec"><div class="watch-box"><h4>Watch for</h4><p>' + esc(s.watch) + "</p></div></div>");
    }

    if (s.topics && s.topics.length) {
      html.push('<div class="sec"><h4>Topics</h4><div class="rel-list">' +
        s.topics.map(function (t) { return '<span class="rel-btn">' + esc(topicLabel(t)) + "</span>"; }).join("") +
        "</div></div>");
    }

    if (s.related && s.related.length) {
      var links = s.related.filter(byCode);
      if (links.length) {
        html.push('<div class="sec"><h4>Read alongside</h4><div class="rel-list">' +
          links.map(function (c) {
            return '<button class="rel-btn" type="button" data-jump="' + esc(c) + '">' + esc(c) + "</button>";
          }).join("") + "</div></div>");
      }
    }

    html.push('<div class="sec"><a class="src-link" href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' +
              "Read the official standard <span class=\"arrow\">&rarr;</span></a></div>");

    html.push('<p class="disclaimer">' + esc(DB.meta.note || "") + "</p>");

    elDrawerBody.innerHTML = html.join("");
    elDrawerBody.scrollTop = 0;

    elDrawer.hidden = false;
    elScrim.hidden = false;
    // Force a reflow so the CSS transition has a start frame to animate from.
    // Deliberately not requestAnimationFrame: rAF is throttled to nothing in a
    // backgrounded or hidden tab, which would leave the panel parked off-screen.
    void elDrawer.offsetWidth;
    elDrawer.classList.add("show");
    elScrim.classList.add("show");
    $("drawer-close").focus();

    try { history.replaceState(null, "", "#" + encodeURIComponent(s.code)); } catch (e) {}
    markOpenRow();
  }

  function closeDrawer() {
    elDrawer.classList.remove("show");
    elScrim.classList.remove("show");
    state.openCode = null;
    markOpenRow();
    setTimeout(function () { elDrawer.hidden = true; elScrim.hidden = true; }, 220);
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
  }

  function markOpenRow() {
    Array.prototype.forEach.call(elLedger.querySelectorAll(".row"), function (r) {
      r.classList.toggle("is-open", r.dataset.code === state.openCode);
    });
  }

  /* -------------------------------- footer ------------------------------- */

  function renderFooter() {
    $("verified-date").textContent = DB.meta.verified || "—";
    $("total-count").textContent = ALL.length;

    $("sources").innerHTML = (DB.meta.sources || []).map(function (s) {
      return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener noreferrer">' + esc(s.label) + "</a></li>";
    }).join("");

    $("changelog").innerHTML = (DB.meta.changelog || []).map(function (c) {
      var link = c.code && byCode(c.code)
        ? ' <button type="button" data-jump="' + esc(c.code) + '">' + esc(c.code) + "</button>"
        : "";
      return '<div class="cl-item"><span class="cl-date">' + esc(c.date) + "</span>" +
             '<span class="cl-text">' + esc(c.text) + link + "</span></div>";
    }).join("");
  }

  /* -------------------------------- render ------------------------------- */

  function render() {
    var list = filtered();
    elShown.textContent = list.length;
    elAll.textContent = ALL.length;

    if (state.view === "library") renderLedger(list);
    else if (state.view === "timeline") renderTimeline(list);
    else renderBridge(list);

    markOpenRow();
  }

  function setView(v) {
    state.view = v;
    ["library", "timeline", "bridge"].forEach(function (name) {
      $("view-" + name).hidden = (name !== v);
      $("tab-" + name).setAttribute("aria-selected", name === v ? "true" : "false");
    });
    render();
  }

  /* -------------------------------- events ------------------------------- */

  var searchTimer;
  elQ.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { state.q = elQ.value.trim(); render(); }, 90);
  });

  document.querySelector(".views").addEventListener("click", function (e) {
    var t = e.target.closest("[data-view]");
    if (t) setView(t.dataset.view);
  });

  // one delegated handler covers ledger rows, timeline cards, bridge rows,
  // related-standard buttons in the drawer and the changelog links
  document.addEventListener("click", function (e) {
    var jump = e.target.closest("[data-jump]");
    if (jump) { openDrawer(jump.dataset.jump); return; }
    var hit = e.target.closest("[data-code]");
    if (hit) { openDrawer(hit.dataset.code); }
  });

  $("drawer-close").addEventListener("click", closeDrawer);
  elScrim.addEventListener("click", closeDrawer);

  $("reset").addEventListener("click", function () {
    state.families = {}; state.statuses = {}; state.topics = {}; state.q = "";
    elQ.value = "";
    Array.prototype.forEach.call(document.querySelectorAll("[data-kind]"), function (b) {
      b.setAttribute("aria-pressed", "false");
    });
    render();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!elDrawer.hidden) { closeDrawer(); }
      else if (document.activeElement === elQ) { elQ.value = ""; state.q = ""; render(); elQ.blur(); }
      return;
    }
    if (e.key === "/" && document.activeElement !== elQ) {
      var tag = (document.activeElement.tagName || "").toLowerCase();
      if (tag !== "input" && tag !== "textarea") { e.preventDefault(); elQ.focus(); elQ.select(); }
    }
  });

  /* --------------------------------- theme ------------------------------- */

  var THEME_KEY = "standards-ledger-theme";
  try {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") document.documentElement.setAttribute("data-theme", saved);
  } catch (e) { /* private window, blocked storage — the page still renders */ }

  $("theme-toggle").addEventListener("click", function () {
    var cur = document.documentElement.getAttribute("data-theme");
    var isDark = cur ? cur === "dark"
                     : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
  });

  /* --------------------------------- boot -------------------------------- */

  // Set via script rather than an <html lang> attribute: this same file is
  // published both as a standalone site and as an artifact, and the artifact
  // wraps the markup in its own document skeleton.
  document.documentElement.lang = "en-AU";

  buildFilters();
  renderFooter();
  render();

  // deep link: /#IFRS%2016 opens that standard
  if (location.hash.length > 1) {
    var want = decodeURIComponent(location.hash.slice(1));
    if (byCode(want)) openDrawer(want);
  }
})();
