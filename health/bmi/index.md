---
layout: default
title: BMI 계산기 | 체질량지수 계산 및 비만도 확인
description: 키와 몸무게로 BMI(체질량지수)를 계산하고 저체중·정상·과체중·비만 여부를 확인해보세요.
permalink: /health/bmi/
---

<section class="bmi-page">
  <div class="bmi-container">

    <h2 class="bmi-title">BMI 계산기</h2>
    <p class="bmi-desc">
      키와 몸무게를 입력하면 <strong>체질량지수(BMI)</strong>를 계산하고
      현재 체중 상태를 간단하게 확인할 수 있습니다.
    </p>

    <div class="bmi-card">

      <form class="bmi-form" onsubmit="event.preventDefault(); calcBMI();">
        
        <div class="bmi-grid">

          <div class="bmi-field">
            <label class="bmi-label">키 (cm)</label>
            <input type="number" id="height" class="bmi-input" placeholder="예: 170" required>
          </div>

          <div class="bmi-field">
            <label class="bmi-label">몸무게 (kg)</label>
            <input type="number" id="weight" class="bmi-input" placeholder="예: 65" required>
          </div>

        </div>

        <button type="submit" class="bmi-btn">BMI 계산하기</button>

      </form>

      <div id="bmi-result" class="bmi-result"></div>

      <div id="bmi-guide" class="bmi-guide" style="display:none;">
        <h2 class="bmi-guide-title">결과 해석</h2>
        <p id="bmi-guide-text"></p>

        <!-- CTA -->
        <div class="bmi-cta-box">
          👉 더 정확한 체중 관리를 원하시나요?<br>
          <a href="/health/bmr/">기초대사량(BMR) 계산기 바로가기</a>
        </div>

      </div>

    </div>

    <!-- SEO 본문 -->
    <section class="bmi-seo">

      <h2>BMI(체질량지수)란 무엇인가요?</h2>
      <p>
        BMI는 체중(kg)을 키(m)의 제곱으로 나눈 값으로,
        현재 체중 상태를 간단하게 평가할 수 있는 대표적인 지표입니다.
      </p>

     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>
<!-- 계산기 광고 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3758454239921831"
     data-ad-slot="7492664289"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

      <h2>BMI 기준표</h2>
      <ul>
        <li>✔ 18.5 미만 → 저체중</li>
        <li>✔ 18.5 ~ 22.9 → 정상</li>
        <li>✔ 23 ~ 24.9 → 과체중</li>
        <li>✔ 25 이상 → 비만</li>
      </ul>

      <p>
        BMI는 간단하지만 근육량이나 체지방률을 반영하지 못하기 때문에,
        보다 정확한 분석을 위해서는 BMR이나 체지방률과 함께 보는 것이 좋습니다.
      </p>

      <div class="bmi-cta-box">
        👉 하루 칼로리까지 함께 계산해보세요<br>
        <a href="/health/calorie/">칼로리 계산기 바로가기</a>
      </div>

      <h2>자주 묻는 질문 (FAQ)</h2>

      <h3>Q. BMI가 정확한 지표인가요?</h3>
      <p>
        BMI는 간단한 참고 지표이며, 근육량이 많은 경우 실제보다 높게 나올 수 있습니다.
      </p>

      <h3>Q. BMI만으로 다이어트 판단이 가능한가요?</h3>
      <p>
        정확한 체중 관리를 위해서는 BMR, 체지방률, 식습관을 함께 고려해야 합니다.
      </p>

    </section>

  </div>
</section>

<style>
.bmi-container{
  max-width: 720px;
  margin: 0 auto;
}

.bmi-title{
  font-size: 28px;
  font-weight: 800;
}

.bmi-desc{
  margin-bottom: 20px;
  color: #555;
}

.bmi-card{
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 16px;
  background: #fff;
}

.bmi-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.bmi-field{
  display: flex;
  flex-direction: column;
}

.bmi-label{
  margin-bottom: 6px;
  font-weight: 600;
}

.bmi-input{
  height: 48px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 10px;
}

.bmi-btn{
  margin-top: 14px;
  width: 100%;
  height: 48px;
  background: #ff6a00;
  color: #fff;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  cursor: pointer;
}

.bmi-result{
  display: none;
  margin-top: 16px;
  padding: 16px;
  background: #fff7ef;
  border-radius: 12px;
}

.bmi-result.show{
  display: block;
}

.bmi-guide{
  margin-top: 16px;
  padding: 16px;
  background: #f5f9fc;
  border-radius: 12px;
}

.bmi-cta-box{
  margin-top: 14px;
  padding: 14px;
  background: #fff3e8;
  border-radius: 10px;
  text-align: center;
}

.bmi-cta-box a{
  display: inline-block;
  margin-top: 6px;
  background: #ff6a00;
  color: #fff;
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
}

.bmi-seo{
  margin-top: 40px;
  line-height: 1.8;
}

.adsense-placeholder{
  margin: 20px 0;
  padding: 20px;
  background: #f3f3f3;
  text-align: center;
  border-radius: 10px;
}

@media(max-width:640px){
  .bmi-grid{
    grid-template-columns: 1fr;
  }
}
</style>

<script>
function calcBMI(){
  const h = parseFloat(document.getElementById('height').value)/100;
  const w = parseFloat(document.getElementById('weight').value);

  const result = document.getElementById('bmi-result');
  const guide = document.getElementById('bmi-guide');
  const guideText = document.getElementById('bmi-guide-text');

  if(!h || !w){
    result.classList.add('show');
    result.innerHTML = '⚠️ 키와 몸무게를 정확히 입력해주세요.';
    guide.style.display = "none";
    return;
  }

  const bmi = (w/(h*h)).toFixed(1);

  let cat = "";
  let msg = "";

  if(bmi < 18.5){
    cat = "저체중";
    msg = "체중이 낮은 상태입니다. 영양 섭취와 근육량 증가를 고려해보세요.";
  }
  else if(bmi < 23){
    cat = "정상";
    msg = "건강한 체중 범위입니다. 현재 상태를 유지하는 것이 중요합니다.";
  }
  else if(bmi < 25){
    cat = "과체중";
    msg = "체중 증가가 시작되는 구간입니다. 식단과 활동량을 점검해보세요.";
  }
  else{
    cat = "비만";
    msg = "건강 관리를 위해 체중 조절이 필요한 상태입니다.";
  }

  result.classList.add('show');
  result.innerHTML = `
    📊 <strong>BMI:</strong> ${bmi}<br>
    🩺 <strong>체중 상태:</strong> ${cat}
  `;

  guideText.innerText = msg;
  guide.style.display = "block";
}
</script>
