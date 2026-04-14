const PLATFORM_CONFIG = {
  html:   { label: "HTML",   icon: "🌐", cls: "badge-html" },
  gpt:    { label: "GPTs",   icon: "✦",  cls: "badge-gpt" },
  gemini: { label: "Gemini", icon: "◈",  cls: "badge-gemini" },
  claude: { label: "Claude", icon: "◆",  cls: "badge-claude" },
};

const CARD_ICON = {
  "job-rate":         "📊", "curriculum-2026":  "📋",
  "bachi-2026-03":    "🗂️", "ipsi-3rd":         "🔍",
  "ipsi-1-2nd":       "🔍", "question-helper":  "💬",
  "interview-helper": "🎤", "news-inquiry":     "📰",
  "seteuk-edit":      "✏️", "seteuk-gen":       "⚡",
  "family-portfolio": "📈",
};

let currentSection = "all";
let currentSearch  = "";

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function buildCard(item) {
  const icon = CARD_ICON[item.id] || "📄";
  const isPersonal = item.section === "personal";

  const badges = [...new Set(item.links.map(l => l.platform))].map(p => {
    const cfg = PLATFORM_CONFIG[p] || { label: p, icon: "🔗", cls: "" };
    return `<span class="platform-badge ${cfg.cls}">${cfg.icon} ${cfg.label}</span>`;
  }).join("");

  const tags = item.tags.map(t => `<span class="tag">${t}</span>`).join("");

  const btns = item.links.map(link =>
    `<button class="link-btn" onclick="openLink('${link.url}')">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
        <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
      </svg>
      ${link.label}
    </button>`
  ).join("");

  const newBadge = item.isNew ? `<span class="new-badge">NEW</span>` : "";

  return `<div class="card${isPersonal ? ' card-personal' : ''}">
    ${newBadge}
    <div class="card-top">
      <span class="card-icon">${icon}</span>
      <div>
        <div class="card-title">${item.title}</div>
        <div class="card-tags" style="margin-top:5px">${badges}</div>
      </div>
    </div>
    <p class="card-desc">${item.description}</p>
    <div class="card-tags">${tags}</div>
    <div class="card-links">${btns}</div>
    <div class="updated-at">최종 업데이트 ${item.updatedAt}</div>
  </div>`;
}

function buildQuickCard(item) {
  const icon = CARD_ICON[item.id] || "📄";
  return `<div class="quick-card" onclick="openLink('${item.links[0].url}')">
    <span class="quick-card-icon">${icon}</span>
    <div class="quick-card-text">
      <div class="quick-card-title">${item.title}</div>
      <div class="quick-card-sub">바로 열기 ↗</div>
    </div>
  </div>`;
}

function render() {
  // 퀵 액세스
  document.getElementById("quickGrid").innerHTML =
    resources.filter(r => r.featured).map(buildQuickCard).join("");

  const container = document.getElementById("sectionsContainer");
  container.innerHTML = "";
  let anyVisible = false;

  const ORDER = ["admission", "curriculum", "ai-tools", "career-data", "personal"];

  ORDER.forEach(key => {
    if (key === "personal" && currentSection === "all") return;
    if (currentSection !== "all" && currentSection !== key)  return;

    const q = currentSearch.toLowerCase();
    const items = resources.filter(item => {
      if (item.section !== key) return false;
      if (!q) return true;
      return item.title.toLowerCase().includes(q) ||
             item.description.toLowerCase().includes(q) ||
             item.tags.some(t => t.toLowerCase().includes(q));
    });

    if (!items.length) return;
    anyVisible = true;

    const sec = document.createElement("div");
    sec.innerHTML = `
      <div class="section-header">
        <div class="section-title">${SECTIONS[key].label}</div>
        <div class="section-desc">${SECTIONS[key].desc}</div>
      </div>
      <div class="card-grid">${items.map(buildCard).join("")}</div>`;
    container.appendChild(sec);
  });

  document.getElementById("noResult").classList.toggle("show", !anyVisible);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("input", e => {
    currentSearch = e.target.value.trim();
    render();
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;

      if (target === "personal") {
        // 이미 인증된 경우 바로 이동
        if (sessionStorage.getItem("hub-auth") === "ok") {
          setActive(btn); currentSection = "personal"; render(); return;
        }
        // 비밀번호 모달 표시
        document.getElementById("pw-modal").style.display = "flex";
        document.getElementById("pw-input").value = "";
        document.getElementById("pw-error").style.display = "none";
        setTimeout(() => document.getElementById("pw-input").focus(), 50);
        return;
      }

      setActive(btn);
      currentSection = target;
      render();
    });
  });

  function setActive(btn) {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  // 비밀번호 확인
  window.confirmPw = function() {
    const val = document.getElementById("pw-input").value;
    if (val === "1215") {
      sessionStorage.setItem("hub-auth", "ok");
      document.getElementById("pw-modal").style.display = "none";
      const personalBtn = document.querySelector('[data-section="personal"]');
      setActive(personalBtn);
      currentSection = "personal";
      render();
    } else {
      document.getElementById("pw-error").style.display = "block";
      document.getElementById("pw-input").value = "";
      document.getElementById("pw-input").focus();
    }
  };

  window.closePwModal = function() {
    document.getElementById("pw-modal").style.display = "none";
  };

  // 엔터키 지원
  document.getElementById("pw-input").addEventListener("keydown", e => {
    if (e.key === "Enter") window.confirmPw();
    if (e.key === "Escape") window.closePwModal();
  });

  // 마지막 업데이트
  const latest = resources.map(r => r.updatedAt).sort().reverse()[0];
  if (latest) document.getElementById("lastUpdated").textContent = `마지막 업데이트 ${latest}`;

  render();
});
