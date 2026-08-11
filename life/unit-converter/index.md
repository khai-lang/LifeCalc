---
layout: "default"
title: "단위 변환 계산기 - 평↔제곱미터, 길이·무게·부피·온도 한번에 | LifeCalc"
description: "평(평수)과 제곱미터(㎡) 변환은 물론 길이·무게·부피·온도까지 한 곳에서 변환하세요. 아파트 평수 계산에 자주 쓰이는 평↔㎡ 변환을 가장 먼저 확인할 수 있습니다."
permalink: "/life/unit-converter/"
---

<a class="skip-link" href="#ut-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/life/">생활 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">단위 변환 계산기</span>
</nav>

<section class="cp-hero">
  <h1>단위 변환 계산기</h1>
  <p class="cp-hero-desc">
    아파트 매물을 볼 때 가장 많이 헷갈리는 <strong>평↔제곱미터(㎡)</strong> 변환부터,
    <strong>길이·무게·부피·온도</strong>까지 한 곳에서 변환할 수 있습니다.
  </p>
</section>

<section id="ut-calculator" class="vc-card">
  <h2>단위 변환</h2>

  <div class="vc-tabs">
    <button type="button" class="vc-tab active" data-tab="pyeong">평 ↔ 제곱미터</button>
    <button type="button" class="vc-tab" data-tab="length">길이</button>
    <button type="button" class="vc-tab" data-tab="weight">무게</button>
    <button type="button" class="vc-tab" data-tab="volume">부피</button>
    <button type="button" class="vc-tab" data-tab="temp">온도</button>
  </div>

  <!-- 평 <-> 제곱미터 -->
  <div class="vc-panel active" id="ut-panel-pyeong">
    <div class="vc-row2">
      <div class="vc-field">
        <label for="ut-pyeong">평</label>
        <input type="number" id="ut-pyeong" placeholder="예: 34" oninput="fromPyeong()">
      </div>
      <div class="vc-field">
        <label for="ut-sqm">제곱미터 (㎡)</label>
        <input type="number" id="ut-sqm" placeholder="예: 112.4" oninput="fromSqm()">
      </div>
    </div>
    <p class="vc-note">1평 = 3.3058㎡ (한국 부동산 등기·건축 표준). 아무 칸에나 숫자를 입력하면 다른 칸이 자동으로 계산됩니다.</p>

    <div class="table-wrap">
      <table class="vc-table">
        <thead><tr><th>평형</th><th>제곱미터(㎡)</th><th>흔히 부르는 이름</th></tr></thead>
        <tbody>
          <tr><td>18평</td><td>59.5㎡</td><td>구축 소형 아파트(전용 84㎡ 미만대)</td></tr>
          <tr><td>25.7평</td><td>84.9㎡</td><td>국민평형 (전용 84㎡)</td></tr>
          <tr><td>34평</td><td>112.4㎡</td><td>중형 아파트</td></tr>
          <tr><td>45평</td><td>148.8㎡</td><td>대형 아파트</td></tr>
        </tbody>
      </table>
    </div>
    <div class="cp-external-links">
      <a href="/realestate/acquisition-tax/">취득세 계산기</a>
      <a href="/realestate/property-tax/">종합부동산세 계산기</a>
    </div>
  </div>

  <!-- 길이 -->
  <div class="vc-panel" id="ut-panel-length">
    <div class="vc-field">
      <label for="ut-length-value">값</label>
      <input type="number" id="ut-length-value" placeholder="예: 170" oninput="calcLength()">
    </div>
    <div class="vc-row2">
      <div class="vc-field">
        <label for="ut-length-from">단위</label>
        <select id="ut-length-from" onchange="calcLength()">
          <option value="mm">밀리미터 (mm)</option>
          <option value="cm" selected>센티미터 (cm)</option>
          <option value="m">미터 (m)</option>
          <option value="km">킬로미터 (km)</option>
          <option value="in">인치 (in)</option>
          <option value="ft">피트 (ft)</option>
          <option value="mile">마일 (mile)</option>
        </select>
      </div>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="ut-length-table">
        <thead><tr><th>단위</th><th>변환 결과</th></tr></thead>
        <tbody id="ut-length-body"></tbody>
      </table>
    </div>
  </div>

  <!-- 무게 -->
  <div class="vc-panel" id="ut-panel-weight">
    <div class="vc-field">
      <label for="ut-weight-value">값</label>
      <input type="number" id="ut-weight-value" placeholder="예: 65" oninput="calcWeight()">
    </div>
    <div class="vc-row2">
      <div class="vc-field">
        <label for="ut-weight-from">단위</label>
        <select id="ut-weight-from" onchange="calcWeight()">
          <option value="g">그램 (g)</option>
          <option value="kg" selected>킬로그램 (kg)</option>
          <option value="t">톤 (t)</option>
          <option value="lb">파운드 (lb)</option>
          <option value="oz">온스 (oz)</option>
          <option value="geun">근 (斤, 고기·과일 기준 600g)</option>
        </select>
      </div>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="ut-weight-table">
        <thead><tr><th>단위</th><th>변환 결과</th></tr></thead>
        <tbody id="ut-weight-body"></tbody>
      </table>
    </div>
  </div>

  <!-- 부피 -->
  <div class="vc-panel" id="ut-panel-volume">
    <div class="vc-field">
      <label for="ut-volume-value">값</label>
      <input type="number" id="ut-volume-value" placeholder="예: 500" oninput="calcVolume()">
    </div>
    <div class="vc-row2">
      <div class="vc-field">
        <label for="ut-volume-from">단위</label>
        <select id="ut-volume-from" onchange="calcVolume()">
          <option value="ml">밀리리터 (ml)</option>
          <option value="l" selected>리터 (L)</option>
          <option value="cup">종이컵 (약 180ml)</option>
          <option value="gal">갤런 (gallon, 미국)</option>
        </select>
      </div>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="ut-volume-table">
        <thead><tr><th>단위</th><th>변환 결과</th></tr></thead>
        <tbody id="ut-volume-body"></tbody>
      </table>
    </div>
  </div>

  <!-- 온도 -->
  <div class="vc-panel" id="ut-panel-temp">
    <div class="vc-field">
      <label for="ut-temp-value">값</label>
      <input type="number" id="ut-temp-value" placeholder="예: 36.5" oninput="calcTemp()">
    </div>
    <div class="vc-row2">
      <div class="vc-field">
        <label for="ut-temp-from">단위</label>
        <select id="ut-temp-from" onchange="calcTemp()">
          <option value="c" selected>섭씨 (℃)</option>
          <option value="f">화씨 (℉)</option>
          <option value="k">켈빈 (K)</option>
        </select>
      </div>
    </div>
    <div class="table-wrap">
      <table class="vc-table" id="ut-temp-table">
        <thead><tr><th>단위</th><th>변환 결과</th></tr></thead>
        <tbody id="ut-temp-body"></tbody>
      </table>
    </div>
  </div>
