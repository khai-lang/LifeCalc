---
layout: guide
title: "인치 cm 변환표 2026 — TV·모니터·노트북 화면 크기 한눈에"
description: "1인치=2.54cm 기준 인치·cm 변환표. 55인치 TV는 화면 가로 약 121.8cm, 27인치 모니터는 약 59.8cm. TV·모니터·노트북 크기를 바로 비교하세요."
permalink: /_posts/guide/inch-cm-table/
categories: [guide]
---

<nav class="subnav" style="display:flex;gap:8px;flex-wrap:wrap;">
  <a class="chip" href="/life/">생활 계산기 허브</a>
  <a class="chip" href="/life/unit-converter/">단위 변환기</a>
</nav>

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

<h2>인치·cm 변환표 2026: TV·모니터·노트북 화면 크기 감 잡기</h2>
<p class="muted" style="margin:6px 0 14px; line-height:1.7;">
  화면 크기에 쓰는 "인치"는 가로 길이가 아니라 <b>대각선 길이</b>이고, 1인치는 정확히 <b>2.54cm</b>입니다.
  이 페이지에서는 인치를 cm로 바로 바꿔 보고, 자주 쓰는 TV·모니터·노트북 크기를 가로·세로 cm로 정리했습니다.
  표의 가로·세로는 화면 비율로 계산한 <b>안내용 근사치</b>이며, 베젤·스탠드를 포함한 제품 외형 크기와는 다를 수 있습니다.
</p>

<section class="card p">
  <h2>인치 ↔ cm 바로 변환</h2>
  <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:flex-end;">
    <label style="display:flex;flex-direction:column;gap:4px;">
      인치(in)
      <input id="ic-inch" type="number" step="any" min="0" placeholder="예: 55" oninput="icFromInch()">
    </label>
    <label style="display:flex;flex-direction:column;gap:4px;">
      센티미터(cm)
      <input id="ic-cm" type="number" step="any" min="0" placeholder="예: 139.7" oninput="icFromCm()">
    </label>
  </div>
  <p id="ic-result" class="muted" style="margin:10px 0 0; line-height:1.7;">값을 입력하면 바로 변환됩니다. (1in = 2.54cm)</p>
</section>

<script>
function icFromInch() {
  var v = parseFloat(document.getElementById('ic-inch').value);
  var out = document.getElementById('ic-result');
  if (isNaN(v)) { out.textContent = '값을 입력하면 바로 변환됩니다. (1in = 2.54cm)'; return; }
  var cm = v * 2.54;
  document.getElementById('ic-cm').value = '';
  out.textContent = v + '인치 = ' + cm.toFixed(2) + 'cm';
}
function icFromCm() {
  var v = parseFloat(document.getElementById('ic-cm').value);
  var out = document.getElementById('ic-result');
  if (isNaN(v)) { out.textContent = '값을 입력하면 바로 변환됩니다. (1in = 2.54cm)'; return; }
  var inch = v / 2.54;
  document.getElementById('ic-inch').value = '';
  out.textContent = v + 'cm = ' + inch.toFixed(2) + '인치';
}
</script>

<section class="card p" markdown="1">

## 계산 흐름(간단 설명)

- **인치 × 2.54** = cm (예: 55 × 2.54 = 139.7cm)
- **cm ÷ 2.54** = 인치 (예: 100 ÷ 2.54 ≈ 39.37인치)
- **대각선 × 0.8716** = 16:9 화면의 가로 길이
- **대각선 × 0.4903** = 16:9 화면의 세로 길이
- 16:10 화면은 가로 ×0.8480, 세로 ×0.5300, 21:9 울트라와이드는 가로 ×0.9192, 세로 ×0.3939를 곱합니다.
- 암산 팁: 인치에 **2.5**를 곱한 뒤 조금 더하면 대략적인 cm가 나옵니다. (40인치 ≈ 100cm + 1.6cm)

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

<section class="card p" markdown="1">

## 자주 찾는 인치 → cm 변환표

