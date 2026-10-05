/* Google Analytics (GA4), loaded only after the visitor accepts.
   The choice is remembered in the browser; GoatCounter (no cookies) runs separately. */
(function () {
  var GA_ID = 'G-LDMGMRWVGN';
  var KEY = 'analytics-consent';

  function loadGA() {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID);
  }

  var choice = null;
  try { choice = localStorage.getItem(KEY); } catch (e) {}
  if (choice === 'yes') { loadGA(); return; }
  if (choice === 'no') return;

  function showBanner() {
    var bar = document.createElement('div');
    bar.className = 'consent';
    bar.setAttribute('role', 'region');
    bar.setAttribute('aria-label', 'Analytics consent');
    bar.innerHTML =
      '<span>This site uses Google Analytics cookies to count visits. Is that OK?</span>' +
      '<span class="consent-buttons">' +
      '<button type="button" data-choice="no">Decline</button>' +
      '<button type="button" data-choice="yes">Accept</button>' +
      '</span>';
    bar.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-choice');
      if (!c) return;
      try { localStorage.setItem(KEY, c); } catch (err) {}
      bar.remove();
      if (c === 'yes') loadGA();
    });
    document.body.appendChild(bar);
  }

  if (document.body) showBanner();
  else document.addEventListener('DOMContentLoaded', showBanner);
})();
