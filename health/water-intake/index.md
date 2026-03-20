---
layout: default
title: 하루 물 섭취량 계산기 | 체중별 권장 수분 섭취량 계산
description: 체중, 운동량, 더운 환경 여부를 반영해 하루 권장 물 섭취량을 계산해보세요. 수분 섭취 가이드와 건강관리 팁도 함께 확인할 수 있습니다.
permalink: /health/water-intake/
---

<section class="water-page">
  <div class="water-container">

    <h2 class="water-title">하루 물 섭취량 계산기</h2>
    <p class="water-desc">
      체중, 운동 시간, 더운 환경 여부를 반영해
      <strong>하루 권장 물 섭취량</strong>을 계산합니다.
    </p>

    <div class="water-card">
      <form class="water-form" onsubmit="event.preventDefault(); calcWaterIntake();">
        <div class="water-grid">

          <div class="water-field">
            <label for="wtWeight" class="water-label">몸무게(kg)</label>
            <input id="wtWeight" class="water-input" type="number" inputmode="decimal" placeholder="예: 62" required>
          </div>

          <div class="water-field">
            <label for="wtWorkout" class="water-label">운동 시간(분)</label>
            <input id="wtWorkout" class="water-input" type="number" inputmode="numeric" placeholder="예: 30">
          </div>

          <div class="water-field water-field-full">
            <label class="water-check">
              <input type="checkbox" id="hot">
              <span>더운 환경 / 땀을 많이 흘림</span>
            </label>
          </div>

          <div class="water-field water-field-full">
            <p class="water-help">
              기준: 체중 1kg당 약 30~35ml, 운동 30분당 +350ml, 더운 환경은 +500ml를 반영한 일반 가이드입니다.
            </p>
          </div>

        </div>

        <div class="water-actions">
          <button id="wtBtn" type="submit" class="water-btn">물 섭취량 계산하기</button>
        </div>
      </form>

      <div id="wtResult" class="water-result" aria-live="polite"></div>

      <div id="waterGuide" class="water-guide" style="display:none;">
        <h2 class="water-guide-title">결과 해석</h2>
        <p id="waterGuideText" class="water-guide-text"></p>

        <div class="water-cta-grid">
          <a class="water-cta" href="/health/bmi/">
            <strong>BMI 계산기</strong>
            <span>현재 체중 상태 함께 확인하기</span>
          </a>
          <a class="water-cta" href="/health/calorie/">
            <strong>칼로리 계산기</strong>
            <span>하루 권장 섭취량 계산하기</span>
          </a>
        </div>
      </div>
    </div>

    <section class="water-seo">
      <h2>하루 물 섭취량은 왜 중요할까요?</h2>
      <p>
        물은 체온 조절, 영양소 운반, 노폐물 배출, 혈액순환 등 몸의 기본 기능을 유지하는 데 매우 중요한 역할을 합니다.
        수분이 부족하면 쉽게 피로감을 느끼거나 집중력이 떨어질 수 있고, 심한 경우 두통이나 탈수 증상으로 이어질 수 있습니다.
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

      <h2>권장 물 섭취량은 어떻게 계산하나요?</h2>
      <p>
        일반적으로 성인은 체중 1kg당 약 30~35ml의 수분 섭취를 권장합니다.
        여기에 운동 시간, 땀 배출량, 더운 날씨 같은 환경 요소를 추가로 고려하면 보다 현실적인 하루 수분 목표를 잡을 수 있습니다.
      </p>

      <ul>
        <li>✔ 기본 기준: 체중 1kg당 약 30~35ml</li>
        <li>✔ 운동 30분당 약 350ml 추가</li>
        <li>✔ 더운 환경 / 땀 많이 흘림: 약 500ml 추가</li>
      </ul>

      <div class="water-cta-box">
        👉 건강 관리 계산기를 함께 사용해보세요<br>
        <a href="/health/bmr/">BMR 계산기 바로가기</a>
        <a href="/health/bmi/" class="secondary-link">BMI 계산기 바로가기</a>
      </div>

      <h2>자주 묻는 질문 (FAQ)</h2>

      <h3>Q. 물은 많이 마실수록 좋은가요?</h3>
      <p>
        꼭 그렇지는 않습니다. 개인의 체중, 활동량, 건강 상태에 따라 적정량이 다르며, 과도한 수분 섭취도 부담이 될 수 있습니다.
      </p>

      <h3>Q. 커피나 차도 수분 섭취에 포함되나요?</h3>
      <p>
        일부 포함될 수 있지만, 일반적으로는 순수한 물을 중심으로 수분 섭취량을 관리하는 것이 가장 좋습니다.
      </p>

      <h3>Q. 운동할 때는 얼마나 더 마셔야 하나요?</h3>
      <p>
        일반적인 가이드로는 운동 30분당 약 350ml를 추가로 잡을 수 있지만, 땀 배출량이 많으면 더 필요할 수 있습니다.
      </p>

      <p class="water-disclaimer">
        ※ 이 계산기는 일반적인 건강 가이드를 기반으로 한 참고용 도구입니다. 신장 질환, 심혈관 질환 등 특정 건강 상태가 있다면 의료진 상담이 필요합니다.
      </p>
    </section>

  </div>
