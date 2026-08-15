---
layout: "default"
title: "출산예정일 계산기 - 마지막 생리일·배란일·시험관 이식일 기준 자동 계산 | LifeCalc"
description: "마지막 생리 시작일, 배란일·수정일, 시험관(IVF) 이식일 중 아는 정보로 출산예정일을 계산합니다. 생리주기 보정, 오늘 기준 임신 주수, 정상 분만 범위까지 확인하세요."
permalink: "/family/due-date/"
---

<a class="skip-link" href="#dd-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/life/">생활 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">출산예정일 계산기</span>
</nav>

<section class="cp-hero">
  <h1>출산예정일 계산기</h1>
  <p class="cp-hero-desc">
    <strong>마지막 생리 시작일</strong>, <strong>배란일·수정일</strong>, <strong>시험관(IVF) 이식일</strong> 중
    아는 정보로 출산예정일을 계산합니다. 대부분의 계산기가 생리주기를 28일로 고정하지만, 이 계산기는
    <strong>본인의 평균 생리주기를 반영해 보정</strong>하고, 오늘 기준 임신 주수와 정상 분만 범위까지
    함께 보여드립니다.
  </p>
</section>

<section id="dd-calculator" class="vc-card">
  <h2>출산예정일 계산</h2>

  <div class="vc-tabs">
    <button type="button" class="vc-tab active" data-tab="lmp">마지막 생리일 기준</button>
    <button type="button" class="vc-tab" data-tab="ovul">배란일·수정일 기준</button>
    <button type="button" class="vc-tab" data-tab="ivf">시험관(IVF) 이식일 기준</button>
  </div>

  <!-- 마지막 생리일 -->
  <div class="vc-panel active" id="dd-panel-lmp">
    <div class="vc-field">
      <label for="dd-lmp">마지막 생리 시작일</label>
      <input type="date" id="dd-lmp">
    </div>
    <div class="vc-field">
      <label for="dd-cycle">평균 생리주기 (일)</label>
      <select id="dd-cycle">
        <option value="21">21일</option><option value="22">22일</option><option value="23">23일</option>
        <option value="24">24일</option><option value="25">25일</option><option value="26">26일</option>
        <option value="27">27일</option><option value="28" selected>28일 (표준)</option><option value="29">29일</option>
        <option value="30">30일</option><option value="31">31일</option><option value="32">32일</option>
        <option value="33">33일</option><option value="34">34일</option><option value="35">35일</option>
      </select>
      <p class="vc-note">모르면 표준값(28일)을 그대로 두세요. 네겔레 법칙은 28일 주기를 가정하므로,
      주기가 다르면 이 계산기가 자동으로 며칠을 보정합니다.</p>
    </div>
  </div>

  <!-- 배란일 -->
  <div class="vc-panel" id="dd-panel-ovul">
    <div class="vc-field">
      <label for="dd-ovul">배란일 또는 수정(임신)일</label>
      <input type="date" id="dd-ovul">
    </div>
    <p class="vc-note">배란일 테스트기나 병원 초음파로 배란일을 확인한 경우 이 방법이 생리주기 보정보다
    더 정확할 수 있습니다.</p>
  </div>

  <!-- IVF -->
  <div class="vc-panel" id="dd-panel-ivf">
    <div class="vc-field">
      <label for="dd-transfer">배아 이식일</label>
      <input type="date" id="dd-transfer">
    </div>
    <div class="vc-field">
      <label for="dd-embryo">이식한 배아 일수</label>
      <select id="dd-embryo">
        <option value="3">3일 배아 (초기 배아)</option>
        <option value="5">5일 배아 (배반포)</option>
      </select>
    </div>
  </div>

  <div class="vc-toolbar">
    <button type="button" class="vc-btn vc-btn-main" onclick="calcDueDate()">출산예정일 계산하기</button>
  </div>

  <div class="cp-callout">
    ✅ 이 계산기는 <strong>참고용 추정치</strong>입니다. 실제 정확한 예정일은 임신 7~12주 사이 초음파로
    태아의 머리둔부길이(CRL)를 측정해 확정하는 것이 가장 정확합니다. 정확히 예정일에 태어나는 아기는
    전체의 약 4~5%에 불과하며, 대부분 예정일 전후로 태어납니다.
  </div>

  <div class="vc-next" id="dd-next" style="display:none">
    <div class="vc-next-label">출산예정일까지</div>
    <div class="vc-next-dday" id="dd-next-dday">-</div>
    <div class="vc-next-desc" id="dd-next-desc">-</div>
  </div>

  <div class="table-wrap">
    <table class="vc-table" id="dd-summary-table" style="display:none">
      <thead><tr><th>구분</th><th>결과</th></tr></thead>
      <tbody id="dd-summary-body"></tbody>
    </table>
  </div>
