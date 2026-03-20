---
layout: default
title: BMR(기초대사량) 계산기 | 기초대사량·유지칼로리(TDEE) 계산
description: 성별, 나이, 키, 몸무게, 활동수준을 입력해 BMR(기초대사량)과 유지 칼로리(TDEE)를 계산해보세요.
permalink: /health/bmr/
---

<section class="lifecalc-page bmr-page">
  <div class="bmr-container">
    <h1 class="bmr-title">BMR(기초대사량) 계산기</h1>
    <p class="bmr-desc">
      Mifflin-St Jeor 공식을 기준으로 <strong>기초대사량(BMR)</strong>과
      <strong>유지 칼로리(TDEE)</strong>를 계산합니다.
    </p>

    <div class="bmr-card">
      <form class="bmr-form" onsubmit="event.preventDefault(); calcBmr();">
        <div class="bmr-grid">
          <div class="bmr-field">
            <label for="bmrSex" class="bmr-label">성별</label>
            <select id="bmrSex" class="bmr-input">
              <option value="male">남성</option>
              <option value="female">여성</option>
            </select>
          </div>

          <div class="bmr-field">
            <label for="bmrAge" class="bmr-label">나이(만, 세)</label>
            <input id="bmrAge" class="bmr-input" type="number" inputmode="numeric" placeholder="예: 28" required>
          </div>

          <div class="bmr-field">
            <label for="bmrHeight" class="bmr-label">키(cm)</label>
            <input id="bmrHeight" class="bmr-input" type="number" inputmode="decimal" placeholder="예: 170" required>
          </div>

          <div class="bmr-field">
            <label for="bmrWeight" class="bmr-label">몸무게(kg)</label>
            <input id="bmrWeight" class="bmr-input" type="number" inputmode="decimal" placeholder="예: 65" required>
          </div>

          <div class="bmr-field bmr-field-full">
            <label for="bmrActivity" class="bmr-label">활동수준</label>
            <select id="bmrActivity" class="bmr-input">
              <option value="1.2">거의 운동 안함</option>
              <option value="1.375">가벼운 운동(주 1~3회)</option>
              <option value="1.55">보통 운동(주 3~5회)</option>
              <option value="1.725">강한 운동(주 6~7회)</option>
              <option value="1.9">아주 강함(육체노동/선수)</option>
            </select>
          </div>
        </div>

        <div class="bmr-actions">
          <button id="bmrBtn" class="bmr-btn" type="submit">계산하기</button>
        </div>
      </form>

      <div id="bmrResult" class="bmr-result" aria-live="polite"></div>

      <div id="bmrGuide" class="bmr-guide" style="display:none;">
        <h2 class="bmr-guide-title">계산 결과 해석</h2>
        <p id="bmrGuideText" class="bmr-guide-text"></p>

        <div class="bmr-cta-grid">
          <a class="bmr-cta" href="/health/calorie/">
            <strong>칼로리 계산기</strong>
            <span>하루 섭취량 계획하기</span>
          </a>
          <a class="bmr-cta" href="/health/bmi/">
            <strong>BMI 계산기</strong>
            <span>체질량지수 함께 확인하기</span>
          </a>
        </div>
      </div>
    </div>

    <div class="bmr-info">
      <h2>기초대사량(BMR)이란?</h2>
      <p>
        기초대사량은 아무 활동을 하지 않아도 생명을 유지하기 위해 필요한 최소 에너지입니다.
        여기에 활동량을 반영하면 하루 유지 칼로리인 TDEE를 추정할 수 있습니다.
      </p>

      <h2>이 계산기는 어떻게 사용하나요?</h2>
      <ul>
        <li>성별, 나이, 키, 몸무게를 입력합니다.</li>
        <li>평소 운동량에 맞는 활동수준을 선택합니다.</li>
        <li>계산 결과에서 BMR과 유지 칼로리(TDEE)를 확인합니다.</li>
      </ul>
    </div>
  </div>
</section>

