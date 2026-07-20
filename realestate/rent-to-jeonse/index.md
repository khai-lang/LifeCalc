---
canonical: "https://calculator.khaistory.com/realestate/rent-to-jeonse/"
meta-description: "2026년 전월세 전환율 완전정리. 법정 전환율 계산 공식(기준금리+2%p), 전세→월세·월세→전세 환산 방법, 갱신계약과 신규계약의 차이, 법정 상한 초과 시 대응법까지 확인하세요." 
meta-generator: "Jekyll v3.10.0" 
meta-og:description: "전월세 전환율 계산법과 2026년 기준 법정 상한, 전세·월세 환산 공식을 정리했습니다." 
meta-og:locale: "ko_KR" 
meta-og:site_name: "LifeCalc" 
meta-og:title: "전월세 전환율 완전정리 2026 | 계산법·법정 상한·월세 환산" 
meta-og:type: "article" 
meta-og:url: "https://calculator.khaistory.com/guide/jeonse-wolse-conversion-2026/" 
meta-twitter:card: "summary" meta-twitter:title: "전월세 전환율 완전정리 2026 | 계산법·법정 상한·월세 환산" 
meta-viewport: "width=device-width, initial-scale=1" title: "전월세 전환율 계산 방법과 2026년 법정 상한 | 월세 환산까지 정리 | LifeCalc" 
---

<div class="rtj-hero">
  <p class="rtj-eyebrow">부동산 · 전월세</p>
  <h2 class="rtj-title">전세 월세 전환 계산기</h2>
  <p class="rtj-subtitle">전세 ↔ 월세 환산은 물론, 어느 쪽이 더 유리한지 손익분기점까지 확인하세요.<br>2026년 법정 전월세 전환율 <strong>연 5.0%</strong>가 기본값으로 적용되어 있습니다.</p>
</div>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>
<!-- 계산기 광고 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3758454239921831"
     data-ad-slot="7492664289"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<div class="rtj-tabs" role="tablist">
  <button class="rtj-tab rtj-tab-active" data-tab="jeonseToMonthly" role="tab" aria-selected="true">전세 → 월세</button>
  <button class="rtj-tab" data-tab="monthlyToJeonse" role="tab" aria-selected="false">월세 → 전세</button>
  <button class="rtj-tab" data-tab="breakeven" role="tab" aria-selected="false">전세 vs 월세 손익분기점</button>
</div>

<!-- 탭 1: 전세 → 월세 -->
<section class="rtj-panel rtj-panel-active" id="panel-jeonseToMonthly">
  <div class="rtj-card">
    <h3>전세보증금을 월세로 환산</h3>

    <div class="rtj-field">
      <label for="jm-jeonse">전세보증금</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="jm-jeonse" value="300,000,000" data-raw="300000000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="jm-deposit">낮출 월세보증금</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="jm-deposit" value="30,000,000" data-raw="30000000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="jm-rate">적용 전환율 (연)</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="decimal" id="jm-rate" value="5.0" data-raw="5.0">
        <span class="rtj-unit">%</span>
      </div>
      <p class="rtj-hint">2026년 법정 전월세 전환율(주거용) 연 5.0%가 기본값입니다. 계약 조건에 맞게 수정할 수 있습니다.</p>
    </div>

    <button class="rtj-btn-main" id="jm-calc">월세 계산하기</button>

    <div class="rtj-result" id="jm-result" hidden>
      <div class="rtj-result-main">
        <span class="rtj-result-label">환산 월세</span>
        <span class="rtj-result-value" id="jm-monthly">0원</span>
      </div>
      <div class="rtj-result-sub">
        <div><span>전환 대상 보증금</span><strong id="jm-baseAmount">0원</strong></div>
        <div><span>연 환산액</span><strong id="jm-yearly">0원</strong></div>
      </div>
    </div>
  </div>
</section>

