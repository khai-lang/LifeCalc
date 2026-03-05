---
layout: default
title: 연봉 실수령 계산기 
description: 4대보험·간이세액(근사) 반영한 연/월 실수령액 계산. 연봉↔시급 환산 탭 포함.
permalink: /salary/net-pay/

---

> **안내**: 실제 원천징수는 근로형태/수당/공제에 따라 달라질 수 있습니다. 본 계산기는 안내용입니다.

<p id="rateNotice" class="muted" style="margin:8px 0 14px;"></p>

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
      <input type="number" id="nontaxMonthly" value="0" placeholder="예: 식대 200000">
</label>
  </div>

  <details id="rateDetails" style="margin:10px 0">
    <summary id="rateSummary"><strong>요율 보기/수정</strong></summary>
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
    <small class="muted">요율은 매년 변경될 수 있습니다. /data/insurance-rates.json만 업데이트하면 자동 반영됩니다.</small>
  </details>

  <button type="submit" class="btn">실수령 계산</button>
</form>

<div id="np-out" class="result-box"></div>

<!-- ✅ 연봉별 실수령 표 (자동 생성) -->
<section class="card p-3" style="max-width:980px;margin:14px auto;">
  <div class="title">연봉별 실수령 표(자동)</div>

  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin-top:10px">
    <label>시작(만원)
      <input id="tblStart" type="number" value="2500">
    </label>
    <label>끝(만원)
      <input id="tblEnd" type="number" value="8000">
    </label>
    <label>간격(만원)
      <input id="tblStep" type="number" value="500">
    </label>
    <label style="display:flex;align-items:flex-end">
      <button class="btn ghost" type="button" id="tblBtn">표 다시 만들기</button>
    </label>
  </div>

  <div id="tblOut" style="margin-top:12px;overflow:auto"></div>
  <div class="muted" style="margin-top:8px">
    ※ 표는 “현재 입력된 부양가족/비과세/요율” 기준으로 생성됩니다.
  </div>
</section>

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
/* =========================
   0) 유틸
========================= */
const fmtKR = n => (Math.round(n)).toLocaleString('ko-KR');
const clamp0 = n => Math.max(0, Number(n)||0);

/* =========================
   1) 요율 자동 적용(JSON)
   - /data/insurance-rates.json 예시 구조:
     {
       "2025": {"np":0.045,"hi":0.03545,"ltc":0.1295,"ei":0.009},
       "2026": {"np":0.045,"hi":0.03595,"ltc":0.1314,"ei":0.009}
     }
   - ltc는 "건강보험료의 비율" (예: 0.1295 = 12.95%)
========================= */

// ✅ 로드 실패 시 최소 fallback(예시 값) — JSON이 있으면 이 값은 거의 쓰지 않습니다.
const FALLBACK_RATES = {
  np: 0.045,
  hi: 0.03545,
  ltc: 0.1295,
  ei: 0.009
};

let RATE_TABLE = null;
let AUTO_RATES = { ...FALLBACK_RATES };
let YEAR_USED = "fallback";

async function loadRateTable(){
  if (RATE_TABLE) return RATE_TABLE;
  const res = await fetch("/data/insurance-rates.json", { cache: "no-store" });
  if (!res.ok) throw new Error("요율표(/data/insurance-rates.json) 로드 실패");
  RATE_TABLE = await res.json();
  return RATE_TABLE;
}

function pickRates(table, year){
  const y = String(year);
  if (table && table[y]) return { yearUsed: y, rates: table[y], fallback: false };

  // table이 있는데 해당 연도가 없으면 가장 최신 연도 사용
  if (table && Object.keys(table).length){
    const years = Object.keys(table).map(Number).sort((a,b)=>a-b);
    const latest = String(years[years.length - 1]);
    return { yearUsed: latest, rates: table[latest], fallback: true };
  }

  // table 자체가 없거나 비어있으면 fallback
  return { yearUsed: "fallback", rates: FALLBACK_RATES, fallback: true };
}

function setRateInputs(rates){
  // rates는 "비율" (0.045 등) → 입력칸은 "%" (4.5 등)
  const map = { np:'rate_np', hi:'rate_hi', ltc:'rate_ltc', ei:'rate_ei' };
  Object.keys(map).forEach(k=>{
    const el = document.getElementById(map[k]);
    if (!el) return;
    const val = (rates[k] * 100);
    // ltc는 보통 소수 둘째자리 정도면 충분
    el.value = (k === 'ltc') ? val.toFixed(2) : val.toFixed(3);
  });
}

