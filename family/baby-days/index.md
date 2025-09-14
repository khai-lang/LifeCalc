---
layout: default
title: 아이 생후 N일·개월 계산기
description: 출생일 기준 오늘까지 생후 며칠/몇 개월인지 확인합니다.
permalink: family/baby-days/
---

# 아이 생후 N일·개월 계산기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();bdCalc();">
    <label>출생일 <input type="date" id="dob" required></label>
    <label>기준일 <input type="date" id="ref"></label>
    <button type="submit">계산</button>
  </form>
  <div id="bd-out" class="note"></div>
</div>

<script>
function bdCalc(){
  const dob=document.getElementById('dob').value; if(!dob) return;
  const refV=document.getElementById('ref').value;
  const start=new Date(dob); const ref=refV? new Date(refV): new Date();
  const days=Math.floor((ref-start)/(24*3600*1000));
  // 개월 수(대략): 연*12 + 월 차, 일 비교
  let months=(ref.getFullYear()-start.getFullYear())*12 + (ref.getMonth()-start.getMonth());
  if(ref.getDate()<start.getDate()) months--;
  document.getElementById('bd-out').innerText =
    `생후 약 ${days}일 · 약 ${months}개월`;
}
</script>
