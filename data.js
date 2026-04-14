// ============================================================
//  data.js  —  창원경일고 진로진학 통합 허브 카드 데이터
//
//  ★ 새 자료를 추가할 때는 이 파일만 수정하면 됩니다.
//  ★ 각 항목(객체)을 복사해서 아래에 붙여넣고 내용만 바꾸세요.
// ============================================================

const SECTIONS = {
  "career-data": {
    label: "📊 진로·취업 데이터",
    desc: "진로 탐색 및 학과 선택을 위한 통계 자료"
  },
  "curriculum": {
    label: "📚 교육과정·배치표",
    desc: "교육과정 편제, 학급 배치 등 학교 운영 자료"
  },
  "admission": {
    label: "🎓 수시 입시 탐색",
    desc: "학년별 수시 전략 탐색 및 진학 상담 자료"
  },
  "ai-tools": {
    label: "🤖 AI 도우미",
    desc: "탐구·세특·면접 등 학습 전반을 지원하는 AI 도구"
  }
  "personal": {
    label: "🔒 개인",
    desc: "개인 전용 자료 (외부 공개 비권장)"
  }
};

const resources = [

  // ────────────────────────────────────────────────────────
  //  섹션 1. 진로·취업 데이터
  // ────────────────────────────────────────────────────────
  {
    id: "job-rate",
    title: "취업 유지취업률 현황",
    section: "career-data",
    description: "2020~2024 대학교 졸업생 취업 및 유지취업률 통계 검색 자료",
    targets: ["학생", "학부모", "교사"],
    grades: ["2학년", "3학년"],
    tags: ["취업률", "진로탐색", "데이터", "학과선택"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "바로가기", url: "https://mathlhk15-glitch.github.io/job/", platform: "html" }
    ]
  },

  // ────────────────────────────────────────────────────────
  //  섹션 2. 교육과정·배치표
  // ────────────────────────────────────────────────────────
  {
    id: "curriculum-2026",
    title: "2026 교육과정 편제표",
    section: "curriculum",
    description: "2026학년도 교육과정 편제 및 1학년 과목 선택 안내 자료",
    targets: ["학생", "학부모", "교사"],
    grades: ["1학년"],
    tags: ["교육과정", "과목선택", "편제표"],
    featured: true,
    isNew: false,
    updatedAt: "2026-03",
    links: [
      { label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-1-choice/", platform: "html" }
    ]
  },
  {
    id: "bachi-2026-03",
    title: "2026 3월 배치표",
    section: "curriculum",
    description: "2026년 3월 학급별 학생 배치 현황 자료",
    targets: ["학생", "학부모", "교사"],
    grades: ["1학년", "2학년", "3학년"],
    tags: ["배치표", "학급"],
    featured: true,
    isNew: false,
    updatedAt: "2026-03",
    links: [
      { label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-3-bachi/", platform: "html" }
    ]
  },

  // ────────────────────────────────────────────────────────
  //  섹션 3. 수시 입시 탐색
  // ────────────────────────────────────────────────────────
  {
    id: "ipsi-3rd",
    title: "2026 3학년 수시 배치표",
    section: "admission",
    description: "3학년 수시 지원 가능권을 빠르게 탐색할 수 있는 진학 상담용 자료. 교과전형 컷오프 포함",
    targets: ["학생", "학부모", "교사"],
    grades: ["3학년"],
    tags: ["수시", "교과전형", "입시", "배치표"],
    featured: true,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi/", platform: "html" }
    ]
  },
  {
    id: "ipsi-1-2nd",
    title: "2026 1·2학년 수시 배치표",
    section: "admission",
    description: "2028 입시 기준으로 1·2학년 수시 전략을 탐색하는 자료",
    targets: ["학생", "학부모", "교사"],
    grades: ["1학년", "2학년"],
    tags: ["수시", "2028입시", "입시", "배치표"],
    featured: true,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "바로가기", url: "https://mathlhk15-glitch.github.io/2028ipsi/", platform: "html" }
    ]
  },

  // ────────────────────────────────────────────────────────
  //  섹션 4. AI 도우미
  // ────────────────────────────────────────────────────────
  {
    id: "question-helper",
    title: "수업 후 질문·탐구 주제 도우미",
    section: "ai-tools",
    description: "수업 이후 질문 확장과 탐구 주제 발굴을 돕는 AI 도구. GPT와 Gemini 모두 제공",
    targets: ["학생", "교사"],
    grades: ["1학년", "2학년", "3학년"],
    tags: ["탐구", "질문", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기", url: "https://chatgpt.com/g/g-69d4bd3bbe808191924ff384d664273b-cangweongyeongilgo-jilmun-tamgu-juje-doumi", platform: "gpt" },
      { label: "Gemini로 열기", url: "https://gemini.google.com/gem/1QPoxJSX7herq_XQoZ_1pIdmo7ZuPkq5j?usp=sharing", platform: "gemini" }
    ]
  },
  {
    id: "interview-helper",
    title: "생기부 기반 면접 자료 생성",
    section: "ai-tools",
    description: "학생부 내용을 바탕으로 예상 질문과 답변 방향을 정리하는 AI 도구",
    targets: ["학생", "교사"],
    grades: ["3학년"],
    tags: ["면접", "생기부", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기", url: "https://chatgpt.com/g/g-69dc98128764819197bf1ddbc92b4e47-saenggibu-giban-myeonjeob-jaryo-saengseong", platform: "gpt" },
      { label: "Gemini로 열기", url: "https://gemini.google.com/gem/1GMiZ4pV5Rbmoc2s3puoYkJiI_OT53bRh?usp=sharing", platform: "gemini" }
    ]
  },
  {
    id: "news-inquiry",
    title: "오늘의 뉴스로 탐구활동 만들기",
    section: "ai-tools",
    description: "시사 뉴스를 기반으로 수업 연계 탐구활동지를 자동 생성하는 AI 도구",
    targets: ["학생", "교사"],
    grades: ["1학년", "2학년", "3학년"],
    tags: ["탐구", "뉴스", "활동지", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기", url: "https://chatgpt.com/g/g-6982a6ea81fc8191b3e8975858800ba6-sinmungisaro-tamguhwaldong-saengseong", platform: "gpt" }
    ]
  },
  {
    id: "seteuk-edit",
    title: "세특 내용 수정·보완",
    section: "ai-tools",
    description: "작성된 세특 초안의 표현과 내용을 SKY 평가 기준에 맞게 개선하는 AI 도구",
    targets: ["교사"],
    grades: ["1학년", "2학년", "3학년"],
    tags: ["세특", "수정", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기", url: "https://chatgpt.com/g/g-69829666a7d48191986da33a1e64b293-seteug-naeyong-sujeong-bowan", platform: "gpt" }
    ]
  },
  {
    id: "seteuk-gen",
    title: "탐구활동지로 세특 생성",
    section: "ai-tools",
    description: "학생의 탐구 결과물을 입력하면 세특 초안을 자동 작성해 주는 AI 도구",
    targets: ["교사"],
    grades: ["1학년", "2학년", "3학년"],
    tags: ["세특", "생성", "탐구", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기", url: "https://chatgpt.com/g/g-6982925ee34881919b46f80dedfc8b02-seteug-saengseong", platform: "gpt" }
    ]
  },   // ← 쉼표 필수

  // ────────────────────────────────────────────────────────
  //  섹션 5. 개인 (비공개 · 개인 전용)
  // ────────────────────────────────────────────────────────
  {
    id: "family-portfolio",
    title: "이현규 패밀리 오피스",
    section: "personal",
    description: "가족 주식 포트폴리오 대시보드. 종목별 평가금액·수익률·리스크 게이지·투자 원칙·시뮬레이션 통합 관리",
    targets: ["개인"],
    grades: [],
    tags: ["포트폴리오", "주식", "투자", "가족"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "대시보드 열기", url: "portfolio.html", platform: "html" }
    ]
  }

  // ────────────────────────────────────────────────────────
  //  ★ 새 자료를 추가하려면 아래에 붙여넣으세요 ★
  //  위의 항목을 통째로 복사해서 id, title 등 내용만 바꾸면 됩니다.
  // ────────────────────────────────────────────────────────

];
