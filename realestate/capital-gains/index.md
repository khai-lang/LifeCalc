---
layout: default
title: 양도소득세 계산기
description: 부동산 매매 시 양도차익을 기준으로 양도세를 계산하는 도구입니다.
permalink: /realestate/capital-gains/
section: realestate
---

# 양도소득세 계산기

부동산 매매 시 발생하는 **양도차익**을 기준으로 납부해야 하는 세금을 자동으로 계산합니다.  
취득가액, 양도가액, 보유기간 등을 입력하세요. (단순화된 계산이므로 참고용입니다)

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); calcCGT();">
    <h2>양도세 계산</h2>
    <label>취득가액(원) <input id="buyPrice" data-format="currency" type="text" placeholder="예: 300,000,000"></label>
    <label>양도가액(원) <input id="sellPrice" data-format="currency" type="text" placeholder="예: 500,000,000"></label>
    <label>보유기간(년) <input id="years" data-format="number" type="text" placeholder="예: 3"></label>
    <button class="btn">계산하기</button>
  </form>
  <div id="cgtResult" class="result-box"></div>
</div>

<script>
(function(){
  'use strict';
  window.calcCGT = function(){
    const buy = CalcCommon.num('buyPrice');
    const sell = CalcCommon.num('sellPrice');
    const years= CalcCommon.num('years');

    const gain = Math.max(0, sell - buy);
    const deduction = years>=3 ? Math.round(gain*0.10) : 0;      // (예시) 장특공 10%
    const taxable = Math.max(0, gain - deduction);
    const tax = Math.round(taxable * 0.22);                      // (예시) 22%

    const el=document.getElementById('cgtResult');
    el.innerHTML = `양도차익: <b>${CalcCommon.money(gain)}</b> 원<br>
                    장기보유 공제: <b>${CalcCommon.money(deduction)}</b> 원<br>
                    과세표준: <b>${CalcCommon.money(taxable)}</b> 원<br>
                    예상 세액: <b>${CalcCommon.money(tax)}</b> 원`;
    el.classList.add('show');
  };
})();
</script>

---

## 함께 보면 좋은 계산기
- [취득세 계산기](/realestate/acquisition-tax/)  
- [종부세 계산기](/realestate/property-tax/)  
- [전세↔월세 계산기](/realestate/rent-to-jeonse/)
