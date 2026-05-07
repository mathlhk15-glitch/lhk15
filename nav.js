/* =====================================================
   창원경일고 진로진학 상담 워크스테이션
   nav.js — 공통 네비게이션 자동 삽입 스크립트
   PHASE 1 산출물

   사용법:
     1. <head>에 common.css 링크
     2. </body> 직전에 이 파일 script 태그로 삽입
     3. <body>에 data-ws-page="현재페이지키" 속성 추가
        (home | counseling | susi | gumsa | archive | settings)

   예시:
     <body data-ws-page="home">
     <script src="../lhk15/nav.js"></script>
   ===================================================== */

(function () {
  'use strict';

  /* ── 메뉴 항목 정의 ── */
  const MENU = [
    {
      key: 'home',
      icon: '🏠',
      label: '홈',
      url: 'https://mathlhk15-glitch.github.io/lhk15/',
      newTab: false,
    },
    {
      key: 'gumsa',
      icon: '📊',
      label: '검사결과',
      url: 'https://mathlhk15-glitch.github.io/2026gumsa-R/',
      newTab: true,
    },
    {
      key: 'susi',
      icon: '📋',
      label: '생기부분석',
      url: 'https://mathlhk15-glitch.github.io/susi/',
      newTab: true,
    },
    {
      key: 'counseling',
      icon: '💬',
      label: '상담관리',
      url: 'https://mathlhk15-glitch.github.io/lhk15/진로상담시스템.html',
      newTab: false,
    },
    {
      key: 'report',
      icon: '🧾',
      label: '통합리포트',
      url: 'https://mathlhk15-glitch.github.io/lhk15/report.html',
      newTab: false,
    },
    {
      key: 'report',
      icon: '🧾',
      label: '통합리포트',
      url: 'https://mathlhk15-glitch.github.io/lhk15/report.html',
      newTab: false,
    },
    {
      key: 'archive',
      icon: '📚',
      label: '자료실',
      url: 'https://mathlhk15-glitch.github.io/lhk15/#archive',
      newTab: false,
    },
    {
      key: 'settings',
      icon: '⚙️',
      label: '설정',
      url: 'https://mathlhk15-glitch.github.io/lhk15/#settings',
      newTab: false,
    },
  ];

  /* ── 현재 페이지 키 감지 ── */
  function getCurrentPage() {
    return document.body.getAttribute('data-ws-page') || 'home';
  }

  /* ── 관리자 상태 확인 ── */
  function isAdmin() {
    return sessionStorage.getItem('ws_admin') === 'true';
  }

  /* ── 관리자 로그인 (비밀번호 확인) ── */
  const ADMIN_PW = 'ruddlf';
  function toggleAdmin() {
    if (isAdmin()) {
      sessionStorage.removeItem('ws_admin');
      renderAdminBadge();
      return;
    }
    const pw = prompt('관리자 비밀번호를 입력하세요:');
    if (pw === ADMIN_PW) {
      sessionStorage.setItem('ws_admin', 'true');
      renderAdminBadge();
      alert('✅ 관리자 모드 활성화');
    } else if (pw !== null) {
      alert('❌ 비밀번호가 틀렸습니다.');
    }
  }

  function renderAdminBadge() {
    const badge = document.querySelector('.ws-nav__admin-badge');
    if (!badge) return;
    if (isAdmin()) {
      badge.classList.add('visible');
    } else {
      badge.classList.remove('visible');
    }
  }

  /* ── 메뉴 아이템 HTML 생성 ── */
  function buildMenuItems(mobile = false) {
    const currentPage = getCurrentPage();
    return MENU.map((item) => {
      const cls = mobile ? 'ws-nav__mobile-item' : 'ws-nav__item';
      const active = item.key === currentPage ? ' active' : '';
      const target = item.newTab ? ' target="_blank" rel="noopener"' : '';
      return `<a class="${cls}${active}" href="${item.url}"${target}>
        <span class="ws-nav__item-icon">${item.icon}</span>${item.label}
      </a>`;
    }).join('');
  }

  /* ── 네비게이션 HTML 구조 생성 ── */
  function buildNav() {
    return `
    <nav class="ws-nav" role="navigation" aria-label="워크스테이션 메뉴">
      <a class="ws-nav__logo" href="https://mathlhk15-glitch.github.io/lhk15/">
        <span class="ws-nav__logo-icon">🎓</span>
        <span>진로진학 워크스테이션</span>
      </a>
      <div class="ws-nav__menu">
        ${buildMenuItems(false)}
      </div>
      <div class="ws-nav__right">
        <span class="ws-nav__admin-badge${isAdmin() ? ' visible' : ''}">
          🔑 관리자
        </span>
        <button class="ws-nav__item ws-nav__item--admin"
                onclick="window.__wsToggleAdmin()"
                title="${isAdmin() ? '관리자 모드 해제' : '관리자 로그인'}"
                style="font-size:18px; padding:4px 8px;">
          ${isAdmin() ? '🔓' : '🔒'}
        </button>
        <button class="ws-nav__hamburger" aria-label="메뉴 열기" onclick="window.__wsToggleMobile()">
          ☰
        </button>
      </div>
    </nav>

    <div class="ws-nav__mobile-menu" id="wsMobileMenu">
      ${buildMenuItems(true)}
      <div style="padding: 12px 24px; border-top: 1px solid rgba(255,255,255,0.1); margin-top:8px;">
        <button onclick="window.__wsToggleAdmin()"
                style="background:none;border:none;color:rgba(255,255,255,0.7);cursor:pointer;font-size:13px;">
          ${isAdmin() ? '🔓 관리자 모드 해제' : '🔒 관리자 로그인'}
        </button>
      </div>
    </div>`;
  }

  /* ── 공통 푸터 HTML ── */
  function buildFooter() {
    const year = new Date().getFullYear();
    return `
    <footer class="ws-footer">
      <strong>창원경일고등학교 진로진학상담부</strong><br>
      진로진학 상담 워크스테이션 · ${year}
    </footer>`;
  }

  /* ── 모바일 메뉴 토글 ── */
  window.__wsToggleMobile = function () {
    const menu = document.getElementById('wsMobileMenu');
    if (menu) menu.classList.toggle('open');
  };

  /* ── 관리자 토글 (전역) ── */
  window.__wsToggleAdmin = function () {
    toggleAdmin();
    // 아이콘 및 배지 즉시 갱신
    const btn = document.querySelector('.ws-nav__item--admin');
    if (btn) btn.textContent = isAdmin() ? '🔓' : '🔒';
    renderAdminBadge();
    // 관리자 변경 이벤트 발행 (각 페이지에서 필요 시 수신)
    document.dispatchEvent(new CustomEvent('ws:adminChanged', { detail: { isAdmin: isAdmin() } }));
  };

  /* ── 외부 링크 클릭 시 모바일 메뉴 닫기 ── */
  document.addEventListener('click', function (e) {
    const mobileMenu = document.getElementById('wsMobileMenu');
    if (!mobileMenu) return;
    if (!mobileMenu.contains(e.target) && !e.target.closest('.ws-nav__hamburger')) {
      mobileMenu.classList.remove('open');
    }
  });

  /* ── DOM에 삽입 ── */
  function inject() {
    // 1) 네비게이션 — body 최상단
    const navWrapper = document.createElement('div');
    navWrapper.innerHTML = buildNav();
    document.body.insertBefore(navWrapper, document.body.firstChild);

    // 2) 푸터 — body 최하단 (이미 있으면 건너뜀)
    if (!document.querySelector('.ws-footer')) {
      const footerWrapper = document.createElement('div');
      footerWrapper.innerHTML = buildFooter();
      document.body.appendChild(footerWrapper);
    }

    // body에 기본 패딩 보정
    document.body.style.paddingTop = 'var(--nav-height, 56px)';
  }

  /* ── 실행 ── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
