---
layout: guide
title: 전세 전환율 공식 (2025 최신) — 계산법·상한·예시 총정리
description: 전세↔월세 전환율 공식, 법정 상한, 계산 예시와 주의사항을 한 번에 정리했습니다. 전환율 헷갈리지 않도록 ‘%’와 소수점 표기 모두 예시로 보여드립니다.
permalink: permalink: /guide/rent-to-jeonse-rate/
categories: guide
nav_exclude: true

---

<h1>전세 전환율 공식 (2025 최신)</h1>
<blockquote>전세↔월세 전환이 헷갈린다면, 이 글 하나로 정리 끝! 법정 상한, 정확한 계산식, 실무 예시, 자주 하는 오해까지 정리했습니다.</blockquote>

<!-- 목차 -->
<nav aria-label="전세 전환율 공식 목차" class="card" style="padding:12px;margin:12px 0;">
  <strong>빠른 이동</strong>
  <ol style="margin:8px 0 0 18px;line-height:1.7">
    <li><a href="#summary">핵심 요약</a></li>
    <li><a href="#terms">용어 정리</a></li>
    <li><a href="#formula">정확한 공식</a></li>
    <li><a href="#examples">숫자로 보는 예시</a></li>
    <li><a href="#pitfalls">자주 하는 실수 체크리스트</a></li>
    <li><a href="#calc">빠른 계산: 전환 계산기</a></li>
    <li><a href="#refs">공식 근거 &amp; 더 보기</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ol>
</nav>

<h2 id="summary">핵심 요약</h2>
<ul class="note" style="margin:0 0 10px">
  <li><b>보증금 → 월세 전환(주택)</b>에는 <b>법정 상한</b>이 있습니다. 통상 <em>“연 10%” 또는 “한국은행 기준금리 + 2%” 중 낮은 비율</em>을 넘길 수 없습니다.</li>
  <li><b>월세 → 전세 전환</b>에는 직접 상한 규정이 없으며, 지역 시세·기관 안내를 참고해 <b>협의</b>합니다.</li>
  <li><b>상가</b>는 주택과 <b>규정이 별도</b>이므로 혼동하지 마세요.</li>
</ul>

<h2 id="terms">용어 정리</h2>
<ul>
  <li><b>전세 전환율(전월세 전환율)</b>: 전세보증금과 월세를 서로 바꿀 때 쓰는 연(年) 이율.</li>
  <li><b>법정 전환율 상한(주택)</b>: 보증금을 월세로 바꿀 때 적용되는 최대 이율.</li>
  <li><b>기준금리</b>: 한국은행이 고시하는 정책금리로, 상한 산정에 반영됩니다.</li>
</ul>

<h2 id="formula">정확한 공식 (표기 주의: <b>%</b> vs <b>소수</b>)</h2>
<p>계산 실수의 대부분은 <b>%를 소수로 바꾸지 않아서</b> 생깁니다.</p>

<h3>A. 전세 → 월세 (보증금 일부/전체를 월세로 전환)</h3>
<div class="card" style="padding:12px;">
  <pre style="margin:0"><code>월세(원/월) = 보증금(원) × 전환율 r ÷ 12

※ r이 ‘소수’라면 예: r = 0.05 (= 5%)
※ r 대신 ‘% 값’ R을 쓴다면: 월세 = 보증금 × (R/100) ÷ 12</code></pre>
</div>
<p class="ma-legend" style="color:#6b7280">주택은 법정 상한(연 10% vs 기준금리+2% 중 낮은 값)을 넘길 수 없습니다.</p>

<h3>B. 월세 → 전세 (월세를 보증금으로 전환)</h3>
<div class="card" style="padding:12px;">
  <pre style="margin:0"><code>보증금(원) = 월세(원/월) × 12 ÷ r   (r = 소수)
           = 월세 × 12 × 100 ÷ R   (R = % 값)</code></pre>
</div>
<p class="ma-legend" style="color:#6b7280">월세→전세 전환에는 직접 상한 규정이 없으므로 시세·기관 안내를 참고해 협의합니다.</p>

<h2 id="examples">숫자로 보는 예시</h2>
<ul>
  <li><b>예시 1: 월세 100만원을 전세로(전환율 4%)</b><br>
    보증금 = 100만원 × 12 × 100 ÷ 4 = <b>3억원</b><br>
    <small style="color:#6b7280">R(%)를 쓸 때는 ×100이 필요합니다.</small>
  </li>
  <li><b>예시 2: 전세 2억원 중 5,000만원을 월세로(전환율 5%)</b><br>
    월세 ≈ 5,000만원 × 5% ÷ 12 = <b>약 20.8만원/월</b>
  </li>
  <li><b>예시 3: 법정 상한 적용(보증금 → 월세)</b><br>
    기준금리 2.5%라면 상한 = min(10%, 2.5%+2%) = 4.5%<br>
    1억원 전환 시 월세 상한 ≈ 1억원 × 4.5% ÷ 12 = <b>약 37.5만원/월</b>
  </li>
</ul>

