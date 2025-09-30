---
layout: default
title: 운전자보험 필요 담보 추정기
description: 운전 빈도·거리·경력에 따라 권장 담보 구성을 제안합니다(안내용).
permalink: /insurance/driver-coverage/
---

# 운전자보험 필요 담보 추정기

<form id="drv" onsubmit="event.preventDefault();drvCalc();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>용도 <select id="d_use"><option>출퇴근</option><option>업무</option><option>자유주행</option></select></label>
    <label>하루 주행거리(km) <input type="number" id="d_km" value="20"></label>
    <label>운전경력(년) <input type="number" id="d_years" value="3"></label>
  </div>
  <button class="btn" style="margin-top:8px">추천 담보 보기</button>
</form>

<div id="drv-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/insurance/auto-discount/">자동차보험 할인·특약 계산</a>
  <a class="btn ghost" href="/insurance/health-copay/">실손 자기부담 계산</a>
</div>

<script>
function drvCalc(){
  const use = document.getElementById('d_use').value;
  const km = Number(document.getElementById('d_km').value)||0;
  const yrs = Number(document.getElementById('d_years').value)||0;
  let lvl = '보통';
  if (km>40 || use==='업무') lvl='높음';
  if (yrs<1) lvl='매우 높음';

  const packs = {
    '보통': ['벌금 2천만','형사합의 2억','변호사비용 3천'],
    '높음': ['벌금 3천만','형사합의 3억','변호사비용 5천','중대사고 특약'],
    '매우 높음': ['벌금 5천만','형사합의 5억','변호사비용 1억','중대사고/합의지원 특약']
  };
  const rec = packs[lvl];

  document.getElementById('drv-out').classList.add('show');
  document.getElementById('drv-out').innerHTML = `
    <div class="card p-3"><div class="title">권장 담보 구성(안내)</div>
      <ul>
        <li>위험수준: <strong>${lvl}</strong></li>
        ${rec.map(x=>`<li>${x}</li>`).join('')}
      </ul>
      <small class="muted">※ 실제 가입은 보험설계사/약관을 통해 확인하세요.</small>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"보험 계산기 모음","item":"https://calculator.khaistory.com/insurance/"},
    {"@type":"ListItem","position":2,"name":"운전자보험 필요 담보 추정기","item":"https://calculator.khaistory.com/insurance/driver-coverage/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"추천 담보는 어떤 기준인가요?","acceptedAnswer":{"@type":"Answer","text":"용도/주행거리/운전경력으로 위험수준을 간단히 분류해 권장 담보를 제시합니다."}},
    {"@type":"Question","name":"보험 가입에 그대로 사용해도 되나요?","acceptedAnswer":{"@type":"Answer","text":"안내용이며 실제 가입은 설계사 상담과 약관 확인이 필요합니다."}}
  ]
}
</script>

