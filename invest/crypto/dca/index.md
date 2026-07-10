---
layout: "default"
title: "코인 DCA + XIRR 계산기 - 적립식 투자 실질 연환산 수익률 계산 | LifeCalc"
description: "매달 일정 금액을 투자하는 DCA 시뮬레이션과, 실제 투자 내역을 입력해 XIRR(현금흐름 시점을 반영한 실질 연환산 수익률)을 계산합니다."
permalink: "/invest/crypto/dca/"
---

<a class="dca-skip-link" href="#dca-calculator">계산기로 바로가기</a>

<nav class="dca-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/invest/">투자 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">코인 DCA + XIRR 계산기</span>
</nav>

<section class="dca-hero">
  <h1>코인 DCA + XIRR 계산기</h1>
  <p class="dca-hero-desc">
    "총 300만원 넣어서 지금 360만원이니 20% 벌었다"는 계산은 <strong>언제 얼마씩 넣었는지</strong>를
    무시합니다. 초반에 많이 넣고 최근에 조금 넣은 경우와 그 반대는 실질적인 연환산 성과가 전혀 다릅니다.
    이럴 때 쓰는 지표가 <strong>XIRR(현금흐름 시점을 반영한 내부수익률)</strong>입니다. 이 계산기는
    <strong>①앞으로의 적립 계획을 시뮬레이션</strong>하는 기능과, <strong>②실제 투자 내역을 입력해
    XIRR을 역산</strong>하는 기능을 함께 제공합니다.
  </p>
</section>

<section id="dca-calculator" class="dca-card">
  <h2>① 앞으로의 적립 계획 시뮬레이션</h2>
  <p class="dca-sub-desc">매달 같은 금액을 일정 기간 투자한다고 가정했을 때 예상 결과를 계산합니다.</p>

  <div class="dca-field-row">
    <div class="dca-field">
      <label for="dca-monthly">월 납입액 (원)</label>
      <input type="text" inputmode="numeric" id="dca-monthly" placeholder="예: 300,000">
    </div>
    <div class="dca-field">
      <label for="dca-months">투자 기간 (개월)</label>
      <input type="text" inputmode="numeric" id="dca-months" placeholder="예: 24">
    </div>
  </div>
  <div class="dca-field">
    <label for="dca-rate">예상 연평균 수익률 (%)</label>
    <input type="text" inputmode="decimal" id="dca-rate" placeholder="예: 15" value="15">
    <p class="dca-hint">과거 수익률이 미래를 보장하지 않는 예상치입니다. 5%·15%·30%처럼 여러 시나리오로 비교해보는 것을 권장합니다.</p>
  </div>

  <button type="button" class="dca-btn-main" onclick="dcaSimulate()">시뮬레이션 계산</button>

  <div class="dca-result" id="dca-sim-result" hidden>
    <div class="dca-result-row"><span>총 납입액</span><strong id="dca-r-total-in">0원</strong></div>
    <div class="dca-result-row"><span>예상 최종 평가액</span><strong id="dca-r-final">0원</strong></div>
    <div class="dca-result-row dca-result-main"><span>예상 수익</span><strong id="dca-r-profit">0원</strong></div>
    <div class="dca-result-row dca-result-main"><span>예상 수익률</span><strong id="dca-r-rate">0%</strong></div>
  </div>
</section>

<!-- AD SLOT 1 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_DCA_1"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="dca-card">
  <h2>② 실제 투자 내역으로 XIRR 계산</h2>
  <p class="dca-sub-desc">실제로 매수한 날짜와 금액을 입력하고, 현재 평가금액과 평가 기준일을 넣으면 실질 연환산 수익률(XIRR)을 계산합니다.</p>

  <div class="dca-table-wrap">
    <table id="xirrTable">
      <thead>
        <tr><th>날짜</th><th>투자금액 (원)</th><th>비고</th><th>삭제</th></tr>
      </thead>
      <tbody id="xirrBody"></tbody>
    </table>
  </div>

  <div class="dca-toolbar">
    <button type="button" id="xirrAddRow" class="dca-btn-sub">+ 행 추가</button>
    <button type="button" id="xirrReset" class="dca-btn-danger">초기화</button>
  </div>

  <div class="dca-field-row" style="margin-top:16px;">
    <div class="dca-field">
      <label for="dca-current-value">현재 평가금액 (원)</label>
      <input type="text" inputmode="numeric" id="dca-current-value" placeholder="예: 8,500,000">
    </div>
    <div class="dca-field">
      <label for="dca-eval-date">평가 기준일</label>
      <input type="date" id="dca-eval-date">
    </div>
  </div>

  <button type="button" class="dca-btn-main" onclick="dcaCalcXirr()">XIRR 계산하기</button>
  <p class="dca-hint" id="dca-xirr-status"></p>

  <div class="dca-result" id="dca-xirr-result" hidden>
    <div class="dca-result-row"><span>총 투입원금</span><strong id="dca-r-invested">0원</strong></div>
    <div class="dca-result-row"><span>평가손익</span><strong id="dca-r-pnl">0원</strong></div>
    <div class="dca-result-row dca-result-main"><span>XIRR (실질 연환산 수익률)</span><strong id="dca-r-xirr">0%</strong></div>
  </div>
