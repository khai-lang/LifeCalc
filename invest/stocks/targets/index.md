---
layout: default
title: 주식 목표가·손절가 계산기
description: 진입가, 목표 수익률, 손절 폭, 수량을 입력하면 목표가·손절가·손익비(R:R)와 예상 손익을 계산할 수 있는 주식 목표가 계산기입니다.
permalink: /invest/stocks/targets/
---

<section class="calc-wrap" style="max-width:920px;margin:0 auto">
  <header style="margin-bottom:18px">
    <h1 style="font-size:clamp(1.8rem,2.8vw,2.4rem);line-height:1.3;margin:0 0 10px;font-weight:800;">
      주식 목표가·손절가 계산기
    </h1>
    <p style="margin:0;color:#475569;line-height:1.75;">
      진입가와 목표 수익률, 손절 폭을 기준으로 <strong>목표가</strong>, <strong>손절가</strong>, 
      <strong>손익비(R:R)</strong>, 그리고 수량 입력 시 <strong>예상 이익·예상 손실</strong>까지 한 번에 계산합니다.
      단기 매매, 스윙, 분할매수 후 기준가 점검에 활용하기 좋습니다.
    </p>
  </header>

  <!-- 요약 박스 -->
  <section class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#f8fafc;margin-bottom:18px">
    <div style="font-weight:800;margin-bottom:8px;">한눈에 보는 계산 기준</div>
    <ul style="margin:0;padding-left:18px;line-height:1.8;color:#334155;">
      <li><strong>목표가</strong> = 진입가 × (1 + 목표 수익률)</li>
      <li><strong>손절가</strong> = 진입가 × (1 - 손절 폭)</li>
      <li><strong>손익비(R:R)</strong> = 목표 수익률 ÷ 손절 폭</li>
      <li><strong>예상 이익/손실</strong> = 가격 차이 × 수량</li>
    </ul>
  </section>

  <style>
  .calc-wrap{
    position:relative;
    z-index:2;
  }

  .calc-wrap h1{
    position:relative;
    z-index:3;
    display:block;
    margin:0 0 10px;
    line-height:1.3;
    background:none !important;
  }

  .calc-wrap header{
    position:relative;
    z-index:3;
    background:none !important;
  }

  .calc-wrap section,
  .calc-wrap form,
  .calc-wrap .card,
  .calc-wrap .result-box,
  .calc-wrap nav{
    position:relative;
    z-index:2;
  }

  /* 혹시 공통 스타일에서 이상한 배경/겹침이 들어오는 경우 방지 */
  .calc-wrap *::before,
  .calc-wrap *::after{
    box-sizing:border-box;
  }
