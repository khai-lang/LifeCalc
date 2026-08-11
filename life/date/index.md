---
layout: "default"
title: "기념일·날짜 계산기 - D-Day, 날짜 더하기·빼기, 음력↔양력 변환 | LifeCalc"
description: "두 날짜 사이 D-Day 계산, 날짜 더하기·빼기, 음력 생일을 양력으로 변환하는 기능까지 한 곳에서 이용하세요. 대부분의 날짜 계산기가 지원하지 않는 음력↔양력 변환을 지원합니다."
permalink: "/life/date/"
---

<a class="skip-link" href="#dt-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/life/">생활 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">기념일·날짜 계산기</span>
</nav>

<section class="cp-hero">
  <h1>기념일·날짜 계산기</h1>
  <p class="cp-hero-desc">
    두 날짜 사이 <strong>D-Day</strong>를 계산하고, 기준일에서 <strong>날짜를 더하거나 빼고</strong>,
    <strong>음력 생일을 양력으로</strong>(또는 그 반대로) 변환할 수 있습니다. 대부분의 날짜 계산기가
    지원하지 않는 <strong>음력↔양력 변환</strong>까지 한 곳에서 확인하세요.
  </p>
</section>

<section id="dt-calculator" class="vc-card">
  <h2>날짜 계산</h2>

  <div class="vc-tabs">
    <button type="button" class="vc-tab active" data-tab="dday">D-Day 계산</button>
    <button type="button" class="vc-tab" data-tab="add">날짜 더하기·빼기</button>
    <button type="button" class="vc-tab" data-tab="lunar2solar">음력→양력</button>
    <button type="button" class="vc-tab" data-tab="solar2lunar">양력→음력</button>
  </div>

  <!-- D-Day -->
  <div class="vc-panel active" id="dt-panel-dday">
    <div class="vc-field">
      <label for="dt-start">시작일</label>
      <input type="date" id="dt-start">
    </div>
    <div class="vc-field">
      <label for="dt-end">종료일 (기념일·목표일)</label>
      <input type="date" id="dt-end">
    </div>
    <div class="vc-checkline">
      <input type="checkbox" id="dt-include" checked>
      <label for="dt-include">시작일을 1일째로 포함해서 계산 (예: 사귄 날부터 며칠째)</label>
    </div>
    <div class="vc-toolbar">
      <button type="button" class="vc-btn vc-btn-main" onclick="calcDday()">D-Day 계산하기</button>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="dt-dday-table" style="display:none">
        <thead><tr><th>구분</th><th>결과</th></tr></thead>
        <tbody id="dt-dday-body"></tbody>
      </table>
    </div>
  </div>

  <!-- 날짜 더하기/빼기 -->
  <div class="vc-panel" id="dt-panel-add">
    <div class="vc-field">
      <label for="dt-base">기준일</label>
      <input type="date" id="dt-base">
    </div>
    <div class="vc-field">
      <label for="dt-days">일수</label>
      <input type="number" id="dt-days" placeholder="예: 100" min="0">
    </div>
    <div class="vc-field">
      <label for="dt-direction">계산</label>
      <select id="dt-direction">
        <option value="add">더하기 (+)</option>
        <option value="sub">빼기 (−)</option>
      </select>
    </div>
    <div class="vc-toolbar">
      <button type="button" class="vc-btn vc-btn-main" onclick="calcAddDays()">계산하기</button>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="dt-add-table" style="display:none">
        <thead><tr><th>구분</th><th>결과</th></tr></thead>
        <tbody id="dt-add-body"></tbody>
      </table>
    </div>
  </div>

  <!-- 음력 -> 양력 -->
  <div class="vc-panel" id="dt-panel-lunar2solar">
    <p class="vc-note">음력 생일이나 기념일을 입력하면 올해부터 4년 뒤까지 양력 날짜를 계산해 보여줍니다.</p>
    <div class="vc-row3">
      <div class="vc-field">
        <label for="dt-lunar-year">음력 연도</label>
        <input type="number" id="dt-lunar-year" placeholder="예: 1990">
      </div>
      <div class="vc-field">
        <label for="dt-lunar-month">음력 월</label>
        <input type="number" id="dt-lunar-month" placeholder="1~12" min="1" max="12">
      </div>
      <div class="vc-field">
        <label for="dt-lunar-day">음력 일</label>
        <input type="number" id="dt-lunar-day" placeholder="1~30" min="1" max="30">
      </div>
    </div>
    <div class="vc-checkline">
      <input type="checkbox" id="dt-lunar-leap">
      <label for="dt-lunar-leap">윤달(閏月)입니다</label>
    </div>
    <div class="vc-toolbar">
      <button type="button" class="vc-btn vc-btn-main" onclick="calcLunarToSolar()">양력으로 변환하기</button>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="dt-l2s-table" style="display:none">
        <thead><tr><th>음력 기준 연도</th><th>양력 날짜</th><th>D-Day</th></tr></thead>
        <tbody id="dt-l2s-body"></tbody>
      </table>
    </div>
  </div>

  <!-- 양력 -> 음력 -->
  <div class="vc-panel" id="dt-panel-solar2lunar">
    <div class="vc-field">
      <label for="dt-solar-date">양력 날짜</label>
      <input type="date" id="dt-solar-date">
    </div>
    <div class="vc-toolbar">
      <button type="button" class="vc-btn vc-btn-main" onclick="calcSolarToLunar()">음력으로 변환하기</button>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="dt-s2l-table" style="display:none">
        <thead><tr><th>구분</th><th>결과</th></tr></thead>
        <tbody id="dt-s2l-body"></tbody>
      </table>
    </div>
  </div>

  <div class="cp-callout">
    ✅ 음력 변환은 <strong>korean-lunar-calendar</strong> 라이브러리(한국천문연구원 KARI 기준 데이터)를
    사용하며, <strong>서기 1000년~2050년</strong> 범위를 지원합니다. 이 범위를 벗어난 날짜는 계산되지
    않습니다.
  </div>
