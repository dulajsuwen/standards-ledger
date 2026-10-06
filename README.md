# The Standards Ledger

**Live: <https://dulajsuwen.github.io/standards-ledger/>**

A searchable reference covering every accounting standard that binds an Australian
reporter — AASB, IFRS, IAS, IFRIC, SIC and sustainability — with the Australian and
international numbering mapped side by side. Public, no sign-in.

No build step, no dependencies, no server required. It is plain HTML, CSS and
JavaScript reading a data folder.

---

## How it is deployed

| | |
|---|---|
| **Host** | GitHub Pages, from the `main` branch root |
| **Repo** | <https://github.com/dulajsuwen/standards-ledger> (public — required for free Pages) |
| **Publish** | `git push` to `main`. Pages redeploys in a minute or two. There is no build. |
| **Stays current** | A scheduled task checks the IASB and AASB daily, commits, pushes and republishes the artifact |

`.nojekyll` stops GitHub running Jekyll over the folder. `robots.txt` and
`sitemap.xml` are for search engines; `classic.html` and `prototype.html` are
excluded from indexing there and carry `noindex`.

### Two front ends, one data layer

- **`index.html`** — "Ledger Studio": Overview, Library, Dates, Compare, plus a
  personal reading list held in the viewer's own browser. This is the homepage.
- **`classic.html`** — the denser single-screen reference view. Not linked from
  the site; kept because it is faster to scan when you know what you want.

Both read the same `data/*.js`, so **adding a standard updates both**. You never
edit the HTML to add a record.

### Adding sign-in later

The site is deliberately static, so nothing here blocks it. When traffic justifies
accounts, the path is: move hosting to Vercel, add Supabase for auth and a
`profiles` table, and keep `data/*.js` exactly as it is — the catalogue stays
public and only the personal layer (saved standards, review marks, notes) moves
from `localStorage` to the database. The Web App Starter Kit's `auth.md` and
`supabase.md` pathways cover that migration.

---

## Running it

**Simplest:** double-click `index.html`. The data loads as plain scripts rather than
by `fetch`, specifically so the site works straight off the filesystem.

**With a local server** (needed only if you want clean URLs or are testing deployment):

```bash
python -m http.server 8777
```

Then open <http://localhost:8777>.

## Publishing it

Any static host works — Netlify, Cloudflare Pages, GitHub Pages, S3, or an internal
web server. Upload the whole folder as-is. There is nothing to compile.

---

## How it is organised

```
index.html                 page structure
assets/styles.css          all styling, themed light and dark
assets/app.js              search, filtering, the three views, the detail panel
data/00-db.js              metadata: verified date, sources, changelog
data/10-ifrs.js            Conceptual Framework + IFRS 1–20
data/20-ias.js             IAS 1–41
data/30-interpretations.js IFRIC + SIC
data/40-aasb.js            AASB 10xx series and recent amending standards
data/50-sustainability-adjacent.js
                           IFRS S1/S2, AASB S1/S2, and adjacent frameworks
                           (auditing standards, APES 110, Corporations Act,
                           US GAAP, IPSAS)
```

Each data file pushes records into one array. Load order is the order of the
`<script>` tags at the bottom of `index.html`.

### The three views

- **Library** — every pronouncement as a ruled ledger row, grouped by framework,
  filtered by framework / status / topic and searched by number, title or phrase.
- **Effective dates** — what changes and when, grouped by year. This is the view
  that answers "what do I need to be ready for".
- **AASB ↔ IFRS** — the numbering map. IFRS 15 is AASB 15; IAS 1 is AASB 101; the
  AASB 10xx standards have no international equivalent.

### Keyboard

| Key | Action |
| --- | --- |
| `/` | jump to search |
| `Esc` | close the detail panel, or clear the search box |

Deep links work: `index.html#IFRS%2016` opens that standard directly.

---

## Capturing new standards

This is the part that matters most. A reference that goes stale is worse than no
reference, because people trust it.

### The routine

Run this **monthly**, and always in **May/June** and **November/December**, when
both boards tend to issue.

1. **IASB — what was issued**
   <https://www.ifrs.org/news-and-events/news/> — filter for "issues" announcements.
