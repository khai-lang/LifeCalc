---
layout: "default"
title: "날짜 계산기 2026 - D-Day·날짜 더하기빼기·커플 기념일(100일·1000일·주년) 자동 계산 | LifeCalc"
description: "두 날짜 사이 일수와 D-Day는 물론, 특정 날짜로부터 N일 후/전 날짜, 사귄 날부터 100일·200일·300일·1000일·N주년 기념일까지 한 번에 계산합니다. 당일 포함/제외 옵션 지원."
permalink: "/life/date/"
---

<a class="skip-link" href="#dt-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/life/">생활 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">기념일·날짜 계산기</span>
</nav>

<section class="cp-hero">
  <h2>날짜 계산기 2026</h2>
  <p class="cp-hero-desc">
    <strong>두 날짜 사이 일수·D-Day</strong>는 물론, "오늘부터 100일 후는 며칠일까?" 같은
    <strong>날짜 더하기·빼기</strong>, 사귄 날이나 시작일을 넣으면 <strong>100일·200일·300일·1000일·
    N주년</strong> 기념일을 한 번에 나열해주는 <strong>기념일 자동 계산</strong>까지, 날짜와 관련된
    계산을 이 페이지 하나로 끝낼 수 있습니다. 시험·마감처럼 당일을 빼고 세는 방식과 기념일·아기
    백일처럼 당일을 포함해 세는 방식을 선택할 수 있어 결과가 하루씩 어긋나는 문제도 없습니다.
  </p>
</section>

<section id="dt-calculator" class="dt-card">
  <div class="dt-tabs">
    <button type="button" class="dt-tab active" data-tab="diff" onclick="setDtTab(this)">두 날짜 사이 · D-Day</button>
    <button type="button" class="dt-tab" data-tab="add" onclick="setDtTab(this)">날짜 더하기·빼기</button>
    <button type="button" class="dt-tab" data-tab="anniv" onclick="setDtTab(this)">기념일 자동 계산</button>
  </div>

  <!-- 탭 1: 두 날짜 사이 / D-Day -->
  <div class="dt-panel active" id="dt-panel-diff">
    <p class="dt-sub-desc">시작 날짜와 종료 날짜를 입력하세요. 종료 날짜를 비워두면 오늘 날짜 기준 D-Day를 계산합니다.</p>
    <div class="dt-grid-2">
      <div class="dt-field">
        <label for="dt-diff-start">시작 날짜</label>
        <input type="date" id="dt-diff-start">
      </div>
      <div class="dt-field">
        <label for="dt-diff-end">종료 날짜 (비워두면 오늘)</label>
        <input type="date" id="dt-diff-end">
      </div>
    </div>
    <label class="dt-checkbox">
      <input type="checkbox" id="dt-diff-inclusive">
      시작일 포함해서 세기 (기념일·아기 백일 방식 — 시험/마감이면 체크 해제)
    </label>
    <div class="dt-toolbar">
      <button type="button" class="dt-btn dt-btn-main" onclick="calcDtDiff()">계산하기</button>
    </div>
    <ul class="dt-result" id="dt-diff-result"></ul>
  </div>

  <!-- 탭 2: 날짜 더하기/빼기 -->
  <div class="dt-panel" id="dt-panel-add" style="display:none">
    <p class="dt-sub-desc">기준 날짜에 원하는 만큼 더하거나 빼서 결과 날짜와 요일을 확인하세요.</p>
    <div class="dt-grid-2">
      <div class="dt-field">
        <label for="dt-add-base">기준 날짜</label>
        <input type="date" id="dt-add-base">
      </div>
      <div class="dt-field">
        <label for="dt-add-amount">더하거나 뺄 값 (빼려면 음수, 예: -30)</label>
        <input type="text" inputmode="numeric" id="dt-add-amount" placeholder="예: 100">
      </div>
    </div>
    <div class="dt-tabs dt-tabs-sm">
      <button type="button" class="dt-tab active" data-unit="day" onclick="setDtUnit(this)">일</button>
      <button type="button" class="dt-tab" data-unit="week" onclick="setDtUnit(this)">주</button>
      <button type="button" class="dt-tab" data-unit="month" onclick="setDtUnit(this)">개월</button>
      <button type="button" class="dt-tab" data-unit="year" onclick="setDtUnit(this)">년</button>
    </div>
    <div class="dt-toolbar">
      <button type="button" class="dt-btn dt-btn-main" onclick="calcDtAdd()">계산하기</button>
    </div>
    <ul class="dt-result" id="dt-add-result"></ul>
  </div>

  <!-- 탭 3: 기념일 자동 계산 -->
  <div class="dt-panel" id="dt-panel-anniv" style="display:none">
    <p class="dt-sub-desc">사귀기 시작한 날, 결혼한 날, 또는 어떤 시작일이든 입력하면 주요 기념일을 자동으로 나열합니다. (시작일을 1일째로 계산합니다)</p>
    <div class="dt-field">
      <label for="dt-anniv-start">시작 날짜</label>
      <input type="date" id="dt-anniv-start">
    </div>
    <div class="dt-toolbar">
      <button type="button" class="dt-btn dt-btn-main" onclick="calcDtAnniv()">기념일 계산하기</button>
    </div>
    <div class="dt-anniv-legend">
      <span class="dt-badge dt-badge-past">지난 기념일</span>
      <span class="dt-badge dt-badge-next">가장 가까운 기념일</span>
      <span class="dt-badge dt-badge-upcoming">다가오는 기념일</span>
    </div>
    <div class="table-wrap">
      <table class="dt-table" id="dt-anniv-table" style="display:none">
        <thead><tr><th>기념일</th><th>날짜</th><th>요일</th><th>D-Day</th></tr></thead>
        <tbody id="dt-anniv-body"></tbody>
      </table>
    </div>
  </div>
