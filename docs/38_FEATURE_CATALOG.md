# 38 — Feature Catalogue

> **Document Type:** Product Feature Catalogue
> **Series:** Community Talent Ecosystem Platform — Business Documentation Suite
> **Document Owner:** Product Management
> **Status:** Draft v1.1 — Phase 1 (prototyped) features added, all features tagged by stage, 2026-08-03 (see `00_DISCOVERY_AUDIT.md` §4, `10_VERIFICATION_MODEL.md` §1A)

---

## 1. Executive Summary

This document presents the Business Feature Catalogue for the Community Talent Ecosystem Platform. The catalogue groups product capabilities into eight operational domains: Community, Learning, Verification, HR/Hiring, Events, Governance, Analytics, and Administration. Each feature is defined by its business goals, target actors, governing business rules, and dependencies to align product delivery with our strategic goals.

---

## 2. Purpose and Scope

### 2.1 Purpose
To provide product managers, designers, and engineers with a clear, business-validated backlog of features, preventing feature creep and ensuring that every system requirement supports a defined user outcome.

### 2.2 Scope
Covers all business features across the platform’s public, member, mentor, corporate, and administrative interfaces.

---

## 3. Business Principles

1. **Impact Prioritization**: Features are prioritized based on their contribution to member growth and verification credibility.
2. **Minimalist Architecture**: Avoid complex workflows that volunteer moderators or mentors cannot easily manage.
3. **No Technical Leakage**: Features are described at the business logic level, avoiding database, programming, or specific framework requirements.
4. **Consistency**: Feature names and definitions must align with the capability map and user stories.

---

## 4. Product Feature Taxonomy

```mermaid
mindmap
  root((Product Backlog))
    Community Features
      F_COM_001 Portfolio Builder
      F_COM_002 Reputation Ledger [Phase 2]
      F_COM_004 Social Feed and Connections [Phase 1, unreviewed]
    Learning Features
      F_LRN_001 Path Manager [Phase 2]
      F_LRN_002 Lab Reservation [Phase 2]
    Verification Features
      F_VER_001 Review Worklist [Phase 2]
      F_VER_002 Trust Engine [Phase 2]
      F_VER_003 Endorsement and Review Queue [Phase 1]
    HR Features
      F_HR_001 Blind Sourcing [Phase 1]
      F_HR_002 Individual Recruiter and Commission Billing [Phase 1, unreviewed]
    Events Features
      F_EVT_001 Meetup Manager
      F_EVT_002 Speaker Portal
    Governance Features
      F_GOV_001 Voting Board
      F_GOV_002 Incident Board
```

---

## 5. Product Feature Catalogue

### 5.1 Community Features

#### Feature ID: F-COM-001 — Verified Portfolio Builder
* **Feature Name**: Verified Portfolio Builder
* **Business Goal**: Allow members to showcase verified badges and contributions to employers.
* **Actors**: Member (Student, Fresher, Engineer), Company.
* **Business Rules**: Self-declared elements must be visually separated from verified badges.
* **Dependencies**: Verification Database.
* **Priority**: High (Must Have).
* **Stage**: Phase 1 (prototyped) — implemented as Profile Editor + Public Profile Preview (`frontend/member/profile-editor.html`, `profile-preview.html`); badge visuals are Phase 2 (see F-VER-004).
* **Future Scope**: Direct PDF/Resume export capability.

#### Feature ID: F-COM-002 — Reputation Ledger
* **Feature Name**: Reputation Point Ledger
* **Business Goal**: Track, display, and reward member community contributions.
* **Actors**: Member, Volunteer, Moderator, Chapter Admin.
* **Business Rules**: Apply annual decay rules for non-verified points.
* **Dependencies**: Points Ledger.
* **Priority**: Medium (Should Have).
* **Stage**: Phase 2 (target-state) — not implemented in the Phase 1 build; see `10_VERIFICATION_MODEL.md` §1A.
* **Future Scope**: Leaderboards with regional category filters.

---

### 5.2 Learning Features

