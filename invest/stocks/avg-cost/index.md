---
layout: "default"
title: "주식 평단가·물타기 계산기 - 목표 평단가 도달 매수량 역산 | LifeCalc"
description: "원하는 목표 평균 단가에 도달하기 위해 추가로 몇 주를 매수해야 하는지 역산합니다. 기존 평단가·수량과 목표 평단가를 입력하세요."
permalink: "/invest/stocks/avg-cost/"
---

<a class="sac-skip-link" href="#sac-calculator">계산기로 바로가기</a>

<nav class="sac-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/invest/">투자 계산기</a> <span aria-hidden="true">›</span>
  <span aria-current="page">주식 평단가·물타기 계산기</span>
</nav>

<section class="sac-hero">
  <h2>주식 평단가·물타기 계산기</h2>
  <p class="sac-hero-desc">"평단가를 얼마까지 낮추려면 몇 주를 더 사야 할까?" 물타기를 고민할 때 가장 궁금한 질문입니다. 이 계산기는 기존 평단가·보유수량과 예상 추가 매수가, 원하는 목표 평균 단가를 입력하면 필요한 추가 매수 수량을 역산해서 알려줍니다.</p>
</section>

<section id="sac-calculator" class="sac-card">
  <h2>목표 평단가 도달 매수량 계산</h2>
  <div class="sac-field-row">
  <div class="sac-field">
    <label for="sac-old-price">기존 평단가 (원)</label>
    <input type="text" inputmode="decimal" id="sac-old-price" placeholder="예: 72,000">
  </div>
  <div class="sac-field">
    <label for="sac-old-qty">기존 보유수량 (주)</label>
    <input type="text" inputmode="decimal" id="sac-old-qty" placeholder="예: 50">
  </div>
  </div>
  <div class="sac-field-row">
  <div class="sac-field">
    <label for="sac-add-price">추가 매수 예정가 (원)</label>
    <input type="text" inputmode="decimal" id="sac-add-price" placeholder="예: 60,000">
  </div>
  <div class="sac-field">
    <label for="sac-target">목표 평균 단가 (원)</label>
    <input type="text" inputmode="decimal" id="sac-target" placeholder="예: 66,000">
  </div>
  </div>
  <button type="button" class="sac-btn-main" onclick="sacCalculate()">계산하기</button>

  <div class="sac-result" id="sac-result" hidden>
    <div class="sac-result-row sac-result-main"><span>필요 추가 매수 수량</span><strong id="sac-r-qty">0</strong></div>
    <div class="sac-result-row"><span>추가 매수 후 총 보유수량</span><strong id="sac-r-total-qty">0</strong></div>
    <div class="sac-result-row"><span>추가 매수에 필요한 금액</span><strong id="sac-r-cost">0</strong></div>
  </div>
</section>

<!-- AD SLOT 1 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_11"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="sac-card sac-card-light">
  <h3>실전 활용 가이드</h3>
  <p>예를 들어 7만2천원에 50주를 보유 중인데 6만원까지 하락했고, 평단가를 6만6천원까지 낮추고 싶다면 몇 주를 더 사야 하는지 계산해줍니다. 목표 평단가는 반드시 추가 매수가와 기존 평단가 사이의 값이어야 계산이 성립합니다.</p>
  <p>목표 평단가를 추가 매수가보다 낮게 설정하거나 기존 평단가보다 높게 설정하면 수학적으로 계산이 성립하지 않습니다(무한대이거나 음수). 이 경우 계산기는 입력값을 다시 확인하라는 안내를 보여줍니다.</p>
</section>

<section class="sac-card sac-card-light sac-recommend">
  <h3>함께 보면 좋은 자료</h3>
  <p class="sac-recommend-desc">분할매수 전략을 세울 때 매수 계획표를 미리 기록해두면 도움이 됩니다.</p>
  <div class="sac-recommend-slot" data-partner="coupang" data-category="투자 플래너/매매일지">
  https://link.coupang.com/a/fIKvWxDGSq
  </div>
