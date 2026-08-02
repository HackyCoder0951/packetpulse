// Persistent utility bar: browser-style back/forward/home, guided prev/next
// within the current portal, and a jump-to-page select covering the whole
// site. Injects itself as the first element in <body> on every page — no
// HTML duplicated across files, only this one script tag per page.
//
// Depends on `window.PP_DEPTH` (0 for frontend/index.html, 1 for every
// portal page) set by an inline snippet before this script loads, so
// relative hrefs can be computed without parsing location.pathname.
(function () {
  var PORTALS = [
    {
      key: "public",
      label: "Public",
      pages: [
        { f: "landing.html", t: "Landing" },
        { f: "events.html", t: "Events directory" },
        { f: "event-detail.html", t: "Event detail" },
        { f: "profile.html", t: "Public profile view" },
        { f: "signup.html", t: "Sign up" },
        { f: "login.html", t: "Log in" },
      ],
    },
    {
      key: "member",
      label: "Member",
      pages: [
        { f: "home.html", t: "Home / feed" },
        { f: "profile-editor.html", t: "Profile editor" },
        { f: "profile-preview.html", t: "Public profile preview" },
        { f: "skills.html", t: "Skills & endorsements" },
        { f: "inbox.html", t: "Endorsement inbox" },
        { f: "verification.html", t: "Verification status" },
        { f: "connections.html", t: "Connections" },
        { f: "events.html", t: "Events (member view)" },
        { f: "notifications.html", t: "Notifications" },
        { f: "settings.html", t: "Settings" },
      ],
    },
    {
      key: "admin",
      label: "Admin",
      pages: [
        { f: "dashboard.html", t: "Chapter dashboard" },
        { f: "review-queue.html", t: "Verification review queue" },
        { f: "review-detail.html", t: "Verification detail" },
        { f: "events.html", t: "Event management" },
        { f: "roster.html", t: "Member roster" },
        { f: "mentors.html", t: "Reviewer management" },
        { f: "moderation.html", t: "Moderation queue" },
      ],
    },
    {
      key: "recruiting",
      label: "Recruiting",
      pages: [
        { f: "dashboard.html", t: "Recruiter dashboard" },
        { f: "search.html", t: "Verified talent search" },
        { f: "candidate.html", t: "Candidate detail" },
        { f: "shortlist.html", t: "Shortlist / requisition tracker" },
        { f: "bulk-sourcing.html", t: "Bulk sourcing request" },
        { f: "billing.html", t: "Commission / billing" },
        { f: "settings.html", t: "Recruiter account settings" },
      ],
    },
    {
      key: "mobile",
      label: "Mobile",
      pages: [
        { f: "landing.html", t: "Landing / onboarding" },
        { f: "home.html", t: "Home" },
        { f: "inbox.html", t: "Endorsement inbox" },
        { f: "skills.html", t: "Skills" },
        { f: "verification.html", t: "Verification status" },
        { f: "profile.html", t: "Public profile" },
        { f: "event-detail.html", t: "Event detail" },
      ],
    },
  ];

  function currentInfo() {
    var parts = window.location.pathname.split("/").filter(Boolean);
    var file = parts[parts.length - 1] || "index.html";
    var folder = parts.length > 1 ? parts[parts.length - 2] : null;
    var portal = null;
    for (var i = 0; i < PORTALS.length; i++) {
      if (PORTALS[i].key === folder) {
        portal = PORTALS[i];
        break;
      }
    }
    return { file: file, portal: portal };
  }

  function rootPrefix() {
    return window.PP_DEPTH === 0 ? "" : "../";
  }

  function svgIcon(path) {
    return (
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round">' + path + "</svg>"
    );
  }
  var ICONS = {
    back: svgIcon('<path d="M15 18l-6-6 6-6"/>'),
    forward: svgIcon('<path d="M9 18l6-6-6-6"/>'),
    home: svgIcon('<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>'),
    sun: svgIcon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
    moon: svgIcon('<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>'),
  };

  function build() {
    var info = currentInfo();
    var root = rootPrefix();
    var bar = document.createElement("div");
    bar.className = "ppnav";

    var homeHref = root === "" ? "index.html" : root + "index.html";
    var html = "";
    html += '<a class="ppnav-brand" href="' + homeHref + '"><img src="' + root + 'assets/packet-pulse-logo.png" alt=""></a>';
    html += '<div class="ppnav-sep"></div>';
    html += '<button type="button" class="ppnav-btn" data-ppnav="back" title="Back" aria-label="Back">' + ICONS.back + "</button>";
    html += '<button type="button" class="ppnav-btn" data-ppnav="forward" title="Forward" aria-label="Forward">' + ICONS.forward + "</button>";
    html += '<a class="ppnav-btn" href="' + homeHref + '" title="All pages" aria-label="All pages">' + ICONS.home + "</a>";
    html += '<div class="ppnav-sep"></div>';

    // jump-to-page select, grouped by portal
    html += '<select class="ppnav-select" data-ppnav="jump" aria-label="Jump to page">';
    html += '<option value="">Jump to…</option>';
    PORTALS.forEach(function (p) {
      html += '<optgroup label="' + p.label + '">';
      p.pages.forEach(function (pg) {
        var href = root + p.key + "/" + pg.f;
        var selected = info.portal === p && info.file === pg.f ? " selected" : "";
        html += '<option value="' + href + '"' + selected + ">" + pg.t + "</option>";
      });
      html += "</optgroup>";
    });
    html += "</select>";

    if (info.portal) {
      var idx = -1;
      for (var i = 0; i < info.portal.pages.length; i++) {
        if (info.portal.pages[i].f === info.file) {
          idx = i;
          break;
        }
      }
      var prev = idx > 0 ? info.portal.pages[idx - 1] : null;
      var next = idx >= 0 && idx < info.portal.pages.length - 1 ? info.portal.pages[idx + 1] : null;
      html += '<div class="ppnav-sep"></div>';
      html +=
        '<button type="button" class="ppnav-btn" data-ppnav="prev"' +
        (prev ? ' data-href="' + root + info.portal.key + "/" + prev.f + '"' : ' aria-disabled="true"') +
        ' title="Previous in ' + info.portal.label + '">' + ICONS.back + "</button>";
      html += '<span class="ppnav-pos">' + (idx + 1) + " / " + info.portal.pages.length + "</span>";
      html +=
        '<button type="button" class="ppnav-btn" data-ppnav="next"' +
        (next ? ' data-href="' + root + info.portal.key + "/" + next.f + '"' : ' aria-disabled="true"') +
        ' title="Next in ' + info.portal.label + '">' + ICONS.forward + "</button>";
    }

    html += '<div class="ppnav-spacer"></div>';
    html += '<button type="button" class="ppnav-btn" data-ppnav="theme" title="Toggle light/dark" aria-label="Toggle theme"></button>';

    bar.innerHTML = html;
    document.body.insertBefore(bar, document.body.firstChild);

    bar.querySelector('[data-ppnav="back"]').addEventListener("click", function () {
      history.back();
    });
    bar.querySelector('[data-ppnav="forward"]').addEventListener("click", function () {
      history.forward();
    });
    var jump = bar.querySelector('[data-ppnav="jump"]');
    jump.addEventListener("change", function () {
      if (jump.value) window.location.href = jump.value;
    });
    ["prev", "next"].forEach(function (dir) {
      var btn = bar.querySelector('[data-ppnav="' + dir + '"]');
      if (btn && btn.dataset.href) {
        btn.addEventListener("click", function () {
          window.location.href = btn.dataset.href;
        });
      }
    });

    var themeBtn = bar.querySelector('[data-ppnav="theme"]');
    function paintThemeBtn() {
      var t = window.PPTheme ? window.PPTheme.currentTheme() : "dark";
      themeBtn.innerHTML = t === "light" ? ICONS.moon : ICONS.sun;
      themeBtn.title = t === "light" ? "Switch to dark theme" : "Switch to light theme";
    }
    themeBtn.addEventListener("click", function () {
      if (window.PPTheme) {
        window.PPTheme.toggleTheme();
        paintThemeBtn();
      }
    });
    paintThemeBtn();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
