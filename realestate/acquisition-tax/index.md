---
layout: default
title: 취득세 계산기
description: 부동산 매수 시 납부해야 하는 취득세를 계산합니다.
permalink: /realestate/acquisition-tax/
section: realestate
---

# 취득세 계산기

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); calcAcq();">
    <h2>취득세 계산</h2>
    <label>주택 매수가액(원) <input id="price" data-format="currency" type="text" placeholder="예: 400,000,000"></label>
    <button class="btn">계산하기</button>
  </form>
  <div id="acqResult" class="result-box"></div>
</div>

<script>
(function(){
  'use strict';
  window.calcAcq = function(){
    const price = CalcCommon.num('price');
    let rate = 0.01;
    if(price > 600_000_000) rate = 0.02;
    if(price > 900_000_000) rate = 0.03;
    const tax = Math.round(price*rate);

    const el=document.getElementById('acqResult');
    el.innerHTML = `취득세율: <b>${(rate*100).toFixed(1)}%</b><br>
                    예상 취득세: <b>${CalcCommon.money(tax)}</b> 원`;
    el.classList.add('show');
  };
})();
</script>