</section>

<section class="sac-card">
  <h3>관련 계산기</h3>
  <ul class="sac-related-list">
    <li><a href="/invest/stocks/pnl/">주식 수익/손실(PnL) 계산기</a></li>
    <li><a href="/invest/stocks/targets/">목표가·손절가 계산기</a></li>
    <li><a href="/invest/crypto/avg-cost/">코인 평단가·추가매수 계산기</a></li>
  </ul>
</section>

<section class="sac-card" id="sac-faq">
  <h3>자주 묻는 질문</h3>
  <div class="sac-faq-item">
    <h4>결과가 '계산 불가'로 나오는 이유는 무엇인가요?</h4>
    <p>목표 평균 단가가 추가 매수가와 기존 평단가 사이에 있지 않으면 계산이 성립하지 않습니다. 예를 들어 목표 평단가가 추가 매수가보다 낮으면 아무리 많이 사도 도달할 수 없습니다.</p>
  </div>
  <div class="sac-faq-item">
    <h4>수수료는 반영되나요?</h4>
    <p>이 계산기는 가중평균 계산에 집중한 근사치로, 매매 수수료는 반영하지 않습니다.</p>
  </div>
  <div class="sac-faq-item">
    <h4>소수점 주식(분할 매수)도 계산할 수 있나요?</h4>
    <p>네, 수량 입력란에 소수점을 입력하면 그대로 반영됩니다.</p>
  </div>
  <div class="sac-faq-item">
    <h4>물타기가 항상 좋은 전략인가요?</h4>
    <p>그렇지 않습니다. 평단가는 낮아지지만 투입 원금과 리스크도 함께 커지므로, 종목의 펀더멘털과 전체 포트폴리오 비중을 함께 고려해야 합니다.</p>
  </div>
  <div class="sac-faq-item">
    <h4>모바일에서도 사용할 수 있나요?</h4>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </div>
</section>

