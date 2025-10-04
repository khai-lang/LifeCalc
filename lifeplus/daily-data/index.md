---
layout: default
title: 오늘의 데이터
description: 환율·금시세·날씨를 한 페이지에서 요약 확인하세요.
permalink: /lifeplus/daily-data/
section: lifeplus
nav_label: 오늘의 데이터
nav_order: 30
---


<p>매일 업데이트되는 주요 지표를 간단하게 확인할 수 있습니다.</p>

<ul>
  <li>💱 환율 (USD, JPY, CNY 등)</li>
  <li>🥇 금시세 (국제 금값/국내 시세)</li>
  <li>☁️ 날씨 요약 (오늘/내일)</li>
</ul>

<!-- 오늘의 데이터: 환율 · 금시세 · 날씨 (붙여넣기만 하면 동작) -->
<div id="daily-app" class="daily-wrap">
  <div class="toolbar">
    <div class="left">
      <strong>오늘의 데이터</strong>
      <span id="asof" class="muted">— 업데이트 준비중</span>
    </div>
    <div class="right">
      <label class="city">
        위치
        <input id="city" type="text" placeholder="예: Seoul, KR">
        <button id="btn-locate" title="현재 위치 감지">현재위치</button>
      </label>
      <label class="unit-toggle">
        단위
        <select id="unit">
          <option value="metric">°C, m/s</option>
          <option value="imperial">°F, mph</option>
        </select>
      </label>
      <button id="btn-refresh">새로고침</button>
    </div>
  </div>

  <div class="grid-cards data-cards">
    <!-- 환율 -->
    <section class="card" id="fx-card">
      <div class="title">💱 환율 (KRW 기준)</div>
      <div class="desc muted small">exchangerate.host 기준</div>
      <table class="data-table">
        <thead><tr><th>통화</th><th>1 단위 → KRW</th><th>변환</th></tr></thead>
        <tbody id="fx-body">
          <tr><td>USD</td><td data-k="USD">—</td><td><a class="mini" href="{{ '/life/unit-converter/' | relative_url }}">단위변환</a></td></tr>
          <tr><td>JPY(100)</td><td data-k="JPY">—</td><td><a class="mini" href="{{ '/life/unit-converter/' | relative_url }}">단위변환</a></td></tr>
          <tr><td>EUR</td><td data-k="EUR">—</td><td><a class="mini" href="{{ '/life/unit-converter/' | relative_url }}">단위변환</a></td></tr>
          <tr><td>CNY</td><td data-k="CNY">—</td><td><a class="mini" href="{{ '/life/unit-converter/' | relative_url }}">단위변환</a></td></tr>
        </tbody>
      </table>
    </section>

    <!-- 금시세 -->
    <section class="card" id="gold-card">
      <div class="title">🥇 금시세 (XAU)</div>
      <div class="desc muted small">USD/oz 기준 → KRW/g 환산</div>
      <div class="gold-row">
        <div>
          <div class="label">USD/oz</div>
          <div id="gold-usd" class="value">—</div>
        </div>
        <div>
          <div class="label">KRW/g (환산)</div>
          <div id="gold-krw" class="value">—</div>
        </div>
      </div>
      <details class="muted small" style="margin-top:8px">
        <summary>값이 비어있나요?</summary>
        <p>공개 API 장애 시 수동 입력하세요.</p>
        <div class="manual">
          <label>USD/oz <input id="gold-manual" type="number" step="0.01" placeholder="예: 2350"></label>
          <button id="gold-apply">환산</button>
        </div>
      </details>
    </section>

    <!-- 날씨 -->
    <section class="card" id="wx-card">
      <div class="title">☁️ 날씨 요약</div>
      <div class="desc muted small">open-meteo 기준 (오늘/내일)</div>
      <div id="wx-place" class="place muted">—</div>
      <div class="wx-grid">
        <div>
          <div class="label">오늘</div>
          <div class="value" id="wx-today">—</div>
          <div class="muted small" id="wx-today-desc"></div>
        </div>
        <div>
          <div class="label">내일</div>
          <div class="value" id="wx-tomorrow">—</div>
          <div class="muted small" id="wx-tomorrow-desc"></div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
