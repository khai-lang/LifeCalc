---
layout: default
title: 만나이 계산기
description: 생년월일과 기준일로 만 나이를 계산합니다.
permalink: life/age/
redirect_from:
  - 만나이-정의/
  - 한국식-나이와-차이/
  - 계산-예시/
  - 법률-상-나이-규정/
  - definition/
  - korean-age/
  - example/
  - law/
---

# 만나이 계산기
<form id="age" onsubmit="event.preventDefault(); calcAge();">
  <label>생년월일 <input type="date" id="dob" required></label>
  <label>기준일 <input type="date" id="ref" required></label>
  <button type="submit">계산</button>
</form>
<div id="age-out" class="note"></div>

<script>
function calcAge(){
  const d=new Date(document.getElementById('dob').value);
  const r=new Date(document.getElementById('ref').value);
  if(isNaN(d)||isNaN(r)) return;
  let a=r.getFullYear()-d.getFullYear();
  const m=r.getMonth()-d.getMonth();
  if(m<0 || (m===0 && r.getDate()<d.getDate())) a--;
  document.getElementById('age-out').innerText=`만 ${a}세`;
}
</script>

## 계산 공식
`만 나이 = 기준연도 − 출생연도 (단, 생일 전이면 1 빼기)`
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

