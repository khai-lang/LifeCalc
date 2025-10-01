---
layout: default
title: 사업자 종합소득세 계산기 (간편·근사형) 2025
description: 매출·필요경비·소득공제(인적공제 등)를 입력하면 과세표준과 산출세액, 세액공제, 지방소득세까지 근사 계산합니다.
permalink: /salary/biz-income-tax/
section: salary
---

<h1>사업자 종합소득세 계산기 (간편·근사형)</h1>
<p class="muted">
  장부/특례/감면을 모두 반영하는 정밀 계산기는 아니며, <b>근사 계산</b>용입니다.
  과세표준과 누진세율·필요경비·기본세액공제(사용자 입력)를 중심으로 산출합니다.
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
        <option value="2025">2025</option>
        <option value="2024">2024</option>
      </select>
    </label>

    <label>
      총수입(매출) (원)
      <input id="gross" type="text" inputmode="decimal" data-format="currency" placeholder="예: 120,000,000">
    </label>

    <label>
      필요경비 방식
      <select id="expMode">
        <option value="rate">필요경비율(%)</option>
        <option value="amount">필요경비 금액(원)</option>
      </select>
    </label>

    <label id="expRateWrap">
      필요경비율(%)
      <input id="expRate" type="text" inputmode="decimal" data-format="number" placeholder="예: 60">
    </label>

    <label id="expAmtWrap" style="display:none">
      필요경비 금액(원)
      <input id="expAmt" type="text" inputmode="decimal" data-format="currency" placeholder="예: 72,000,000">
    </label>

    <label>
      인적공제 인원(본인 포함)
      <input id="dependents" type="number" inputmode="numeric" value="1" min="1" max="10">
      <small class="muted">기본공제 1인당 1,500,000원 가정(근사)</small>
    </label>

    <label>
      기타 소득공제(원)
      <input id="otherDeduct" type="text" inputmode="decimal" data-format="currency" placeholder="예: 1,000,000">
    </label>

    <label>
      세액공제율(%)
      <input id="taxCreditRate" type="text" inputmode="decimal" data-format="number" value="7">
      <small class="muted">표준세액공제 등 근사(기본 7%)</small>
    </label>

    <label>
      세액공제 한도(원)
      <input id="taxCreditCap" type="text" inputmode="decimal" data-format="currency" value="700,000">
      <small class="muted">기본 한도 70만원 가정(근사)</small>
    </label>
  </div>

  <div style="margin-top:16px">
    <button id="btn" class="btn">계산</button>
  </div>
</section>

<section class="card p" style="max-width:980px;margin:20px auto;">
  <h2>결과</h2>
  <ul id="result" class="result-list" style="line-height:1.8"></ul>
  <p class="muted" style="margin-top:8px">
    ※ 안내용 근사치입니다. 실제 신고·납부액은 장부·특례·감면/공제·분리과세/납부세액공제 등 다양한 요인으로 달라질 수 있습니다.
  </p>
</section>

