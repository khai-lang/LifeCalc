---
layout: default
title: BMI 계산기 (2025 최신)
description: 키와 몸무게로 체질량지수(BMI)를 즉시 계산하고 간단 해석을 제공합니다.
permalink: health/bmi/
---

# BMI 계산기
<form id="bmi-form" onsubmit="event.preventDefault(); calcBMI();">
  <label>키(cm) <input type="number" id="height" required></label>
  <label>몸무게(kg) <input type="number" id="weight" required></label>
  <!-- BMI 계산기 버튼 -->
<button id="bmiBtn" type="button" class="btn-orange">계산</button>

</form>
<div id="bmi-result" class="note"></div>

<script>
function calcBMI(){
  const h=parseFloat(document.getElementById('height').value)/100;
  const w=parseFloat(document.getElementById('weight').value);
  if(!h||!w) return;
  const bmi=(w/(h*h)).toFixed(1);
  let cat="정상";
  if(bmi<18.5) cat="저체중";
  else if(bmi>=25) cat="과체중/비만";
  document.getElementById('bmi-result').innerText=`BMI: ${bmi} (${cat})`;
}
</script>

## 공식
`BMI = 체중(kg) / 신장(m)^2`