</section>

<!-- AD SLOT 1: 계산기 직후, 활용 가이드 진입 전 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="dt-card dt-card-light">
  <h3>날짜 계산 결과가 계산기마다 하루씩 다른 이유</h3>
  <p>
    같은 두 날짜를 넣었는데 계산기마다 결과가 하루씩 다르다면, <strong>시작일을 포함하는지 여부</strong>가
    다르기 때문입니다. 시험이나 마감일처럼 "앞으로 며칠 남았는지"를 셀 때는 보통 오늘(당일)을 포함하지
    않고 순수하게 날짜 차이만 계산합니다. 반면 커플 기념일이나 아기 백일처럼 "시작일을 1일째"로 세는
    관습이 있는 경우에는 하루를 더해야 실제로 사람들이 말하는 "100일"과 맞아떨어집니다.
  </p>
  <table class="dt-table">
    <thead><tr><th>상황</th><th>세는 방식</th><th>예시</th></tr></thead>
    <tbody>
      <tr><td>시험·마감·디데이</td><td>당일 제외 (순수 일수 차이)</td><td>오늘부터 시험까지 30일 남음</td></tr>
      <tr><td>커플 기념일·아기 백일</td><td>당일 포함 (시작일 = 1일째)</td><td>사귄 날 + 99일 = 100일째</td></tr>
    </tbody>
  </table>
  <p>
    <strong>주년(周年)</strong>은 날짜 수를 세는 대신, 시작일과 같은 월·일이 돌아오는 날로 계산합니다.
    2월 29일처럼 4년에 한 번뿐인 날짜에 시작한 경우, 평년에는 2월 28일을 기준으로 표시합니다.
  </p>
  <p class="dt-note">
    ※ 이 계산기는 양력(그레고리력) 기준입니다. 음력 생일·제사일 변환은 지원하지 않습니다. 만 나이가
    궁금하다면 <a href="/life/age/">만나이 계산기</a>를 함께 활용해 보세요.
  </p>
</section>

