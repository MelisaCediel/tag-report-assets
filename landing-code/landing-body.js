(function () {
  var ASSET_BASE = "https://cdn.jsdelivr.net/gh/MelisaCediel/tag-report-assets@main/landing-code/assets/";
  var SCOPE = "tag-landing-scope";

  var header = document.getElementById("n_header");
  var hero = document.getElementById("n_hero");
  var assess = document.getElementById("n_assess");
  if (!header || !hero || !assess) return;

  document.querySelectorAll(".tag-landing-injected").forEach(function (el) { el.remove(); });
  header.classList.add(SCOPE);
  hero.classList.add(SCOPE);

  header.innerHTML =
    '<div class="tag-top-bar">' +
      '<a href="https://www.bigaps.com/" target="_blank" rel="noopener noreferrer" aria-label="BIG">' +
        '<img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663397493018/behwqDBXQJFSAV5v6UzR8C/logo-big_89fdd27e.png" alt="BIG" />' +
      '</a>' +
    '</div>' +
    '<nav class="tag-main-nav" aria-label="TAG primary navigation">' +
      '<a class="brand" href="https://tagaps.com/" aria-label="TAG home"><img src="' + ASSET_BASE + 'tag-logo.png" alt="TAG" /></a>' +
      '<button class="menu-toggle" type="button" aria-label="Toggle navigation menu" aria-expanded="false" data-menu-toggle><span></span><span></span><span></span></button>' +
      '<ul class="site-nav" data-nav>' +
        '<li class="nav-dropdown">' +
          '<button class="dropdown-toggle" type="button" aria-expanded="false" data-dropdown-toggle>Services' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
          '</button>' +
          '<ul class="dropdown-menu">' +
            '<li><a href="https://tagaps.com/systems-architecture">Systems Architecture</a></li>' +
            '<li><a href="https://tagaps.com/talent-capability">Talent Capability</a></li>' +
            '<li><a href="https://tagaps.com/team-service">Self-directed Teams</a></li>' +
            '<li><a href="https://tagaps.com/workflow-automation">Workflow Automation</a></li>' +
            '<li><a href="https://tagaps.com/fractional-services">Fractional Services</a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="https://tagaps.com/our-work">Our Work</a></li>' +
        '<li class="nav-dropdown">' +
          '<button class="dropdown-toggle" type="button" aria-expanded="false" data-dropdown-toggle>Insights' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>' +
          '</button>' +
          '<ul class="dropdown-menu">' +
            '<li><a href="https://tagaps.com/our-thinking">Our Thinking</a></li>' +
            '<li><a href="https://tagaps.com/tag-in-action">TAG in Action</a></li>' +
          '</ul>' +
        '</li>' +
        '<li><a href="https://tagaps.com/about">About</a></li>' +
        '<li class="nav-separator" aria-hidden="true"></li>' +
        '<li><a class="contact-btn" href="https://tagaps.com/contact">Contact</a></li>' +
      '</ul>' +
    '</nav>';

  hero.innerHTML =
    '<div class="hero section-dark">' +
      '<div class="hero-copy">' +
        '<p class="eyebrow">Performance Diagnostic <span></span> 25 Questions</p>' +
        '<h1>Performance is not managed. <em>It is designed.</em></h1>' +
        '<p class="hero-lede">Assess the practices required to become a Performance Architect within the business, function, team, or value stream you influence.</p>' +
        '<div class="hero-actions">' +
          '<a class="button button-primary" data-scroll-to-assess href="#n_assess">Take the assessment <span aria-hidden="true">→</span></a>' +
          '<p class="time-note"><span aria-hidden="true">◷</span> Tailored report delivered in five minutes or less</p>' +
        '</div>' +
      '</div>' +
      '<div class="hero-image" style="background-image:linear-gradient(90deg, rgba(24,25,33,0), rgba(24,25,33,0.26)), url(\'' + ASSET_BASE + 'performance-architect-hero.png\')" aria-hidden="true"></div>' +
      '<p class="hero-footnote">For leaders who want to stop managing effort and start designing performance.</p>' +
    '</div>';

  var sectionsHtml =
    '<section class="' + SCOPE + ' tag-landing-injected section-light intro" id="tag-for-leaders">' +
      '<div class="section-rule"></div>' +
      '<p class="eyebrow orange">This assessment is for</p>' +
      '<h2>The leader who knows the system is shaping the outcome.</h2>' +
      '<div class="intro-grid"><div>' +
        '<p>You may be responsible for a business, function, team, or value stream. What matters is not your title. It is your responsibility for influencing how work flows, decisions are made, and people perform.</p>' +
        '<p>This is not a business-health check or a personality quiz. It is a practical diagnostic for leaders developing the capacity to design performance deliberately.</p>' +
        '<a class="text-link" href="#tag-practices">See the path <span aria-hidden="true">↘</span></a>' +
      '</div></div>' +
    '</section>' +

    '<section class="' + SCOPE + ' tag-landing-injected section-dark path" id="tag-practices">' +
      '<p class="eyebrow lime">Your path</p>' +
      '<h2>Five connected practices. One performance architecture.</h2>' +
      '<div class="path-map" aria-label="Five connected practices">' +
        '<article><span>01</span><h3>See the system.</h3></article>' +
        '<article><span>02</span><h3>Make the work visible.</h3></article>' +
        '<article><span>03</span><h3>Create the company brain.</h3></article>' +
        '<article><span>04</span><h3>Enable talent.</h3></article>' +
        '<article><span>05</span><h3>Amplify capability.</h3></article>' +
      '</div>' +
      '<p class="path-note">There is no fixed starting point. The five practices are interdependent: a weakness in one condition limits the performance of the whole.</p>' +
    '</section>' +

    '<section class="' + SCOPE + ' tag-landing-injected section-light how" id="tag-how-it-works">' +
      '<div class="section-rule"></div>' +
      '<div class="split-heading"><div><p class="eyebrow orange">How it works</p><h2>Clear input. Focused output.</h2></div>' +
        '<p>The assessment is designed to create structural clarity, not another opaque score.</p></div>' +
      '<div class="steps">' +
        '<article><span>01</span><h3>Answer 25 questions</h3><p>Assess your current practices across five connected Performance Architect capabilities.</p></article>' +
        '<article><span>02</span><h3>Receive your condition</h3><p>See where each practice sits: Reactive, Managed, Deliberate, Integrated, or Architected.</p></article>' +
        '<article><span>03</span><h3>Focus where it matters</h3><p>Use your tailored report to identify the condition that deserves your attention first.</p></article>' +
      '</div>' +
      '<a class="button button-dark" data-scroll-to-assess href="#n_assess">Begin the assessment <span aria-hidden="true">→</span></a>' +
    '</section>' +

    '<section class="' + SCOPE + ' tag-landing-injected practice-detail section-light">' +
      '<figure><img src="' + ASSET_BASE + 'work-visible-session.png" alt="Leader making work visible with a team" />' +
        '<figcaption>Make the work visible. Then design what comes next.</figcaption></figure>' +
      '<div>' +
        '<p class="eyebrow orange">You will be assessed against</p>' +
        '<h2>Five practices. Five conditions. A clear starting point.</h2>' +
        '<div class="condition-list">' +
          '<article><span>01</span><div><h3>System-First Thinking</h3><p>See performance as the outcome of system design.</p></div></article>' +
          '<article><span>02</span><div><h3>Make the Invisible, Visible</h3><p>Reveal the conditions shaping performance before attempting to improve them.</p></div></article>' +
          '<article><span>03</span><div><h3>APS Design</h3><p>Create the shared brain that guides how people think and make decisions.</p></div></article>' +
          '<article><span>04</span><div><h3>Talent Success</h3><p>Create the conditions for individual career success.</p></div></article>' +
          '<article><span>05</span><div><h3>AI and Automation</h3><p>Harness AI and automation to empower talent.</p></div></article>' +
        '</div>' +
      '</div>' +
    '</section>' +

    '<section class="' + SCOPE + ' tag-landing-injected section-light report" id="tag-report">' +
      '<div class="section-rule"></div>' +
      '<p class="eyebrow orange">What your report shows</p>' +
      '<h2>The condition behind the result and where to focus first.</h2>' +
      '<p class="report-lede">You will not receive a generic percentage. Your report identifies the current condition of each practice and shows how the practices work together across the value stream you influence.</p>' +
      '<ul class="check-list">' +
        '<li>Your overall Performance Architect condition</li>' +
        '<li>A condition for each of the five practices</li>' +
        '<li>The critical practice requiring attention first</li>' +
        '<li>Focused direction for strengthening your architecture</li>' +
      '</ul>' +
      '<blockquote>A strength in one area does not compensate for a constraint in another.</blockquote>' +
      '<img class="report-preview" src="' + ASSET_BASE + 'condition-report-preview.png" alt="Preview of the assessment output report" />' +
    '</section>' +

    '<section class="' + SCOPE + ' tag-landing-injected decision">' +
      '<p class="eyebrow">Your next decision</p>' +
      '<h2>Ready to see where to focus first?</h2>' +
      '<p>Take the assessment below. Make the limiting conditions visible. Begin designing the performance architecture required for the work you influence.</p>' +
      '<a class="button button-dark" data-scroll-to-assess href="#n_assess">Take the Performance Architect Assessment <span aria-hidden="true">↓</span></a>' +
      '<p class="decision-meta">25 Questions · Five Domains · Tailored Report</p>' +
      '<strong>Design systems.<br />Align talent.<br /><em>Performance follows.</em></strong>' +
    '</section>';

  assess.insertAdjacentHTML("beforebegin", sectionsHtml);

  var footerHtml =
    '<footer class="' + SCOPE + ' tag-landing-injected site-footer">' +
      '<img src="' + ASSET_BASE + 'tag-logo-white-on-black.png" alt="TAG" />' +
      '<p>© 2026 TAG. Performance by design.</p>' +
    '</footer>';
  assess.insertAdjacentHTML("afterend", footerHtml);

  document.querySelectorAll('[data-scroll-to-assess]').forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var target = document.getElementById("n_assess");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var toggle = header.querySelector("[data-menu-toggle]");
  var nav = header.querySelector("[data-nav]");
  var dropdownToggles = header.querySelectorAll("[data-dropdown-toggle]");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (event) {
      if (event.target instanceof HTMLAnchorElement) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        header.querySelectorAll(".nav-dropdown.is-open").forEach(function (dropdown) {
          dropdown.classList.remove("is-open");
          var btn = dropdown.querySelector("[data-dropdown-toggle]");
          if (btn) btn.setAttribute("aria-expanded", "false");
        });
      }
    });
  }

  dropdownToggles.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var dropdown = button.closest(".nav-dropdown");
      var isOpen = dropdown && dropdown.classList.contains("is-open");

      header.querySelectorAll(".nav-dropdown.is-open").forEach(function (openDropdown) {
        if (openDropdown !== dropdown) {
          openDropdown.classList.remove("is-open");
          var btn = openDropdown.querySelector("[data-dropdown-toggle]");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });

      if (dropdown) dropdown.classList.toggle("is-open", !isOpen);
      button.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!(target instanceof Element) || target.closest(".nav-dropdown")) return;
    header.querySelectorAll(".nav-dropdown.is-open").forEach(function (dropdown) {
      dropdown.classList.remove("is-open");
      var btn = dropdown.querySelector("[data-dropdown-toggle]");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });
})();
