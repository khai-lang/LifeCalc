---
layout: default
title: 월세→전세 전환 계산기
description: 월세를 전세로 바꿀 때 필요한 보증금과 전환율을 계산합니다.
permalink: finance/rent-to-jeonse/
---

# 월세↔전세 전환 계산기
<form id="rtj" onsubmit="event.preventDefault(); rtjCalc();" style="margin-bottom:12px;">
  <label>전환 방향
    <select id="mode" onchange="toggleMode()">
      <option value="r2j">월세 → 전세</option>
      <option value="j2r">전세 → 월세(보증금 감액)</option>
    </select>
  </label>

  <!-- 월세 → 전세 -->
  <div id="r2j-fields">
    <label>월세(만원)
      <input type="number" id="rent" placeholder="예: 100" required>
    </label>
    <label>현재 보증금(만원)
      <input type="number" id="deposit" value="0">
    </label>
  </div>

  <!-- 전세 → 월세 -->
  <div id="j2r-fields" style="display:none">
    <label>현재 전세 보증금(만원)
      <input type="number" id="jCurrent" placeholder="예: 3000">
    </label>
    <label>감액 후(목표) 보증금(만원)
      <input type="number" id="jTarget" placeholder="예: 1000">
    </label>
    <small style="color:#64748b">※ 감액 금액에 대해 월세가 발생합니다. (감액 보증금 × 전환이율 ÷ 12)</small>
  </div>

  <label>전환이율(%) 
    <input type="number" step="0.01" id="rate" value="4.0" required>
  </label>

  <button type="submit" class="btn">계산</button>
</form>

<!-- 결과 박스: 전역 .result-box 사용 -->
<div id="rtj-out" class="result-box"></div>

<script>
function toggleMode(){
  const m = document.getElementById('mode').value;
  document.getElementById('r2j-fields').style.display = (m === 'r2j') ? '' : 'none';
  document.getElementById('j2r-fields').style.display = (m === 'j2r') ? '' : 'none';
}

function out(html){
  const box = document.getElementById('rtj-out');
  box.classList.add('show');   // 전역 .result-box 표시
  box.innerHTML = html;
}

function fmtMan(v, digits=0){
  return Number(v).toLocaleString('ko-KR', {maximumFractionDigits: digits, minimumFractionDigits: digits});
}

function rtjCalc(){
  const mode = document.getElementById('mode').value;
  const rate = parseFloat(document.getElementById('rate').value || '0'); // % (예: 4.0)

  if (!Number.isFinite(rate) || rate <= 0){
    out('⚠️ 전환이율을 0보다 큰 값으로 입력해주세요.');
    return;
  }

  if (mode === 'r2j'){
    // 월세 → 전세
    const rent    = parseFloat(document.getElementById('rent').value || '0');     // 만원
    const deposit = parseFloat(document.getElementById('deposit').value || '0');  // 만원
    if (!Number.isFinite(rent) || rent <= 0){
      out('⚠️ 월세(만원)를 정확히 입력해주세요.');
      return;
    }
    // 총 필요 보증금(만원) ≈ (월세 × 12) ÷ 전환이율(%)
    const total = Math.round((rent * 12) / rate);
    const need  = total - (Number.isFinite(deposit) ? deposit : 0);
    const remark =
      need > 0 ? `추가 보증금 약 <strong>${fmtMan(need)}</strong>만원 필요`
      : need < 0 ? `보증금 여유 약 <strong>${fmtMan(-need)}</strong>만원`
      : '현재 보증금으로 전환 가능';

    out(`
      🏦 <strong>필요 보증금(추정):</strong> ${fmtMan(total)}만원
      <br>📌 ${remark}
      <br><small style="color:#64748b">* 단순화된 계산입니다. 실제 계약 조건(관리비·수선·특약 등)에 따라 달라질 수 있습니다.</small>
    `);
  } else {
    // 전세 → 월세 (보증금 감액)
    const jCur = parseFloat(document.getElementById('jCurrent').value || '0'); // 만원
    const jTar = parseFloat(document.getElementById('jTarget').value || '0');  // 만원
    if (!Number.isFinite(jCur) || !Number.isFinite(jTar)){
      out('⚠️ 보증금을 정확히 입력해주세요.');
      return;
    }
    const delta = jCur - jTar; // 감액 금액(만원)
    // 월세(만원) ≈ 감액 보증금 × 전환이율(%) ÷ 12
    const wolse = delta * rate / 12;

    if (delta <= 0){
      out(`
        ✅ 보증금이 증가(또는 동일)하여 월세가 추가로 발생하지 않습니다.
        <br><small style="color:#64748b">* 감액 보증금이 있을 때에만 월세가 발생합니다.</small>
      `);
      return;
    }

    out(`
      ⬇️ <strong>감액 보증금:</strong> ${fmtMan(delta)}만원
      <br>💸 <strong>예상 월세:</strong> <span class="accent">${fmtMan(Math.round(wolse*10)/10, 1)}</span>만원/월
      <br><small style="color:#64748b">* 계산식: 감액 보증금 × 전환이율(%) ÷ 12</small>
    `);
  }
}

// 초기 표시 상태 정리
toggleMode();
</script>

## 전환 공식 메모
- **월세 → 전세:** 필요 보증금(만원) ≈ (월세 × 12) ÷ 전환이율(%)  
- **전세 → 월세(감액):** 월세(만원) ≈ 감액 보증금 × 전환이율(%) ÷ 12
