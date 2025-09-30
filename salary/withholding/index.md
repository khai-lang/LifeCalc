---
layout: default
title: 원천징수세액 계산기 — 간이세액(근사)
description: 부양가족 수에 따른 간이세액 근사와 지방소득세(10%) 계산.
permalink: /salary/withholding/
section: salary
---

# 원천징수세액 계산기(근사)

<form id="wt-form" onsubmit="event.preventDefault(); calcWT();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>월 과세대상 급여(원)
      <input type="number" id="taxbase" placeholder="예: 3000000" required>
    </label>
    <label>부양가족 수(본인 포함)
      <input type="number" id="deps" value="1" min="1">
    </label>
    <label>기타 공제(월, 원)
      <input type="number" id="deduct" value="0">
    </label>
  </div>
  <button class="btn" type="submit">계산</button>
</form>

<div id="wt-out" class="result-box"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/income-tax/">다음: 종합소득세</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
const f = n => (Math.round(n)).toLocaleString('ko-KR');
function calcWT(){
  const base = Math.max(0, Number(document.getElementById('taxbase').value)||0);
  const deps = Math.max(1, Number(document.getElementById('deps').value)||1);
  const deduct = Math.max(0, Number(document.getElementById('deduct').value)||0);
  const adj = Math.max(0, base - deduct);

  // 아주 단순한 근사 비율표
  let rate = 0.03;
  if (adj > 4_000_000) rate = 0.065;
  else if (adj > 3_000_000) rate = 0.055;
  else if (adj > 2_000_000) rate = 0.045;
  rate = Math.max(0, rate - (deps-1)*0.003);

  const tax = Math.round(adj * rate);
  const local = Math.round(tax * 0.1);

  const out = document.getElementById('wt-out');
  out.classList.add('show');
  out.innerHTML = `
    <div class="card p-3"><div class="title">월 원천징수(근사)</div>
      <ul><li>소득세(근사): ${f(tax)} 원</li><li>지방소득세(10%): ${f(local)} 원</li>
      <li><strong>합계:</strong> ${f(tax+local)} 원</li></ul>
      <small class="muted">※ 실제 간이세액표와 다를 수 있습니다(안내용).</small>
    </div>`;
}
</script>



<script type="application/ld+json">{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
  {"@type":"ListItem","position":2,"name":"원천징수세액 계산기","item":"https://calculator.khaistory.com/salary/withholding/"}
]}</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"부양가족 수는 어떻게 반영되나요?","acceptedAnswer":{"@type":"Answer","text":"간이세액표 기준에 맞춰 환산하며 근사/정확 모드를 제공합니다."}},
    {"@type":"Question","name":"지방소득세는 포함되나요?","acceptedAnswer":{"@type":"Answer","text":"원천징수 소득세에 10%를 더해 지방소득세를 산출합니다."}}
  ]
}
</script>
