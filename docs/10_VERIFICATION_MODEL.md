# 10 — Verification Model

> **Document Type:** Trust & Verification Model Document
> **Series:** Community Talent Ecosystem Platform — Business Documentation Suite
> **Cross-Reference:** `09_LAB_AND_PRACTICE_MODEL.md`, `11_COMMUNITY_REPUTATION_SYSTEM.md`, `05_HR_OPERATIONS.md`
> **Status:** Draft v1.1 — Phase 1/Phase 2 Trust Framework reconciliation added 2026-08-03 (see `00_DISCOVERY_AUDIT.md` §4.1, §6)

---

## 1A. Phase 1 / Phase 2 Trust Framework (Reconciliation)

> **Callout — Resolving a Documented Contradiction**
> `00_DISCOVERY_AUDIT.md` §4.1 found that this document's fully-built-out lab/rubric/mentor-review model does not match what was actually designed and built for Phase 1 (`docs/packetpulse_Page_Inventory.md`, implemented in `frontend/member/skills.html`, `verification.html`, `frontend/admin/review-queue.html`). Rather than pick a winner, this section formally establishes **both as the same model at two different maturity stages**, so neither document is "wrong" — they describe sequential states of one evolving trust framework.

**Decision:** This document (§2 onward) describes the **Phase 2 target-state** trust framework — the full peer-review → mentor-review → lab-evidence pipeline, Trust Score, badges, and Professional Levels. **Phase 1**, as actually prototyped, is a deliberately reduced subset:

| Dimension | Phase 1 (Prototyped) | Phase 2 (This Document, §2–§9) |
|---|---|---|
| Evidence basis | Self-reported skill + peer endorsement (no structured lab submission) | Practical lab/exercise evidence (§5, §6) |
| Trust labels | Three flat states: Self-declared → Peer-endorsed → Community Verified | Full Verification States lifecycle (§3.2): Claimed → Submitted → InReview → Verified → UnderPeriodicReview → Revoked |
| Reviewer path | Endorsement count crosses a threshold, then one manual Admin/Reviewer approve-or-reject step (`frontend/admin/review-queue.html`) | Two-stage Peer Review → Mentor Review pipeline (§4), with Verification Council escalation (§11) |
| Trust Score | Not present — no composite score, no decay mechanic | Composite Trust Score across verified skills, contributions, peer feedback (§7) |
| Badges / Levels | Not present | Skill/Contribution/Milestone/Leadership badges (§8), five-tier Professional Levels (§9) |
| Reputation System link | Not present | Feeds `11_COMMUNITY_REPUTATION_SYSTEM.md` (§10) |

**Why this sequencing is sound (not a compromise):** the Phase 1 endorsement model still upholds the non-negotiable philosophy in §2 below — no skill is "Community Verified" purely by self-declaration, and a human reviewer gates the top trust label. It just uses peer endorsement volume + one manual review as the evidence type, instead of a structured lab rubric. This satisfies the JTBD statements in `19_PERSONAS.md` §6A ("a trustworthy, low-effort way to evaluate people") without requiring the lab infrastructure to exist first — consistent with the lean-startup sequencing already implicit in `packetpulse_Page_Inventory.md`'s "Suggested mockup order."

**What must NOT drift silently between phases:**
1. The **three-state Phase 1 label set must map cleanly onto the Phase 2 lifecycle** — "Community Verified" (Phase 1) is the same trust claim as "Verified" (Phase 2, §3.2), not a separate, lesser tier. When Phase 2 ships, existing Phase 1 "Community Verified" members should be grandfathered as "Verified," not forced to resubmit.
2. **Non-Influence principle applies identically in both phases** — sponsorship/commercial relationships must not shortcut either the endorsement-threshold path or the lab-review path (extends §12 Best Practices, and the Non-Influence Clause in `35_PRICING_STRATEGY.md` §8).
3. Trust Score, badges, and Professional Levels (§7–§9) are **explicitly Phase 2 scope** — they should not be partially bolted onto the Phase 1 UI (e.g., no fake "points" without the reputation system behind them) since a half-implemented reputation mechanic is worse for trust than none.

