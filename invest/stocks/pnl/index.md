---
layout: default
title: 주식 수익/손실 계산기
description: 매수가·수량·현재가·수수료/거래세(선택)로 주식 손익과 수익률을 계산합니다.
permalink: /invest/stocks/pnl/
---

# 주식 수익/손실 계산기

<form id="spnl" onsubmit="event.preventDefault();spnlCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>매수가(원) <input type="number" id="s_buy" required></label>
    <label>수량 <input type="number" id="s_qty" required></label>
    <label>현재가(원) <input type="number" id="s_now" required></label>
    <label>매수 수수료(%) <input type="number" id="s_fbuy" step="0.01" value="0.015"></label>
    <label>매도 수수료(%) <input type="number" id="s_fsell" step="0.01" value="0.015"></label>
    <label>거래세(매도, %)<input type="number" id="s_tax" step="0.01" value="0.23"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="spnl-out" class="result-box"></div>

<!-- 교차 링크 2개 -->
<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/invest/stocks/avg-cost/">주식 평단가·물타기 계산</a>
  <a class="btn ghost" href="/invest/crypto/pnl/">코인 수익/손실 계산</a>
</div>

<script>
const ff = n => (Math.round(n)).toLocaleString('ko-KR');
function spnlCalc(){
  const b=Number(document.getElementById('s_buy').value)||0;
  const q=Number(document.getElementById('s_qty').value)||0;
  const n=Number(document.getElementById('s_now').value)||0;
  const fbuy=(Number(document.getElementById('s_fbuy').value)||0)/100;
  const fsell=(Number(document.getElementById('s_fsell').value)||0)/100;
  const tax=(Number(document.getElementById('s_tax').value)||0)/100;
  if(!(b>0 && q>0 && n>0)){ alert('값을 확인해 주세요.'); return; }

  const cost = b*q*(1+fbuy);
  const proceed = n*q*(1-fsell-tax);
  const profit = proceed - cost;
  const roi = cost>0 ? (profit/cost)*100 : 0;

  document.getElementById('spnl-out').classList.add('show');
  document.getElementById('spnl-out').innerHTML = `
    <div class="card p-3">
      <div class="title">결과</div>
      <ul>
        <li>총 매수원가: ${ff(cost)} 원</li>
        <li>현재 평가금액(매도 후): ${ff(proceed)} 원</li>
        <li><strong>손익:</strong> ${ff(profit)} 원 (${roi.toFixed(2)}%)</li>
      </ul>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"},
    {"@type":"ListItem","position":2,"name":"주식 수익/손실 계산기","item":"https://calculator.khaistory.com/invest/stocks/pnl/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"거래세율은 어떻게 설정하나요?","acceptedAnswer":{"@type":"Answer","text":"매도 거래세(%) 입력칸에서 직접 변경할 수 있습니다. 시장/종목에 따라 실제 세율은 다를 수 있습니다."}},
    {"@type":"Question","name":"수수료는 어디까지 반영되나요?","acceptedAnswer":{"@type":"Answer","text":"매수·매도 수수료(%)를 각각 입력하면 원가와 처분가에 반영됩니다."}}
  ]
}
</script>

