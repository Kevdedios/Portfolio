(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = SITE.initials || SITE.name.split(/\s+/).filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  // Page title + logo
  document.title = SITE.name + " — Portfolio";
  $("logo").textContent = initials;

  // Hero
  $("h-role").textContent = SITE.role;
  $("h-name").textContent = SITE.name;
  $("h-tag").textContent = SITE.tagline;
  $("h-loc").textContent = SITE.location;
  $("h-initials").textContent = initials;
  const img = $("h-photo");
  img.src = SITE.photo;
  img.onerror = () => img.parentElement.classList.add("noimg");
  if (SITE.resumeLink) $("h-resume").href = SITE.resumeLink; else $("h-resume").remove();

  // About
  $("about-text").innerHTML = SITE.about.map((p) => `<p>${esc(p)}</p>`).join("");
  $("stats").innerHTML = SITE.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("");
  $("skills").innerHTML = SITE.skills.map((s) => `<span class="chip">${esc(s)}</span>`).join("");

  // Timelines
  const tl = (items, a, b) =>
    items.map((i) => `
      <div class="t-item reveal">
        <div class="t-period">${esc(i.period)}</div>
        <h3>${esc(i[a])}</h3>
        <div class="t-sub">${esc(i[b])}</div>
        <ul>${(i.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>`).join("");
  $("exp").innerHTML = tl(SITE.experience, "role", "company");
  $("edu").innerHTML = tl(SITE.education, "degree", "school");

  // Works
  const cats = ["All", ...new Set(SITE.projects.map((p) => p.category).filter(Boolean))];
  $("filters").innerHTML = cats.map((c, i) => `<button class="filter${i ? "" : " on"}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  function drawCards(cat) {
    const list = SITE.projects.filter((p) => cat === "All" || p.category === cat);
    $("cards").innerHTML = list.map((p) => `
      <article class="card reveal in">
        <div class="thumb">${p.image ? `<img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy">` : esc(p.title.replace(/^Sample Project:\s*/, "")[0] || "•")}</div>
        <div class="c-body">
          <span class="c-date">${esc(p.date || "")}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <div class="tags">${(p.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
          <div class="links">
            ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live ↗</a>` : ""}
            ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">Code ↗</a>` : ""}
          </div>
        </div>
      </article>`).join("");
  }
  drawCards("All");
  $("filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    document.querySelectorAll(".filter").forEach((x) => x.classList.remove("on"));
    b.classList.add("on");
    drawCards(b.dataset.c);
  });

  // Contact
  $("c-mail").href = "mailto:" + SITE.email;
  $("c-mail").textContent = SITE.email;
  $("socials").innerHTML = SITE.socials.map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a>`).join("");
  $("f-copy").textContent = "© " + new Date().getFullYear() + " " + SITE.name;

  $("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target, f = form.elements, st = $("status");
    if (f._gotcha.value) return; // spam trap
    if (!f.name.value.trim() || !f.email.validity.valid || !f.message.value.trim()) {
      st.textContent = "Please fill in all fields with a valid email.";
      return;
    }
    if (SITE.formEndpoint) {
      st.textContent = "Sending…";
      try {
        const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
        if (!r.ok) throw 0;
        st.textContent = "Thank you! Your message was sent.";
        form.reset();
      } catch (_) {
        st.textContent = "Something went wrong. Please email me directly.";
      }
    } else {
      const body = encodeURIComponent(f.message.value + "\n\n— " + f.name.value + " (" + f.email.value + ")");
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Portfolio message from " + f.name.value)}&body=${body}`;
      st.textContent = "Opening your email app…";
    }
  });

  // Nav behaviour
  const nav = $("nav"), menu = $("menu"), burger = $("burger");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 30), { passive: true });
  burger.addEventListener("click", () => { menu.classList.toggle("open"); burger.classList.toggle("open"); });
  menu.addEventListener("click", (e) => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.classList.remove("open"); } });

  // Scroll reveal
  const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
