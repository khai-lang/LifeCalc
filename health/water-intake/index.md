---
layout: default
title: 물 섭취량 계산기
description: 체중 기반 하루 권장 수분 섭취량을 추정합니다.
permalink: health/water-intake/
---
# 물 섭취량 계산기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();water();">
    <label>체중(kg) <input type="number" id="kg" value="70" required></label>
    <button>계산</button>
  </form>
  <div id="water-out" class="note"></div>
</div>
<script>
function water(){
  const k=+kg.value; if(!k) return;
  const ml = Math.round(k*30); // 30ml/kg 가이드
  water-out.innerText = `권장 수분: 약 ${ml} ml/일 (개인차 있음)`;
}
</script>
