---
layout: default
title: 코인 수익률 계산기
description: 암호화폐 매수·매도 가격을 기준으로 수익률과 손익을 계산합니다.
permalink: /crypto/profit/
section: crypto
---

# 코인 수익률 계산기

<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();calcProfit();">
    <h2>코인 수익률 계산</h2>
    <label>매수가 (원)
      <input type="text" id="buy" oninput="formatNumberInput(this)" placeholder="예: 30,000,000">
    </label>
    <label>매도가 (원)
      <input type="text" id="sell" oninput="formatNumberInput(this)" placeholder="예: 35,000,000">
    </label>
    <label>수량 (개)
      <input type="text" id="qty" oninput="formatNumberInput(this)" placeholder="예: 0.5">
    </label>
    <button class="btn">계산하기</button>
  </form>
  <div id="profitResult" class="result-box"></div>
</div>

<script>
function calcProfit(){
  const b = getNumberValue('buy');
  const s = getNumberValue('sell');
  const q = getNumberValue('qty');

  const cost = b*q, revenue = s*q, profit = revenue - cost;
  const rate = cost>0 ? (profit/cost*100):0;

  document.getElementById('profitResult').innerHTML =
    `총 매입금액: <b>${cost.toLocaleString()}</b> 원<br>
     총 매도금액: <b>${revenue.toLocaleString()}</b> 원<br>
     손익: <b>${profit.toLocaleString()}</b> 원<br>
     수익률: <b>${rate.toFixed(2)}%</b>`;
  document.getElementById('profitResult').classList.add("show");
}
</script>
