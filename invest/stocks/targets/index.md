---
layout: "default"
title: "손절 계산기 - 손절가·목표가·손익비(R:R) 자동 계산"
description: "손절 계산기: 진입가와 손절 폭(%)만 넣으면 손절가·목표가·손익비(R:R)와 수량별 예상 손실이 바로 계산됩니다. 주식·코인 모두 사용 가능합니다."
permalink: "/invest/stocks/targets/"
og_title: "손절 계산기 - 손절가·목표가·손익비(R:R) 자동 계산"
og_description: "진입가와 손절 폭(%)만 넣으면 손절가·목표가·손익비와 수량별 예상 손실을 바로 계산합니다."
---

<a class="tg-skip-link" href="#tg-calculator">계산기로 바로가기</a>

<nav class="tg-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/invest/">투자 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">손절 계산기 (목표가·손절가)</span>
</nav>

<section class="tg-hero">
  <h2>목표가·손절가 계산기</h2>
  <p class="tg-hero-desc">
    <strong>손절 계산기</strong>입니다. 진입가와 목표 수익률, 손절 폭(%)만 넣으면
    <strong>손절가·목표가·손익비(R:R)</strong>가 바로 계산되고, 수량을 입력하면
    <strong>예상 이익·예상 손실</strong>이 원화로 표시됩니다. 주식은 물론 코인(원화 기준)에도 쓸 수 있어요.
    손절 기준을 먼저 숫자로 정해두고 싶을 때 활용하세요.
  </p>
  <div class="tg-formula-box">
    <p class="tg-formula-title">한눈에 보는 계산 기준</p>
    <ul>
      <li><strong>목표가</strong> = 진입가 × (1 + 목표 수익률)</li>
      <li><strong>손절가</strong> = 진입가 × (1 − 손절 폭)</li>
      <li><strong>손익비(R:R)</strong> = 목표 수익률 ÷ 손절 폭</li>
      <li><strong>예상 이익/손실</strong> = 가격 차이 × 수량</li>
    </ul>
  </div>
</section>

<section id="tg-calculator" class="tg-card">
  <h2>목표가·손절가 계산</h2>

  <div class="tg-field">
    <label for="tg-entry">진입가 (원)</label>
    <input type="text" inputmode="numeric" id="tg-entry" placeholder="예: 72,000">
  </div>
  <div class="tg-field-row">
    <div class="tg-field">
      <label for="tg-target-rate">목표 수익 (%)</label>
      <input type="text" inputmode="decimal" id="tg-target-rate" placeholder="예: 10" value="10">
    </div>
    <div class="tg-field">
      <label for="tg-stop-rate">손절 폭 (%)</label>
      <input type="text" inputmode="decimal" id="tg-stop-rate" placeholder="예: 5" value="5">
    </div>
  </div>
  <div class="tg-field">
    <label for="tg-qty">수량 (주·개, 선택)</label>
    <input type="text" inputmode="decimal" id="tg-qty" placeholder="예: 30">
  </div>

  <div class="tg-btn-row">
    <button type="button" class="tg-btn-main" onclick="tgCalculate()">계산하기</button>
    <button type="button" class="tg-btn-sub" onclick="tgReset()">초기화</button>
  </div>

  <div class="tg-result" id="tg-result" hidden>
    <div class="tg-result-row"><span>목표가</span><strong id="tg-r-target">0원</strong></div>
    <div class="tg-result-row"><span>손절가</span><strong id="tg-r-stop">0원</strong></div>
    <div class="tg-result-row tg-result-main"><span>손익비 (R:R)</span><strong id="tg-r-ratio">0 : 1</strong></div>
    <div class="tg-result-row" id="tg-r-profit-row" hidden><span>예상 이익</span><strong id="tg-r-profit">0원</strong></div>
    <div class="tg-result-row" id="tg-r-loss-row" hidden><span>예상 손실</span><strong id="tg-r-loss">0원</strong></div>
  </div>

  <p class="tg-caution">손익비가 높다고 항상 좋은 매매는 아닙니다. 실제 매매에서는 수수료, 세금, 슬리피지, 분할매수·분할매도 전략도 함께 고려하세요.</p>
</section>

