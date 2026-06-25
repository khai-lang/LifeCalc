---
layout: default
title: "연봉 실수령 계산기 2026 — 4대보험·역계산·구간표"
description: "2026년 4대보험 요율(국민연금 4.75%, 건강보험 3.595%) 기준 연봉 실수령액 계산. 역계산(목표 실수령→필요 연봉) 탭, 연봉별 구간표 포함."
permalink: /salary/net-pay/
canonical: https://calculator.khaistory.com/salary/net-pay/
og_title: "연봉 실수령 계산기 2026"
og_description: "2026년 최신 요율 기준 연봉 실수령 계산. 역계산 탭과 구간표까지."
---

<!-- =====================================================================
     연봉 실수령 계산기 2026
     - 2026 요율: 국민연금 4.75% / 건강보험 3.595% / 장기요양 13.14% / 고용 0.9%
     - 국민연금 상한 기준소득월액: 637만원
     - 탭: ① 실수령 계산  ② 역계산(목표 실수령→연봉)  ③ 구간표  ④ 시급환산
     ===================================================================== -->

<section class="np-wrap">

  <!-- 탭 네비 -->
  <nav class="np-tabs" role="tablist">
    <button class="np-tab active" role="tab" onclick="switchTab('calc')">실수령 계산</button>
    <button class="np-tab" role="tab" onclick="switchTab('reverse')">역계산 <span class="np-new">NEW</span></button>
    <button class="np-tab" role="tab" onclick="switchTab('table')">구간표</button>
    <button class="np-tab" role="tab" onclick="switchTab('hourly')">시급 환산</button>
  </nav>

  <!-- ① 실수령 계산 -->
  <div id="tab-calc" class="np-panel">
    <div class="np-notice">2026년 4대보험 요율(국민연금 4.75%, 건강보험 3.595%) 기준 안내용 계산기입니다. 실제 수령액은 회사 조건에 따라 다를 수 있습니다.</div>

    <div class="np-form">
      <div class="np-field">
        <label for="salary">연봉 (세전, 원)</label>
        <input type="text" id="salary" inputmode="numeric" placeholder="예: 50,000,000" oninput="fmtInput(this)" onblur="calcMain()">
      </div>
      <div class="np-field">
        <label for="bonus">연간 상여금 (원) <span class="np-opt">선택</span></label>
        <input type="text" id="bonus" inputmode="numeric" placeholder="예: 5,000,000" oninput="fmtInput(this)" onblur="calcMain()">
      </div>
      <div class="np-row2">
        <div class="np-field">
          <label for="depend">부양가족 수 (본인 포함)</label>
          <select id="depend" onchange="calcMain()">
            <option value="1">1명 (본인만)</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명 이상</option>
          </select>
        </div>
        <div class="np-field">
          <label for="nontax">추가 비과세 (월, 원) <span class="np-opt">선택</span></label>
          <input type="text" id="nontax" inputmode="numeric" placeholder="예: 200,000" oninput="fmtInput(this)" onblur="calcMain()">
          <div class="np-hint">식대 20만원은 기본 포함됩니다</div>
        </div>
      </div>

      <!-- 요율 접기/펼치기 -->
      <details class="np-rates-toggle">
        <summary>요율 직접 수정 (2026년 기본값 자동 적용)</summary>
        <div class="np-rates-grid">
          <div class="np-field">
            <label>국민연금 (근로자 %)</label>
            <input type="number" id="r-nps" value="4.75" step="0.01" min="0" max="20" onchange="calcMain()">
            <div class="np-hint">상한: 월 637만원</div>
          </div>
          <div class="np-field">
            <label>건강보험 (근로자 %)</label>
            <input type="number" id="r-hi" value="3.595" step="0.001" min="0" max="20" onchange="calcMain()">
          </div>
          <div class="np-field">
            <label>장기요양 (건보료의 %)</label>
            <input type="number" id="r-ltc" value="13.14" step="0.01" min="0" max="50" onchange="calcMain()">
          </div>
          <div class="np-field">
            <label>고용보험 (근로자 %)</label>
            <input type="number" id="r-ei" value="0.9" step="0.01" min="0" max="10" onchange="calcMain()">
          </div>
        </div>
      </details>

      <button class="np-btn" onclick="calcMain()">실수령 계산하기</button>
    </div>

    <!-- 결과 -->
    <div id="result-main" class="np-result" style="display:none">
      <div class="np-result-hero">
        <div class="np-hero-label">월 실수령액</div>
        <div class="np-hero-num" id="r-net-month">—</div>
        <div class="np-hero-sub" id="r-net-year-label">연 실수령: —</div>
      </div>
      <div class="np-result-grid">
        <div class="np-rcard">
          <div class="np-rcard-label">월 세전</div>
          <div class="np-rcard-val" id="r-gross-month">—</div>
        </div>
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">국민연금</div>
          <div class="np-rcard-val" id="r-nps">—</div>
        </div>
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">건강보험</div>
          <div class="np-rcard-val" id="r-hi">—</div>
        </div>
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">장기요양</div>
          <div class="np-rcard-val" id="r-ltc">—</div>
        </div>
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">고용보험</div>
          <div class="np-rcard-val" id="r-ei">—</div>
        </div>
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">소득세</div>
          <div class="np-rcard-val" id="r-income-tax">—</div>
        </div>
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">지방소득세</div>
          <div class="np-rcard-val" id="r-local-tax">—</div>
        </div>
        <div class="np-rcard np-rcard-total">
          <div class="np-rcard-label">총 공제액</div>
          <div class="np-rcard-val" id="r-total-deduct">—</div>
        </div>
      </div>
      <div class="np-result-bar" id="r-bar-wrap">
        <div class="np-bar-label"><span>실수령</span><span id="r-bar-pct">—%</span><span>공제</span></div>
        <div class="np-bar">
          <div class="np-bar-net" id="r-bar-net"></div>
          <div class="np-bar-ded" id="r-bar-ded"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ② 역계산 -->
  <div id="tab-reverse" class="np-panel" style="display:none">
    <div class="np-notice">목표 월 실수령액을 입력하면 필요한 세전 연봉을 역산합니다. 이직·협상 시 활용하세요.</div>
    <div class="np-form">
      <div class="np-field">
        <label for="rev-target">목표 월 실수령액 (원)</label>
        <input type="text" id="rev-target" inputmode="numeric" placeholder="예: 3,500,000" oninput="fmtInput(this)">
      </div>
      <div class="np-row2">
        <div class="np-field">
          <label for="rev-depend">부양가족 수 (본인 포함)</label>
          <select id="rev-depend">
            <option value="1">1명 (본인만)</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5">5명 이상</option>
          </select>
        </div>
        <div class="np-field">
          <label for="rev-nontax">추가 비과세 (월, 원)</label>
          <input type="text" id="rev-nontax" inputmode="numeric" placeholder="0" oninput="fmtInput(this)">
          <div class="np-hint">식대 20만원은 기본 포함</div>
        </div>
      </div>
      <button class="np-btn" onclick="calcReverse()">필요 연봉 계산하기</button>
    </div>

    <div id="result-reverse" class="np-result" style="display:none">
      <div class="np-result-hero">
        <div class="np-hero-label">필요 세전 연봉</div>
        <div class="np-hero-num" id="rev-annual">—</div>
        <div class="np-hero-sub" id="rev-monthly-gross">월 세전: —</div>
      </div>
      <div class="np-result-grid">
        <div class="np-rcard np-rcard-minus">
          <div class="np-rcard-label">예상 총 공제 (월)</div>
          <div class="np-rcard-val" id="rev-deduct">—</div>
        </div>
        <div class="np-rcard">
          <div class="np-rcard-label">검증: 실수령 (월)</div>
          <div class="np-rcard-val" id="rev-check">—</div>
        </div>
      </div>
      <div class="np-rev-tip">
        <strong>협상 팁:</strong> 회사에서 식대·차량보조금 등 비과세 수당을 연봉에 포함하는지 확인하세요.
        같은 연봉도 비과세 항목 구성에 따라 실수령이 월 10~30만원 달라질 수 있습니다.
      </div>
    </div>
  </div>

  <!-- ③ 구간표 -->
  <div id="tab-table" class="np-panel" style="display:none">
    <div class="np-notice">아래 조건으로 구간별 실수령액을 자동 계산합니다. 조건을 바꾸면 표가 다시 그려집니다.</div>
    <div class="np-form">
      <div class="np-row3">
        <div class="np-field">
          <label for="t-depend">부양가족</label>
          <select id="t-depend" onchange="buildTable()">
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </div>
        <div class="np-field">
          <label for="t-start">시작 (만원)</label>
          <input type="number" id="t-start" value="2600" min="1000" max="50000" step="100" onchange="buildTable()">
        </div>
        <div class="np-field">
          <label for="t-end">끝 (만원)</label>
          <input type="number" id="t-end" value="12000" min="1000" max="100000" step="100" onchange="buildTable()">
        </div>
        <div class="np-field">
          <label for="t-step">간격 (만원)</label>
          <select id="t-step" onchange="buildTable()">
            <option value="100">100만원</option>
            <option value="200">200만원</option>
            <option value="500" selected>500만원</option>
            <option value="1000">1,000만원</option>
          </select>
        </div>
      </div>
    </div>
    <div id="table-wrap" class="np-table-wrap">
      <table class="np-table" id="salary-table">
        <thead>
          <tr>
            <th>연봉</th>
            <th>월 세전</th>
            <th>4대보험</th>
            <th>소득세</th>
            <th>월 실수령</th>
            <th>공제율</th>
          </tr>
        </thead>
        <tbody id="table-body"></tbody>
      </table>
    </div>
    <div class="np-hint" style="margin-top:8px">비과세 식대 20만원, 2026년 기준 / 실제 수령액은 회사 조건에 따라 다를 수 있습니다</div>
  </div>

  <!-- ④ 시급 환산 -->
  <div id="tab-hourly" class="np-panel" style="display:none">
    <div class="np-notice">2026년 최저시급: 10,320원 (월 최저 2,156,880원 · 주 40시간 기준)</div>
    <div class="np-form">
      <div class="np-tabs-inner">
        <button class="np-tab-inner active" onclick="switchHourly('h2a')">시급 → 연봉</button>
        <button class="np-tab-inner" onclick="switchHourly('a2h')">연봉 → 시급</button>
      </div>

      <div id="h-h2a">
        <div class="np-field">
          <label for="h-wage">시급 (원)</label>
          <input type="text" id="h-wage" inputmode="numeric" placeholder="예: 10,320" oninput="fmtInput(this)">
        </div>
        <div class="np-row2">
          <div class="np-field">
            <label for="h-hours">주당 근무시간</label>
            <input type="number" id="h-hours" value="40" min="1" max="52">
          </div>
          <div class="np-field">
            <label for="h-weeks">연 근무주</label>
            <input type="number" id="h-weeks" value="52" min="1" max="52">
          </div>
        </div>
        <div class="np-field">
          <label>주휴수당 보정</label>
          <div class="np-radio-row">
            <label><input type="radio" name="h-juhyu" value="none" checked> 미적용 (순수 근무시간)</label>
            <label><input type="radio" name="h-juhyu" value="korea"> 한국 관행 (+20% 근사)</label>
          </div>
        </div>
        <button class="np-btn" onclick="calcHourlyToAnnual()">연봉 환산하기</button>
        <div id="h-h2a-result" class="np-result" style="display:none">
          <div class="np-result-hero">
            <div class="np-hero-label">예상 세전 연봉</div>
            <div class="np-hero-num" id="h-annual">—</div>
            <div class="np-hero-sub" id="h-monthly">월 세전: —</div>
          </div>
        </div>
      </div>

      <div id="h-a2h" style="display:none">
        <div class="np-field">
          <label for="h-annual-in">연봉 (세전, 원)</label>
          <input type="text" id="h-annual-in" inputmode="numeric" placeholder="예: 40,000,000" oninput="fmtInput(this)">
        </div>
        <div class="np-row2">
          <div class="np-field">
            <label for="h-hours2">주당 근무시간</label>
            <input type="number" id="h-hours2" value="40" min="1" max="52">
          </div>
          <div class="np-field">
            <label for="h-weeks2">연 근무주</label>
            <input type="number" id="h-weeks2" value="52" min="1" max="52">
          </div>
        </div>
        <button class="np-btn" onclick="calcAnnualToHourly()">시급 환산하기</button>
        <div id="h-a2h-result" class="np-result" style="display:none">
          <div class="np-result-hero">
            <div class="np-hero-label">시급</div>
            <div class="np-hero-num" id="h-wage-out">—</div>
            <div class="np-hero-sub">최저시급 10,320원 기준</div>
          </div>
          <div class="np-result-grid">
            <div class="np-rcard">
              <div class="np-rcard-label">최저시급 대비</div>
              <div class="np-rcard-val" id="h-vs-min">—</div>
            </div>
            <div class="np-rcard">
              <div class="np-rcard-label">연 총 근무시간</div>
              <div class="np-rcard-val" id="h-total-hours">—</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 관련 링크 -->
  <nav class="np-related">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/insurances/">4대보험 계산기</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
    <a href="/salary/pension-savings/">연금저축 세액공제</a>
  </nav>

