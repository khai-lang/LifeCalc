---
layout: default
title: "종합소득세 계산기 2026 — 근로소득·프리랜서 3.3% 통합"
description: "2026년 종합소득세 계산기. 근로소득자와 프리랜서(3.3% 원천징수) 모두 지원. 환급 예상액까지 계산합니다."
permalink: /salary/income-tax/
canonical: https://calculator.khaistory.com/salary/income-tax/
---
<section class="tax-wrap">
<div class="tax-notice">간이 추정 계산기입니다. 실제 세액은 소득 종류·공제 항목에 따라 달라지며, 정확한 신고는 홈택스를 이용하세요.</div>
<nav class="tax-tabs"><button class="tax-tab active" onclick="taxTab('worker')">근로소득자</button><button class="tax-tab" onclick="taxTab('freelance')">프리랜서 3.3%</button></nav>

<!-- 근로소득자 -->
<div id="tax-worker" class="tax-panel">
  <div class="tax-form">
    <div class="tax-field"><label>연간 총 급여 (세전, 원)</label><input type="text" id="w-salary" inputmode="numeric" placeholder="예: 50,000,000" oninput="fmtT(this)"></div>
    <div class="tax-row2">
      <div class="tax-field"><label>부양가족 수 (본인 포함)</label><select id="w-depend"><option value="1">1명</option><option value="2">2명</option><option value="3">3명</option><option value="4">4명</option><option value="5">5명 이상</option></select></div>
      <div class="tax-field"><label>비과세 급여 합계 (연, 원)</label><input type="text" id="w-nontax" inputmode="numeric" placeholder="예: 2,400,000" oninput="fmtT(this)"><div class="tax-hint">식대 240만원 등</div></div>
    </div>
    <div class="tax-field"><label>연금저축·IRP 납입액 (연, 원)</label><input type="text" id="w-pension" inputmode="numeric" placeholder="예: 9,000,000" oninput="fmtT(this)"></div>
    <button class="tax-btn" onclick="calcWorker()">근로소득세 계산하기</button>
  </div>
  <div id="w-result" style="display:none" class="tax-result">
    <div class="tax-hero"><div class="tax-hero-label">연간 근로소득세 + 지방세</div><div class="tax-hero-num" id="w-total-tax">—</div><div class="tax-hero-sub" id="w-sub">월 평균: —</div></div>
    <div class="tax-grid">
      <div class="tax-card"><div class="tax-card-label">총급여</div><div class="tax-card-val" id="w-total-pay">—</div></div>
      <div class="tax-card"><div class="tax-card-label">과세표준</div><div class="tax-card-val" id="w-taxbase">—</div></div>
      <div class="tax-card"><div class="tax-card-label">산출세액</div><div class="tax-card-val" id="w-gross-tax">—</div></div>
      <div class="tax-card"><div class="tax-card-label">세액공제 합계</div><div class="tax-card-val" id="w-credit">—</div></div>
    </div>
  </div>
</div>

