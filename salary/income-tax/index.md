---
layout: default
title: 종합소득세 계산기 2025(간편)
description: 과세표준을 입력하면 누진세 방식으로 종합소득세를 간편 계산합니다. (지방소득세 10% 선택)
permalink: /salary/income-tax/
---

<!-- ✅ 페이지 설명(SEO/사용자 이해용) -->
<p class="muted" style="margin:6px 0 14px;">
  과세표준(필요경비·공제 반영 후 금액)을 기준으로 종합소득세를 <b>간편 누진세 방식</b>으로 계산합니다.
  실제 신고 금액은 소득 종류, 공제 항목, 가산세/감면 등에 따라 달라질 수 있습니다.
</p>

<form id="it-form" onsubmit="event.preventDefault(); calcIT();">
  <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px">
    <label>연 과세표준(원)
      <!-- number → text 변경(콤마 입력/표시 가능) -->
      <input type="text" id="it-base" inputmode="numeric" placeholder="예: 24,000,000" data-format="currency" required>
    </label>

    <label>세액공제/감면(연, 원)
      <input type="text" id="it-credit" inputmode="numeric" value="0" data-format="currency">
    </label>

    <label>지방소득세 포함
      <select id="it-local">
        <option value="yes" selected>예</option>
        <option value="no">아니오</option>
      </select>
    </label>
  </div>

  <button class="btn" type="submit" style="margin-top:10px;">계산</button>
</form>

<div id="it-out" class="result-box"></div>

<!-- ✅ 내부 링크(허브/다음 계산기) -->
<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/retirement/">다음: 퇴직금</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
/* ---------- 공통 유틸 ---------- */
function cleanNumber(v){
  return Number(String(v ?? "").replace(/[^\d.-]/g, "")) || 0;
}
const fmtInt = n => (Math.round(n)).toLocaleString('ko-KR');

/* ---------- 종합소득세(간편) 계산 ---------- */
function pit(base){
  // ✅ 간단 누진(세율표는 연도별 변경될 수 있음)
  const br = [
    {up: 12_000_000, rate:0.06,  ded:0},
    {up: 46_000_000, rate:0.15,  ded:1_080_000},
    {up: 88_000_000, rate:0.24,  ded:5_220_000},
    {up:150_000_000, rate:0.35,  ded:14_900_000},
    {up:300_000_000, rate:0.38,  ded:19_400_000},
    {up:500_000_000, rate:0.40,  ded:25_400_000},
    {up:1_000_000_000, rate:0.42, ded:35_400_000},
    {up:Infinity, rate:0.45,     ded:65_400_000}
  ];
  for (const b of br){
    if (base <= b.up) return Math.round(base*b.rate - b.ded);
  }
  return 0;
}

function calcIT(){
  const base = Math.max(0, cleanNumber(document.getElementById('it-base').value));
  const credit = Math.max(0, cleanNumber(document.getElementById('it-credit').value));
  const localYes = document.getElementById('it-local').value === 'yes';

  if (!(base > 0)) { alert('연 과세표준을 입력해 주세요.'); return; }

  let natTax = Math.max(0, pit(base) - credit);
  const localTax = localYes ? Math.round(natTax * 0.1) : 0;
  const total = natTax + localTax;

  const out = document.getElementById('it-out');
  out.classList.add('show');
  out.innerHTML = `
    <div class="card p-3">
      <div class="title">종합소득세 계산 결과(간편)</div>
      <ul>
        <li>국세(종합소득세): <b>${fmtInt(natTax)}</b> 원</li>
        ${localYes ? `<li>지방소득세(10%): <b>${fmtInt(localTax)}</b> 원</li>` : ``}
        <li><strong>합계:</strong> <b>${fmtInt(total)}</b> 원</li>
      </ul>

      <div class="muted" style="margin-top:10px;line-height:1.6;">
        <b>안내</b><br>
        • 본 계산기는 과세표준 기준의 <u>간편 누진세</u> 방식입니다.<br>
        • 실제 신고 세액은 소득 유형(사업/근로/기타), 공제·감면, 가산세 등에 따라 달라질 수 있습니다.<br>
        • 정확한 신고는 홈택스 기준으로 확인해 주세요.
      </div>
    </div>
  `;

  // 계산 후 결과로 시선 이동(UX 개선)
  out.scrollIntoView({behavior:"smooth", block:"start"});
}
</script>

<!-- ✅ 입력 자동 콤마 포맷(텍스트 입력 지원) -->
<script>
(function(){
  "use strict";
  function clean(v){ return String(v==null?"":v).replace(/[^\d.-]/g,""); }
  function fmtCurrency(el){
    var v = clean(el.value);
    if(!v){ el.value=""; return; }
    v = v.replace(/\./g,"");               // 통화는 소수점 제거
    var n = parseInt(v,10);
    el.value = isFinite(n) ? n.toLocaleString("ko-KR") : "";
  }
  document.addEventListener("input", function(e){
    var t=e.target;
    if(!t || !t.dataset) return;
    if(t.dataset.format==="currency") fmtCurrency(t);
  }, {passive:true});
  document.addEventListener("blur", function(e){
    var t=e.target;
    if(!t || !t.dataset) return;
    if(t.dataset.format==="currency") fmtCurrency(t);
  }, true);
})();
</script>

<!-- ✅ Breadcrumb(오류 수정: 2번 이름) -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
    {"@type":"ListItem","position":2,"name":"종합소득세 계산기","item":"https://calculator.khaistory.com/salary/income-tax/"}
  ]
}
</script>

<!-- ✅ FAQ(2개 → 4개로 강화) -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"과세표준은 무엇을 입력하나요?",
      "acceptedAnswer":{"@type":"Answer","text":"과세표준은 필요경비·공제 등을 반영한 뒤 최종적으로 세율이 적용되는 기준 금액입니다. 총수입금액과 다를 수 있습니다."}
    },
    {
      "@type":"Question",
      "name":"간편 계산과 실제 신고 세액이 달라질 수 있나요?",
      "acceptedAnswer":{"@type":"Answer","text":"네. 소득 종류, 공제·감면, 가산세, 기납부세액 등에 따라 실제 신고 세액은 달라질 수 있습니다."}
    },
    {
      "@type":"Question",
      "name":"지방소득세는 왜 10%인가요?",
      "acceptedAnswer":{"@type":"Answer","text":"개인 지방소득세는 산출된 소득세(국세)를 기준으로 일정 비율로 계산되는 구조입니다. 본 계산기는 안내를 위해 10% 옵션을 제공합니다."}
    },
    {
      "@type":"Question",
      "name":"세율표가 바뀌면 계산기도 자동으로 바뀌나요?",
      "acceptedAnswer":{"@type":"Answer","text":"세율표/누진공제를 코드나 데이터 파일로 관리하면, 연도 업데이트 시 쉽게 갱신할 수 있습니다."}
    }
  ]
}
</script>
