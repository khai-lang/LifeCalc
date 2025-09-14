---
layout: default
title: 출산 예정일 계산기
description: 마지막 생리일로 임신 주수와 출산 예정일을 계산합니다.
permalink: family/due-date/
---

# 출산 예정일 계산기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();ddCalc();">
    <label>마지막 생리 시작일 <input type="date" id="lmp" required></label>
    <button type="submit">계산</button>
  </form>
  <div id="dd-out" class="note"></div>
</div>

<script>
function ddCalc(){
  const v=document.getElementById('lmp').value; if(!v) return;
  const d=new Date(v); const due=new Date(d); due.setDate(due.getDate()+280); // 40주(280일)
  const now=new Date(); const weeks=Math.floor((now-d)/ (7*24*3600*1000));
  document.getElementById('dd-out').innerText =
    `예정일: ${due.toISOString().slice(0,10)} · 현재 임신 주수(대략): ${weeks}주`;
}
</script>
