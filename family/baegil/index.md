---
layout: default
title: 백일 날짜 계산기
description: 출생일로부터 100일 되는 날짜를 계산합니다.
permalink: family/baegil/
---

# 백일 날짜 계산기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();b100();">
    <label>출생일 <input type="date" id="dob100" required></label>
    <button type="submit">계산</button>
  </form>
  <div id="b100-out" class="note"></div>
</div>

<script>
function b100(){
  const v=document.getElementById('dob100').value; if(!v) return;
  const d=new Date(v); d.setDate(d.getDate()+100);
  document.getElementById('b100-out').innerText = `백일: ${d.toISOString().slice(0,10)}`;
}
</script>
