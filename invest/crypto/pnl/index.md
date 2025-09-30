---
layout: default
title: 코인 수익/손실 계산기
description: 매수가·수량·현재가·수수료(선택)로 코인 손익과 수익률을 계산합니다.
permalink: /invest/crypto/pnl/
---

# 코인 수익/손실 계산기

<form id="cpnl" onsubmit="event.preventDefault();cpnlCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>매수가(원) <input type="number" id="buy" placeholder="예: 35000" required></label>
    <label>수량 <input type="number" id="qty" step="0.0001" placeholder="예: 2.5" required></label>
    <label>현재가(원) <input type="number" id="now" placeholder="예: 42000" required></label>
    <label>매수 수수료(%) <input type="number" id="feeBuy" step="0.01" value="0.05"></label>
    <label>매도 수수료(%) <input type="number" id="feeSell" step="0.01" value="0.05"></label>
    <label>기타 비용(원) <input type="number" id="others" value="0"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="cpnl-out" class="result-box"></div>

<!-- 교차 링크 2개 -->
<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/invest/crypto/avg-cost/">코인 평단가·추가매수 계산</a>
  <a class="btn ghost" href="/invest/stocks/pnl/">주식 수익/손실 계산</a>
</div>

<script>
const f = n => (Math.round(n)).toLocaleString('ko-KR');
function v(id){ return Number(document.getElementById(id).value)||0; }
function cpnlCalc(){
  const buy=v('buy'), qty=v('qty'), now=v('now');
  const fb=(v('feeBuy')/100), fs=(v('feeSell')/100), others=v('others');
  if(!(buy>0 && qty>0 && now>0)){ alert('값을 확인해 주세요.'); return; }
  const cost = buy*qty*(1+fb) + others;
  const proceed = now*qty*(1-fs);
  const profit = proceed - cost;
  const roi = cost>0 ? (profit/cost)*100 : 0;
  document.getElementById('cpnl-out').classList.add('show');
  document.getElementById('cpnl-out').innerHTML = `
    <div class="card p-3">
      <div class="title">결과</div>
      <ul>
        <li>총 매수원가: ${f(cost)} 원</li>
        <li>현재 평가금액(매도 후): ${f(proceed)} 원</li>
        <li><strong>손익:</strong> ${f(profit)} 원 (${roi.toFixed(2)}%)</li>
      </ul>
    </div>`;
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"},
    {"@type":"ListItem","position":2,"name":"코인 수익/손실 계산기","item":"https://calculator.khaistory.com/invest/crypto/pnl/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"수수료는 어디에 입력하나요?","acceptedAnswer":{"@type":"Answer","text":"매수/매도 수수료(%)와 기타 비용(원)을 각각 입력하면 원가와 처분가에 자동 반영됩니다."}},
    {"@type":"Question","name":"마진/선물 포지션도 계산되나요?","acceptedAnswer":{"@type":"Answer","text":"현물 기준 계산기입니다. 레버리지·청산가 등은 별도 계산기가 필요합니다."}}
  ]
}
</script>

