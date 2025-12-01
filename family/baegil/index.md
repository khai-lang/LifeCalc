---
layout: default
title: 백일 날짜 계산기
description: 출생일로부터 100일 되는 날짜를 계산합니다.
permalink: family/baegil/
---

<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); b100();" style="margin-bottom:12px;">
    <label>출생일 <input type="date" id="dob100" required></label>
    <button type="submit" class="btn">계산</button>
  </form>

  <!-- 결과 박스: 전역 .result-box 사용 -->
  <div id="b100-out" class="result-box"></div>
</div>

<script>
// YYYY-MM-DD → 로컬 Date 생성 (UTC 파싱 회피)
function parseLocalDate(str){
  const [y,m,d] = str.split('-').map(n => parseInt(n,10));
  return new Date(y, m-1, d);
}
// YYYY-MM-DD 포맷
function fmt(date){
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

function b100(){
  const val = document.getElementById('dob100').value;
  const out = document.getElementById('b100-out');
  if(!val){
    out.classList.add('show');
    out.innerHTML = '⚠️ 출생일을 선택해주세요.';
    return;
  }

  const birth = parseLocalDate(val);

  // 관습적 백일: 출생일 포함 계산(출생일을 1일로 보아 +99일)
  const incl = new Date(birth);
  incl.setDate(incl.getDate() + 99);

  // 단순 +100일(출생 다음 날을 1일로 보는 방식)
  const excl = new Date(birth);
  excl.setDate(excl.getDate() + 100);

  out.classList.add('show');
  out.innerHTML = `
    🎉 <strong>백일(출생일 포함 계산, +99일):</strong> ${fmt(incl)}<br>
    📅 <strong>+100일(출생 다음 날부터 계산):</strong> ${fmt(excl)}<br>
    <small style="color:#64748b">* 지역/가정별 관습에 따라 표기 방식이 다를 수 있습니다.</small>
  `;
}
</script>

