---
layout: default
title: "퇴직금 계산기 2026 — 퇴직소득세 공제 후 실수령까지"
description: "2026년 기준 퇴직금과 퇴직소득세를 계산해 세후 실수령액까지 한 번에 확인하세요."
permalink: /salary/retirement/
canonical: https://calculator.khaistory.com/salary/retirement/
---
<section class="ret-wrap">
<div class="ret-notice">퇴직금은 <strong>평균임금 × 30일 × (재직일수 ÷ 365)</strong>로 계산합니다. 퇴직소득세는 2026년 세법 기준 근사치입니다.</div>
<nav class="ret-tabs"><button class="ret-tab active" onclick="retTab('calc')">퇴직금 계산</button><button class="ret-tab" onclick="retTab('info')">DB형 vs DC형</button></nav>
<div id="ret-calc" class="ret-panel">
  <div class="ret-form">
    <div class="ret-row2">
      <div class="ret-field"><label>입사일</label><input type="date" id="ret-join" onchange="autoCalcDays()"></div>
      <div class="ret-field"><label>퇴사일</label><input type="date" id="ret-leave" onchange="autoCalcDays()"></div>
    </div>
    <div id="ret-days-display" class="ret-days-display" style="display:none"><span id="ret-days-text"></span></div>
    <div class="ret-divider">평균임금 기준 — 퇴직 전 3개월</div>
    <div class="ret-row3">
      <div class="ret-field"><label>3개월 전 월급</label><input type="text" id="ret-m1" inputmode="numeric" placeholder="3,500,000" oninput="fmtR(this)"></div>
      <div class="ret-field"><label>2개월 전 월급</label><input type="text" id="ret-m2" inputmode="numeric" placeholder="3,500,000" oninput="fmtR(this)"></div>
      <div class="ret-field"><label>퇴직 월 월급</label><input type="text" id="ret-m3" inputmode="numeric" placeholder="3,500,000" oninput="fmtR(this)"></div>
    </div>
    <div class="ret-field"><label>3개월 중 상여금 합계 <span class="ret-opt">선택</span></label><input type="text" id="ret-bonus" inputmode="numeric" placeholder="0" oninput="fmtR(this)"></div>
    <div class="ret-field"><label>재직연수 <span class="ret-opt">입사·퇴사일 입력 시 자동</span></label><input type="number" id="ret-years" placeholder="예: 5.5" step="0.1" min="0"><div class="ret-hint">1년 미만 근무는 퇴직금이 발생하지 않습니다</div></div>
    <button class="ret-btn" onclick="calcRet()">퇴직금 계산하기</button>
  </div>
  <div id="ret-result" style="display:none" class="ret-result">
    <div class="ret-hero">
      <div class="ret-hero-row">
        <div><div class="ret-hero-label">퇴직금 (세전)</div><div class="ret-hero-num" id="ret-gross">—</div></div>
        <div class="ret-hero-arrow">→</div>
        <div><div class="ret-hero-label">세후 실수령액</div><div class="ret-hero-num ret-hero-net" id="ret-net">—</div></div>
      </div>
    </div>
    <div class="ret-detail-grid">
      <div class="ret-dcard"><div class="ret-dcard-label">재직기간</div><div class="ret-dcard-val" id="rd-period">—</div></div>
      <div class="ret-dcard"><div class="ret-dcard-label">1일 평균임금</div><div class="ret-dcard-val" id="rd-daily">—</div></div>
      <div class="ret-dcard"><div class="ret-dcard-label">퇴직소득세</div><div class="ret-dcard-val ret-minus" id="rd-tax">—</div></div>
      <div class="ret-dcard"><div class="ret-dcard-label">지방소득세</div><div class="ret-dcard-val ret-minus" id="rd-local">—</div></div>
    </div>
    <div class="ret-tip"><strong>절세 팁:</strong> IRP로 수령하면 퇴직소득세 납부를 연금 수령 시점까지 이연하고, 연금으로 나눠 받으면 퇴직소득세의 <strong>30~40% 감면</strong> 혜택이 있습니다.</div>
  </div>
</div>
<div id="ret-info" class="ret-panel" style="display:none">
  <div class="ret-compare-cards">
    <div class="ret-ccard ret-db"><div class="ret-ccard-title">DB형 (확정급여형)</div><ul><li>퇴직 시 <strong>최종 평균임금 기준</strong> 지급</li><li>연봉 상승분이 퇴직금에 반영</li><li>운용 책임 → <strong>회사</strong></li><li>장기 근속·연봉 상승 예상 시 유리</li><li>중도인출 불가</li></ul></div>
    <div class="ret-ccard ret-dc"><div class="ret-ccard-title">DC형 (확정기여형)</div><ul><li>매년 <strong>연간 임금의 1/12</strong> 적립</li><li>운용 성과에 따라 수령액 변동</li><li>운용 책임 → <strong>근로자</strong></li><li>이직이 잦거나 투자 수익 기대 시 유리</li><li>특정 조건 시 중도인출 가능</li></ul></div>
  </div>
  <div class="ret-tip" style="margin-top:16px"><strong>선택 기준:</strong> 연봉 상승이 꾸준히 예상되면 DB형, 이직이 잦거나 직접 운용 자신 있다면 DC형이 유리합니다.</div>
