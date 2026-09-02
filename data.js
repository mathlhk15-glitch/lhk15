const SECTIONS = {
  "admission-info":     { label: "🎓 수시 입시·전형 가이드",   desc: "수시 전형 종합 안내, 대학별 가이드, 설명회 정리 자료" },
  "admission-cutline":  { label: "📐 배치표·등급환산",         desc: "정시/수시 배치표 및 내신·모의고사 등급 환산 도구" },
  "admission-by-field": { label: "🧭 계열별 입시가이드",       desc: "의약학·간호·체육·교대사범·이공계 등 계열별 전형 자료" },
  "admission-essay":    { label: "✍️ 논술전형 자료",           desc: "논술·약술형 전형 정리 자료" },
  "department-explore": { label: "🔬 학과 탐색 도구",          desc: "학과별 탐구 주제 및 학과 사례 비교 콘솔" },
  "curriculum":         { label: "📘 교육과정·학습자료",       desc: "교육과정 편제, 과목 선택, 교과 학습맵 등 자료" },
  "seteuk-ai":          { label: "✏️ 세특·생기부 AI 도구",     desc: "세특 작성·수정, 면접자료, 생기부 정성평가 상담 AI 도구" },
  "inquiry-ai":         { label: "💡 탐구·질문 AI 도구",       desc: "질문·탐구 주제 발굴 및 AI 토론 지원 도구" },
  "career-data":        { label: "📊 진로 데이터",             desc: "진로 탐색 및 학과 선택을 위한 통계·상담 자료" },
  "personal":           { label: "🔒 개인",                    desc: "개인 전용 자료" },
  "etc":                { label: "🗂️ 기타",                    desc: "그 외 만들어둔 생활·교양 자료" }
};

