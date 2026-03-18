---
layout: default
title: 주식 수익/손실 계산기
description: 매수가·수량·현재가·매수/매도 수수료·거래세를 반영해 주식 손익과 수익률을 계산합니다.
permalink: /invest/stocks/pnl/
---

<style>
/* =========================
   Stock PnL Calculator
   LifeCalc style refined
========================= */
.stock-pnl-wrap{
  max-width: 980px;
  margin: 0 auto;
  padding: 8px 0 24px;
}

.stock-pnl-hero{
  margin-bottom: 18px;
}

.stock-pnl-title{
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  color: #1f2937;
  margin: 0 0 10px;
  letter-spacing: -0.02em;
}

.stock-pnl-desc{
  font-size: 1rem;
  color: #4b5563;
  line-height: 1.7;
  margin: 0;
}

.stock-pnl-card{
  background: #f7efe6;
  border: 1px solid #eadccf;
  border-radius: 20px;
  padding: 22px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
  box-sizing: border-box;
  overflow: hidden;
}

.stock-pnl-card *,
.stock-pnl-wrap *{
  box-sizing: border-box;
}

.stock-pnl-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stock-pnl-field{
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
}

.stock-pnl-field label{
  font-size: 0.96rem;
  font-weight: 700;
  color: #374151;
  line-height: 1.45;
}

.stock-pnl-field input{
  width: 100%;
  min-width: 0;
  height: 48px;
  border: 1px solid #d8c8b7;
  border-radius: 12px;
  background: #fff;
  padding: 0 14px;
  font-size: 1rem;
  color: #111827;
  outline: none;
  transition: border-color .2s ease, box-shadow .2s ease;
}

.stock-pnl-field input:focus{
  border-color: #ff7a00;
  box-shadow: 0 0 0 4px rgba(255, 122, 0, 0.12);
}

.stock-pnl-help{
  margin-top: 14px;
  padding: 14px 16px;
  background: #fff8f1;
  border: 1px solid #f1ddca;
  border-radius: 14px;
  color: #5b6472;
  font-size: 0.95rem;
  line-height: 1.7;
}

