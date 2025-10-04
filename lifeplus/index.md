---
layout: default
title: 라이프+
description: 재미있는 테스트, 오늘의 데이터, 인사이트, 챌린지, 가이드 글 모음
permalink: /lifeplus/
section: lifeplus
nav_label: 라이프+
nav_order: 10
---


<div class="grid-cards">
  <a class="card" href="{{ '/lifeplus/fun/'        | relative_url }}">
    <div class="title">테스트/심리</div>
    <div class="desc">정신연령 테스트, 별자리·띠 찾기</div>
  </a>
  <a class="card" href="{{ '/lifeplus/daily-data/' | relative_url }}">
    <div class="title">오늘의 데이터</div>
    <div class="desc">환율·금시세·날씨 요약</div>
  </a>
  <a class="card" href="{{ '/lifeplus/insight/'    | relative_url }}">
    <div class="title">오늘의 인사이트</div>
    <div class="desc">경제뉴스 요약, 오늘의 명언/팁</div>
  </a>
  <a class="card" href="{{ '/lifeplus/challenge/'  | relative_url }}">
    <div class="title">챌린지</div>
    <div class="desc">30일 챌린지</div>
  </a>
  <a class="card" href="{{ '/lifeplus/guide/'      | relative_url }}">
    <div class="title">가이드 글 보기</div>
    <div class="desc">블로그형 가이드 글 모음 (SEO)</div>
  </a>
</div>

<style>
.grid-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-top:16px}
.card{border:1px solid #eee;border-radius:12px;padding:16px;background:#fff;transition:transform .15s ease,box-shadow .15s ease}
.card:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.06)}
.title{font-weight:700;margin-bottom:6px}
.desc{color:#666;font-size:.95rem}
</style>
