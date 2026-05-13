/* =====================================================
   창원경일고 진로진학 상담 워크스테이션
   nav.js — 공통 네비게이션 자동 삽입 스크립트

   사용법:
     1. <head>에 common.css 링크
     2. </body> 직전에 이 파일 script 태그로 삽입
     3. <body>에 data-ws-page="현재페이지키" 속성 추가
        (home | counseling | susi | gumsa | archive | settings | personal)
   ===================================================== */

(function () {
  'use strict';

  const MENU = [
    { key: 'home',       icon: '🏠',  label: '홈',       url: 'https://mathlhk15-glitch.github.io/lhk15/',               newTab: false },
    { key: 'gumsa',      icon: '📊',  label: '검사결과', url: 'https://mathlhk15-glitch.github.io/2026gumsa-R/',          newTab: true  },
    { key: 'susi',       icon: '📋',  label: '생기부분석',url: 'https://mathlhk15-glitch.github.io/susi/',                newTab: true  },
    { key: 'counseling', icon: '💬',  label: '상담관리', url: 'https://mathlhk15-glitch.github.io/jinlosangdam/',         newTab: true  },
    { key: 'report',     icon: '🧾',  label: '통합리포트',url: 'https://mathlhk15-glitch.github.io/lhk15/report.html',   newTab: false },
    { key: 'archive',    icon: '📚',  label: '자료실',   url: 'https://mathlhk15-glitch.github.io/lhk15/#archive',       newTab: false },
    { key: 'settings',   icon: '⚙️', label: '설정',     url: 'https://mathlhk15-glitch.github.io/lhk15/#settings',      newTab: false },
    { key: 'personal',   icon: '🔐',  label: '개인 공간',url: 'https://mathlhk15-glitch.github.io/lhk15/personal.html',  newTab: false },
  ];

  function getCurrentPage() {
    return document.body.getAttribute('data-ws-page') || 'home';
  }

  function buildMenuItems(mobile = false) {
    const currentPage = getCurrentPage();
    return MENU.map((item) => {
      const cls    = mobile ? 'ws-nav__mobile-item' : 'ws-nav__item';
      const active = item.key === currentPage ? ' active' : '';
      const target = item.newTab ? ' target="_blank" rel="noopener"' : '';
      return `<a class="${cls}${active}" href="${item.url}"${target}>
        <span class="ws-nav__item-icon">${item.icon}</span>${item.label}
      </a>`;
    }).join('');
  }

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
        <button class="ws-nav__hamburger" aria-label="메뉴 열기" onclick="window.__wsToggleMobile()">☰</button>
      </div>
    </nav>
    <div class="ws-nav__mobile-menu" id="wsMobileMenu">
      ${buildMenuItems(true)}
    </div>`;
  }

  function buildFooter() {
    const year = new Date().getFullYear();
    return `
    <footer class="ws-footer">
      <strong>창원경일고등학교 진로진학상담부</strong><br>
      진로진학 상담 워크스테이션 · ${year}
    </footer>`;
  }

  window.__wsToggleMobile = function () {
    const menu = document.getElementById('wsMobileMenu');
    if (menu) menu.classList.toggle('open');
  };

  document.addEventListener('click', function (e) {
    const mobileMenu = document.getElementById('wsMobileMenu');
    if (!mobileMenu) return;
    if (!mobileMenu.contains(e.target) && !e.target.closest('.ws-nav__hamburger')) {
      mobileMenu.classList.remove('open');
    }
  });

  function inject() {
    const navWrapper = document.createElement('div');
    navWrapper.innerHTML = buildNav();
    document.body.insertBefore(navWrapper, document.body.firstChild);

    if (!document.querySelector('.ws-footer')) {
      const footerWrapper = document.createElement('div');
      footerWrapper.innerHTML = buildFooter();
      document.body.appendChild(footerWrapper);
    }

    document.body.style.paddingTop = 'var(--nav-height, 56px)';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();
