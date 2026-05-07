(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  let currentReport = null;

  function parseJson(value, fallback) {
    try { return JSON.parse(value); } catch { return fallback; }
  }

  function getStore(key, fallback) {
    return parseJson(localStorage.getItem(key), fallback);
  }

  function setText(id, value) {
    const el = $(id);
    if (el) el.textContent = value || '';
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[ch]));
  }

  function clean(value) {
    return String(value ?? '').trim();
  }

  function compact(items) {
    return [...new Set((items || []).map(clean).filter(Boolean))];
  }

  function studentKey(value) {
    return clean(value).replace(/[^\w가-힣-]/g, '_');
  }

  function getParamQuery() {
    const params = new URLSearchParams(location.search);
    return clean(params.get('studentId') || params.get('name') || params.get('q') || '');
  }

  function findStudent(query) {
    const students = getStore('ckl_students', []);
    const q = clean(query);
    if (!q) return null;
    const schoolNo = /^\d{5}$/.test(q)
      ? { grade: String(+q.slice(0, 1)), cls: String(+q.slice(1, 3)), num: String(+q.slice(3, 5)) }
      : null;

    return students.find((s) => {
      if (String(s.id) === q) return true;
      if (clean(s.name) === q) return true;
      if (!schoolNo) return false;
      return String(s.grade) === schoolNo.grade
        && String(+s.class || +s.cls) === String(+schoolNo.cls)
        && String(+s.num) === String(+schoolNo.num);
    }) || (q ? { name: q, id: /^\d+$/.test(q) ? q : '' } : null);
  }

  function studentNames(student, query) {
    return compact([student?.id, student?.name, query]);
  }

  function loadSnapshot(prefix, student, query) {
    const keys = studentNames(student, query).map(studentKey);
    for (const key of keys) {
      const byKey = getStore(`${prefix}_${key}`, null);
      if (byKey) return byKey;
      const byId = getStore(`${prefix}_id_${key}`, null);
      if (byId) return byId;
      const byName = getStore(`${prefix}_name_${key}`, null);
      if (byName) return byName;
    }
    return null;
  }

  function loadCareerTest(student) {
    const list = getStore('ckl_careertest', []);
    const ids = compact([student?.id, student?.studentId]);
    return list.find((r) => ids.includes(String(r.studentId))) || null;
  }

  function loadRecords(student) {
    const list = getStore('ckl_records', []);
    const ids = compact([student?.id, student?.studentId]);
    return list.filter((r) => ids.includes(String(r.studentId))).slice(-5).reverse();
  }

  function asLines(items, fallback) {
    const list = compact(items);
    if (!list.length) return `<p class="empty-note">${esc(fallback || '아직 연결된 자료가 없습니다.')}</p>`;
    return `<ul>${list.map((item) => `<li>${esc(item)}</li>`).join('')}</ul>`;
  }

  function sourceLabel(source) {
    return source.available ? `<span class="source-badge ok">${esc(source.label)}</span>` : `<span class="source-badge muted">${esc(source.label)} 대기</span>`;
  }

  function buildRecommendations(student, careerTest, gumsa, susi) {
    const interests = compact([
      student?.career,
      careerTest?.['희망학과'],
      careerTest?.['희망직업'],
      gumsa?.interest?.code1,
      gumsa?.personality?.dept,
      ...(gumsa?.aptitude?.jobs || []),
      ...(susi?.keywords || []),
    ]).slice(0, 8);

    const activities = interests.length
      ? interests.slice(0, 5).map((x) => `${x}와 연결되는 탐구 질문 1개를 정하고 활동-결과-성찰을 기록`)
      : ['희망 진로와 연결되는 교과 탐구 주제를 1개 정해 2주 단위로 기록'];

    return {
      activities,
      books: interests.slice(0, 3).map((x) => `${x} 관련 입문서 또는 전공 기초 도서 1권`),
      subjects: compact([...(susi?.subjects || []), careerTest?.['희망학과']]).slice(0, 5),
    };
  }

  function buildSections(report) {
    const { student, careerTest, gumsa, susi, records } = report;
    const rec = buildRecommendations(student, careerTest, gumsa, susi);
    const recentRecordLines = records.map((r) => `${r.date || ''} ${r.topic || r.type || '상담'}: ${r.summary || r.content || r.memo || ''}`);

    return [
      {
        title: '1. 학생 기본 정보',
        html: asLines([
          `이름: ${student?.name || '-'}`,
          student?.id ? `관리번호/학번: ${student.id}` : '',
          student?.grade ? `${student.grade}학년 ${student.class || student.cls || '-'}반 ${student.num || '-'}번` : '',
          student?.memo ? `메모: ${student.memo}` : '',
        ]),
      },
      {
        title: '2. 희망 진로와 관심사',
        html: asLines([
          student?.career && `학생 희망: ${student.career}`,
          student?.univ && `희망 대학/학과: ${student.univ}`,
          careerTest?.['희망학과'] && `검사 희망학과: ${careerTest['희망학과']}`,
          careerTest?.['희망직업'] && `검사 희망직업: ${careerTest['희망직업']}`,
          gumsa?.personality?.job && `성격유형 추천직업: ${gumsa.personality.job}`,
        ]),
      },
      {
        title: '3. 진로검사 요약',
        html: asLines([
          careerTest?.['흥미코드'] && `흥미코드: ${careerTest['흥미코드']}`,
          careerTest?.['가장높은흥미'] && `강점 흥미: ${careerTest['가장높은흥미']}`,
          careerTest?.['진로성숙도_구분'] && `진로성숙도: ${careerTest['진로성숙도_구분']}`,
          gumsa?.interest?.code1 && `검사 흥미 1순위: ${gumsa.interest.code1}`,
          ...(gumsa?.aptitude?.jobs || []).slice(0, 3).map((j) => `적성 추천: ${j}`),
        ]),
      },
      {
        title: '4. 생기부 핵심 키워드',
        html: asLines(susi?.keywords?.slice(0, 12), '수시 분석에서 학생부 PDF를 분석하면 핵심 키워드가 자동 반영됩니다.'),
      },
      {
        title: '5. 활동 강점',
        html: asLines([
          ...(susi?.strengths || []),
          susi?.dashboard?.avgDepth ? `탐구 깊이 평균: ${susi.dashboard.avgDepth}` : '',
          gumsa?.personality?.peer && `대인관계 특성: ${gumsa.personality.peer}`,
        ]),
      },
      {
        title: '6. 교과와 학업 맥락',
        html: asLines([
          ...(susi?.subjects || []).slice(0, 8).map((s) => `이수/언급 교과: ${s}`),
          susi?.dashboard?.total ? `분석 활동 수: ${susi.dashboard.total}건` : '',
        ]),
      },
      {
        title: '7. 상담 쟁점',
        html: asLines([
          ...(susi?.risks || []),
          ...(careerTest?.['노력할점'] ? [`검사 제안: ${careerTest['노력할점']}`] : []),
          ...recentRecordLines,
        ], '상담기록 또는 분석자료가 연결되면 주요 쟁점을 표시합니다.'),
      },
      {
        title: '8. 추천 활동/도서/교과',
        html: `
          <strong>활동</strong>${asLines(rec.activities)}
          <strong>도서</strong>${asLines(rec.books, '관심 진로 확정 후 관련 도서를 추천합니다.')}
          <strong>교과</strong>${asLines(rec.subjects, '학생부 교과 맥락이 연결되면 추천 교과가 표시됩니다.')}
        `,
      },
      {
        title: '9. 다음 상담 과제',
        html: asLines([
          careerTest?.['노력할점'],
          '희망 진로와 학생부 활동 사이의 연결 문장을 학생 본인 언어로 3문장 작성',
          '다음 상담 전 최근 활동 1개를 선택해 동기-과정-배운점으로 정리',
        ]),
      },
      {
        title: '10. 학부모 공유 요약',
        html: `<p>${esc(`${student?.name || '학생'}은 현재 ${student?.career || careerTest?.['희망직업'] || '희망 진로'} 방향을 중심으로 검사 결과와 학교 활동을 함께 점검할 필요가 있습니다. 강점 자료를 구체적인 활동 증거와 연결하고, 다음 상담에서는 진로 선택 이유와 학업 계획을 더 명료하게 정리하는 것을 권장합니다.`)}</p>`,
      },
    ];
  }

  function buildPrompt(report) {
    const plain = report.sections.map((s) => `${s.title}\n${s.text}`).join('\n\n');
    return [
      '다음 자료를 바탕으로 고등학생 진로진학 상담 리포트를 작성해 주세요.',
      '조건: 과장하지 말고, 학생에게 말하듯 따뜻하고 구체적으로 작성합니다. 개인정보는 최소한만 사용합니다.',
      '출력: 1) 핵심 요약 2) 강점 3) 보완점 4) 추천 활동 5) 다음 상담 질문 5개 6) 학부모 공유 문장',
      '',
      plain,
    ].join('\n');
  }

  function htmlToText(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent.replace(/\s+/g, ' ').trim();
  }

  function buildReport(query) {
    const student = findStudent(query);
    const careerTest = loadCareerTest(student);
    const records = loadRecords(student);
    const gumsa = loadSnapshot('ws_report_gumsa', student, query);
    const susi = loadSnapshot('ws_report_susi', student, query);
    const sources = [
      { label: '상담관리', available: !!student && (!!careerTest || records.length > 0 || !!student.id) },
      { label: '진로검사', available: !!gumsa || !!careerTest },
      { label: '생기부 분석', available: !!susi },
    ];
    const report = { query, student, careerTest, records, gumsa, susi, sources, createdAt: new Date().toISOString() };
    const sections = buildSections(report).map((section) => ({ ...section, text: htmlToText(section.html) }));
    report.sections = sections;
    report.prompt = buildPrompt(report);
    return report;
  }

  function render(report) {
    currentReport = report;
    const title = report.student?.name ? `${report.student.name} 통합 상담 리포트` : '통합 상담 리포트';
    document.title = title;
    setText('reportMeta', `${title} · 생성 ${new Date(report.createdAt).toLocaleString('ko-KR')}`);
    $('sourceBadges').innerHTML = report.sources.map(sourceLabel).join('');
    $('reportGrid').innerHTML = report.sections.map((section) => `
      <article class="report-section">
        <div class="section-head"><span class="section-num">${esc(section.title.split('.')[0])}</span>${esc(section.title.replace(/^\d+\.\s*/, ''))}</div>
        ${section.html}
      </article>
    `).join('');
    $('aiPrompt').value = report.prompt;
  }

  function loadFromInput() {
    const query = clean($('studentLookup').value);
    render(buildReport(query));
  }

  async function copyPrompt() {
    const text = $('aiPrompt').value;
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      alert('AI 프롬프트를 복사했습니다.');
    } catch {
      $('aiPrompt').select();
      document.execCommand('copy');
      alert('AI 프롬프트를 복사했습니다.');
    }
  }

  function exportJson() {
    if (!currentReport) return;
    const blob = new Blob([JSON.stringify(currentReport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `workstation-report-${studentKey(currentReport.student?.name || currentReport.query || 'student')}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function importJson() {
    $('jsonImportInput').click();
  }

  function initImport() {
    $('jsonImportInput').addEventListener('change', async (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      const data = parseJson(await file.text(), null);
      if (!data) return alert('JSON 파일을 읽을 수 없습니다.');
      const sections = (data.sections || []).map((s) => ({
        title: s.title || '섹션',
        html: s.html || `<p>${esc(s.text || '')}</p>`,
        text: s.text || htmlToText(s.html || ''),
      }));
      render({ ...data, sections, prompt: data.prompt || buildPrompt({ sections }), createdAt: data.createdAt || new Date().toISOString() });
      event.target.value = '';
    });
  }

  function init() {
    initImport();
    const query = getParamQuery();
    $('studentLookup').value = query;
    render(buildReport(query));
  }

  window.ReportPage = { init, loadFromInput, copyPrompt, exportJson, importJson };
  document.addEventListener('DOMContentLoaded', init);
}());
