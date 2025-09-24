---
layout: default
title: 종합부동산세 계산기
description: 일정 기준 이상의 주택·토지를 보유한 경우 납부해야 하는 종합부동산세 계산기입니다.
permalink: /realestate/property-tax/
section: realestate
---

# 종합부동산세 계산기

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); calcProperty();">
    <h2>종부세 계산</h2>
    <label>공시가격 합계(원) <input id="value" data-format="currency" type="text" placeholder="예: 1,200,000,000"></label>
    <button class="btn">계산하기</button>
  </form>
  <div id="propResult" class="result-box"></div>
</div>

<script>
(function(){
  'use strict';
  window.calcProperty = function(){
    const v = CalcCommon.num('value');
    const deduction = 1_200_000_000; // (예시) 기본 공제값 — 실제 법령과 다를 수 있습니다.
    const base = Math.max(0, v - deduction);

    let rate = 0;
    if(base <= 300_000_000) rate = 0.006;
    else if(base <= 600_000_000) rate = 0.008;
    else rate = 0.010;

    const tax = Math.round(base*rate);
    const el=document.getElementById('propResult');
    el.innerHTML = `과세표준: <b>${CalcCommon.money(base)}</b> 원<br>
                    적용 세율: <b>${(rate*100).toFixed(2)}%</b><br>
                    예상 종부세: <b>${CalcCommon.money(tax)}</b> 원`;
    el.classList.add('show');
  };
})();
</script>

