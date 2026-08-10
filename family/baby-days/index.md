---
layout: "default"
title: "아기 개월수 계산기 - 생후 N일·개월 자동 계산, 백일·200일·돌까지 | LifeCalc"
description: "아기 생년월일을 입력하면 오늘 기준 생후 며칠째, 몇 개월인지 자동으로 계산합니다. 계산기마다 결과가 다른 이유(만 개월 vs 일수 환산)를 비교하고, 삼칠일·백일·200일·첫돌까지 D-day로 확인하세요."
permalink: "/family/baby-days/"
---

<a class="skip-link" href="#bd-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/family/">출산·육아</a> <span aria-hidden="true">›</span>
  <span aria-current="page">아기 개월수 계산기</span>
</nav>

<section class="cp-hero">
  <h1>아기 개월수 계산기</h1>
  <p class="cp-hero-desc">
    아기 생년월일만 입력하면 오늘 기준 <strong>생후 며칠째</strong>인지, <strong>몇 개월</strong>인지 바로
    확인할 수 있습니다. 개월수는 계산 방식에 따라 결과가 다르게 나올 수 있어, <strong>병원·예방접종
    기준(만 개월)</strong>과 <strong>단순 일수 환산 방식</strong>을 함께 보여드립니다. 삼칠일·백일·
    200일·첫돌까지 D-day도 한 번에 확인하세요.
  </p>
</section>

<section id="bd-calculator" class="vc-card">
  <h2>아기 생년월일로 개월수 계산</h2>
  <div class="vc-field">
    <label for="bd-birth">아기 생년월일</label>
    <input type="date" id="bd-birth">
  </div>
  <div class="vc-field">
    <label for="bd-ref">기준일</label>
    <input type="date" id="bd-ref">
  </div>
  <div class="vc-toolbar">
    <button type="button" class="vc-btn vc-btn-main" onclick="calcBabyDays()">개월수 계산하기</button>
  </div>

  <div class="cp-callout">
    ✅ 이 계산기는 <strong>만 개월(달력 기준)</strong>과 <strong>일수 환산(30일=1개월 근사)</strong> 두 방식을
    함께 보여드립니다. 예방접종 시기나 소아과 발달 확인은 <strong>만 개월 기준</strong>을 사용하는 경우가
    많으니 참고하세요.
  </div>

  <div class="vc-next" id="bd-next" style="display:none">
    <div class="vc-next-label">다음 이정표까지</div>
    <div class="vc-next-dday" id="bd-next-dday">-</div>
    <div class="vc-next-desc" id="bd-next-desc">-</div>
  </div>

  <div class="table-wrap">
    <table class="vc-table" id="bd-summary-table" style="display:none">
      <thead><tr><th>구분</th><th>결과</th><th>비고</th></tr></thead>
      <tbody id="bd-summary-body"></tbody>
    </table>
  </div>

  <div class="table-wrap" style="margin-top:16px">
    <table class="vc-table" id="bd-milestone-table" style="display:none">
      <thead><tr><th>이정표</th><th>날짜</th><th>D-Day</th></tr></thead>
      <tbody id="bd-milestone-body"></tbody>
    </table>
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
  <h2>개월수 계산기마다 결과가 다른 이유</h2>
  <p>
    같은 생년월일을 입력해도 사이트마다 "생후 O개월" 결과가 하루이틀, 심하면 며칠씩 다르게 나오는
    경우가 있습니다. 계산 방식이 서로 다르기 때문인데, 크게 두 가지 방식이 쓰입니다.
  </p>
  <table class="vc-table">
    <thead><tr><th>방식</th><th>계산법</th><th>특징</th></tr></thead>
    <tbody>
      <tr><td>만 개월 (달력 기준)</td><td>태어난 날짜와 같은 날짜가 돌아올 때마다 1개월 증가</td><td>예방접종·발달 확인 등 병원에서 쓰는 방식, 가장 정확</td></tr>
      <tr><td>일수 환산 (30일=1개월)</td><td>총 경과일수 ÷ 30</td><td>계산은 간단하지만 달마다 일수가 달라(28~31일) 개월이 지날수록 오차가 누적됨</td></tr>
    </tbody>
  </table>
  <p class="vc-note">
    ※ 예를 들어 1월 15일에 태어난 아기가 60일이 지나면 두 방식 모두 "생후 2개월"로 같지만, 250일이
    지난 시점에는 만 개월 기준으로는 "생후 8개월"인데 일수 환산으로는 250÷30=8.3개월로 다르게 표시될
    수 있습니다. 개월수가 커질수록 두 방식의 차이도 함께 커집니다.
  </p>