<!-- AD SLOT 2 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="TODO_SLOT_ID_INVEST_12"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .sac-breadcrumb { font-size: 0.85rem; color: #8c7355; margin-bottom: 1rem; }
  .sac-breadcrumb a { color: #8c7355; text-decoration: none; }
  .sac-breadcrumb a:hover { text-decoration: underline; }

  .sac-hero {
    background: linear-gradient(135deg, #f8efe5, #f3e7d9);
    border: 1px solid #e3d4c5;
    border-radius: 18px;
    padding: 28px;
    margin-bottom: 24px;
  }
  .sac-hero h1 { margin-top: 0; color: #785a43; }
  .sac-hero-desc { line-height: 1.7; color: #5c4a38; }

  .sac-card {
    background: #fff;
    border: 1px solid #f1eae1;
    border-radius: 18px;
    padding: 24px;
    margin-bottom: 20px;
  }
  .sac-card-light { background: #faf7f2; border-color: #eaddcd; }
  .sac-card h3 { border-left: 4px solid #8c7355; padding-left: 10px; }
  .sac-note { font-size: 0.85rem; color: #8c7355; }
  .sac-hint { font-size: 0.8rem; color: #8c7355; margin: 4px 0 0; }

  .sac-field { margin-bottom: 14px; }
  .sac-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #5c4a38; }
  .sac-field input {
    width: 100%; padding: 10px 12px; border: 1px solid #e3d4c5;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box;
  }
  .sac-field-row { display: flex; gap: 14px; }
  .sac-field-row .sac-field { flex: 1; }

  .sac-btn-main {
    background: #c2410c; color: #fff; border: none; border-radius: 10px;
    padding: 12px 24px; font-size: 1rem; font-weight: 600; cursor: pointer; width: 100%;
  }
  .sac-btn-main:hover { opacity: 0.92; }

  .sac-result { margin-top: 20px; border-top: 1px solid #f1eae1; padding-top: 16px; }
  .sac-result-row { display: flex; justify-content: space-between; padding: 8px 0; color: #5c4a38; }
  .sac-result-main { background: #fce8db; color: #c2410c; border-radius: 8px; padding: 10px 12px; margin-top: 6px; }

  .sac-recommend-desc { font-size: 0.9rem; color: #8c7355; }
  .sac-recommend-slot {
    min-height: 90px; border: 1px dashed #dcc9b3; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: #b7a58c; font-size: 0.85rem;
  }

  .sac-related-list { list-style: none; padding: 0; margin: 0; }
  .sac-related-list li { margin-bottom: 8px; }
  .sac-related-list a { color: #c2410c; text-decoration: none; font-weight: 500; }
  .sac-related-list a:hover { text-decoration: underline; }

  .sac-faq-item { margin-bottom: 16px; }
  .sac-faq-item h4 { margin-bottom: 6px; color: #785a43; }
  .sac-faq-item p { margin: 0; line-height: 1.6; color: #5c4a38; }
</style>

<script>
  function sacParseNum(id) {
    return parseFloat((document.getElementById(id).value || '0').replace(/,/g, '')) || 0;
  }
  function sacAutoComma(id) {
    const el = document.getElementById(id);
    el.addEventListener('input', () => {
      const raw = el.value.replace(/[^0-9.]/g, '');
      const num = parseFloat(raw);
      el.value = (!isNaN(num) && raw !== '' && !raw.endsWith('.')) ? num.toLocaleString('ko-KR', {maximumFractionDigits: 4}) : raw;
    });
  }
  ['sac-old-price', 'sac-old-qty', 'sac-add-price', 'sac-target'].forEach(sacAutoComma);

  function sacCalculate() {
    const oldPrice = sacParseNum('sac-old-price');
    const oldQty = sacParseNum('sac-old-qty');
    const addPrice = sacParseNum('sac-add-price');
    const target = sacParseNum('sac-target');

    const denom = target - addPrice;
    const isValidRange = (target < oldPrice && target > addPrice) || (target > oldPrice && target < addPrice);

    if (!isValidRange || denom === 0) {
      document.getElementById('sac-r-qty').textContent = '계산 불가 (목표 단가를 확인해주세요)';
      document.getElementById('sac-r-total-qty').textContent = '-';
      document.getElementById('sac-r-cost').textContent = '-';
    } else {
      const addQty = oldQty * (oldPrice - target) / denom;
      const totalQty = oldQty + addQty;
      const cost = addQty * addPrice;
      document.getElementById('sac-r-qty').textContent = Math.max(addQty, 0).toLocaleString('ko-KR', {maximumFractionDigits: 2}) + '주';
      document.getElementById('sac-r-total-qty').textContent = totalQty.toLocaleString('ko-KR', {maximumFractionDigits: 2}) + '주';
      document.getElementById('sac-r-cost').textContent = Math.round(Math.max(cost, 0)).toLocaleString('ko-KR') + '원';
    }

    document.getElementById('sac-result').hidden = false;
    document.getElementById('sac-result').scrollIntoView({behavior: 'smooth', block: 'nearest'});
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
    {"@type": "ListItem", "position": 3, "name": "주식 평단가·물타기 계산기", "item": "https://calculator.khaistory.com/invest/stocks/avg-cost/"}
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
      "name": "결과가 '계산 불가'로 나오는 이유는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "목표 평균 단가가 추가 매수가와 기존 평단가 사이에 있지 않으면 계산이 성립하지 않습니다. 예를 들어 목표 평단가가 추가 매수가보다 낮으면 아무리 많이 사도 도달할 수 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "수수료는 반영되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "이 계산기는 가중평균 계산에 집중한 근사치로, 매매 수수료는 반영하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "소수점 주식(분할 매수)도 계산할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 수량 입력란에 소수점을 입력하면 그대로 반영됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "물타기가 항상 좋은 전략인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "그렇지 않습니다. 평단가는 낮아지지만 투입 원금과 리스크도 함께 커지므로, 종목의 펀더멘털과 전체 포트폴리오 비중을 함께 고려해야 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."
      }
    }
  ]
}
</script>