</section>

<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       ata-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="vc-card vc-card-light">
  <h2>출산예정일은 어떻게 계산되나요?</h2>
  <p>
    가장 널리 쓰이는 방법은 1812년 독일 산부인과 의사 프란츠 네겔레가 고안한 <strong>네겔레 법칙</strong>으로,
    마지막 생리 시작일(LMP)에 280일(40주)을 더합니다. 이는 생리주기가 28일이고 배란이 생리 시작 후
    14일째 일어난다고 가정한 계산입니다.
  </p>
  <table class="vc-table">
    <thead><tr><th>기준</th><th>계산법</th><th>비고</th></tr></thead>
    <tbody>
      <tr><td>마지막 생리일(LMP)</td><td>LMP + 280일 (28일 주기 기준)</td><td>가장 흔히 쓰이지만 생리주기가 불규칙하면 오차가 커짐</td></tr>
      <tr><td>배란일·수정일</td><td>배란일 + 266일 (38주)</td><td>배란일을 정확히 아는 경우 LMP 기준보다 정확</td></tr>
      <tr><td>시험관(IVF) 3일 배아</td><td>이식일 + 263일</td><td>수정 시점을 정확히 알아 가장 정밀</td></tr>
      <tr><td>시험관(IVF) 5일 배아(배반포)</td><td>이식일 + 261일</td><td>수정 시점을 정확히 알아 가장 정밀</td></tr>
    </tbody>
  </table>
  <p class="vc-note">
    ※ 산부인과 교과서(Williams Obstetrics)에 따르면 생리주기는 사람마다 21~35일로 편차가 크기 때문에,
    28일 고정 계산은 실제와 다를 수 있습니다. 이 계산기는 입력한 평균 생리주기와 28일의 차이만큼
    예정일을 자동으로 보정합니다. 그래도 가장 정확한 방법은 임신 초기 초음파 검사입니다.
  </p>
</section>

<section class="vc-card vc-card-light">
  <h2>임신 주수와 삼분기, 정상 분만 범위</h2>
  <p>
    임신 주수는 실제 수정일이 아니라 <strong>마지막 생리 시작일(또는 그에 상응하는 날짜)부터</strong>
    계산하는 것이 산부인과의 표준입니다. 그래서 실제 태아 나이(수정 후 경과일)보다 임신 주수가 약
    2주 더 많게 나옵니다.
  </p>
  <table class="vc-table">
    <thead><tr><th>구분</th><th>기간</th></tr></thead>
    <tbody>
      <tr><td>임신 1분기</td><td>0주 ~ 13주 6일</td></tr>
      <tr><td>임신 2분기</td><td>14주 0일 ~ 27주 6일</td></tr>
      <tr><td>임신 3분기</td><td>28주 0일 ~ 출산</td></tr>
      <tr><td>정상 분만(만삭) 범위</td><td>37주 0일 ~ 41주 6일</td></tr>
    </tbody>
  </table>
</section>

<!-- COUPANG PARTNERS: 아래 href="COUPANG_PARTNERS_LINK_*"를 실제 쿠팡파트너스 딥링크로 교체하세요 -->
<section class="vc-card vc-card-light vc-recommend">
  <h2>함께 보면 좋은 자료</h2>
  <p class="vc-recommend-desc">임신 초기부터 준비하면 좋은 상품입니다.</p>
  <div class="vc-coupang-grid">
    <a class="vc-coupang-card" href=https://link.coupang.com/a/ge0CS8NXMa" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🤰</div>
      <div class="vc-coupang-title">임신 초기 영양제 (엽산 등)</div>
      <div class="vc-coupang-desc">임신 준비·초기에 챙기면 좋은 필수 영양제</div>
    </a>
    <a class="vc-coupang-card" href="https://link.coupang.com/a/ge0AJaZmIm" rel="noopener sponsored">
      <div class="vc-coupang-thumb">📔</div>
      <div class="vc-coupang-title">임신 다이어리·태교 수첩</div>
      <div class="vc-coupang-desc">임신 주수별 변화를 기록하는 다이어리</div>
    </a>
    <a class="vc-coupang-card" href="https://link.coupang.com/a/ge0yz1QLFk" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🛍️</div>
      <div class="vc-coupang-title">출산 준비물 세트</div>
      <div class="vc-coupang-desc">신생아 맞이 필수 준비물 모음</div>
    </a>
  </div>
  <p class="vc-coupang-disclosure">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
