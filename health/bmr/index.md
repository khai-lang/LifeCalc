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
    <button id="bmrBtn" type="button" style="padding:12px;border:0;border-radius:8px;background:#0ea5e9;color:#fff">계산하기</button>
    <div id="bmrResult" style="padding:10px;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;display:none"></div>
  </div>
</section>

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
    const height = parseFloat(clean($('bmrHeight').value)); // cm
    const weight = parseFloat(clean($('bmrWeight').value)); // kg
    const act = parseFloat($('bmrActivity').value);

    if ([age,height,weight].some(x => Number.isNaN(x) || x<=0)) {
      $('bmrResult').style.display='block';
      $('bmrResult').innerText = '입력값을 다시 확인해주세요. 숫자와 단위를 정확히 입력해야 합니다.';
      return;
    }

    // Mifflin–St Jeor
    let bmr = 10*weight + 6.25*height - 5*age + (sex==='male' ? 5 : -161);
    let tdee = bmr * act;

    $('bmrResult').style.display='block';
    $('bmrResult').innerHTML = `
      <strong>BMR:</strong> ${Math.round(bmr).toLocaleString()} kcal/일<br>
      <strong>TDEE(유지 칼로리):</strong> ${Math.round(tdee).toLocaleString()} kcal/일
    `;
  });
});
</script>
