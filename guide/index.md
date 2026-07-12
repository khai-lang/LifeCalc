---
---

{% include head.html %}

{% include header.html %}

<main class="wrap wrap--with-rail rail-3">

  <!-- 좌측 광고 -->
  <aside class="left-rail">
    {% include ads/left-rail.html %}
  </aside>

  <!-- 본문 -->
  <article class="main-content post-body">
    {% if page.title %}
      <h1 class="page-title">{{ page.title }}</h1>
    {% endif %}

    <div class="prose">
      {{ content }}
    </div>

    <!-- 모바일 팁 -->
    <div class="promo-mobile">
      {% include promo-tip-guide.html %}
      {% include ads/mobile-bottom.html %}
    </div>
  </article>

  <!-- 우측 레일 -->
  <aside class="right-rail">
    {% include promo-tip-guide.html %}
    {% include ads/right-rail.html %}
  </aside>

</main>

{% include footer.html %}

<style>
/* 3열 레이아웃 구조 유지 */
.wrap--with-rail.rail-3 {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr) 320px;
  gap: 24px;
  margin-top: 32px;
}

.left-rail, .right-rail {
  position: sticky;
  top: 96px;
}

/* [수정] 본문 영역을 계산기 카드 스타일로 변경 */
.main-content {
  background: #fff;
  border: 1px solid #f1eae1; /* 계산기 카드 테두리 */
  border-radius: 18px; /* 계산기 카드 라운딩 */
  padding: 32px 28px; /* 내부 여백 확보 */
  color: #4a3d30; /* 계산기 기본 브라운 텍스트 */
}

/* [추가] 가이드 제목 스타일 정돈 */
.page-title {
  font-size: 28px;
  font-weight: 800;
  color: #3a2c1d;
  line-height: 1.4;
  margin: 0 0 24px 0;
}

/* [추가] 본문 타이포그래피 및 요소 스타일링 (.prose 내부 제어) */
.prose {
  font-size: 16px;
  line-height: 1.8;
}

.prose p {
  margin: 0 0 16px;
}

/* 본문 내 소제목에 계산기 특유의 갈색 세로줄 바 추가 */
.prose h1, .prose h2, .prose prose h3 {
  border-left: 4px solid #8c7355;
  padding-left: 10px;
  color: #3a2c1d;
  font-weight: 700;
  margin: 36px 0 16px;
}

.prose h1 { font-size: 24px; }
.prose h2 { font-size: 20px; }
.prose h3 { font-size: 18px; }

/* 본문 내 강조 텍스트를 계산기 포인트 오렌지로 */
.prose strong {
  color: #ff7a00;
  font-weight: 700;
}

/* 본문 내 링크를 계산기 딥블루 및 호버 오렌지로 */
.prose a {
  color: #1f5c7a;
  text-decoration: underline;
  font-weight: 600;
  transition: color 0.15s ease;
}

.prose a:hover {
  color: #ff7a00;
}

/* 반응형 모바일 디자인 정돈 */
@media (max-width: 860px) {
  .wrap--with-rail.rail-3 {
    grid-template-columns: 1fr;
    margin-top: 16px;
  }
  .left-rail, .right-rail {
    display: none;
  }
  .main-content {
    padding: 24px 20px; /* 모바일에서는 여백을 살짝 줄임 */
    border-radius: 14px;
    font-size: 15px;
  }
  .page-title {
    font-size: 22px;
    margin-bottom: 16px;
  }
  .promo-mobile { 
    display: block; 
    margin-top: 32px; 
    border-top: 1px dashed #e3d4c5;
    padding-top: 24px;
  }
}

@media (min-width: 861px) {
  .promo-mobile { display: none !important; }
}
</style>
