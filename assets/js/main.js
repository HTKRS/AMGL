/* AMGL site interactions */
(function () {
  "use strict";

  /* ── Sticky nav ── */
  var nav = document.getElementById("siteNav");
  var hasHero = document.body.classList.contains("has-hero");
  function onScroll() {
    if (!hasHero || window.scrollY > window.innerHeight * 0.72) {
      nav.classList.add("solid");
    } else {
      nav.classList.remove("solid");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ── */
  var burger = document.getElementById("navBurger");
  var links = document.getElementById("navLinks");
  if (burger) {
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  /* ── Theme toggle ── */
  var toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var root = document.documentElement;
      var dark = root.getAttribute("data-theme") === "dark";
      if (dark) {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", "dark");
      }
      try { localStorage.setItem("amgl-theme", dark ? "light" : "dark"); } catch (e) {}
    });
  }

  /* ── Reveal on scroll ── */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  /* ── News: show more ── */
  var moreBtn = document.getElementById("newsMore");
  if (moreBtn) {
    moreBtn.addEventListener("click", function () {
      document.querySelectorAll(".news-item.news-more-hidden").forEach(function (el) {
        el.classList.remove("news-more-hidden");
      });
      moreBtn.style.display = "none";
    });
  }

  /* ── Publications filter ── */
  var bar = document.getElementById("pubsFilter");
  if (bar) {
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      bar.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      document.querySelectorAll(".pub-entry").forEach(function (el) {
        el.style.display = f === "all" || el.getAttribute("data-type") === f ? "" : "none";
      });
      document.querySelectorAll(".pub-year-block").forEach(function (blk) {
        var visible = blk.querySelectorAll(".pub-entry:not([style*='none'])").length;
        blk.style.display = visible ? "" : "none";
      });
    });
  }

  /* ── Hero particle canvas (nanostructure motif) ── */
  var canvas = document.getElementById("heroCanvas");
  if (canvas) {
    var ctx = canvas.getContext("2d");
    var particles = [];
    var W, H;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      W = canvas.width = canvas.offsetWidth * devicePixelRatio;
      H = canvas.height = canvas.offsetHeight * devicePixelRatio;
    }
    window.addEventListener("resize", resize);
    resize();

    var COUNT = Math.min(70, Math.floor(window.innerWidth / 22));
    for (var i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: (Math.random() * 1.8 + 0.7) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.18 * devicePixelRatio,
        gold: Math.random() < 0.16
      });
    }

    function step() {
      ctx.clearRect(0, 0, W, H);
      var linkDist = 130 * devicePixelRatio;
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var d = Math.sqrt(dx * dx + dy * dy);
          if (d < linkDist) {
            ctx.strokeStyle = "rgba(160,190,230," + (0.14 * (1 - d / linkDist)) + ")";
            ctx.lineWidth = devicePixelRatio * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      for (var k = 0; k < particles.length; k++) {
        var s = particles[k];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.gold ? "rgba(217,164,65,0.85)" : "rgba(190,210,240,0.6)";
        ctx.fill();
      }
      if (!reduced) requestAnimationFrame(step);
    }
    step();
  }
})();
