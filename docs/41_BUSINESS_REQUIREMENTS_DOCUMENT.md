# 41 — Business Requirements Document (BRD)

> **Document Type:** Business Requirements Document
> **Series:** Community Talent Ecosystem Platform — Business Documentation Suite
> **Document Owner:** Product Management
> **Status:** Draft v1.0
> **Date:** 2026-08-03

---

## 1. Executive Summary

This BRD consolidates `01_PROJECT_VISION.md`, `21_BUSINESS_RULES.md`, and `14_BUSINESS_WORKFLOWS.md` into a single business requirements artifact, closing the Phase 6 gap identified in `00_DISCOVERY_AUDIT.md` §2 ("no single BRD.md exists"). It states, in one place, what the business requires the product to do, under what rules, and via what workflows — reconciled against the actual Phase 1 build rather than the aspirational full model alone (see §5).

---

## 2. Purpose

To give any downstream reader — engineering, design, new hires, investors — a single authoritative statement of business requirements without needing to cross-reference the full 40-document suite. This document does not replace `01`, `21`, or `14`; it summarizes and traces to them.

---

## 3. Background

The Community Talent Ecosystem Platform exists to convert self-declared professional skill into community-verified, trusted proof (`01_PROJECT_VISION.md` §1–§2). A 40-document business discovery suite was produced across two releases (v1.0, v1.1). A subsequent, separately-produced Page Inventory and working frontend (`docs/packetpulse_Page_Inventory.md`, `frontend/`) scoped a leaner Phase 1 MVP than the suite originally documented; `00_DISCOVERY_AUDIT.md` (2026-08-03) reconciled the two, and Phases 0–5 of this discovery process have since updated the affected source documents. This BRD reflects that reconciled state.

---

## 4. Business Problem

See `01_PROJECT_VISION.md` §5 for the full problem landscape and §5.3 for validation status (all problem statements are currently **Assumed**, pending primary research — carried forward here as a standing caveat on every requirement below).

Summary: resumes are unverifiable, community contribution is invisible to employers, learning and hiring are disconnected, mentorship is informal, and community operations are ad hoc.

---

## 5. Business Requirements

Requirements are grouped by domain and tagged with maturity stage (**Phase 1** = prototyped/in-build now; **Phase 2** = target-state, not yet built) per the reconciliation in `10_VERIFICATION_MODEL.md` §1A.

### 5.1 Member Identity & Trust (BR-ID)

| ID | Requirement | Stage | Source Rule/Process |
|---|---|---|---|
| BR-ID-01 | Members must be able to build a portfolio from structured work/project history, not free-text resumes. | Phase 1 | `24_INFORMATION_ARCHITECTURE.md` §8.1 |
| BR-ID-02 | Skill claims must carry a visible trust label distinguishing self-declared, peer-endorsed, and community-verified status. | Phase 1 | BR-VR-003 (`21_BUSINESS_RULES.md`) |
| BR-ID-03 | No skill may reach the top trust label (Community Verified) without at least one human reviewer decision. | Phase 1 & 2 | BR-VR-001, BR-VR-003 |
| BR-ID-04 | Skill verification must eventually be evidence-based via structured lab submissions with rubric-driven peer + mentor review. | Phase 2 | BR-VR-001, BR-VR-002; P-MBR-002 |
| BR-ID-05 | A composite Trust Score, badges, and Professional Levels must aggregate verification, contribution, and peer feedback. | Phase 2 | `10_VERIFICATION_MODEL.md` §7–§9 |
| BR-ID-06 | Sponsorship or commercial relationships must never influence verification outcomes, in either phase. | Phase 1 & 2 | BR-SR-001 |

### 5.2 Hiring & Placement (BR-HR)

| ID | Requirement | Stage | Source Rule/Process |
|---|---|---|---|
| BR-HR-01 | Recruiters must be able to search verified talent by skill, chapter/region, and experience level. | Phase 1 | `packetpulse_Page_Inventory.md` §4.2 |
| BR-HR-02 | Only members with at least one community-verified skill may appear in recommended shortlists (except approved junior/internship exceptions). | Phase 1 & 2 | BR-HR-001 |
| BR-HR-03 | Community HR must perform a soft-skills intake before recommending a candidate to a company. | Phase 2 — **not yet implemented in Phase 1 build**, flagged as a risk in `25_SERVICE_BLUEPRINT.md` §4A.2 | P-COR-002 |
| BR-HR-04 | Placements that fail within 90 days for performance reasons trigger a fee rebate or free replacement search. | Phase 2 (depends on formal placement-fee billing, not yet reconciled with the individual-recruiter commission model) | BR-HR-002 |
| BR-HR-05 | Company hiring plans and recruiter accounts must support both organizational (Company) and independent (Individual Recruiter) actors. | **Gap — Phase 1 build implements this; no supporting persona, pricing tier, or business rule exists yet.** See §7. | `00_DISCOVERY_AUDIT.md` §4.3 |

### 5.3 Community Operations (BR-OP)

