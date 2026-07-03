/* ============ DS24 APP ENGINE ============ */

let __memLang = "ar";
let __memTheme = "light";

function safeGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : v;
  } catch (e) {
    return key === "ds24-lang" ? __memLang : __memTheme;
  }
}
function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    if (key === "ds24-lang") __memLang = value;
    if (key === "ds24-theme") __memTheme = value;
  }
}

function getLang() {
  return safeGet("ds24-lang", "ar");
}
function setLang(lang) {
  safeSet("ds24-lang", lang);
}
function t(key) {
  const lang = getLang();
  return (TEXT[key] && TEXT[key][lang]) || (TEXT[key] && TEXT[key].ar) || "";
}
function catName(slug) {
  const lang = getLang();
  return (CATEGORIES[slug] && CATEGORIES[slug][lang]) || slug;
}

function applyDirection() {
  const lang = getLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

/* ---------- CHROME: utility bar, header, nav, ticker, footer ---------- */
function renderChrome(activeKey) {
  applyDirection();
  const lang = getLang();

  document.getElementById("utilBar").innerHTML = `
    <div class="util-inner">
      <div class="util-left">
        <a href="#" aria-label="Facebook">📘</a>
        <a href="#" aria-label="Instagram">📷</a>
        <a href="#" aria-label="X">✖️</a>
        <a href="#" aria-label="YouTube">▶️</a>
      </div>
      <div class="util-right">
        <button class="theme-toggle" id="themeToggle" title="theme">🌙</button>
        <button class="lang-btn ${lang==='ar'?'active':''}" data-lang="ar">AR</button>
        <button class="lang-btn ${lang==='fr'?'active':''}" data-lang="fr">FR</button>
        <button class="lang-btn ${lang==='en'?'active':''}" data-lang="en">EN</button>
      </div>
    </div>`;

  document.getElementById("siteHeader").innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html">DS24 <span>${t("brand_tag")}</span></a>
      <div class="search-box">
        <button type="button" id="searchIconBtn" aria-label="search">🔍</button>
        <input type="text" id="searchInput" placeholder="${t("search_ph")}" autocomplete="off">
        <div class="search-results" id="searchResults"></div>
      </div>
    </div>`;

  // Bind search directly to the freshly created elements (belt-and-suspenders
  // alongside the document-level delegation below).
  const searchInput = document.getElementById("searchInput");
  const searchIconBtn = document.getElementById("searchIconBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => runSearch(e.target.value));
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const first = document.querySelector("#searchResults a");
        if (first) location.href = first.getAttribute("href");
      }
    });
    searchInput.addEventListener("focus", () => {
      if (searchInput.value.trim()) runSearch(searchInput.value);
    });
  }
  if (searchIconBtn) {
    searchIconBtn.addEventListener("click", () => {
      if (searchInput.value.trim()) {
        runSearch(searchInput.value);
        const first = document.querySelector("#searchResults a");
        if (first) { location.href = first.getAttribute("href"); return; }
      }
      searchInput.focus();
    });
  }

  const navLinks = [`<a href="index.html" class="${activeKey==='home'?'active':''}">${t("home")}</a>`]
    .concat(CATEGORY_ORDER.map(slug =>
      `<a href="${slug}.html" class="${activeKey===slug?'active':''}">${catName(slug)}</a>`
    ));
  document.getElementById("siteNav").innerHTML = `<div class="nav-inner">${navLinks.join("")}</div>`;

  document.getElementById("siteTicker").innerHTML = `
    <span class="badge">${t("breaking")}</span>
    <div class="ticker-track"><div class="ticker-content">${t("ticker")}</div></div>`;

  document.getElementById("siteFooter").innerHTML = `
    <div class="footer-inner">
      <div>
        <h5>DS24</h5>
        <a href="about.html">${t("about")}</a>
        <a href="contact.html">${t("contact")}</a>
        <a href="team.html">${t("editorial")}</a>
      </div>
      <div>
        <h5>${t("sections")}</h5>
        <a href="politique.html">${catName("politique")}</a>
        <a href="economie.html">${catName("economie")}</a>
        <a href="sport.html">${catName("sport")}</a>
      </div>
      <div>
        <h5>${t("services")}</h5>
        <a href="#">${t("newsletter")}</a>
        <a href="#">${t("mobile_app")}</a>
        <a href="#">${t("ads")}</a>
      </div>
      <div>
        <h5>${t("follow_us")}</h5>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">X</a>
      </div>
    </div>
    <div class="footer-bottom">${t("rights")}</div>`;

  // theme toggle restore state
  const themeBtn = document.getElementById("themeToggle");
  if (safeGet("ds24-theme", "light") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeBtn.textContent = "☀️";
  }
}

/* Event delegation so buttons/search keep working even after chrome re-renders */
document.addEventListener("click", (e) => {
  const langBtn = e.target.closest(".lang-btn");
  if (langBtn) {
    setLang(langBtn.dataset.lang);
    rerenderCurrentPage();
    return;
  }
  const themeBtn = e.target.closest("#themeToggle");
  if (themeBtn) {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
    themeBtn.textContent = isDark ? "🌙" : "☀️";
    safeSet("ds24-theme", isDark ? "light" : "dark");
    return;
  }
  // clicking outside the search box closes the results dropdown
  if (!e.target.closest(".search-box")) {
    const results = document.getElementById("searchResults");
    if (results) results.classList.remove("show");
  }
});

document.addEventListener("input", (e) => {
  if (e.target.id === "searchInput") {
    runSearch(e.target.value);
  }
});
document.addEventListener("keydown", (e) => {
  if (e.target.id === "searchInput" && e.key === "Enter") {
    const first = document.querySelector("#searchResults a");
    if (first) location.href = first.getAttribute("href");
  }
});
document.addEventListener("focusin", (e) => {
  if (e.target.id === "searchInput" && e.target.value.trim()) {
    runSearch(e.target.value);
  }
});

function runSearch(query) {
  const box = document.getElementById("searchResults");
  if (!box) return;
  const q = query.trim().toLowerCase();
  if (!q) { box.classList.remove("show"); box.innerHTML = ""; return; }

  const lang = getLang();
  const matches = ARTICLES.filter(a => {
    const c = a[lang] || a.ar;
    const cat = catName(a.category).toLowerCase();
    return c.title.toLowerCase().includes(q)
        || c.excerpt.toLowerCase().includes(q)
        || cat.includes(q);
  }).slice(0, 6);

  box.innerHTML = matches.length
    ? matches.map(a => `<a href="article.html?id=${a.id}">${(a[lang]||a.ar).title} <span style="opacity:.6;font-size:11px;">· ${catName(a.category)}</span></a>`).join("")
    : `<div style="padding:12px; font-size:13px; color:var(--ink-soft);">${t("no_results")}</div>`;
  box.classList.add("show");
}

/* Re-render whichever page is currently loaded (used after a language switch) */
function rerenderCurrentPage() {
  if (typeof window.__rerenderPage === "function") {
    window.__rerenderPage();
  } else {
    location.reload();
  }
}

/* ---------- helpers ---------- */
function articleCard(article, opts = {}) {
  const lang = getLang();
  const content = article[lang] || article.ar;
  return `
    <a class="article-row" href="article.html?id=${article.id}">
      <img src="${article.img}" alt="">
      <div>
        <h4>${content.title}</h4>
        <div class="meta">${catName(article.category)} · ${article.time[lang]} · ${t("source_label")}: ${article.source_name}</div>
        ${opts.excerpt !== false ? `<div class="excerpt">${content.excerpt}</div>` : ""}
      </div>
    </a>`;
}

function sidebarHTML(excludeId) {
  const lang = getLang();
  const mostReadIds = [82, 77, 85, 78, 74];
  const mostRead = mostReadIds.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
  const tagSlugs = ["politique","economie","sport","regions","tech"];
  return `
    <div class="side-card">
      <h3>${t("most_read")}</h3>
      ${mostRead.map(a => `
        <div class="side-item">
          <span class="time">${a.time[lang]}</span>
          <a href="article.html?id=${a.id}">${(a[lang]||a.ar).title}</a>
        </div>`).join("")}
    </div>
    <div class="side-card">
      <h3>${t("source_title")}</h3>
      <div class="side-item"><span>${t("source_text")}</span></div>
    </div>
    <div class="side-card">
      <h3>${t("popular_tags")}</h3>
      <div style="display:flex; flex-wrap:wrap; gap:8px;">
        ${tagSlugs.map(s => `<a href="${s}.html" class="tag-chip">#${catName(s)}</a>`).join("")}
      </div>
    </div>`;
}

/* ---------- PAGE: HOME ---------- */
function renderHome() {
  window.__rerenderPage = renderHome;
  renderChrome("home");
  const lang = getLang();
  const byId = (id) => ARTICLES.find(a => a.id === id);
  // Featured hero + "latest" list now prioritize the most recently added, most current stories
  const featured = [byId(82), byId(87), byId(78)]; // Al Hoceima arrest (minutes ago), city celebrations, meat prices
  const latest = [byId(82), byId(77), byId(78), byId(74), byId(85), byId(69)];
  const photos = [byId(87), byId(88)];

  document.getElementById("pageContent").innerHTML = `
    <div class="grid">
      <div>
        <div class="hero" id="hero">
          <div class="hero-slide"></div>
          <button class="hero-nav prev" onclick="changeSlide(-1)">‹</button>
          <button class="hero-nav next" onclick="changeSlide(1)">›</button>
          <div class="hero-dots" id="heroDots"></div>
        </div>

        <div class="section-title"><h3>${t("latest_news")}</h3></div>
        <div class="article-list">${latest.map(a => articleCard(a)).join("")}</div>

        <div class="section-title"><h3>${t("photos_videos")}</h3></div>
        <div class="grid-2col">
          ${photos.map(a => `
            <a class="thumb-card" href="article.html?id=${a.id}">
              <img src="${a.img}" alt="">
              <div class="cap">${(a[lang]||a.ar).title}</div>
            </a>`).join("")}
        </div>
      </div>
      <aside>${sidebarHTML()}</aside>
    </div>`;

  window.__heroSlides = featured;
  window.__heroIndex = 0;
  renderHeroSlide();
  clearInterval(window.__heroTimer);
  window.__heroTimer = setInterval(() => changeSlide(1), 6000);
}

function renderHeroSlide() {
  const lang = getLang();
  const s = window.__heroSlides[window.__heroIndex];
  const content = s[lang] || s.ar;
  const hero = document.getElementById("hero");
  hero.querySelector(".hero-slide").innerHTML = `
    <a href="article.html?id=${s.id}">
      <img src="${s.img}" alt="">
      <div class="hero-caption">
        <span class="tag">${catName(s.category)}</span>
        <h2>${content.title}</h2>
      </div>
    </a>`;
  document.getElementById("heroDots").innerHTML = window.__heroSlides
    .map((_, i) => `<span class="${i===window.__heroIndex?'active':''}" onclick="goToSlide(${i})"></span>`).join("");
}
function changeSlide(dir) {
  window.__heroIndex = (window.__heroIndex + dir + window.__heroSlides.length) % window.__heroSlides.length;
  renderHeroSlide();
}
function goToSlide(i) { window.__heroIndex = i; renderHeroSlide(); }

/* ---------- PAGE: CATEGORY ---------- */
function renderCategory(slug) {
  window.__rerenderPage = () => renderCategory(slug);
  renderChrome(slug);
  const items = ARTICLES.filter(a => a.category === slug);

  document.getElementById("pageContent").innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t("home")}</a> / ${catName(slug)}</div>
    <div class="category-banner">
      <h1>${catName(slug)}</h1>
      <span class="count">${items.length} ${t("articles_count")}</span>
    </div>
    <div class="grid">
      <div>
        <div class="section-title"><h3>${t("latest_in")} ${catName(slug)}</h3></div>
        <div class="article-list">${items.map(a => articleCard(a)).join("")}</div>
        <div class="pagination">
          <span class="current">1</span>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">${t("next")}</a>
        </div>
      </div>
      <aside>${sidebarHTML()}</aside>
    </div>`;
}

/* ---------- PAGE: STATIC (About / Contact / Team) ---------- */
function renderAbout() {
  window.__rerenderPage = renderAbout;
  renderChrome("about");
  document.getElementById("pageContent").innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t("home")}</a> / ${t("about_title")}</div>
    <div class="side-card">
      <h3>${t("about_title")}</h3>
      <p style="line-height:1.9; font-size:15px; margin-bottom:20px;">${t("about_body")}</p>
      <h3>${t("about_mission")}</h3>
      <p style="line-height:1.9; font-size:15px;">${t("about_mission_body")}</p>
    </div>`;
}

function renderContact() {
  window.__rerenderPage = renderContact;
  renderChrome("contact");
  document.getElementById("pageContent").innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t("home")}</a> / ${t("contact_title")}</div>
    <div class="side-card">
      <h3>${t("contact_title")}</h3>
      <p style="line-height:1.9; font-size:15px; margin-bottom:20px;">${t("contact_body")}</p>
      <div style="display:flex; align-items:center; gap:10px; font-size:15px;">
        <span style="font-weight:700; color:var(--green-deep);">${t("contact_email_label")}:</span>
        <a href="mailto:support@ds24.com" style="color:var(--green-mid); font-weight:600;">support@ds24.com</a>
      </div>
    </div>`;
}

