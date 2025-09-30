---
layout: default
title: 연봉 실수령 계산기 2025
description: 2025년 4대보험·간이세액(근사) 반영한 연/월 실수령액 계산. 연봉↔시급 환산 탭 포함.
permalink: /salary/net-pay/
section: salary
---

# 연봉 실수령 계산기 2025

> **안내**: 실제 원천징수는 근로형태/수당/공제에 따라 달라질 수 있습니다. 본 계산기는 안내용입니다.

## 1) 입력
<form id="np-form" onsubmit="event.preventDefault(); calcNetpay();" style="margin-bottom:12px;">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <label>연봉(세전, 원)
      <input type="number" id="grossAnnual" placeholder="예: 42000000" required>
    </label>
    <label>보너스(연, 원)
      <input type="number" id="annualBonus" value="0">
    </label>
    <label>부양가족 수(본인 포함)
      <input type="number" id="dependents" value="1" min="1">
    </label>
    <label>추가 비과세/공제(월, 원)
      <input type="number" id="nontaxMonthly" value="0">
    </label>
  </div>

  <details style="margin:10px 0">
    <summary><strong>2025 요율(예시) 보기/수정</strong></summary>
    <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:8px">
      <label>국민연금(근로자 %)
        <input type="number" id="rate_np" step="0.001">
      </label>
      <label>건강보험(근로자 %)
        <input type="number" id="rate_hi" step="0.001">
      </label>
      <label>장기요양(% of 건강보험료)
        <input type="number" id="rate_ltc" step="0.001">
      </label>
      <label>고용보험(근로자 %)
        <input type="number" id="rate_ei" step="0.001">
      </label>
    </div>
    <small class="muted">정확 요율/상하한은 매년 공시값으로 업데이트해 주세요.</small>
  </details>

  <button type="submit" class="btn">실수령 계산</button>
</form>

<div id="np-out" class="result-box"></div>

<hr>

<!-- 탭 네비 -->
<nav class="subnav" style="display:flex;gap:8px;flex-wrap:wrap;margin:12px 0;">
  <a class="chip" href="#netpay">실수령 계산</a>
  <a class="chip" href="#convert">연봉↔시급 환산</a>
</nav>

<!-- B. 연봉↔시급 환산 -->
<section id="convert" class="card p-4" style="max-width:980px;margin:12px auto;scroll-margin-top:80px">
  <h2>연봉↔시급 환산</h2>
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
  <div class="mt-3"><button class="btn" id="convBtn">환산하기</button></div>
  <div id="convResult" class="grid-cards" style="margin-top:12px"></div>
</section>

<script>
/* ====== 2025 요율(예시) 한 곳에서 관리 ====== */
const RATES_2025 = {
  np: 0.045,   // 국민연금 근로자 부담률 (예시)
  hi: 0.035,   // 건강보험 근로자 부담률 (예시)
  ltc: 0.1295, // 장기요양 = 건강보험료의 12.95% (예시)
  ei: 0.009    // 고용보험 근로자 부담률 (예시)
};
// 입력창에 기본 세팅
['np','hi','ltc','ei'].forEach(k=>{
  const el = document.getElementById('rate_'+k);
  if (el) el.value = (RATES_2025[k]*100).toString();
});

// 숫자 포맷
const fmtKR = n => (Math.round(n)).toLocaleString('ko-KR');
const clamp0 = n => Math.max(0, Number(n)||0);

function getRates(){
  const np = clamp0(document.getElementById('rate_np').value)/100 || RATES_2025.np;
  const hi = clamp0(document.getElementById('rate_hi').value)/100 || RATES_2025.hi;
  const ltc= clamp0(document.getElementById('rate_ltc').value)/100 || RATES_2025.ltc;
  const ei = clamp0(document.getElementById('rate_ei').value)/100 || RATES_2025.ei;
  return {np, hi, ltc, ei};
}

function approxWithholding(monthTaxable, dependents){
  // 간이세액 매우 단순 근사: 기본공제/부양가족에 따라 대략적 비율 적용
  // ※ 실제 간이세액표가 아니라 안내용 근사입니다.
  const base = monthTaxable;
  let rate = 0.03; // 기본
  if (base > 4_000_000) rate = 0.065;
  else if (base > 3_000_000) rate = 0.055;
  else if (base > 2_000_000) rate = 0.045;
  // 부양가족 많으면 약간 낮춤
  rate = Math.max(0, rate - (dependents-1)*0.003);
  const tax = base * rate;
  const local = tax * 0.1; // 지방소득세 10%
  return {tax: Math.round(tax), local: Math.round(local)};
}

