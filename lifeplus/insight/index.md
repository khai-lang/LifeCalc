---
layout: default
title: 오늘의 인사이트
description: 경제 뉴스 요약과 오늘의 명언/생활 팁
permalink: /lifeplus/insight/
section: lifeplus
nav_label: 오늘의 인사이트
nav_order: 40
---


# 오늘의 인사이트

📰 오늘의 경제 뉴스 요약
{% for item in site.data.insight.news %}
- [{{ item.title }}]({{ item.url }}){% if item.source %} · {{ item.source }}{% endif %}
{% endfor %}

💡 생활에 도움이 되는 한 줄 팁

{{ site.data.insight.tip }}

✨ 오늘의 명언
> {{ site.data.insight.quote }}

*마지막 업데이트: {{ site.data.insight.date }}*
