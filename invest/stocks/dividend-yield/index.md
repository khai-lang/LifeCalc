---
layout: "default"
title: "배당수익률(Yield)·투자원가수익률(YoC) 계산기 - 세후 배당금까지 | LifeCalc"
description: "현재 주가 기준 배당수익률과 매수가 기준 투자원가수익률(YoC)을 함께 계산하고, 보유수량을 입력하면 세후 예상 배당금까지 확인할 수 있습니다."
permalink: "/invest/stocks/dividend-yield/"
---

<a class="dy-skip-link" href="#dy-calculator">계산기로 바로가기</a>

<nav class="dy-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/invest/">투자 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">배당수익률·YoC 계산기</span>
</nav>

<section class="dy-hero">
  <h2>배당수익률(Yield)·투자원가수익률(YoC) 계산기</h2>
  <p class="dy-hero-desc">
    배당수익률은 기준을 무엇으로 삼느냐에 따라 완전히 다른 숫자가 나옵니다. <strong>현재 주가 기준
    배당수익률(Yield)</strong>은 "지금 사면 얼마나 받나"를, <strong>매수가 기준 투자원가수익률
    (YoC, Yield on Cost)</strong>은 "내가 산 가격 대비 얼마나 받고 있나"를 보여줍니다. 이 계산기는
    두 지표를 함께 계산하고, 보유수량을 입력하면 세후 예상 배당금까지 확인할 수 있습니다.
  </p>
</section>

<section id="dy-calculator" class="dy-card">
  <h2>배당수익률 계산</h2>

  <div class="dy-field">
    <label for="dy-current-price">현재 주가 (원)</label>
    <input type="text" inputmode="numeric" id="dy-current-price" placeholder="예: 100,000">
  </div>
  <div class="dy-field">
    <label for="dy-div-per-share">주당 배당금 (연, 원)</label>
    <input type="text" inputmode="numeric" id="dy-div-per-share" placeholder="예: 2,940">
  </div>
  <div class="dy-field">
    <label for="dy-buy-price">나의 매수가 (원, 선택)</label>
    <input type="text" inputmode="numeric" id="dy-buy-price" placeholder="예: 70,000">
    <p class="dy-hint">입력하면 매수가 기준 투자원가수익률(YoC)도 함께 계산됩니다.</p>
  </div>
  <div class="dy-field">
    <label for="dy-qty">보유수량 (주, 선택)</label>
    <input type="text" inputmode="decimal" id="dy-qty" placeholder="예: 30">
    <p class="dy-hint">입력하면 세전·세후 예상 배당금을 원화로 함께 보여드립니다.</p>
  </div>
  <div class="dy-field">
    <label for="dy-tax-rate">배당소득세 (%)</label>
    <input type="text" inputmode="decimal" id="dy-tax-rate" placeholder="예: 15.4" value="15.4">
    <p class="dy-hint">국내 상장주식 배당소득은 일반적으로 15.4%(소득세 14%+지방소득세 1.4%)입니다. 해외주식·ISA 계좌 등은 세율이 다를 수 있어 직접 수정할 수 있습니다.</p>
  </div>

  <button type="button" class="dy-btn-main" onclick="dyCalculate()">계산</button>

  <div class="dy-result" id="dy-result" hidden>
    <div class="dy-result-row dy-result-main"><span>배당수익률 (현재가 기준, Yield)</span><strong id="dy-r-yield">0%</strong></div>
    <div class="dy-result-row dy-result-main" id="dy-r-yoc-row" hidden><span>투자원가수익률 (매수가 기준, YoC)</span><strong id="dy-r-yoc">0%</strong></div>
    <div class="dy-result-row" id="dy-r-pre-row" hidden><span>세전 연간 배당금</span><strong id="dy-r-pre">0원</strong></div>
    <div class="dy-result-row" id="dy-r-post-row" hidden><span>세후 연간 배당금</span><strong id="dy-r-post">0원</strong></div>
    <div class="dy-result-row" id="dy-r-monthly-row" hidden><span>세후 월평균 배당금</span><strong id="dy-r-monthly">0원</strong></div>
  </div>
</section>

