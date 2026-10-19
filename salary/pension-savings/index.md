---
layout: "default"
title: "연금저축·IRP 세액공제 계산기 2026 — 환급액 시뮬레이션"
description: "2026년 연금저축·IRP 납입액에 따른 세액공제(13.2%·16.5%)와 연말정산 환급 예상액을 계산합니다. 납입액별 환급액 표와 한도 총정리."
permalink: "/salary/pension-savings/"
canonical: "https://calculator.khaistory.com/salary/pension-savings/"
date: "2026-10-16"
og_title: "연금저축·IRP 세액공제 계산기 2026 — 환급액 시뮬레이션"
og_description: "연금저축 600만원·IRP 합산 900만원 한도, 공제율 16.5%·13.2% 기준 연말정산 환급액 계산."
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>

<section class="pen-wrap">

  <nav class="pen-breadcrumb" aria-label="브레드크럼">
    <a href="/">홈</a> <span aria-hidden="true">›</span>
    <a href="/salary/">급여·소득</a> <span aria-hidden="true">›</span>
    <span aria-current="page">연금저축 세액공제</span>
  </nav>

  <div class="pen-intro">
    <h2>연금저축·IRP, 넣으면 얼마 돌려받을까?</h2>
    <p>
      연봉과 납입액을 넣으면 <strong>세액공제율(16.5% 또는 13.2%)</strong>이 자동으로 정해지고, <strong>연말정산 환급 예상액</strong>과 납입액별 비교까지 보여 드립니다.
      연금저축은 연 600만원, IRP를 합치면 연 900만원까지 공제됩니다.
    </p>
    <a class="pen-intro-btn" href="/guide/pension-irp-tax-credit-2026/">세액공제 가이드 먼저 보기 →</a>
  </div>

  <div class="pen-notice">연봉을 입력하면 세액공제율이 자동 결정됩니다. 연금저축 + IRP 합산 연 900만원까지 세액공제가 적용됩니다.</div>

  <div class="pen-chips" aria-label="빠른 입력">
    <span class="pen-chips-label">빠른 입력</span>
    <button type="button" class="pen-chip" onclick="setPenSalary(40000000)">연봉 4,000만</button>
    <button type="button" class="pen-chip" onclick="setPenSalary(55000000)">연봉 5,500만</button>
    <button type="button" class="pen-chip" onclick="setPenSalary(70000000)">연봉 7,000만</button>
    <button type="button" class="pen-chip pen-chip-o" onclick="setPenPreset()">연금저축 600 + IRP 300</button>
  </div>

  <div class="pen-form">
    <div class="pen-field"><label>총급여 (연봉에서 비과세를 뺀 금액, 원) — 세액공제율 자동 결정</label><input type="text" id="pen-salary" inputmode="numeric" placeholder="예: 50,000,000" oninput="fmtPen(this);autoRate()"><div class="pen-hint">식대 등 비과세 급여가 있다면 연봉에서 빼고 입력하세요</div></div>
    <div class="pen-rate-display" id="pen-rate-display" style="display:none"></div>
    <div class="pen-row2">
      <div class="pen-field"><label>연금저축 연 납입액 (원)</label><input type="text" id="pen-savings" inputmode="numeric" placeholder="예: 6,000,000" oninput="fmtPen(this)"><div class="pen-hint">한도: 연 600만원</div></div>
      <div class="pen-field"><label>IRP 추가 납입액 (원)</label><input type="text" id="pen-irp" inputmode="numeric" placeholder="예: 3,000,000" oninput="fmtPen(this)"><div class="pen-hint">연금저축+IRP 합산 한도: 연 900만원</div></div>
    </div>
    <button class="pen-btn" onclick="calcPen()">세액공제 계산하기</button>
  </div>

  <div id="pen-result" style="display:none" class="pen-result">
    <div class="pen-hero">
      <div class="pen-hero-label">예상 연말정산 환급액</div>
      <div class="pen-hero-num" id="pen-refund">—</div>
      <div class="pen-hero-sub" id="pen-sub">—</div>
    </div>
    <div class="pen-grid">
      <div class="pen-card"><div class="pen-card-label">세액공제율</div><div class="pen-card-val" id="pen-rate-val">—</div></div>
      <div class="pen-card"><div class="pen-card-label">공제 대상 납입액</div><div class="pen-card-val" id="pen-base">—</div></div>
      <div class="pen-card"><div class="pen-card-label">초과 납입액 (공제 제외)</div><div class="pen-card-val" id="pen-over">—</div></div>
      <div class="pen-card"><div class="pen-card-label">월 환산 절세액</div><div class="pen-card-val" id="pen-monthly">—</div></div>
    </div>
    <div class="pen-tip"><strong>최대 환급 시나리오</strong><br>연봉 5,500만원 이하 기준, 연금저축 600만원 + IRP 300만원 = 합산 900만원 납입 시 환급액 최대 <strong>1,485,000원</strong> (16.5% 적용).</div>
    <div class="pen-scenarios">
      <div class="pen-sc-title">납입액별 예상 환급액 (연봉 기준 적용 세율)</div>
      <div id="pen-sc-grid" class="pen-sc-grid"></div>
    </div>

    <button type="button" class="pen-share" id="pen-copy-btn" onclick="copyPen()">결과 복사해서 공유하기</button>

    <div class="pen-next">
      <div class="pen-next-title">이 결과, 이렇게 이어서 확인해 보세요</div>
      <a class="pen-next-link" href="/salary/net-pay/"><strong>연봉 실수령 계산기</strong><span>월 실수령과 구간표, 역계산까지</span></a>
      <a class="pen-next-link" href="/salary/income-tax/"><strong>종합소득세 계산기</strong><span>근로소득자·프리랜서 세금 간이 계산</span></a>
      <a class="pen-next-link" href="/salary/retirement/"><strong>퇴직금 계산기</strong><span>퇴직금을 IRP로 받을 때의 세금도 함께 확인</span></a>
    </div>
  </div>

  <!-- 광고 1 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <!-- 정적 표 -->
  <section class="pen-card-sec" id="pen-quick">
    <h2>납입액별 세액공제 환급액 한눈에 보기 (2026)</h2>
    <p>세액공제율은 총급여 5,500만원 이하(종합소득금액 4,500만원 이하)이면 16.5%, 초과하면 13.2%이고 지방소득세가 포함된 값입니다. 공제 대상 납입액은 연금저축 600만원, IRP 합산 900만원까지입니다.</p>
    <div class="pen-table-wrap">
      <table class="pen-table">
        <caption class="pen-caption">납입액·소득 구간별 연말정산 세액공제 환급액</caption>
        <thead><tr><th>납입액</th><th>총급여 5,500만원 이하 (16.5%)</th><th>총급여 5,500만원 초과 (13.2%)</th></tr></thead>
        <tbody>
          <tr><td>연금저축 300만원</td><td>495,000원</td><td>396,000원</td></tr>
          <tr class="pen-hl-row"><td>연금저축 600만원</td><td>990,000원</td><td>792,000원</td></tr>
          <tr><td>연금저축 600만원 + IRP 300만원 (900만원)</td><td>1,485,000원</td><td>1,188,000원</td></tr>
        </tbody>
      </table>
    </div>
    <p class="pen-hint">환급액은 납부한 세금(결정세액) 한도 안에서만 돌려받습니다. 소득이 낮거나 다른 공제가 많아 낼 세금이 적다면 환급액이 위 금액보다 작을 수 있어요.</p>
  </section>

  <section class="pen-card-sec">
    <h2>연금저축·IRP 세액공제 핵심 정리</h2>
    <ul class="pen-list">
      <li><strong>공제 한도</strong> 연금저축 단독 연 600만원, IRP를 합산하면 연 900만원까지 세액공제됩니다.</li>
      <li><strong>공제율</strong> 총급여 5,500만원 이하(종합소득금액 4,500만원 이하) 16.5%, 초과 13.2%입니다.</li>
      <li><strong>납입 순서</strong> 연금저축 600만원을 먼저 채우고 남는 한도를 IRP로 채우는 조합이 일반적입니다.</li>
      <li><strong>중도해지 주의</strong> 55세 이전에 해지하면 세액공제를 받은 원금과 운용수익에 기타소득세 16.5%가 붙어 손해가 될 수 있습니다.</li>
    </ul>
    <p class="pen-hint">세법 개정으로 기준이 바뀔 수 있으니 최신 기준은 국세청 홈택스에서 확인하세요. 연봉 구간별 활용법은 <a class="pen-inline" href="/guide/pension-irp-tax-credit-2026/">연금저축·IRP 세액공제 가이드</a>에 정리했습니다.</p>
  </section>

  <section class="pen-card-sec">
    <h2>함께 쓰면 좋은 계산기</h2>
    <div class="pen-grid3">
      <a class="pen-gcard" href="/salary/net-pay/"><span class="pen-gcard-title">연봉 실수령 계산기</span><span class="pen-gcard-desc">월 실수령과 역계산</span></a>
      <a class="pen-gcard" href="/salary/income-tax/"><span class="pen-gcard-title">종합소득세 계산기</span><span class="pen-gcard-desc">근로소득·프리랜서 3.3%</span></a>
      <a class="pen-gcard" href="/salary/retirement/"><span class="pen-gcard-title">퇴직금 계산기</span><span class="pen-gcard-desc">퇴직소득세와 세후 금액</span></a>
    </div>
  </section>

  <section class="pen-guide-box">
    <div class="pen-guide-body">
      <h3>연말정산 환급을 늘리는 구간별 전략</h3>
      <p>연봉 구간에 따라 연금저축과 IRP를 얼마나, 어떤 순서로 넣을지 가이드로 정리했습니다.</p>
    </div>
    <a class="pen-guide-btn" href="/guide/pension-irp-tax-credit-2026/">세액공제 가이드 보기 →</a>
  </section>

  <!-- 광고 2 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <section class="pen-card-sec" id="pen-faq">
    <h2>자주 묻는 질문</h2>
    <details class="pen-faq-item"><summary>연금저축과 IRP 세액공제 한도는 얼마인가요?</summary><p>연금저축 단독으로는 연 600만원, IRP를 합치면 연 900만원까지 세액공제를 받을 수 있습니다. 납입 자체는 더 많이 할 수 있지만 공제는 이 한도까지입니다.</p></details>
    <details class="pen-faq-item"><summary>세액공제율 16.5%와 13.2%는 어떻게 갈리나요?</summary><p>총급여 5,500만원 이하(종합소득금액 4,500만원 이하)이면 16.5%, 초과하면 13.2%이고 지방소득세가 포함된 공제율입니다.</p></details>
    <details class="pen-faq-item"><summary>900만원을 넣으면 얼마를 돌려받나요?</summary><p>총급여 5,500만원 이하이면 1,485,000원, 초과하면 1,188,000원이 세액공제됩니다. 다만 환급은 낸 세금 범위 안에서만 받을 수 있습니다.</p></details>
    <details class="pen-faq-item"><summary>중도에 해지하면 어떻게 되나요?</summary><p>55세 이전에 해지하면 세액공제를 받은 납입금과 운용수익에 기타소득세 16.5%가 부과되어 오히려 손해가 날 수 있습니다.</p></details>
    <details class="pen-faq-item"><summary>이 계산기의 환급액이 실제와 다를 수 있나요?</summary><p>네, 이 계산기는 공제율에 납입액을 곱한 값만 보여 줍니다. 실제 환급액은 결정세액과 다른 공제에 따라 달라지니 홈택스 연말정산 간소화 서비스로 확인하세요.</p></details>
  </section>

  <nav class="pen-related"><a href="/salary/">← 허브로</a><a href="/salary/net-pay/">연봉 실수령</a><a href="/salary/income-tax/">종합소득세</a><a href="/salary/retirement/">퇴직금 계산기</a></nav>