</div>
<nav class="ret-related"><a href="/salary/">← 허브로</a><a href="/salary/net-pay/">연봉 실수령</a><a href="/salary/pension-savings/">연금저축 세액공제</a></nav>
</section>
<style>
.ret-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.ret-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.ret-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px}
.ret-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit}
.ret-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.ret-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.ret-field{display:flex;flex-direction:column;gap:5px}
.ret-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.ret-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.ret-hint{font-size:.76rem;color:#9ca3af}
.ret-field input{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.ret-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.ret-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ret-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.ret-divider{font-size:.8rem;font-weight:700;color:#8c7355;border-top:1px solid #f1eae1;padding-top:12px}
.ret-days-display{background:#f6efe5;border-radius:8px;padding:8px 12px;font-size:.85rem;color:#3f2d20;font-weight:600}
.ret-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
.ret-btn:hover{background:#ea580c}
.ret-result{animation:retFade .3s ease}
@keyframes retFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.ret-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;margin-bottom:14px}
.ret-hero-row{display:flex;align-items:center;justify-content:space-around;gap:16px;flex-wrap:wrap}
.ret-hero-label{font-size:.82rem;color:#8c7355;font-weight:600;margin-bottom:4px;text-align:center}
.ret-hero-num{font-size:1.7rem;font-weight:800;color:#3f2d20;text-align:center}
.ret-hero-net{color:#c2410c}
.ret-hero-arrow{font-size:1.5rem;color:#eaddcd}
.ret-detail-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.ret-dcard{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.ret-dcard-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.ret-dcard-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.ret-minus{color:#c2410c}
.ret-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6}
.ret-tip strong{color:#3f2d20}
.ret-compare-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.ret-ccard{border-radius:14px;padding:18px 16px}
.ret-db{background:#fdf4ec;border:1px solid #f5dfd0}
.ret-dc{background:#f0f7f4;border:1px solid #c8e6da}
.ret-ccard-title{font-size:1rem;font-weight:800;color:#3f2d20;margin-bottom:12px}
.ret-ccard ul{padding-left:18px;font-size:.85rem;color:#374151}
.ret-ccard li{margin-bottom:7px}
.ret-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:28px}
.ret-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ret-related a:hover{background:#f3e7d9}
@media(max-width:600px){.ret-row2,.ret-row3{grid-template-columns:1fr}.ret-detail-grid{grid-template-columns:1fr 1fr}.ret-compare-cards{grid-template-columns:1fr}.ret-hero-num{font-size:1.4rem}}
</style>
<script>
function fmtR(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gR(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fmtW(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function retTab(t){['calc','info'].forEach(x=>{document.getElementById('ret-'+x).style.display=x===t?'':'none';});document.querySelectorAll('.ret-tab').forEach((b,i)=>b.classList.toggle('active',['calc','info'][i]===t));}
function autoCalcDays(){
  const j=document.getElementById('ret-join').value,l=document.getElementById('ret-leave').value;
  if(!j||!l)return;
  const days=Math.round((new Date(l)-new Date(j))/(86400000));
  if(days<0)return;
  document.getElementById('ret-days-display').style.display='';
  document.getElementById('ret-days-text').textContent='재직기간: '+days.toLocaleString()+'일 (약 '+(days/365).toFixed(2)+'년)';
  document.getElementById('ret-years').value=(days/365).toFixed(2);
}
function calcRetTax(gross,yrs){
  const y=Math.max(1,Math.floor(yrs));
  let td=y<=5?y*1000000:y<=10?5000000+(y-5)*2000000:y<=20?15000000+(y-10)*2500000:40000000+(y-20)*3000000;
  const ri=Math.max(0,gross-td);
  const ann=ri/y*12;
  let ad=ann<=8000000?ann:ann<=70000000?8000000+(ann-8000000)*.6:ann<=140000000?45200000+(ann-70000000)*.55:ann<=300000000?83700000+(ann-140000000)*.45:155700000+(ann-300000000)*.35;
  const tb=Math.max(0,ann-ad);
  let t=tb<=14000000?tb*.06:tb<=50000000?840000+(tb-14000000)*.15:tb<=88000000?6240000+(tb-50000000)*.24:tb<=150000000?15360000+(tb-88000000)*.35:tb<=300000000?37060000+(tb-150000000)*.38:tb<=500000000?94060000+(tb-300000000)*.40:174060000+(tb-500000000)*.42;
  return Math.max(0,Math.round(t/12*y));
}
function calcRet(){
  const m1=gR('ret-m1'),m2=gR('ret-m2'),m3=gR('ret-m3'),bonus=gR('ret-bonus');
  const yrs=parseFloat(document.getElementById('ret-years').value)||0;
  if(!m1&&!m2&&!m3){alert('월 급여를 입력해 주세요.');return;}
  if(yrs<1){alert('퇴직금은 1년 이상 근무 시 발생합니다.');return;}
  const daily=(m1+m2+m3+bonus)/92;
  const gross=Math.round(daily*30*(yrs*365/365));
  const tax=calcRetTax(gross,yrs);
  const local=Math.round(tax*.1);
  document.getElementById('ret-result').style.display='';
  document.getElementById('ret-gross').textContent=fmtW(gross);
  document.getElementById('ret-net').textContent=fmtW(Math.max(0,gross-tax-local));
  document.getElementById('rd-period').textContent=Math.round(yrs*365).toLocaleString()+'일 ('+yrs+'년)';
  document.getElementById('rd-daily').textContent=fmtW(Math.round(daily));
  document.getElementById('rd-tax').textContent=fmtW(tax);
  document.getElementById('rd-local').textContent=fmtW(local);
}
</script>