2. **IASB — what is coming**
   <https://www.ifrs.org/projects/work-plan/> — shows expected issue dates, so you
   can anticipate rather than react.
3. **AASB — what was issued**
   <https://aasb.gov.au/news/> and the pronouncements portal
   <https://standards.aasb.gov.au/>.
4. **AASB — what applies this year**
   <https://standards.aasb.gov.au/new-standards-202526-and-earlier-financial-years>
5. **ISSB sustainability**
   <https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/>

### Adding a record

Copy an existing record in the relevant `data/*.js` file and edit it. Every record
uses this shape:

```js
{
  code:      "IFRS 20",              // primary citation
  au:        "AASB equivalent pending", // Australian equivalent, or null
  title:     "Regulatory Assets and Regulatory Liabilities",
  family:    "IFRS",                 // IFRS | IAS | IFRIC | SIC | AASB |
                                     // SUST | FRAMEWORK | ADJACENT
  status:    "future",               // active | future | sunsetting | superseded
  issued:    "2026-05",
  effective: "Annual periods beginning on or after 1 January 2029",
  effSort:   "2029-01-01",           // ISO date for the timeline; null if long in force
  topics:    ["regulatory", "revenue"],
  summary:   "One paragraph: what it covers, in plain language.",
  points:    ["The mechanics an accountant needs to hold in their head."],
  watch:     "The thing people most often get wrong.",
  related:   ["IFRS 14", "IFRS 15"], // codes; they become clickable links
  url:       "https://www.ifrs.org/..."
}
```

Then, in `data/00-db.js`:

- bump `meta.verified` to today, and
- add a line to `meta.changelog` (newest first) so the change shows in the footer.

### When a standard is superseded

Do not delete it. Set `status: "superseded"`, update `effective` to say what replaced
it and from when, and add the replacement to `related`. People still need to
understand comparatives and restatements, and someone will always arrive holding an
old citation.

### Status values, and what they mean

| Status | Meaning |
| --- | --- |
| `active` | in force now |
| `future` | issued but not yet effective — this is what the timeline is for |
| `sunsetting` | in force but with a known replacement date (IAS 1, IFRS 14) |
| `superseded` | no longer applies; kept for history and comparatives |

### Topic taxonomy

Reuse existing tags rather than inventing new ones — the filter cloud is generated
from whatever is in the data, so a typo becomes a new filter. Current tags:

`revenue` · `leases` · `financial-instruments` · `consolidation` ·
`business-combinations` · `assets` · `impairment` · `liabilities-provisions` ·
`employee-benefits` · `tax` · `presentation` · `disclosure` · `fair-value` ·
`foreign-currency` · `insurance` · `agriculture` · `extractives` · `public-sector` ·
`not-for-profit` · `sustainability` · `first-time-adoption` · `interim` · `segments` ·
`eps` · `cash-flows` · `inventories` · `related-parties` · `superannuation` ·
`equity` · `measurement` · `recognition` · `reduced-disclosure` · `regulatory` ·
`audit` · `assurance` · `ethics` · `legal` · `us-gaap`

To add a tag, also add a readable label to `TOPIC_LABEL` in `assets/app.js`.

---

## On copyright

The summaries, key points and pitfalls in `/data` are **original plain-language
explanations**, written for working accountants. They deliberately do not reproduce
the text of the standards.

The standards themselves are copyright — the IFRS Foundation for IFRS and IAS, and
the Commonwealth for AASB pronouncements. Do not paste standard text, paragraph
extracts or illustrative examples into this site. Every record links to the official
source instead, which is both the lawful and the more useful approach: the official
text is the authority, and it is the version that gets amended.

Keep the disclaimer in `meta.note` visible in the detail panel.

---

## Known gaps worth filling

- The AASB amending-standard series (`AASB 20xx-x`) is covered only for recent and
  significant amendments, not exhaustively. Add them as they affect your work.
- AASB deep links point to the pronouncements portal root rather than to individual
  PDFs, because the AASB's per-standard URLs change when a standard is reissued.
- Interpretations carry shorter summaries than standards, which reflects how they are
  used — as a specific answer to a specific question.

---

*Last verified 19 September 2026. Confirm any position against the official source
before relying on it.*
