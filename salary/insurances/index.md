---
layout: "default"
title: "4대보험 계산기 2026 — 근로자·사업주 부담액 + 총인건비 역계산"
description: "2026년 4대보험 요율(국민연금 4.75%, 건강보험 3.595%) 기준. 근로자·사업주 부담액 동시 계산 + 목표 실수령액으로 세전 월급·사업주 총인건비를 역산합니다."
permalink: "/salary/insurances/"
canonical: "https://calculator.khaistory.com/salary/insurances/"
date: "2026-10-16"
og_title: "4대보험 계산기 2026 — 부담액 계산 + 총인건비 역산"
og_description: "2026년 최신 요율. 근로자·사업주 4대보험 동시 계산 + 목표 실수령→세전 월급·총인건비 역산."
---

<!-- =====================================================================
     4대보험 계산기 2026 (업그레이드판)
     - 광고 스크립트 1회 로드, 슬롯(ins) 2곳
     - CSS 접두사: ins- / rv-
     ===================================================================== -->

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

<section class="ins-wrap">

  <nav class="ins-breadcrumb" aria-label="브레드크럼">
    <a href="/">홈</a> <span aria-hidden="true">›</span>
    <a href="/salary/">급여·소득</a> <span aria-hidden="true">›</span>
    <span aria-current="page">4대보험 계산기</span>
  </nav>

  <div class="ins-intro">
    <h2>2026 4대보험 계산기 — 내 월급에서 얼마가 빠질까?</h2>
    <p>
      월 급여를 넣으면 <strong>국민연금·건강보험·장기요양·고용보험</strong>의 <strong>근로자 부담액과 사업주 부담액</strong>을 한 번에 보여 드립니다.
      사업주·HR 담당자라면 목표 실수령액에서 <strong>세전 월급과 총인건비</strong>를 거꾸로 구하는 역산 탭을 쓰세요.
    </p>
    <button type="button" class="ins-intro-btn" onclick="insTab('reverse')">총인건비 역산 바로가기 →</button>
  </div>

  <div class="ins-notice">
    2026년 4대보험 요율 기준 안내용 계산기입니다.
    산재보험은 업종별로 다르며 전액 사업주 부담이라 제외했습니다.
  </div>

  <!-- 탭 -->
  <nav class="ins-tabs">
    <button class="ins-tab active" onclick="insTab('calc')">4대보험 계산</button>
    <button class="ins-tab" onclick="insTab('reverse')">총인건비 역산 <span class="ins-tab-new">HR</span></button>
  </nav>

  <!-- ① 4대보험 계산 -->
  <div id="ins-panel-calc" class="ins-panel">

    <div class="ins-chips" aria-label="자주 찾는 월급">
      <span class="ins-chips-label">자주 찾는 월급</span>
      <button type="button" class="ins-chip" onclick="setIns(2500000)">250만</button>
      <button type="button" class="ins-chip" onclick="setIns(3000000)">300만</button>
      <button type="button" class="ins-chip" onclick="setIns(3500000)">350만</button>
      <button type="button" class="ins-chip" onclick="setIns(4000000)">400만</button>
      <button type="button" class="ins-chip" onclick="setIns(5000000)">500만</button>
    </div>

    <div class="ins-form">
      <div class="ins-field">
        <label for="ins-salary">월 급여 (세전, 원)</label>
        <input type="text" id="ins-salary" inputmode="numeric" placeholder="예: 3,500,000"
               oninput="fmtIns(this)" onkeyup="if(event.key==='Enter') calcIns()">
      </div>
      <div class="ins-field">
        <label for="ins-nontax">비과세 급여 (월, 원) <span class="ins-opt">선택 — 식대 등</span></label>
        <input type="text" id="ins-nontax" inputmode="numeric" placeholder="예: 200,000"
               oninput="fmtIns(this)" onkeyup="if(event.key==='Enter') calcIns()">
        <div class="ins-hint">비과세액은 건강보험·고용보험 산정 기준에서 제외됩니다 (국민연금은 포함)</div>
      </div>

      <details class="ins-rates-toggle">
        <summary>요율 직접 수정 (2026년 기본값 자동 적용)</summary>
        <div class="ins-rates-grid">
          <div class="ins-rate-row">
            <span class="ins-rate-name">국민연금</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>근로자 %</label><input type="number" id="r-nps-ee" value="4.75" step="0.01"></div>
              <div class="ins-rf"><label>사업주 %</label><input type="number" id="r-nps-er" value="4.75" step="0.01"></div>
            </div>
            <div class="ins-hint">상한: 월 기준소득 659만원</div>
          </div>
          <div class="ins-rate-row">
            <span class="ins-rate-name">건강보험</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>근로자 %</label><input type="number" id="r-hi-ee" value="3.595" step="0.001"></div>
              <div class="ins-rf"><label>사업주 %</label><input type="number" id="r-hi-er" value="3.595" step="0.001"></div>
            </div>
          </div>
          <div class="ins-rate-row">
            <span class="ins-rate-name">장기요양</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>건보료의 %</label><input type="number" id="r-ltc" value="13.14" step="0.01"></div>
              <div class="ins-rf"><label></label><div class="ins-hint" style="margin-top:8px">근로자·사업주 각각 동일 비율</div></div>
            </div>
          </div>
          <div class="ins-rate-row">
            <span class="ins-rate-name">고용보험</span>
            <div class="ins-rate-pair">
              <div class="ins-rf"><label>근로자 %</label><input type="number" id="r-ei-ee" value="0.9" step="0.01"></div>
              <div class="ins-rf"><label>사업주 %</label><input type="number" id="r-ei-er" value="1.15" step="0.01"></div>
            </div>
            <div class="ins-hint">사업주: 실업급여 0.9% + 고용안정·직업능력개발 0.25%</div>
          </div>
        </div>
      </details>

      <button class="ins-btn" onclick="calcIns()">4대보험 계산하기</button>
    </div>

    <div id="ins-result" style="display:none" class="ins-result">
      <div class="ins-result-header" id="ins-result-header"></div>
      <div class="ins-compare-wrap">
        <table class="ins-table">
          <thead>
            <tr>
              <th>항목</th>
              <th class="ee-col">근로자 부담</th>
              <th class="er-col">사업주 부담</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody id="ins-tbody"></tbody>
          <tfoot id="ins-tfoot"></tfoot>
        </table>
      </div>
      <div class="ins-summary-grid">
        <div class="ins-scard ins-scard-ee">
          <div class="ins-scard-label">근로자 월 공제 합계</div>
          <div class="ins-scard-val" id="ins-ee-total">—</div>
          <div class="ins-scard-pct" id="ins-ee-pct">—</div>
        </div>
        <div class="ins-scard ins-scard-er">
          <div class="ins-scard-label">사업주 월 부담 합계</div>
          <div class="ins-scard-val" id="ins-er-total">—</div>
          <div class="ins-scard-pct" id="ins-er-pct">—</div>
        </div>
        <div class="ins-scard ins-scard-total">
          <div class="ins-scard-label">국가 전체 납입액 (월)</div>
          <div class="ins-scard-val" id="ins-all-total">—</div>
          <div class="ins-scard-sub">근로자 + 사업주</div>
        </div>
      </div>
      <div class="ins-annual-box">
        <strong>연간 환산</strong>
        <div class="ins-annual-grid" id="ins-annual-grid"></div>
      </div>
      <div class="ins-tip">
        <strong>알아두면 좋은 점</strong><br>
        국민연금은 월 기준소득월액 <strong>659만원</strong>이 상한이라 이 이상 급여를 받아도 공제액이 늘지 않습니다.
        장기요양보험은 건강보험료에 13.14%를 곱한 금액으로, 급여가 높아질수록 함께 올라갑니다.
      </div>

      <button type="button" class="ins-share" id="ins-copy-btn" onclick="copyIns()">결과 복사해서 공유하기</button>

      <div class="ins-next">
        <div class="ins-next-title">이 결과, 이렇게 이어서 확인해 보세요</div>
        <a class="ins-next-link" href="/salary/net-pay/"><strong>연봉 실수령 계산기</strong><span>4대보험에 소득세까지 뺀 월 실수령 확인</span></a>
        <a class="ins-next-link" href="/salary/raise/"><strong>연봉인상 시뮬레이터</strong><span>연봉이 오르면 보험료와 실수령은 얼마나 달라질까</span></a>
        <a class="ins-next-link" href="/guide/four-insurance-rates-2026/"><strong>2026년 4대보험 요율표</strong><span>항목별 요율과 계산 예시 3종</span></a>
      </div>
    </div>
  </div>

  <!-- ② 총인건비 역산 -->
  <div id="ins-panel-reverse" class="ins-panel" style="display:none">

    <div class="ins-rev-notice">
      <strong>어떤 상황에 유용한가요?</strong><br>
      · <strong>HR 담당자·사업주</strong> — 직원에게 실수령 N만원을 주려면 세전 얼마를 책정해야 하는지, 회사가 실제로 부담하는 총인건비는 얼마인지 한 번에 확인<br>
      · <strong>구직자·이직 협상</strong> — "세후 350만원 받고 싶다"는 목표에서 제시해야 할 세전 연봉 계산
    </div>

    <div class="ins-form">
      <div class="ins-field">
        <label for="rv-target">목표 월 실수령액 (원)</label>
        <input type="text" id="rv-target" inputmode="numeric" placeholder="예: 3,000,000"
               oninput="fmtIns(this)">
        <div class="ins-hint">4대보험만 공제 기준입니다. 소득세까지 포함한 역계산은 연봉 실수령 계산기를 이용하세요.</div>
      </div>
      <div class="ins-field">
        <label for="rv-nontax">비과세 수당 (월, 원) <span class="ins-opt">선택 — 식대 등</span></label>
        <input type="text" id="rv-nontax" inputmode="numeric" placeholder="예: 200,000"
               oninput="fmtIns(this)">
      </div>
      <button class="ins-btn" onclick="calcReverse()">세전 월급·총인건비 계산하기</button>
    </div>

    <div id="rv-result" style="display:none" class="ins-result">

      <!-- 히어로: 3단 -->
      <div class="rv-hero">
        <div class="rv-hero-col">
          <div class="rv-hero-label">목표 실수령</div>
          <div class="rv-hero-num rv-target-color" id="rv-h-target">—</div>
        </div>
        <div class="rv-hero-arrow">
          <div class="rv-arrow-head">←</div>
          <div class="rv-arrow-sub">4대보험 공제</div>
        </div>
        <div class="rv-hero-col">
          <div class="rv-hero-label">필요 세전 월급</div>
          <div class="rv-hero-num rv-gross-color" id="rv-h-gross">—</div>
        </div>
        <div class="rv-hero-plus">+</div>
        <div class="rv-hero-col">
          <div class="rv-hero-label">사업주 추가 부담</div>
          <div class="rv-hero-num rv-er-color" id="rv-h-er">—</div>
        </div>
        <div class="rv-hero-eq">=</div>
        <div class="rv-hero-col rv-hero-col-total">
          <div class="rv-hero-label">사업주 총인건비</div>
          <div class="rv-hero-num rv-total-color" id="rv-h-total">—</div>
          <div class="rv-hero-sub">월 기준</div>
        </div>
      </div>

      <!-- 상세 내역 -->
      <div class="ins-compare-wrap">
        <table class="ins-table">
          <thead>
            <tr>
              <th>항목</th>
              <th class="ee-col">근로자 공제</th>
              <th class="er-col">사업주 추가 부담</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody id="rv-tbody"></tbody>
          <tfoot id="rv-tfoot"></tfoot>
        </table>
      </div>

      <!-- 4단 카드 -->
      <div class="rv-cards">
        <div class="rv-card">
          <div class="rv-card-label">필요 세전 월급</div>
          <div class="rv-card-val rv-gross-color" id="rv-c-gross">—</div>
          <div class="rv-card-sub" id="rv-c-annual">연봉: —</div>
        </div>
        <div class="rv-card rv-card-ee">
          <div class="rv-card-label">근로자 4대보험 공제</div>
          <div class="rv-card-val" id="rv-c-ee">—</div>
          <div class="rv-card-sub" id="rv-c-ee-pct">월급의 —%</div>
        </div>
        <div class="rv-card rv-card-er">
          <div class="rv-card-label">사업주 4대보험 부담</div>
          <div class="rv-card-val" id="rv-c-er">—</div>
          <div class="rv-card-sub" id="rv-c-er-pct">월급의 —%</div>
        </div>
        <div class="rv-card rv-card-total">
          <div class="rv-card-label">사업주 월 총인건비</div>
          <div class="rv-card-val rv-total-color" id="rv-c-total">—</div>
          <div class="rv-card-sub" id="rv-c-total-annual">연간: —</div>
        </div>
      </div>

      <!-- 연간 비교 -->
      <div class="rv-annual-box">
        <div class="rv-annual-title">연간 환산 비교</div>
        <div class="rv-annual-grid">
          <div class="rv-annual-item">
            <div class="rv-annual-label">직원 연봉 (세전)</div>
            <div class="rv-annual-val" id="rv-a-gross">—</div>
          </div>
          <div class="rv-annual-item">
            <div class="rv-annual-label">직원 연 실수령</div>
            <div class="rv-annual-val" id="rv-a-net">—</div>
          </div>
          <div class="rv-annual-item">
            <div class="rv-annual-label">사업주 연 총인건비</div>
            <div class="rv-annual-val rv-total-color" id="rv-a-total">—</div>
          </div>
        </div>
      </div>

      <div class="ins-tip">
        <strong>총인건비 = 세전 월급 + 사업주 4대보험 부담분</strong><br>
        직원에게 지급하는 세전 월급 외에도 사업주는 4대보험 사업주 부담분을 별도로 납부합니다.
        이 계산기 기준(산재보험 제외)으로는 세전 월급의 약 <strong>10%</strong>가 추가로 들고, 산재보험까지 더하면 업종에 따라 더 높아집니다.
        소득세까지 포함한 정확한 실수령 역계산은
        <a href="/salary/net-pay/#reverse" style="color:#c2410c">연봉 실수령 계산기 역계산 탭</a>을 이용하세요.
      </div>

      <button type="button" class="ins-share" id="rv-copy-btn" onclick="copyRv()">결과 복사해서 공유하기</button>

      <div class="ins-next">
        <div class="ins-next-title">이 결과, 이렇게 이어서 확인해 보세요</div>
        <a class="ins-next-link" href="/salary/net-pay/#reverse"><strong>실수령 역계산 (소득세 포함)</strong><span>소득세까지 뺀 목표 실수령으로 필요한 연봉 구하기</span></a>
        <a class="ins-next-link" href="/salary/retirement/"><strong>퇴직금 계산기</strong><span>직원 퇴직금 예상 비용도 함께 확인</span></a>
        <a class="ins-next-link" href="/guide/salary-negotiation-2026/"><strong>연봉 협상 가이드</strong><span>세전이 아닌 실수령 기준으로 협상하는 법</span></a>
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

  <!-- 정적 예시표 1: 월급별 -->
  <section class="ins-card-sec" id="ins-quick">
    <h2>월급별 4대보험료 한눈에 보기 (2026)</h2>
    <p>비과세 급여 없이 월 급여 전체가 보험료 산정 기준이라고 가정하고, 이 계산기와 같은 방식으로 계산한 값입니다. 고용보험 사업주 요율은 1.15%로 계산했습니다.</p>
    <div class="ins-compare-wrap">
      <table class="ins-table ins-st-table">
        <caption class="ins-caption">2026 월급별 4대보험 근로자·사업주 부담액 (비과세 없음, 산재보험 제외)</caption>
        <thead>
          <tr><th>월 급여</th><th>근로자 부담</th><th>사업주 부담</th><th>근로자 비율</th></tr>
        </thead>
        <tbody>
          <tr><td>250만원</td><td>242,935원</td><td>249,185원</td><td>9.72%</td></tr>
          <tr class="ins-hl-row"><td>300만원</td><td>291,521원</td><td>299,021원</td><td>9.72%</td></tr>
          <tr><td>350만원</td><td>340,108원</td><td>348,858원</td><td>9.72%</td></tr>
          <tr><td>400만원</td><td>388,695원</td><td>398,695원</td><td>9.72%</td></tr>
          <tr><td>500만원</td><td>485,869원</td><td>498,369원</td><td>9.72%</td></tr>
          <tr class="ins-hl-row"><td>659만원 (연금 상한)</td><td>640,376원</td><td>656,851원</td><td>9.72%</td></tr>
          <tr><td>800만원</td><td>710,416원</td><td>730,416원</td><td>8.88%</td></tr>
          <tr><td>1,000만원</td><td>809,763원</td><td>834,763원</td><td>8.10%</td></tr>
        </tbody>
      </table>
    </div>
    <p class="ins-hint">상한(659만원)을 넘으면 국민연금이 더 늘지 않아 근로자 부담 비율이 낮아집니다. 항목별 요율은 <a class="ins-inline" href="/guide/four-insurance-rates-2026/">2026년 4대보험 요율표</a>에서 볼 수 있어요.</p>
  </section>

  <!-- 정적 예시표 2: 역산 -->
  <section class="ins-card-sec">
    <h2>목표 실수령별 필요 세전 월급·총인건비 (예시)</h2>
    <p>4대보험만 공제하는 기준(소득세 제외), 비과세 없음으로 역산한 값입니다. 세전 월급은 천원 단위 올림입니다.</p>
    <div class="ins-compare-wrap">
      <table class="ins-table ins-st-table">
        <caption class="ins-caption">목표 월 실수령별 세전 월급과 사업주 총인건비 (4대보험만 공제)</caption>
        <thead>
          <tr><th>목표 실수령</th><th>필요 세전 월급</th><th>사업주 부담</th><th>사업주 총인건비</th></tr>
        </thead>
        <tbody>
          <tr><td>250만원</td><td>2,770,000원</td><td>276,097원</td><td>3,046,097원</td></tr>
          <tr class="ins-hl-row"><td>300만원</td><td>3,323,000원</td><td>331,217원</td><td>3,654,217원</td></tr>
          <tr><td>350만원</td><td>3,877,000원</td><td>386,436원</td><td>4,263,436원</td></tr>
          <tr><td>400만원</td><td>4,431,000원</td><td>441,655원</td><td>4,872,655원</td></tr>
        </tbody>
      </table>
    </div>
    <p class="ins-hint">소득세·지방소득세를 뺀 실제 통장 실수령은 이보다 적습니다. 소득세 포함 역계산은 <a class="ins-inline" href="/salary/net-pay/#reverse">연봉 실수령 계산기</a>를 이용하세요.</p>
  </section>

  <!-- 설명 -->
  <section class="ins-card-sec">
    <h2>4대보험은 어떻게 계산하나요?</h2>
    <ul class="ins-list">
      <li><strong>국민연금</strong> 근로자·사업주 각 4.75% (기준소득월액 상한 월 659만원)</li>
      <li><strong>건강보험</strong> 근로자·사업주 각 3.595%</li>
      <li><strong>장기요양보험</strong> 건강보험료의 13.14%를 근로자·사업주가 각각 부담</li>
      <li><strong>고용보험</strong> 근로자 0.9%, 사업주는 이 계산기에서 1.15%로 계산</li>
    </ul>
    <p class="ins-hint">사업주 고용보험 요율 중 고용안정·직업능력개발 부분은 기업 규모에 따라 달라질 수 있어, 해당되는 요율을 위 "요율 직접 수정"에서 바꿔 쓰세요.</p>
  </section>

  <!-- 다른 계산기 -->
  <section class="ins-card-sec">
    <h2>함께 쓰면 좋은 계산기</h2>
    <div class="ins-grid">
      <a class="ins-gcard" href="/salary/net-pay/">
        <span class="ins-gcard-title">연봉 실수령 계산기</span>
        <span class="ins-gcard-desc">소득세까지 반영한 월 실수령, 역계산, 구간표</span>
      </a>
      <a class="ins-gcard" href="/salary/raise/">
        <span class="ins-gcard-title">연봉인상 시뮬레이터</span>
        <span class="ins-gcard-desc">인상 후 실수령 증가액 계산</span>
      </a>
      <a class="ins-gcard" href="/salary/retirement/">
        <span class="ins-gcard-title">퇴직금 계산기</span>
        <span class="ins-gcard-desc">근속기간·평균임금 기준 예상 퇴직금</span>
      </a>
    </div>
  </section>

  <!-- 연계 가이드 -->
  <section class="ins-guide-box">
    <div class="ins-guide-body">
      <h3>2026년 4대보험 요율, 한 장으로 정리했어요</h3>
      <p>근로자·사업주 부담 요율과 월급별 계산 예시 3종을 요율표로 정리했습니다.</p>
    </div>
    <a class="ins-guide-btn" href="/guide/four-insurance-rates-2026/">4대보험 요율표 보기 →</a>
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
  <section class="ins-card-sec" id="ins-faq">
    <h2>자주 묻는 질문</h2>
    <details class="ins-faq-item">
      <summary>2026년 4대보험 근로자 부담 요율은 얼마인가요?</summary>
      <p>국민연금 4.75%, 건강보험 3.595%, 장기요양보험은 건강보험료의 13.14%, 고용보험 0.9%입니다. 월 급여 전체에 적용되는 경우 근로자 부담은 월급의 약 9.7%입니다.</p>
    </details>
    <details class="ins-faq-item">
      <summary>사업주는 4대보험을 얼마나 부담하나요?</summary>
      <p>국민연금 4.75%, 건강보험 3.595%, 장기요양보험(건보료의 13.14%)에 고용보험을 더해 부담합니다. 이 계산기 기준(고용보험 1.15%, 산재보험 제외)으로는 월급의 약 10%입니다.</p>
    </details>
    <details class="ins-faq-item">
      <summary>국민연금은 월급이 많아도 계속 늘어나나요?</summary>
      <p>아닙니다. 기준소득월액 상한(2026년 7월~2027년 6월 월 659만원)까지만 적용되어, 이 계산기 기준으로 근로자 국민연금은 월 313,025원이 최대입니다.</p>
    </details>
    <details class="ins-faq-item">
      <summary>목표 실수령액으로 세전 월급과 총인건비를 알 수 있나요?</summary>
      <p>네, 총인건비 역산 탭에 목표 월 실수령액을 입력하면 4대보험 공제 후 그 금액이 되는 세전 월급과 사업주 총인건비를 계산합니다. 소득세는 포함하지 않으니 소득세까지 보려면 연봉 실수령 계산기를 쓰세요.</p>
    </details>
    <details class="ins-faq-item">
      <summary>산재보험은 계산에 포함되나요?</summary>
      <p>포함하지 않습니다. 산재보험은 업종별 요율이 다르고 전액 사업주가 부담하기 때문에 이 계산기에서는 제외했습니다.</p>
    </details>
  </section>

  <nav class="ins-related">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기 (역계산 포함)</a>
    <a href="/salary/raise/">연봉인상 시뮬레이터</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
  </nav>

