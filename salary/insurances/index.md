---
layout: default
title: "4대보험 계산기 2026 — 근로자·사업주 부담액 + 총인건비 역계산"
description: "2026년 4대보험 요율(국민연금 4.75%, 건강보험 3.595%) 기준. 근로자·사업주 부담액 동시 계산 + 목표 실수령액으로 세전 월급·사업주 총인건비를 역산합니다."
permalink: /salary/insurances/
canonical: https://calculator.khaistory.com/salary/insurances/
og_title: "4대보험 계산기 2026 — 부담액 계산 + 총인건비 역산"
og_description: "2026년 최신 요율. 근로자·사업주 4대보험 동시 계산 + 목표 실수령→세전 월급·총인건비 역산."
---

<section class="ins-wrap">

  <div class="ins-notice">
    2026년 4대보험 요율 기준 안내용 계산기입니다.
    산재보험은 업종별로 다르며 전액 사업주 부담이라 제외했습니다.
  </div>

  <!-- 탭 -->
  <nav class="ins-tabs">
    <button class="ins-tab active" onclick="insTab('calc')">4대보험 계산</button>
    <button class="ins-tab" onclick="insTab('reverse')">총인건비 역산 <span class="ins-tab-new">HR</span></button>
  </nav>

  <!-- ① 4대보험 계산 -->
  <div id="ins-panel-calc" class="ins-panel">
    <div class="ins-form">
      <div class="ins-field">
        <label for="ins-salary">월 급여 (세전, 원)</label>
        <input type="text" id="ins-salary" inputmode="numeric" placeholder="예: 3,500,000"
               oninput="fmtIns(this)" onkeyup="if(event.key==='Enter') calcIns()">
      </div>
      <div class="ins-field">
        <label for="ins-nontax">비과세 급여 (월, 원) <span class="ins-opt">선택 — 식대 등</span></label>
        <input type="text" id="ins-nontax" inputmode="numeric" placeholder="예: 200,000"
               oninput="fmtIns(this)" onkeyup="if(event.key==='Enter') calcIns()">
        <div class="ins-hint">비과세액은 건강보험·고용보험 산정 기준에서 제외됩니다 (국민연금은 포함)</div>
      </div>

      <details class="ins-rates-toggle">
        <summary>요율 직접 수정 (2026년 기본값 자동 적용)</summary>
        <div class="ins-rates-grid">
          <div class="ins-rate-row">
            <span class="ins-rate-name">국민연금</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>근로자 %</label><input type="number" id="r-nps-ee" value="4.75" step="0.01"></div>
              <div class="ins-rf"><label>사업주 %</label><input type="number" id="r-nps-er" value="4.75" step="0.01"></div>
            </div>
            <div class="ins-hint">상한: 월 기준소득 637만원</div>
          </div>
          <div class="ins-rate-row">
            <span class="ins-rate-name">건강보험</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>근로자 %</label><input type="number" id="r-hi-ee" value="3.595" step="0.001"></div>
              <div class="ins-rf"><label>사업주 %</label><input type="number" id="r-hi-er" value="3.595" step="0.001"></div>
            </div>
          </div>
          <div class="ins-rate-row">
            <span class="ins-rate-name">장기요양</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>건보료의 %</label><input type="number" id="r-ltc" value="13.14" step="0.01"></div>
              <div class="ins-rf"><label></label><div class="ins-hint" style="margin-top:8px">근로자·사업주 각각 동일 비율</div></div>
            </div>
          </div>
          <div class="ins-rate-row">
            <span class="ins-rate-name">고용보험</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>근로자 %</label><input type="number" id="r-ei-ee" value="0.9" step="0.01"></div>
              <div class="ins-rf"><label>사업주 %</label><input type="number" id="r-ei-er" value="1.15" step="0.01"></div>
            </div>
            <div class="ins-hint">사업주: 실업급여 0.9% + 고용안정·직업능력개발 0.25%</div>
          </div>
        </div>
      </details>

      <button class="ins-btn" onclick="calcIns()">4대보험 계산하기</button>
    </div>

    <div id="ins-result" style="display:none" class="ins-result">
      <div class="ins-result-header" id="ins-result-header"></div>
      <div class="ins-compare-wrap">
        <table class="ins-table">
          <thead>
            <tr>
              <th>항목</th>
              <th class="ee-col">근로자 부담</th>
              <th class="er-col">사업주 부담</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody id="ins-tbody"></tbody>
          <tfoot id="ins-tfoot"></tfoot>
        </table>
      </div>
      <div class="ins-summary-grid">
        <div class="ins-scard ins-scard-ee">
          <div class="ins-scard-label">근로자 월 공제 합계</div>
          <div class="ins-scard-val" id="ins-ee-total">—</div>
          <div class="ins-scard-pct" id="ins-ee-pct">—</div>
        </div>
        <div class="ins-scard ins-scard-er">
          <div class="ins-scard-label">사업주 월 부담 합계</div>
          <div class="ins-scard-val" id="ins-er-total">—</div>
          <div class="ins-scard-pct" id="ins-er-pct">—</div>
        </div>
        <div class="ins-scard ins-scard-total">
          <div class="ins-scard-label">국가 전체 납입액 (월)</div>
          <div class="ins-scard-val" id="ins-all-total">—</div>
          <div class="ins-scard-sub">근로자 + 사업주</div>
        </div>
      </div>
      <div class="ins-annual-box">
        <strong>연간 환산</strong>
        <div class="ins-annual-grid" id="ins-annual-grid"></div>
      </div>
      <div class="ins-tip">
        <strong>알아두면 좋은 점</strong><br>
        국민연금은 월 기준소득월액 <strong>637만원</strong>이 상한이라 이 이상 급여를 받아도 공제액이 늘지 않습니다.
        장기요양보험은 건강보험료에 13.14%를 곱한 금액으로, 급여가 높아질수록 함께 올라갑니다.
      </div>
    </div>
  </div>

  <!-- ② 총인건비 역산 -->
  <div id="ins-panel-reverse" class="ins-panel" style="display:none">

    <div class="ins-rev-notice">
      <strong>어떤 상황에 유용한가요?</strong><br>
      · <strong>HR 담당자·사업주</strong> — 직원에게 실수령 N만원을 주려면 세전 얼마를 책정해야 하는지, 회사가 실제로 부담하는 총인건비는 얼마인지 한 번에 확인<br>
      · <strong>구직자·이직 협상</strong> — "세후 350만원 받고 싶다"는 목표에서 제시해야 할 세전 연봉 계산
    </div>

    <div class="ins-form">
      <div class="ins-field">
        <label for="rv-target">목표 월 실수령액 (원)</label>
        <input type="text" id="rv-target" inputmode="numeric" placeholder="예: 3,000,000"
               oninput="fmtIns(this)">
        <div class="ins-hint">4대보험만 공제 기준입니다. 소득세까지 포함한 역계산은 연봉 실수령 계산기를 이용하세요.</div>
      </div>
      <div class="ins-field">
        <label for="rv-nontax">비과세 수당 (월, 원) <span class="ins-opt">선택 — 식대 등</span></label>
        <input type="text" id="rv-nontax" inputmode="numeric" placeholder="예: 200,000"
               oninput="fmtIns(this)">
      </div>
      <button class="ins-btn" onclick="calcReverse()">세전 월급·총인건비 계산하기</button>
    </div>

    <div id="rv-result" style="display:none" class="ins-result">

      <!-- 히어로: 3단 -->
      <div class="rv-hero">
        <div class="rv-hero-col">
          <div class="rv-hero-label">목표 실수령</div>
          <div class="rv-hero-num rv-target-color" id="rv-h-target">—</div>
        </div>
        <div class="rv-hero-arrow">
          <div class="rv-arrow-head">←</div>
          <div class="rv-arrow-sub">4대보험 공제</div>
        </div>
        <div class="rv-hero-col">
          <div class="rv-hero-label">필요 세전 월급</div>
          <div class="rv-hero-num rv-gross-color" id="rv-h-gross">—</div>
        </div>
        <div class="rv-hero-plus">+</div>
        <div class="rv-hero-col">
          <div class="rv-hero-label">사업주 추가 부담</div>
          <div class="rv-hero-num rv-er-color" id="rv-h-er">—</div>
        </div>
        <div class="rv-hero-eq">=</div>
        <div class="rv-hero-col rv-hero-col-total">
          <div class="rv-hero-label">사업주 총인건비</div>
          <div class="rv-hero-num rv-total-color" id="rv-h-total">—</div>
          <div class="rv-hero-sub">월 기준</div>
        </div>
      </div>

      <!-- 상세 내역 -->
      <div class="ins-compare-wrap">
        <table class="ins-table">
          <thead>
            <tr>
              <th>항목</th>
              <th class="ee-col">근로자 공제</th>
              <th class="er-col">사업주 추가 부담</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody id="rv-tbody"></tbody>
          <tfoot id="rv-tfoot"></tfoot>
        </table>
      </div>

      <!-- 4단 카드 -->
      <div class="rv-cards">
        <div class="rv-card">
          <div class="rv-card-label">필요 세전 월급</div>
          <div class="rv-card-val rv-gross-color" id="rv-c-gross">—</div>
          <div class="rv-card-sub" id="rv-c-annual">연봉: —</div>
        </div>
        <div class="rv-card rv-card-ee">
          <div class="rv-card-label">근로자 4대보험 공제</div>
          <div class="rv-card-val" id="rv-c-ee">—</div>
          <div class="rv-card-sub" id="rv-c-ee-pct">월급의 —%</div>
        </div>
        <div class="rv-card rv-card-er">
          <div class="rv-card-label">사업주 4대보험 부담</div>
          <div class="rv-card-val" id="rv-c-er">—</div>
          <div class="rv-card-sub" id="rv-c-er-pct">월급의 —%</div>
        </div>
        <div class="rv-card rv-card-total">
          <div class="rv-card-label">사업주 월 총인건비</div>
          <div class="rv-card-val rv-total-color" id="rv-c-total">—</div>
          <div class="rv-card-sub" id="rv-c-total-annual">연간: —</div>
        </div>
      </div>

      <!-- 연간 비교 -->
      <div class="rv-annual-box">
        <div class="rv-annual-title">연간 환산 비교</div>
        <div class="rv-annual-grid">
          <div class="rv-annual-item">
            <div class="rv-annual-label">직원 연봉 (세전)</div>
            <div class="rv-annual-val" id="rv-a-gross">—</div>
          </div>
          <div class="rv-annual-item">
            <div class="rv-annual-label">직원 연 실수령</div>
            <div class="rv-annual-val" id="rv-a-net">—</div>
          </div>
          <div class="rv-annual-item">
            <div class="rv-annual-label">사업주 연 총인건비</div>
            <div class="rv-annual-val rv-total-color" id="rv-a-total">—</div>
          </div>
        </div>
      </div>

      <div class="ins-tip">
        <strong>총인건비 = 세전 월급 + 사업주 4대보험 부담분</strong><br>
        직원에게 지급하는 세전 월급 외에도 사업주는 4대보험 사업주 부담분을 별도로 납부합니다.
        실제 고용 비용은 세전 월급보다 약 <strong>10~12%</strong> 더 높습니다.
        소득세까지 포함한 정확한 실수령 역계산은
        <a href="/salary/net-pay/" style="color:#c2410c">연봉 실수령 계산기 역계산 탭</a>을 이용하세요.
      </div>
    </div>
  </div>

  <nav class="ins-related">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기 (역계산 포함)</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
  </nav>