function renderTeam() {
  window.__rerenderPage = renderTeam;
  renderChrome("team");
  document.getElementById("pageContent").innerHTML = `
    <div class="breadcrumb"><a href="index.html">${t("home")}</a> / ${t("team_title")}</div>
    <div class="side-card">
      <h3>${t("team_title")}</h3>
      <p style="line-height:1.9; font-size:15px;">${t("team_body")}</p>
    </div>`;
}
function renderArticle() {
  window.__rerenderPage = renderArticle;
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get("id"), 10);
  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];
  renderChrome(article.category);
  const lang = getLang();
  const content = article[lang] || article.ar;
  const related = ARTICLES.filter(a => a.category === article.category && a.id !== article.id).slice(0, 3);

  document.title = `${content.title} | DS24`;

  document.getElementById("pageContent").innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">${t("home")}</a> /
      <a href="${article.category}.html">${catName(article.category)}</a> /
      ${content.title}
    </div>
    <div class="grid">
      <div>
        <article class="article-detail">
          <span class="tag" style="display:inline-block;background:var(--green-bright);color:#fff;font-size:12px;font-weight:700;padding:3px 12px;border-radius:5px;margin-bottom:12px;">${catName(article.category)}</span>
          <h1 style="font-size:26px; line-height:1.6; margin-bottom:10px;">${content.title}</h1>
          <div class="meta" style="margin-bottom:16px;">${article.time[lang]}</div>
          <img src="${article.img}" alt="" style="width:100%; border-radius:12px; margin-bottom:20px; box-shadow:var(--shadow);">
          <div class="detail-body">
            ${content.body.map(p => `<p style="margin-bottom:14px; line-height:1.9; font-size:15.5px;">${p}</p>`).join("")}
          </div>
          <div style="margin-top:22px; padding:14px 16px; border-radius:10px; background:var(--paper); border:1px solid var(--line); font-size:13.5px; color:var(--ink-soft);">
            ${t("source_label")}: <strong style="color:var(--ink);">${article.source_name}</strong> —
            <a href="${article.source_url}" target="_blank" rel="noopener noreferrer" style="color:var(--green-mid); font-weight:600;">${t("read_full")} ↗</a>
          </div>
        </article>

        <div class="section-title"><h3>${t("related")}</h3></div>
        <div class="article-list">${related.map(a => articleCard(a)).join("")}</div>

        <p style="margin-top:20px;"><a href="index.html" style="color:var(--green-mid); font-weight:600;">← ${t("back_home")}</a></p>
      </div>
      <aside>${sidebarHTML(article.id)}</aside>
    </div>`;
}