</section>

<section class="dca-card dca-card-light">
  <h3>실전 활용 가이드</h3>
  <p>
    예를 들어 1월에 500만원, 6월에 300만원을 나눠 투자해서 지금 950만원이 되었다면, 단순 수익률은
    (950-800)/800 = 18.75%입니다. 하지만 1월 투자금은 더 오래 운용됐고 6월 투자금은 상대적으로 짧게
    운용됐기 때문에, 이 둘을 각각의 투입 시점을 반영해 "연 몇 %짜리 투자였나"로 환산한 것이 XIRR입니다.
    같은 총수익률이라도 투입이 최근에 몰려있으면 XIRR(연환산)은 더 높게, 오래전에 몰려있으면 더 낮게
    나오는 경향이 있습니다.
  </p>
  <p>
    XIRR은 예금 금리나 다른 투자 상품의 연 수익률과 <strong>직접 비교할 수 있는 지표</strong>라는 점이
    핵심입니다. "내 코인 투자가 연 몇 %짜리였는지"를 정기예금 금리와 비교하고 싶다면 XIRR 계산기를,
    앞으로의 적립 계획을 미리 그려보고 싶다면 위쪽 시뮬레이션을 활용해보세요. 매수 시점의 평단가가
    궁금하다면 <a href="/invest/crypto/avg-cost/">평단가·추가매수 계산기</a>도 함께 확인해보세요.
  </p>
  <p class="dca-note">
    ※ XIRR 계산은 입력한 현금흐름과 평가금액을 기준으로 한 수학적 근사치이며, 수수료·세금은 반영하지
    않습니다. 투자 결과에 대한 최종 판단은 본인 책임입니다.
  </p>
</section>

<section class="dca-cta-box">
  <div class="dca-cta-icon">🎁</div>
  <div class="dca-cta-body">
    <h3>함께 보면 좋은 자료</h3>
    <p class="dca-recommend-desc">매달 적립 현황을 기록해두면 XIRR 계산에 필요한 날짜·금액을 훨씬 빠르게 정리할 수 있습니다.</p>
  </div>
  <a class="dca-cta-btn" href="#" data-partner="coupang" data-category="투자기록 노트/가계부">둘러보기 →</a>
</section>

<section class="dca-card">
  <h3>관련 계산기</h3>
  <ul class="dca-related-list">
    <li><a href="/invest/crypto/pnl/">코인 PnL 계산기</a></li>
    <li><a href="/invest/crypto/avg-cost/">코인 평단가·추가매수 계산기</a></li>
    <li><a href="/invest/crypto/capital-gains-tax/">가상자산 양도소득세 계산기</a></li>
  </ul>
</section>

