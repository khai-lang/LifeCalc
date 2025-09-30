---
layout: default
title: 종합소득세 계산기 2025
description: 근로·기타소득 등 기본 항목 중심의 종합소득세 간편 계산.
permalink: /finance/income-tax/
section: finance
---

<h1>종합소득세 계산기</h1>
<p class="muted">기본 항목 중심의 간편 계산 버전입니다. 실제 신고는 국세청 홈택스를 참고하세요.</p>

<!-- TODO: 여기 계산기 UI/로직 삽입 -->

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/finance/retirement/">다음: 퇴직금</a>
  <a class="btn ghost" href="/finance/salary/">허브로 돌아가기</a>
</div>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/finance/"},
    {"@type":"ListItem","position":2,"name":"연봉·급여·세금 허브","item":"https://calculator.khaistory.com/finance/salary/"},
    {"@type":"ListItem","position":3,"name":"종합소득세 계산기","item":"https://calculator.khaistory.com/finance/income-tax/"}
  ]
}
</script>

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
