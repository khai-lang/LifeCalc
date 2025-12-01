---
layout: default
title: 전세↔월세 전환 계산기 | 전세 전환율·월세 환산
description: 전세 보증금과 전환율로 예상 월세를 계산하거나, 월세를 전세 보증금으로 환산합니다. 관리비 포함/제외 옵션 제공.
permalink: /realestate/rent-to-jeonse/
redirect_from:
  - /finance/rent-conversion/
  - /finance/rent-conversion/index.html
  - /finance/rent-to-jeonse/
  - /finance/rent-to-jeonse/index.html
section: realestate
---


<div class="card" style="max-width:820px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); calcRentConv();" aria-label="전세·월세 전환 계산">
    <label for="mode"><strong>계산 모드</strong></label>
    <select id="mode" onchange="syncMode()" style="margin-bottom:10px">
      <option value="J2R">전세 → 월세</option>
      <option value="R2J">월세 → 전세</option>
    </select>

    <!-- 전세 → 월세 -->
    <fieldset id="boxJ2R" style="border:0;padding:0;margin:0">
      <h2 style="margin:6px 0 8px">전세 → 월세</h2>
      <label for="jeonse">전세 보증금(원)</label>
      <input type="number" id="jeonse" inputmode="numeric" placeholder="예: 200000000">

      <label for="rate">전환율(연 %)</label>
      <input type="number" id="rate" step="0.01" inputmode="decimal" placeholder="예: 4.0">

      <label for="mfee">관리비(월, 원) <small style="color:#6b7280">(선택)</small></label>
      <input type="number" id="mfee" inputmode="numeric" value="0">
    </fieldset>

    <!-- 월세 → 전세 (✅ 기존 보증금 추가) -->
    <fieldset id="boxR2J" style="border:0;padding:0;margin:0;display:none">
      <h2 style="margin:6px 0 8px">월세 → 전세</h2>
      <label for="rent">월세(원)</label>
      <input type="number" id="rent" inputmode="numeric" placeholder="예: 800000">

      <label for="rate2">전환율(연 %)</label>
      <input type="number" id="rate2" step="0.01" inputmode="decimal" placeholder="예: 4.0">

      <label for="deposit0">기존 보증금(원)</label>
      <input type="number" id="deposit0" inputmode="numeric" value="0" placeholder="예: 10000000">

      <label for="mfee2">관리비(월, 원) <small style="color:#6b7280">(월세에 관리비 포함 시 입력)</small></label>
      <input type="number" id="mfee2" inputmode="numeric" value="0">
    </fieldset>

    <div style="margin-top:12px">
      <button id="calcBtn" class="btn" type="submit">전세→월세 계산</button>
    </div>
  </form>

  <!-- 결과 -->
  <div id="result" class="result-box" style="margin-top:12px;"></div>

  <!-- ✅ 결과 아래 팁: 모바일 전용 -->
  <div class="promo-mobile" style="margin-top:10px">
    {% include promo-tip-rotate.html %}
  </div>

  <p style="font-size:14px;color:#6b7280;margin-top:10px">
    * 단순 이자(월세 ≈ 보증금 × 전환율 ÷ 12) 기반의 추정치입니다. 실제 계약은 지역/건물/시장 상황 등에 따라 달라질 수 있습니다.
  </p>
</div>

<style>
/* 결과 아래 팁: 데스크톱 숨김, 모바일 표시 */
@media (min-width: 861px){ .promo-mobile{ display:none; } }
@media (max-width: 860px){ .promo-mobile{ display:block; } }
</style>

<script>
function formatKRW(n){ return (isFinite(n)?Math.round(n):0).toLocaleString('ko-KR'); }
function nv(id){ const el=document.getElementById(id); return el ? (+el.value||0) : 0; }

function syncMode(){
  const mode = document.getElementById('mode').value;
  const j2r  = document.getElementById('boxJ2R');
  const r2j  = document.getElementById('boxR2J');
  const btn  = document.getElementById('calcBtn');
  if(mode === 'J2R'){ j2r.style.display=''; r2j.style.display='none'; btn.textContent='전세→월세 계산'; }
  else{ j2r.style.display='none'; r2j.style.display=''; btn.textContent='월세→전세 계산'; }
}

function calcRentConv(){
  const mode = document.getElementById('mode').value;
  const res  = document.getElementById('result');

  if(mode === 'J2R'){
    const J=nv('jeonse'), r=nv('rate')/100, fee=Math.max(0,nv('mfee'));
    const core = (J>0 && r>0) ? (J*r/12) : 0;
    const monthly = core + fee;
    res.innerHTML = `
      <div><strong>전세 → 월세</strong> : <b>${formatKRW(monthly)}</b> 원/월
        ${fee>0?` <span style="color:#6b7280">(관리비 포함)</span>`:''}
        <span style="color:#6b7280">· 순수 전환액 ${formatKRW(core)}원/월</span>
      </div>`;
  }else{
    const R=nv('rent'), r2=nv('rate2')/100, base=nv('deposit0'), fee2=Math.max(0,nv('mfee2'));
    const net = Math.max(0, R - fee2);             // 월세에서 관리비 제외
    const extra = (r2>0) ? (net / r2 * 12) : 0;    // 월세 환산 보증금
    const deposit = base + extra;                   // ✅ 기존 보증금 + 환산분
    res.innerHTML = `
      <div><strong>월세 → 전세</strong> : 등가 보증금 <b>${formatKRW(deposit)}</b> 원
        ${base>0?` <span style="color:#6b7280">(기존 보증금 ${formatKRW(base)}원 포함)</span>`:''}
        ${fee2>0?` <span style="color:#6b7280">(월세에서 관리비 ${formatKRW(fee2)}원 제외)</span>`:''}
      </div>`;
  }
  res.classList.add('show');
}
syncMode();
</script>


