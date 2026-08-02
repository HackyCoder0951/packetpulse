# Community Talent Ecosystem Platform — Page Inventory for Mockups

> Phase 1 scope only (Community/Social + Lightweight Verification +
> Placement). Phase 2 (Learning/Labs) pages are listed separately at the
> end so they don't get mixed into the first mockup batch.

Format per page: **Purpose** — what it's for. **Key elements** — what's on
it. **Actions** — what a user can actually do/click.

---

## PORTAL 1: PUBLIC (no login)

### 1.1 Landing Page
- **Purpose**: Explain the platform's value prop and "Community Verified"
  concept to new visitors.
- **Key elements**: Hero message, "how it works" (profile → endorse →
  verify → get placed), stats (members, verified count, placements made),
  featured events.
- **Actions**: Sign up, Log in, Browse events, Learn more (scroll/anchor links).

### 1.2 Events Directory (public)
- **Key elements**: List/grid of upcoming meetups & webinars, filter by
  chapter/region/topic.
- **Actions**: View event detail, RSVP (prompts login if not signed in).

### 1.3 Event Detail Page (public)
- **Key elements**: Date/time, description, speaker(s), location/link,
  attendee count.
- **Actions**: RSVP, Add to calendar, Share.

### 1.4 Public Profile View
- **Key elements**: Name, chapter, bio, work history, projects/repos,
  skills with trust labels (Self-declared / Peer-endorsed / Community
  Verified), endorsement count per skill.
- **Actions**: Contact/message (login required), Share profile link.

### 1.5 Sign Up
- **Key elements**: Email/name/chapter selection, role selection
  (Student/Fresher/Engineer).
- **Actions**: Create account, Sign up with GitHub/LinkedIn (optional
  import of existing profile data).

### 1.6 Log In
- **Actions**: Email/password login, SSO options, forgot password.

---

## PORTAL 2: MEMBER (authenticated — Student/Fresher/Engineer)

### 2.1 Home / Feed
- **Purpose**: Central landing screen after login.
- **Key elements**: Activity feed (posts from connections, endorsement
  notifications, event reminders), quick stats (profile completeness,
  pending endorsement requests).
- **Actions**: Create post, Like/comment on posts, Filter feed
  (all/connections/chapter).

### 2.2 Profile Editor
- **Key elements**: Two sections — *Experience & Education* (LinkedIn-style:
  add role, company, dates, description) and *Projects & Repos*
  (GitHub-style: link GitHub account for auto-pull, or manually add
  project with description/link).
- **Actions**: Edit/add/delete entries, Connect GitHub account, Upload
  profile photo, Set profile visibility (public/connections-only).

### 2.3 Skills & Endorsements
- **Key elements**: List of skills, each showing current trust label,
  endorsers (names/avatars), pending endorsement requests sent by me.
- **Actions**: Add a skill, Request endorsement (select peer + message),
  View who endorsed a skill.

### 2.4 Verification Status
- **Key elements**: Per-skill progress toward "Community Verified"
  (endorsement count vs. threshold, manual review status:
  pending/approved/rejected + reviewer reason if rejected).
- **Actions**: Submit/resubmit for manual review, View rejection reason,
  Appeal (if applicable).

### 2.5 Connections
- **Key elements**: List of people I follow/am connected to, pending
  connection requests.
- **Actions**: Follow/unfollow, Accept/decline requests, Search members.

### 2.6 Endorsement Inbox
- **Purpose**: Where I respond to *others'* requests for my endorsement.
- **Key elements**: List of pending requests (who, which skill, their
  evidence/context).
- **Actions**: Endorse, Decline, Ask for more context.

### 2.7 Events (member view)
- **Key elements**: My RSVP'd events, recommended events by chapter/interest.
- **Actions**: RSVP/cancel, Add to calendar.

### 2.8 Public Profile Preview
- **Purpose**: See exactly what recruiters/public see.
- **Actions**: Copy shareable link, toggle visibility settings.

### 2.9 Notifications
- **Key elements**: Endorsement requests, verification decisions, event
  reminders, connection requests.
- **Actions**: Mark read, jump to relevant page.

### 2.10 Settings
- **Key elements**: Account info, privacy/visibility controls, notification
  preferences.
- **Actions**: Update email/password, Set profile visibility, Deactivate account.

---

## PORTAL 3: ADMIN (chapter admin / mentor-reviewer)

