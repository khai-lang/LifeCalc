---
layout: default
title: 대출 이자/원리금 계산기
description: 원리금균등·원금균등 상환액을 추정합니다.
permalink: finance/loan/
---

<form id="loan" onsubmit="event.preventDefault(); loanCalc();" style="margin-bottom:12px;">
  <label>대출금(만원)
    <input type="number" id="principal" required>
  </label>
  <label>연이율(%)
    <input type="number" step="0.01" id="apr" value="5.0" required>
  </label>
  <label>기간(개월)
    <input type="number" id="months" value="36" required>
  </label>
  <label>방식
    <select id="method">
      <option value="amort">원리금균등</option>
      <option value="principal">원금균등</option>
    </select>
  </label>
  <button type="submit" class="btn">계산</button>
</form>

<!-- 결과 박스: 전역 .result-box -->
<div id="loan-out" class="result-box"></div>

<script>
const $ = id => document.getElementById(id);
const won = v => (Math.round(v)).toLocaleString('ko-KR') + '원';

function loanOut(html){
  const box = $('loan-out');
  box.classList.add('show');
  box.innerHTML = html;
}

function loanCalc(){
  const Pman = parseFloat(($('principal').value || '0'));
  const apr  = parseFloat(($('apr').value || '0'));         // 연이율 %
  const n    = parseInt(($('months').value || '0'), 10);    // 개월
  const mthR = apr / 100 / 12;                              // 월 이율 (소수)
  const mode = $('method').value;

  if (!Number.isFinite(Pman) || Pman <= 0){
    loanOut('⚠️ 대출금(만원)을 정확히 입력해주세요.');
    return;
  }
  if (!Number.isFinite(apr) || apr < 0){
    loanOut('⚠️ 연이율(%)을 0 이상으로 입력해주세요.');
    return;
  }
  if (!Number.isFinite(n) || n <= 0){
    loanOut('⚠️ 기간(개월)을 1 이상으로 입력해주세요.');
    return;
  }

  const P = Pman * 10000; // 만원 → 원

  if (mode === 'amort'){
    // 원리금균등: i=0인 경우도 처리
    const A = (mthR === 0) ? (P / n)
              : P * (mthR * Math.pow(1 + mthR, n)) / (Math.pow(1 + mthR, n) - 1);
    const total = A * n;
    const interest = total - P;

    loanOut(`
      💳 <strong>월 상환액(원리금균등):</strong> ${won(A)}
      <br>📈 <strong>총 상환액:</strong> ${won(total)} (원금 ${won(P)} + 이자 ${won(interest)})
      <br><small style="color:#64748b">* 월복리 가정. 중도상환수수료/부대비용은 제외됩니다.</small>
    `);
  } else {
    // 원금균등: 매월 원금 P/n + 잔액×이자
    const base = P / n;
    const first = base + P * mthR;              // 첫 달
    const last  = base + base * mthR;           // 마지막 달(잔액=base)
    const totalInterest = (mthR === 0) ? 0 : mthR * P * (n + 1) / 2; // 합계 이자
    const total = P + totalInterest;

    loanOut(`
      📉 <strong>월 상환액(원금균등):</strong> 첫달 ${won(first)} → 마지막달 ${won(last)}
      <br>📈 <strong>총 상환액:</strong> ${won(total)} (원금 ${won(P)} + 이자 ${won(totalInterest)})
      <br><small style="color:#64748b">* 매월 원금은 동일, 이자는 잔액에 비례해 감소합니다.</small>
    `);
  }
}
</script>