<section class="dca-card" id="dca-faq">
  <h3>자주 묻는 질문</h3>

  <details class="dca-faq-item">
    <summary>XIRR과 단순 수익률의 차이는 무엇인가요?</summary>
    <p>단순 수익률은 "(현재가치-투입원금)/투입원금"만 계산해 투입 시점을 무시합니다. XIRR은 각
    현금흐름이 발생한 날짜를 반영해 "연 몇 %짜리 투자였나"로 환산하므로, 정기예금 금리 등 다른
    연 수익률 지표와 직접 비교할 수 있습니다.</p>
  </details>
  <details class="dca-faq-item">
    <summary>투자 기간이 1년이 안 돼도 계산할 수 있나요?</summary>
    <p>네, XIRR은 실제 경과 일수를 기준으로 연환산하므로 투자 기간이 1년 미만이어도 계산됩니다. 다만
    기간이 매우 짧을 경우 결과가 실제 체감보다 크게(또는 작게) 나올 수 있어 해석에 주의가 필요합니다.</p>
  </details>
  <details class="dca-faq-item">
    <summary>매도(출금)한 내역도 입력할 수 있나요?</summary>
    <p>이 계산기는 투자금 입금(매수) 내역만 반영하는 단순화된 버전입니다. 중간에 일부를 매도해 출금한
    이력이 있다면, 정확한 XIRR 계산을 위해 해당 금액을 음수(-)로 입력해 현금흐름에 포함해주세요.</p>
  </details>
  <details class="dca-faq-item">
    <summary>계산이 "실패" 또는 이상한 값으로 나오는 이유는 무엇인가요?</summary>
    <p>모든 현금흐름이 같은 부호(전부 입금 또는 전부 출금)이거나, 날짜·금액이 비정상적인 경우 수학적으로
    해가 존재하지 않을 수 있습니다. 최소 1건의 투자 내역과 현재 평가금액이 올바르게 입력되었는지
    확인해주세요.</p>
  </details>
  <details class="dca-faq-item">
    <summary>입력한 내역이 저장되나요?</summary>
    <p>네, 입력하는 즉시 브라우저에 자동 저장되어 새로고침하거나 다시 방문해도 유지됩니다. 저장 위치가
    브라우저이므로 다른 기기에서는 보이지 않습니다.</p>
  </details>
  <details class="dca-faq-item">
    <summary>모바일에서도 사용할 수 있나요?</summary>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </details>
</section>