// ★ 카드 추가/수정은 이 배열만 편집하세요
//    icon 은 이모지 하나, 없으면 "📄" 로 표시됩니다
const resources = [

  // ── 🎓 수시 입시·전형 가이드 ──────────────────────────────
  {
    id: "ipsi-3rd",
    icon: "🐼",
    title: "경일 진학상담 Navigator — 성적입력·입결탐색 통합",
    section: "admission-info",
    description: "학생 성적을 입력하면 전국 입결 데이터와 비교하고, 교과 정밀 판정·관심 학과 비교·상담 리포트까지 한 화면(탭)에서 처리하는 통합 상담 도구. (진주동명고 자료 기반, 학생 이름 입력란 있음 — 학교 내부 상담용)",
    tags: ["수시", "정시", "입결", "배치표", "성적입력", "통합"],
    featured: true,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi/", platform: "html" }]
  },
  {
    id: "college-admissions-2027-2028",
    icon: "🌳",
    title: "이동균선생님의 2027,8 주요대학, 메디컬계열 대입전형 정리",
    section: "admission-info",
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
    section: "admission-info",
    description: "2027,20288 15개 대학 대입전형 정리",
    tags: ["2027,8", "15개 대학", "전형 정리"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2028ipsi/", platform: "html" }]
  },
  {
    id: "admission-briefing-2028",
    icon: "🌰",
    title: "2027·2028 대입, 대학은 무엇을 보고 학생은 무엇을 준비해야 할까?",
    section: "admission-info",
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
    title: "2027 수시 전형 검색·비교 허브 (308개 전형)",
    section: "admission-info",
    description: "대학·지역·전형 조건으로 검색해 최대 4개 전형을 나란히 비교하고 인쇄할 수 있는 도구. 성적 입력 기능은 없고 전형 정보 열람·비교 전용. (경기교육청 리더교사단 발표자료 기반)",
    tags: ["2027", "수시", "전형검색", "비교"],
    featured: false,
    isNew: true,
    updatedAt: "2026-06",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/2027-susi-counsel-hub.html", platform: "html" }]
  },
  {
    id: "ipsi-2027",
    icon: "🏥",
    title: "[저장소 랜딩페이지] 2027 대입 대학별 핵심 가이드",
    section: "admission-info",
    description: "아래 '2027 수시 전형 검색·비교 허브'와 '2027 대입 전략 가이드 216쪽 뷰어'를 담고 있는 저장소의 첫 화면입니다. 실제 내용은 두 카드 중 하나로 바로 들어가는 것을 권장합니다.",
    tags: ["2027", "핵심 가이드", "랜딩페이지"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/", platform: "html" }]
  },
  {
    id: "admission2027",
    icon: "🏥",
    title: "2027 대입 전략 가이드 216쪽 뷰어",
    section: "admission-info",
    description: "경기교육청 리더교사단 발표자료(216쪽)를 페이지별로 검색·확대해서 보는 뷰어. 입시 용어사전, 3분 길찾기, 학년별 체크리스트 포함. 성적 입력·전형 비교 기능은 없음.",
    tags: ["2027", "입시 안내", "216쪽", "뷰어"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/admission2027/", platform: "html" }]
  },
  {
    id: "gyeonggi-ipsi",
    icon: "🧭",
    title: "경기진협 자료",
    section: "admission-info",
    description: "경기진협에서 제공하는 대입정보 모음",
    tags: ["경기", "대입정보", "나침반", "입시"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://specialzoker.github.io/", platform: "html" }]
  },
  {
    id: "esteacher",
    icon: "🐜",
    title: "대입정보를 정리한 진학정보실",
    section: "admission-info",
    description: "진학정보실",
    tags: ["진학", "정보실"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://jinhak.esteacher.kr/", platform: "html" }]
  },
  {
    id: "susi-competition-rate-tracker-2026",
    icon: "📈",
    title: "시간대별·대학별 수시 경쟁률 비교 분석기",
    section: "admission-info",
    description: "수시 원서접수 기간 중 시간대별·대학별 경쟁률 변화를 최종 마감까지 비교·분석하는 도구",
    tags: ["수시", "경쟁률", "실시간", "비교분석"],
    featured: false,
    isNew: true,
    updatedAt: "2026-09",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-susi-competition-rate-tracker/", platform: "html" }]
  },

  // ── 📐 배치표·등급환산 ────────────────────────────────────
  {
    id: "modu-baechipyo-2027",
    icon: "🧮",
    title: "박상근 선생님의 모두의 2027 대입 배치표",
    section: "admission-cutline",
    description: "박상근 선생님의 모두의 2027 대입 배치표",
    tags: ["2027", "박상근", "배치표"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://park-sanggeun-all.github.io/modu-baechipyo-2027/", platform: "html" }]
  },
  {
    id: "gyeongil-admissions-compass",
    icon: "🍧",
    title: "경일고,경일여고 수시 3개년 입시 결과 배치표",
    section: "admission-cutline",
    description: "경일고,경일여고 수시 3개년 입시 결과 배치표",
    tags: ["수시", "배치표"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/gyeongil-admissions-compass/", platform: "html" }]
  },
  {
    id: "bachi-2026-03",
    icon: "👥",
    title: "2026 모의고사 배치표",
    section: "admission-cutline",
    description: "2026년 모의고사 정시 배치표",
    tags: ["배치표", "정시"],
    featured: true,
    isNew: false,
    updatedAt: "2026-03",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2026-bachi/", platform: "html" }]
  },
  {
    id: "ipsi-9grade-calc",
    icon: "🏃🏼‍♀️‍➡️",
    title: "중간고사 성적으로 9등급 환산",
    section: "admission-cutline",
    description: "중간고사 성적을 기준으로 9등급을 예상 환산해보는 도구",
    tags: ["수시", "내신", "등급환산", "중간고사"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "중간고사 성적으로 9등급 환산.html", platform: "html" }]
  },
    {
    id: "jinhak-system",
    icon: "✒️",
    title: "학생부 성적 OCR·가중평균 분석기 (개별 학생용)",
    section: "admission-cutline",
    description: "학생부 PDF나 성적표 사진을 올리면 자동으로 읽어 단위수 가중평균, 목표등급 역산, 상담용 Excel까지 만들어주는 개별 학생 성적 분석 도구. 대학 검색·전형 비교 기능은 없음.",
    tags: ["OCR", "성적 분석", "가중평균", "상담카드"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/jinhak-system/", platform: "html" }]
  },
    {
    id: "mock-percentile",
    icon: "🦌",
    title: "백분위 속에 숨어 있던 다음 목표를 찾아드려요",
    section: "admission-cutline",
    description: "국어·수학·탐구(또는 통합사회·통합과학) 백분위 4개만입력하면, 지금 위치와 다음 참고등급까지 남은 거리를 바로 보여드립니다.",
    tags: ["백분위", "위치", "수능때의 등급 예상"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/mock-percentile/", platform: "html" }]
  },

  // ── 🧭 계열별 입시가이드 ──────────────────────────────────
  {
    id: "med-admission-2026",
    icon: "🌰",
    title: "의·치·한·약·수 수시입결 상담도구(2023–2026 입시결과 · 2026/2027 수능최저 참고)",
    section: "admission-by-field",
    description: "의·치·한·약·수 수시입결 상담도구(2023–2026 입시결과 · 2026/2027 수능최저 참고)",
    tags: ["의치한약수"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/lhk15/med-admission-2026", platform: "html" }]
  },
  {
    id: "science-univ-2027",
    icon: "📚",
    title: "2027 이공계 특성화대 6개교 입시 안내 ",
    section: "admission-by-field",
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
    section: "admission-by-field",
    description: "2028 간호학과 전형 검색",
    tags: ["2028", "간호학과"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/2028nurse/", platform: "html" }]
  },
  {
    id: "localdoctor",
    icon: "🦉",
    title: "지역의사제",
    section: "admission-by-field",
    description: "지역의사제",
    tags: ["지역", "의사"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/localdoctor", platform: "html" }]
  },
  {
    id: "2027-medical-eligibility-checker",
    icon: "🎯",
    title: "2027학년도 의대 지원자격 검색기-부산교육청",
    section: "admission-by-field",
    description: "2027학년도 의대 지원자격 검색기-부산교육청",
    tags: ["2027", "의대", "지원자격"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/lhk15/2027-medical-eligibility-checker", platform: "html" }]
  },
  {
    id: "gyeongil-sports-guide",
    icon: "🍇",
    title: "체육계열 수시지원 가이드",
    section: "admission-by-field",
    description: "체육계열 수시지원 가이드",
    tags: ["체육", "수시"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/gyeongil-sports-guide/", platform: "html" }]
  },
  {
    id: "teacher-edu-guide",
    icon: "🍧",
    title: "교대·사범대·교원양성기관 통합 정리",
    section: "admission-by-field",
    description: "교대·사범대·교원양성기관 통합 정리",
    tags: ["교대", "사범대"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/lhk15/teacher-edu-guide.html", platform: "html" }]
  },

  // ── ✍️ 논술전형 자료 ──────────────────────────────────────
  {
    id: "2027_essay",
    icon: "🐓",
    title: "김강석선생님의 2027 논술전형 정리",
    section: "admission-essay",
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
    section: "admission-essay",
    description: "2027 약술형 논술 정리",
    tags: ["2027", "약술형 논술"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/lhk15/2027-yaksul-nonsul", platform: "html" }]
  },

  // ── 🔬 학과 탐색 도구 (박상근 선생님 자료) ───────────────
  {
    id: "modu-dept-map",
    icon: "🗺️",
    title: "박상근 선생님의 모두의 학과별 탐구 지도",
    section: "department-explore",
    description: "학과별 탐구 주제와 방향을 탐색할 수 있는 콘솔",
    tags: ["박상근", "학과탐구", "탐구주제"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://park-sanggeun-all.github.io/teacher-console-map/", platform: "html" }]
  },
  {
    id: "modu-dept-cases",
    icon: "🧩",
    title: "박상근 선생님의 모두의 학과사례 비교 콘솔",
    section: "department-explore",
    description: "학과별 합격·활동 사례를 비교해볼 수 있는 콘솔",
    tags: ["박상근", "학과사례", "비교"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://park-sanggeun-all.github.io/teacher-console-cases/", platform: "html" }]
  },

  // ── 📘 교육과정·학습자료 ──────────────────────────────────
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
    id: "suwan-korean-2027",
    icon: "🌱",
    title: "2027 수능완성 문학·독서 학습맵",
    section: "curriculum",
    description: "수능완성 문학·독서 63개 작품·지문 인터랙티브 학습맵. 입문 10선, 진로 연결, 오늘 하나만 읽기 등 루트 제공. 체크 기록 본인 기기 저장.",
    tags: ["수능완성", "국어", "문학", "독서", "2027"],
    featured: false,
    isNew: true,
    updatedAt: "2026-06",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/ipsi-2027/suwan-korean-2027.html", platform: "html" }]
  },

  // ── ✏️ 세특·생기부 AI 도구 ────────────────────────────────
  {
    id: "interview-helper",
    icon: "🎤",
    title: "생기부 기반 면접 자료 생성",
    section: "seteuk-ai",
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
    id: "interview-hub",
    icon: "🎙️",
    title: "2027 대입 면접 준비 허브",
    section: "seteuk-ai",
    description: "생활기록부 PDF를 선택적으로 불러오면 면접 핵심 기록과 예상 질문을 자동 정리하고, 30·60초 말하기 연습·AI 심화분석 프롬프트·면접 직전 점검까지 지원하는 무료 면접 준비 도구",
    tags: ["면접", "생활기록부", "예상질문", "말하기연습", "2027"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/interview-hub/", platform: "html" }]
  },
  {
    id: "seteuk-edit",
    icon: "✏️",
    title: "세특 내용 수정·보완",
    section: "seteuk-ai",
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
    section: "seteuk-ai",
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
    section: "seteuk-ai",
    description: "탐구활동 후 탐구활동지를 바탕으로 세특 프롬프트 생성",
    tags: ["탐구활동", "세특", "프롬프트 생성"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/saetuk-prompt", platform: "html" }]
  },
  {
    id: "saeteuk-seosul",
    icon: "🗺️",
    title: "박정민 선생님의 세특 작성 사용 서술형 문장 모음",
    section: "seteuk-ai",
    description: "세특 작성 도와주는 서술형 문장 모음",
    tags: ["세특", "문장"],
    featured: false,
    isNew: true,
    updatedAt: "2026-06",
    links: [{ label: "바로가기", url: "https://fastidious-brigadeiros-07cdae.netlify.app/", platform: "html" }]
  },
  {
    id: "action242",
    icon: "🧩",
    title: "학생 실제수행기반 행동서술 242선 — 검색·문장화 도구",
    section: "seteuk-ai",
    description: "세특에 쓸 수 있는 실제 수행 기반 행동 서술 242개를 검색·필터링하고, 대상·근거·판단기준·결과·한계를 채워 초안 문장으로 조립하는 도구. NEIS 기준 바이트 계산기 포함, 학생 개인정보는 저장하지 않음.",
    tags: ["세특", "행동서술", "문장조립", "AI교차검증"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/neis-action242/", platform: "html" }]
  },
  {
    id: "teacher-growth-studio",
    icon: "✨",
    title: "교사 수업·평가·기록 설계실",
    section: "seteuk-ai",
    description: "수행평가를 설계하고, 학생의 성장 근거를 점검하며, 외부 AI에 넣을 안전한 프롬프트를 만듭니다",
    tags: ["수행평가 설계", "세특 점검, 검수"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/teacher-growth-studio/", platform: "html" }]
  },
  {
    id: "modu-saengibu-console",
    icon: "🧾",
    title: "박상근 선생님의 모두의 생기부 정성평가 상담 콘솔",
    section: "seteuk-ai",
    description: "생기부 정성평가 관점에서 상담을 지원하는 콘솔",
    tags: ["박상근", "생기부", "정성평가", "상담"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://park-sanggeun-all.github.io/teacher-console/", platform: "html" }]
  },

  // ── 💡 탐구·질문 AI 도구 ──────────────────────────────────
  {
    id: "question-helper",
    icon: "💡",
    title: "수업 후 질문·탐구 주제 도우미",
    section: "inquiry-ai",
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
    id: "news-inquiry",
    icon: "📰",
    title: "오늘의 뉴스로 탐구활동 만들기",
    section: "inquiry-ai",
    description: "시사 뉴스를 기반으로 수업 연계 탐구활동지를 자동 생성하는 AI 도구",
    tags: ["탐구", "뉴스", "활동지", "AI도구"],
    featured: false,
    isNew: false,
    updatedAt: "2026-04",
    links: [{ label: "GPTs로 열기", url: "https://chatgpt.com/g/g-6982a6ea81fc8191b3e8975858800ba6-sinmungisaro-tamguhwaldong-saengseong", platform: "gpt" }]
  },
  {
    id: "AI_Council_Room",
    icon: "✨",
    title: "AI 회의실",
    section: "inquiry-ai",
    description: "하나의 주제로 4개의 AI가 의견을 주고 받는 곳",
    tags: ["AI", "회의", "토론"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/AI_Council_Room", platform: "html" }]
  },

  // ── 📊 진로 데이터 ────────────────────────────────────────
  {
    id: "career-lab",
    icon: "🏫",
    title: "내 경헙에서 시작하는 진로 실험실",
    section: "career-data",
    description: "진로 가설 → 질문 → 탐구 설계 → 성장 로드맵",
    tags: ["질문", "텀구 설계", "성장로드맵"],
    featured: true,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/career-lab/", platform: "html" }]
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
    id: "2026-career-compass",
    icon: "🕊️",
    title: "2026 지역산업 진로진학나침반",
    section: "career-data",
    description: "2026 지역산업 진로진학나침반",
    tags: ["지역산업", "지역인재육성법"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "2026-career-compass.html", platform: "html" }]
  },
  
  // ── 🗂️ 기타 ──────────────────────────────────────────────
  {
    id: "commute-english",
    icon: "🗣️",
    title: "출퇴근 여행영어 코치",
    section: "etc",
    description: "운전 중 듣고 먼저 말하는 방식으로 익히는 70일 여행 생존 영어",
    tags: ["여행영어", "영어", "듣기말하기"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "commute-english-v4.html", platform: "html" }]
  },
  {
    id: "breakfast-soup",
    icon: "🍲",
    title: "한 달 아침국 30가지",
    section: "etc",
    description: "가족 식단을 위한 한 달치 아침국 추천 및 계획 도구",
    tags: ["아침국", "식단", "가족"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "breakfast_soup.html", platform: "html" }]
  },
  {
    id: "elderly-appetite-guide",
    icon: "🍵",
    title: "식욕·소화불량·우울감 개선 가이드",
    section: "etc",
    description: "식전 소량 온음료 + 부드러운 고단백 식사로 노인 식욕부진·소화불량·우울감을 개선하는 방법 정리",
    tags: ["건강", "노인식단", "식욕부진"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "elderly-appetite-guide.png", platform: "image" }]
  },
  {
    id: "jaunggo-guide",
    icon: "🌿",
    title: "자운고 만들기",
    section: "etc",
    description: "자근·당귀·진피·감초로 만드는 전통 한방 연고, 효능·준비물·제조법 정리",
    tags: ["한방", "자운고", "천연연고"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "jaunggo-guide.png", platform: "image" }]
  },
  {
    id: "saengmaeksan-guide",
    icon: "🍹",
    title: "생맥산 만들기",
    section: "etc",
    description: "맥문동·오미자·황기·백출·진피로 만드는 여름철 갈증 해소·기력 보충 한방 음료 레시피",
    tags: ["한방", "생맥산", "여름음료"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "saengmaeksan-guide.png", platform: "image" }]
  },
  {
    id: "korea-independence-movement",
    icon: "🇰🇷",
    title: "한국의 광복은 왜 독립운동의 결과라고 배우는가",
    section: "etc",
    description: "광복이 독립운동의 결과라고 배우는 이유를 정리한 자료",
    tags: ["광복", "독립운동", "역사"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "korea-independence-movement.html", platform: "html" }]
  },
  {
    id: "seoul-apartment-search",
    icon: "🏠",
    title: "딸의 서울 첫 주택 마련 가족 실행안",
    section: "etc",
    description: "딸의 서울 첫 주택 마련을 위한 가족 최종 실행안",
    tags: ["주택", "서울", "가족"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "seoul-apartment-search.html", platform: "html" }]
  },
  {
    id: "laundry_pocket_guide",
    icon: "🧺",
    title: "속옷은 한 번, 브라는 2~3번…옷은 언제 빨아야 할까?",
    section: "etc",
    description: "속옷·브라 등 의류별 세탁 주기 가이드",
    tags: ["세탁", "생활정보"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "laundry_pocket_guide.html", platform: "html" }]
  },
  {
    id: "radio-shortcut",
    icon: "📻",
    title: "라디오 바로가기",
    section: "etc",
    description: "즐겨듣는 라디오 사이트 바로가기 모음",
    tags: ["라디오", "음악"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [
      { label: "BSOD 라디오", url: "https://radio.bsod.kr/", platform: "html" },
      { label: "수학쌤 라디오", url: "https://mathlhk15-glitch.github.io/radio/", platform: "html" }
    ]
  },
  {
    id: "family-cash-gift-tax-guide-2026",
    icon: "💰",
    title: "가족 현금증여·홈택스 신고 실행 가이드 (2026)",
    section: "etc",
    description: "엄마가 아들·딸에게 각 5,000만 원 현금 증여 시 계약서 작성부터 홈택스 신고, 증빙 보관까지 따라 하는 가족 공유용 가이드",
    tags: ["증여세", "홈택스", "가족", "세금"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "family-cash-gift-tax-guide-2026.html", platform: "html" }]
  },
  {
    id: "44law",
    icon: "☘️",
    title: "재미난 44가지 법칙",
    section: "etc",
    description: "재미난 44가지 법칙",
    tags: ["재미", "머피의 법칙", "44가지"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/44law", platform: "html" }]
  },
  {
    id: "good-writingt",
    icon: "⚔️",
    title: "좋은 글 모음",
    section: "etc",
    description: "좋은 글 모음",
    tags: ["좋은 글"],
    featured: false,
    isNew: true,
    updatedAt: "2026-05",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/good-writing", platform: "html" }]
  },
  {
    id: "free-learning-economy-hub",
    icon: "📚",
    title: "무료 학습·경제 허브",
    section: "etc",
    description: "무료 학습 자료와 경제 관련 콘텐츠를 한곳에서 활용하는 허브",
    tags: ["무료학습", "경제", "학습자료"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/free_learning_economy_hub/", platform: "html" }]
  },
  {
    id: "trip-planner",
    icon: "🧳",
    title: "여행 플래너",
    section: "etc",
    description: "여행지와 일정을 정리하고 여행 계획을 세우는 도구",
    tags: ["여행", "여행계획", "일정"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/trip-planner/", platform: "html" }]
  },
  {
    id: "highway-rest-area-food",
    icon: "🍽️",
    title: "고속도로 휴게소 맛집",
    section: "etc",
    description: "전국 고속도로 휴게소별 추천 음식과 대표 메뉴를 찾아보는 맛집 가이드",
    tags: ["고속도로", "휴게소", "맛집", "여행"],
    featured: false,
    isNew: true,
    updatedAt: "2026-08",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/highway-rest-area-food/", platform: "html" }]
  },
  {
    id: "family-death-inheritance-guide-2026",
    icon: "🕊️",
    title: "가족 사망·상속 절차 가이드 (2026)",
    section: "etc",
    description: "가족 사망 시 필요한 상속 절차와 준비사항을 정리한 가이드",
    tags: ["상속", "사망신고", "가족", "절차"],
    featured: false,
    isNew: true,
    updatedAt: "2026-09",
    links: [{ label: "바로가기", url: "https://mathlhk15-glitch.github.io/family_death_inheritance_guide_2026/", platform: "html" }]
  },
  {
    id: "playhanja",
    icon: "🈶",
    title: "한자야 놀자! — 초등 애니메이션 한자 학습",
    section: "etc",
    description: "부수가 그림처럼 합쳐지는 애니메이션으로 한자를 익히는 초등 학습 사이트. 급수별 한자(9~1급), 천자문 250구, A4 쓰기 연습장, 퀴즈 복습 제공",
    tags: ["한자", "초등", "애니메이션", "쓰기연습"],
    featured: false,
    isNew: true,
    updatedAt: "2026-09",
    links: [{ label: "바로가기", url: "https://playhanja.vercel.app/", platform: "html" }]
  },

  // ★ 새 자료 추가는 아래 템플릿을 복사해서 붙여넣으세요 ★
  // {
  //   id: "고유-아이디",          ← 영문+하이픈, 다른 항목과 겹치지 않게
  //   icon: "📄",                 ← 원하는 이모지 하나 (없으면 📄 로 표시)
  //   title: "자료 제목",
  //   section: "admission-info",  ← 위 SECTIONS 객체의 키 중 하나
  //   description: "자료 설명",
  //   tags: ["태그1", "태그2"],
  //   featured: false,            ← true 면 상단 퀵 액세스에도 표시
  //   isNew: true,                ← NEW 뱃지 표시 여부
  //   updatedAt: "2026-05",       ← YYYY-MM 형식
  //   links: [{ label: "바로가기", url: "https://...", platform: "html" }]
  // },

];
