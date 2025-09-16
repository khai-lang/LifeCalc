---
layout: default
title: BMI 계산기 (2025 최신)
description: 키와 몸무게로 체질량지수(BMI)를 즉시 계산하고 간단 해석을 제공합니다.
permalink: health/bmi/
---

# BMI 계산기
<form id="bmi-form" onsubmit="event.preventDefault(); calcBMI();" style="margin-bottom:12px;">
  <label>키(cm) <input type="number" id="height" required></label>
  <label>몸무게(kg) <input type="number" id="weight" required></label>
  <!-- BMI 계산 버튼: 전역 .btn 사용 -->
  <button type="submit" class="btn">계산</button>
</form>

<!-- 결과 박스: 전역 .result-box 사용 -->
<div id="bmi-result" class="result-box"></div>

<script>
function calcBMI(){
  const h = parseFloat(document.getElementById('height').value)/100;
  const w = parseFloat(document.getElementById('weight').value);
  const out = document.getElementById('bmi-result');

  if(!h || !w){
    out.classList.add('show');
    out.innerHTML = '⚠️ 키와 몸무게를 정확히 입력해주세요.';
    return;
  }

  const bmi = parseFloat((w/(h*h)).toFixed(1));
  let cat = "정상";
  if(bmi < 18.5) cat = "저체중";
  else if(bmi >= 25) cat = "과체중/비만";

  out.classList.add('show');
  out.innerHTML = `
    📊 <strong>BMI:</strong> ${bmi}<br>
    🩺 <strong>해석:</strong> ${cat}
  `;
}
</script>

## 공식
`BMI = 체중(kg) / 신장(m)^2`
