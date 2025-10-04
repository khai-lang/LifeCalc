<!-- 오늘의 데이터 (무료 API 3종, 통화 확장 + 견고한 에러 처리 버전) -->
<div id="daily-cards" class="cards-wrap">
  <div class="cards-toolbar">
    <div class="left">
      <strong>오늘의 데이터</strong>
      <span id="asof" class="muted">— 준비중</span>
    </div>
    <div class="right">
      <input id="city" type="text" placeholder="도시 입력 (예: Seoul)" />
      <button id="btn-refresh">새로고침</button>
    </div>
  </div>

  <div class="grid-cards">
    <!-- 환율 -->
    <section class="card">
      <div class="title">💱 환율 (KRW 기준)</div>
      <div class="desc muted small">ExchangeRate-API (무료) · 1 단위 → KRW</div>
      <table class="data-table">
        <thead><tr><th>통화</th><th>KRW</th></tr></thead>
        <tbody id="fx-body">
          <tr><td>USD</td><td data-k="USD">—</td></tr>
          <tr><td>EUR</td><td data-k="EUR">—</td></tr>
          <tr><td>CNY</td><td data-k="CNY">—</td></tr>
          <tr><td>JPY (100)</td><td data-k="JPY100">—</td></tr>
          <tr><td>GBP</td><td data-k="GBP">—</td></tr>
          <tr><td>AUD</td><td data-k="AUD">—</td></tr>
        </tbody>
      </table>
      <div id="fx-note" class="muted small" style="margin-top:6px"></div>
    </section>

    <!-- 금값 -->
    <section class="card">
      <div class="title">🥇 금 시세 (XAU)</div>
      <div class="desc muted small">GoldAPI.io (무료) · KRW 기준</div>
      <div class="gold-grid">
        <div><div class="label">1 oz</div><div id="gold-oz" class="value">—</div></div>
        <div><div class="label">1 g (환산)</div><div id="gold-g" class="value">—</div></div>
      </div>
      <div id="gold-note" class="muted small" style="margin-top:6px"></div>
    </section>

    <!-- 날씨 -->
    <section class="card">
      <div class="title">☁️ 현재 날씨</div>
      <div class="desc muted small">OpenWeatherMap (무료)</div>
      <div class="metric"><span id="wx-temp" class="value">—</span></div>
      <div id="wx-desc" class="hint muted small">—</div>
      <div id="wx-loc" class="hint muted small">도시: —</div>
    </section>
  </div>
</div>

