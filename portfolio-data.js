// ============================================================
//  portfolio-data.js  —  이현규 패밀리 오피스 포트폴리오 데이터
//
//  ★ 주식을 사고 팔았을 때 이 파일만 수정하면 됩니다.
//
//  각 항목 설명:
//   member   : 이현규 / 임인숙 / 이재연 / 이재현
//   name     : 종목명
//   ticker   : 티커 (국내 ETF는 — 으로)
//   type     : krw-etf (국내 ETF) / usd-stock (해외 주식)
//   qty      : 보유 수량
//   buyKrw   : 총 매입금액 (원화)
//   evalKrw  : 현재 평가금액 (국내 ETF만 사용, 해외는 null)
//   evalUsd  : 현재 주가 달러 단가 (해외 주식만, 국내 ETF는 null)
//   action   : 메모 (예: 유지 / 즉시매도 / 핵심유지 등)
//   actionClass: tag-green / tag-orange / tag-red / tag-blue
// ============================================================

const portfolioData=[
  {member:'이현규',name:'TIGER 미국S&P500TR',ticker:'—',type:'krw-etf',qty:85,buyKrw:2025855,evalKrw:2133925,evalUsd:null,action:'',actionClass:''},
  {member:'이현규',name:'KODEX 미국나스닥100TR',ticker:'—',type:'krw-etf',qty:390,buyKrw:9013875,evalKrw:9625200,evalUsd:null,action:'',actionClass:''},
  {member:'이현규',name:'TIGER 미국테크TOP10INDXX',ticker:'—',type:'krw-etf',qty:109,buyKrw:2980425,evalKrw:3212775,evalUsd:null,action:'',actionClass:''},
  {member:'이현규',name:'KODEX 미국반도체MV',ticker:'—',type:'krw-etf',qty:158,buyKrw:5978620,evalKrw:6884060,evalUsd:null,action:'',actionClass:''},
  {member:'이현규',name:'TIGER S&P500TR (ISA)',ticker:'—',type:'krw-etf',qty:227,buyKrw:5404870,evalKrw:5698835,evalUsd:null,action:'',actionClass:''},
  {member:'이현규',name:'KODEX 나스닥100TR (ISA2)',ticker:'—',type:'krw-etf',qty:155,buyKrw:3584943,evalKrw:3825400,evalUsd:null,action:'',actionClass:''},
  {member:'이현규',name:'버티브 홀딩스',ticker:'VRT',type:'usd-stock',qty:7,buyKrw:2130956,evalUsd:293.74,evalKrw:null,action:'강점',actionClass:'tag-green'},
  {member:'이현규',name:'온투 이노베이션',ticker:'ONON',type:'usd-stock',qty:7,buyKrw:2242123,evalUsd:255.95,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'이현규',name:'BWX 테크놀로지스',ticker:'BWXT',type:'usd-stock',qty:6,buyKrw:1779256,evalUsd:228.51,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'이현규',name:'테크닙 FMC',ticker:'FTI',type:'usd-stock',qty:5,buyKrw:450847,evalUsd:73.45,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'이현규',name:'오셔니어링',ticker:'OII',type:'usd-stock',qty:21,buyKrw:1052056,evalUsd:36.03,evalKrw:null,action:'유지',actionClass:'tag-orange'},
  {member:'이현규',name:'팔란티어',ticker:'PLTR',type:'usd-stock',qty:11,buyKrw:2299482,evalUsd:127.47,evalKrw:null,action:'유지',actionClass:'tag-orange'},
  {member:'이현규',name:'아스테라 랩스',ticker:'ALAB',type:'usd-stock',qty:4,buyKrw:942341,evalUsd:148.36,evalKrw:null,action:'유지',actionClass:'tag-orange'},
  {member:'이현규',name:'템퍼스 AI',ticker:'TEM',type:'usd-stock',qty:12,buyKrw:998952,evalUsd:42.74,evalKrw:null,action:'유지',actionClass:'tag-orange'},
  {member:'이현규',name:'아이온큐 (보유유지)',ticker:'IONQ',type:'usd-stock',qty:9,buyKrw:848891,evalUsd:28.66,evalKrw:null,action:'결정확정',actionClass:'tag-blue'},
  {member:'임인숙',name:'TIGER 미국S&P500TR',ticker:'—',type:'krw-etf',qty:243,buyKrw:5980660,evalKrw:6100515,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'KODEX 미국나스닥100TR',ticker:'—',type:'krw-etf',qty:319,buyKrw:7681615,evalKrw:7872920,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'TIGER 미국테크TOP10INDXX',ticker:'—',type:'krw-etf',qty:80,buyKrw:2291400,evalKrw:2358000,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'KODEX 미국반도체MV',ticker:'—',type:'krw-etf',qty:100,buyKrw:4042000,evalKrw:4357000,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'TIGER S&P500TR (2)',ticker:'—',type:'krw-etf',qty:200,buyKrw:4931000,evalKrw:5021000,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'KODEX 나스닥100TR (2)',ticker:'—',type:'krw-etf',qty:168,buyKrw:4050760,evalKrw:4146240,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'FIRST TRUST ETF',ticker:'FPX',type:'usd-stock',qty:6,buyKrw:1477308,evalUsd:177.06,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'VANGUARD ETF',ticker:'VIG',type:'usd-stock',qty:5,buyKrw:1478360,evalUsd:201.95,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'SPDR UTILITIES',ticker:'XLU',type:'usd-stock',qty:24,buyKrw:1642599,evalUsd:46.74,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'MSFT (즉시매도)',ticker:'MSFT',type:'usd-stock',qty:5,buyKrw:3236301,evalUsd:368.54,evalKrw:null,action:'🔴즉시매도',actionClass:'tag-red'},
  {member:'임인숙',name:'GOOGL',ticker:'GOOGL',type:'usd-stock',qty:5,buyKrw:2236866,evalUsd:315.16,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'NVDA (이익실현검토)',ticker:'NVDA',type:'usd-stock',qty:3,buyKrw:545270,evalUsd:188.96,evalKrw:null,action:'이익실현검토',actionClass:'tag-orange'},
  {member:'임인숙',name:'UNH',ticker:'UNH',type:'usd-stock',qty:5,buyKrw:2206047,evalUsd:302.32,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'임인숙',name:'QQQ',ticker:'QQQ',type:'usd-stock',qty:1,buyKrw:765073,evalUsd:532.77,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'이재연',name:'GOOGL 25주',ticker:'GOOGL',type:'usd-stock',qty:25,buyKrw:8692344,evalUsd:315.70,evalKrw:null,action:'핵심유지',actionClass:'tag-green'},
  {member:'이재연',name:'MRVL 26주',ticker:'MRVL',type:'usd-stock',qty:26,buyKrw:3541026,evalUsd:127.86,evalKrw:null,action:'핵심유지',actionClass:'tag-green'},
  {member:'이재연',name:'MSFT 8주 (비중축소)',ticker:'MSFT',type:'usd-stock',qty:8,buyKrw:5635574,evalUsd:369.06,evalKrw:null,action:'🟠비중축소',actionClass:'tag-red'},
  {member:'이재연',name:'NVDA 23주',ticker:'NVDA',type:'usd-stock',qty:23,buyKrw:4075652,evalUsd:187.71,evalKrw:null,action:'핵심유지',actionClass:'tag-green'},
  {member:'이재연',name:'TSLA 2주',ticker:'TSLA',type:'usd-stock',qty:2,buyKrw:1114937,evalUsd:347.24,evalKrw:null,action:'유지',actionClass:'tag-orange'},
  {member:'이재연',name:'LLY 2주',ticker:'LLY',type:'usd-stock',qty:2,buyKrw:3171396,evalUsd:934.88,evalKrw:null,action:'유지',actionClass:'tag-orange'},
  {member:'이재연',name:'KODEX 코스닥150 (전환예정)',ticker:'—',type:'krw-etf',qty:78,buyKrw:1579580,evalKrw:1448850,evalUsd:null,action:'🔴즉시매도',actionClass:'tag-red'},
  {member:'이재현',name:'GOOGL 26주',ticker:'GOOGL',type:'usd-stock',qty:26,buyKrw:8908161,evalUsd:315.70,evalKrw:null,action:'핵심유지',actionClass:'tag-green'},
  {member:'이재현',name:'MRVL 49주',ticker:'MRVL',type:'usd-stock',qty:49,buyKrw:6685153,evalUsd:127.86,evalKrw:null,action:'핵심유지',actionClass:'tag-green'},
  {member:'이재현',name:'MSFT 11주 (비중축소)',ticker:'MSFT',type:'usd-stock',qty:11,buyKrw:6640645,evalUsd:369.07,evalKrw:null,action:'비중축소',actionClass:'tag-orange'},
  {member:'이재현',name:'NVDA 24주',ticker:'NVDA',type:'usd-stock',qty:24,buyKrw:4252164,evalUsd:187.71,evalKrw:null,action:'핵심유지',actionClass:'tag-green'},
  {member:'이재현',name:'TSM 20주',ticker:'TSM',type:'usd-stock',qty:20,buyKrw:10344152,evalUsd:368.80,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'이재현',name:'AVGO 4주',ticker:'AVGO',type:'usd-stock',qty:4,buyKrw:1898444,evalUsd:359.71,evalKrw:null,action:'유지',actionClass:'tag-green'},
  {member:'이재현',name:'RKLB 6주 (손절검토)',ticker:'RKLB',type:'usd-stock',qty:6,buyKrw:770867,evalUsd:67.72,evalKrw:null,action:'🟠손절검토',actionClass:'tag-red'},
  {member:'이재현',name:'TIGER 미국필라델피아AI반도체',ticker:'—',type:'krw-etf',qty:33,buyKrw:1035924,evalKrw:1111440,evalUsd:null,action:'유지',actionClass:'tag-green'},
  {member:'이재현',name:'KODEX 미국AI테크',ticker:'—',type:'krw-etf',qty:16,buyKrw:324624,evalKrw:340400,evalUsd:null,action:'유지',actionClass:'tag-green'},
];
