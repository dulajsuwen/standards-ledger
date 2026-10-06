/* IAS — International Accounting Standards, inherited by the IASB from the IASC.
   Australian equivalents are AASB 1xx, i.e. IAS 1 -> AASB 101, IAS 41 -> AASB 141. */

window.addStandards([

{
  code: "IAS 1", au: "AASB 101", title: "Presentation of Financial Statements",
  family: "IAS", status: "sunsetting", issued: "2007-09",
  effective: "In force until superseded by IFRS 18 / AASB 18 for periods beginning on or after 1 January 2027", effSort: "2027-01-01",
  topics: ["presentation", "disclosure"],
  summary: "The architecture of a set of financial statements: which primary statements are required, what goes on the face, the going concern and accrual assumptions, and the requirement for a fair presentation. Being replaced by IFRS 18.",
  points: [
    "A complete set is the statement of financial position, statement of profit or loss and other comprehensive income, statement of changes in equity, statement of cash flows, notes, and a third balance sheet where there has been a retrospective restatement.",
    "Current and non-current classification of liabilities depends on rights existing at the reporting date — a covenant tested after year end does not make a liability current.",
    "OCI items are split between those that will later be recycled to profit or loss and those that will not.",
    "Requires disclosure of critical judgements and of sources of estimation uncertainty — the two notes regulators read first.",
    "Materiality is an entity-specific filter; disclosure is not required for immaterial items even where a standard lists it."
  ],
  watch: "Diary this one. IFRS 18 / AASB 18 replaces it for periods from 1 January 2027 and changes the face of the income statement, not just the notes.",
  related: ["IFRS 18", "IAS 8", "AASB 1054", "IAS 34"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-1-presentation-of-financial-statements/"
},
{
  code: "IAS 2", au: "AASB 102", title: "Inventories",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["inventories", "assets"],
  summary: "Inventory is carried at the lower of cost and net realisable value. The standard sets what may enter cost, which cost formulas are allowed, and when a write-down is required.",
  points: [
    "Cost includes purchase, conversion and other costs of bringing inventory to its present location and condition; fixed overheads are absorbed based on normal capacity.",
    "Permitted cost formulas are FIFO and weighted average. LIFO is prohibited.",
    "Net realisable value is estimated selling price less costs to complete and sell — an entity-specific figure, unlike fair value.",
    "Write-downs are assessed item by item and reversed (capped at original cost) if the circumstances change.",
    "Storage costs, abnormal waste and most selling costs are expensed, not capitalised."
  ],
  watch: "Absorbing fixed overheads on actual rather than normal production volume. In a low-volume period that pushes idle capacity cost into inventory instead of expense.",
  related: ["IAS 41", "IAS 16", "IFRS 15"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/"
},
{
  code: "IAS 7", au: "AASB 107", title: "Statement of Cash Flows",
  family: "IAS", status: "active", issued: "1992-12",
  effective: "In force since 1 January 1994", effSort: null,
  topics: ["cash-flows", "presentation"],
  summary: "Requires cash movements to be classified as operating, investing or financing, so users can see how the business actually generates and consumes cash, independent of accrual judgements.",
  points: [
    "Operating cash flows may use the direct or indirect method; Australian reporting has historically leaned to the direct method.",
    "Cash and cash equivalents are short-term, highly liquid, readily convertible and subject to insignificant risk of change in value.",
    "Non-cash investing and financing transactions are excluded from the statement but disclosed.",
    "A reconciliation of movements in liabilities arising from financing activities is required, covering both cash and non-cash changes.",
    "Supplier finance arrangement disclosures were added to expose reverse factoring."
  ],
  watch: "IFRS 18 removes the free choice over where interest and dividends sit for most entities from 1 January 2027, and fixes the starting point for the indirect method. Comparatives will move.",
  related: ["IFRS 18", "IAS 1"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-7-statement-of-cash-flows/"
},
{
  code: "IAS 8", au: "AASB 108", title: "Accounting Policies, Changes in Accounting Estimates and Errors",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005. Renamed Basis of Preparation of Financial Statements by IFRS 18 from 1 January 2027.", effSort: null,
  topics: ["presentation", "recognition"],
  summary: "How to select accounting policies, and the sharp distinction in treatment between changing a policy, changing an estimate, and correcting an error.",
  points: [
    "Policy changes and error corrections are applied retrospectively, restating comparatives. Estimate changes are applied prospectively.",
    "An accounting estimate is a monetary amount subject to measurement uncertainty — the definition was tightened precisely because the policy/estimate line was being blurred.",
    "Where no standard applies, work down a hierarchy: similar standards, then the Conceptual Framework, then other standard-setters' pronouncements and accepted industry practice.",
    "Prior period errors are corrected against opening retained earnings of the earliest period presented, with a third balance sheet where material."
  ],
  watch: "Classifying what is really a policy change as an estimate change to dodge restating comparatives. Regulators look at this closely.",
  related: ["IAS 1", "IFRS 18", "Conceptual Framework"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-8-accounting-policies-changes-in-accounting-estimates-and-errors/"
},
{
  code: "IAS 10", au: "AASB 110", title: "Events after the Reporting Period",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["presentation", "disclosure"],
  summary: "Splits post balance date events into adjusting events, which provide evidence of conditions that existed at the reporting date, and non-adjusting events, which are disclosed but not booked.",
  points: [
    "The cut-off is the date the financial statements are authorised for issue, which must itself be disclosed.",
    "Adjusting: a customer's insolvency shortly after year end confirming a receivable was already impaired; litigation settled confirming a present obligation.",
    "Non-adjusting: a post year-end acquisition, share issue, or a decline in market value caused by later events.",
    "Dividends declared after the reporting date are not a liability at the reporting date.",
    "If going concern is no longer appropriate, the statements must be reprepared — this is never merely a disclosure matter."
  ],
  watch: "Post year-end asset value falls. A market crash after balance date is non-adjusting; discovering that the asset was already impaired at balance date is adjusting. The question is when the condition existed.",
  related: ["IAS 37", "IAS 1", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-10-events-after-the-reporting-period/"
},
{
  code: "IAS 12", au: "AASB 112", title: "Income Taxes",
  family: "IAS", status: "active", issued: "1996-10",
  effective: "In force since 1 January 1998", effSort: null,
  topics: ["tax"],
  summary: "Current tax plus deferred tax under the balance sheet liability method: deferred tax is driven by temporary differences between the carrying amount of an asset or liability and its tax base, not by differences in the income statement.",
  points: [
    "Deferred tax liabilities are recognised for all taxable temporary differences; deferred tax assets only to the extent future taxable profit is probable.",
    "Measured at the rates expected to apply when the item reverses, based on rates enacted or substantively enacted by the reporting date, and never discounted.",
    "The initial recognition exception blocks deferred tax on some transactions, but it does not apply where the transaction gives rise to equal taxable and deductible differences — which is why leases and decommissioning provisions do produce deferred tax.",
    "Unused tax losses create a deferred tax asset only where recoverability is supported by convincing evidence.",
    "A temporary exception applies to deferred tax arising from the OECD Pillar Two global minimum tax rules, with targeted disclosures instead."
  ],
  watch: "Forgetting deferred tax on right-of-use assets and lease liabilities. The amendment made clear these are within scope, and the two sides do not simply net to nil in every jurisdiction.",
  related: ["IFRS 16", "IAS 37", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-12-income-taxes/"
},
{
  code: "IAS 16", au: "AASB 116", title: "Property, Plant and Equipment",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["assets"],
  summary: "Recognition, measurement, depreciation and derecognition of tangible long-lived assets, with a choice between the cost model and the revaluation model applied by class.",
  points: [
    "Cost includes purchase price, directly attributable costs of bringing the asset to working condition, and the initial estimate of dismantling and restoration obligations.",
    "Components with different useful lives are depreciated separately.",
    "Depreciation starts when the asset is available for use, not when it is first used, and continues through idle periods.",
    "Useful life, residual value and depreciation method are reviewed at least annually and changes are estimate changes, applied prospectively.",
    "Under the revaluation model, increases go to OCI and a revaluation surplus; decreases go to profit or loss except to the extent they reverse a prior surplus on the same asset.",
    "Proceeds from selling items produced while an asset is being made ready for use go to profit or loss, not against the asset's cost."
  ],
  watch: "Assets that are fully depreciated but still in use. That is evidence the useful life estimate was never properly reviewed.",
  related: ["IAS 36", "IAS 23", "IFRS 13", "IAS 40", "IAS 20"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-16-property-plant-and-equipment/"
},
{
  code: "IAS 19", au: "AASB 119", title: "Employee Benefits",
  family: "IAS", status: "active", issued: "2011-06",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["employee-benefits", "liabilities"],
  summary: "Covers short-term benefits, post-employment benefits, other long-term benefits and termination benefits — the standard behind annual leave, long service leave and defined benefit superannuation.",
  points: [
    "Defined contribution plans are simple: expense the contribution. Defined benefit plans require actuarial measurement of the obligation and a net defined benefit liability or asset.",
    "Remeasurements of a defined benefit plan — actuarial gains and losses and return on plan assets — go to OCI and are never recycled.",
    "Net interest is calculated on the net defined benefit position using the discount rate on the obligation.",
    "Long service leave is an other long-term benefit: discounted, with remeasurements going through profit or loss rather than OCI.",
    "Termination benefits are recognised at the earlier of the entity no longer being able to withdraw the offer and recognition of related restructuring costs."
  ],
  watch: "Australian long service leave. It must be discounted and measured on a probability-weighted basis reflecting expected retention — not simply accrued at nominal entitlement.",
  related: ["IFRS 2", "IAS 37", "IAS 26"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-19-employee-benefits/"
},
{
  code: "IAS 20", au: "AASB 120", title: "Accounting for Government Grants and Disclosure of Government Assistance",
  family: "IAS", status: "active", issued: "1983-01",
  effective: "In force since 1 January 1984", effSort: null,
  topics: ["revenue", "assets"],
  summary: "Government grants are recognised once there is reasonable assurance the conditions will be met and the grant will be received, then matched systematically against the costs they are intended to compensate.",
  points: [
    "Income-related grants are presented either as other income or as a deduction from the related expense.",
    "Asset-related grants are presented either as deferred income or netted against the asset's carrying amount.",
    "A forgivable loan is treated as a grant once there is reasonable assurance the forgiveness terms will be met.",
    "Below-market government loans are measured under IFRS 9, with the benefit of the low rate treated as a grant.",
    "Not-for-profit and public sector entities in Australia usually land in AASB 1058 or AASB 15 instead."
  ],
  watch: "Recognising a grant on receipt of cash. The trigger is reasonable assurance that attached conditions will be complied with, which can be earlier or later than the cash.",
  related: ["AASB 1058", "IFRS 15", "IAS 16"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-20-accounting-for-government-grants-and-disclosure-of-government-assistance/"
},
{
  code: "IAS 21", au: "AASB 121", title: "The Effects of Changes in Foreign Exchange Rates",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005. Lack of exchangeability amendments apply from 1 January 2025.", effSort: null,
  topics: ["foreign-currency"],
  summary: "Determines functional currency, then how to translate foreign currency transactions and foreign operations into the presentation currency.",
  points: [
    "Functional currency is the currency of the primary economic environment in which the entity operates — a matter of fact, not a choice.",
    "Monetary items are retranslated at closing rate with differences in profit or loss; non-monetary items at historical cost stay at the rate on the transaction date.",
    "Translating a foreign operation: assets and liabilities at closing rate, income and expenses at transaction rate, differences to a foreign currency translation reserve in OCI.",
    "On disposal of a foreign operation the accumulated translation reserve is recycled to profit or loss.",
    "The 2023 amendments set out how to judge whether a currency is exchangeable and how to estimate a spot rate when it is not."
  ],
  watch: "Assuming the presentation currency drives the accounting. Functional currency is assessed per entity, and getting it wrong misstates every subsequent translation difference.",
  related: ["IAS 29", "IFRS 9", "IFRIC 22", "IFRIC 16"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-21-the-effects-of-changes-in-foreign-exchange-rates/"
},
{
  code: "IAS 23", au: "AASB 123", title: "Borrowing Costs",
  family: "IAS", status: "active", issued: "2007-03",
  effective: "In force since 1 January 2009", effSort: null,
  topics: ["assets", "liabilities"],
  summary: "Borrowing costs directly attributable to acquiring, constructing or producing a qualifying asset must be capitalised as part of its cost. Everything else is expensed.",
  points: [
    "A qualifying asset is one that necessarily takes a substantial period of time to get ready for its intended use or sale.",
    "For specific borrowings, capitalise actual cost less investment income on temporary reinvestment of the funds.",
    "For general borrowings, apply a capitalisation rate — the weighted average of borrowing costs outstanding during the period.",
    "Capitalisation starts when expenditure and borrowing costs are being incurred and activities are in progress; it is suspended during extended idle periods and ceases when the asset is substantially ready."
  ],
  watch: "Continuing to capitalise while a project is paused. Extended suspension of active development stops capitalisation.",
  related: ["IAS 16", "IAS 2", "IAS 40"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-23-borrowing-costs/"
},
{
  code: "IAS 24", au: "AASB 124", title: "Related Party Disclosures",
  family: "IAS", status: "active", issued: "2009-11",
  effective: "In force since 1 January 2011", effSort: null,
  topics: ["related-parties", "disclosure"],
  summary: "Requires disclosure of relationships, transactions and outstanding balances with related parties so users can judge whether results and position may have been affected by influence rather than arm's-length dealing.",
  points: [
    "Related parties include parents, subsidiaries, associates, joint ventures, key management personnel and their close family members, and post-employment benefit plans.",
    "Key management personnel compensation is disclosed in categories: short-term, post-employment, other long-term, termination, and share-based payment.",
    "Parent-subsidiary relationships are disclosed whether or not there were transactions between them.",
    "A partial exemption exists for government-related entities.",
    "In Australia, AASB 124 also applies to not-for-profit public sector entities, which brought councils and departments into KMP disclosure."
  ],
  watch: "Claiming a transaction was on arm's-length terms. That statement can only be made where the terms can actually be substantiated.",
  related: ["IFRS 10", "IAS 28", "AASB 1054"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-24-related-party-disclosures/"
},
{
  code: "IAS 26", au: "AASB 126", title: "Accounting and Reporting by Retirement Benefit Plans",
  family: "IAS", status: "active", issued: "1987-01",
  effective: "In force since 1 January 1988", effSort: null,
  topics: ["employee-benefits", "superannuation"],
  summary: "The reporting framework for the retirement benefit plan itself, as a reporting entity, rather than for the employer sponsoring it. In Australia, AASB 1056 governs superannuation entities instead.",
  points: [
    "Distinguishes defined contribution plan reports from defined benefit plan reports.",
    "Plan investments are carried at fair value.",
    "Defined benefit plans disclose the actuarial present value of promised benefits.",
    "Australian superannuation entities apply AASB 1056, which is more specific and more demanding."
  ],
  watch: "Australian practitioners should generally be in AASB 1056, not AASB 126.",
  related: ["AASB 1056", "IAS 19"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-26-accounting-and-reporting-by-retirement-benefit-plans/"
},
{
  code: "IAS 27", au: "AASB 127", title: "Separate Financial Statements",
  family: "IAS", status: "active", issued: "2011-05",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["consolidation"],
  summary: "Governs the parent's own standalone financial statements — how investments in subsidiaries, associates and joint ventures are carried when they are not consolidated or equity accounted.",
  points: [
    "Investments are measured at cost, at fair value under IFRS 9, or using the equity method — a policy choice applied consistently by category.",
    "Dividends from these investments are recognised in profit or loss when the right to receive is established.",
    "Separate financial statements are optional under IFRS but often required by local law.",
    "Not the same thing as individual financial statements of an entity that has no subsidiaries."
  ],
  watch: "A large dividend out of pre-acquisition profits is an impairment indicator for the investment carried at cost.",
  related: ["IFRS 10", "IAS 28", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-27-separate-financial-statements/"
},
{
  code: "IAS 28", au: "AASB 128", title: "Investments in Associates and Joint Ventures",
  family: "IAS", status: "active", issued: "2011-05",
  effective: "In force since 1 January 2013", effSort: null,
  topics: ["consolidation"],
  summary: "Sets out significant influence and the mechanics of the equity method — a one-line consolidation where the investment is adjusted for the investor's share of post-acquisition results.",
  points: [
    "Significant influence is presumed at 20% or more of voting power, rebuttable both ways; board representation and participation in policy decisions are strong evidence.",
    "The investment starts at cost and is adjusted for the share of post-acquisition profit or loss and OCI; dividends received reduce the carrying amount.",
    "Losses are recognised only down to the carrying amount plus any long-term interests forming part of the net investment, unless obligations have been incurred.",
    "Unrealised profits on transactions with the associate are eliminated to the extent of the investor's interest.",
    "The whole investment is tested for impairment as a single asset under IAS 36 — goodwill within it is not tested separately."
  ],
  watch: "The IFRS 10 / IAS 28 conflict over gains on sales of assets to an associate remains deferred indefinitely (AASB 2024-4 in Australia). Check the current position before relying on either treatment.",
  related: ["IFRS 11", "IFRS 10", "IAS 36", "IAS 27"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-28-investments-in-associates-and-joint-ventures/"
},
{
  code: "IAS 29", au: "AASB 129", title: "Financial Reporting in Hyperinflationary Economies",
  family: "IAS", status: "active", issued: "1989-07",
  effective: "In force since 1 January 1990", effSort: null,
  topics: ["foreign-currency", "presentation"],
  summary: "Where an entity's functional currency is hyperinflationary, the financial statements are restated into the measuring unit current at the reporting date, so figures from different points in the year are comparable.",
  points: [
    "Indicators include cumulative inflation approaching or exceeding 100% over three years, and a population that holds wealth in a stable foreign currency.",
    "Non-monetary items are restated using a general price index; monetary items are already in current units.",
    "The net gain or loss on the net monetary position goes to profit or loss.",
    "Comparatives are restated as well, so prior-year figures move."
  ],
  watch: "Relevant to Australian groups with subsidiaries in hyperinflationary economies, and easy to overlook until an auditor raises it.",
  related: ["IAS 21", "IFRIC 7"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-29-financial-reporting-in-hyperinflationary-economies/"
},
{
  code: "IAS 32", au: "AASB 132", title: "Financial Instruments: Presentation",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["financial-instruments", "equity", "presentation"],
  summary: "Decides the single most consequential question in financial instruments: is it debt or is it equity? Also covers compound instruments, treasury shares and when offsetting is permitted.",
  points: [
    "An instrument is a financial liability if there is a contractual obligation to deliver cash or another financial asset, or to exchange on potentially unfavourable terms.",
    "Equity means no such obligation. A contractual obligation that the issuer cannot avoid makes it debt even if it is legally called a share.",
    "Compound instruments such as convertible notes are split at inception into a liability component and a residual equity component.",
    "The 'fixed for fixed' condition governs whether a derivative over an entity's own shares is equity.",
    "Offsetting a financial asset and liability requires both a currently enforceable legal right and an intention to settle net or simultaneously.",
    "Redeemable preference shares with a mandatory dividend are liabilities, and the dividend is interest expense."
  ],
  watch: "Puttable instruments — units in a unit trust, member shares in a co-operative. These are liabilities by default, with only a narrow exception permitting equity classification.",
  related: ["IFRS 9", "IFRS 7", "IFRIC 2", "IFRS 2"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-32-financial-instruments-presentation/"
},
{
  code: "IAS 33", au: "AASB 133", title: "Earnings per Share",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["eps", "presentation"],
  summary: "Standardises basic and diluted earnings per share so performance can be compared between entities and across periods regardless of capital structure changes.",
  points: [
    "Basic EPS = profit attributable to ordinary equity holders of the parent ÷ weighted average number of ordinary shares outstanding.",
    "Diluted EPS adjusts for all dilutive potential ordinary shares — options, convertibles, contingently issuable shares.",
    "Anti-dilutive instruments are excluded; you cannot improve EPS through dilution.",
    "Bonus issues, share splits and the bonus element in a rights issue are applied retrospectively to all periods presented.",
    "Required for entities with publicly traded ordinary shares or filing to become so."
  ],
  watch: "A rights issue at a discount contains a bonus element. Comparative EPS must be restated for it, which is easy to miss.",
  related: ["IAS 32", "IFRS 2", "IFRS 8"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-33-earnings-per-share/"
},
{
  code: "IAS 34", au: "AASB 134", title: "Interim Financial Reporting",
  family: "IAS", status: "active", issued: "1998-02",
  effective: "In force since 1 January 1999", effSort: null,
  topics: ["interim", "presentation"],
  summary: "The minimum content of a condensed interim report and the measurement principles applied to it — built on the discrete approach, where each interim period is measured largely in its own right.",
  points: [
    "Condensed statements plus selected explanatory notes focused on what has changed since the last annual report.",
    "Accounting policies must be consistent with those to be applied in the annual financial statements.",
    "Income tax expense is recognised using the estimated weighted average annual effective tax rate.",
    "A cost that does not meet the definition of an asset at an interim date cannot be deferred to smooth the half-year result.",
    "IFRS 18 adds interim disclosure requirements from 1 January 2027."
  ],
  watch: "Half-year impairment. An impairment loss on goodwill recognised at an interim date may not be reversed later in the annual accounts.",
  related: ["IAS 36", "IFRS 18", "IFRIC 10"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-34-interim-financial-reporting/"
},
{
  code: "IAS 36", au: "AASB 136", title: "Impairment of Assets",
  family: "IAS", status: "active", issued: "2004-03",
  effective: "In force since 31 March 2004", effSort: null,
  topics: ["impairment", "assets"],
  summary: "Ensures assets are not carried above their recoverable amount, being the higher of fair value less costs of disposal and value in use. The standard behind every goodwill write-down.",
  points: [
    "Goodwill, indefinite-life intangibles and intangibles not yet available for use are tested annually regardless of indicators. Everything else is tested when an indicator exists.",
    "Value in use uses pre-tax discounted cash flows from the asset in its current condition — excluding future restructurings and future enhancements not yet committed.",
    "Goodwill is allocated to cash-generating units or groups of units, no larger than an operating segment before aggregation.",
    "Impairment of a CGU is applied to goodwill first, then pro rata across other assets, and no asset is written below its own recoverable amount.",
    "Goodwill impairment can never be reversed. Other impairments may be, up to what the carrying amount would have been.",
    "AASB 2026-1 adds illustrative examples on disclosing estimation uncertainty in recoverable amount."
  ],
  watch: "Mixing pre-tax and post-tax in value in use. Using a post-tax discount rate on pre-tax cash flows is the most common technical error in the whole standard.",
  related: ["IFRS 3", "IAS 38", "IAS 16", "IFRS 13", "AASB 2026-1"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-36-impairment-of-assets/"
},
{
  code: "IAS 37", au: "AASB 137", title: "Provisions, Contingent Liabilities and Contingent Assets",
  family: "IAS", status: "active", issued: "1998-09",
  effective: "In force since 1 July 1999", effSort: null,
  topics: ["liabilities-provisions"],
  summary: "Draws the line between a provision you must recognise and a contingency you merely disclose, and stops entities creating smoothing reserves for costs they have not yet become obliged to incur.",
  points: [
    "Recognise a provision when there is a present obligation from a past event, an outflow is probable, and the amount can be reliably estimated.",
    "Constructive obligations count — an established pattern of practice creating a valid expectation is enough, a formal legal duty is not required.",
    "Measure at the best estimate of the expenditure required to settle; discount where the time value of money is material, and unwind the discount as finance cost.",
    "Restructuring provisions require a detailed formal plan and a valid expectation raised in those affected. Future operating losses are never provided for.",
    "Onerous contracts are provided for at the lower of the cost of fulfilling and the penalty for exiting, with fulfilment cost including directly related costs.",
    "AASB 2026-1 adds illustrative examples on disclosing uncertainty in decommissioning and restoration liabilities."
  ],
  watch: "Board approval alone does not create a restructuring obligation. Announcement or implementation raising a valid expectation in those affected is what triggers it.",
  related: ["IAS 10", "IAS 16", "IFRIC 1", "IFRIC 21", "AASB 2026-1"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-37-provisions-contingent-liabilities-and-contingent-assets/"
},
{
  code: "IAS 38", au: "AASB 138", title: "Intangible Assets",
  family: "IAS", status: "active", issued: "2004-03",
  effective: "In force since 31 March 2004", effSort: null,
  topics: ["assets"],
  summary: "Recognition and measurement of identifiable non-monetary assets without physical substance — and, just as importantly, a firm list of what can never be capitalised.",
  points: [
    "An intangible must be identifiable (separable or arising from contractual or legal rights), controlled, and expected to generate future economic benefits.",
    "Research is always expensed. Development is capitalised only once all six criteria are met — technical feasibility, intention, ability to use or sell, probable future benefits, adequate resources, and reliable measurement of expenditure.",
    "Internally generated goodwill, brands, mastheads, customer lists and similar items can never be capitalised.",
    "Finite-life intangibles are amortised over useful life; indefinite-life intangibles are not amortised but are tested for impairment annually.",
    "The revaluation model is available only where an active market exists, which is rare in practice.",
    "Configuration and customisation costs for cloud software are usually an expense, because the customer does not control the underlying software."
  ],
  watch: "Software-as-a-service implementation cost. Without control of the software, most configuration and customisation spend is expensed as incurred, not capitalised.",
  related: ["IAS 36", "IFRS 3", "IFRS 13", "SIC-32"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-38-intangible-assets/"
},
{
  code: "IAS 39", au: "AASB 139", title: "Financial Instruments: Recognition and Measurement",
  family: "IAS", status: "superseded", issued: "2003-12",
  effective: "Superseded by IFRS 9 from 1 January 2018, other than an optional carve-out for macro fair value hedge accounting", effSort: null,
  topics: ["financial-instruments"],
  summary: "The predecessor to IFRS 9, built on incurred losses and rules-based classification. Retained only because entities may still elect to apply its portfolio fair value hedge accounting for interest rate risk.",
  points: [
    "Superseded for classification, measurement and impairment.",
    "The macro hedging carve-out remains available pending the IASB's dynamic risk management project."
  ],
  watch: "If someone cites IAS 39 for impairment, they are working from a pre-2018 framework.",
  related: ["IFRS 9", "IFRS 7"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-39-financial-instruments-recognition-and-measurement/"
},
{
  code: "IAS 40", au: "AASB 140", title: "Investment Property",
  family: "IAS", status: "active", issued: "2003-12",
  effective: "In force since 1 January 2005", effSort: null,
  topics: ["assets", "fair-value"],
  summary: "Property held to earn rentals or for capital appreciation rather than for use or sale in the ordinary course of business, with a policy choice between the fair value model and the cost model.",
  points: [
    "Under the fair value model, gains and losses go to profit or loss and no depreciation is charged.",
    "The policy choice applies to all investment property, and a move from fair value to cost is almost never justifiable as an improvement.",
    "Owner-occupied property is IAS 16; property held for sale in the ordinary course is inventory under IAS 2.",
    "A property with mixed use is split where the portions could be sold separately; otherwise it is investment property only if the owner-occupied portion is insignificant.",
    "Transfers in or out require an actual change in use, evidenced — a change in management's intention alone is not enough."
  ],
  watch: "Property leased to another group entity is investment property in the lessor's own accounts but owner-occupied from the group's perspective, so it reclassifies on consolidation.",
  related: ["IAS 16", "IFRS 13", "IFRS 16", "IAS 2"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-40-investment-property/"
},
{
  code: "IAS 41", au: "AASB 141", title: "Agriculture",
  family: "IAS", status: "active", issued: "2001-02",
  effective: "In force since 1 January 2003", effSort: null,
  topics: ["agriculture", "fair-value"],
  summary: "Biological assets are measured at fair value less costs to sell, with changes going through profit or loss — so livestock and growing crops are marked to market rather than held at cost.",
  points: [
    "Applies to biological assets and to agricultural produce at the point of harvest; after harvest the produce becomes inventory under IAS 2.",
    "Bearer plants such as grapevines and fruit trees are excluded and accounted for as property, plant and equipment under IAS 16. The fruit they bear is still IAS 41.",
    "Gains on initial recognition — for instance the birth of livestock — are recognised immediately in profit or loss.",
    "Unconditional government grants relating to biological assets are recognised when receivable.",
    "There is a rebuttable presumption that fair value can be measured reliably."
  ],
  watch: "The bearer plant split. The tree is IAS 16 and depreciated; the fruit growing on it is IAS 41 and fair valued. Two standards, one orchard.",
  related: ["IAS 2", "IFRS 13", "IAS 16", "IAS 20"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ias-41-agriculture/"
}

]);
