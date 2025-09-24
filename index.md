---
layout: default
title: 계산기 포털 | LifeCalc
description: 생활·금융·부동산·건강·코인·보험 계산기를 한 곳에서. 전세↔월세, 대출, 양도세, BMI, 코인 수익률, 자동차 보험료 등 실생활 계산을 빠르고 정확하게.
---

<!-- Hero -->
<section class="hero">
  <div class="hero-text">
    <h1 style="margin:0 0 6px">LifeCalc 계산기 포털</h1>
    <p class="hero-sub">전세↔월세, 대출, 양도세, BMI, 코인 수익률, 자동차 보험료까지 한 번에.</p>

    <div class="hero-quick">
      <a href="/realestate/rent-to-jeonse/" class="btn btn-lg">전세↔월세 계산기 →</a>
      <a href="/finance/loan/" class="btn btn-ghost">대출 이자 계산</a>
      <a href="/crypto/profit/" class="btn btn-ghost">코인 수익률</a>
      <a href="/insurance/auto/" class="btn btn-ghost">자동차 보험료</a>
    </div>
  </div>
</section>

<!-- 카테고리 -->
<h2>카테고리</h2>
<div class="grid-cards">
  <a class="card card-link" href="/life/">
    <div class="icon">🧰</div>
    <div class="title">생활 계산기</div>
    <div class="desc">만나이, 날짜, 단위 변환, 출산·육아</div>
  </a>

  <a class="card card-link" href="/finance/">
    <div class="icon">💰</div>
    <div class="title">금융 계산기</div>
    <div class="desc">대출, 연봉↔시급, DSR</div>
  </a>

  <a class="card card-link" href="/realestate/">
    <div class="icon">🏠</div>
    <div class="title">부동산·세금 계산기</div>
    <div class="desc">전세↔월세, 양도세, 취득세, 종부세</div>
  </a>

  <a class="card card-link" href="/health/">
    <div class="icon">⚕️</div>
    <div class="title">건강 계산기</div>
    <div class="desc">BMI, BMR, 물 섭취량</div>
  </a>

  <a class="card card-link" href="/crypto/">
    <div class="icon">₿</div>
    <div class="title">코인 계산기</div>
    <div class="desc">수익률, DCA, APR↔APY, IL</div>
  </a>

  <a class="card card-link" href="/insurance/">
    <div class="icon">🛡️</div>
    <div class="title">보험 계산기</div>
    <div class="desc">자동차, 실손, 보장액, 연금</div>
  </a>

  <a class="card card-link" href="/fun/">
    <div class="icon">🎯</div>
    <div class="title">재미있는 테스트</div>
    <div class="desc">정신연령, 별자리/띠</div>
  </a>

  <a class="card card-link" href="/guide/">
    <div class="icon">📘</div>
    <div class="title">가이드</div>
    <div class="desc">공식·해석 모음</div>
  </a>
</div>

<!-- 추천 계산기 -->
<h2>추천 계산기</h2>
<div class="grid-mini">
  <a class="mini card" href="/realestate/rent-to-jeonse/">
    <div class="mini-title">전세↔월세 전환</div>
    <div class="mini-desc">전세 전환율·월세 환산</div>
  </a>
  <a class="mini card" href="/finance/loan/">
    <div class="mini-title">대출 이자/원리금</div>
    <div class="mini-desc">월 상환액·총이자</div>
  </a>
  <a class="mini card" href="/realestate/capital-gains/">
    <div class="mini-title">양도소득세 계산기</div>
    <div class="mini-desc">기본공제·장특공 포함</div>
  </a>
  <a class="mini card" href="/realestate/acquisition-tax/">
    <div class="mini-title">취득세 계산기</div>
    <div class="mini-desc">주택 취득 부대비용</div>
  </a>
  <a class="mini card" href="/crypto/profit/">
    <div class="mini-title">코인 수익률 계산기</div>
    <div class="mini-desc">매수가·수수료 반영</div>
  </a>
  <a class="mini card" href="/insurance/auto/">
    <div class="mini-title">자동차 보험료 추정</div>
    <div class="mini-desc">연령·차종 가중치</div>
  </a>
  <a class="mini card" href="/health/bmi/">
    <div class="mini-title">BMI 계산기</div>
    <div class="mini-desc">체질량지수·해석</div>
  </a>
</div>

<!-- 오늘의 팁 (홈=리스트형) -->
<div class="promo-desktop">
 
</div>

<!-- 페이지 전용 보조 스타일 -->
<style>
  /* Hero */
  .hero{
    background-color: #f5e6da;   /* 연한 베이지 */
    border:1px solid var(--line);
    border-radius: var(--radius);
    padding: 22px 18px;
    display:flex; gap:18px; align-items:stretch; justify-content:space-between;
    margin: 10px 0 18px;
  }
  .hero-text{ display:flex; flex-direction:column; gap:10px; }
  .hero-sub{ margin:0; color:#6b7280 }
  .hero-quick{ display:flex; gap:8px; flex-wrap:wrap; }
  .btn-lg{ padding:10px 18px; font-size:15px; }
  .btn-ghost{
    background:#fff; color:#333; border:1px solid #e6ebf0;
    padding:6px 14px; border-radius:6px; font-weight:600;
  }
  .btn-ghost:hover{ background:#f6f7f9; }

  .hero-badge{
    background:#fff; border:1px solid #f3e6db; border-radius:12px;
    padding:12px; width:280px; min-width:240px;
    box-shadow:0 8px 24px rgba(0,0,0,.04);
  }
  .badge-top{ font-size:13px; color:#9ca3af; margin-bottom:6px; }
  .badge-body{ line-height:1.55; }

  /* 카드 그리드 */
  .grid-cards{
    display:grid; gap:12px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin: 10px 0 18px;
  }
  .card-link{ display:block; padding:16px; transition: transform .06s ease, box-shadow .15s ease; }
  .card-link:hover{ transform: translateY(-2px); box-shadow:0 10px 22px rgba(0,0,0,.06); }
  .card-link .icon{ font-size:22px; line-height:1; margin-bottom:6px; }
  .card-link .title{ font-weight:700; margin-bottom:4px; }
  .card-link .desc{ color:#6b7280; }

  /* 추천 미니 카드 */
  .grid-mini{
    display:grid; gap:12px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    margin-bottom: 8px;
  }
  .mini{ padding:14px; transition: background .2s, transform .06s; }
  .mini:hover{ background:#f5e6da; transform: translateY(-1px); }
  .mini-title{ font-weight:700; margin-bottom:4px; }
  .mini-desc{ color:#6b7280; font-size:14px; }

  @media (max-width: 860px){
    .hero{ flex-direction:column; }
    .hero-badge{ width:auto; }
  }
</style>
