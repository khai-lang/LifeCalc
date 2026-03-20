---
layout: default
title: 칼로리 계산기 | 하루 권장 섭취 칼로리 계산
description: 성별, 나이, 키, 몸무게, 활동수준, 목표에 따라 하루 권장 칼로리를 계산해보세요.
permalink: /health/calorie/
---

<section class="calorie-page">
  <div class="calorie-container">

    <h1 class="calorie-title">칼로리 계산기</h1>
    <p class="calorie-desc">
      성별, 나이, 키, 몸무게, 활동수준, 목표를 입력하면
      <strong>하루 권장 섭취 칼로리</strong>를 계산할 수 있습니다.
    </p>

    <div class="calorie-card">
      <form class="calorie-form" onsubmit="event.preventDefault(); calcCalorie();">
        <div class="calorie-grid">

          <div class="calorie-field">
            <label for="calSex" class="calorie-label">성별</label>
            <select id="calSex" class="calorie-input">
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>

          <div class="calorie-field">
            <label for="calAge" class="calorie-label">나이(만, 세)</label>
            <input id="calAge" class="calorie-input" type="number" inputmode="numeric" placeholder="예: 28" required>
          </div>

          <div class="calorie-field">
            <label for="calHeight" class="calorie-label">키(cm)</label>
            <input id="calHeight" class="calorie-input" type="number" inputmode="decimal" placeholder="예: 170" required>
          </div>

          <div class="calorie-field">
            <label for="calWeight" class="calorie-label">몸무게(kg)</label>
            <input id="calWeight" class="calorie-input" type="number" inputmode="decimal" placeholder="예: 65" required>
          </div>

          <div class="calorie-field calorie-field-full">
            <label for="calActivity" class="calorie-label">활동수준</label>
            <select id="calActivity" class="calorie-input">
              <option value="1.2">거의 운동 안함</option>
              <option value="1.375">가벼운 운동(주 1~3회)</option>
              <option value="1.55">보통 운동(주 3~5회)</option>
              <option value="1.725">강한 운동(주 6~7회)</option>
              <option value="1.9">아주 강함(육체노동/선수)</option>
            </select>
          </div>

          <div class="calorie-field calorie-field-full">
            <label for="calGoal" class="calorie-label">목표</label>
            <select id="calGoal" class="calorie-input">
              <option value="cut">체중 감량</option>
              <option value="maintain">체중 유지</option>
              <option value="bulk">체중 증가</option>
            </select>
          </div>

        </div>

        <div class="calorie-actions">
          <button id="calorieBtn" class="calorie-btn" type="submit">칼로리 계산하기</button>
        </div>
      </form>

      <div id="calorieResult" class="calorie-result" aria-live="polite"></div>

      <div id="calorieGuide" class="calorie-guide" style="display:none;">
        <h2 class="calorie-guide-title">결과 해석</h2>
        <p id="calorieGuideText" class="calorie-guide-text"></p>

        <div class="calorie-cta-grid">
          <a class="calorie-cta" href="/health/bmr/">
            <strong>BMR 계산기</strong>
            <span>기초대사량과 유지 칼로리 확인</span>
          </a>
          <a class="calorie-cta" href="/health/bmi/">
            <strong>BMI 계산기</strong>
            <span>현재 체중 상태 함께 확인</span>
          </a>
        </div>
      </div>
    </div>

    <section class="calorie-seo">
      <h2>하루 권장 칼로리는 어떻게 계산되나요?</h2>
      <p>
        하루 권장 칼로리는 보통 기초대사량(BMR)에 활동량을 반영한
        <strong>TDEE(총 일일 에너지 소비량)</strong>를 기준으로 계산합니다.
        체중 감량이 목표라면 TDEE보다 적게, 체중 증가가 목표라면 TDEE보다 많이 섭취하는 방식으로 활용합니다.
      </p>

      <div class="adsense-placeholder">광고 영역</div>

      <h2>목표별 칼로리 설정 방법</h2>
      <ul>
        <li>✔ 체중 감량: 유지 칼로리보다 약 300~500 kcal 적게</li>
        <li>✔ 체중 유지: 유지 칼로리 수준으로 섭취</li>
        <li>✔ 체중 증가: 유지 칼로리보다 약 250~400 kcal 많이</li>
      </ul>

      <p>
        너무 극단적으로 칼로리를 줄이면 피로감, 폭식, 요요 가능성이 높아질 수 있으므로
        무리한 저칼로리 식단보다는 지속 가능한 범위에서 조절하는 것이 중요합니다.
      </p>

      <div class="calorie-cta-box">
        👉 기초대사량과 체중 상태도 함께 확인해보세요<br>
        <a href="/health/bmr/">BMR 계산기 바로가기</a>
        <a href="/health/bmi/" class="secondary-link">BMI 계산기 바로가기</a>
      </div>

      <h2>자주 묻는 질문 (FAQ)</h2>

      <h3>Q. 하루 권장 칼로리는 절대적인 기준인가요?</h3>
      <p>
        아니요. 계산 결과는 추정치이며 실제 활동량, 근육량, 생활 습관에 따라 차이가 생길 수 있습니다.
      </p>

      <h3>Q. 다이어트할 때 무조건 적게 먹을수록 좋나요?</h3>
      <p>
        아닙니다. 지나치게 낮은 칼로리는 오히려 지속하기 어렵고 건강에 부담이 될 수 있습니다.
      </p>

      <h3>Q. 체중 증가를 원할 때도 계산기가 도움이 되나요?</h3>
      <p>
        네. 유지 칼로리보다 일정량 더 섭취하는 기준점을 잡는 데 도움이 됩니다.
      </p>
    </section>

  </div>