<!-- COUPANG PARTNERS: 실제 제휴 링크는 각 카드의 href="COUPANG_PARTNERS_LINK_*" 자리에 쿠팡파트너스 딥링크로 교체하세요. -->
<section class="dt-card dt-card-light dt-recommend">
  <h3>함께 보면 좋은 자료</h3>
  <p class="dt-recommend-desc">다가오는 기념일을 챙기고 기록하는 데 도움이 되는 상품입니다.</p>
  <div class="dt-coupang-grid">
    <a class="dt-coupang-card" href="COUPANG_PARTNERS_LINK_1" target="_blank" rel="noopener sponsored">
      <div class="dt-coupang-thumb">📅</div>
      <div class="dt-coupang-title">위클리·데일리 다이어리</div>
      <div class="dt-coupang-desc">기념일과 일정을 손으로 기록하는 플래너</div>
    </a>
    <a class="dt-coupang-card" href="COUPANG_PARTNERS_LINK_2" target="_blank" rel="noopener sponsored">
      <div class="dt-coupang-thumb">🎁</div>
      <div class="dt-coupang-title">기념일 선물·이벤트 용품</div>
      <div class="dt-coupang-desc">100일·주년에 어울리는 선물 아이디어</div>
    </a>
    <a class="dt-coupang-card" href="COUPANG_PARTNERS_LINK_3" target="_blank" rel="noopener sponsored">
      <div class="dt-coupang-thumb">🖼️</div>
      <div class="dt-coupang-title">포토 캘린더·액자</div>
      <div class="dt-coupang-desc">지나온 기념일을 사진으로 남기는 캘린더</div>
    </a>
  </div>
  <p class="dt-coupang-disclosure">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
</section>

<section class="dt-card">
  <h3>관련 계산기</h3>
  <div class="dt-related-grid">
    <a class="dt-related-card" href="/life/age/">
      <span class="dt-related-title">만나이 계산기</span>
      <span class="dt-related-desc">생년월일로 만 나이를 정확하게 계산</span>
    </a>
    <a class="dt-related-card" href="/family/due-date/">
      <span class="dt-related-title">출산 예정일 계산기</span>
      <span class="dt-related-desc">마지막 생리일·임신 주수로 예정일 계산</span>
    </a>
    <a class="dt-related-card" href="/family/baby-days/">
      <span class="dt-related-title">아이 생후 N일/개월</span>
      <span class="dt-related-desc">태어난 날부터 오늘까지 며칠·몇 개월인지 확인</span>
    </a>
    <a class="dt-related-card" href="/family/vaccine/">
      <span class="dt-related-title">예방접종 일정 계산기</span>
      <span class="dt-related-desc">생년월일 기준 접종 시기를 자동 안내</span>
    </a>
  </div>
</section>

<section class="dt-card" id="dt-faq">
  <h3>자주 묻는 질문</h3>

  <div class="dt-faq-item">
    <h4>100일은 왜 시작일에서 99일 뒤인가요?</h4>
    <p>사귄 날을 1일째로 세는 방식이 한국 커플 문화의 관습이기 때문입니다. 시작일을 1일로 포함해서
    세면, 100일째 되는 날은 시작일에 99일을 더한 날짜가 됩니다. 이 계산기의 "기념일 자동 계산" 탭은
    이 방식을 기본으로 사용합니다.</p>
  </div>
  <div class="dt-faq-item">
    <h4>D-Day는 당일을 어떻게 표시하나요?</h4>
    <p>목표일 당일은 <b>D-DAY</b>, 목표일이 아직 오지 않았다면 남은 일수만큼 <b>D-n</b>, 이미
    지났다면 지난 일수만큼 <b>D+n</b>으로 표시합니다.</p>
  </div>
  <div class="dt-faq-item">
    <h4>2월 29일에 시작한 기념일은 주년을 어떻게 계산하나요?</h4>
    <p>평년(윤년이 아닌 해)에는 2월 29일이 없으므로, 이 계산기는 2월 28일을 그해의 주년 날짜로
    표시합니다.</p>
  </div>
  <div class="dt-faq-item">
    <h4>음력 생일이나 제사일도 계산할 수 있나요?</h4>
    <p>아니요, 이 계산기는 양력(그레고리력) 기준으로만 계산합니다. 음력 날짜 변환은 지원하지
    않습니다.</p>
  </div>
  <div class="dt-faq-item">
    <h4>모바일에서도 사용할 수 있나요?</h4>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </div>
</section>

