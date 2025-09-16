---
layout: default
title: BMR(기초대사량)계산기
description: Mifflin-St Jeor 공식을 사용해 BMR과 활동대사량(TDEE)을 추정합니다.
permalink: health/bmr/
---

<!-- BMR 계산기 -->
<section id="bmr-calc" style="max-width:520px;padding:16px;border:1px solid #eee;border-radius:12px">
  <h3 style="margin:0 0 12px">BMR 계산기</h3>
  <div style="display:grid;gap:10px">
    <label>성별
      <select id="bmrSex">
        <option value="male">남성</option>
        <option value="female">여성</option>
      </select>
    </label>
    <label>나이(만, 세) <input id="bmrAge" type="number" inputmode="numeric" placeholder="예: 28"></label>
    <label>키(cm) <input id="bmrHeight" type="number" inputmode="decimal" placeholder="예: 170"></label>
    <label>몸무게(kg) <input id="bmrWeight" type="number" inputmode="decimal" placeholder="예: 65"></label>
    <label>활동수준
      <select id="bmrActivity">
        <option value="1.2">거의 운동 안함</option>
        <option value="1.375">가벼운 운동(주1~3)</option>
        <option value="1.55">보통 운동(주3~5)</option>
        <option value="1.725">강한 운동(주6~7)</option>
        <option value="1.9">아주 강함(육체노동/선수)</option>
      </select>
    </label>
    <!-- 버튼 -->
    <button id="bmrBtn" class="btn">계산</button>

    <!-- 결과 박스: 아주 연한 오렌지 배경 -->
    <div id="bmrResult" style="padding:12px;background:#fffaf5;color:#333;border:1px solid #ffb366;border-radius:8px;display:none"></div>
  </div>
</section>

<!-- 버튼 스타일 -->
<style>
  .btn {
    display:inline-block;
    padding:6px 14px;
    border:0;
    border-radius:6px;
    background:#ff6a00;      /* 오렌지색 */
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
document.addEventListener('DOMContentLoaded', function(){
  const $ = id => document.getElementById(id);
  const clean = v => {
    if (typeof v !== 'string') v = String(v ?? '');
    return v.replace(/,/g,'').trim();
  };
  $('bmrBtn').addEventListener('click', function(){
    const sex = $('bmrSex').value;
    const age = parseFloat(clean($('bmrAge').value));
    const height = parseFloat(clean($('bmrHeight').value));
    const weight = parseFloat(clean($('bmrWeight').value));
    const act = parseFloat($('bmrActivity').value);

    if ([age,height,weight].some(x => Number.isNaN(x) || x<=0)) {
      $('bmrResult').style.display='block';
      $('bmrResult').innerHTML = '⚠️ 입력값을 다시 확인해주세요. 숫자와 단위를 정확히 입력해야 합니다.';
      return;
    }

    let bmr = 10*weight + 6.25*height - 5*age + (sex==='male' ? 5 : -161);
    let tdee = bmr * act;

    $('bmrResult').style.display='block';
    $('bmrResult').innerHTML = `
      📊 <strong>BMR:</strong> ${Math.round(bmr).toLocaleString()} kcal/일<br>
      🔥 <strong>TDEE(유지 칼로리):</strong> ${Math.round(tdee).toLocaleString()} kcal/일
    `;
  });
});
</script>

