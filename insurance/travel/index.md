---
layout: default
title: 여행자보험 간편 보험료 계산기
description: 여행 기간·연령·플랜 수준으로 간단히 보험료를 추정합니다(안내용).
permalink: /insurance/travel/
---

# 여행자보험 간편 보험료 계산기

<form id="trv" onsubmit="event.preventDefault();trvCalc();">
  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px">
    <label>여행 기간(일) <input type="number" id="t_days" value="5" required></label>
    <label>연령 <input type="number" id="t_age" value="35" required></label>
    <label>플랜 <select id="t_plan"><option value="basic">Basic</option><option value="std">Standard</option><option value="plus">Plus</option></select></label>
    <label>동남아/유럽/미주 <select id="t_region"><option>국내</option><option>아시아</option><option>유럽</option><option>미주</option></select></label>
  </div>
  <small class="muted">※ 보수적 추정: 연령/지역 가중치와 플랜 계수로 단순화.</small>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="trv-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
  <a class="btn" href="/insurance/">보험 계산기 전체보기</a>
  <a class="btn ghost" href="/insurance/auto-discount/">자동차보험 할인·특약</a>
</div>

<script>
const fn = n => (Math.round(n)).toLocaleString('ko-KR');
function trvCalc(){
  const d = Number(document.getElementById('t_days').value)||0;
  const age = Number(document.getElementById('t_age').value)||0;
  const plan = document.getElementById('t_plan').value;
  const region = document.getElementById('t_region').value;
  if (!(d>0 && age>0)){ alert('기간/연령을 확인하세요.'); return; }
  const basePerDay = 1200; // 원/일(기본)
  const planK = {basic:1.0, std:1.5, plus:2.2}[plan];
  const ageK  = age<30?1.0 : age<50?1.2 : age<70?1.6 : 2.5;
  const regK  = { '국내':1.0, '아시아':1.1, '유럽':1.3, '미주':1.5 }[region];
  const premium = Math.round(basePerDay * d * planK * ageK * regK);
  document.getElementById('trv-out').classList.add('show');
  document.getElementById('trv-out').innerHTML = `
    <div class="card p-3"><div class="title">예상 보험료(안내)</div>
      <ul>
        <li>총 보험료(추정): <strong>${fn(premium)} 원</strong></li>
      </ul>
      <small class="muted">※ 실제 보험료/보장내역은 보험사·플랜에 따라 달라집니다.</small>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"보험 계산기 모음","item":"https://calculator.khaistory.com/insurance/"},
    {"@type":"ListItem","position":2,"name":"여행자보험 간편 보험료 계산기","item":"https://calculator.khaistory.com/insurance/travel/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"연령/지역에 따른 가중치는 어떻게 적용되나요?","acceptedAnswer":{"@type":"Answer","text":"연령·지역·플랜 계수를 곱하는 보수적 근사 모델을 사용합니다."}},
    {"@type":"Question","name":"실제 보험료와 다른 이유는?","acceptedAnswer":{"@type":"Answer","text":"보험사별 산식·보장내역·특약에 따라 실제 보험료가 달라질 수 있습니다."}}
  ]
}
</script>
