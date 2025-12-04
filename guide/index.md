---
layout: default
title: "전체 가이드 모음"
description: "LifeCalc의 모든 계산기 가이드를 한 곳에서 모아보는 요약 페이지입니다."
permalink: /guide/
---

<h1>전체 가이드 모음</h1>
<p>LifeCalc의 모든 가이드 글을 한곳에서 모아볼 수 있습니다. 아래 카드형 리스트에서 원하는 가이드를 선택하세요.</p>

<div class="guide-list" style="display:flex; flex-wrap:wrap; gap:20px; margin-top:20px;">
  {% for post in site.categories.guide %}
    <div class="guide-card" style="width:300px; border:1px solid #eee; border-radius:12px; padding:16px;">
      <h3 style="margin-top:0;">
        <a href="{{ post.url }}">{{ post.title }}</a>
      </h3>
      <p style="font-size:14px; color:#555;">{{ post.description | truncate: 80 }}</p>
      <a href="{{ post.url }}" 
         style="display:inline-block; margin-top:10px; padding:8px 12px; background:#0057b8; color:white; border-radius:6px;">
         자세히 보기
      </a>
    </div>
  {% endfor %}
</div>
