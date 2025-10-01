---
layout: default
title: 종합소득세 계산기 2025(간편)
description: 과세표준 구간별 단순 누진세 계산(지방소득세 10% 포함).
permalink: /salary/income-tax/

---

# 종합소득세(간편 계산)

<form id="it-form" onsubmit="event.preventDefault(); calcIT();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>연 과세표준(원)
      <input type="number" id="it-base" placeholder="예: 24000000" required>
    </label>
    <label>세액공제/감면(연, 원)
      <input type="number" id="it-credit" value="0">
    </label>
    <label>지방소득세 포함
      <select id="it-local"><option value="yes">예</option><option value="no">아니오</option></select>
    </label>
  </div>
  <button class="btn" type="submit">계산</button>
</form>

<div id="it-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/retirement/">다음: 퇴직금</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
const fmt = n => (Math.round(n)).toLocaleString('ko-KR');
function pit(base){
  // 간단 누진(예시 구간) — 실제 연도별 세율표로 교체 권장
  const br = [
    {up: 12_000_000, rate:0.06,  ded:0},
    {up: 46_000_000, rate:0.15,  ded:1_080_000},
    {up: 88_000_000, rate:0.24,  ded:5_220_000},
    {up:150_000_000, rate:0.35,  ded:14_900_000},
    {up:300_000_000, rate:0.38,  ded:19_400_000},
    {up:500_000_000, rate:0.40,  ded:25_400_000},
    {up:1_000_000_000, rate:0.42, ded:35_400_000},
    {up:Infinity, rate:0.45,     ded:65_400_000}
  ];
  for (const b of br){ if (base <= b.up) return Math.round(base*b.rate - b.ded); }
  return 0;
}
function calcIT(){
  const base = Math.max(0, Number(document.getElementById('it-base').value)||0);
  const credit = Math.max(0, Number(document.getElementById('it-credit').value)||0);
  const localYes = document.getElementById('it-local').value === 'yes';
  let tax = Math.max(0, pit(base) - credit);
  const local = localYes ? Math.round(tax*0.1) : 0;
  document.getElementById('it-out').classList.add('show');
  document.getElementById('it-out').innerHTML = `
    <div class="card p-3"><div class="title">종합소득세(간편)</div>
    <ul><li>국세: ${fmt(tax)} 원</li>${localYes?`<li>지방세: ${fmt(local)} 원</li>`:''}
    <li><strong>합계:</strong> ${fmt(tax+local)} 원</li></ul>
    <small class="muted">※ 단순화된 계산입니다. 실제 신고는 홈택스를 참고하세요.</small>
    </div>`;
}
</script>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/retirement/">다음: 퇴직금</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
  {"@type":"ListItem","position":2,"name":"연봉 실수령 계산기","item":"https://calculator.khaistory.com/salary/income-tax/"}
]}</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"간편 계산과 실제 신고 금액이 다를 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"간편 계산은 안내용이며 실제 신고는 공제 항목과 소득 구분에 따라 달라질 수 있습니다."}},
    {"@type":"Question","name":"연도 변경은 어떻게 반영되나요?","acceptedAnswer":{"@type":"Answer","text":"세율·상한 변경은 데이터 파일을 갱신하면 자동 반영되도록 설계할 수 있습니다."}}
  ]
}
</script>
