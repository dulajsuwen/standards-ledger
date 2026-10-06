/* IFRS Accounting Standards (IASB) + the Conceptual Framework.
   Australian equivalents are the AASB standards of the same number. */

window.addStandards([

/* ---------- CONCEPTUAL FRAMEWORK ---------- */
{
  code: "Conceptual Framework", au: "AASB Conceptual Framework",
  title: "Conceptual Framework for Financial Reporting",
  family: "FRAMEWORK", status: "active", issued: "2018-03",
  effective: "In force. Applied by Australian for-profit private sector entities for periods from 1 Jan 2020; AASB 2026-2 extends its reach from 1 Jul 2029.",
  effSort: null,
  topics: ["presentation", "recognition"],
  summary: "Not a standard you apply directly — it is the reasoning system behind every standard. It defines what an asset and a liability actually are, when to recognise and derecognise them, what measurement bases exist, and what makes information useful.",
  points: [
    "Asset = a present economic resource controlled as a result of past events. Liability = a present obligation to transfer an economic resource. There is no 'probable inflow' hurdle in the definitions themselves — probability affects recognition and measurement, not existence.",
    "Fundamental qualitative characteristics are relevance and faithful representation; comparability, verifiability, timeliness and understandability enhance them.",
    "Measurement bases are historical cost and current value (fair value, value in use and fulfilment value, current cost). The Framework does not mandate one.",
    "You fall back on it under IAS 8 / AASB 108 when no standard addresses a transaction."
  ],
  watch: "Arguing a position 'from the Framework' when a specific standard already covers the transaction. The hierarchy runs specific standard first, Framework last.",
  related: ["IAS 8", "IAS 1", "IFRS 18"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/"
},

/* ---------- IFRS 1 – 20 ---------- */
{
  code: "IFRS 1", au: "AASB 1", title: "First-time Adoption of International Financial Reporting Standards",
  family: "IFRS", status: "active", issued: "2003-06",
  effective: "In force since 1 January 2004", effSort: null,
  topics: ["first-time-adoption", "presentation"],
  summary: "The one-off rulebook for an entity's first IFRS financial statements. It requires full retrospective restatement back to an opening balance sheet at the transition date, then hands back a list of exemptions and mandatory exceptions so the exercise stays practical.",
  points: [
    "Build an opening IFRS statement of financial position at the transition date — the start of the earliest comparative period presented.",
    "Optional exemptions (deemed cost for PPE, past business combinations, cumulative translation differences) are elective; each is a policy decision to document.",
    "Mandatory exceptions (estimates, derecognition of financial assets, hedge accounting, non-controlling interests) stop you rewriting history with hindsight.",
    "Reconciliations of equity and total comprehensive income from previous GAAP to IFRS are required disclosure."
  ],
  watch: "Using hindsight when re-creating estimates at the transition date. Estimates must be consistent with what was known then, corrected only for genuine error.",
  related: ["IAS 8", "IFRS 18"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-1-first-time-adoption-of-international-financial-reporting-standards/"
},
{
  code: "IFRS 2", au: "AASB 2", title: "Share-based Payment",
  family: "IFRS", status: "active", issued: "2004-02",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["employee-benefits", "equity"],
  summary: "Covers any transaction where goods or services are paid for in shares, options, or amounts that track a share price. The cost goes through profit or loss even though no cash moves — this is the standard that puts employee option schemes on the income statement.",
  points: [
    "Equity-settled: measure at grant-date fair value of the instrument and never remeasure it for later share price movements.",
    "Cash-settled: measure at fair value of the liability and remeasure at every reporting date until settlement.",
    "Vesting conditions split in two. Service and non-market performance conditions are handled by truing up the number expected to vest; market conditions and non-vesting conditions are built into grant-date fair value and never trued up.",
    "Expense is spread over the vesting period, with graded vesting tranches treated as separate awards."
  ],
  watch: "Truing up for a market condition such as a TSR hurdle. If the share price target is missed but the service was rendered, the expense stays.",
  related: ["IAS 19", "IAS 32", "IAS 12"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-2-share-based-payment/"
},
{
  code: "IFRS 3", au: "AASB 3", title: "Business Combinations",
  family: "IFRS", status: "active", issued: "2008-01",
  effective: "In force since 1 July 2009", effSort: null,
  topics: ["business-combinations", "consolidation"],
  summary: "The acquisition method: identify the acquirer, fix the acquisition date, recognise and measure the identifiable assets acquired and liabilities assumed at fair value, and recognise goodwill as the residual.",
  points: [
    "First test whether you bought a business or just a group of assets — the concentration test is an optional shortcut to conclude it is an asset acquisition.",
    "Goodwill = consideration transferred + non-controlling interest + fair value of any previously held interest − net identifiable assets acquired.",
    "NCI may be measured at fair value (full goodwill) or at its proportionate share of net assets — an election available transaction by transaction.",
    "The measurement period allows up to 12 months to finalise provisional amounts, adjusted retrospectively; later changes are errors or ordinary movements.",
    "Acquisition costs are expensed. Contingent consideration classified as a liability is remeasured through profit or loss."
  ],
  watch: "Intangibles that were never on the target's own balance sheet — customer relationships, brands, order backlog — still have to be identified and recognised separately from goodwill.",
  related: ["IFRS 10", "IFRS 13", "IAS 36", "IAS 38"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-3-business-combinations/"
},
{
  code: "IFRS 4", au: "AASB 4", title: "Insurance Contracts",
  family: "IFRS", status: "superseded", issued: "2004-03",
  effective: "Superseded by IFRS 17 for periods beginning on or after 1 January 2023", effSort: null,
  topics: ["insurance"],
  summary: "The interim insurance standard that largely grandfathered existing national practice while the IASB built a real measurement model. Replaced by IFRS 17.",
  points: [
    "Permitted a wide range of existing accounting policies to continue, which is precisely why it was replaced.",
    "Retained here for historical reference and for understanding transition comparatives."
  ],
  watch: "Legacy accounting policies inherited under IFRS 4 are not carried forward into IFRS 17.",
  related: ["IFRS 17"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-4-insurance-contracts/"
},
{
  code: "IFRS 5", au: "AASB 5", title: "Non-current Assets Held for Sale and Discontinued Operations",
  family: "IFRS", status: "active", issued: "2004-03",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["assets", "presentation"],
  summary: "When an asset or disposal group will be recovered by selling it rather than using it, this standard freezes depreciation, caps the carrying amount, and pulls the whole thing onto one line of the balance sheet.",
  points: [
    "Held-for-sale criteria: available for immediate sale in its present condition, sale highly probable, management committed, actively marketed at a reasonable price, completion expected within twelve months.",
    "Measure at the lower of carrying amount and fair value less costs to sell, and stop depreciating from the classification date.",
    "A discontinued operation is a separate major line of business or geographical area, or a subsidiary acquired exclusively for resale. Its results go to a single line, with comparatives re-presented.",
    "Assets held for distribution to owners follow the same logic."
  ],
  watch: "Classifying too early. An asset being quietly shopped around without a committed plan and active marketing does not qualify, and premature classification wrongly halts depreciation.",
  related: ["IFRS 13", "IAS 36", "IFRS 18"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-5-non-current-assets-held-for-sale-and-discontinued-operations/"
},
{
  code: "IFRS 6", au: "AASB 6", title: "Exploration for and Evaluation of Mineral Resources",
  family: "IFRS", status: "active", issued: "2004-12",
  effective: "In force since 1 January 2006", effSort: null,
  topics: ["extractives", "assets"],
  summary: "A narrow carve-out letting explorers keep capitalising exploration and evaluation spend under their existing policy, with a modified impairment trigger, rather than forcing the general asset rules onto a stage where value is inherently unproven.",
  points: [
    "Applies only between obtaining the legal right to explore and the point at which technical feasibility and commercial viability are demonstrable.",
    "The existing policy is grandfathered but must be applied consistently and disclosed.",
    "Impairment uses IFRS 6's own indicators — right expiring, no further budgeted spend, no commercially viable quantities found — before falling back to IAS 36 for measurement.",
    "Once viability is demonstrated the asset leaves IFRS 6 and is tested, then reclassified under IAS 16 or IAS 38."
  ],
  watch: "Leaving balances in exploration and evaluation long after a project has been proven up or abandoned. The standard is temporary shelter, not a permanent home.",
  related: ["IAS 36", "IAS 16", "IAS 38"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-6-exploration-for-and-evaluation-of-mineral-resources/"
},
{
  code: "IFRS 7", au: "AASB 7", title: "Financial Instruments: Disclosures",
  family: "IFRS", status: "active", issued: "2005-08",
  effective: "In force since 1 January 2007", effSort: null,
  topics: ["financial-instruments", "disclosure"],
  summary: "The disclosure half of the financial instruments trilogy. It requires the numbers behind the numbers: carrying amounts by category, the fair value hierarchy, and a genuine account of credit, liquidity and market risk exposure and how each is managed.",
  points: [
    "Significance disclosures — carrying amounts per IFRS 9 category, gains and losses, and hedge accounting detail.",
    "Risk disclosures — credit risk including ECL staging and credit quality, liquidity risk via a contractual maturity analysis, market risk via sensitivity analysis.",
    "Fair value hierarchy levels 1 to 3, with transfers between levels and Level 3 reconciliations.",
    "Recent amendments extend disclosure to instruments with contingent features and to certain equity instruments designated at FVOCI."
  ],
  watch: "Boilerplate risk narrative that does not reconcile to the actual portfolio. The liquidity maturity table is built on undiscounted contractual cash flows, not carrying amounts.",
  related: ["IFRS 9", "IFRS 13", "IAS 32"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-7-financial-instruments-disclosures/"
},
{
  code: "IFRS 8", au: "AASB 8", title: "Operating Segments",
  family: "IFRS", status: "active", issued: "2006-11",
  effective: "In force since 1 January 2009", effSort: null,
  topics: ["segments", "disclosure"],
  summary: "Reports the business the way management actually runs it. Segments and segment measures come from what the chief operating decision maker reviews, even where that differs from IFRS measurement.",
  points: [
    "Applies to entities whose debt or equity is publicly traded, or that are in the process of filing to become so.",
    "The management approach means segment profit is whatever the CODM sees — reconciled to IFRS totals, not restated to them.",
    "Quantitative thresholds: a segment is reportable at 10% of revenue, profit or assets, and reportable segments must together cover at least 75% of external revenue.",
    "Entity-wide disclosures on products, geography and major customers apply even to single-segment entities."
  ],
  watch: "Aggregating segments that are not genuinely similar in economics just to shorten the note. The aggregation criteria are cumulative, not a menu.",
  related: ["IFRS 18", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-8-operating-segments/"
},
{
  code: "IFRS 9", au: "AASB 9", title: "Financial Instruments",
  family: "IFRS", status: "active", issued: "2014-07",
  effective: "In force since 1 January 2018", effSort: null,
  topics: ["financial-instruments", "impairment"],
  summary: "Classification and measurement, impairment, and hedge accounting for financial instruments. Its defining change was moving impairment from incurred losses to expected credit losses, so provisions are raised before anything actually goes wrong.",
  points: [
    "Classification of financial assets is driven by two tests: the business model, and whether contractual cash flows are solely payments of principal and interest. Outcomes are amortised cost, FVOCI, or FVTPL.",
    "Expected credit losses run in three stages — 12-month ECL on initial recognition, lifetime ECL once credit risk has increased significantly, and lifetime ECL with interest on the net carrying amount once credit-impaired.",
    "Trade receivables and contract assets can use the simplified approach: lifetime ECL from day one, commonly via a provision matrix.",
    "Hedge accounting is aligned to risk management, with an economic relationship test replacing the old 80–125% bright line.",
    "Modifications matter: a substantial modification derecognises the old liability; a non-substantial one produces an immediate catch-up adjustment through profit or loss."
  ],
  watch: "Treating a non-substantial debt modification as simply a new effective interest rate. The standard requires an immediate catch-up gain or loss, and this is missed constantly on refinancings.",
  related: ["IFRS 7", "IFRS 13", "IAS 32", "IFRS 15"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/"
},
{
  code: "IFRS 10", au: "AASB 10", title: "Consolidated Financial Statements",
  family: "IFRS", status: "active", issued: "2011-05",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["consolidation"],
  summary: "Defines control as the single basis for consolidation, replacing a bright-line ownership test with a substance assessment built on power over the relevant activities, exposure to variable returns, and the ability to use that power to affect those returns.",
  points: [
    "All three elements of control must be present. Majority ownership is evidence, not proof, and de facto control can exist well below 50%.",
    "Consider potential voting rights, contractual arrangements, and the purpose and design of the investee.",
    "Investment entities are an exception — they measure subsidiaries at fair value through profit or loss rather than consolidating them.",
    "Losing control triggers derecognition of the subsidiary's assets and liabilities, with any retained interest remeasured to fair value."
  ],
  watch: "Structured entities and trusts where nobody holds shares. Control is assessed on who directs the relevant activities, not on the share register.",
  related: ["IFRS 3", "IFRS 11", "IFRS 12", "IAS 28"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-10-consolidated-financial-statements/"
},
{
  code: "IFRS 11", au: "AASB 11", title: "Joint Arrangements",
  family: "IFRS", status: "active", issued: "2011-05",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["consolidation"],
  summary: "Splits jointly controlled arrangements into two types based on rights and obligations rather than legal form: joint operations, where you book your share of the actual assets and liabilities, and joint ventures, which go to equity accounting.",
  points: [
    "Joint control requires unanimous consent of the parties sharing control over the relevant activities.",
    "A separate legal vehicle points towards a joint venture, but contractual terms and other facts can still make it a joint operation.",
    "Joint operators recognise their own assets, liabilities, revenue and expenses line by line.",
    "Joint venturers apply the equity method under IAS 28 — proportionate consolidation is not available."
  ],
  watch: "Assuming incorporation settles the question. Guarantees, offtake arrangements and funding obligations can give the parties direct rights and obligations, making it a joint operation despite the vehicle.",
  related: ["IFRS 10", "IFRS 12", "IAS 28"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-11-joint-arrangements/"
},
{
  code: "IFRS 12", au: "AASB 12", title: "Disclosure of Interests in Other Entities",
  family: "IFRS", status: "active", issued: "2011-05",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["consolidation", "disclosure"],
  summary: "One home for all disclosures about subsidiaries, joint arrangements, associates and unconsolidated structured entities — including the judgements made in concluding on control.",
  points: [
    "Disclose the significant judgements and assumptions used to determine control, joint control or significant influence.",
    "Summarised financial information is required for material subsidiaries with significant NCI, and for material joint ventures and associates.",
    "Restrictions on accessing group assets, and the risks arising from interests in unconsolidated structured entities, must be spelled out.",
    "Applies to investment entities too, despite them not consolidating."
  ],
  watch: "Omitting the judgement disclosures where control was a close call — that is precisely the case the standard exists to expose.",
  related: ["IFRS 10", "IFRS 11", "IAS 28"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-12-disclosure-of-interests-in-other-entities/"
},
{
  code: "IFRS 13", au: "AASB 13", title: "Fair Value Measurement",
  family: "IFRS", status: "active", issued: "2011-05",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["fair-value", "measurement"],
  summary: "Defines fair value once, for every standard that uses it: the price to sell an asset or transfer a liability in an orderly transaction between market participants at the measurement date. An exit price, seen from the market's point of view rather than the entity's.",
  points: [
    "A three-level hierarchy — quoted prices in active markets (1), other observable inputs (2), unobservable inputs (3) — drives both measurement priority and disclosure.",
    "Non-financial assets are measured at their highest and best use, which may not be how the entity currently uses them.",
    "Valuation approaches are market, income and cost; the technique chosen must maximise observable inputs.",
    "It does not tell you when to use fair value — only how to measure it once another standard requires it."
  ],
  watch: "Entity-specific assumptions creeping into a Level 3 model. Fair value asks what a market participant would pay, not what the asset is worth to you.",
  related: ["IFRS 9", "IFRS 3", "IAS 40", "IAS 16"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-13-fair-value-measurement/"
},
{
  code: "IFRS 14", au: "AASB 14", title: "Regulatory Deferral Accounts",
  family: "IFRS", status: "sunsetting", issued: "2014-01",
  effective: "In force since 1 January 2016; superseded by IFRS 20 from 1 January 2029", effSort: "2029-01-01",
  topics: ["regulatory", "first-time-adoption"],
  summary: "A stopgap that let first-time adopters carry on with their previous rate-regulation accounting rather than write the balances off on transition. IFRS 20 finally replaces it with a real recognition and measurement model.",
  points: [
    "Only ever available to first-time adopters of IFRS that already recognised regulatory deferral balances under previous GAAP.",
    "Balances are presented on separate line items, and their movement on a separate line in profit or loss.",
    "Closed to entities already reporting under IFRS.",
    "Superseded by IFRS 20 from 1 January 2029."
  ],
  watch: "Existing IFRS reporters cannot elect into IFRS 14 — the door only opens once, at first-time adoption.",
  related: ["IFRS 20", "IFRS 1"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-14-regulatory-deferral-accounts/"
},
{
  code: "IFRS 15", au: "AASB 15", title: "Revenue from Contracts with Customers",
  family: "IFRS", status: "active", issued: "2014-05",
  effective: "In force since 1 January 2018", effSort: null,
  topics: ["revenue"],
  summary: "One revenue model for every industry, built on the transfer of control of goods or services to a customer. The five-step model replaced a patchwork of risks-and-rewards tests and industry-specific rules.",
  points: [
    "Five steps: identify the contract; identify the performance obligations; determine the transaction price; allocate it to the obligations on relative stand-alone selling price; recognise revenue as each obligation is satisfied.",
    "A performance obligation is distinct if the customer can benefit from it on its own and it is separately identifiable within the contract.",
    "Variable consideration is estimated using expected value or most likely amount, then constrained so that a significant revenue reversal is not highly probable.",
    "Over-time recognition requires one of three criteria: simultaneous receipt and consumption, the customer controls the asset as it is created, or no alternative use plus an enforceable right to payment for work completed to date.",
    "Principal versus agent turns on control of the good or service before transfer, not on credit or inventory risk alone.",
    "Incremental costs of obtaining a contract are capitalised where they are expected to be recovered."
  ],
  watch: "Recognising revenue over time simply because cash arrives in instalments or the contract is long. Test the three over-time criteria explicitly and document which one is met.",
  related: ["IFRS 9", "IFRS 16", "IAS 37", "AASB 1058"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-15-revenue-from-contracts-with-customers/"
},
{
  code: "IFRS 16", au: "AASB 16", title: "Leases",
  family: "IFRS", status: "active", issued: "2016-01",
  effective: "In force since 1 January 2019", effSort: null,
  topics: ["leases", "assets", "liabilities"],
  summary: "Ends the operating and finance lease split for lessees. Almost every lease now produces a right-of-use asset and a lease liability on the balance sheet, converting rent expense into depreciation plus interest.",
  points: [
    "A contract contains a lease if it conveys the right to control the use of an identified asset for a period of time in exchange for consideration.",
    "The lessee measures the liability at the present value of unpaid lease payments, discounted at the rate implicit in the lease or, far more usually, the incremental borrowing rate.",
    "Recognition exemptions exist for short-term leases of twelve months or less with no purchase option, and for low-value assets.",
    "The lease term includes optional renewal periods only where the lessee is reasonably certain to exercise, reassessed on a significant event within the lessee's control.",
    "Lessor accounting is broadly unchanged and still splits finance from operating leases.",
    "On a sale and leaseback, the seller-lessee recognises gain only on the rights actually transferred to the buyer-lessor."
  ],
  watch: "The front-loaded expense profile. A flat-rent lease produces higher total expense in early years than the old straight-line rent, which catches out covenant models and EBITDA-linked earnouts.",
  related: ["IFRS 15", "IAS 36", "IAS 16", "IFRIC 12"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-16-leases/"
},
{
  code: "IFRS 17", au: "AASB 17", title: "Insurance Contracts",
  family: "IFRS", status: "active", issued: "2017-05",
  effective: "In force since 1 January 2023", effSort: null,
  topics: ["insurance"],
  summary: "The first genuinely global insurance model. Contracts are measured as fulfilment cash flows plus a contractual service margin representing unearned profit, which is released to income as service is delivered.",
  points: [
    "General measurement model: discounted probability-weighted cash flows, plus a risk adjustment for non-financial risk, plus the contractual service margin.",
    "The premium allocation approach is a simplification available mainly for contracts with coverage of one year or less.",
    "The variable fee approach applies to contracts with direct participation features.",
    "Contracts are grouped by portfolio, profitability and annual cohort. Onerous groups are recognised as a loss immediately.",
    "Revenue no longer equals premium received — it reflects the service provided in the period."
  ],
  watch: "The annual cohort requirement. Grouping contracts more coarsely than the standard permits is one of the most common implementation failures.",
  related: ["IFRS 9", "IFRS 13", "IFRS 4", "AASB 1023"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-17-insurance-contracts/"
},
{
  code: "IFRS 18", au: "AASB 18", title: "Presentation and Disclosure in Financial Statements",
  family: "IFRS", status: "future", issued: "2024-04",
  effective: "Annual periods beginning on or after 1 January 2027; early application permitted", effSort: "2027-01-01",
  topics: ["presentation", "disclosure"],
  summary: "Replaces IAS 1 and reshapes the income statement. It imposes defined categories and two mandatory subtotals, brings management-defined performance measures inside the audited financial statements, and tightens the rules on aggregation.",
  points: [
    "Income and expenses are classified into five categories: operating, investing, financing, income taxes, and discontinued operations.",
    "Two newly required subtotals: operating profit, and profit before financing and income taxes.",
    "Management-defined performance measures such as 'underlying profit' must be disclosed in a single note, reconciled to the nearest IFRS subtotal, and are subject to audit.",
    "Enhanced guidance on aggregation and disaggregation — a label like 'other expenses' now has to be justified.",
    "Consequential changes to IAS 7 remove the classification options for interest and dividends and set a single starting point for the indirect method.",
    "IAS 8 is renamed Basis of Preparation of Financial Statements."
  ],
  watch: "This is not a disclosure-only change. The categories depend on the entity's main business activities, so an entity that invests in assets or provides financing to customers as a main business classifies items differently — which changes operating profit itself.",
  related: ["IAS 1", "IAS 7", "IAS 8", "IAS 34", "IFRS 19"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-18-presentation-and-disclosure-in-financial-statements/"
},
{
  code: "IFRS 19", au: "AASB 19", title: "Subsidiaries without Public Accountability: Disclosures",
  family: "IFRS", status: "future", issued: "2024-05",
  effective: "Annual periods beginning on or after 1 January 2027; early application permitted", effSort: "2027-01-01",
  topics: ["disclosure", "reduced-disclosure"],
  summary: "An elective reduced-disclosure regime. Eligible subsidiaries keep full IFRS recognition and measurement but swap the disclosure requirements of other standards for a shorter set, so group reporting stays consistent while statutory accounts get lighter.",
  points: [
    "Eligible if the entity is a subsidiary, has no public accountability, and its parent produces consolidated IFRS financial statements available for public use.",
    "Recognition and measurement are unchanged — only disclosure is reduced.",
    "The election is voluntary and made at the entity level.",
    "Conceptually close to what Australia already achieves through AASB 1060 Simplified Disclosures."
  ],
  watch: "Public accountability is broader than being listed. Holding assets in a fiduciary capacity for a broad group of outsiders — banks, insurers, funds — also disqualifies an entity.",
  related: ["IFRS 18", "AASB 1060", "AASB 1053"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifrs-19-subsidiaries-without-public-accountability-disclosures/"
},
{
  code: "IFRS 20", au: "AASB equivalent pending", title: "Regulatory Assets and Regulatory Liabilities",
  family: "IFRS", status: "future", issued: "2026-05",
  effective: "Annual periods beginning on or after 1 January 2029; early application permitted", effSort: "2029-01-01",
  topics: ["regulatory", "revenue"],
  summary: "The newest IFRS Accounting Standard, issued 27 May 2026. It gives rate-regulated entities — electricity, gas, water and similar — a recognition and measurement model for the timing differences between when they deliver a service and when the regulator allows them to charge for it.",
  points: [
    "Recognises a regulatory asset where the entity has an enforceable present right to add an amount to future regulated rates, and a regulatory liability where it has an obligation to deduct one.",
    "Measured using a cash-flow-based technique, discounted at the regulatory interest rate.",
    "Regulatory income and regulatory expense are presented separately, immediately below revenue.",
    "Supersedes IFRS 14 Regulatory Deferral Accounts, and unlike IFRS 14 it is open to all entities, not only first-time adopters.",
    "Effective 1 January 2029 — a deliberately long runway given the systems work involved."
  ],
  watch: "The trigger is an enforceable right or obligation arising from the regulatory agreement, not simply an expectation that the regulator will eventually allow recovery.",
  related: ["IFRS 14", "IFRS 15", "IFRS 18"],
  url: "https://www.ifrs.org/news-and-events/news/2026/05/iasb-issues-ifrs-20/"
}

]);
