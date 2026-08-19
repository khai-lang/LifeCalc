<div id="today-data">
  <h3>💱 환율 (KRW 기준)</h3>
  <table id="fx-table">
    <thead><tr><th>통화</th><th>1 단위 → KRW</th></tr></thead>
    <tbody>
      <tr><td>USD</td><td id="fx-USD">불러오는 중...</td></tr>
      <tr><td>EUR</td><td id="fx-EUR">불러오는 중...</td></tr>
      <tr><td>CNY</td><td id="fx-CNY">불러오는 중...</td></tr>
      <tr><td>JPY (100)</td><td id="fx-JPY">불러오는 중...</td></tr>
      <tr><td>GBP</td><td id="fx-GBP">불러오는 중...</td></tr>
      <tr><td>AUD</td><td id="fx-AUD">불러오는 중...</td></tr>
      <tr><td>CAD</td><td id="fx-CAD">불러오는 중...</td></tr>
      <tr><td>SGD</td><td id="fx-SGD">불러오는 중...</td></tr>
      <tr><td>HKD</td><td id="fx-HKD">불러오는 중...</td></tr>
    </tbody>
  </table>
  <p style="font-size:12px;color:#888">출처: open.er-api.com (무료, 무키)</p>

  <h3>☁️ 오늘·내일 날씨 (서울)</h3>
  <div id="weather-box">불러오는 중...</div>
  <p style="font-size:12px;color:#888">출처: Open-Meteo (무료, 무키)</p>

  <button onclick="loadTodayData()">새로고침</button>
</div>

<script>
async function loadTodayData() {
  // 1) 환율
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/KRW');
    const data = await res.json();
    const rates = data.rates;
    const codes = { USD:1, EUR:1, CNY:1, JPY:100, GBP:1, AUD:1, CAD:1, SGD:1, HKD:1 };
    for (const code in codes) {
      const el = document.getElementById('fx-' + code);
      if (!el) continue;
      const unit = codes[code];
      const krwPerUnit = unit / rates[code];
      el.textContent = krwPerUnit.toLocaleString('ko-KR', { maximumFractionDigits: 2 }) + '원';
    }
  } catch (e) {
    console.error('환율 로딩 실패', e);
    document.querySelectorAll('#fx-table td[id^="fx-"]').forEach(el => el.textContent = '일시적 오류');
  }

  // 2) 날씨 (서울 좌표)
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSeoul&forecast_days=2');
    const data = await res.json();
    const d = data.daily;
    document.getElementById('weather-box').innerHTML =
      `오늘: ${d.temperature_2m_min[0]}°C ~ ${d.temperature_2m_max[0]}°C<br>` +
      `내일: ${d.temperature_2m_min[1]}°C ~ ${d.temperature_2m_max[1]}°C`;
  } catch (e) {
    console.error('날씨 로딩 실패', e);
    document.getElementById('weather-box').textContent = '일시적 오류';
  }
}
loadTodayData();
</script>