<!-- 탭 2: 월세 → 전세 -->
<section class="rtj-panel" id="panel-monthlyToJeonse">
  <div class="rtj-card">
    <h3>월세를 전세보증금으로 환산</h3>

    <div class="rtj-field">
      <label for="mj-deposit">현재 월세보증금</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="mj-deposit" value="30,000,000" data-raw="30000000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="mj-rent">현재 월세</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="mj-rent" value="900,000" data-raw="900000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="mj-rate">적용 전환율 (연)</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="decimal" id="mj-rate" value="5.0" data-raw="5.0">
        <span class="rtj-unit">%</span>
      </div>
    </div>

    <button class="rtj-btn-main" id="mj-calc">전세금 계산하기</button>

    <div class="rtj-result" id="mj-result" hidden>
      <div class="rtj-result-main">
        <span class="rtj-result-label">환산 전세보증금</span>
        <span class="rtj-result-value" id="mj-jeonse">0원</span>
      </div>
      <div class="rtj-result-sub">
        <div><span>월세의 연 환산액</span><strong id="mj-yearlyRent">0원</strong></div>
        <div><span>기존 월세보증금</span><strong id="mj-baseDeposit">0원</strong></div>
      </div>
    </div>
  </div>
</section>

<!-- 탭 3: 손익분기점 비교 -->
<section class="rtj-panel" id="panel-breakeven">
  <div class="rtj-card">
    <h3>전세 vs 월세, 무엇이 유리할까요?</h3>
    <p class="rtj-hint">전세보증금을 마련하는 데 드는 기회비용(대출이자 또는 예치 시 놓치는 이자수익)과 월세 실지출을 월 단위로 비교합니다.</p>

    <div class="rtj-field">
      <label for="be-jeonse">전세 선택 시 보증금</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="be-jeonse" value="300,000,000" data-raw="300000000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="be-mdeposit">월세 선택 시 보증금</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="be-mdeposit" value="30,000,000" data-raw="30000000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="be-rent">월세 선택 시 월세</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="numeric" id="be-rent" value="900,000" data-raw="900000">
        <span class="rtj-unit">원</span>
      </div>
    </div>

    <div class="rtj-field">
      <label for="be-rate">적용 금리 (전세자금대출 이자율 또는 예치 시 기대수익률, 연)</label>
      <div class="rtj-input-wrap">
        <input type="text" inputmode="decimal" id="be-rate" value="4.0" data-raw="4.0">
        <span class="rtj-unit">%</span>
      </div>
      <p class="rtj-hint">전세대출을 받는다면 대출금리를, 자기자금으로 전세를 낸다면 예금·투자 기대수익률을 입력하세요.</p>
    </div>

    <button class="rtj-btn-main" id="be-calc">손익분기점 비교하기</button>

    <div class="rtj-result" id="be-result" hidden>
      <div class="rtj-result-main">
        <span class="rtj-result-label" id="be-verdict-label">월 비용 비교 결과</span>
        <span class="rtj-result-value" id="be-verdict">-</span>
      </div>
      <div class="rtj-result-sub">
        <div><span>전세 월 환산비용</span><strong id="be-jeonseCost">0원</strong></div>
        <div><span>월세 월 총비용</span><strong id="be-monthlyCost">0원</strong></div>
        <div><span>월 차액</span><strong id="be-diff">0원</strong></div>
      </div>
    </div>
  </div>
</section>

<section class="rtj-card rtj-light">
  <h3>전월세 전환, 이렇게 계산합니다</h3>
  <p>전세를 월세로 바꿀 때는 <strong>낮추는 보증금 × 전환율 ÷ 12</strong>로 월세를 구합니다. 반대로 월세를 전세로 바꿀 때는 <strong>월세 × 12 ÷ 전환율</strong>로 환산한 금액에 기존 보증금을 더합니다.</p>
  <p>2026년 기준 법정 전월세 전환율(주거용)은 연 5.0%이며, 이는 임대인이 요구할 수 있는 상한선입니다. 실제 계약 시에는 이보다 낮은 전환율이 적용될 수도 있습니다.</p>
  <a class="rtj-btn-sub" href="/guide/monthly-rent-tax-credit-2026/"> 2026년 월세 세액공제 완전정리 전체 보기 →</a>
