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
/* 3열 레이아웃 */
.wrap--with-rail.rail-3{
  display:grid;
  grid-template-columns: 200px minmax(0,1fr) 320px;
  gap:24px;
  margin-top:32px;
}

.left-rail, .right-rail{
  position:sticky;
  top:96px;
}

.main-content{
  background:#fff;
  padding:0 4px;
}

@media (max-width: 860px){
  .wrap--with-rail.rail-3{
    grid-template-columns: 1fr;
  }
  .left-rail, .right-rail{
    display:none;
  }
  .promo-mobile{ display:block; margin-top:24px; }
}

@media (min-width: 861px){
  .promo-mobile{ display:none !important; }
}
</style>
