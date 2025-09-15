---
layout: default
title: BMR(기초대사량) · TDEE 계산기
description: Mifflin-St Jeor 공식을 사용해 BMR과 활동대사량(TDEE)을 추정합니다.
permalink: health/bmr/
---

# BMR · TDEE 계산기
<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();bmrCalc();">
    <label>성별
      <select id="sex"><option value="M">남</option><option value="F">여</option></select>
    </label>
    <label>나이(세) <input type="number" id="age" value="30" required></label>
    <label>키(cm) <input type="number" id="h" value="173" required></label>
    <label>몸무게(kg) <input type="number" id="w" value="70" required></label>
    <label>활동 수준
      <select id="act">
        <option value="1.2">거의 운동 안함</option>
        <option value="1.375">가벼운 활동(주 1~3)</option>
        <option value="1.55">보통(주 3~5)</option>
        <option value="1.725">활동적(주 6~7)</option>
        <option value="1.9">매우 활동적(육체노동/운동선수)</option>
      </select>
    </label>
    <button class="btn" style="background:#ff6a00;color:#fff;border:0">계산</button>
  </form>
  <div id="bmr-out" class="note"></div>
</div>

<script>
function bmrCalc(){
  const s=sex.value, a=+age.value, h=+document.getElementById('h').value, w=+document.getElementById('w').value, k=+act.value;
  // Mifflin-St Jeor
  const BMR = s==='M' ? (10*w + 6.25*h - 5*a + 5) : (10*w + 6.25*h - 5*a - 161);
  const TDEE = BMR * k;
  bmr-out.innerHTML = `BMR: <b>${Math.round(BMR)}</b> kcal/일 · TDEE(일일 소모 추정): <b>${Math.round(TDEE)}</b> kcal/일`;
}
</script>
