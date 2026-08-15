---
layout: "default"
title: "건강 계산기 모음 - BMI·BMR·칼로리·물 섭취량 | LifeCalc"
description: "BMI, BMR, 칼로리, 물 섭취량까지 건강 관리에 필요한 계산기를 한 곳에서 이용하세요. 대한비만학회 기준, Mifflin-St Jeor 공식 등 근거를 명확히 밝힌 계산기입니다."
permalink: "/health/"
---

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <span aria-current="page">건강 계산기</span>
</nav>

<section class="cp-hero">
  <h1>건강 계산기 모음</h1>
  <p class="cp-hero-desc">
    체중 관리와 컨디션 관리에 필요한 계산기를 한 곳에 모았습니다. <strong>BMI</strong>로 현재 체중
    상태를 확인하고, <strong>BMR·칼로리</strong>로 하루 필요 열량을 계산한 뒤, <strong>물 섭취량</strong>까지
    챙겨보세요.
  </p>
</section>

<section class="vc-card">
  <h2>건강 계산기</h2>
  <div class="hub-grid">
    <a class="hub-card" href="/health/bmi/">
      <div class="hub-card-title">BMI 계산기</div>
      <div class="hub-card-desc">키·몸무게로 체질량지수를 계산하고, 대한비만학회 6단계 기준으로 비만도를 확인하세요.</div>
    </a>
    <a class="hub-card" href="/health/bmr/">
      <div class="hub-card-title">BMR 계산기</div>
      <div class="hub-card-desc">아무 활동을 하지 않아도 소비되는 기초대사량을 빠르게 확인하세요.</div>
    </a>
    <a class="hub-card" href="/health/calorie/">
      <div class="hub-card-title">칼로리 계산기</div>
      <div class="hub-card-desc">활동량을 반영한 하루 총 필요 칼로리(TDEE)와 감량·유지·증량 목표 칼로리를 계산하세요.</div>
    </a>
    <a class="hub-card" href="/health/water-intake/">
      <div class="hub-card-title">물 섭취량 계산기</div>
      <div class="hub-card-desc">체중과 활동량을 반영한 하루 권장 수분 섭취량을 확인하세요.</div>
    </a>
  </div>
</section>

<!-- AD SLOT -->
<!-- ⚠️ 실제 배포 전 data-ad-slot 값을 이 페이지 전용 슬롯 ID로 교체하세요 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="vc-card vc-card-light">
  <h2>이 계산기들, 다른 곳과 뭐가 다른가요?</h2>
  <table class="vc-table">
    <thead><tr><th>계산기</th><th>다른 곳에 없는 기능</th></tr></thead>
    <tbody>
      <tr><td>BMI 계산기</td><td>WHO 서구 기준이 아닌 대한비만학회 6단계(저체중~3단계 비만) 기준 + 정상 체중 범위 자동 계산</td></tr>
      <tr><td>칼로리 계산기</td><td>Mifflin-St Jeor 공식(현대 영양학 표준) + 감량 목표가 최소 권장 칼로리보다 낮으면 경고 표시</td></tr>
    </tbody>
  </table>
  <p class="vc-note">건강 계산기는 모두 참고용입니다. 정확한 진단과 처방은 의료진과 상담하세요.</p>
  <div class="cp-external-links">
    <a href="/guide/bmi-obesity-2026/">BMI·비만도 완전정리 가이드 보기</a>
  </div>
</section>

<section class="vc-card">
  <h2>다른 카테고리도 확인해보세요</h2>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/life/">
      <span class="vc-related-title">생활 계산기</span>
      <span class="vc-related-desc">만나이·기념일·단위변환·출산육아</span>
    </a>
    <a class="vc-related-card" href="/salary/">
      <span class="vc-related-title">급여·소득 계산기</span>
      <span class="vc-related-desc">연봉 실수령·4대보험·퇴직금</span>
    </a>
    <a class="vc-related-card" href="/realestate/">
      <span class="vc-related-title">부동산·세금 계산기</span>
      <span class="vc-related-desc">취득세·양도세·종부세·전세월세</span>
    </a>
    <a class="vc-related-card" href="/invest/">
      <span class="vc-related-title">투자 계산기</span>
      <span class="vc-related-desc">코인·주식 수익률·평단가·DCA</span>
    </a>
  </div>
