---
layout: "default"
title: "퇴직금 계산기 2026 — 퇴직소득세 공제 후 실수령까지"
description: "2026년 기준 퇴직금과 퇴직소득세를 계산해 세후 실수령액까지 한 번에 확인하세요. 근속연수공제·환산급여공제 표와 월급·근속연수별 예시 포함."
permalink: "/salary/retirement/"
canonical: "https://calculator.khaistory.com/salary/retirement/"
date: "2026-10-16"
og_title: "퇴직금 계산기 2026 — 퇴직소득세 공제 후 실수령"
og_description: "평균임금·재직일수로 퇴직금을 계산하고 퇴직소득세를 뺀 세후 실수령액까지 확인."
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>

<section class="ret-wrap">

  <nav class="ret-breadcrumb" aria-label="브레드크럼">
    <a href="/">홈</a> <span aria-hidden="true">›</span>
    <a href="/salary/">급여·소득</a> <span aria-hidden="true">›</span>
    <span aria-current="page">퇴직금 계산기</span>
  </nav>

  <div class="ret-intro">
    <h2>2026 퇴직금 계산기 — 세후로 얼마 받을까?</h2>
    <p>
      퇴직 전 3개월 월급과 재직기간을 넣으면 <strong>퇴직금(세전)</strong>과 <strong>퇴직소득세·지방소득세를 뺀 세후 실수령액</strong>을 보여 드립니다.
      퇴직금을 받고 나면 <strong>실업급여</strong>도 함께 확인해 보세요.
    </p>
    <a class="ret-intro-btn" href="/salary/unemployment/">실업급여 계산기 바로가기 →</a>
  </div>

  <div class="ret-notice">퇴직금은 <strong>평균임금 × 30일 × (재직일수 ÷ 365)</strong>로 계산합니다. 퇴직소득세는 2026년 세법 기준 근사치입니다.</div>

  <nav class="ret-tabs"><button class="ret-tab active" onclick="retTab('calc')">퇴직금 계산</button><button class="ret-tab" onclick="retTab('info')">DB형 vs DC형</button></nav>

  <div id="ret-calc" class="ret-panel">

    <div class="ret-chips" aria-label="자주 찾는 월급">
      <span class="ret-chips-label">월급 빠른 입력</span>
      <button type="button" class="ret-chip" onclick="setRetMonthly(3000000)">300만</button>
      <button type="button" class="ret-chip" onclick="setRetMonthly(3500000)">350만</button>
      <button type="button" class="ret-chip" onclick="setRetMonthly(4000000)">400만</button>
      <button type="button" class="ret-chip" onclick="setRetMonthly(5000000)">500만</button>
    </div>

    <div class="ret-form">
      <div class="ret-row2">
        <div class="ret-field"><label>입사일</label><input type="date" id="ret-join" onchange="autoCalcDays()"></div>
        <div class="ret-field"><label>퇴사일</label><input type="date" id="ret-leave" onchange="autoCalcDays()"><div class="ret-hint">마지막 근무일의 다음 날을 입력하면 재직일수가 정확합니다</div></div>
      </div>
      <div id="ret-days-display" class="ret-days-display" style="display:none"><span id="ret-days-text"></span></div>
      <div class="ret-divider">평균임금 기준 — 퇴직 전 3개월</div>
      <div class="ret-row3">
        <div class="ret-field"><label>3개월 전 월급</label><input type="text" id="ret-m1" inputmode="numeric" placeholder="3,500,000" oninput="fmtR(this)"></div>
        <div class="ret-field"><label>2개월 전 월급</label><input type="text" id="ret-m2" inputmode="numeric" placeholder="3,500,000" oninput="fmtR(this)"></div>
        <div class="ret-field"><label>퇴직 월 월급</label><input type="text" id="ret-m3" inputmode="numeric" placeholder="3,500,000" oninput="fmtR(this)"></div>
      </div>
      <div class="ret-field"><label>3개월 중 상여금 합계 <span class="ret-opt">선택</span></label><input type="text" id="ret-bonus" inputmode="numeric" placeholder="0" oninput="fmtR(this)"><div class="ret-hint">연 단위로 받는 상여금은 연 합계의 3/12(3개월분)를 넣어 주세요</div></div>
      <div class="ret-field"><label>재직연수 <span class="ret-opt">입사·퇴사일 입력 시 자동</span></label><input type="number" id="ret-years" placeholder="예: 5.5" step="0.1" min="0"><div class="ret-hint">1년 미만 근무는 퇴직금이 발생하지 않습니다</div></div>
      <button class="ret-btn" onclick="calcRet()">퇴직금 계산하기</button>
    </div>

    <div id="ret-result" style="display:none" class="ret-result">
      <div class="ret-hero">
        <div class="ret-hero-row">
          <div><div class="ret-hero-label">퇴직금 (세전)</div><div class="ret-hero-num" id="ret-gross">—</div></div>
          <div class="ret-hero-arrow">→</div>
          <div><div class="ret-hero-label">세후 실수령액</div><div class="ret-hero-num ret-hero-net" id="ret-net">—</div></div>
        </div>
      </div>
      <div class="ret-detail-grid">
        <div class="ret-dcard"><div class="ret-dcard-label">재직기간</div><div class="ret-dcard-val" id="rd-period">—</div></div>
        <div class="ret-dcard"><div class="ret-dcard-label">1일 평균임금</div><div class="ret-dcard-val" id="rd-daily">—</div></div>
        <div class="ret-dcard"><div class="ret-dcard-label">퇴직소득세</div><div class="ret-dcard-val ret-minus" id="rd-tax">—</div></div>
        <div class="ret-dcard"><div class="ret-dcard-label">지방소득세</div><div class="ret-dcard-val ret-minus" id="rd-local">—</div></div>
      </div>
      <div class="ret-tip"><strong>절세 팁:</strong> IRP로 수령하면 퇴직소득세 납부를 연금 수령 시점까지 이연하고, 연금으로 나눠 받으면 퇴직소득세의 <strong>30~40% 감면</strong> 혜택이 있습니다.</div>

      <button type="button" class="ret-share" id="ret-copy-btn" onclick="copyRet()">결과 복사해서 공유하기</button>

      <div class="ret-next">
        <div class="ret-next-title">퇴직 전후, 이어서 확인해 보세요</div>
        <a class="ret-next-link" href="/salary/unemployment/"><strong>실업급여 계산기</strong><span>비자발적 퇴사라면 받을 수 있는 구직급여 확인</span></a>
        <a class="ret-next-link" href="/salary/pension-savings/"><strong>연금저축·IRP 세액공제 계산기</strong><span>퇴직 후에도 이어 가는 노후·절세 설계</span></a>
        <a class="ret-next-link" href="/salary/net-pay/"><strong>연봉 실수령 계산기</strong><span>이직할 회사의 연봉을 실수령으로 비교</span></a>
      </div>
    </div>
  </div>

  <div id="ret-info" class="ret-panel" style="display:none">
    <div class="ret-compare-cards">
      <div class="ret-ccard ret-db"><div class="ret-ccard-title">DB형 (확정급여형)</div><ul><li>퇴직 시 <strong>최종 평균임금 기준</strong> 지급</li><li>연봉 상승분이 퇴직금에 반영</li><li>운용 책임 → <strong>회사</strong></li><li>장기 근속·연봉 상승 예상 시 유리</li><li>중도인출 불가</li></ul></div>
      <div class="ret-ccard ret-dc"><div class="ret-ccard-title">DC형 (확정기여형)</div><ul><li>매년 <strong>연간 임금의 1/12</strong> 적립</li><li>운용 성과에 따라 수령액 변동</li><li>운용 책임 → <strong>근로자</strong></li><li>이직이 잦거나 투자 수익 기대 시 유리</li><li>특정 조건 시 중도인출 가능</li></ul></div>
    </div>
    <div class="ret-tip" style="margin-top:16px"><strong>선택 기준:</strong> 연봉 상승이 꾸준히 예상되면 DB형, 이직이 잦거나 직접 운용 자신 있다면 DC형이 유리합니다.</div>
  </div>

  <!-- 광고 1 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <!-- 정적 예시표 -->
  <section class="ret-card-sec" id="ret-quick">
    <h2>월급·근속연수별 퇴직금과 세후 금액 (예시)</h2>
    <p>상여금·연차수당 없이 월급이 3개월 동안 같다고 가정하고, 이 계산기와 같은 방식(3개월 92일 기준)으로 계산한 값입니다.</p>
    <div class="ret-table-wrap">
      <table class="ret-table">
        <caption class="ret-caption">2026 월급·근속연수별 퇴직금 (세전)과 세후 실수령 (퇴직소득세·지방소득세 반영)</caption>
        <thead><tr><th>월급</th><th>근속</th><th>퇴직금(세전)</th><th>세금 합계</th><th>세후 실수령</th></tr></thead>
        <tbody>
          <tr><td>300만원</td><td>3년</td><td>8,804,348원</td><td>100,434원</td><td>8,703,914원</td></tr>
          <tr><td>300만원</td><td>5년</td><td>14,673,913원</td><td>167,391원</td><td>14,506,522원</td></tr>
          <tr><td>300만원</td><td>10년</td><td>29,347,826원</td><td>202,783원</td><td>29,145,043원</td></tr>
          <tr class="ret-hl-row"><td>400만원</td><td>3년</td><td>11,739,130원</td><td>177,913원</td><td>11,561,217원</td></tr>
          <tr class="ret-hl-row"><td>400만원</td><td>5년</td><td>19,565,217원</td><td>296,522원</td><td>19,268,695원</td></tr>
          <tr class="ret-hl-row"><td>400만원</td><td>10년</td><td>39,130,435원</td><td>461,043원</td><td>38,669,392원</td></tr>
          <tr><td>500만원</td><td>3년</td><td>14,673,913원</td><td>291,979원</td><td>14,381,934원</td></tr>
          <tr><td>500만원</td><td>5년</td><td>24,456,522원</td><td>486,630원</td><td>23,969,892원</td></tr>
          <tr><td>500만원</td><td>10년</td><td>48,913,043원</td><td>719,304원</td><td>48,193,739원</td></tr>
        </tbody>
      </table>
    </div>
    <p class="ret-hint">실제 퇴직금은 상여금·연차수당 포함 여부, 3개월 총일수(91~92일)에 따라 달라지고, 세액은 근사 계산이라 원천징수액과 차이가 날 수 있습니다.</p>
  </section>

  <section class="ret-card-sec">
    <h2>퇴직금은 이렇게 계산해요</h2>
    <ul class="ret-list">
      <li><strong>1일 평균임금</strong> 퇴직 전 3개월 동안 받은 임금 총액 ÷ 그 기간의 총일수</li>
      <li><strong>퇴직금</strong> 1일 평균임금 × 30일 × (재직일수 ÷ 365)</li>
      <li><strong>지급 조건</strong> 계속근로기간 1년 이상, 주 15시간 이상 근무</li>
    </ul>
    <p class="ret-hint">상여금은 연 합계의 3/12, 연차수당도 따로 가산하는 것이 일반적입니다. 회사 취업규칙에 따라 달라질 수 있으니 인사팀에 확인하세요.</p>
  </section>

  <section class="ret-card-sec">
    <h2>퇴직소득세는 이렇게 계산해요</h2>
    <p>퇴직소득세는 퇴직소득에서 근속연수공제를 빼 환산급여를 만들고, 환산급여공제를 뺀 과세표준에 기본세율을 적용한 뒤 근속연수를 곱하는 순서로 구합니다. 지방소득세는 소득세의 10%입니다.</p>
    <div class="ret-two">
      <div class="ret-table-wrap">
        <table class="ret-table"><caption class="ret-caption">근속연수공제</caption>
          <thead><tr><th>근속연수</th><th>공제액</th></tr></thead>
          <tbody>
            <tr><td>5년 이하</td><td>100만원 × 근속연수</td></tr>
            <tr><td>6~10년</td><td>500만원 + 200만원 × (연수-5)</td></tr>
            <tr><td>11~20년</td><td>1,500만원 + 250만원 × (연수-10)</td></tr>
            <tr><td>20년 초과</td><td>4,000만원 + 300만원 × (연수-20)</td></tr>
          </tbody></table>
      </div>
      <div class="ret-table-wrap">
        <table class="ret-table"><caption class="ret-caption">환산급여공제</caption>
          <thead><tr><th>환산급여</th><th>공제액</th></tr></thead>
          <tbody>
            <tr><td>800만원 이하</td><td>전액</td></tr>
            <tr><td>800만~7,000만원</td><td>800만원 + 초과분의 60%</td></tr>
            <tr><td>7,000만~1억원</td><td>4,520만원 + 초과분의 55%</td></tr>
            <tr><td>1억~3억원</td><td>6,170만원 + 초과분의 45%</td></tr>
            <tr><td>3억원 초과</td><td>1억 5,170만원 + 초과분의 35%</td></tr>
          </tbody></table>
      </div>
    </div>
  </section>

  <section class="ret-card-sec">
    <h2>함께 쓰면 좋은 계산기</h2>
    <div class="ret-grid">
      <a class="ret-gcard" href="/salary/unemployment/"><span class="ret-gcard-title">실업급여 계산기</span><span class="ret-gcard-desc">1일 수급액과 총 수급기간 계산</span></a>
      <a class="ret-gcard" href="/salary/pension-savings/"><span class="ret-gcard-title">연금저축 세액공제</span><span class="ret-gcard-desc">납입액별 연말정산 환급액</span></a>
      <a class="ret-gcard" href="/salary/net-pay/"><span class="ret-gcard-title">연봉 실수령 계산기</span><span class="ret-gcard-desc">연봉별 월 실수령과 역계산</span></a>
    </div>
  </section>

  <section class="ret-guide-box">
    <div class="ret-guide-body">
      <h3>퇴직금, IRP로 받으면 세금이 달라져요</h3>
      <p>퇴직소득세 이연과 연금 수령 시 감면을 연금저축·IRP 세액공제와 함께 정리했습니다.</p>
    </div>
    <a class="ret-guide-btn" href="/guide/pension-irp-tax-credit-2026/">연금저축·IRP 가이드 보기 →</a>
  </section>

  <!-- 광고 2 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <section class="ret-card-sec" id="ret-faq">
    <h2>자주 묻는 질문</h2>
    <details class="ret-faq-item"><summary>퇴직금은 어떻게 계산하나요?</summary><p>퇴직 전 3개월 임금 총액을 그 기간의 총일수로 나눈 1일 평균임금에 30일을 곱하고, 재직일수를 365로 나눈 값을 곱합니다.</p></details>
    <details class="ret-faq-item"><summary>1년 미만 근무하면 퇴직금이 없나요?</summary><p>네, 계속근로기간이 1년 미만이면 법정 퇴직금이 발생하지 않습니다. 이 계산기도 1년 이상일 때만 계산합니다.</p></details>
    <details class="ret-faq-item"><summary>퇴직소득세는 얼마나 나오나요?</summary><p>근속연수공제와 환산급여공제를 적용한 뒤 기본세율과 근속연수로 계산하기 때문에 실효세율은 대체로 낮습니다. 위 예시표에서 월급·근속연수별 대략적인 금액을 확인하세요.</p></details>
    <details class="ret-faq-item"><summary>퇴직금을 IRP로 받으면 어떤 점이 좋은가요?</summary><p>IRP로 받으면 퇴직소득세 납부가 연금 수령 시점까지 미뤄지고, 연금으로 나눠 받으면 퇴직소득세의 30~40%가 감면됩니다.</p></details>
    <details class="ret-faq-item"><summary>계산 결과와 실제 퇴직금이 다른 이유는 무엇인가요?</summary><p>상여금·연차수당 포함 여부, 3개월 총일수, 회사 취업규칙에 따라 달라질 수 있고 세액은 근사 계산입니다. 정확한 금액은 회사 인사팀이나 고용노동부 상담으로 확인하세요.</p></details>
  </section>

  <nav class="ret-related"><a href="/salary/">← 허브로</a><a href="/salary/unemployment/">실업급여 계산기</a><a href="/salary/net-pay/">연봉 실수령</a><a href="/salary/pension-savings/">연금저축 세액공제</a></nav>