</section>

<style>
  .calorie-container{
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
  }

  .calorie-title{
    margin: 0 0 10px;
    font-size: 2.2rem;
    line-height: 1.3;
    font-weight: 800;
    color: #1f2937;
    letter-spacing: -0.02em;
  }

  .calorie-desc{
    margin: 0 0 20px;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.7;
  }

  .calorie-card{
    background: #ffffff;
    border: 1px solid #e9edf2;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
  }

  .calorie-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .calorie-field{
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .calorie-field-full{
    grid-column: 1 / -1;
  }

  .calorie-label{
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 700;
    color: #243041;
  }

  .calorie-input{
    width: 100%;
    height: 50px;
    padding: 0 14px;
    border: 1px solid #d6dde5;
    border-radius: 12px;
    font-size: 16px;
    background: #fff;
    color: #111827;
    box-sizing: border-box;
    outline: none;
    transition: border-color .2s ease, box-shadow .2s ease;
  }

  .calorie-input:focus{
    border-color: #0f6b94;
    box-shadow: 0 0 0 4px rgba(15, 107, 148, 0.10);
  }

  .calorie-actions{
    margin-top: 18px;
  }

  .calorie-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    height: 50px;
    padding: 0 20px;
    border: 0;
    border-radius: 12px;
    background: #ff6a00;
    color: #fff;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: background .2s ease, transform .2s ease;
  }

  .calorie-btn:hover{
    background: #e85d00;
    transform: translateY(-1px);
  }

  .calorie-result{
    display: none;
    margin-top: 18px;
    padding: 18px 20px;
    border-radius: 14px;
    background: #fff7ef;
    border: 1px solid #ffd8b5;
    color: #222;
    font-size: 16px;
    line-height: 1.8;
  }

  .calorie-result.show{
    display: block;
  }

  .calorie-guide{
    margin-top: 18px;
    padding: 18px 20px;
    border-radius: 14px;
    background: #f8fbfd;
    border: 1px solid #dbeaf2;
  }

  .calorie-guide-title{
    margin: 0 0 10px;
    font-size: 1.15rem;
    font-weight: 800;
    color: #12344a;
  }

  .calorie-guide-text{
    margin: 0;
    color: #334155;
    line-height: 1.8;
  }

  .calorie-cta-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }

  .calorie-cta{
    display: block;
    text-decoration: none;
    background: #ffffff;
    border: 1px solid #dce7ee;
    border-radius: 14px;
    padding: 16px;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  }

  .calorie-cta:hover{
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);
    border-color: #bfd7e4;
  }

  .calorie-cta strong{
    display: block;
    color: #0f6b94;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .calorie-cta span{
    color: #475569;
    font-size: 14px;
    line-height: 1.6;
  }

  .calorie-seo{
    margin-top: 32px;
    padding: 22px;
    background: #ffffff;
    border: 1px solid #e9edf2;
    border-radius: 18px;
  }

  .calorie-seo h2{
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 800;
    color: #1f2937;
  }

  .calorie-seo h3{
    margin: 18px 0 8px;
    font-size: 1rem;
    font-weight: 800;
    color: #1f2937;
  }

  .calorie-seo p,
  .calorie-seo li{
    color: #4b5563;
    font-size: 15px;
    line-height: 1.8;
  }

  .calorie-seo ul{
    padding-left: 20px;
  }

  .calorie-cta-box{
    margin: 20px 0;
    padding: 16px;
    text-align: center;
    background: #fff7ef;
    border: 1px solid #ffd8b5;
    border-radius: 14px;
  }

  .calorie-cta-box a{
    display: inline-block;
    margin: 8px 6px 0;
    padding: 10px 14px;
    border-radius: 10px;
    background: #ff6a00;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
  }

  .calorie-cta-box a.secondary-link{
    background: #0f6b94;
  }

  .adsense-placeholder{
    margin: 24px 0;
    padding: 20px;
    text-align: center;
    background: #f5f5f5;
    border-radius: 10px;
    font-size: 14px;
    color: #999;
  }

  @media (max-width: 768px){
    .calorie-container{
      max-width: 100%;
    }

    .calorie-title{
      font-size: 1.8rem;
    }

    .calorie-card,
    .calorie-seo{
      padding: 18px;
      border-radius: 16px;
    }

    .calorie-grid{
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .calorie-field-full{
      grid-column: auto;
    }

    .calorie-cta-grid{
      grid-template-columns: 1fr;
    }

    .calorie-btn{
      width: 100%;
    }
  }
</style>

<script>
  function calcCalorie(){
    const age = parseFloat(document.getElementById("calAge").value);
    const height = parseFloat(document.getElementById("calHeight").value);
    const weight = parseFloat(document.getElementById("calWeight").value);
    const sex = document.getElementById("calSex").value;
    const activity = parseFloat(document.getElementById("calActivity").value);
    const goal = document.getElementById("calGoal").value;

    const resultBox = document.getElementById("calorieResult");
    const guideBox = document.getElementById("calorieGuide");
    const guideText = document.getElementById("calorieGuideText");

    if ([age, height, weight].some(x => Number.isNaN(x) || x <= 0)) {
      resultBox.classList.add("show");
      resultBox.innerHTML = "⚠️ 입력값을 다시 확인해주세요. 나이, 키, 몸무게는 0보다 큰 숫자로 입력해야 합니다.";
      guideBox.style.display = "none";
      return;
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
    const tdee = bmr * activity;

    let targetCalories = tdee;
    let goalLabel = "체중 유지";
    let guideMessage = "";

    if (goal === "cut") {
      targetCalories = tdee - 400;
      goalLabel = "체중 감량";
      guideMessage = "감량 목표 기준으로 유지 칼로리보다 약 400 kcal 낮게 계산했습니다. 너무 급격하게 줄이기보다는 지속 가능한 범위에서 식단을 조절하는 것이 좋습니다.";
    } else if (goal === "maintain") {
      targetCalories = tdee;
      goalLabel = "체중 유지";
      guideMessage = "현재 체중 유지를 목표로 한 권장 섭취 칼로리입니다. 실제 체중 변화에 따라 소폭 조정하며 활용하면 좋습니다.";
    } else if (goal === "bulk") {
      targetCalories = tdee + 300;
      goalLabel = "체중 증가";
      guideMessage = "증량 목표 기준으로 유지 칼로리보다 약 300 kcal 높게 계산했습니다. 단순히 많이 먹기보다 단백질과 규칙적인 운동을 함께 고려하는 것이 중요합니다.";
    }

    resultBox.classList.add("show");
    resultBox.innerHTML = `
      <strong>📊 BMR(기초대사량)</strong><br>
      ${Math.round(bmr).toLocaleString()} kcal/일
      <br><br>
      <strong>🔥 TDEE(유지 칼로리)</strong><br>
      ${Math.round(tdee).toLocaleString()} kcal/일
      <br><br>
      <strong>🍽 목표별 하루 권장 섭취 칼로리 (${goalLabel})</strong><br>
      ${Math.round(targetCalories).toLocaleString()} kcal/일
    `;

    guideText.textContent = guideMessage;
    guideBox.style.display = "block";
  }
</script>