<!-- AD SLOT 1 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_TARGETS_1"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="tg-card tg-card-light">
  <h3>주식 목표가·손절가 계산기 활용 팁</h3>
  <p>
    이 계산기는 단순히 목표가만 보는 것이 아니라, <strong>손절가와 손익비를 함께 확인</strong>하는 데
    의미가 있습니다. 예를 들어 목표 수익률이 10%, 손절 폭이 5%라면 손익비는 <strong>2:1</strong>입니다.
  </p>
  <p>
    수량을 함께 입력하면 실제 투자금 기준으로 예상 이익과 손실을 금액으로 볼 수 있어, 자금 규모에 맞는
    포지션 관리에 도움이 됩니다. 일반적으로 손익비 1.5~2배 이상을 권장하는 경우가 많지만, 이는 참고
    기준일 뿐 본인의 투자 성향과 종목 특성에 따라 조정이 필요합니다.
  </p>
</section>

<section class="tg-card">
  <h3>손절가 계산 예시 (진입가 72,000원 · 30주)</h3>
  <p>손절 폭에 따라 손절가와 예상 손실이 어떻게 달라지는지 정리했습니다. 공식은 <strong>손절가 = 진입가 × (1 − 손절 폭)</strong>입니다.</p>
  <div class="tg-table-wrap">
    <table class="tg-table">
      <thead><tr><th>손절 폭</th><th>손절가</th><th>1주당 손실</th><th>30주 예상 손실</th></tr></thead>
      <tbody>
        <tr><td>3%</td><td>69,840원</td><td>2,160원</td><td>64,800원</td></tr>
        <tr><td>5%</td><td>68,400원</td><td>3,600원</td><td>108,000원</td></tr>
        <tr><td>7%</td><td>66,960원</td><td>5,040원</td><td>151,200원</td></tr>
        <tr><td>10%</td><td>64,800원</td><td>7,200원</td><td>216,000원</td></tr>
      </tbody>
    </table>
  </div>
  <p class="tg-caution">수수료·세금·슬리피지는 반영하지 않은 값입니다.</p>
</section>

<section class="tg-card">
  <h3>손익비(R:R)별 필요 승률</h3>
  <p>손익비가 높을수록 손실 매매가 더 많아도 본전이 가능합니다. 필요 승률 = 1 ÷ (1 + 손익비)로 계산합니다.</p>
  <div class="tg-table-wrap">
    <table class="tg-table">
      <thead><tr><th>손익비</th><th>예시 (목표 / 손절)</th><th>본전에 필요한 승률</th></tr></thead>
      <tbody>
        <tr><td>1 : 1</td><td>5% / 5%</td><td>50%</td></tr>
        <tr><td>1.5 : 1</td><td>7.5% / 5%</td><td>40%</td></tr>
        <tr><td>2 : 1</td><td>10% / 5%</td><td>약 33.3%</td></tr>
        <tr><td>3 : 1</td><td>15% / 5%</td><td>25%</td></tr>
      </tbody>
    </table>
  </div>
  <p class="tg-caution">수수료·세금을 제외한 단순 계산이며, 실제 매매에서는 필요 승률이 이보다 높아집니다.</p>
</section>

<section class="tg-card tg-card-light">
  <h3>감당 가능한 손실액으로 수량 정하기</h3>
  <p>한 번의 매매에서 잃어도 되는 금액을 먼저 정하면 수량이 나옵니다.</p>
  <p><strong>수량 = 허용 손실액 ÷ (진입가 − 손절가)</strong></p>
  <p>예를 들어 허용 손실액이 100,000원, 진입가 72,000원, 손절 폭 5%(손절가 68,400원)라면 주당 손실이 3,600원이므로 100,000 ÷ 3,600 ≈ 27.8, 내림해서 <strong>27주</strong>입니다. 위 계산기에 이 수량을 넣어 예상 손실이 허용 범위 안인지 확인해 보세요.</p>
</section>

<section class="tg-guide-box">
  <div class="tg-guide-body">
    <h3>손절 폭은 어떻게 정할까요?</h3>
    <p>퍼센트 기준, 지지선 기준, 물타기 후 평단가 재계산 기준까지 손절 라인 계산법 3가지를 정리했습니다.</p>
  </div>
  <a class="tg-guide-btn" href="/guide/stop-loss-calculation-2026/">손절 라인 계산법 가이드 보기 →</a>
</section>

<section class="tg-cta-box">
  <div class="tg-cta-icon">🎁</div>
  <div class="tg-cta-body">
    <h3>함께 보면 좋은 자료</h3>
    <p class="tg-recommend-desc">매매 원칙을 세우고 지키는 데 도움이 되는 투자 원칙 노트를 함께 활용해보세요.</p>
  </div>
  <a class="tg-cta-btn" href="https://link.coupang.com/a/fIJlWR2jRY" data-partner="coupang" data-category="투자원칙 노트/멘탈관리 도서">둘러보기 →</a>
</section>
<p class="tg-caution">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>

