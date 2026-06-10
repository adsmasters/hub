// „← Übersicht"-Link zurück zum Hub. In jedes Tool eingebunden:
// <script defer src="https://adsmasters.github.io/hub/backlink.js"></script>
// Fügt den Link bevorzugt in die vorhandene Navigation ein, sonst als schwebenden Button.
(function () {
  if (window.top !== window.self) return; // nicht in iframes
  var HUB = 'https://adsmasters.github.io/hub/';
  var LABEL = '← Übersicht'; // ← Übersicht

  function injectIntoNav() {
    if (document.getElementById('_hubNav')) return true;
    // Mögliche Navigationsleisten (in Prioritätsreihenfolge)
    var nav = document.querySelector('header nav') || document.querySelector('nav') ||
              document.querySelector('.nav') || document.querySelector('.navbar') ||
              document.querySelector('.menu') || document.querySelector('.header-inner');
    if (!nav) return false;

    var a = document.createElement('a');
    a.id = '_hubNav';
    a.href = HUB;
    a.textContent = LABEL;

    // Stil an vorhandene Nav-Links angleichen, falls vorhanden
    var sample = nav.querySelector('a.nav-link, a');
    if (sample && sample.className) a.className = sample.className.replace(/\bactive\b/g, '').trim();
    // zusätzlicher, dezenter Akzent + Abstand, damit es als „zurück" erkennbar ist
    a.style.fontWeight = '600';
    a.style.opacity = '0.85';
    if (!a.className) { a.style.marginRight = '14px'; a.style.textDecoration = 'none'; }

    nav.insertBefore(a, nav.firstChild);
    return true;
  }

  function floatFallback() {
    if (document.getElementById('_hubBack')) return;
    var a = document.createElement('a');
    a.id = '_hubBack';
    a.href = HUB;
    a.textContent = LABEL + ' (Alle Tools)';
    a.setAttribute('style',
      'position:fixed;left:14px;bottom:14px;z-index:2147483000;' +
      'background:#1e222c;color:#fff;border:1px solid #2a2f3a;border-radius:20px;' +
      'padding:8px 14px;font:600 13px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
      'text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.25);opacity:.9');
    document.body.appendChild(a);
  }

  function run() {
    if (!injectIntoNav()) floatFallback();
  }
  if (document.readyState !== 'loading') run();
  else document.addEventListener('DOMContentLoaded', run);
})();
