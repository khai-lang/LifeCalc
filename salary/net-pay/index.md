---
layout: default
title: 연봉 실수령 계산기 2025
description: 2025년 4대보험·소득세 반영한 연/월 실수령액 자동 계산. 연봉↔시급 환산 탭 제공.
permalink: /salary/net-pay/
section: salary
---

<h1>연봉 실수령 계산기</h1>
<!-- 탭 네비 -->
<nav class="subnav" style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0;">
  <a class="chip" href="#netpay">실수령 계산</a>
  <a class="chip" href="#convert">연봉↔시급 환산</a>
</nav>

<!-- B. 연봉↔시급 환산 (신규 섹션) -->
<section id="convert" class="card p-4" style="max-width:980px;margin:24px auto;scroll-margin-top:80px">
  <h2>연봉↔시급 환산</h2>
  <p class="muted">근무시간/주휴 고려 없는 간단 환산입니다. (옵션으로 한국 관행치 보정)</p>

  <div class="grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <label>입력 기준
      <select id="convMode">
        <option value="hourly">시급 → 연/월</option>
        <option value="annual">연봉 → 시급</option>
      </select>
    </label>
    <label>주당 근무시간(시간)
      <input id="convHoursPerWeek" type="number" inputmode="numeric" value="40">
    </label>
    <label>연 근무주(주)
      <input id="convWeeksPerYear" type="number" inputmode="numeric" value="52">
    </label>
    <label>주휴·유급휴일 보정
      <select id="convPaidLeave">
        <option value="none">미적용(순수 근무시간)</option>
        <option value="korea">한국 관행치(+8% 근사)</option>
      </select>
    </label>

    <label id="convHourlyWrap">시급(원)
      <input id="convHourly" type="number" inputmode="numeric" placeholder="예) 10000">
    </label>
    <label id="convAnnualWrap" style="display:none">연봉(세전, 원)
      <input id="convAnnual" type="number" inputmode="numeric" placeholder="예) 42000000">
    </label>
  </div>

  <div class="mt-3">
    <button class="btn" id="convBtn">환산하기</button>
  </div>

  <div id="convResult" class="grid-cards" style="margin-top:12px"></div>
</section>


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
   <script>
// ====== 환산 탭 스크립트 ======
const convMode = document.getElementById('convMode');
const convHourlyWrap = document.getElementById('convHourlyWrap');
const convAnnualWrap = document.getElementById('convAnnualWrap');
const convHourly = document.getElementById('convHourly');
const convAnnual = document.getElementById('convAnnual');
const convHoursPerWeek = document.getElementById('convHoursPerWeek');
const convWeeksPerYear = document.getElementById('convWeeksPerYear');
const convPaidLeave = document.getElementById('convPaidLeave');
const convBtn = document.getElementById('convBtn');
const convOut = document.getElementById('convResult');

const fmtKR = n => (Math.round(n)).toLocaleString('ko-KR');
const paidLeaveFactor = sel => sel === 'korea' ? 1.08 : 1.00;

if (convMode) {
  convMode.addEventListener('change', ()=>{
    const m = convMode.value;
    if (m === 'hourly'){ convHourlyWrap.style.display=''; convAnnualWrap.style.display='none'; }
    else { convHourlyWrap.style.display='none'; convAnnualWrap.style.display=''; }
    convOut.innerHTML = '';
  });
  convBtn.addEventListener('click', ()=>{
    const hours = Number(convHoursPerWeek.value || 0);
    const weeks = Number(convWeeksPerYear.value || 0);
    const factor = paidLeaveFactor(convPaidLeave.value);
    if (hours<=0 || weeks<=0){ alert('근무시간/근무주를 확인해 주세요.'); return; }

    if (convMode.value === 'hourly'){
      const hourly = Number(convHourly.value || 0);
      if (!hourly){ alert('시급을 입력해 주세요.'); return; }
      const annual = hourly * hours * weeks * factor;
      const monthly = annual / 12;
      convOut.innerHTML = `
        <div class="card p-3">
          <div class="title">시급 → 연/월 환산</div>
          <div class="desc">
            <ul>
              <li><strong>월 환산(세전):</strong> ${fmtKR(monthly)} 원</li>
              <li><strong>연 환산(세전):</strong> ${fmtKR(annual)} 원</li>
            </ul>
          </div>
        </div>`;
    } else {
      const annual = Number(convAnnual.value || 0);
      if (!annual){ alert('연봉(세전)을 입력해 주세요.'); return; }
      const hourly = (annual / (hours * weeks)) / factor; // 역산
      const monthly = annual / 12;
      convOut.innerHTML = `
        <div class="card p-3">
          <div class="title">연봉 → 시급 환산</div>
          <div class="desc">
            <ul>
              <li><strong>월 환산(세전):</strong> ${fmtKR(monthly)} 원</li>
              <li><strong>시급(세전):</strong> ${fmtKR(hourly)} 원</li>
            </ul>
          </div>
        </div>`;
    }
  });
}
</script>
<style>.chip{display:inline-block;padding:6px 10px;border:1px solid #e6ebf0;border-radius:999px;background:#fff}.chip:hover{background:#f6f7f9}</style>
<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/finance/salary/#insurances">다음: 4대보험 계산</a>
  <a class="btn" href="/finance/salary/#withholding">원천징수로 이동</a>
  <a class="btn ghost" href="/finance/salary/">허브로 돌아가기</a>
</div>
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/finance/"},
    {"@type":"ListItem","position":2,"name":"연봉·급여·세금 허브","item":"https://calculator.khaistory.com/finance/salary/"},
    {"@type":"ListItem","position":3,"name":"연봉 실수령 계산기","item":"https://calculator.khaistory.com/finance/net-pay/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"보너스는 어떻게 반영되나요?","acceptedAnswer":{"@type":"Answer","text":"보너스 총액을 12개월로 나누어 월 평균 지급액에 합산합니다."}},
    {"@type":"Question","name":"부양가족 수는 어떻게 적용되나요?","acceptedAnswer":{"@type":"Answer","text":"간편모드에서는 부양가족 수에 따른 간이세액 근사 보정을 적용합니다. 정확모드는 간이세액표 CSV로 확장 가능합니다."}},
    {"@type":"Question","name":"연도별 요율은 어디서 바꾸나요?","acceptedAnswer":{"@type":"Answer","text":"_data/payroll_korea.yml 파일의 해당 연도 블록을 수정하면 자동 반영됩니다."}}
  ]
}
</script>

  
</script>
