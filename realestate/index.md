---
layout: default
title: 부동산·세금 계산기 모음
description: 전세↔월세, 양도세, 취득세, 종부세 계산기를 한 곳에서.
permalink: /realestate/
section: realestate
---

<style>
/* 페이지 전용 스타일 */
.realestate-wrap {
  max-width: 960px;   /* 본문 최대 폭 */
  margin: 0 auto;     /* 가운데 정렬 */
  padding: 0 20px;    /* 좌우 여백 */
}

/* 설명 문구 */
.realestate-intro {
  color: var(--muted-text, #666);
  margin: 8px 0 20px;
  line-height: 1.6;
}

/* 카드 그리드 */
.grid-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

/* 화면 넓어질수록 2열 */
@media (min-width: 560px) {
  .grid-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .grid-cards { grid-template-columns: repeat(2, 1fr); }
}

/* 카드 스타일 */
.card {
  display: block;
  padding: 18px 16px;
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 14px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}

.card:hover,
.card:focus-visible {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.10);
  border-color: #e1e1e1;
  outline: none;
}

/* 카드 내부 텍스트 */
.card .title {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 6px;
}
.card .desc {
  font-size: 14px;
  color: #666;
}
</style>

<section class="realestate-wrap">
  <h1>부동산·세금 계산기</h1>
  <p class="realestate-intro">부동산 계약 시 필수로 확인해야 할 전환율, 세금, 부대비용을 한 곳에서 계산하세요.</p>

  <div class="grid-cards" aria-label="부동산 계산기 링크 목록">
    <a class="card" href="{{ site.baseurl }}/realestate/rent-to-jeonse/">
      <div class="title">전세↔월세 전환</div>
      <div class="desc">전환율·월세 환산</div>
    </a>

    <a class="card" href="{{ site.baseurl }}/realestate/capital-gains/">
      <div class="title">양도소득세</div>
      <div class="desc">기본공제·장특공 포함</div>
    </a>

    <a class="card" href="{{ site.baseurl }}/realestate/acquisition-tax/">
      <div class="title">취득세</div>
      <div class="desc">주택 취득 부대비용</div>
    </a>

    <a class="card" href="{{ site.baseurl }}/realestate/property-tax/">
      <div class="title">종부세</div>
      <div class="desc">보유세 추정</div>
    </a>
  </div>
</section>