<!-- AD SLOT 1 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_DIVYIELD_1"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="dy-card dy-card-light">
  <h3>Yield와 YoC, 뭐가 다른가요</h3>
  <p>
    예를 들어 7만원에 매수한 주식이 매년 주당 2,940원을 배당한다면 YoC는 4.2%입니다. 만약 지금 주가가
    올라 10만원이 되었다면 "현재가 기준 Yield"는 2.94%로 낮아 보이지만, 내가 산 가격 기준(YoC)으로는
    여전히 4.2%를 유지합니다. 장기 배당 투자자들이 YoC를 중요하게 보는 이유입니다. 반대로 지금 신규
    매수를 고려 중이라면, 매수 시점 기준 실제 수익률인 Yield(현재가 기준)를 보는 것이 맞습니다.
  </p>
  <p class="dy-note">
    ※ 국내 상장주식의 배당소득에는 일반적으로 15.4%(소득세 14%+지방소득세 1.4%)가 원천징수됩니다.
    연간 금융소득(이자+배당)이 2,000만원을 초과하면 금융소득종합과세 대상이 될 수 있으니, 배당 비중이
    큰 포트폴리오를 운용 중이라면 이 부분도 함께 확인해보시길 권장합니다.
  </p>
</section>

<section class="dy-cta-box">
  <div class="dy-cta-icon">🎁</div>
  <div class="dy-cta-body">
    <h3>함께 보면 좋은 자료</h3>
    <p class="dy-recommend-desc">장기 배당 투자를 계획하고 있다면 배당금 관리 다이어리로 종목별 배당 일정을 정리해보세요.</p>
  </div>
  <a class="dy-cta-btn" href="https://link.coupang.com/a/fIJlWR2jRY" rel="noopener noreferrer">둘러보기 →</a>
</section>

<section class="dy-card">
  <h3>관련 계산기</h3>
  <ul class="dy-related-list">
    <li><a href="/invest/stocks/pnl/">주식 PnL 계산기</a></li>
    <li><a href="/invest/stocks/targets/">목표가·손절가 계산기</a></li>
    <li><a href="/invest/stocks/avg-cost/">주식 평단가·물타기 계산기</a></li>
  </ul>
</section>

<section class="dy-card" id="dy-faq">
  <h3>자주 묻는 질문</h3>

  <details class="dy-faq-item">
    <summary>Yield와 YoC 중 어떤 걸 봐야 하나요?</summary>
    <p>지금 신규 매수를 고려 중이라면 현재가 기준 Yield를, 이미 보유 중인 종목의 실제 성과를 보고
    싶다면 매수가 기준 YoC를 참고하는 것이 맞습니다.</p>
  </details>
  <details class="dy-faq-item">
    <summary>배당소득세율을 직접 입력할 수 있나요?</summary>
    <p>네, 기본값 15.4%(국내 상장주식 기준)에서 직접 수정할 수 있습니다. 해외주식이나 ISA 계좌 등은
    세율·과세 방식이 다를 수 있으니 실제 적용받는 세율로 수정해 계산하세요.</p>
  </details>
  <details class="dy-faq-item">
    <summary>금융소득종합과세는 무엇인가요?</summary>
    <p>연간 이자·배당 등 금융소득 합계가 2,000만원을 초과하면 다른 종합소득과 합산되어 누진세율이
    적용될 수 있는 제도입니다. 배당 비중이 큰 경우 별도로 확인이 필요합니다.</p>
  </details>
  <details class="dy-faq-item">
    <summary>보유수량을 입력하지 않아도 계산되나요?</summary>
    <p>네, 보유수량은 선택 입력입니다. 비워두면 수익률(%)만 계산되고, 입력하면 세전·세후 예상 배당금
    금액까지 함께 표시됩니다.</p>
  </details>
  <details class="dy-faq-item">
    <summary>모바일에서도 사용할 수 있나요?</summary>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </details>
</section>

