/* ==========================================================
   NEXTGEN AI — page renderer
   Builds the shared header/footer and each page's content from
   js/data.js. No build step, no server needed.
   ========================================================== */
(function () {
  "use strict";
  const S = window.SITE || SITE;
  const P = S.project;

  const NAV = [
    { href: "index.html", label: "Home", key: "home" },
    { href: "research.html", label: "Research Domain", key: "research" },
    { href: "components.html", label: "Components", key: "components" },
    { href: "milestones.html", label: "Milestones", key: "milestones" },
    { href: "documents.html", label: "Documents", key: "documents" },
    { href: "presentations.html", label: "Presentations", key: "presentations" },
    { href: "about.html", label: "About Us", key: "about" },
  ];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = (n) => n.replace(/^(Mr|Ms|Mrs|Dr|Prof)\.?\s+/i, "").split(/[\s.]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  const page = document.body.dataset.page;
  // avatar with photo; falls back to initials if the image is missing
  const avatar = (name, photo, cls = "") => `<div class="avatar ${cls}">${initials(name)}${photo ? `<img src="${esc(photo)}" alt="Photo of ${esc(name)}" loading="lazy" onerror="this.remove()">` : ""}</div>`;
  const memberFor = (id, name) => (S.team || []).find((m) => m.id === id) || (S.team || []).find((m) => m.name === name) || {};

  const LOGO = `<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><defs><linearGradient id="lg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5a5fff"/><stop offset="1" stop-color="#2a2f8f"/></linearGradient></defs><rect width="40" height="40" rx="10" fill="url(#lg)"/><g stroke="#fff" stroke-width="1.6" fill="none" opacity=".9"><path d="M11 13 L20 20 L29 13 M11 27 L20 20 L29 27"/></g><g fill="#fff"><circle cx="11" cy="13" r="3"/><circle cx="29" cy="13" r="3"/><circle cx="11" cy="27" r="3"/><circle cx="29" cy="27" r="3"/><circle cx="20" cy="20" r="3.6"/></g></svg>`;
  const SUN = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`;
  const MOON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>`;
  const MENU = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`;
  const DL = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>`;

  /* ---------------- Theme ---------------- */
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); const b = document.getElementById("themeBtn"); if (b) b.innerHTML = t === "dark" ? SUN : MOON; }
  const savedTheme = store.get("theme") || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  /* ---------------- Header / Footer ---------------- */
  function header() {
    return `<a class="skip" href="#main">Skip to content</a>
    <header class="site-header"><div class="container nav">
      <a class="brand" href="index.html">${LOGO}<span>${esc(P.team)}<small>${esc(P.id)}</small></span></a>
      <ul class="nav-links" id="navLinks">${NAV.map((n) => `<li><a href="${n.href}" class="${n.key === page ? "active" : ""}">${n.label}</a></li>`).join("")}</ul>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Open menu">${MENU}</button>
      <button class="icon-btn" id="themeBtn" aria-label="Toggle dark mode"></button>
    </div></header>`;
  }
  function footer() {
    return `<footer class="site-footer"><div class="container">
      <div class="foot-grid">
        <div><a class="brand" href="index.html">${LOGO}<span>${esc(P.team)}<small>${esc(P.id)}</small></span></a>
          <p class="muted" style="margin-top:14px;max-width:440px">${esc(P.title)}</p></div>
        <div><h4>Explore</h4><ul>${NAV.slice(1, 5).map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul></div>
        <div><h4>Contact</h4><ul><li>${esc(P.institute)}</li><li><a href="mailto:${esc(P.email)}">${esc(P.email)}</a></li>${P.github ? `<li><a href="${esc(P.github)}" target="_blank" rel="noopener">GitHub repository</a></li>` : ""}</ul></div>
      </div>
      <div class="foot-bottom"><span>© ${esc(P.year)} ${esc(P.team)} · ${esc(P.id)} · Academic research website</span><span>${esc(P.faculty)}</span></div>
    </div></footer>`;
  }
  function pageHero(title, sub) {
    return `<div class="page-hero"><div class="container"><div class="crumbs"><a href="index.html">Home</a> / ${esc(title)}</div><h1>${esc(title)}</h1><p>${esc(sub)}</p></div></div>`;
  }
  const head = (kicker, title, sub) => `<div class="section-head reveal"><div class="kicker">${esc(kicker)}</div><h2>${esc(title)}</h2>${sub ? `<p class="muted">${esc(sub)}</p>` : ""}</div>`;
  const compById = (id) => S.components.find((c) => c.id === id);

  /* ---------------- Shared pieces ---------------- */
  function pipelineDiagram() {
    const d = S.domain.pipeline;
    const node = (c, label) => `<div class="pnode agent acc-${c.id}"><small>Component ${c.num}</small>${esc(label || c.name)}</div>`;
    return `<div class="pipeline reveal" role="img" aria-label="Integrated multi-agent pipeline">
      <div class="pnode io"><small>Input</small>${esc(d.input)}</div>
      <div class="parrow">→</div>
      ${node(compById("c1"))}
      <div class="parrow">→</div>
      <div class="pbranches">
        <div class="pbranch"><span class="tag">PARALLEL</span>${node(compById("c3"))}</div>
        <div class="pbranch"><span class="tag">SEQUENTIAL</span>${node(compById("c2"), "Emotion")}<span class="parrow" style="font-size:16px">→</span>${node(compById("c4"), "Loss Framing")}</div>
      </div>
      <div class="parrow">→</div>
      <div class="pnode io"><small>Synthesis</small>${esc(d.output)}</div>
    </div>`;
  }
  function compCard(c) {
    return `<a class="card comp-card acc-${c.id} reveal" href="components.html#${c.id}" style="color:inherit;text-decoration:none">
      <div class="comp-num">COMPONENT ${c.num}</div>
      <h3 style="margin-top:6px">${esc(c.name)}</h3>
      <span class="pill">${esc(c.theory)}</span>
      <p>${esc(c.summary)}</p>
      <span class="more">View component →</span></a>`;
  }

  /* ---------------- Pages ---------------- */
  const pages = {};

  pages.home = () => `
    <section class="hero"><canvas id="net"></canvas><div class="container">
      <span class="eyebrow">${esc(P.id)} · Final Year Research ${esc(P.year)}</span>
      <h1>${esc(P.title)}</h1>
      <p class="lead">${esc(P.tagline)}</p>
      <div class="hero-actions">
        <a class="btn btn-light" href="research.html">Explore the research</a>
        <a class="btn btn-ghost" href="documents.html">View documents</a>
      </div></div></section>
    <div class="container"><div class="grid g4 stats">${S.stats.map((s) => `<div class="card stat reveal"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div></div>
    <section class="block"><div class="container grid g2" style="align-items:center;gap:48px">
      <div class="reveal">${head("Overview", "Why this research matters").replace('reveal"', '"')}
        ${S.domain.background.slice(0, 2).map((p) => `<p>${esc(p)}</p>`).join("")}
        <a class="btn btn-outline" href="research.html#problem">Read the research problem →</a></div>
      <div class="card reveal"><div class="kicker" style="color:var(--primary);font-weight:700;font-size:13px;letter-spacing:.1em">RESEARCH PROBLEM</div>
        <p style="font-family:var(--font-head);font-size:18px;font-weight:500;margin-top:10px">${esc(S.domain.problem)}</p></div>
    </div></section>
    <section class="block alt"><div class="container">
      ${head("Four research components", "One framework, four behavioural theories", "Each component is an independent research study with its own objectives, data, models and evaluation.")}
      <div class="grid g4">${S.components.map(compCard).join("")}</div>
    </div></section>
    <section class="block"><div class="container">
      ${head("Integrated system", "How the agents work together", "Component 1's recommended strategy feeds every downstream agent; an orchestrator combines all outputs into one final recommendation.")}
      ${pipelineDiagram()}
    </div></section>
    <section class="block alt"><div class="container">
      ${head("Technologies", "Built with")}
      <div class="chips reveal">${S.domain.technologies.flatMap((g) => g.items).map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </div></section>`;

  pages.research = () => {
    const D = S.domain;
    const tabs = [["background", "Background"], ["literature", "Literature Survey"], ["gap", "Research Gap"], ["problem", "Research Problem"], ["objectives", "Objectives"], ["methodology", "Methodology"], ["technologies", "Technologies"]];
    return `${pageHero("Research Domain", "The background, literature, gaps, problem, objectives and methodology behind the framework.")}
    <nav class="subnav" aria-label="Section navigation"><div class="container">${tabs.map(([id, l]) => `<a href="#${id}" data-spy="${id}">${l}</a>`).join("")}</div></nav>
    <section class="block" id="background"><div class="container">${head("01", "Background")}<div class="prose reveal" style="max-width:820px">${D.background.map((p) => `<p>${esc(p)}</p>`).join("")}</div></div></section>
    <section class="block alt" id="literature"><div class="container">${head("02", "Literature Survey", "Key theoretical and technical works underpinning each component.")}
      <div class="grid g2">${D.literature.map((g) => {
        const c = compById(g.component.toLowerCase());
        return `<div class="card ref-group reveal ${c ? "acc-" + c.id : ""}"><h3><span class="pill">${c ? "C" + c.num.slice(1) : "All"}</span>${esc(g.theme)}</h3><ol class="ref-list">${g.refs.map((r) => `<li>${esc(r)}</li>`).join("")}</ol></div>`;
      }).join("")}</div></div></section>
    <section class="block" id="gap"><div class="container">${head("03", "Research Gap", "What existing tools and studies leave unaddressed.")}
      <div class="grid g3">${D.gaps.map((g, i) => `<div class="card gap-card reveal"><div class="ico">${i + 1}</div><h4>${esc(g.gap)}</h4><p>${esc(g.detail)}</p></div>`).join("")}</div></div></section>
    <section class="block alt" id="problem"><div class="container">${head("04", "Research Problem")}<blockquote class="quote reveal" style="margin:0;max-width:900px">${esc(D.problem)}</blockquote></div></section>
    <section class="block" id="objectives"><div class="container">${head("05", "Research Objectives")}
      <div class="card reveal" style="margin-bottom:22px;border-left:4px solid var(--primary)"><div class="kicker" style="color:var(--primary);font-weight:700;font-size:13px;letter-spacing:.1em">MAIN OBJECTIVE</div><p style="margin:8px 0 0;font-size:17px">${esc(D.objectives.main)}</p></div>
      <h3 class="reveal" style="font-size:18px">Specific objectives</h3>
      <ol class="obj-list reveal">${D.objectives.specific.map((o) => `<li>${esc(o)}</li>`).join("")}</ol></div></section>
    <section class="block alt" id="methodology"><div class="container">${head("06", "Methodology", "The end-to-end research process followed by the team.")}
      <div class="grid g2" style="gap:48px;align-items:start">
        <ol class="steps reveal">${D.methodology.map((m, i) => `<li data-n="${i + 1}"><h4>${esc(m.step)}</h4><p>${esc(m.text)}</p></li>`).join("")}</ol>
        <div class="reveal"><h3 style="font-size:18px">System architecture</h3><p class="muted">A single FastAPI backend exposes a <code>/generate-strategy</code> orchestrator. Each agent is an internal module with a <code>run(input) → output</code> interface and shared Pydantic schemas.</p>
          <div style="margin-top:18px">${pipelineDiagram().replace('class="pipeline', 'class="pipeline vertical')}</div></div>
      </div></div></section>
    <section class="block" id="technologies"><div class="container">${head("07", "Technologies Used")}
      <div class="grid g4">${D.technologies.map((g) => `<div class="card reveal"><h3 style="font-size:16px">${esc(g.group)}</h3><div class="chips">${g.items.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div>`).join("")}</div></div></section>`;
  };

  pages.components = () => {
    const panel = (c) => `<div class="panel acc-${c.id}" id="panel-${c.id}" role="tabpanel">
      <div class="comp-head"><div><div class="comp-num">COMPONENT ${c.num}</div><h2>${esc(c.name)}</h2><span class="pill">${esc(c.theory)}</span></div>
        <div class="owner">${avatar(c.owner, memberFor(c.ownerId, c.owner).photo)}<div><b>${esc(c.owner)}</b><small>${esc(c.ownerId)} · Component lead</small></div></div></div>
      <p style="font-size:17px;max-width:860px">${esc(c.summary)}</p>
      <div class="grid g2" style="margin:28px 0">
        <div class="card kv"><h4>Research objective</h4><p style="margin:0">${esc(c.objective)}</p></div>
        <div class="card kv"><h4>Research questions</h4><ul>${c.questions.map((q) => `<li>${esc(q)}</li>`).join("")}</ul></div>
      </div>
      <div class="grid g2" style="margin-bottom:28px">
        <div class="card kv"><h4>Agent pipeline</h4><ol class="flow">${c.pipeline.map((s, i) => `<li><span>${i + 1}</span>${esc(s)}</li>`).join("")}</ol></div>
        <div class="grid" style="gap:20px">
          <div class="card kv"><h4>Data</h4><ul>${c.data.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
          <div class="card kv"><h4>Models & tools</h4><ul>${c.models.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        </div>
      </div>
      <div class="card kv" style="margin-bottom:28px"><h4>Evaluation methodology</h4><div class="chips">${c.evaluation.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div></div>
      <h3 style="font-size:18px">Key results</h3>
      <div class="grid g3">${c.results.map((r) => `<div class="card metric"><b>${esc(r.value)}</b><span>${esc(r.label)}</span></div>`).join("")}</div>
    </div>`;
    return `${pageHero("Research Components", "Four independent research studies, each modelling one behavioural principle as an autonomous AI agent.")}
    <nav class="subnav" aria-label="Components"><div class="container" role="tablist">${S.components.map((c) => `<button class="tab acc-${c.id}" role="tab" data-tab="${c.id}">C${c.num.slice(1)} · ${esc(c.name)}</button>`).join("")}</div></nav>
    <section class="block"><div class="container">${S.components.map(panel).join("")}</div></section>
    <section class="block alt"><div class="container">${head("Integration", "From four agents to one strategy")}${pipelineDiagram()}</div></section>`;
  };

  pages.milestones = () => {
    const label = { done: "Completed", current: "In progress", upcoming: "Upcoming" };
    const icon = { done: "✓", current: "•", upcoming: "" };
    return `${pageHero("Milestones", "The assessment timeline of the research project, from topic approval to the final viva.")}
    <section class="block"><div class="container" style="max-width:860px"><ol class="timeline">${S.milestones.map((m) => `
      <li class="tl-item ${m.status} reveal"><span class="tl-dot">${icon[m.status]}</span>
        <div class="card tl-card"><div><span class="status">${label[m.status]}</span><h3>${esc(m.title)}</h3></div><span class="tl-date">${esc(m.date)}</span><p>${esc(m.text)}</p></div></li>`).join("")}
    </ol></div></section>`;
  };

  const fileBtn = (f, label) => f
    ? (/^https?:\/\//.test(f)
        ? `<a class="btn btn-primary" href="${esc(f)}" target="_blank" rel="noopener">${label || "View"} ↗</a>`
        : `<a class="btn btn-primary" href="${esc(f)}" target="_blank" rel="noopener" download>${DL}${label || "Download"}</a>`)
    : `<span class="badge-soon">Coming soon</span>`;

  pages.documents = () => `${pageHero("Documents", "All documentation produced throughout the research project, from the topic assessment to the final thesis.")}
    <section class="block"><div class="container">
      <input class="search" id="docSearch" type="search" placeholder="Search documents…" aria-label="Search documents">
      ${S.documents.map((cat) => `<div class="doc-cat"><h2>${esc(cat.category)}</h2><div class="grid g2">${cat.items.map((d) => `
        <div class="card doc reveal" data-name="${esc((d.title + " " + cat.category).toLowerCase())}"><div class="doc-ico">${esc(d.type)}</div>
          <div class="doc-body"><h3>${esc(d.title)}</h3><span>${esc(cat.category)}</span></div>${fileBtn(d.file)}</div>`).join("")}</div></div>`).join("")}
      <p class="muted" id="noDocs" hidden>No documents match your search.</p>
    </div></section>`;

  pages.presentations = () => `${pageHero("Presentations", "Slide decks presented to the evaluation panel at each assessment stage.")}
    <section class="block"><div class="container"><div class="grid g4">${S.presentations.map((p, i) => `
      <div class="card slide-card reveal"><div class="slide-thumb"><small>${esc(P.id)} · Stage ${i + 1}</small><b>${esc(p.title)}</b></div>
        <div class="slide-foot"><span class="muted" style="font-size:14px">${esc(p.date)}</span>${fileBtn(p.file, "Slides")}</div></div>`).join("")}
    </div></div></section>`;

  pages.about = () => {
    const person = (x, sub, idTxt) => `<div class="card person reveal">${avatar(x.name, x.photo)}<h3>${esc(x.name)}</h3><div class="role">${esc(sub)}</div>${idTxt ? `<p class="sid">${esc(idTxt)}</p>` : ""}${x.email ? `<p style="margin:8px 0 0;font-size:14px"><a href="mailto:${esc(x.email)}">${esc(x.email)}</a></p>` : ""}</div>`;
    return `${pageHero("About Us", "The research team and supervisors behind " + P.team + ".")}
    <section class="block"><div class="container">${head("Supervision", "Supervisors")}
      <div class="grid g2" style="max-width:760px">${S.supervisors.map((s) => person(s, s.role + " · " + s.org)).join("")}</div></div></section>
    <section class="block alt"><div class="container">${head("Team " + P.team, "Research team")}
      <div class="grid g4">${S.team.map((t, i) => `<div class="acc-c${i + 1}">${person(t, t.role, t.id)}</div>`).join("")}</div></div></section>
    <section class="block" id="contact"><div class="container grid g2" style="gap:48px;align-items:start">
      <div class="reveal">${head("Contact", "Get in touch").replace('reveal"', '"')}<p class="muted">Questions about the research, datasets or collaboration? Send us a message and it will open in your email client addressed to the team.</p>
        <p><b>Email:</b> <a href="mailto:${esc(P.email)}">${esc(P.email)}</a><br><b>Institute:</b> ${esc(P.institute)}</p></div>
      <form class="card contact reveal" id="contactForm">
        <label>Name<input name="name" required autocomplete="name"></label>
        <label>Email<input name="email" type="email" required autocomplete="email"></label>
        <label>Message<textarea name="message" required></textarea></label>
        <button class="btn btn-primary" type="submit">Send message</button>
      </form></div></section>`;
  };

  /* ---------------- Behaviours ---------------- */
  function initComponentsTabs() {
    const tabs = document.querySelectorAll("[data-tab]");
    if (!tabs.length) return;
    const show = (id, push) => {
      if (!compById(id)) id = "c1";
      tabs.forEach((t) => { const on = t.dataset.tab === id; t.classList.toggle("active", on); t.setAttribute("aria-selected", on); });
      document.querySelectorAll(".panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + id));
      if (push) history.replaceState(null, "", "#" + id);
    };
    tabs.forEach((t) => t.addEventListener("click", () => { show(t.dataset.tab, true); window.scrollTo({ top: 0, behavior: "smooth" }); }));
    window.addEventListener("hashchange", () => show(location.hash.slice(1)));
    show(location.hash.slice(1));
  }
  function initScrollSpy() {
    const links = document.querySelectorAll("[data-spy]");
    if (!links.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) links.forEach((l) => l.classList.toggle("active", l.dataset.spy === e.target.id));
    }), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((l) => { const s = document.getElementById(l.dataset.spy); if (s) io.observe(s); });
  }
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }
  function initDocSearch() {
    const q = document.getElementById("docSearch");
    if (!q) return;
    q.addEventListener("input", () => {
      const v = q.value.trim().toLowerCase(); let any = false;
      document.querySelectorAll(".doc").forEach((d) => { const m = d.dataset.name.includes(v); d.style.display = m ? "" : "none"; any = any || m; });
      document.querySelectorAll(".doc-cat").forEach((c) => { c.style.display = [...c.querySelectorAll(".doc")].some((d) => d.style.display !== "none") ? "" : "none"; });
      document.getElementById("noDocs").hidden = any;
    });
  }
  function initContact() {
    const f = document.getElementById("contactForm");
    if (!f) return;
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(f);
      const subject = encodeURIComponent(`[${P.id}] Website enquiry from ${d.get("name")}`);
      const body = encodeURIComponent(`${d.get("message")}\n\n— ${d.get("name")} (${d.get("email")})`);
      location.href = `mailto:${P.email}?subject=${subject}&body=${body}`;
    });
  }
  function initNetwork() {
    const cv = document.getElementById("net");
    if (!cv || !cv.getContext) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W, H, pts = [];
    const resize = () => {
      const r = window.devicePixelRatio || 1; W = cv.offsetWidth; H = cv.offsetHeight;
      cv.width = W * r; cv.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0);
      const n = Math.min(70, Math.floor(W * H / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        if (!reduce) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > W) a.vx *= -1; if (a.y < 0 || a.y > H) a.vy *= -1; }
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) { ctx.strokeStyle = `rgba(160,165,255,${(1 - d / 130) * .45})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
        ctx.fillStyle = "rgba(210,212,255,.85)"; ctx.beginPath(); ctx.arc(a.x, a.y, 2, 0, Math.PI * 2); ctx.fill();
      }
      if (!reduce) requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", () => { resize(); if (reduce) draw(); });
  }

  /* ---------------- Boot ---------------- */
  document.title = (NAV.find((n) => n.key === page)?.label || "Home") + " | " + P.team + " — " + P.id;
  document.body.insertAdjacentHTML("afterbegin", header());
  const main = document.getElementById("main");
  main.innerHTML = (pages[page] || pages.home)();
  document.body.insertAdjacentHTML("beforeend", footer());

  applyTheme(savedTheme);
  document.getElementById("themeBtn").addEventListener("click", () => {
    const t = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(t); store.set("theme", t);
  });
  const menuBtn = document.getElementById("menuBtn"), links = document.getElementById("navLinks");
  menuBtn.addEventListener("click", () => links.classList.toggle("open"));

  initComponentsTabs(); initScrollSpy(); initReveal(); initDocSearch(); initContact(); initNetwork();
})();
