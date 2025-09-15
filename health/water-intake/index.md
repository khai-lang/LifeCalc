---
layout: default
title: 물 섭취량 계산기
description: 체중·활동·기후를 고려한 하루 권장 수분 섭취량을 추정합니다.
permalink: health/water-intake/
---

# 물 섭취량 계산기
<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();waterCalc();">
    <label>체중(kg) <input type="number" id="kg" value="70" required></label>
    <label>유산소 등 활동(분/일) <input type="number" id="min" value="30" required></label>
    <label><input type="checkbox" id="hot"> 더운 환경/땀 많이 흘림</label>
    <button class="btn" style="background:#ff6a00;color:#fff;border:0">계산</button>
  </form>
  <div id="water-out" class="note"></div>
  <p style="font-size:14px;color:#6b7280">* 일반 가이드: 체중 1kg당 30~35ml + 운동 15분당 350~500ml 보충. 질환/의사 지시가 있으면 따르세요.</p>
</div>

<script>
function waterCalc(){
  const k=+kg.value, m=+min.value, isHot=hot.checked;
  let base = k * 32.5;                 // 30~35ml의 중간값
  let extra = (m/15) * 400;            // 15분당 0.4L 추가
  if(isHot) extra *= 1.2;              // 덥거나 땀 많으면 20% 가산
  const ml = Math.round(base + extra);
  const L  = (ml/1000).toFixed(2);
  water-out.innerHTML = `권장 수분: <b>${ml} ml</b> (약 <b>${L} L</b>/일)`;
}
</script>
