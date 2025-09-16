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
<form id="age" onsubmit="event.preventDefault(); calcAge();" style="margin-bottom:12px;">
  <label>생년월일 <input type="date" id="dob" required></label>
  <label>기준일 <input type="date" id="ref" required></label>
  <button type="submit" class="btn">계산</button>
</form>

<!-- 결과 박스: 전역 .result-box 사용 -->
<div id="age-out" class="result-box"></div>

<script>
(function(){
  // 기준일 기본값: 오늘 날짜로 세팅 (사용자가 다른 날짜로 바꿀 수 있음)
  const ref = document.getElementById('ref');
  if (!ref.value) {
    const t = new Date();
    const yyyy = t.getFullYear();
    const mm = String(t.getMonth()+1).padStart(2,'0');
    const dd = String(t.getDate()).padStart(2,'0');
    ref.value = `${yyyy}-${mm}-${dd}`;
  }
})();

function calcAge(){
  const dobEl = document.getElementById('dob');
  const refEl = document.getElementById('ref');
  const out = document.getElementById('age-out');

  const dob = new Date(dobEl.value);
  const ref = new Date(refEl.value);

  if (isNaN(dob) || isNaN(ref)) {
    out.classList.add('show');
    out.innerHTML = '⚠️ 날짜를 정확히 선택해주세요.';
    return;
  }

  let age = ref.getFullYear() - dob.getFullYear();
  const m = ref.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && ref.getDate() < dob.getDate())) age--;

  out.classList.add('show');
  out.innerHTML = `📅 <strong>만 나이:</strong> ${age.toLocaleString()}세`;
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