</section>

<small>마지막 페이지 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .cp-breadcrumb { font-size: 0.85rem; color: #5b6470; margin-bottom: 1rem; }
  .cp-breadcrumb a { color: #5b6470; text-decoration: none; }
  .cp-breadcrumb a:hover { text-decoration: underline; }

  .cp-hero {
    background: linear-gradient(135deg, #f5ebdf, #e6d8c9);
    border: 1px solid #e3d4c5;
    border-radius: 22px;
    padding: 28px;
    margin-bottom: 24px;
    box-shadow: 0 12px 28px rgba(0,0,0,.04);
  }
  .cp-hero h1 { margin-top: 0; color: #13293d; }
  .cp-hero-desc { line-height: 1.7; color: #5b6470; }

  .vc-card{
    background:#f5ebdf; border:1px solid #e2d2c0; border-radius:22px;
    padding:24px 20px; box-shadow:0 12px 28px rgba(0,0,0,.04); margin-bottom:26px;
  }
  .vc-card-light { background: #fff; border-color: #e3d4c5; }
  .vc-card h2 { border-left: 4px solid #8c7355; padding-left: 10px; color:#13293d; }
  .vc-note { font-size: 0.85rem; color: #785a43; margin-top:10px; }

  .hub-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:14px; margin-top:14px; }
  .hub-card {
    display:flex; flex-direction:column; gap:6px; background:#fff; border:1px solid #e2d2c0;
    border-radius:14px; padding:18px; text-decoration:none; transition:box-shadow .15s, transform .15s;
  }
  .hub-card:hover { box-shadow:0 6px 18px rgba(19,41,61,.1); transform:translateY(-2px); }
  .hub-card-title { color:#e96f00; font-weight:800; font-size:1.02rem; }
  .hub-card-desc { color:#785a43; font-size:0.86rem; line-height:1.5; }

  .cp-external-links { display:flex; gap:10px; flex-wrap:wrap; margin-top:16px; }
  .cp-external-links a {
    display:inline-block; padding:10px 16px; border:1px solid #1f5c7a; color:#1f5c7a;
    border-radius:10px; text-decoration:none; font-weight:600; font-size:0.9rem;
  }
  .cp-external-links a:hover { background:#cfdfe8; }

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .vc-table { width:100%; min-width:420px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }

  .vc-related-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:12px; }
  .vc-related-card {
    display:flex; flex-direction:column; gap:4px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:12px; padding:14px 16px; text-decoration:none;
  }
  .vc-related-title { color:#e96f00; font-weight:700; }
  .vc-related-desc { font-size:0.85rem; color:#785a43; }
  .vc-related-card:hover .vc-related-title { text-decoration:underline; }

  @media (max-width: 900px){
    .hub-grid { grid-template-columns:repeat(2, 1fr); }
    .vc-related-grid { grid-template-columns:repeat(2, 1fr); }
  }
  @media (max-width: 640px){
    .hub-grid { grid-template-columns:1fr; }
    .vc-related-grid { grid-template-columns:1fr; }
  }
</style>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "건강 계산기 모음",
  "url": "https://calculator.khaistory.com/health/",
  "hasPart": [
    {"@type": "WebApplication", "name": "BMI 계산기", "url": "https://calculator.khaistory.com/health/bmi/", "applicationCategory": "HealthApplication"},
    {"@type": "WebApplication", "name": "BMR 계산기", "url": "https://calculator.khaistory.com/health/bmr/", "applicationCategory": "HealthApplication"},
    {"@type": "WebApplication", "name": "칼로리 계산기", "url": "https://calculator.khaistory.com/health/calorie/", "applicationCategory": "HealthApplication"},
    {"@type": "WebApplication", "name": "물 섭취량 계산기", "url": "https://calculator.khaistory.com/health/water-intake/", "applicationCategory": "HealthApplication"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://calculator.khaistory.com/health/"}
  ]
}
</script>
