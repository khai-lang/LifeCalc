---
layout: default
title: BMR(기초대사량)계산기
description: Mifflin-St Jeor 공식을 사용해 BMR과 활동대사량(TDEE)을 추정합니다.
permalink: /health/bmr/
---

<section id="bmr-calc" class="bmr-wrap">
  <h1>BMR(기초대사량)계산기</h1>

  <form class="bmr-form" onsubmit="event.preventDefault(); calcBmr();">
    
    <div class="bmr-row">
      <label for="bmrSex" class="bmr-label">성별</label>
      <select id="bmrSex" class="bmr-input">
        <option value="male">남성</option>
        <option value="female">여성</option>
      </select>
    </div>

    <div class="bmr-row">
      <label for="bmrAge" class="bmr-label">나이(만, 세)</label>
      <input id="bmrAge" class="bmr-input" type="number" inputmode="numeric" placeholder="예: 28" required>
    </div>

    <div class="bmr-row">
      <label for="bmrHeight" class="bmr-label">키(cm)</label>
      <input id="bmrHeight" class="bmr-input" type="number" inputmode="decimal" placeholder="예: 170" required>
    </div>

    <div class="bmr-row">
      <label for="bmrWeight" class="bmr-label">몸무게(kg)</label>
      <input id="bmrWeight" class="bmr-input" type="number" inputmode="decimal" placeholder="예: 65" required>
    </div>

    <div class="bmr-row">
      <label for="bmrActivity" class="bmr-label">활동수준</label>
      <select id="bmrActivity" class="bmr-input">
        <option value="1.2">거의 운동 안함</option>
        <option value="1.375">가벼운 운동(주 1~3회)</option>
        <option value="1.55">보통 운동(주 3~5회)</option>
        <option value="1.725">강한 운동(주 6~7회)</option>
        <option value="1.9">아주 강함(육체노동/선수)</option>
      </select>
    </div>

    <div class="bmr-actions">
      <button id="bmrBtn" class="btn" type="submit">계산</button>
    </div>
  </form>

  <div id="bmrResult" class="result-box" style="margin-top:16px;"></div>
</section>

<style>
  .bmr-wrap{
    max-width: 640px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #eee;
    border-radius: 14px;
    background: #fff;
    box-sizing: border-box;
  }

  .bmr-wrap h1{
    font-size: 2rem;
    font-weight: 800;
    margin: 0 0 20px;
    line-height: 1.3;
  }

  .bmr-form{
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .bmr-row{
    display: grid;
    grid-template-columns: 130px 1fr;
    align-items: center;
    gap: 12px;
  }

  .bmr-label{
    font-size: 1rem;
    font-weight: 600;
    color: #222;
    margin: 0;
  }

  .bmr-input{
    width: 100%;
    min-width: 0;
    height: 48px;
    padding: 0 14px;
    border: 1px solid #d8d8d8;
    border-radius: 10px;
    font-size: 1rem;
    background: #fff;
    box-sizing: border-box;
  }

  .bmr-actions{
    display: flex;
    justify-content: flex-start;
    margin-top: 4px;
  }

  #bmrBtn{
    min-width: 100px;
    height: 46px;
    border: 0;
    border-radius: 10px;
    background: #ff6a00;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }

  #bmrBtn:hover{
    background: #e85d00;
  }

  @media (max-width: 640px){
    .bmr-wrap{
      padding: 16px;
    }

    .bmr-row{
      grid-template-columns: 1fr;
      gap: 8px;
    }

    .bmr-label{
      font-size: 0.95rem;
    }

    .bmr-input{
      height: 46px;
      font-size: 16px;
    }

    #bmrBtn{
      width: 100%;
    }
  }
</style>

<script>
function calcBmr(){
  const age    = parseFloat(document.getElementById("bmrAge").value);
  const height = parseFloat(document.getElementById("bmrHeight").value);
  const weight = parseFloat(document.getElementById("bmrWeight").value);
  const sex    = document.getElementById("bmrSex").value;
  const act    = parseFloat(document.getElementById("bmrActivity").value);

  const box = document.getElementById("bmrResult");

  if ([age, height, weight].some(x => Number.isNaN(x) || x <= 0)) {
    box.classList.add("show");
    box.innerHTML = "⚠️ 입력값을 다시 확인해주세요. 숫자와 단위를 정확히 입력해야 합니다.";
    return;
  }

  const bmr  = 10 * weight + 6.25 * height - 5 * age + (sex === "male" ? 5 : -161);
  const tdee = bmr * act;

  box.classList.add("show");
  box.innerHTML = `
    📊 <strong>BMR:</strong> ${Math.round(bmr).toLocaleString()} kcal/일<br>
    🔥 <strong>TDEE(유지 칼로리):</strong> ${Math.round(tdee).toLocaleString()} kcal/일
  `;
}
</script>
