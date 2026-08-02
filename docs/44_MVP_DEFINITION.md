# 44 — MVP Definition

> **Document Type:** MVP Scope Decision
> **Series:** Community Talent Ecosystem Platform — Business Documentation Suite
> **Document Owner:** Product Management
> **Status:** Draft v1.0 — Ratification Decision
> **Date:** 2026-08-03

---

## 1. Executive Summary

This is the Phase 9 deliverable, closing the "no MVP-definition document independent of the Feature Catalog" gap identified in `00_DISCOVERY_AUDIT.md` §2. `42_PRODUCT_REQUIREMENTS_DOCUMENT.md` §7 previewed a "de facto MVP" and explicitly deferred ratifying it. This document makes that ratification decision.

---

## 2. The Question

Five features appear in the `frontend/` UI mockups today: `F-COM-001` (Portfolio), `F-VER-003` (Endorsement & Review Queue), `F-HR-001` (Talent Search), `F-COM-004` (Social Feed & Connections), `F-HR-002` (Individual Recruiter & Commission Billing). These mockups were converted from design files to communicate product ideas to the team — no development has started. Three of the five have priority, actors, and a governing business rule already worked out. Two do not. The question this document answers: **does a feature appearing in a design mockup automatically become MVP/development scope, or does that require a business decision independent of what the mockups happened to include?**

**Answer: the latter.** A mockup existing is not the same as a feature being validated as belonging in the MVP — mockups are exactly the design-thinking artifact this discipline expects to interrogate before committing engineering time. Per the standing MVP discipline this whole process is chartered under — "Can this be removed? Can this wait? Does this create value? Would users pay? Would users return? Would users invite others?" — each mocked-up feature is evaluated against those questions below, not assumed in.

---

## 3. MVP Scope Decision

| Feature | MVP Status | Rationale |
|---|---|---|
| **F-COM-001** Portfolio Builder | **In MVP** | Directly serves the core value proposition (`01_PROJECT_VISION.md` §1) — without a portfolio there is nothing to endorse or search. Cannot be removed. |
| **F-VER-003** Endorsement & Review Queue | **In MVP** | This *is* the trust mechanism (per `10_VERIFICATION_MODEL.md` §1A) — the entire platform's differentiation collapses without it. Cannot wait. |
| **F-HR-001** Talent Search | **In MVP** | Where revenue starts (`packetpulse_Page_Inventory.md`, mockup ordering rationale). Users (recruiters) would pay for this specifically. |
| **F-COM-004** Social Feed & Connections | **Conditionally In MVP** | Passes "would users return / engage" — a feed plausibly drives retention. But it currently has **no moderation business rules** (`38_FEATURE_CATALOG.md` F-COM-004). **Condition: ships to general availability only after `21_BUSINESS_RULES.md` gains content/moderation rules and `30_MODERATOR_HANDBOOK.md`/`37_POLICY_MANUAL.md` are extended to cover feed content.** Until then, treat as beta/limited-audience only. |
| **F-HR-002** Individual Recruiter & Commission Billing | **Out of MVP — hold** | Fails multiple MVP tests: no persona, no pricing tier, no compliance review, and it would involve real money (commission billing) and real legal exposure once built (PESTLE §6A Political/Legal factors in `34_COMPETITOR_ANALYSIS.md`). "Would users pay" is unanswerable because there is no approved price. Building unpriced, unregulated commission billing is a business risk to plan around now, while it's still just a mockup — not something to discover after development starts. **Recommendation: do not schedule this mockup for development until Phase 11 work (persona, pricing, compliance) closes.** |

---

## 4. Formal MVP Definition

> **The MVP is: Portfolio Builder + Endorsement-Based Verification + Talent Search (F-COM-001, F-VER-003, F-HR-001), with Social Feed (F-COM-004) as a conditional/beta inclusion pending moderation rules, and Individual Recruiter Billing (F-HR-002) explicitly excluded pending Phase 11 resolution.**

This is a narrower MVP than what the `frontend/` mockups currently depict — the discovery process has found that the design mockups got ahead of business ratification on two features. Because nothing has been built yet, catching this now costs nothing but a documentation correction; this document exists so the gap is closed before development starts, not discovered after.

---

## 5. Decision Notes

> **Decision Note — Why Not Just Ratify Everything As-Built**
> The path of least resistance was to declare all five prototyped features "MVP" and move on. That was rejected because `F-HR-002` specifically involves commission payments to a currently-undefined actor type with no compliance review — retroactively blessing that as "MVP" would mean the business requirements process rubber-stamped a live financial/legal exposure instead of catching it. This is exactly the kind of assumption this discovery process exists to challenge, per the standing instruction to never blindly agree and to remove features that don't hold up.

---

## 6. Business Goals / User Goals

Inherited unchanged from `01_PROJECT_VISION.md` §4 and `19_PERSONAS.md` §6A — this document does not change what the business or users want, only which prototyped features are authorized to move forward into actual development.

> **Correction — 2026-08-03**: Per user clarification, `frontend/` and `packetpulse_Page_Inventory.md` are **UI mockups converted from design files to illustrate product ideas to teammates — no development has started and nothing is in production.** Earlier drafting of this document (and related documents in this session) framed the F-HR-002 gap as a live operational/financial risk; that framing was incorrect and has been corrected below and throughout the affected documents (see `00_DISCOVERY_AUDIT.md` decision log). The underlying business point stands unchanged: F-HR-002 should not be *built* until persona, pricing, and compliance are resolved — it's a pre-development gate, not an incident response.

## 7. Risks

- If development on `F-HR-002` begins before persona, pricing, and compliance (Phase 11) are resolved, engineering will build against an unratified commission model — this decision exists specifically to prevent that, while there is still time to sequence the work correctly.
- Gating `F-COM-004` to beta may reduce Phase 1 engagement numbers used in `39_RELEASE_PLANNING.md` success gates (e.g., "300 active members") if those gates assumed full feed access — worth flagging to whoever owns those targets before development planning locks them in.

## 8. Recommendations

1. Before development begins on the recruiting portal, confirm with the team that `F-HR-002` will not be built until `BR-HR-003` and `35_PRICING_STRATEGY.md` §5.2A are ratified.
2. Fast-track the Phase 11 individual-recruiter closure work so `F-HR-002` can be re-evaluated for MVP inclusion before it reaches a development sprint, rather than left indefinitely out of scope.

## 9. Open Questions

- Who has the authority to formally hold `F-HR-002` out of the development backlog until Phase 11 work closes — this document can recommend it, but cannot enforce it.

---

**Cross-References:** `42_PRODUCT_REQUIREMENTS_DOCUMENT.md` · `38_FEATURE_CATALOG.md` · `41_BUSINESS_REQUIREMENTS_DOCUMENT.md` · `00_DISCOVERY_AUDIT.md`