<style>
  .bmr-page{
    width: 100%;
  }

  .bmr-container{
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
  }

  .bmr-title{
    margin: 0 0 10px;
    font-size: 2.2rem;
    line-height: 1.3;
    font-weight: 800;
    color: #1f2937;
    letter-spacing: -0.02em;
  }

  .bmr-desc{
    margin: 0 0 20px;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.7;
  }

  .bmr-card{
    background: #ffffff;
    border: 1px solid #e9edf2;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
  }

  .bmr-form{
    margin: 0;
  }

  .bmr-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .bmr-field{
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .bmr-field-full{
    grid-column: 1 / -1;
  }

  .bmr-label{
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 700;
    color: #243041;
  }

  .bmr-input{
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

  .bmr-input:focus{
    border-color: #0f6b94;
    box-shadow: 0 0 0 4px rgba(15, 107, 148, 0.10);
  }

  .bmr-actions{
    margin-top: 18px;
  }

  .bmr-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 140px;
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

  .bmr-btn:hover{
    background: #e85d00;
    transform: translateY(-1px);
  }

  .bmr-result{
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

  .bmr-result.show{
    display: block;
  }

  .bmr-guide{
    margin-top: 18px;
    padding: 18px 20px;
    border-radius: 14px;
    background: #f8fbfd;
    border: 1px solid #dbeaf2;
  }

  .bmr-guide-title{
    margin: 0 0 10px;
    font-size: 1.15rem;
    font-weight: 800;
    color: #12344a;
  }

  .bmr-guide-text{
    margin: 0;
    color: #334155;
    line-height: 1.8;
  }

  .bmr-cta-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }

  .bmr-cta{
    display: block;
    text-decoration: none;
    background: #ffffff;
    border: 1px solid #dce7ee;
    border-radius: 14px;
    padding: 16px;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  }

  .bmr-cta:hover{
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);
    border-color: #bfd7e4;
  }

  .bmr-cta strong{
    display: block;
    color: #0f6b94;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .bmr-cta span{
    color: #475569;
    font-size: 14px;
    line-height: 1.6;
  }

  .bmr-info{
    margin-top: 28px;
    padding: 22px;
    background: #ffffff;
    border: 1px solid #e9edf2;
    border-radius: 18px;
  }

  .bmr-info h2{
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 800;
    color: #1f2937;
  }

  .bmr-info h2 + p,
  .bmr-info h2 + ul{
    margin-top: 0;
  }

  .bmr-info p,
  .bmr-info li{
    color: #4b5563;
    font-size: 15px;
    line-height: 1.8;
  }

  .bmr-info ul{
    padding-left: 20px;
    margin-bottom: 0;
  }

  @media (max-width: 768px){
    .bmr-container{
      max-width: 100%;
    }

    .bmr-title{
      font-size: 1.8rem;
    }

    .bmr-card,
    .bmr-info{
      padding: 18px;
      border-radius: 16px;
    }

    .bmr-grid{
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .bmr-field-full{
      grid-column: auto;
    }

    .bmr-cta-grid{
      grid-template-columns: 1fr;
    }

    .bmr-btn{
      width: 100%;
    }
  }
</style>

<script>
  function calcBmr(){
    const age = parseFloat(document.getElementById("bmrAge").value);
    const height = parseFloat(document.getElementById("bmrHeight").value);
    const weight = parseFloat(document.getElementById("bmrWeight").value);
    const sex = document.getElementById("bmrSex").value;
    const act = parseFloat(document.getElementById("bmrActivity").value);

    const resultBox = document.getElementById("bmrResult");
    const guideBox = document.getElementById("bmrGuide");
    const guideText = document.getElementById("bmrGuideText");

    if ([age, height, weight].some(x => Number.isNaN(x) || x <= 0)) {
      resultBox.classList.add("show");
      resultBox.innerHTML = "⚠️ 입력값을 다시 확인해주세요. 나이, 키, 몸무게는 0보다 큰 숫자로 입력해야 합니다.";
      guideBox.style.display = "none";
      return;
    }

    const bmr = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
    const tdee = bmr * act;

    resultBox.classList.add("show");
    resultBox.innerHTML = `
      <strong>📊 BMR(기초대사량)</strong><br>
      ${Math.round(bmr).toLocaleString()} kcal/일
      <br><br>
      <strong>🔥 TDEE(유지 칼로리)</strong><br>
      ${Math.round(tdee).toLocaleString()} kcal/일
    `;

    let guideMessage = "";

    if (act <= 1.2) {
      guideMessage = "현재 활동량이 낮은 편으로 계산되었습니다. 유지 칼로리는 비교적 낮게 나오며, 식단 조절 시 무리한 저칼로리 설정은 피하는 것이 좋습니다.";
    } else if (act <= 1.375) {
      guideMessage = "가벼운 활동 기준으로 계산되었습니다. 일상적인 움직임이 어느 정도 반영된 수치이며, 체중 감량이나 증량 계획의 기준점으로 활용하기 좋습니다.";
    } else if (act <= 1.55) {
      guideMessage = "보통 수준의 운동량이 반영되었습니다. 유지 칼로리와 실제 식사량을 비교하면 체중 변화 방향을 파악하는 데 도움이 됩니다.";
    } else if (act <= 1.725) {
      guideMessage = "운동량이 많은 편으로 계산되었습니다. 운동 강도가 높다면 단순 감량보다 회복과 단백질 섭취까지 함께 고려하는 것이 좋습니다.";
    } else {
      guideMessage = "매우 높은 활동량이 반영되었습니다. 유지 칼로리가 높게 계산될 수 있으며, 실제 생활 패턴과 운동 강도를 함께 고려해 해석하는 것이 중요합니다.";
    }

    guideText.textContent = guideMessage;
    guideBox.style.display = "block";
  }
</script>
