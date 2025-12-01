---
layout: default
title: 자동차보험 등급(할증/할인) 추정기
description: 무사고/사고 건수로 다음 연도 예상 등급 변화(보수적 추정)를 계산합니다.
permalink: /insurance/auto-grade/
---


<form id="agr" onsubmit="event.preventDefault();agrCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>현재 등급(1~30) <input type="number" id="g_now" min="1" max="30" value="11" required></label>
    <label>올해 사고 건수 <input type="number" id="g_acc" min="0" value="0" required></label>
    <label>무사고 경과 연수 <input type="number" id="g_years" min="0" value="1" required></label>
  </div>
  <small class="muted">※ 매우 단순 규칙: 무사고 1년 -1등급, 사고 1건 +1등급(보수적), 최소 1등급</small>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="agr-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/insurance/auto-discount/">자동차보험 할인·특약 계산</a>
  <a class="btn ghost" href="/insurance/">보험 계산기 전체보기</a>
</div>

<script>
const f5 = n => (Math.round(n)).toLocaleString('ko-KR');
function agrCalc(){
  let g = Math.min(30, Math.max(1, Number(document.getElementById('g_now').value)||11));
  const acc = Math.max(0, Number(document.getElementById('g_acc').value)||0);
  const yrs = Math.max(0, Number(document.getElementById('g_years').value)||0);
  g = g - yrs + acc; if (g<1) g=1; if (g>30) g=30;
  document.getElementById('agr-out').classList.add('show');
  document.getElementById('agr-out').innerHTML = `
    <div class="card p-3"><div class="title">예상 등급</div>
      <ul><li><strong>다음 연도 추정 등급:</strong> ${f5(g)} 등급</li></ul>
      <small class="muted">※ 보험사별 산식/사고유형에 따라 실제 등급 변화는 다를 수 있습니다.</small>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"보험 계산기 모음","item":"https://calculator.khaistory.com/insurance/"},
    {"@type":"ListItem","position":2,"name":"자동차보험 등급 추정기","item":"https://calculator.khaistory.com/insurance/auto-grade/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"등급 변동 규칙은 무엇을 쓰나요?","acceptedAnswer":{"@type":"Answer","text":"무사고 1년 -1등급, 사고 1건 +1등급의 단순 근사 규칙을 사용합니다."}},
    {"@type":"Question","name":"보험사마다 등급 산식이 다르지 않나요?","acceptedAnswer":{"@type":"Answer","text":"맞습니다. 실제 등급은 보험사·사고유형에 따라 달라집니다."}}
  ]
}
</script>

