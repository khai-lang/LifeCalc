---
layout: default
title: 퇴직금 계산기 — 평균임금·근속연수 기준
description: 최근 3개월 평균임금과 근속연수로 퇴직금(안내용) 계산.
permalink: /salary/retirement/

---

# 퇴직금 계산기

<form id="rtm-form" onsubmit="event.preventDefault(); calcRtm();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>최근 3개월 총 임금(원)
      <input type="number" id="rtm-sum" placeholder="예: 9000000" required>
    </label>
    <label>최근 3개월 총 일수(일)
      <input type="number" id="rtm-days" placeholder="예: 92" required>
    </label>
    <label>근속연수(년)
      <input type="number" id="rtm-years" step="0.1" placeholder="예: 3.4" required>
    </label>
  </div>
  <button class="btn">계산</button>
</form>

<div id="rtm-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/pension-savings/">다음: 연금저축</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
const f2 = n => (Math.round(n)).toLocaleString('ko-KR');
function calcRtm(){
  const sum = Math.max(0, Number(document.getElementById('rtm-sum').value)||0);
  const days= Math.max(1, Number(document.getElementById('rtm-days').value)||1);
  const yrs = Math.max(0, Number(document.getElementById('rtm-years').value)||0);
  const daily = sum / days;         // 평균임금(1일)
  const monthBase = daily * 30;     // 30일분
  const severance = Math.round(monthBase * yrs);
  const out = document.getElementById('rtm-out');
  out.classList.add('show');
  out.innerHTML = `
    <div class="card p-3"><div class="title">퇴직금(안내)</div>
    <ul><li>평균임금(1일): ${f2(daily)} 원</li><li>30일분: ${f2(monthBase)} 원</li>
    <li><strong>퇴직금:</strong> ${f2(severance)} 원</li></ul>
    <small class="muted">※ 단순화 공식(근속연수×30일분). 특별수당/제외기간 등은 반영되지 않을 수 있습니다.</small>
    </div>`;
}
</script>