</style>

  <form id="tgt" onsubmit="event.preventDefault();tgtCalc();" class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;">
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px">
      <label style="display:grid;gap:6px;font-weight:600;">
        <span>진입가(원)</span>
        <input type="number" id="ent" inputmode="decimal" min="0" step="1" required
               placeholder="예: 50000"
               style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:12px;">
      </label>

      <label style="display:grid;gap:6px;font-weight:600;">
        <span>목표 수익(%)</span>
        <input type="number" id="tp" inputmode="decimal" min="0" step="0.1" value="10"
               placeholder="예: 10"
               style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:12px;">
      </label>

      <label style="display:grid;gap:6px;font-weight:600;">
        <span>손절 폭(%)</span>
        <input type="number" id="sl" inputmode="decimal" min="0.1" step="0.1" value="5"
               placeholder="예: 5"
               style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:12px;">
      </label>

      <label style="display:grid;gap:6px;font-weight:600;">
        <span>수량(주)</span>
        <input type="number" id="qty" inputmode="numeric" min="0" step="1" value="0"
               placeholder="예: 10"
               style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:12px;">
      </label>
    </div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;">
      <button class="btn" type="submit">계산하기</button>
      <button class="btn ghost" type="button" onclick="tgtReset()">초기화</button>
    </div>

    <p style="margin:12px 0 0;color:#64748b;font-size:.95rem;line-height:1.7;">
      손익비가 높다고 항상 좋은 매매는 아닙니다. 실제 매매에서는 수수료, 세금, 슬리피지, 분할매수·분할매도 전략도 함께 고려하세요.
    </p>
  </form>

  <!-- ⭐ 자동 광고 또는 수동 광고 삽입 권장 위치 1 -->
  <div aria-hidden="true" style="margin:18px 0;"></div>

  <div id="tgt-out" class="result-box" style="margin-top:18px;display:none;"></div>

  <!-- 사용 팁 -->
  <section class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;margin-top:18px">
    <h2 style="font-size:1.2rem;margin:0 0 12px;">주식 목표가·손절가 계산기 활용 팁</h2>
    <div style="color:#334155;line-height:1.85;">
      <p style="margin:0 0 10px;">
        이 계산기는 단순히 목표가만 보는 것이 아니라, <strong>손절가와 손익비를 함께 확인</strong>하는 데 의미가 있습니다.
        예를 들어 목표 수익률이 10%, 손절 폭이 5%라면 손익비는 <strong>2:1</strong>입니다.
        즉 한 번의 손실을 감수하더라도, 한 번의 성공적인 매매가 손실 두 번을 상쇄할 수 있는 구조인지 판단하는 기준이 됩니다.
      </p>
      <p style="margin:0 0 10px;">
        또한 수량을 함께 입력하면 실제 투자금 기준으로 예상 이익과 손실을 금액으로 볼 수 있어,
        본인의 자금 규모에 맞는 포지션 관리에 도움이 됩니다.
      </p>
      <p style="margin:0;">
        특히 단타, 스윙, 추세매매를 할 때 진입 전에 목표가와 손절가를 먼저 정해두면 감정적인 매매를 줄이는 데 유리합니다.
      </p>
    </div>
  </section>

  <!-- 내부 링크 -->
  <nav class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px">
    <a class="btn" href="/invest/stocks/pnl/">주식 수익/손실 계산기</a>
    <a class="btn ghost" href="/invest/stocks/dividend-yield/">배당수익률 계산기</a>
    <a class="btn ghost" href="/invest/">투자 계산기 모음</a>
  </nav>

  <!-- FAQ 본문 -->
  <section class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;margin-top:22px">
    <h2 style="font-size:1.2rem;margin:0 0 14px;">자주 묻는 질문</h2>

    <div style="display:grid;gap:14px;line-height:1.8;color:#334155;">
      <div>
        <strong>손익비(R:R)는 무엇인가요?</strong>
        <p style="margin:6px 0 0;">
          목표수익률 ÷ 손절률로 계산합니다. 예를 들어 10% 수익, 5% 손절이면 손익비는 2:1입니다.
          일반적으로 손익비가 높을수록 유리해 보일 수 있지만, 실제 승률과 함께 봐야 합니다.
        </p>
      </div>

      <div>
        <strong>수량을 입력하면 무엇이 달라지나요?</strong>
        <p style="margin:6px 0 0;">
          목표가 도달 시 예상 이익 금액과 손절가 도달 시 예상 손실 금액을 원화 기준으로 함께 표시합니다.
        </p>
      </div>

      <div>
        <strong>손절 폭은 몇 %로 잡는 것이 좋나요?</strong>
        <p style="margin:6px 0 0;">
          정답은 없지만, 보통 본인의 매매 스타일과 종목 변동성에 따라 달라집니다.
          변동성이 큰 종목은 너무 짧은 손절폭을 잡으면 흔들릴 수 있고, 너무 넓으면 손실 관리가 어려워질 수 있습니다.
        </p>
      </div>
    </div>
  </section>

  <p style="margin-top:18px;color:#64748b;font-size:.92rem;line-height:1.7;">
    본 계산 결과는 참고용입니다. 실제 투자 판단과 책임은 본인에게 있으며, 세금·수수료·시장 유동성은 별도로 확인해야 합니다.
  </p>
</section>

<script>
const fmtInt = n => Math.round(n).toLocaleString('ko-KR');

