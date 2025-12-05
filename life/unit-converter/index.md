---
layout: default
title: 단위 변환 계산기
description: 길이·무게·면적·부피 등 주요 단위를 간편하게 변환합니다.
permalink: life/unit-converter/
---

<form id="unit-form" onsubmit="event.preventDefault(); convertUnit();" style="margin-bottom:16px;">

  <label>
    변환 값 입력
    <input type="text" id="unit-value" data-comma="true" placeholder="숫자 입력" required>
  </label>

  <label>
    변환 종류 선택
    <select id="unit-type" required>
      <option value="length">길이 (m ↔ cm ↔ mm ↔ km)</option>
      <option value="weight">무게 (kg ↔ g ↔ mg ↔ t)</option>
      <option value="area">면적 (㎡ ↔ ㎠ ↔ ㎟ ↔ 평)</option>
      <option value="volume">부피 (L ↔ mL ↔ ㎥)</option>
    </select>
  </label>

  <button type="submit" class="btn">변환</button>
</form>

<div id="unit-out" class="result-box"></div>

<script>
function convertUnit(){
  const raw = document.getElementById('unit-value').value.replace(/,/g,'');
  const type = document.getElementById('unit-type').value;
  const out = document.getElementById('unit-out');

  if(!raw || isNaN(raw)){
    out.classList.add("show");
    out.innerHTML = "⚠️ 숫자를 정확히 입력해주세요.";
    return;
  }

  const v = parseFloat(raw);
  let result = "";

  /* ---------------------
     ① 길이 변환
     --------------------- */
  if(type === "length"){
    result = `
      <strong>길이 변환 결과</strong><br>
      ${v} m = ${(v * 100).toLocaleString()} cm<br>
      ${v} m = ${(v * 1000).toLocaleString()} mm<br>
      ${v} m = ${(v / 1000).toLocaleString()} km
    `;
  }

  /* ---------------------
     ② 무게 변환
     --------------------- */
  if(type === "weight"){
    result = `
      <strong>무게 변환 결과</strong><br>
      ${v} kg = ${(v * 1000).toLocaleString()} g<br>
      ${v} kg = ${(v * 1_000_000).toLocaleString()} mg<br>
      ${v} kg = ${(v / 1000).toLocaleString()} t
    `;
  }

  /* ---------------------
     ③ 면적 변환
     --------------------- */
  if(type === "area"){
    result = `
      <strong>면적 변환 결과</strong><br>
      ${v} ㎡ = ${(v * 100).toLocaleString()} ㎠<br>
      ${v} ㎡ = ${(v * 10_000).toLocaleString()} ㎟<br>
      ${v} ㎡ = ${(v * 0.3025).toLocaleString()} 평
    `;
  }

  /* ---------------------
     ④ 부피 변환
     --------------------- */
  if(type === "volume"){
    result = `
      <strong>부피 변환 결과</strong><br>
      ${v} L = ${(v * 1000).toLocaleString()} mL<br>
      ${v} L = ${(v / 1000).toLocaleString()} ㎥
    `;
  }

  out.classList.add("show");
  out.innerHTML = result;
}
</script>


## 사용 가능한 단위
- **길이**: m, cm, mm, km  
- **무게**: kg, g, mg, t  
- **면적**: ㎡, ㎠, ㎟, 평  
- **부피**: L, mL, ㎥  


<br><br><br>
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="1398373115"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>
