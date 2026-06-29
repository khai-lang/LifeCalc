---
layout: default
title: "실업급여 계산기 2026 — 수급액·수급기간 자동 계산"
description: "2026년 기준 실업급여(구직급여) 1일 수급액과 총 수급기간을 자동 계산합니다. 퇴직금 계산기와 연계해 퇴직 시 받을 수 있는 금액을 한번에 확인하세요."
permalink: /salary/unemployment/
canonical: https://calculator.khaistory.com/salary/unemployment/
og_title: "실업급여 계산기 2026 — 수급액·기간 자동 계산"
og_description: "2026년 실업급여 하한액 66,048원 기준. 수급기간·총액·퇴직금 연계 계산."
---

<section class="ue-wrap">

  <div class="ue-notice">
    실업급여(구직급여)는 <strong>비자발적 퇴사</strong>(권고사직·계약만료·경영상 해고 등)이고 고용보험 가입기간이 180일 이상인 경우 수급 가능합니다.
    본 계산기는 모의 계산으로 실제 수급액과 차이가 있을 수 있습니다.
  </div>

  <!-- 탭 -->
  <nav class="ue-tabs">
    <button class="ue-tab active" onclick="ueTab('calc')">실업급여 계산</button>
    <button class="ue-tab" onclick="ueTab('set')">퇴직 패키지 세트</button>
    <button class="ue-tab" onclick="ueTab('info')">수급 조건 안내</button>
  </nav>

  <!-- ① 실업급여 계산 -->
  <div id="ue-calc" class="ue-panel">
    <div class="ue-form">
      <div class="ue-row2">
        <div class="ue-field">
          <label>퇴직 전 3개월 평균 월급 (세전, 원)</label>
          <input type="text" id="ue-salary" inputmode="numeric"
                 placeholder="예: 3,500,000" oninput="fmtUe(this)">
          <div class="ue-hint">상여·수당 포함 전체 지급액</div>
        </div>
        <div class="ue-field">
          <label>1일 소정근로시간 (시간)</label>
          <select id="ue-hours">
            <option value="8">8시간 (전일제)</option>
            <option value="7">7시간</option>
            <option value="6">6시간</option>
            <option value="5">5시간</option>
            <option value="4">4시간 이하</option>
          </select>
        </div>
      </div>
      <div class="ue-row2">
        <div class="ue-field">
          <label>고용보험 가입기간</label>
          <select id="ue-insure">
            <option value="0">180일 미만 (수급 불가)</option>
            <option value="1">180일~1년 미만</option>
            <option value="2">1년~3년 미만</option>
            <option value="3">3년~5년 미만</option>
            <option value="4">5년~10년 미만</option>
            <option value="5">10년 이상</option>
          </select>
        </div>
        <div class="ue-field">
          <label>퇴직 시 만 나이</label>
          <select id="ue-age">
            <option value="young">50세 미만</option>
            <option value="old">50세 이상 또는 장애인</option>
          </select>
        </div>
      </div>
      <button class="ue-btn" onclick="calcUe()">실업급여 계산하기</button>
    </div>

    <div id="ue-result" style="display:none" class="ue-result">
      <div id="ue-ineligible" class="ue-ineligible" style="display:none">
        <strong>고용보험 가입기간 180일 미만</strong>으로 실업급여 수급 대상이 아닙니다.<br>
        가입기간을 채운 뒤 퇴직하거나, 고용센터에서 정확한 자격 여부를 확인하세요.
      </div>

      <div id="ue-eligible" style="display:none">
        <!-- 히어로 -->
        <div class="ue-hero">
          <div class="ue-hero-col">
            <div class="ue-hero-label">1일 수급액</div>
            <div class="ue-hero-num" id="ue-daily">—</div>
          </div>
          <div class="ue-hero-mul">×</div>
          <div class="ue-hero-col">
            <div class="ue-hero-label">수급일수</div>
            <div class="ue-hero-num" id="ue-days">—일</div>
          </div>
          <div class="ue-hero-mul">=</div>
          <div class="ue-hero-col">
            <div class="ue-hero-label">총 수급액 (예상)</div>
            <div class="ue-hero-num ue-total-color" id="ue-total">—</div>
          </div>
        </div>

        <!-- 상세 카드 -->
        <div class="ue-cards">
          <div class="ue-card">
            <div class="ue-card-label">평균임금 (1일)</div>
            <div class="ue-card-val" id="ue-avg-daily">—</div>
          </div>
          <div class="ue-card">
            <div class="ue-card-label">구직급여일액 (60%)</div>
            <div class="ue-card-val" id="ue-benefit">—</div>
          </div>
          <div class="ue-card">
            <div class="ue-card-label">2026년 하한액</div>
            <div class="ue-card-val">66,048원</div>
          </div>
          <div class="ue-card">
            <div class="ue-card-label">2026년 상한액</div>
            <div class="ue-card-val">66,000원</div>
          </div>
        </div>

        <div class="ue-period-box">
          <div class="ue-period-title">소정급여일수 (가입기간 × 연령 기준)</div>
          <div id="ue-period-detail"></div>
        </div>

        <div class="ue-monthly-box">
          <div class="ue-monthly-title">월별 수령 예상 스케줄</div>
          <div class="ue-monthly-grid" id="ue-monthly-grid"></div>
          <div class="ue-hint" style="margin-top:8px">실업급여는 4주(28일)마다 신청·지급됩니다. 구직활동 실적이 없으면 지급이 중단될 수 있습니다.</div>
        </div>

        <div class="ue-tip">
          <strong>수급 중 주의사항</strong><br>
          실업급여 수급 중 취업하거나 일용직 소득이 발생하면 고용센터에 신고해야 합니다.
          이직일 다음 날부터 12개월 이내에 소정급여일수를 모두 받아야 하며, 기간이 지나면 남은 일수는 소멸됩니다.
        </div>
      </div>
    </div>
  </div>

  <!-- ② 퇴직 패키지 세트 -->
  <div id="ue-set" class="ue-panel" style="display:none">
    <div class="ue-set-notice">
      퇴직 시 받을 수 있는 <strong>퇴직금 + 실업급여</strong>를 한번에 계산합니다.
    </div>
    <div class="ue-form">
      <div class="ue-row3">
        <div class="ue-field">
          <label>월 급여 (최근 3개월 평균, 세전)</label>
          <input type="text" id="set-salary" inputmode="numeric" placeholder="예: 3,500,000" oninput="fmtUe(this)">
        </div>
        <div class="ue-field">
          <label>재직기간 (년)</label>
          <input type="number" id="set-years" placeholder="예: 5" min="0" step="0.5">
        </div>
        <div class="ue-field">
          <label>고용보험 가입기간</label>
          <select id="set-insure">
            <option value="0">180일 미만</option>
            <option value="1">180일~1년</option>
            <option value="2">1년~3년</option>
            <option value="3">3년~5년</option>
            <option value="4">5년~10년</option>
            <option value="5">10년 이상</option>
          </select>
        </div>
      </div>
      <div class="ue-row2">
        <div class="ue-field">
          <label>1일 소정근로시간</label>
          <select id="set-hours">
            <option value="8">8시간 (전일제)</option>
            <option value="7">7시간</option>
            <option value="6">6시간</option>
          </select>
        </div>
        <div class="ue-field">
          <label>퇴직 시 만 나이</label>
          <select id="set-age">
            <option value="young">50세 미만</option>
            <option value="old">50세 이상 / 장애인</option>
          </select>
        </div>
      </div>
      <button class="ue-btn" onclick="calcSet()">퇴직 패키지 계산하기</button>
    </div>

    <div id="set-result" style="display:none" class="ue-result">
      <div class="ue-set-grid">
        <div class="ue-set-card ue-set-ret">
          <div class="ue-set-icon">💼</div>
          <div class="ue-set-label">퇴직금 (세전)</div>
          <div class="ue-set-val" id="set-ret-gross">—</div>
          <div class="ue-set-sub" id="set-ret-net">세후: —</div>
        </div>
        <div class="ue-set-plus">+</div>
        <div class="ue-set-card ue-set-ue">
          <div class="ue-set-icon">📋</div>
          <div class="ue-set-label">실업급여 (총액)</div>
          <div class="ue-set-val" id="set-ue-total">—</div>
          <div class="ue-set-sub" id="set-ue-days">수급일수: —일</div>
        </div>
        <div class="ue-set-plus">=</div>
        <div class="ue-set-card ue-set-total">
          <div class="ue-set-icon">✓</div>
          <div class="ue-set-label">퇴직 시 총 수령 예상</div>
          <div class="ue-set-val" id="set-grand-total">—</div>
          <div class="ue-set-sub">퇴직금 세후 + 실업급여</div>
        </div>
      </div>
      <div class="ue-tip" style="margin-top:14px">
        <strong>IRP 활용 팁:</strong> 퇴직금을 IRP로 받으면 퇴직소득세를 연금 수령 시점으로 이연할 수 있고,
        연금으로 나눠 받으면 30~40% 세금 감면 혜택이 있습니다.
        <a href="/salary/retirement/" style="color:#c2410c">→ 퇴직금 상세 계산기</a>
      </div>
    </div>
  </div>

  <!-- ③ 수급 조건 -->
  <div id="ue-info" class="ue-panel" style="display:none">
    <div class="ue-info-cards">
      <div class="ue-info-card">
        <div class="ue-info-card-title">✅ 수급 가능 조건</div>
        <ul>
          <li>고용보험 피보험자격 <strong>180일 이상</strong> 가입</li>
          <li><strong>비자발적 퇴사</strong> (권고사직, 계약만료, 경영상 해고, 사업장 이전 등)</li>
          <li>적극적인 <strong>재취업 활동</strong>을 하고 있을 것</li>
          <li>이직일 다음날부터 <strong>12개월 이내</strong> 신청</li>
        </ul>
      </div>
      <div class="ue-info-card">
        <div class="ue-info-card-title">❌ 수급 불가 조건</div>
        <ul>
          <li>자발적 퇴사 (단, 정당한 사유 있으면 예외)</li>
          <li>본인 귀책 사유로 해고</li>
          <li>고용보험 가입기간 180일 미만</li>
          <li>사업 개시(자영업 등)</li>
        </ul>
      </div>
    </div>
    <div class="ue-period-table-wrap">
      <div class="ue-info-card-title" style="margin-bottom:10px">소정급여일수 표</div>
      <div class="ue-table-scroll">
        <table class="ue-info-table">
          <thead>
            <tr><th>가입기간</th><th>50세 미만</th><th>50세 이상·장애인</th></tr>
          </thead>
          <tbody>
            <tr><td>180일~1년</td><td>120일</td><td>120일</td></tr>
            <tr><td>1년~3년</td><td>150일</td><td>180일</td></tr>
            <tr><td>3년~5년</td><td>180일</td><td>210일</td></tr>
            <tr><td>5년~10년</td><td>210일</td><td>240일</td></tr>
            <tr><td>10년 이상</td><td>240일</td><td>270일</td></tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="ue-tip" style="margin-top:14px">
      <strong>2026년 실업급여 주요 수치</strong><br>
      하한액: 최저시급(10,320원) × 80% × 소정근로시간(8h) = <strong>66,048원/일</strong><br>
      상한액: <strong>66,000원/일</strong> (하한액보다 낮은 경우 하한액 적용)<br>
      지급주기: 4주(28일)마다 신청 → 인정 후 지급
    </div>
  </div>

  <nav class="ue-related">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기</a>
    <a href="/salary/raise/">연봉인상 시뮬레이터</a>
  </nav>

