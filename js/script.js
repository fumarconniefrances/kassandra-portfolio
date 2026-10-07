// script.js
(function () {
  function initNavToggle(toggleId, navId) {
    var btn = document.getElementById(toggleId);
    var nav = document.getElementById(navId);
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      nav.hidden = expanded;
    });
  }

  initNavToggle('navToggle', 'mobileNav');
  initNavToggle('navToggleAbout', 'mobileNavAbout');
  initNavToggle('navToggleHobbies', 'mobileNavHobbies');
  initNavToggle('navToggleProjects', 'mobileNavProjects');
  initNavToggle('navToggleConnect', 'mobileNavConnect');

  document.addEventListener('click', function (e) {
    var mobileNavs = document.querySelectorAll('.mobile-nav[hidden=false]');
    mobileNavs.forEach(function (nav) {
      if (!nav.contains(e.target)) {
        nav.hidden = true;
      }
    });
  }, true);
})();