function updateRateUIMessage({yearUsed, fallback}){
  const notice = document.getElementById("rateNotice");
  const summary = document.getElementById("rateSummary");

  if (summary){
    summary.innerHTML = `<strong>요율 보기/수정 (자동 적용: ${yearUsed})</strong>`;
  }
  if (notice){
    notice.textContent = fallback
      ? `※ 현재 연도 요율이 없거나 로드에 실패해 ${yearUsed} 요율(또는 기본값)로 계산됩니다. (/data/insurance-rates.json 업데이트 권장)`
      : `※ ${yearUsed}년 요율을 기본값으로 자동 적용했습니다. (원하면 아래에서 직접 수정 가능)`;
  }
}

async function applyAutoRates(){
  const nowY = new Date().getFullYear();
  try{
    const table = await loadRateTable();
    const picked = pickRates(table, nowY);
    AUTO_RATES = picked.rates;
    YEAR_USED = picked.yearUsed;

    setRateInputs(AUTO_RATES);
    updateRateUIMessage(picked);
  }catch(e){
    // JSON 로드 실패 → fallback
    AUTO_RATES = { ...FALLBACK_RATES };
    YEAR_USED = "fallback";
    setRateInputs(AUTO_RATES);
    updateRateUIMessage({yearUsed: "기본값", fallback: true});
    console.error(e);
  }
}

/* =========================
   2) 요율 읽기(getRates)
   - 사용자가 입력칸을 비워두면 AUTO_RATES를 사용
========================= */
function getRates(){
  const np = (clamp0(document.getElementById('rate_np')?.value)/100) || AUTO_RATES.np;
  const hi = (clamp0(document.getElementById('rate_hi')?.value)/100) || AUTO_RATES.hi;
  const ltc= (clamp0(document.getElementById('rate_ltc')?.value)/100) || AUTO_RATES.ltc;
  const ei = (clamp0(document.getElementById('rate_ei')?.value)/100) || AUTO_RATES.ei;
  return {np, hi, ltc, ei};
}

/* =========================
   3) 간이세액(근사)
========================= */
function approxWithholding(monthTaxable, dependents){
  // 매우 단순 근사(안내용) — 실제 간이세액표와 다를 수 있습니다.
  const base = monthTaxable;
  let rate = 0.03;
  if (base > 4_000_000) rate = 0.065;
  else if (base > 3_000_000) rate = 0.055;
  else if (base > 2_000_000) rate = 0.045;

  rate = Math.max(0, rate - (dependents-1)*0.003);
  const tax = base * rate;
  const local = tax * 0.1;
  return {tax: Math.round(tax), local: Math.round(local)};
}

/* =========================
   4) 실수령 계산
========================= */
function calcNetpay(){
  const annual = clamp0(document.getElementById('grossAnnual').value);
  const bonus  = clamp0(document.getElementById('annualBonus').value);
  const deps   = Math.max(1, clamp0(document.getElementById('dependents').value));
  const nontax = clamp0(document.getElementById('nontaxMonthly').value);

  if (!annual){ alert('연봉(세전)을 입력해 주세요.'); return; }

  const grossYear  = annual + bonus;
  const grossMonth = grossYear / 12;

  const {np,hi,ltc,ei} = getRates();

  // ✅ (여기에 지아님 기존 계산/출력 코드 계속...)
  // document.getElementById('np-out').innerHTML = `...`;

  // ✅ 표도 같이 갱신
  buildNetPayTable();
}