</section>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>
<!-- 계산기 광고 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3758454239921831"
     data-ad-slot="7492664289"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<section class="rtj-card">
  <h3>자주 묻는 질문</h3>
  <div class="rtj-faq">
    <details>
      <summary>전월세 전환율 5.0%는 어떻게 정해지나요?</summary>
      <p>법정 전월세 전환율은 한국은행 기준금리에 시행령으로 정한 이율(현재 2%p)을 더한 값과 10% 중 낮은 금액으로 정해집니다. 2026년 기준 주거용 전환율은 연 5.0%입니다.</p>
    </details>
    <details>
      <summary>실제 계약에서는 꼭 5.0%를 적용해야 하나요?</summary>
      <p>5.0%는 임대인이 요구할 수 있는 법정 상한선입니다. 실제 전환율은 임대인과 임차인이 협의해 이보다 낮게 정할 수 있으며, 지역이나 매물 상황에 따라 3~4%대로 계약되는 경우도 많습니다.</p>
    </details>
    <details>
      <summary>전세와 월세 중 어느 쪽이 항상 유리한가요?</summary>
      <p>정답은 없습니다. 전세자금대출 금리가 낮고 목돈을 다른 곳에 투자할 계획이 없다면 전세가 유리하고, 대출금리가 높거나 목돈을 굴려 더 높은 수익을 기대할 수 있다면 월세가 유리할 수 있습니다. 손익분기점 탭에서 본인의 금리 조건으로 직접 비교해 보세요.</p>
    </details>
    <details>
      <summary>보증금을 낮출수록 월세는 얼마나 오르나요?</summary>
      <p>낮추는 보증금 1천만원당 연 5.0% 전환율 기준으로 월세가 약 41,666원씩 늘어납니다. 전환율이 낮을수록 월세 증가폭도 줄어듭니다.</p>
    </details>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/" },
    { "@type": "ListItem", "position": 2, "name": "부동산", "item": "https://calculator.khaistory.com/realestate/" },
    { "@type": "ListItem", "position": 3, "name": "전세 월세 전환 계산기", "item": "https://calculator.khaistory.com/realestate/rent-to-jeonse/" }
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
      "name": "전월세 전환율 5.0%는 어떻게 정해지나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "법정 전월세 전환율은 한국은행 기준금리에 시행령으로 정한 이율(현재 2%p)을 더한 값과 10% 중 낮은 금액으로 정해집니다. 2026년 기준 주거용 전환율은 연 5.0%입니다." }
    },
    {
      "@type": "Question",
      "name": "실제 계약에서는 꼭 5.0%를 적용해야 하나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "5.0%는 임대인이 요구할 수 있는 법정 상한선입니다. 실제 전환율은 협의로 더 낮게 정할 수 있으며 지역이나 매물 상황에 따라 3~4%대로 계약되는 경우도 많습니다." }
    },
    {
      "@type": "Question",
      "name": "전세와 월세 중 어느 쪽이 항상 유리한가요?",
      "acceptedAnswer": { "@type": "Answer", "text": "정답은 없습니다. 전세자금대출 금리가 낮으면 전세가, 대출금리가 높거나 목돈 운용 수익률이 높으면 월세가 유리할 수 있습니다. 손익분기점 탭에서 직접 비교할 수 있습니다." }
    },
    {
      "@type": "Question",
      "name": "보증금을 낮출수록 월세는 얼마나 오르나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "낮추는 보증금 1천만원당 연 5.0% 전환율 기준으로 월세가 약 41,666원씩 늘어납니다." }
    }
  ]
}
</script>

