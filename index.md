---
layout: default
title: 계산기 포털 | LifeCalc
description: 생활·금융·부동산·건강·코인·보험 계산기를 한 곳에서. 전세↔월세, 대출, 양도세, BMI, 코인 수익률, 자동차 보험료 등 실생활 계산을 빠르고 정확하게.
section: home
---

<!-- Hero -->
<section class="hero">
  <div class="hero-text">
    <h1 style="margin:0 0 6px">만나이 계산기와 생활형 계산기 모음</h1>
    <p class="hero-sub">연봉·세금·전월세·대출까지, 가장 자주 쓰는 계산을 한 곳에서.</p>
    <div class="hero-quick" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px">
      <a href="/life/age/" class="btn" style="background:#111;color:#fff">만나이 계산기 →</a>
      <a href="/salary/net-pay/" class="btn">연봉 실수령</a>
      <a href="/realestate/rent-to-jeonse/" class="btn">전세↔월세</a>
      <a href="/realestate/loan/" class="btn">대출 이자</a>
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
    <div class="title">연봉·급여 계산기</div>
    <div class="desc">연봉 실수령액, 4대보험, 원천징수세액</div>
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

  <a class="card card-link" href="/guide/">
    <div class="icon">📘</div>
    <div class="title">가이드</div>
    <div class="desc">공식·해석 모음</div>
  </a>
</div>

<!-- 추천 계산기: 버튼형(상단과 중복 최소화) -->
<h2>추천 계산기</h2>
<div class="btn-grid">
  <a class="pill" href="/realestate/capital-gains/">양도세 계산</a>
  <a class="pill" href="/realestate/acquisition-tax/">취득세 계산</a>
  <a class="pill" href="/realestate/dsr/">DSR 계산</a>
  <a class="pill" href="/health/bmi/">BMI</a>
  <a class="pill" href="/crypto/profit/">코인 수익률</a>
  <a class="pill" href="/insurance/auto/">자동차 보험료</a>
  <a class="pill" href="/life/age/">만나이</a>
  <a class="pill" href="/life/date/">날짜 계산</a>
</div>

<!-- 페이지 전용 보조 스타일 -->
<style>
  /* Hero */
  .hero{
    background-color:#f5e6da;  /* 연한 베이지 */
    border:1px solid var(--line);
    border-radius:var(--radius);
    padding:22px 18px;
    display:flex; gap:18px; align-items:stretch; justify-content:space-between;
    margin:10px 0 18px;
  }
  .hero-text{ display:flex; flex-direction:column; gap:10px; }
  .hero-sub{ margin:0; color:#6b7280 }
  .hero-quick{ display:flex; gap:8px; flex-wrap:wrap; }
  .btn-lg{ padding:10px 18px; font-size:15px; }
  .btn-ghost{
    background:#fff; color:#0b4c74; border:1.5px solid #d7e6f2;
    padding:8px 14px; border-radius:10px; font-weight:700;
  }
  .btn-ghost:hover{ background:#eef6fc; border-color:#bdd9ef; }

  /* 카드 그리드 */
  .grid-cards{
    display:grid; gap:12px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin:10px 0 18px;
  }
  .card-link{ display:block; padding:16px; transition: transform .06s ease, box-shadow .15s ease; }
  .card-link:hover{ transform: translateY(-2px); box-shadow:0 10px 22px rgba(0,0,0,.06); }
  .card-link .icon{ font-size:22px; line-height:1; margin-bottom:6px; }
  .card-link .title{ font-weight:700; margin-bottom:4px; }
  .card-link .desc{ color:#6b7280; }

  /* 추천 버튼 그리드 */
  .btn-grid{
    display:grid; gap:10px;
    grid-template-columns: repeat(auto-fill, minmax(160px,1fr));
    margin-bottom: 8px;
  }
  .pill{
    display:block; text-align:center; padding:10px 12px;
    border:1px solid #e6ebf0; border-radius:999px;
    background:#fff; color:#333; font-weight:700;
    transition:background .15s, transform .05s, border-color .15s;
  }
  .pill:hover{ background:#f5f7fa; transform:translateY(-1px); border-color:#d9e2ea; }

  @media (max-width:860px){
    .hero{ flex-direction:column; }
  }
</style>

