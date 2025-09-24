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
  <form onsubmit="event.preventDefault();calcCGT();">
    <h2>양도세 계산</h2>
    label>취득가액 (원)
  <input type="text" id="buyPrice" oninput="formatNumberInput(this)" placeholder="예: 300,000,000">
</label>
<label>양도가액 (원)
  <input type="text" id="sellPrice" oninput="formatNumberInput(this)" placeholder="예: 500,000,000">
</label>
    <label>보유기간 (년)
      <input type="number" id="years" placeholder="예: 3">
    </label>

    <button class="btn">계산하기</button>
  </form>

  <div id="cgtResult" class="result-box"></div>
</div>

<script>
function calcCGT(){
  const buy = getNumberValue('buyPrice');
  const sell = getNumberValue('sellPrice');
  const years = getNumberValue('years');

  const gain = sell - buy;
  const deduction = years >= 3 ? Math.round(gain * 0.1) : 0;
  const taxable = gain - deduction;
  const tax = taxable > 0 ? Math.round(taxable * 0.22) : 0;

  document.getElementById('cgtResult').innerHTML =
    `양도차익: <b>${gain.toLocaleString()}</b> 원<br>
     장기보유 공제: <b>${deduction.toLocaleString()}</b> 원<br>
     과세표준: <b>${taxable.toLocaleString()}</b> 원<br>
     예상 세액: <b>${tax.toLocaleString()}</b> 원`;
  document.getElementById('cgtResult').classList.add("show");
}
</script>

---

## 함께 보면 좋은 계산기
- [취득세 계산기](/realestate/acquisition-tax/)  
- [종부세 계산기](/realestate/property-tax/)  
- [전세↔월세 계산기](/realestate/rent-to-jeonse/)
