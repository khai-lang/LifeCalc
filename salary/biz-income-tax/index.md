---
layout: default
title: 사업자 종합소득세 계산기 (간편·근사형) 2025
description: 매출·필요경비·소득공제(인적공제 등)를 입력하면 과세표준과 산출세액, 세액공제, 지방소득세까지 근사 계산합니다.
permalink: /salary/biz-income-tax/
section: salary
---

<p class="muted" style="margin:6px 0 14px; line-height:1.7;">
  장부/특례/감면을 모두 반영하는 정밀 계산기는 아니며 <b>안내용 근사 계산</b>입니다.
  매출(총수입)과 필요경비, 인적공제(기본공제 가정) 등을 입력하면 <b>과세표준 → 산출세액 → 세액공제 → 지방소득세</b> 순으로 추정합니다.
</p>

<nav class="subnav" style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0;">
  <a class="chip" href="/salary/">연봉·급여·세금 허브</a>
  <a class="chip" href="/salary/income-tax/">종합소득세(간편)</a>
  <a class="chip" href="/salary/insurances/">4대보험 계산기</a>
</nav>

<section class="card p" style="max-width:980px;margin:20px auto;">
  <h2>입력</h2>

  <div class="grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
    <label>
      과세연도
      <select id="year">
        <option value="2025" selected>2025</option>
        <option value="2024">2024</option>
      </select>
    </label>

    <label>
      총수입(매출) (원)
      <input id="gross" type="text" inputmode="numeric" data-format="currency" placeholder="예: 120,000,000" required>
    </label>

    <label>
      필요경비 방식
      <select id="expMode">
        <option value="rate" selected>필요경비율(%)</option>
        <option value="amount">필요경비 금액(원)</option>
      </select>
    </label>

    <label id="expRateWrap">
      필요경비율(%)
      <input id="expRate" type="text" inputmode="decimal" data-format="number" placeholder="예: 60" value="60">
      <small class="muted">0~100 범위 권장 (근사)</small>
    </label>

    <label id="expAmtWrap" style="display:none">
      필요경비 금액(원)
      <input id="expAmt" type="text" inputmode="numeric" data-format="currency" placeholder="예: 72,000,000">
    </label>

    <label>
      인적공제 인원(본인 포함)
      <input id="dependents" type="number" inputmode="numeric" value="1" min="1" max="10">
      <small class="muted">기본공제 1인당 1,500,000원 가정(근사)</small>
    </label>

    <label>
      기타 소득공제(원)
      <input id="otherDeduct" type="text" inputmode="numeric" data-format="currency" placeholder="예: 1,000,000" value="0">
    </label>

    <label>
      세액공제율(%)
      <input id="taxCreditRate" type="text" inputmode="decimal" data-format="number" value="7">
      <small class="muted">표준세액공제 등 근사(기본 7%)</small>
    </label>

    <label>
      세액공제 한도(원)
      <input id="taxCreditCap" type="text" inputmode="numeric" data-format="currency" value="700,000">
      <small class="muted">기본 한도 70만원 가정(근사)</small>
    </label>
  </div>

  <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
    <button id="btn" class="btn">계산</button>
    <span class="muted" style="font-size:.92em;">※ 계산 후 결과 영역으로 자동 이동합니다.</span>
  </div>
</section>

<section class="card p" style="max-width:980px;margin:20px auto;" id="resultCard">
  <h2>결과</h2>
  <ul id="result" class="result-list" style="line-height:1.9"></ul>
  <p class="muted" style="margin-top:8px">
    ※ 안내용 근사치입니다. 실제 신고·납부액은 장부·특례·감면/공제·분리과세·기납부세액공제 등 다양한 요인으로 달라질 수 있습니다.
  </p>
</section>

<!-- ✅ SEO/체류(짧지만 효과 큰 “설명 섹션”) -->
<section class="card p" style="max-width:980px;margin:20px auto;">
  <h2>계산 흐름(간단 설명)</h2>
  <ul style="margin:0;padding-left:18px;line-height:1.8;">
    <li><b>총수입(매출) − 필요경비</b> = 종합소득금액(사업소득 가정)</li>
    <li><b>종합소득금액 − 소득공제</b> = 과세표준</li>
    <li><b>과세표준 × 누진세율 − 누진공제</b> = 산출세액</li>
    <li><b>산출세액 − 세액공제</b> = 결정세액(국세)</li>
    <li><b>결정세액 × 지방세율</b> = 지방소득세</li>
  </ul>
</section>