function calcNetpay(){
  const annual = clamp0(document.getElementById('grossAnnual').value);
  const bonus = clamp0(document.getElementById('annualBonus').value);
  const deps  = Math.max(1, clamp0(document.getElementById('dependents').value));
  const nontax= clamp0(document.getElementById('nontaxMonthly').value);

  if (!annual){ alert('연봉(세전)을 입력해 주세요.'); return; }

  const grossYear = annual + bonus;
  const grossMonth= grossYear/12;

  const {np,hi,ltc,ei} = getRates();
  // 4대보험 (상/하한은 단순화)
  const npPay = Math.round(grossMonth * np);
  const hiPay = Math.round(grossMonth * hi);
  const ltcPay= Math.round(hiPay * ltc);
  const eiPay = Math.round(grossMonth * ei);
  const insSum = npPay + hiPay + ltcPay + eiPay;

  // 과세표준 근사: 월급여 - 비과세 - 4대보험
  const taxable = Math.max(0, grossMonth - nontax - insSum);
  const {tax, local} = approxWithholding(taxable, deps);
  const netMonth = grossMonth - insSum - tax - local;

  const out = document.getElementById('np-out');
  out.classList.add('show');
  out.innerHTML = `
    <div class="card p-3">
      <div class="title">결과</div>
      <div class="desc">
        <ul>
          <li><strong>월 실수령(근사):</strong> ${fmtKR(netMonth)} 원</li>
          <li><strong>연 실수령(근사):</strong> ${fmtKR(netMonth*12)} 원</li>
        </ul>
        <details style="margin-top:8px">
          <summary>상세(4대보험/세금)</summary>
          <ul>
            <li>국민연금: ${fmtKR(npPay)} 원</li>
            <li>건강보험: ${fmtKR(hiPay)} 원</li>
            <li>장기요양: ${fmtKR(ltcPay)} 원</li>
            <li>고용보험: ${fmtKR(eiPay)} 원</li>
            <li>소득세(근사): ${fmtKR(tax)} 원</li>
            <li>지방소득세: ${fmtKR(local)} 원</li>
          </ul>
        </details>
      </div>
    </div>
  `;
}

/* ====== 환산 탭 스크립트 ====== */
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

const paidLeaveFactor = sel => sel === 'korea' ? 1.08 : 1.00;
if (convMode){
  convMode.addEventListener('change', ()=>{
    const m = convMode.value;
    if (m === 'hourly'){ convHourlyWrap.style.display=''; convAnnualWrap.style.display='none'; }
    else { convHourlyWrap.style.display='none'; convAnnualWrap.style.display=''; }
    convOut.innerHTML='';
  });
  convBtn.addEventListener('click', ()=>{
    const hours = clamp0(convHoursPerWeek.value);
    const weeks = clamp0(convWeeksPerYear.value);
    const factor= paidLeaveFactor(convPaidLeave.value);
    if (hours<=0 || weeks<=0){ alert('근무시간/근무주 확인'); return; }
    if (convMode.value==='hourly'){
      const hourly = clamp0(convHourly.value);
      if (!hourly){ alert('시급 입력'); return; }
      const annual = hourly * hours * weeks * factor;
      const monthly = annual/12;
      convOut.innerHTML = `
        <div class="card p-3"><div class="title">시급 → 연/월</div>
        <ul><li>월(세전): ${fmtKR(monthly)} 원</li><li>연(세전): ${fmtKR(annual)} 원</li></ul></div>`;
    }else{
      const annual = clamp0(convAnnual.value);
      if (!annual){ alert('연봉 입력'); return; }
      const hourly = (annual / (hours*weeks)) / factor;
      const monthly = annual/12;
      convOut.innerHTML = `
        <div class="card p-3"><div class="title">연봉 → 시급</div>
        <ul><li>월(세전): ${fmtKR(monthly)} 원</li><li>시급(세전): ${fmtKR(hourly)} 원</li></ul></div>`;
    }
  });
}
</script>
