---
layout: default
title: 주식 목표가·손절가 계산기
description: 진입가와 목표/손절 비율(R)로 목표가·손절가와 손익비, 기대 손익을 계산합니다.
permalink: /invest/stocks/targets/
---

<section class="calc-wrap" style="max-width:920px;margin:0 auto">

  <!-- 설명문: header/p 대신 div 사용 -->
  <div style="margin:0 0 18px;color:#475569;line-height:1.75;">
    진입가와 목표 수익률, 손절 폭을 기준으로 <strong>목표가</strong>, <strong>손절가</strong>,
    <strong>손익비(R:R)</strong>, 그리고 수량 입력 시 <strong>예상 이익·예상 손실</strong>까지 한 번에 계산합니다.
    단기 매매, 스윙, 분할매수 후 기준가 점검에 활용하기 좋습니다.
  </div>

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
               style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:12px;">
      </label>

      <label style="display:grid;gap:6px;font-weight:600;">
        <span>손절 폭(%)</span>
        <input type="number" id="sl" inputmode="decimal" min="0.1" step="0.1" value="5"
               style="width:100%;padding:12px 14px;border:1px solid #d1d5db;border-radius:12px;">
      </label>

      <label style="display:grid;gap:6px;font-weight:600;">
        <span>수량(주)</span>
        <input type="number" id="qty" inputmode="numeric" min="0" step="1" value="0"
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

  <div id="tgt-out" class="result-box" style="margin-top:18px;display:none;"></div>

  <section class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;margin-top:18px">
    <h2 style="font-size:1.2rem;margin:0 0 12px;">주식 목표가·손절가 계산기 활용 팁</h2>
    <div style="color:#334155;line-height:1.85;">
      <p style="margin:0 0 10px;">
        이 계산기는 단순히 목표가만 보는 것이 아니라, <strong>손절가와 손익비를 함께 확인</strong>하는 데 의미가 있습니다.
        예를 들어 목표 수익률이 10%, 손절 폭이 5%라면 손익비는 <strong>2:1</strong>입니다.
      </p>
      <p style="margin:0;">
        수량을 함께 입력하면 실제 투자금 기준으로 예상 이익과 손실을 금액으로 볼 수 있어, 자금 규모에 맞는 포지션 관리에 도움이 됩니다.
      </p>
    </div>
  </section>

  <nav class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:18px">
    <a class="btn" href="/invest/stocks/pnl/">주식 수익/손실 계산기</a>
    <a class="btn ghost" href="/invest/stocks/dividend-yield/">배당수익률 계산기</a>
    <a class="btn ghost" href="/invest/">투자 계산기 모음</a>
  </nav>

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
  const rr = tp / sl;
  const expGain = qty > 0 ? (tgt - ent) * qty : 0;
  const expLoss = qty > 0 ? (ent - stop) * qty : 0;

  const out = document.getElementById('tgt-out');
  out.style.display = 'block';
  out.innerHTML = `
    <div class="card" style="padding:18px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;">
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

        ${qty > 0 ? `
        <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
          <div style="color:#64748b;font-size:.92rem;">예상 이익</div>
          <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${fmtInt(expGain)} 원</div>
        </div>

        <div style="padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;">
          <div style="color:#64748b;font-size:.92rem;">예상 손실</div>
          <div style="font-size:1.3rem;font-weight:800;margin-top:6px;">${fmtInt(expLoss)} 원</div>
        </div>
        ` : ''}
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
    {"@type":"ListItem","position":1,"name":"투자 계산기 모음","item":"https://calculator.khaistory.com/invest/"},
    {"@type":"ListItem","position":2,"name":"주식 목표가·손절가 계산기","item":"https://calculator.khaistory.com/invest/stocks/targets/"}
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
      "acceptedAnswer":{"@type":"Answer","text":"목표수익률을 손절률로 나눈 값입니다. 예를 들어 목표수익률 10%, 손절률 5%이면 손익비는 2:1입니다."}
    },
    {
      "@type":"Question",
      "name":"수량을 입력하면 무엇이 달라지나요?",
      "acceptedAnswer":{"@type":"Answer","text":"수량을 입력하면 목표가 도달 시 예상 이익 금액과 손절가 도달 시 예상 손실 금액을 함께 계산할 수 있습니다."}
    }
  ]
}
</script>
