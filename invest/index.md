---
layout: "default"
title: "투자 계산기 허브 2026 | LifeCalc"
description: "코인·주식 PnL(FIFO/LIFO 원장형), 가상자산 양도소득세, 평단가, DCA+XIRR, 목표가·손절가, 배당수익률까지 투자 계산기를 한 곳에서."
permalink: "/invest/"
---

<a class="ivh-skip-link" href="#ivh-crypto">계산기 목록으로 바로가기</a>

# 투자 계산기 허브 2026

## 코인·주식 계산기 2026

2027년 1월 시행 예정인 가상자산 양도소득세(22%, 250만원 공제) 기준으로 업데이트됐습니다.
코인 PnL은 FIFO/LIFO 거래내역 원장 방식으로 여러 번 나눠 매수·매도한 경우도 정확히 계산합니다.

<div class="ivh-stats">
  <div class="ivh-stat"><span class="ivh-stat-label">가상자산 과세 시행</span><span class="ivh-stat-value">2027.1</span></div>
  <div class="ivh-stat"><span class="ivh-stat-label">기본공제</span><span class="ivh-stat-value">250만원</span></div>
  <div class="ivh-stat"><span class="ivh-stat-label">세율</span><span class="ivh-stat-value">22%</span></div>
</div>

<nav class="ivh-tabnav" aria-label="빠른 이동">
  <a href="#ivh-crypto">코인</a>
  <a href="#ivh-stocks">주식</a>
  <a href="#ivh-scenario">상황별 추천</a>
  <a href="#ivh-guide">가이드 글</a>
</nav>

<div class="ivh-search">
  <label for="ivh-filter" class="sr-only">계산기 검색</label>
  <input id="ivh-filter" type="search" placeholder="예: PnL, 양도세, 평단가, DCA, 배당, 손절가…" autocomplete="off">
</div>

<div class="ivh-recent-box" aria-live="polite" hidden>
  <p class="ivh-recent-title">최근 본 계산기</p>
  <ul class="ivh-recent-list"></ul>
</div>

### 코인 계산기

<ul id="ivh-crypto" class="ivh-card-grid">
  <li class="ivh-card ivh-card-featured">
    <a class="ivh-card-link" href="/invest/crypto/pnl/">
      <span class="ivh-card-badge">NEW</span>
      <span class="ivh-card-title">💹 코인 PnL 계산기</span>
      <span class="ivh-card-desc">여러 번 나눠 매수·매도해도 FIFO/LIFO 원장 방식으로 실현·미실현손익 자동 계산</span>
      <span class="ivh-tag-row">
        <span class="ivh-tag">FIFO/LIFO</span><span class="ivh-tag">CSV 업로드</span><span class="ivh-tag">자동저장</span>
      </span>
    </a>
  </li>
  <li class="ivh-card ivh-card-featured">
    <a class="ivh-card-link" href="/invest/crypto/capital-gains-tax/">
      <span class="ivh-card-badge">NEW</span>
      <span class="ivh-card-title">🧾 가상자산 양도소득세 계산기</span>
      <span class="ivh-card-desc">2027년 시행 대비 예상 세액을 의제취득가액 특례까지 반영해 계산</span>
      <span class="ivh-tag-row">
        <span class="ivh-tag">의제취득가액</span><span class="ivh-tag">손익통산</span><span class="ivh-tag">2027 시행 대비</span>
      </span>
    </a>
  </li>
  <li class="ivh-card">
    <a class="ivh-card-link" href="/invest/crypto/avg-cost/">
      <span class="ivh-card-title">➗ 코인 평단가·추가매수</span>
      <span class="ivh-card-desc">물타기 후 새로운 평균 단가를 빠르게 확인하는 간편 계산기</span>
      <span class="ivh-tag-row"><span class="ivh-tag">간편 버전</span></span>
    </a>
  </li>
  <li class="ivh-card">
    <a class="ivh-card-link" href="/invest/crypto/dca/">
      <span class="ivh-card-badge">NEW</span>
      <span class="ivh-card-title">📅 코인 DCA + XIRR 계산기</span>
      <span class="ivh-card-desc">적립식 투자 시뮬레이션과 실제 투자 내역 기반 실질 연환산 수익률(XIRR) 계산</span>
      <span class="ivh-tag-row"><span class="ivh-tag">XIRR</span><span class="ivh-tag">시나리오 비교</span></span>
    </a>
  </li>