</section>

<!-- AD SLOT 1: 계산기 직후 -->
<!-- ⚠️ 실제 배포 전 data-ad-slot 값을 이 페이지 전용 슬롯 ID로 교체하세요 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="REPLACE_WITH_AD_SLOT_ID"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="vc-card vc-card-light">
  <h2>왜 음력 기념일 계산이 필요한가요?</h2>
  <p>
    한국에서는 여전히 많은 어르신들이 생신을 음력으로 챙기고, 설·추석 같은 명절이나 제사도 음력을
    기준으로 합니다. 문제는 음력 날짜가 매년 양력으로 다른 날짜에 대응된다는 점입니다. 예를 들어
    같은 음력 1월 1일(설날)이라도 어느 해는 양력 1월, 어느 해는 양력 2월이 될 수 있습니다. 그래서
    "부모님 생신이 음력 O월 O일"이라는 정보만으로는 올해 양력으로 며칠인지 바로 알기 어렵습니다.
  </p>
  <p>
    이 계산기는 <strong>한국천문연구원(KARI)의 음양력 변환 표준</strong>을 따르는 라이브러리를 사용해,
    음력 날짜를 정확한 양력 날짜로 변환해 드립니다. 중국 음력과 한국 음력은 윤달이 들어가는 위치가
    다른 경우가 있어, 반드시 한국 기준 데이터를 사용하는 것이 중요합니다.
  </p>
</section>