</section>

<!-- AD SLOT 1 -->
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
  <h2>평은 왜 아직도 쓰이나요?</h2>
  <p>
    1961년 계량법 제정 이후 평·근·되 같은 전통 단위는 공식적으로 미터법(㎡, kg, L)으로 대체됐고,
    부동산 계약서나 공식 문서에는 반드시 제곱미터(㎡)를 표기해야 합니다. 하지만 아파트 크기를
    체감할 때는 여전히 "몇 평이냐"는 표현이 훨씬 익숙해서, 실생활에서는 평과 제곱미터가 함께
    쓰이고 있습니다.
  </p>
  <p class="vc-note">1평 = 3.3058㎡ (정확히는 400/121㎡). 흔히 "34평 = 84㎡"처럼 알고 있는 경우가 많은데,
    이는 전용면적이 아니라 공급면적(전용면적+공용면적) 기준입니다. 전용면적 84.9㎡가 통상
    "34평형"으로 불립니다.</p>
</section>

<section class="vc-card">
  <h2>관련 계산기</h2>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/realestate/acquisition-tax/">
      <span class="vc-related-title">취득세 계산기</span>
      <span class="vc-related-desc">주택수·조정지역·생애최초 감면 반영</span>
    </a>
    <a class="vc-related-card" href="/realestate/property-tax/">
      <span class="vc-related-title">종합부동산세 계산기</span>
      <span class="vc-related-desc">공시가격 기준 종부세 계산</span>
    </a>
    <a class="vc-related-card" href="/life/date/">
      <span class="vc-related-title">기념일·날짜 계산기</span>
      <span class="vc-related-desc">D-Day, 날짜 더하기·빼기, 음력↔양력</span>
    </a>
    <a class="vc-related-card" href="/life/age/">
      <span class="vc-related-title">만나이 계산기</span>
      <span class="vc-related-desc">만/세는/연나이 비교, 띠, D-day</span>
    </a>
  </div>