| 인치 | cm | 인치 | cm |
|---|---|---|---|
| 1 | 2.54 | 24 | 60.96 |
| 5 | 12.70 | 27 | 68.58 |
| 10 | 25.40 | 32 | 81.28 |
| 13.3 | 33.78 | 43 | 109.22 |
| 15.6 | 39.62 | 55 | 139.70 |
| 17 | 43.18 | 65 | 165.10 |
| 20 | 50.80 | 75 | 190.50 |

</section>

<section class="card p" markdown="1">

## TV 인치별 실제 화면 크기 (16:9 기준)

TV 인치는 대각선 길이입니다. 아래 가로·세로는 베젤을 제외한 **화면 영역** 기준 근사치입니다.

| TV 크기 | 대각선(cm) | 화면 가로(cm) | 화면 세로(cm) | 권장 시청 거리(4K 기준 대략) |
|---|---|---|---|---|
| 32인치 | 81.3 | 70.8 | 39.9 | 1.0~1.2m |
| 43인치 | 109.2 | 95.2 | 53.6 | 1.3~1.6m |
| 50인치 | 127.0 | 110.7 | 62.3 | 1.5~1.9m |
| 55인치 | 139.7 | 121.8 | 68.5 | 1.7~2.1m |
| 65인치 | 165.1 | 143.9 | 80.9 | 2.0~2.5m |
| 75인치 | 190.5 | 166.0 | 93.4 | 2.3~2.9m |
| 85인치 | 215.9 | 188.2 | 105.9 | 2.6~3.2m |

시청 거리는 대각선 길이의 약 1.2~1.5배를 기준으로 잡은 일반적인 가이드이며, 해상도·취향에 따라 달라집니다. TV장 폭을 고를 때는 화면 가로에 베젤과 스탠드 폭까지 더해 **제품 외형 가로**를 확인하세요.

</section>

<section class="card p" markdown="1">

## 모니터 인치별 화면 크기

| 모니터 크기 | 비율 | 대각선(cm) | 화면 가로(cm) | 화면 세로(cm) |
|---|---|---|---|---|
| 24인치 | 16:9 | 61.0 | 53.1 | 29.9 |
| 27인치 | 16:9 | 68.6 | 59.8 | 33.6 |
| 32인치 | 16:9 | 81.3 | 70.8 | 39.9 |
| 34인치 | 21:9 | 86.4 | 79.4 | 34.0 |

일반적인 책상 앞 모니터 사용 거리는 50~70cm 안팎입니다. 듀얼 모니터를 구성한다면 화면 가로를 두 배로 더하고 스탠드·베젤 여유를 감안해 책상 폭을 잡으세요.

</section>

<section class="card p" markdown="1">

## 노트북 인치별 화면 크기 (16:10 기준)

| 노트북 크기 | 대각선(cm) | 화면 가로(cm) | 화면 세로(cm) |
|---|---|---|---|
| 13.3인치 | 33.8 | 28.7 | 17.9 |
| 14인치 | 35.6 | 30.2 | 18.9 |
| 15.6인치 | 39.6 | 33.6 | 21.0 |
| 16인치 | 40.6 | 34.5 | 21.5 |
| 17.3인치 | 43.9 | 37.3 | 23.3 |

16:9 화면 제품은 같은 인치에서 가로가 조금 더 길고 세로가 짧습니다. 가방·파우치 크기를 고를 때는 화면 크기가 아니라 **본체 외형 치수**(제조사 스펙)를 기준으로 삼으세요.

</section>

