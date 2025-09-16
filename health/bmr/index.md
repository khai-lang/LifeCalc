---
layout: default
title: BMR(기초대사량)계산기
description: Mifflin-St Jeor 공식을 사용해 BMR과 활동대사량(TDEE)을 추정합니다.
permalink: health/bmr/
---

<!-- BMR 계산기 -->
<section id="bmr-calc" style="max-width:520px;padding:16px;border:1px solid #eee;border-radius:12px">
  <h3 style="margin:0 0 12px">BMR 계산기</h3>
  <form onsubmit="event.preventDefault();calcBmr();" style="margin-bottom:16px;">
    <label>성별
      <select id="bmrSex">
        <option value="male">남성</option>
        <option value="female">여성</option>
      </select>
    </label><br><br>
    <label>나이(만, 세) <input id="bmrAge" type="number" inputmode="numeric" placeholder="예: 28"></label><br><br>
    <label>키(cm) <input id="bmrHeight" type="number" inputmode="decimal" placeholder="예: 170"></label><br><br>
    <label>몸무게(kg) <input id="bmrWeight" type="number" inputmode="decimal" placeholder="예: 65"></label><br><br>
    <label>활동수준
      <select id="bmrActivity">
        <option value="1.2">거의 운동 안함</option>
        <option value="1.375">가벼운 운동(주1~3)</option>
        <option value="1.55">보통 운동(주3~5)</option>
        <option value="1.725">강한 운동(주6~7)</option>
        <option value="1.9">아주 강함(육체노동/선수)</option>
      </select>
    </label><br><br>
    
    <button id="bmrBtn" class="btn">계산</button>
    <div id="bmrResult" class="result-box"
    </div>

 
</section>

<!-- 버튼 스타일 -->
<style>
  .btn {
    display:inline-block;
    padding:6px 14px;       /* 별자리 계산기와 동일 */
    border:0;
    border-radius:6px;
    background:#ff6a00;     /* 오렌지색 */
    color:#fff;
    font-size:14px;
    font-weight:bold;
    cursor:pointer;
  }
  .btn:hover {
    background:#e55d00;
  }
</style>

<script defer>
function calcBmr(){
  const age = parseFloat(document.getElementById("bmrAge").value);
  const height = parseFloat(document.getElementById("bmrHeight").value);
  const weight = parseFloat(document.getElementById("bmrWeight").value);
  const sex = document.getElementById("bmrSex").value;
  const act = parseFloat(document.getElementById("bmrActivity").value);

  const resultBox = document.getElementById("bmrResult");

  if ([age,height,weight].some(x => Number.isNaN(x) || x<=0)) {
    resultBox.style.display='block';
    resultBox.innerHTML = '⚠️ 입력값을 다시 확인해주세요. 숫자와 단위를 정확히 입력해야 합니다.';
    return;
  }

  // Mifflin–St Jeor 공식
  let bmr = 10*weight + 6.25*height - 5*age + (sex==='male' ? 5 : -161);
  let tdee = bmr * act;

  resultBox.style.display='block';
  resultBox.innerHTML = `
    📊 <strong>BMR:</strong> ${Math.round(bmr).toLocaleString()} kcal/일<br>
    🔥 <strong>TDEE(유지 칼로리):</strong> ${Math.round(tdee).toLocaleString()} kcal/일
  `;
}
</script>