.daily-wrap{margin-top:12px}
.daily-wrap .toolbar{
  display:flex; justify-content:space-between; align-items:center; gap:12px;
  background:#fff;border:1px solid #eee;border-radius:12px;padding:10px 12px
}
.daily-wrap .toolbar .right{display:flex;gap:8px;align-items:end;flex-wrap:wrap}
.daily-wrap .toolbar label{display:flex;flex-direction:column;gap:6px;font-weight:600;font-size:.95rem}
.daily-wrap input, .daily-wrap select{border:1px solid #e5e7eb;border-radius:10px;padding:8px 10px;background:#fff;font:inherit}
.daily-wrap button{border:1px solid #e5e7eb;background:#0ea5e9;color:#fff;border-radius:10px;padding:8px 12px;cursor:pointer}
.daily-wrap button:hover{filter:brightness(.95)}
.muted{color:#6b7280}.small{font-size:.9rem}
.data-cards .data-table{width:100%;border-collapse:separate;border-spacing:0 6px;margin-top:8px}
.data-cards .data-table td,.data-cards .data-table th{padding:8px 10px}
.data-cards .data-table tbody td:first-child{font-weight:700}
.data-cards .data-table tbody tr{background:#fff;border:1px solid #eee;border-radius:10px}
.data-cards .mini{font-size:.85rem}
.gold-row{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
.gold-row .label{color:#6b7280;font-size:.9rem}
.gold-row .value{font-weight:800;font-size:1.15rem}
.wx-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:8px}
.place{margin-top:4px}
.city input{min-width:180px}
.unit-toggle select{min-width:120px}
</style>

<script>
(async function(){
  const $ = (s, r=document)=>r.querySelector(s);
  const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));
  const asof = $('#asof');
  const unitSel = $('#unit');
  const cityInput = $('#city');
  const btnLocate = $('#btn-locate');
  const btnRefresh = $('#btn-refresh');

  // 초기 설정
  unitSel.value = localStorage.getItem('daily:unit') || 'metric';
  cityInput.value = localStorage.getItem('daily:city') || 'Seoul, KR';

  unitSel.addEventListener('change', ()=>{ localStorage.setItem('daily:unit', unitSel.value); refresh(); });
  btnRefresh.addEventListener('click', refresh);
  btnLocate.addEventListener('click', geolocate);

  // 1) 환율 (KRW 기준)
  async function loadFX(){
    const symbols = ['USD','JPY','EUR','CNY'];
    // KRW 기준으로 1단위 외화 → KRW
    const url = 'https://api.exchangerate.host/latest?base=KRW&symbols=' + symbols.join(',');
    const r = await fetch(url); const j = await r.json();
    // base=KRW → 1 KRW = x USD … 이므로 역수 취해 “1 통화 → KRW”
    const rates = j.rates || {};
    const rec = {
      USD: rates.USD ? (1 / rates.USD) : null,
      EUR: rates.EUR ? (1 / rates.EUR) : null,
      CNY: rates.CNY ? (1 / rates.CNY) : null,
      // JPY는 100엔 단위로 표기: 100 × (1 / JPY)
      JPY: rates.JPY ? (100 / rates.JPY) : null
    };
    for(const k of Object.keys(rec)){
      const el = document.querySelector(`[data-k="${k}"]`);
      el.textContent = rec[k] ? num(rec[k], k==='JPY'?0:2) : '—';
    }
  }

  // 2) 금시세 (metals.live → 실패시 수동)
  async function loadGold(){
    const outUSD = $('#gold-usd');
    const outKRW = $('#gold-krw');
    try{
      // metals.live spot: [ [symbol,price], ... ] 형태
      const r = await fetch('https://api.metals.live/v1/spot');
      const j = await r.json();
      // XAU 항목 찾기
      let xau = null;
      if(Array.isArray(j)){
        for(const row of j){
          if(Array.isArray(row) && (row[0]==='gold' || row[0]==='XAU')){
            xau = Number(row[1]);
            break;
          }
        }
      }else if(j && j.XAU){ xau = Number(j.XAU); }
      if(!xau) throw new Error('XAU not found');

      outUSD.textContent = '$ ' + num(xau, 2);
      // USD→KRW
      const rfx = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=KRW');
      const jfx = await rfx.json();
      const usdkrw = jfx?.rates?.KRW || 0;
      // 1 troy oz = 31.1034768 g
      const krwPerGram = xau * usdkrw / 31.1034768;
      outKRW.textContent = num(krwPerGram, 0) + ' 원/g';
    }catch(e){
      outUSD.textContent = '—';
      outKRW.textContent = '—';
    }
    // 수동 환산 핸들러
    $('#gold-apply').onclick = async ()=>{
      const v = Number($('#gold-manual').value);
      if(!v) return;
      const rfx = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=KRW');
      const jfx = await rfx.json();
      const usdkrw = jfx?.rates?.KRW || 0;
      $('#gold-usd').textContent = '$ ' + num(v,2);
      $('#gold-krw').textContent = num(v * usdkrw / 31.1034768, 0) + ' 원/g';
    };
  }

  // 3) 날씨 (open-meteo)
  async function loadWeather(place){
    // place: {name, lat, lon}
    const unit = unitSel.value; // metric/imperial
    const isMetric = unit==='metric';
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${place.lat}&longitude=${place.lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&temperature_unit=${isMetric?'celsius':'fahrenheit'}&forecast_days=2`;
    const r = await fetch(url);
    const j = await r.json();
    const d = j.daily;
    $('#wx-place').textContent = `${place.name} (${place.lat.toFixed(2)}, ${place.lon.toFixed(2)})`;
    const t0 = range(d.temperature_2m_min[0], d.temperature_2m_max[0], isMetric);
    const t1 = range(d.temperature_2m_min[1], d.temperature_2m_max[1], isMetric);
    $('#wx-today').textContent = t0;
    $('#wx-tomorrow').textContent = t1;
    $('#wx-today-desc').textContent = codeToText(d.weathercode[0]);
    $('#wx-tomorrow-desc').textContent = codeToText(d.weathercode[1]);
  }

  // 위치 문자열 → 좌표 (open-meteo geocoding)
  async function geoCode(q){
    const r = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=1&language=ko&format=json`);
    const j = await r.json();
    const g = j.results && j.results[0];
    if(!g) throw new Error('위치 검색 실패');
    return { name: `${g.name}${g.country_code? ', '+g.country_code:''}`, lat: g.latitude, lon: g.longitude };
  }

  async function geolocate(){
    try{
      asof.textContent = '— 현재 위치 확인중…';
      const pos = await new Promise((res, rej)=>navigator.geolocation.getCurrentPosition(res, rej, {enableHighAccuracy:false, timeout:8000}));
      const {latitude:lat, longitude:lon} = pos.coords;
      const place = { name:'현재 위치', lat, lon };
      await loadWeather(place);
      asof.textContent = '— ' + new Date().toLocaleString();
    }catch(e){
      alert('현재 위치를 가져올 수 없습니다. 브라우저 권한을 확인하세요.');
    }
  }

  // 공통
  function num(v, d=2){ return (v||0).toLocaleString(undefined,{maximumFractionDigits:d, minimumFractionDigits:d}); }
  function range(lo, hi, metric){ const u = metric?'°C':'°F'; return `${Math.round(lo)}~${Math.round(hi)}${u}`; }
  function codeToText(c){
    // 간단 매핑
    const m = {
      0:'맑음', 1:'대체로 맑음', 2:'부분적으로 흐림', 3:'흐림',
      45:'안개', 48:'착빙 안개',
      51:'이슬비 약함', 53:'이슬비 보통', 55:'이슬비 강함',
      61:'비 약함', 63:'비 보통', 65:'비 강함',
      71:'눈 약함', 73:'눈 보통', 75:'눈 강함',
      80:'소나기 약함', 81:'소나기 보통', 82:'소나기 강함'
    };
    return m[c] || '날씨';
  }

  async function refresh(){
    asof.textContent = '— 업데이트 중…';
    await Promise.all([loadFX(), loadGold()]);
    try{
      const place = await geoCode(cityInput.value.trim() || 'Seoul, KR');
      await loadWeather(place);
    }catch(e){
      // 지오코딩 실패 시 서울 좌표 폴백
      await loadWeather({name:'Seoul, KR', lat:37.5665, lon:126.9780});
    }
    asof.textContent = '— ' + new Date().toLocaleString();
    localStorage.setItem('daily:city', cityInput.value.trim());
  }

  // 초기 로드
  refresh();
})();
</script>
