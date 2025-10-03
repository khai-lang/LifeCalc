---
layout: default
title: 테스트/심리
description: 정신연령 테스트, 별자리·띠 찾기를 한 곳에서
permalink: /lifeplus/fun/
section: lifeplus
nav_label: 테스트/심리
nav_order: 20
redirect_from:
  - /fun/
  - /fun/index.html
---

# 테스트/심리

<p class="lead">간단하고 재미있는 테스트로 매일 색다른 재미를 느껴보세요.</p>

<div class="fun-grid">
  <a class="fun-card" href="{{ '/lifeplus/fun/mental-age/' | relative_url }}">
    <div class="fun-card-title">정신연령 테스트</div>
    <div class="fun-card-desc">20문항으로 성향을 체크하고 추정 정신연령 확인</div>
  </a>

  <a class="fun-card" href="{{ '/lifeplus/fun/astro/' | relative_url }}">
    <div class="fun-card-title">별자리·띠 찾기</div>
    <div class="fun-card-desc">생년월일로 별자리와 띠를 바로 확인</div>
  </a>
</div>

<style>
.lead{color:#475569;margin:6px 0 14px}
.fun-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;margin:8px 0 24px}
.fun-card{display:block;border:1px solid #e5e7eb;border-radius:14px;padding:16px;background:#fff;text-decoration:none}
.fun-card:hover{box-shadow:0 4px 14px rgba(0,0,0,.08);transform:translateY(-1px)}
.fun-card-title{font-weight:700;margin-bottom:6px;color:#0f172a}
.fun-card-desc{color:#64748b}
</style>
