---
layout: default
title: 실손의료보험 자기부담금 계산기
description: 급여/비급여 진료비와 공제액·본인부담률로 실손 보장액과 본인부담금을 계산합니다.
permalink: /insurance/health-copay/
---


<form id="copay" onsubmit="event.preventDefault();copayCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>진료비(원) <input type="number" id="bill" required></label>
    <label>공제금액(원) <input type="number" id="deduct" value="5000"></label>
    <label>본인부담률(%) <input type="number" id="rate" step="1" value="20"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="copay-out" class="result-box"></div>

<!-- 교차 링크 2개 -->
<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/insurance/auto-discount/">자동차보험 할인·특약 계산</a>
  <a class="btn ghost" href="/insurance/">보험 계산기 전체보기</a>
</div>

<script>
const fk = n => (Math.round(n)).toLocaleString('ko-KR');
function copayCalc(){
  const bill = Math.max(0, Number(document.getElementById('bill').value)||0);
  const deduct = Math.max(0, Number(document.getElementById('deduct').value)||0);
  const rate = Math.max(0, Number(document.getElementById('rate').value)||0)/100;
  if (!bill){ alert('진료비를 입력하세요.'); return; }
  const eligible = Math.max(0, bill - deduct);
  const patient = Math.round(eligible*rate + deduct);
  const insurer = Math.max(0, bill - patient);
  document.getElementById('copay-out').classList.add('show');
  document.getElementById('copay-out').innerHTML = `
    <div class="card p-3"><div class="title">결과</div>
      <ul>
        <li>보장대상 금액: ${fk(eligible)} 원</li>
        <li>보험사 지급(추정): ${fk(insurer)} 원</li>
        <li><strong>본인부담금(추정):</strong> ${fk(patient)} 원</li>
      </ul>
      <small class="muted">※ 실제 약관/특약/비급여 구분에 따라 달라질 수 있습니다.</small>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"보험 계산기 모음","item":"https://calculator.khaistory.com/insurance/"},
    {"@type":"ListItem","position":2,"name":"실손의료보험 자기부담금 계산기","item":"https://calculator.khaistory.com/insurance/health-copay/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"공제금액과 본인부담률을 어디서 바꾸나요?","acceptedAnswer":{"@type":"Answer","text":"입력 폼에서 직접 수정하면 계산에 즉시 반영됩니다."}},
    {"@type":"Question","name":"비급여 항목도 계산되나요?","acceptedAnswer":{"@type":"Answer","text":"본 계산기는 안내용이며, 세부 약관에 따라 실제 지급액은 달라질 수 있습니다."}}
  ]
}
</script>

