---
layout: default
title: 원천징수세액 계산기 — 간이세액(부양가족 반영)
description: 부양가족 수를 반영한 간이세액(근사/정확모드) 계산, 지방소득세 포함.
permalink: /finance/withholding/
section: finance
---

<h1>원천징수세액 계산기</h1>
<p class="muted">부양가족 수 기준 간이세액을 계산합니다. 정확모드는 간이세액표(CSV)로 확장 가능합니다.</p>

<!-- TODO: 여기 계산기 UI/로직 삽입 -->

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/finance/income-tax/">다음: 종합소득세</a>
  <a class="btn ghost" href="/finance/salary/">허브로 돌아가기</a>
</div>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/finance/"},
    {"@type":"ListItem","position":2,"name":"연봉·급여·세금 허브","item":"https://calculator.khaistory.com/finance/salary/"},
    {"@type":"ListItem","position":3,"name":"원천징수세액 계산기","item":"https://calculator.khaistory.com/finance/withholding/"}
  ]
}
</script>

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
