/* ISSB sustainability standards, their Australian counterparts, and the adjacent
   frameworks an accountant runs into that are not accounting standards at all —
   auditing, ethics, the Corporations Act, US GAAP and public sector IPSAS. */

window.addStandards([

/* ---------- SUSTAINABILITY (ISSB / AASB) ---------- */
{
  code: "IFRS S1", au: "AASB S1", title: "General Requirements for Disclosure of Sustainability-related Financial Information",
  family: "SUST", status: "active", issued: "2023-06",
  effective: "IFRS S1 in force from 1 January 2024 where adopted. AASB S1 is voluntary in Australia.", effSort: null,
  topics: ["sustainability", "disclosure"],
  summary: "The umbrella sustainability standard. It requires disclosure of the sustainability-related risks and opportunities that could reasonably be expected to affect an entity's cash flows, access to finance or cost of capital over the short, medium or long term.",
  points: [
    "Four pillars carried over from the TCFD architecture: governance, strategy, risk management, and metrics and targets.",
    "Reported at the same time as, and for the same period as, the financial statements — the connectivity requirement.",
    "Materiality is investor-focused: what affects enterprise value, not broader impact on society.",
    "Where no ISSB standard covers a topic, the entity considers SASB industry-based guidance.",
    "In Australia, AASB S1 is voluntary. The mandatory regime runs through AASB S2."
  ],
  watch: "Australian entities should be clear which standard actually binds them. AASB S2 is the mandatory one; AASB S1 is an opt-in.",
  related: ["IFRS S2", "AASB S2", "IAS 1"],
  url: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/"
},
{
  code: "IFRS S2", au: "AASB S2", title: "Climate-related Disclosures",
  family: "SUST", status: "active", issued: "2023-06",
  effective: "AASB S2 mandatory in Australia from 1 January 2025 for Group 1, phasing in Groups 2 and 3 to 2027/28", effSort: "2025-01-01",
  topics: ["sustainability", "disclosure"],
  summary: "The climate-specific standard, and in Australia the mandatory one. It requires disclosure of climate-related physical and transition risks, scenario analysis, and greenhouse gas emissions — including Scope 3.",
  points: [
    "Scope 1, 2 and 3 greenhouse gas emissions must be disclosed, measured using the GHG Protocol.",
    "Climate resilience must be assessed through scenario analysis, with the approach and assumptions disclosed.",
    "Transition plans, climate-related targets, and progress against them are disclosed.",
    "Australia phases entities in by size and existing reporting obligations: Group 1 from periods beginning on or after 1 January 2025, Group 2 from 1 July 2026, Group 3 from 1 July 2027.",
    "Limited relief applies in the first years, particularly for Scope 3 and for comparatives.",
    "Australian climate reports are subject to assurance under a separate phased pathway."
  ],
  watch: "Scope 3 is the hard part. It depends on supplier and customer data most entities do not yet collect, and the first-year relief runs out faster than the systems work takes.",
  related: ["IFRS S1", "IAS 1", "IAS 36", "IAS 37"],
  url: "https://www.ifrs.org/issued-standards/ifrs-sustainability-standards-navigator/"
},

/* ---------- ADJACENT FRAMEWORKS ---------- */
{
  code: "ASA", au: "ASA 100–810", title: "Australian Auditing Standards (AUASB)",
  family: "ADJACENT", status: "active", issued: "ongoing",
  effective: "In force; individual standards revised regularly", effSort: null,
  topics: ["audit", "assurance"],
  summary: "Issued by the Auditing and Assurance Standards Board, these carry the force of law for Corporations Act audits. They govern how an audit is planned, executed and reported — not how transactions are accounted for.",
  points: [
    "ASA 200 sets the overall objectives; ASA 315 and ASA 330 cover risk assessment and response.",
    "ASA 700 to ASA 706 govern the auditor's report, including key audit matters in ASA 701.",
    "ASA 570 covers going concern — the standard that most often intersects with the accounting judgement.",
    "Assurance over sustainability reports runs through the ASSA 5000 series."
  ],
  watch: "Auditing standards do not resolve accounting questions. If the debate is about recognition or measurement, you are in the wrong book.",
  related: ["APES 110", "Corporations Act 2001"],
  url: "https://auasb.gov.au/"
},
{
  code: "APES 110", au: "APES 110", title: "Code of Ethics for Professional Accountants (including Independence Standards)",
  family: "ADJACENT", status: "active", issued: "ongoing",
  effective: "In force; revised periodically", effSort: null,
  topics: ["ethics", "audit"],
  summary: "Issued by the Accounting Professional & Ethical Standards Board and binding on members of CA ANZ, CPA Australia and the IPA. The conceptual framework of threats and safeguards, plus the independence requirements for audit and review engagements.",
  points: [
    "Five fundamental principles: integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour.",
    "Threats are categorised as self-interest, self-review, advocacy, familiarity and intimidation.",
    "Parts 4A and 4B contain the independence requirements for audits, reviews, and other assurance engagements.",
    "NOCLAR provisions set out responsibilities on non-compliance with laws and regulations."
  ],
  watch: "Independence breaches are the most common disciplinary matter. The self-review threat from preparing accounts you then audit is the classic trap for small firms.",
  related: ["ASA", "Corporations Act 2001"],
  url: "https://apesb.org.au/standards-guidance/"
},
{
  code: "Corporations Act 2001", au: "Chapter 2M", title: "Financial Reporting and Audit Obligations (Cth)",
  family: "ADJACENT", status: "active", issued: "2001",
  effective: "In force; amended regularly", effSort: null,
  topics: ["legal", "presentation"],
  summary: "The law that actually requires many Australian entities to prepare financial reports at all. Accounting standards say how to report; Chapter 2M says who must report, when, and to whom.",
  points: [
    "Section 296 requires compliance with accounting standards; section 297 requires a true and fair view.",
    "Section 292 sets out which entities must prepare a financial report — including large proprietary companies against the employee, revenue and asset thresholds.",
    "Lodgement deadlines: generally three months after year end for disclosing entities and registered schemes, four months for other entities.",
    "Directors' declaration and directors' report requirements sit in sections 295 and 298 to 300A.",
    "Charities generally report to the ACNC instead, under the ACNC Act."
  ],
  watch: "'True and fair' is an additional disclosure obligation in Australia, not an override. You cannot depart from a standard to achieve it.",
  related: ["AASB 1054", "AASB 1039", "ASA"],
  url: "https://www.legislation.gov.au/C2004A00818/latest/text"
},
{
  code: "US GAAP", au: null, title: "FASB Accounting Standards Codification",
  family: "ADJACENT", status: "active", issued: "2009-07",
  effective: "In force; updated by Accounting Standards Updates", effSort: null,
  topics: ["us-gaap"],
  summary: "The United States framework, organised by ASC topic number rather than standard number. Relevant to Australian accountants dealing with US parents, US subsidiaries, or dual reporting.",
  points: [
    "Key topics: ASC 606 revenue (converged with IFRS 15), ASC 842 leases, ASC 326 credit losses, ASC 805 business combinations.",
    "ASC 842 keeps the operating and finance lease distinction for lessees, so lease expense is straight-line — a real divergence from IFRS 16.",
    "LIFO inventory is permitted under US GAAP and prohibited under IAS 2.",
    "Development costs are generally expensed under US GAAP, whereas IAS 38 requires capitalisation once the criteria are met.",
    "Goodwill impairment testing follows a different model, and private companies may amortise goodwill."
  ],
  watch: "Revenue converged; leases did not. An IFRS 16 to ASC 842 reconciliation is a recurring source of group reporting differences.",
  related: ["IFRS 15", "IFRS 16", "IAS 2", "IAS 38"],
  url: "https://asc.fasb.org/"
},
{
  code: "IPSAS", au: null, title: "International Public Sector Accounting Standards",
  family: "ADJACENT", status: "active", issued: "ongoing",
  effective: "In force; adopted jurisdiction by jurisdiction", effSort: null,
  topics: ["public-sector"],
  summary: "Issued by the IPSASB, largely based on IFRS with public sector modifications. Australia took a different route — transaction-neutral Australian Accounting Standards with not-for-profit and public sector paragraphs added — so IPSAS is comparative reference here rather than binding.",
  points: [
    "Australia does not apply IPSAS. Public sector entities apply Australian Accounting Standards with AusNFP and public sector modifications.",
    "IPSAS 23 covers revenue from non-exchange transactions, the territory AASB 1058 occupies in Australia.",
    "Useful when comparing Australian public sector practice against New Zealand or other jurisdictions.",
    "The IPSASB has its own sustainability reporting standards programme."
  ],
  watch: "Do not cite IPSAS as authority in an Australian public sector engagement. AASB 1049, 1050, 1052, 1055 and 1059 are the operative standards.",
  related: ["AASB 1049", "AASB 1058", "AASB 1059"],
  url: "https://www.ipsasb.org/"
}

]);
