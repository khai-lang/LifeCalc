---
layout: default
title: DSR 계산기
description: 소득 대비 원리금 상환 비율(DSR)을 계산합니다.
permalink: /finance/dsr/
section: finance
---

# DSR 계산기

**총부채원리금상환비율(DSR)**은 연간 소득 대비 연간 원리금 상환액의 비율을 뜻합니다.  
대출 가능 여부와 한도를 결정하는 핵심 지표입니다.

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); calcDSR();">
    <h2>DSR 계산</h2>
    <label>연간 소득(원) <input id="income" data-format="currency" type="text" placeholder="예: 50,000,000"></label>
    <label>연간 원리금 상환액(원) <input id="repay" data-format="currency" type="text" placeholder="예: 20,000,000"></label>
    <button class="btn">계산</button>
  </form>
  <div id="dsrResult" class="result-box"></div>
</div>

<script>
(function(){
  'use strict';
  window.calcDSR = function(){
    const inc = CalcCommon.num('income');
    const rep = CalcCommon.num('repay');
    const dsr = inc>0 ? rep/inc*100 : 0;

    const el=document.getElementById('dsrResult');
    el.innerHTML = `연간 소득: <b>${CalcCommon.money(inc)}</b> 원<br>
                    연간 원리금 상환액: <b>${CalcCommon.money(rep)}</b> 원<br>
                    DSR 비율: <b>${dsr.toFixed(1)}%</b>`;
    el.classList.add('show');
  };
})();
</script>


---

## 함께 보면 좋은 계산기
- [대출 이자 계산기](/finance/loan/)  
- [전세↔월세 계산기](/realestate/rent-to-jeonse/)
