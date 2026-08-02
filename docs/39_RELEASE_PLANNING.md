# 39 — Release Planning

> **Document Type:** Strategic Release Planning
> **Series:** Community Talent Ecosystem Platform — Business Documentation Suite
> **Document Owner:** Product Strategy & Operations
> **Status:** Draft v1.1 — Reconciled against actual build sequence 2026-08-03 (see `00_DISCOVERY_AUDIT.md` §9, Open Question 1)

---

## 1. Executive Summary

This document presents the Release Plan for the Community Talent Ecosystem Platform. The platform will roll out in three phases to manage development risk, align with GTM phases, and ensure verification quality is stable before scaling. Phase 1 focuses on core learning and verification; Phase 2 introduces B2B hiring and partner monetization; Phase 3 expands global governance, chapter tools, and advanced integrations.

---

## 2. Purpose and Scope

### 2.1 Purpose
To align product development cycles with business milestones and marketing launch targets, ensuring that all teams work toward a single release roadmap.

### 2.2 Scope
Maps product releases from early launch prep through 24 months of operations, covering Phase 1 (MVP), Phase 2 (Growth), and Phase 3 (Scale).

---

## 3. Business Principles

1. **Verification-First Delivery**: Release schedules must prioritize the verification pipeline; without this core trust signal, other features have no value.
2. **Phase Gates**: Each phase must meet defined business milestones (member count, placement success) before starting the next phase.
3. **Operational Readiness**: Features cannot be released until local moderators, volunteers, and mentors have been trained.
4. **Stable Funding**: Product releases are budgeted using cash reserves and committed sponsor contracts to avoid financial risk.

---

## 3A. Reconciliation: Planned "Phase 1" vs. Actual Build Sequence

> **Callout — A Naming Collision, Confirmed**
> `00_DISCOVERY_AUDIT.md` §9 flagged as an open question whether this document's "Phase 1/2/3" release phases were the same scale as `packetpulse_Page_Inventory.md`'s "Phase 1/Phase 2" build sequence. They are **not** — and worse, they actively point in different directions. This document's Phase 1 (below, §5.1) is defined around **Core Learning & Labs + the lab-based Verification Pipeline (F-VER-001, F-LRN-002)**. What was actually built and shipped first is the **endorsement-based trust model with no labs at all** (F-VER-003 in `38_FEATURE_CATALOG.md`) — the exact inverse of this document's stated sequencing principle ("Verification-First Delivery," §3, which assumed verification meant the lab pipeline).

**Resolution:** This document's numbered phases (§5.1–§5.3) are relabeled **Release Track A (Originally Planned)** and describe the Phase 2 target-state feature set on the maturity scale established in `10_VERIFICATION_MODEL.md` §1A. A new **Release Track B (Actual)** below reflects what was really built first. Both tracks are kept — Track A is not deleted — because it still represents a real strategic intent (labs-first, verification-first) that the team may return to; it was simply not what shipped.

### 3A.1 Release Track B — Actual Build Sequence (as of 2026-08-03)

| Actual Release Step | Core Deliverables | Feature IDs | Maturity Tag |
|---|---|---|---|
| Step 1 (Shipped) | Portfolio, Skills & Endorsements, Endorsement Review Queue, Talent Search, Social Feed, Individual Recruiter/Billing | F-COM-001, F-VER-003, F-HR-001, F-COM-004, F-HR-002 | Phase 1 per `10_VERIFICATION_MODEL.md` §1A |
| Step 2 (Not started) | Learning Paths, Lab Sandbox, Lab-based Verification Pipeline, Trust Score, Reputation Ledger | F-LRN-001, F-LRN-002, F-VER-001, F-VER-002, F-COM-002 | Phase 2 |
| Step 3 (Not started) | Governance/Voting, Chapter tooling at scale | F-GOV-001 | Phase 2 / Track A Phase 3 |

**Consequence for the Release Dependencies Matrix (§6 below):** the stated dependency "F-VER-001 Review Worklist ← F-LRN-002 Lab Allocator" (Critical Path, "Postpones first verifications") never actually blocked anything, because Step 1 verification (F-VER-003) has **no lab dependency at all**. The Gold Standard Rule (§8) — gating Phase 2 launch on a 7-day lab review SLA — also cannot fire yet, since no lab reviews have happened. A new, honest gate is needed for the Track B → Step 2 transition; see Recommendation below.

> **Decision Note — Do Not Silently Renumber the Gantt Chart**
> The Gantt chart in §4 and the Phase 1/2/3 deliverable lists in §5 are left as originally written (Track A) rather than rewritten to match Track B, so that the discrepancy remains visible for Governance/Product Director review rather than quietly erased. Silently editing dates to match what shipped would hide the fact that the original sequencing plan was not followed, which is itself useful information for the next planning cycle.