<style>
.cards-wrap{margin-top:12px}
.cards-toolbar{
  display:flex;justify-content:space-between;align-items:center;gap:10px;
  background:#fff;border:1px solid #eee;border-radius:12px;padding:10px 12px
}
.cards-toolbar input{border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;font:inherit;min-width:220px}
.cards-toolbar button{border:1px solid #e5e7eb;border-radius:10px;background:#0ea5e9;color:#fff;padding:8px 12px;cursor:pointer}
.cards-toolbar button:hover{filter:brightness(.95)}
.muted{color:#6b7280}.small{font-size:.9rem}

.grid-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:12px;margin-top:12px}
.card{background:#fff;border:1px solid #eee;border-radius:12px;padding:16px}
.title{font-weight:700;margin-bottom:6px}
.desc{margin-bottom:10px}
.metric .value{font-size:1.8rem;font-weight:800}
.hint{margin-top:6px}

.data-table{width:100%;border-collapse:separate;border-spacing:0 6px;margin-top:6px}
.data-table th,.data-table td{padding:8px 10px}
.data-table tbody tr{background:#fff;border:1px solid #eee;border-radius:10px}
.data-table td:first-child{font-weight:700}

.gold-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
.gold-grid .label{color:#6b7280;font-size:.9rem}
.gold-grid .value{font-weight:800;font-size:1.15rem}
</style>

<script>
(async function(){
  // ===== 1) API 키(반드시 교체) =====
  const EXCHANGE_API_KEY = "YOUR_EXCHANGERATE_API_KEY"; // exchangerate-api.com
  const GOLD_API_KEY     = "YOUR_GOLDAPI_KEY";          // goldapi.io
  const WEATHER_API_KEY  = "YOUR_OPENWEATHER_API_KEY";  // openweathermap.org

  // ===== 2) 엘리먼트 =====
  const $ = (s,r=document)=>r.querySelector(s);
  const asof = $('#asof'), cityInput = $('#city'), btnRefresh = $('#btn-refresh');
  const fxBody = $('#fx-body'), fxNote = $('#fx-note');
  const goldOz = $('#gold-oz'), goldG = $('#gold-g'), goldNote = $('#gold-note');
  const wxTemp = $('#wx-temp'), wxDesc = $('#wx-desc'), wxLoc = $('#wx-loc');

  // ===== 3) 유틸 =====
  const troyOzToGram = 31.1034768;
  const fmt = (v,d=2)=> (v??0).toLocaleString('ko-KR',{maximumFractionDigits:d, minimumFractionDigits:d});
  const okKey = (k)=> k && !/^YOUR_/.test(k);

  async function fetchJSON(url, opt={}, timeoutMs=12000){
    const ctrl = new AbortController(); const id = setTimeout(()=>ctrl.abort(), timeoutMs);
    try{
      const res = await fetch(url, {...opt, signal: ctrl.signal});
      let data = null; try{ data = await res.json(); }catch(e){}
      if(!res.ok){ throw new Error((data && (data.error || data.message)) || ('HTTP '+res.status)); }
      return data;
    } finally { clearTimeout(id); }
  }

  // ===== 4) 환율: USD-base → KRW 및 타 통화 환산 =====
  async function loadFX(){
    const row = (k)=> $(`[data-k="${k}"]`, fxBody);
    try{
      if(!okKey(EXCHANGE_API_KEY)) throw new Error('ExchangeRate-API 키 누락');
      const j = await fetchJSON(`https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/USD`);
      if(j.result !== 'success') throw new Error(j['error-type'] || 'API error');
      const r = j.conversion_rates || {};
      // KRW per 1 USD
      const KRW_per_USD = r.KRW;
      // 1 통화 → KRW = (KRW/USD) / (통화/USD)  (USD는 예외)
      const toKRW = (code)=>{
        if(code === 'USD') return KRW_per_USD;
        const perUSD = r[code]; // code per 1 USD
        if(!KRW_per_USD || !perUSD) return null;
        return KRW_per_USD / perUSD;
      };
      const map = {
        USD: toKRW('USD'),
        EUR: toKRW('EUR'),
        CNY: toKRW('CNY'),
        GBP: toKRW('GBP'),
        AUD: toKRW('AUD'),
        JPY100: (function(){
          const perUSD = r.JPY; if(!KRW_per_USD || !perUSD) return null;
          return (KRW_per_USD / perUSD) * 100; // 100엔
        })()
      };
      Object.entries(map).forEach(([k,v])=>{
        const el = row(k); if(!el) return;
        el.textContent = (v!=null) ? `${fmt(v, k==='JPY100'?0:2)}` : '—';
      });
      fxNote.textContent = `기준: 1 USD = ${fmt(KRW_per_USD,2)} KRW`;
    }catch(e){
      ['USD','EUR','CNY','JPY100','GBP','AUD'].forEach(k=>{
        const el = $(`[data-k="${k}"]`, fxBody); if(el) el.textContent = '—';
      });
      fxNote.textContent = `환율 오류: ${e.message || e}`;
    }
  }

  // ===== 5) 금값: XAU/KRW (oz·g) =====
  async function loadGold(){
    try{
      if(!okKey(GOLD_API_KEY)) throw new Error('GoldAPI 키 누락');
      const j = await fetchJSON('https://www.goldapi.io/api/XAU/KRW', {
        headers: {'x-access-token': GOLD_API_KEY}
      });
      const oz = j && j.price; // KRW per oz
      if(!oz) throw new Error(j?.message || '가격 없음');
      goldOz.textContent = `${fmt(oz,0)} 원`;
      goldG.textContent  = `${fmt(oz / troyOzToGram, 0)} 원`;
      goldNote.textContent = `출처: GoldAPI.io · ${j.timestamp ? new Date(j.timestamp*1000).toLocaleString() : '실시간'}`;
    }catch(e){
      goldOz.textContent = '—'; goldG.textContent = '—';
      goldNote.textContent = `금 시세 오류: ${e.message || e}`;
    }
  }

  // ===== 6) 날씨: 현재(℃) =====
  async function loadWeather(){
    const city = (cityInput.value || 'Seoul').trim();
    try{
      if(!okKey(WEATHER_API_KEY)) throw new Error('OpenWeather 키 누락');
      const j = await fetchJSON(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${WEATHER_API_KEY}&units=metric&lang=kr`
      );
      const t = j?.main?.temp, desc = j?.weather?.[0]?.description || '', name = j?.name || city;
      if(typeof t !== 'number') throw new Error('온도 없음');
      wxTemp.textContent = `${Math.round(t)}°C`;
      wxDesc.textContent = desc;
      wxLoc.textContent  = `도시: ${name}`;
    }catch(e){
      wxTemp.textContent = '—';
      wxDesc.textContent = `날씨 오류: ${e.message || e}`;
      wxLoc.textContent  = `도시: ${city}`;
    }
  }

  // ===== 7) 전체 새로고침 =====
  async function refresh(){
    asof.textContent = '— 업데이트 중…';
    await Promise.allSettled([loadFX(), loadGold(), loadWeather()]);
    asof.textContent = '— ' + new Date().toLocaleString();
    localStorage.setItem('daily-city', cityInput.value.trim());
  }

  // 초기값/이벤트
  cityInput.value = localStorage.getItem('daily-city') || 'Seoul';
  btnRefresh.addEventListener('click', refresh);

  // 키 미설정 안내(이전 코드가 안 돌던 가장 흔한 이유)
  const missing = [
    !okKey(EXCHANGE_API_KEY) ? '환율 API 키' : null,
    !okKey(GOLD_API_KEY)     ? '금 시세 API 키' : null,
    !okKey(WEATHER_API_KEY)  ? '날씨 API 키' : null
  ].filter(Boolean);
  if(missing.length){
    asof.textContent = `— API 키 필요: ${missing.join(', ')}`;
  }

  // 시작
  refresh();
})();
</script>
