
(() => {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ─────────────────────────── projects ─────────────────────────── */
  const PROJECTS = [
    {
      name: "Premiumed Enterprises",
      repo: "https://github.com/aica02/Premiumed-Enterprises-",
      demo: "https://premiumed-enterprises.vercel.app",
      lang: "JavaScript",
      desc: "Warehouse management system for Premiumed Enterprises — an interactive storage map with colour-coded stock health, FEFO batch rotation, near-expiry alerts and real-time mobile monitoring.",
      note: "In development",
      tags: ["Full-Stack", "MERN Stack", "Website"],
      images: [
        {
          src: "assets/projects/premiumed-warehouse-map.webp",
          alt: "Premiumed Enterprises warehouse map dashboard with storage slots colour-coded as good stock, near expiry, low stock or empty",
          caption: "Interactive warehouse map with colour-coded stock health"
        },
        {
          src: "assets/projects/premiumed-login.webp",
          alt: "Premiumed Enterprises sign-in screen with username and password fields",
          caption: "Secure sign-in screen"
        }
      ]
    },
    {
      name: "BookWise E-Commerce",
      icon: "◐",
      repo: "https://github.com/aica02/AdvWeb-UI-Project",
      demo: "https://bookwise-main.onrender.com",
      lang: "JavaScript",
      desc: "An online bookstore storefront: browsable shelves, a featured-books carousel and search, plus a product page with pricing, wishlist and cart actions.",
      tags: ["Frontend", "MERN Stack", "Website"],
      images: [
        {
          src: "assets/projects/bookwise-storefront.webp",
          alt: "BookWise bookstore landing page with a featured fantasy book carousel and best seller, new releases and book sales navigation",
          caption: "Landing page with the featured-books carousel"
        },
        {
          src: "assets/projects/bookwise-product.webp",
          alt: "BookWise product detail page for The Soul Keeper showing author, description, sale price and Add to Cart and Buy Now buttons",
          caption: "Product page with pricing, wishlist and cart actions"
        }
      ]
    },
    {
      name: "Hagonoy GroundWatch",
      icon: "◎",
      repo: "https://github.com/aica02/Hagonoy_GroundWatch",
      demo: "https://hagonoy-groundwatch.netlify.app",
      lang: "JavaScript",
      desc: "A community platform on land subsidence and tidal flooding in Hagonoy, Bulacan — vulnerability data, an interactive 3D shoreline simulator, and an action plan for holding the shoreline.",
      tags: ["Frontend", "JavaScript", "Website"],
      images: [
        {
          src: "assets/projects/groundwatch-home.webp",
          alt: "Hagonoy GroundWatch landing page reading Hagonoy is sinking 2.5 to 5 cm every year, with statistics on high tide reach, affected barangays and residents on low ground",
          caption: "Landing page with the subsidence story and key figures"
        },
        {
          src: "assets/projects/groundwatch-simulator.webp",
          alt: "Hagonoy GroundWatch interactive simulator with timeline and subsidence sliders beside a 3D coastal model of the town under water",
          caption: "Interactive 3D simulator — run the years and watch the shore drop"
        }
      ]
    },
    {
      name: "Board Review",
      icon: "▤",
      repo: "https://github.com/aica02/Board-Review",
      demo: "https://board-review.netlify.app",
      lang: "JavaScript",
      desc: "An ME board exam prep system built with React and Vite — a study dashboard, the Recall Engine (variable-masked formula flashcards) and timed practice question sets.",
      tags: ["Frontend", "JavaScript", "React", "Website"],
      images: [
        {
          src: "assets/projects/boardreview-dashboard.webp",
          alt: "Board Review dashboard titled ME Board Exam Prep System showing Quick Recall, First Step Strategy, Math and Eng Sciences and Powerplant Engineering study modes",
          caption: "Study-mode dashboard"
        },
        {
          src: "assets/projects/boardreview-questions.webp",
          alt: "Board Review multiple-choice practice question with four answer options and a Show the correct answer link",
          caption: "Timed practice question sets"
        },
        {
          src: "assets/projects/boardreview-flashcards.webp",
          alt: "Board Review Recall Engine flashcard showing the distance between two points formula with a masked variable and a Tap to Reveal Variable button",
          caption: "Recall Engine flashcard with variable masking"
        }
      ]
    },
    {
      name: "Bulakenyo WeatherWatch",
      icon: "☁",
      repo: "https://github.com/aica02/BulakenyoWeatherWatch",
      lang: "TypeScript",
      desc: "A TypeScript weather monitoring app that surfaces local forecasts in a clean, readable view.",
      tags: ["Frontend", "TypeScript", "Mobile App"],
      images: [
        {
          src: "assets/bulakenyo-weather-watch.jpg",
          alt: "Bulakenyo WeatherWatch app showing local weather forecasts",
          caption: "Weather forecast view"
        }
      ]
    },
    // {
    //   name: "ChatApp",
    //   icon: "◌",
    //   repo: "https://github.com/aica02/ChatApp",
    //   lang: "Full-Stack",
    //   desc: "A personal chat web application built on the MERN stack for real-time-style messaging.",
    //   tags: ["Full-Stack", "JavaScript", "MERN"]
    // },
    {
      name: "Slime Buster",
      icon: "✓",
      // repo: "https://github.com/aica02/CodeCheckProject",
      lang: "Java",
      desc: "A 2D pixel-art mobile game built with Unity and Java — a shoot and cleanup game with a scoring system, multiple waves and a high-score leaderboard.",
      tags: ["Backend", "Java", "Mobile App"],
      images: [
        {
          src: "assets/projects/slime-buster-1.jpg",
          alt: "Slime Buster mobile game showing the introduction screen with a Start button and a high-score leaderboard",
          caption: "Introduction screen with a high-score leaderboard"
        },
        {
          src: "assets/projects/slime-buster-2.jpg",
          alt: "Slime Buster mobile game showing the character selection screen with three playable characters and a Play button",
          caption: "Character selection screen"
        },
        {
          src: "assets/projects/slime-buster-3.jpg",
          alt: "Slime Buster mobile game showing the gameplay screen with a player shooting slime enemies and a score and wave counter",
          caption: "Gameplay with score and wave counter"
        },
        {
          src: "assets/projects/slime-buster-4.jpg",
          alt: "Slime Buster mobile game showing the game over screen with a score and a Quit and Play Again button",
          caption: "Game over screen with score (leaderboard), quit and play again option"
        }

      ]
    }
    // {
    //   name: "Mini Online Library System",
    //   icon: "❖",
    //   repo: "https://github.com/aica02/Mini-Online-Library-System",
    //   lang: "JavaScript",
    //   desc: "A library system with login and registration, JWT authentication, role-based access control and add/view book CRUD.",
    //   tags: ["Backend", "JavaScript", "Auth"]
    // },
    // {
    //   name: "To-Do + Quote Generator",
    //   icon: "✎",
    //   repo: "https://github.com/aica02/To-Do",
    //   lang: "JavaScript",
    //   desc: "A to-do app paired with a random quote generator to keep the momentum going.",
    //   tags: ["Frontend", "JavaScript"]
    // },
    // {
    //   name: "Ticket",
    //   icon: "▧",
    //   repo: "https://github.com/aica02/Ticket",
    //   lang: "HTML",
    //   desc: "A ticket-style web page built with HTML — one of my earliest hand-coded layouts.",
    //   tags: ["Frontend", "HTML"]
    // }
  ];

  const CATS = ["All", "Website", "Mobile App"];

  const grid = $("#projectGrid");
  const filtersEl = $("#filters");
  const emptyState = $("#emptyState");

  function langBadge(p) {
    if (p.tags.includes("TypeScript")) return "TypeScript";
    if (p.tags.includes("Java")) return "Java";
    if (p.lang === "HTML") return "HTML";
    if (p.tags.includes("MERN")) return "MERN";
    return "JavaScript";
  }

  function cardEl(p, i) {
    const el = document.createElement("article");
    const hasMedia = Array.isArray(p.images) && p.images.length > 0;
    el.className = hasMedia ? "card card--media" : "card";
    el.dataset.cats = p.tags.join(",");

    const tags = p.tags
      .map((t) => `<span class="chip">${t}</span>`)
      .join("");
    const demo = p.demo
      ? `<a class="card__demo" href="${p.demo}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>`
      : "";
    const note = p.note ? `<span class="badge-dev">${p.note}</span>` : "";
    const count = hasMedia ? p.images.length : 0;

    const media = hasMedia
      ? `<button class="card__media" type="button"
                 aria-label="Open ${count} screenshot${count > 1 ? "s" : ""} of ${p.name}">
           <img src="${p.images[0].src}" alt="${p.images[0].alt}" loading="lazy" width="1600" height="795">
           ${note}
           ${count > 1 ? `<span class="card__count" aria-hidden="true">1 / ${count}</span>` : ""}
           <span class="card__hint" aria-hidden="true">
             <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 3v18M3 9h18"/></svg>
             View screenshots
           </span>
         </button>`
      : "";

    el.innerHTML = `
      ${media}
      ${hasMedia ? "" : note}
      <div class="card__body">
        <div class="card__top">
        </div>
        <h3 class="card__title">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <div class="card__tags">${tags}</div>
        <div class="card__foot">
          
          ${demo}
        </div>
      </div>`;

    if (hasMedia) {
      $(".card__media", el).addEventListener("click", () => openGallery(p, 0));
    }

    el.style.transitionDelay = `${Math.min(i, 8) * 55}ms`;
    return el;
  }

  function render(cat = "All") {
    grid.innerHTML = "";
    const list = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.tags.includes(cat));
    list.forEach((p, i) => grid.appendChild(cardEl(p, i)));
    emptyState.hidden = list.length > 0;

    // reveal the freshly rendered cards, then drop the stagger delay so hover stays snappy
    requestAnimationFrame(() => {
      const cards = $$(".card", grid);
      cards.forEach((c) => c.classList.add("is-in"));
      setTimeout(() => cards.forEach((c) => (c.style.transitionDelay = "0ms")), 1100);
    });
  }

  /* ── filter buttons ── */
  CATS.forEach((c) => {
    const b = document.createElement("button");
    b.className = "filter";
    b.type = "button";
    b.setAttribute("aria-pressed", String(c === "All"));
    b.textContent = c;
    b.addEventListener("click", () => {
      $$(".filter", filtersEl).forEach((f) => f.setAttribute("aria-pressed", "false"));
      b.setAttribute("aria-pressed", "true");
      render(c);
    });
    filtersEl.appendChild(b);
  });

  render();

  /* ─────────────────────────── theme ─────────────────────────── */
  const root = document.documentElement;
  const themeBtn = $("#themeToggle");
  const stored = localStorage.getItem("aj-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const startDark = stored ? stored === "dark" : false;

  function setTheme(dark, persist = true) {
    if (dark) root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    themeBtn.setAttribute("aria-pressed", String(dark));
    if (persist) localStorage.setItem("aj-theme", dark ? "dark" : "light");
  }
  setTheme(startDark, false);
  themeBtn.addEventListener("click", () => setTheme(!root.hasAttribute("data-theme")));

  /* ─────────────────────────── typing ─────────────────────────── */
  const typedEl = $("#typed");
  const PHRASES = [
    "web applications.",
    "REST APIs & databases.",
    "full-stack experiences.",
    "with clean, careful code."
  ];

  if (typedEl) {
    if (reduceMotion) {
      typedEl.textContent = PHRASES[0];
    } else {
      let pi = 0, ci = 0, deleting = false;
      const tick = () => {
        const full = PHRASES[pi];
        ci += deleting ? -1 : 1;
        typedEl.textContent = full.slice(0, ci);
        let delay = deleting ? 42 : 78;
        if (!deleting && ci === full.length) { deleting = true; delay = 1500; }
        else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % PHRASES.length; delay = 380; }
        setTimeout(tick, delay);
      };
      setTimeout(tick, 600);
    }
  }

  /* ─────────────────────────── reveal on scroll ─────────────────────────── */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ─────────────────────────── stat counters ─────────────────────────── */
  const countIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = Number(el.dataset.count || 0);
        if (reduceMotion) { el.textContent = target; countIO.unobserve(el); return; }
        const dur = 1200;
        const t0 = performance.now();
        const step = (now) => {
          const p = Math.min((now - t0) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countIO.unobserve(el);
      });
    },
    { threshold: 0.6 }
  );
  $$("[data-count]").forEach((el) => countIO.observe(el));

  /* ─────────────────────────── nav: stuck, active, ink ─────────────────────────── */
  const nav = $("#nav");
  const links = $$(".nav__links a");
  const ink = $(".nav__ink");
  const sections = links
    .map((a) => $(a.getAttribute("href")))
    .filter(Boolean);

  function moveInk(el) {
    if (!el || !ink) return;
    const wrap = ink.parentElement;
    const wr = wrap.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    ink.style.width = r.width + "px";
    ink.style.transform = `translateX(${r.left - wr.left}px)`;
  }

  function onScroll() {
    nav.classList.toggle("is-stuck", window.scrollY > 12);

    const y = window.scrollY + window.innerHeight * 0.3;
    let current = null;
    sections.forEach((s) => {
      if (s.offsetTop <= y) current = s;
    });
    links.forEach((a) => a.classList.toggle("is-active", current && a.getAttribute("href") === "#" + current.id));
    const active = links.find((a) => a.classList.contains("is-active")) || links[0];
    moveInk(active);
  }
  let rafPending = false;
  window.addEventListener("scroll", () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(() => { onScroll(); rafPending = false; });
  }, { passive: true });

  links.forEach((a) => {
    a.addEventListener("mouseenter", () => moveInk(a));
  });
  $(".nav__links").addEventListener("mouseleave", () => {
    const active = links.find((a) => a.classList.contains("is-active")) || links[0];
    moveInk(active);
  });
  window.addEventListener("resize", onScroll);
  onScroll();

  /* ─────────────────────────── mobile menu ─────────────────────────── */
  const burger = $("#burger");
  const menu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", String(!open));
    menu.hidden = open;
  });
  $$("#mobileMenu a").forEach((a) =>
    a.addEventListener("click", () => {
      burger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    })
  );
  // close the menu if the viewport grows back to desktop size
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && burger.getAttribute("aria-expanded") === "true") {
      burger.setAttribute("aria-expanded", "false");
      menu.hidden = true;
    }
  });

  /* ─────────────────────────── pointer effects ─────────────────────────── */
  // const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // if (fine && !reduceMotion) {
  //   document.body.classList.add("has-pointer");
  //   const glow = $(".cursor-glow");
  //   let gx = window.innerWidth / 2, gy = window.innerHeight / 2, cx = gx, cy = gy;
  //   window.addEventListener("mousemove", (e) => {
  //     gx = e.clientX; gy = e.clientY;
  //     // aurora parallax
  //     const nx = (e.clientX / window.innerWidth - 0.5) * 2;
  //     const ny = (e.clientY / window.innerHeight - 0.5) * 2;
  //     root.style.setProperty("--mx", nx.toFixed(3));
  //     root.style.setProperty("--my", ny.toFixed(3));
  //   });
  //   const follow = () => {
  //     cx += (gx - cx) * 0.12;
  //     cy += (gy - cy) * 0.12;
  //     glow.style.transform = `translate(${cx}px, ${cy}px)`;
  //     requestAnimationFrame(follow);
  //   };
  //   requestAnimationFrame(follow);
  // }

  /* ─────────────────────────── copy email + toast ─────────────────────────── */
  const toast = $("#toast");
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2400);
  }

  const copyBtn = $("#copyEmail");
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      ta.remove();
    }
    showToast("Email copied to clipboard ✿");
    const label = $(".copy-label", copyBtn);
    const original = label.textContent;
    label.textContent = "Copied!";
    setTimeout(() => (label.textContent = original), 1800);
  });

  /* ─────────────────────────── screenshot lightbox ─────────────────────────── */
  const lb = $("#lightbox");
  const lbImage = $("#lbImage");
  const lbCaption = $("#lbCaption");
  const lbCounter = $("#lbCounter");
  const lbProject = $("#lbProject");
  const lbThumbs = $("#lbThumbs");
  const lbPrev = $("#lbPrev");
  const lbNext = $("#lbNext");
  let lbImages = [];
  let lbIndex = 0;
  let lbLastFocus = null;

  function renderLightbox() {
    const item = lbImages[lbIndex];
    if (!item) return;
    lbImage.src = item.src;
    lbImage.alt = item.alt;
    lbCaption.textContent = item.caption || "";
    lbCounter.textContent = `${lbIndex + 1} / ${lbImages.length}`;
    const many = lbImages.length > 1;
    lbPrev.hidden = !many;
    lbNext.hidden = !many;
    $$(".lightbox__thumb", lbThumbs).forEach((t, i) =>
      t.setAttribute("aria-current", String(i === lbIndex))
    );
  }

  function openImages(title, images, start = 0) {
    lbImages = (images || []).slice();
    if (!lbImages.length) return;
    lbIndex = Math.max(0, Math.min(start, lbImages.length - 1));
    lbProject.textContent = title;
    lbThumbs.innerHTML = lbImages
      .map(
        (im, i) => `<button class="lightbox__thumb" type="button" data-i="${i}"
            aria-label="Show screenshot ${i + 1}" aria-current="${i === lbIndex}">
            <img src="${im.src}" alt=""></button>`
      )
      .join("");
    $$(".lightbox__thumb", lbThumbs).forEach((t) =>
      t.addEventListener("click", () => {
        lbIndex = Number(t.dataset.i);
        renderLightbox();
      })
    );
    renderLightbox();
    lbLastFocus = document.activeElement;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }

  function openGallery(p, start = 0) {
    openImages(p.name, p.images, start);
  }

  function closeGallery() {
    lb.hidden = true;
    document.body.style.overflow = "";
    lbImage.removeAttribute("src");
    if (lbLastFocus && typeof lbLastFocus.focus === "function") lbLastFocus.focus();
  }

  function stepGallery(delta) {
    if (lbImages.length < 2) return;
    lbIndex = (lbIndex + delta + lbImages.length) % lbImages.length;
    renderLightbox();
  }

  $("#lbClose").addEventListener("click", closeGallery);
  lbPrev.addEventListener("click", () => stepGallery(-1));
  lbNext.addEventListener("click", () => stepGallery(1));
  $(".lightbox__backdrop", lb).addEventListener("click", closeGallery);

  document.addEventListener("keydown", (e) => {
    if (lb.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeGallery(); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepGallery(-1); }
    else if (e.key === "ArrowRight") { e.preventDefault(); stepGallery(1); }
  });

  /* ─────────────────────────── contact modal ─────────────────────────── */
  const cmodal = $("#contactModal");
  const cform = $("#contactForm");
  const cfName = $("#cfName");
  const cfEmail = $("#cfEmail");
  const cfMessage = $("#cfMessage");
  const cfError = $("#cfError");
  const cfFields = [cfName, cfEmail, cfMessage];
  const CONTACT_EMAIL = $("#copyEmail").dataset.email; // single source of truth
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  let cLastFocus = null;

  function openContact() {
    cLastFocus = document.activeElement;
    cfError.hidden = true;
    cfFields.forEach((f) => f.classList.remove("is-invalid"));
    cmodal.hidden = false;
    document.body.style.overflow = "hidden";
    setTimeout(() => cfName.focus(), 60);
  }

  function closeContact() {
    cmodal.hidden = true;
    document.body.style.overflow = "";
    if (cLastFocus && typeof cLastFocus.focus === "function") cLastFocus.focus();
  }

  function fieldError(el, message) {
    cfError.textContent = message;
    cfError.hidden = false;
    cfFields.forEach((f) => f.classList.remove("is-invalid"));
    el.classList.add("is-invalid");
    el.focus();
  }

  $("#openContact").addEventListener("click", openContact);
  $("#contactClose").addEventListener("click", closeContact);
  $(".cmodal__backdrop", cmodal).addEventListener("click", closeContact);

  cfFields.forEach((f) =>
    f.addEventListener("input", () => {
      f.classList.remove("is-invalid");
      if (!$(".is-invalid", cmodal)) cfError.hidden = true;
    })
  );

  // Escape to close + keep Tab inside the dialog while it's open
  document.addEventListener("keydown", (e) => {
    if (cmodal.hidden) return;
    if (e.key === "Escape") { e.preventDefault(); closeContact(); return; }
    if (e.key !== "Tab") return;
    const focusables = $$("button, input, textarea", cmodal).filter(
      (el) => !el.disabled && el.offsetParent !== null
    );
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });

  cform.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = cfName.value.trim();
    const email = cfEmail.value.trim();
    const message = cfMessage.value.trim();

    if (!name) return fieldError(cfName, "Please add your name.");
    if (!EMAIL_RE.test(email)) return fieldError(cfEmail, "Please enter a valid email address, like you@example.com.");
    if (!message) return fieldError(cfMessage, "Please write a short message.");

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // hand off to the visitor's mail app
    const a = document.createElement("a");
    a.href = href;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();

    closeContact();
    cform.reset();
    showToast("Opening your mail app…");
  });

  /* ─────────────────────────── certifications ───────────────────────────
     Each entry becomes a row in the certifications list. Clicking "Check"
     opens that certificate image in the lightbox.

     To add one: drop the scan into assets/certificates/, then copy an entry:

     {
       title:  "Introduction to HTML",
       issuer: "DICT Region III · ILCDB Tech4ED",
       date:   "Apr 2023",
       image:  "assets/certificates/IntrotoHTMLCertificate_page-0001.jpg",
       alt:    "Certificate of completion awarded to Angelica DP. Jacob"
     }

     Leave `image` out and the row shows "No scan yet" instead of a Check link.
  ─────────────────────────────────────────────────────────────────────── */
  const CERTIFICATES = [
    {
      title: "From Prompt to Production: Building Real AI Applications",
      issuer: "BulSU-Hagonoy Campus · POSHED",
      date: "Mar 2026",
      image: "assets/certificates/AICertificate_page-0001.jpg",
      alt: "Certificate of participation for the seminar From Prompt to Production: Building Real AI Applications, awarded to Angelica DP. Jacob"
    },
    {
      title: "IThrive Securely: Trends and Threats Behind Cybersecurity",
      issuer: "BulSU-Hagonoy Campus · POSHED",
      date: "Nov 2025",
      image: "assets/certificates/IthriveSecurely_page-0001.jpg",
      alt: "Certificate of participation for the IThrive Securely cybersecurity seminar, awarded to Angelica DP. Jacob"
    },
    {
      title: "Introduction to HTML",
      issuer: "DICT Region III · ILCDB Tech4ED",
      date: "Apr 2023",
      image: "assets/certificates/IntrotoHTMLCertificate_page-0001.jpg",
      alt: "Certificate of completion for the 3-day Introduction to HTML training awarded by DICT Region 3 to Angelica DP. Jacob"
    }
  ];

  const certList = $("#certList");

  function renderCertificates() {
    if (!certList) return;
    certList.innerHTML = "";
    CERTIFICATES.forEach((c, i) => {
      const li = document.createElement("li");
      li.className = "cert-item reveal";
      const hasImage = !!c.image;
      li.innerHTML = `
        <div class="cert-item__main">
          <h4 class="cert-item__title">${c.title}</h4>
          ${c.issuer ? `<p class="cert-item__issuer">${c.issuer}</p>` : ""}
        </div>
        <div class="cert-item__side">
          ${c.date ? `<span class="cert-item__date">${c.date}</span>` : ""}
          ${
            hasImage
              ? `<button class="cert-item__check" type="button" aria-label="Check ${c.title}">
                   Check
                   <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>
                 </button>`
              : `<span class="cert-item__check is-off">No scan yet</span>`
          }
        </div>`;
      if (hasImage) {
        $(".cert-item__check", li).addEventListener("click", () =>
          openImages(
            c.title,
            [{ src: c.image, alt: c.alt || c.title, caption: [c.issuer, c.date].filter(Boolean).join(" · ") }],
            0
          )
        );
      }
      li.style.transitionDelay = `${Math.min(i, 8) * 60}ms`;
      certList.appendChild(li);
      requestAnimationFrame(() => li.classList.add("is-in"));
    });
  }

  renderCertificates();

  /* ─────────────────────────── misc ─────────────────────────── */
  $("#year").textContent = new Date().getFullYear();
})();
