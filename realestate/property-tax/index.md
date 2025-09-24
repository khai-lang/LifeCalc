---
layout: default
title: 종합부동산세 계산기
description: 일정 기준 이상의 주택·토지를 보유한 경우 납부해야 하는 종합부동산세 계산기입니다.
permalink: /realestate/property-tax/
section: realestate
---

# 종합부동산세 계산기

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();calcProperty();">
    <h2>종부세 계산</h2>
    <label>공시가격 합계 (원)
      <input type="text" id="value" oninput="formatNumberInput(this)" placeholder="예: 1,200,000,000">
    </label>
    <button class="btn">계산하기</button>
  </form>
  <div id="propResult" class="result-box"></div>
</div>

<script>
function calcProperty(){
  const v = getNumberValue('value');
  const deduction = 1200000000; // 기본 공제 (1.2억 = 예시)
  const base = Math.max(v - deduction, 0);

  let rate = 0;
  if(base <= 300000000) rate = 0.006;
  else if(base <= 600000000) rate = 0.008;
  else rate = 0.01;

  const tax = Math.round(base * rate);
  document.getElementById('propResult').innerHTML =
    `과세표준: <b>${base.toLocaleString()}</b> 원<br>
     적용 세율: <b>${(rate*100).toFixed(2)}%</b><br>
     예상 종부세: <b>${tax.toLocaleString()}</b> 원`;
  document.getElementById('propResult').classList.add("show");
}
</script>
