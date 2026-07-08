---
layout: default
title: "양도소득세 계산기 2026 — 장기보유특별공제·중과 자동 반영"
description: "2026년 양도소득세 계산기. 장기보유특별공제 자동 계산, 1세대1주택 비과세, 다주택 중과, 비사업용 토지까지 반영한 참고용 계산기."
permalink: /realestate/capital-gains/
canonical: https://calculator.khaistory.com/realestate/capital-gains/
og_title: "양도소득세 계산기 2026 — 장특공제·중과 자동 반영"
og_description: "취득가·양도가·보유기간 입력 → 장기보유특별공제·누진세율 자동 계산. 1주택 비과세 체크."
---

<section class="cg-wrap">

  <div class="cg-notice">
    참고용 계산기입니다. 실제 양도세는 개별 조건에 따라 크게 달라지며, 정확한 세액은 홈택스 모의계산 또는 세무사를 통해 확인하세요.
  </div>

  <div class="cg-form">

    <div class="cg-row2">
      <div class="cg-field">
        <label>취득가액 (원)</label>
        <input type="text" id="cg-buy" inputmode="numeric" placeholder="예: 300,000,000" oninput="fmtCg(this)">
      </div>
      <div class="cg-field">
        <label>양도가액 (원)</label>
        <input type="text" id="cg-sell" inputmode="numeric" placeholder="예: 600,000,000" oninput="fmtCg(this)">
      </div>
    </div>

    <div class="cg-row2">
      <div class="cg-field">
        <label>필요경비 (원) <span class="cg-opt">선택</span></label>
        <input type="text" id="cg-expense" inputmode="numeric" placeholder="취득세·중개비·등기비 등" oninput="fmtCg(this)">
        <div class="cg-hint">취득세, 중개보수, 법무사비, 자본적 지출(확장공사 등)</div>
      </div>
      <div class="cg-field">
        <label>기본공제 (원)</label>
        <input type="text" id="cg-deduct" inputmode="numeric" placeholder="2,500,000" oninput="fmtCg(this)">
        <div class="cg-hint">일반적으로 연 250만원. 미등기·중과세 자산은 0원</div>
      </div>
    </div>

    <div class="cg-row2">
      <div class="cg-field">
        <label>보유기간 (년)</label>
        <input type="number" id="cg-years" placeholder="예: 5" min="0" max="50" step="0.5">
        <div class="cg-hint">장기보유특별공제 자동 계산에 사용됩니다</div>
      </div>
      <div class="cg-field">
        <label>거주기간 (년) <span class="cg-opt">1세대1주택 공제 적용 시</span></label>
        <input type="number" id="cg-live" placeholder="예: 3" min="0" max="50" step="0.5">
        <div class="cg-hint">1세대1주택 특례: 보유·거주 각 8% (최대 80%)</div>
      </div>
    </div>

    <!-- 특례·조건 -->
    <div class="cg-check-group">
      <label class="cg-check-title">특례 및 적용 조건</label>
      <div class="cg-checks">
        <label class="cg-check"><input type="checkbox" id="ck-1house"> 1세대 1주택 (비과세·특례 검토)</label>
        <label class="cg-check"><input type="checkbox" id="ck-multi"> 다주택 중과 가능성 (조정지역)</label>
        <label class="cg-check"><input type="checkbox" id="ck-unreg"> 미등기 양도 자산</label>
        <label class="cg-check"><input type="checkbox" id="ck-biz"> 비사업용 토지</label>
        <label class="cg-check"><input type="checkbox" id="ck-short1"> 1년 미만 보유</label>
        <label class="cg-check"><input type="checkbox" id="ck-short2"> 1년 이상 2년 미만 보유</label>
      </div>
    </div>

    <button class="cg-btn" onclick="calcCg()">양도소득세 계산하기</button>
  </div>

  <div id="cg-result" style="display:none" class="cg-result">

    <!-- 비과세 안내 -->
    <div id="cg-nontax-banner" style="display:none" class="cg-nontax-banner">
      <strong>1세대 1주택 비과세 가능성</strong><br>
      양도가액 12억원 이하 + 2년 이상 보유·거주 조건을 충족하면 비과세 대상일 수 있습니다.
      정확한 비과세 판단은 홈택스 또는 세무사를 통해 확인하세요.
    </div>

    <div class="cg-hero">
      <div class="cg-hero-label">예상 양도소득세 (지방소득세 포함)</div>
      <div class="cg-hero-num" id="cg-total">—</div>
      <div class="cg-hero-sub" id="cg-rate-label">—</div>
    </div>

    <div class="cg-detail-grid">
      <div class="cg-dcard"><div class="cg-dcard-label">양도차익</div><div class="cg-dcard-val" id="cd-gain">—</div></div>
      <div class="cg-dcard"><div class="cg-dcard-label">장기보유특별공제</div><div class="cg-dcard-val cg-green" id="cd-lthold">—</div></div>
      <div class="cg-dcard"><div class="cg-dcard-label">양도소득금액</div><div class="cg-dcard-val" id="cd-income">—</div></div>
      <div class="cg-dcard"><div class="cg-dcard-label">기본공제</div><div class="cg-dcard-val cg-green" id="cd-basic">—</div></div>
      <div class="cg-dcard"><div class="cg-dcard-label">과세표준</div><div class="cg-dcard-val" id="cd-base">—</div></div>
      <div class="cg-dcard"><div class="cg-dcard-label">산출세액</div><div class="cg-dcard-val" id="cd-gross-tax">—</div></div>
      <div class="cg-dcard"><div class="cg-dcard-label">지방소득세 (10%)</div><div class="cg-dcard-val" id="cd-local">—</div></div>
      <div class="cg-dcard cg-dcard-total"><div class="cg-dcard-label">최종 납부세액</div><div class="cg-dcard-val" id="cd-final">—</div></div>
    </div>

    <div class="cg-lthold-table">
      <div class="cg-lthold-title">장기보유특별공제율 (일반 주택·토지)</div>
      <div class="cg-lthold-row">
        <span>3년 이상</span><strong>6%</strong>
        <span>4년</span><strong>8%</strong>
        <span>5년</span><strong>10%</strong>
        <span>6년</span><strong>12%</strong>
        <span>7년</span><strong>14%</strong>
        <span>8년</span><strong>16%</strong>
        <span>9년</span><strong>18%</strong>
        <span>10년 이상</span><strong>20%</strong>
      </div>
      <div class="cg-hint" style="margin-top:6px">1세대1주택 특례: 보유 연 4% + 거주 연 4% (최대 각 40%, 합산 80%)</div>
    </div>

    <div class="cg-tip">
      <strong>필요경비로 세금을 줄일 수 있습니다</strong><br>
      취득세, 중개보수, 등기비용, 법무사 비용, 확장·리모델링 등 자본적 지출은 필요경비로 인정됩니다.
      영수증을 모아두면 양도차익이 줄어 세금이 낮아집니다. 단순 도배·장판·보일러 교체 등 수익적 지출은 불인정입니다.
    </div>

    <div class="cg-links">
      <a href="https://hometax.go.kr" target="_blank" class="cg-link-btn cg-link-ext">홈택스 모의계산 →</a>
      <a href="/realestate/acquisition-tax/" class="cg-link-btn cg-link-int">취득세 계산기</a>
    </div>
  </div>

  <nav class="cg-related">
    <a href="/realestate/">← 부동산 허브</a>
    <a href="/realestate/acquisition-tax/">취득세 계산기</a>
    <a href="/realestate/property-tax/">종부세 계산기</a>
    <a href="/realestate/rent-to-jeonse/">전세↔월세 전환</a>
  </nav>