</section>

<style>
.ue-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.ue-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.ue-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px;flex-wrap:wrap}
.ue-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s}
.ue-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.ue-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.ue-field{display:flex;flex-direction:column;gap:5px}
.ue-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.ue-hint{font-size:.76rem;color:#9ca3af}
.ue-field input,.ue-field select{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.ue-field input:focus,.ue-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.ue-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ue-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.ue-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%;transition:background .15s}
.ue-btn:hover{background:#ea580c}
.ue-result{animation:ueFade .3s ease}
@keyframes ueFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.ue-ineligible{background:#fcebeb;border:1px solid #f7c1c1;border-radius:10px;padding:14px 16px;color:#a32d2d;font-size:.88rem;line-height:1.6}
.ue-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:14px;flex-wrap:wrap}
.ue-hero-col{text-align:center;flex:1;min-width:100px}
.ue-hero-label{font-size:.76rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.ue-hero-num{font-size:1.4rem;font-weight:800;color:#3f2d20}
.ue-total-color{color:#c2410c}
.ue-hero-mul{font-size:1.4rem;color:#eaddcd;font-weight:700;flex-shrink:0}
.ue-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.ue-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.ue-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.ue-card-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.ue-period-box,.ue-monthly-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.ue-period-title,.ue-monthly-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.ue-monthly-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.ue-monthly-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:8px;text-align:center}
.ue-monthly-label{font-size:.72rem;color:#9ca3af;margin-bottom:3px}
.ue-monthly-val{font-size:.88rem;font-weight:700;color:#c2410c}
.ue-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6}
.ue-tip strong{color:#3f2d20}
/* 세트 */
.ue-set-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:16px}
.ue-set-grid{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.ue-set-card{flex:1;min-width:160px;border-radius:14px;padding:16px;text-align:center}
.ue-set-ret{background:#faf7f2;border:1px solid #eaddcd}
.ue-set-ue{background:#fdf4ec;border:1px solid #f5dfd0}
.ue-set-total{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5}
.ue-set-icon{font-size:1.4rem;margin-bottom:4px}
.ue-set-label{font-size:.75rem;color:#9ca3af;margin-bottom:6px}
.ue-set-val{font-size:1.3rem;font-weight:800;color:#c2410c}
.ue-set-sub{font-size:.76rem;color:#9ca3af;margin-top:4px}
.ue-set-plus{font-size:1.5rem;color:#eaddcd;font-weight:700;flex-shrink:0}
/* 정보 탭 */
.ue-info-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}
.ue-info-card{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px}
.ue-info-card-title{font-size:.9rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.ue-info-card ul{padding-left:18px;font-size:.85rem;color:#374151}
.ue-info-card li{margin-bottom:6px}
.ue-table-scroll{overflow-x:auto}
.ue-info-table{width:100%;border-collapse:collapse;font-size:.88rem}
.ue-info-table th{background:#f6efe5;padding:9px 14px;font-weight:700;color:#4a3728;text-align:center;border:1px solid #eae1d4}
.ue-info-table td{padding:9px 14px;text-align:center;border:1px solid #eae1d4;color:#374151}
.ue-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:28px}
.ue-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ue-related a:hover{background:#f3e7d9}
@media(max-width:600px){
  .ue-row2,.ue-row3{grid-template-columns:1fr}
  .ue-cards{grid-template-columns:1fr 1fr}
  .ue-monthly-grid{grid-template-columns:repeat(3,1fr)}
  .ue-info-cards{grid-template-columns:1fr}
  .ue-hero{gap:6px}
  .ue-hero-num{font-size:1.1rem}
  .ue-set-grid{flex-direction:column}
  .ue-set-plus{transform:rotate(90deg)}
}
</style>

<script>
const MIN_WAGE_2026=10320;
const UE_LOWER=Math.round(MIN_WAGE_2026*0.8*8); // 66,048원
const UE_UPPER=66000;

/* 소정급여일수 테이블 */
const UE_DAYS={
  1:{young:120,old:120},
  2:{young:150,old:180},
  3:{young:180,old:210},
  4:{young:210,old:240},
  5:{young:240,old:270}
};

function fmtUe(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gU(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}

function ueTab(t){
  ['calc','set','info'].forEach(x=>{document.getElementById('ue-'+x).style.display=x===t?'':'none';});
  document.querySelectorAll('.ue-tab').forEach((b,i)=>b.classList.toggle('active',['calc','set','info'][i]===t));
}

function calcDailyBenefit(monthlySalary, hoursPerDay){
  // 1일 평균임금 = 월급 × 3 ÷ 92
  const daily3m=Math.round(monthlySalary*3/92);
  // 구직급여일액 = 평균임금의 60%
  const benefit=Math.round(daily3m*0.6);
  // 상·하한 적용
  const hoursRate=hoursPerDay/8;
  const lowerAdj=Math.round(UE_LOWER*hoursRate);
  const upperAdj=Math.round(UE_UPPER*hoursRate);
  const final=Math.max(lowerAdj,Math.min(upperAdj,benefit));
  return {daily3m, benefit, final, lowerAdj, upperAdj};
}

function calcUe(){
  const salary=gU('ue-salary');
  const insure=parseInt(document.getElementById('ue-insure').value);
  const age=document.getElementById('ue-age').value;
  const hours=parseInt(document.getElementById('ue-hours').value);
  if(!salary) return;

  document.getElementById('ue-result').style.display='';

  if(insure===0){
    document.getElementById('ue-ineligible').style.display='';
    document.getElementById('ue-eligible').style.display='none';
    return;
  }
  document.getElementById('ue-ineligible').style.display='none';
  document.getElementById('ue-eligible').style.display='';

  const {daily3m,benefit,final}=calcDailyBenefit(salary,hours);
  const days=UE_DAYS[insure][age];
  const total=final*days;

  document.getElementById('ue-daily').textContent=fw(final);
  document.getElementById('ue-days').textContent=days+'일';
  document.getElementById('ue-total').textContent=fw(total);
  document.getElementById('ue-avg-daily').textContent=fw(daily3m);
  document.getElementById('ue-benefit').textContent=fw(benefit);

  const insureLabels=['','180일~1년','1년~3년','3년~5년','5년~10년','10년 이상'];
  const ageLabel=age==='old'?'50세 이상':'50세 미만';
  document.getElementById('ue-period-detail').innerHTML=
    `<span style="font-size:.85rem;color:#374151">가입기간 <strong>${insureLabels[insure]}</strong> · ${ageLabel} → <strong>${days}일</strong></span>`;

  // 월별 스케줄 (28일 단위)
  const chunks=Math.ceil(days/28);
  let html='',remain=days;
  for(let i=0;i<chunks;i++){
    const d=Math.min(28,remain);
    html+=`<div class="ue-monthly-item">
      <div class="ue-monthly-label">${i+1}차 신청</div>
      <div class="ue-monthly-val">${fw(final*d)}</div>
    </div>`;
    remain-=d;
  }
  document.getElementById('ue-monthly-grid').innerHTML=html;
}

/* 퇴직소득세 근사 (retirement 계산기와 동일) */
function calcRetTax(gross,yrs){
  const y=Math.max(1,Math.floor(yrs));
  let td=y<=5?y*1000000:y<=10?5000000+(y-5)*2000000:y<=20?15000000+(y-10)*2500000:40000000+(y-20)*3000000;
  const ri=Math.max(0,gross-td);
  const ann=ri/y*12;
  let ad=ann<=8000000?ann:ann<=70000000?8000000+(ann-8000000)*.6:ann<=140000000?45200000+(ann-70000000)*.55:ann<=300000000?83700000+(ann-140000000)*.45:155700000+(ann-300000000)*.35;
  const tb=Math.max(0,ann-ad);
  let t=tb<=14000000?tb*.06:tb<=50000000?840000+(tb-14000000)*.15:tb<=88000000?6240000+(tb-50000000)*.24:tb<=150000000?15360000+(tb-88000000)*.35:37060000+(tb-150000000)*.38;
  return Math.max(0,Math.round(t/12*y));
}

function calcSet(){
  const salary=gU('set-salary');
  const years=parseFloat(document.getElementById('set-years').value)||0;
  const insure=parseInt(document.getElementById('set-insure').value);
  const age=document.getElementById('set-age').value;
  const hours=parseInt(document.getElementById('set-hours').value);
  if(!salary||years<1) return;

  // 퇴직금
  const daily=salary*3/92;
  const retGross=Math.round(daily*30*(years*365/365));
  const retTax=calcRetTax(retGross,years);
  const retNet=retGross-retTax-Math.round(retTax*.1);

  // 실업급여
  let ueTotal=0,ueDays=0;
  if(insure>0){
    const {final}=calcDailyBenefit(salary,hours);
    ueDays=UE_DAYS[insure][age];
    ueTotal=final*ueDays;
  }

  const grand=retNet+ueTotal;

  document.getElementById('set-result').style.display='';
  document.getElementById('set-ret-gross').textContent=fw(retGross);
  document.getElementById('set-ret-net').textContent='세후: '+fw(Math.max(0,retNet));
  document.getElementById('set-ue-total').textContent=insure>0?fw(ueTotal):'수급 불가';
  document.getElementById('set-ue-days').textContent='수급일수: '+(insure>0?ueDays+'일':'—');
  document.getElementById('set-grand-total').textContent=fw(grand);
}
</script>
