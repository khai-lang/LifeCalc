---
layout: default
title: 오늘의 인사이트
description: 경제 뉴스 요약과 오늘의 명언/생활 팁
permalink: /lifeplus/insight/
section: lifeplus
nav_label: 오늘의 인사이트
nav_order: 40
---


{% assign latest = site.data.insight | sort:'date' | reverse | first %}
{% include insight-cards.html latest=latest %}

<p class="muted" style="margin-top:16px">
  ※ 데이터는 <code>_data/insight.yml</code>을 수정하면 자동 반영됩니다.
</p>