<section class="tg-card">
  <h3>관련 계산기</h3>
  <ul class="tg-related-list">
    <li><a href="/guide/stop-loss-calculation-2026/">손절 라인 계산법 가이드</a></li>
    <li><a href="/invest/stocks/pnl/">주식 PnL 계산기</a></li>
    <li><a href="/invest/stocks/dividend-yield/">배당수익률(YoC) 계산기</a></li>
    <li><a href="/invest/stocks/avg-cost/">주식 평단가·물타기 계산기</a></li>
    <li><a href="/invest/">투자 계산기 모음</a></li>
  </ul>
</section>

<section class="tg-card" id="tg-faq">
  <h3>자주 묻는 질문</h3>

  <details class="tg-faq-item">
    <summary>손절가는 어떻게 계산하나요?</summary>
    <p>손절가 = 진입가 × (1 − 손절 폭)입니다. 예를 들어 진입가 72,000원에 손절 폭 5%라면 손절가는 68,400원입니다. 이 계산기에 진입가와 손절 폭을 입력하면 자동으로 계산됩니다.</p>
  </details>
  <details class="tg-faq-item">
    <summary>손절 폭은 몇 %가 적당한가요?</summary>
    <p>정답은 없지만 투자 기간이 짧을수록 좁게, 길수록 넓게 잡는 경우가 많습니다. 단기 매매는 3~5%, 스윙은 7~10%, 장기 투자는 15~20% 선이 흔히 쓰이며 종목 변동성에 따라 달라집니다. 자세한 기준은 <a href="/guide/stop-loss-calculation-2026/">손절 라인 계산법 가이드</a>에서 확인하세요.</p>
  </details>
  <details class="tg-faq-item">
    <summary>손익비는 얼마가 적당한가요?</summary>
    <p>정답은 없지만, 일반적으로 손익비 1.5~2배 이상을 권장하는 경우가 많습니다. 다만 이는 참고 기준일 뿐 본인의 투자 성향과 종목 특성에 따라 조정이 필요합니다.</p>
  </details>
  <details class="tg-faq-item">
    <summary>수수료·세금도 반영되나요?</summary>
    <p>이 계산기는 목표가·손절가·손익비 산출에 집중한 것으로, 수수료·세금은 반영하지 않습니다. 실제 체결 시에는 수수료·세금·슬리피지를 감안해 판단하세요.</p>
  </details>
  <details class="tg-faq-item">
    <summary>수량을 입력하지 않아도 계산되나요?</summary>
    <p>네, 수량은 선택 입력입니다. 비워두면 목표가·손절가·손익비만 계산되고, 수량을 입력하면 예상 이익·예상 손실 금액까지 함께 표시됩니다.</p>
  </details>
</section>

<!-- AD SLOT 2 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_TARGETS_2"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 업데이트: 2026-10-07</small>

