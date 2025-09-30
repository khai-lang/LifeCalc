---
layout: default
title: 연봉 실수령 계산기
description: 연봉·월급 기준으로 4대보험 및 세금을 반영한 월/연 실수령액을 자동 계산. 연도별 요율은 데이터 파일 1곳에서만 업데이트.
permalink: /finance/net-pay/
section: finance
---

<h1>연봉 실수령 계산기</h1>
<p class="muted">연봉(또는 월급)을 입력하면 국민연금·건강보험(장기요양 포함)·고용보험·소득세·지방소득세를 반영한 <strong>실수령액</strong>을 계산합니다. 연도별 수치는 <code>_data/payroll_korea.yml</code>에 1번만 업데이트하면 전부 반영돼요.</p>

<div class="card p-4" style="max-width:980px;margin:auto">
  <div class="grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <label>계산 연도
      <select id="year"></select>
    </label>
    <label>연봉(세전, 원)
      <input id="annual" type="number" inputmode="numeric" placeholder="예) 42000000">
    </label>
    <label>상여(연 총액/없으면 0)
      <input id="annualBonus" type="number" inputmode="numeric" placeholder="예) 4000000">
    </label>
    <label>부양가족 수(본인 포함)
      <input id="dependents" type="number" min="1" step="1" placeholder="예) 1">
    </label>
  </div>

  <div class="mt-3">
    <button class="btn primary" id="calcBtn">실수령액 계산</button>
    <a class="btn" href="/finance/salary-hourly/">시급·연봉 환산기로 가기</a>
  </div>

  <hr class="my-4">

  <div id="result" class="grid-cards"></div>
</div>

<script>
// 연도별 파라미터 불러오기
const PAYROLL = {{ site.data.payroll_korea | jsonify }};

// UI 세팅: 연도
const yearSel = document.getElementById('year');
Object.keys(PAYROLL).sort().reverse().forEach(y=>{
  const opt=document.createElement('option'); opt.value=y; opt.textContent=y+'년';
  yearSel.appendChild(opt);
});
const currentY = String(new Date().getFullYear());
if (PAYROLL[currentY]) yearSel.value = currentY;

// 포맷
const fmt = n => (Math.round(n)).toLocaleString('ko-KR');

// 국민연금(하한/상한 적용)
function nationalPension(monthlySalary, cfg){
  const base = Math.min(Math.max(monthlySalary, cfg.floor), cfg.ceiling);
  return base * cfg.rate;
}
// 건강보험 + 장기요양
function healthInsurance(monthlySalary, cfg){
  const hi = monthlySalary * cfg.employee_rate;
  const ltc = hi * cfg.ltc_rate;
  return { hi, ltc, total: hi + ltc };
}
// 고용보험
const employmentInsurance = (monthlySalary, cfg) => monthlySalary * cfg.rate;

// 간편 소득세(월 과세표준 근사) + 지방소득세
function incomeTaxApprox(monthlyTaxBase, brackets, localRate, dependents){
  let tax = 0;
  for (const b of brackets){
    if (monthlyTaxBase <= b.up_to) { tax = monthlyTaxBase * b.rate - (b.quick_deduction || 0); break; }
  }
  if (tax < 0) tax = 0;
  // 간이세액표 근사 보정: 1인 초과 부양가족당 소액 차감(근사)
  tax = Math.max(0, tax - Math.max(0, dependents - 1) * 10000);
  const local = tax * localRate;
  return { income: tax, local, total: tax + local };
}

// 계산
document.getElementById('calcBtn').addEventListener('click', ()=>{
  const year = yearSel.value;
  const cfg = PAYROLL[year];
  const annual = Number(document.getElementById('annual').value || 0);
  const annualBonus = Number(document.getElementById('annualBonus').value || 0);
  const dependents = Math.max(1, Number(document.getElementById('dependents').value || cfg.default_dependents || 1));

  if (!annual || annual < 0){ alert('연봉(세전)을 입력해 주세요.'); return; }

  const monthlyGross = (annual + annualBonus) / 12;

  const np = nationalPension(monthlyGross, cfg.national_pension);
  const hi = healthInsurance(monthlyGross, cfg.health_insurance);
  const ei = employmentInsurance(monthlyGross, cfg.employment_insurance);
  const socialInsTotal = np + hi.total + ei;

  const monthlyTaxBase = Math.max(0, monthlyGross - socialInsTotal);
  const tax = incomeTaxApprox(monthlyTaxBase, cfg.income_tax_brackets_monthly, cfg.local_income_tax_rate, dependents);

  const monthlyDeds = { np, health: hi.hi, ltc: hi.ltc, ei, income: tax.income, local: tax.local };
  const dedSum = Object.values(monthlyDeds).reduce((a,b)=>a+b,0);

  const monthlyNet = monthlyGross - dedSum;
  const annualNet = monthlyNet * 12;

  document.getElementById('result').innerHTML = `
    <div class="card p-3">
      <div class="title">요약</div>
      <div class="desc">
        <ul>
          <li><strong>월 실수령액:</strong> ${fmt(monthlyNet)} 원</li>
          <li><strong>연 실수령액:</strong> ${fmt(annualNet)} 원</li>
          <li>월 총지급액(평균): ${fmt(monthlyGross)} 원</li>
        </ul>
      </div>
    </div>
    <div class="card p-3">
      <div class="title">월 공제내역</div>
      <div class="desc">
        <ul>
          <li>국민연금: ${fmt(np)} 원</li>
          <li>건강보험: ${fmt(hi.hi)} 원</li>
          <li>장기요양: ${fmt(hi.ltc)} 원</li>
          <li>고용보험: ${fmt(ei)} 원</li>
          <li>소득세(근사): ${fmt(tax.income)} 원</li>
          <li>지방소득세: ${fmt(tax.local)} 원</li>
          <li><strong>월 공제합계:</strong> ${fmt(dedSum)} 원</li>
        </ul>
      </div>
    </div>
    <p class="muted" style="margin-top:8px">※ 안내용 계산기입니다. 실제 급여와 차이가 날 수 있어요. 연도별 요율·상한은 <code>_data/payroll_korea.yml</code>에서 최신으로 유지해 주세요.</p>
  `;
});
</script>
