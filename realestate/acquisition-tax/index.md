---
layout: default
title: "취득세 계산기 2026 — 주택·토지·건물 취득세 자동 계산"
description: "2026년 기준 취득세 계산기. 주택 수, 조정대상지역, 생애최초 여부에 따라 세율이 자동 적용됩니다. 농어촌특별세·지방교육세 포함 총 납부세액 계산."
permalink: /realestate/acquisition-tax/
canonical: https://calculator.khaistory.com/realestate/acquisition-tax/
og_title: "취득세 계산기 2026 — 주택수·조정지역 자동 반영"
og_description: "생애최초·1주택·2주택·3주택 이상 취득세율 자동 적용. 농특세·지방교육세 포함 총 납부세액."
---

<section class="at-wrap">

  <div class="at-notice">
    2026년 기준 참고용 계산기입니다. 실제 취득세는 지자체 조례, 감면 조건에 따라 달라질 수 있습니다.
    정확한 세액은 위택스(wetax.go.kr)에서 확인하세요.
  </div>

  <nav class="at-tabs">
    <button class="at-tab active" onclick="atTab('house')">주택</button>
    <button class="at-tab" onclick="atTab('land')">토지·건물·기타</button>
  </nav>

  <!-- 주택 탭 -->
  <div id="at-house" class="at-panel">
    <div class="at-form">
      <div class="at-field">
        <label>취득가액 (원)</label>
        <input type="text" id="h-price" inputmode="numeric" placeholder="예: 500,000,000" oninput="fmtAt(this)">
      </div>
      <div class="at-row2">
        <div class="at-field">
          <label>취득 후 보유 주택 수</label>
          <select id="h-count">
            <option value="first-home">생애최초 주택 구입</option>
            <option value="1">1주택 (일반)</option>
            <option value="2">2주택</option>
            <option value="3">3주택 이상</option>
            <option value="corp">법인</option>
          </select>
        </div>
        <div class="at-field">
          <label>조정대상지역 여부</label>
          <select id="h-adj">
            <option value="no">비조정지역</option>
            <option value="yes">조정대상지역</option>
          </select>
        </div>
      </div>
      <div class="at-field">
        <label>주택 공시가격 (원) <span class="at-opt">선택 — 생애최초 감면 한도 확인용</span></label>
        <input type="text" id="h-pubprice" inputmode="numeric" placeholder="예: 300,000,000" oninput="fmtAt(this)">
        <div class="at-hint">생애최초는 취득가 12억원 이하, 200만원 한도 감면 적용</div>
      </div>
      <button class="at-btn" onclick="calcHouse()">취득세 계산하기</button>
    </div>

    <div id="h-result" style="display:none" class="at-result">
      <div class="at-hero">
        <div class="at-hero-label">총 납부세액 (취득세 + 부가세)</div>
        <div class="at-hero-num" id="h-total">—</div>
        <div class="at-hero-sub" id="h-rate-label">적용 세율: —</div>
      </div>
      <div class="at-grid">
        <div class="at-card"><div class="at-card-label">취득세</div><div class="at-card-val" id="h-acq">—</div></div>
        <div class="at-card"><div class="at-card-label">농어촌특별세</div><div class="at-card-val" id="h-rural">—</div></div>
        <div class="at-card"><div class="at-card-label">지방교육세</div><div class="at-card-val" id="h-edu">—</div></div>
        <div class="at-card at-card-highlight"><div class="at-card-label">감면액</div><div class="at-card-val" id="h-discount">—</div></div>
      </div>
      <div class="at-rate-table-wrap">
        <div class="at-rate-title">2026년 주택 취득세율 참고표</div>
        <table class="at-table">
          <thead><tr><th>구분</th><th>비조정</th><th>조정지역</th></tr></thead>
          <tbody>
            <tr><td>생애최초 (12억 이하)</td><td>200만원 한도 감면</td><td>200만원 한도 감면</td></tr>
            <tr><td>1주택 (6억 이하)</td><td>1%</td><td>1%</td></tr>
            <tr><td>1주택 (6~9억)</td><td>1~3% 구간세율</td><td>1~3% 구간세율</td></tr>
            <tr><td>1주택 (9억 초과)</td><td>3%</td><td>3%</td></tr>
            <tr><td>2주택</td><td>1~3%</td><td>8%</td></tr>
            <tr><td>3주택 이상</td><td>8%</td><td>12%</td></tr>
            <tr><td>법인</td><td>12%</td><td>12%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="at-tip">
        <strong>농어촌특별세·지방교육세 계산 기준</strong><br>
        취득세율 1%: 농특세 면제, 지방교육세 0.1% / 취득세율 2%: 농특세 0.2%, 지교세 0.2% /
        취득세율 3% 이상: 농특세 0.2%, 지교세 0.3% / 중과(8%·12%): 농특세 1%, 지교세 해당 세율 × 10%
      </div>
    </div>
  </div>

  <!-- 토지·건물·기타 탭 -->
  <div id="at-land" class="at-panel" style="display:none">
    <div class="at-form">
      <div class="at-field">
        <label>자산 종류</label>
        <select id="l-type" onchange="updateLandHint()">
          <option value="agri">농지 (자경)</option>
          <option value="agri-other">농지 (비자경)</option>
          <option value="land">일반 토지</option>
          <option value="building">건축물 (상업·업무)</option>
          <option value="car">자동차</option>
          <option value="other">기타</option>
        </select>
        <div class="at-hint" id="l-type-hint">자경 농지: 3% / 농특세 0.2%</div>
      </div>
      <div class="at-field">
        <label>취득가액 (원)</label>
        <input type="text" id="l-price" inputmode="numeric" placeholder="예: 200,000,000" oninput="fmtAt(this)">
      </div>
      <button class="at-btn" onclick="calcLand()">취득세 계산하기</button>
    </div>

    <div id="l-result" style="display:none" class="at-result">
      <div class="at-hero">
        <div class="at-hero-label">총 납부세액</div>
        <div class="at-hero-num" id="l-total">—</div>
        <div class="at-hero-sub" id="l-rate-label">—</div>
      </div>
      <div class="at-grid">
        <div class="at-card"><div class="at-card-label">취득세</div><div class="at-card-val" id="l-acq">—</div></div>
        <div class="at-card"><div class="at-card-label">농어촌특별세</div><div class="at-card-val" id="l-rural">—</div></div>
        <div class="at-card"><div class="at-card-label">지방교육세</div><div class="at-card-val" id="l-edu">—</div></div>
      </div>
    </div>
  </div>

  <nav class="at-related">
    <a href="/realestate/">← 부동산 허브</a>
    <a href="/realestate/capital-gains/">양도소득세 계산기</a>
    <a href="/realestate/rent-to-jeonse/">전세↔월세 전환 계산기</a>
    <a href="/finance/dsr/">DSR 계산기</a>
  </nav>