<!-- ✅ 내부 링크(수익/체류 증가) -->
<div class="btn-row" style="max-width:980px;margin:0 auto 24px;display:flex;gap:8px;flex-wrap:wrap;">
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
  <a class="btn" href="/salary/income-tax/">종합소득세(간편)도 계산하기</a>
  <a class="btn ghost" href="/salary/pension-tax-credit/">연금저축 세액공제 계산</a>
</div>

<style>
  .card{border:1px solid #eef1f4;border-radius:14px;background:#fff}
  .card.p{padding:16px}
  .btn{display:inline-block;background:#0ea5e9;color:#fff;border:none;border-radius:10px;padding:10px 16px;font-weight:700}
  .btn:hover{filter:brightness(0.95)}
  .btn.ghost{background:#f3f4f6;color:#111827}
  label{display:flex;flex-direction:column;gap:4px}
  .muted{color:#6b7280}
  ul.result-list{margin:0;padding-left:18px}
  .chip{display:inline-block;padding:8px 12px;border-radius:999px;background:#f3f4f6;color:#111827;text-decoration:none;font-weight:600}
  .chip:hover{filter:brightness(0.97)}
  /* 결과 강조(UX) */
  #resultCard.is-filled{box-shadow:0 12px 28px rgba(17,24,39,.08); border-color:#dbeafe}
</style>

<script>
/* ===== 데이터 로드: _data/payroll_korea.yml ===== */
const PAYROLL = {{ site.data.payroll_korea | jsonify }};

function annualBracketsOf(year){
  const y = PAYROLL[year];
  if(!y || !y.income_tax_brackets_monthly) return null;
  // 월 기준 구간을 “연 기준”으로 변환 (상한·퀵디덕션×12)
  return y.income_tax_brackets_monthly.map(b => ({
    up_to: (b.up_to === 999999999 ? 9e12 : b.up_to * 12),
    rate: b.rate,
    quick_deduction: (b.quick_deduction || 0) * 12
  }));
}

function localRateOf(year){
  // ✅ 연도 선택에 따라 지방세율도 바뀌도록 처리(버그 수정)
  const y = PAYROLL[year];
  const r = y?.local_income_tax_rate;
  return (typeof r === "number" && isFinite(r)) ? r : 0.10;
}

/* ===== 숫자 유틸 ===== */
const parseNum = v => {
  const n = parseFloat(String(v ?? "").replace(/[^\d.-]/g, "").replace(/,/g,""));
  return isFinite(n) ? n : 0;
};
const money = n => (isFinite(n) ? Math.round(n) : 0).toLocaleString('ko-KR');

/* ===== 입력 포맷(자릿수/콤마) : data-format="currency" / "number" ===== */
(function(){
  "use strict";
  function clean(v){ return String(v==null?"":v).replace(/[^\d.-]/g,""); }
  function fmtCurrency(el){
    let v = clean(el.value);
    if(!v){ el.value=""; return; }
    v = v.replace(/\./g,"");
    const n = parseInt(v,10);
    el.value = isFinite(n) ? n.toLocaleString("ko-KR") : "";
  }
  function fmtNumber(el){
    let v = clean(el.value);
    if(!v){ el.value=""; return; }
    // number는 소수점 허용(필요경비율 등)
    const n = parseFloat(v);
    el.value = isFinite(n) ? String(n) : "";
  }
  document.addEventListener("input", function(e){
    const t = e.target;
    if(!t || !t.dataset || !t.dataset.format) return;
    if(t.dataset.format==="currency") fmtCurrency(t);
    if(t.dataset.format==="number") fmtNumber(t);
  }, {passive:true});
  document.addEventListener("blur", function(e){
    const t = e.target;
    if(!t || !t.dataset || !t.dataset.format) return;
    if(t.dataset.format==="currency") fmtCurrency(t);
    if(t.dataset.format==="number") fmtNumber(t);
  }, true);
})();

/* ===== 로직 ===== */
function calcBiz(){
  const year    = document.getElementById('year').value;
  const gross   = parseNum(document.getElementById('gross').value);
  const expMode = document.getElementById('expMode').value;
  const expRate = parseNum(document.getElementById('expRate').value);
  const expAmtI = parseNum(document.getElementById('expAmt').value);
  const deps    = Math.max(1, parseInt(document.getElementById('dependents').value || '1', 10));
  const otherD  = Math.max(0, parseNum(document.getElementById('otherDeduct').value));
  const creditR = Math.max(0, parseNum(document.getElementById('taxCreditRate').value));
  const creditC = Math.max(0, parseNum(document.getElementById('taxCreditCap').value));

  if(!(gross > 0)){
    alert('총수입(매출)을 입력해 주세요.');
    document.getElementById('gross').focus();
    return;
  }

  const brackets = annualBracketsOf(year) || annualBracketsOf("2025");
  if(!brackets){
    alert('세율표 데이터를 불러오지 못했습니다.');
    return;
  }

  // 1) 필요경비
  let expense = 0;
  if(expMode === 'amount'){
    expense = Math.min(expAmtI, gross);
  } else {
    // 필요경비율은 0~100 정도를 가정
    const r = Math.min(Math.max(expRate, 0), 100) / 100;
    expense = Math.min(gross * r, gross);
  }

  // 2) 종합소득금액 (사업소득만 가정)
  const taxableIncomeBase = Math.max(0, gross - expense);

  // 3) 소득공제(근사): 인적공제 1인 1,500,000 + 기타 공제
  const basicPersonalDeduction = 1500000 * deps;
  const incomeDeduction = Math.max(0, basicPersonalDeduction + otherD);

  // 4) 과세표준
  const taxBase = Math.max(0, taxableIncomeBase - incomeDeduction);

  // 5) 산출세액 (연간 누진세 — 퀵디덕션 방식)
  let incomeTax = 0;
  for(const b of brackets){
    if(taxBase <= b.up_to){
      incomeTax = taxBase * b.rate - (b.quick_deduction || 0);
      break;
    }
  }
  incomeTax = Math.max(0, incomeTax);

  // 6) 세액공제(근사): 산출세액 × creditR, 단 creditC 한도
  const rCredit = Math.min(Math.max(creditR, 0), 100) / 100;
  const taxCredit = Math.min(creditC, Math.round(incomeTax * rCredit));
  const determinedIncomeTax = Math.max(0, incomeTax - taxCredit);

  // 7) 지방소득세(연도별)
  const localRate = localRateOf(year);
  const localTax = Math.round(determinedIncomeTax * localRate);

  // 8) 합계
  const totalTax = determinedIncomeTax + localTax;

  const lines = [
    ['과세연도', year, 'text'],
    ['총수입(매출)', gross],
    ['필요경비', expense],
    ['종합소득금액(사업소득 가정)', taxableIncomeBase],
    ['소득공제(근사)', incomeDeduction],
    ['과세표준', taxBase],
    ['산출세액(국세)', incomeTax],
    ['세액공제(근사)', -taxCredit],
    ['결정세액(국세)', determinedIncomeTax],
    [`지방소득세(${Math.round(localRate*100)}%)`, localTax],
    ['예상 납부세액(합계)', totalTax]
  ];

  const ul = document.getElementById('result');
  ul.innerHTML = lines.map(([k,v,t]) => {
    if(t === 'text') return `<li><b>${k}</b>: ${v}</li>`;
    return `<li><b>${k}</b>: ${money(v)} 원</li>`;
  }).join('');

  // UX: 결과 강조 + 자동 이동
  const card = document.getElementById('resultCard');
  card.classList.add('is-filled');
  card.scrollIntoView({behavior:"smooth", block:"start"});
}

/* UI: 모드 전환 */
document.getElementById('expMode').addEventListener('change', e=>{
  const m = e.target.value;
  document.getElementById('expRateWrap').style.display = (m==='rate' ? '' : 'none');
  document.getElementById('expAmtWrap').style.display  = (m==='amount' ? '' : 'none');
});
document.getElementById('btn').addEventListener('click', calcBiz);
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"연봉·급여·세금 허브","item":"https://calculator.khaistory.com/salary/"},
    {"@type":"ListItem","position":2,"name":"사업자 종합소득세 계산기","item":"https://calculator.khaistory.com/salary/biz-income-tax/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"얼마나 정확한가요?","acceptedAnswer":{"@type":"Answer","text":"장부/기장세액공제/세액감면/분리과세/세부 공제항목 등을 단순화한 근사치입니다. 신고용이 아닌 안내용입니다."}},
    {"@type":"Question","name":"필요경비는 어떻게 입력하나요?","acceptedAnswer":{"@type":"Answer","text":"필요경비율(%) 또는 필요경비 금액(원) 중 편한 방식을 선택하세요. 실제 적용 방식(단순경비율/기장 등)에 따라 달라질 수 있습니다."}},
    {"@type":"Question","name":"인적공제 1,500,000원 가정은 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"기본공제(인적공제)를 단순화해 1인당 150만원으로 가정한 근사 방식입니다. 실제 공제 가능 여부는 요건에 따라 달라집니다."}},
    {"@type":"Question","name":"세액공제율 7%·한도 70만원은 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"표준세액공제 등 일반적인 범위를 참고해 근사한 값입니다. 상황에 맞게 조정해 입력하세요."}}
  ]
}
</script>
