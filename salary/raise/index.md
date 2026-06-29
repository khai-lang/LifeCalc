---
layout: default
title: "연봉인상 시뮬레이터 2026 — 세후 실수령 증가액 계산"
description: "연봉이 오르면 실수령은 얼마나 늘어날까? 현재 연봉과 인상 후 연봉을 입력하면 세후 증가액, 월별 차이, 누진세로 사라지는 금액까지 한번에 계산합니다."
permalink: /salary/raise/
canonical: https://calculator.khaistory.com/salary/raise/
og_title: "연봉인상 시뮬레이터 2026 — 세후 실수령 증가액"
og_description: "연봉 300만원 오르면 실제로 얼마 더 받나? 세후 증가액과 누진세 손실까지 계산."
---

<section class="rs-wrap">

  <div class="rs-notice">
    연봉 인상 후 <strong>실제 통장에 더 찍히는 금액</strong>을 계산합니다.
    누진세 구조상 인상분의 일부는 세금으로 빠져나갑니다. 2026년 4대보험 요율 기준입니다.
  </div>

  <!-- ① 입력 -->
  <div class="rs-form">
    <div class="rs-row2">
      <div class="rs-field">
        <label for="rs-before">현재 연봉 (세전, 원)</label>
        <input type="text" id="rs-before" inputmode="numeric"
               placeholder="예: 50,000,000" oninput="fmtRs(this)" onblur="calcRaise()">
      </div>
      <div class="rs-field">
        <label for="rs-after">인상 후 연봉 (세전, 원)</label>
        <input type="text" id="rs-after" inputmode="numeric"
               placeholder="예: 53,000,000" oninput="fmtRs(this)" onblur="calcRaise()">
        <div class="rs-hint">또는 아래 인상률로 자동 입력</div>
      </div>
    </div>

    <!-- 인상률 퀵 버튼 -->
    <div class="rs-field">
      <label>인상률로 빠르게 입력</label>
      <div class="rs-rate-btns">
        <button class="rs-rate-btn" onclick="applyRate(3)">+3%</button>
        <button class="rs-rate-btn" onclick="applyRate(5)">+5%</button>
        <button class="rs-rate-btn" onclick="applyRate(8)">+8%</button>
        <button class="rs-rate-btn" onclick="applyRate(10)">+10%</button>
        <button class="rs-rate-btn" onclick="applyRate(15)">+15%</button>
        <button class="rs-rate-btn" onclick="applyRate(20)">+20%</button>
        <div class="rs-custom-rate">
          <input type="number" id="rs-custom-rate" placeholder="직접 입력 %" min="0" max="200" step="0.1">
          <button onclick="applyRate(parseFloat(document.getElementById('rs-custom-rate').value)||0)">적용</button>
        </div>
      </div>
    </div>

    <div class="rs-row2">
      <div class="rs-field">
        <label for="rs-depend">부양가족 수 (본인 포함)</label>
        <select id="rs-depend" onchange="calcRaise()">
          <option value="1">1명 (본인만)</option>
          <option value="2">2명</option>
          <option value="3">3명</option>
          <option value="4">4명</option>
          <option value="5">5명 이상</option>
        </select>
      </div>
      <div class="rs-field">
        <label for="rs-nontax">비과세 수당 (월, 원)</label>
        <input type="text" id="rs-nontax" inputmode="numeric"
               placeholder="0" oninput="fmtRs(this)" onblur="calcRaise()">
        <div class="rs-hint">식대 20만원은 기본 포함</div>
      </div>
    </div>

    <button class="rs-btn" onclick="calcRaise()">인상 효과 계산하기</button>
  </div>

  <!-- ② 결과 -->
  <div id="rs-result" style="display:none" class="rs-result">

    <!-- 히어로: 인상 전 vs 후 -->
    <div class="rs-hero">
      <div class="rs-hero-col">
        <div class="rs-hero-label">현재 월 실수령</div>
        <div class="rs-hero-num rs-before-color" id="rh-before">—</div>
      </div>
      <div class="rs-hero-arrow">
        <div class="rs-arrow-line"></div>
        <div class="rs-arrow-diff" id="rh-diff-badge">+—</div>
      </div>
      <div class="rs-hero-col">
        <div class="rs-hero-label">인상 후 월 실수령</div>
        <div class="rs-hero-num rs-after-color" id="rh-after">—</div>
      </div>
    </div>

    <!-- 핵심 수치 카드 -->
    <div class="rs-cards">
      <div class="rs-card rs-card-main">
        <div class="rs-card-icon">↑</div>
        <div class="rs-card-label">월 실수령 증가액</div>
        <div class="rs-card-val" id="rc-monthly-diff">—</div>
        <div class="rs-card-sub" id="rc-annual-diff">연 —</div>
      </div>
      <div class="rs-card">
        <div class="rs-card-icon">%</div>
        <div class="rs-card-label">세전 인상률</div>
        <div class="rs-card-val" id="rc-raise-pct">—</div>
        <div class="rs-card-sub" id="rc-raise-amt">인상액 —</div>
      </div>
      <div class="rs-card rs-card-warn">
        <div class="rs-card-icon">↗</div>
        <div class="rs-card-label">세금·보험 추가 공제</div>
        <div class="rs-card-val" id="rc-extra-tax">—</div>
        <div class="rs-card-sub" id="rc-tax-ratio">인상분의 —% 손실</div>
      </div>
      <div class="rs-card">
        <div class="rs-card-icon">✓</div>
        <div class="rs-card-label">실수령 인상 효율</div>
        <div class="rs-card-val" id="rc-efficiency">—</div>
        <div class="rs-card-sub">세전 인상분 대비</div>
      </div>
    </div>

    <!-- 상세 비교 테이블 -->
    <div class="rs-table-wrap">
      <table class="rs-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>현재</th>
            <th>인상 후</th>
            <th>변화</th>
          </tr>
        </thead>
        <tbody id="rs-tbody"></tbody>
      </table>
    </div>

    <!-- 누적 효과 -->
    <div class="rs-cumul">
      <div class="rs-cumul-title">인상 후 누적 실수령 추가액</div>
      <div class="rs-cumul-grid" id="rs-cumul-grid"></div>
    </div>

    <!-- 연봉 백분위 블록 -->
    <div class="rs-pct-wrap" id="rs-pct-wrap">
      <div class="rs-pct-title">전국 근로자 연봉 백분위 — 인상 전후 비교</div>
      <div class="rs-pct-row">
        <div class="rs-pct-item rs-pct-before">
          <div class="rs-pct-label">현재 연봉</div>
          <div class="rs-pct-salary" id="pct-before-sal">—</div>
          <div class="rs-pct-rank" id="pct-before-rank">상위 —%</div>
          <div class="rs-pct-bar-wrap"><div class="rs-pct-bar" id="pct-before-bar"></div></div>
        </div>
        <div class="rs-pct-arrow">→</div>
        <div class="rs-pct-item rs-pct-after">
          <div class="rs-pct-label">인상 후 연봉</div>
          <div class="rs-pct-salary" id="pct-after-sal">—</div>
          <div class="rs-pct-rank" id="pct-after-rank">상위 —%</div>
          <div class="rs-pct-bar-wrap"><div class="rs-pct-bar" id="pct-after-bar"></div></div>
        </div>
      </div>
      <div class="rs-pct-note">국세청 2023년 귀속 근로소득 백분위 기준 · 매년 업데이트</div>
    </div>

    <!-- 인상 팁 -->
    <div class="rs-tip" id="rs-tip"></div>

    <!-- 관련 계산기 -->
    <div class="rs-related-box">
      <div class="rs-related-title">함께 확인해 보세요</div>
      <div class="rs-related-links">
        <a href="/salary/net-pay/">연봉 실수령 계산기 (역계산 포함)</a>
        <a href="/salary/retirement/">퇴직금 계산기</a>
        <a href="/salary/pension-savings/">연금저축 세액공제 계산기</a>
      </div>
    </div>
  </div>