<!-- COUPANG PARTNERS: 아래 href="COUPANG_PARTNERS_LINK_*"를 실제 쿠팡파트너스 딥링크로 교체하세요 -->
<section class="vc-card vc-card-light vc-recommend">
  <h2>함께 보면 좋은 자료</h2>
  <p class="vc-recommend-desc">기념일과 명절을 챙길 때 도움이 되는 상품입니다.</p>
  <div class="vc-coupang-grid">
    <a class="vc-coupang-card" href="COUPANG_PARTNERS_LINK_1" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🎁</div>
      <div class="vc-coupang-title">기념일 선물 세트</div>
      <div class="vc-coupang-desc">생신·기념일에 어울리는 인기 선물</div>
    </a>
    <a class="vc-coupang-card" href="COUPANG_PARTNERS_LINK_2" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">📅</div>
      <div class="vc-coupang-title">가족 일정 관리 다이어리</div>
      <div class="vc-coupang-desc">음력·양력 기념일을 함께 기록하는 다이어리</div>
    </a>
    <a class="vc-coupang-card" href="COUPANG_PARTNERS_LINK_3" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🍰</div>
      <div class="vc-coupang-title">기념일 케이크·꽃 배달</div>
      <div class="vc-coupang-desc">D-day에 맞춰 미리 준비하는 축하 선물</div>
    </a>
  </div>
  <p class="vc-coupang-disclosure">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
</section>

<section class="vc-card">
  <h2>관련 계산기</h2>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/life/age/">
      <span class="vc-related-title">만나이 계산기</span>
      <span class="vc-related-desc">만/세는/연나이 비교, 띠, D-day</span>
    </a>
    <a class="vc-related-card" href="/family/baegil/">
      <span class="vc-related-title">백일·돌 계산기</span>
      <span class="vc-related-desc">삼칠일부터 백일·1000일·첫돌까지</span>
    </a>
    <a class="vc-related-card" href="/family/baby-days/">
      <span class="vc-related-title">아기 개월수 계산기</span>
      <span class="vc-related-desc">생후 며칠·몇 개월 자동 계산</span>
    </a>
    <a class="vc-related-card" href="/family/due-date/">
      <span class="vc-related-title">출산 예정일 계산기</span>
      <span class="vc-related-desc">LMP·배란일·IVF 이식일 기준 예정일</span>
    </a>
  </div>
</section>

<section class="vc-card" id="dt-faq">
  <h2>자주 묻는 질문</h2>

  <div class="vc-faq-item">
    <h3>이 계산기는 어떤 음력 데이터를 사용하나요?</h3>
    <p>한국천문연구원(KARI)의 음양력 변환 표준 데이터를 사용합니다. 중국 음력과 한국 음력은 윤달이
    들어가는 위치가 다른 경우가 있어, 한국 기준 데이터를 사용하는 것이 정확합니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>D-Day 계산에서 "시작일 포함"은 언제 체크해야 하나요?</h3>
    <p>사귄 날, 결혼한 날처럼 그날부터 며칠째인지 세는 경우(예: "만난 지 100일째") 포함 옵션을
    체크하세요. 두 날짜 사이의 순수한 간격(예: "몇 년 몇 개월 지났는지")을 알고 싶다면 체크를
    해제하세요.</p>
  </div>
  <div class="vc-faq-item">
    <h3>윤달에 태어난 경우 음력 생일은 어떻게 계산하나요?</h3>
    <p>윤달 체크박스를 선택하면 해당 연도에 실제로 윤달이 있었는지 확인해 계산합니다. 매년 같은 달에
    윤달이 있는 것은 아니므로, 윤달 생일인 경우 그 해에 윤달이 없으면 평달 같은 월로 계산하는 것이
    일반적인 관례입니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>1000년 이전이나 2050년 이후 날짜도 변환할 수 있나요?</h3>
    <p>아니요. 이 계산기가 사용하는 라이브러리는 음력 1000년~2050년, 양력 1000년~2050년 범위만
    지원합니다. 이 범위를 벗어나면 변환할 수 없습니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>모바일에서도 사용할 수 있나요?</h3>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </div>
</section>

