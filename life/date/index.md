---
layout: default
title: 기념일·날짜 계산기
description: 두 날짜 사이의 차이(며칠 전/며칠 후), D-Day, 기념일(100일/1년 등)을 계산합니다.
permalink: life/date/
---

<form id="datediff" onsubmit="event.preventDefault(); calcDiff();" style="margin-bottom:16px;">
  <label>
    시작 날짜
    <input type="date" id="start" required>
  </label>

  <label>
    종료 날짜
    <input type="date" id="end" required>
  </label>

  <button type="submit" class="btn">계산</button>
</form>

<!-- 결과 박스 -->
<div id="date-out" class="result-box"></div>

<script>
// 날짜 차이 계산
function calcDiff(){
  const s = document.getElementById('start').value;
  const e = document.getElementById('end').value;
  const out = document.getElementById('date-out');

  if(!s || !e){
    out.classList.add("show");
    out.innerHTML = "⚠️ 날짜를 모두 선택해주세요.";
    return;
  }

  const start = new Date(s);
  const end = new Date(e);

  const diffMs = end - start;
  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const dday = diffDay > 0 ? `D+${diffDay}` :
               diffDay < 0 ? `D${diffDay}` : "D-DAY";

  out.classList.add("show");
  out.innerHTML = `
    📅 <strong>두 날짜 차이:</strong> ${diffDay.toLocaleString()}일<br>
    🎉 <strong>D-Day 기준:</strong> ${dday}
  `;
}
</script>

## 계산 공식
- 날짜 차이 = `(종료일 - 시작일) ÷ 24시간`
- D-Day 표기:  
  • 종료일이 미래 → D+n  
  • 종료일이 과거 → D-n  
  • 같은 날 → D-DAY

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
