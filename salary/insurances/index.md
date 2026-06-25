---
layout: default
title: "4대보험 계산기 2026 — 근로자·사업주 부담액 자동 계산"
description: "2026년 4대보험 요율(국민연금 4.75%, 건강보험 3.595%, 장기요양 13.14%, 고용보험 0.9%) 기준 근로자와 사업주 각각의 월 부담액을 자동 계산합니다."
permalink: /salary/insurances/
canonical: https://calculator.khaistory.com/salary/insurances/
og_title: "4대보험 계산기 2026 — 근로자·사업주 부담액"
og_description: "2026년 최신 요율 적용, 근로자 부담과 사업주 부담을 함께 확인하는 4대보험 계산기"
---

<!-- =====================================================================
     4대보험 계산기 2026
     - 근로자 / 사업주 부담액 동시 표시 (경쟁사 차별화)
     - 2026 요율: NPS 4.75/4.75, HI 3.595/3.595, LTC x13.14%, EI 0.9/1.15%
     - 국민연금 상한: 637만원 / 건강보험 상한: 별도 없음
     ===================================================================== -->

<section class="ins-wrap">

  <div class="ins-notice">
    2026년 4대보험 요율 기준 안내용 계산기입니다.
    산재보험은 업종별로 다르며 전액 사업주 부담이라 제외했습니다.
  </div>

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

    <!-- 요율 수정 -->
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

  <!-- 결과 -->
  <div id="ins-result" style="display:none" class="ins-result">

    <!-- 월 급여 헤더 -->
    <div class="ins-result-header" id="ins-result-header"></div>

    <!-- 비교 테이블 -->
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

    <!-- 요약 카드 -->
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

    <!-- 연간 환산 -->
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

  <nav class="ins-related">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
  </nav>

</section>

