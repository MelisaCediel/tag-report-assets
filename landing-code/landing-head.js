<script>
(function () {
  var LANDING_VERSION = "1";

  function addFonts() {
    if (document.getElementById("tag-landing-fonts")) return;
    var link = document.createElement("link");
    link.id = "tag-landing-fonts";
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
    document.head.appendChild(link);
  }

  function addCss() {
    if (document.getElementById("tag-landing-css")) return;
    var css = document.createElement("link");
    css.id = "tag-landing-css";
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/gh/MelisaCediel/tag-report-assets@main/landing-code/landing.css?v=" + LANDING_VERSION;
    document.head.appendChild(css);
  }

  function injectLanding() {
    var old = document.getElementById("tag-landing-script");
    if (old) old.remove();
    var script = document.createElement("script");
    script.id = "tag-landing-script";
    script.src = "https://cdn.jsdelivr.net/gh/MelisaCediel/tag-report-assets@main/landing-code/landing-body.js?v=" + LANDING_VERSION;
    document.body.appendChild(script);
  }

  function ensureLanding() {
    if (!document.querySelector(".tag-landing-injected")) injectLanding();
  }

  addFonts();
  addCss();

  function start() {
    ensureLanding();
    var attempts = 0;
    var timer = setInterval(function () {
      attempts++;
      ensureLanding();
      if (attempts >= 10) clearInterval(timer);
    }, 700);
  }

  if (document.readyState === "complete") {
    start();
  } else {
    window.addEventListener("load", start);
  }
})();
</script>