</section>

<style>
  .water-container{
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
  }

  .water-title{
    margin: 0 0 10px;
    font-size: 2.2rem;
    line-height: 1.3;
    font-weight: 800;
    color: #1f2937;
    letter-spacing: -0.02em;
  }

  .water-desc{
    margin: 0 0 20px;
    color: #4b5563;
    font-size: 1rem;
    line-height: 1.7;
  }

  .water-card{
    background: #ffffff;
    border: 1px solid #e9edf2;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
  }

  .water-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .water-field{
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .water-field-full{
    grid-column: 1 / -1;
  }

  .water-label{
    display: block;
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 700;
    color: #243041;
  }

  .water-input{
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

  .water-input:focus{
    border-color: #0f6b94;
    box-shadow: 0 0 0 4px rgba(15, 107, 148, 0.10);
  }

  .water-check{
    display: flex;
    align-items: center;
    gap: 10px;
    min-height: 50px;
    padding: 0 2px;
    font-size: 15px;
    font-weight: 600;
    color: #243041;
    cursor: pointer;
  }

  .water-check input{
    width: 18px;
    height: 18px;
    margin: 0;
  }

  .water-help{
    margin: 0;
    color: #64748b;
    font-size: 14px;
    line-height: 1.7;
    background: #f8fbfd;
    border: 1px solid #dbeaf2;
    border-radius: 12px;
    padding: 12px 14px;
  }

  .water-actions{
    margin-top: 18px;
  }

  .water-btn{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 170px;
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

  .water-btn:hover{
    background: #e85d00;
    transform: translateY(-1px);
  }

  .water-result{
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

  .water-result.show{
    display: block;
  }

  .water-result small{
    color: #64748b;
    font-size: 13px;
  }

  .water-guide{
    margin-top: 18px;
    padding: 18px 20px;
    border-radius: 14px;
    background: #f8fbfd;
    border: 1px solid #dbeaf2;
  }

  .water-guide-title{
    margin: 0 0 10px;
    font-size: 1.15rem;
    font-weight: 800;
    color: #12344a;
  }

  .water-guide-text{
    margin: 0;
    color: #334155;
    line-height: 1.8;
  }

  .water-cta-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 16px;
  }

  .water-cta{
    display: block;
    text-decoration: none;
    background: #ffffff;
    border: 1px solid #dce7ee;
    border-radius: 14px;
    padding: 16px;
    transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
  }

  .water-cta:hover{
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);
    border-color: #bfd7e4;
  }

  .water-cta strong{
    display: block;
    color: #0f6b94;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .water-cta span{
    color: #475569;
    font-size: 14px;
    line-height: 1.6;
  }

  .water-seo{
    margin-top: 32px;
    padding: 22px;
    background: #ffffff;
    border: 1px solid #e9edf2;
    border-radius: 18px;
  }

  .water-seo h2{
    margin: 0 0 10px;
    font-size: 1.2rem;
    font-weight: 800;
    color: #1f2937;
  }

  .water-seo h3{
    margin: 18px 0 8px;
    font-size: 1rem;
    font-weight: 800;
    color: #1f2937;
  }

  .water-seo p,
  .water-seo li{
    color: #4b5563;
    font-size: 15px;
    line-height: 1.8;
  }

  .water-seo ul{
    padding-left: 20px;
  }

  .water-cta-box{
    margin: 20px 0;
    padding: 16px;
    text-align: center;
    background: #fff7ef;
    border: 1px solid #ffd8b5;
    border-radius: 14px;
  }

  .water-cta-box a{
    display: inline-block;
    margin: 8px 6px 0;
    padding: 10px 14px;
    border-radius: 10px;
    background: #ff6a00;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
  }

  .water-cta-box a.secondary-link{
    background: #0f6b94;
  }

  .water-disclaimer{
    margin-top: 20px;
    padding-top: 14px;
    border-top: 1px solid #e5e7eb;
    font-size: 14px;
    color: #6b7280;
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
    .water-container{
      max-width: 100%;
    }

    .water-title{
      font-size: 1.8rem;
    }

    .water-card,
    .water-seo{
      padding: 18px;
      border-radius: 16px;
    }

    .water-grid{
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .water-field-full{
      grid-column: auto;
    }

    .water-cta-grid{
      grid-template-columns: 1fr;
    }

    .water-btn{
      width: 100%;
    }
  }
</style>

<script>
  function calcWaterIntake(){
    const weight = parseFloat((document.getElementById("wtWeight").value || "").replace(/,/g, "").trim());
    const workoutMin = parseFloat((document.getElementById("wtWorkout").value || "0").replace(/,/g, "").trim());
    const hot = document.getElementById("hot").checked;

    const resultBox = document.getElementById("wtResult");
    const guideBox = document.getElementById("waterGuide");
    const guideText = document.getElementById("waterGuideText");

    if (Number.isNaN(weight) || weight <= 0) {
      resultBox.classList.add("show");
      resultBox.innerHTML = "⚠️ 몸무게를 정확히 입력해주세요.";
      guideBox.style.display = "none";
      return;
    }

    const safeWorkout = Number.isNaN(workoutMin) || workoutMin < 0 ? 0 : workoutMin;

    const baseLowMl = weight * 30;
    const baseHighMl = weight * 35;
    const extraMl = Math.floor(safeWorkout / 30) * 350;
    const hotExtra = hot ? 500 : 0;

    const lowMl = baseLowMl + extraMl + hotExtra;
    const highMl = baseHighMl + extraMl + hotExtra;

    const toLiter = (ml) => (Math.round(ml / 100) / 10).toFixed(1);

    resultBox.classList.add("show");
    resultBox.innerHTML = `
      <strong>💧 하루 권장 물 섭취량</strong><br>
      ${toLiter(lowMl)} ~ ${toLiter(highMl)} L/일
      <br><br>
      <small>※ 개인 건강 상태, 계절, 식습관, 질환 여부에 따라 실제 필요량은 달라질 수 있습니다.</small>
    `;

    let message = "일반적인 생활 기준의 수분 섭취량입니다. 하루 동안 한 번에 많이 마시기보다 여러 번 나누어 마시는 것이 좋습니다.";

    if (safeWorkout >= 60 && hot) {
      message = "운동량과 더운 환경이 모두 반영되어 권장 수분량이 높아졌습니다. 운동 전후와 활동 중 수분 보충을 더 자주 신경 쓰는 것이 좋습니다.";
    } else if (safeWorkout >= 60) {
      message = "운동 시간이 긴 편으로 반영되었습니다. 땀 손실을 고려해 운동 전후에 추가 수분 섭취를 챙기는 것이 좋습니다.";
    } else if (hot) {
      message = "더운 환경이 반영되어 권장 수분량이 증가했습니다. 갈증을 느끼기 전부터 조금씩 자주 마시는 습관이 도움이 됩니다.";
    }

    guideText.textContent = message;
    guideBox.style.display = "block";
  }
</script>
