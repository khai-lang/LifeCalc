---
layout: default
title: 자동차 보험료 계산기
description: 차량 종류, 운전자 조건에 따른 자동차 보험료를 예측하는 계산기입니다.
permalink: /insurance/auto/
section: insurance
---

# 자동차 보험료 계산기

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();calcAutoIns();">
    <h2>자동차 보험료 계산</h2>
    <label>차량가액 (원)
      <input type="text" id="carValue" oninput="formatNumberInput(this)" placeholder="예: 20,000,000">
    </label>
    <label>운전자 연령
      <select id="ageFactor">
        <option value="1.0">30세 이상</option>
        <option value="1.2">26~29세</option>
        <option value="1.5">25세 이하</option>
      </select>
    </label>
    <button class="btn">계산하기</button>
  </form>
  <div id="autoResult" class="result-box"></div>
</div>

<script>
function calcAutoIns(){
  const value = getNumberValue('carValue');
  const age = parseFloat(document.getElementById('ageFactor').value);
  const baseRate = 0.03; // 3% 기본요율
  const premium = Math.round(value * baseRate * age);

  document.getElementById('autoResult').innerHTML =
    `차량가액: <b>${value.toLocaleString()}</b> 원<br>
     적용 요율: <b>${(baseRate*100*age).toFixed(1)}%</b><br>
     예상 보험료: <b>${premium.toLocaleString()}</b> 원`;
  document.getElementById('autoResult').classList.add("show");
}
</script>
