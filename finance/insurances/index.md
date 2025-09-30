---
layout: default
title: 4대보험 계산기 2025 — 근로자 부담액 자동 계산
description: 국민연금·건강보험(장기요양)·고용보험 근로자 부담액을 연봉 기준으로 산출합니다.
permalink: /salary/insurances/
section: salary
---

<h1>4대보험 계산기</h1>
<p class="muted">연봉(또는 월급) 기준으로 근로자 부담액을 계산합니다.</p>

<!-- TODO: 계산기 UI/로직 -->

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/withholding/">다음: 원천징수세액</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>


<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
    {"@type":"ListItem","position":2,"name":"4대보험 계산기","item":"https://calculator.khaistory.com/salary/insurances/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"국민연금 상한/하한은 적용되나요?","acceptedAnswer":{"@type":"Answer","text":"월 표준보수 하한/상한을 적용해 근로자 부담분을 계산합니다."}},
    {"@type":"Question","name":"장기요양보험은 어떻게 계산되나요?","acceptedAnswer":{"@type":"Answer","text":"건강보험료에 장기요양보험료율을 곱해 산출합니다."}}
  ]
}
</script>