<!-- AD SLOT 2: FAQ 하단 -->
<!-- ⚠️ 실제 배포 전 data-ad-slot 값을 이 페이지 전용 슬롯 ID로 교체하세요 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="REPLACE_WITH_AD_SLOT_ID"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 페이지 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .cp-breadcrumb { font-size: 0.85rem; color: #5b6470; margin-bottom: 1rem; }
  .cp-breadcrumb a { color: #5b6470; text-decoration: none; }
  .cp-breadcrumb a:hover { text-decoration: underline; }

  .cp-hero {
    background: linear-gradient(135deg, #f5ebdf, #e6d8c9);
    border: 1px solid #e3d4c5;
    border-radius: 22px;
    padding: 28px;
    margin-bottom: 24px;
    box-shadow: 0 12px 28px rgba(0,0,0,.04);
  }
  .cp-hero h1 { margin-top: 0; color: #13293d; }
  .cp-hero-desc { line-height: 1.7; color: #5b6470; }

  .vc-card{
    background:#f5ebdf; border:1px solid #e2d2c0; border-radius:22px;
    padding:24px 20px; box-shadow:0 12px 28px rgba(0,0,0,.04); margin-bottom:26px;
  }
  .vc-card-light { background: #fff; border-color: #e3d4c5; }
  .vc-card h2 { border-left: 4px solid #8c7355; padding-left: 10px; color:#13293d; }
  .vc-note { font-size: 0.85rem; color: #785a43; margin-bottom:12px; }

  .vc-tabs { display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px; }
  .vc-tab {
    border:1px solid #e2d2c0; background:#fff; color:#785a43; border-radius:10px;
    padding:9px 16px; cursor:pointer; font-weight:600; font-size:0.9rem;
  }
  .vc-tab.active { background:#e96f00; border-color:#e96f00; color:#fff; }
  .vc-panel { display:none; }
  .vc-panel.active { display:block; }

  .vc-field { margin-bottom: 14px; }
  .vc-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #13293d; }
  .vc-field input, .vc-field select {
    width: 100%; padding: 10px 12px; border: 1px solid #e2d2c0;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box; background:#fff;
  }
  .vc-row3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; }
  @media (max-width:560px){ .vc-row3{ grid-template-columns:1fr; } }

  .vc-checkline { display:flex; align-items:center; gap:8px; margin-bottom:14px; }
  .vc-checkline input { width:18px; height:18px; accent-color:#e96f00; }
  .vc-checkline label { font-weight:500; color:#13293d; margin:0; }

  .vc-toolbar { margin: 8px 0 16px; }
  .vc-btn {
    padding: 10px 18px; border-radius: 10px; border: 1px solid #e2d2c0;
    background: #fff; color: #785a43; font-weight: 600; cursor: pointer;
  }
  .vc-btn-main { background: #e96f00; color: #fff; border-color: #e96f00; }
  .vc-btn-main:hover { background: #ff7a00; border-color: #ff7a00; }

  .cp-callout {
    background:#cfdfe8; border:1px solid #1f5c7a; color:#174d68; border-radius:12px;
    padding:14px 16px; font-size:0.92rem; line-height:1.6; margin-top:8px;
  }

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .vc-table { width:100%; min-width:420px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .vc-table td.dt-main { font-weight:800; color:#e96f00; }
  .vc-table tr.dt-row-next td { background:#fdeadb; color:#e96f00; font-weight:800; }

  .vc-recommend-desc { font-size: 0.9rem; color: #785a43; }

  .vc-coupang-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-top:14px; }
  .vc-coupang-card {
    display:flex; flex-direction:column; gap:6px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:14px; padding:16px; text-decoration:none; color:inherit; transition:box-shadow .15s;
  }
  .vc-coupang-card:hover { box-shadow:0 4px 14px rgba(19,41,61,0.12); }
  .vc-coupang-thumb { font-size:2rem; line-height:1; }
  .vc-coupang-title { font-weight:700; color:#13293d; }
  .vc-coupang-desc { font-size:0.85rem; color:#785a43; line-height:1.5; }
  .vc-coupang-disclosure { font-size:0.78rem; color:#a99b89; margin-top:12px; }

  .vc-related-grid { display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; }
  .vc-related-card {
    display:flex; flex-direction:column; gap:4px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:12px; padding:14px 16px; text-decoration:none;
  }
  .vc-related-title { color:#e96f00; font-weight:700; }
  .vc-related-desc { font-size:0.85rem; color:#785a43; }
  .vc-related-card:hover .vc-related-title { text-decoration:underline; }

  .vc-faq-item { margin-bottom: 16px; }
  .vc-faq-item h3 { margin-bottom: 6px; font-size: 1rem; color: #13293d; margin-top:0; }
  .vc-faq-item p { margin: 0; line-height: 1.6; color: #785a43; }

  @media (max-width: 640px){
    .vc-coupang-grid { grid-template-columns:1fr; }
    .vc-related-grid { grid-template-columns:1fr; }
  }
</style>

<!-- 한국천문연구원(KARI) 기준 음양력 변환 라이브러리, 오프라인 동작, 1000~2050년 지원 -->
<script src="https://cdn.jsdelivr.net/npm/korean-lunar-calendar/dist/korean-lunar-calendar.min.js"></script>

<script>
(function(){
  const WD = ['일','월','화','수','목','금','토'];

  function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate() + n); return r; }
  function todayOnly(){
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }
  function diffDays(a, b){ return Math.round((b - a) / 86400000); }
  function ddayLabel(ref, target){
    const n = diffDays(ref, target);
    if(n === 0) return 'D-DAY';
    return n > 0 ? `D-${n}` : `D+${Math.abs(n)}`;
  }
  function fmtShort(d){
    return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}(${WD[d.getDay()]})`;
  }
  function parseDateInput(id){
    const v = document.getElementById(id).value;
    if(!v) return null;
    const [y, m, d] = v.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  // 탭 전환
  document.querySelectorAll('.vc-tab').forEach(function(tab){
    tab.addEventListener('click', function(){
      document.querySelectorAll('.vc-tab').forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.vc-panel').forEach(function(p){ p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('dt-panel-' + tab.dataset.tab).classList.add('active');
    });
  });

  // D-Day 계산
  window.calcDday = function(){
    const start = parseDateInput('dt-start');
    const end = parseDateInput('dt-end');
    if (!start || !end){ alert('시작일과 종료일을 모두 입력해 주세요.'); return; }
    const includeStart = document.getElementById('dt-include').checked;

    const rawDays = diffDays(start, end);
    const days = includeStart ? (rawDays >= 0 ? rawDays + 1 : rawDays - 1) : rawDays;
    const weeks = Math.trunc(days / 7);
    const absDays = Math.abs(rawDays);
    const years = Math.floor(absDays / 365);
    const remMonths = Math.floor((absDays % 365) / 30);

    document.getElementById('dt-dday-body').innerHTML = `
      <tr><td>일수</td><td class="dt-main">${days.toLocaleString()}일${includeStart ? ' (시작일 포함)' : ''}</td></tr>
      <tr><td>주 단위</td><td>약 ${weeks.toLocaleString()}주</td></tr>
      <tr><td>기간 (대략)</td><td>약 ${years}년 ${remMonths}개월</td></tr>
    `;
    document.getElementById('dt-dday-table').style.display = '';
  };

  // 날짜 더하기/빼기
  window.calcAddDays = function(){
    const base = parseDateInput('dt-base');
    const n = Number(document.getElementById('dt-days').value);
    const dir = document.getElementById('dt-direction').value;
    if (!base || !document.getElementById('dt-days').value){ alert('기준일과 일수를 입력해 주세요.'); return; }

    const result = addDays(base, dir === 'add' ? n : -n);
    document.getElementById('dt-add-body').innerHTML = `
      <tr><td>계산 결과</td><td class="dt-main">${fmtShort(result)}</td></tr>
      <tr><td>오늘까지 D-Day</td><td>${ddayLabel(todayOnly(), result)}</td></tr>
    `;
    document.getElementById('dt-add-table').style.display = '';
  };

  function ensureLunarLib(){
    if (typeof KoreanLunarCalendar === 'undefined'){
      alert('음력 변환 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인하고 새로고침해 주세요.');
      return false;
    }
    return true;
  }

  // 음력 -> 양력 (올해부터 4년 뒤까지)
  window.calcLunarToSolar = function(){
    if (!ensureLunarLib()) return;
    const ly = Number(document.getElementById('dt-lunar-year').value);
    const lm = Number(document.getElementById('dt-lunar-month').value);
    const ld = Number(document.getElementById('dt-lunar-day').value);
    const isLeap = document.getElementById('dt-lunar-leap').checked;
    if (!ly || !lm || !ld){ alert('음력 연·월·일을 모두 입력해 주세요.'); return; }

    const today = todayOnly();
    const thisYear = today.getFullYear();
    let rows = '';
    let nextFound = false;

    for (let y = thisYear; y <= thisYear + 4; y++){
      const cal = new KoreanLunarCalendar();
      const ok = cal.setLunarDate(y, lm, ld, isLeap);
      if (!ok){
        rows += `<tr><td>${y}년 (음력 ${lm}월 ${ld}일${isLeap ? ' 윤달' : ''})</td><td colspan="2">해당 연도에는 이 음력 날짜가 없습니다</td></tr>`;
        continue;
      }
      const s = cal.getSolarCalendar();
      const solarDate = new Date(s.year, s.month - 1, s.day);
      const rowClass = (!nextFound && solarDate >= today) ? 'dt-row-next' : '';
      if (rowClass) nextFound = true;
      rows += `<tr class="${rowClass}"><td>${y}년 (음력 ${lm}월 ${ld}일)</td><td>${fmtShort(solarDate)}</td><td>${ddayLabel(today, solarDate)}</td></tr>`;
    }

    document.getElementById('dt-l2s-body').innerHTML = rows;
    document.getElementById('dt-l2s-table').style.display = '';
  };

  // 양력 -> 음력
  window.calcSolarToLunar = function(){
    if (!ensureLunarLib()) return;
    const solar = parseDateInput('dt-solar-date');
    if (!solar){ alert('양력 날짜를 입력해 주세요.'); return; }

    const cal = new KoreanLunarCalendar();
    const ok = cal.setSolarDate(solar.getFullYear(), solar.getMonth() + 1, solar.getDate());
    if (!ok){
      document.getElementById('dt-s2l-body').innerHTML = `<tr><td colspan="2">지원 범위(서기 1000년~2050년)를 벗어난 날짜입니다.</td></tr>`;
      document.getElementById('dt-s2l-table').style.display = '';
      return;
    }
    const l = cal.getLunarCalendar();
    const gapja = cal.getKoreanGapja();

    document.getElementById('dt-s2l-body').innerHTML = `
      <tr><td>음력 날짜</td><td class="dt-main">${l.year}년 ${l.month}월 ${l.day}일${l.intercalation ? ' (윤달)' : ''}</td></tr>
      <tr><td>간지(년/월/일)</td><td>${gapja.year} ${gapja.month} ${gapja.day}</td></tr>
    `;
    document.getElementById('dt-s2l-table').style.display = '';
  };

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ad-box').forEach(ad => ad.style.minHeight = '120px');
  });
})();
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "생활 계산기", "item": "https://calculator.khaistory.com/life/"},
    {"@type": "ListItem", "position": 3, "name": "기념일·날짜 계산기", "item": "https://calculator.khaistory.com/life/date/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "이 계산기는 어떤 음력 데이터를 사용하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "한국천문연구원(KARI)의 음양력 변환 표준 데이터를 사용하며, 한국과 중국 음력의 윤달 차이를 구분해 정확하게 계산합니다."}
    },
    {
      "@type": "Question",
      "name": "D-Day 계산에서 시작일 포함은 언제 체크해야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "그날부터 며칠째인지 세는 경우(예: 만난 지 100일째) 포함 옵션을 체크하고, 순수 간격만 알고 싶다면 해제하세요."}
    },
    {
      "@type": "Question",
      "name": "윤달에 태어난 경우 음력 생일은 어떻게 계산하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "매년 같은 달에 윤달이 있는 것은 아니므로, 해당 연도에 윤달이 없으면 평달 같은 월로 계산하는 것이 일반적인 관례입니다."}
    },
    {
      "@type": "Question",
      "name": "1000년 이전이나 2050년 이후 날짜도 변환할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "아니요. 음력 1000년~2050년, 양력 1000년~2050년 범위만 지원합니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