<!-- 프리랜서 -->
<div id="tax-freelance" class="tax-panel" style="display:none">
  <div class="tax-form">
    <div class="tax-field"><label>연간 총 수입 (원)</label><input type="text" id="f-income" inputmode="numeric" placeholder="예: 40,000,000" oninput="fmtT(this)"></div>
    <div class="tax-field"><label>필요경비 (원) <span class="tax-opt">선택 — 업무 관련 지출</span></label><input type="text" id="f-expense" inputmode="numeric" placeholder="예: 5,000,000" oninput="fmtT(this)"><div class="tax-hint">증빙 없을 경우 업종별 단순경비율이 적용됩니다 (평균 60~80%)</div></div>
    <div class="tax-field"><label>기 납부 원천징수세 (연, 원) <span class="tax-opt">3.3% 기납부액</span></label><input type="text" id="f-withheld" inputmode="numeric" placeholder="자동 계산" oninput="fmtT(this)"><div class="tax-hint">총 수입 × 3.3% 로 자동 계산되지만 직접 입력도 가능합니다</div></div>
    <div class="tax-row2">
      <div class="tax-field"><label>부양가족 수</label><select id="f-depend"><option value="1">1명(본인)</option><option value="2">2명</option><option value="3">3명</option><option value="4">4명</option></select></div>
      <div class="tax-field"><label>연금저축·IRP 납입액 (연)</label><input type="text" id="f-pension" inputmode="numeric" placeholder="예: 9,000,000" oninput="fmtT(this)"></div>
    </div>
    <button class="tax-btn" onclick="calcFreelance()">종합소득세 계산하기</button>
  </div>
  <div id="f-result" style="display:none" class="tax-result">
    <div class="tax-hero">
      <div class="tax-hero-row">
        <div><div class="tax-hero-label">확정 종합소득세</div><div class="tax-hero-num" id="f-final-tax">—</div></div>
        <div class="tax-hero-arrow">vs</div>
        <div><div class="tax-hero-label">기납부 원천징수세</div><div class="tax-hero-num" id="f-paid-tax">—</div></div>
      </div>
      <div class="tax-hero-diff" id="f-diff-wrap"></div>
    </div>
    <div class="tax-grid">
      <div class="tax-card"><div class="tax-card-label">사업소득금액</div><div class="tax-card-val" id="f-income-amt">—</div></div>
      <div class="tax-card"><div class="tax-card-label">과세표준</div><div class="tax-card-val" id="f-taxbase">—</div></div>
      <div class="tax-card"><div class="tax-card-label">산출세액</div><div class="tax-card-val" id="f-gross-tax">—</div></div>
      <div class="tax-card"><div class="tax-card-label">세액공제 합계</div><div class="tax-card-val" id="f-credit">—</div></div>
    </div>
    <div class="tax-tip"><strong>신고 기간:</strong> 매년 5월 (5.1~5.31). 환급이 발생하면 6월 말 전후 환급됩니다. 성실신고확인대상자는 6월 30일까지입니다.</div>
  </div>
</div>

<nav class="tax-related"><a href="/salary/">← 허브로</a><a href="/salary/net-pay/">연봉 실수령</a><a href="/salary/biz-income-tax/">사업자 종합소득세</a></nav>
</section>