<style>
.rtj-hero {
  background: linear-gradient(135deg, #f8efe5, #f3e7d9);
  border: 1px solid #e3d4c5;
  border-radius: 20px;
  padding: 32px 28px;
  margin-bottom: 24px;
}
.rtj-eyebrow { color: #8c7355; font-size: 13px; font-weight: 700; letter-spacing: .04em; margin: 0 0 6px; }
.rtj-title { color: #3a2c1d; font-size: 28px; margin: 0 0 10px; }
.rtj-subtitle { color: #1f5c7a; font-size: 15px; line-height: 1.6; margin: 0; }

.rtj-tabs { display: flex; gap: 8px; margin-bottom: 20px; flex-wrap: wrap; }
.rtj-tab {
  flex: 1; min-width: 140px; padding: 12px 14px; border-radius: 12px;
  border: 1px solid #e3d4c5; background: #faf7f2; color: #785a43;
  font-weight: 600; font-size: 14px; cursor: pointer; transition: all .15s;
}
.rtj-tab-active { background:#ff7a00; color: #fff; border-color: #c2410c; }

.rtj-panel { display: none; }
.rtj-panel-active { display: block; }

.rtj-card {
  background: #fff; border: 1px solid #f1eae1; border-radius: 18px;
  padding: 28px; margin-bottom: 20px;
}
.rtj-card h3 { border-left: 4px solid #8c7355; padding-left: 10px; color: #4a3d30; font-size: 18px; margin: 0 0 18px; }
.rtj-light { background: #faf7f2; border-color: #eaddcd; }

.rtj-field { margin-bottom: 18px; }
.rtj-field label { display: block; font-size: 14px; font-weight: 600; color: #4a3d30; margin-bottom: 6px; }
.rtj-input-wrap { display: flex; align-items: center; border: 1px solid #e3d4c5; border-radius: 10px; overflow: hidden; }
.rtj-input-wrap input {
  flex: 1; border: none; padding: 12px 14px; font-size: 15px; outline: none; color: #4a3d30;
  background: #fff;
}
.rtj-unit { padding: 0 14px; color: #8c7355; font-size: 14px; background: #f8efe5; align-self: stretch; display: flex; align-items: center; }
.rtj-hint { font-size: 12.5px; color: #9c8a76; margin: 6px 0 0; line-height: 1.5; }

.rtj-btn-main {
  width: 100%; background: #ff7a00; color: #fff; border: none; border-radius: 12px;
  padding: 14px; font-size: 16px; font-weight: 700; cursor: pointer; margin-top: 6px;
}
.rtj-btn-main:hover { background: #a8380a; }
.rtj-btn-sub {
  display: inline-block; background: #1f5c7a ; color: #fff; text-decoration: none;
  padding: 10px 16px; border-radius: 10px; font-size: 14px; font-weight: 600; margin-top: 10px;
}

.rtj-result { margin-top: 22px; padding-top: 20px; border-top: 1px dashed #e3d4c5; }
.rtj-result-main { display: flex; flex-direction: column; gap: 4px; margin-bottom: 14px; }
.rtj-result-label { font-size: 13px; color: #8c7355; }
.rtj-result-value { font-size: 20px; font-weight: 800; color: #1f5c7a; }
.rtj-result-sub { display: grid; gap: 8px; }
.rtj-result-sub div { display: flex; justify-content: space-between; font-size: 14px; color: #6b5a49; background: #fce8db; padding: 10px 12px; border-radius: 8px; }
.rtj-result-sub strong { color: #4a3d30; }

.rtj-faq details { border-bottom: 1px solid #f1eae1; padding: 12px 0; }
.rtj-faq summary { font-weight: 600; color: #4a3d30; cursor: pointer; font-size: 15px; }
.rtj-faq p { color: #6b5a49; font-size: 14px; margin: 10px 0 0; line-height: 1.6; }

@media (max-width: 600px) {
  .rtj-title { font-size: 22px; }
  .rtj-result-value { font-size: 24px; }
}
</style>

<script>
(function () {
  function fmt(n) { return Math.round(n).toLocaleString('ko-KR') + '원'; }

  function bindComma(input) {
    input.addEventListener('input', function () {
      var raw = input.value.replace(/[^0-9.]/g, '');
      input.dataset.raw = raw;
      if (input.id.endsWith('rate')) {
        input.value = raw;
      } else {
        var num = parseInt(raw || '0', 10);
        input.value = isNaN(num) ? '' : num.toLocaleString('ko-KR');
      }
    });
  }
  document.querySelectorAll('.rtj-input-wrap input').forEach(bindComma);

  function raw(id) { return parseFloat(document.getElementById(id).dataset.raw) || 0; }

  // 탭 전환
  var tabs = document.querySelectorAll('.rtj-tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('rtj-tab-active'); t.setAttribute('aria-selected', 'false'); });
      document.querySelectorAll('.rtj-panel').forEach(function (p) { p.classList.remove('rtj-panel-active'); });
      tab.classList.add('rtj-tab-active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById('panel-' + tab.dataset.tab).classList.add('rtj-panel-active');
    });
  });

  // 탭 1: 전세 → 월세
  document.getElementById('jm-calc').addEventListener('click', function () {
    var jeonse = raw('jm-jeonse');
    var deposit = raw('jm-deposit');
    var rate = raw('jm-rate') / 100;
    var base = Math.max(jeonse - deposit, 0);
    var yearly = base * rate;
    var monthly = yearly / 12;

    document.getElementById('jm-monthly').textContent = fmt(monthly);
    document.getElementById('jm-baseAmount').textContent = fmt(base);
    document.getElementById('jm-yearly').textContent = fmt(yearly);
    document.getElementById('jm-result').hidden = false;
  });

  // 탭 2: 월세 → 전세
  document.getElementById('mj-calc').addEventListener('click', function () {
    var deposit = raw('mj-deposit');
    var rent = raw('mj-rent');
    var rate = raw('mj-rate') / 100;
    var yearlyRent = rent * 12;
    var converted = rate > 0 ? yearlyRent / rate : 0;
    var jeonse = deposit + converted;

    document.getElementById('mj-jeonse').textContent = fmt(jeonse);
    document.getElementById('mj-yearlyRent').textContent = fmt(yearlyRent);
    document.getElementById('mj-baseDeposit').textContent = fmt(deposit);
    document.getElementById('mj-result').hidden = false;
  });

  // 탭 3: 손익분기점 비교
  document.getElementById('be-calc').addEventListener('click', function () {
    var jeonse = raw('be-jeonse');
    var mdeposit = raw('be-mdeposit');
    var rent = raw('be-rent');
    var rate = raw('be-rate') / 100;

    var jeonseCost = (jeonse * rate) / 12;
    var monthlyCost = (mdeposit * rate) / 12 + rent;
    var diff = monthlyCost - jeonseCost;

    document.getElementById('be-jeonseCost').textContent = fmt(jeonseCost);
    document.getElementById('be-monthlyCost').textContent = fmt(monthlyCost);
    document.getElementById('be-diff').textContent = (diff >= 0 ? '+' : '') + fmt(Math.abs(diff)) + (diff >= 0 ? ' (월세가 더 비쌈)' : ' (전세가 더 비쌈)');

    var verdictEl = document.getElementById('be-verdict');
    if (Math.abs(diff) < 10000) {
      verdictEl.textContent = '두 조건이 거의 동일해요';
    } else if (diff > 0) {
      verdictEl.textContent = '전세가 월 ' + fmt(diff) + ' 더 유리해요';
    } else {
      verdictEl.textContent = '월세가 월 ' + fmt(Math.abs(diff)) + ' 더 유리해요';
    }
    document.getElementById('be-result').hidden = false;
  });
})();
</script>