</section>

<section class="vc-card vc-card-light">
  <h2>삼칠일·백일·200일·첫돌은 언제인가요?</h2>
  <p>
    한국의 전통 육아 이정표는 <strong>출생일을 1일째로 포함</strong>해서 셉니다. 그래서 "100일째 되는
    날"은 출생일에 100일이 아니라 <strong>99일을 더한 날짜</strong>입니다.
  </p>
  <table class="vc-table">
    <thead><tr><th>이정표</th><th>의미</th><th>계산법</th></tr></thead>
    <tbody>
      <tr><td>삼칠일</td><td>태어난 지 21일째 되는 날. 전통적으로 산모와 아기가 외부 방문객을 받아들이기 시작하는 시점</td><td>출생일 + 20일</td></tr>
      <tr><td>백일</td><td>태어난 지 100일째 되는 날. 과거 영아 사망률이 높던 시절, 무사히 100일을 넘긴 것을 기념하던 전통</td><td>출생일 + 99일</td></tr>
      <tr><td>200일</td><td>백일 다음으로 흔히 챙기는 이정표</td><td>출생일 + 199일</td></tr>
      <tr><td>첫돌</td><td>만 1세 생일(출생일로부터 1년 후 같은 날짜). 돌잡이·돌잔치를 여는 전통적인 큰 행사</td><td>출생일의 1년 후 같은 날짜</td></tr>
    </tbody>
  </table>
  <p class="vc-note">
    ※ 첫돌은 "생후 365일째"로 계산하는 경우와 "1년 후 같은 날짜"로 계산하는 경우가 살짝 다를 수
    있습니다(윤년 포함 여부 때문에 하루 차이가 날 수 있음). 이 계산기는 실제 돌잔치 관례에 맞춰
    <strong>1년 후 같은 날짜</strong> 기준으로 계산합니다.
  </p>
  <div class="cp-external-links">
    <a href="/family/baegil/">백일 날짜 상세 계산기</a>
  </div>
</section>

<!-- COUPANG PARTNERS: 아래 href="COUPANG_PARTNERS_LINK_*"를 실제 쿠팡파트너스 딥링크로 교체하세요 -->
<section class="vc-card vc-card-light vc-recommend">
  <h2>함께 보면 좋은 자료</h2>
  <p class="vc-recommend-desc">개월수에 맞는 육아용품과 성장 기록에 도움이 되는 상품입니다.</p>
  <div class="vc-coupang-grid">
    <a class="vc-coupang-card" href="COUPANG_PARTNERS_LINK_1" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">📔</div>
      <div class="vc-coupang-title">아기 성장·기념일 기록 수첩</div>
      <div class="vc-coupang-desc">백일·돌까지 개월별 변화를 기록하는 육아수첩</div>
    </a>
    <a class="vc-coupang-card" href="COUPANG_PARTNERS_LINK_2" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🍼</div>
      <div class="vc-coupang-title">월령별 이유식 세트</div>
      <div class="vc-coupang-desc">개월수에 맞춰 시작하는 단계별 이유식</div>
    </a>
    <a class="vc-coupang-card" href="COUPANG_PARTNERS_LINK_3" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">📸</div>
      <div class="vc-coupang-title">백일·돌 사진 촬영 소품</div>
      <div class="vc-coupang-desc">이정표마다 기록을 남기기 좋은 촬영 소품</div>
    </a>
  </div>
  <p class="vc-coupang-disclosure">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
</section>

<section class="vc-card">
  <h2>관련 계산기</h2>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/family/due-date/">
      <span class="vc-related-title">출산 예정일 계산기</span>
      <span class="vc-related-desc">마지막 생리일·임신 주수로 예정일 계산</span>
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

