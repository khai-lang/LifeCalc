---
layout: default
title: 기념일·날짜 계산기
description: D-Day, N일 뒤/전 날짜, 100일·돌을 간편 계산합니다.
permalink: life/date/
---

# 기념일·날짜 계산기
<form id="date-form" onsubmit="event.preventDefault(); runDate();" style="margin-bottom:12px;">
  <label>기준 날짜 <input type="date" id="base" required></label>
  <label>N일 (+앞으로 / -과거) <input type="number" id="days" value="100" required></label>
  <button type="submit" class="btn">계산</button>
</form>

<!-- 결과 박스: 전역 .result-box 사용 -->
<div id="date-out" class="result-box"></div>

<script>
// YYYY-MM-DD로 포맷 (로컬 기준)
function fmt(date){
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,'0');
  const d = String(date.getDate()).padStart(2,'0');
  return `${y}-${m}-${d}`;
}

// 페이지 로드 시 기준 날짜를 오늘로
(function(){
  const base = document.getElementById('base');
  if(!base.value){
    const t = new Date();
    base.value = fmt(t);
  }
})();

function runDate(){
  const baseVal = document.getElementById('base').value;
  const n = parseInt(document.getElementById('days').value, 10);
  const out = document.getElementById('date-out');

  if(!baseVal || Number.isNaN(n)){
    out.classList.add('show');
    out.innerHTML = '⚠️ 기준 날짜와 N일을 정확히 입력해주세요.';
    return;
  }

  const d = new Date(baseVal);
  d.setDate(d.getDate() + n);

  out.classList.add('show');
  out.innerHTML = `📅 <strong>결과:</strong> ${fmt(d)} <br><small style="color:#64748b">(${n >= 0 ? '+'+n : n}일 기준)</small>`;
}
</script>

## 예시
- 오늘 기준 100일: N=100 입력 → 결과 날짜 표시

<br><br><br>
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="1398373115"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