</section>

<section class="vc-card" id="ut-faq">
  <h2>자주 묻는 질문</h2>

  <div class="vc-faq-item">
    <h3>34평 아파트가 왜 84㎡라고도 하나요?</h3>
    <p>공급면적(평형) 기준 34평은 전용면적 기준으로는 약 84.9㎡입니다. "국민평형"으로 불리는
    이 크기는 전용면적 84㎡ 이하 주택에 주어지는 세제 혜택 기준선과도 맞물려 있어 특히 자주
    언급됩니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>1평은 정확히 몇 제곱미터인가요?</h3>
    <p>1평 = 3.3058㎡ (정확한 분수로는 400/121㎡)입니다. 어림잡아 "1평 ≒ 3.3㎡"로 계산해도
    큰 오차는 없습니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>부동산 계약서에는 평과 제곱미터 중 뭘 써야 하나요?</h3>
    <p>1961년 계량법 이후 공식 문서에는 제곱미터(㎡) 표기가 원칙입니다. 다만 실생활 대화에서는
    평 단위가 여전히 널리 쓰입니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>모바일에서도 사용할 수 있나요?</h3>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </div>
</section>

<!-- AD SLOT 2 -->
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
  .vc-row2 { display:grid; grid-template-columns:1fr 1fr; gap:12px; }
  @media (max-width:560px){ .vc-row2{ grid-template-columns:1fr; } }

  .cp-external-links { display:flex; gap:10px; flex-wrap:wrap; margin:16px 0 0; }
  .cp-external-links a {
    display:inline-block; padding:10px 16px; border:1px solid #1f5c7a; color:#1f5c7a;
    border-radius:10px; text-decoration:none; font-weight:600; font-size:0.9rem;
  }
  .cp-external-links a:hover { background:#cfdfe8; }

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .vc-table { width:100%; min-width:380px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .vc-table td.ut-main { font-weight:800; color:#e96f00; }

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
    .vc-related-grid { grid-template-columns:1fr; }
  }
</style>

<script>
(function(){
  const PYEONG_TO_SQM = 3.305785;

  window.fromPyeong = function(){
    const p = parseFloat(document.getElementById('ut-pyeong').value);
    if (isNaN(p)) return;
    document.getElementById('ut-sqm').value = (p * PYEONG_TO_SQM).toFixed(2);
  };
  window.fromSqm = function(){
    const s = parseFloat(document.getElementById('ut-sqm').value);
    if (isNaN(s)) return;
    document.getElementById('ut-pyeong').value = (s / PYEONG_TO_SQM).toFixed(2);
  };

  function renderTable(bodyId, rows){
    document.getElementById(bodyId).innerHTML = rows.map(r =>
      `<tr><td>${r[0]}</td><td class="ut-main">${r[1]}</td></tr>`
    ).join('');
  }

  // 길이: 전부 미터(m) 기준으로 환산 후 재분배
  const LENGTH_TO_M = { mm: 0.001, cm: 0.01, m: 1, km: 1000, in: 0.0254, ft: 0.3048, mile: 1609.344 };
  window.calcLength = function(){
    const v = parseFloat(document.getElementById('ut-length-value').value);
    const from = document.getElementById('ut-length-from').value;
    if (isNaN(v)) { document.getElementById('ut-length-body').innerHTML = ''; return; }
    const meters = v * LENGTH_TO_M[from];
    renderTable('ut-length-body', [
      ['밀리미터 (mm)', (meters / LENGTH_TO_M.mm).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['센티미터 (cm)', (meters / LENGTH_TO_M.cm).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['미터 (m)', (meters / LENGTH_TO_M.m).toLocaleString('ko-KR', {maximumFractionDigits: 3})],
      ['킬로미터 (km)', (meters / LENGTH_TO_M.km).toLocaleString('ko-KR', {maximumFractionDigits: 4})],
      ['인치 (in)', (meters / LENGTH_TO_M.in).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['피트 (ft)', (meters / LENGTH_TO_M.ft).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['마일 (mile)', (meters / LENGTH_TO_M.mile).toLocaleString('ko-KR', {maximumFractionDigits: 4})]
    ]);
  };

  // 무게: 전부 그램(g) 기준
  const WEIGHT_TO_G = { g: 1, kg: 1000, t: 1000000, lb: 453.59237, oz: 28.349523, geun: 600 };
  window.calcWeight = function(){
    const v = parseFloat(document.getElementById('ut-weight-value').value);
    const from = document.getElementById('ut-weight-from').value;
    if (isNaN(v)) { document.getElementById('ut-weight-body').innerHTML = ''; return; }
    const grams = v * WEIGHT_TO_G[from];
    renderTable('ut-weight-body', [
      ['그램 (g)', (grams / WEIGHT_TO_G.g).toLocaleString('ko-KR', {maximumFractionDigits: 1})],
      ['킬로그램 (kg)', (grams / WEIGHT_TO_G.kg).toLocaleString('ko-KR', {maximumFractionDigits: 3})],
      ['톤 (t)', (grams / WEIGHT_TO_G.t).toLocaleString('ko-KR', {maximumFractionDigits: 4})],
      ['파운드 (lb)', (grams / WEIGHT_TO_G.lb).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['온스 (oz)', (grams / WEIGHT_TO_G.oz).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['근 (斤)', (grams / WEIGHT_TO_G.geun).toLocaleString('ko-KR', {maximumFractionDigits: 2})]
    ]);
  };

  // 부피: 전부 밀리리터(ml) 기준
  const VOLUME_TO_ML = { ml: 1, l: 1000, cup: 180, gal: 3785.411784 };
  window.calcVolume = function(){
    const v = parseFloat(document.getElementById('ut-volume-value').value);
    const from = document.getElementById('ut-volume-from').value;
    if (isNaN(v)) { document.getElementById('ut-volume-body').innerHTML = ''; return; }
    const ml = v * VOLUME_TO_ML[from];
    renderTable('ut-volume-body', [
      ['밀리리터 (ml)', (ml / VOLUME_TO_ML.ml).toLocaleString('ko-KR', {maximumFractionDigits: 1})],
      ['리터 (L)', (ml / VOLUME_TO_ML.l).toLocaleString('ko-KR', {maximumFractionDigits: 3})],
      ['종이컵 (약 180ml)', (ml / VOLUME_TO_ML.cup).toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['갤런 (gallon)', (ml / VOLUME_TO_ML.gal).toLocaleString('ko-KR', {maximumFractionDigits: 3})]
    ]);
  };

  // 온도
  window.calcTemp = function(){
    const v = parseFloat(document.getElementById('ut-temp-value').value);
    const from = document.getElementById('ut-temp-from').value;
    if (isNaN(v)) { document.getElementById('ut-temp-body').innerHTML = ''; return; }
    let c;
    if (from === 'c') c = v;
    else if (from === 'f') c = (v - 32) * 5 / 9;
    else c = v - 273.15;
    const f = c * 9 / 5 + 32;
    const k = c + 273.15;
    renderTable('ut-temp-body', [
      ['섭씨 (℃)', c.toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['화씨 (℉)', f.toLocaleString('ko-KR', {maximumFractionDigits: 2})],
      ['켈빈 (K)', k.toLocaleString('ko-KR', {maximumFractionDigits: 2})]
    ]);
  };

  document.querySelectorAll('.vc-tab').forEach(function(tab){
    tab.addEventListener('click', function(){
      document.querySelectorAll('.vc-tab').forEach(function(t){ t.classList.remove('active'); });
      document.querySelectorAll('.vc-panel').forEach(function(p){ p.classList.remove('active'); });
      tab.classList.add('active');
      document.getElementById('ut-panel-' + tab.dataset.tab).classList.add('active');
    });
  });

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
    {"@type": "ListItem", "position": 3, "name": "단위 변환 계산기", "item": "https://calculator.khaistory.com/life/unit/"}
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
      "name": "34평 아파트가 왜 84㎡라고도 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "공급면적 기준 34평은 전용면적 기준으로 약 84.9㎡이며, 이 크기는 세제 혜택 기준선과도 맞물려 국민평형으로 불립니다."}
    },
    {
      "@type": "Question",
      "name": "1평은 정확히 몇 제곱미터인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "1평은 3.3058제곱미터(정확히는 400/121㎡)입니다."}
    },
    {
      "@type": "Question",
      "name": "부동산 계약서에는 평과 제곱미터 중 뭘 써야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "1961년 계량법 이후 공식 문서에는 제곱미터 표기가 원칙이며, 실생활 대화에서는 평 단위도 널리 쓰입니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
