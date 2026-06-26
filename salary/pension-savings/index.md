---
layout: default
title: "연금저축·IRP 세액공제 계산기 2026 — 환급액 시뮬레이션"
description: "2026년 연금저축·IRP 납입액에 따른 세액공제(13.2%·16.5%)와 연말정산 환급 예상액을 계산합니다."
permalink: /salary/pension-savings/
canonical: https://calculator.khaistory.com/salary/pension-savings/
---
<section class="pen-wrap">
<div class="pen-notice">연봉을 입력하면 세액공제율이 자동 결정됩니다. 연금저축 + IRP 합산 연 900만원까지 세액공제가 적용됩니다.</div>
<div class="pen-form">
  <div class="pen-field"><label>연봉 (세전, 원) — 세액공제율 자동 결정</label><input type="text" id="pen-salary" inputmode="numeric" placeholder="예: 50,000,000" oninput="fmtPen(this);autoRate()"></div>
  <div class="pen-rate-display" id="pen-rate-display" style="display:none"></div>
  <div class="pen-row2">
    <div class="pen-field"><label>연금저축 연 납입액 (원)</label><input type="text" id="pen-savings" inputmode="numeric" placeholder="예: 6,000,000" oninput="fmtPen(this)"><div class="pen-hint">한도: 연 600만원</div></div>
    <div class="pen-field"><label>IRP 추가 납입액 (원)</label><input type="text" id="pen-irp" inputmode="numeric" placeholder="예: 3,000,000" oninput="fmtPen(this)"><div class="pen-hint">연금저축+IRP 합산 한도: 연 900만원</div></div>
  </div>
  <button class="pen-btn" onclick="calcPen()">세액공제 계산하기</button>
</div>
<div id="pen-result" style="display:none" class="pen-result">
  <div class="pen-hero">
    <div class="pen-hero-label">예상 연말정산 환급액</div>
    <div class="pen-hero-num" id="pen-refund">—</div>
    <div class="pen-hero-sub" id="pen-sub">—</div>
  </div>
  <div class="pen-grid">
    <div class="pen-card"><div class="pen-card-label">세액공제율</div><div class="pen-card-val" id="pen-rate-val">—</div></div>
    <div class="pen-card"><div class="pen-card-label">공제 대상 납입액</div><div class="pen-card-val" id="pen-base">—</div></div>
    <div class="pen-card"><div class="pen-card-label">초과 납입액 (공제 제외)</div><div class="pen-card-val" id="pen-over">—</div></div>
    <div class="pen-card"><div class="pen-card-label">월 환산 절세액</div><div class="pen-card-val" id="pen-monthly">—</div></div>
  </div>
  <div class="pen-tip"><strong>최대 환급 시나리오</strong><br>연봉 5,500만원 이하 기준, 연금저축 600만원 + IRP 300만원 = 합산 900만원 납입 시 환급액 최대 <strong>1,485,000원</strong> (16.5% 적용).</div>
  <div class="pen-scenarios">
    <div class="pen-sc-title">납입액별 예상 환급액 (연봉 기준 적용 세율)</div>
    <div id="pen-sc-grid" class="pen-sc-grid"></div>
  </div>
</div>
<nav class="pen-related"><a href="/salary/">← 허브로</a><a href="/salary/net-pay/">연봉 실수령</a><a href="/salary/retirement/">퇴직금 계산기</a></nav>
</section>
<style>
.pen-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.pen-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.pen-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.pen-field{display:flex;flex-direction:column;gap:5px}
.pen-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.pen-hint{font-size:.76rem;color:#9ca3af}
.pen-field input{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.pen-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.pen-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pen-rate-display{background:#f6efe5;border:1px solid #eaddcd;border-radius:8px;padding:8px 12px;font-size:.85rem;color:#3f2d20;font-weight:600}
.pen-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
.pen-btn:hover{background:#ea580c}
.pen-result{animation:penFade .3s ease}
@keyframes penFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.pen-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;text-align:center;margin-bottom:14px}
.pen-hero-label{font-size:.85rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.pen-hero-num{font-size:2.2rem;font-weight:800;color:#c2410c}
.pen-hero-sub{font-size:.88rem;color:#8c7355;margin-top:4px}
.pen-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.pen-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.pen-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.pen-card-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.pen-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6;margin-bottom:14px}
.pen-tip strong{color:#3f2d20}
.pen-scenarios{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px}
.pen-sc-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:10px}
.pen-sc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.pen-sc-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:10px;text-align:center}
.pen-sc-amt{font-size:.78rem;color:#9ca3af;margin-bottom:3px}
.pen-sc-refund{font-size:1rem;font-weight:700;color:#c2410c}
.pen-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:28px}
.pen-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.pen-related a:hover{background:#f3e7d9}
@media(max-width:600px){.pen-grid{grid-template-columns:1fr 1fr}.pen-row2{grid-template-columns:1fr}.pen-sc-grid{grid-template-columns:1fr 1fr}}
</style>
<script>
function fmtPen(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gP(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fmtW(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function getRate(salary){return salary>0&&salary<=55000000?0.165:0.132;}
function autoRate(){
  const s=gP('pen-salary');
  const d=document.getElementById('pen-rate-display');
  if(!s){d.style.display='none';return;}
  const rate=getRate(s);
  d.style.display='';
  d.textContent='세액공제율: '+(rate*100).toFixed(1)+'% '+(s<=55000000?'(총급여 5,500만원 이하)':'(총급여 5,500만원 초과)');
}
function calcPen(){
  const savings=gP('pen-savings');
  const irp=gP('pen-irp');
  const salary=gP('pen-salary');
  const rate=salary?getRate(salary):0.165;
  const MAX_SAVINGS=6000000, MAX_TOTAL=9000000;
  const effSavings=Math.min(savings,MAX_SAVINGS);
  const effIrp=Math.min(irp,Math.max(0,MAX_TOTAL-effSavings));
  const base=effSavings+effIrp;
  const total=savings+irp;
  const over=Math.max(0,total-base);
  const refund=Math.round(base*rate);
  document.getElementById('pen-result').style.display='';
  document.getElementById('pen-refund').textContent=fmtW(refund);
  document.getElementById('pen-sub').textContent='납입액 '+fmtW(base)+' × 세액공제율 '+(rate*100).toFixed(1)+'%';
  document.getElementById('pen-rate-val').textContent=(rate*100).toFixed(1)+'%';
  document.getElementById('pen-base').textContent=fmtW(base);
  document.getElementById('pen-over').textContent=over?fmtW(over):'없음';
  document.getElementById('pen-monthly').textContent=fmtW(Math.round(refund/12));
  const scenarios=[300,600,900].map(w=>({amt:w*10000,refund:Math.round(Math.min(w*10000,MAX_TOTAL)*rate)}));
  document.getElementById('pen-sc-grid').innerHTML=scenarios.map(s=>`<div class="pen-sc-item"><div class="pen-sc-amt">납입 ${(s.amt/10000).toLocaleString()}만원</div><div class="pen-sc-refund">${fmtW(s.refund)}</div></div>`).join('');
}
</script>