---

## 4. Release Roadmap Timeline

```mermaid
gantt
    title Product Release Timeline
    dateFormat  YYYY-MM
    section Phase 1 (MVP)
    Core Learning & Labs       :active, 2026-07, 2026-10
    Verification Pipeline      :active, 2026-08, 2026-11
    section Phase 2 (Growth)
    B2B Hiring Sourcing Engine :2026-11, 2027-03
    Sponsorship Dashboard      :2026-12, 2027-04
    section Phase 3 (Scale)
    Constitutional Voting Board:2027-04, 2027-08
    Training Partner Registry  :2027-05, 2027-10
```

---

## 5. Release Phases and Deliverables (Release Track A — Originally Planned; see §3A for what actually shipped first)

### 5.1 Phase 1: MVP (Months 1 – 4)
* **Strategic Goal**: Establish the core learning, practice, and verification loops in founding chapters.
* **Core Deliverables**:
  - **F-COM-001 Portfolio Builder**: Member profiles showing verified badges.
  - **F-LRN-001 Path Tracker**: Curriculum pathways and course lists.
  - **F-LRN-002 Lab Allocator**: Sandbox reservation interface for practice.
  - **F-VER-001 Review Worklist**: Peer and mentor verification queue.
* **Success Gate**: 300 active members, 15 certified mentors, >50 verified badges awarded.

### 5.2 Phase 2: Growth (Months 5 – 10)
* **Strategic Goal**: Onboard corporate partners, monetize talent sourcing, and scale chapters.
* **Core Deliverables**:
  - **F-HR-001 Blind Sourcing**: Anonymized candidate searches for recruiters.
  - **F-COM-002 Reputation Ledger**: Contribution points and lead tracking.
  - **Sponsor center**: Scholarship block distributions and metrics tracking.
  - **Chapter Admin Portal**: Local member and event managers.
* **Success Gate**: 5 hiring partners onboarded, 15 chapters, 20 candidate placements.

### 5.3 Phase 3: Scale (Months 11 – 24)
* **Strategic Goal**: Build global governance tools, integrate external providers, and host large events.
* **Core Deliverables**:
  - **F-GOV-001 Voting Portal**: Constitutional amendment and election ballots.
  - **Incident Board**: Formal moderation dispute tracking logs.
  - **Partner APIs**: Content integrations for third-party platforms.
* **Success Gate**: 50 chapters, 100 placements, 10,000+ active members globally.

---

## 6. Release Dependencies Matrix

| Feature | Pre-requisite | Critical Path Dependency | Impact of Delay |
|---|---|---|---|
| **F-HR-001 Blind Sourcing** | F-VER-002 Trust Engine | Recruiters cannot search until candidate Trust Scores are calibrated. | High (Postpones B2B monetization). |
| **F-VER-001 Review Worklist**| F-LRN-002 Lab Allocator | Mentors cannot review labs until the sandbox logs can be verified. | Critical (Postpones first verifications). |
| **F-GOV-001 Voting Portal** | Member Registry | Member verification must be active to prevent duplicate voting. | Medium (Delays governance elections). |

---

## 7. Decision Notes

> **Decision Note — Postponing the Voting Portal**
> We postponed the Voting Portal (F-GOV-001) to Phase 3. During the initial pilot chapters (Phase 1/2), governance is managed by the founding committees. Building voting features early takes resources away from the core verification pipeline.

---

## 8. Callouts

> **Callout — The Gold Standard Rule**
> The transition from Phase 1 to Phase 2 is strictly conditional on the verification pipeline SLA. If lab review turnarounds exceed 7 business days, the Phase 2 launch will be delayed until mentor capacity is expanded.

---

## 9. Best Practices

- **Validate Training**: Chapter leaders must run simulated test sessions before new moderation or admin tools are deployed.
- **Roll Out Slowly**: Deploy major feature releases to seed chapters (e.g., Singapore) first, testing operations before global rollout.

---

## 10. Assumptions

- Seed chapters provide sufficient member feedback to validate Phase 1 workflows.
- Corporate partners accept the B2B dashboard and the anonymized candidate search format.

---

## 11. Future Scope

- **Global Talent Exchanges**: Enabling cross-border hiring compliance checks on candidate dashboards.

---

## 12. Review Notes

| Reviewer Role | Focus Area | Status |
|---|---|---|
| Product Manager | Feature dependencies and timelines | Approved |
| Community Director | Chapter operational readiness gates | Approved |

---

**Cross-References:** `02_COMMUNITY_BUSINESS_MODEL.md` · `05_HR_OPERATIONS.md` · `15_ROADMAP.md` · `38_FEATURE_CATALOG.md`
