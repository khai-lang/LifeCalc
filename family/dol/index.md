---
layout: default
title: 첫돌(1주년) 날짜 계산기
description: 출생일 기준 첫돌(1주년) 날짜를 계산합니다.
permalink: family/dol/
---

# 첫돌(1주년) 날짜 계산기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();dol();">
    <label>출생일 <input type="date" id="dob1" required></label>
    <button type="submit">계산</button>
  </form>
  <div id="dol-out" class="note"></div>
</div>

<script>
function dol(){
  const v=document.getElementById('dob1').value; if(!v) return;
  const d=new Date(v); d.setFullYear(d.getFullYear()+1);  // 윤년 자동 보정
  document.getElementById('dol-out').innerText = `첫돌: ${d.toISOString().slice(0,10)}`;
}
</script>
