/* Keine Cookies, keine externen Aufrufe. Nur Theme-Umschalter (localStorage), E-Mail-Link und Scroll-Story. */
(function () {
  var d = document, root = d.documentElement;
  root.className = root.className.replace("no-js", "js");
  function get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  function theme() {
    var v = get("tl-theme");
    if (v === "light" || v === "dark") root.setAttribute("data-theme", v); else root.removeAttribute("data-theme");
    var cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    d.querySelectorAll("[data-theme-set]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-theme-set") === cur ? "true" : "false"); });
  }
  theme();
  d.addEventListener("click", function (e) {
    var lg = e.target.closest("[data-lang-link]");
    if (lg) set("tl-lang", lg.getAttribute("data-lang-link"));
    var b = e.target.closest("[data-theme-set]");
    if (b) { set("tl-theme", b.getAttribute("data-theme-set")); theme(); }
  });
  // E-Mail-Adresse steht rückwärts im HTML (Spam-Schutz); CSS stellt sie ohne JS korrekt dar, hier wird ein Link daraus
  d.querySelectorAll("[data-mail]").forEach(function (n) {
    var m = n.textContent.split("").reverse().join("");
    var a = d.createElement("a"); a.href = "mailto:" + m; a.textContent = m; n.className = ""; n.textContent = ""; n.appendChild(a);
  });
  // Scroll-Story
  var st = d.getElementById("story");
  if (!st) return;
  var path = d.getElementById("pPath"), dot = d.getElementById("pDot"), net = d.getElementById("pNet"), cnt = d.getElementById("pCount");
  var steps = [].slice.call(d.querySelectorAll(".step"));
  var stops = [[10, 148, 0], [210, 40, .5], [320, 110, .75], [392, 142, 1]], pend = [0, 4, 10, 0], cur = 0;
  var ds = st.dataset;
  function paint() {
    var s = stops[cur], off = cur === 1 || cur === 2;
    path.style.strokeDashoffset = 1000 * (1 - s[2]);
    dot.setAttribute("cx", s[0]); dot.setAttribute("cy", s[1]);
    net.className = "chip " + (off ? "off" : "on");
    net.textContent = (off ? "✕ " : "✓ ") + (off ? ds.offline : cur === 3 ? ds.online : ds.home);
    cnt.textContent = cur === 0 ? "" : cur === 3 ? ds.zero : ds.pending.replace("{n}", pend[cur]);
  }
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { cur = +e.target.dataset.k; steps.forEach(function (s) { s.classList.toggle("on", s === e.target); }); paint(); }
      });
    }, { rootMargin: "-45% 0px -45% 0px" });
    steps.forEach(function (s) { io.observe(s); });
  }
  paint();
})();