<style>
.card{border:1px solid #eef1f4;border-radius:12px;background:#fff}
.card.p{padding:16px}
.btn{display:inline-block;background:#0ea5e9;color:#fff;border:none;border-radius:8px;padding:10px 16px;font-weight:600}
.btn:hover{filter:brightness(0.95)}
label{display:flex;flex-direction:column;gap:4px}
.muted{color:#6b7280}
ul.result-list{margin:0;padding-left:16px}
</style>

<script>
/* ===== 데이터 로드: _data/payroll_korea.yml → 연간 브래킷으로 변환 ===== */
const PAYROLL = {{ site.data.payroll_korea | jsonify }};
function annualBracketsOf(year){
  const y = PAYROLL[year];
  if(!y || !y.income_tax_brackets_monthly) return null;
  // 월 기준 구간을 “연 기준”으로 변환 (상한·퀵디덕션×12)
  return y.income_tax_brackets_monthly.map(b=>({
    up_to: (b.up_to===999999999? 9e12 : b.up_to*12),
    rate: b.rate,
    quick_deduction: (b.quick_deduction||0)*12
  }));
}
const LOCAL_TAX_RATE = (PAYROLL["2025"]?.local_income_tax_rate ?? 0.10);

/* ===== 공통 유틸(숫자/통화) — calc-common.html 의 CalcCommon와 동일 동작 ===== */
const DIGITS=/[^\d.-]/g;
const parseNum = v => { v=String(v??'').replace(/,/g,'').trim(); const n=parseFloat(v); return isFinite(n)?n:0; };
const money   = n => (isFinite(n)?Math.round(n):0).toLocaleString('ko-KR');

/* ===== 로직 ===== */
function calcBiz(){
  const year    = document.getElementById('year').value;
  const gross   = parseNum(document.getElementById('gross').value);
  const expMode = document.getElementById('expMode').value;
  const expRate = parseNum(document.getElementById('expRate').value)/100;
  const expAmtI = parseNum(document.getElementById('expAmt').value);
  const deps    = Math.max(1, parseInt(document.getElementById('dependents').value||'1',10));
  const otherD  = parseNum(document.getElementById('otherDeduct').value);
  const creditR = parseNum(document.getElementById('taxCreditRate').value)/100;
  const creditC = parseNum(document.getElementById('taxCreditCap').value);

  const brackets = annualBracketsOf(year) || annualBracketsOf("2025");
  if(!brackets){ alert('세율표 데이터를 불러오지 못했습니다.'); return; }

  // 1) 필요경비
  const expense = expMode==='amount' ? Math.min(expAmtI, gross) : Math.min(gross*expRate, gross);

  // 2) 종합소득금액 (사업소득만 가정)
  const taxableIncomeBase = Math.max(0, gross - expense);

  // 3) 소득공제 (근사): 인적공제 1인 1,500,000 + 기타 공제
  const basicPersonalDeduction = 1500000 * deps;
  const incomeDeduction = Math.max(0, basicPersonalDeduction + otherD);

  // 4) 과세표준
  const taxBase = Math.max(0, taxableIncomeBase - incomeDeduction);

  // 5) 산출세액 (연간 누진세 — 퀵디덕션 방식)
  let incomeTax = 0;
  for(const b of brackets){
    if(taxBase <= b.up_to){ incomeTax = taxBase * b.rate - (b.quick_deduction||0); break; }
  }
  incomeTax = Math.max(0, incomeTax);

  // 6) 세액공제 (근사): 산출세액 × creditR, 단 creditC 한도
  const taxCredit = Math.min(creditC, Math.round(incomeTax * creditR));
  const determinedIncomeTax = Math.max(0, incomeTax - taxCredit);

  // 7) 지방소득세 (국세의 10%)
  const localTax = Math.round(determinedIncomeTax * ({{ site.data.payroll_korea["2025"].local_income_tax_rate | default: 0.10 }}));

  // 8) 합계
  const totalTax = determinedIncomeTax + localTax;

  const lines = [
    ['총수입(매출)', gross],
    ['필요경비', expense],
    ['종합소득금액(사업소득)', taxableIncomeBase],
    ['소득공제(근사)', incomeDeduction],
    ['과세표준', taxBase],
    ['산출세액(국세)', incomeTax],
    ['세액공제(근사)', -taxCredit],
    ['결정세액(국세)', determinedIncomeTax],
    ['지방소득세(10%)', localTax],
    ['예상 납부세액(합계)', totalTax]
  ];

  const ul = document.getElementById('result');
  ul.innerHTML = lines.map(([k,v])=>`<li><b>${k}</b>: ${money(v)} 원</li>`).join('');
}

/* UI: 모드 전환 */
document.getElementById('expMode').addEventListener('change', e=>{
  const m = e.target.value;
  document.getElementById('expRateWrap').style.display = (m==='rate'?'':'none');
  document.getElementById('expAmtWrap').style.display  = (m==='amount'?'':'none');
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
    {"@type":"Question","name":"얼마나 정확한가요?","acceptedAnswer":{"@type":"Answer","text":"장부/기장세액공제/세액감면/분리과세/소득공제 세부 항목 등을 단순화한 근사치입니다. 신고용이 아닌 안내용입니다."}},
    {"@type":"Question","name":"필요경비는 어떻게 입력하나요?","acceptedAnswer":{"@type":"Answer","text":"필요경비율(%) 또는 금액(원) 중 편한 방식을 선택하세요. 장부(간편·복식)·단순경비율 등 실제 적용 방식에 따라 달라질 수 있습니다."}},
    {"@type":"Question","name":"세액공제 7%/70만원 기준은 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"표준세액공제 등 일반적인 한도를 근사한 값입니다. 상황에 따라 조정해 입력하세요."}}
  ]
}
</script>
