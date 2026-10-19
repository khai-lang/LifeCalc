---
layout: "default"
title: "연봉인상 시뮬레이터 2026 — 세후 실수령 증가액 계산"
description: "연봉이 오르면 실수령은 얼마나 늘어날까? 현재 연봉과 인상 후 연봉을 입력하면 세후 증가액, 월별 차이, 누진세로 사라지는 금액까지 한번에 계산합니다."
permalink: "/salary/raise/"
canonical: "https://calculator.khaistory.com/salary/raise/"
date: "2026-10-16"
og_title: "연봉인상 시뮬레이터 2026 — 세후 실수령 증가액"
og_description: "연봉 300만원 오르면 실제로 얼마 더 받나? 세후 증가액과 누진세 손실까지 계산."
---

<!-- =====================================================================
     연봉인상 시뮬레이터 2026 (업그레이드판)
     - 광고 스크립트 1회 로드, 슬롯(ins) 2곳
     - CSS 접두사: rs-
     ===================================================================== -->

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>

<section class="rs-wrap">

  <nav class="rs-breadcrumb" aria-label="브레드크럼">
    <a href="/">홈</a> <span aria-hidden="true">›</span>
    <a href="/salary/">급여·소득</a> <span aria-hidden="true">›</span>
    <span aria-current="page">연봉인상 시뮬레이터</span>
  </nav>

  <div class="rs-intro">
    <h2>연봉 올라도 통장엔 얼마나 찍힐까?</h2>
    <p>
      연봉이 올라도 인상분이 전부 실수령으로 늘지는 않습니다. 4대보험과 누진 소득세가 함께 늘기 때문이에요.
      현재 연봉과 인상 후 연봉(또는 인상률)을 넣으면 <strong>월 실수령 증가액, 연간·누적 증가액, 인상분 중 세금·보험으로 빠지는 금액</strong>을 보여 드립니다.
    </p>
    <a class="rs-intro-btn" href="/salary/net-pay/#reverse">목표 실수령으로 필요한 연봉 구하기 →</a>
  </div>

  <div class="rs-notice">
    연봉 인상 후 <strong>실제 통장에 더 찍히는 금액</strong>을 계산합니다.
    누진세 구조상 인상분의 일부는 세금으로 빠져나갑니다. 2026년 4대보험 요율 기준입니다.
  </div>

  <!-- ① 입력 -->
  <div class="rs-form">
    <div class="rs-row2">
      <div class="rs-field">
        <label for="rs-before">현재 연봉 (세전, 원)</label>
        <input type="text" id="rs-before" inputmode="numeric"
               placeholder="예: 50,000,000" oninput="fmtRs(this)" onblur="calcRaise()">
      </div>
      <div class="rs-field">
        <label for="rs-after">인상 후 연봉 (세전, 원)</label>
        <input type="text" id="rs-after" inputmode="numeric"
               placeholder="예: 53,000,000" oninput="fmtRs(this)" onblur="calcRaise()">
        <div class="rs-hint">또는 아래 인상률로 자동 입력</div>
      </div>
    </div>

    <!-- 인상률 퀵 버튼 -->
    <div class="rs-field">
      <label>인상률로 빠르게 입력</label>
      <div class="rs-rate-btns">
        <button class="rs-rate-btn" onclick="applyRate(3)">+3%</button>
        <button class="rs-rate-btn" onclick="applyRate(5)">+5%</button>
        <button class="rs-rate-btn" onclick="applyRate(8)">+8%</button>
        <button class="rs-rate-btn" onclick="applyRate(10)">+10%</button>
        <button class="rs-rate-btn" onclick="applyRate(15)">+15%</button>
        <button class="rs-rate-btn" onclick="applyRate(20)">+20%</button>
        <div class="rs-custom-rate">
          <input type="number" id="rs-custom-rate" placeholder="직접 입력 %" min="0" max="200" step="0.1">
          <button onclick="applyRate(parseFloat(document.getElementById('rs-custom-rate').value)||0)">적용</button>
        </div>
      </div>
    </div>

    <div class="rs-row2">
      <div class="rs-field">
        <label for="rs-depend">부양가족 수 (본인 포함)</label>
        <select id="rs-depend" onchange="calcRaise()">
          <option value="1">1명 (본인만)</option>
          <option value="2">2명</option>
          <option value="3">3명</option>
          <option value="4">4명</option>
          <option value="5">5명 이상</option>
        </select>
      </div>
      <div class="rs-field">
        <label for="rs-nontax">비과세 수당 (월, 원)</label>
        <input type="text" id="rs-nontax" inputmode="numeric"
               placeholder="0" oninput="fmtRs(this)" onblur="calcRaise()">
        <div class="rs-hint">식대 20만원은 기본 포함</div>
      </div>
    </div>

    <div id="rs-error" class="rs-error" style="display:none">인상 후 연봉은 현재 연봉보다 커야 계산할 수 있어요.</div>

    <button class="rs-btn" onclick="calcRaise()">인상 효과 계산하기</button>
  </div>

  <!-- ② 결과 -->
  <div id="rs-result" style="display:none" class="rs-result">

    <!-- 히어로: 인상 전 vs 후 -->
    <div class="rs-hero">
      <div class="rs-hero-col">
        <div class="rs-hero-label">현재 월 실수령</div>
        <div class="rs-hero-num rs-before-color" id="rh-before">—</div>
      </div>
      <div class="rs-hero-arrow">
        <div class="rs-arrow-line"></div>
        <div class="rs-arrow-diff" id="rh-diff-badge">+—</div>
      </div>
      <div class="rs-hero-col">
        <div class="rs-hero-label">인상 후 월 실수령</div>
        <div class="rs-hero-num rs-after-color" id="rh-after">—</div>
      </div>
    </div>

    <!-- 핵심 수치 카드 -->
    <div class="rs-cards">
      <div class="rs-card rs-card-main">
        <div class="rs-card-icon">↑</div>
        <div class="rs-card-label">월 실수령 증가액</div>
        <div class="rs-card-val" id="rc-monthly-diff">—</div>
        <div class="rs-card-sub" id="rc-annual-diff">연 —</div>
      </div>
      <div class="rs-card">
        <div class="rs-card-icon">%</div>
        <div class="rs-card-label">세전 인상률</div>
        <div class="rs-card-val" id="rc-raise-pct">—</div>
        <div class="rs-card-sub" id="rc-raise-amt">인상액 —</div>
      </div>
      <div class="rs-card rs-card-warn">
        <div class="rs-card-icon">↗</div>
        <div class="rs-card-label">세금·보험 추가 공제</div>
        <div class="rs-card-val" id="rc-extra-tax">—</div>
        <div class="rs-card-sub" id="rc-tax-ratio">인상분의 —% 손실</div>
      </div>
      <div class="rs-card">
        <div class="rs-card-icon">✓</div>
        <div class="rs-card-label">실수령 인상 효율</div>
        <div class="rs-card-val" id="rc-efficiency">—</div>
        <div class="rs-card-sub">세전 인상분 대비</div>
      </div>
    </div>

    <!-- 상세 비교 테이블 -->
    <div class="rs-table-wrap">
      <table class="rs-table">
        <thead>
          <tr>
            <th>항목</th>
            <th>현재</th>
            <th>인상 후</th>
            <th>변화</th>
          </tr>
        </thead>
        <tbody id="rs-tbody"></tbody>
      </table>
    </div>

    <!-- 누적 효과 -->
    <div class="rs-cumul">
      <div class="rs-cumul-title">인상 후 누적 실수령 추가액</div>
      <div class="rs-cumul-grid" id="rs-cumul-grid"></div>
    </div>

    <!-- 연봉 백분위 블록 -->
    <div class="rs-pct-wrap" id="rs-pct-wrap">
      <div class="rs-pct-title">전국 근로자 연봉 백분위 — 인상 전후 비교</div>
      <div class="rs-pct-row">
        <div class="rs-pct-item rs-pct-before">
          <div class="rs-pct-label">현재 연봉</div>
          <div class="rs-pct-salary" id="pct-before-sal">—</div>
          <div class="rs-pct-rank" id="pct-before-rank">상위 —%</div>
          <div class="rs-pct-bar-wrap"><div class="rs-pct-bar" id="pct-before-bar"></div></div>
        </div>
        <div class="rs-pct-arrow">→</div>
        <div class="rs-pct-item rs-pct-after">
          <div class="rs-pct-label">인상 후 연봉</div>
          <div class="rs-pct-salary" id="pct-after-sal">—</div>
          <div class="rs-pct-rank" id="pct-after-rank">상위 —%</div>
          <div class="rs-pct-bar-wrap"><div class="rs-pct-bar" id="pct-after-bar"></div></div>
        </div>
      </div>
      <div class="rs-pct-note">국세청 2023년 귀속 근로소득 백분위 기준 · 매년 업데이트</div>
    </div>

    <!-- 인상 팁 -->
    <div class="rs-tip" id="rs-tip"></div>

    <!-- 결과 공유 -->
    <button type="button" class="rs-share" id="rs-copy-btn" onclick="copyRaise()">결과 복사해서 공유하기</button>

    <!-- 다음 행동 유도 -->
    <div class="rs-next">
      <div class="rs-next-title">이 결과, 이렇게 이어서 활용해 보세요</div>
      <a class="rs-next-link" href="/salary/net-pay/#reverse"><strong>실수령 역계산</strong><span>원하는 월 실수령액에 필요한 연봉을 거꾸로 계산</span></a>
      <a class="rs-next-link" href="/salary/pension-savings/"><strong>연금저축 세액공제 계산기</strong><span>늘어난 소득의 세금을 연말정산으로 줄이기</span></a>
      <a class="rs-next-link" href="/salary/retirement/"><strong>퇴직금 계산기</strong><span>연봉이 오르면 예상 퇴직금은 얼마나 달라질까</span></a>
    </div>

    <!-- 관련 계산기 -->
    <div class="rs-related-box">
      <div class="rs-related-title">함께 확인해 보세요</div>
      <div class="rs-related-links">
        <a href="/salary/net-pay/">연봉 실수령 계산기 (역계산 포함)</a>
        <a href="/salary/retirement/">퇴직금 계산기</a>
        <a href="/salary/pension-savings/">연금저축 세액공제 계산기</a>
      </div>
    </div>
  </div>

  <!-- 광고 1 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <!-- 정적 시나리오 표 -->
  <section class="rs-card-sec" id="rs-scenarios">
    <h2>연봉 인상 시 월 실수령은 얼마나 늘까? (예시)</h2>
    <p>
      부양가족 본인 1명, 비과세 식대 20만원 기준으로 이 계산기와 같은 방식으로 계산한 값입니다.
      내 연봉으로 보려면 위에 직접 입력하세요.
    </p>
    <div class="rs-table-wrap">
      <table class="rs-table rs-st-table">
        <caption class="rs-caption">2026 연봉 인상별 월 실수령 증가액 (부양가족 1명 · 식대 비과세 20만원)</caption>
        <thead>
          <tr><th>인상</th><th>현재 → 인상 후</th><th>월 실수령 증가</th><th>인상 효율</th></tr>
        </thead>
        <tbody>
          <tr><td>+300만원</td><td>3,000만 → 3,300만</td><td>+201,161원</td><td>80.5%</td></tr>
          <tr><td>+300만원</td><td>4,000만 → 4,300만</td><td>+190,644원</td><td>76.3%</td></tr>
          <tr class="rs-hl-row"><td>+300만원</td><td>5,000만 → 5,300만</td><td>+186,520원</td><td>74.6%</td></tr>
          <tr><td>+300만원</td><td>6,000만 → 6,300만</td><td>+186,519원</td><td>74.6%</td></tr>
          <tr><td>+300만원</td><td>8,000만 → 8,300만</td><td>+174,882원</td><td>70.0%</td></tr>
          <tr><td>+10%</td><td>4,000만 → 4,400만</td><td>+254,191원</td><td>76.3%</td></tr>
          <tr class="rs-hl-row"><td>+10%</td><td>5,000만 → 5,500만</td><td>+310,866원</td><td>74.6%</td></tr>
          <tr><td>+10%</td><td>6,000만 → 6,600만</td><td>+373,038원</td><td>74.6%</td></tr>
          <tr><td>+10%</td><td>8,000만 → 8,800만</td><td>+466,351원</td><td>70.0%</td></tr>
        </tbody>
      </table>
    </div>
    <p class="rs-hint">"인상 효율"은 세전 월 인상분 중 실제 실수령으로 늘어나는 비율입니다. 소득세는 간이세액표가 아닌 근사 계산이라 급여명세서와 다를 수 있습니다.</p>
  </section>

  <!-- 설명 -->
  <section class="rs-card-sec">
    <h2>연봉이 올라도 인상분이 다 안 오르는 이유</h2>
    <ul class="rs-list">
      <li><strong>4대보험은 소득에 비례</strong> 국민연금·건강보험·고용보험이 월급 기준으로 함께 늘어납니다(국민연금은 상한 월 659만원까지).</li>
      <li><strong>소득세는 누진</strong> 과세표준이 구간을 넘으면 넘은 부분에만 더 높은 세율이 적용됩니다. 인상분이 클수록 효율이 조금씩 낮아집니다.</li>
      <li><strong>지방소득세는 소득세의 10%</strong> 소득세가 늘면 같은 비율로 따라 늘어납니다.</li>
    </ul>
    <p class="rs-hint">항목별 요율은 <a class="rs-inline" href="/guide/four-insurance-rates-2026/">2026년 4대보험 요율표</a>에서 확인할 수 있어요.</p>
  </section>

  <section class="rs-card-sec">
    <h2>실수령 증가를 더 키우는 방법</h2>
    <ul class="rs-list">
      <li><strong>비과세 수당 비중 늘리기</strong> 식대(월 20만원 한도) 같은 비과세 항목은 세금과 보험료 계산에서 빠집니다. 위 입력칸의 "비과세 수당"으로 차이를 바로 확인해 보세요.</li>
      <li><strong>연금저축·IRP 세액공제</strong> 연봉이 오른 만큼 연말정산 때 공제 효과도 커집니다. <a class="rs-inline" href="/guide/pension-irp-tax-credit-2026/">세액공제 가이드</a>와 <a class="rs-inline" href="/salary/pension-savings/">계산기</a>를 함께 보세요.</li>
      <li><strong>협상은 실수령 기준으로</strong> <a class="rs-inline" href="/guide/salary-negotiation-2026/">연봉 협상 가이드</a>에서 세전이 아닌 실수령으로 따져 보는 법을 정리했습니다.</li>
    </ul>
  </section>

  <!-- 다른 계산기 -->
  <section class="rs-card-sec">
    <h2>함께 쓰면 좋은 계산기</h2>
    <div class="rs-grid">
      <a class="rs-gcard" href="/salary/net-pay/">
        <span class="rs-gcard-title">연봉 실수령 계산기</span>
        <span class="rs-gcard-desc">연봉별 월 실수령, 역계산, 구간표</span>
      </a>
      <a class="rs-gcard" href="/salary/insurances/">
        <span class="rs-gcard-title">4대보험 계산기</span>
        <span class="rs-gcard-desc">항목별 보험료 자세히 보기</span>
      </a>
      <a class="rs-gcard" href="/salary/retirement/">
        <span class="rs-gcard-title">퇴직금 계산기</span>
        <span class="rs-gcard-desc">근속기간·평균임금 기준 예상 퇴직금</span>
      </a>
    </div>
  </section>

  <!-- 연계 가이드 -->
  <section class="rs-guide-box">
    <div class="rs-guide-body">
      <h3>연봉별 실수령액, 한 번에 비교해 보세요</h3>
      <p>3000만원부터 1억원까지 구간별 실수령액과, 연봉이 오를수록 실수령 증가폭이 줄어드는 이유를 정리했습니다.</p>
    </div>
    <a class="rs-guide-btn" href="/guide/salary-net-pay-2026/">연봉별 실수령액 가이드 보기 →</a>
  </section>

  <!-- 광고 2 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <!-- FAQ -->
  <section class="rs-card-sec" id="rs-faq">
    <h2>자주 묻는 질문</h2>
    <details class="rs-faq-item">
      <summary>연봉이 오르면 실수령은 얼마나 늘어나나요?</summary>
      <p>세전 인상분 중 4대보험과 소득세·지방소득세를 뺀 금액만 늘어납니다. 위 예시 기준으로 인상분의 약 70~80%가 실수령으로 반영되며, 연봉이 높을수록 비율이 낮아집니다.</p>
    </details>
    <details class="rs-faq-item">
      <summary>연봉이 300만원 오르면 월 실수령은 얼마나 늘어나나요?</summary>
      <p>부양가족 1명, 식대 비과세 20만원 기준으로 연봉 3,000만~8,000만원 구간에서 월 약 17.5만~20만원이 늘어납니다. 현재 연봉과 가족 수에 따라 달라지니 계산기에 직접 입력해 확인하세요.</p>
    </details>
    <details class="rs-faq-item">
      <summary>인상분이 전부 실수령으로 늘지 않는 이유는 무엇인가요?</summary>
      <p>월급이 오르면 국민연금·건강보험·고용보험도 함께 늘고, 소득세는 누진세율이라 인상분에 더 높은 세율이 적용될 수 있기 때문입니다.</p>
    </details>
    <details class="rs-faq-item">
      <summary>실수령을 더 늘리려면 어떻게 해야 하나요?</summary>
      <p>식대처럼 비과세로 받는 수당 비중을 늘리거나, 연금저축·IRP 납입으로 연말정산 세액공제를 받으면 같은 연봉에서도 실질 소득을 높일 수 있습니다.</p>
    </details>
    <details class="rs-faq-item">
      <summary>급여명세서와 금액이 다른 이유는 무엇인가요?</summary>
      <p>소득세를 근로소득공제와 누진세율로 계산한 근사값이라 회사가 쓰는 간이세액표와 차이가 날 수 있습니다. 회사별 수당과 비과세 항목도 달라서 이 계산기는 참고용으로 활용하세요.</p>
    </details>
  </section>

  <nav class="rs-related-nav">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기</a>
    <a href="/salary/insurances/">4대보험 계산기</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
    <a href="/salary/pension-savings/">연금저축 세액공제</a>
  </nav>

