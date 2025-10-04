<!-- 오늘의 데이터: 금값(MetalpriceAPI) + 환율(ExchangeRate-API) + 날씨(Open-Meteo, 무키) 완성본 -->
<div id="daily-cards" class="cards-wrap">
  <div class="cards-toolbar">
    <div class="left">
      <strong>오늘의 데이터</strong>
      <span id="asof" class="muted">— 준비중</span>
    </div>
    <div class="right">
      <input id="city" type="text" placeholder="도시 입력 (예: Seoul, KR)" />
      <button id="btn-refresh">새로고침</button>
    </div>
  </div>

  <div class="grid-cards">
    <!-- 환율 -->
    <section class="card">
      <div class="title">💱 환율 (KRW 기준)</div>
      <div class="desc muted small">ExchangeRate-API 사용 (무료 키)</div>
      <table class="data-table">
        <thead><tr><th>통화</th><th>1 단위 → KRW</th></tr></thead>
        <tbody id="fx-body">
          <tr><td>USD</td><td data-k="USD">—</td></tr>
          <tr><td>EUR</td><td data-k="EUR">—</td></tr>
          <tr><td>CNY</td><td data-k="CNY">—</td></tr>
          <tr><td>JPY (100)</td><td data-k="JPY100">—</td></tr>
          <tr><td>GBP</td><td data-k="GBP">—</td></tr>
          <tr><td>AUD</td><td data-k="AUD">—</td></tr>
          <tr><td>CAD</td><td data-k="CAD">—</td></tr>
          <tr><td>SGD</td><td data-k="SGD">—</td></tr>
          <tr><td>HKD</td><td data-k="HKD">—</td></tr>
        </tbody>
      </table>
      <div id="fx-note" class="muted small" style="margin-top:6px"></div>
    </section>

    <!-- 금값 -->
    <section class="card">
      <div class="title">🥇 금 시세 (XAU)</div>
      <div class="desc muted small">MetalpriceAPI 사용 · KRW 기준</div>
      <div class="gold-grid">
        <div><div class="label">1 oz</div><div id="gold-oz" class="value">—</div></div>
        <div><div class="label">1 g (환산)</div><div id="gold-g" class="value">—</div></div>
      </div>
      <div id="gold-note" class="muted small" style="margin-top:6px"></div>
    </section>

    <!-- 날씨 -->
    <section class="card">
      <div class="title">☁️ 오늘·내일 날씨</div>
      <div class="desc muted small">Open-Meteo (무키·무료)</div>
      <div id="wx-loc" class="hint muted small">—</div>
      <div class="wx-grid">
        <div>
          <div class="label">오늘</div>
          <div class="value" id="wx-today">—</div>
          <div class="muted small" id="wx-today-desc">—</div>
        </div>
        <div>
          <div class="label">내일</div>
          <div class="value" id="wx-tomorrow">—</div>
          <div class="muted small" id="wx-tomorrow-desc">—</div>
        </div>
      </div>
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
.data-table{width:100%;border-collapse:separate;border-spacing:0 6px;margin-top:6px}
.data-table th,.data-table td{padding:8px 10px}
.data-table tbody tr{background:#fff;border:1px solid #eee;border-radius:10px}
.data-table td:first-child{font-weight:700}

.gold-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
.gold-grid .label{color:#6b7280;font-size:.9rem}
.gold-grid .value{font-weight:800;font-size:1.15rem}

.wx-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
</style>

<script>
(async function(){
  // ===== 주신 API 키(그대로 사용) =====
  const METALPRICE_API_KEY = "3ec5a87d304dbe442a48044c745df0b1"; // MetalpriceAPI
  const EXCHANGE_API_KEY   = "649a8e39f7b03b2c3461db77";        // ExchangeRate-API

  // ===== 엘리먼트 =====
  const $ = (s,r=document)=>r.querySelector(s);
  const asof = $('#asof'), cityInput = $('#city'), btnRefresh = $('#btn-refresh');
  const fxBody = $('#fx-body'), fxNote = $('#fx-note');
  const goldOz = $('#gold-oz'), goldG = $('#gold-g'), goldNote = $('#gold-note');
  const wxLoc = $('#wx-loc'), wxToday = $('#wx-today'), wxTmr = $('#wx-tomorrow');
  const wxTodayDesc = $('#wx-today-desc'), wxTmrDesc = $('#wx-tomorrow-desc');

  // ===== 유틸 =====
  const fmt = (v,d=2)=> (v??0).toLocaleString('ko-KR',{maximumFractionDigits:d,minimumFractionDigits:d});
  const troyOzToGram = 31.1034768;
  async function fetchJSON(url, opt={}, timeoutMs=12000){
    const ctrl = new AbortController(); const id = setTimeout(()=>ctrl.abort(), timeoutMs);
    try{
      const res = await fetch(url, {...opt, signal: ctrl.signal});
      const j = await res.json().catch(()=>null);
      if(!res.ok) throw new Error((j && (j.error || j.message)) || ('HTTP '+res.status));
      return j;
    } finally { clearTimeout(id); }
  }

  // ===== 환율: USD base → 여러 통화 → KRW 환산 =====
  async function loadFX(){
    try{
      const j = await fetchJSON(`https://v6.exchangerate-api.com/v6/${EXCHANGE_API_KEY}/latest/USD`);
      if(j.result !== 'success') throw new Error(j['error-type'] || 'API error');
      const r = j.conversion_rates || {};
      const KRW_per_USD = r.KRW;
      const toKRW = (code)=>{
        if(code==='USD') return KRW_per_USD;
        const perUSD = r[code]; if(!KRW_per_USD || !perUSD) return null;
        return KRW_per_USD / perUSD;
      };
      const map = {
        USD: toKRW('USD'),
        EUR: toKRW('EUR'),
        CNY: toKRW('CNY'),
        GBP: toKRW('GBP'),
        AUD: toKRW('AUD'),
        CAD: toKRW('CAD'),
        SGD: toKRW('SGD'),
        HKD: toKRW('HKD'),
        JPY100: (function(){ const perUSD = r.JPY; return (KRW_per_USD && perUSD) ? (KRW_per_USD/perUSD)*100 : null; })()
      };
      Object.entries(map).forEach(([k,v])=>{
        const el = document.querySelector(`[data-k="${k}"]`); if(!el) return;
        el.textContent = (v!=null) ? fmt(v, k==='JPY100'?0:2) : '—';
      });
      fxNote.textContent = `기준: 1 USD = ${fmt(KRW_per_USD,2)} KRW · ${new Date().toLocaleString()}`;
    }catch(e){
      fxNote.textContent = `환율 오류: ${e.message || e}`;
      ['USD','EUR','CNY','JPY100','GBP','AUD','CAD','SGD','HKD'].forEach(k=>{
        const el = document.querySelector(`[data-k="${k}"]`); if(el) el.textContent = '—';
      });
    }
  }

  // ===== 금값: KRW base → XAU =====
  async function loadGold(){
    try{
      const url = `https://api.metalpriceapi.com/v1/latest?api_key=${METALPRICE_API_KEY}&base=KRW&currencies=XAU`;
      const j = await fetchJSON(url);
      const ozKrw = j?.rates?.XAU; // KRW per 1 oz
      if(!ozKrw) throw new Error(j?.error || 'XAU 가격 없음');
      goldOz.textContent = `${fmt(ozKrw,0)} 원`;
      goldG.textContent  = `${fmt(ozKrw / troyOzToGram, 0)} 원`;
      goldNote.textContent = `소스: MetalpriceAPI · ${j?.meta?.timestamp ? new Date(j.meta.timestamp*1000).toLocaleString() : '실시간'}`;
    }catch(e){
      goldOz.textContent = '—'; goldG.textContent = '—';
      goldNote.textContent = `금 시세 오류: ${e.message || e}`;
    }
  }

  // ===== 날씨: Open-Meteo (무키) =====
  async function geoCode(q){
    const j = await fetchJSON(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=ko&format=json`);
    const g = j?.results?.[0]; if(!g) throw new Error('위치 검색 실패');
    return { name: `${g.name}${g.country_code? ', '+g.country_code:''}`, lat: g.latitude, lon: g.longitude };
  }
  function wxLabel(c){
    const m = {0:'맑음',1:'대체로 맑음',2:'부분 흐림',3:'흐림',45:'안개',48:'착빙 안개',51:'이슬비 약함',53:'이슬비 보통',55:'이슬비 강함',61:'비 약함',63:'비 보통',65:'비 강함',71:'눈 약함',73:'눈 보통',75:'눈 강함',80:'소나기 약함',81:'소나기 보통',82:'소나기 강함'};
    return m[c] || '날씨';
  }
  async function loadWeather(){
    const q = (cityInput.value || 'Seoul, KR').trim();
    try{
      const place = await geoCode(q);
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=2`;
      const j = await fetchJSON(url);
      const d = j?.daily; if(!d) throw new Error('예보 없음');
      const t0 = `${Math.round(d.temperature_2m_min[0])}~${Math.round(d.temperature_2m_max[0])}°C`;
      const t1 = `${Math.round(d.temperature_2m_min[1])}~${Math.round(d.temperature_2m_max[1])}°C`;
      wxLoc.textContent = `${place.name} (${place.lat.toFixed(2)}, ${place.lon.toFixed(2)})`;
      wxToday.textContent = t0; wxTmr.textContent = t1;
      wxTodayDesc.textContent = wxLabel(d.weathercode[0]);
      wxTmrDesc.textContent   = wxLabel(d.weathercode[1]);
    }catch(e){
      wxLoc.textContent = q;
      wxToday.textContent = '—'; wxTmr.textContent = '—';
      wxTodayDesc.textContent = `날씨 오류: ${e.message || e}`;
      wxTmrDesc.textContent   = '—';
    }
  }

  // ===== 전체 새로고침 =====
  async function refresh(){
    asof.textContent = '— 업데이트 중…';
    await Promise.allSettled([loadFX(), loadGold(), loadWeather()]);
    asof.textContent = '— ' + new Date().toLocaleString();
    localStorage.setItem('daily-city', cityInput.value.trim());
  }

  // 초기화
  cityInput.value = localStorage.getItem('daily-city') || 'Seoul, KR';
  btnRefresh.addEventListener('click', refresh);
  refresh();
})();
</script>