</ul>

### 주식 계산기

<ul id="ivh-stocks" class="ivh-card-grid">
  <li class="ivh-card ivh-card-featured">
    <a class="ivh-card-link" href="/invest/stocks/pnl/">
      <span class="ivh-card-badge">NEW</span>
      <span class="ivh-card-title">💹 주식 PnL 계산기</span>
      <span class="ivh-card-desc">FIFO/LIFO 원장 방식 + 매매수수료·거래세 반영, CSV 업로드·자동저장 지원</span>
      <span class="ivh-tag-row">
        <span class="ivh-tag">FIFO/LIFO</span><span class="ivh-tag">수수료+거래세</span><span class="ivh-tag">자동저장</span>
      </span>
    </a>
  </li>
  <li class="ivh-card">
    <a class="ivh-card-link" href="/invest/stocks/avg-cost/">
      <span class="ivh-card-title">🎯 주식 평단가·물타기</span>
      <span class="ivh-card-desc">원하는 목표 평단가에 필요한 추가 매수 수량을 역산</span>
      <span class="ivh-tag-row"><span class="ivh-tag">목표 역산</span></span>
    </a>
  </li>
  <li class="ivh-card">
    <a class="ivh-card-link" href="/invest/stocks/targets/">
      <span class="ivh-card-title">🚦 목표가·손절가 계산기</span>
      <span class="ivh-card-desc">목표 수익률·허용 손실률로 목표가·손절가·손익비까지 산출</span>
      <span class="ivh-tag-row"><span class="ivh-tag">손익비</span></span>
    </a>
  </li>
  <li class="ivh-card">
    <a class="ivh-card-link" href="/invest/stocks/dividend-yield/">
      <span class="ivh-card-title">🪙 배당수익률(YoC) 계산기</span>
      <span class="ivh-card-desc">매수단가 기준 배당수익률과 세후(15.4%) 예상 배당금 계산</span>
      <span class="ivh-tag-row"><span class="ivh-tag">세후 배당금</span></span>
    </a>
  </li>
</ul>

### 상황별 추천 계산기

<div id="ivh-scenario" class="ivh-scenario-grid">
  <div class="ivh-scenario">
    <span class="ivh-scenario-icon">🪙</span>
    <p class="ivh-scenario-title">코인 처음 시작</p>
    <a href="/invest/crypto/avg-cost/">평단가부터 감 잡기</a>
    <a href="/invest/crypto/pnl/">PnL로 정확히 계산</a>
  </div>
  <div class="ivh-scenario">
    <span class="ivh-scenario-icon">🔁</span>
    <p class="ivh-scenario-title">여러 번 나눠 매수함</p>
    <a href="/invest/crypto/pnl/">코인 PnL 원장 계산</a>
    <a href="/invest/stocks/pnl/">주식 PnL 원장 계산</a>
  </div>
  <div class="ivh-scenario">
    <span class="ivh-scenario-icon">🧾</span>
    <p class="ivh-scenario-title">2027 세금 신고 대비</p>
    <a href="/invest/crypto/capital-gains-tax/">예상 세액 미리 계산</a>
    <a href="/guide/crypto-tax-2027/">과세 제도 가이드 읽기</a>
  </div>
  <div class="ivh-scenario">
    <span class="ivh-scenario-icon">📈</span>
    <p class="ivh-scenario-title">장기 배당 투자</p>
    <a href="/invest/stocks/dividend-yield/">세후 배당금 계산</a>
    <a href="/invest/stocks/targets/">목표가·손절가 설정</a>
  </div>
</div>

### 투자 가이드 글

<ul id="ivh-guide" class="ivh-guide-grid">
  <li class="ivh-guide-card">
    <a href="/guide/crypto-tax-2027/">
      <span class="ivh-guide-eyebrow">2027 가상자산 과세</span>
      <span class="ivh-guide-title">2027 가상자산 과세 완벽 정리</span>
      <span class="ivh-guide-desc">세율, 기본공제, 의제취득가액 특례, 손익통산, 신고 시기까지 한번에 정리했습니다.</span>
    </a>
  </li>
</ul>

<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="1398373115"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

### 자주 묻는 질문

