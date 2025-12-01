---
layout: default
title: 코인 평단가·추가매수 계산기
description: 기존 보유 수량/평단가와 추가 매수 계획으로 새로운 평단가와 손익분기점을 계산합니다.
permalink: /invest/crypto/avg-cost/
---


<form id="cavg" onsubmit="event.preventDefault();cavgCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>보유 수량 <input type="number" id="cq1" step="0.0001" required></label>
    <label>보유 평단가(원) <input type="number" id="cp1" step="0.01" required></label>
    <label>추가 매수 수량 <input type="number" id="cq2" step="0.0001" required></label>
    <label>추가 매수가(원) <input type="number" id="cp2" step="0.01" required></label>
    <label>수수료(왕복, %) <input type="number" id="cfee" step="0.01" value="0.10"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="cavg-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/invest/crypto/pnl/">코인 수익/손실 계산</a>
  <a class="btn ghost" href="/invest/stocks/pnl/">주식 수익/손실 계산</a>
</div>

<script>
const f0 = n => (Math.round(n)).toLocaleString('ko-KR');
function cavgCalc(){
  const q1=Number(document.getElementById('cq1').value)||0;
  const p1=Number(document.getElementById('cp1').value)||0;
  const q2=Number(document.getElementById('cq2').value)||0;
  const p2=Number(document.getElementById('cp2').value)||0;
  const fee=(Number(document.getElementById('cfee').value)||0)/100;
  if ((q1+q2)<=0){ alert('수량을 확인하세요.'); return; }
  const cost1=q1*p1, cost2=q2*p2;
  const totalQty=q1+q2;
  const totalCost=(cost1+cost2)*(1+fee);
  const newAvg = totalCost/totalQty;
  document.getElementById('cavg-out').classList.add('show');
  document.getElementById('cavg-out').innerHTML = `
    <div class="card p-3"><div class="title">결과</div>
      <ul><li>총 수량: ${f0(totalQty)}</li><li><strong>새 평단가:</strong> ${f0(newAvg)} 원</li></ul>
      <small class="muted">※ 거래소/수수료 구조에 따라 차이가 있을 수 있습니다.</small>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"},
    {"@type":"ListItem","position":2,"name":"코인 평단가·추가매수 계산기","item":"https://calculator.khaistory.com/invest/crypto/avg-cost/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"수수료는 어떻게 반영되나요?","acceptedAnswer":{"@type":"Answer","text":"왕복 수수료(%)를 총 원가에 곱해 평단가에 반영하는 보수적 근사 방식을 사용합니다."}},
    {"@type":"Question","name":"보유/추가 수량 중 하나가 0이어도 되나요?","acceptedAnswer":{"@type":"Answer","text":"총 수량이 0보다 크면 계산됩니다. 둘 다 0이면 계산할 수 없습니다."}}
  ]
}
</script>

