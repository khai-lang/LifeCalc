---
layout: default
title: 별자리·띠 찾기
description: 생일로 서양 별자리와 12간지를 확인합니다.
permalink: fun/astro/
---
# 별자리·띠 찾기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();astro();">
    <label>생년월일 <input type="date" id="ad" required></label>
    <button>확인</button>
  </form>
  <div id="astro-out" class="note"></div>
</div>
<script>
function zod(m,d){
  const t=[[1,20,'염소'],[2,19,'물병'],[3,21,'물고기'],[4,20,'양'],[5,21,'황소'],[6,22,'쌍둥이'],[7,23,'게'],
           [8,23,'사자'],[9,24,'처녀'],[10,23,'천칭'],[11,23,'전갈'],[12,24,'사수'],[12,32,'염소']];
  for(const [mm,dd,name] of t){ if(m<mm || (m===mm && d<dd)) return name; }
}
function branch(y){ const animals=['원숭이','닭','개','돼지','쥐','소','호랑이','토끼','용','뱀','말','양']; return animals[y%12]; }
function astro(){
  const dt=new Date(ad.value); const m=dt.getMonth()+1, d=dt.getDate(), y=dt.getFullYear();
  astro-out.innerText = `별자리: ${zod(m,d)} · 띠: ${branch(y)}`;
}
</script>