function tgtCalc(){
  const ent = Number(document.getElementById('ent').value) || 0;
  const tp  = (Number(document.getElementById('tp').value) || 0) / 100;
  const sl  = (Number(document.getElementById('sl').value) || 0) / 100;
  const qty = Number(document.getElementById('qty').value) || 0;

  if (!(ent > 0)) {
    alert('진입가를 0보다 크게 입력하세요.');
    document.getElementById('ent').focus();
    return;
  }

  if (tp < 0) {
    alert('목표 수익률은 0 이상이어야 합니다.');
    document.getElementById('tp').focus();
    return;
  }

  if (!(sl > 0)) {
    alert('손절 폭은 0보다 크게 입력하세요.');
    document.getElementById('sl').focus();
    return;
  }

  const tgt = ent * (1 + tp);
  const stop = ent * (1 - sl);
  const rr = sl > 0 ? tp / sl : 0;

  const expGain = qty > 0 ? (tgt - ent) * qty : 0;
  const expLoss = qty > 0 ? (ent - stop) * qty : 0;

  const out = document.getElementById('tgt-out');
  out.style.display = 'block';
  out.innerHTML = `
    <div class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;">
      <div style="font-size:1.05rem;font-weight:800;margin-bottom:14px;">계산 결과</div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;">
        <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
          <div style="color:#64748b;font-size:.92rem;">목표가</div>
          <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${fmtInt(tgt)} 원</div>
        </div>

        <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
          <div style="color:#64748b;font-size:.92rem;">손절가</div>
          <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${fmtInt(stop)} 원</div>
        </div>

        <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
          <div style="color:#64748b;font-size:.92rem;">손익비(R:R)</div>
          <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${rr.toFixed(2)} : 1</div>
        </div>

        ${
          qty > 0 ? `
          <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
            <div style="color:#64748b;font-size:.92rem;">예상 이익</div>
            <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${fmtInt(expGain)} 원</div>
          </div>

          <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
            <div style="color:#64748b;font-size:.92rem;">예상 손실</div>
            <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${fmtInt(expLoss)} 원</div>
          </div>
          ` : ''
        }
      </div>

      <div style="margin-top:14px;padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;color:#334155;line-height:1.8;">
        <strong>해석 팁</strong><br>
        현재 설정 기준으로 목표 수익률은 <strong>${(tp * 100).toFixed(1)}%</strong>,
        손절 폭은 <strong>${(sl * 100).toFixed(1)}%</strong>입니다.
        손익비가 <strong>${rr.toFixed(2)} : 1</strong>이면, 손실 1 대비 기대수익 ${rr.toFixed(2)}배 구조입니다.
      </div>
    </div>
  `;
}

function tgtReset(){
  document.getElementById('tgt').reset();
  document.getElementById('tp').value = 10;
  document.getElementById('sl').value = 5;
  document.getElementById('qty').value = 0;
  const out = document.getElementById('tgt-out');
  out.style.display = 'none';
  out.innerHTML = '';
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"BreadcrumbList",
  "itemListElement":[
    {
      "@type":"ListItem",
      "position":1,
      "name":"투자 계산기 모음",
      "item":"https://calculator.khaistory.com/invest/"
    },
    {
      "@type":"ListItem",
      "position":2,
      "name":"주식 목표가·손절가 계산기",
      "item":"https://calculator.khaistory.com/invest/stocks/targets/"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity":[
    {
      "@type":"Question",
      "name":"손익비(R:R)는 무엇인가요?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"손익비는 목표수익률을 손절률로 나눈 값입니다. 예를 들어 목표수익률이 10%, 손절률이 5%이면 손익비는 2:1입니다."
      }
    },
    {
      "@type":"Question",
      "name":"수량을 입력하면 무엇이 달라지나요?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"수량을 입력하면 목표가 도달 시 예상 이익 금액과 손절가 도달 시 예상 손실 금액을 원화 기준으로 함께 계산할 수 있습니다."
      }
    },
    {
      "@type":"Question",
      "name":"손절 폭은 몇 퍼센트로 설정하는 것이 좋나요?",
      "acceptedAnswer":{
        "@type":"Answer",
        "text":"정해진 정답은 없으며 종목의 변동성과 본인의 매매 전략에 따라 달라집니다. 변동성이 큰 종목은 지나치게 짧은 손절 폭이 불리할 수 있습니다."
      }
    }
  ]
}
</script>