</section>

<style>
.at-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.at-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.at-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px}
.at-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s}
.at-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.at-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.at-field{display:flex;flex-direction:column;gap:5px}
.at-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.at-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.at-hint{font-size:.76rem;color:#9ca3af}
.at-field input,.at-field select{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.at-field input:focus,.at-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.at-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.at-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%;transition:background .15s}
.at-btn:hover{background:#ea580c}
.at-result{animation:atFade .3s ease}
@keyframes atFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.at-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;text-align:center;margin-bottom:14px}
.at-hero-label{font-size:.85rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.at-hero-num{font-size:2.2rem;font-weight:800;color:#c2410c;letter-spacing:-.02em}
.at-hero-sub{font-size:.88rem;color:#8c7355;margin-top:4px}
.at-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.at-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.at-card-highlight{background:#f0faf4;border-color:#bbf7d0}
.at-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.at-card-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.at-card-highlight .at-card-val{color:#15803d}
.at-rate-table-wrap{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.at-rate-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.at-table{width:100%;border-collapse:collapse;font-size:.82rem}
.at-table th{background:#f6efe5;padding:8px 10px;font-weight:700;color:#4a3728;border:1px solid #eae1d4;text-align:center}
.at-table td{padding:7px 10px;border:1px solid #eae1d4;text-align:center;color:#374151}
.at-table td:first-child{text-align:left}
.at-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.8rem;color:#6b7280;line-height:1.6}
.at-tip strong{color:#3f2d20}
.at-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:28px}
.at-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.at-related a:hover{background:#f3e7d9}
@media(max-width:600px){.at-row2{grid-template-columns:1fr}.at-grid{grid-template-columns:1fr 1fr}.at-hero-num{font-size:1.7rem}}
</style>

<script>
function fmtAt(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gA(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function atTab(t){['house','land'].forEach(x=>{document.getElementById('at-'+x).style.display=x===t?'':'none';});document.querySelectorAll('.at-tab').forEach((b,i)=>b.classList.toggle('active',['house','land'][i]===t));}

/* 주택 취득세율 계산 */
function getHouseRate(price, count, isAdj) {
  if(count==='corp') return {rate:0.12, label:'법인 12%'};
  if(count==='3')    return {rate: isAdj?0.12:0.08, label: isAdj?'조정 3주택 12%':'비조정 3주택 8%'};
  if(count==='2')    return {rate: isAdj?0.08:null, label: isAdj?'조정 2주택 8%':'비조정 2주택 일반세율', general: !isAdj};
  // 1주택·생애최초: 구간세율
  if(price<=600000000)       return {rate:0.01, label:'1% (6억 이하)'};
  if(price<=900000000) {
    // 6~9억: (취득가×2/3억 - 3) / 100
    const r = ((price/100000000)*2/3 - 3) / 100;
    return {rate: Math.min(Math.max(r,0.01),0.03), label:`구간세율 ${(Math.min(Math.max(r,0.01),0.03)*100).toFixed(2)}%`};
  }
  return {rate:0.03, label:'3% (9억 초과)'};
}

/* 부가세 계산 */
function calcSurtax(acqTax, rate) {
  let rural=0, edu=0;
  if(rate<=0.01)      {rural=0;            edu=Math.round(acqTax*0.10);}
  else if(rate<=0.02) {rural=Math.round(acqTax*0.20); edu=Math.round(acqTax*0.20);}
  else if(rate<=0.03) {rural=Math.round(acqTax*0.20); edu=Math.round(acqTax*0.10);}
  else                {rural=Math.round(acqTax*1.0);  edu=Math.round(acqTax*0.10);}
  return {rural, edu};
}

function calcHouse(){
  const price=gA('h-price');
  if(!price) return;
  const count=document.getElementById('h-count').value;
  const isAdj=document.getElementById('h-adj').value==='yes';

  let rateInfo = getHouseRate(price, count, isAdj);
  let rate = rateInfo.rate;
  if(rateInfo.general) rateInfo = getHouseRate(price, '1', false); // 비조정 2주택 = 일반세율

  const acq = Math.round(price * rate);
  const {rural, edu} = calcSurtax(acq, rate);

  // 생애최초 감면
  let discount = 0;
  if(count==='first-home' && price<=1200000000) {
    discount = Math.min(acq + rural + edu, 2000000);
  }

  const total = acq + rural + edu - discount;

  document.getElementById('h-result').style.display='';
  document.getElementById('h-total').textContent = fw(Math.max(0,total));
  document.getElementById('h-rate-label').textContent = '적용 세율: ' + rateInfo.label;
  document.getElementById('h-acq').textContent   = fw(acq);
  document.getElementById('h-rural').textContent = fw(rural);
  document.getElementById('h-edu').textContent   = fw(edu);
  document.getElementById('h-discount').textContent = discount>0 ? '-'+fw(discount) : '해당 없음';
}

/* 토지·건물·기타 */
const LAND_RATES = {
  'agri':       {rate:0.03, rural:0.002, edu:0,     label:'자경 농지 3%'},
  'agri-other': {rate:0.04, rural:0.002, edu:0.004, label:'비자경 농지 4%'},
  'land':       {rate:0.04, rural:0.002, edu:0.004, label:'일반 토지 4%'},
  'building':   {rate:0.04, rural:0.002, edu:0.004, label:'건축물 4%'},
  'car':        {rate:0.07, rural:0,     edu:0.007, label:'자동차 7%'},
  'other':      {rate:0.04, rural:0.002, edu:0.004, label:'기타 4%'},
};
const LAND_HINTS = {
  'agri':'자경 농지: 취득세 3%, 농특세 0.2%','agri-other':'비자경 농지: 취득세 4%',
  'land':'일반 토지: 취득세 4%, 농특세 0.2%, 지교세 0.4%',
  'building':'건축물: 취득세 4%, 농특세 0.2%, 지교세 0.4%',
  'car':'자동차: 취득세 7%, 지교세 0.7%','other':'기타 자산: 취득세 4%'
};
function updateLandHint(){document.getElementById('l-type-hint').textContent=LAND_HINTS[document.getElementById('l-type').value]||'';}
function calcLand(){
  const price=gA('l-price');
  if(!price) return;
  const type=document.getElementById('l-type').value;
  const r=LAND_RATES[type];
  const acq=Math.round(price*r.rate);
  const rural=Math.round(price*r.rural);
  const edu=Math.round(price*r.edu);
  const total=acq+rural+edu;
  document.getElementById('l-result').style.display='';
  document.getElementById('l-total').textContent=fw(total);
  document.getElementById('l-rate-label').textContent=r.label;
  document.getElementById('l-acq').textContent=fw(acq);
  document.getElementById('l-rural').textContent=fw(rural);
  document.getElementById('l-edu').textContent=fw(edu);
}
</script>