</section>

<!-- =====================================================================
     STYLES
     ===================================================================== -->
<style>
.np-wrap {
  font-family: 'Noto Sans KR', sans-serif;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 40px;
  color: #1f2937;
  line-height: 1.7;
}

/* 탭 */
.np-tabs {
  display: flex;
  gap: 4px;
  border-bottom: 2px solid #f0e8de;
  margin-bottom: 24px;
  flex-wrap: wrap;
}
.np-tab {
  background: none;
  border: none;
  padding: 10px 18px;
  font-size: 0.92rem;
  color: #8c7355;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  font-family: inherit;
  transition: color 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
}
.np-tab.active {
  color: #c2410c;
  border-bottom-color: #c2410c;
  font-weight: 600;
}
.np-tab:hover:not(.active) { color: #3f2d20; }
.np-new {
  font-size: 10px;
  background: #c2410c;
  color: #fff;
  border-radius: 20px;
  padding: 1px 6px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

/* 안내 배너 */
.np-notice {
  background: #faf7f2;
  border: 1px solid #eaddcd;
  border-radius: 10px;
  padding: 10px 14px;
  font-size: 0.83rem;
  color: #8c7355;
  margin-bottom: 20px;
  line-height: 1.6;
}

/* 폼 */
.np-form { display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px; }
.np-field { display: flex; flex-direction: column; gap: 5px; }
.np-field label { font-size: 0.85rem; font-weight: 600; color: #3f2d20; }
.np-field input[type="text"],
.np-field input[type="number"],
.np-field select {
  border: 1px solid #ddd4c8;
  border-radius: 8px;
  padding: 10px 12px;
  font-size: 0.95rem;
  color: #1f2937;
  font-family: inherit;
  background: #fff;
  transition: border-color 0.15s;
  width: 100%;
  box-sizing: border-box;
}
.np-field input:focus, .np-field select:focus {
  outline: none;
  border-color: #c2410c;
  box-shadow: 0 0 0 3px rgba(194,65,12,0.08);
}
.np-opt { font-size: 0.75rem; color: #9ca3af; font-weight: 400; }
.np-hint { font-size: 0.76rem; color: #9ca3af; }
.np-row2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.np-row3 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
.np-radio-row { display: flex; gap: 16px; font-size: 0.88rem; color: #374151; }
.np-radio-row label { display: flex; align-items: center; gap: 5px; cursor: pointer; }

/* 요율 토글 */
.np-rates-toggle {
  background: #faf7f2;
  border: 1px solid #eaddcd;
  border-radius: 10px;
  padding: 10px 14px;
}
.np-rates-toggle summary {
  font-size: 0.85rem;
  color: #8c7355;
  cursor: pointer;
  font-weight: 600;
  list-style: none;
}
.np-rates-toggle summary::-webkit-details-marker { display: none; }
.np-rates-toggle summary::before { content: '▸ '; }
.np-rates-toggle[open] summary::before { content: '▾ '; }
.np-rates-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;
}

/* 버튼 */
.np-btn {
  background: #c2410c;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 13px 24px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s, transform 0.1s;
  width: 100%;
}
.np-btn:hover { background: #ea580c; transform: translateY(-1px); }
.np-btn:active { transform: translateY(0); }

/* 결과 */
.np-result { margin-top: 24px; animation: npFadeIn 0.3s ease; }
@keyframes npFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }

.np-result-hero {
  background: linear-gradient(135deg, #f8efe5 0%, #f3e7d9 100%);
  border: 1px solid #e3d4c5;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  margin-bottom: 16px;
}
.np-hero-label { font-size: 0.85rem; color: #8c7355; font-weight: 600; margin-bottom: 4px; }
.np-hero-num { font-size: 2.2rem; font-weight: 800; color: #c2410c; letter-spacing: -0.02em; }
.np-hero-sub { font-size: 0.88rem; color: #8c7355; margin-top: 4px; }

.np-result-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 16px;
}
.np-rcard {
  background: #fff;
  border: 1px solid #f1eae1;
  border-radius: 10px;
  padding: 10px 12px;
  text-align: center;
}
.np-rcard-minus { border-color: #fde8e0; }
.np-rcard-total { background: #faf7f2; border-color: #eaddcd; }
.np-rcard-label { font-size: 0.72rem; color: #9ca3af; margin-bottom: 4px; }
.np-rcard-val { font-size: 0.9rem; font-weight: 700; color: #3f2d20; }
.np-rcard-minus .np-rcard-val { color: #c2410c; }

/* 비율 바 */
.np-result-bar { margin-top: 8px; }
.np-bar-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #9ca3af;
  margin-bottom: 4px;
}
.np-bar {
  height: 10px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  background: #f1eae1;
}
.np-bar-net { background: #c2410c; transition: width 0.4s ease; }
.np-bar-ded { background: #e3d4c5; transition: width 0.4s ease; }

/* 역계산 팁 */
.np-rev-tip {
  background: #faf7f2;
  border-left: 3px solid #8c7355;
  border-radius: 0 8px 8px 0;
  padding: 10px 14px;
  font-size: 0.83rem;
  color: #6b7280;
  margin-top: 12px;
  line-height: 1.6;
}
.np-rev-tip strong { color: #3f2d20; }

/* 구간표 */
.np-table-wrap { overflow-x: auto; margin-top: 12px; border-radius: 12px; border: 1px solid #f1eae1; }
.np-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; min-width: 540px; }
.np-table thead { background: #f6efe5; }
.np-table th { padding: 10px 14px; font-weight: 700; color: #4a3728; text-align: right; }
.np-table th:first-child { text-align: left; }
.np-table td { padding: 9px 14px; text-align: right; border-top: 1px solid #f5f0eb; color: #374151; }
.np-table td:first-child { text-align: left; font-weight: 600; color: #3f2d20; }
.np-table tbody tr:hover { background: #faf8f5; }
.np-table .highlight-row td { background: #fdf4ec; color: #c2410c; font-weight: 700; }
.np-table .highlight-row td:first-child { color: #c2410c; }

/* 내부 탭 (시급) */
.np-tabs-inner { display: flex; gap: 4px; margin-bottom: 16px; }
.np-tab-inner {
  background: #f6efe5;
  border: 1px solid #eaddcd;
  border-radius: 8px;
  padding: 7px 16px;
  font-size: 0.85rem;
  color: #8c7355;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
}
.np-tab-inner.active { background: #c2410c; border-color: #c2410c; color: #fff; }

/* 관련 링크 */
.np-related {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 32px;
  padding-top: 20px;
  border-top: 1px solid #f1eae1;
}
.np-related a {
  font-size: 0.83rem;
  color: #785a43;
  text-decoration: none;
  border: 1px solid #eaddcd;
  border-radius: 20px;
  padding: 5px 14px;
  background: #faf7f2;
  transition: background 0.15s;
}
.np-related a:hover { background: #f3e7d9; }

/* 반응형 */
@media (max-width: 600px) {
  .np-result-grid { grid-template-columns: 1fr 1fr; }
  .np-row2 { grid-template-columns: 1fr; }
  .np-row3 { grid-template-columns: 1fr 1fr; }
  .np-hero-num { font-size: 1.8rem; }
  .np-table th, .np-table td { padding: 8px 10px; font-size: 0.82rem; }
}
</style>

<!-- =====================================================================
     JAVASCRIPT
     ===================================================================== -->
<script>
/* ── 2026 요율 상수 ─────────────────────────────────────────────── */
const RATE_2026 = {
  nps:       0.0475,   // 국민연금 4.75%
  hi:        0.03595,  // 건강보험 3.595%
  ltcRatio:  0.1314,   // 장기요양 (건보료의 13.14%)
  ei:        0.009,    // 고용보험 0.9%
  npsCapMonth: 6370000, // 국민연금 상한 기준소득월액 637만원
  nontaxBase:  200000,  // 기본 비과세 식대 20만원
  minWage2026: 10320,   // 최저시급
};

/* ── 소득세 간이세액 (근사) ─────────────────────────────────────── */
// 근로소득공제 후 과세표준 → 누진세 구조 근사
// 실제 간이세액표 대신, 근로소득공제 적용 후 누진세 계산 방식 사용
function calcIncomeTax(annualGross, depend, extraNontax) {
  const n = Math.max(1, Math.min(5, parseInt(depend) || 1));
  const nontaxTotal = RATE_2026.nontaxBase + (parseFloat(extraNontax) || 0); // 월 비과세
  const annualNontax = nontaxTotal * 12;

  // 총급여 = 연봉 - 연간비과세
  const totalPay = Math.max(0, annualGross - annualNontax);

  // 근로소득공제 (소득세법 §47)
  let ded = 0;
  if (totalPay <= 5000000)        ded = totalPay * 0.70;
  else if (totalPay <= 15000000)  ded = 3500000 + (totalPay - 5000000) * 0.40;
  else if (totalPay <= 45000000)  ded = 7500000 + (totalPay - 15000000) * 0.15;
  else if (totalPay <= 100000000) ded = 12000000 + (totalPay - 45000000) * 0.05;
  else                            ded = 14750000 + (totalPay - 100000000) * 0.02;
  ded = Math.min(ded, 20000000); // 상한 2천만원

  // 근로소득금액
  const incomeAmt = totalPay - ded;

  // 인적공제: 1인당 150만원
  const personalDed = n * 1500000;

  // 과세표준
  const taxBase = Math.max(0, incomeAmt - personalDed);

  // 산출세액 (누진)
  let tax = 0;
  if (taxBase <= 14000000)        tax = taxBase * 0.06;
  else if (taxBase <= 50000000)   tax = 840000 + (taxBase - 14000000) * 0.15;
  else if (taxBase <= 88000000)   tax = 6240000 + (taxBase - 50000000) * 0.24;
  else if (taxBase <= 150000000)  tax = 15360000 + (taxBase - 88000000) * 0.35;
  else if (taxBase <= 300000000)  tax = 37060000 + (taxBase - 150000000) * 0.38;
  else if (taxBase <= 500000000)  tax = 94060000 + (taxBase - 300000000) * 0.40;
  else if (taxBase <= 1000000000) tax = 174060000 + (taxBase - 500000000) * 0.42;
  else                            tax = 384060000 + (taxBase - 1000000000) * 0.45;

  // 근로소득세액공제: 130만원 한도
  let taxCredit = 0;
  if (tax <= 550000)       taxCredit = tax * 0.55;
  else                     taxCredit = 302500 + (tax - 550000) * 0.30;
  taxCredit = Math.min(taxCredit, n <= 1 ? 660000 : n <= 2 ? 715000 : 748000);

  const annualTax = Math.max(0, tax - taxCredit);
  const monthlyTax = Math.round(annualTax / 12);
  return monthlyTax;
}

/* ── 4대보험 월 공제액 ──────────────────────────────────────────── */
function calc4Insurance(monthlyGross, rates) {
  const r = rates || RATE_2026;
  // 국민연금: 상한 적용
  const npsBase = Math.min(monthlyGross, r.npsCapMonth);
  const nps  = Math.round(npsBase * r.nps);
  const hi   = Math.round(monthlyGross * r.hi);
  const ltc  = Math.round(hi * r.ltcRatio);
  const ei   = Math.round(monthlyGross * r.ei);
  return { nps, hi, ltc, ei, total4: nps + hi + ltc + ei };
}

/* ── 실수령 계산 ─────────────────────────────────────────────────── */
function calcNetPay(annualSalary, bonus, depend, extraNontaxMonth, rates) {
  const totalAnnual = annualSalary + (bonus || 0);
  const monthlyGross = Math.round(totalAnnual / 12);
  const ins = calc4Insurance(monthlyGross, rates);
  const incomeTax = calcIncomeTax(totalAnnual, depend, extraNontaxMonth);
  const localTax  = Math.round(incomeTax * 0.10);
  const totalDed  = ins.total4 + incomeTax + localTax;
  const netMonth  = monthlyGross - totalDed;
  return { monthlyGross, ...ins, incomeTax, localTax, totalDed, netMonth };
}

/* ── 숫자 포맷 유틸 ─────────────────────────────────────────────── */
function fmt(n) {
  if (n == null || isNaN(n)) return '—';
  return Math.round(n).toLocaleString('ko-KR') + '원';
}
function fmtInput(el) {
  const raw = el.value.replace(/[^0-9]/g, '');
  const num = parseInt(raw, 10);
  el.value = raw ? num.toLocaleString('ko-KR') : '';
  el.dataset.raw = raw || '';
}
function getRaw(id) {
  const el = document.getElementById(id);
  if (!el) return 0;
  const raw = el.dataset.raw || el.value.replace(/[^0-9]/g, '');
  return parseInt(raw, 10) || 0;
}
function getRates() {
  return {
    nps:       parseFloat(document.getElementById('r-nps')?.value || 4.75) / 100,
    hi:        parseFloat(document.getElementById('r-hi')?.value || 3.595) / 100,
    ltcRatio:  parseFloat(document.getElementById('r-ltc')?.value || 13.14) / 100,
    ei:        parseFloat(document.getElementById('r-ei')?.value || 0.9) / 100,
    npsCapMonth: RATE_2026.npsCapMonth,
  };
}

/* ── 탭 전환 ─────────────────────────────────────────────────────── */
function switchTab(name) {
  ['calc','reverse','table','hourly'].forEach(t => {
    document.getElementById('tab-'+t).style.display = t === name ? '' : 'none';
  });
  document.querySelectorAll('.np-tabs .np-tab').forEach((btn, i) => {
    btn.classList.toggle('active', ['calc','reverse','table','hourly'][i] === name);
  });
  if (name === 'table') buildTable();
}

/* ── ① 실수령 계산 ──────────────────────────────────────────────── */
function calcMain() {
  const salary  = getRaw('salary');
  if (!salary) return;
  const bonus   = getRaw('bonus');
  const depend  = document.getElementById('depend').value;
  const nontax  = getRaw('nontax');
  const rates   = getRates();

  const r = calcNetPay(salary, bonus, depend, nontax, rates);

  document.getElementById('result-main').style.display = '';
  document.getElementById('r-net-month').textContent   = fmt(r.netMonth);
  document.getElementById('r-net-year-label').textContent = '연 실수령: ' + fmt(r.netMonth * 12);
  document.getElementById('r-gross-month').textContent = fmt(r.monthlyGross);
  document.getElementById('r-nps').textContent         = fmt(r.nps);
  document.getElementById('r-hi').textContent          = fmt(r.hi);
  document.getElementById('r-ltc').textContent         = fmt(r.ltc);
  document.getElementById('r-ei').textContent          = fmt(r.ei);
  document.getElementById('r-income-tax').textContent  = fmt(r.incomeTax);
  document.getElementById('r-local-tax').textContent   = fmt(r.localTax);
  document.getElementById('r-total-deduct').textContent= fmt(r.totalDed);

  const netPct = r.monthlyGross > 0 ? Math.round(r.netMonth / r.monthlyGross * 100) : 0;
  const dedPct = 100 - netPct;
  document.getElementById('r-bar-net').style.width = netPct + '%';
  document.getElementById('r-bar-ded').style.width = dedPct + '%';
  document.getElementById('r-bar-pct').textContent = `실수령 ${netPct}% / 공제 ${dedPct}%`;
}

/* ── ② 역계산 ───────────────────────────────────────────────────── */
function calcReverse() {
  const targetNet = getRaw('rev-target');
  if (!targetNet) return;
  const depend = document.getElementById('rev-depend').value;
  const nontax = getRaw('rev-nontax');

  // 이진 탐색으로 역산
  let lo = targetNet, hi = targetNet * 3;
  let annual = targetNet * 14; // 초기 추정
  for (let i = 0; i < 60; i++) {
    const mid = Math.round((lo + hi) / 2);
    const res = calcNetPay(mid * 12, 0, depend, nontax, null);
    if (res.netMonth < targetNet) lo = mid;
    else hi = mid;
    annual = mid * 12;
    if (hi - lo <= 1000) break;
  }

  // 최종 검증
  const finalAnnual = Math.ceil(annual / 10000) * 10000;
  const check = calcNetPay(finalAnnual, 0, depend, nontax, null);

  document.getElementById('result-reverse').style.display = '';
  document.getElementById('rev-annual').textContent       = fmt(finalAnnual);
  document.getElementById('rev-monthly-gross').textContent = '월 세전: ' + fmt(Math.round(finalAnnual / 12));
  document.getElementById('rev-deduct').textContent       = fmt(check.totalDed);
  document.getElementById('rev-check').textContent        = fmt(check.netMonth);
}

/* ── ③ 구간표 ───────────────────────────────────────────────────── */
function buildTable() {
  const start  = parseInt(document.getElementById('t-start').value) * 10000;
  const end    = parseInt(document.getElementById('t-end').value) * 10000;
  const step   = parseInt(document.getElementById('t-step').value) * 10000;
  const depend = document.getElementById('t-depend').value;
  if (!start || !end || start >= end) return;

  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  // 가독성 하이라이트 구간 (5천만, 1억)
  const highlights = new Set([50000000, 100000000]);

  for (let sal = start; sal <= end; sal += step) {
    const r = calcNetPay(sal, 0, depend, 0, null);
    const dedPct = (r.totalDed / r.monthlyGross * 100).toFixed(1);
    const tr = document.createElement('tr');
    if (highlights.has(sal)) tr.className = 'highlight-row';
    tr.innerHTML = `
      <td>${(sal / 10000).toLocaleString('ko-KR')}만원</td>
      <td>${fmt(r.monthlyGross)}</td>
      <td>${fmt(r.total4)}</td>
      <td>${fmt(r.incomeTax + r.localTax)}</td>
      <td>${fmt(r.netMonth)}</td>
      <td>${dedPct}%</td>
    `;
    tbody.appendChild(tr);
  }
}

/* ── ④ 시급 환산 ─────────────────────────────────────────────────── */
function switchHourly(mode) {
  document.getElementById('h-h2a').style.display = mode === 'h2a' ? '' : 'none';
  document.getElementById('h-a2h').style.display = mode === 'a2h' ? '' : 'none';
  document.querySelectorAll('.np-tab-inner').forEach((b, i) => {
    b.classList.toggle('active', (i === 0 && mode === 'h2a') || (i === 1 && mode === 'a2h'));
  });
}
function calcHourlyToAnnual() {
  const wage  = getRaw('h-wage');
  const hours = parseFloat(document.getElementById('h-hours').value) || 40;
  const weeks = parseFloat(document.getElementById('h-weeks').value) || 52;
  const juhyu = document.querySelector('input[name="h-juhyu"]:checked').value;
  if (!wage) return;
  const mult = juhyu === 'korea' ? 1.2 : 1;
  const annualHours = hours * weeks * mult;
  const annual = Math.round(wage * annualHours);
  document.getElementById('h-h2a-result').style.display = '';
  document.getElementById('h-annual').textContent  = fmt(annual);
  document.getElementById('h-monthly').textContent = '월 세전: ' + fmt(Math.round(annual / 12));
}
function calcAnnualToHourly() {
  const annual = getRaw('h-annual-in');
  const hours  = parseFloat(document.getElementById('h-hours2').value) || 40;
  const weeks  = parseFloat(document.getElementById('h-weeks2').value) || 52;
  if (!annual) return;
  const totalHours = Math.round(hours * weeks);
  const wage = Math.round(annual / totalHours);
  const vsMin = ((wage / RATE_2026.minWage2026 - 1) * 100).toFixed(1);
  document.getElementById('h-a2h-result').style.display = '';
  document.getElementById('h-wage-out').textContent    = Math.round(wage).toLocaleString('ko-KR') + '원';
  document.getElementById('h-vs-min').textContent      = (vsMin >= 0 ? '+' : '') + vsMin + '%';
  document.getElementById('h-total-hours').textContent = totalHours.toLocaleString('ko-KR') + '시간';
}

/* ── 초기 실행 ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildTable();
});
</script>