<!-- ===== STYLES ===== -->
<style>
.ins-wrap {
  font-family: 'Noto Sans KR', sans-serif;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 40px;
  color: #1f2937;
  line-height: 1.7;
}
.ins-notice {
  background: #faf7f2; border: 1px solid #eaddcd; border-radius: 10px;
  padding: 10px 14px; font-size: 0.83rem; color: #8c7355; margin-bottom: 20px;
}
.ins-form { display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px; }
.ins-field { display: flex; flex-direction: column; gap: 5px; }
.ins-field label { font-size: 0.85rem; font-weight: 600; color: #3f2d20; }
.ins-opt { font-size: 0.75rem; color: #9ca3af; font-weight: 400; }
.ins-hint { font-size: 0.76rem; color: #9ca3af; line-height: 1.5; }
.ins-field input[type="text"],
.ins-field input[type="number"] {
  border: 1px solid #ddd4c8; border-radius: 8px; padding: 10px 12px;
  font-size: 0.95rem; color: #1f2937; font-family: inherit; background: #fff;
  width: 100%; box-sizing: border-box; transition: border-color 0.15s;
}
.ins-field input:focus { outline: none; border-color: #c2410c; box-shadow: 0 0 0 3px rgba(194,65,12,0.08); }

/* 요율 토글 */
.ins-rates-toggle { background: #faf7f2; border: 1px solid #eaddcd; border-radius: 10px; padding: 10px 14px; }
.ins-rates-toggle summary { font-size: 0.85rem; color: #8c7355; cursor: pointer; font-weight: 600; list-style: none; }
.ins-rates-toggle summary::-webkit-details-marker { display: none; }
.ins-rates-toggle summary::before { content: '▸ '; }
.ins-rates-toggle[open] summary::before { content: '▾ '; }
.ins-rates-grid { display: flex; flex-direction: column; gap: 12px; margin-top: 12px; }
.ins-rate-row { padding: 10px; background: #fff; border-radius: 8px; border: 1px solid #f1eae1; }
.ins-rate-name { font-size: 0.85rem; font-weight: 700; color: #3f2d20; display: block; margin-bottom: 8px; }
.ins-rate-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 4px; }
.ins-rf { display: flex; flex-direction: column; gap: 4px; }
.ins-rf label { font-size: 0.76rem; color: #9ca3af; }
.ins-rf input { border: 1px solid #ddd4c8; border-radius: 6px; padding: 6px 8px; font-size: 0.88rem; font-family: inherit; width: 100%; box-sizing: border-box; }

/* 버튼 */
.ins-btn {
  background: #c2410c; color: #fff; border: none; border-radius: 10px;
  padding: 13px 24px; font-size: 1rem; font-weight: 700; cursor: pointer;
  font-family: inherit; transition: background 0.15s, transform 0.1s; width: 100%;
}
.ins-btn:hover { background: #ea580c; transform: translateY(-1px); }

/* 결과 */
.ins-result { animation: insFadeIn 0.3s ease; }
@keyframes insFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

.ins-result-header {
  background: linear-gradient(135deg, #f8efe5 0%, #f3e7d9 100%);
  border: 1px solid #e3d4c5; border-radius: 12px;
  padding: 14px 18px; font-size: 0.88rem; color: #8c7355; margin-bottom: 14px;
}
.ins-result-header strong { color: #3f2d20; font-size: 1.1rem; }

/* 비교 테이블 */
.ins-compare-wrap { overflow-x: auto; border-radius: 12px; border: 1px solid #f1eae1; margin-bottom: 14px; }
.ins-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 420px; }
.ins-table th { background: #f6efe5; padding: 10px 14px; font-weight: 700; color: #4a3728; text-align: right; }
.ins-table th:first-child { text-align: left; }
.ins-table td { padding: 9px 14px; text-align: right; border-top: 1px solid #f5f0eb; }
.ins-table td:first-child { text-align: left; font-weight: 600; color: #3f2d20; }
.ins-table tfoot td { background: #faf7f2; font-weight: 700; border-top: 2px solid #eaddcd; }
.ee-col { color: #c2410c !important; }
.er-col { color: #785a43 !important; }
.ins-table .ee-val { color: #c2410c; font-weight: 700; }
.ins-table .er-val { color: #785a43; font-weight: 700; }
.ins-table .sum-val { color: #3f2d20; }

/* 요약 카드 */
.ins-summary-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; margin-bottom: 14px; }
.ins-scard { border-radius: 12px; padding: 14px 16px; text-align: center; }
.ins-scard-ee { background: #fdf4ec; border: 1px solid #f5dfd0; }
.ins-scard-er { background: #f7f2ed; border: 1px solid #eaddcd; }
.ins-scard-total { background: #faf7f2; border: 1px solid #eaddcd; }
.ins-scard-label { font-size: 0.76rem; color: #9ca3af; margin-bottom: 4px; }
.ins-scard-val { font-size: 1.2rem; font-weight: 800; color: #3f2d20; }
.ins-scard-ee .ins-scard-val { color: #c2410c; }
.ins-scard-er .ins-scard-val { color: #785a43; }
.ins-scard-pct { font-size: 0.78rem; color: #9ca3af; margin-top: 2px; }
.ins-scard-sub { font-size: 0.76rem; color: #9ca3af; }

/* 연간 환산 */
.ins-annual-box { background: #faf7f2; border: 1px solid #eaddcd; border-radius: 12px; padding: 14px 16px; margin-bottom: 14px; }
.ins-annual-box strong { font-size: 0.85rem; color: #3f2d20; display: block; margin-bottom: 8px; }
.ins-annual-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; font-size: 0.83rem; }
.ins-annual-item { text-align: center; }
.ins-annual-label { color: #9ca3af; margin-bottom: 2px; }
.ins-annual-val { font-weight: 700; color: #3f2d20; }

/* 팁 */
.ins-tip { background: #fff; border-left: 3px solid #8c7355; border-radius: 0 8px 8px 0; padding: 10px 14px; font-size: 0.83rem; color: #6b7280; line-height: 1.6; margin-bottom: 14px; }
.ins-tip strong { color: #3f2d20; }

/* 관련 링크 */
.ins-related { display: flex; flex-wrap: wrap; gap: 8px; padding-top: 20px; border-top: 1px solid #f1eae1; }
.ins-related a { font-size: 0.83rem; color: #785a43; text-decoration: none; border: 1px solid #eaddcd; border-radius: 20px; padding: 5px 14px; background: #faf7f2; }
.ins-related a:hover { background: #f3e7d9; }

@media (max-width: 600px) {
  .ins-summary-grid { grid-template-columns: 1fr 1fr; }
  .ins-annual-grid { grid-template-columns: 1fr 1fr; }
  .ins-scard-total { grid-column: 1/-1; }
}
</style>

<!-- ===== JAVASCRIPT ===== -->
<script>
const NPS_CAP = 6370000;
const MIN_WAGE_2026 = 10320;

function fmtIns(el) {
  const raw = el.value.replace(/[^0-9]/g, '');
  el.value = raw ? parseInt(raw).toLocaleString('ko-KR') : '';
  el.dataset.raw = raw;
}
function getRawIns(id) {
  const el = document.getElementById(id);
  return parseInt((el.dataset.raw || el.value.replace(/[^0-9]/g, '')) || '0', 10) || 0;
}
function fmt(n) { return Math.round(n).toLocaleString('ko-KR') + '원'; }
function pct(n, base) { return base > 0 ? (n / base * 100).toFixed(1) + '%' : '—'; }

function calcIns() {
  const salary  = getRawIns('ins-salary');
  if (!salary) return;
  const nontax = getRawIns('ins-nontax');
  const taxable = Math.max(0, salary - nontax); // 건강·고용보험 과세 기준

  const r = {
    nps_ee:  parseFloat(document.getElementById('r-nps-ee').value) / 100,
    nps_er:  parseFloat(document.getElementById('r-nps-er').value) / 100,
    hi_ee:   parseFloat(document.getElementById('r-hi-ee').value) / 100,
    hi_er:   parseFloat(document.getElementById('r-hi-er').value) / 100,
    ltc:     parseFloat(document.getElementById('r-ltc').value) / 100,
    ei_ee:   parseFloat(document.getElementById('r-ei-ee').value) / 100,
    ei_er:   parseFloat(document.getElementById('r-ei-er').value) / 100,
  };

  // 국민연금: 상한 적용, 비과세 무관 (전체 보수월액 기준)
  const npsBase = Math.min(salary, NPS_CAP);
  const nps_ee = Math.round(npsBase * r.nps_ee);
  const nps_er = Math.round(npsBase * r.nps_er);

  // 건강보험: 비과세 제외 과세급여 기준
  const hi_ee  = Math.round(taxable * r.hi_ee);
  const hi_er  = Math.round(taxable * r.hi_er);

  // 장기요양: 건보료에 비율 적용
  const ltc_ee = Math.round(hi_ee * r.ltc);
  const ltc_er = Math.round(hi_er * r.ltc);

  // 고용보험: 비과세 제외 기준
  const ei_ee  = Math.round(taxable * r.ei_ee);
  const ei_er  = Math.round(taxable * r.ei_er);

  const total_ee = nps_ee + hi_ee + ltc_ee + ei_ee;
  const total_er = nps_er + hi_er + ltc_er + ei_er;
  const total_all = total_ee + total_er;

  // 결과 표시
  document.getElementById('ins-result').style.display = '';
  document.getElementById('ins-result-header').innerHTML =
    `월 급여 <strong>${fmt(salary)}</strong> 기준 (비과세 ${nontax ? fmt(nontax) : '없음'}) · 2026년 요율`;

  // 테이블
  const rows = [
    { name: '국민연금', ee: nps_ee, er: nps_er },
    { name: '건강보험', ee: hi_ee,  er: hi_er  },
    { name: '장기요양보험', ee: ltc_ee, er: ltc_er },
    { name: '고용보험', ee: ei_ee, er: ei_er  },
  ];
  document.getElementById('ins-tbody').innerHTML = rows.map(row => `
    <tr>
      <td>${row.name}</td>
      <td class="ee-val">${fmt(row.ee)}</td>
      <td class="er-val">${fmt(row.er)}</td>
      <td class="sum-val">${fmt(row.ee + row.er)}</td>
    </tr>
  `).join('');

  document.getElementById('ins-tfoot').innerHTML = `
    <tr>
      <td>합계</td>
      <td class="ee-val">${fmt(total_ee)}</td>
      <td class="er-val">${fmt(total_er)}</td>
      <td class="sum-val">${fmt(total_all)}</td>
    </tr>
  `;

  // 요약 카드
  document.getElementById('ins-ee-total').textContent = fmt(total_ee);
  document.getElementById('ins-ee-pct').textContent   = '월급의 ' + pct(total_ee, salary);
  document.getElementById('ins-er-total').textContent = fmt(total_er);
  document.getElementById('ins-er-pct').textContent   = '월급의 ' + pct(total_er, salary);
  document.getElementById('ins-all-total').textContent = fmt(total_all);

  // 연간 환산
  document.getElementById('ins-annual-grid').innerHTML = `
    <div class="ins-annual-item"><div class="ins-annual-label">근로자 연간</div><div class="ins-annual-val">${fmt(total_ee * 12)}</div></div>
    <div class="ins-annual-item"><div class="ins-annual-label">사업주 연간</div><div class="ins-annual-val">${fmt(total_er * 12)}</div></div>
    <div class="ins-annual-item"><div class="ins-annual-label">합계 연간</div><div class="ins-annual-val">${fmt(total_all * 12)}</div></div>
  `;
}
</script>
