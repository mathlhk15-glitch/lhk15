const SECTIONS = {
  "admission":   { label: "🎓 수시 입시 탐색",    desc: "학년별 수시 전략 탐색 및 진학 상담 자료" },
  "curriculum":  { label: "📚 교육과정·배치표",    desc: "교육과정 편제, 학급 배치 등 학교 운영 자료" },
  "ai-tools":    { label: "🤖 AI 도우미",          desc: "탐구·세특·면접 등 학습 전반을 지원하는 AI 도구" },
  "career-data": { label: "📊 진로·취업 데이터",   desc: "진로 탐색 및 학과 선택을 위한 통계 자료" },
  "personal":    { label: "🔒 개인",               desc: "개인 전용 자료" }
};

// ★ 카드 추가/수정은 이 배열만 편집하세요
//    icon 은 이모지 하나, 없으면 "📄" 로 표시됩니다
const resources = [

  // ── 수시 입시 ──────────────────────────────────────────────
  {
    id: "ipsi-3rd",
    icon: "🐼",
    title: "입결 탐색 상담",
    section: "admission",
    description: "수시 입결, 진주동명고선생님 자료 혼합",
    tags: ["수시", "정시", "입결", "배치표"],
    featured: true,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi/", platform: "html" }]
  },
    {
    id: "college-admissions-2027-2028",
    icon: "🌳",
    title: "이동균선생님의 2027,8 주요대학, 메디컬계열 대입전형 정리",
    section: "admission",
    description: "2027,2028 주요대학 전형 정리",
    tags: ["2027", "2028", "대입", "전형정리"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/college-admissions-2027-2028/", platform: "html" }]
  },
    {
    id: "2028ipsi",
    icon: "🎯",
    title: "2027,2028 15개 대학 대입전형 한눈에 보기, 비교 정리",
    section: "admission",
    description: "2027,20288 15개 대학 대입전형 정리",
    tags: ["2027,8", "15개 대학", "전형 정리"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2028ipsi/", platform: "html" }]
  },  

    {
    id: "admission-guide-2028",
    icon: "🎯",
    title: "2027·2028 대입, 대학은 무엇을 보고 학생은 무엇을 준비해야 할까?",
    section: "admission",
    description: "2027,20288 주요대학 입학 관계자 간담회 내용 정리",
    tags: ["2027,8", "14개 대학", "간담회"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/lhk15/admission-guide-2028", platform: "html" }]
  },  
  
    {
  id: "2027-susi-counsel-hub",
  icon: "📚",
  title: "2027 수시 전형 탐색·상담 허브",
  section: "admission",
  description: "2027 수시",
  tags: ["2027", "수시", "탐색"],
  featured: false,
  isNew: true,
  updatedAt: "2026-06",
  links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/2027-susi-counsel-hub.html", platform: "html" }]
},
  {
    id: "ipsi-2027",
    icon: "🏥",
    title: "2027 대입 대학별 핵심 가이드",
    section: "admission",
    description: "2027 대입 대학별 핵심 가이드",
    tags: ["2027", "핵심 가이드"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/", platform: "html" }]
  },  
  {
  id: "suwan-korean-2027",
  icon: "🌱",
  title: "2027 수능완성 문학·독서 학습맵",
  section: "admission",
  description: "수능완성 문학·독서 63개 작품·지문 인터랙티브 학습맵. 입문 10선, 진로 연결, 오늘 하나만 읽기 등 루트 제공. 체크 기록 본인 기기 저장.",
  tags: ["수능완성", "국어", "문학", "독서", "2027"],
  featured: false,
  isNew: true,
  updatedAt: "2026-06",
  links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/suwan-korean-2027.html", platform: "html" }]
},
  {
  id: "science-univ-2027",
  icon: "📚",
  title: "2027 이공계 특성화대 6개교 입시 안내 ",
  section: "admission",
  description: "2027 이공계 특성화대 6개교 입시 안내",
  tags: ["2027", "이공계", "특셩화대"],
  featured: false,
  isNew: true,
  updatedAt: "2026-06",
  links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/science-univ-2027.html", platform: "html" }]
},
    {
    id: "2028nurse",
    icon: "🏥",
    title: "2028 간호학과 전형 검색",
    section: "admission",
    description: "2028 간호학과 전형 검색",
    tags: ["2028", "간호학과"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2028nurse/", platform: "html" }]
  },  
  {
    id: "gyeonggi-ipsi",
    icon: "🧭",
    title: "경기진협 자료",
    section: "admission",
    description: "경기진협에서 제공하는 대입정보 모음",
    tags: ["경기", "대입정보", "나침반", "입시"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://specialzoker.github.io/", platform: "html" }]
  },
  {
    id: "ipsi-9grade-calc",
    icon: "🧮",
    title: "중간고사 성적으로 9등급 환산",
    section: "admission",
    description: "중간고사 성적을 기준으로 9등급을 예상 환산해보는 도구",
    tags: ["수시", "내신", "등급환산", "중간고사"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "중간고사 성적으로 9등급 환산.html", platform: "html" }]
  },
      {
    id: "localdoctor",
    icon: "🦉",
    title: "지역의사제",
    section: "admission",
    description: "지역의사제",
    tags: ["지역", "의사"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/localdoctor", platform: "html" }]
  },
      {
    id: "esteacher",
    icon: "🐜",
    title: "대입정보를 정리한 진학정보실",
    section: "admission",
    description: "진학정보실",
    tags: ["진학", "정보실"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://jinhak.esteacher.kr/", platform: "html" }]
  },
        {
    id: "2027_essay",
    icon: "🐓",
    title: "김강석선생님의 2027 논술전형 정리",
    section: "admission",
    description: "2027 논술전형",
    tags: ["2027", "논술"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://kangseok15.github.io/2027_essay/", platform: "html" }]
  },
        {
    id: "2027-yaksul-nonsul",
    icon: "🧹",
    title: "2027 약술형 논술 정리(최승후 선생님)",
    section: "admission",
    description: "2027 약술형 논술 정리",
    tags: ["2027", "약술형 논술"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/lhk15/2027-yaksul-nonsul", platform: "html" }]
  },
        {
    id: "gyeongil-sports-guide",
    icon: "🍇",
    title: "체육계열 수시지원 가이드",
    section: "admission",
    description: "체육계열 수시지원 가이드",
    tags: ["체육", "수시"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/gyeongil-sports-guide/", platform: "html" }]
  },
        {
    id: "gyeongil-admissions-compass",
    icon: "🍧",
    title: "경일고,경일여고 수시 3개년 입시 결과 배치표",
    section: "admission",
    description: "경일고,경일여고 수시 3개년 입시 결과 배치표",
    tags: ["수시", "배치표"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/gyeongil-admissions-compass/", platform: "html" }]
  },

    // ── 교육과정·배치표 ────────────────────────────────────────
  {
    id: "curriculum-2026",
    icon: "🧩",
    title: "2026 교육과정 편제표 및 1학년 선택과목 도우미",
    section: "curriculum",
    description: "2026학년도 교육과정 편제 및 1학년 과목 선택 안내 자료",
    tags: ["교육과정", "과목선택", "편제표"],
    featured: true,
    isNew: false,
    updatedAt: "2026-03",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-1-hakup-design", platform: "html" }]
  },
  {
    id: "bachi-2026-03",
    icon: "👥",
    title: "2026 모의고사 배치표",
    section: "curriculum",
    description: "2026년 모의고사 정시 배치표",
    tags: ["배치표", "정시"],
    featured: true,
    isNew: false,
    updatedAt: "2026-03",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-bachi/", platform: "html" }]
  },

  // ── AI 도우미 ─────────────────────────────────────────────
  {
    id: "question-helper",
    icon: "💡",
    title: "수업 후 질문·탐구 주제 도우미",
    section: "ai-tools",
    description: "수업 이후 질문 확장과 탐구 주제 발굴을 돕는 AI 도구. GPT와 Gemini 모두 제공",
    tags: ["탐구", "질문", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기",    url: "https://chatgpt.com/g/g-69d4bd3bbe808191924ff384d664273b-cangweongyeongilgo-jilmun-tamgu-juje-doumi", platform: "gpt" },
      { label: "Gemini로 열기",  url: "https://gemini.google.com/gem/1QPoxJSX7herq_XQoZ_1pIdmo7ZuPkq5j?usp=sharing", platform: "gemini" }
    ]
  },
  {
    id: "interview-helper",
    icon: "🎤",
    title: "생기부 기반 면접 자료 생성",
    section: "ai-tools",
    description: "학생부 내용을 바탕으로 예상 질문과 답변 방향을 정리하는 AI 도구",
    tags: ["면접", "생기부", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [
      { label: "GPTs로 열기",    url: "https://chatgpt.com/g/g-69dc98128764819197bf1ddbc92b4e47-saenggibu-giban-myeonjeob-jaryo-saengseong", platform: "gpt" },
      { label: "Gemini로 열기",  url: "https://gemini.google.com/gem/1GMiZ4pV5Rbmoc2s3puoYkJiI_OT53bRh?usp=sharing", platform: "gemini" }
    ]
  },
  {
    id: "news-inquiry",
    icon: "📰",
    title: "오늘의 뉴스로 탐구활동 만들기",
    section: "ai-tools",
    description: "시사 뉴스를 기반으로 수업 연계 탐구활동지를 자동 생성하는 AI 도구",
    tags: ["탐구", "뉴스", "활동지", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "GPTs로 열기", url: "https://chatgpt.com/g/g-6982a6ea81fc8191b3e8975858800ba6-sinmungisaro-tamguhwaldong-saengseong", platform: "gpt" }]
  },
  {
    id: "seteuk-edit",
    icon: "✏️",
    title: "세특 내용 수정·보완",
    section: "ai-tools",
    description: "작성된 세특 초안의 표현과 내용을 평가 기준에 맞게 개선하는 AI 도구",
    tags: ["세특", "수정", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "GPTs로 열기", url: "https://chatgpt.com/g/g-69829666a7d48191986da33a1e64b293-seteug-naeyong-sujeong-bowan", platform: "gpt" }]
  },
  {
    id: "seteuk-gen",
    icon: "⚡",
    title: "탐구활동지로 세특 생성",
    section: "ai-tools",
    description: "학생의 탐구 결과물을 입력하면 세특 초안을 자동 작성해 주는 AI 도구",
    tags: ["세특", "생성", "탐구", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "GPTs로 열기", url: "https://chatgpt.com/g/g-6982925ee34881919b46f80dedfc8b02-seteug-saengseong", platform: "gpt" }]
  },

    {
    id: "saetuk-prompt",
    icon: "🪄",
    title: "탐구활동지로 세특 프롬프트 생성기",
    section: "ai-tools",
    description: "탐구활동 후 탐구활동지를 바탕으로 세특 프롬프트 생성",
    tags: ["탐구활동", "세특", "프롬프트 생성"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/saetuk-prompt", platform: "html" }]
  },
    {
    id: "AI_Council_Room",
    icon: "✨",
    title: "AI 회의실",
    section: "ai-tools",
    description: "하나의 주제로 4개의 AI가 의견을 주고 받는 곳",
    tags: ["AI", "회의", "토론"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/AI_Council_Room", platform: "html" }]
  },
    {
    id: "saeteck seosul",
    icon: "✨",
    title: "박정민 선생님의 세특 작성 사용 서술형 문장 모음",
    section: "ai-tools",
    description: "세특 작성 도와주는 서술형 문장 모음",
    tags: ["세특", "문장"],
    featured: false,
    isNew: true,
    updatedAt: "2026-06",
    links: [{ label: "바로가기", url: "https://fastidious-brigadeiros-07cdae.netlify.app/", platform: "html" }]
  },
  
  // ── 진로·취업 데이터 ──────────────────────────────────────
  {
    id: "major-explorer",
    icon: "🏫",
    title: "대학별 전공 가이드",
    section: "career-data",
    description: "대학에서 제공하는 전공 가이드 모음",
    tags: ["전공", "가이드", "대학제공"],
    featured: true,
    isNew: true,
    updatedAt: "2026-06",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/major-explorer/", platform: "html" }]
  },  
  {
    id: "admission-roadmap",
    icon: "🐶",
    title: "계열별 대입 로드맵",
    section: "career-data",
    description: "계열별 대입 로드맵",
    tags: ["계열", "대입", "로드맵"],
    featured: true,
    isNew: true,
    updatedAt: "2026-06",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-1-choice/admission-roadmap.html", platform: "html" }]
  },    
  {
    id: "career-counsel",
    icon: "🍉",
    title: "우리학교 진로상담 시스템",
    section: "career-data",
    description: "창원경일고 데이터 기반 진로상담 시스템. 학교별 진학 현황, 학과 탐색, 상담 자료 통합 제공",
    tags: ["진로상담", "고등학교", "진학현황", "AI도구"],
    featured: true,
    isNew: true,
    updatedAt: "2026-04",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/jinlosangdam/", platform: "html" }]
  },
  {
    id: "job-rate",
    icon: "📊",
    title: "취업 유지취업률 현황",
    section: "career-data",
    description: "2020~2024 대학교 졸업생 취업 및 유지취업률 통계 검색 자료",
    tags: ["취업률", "진로탐색", "데이터", "학과선택"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/job/", platform: "html" }]
  },
  {
    id: "job-video-2026",
    icon: "🎬",
    title: "2026 직업 동영상 모음",
    section: "career-data",
    description: "다양한 직업에 대한 안내 및 동영상 자료 모음",
    tags: ["직업", "동영상", "진로탐색"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "2026 직업 동영상 모음.html", platform: "html" }]
  },
  {
    id: "career-worldcup",
    icon: "🏆",
    title: "진로 월드컵",
    section: "career-data",
    description: "흥미를 기반으로 한 이상형 월드컵 방식의 진로 탐색 도구",
    tags: ["진로탐색", "월드컵", "직업", "테스트"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/worldcup", platform: "html" }]
  },
    {
    id: "44law",
    icon: "☘️",
    title: "재미난 44가지 법칙",
    section: "career-data",
    description: "재미난 44가지 법칙",
    tags: ["재미", "머피의 법칙", "44가지"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/44law", platform: "html" }]
  },
    {
    id: "teacher-cert-finder",
    icon: "🧑‍🎓",
    title: "교직이수과정기관 검색",
    section: "career-data",
    description: "교직이수과정기관 검색",
    tags: ["교직이수", "사범대", "교사자격"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/teacher-cert-finder", platform: "html" }]
  },
    {
    id: "gyeongil-parent-test",
    icon: "🐦‍⬛",
    title: "학부모 교육성향 테스트",
    section: "career-data",
    description: "학부모님 대상 간단하게 교육성향 테스트",
    tags: ["학부모", "교육성향", "테스트"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/gyeongil-parent-test", platform: "html" }]
  },
    {
    id: "good-writingt",
    icon: "⚔️",
    title: "좋은 글 모음",
    section: "career-data",
    description: "좋은 글 모음",
    tags: ["좋은 글"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/good-writing", platform: "html" }]
  },

  // ★ 새 자료 추가는 아래 템플릿을 복사해서 붙여넣으세요 ★
  // {
  //   id: "고유-아이디",          ← 영문+하이픈, 다른 항목과 겹치지 않게
  //   icon: "📄",                 ← 원하는 이모지 하나 (없으면 📄 로 표시)
  //   title: "자료 제목",
  //   section: "admission",       ← admission / curriculum / ai-tools / career-data / personal
  //   description: "자료 설명",
  //   tags: ["태그1", "태그2"],
  //   featured: false,            ← true 면 상단 퀵 액세스에도 표시
  //   isNew: true,                ← NEW 뱃지 표시 여부
  //   updatedAt: "2026-05",       ← YYYY-MM 형식
  //   links: [{ label: "바로가기", url: "https://...", platform: "html" }]
  // },

];
