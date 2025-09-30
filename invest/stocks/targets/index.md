---
layout: default
title: 주식 목표가·손절가 계산기
description: 진입가와 목표/손절 비율(R)로 목표가·손절가와 손익비, 기대 손익을 계산합니다.
permalink: /invest/stocks/targets/
---

# 주식 목표가·손절가 계산기

<form id="tgt" onsubmit="event.preventDefault();tgtCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>진입가(원) <input type="number" id="ent" required></label>
    <label>목표 수익(%) <input type="number" id="tp" step="0.1" value="10"></label>
    <label>손절 폭(%) <input type="number" id="sl" step="0.1" value="5"></label>
    <label>수량(주) <input type="number" id="qty" value="0"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="tgt-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/invest/stocks/pnl/">주식 수익/손실 계산</a>
  <a class="btn ghost" href="/invest/stocks/dividend-yield/">배당수익률 계산</a>
</div>

<script>
const f3 = n => (Math.round(n)).toLocaleString('ko-KR');
function tgtCalc(){
  const ent=Number(document.getElementById('ent').value)||0;
  const tp =(Number(document.getElementById('tp').value)||0)/100;
  const sl =(Number(document.getElementById('sl').value)||0)/100;
  const qty=Number(document.getElementById('qty').value)||0;
  if (!(ent>0)){ alert('진입가를 입력하세요.'); return; }
  const tgt = ent*(1+tp);
  const stop= ent*(1-sl);
  const rr = tp/sl || 0;
  const expGain = qty>0 ? (tgt-ent)*qty : 0;
  const expLoss = qty>0 ? (ent-stop)*qty : 0;
  document.getElementById('tgt-out').classList.add('show');
  document.getElementById('tgt-out').innerHTML = `
    <div class="card p-3"><div class="title">결과</div>
      <ul>
        <li>목표가: ${f3(tgt)} 원</li>
        <li>손절가: ${f3(stop)} 원</li>
        <li>손익비(R:R): ${rr.toFixed(2)} : 1</li>
        ${qty>0?`<li>예상 이익: ${f3(expGain)} 원 / 예상 손실: ${f3(expLoss)} 원</li>`:''}
      </ul>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"},
    {"@type":"ListItem","position":2,"name":"주식 목표가·손절가 계산기","item":"https://calculator.khaistory.com/invest/stocks/targets/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"손익비(R:R)는 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"목표수익률 ÷ 손절률로 계산되며, 2:1이면 기대수익이 기대손실의 2배를 의미합니다."}},
    {"@type":"Question","name":"수량을 입력하면 무엇이 달라지나요?","acceptedAnswer":{"@type":"Answer","text":"예상 이익/손실 금액(원)을 함께 표시해 포지션 크기 의사결정에 도움을 줍니다."}}
  ]
}
</script>

