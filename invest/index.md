---
layout: "default"
title: "투자 계산기 모음 (코인·주식 PnL, 세금, 평단가, DCA, 목표가·손절, 배당)"
description: "코인·주식 실현손익(PnL), 가상자산 양도소득세, 평단가/추가매수, DCA(적립식) 수익률, 목표가·손절가, 배당수익률(YoC) 계산기를 한 곳에서 제공합니다."
permalink: "/invest/"
---

<a class="skip-link" href="#calc-list">계산기 목록으로 바로가기</a>

<section class="iv-hero">
  <h1>투자 계산기 모음</h1>
  <p class="iv-hero-desc">
    코인·주식 투자에서 자주 쓰는 <strong>실현/미실현손익(PnL)</strong>, <strong>가상자산 양도소득세</strong>,
    <strong>평단가·물타기</strong>, <strong>DCA(적립식)</strong>, <strong>목표가·손절가</strong>,
    <strong>배당수익률(YoC)</strong> 계산기를 한 페이지에 모았습니다. 거래소·증권사 수수료와 세율 입력도
    가능하며, 모든 계산기는 무료로 이용할 수 있습니다.
  </p>
</section>

<div class="calc-search">
  <label for="calc-filter" class="sr-only">계산기 검색</label>
  <input id="calc-filter" type="search" placeholder="예: PnL, 양도세, 평단가, DCA, 배당, 손절가…" autocomplete="off">
</div>

## 🔥 지금 가장 많이 찾는 계산기

<section aria-labelledby="featured-title">
  <h3 id="featured-title" class="sr-only">추천 계산기</h3>
  <ul id="calc-list" class="card-grid">
    <li class="card card-featured" data-keywords="코인 pnl 수익 손실 손익 fifo lifo 실시간 원장">
      <a class="card-link" href="/invest/crypto/pnl/">
        <span class="card-badge">NEW · 원장형</span>
        <span class="card-title">코인 PnL 계산기</span>
        <span class="card-desc">실시간 시세 자동입력 · FIFO/LIFO 거래내역 원장 · CSV 업로드 · 자동저장</span>
      </a>
    </li>
    <li class="card card-featured" data-keywords="가상자산 코인 양도소득세 2027 세금 의제취득가액">
      <a class="card-link" href="/invest/crypto/capital-gains-tax/">
        <span class="card-badge">NEW · 2027 시행 대비</span>
        <span class="card-title">가상자산 양도소득세 계산기</span>
        <span class="card-desc">의제취득가액 특례·손익통산까지 반영한 예상 세액 계산</span>
      </a>
    </li>
  </ul>
</section>

## 코인(Crypto)
<section aria-labelledby="crypto-title">
  <h3 id="crypto-title" class="sr-only">코인 계산기</h3>
  <ul class="card-grid">
    <li class="card" data-keywords="코인 평단가 추가매수 물타기 희석">
      <a class="card-link" href="/invest/crypto/avg-cost/">
        <span class="card-title">코인 평단가·추가매수 계산기</span>
        <span class="card-desc">추가 매수 시 새로운 평단가를 빠르게 확인 (간편 버전)</span>
      </a>
    </li>
    <li class="card" data-keywords="코인 dca 적립식 평균매수 수익률">
      <a class="card-link" href="/invest/crypto/dca/">
        <span class="card-title">코인 DCA(적립식) 수익률 계산기</span>
        <span class="card-desc">기간·주기·금액·수익률 시나리오로 누적 수익률 시뮬레이션</span>
      </a>
    </li>
  </ul>
</section>

## 주식(Stocks)
<section aria-labelledby="stocks-title">
  <h3 id="stocks-title" class="sr-only">주식 계산기</h3>
  <ul class="card-grid">
    <li class="card" data-keywords="주식 pnl 수익 손실 손익">
      <a class="card-link" href="/invest/stocks/pnl/">
        <span class="card-title">주식 수익/손실 계산기</span>
        <span class="card-desc">매수/매도 가격·수량·수수료·세금 포함 손익·수익률</span>
      </a>
    </li>
    <li class="card" data-keywords="주식 평단가 물타기 추가매수 목표 역산">
      <a class="card-link" href="/invest/stocks/avg-cost/">
        <span class="card-title">주식 평단가·물타기 계산기</span>
        <span class="card-desc">원하는 목표 평단가에 필요한 추가 매수량 역산</span>
      </a>
    </li>
    <li class="card" data-keywords="목표가 손절가 리스크 관리 손실 제한 손익비">
      <a class="card-link" href="/invest/stocks/targets/">
        <span class="card-title">목표가·손절가 계산기</span>
        <span class="card-desc">목표 수익률/허용 손실률로 목표가·손절가·손익비 산출</span>
      </a>
    </li>
    <li class="card" data-keywords="배당 수익률 yoc 배당수익률 세후배당금">
      <a class="card-link" href="/invest/stocks/dividend-yield/">
        <span class="card-title">배당수익률(YoC) 계산기</span>
        <span class="card-desc">매수단가 기준 배당수익률과 세후 예상 배당금 계산</span>
      </a>
    </li>
  </ul>
</section>

## 관련 가이드
<section aria-labelledby="guide-title" class="iv-guide-links">
  <h3 id="guide-title" class="sr-only">관련 가이드</h3>
  <ul class="iv-guide-list">
    <li><a href="/guide/crypto-tax-2027/">2027 가상자산 과세 완벽 정리 — 세율, 기본공제, 의제취득가액까지</a></li>
  </ul>
</section>

<div class="recent-box" aria-live="polite" hidden>
  <h2>최근 본 계산기</h2>
  <ul class="recent-list"></ul>
</div>

<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="1398373115"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

