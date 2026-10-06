/* IFRIC and SIC Interpretations.
   In Australia these are issued as AASB Interpretations with the same number and
   are given authority by AASB 1048 Interpretation of Standards. */

window.addStandards([

/* ---------- IFRIC ---------- */
{
  code: "IFRIC 1", au: "AASB Interpretation 1", title: "Changes in Existing Decommissioning, Restoration and Similar Liabilities",
  family: "IFRIC", status: "active", issued: "2004-05", effective: "In force since 1 September 2004", effSort: null,
  topics: ["liabilities-provisions", "assets"],
  summary: "How to account for a change in a decommissioning or restoration provision after initial recognition — a revised estimate, a revised discount rate, or the unwinding of the discount.",
  points: [
    "Under the cost model, the change adjusts the carrying amount of the related asset, except that a decrease cannot take the asset below zero — the excess goes to profit or loss.",
    "Under the revaluation model, the change goes through the revaluation surplus in OCI.",
    "The periodic unwinding of the discount is always a finance cost in profit or loss, never capitalised."
  ],
  watch: "A falling discount rate increases the provision and therefore the asset, which increases future depreciation. Model the flow-on before finalising.",
  related: ["IAS 37", "IAS 16", "IFRS 6"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-1-changes-in-existing-decommissioning-restoration-and-similar-liabilities/"
},
{
  code: "IFRIC 2", au: "AASB Interpretation 2", title: "Members' Shares in Co-operative Entities and Similar Instruments",
  family: "IFRIC", status: "active", issued: "2004-11", effective: "In force since 1 January 2005", effSort: null,
  topics: ["financial-instruments", "equity"],
  summary: "Whether members' shares that the holder can put back to a co-operative are debt or equity, and how an unconditional right to refuse redemption changes the answer.",
  points: [
    "Members' shares are liabilities where the entity has an unconditional obligation to redeem them.",
    "They are equity where the entity has an unconditional right to refuse redemption, whether by law, regulation or its own constitution.",
    "Relevant to Australian co-operatives, mutuals and member-owned clubs."
  ],
  watch: "A discretion to refuse redemption that sits in the rules rather than in the constitution may not be unconditional. The source of the right matters.",
  related: ["IAS 32", "IFRS 9"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-2-members-shares-in-co-operative-entities-and-similar-instruments/"
},
{
  code: "IFRIC 5", au: "AASB Interpretation 5", title: "Rights to Interests arising from Decommissioning, Restoration and Environmental Rehabilitation Funds",
  family: "IFRIC", status: "active", issued: "2004-12", effective: "In force since 1 January 2006", effSort: null,
  topics: ["liabilities-provisions", "financial-instruments"],
  summary: "How a contributor accounts for its interest in a separate fund set up to meet decommissioning costs.",
  points: [
    "The obligation to decommission is still recognised as a liability — the fund does not extinguish it.",
    "The interest in the fund is recognised separately, and offsetting is only permitted where the contributor is not liable for the deficit.",
    "Where the contributor controls the fund, it consolidates it."
  ],
  watch: "Netting the fund against the provision without meeting the offsetting conditions.",
  related: ["IAS 37", "IFRIC 1", "IFRS 10"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-5-rights-to-interests-arising-from-decommissioning-restoration-and-environmental-rehabilitation-funds/"
},
{
  code: "IFRIC 6", au: "AASB Interpretation 6", title: "Liabilities arising from Participating in a Specific Market — Waste Electrical and Electronic Equipment",
  family: "IFRIC", status: "active", issued: "2005-09", effective: "In force since 1 December 2005", effSort: null,
  topics: ["liabilities-provisions"],
  summary: "Identifies the obligating event for waste management costs under European WEEE-style legislation: participation in the market during the measurement period, not the manufacture or sale of the equipment.",
  points: [
    "The liability arises from market participation in the measurement period, which can be long after the goods were sold.",
    "A useful worked example of pinning down the obligating event under IAS 37 more generally."
  ],
  watch: "Narrow in direct application, but the reasoning is applied by analogy to product stewardship and levy-style schemes.",
  related: ["IAS 37", "IFRIC 21"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-6-liabilities-arising-from-participating-in-a-specific-market-waste-electrical-and-electronic-equipment/"
},
{
  code: "IFRIC 7", au: "AASB Interpretation 7", title: "Applying the Restatement Approach under IAS 29",
  family: "IFRIC", status: "active", issued: "2005-11", effective: "In force since 1 March 2006", effSort: null,
  topics: ["foreign-currency"],
  summary: "How to apply hyperinflation restatement in the first period an economy becomes hyperinflationary, including the treatment of deferred tax.",
  points: [
    "Restate as if the economy had always been hyperinflationary, using a general price index from the date assets were acquired.",
    "Deferred tax items are restated in accordance with IAS 12 after the non-monetary items have been restated."
  ],
  watch: "Only bites in the transition year, which is exactly when it is forgotten.",
  related: ["IAS 29", "IAS 21", "IAS 12"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-7-applying-the-restatement-approach-under-ias-29-financial-reporting-in-hyperinflationary-economies/"
},
{
  code: "IFRIC 10", au: "AASB Interpretation 10", title: "Interim Financial Reporting and Impairment",
  family: "IFRIC", status: "active", issued: "2006-07", effective: "In force since 1 November 2006", effSort: null,
  topics: ["impairment", "interim"],
  summary: "An impairment loss recognised at an interim date on goodwill or on an equity investment carried at cost may not be reversed at a subsequent reporting date.",
  points: [
    "Prevents entities using a half-year write-down and a full-year reversal to manage results.",
    "The prohibition on reversing goodwill impairment under IAS 36 overrides the discrete-period logic of IAS 34."
  ],
  watch: "Test carefully at the half-year. Once taken, that goodwill impairment is permanent even if conditions recover by year end.",
  related: ["IAS 34", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-10-interim-financial-reporting-and-impairment/"
},
{
  code: "IFRIC 12", au: "AASB Interpretation 12", title: "Service Concession Arrangements",
  family: "IFRIC", status: "active", issued: "2006-11", effective: "In force since 1 January 2008", effSort: null,
  topics: ["assets", "revenue", "public-sector"],
  summary: "The operator's side of a public-to-private infrastructure arrangement — a toll road, hospital or prison built and run under a concession. The operator does not recognise the infrastructure as its own PPE.",
  points: [
    "Financial asset model where the operator has an unconditional contractual right to receive cash from the grantor.",
    "Intangible asset model where the operator receives a right to charge users and bears demand risk.",
    "A mixed model applies where the arrangement splits the risk.",
    "Construction revenue is recognised under IFRS 15 as the infrastructure is built."
  ],
  watch: "This is the operator's standard. The government grantor's accounting is in AASB 1059 in Australia.",
  related: ["AASB 1059", "SIC-29", "IFRS 15", "IFRS 16"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-12-service-concession-arrangements/"
},
{
  code: "IFRIC 14", au: "AASB Interpretation 14", title: "IAS 19 — The Limit on a Defined Benefit Asset, Minimum Funding Requirements and their Interaction",
  family: "IFRIC", status: "active", issued: "2007-07", effective: "In force since 1 January 2008", effSort: null,
  topics: ["employee-benefits"],
  summary: "When a defined benefit plan is in surplus, how much of that surplus can actually be recognised as an asset — the so-called asset ceiling.",
  points: [
    "The surplus is recognised only to the extent it is available as a refund or as a reduction in future contributions.",
    "A minimum funding requirement for past service may create an additional liability.",
    "Whether the entity has an unconditional right to a refund depends on the plan's terms and on trustee powers."
  ],
  watch: "Trustee discretion to enhance benefits or wind up the plan can block the refund right entirely, capping the asset at nil.",
  related: ["IAS 19"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-14-ias-19-the-limit-on-a-defined-benefit-asset-minimum-funding-requirements-and-their-interaction/"
},
{
  code: "IFRIC 16", au: "AASB Interpretation 16", title: "Hedges of a Net Investment in a Foreign Operation",
  family: "IFRIC", status: "active", issued: "2008-07", effective: "In force since 1 October 2008", effSort: null,
  topics: ["foreign-currency", "financial-instruments"],
  summary: "Which risk can be hedged in a net investment hedge, where the hedging instrument may be held, and what is recycled on disposal.",
  points: [
    "Only the difference between the functional currency of the foreign operation and that of the parent may be designated.",
    "The hedging instrument can be held by any entity within the group, not only the parent.",
    "On disposal, the amount recycled from the translation reserve is the amount relating to the hedged net investment."
  ],
  watch: "Designating the presentation currency rather than a functional currency pair. The risk being hedged must be an actual functional currency exposure.",
  related: ["IAS 21", "IFRS 9"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-16-hedges-of-a-net-investment-in-a-foreign-operation/"
},
{
  code: "IFRIC 17", au: "AASB Interpretation 17", title: "Distributions of Non-cash Assets to Owners",
  family: "IFRIC", status: "active", issued: "2008-11", effective: "In force since 1 July 2009", effSort: null,
  topics: ["equity", "fair-value"],
  summary: "A dividend paid in assets rather than cash — an in-specie distribution. The liability is measured at the fair value of the assets to be distributed.",
  points: [
    "The dividend payable is recognised when the dividend is appropriately authorised and no longer at the entity's discretion.",
    "Remeasured at each reporting date and at settlement, with changes recognised in equity.",
    "On settlement, the difference between the carrying amount of the assets given up and the dividend payable goes to profit or loss.",
    "Does not apply where the same party controls both sides before and after — common control distributions are outside its scope."
  ],
  watch: "A demerger within a controlled group usually falls outside IFRIC 17. Check the common control question first.",
  related: ["IFRS 5", "IFRS 13", "IAS 10"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-17-distributions-of-non-cash-assets-to-owners/"
},
{
  code: "IFRIC 19", au: "AASB Interpretation 19", title: "Extinguishing Financial Liabilities with Equity Instruments",
  family: "IFRIC", status: "active", issued: "2009-11", effective: "In force since 1 July 2010", effSort: null,
  topics: ["financial-instruments", "equity"],
  summary: "A debt-for-equity swap. The equity issued is measured at fair value, and the difference from the carrying amount of the debt goes to profit or loss.",
  points: [
    "Equity issued is measured at its fair value, or at the fair value of the liability extinguished if the equity's fair value is not reliably measurable.",
    "The gain or loss on extinguishment is recognised in profit or loss, separately disclosed.",
    "Does not apply where the creditor is also a shareholder acting in that capacity, or where conversion is under the instrument's original terms."
  ],
  watch: "A related-party debt forgiveness by a shareholder is usually a capital contribution to equity, not a gain. Check the capacity in which they acted.",
  related: ["IFRS 9", "IAS 32"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-19-extinguishing-financial-liabilities-with-equity-instruments/"
},
{
  code: "IFRIC 20", au: "AASB Interpretation 20", title: "Stripping Costs in the Production Phase of a Surface Mine",
  family: "IFRIC", status: "active", issued: "2011-10", effective: "In force since 1 January 2013", effSort: null,
  topics: ["extractives", "assets"],
  summary: "Waste removal costs during production. Where stripping improves access to ore to be mined in future periods, it creates a stripping activity asset rather than an immediate expense.",
  points: [
    "Costs attributable to inventory produced in the period go to inventory under IAS 2.",
    "Costs that improve access to a further identified component of the ore body are capitalised as a stripping activity asset.",
    "The asset is depreciated over the expected useful life of the identified component, usually on a units of production basis."
  ],
  watch: "Identifying the component of the ore body is the crux. Without it, the capitalisation cannot be supported.",
  related: ["IFRS 6", "IAS 2", "IAS 16", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-20-stripping-costs-in-the-production-phase-of-a-surface-mine/"
},
{
  code: "IFRIC 21", au: "AASB Interpretation 21", title: "Levies",
  family: "IFRIC", status: "active", issued: "2013-05", effective: "In force since 1 January 2014", effSort: null,
  topics: ["liabilities-provisions", "tax"],
  summary: "A levy imposed by government is recognised only when the activity that triggers payment under the legislation occurs — which is often a single instant, not a period.",
  points: [
    "The obligating event is the activity described in the legislation as triggering payment.",
    "Where a threshold triggers the levy, the liability arises when the threshold is reached, not progressively as it is approached.",
    "Operating at a future date being economically compelled is not itself an obligating event.",
    "Excludes income taxes (IAS 12) and fines."
  ],
  watch: "A levy triggered by being in operation on a set date creates the entire liability on that date — with nothing accrued in the interim reports before it.",
  related: ["IAS 37", "IAS 12", "IAS 34"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-21-levies/"
},
{
  code: "IFRIC 22", au: "AASB Interpretation 22", title: "Foreign Currency Transactions and Advance Consideration",
  family: "IFRIC", status: "active", issued: "2016-12", effective: "In force since 1 January 2018", effSort: null,
  topics: ["foreign-currency", "revenue"],
  summary: "Which exchange rate applies when cash is paid or received in advance. The date of the transaction is the date the prepayment asset or deferred income liability was first recognised.",
  points: [
    "Fixes the rate at the date of the advance payment, not the later delivery date.",
    "Where there are multiple payments, each one sets its own date of transaction.",
    "The prepayment or deferred income is non-monetary, so it is not retranslated afterwards."
  ],
  watch: "Retranslating a foreign currency deposit paid on a fixed asset order. It is non-monetary and stays at the original rate.",
  related: ["IAS 21", "IFRS 15", "IAS 16"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-22-foreign-currency-transactions-and-advance-consideration/"
},
{
  code: "IFRIC 23", au: "AASB Interpretation 23", title: "Uncertainty over Income Tax Treatments",
  family: "IFRIC", status: "active", issued: "2017-06", effective: "In force since 1 January 2019", effSort: null,
  topics: ["tax"],
  summary: "How to reflect uncertain tax positions. Assume the tax authority will examine the position with full knowledge, then decide whether acceptance is probable.",
  points: [
    "Assume full knowledge and full examination — detection risk is explicitly ignored.",
    "If acceptance is probable, follow the tax filing. If not, reflect the uncertainty using either the most likely amount or the expected value, whichever better predicts resolution.",
    "Judgements are reassessed when facts or circumstances change.",
    "Uncertain tax amounts are presented within current or deferred tax, not as a provision under IAS 37."
  ],
  watch: "The 'they probably will not audit us' argument has no place here. Detection risk is assumed away by the interpretation.",
  related: ["IAS 12", "IAS 37"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/ifric-23-uncertainty-over-income-tax-treatments/"
},

/* ---------- SIC ---------- */
{
  code: "SIC-7", au: "AASB Interpretation 107", title: "Introduction of the Euro",
  family: "SIC", status: "active", issued: "1997-10", effective: "In force since 1 June 1998", effSort: null,
  topics: ["foreign-currency"],
  summary: "Confirms that IAS 21 applies unchanged on adoption of the euro — exchange differences are not deferred.",
  points: ["Largely of historical interest, but still on issue."],
  watch: "Rarely relevant to Australian reporters.",
  related: ["IAS 21"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/sic-7-introduction-of-the-euro/"
},
{
  code: "SIC-10", au: "AASB Interpretation 110", title: "Government Assistance — No Specific Relation to Operating Activities",
  family: "SIC", status: "active", issued: "1998-07", effective: "In force since 1 August 1998", effSort: null,
  topics: ["revenue"],
  summary: "General government assistance given to encourage or support business in a region or industry still falls within IAS 20 even though it is not tied to specific operating activities.",
  points: [
    "Assistance with no conditions relating to operating activities is still a government grant.",
    "It is not credited directly to equity."
  ],
  watch: "Regional development incentives are grants, not capital contributions.",
  related: ["IAS 20"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/sic-10-government-assistance-no-specific-relation-to-operating-activities/"
},
{
  code: "SIC-25", au: "AASB Interpretation 125", title: "Income Taxes — Changes in the Tax Status of an Entity or its Shareholders",
  family: "SIC", status: "active", issued: "1999-07", effective: "In force since 15 July 2000", effSort: null,
  topics: ["tax"],
  summary: "Where a change in tax status alters current or deferred tax, the effect goes to profit or loss unless it relates to an item previously recognised in OCI or directly in equity.",
  points: [
    "Follows the general 'backwards tracing' principle in IAS 12.",
    "Relevant on listing, on entering or leaving a tax consolidated group, or on a change in residency."
  ],
  watch: "Australian tax consolidation entries frequently engage this. Trace the tax effect back to where the underlying item was recognised.",
  related: ["IAS 12"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/sic-25-income-taxes-changes-in-the-tax-status-of-an-entity-or-its-shareholders/"
},
{
  code: "SIC-29", au: "AASB Interpretation 129", title: "Service Concession Arrangements: Disclosures",
  family: "SIC", status: "active", issued: "2001-12", effective: "In force since 31 December 2001", effSort: null,
  topics: ["disclosure", "public-sector"],
  summary: "The disclosure companion to IFRIC 12 — a description of the arrangement, its significant terms, and the classification adopted, for both operators and grantors.",
  points: [
    "Disclose the terms that may affect the amount, timing and certainty of future cash flows.",
    "Applies to grantors as well as operators."
  ],
  watch: "Frequently overlooked in public-private partnership reporting.",
  related: ["IFRIC 12", "AASB 1059"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/sic-29-service-concession-arrangements-disclosures/"
},
{
  code: "SIC-32", au: "AASB Interpretation 132", title: "Intangible Assets — Web Site Costs",
  family: "SIC", status: "active", issued: "2001-03", effective: "In force since 25 March 2002", effSort: null,
  topics: ["assets"],
  summary: "Applies the IAS 38 development criteria to website build costs stage by stage — planning, application and infrastructure development, graphical design, content development, and operation.",
  points: [
    "Planning stage costs are expensed as research.",
    "Application and infrastructure development and graphical design costs may be capitalised where the IAS 38 criteria are met.",
    "Content developed to advertise or promote the entity's own products is expensed.",
    "Ongoing operating costs are expensed."
  ],
  watch: "A website built purely for marketing rarely generates probable future economic benefits on its own, so capitalisation is hard to support.",
  related: ["IAS 38", "IAS 36"],
  url: "https://www.ifrs.org/issued-standards/list-of-standards/sic-32-intangible-assets-web-site-costs/"
}

]);
