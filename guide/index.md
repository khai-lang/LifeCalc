---
layout: guide-index
title: 가이드 모음
description: 전세 전환율, BMI 범위, 대출 이자 등 다양한 계산 공식과 해석을 제공합니다.
permalink: /guide/
section: guide
---

<p class="muted">계산기를 이해하고 활용하는 데 필요한 각종 공식과 해석을 정리했습니다.</p>

{%- comment -%}
  1) _posts/guide/ 폴더의 글을 우선 수집 (categories 누락돼도 안전)
  2) 폴더에 글이 없으면 categories: guide 로 대체
{%- endcomment -%}
{%- if guides_folder and guides_folder != empty -%}
  {%- assign guides = guides_folder -%}
{%- else -%}
  {%- assign guides = site.categories.guide -%}
{%- endif -%}
{%- assign guides = guides | sort: "date" | reverse -%}

<div class="grid-cards guide-grid">
  {%- for post in guides -%}
    <a class="card card-link" href="{{ post.url | relative_url }}">
      <div class="title">{{ post.title }}</div>
      <div class="meta">{{ post.date | date: "%Y-%m-%d" }}</div>
      <div class="desc">
        {{ post.description | default: post.excerpt | strip_html | truncate: 110 }}
      </div>
    </a>
  {%- endfor -%}
</div>

<style>
/* ===== 기본 카드 스타일(사이트 공통이 있으면 중복 적용 OK) ===== */
.grid-cards{ display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:16px; }
.card{ background:#fff; border:1px solid #e6ebf0; border-radius:12px; padding:16px; transition:.2s ease; }
.card-link{ text-decoration:none; }
.card:hover{ box-shadow:0 8px 22px rgba(15,23,42,.08); transform:translateY(-2px); }
.card .title{ font-weight:800; color:#0f172a; margin-bottom:6px; line-height:1.3; }
.card .meta{ font-size:12px; color:#94a3b8; margin-bottom:8px; }
.card .desc{ color:#475569; }

/* 가이드 페이지 전용 약간의 여백 보정 */
.guide-grid{ margin-top:12px; }
</style>