<div class="ivh-faq">

<details class="ivh-faq-item"><summary>가상자산 양도소득세는 언제부터 적용되나요?</summary>
<p>2027년 1월 1일 이후 양도·대여분부터 적용됩니다. 22% 세율(소득세 20%+지방소득세 2%)과 연간 250만원 기본공제가 적용되며, 2027년 이전 보유분은 의제취득가액 특례를 받을 수 있습니다. 자세한 내용은 <a href="/invest/crypto/capital-gains-tax/">가상자산 양도소득세 계산기</a>와 <a href="/guide/crypto-tax-2027/">관련 가이드</a>를 참고하세요.</p>
</details>

<details class="ivh-faq-item"><summary>코인·주식 PnL 계산기는 여러 번 나눠 매수·매도해도 계산되나요?</summary>
<p>네, 거래내역을 원하는 만큼 입력하면 FIFO(선입선출) 또는 LIFO(후입선출) 방식으로 실현손익과 미실현손익을 자동 계산합니다. 입력한 내역은 브라우저에 자동 저장됩니다.</p>
</details>

<details class="ivh-faq-item"><summary>수수료와 세금은 반영되나요?</summary>
<p>각 계산기에서 수수료·세율 입력칸을 제공합니다. 값을 비워두면 0% 또는 기본값으로 처리됩니다. 거래세·수수료율은 증권사·거래소·정책에 따라 달라질 수 있으므로 실제 이용 중인 곳의 최신 수치로 확인해 입력하는 것을 권장합니다.</p>
</details>

<details class="ivh-faq-item"><summary>결과는 투자 조언인가요?</summary>
<p>아닙니다. 본 계산기는 정보 제공용 도구이며, 최종 투자 판단과 책임은 본인에게 있습니다.</p>
</details>

<details class="ivh-faq-item"><summary>모바일에서도 사용 가능한가요?</summary>
<p>네, 반응형 UI로 제작되어 스마트폰에서도 편리하게 이용할 수 있습니다.</p>
</details>