| ID | Requirement | Stage | Source Rule/Process |
|---|---|---|---|
| BR-OP-01 | Code of conduct violations follow a defined warning → suspension escalation path. | Phase 1 & 2 | BR-CR-001 |
| BR-OP-02 | New chapters require a minimum viable size (10 members, 1 certified mentor) before formal launch. | Phase 2 (chapter model not yet reflected in Phase 1 build's portal structure) | BR-CH-001 |
| BR-OP-03 | Constitutional/governance amendments require a 2/3 committee supermajority plus simple member majority. | Phase 2 | BR-GR-001 |

### 5.4 Monetization (BR-MZ)

| ID | Requirement | Stage | Source Rule/Process |
|---|---|---|---|
| BR-MZ-01 | Core learning, practice, and basic verification remain free for members in all phases. | Phase 1 & 2 | `35_PRICING_STRATEGY.md` §3 |
| BR-MZ-02 | Enterprise revenue derives from company subscriptions and placement fees, not member fees. | Phase 1 & 2 | `35_PRICING_STRATEGY.md` §5.1 |
| BR-MZ-03 | An individual-recruiter commission/billing model must be formally priced and governed. | **Gap** — implemented in frontend (`recruiting/billing.html`) with no supporting pricing tier or compliance rule. | `00_DISCOVERY_AUDIT.md` §4.3 |

---

## 6. Current Pain Points (Operational, as of this audit cycle)

- No escalation SLA exists if a Phase 1 endorsement request goes unanswered (`25_SERVICE_BLUEPRINT.md` §4A.2) — members can stall indefinitely with no fallback, unlike the Phase 2 blueprint's 48-hour auto-escalation.
- BR-VR-003 (governing the only verification process actually running) is not yet ratified by the Governance Committee — it was added during this discovery session and needs formal review, not silent adoption.
- The individual-recruiter actor (§5.2 BR-HR-05, §5.4 BR-MZ-03) has UI and workflow but no legal, compliance, or pricing foundation — highest-risk open item in this BRD.

---

## 7. Stakeholders

Primary: Students, Freshers, Experienced Engineers, Mentors (`19_PERSONAS.md` §5). Operational: Volunteers, Moderators, Community Admins, Community HR (§6.1–6.4). Corporate: Companies, Sponsors, Training Partners, Event Organisers (§6.5–6.8). Full register: `20_STAKEHOLDER_ANALYSIS.md`.

**Not yet formally onboarded as a stakeholder type:** the Individual Recruiter (see §5.2, §5.4 gaps) — implemented in product, absent from persona/stakeholder documentation.

---

## 8. Assumptions

- All assumptions from `01_PROJECT_VISION.md` §14 and §5.3 (problem validation) apply and are inherited here, unchanged.
- This BRD assumes the Phase 1/Phase 2 reconciliation in `10_VERIFICATION_MODEL.md` §1A is accepted; if that reconciliation is later rejected or revised, every "Stage" tag in §5 above must be re-checked.

## 9. Constraints

- No primary user research has yet validated the core problem statements (Assumed, not Validated — `01_PROJECT_VISION.md` §5.3).
- BR-VR-003 is unratified.
- Individual-recruiter compliance posture is undefined; until resolved, that portal should be treated as a legal exposure, not a revenue-ready feature.

## 10. Business Goals

Directly inherited from `01_PROJECT_VISION.md` §4 Objectives O1–O6 — no changes.

## 11. User Goals

Directly inherited from `19_PERSONAS.md` §6A JTBD statements (added 2026-08-03) — each business requirement in §5 above should trace to at least one job statement; requirements that don't (e.g., BR-HR-05, BR-MZ-03) are exactly the ones flagged as gaps in this document.

## 12. Success Metrics

See `17_SUCCESS_METRICS.md`. No new metrics introduced in this BRD; flagged follow-up: once BR-VR-003 is ratified, its review-cycle-time and accuracy-rate KPIs (`26_PROCESS_CATALOG.md` P-MBR-002A) need baseline measurement, since none exists pre-launch.

## 13. Risks

Carried from `16_RISK_ANALYSIS.md`, plus the risks newly surfaced in this BRD: unratified BR-VR-003, missing escalation SLA, and the individual-recruiter compliance gap (§6).

## 14. Recommendations

1. Ratify BR-VR-003 through the Governance Committee before treating Phase 1 verification as a stable, audited process.
2. Resolve the individual-recruiter gap (persona, pricing, compliance) before recruiting-portal commission billing goes live — this is the single highest-risk unresolved item across Phases 0–6.
3. Add an escalation SLA to the Phase 1 endorsement pathway, mirroring the Phase 2 48-hour auto-escalation pattern.

## 15. Open Questions

Carried from `00_DISCOVERY_AUDIT.md` §9, unchanged — none have been resolved by the Phase 1–6 work in this session; they remain open for the user's decision.

## 16. Decision Log

See `00_DISCOVERY_AUDIT.md` §6 for the full chronological decision log. This BRD's own creation is logged there as the Phase 6 deliverable.

---

**Cross-References:** `01_PROJECT_VISION.md` · `21_BUSINESS_RULES.md` · `14_BUSINESS_WORKFLOWS.md` · `10_VERIFICATION_MODEL.md` · `25_SERVICE_BLUEPRINT.md` · `26_PROCESS_CATALOG.md` · `00_DISCOVERY_AUDIT.md`
