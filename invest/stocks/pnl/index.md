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
