// Schwebender „← Alle Tools"-Link zurück zum Hub. In jedes Tool einbinden:
// <script defer src="https://adsmasters.github.io/hub/backlink.js"></script>
(function () {
  if (window.top !== window.self) return; // nicht in iframes
  var HUB = 'https://adsmasters.github.io/hub/';
  function add() {
    if (!document.body || document.getElementById('_hubBack')) return;
    var a = document.createElement('a');
    a.id = '_hubBack';
    a.href = HUB;
    a.textContent = '← Alle Tools';
    a.setAttribute('style',
      'position:fixed;left:14px;bottom:14px;z-index:2147483000;' +
      'background:#1e222c;color:#fff;border:1px solid #2a2f3a;border-radius:20px;' +
      'padding:8px 14px;font:600 13px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
      'text-decoration:none;box-shadow:0 4px 14px rgba(0,0,0,.25);opacity:.9;transition:opacity .15s');
    a.onmouseover = function () { a.style.opacity = '1'; };
    a.onmouseout = function () { a.style.opacity = '.9'; };
    document.body.appendChild(a);
  }
  if (document.readyState !== 'loading') add();
  else document.addEventListener('DOMContentLoaded', add);
})();