#### Feature ID: F-LRN-001 — Learning Path Tracker
* **Feature Name**: Learning Path tracker
* **Business Goal**: Guide learners through structured, domain-specific curriculums.
* **Actors**: Member, Training Partner.
* **Business Rules**: Enforce prerequisite course completion.
* **Dependencies**: Curriculum database.
* **Priority**: High (Must Have).
* **Stage**: Phase 2 (target-state) — deferred per `packetpulse_Page_Inventory.md` "Deferred to Phase 2" list.
* **Future Scope**: Dynamic recommendations based on skill gaps.

#### Feature ID: F-LRN-002 — Lab Environment Allocator
* **Feature Name**: Lab Sandbox Allocator
* **Business Goal**: Allocate sandbox environment time slots for practice labs.
* **Actors**: Member.
* **Business Rules**: Limit members to 20 practice hours per month.
* **Dependencies**: Lab environments.
* **Priority**: High (Must Have).
* **Stage**: Phase 2 (target-state) — deferred; see `00_DISCOVERY_AUDIT.md` §4.2.
* **Future Scope**: Automatic environment cleanup on timeout.

---

### 5.3 Verification Features

#### Feature ID: F-VER-001 — Peer-to-Mentor Review Pipeline
* **Feature Name**: Verification Worklist
* **Business Goal**: Manage and assign submissions through peer and mentor review stages.
* **Actors**: Peer reviewer, Certified Mentor, Mentor Council.
* **Business Rules**: Enforce two-peer pre-screening before mentor assignment.
* **Dependencies**: Peer matching queue.
* **Priority**: High (Must Have).
* **Stage**: Phase 2 (target-state) — governs `P-MBR-002`. Phase 1 equivalent is F-VER-003 below.
* **Future Scope**: Automatic load balancing for active mentors.

#### Feature ID: F-VER-002 — Trust Score Engine
* **Feature Name**: Trust Score Calculator
* **Business Goal**: Calculate and display candidate credibility metrics.
* **Actors**: Member, Community HR, Company.
* **Business Rules**: Trust score decreases on conduct violations or cheating.
* **Dependencies**: Warning database.
* **Priority**: High (Must Have).
* **Stage**: Phase 2 (target-state) — not implemented; Phase 1 uses the flat trust-label system instead (see F-VER-003).
* **Future Scope**: Custom weighting adjustments for specialized roles.

#### Feature ID: F-VER-003 — Endorsement & Review Queue (Phase 1)
* **Feature Name**: Skills, Endorsements & Admin Review Queue
* **Business Goal**: Provide a working trust signal (self-declared → peer-endorsed → community-verified) before lab infrastructure exists.
* **Actors**: Member, Peer (Endorser), Chapter Admin/Reviewer.
* **Business Rules**: BR-VR-003 (`21_BUSINESS_RULES.md`) — not yet ratified by Governance Committee.
* **Dependencies**: Endorsement Inbox, Admin Review Queue (`frontend/member/skills.html`, `inbox.html`, `frontend/admin/review-queue.html`, `review-detail.html`).
* **Priority**: High (Must Have) — this is the actual Phase 1 launch-blocking feature, filling the role F-VER-001 plays in the Phase 2 target-state.
* **Stage**: Phase 1 (prototyped).
* **Future Scope**: Migrate members to the Phase 2 lab/rubric pipeline (F-VER-001) once available; grandfather existing "Community Verified" labels per `10_VERIFICATION_MODEL.md` §1A.

---

### 5.4 HR & Hiring Features

#### Feature ID: F-HR-001 — Anonymized Talent Search
* **Feature Name**: Blind Sourcing Engine
* **Business Goal**: Filter candidate databases without demographic bias.
* **Actors**: Community HR, Company.
* **Business Rules**: Anonymize names, gender, school names, and pictures in search views.
* **Dependencies**: Verification databases.
* **Priority**: High (Must Have).
* **Stage**: Phase 1 (prototyped) — implemented as Verified Talent Search (`frontend/recruiting/search.html`, `candidate.html`).
* **Future Scope**: Auto-suggest shortlists to recruiters.

