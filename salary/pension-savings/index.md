---
layout: default
title: 연금저축 세액공제 계산기 2025
description: 납입액·한도·세액공제율로 공제액 추정(간편).
permalink: /salary/pension-savings/

---

# 연금저축 세액공제(간편)

<form id="ps-form" onsubmit="event.preventDefault(); calcPS();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>연 납입액(원)
      <input type="number" id="ps-pay" placeholder="예: 6000000" required>
    </label>
    <label>세액공제율(%)
      <input type="number" id="ps-rate" step="0.1" value="13.2">
    </label>
    <label>공제 한도(원)
      <input type="number" id="ps-cap" value="6000000">
    </label>
  </div>
  <button class="btn">계산</button>
</form>

<div id="ps-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/">허브로 돌아가기</a>
</div>

<script>
const ff = n => (Math.round(n)).toLocaleString('ko-KR');
function calcPS(){
  const pay = Math.max(0, Number(document.getElementById('ps-pay').value)||0);
  const rate= Math.max(0, Number(document.getElementById('ps-rate').value)||0)/100;
  const cap = Math.max(0, Number(document.getElementById('ps-cap').value)||0);
  const base = Math.min(pay, cap);
  const credit = Math.round(base * rate);
  document.getElementById('ps-out').classList.add('show');
  document.getElementById('ps-out').innerHTML =
    `<div class="card p-3"><div class="title">세액공제</div>
      <ul><li>공제대상액: ${ff(base)} 원</li><li><strong>세액공제액:</strong> ${ff(credit)} 원</li></ul></div>`;
}
</script>