</section>

<style>
.rs-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.rs-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}

/* 브레드크럼 · 소개 */
.rs-breadcrumb{font-size:.85rem;color:#8c7355;margin-bottom:14px}
.rs-breadcrumb a{color:#8c7355;text-decoration:none}
.rs-breadcrumb a:hover{text-decoration:underline}
.rs-intro{background:linear-gradient(135deg,#f8efe5 0%,#f3e7d9 100%);border:1px solid #e3d4c5;border-radius:16px;padding:22px 24px;margin-bottom:18px}
.rs-intro h2{margin:0 0 8px;color:#785a43;font-size:1.25rem}
.rs-intro p{margin:0 0 12px;line-height:1.7;color:#5c4a38}
.rs-intro-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;border-radius:999px;padding:9px 18px;font-size:.9rem;font-weight:700}
.rs-intro-btn:hover{background:#174d68}

/* 폼 */
.rs-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.rs-field{display:flex;flex-direction:column;gap:5px}
.rs-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.rs-hint{font-size:.76rem;color:#9ca3af}
.rs-field input[type="text"],
.rs-field input[type="number"],
.rs-field select{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.rs-field input:focus,.rs-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.rs-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.rs-error{background:#fdf4ec;border:1px solid #f0c8a0;border-radius:8px;padding:8px 12px;font-size:.83rem;color:#c2410c;font-weight:600}

/* 인상률 퀵 버튼 */
.rs-rate-btns{display:flex;flex-wrap:wrap;gap:7px;align-items:center}
.rs-rate-btn{background:#f6efe5;border:1px solid #eaddcd;border-radius:8px;padding:7px 14px;font-size:.85rem;font-weight:700;color:#8c7355;cursor:pointer;font-family:inherit;transition:all .15s}
.rs-rate-btn:hover{background:#f3e7d9;color:#c2410c;border-color:#c2410c}
.rs-custom-rate{display:flex;gap:6px;margin-left:4px}
.rs-custom-rate input{border:1px solid #ddd4c8;border-radius:8px;padding:7px 10px;font-size:.85rem;font-family:inherit;width:90px;box-sizing:border-box}
.rs-custom-rate button{background:#785a43;color:#fff;border:none;border-radius:8px;padding:7px 12px;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap}
.rs-custom-rate button:hover{background:#3a2c1d}

/* 계산 버튼 */
.rs-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s,transform .1s;width:100%}
.rs-btn:hover{background:#e96f00;transform:translateY(-1px)}

/* 결과 */
.rs-result{animation:rsFade .3s ease}
@keyframes rsFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

/* 히어로 */
.rs-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:24px 20px;display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}
.rs-hero-col{text-align:center;flex:1}
.rs-hero-label{font-size:.78rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.rs-hero-num{font-size:1.6rem;font-weight:800;letter-spacing:-.02em}
.rs-before-color{color:#8c7355}
.rs-after-color{color:#c2410c}
.rs-hero-arrow{text-align:center;flex-shrink:0}
.rs-arrow-line{width:40px;height:2px;background:linear-gradient(to right,#eaddcd,#c2410c);border-radius:2px;margin:0 auto 6px}
.rs-arrow-diff{font-size:.88rem;font-weight:800;color:#c2410c;white-space:nowrap}

/* 카드 */
.rs-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.rs-card{background:#fff;border:1px solid #f1eae1;border-radius:12px;padding:12px;text-align:center}
.rs-card-main{background:#fdf4ec;border-color:#f5dfd0}
.rs-card-warn{background:#faf7f2;border-color:#eaddcd}
.rs-card-icon{font-size:.9rem;color:#9ca3af;margin-bottom:2px}
.rs-card-label{font-size:.7rem;color:#9ca3af;margin-bottom:4px;line-height:1.3}
.rs-card-val{font-size:1rem;font-weight:800;color:#3f2d20}
.rs-card-main .rs-card-val{color:#c2410c}
.rs-card-sub{font-size:.72rem;color:#9ca3af;margin-top:2px}

/* 비교 테이블 */
.rs-table-wrap{overflow-x:auto;border-radius:12px;border:1px solid #f1eae1;margin-bottom:14px}
.rs-table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:420px}
.rs-table thead{background:#f6efe5}
.rs-table th{padding:10px 14px;font-weight:700;color:#4a3728;text-align:right}
.rs-table th:first-child{text-align:left}
.rs-table td{padding:9px 14px;text-align:right;border-top:1px solid #f5f0eb;color:#374151}
.rs-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}
.rs-table .rs-tfoot td{background:#faf7f2;font-weight:700;border-top:2px solid #eaddcd}
.rs-table .rs-diff-plus{color:#c2410c;font-weight:700}
.rs-table .rs-diff-minus{color:#9ca3af}
.rs-table .rs-total-row td{background:#fdf4ec;font-weight:700}
.rs-table .rs-hl-row td{background:#fdf4ec;color:#c2410c;font-weight:700}
.rs-caption{caption-side:top;text-align:left;font-size:.8rem;color:#8c7355;padding:8px 14px 0}

/* 누적 */
.rs-cumul{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.rs-cumul-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:10px}
.rs-cumul-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:8px}
.rs-cumul-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:8px;text-align:center}
.rs-cumul-period{font-size:.72rem;color:#9ca3af;margin-bottom:3px}
.rs-cumul-val{font-size:.88rem;font-weight:700;color:#c2410c}

/* 백분위 블록 */
.rs-pct-wrap{background:#fff;border:1px solid #f1eae1;border-radius:14px;padding:16px;margin-bottom:14px}
.rs-pct-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:12px}
.rs-pct-row{display:flex;align-items:center;gap:12px}
.rs-pct-item{flex:1;background:#faf7f2;border-radius:10px;padding:12px;text-align:center}
.rs-pct-before{border:1px solid #eaddcd}
.rs-pct-after{border:1px solid #f5dfd0;background:#fdf4ec}
.rs-pct-label{font-size:.75rem;color:#9ca3af;margin-bottom:4px}
.rs-pct-salary{font-size:.88rem;font-weight:600;color:#3f2d20;margin-bottom:2px}
.rs-pct-rank{font-size:1.1rem;font-weight:800;margin-bottom:8px}
.rs-pct-before .rs-pct-rank{color:#785a43}
.rs-pct-after .rs-pct-rank{color:#c2410c}
.rs-pct-bar-wrap{background:#f1eae1;border-radius:20px;height:6px;overflow:hidden}
.rs-pct-bar{height:100%;border-radius:20px;transition:width .6s ease}
.rs-pct-before .rs-pct-bar{background:#8c7355}
.rs-pct-after .rs-pct-bar{background:#c2410c}
.rs-pct-arrow{font-size:1.3rem;color:#e3d4c5;flex-shrink:0}
.rs-pct-note{font-size:.72rem;color:#9ca3af;margin-top:10px;text-align:center}

/* 팁 */
.rs-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#5b6470;line-height:1.6;margin-bottom:14px}
.rs-tip strong{color:#3f2d20}

/* 공유 · 다음 행동 */
.rs-share{display:block;width:100%;margin-bottom:14px;background:#fff;color:#1f5c7a;border:2px solid #1f5c7a;border-radius:10px;padding:11px 20px;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.rs-share:hover{background:#1f5c7a;color:#fff}
.rs-next{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;background:#faf7f2;border:1px solid #eaddcd;border-radius:14px;padding:16px 18px}
.rs-next-title{font-size:.9rem;font-weight:700;color:#785a43}
.rs-next-link{display:flex;flex-direction:column;gap:2px;text-decoration:none;background:#fff;border:1px solid #e3d4c5;border-radius:10px;padding:10px 14px}
.rs-next-link strong{color:#c2410c;font-size:.92rem}
.rs-next-link span{color:#5b6470;font-size:.8rem}
.rs-next-link:hover{border-color:#c2410c;background:#fffaf5}

/* 관련 링크 박스 */
.rs-related-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px}
.rs-related-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.rs-related-links{display:flex;flex-wrap:wrap;gap:8px}
.rs-related-links a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#fff;transition:background .15s}
.rs-related-links a:hover{background:#f3e7d9}

/* 설명 · 가이드 · FAQ */
.rs-card-sec{background:#fff;border:1px solid #f1eae1;border-radius:16px;padding:22px;margin-top:24px}
.rs-card-sec h2{margin:0 0 10px;font-size:1.1rem;color:#785a43;border-left:4px solid #c2410c;padding-left:10px}
.rs-card-sec p{margin:0 0 10px;color:#374151}
.rs-list{margin:0 0 10px;padding-left:20px;color:#374151;line-height:1.8}
.rs-inline{color:#1f5c7a;font-weight:700;text-decoration:underline}
.rs-inline:hover{color:#174d68}

.rs-guide-box{display:flex;align-items:center;gap:16px;flex-wrap:wrap;background:#cfdfe8;border:1px solid #1f5c7a;border-radius:16px;padding:18px 22px;margin-top:24px}
.rs-guide-body{flex:1;min-width:200px}
.rs-guide-body h3{margin:0 0 4px;color:#13293d;font-size:1.05rem}
.rs-guide-body p{margin:0;color:#13293d;line-height:1.6;font-size:.92rem}
.rs-guide-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:999px;white-space:nowrap}
.rs-guide-btn:hover{background:#174d68}

.rs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.rs-gcard{display:flex;flex-direction:column;gap:4px;background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;text-decoration:none}
.rs-gcard-title{color:#c2410c;font-weight:700;font-size:.92rem}
.rs-gcard-desc{font-size:.82rem;color:#785a43;line-height:1.5}
.rs-gcard:hover .rs-gcard-title{text-decoration:underline}

.rs-faq-item{border:1px solid #f1eae1;border-radius:12px;padding:4px 16px;margin-bottom:10px;background:#fff}
.rs-faq-item[open]{background:#fffaf5;border-color:#f0c8a0}
.rs-faq-item summary{cursor:pointer;font-weight:700;color:#785a43;padding:12px 0;line-height:1.5}
.rs-faq-item summary:hover{color:#c2410c}
.rs-faq-item p{margin:0 0 14px;line-height:1.7;color:#5c4a38}

.rs-related-nav{display:flex;flex-wrap:wrap;gap:8px;margin-top:32px;padding-top:20px;border-top:1px solid #f1eae1}
.rs-related-nav a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2;transition:background .15s}
.rs-related-nav a:hover{background:#f3e7d9}

@media(max-width:600px){
  .rs-cards{grid-template-columns:1fr 1fr}
  .rs-cumul-grid{grid-template-columns:repeat(3,1fr)}
  .rs-row2{grid-template-columns:1fr}
  .rs-hero-num{font-size:1.3rem}
  .rs-pct-row{flex-direction:column}
  .rs-pct-arrow{transform:rotate(90deg)}
  .rs-grid{grid-template-columns:1fr}
  .rs-guide-box{flex-direction:column;align-items:flex-start}
  .rs-guide-btn{width:100%;text-align:center;white-space:normal}
}
</style>

<script>
/* ── 2026 요율 ── */
const R = {
  nps:0.0475, hi:0.03595, ltcRatio:0.1314, ei:0.009,
  npsCap:6590000, nontaxBase:200000   // 국민연금 상한 659만원 (2026.7.1~2027.6.30)
};

/* ── 국세청 2023 근로소득 백분위 데이터 (만원 단위) ── */
// 출처: 국세청 근로소득 백분위(천분위) 자료 2023년 귀속
// 상위 X% → 최저 급여 (만원)
const PCT_DATA = [
  {pct:1,  min:13300}, {pct:2,  min:10000}, {pct:3,  min:8500},
  {pct:5,  min:7200},  {pct:10, min:5500},  {pct:15, min:4600},
  {pct:20, min:4000},  {pct:25, min:3500},  {pct:30, min:3150},
  {pct:40, min:2600},  {pct:50, min:2100},  {pct:60, min:1700},
  {pct:70, min:1350},  {pct:80, min:1050},  {pct:90, min:750},
  {pct:100,min:0}
];

function getSalaryPct(annualWan) {
  for(let i=0;i<PCT_DATA.length;i++){
    if(annualWan>=PCT_DATA[i].min) return PCT_DATA[i].pct;
  }
  return 100;
}

/* ── 유틸 ── */
function fmtRs(el){
  const r=el.value.replace(/[^0-9]/g,'');
  el.value=r?parseInt(r).toLocaleString('ko-KR'):'';
  el.dataset.raw=r;
}
function gR(id){
  const el=document.getElementById(id);
  return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;
}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function fwPlus(n){return (n>=0?'+':'')+Math.round(n).toLocaleString('ko-KR')+'원';}

/* ── 세금 계산 (net-pay와 동일 로직) ── */
function calcTax(annual,depend,nontaxMonth){
  const n=Math.max(1,Math.min(5,parseInt(depend)||1));
  const nontaxTotal=R.nontaxBase+(parseFloat(nontaxMonth)||0);
  const totalPay=Math.max(0,annual-nontaxTotal*12);
  let ded=0;
  if(totalPay<=5000000)        ded=totalPay*0.70;
  else if(totalPay<=15000000)  ded=3500000+(totalPay-5000000)*0.40;
  else if(totalPay<=45000000)  ded=7500000+(totalPay-15000000)*0.15;
  else if(totalPay<=100000000) ded=12000000+(totalPay-45000000)*0.05;
  else                         ded=14750000+(totalPay-100000000)*0.02;
  ded=Math.min(ded,20000000);
  const ia=totalPay-ded;
  const tb=Math.max(0,ia-n*1500000);
  let tax=0;
  if(tb<=14000000)        tax=tb*0.06;
  else if(tb<=50000000)   tax=840000+(tb-14000000)*0.15;
  else if(tb<=88000000)   tax=6240000+(tb-50000000)*0.24;
  else if(tb<=150000000)  tax=15360000+(tb-88000000)*0.35;
  else if(tb<=300000000)  tax=37060000+(tb-150000000)*0.38;
  else if(tb<=500000000)  tax=94060000+(tb-300000000)*0.40;
  else if(tb<=1000000000) tax=174060000+(tb-500000000)*0.42;
  else                    tax=384060000+(tb-1000000000)*0.45;
  // 주의: 세액공제 한도가 부양가족 수 기준으로 되어 있어 법정 한도와 다를 수 있음 — 미검증
  let cr=tax<=550000?tax*0.55:302500+(tax-550000)*0.30;
  cr=Math.min(cr,n<=1?660000:n<=2?715000:748000);
  return Math.max(0,Math.round((tax-cr)/12));
}

function calcDeductions(monthGross,depend,nontaxMonth){
  const npsBase=Math.min(monthGross,R.npsCap);
  const nps=Math.round(npsBase*R.nps);
  const hi=Math.round(monthGross*R.hi);
  const ltc=Math.round(hi*R.ltcRatio);
  const ei=Math.round(monthGross*R.ei);
  return {nps,hi,ltc,ei,ins:nps+hi+ltc+ei};
}

/* ── 인상률 퀵 버튼 ── */
function applyRate(rate){
  if(!rate||rate<=0) return;
  const before=gR('rs-before');
  if(!before){alert('현재 연봉을 먼저 입력해 주세요.');return;}
  const after=Math.round(before*(1+rate/100));
  const el=document.getElementById('rs-after');
  el.value=after.toLocaleString('ko-KR');
  el.dataset.raw=String(after);
  calcRaise();
}

/* ── 메인 계산 ── */
let rsLast=null; // [신규] 공유용 마지막 결과

function calcRaise(){
  const before=gR('rs-before');
  const after=gR('rs-after');
  const errEl=document.getElementById('rs-error');
  if(!before||!after){errEl.style.display='none';return;}
  if(after<=before){errEl.style.display='';return;}   // [신규] 안내 문구 표시 (계산은 기존과 동일하게 중단)
  errEl.style.display='none';

  const depend=document.getElementById('rs-depend').value;
  const nontax=gR('rs-nontax');

  /* 월 세전 */
  const mgBefore=Math.round(before/12);
  const mgAfter=Math.round(after/12);

  /* 4대보험 */
  const insBefore=calcDeductions(mgBefore,depend,nontax);
  const insAfter =calcDeductions(mgAfter, depend,nontax);

  /* 소득세 */
  const taxBefore=calcTax(before,depend,nontax);
  const taxAfter =calcTax(after, depend,nontax);
  const ltaxBefore=Math.round(taxBefore*.1);
  const ltaxAfter =Math.round(taxAfter*.1);

  /* 공제 합계 */
  const dedBefore=insBefore.ins+taxBefore+ltaxBefore;
  const dedAfter =insAfter.ins +taxAfter +ltaxAfter;

  /* 실수령 */
  const netBefore=mgBefore-dedBefore;
  const netAfter =mgAfter -dedAfter;
  const netDiff  =netAfter-netBefore;
  const raiseSalary=after-before;
  const raiseMonth =mgAfter-mgBefore;
  const extraDed   =(dedAfter-dedBefore);
  const raisePct   =(raiseSalary/before*100).toFixed(1);
  const efficiency =(netDiff/raiseMonth*100).toFixed(1);
  const taxLossRatio=(extraDed/raiseMonth*100).toFixed(1);

  rsLast={before,after,netDiff};

  /* ── DOM 업데이트 ── */
  document.getElementById('rs-result').style.display='';

  /* 히어로 */
  document.getElementById('rh-before').textContent=fw(netBefore);
  document.getElementById('rh-after').textContent=fw(netAfter);
  document.getElementById('rh-diff-badge').textContent=fwPlus(netDiff)+'/월';

  /* 카드 */
  document.getElementById('rc-monthly-diff').textContent=fwPlus(netDiff);
  document.getElementById('rc-annual-diff').textContent='연 '+fwPlus(netDiff*12);
  document.getElementById('rc-raise-pct').textContent='+'+raisePct+'%';
  document.getElementById('rc-raise-amt').textContent='인상액 '+fw(raiseSalary);
  document.getElementById('rc-extra-tax').textContent=fw(extraDed);
  document.getElementById('rc-tax-ratio').textContent='인상분의 '+taxLossRatio+'% 손실';
  document.getElementById('rc-efficiency').textContent=efficiency+'%';

  /* 상세 테이블 */
  const rows=[
    {name:'월 세전',    b:mgBefore,       a:mgAfter},
    {name:'국민연금',   b:insBefore.nps,  a:insAfter.nps},
    {name:'건강보험',   b:insBefore.hi,   a:insAfter.hi},
    {name:'장기요양',   b:insBefore.ltc,  a:insAfter.ltc},
    {name:'고용보험',   b:insBefore.ei,   a:insAfter.ei},
    {name:'소득세',     b:taxBefore,      a:taxAfter},
    {name:'지방소득세', b:ltaxBefore,     a:ltaxAfter},
  ];
  document.getElementById('rs-tbody').innerHTML=
    rows.map(r=>{
      const diff=r.a-r.b;
      const diffClass=diff>0?'rs-diff-plus':'rs-diff-minus';
      return `<tr>
        <td>${r.name}</td>
        <td>${fw(r.b)}</td>
        <td>${fw(r.a)}</td>
        <td class="${diffClass}">${fwPlus(diff)}</td>
      </tr>`;
    }).join('')+`
    <tr class="rs-total-row">
      <td>월 실수령</td>
      <td>${fw(netBefore)}</td>
      <td>${fw(netAfter)}</td>
      <td class="rs-diff-plus">${fwPlus(netDiff)}</td>
    </tr>`;

  /* 누적 */
  const periods=[
    {label:'1개월', m:1},{label:'3개월', m:3},{label:'6개월', m:6},
    {label:'1년', m:12},{label:'3년', m:36}
  ];
  document.getElementById('rs-cumul-grid').innerHTML=
    periods.map(p=>`
      <div class="rs-cumul-item">
        <div class="rs-cumul-period">${p.label}</div>
        <div class="rs-cumul-val">${fw(netDiff*p.m)}</div>
      </div>`).join('');

  /* 백분위 */
  const beforeWan=Math.round(before/10000);
  const afterWan =Math.round(after/10000);
  const bPct=getSalaryPct(beforeWan);
  const aPct=getSalaryPct(afterWan);
  // [수정] 표시 버그: 기존 (만원/100)+'만원' → 예: 5,000만원이 "50만원"으로 표시되던 문제
  document.getElementById('pct-before-sal').textContent=beforeWan.toLocaleString('ko-KR')+'만원';
  document.getElementById('pct-before-rank').textContent='상위 '+bPct+'%';
  document.getElementById('pct-before-bar').style.width=(100-bPct)+'%';
  document.getElementById('pct-after-sal').textContent=afterWan.toLocaleString('ko-KR')+'만원';
  document.getElementById('pct-after-rank').textContent='상위 '+aPct+'%';
  document.getElementById('pct-after-bar').style.width=(100-aPct)+'%';

  /* 팁 */
  const tipHtml=genTip(raisePct,efficiency,taxLossRatio,after,netDiff);
  document.getElementById('rs-tip').innerHTML=tipHtml;
}

function genTip(pct,eff,loss,afterSalary,monthlyDiff){
  const p=parseFloat(pct), e=parseFloat(eff), l=parseFloat(loss);
  if(afterSalary>=88000000&&afterSalary<150000000)
    return `<strong>세율 35% 구간에 진입했습니다.</strong> 인상분의 상당 부분이 누진세로 빠져나가는 구간입니다. 연금저축·IRP 납입을 늘리면 세금을 줄이고 실수령을 높일 수 있습니다. <a href="/salary/pension-savings/" style="color:#c2410c">→ 연금저축 세액공제 계산기</a>`;
  if(afterSalary>=50000000)
    return `<strong>인상분 실수령 효율 ${e}%.</strong> 세전 ${p}% 인상됐지만 세후로 ${e}%만 반영됩니다. 누진세 구조상 연봉이 높아질수록 이 비율이 낮아집니다. 월 실수령 증가액 ${Math.round(monthlyDiff).toLocaleString()}원을 12개월로 환산하면 연 ${(Math.round(monthlyDiff)*12).toLocaleString()}원입니다.`;
  return `<strong>인상 효과:</strong> 세전 ${p}% 인상에서 실수령 기준으로는 인상분의 ${e}%가 실제로 반영됩니다. 비과세 수당(식대·차량보조금 등)을 활용하면 같은 연봉에서도 실수령을 더 높일 수 있습니다.`;
}

/* ── [신규] 결과 복사(공유용 텍스트) ── */
function copyRaise(){
  if(!rsLast) return;
  const txt='연봉 '+rsLast.before.toLocaleString('ko-KR')+'원 → '+rsLast.after.toLocaleString('ko-KR')+'원 인상 시 월 실수령 '
    +fwPlus(rsLast.netDiff)+' (연 '+fwPlus(rsLast.netDiff*12)+')\n'
    +'연봉인상 시뮬레이터: https://calculator.khaistory.com/salary/raise/';
  const btn=document.getElementById('rs-copy-btn');
  const done=()=>{btn.textContent='복사했어요! 원하는 곳에 붙여넣기';setTimeout(()=>{btn.textContent='결과 복사해서 공유하기';},2500);};
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt).then(done).catch(()=>{});
  }else{
    const ta=document.createElement('textarea');
    ta.value=txt;document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');done();}catch(e){}
    document.body.removeChild(ta);
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "급여·소득", "item": "https://calculator.khaistory.com/salary/"},
    {"@type": "ListItem", "position": 3, "name": "연봉인상 시뮬레이터", "item": "https://calculator.khaistory.com/salary/raise/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "연봉이 오르면 실수령은 얼마나 늘어나나요?", "acceptedAnswer": {"@type": "Answer", "text": "세전 인상분 중 4대보험과 소득세·지방소득세를 뺀 금액만 늘어납니다. 위 예시 기준으로 인상분의 약 70~80%가 실수령으로 반영되며, 연봉이 높을수록 비율이 낮아집니다."}},
    {"@type": "Question", "name": "연봉이 300만원 오르면 월 실수령은 얼마나 늘어나나요?", "acceptedAnswer": {"@type": "Answer", "text": "부양가족 1명, 식대 비과세 20만원 기준으로 연봉 3,000만~8,000만원 구간에서 월 약 17.5만~20만원이 늘어납니다. 현재 연봉과 가족 수에 따라 달라지니 계산기에 직접 입력해 확인하세요."}},
    {"@type": "Question", "name": "인상분이 전부 실수령으로 늘지 않는 이유는 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "월급이 오르면 국민연금·건강보험·고용보험도 함께 늘고, 소득세는 누진세율이라 인상분에 더 높은 세율이 적용될 수 있기 때문입니다."}},
    {"@type": "Question", "name": "실수령을 더 늘리려면 어떻게 해야 하나요?", "acceptedAnswer": {"@type": "Answer", "text": "식대처럼 비과세로 받는 수당 비중을 늘리거나, 연금저축·IRP 납입으로 연말정산 세액공제를 받으면 같은 연봉에서도 실질 소득을 높일 수 있습니다."}},
    {"@type": "Question", "name": "급여명세서와 금액이 다른 이유는 무엇인가요?", "acceptedAnswer": {"@type": "Answer", "text": "소득세를 근로소득공제와 누진세율로 계산한 근사값이라 회사가 쓰는 간이세액표와 차이가 날 수 있습니다. 회사별 수당과 비과세 항목도 달라서 이 계산기는 참고용으로 활용하세요."}}
  ]
}
</script>