</section>

<style>
.ins-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 40px;color:#1f2937;line-height:1.7}
.ins-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}

/* 브레드크럼 · 소개 */
.ins-breadcrumb{font-size:.85rem;color:#8c7355;margin-bottom:14px}
.ins-breadcrumb a{color:#8c7355;text-decoration:none}
.ins-breadcrumb a:hover{text-decoration:underline}
.ins-intro{background:linear-gradient(135deg,#f8efe5 0%,#f3e7d9 100%);border:1px solid #e3d4c5;border-radius:16px;padding:22px 24px;margin-bottom:18px}
.ins-intro h2{margin:0 0 8px;color:#785a43;font-size:1.25rem}
.ins-intro p{margin:0 0 12px;line-height:1.7;color:#5c4a38}
.ins-intro-btn{background:#1f5c7a;color:#fff;border:none;border-radius:999px;padding:9px 18px;font-size:.9rem;font-weight:700;cursor:pointer;font-family:inherit}
.ins-intro-btn:hover{background:#174d68}

/* 탭 */
.ins-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px}
.ins-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s;display:flex;align-items:center;gap:6px}
.ins-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.ins-tab:hover:not(.active){color:#3f2d20}
.ins-tab-new{font-size:10px;background:#1f5c7a;color:#fff;border-radius:20px;padding:1px 6px;font-weight:700;letter-spacing:.03em}

/* 빠른 입력 칩 */
.ins-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:16px}
.ins-chips-label{font-size:.8rem;color:#5b6470;font-weight:600;margin-right:2px}
.ins-chip{background:#cfdfe8;color:#13293d;border:1px solid #1f5c7a;border-radius:999px;padding:6px 14px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit}
.ins-chip:hover{background:#1f5c7a;color:#fff}

/* 역계산 안내 박스 */
.ins-rev-notice{background:#f0f7fb;border:1px solid #c8dff0;border-radius:10px;padding:12px 14px;font-size:.83rem;color:#1f4f6a;margin-bottom:20px;line-height:1.7}
.ins-rev-notice strong{color:#13293d}

/* 폼 공통 */
.ins-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.ins-field{display:flex;flex-direction:column;gap:5px}
.ins-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.ins-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.ins-hint{font-size:.76rem;color:#9ca3af;line-height:1.5}
.ins-field input[type="text"],.ins-field input[type="number"]{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.ins-field input:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}

/* 요율 토글 */
.ins-rates-toggle{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px}
.ins-rates-toggle summary{font-size:.85rem;color:#8c7355;cursor:pointer;font-weight:600;list-style:none}
.ins-rates-toggle summary::-webkit-details-marker{display:none}
.ins-rates-toggle summary::before{content:'▸ '}
.ins-rates-toggle[open] summary::before{content:'▾ '}
.ins-rates-grid{display:flex;flex-direction:column;gap:12px;margin-top:12px}
.ins-rate-row{padding:10px;background:#fff;border-radius:8px;border:1px solid #f1eae1}
.ins-rate-name{font-size:.85rem;font-weight:700;color:#3f2d20;display:block;margin-bottom:8px}
.ins-rate-pair{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:4px}
.ins-rf{display:flex;flex-direction:column;gap:4px}
.ins-rf label{font-size:.76rem;color:#9ca3af}
.ins-rf input{border:1px solid #ddd4c8;border-radius:6px;padding:6px 8px;font-size:.88rem;font-family:inherit;width:100%;box-sizing:border-box}

/* 버튼 */
.ins-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px 24px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;transition:background .15s,transform .1s;width:100%}
.ins-btn:hover{background:#e96f00;transform:translateY(-1px)}

/* 결과 공통 */
.ins-result{animation:insFadeIn .3s ease}
@keyframes insFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

.ins-result-header{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:12px;padding:14px 18px;font-size:.88rem;color:#8c7355;margin-bottom:14px}
.ins-result-header strong{color:#3f2d20;font-size:1.1rem}

.ins-compare-wrap{overflow-x:auto;border-radius:12px;border:1px solid #f1eae1;margin-bottom:14px}
.ins-table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:420px}
.ins-table th{background:#f6efe5;padding:10px 14px;font-weight:700;color:#4a3728;text-align:right}
.ins-table th:first-child{text-align:left}
.ins-table td{padding:9px 14px;text-align:right;border-top:1px solid #f5f0eb}
.ins-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}
.ins-table tfoot td{background:#faf7f2;font-weight:700;border-top:2px solid #eaddcd}
.ee-col{color:#c2410c!important}
.er-col{color:#785a43!important}
.ins-table .ee-val{color:#c2410c;font-weight:700}
.ins-table .er-val{color:#785a43;font-weight:700}
.ins-table .sum-val{color:#3f2d20}
.ins-table .ins-hl-row td{background:#fdf4ec;color:#c2410c;font-weight:700}
.ins-caption{caption-side:top;text-align:left;font-size:.8rem;color:#8c7355;padding:8px 14px 0}

.ins-summary-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px}
.ins-scard{border-radius:12px;padding:14px 16px;text-align:center}
.ins-scard-ee{background:#fdf4ec;border:1px solid #f5dfd0}
.ins-scard-er{background:#f7f2ed;border:1px solid #eaddcd}
.ins-scard-total{background:#faf7f2;border:1px solid #eaddcd}
.ins-scard-label{font-size:.76rem;color:#9ca3af;margin-bottom:4px}
.ins-scard-val{font-size:1.2rem;font-weight:800;color:#3f2d20}
.ins-scard-ee .ins-scard-val{color:#c2410c}
.ins-scard-er .ins-scard-val{color:#785a43}
.ins-scard-pct{font-size:.78rem;color:#9ca3af;margin-top:2px}
.ins-scard-sub{font-size:.76rem;color:#9ca3af}

.ins-annual-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.ins-annual-box strong{font-size:.85rem;color:#3f2d20;display:block;margin-bottom:8px}
.ins-annual-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:.83rem}
.ins-annual-item{text-align:center}
.ins-annual-label{color:#9ca3af;margin-bottom:2px}
.ins-annual-val{font-weight:700;color:#3f2d20}

.ins-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#5b6470;line-height:1.6;margin-bottom:14px}
.ins-tip strong{color:#3f2d20}

/* 공유 · 다음 행동 */
.ins-share{display:block;width:100%;margin-bottom:14px;background:#fff;color:#1f5c7a;border:2px solid #1f5c7a;border-radius:10px;padding:11px 20px;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.ins-share:hover{background:#1f5c7a;color:#fff}
.ins-next{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;background:#faf7f2;border:1px solid #eaddcd;border-radius:14px;padding:16px 18px}
.ins-next-title{font-size:.9rem;font-weight:700;color:#785a43}
.ins-next-link{display:flex;flex-direction:column;gap:2px;text-decoration:none;background:#fff;border:1px solid #e3d4c5;border-radius:10px;padding:10px 14px}
.ins-next-link strong{color:#c2410c;font-size:.92rem}
.ins-next-link span{color:#5b6470;font-size:.8rem}
.ins-next-link:hover{border-color:#c2410c;background:#fffaf5}

/* ── 역계산 전용 스타일 ── */
.rv-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:20px 16px;margin-bottom:14px;display:flex;align-items:center;flex-wrap:wrap;gap:8px;justify-content:space-between}
.rv-hero-col{text-align:center;flex:1;min-width:90px}
.rv-hero-col-total{background:rgba(194,65,12,.06);border-radius:10px;padding:8px}
.rv-hero-label{font-size:.72rem;color:#8c7355;font-weight:600;margin-bottom:3px}
.rv-hero-num{font-size:1.2rem;font-weight:800;letter-spacing:-.01em}
.rv-hero-sub{font-size:.7rem;color:#9ca3af;margin-top:2px}
.rv-hero-arrow{text-align:center;flex-shrink:0}
.rv-arrow-head{font-size:1.2rem;color:#e3d4c5;line-height:1}
.rv-arrow-sub{font-size:.68rem;color:#9ca3af;margin-top:2px}
.rv-hero-plus,.rv-hero-eq{font-size:1.3rem;color:#e3d4c5;font-weight:700;flex-shrink:0}
.rv-target-color{color:#8c7355}
.rv-gross-color{color:#1f5c7a}
.rv-er-color{color:#785a43}
.rv-total-color{color:#c2410c}
.rv-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.rv-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.rv-card-ee{border-color:#fde8e0}
.rv-card-er{border-color:#eaddcd}
.rv-card-total{background:#fdf4ec;border-color:#f5dfd0}
.rv-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px;line-height:1.3}
.rv-card-val{font-size:.95rem;font-weight:800;color:#3f2d20}
.rv-card-sub{font-size:.7rem;color:#9ca3af;margin-top:2px}
.rv-annual-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.rv-annual-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:10px}
.rv-annual-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;font-size:.83rem}
.rv-annual-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:10px;text-align:center}
.rv-annual-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.rv-annual-val{font-size:.95rem;font-weight:700;color:#3f2d20}

/* 설명 · 가이드 · FAQ */
.ins-card-sec{background:#fff;border:1px solid #f1eae1;border-radius:16px;padding:22px;margin-top:24px}
.ins-card-sec h2{margin:0 0 10px;font-size:1.1rem;color:#785a43;border-left:4px solid #c2410c;padding-left:10px}
.ins-card-sec p{margin:0 0 10px;color:#374151}
.ins-list{margin:0 0 10px;padding-left:20px;color:#374151;line-height:1.8}
.ins-inline{color:#1f5c7a;font-weight:700;text-decoration:underline}
.ins-inline:hover{color:#174d68}

.ins-guide-box{display:flex;align-items:center;gap:16px;flex-wrap:wrap;background:#cfdfe8;border:1px solid #1f5c7a;border-radius:16px;padding:18px 22px;margin-top:24px}
.ins-guide-body{flex:1;min-width:200px}
.ins-guide-body h3{margin:0 0 4px;color:#13293d;font-size:1.05rem}
.ins-guide-body p{margin:0;color:#13293d;line-height:1.6;font-size:.92rem}
.ins-guide-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:999px;white-space:nowrap}
.ins-guide-btn:hover{background:#174d68}

.ins-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.ins-gcard{display:flex;flex-direction:column;gap:4px;background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;text-decoration:none}
.ins-gcard-title{color:#c2410c;font-weight:700;font-size:.92rem}
.ins-gcard-desc{font-size:.82rem;color:#785a43;line-height:1.5}
.ins-gcard:hover .ins-gcard-title{text-decoration:underline}

.ins-faq-item{border:1px solid #f1eae1;border-radius:12px;padding:4px 16px;margin-bottom:10px;background:#fff}
.ins-faq-item[open]{background:#fffaf5;border-color:#f0c8a0}
.ins-faq-item summary{cursor:pointer;font-weight:700;color:#785a43;padding:12px 0;line-height:1.5}
.ins-faq-item summary:hover{color:#c2410c}
.ins-faq-item p{margin:0 0 14px;line-height:1.7;color:#5c4a38}

/* 관련 링크 */
.ins-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:32px}
.ins-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ins-related a:hover{background:#f3e7d9}

@media(max-width:600px){
  .ins-summary-grid{grid-template-columns:1fr 1fr}
  .ins-annual-grid,.rv-annual-grid{grid-template-columns:1fr 1fr}
  .ins-scard-total{grid-column:1/-1}
  .rv-cards{grid-template-columns:1fr 1fr}
  .rv-hero{gap:6px}
  .rv-hero-num{font-size:1rem}
  .rv-hero-plus,.rv-hero-eq{font-size:1rem}
  .ins-grid{grid-template-columns:1fr}
  .ins-guide-box{flex-direction:column;align-items:flex-start}
  .ins-guide-btn{width:100%;text-align:center;white-space:normal}
}
</style>

<script>
const NPS_CAP = 6590000; // 국민연금 상한 659만원 (2026.7.1~2027.6.30)

function fmtIns(el){
  const raw=el.value.replace(/[^0-9]/g,'');
  el.value=raw?parseInt(raw).toLocaleString('ko-KR'):'';
  el.dataset.raw=raw;
}
function getRaw(id){
  const el=document.getElementById(id);
  return parseInt((el.dataset.raw||el.value.replace(/[^0-9]/g,''))||'0',10)||0;
}
function fmt(n){return Math.round(n).toLocaleString('ko-KR')+'원';}
function pct(n,base){return base>0?(n/base*100).toFixed(1)+'%':'—';}

/* ── 탭 전환 ── */
function insTab(t){
  ['calc','reverse'].forEach(x=>{
    document.getElementById('ins-panel-'+x).style.display=x===t?'':'none';
  });
  document.querySelectorAll('.ins-tab').forEach((b,i)=>{
    b.classList.toggle('active',['calc','reverse'][i]===t);
  });
}

/* ── 4대보험 계산 공통 함수 ── */
function calcInsAmounts(salary, nontax, r){
  const taxable=Math.max(0,salary-nontax);
  const npsBase=Math.min(salary,NPS_CAP);
  const nps_ee=Math.round(npsBase*r.nps_ee);
  const nps_er=Math.round(npsBase*r.nps_er);
  const hi_ee=Math.round(taxable*r.hi_ee);
  const hi_er=Math.round(taxable*r.hi_er);
  const ltc_ee=Math.round(hi_ee*r.ltc);
  const ltc_er=Math.round(hi_er*r.ltc);
  const ei_ee=Math.round(taxable*r.ei_ee);
  const ei_er=Math.round(taxable*r.ei_er);
  const total_ee=nps_ee+hi_ee+ltc_ee+ei_ee;
  const total_er=nps_er+hi_er+ltc_er+ei_er;
  return {nps_ee,nps_er,hi_ee,hi_er,ltc_ee,ltc_er,ei_ee,ei_er,total_ee,total_er};
}
function getRates(){
  return {
    nps_ee: parseFloat(document.getElementById('r-nps-ee').value)/100,
    nps_er: parseFloat(document.getElementById('r-nps-er').value)/100,
    hi_ee:  parseFloat(document.getElementById('r-hi-ee').value)/100,
    hi_er:  parseFloat(document.getElementById('r-hi-er').value)/100,
    ltc:    parseFloat(document.getElementById('r-ltc').value)/100,
    ei_ee:  parseFloat(document.getElementById('r-ei-ee').value)/100,
    ei_er:  parseFloat(document.getElementById('r-ei-er').value)/100,
  };
}

/* ── [신규] 자주 찾는 월급 칩 ── */
function setIns(v){
  const el=document.getElementById('ins-salary');
  el.value=v.toLocaleString('ko-KR');
  el.dataset.raw=String(v);
  calcIns();
}

/* ── [신규] 공유 텍스트 복사 ── */
function copyText(txt, btnId, label){
  const btn=document.getElementById(btnId);
  const done=()=>{btn.textContent='복사했어요! 원하는 곳에 붙여넣기';setTimeout(()=>{btn.textContent=label;},2500);};
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt).then(done).catch(()=>{});
  }else{
    const ta=document.createElement('textarea');
    ta.value=txt;document.body.appendChild(ta);ta.select();
    try{document.execCommand('copy');done();}catch(e){}
    document.body.removeChild(ta);
  }
}
function copyIns(){
  const salary=getRaw('ins-salary');
  if(!salary) return;
  copyText('월 급여 '+salary.toLocaleString('ko-KR')+'원 → 4대보험 근로자 '
    +document.getElementById('ins-ee-total').textContent+' / 사업주 '
    +document.getElementById('ins-er-total').textContent+'\n'
    +'2026 4대보험 계산기: https://calculator.khaistory.com/salary/insurances/','ins-copy-btn','결과 복사해서 공유하기');
}
function copyRv(){
  const target=getRaw('rv-target');
  if(!target) return;
  copyText('목표 월 실수령 '+target.toLocaleString('ko-KR')+'원 → 필요 세전 월급 '
    +document.getElementById('rv-h-gross').textContent+' / 사업주 총인건비 '
    +document.getElementById('rv-h-total').textContent+' (4대보험만 공제 기준)\n'
    +'4대보험 계산기: https://calculator.khaistory.com/salary/insurances/','rv-copy-btn','결과 복사해서 공유하기');
}

/* ── ① 4대보험 계산 ── */
function calcIns(){
  const salary=getRaw('ins-salary');
  if(!salary) return;
  const nontax=getRaw('ins-nontax');
  const r=getRates();
  const a=calcInsAmounts(salary,nontax,r);
  const total_all=a.total_ee+a.total_er;

  document.getElementById('ins-result').style.display='';
  document.getElementById('ins-result-header').innerHTML=
    `월 급여 <strong>${fmt(salary)}</strong> 기준 (비과세 ${nontax?fmt(nontax):'없음'}) · 2026년 요율`;

  const rows=[
    {name:'국민연금', ee:a.nps_ee, er:a.nps_er},
    {name:'건강보험', ee:a.hi_ee,  er:a.hi_er},
    {name:'장기요양보험', ee:a.ltc_ee, er:a.ltc_er},
    {name:'고용보험', ee:a.ei_ee, er:a.ei_er},
  ];
  document.getElementById('ins-tbody').innerHTML=rows.map(row=>`
    <tr>
      <td>${row.name}</td>
      <td class="ee-val">${fmt(row.ee)}</td>
      <td class="er-val">${fmt(row.er)}</td>
      <td class="sum-val">${fmt(row.ee+row.er)}</td>
    </tr>`).join('');
  document.getElementById('ins-tfoot').innerHTML=`
    <tr>
      <td>합계</td>
      <td class="ee-val">${fmt(a.total_ee)}</td>
      <td class="er-val">${fmt(a.total_er)}</td>
      <td class="sum-val">${fmt(total_all)}</td>
    </tr>`;

  document.getElementById('ins-ee-total').textContent=fmt(a.total_ee);
  document.getElementById('ins-ee-pct').textContent='월급의 '+pct(a.total_ee,salary);
  document.getElementById('ins-er-total').textContent=fmt(a.total_er);
  document.getElementById('ins-er-pct').textContent='월급의 '+pct(a.total_er,salary);
  document.getElementById('ins-all-total').textContent=fmt(total_all);
  document.getElementById('ins-annual-grid').innerHTML=`
    <div class="ins-annual-item"><div class="ins-annual-label">근로자 연간</div><div class="ins-annual-val">${fmt(a.total_ee*12)}</div></div>
    <div class="ins-annual-item"><div class="ins-annual-label">사업주 연간</div><div class="ins-annual-val">${fmt(a.total_er*12)}</div></div>
    <div class="ins-annual-item"><div class="ins-annual-label">합계 연간</div><div class="ins-annual-val">${fmt(total_all*12)}</div></div>`;
}

/* ── ② 총인건비 역산 ── */
function calcReverse(){
  const target=getRaw('rv-target');
  if(!target){alert('목표 월 실수령액을 입력해 주세요.');return;}
  const nontax=getRaw('rv-nontax');

  // 이진탐색으로 역산: 세전 월급 → 4대보험 공제 후 실수령 = target
  // 4대보험만 공제 (소득세 제외) 기준
  const r={
    nps_ee:0.0475, nps_er:0.0475,
    hi_ee:0.03595, hi_er:0.03595,
    ltc:0.1314,
    ei_ee:0.009, ei_er:0.0115,
  };

  let lo=target, hi=target*2;
  for(let i=0;i<80;i++){
    const mid=Math.round((lo+hi)/2);
    const a=calcInsAmounts(mid,nontax,r);
    const net=mid-a.total_ee;
    if(net<target) lo=mid;
    else hi=mid;
    if(hi-lo<=100) break;
  }
  const gross=Math.ceil(hi/1000)*1000; // 천원 단위 올림
  const a=calcInsAmounts(gross,nontax,r);
  const netCheck=gross-a.total_ee;
  const totalCost=gross+a.total_er;

  document.getElementById('rv-result').style.display='';

  // 히어로
  document.getElementById('rv-h-target').textContent=fmt(target);
  document.getElementById('rv-h-gross').textContent=fmt(gross);
  document.getElementById('rv-h-er').textContent=fmt(a.total_er);
  document.getElementById('rv-h-total').textContent=fmt(totalCost);

  // 상세 테이블
  const rows=[
    {name:'국민연금', ee:a.nps_ee, er:a.nps_er},
    {name:'건강보험', ee:a.hi_ee,  er:a.hi_er},
    {name:'장기요양보험', ee:a.ltc_ee, er:a.ltc_er},
    {name:'고용보험', ee:a.ei_ee, er:a.ei_er},
  ];
  document.getElementById('rv-tbody').innerHTML=rows.map(row=>`
    <tr>
      <td>${row.name}</td>
      <td class="ee-val">${fmt(row.ee)}</td>
      <td class="er-val">${fmt(row.er)}</td>
      <td class="sum-val">${fmt(row.ee+row.er)}</td>
    </tr>`).join('');
  document.getElementById('rv-tfoot').innerHTML=`
    <tr>
      <td>합계</td>
      <td class="ee-val">${fmt(a.total_ee)}</td>
      <td class="er-val">${fmt(a.total_er)}</td>
      <td class="sum-val">${fmt(a.total_ee+a.total_er)}</td>
    </tr>`;

  // 4단 카드
  document.getElementById('rv-c-gross').textContent=fmt(gross);
  document.getElementById('rv-c-annual').textContent='연봉: '+fmt(gross*12);
  document.getElementById('rv-c-ee').textContent=fmt(a.total_ee);
  document.getElementById('rv-c-ee-pct').textContent='월급의 '+pct(a.total_ee,gross);
  document.getElementById('rv-c-er').textContent=fmt(a.total_er);
  document.getElementById('rv-c-er-pct').textContent='월급의 '+pct(a.total_er,gross);
  document.getElementById('rv-c-total').textContent=fmt(totalCost);
  document.getElementById('rv-c-total-annual').textContent='연간: '+fmt(totalCost*12);

  // 연간 비교
  document.getElementById('rv-a-gross').textContent=fmt(gross*12);
  document.getElementById('rv-a-net').textContent=fmt(netCheck*12);
  document.getElementById('rv-a-total').textContent=fmt(totalCost*12);
}

/* ── [신규] 딥링크: /salary/insurances/#reverse ── */
document.addEventListener('DOMContentLoaded',()=>{
  if(location.hash==='#reverse') insTab('reverse');
});
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "급여·소득", "item": "https://calculator.khaistory.com/salary/"},
    {"@type": "ListItem", "position": 3, "name": "4대보험 계산기", "item": "https://calculator.khaistory.com/salary/insurances/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "2026년 4대보험 근로자 부담 요율은 얼마인가요?", "acceptedAnswer": {"@type": "Answer", "text": "국민연금 4.75%, 건강보험 3.595%, 장기요양보험은 건강보험료의 13.14%, 고용보험 0.9%입니다. 월 급여 전체에 적용되는 경우 근로자 부담은 월급의 약 9.7%입니다."}},
    {"@type": "Question", "name": "사업주는 4대보험을 얼마나 부담하나요?", "acceptedAnswer": {"@type": "Answer", "text": "국민연금 4.75%, 건강보험 3.595%, 장기요양보험(건보료의 13.14%)에 고용보험을 더해 부담합니다. 이 계산기 기준(고용보험 1.15%, 산재보험 제외)으로는 월급의 약 10%입니다."}},
    {"@type": "Question", "name": "국민연금은 월급이 많아도 계속 늘어나나요?", "acceptedAnswer": {"@type": "Answer", "text": "아닙니다. 기준소득월액 상한(2026년 7월~2027년 6월 월 659만원)까지만 적용되어, 이 계산기 기준으로 근로자 국민연금은 월 313,025원이 최대입니다."}},
    {"@type": "Question", "name": "목표 실수령액으로 세전 월급과 총인건비를 알 수 있나요?", "acceptedAnswer": {"@type": "Answer", "text": "네, 총인건비 역산 탭에 목표 월 실수령액을 입력하면 4대보험 공제 후 그 금액이 되는 세전 월급과 사업주 총인건비를 계산합니다. 소득세는 포함하지 않으니 소득세까지 보려면 연봉 실수령 계산기를 쓰세요."}},
    {"@type": "Question", "name": "산재보험은 계산에 포함되나요?", "acceptedAnswer": {"@type": "Answer", "text": "포함하지 않습니다. 산재보험은 업종별 요율이 다르고 전액 사업주가 부담하기 때문에 이 계산기에서는 제외했습니다."}}
  ]
}
</script>
