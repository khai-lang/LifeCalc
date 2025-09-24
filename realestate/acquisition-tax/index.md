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

    // 기본 취득세율 (단순화 예시)
    if(type==='house'){
      if(price > 900_000_000) rate=0.03;
      else if(price > 600_000_000) rate=0.02;
      else rate=0.01;
      desc="주택";
    }
    else if(type==='land'){
      rate=0.04; desc="토지";
    }
    else if(type==='car'){
      rate=0.07; desc="자동차";
    }
    else if(type==='building'){
      rate=0.03; desc="건축물";
    }
    else{
      rate=0.024; desc="기타 자산";
    }

    // 세금 계산
    const acquisitionTax = Math.round(price * rate);

    // 농어촌특별세 (일부 자산/금액에 부과, 여기서는 단순화 예시)
    let ruralTax = 0;
    if(type==='house' && price > 600_000_000){
      ruralTax = Math.round(acquisitionTax * 0.1); // 10%
    } else if(type==='land'){
      ruralTax = Math.round(acquisitionTax * 0.2); // 20%
    }

    // 지방교육세 (취득세의 10%)
    const eduTax = Math.round(acquisitionTax * 0.1);

    // 총 세액
    const total = acquisitionTax + ruralTax + eduTax;

    // 출력
    const el=document.getElementById('acqResult');
    el.innerHTML = `
      <h3>${desc} 취득세 계산 결과</h3>
      취득가액: <b>${CalcCommon.money(price)}</b> 원<br>
      기본 취득세율: <b>${(rate*100).toFixed(2)}%</b><br>
      <hr>
      취득세: <b>${CalcCommon.money(acquisitionTax)}</b> 원<br>
      지방교육세: <b>${CalcCommon.money(eduTax)}</b> 원<br>
      농어촌특별세: <b>${CalcCommon.money(ruralTax)}</b> 원<br>
      <hr>
      <b>총 납부세액: ${CalcCommon.money(total)} 원</b>
    `;
    el.classList.add('show');
  };
})();
</script>