// ✅ ✅ ✅ calcNetpay 바깥에 있어야 합니다!
function buildNetPayTable(){
  const deps   = Math.max(1, clamp0(document.getElementById('dependents').value));
  const nontax = clamp0(document.getElementById('nontaxMonthly').value);
  const bonus  = clamp0(document.getElementById('annualBonus').value);

  const startMan = clamp0(document.getElementById('tblStart').value);
  const endMan   = clamp0(document.getElementById('tblEnd').value);
  const stepMan  = Math.max(1, clamp0(document.getElementById('tblStep').value));

  const start = startMan * 10000;
  const end   = endMan * 10000;
  const step  = stepMan * 10000;

  const {np,hi,ltc,ei} = getRates();

  const rows = [];
  for (let a = start; a <= end; a += step){
    const grossMonth = (a + bonus) / 12;

    // ✅ 4대보험(지아님 실수령 계산기와 동일 로직으로 맞추세요)
    const npPay = Math.round(grossMonth * np);
    const hiPay = Math.round(grossMonth * hi);
    const ltcPay= Math.round(hiPay * ltc);
    const eiPay = Math.round(grossMonth * ei);
    const insSum = npPay + hiPay + ltcPay + eiPay;

    const taxable = Math.max(0, grossMonth - nontax - insSum);
    const {tax, local} = approxWithholding(taxable, deps);

    const netMonth = grossMonth - (insSum + tax + local);

    rows.push({ annual: a, netMonthly: netMonth });
  }

  const out = document.getElementById("tblOut");
  if (!out) return;

  out.innerHTML = `
    <table style="width:100%;border-collapse:collapse;min-width:520px">
      <thead>
        <tr>
          <th style="text-align:left;border-bottom:1px solid #eee;padding:10px 8px">연봉(세전)</th>
          <th style="text-align:right;border-bottom:1px solid #eee;padding:10px 8px">월 실수령(근사)</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(x => `
          <tr>
            <td style="border-bottom:1px solid #f3f3f3;padding:10px 8px">${fmtKR(x.annual)} 원</td>
            <td style="border-bottom:1px solid #f3f3f3;padding:10px 8px;text-align:right;font-weight:900">${fmtKR(x.netMonthly)} 원</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

// 버튼 연결
document.getElementById("tblBtn").addEventListener("click", buildNetPayTable);

  // 4대보험 (상/하한은 단순화)
  const npPay = Math.round(grossMonth * np);
  const hiPay = Math.round(grossMonth * hi);
  const ltcPay= Math.round(hiPay * ltc);
  const eiPay = Math.round(grossMonth * ei);
  const insSum = npPay + hiPay + ltcPay + eiPay;

  // 과세표준 근사
  const taxable = Math.max(0, grossMonth - nontax - insSum);
  const {tax, local} = approxWithholding(taxable, deps);

  const totalDeduct = insSum + tax + local;
  const netMonth = grossMonth - totalDeduct;

  const out = document.getElementById('np-out');
  out.classList.add('show');
  out.innerHTML = `
    <div class="card p-3">
      <div class="title">결과</div>

      <ul style="margin:8px 0 0; padding-left:18px;">
        <li><strong>월 실수령(근사):</strong> ${fmtKR(netMonth)} 원</li>
        <li><strong>연 실수령(근사):</strong> ${fmtKR(netMonth*12)} 원</li>
        <li><strong>총 공제액(월):</strong> ${fmtKR(totalDeduct)} 원</li>
      </ul>

      <details style="margin-top:10px" open>
        <summary>상세(4대보험/세금)</summary>
        <ul style="margin:8px 0 0; padding-left:18px;">
          <li>국민연금: ${fmtKR(npPay)} 원</li>
          <li>건강보험: ${fmtKR(hiPay)} 원</li>
          <li>장기요양: ${fmtKR(ltcPay)} 원</li>
          <li>고용보험: ${fmtKR(eiPay)} 원</li>
          <li>소득세(근사): ${fmtKR(tax)} 원</li>
          <li>지방소득세: ${fmtKR(local)} 원</li>
        </ul>
      </details>

      <div class="muted" style="margin-top:10px">
        ※ 적용 요율 기준: <b>${YEAR_USED}</b> (요율 입력칸에서 직접 변경 가능) / 간이세액은 단순 근사입니다.
      </div>
    </div>
  `;
}

/* =========================
   5) 환산 탭 스크립트
========================= */
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
        <div class="card p-3">
          <div class="title">시급 → 연/월</div>
          <ul style="margin:8px 0 0; padding-left:18px;">
            <li>월(세전): ${fmtKR(monthly)} 원</li>
            <li>연(세전): ${fmtKR(annual)} 원</li>
          </ul>
        </div>`;
    }else{
      const annual = clamp0(convAnnual.value);
      if (!annual){ alert('연봉 입력'); return; }
      const hourly = (annual / (hours*weeks)) / factor;
      const monthly = annual/12;
      convOut.innerHTML = `
        <div class="card p-3">
          <div class="title">연봉 → 시급</div>
          <ul style="margin:8px 0 0; padding-left:18px;">
            <li>월(세전): ${fmtKR(monthly)} 원</li>
            <li>시급(세전): ${fmtKR(hourly)} 원</li>
          </ul>
        </div>`;
    }
  });
}

/* =========================
   6) 페이지 로드 시 자동 요율 적용
========================= */
window.addEventListener("DOMContentLoaded", () => {
  applyAutoRates();
});
</script>