</section>

<style>
.ins-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.ins-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}

/* 탭 */
.ins-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px}
.ins-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s;display:flex;align-items:center;gap:6px}
.ins-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.ins-tab:hover:not(.active){color:#3f2d20}
.ins-tab-new{font-size:10px;background:#1f5c7a;color:#fff;border-radius:20px;padding:1px 6px;font-weight:700;letter-spacing:.03em}

/* 역계산 안내 박스 */
.ins-rev-notice{background:#f0f7fb;border:1px solid #c8dff0;border-radius:10px;padding:12px 14px;font-size:.83rem;color:#1f4f6a;margin-bottom:20px;line-height:1.7}
.ins-rev-notice strong{color:#13293d}

/* 폼 공통 */
.ins-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.ins-field{display:flex;flex-direction:column;gap:5px}
.ins-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.ins-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.ins-hint{font-size:.76rem;color:#9ca3af;line-height:1.5}
.ins-field input[type="text"],.ins-field input[type="number"]{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.ins-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}

/* 요율 토글 */
.ins-rates-toggle{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px}
.ins-rates-toggle summary{font-size:.85rem;color:#8c7355;cursor:pointer;font-weight:600;list-style:none}
.ins-rates-toggle summary::-webkit-details-marker{display:none}
.ins-rates-toggle summary::before{content:'▸ '}
.ins-rates-toggle[open] summary::before{content:'▾ '}
.ins-rates-grid{display:flex;flex-direction:column;gap:12px;margin-top:12px}
.ins-rate-row{padding:10px;background:#fff;border-radius:8px;border:1px solid #f1eae1}
.ins-rate-name{font-size:.85rem;font-weight:700;color:#3f2d20;display:block;margin-bottom:8px}
.ins-rate-pair{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:4px}
.ins-rf{display:flex;flex-direction:column;gap:4px}
.ins-rf label{font-size:.76rem;color:#9ca3af}
.ins-rf input{border:1px solid #ddd4c8;border-radius:6px;padding:6px 8px;font-size:.88rem;font-family:inherit;width:100%;box-sizing:border-box}

/* 버튼 */
.ins-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px 24px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s,transform .1s;width:100%}
.ins-btn:hover{background:#ea580c;transform:translateY(-1px)}

/* 결과 공통 */
.ins-result{animation:insFadeIn .3s ease}
@keyframes insFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

.ins-result-header{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:12px;padding:14px 18px;font-size:.88rem;color:#8c7355;margin-bottom:14px}
.ins-result-header strong{color:#3f2d20;font-size:1.1rem}

.ins-compare-wrap{overflow-x:auto;border-radius:12px;border:1px solid #f1eae1;margin-bottom:14px}
.ins-table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:420px}
.ins-table th{background:#f6efe5;padding:10px 14px;font-weight:700;color:#4a3728;text-align:right}
.ins-table th:first-child{text-align:left}
.ins-table td{padding:9px 14px;text-align:right;border-top:1px solid #f5f0eb}
.ins-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}
.ins-table tfoot td{background:#faf7f2;font-weight:700;border-top:2px solid #eaddcd}
.ee-col{color:#c2410c!important}
.er-col{color:#785a43!important}
.ins-table .ee-val{color:#c2410c;font-weight:700}
.ins-table .er-val{color:#785a43;font-weight:700}
.ins-table .sum-val{color:#3f2d20}

.ins-summary-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px}
.ins-scard{border-radius:12px;padding:14px 16px;text-align:center}
.ins-scard-ee{background:#fdf4ec;border:1px solid #f5dfd0}
.ins-scard-er{background:#f7f2ed;border:1px solid #eaddcd}
.ins-scard-total{background:#faf7f2;border:1px solid #eaddcd}
.ins-scard-label{font-size:.76rem;color:#9ca3af;margin-bottom:4px}
.ins-scard-val{font-size:1.2rem;font-weight:800;color:#3f2d20}
.ins-scard-ee .ins-scard-val{color:#c2410c}
.ins-scard-er .ins-scard-val{color:#785a43}
.ins-scard-pct{font-size:.78rem;color:#9ca3af;margin-top:2px}
.ins-scard-sub{font-size:.76rem;color:#9ca3af}

.ins-annual-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.ins-annual-box strong{font-size:.85rem;color:#3f2d20;display:block;margin-bottom:8px}
.ins-annual-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:.83rem}
.ins-annual-item{text-align:center}
.ins-annual-label{color:#9ca3af;margin-bottom:2px}
.ins-annual-val{font-weight:700;color:#3f2d20}

.ins-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6;margin-bottom:14px}
.ins-tip strong{color:#3f2d20}

/* ── 역계산 전용 스타일 ── */

/* 히어로 3단 */
.rv-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:20px 16px;margin-bottom:14px;display:flex;align-items:center;flex-wrap:wrap;gap:8px;justify-content:space-between}
.rv-hero-col{text-align:center;flex:1;min-width:90px}
.rv-hero-col-total{background:rgba(194,65,12,.06);border-radius:10px;padding:8px}
.rv-hero-label{font-size:.72rem;color:#8c7355;font-weight:600;margin-bottom:3px}
.rv-hero-num{font-size:1.2rem;font-weight:800;letter-spacing:-.01em}
.rv-hero-sub{font-size:.7rem;color:#9ca3af;margin-top:2px}
.rv-hero-arrow{text-align:center;flex-shrink:0}
.rv-arrow-head{font-size:1.2rem;color:#eaddcd;line-height:1}
.rv-arrow-sub{font-size:.68rem;color:#9ca3af;margin-top:2px}
.rv-hero-plus,.rv-hero-eq{font-size:1.3rem;color:#eaddcd;font-weight:700;flex-shrink:0}

/* 컬러 */
.rv-target-color{color:#8c7355}
.rv-gross-color{color:#1f5c7a}
.rv-er-color{color:#785a43}
.rv-total-color{color:#c2410c}

/* 4단 카드 */
.rv-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.rv-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.rv-card-ee{border-color:#fde8e0}
.rv-card-er{border-color:#eaddcd}
.rv-card-total{background:#fdf4ec;border-color:#f5dfd0}
.rv-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px;line-height:1.3}
.rv-card-val{font-size:.95rem;font-weight:800;color:#3f2d20}
.rv-card-sub{font-size:.7rem;color:#9ca3af;margin-top:2px}

/* 연간 비교 박스 */
.rv-annual-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.rv-annual-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:10px}
.rv-annual-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:.83rem}
.rv-annual-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:10px;text-align:center}
.rv-annual-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.rv-annual-val{font-size:.95rem;font-weight:700;color:#3f2d20}

/* 관련 링크 */
.ins-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:8px}
.ins-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ins-related a:hover{background:#f3e7d9}

@media(max-width:600px){
  .ins-summary-grid{grid-template-columns:1fr 1fr}
  .ins-annual-grid,.rv-annual-grid{grid-template-columns:1fr 1fr}
  .ins-scard-total{grid-column:1/-1}
  .rv-cards{grid-template-columns:1fr 1fr}
  .rv-hero{gap:6px}
  .rv-hero-num{font-size:1rem}
  .rv-hero-plus,.rv-hero-eq{font-size:1rem}
}
</style>

<script>
const NPS_CAP = 6370000;

function fmtIns(el){
  const raw=el.value.replace(/[^0-9]/g,'');
  el.value=raw?parseInt(raw).toLocaleString('ko-KR'):'';
  el.dataset.raw=raw;
}
function getRaw(id){
  const el=document.getElementById(id);
  return parseInt((el.dataset.raw||el.value.replace(/[^0-9]/g,''))||'0',10)||0;
}
function fmt(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function pct(n,base){return base>0?(n/base*100).toFixed(1)+'%':'—';}

/* ── 탭 전환 ── */
function insTab(t){
  ['calc','reverse'].forEach(x=>{
    document.getElementById('ins-panel-'+x).style.display=x===t?'':'none';
  });
  document.querySelectorAll('.ins-tab').forEach((b,i)=>{
    b.classList.toggle('active',['calc','reverse'][i]===t);
  });
}

/* ── 4대보험 계산 공통 함수 ── */
function calcInsAmounts(salary, nontax, r){
  const taxable=Math.max(0,salary-nontax);
  const npsBase=Math.min(salary,NPS_CAP);
  const nps_ee=Math.round(npsBase*r.nps_ee);
  const nps_er=Math.round(npsBase*r.nps_er);
  const hi_ee=Math.round(taxable*r.hi_ee);
  const hi_er=Math.round(taxable*r.hi_er);
  const ltc_ee=Math.round(hi_ee*r.ltc);
  const ltc_er=Math.round(hi_er*r.ltc);
  const ei_ee=Math.round(taxable*r.ei_ee);
  const ei_er=Math.round(taxable*r.ei_er);
  const total_ee=nps_ee+hi_ee+ltc_ee+ei_ee;
  const total_er=nps_er+hi_er+ltc_er+ei_er;
  return {nps_ee,nps_er,hi_ee,hi_er,ltc_ee,ltc_er,ei_ee,ei_er,total_ee,total_er};
}
function getRates(){
  return {
    nps_ee: parseFloat(document.getElementById('r-nps-ee').value)/100,
    nps_er: parseFloat(document.getElementById('r-nps-er').value)/100,
    hi_ee:  parseFloat(document.getElementById('r-hi-ee').value)/100,
    hi_er:  parseFloat(document.getElementById('r-hi-er').value)/100,
    ltc:    parseFloat(document.getElementById('r-ltc').value)/100,
    ei_ee:  parseFloat(document.getElementById('r-ei-ee').value)/100,
    ei_er:  parseFloat(document.getElementById('r-ei-er').value)/100,
  };
}

/* ── ① 4대보험 계산 ── */
function calcIns(){
  const salary=getRaw('ins-salary');
  if(!salary) return;
  const nontax=getRaw('ins-nontax');
  const r=getRates();
  const a=calcInsAmounts(salary,nontax,r);
  const total_all=a.total_ee+a.total_er;

  document.getElementById('ins-result').style.display='';
  document.getElementById('ins-result-header').innerHTML=
    `월 급여 <strong>${fmt(salary)}</strong> 기준 (비과세 ${nontax?fmt(nontax):'없음'}) · 2026년 요율`;

  const rows=[
    {name:'국민연금', ee:a.nps_ee, er:a.nps_er},
    {name:'건강보험', ee:a.hi_ee,  er:a.hi_er},
    {name:'장기요양보험', ee:a.ltc_ee, er:a.ltc_er},
    {name:'고용보험', ee:a.ei_ee, er:a.ei_er},
  ];
  document.getElementById('ins-tbody').innerHTML=rows.map(row=>`
    <tr>
      <td>${row.name}</td>
      <td class="ee-val">${fmt(row.ee)}</td>
      <td class="er-val">${fmt(row.er)}</td>
      <td class="sum-val">${fmt(row.ee+row.er)}</td>
    </tr>`).join('');
  document.getElementById('ins-tfoot').innerHTML=`
    <tr>
      <td>합계</td>
      <td class="ee-val">${fmt(a.total_ee)}</td>
      <td class="er-val">${fmt(a.total_er)}</td>
      <td class="sum-val">${fmt(total_all)}</td>
    </tr>`;

  document.getElementById('ins-ee-total').textContent=fmt(a.total_ee);
  document.getElementById('ins-ee-pct').textContent='월급의 '+pct(a.total_ee,salary);
  document.getElementById('ins-er-total').textContent=fmt(a.total_er);
  document.getElementById('ins-er-pct').textContent='월급의 '+pct(a.total_er,salary);
  document.getElementById('ins-all-total').textContent=fmt(total_all);
  document.getElementById('ins-annual-grid').innerHTML=`
    <div class="ins-annual-item"><div class="ins-annual-label">근로자 연간</div><div class="ins-annual-val">${fmt(a.total_ee*12)}</div></div>
    <div class="ins-annual-item"><div class="ins-annual-label">사업주 연간</div><div class="ins-annual-val">${fmt(a.total_er*12)}</div></div>
    <div class="ins-annual-item"><div class="ins-annual-label">합계 연간</div><div class="ins-annual-val">${fmt(total_all*12)}</div></div>`;
}

/* ── ② 총인건비 역산 ── */
function calcReverse(){
  const target=getRaw('rv-target');
  if(!target){alert('목표 월 실수령액을 입력해 주세요.');return;}
  const nontax=getRaw('rv-nontax');

  // 이진탐색으로 역산: 세전 월급 → 4대보험 공제 후 실수령 = target
  // 4대보험만 공제 (소득세 제외) 기준
  const r={
    nps_ee:0.0475, nps_er:0.0475,
    hi_ee:0.03595, hi_er:0.03595,
    ltc:0.1314,
    ei_ee:0.009, ei_er:0.0115,
  };

  let lo=target, hi=target*2;
  for(let i=0;i<80;i++){
    const mid=Math.round((lo+hi)/2);
    const a=calcInsAmounts(mid,nontax,r);
    const net=mid-a.total_ee;
    if(net<target) lo=mid;
    else hi=mid;
    if(hi-lo<=100) break;
  }
  const gross=Math.ceil(hi/1000)*1000; // 천원 단위 올림
  const a=calcInsAmounts(gross,nontax,r);
  const netCheck=gross-a.total_ee;
  const totalCost=gross+a.total_er;

  document.getElementById('rv-result').style.display='';

  // 히어로
  document.getElementById('rv-h-target').textContent=fmt(target);
  document.getElementById('rv-h-gross').textContent=fmt(gross);
  document.getElementById('rv-h-er').textContent=fmt(a.total_er);
  document.getElementById('rv-h-total').textContent=fmt(totalCost);

  // 상세 테이블
  const rows=[
    {name:'국민연금', ee:a.nps_ee, er:a.nps_er},
    {name:'건강보험', ee:a.hi_ee,  er:a.hi_er},
    {name:'장기요양보험', ee:a.ltc_ee, er:a.ltc_er},
    {name:'고용보험', ee:a.ei_ee, er:a.ei_er},
  ];
  document.getElementById('rv-tbody').innerHTML=rows.map(row=>`
    <tr>
      <td>${row.name}</td>
      <td class="ee-val">${fmt(row.ee)}</td>
      <td class="er-val">${fmt(row.er)}</td>
      <td class="sum-val">${fmt(row.ee+row.er)}</td>
    </tr>`).join('');
  document.getElementById('rv-tfoot').innerHTML=`
    <tr>
      <td>합계</td>
      <td class="ee-val">${fmt(a.total_ee)}</td>
      <td class="er-val">${fmt(a.total_er)}</td>
      <td class="sum-val">${fmt(a.total_ee+a.total_er)}</td>
    </tr>`;

  // 4단 카드
  document.getElementById('rv-c-gross').textContent=fmt(gross);
  document.getElementById('rv-c-annual').textContent='연봉: '+fmt(gross*12);
  document.getElementById('rv-c-ee').textContent=fmt(a.total_ee);
  document.getElementById('rv-c-ee-pct').textContent='월급의 '+pct(a.total_ee,gross);
  document.getElementById('rv-c-er').textContent=fmt(a.total_er);
  document.getElementById('rv-c-er-pct').textContent='월급의 '+pct(a.total_er,gross);
  document.getElementById('rv-c-total').textContent=fmt(totalCost);
  document.getElementById('rv-c-total-annual').textContent='연간: '+fmt(totalCost*12);

  // 연간 비교
  document.getElementById('rv-a-gross').textContent=fmt(gross*12);
  document.getElementById('rv-a-net').textContent=fmt(netCheck*12);
  document.getElementById('rv-a-total').textContent=fmt(totalCost*12);
}
</script>