**Traceability update:** `40_TRACEABILITY_MATRIX.md` O1 row (BR-VR-001, BR-VR-002 → F-VER-001, F-VER-002) should be read as tracing to the Phase 2 lab/rubric pipeline specifically; a Phase 1 business rule and feature ID pair covering the endorsement-threshold mechanism does not yet exist in `21_BUSINESS_RULES.md` / `38_FEATURE_CATALOG.md` and is a follow-up gap (see `00_DISCOVERY_AUDIT.md` §7, Recommendation #2 area).

---

## 1. Purpose

Verification is the single most important trust mechanism in the entire ecosystem — it is what converts a claimed skill into a community-endorsed, employer-trustable fact. This document defines the business model for how skill verification, community review, assessment, trust scoring, badges, and professional levels work together.

> **Callout**
> Every other document in this suite — hiring, reputation, portfolios, career growth — ultimately depends on the integrity of this model.

---

## 2. Verification Philosophy

| Principle | Description |
|-----------|--------------|
| Community-Verified, Not Self-Declared | No skill is considered "proven" until reviewed and endorsed by qualified peers/mentors |
| Evidence-Based | Verification is grounded in practical evidence (see `09_LAB_AND_PRACTICE_MODEL.md`) |
| Transparent Standards | Verification criteria are public and consistent |
| Revocable Trust | Verified status can be reviewed and revoked if standards are later found unmet |

---

## 3. Skill Verification Process

### 3.1 Verification Flow

```mermaid
flowchart TD
    A[Member Completes Practice/Evidence] --> B[Submits for Verification]
    B --> C[Eligibility Check]
    C --> D{Meets Submission Criteria?}
    D -->|No| E[Returned with Guidance]
    D -->|Yes| F[Assigned to Reviewer Pool]
    F --> G[Peer Review]
    G --> H{Peer Confidence Sufficient?}
    H -->|No| E
    H -->|Yes| I[Mentor Review]
    I --> J{Mentor Approves?}
    J -->|No| K[Feedback Provided, Resubmission Allowed]
    J -->|Yes| L[Skill Verified]
    L --> M[Added to Member Portfolio]
    K --> A
```

### 3.2 Verification States

```mermaid
stateDiagram-v2
    [*] --> Claimed
    Claimed --> Submitted
    Submitted --> InReview
    InReview --> Verified
    InReview --> ReturnedForRevision
    ReturnedForRevision --> Submitted
    Verified --> UnderPeriodicReview
    UnderPeriodicReview --> Verified: Standards Maintained
    UnderPeriodicReview --> Revoked: Standards Not Maintained
    Revoked --> [*]
    Verified --> [*]
```

---

## 4. Community Review

### 4.1 Reviewer Roles

| Role | Responsibility |
|------|------------------|
| Peer Reviewer | Community members with relevant domain standing, providing first-pass review |
| Mentor Reviewer | Senior, trusted members providing final verification authority |
| Verification Council (escalation) | Handles disputed or edge-case verification decisions |

### 4.2 Review Panel Structure

```mermaid
graph TD
    SUB[Submission] --> PR[Peer Review Pool]
    PR --> MR[Mentor Review]
    MR --> VC[Verification Council - Escalation Only]
    VC -.disputes only.-> MR
```

---

## 5. Assessments

Assessment mechanics are detailed in `09_LAB_AND_PRACTICE_MODEL.md`. Within verification specifically, assessment results serve as the primary evidentiary basis for a reviewer's decision.

| Evidence Type | Weight in Verification Decision |
|-------------------|-------------------------------------|
| Practical Exercise Outcomes | High |
| Community Challenge Performance | High |
| Peer Endorsement History | Medium |
| Contribution/Teaching History | Medium |

---

## 6. Practical Validation

> **Decision Note**
> Verification is never granted on the basis of course completion alone. Practical validation — demonstrated application — is a mandatory input.

### 6.1 Practical Validation Criteria (Business View)

| Criterion | Description |
|-----------|--------------|
| Correctness | The practical work meets the defined standard for the skill |
| Independence | The work reflects the member's own understanding, not guided assistance |
| Consistency | The member demonstrates the skill more than once, not as a single fluke result |

---

## 7. Trust Score

### 7.1 Trust Score Concept

A **Trust Score** is a composite, business-level indicator of a member's overall verified standing and community credibility — combining verified skills, contribution history, and community feedback.

```mermaid
graph TD
    VS[Verified Skills] --> TS((Trust Score))
    CH[Contribution History] --> TS
    PF[Peer Feedback] --> TS
    MR[Mentor Endorsements] --> TS
    TS --> POR[Member Portfolio Visibility]
    TS --> HR[Community HR Consideration - see 05]
```

### 7.2 Trust Score Principles

| Principle | Description |
|-----------|--------------|
| No Purchase Path | Trust Score cannot be purchased, boosted by sponsorship, or fast-tracked by companies |
| Decays Without Activity | Sustained inactivity may reduce visibility of trust standing (subject to periodic review) |
| Transparent to the Member | Members can see how their own trust standing is composed |

---

## 8. Badges

| Badge Category | Example | Trigger |
|--------------------|---------|---------|
| Skill Badge | "Verified: Cloud Fundamentals" | Skill verification approval |
| Contribution Badge | "Community Contributor" | Sustained content/discussion contribution |
| Milestone Badge | "1-Year Member" | Tenure milestone |
| Leadership Badge | "Mentor" / "Chapter Lead" | Role attainment |

### 8.1 Badge Award Flow

```mermaid
flowchart LR
    A[Trigger Event Occurs] --> B{Meets Badge Criteria?}
    B -->|Yes| C[Badge Awarded]
    B -->|No| D[No Action]
    C --> E[Added to Member Portfolio]
```

---

## 9. Professional Levels

### 9.1 Level Structure (Illustrative)

| Level | Description | Typical Basis |
|-------|--------------|-------------------|
| Emerging | New to the domain, foundational learning underway | Registration + early learning activity |
| Practitioner | Verified foundational skill(s) | 1+ verified skill |
| Proficient | Verified intermediate/advanced skill(s) + sustained contribution | Multiple verified skills, contribution history |
| Expert | Deep verified expertise + mentorship activity | Verified advanced skill + active mentoring |
| Distinguished | Sustained, recognized community leadership | Long-term contribution, leadership role |

### 9.2 Level Progression

```mermaid
flowchart LR
    L1[Emerging] --> L2[Practitioner]
    L2 --> L3[Proficient]
    L3 --> L4[Expert]
    L4 --> L5[Distinguished]
```

---

## 10. Community Reputation (Interface)

Verification is a primary input into the broader Community Reputation System — full detail in `11_COMMUNITY_REPUTATION_SYSTEM.md`.

```mermaid
graph LR
    V[Verification Outcomes] --> R[Reputation System]
    B[Badges] --> R
    TS[Trust Score] --> R
    R --> LB[Leaderboards]
    R --> MR[Mentor/Volunteer Levels]
```

---

## 11. Verification Disputes

| Step | Description |
|------|--------------|
| Dispute Raised | Member or reviewer flags a disagreement |
| Verification Council Review | Escalation-only panel reviews the case |
| Final Decision | Council decision is binding, documented, and communicated |

```mermaid
flowchart TD
    A[Dispute Raised] --> B[Verification Council Review]
    B --> C[Evidence Re-Examined]
    C --> D[Final Decision Issued]
    D --> E[Decision Logged for Consistency Reference]
```

---

## 12. Best Practices

- Keep verification criteria domain-specific and publicly documented to avoid perceived arbitrariness.
- Rotate peer reviewers to prevent reviewer fatigue and bias.
- Periodically re-review verified status for fast-evolving domains (e.g., security) to keep trust current.
- Never allow commercial relationships (sponsorship, company partnership) to shortcut the verification pipeline.

## 13. Assumptions

- A sufficient pool of qualified peer and mentor reviewers exists or is cultivated as the community matures.
- Verification criteria will be domain-specific and maintained by community subject-matter stewards.

## 14. Future Scope

- Formal periodic re-verification cycles for high-change domains.
- Cross-community verification recognition (federated trust across partner communities).

## 15. Review Notes

| Reviewer Role | Focus Area | Status |
|----------------|------------|--------|
| Mentor Council | Verification criteria rigor | Pending Review |
| Governance Committee | Dispute resolution authority | Pending Review |

---

**Cross-References:** `09_LAB_AND_PRACTICE_MODEL.md` · `11_COMMUNITY_REPUTATION_SYSTEM.md` · `05_HR_OPERATIONS.md` · `06_COMPANY_PARTNERSHIP_MODEL.md`
