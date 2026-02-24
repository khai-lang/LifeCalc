---
layout: default
title: 배당수익률(Yield) · 투자원가수익률(YoC) 계산기
description: 주가와 주당 배당금으로 배당수익률과 투자원가수익률을 계산합니다.
permalink: /invest/stocks/dividend-yield/
---

<form id="div" onsubmit="event.preventDefault();divCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>현재 주가(원) <input type="number" id="price" required></label>
    <label>주당 배당금(연, 원) <input type="number" id="dps" required></label>
    <label>나의 매수가(원, 선택) <input type="number" id="mycost"></label>
    <label>배당소득세(%) <input type="number" id="tax" step="0.1" value="15.4"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="div-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/invest/stocks/pnl/">주식 수익/손실 계산</a>
  <a class="btn ghost" href="/invest/stocks/targets/">목표가·손절가 계산</a>
</div>

<script>
const f4 = n => (Math.round(n)).toLocaleString('ko-KR');
function divCalc(){
  const price=Number(document.getElementById('price').value)||0;
  const dps  =Number(document.getElementById('dps').value)||0;
  const my   =Number(document.getElementById('mycost').value)||0;
  const tax  =(Number(document.getElementById('tax').value)||0)/100;
  if (!(price>0 && dps>=0)){ alert('값을 확인하세요.'); return; }
  const gross = (dps/price)*100;
  const net   = (dps*(1-tax)/price)*100;
  const yoc   = my>0 ? (dps/my)*100 : null;
  const yocn  = my>0 ? (dps*(1-tax)/my)*100 : null;
  document.getElementById('div-out').classList.add('show');
  document.getElementById('div-out').innerHTML = `
    <div class="card p-3"><div class="title">결과</div>
      <ul>
        <li>배당수익률(세전): ${gross.toFixed(2)} %</li>
        <li>배당수익률(세후): ${net.toFixed(2)} %</li>
        ${my>0?`<li>투자원가수익률 YoC(세전): ${yoc.toFixed(2)} % / (세후): ${yocn.toFixed(2)} %</li>`:''}
      </ul>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"},
    {"@type":"ListItem","position":2,"name":"배당수익률·YoC 계산기","item":"https://calculator.khaistory.com/invest/stocks/dividend-yield/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"YoC는 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"투자원가수익률(Yield on Cost)로, 현재 배당금을 과거 나의 매수가로 나눈 비율입니다."}},
    {"@type":"Question","name":"세후 배당수익률은 어떻게 계산하나요?","acceptedAnswer":{"@type":"Answer","text":"배당소득세율(%)을 입력하면 DPS×(1-세율)을 사용하여 세후 수익률을 계산합니다."}}
  ]
}
</script>