</section>

<style>
.cg-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.cg-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.cg-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.cg-field{display:flex;flex-direction:column;gap:5px}
.cg-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.cg-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.cg-hint{font-size:.76rem;color:#9ca3af}
.cg-field input{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.cg-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.cg-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.cg-check-group{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:14px}
.cg-check-title{font-size:.85rem;font-weight:700;color:#3f2d20;display:block;margin-bottom:10px}
.cg-checks{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.cg-check{font-size:.85rem;color:#374151;display:flex;align-items:center;gap:6px;cursor:pointer}
.cg-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
.cg-btn:hover{background:#ea580c}
.cg-result{animation:cgFade .3s ease}
@keyframes cgFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.cg-nontax-banner{background:#e6f7ef;border:1px solid #a7f0c4;border-radius:10px;padding:12px 14px;font-size:.85rem;color:#15803d;margin-bottom:14px;line-height:1.6}
.cg-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;text-align:center;margin-bottom:14px}
.cg-hero-label{font-size:.85rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.cg-hero-num{font-size:2.2rem;font-weight:800;color:#c2410c}
.cg-hero-sub{font-size:.88rem;color:#8c7355;margin-top:4px}
.cg-detail-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.cg-dcard{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.cg-dcard-total{background:#fdf4ec;border-color:#f5dfd0}
.cg-dcard-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.cg-dcard-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.cg-green{color:#15803d}
.cg-dcard-total .cg-dcard-val{color:#c2410c}
.cg-lthold-table{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.cg-lthold-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.cg-lthold-row{display:flex;flex-wrap:wrap;gap:10px;font-size:.8rem;color:#374151}
.cg-lthold-row span{color:#9ca3af}
.cg-lthold-row strong{color:#c2410c;margin-left:2px}
.cg-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6;margin-bottom:14px}
.cg-tip strong{color:#3f2d20}
.cg-links{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.cg-link-btn{text-decoration:none;padding:11px 20px;border-radius:10px;font-size:.88rem;font-weight:700}
.cg-link-ext{background:#785a43;color:#fff}
.cg-link-int{background:#f6efe5;color:#785a43;border:1px solid #eaddcd}
.cg-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:8px}
.cg-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.cg-related a:hover{background:#f3e7d9}
@media(max-width:600px){.cg-row2{grid-template-columns:1fr}.cg-checks{grid-template-columns:1fr}.cg-detail-grid{grid-template-columns:1fr 1fr}.cg-hero-num{font-size:1.7rem}}
</style>

<script>
function fmtCg(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gC(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function ck(id){return document.getElementById(id).checked;}

function progressiveTax(base, extraRate){
  const r = extraRate||0;
  let t=0;
  if(base<=14000000)        t=base*0.06;
  else if(base<=50000000)   t=840000+(base-14000000)*0.15;
  else if(base<=88000000)   t=6240000+(base-50000000)*0.24;
  else if(base<=150000000)  t=15360000+(base-88000000)*0.35;
  else if(base<=300000000)  t=37060000+(base-150000000)*0.38;
  else if(base<=500000000)  t=94060000+(base-300000000)*0.40;
  else if(base<=1000000000) t=174060000+(base-500000000)*0.42;
  else                      t=384060000+(base-1000000000)*0.45;
  return Math.round(t + base*r);
}

function getLtholdRate(years, liveYears, is1house){
  const y=Math.floor(years);
  if(y<3) return 0;
  if(is1house){
    const holdR = Math.min(y*0.04, 0.40);
    const liveR = Math.min(Math.floor(liveYears||0)*0.04, 0.40);
    return holdR + liveR;
  }
  return Math.min(y*0.02, 0.30); // 일반: 2%씩 최대 30%
}

function calcCg(){
  const buy=gC('cg-buy'), sell=gC('cg-sell'), expense=gC('cg-expense'), deduct=gC('cg-deduct')||2500000;
  const years=parseFloat(document.getElementById('cg-years').value)||0;
  const live=parseFloat(document.getElementById('cg-live').value)||0;
  if(!buy||!sell) return;

  const is1house=ck('ck-1house'), isMulti=ck('ck-multi'), isUnreg=ck('ck-unreg');
  const isBiz=ck('ck-biz'), isShort1=ck('ck-short1'), isShort2=ck('ck-short2');

  // 비과세 배너
  const nontaxBanner = document.getElementById('cg-nontax-banner');
  nontaxBanner.style.display = (is1house && sell<=1200000000 && years>=2 && live>=2) ? '' : 'none';

  // 양도차익
  const gain = Math.max(0, sell - buy - expense);

  // 장기보유특별공제
  let ltRate = 0;
  if(!isUnreg && !isShort1 && !isShort2) {
    ltRate = getLtholdRate(years, live, is1house);
  }
  const lthold = Math.round(gain * ltRate);
  const incomeAmt = gain - lthold;
  const taxBase = Math.max(0, incomeAmt - deduct);

  // 세율 결정
  let extraRate = 0, rateLabel = '기본 누진세율';
  if(isUnreg)        { extraRate=0.10; rateLabel='미등기: 기본세율+10%p 중과'; }
  else if(isShort1)  { return fixedRateTax(taxBase, gain, lthold, deduct, 0.70, '1년 미만 70% 단일세율'); }
  else if(isShort2)  { return fixedRateTax(taxBase, gain, lthold, deduct, 0.60, '1년~2년 미만 60%'); }
  else if(isBiz)     { extraRate=0.10; rateLabel='비사업용 토지: 기본세율+10%p'; }
  else if(isMulti)   { extraRate=0.20; rateLabel='다주택 조정지역: 기본세율+20%p (참고)'; }

  const grossTax = progressiveTax(taxBase, extraRate);
  const localTax = Math.round(grossTax*0.10);
  const final = grossTax + localTax;

  showCgResult(gain, lthold, ltRate, incomeAmt, deduct, taxBase, grossTax, localTax, final, rateLabel);
}

function fixedRateTax(taxBase, gain, lthold, deduct, rate, label){
  const grossTax = Math.round(taxBase*rate);
  const localTax = Math.round(grossTax*0.10);
  const final = grossTax + localTax;
  const incomeAmt = gain - lthold;
  showCgResult(gain, lthold, 0, incomeAmt, deduct, taxBase, grossTax, localTax, final, label);
}

function showCgResult(gain,lthold,ltRate,incomeAmt,deduct,taxBase,grossTax,localTax,final,rateLabel){
  document.getElementById('cg-result').style.display='';
  document.getElementById('cg-total').textContent=fw(final);
  document.getElementById('cg-rate-label').textContent=rateLabel+(ltRate>0?' / 장특공제 '+(ltRate*100).toFixed(0)+'%':'');
  document.getElementById('cd-gain').textContent=fw(gain);
  document.getElementById('cd-lthold').textContent=lthold>0?'-'+fw(lthold):'미적용';
  document.getElementById('cd-income').textContent=fw(incomeAmt);
  document.getElementById('cd-basic').textContent='-'+fw(deduct);
  document.getElementById('cd-base').textContent=fw(taxBase);
  document.getElementById('cd-gross-tax').textContent=fw(grossTax);
  document.getElementById('cd-local').textContent=fw(localTax);
  document.getElementById('cd-final').textContent=fw(final);
}

// 기본 공제 250만원 자동 설정
document.addEventListener('DOMContentLoaded',()=>{
  const el=document.getElementById('cg-deduct');
  el.value='2,500,000'; el.dataset.raw='2500000';
});
</scri