.stock-pnl-action{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.stock-pnl-btn{
  appearance: none;
  border: 0;
  cursor: pointer;
  border-radius: 12px;
  height: 48px;
  padding: 0 18px;
  font-size: 1rem;
  font-weight: 800;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
  transition: transform .15s ease, opacity .15s ease, background .2s ease;
}

.stock-pnl-btn:hover{
  transform: translateY(-1px);
}

.stock-pnl-btn.primary{
  background: #ff6a00;
  color: #fff;
}

.stock-pnl-btn.secondary{
  background: #fff;
  color: #ff6a00;
  border: 1px solid #ffcfad;
}

.stock-pnl-out{
  display: none;
  margin-top: 18px;
}

.stock-pnl-out.show{
  display: block;
}

.stock-pnl-result-grid{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stock-pnl-result-card{
  background: #fffaf5;
  border: 1px solid #eadbc9;
  border-radius: 16px;
  padding: 18px;
  min-width: 0;
}

.stock-pnl-result-label{
  font-size: 0.92rem;
  color: #6b7280;
  margin-bottom: 8px;
  font-weight: 700;
}

.stock-pnl-result-value{
  font-size: 1.35rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.4;
  word-break: break-word;
}

.stock-pnl-result-value.positive{
  color: #0f766e;
}

.stock-pnl-result-value.negative{
  color: #c2410c;
}

.stock-pnl-summary{
  margin-top: 14px;
  background: #fff;
  border: 1px solid #eadbc9;
  border-radius: 16px;
  padding: 18px;
}

.stock-pnl-summary h2{
  margin: 0 0 10px;
  font-size: 1.05rem;
  color: #1f2937;
}

.stock-pnl-summary ul{
  margin: 0;
  padding-left: 18px;
  color: #4b5563;
  line-height: 1.8;
}

.stock-pnl-links{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.stock-pnl-guide{
  margin-top: 22px;
  background: #fff;
  border: 1px solid #ece5dc;
  border-radius: 18px;
  padding: 20px;
}

.stock-pnl-guide h2{
  margin: 0 0 12px;
  font-size: 1.15rem;
  color: #1f2937;
}

.stock-pnl-guide p,
.stock-pnl-guide li{
  color: #4b5563;
  line-height: 1.8;
}

.stock-pnl-guide ul{
  margin: 0;
  padding-left: 18px;
}

@media (max-width: 900px){
  .stock-pnl-grid{
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stock-pnl-result-grid{
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px){
  .stock-pnl-card{
    padding: 16px;
    border-radius: 16px;
  }

  .stock-pnl-title{
    font-size: 1.55rem;
  }

  .stock-pnl-grid{
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .stock-pnl-btn{
    width: 100%;
  }

  .stock-pnl-links{
    flex-direction: column;
  }

  .stock-pnl-links a{
    width: 100%;
  }
}
</style>

<div class="stock-pnl-wrap">
  <section class="stock-pnl-hero">
    <h1 class="stock-pnl-title">주식 수익/손실 계산기</h1>
    <p class="stock-pnl-desc">
      매수가, 수량, 현재가, 매수/매도 수수료, 거래세를 반영해 실제에 가까운 손익과 수익률을 계산할 수 있습니다.
      단순 평가손익뿐 아니라 매도 후 예상 금액까지 함께 확인해 보세요.
    </p>
  </section>

  <div class="stock-pnl-card">
    <form id="spnl" onsubmit="event.preventDefault(); spnlCalc();">
      <div class="stock-pnl-grid">
        <div class="stock-pnl-field">
          <label for="s_buy">매수가(원)</label>
          <input type="number" id="s_buy" inputmode="decimal" placeholder="예: 50000" required>
        </div>

        <div class="stock-pnl-field">
          <label for="s_qty">수량</label>
          <input type="number" id="s_qty" inputmode="decimal" placeholder="예: 10" required>
        </div>

        <div class="stock-pnl-field">
          <label for="s_now">현재가(원)</label>
          <input type="number" id="s_now" inputmode="decimal" placeholder="예: 56000" required>
        </div>

        <div class="stock-pnl-field">
          <label for="s_fbuy">매수 수수료(%)</label>
          <input type="number" id="s_fbuy" step="0.01" inputmode="decimal" value="0.015">
        </div>

        <div class="stock-pnl-field">
          <label for="s_fsell">매도 수수료(%)</label>
          <input type="number" id="s_fsell" step="0.01" inputmode="decimal" value="0.015">
        </div>

        <div class="stock-pnl-field">
          <label for="s_tax">거래세(매도, %)</label>
          <input type="number" id="s_tax" step="0.01" inputmode="decimal" value="0.23">
        </div>
      </div>

      <div class="stock-pnl-help">
        입력한 거래세와 수수료는 참고용입니다. 실제 적용 수수료·세율은 증권사, 시장, 종목 유형에 따라 달라질 수 있으니
        최종 투자 판단 전에는 반드시 실제 거래 조건을 다시 확인하세요.
      </div>

      <div class="stock-pnl-action">
        <button type="submit" class="stock-pnl-btn primary">계산하기</button>
        <button type="button" class="stock-pnl-btn secondary" onclick="spnlReset()">초기화</button>
      </div>
    </form>

    <div id="spnl-out" class="stock-pnl-out" aria-live="polite"></div>
  </div>

  <div class="stock-pnl-links">
    <a class="stock-pnl-btn primary" href="/invest/stocks/avg-cost/">주식 평단가·물타기 계산</a>
    <a class="stock-pnl-btn secondary" href="/invest/crypto/pnl/">코인 수익/손실 계산</a>
  </div>

  <section class="stock-pnl-guide">
    <h2>계산 기준 안내</h2>
    <ul>
      <li>총 매수원가는 <strong>매수가 × 수량 + 매수 수수료</strong>를 반영합니다.</li>
      <li>현재 평가금액(매도 후)은 <strong>현재가 × 수량 - 매도 수수료 - 거래세</strong> 기준으로 계산합니다.</li>
      <li>손익은 매도 후 예상 금액에서 총 매수원가를 뺀 값이며, 수익률은 총 매수원가 대비 비율입니다.</li>
      <li>국내주식, 해외주식, ETF, 세금 체계가 각각 다를 수 있으므로 참고 계산용으로 활용하세요.</li>
    </ul>
  </section>
</div>

<script>
function ff(n){
  return Math.round(n).toLocaleString('ko-KR');
}

function spnlCalc(){
  const b = Number(document.getElementById('s_buy').value) || 0;
  const q = Number(document.getElementById('s_qty').value) || 0;
  const n = Number(document.getElementById('s_now').value) || 0;
  const fbuy = (Number(document.getElementById('s_fbuy').value) || 0) / 100;
  const fsell = (Number(document.getElementById('s_fsell').value) || 0) / 100;
  const tax = (Number(document.getElementById('s_tax').value) || 0) / 100;

  if (!(b > 0 && q > 0 && n > 0)) {
    alert('매수가, 수량, 현재가는 0보다 크게 입력해 주세요.');
    return;
  }

  const grossBuy = b * q;
  const buyFee = grossBuy * fbuy;
  const cost = grossBuy + buyFee;

  const grossSell = n * q;
  const sellFee = grossSell * fsell;
  const sellTax = grossSell * tax;
  const proceed = grossSell - sellFee - sellTax;

  const profit = proceed - cost;
  const roi = cost > 0 ? (profit / cost) * 100 : 0;

  const out = document.getElementById('spnl-out');
  out.classList.add('show');

  const profitClass = profit > 0 ? 'positive' : (profit < 0 ? 'negative' : '');
  const roiText = `${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%`;
  const profitText = `${profit >= 0 ? '+' : ''}${ff(profit)} 원`;

  out.innerHTML = `
    <div class="stock-pnl-result-grid">
      <div class="stock-pnl-result-card">
        <div class="stock-pnl-result-label">총 매수원가</div>
        <div class="stock-pnl-result-value">${ff(cost)} 원</div>
      </div>
      <div class="stock-pnl-result-card">
        <div class="stock-pnl-result-label">현재 평가금액(매도 후)</div>
        <div class="stock-pnl-result-value">${ff(proceed)} 원</div>
      </div>
      <div class="stock-pnl-result-card">
        <div class="stock-pnl-result-label">손익 / 수익률</div>
        <div class="stock-pnl-result-value ${profitClass}">${profitText}<br>${roiText}</div>
      </div>
    </div>

    <div class="stock-pnl-summary">
      <h2>계산 요약</h2>
      <ul>
        <li>매수 금액: ${ff(grossBuy)} 원</li>
        <li>매수 수수료: ${ff(buyFee)} 원</li>
        <li>매도 예상 금액: ${ff(grossSell)} 원</li>
        <li>매도 수수료: ${ff(sellFee)} 원</li>
        <li>거래세: ${ff(sellTax)} 원</li>
      </ul>
    </div>
  `;
}

function spnlReset(){
  document.getElementById('spnl').reset();
  document.getElementById('s_fbuy').value = '0.015';
  document.getElementById('s_fsell').value = '0.015';
  document.getElementById('s_tax').value = '0.23';

  const out = document.getElementById('spnl-out');
  out.classList.remove('show');
  out.innerHTML = '';
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {
      "@type":"ListItem",
      "position":1,
      "name":"투자 계산기 모음",
      "item":"https://calculator.khaistory.com/invest/"
    },
    {
      "@type":"ListItem",
      "position":2,
      "name":"주식 수익/손실 계산기",
      "item":"https://calculator.khaistory.com/invest/stocks/pnl/"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"거래세율은 어떻게 설정하나요?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"거래세(매도, %) 입력칸에 원하는 세율을 직접 입력하면 계산에 반영됩니다. 실제 세율은 시장과 상품 유형에 따라 다를 수 있습니다."
      }
    },
    {
      "@type":"Question",
      "name":"수수료는 어디까지 반영되나요?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"매수 수수료는 총 매수원가에, 매도 수수료는 매도 후 예상 금액에서 차감되어 반영됩니다."
      }
    },
    {
      "@type":"Question",
      "name":"이 계산기는 국내주식과 해외주식 모두 사용할 수 있나요?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"기본적인 손익 계산 구조는 비슷하므로 참고용으로 사용할 수 있습니다. 다만 실제 세금, 환전 비용, 기타 수수료는 별도로 확인해야 합니다."
      }
    }
  ]
}
</script>
