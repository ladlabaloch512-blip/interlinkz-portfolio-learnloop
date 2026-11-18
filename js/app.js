/* LearnLoop Academy demo site logic. All course data comes from the content pack. */
(function () {
  "use strict";

  var COURSES = [
    {
      id: "excel-for-work", title: "Excel for Work", category: "Business", level: "Beginner",
      lessons: 42, hours: 6, price: 24, icon: "sheet", tint: "#ECE9FA",
      blurb: "Learn sheets, formulas, charts and reports used in real offices.",
      overview: "A practical start to spreadsheet work, built around the sheets a real office uses every day. You will build clean files, let formulas do the maths, and turn plain numbers into charts and reports that other people can read at a glance.",
      learn: ["Build clean spreadsheets with tidy formatting", "Use everyday formulas like SUM, AVERAGE and IF", "Turn data into clear, honest charts", "Make simple monthly reports", "Use filters, sorting and print setup with confidence"],
      modules: [
        { name: "Getting started with sheets", lessons: 8 },
        { name: "Formulas that do the maths for you", lessons: 10 },
        { name: "Charts and visuals", lessons: 8 },
        { name: "Sorting, filters and clean data", lessons: 8 },
        { name: "Reports and printing", lessons: 8 }
      ]
    },
    {
      id: "graphic-design-basics", title: "Graphic Design Basics", category: "Design", level: "Beginner",
      lessons: 55, hours: 9, price: 29, icon: "design", tint: "#E2F6EF",
      blurb: "Colour, type, layout and your first portfolio pieces in free tools.",
      overview: "Design from the ground up, with no paid software needed. You will learn how colour, type and layout work together, then design real pieces like posters and social posts, and finish with a small portfolio you can show.",
      learn: ["Use colour with confidence", "Pair fonts and set readable type", "Lay out posters, posts and pages", "Work well in free design tools", "Build your first portfolio pieces"],
      modules: [
        { name: "Design basics and colour", lessons: 11 },
        { name: "Type that reads well", lessons: 10 },
        { name: "Layout and spacing", lessons: 12 },
        { name: "Designing in free tools", lessons: 12 },
        { name: "Your portfolio project", lessons: 10 }
      ]
    },
    {
      id: "social-media-marketing", title: "Social Media Marketing", category: "Marketing", level: "Beginner",
      lessons: 38, hours: 5, price: 27, icon: "megaphone", tint: "#ECE9FA",
      blurb: "Plan, post and read results for small business pages.",
      overview: "A calm, practical course for anyone running a small business page. Plan a month of posts in one sitting, write captions that sound human, and read your page results so you know what is working.",
      learn: ["Plan a month of posts in one sitting", "Write captions that sound human", "Design simple post graphics", "Read page results without guesswork", "Reply to comments and messages well"],
      modules: [
        { name: "Setting up your pages", lessons: 8 },
        { name: "Planning content", lessons: 10 },
        { name: "Posting and captions", lessons: 10 },
        { name: "Reading your results", lessons: 10 }
      ]
    },
    {
      id: "python-first-steps", title: "Python First Steps", category: "Technology", level: "Beginner",
      lessons: 60, hours: 11, price: 34, icon: "code", tint: "#E2F6EF",
      blurb: "Code basics, small projects and problem solving practice.",
      overview: "Your first steps in programming, taught slowly and clearly. You will write real Python from the first lesson, build small projects as you go, and learn how to stay calm when the code does not work the first time.",
      learn: ["Write and run your first Python programs", "Work with text, numbers and lists", "Use loops and choices to solve problems", "Fix simple errors calmly", "Build small practice projects"],
      modules: [
        { name: "Your first lines of code", lessons: 12 },
        { name: "Text, numbers and lists", lessons: 14 },
        { name: "Loops and choices", lessons: 14 },
        { name: "Functions and tidy code", lessons: 10 },
        { name: "Practice projects", lessons: 10 }
      ]
    },
    {
      id: "english-speaking-practice", title: "English Speaking Practice", category: "Language", level: "Beginner to Intermediate",
      lessons: 48, hours: 7, price: 19, icon: "speech", tint: "#ECE9FA",
      blurb: "Daily speaking drills, common phrases and confidence building.",
      overview: "Speaking improves with daily practice, not grammar rules alone. This course gives you short daily drills, the phrases people actually use, and a steady routine that builds real confidence week by week.",
      learn: ["Speak about your day in clear sentences", "Use common everyday phrases", "Handle introductions and small talk", "Ask and answer questions smoothly", "Build a daily speaking habit"],
      modules: [
        { name: "Everyday sentences", lessons: 12 },
        { name: "Phrases for real life", lessons: 12 },
        { name: "Talking about work and study", lessons: 12 },
        { name: "Confidence drills", lessons: 12 }
      ]
    },
    {
      id: "bookkeeping-and-accounts", title: "Bookkeeping and Accounts", category: "Business", level: "Intermediate",
      lessons: 44, hours: 8, price: 32, icon: "ledger", tint: "#E2F6EF",
      blurb: "Ledgers, invoices, payroll basics and month end reports.",
      overview: "Keep the books of a small business properly, step by step. Ledgers, invoices and payroll basics, then a calm month end routine that produces reports an owner or an accountant can trust.",
      learn: ["Keep a clean daily ledger", "Raise and track invoices", "Handle payroll basics", "Close the month step by step", "Spot mistakes before they grow"],
      modules: [
        { name: "Ledgers and daily records", lessons: 11 },
        { name: "Invoices and payments", lessons: 11 },
        { name: "Payroll basics", lessons: 10 },
        { name: "Month end reports", lessons: 12 }
      ]
    },
    {
      id: "web-design-html-css", title: "Web Design with HTML and CSS", category: "Technology", level: "Beginner",
      lessons: 52, hours: 10, price: 36, icon: "browser", tint: "#ECE9FA",
      blurb: "Build and style real web pages from zero.",
      overview: "Build real web pages from an empty file. You will structure pages with HTML, style them with CSS, make layouts that work on phones, and finish by publishing a small site of your own.",
      learn: ["Structure a page with HTML", "Style pages with CSS", "Make layouts that work on phones", "Add forms, buttons and menus", "Publish a small site of your own"],
      modules: [
        { name: "HTML from zero", lessons: 13 },
        { name: "CSS styling basics", lessons: 13 },
        { name: "Layouts and responsive pages", lessons: 14 },
        { name: "Your first real site", lessons: 12 }
      ]
    },
    {
      id: "video-editing-for-creators", title: "Video Editing for Creators", category: "Design", level: "Intermediate",
      lessons: 40, hours: 7, price: 31, icon: "video", tint: "#E2F6EF",
      blurb: "Cut, caption and export clean videos for social platforms.",
      overview: "Edit videos that look clean and hold attention. Cut clips into a story, add captions people actually read, fix dull sound and colour, and export the right size for each platform.",
      learn: ["Cut clips into a clean story", "Add captions people actually read", "Fix shaky sound and dull colour", "Export the right size for each platform", "Plan a week of videos"],
      modules: [
        { name: "Editing basics and cuts", lessons: 10 },
        { name: "Captions and text", lessons: 10 },
        { name: "Sound and colour fixes", lessons: 10 },
        { name: "Exporting for social platforms", lessons: 10 }
      ]
    },
    {
      id: "data-analysis-sheets-sql", title: "Data Analysis with Sheets and SQL", category: "Technology", level: "Intermediate",
      lessons: 58, hours: 12, price: 39, icon: "chart", tint: "#ECE9FA",
      blurb: "Clean data, ask questions and build simple dashboards.",
      overview: "Turn messy data into clear answers. Clean data in sheets, ask questions with simple SQL, summarise with pivots, and build a small dashboard that explains itself in plain words.",
      learn: ["Clean messy data in sheets", "Ask questions with simple SQL", "Summarise data with pivots", "Build a simple dashboard", "Explain findings in plain words"],
      modules: [
        { name: "Cleaning data in sheets", lessons: 14 },
        { name: "SQL questions step by step", lessons: 16 },
        { name: "Pivots and summaries", lessons: 14 },
        { name: "Dashboards and reporting", lessons: 14 }
      ]
    },
    {
      id: "urdu-english-translation", title: "Urdu to English Translation Skills", category: "Language", level: "Intermediate",
      lessons: 36, hours: 6, price: 22, icon: "translate", tint: "#E2F6EF",
      blurb: "Accurate translation for documents, websites and subtitles.",
      overview: "Translate with accuracy, not word swapping. Keep the meaning exact, handle idioms and polite forms with care, and learn the checking routine that professional editors use on documents, websites and subtitles.",
      learn: ["Keep meaning exact when you translate", "Handle idioms and polite forms", "Translate documents and web pages", "Write clean subtitle lines", "Check your work like an editor"],
      modules: [
        { name: "Meaning first translation", lessons: 9 },
        { name: "Documents and letters", lessons: 9 },
        { name: "Websites and subtitles", lessons: 9 },
        { name: "Editing and final checks", lessons: 9 }
      ]
    },
    {
      id: "small-business-finance", title: "Small Business Finance", category: "Business", level: "Beginner",
      lessons: 30, hours: 5, price: 26, icon: "coins", tint: "#ECE9FA",
      blurb: "Pricing, cash flow and simple records for owners.",
      overview: "The money side of a small business, explained plainly. Price with a method, watch cash flow before it becomes a problem, and keep records simple enough that you will actually keep them.",
      learn: ["Price products with a clear method", "Track cash in and cash out", "Keep simple weekly records", "Plan for slow months", "Know when you can afford help"],
      modules: [
        { name: "Pricing that works", lessons: 8 },
        { name: "Cash flow basics", lessons: 8 },
        { name: "Simple records", lessons: 7 },
        { name: "Planning ahead", lessons: 7 }
      ]
    },
    {
      id: "presentation-skills", title: "Presentation Skills That Land", category: "Business", level: "All levels",
      lessons: 25, hours: 4, price: 21, icon: "present", tint: "#E2F6EF",
      blurb: "Structure, slides and delivery for work and study.",
      overview: "Give talks that people follow and remember. Structure your message, design slides that help instead of distracting, and practise a delivery style that lands at work or in class.",
      learn: ["Structure a talk people follow", "Design slides that support, not distract", "Open and close with confidence", "Handle questions calmly", "Practise delivery that lands"],
      modules: [
        { name: "Structuring your talk", lessons: 7 },
        { name: "Slides that help", lessons: 6 },
        { name: "Delivery practice", lessons: 6 },
        { name: "Questions and tricky moments", lessons: 6 }
      ]
    }
  ];

  var CATEGORIES = [
    { name: "Business", icon: "briefcase", line: "Sheets, accounts, finance and presenting." },
    { name: "Design", icon: "design", line: "Design basics and video editing." },
    { name: "Marketing", icon: "megaphone", line: "Social media for small business pages." },
    { name: "Technology", icon: "code", line: "Python, web design and data skills." },
    { name: "Language", icon: "speech", line: "Speaking practice and translation skills." }
  ];

  var PATHS = [
    {
      name: "Job Ready Designer",
      desc: "Go from first design steps to real web pages and video, then learn to present your work with confidence.",
      courses: ["graphic-design-basics", "web-design-html-css", "video-editing-for-creators", "presentation-skills"]
    },
    {
      name: "Small Business Owner",
      desc: "Run the money side calmly, keep proper books, and bring in customers with simple, honest marketing.",
      courses: ["small-business-finance", "bookkeeping-and-accounts", "social-media-marketing", "excel-for-work"]
    },
    {
      name: "Data Starter",
      desc: "Start in spreadsheets, learn to ask data questions with SQL, then automate the boring parts with Python.",
      courses: ["excel-for-work", "data-analysis-sheets-sql", "python-first-steps"]
    }
  ];

  var FEATURED = ["excel-for-work", "graphic-design-basics", "python-first-steps", "web-design-html-css", "social-media-marketing", "data-analysis-sheets-sql"];
  var LEVELS = ["Beginner", "Intermediate", "All levels"];
  var PRICE_BUCKETS = [
    { id: "under25", label: "Under $25", test: function (p) { return p < 25; } },
    { id: "25to34", label: "$25 to $34", test: function (p) { return p >= 25 && p <= 34; } },
    { id: "35plus", label: "$35 and up", test: function (p) { return p >= 35; } }
  ];

  /* ---------- flat SVG art (indigo, mint, paper tones) ---------- */
  function svgWrap(inner) {
    return '<svg viewBox="0 0 96 96" fill="none" stroke="#3B3486" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + "</svg>";
  }
  var ICONS = {
    sheet: svgWrap('<rect x="18" y="14" width="60" height="68" rx="6" fill="#FFFFFF"/><path d="M18 32h60M18 50h60M18 68h60M38 14v68M58 14v68" stroke-width="2.5"/><path d="M24 62l10-8 8 5 12-11" stroke="#1E9678"/><circle cx="66" cy="42" r="3.5" fill="#2FBF9B" stroke="none"/>'),
    design: svgWrap('<circle cx="36" cy="34" r="13" fill="#2FBF9B" stroke="none" opacity="0.85"/><rect x="50" y="46" width="26" height="26" rx="4" fill="#FFFFFF"/><path d="M30 78l14-20 14 20z" fill="#ECE9FA"/>'),
    megaphone: svgWrap('<path d="M16 42v14h10l34 18V24L26 42H16z" fill="#FFFFFF"/><path d="M26 56v14a6 6 0 0 0 12 0V62" /><path d="M70 36a12 12 0 0 1 0 26" stroke="#1E9678"/><path d="M78 28a22 22 0 0 1 0 42" stroke="#1E9678"/>'),
    code: svgWrap('<rect x="12" y="18" width="72" height="56" rx="8" fill="#FFFFFF"/><path d="M36 36l-10 10 10 10M60 36l10 10-10 10" stroke="#1E9678"/><path d="M52 32l-8 28"/>'),
    speech: svgWrap('<path d="M18 20h60v42H46l-16 14v-14h-12z" fill="#FFFFFF"/><path d="M30 36h36M30 48h24" stroke="#1E9678"/>'),
    ledger: svgWrap('<path d="M26 12h44v72H26z" fill="#FFFFFF"/><path d="M26 12v72" stroke-width="2.5"/><path d="M38 30h24M38 44h24M38 58h16" stroke="#1E9678"/><path d="M18 20h8M18 40h8M18 60h8"/>'),
    browser: svgWrap('<rect x="12" y="16" width="72" height="60" rx="8" fill="#FFFFFF"/><path d="M12 32h72" stroke-width="2.5"/><circle cx="22" cy="24" r="2.6" fill="#2FBF9B" stroke="none"/><circle cx="32" cy="24" r="2.6" fill="#2FBF9B" stroke="none"/><rect x="20" y="42" width="24" height="24" fill="#ECE9FA" stroke-width="3"/><path d="M54 44h20M54 56h20M54 68h12" stroke="#1E9678" stroke-width="3"/>'),
    video: svgWrap('<rect x="12" y="22" width="72" height="44" rx="8" fill="#FFFFFF"/><path d="M42 34l18 10-18 10z" fill="#2FBF9B" stroke="none"/><path d="M22 78h52" stroke="#1E9678"/><path d="M34 74v8M48 74v8M62 74v8" stroke="#1E9678" stroke-width="3"/>'),
    chart: svgWrap('<path d="M16 14v66h66" /><rect x="28" y="52" width="10" height="24" fill="#ECE9FA"/><rect x="44" y="42" width="10" height="34" fill="#2FBF9B" stroke="none"/><rect x="60" y="30" width="10" height="46" fill="#ECE9FA"/><path d="M26 40l16-10 14 6 16-14" stroke="#1E9678"/>'),
    translate: svgWrap('<path d="M14 18h42v30H30L16 60V48h-2z" fill="#FFFFFF"/><path d="M24 30h22M24 39h14" stroke="#1E9678" stroke-width="3"/><path d="M82 40v30H58l-12 10V70h-2V40z" fill="#ECE9FA"/><path d="M56 52h16M56 61h10" stroke-width="3"/>'),
    coins: svgWrap('<circle cx="36" cy="58" r="18" fill="#FFFFFF"/><path d="M36 48v20M30 53c0-3 12-3 12 1 0 5-12 2-12 7 0 4 12 4 12 1" stroke="#1E9678" stroke-width="3"/><circle cx="62" cy="30" r="14" fill="#ECE9FA"/><path d="M62 22v16M57 27c0-2.4 10-2.4 10 .8 0 4-10 1.6-10 5.6 0 3.2 10 3.2 10 .8" stroke-width="2.6"/>'),
    present: svgWrap('<rect x="18" y="14" width="60" height="42" rx="6" fill="#FFFFFF"/><path d="M48 56v12M34 76l14-8 14 8" /><path d="M28 44l12-10 10 6 14-14" stroke="#1E9678"/><path d="M28 50h40" stroke-width="2.5"/>'),
    briefcase: svgWrap('<rect x="14" y="30" width="68" height="46" rx="8" fill="#FFFFFF"/><path d="M34 30v-6a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v6M14 50h68M44 50h8v10h-8z" /><rect x="44" y="50" width="8" height="10" fill="#2FBF9B" stroke="none"/>')
  };

  /* ---------- helpers ---------- */
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function byId(id) {
    for (var i = 0; i < COURSES.length; i++) { if (COURSES[i].id === id) { return COURSES[i]; } }
    return null;
  }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function cardHTML(c) {
    return '<a class="course-card" href="course.html?id=' + c.id + '">' +
      '<div class="course-art" style="background:' + c.tint + '">' + ICONS[c.icon] + "</div>" +
      '<div class="course-body">' +
      '<div class="course-tags"><span class="tag">' + esc(c.category) + '</span><span class="tag tag-level">' + esc(c.level) + "</span></div>" +
      "<h3>" + esc(c.title) + "</h3>" +
      '<p class="course-blurb">' + esc(c.blurb) + "</p>" +
      '<div class="course-meta"><span>' + c.lessons + ' lessons</span><span>' + c.hours + ' hours of video</span></div>' +
      '<div class="course-foot"><span class="course-price">$' + c.price + '</span><span class="course-view">View course</span></div>' +
      "</div></a>";
  }

  /* ---------- demo enrolment state (session only) ---------- */
  var DEFAULT_ENROLLED = [
    { id: "excel-for-work", progress: 45 },
    { id: "english-speaking-practice", progress: 70 },
    { id: "presentation-skills", progress: 100 }
  ];
  function getEnrolled() {
    try {
      var raw = sessionStorage.getItem("ll_enrolled");
      if (raw) { return JSON.parse(raw); }
    } catch (e) { /* storage unavailable, use defaults */ }
    return DEFAULT_ENROLLED.slice();
  }
  function saveEnrolled(list) {
    try { sessionStorage.setItem("ll_enrolled", JSON.stringify(list)); } catch (e) { /* ignore */ }
  }
  function enrolCourse(id) {
    var list = getEnrolled();
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) { return; } }
    list.unshift({ id: id, progress: 0 });
    saveEnrolled(list);
  }
  function isEnrolled(id) {
    var list = getEnrolled();
    for (var i = 0; i < list.length; i++) { if (list[i].id === id) { return true; } }
    return false;
  }

  /* ---------- shared chrome: nav toggle + FAQ accordion ---------- */
  function initChrome() {
    var toggle = $(".nav-toggle");
    var nav = $("#main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
    $$(".faq-item").forEach(function (item) {
      var btn = $(".faq-q", item);
      if (!btn) { return; }
      btn.addEventListener("click", function () {
        var open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    });
  }

  /* ---------- home ---------- */
  function initHome() {
    var catGrid = $("#cat-grid");
    if (catGrid) {
      catGrid.innerHTML = CATEGORIES.map(function (cat) {
        var count = COURSES.filter(function (c) { return c.category === cat.name; }).length;
        return '<a class="cat-tile" href="courses.html?cat=' + encodeURIComponent(cat.name) + '">' +
          '<div class="cat-art">' + ICONS[cat.icon] + "</div><h3>" + esc(cat.name) + "</h3>" +
          "<p>" + esc(cat.line) + "</p><p><strong>" + count + (count === 1 ? " course" : " courses") + "</strong></p></a>";
      }).join("");
    }
    var featured = $("#featured-grid");
    if (featured) {
      featured.innerHTML = FEATURED.map(function (id) { return cardHTML(byId(id)); }).join("");
    }
    var homePaths = $("#home-paths");
    if (homePaths) {
      homePaths.innerHTML = PATHS.map(function (p) {
        return '<a class="path-card" href="paths.html"><h3>' + esc(p.name) + "</h3><p>" + esc(p.desc) + '</p><span class="path-count">' + p.courses.length + " courses in order</span></a>";
      }).join("");
    }
    var input = $("#hero-search-input");
    var suggest = $("#search-suggest");
    if (input && suggest) {
      input.addEventListener("input", function () {
        var q = input.value.trim().toLowerCase();
        if (q.length < 2) { suggest.hidden = true; suggest.innerHTML = ""; return; }
        var hits = COURSES.filter(function (c) { return c.title.toLowerCase().indexOf(q) !== -1; }).slice(0, 5);
        if (!hits.length) { suggest.hidden = true; suggest.innerHTML = ""; return; }
        suggest.innerHTML = hits.map(function (c) {
          return '<a href="course.html?id=' + c.id + '">' + esc(c.title) + ' <span class="suggest-meta">' + esc(c.category) + " / $" + c.price + "</span></a>";
        }).join("");
        suggest.hidden = false;
      });
      input.addEventListener("blur", function () {
        setTimeout(function () { suggest.hidden = true; }, 180);
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") { suggest.hidden = true; }
      });
    }
  }

  /* ---------- catalogue ---------- */
  function initCatalogue() {
    var grid = $("#catalogue-grid");
    if (!grid) { return; }
    var params = new URLSearchParams(window.location.search);
    var state = {
      q: params.get("q") || "",
      cats: {},
      levels: {},
      price: "all"
    };
    var initialCat = params.get("cat");
    if (initialCat) { state.cats[initialCat] = true; }

    var searchInput = $("#cat-search");
    searchInput.value = state.q;

    function checkboxHTML(group, value, label, count, checked) {
      return '<label><input type="checkbox" data-group="' + group + '" value="' + esc(value) + '"' + (checked ? " checked" : "") + "> " + esc(label) + ' <span class="filter-count">(' + count + ")</span></label>";
    }
    $("#filter-categories").innerHTML = CATEGORIES.map(function (cat) {
      var count = COURSES.filter(function (c) { return c.category === cat.name; }).length;
      return checkboxHTML("cats", cat.name, cat.name, count, !!state.cats[cat.name]);
    }).join("");
    $("#filter-levels").innerHTML = LEVELS.map(function (lvl) {
      var count = COURSES.filter(function (c) { return c.level.indexOf(lvl) !== -1 || c.level === lvl; }).length;
      return checkboxHTML("levels", lvl, lvl, count, false);
    }).join("");
    $("#filter-prices").innerHTML =
      '<label><input type="radio" name="price" data-group="price" value="all" checked> All prices</label>' +
      PRICE_BUCKETS.map(function (b) {
        var count = COURSES.filter(function (c) { return b.test(c.price); }).length;
        return '<label><input type="radio" name="price" data-group="price" value="' + b.id + '"> ' + esc(b.label) + ' <span class="filter-count">(' + count + ")</span></label>";
      }).join("");

    function matches(c) {
      if (state.q && c.title.toLowerCase().indexOf(state.q.toLowerCase()) === -1) { return false; }
      var catKeys = Object.keys(state.cats).filter(function (k) { return state.cats[k]; });
      if (catKeys.length && catKeys.indexOf(c.category) === -1) { return false; }
      var lvlKeys = Object.keys(state.levels).filter(function (k) { return state.levels[k]; });
      if (lvlKeys.length) {
        var ok = lvlKeys.some(function (lvl) { return c.level.indexOf(lvl) !== -1; });
        if (!ok) { return false; }
      }
      if (state.price !== "all") {
        var bucket = PRICE_BUCKETS.filter(function (b) { return b.id === state.price; })[0];
        if (bucket && !bucket.test(c.price)) { return false; }
      }
      return true;
    }

    function render() {
      var hits = COURSES.filter(matches);
      grid.innerHTML = hits.map(cardHTML).join("");
      $("#result-count").textContent = "Showing " + hits.length + " of " + COURSES.length + " courses";
      $("#empty-state").hidden = hits.length !== 0;
      grid.style.display = hits.length === 0 ? "none" : "";
    }

    $("#filters-panel").addEventListener("change", function (e) {
      var t = e.target;
      var group = t.getAttribute("data-group");
      if (!group) { return; }
      if (group === "price") { state.price = t.value; }
      else if (group === "cats") { state.cats[t.value] = t.checked; }
      else if (group === "levels") { state.levels[t.value] = t.checked; }
      render();
    });
    searchInput.addEventListener("input", function () {
      state.q = searchInput.value.trim();
      render();
    });
    function clearAll() {
      state.q = ""; state.cats = {}; state.levels = {}; state.price = "all";
      searchInput.value = "";
      $$("#filters-panel input[type=checkbox]").forEach(function (cb) { cb.checked = false; });
      var all = $('#filters-panel input[type=radio][value="all"]');
      if (all) { all.checked = true; }
      render();
    }
    $("#filters-clear").addEventListener("click", clearAll);
    $("#empty-clear").addEventListener("click", clearAll);

    var ft = $("#filters-toggle");
    var panel = $("#filters-panel");
    if (ft && panel) {
      ft.addEventListener("click", function () {
        var open = panel.classList.toggle("open");
        ft.setAttribute("aria-expanded", open ? "true" : "false");
        ft.textContent = open ? "Hide filters" : "Show filters";
      });
    }
    render();
  }

  /* ---------- course detail ---------- */
  function initCourse() {
    var holder = $("#course-detail");
    if (!holder) { return; }
    var params = new URLSearchParams(window.location.search);
    var c = byId(params.get("id") || "");
    if (!c) {
      holder.innerHTML = '<div class="empty-state"><h2>Course not found</h2><p>That course link does not match any course in the catalogue.</p><a class="btn btn-indigo" href="courses.html">Browse all courses</a></div>';
      return;
    }
    document.title = c.title + " | LearnLoop Academy";
    $("#crumb-title").textContent = c.title;
    var enrolled = isEnrolled(c.id);
    var modulesHTML = c.modules.map(function (m, i) {
      return '<div class="module-item"><h3>Module ' + (i + 1) + ": " + esc(m.name) + "</h3><span>" + m.lessons + " lessons</span></div>";
    }).join("");
    var learnHTML = c.learn.map(function (item) { return "<li>" + esc(item) + "</li>"; }).join("");
    holder.innerHTML =
      '<div class="course-hero"><div>' +
      '<div class="course-tags"><span class="tag">' + esc(c.category) + '</span><span class="tag tag-level">' + esc(c.level) + "</span></div>" +
      "<h1>" + esc(c.title) + "</h1>" +
      '<p class="section-lede">' + esc(c.blurb) + "</p>" +
      '<div class="course-hero-art" style="background:' + c.tint + '">' + ICONS[c.icon] + "</div>" +
      '<div class="fact-row">' +
      '<div class="fact"><span>Level</span><strong>' + esc(c.level) + "</strong></div>" +
      '<div class="fact"><span>Lessons</span><strong>' + c.lessons + "</strong></div>" +
      '<div class="fact"><span>Video time</span><strong>' + c.hours + " hours</strong></div>" +
      '<div class="fact"><span>Category</span><strong>' + esc(c.category) + "</strong></div>" +
      "</div>" +
      "<h2>About this course</h2><p>" + esc(c.overview) + "</p>" +
      "<p>Lessons are recorded, so you learn at your own pace, and each module ends with a practice task. Some courses add a monthly live question session.</p>" +
      "</div>" +
      '<aside class="enrol-card">' +
      '<p class="price-big">$' + c.price + "</p>" +
      (enrolled
        ? '<p><strong>You are enrolled in this course (demo).</strong></p><a class="btn btn-mint btn-block" href="dashboard.html">Go to your dashboard</a>'
        : '<a class="btn btn-mint btn-block" href="auth.html?mode=signup&amp;course=' + c.id + '">Enrol now</a>') +
      "<h3>Every course includes</h3>" +
      '<ul class="tick-list"><li>Lifetime access to its lessons</li><li>A completion certificate</li><li>Practice files or worksheets</li><li>A 7 day money back promise</li></ul>' +
      '<p><a href="pricing.html">See bundle and pass prices</a></p>' +
      "</aside></div>" +
      '<div class="detail-grid"><div><h2>What you will learn</h2><ul class="tick-list">' + learnHTML + "</ul></div>" +
      '<div><h2>Curriculum outline</h2><div class="module-list">' + modulesHTML + "</div>" +
      "<p>" + c.lessons + " lessons in total, " + c.hours + " hours of video.</p></div></div>";
  }

  /* ---------- paths ---------- */
  function initPaths() {
    var holder = $("#paths-list");
    if (!holder) { return; }
    holder.innerHTML = PATHS.map(function (p) {
      var total = p.courses.reduce(function (sum, id) { return sum + byId(id).price; }, 0);
      var steps = p.courses.map(function (id) {
        var c = byId(id);
        return '<li><span class="path-step-num" aria-hidden="true"></span><div><a href="course.html?id=' + c.id + '">' + esc(c.title) + '</a><span class="step-facts">' + esc(c.category) + " / " + esc(c.level) + " / " + c.lessons + " lessons / $" + c.price + "</span></div></li>";
      }).join("");
      return '<article class="path-block"><h2>' + esc(p.name) + "</h2><p>" + esc(p.desc) + '</p><ol class="path-steps">' + steps + '</ol><p><strong>' + p.courses.length + " courses, $" + total + ' if bought one by one.</strong> Bundles and the all courses pass can bring that down. <a href="pricing.html">See pricing</a></p></article>';
    }).join("");
  }

  /* ---------- pricing table ---------- */
  function initPricing() {
    var body = $("#price-table-body");
    if (!body) { return; }
    body.innerHTML = COURSES.map(function (c) {
      return '<tr><td><a href="course.html?id=' + c.id + '">' + esc(c.title) + "</a></td><td>" + esc(c.category) + "</td><td>" + esc(c.level) + "</td><td>" + c.lessons + "</td><td>$" + c.price + "</td></tr>";
    }).join("");
  }

  /* ---------- dashboard ---------- */
  function initDashboard() {
    var list = $("#dash-courses");
    if (!list) { return; }
    var name = "Demo Learner";
    try { name = sessionStorage.getItem("ll_user") || name; } catch (e) { /* ignore */ }
    $("#dash-welcome").textContent = "Welcome back, " + name;
    var enrolled = getEnrolled().filter(function (e) { return byId(e.id); });
    if (!enrolled.length) {
      list.innerHTML = '<div class="empty-state"><h3>No enrolled courses yet</h3><p>Browse the catalogue and enrol in your first course.</p><a class="btn btn-indigo" href="courses.html">Browse courses</a></div>';
    } else {
      list.innerHTML = enrolled.map(function (e) {
        var c = byId(e.id);
        var label = e.progress === 0 ? "Just started" : e.progress >= 100 ? "Completed" : e.progress + "% complete";
        return '<div class="dash-course"><div class="dash-course-art" style="background:' + c.tint + '">' + ICONS[c.icon] + '</div>' +
          '<div class="dash-course-main"><h3>' + esc(c.title) + "</h3><p>" + esc(c.category) + " / " + c.lessons + " lessons</p>" +
          '<div class="progress"><div class="progress-bar" style="width:' + e.progress + '%"></div></div>' +
          '<p class="progress-label">' + label + "</p></div>" +
          '<a class="btn btn-indigo btn-small" href="course.html?id=' + c.id + '">Continue learning</a></div>';
      }).join("");
    }
    var certs = enrolled.filter(function (e) { return e.progress >= 100; });
    var certHolder = $("#dash-certs");
    if (certs.length) {
      certHolder.innerHTML = certs.map(function (e) {
        var c = byId(e.id);
        return '<div class="cert-item"><strong>' + esc(c.title) + '</strong><span>Certificate ready (demo). Download and sharing are part of the full site.</span></div>';
      }).join("");
    } else {
      certHolder.innerHTML = "<p>No certificates yet (demo). Finish a course and your certificate will appear here, ready to download and share.</p>";
    }
  }

  /* ---------- auth ---------- */
  function initAuth() {
    var signupForm = $("#signup-form");
    if (!signupForm) { return; }
    var loginForm = $("#login-form");
    var params = new URLSearchParams(window.location.search);
    var courseId = params.get("course");
    var mode = params.get("mode") === "login" ? "login" : "signup";
    var tabS = $("#tab-signup"), tabL = $("#tab-login");
    function setMode(m) {
      mode = m;
      signupForm.hidden = m !== "signup";
      loginForm.hidden = m !== "login";
      tabS.classList.toggle("active", m === "signup");
      tabL.classList.toggle("active", m === "login");
      tabS.setAttribute("aria-selected", m === "signup" ? "true" : "false");
      tabL.setAttribute("aria-selected", m === "login" ? "true" : "false");
    }
    tabS.addEventListener("click", function () { setMode("signup"); });
    tabL.addEventListener("click", function () { setMode("login"); });
    setMode(mode);

    if (courseId && byId(courseId)) {
      var c = byId(courseId);
      var note = $("#auth-course-note");
      note.hidden = false;
      note.textContent = "You are enrolling in " + c.title + " ($" + c.price + "). " + (mode === "signup" ? "Create your demo account" : "Log in") + " to add it to your dashboard.";
    }
    function emailOk(v) { return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v); }
    function finish(name) {
      try {
        if (name) { sessionStorage.setItem("ll_user", name); }
      } catch (e) { /* ignore */ }
      if (courseId && byId(courseId)) { enrolCourse(courseId); }
      window.location.href = "dashboard.html";
    }
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#su-name").value.trim();
      var email = $("#su-email").value.trim();
      var pass = $("#su-password").value;
      var err = $("#signup-error");
      if (!name || !email || !pass) { err.textContent = "Please fill in your name, email and a password."; err.hidden = false; return; }
      if (!emailOk(email)) { err.textContent = "That email address does not look right. Please check it and try again."; err.hidden = false; return; }
      err.hidden = true;
      finish(name);
    });
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = $("#li-email").value.trim();
      var pass = $("#li-password").value;
      var err = $("#login-error");
      if (!email || !pass) { err.textContent = "Please fill in your email and password."; err.hidden = false; return; }
      if (!emailOk(email)) { err.textContent = "That email address does not look right. Please check it and try again."; err.hidden = false; return; }
      err.hidden = true;
      finish(null);
    });
  }

  /* ---------- generic demo forms (contact, instructor) ---------- */
  function initDemoForm(formId, errorId, successId) {
    var form = document.getElementById(formId);
    if (!form) { return; }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var err = document.getElementById(errorId);
      var ok = document.getElementById(successId);
      var missing = [];
      $$("[required]", form).forEach(function (field) {
        if (!field.value.trim()) { missing.push(field); }
      });
      var emailField = form.querySelector('input[type="email"]');
      if (emailField && emailField.value && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailField.value.trim())) {
        err.textContent = "That email address does not look right. Please check it and try again.";
        err.hidden = false; if (ok) { ok.hidden = true; }
        return;
      }
      if (missing.length) {
        err.textContent = "Please fill in all the fields before sending.";
        err.hidden = false; if (ok) { ok.hidden = true; }
        missing[0].focus();
        return;
      }
      err.hidden = true;
      if (ok) { ok.hidden = false; }
      form.reset();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initChrome();
    var page = document.body.getAttribute("data-page");
    if (page === "home") { initHome(); }
    if (page === "courses") { initCatalogue(); }
    if (page === "course") { initCourse(); }
    if (page === "paths") { initPaths(); }
    if (page === "pricing") { initPricing(); }
    if (page === "dashboard") { initDashboard(); }
    if (page === "auth") { initAuth(); }
    initDemoForm("contact-form", "contact-error", "contact-success");
    initDemoForm("instructor-form", "instructor-error", "instructor-success");
  });
})();
