---
layout: default
title: 코인 DCA(적립식) 수익률 계산기
description: 매월 고정금액을 적립했을 때 누적 수량과 평균매입가, 현재가 기준 수익률을 계산합니다.
permalink: /invest/crypto/dca/
---

# 코인 DCA(적립식) 수익률 계산기

<form id="cdca" onsubmit="event.preventDefault();cdcaCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>월 적립금(원) <input type="number" id="c_amt" required></label>
    <label>기간(개월) <input type="number" id="c_mon" value="12" required></label>
    <label>월별 가격(원, 콤마로 구분)
      <input type="text" id="c_prices" placeholder="예: 30000,32000,28000,..." >
    </label>
    <label>현재가(원) <input type="number" id="c_now" required></label>
  </div>
  <small class="muted">※ 월별 가격을 비워두면 모든 달에 동일 가격 = 현재가로 간주합니다.</small>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="cdca-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/invest/crypto/pnl/">코인 수익/손실 계산</a>
  <a class="btn ghost" href="/invest/stocks/avg-cost/">주식 평단가 계산</a>
</div>

<script>
const fx = n => (Math.round(n)).toLocaleString('ko-KR');
function cdcaCalc(){
  const amt=Number(document.getElementById('c_amt').value)||0;
  const mon=Number(document.getElementById('c_mon').value)||0;
  const now=Number(document.getElementById('c_now').value)||0;
  if (!(amt>0 && mon>0 && now>0)){ alert('값을 확인하세요.'); return; }
  const raw = (document.getElementById('c_prices').value||'').trim();
  let prices = raw? raw.split(',').map(s=>Number(s.trim())||0).filter(v=>v>0) : [];
  if (prices.length===0) prices = Array.from({length:mon}, ()=>now);
  if (prices.length!==mon){ alert('기간(개월)과 가격 개수가 다릅니다.'); return; }

  let qty=0, invested=0;
  for (let i=0;i<mon;i++){
    const price = prices[i];
    const buyQty = amt/price;
    qty += buyQty; invested += amt;
  }
  const avg = invested/qty;
  const value = qty*now;
  const pnl = value - invested;
  const roi = invested>0 ? pnl/invested*100 : 0;

  document.getElementById('cdca-out').classList.add('show');
  document.getElementById('cdca-out').innerHTML = `
    <div class="card p-3"><div class="title">결과</div>
      <ul>
        <li>누적 매수 수량: ${fx(qty)}</li>
        <li>평균 매입가: ${fx(avg)} 원</li>
        <li>현재 평가금액: ${fx(value)} 원</li>
        <li><strong>손익:</strong> ${fx(pnl)} 원 (${roi.toFixed(2)}%)</li>
      </ul>
    </div>`;
}
</script>
