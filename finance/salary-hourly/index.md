---
layout: default
title: 연봉↔시급 환산기
description: 연·월·시급을 서로 변환합니다.
permalink: finance/salary-hourly/
---

# 연봉↔시급 환산기
<form id="sal" onsubmit="event.preventDefault(); salCalc();">
  <label>연봉(만원) <input type="number" id="y" placeholder="예: 3600"></label>
  <label>월 근무시간(예: 209) <input type="number" id="mh" value="209"></label>
  <button type="submit">환산</button>
</form>
<div id="sal-out" class="note"></div>

<script>
function salOut(t){document.getElementById('sal-out').innerText=t;}
function salCalc(){
  const y=parseFloat(document.getElementById('y').value||0)*10000;
  const mh=parseFloat(document.getElementById('mh').value||209);
  if(!y){salOut("연봉을 입력하세요.");return;}
  const monthly=y/12; const hourly=Math.round(monthly/mh);
  salOut(`월 약 ${Math.round(monthly).toLocaleString()}원 · 시급 약 ${hourly.toLocaleString()}원`);
}
</script>