### 3.1 Chapter Dashboard
- **Purpose**: Admin's home screen.
- **Key elements**: Member count, pending verification count, upcoming
  events, recent activity/moderation flags.
- **Actions**: Jump to queue/events/roster.

### 3.2 Verification Review Queue
- **Key elements**: List of pending manual-review requests, sorted by
  wait time; each shows member, skill claimed, evidence submitted,
  current endorsement count.
- **Actions**: Open a request for detail, Approve, Reject (with required
  reason), Request more evidence from the member.

### 3.3 Verification Detail View
- **Key elements**: Full evidence (linked projects, work history, GitHub
  activity if available), endorser list, decision history if resubmitted.
- **Actions**: Approve/reject, Add internal note (not visible to member).

### 3.4 Event Management
- **Key elements**: List of chapter's events (draft/published/past).
- **Actions**: Create event (title, date, speaker, description, RSVP cap),
  Edit/cancel event, View RSVP list, Export attendee list.

### 3.5 Member Roster
- **Key elements**: List of chapter members, role, verification status
  summary, join date.
- **Actions**: Search/filter members, View member detail, Flag for
  moderation, Remove from chapter.

### 3.6 Mentor/Reviewer Management
- **Key elements**: List of people with reviewer permissions.
- **Actions**: Grant/revoke reviewer role.

### 3.7 Moderation Queue
- **Key elements**: Flagged posts/profiles/behavior reports.
- **Actions**: Review flag, Dismiss, Warn member, Suspend member.

---

## PORTAL 4: RECRUITING (Company recruiter + Individual recruiter — shared
UI with a scope toggle)

### 4.1 Recruiter Dashboard
- **Key elements**: Active requisitions, recent shortlists, placement
  status summary.
- **Actions**: Start new search, Jump to a requisition.

### 4.2 Verified Talent Search
- **Key elements**: Filters (skill, verification basis, chapter/region,
  experience level), result list showing name, top verified skills,
  endorsement count, availability status.
- **Actions**: Filter/sort, Open candidate profile, Add to shortlist.

### 4.3 Candidate Detail View (recruiter-facing)
- **Key elements**: Full profile + verification basis breakdown (who
  endorsed, which admin approved, when), contact/introduce action.
- **Actions**: Add to shortlist, Request introduction, View full public
  profile.

### 4.4 Shortlist / Requisition Tracker
- **Key elements**: For companies — multiple roles, multiple candidates
  per role, status per candidate (shared/interviewing/placed/declined).
  For individual recruiters — single-role focused view.
- **Actions**: Move candidate status, Add notes, Remove from shortlist,
  Mark as placed (triggers commission tracking).

### 4.5 Bulk Sourcing Request (company-only)
- **Purpose**: Request the platform to source candidates for multiple
  open roles at once, rather than searching manually.
- **Key elements**: Role list with required skills/count needed per role.
- **Actions**: Submit bulk request, Track fulfillment status per role.

### 4.6 Commission / Billing Summary
- **Key elements**: Confirmed placements, fee owed per placement, payment
  status/history.
- **Actions**: View invoice, Download statement.
  *(Depends on the fee-structure decision still open from the product
  definition doc.)*

### 4.7 Recruiter Account Settings
- **Key elements**: Company info (for orgs) or individual recruiter info,
  billing details, team members with access (for orgs with multiple
  recruiters).
- **Actions**: Invite team member, Update billing info.

---

## Deferred to Phase 2 (do not mock up yet)

- Learning Path Catalog & Enrollment
- Lab Sandbox Reservation & Session UI
- Lab Submission Flow (artifact upload, peer-review, mentor-review states)
- Badge Detail with expiry countdown
- Full Trust Score dashboard (replacing/extending the lightweight
  verification once labs exist)

---

## Suggested mockup order

1. Member: Profile Editor + Public Profile Preview (this *is* the product
   — get it right first)
2. Member: Skills & Endorsements + Endorsement Inbox (the core trust loop)
3. Admin: Verification Review Queue + Detail View (mirrors #2 from the
   other side)
4. Recruiting: Verified Talent Search + Candidate Detail (where revenue
   starts)
5. Public: Landing + Public Profile View (marketing-facing, can follow
   once the core loop above feels right)
6. Everything else (Events, Feed, Settings, Moderation) — supporting
   pages, lower risk, mock up last
