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
    <h2>취득세 계산기</h2>

    <label>자산 종류
      <select id="assetType">
        <option value="house">주택</option>
        <option value="land">토지</option>
        <option value="car">자동차</option>
        <option value="building">건축물</option>
        <option value="others">기타 자산</option>
      </select>
    </label>

    <label>취득가액 (원)
      <input id="price" data-format="currency" type="text" placeholder="예: 400,000,000">
    </label>

    <button class="btn">계산하기</button>
  </form>

  <div id="acqResult" class="result-box"></div>
</div>

<script>
(function(){
  'use strict';
  window.calcAcq = function(){
    const type = document.getElementById('assetType').value;
    const price = CalcCommon.num('price');
    let rate = 0, desc="";

    if(type==='house'){
      // 주택 (단순 예시) - 실제는 주택 수, 조정지역 여부 등 조건 많음
      if(price > 900_000_000) rate=0.03;
      else if(price > 600_000_000) rate=0.02;
      else rate=0.01;
      desc="주택";
    }
    else if(type==='land'){
      rate=0.04; desc="토지 (일반)";
    }
    else if(type==='car'){
      rate=0.07; desc="자동차 (일반)";
    }
    else if(type==='building'){
      rate=0.03; desc="건축물";
    }
    else{
      rate=0.024; desc="기타 자산";
    }

    const tax = Math.round(price*rate);
    const el=document.getElementById('acqResult');
    el.innerHTML = `${desc} 취득가액: <b>${CalcCommon.money(price)}</b> 원<br>
                    적용 세율: <b>${(rate*100).toFixed(2)}%</b><br>
                    예상 취득세: <b>${CalcCommon.money(tax)}</b> 원`;
    el.classList.add('show');
  };
})();
</script>