</section>

<style>
.ret-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.ret-breadcrumb{font-size:.85rem;color:#8c7355;margin-bottom:14px}
.ret-breadcrumb a{color:#8c7355;text-decoration:none}
.ret-breadcrumb a:hover{text-decoration:underline}
.ret-intro{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:22px 24px;margin-bottom:18px}
.ret-intro h2{margin:0 0 8px;color:#785a43;font-size:1.25rem}
.ret-intro p{margin:0 0 12px;color:#5c4a38}
.ret-intro-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;border-radius:999px;padding:9px 18px;font-size:.9rem;font-weight:700}
.ret-intro-btn:hover{background:#174d68}
.ret-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.ret-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px}
.ret-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit}
.ret-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.ret-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:16px}
.ret-chips-label{font-size:.8rem;color:#5b6470;font-weight:600}
.ret-chip{background:#cfdfe8;color:#13293d;border:1px solid #1f5c7a;border-radius:999px;padding:6px 14px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit}
.ret-chip:hover{background:#1f5c7a;color:#fff}
.ret-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.ret-field{display:flex;flex-direction:column;gap:5px}
.ret-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.ret-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.ret-hint{font-size:.76rem;color:#9ca3af}
.ret-field input{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.ret-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.ret-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ret-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.ret-divider{font-size:.8rem;font-weight:700;color:#8c7355;border-top:1px solid #f1eae1;padding-top:12px}
.ret-days-display{background:#f6efe5;border-radius:8px;padding:8px 12px;font-size:.85rem;color:#3f2d20;font-weight:600}
.ret-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%}
.ret-btn:hover{background:#e96f00}
.ret-result{animation:retFade .3s ease}
@keyframes retFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.ret-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px;margin-bottom:14px}
.ret-hero-row{display:flex;align-items:center;justify-content:space-around;gap:16px;flex-wrap:wrap}
.ret-hero-label{font-size:.82rem;color:#8c7355;font-weight:600;margin-bottom:4px;text-align:center}
.ret-hero-num{font-size:1.7rem;font-weight:800;color:#3f2d20;text-align:center}
.ret-hero-net{color:#c2410c}
.ret-hero-arrow{font-size:1.5rem;color:#e3d4c5}
.ret-detail-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.ret-dcard{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.ret-dcard-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.ret-dcard-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.ret-minus{color:#c2410c}
.ret-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#5b6470;line-height:1.6;margin-bottom:14px}
.ret-tip strong{color:#3f2d20}
.ret-share{display:block;width:100%;margin-bottom:14px;background:#fff;color:#1f5c7a;border:2px solid #1f5c7a;border-radius:10px;padding:11px 20px;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.ret-share:hover{background:#1f5c7a;color:#fff}
.ret-next{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;background:#faf7f2;border:1px solid #eaddcd;border-radius:14px;padding:16px 18px}
.ret-next-title{font-size:.9rem;font-weight:700;color:#785a43}
.ret-next-link{display:flex;flex-direction:column;gap:2px;text-decoration:none;background:#fff;border:1px solid #e3d4c5;border-radius:10px;padding:10px 14px}
.ret-next-link strong{color:#c2410c;font-size:.92rem}
.ret-next-link span{color:#5b6470;font-size:.8rem}
.ret-next-link:hover{border-color:#c2410c;background:#fffaf5}
.ret-compare-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.ret-ccard{border-radius:14px;padding:18px 16px}
.ret-db{background:#fdf4ec;border:1px solid #f5dfd0}
.ret-dc{background:#f0f7f4;border:1px solid #c8e6da}
.ret-ccard-title{font-size:1rem;font-weight:800;color:#3f2d20;margin-bottom:12px}
.ret-ccard ul{padding-left:18px;font-size:.85rem;color:#374151}
.ret-ccard li{margin-bottom:7px}
.ret-card-sec{background:#fff;border:1px solid #f1eae1;border-radius:16px;padding:22px;margin-top:24px}
.ret-card-sec h2{margin:0 0 10px;font-size:1.1rem;color:#785a43;border-left:4px solid #c2410c;padding-left:10px}
.ret-card-sec p{margin:0 0 10px;color:#374151}
.ret-list{margin:0 0 10px;padding-left:20px;color:#374151;line-height:1.8}
.ret-table-wrap{overflow-x:auto;border-radius:12px;border:1px solid #f1eae1;margin-bottom:14px}
.ret-table{width:100%;border-collapse:collapse;font-size:.86rem;min-width:360px}
.ret-table th{background:#f6efe5;padding:9px 12px;font-weight:700;color:#4a3728;text-align:right}
.ret-table th:first-child{text-align:left}
.ret-table td{padding:8px 12px;text-align:right;border-top:1px solid #f5f0eb;color:#374151}
.ret-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}
.ret-table .ret-hl-row td{background:#fdf4ec;color:#c2410c;font-weight:700}
.ret-caption{caption-side:top;text-align:left;font-size:.8rem;color:#8c7355;padding:8px 12px 0}
.ret-two{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ret-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.ret-gcard{display:flex;flex-direction:column;gap:4px;background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;text-decoration:none}
.ret-gcard-title{color:#c2410c;font-weight:700;font-size:.92rem}
.ret-gcard-desc{font-size:.82rem;color:#785a43;line-height:1.5}
.ret-gcard:hover .ret-gcard-title{text-decoration:underline}
.ret-guide-box{display:flex;align-items:center;gap:16px;flex-wrap:wrap;background:#cfdfe8;border:1px solid #1f5c7a;border-radius:16px;padding:18px 22px;margin-top:24px}
.ret-guide-body{flex:1;min-width:200px}
.ret-guide-body h3{margin:0 0 4px;color:#13293d;font-size:1.05rem}
.ret-guide-body p{margin:0;color:#13293d;line-height:1.6;font-size:.92rem}
.ret-guide-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:999px;white-space:nowrap}
.ret-guide-btn:hover{background:#174d68}
.ret-faq-item{border:1px solid #f1eae1;border-radius:12px;padding:4px 16px;margin-bottom:10px;background:#fff}
.ret-faq-item[open]{background:#fffaf5;border-color:#f0c8a0}
.ret-faq-item summary{cursor:pointer;font-weight:700;color:#785a43;padding:12px 0;line-height:1.5}
.ret-faq-item summary:hover{color:#c2410c}
.ret-faq-item p{margin:0 0 14px;line-height:1.7;color:#5c4a38}
.ret-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:32px}
.ret-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ret-related a:hover{background:#f3e7d9}
@media(max-width:600px){.ret-row2,.ret-row3{grid-template-columns:1fr}.ret-detail-grid{grid-template-columns:1fr 1fr}.ret-compare-cards,.ret-two,.ret-grid{grid-template-columns:1fr}.ret-hero-num{font-size:1.4rem}.ret-guide-box{flex-direction:column;align-items:flex-start}.ret-guide-btn{width:100%;text-align:center;white-space:normal}}
</style>

<script>
function fmtR(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gR(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fmtW(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function retTab(t){['calc','info'].forEach(x=>{document.getElementById('ret-'+x).style.display=x===t?'':'none';});document.querySelectorAll('.ret-tab').forEach((b,i)=>b.classList.toggle('active',['calc','info'][i]===t));}
function autoCalcDays(){
  const j=document.getElementById('ret-join').value,l=document.getElementById('ret-leave').value;
  if(!j||!l)return;
  const days=Math.round((new Date(l)-new Date(j))/(86400000));
  if(days<0)return;
  document.getElementById('ret-days-display').style.display='';
  document.getElementById('ret-days-text').textContent='재직기간: '+days.toLocaleString()+'일 (약 '+(days/365).toFixed(2)+'년)';
  document.getElementById('ret-years').value=(days/365).toFixed(2);
}
function calcRetTax(gross,yrs){
  const y=Math.max(1,Math.floor(yrs));
  let td=y<=5?y*1000000:y<=10?5000000+(y-5)*2000000:y<=20?15000000+(y-10)*2500000:40000000+(y-20)*3000000;
  const ri=Math.max(0,gross-td);
  const ann=ri/y*12;
  // [수정] 환산급여공제 구간: 7천만~1억 55%, 1억~3억 45%, 3억 초과 35% (기존 코드는 구간 경계·상수가 달랐음)
  let ad=ann<=8000000?ann:ann<=70000000?8000000+(ann-8000000)*.6:ann<=100000000?45200000+(ann-70000000)*.55:ann<=300000000?61700000+(ann-100000000)*.45:151700000+(ann-300000000)*.35;
  const tb=Math.max(0,ann-ad);
  let t=tb<=14000000?tb*.06:tb<=50000000?840000+(tb-14000000)*.15:tb<=88000000?6240000+(tb-50000000)*.24:tb<=150000000?15360000+(tb-88000000)*.35:tb<=300000000?37060000+(tb-150000000)*.38:tb<=500000000?94060000+(tb-300000000)*.40:174060000+(tb-500000000)*.42;
  return Math.max(0,Math.round(t/12*y));
}
function calcRet(){
  const m1=gR('ret-m1'),m2=gR('ret-m2'),m3=gR('ret-m3'),bonus=gR('ret-bonus');
  const yrs=parseFloat(document.getElementById('ret-years').value)||0;
  if(!m1&&!m2&&!m3){alert('월 급여를 입력해 주세요.');return;}
  if(yrs<1){alert('퇴직금은 1년 이상 근무 시 발생합니다.');return;}
  const daily=(m1+m2+m3+bonus)/92;
  const gross=Math.round(daily*30*(yrs*365/365));
  const tax=calcRetTax(gross,yrs);
  const local=Math.round(tax*.1);
  document.getElementById('ret-result').style.display='';
  document.getElementById('ret-gross').textContent=fmtW(gross);
  document.getElementById('ret-net').textContent=fmtW(Math.max(0,gross-tax-local));
  document.getElementById('rd-period').textContent=Math.round(yrs*365).toLocaleString()+'일 ('+yrs+'년)';
  document.getElementById('rd-daily').textContent=fmtW(Math.round(daily));
  document.getElementById('rd-tax').textContent=fmtW(tax);
  document.getElementById('rd-local').textContent=fmtW(local);
}
/* [신규] 월급 칩: 3개월 월급 칸을 한 번에 채움 */
function setRetMonthly(v){['ret-m1','ret-m2','ret-m3'].forEach(id=>{const el=document.getElementById(id);el.value=v.toLocaleString('ko-KR');el.dataset.raw=String(v);});}
/* [신규] 결과 복사 */
function copyRet(){
  const txt='퇴직금(세전) '+document.getElementById('ret-gross').textContent+' → 세후 '+document.getElementById('ret-net').textContent+'\n퇴직금 계산기: https://calculator.khaistory.com/salary/retirement/';
  const btn=document.getElementById('ret-copy-btn');
  const done=()=>{btn.textContent='복사했어요! 원하는 곳에 붙여넣기';setTimeout(()=>{btn.textContent='결과 복사해서 공유하기';},2500);};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(()=>{});}
  else{const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
{"@type":"ListItem","position":2,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
{"@type":"ListItem","position":3,"name":"퇴직금 계산기","item":"https://calculator.khaistory.com/salary/retirement/"}]}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"퇴직금은 어떻게 계산하나요?","acceptedAnswer":{"@type":"Answer","text":"퇴직 전 3개월 임금 총액을 그 기간의 총일수로 나눈 1일 평균임금에 30일을 곱하고, 재직일수를 365로 나눈 값을 곱합니다."}},
{"@type":"Question","name":"1년 미만 근무하면 퇴직금이 없나요?","acceptedAnswer":{"@type":"Answer","text":"네, 계속근로기간이 1년 미만이면 법정 퇴직금이 발생하지 않습니다. 이 계산기도 1년 이상일 때만 계산합니다."}},
{"@type":"Question","name":"퇴직소득세는 얼마나 나오나요?","acceptedAnswer":{"@type":"Answer","text":"근속연수공제와 환산급여공제를 적용한 뒤 기본세율과 근속연수로 계산하기 때문에 실효세율은 대체로 낮습니다. 위 예시표에서 월급·근속연수별 대략적인 금액을 확인하세요."}},
{"@type":"Question","name":"퇴직금을 IRP로 받으면 어떤 점이 좋은가요?","acceptedAnswer":{"@type":"Answer","text":"IRP로 받으면 퇴직소득세 납부가 연금 수령 시점까지 미뤄지고, 연금으로 나눠 받으면 퇴직소득세의 30~40%가 감면됩니다."}},
{"@type":"Question","name":"계산 결과와 실제 퇴직금이 다른 이유는 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"상여금·연차수당 포함 여부, 3개월 총일수, 회사 취업규칙에 따라 달라질 수 있고 세액은 근사 계산입니다. 정확한 금액은 회사 인사팀이나 고용노동부 상담으로 확인하세요."}}]}
</script>
