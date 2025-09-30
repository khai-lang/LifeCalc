---
layout: default
title: 자동차보험 할인·특약 효과 계산기
description: 기준 보험료에 마일리지/블랙박스/자녀·무사고 등 할인율을 적용한 예상 보험료를 계산합니다.
permalink: /insurance/auto-discount/
---

# 자동차보험 할인·특약 효과 계산기

<form id="auto" onsubmit="event.preventDefault();autoCalc();">
  <div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px">
    <label>기준 보험료(원) <input type="number" id="base" placeholder="예: 800000" required></label>
    <label>마일리지 할인(%) <input type="number" id="mile" step="0.1" value="8"></label>
    <label>블랙박스 할인(%) <input type="number" id="bb" step="0.1" value="4"></label>
    <label>무사고 할인(%) <input type="number" id="ns" step="0.1" value="5"></label>
    <label>자녀 할인(%) <input type="number" id="kid" step="0.1" value="3"></label>
    <label>기타 할인(%) <input type="number" id="etc" step="0.1" value="0"></label>
  </div>
  <button class="btn" style="margin-top:8px">계산</button>
</form>

<div id="auto-out" class="result-box"></div>

<!-- 교차 링크 2개 -->
<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/insurance/health-copay/">실손 자기부담금 계산</a>
  <a class="btn ghost" href="/insurance/">보험 계산기 전체보기</a>
</div>

<script>
const fnum = n => (Math.round(n)).toLocaleString('ko-KR');
function autoCalc(){
  const base = Number(document.getElementById('base').value)||0;
  if (!base){ alert('기준 보험료를 입력하세요.'); return; }
  const rates = ['mile','bb','ns','kid','etc'].map(id => (Number(document.getElementById(id).value)||0)/100);
  // 중복 할인은 보수적으로 "연쇄 곱" 적용
  const discounted = rates.reduce((acc,r)=> acc*(1-r), base);
  const totalDisc = (1 - discounted/base) * 100;
  document.getElementById('auto-out').classList.add('show');
  document.getElementById('auto-out').innerHTML = `
    <div class="card p-3"><div class="title">예상 보험료</div>
      <ul>
        <li>총 할인율(보수적 추정): ${totalDisc.toFixed(2)} %</li>
        <li><strong>적용 후 보험료:</strong> ${fnum(discounted)} 원</li>
      </ul>
      <small class="muted">※ 실제 할인은 보험사/특약 조건에 따라 달라질 수 있습니다.</small>
    </div>`;
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"보험 계산기 모음","item":"https://calculator.khaistory.com/insurance/"},
    {"@type":"ListItem","position":2,"name":"자동차보험 할인·특약 효과 계산기","item":"https://calculator.khaistory.com/insurance/auto-discount/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"할인율은 어떻게 합산되나요?","acceptedAnswer":{"@type":"Answer","text":"중복 할인을 과대평가하지 않도록 연쇄 곱 방식으로 적용합니다."}},
    {"@type":"Question","name":"실제 보험료와 차이가 나는 이유는?","acceptedAnswer":{"@type":"Answer","text":"보험사별 산식·담보 구성·개인 조건이 달라 안내 결과와 차이가 날 수 있습니다."}}
  ]
}
</script>