<style>
  .tg-breadcrumb { font-size: 0.85rem; color: #8c7355; margin-bottom: 1rem; }
  .tg-breadcrumb a { color: #8c7355; text-decoration: none; }
  .tg-breadcrumb a:hover { text-decoration: underline; }

  .tg-hero {
    background: linear-gradient(135deg, #f8efe5, #f3e7d9);
    border: 1px solid #e3d4c5; border-radius: 18px; padding: 28px; margin-bottom: 24px;
  }
  .tg-hero h1 { margin-top: 0; color: #785a43; }
  .tg-hero-desc { line-height: 1.7; color: #5c4a38; }

  .tg-formula-box {
    background: #fff; border: 1px solid #eaddcd; border-radius: 14px; padding: 16px 20px; margin-top: 16px;
  }
  .tg-formula-title { font-weight: 800; color: #785a43; margin: 0 0 8px; }
  .tg-formula-box ul { margin: 0; padding-left: 18px; color: #5c4a38; line-height: 1.8; }

  .tg-card { background: #fff; border: 1px solid #f1eae1; border-radius: 18px; padding: 24px; margin-bottom: 20px; }
  .tg-card-light { background: #faf7f2; border-color: #eaddcd; }
  .tg-card h3 { border-left: 4px solid #c2410c; padding-left: 10px; color: #785a43; }

  .tg-field { margin-bottom: 14px; }
  .tg-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #5c4a38; }
  .tg-field input {
    width: 100%; padding: 10px 12px; border: 1px solid #e3d4c5;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box;
  }
  .tg-field-row { display: flex; gap: 14px; flex-wrap: wrap; }
  .tg-field-row .tg-field { flex: 1; min-width: 160px; }

  .tg-btn-row { display: flex; gap: 10px; }
  .tg-btn-main {
    flex: 1; background: #c2410c; color: #fff; border: none; border-radius: 10px;
    padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer;
  }
  .tg-btn-main:hover { opacity: 0.92; }
  .tg-btn-sub {
    background: #fff; color: #785a43; border: 1px solid #e3d4c5; border-radius: 10px;
    padding: 12px 20px; font-size: 1rem; font-weight: 600; cursor: pointer;
  }
  .tg-btn-sub:hover { background: #785a43; color: #fff; }

  .tg-result { margin-top: 20px; border-top: 1px solid #f1eae1; padding-top: 16px; }
  .tg-result-row { display: flex; justify-content: space-between; padding: 8px 0; color: #5c4a38; }
  .tg-result-main { background: #fce8db; color: #c2410c; border-radius: 8px; padding: 10px 12px; margin-top: 6px; font-weight: 700; }
  .tg-caution { font-size: 0.85rem; color: #8c7355; margin-top: 16px; }

  .tg-table-wrap { overflow-x: auto; }
  .tg-table { width: 100%; border-collapse: collapse; font-size: 0.95rem; }
  .tg-table th { background: #f8efe5; color: #785a43; text-align: left; padding: 10px 12px; border-bottom: 2px solid #e3d4c5; white-space: nowrap; }
  .tg-table td { padding: 10px 12px; border-bottom: 1px solid #f1eae1; color: #3a2c1d; }
  .tg-table tbody tr:last-child td { border-bottom: none; }

  .tg-guide-box {
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
    background: #cfdfe8; border: 1px solid #1f5c7a; border-radius: 18px; padding: 20px 24px; margin-bottom: 20px;
  }
  .tg-guide-body { flex: 1; min-width: 200px; }
  .tg-guide-body h3 { border-left: none; padding-left: 0; margin: 0 0 4px; color: #13293d; }
  .tg-guide-body p { margin: 0; color: #13293d; line-height: 1.6; }
  .tg-guide-btn {
    display: inline-block; background: #1f5c7a; color: #fff; text-decoration: none;
    font-weight: 700; padding: 12px 22px; border-radius: 999px; white-space: nowrap;
  }
  .tg-guide-btn:hover { background: #174d68; }

  .tg-cta-box {
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
    background: linear-gradient(135deg, #fff3ea, #fce8db);
    border: 1px solid #f0c8a0; border-radius: 18px; padding: 20px 24px; margin-bottom: 20px;
  }
  .tg-cta-icon { font-size: 2rem; line-height: 1; }
  .tg-cta-body { flex: 1; min-width: 200px; }
  .tg-cta-body h3 { border-left: none; padding-left: 0; margin: 0 0 2px; color: #9a3412; }
  .tg-recommend-desc { font-size: 0.92rem; color: #6b5842; margin: 4px 0 0; line-height: 1.5; }
  .tg-cta-btn {
    display: inline-block; background: #c2410c; color: #fff; text-decoration: none;
    font-weight: 700; padding: 12px 22px; border-radius: 999px; white-space: nowrap;
    box-shadow: 0 4px 14px rgba(194,65,12,0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }
  .tg-cta-btn:hover { background: #a8380a; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(194,65,12,0.45); }

  .tg-related-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
  .tg-related-list li { margin: 0; }
  .tg-related-list a {
    display: inline-block; color: #785a43; text-decoration: none; font-weight: 600;
    background: #f8efe5; border: 1px solid #eaddcd; border-radius: 999px;
    padding: 8px 16px; font-size: 0.9rem; transition: all 0.15s ease;
  }
  .tg-related-list a:hover { background: #c2410c; color: #fff; border-color: #c2410c; }

  .tg-faq-item {
    border: 1px solid #f1eae1; border-radius: 12px; padding: 4px 18px;
    margin-bottom: 10px; background: #fff; transition: background 0.15s ease, border-color 0.15s ease;
  }
  .tg-faq-item[open] { background: #fffaf5; border-color: #f0c8a0; }
  .tg-faq-item summary {
    cursor: pointer; list-style: none; font-weight: 700; color: #785a43;
    padding: 14px 28px 14px 0; position: relative; line-height: 1.5;
  }
  .tg-faq-item summary::-webkit-details-marker { display: none; }
  .tg-faq-item summary::after {
    content: "+"; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
    font-size: 1.3rem; font-weight: 400; color: #c2410c; transition: transform 0.2s ease;
  }
  .tg-faq-item[open] summary::after { content: "×"; }
  .tg-faq-item summary:hover { color: #c2410c; }
  .tg-faq-item p { margin: 0 0 16px; line-height: 1.7; color: #5c4a38; }
  .tg-faq-item a { color: #1f5c7a; font-weight: 600; }

  @media (max-width: 640px) {
    .tg-cta-box, .tg-guide-box { flex-direction: column; align-items: flex-start; }
    .tg-cta-btn, .tg-guide-btn { width: 100%; text-align: center; white-space: normal; }
  }
</style>

<script>
  const $t = (id) => document.getElementById(id);

  function tgParseNum(id) {
    return parseFloat(($t(id).value || '0').replace(/,/g, '')) || 0;
  }
  function tgAutoComma(id) {
    const el = $t(id);
    el.addEventListener('input', () => {
      const raw = el.value.replace(/[^0-9.]/g, '');
      const num = parseFloat(raw);
      el.value = (!isNaN(num) && raw !== '' && !raw.endsWith('.')) ? num.toLocaleString('ko-KR', {maximumFractionDigits: 4}) : raw;
    });
  }
  ['tg-entry', 'tg-target-rate', 'tg-stop-rate', 'tg-qty'].forEach(tgAutoComma);

  function tgCalculate() {
    const entry = tgParseNum('tg-entry');
    const targetRate = tgParseNum('tg-target-rate');
    const stopRate = tgParseNum('tg-stop-rate');
    const qty = tgParseNum('tg-qty');

    const target = entry * (1 + targetRate / 100);
    const stop = entry * (1 - stopRate / 100);
    const ratio = stopRate > 0 ? targetRate / stopRate : 0;

    $t('tg-r-target').textContent = Math.round(target).toLocaleString('ko-KR') + '원';
    $t('tg-r-stop').textContent = Math.round(stop).toLocaleString('ko-KR') + '원';
    $t('tg-r-ratio').textContent = ratio.toFixed(2) + ' : 1';

    const profitRow = $t('tg-r-profit-row');
    const lossRow = $t('tg-r-loss-row');
    if (qty > 0) {
      const profit = (target - entry) * qty;
      const loss = (entry - stop) * qty;
      $t('tg-r-profit').textContent = Math.round(profit).toLocaleString('ko-KR') + '원';
      $t('tg-r-loss').textContent = Math.round(loss).toLocaleString('ko-KR') + '원';
      profitRow.hidden = false;
      lossRow.hidden = false;
    } else {
      profitRow.hidden = true;
      lossRow.hidden = true;
    }

    $t('tg-result').hidden = false;
    $t('tg-result').scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }

  function tgReset() {
    ['tg-entry', 'tg-qty'].forEach(id => $t(id).value = '');
    $t('tg-target-rate').value = '10';
    $t('tg-stop-rate').value = '5';
    $t('tg-result').hidden = true;
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
    {"@type": "ListItem", "position": 3, "name": "손절 계산기 (목표가·손절가)", "item": "https://calculator.khaistory.com/invest/stocks/targets/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "손절가는 어떻게 계산하나요?", "acceptedAnswer": {"@type": "Answer", "text": "손절가 = 진입가 × (1 − 손절 폭)입니다. 예를 들어 진입가 72,000원에 손절 폭 5%라면 손절가는 68,400원입니다. 이 계산기에 진입가와 손절 폭을 입력하면 자동으로 계산됩니다."}},
    {"@type": "Question", "name": "손절 폭은 몇 %가 적당한가요?", "acceptedAnswer": {"@type": "Answer", "text": "정답은 없지만 투자 기간이 짧을수록 좁게, 길수록 넓게 잡는 경우가 많습니다. 단기 매매는 3~5%, 스윙은 7~10%, 장기 투자는 15~20% 선이 흔히 쓰이며 종목 변동성에 따라 달라집니다."}},
    {"@type": "Question", "name": "손익비는 얼마가 적당한가요?", "acceptedAnswer": {"@type": "Answer", "text": "일반적으로 손익비 1.5~2배 이상을 권장하는 경우가 많지만, 참고 기준일 뿐 본인의 투자 성향과 종목 특성에 따라 조정이 필요합니다."}},
    {"@type": "Question", "name": "수수료·세금도 반영되나요?", "acceptedAnswer": {"@type": "Answer", "text": "이 계산기는 목표가·손절가·손익비 산출에 집중한 것으로 수수료·세금은 반영하지 않습니다."}},
    {"@type": "Question", "name": "수량을 입력하지 않아도 계산되나요?", "acceptedAnswer": {"@type": "Answer", "text": "네, 수량은 선택 입력입니다. 비워두면 목표가·손절가·손익비만 계산되고, 입력하면 예상 이익·예상 손실 금액까지 함께 표시됩니다."}}
  ]
}
</script>
