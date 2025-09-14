---
layout: default
title: 대출 이자/원리금 계산기
description: 원리금균등·원금균등 상환액을 추정합니다.
permalink: finance/loan/
---

# 대출 이자/원리금 계산기
<form id="loan" onsubmit="event.preventDefault(); loanCalc();">
  <label>대출금(만원) <input type="number" id="principal" required></label>
  <label>연이율(%) <input type="number" step="0.01" id="apr" value="5.0" required></label>
  <label>기간(개월) <input type="number" id="months" value="36" required></label>
  <label>방식
    <select id="method">
      <option value="amort">원리금균등</option>
      <option value="principal">원금균등</option>
    </select>
  </label>
  <button type="submit">계산</button>
</form>
<div id="loan-out" class="note"></div>

<script>
function loanOut(t){document.getElementById('loan-out').innerText=t;}
function loanCalc(){
  const P=parseFloat(principal.value||0)*10000;
  const i=parseFloat(apr.value||0)/100/12;
  const n=parseInt(months.value||0,10);
  const m=method.value;
  if(!P||!i||!n){loanOut("값을 입력하세요.");return;}
  if(m==="amort"){
    const A=P*(i*Math.pow(1+i,n))/(Math.pow(1+i,n)-1);
    loanOut(`월 상환액(원리금균등): 약 ${Math.round(A).toLocaleString()}원`);
  }else{
    const base=P/n; const first=base+P*i; const last=base+(P-base*(n-1))*i;
    loanOut(`월 상환액(원금균등): 첫달 ${Math.round(first).toLocaleString()}원 → 마지막달 ${Math.round(last).toLocaleString()}원`);
  }
}
</script>