</section>

<style>
.pen-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.pen-breadcrumb{font-size:.85rem;color:#8c7355;margin-bottom:14px}
.pen-breadcrumb a{color:#8c7355;text-decoration:none}
.pen-breadcrumb a:hover{text-decoration:underline}
.pen-intro{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:22px 24px;margin-bottom:18px}
.pen-intro h2{margin:0 0 8px;color:#785a43;font-size:1.25rem}
.pen-intro p{margin:0 0 12px;color:#5c4a38}
.pen-intro-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;border-radius:999px;padding:9px 18px;font-size:.9rem;font-weight:700}
.pen-intro-btn:hover{background:#174d68}
.pen-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.pen-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:16px}
.pen-chips-label{font-size:.8rem;color:#5b6470;font-weight:600}
.pen-chip{background:#cfdfe8;color:#13293d;border:1px solid #1f5c7a;border-radius:999px;padding:6px 14px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit}
.pen-chip:hover{background:#1f5c7a;color:#fff}
.pen-chip-o{background:#fdf4ec;color:#c2410c;border-color:#c2410c}
.pen-chip-o:hover{background:#c2410c;color:#fff}
.pen-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.pen-field{display:flex;flex-direction:column;gap:5px}
.pen-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.pen-hint{font-size:.76rem;color:#9ca3af}
.pen-field input{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.pen-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.pen-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pen-rate-display{background:#f6efe5;border:1px solid #eaddcd;border-radius:8px;padding:8px 12px;font-size:.85rem;color:#3f2d20;font-weight:600}
.pen-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
.pen-btn:hover{background:#e96f00}
.pen-result{animation:penFade .3s ease}
@keyframes penFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.pen-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;text-align:center;margin-bottom:14px}
.pen-hero-label{font-size:.85rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.pen-hero-num{font-size:2.2rem;font-weight:800;color:#c2410c}
.pen-hero-sub{font-size:.88rem;color:#8c7355;margin-top:4px}
.pen-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.pen-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.pen-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.pen-card-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.pen-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#5b6470;line-height:1.6;margin-bottom:14px}
.pen-tip strong{color:#3f2d20}
.pen-scenarios{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.pen-sc-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:10px}
.pen-sc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.pen-sc-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:10px;text-align:center}
.pen-sc-amt{font-size:.78rem;color:#9ca3af;margin-bottom:3px}
.pen-sc-refund{font-size:1rem;font-weight:700;color:#c2410c}
.pen-share{display:block;width:100%;margin-bottom:14px;background:#fff;color:#1f5c7a;border:2px solid #1f5c7a;border-radius:10px;padding:11px 20px;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.pen-share:hover{background:#1f5c7a;color:#fff}
.pen-next{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;background:#faf7f2;border:1px solid #eaddcd;border-radius:14px;padding:16px 18px}
.pen-next-title{font-size:.9rem;font-weight:700;color:#785a43}
.pen-next-link{display:flex;flex-direction:column;gap:2px;text-decoration:none;background:#fff;border:1px solid #e3d4c5;border-radius:10px;padding:10px 14px}
.pen-next-link strong{color:#c2410c;font-size:.92rem}
.pen-next-link span{color:#5b6470;font-size:.8rem}
.pen-next-link:hover{border-color:#c2410c;background:#fffaf5}
.pen-card-sec{background:#fff;border:1px solid #f1eae1;border-radius:16px;padding:22px;margin-top:24px}
.pen-card-sec h2{margin:0 0 10px;font-size:1.1rem;color:#785a43;border-left:4px solid #c2410c;padding-left:10px}
.pen-card-sec p{margin:0 0 10px;color:#374151}
.pen-list{margin:0 0 10px;padding-left:20px;color:#374151;line-height:1.8}
.pen-inline{color:#1f5c7a;font-weight:700;text-decoration:underline}
.pen-inline:hover{color:#174d68}
.pen-table-wrap{overflow-x:auto;border-radius:12px;border:1px solid #f1eae1;margin-bottom:12px}
.pen-table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:420px}
.pen-table th{background:#f6efe5;padding:10px 14px;font-weight:700;color:#4a3728;text-align:right}
.pen-table th:first-child{text-align:left}
.pen-table td{padding:9px 14px;text-align:right;border-top:1px solid #f5f0eb;color:#374151}
.pen-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}
.pen-table .pen-hl-row td{background:#fdf4ec;color:#c2410c;font-weight:700}
.pen-caption{caption-side:top;text-align:left;font-size:.8rem;color:#8c7355;padding:8px 14px 0}
.pen-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.pen-gcard{display:flex;flex-direction:column;gap:4px;background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;text-decoration:none}
.pen-gcard-title{color:#c2410c;font-weight:700;font-size:.92rem}
.pen-gcard-desc{font-size:.82rem;color:#785a43;line-height:1.5}
.pen-gcard:hover .pen-gcard-title{text-decoration:underline}
.pen-guide-box{display:flex;align-items:center;gap:16px;flex-wrap:wrap;background:#cfdfe8;border:1px solid #1f5c7a;border-radius:16px;padding:18px 22px;margin-top:24px}
.pen-guide-body{flex:1;min-width:200px}
.pen-guide-body h3{margin:0 0 4px;color:#13293d;font-size:1.05rem}
.pen-guide-body p{margin:0;color:#13293d;line-height:1.6;font-size:.92rem}
.pen-guide-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:999px;white-space:nowrap}
.pen-guide-btn:hover{background:#174d68}
.pen-faq-item{border:1px solid #f1eae1;border-radius:12px;padding:4px 16px;margin-bottom:10px;background:#fff}
.pen-faq-item[open]{background:#fffaf5;border-color:#f0c8a0}
.pen-faq-item summary{cursor:pointer;font-weight:700;color:#785a43;padding:12px 0;line-height:1.5}
.pen-faq-item summary:hover{color:#c2410c}
.pen-faq-item p{margin:0 0 14px;line-height:1.7;color:#5c4a38}
.pen-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:32px}
.pen-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.pen-related a:hover{background:#f3e7d9}
@media(max-width:600px){.pen-grid{grid-template-columns:1fr 1fr}.pen-row2,.pen-grid3{grid-template-columns:1fr}.pen-sc-grid{grid-template-columns:1fr 1fr}.pen-guide-box{flex-direction:column;align-items:flex-start}.pen-guide-btn{width:100%;text-align:center;white-space:normal}}
</style>

<script>
function fmtPen(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gP(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fmtW(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function getRate(salary){return salary>0&&salary<=55000000?0.165:0.132;}
function autoRate(){
  const s=gP('pen-salary');
  const d=document.getElementById('pen-rate-display');
  if(!s){d.style.display='none';return;}
  const rate=getRate(s);
  d.style.display='';
  d.textContent='세액공제율: '+(rate*100).toFixed(1)+'% '+(s<=55000000?'(총급여 5,500만원 이하)':'(총급여 5,500만원 초과)');
}
function calcPen(){
  const savings=gP('pen-savings');
  const irp=gP('pen-irp');
  const salary=gP('pen-salary');
  const rate=salary?getRate(salary):0.165;
  const MAX_SAVINGS=6000000, MAX_TOTAL=9000000;
  const effSavings=Math.min(savings,MAX_SAVINGS);
  const effIrp=Math.min(irp,Math.max(0,MAX_TOTAL-effSavings));
  const base=effSavings+effIrp;
  const total=savings+irp;
  const over=Math.max(0,total-base);
  const refund=Math.round(base*rate);
  document.getElementById('pen-result').style.display='';
  document.getElementById('pen-refund').textContent=fmtW(refund);
  document.getElementById('pen-sub').textContent='납입액 '+fmtW(base)+' × 세액공제율 '+(rate*100).toFixed(1)+'%';
  document.getElementById('pen-rate-val').textContent=(rate*100).toFixed(1)+'%';
  document.getElementById('pen-base').textContent=fmtW(base);
  document.getElementById('pen-over').textContent=over?fmtW(over):'없음';
  document.getElementById('pen-monthly').textContent=fmtW(Math.round(refund/12));
  const scenarios=[300,600,900].map(w=>({amt:w*10000,refund:Math.round(Math.min(w*10000,MAX_TOTAL)*rate)}));
  document.getElementById('pen-sc-grid').innerHTML=scenarios.map(s=>`<div class="pen-sc-item"><div class="pen-sc-amt">납입 ${(s.amt/10000).toLocaleString()}만원</div><div class="pen-sc-refund">${fmtW(s.refund)}</div></div>`).join('');
}

/* [신규] 연봉 칩: 연봉 칸을 채우고 공제율 표시 갱신 */
function setPenSalary(v){const el=document.getElementById('pen-salary');el.value=v.toLocaleString('ko-KR');el.dataset.raw=String(v);autoRate();}
/* [신규] 연금저축 600 + IRP 300 프리셋 후 바로 계산 */
function setPenPreset(){
  const a=document.getElementById('pen-savings'),b=document.getElementById('pen-irp');
  a.value=(6000000).toLocaleString('ko-KR');a.dataset.raw='6000000';
  b.value=(3000000).toLocaleString('ko-KR');b.dataset.raw='3000000';
  calcPen();
}
/* [신규] 결과 복사 */
function copyPen(){
  const txt='연금저축·IRP 세액공제 예상 환급액 '+document.getElementById('pen-refund').textContent+' ('+document.getElementById('pen-sub').textContent+')\n연금저축 세액공제 계산기: https://calculator.khaistory.com/salary/pension-savings/';
  const btn=document.getElementById('pen-copy-btn');
  const done=()=>{btn.textContent='복사했어요! 원하는 곳에 붙여넣기';setTimeout(()=>{btn.textContent='결과 복사해서 공유하기';},2500);};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(()=>{});}
  else{const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
{"@type":"ListItem","position":2,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
{"@type":"ListItem","position":3,"name":"연금저축 세액공제 계산기","item":"https://calculator.khaistory.com/salary/pension-savings/"}]}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"연금저축과 IRP 세액공제 한도는 얼마인가요?","acceptedAnswer":{"@type":"Answer","text":"연금저축 단독으로는 연 600만원, IRP를 합치면 연 900만원까지 세액공제를 받을 수 있습니다. 납입 자체는 더 많이 할 수 있지만 공제는 이 한도까지입니다."}},
{"@type":"Question","name":"세액공제율 16.5%와 13.2%는 어떻게 갈리나요?","acceptedAnswer":{"@type":"Answer","text":"총급여 5,500만원 이하(종합소득금액 4,500만원 이하)이면 16.5%, 초과하면 13.2%이고 지방소득세가 포함된 공제율입니다."}},
{"@type":"Question","name":"900만원을 넣으면 얼마를 돌려받나요?","acceptedAnswer":{"@type":"Answer","text":"총급여 5,500만원 이하이면 1,485,000원, 초과하면 1,188,000원이 세액공제됩니다. 다만 환급은 낸 세금 범위 안에서만 받을 수 있습니다."}},
{"@type":"Question","name":"중도에 해지하면 어떻게 되나요?","acceptedAnswer":{"@type":"Answer","text":"55세 이전에 해지하면 세액공제를 받은 납입금과 운용수익에 기타소득세 16.5%가 부과되어 오히려 손해가 날 수 있습니다."}},
{"@type":"Question","name":"이 계산기의 환급액이 실제와 다를 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"네, 이 계산기는 공제율에 납입액을 곱한 값만 보여 줍니다. 실제 환급액은 결정세액과 다른 공제에 따라 달라지니 홈택스 연말정산 간소화 서비스로 확인하세요."}}]}
</script>