<section class="np-faq">
  <h2>자주 묻는 질문</h2>
  <details>
    <summary>1인치는 몇 cm인가요?</summary>
    <p>1인치는 정확히 2.54cm입니다. 따라서 인치 값에 2.54를 곱하면 cm가 되고, cm를 2.54로 나누면 인치가 됩니다. 예를 들어 27인치는 68.58cm, 100cm는 약 39.37인치입니다.</p>
  </details>
  <details>
    <summary>55인치 TV의 가로·세로 길이는 얼마인가요?</summary>
    <p>16:9 비율 기준으로 화면 가로는 약 121.8cm, 세로는 약 68.5cm입니다. 대각선은 139.7cm입니다. 베젤과 스탠드를 포함한 제품 외형은 이보다 조금 더 크므로 TV장 폭은 제조사 스펙을 확인하세요.</p>
  </details>
  <details>
    <summary>화면 인치는 가로 길이인가요, 대각선 길이인가요?</summary>
    <p>TV·모니터·노트북의 인치는 화면의 대각선 길이입니다. 같은 인치라도 화면 비율(16:9, 16:10, 21:9)에 따라 가로·세로 길이가 달라지므로 설치 공간을 잴 때는 가로·세로 cm를 따로 확인해야 합니다.</p>
  </details>
  <details>
    <summary>27인치 모니터는 책상 폭이 얼마나 필요한가요?</summary>
    <p>27인치(16:9) 모니터의 화면 가로는 약 59.8cm이고, 스탠드와 베젤까지 포함하면 보통 60cm대 중반의 폭을 차지합니다. 사용 거리 50~70cm를 확보할 수 있는 깊이의 책상이면 일반적으로 무난합니다.</p>
  </details>
  <details>
    <summary>15.6인치 노트북의 실제 크기는 어느 정도인가요?</summary>
    <p>15.6인치는 화면 대각선이 약 39.6cm이며, 16:10 비율 기준 화면 가로는 약 33.6cm, 세로는 약 21.0cm입니다. 본체는 베젤과 하우징 때문에 이보다 크며 제품마다 다르므로, 가방을 고를 때는 제조사의 외형 치수를 확인하세요.</p>
  </details>
  <details>
    <summary>이 변환표는 얼마나 정확한가요?</summary>
    <p>인치↔cm 변환은 1in=2.54cm의 정의값이라 정확합니다. 다만 가로·세로 값은 화면 비율로 계산한 근사치이고 소수점 둘째 자리 이하는 반올림했습니다. 곡면 패널, 실제 패널 비율, 베젤 두께에 따라 실측과 다를 수 있으니 구매 전 제조사 스펙을 함께 확인하세요.</p>
  </details>
</section>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;">
  <a class="btn ghost" href="/life/">생활 계산기 허브로 돌아가기</a>
  <a class="btn" href="/life/unit-converter/">단위 변환기로 더 많은 단위 계산하기</a>
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

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"생활 계산기 허브","item":"https://calculator.khaistory.com/life/"},
    {"@type":"ListItem","position":2,"name":"인치·cm 변환표","item":"https://calculator.khaistory.com/life/inch-cm-table/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "인치·cm 변환표 2026",
  "url": "https://calculator.khaistory.com/life/inch-cm-table/",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"1인치는 몇 cm인가요?","acceptedAnswer":{"@type":"Answer","text":"1인치는 정확히 2.54cm입니다. 인치 값에 2.54를 곱하면 cm가 되고, cm를 2.54로 나누면 인치가 됩니다. 예를 들어 27인치는 68.58cm입니다."}},
    {"@type":"Question","name":"55인치 TV의 가로·세로 길이는 얼마인가요?","acceptedAnswer":{"@type":"Answer","text":"16:9 비율 기준으로 화면 가로는 약 121.8cm, 세로는 약 68.5cm이며 대각선은 139.7cm입니다. 베젤과 스탠드를 포함한 제품 외형은 더 크므로 제조사 스펙을 확인하세요."}},
    {"@type":"Question","name":"화면 인치는 가로 길이인가요, 대각선 길이인가요?","acceptedAnswer":{"@type":"Answer","text":"TV·모니터·노트북의 인치는 화면의 대각선 길이입니다. 같은 인치라도 화면 비율에 따라 가로·세로 길이가 달라집니다."}},
    {"@type":"Question","name":"이 변환표는 얼마나 정확한가요?","acceptedAnswer":{"@type":"Answer","text":"인치↔cm 변환은 1in=2.54cm의 정의값이라 정확합니다. 다만 가로·세로 값은 화면 비율로 계산한 근사치이며, 곡면 패널·실제 비율·베젤에 따라 실측과 다를 수 있습니다."}}
  ]
}
</script>
