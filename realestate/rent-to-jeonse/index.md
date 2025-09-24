---
layout: default
title: 전세↔월세 전환 계산기 | 전세 전환율·월세 환산
description: 전세 보증금과 전환율로 예상 월세를 계산하거나, 월세를 전세 보증금으로 환산합니다. 관리비 포함/제외 옵션 제공.
permalink: /realestate/rent-to-jeonse/
redirect_from:
  - /finance/rent-conversion/
  - /finance/rent-conversion/index.html
section: realestate
---

<h1>전세↔월세 전환 계산기</h1>

<div class="card" style="max-width:820px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); rentConv();" aria-label="전세 월세 전환 계산">
    <h2 style="margin-top:0">전세 → 월세</h2>
    <label for="jeonse">전세 보증금(원)</label>
    <input type="number" id="jeonse" inputmode="numeric" placeholder="예: 200000000">

    <label for="rate">전환율(연 %)</label>
    <input type="number" id="rate" step="0.01" inputmode="decimal" placeholder="예: 4.0">

    <label for="mfee">관리비(월, 원) <small style="color:#6b7280">(선택)</small></label>
    <input type="number" id="mfee" inputmode="numeric" value="0">

    <hr style="margin:20px 0">

    <h2>월세 → 전세</h2>
    <label for="rent">월세(원)</label>
    <input type="number" id="rent" inputmode="numeric" placeholder="예: 800000">

    <label for="rate2">전환율(연 %)</label>
    <input type="number" id="rate2" step="0.01" inputmode="decimal" placeholder="예: 4.0">

    <label for="mfee2">관리비(월, 원) <small style="color:#6b7280">(월세에 관리비 포함되어 있으면 입력)</small></label>
    <input type="number" id="mfee2" inputmode="numeric" value="0">

    <div style="margin-top:14px">
      <button class="btn" type="submit" style="background:#ff6a00;color:#fff;border:0">계산</button>
    </div>
  </form>

  <!-- 결과 -->
  <div id="result" class="result-box" style="margin-top:12px;"></div>

  <!-- 결과 직후 광고/CTA -->
  <div class="ad-box" id="result-ad" style="margin-top:10px; display:none">
    <ins class="adsbygoogle" style="display:block"
         data-ad-client="ca-pub-3758454239921831"
         data-ad-slot="1398373115"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle=window.adsbygoogle||[]).push({});</script>

    <div class="note" style="margin-top:10px">
      👉 세금까지 확인하려면 <a class="btn" href="/realestate/capital-gains/">양도세 계산기</a>
      &nbsp;&nbsp;|&nbsp;&nbsp; 구매 전 부대비용 <a class="btn" href="/realestate/acquisition-tax/">취득세 계산기</a>
    </div>
  </div>

  <p style="font-size:14px;color:#6b7280;margin-top:10px">
    * 단순 이자 계산(월세 ≈ 보증금 × 전환율 ÷ 12)에 기반한 추정치입니다. 실제 계약은 지역/건물/시장 상황, 수선주체 등에 따라 달라질 수 있습니다.
  </p>
</div>

<!-- (선택) 오른쪽 레일/모바일 하단에 순환형 팁 노출 -->
{% include promo-tip-rotate.html %}

<script>
// 통화 포맷
function formatKRW(n){
  return (isFinite(n) ? Math.round(n) : 0).toLocaleString('ko-KR');
}

function valNum(id){
  const el = document.getElementById(id);
  return el ? (+el.value || 0) : 0;
}

function rentConv(){
  const J   = valNum('jeonse');         // 보증금
  const r   = valNum('rate')/100;       // 전환율(연)
  const fee = valNum('mfee');           // 관리비(월)

  const R   = valNum('rent');           // 월세(총액)
  const r2  = valNum('rate2')/100;      // 전환율(연)
  const fee2= valNum('mfee2');          // 월세 내 관리비

  // 전세 -> 월세 (관리비 포함 월 납부 예상)
  const monthlyCore = (J>0 && r>0) ? (J * r / 12) : 0;  // 순수 전환액
  const monthly = monthlyCore + Math.max(0, fee);

  // 월세 -> 전세 (월세에서 관리비를 제외하고 역산)
  const rentNet = Math.max(0, R - Math.max(0, fee2));
  const depositEq = (r2>0) ? (rentNet / r2 * 12) : 0;

  const res = document.getElementById('result');
  const ad  = document.getElementById('result-ad');

  let html = '';
  html += `<div><strong>전세 → 월세</strong> : <b>${formatKRW(monthly)}</b> 원/월`;
  if (fee>0) html += ` <span style="color:#6b7280">(관리비 포함)</span>`;
  html += ` <span style="color:#6b7280">· 순수 전환액 ${formatKRW(monthlyCore)}원/월</span></div>`;

  html += `<div style="margin-top:6px"><strong>월세 → 전세</strong> : 등가 보증금 <b>${formatKRW(depositEq)}</b> 원`;
  if (fee2>0) html += ` <span style="color:#6b7280">(월세에서 관리비 ${formatKRW(fee2)}원 제외)</span>`;
  html += `</div>`;

  res.innerHTML = html;
  res.classList.add('show');
  if (ad) ad.style.display = 'block';
}
</script>

<!-- 구조화 데이터 (SEO) -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"SoftwareApplication",
  "name":"전세↔월세 전환 계산기",
  "applicationCategory":"FinanceApplication",
  "operatingSystem":"Web",
  "description":"전세 보증금과 전환율로 예상 월세를 계산하거나, 월세를 전세 보증금으로 환산합니다. 관리비 포함/제외 옵션 제공.",
  "url":"{{ page.url | absolute_url }}",
  "publisher":{"@type":"Organization","name":"LifeCalc"}
}
</script>