<!-- AD SLOT 2 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_DCA_2"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .dca-breadcrumb { font-size: 0.85rem; color: #8c7355; margin-bottom: 1rem; }
  .dca-breadcrumb a { color: #8c7355; text-decoration: none; }
  .dca-breadcrumb a:hover { text-decoration: underline; }

  .dca-hero {
    background: linear-gradient(135deg, #f8efe5, #f3e7d9);
    border: 1px solid #e3d4c5;
    border-radius: 18px;
    padding: 28px;
    margin-bottom: 24px;
  }
  .dca-hero h1 { margin-top: 0; color: #785a43; }
  .dca-hero-desc { line-height: 1.7; color: #5c4a38; }

  .dca-card {
    background: #fff;
    border: 1px solid #f1eae1;
    border-radius: 18px;
    padding: 24px;
    margin-bottom: 20px;
  }
  .dca-card-light { background: #faf7f2; border-color: #eaddcd; }
  .dca-card h2, .dca-card h3 { border-left: 4px solid #c2410c; padding-left: 10px; color: #785a43; }
  .dca-sub-desc { color: #8c7355; font-size: 0.92rem; margin: 4px 0 16px; }
  .dca-note { font-size: 0.85rem; color: #8c7355; }
  .dca-hint { font-size: 0.8rem; color: #8c7355; margin: 6px 0 0; }

  .dca-field { margin-bottom: 14px; }
  .dca-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #5c4a38; }
  .dca-field input {
    width: 100%; padding: 10px 12px; border: 1px solid #e3d4c5;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box;
  }
  .dca-field-row { display: flex; gap: 14px; flex-wrap: wrap; }
  .dca-field-row .dca-field { flex: 1; min-width: 180px; }

  .dca-btn-main {
    background: #c2410c; color: #fff; border: none; border-radius: 10px;
    padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%;
    margin-top: 4px;
  }
  .dca-btn-main:hover { opacity: 0.92; }
  .dca-btn-sub, .dca-btn-danger {
    padding: 9px 16px; border-radius: 10px; border: 1px solid #e3d4c5;
    background: #fff; color: #785a43; font-weight: 600; cursor: pointer;
  }
  .dca-btn-sub:hover { background: #ff7a00; color: #fff; border-color: #ff7a00; }
  .dca-btn-danger { color: #b3261e; border-color: #e8b9b3; }
  .dca-btn-danger:hover { background: #b3261e; color: #fff; border-color: #b3261e; }
  .dca-toolbar { display: flex; gap: 10px; margin-top: 10px; }

  .dca-result { margin-top: 20px; border-top: 1px solid #f1eae1; padding-top: 16px; }
  .dca-result-row { display: flex; justify-content: space-between; padding: 8px 0; color: #5c4a38; }
  .dca-result-main { background: #fce8db; color: #c2410c; border-radius: 8px; padding: 10px 12px; margin-top: 6px; font-weight: 700; }

  .dca-table-wrap { width: 100%; overflow-x: auto; border-radius: 12px; border: 1px solid #eaddcd; }
  #xirrTable { width: 100%; min-width: 480px; border-collapse: collapse; }
  #xirrTable th, #xirrTable td { padding: 8px; text-align: center; }
  #xirrTable th { background: #faf7f2; color: #785a43; font-weight: 800; white-space: nowrap; }
  #xirrTable td input { width: 100%; padding: 6px 8px; border: 1px solid #e3d4c5; border-radius: 8px; box-sizing: border-box; }
  #xirrTable td input[type="text"] { text-align: left; }

  .dca-cta-box {
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
    background: linear-gradient(135deg, #fff3ea, #fce8db);
    border: 1px solid #f0c8a0;
    border-radius: 18px;
    padding: 20px 24px;
    margin-bottom: 20px;
  }
  .dca-cta-icon { font-size: 2rem; line-height: 1; }
  .dca-cta-body { flex: 1; min-width: 200px; }
  .dca-cta-body h3 { border-left: none; padding-left: 0; margin: 0 0 2px; color: #9a3412; }
  .dca-recommend-desc { font-size: 0.92rem; color: #6b5842; margin: 4px 0 0; line-height: 1.5; }
  .dca-cta-btn {
    display: inline-block; background: #c2410c; color: #fff; text-decoration: none;
    font-weight: 700; padding: 12px 22px; border-radius: 999px; white-space: nowrap;
    box-shadow: 0 4px 14px rgba(194,65,12,0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }
  .dca-cta-btn:hover { background: #a8380a; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(194,65,12,0.45); }

  .dca-related-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
  .dca-related-list li { margin: 0; }
  .dca-related-list a {
    display: inline-block; color: #785a43; text-decoration: none; font-weight: 600;
    background: #f8efe5; border: 1px solid #eaddcd; border-radius: 999px;
    padding: 8px 16px; font-size: 0.9rem; transition: all 0.15s ease;
  }
  .dca-related-list a:hover { background: #c2410c; color: #fff; border-color: #c2410c; }

  .dca-faq-item {
    border: 1px solid #f1eae1; border-radius: 12px; padding: 4px 18px;
    margin-bottom: 10px; background: #fff; transition: background 0.15s ease, border-color 0.15s ease;
  }
  .dca-faq-item[open] { background: #fffaf5; border-color: #f0c8a0; }
  .dca-faq-item summary {
    cursor: pointer; list-style: none; font-weight: 700; color: #785a43;
    padding: 14px 28px 14px 0; position: relative; line-height: 1.5;
  }
  .dca-faq-item summary::-webkit-details-marker { display: none; }
  .dca-faq-item summary::after {
    content: "+"; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
    font-size: 1.3rem; font-weight: 400; color: #c2410c; transition: transform 0.2s ease;
  }
  .dca-faq-item[open] summary::after { content: "×"; }
  .dca-faq-item summary:hover { color: #c2410c; }
  .dca-faq-item p { margin: 0 0 16px; line-height: 1.7; color: #5c4a38; }

  @media (max-width: 640px) {
    .dca-cta-box { flex-direction: column; align-items: flex-start; }
    .dca-cta-btn { width: 100%; text-align: center; }
  }
</style>

<script>
  const $d = (id) => document.getElementById(id);

  /* ---------- ① 시뮬레이션 ---------- */
  function dcaParseNum(id) {
    return parseFloat(($d(id).value || '0').replace(/,/g, '')) || 0;
  }
  function dcaAutoComma(id) {
    const el = $d(id);
    el.addEventListener('input', () => {
      const raw = el.value.replace(/[^0-9.]/g, '');
      const num = parseFloat(raw);
      el.value = (!isNaN(num) && raw !== '' && !raw.endsWith('.')) ? num.toLocaleString('ko-KR', {maximumFractionDigits: 4}) : raw;
    });
  }
  ['dca-monthly', 'dca-months', 'dca-rate', 'dca-current-value'].forEach(dcaAutoComma);

  function dcaSimulate() {
    const monthly = dcaParseNum('dca-monthly');
    const months = Math.round(dcaParseNum('dca-months'));
    const annualRate = dcaParseNum('dca-rate') / 100;
    const monthlyRate = annualRate / 12;

    let finalValue = 0;
    for (let k = 1; k <= months; k++) {
      finalValue += monthly * Math.pow(1 + monthlyRate, months - k + 1);
    }
    const totalIn = monthly * months;
    const profit = finalValue - totalIn;
    const rate = totalIn > 0 ? (profit / totalIn) * 100 : 0;

    $d('dca-r-total-in').textContent = Math.round(totalIn).toLocaleString('ko-KR') + '원';
    $d('dca-r-final').textContent = Math.round(finalValue).toLocaleString('ko-KR') + '원';
    $d('dca-r-profit').textContent = Math.round(profit).toLocaleString('ko-KR') + '원';
    $d('dca-r-rate').textContent = rate.toFixed(2) + '%';

    $d('dca-sim-result').hidden = false;
    $d('dca-sim-result').scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }

  /* ---------- ② XIRR 계산 ---------- */
  const xirrBody = $d('xirrBody');

  function addXirrRow(pref = {date: '', amount: '', note: ''}) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><input type="date" value="${pref.date || ''}"></td>
      <td><input type="text" inputmode="numeric" value="${pref.amount || ''}" placeholder="예: 500000"></td>
      <td><input type="text" value="${pref.note || ''}" placeholder="1차 매수 등"></td>
      <td><button type="button" class="dca-btn-danger" style="padding:6px 10px;">삭제</button></td>
    `;
    const amountInput = tr.querySelectorAll('input')[1];
    amountInput.addEventListener('input', () => {
      const raw = amountInput.value.replace(/[^0-9-]/g, '');
      const num = parseFloat(raw);
      amountInput.value = (!isNaN(num) && raw !== '' && raw !== '-') ? num.toLocaleString('ko-KR') : raw;
      dcaSaveXirrState();
    });
    tr.querySelector('button').onclick = () => { tr.remove(); dcaSaveXirrState(); };
    tr.querySelectorAll('input').forEach(inp => inp.addEventListener('change', dcaSaveXirrState));
    xirrBody.appendChild(tr);
  }

  $d('xirrAddRow').onclick = () => { addXirrRow(); dcaSaveXirrState(); };

  const XIRR_STORAGE_KEY = 'dcaXirrData_v1';

  function dcaSerializeRows() {
    return [...xirrBody.querySelectorAll('tr')].map(r => {
      const inputs = r.querySelectorAll('input');
      return { date: inputs[0].value, amount: inputs[1].value, note: inputs[2].value };
    });
  }

  function dcaSaveXirrState() {
    try {
      const state = {
        rows: dcaSerializeRows(),
        currentValue: $d('dca-current-value').value,
        evalDate: $d('dca-eval-date').value
      };
      localStorage.setItem(XIRR_STORAGE_KEY, JSON.stringify(state));
    } catch (err) { console.error('저장 실패:', err); }
  }

  function dcaLoadXirrState() {
    try {
      const raw = localStorage.getItem(XIRR_STORAGE_KEY);
      if (!raw) return false;
      const state = JSON.parse(raw);
      if (!state || !Array.isArray(state.rows) || !state.rows.length) return false;
      xirrBody.innerHTML = '';
      state.rows.forEach(r => addXirrRow(r));
      if (state.currentValue) $d('dca-current-value').value = state.currentValue;
      if (state.evalDate) $d('dca-eval-date').value = state.evalDate;
      return true;
    } catch (err) { console.error('불러오기 실패:', err); return false; }
  }

  if (!dcaLoadXirrState()) {
    const today = new Date();
    const sixMonthsAgo = new Date(today); sixMonthsAgo.setMonth(today.getMonth() - 6);
    addXirrRow({ date: sixMonthsAgo.toISOString().slice(0, 10), amount: '5000000', note: '1차 매수' });
    addXirrRow({ date: today.toISOString().slice(0, 10), amount: '3000000', note: '2차 매수' });
    $d('dca-eval-date').value = today.toISOString().slice(0, 10);
  }

  $d('dca-current-value').addEventListener('input', dcaSaveXirrState);
  $d('dca-eval-date').addEventListener('change', dcaSaveXirrState);

  $d('xirrReset').onclick = () => {
    if (!confirm('입력한 투자 내역을 모두 삭제하고 초기화하시겠습니까?')) return;
    localStorage.removeItem(XIRR_STORAGE_KEY);
    xirrBody.innerHTML = '';
    dcaLoadXirrState.call(null);
    location.reload();
  };

  function xirrNpv(cashflows, rate) {
    const d0 = cashflows[0].date;
    return cashflows.reduce((sum, cf) => {
      const years = (cf.date - d0) / (365 * 24 * 3600 * 1000);
      return sum + cf.amount / Math.pow(1 + rate, years);
    }, 0);
  }

  function solveXirr(cashflows) {
    let lo = -0.99, hi = 10;
    let flo = xirrNpv(cashflows, lo), fhi = xirrNpv(cashflows, hi);
    if (isNaN(flo) || isNaN(fhi) || flo * fhi > 0) return NaN;
    for (let i = 0; i < 200; i++) {
      const mid = (lo + hi) / 2;
      const fmid = xirrNpv(cashflows, mid);
      if (Math.abs(fmid) < 1) return mid;
      if (flo * fmid < 0) { hi = mid; fhi = fmid; } else { lo = mid; flo = fmid; }
    }
    return (lo + hi) / 2;
  }

  function dcaCalcXirr() {
    const rows = dcaSerializeRows()
      .map(r => ({
        date: r.date ? new Date(r.date) : null,
        amount: -Math.abs(parseFloat((r.amount || '0').toString().replace(/,/g, '')) || 0)
      }))
      .filter(r => r.date && r.amount !== 0);

    const currentValue = dcaParseNum('dca-current-value');
    const evalDateStr = $d('dca-eval-date').value;

    if (!rows.length || !currentValue || !evalDateStr) {
      $d('dca-xirr-status').textContent = '투자 내역(최소 1건), 현재 평가금액, 평가 기준일을 모두 입력해주세요.';
      return;
    }

    const cashflows = [...rows, { date: new Date(evalDateStr), amount: currentValue }]
      .sort((a, b) => a.date - b.date);

    const totalInvested = rows.reduce((sum, r) => sum + Math.abs(r.amount), 0);
    const pnl = currentValue - totalInvested;
    const rate = solveXirr(cashflows);

    if (isNaN(rate)) {
      $d('dca-xirr-status').textContent = 'XIRR을 계산할 수 없습니다. 날짜와 금액이 올바른지 확인해주세요.';
      $d('dca-xirr-result').hidden = true;
      return;
    }

    $d('dca-xirr-status').textContent = '';
    $d('dca-r-invested').textContent = Math.round(totalInvested).toLocaleString('ko-KR') + '원';
    $d('dca-r-pnl').textContent = (pnl >= 0 ? '▲ ' : '▼ ') + Math.round(Math.abs(pnl)).toLocaleString('ko-KR') + '원';
    $d('dca-r-xirr').textContent = (rate * 100).toFixed(2) + '%';

    $d('dca-xirr-result').hidden = false;
    $d('dca-xirr-result').scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ad-box').forEach(ad => ad.style.minHeight = '120px');
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "투자 계산기 모음", "item": "https://calculator.khaistory.com/invest/"},
    {"@type": "ListItem", "position": 3, "name": "코인 DCA + XIRR 계산기", "item": "https://calculator.khaistory.com/invest/crypto/dca/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "XIRR과 단순 수익률의 차이는 무엇인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "단순 수익률은 투입 시점을 무시하지만, XIRR은 각 현금흐름의 발생 날짜를 반영해 연환산 수익률로 계산하므로 다른 연 수익률 지표와 직접 비교할 수 있습니다."}
    },
    {
      "@type": "Question",
      "name": "투자 기간이 1년이 안 돼도 계산할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, XIRR은 실제 경과 일수를 기준으로 연환산하므로 1년 미만이어도 계산되며, 기간이 짧을 경우 결과 해석에 주의가 필요합니다."}
    },
    {
      "@type": "Question",
      "name": "매도(출금)한 내역도 입력할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "기본적으로 투자금 입금 내역만 반영하는 단순화된 버전이며, 중간 출금이 있다면 해당 금액을 음수로 입력해 현금흐름에 포함할 수 있습니다."}
    },
    {
      "@type": "Question",
      "name": "계산이 실패하거나 이상한 값이 나오는 이유는 무엇인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "모든 현금흐름이 같은 부호이거나 날짜·금액이 비정상적인 경우 수학적으로 해가 존재하지 않을 수 있습니다. 최소 1건의 투자 내역과 현재 평가금액을 확인해주세요."}
    },
    {
      "@type": "Question",
      "name": "입력한 내역이 저장되나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 입력 즉시 브라우저에 자동 저장되어 새로고침하거나 다시 방문해도 유지됩니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
