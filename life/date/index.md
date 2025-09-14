---
layout: default
title: 기념일·날짜 계산기
description: D-Day, N일 뒤/전 날짜, 100일·돌을 간편 계산합니다.
permalink: life/date/
---

# 기념일·날짜 계산기
<form id="date-form" onsubmit="event.preventDefault(); runDate();">
  <label>기준 날짜 <input type="date" id="base" required></label>
  <label>N일 (+앞으로 / -과거) <input type="number" id="days" value="100" required></label>
  <button type="submit">계산</button>
</form>
<div id="date-result" class="note"></div>

<script>
function runDate(){
  const base=document.getElementById('base').value;
  const n=parseInt(document.getElementById('days').value,10);
  if(!base || isNaN(n)) return;
  const d=new Date(base);
  d.setDate(d.getDate()+n);
  document.getElementById('date-result').innerText = `${n}일 기준 날짜: ${d.toISOString().slice(0,10)}`;
}
</script>

## 예시
- 오늘 기준 100일: N=100 입력 → 결과 날짜 표시
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
