---
layout: guide-index
title: 가이드 모음
description: 전세 전환율, BMI 범위, 대출 이자 등 다양한 계산 공식과 해석을 제공합니다.
permalink: /guide/
section: guide
---

# 가이드 모음

<p class="muted">계산기를 이해하고 활용하는 데 필요한 각종 공식과 해석을 정리했습니다.</p>

<ul class="guide-list">
  {% assign guides = site.categories.guide | sort: "date" | reverse %}
  {% for post in guides %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small style="color:#6b7280">{{ post.date | date: "%Y-%m-%d" }}</small><br>
      <span style="color:#444">{{ post.description | default: post.excerpt | strip_html | truncate: 100 }}</span>
    </li>
  {% endfor %}
</ul>

<style>
.guide-list{ list-style:none; padding:0; margin:0; display:grid; gap:12px }
.guide-list li{ padding:12px; border:1px solid #e6ebf0; border-radius:10px; background:#fff; }
.guide-list a{ font-weight:700; }
</style>
