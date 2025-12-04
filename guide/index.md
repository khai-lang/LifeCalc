---
layout: default
title: 가이드 글 보러가기
description: 각종 계산기·생활·재테크 지식을 카드형 가이드로 모아 한 번에 볼 수 있는 허브 페이지입니다.
permalink: /guide/
---

<div class="guide-hub">

  <!-- 상단 안내 문구 -->
  <p class="guide-intro">
    LifeCalc의 가이드 글을 한 곳에 모았습니다.<br>
    위쪽 <b>카드 요약</b>에서 관심 있는 글을 고르고, <b>자세히 보기</b> 버튼을 누르면
    이 페이지 하단의 해당 본문 위치로 바로 이동합니다.
  </p>

  <!-- 검색 영역 -->
  <div class="guide-search-row">
    <input id="guide-search"
           type="text"
           placeholder="가이드 제목·요약으로 검색해 보세요"
           class="guide-search-input" />
    <span class="guide-search-hint">예: 연봉, 전세, BMI, 아기, 신혼부부…</span>
  </div>

  <!-- ✅ 카드 리스트: 요약 영역 -->
  {% assign guides = site.categories.guide | sort: "date" | reverse %}

  <div class="guide-card-list">
    {% for post in guides %}
      {% include guide-card.html post=post %}
    {% endfor %}
  </div>

  <hr class="guide-divider">

  <!-- ✅ 본문 전체 영역 -->
  <h2 class="guide-posts-title">📚 전체 가이드 본문</h2>
  <p class="guide-posts-desc">
    각 카드의 <b>자세히 보기</b> 버튼을 누르면, 아래의 해당 본문 위치로 스크롤됩니다.<br>
    검색엔진에서는 이 전체 본문을 기준으로 가이드 허브 페이지가 평가됩니다.
  </p>

  <div class="guide-posts">
    {% for post in guides %}
      <section id="post-{{ post.slug }}" class="guide-post-block">
        {{ post.content }}
      </section>
    {% endfor %}
  </div>
</div>

<style>
  .guide-hub{
    margin-top:8px;
    font-size:0.98rem;
  }

  .guide-intro{
    color:#4b5563;
    line-height:1.7;
    margin-bottom:18px;
  }

  .guide-search-row{
    display:flex;
    flex-direction:column;
    gap:6px;
    margin-bottom:16px;
  }

  .guide-search-input{
    width:100%;
    max-width:420px;
    padding:10px 14px;
    border-radius:999px;
    border:1px solid #d1d5db;
    font-size:0.95rem;
  }

  .guide-search-hint{
    font-size:0.8rem;
    color:#9ca3af;
  }

  .guide-card-list{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:16px;
    margin-bottom:24px;
  }

  /* 이미 _includes/guide-card.html 안에도 기본 스타일이 있지만,
     리스트 간격 유지를 위해 최소한의 레이아웃만 설정 */
  .guide-card{
    height:100%;
  }

  .guide-divider{
    border:0;
    border-top:1px solid #e5e7eb;
    margin:24px 0;
  }

  .guide-posts-title{
    font-size:1.3rem;
    margin:0 0 8px;
  }

  .guide-posts-desc{
    color:#6b7280;
    font-size:0.9rem;
    margin:0 0 14px;
  }

  .guide-posts{
    display:flex;
    flex-direction:column;
    gap:32px;
  }

  .guide-post-block{
    background:#ffffff;
    border-radius:12px;
    border:1px solid #e5e7eb;
    padding:18px 18px 22px;
    box-shadow:0 6px 18px rgba(15,23,42,0.06);
  }

  .guide-post-block h1{
    font-size:1.4rem;
    margin-top:0;
  }

  @media (max-width: 640px){
    .guide-post-block{
      padding:14px 12px 18px;
    }
  }
</style>

<script>
  // 🔍 상단 검색창에서 카드 필터링 (제목 + 요약 텍스트 기준)
  (function(){
    const input = document.getElementById('guide-search');
    if(!input) return;
    const cards = Array.from(document.querySelectorAll('.guide-card'));

    input.addEventListener('input', function(){
      const q = this.value.trim().toLowerCase();
      cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = (!q || text.includes(q)) ? '' : 'none';
      });
    });
  })();
</script>
