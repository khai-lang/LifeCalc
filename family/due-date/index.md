---
layout: default
title: 출산 예정일 계산기
description: 마지막 생리일로 임신 주수와 출산 예정일을 계산합니다.
permalink: family/due-date/
---

<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); ddCalc();" style="margin-bottom:12px;">
    <label>마지막 생리 시작일 <input type="date" id="lmp" required></label>
    <button type="submit" class="btn">계산</button>
  </form>

  <!-- 결과 박스: 전역 .result-box 사용 -->
  <div id="dd-out" class="result-box"></div>
</div>

<script>
// YYYY-MM-DD → 로컬 Date (UTC 파싱 오류 방지)
function parseLocalDate(ymd){
  const [y,m,d] = ymd.split('-').map(n => parseInt(n,10));
  return new Date(y, m-1, d);
}
// YYYY-MM-DD 포맷
function fmt(date){
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

function ddCalc(){
  const val = document.getElementById('lmp').value;
  const out = document.getElementById('dd-out');

  if(!val){
    out.classList.add('show');
    out.innerHTML = '⚠️ 마지막 생리 시작일을 선택해주세요.';
    return;
  }

  const lmp = parseLocalDate(val);

  // 오늘(자정 기준)로 맞춰 하루 오차 방지
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  // 예정일 = LMP + 280일 (40주)
  const due = new Date(lmp);
  due.setDate(due.getDate() + 280);

  // 임신 주수 (주 + 일)
  const msPerDay = 24*60*60*1000;
  const diffDays = Math.floor((today - lmp) / msPerDay);

  if (diffDays < 0){
    out.classList.add('show');
    out.innerHTML = '⚠️ 마지막 생리 시작일이 오늘보다 미래입니다. 날짜를 다시 확인해주세요.';
    return;
  }

  const weeks = Math.floor(diffDays / 7);
  const days  = diffDays % 7;

  out.classList.add('show');
  out.innerHTML = `
    🗓 <strong>출산 예정일(추정):</strong> ${fmt(due)}<br>
    🤰 <strong>현재 임신 주수(대략):</strong> ${weeks}주 ${days}일차 (총 ${diffDays.toLocaleString('ko-KR')}일)<br>
    <small style="color:#64748b">* 일반적 추정치(40주 기준)이며, 개인·의료기관 안내에 따라 달라질 수 있습니다.</small>
  `;
}
</script>
