---
layout: default
title: 연봉↔시급 환산기
description: 연·월·시급을 서로 변환합니다.
permalink: finance/salary-hourly/
---

# 연봉↔시급 환산기
<form id="sal" onsubmit="event.preventDefault(); salCalc();" style="margin-bottom:12px;">
  <label>연봉(만원)
    <input type="number" id="y" placeholder="예: 3600" required>
  </label>
  <label>월 근무시간(예: 209)
    <input type="number" id="mh" value="209" required>
  </label>
  <button type="submit" class="btn">환산</button>
</form>

<!-- 결과 박스: 전역 .result-box 사용 -->
<div id="sal-out" class="result-box"></div>

<script>
function salOut(html){
  const box = document.getElementById('sal-out');
  box.classList.add('show');
  box.innerHTML = html;
}

function salCalc(){
  const yInput  = parseFloat(document.getElementById('y').value || '0');   // 만원 입력
  const mhInput = parseFloat(document.getElementById('mh').value || '0');  // 월 근무시간

  if (!Number.isFinite(yInput) || yInput <= 0){
    salOut('⚠️ 연봉(만원)을 정확히 입력하세요.');
    return;
  }
  if (!Number.isFinite(mhInput) || mhInput <= 0){
    salOut('⚠️ 월 근무시간을 1 이상으로 입력하세요.');
    return;
  }

  const salaryKRW = yInput * 10000;        // 만원 → 원
  const monthly   = salaryKRW / 12;
  const hourly    = monthly / mhInput;

  const won = v => (Math.round(v)).toLocaleString() + '원';

  salOut(`
    💼 <strong>연봉:</strong> ${yInput.toLocaleString()}만원
    <br>📅 <strong>월 환산:</strong> ${won(monthly)}
    <br>⏱️ <strong>시급 환산:</strong> ${won(hourly)}
    <br><small style="color:#64748b">* 세전·기본 가정이며, 실제 급여/수당/소정근로시간에 따라 달라질 수 있습니다.</small>
  `);
}
</script>
