<style>
.dd-wrap { max-width: 720px; margin: 0 auto; }
.dd-updated { color:#888; font-size:13px; margin-bottom:16px; }
.dd-comment {
  background:#fff7e6; border-left:4px solid #f5a623; padding:12px 16px;
  border-radius:6px; margin-bottom:20px; font-size:14px;
}
.dd-fx-grid {
  display:grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap:10px; margin-bottom:24px;
}
.dd-fx-card {
  border:1px solid #eee; border-radius:10px; padding:12px 14px;
  background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.04);
}
.dd-fx-card .flag { font-size:20px; }
.dd-fx-card .code { font-weight:600; font-size:14px; margin-left:4px; }
.dd-fx-card .value { font-size:18px; font-weight:700; margin-top:6px; }
.dd-fx-card .change { font-size:12px; margin-top:2px; }
.dd-fx-card .change.up { color:#d0342c; }
.dd-fx-card .change.down { color:#1a6dd6; }
.dd-fx-card .change.flat { color:#999; }
.dd-weather-box {
  display:flex; gap:16px; background:#f5f9ff; border-radius:10px;
  padding:16px; margin-bottom:16px;
}
.dd-weather-item { flex:1; text-align:center; }
.dd-weather-item .label { font-size:13px; color:#666; }
.dd-weather-item .temp { font-size:18px; font-weight:700; margin-top:4px; }

/* 🧮 투자 계산기 링크 카드 스타일 (1번 안 적용) */
.dd-cross-link {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 20px 0;
  padding: 14px 18px;
  background-color: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  text-decoration: none;
  color: #1e293b;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
}
.dd-cross-link:hover {
  background-color: #f1f5f9;
  border-color: #cbd5e1;
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  text-decoration: none;
}
.dd-cross-icon {
  font-size: 22px;
  flex-shrink: 0;
}
.dd-cross-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 14px;
}
.dd-cross-text strong {
  color: #0f172a;
  font-weight: 600;
}
.dd-cross-sub {
  color: #475569;
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

<a href="https://calculator.khaistory.com/invest/" class="dd-cross-link" target="_blank" rel="noopener noreferrer">
  <span class="dd-cross-icon">🧮</span>
  <span class="dd-cross-text">
    <strong>이 환율로 직접 계산해보고 싶다면</strong>
    <span class="dd-cross-sub">투자 계산기에서 코인·주식 손익을 바로 환산해보세요 →</span>
  </span>
</a>

<a class="dd-share-btn" href="#" onclick="navigator.clipboard.writeText(window.location.href); alert('링크가 복사되었습니다!'); return false;">🔗 오늘의 환율 공유하기</a>

<p style="font-size:12px;color:#888;margin-top:16px">출처: open.er-api.com · Open-Meteo (둘 다 무료, 무키)</p>

</div>
