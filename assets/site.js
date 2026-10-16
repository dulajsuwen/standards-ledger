/* =============================================================================
   THE STANDARDS LEDGER — homepage layer (index.html)

   app.js owns search, filters, the three catalogue views and the detail
   drawer. This file adds what only the homepage has: the overview, section
   switching, the reading list, and modal behaviour for the drawer.
   ========================================================================== */
(function () {
  "use strict";

  var DB = window.STANDARDS_DB || { meta: {}, standards: [] };
  var ALL = DB.standards;
  var $ = function (id) { return document.getElementById(id); };

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function byCode(code) {
    for (var i = 0; i < ALL.length; i++) { if (ALL[i].code === code) return ALL[i]; }
    return null;
  }
  function plural(n, word) { return n + " " + word + (n === 1 ? "" : "s"); }

  /* -------------------------------- dates -------------------------------- */

  // "Today" for an Australian reporter, as an ISO date that sorts against effSort.
  var TODAY = new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" });

  function utc(iso) { return Date.parse(iso + "T00:00:00Z"); }
  function fmt(iso, month) {
    return new Date(utc(iso)).toLocaleDateString("en-AU",
      { day: "numeric", month: month, year: "numeric", timeZone: "UTC" });
  }

  var upcoming = ALL.filter(function (s) {
    return s.effSort && s.effSort >= TODAY && s.status !== "superseded";
  }).sort(function (a, b) { return a.effSort < b.effSort ? -1 : a.effSort > b.effSort ? 1 : 0; });

  var dates = [];
  upcoming.forEach(function (s) { if (dates.indexOf(s.effSort) === -1) dates.push(s.effSort); });

  function onDate(iso) { return upcoming.filter(function (s) { return s.effSort === iso; }); }

  /* ------------------------------- sections ------------------------------ */

  var PAGES = {
    library:  ["Register", "Search by number, topic or phrase, then narrow by framework and status."],
    timeline: ["Effective dates", "Every standard with a dated change, in date order. Open one for its exact wording."],
    bridge:   ["AASB ↔ IFRS", "Each international standard beside its Australian number."]
  };
  var activePage = "home";

  function show(page, keepScroll) {
    activePage = page;
    var home = page === "home";
    $("view-home").hidden = !home;
    $("workbench").hidden = home;
    ["home", "library", "timeline", "bridge"].forEach(function (name) {
      $("tab-" + name).setAttribute("aria-selected", name === page ? "true" : "false");
    });
    if (!home) {
      $("section-title").textContent = PAGES[page][0];
      $("section-description").textContent = PAGES[page][1];
    }
    if (!keepScroll) window.scrollTo(0, 0);
  }

  // Programmatic navigation. The catalogue tabs belong to app.js, so going to
  // one means clicking it; the listener below then updates the page chrome.
  function go(page, keepScroll) {
    if (page === "home") { show("home", keepScroll); return; }
    pendingKeepScroll = !!keepScroll;
    $("tab-" + page).click();
  }
  var pendingKeepScroll = false;

  document.querySelector(".views").addEventListener("click", function (e) {
    var t = e.target.closest("[data-view]");
    if (t) { show(t.dataset.view, pendingKeepScroll); pendingKeepScroll = false; }
  });

  function filterBy(listId, key) {
    $("reset").click();
    go("library");
    var btn = document.querySelector("#" + listId + ' [data-key="' + key + '"]');
    if (btn) btn.click();
    syncFilterCount();
  }

  // Typing in the search box from the overview takes you to the results.
  $("q").addEventListener("input", function () {
    if (activePage === "home") go("library", true);
  });

  /* ------------------------------- overview ------------------------------ */

  function renderTotals() {
    var n = { active: 0, future: 0 };
    ALL.forEach(function (s) { if (n[s.status] != null) n[s.status]++; });
    $("count-active").textContent = n.active;
    $("count-future").textContent = n.future;
    // app.js prints the ISO date; the overview reads better with it written out.
    if (DB.meta.verified) $("verified-date").textContent = fmt(DB.meta.verified, "long");
  }

  function renderNext() {
    var el = $("next-card");
    if (!dates.length) {
      el.innerHTML = '<span class="next-label">Next effective date</span>' +
        '<p class="next-date">No dated changes ahead</p>' +
        '<p class="next-note">Nothing in the register has an effective date after today.</p>';
      return;
    }
    var iso = dates[0], list = onDate(iso);
    var days = Math.round((utc(iso) - utc(TODAY)) / 864e5);
    el.innerHTML =
      '<span class="next-label">Next effective date</span>' +
      '<p class="next-days"><strong>' + days + '</strong><span>' + (days === 1 ? "day" : "days") + '</span></p>' +
      '<p class="next-date">' + esc(fmt(iso, "long")) + '</p>' +
      '<p class="next-note">' + plural(list.length, "standard") + ' in the register ' +
        (list.length === 1 ? "has" : "have") + ' a change dated then, starting with ' + esc(list[0].code) + '.</p>' +
      '<button class="next-link" type="button" data-go="timeline">See every effective date <span aria-hidden="true">&rarr;</span></button>';
  }

  function renderRunway() {
    var el = $("runway");
    if (!dates.length) {
      el.parentNode.hidden = true;
      $("runway-list").innerHTML = '<p class="runway-empty">Nothing in the register has an effective date after today.</p>';
      return;
    }
    var y0 = +TODAY.slice(0, 4), y1 = +dates[dates.length - 1].slice(0, 4);
    var start = Date.UTC(y0, 0, 1), end = Date.UTC(y1 + 1, 0, 1);
    function pos(ms) { return ((ms - start) / (end - start) * 100).toFixed(3); }

    var html = [];
    var todayPos = pos(utc(TODAY));
    html.push('<span class="runway-elapsed" style="width:' + todayPos + '%"></span>');
    for (var y = y0; y <= y1; y++) {
      html.push('<span class="runway-tick" style="left:' + pos(Date.UTC(y, 0, 1)) + '%">' + y + '</span>');
    }
    html.push('<span class="runway-today' + (todayPos > 12 ? " flip" : "") + '" style="left:' + todayPos + '%">Today</span>');

    dates.forEach(function (iso, i) {
      var x = pos(utc(iso)), n = onDate(iso).length;
      // Alternate two heights so neighbouring flags never share a row.
      html.push('<button class="flag" type="button" data-date="' + iso +
        '" aria-pressed="false" style="left:' + x + '%;--stem:' + (i % 2 ? 98 : 30) + 'px">' +
        '<span class="flag-box"><b>' + esc(fmt(iso, "short")) + '</b><small>' + plural(n, "standard") + '</small></span></button>');
    });
    el.innerHTML = '<div class="runway-plot">' + html.join("") + "</div>";
    selectDate(dates[0]);
  }

  function selectDate(iso) {
    Array.prototype.forEach.call(document.querySelectorAll(".flag"), function (b) {
      b.setAttribute("aria-pressed", b.dataset.date === iso ? "true" : "false");
    });
    var list = onDate(iso);
    $("runway-list").innerHTML =
      "<h3>" + esc(fmt(iso, "long")) + " &middot; " + plural(list.length, "standard") + "</h3>" +
      list.map(function (s) {
        return '<button class="mini-row" type="button" data-jump="' + esc(s.code) + '">' +
          '<span class="c">' + esc(s.code) + '</span>' +
          '<span><span class="t">' + esc(s.title) + '</span><span class="d">' + esc(s.effective) + '</span></span></button>';
      }).join("");
  }

  var FAMILY = [
    ["IFRS", "IFRS Accounting Standards"], ["IAS", "IAS Standards"],
    ["IFRIC", "IFRIC Interpretations"], ["SIC", "SIC Interpretations"],
    ["AASB", "AASB, Australian only"], ["SUST", "Sustainability"],
    ["FRAMEWORK", "Conceptual Framework"], ["ADJACENT", "Adjacent frameworks"]
  ];

  function renderBars() {
    var counts = {}, max = 1;
    ALL.forEach(function (s) { counts[s.family] = (counts[s.family] || 0) + 1; });
    FAMILY.forEach(function (f) { max = Math.max(max, counts[f[0]] || 0); });
    $("family-bars").innerHTML = FAMILY.filter(function (f) { return counts[f[0]]; }).map(function (f) {
      var n = counts[f[0]];
      return '<button class="bar" type="button" data-family="' + f[0] + '" aria-label="' + esc(f[1]) + ", " + n + '. Show in the register">' +
        '<span class="l">' + esc(f[1]) + '</span><span class="n">' + n + '</span>' +
        '<span class="track"><span class="fill" style="width:' + (n / max * 100).toFixed(1) + '%"></span></span></button>';
    }).join("");
  }

  /* ----------------------------- reading list ---------------------------- */

  var STORE = "ledger-personal-review";
  var saved = [], reviewed = [], storageOK = true;
  try {
    var data = JSON.parse(localStorage.getItem(STORE) || "{}");
    if (Array.isArray(data.saved)) saved = data.saved.filter(function (c, i, a) { return byCode(c) && a.indexOf(c) === i; });
    if (Array.isArray(data.reviewed)) reviewed = data.reviewed.filter(function (c, i, a) { return saved.indexOf(c) !== -1 && a.indexOf(c) === i; });
  } catch (e) { storageOK = false; }

  function persist() {
    try { localStorage.setItem(STORE, JSON.stringify({ saved: saved, reviewed: reviewed })); }
    catch (e) { storageOK = false; }
    renderSaved();
  }

  function renderSaved() {
    $("saved-tally").textContent = saved.length ? reviewed.length + " of " + saved.length + " read" : "";
    $("storage-note").textContent = !saved.length ? "" :
      (storageOK ? "Kept in this browser only." : "This browser is blocking storage, so the list lasts for this visit only.") +
      " A tick is your own note, not a compliance assessment.";
    if (!saved.length) {
      $("saved-items").innerHTML = '<p class="saved-empty">Keep the standards you come back to here. Open any standard and choose Save to reading list.</p>' +
        '<button class="text-btn" type="button" data-go="library">Open the register &rarr;</button>';
      return;
    }
    $("saved-items").innerHTML = saved.map(function (code) {
      var s = byCode(code), done = reviewed.indexOf(code) !== -1;
      return '<div class="saved-row' + (done ? " is-done" : "") + '">' +
        '<button class="saved-check" type="button" data-review="' + esc(code) + '" aria-pressed="' + done +
          '" aria-label="Mark ' + esc(code) + ' as read">&#10003;</button>' +
        '<button class="saved-open" type="button" data-jump="' + esc(code) + '"><span class="c">' + esc(code) +
          '</span><span class="t">' + esc(s.title) + '</span></button>' +
        '<button class="saved-remove" type="button" data-remove="' + esc(code) + '" aria-label="Remove ' + esc(code) +
          ' from your reading list">&times;</button></div>';
    }).join("");
  }

  var toastTimer;
  function toast(text) {
    var el = $("feedback");
    el.textContent = text; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.hidden = true; }, 3200);
  }

  /* ---------------------------- drawer behaviour ------------------------- */

  var drawer = $("drawer"), drawerBody = $("drawer-body"), opener = null;

  // app.js rewrites the drawer body each time a standard opens; add the save
  // control back whenever that happens.
  function addDrawerTools() {
    if (drawerBody.querySelector(".drawer-tools")) return;
    var tag = drawer.querySelector(".drawer-code");
    var code = tag && tag.textContent;
    if (!code || !byCode(code)) return;
    var isSaved = saved.indexOf(code) !== -1;
    var tools = document.createElement("div");
    tools.className = "drawer-tools";
    tools.innerHTML = '<button class="btn" type="button" data-save="' + esc(code) + '" aria-pressed="' + isSaved + '">' +
      (isSaved ? "Saved to reading list" : "Save to reading list") + "</button>";
    drawerBody.insertBefore(tools, drawerBody.firstChild);
  }
  new MutationObserver(addDrawerTools).observe(drawerBody, { childList: true });

  function syncModal() {
    var open = !drawer.hidden;
    document.body.style.overflow = open ? "hidden" : "";
    Array.prototype.forEach.call(document.querySelectorAll(".top, main, .foot"), function (el) { el.inert = open; });
    if (open) addDrawerTools();
    else if (opener && opener.isConnected) { opener.focus(); opener = null; }
  }
  new MutationObserver(syncModal).observe(drawer, { attributes: true, attributeFilter: ["hidden"] });

  // Remember what opened the drawer so focus can go back there on close.
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-code], [data-jump]");
    if (t && !drawer.contains(t)) opener = t.closest("button, a, [tabindex]") || t;
  }, true);

  drawer.addEventListener("keydown", function (e) {
    if (e.key !== "Tab") return;
    var items = Array.prototype.filter.call(drawer.querySelectorAll("button, a[href]"),
      function (x) { return x.getClientRects().length; });
    if (!items.length) return;
    var first = items[0], last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  // Rows in the comparison table open the drawer; make them keyboard reachable.
  new MutationObserver(function () {
    Array.prototype.forEach.call(document.querySelectorAll("#bridge-body tr[data-code]"), function (row) {
      row.tabIndex = 0;
      row.setAttribute("aria-label", "Open " + row.dataset.code);
    });
  }).observe($("bridge-body"), { childList: true });
  $("bridge-body").addEventListener("keydown", function (e) {
    var row = e.target.closest("tr[data-code]");
    if (row && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); row.click(); }
  });

  /* ----------------------------- mobile filters -------------------------- */

  var rail = $("rail"), toggle = $("filters-toggle");
  function syncFilterCount() {
    var n = rail.querySelectorAll('[aria-pressed="true"]').length;
    toggle.textContent = n ? "Filters · " + n : "Filters";
  }
  toggle.addEventListener("click", function () {
    var open = rail.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  rail.addEventListener("click", function () { setTimeout(syncFilterCount, 0); });

  /* --------------------------------- clicks ------------------------------ */

  document.addEventListener("click", function (e) {
    var t;
    if ((t = e.target.closest("[data-go]"))) { go(t.dataset.go); return; }
    if ((t = e.target.closest("[data-stat]"))) {
      if (t.dataset.stat === "all") { $("reset").click(); go("library"); syncFilterCount(); }
      else filterBy("status-filters", t.dataset.stat);
      return;
    }
    if ((t = e.target.closest("[data-family]"))) { filterBy("family-filters", t.dataset.family); return; }
    if ((t = e.target.closest("[data-date]"))) { selectDate(t.dataset.date); return; }

    if ((t = e.target.closest("[data-save]"))) {
      var code = t.dataset.save, i = saved.indexOf(code);
      if (i === -1) { saved.push(code); toast("Saved. Your reading list is on the overview."); }
      else {
        saved.splice(i, 1);
        reviewed = reviewed.filter(function (c) { return c !== code; });
        toast("Removed from your reading list.");
      }
      t.setAttribute("aria-pressed", i === -1 ? "true" : "false");
      t.textContent = i === -1 ? "Saved to reading list" : "Save to reading list";
      persist();
      return;
    }
    if ((t = e.target.closest("[data-review]"))) {
      var rc = t.dataset.review, ri = reviewed.indexOf(rc);
      if (ri === -1) reviewed.push(rc); else reviewed.splice(ri, 1);
      persist();
      var again = document.querySelector('[data-review="' + rc.replace(/"/g, '\\"') + '"]');
      if (again) again.focus();
      return;
    }
    if ((t = e.target.closest("[data-remove]"))) {
      var x = t.dataset.remove;
      saved = saved.filter(function (c) { return c !== x; });
      reviewed = reviewed.filter(function (c) { return c !== x; });
      persist();
      toast("Removed from your reading list.");
    }
  });

  /* ---------------------------------- boot ------------------------------- */

  renderTotals();
  renderNext();
  renderRunway();
  renderBars();
  renderSaved();
  show("home", true);
  syncModal();
})();
