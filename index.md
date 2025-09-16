---
layout: default
title: 홈
description: 생활·금융·건강·출산 육아 계산기를 한 곳에서
---

<!-- Hero -->
<section class="hero">
  <div class="hero-text">
    <h1 style="margin:0 0 6px">LifeCalc 계산기 포털</h1>
    <p class="hero-sub">만나이, 기념일·날짜, 대출, BMI 등 실생활 계산을 빠르고 정확하게.</p>

    <div class="hero-quick">
      <a href="/life/age/" class="btn btn-lg">만나이 계산하기 →</a>
      <a href="/finance/loan/" class="btn btn-ghost">대출 계산</a>
      <a href="/health/bmi/" class="btn btn-ghost">BMI</a>
      <a href="/family/due-date/" class="btn btn-ghost">출산 예정일</a>
    </div>
  </div>
  <div class="hero-badge">
    <div class="badge-top">오늘의 팁</div>
    <div class="badge-body">버튼 · 결과 박스는 전역 디자인을 사용해<br>모든 페이지가 한결같이 보여요.</div>
  </div>
</section>

<!-- 카테고리 -->
<h2>카테고리</h2>
<div class="grid-cards">
  <a class="card card-link" href="/life/">
    <div class="icon">🧰</div>
    <div class="title">생활 계산기</div>
    <div class="desc">만나이, 기념일·날짜, 단위 변환</div>
  </a>
  <a class="card card-link" href="/finance/">
    <div class="icon">💰</div>
    <div class="title">금융 계산기</div>
    <div class="desc">전세↔월세, 대출, 연봉↔시급</div>
  </a>
  <a class="card card-link" href="/health/">
    <div class="icon">⚕️</div>
    <div class="title">건강 계산기</div>
    <div class="desc">BMI, BMR, 물 섭취량</div>
  </a>
  <a class="card card-link" href="/family/">
    <div class="icon">👶</div>
    <div class="title">출산·육아 계산기</div>
    <div class="desc">예정일, 생후 N일/개월, 백일, 예방접종</div>
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
  <a class="mini card" href="/life/age/">
    <div class="mini-title">만나이 계산기</div>
    <div class="mini-desc">생년월일·기준일로 정확한 만 나이</div>
  </a>
  <a class="mini card" href="/finance/loan/">
    <div class="mini-title">대출 이자/원리금</div>
    <div class="mini-desc">원리금균등·원금균등 월 상환액/총이자</div>
  </a>
  <a class="mini card" href="/health/bmi/">
    <div class="mini-title">BMI 계산기</div>
    <div class="mini-desc">체질량지수와 간단 해석</div>
  </a>
</div>

<!-- 광고 -->
<div class="ad-box">
  <ins class="adsbygoogle" style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="1398373115"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>
</div>

<!-- 페이지 전용 보조 스타일 -->
<style>
  /* Hero */
  .hero{
    background: linear-gradient(135deg, #fdf6f0 0%, #f7fbff 100%);
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
  .mini:hover{ background:#f8fafc; transform: translateY(-1px); }
  .mini-title{ font-weight:700; margin-bottom:4px; }
  .mini-desc{ color:#6b7280; font-size:14px; }

  @media (max-width: 860px){
    .hero{ flex-direction:column; }
    .hero-badge{ width:auto; }
  }
</style>