## 자주 묻는 질문(FAQ)
- **수수료와 세금은 반영되나요?** 각 계산기에서 수수료/세율 입력칸을 제공합니다. 비우면 0% 또는 기본값으로 처리됩니다.
- **가상자산 양도소득세는 언제부터 적용되나요?** 2027년 1월 1일 이후 양도·대여분부터 적용됩니다. 자세한 내용은 [가상자산 양도소득세 계산기](/invest/crypto/capital-gains-tax/)와 [관련 가이드](/guide/crypto-tax-2027/)를 참고하세요.
- **코인 PnL 계산기는 여러 번 나눠 매수·매도해도 계산되나요?** 네, 거래내역을 원하는 만큼 입력하면 FIFO/LIFO 방식으로 실현손익과 미실현손익을 자동 계산합니다.
- **결과는 투자 조언인가요?** 아닙니다. 본 계산기는 정보 제공용 도구이며, 최종 투자는 본인 책임입니다.
- **모바일에서도 사용 가능한가요?** 네, 반응형 UI로 제작되어 스마트폰에서도 편리하게 이용할 수 있습니다.

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .iv-hero {
    background: linear-gradient(135deg, #f8efe5, #f3e7d9);
    border: 1px solid #e3d4c5;
    border-radius: 18px;
    padding: 28px;
    margin-bottom: 20px;
  }
  .iv-hero h1 { margin-top: 0; color: #785a43; }
  .iv-hero-desc { line-height: 1.7; color: #5c4a38; }

  .card-featured {
    border: 1px solid #e8b98f !important;
    background: linear-gradient(135deg, #fff, #fdf3ea) !important;
  }
  .card-badge {
    display: inline-block; background: #c2410c; color: #fff; font-size: 0.72rem;
    font-weight: 700; padding: 3px 8px; border-radius: 999px; margin-bottom: 6px;
  }

  .iv-guide-list { list-style: none; padding: 0; margin: 0 0 20px; }
  .iv-guide-list li {
    background: #faf7f2; border: 1px solid #eaddcd; border-radius: 12px;
    padding: 14px 18px; margin-bottom: 10px;
  }
  .iv-guide-list a { color: #c2410c; text-decoration: none; font-weight: 600; }
  .iv-guide-list a:hover { text-decoration: underline; }
</style>

<script>
  document.addEventListener('DOMContentLoaded', function(){
    var ad = document.querySelector('.ad-box');
    if (ad) { ad.style.minHeight = '120px'; }
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  const input = document.getElementById('calc-filter');
  const cards = document.querySelectorAll('.card');
  input?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    cards.forEach(li => {
      const text = li.innerText.toLowerCase() + ' ' + (li.dataset.keywords || '');
      li.style.display = text.includes(q) ? '' : 'none';
    });
  });

  const recentKey = 'recentCalculators';
  const recentBox = document.querySelector('.recent-box');
  const recentList = document.querySelector('.recent-list');
  document.querySelectorAll('.card-link').forEach(a => {
    a.addEventListener('click', () => {
      const item = { href: a.getAttribute('href'), title: a.querySelector('.card-title').textContent };
      const arr = JSON.parse(sessionStorage.getItem(recentKey) || '[]')
        .filter(x => x.href !== item.href);
      arr.unshift(item);
      sessionStorage.setItem(recentKey, JSON.stringify(arr.slice(0,3)));
    });
  });
  const saved = JSON.parse(sessionStorage.getItem(recentKey) || '[]');
  if (saved.length && recentBox && recentList) {
    recentBox.hidden = false;
    recentList.innerHTML = saved.map(x => `<li><a href="${x.href}">${x.title}</a></li>`).join('');
  }
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
    {"@type":"ListItem","position":2,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"ItemList",
  "name":"투자 계산기 모음",
  "itemListElement":[
    {"@type":"ListItem","position":1,"url":"https://calculator.khaistory.com/invest/crypto/pnl/","name":"코인 PnL 계산기"},
    {"@type":"ListItem","position":2,"url":"https://calculator.khaistory.com/invest/crypto/capital-gains-tax/","name":"가상자산 양도소득세 계산기"},
    {"@type":"ListItem","position":3,"url":"https://calculator.khaistory.com/invest/crypto/avg-cost/","name":"코인 평단가·추가매수 계산기"},
    {"@type":"ListItem","position":4,"url":"https://calculator.khaistory.com/invest/crypto/dca/","name":"코인 DCA(적립식) 수익률 계산기"},
    {"@type":"ListItem","position":5,"url":"https://calculator.khaistory.com/invest/stocks/pnl/","name":"주식 수익/손실 계산기"},
    {"@type":"ListItem","position":6,"url":"https://calculator.khaistory.com/invest/stocks/avg-cost/","name":"주식 평단가·물타기 계산기"},
    {"@type":"ListItem","position":7,"url":"https://calculator.khaistory.com/invest/stocks/targets/","name":"목표가·손절가 계산기"},
    {"@type":"ListItem","position":8,"url":"https://calculator.khaistory.com/invest/stocks/dividend-yield/","name":"배당수익률(YoC) 계산기"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"CollectionPage",
  "name":"투자 계산기 모음",
  "isPartOf":{"@type":"WebSite","name":"생활 계산기 포털","url":"https://calculator.khaistory.com/"},
  "about":[
    {"@type":"WebApplication","name":"코인 PnL 계산기","applicationCategory":"FinanceApplication","operatingSystem":"Web","url":"https://calculator.khaistory.com/invest/crypto/pnl/","offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}},
    {"@type":"WebApplication","name":"가상자산 양도소득세 계산기","applicationCategory":"FinanceApplication","operatingSystem":"Web","url":"https://calculator.khaistory.com/invest/crypto/capital-gains-tax/","offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}}
  ]
}
</script>
