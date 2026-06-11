/* ============================================================
   CodeOrigin.Ai — Premium Interactivity
   Dynamic data · particles · 3D tilt · counters · reveals
   ============================================================ */
(function () {
  "use strict";

  /* =========================================================
     DYNAMIC DATA — easy to update later
     ========================================================= */

  // ---- Team directory (20 members) ----
  // To update: edit name / role / email below. Table re-renders automatically.
  var TEAM = [
    { name: "Varshini CM",         role: "Project Manager",       email: "varshini@codeoriginai.com" },
    { name: "Amogha Varshini PM",  role: "Team Lead",             email: "amogha@codeoriginai.com" },
    { name: "Ayesha Siddiqa R",    role: "Team Lead",             email: "ayesha@codeoriginai.com" },
    { name: "Shreyas B Archarya",  role: "Team Lead",             email: "shreyas.acharya@codeoriginai.com" },
    { name: "Bhaskar VB",          role: "Jr Software Developer", email: "bhaskar@codeoriginai.com" },
    { name: "Vrushank S K",        role: "Jr Software Developer", email: "vrushank@codeoriginai.com" },
    { name: "PruthviRaj",          role: "Jr Software Developer", email: "pruthviraj@codeoriginai.com" },
    { name: "Sukruth J R",         role: "Jr Software Developer", email: "sukruth@codeoriginai.com" },
    { name: "Vinaya S M",          role: "Jr Software Developer", email: "vinaya@codeoriginai.com" },
    { name: "Mosseena",            role: "Sr Software Developer", email: "mosseena@codeoriginai.com" },
    { name: "Naveen Kumar",        role: "Jr Software Developer", email: "naveen@codeoriginai.com" },
    { name: "Nagarjun",            role: "Sr Software Developer", email: "nagarjun@codeoriginai.com" },
    { name: "Anjum Kouser",        role: "Jr Software Developer", email: "anjum@codeoriginai.com" },
    { name: "Bhumika",             role: "Jr Software Developer", email: "bhumika@codeoriginai.com" },
    { name: "Gagana Priya",        role: "HR",                    email: "gagana@codeoriginai.com" },
    { name: "Shreyas A",           role: "Jr Software Developer", email: "shreyas.a@codeoriginai.com" },
    { name: "Sumanth",             role: "Jr Software Developer", email: "sumanth@codeoriginai.com" },
    { name: "Sandesh Murthy",      role: "Jr Software Developer", email: "sandesh@codeoriginai.com" },
    { name: "Manoj",               role: "Jr Software Developer", email: "manoj@codeoriginai.com" },
    { name: "Anushree",            role: "Jr Software Developer", email: "anushree@codeoriginai.com" }
  ];

  // ---- Projects ----
  var PROJECTS = [
    { name: "KSRA",                 icon: "🏢", desc: "Enterprise business management platform.",            tech: ["React", "Node.js", "PostgreSQL"], status: "Live",        cloud: "AWS EC2 + S3" },
    { name: "Parxcel",              icon: "📦", desc: "Parcel and logistics management platform.",            tech: ["Next.js", "Express.js", "MongoDB"], status: "Live",        cloud: "AWS + Docker" },
    { name: "Doctor Pro",           icon: "🩺", desc: "Hospital, clinic and doctor management ecosystem.",    tech: ["React", "FastAPI", "PostgreSQL"],   status: "In Progress", cloud: "Kubernetes + AWS" },
    { name: "AI Recruitment System",icon: "🤖", desc: "Automated candidate screening and hiring platform.",   tech: ["Python", "OpenAI", "Vector DB"],    status: "Beta",        cloud: "AWS + Docker" },
    { name: "Smart Inventory",      icon: "📊", desc: "Inventory and stock management platform.",             tech: ["Next.js", "Node.js", "MySQL"],      status: "Live",        cloud: "AWS EC2 + NGINX" }
  ];

  // ---- Tech stack categories ----
  var STACK = [
    { icon: "🎨", title: "Frontend",                items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { icon: "⚙️", title: "Backend",                 items: ["Node.js", "Express.js", "FastAPI", "Python", "Java"] },
    { icon: "🗄️", title: "Databases",               items: ["MongoDB", "PostgreSQL", "Neon Database", "Supabase", "MySQL"] },
    { icon: "🧠", title: "Artificial Intelligence", items: ["OpenAI APIs", "LLM Integration", "RAG Systems", "Vector Databases", "AI Agents"] },
    { icon: "☁️", title: "Cloud & DevOps",          items: ["AWS EC2", "AWS S3", "Docker", "Kubernetes", "NGINX", "CI/CD Pipelines", "GitHub Actions", "Terraform"] },
    { icon: "🛡️", title: "Monitoring & Security",   items: ["CloudWatch", "Prometheus", "Grafana", "SSL Security", "Role Based Access Control"] }
  ];

  // ---- Infrastructure pipeline ----
  var PIPELINE = [
    { icon: "💻", label: "Development" },
    { icon: "🐙", label: "GitHub" },
    { icon: "🔁", label: "CI/CD Pipeline" },
    { icon: "🐳", label: "Docker Containers" },
    { icon: "☸️", label: "Kubernetes Cluster" },
    { icon: "🖥️", label: "AWS EC2 Servers" },
    { icon: "🗄️", label: "Database Layer" },
    { icon: "🚀", label: "Production" }
  ];

  // ---- Services ----
  var SERVICES = [
    { icon: "🌐", title: "Web Application Development",       desc: "Fast, responsive and scalable web platforms." },
    { icon: "📱", title: "Mobile Application Development",    desc: "Cross-platform mobile apps with native feel." },
    { icon: "🏢", title: "Enterprise Software Development",   desc: "Robust systems engineered for large organizations." },
    { icon: "🤖", title: "AI Solutions",                     desc: "LLMs, RAG and intelligent automation, in production." },
    { icon: "🧠", title: "Machine Learning Systems",         desc: "Model development, training and deployment." },
    { icon: "☁️", title: "Cloud Migration",                  desc: "Seamless migration to modern cloud infrastructure." },
    { icon: "🔁", title: "DevOps Automation",                desc: "Automated, reliable CI/CD delivery pipelines." },
    { icon: "🗄️", title: "Database Architecture",            desc: "High-performance, secure data platforms." },
    { icon: "🔌", title: "API Development",                  desc: "Well-designed, documented and scalable APIs." },
    { icon: "📦", title: "SaaS Product Development",         desc: "End-to-end multi-tenant SaaS products." }
  ];

  // ---- Why choose us ----
  var WHY = [
    { icon: "👨‍💻", title: "Expert Engineering Team",       desc: "20+ engineers across the full technology spectrum." },
    { icon: "🧩", title: "Modern Technology Stack",         desc: "Cutting-edge tools chosen for performance and scale." },
    { icon: "📈", title: "Scalable Architecture",           desc: "Systems designed to grow with your business." },
    { icon: "🤖", title: "AI-Driven Solutions",             desc: "Applied AI that delivers real business value." },
    { icon: "☁️", title: "Cloud Native Infrastructure",     desc: "Resilient, automated, cloud-first deployments." },
    { icon: "🚀", title: "Continuous Delivery",             desc: "Ship faster with automated, reliable pipelines." }
  ];

  /* =========================================================
     RENDERERS
     ========================================================= */
  function el(html) {
    var t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }

  function statusClass(status) {
    var s = status.toLowerCase();
    if (s === "live") return "status-live";
    if (s === "beta") return "status-beta";
    return "status-progress";
  }

  // Team table
  var teamBody = document.getElementById("teamTableBody");
  if (teamBody) {
    var rows = TEAM.map(function (m, i) {
      return (
        "<tr>" +
          '<td class="td-num">' + String(i + 1).padStart(2, "0") + "</td>" +
          '<td class="td-name">' + m.name + "</td>" +
          '<td class="td-role">' + m.role + "</td>" +
          '<td class="td-email"><a href="mailto:' + m.email + '">' + m.email + "</a></td>" +
        "</tr>"
      );
    }).join("");
    teamBody.innerHTML = rows;
  }
  var teamCount = document.getElementById("teamCount");
  if (teamCount) teamCount.textContent = TEAM.length;

  // Projects
  var projectGrid = document.getElementById("projectGrid");
  if (projectGrid) {
    PROJECTS.forEach(function (p) {
      var tags = p.tech.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      var card = el(
        '<article class="project-card glass tilt reveal">' +
          '<div class="project-banner" style="background:linear-gradient(135deg,rgba(245,185,66,0.28),rgba(168,85,247,0.28));">' +
            '<span class="project-status ' + statusClass(p.status) + '">' + p.status + "</span>" +
            "<span>" + p.icon + "</span>" +
          "</div>" +
          '<div class="project-body">' +
            "<h3>" + p.name + "</h3>" +
            '<p class="proj-desc">' + p.desc + "</p>" +
            '<div class="proj-meta">☁️ <b>Cloud:</b> ' + p.cloud + "</div>" +
            '<div class="tag-row">' + tags + "</div>" +
          "</div>" +
        "</article>"
      );
      projectGrid.appendChild(card);
    });
  }

  // Tech stack
  var stackGrid = document.getElementById("stackGrid");
  if (stackGrid) {
    STACK.forEach(function (c) {
      var pills = c.items.map(function (t) { return "<span>" + t + "</span>"; }).join("");
      var card = el(
        '<article class="stack-card glass tilt reveal">' +
          '<div class="sc-icon">' + c.icon + "</div>" +
          "<h3><small>Category</small>" + c.title + "</h3>" +
          '<div class="tech-pills">' + pills + "</div>" +
        "</article>"
      );
      stackGrid.appendChild(card);
    });
  }

  // Infrastructure pipeline
  var pipeline = document.getElementById("pipeline");
  if (pipeline) {
    PIPELINE.forEach(function (step, i) {
      var node = el(
        '<div class="pipe-step reveal">' +
          '<div class="pipe-node"><span class="pn-icon">' + step.icon + "</span>" + step.label + "</div>" +
          (i < PIPELINE.length - 1 ? '<span class="pipe-arrow">→</span>' : "") +
        "</div>"
      );
      pipeline.appendChild(node);
    });
  }

  // Services
  var serviceGrid = document.getElementById("serviceGrid");
  if (serviceGrid) {
    SERVICES.forEach(function (s) {
      var card = el(
        '<article class="service-card glass tilt reveal">' +
          '<div class="service-icon">' + s.icon + "</div>" +
          "<h3>" + s.title + "</h3>" +
          "<p>" + s.desc + "</p>" +
        "</article>"
      );
      serviceGrid.appendChild(card);
    });
  }

  // Why choose us
  var whyGrid = document.getElementById("whyGrid");
  if (whyGrid) {
    WHY.forEach(function (w) {
      var card = el(
        '<article class="why-card glass tilt reveal">' +
          '<div class="why-icon">' + w.icon + "</div>" +
          "<div><h3>" + w.title + "</h3><p>" + w.desc + "</p></div>" +
        "</article>"
      );
      whyGrid.appendChild(card);
    });
  }

  /* =========================================================
     TEAM PHOTO GALLERY — resilient image loading
     Tries multiple file extensions so any uploaded format works.
     Just add images/team-photo-1.* and images/team-photo-2.*
     ========================================================= */
  (function loadGalleryPhotos() {
    var EXTS = ["jpg", "jpeg", "png", "webp", "JPG", "PNG"];
    document.querySelectorAll(".gallery-card img[data-photo]").forEach(function (img) {
      var base = img.getAttribute("data-photo");
      var i = 0;
      function tryNext() {
        if (i >= EXTS.length) {
          // no file found in any format -> show styled placeholder
          var card = img.closest(".gallery-card");
          if (card) card.classList.add("photo-missing");
          img.remove();
          return;
        }
        img.src = "images/" + base + "." + EXTS[i++];
      }
      img.addEventListener("error", tryNext);
      tryNext();
    });
  })();

  /* =========================================================
     LOADER
     ========================================================= */
  window.addEventListener("load", function () {
    var loader = document.getElementById("loader");
    if (loader) setTimeout(function () { loader.classList.add("hidden"); }, 600);
  });

  /* =========================================================
     FOOTER YEAR
     ========================================================= */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     NAVBAR SCROLL STATE + MOBILE TOGGLE
     ========================================================= */
  var navbar = document.getElementById("navbar");
  function onScroll() {
    if (window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navToggle.classList.toggle("active");
      navLinks.classList.toggle("open");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.classList.remove("active");
        navLinks.classList.remove("open");
      });
    });
  }

  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =========================================================
     REVEAL ON SCROLL
     ========================================================= */
  function bindReveals() {
    var reveals = document.querySelectorAll(".reveal:not(.visible)");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function (e) { io.observe(e); });
    } else {
      reveals.forEach(function (e) { e.classList.add("visible"); });
    }
  }
  bindReveals();

  /* =========================================================
     ANIMATED COUNTERS
     ========================================================= */
  var counters = document.querySelectorAll("[data-count]");
  function animateCounter(elm) {
    var target = parseInt(elm.getAttribute("data-count"), 10) || 0;
    var suffix = elm.getAttribute("data-suffix") || "";
    var duration = 1700, start = null;
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      elm.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else elm.textContent = target + suffix;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var counterIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (e) { counterIO.observe(e); });
  } else {
    counters.forEach(function (e) {
      e.textContent = e.getAttribute("data-count") + (e.getAttribute("data-suffix") || "");
    });
  }

  /* =========================================================
     3D TILT ON HOVER
     ========================================================= */
  if (!prefersReduced && window.matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".tilt").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = "perspective(900px) rotateX(" + (-py * 8).toFixed(2) + "deg) rotateY(" + (px * 10).toFixed(2) + "deg) translateY(-6px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  /* =========================================================
     PARALLAX HERO LOGO STAGE
     ========================================================= */
  var stage = document.querySelector(".logo-stage");
  if (stage && !prefersReduced && window.matchMedia("(pointer: fine)").matches) {
    document.querySelector(".hero").addEventListener("mousemove", function (e) {
      var cx = window.innerWidth / 2, cy = window.innerHeight / 2;
      var dx = (e.clientX - cx) / cx, dy = (e.clientY - cy) / cy;
      stage.style.transform = "rotateY(" + (dx * 10).toFixed(2) + "deg) rotateX(" + (-dy * 10).toFixed(2) + "deg)";
    });
  }

  /* =========================================================
     INTERACTIVE FLOATING PARTICLES (canvas)
     ========================================================= */
  var canvas = document.getElementById("particles");
  if (canvas && !prefersReduced) {
    var ctx = canvas.getContext("2d");
    var particles = [];
    var mouse = { x: -9999, y: -9999 };
    var w, h, count;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      count = Math.min(90, Math.floor(w / 18));
      particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.8 + 0.6
        });
      }
    }
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; });
    window.addEventListener("mouseout", function () { mouse.x = -9999; mouse.y = -9999; });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // mouse interaction
        var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 120) {
          p.x += (mdx / mdist) * 0.8;
          p.y += (mdy / mdist) * 0.8;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245, 185, 66, 0.6)";
        ctx.fill();

        // links
        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = "rgba(200, 132, 252, " + (0.16 * (1 - dist / 130)).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  /* =========================================================
     CONTACT FORM VALIDATION
     ========================================================= */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name, email = form.email, message = form.message;
      var valid = true;
      [name, email, message].forEach(function (field) {
        field.classList.remove("invalid");
        if (!field.value.trim()) { field.classList.add("invalid"); valid = false; }
      });
      var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email.value.trim() && !emailRe.test(email.value.trim())) {
        email.classList.add("invalid"); valid = false;
      }
      if (!valid) {
        status.textContent = "Please fill in all fields with a valid email.";
        status.className = "form-status error";
        return;
      }
      status.textContent = "Thank you, " + name.value.trim() + "! Your message has been received. We'll be in touch soon.";
      status.className = "form-status success";
      form.reset();
    });
  }
})();