<h2 id="pitfalls">자주 하는 실수 체크리스트</h2>
<ul>
  <li>전환율 <code>4</code>(%)로 나눴더니 보증금이 터무니없이 작다 → <b>×100</b> 누락.</li>
  <li>상가 규정을 주택에 적용 → <b>오류</b>. 상가는 별도 법 체계.</li>
  <li>월세→전세에도 법정 상한 강제 → <b>아님</b>. 협의·시세 참고.</li>
</ul>

<h2 id="calc">빠른 계산: 우리 사이트 전환 계산기</h2>
<p>
  👉 <a href="/finance/rent-to-jeonse/" class="btn">월세↔전세 전환 계산기</a><br>
  월세↔전세 <b>양방향</b> 전환, 보증금 감액에 따른 월세까지 한 번에 계산합니다.
  <br><small style="color:#6b7280">참고: 법정 상한은 <b>보증금→월세 전환</b>에 적용됩니다.</small>
</p>

<h2 id="refs">공식 근거 &amp; 더 보기</h2>
<ul>
  <li>주택임대차보호법: 보증금 → 월세 전환 시 산정률 제한(연 10% vs 기준금리+2% 중 낮은 비율)</li>
  <li>주택임대차보호법 시행령: 상한 산식 및 세부 규정</li>
  <li>국토교통부/부동산원 안내 및 계산 서비스: 기준금리 반영</li>
  <li>상가건물임대차보호법: 상가 전환 규정(주택과 별도)</li>
</ul>

<h2 id="faq">FAQ</h2>
<div class="card" style="padding:12px">
  <details>
    <summary><b>전세→월세 전환 시 상한은 무엇인가요?</b></summary>
    <p>주택은 <b>연 10%</b>와 <b>기준금리+2%</b> 중 낮은 비율을 넘길 수 없습니다.</p>
  </details>
  <details>
    <summary><b>월세→전세 전환에도 상한이 있나요?</b></summary>
    <p>직접 상한 규정은 없습니다. 공공 안내·지역 전환율·시세를 참고해 협의합니다.</p>
  </details>
  <details>
    <summary><b>전월세 전환율 계산에서 %와 소수는 어떻게 다르게 쓰나요?</b></summary>
    <p>5%는 소수 0.05입니다. 보증금→월세: <code>보증금×0.05÷12</code>, 월세→보증금: <code>월세×12÷0.05</code>입니다.</p>
  </details>
  <details>
    <summary><b>상가도 주택과 같은 상한이 적용되나요?</b></summary>
    <p>아닙니다. 상가는 상가건물임대차보호법 체계로 <b>별도</b>입니다.</p>
  </details>
  <details>
    <summary><b>기준금리가 바뀌면 전환율 상한도 바뀌나요?</b></summary>
    <p>네. <b>기준금리+2%</b> 항목이 변하므로 상한도 달라집니다.</p>
  </details>
</div>

<!-- 내부 링크 제안 -->
<div class="note" style="margin-top:14px">
  계산부터 해보기 → <a href="/finance/rent-to-jeonse/"><b>월세↔전세 전환 계산기</b></a><br>
  대출 상환도 함께 검토 → <a href="/finance/loan/"><b>대출 이자/원리금 계산기</b></a>
</div>

<!-- 개발자 메모(선택) -->
<details style="margin-top:10px">
  <summary><b>개발자 메모</b> — % 입력 처리 주의</summary>
  <p>월세→전세 공식을 <code>보증금 = 월세 × 12 ÷ 전환율(%)</code>처럼 구현하면 100배 작게 나옵니다. <b>소수 전환율</b>(예: <code>rate/100</code>)을 쓰거나, 분자에 <code>×100</code>을 곱해 보정하세요.</p>
</details>

<!-- FAQ 스키마(JSON-LD) -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"전세→월세 전환 시 상한은 무엇인가요?",
      "acceptedAnswer":{"@type":"Answer","text":"주택은 연 10%와 한국은행 기준금리+2% 중 낮은 비율을 넘길 수 없습니다."}
    },
    {
      "@type":"Question",
      "name":"월세→전세 전환에도 상한이 있나요?",
      "acceptedAnswer":{"@type":"Answer","text":"직접 상한 규정은 없습니다. 공공 안내·지역 전환율·시세를 참고해 협의합니다."}
    },
    {
      "@type":"Question",
      "name":"전월세 전환율 계산에서 %와 소수는 어떻게 다르게 쓰나요?",
      "acceptedAnswer":{"@type":"Answer","text":"5%는 0.05입니다. 보증금→월세: 보증금×0.05÷12, 월세→보증금: 월세×12÷0.05 입니다."}
    },
    {
      "@type":"Question",
      "name":"상가도 주택과 같은 상한이 적용되나요?",
      "acceptedAnswer":{"@type":"Answer","text":"아닙니다. 상가는 상가건물임대차보호법 체계로 별도입니다."}
    },
    {
      "@type":"Question",
      "name":"기준금리가 바뀌면 전환율 상한도 바뀌나요?",
      "acceptedAnswer":{"@type":"Answer","text":"네. 기준금리+2% 항목이 변하므로 상한도 달라집니다."}
    }
  ]
}
</script>