</section>

<style>
.rs-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.rs-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}

/* 폼 */
.rs-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.rs-field{display:flex;flex-direction:column;gap:5px}
.rs-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.rs-hint{font-size:.76rem;color:#9ca3af}
.rs-field input[type="text"],
.rs-field input[type="number"],
.rs-field select{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.rs-field input:focus,.rs-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.rs-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* 인상률 퀵 버튼 */
.rs-rate-btns{display:flex;flex-wrap:wrap;gap:7px;align-items:center}
.rs-rate-btn{background:#f6efe5;border:1px solid #eaddcd;border-radius:8px;padding:7px 14px;font-size:.85rem;font-weight:700;color:#8c7355;cursor:pointer;font-family:inherit;transition:all .15s}
.rs-rate-btn:hover{background:#f3e7d9;color:#c2410c;border-color:#c2410c}
.rs-custom-rate{display:flex;gap:6px;margin-left:4px}
.rs-custom-rate input{border:1px solid #ddd4c8;border-radius:8px;padding:7px 10px;font-size:.85rem;font-family:inherit;width:90px;box-sizing:border-box}
.rs-custom-rate button{background:#785a43;color:#fff;border:none;border-radius:8px;padding:7px 12px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap}
.rs-custom-rate button:hover{background:#5c4331}

/* 계산 버튼 */
.rs-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s,transform .1s;width:100%}
.rs-btn:hover{background:#ea580c;transform:translateY(-1px)}

/* 결과 */
.rs-result{animation:rsFade .3s ease}
@keyframes rsFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

/* 히어로 */
.rs-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}
.rs-hero-col{text-align:center;flex:1}
.rs-hero-label{font-size:.78rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.rs-hero-num{font-size:1.6rem;font-weight:800;letter-spacing:-.02em}
.rs-before-color{color:#8c7355}
.rs-after-color{color:#c2410c}
.rs-hero-arrow{text-align:center;flex-shrink:0}
.rs-arrow-line{width:40px;height:2px;background:linear-gradient(to right,#eaddcd,#c2410c);border-radius:2px;margin:0 auto 6px}
.rs-arrow-diff{font-size:.88rem;font-weight:800;color:#c2410c;white-space:nowrap}

/* 카드 */
.rs-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.rs-card{background:#fff;border:1px solid #f1eae1;border-radius:12px;padding:12px;text-align:center}
.rs-card-main{background:#fdf4ec;border-color:#f5dfd0}
.rs-card-warn{background:#faf7f2;border-color:#eaddcd}
.rs-card-icon{font-size:.9rem;color:#9ca3af;margin-bottom:2px}
.rs-card-label{font-size:.7rem;color:#9ca3af;margin-bottom:4px;line-height:1.3}
.rs-card-val{font-size:1rem;font-weight:800;color:#3f2d20}
.rs-card-main .rs-card-val{color:#c2410c}
.rs-card-sub{font-size:.72rem;color:#9ca3af;margin-top:2px}

/* 비교 테이블 */
.rs-table-wrap{overflow-x:auto;border-radius:12px;border:1px solid #f1eae1;margin-bottom:14px}
.rs-table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:420px}
.rs-table thead{background:#f6efe5}
.rs-table th{padding:10px 14px;font-weight:700;color:#4a3728;text-align:right}
.rs-table th:first-child{text-align:left}
.rs-table td{padding:9px 14px;text-align:right;border-top:1px solid #f5f0eb;color:#374151}
.rs-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}
.rs-table .rs-tfoot td{background:#faf7f2;font-weight:700;border-top:2px solid #eaddcd}
.rs-table .rs-diff-plus{color:#c2410c;font-weight:700}
.rs-table .rs-diff-minus{color:#9ca3af}
.rs-table .rs-total-row td{background:#fdf4ec;font-weight:700}

/* 누적 */
.rs-cumul{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.rs-cumul-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:10px}
.rs-cumul-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.rs-cumul-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:8px;text-align:center}
.rs-cumul-period{font-size:.72rem;color:#9ca3af;margin-bottom:3px}
.rs-cumul-val{font-size:.88rem;font-weight:700;color:#c2410c}

/* 백분위 블록 */
.rs-pct-wrap{background:#fff;border:1px solid #f1eae1;border-radius:14px;padding:16px;margin-bottom:14px}
.rs-pct-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:12px}
.rs-pct-row{display:flex;align-items:center;gap:12px}
.rs-pct-item{flex:1;background:#faf7f2;border-radius:10px;padding:12px;text-align:center}
.rs-pct-before{border:1px solid #eaddcd}
.rs-pct-after{border:1px solid #f5dfd0;background:#fdf4ec}
.rs-pct-label{font-size:.75rem;color:#9ca3af;margin-bottom:4px}
.rs-pct-salary{font-size:.88rem;font-weight:600;color:#3f2d20;margin-bottom:2px}
.rs-pct-rank{font-size:1.1rem;font-weight:800;margin-bottom:8px}
.rs-pct-before .rs-pct-rank{color:#785a43}
.rs-pct-after .rs-pct-rank{color:#c2410c}
.rs-pct-bar-wrap{background:#f1eae1;border-radius:20px;height:6px;overflow:hidden}
.rs-pct-bar{height:100%;border-radius:20px;transition:width .6s ease}
.rs-pct-before .rs-pct-bar{background:#8c7355}
.rs-pct-after .rs-pct-bar{background:#c2410c}
.rs-pct-arrow{font-size:1.3rem;color:#eaddcd;flex-shrink:0}
.rs-pct-note{font-size:.72rem;color:#9ca3af;margin-top:10px;text-align:center}

/* 팁 */
.rs-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6;margin-bottom:14px}
.rs-tip strong{color:#3f2d20}

/* 관련 링크 박스 */
.rs-related-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px}
.rs-related-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.rs-related-links{display:flex;flex-wrap:wrap;gap:8px}
.rs-related-links a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#fff;transition:background .15s}
.rs-related-links a:hover{background:#f3e7d9}

@media(max-width:600px){
  .rs-cards{grid-template-columns:1fr 1fr}
  .rs-cumul-grid{grid-template-columns:repeat(3,1fr)}
  .rs-row2{grid-template-columns:1fr}
  .rs-hero-num{font-size:1.3rem}
  .rs-pct-row{flex-direction:column}
  .rs-pct-arrow{transform:rotate(90deg)}
}
</style>

<script>
/* ── 2026 요율 ── */
const R = {
  nps:0.0475, hi:0.03595, ltcRatio:0.1314, ei:0.009,
  npsCap:6370000, nontaxBase:200000
};

/* ── 국세청 2023 근로소득 백분위 데이터 (만원 단위) ── */
// 출처: 국세청 근로소득 백분위(천분위) 자료 2023년 귀속
// 상위 X% → 최저 급여 (만원)
const PCT_DATA = [
  {pct:1,  min:13300}, {pct:2,  min:10000}, {pct:3,  min:8500},
  {pct:5,  min:7200},  {pct:10, min:5500},  {pct:15, min:4600},
  {pct:20, min:4000},  {pct:25, min:3500},  {pct:30, min:3150},
  {pct:40, min:2600},  {pct:50, min:2100},  {pct:60, min:1700},
  {pct:70, min:1350},  {pct:80, min:1050},  {pct:90, min:750},
  {pct:100,min:0}
];

function getSalaryPct(annualWan) {
  for(let i=0;i<PCT_DATA.length;i++){
    if(annualWan>=PCT_DATA[i].min) return PCT_DATA[i].pct;
  }
  return 100;
}

/* ── 유틸 ── */
function fmtRs(el){
  const r=el.value.replace(/[^0-9]/g,'');
  el.value=r?parseInt(r).toLocaleString('ko-KR'):'';
  el.dataset.raw=r;
}
function gR(id){
  const el=document.getElementById(id);
  return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;
}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function fwPlus(n){return (n>=0?'+':'')+Math.round(n).toLocaleString('ko-KR')+'원';}

/* ── 세금 계산 (net-pay와 동일 로직) ── */
function calcTax(annual,depend,nontaxMonth){
  const n=Math.max(1,Math.min(5,parseInt(depend)||1));
  const nontaxTotal=R.nontaxBase+(parseFloat(nontaxMonth)||0);
  const totalPay=Math.max(0,annual-nontaxTotal*12);
  let ded=0;
  if(totalPay<=5000000)        ded=totalPay*0.70;
  else if(totalPay<=15000000)  ded=3500000+(totalPay-5000000)*0.40;
  else if(totalPay<=45000000)  ded=7500000+(totalPay-15000000)*0.15;
  else if(totalPay<=100000000) ded=12000000+(totalPay-45000000)*0.05;
  else                         ded=14750000+(totalPay-100000000)*0.02;
  ded=Math.min(ded,20000000);
  const ia=totalPay-ded;
  const tb=Math.max(0,ia-n*1500000);
  let tax=0;
  if(tb<=14000000)        tax=tb*0.06;
  else if(tb<=50000000)   tax=840000+(tb-14000000)*0.15;
  else if(tb<=88000000)   tax=6240000+(tb-50000000)*0.24;
  else if(tb<=150000000)  tax=15360000+(tb-88000000)*0.35;
  else if(tb<=300000000)  tax=37060000+(tb-150000000)*0.38;
  else if(tb<=500000000)  tax=94060000+(tb-300000000)*0.40;
  else if(tb<=1000000000) tax=174060000+(tb-500000000)*0.42;
  else                    tax=384060000+(tb-1000000000)*0.45;
  let cr=tax<=550000?tax*0.55:302500+(tax-550000)*0.30;
  cr=Math.min(cr,n<=1?660000:n<=2?715000:748000);
  return Math.max(0,Math.round((tax-cr)/12));
}

function calcDeductions(monthGross,depend,nontaxMonth){
  const npsBase=Math.min(monthGross,R.npsCap);
  const nps=Math.round(npsBase*R.nps);
  const hi=Math.round(monthGross*R.hi);
  const ltc=Math.round(hi*R.ltcRatio);
  const ei=Math.round(monthGross*R.ei);
  return {nps,hi,ltc,ei,ins:nps+hi+ltc+ei};
}

/* ── 인상률 퀵 버튼 ── */
function applyRate(rate){
  if(!rate||rate<=0) return;
  const before=gR('rs-before');
  if(!before){alert('현재 연봉을 먼저 입력해 주세요.');return;}
  const after=Math.round(before*(1+rate/100));
  const el=document.getElementById('rs-after');
  el.value=after.toLocaleString('ko-KR');
  el.dataset.raw=String(after);
  calcRaise();
}

/* ── 메인 계산 ── */
function calcRaise(){
  const before=gR('rs-before');
  const after=gR('rs-after');
  if(!before||!after||after<=before) return;

  const depend=document.getElementById('rs-depend').value;
  const nontax=gR('rs-nontax');

  /* 월 세전 */
  const mgBefore=Math.round(before/12);
  const mgAfter=Math.round(after/12);

  /* 4대보험 */
  const insBefore=calcDeductions(mgBefore,depend,nontax);
  const insAfter =calcDeductions(mgAfter, depend,nontax);

  /* 소득세 */
  const taxBefore=calcTax(before,depend,nontax);
  const taxAfter =calcTax(after, depend,nontax);
  const ltaxBefore=Math.round(taxBefore*.1);
  const ltaxAfter =Math.round(taxAfter*.1);

  /* 공제 합계 */
  const dedBefore=insBefore.ins+taxBefore+ltaxBefore;
  const dedAfter =insAfter.ins +taxAfter +ltaxAfter;

  /* 실수령 */
  const netBefore=mgBefore-dedBefore;
  const netAfter =mgAfter -dedAfter;
  const netDiff  =netAfter-netBefore;
  const raiseSalary=after-before;
  const raiseMonth =mgAfter-mgBefore;
  const extraDed   =(dedAfter-dedBefore);
  const raisePct   =(raiseSalary/before*100).toFixed(1);
  const efficiency =(netDiff/raiseMonth*100).toFixed(1);
  const taxLossRatio=(extraDed/raiseMonth*100).toFixed(1);

  /* ── DOM 업데이트 ── */
  document.getElementById('rs-result').style.display='';

  /* 히어로 */
  document.getElementById('rh-before').textContent=fw(netBefore);
  document.getElementById('rh-after').textContent=fw(netAfter);
  document.getElementById('rh-diff-badge').textContent=fwPlus(netDiff)+'/월';

  /* 카드 */
  document.getElementById('rc-monthly-diff').textContent=fwPlus(netDiff);
  document.getElementById('rc-annual-diff').textContent='연 '+fwPlus(netDiff*12);
  document.getElementById('rc-raise-pct').textContent='+'+raisePct+'%';
  document.getElementById('rc-raise-amt').textContent='인상액 '+fw(raiseSalary);
  document.getElementById('rc-extra-tax').textContent=fw(extraDed);
  document.getElementById('rc-tax-ratio').textContent='인상분의 '+taxLossRatio+'% 손실';
  document.getElementById('rc-efficiency').textContent=efficiency+'%';

  /* 상세 테이블 */
  const rows=[
    {name:'월 세전',    b:mgBefore,       a:mgAfter},
    {name:'국민연금',   b:insBefore.nps,  a:insAfter.nps},
    {name:'건강보험',   b:insBefore.hi,   a:insAfter.hi},
    {name:'장기요양',   b:insBefore.ltc,  a:insAfter.ltc},
    {name:'고용보험',   b:insBefore.ei,   a:insAfter.ei},
    {name:'소득세',     b:taxBefore,      a:taxAfter},
    {name:'지방소득세', b:ltaxBefore,     a:ltaxAfter},
  ];
  document.getElementById('rs-tbody').innerHTML=
    rows.map(r=>{
      const diff=r.a-r.b;
      const diffClass=diff>0?'rs-diff-plus':'rs-diff-minus';
      return `<tr>
        <td>${r.name}</td>
        <td>${fw(r.b)}</td>
        <td>${fw(r.a)}</td>
        <td class="${diffClass}">${fwPlus(diff)}</td>
      </tr>`;
    }).join('')+`
    <tr class="rs-total-row">
      <td>월 실수령</td>
      <td>${fw(netBefore)}</td>
      <td>${fw(netAfter)}</td>
      <td class="rs-diff-plus">${fwPlus(netDiff)}</td>
    </tr>`;

  /* 누적 */
  const periods=[
    {label:'1개월', m:1},{label:'3개월', m:3},{label:'6개월', m:6},
    {label:'1년', m:12},{label:'3년', m:36}
  ];
  document.getElementById('rs-cumul-grid').innerHTML=
    periods.map(p=>`
      <div class="rs-cumul-item">
        <div class="rs-cumul-period">${p.label}</div>
        <div class="rs-cumul-val">${fw(netDiff*p.m)}</div>
      </div>`).join('');

  /* 백분위 */
  const beforeWan=Math.round(before/10000);
  const afterWan =Math.round(after/10000);
  const bPct=getSalaryPct(beforeWan);
  const aPct=getSalaryPct(afterWan);
  document.getElementById('pct-before-sal').textContent=(beforeWan/100).toFixed(0)+'만원';
  document.getElementById('pct-before-rank').textContent='상위 '+bPct+'%';
  document.getElementById('pct-before-bar').style.width=(100-bPct)+'%';
  document.getElementById('pct-after-sal').textContent=(afterWan/100).toFixed(0)+'만원';
  document.getElementById('pct-after-rank').textContent='상위 '+aPct+'%';
  document.getElementById('pct-after-bar').style.width=(100-aPct)+'%';

  /* 팁 */
  const tipHtml=genTip(raisePct,efficiency,taxLossRatio,after,netDiff);
  document.getElementById('rs-tip').innerHTML=tipHtml;
}

function genTip(pct,eff,loss,afterSalary,monthlyDiff){
  const p=parseFloat(pct), e=parseFloat(eff), l=parseFloat(loss);
  if(afterSalary>=88000000&&afterSalary<150000000)
    return `<strong>세율 35% 구간에 진입했습니다.</strong> 인상분의 상당 부분이 누진세로 빠져나가는 구간입니다. 연금저축·IRP 납입을 늘리면 세금을 줄이고 실수령을 높일 수 있습니다. <a href="/salary/pension-savings/" style="color:#c2410c">→ 연금저축 세액공제 계산기</a>`;
  if(afterSalary>=50000000)
    return `<strong>인상분 실수령 효율 ${e}%.</strong> 세전 ${p}% 인상됐지만 세후로 ${e}%만 반영됩니다. 누진세 구조상 연봉이 높아질수록 이 비율이 낮아집니다. 월 실수령 증가액 ${Math.round(monthlyDiff).toLocaleString()}원을 12개월로 환산하면 연 ${(Math.round(monthlyDiff)*12).toLocaleString()}원입니다.`;
  return `<strong>인상 효과:</strong> 세전 ${p}% 인상에서 실수령 기준으로는 인상분의 ${e}%가 실제로 반영됩니다. 비과세 수당(식대·차량보조금 등)을 활용하면 같은 연봉에서도 실수령을 더 높일 수 있습니다.`;
}
</script>