<!-- AD SLOT 2: FAQ 하단, 페이지 최하단 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

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

  .dt-card{
    background:#f5ebdf; border:1px solid #e2d2c0; border-radius:22px;
    padding:24px 20px; box-shadow:0 12px 28px rgba(0,0,0,.04); margin-bottom:26px;
  }
  .dt-card-light { background: #fff; border-color: #e3d4c5; }
  .dt-card h3 { border-left: 4px solid #8c7355; padding-left: 10px; color:#13293d; }
  .dt-sub-desc { color: #785a43; font-size: 0.92rem; margin-top: -4px; margin-bottom:16px; }
  .dt-note { font-size: 0.85rem; color: #785a43; }

  .dt-tabs { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
  .dt-tabs-sm { margin: 10px 0 4px; }
  .dt-tab {
    padding: 10px 16px; border-radius: 10px; border: 1px solid #e2d2c0;
    background: #fff; color: #785a43; font-weight: 600; cursor: pointer; font-size: 0.9rem;
  }
  .dt-tab.active { background: #e96f00; color: #fff; border-color: #e96f00; }
  .dt-tab:hover:not(.active) { border-color: #e96f00; color:#e96f00; }

  .dt-panel.active, .dt-panel { }

  .dt-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 16px; }
  .dt-field { margin-bottom: 14px; }
  .dt-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #13293d; }
  .dt-field input {
    width: 100%; padding: 10px 12px; border: 1px solid #e2d2c0;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box; background:#fff;
  }

  .dt-checkbox {
    display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: #785a43;
    margin: 4px 0 16px; cursor: pointer;
  }
  .dt-checkbox input { width: auto; }

  .dt-toolbar { margin: 8px 0 16px; }
  .dt-btn {
    padding: 10px 18px; border-radius: 10px; border: 1px solid #e2d2c0;
    background: #fff; color: #785a43; font-weight: 600; cursor: pointer;
  }
  .dt-btn-main { background: #e96f00; color: #fff; border-color: #e96f00; }
  .dt-btn-main:hover { background: #ff7a00; border-color: #ff7a00; }

  .dt-result { list-style:none; margin:16px 0 0; padding:0; border-top:1px solid #e2d2c0; }
  .dt-result li { display:flex; justify-content:space-between; gap:12px; padding:10px 2px; color:#3a2c1d; font-size:0.95rem; }
  .dt-result li b { color:#13293d; }
  .dt-result li.hl { background:#fdeadb; color:#e96f00; border-radius:10px; padding:12px 14px; margin-top:6px; font-weight:800; font-size:1.05rem; }
  .dt-result li.hl b { color:#e96f00; }

  .dt-anniv-legend { display:flex; gap:14px; flex-wrap:wrap; margin:14px 0 8px; font-size:0.82rem; color:#785a43; }
  .dt-badge { display:inline-flex; align-items:center; gap:6px; }
  .dt-badge::before { content:''; width:10px; height:10px; border-radius:3px; display:inline-block; }
  .dt-badge-past::before { background:#e3d4c5; }
  .dt-badge-next::before { background:#e96f00; }
  .dt-badge-upcoming::before { background:#cfdfe8; }

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .dt-table { width:100%; min-width:520px; border-collapse:collapse; }
  .dt-table th, .dt-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .dt-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .dt-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .dt-table tr.dt-row-past td { color:#a99b89; background:#faf5ee; }
  .dt-table tr.dt-row-next td { background:#fdeadb; color:#e96f00; font-weight:800; }
  .dt-table tr.dt-row-upcoming td { background:#f3f9fb; color:#174d68; }

  .dt-recommend-desc { font-size: 0.9rem; color: #785a43; }

  .dt-coupang-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-top:14px; }
  .dt-coupang-card {
    display:flex; flex-direction:column; gap:6px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:14px; padding:16px; text-decoration:none; color:inherit; transition:box-shadow .15s;
  }
  .dt-coupang-card:hover { box-shadow:0 4px 14px rgba(19,41,61,0.12); }
  .dt-coupang-thumb { font-size:2rem; line-height:1; }
  .dt-coupang-title { font-weight:700; color:#13293d; }
  .dt-coupang-desc { font-size:0.85rem; color:#785a43; line-height:1.5; }
  .dt-coupang-disclosure { font-size:0.78rem; color:#a99b89; margin-top:12px; }

  .dt-related-grid { display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; }
  .dt-related-card {
    display:flex; flex-direction:column; gap:4px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:12px; padding:14px 16px; text-decoration:none;
  }
  .dt-related-title { color:#e96f00; font-weight:700; }
  .dt-related-desc { font-size:0.85rem; color:#785a43; }
  .dt-related-card:hover .dt-related-title { text-decoration:underline; }

  .dt-faq-item { margin-bottom: 16px; }
  .dt-faq-item h4 { margin-bottom: 6px; color: #13293d; }
  .dt-faq-item p { margin: 0; line-height: 1.6; color: #785a43; }

  @media (max-width: 900px){
    .dt-grid-2 { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px){
    .dt-coupang-grid { grid-template-columns:1fr; }
    .dt-related-grid { grid-template-columns:1fr; }
  }
</style>

<script>
(function(){
  const WD = ['일','월','화','수','목','금','토'];

  function parseDateInput(id){
    const v = document.getElementById(id).value;
    if(!v) return null;
    const [y,m,d] = v.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  function todayOnly(){
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }

  function fmtDate(d){
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 (${WD[d.getDay()]})`;
  }

  function diffDays(a, b){
    return Math.round((b - a) / 86400000);
  }

  function ddayLabel(target){
    const t = todayOnly();
    const n = diffDays(t, target);
    if(n === 0) return 'D-DAY';
    return n > 0 ? `D-${n}` : `D+${Math.abs(n)}`;
  }

  function addDays(d, n){
    const r = new Date(d);
    r.setDate(r.getDate() + n);
    return r;
  }
  function addMonths(d, n){
    const r = new Date(d);
    const day = r.getDate();
    r.setDate(1);
    r.setMonth(r.getMonth() + n);
    const daysInMonth = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
    r.setDate(Math.min(day, daysInMonth));
    return r;
  }
  function addYears(d, n){
    const r = new Date(d);
    const targetYear = r.getFullYear() + n;
    const isFeb29 = r.getMonth() === 1 && r.getDate() === 29;
    if(isFeb29){
      const leap = (targetYear % 4 === 0 && targetYear % 100 !== 0) || targetYear % 400 === 0;
      r.setFullYear(targetYear, 1, leap ? 29 : 28);
    } else {
      r.setFullYear(targetYear);
    }
    return r;
  }

  function calendarDiff(start, end){
    let y = end.getFullYear() - start.getFullYear();
    let m = end.getMonth() - start.getMonth();
    let d = end.getDate() - start.getDate();
    if(d < 0){
      m -= 1;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
      d += prevMonth;
    }
    if(m < 0){ y -= 1; m += 12; }
    return { years: y, months: m, days: d };
  }

  /* 탭 전환 */
  window.setDtTab = function(btn){
    const group = btn.closest('.dt-tabs');
    group.querySelectorAll('.dt-tab').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');

    if(btn.dataset.tab){
      document.querySelectorAll('.dt-panel').forEach(p => p.style.display = 'none');
      document.getElementById('dt-panel-' + btn.dataset.tab).style.display = '';
    }
  };
  window.setDtUnit = function(btn){
    btn.closest('.dt-tabs').querySelectorAll('.dt-tab').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('dt-add-amount').dataset.unit = btn.dataset.unit;
  };

  /* 탭 1: 두 날짜 사이 / D-Day */
  window.calcDtDiff = function(){
    const start = parseDateInput('dt-diff-start');
    const endInput = parseDateInput('dt-diff-end');
    const end = endInput || todayOnly();

    if(!start){ alert('시작 날짜를 입력해 주세요.'); return; }

    const inclusive = document.getElementById('dt-diff-inclusive').checked;
    const [early, late] = start <= end ? [start, end] : [end, start];
    let days = diffDays(early, late);
    if(inclusive) days += 1;

    const weeks = Math.floor(days / 7);
    const remDays = days % 7;
    const cal = calendarDiff(early, late);

    const rows = [
      { l: '시작 날짜', v: fmtDate(start) },
      { l: '종료 날짜' + (endInput ? '' : ' (오늘)'), v: fmtDate(end) },
      { l: '날짜 차이', v: `${days.toLocaleString('ko-KR')}일` },
      { l: '주 단위 환산', v: `${weeks}주 ${remDays}일` },
      { l: '연·월·일 환산', v: `${cal.years}년 ${cal.months}개월 ${cal.days}일` },
      { l: '종료 날짜 기준 D-Day', v: ddayLabel(end), cls: 'hl' }
    ];
    document.getElementById('dt-diff-result').innerHTML =
      rows.map(r => `<li class="${r.cls || ''}"><span>${r.l}</span><b>${r.v}</b></li>`).join('');
  };

  /* 탭 2: 날짜 더하기/빼기 */
  window.calcDtAdd = function(){
    const base = parseDateInput('dt-add-base');
    const amountEl = document.getElementById('dt-add-amount');
    const amount = parseInt((amountEl.value || '').replace(/[^0-9\-]/g, ''), 10);
    const unit = amountEl.dataset.unit || 'day';

    if(!base){ alert('기준 날짜를 입력해 주세요.'); return; }
    if(isNaN(amount)){ alert('더하거나 뺄 값을 입력해 주세요.'); return; }

    let result;
    if(unit === 'day') result = addDays(base, amount);
    else if(unit === 'week') result = addDays(base, amount * 7);
    else if(unit === 'month') result = addMonths(base, amount);
    else result = addYears(base, amount);

    const unitLabel = { day: '일', week: '주', month: '개월', year: '년' }[unit];
    const direction = amount >= 0 ? '후' : '전';

    const rows = [
      { l: '기준 날짜', v: fmtDate(base) },
      { l: `${Math.abs(amount)}${unitLabel} ${direction}`, v: fmtDate(result), cls: 'hl' },
      { l: '오늘 기준 D-Day', v: ddayLabel(result) }
    ];
    document.getElementById('dt-add-result').innerHTML =
      rows.map(r => `<li class="${r.cls || ''}"><span>${r.l}</span><b>${r.v}</b></li>`).join('');
  };

  /* 탭 3: 기념일 자동 계산 */
  window.calcDtAnniv = function(){
    const start = parseDateInput('dt-anniv-start');
    if(!start){ alert('시작 날짜를 입력해 주세요.'); return; }

    const dayNums = [50, 100, 200, 300, 365, 500, 777, 1000, 2000, 3000, 5000, 10000];
    const items = dayNums.map(n => ({
      label: `${n.toLocaleString('ko-KR')}일`,
      date: addDays(start, n - 1) // 시작일을 1일째로 포함
    }));
    for(let y = 1; y <= 10; y++){
      items.push({ label: `${y}주년`, date: addYears(start, y) });
    }
    items.sort((a, b) => a.date - b.date);

    const today = todayOnly();
    let nextMarked = false;
    const body = items.map(item => {
      const isPast = item.date < today;
      let rowClass = '';
      if(isPast){
        rowClass = 'dt-row-past';
      } else if(!nextMarked){
        rowClass = 'dt-row-next';
        nextMarked = true;
      } else {
        rowClass = 'dt-row-upcoming';
      }
      return `<tr class="${rowClass}"><td>${item.label}</td><td>${item.date.getFullYear()}.${item.date.getMonth() + 1}.${item.date.getDate()}</td><td>${WD[item.date.getDay()]}요일</td><td>${ddayLabel(item.date)}</td></tr>`;
    }).join('');

    document.getElementById('dt-anniv-body').innerHTML = body;
    document.getElementById('dt-anniv-table').style.display = '';
  };

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ad-box').forEach(ad => ad.style.minHeight = '120px');
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
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
      "name": "100일은 왜 시작일에서 99일 뒤인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "사귄 날을 1일째로 세는 방식이 한국 커플 문화의 관습이기 때문입니다. 시작일을 1일로 포함해서 세면 100일째 되는 날은 시작일에 99일을 더한 날짜가 됩니다."}
    },
    {
      "@type": "Question",
      "name": "D-Day는 당일을 어떻게 표시하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "목표일 당일은 D-DAY, 아직 오지 않았다면 남은 일수만큼 D-n, 이미 지났다면 지난 일수만큼 D+n으로 표시합니다."}
    },
    {
      "@type": "Question",
      "name": "2월 29일에 시작한 기념일은 주년을 어떻게 계산하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "평년에는 2월 29일이 없으므로 2월 28일을 그해의 주년 날짜로 표시합니다."}
    },
    {
      "@type": "Question",
      "name": "음력 생일이나 제사일도 계산할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "아니요, 이 계산기는 양력(그레고리력) 기준으로만 계산하며 음력 변환은 지원하지 않습니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
