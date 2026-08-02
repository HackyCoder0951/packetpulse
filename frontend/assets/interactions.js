// Lightweight click interactivity, delegated from document.body so it also
// covers the utility bar nav.js injects. No backend: state lives only in
// the DOM for the current page view and resets on reload — that's called
// out to viewers via the toast fallback rather than left silent.
(function () {
  // Buttons whose label flips to a "done" state and gets locked.
  var TOGGLE_PAIRS = {
    "Accept": "Accepted",
    "Decline": "Declined",
    "RSVP": "Going ✓",
    "Cancel RSVP": "RSVP",
    "Join waitlist": "On waitlist",
    "Grant": "Granted",
    "Revoke": "Revoked",
    "Approve": "Approved",
    "Reject": "Rejected",
    "Endorse": "Endorsed",
    "Dismiss": "Dismissed",
    "Mark as placed": "Placed ✓",
    "Add to shortlist": "Shortlisted ✓",
  };
  // These additionally dim the containing row/card to read as "resolved".
  var DIMS_ROW = { Accept: 1, Decline: 1, Grant: 1, Revoke: 1, Approve: 1, Reject: 1, Dismiss: 1 };

  function toast(msg) {
    var el = document.getElementById("ppn-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "ppn-toast";
      el.style.cssText =
        "position:fixed;left:50%;bottom:22px;transform:translateX(-50%) translateY(12px);" +
        "background:var(--color-surface);color:var(--color-text);border:1px solid var(--color-divider);" +
        "box-shadow:var(--shadow-md);padding:9px 16px;border-radius:var(--radius-md);font-size:12.5px;" +
        "font-family:var(--font-body);z-index:500;opacity:0;transition:opacity .15s ease,transform .15s ease;pointer-events:none";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.style.opacity = "1";
    el.style.transform = "translateX(-50%) translateY(0)";
    clearTimeout(el._t);
    el._t = setTimeout(function () {
      el.style.opacity = "0";
      el.style.transform = "translateX(-50%) translateY(12px)";
    }, 1800);
  }

  function handleSegOpt(el) {
    var group = el.parentElement;
    if (!group) return;
    Array.prototype.forEach.call(group.children, function (sib) {
      if (sib.classList.contains("seg-opt")) sib.style.background = "";
    });
    el.style.background = "color-mix(in srgb, var(--color-accent) 16%, transparent)";
  }

  function handleToggleButton(el, label) {
    var next = TOGGLE_PAIRS[label];
    el.textContent = next;
    el.setAttribute("disabled", "disabled");
    el.style.opacity = "0.6";
    el.style.cursor = "default";
    if (DIMS_ROW[label]) {
      var row = el.closest(".tile") || el.closest("tr");
      if (row) row.style.opacity = "0.6";
    }
    toast(label + " → " + next + " (demo only, not saved)");
  }

  document.addEventListener("click", function (e) {
    var seg = e.target.closest && e.target.closest(".seg-opt");
    if (seg) {
      handleSegOpt(seg);
      return;
    }

    var btn = e.target.closest && e.target.closest("button.btn, button.seg-opt");
    if (!btn || btn.disabled) return;
    var label = (btn.textContent || "").trim();
    if (TOGGLE_PAIRS.hasOwnProperty(label)) {
      handleToggleButton(btn, label);
      return;
    }
    // Any other inert button (Post, Save changes, Export, Filter, Message,
    // Share, Invite team member, ...) gets an honest "not wired up" nudge
    // instead of doing nothing.
    toast("Demo interaction — " + label + " isn’t wired to a backend");
  });

  // Mobile bottom tab bar (5 items: Home / Profile / Inbox / Events / You).
  // Identified structurally (grid-template-columns: repeat(5, ...)) rather
  // than by a class, since the source mockup markup doesn't tag it.
  function wireMobileTabBar() {
    var bar = document.querySelector('div[style*="repeat(5"]');
    if (!bar) return;
    var root = window.PP_DEPTH === 0 ? "" : "../";
    var targets = {
      Home: root + "mobile/home.html",
      Profile: root + "mobile/profile.html",
      Inbox: root + "mobile/inbox.html",
      Events: root + "member/events.html",
      You: root + "member/settings.html",
    };
    Array.prototype.forEach.call(bar.children, function (item) {
      var span = item.querySelector("span:not([style*='position:absolute'])");
      var label = span ? span.textContent.trim() : "";
      if (!targets[label]) return;
      item.style.cursor = "pointer";
      item.addEventListener("click", function () {
        Array.prototype.forEach.call(bar.children, function (sib) {
          sib.style.color = "var(--color-neutral-500)";
          var icon = sib.querySelector("i");
          if (icon) icon.style.color = "var(--color-neutral-500)";
        });
        var icon = item.querySelector("i");
        if (icon) icon.style.color = "var(--color-accent)";
        window.location.href = targets[label];
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wireMobileTabBar);
  } else {
    wireMobileTabBar();
  }
})();
