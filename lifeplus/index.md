<style>
.ins-wrap { max-width: 700px; margin: 0 auto; }
.ins-updated { color:#888; font-size:13px; margin-bottom:20px; }
.ins-section {
  border:1px solid #eee; border-radius:12px; padding:18px 20px;
  margin-bottom:16px; background:#fff;
}
.ins-section h3 {
  margin:0 0 12px; font-size:16px; display:flex; align-items:center; gap:8px;
}
.ins-news-item {
  display:block; padding:10px 0; border-bottom:1px solid #f2f2f2;
  text-decoration:none; color:#222;
}
.ins-news-item:last-child { border-bottom:none; }
.ins-news-item .src { color:#999; font-size:12px; margin-left:6px; }
.ins-tip-box {
  background:#f5f9ff; border-left:4px solid #3b82f6;
  padding:14px 16px; border-radius:6px; font-size:14px;
}
.ins-quote-box {
  background:#fdf6ec; border-left:4px solid #f5a623;
  padding:14px 16px; border-radius:6px; font-size:15px; font-style:italic;
}
</style>

<div class="ins-wrap" markdown="1">

**오늘의 인사이트**
<div class="ins-updated">마지막 업데이트: {{ site.data.insight.date }}</div>

<div class="ins-section">
<h3>📰 오늘의 경제 뉴스</h3>
{% for item in site.data.insight.news %}
<a class="ins-news-item" href="{{ item.url }}" target="_blank" rel="noopener">
{{ item.title }}{% if item.source %}<span class="src">· {{ item.source }}</span>{% endif %}
</a>
{% endfor %}
</div>

<div class="ins-section">
<h3>💡 생활 팁</h3>
<div class="ins-tip-box">{{ site.data.insight.tip }}</div>
</div>

<div class="ins-section">
<h3>✨ 오늘의 명언</h3>
<div class="ins-quote-box">{{ site.data.insight.quote }}</div>
</div>

</div>
