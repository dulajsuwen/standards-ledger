/* ============================================================================
   STANDARDS DATABASE — initialiser and shared metadata.

   The database is split across the files in this folder so that each framework
   can be maintained on its own. They are loaded in filename order by index.html
   and each one pushes its records into window.STANDARDS_DB.standards.

   Loaded as plain scripts (not fetched) so the site works from file://, from
   any static host, and from a published artifact — no server, no build step.

   ---------------------------------------------------------------------------
   FIELD REFERENCE — every record uses this shape
   ---------------------------------------------------------------------------
     code      primary citation, e.g. "IFRS 15"
     au        Australian equivalent, e.g. "AASB 15"  (null where none exists)
     title     official title of the standard
     family    IFRS | IAS | IFRIC | SIC | AASB | SUST | FRAMEWORK | ADJACENT
     status    active | future | sunsetting | superseded
     issued    "YYYY-MM" the standard was issued
     effective plain-English effective date, written for a human
     effSort   ISO date used to place it on the timeline (null = long in force)
     topics    tags — see the taxonomy in README.md
     summary   what it covers, in plain language
     points    the mechanics an accountant needs to hold in their head
     watch     the thing people most often get wrong
     related   codes of standards you almost always read alongside it
     url       official source

   To add a newly issued standard, copy a record in the relevant file, edit it,
   and bump `verified` below. See README.md → "Capturing new standards".
   ========================================================================== */

window.STANDARDS_DB = {
  meta: {
    verified: "2026-09-29",
    note:
      "Summaries here are original plain-language explanations written for " +
      "working accountants. They are not the text of the standards and are not " +
      "a substitute for it. Confirm against the official source before relying " +
      "on a position.",
    sources: [
      { label: "IFRS Accounting Standards (IASB)", url: "https://www.ifrs.org/issued-standards/list-of-standards/" },
      { label: "AASB Pronouncements Portal", url: "https://standards.aasb.gov.au/" },
      { label: "IFRS Sustainability Standards (ISSB)", url: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/" },
      { label: "IASB work plan — what is coming", url: "https://www.ifrs.org/projects/work-plan/" },
      { label: "AASB news & recent pronouncements", url: "https://aasb.gov.au/news/" }
    ],
    // Shown in the "What changed recently" panel. Newest first.
    changelog: [
      { date: "2026-09-03", text: "AASB 2026-4 gives superannuation and not-for-profit public sector entities targeted relief under AASB 18 and AASB 107 and clarifies the operating cash flow reconciliation, effective 1 Jan 2028.", code: "AASB 2026-4" },
      { date: "2026-08-13", text: "AASB 2026-3 clarifies which entities can use the fair value option for associates and joint ventures in AASB 128, effective 1 Jan 2027.", code: "AASB 2026-3" },
      { date: "2026-05-27", text: "IASB issued IFRS 20 Regulatory Assets and Regulatory Liabilities, effective 1 Jan 2029. Supersedes IFRS 14.", code: "IFRS 20" },
      { date: "2026-04-30", text: "AASB issued AASB 1061, the Tier 3 standard for smaller not-for-profit private sector entities, effective 1 Jul 2029.", code: "AASB 1061" },
      { date: "2026-04-30", text: "AASB 2026-2 extends the Conceptual Framework to not-for-profit entities and limits special purpose financial statements, effective 1 Jul 2029.", code: "AASB 2026-2" },
      { date: "2026-02-01", text: "IASB issued Annual Improvements to IFRS Accounting Standards — Volume 11.", code: null },
      { date: "2026-01-01", text: "AASB 2026-1 adds illustrative examples on disclosing estimation uncertainty to AASB 136 and AASB 137.", code: "AASB 2026-1" },
      { date: "2025-01-01", text: "AASB S2 Climate-related Disclosures became mandatory for Group 1 entities in Australia.", code: "AASB S2" }
    ]
  },
  standards: []
};

/** Helper used by every data file in this folder. */
window.addStandards = function (records) {
  window.STANDARDS_DB.standards.push.apply(window.STANDARDS_DB.standards, records);
};