#### Feature ID: F-HR-002 — Individual Recruiter Portal & Commission Billing
* **Feature Name**: Individual Recruiter Scope Toggle & Billing Summary
* **Business Goal**: Allow independent (non-company) recruiters to source candidates and track placement commissions, alongside company recruiters, in a shared UI.
* **Actors**: Individual Recruiter (**undocumented persona** — not in `19_PERSONAS.md`).
* **Business Rules**: **None exist.** No governing rule, pricing tier, or compliance requirement is defined anywhere in the suite.
* **Dependencies**: Shortlist/Requisition Tracker, Commission/Billing Summary (`frontend/recruiting/shortlist.html`, `billing.html`).
* **Priority**: **Unclassified** — implemented in code without a business-side priority decision ever being made.
* **Stage**: Phase 1 (prototyped, unreviewed).
* **Future Scope**: Formalize persona, pricing tier, and KYC/compliance posture — see `41_BUSINESS_REQUIREMENTS_DOCUMENT.md` §5.2 (BR-HR-05), §5.4 (BR-MZ-03), and `00_DISCOVERY_AUDIT.md` §4.3. **This is the single highest-priority open item across the entire suite as of 2026-08-03.**

#### Feature ID: F-COM-004 — Social Feed & Connections (Phase 1)
* **Feature Name**: Member Home Feed, Posts, and Connections Graph
* **Business Goal**: Drive engagement and discoverability among members via a social feed and follow graph.
* **Actors**: Member.
* **Business Rules**: **None exist** — `21_BUSINESS_RULES.md` has no post/content rules, and `30_MODERATOR_HANDBOOK.md`/`37_POLICY_MANUAL.md` were written before this feature existed.
* **Dependencies**: `frontend/member/home.html`, `connections.html`.
* **Priority**: **Unclassified.**
* **Stage**: Phase 1 (prototyped, unreviewed).
* **Future Scope**: Either retroactively scope moderation rules for feed content (spam, harassment) or deliberately scope the feed back out — see Open Question in `00_DISCOVERY_AUDIT.md` §9.

---

### 5.5 Governance & Operations Features

#### Feature ID: F-GOV-001 — Constitutional Voting Portal
* **Feature Name**: Governance Ballot Board
* **Business Goal**: Facilitate secure voting on constitutional amendments and elections.
* **Actors**: Member, Governance Committee.
* **Business Rules**: Active member status checks to prevent double-voting.
* **Dependencies**: Member registry.
* **Priority**: Medium (Should Have).
* **Stage**: Phase 2 (target-state).
* **Future Scope**: Delegate representation proxy voting.

---

## 6. Decision Notes

> **Decision Note — Priority of Blind Sourcing (F-HR-001)**
> Blind sourcing (F-HR-001) is classified as a "Must Have" for the first release. This supports our "Trust Before Resume" principle and differentiates our B2B hiring portal from traditional job boards.

---

## 7. Callouts

> **Callout — Feature Dependencies**
> A "Must Have" feature cannot go live if any of its listed "Must Have" dependencies are missing or incomplete. Ensure dependencies are developed first during release planning.

---

## 8. Best Practices

- **Avoid Feature Creep**: Validate every feature proposal against the Capability Map (`23_BUSINESS_CAPABILITY_MAP.md`) before inclusion.
- **Write Binary Acceptance Criteria**: Keep criteria clear (Pass/Fail) to support verification.

---

## 9. Assumptions

- Users have access to basic internet browsers to access these features.
- External learning partners can format their syllabus content to match our Learning Path templates.

---

## 10. Future Scope

- **Global Integration Plugins**: Plugins that allow members to display their verified badges directly on LinkedIn.

---

## 11. Review Notes

| Reviewer Role | Focus Area | Status |
|---|---|---|
| Product Director | Alignment with Release Priorities | Approved |
| Operations Lead | Feature usability and training needs | Approved |

---

**Cross-References:** `05_HR_OPERATIONS.md` · `10_VERIFICATION_MODEL.md` · `22_USER_STORIES.md` · `39_RELEASE_PLANNING.md`
