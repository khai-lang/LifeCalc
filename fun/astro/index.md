---
layout: default
title: 별자리·띠 찾기
description: 생년월일로 서양 별자리와 12간지(띠)를 확인합니다.
permalink: fun/astro/
---

# 별자리·띠 찾기
<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();astro();">
    <label>생년월일 <input type="date" id="ad" required></label>
    <button class="btn" style="background:#ff6a00;color:#fff;border:0">확인</button>
  </form>
  <div id="astro-out" class="note"></div>
  <p style="font-size:14px;color:#6b7280">* 띠는 통상 양력 해 기준으로 계산했습니다(설 전 출생자는 음력 기준이 다를 수 있어요).</p>
</div>

<script>
function western(m,d){
  const t=[
    [1,20,'염소자리'],[2,19,'물병자리'],[3,21,'물고기자리'],
    [4,20,'양자리'],[5,21,'황소자리'],[6,22,'쌍둥이자리'],
    [7,23,'게자리'],[8,23,'사자자리'],[9,24,'처녀자리'],
    [10,23,'천칭자리'],[11,23,'전갈자리'],[12,24,'사수자리'],
    [12,32,'염소자리'] // 안전하게 마지막 처리
  ];
  for(const [mm,dd,name] of t){
    if(m < mm || (m === mm && d < dd)) return name;
  }
  return '염소자리'; // fallback
}

function zodiac(y){
  const animals=['원숭이','닭','개','돼지','쥐','소','호랑이','토끼','용','뱀','말','양'];
  return animals[y % 12];
}

function astro(){
  const input = document.getElementById("ad");
  if(!input.value) return;
  const dt = new Date(input.value);
  const m = dt.getMonth()+1, d = dt.getDate(), y = dt.getFullYear();
  document.getElementById("astro-out").innerHTML =
    `서양 별자리: <b>${western(m,d)}</b> · 12간지 띠: <b>${zodiac(y)}띠</b>`;
}
</script>