<style>
.tax-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.tax-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.tax-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px}
.tax-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit}
.tax-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.tax-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.tax-field{display:flex;flex-direction:column;gap:5px}
.tax-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.tax-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.tax-hint{font-size:.76rem;color:#9ca3af}
.tax-field input,.tax-field select{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.tax-field input:focus,.tax-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.tax-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.tax-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
.tax-btn:hover{background:#ea580c}
.tax-result{animation:txFade .3s ease}
@keyframes txFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.tax-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;text-align:center;margin-bottom:14px}
.tax-hero-label{font-size:.82rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.tax-hero-num{font-size:2rem;font-weight:800;color:#c2410c}
.tax-hero-sub{font-size:.88rem;color:#8c7355;margin-top:4px}
.tax-hero-row{display:flex;align-items:center;justify-content:space-around;gap:12px;flex-wrap:wrap}
.tax-hero-arrow{font-size:1.2rem;color:#eaddcd;font-weight:700}
.tax-hero-diff{margin-top:12px;font-size:.95rem;font-weight:700;padding:8px 16px;border-radius:8px;display:inline-block}
.diff-refund{background:#e6f7ef;color:#15803d}
.diff-pay{background:#fdf4ec;color:#c2410c}
.tax-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.tax-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.tax-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.tax-card-val{font-size:.88rem;font-weight:700;color:#3f2d20}
.tax-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6}
.tax-tip strong{color:#3f2d20}
.tax-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:28px}
.tax-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.tax-related a:hover{background:#f3e7d9}
@media(max-width:600px){.tax-grid{grid-template-columns:1fr 1fr}.tax-row2{grid-template-columns:1fr}.tax-hero-num{font-size:1.6rem}}
</style>
<script>
function fmtT(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gT(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fmtW(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function taxTab(t){['worker','freelance'].forEach(x=>{document.getElementById('tax-'+x).style.display=x===t?'':'none';});document.querySelectorAll('.tax-tab').forEach((b,i)=>b.classList.toggle('active',['worker','freelance'][i]===t));}

function progressiveTax(base){
  if(base<=14000000) return base*.06;
  if(base<=50000000) return 840000+(base-14000000)*.15;
  if(base<=88000000) return 6240000+(base-50000000)*.24;
  if(base<=150000000) return 15360000+(base-88000000)*.35;
  if(base<=300000000) return 37060000+(base-150000000)*.38;
  if(base<=500000000) return 94060000+(base-300000000)*.40;
  if(base<=1000000000) return 174060000+(base-500000000)*.42;
  return 384060000+(base-1000000000)*.45;
}

function workerDeductions(totalPay){
  let d=0;
  if(totalPay<=5000000) d=totalPay*.70;
  else if(totalPay<=15000000) d=3500000+(totalPay-5000000)*.40;
  else if(totalPay<=45000000) d=7500000+(totalPay-15000000)*.15;
  else if(totalPay<=100000000) d=12000000+(totalPay-45000000)*.05;
  else d=14750000+(totalPay-100000000)*.02;
  return Math.min(d,20000000);
}

function calcWorker(){
  const salary=gT('w-salary'), nontax=gT('w-nontax'), depend=parseInt(document.getElementById('w-depend').value)||1, pension=gT('w-pension');
  if(!salary)return;
  const totalPay=Math.max(0,salary-nontax);
  const wDed=workerDeductions(totalPay);
  const incomeAmt=totalPay-wDed;
  const personalDed=depend*1500000;
  const pensionDed=Math.min(pension,9000000);
  const taxbase=Math.max(0,incomeAmt-personalDed);
  const grossTax=progressiveTax(taxbase);
  let credit=0;
  if(grossTax<=550000) credit=grossTax*.55;
  else credit=302500+(grossTax-550000)*.30;
  credit=Math.min(credit,depend<=1?660000:depend<=2?715000:748000);
  const pensionCredit=Math.round(pensionDed*(salary<=55000000?0.165:0.132));
  const totalCredit=Math.round(credit)+pensionCredit;
  const netTax=Math.max(0,Math.round(grossTax)-totalCredit);
  const localTax=Math.round(netTax*.10);
  const totalTax=netTax+localTax;
  document.getElementById('w-result').style.display='';
  document.getElementById('w-total-tax').textContent=fmtW(totalTax);
  document.getElementById('w-sub').textContent='월 평균 '+fmtW(Math.round(totalTax/12))+' / 지방소득세 포함';
  document.getElementById('w-total-pay').textContent=fmtW(totalPay);
  document.getElementById('w-taxbase').textContent=fmtW(Math.max(0,taxbase));
  document.getElementById('w-gross-tax').textContent=fmtW(Math.round(grossTax));
  document.getElementById('w-credit').textContent=fmtW(totalCredit);
}

function calcFreelance(){
  const income=gT('f-income'), expense=gT('f-expense'), depend=parseInt(document.getElementById('f-depend').value)||1, pension=gT('f-pension');
  let withheld=gT('f-withheld');
  if(!withheld) withheld=Math.round(income*0.033);
  if(!income)return;
  const incomeAmt=Math.max(0,income-expense);
  const personalDed=depend*1500000;
  const pensionDed=Math.min(pension,9000000);
  const taxbase=Math.max(0,incomeAmt-personalDed);
  const grossTax=progressiveTax(taxbase);
  const pensionCredit=Math.round(pensionDed*(income<=55000000?0.165:0.132));
  const totalCredit=Math.round(pensionCredit);
  const netTax=Math.max(0,Math.round(grossTax)-totalCredit);
  const localTax=Math.round(netTax*.10);
  const finalTax=netTax+localTax;
  const diff=withheld-finalTax;
  document.getElementById('f-result').style.display='';
  document.getElementById('f-final-tax').textContent=fmtW(finalTax);
  document.getElementById('f-paid-tax').textContent=fmtW(withheld);
  const dw=document.getElementById('f-diff-wrap');
  if(diff>0){dw.innerHTML='<span class="tax-hero-diff diff-refund">환급 예상: '+fmtW(diff)+'</span>';}
  else if(diff<0){dw.innerHTML='<span class="tax-hero-diff diff-pay">추가 납부: '+fmtW(-diff)+'</span>';}
  else{dw.innerHTML='';}
  document.getElementById('f-income-amt').textContent=fmtW(incomeAmt);
  document.getElementById('f-taxbase').textContent=fmtW(Math.max(0,taxbase));
  document.getElementById('f-gross-tax').textContent=fmtW(Math.round(grossTax));
  document.getElementById('f-credit').textContent=fmtW(totalCredit);
}
</script>
