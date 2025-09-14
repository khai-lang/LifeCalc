---
layout: default
title: BMR(기초대사량) 계산기
description: 해리스-베네딕트 식으로 기초대사량을 추정합니다.
permalink: health/bmr/
---
# BMR 계산기
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();bmr();">
    <label>성별
      <select id="sex"><option value="M">남</option><option value="F">여</option></select>
    </label>
    <label>나이(세) <input type="number" id="age" value="30" required></label>
    <label>키(cm) <input type="number" id="h" value="173" required></label>
    <label>몸무게(kg) <input type="number" id="w" value="70" required></label>
    <button>계산</button>
  </form>
  <div id="bmr-out" class="note"></div>
</div>
<script>
function bmr(){
  const s=sex.value,a=+age.value,h=+document.getElementById('h').value,w=+document.getElementById('w').value;
  const val = s==='M' ? 88.362 + (13.397*w)+(4.799*h)-(5.677*a)
                      : 447.593 + (9.247*w)+(3.098*h)-(4.330*a);
  bmr-out.innerText=`BMR: 약 ${Math.round(val)} kcal/일`;
}
</script>
