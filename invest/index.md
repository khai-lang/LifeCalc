---
layout: default
title: 투자 계산기 모음 (코인·주식 PnL, 평단가, DCA, 목표가·손절, 배당)
description: 코인·주식 수익/손실(PnL), 평단가/추가매수, DCA(적립식) 수익률, 목표가·손절가, 배당수익률(YoC) 계산기를 한 곳에서 제공합니다.
permalink: /invest/
---

<a class="skip-link" href="#calc-list">계산기 목록으로 바로가기</a>


투자 시 자주 쓰는 **수익/손실(PnL)**, **평단가·물타기**, **DCA(적립식)**, **목표가·손절가**, **배당수익률(YoC)** 계산기를 한 페이지에 모았습니다.  
거래소/증권사 수수료와 세율 입력도 가능하며, **모든 계산기는 무료로 이용**할 수 있습니다. 아래 검색창에 기능을 입력해 원하는 계산기를 즉시 찾아보세요.

<div class="calc-search">
  <label for="calc-filter" class="sr-only">계산기 검색</label>
  <input id="calc-filter" type="search" placeholder="예: PnL, 평단가, DCA, 배당, 손절가…" autocomplete="off">
</div>

## 코인(Crypto)
<section aria-labelledby="crypto-title">
  <h3 id="crypto-title" class="sr-only">코인 계산기</h3>
  <ul id="calc-list" class="card-grid">
    <li class="card" data-keywords="코인 pnl 수익 손실 손익">
      <a class="card-link" href="/invest/crypto/pnl/">
        <span class="card-title">코인 수익/손실 계산기</span>
        <span class="card-desc">매수가·매도가·수량·수수료로 실현/미실현 손익과 수익률 계산</span>
      </a>
    </li>
    <li class="card" data-keywords="코인 평단가 추가매수 물타기 희석">
      <a class="card-link" href="/invest/crypto/avg-cost/">
        <span class="card-title">코인 평단가·추가매수 계산기</span>
        <span class="card-desc">추가 매수 시 새로운 평단가와 총 투자금 자동 계산</span>
      </a>
    </li>
    <li class="card" data-keywords="코인 dca 적립식 평균매수 수익률">
      <a class="card-link" href="/invest/crypto/dca/">
        <span class="card-title">코인 DCA(적립식) 수익률 계산기</span>
        <span class="card-desc">기간·주기·금액·가격 시나리오로 누적 수익률 시뮬레이션</span>
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
    <li class="card" data-keywords="주식 평단가 물타기 추가매수">
      <a class="card-link" href="/invest/stocks/avg-cost/">
        <span class="card-title">주식 평단가·물타기 계산기</span>
        <span class="card-desc">추가 매수 계획에 따른 목표 평단가 역산</span>
      </a>
    </li>
    <li class="card" data-keywords="목표가 손절가 리스크 관리 손실 제한">
      <a class="card-link" href="/invest/stocks/targets/">
        <span class="card-title">목표가·손절가 계산기</span>
        <span class="card-desc">목표 수익률/허용 손실률로 목표가·손절가 산출</span>
      </a>
    </li>
    <li class="card" data-keywords="배당 수익률 yoc 배당수익률">
      <a class="card-link" href="/invest/stocks/dividend-yield/">
        <span class="card-title">배당수익률(YoC) 계산기</span>
        <span class="card-desc">보유단가 기준의 배당수익률과 예상 연배당 계산</span>
      </a>
    </li>
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
- **DCA 가격 입력은 어떻게 하나요?** 개월 수와 동일한 개수의 가격을 쉼표로 입력합니다. 비우면 모든 달에 현재가를 적용해 근사 계산합니다.  
- **결과는 투자 조언인가요?** 아닙니다. 본 계산기는 정보 제공용 도구이며, 최종 투자는 본인 책임입니다.  
- **모바일에서도 사용 가능한가요?** 네, 반응형 UI로 제작되어 스마트폰에서도 편리하게 이용할 수 있습니다.

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<script>
  // 광고 CLS 방지: 최소 높이 확보 후 로드
  document.addEventListener('DOMContentLoaded', function(){
    var ad = document.querySelector('.ad-box');
    if (ad) { ad.style.minHeight = '120px'; }
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });

  // 필터
  const input = document.getElementById('calc-filter');
  const cards = document.querySelectorAll('.card');
  input?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    cards.forEach(li => {
      const text = li.innerText.toLowerCase() + ' ' + (li.dataset.keywords || '');
      li.style.display = text.includes(q) ? '' : 'none';
    });
  });

  // 최근 본 계산기(세션 기준)
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
  // 표시
  const saved = JSON.parse(sessionStorage.getItem(recentKey) || '[]');
  if (saved.length && recentBox && recentList) {
    recentBox.hidden = false;
    recentList.innerHTML = saved.map(x => `<li><a href="${x.href}">${x.title}</a></li>`).join('');
  }
</script>

<!-- 구조화데이터: Breadcrumb + ItemList + WebApplication(간략) -->
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
    {"@type":"ListItem","position":1,"url":"https://calculator.khaistory.com/invest/crypto/pnl/","name":"코인 수익/손실 계산기"},
    {"@type":"ListItem","position":2,"url":"https://calculator.khaistory.com/invest/crypto/avg-cost/","name":"코인 평단가·추가매수 계산기"},
    {"@type":"ListItem","position":3,"url":"https://calculator.khaistory.com/invest/crypto/dca/","name":"코인 DCA(적립식) 수익률 계산기"},
    {"@type":"ListItem","position":4,"url":"https://calculator.khaistory.com/invest/stocks/pnl/","name":"주식 수익/손실 계산기"},
    {"@type":"ListItem","position":5,"url":"https://calculator.khaistory.com/invest/stocks/avg-cost/","name":"주식 평단가·물타기 계산기"},
    {"@type":"ListItem","position":6,"url":"https://calculator.khaistory.com/invest/stocks/targets/","name":"목표가·손절가 계산기"},
    {"@type":"ListItem","position":7,"url":"https://calculator.khaistory.com/invest/stocks/dividend-yield/","name":"배당수익률(YoC) 계산기"}
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
    {"@type":"WebApplication","name":"코인 수익/손실 계산기","applicationCategory":"FinanceApplication","operatingSystem":"Web","url":"https://calculator.khaistory.com/invest/crypto/pnl/","offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}},
    {"@type":"WebApplication","name":"주식 수익/손실 계산기","applicationCategory":"FinanceApplication","operatingSystem":"Web","url":"https://calculator.khaistory.com/invest/stocks/pnl/","offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}}
  ]
}
</script>
