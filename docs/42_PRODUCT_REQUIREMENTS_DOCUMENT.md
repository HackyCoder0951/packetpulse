# 42 — Product Requirements Document (PRD)

> **Document Type:** Product Requirements Document
> **Series:** Community Talent Ecosystem Platform — Business Documentation Suite
> **Document Owner:** Product Management
> **Status:** Draft v1.0
> **Date:** 2026-08-03

---

## 1. Executive Summary

This PRD is the Phase 7 deliverable, consolidating `03_MEMBER_LIFECYCLE.md`, `08_LEARNING_ECOSYSTEM.md`, `09_LAB_AND_PRACTICE_MODEL.md`, `10_VERIFICATION_MODEL.md`, `11_COMMUNITY_REPUTATION_SYSTEM.md`, `22_USER_STORIES.md`, and `38_FEATURE_CATALOG.md` into a single product-facing requirements statement. Unlike `41_BUSINESS_REQUIREMENTS_DOCUMENT.md` (Phase 6, the *why* and business rules), this document states the *what* — which features exist, for which actors, in which release stage, and how they're prioritized — reconciled against the actual Phase 1 build per `10_VERIFICATION_MODEL.md` §1A.

---

## 2. Purpose

To give product, design, and engineering a single authoritative feature list — with stage, priority, and actor already resolved — instead of requiring them to reconstruct it from seven separate business documents plus the untracked `packetpulse_Page_Inventory.md`.

---

## 3. Product Scope by Maturity Stage

| Stage | Definition | Status |
|---|---|---|
| Phase 1 | Endorsement-based trust, social feed, portfolio, talent search, individual-recruiter billing | Prototyped (`frontend/`) |
| Phase 2 | Lab/rubric verification, Trust Score, Reputation Ledger, Learning Paths, Governance voting | Not started |

This is the same two-stage model established in `10_VERIFICATION_MODEL.md` §1A and used consistently across `25_SERVICE_BLUEPRINT.md` §4A, `26_PROCESS_CATALOG.md` (`P-MBR-002A`), and `38_FEATURE_CATALOG.md` (this session's Stage tags).

---

## 4. Phase 1 Product Requirements (Prototyped)

| Feature ID | Feature | Actors | Priority | Notes |
|---|---|---|---|---|
| F-COM-001 | Verified Portfolio Builder | Member, Company | Must Have | Badge visuals depend on Phase 2 |
| F-VER-003 | Skills, Endorsements & Admin Review Queue | Member, Peer, Chapter Admin | Must Have | Governed by unratified BR-VR-003 |
| F-HR-001 | Anonymized Talent Search | Community HR, Company | Must Have | |
| F-COM-004 | Social Feed & Connections | Member | **Unclassified** | No governing business rules exist |
| F-HR-002 | Individual Recruiter Portal & Commission Billing | Individual Recruiter (undocumented persona) | **Unclassified** | Highest-risk open item in the suite |

**Also prototyped, not yet catalogued as formal Feature IDs** (present in `packetpulse_Page_Inventory.md` / `frontend/` but never assigned an ID in `38_FEATURE_CATALOG.md` before this session, and still not fully specified at the business-rule level): GitHub/LinkedIn profile import, event RSVP/directory (public + member views), notifications, moderation queue, member roster, mentor/reviewer role management. These are lower-risk (they extend existing documented capabilities rather than introducing new actors or money flows) and are deferred to a future Feature Catalog pass rather than blocking this PRD.

---

## 5. Phase 2 Product Requirements (Target-State, Not Started)

| Feature ID | Feature | Actors | Priority |
|---|---|---|---|
| F-LRN-001 | Learning Path Tracker | Member, Training Partner | Must Have |
| F-LRN-002 | Lab Environment Allocator | Member | Must Have |
| F-VER-001 | Peer-to-Mentor Review Pipeline | Peer Reviewer, Mentor, Mentor Council | Must Have |
| F-VER-002 | Trust Score Engine | Member, Community HR, Company | Must Have |
| F-COM-002 | Reputation Ledger | Member, Volunteer, Moderator, Chapter Admin | Should Have |
| F-GOV-001 | Constitutional Voting Portal | Member, Governance Committee | Should Have |

Full specifications: `38_FEATURE_CATALOG.md` §5.2–5.3, §5.5.

---

## 6. User Stories Coverage Check

`22_USER_STORIES.md` was written against the Phase 2 target-state model (labs, badges, points). It has **not** been re-validated against the Phase 1 prototyped feature set (F-VER-003, F-COM-004, F-HR-002) — none of these three have corresponding user stories with acceptance criteria yet. This is a gap this PRD surfaces but does not close; recommended as the next Phase 10 (Agile Artifacts) work item.

---

## 7. MVP Definition (Preview)

The roadmap schedules a formal MVP Definition document at Phase 9. In the interim, based on what is actually prototyped and reviewed in this PRD, the **de facto MVP** is: F-COM-001, F-VER-003, F-HR-001 — the three Phase 1 features that already have priority, actors, and (mostly) governing rules. F-COM-004 and F-HR-002 are prototyped but **not yet qualified as MVP-ready** — they lack priority classification and governing business rules, and should not be treated as "done" simply because code exists. Phase 9 should ratify or reject this de facto scope explicitly rather than let it stand by default.

---

## 8. Non-Functional Requirements

None exist in the suite (confirmed gap, `00_DISCOVERY_AUDIT.md` §2, Phase 8 row). Out of scope for this document — reserved for the Phase 8 deliverable.

---

## 9. Risks

- Shipping F-COM-004 and F-HR-002 without business-rule backing means engineering has already built ahead of governance sign-off — the reverse of the "Development is forbidden until research is complete" principle this whole discovery process was chartered under. This should be named plainly to stakeholders, not glossed over.
- `22_USER_STORIES.md` drift (§6) means acceptance criteria for two of five Phase 1 features don't exist — QA/review has no documented basis to sign off on them.

## 10. Recommendations

1. Ratify or reject F-COM-004 and F-HR-002 as in-scope MVP features (§7) before further building on top of them.
2. Write user stories + acceptance criteria for F-VER-003, F-COM-004, F-HR-002 (feeds Phase 10).
3. Resolve Release Track A vs. Track B in `39_RELEASE_PLANNING.md` §3A at the next planning review — a real decision is needed on whether Track A's lab-first sequencing is still the strategic intent or should be formally superseded by what prototyped.

## 11. Open Questions

Carried from `00_DISCOVERY_AUDIT.md` §9 and `41_BUSINESS_REQUIREMENTS_DOCUMENT.md` §15 — unchanged.

## 12. Decision Log

See `00_DISCOVERY_AUDIT.md` §6. This PRD's creation is the Phase 7 entry.

---

**Cross-References:** `41_BUSINESS_REQUIREMENTS_DOCUMENT.md` · `38_FEATURE_CATALOG.md` · `39_RELEASE_PLANNING.md` · `22_USER_STORIES.md` · `10_VERIFICATION_MODEL.md` · `00_DISCOVERY_AUDIT.md`
