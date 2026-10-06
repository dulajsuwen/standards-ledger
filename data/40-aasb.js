/* Australian-only pronouncements — the AASB 10xx series, the AASB framework
   standards, and recent amending standards. These have no IFRS equivalent and
   are where Australian practice genuinely diverges from the international text. */

window.addStandards([

{
  code: "AASB 1004", au: "AASB 1004", title: "Contributions",
  family: "AASB", status: "active", issued: "2007-12",
  effective: "In force. Scope substantially narrowed by AASB 1058 from 1 January 2019.", effSort: null,
  topics: ["not-for-profit", "public-sector", "revenue"],
  summary: "Once the main Australian standard for contributions received by not-for-profit and public sector entities. AASB 1058 took over most of its territory, leaving AASB 1004 to deal with contributions by owners, restructures of administrative arrangements and transfers between government entities.",
  points: [
    "Now largely confined to contributions by owners and to transfers of assets between government departments and agencies.",
    "Restructures of administrative arrangements are recognised at the transferor's carrying amounts.",
    "Income from grants and donations generally sits in AASB 1058 or AASB 15."
  ],
  watch: "Citing AASB 1004 for ordinary grant income. Since 2019 that analysis almost always starts in AASB 15 and falls back to AASB 1058.",
  related: ["AASB 1058", "IFRS 15", "AASB 1050"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1023", au: "AASB 1023", title: "General Insurance Contracts",
  family: "AASB", status: "superseded", issued: "2004-07",
  effective: "Superseded by AASB 17 for periods beginning on or after 1 January 2023", effSort: null,
  topics: ["insurance"],
  summary: "The long-standing Australian general insurance standard, with its premium liability and outstanding claims liability model. Replaced by AASB 17.",
  points: ["Retained for historical reference and for understanding transition comparatives."],
  watch: "Legacy margin-on-services and premium liability language does not survive into AASB 17.",
  related: ["IFRS 17"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1038", au: "AASB 1038", title: "Life Insurance Contracts",
  family: "AASB", status: "superseded", issued: "2005-07",
  effective: "Superseded by AASB 17 for periods beginning on or after 1 January 2023", effSort: null,
  topics: ["insurance"],
  summary: "The Australian life insurance standard, built on margin on services. Replaced by AASB 17.",
  points: ["Retained for historical reference."],
  watch: "Superseded — start any current life insurance question in AASB 17.",
  related: ["IFRS 17"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1039", au: "AASB 1039", title: "Concise Financial Reports",
  family: "AASB", status: "active", issued: "2008-08",
  effective: "In force", effSort: null,
  topics: ["presentation", "disclosure"],
  summary: "The content requirements for a concise financial report — the shorter document a company may send to members under the Corporations Act instead of the full financial report.",
  points: [
    "The concise report is derived from the full financial report and must include a statement that it is.",
    "It carries the primary statements plus discussion and analysis, and the directors' declaration.",
    "The auditor reports separately on the concise report.",
    "Members retain the right to request the full financial report."
  ],
  watch: "Purely an Australian Corporations Act construct — it has no IFRS counterpart.",
  related: ["IAS 1", "AASB 1054"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1048", au: "AASB 1048", title: "Interpretation of Standards",
  family: "AASB", status: "active", issued: "2007-12",
  effective: "Reissued regularly — always check the current version", effSort: null,
  topics: ["presentation"],
  summary: "The standard that gives AASB Interpretations their legal force. It is simply a list, updated each time an interpretation is issued, amended or withdrawn.",
  points: [
    "Without AASB 1048, interpretations would have no mandatory status in Australia.",
    "Reissued frequently, so the version you cite matters.",
    "A quick way to confirm which interpretations are currently on issue in Australia."
  ],
  watch: "Check the current version before relying on an interpretation's Australian status.",
  related: ["AASB 1057", "IFRIC 12"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1049", au: "AASB 1049", title: "Whole of Government and General Government Sector Financial Reporting",
  family: "AASB", status: "active", issued: "2007-10",
  effective: "In force since 1 July 2008", effSort: null,
  topics: ["public-sector", "presentation"],
  summary: "Harmonises Australian Accounting Standards with Government Finance Statistics for whole-of-government and general government sector reports, so the accounts and the fiscal aggregates can be reconciled.",
  points: [
    "Applies to the Australian Government and each state and territory government.",
    "Requires the GFS key fiscal aggregates, including the net operating balance and net lending or borrowing.",
    "Where GAAP and GFS differ, GAAP prevails in the primary statements with GFS reconciled in the notes.",
    "Requires disclosure of budgeted amounts and explanation of major variances."
  ],
  watch: "A specialist public sector standard — but the GAAP/GFS reconciliation is the part most often misunderstood.",
  related: ["AASB 1055", "AASB 1050", "AASB 1052"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1050", au: "AASB 1050", title: "Administered Items",
  family: "AASB", status: "active", issued: "2007-12",
  effective: "In force since 1 July 2008", effSort: null,
  topics: ["public-sector", "disclosure"],
  summary: "Requires a government department to distinguish the resources it controls from those it merely administers on behalf of government, such as taxes collected or benefits paid under legislation.",
  points: [
    "Administered items are disclosed separately from controlled items.",
    "Administered income, expenses, assets and liabilities are presented in schedules or columns.",
    "The distinction turns on control, consistent with the Conceptual Framework."
  ],
  watch: "Bringing administered revenue into the department's own operating result overstates the department's activity substantially.",
  related: ["AASB 1049", "AASB 1052", "AASB 1004"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1051", au: "AASB 1051", title: "Land Under Roads",
  family: "AASB", status: "active", issued: "2007-12",
  effective: "In force since 1 July 2008", effSort: null,
  topics: ["public-sector", "assets"],
  summary: "A transitional election for land under roads acquired before 1 July 2008: recognise it or do not, but make the choice explicitly and apply it consistently. Land under roads acquired after that date follows AASB 116.",
  points: [
    "The election applies only to land under roads acquired before 1 July 2008.",
    "Later acquisitions are accounted for under AASB 116 as property, plant and equipment.",
    "The policy adopted must be disclosed."
  ],
  watch: "A distinctly Australian standard with no IFRS counterpart, and a common source of inconsistency between councils.",
  related: ["IAS 16", "AASB 1049"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1052", au: "AASB 1052", title: "Disaggregated Disclosures",
  family: "AASB", status: "active", issued: "2007-12",
  effective: "In force since 1 July 2008", effSort: null,
  topics: ["public-sector", "disclosure"],
  summary: "Requires local governments and government departments to report by function or activity, so users can see what each service area costs and what assets it uses.",
  points: [
    "Disclose income, expenses and assets attributable to each broad function or activity.",
    "Local governments also disclose the components of their rates and other revenue.",
    "Serves the same transparency purpose as segment reporting, adapted for the public sector."
  ],
  watch: "Function definitions need to be stable year to year or the disclosure loses its comparative value.",
  related: ["IFRS 8", "AASB 1049", "AASB 1050"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1053", au: "AASB 1053", title: "Application of Tiers of Australian Accounting Standards",
  family: "AASB", status: "active", issued: "2010-06",
  effective: "In force. Reshaped for not-for-profits by AASB 1061 and AASB 2026-2 from 1 July 2029.", effSort: null,
  topics: ["reduced-disclosure", "presentation"],
  summary: "The map of Australia's reporting tiers. Tier 1 is full Australian Accounting Standards; Tier 2 is the same recognition and measurement with Simplified Disclosures; and from 1 July 2029 Tier 3 offers smaller not-for-profits a genuinely simplified standard.",
  points: [
    "Tier 1 applies to for-profit entities with public accountability and to the Australian Government and state, territory and local governments.",
    "Tier 2 applies to other entities preparing general purpose financial statements, with disclosures set by AASB 1060.",
    "Tier 3, in AASB 1061, becomes available to smaller not-for-profit private sector entities for periods beginning on or after 1 July 2029.",
    "Recognition and measurement are identical across Tier 1 and Tier 2 — only disclosure differs."
  ],
  watch: "This is the first standard to open on any Australian engagement. Getting the tier wrong makes every downstream disclosure judgement wrong too.",
  related: ["AASB 1060", "AASB 1061", "AASB 1057", "IFRS 19"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1054", au: "AASB 1054", title: "Australian Additional Disclosures",
  family: "AASB", status: "active", issued: "2011-05",
  effective: "In force since 1 July 2011", effSort: null,
  topics: ["disclosure"],
  summary: "The disclosures Australia requires on top of IFRS — the ones that make an Australian financial report look different from a European one.",
  points: [
    "A statement of compliance with IFRS where the entity is entitled to make one.",
    "Whether the financial statements are general purpose or special purpose.",
    "Audit fees, split between audit and non-audit services, with a description of the non-audit work.",
    "Whether the entity is for-profit or not-for-profit.",
    "Reconciliation of net operating cash flow to profit or loss where the direct method is used."
  ],
  watch: "The audit fee note. Splitting audit from non-audit services and describing the non-audit engagements is required, not optional.",
  related: ["IAS 1", "AASB 1053", "AASB 1060"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1055", au: "AASB 1055", title: "Budgetary Reporting",
  family: "AASB", status: "active", issued: "2013-03",
  effective: "In force since 1 July 2014", effSort: null,
  topics: ["public-sector", "disclosure"],
  summary: "Where a public sector entity's budget was made publicly available, the financial statements must present the original budget alongside actuals and explain the major variances.",
  points: [
    "Applies to the whole of government, the general government sector, and not-for-profit public sector entities within them.",
    "The comparison uses the original budget, not a revised or supplementary one.",
    "Major variances must be explained, not merely quantified.",
    "Only bites where the budget was publicly available."
  ],
  watch: "Comparing against a revised budget defeats the accountability purpose. It is the original budget that was presented to parliament.",
  related: ["AASB 1049", "AASB 1052"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1056", au: "AASB 1056", title: "Superannuation Entities",
  family: "AASB", status: "active", issued: "2014-06",
  effective: "In force since 1 July 2016", effSort: null,
  topics: ["superannuation", "employee-benefits"],
  summary: "The Australian reporting framework for superannuation funds themselves. It replaced AAS 25 and brought member liabilities and fund assets onto a fair value footing.",
  points: [
    "Assets are measured at fair value, with changes through profit or loss.",
    "Defined contribution member liabilities are measured as the amount of member account balances.",
    "Defined benefit member liabilities are measured at the present value of expected future payments.",
    "Requires a statement of changes in member benefits, which has no equivalent in a corporate report.",
    "Disaggregated disclosures are required for defined benefit member information."
  ],
  watch: "Australian superannuation funds apply AASB 1056, not AASB 126. They are different frameworks with different statements.",
  related: ["IAS 26", "IFRS 13", "IAS 19"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1057", au: "AASB 1057", title: "Application of Australian Accounting Standards",
  family: "AASB", status: "active", issued: "2015-07",
  effective: "In force since 1 January 2016", effSort: null,
  topics: ["presentation"],
  summary: "Sets out which entities and which financial statements each Australian Accounting Standard applies to — the application paragraphs, pulled out of the individual standards and gathered in one place.",
  points: [
    "Removes application scope from each standard so the standards themselves read closer to the IFRS text.",
    "Read alongside AASB 1053 when working out what a particular entity must actually apply.",
    "Covers entities required by the Corporations Act, by other legislation, and by their own constituting documents."
  ],
  watch: "Easy to skip past, but it is the standard that answers 'does this apply to us at all'.",
  related: ["AASB 1053", "AASB 1048"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1058", au: "AASB 1058", title: "Income of Not-for-Profit Entities",
  family: "AASB", status: "active", issued: "2016-12",
  effective: "In force since 1 January 2019", effSort: null,
  topics: ["not-for-profit", "revenue"],
  summary: "The residual income standard for not-for-profits. Where a transaction is not an enforceable contract with sufficiently specific performance obligations, it does not go through AASB 15 — it lands here, and income is generally recognised immediately.",
  points: [
    "Work AASB 15 first. Only if the arrangement fails the enforceable-and-sufficiently-specific test does AASB 1058 apply.",
    "Recognise the asset at fair value, recognise any related liabilities under other standards, and take the residual to income immediately.",
    "Volunteer services may be recognised by local governments and government entities where fair value is reliably measurable, and must be where they would otherwise have been purchased.",
    "Assets acquired at significantly below fair value to further the entity's objectives — a peppercorn lease, a donated building — are measured at fair value with the discount recognised as income.",
    "Capital grants to construct a recognisable non-financial asset create a liability released as the asset is built."
  ],
  watch: "The immediate income recognition catches out NFP boards constantly. A multi-year grant without sufficiently specific performance obligations is income in year one, producing a large surplus followed by deficits.",
  related: ["IFRS 15", "AASB 1004", "IAS 20", "AASB 1061"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1059", au: "AASB 1059", title: "Service Concession Arrangements: Grantors",
  family: "AASB", status: "active", issued: "2017-07",
  effective: "In force since 1 January 2020", effSort: null,
  topics: ["public-sector", "assets"],
  summary: "The government side of a public-private partnership — the mirror of IFRIC 12. The grantor recognises the service concession asset and a corresponding liability, so the infrastructure appears on the public balance sheet.",
  points: [
    "The grantor recognises the asset where it controls or regulates the services provided, to whom, at what price, and retains a significant residual interest.",
    "The asset is measured at current replacement cost on initial recognition where it was not previously recognised.",
    "A corresponding financial liability or grant of a right to the operator liability is recognised.",
    "Applies to not-for-profit public sector entities."
  ],
  watch: "Both sides of the same toll road, hospital or prison are accounted for — the operator under AASB Interpretation 12, the grantor under AASB 1059.",
  related: ["IFRIC 12", "SIC-29", "IAS 16"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1060", au: "AASB 1060", title: "General Purpose Financial Statements — Simplified Disclosures for For-Profit and Not-for-Profit Tier 2 Entities",
  family: "AASB", status: "active", issued: "2020-03",
  effective: "In force since 1 July 2021", effSort: null,
  topics: ["reduced-disclosure", "disclosure"],
  summary: "The Tier 2 disclosure regime. Full recognition and measurement under Australian Accounting Standards, with a single self-contained set of simplified disclosures replacing the notes required by every other standard.",
  points: [
    "Replaced the old Reduced Disclosure Requirements regime, which worked by shading out paragraphs across dozens of standards.",
    "Recognition and measurement are unchanged from Tier 1 — this is disclosure relief only.",
    "Self-contained, so you read AASB 1060 for the notes rather than each standard's disclosure section.",
    "Broadly the Australian counterpart of IFRS 19."
  ],
  watch: "Tier 2 relief is disclosure only. It never changes how a number is measured, and 'we're Tier 2' is not an answer to a recognition question.",
  related: ["AASB 1053", "IFRS 19", "AASB 1061"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 1061", au: "AASB 1061", title: "General Purpose Financial Statements — Not-for-Profit Private Sector Tier 3 Entities",
  family: "AASB", status: "future", issued: "2026-04",
  effective: "Annual periods beginning on or after 1 July 2029; early adoption permitted", effSort: "2029-07-01",
  topics: ["not-for-profit", "reduced-disclosure"],
  summary: "Issued in April 2026, this is the long-awaited Tier 3 standard. Unlike Tier 2, it simplifies recognition and measurement as well as disclosure, and is written as a stand-alone document in plainer language for smaller not-for-profit private sector entities.",
  points: [
    "Stand-alone: a preparer works from AASB 1061 rather than cross-referring to the full suite of standards.",
    "Simplified recognition and measurement, not just reduced disclosure — this is what makes Tier 3 genuinely different from Tier 2.",
    "Aimed at smaller not-for-profit private sector entities such as charities and community organisations.",
    "Operates alongside AASB 2026-2, which extends the Conceptual Framework to not-for-profits and limits their ability to prepare special purpose financial statements.",
    "Effective for periods beginning on or after 1 July 2029, with early adoption permitted."
  ],
  watch: "The long lead time is not a reason to ignore it. Entities currently preparing special purpose financial statements need to plan the move now, because AASB 2026-2 closes that door at the same date.",
  related: ["AASB 1053", "AASB 1060", "AASB 1058", "AASB 2026-2"],
  url: "https://aasb.gov.au/news/new-tier-3-standard/"
},

/* ---------- RECENT AMENDING STANDARDS ---------- */
{
  code: "AASB 2026-1", au: "AASB 2026-1", title: "Amendments to Australian Accounting Standards — Disclosures about Uncertainties in the Financial Statements",
  family: "AASB", status: "active", issued: "2026-01",
  effective: "Applies for the 2025/26 financial year onwards", effSort: "2026-01-01",
  topics: ["disclosure", "impairment", "liabilities-provisions"],
  summary: "Adds illustrative examples showing how to disclose estimation uncertainty — specifically around the recoverable amount of assets under AASB 136 and decommissioning and restoration liabilities under AASB 137.",
  points: [
    "Adds examples only. It imposes no new requirements on preparers.",
    "Targets the quality of the estimation uncertainty note, a persistent regulator focus area.",
    "Read alongside the existing AASB 101 requirement to disclose sources of estimation uncertainty."
  ],
  watch: "Examples are not requirements, but they set the expectation an auditor or regulator will measure your note against.",
  related: ["IAS 36", "IAS 37", "IAS 1"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 2026-2", au: "AASB 2026-2", title: "Amendments to Australian Accounting Standards — Extending the Application of the Conceptual Framework and Limiting the Ability of Not-for-Profit Entities to Prepare Special Purpose Financial Statements",
  family: "AASB", status: "future", issued: "2026-06",
  effective: "Annual periods beginning on or after 1 July 2029; early adoption permitted", effSort: "2029-07-01",
  topics: ["not-for-profit", "presentation"],
  summary: "The structural companion to AASB 1061. It extends the Conceptual Framework to not-for-profit entities and closes off special purpose financial statements for many of them, bringing the not-for-profit framework closer to the for-profit one.",
  points: [
    "Extends the Conceptual Framework's reach beyond for-profit private sector entities.",
    "Limits which not-for-profit entities may prepare special purpose financial statements.",
    "Affected entities move to Tier 1, Tier 2 (AASB 1060) or Tier 3 (AASB 1061) general purpose financial statements.",
    "Effective for periods beginning on or after 1 July 2029, aligned with AASB 1061."
  ],
  watch: "This is the change that actually forces the transition. AASB 1061 offers the easier landing place; AASB 2026-2 removes the option of staying put.",
  related: ["AASB 1061", "AASB 1053", "Conceptual Framework"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 2026-3", au: "AASB 2026-3", title: "Amendments to Australian Accounting Standards — Amendments to the Fair Value Option for Investments in Associates and Joint Ventures",
  family: "AASB", status: "future", issued: "2026-08",
  effective: "Annual periods beginning on or after 1 January 2027 (1 January 2028 for not-for-profit entities and superannuation entities applying AASB 1056); early adoption permitted", effSort: "2027-01-01",
  topics: ["consolidation", "fair-value", "presentation"],
  summary: "A narrow amendment to AASB 128 clarifying which entities may measure their investments in associates and joint ventures at fair value through profit or loss instead of using the equity method. It matters more now because AASB 18 makes the classification of that income more visible.",
  points: [
    "Amends AASB 128. The fair value option is only open to venture capital organisations, mutual funds, unit trusts and similar entities.",
    "Clarifies what counts as a 'similar entity' by reference to the categories of business activity described in AASB 18.",
    "Practice had varied on who qualifies, and AASB 18 makes the answer show up in profit or loss classification, so more entities are looking at the election.",
    "Effective for periods beginning on or after 1 January 2027, with a later 1 January 2028 date for not-for-profit entities and superannuation entities applying AASB 1056. Early adoption is permitted."
  ],
  watch: "Do not assume an entity that holds investments qualifies. Read the clarified definition against what the entity's main business actually is before electing fair value, because the election has to be defensible on that test, not on convenience.",
  related: ["IAS 28", "IFRS 9", "IFRS 18", "AASB 1056"],
  url: "https://aasb.gov.au/news/amendments-to-the-fair-value-option-for-investments-in-associates-and-joint-ventures/"
},
{
  code: "AASB 2026-4", au: "AASB 2026-4", title: "Amendments to Australian Accounting Standards — Application of AASB 18 and AASB 107 by Superannuation and Not-for-Profit Entities and Operating Cash Flow Reconciliation",
  family: "AASB", status: "future", issued: "2026-09",
  effective: "Annual periods beginning on or after 1 January 2028; the AASB 1039 and AASB 1054 amendments apply to for-profit entities from 1 January 2027; early adoption permitted", effSort: "2027-01-01",
  topics: ["presentation", "cash-flows", "superannuation", "not-for-profit", "public-sector"],
  summary: "Provides targeted relief for superannuation entities and not-for-profit public sector entities (other than higher education providers) applying AASB 18 and the related AASB 107 changes, and clarifies the operating cash flow reconciliation requirements.",
  points: [
    "Amends AASB 18, AASB 107, AASB 1039 and AASB 1054.",
    "Relief is aimed at superannuation entities and not-for-profit public sector entities, excluding higher education providers.",
    "Both AASB 18 and AASB 107 gain a definition of 'higher education provider' so the scope of the relief is clear.",
    "Clarifies the operating cash flow reconciliation, with matching amendments to AASB 1039 and AASB 1054.",
    "Effective from 1 January 2028, except the AASB 1039 and AASB 1054 amendments, which apply to for-profit entities from 1 January 2027. Early adoption is permitted."
  ],
  watch: "AASB 18 was already deferred to 2028 for these entities, so this is the detail behind that deferral rather than a new deadline. Check which tier of entity you are before reading the relief, because the split between for-profit and not-for-profit dates is easy to mix up.",
  related: ["IFRS 18", "IAS 7", "AASB 1056", "AASB 1039", "AASB 1054"],
  url: "https://aasb.gov.au/news/application-of-aasb-18-and-aasb-107-by-superannuation-and-not-for-profit-entities-and-operating-cash-flow-reconciliation/"
},
{
  code: "AASB 2023-5", au: "AASB 2023-5", title: "Amendments to Australian Accounting Standards — Lack of Exchangeability",
  family: "AASB", status: "active", issued: "2023-12",
  effective: "Annual periods beginning on or after 1 January 2025", effSort: "2025-01-01",
  topics: ["foreign-currency"],
  summary: "Amends AASB 121 to specify when a currency is exchangeable into another, and how to estimate a spot rate when it is not — a response to situations such as restricted or dual-rate currencies.",
  points: [
    "A currency is exchangeable when an entity can obtain the other currency within a normal administrative delay through a market with enforceable rights.",
    "Where it is not exchangeable, the entity estimates the spot rate that would apply in an orderly transaction.",
    "Additional disclosure is required about the nature and effect of the lack of exchangeability."
  ],
  watch: "Relevant to Australian groups with operations in countries operating capital controls or multiple official rates.",
  related: ["IAS 21", "IAS 29"],
  url: "https://standards.aasb.gov.au/"
},
{
  code: "AASB 2024-4", au: "AASB 2024-4", title: "Amendments to Australian Accounting Standards — Effective Date of Amendments to AASB 10 and AASB 128",
  family: "AASB", status: "active", issued: "2024-01",
  effective: "Applies for the 2025/26 financial year onwards", effSort: "2025-07-01",
  topics: ["consolidation"],
  summary: "Continues the indefinite deferral of the amendments addressing the conflict between AASB 10 and AASB 128 on gains from the sale or contribution of assets to an associate or joint venture.",
  points: [
    "The underlying conflict — full gain under AASB 10 versus partial gain under AASB 128 — remains unresolved internationally.",
    "The amendments are deferred until the IASB completes its equity method research project.",
    "Entities continue applying the existing requirements in the meantime."
  ],
  watch: "A long-running unresolved conflict. Check the current deferral position before concluding on a downstream asset sale to an associate.",
  related: ["IFRS 10", "IAS 28"],
  url: "https://standards.aasb.gov.au/"
}

]);