</section>

<section class="vc-card">
  <h2>관련 계산기</h2>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/family/baby-days/">
      <span class="vc-related-title">아기 개월수 계산기</span>
      <span class="vc-related-desc">생후 며칠·몇 개월, 백일·돌까지 D-day</span>
    </a>
    <a class="vc-related-card" href="/family/baegil/">
      <span class="vc-related-title">백일 날짜 계산기</span>
      <span class="vc-related-desc">아기 백일이 정확히 언제인지 계산</span>
    </a>
    <a class="vc-related-card" href="/family/vaccine/">
      <span class="vc-related-title">예방접종 일정 계산기</span>
      <span class="vc-related-desc">국가필수예방접종 표준 일정 자동 계산</span>
    </a>
    <a class="vc-related-card" href="/life/age/">
      <span class="vc-related-title">만나이 계산기</span>
      <span class="vc-related-desc">만/세는/연나이 비교, 띠, D-day</span>
    </a>
  </div>
</section>

<section class="vc-card" id="dd-faq">
  <h2>자주 묻는 질문</h2>

  <div class="vc-faq-item">
    <h3>왜 생리주기가 다르면 예정일도 달라지나요?</h3>
    <p>네겔레 법칙은 생리주기 28일, 배란일이 생리 시작 후 14일째라는 가정을 기반으로 합니다. 주기가
    이보다 길면 배란도 늦게 일어나는 경우가 많아, 실제 수정 시점과 예정일도 뒤로 밀릴 가능성이 큽니다.
    이 계산기는 입력한 평균 주기와 28일의 차이만큼 예정일을 조정합니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>임신 주수와 태아 나이가 다르다는 게 무슨 뜻인가요?</h3>
    <p>임신 주수는 마지막 생리 시작일부터 계산하는 산부인과 표준 방식이고, 태아의 실제 나이(수정 후
    경과일)는 보통 그보다 약 2주 적습니다. 배란과 수정이 생리 시작 후 약 2주 뒤에 일어나기 때문입니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>계산된 예정일이 실제 출산일과 다를 수 있나요?</h3>
    <p>네. 정확히 예정일에 태어나는 아기는 전체의 4~5%에 불과합니다. 대부분 37~42주 사이에 태어나며,
    가장 정확한 예정일은 임신 초기(7~12주) 초음파로 태아 크기를 측정해 확정합니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>시험관(IVF) 임신은 왜 더 정확하게 계산할 수 있나요?</h3>
    <p>배아 이식일을 통해 수정 시점을 정확히 알 수 있기 때문입니다. 3일 배아는 이식일에 263일을,
    5일 배아(배반포)는 261일을 더해 예정일을 계산하며, 이는 LMP 기준 계산보다 오차가 적습니다.</p>
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
  .vc-note { font-size: 0.85rem; color: #785a43; }

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

  .vc-toolbar { margin: 8px 0 16px; }
  .vc-btn {
    padding: 10px 18px; border-radius: 10px; border: 1px solid #e2d2c0;
    background: #fff; color: #785a43; font-weight: 600; cursor: pointer;
  }
  .vc-btn-main { background: #e96f00; color: #fff; border-color: #e96f00; }
  .vc-btn-main:hover { background: #ff7a00; border-color: #ff7a00; }

  .cp-callout {
    background:#cfdfe8; border:1px solid #1f5c7a; color:#174d68; border-radius:12px;
    padding:14px 16px; font-size:0.92rem; line-height:1.6; margin-bottom:16px;
  }

  .vc-next {
    background:#fdeadb; border:1px solid #e96f00; border-radius:14px;
    padding:16px 18px; margin-bottom:16px; text-align:center;
  }
  .vc-next-label { font-size:0.85rem; color:#785a43; font-weight:600; }
  .vc-next-dday { font-size:1.8rem; font-weight:800; color:#e96f00; margin:4px 0; }
  .vc-next-desc { font-size:0.92rem; color:#13293d; }

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .vc-table { width:100%; min-width:420px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .vc-table td.dd-main { font-weight:800; color:#e96f00; }

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
  .vc-faq-item h3 { margin-bottom: 6px; font-size: 1rem; color: #13293d; }
  .vc-faq-item p { margin: 0; line-height: 1.6; color: #785a43; }

  @media (max-width: 640px){
    .vc-coupang-grid { grid-template-columns:1fr; }
    .vc-related-grid { grid-template-columns:1fr; }
  }
</style>

<script>
(function(){
  const WD = ['일','월','화','수','목','금','토'];

  function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate() + n); return r; }
  function todayOnly(){
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }
  function diffDays(a, b){ return Math.round((b - a) / 86400000); }
  function ddayLabel(target){
    const n = diffDays(todayOnly(), target);
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

  let activeTab = 'lmp';
  document.querySelectorAll('.vc-tab').forEach(function(tab){
    tab.addEventListener('click', function(){
      document.querySelectorAll('.vc-tab').forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.vc-panel').forEach(function(p){ p.classList.remove('active'); });
      tab.classList.add('active');
      activeTab = tab.dataset.tab;
      document.getElementById('dd-panel-' + activeTab).classList.add('active');
      document.getElementById('dd-next').style.display = 'none';
      document.getElementById('dd-summary-table').style.display = 'none';
    });
  });

  window.calcDueDate = function(){
    let dueDate = null;

    if (activeTab === 'lmp'){
      const lmp = parseDateInput('dd-lmp');
      if (!lmp){ alert('마지막 생리 시작일을 입력해 주세요.'); return; }
      const cycle = Number(document.getElementById('dd-cycle').value);
      dueDate = addDays(lmp, 280 + (cycle - 28));
    } else if (activeTab === 'ovul'){
      const ovul = parseDateInput('dd-ovul');
      if (!ovul){ alert('배란일 또는 수정일을 입력해 주세요.'); return; }
      dueDate = addDays(ovul, 266);
    } else {
      const transfer = parseDateInput('dd-transfer');
      if (!transfer){ alert('배아 이식일을 입력해 주세요.'); return; }
      const embryoDay = Number(document.getElementById('dd-embryo').value);
      dueDate = addDays(transfer, embryoDay === 3 ? 263 : 261);
    }

    const impliedLMP = addDays(dueDate, -280);
    const today = todayOnly();
    const daysSinceLMP = Math.max(0, diffDays(impliedLMP, today));
    const weeks = Math.floor(daysSinceLMP / 7);
    const remDays = daysSinceLMP % 7;

    let trimester = '1분기';
    if (daysSinceLMP >= 196) trimester = '3분기';
    else if (daysSinceLMP >= 98) trimester = '2분기';

    const rangeStart = addDays(dueDate, -21);
    const rangeEnd = addDays(dueDate, 13);

    document.getElementById('dd-summary-body').innerHTML = `
      <tr><td>출산예정일</td><td class="dd-main">${fmtShort(dueDate)}</td></tr>
      <tr><td>오늘 기준 임신 주수</td><td>${weeks}주 ${remDays}일</td></tr>
      <tr><td>현재 삼분기</td><td>${trimester}</td></tr>
      <tr><td>정상 분만(만삭) 범위</td><td>${fmtShort(rangeStart)} ~ ${fmtShort(rangeEnd)}</td></tr>
    `;
    document.getElementById('dd-summary-table').style.display = '';

    const nextBox = document.getElementById('dd-next');
    nextBox.style.display = '';
    document.getElementById('dd-next-dday').textContent = ddayLabel(dueDate);
    document.getElementById('dd-next-desc').textContent = `출산예정일 ${fmtShort(dueDate)}`;
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
    {"@type": "ListItem", "position": 3, "name": "출산예정일 계산기", "item": "https://calculator.khaistory.com/family/due-date/"}
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
      "name": "왜 생리주기가 다르면 예정일도 달라지나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네겔레 법칙은 28일 주기와 생리 시작 후 14일째 배란을 가정합니다. 주기가 다르면 배란 시점도 달라져 예정일 보정이 필요합니다."}
    },
    {
      "@type": "Question",
      "name": "임신 주수와 태아 나이가 다르다는 게 무슨 뜻인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "임신 주수는 마지막 생리 시작일부터, 태아 나이는 수정일부터 계산해 보통 2주 정도 차이가 납니다."}
    },
    {
      "@type": "Question",
      "name": "계산된 예정일이 실제 출산일과 다를 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네. 정확히 예정일에 태어나는 아기는 4~5%에 불과하며 대부분 37~42주 사이에 태어납니다."}
    },
    {
      "@type": "Question",
      "name": "시험관(IVF) 임신은 왜 더 정확하게 계산할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "배아 이식일로 수정 시점을 정확히 알 수 있어 LMP 기준보다 오차가 적습니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
