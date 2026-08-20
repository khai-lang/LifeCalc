<style>
.dd-wrap { max-width: 720px; margin: 0 auto; }
.dd-updated { color:#888; font-size:13px; margin-bottom:16px; }
.dd-comment {
  background:#fff7e6; border-left:4px solid #f5a623; padding:12px 16px;
  border-radius:6px; margin-bottom:20px; font-size:14px;
}
.dd-fx-card {
  border:1px solid #e6ebf2; border-radius:12px; padding:14px 16px;
  background:linear-gradient(180deg,#ffffff 0%, #f8fafc 100%);
  box-shadow:0 2px 6px rgba(15,45,80,0.06);
  transition:transform .15s ease;
}
.dd-fx-card:hover { transform:translateY(-2px); }
.dd-fx-card .code { color:#0e3a5f; }
.dd-fx-card .value { color:#0e3a5f; }
.dd-comment {
  background:#fdf6ec; border-left:4px solid #f5a623;
}
.dd-cross-link {
  border:1px solid #dbe6f3; background:#f5f9ff;
}
.dd-share-btn {
  background:#0e3a5f;
}
.dd-weather-box {
  display:flex; gap:16px; background:#f5f9ff; border-radius:10px;
  padding:16px; margin-bottom:16px;
}
.dd-weather-item { flex:1; text-align:center; }
.dd-weather-item .label { font-size:13px; color:#666; }
.dd-weather-item .temp { font-size:18px; font-weight:700; margin-top:4px; }
.dd-cross-link {
  margin-top:20px; padding:14px; border:1px dashed #ccc; border-radius:8px;
  font-size:14px;
}
.dd-share-btn {
  margin-top:12px; display:inline-block; padding:8px 14px;
  border-radius:6px; background:#333; color:#fff; text-decoration:none; font-size:13px;
}
</style>


<div class="dd-wrap" markdown="1">
  
**오늘의 데이터**
<div class="dd-updated">마지막 업데이트: {{ site.data.rates.date }}</div>

<div class="dd-comment">💡 {{ site.data.rates.comment }}</div>

### 💱 환율 (KRW 기준)

<div class="dd-fx-grid">
{% assign flags = "USD:🇺🇸,EUR:🇪🇺,CNY:🇨🇳,JPY:🇯🇵,GBP:🇬🇧,AUD:🇦🇺,CAD:🇨🇦,SGD:🇸🇬,HKD:🇭🇰" | split: "," %}
{% for pair in flags %}
  {% assign parts = pair | split: ":" %}
  {% assign code = parts[0] %}
  {% assign flag = parts[1] %}
  {% assign fx = site.data.rates.fx[code] %}
  <div class="dd-fx-card">
    <span class="flag">{{ flag }}</span><span class="code">{{ code }}{% if code == "JPY" %} (100){% endif %}</span>
    <div class="value">{{ fx.value }}원</div>
    {% if fx.direction == "up" %}
      <div class="change up">▲ {{ fx.change }} ({{ fx.change_pct }}%)</div>
    {% elsif fx.direction == "down" %}
      <div class="change down">▼ {{ fx.change | remove_first: "-" }} ({{ fx.change_pct | remove_first: "-" }}%)</div>
    {% else %}
      <div class="change flat">- 변동 없음</div>
    {% endif %}
  </div>
{% endfor %}
</div>

### ☁️ 오늘·내일 날씨 (서울)

<div class="dd-weather-box">
  <div class="dd-weather-item">
    <div class="label">오늘</div>
    <div class="temp">{{ site.data.rates.weather.today_min }}° ~ {{ site.data.rates.weather.today_max }}°</div>
  </div>
  <div class="dd-weather-item">
    <div class="label">내일</div>
    <div class="temp">{{ site.data.rates.weather.tomorrow_min }}° ~ {{ site.data.rates.weather.tomorrow_max }}°</div>
  </div>
</div>

<div class="dd-cross-link">
  🧮 이 환율로 직접 계산해보고 싶다면 → <a href="https://calculator.khaistory.com/invest/">투자 계산기</a>에서 코인·주식 손익을 바로 환산해보세요.
</div>

<a class="dd-share-btn" href="#" onclick="navigator.clipboard.writeText(window.location.href); alert('링크가 복사되었습니다!'); return false;">🔗 오늘의 환율 공유하기</a>

<p style="font-size:12px;color:#888;margin-top:16px">출처: open.er-api.com · Open-Meteo (둘 다 무료, 무키)</p>

</div>