<!-- AD SLOT 2 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_DIVYIELD_2"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .dy-breadcrumb { font-size: 0.85rem; color: #8c7355; margin-bottom: 1rem; }
  .dy-breadcrumb a { color: #8c7355; text-decoration: none; }
  .dy-breadcrumb a:hover { text-decoration: underline; }

  .dy-hero {
    background: linear-gradient(135deg, #f8efe5, #f3e7d9);
    border: 1px solid #e3d4c5; border-radius: 18px; padding: 28px; margin-bottom: 24px;
  }
  .dy-hero h1 { margin-top: 0; color: #785a43; }
  .dy-hero-desc { line-height: 1.7; color: #5c4a38; }

  .dy-card { background: #fff; border: 1px solid #f1eae1; border-radius: 18px; padding: 24px; margin-bottom: 20px; }
  .dy-card-light { background: #faf7f2; border-color: #eaddcd; }
  .dy-card h3 { border-left: 4px solid #c2410c; padding-left: 10px; color: #785a43; }
  .dy-note { font-size: 0.85rem; color: #8c7355; }
  .dy-hint { font-size: 0.8rem; color: #8c7355; margin: 6px 0 0; }

  .dy-field { margin-bottom: 14px; }
  .dy-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #5c4a38; }
  .dy-field input {
    width: 100%; padding: 10px 12px; border: 1px solid #e3d4c5;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box;
  }

  .dy-btn-main {
    background: #c2410c; color: #fff; border: none; border-radius: 10px;
    padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%;
  }
  .dy-btn-main:hover { opacity: 0.92; }

  .dy-result { margin-top: 20px; border-top: 1px solid #f1eae1; padding-top: 16px; }
  .dy-result-row { display: flex; justify-content: space-between; padding: 8px 0; color: #5c4a38; }
  .dy-result-main { background: #fce8db; color: #c2410c; border-radius: 8px; padding: 10px 12px; margin-top: 6px; font-weight: 700; }

  .dy-cta-box {
    display: flex; align-items: center; gap: 16px; flex-wrap: wrap;
    background: linear-gradient(135deg, #fff3ea, #fce8db);
    border: 1px solid #f0c8a0; border-radius: 18px; padding: 20px 24px; margin-bottom: 20px;
  }
  .dy-cta-icon { font-size: 2rem; line-height: 1; }
  .dy-cta-body { flex: 1; min-width: 200px; }
  .dy-cta-body h3 { border-left: none; padding-left: 0; margin: 0 0 2px; color: #9a3412; }
  .dy-recommend-desc { font-size: 0.92rem; color: #6b5842; margin: 4px 0 0; line-height: 1.5; }
  .dy-cta-btn {
    display: inline-block; background: #c2410c; color: #fff; text-decoration: none;
    font-weight: 700; padding: 12px 22px; border-radius: 999px; white-space: nowrap;
    box-shadow: 0 4px 14px rgba(194,65,12,0.35);
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }
  .dy-cta-btn:hover { background: #a8380a; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(194,65,12,0.45); }

  .dy-related-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; gap: 10px; }
  .dy-related-list li { margin: 0; }
  .dy-related-list a {
    display: inline-block; color: #785a43; text-decoration: none; font-weight: 600;
    background: #f8efe5; border: 1px solid #eaddcd; border-radius: 999px;
    padding: 8px 16px; font-size: 0.9rem; transition: all 0.15s ease;
  }
  .dy-related-list a:hover { background: #c2410c; color: #fff; border-color: #c2410c; }

  .dy-faq-item {
    border: 1px solid #f1eae1; border-radius: 12px; padding: 4px 18px;
    margin-bottom: 10px; background: #fff; transition: background 0.15s ease, border-color 0.15s ease;
  }
  .dy-faq-item[open] { background: #fffaf5; border-color: #f0c8a0; }
  .dy-faq-item summary {
    cursor: pointer; list-style: none; font-weight: 700; color: #785a43;
    padding: 14px 28px 14px 0; position: relative; line-height: 1.5;
  }
  .dy-faq-item summary::-webkit-details-marker { display: none; }
  .dy-faq-item summary::after {
    content: "+"; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
    font-size: 1.3rem; font-weight: 400; color: #c2410c; transition: transform 0.2s ease;
  }
  .dy-faq-item[open] summary::after { content: "×"; }
  .dy-faq-item summary:hover { color: #c2410c; }
  .dy-faq-item p { margin: 0 0 16px; line-height: 1.7; color: #5c4a38; }

  @media (max-width: 640px) {
    .dy-cta-box { flex-direction: column; align-items: flex-start; }
    .dy-cta-btn { width: 100%; text-align: center; }
  }
</style>

<script>
  const $y = (id) => document.getElementById(id);

  function dyParseNum(id) {
    return parseFloat(($y(id).value || '0').replace(/,/g, '')) || 0;
  }
  function dyAutoComma(id) {
    const el = $y(id);
    el.addEventListener('input', () => {
      const raw = el.value.replace(/[^0-9.]/g, '');
      const num = parseFloat(raw);
      el.value = (!isNaN(num) && raw !== '' && !raw.endsWith('.')) ? num.toLocaleString('ko-KR', {maximumFractionDigits: 4}) : raw;
    });
  }
  ['dy-current-price', 'dy-div-per-share', 'dy-buy-price', 'dy-qty', 'dy-tax-rate'].forEach(dyAutoComma);

  function dyCalculate() {
    const currentPrice = dyParseNum('dy-current-price');
    const divPerShare = dyParseNum('dy-div-per-share');
    const buyPrice = dyParseNum('dy-buy-price');
    const qty = dyParseNum('dy-qty');
    const taxRate = dyParseNum('dy-tax-rate') / 100;

    const yieldRate = currentPrice > 0 ? (divPerShare / currentPrice) * 100 : 0;
    $y('dy-r-yield').textContent = yieldRate.toFixed(2) + '%';

    const yocRow = $y('dy-r-yoc-row');
    if (buyPrice > 0) {
      const yoc = (divPerShare / buyPrice) * 100;
      $y('dy-r-yoc').textContent = yoc.toFixed(2) + '%';
      yocRow.hidden = false;
    } else {
      yocRow.hidden = true;
    }

    const preRow = $y('dy-r-pre-row'), postRow = $y('dy-r-post-row'), monthlyRow = $y('dy-r-monthly-row');
    if (qty > 0) {
      const annualPre = divPerShare * qty;
      const annualPost = annualPre * (1 - taxRate);
      $y('dy-r-pre').textContent = Math.round(annualPre).toLocaleString('ko-KR') + '원';
      $y('dy-r-post').textContent = Math.round(annualPost).toLocaleString('ko-KR') + '원';
      $y('dy-r-monthly').textContent = Math.round(annualPost / 12).toLocaleString('ko-KR') + '원';
      preRow.hidden = false; postRow.hidden = false; monthlyRow.hidden = false;
    } else {
      preRow.hidden = true; postRow.hidden = true; monthlyRow.hidden = true;
    }

    $y('dy-result').hidden = false;
    $y('dy-result').scrollIntoView({behavior: 'smooth', block: 'nearest'});
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
    {"@type": "ListItem", "position": 3, "name": "배당수익률·YoC 계산기", "item": "https://calculator.khaistory.com/invest/stocks/dividend-yield/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "Yield와 YoC 중 어떤 걸 봐야 하나요?", "acceptedAnswer": {"@type": "Answer", "text": "지금 신규 매수를 고려 중이라면 현재가 기준 Yield를, 이미 보유 중인 종목의 실제 성과를 보고 싶다면 매수가 기준 YoC를 참고하는 것이 맞습니다."}},
    {"@type": "Question", "name": "배당소득세율을 직접 입력할 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네, 기본값 15.4%에서 직접 수정할 수 있습니다. 해외주식·ISA 계좌 등은 세율이 다를 수 있으니 실제 적용받는 세율로 수정해 계산하세요."}},
    {"@type": "Question", "name": "금융소득종합과세는 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "연간 이자·배당 등 금융소득 합계가 2,000만원을 초과하면 다른 종합소득과 합산되어 누진세율이 적용될 수 있는 제도입니다."}},
    {"@type": "Question", "name": "보유수량을 입력하지 않아도 계산되나요?", "acceptedAnswer": {"@type": "Answer", "text": "네, 보유수량은 선택 입력입니다. 비워두면 수익률만 계산되고, 입력하면 세전·세후 예상 배당금까지 함께 표시됩니다."}},
    {"@type": "Question", "name": "모바일에서도 사용할 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}}
  ]
}
</script>
