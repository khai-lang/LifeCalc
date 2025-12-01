---
layout: default
title: 4대보험 계산기 2025 — 근로자 부담액 자동 계산
description: 연봉/월급 기준 국민연금·건강보험(장기요양)·고용보험 근로자 부담액 추정.
permalink: /salary/insurances/

---


<form id="ins-form" onsubmit="event.preventDefault(); calcIns();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>월 급여(세전, 원)
      <input type="number" id="pay" placeholder="예: 3500000" required>
    </label>
    <label>국민연금(근로자 %)
      <input type="number" id="i_np" step="0.001" value="4.5">
    </label>
    <label>건강보험(근로자 %)
      <input type="number" id="i_hi" step="0.001" value="3.5">
    </label>
    <label>장기요양(% of 건보료)
      <input type="number" id="i_ltc" step="0.001" value="12.95">
    </label>
    <label>고용보험(근로자 %)
      <input type="number" id="i_ei" step="0.001" value="0.9">
    </label>
  </div>
  <button class="btn" type="submit">계산</button>
</form>

<div id="ins-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/withholding/">다음: 원천징수세액</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
const fmt = n => (Math.round(n)).toLocaleString('ko-KR');
function v(id){ return Math.max(0, Number(document.getElementById(id).value)||0); }

function calcIns(){
  const pay = v('pay');
  if (!pay){ alert('월 급여를 입력하세요.'); return; }
  const np = pay * (v('i_np')/100);
  const hi = pay * (v('i_hi')/100);
  const ltc= hi * (v('i_ltc')/100);
  const ei = pay * (v('i_ei')/100);
  const sum = Math.round(np+hi+ltc+ei);

  document.getElementById('ins-out').classList.add('show');
  document.getElementById('ins-out').innerHTML = `
    <div class="card p-3"><div class="title">근로자 부담액(월)</div>
      <ul>
        <li>국민연금: ${fmt(np)} 원</li>
        <li>건강보험: ${fmt(hi)} 원</li>
        <li>장기요양: ${fmt(ltc)} 원</li>
        <li>고용보험: ${fmt(ei)} 원</li>
        <li><strong>합계:</strong> ${fmt(sum)} 원</li>
      </ul>
    </div>`;
}
</script>

