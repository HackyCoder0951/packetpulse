// Theme persistence, shared by the inline anti-flash snippet (each page's
// <head>) and the toggle button nav.js mounts. Kept framework-free, no
// build step, matching the rest of this site.
(function () {
  var KEY = "pp-theme";

  function getStoredTheme() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function systemTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  }

  function applyTheme(name) {
    document.documentElement.setAttribute("data-theme", name);
    try {
      localStorage.setItem(KEY, name);
    } catch (e) {}
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function toggleTheme() {
    applyTheme(currentTheme() === "light" ? "dark" : "light");
  }

  window.PPTheme = { applyTheme: applyTheme, currentTheme: currentTheme, toggleTheme: toggleTheme, getStoredTheme: getStoredTheme, systemTheme: systemTheme };
})();