<section class="vc-card" id="bd-faq">
  <h2>자주 묻는 질문</h2>

  <div class="vc-faq-item">
    <h3>왜 계산기마다 개월수 결과가 다르게 나오나요?</h3>
    <p>계산 방식이 다르기 때문입니다. 태어난 날짜와 같은 날짜가 돌아올 때마다 1개월씩 늘어나는
    "만 개월" 방식과, 총 경과일수를 30으로 나누는 "일수 환산" 방식이 있는데, 개월이 지날수록 두
    방식의 결과 차이가 커질 수 있습니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>예방접종 시기를 확인할 때는 어떤 개월수를 써야 하나요?</h3>
    <p>병원과 예방접종 기준표는 "만 개월(달력 기준)"을 사용합니다. 정확한 접종 시기가 궁금하다면
    이 계산기의 만 개월 결과와 함께 예방접종 일정 계산기를 확인하세요.</p>
  </div>
  <div class="vc-faq-item">
    <h3>백일은 왜 출생일+100일이 아니라 +99일인가요?</h3>
    <p>한국의 전통 셈법은 태어난 날을 1일째로 포함합니다. 따라서 100일째가 되려면 출생일에 99일을
    더해야 합니다. 출생일 자체를 세지 않고 100일을 더하면 실제로는 101일째가 됩니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>첫돌은 생후 365일째인가요, 만 1세 생일인가요?</h3>
    <p>실제 돌잔치는 대부분 "만 1세 생일"(출생일로부터 1년 후 같은 날짜)에 맞춰 엽니다. 생후
    365일째로 단순 계산하면 윤년 포함 여부에 따라 만 1세 생일과 하루 차이가 날 수 있어, 이 계산기는
    만 1세 생일 기준으로 계산합니다.</p>
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

  .vc-field { margin-bottom: 14px; }
  .vc-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #13293d; }
  .vc-field input {
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

  .cp-external-links { display:flex; gap:10px; flex-wrap:wrap; margin:16px 0; }
  .cp-external-links a {
    display:inline-block; padding:10px 16px; border:1px solid #1f5c7a; color:#1f5c7a;
    border-radius:10px; text-decoration:none; font-weight:600; font-size:0.9rem;
  }
  .cp-external-links a:hover { background:#cfdfe8; }

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
  .vc-table { width:100%; min-width:480px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .vc-table tr.bd-row-past td { color:#a99b89; background:#faf5ee; }
  .vc-table tr.bd-row-next td { background:#fdeadb; color:#e96f00; font-weight:800; }

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
    .cp-external-links { flex-direction:column; }
    .cp-external-links a { text-align:center; }
  }
</style>

<script>
(function(){
  const WD = ['일','월','화','수','목','금','토'];

  function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate() + n); return r; }
  function addYears(d, n){
    const r = new Date(d);
    r.setFullYear(r.getFullYear() + n);
    return r;
  }
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

  // 만 개월(달력 기준): 만나이 계산과 동일한 원리를 월 단위로 적용
  function calendarMonths(birth, ref){
    let months = (ref.getFullYear() - birth.getFullYear()) * 12 + (ref.getMonth() - birth.getMonth());
    if (ref.getDate() < birth.getDate()) months--;
    return Math.max(0, months);
  }

  (function setDefaultRef(){
    const refEl = document.getElementById("bd-ref");
    const t = new Date();
    const yyyy = t.getFullYear();
    const mm = String(t.getMonth() + 1).padStart(2, "0");
    const dd = String(t.getDate()).padStart(2, "0");
    refEl.value = `${yyyy}-${mm}-${dd}`;
  })();

  window.calcBabyDays = function(){
    const birthInput = document.getElementById('bd-birth').value;
    const refInput = document.getElementById('bd-ref').value;
    if(!birthInput){ alert('아기 생년월일을 입력해 주세요.'); return; }

    const [by, bm, bd] = birthInput.split('-').map(Number);
    const birth = new Date(by, bm - 1, bd);
    let ref;
    if (refInput){
      const [ry, rm, rd] = refInput.split('-').map(Number);
      ref = new Date(ry, rm - 1, rd);
    } else {
      ref = todayOnly();
    }

    if (birth > ref){
      alert('기준일은 생년월일보다 뒤여야 합니다.');
      return;
    }

    const daysIncl = diffDays(birth, ref) + 1;   // 출생일을 1일째로 포함
    const daysExcl = diffDays(birth, ref);        // 만나이 방식과 동일(출생일=0일째)
    const monthsCalendar = calendarMonths(birth, ref);
    const monthsApprox = Math.floor(daysExcl / 30);

    document.getElementById('bd-summary-body').innerHTML = `
      <tr><td>생후 일수 (출생일 포함)</td><td class="bd-main">${daysIncl.toLocaleString()}일째</td><td>맘카페·육아수첩에서 흔히 쓰는 표기</td></tr>
      <tr><td>생후 일수 (출생일 미포함)</td><td>${daysExcl.toLocaleString()}일</td><td>만 나이와 동일한 날짜差 계산 방식</td></tr>
      <tr><td>만 개월 (달력 기준)</td><td class="bd-main">${monthsCalendar}개월</td><td>예방접종·소아과 발달 확인 기준</td></tr>
      <tr><td>일수 환산 개월수 (30일=1개월)</td><td>약 ${monthsApprox}개월</td><td>간단 근사치, 개월이 지날수록 오차 커짐</td></tr>
    `;
    document.getElementById('bd-summary-table').style.display = '';

    const milestones = [
      { label: '삼칠일 (21일째)', date: addDays(birth, 20) },
      { label: '백일 (100일째)', date: addDays(birth, 99) },
      { label: '200일', date: addDays(birth, 199) },
      { label: '첫돌 (만 1세 생일)', date: addYears(birth, 1) }
    ].sort((a, b) => a.date - b.date);

    let nextItem = null;
    const rows = milestones.map(item => {
      const isPast = item.date < ref;
      let rowClass = '';
      if (isPast){
        rowClass = 'bd-row-past';
      } else if (!nextItem){
        rowClass = 'bd-row-next';
        nextItem = item;
      }
      return `<tr class="${rowClass}"><td>${item.label}</td><td>${fmtShort(item.date)}</td><td>${ddayLabel(ref, item.date)}</td></tr>`;
    }).join('');
    document.getElementById('bd-milestone-body').innerHTML = rows;
    document.getElementById('bd-milestone-table').style.display = '';

    const nextBox = document.getElementById('bd-next');
    nextBox.style.display = '';
    if (nextItem){
      document.getElementById('bd-next-dday').textContent = ddayLabel(ref, nextItem.date);
      document.getElementById('bd-next-desc').textContent = `${nextItem.label} — ${fmtShort(nextItem.date)}`;
    } else {
      document.getElementById('bd-next-dday').textContent = '완료';
      document.getElementById('bd-next-desc').textContent = '삼칠일·백일·200일·첫돌이 모두 지났습니다.';
    }
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
    {"@type": "ListItem", "position": 2, "name": "출산·육아", "item": "https://calculator.khaistory.com/family/"},
    {"@type": "ListItem", "position": 3, "name": "아기 개월수 계산기", "item": "https://calculator.khaistory.com/family/baby-days/"}
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
      "name": "왜 계산기마다 개월수 결과가 다르게 나오나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "만 개월(달력 기준)과 일수 환산(30일=1개월) 방식이 서로 달라서, 개월이 지날수록 두 방식의 결과 차이가 커질 수 있습니다."}
    },
    {
      "@type": "Question",
      "name": "예방접종 시기를 확인할 때는 어떤 개월수를 써야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "병원과 예방접종 기준표는 만 개월(달력 기준)을 사용합니다."}
    },
    {
      "@type": "Question",
      "name": "백일은 왜 출생일+100일이 아니라 +99일인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "한국의 전통 셈법은 태어난 날을 1일째로 포함하기 때문에, 100일째가 되려면 출생일에 99일을 더해야 합니다."}
    },
    {
      "@type": "Question",
      "name": "첫돌은 생후 365일째인가요, 만 1세 생일인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "실제 돌잔치는 대부분 만 1세 생일(출생일로부터 1년 후 같은 날짜)에 맞춰 열립니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
