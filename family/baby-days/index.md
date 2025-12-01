---
layout: default
title: 아이 생후 N일·개월 계산기
description: 출생일 기준 오늘까지 생후 며칠/몇 개월인지 확인합니다.
permalink: family/baby-days/
---

<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); bdCalc();" style="margin-bottom:12px;">
    <label>출생일 <input type="date" id="dob" required></label>
    <label>기준일 <input type="date" id="ref"></label>
    <button type="submit" class="btn">계산</button>
  </form>

  <!-- 결과 박스: 전역 .result-box 사용 -->
  <div id="bd-out" class="result-box"></div>
</div>

<script>
// YYYY-MM-DD 포맷
function fmt(d){
  const y=d.getFullYear();
  const m=String(d.getMonth()+1).padStart(2,'0');
  const dd=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${dd}`;
}
// 숫자 보기 좋게
const i18n = n => Number(n).toLocaleString('ko-KR');

// 페이지 로드 시 기준일 기본값=오늘
(function init(){
  const ref = document.getElementById('ref');
  if(!ref.value) ref.value = fmt(new Date());
})();

function bdCalc(){
  const dobVal = document.getElementById('dob').value;
  const refVal = document.getElementById('ref').value || fmt(new Date());
  const out = document.getElementById('bd-out');

  if(!dobVal){
    out.classList.add('show');
    out.innerHTML = '⚠️ 출생일을 선택해주세요.';
    return;
  }

  const start = new Date(dobVal);
  const ref   = new Date(refVal);

  if (isNaN(start) || isNaN(ref)) {
    out.classList.add('show');
    out.innerHTML = '⚠️ 날짜를 정확히 선택해주세요.';
    return;
  }
  if (ref < start) {
    out.classList.add('show');
    out.innerHTML = '⚠️ 기준일이 출생일보다 빠릅니다. 날짜를 다시 확인해주세요.';
    return;
  }

  // 일 수
  const msPerDay = 24*60*60*1000;
  const days = Math.floor((ref - start) / msPerDay);

  // "개월" 계산: (년 차 ×12 + 월 차) 에서 일자 비교로 1개월 차감
  let months = (ref.getFullYear() - start.getFullYear())*12 + (ref.getMonth() - start.getMonth());
  if (ref.getDate() < start.getDate()) months--;

  out.classList.add('show');
  out.innerHTML = `
    👶 <strong>생후:</strong> 약 ${i18n(days)}일 · 약 ${i18n(Math.max(0, months))}개월
    <br><small style="color:#64748b">* 달의 길이(28~31일) 차이로 실제 개월 수와 약간 다를 수 있습니다.</small>
  `;
}
</script>