</div>

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .ivh-stats {
    display: flex; gap: 12px; flex-wrap: wrap; margin: 18px 0 20px;
  }
  .ivh-stat {
    background: linear-gradient(135deg, #f8efe5, #f3e7d9);
    border: 1px solid #e3d4c5; border-radius: 14px;
    padding: 12px 18px; display: flex; flex-direction: column; gap: 2px; min-width: 140px;
  }
  .ivh-stat-label { font-size: 0.78rem; color: #8c7355; font-weight: 600; }
  .ivh-stat-value { font-size: 1.3rem; color: #c2410c; font-weight: 800; }

  .ivh-tabnav { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px; }
  .ivh-tabnav a {
    background: #f8efe5; border: 1px solid #eaddcd; color: #785a43; font-weight: 700;
    text-decoration: none; padding: 8px 18px; border-radius: 999px; font-size: 0.9rem;
    transition: all 0.15s ease;
  }
  .ivh-tabnav a:hover { background: #c2410c; color: #fff; border-color: #c2410c; }

  .ivh-card-grid { list-style: none; padding: 0; margin: 0 0 28px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
  @media (max-width: 720px) { .ivh-card-grid { grid-template-columns: 1fr; } }

  .ivh-card {
    background: #fff; border: 1px solid #f1eae1; border-radius: 16px; overflow: hidden;
    transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  }
  .ivh-card:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(120,90,67,0.12); border-color: #e3d4c5; }
  .ivh-card-featured { border-color: #e8b98f; background: linear-gradient(135deg, #fff, #fdf3ea); }
  .ivh-card-link { display: flex; flex-direction: column; gap: 6px; padding: 20px; text-decoration: none; height: 100%; box-sizing: border-box; }
  .ivh-card-badge {
    align-self: flex-start; background: #c2410c; color: #fff; font-size: 0.7rem; font-weight: 800;
    padding: 3px 9px; border-radius: 999px; letter-spacing: 0.02em;
  }
  .ivh-card-title { font-size: 1.08rem; font-weight: 800; color: #5c4a38; }
  .ivh-card-desc { font-size: 0.88rem; color: #8c7355; line-height: 1.5; }
  .ivh-tag-row { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px; }
  .ivh-tag {
    background: #faf7f2; border: 1px solid #eaddcd; color: #785a43; font-size: 0.72rem;
    font-weight: 700; padding: 3px 9px; border-radius: 999px;
  }

  .ivh-scenario-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 14px; margin-bottom: 28px; }
  @media (max-width: 900px) { .ivh-scenario-grid { grid-template-columns: repeat(2, minmax(0,1fr)); } }
  .ivh-scenario {
    background: #faf7f2; border: 1px solid #eaddcd; border-radius: 16px; padding: 18px;
    display: flex; flex-direction: column; gap: 8px;
  }
  .ivh-scenario-icon { font-size: 1.6rem; }
  .ivh-scenario-title { font-weight: 800; color: #785a43; margin: 0; }
  .ivh-scenario a {
    color: #c2410c; text-decoration: none; font-size: 0.88rem; font-weight: 600;
  }
  .ivh-scenario a:hover { text-decoration: underline; }

  .ivh-guide-grid { list-style: none; padding: 0; margin: 0 0 24px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; }
  @media (max-width: 720px) { .ivh-guide-grid { grid-template-columns: 1fr; } }
  .ivh-guide-card { background: #faf7f2; border: 1px solid #eaddcd; border-radius: 16px; }
  .ivh-guide-card a { display: flex; flex-direction: column; gap: 6px; padding: 20px; text-decoration: none; }
  .ivh-guide-eyebrow { font-size: 0.75rem; font-weight: 800; color: #c2410c; text-transform: uppercase; letter-spacing: 0.03em; }
  .ivh-guide-title { font-size: 1.05rem; font-weight: 800; color: #5c4a38; }
  .ivh-guide-desc { font-size: 0.88rem; color: #8c7355; line-height: 1.5; }

  .ivh-faq { margin-bottom: 20px; }
  .ivh-faq-item {
    border: 1px solid #f1eae1; border-radius: 12px; padding: 4px 18px;
    margin-bottom: 10px; background: #fff; transition: background 0.15s ease, border-color 0.15s ease;
  }
  .ivh-faq-item[open] { background: #fffaf5; border-color: #f0c8a0; }
  .ivh-faq-item summary {
    cursor: pointer; list-style: none; font-weight: 700; color: #785a43;
    padding: 14px 28px 14px 0; position: relative; line-height: 1.5;
  }
  .ivh-faq-item summary::-webkit-details-marker { display: none; }
  .ivh-faq-item summary::after {
    content: "+"; position: absolute; right: 0; top: 50%; transform: translateY(-50%);
    font-size: 1.3rem; font-weight: 400; color: #c2410c; transition: transform 0.2s ease;
  }
  .ivh-faq-item[open] summary::after { content: "×"; }
  .ivh-faq-item summary:hover { color: #c2410c; }
  .ivh-faq-item p { margin: 0 0 16px; line-height: 1.7; color: #5c4a38; }
  .sr-only {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0;
  }

  .ivh-search { margin-bottom: 20px; }
  .ivh-search input {
    width: 100%; padding: 12px 16px; border: 1px solid #e3d4c5; border-radius: 12px;
    font-size: 0.95rem; box-sizing: border-box; background: #fff;
  }
  .ivh-search input:focus { outline: 2px solid #c2410c; outline-offset: 1px; }

  .ivh-recent-box {
    background: #faf7f2; border: 1px solid #eaddcd; border-radius: 12px;
    padding: 12px 16px; margin-bottom: 20px;
  }
  .ivh-recent-title { font-weight: 700; color: #785a43; margin: 0 0 6px; font-size: 0.85rem; }
  .ivh-recent-box ul { list-style: none; padding: 0; margin: 0; display: flex; gap: 10px; flex-wrap: wrap; }
  .ivh-recent-box a { color: #c2410c; text-decoration: none; font-size: 0.85rem; font-weight: 600; }
  .ivh-recent-box a:hover { text-decoration: underline; }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function(){
    var ad = document.querySelector('.ad-box');
    if (ad) { ad.style.minHeight = '120px'; }
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  const ivhInput = document.getElementById('ivh-filter');
  const ivhCards = document.querySelectorAll('.ivh-card');
  ivhInput?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    ivhCards.forEach(card => {
      card.style.display = card.innerText.toLowerCase().includes(q) ? '' : 'none';
    });
  });

  const ivhRecentKey = 'recentInvestCalculators';
  const ivhRecentBox = document.querySelector('.ivh-recent-box');
  const ivhRecentList = document.querySelector('.ivh-recent-list');
  document.querySelectorAll('.ivh-card-link').forEach(a => {
    a.addEventListener('click', () => {
      const titleEl = a.querySelector('.ivh-card-title');
      const item = { href: a.getAttribute('href'), title: titleEl ? titleEl.textContent : a.textContent };
      const arr = JSON.parse(sessionStorage.getItem(ivhRecentKey) || '[]')
        .filter(x => x.href !== item.href);
      arr.unshift(item);
      sessionStorage.setItem(ivhRecentKey, JSON.stringify(arr.slice(0, 3)));
    });
  });
  const ivhSaved = JSON.parse(sessionStorage.getItem(ivhRecentKey) || '[]');
  if (ivhSaved.length && ivhRecentBox && ivhRecentList) {
    ivhRecentBox.hidden = false;
    ivhRecentList.innerHTML = ivhSaved.map(x => `<li><a href="${x.href}">${x.title}</a></li>`).join('');
  }
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
    {"@type":"ListItem","position":2,"name":"투자 계산기 허브","item":"https://calculator.khaistory.com/invest/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"ItemList",
  "name":"투자 계산기 허브 2026",
  "itemListElement":[
    {"@type":"ListItem","position":1,"url":"https://calculator.khaistory.com/invest/crypto/pnl/","name":"코인 PnL 계산기"},
    {"@type":"ListItem","position":2,"url":"https://calculator.khaistory.com/invest/crypto/capital-gains-tax/","name":"가상자산 양도소득세 계산기"},
    {"@type":"ListItem","position":3,"url":"https://calculator.khaistory.com/invest/crypto/avg-cost/","name":"코인 평단가·추가매수 계산기"},
    {"@type":"ListItem","position":4,"url":"https://calculator.khaistory.com/invest/crypto/dca/","name":"코인 DCA + XIRR 계산기"},
    {"@type":"ListItem","position":5,"url":"https://calculator.khaistory.com/invest/stocks/pnl/","name":"주식 PnL 계산기"},
    {"@type":"ListItem","position":6,"url":"https://calculator.khaistory.com/invest/stocks/avg-cost/","name":"주식 평단가·물타기 계산기"},
    {"@type":"ListItem","position":7,"url":"https://calculator.khaistory.com/invest/stocks/targets/","name":"목표가·손절가 계산기"},
    {"@type":"ListItem","position":8,"url":"https://calculator.khaistory.com/invest/stocks/dividend-yield/","name":"배당수익률(YoC) 계산기"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"가상자산 양도소득세는 언제부터 적용되나요?","acceptedAnswer":{"@type":"Answer","text":"2027년 1월 1일 이후 양도·대여분부터 적용됩니다. 22% 세율과 연간 250만원 기본공제가 적용되며, 2027년 이전 보유분은 의제취득가액 특례를 받을 수 있습니다."}},
    {"@type":"Question","name":"코인·주식 PnL 계산기는 여러 번 나눠 매수·매도해도 계산되나요?","acceptedAnswer":{"@type":"Answer","text":"네, 거래내역을 원하는 만큼 입력하면 FIFO 또는 LIFO 방식으로 실현손익과 미실현손익을 자동 계산하며, 입력 내역은 브라우저에 자동 저장됩니다."}},
    {"@type":"Question","name":"수수료와 세금은 반영되나요?","acceptedAnswer":{"@type":"Answer","text":"각 계산기에서 수수료·세율 입력칸을 제공하며, 값을 비워두면 기본값으로 처리됩니다. 실제 최신 수치로 확인해 입력하는 것을 권장합니다."}},
    {"@type":"Question","name":"결과는 투자 조언인가요?","acceptedAnswer":{"@type":"Answer","text":"아닙니다. 정보 제공용 도구이며 최종 투자 판단과 책임은 본인에게 있습니다."}},
    {"@type":"Question","name":"모바일에서도 사용 가능한가요?","acceptedAnswer":{"@type":"Answer","text":"네, 반응형 UI로 제작되어 스마트폰에서도 편리하게 이용할 수 있습니다."}}
  ]
}
</script>
