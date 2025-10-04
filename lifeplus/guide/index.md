---
layout: default
title: 가이드 글 보기
description: 계산기 공식 해설과 생활 지식 블로그 글 모음
permalink: /lifeplus/guide/
section: lifeplus
nav_label: 가이드 글 보기
nav_order: 60
---


<p>계속 발행되는 블로그형 글들을 한눈에 모아 보여줍니다.</p>

<div class="grid-cards">
  {% assign guides = site.categories.guide | sort: "date" | reverse %}
  {% if guides == empty %}
    {% assign guides = site.posts | where_exp: "p","p.path contains '/_posts/guide/'" | sort: "date" | reverse %}
  {% endif %}

  {% for post in guides %}
    <a class="card" href="{{ post.url | relative_url }}">
      <div class="title">{{ post.title }}</div>
      <div class="desc">{{ post.description | default: post.excerpt | strip_html | truncate: 110 }}</div>
      <div class="muted" style="margin-top:6px;font-size:.9rem">{{ post.date | date: "%Y-%m-%d" }}</div>
    </a>
  {% endfor %}
</div>

<style>
.grid-cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin-top:16px}
.card{border:1px solid #eee;border-radius:12px;padding:16px;background:#fff}
.title{font-weight:700;margin-bottom:6px}.desc{color:#666}.muted{color:#888}
</style>
