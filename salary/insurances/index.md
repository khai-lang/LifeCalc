---
layout: default
title: 4대보험 계산기 2025 — 근로자 부담액 자동 계산
description: 월급(세전) 기준 국민연금·건강보험(장기요양)·고용보험 근로자 부담액을 연도별 요율로 자동 계산합니다.
permalink: /salary/insurances/
---

<p id="rateNotice" class="muted" style="margin:10px 0 14px;"></p>

<form id="ins-form" onsubmit="event.preventDefault(); calcIns();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>월 급여(세전, 원)
      <input type="number" id="pay" placeholder="예: 3500000" required>
    </label>

    <label>국민연금(근로자 %)
      <input type="number" id="i_np" step="0.001" value="4.5">
    </label>

    <label>건강보험(근로자 %)
      <input type="number" id="i_hi" step="0.001" value="3.545">
    </label>

    <label>장기요양(% of 건보료)
      <input type="number" id="i_ltc" step="0.001" value="12.95">
    </label>

    <label>고용보험(근로자 %)
      <input type="number" id="i_ei" step="0.001" value="0.9">
    </label>

    <label style="display:flex;align-items:flex-end;gap:10px">
      <span class="muted" style="font-size:13px;line-height:1.3">
        ※ 요율은 자동 적용되며<br>필요 시 직접 수정 가능
      </span>
    </label>
  </div>

  <button class="btn" type="submit" style="margin-top:12px">계산</button>
</form>

<div id="ins-out" class="result-box" style="margin-top:14px"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/withholding/">다음: 원천징수세액</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
/* =========================
   0) 유틸
========================= */
const fmt = n => (Math.round(n)).toLocaleString('ko-KR');
function v(id){ return Math.max(0, Number(document.getElementById(id).value)||0); }

/* =========================
   1) 연도별 요율 자동 로드
   - /data/insurance-rates.json 구조:
     {
       "2025": {"np":0.045,"hi":0.03545,"ltc":0.1295,"ei":0.009},
       "2026": {"np":0.045,"hi":0.03595,"ltc":0.1314,"ei":0.009}
     }
   - ltc는 "건강보험료 대비 비율" (0.1295 = 12.95%)
========================= */
let RATE_TABLE = null;
let YEAR_USED = null;

async function loadRates(){
  if (RATE_TABLE) return RATE_TABLE;
  const res = await fetch("/data/insurance-rates.json", { cache: "no-store" });
  if (!res.ok) throw new Error("요율표(/data/insurance-rates.json) 로드 실패");
  RATE_TABLE = await res.json();
  return RATE_TABLE;
}

function pickRates(table, year){
  const y = String(year);
  if (table && table[y]) return { yearUsed: y, rates: table[y], fallback: false };

  if (table && Object.keys(table).length){
    const years = Object.keys(table).map(Number).sort((a,b)=>a-b);
    const latest = String(years[years.length - 1]);
    return { yearUsed: latest, rates: table[latest], fallback: true };
  }

  // 최후 fallback (JSON이 없거나 비어있을 때)
  return {
    yearUsed: "기본값",
    rates: { np:0.045, hi:0.03545, ltc:0.1295, ei:0.009 },
    fallback: true
  };
}

function setRateInputs(r){
  // 비율(0.045)을 입력칸 %로 변환해 넣기
  document.getElementById("i_np").value  = (r.np * 100).toFixed(3);
  document.getElementById("i_hi").value  = (r.hi * 100).toFixed(3);
  document.getElementById("i_ei").value  = (r.ei * 100).toFixed(3);
  document.getElementById("i_ltc").value = (r.ltc * 100).toFixed(2); // 건보료의 %
}

function setNotice({yearUsed, fallback}){
  const el = document.getElementById("rateNotice");
  if (!el) return;
  el.textContent = fallback
    ? `※ ${new Date().getFullYear()}년 요율 데이터가 없어 ${yearUsed}년(최신) 요율로 기본값을 적용했습니다.`
    : `※ ${yearUsed}년 요율을 기본값으로 자동 적용했습니다. (원하면 직접 수정 가능)`;
}

async function applyAutoRates(){
  const nowY = new Date().getFullYear();
  try{
    const table = await loadRates();
    const picked = pickRates(table, nowY);
    YEAR_USED = picked.yearUsed;
    setRateInputs(picked.rates);
    setNotice(picked);
  }catch(err){
    console.error(err);
    const picked = pickRates(null, nowY);
    YEAR_USED = picked.yearUsed;
    setRateInputs(picked.rates);
    const el = document.getElementById("rateNotice");
    if (el) el.textContent = "※ 요율표를 불러오지 못해 기본값으로 계산합니다. (/data/insurance-rates.json 확인 필요)";
  }
}

/* =========================
   2) 계산
========================= */
function calcIns(){
  const pay = v('pay');
  if (!pay){ alert('월 급여를 입력하세요.'); return; }

  const np = pay * (v('i_np')/100);
  const hi = pay * (v('i_hi')/100);
  const ltc = hi * (v('i_ltc')/100); // 장기요양: 건보료의 %
  const ei = pay * (v('i_ei')/100);

  const sum = Math.round(np + hi + ltc + ei);

  document.getElementById('ins-out').classList.add('show');
  document.getElementById('ins-out').innerHTML = `
    <div class="card p-3">
      <div class="title">근로자 부담액(월)</div>

      <div class="muted" style="margin:6px 0 10px">
        적용 요율 기준: <b>${YEAR_USED || "—"}</b>
      </div>

      <ul style="margin:0; padding-left:18px;">
        <li>국민연금: ${fmt(np)} 원</li>
        <li>건강보험: ${fmt(hi)} 원</li>
        <li>장기요양: ${fmt(ltc)} 원</li>
        <li>고용보험: ${fmt(ei)} 원</li>
        <li><strong>합계:</strong> ${fmt(sum)} 원</li>
      </ul>
    </div>
  `;
}

/* =========================
   3) 페이지 로드시 자동 요율 적용
========================= */
window.addEventListener("DOMContentLoaded", () => {
  applyAutoRates();
});
</script>
