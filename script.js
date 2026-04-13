// ============================================================
//  script.js  —  창원경일고 진로진학 통합 허브
//  카드 렌더링 · 검색 · 필터 담당
//  ※ 이 파일은 수정할 필요가 없습니다.
// ============================================================

// 플랫폼별 아이콘 & 라벨
const PLATFORM_CONFIG = {
  html:    { label: "HTML",    icon: "🌐", badgeClass: "badge-html" },
  gpt:     { label: "GPTs",    icon: "✦",  badgeClass: "badge-gpt" },
  gemini:  { label: "Gemini",  icon: "◈",  badgeClass: "badge-gemini" },
  claude:  { label: "Claude",  icon: "◆",  badgeClass: "badge-claude" },
};

// 섹션별 대표 아이콘
const SECTION_ICON = {
  "career-data": "📈",
  "curriculum":  "📋",
  "admission":   "🎓",
  "ai-tools":    "🤖",
};

// 카드 아이콘 매핑 (id 기반)
const CARD_ICON = {
  "job-rate":        "📊",
  "curriculum-2026": "📋",
  "bachi-2026-03":   "🗂️",
  "ipsi-3rd":        "🔍",
  "ipsi-1-2nd":      "🔍",
  "question-helper": "💬",
  "interview-helper":"🎤",
  "news-inquiry":    "📰",
  "seteuk-edit":     "✏️",
  "seteuk-gen":      "⚡",
};

// ── 현재 필터 상태 ─────────────────────────────────────────
let currentSection = "all";
let currentSearch  = "";

// ── 외부 링크 열기 ─────────────────────────────────────────
function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

// ── 카드 HTML 생성 ─────────────────────────────────────────
function buildCard(item) {
  const icon = CARD_ICON[item.id] || "📄";

  // 플랫폼 배지
  const platforms = [...new Set(item.links.map(l => l.platform))];
  const badgesHTML = platforms.map(p => {
    const cfg = PLATFORM_CONFIG[p] || { label: p, icon: "🔗", badgeClass: "" };
    return `<span class="platform-badge ${cfg.badgeClass}">${cfg.icon} ${cfg.label}</span>`;
  }).join("");

  // 태그
  const tagsHTML = item.tags.map(t => `<span class="tag">${t}</span>`).join("");
  const gradesHTML = item.grades.map(g => `<span class="tag tag-grade">${g}</span>`).join("");

  // 링크 버튼
  const btnsHTML = item.links.map(link => {
    const cfg = PLATFORM_CONFIG[link.platform] || { icon: "🔗" };
    return `<button class="link-btn" onclick="openLink('${link.url}')">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      ${link.label}
    </button>`;
  }).join("");

  const newBadge = item.isNew ? `<span class="new-badge">NEW</span>` : "";

  return `
    <div class="card" data-section="${item.section}" data-id="${item.id}">
      ${newBadge}
      <div class="card-top">
        <span class="card-icon">${icon}</span>
        <div>
          <div class="card-title">${item.title}</div>
          <div class="card-tags" style="margin-top:5px">${badgesHTML}</div>
        </div>
      </div>
      <p class="card-desc">${item.description}</p>
      <div class="card-tags">${tagsHTML}${gradesHTML}</div>
      <div class="card-links">${btnsHTML}</div>
      <div class="updated-at">최종 업데이트 ${item.updatedAt}</div>
    </div>`;
}

// ── 퀵 액세스 카드 생성 ────────────────────────────────────
function buildQuickCard(item) {
  const icon = CARD_ICON[item.id] || "📄";
  const firstLink = item.links[0];
  return `
    <div class="quick-card" onclick="openLink('${firstLink.url}')">
      <span class="quick-card-icon">${icon}</span>
      <div class="quick-card-text">
        <div class="quick-card-title">${item.title}</div>
        <div class="quick-card-sub">바로 열기 ↗</div>
      </div>
    </div>`;
}

// ── 전체 렌더링 ────────────────────────────────────────────
function render() {
  // 퀵 액세스
  const quickItems = resources.filter(r => r.featured);
  document.getElementById("quickGrid").innerHTML =
    quickItems.map(buildQuickCard).join("");

  // 섹션별 렌더링
  const sectionOrder = ["admission", "curriculum", "ai-tools", "career-data"];
  const sectionsContainer = document.getElementById("sectionsContainer");
  sectionsContainer.innerHTML = "";

  let anyVisible = false;

  sectionOrder.forEach(sectionKey => {
    if (currentSection !== "all" && currentSection !== sectionKey) return;

    const items = resources.filter(item => {
      if (item.section !== sectionKey) return false;
      if (!currentSearch) return true;
      const q = currentSearch.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.tags.some(t => t.toLowerCase().includes(q))
      );
    });

    if (items.length === 0) return;
    anyVisible = true;

    const sectionInfo = SECTIONS[sectionKey];
    const sectionEl = document.createElement("div");
    sectionEl.innerHTML = `
      <div class="section-header">
        <div class="section-title">${sectionInfo.label}</div>
        <div class="section-desc">${sectionInfo.desc}</div>
      </div>
      <div class="card-grid">${items.map(buildCard).join("")}</div>`;
    sectionsContainer.appendChild(sectionEl);
  });

  const noResult = document.getElementById("noResult");
  noResult.classList.toggle("show", !anyVisible);
}

// ── 마지막 업데이트 날짜 ───────────────────────────────────
function setLastUpdated() {
  const dates = resources.map(r => r.updatedAt).sort().reverse();
  if (dates.length > 0) {
    document.getElementById("lastUpdated").textContent =
      `마지막 업데이트 ${dates[0]}`;
  }
}

// ── 이벤트 연결 ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // 검색
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", e => {
    currentSearch = e.target.value.trim();
    render();
  });

  // 필터 버튼
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSection = btn.dataset.section;
      render();
    });
  });

  setLastUpdated();
  render();
});
