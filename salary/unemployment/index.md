---
layout: "default"
title: "실업급여 계산기 2026 — 수급액·수급기간 자동 계산"
description: "2026년 기준 실업급여(구직급여) 1일 수급액과 총 수급기간을 자동 계산합니다. 하한액 66,048원·상한액 68,100원 기준, 퇴직금 계산기와 연계해 퇴직 시 받을 수 있는 금액을 한번에 확인하세요."
permalink: "/salary/unemployment/"
canonical: "https://calculator.khaistory.com/salary/unemployment/"
date: "2026-10-16"
og_title: "실업급여 계산기 2026 — 수급액·기간 자동 계산"
og_description: "2026년 하한 66,048원·상한 68,100원 기준. 수급기간·총액·퇴직금 연계 계산."
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>

<section class="ue-wrap">

  <nav class="ue-breadcrumb" aria-label="브레드크럼">
    <a href="/">홈</a> <span aria-hidden="true">›</span>
    <a href="/salary/">급여·소득</a> <span aria-hidden="true">›</span>
    <span aria-current="page">실업급여 계산기</span>
  </nav>

  <div class="ue-intro">
    <h2>2026 실업급여 계산기 — 얼마를, 얼마 동안 받을까?</h2>
    <p>
      퇴직 전 3개월 월급과 고용보험 가입기간, 나이를 넣으면 <strong>1일 수급액, 수급일수, 총 수급액</strong>을 계산합니다.
      퇴직금까지 함께 보고 싶다면 <strong>퇴직 패키지 세트</strong> 탭을 쓰세요.
    </p>
    <button type="button" class="ue-intro-btn" onclick="ueTab('set')">퇴직 패키지 세트 바로가기 →</button>
  </div>

  <div class="ue-notice">
    실업급여(구직급여)는 <strong>비자발적 퇴사</strong>(권고사직·계약만료·경영상 해고 등)이고 고용보험 가입기간이 180일 이상인 경우 수급 가능합니다.
    본 계산기는 모의 계산으로 실제 수급액과 차이가 있을 수 있습니다.
  </div>

  <nav class="ue-tabs">
    <button class="ue-tab active" onclick="ueTab('calc')">실업급여 계산</button>
    <button class="ue-tab" onclick="ueTab('set')">퇴직 패키지 세트</button>
    <button class="ue-tab" onclick="ueTab('info')">수급 조건 안내</button>
  </nav>

  <!-- ① 실업급여 계산 -->
  <div id="ue-calc" class="ue-panel">

    <div class="ue-chips" aria-label="자주 찾는 월급">
      <span class="ue-chips-label">월급 빠른 입력</span>
      <button type="button" class="ue-chip" onclick="setUe(2500000)">250만</button>
      <button type="button" class="ue-chip" onclick="setUe(3000000)">300만</button>
      <button type="button" class="ue-chip" onclick="setUe(3500000)">350만</button>
      <button type="button" class="ue-chip" onclick="setUe(4000000)">400만</button>
    </div>

    <div class="ue-form">
      <div class="ue-row2">
        <div class="ue-field">
          <label>퇴직 전 3개월 평균 월급 (세전, 원)</label>
          <input type="text" id="ue-salary" inputmode="numeric" placeholder="예: 3,500,000" oninput="fmtUe(this)">
          <div class="ue-hint">상여·수당 포함 전체 지급액</div>
        </div>
        <div class="ue-field">
          <label>1일 소정근로시간 (시간)</label>
          <select id="ue-hours">
            <option value="8">8시간 (전일제)</option>
            <option value="7">7시간</option>
            <option value="6">6시간</option>
            <option value="5">5시간</option>
            <option value="4">4시간 이하</option>
          </select>
        </div>
      </div>
      <div class="ue-row2">
        <div class="ue-field">
          <label>고용보험 가입기간</label>
          <select id="ue-insure">
            <option value="0">180일 미만 (수급 불가)</option>
            <option value="1">180일~1년 미만</option>
            <option value="2">1년~3년 미만</option>
            <option value="3">3년~5년 미만</option>
            <option value="4">5년~10년 미만</option>
            <option value="5">10년 이상</option>
          </select>
        </div>
        <div class="ue-field">
          <label>퇴직 시 만 나이</label>
          <select id="ue-age">
            <option value="young">50세 미만</option>
            <option value="old">50세 이상 또는 장애인</option>
          </select>
        </div>
      </div>
      <button class="ue-btn" onclick="calcUe()">실업급여 계산하기</button>
    </div>

    <div id="ue-result" style="display:none" class="ue-result">
      <div id="ue-ineligible" class="ue-ineligible" style="display:none">
        <strong>고용보험 가입기간 180일 미만</strong>으로 실업급여 수급 대상이 아닙니다.<br>
        가입기간을 채운 뒤 퇴직하거나, 고용센터에서 정확한 자격 여부를 확인하세요.
      </div>

      <div id="ue-eligible" style="display:none">
        <div class="ue-hero">
          <div class="ue-hero-col"><div class="ue-hero-label">1일 수급액</div><div class="ue-hero-num" id="ue-daily">—</div></div>
          <div class="ue-hero-mul">×</div>
          <div class="ue-hero-col"><div class="ue-hero-label">수급일수</div><div class="ue-hero-num" id="ue-days">—일</div></div>
          <div class="ue-hero-mul">=</div>
          <div class="ue-hero-col"><div class="ue-hero-label">총 수급액 (예상)</div><div class="ue-hero-num ue-total-color" id="ue-total">—</div></div>
        </div>

        <div class="ue-cards">
          <div class="ue-card"><div class="ue-card-label">평균임금 (1일)</div><div class="ue-card-val" id="ue-avg-daily">—</div></div>
          <div class="ue-card"><div class="ue-card-label">구직급여일액 (60%)</div><div class="ue-card-val" id="ue-benefit">—</div></div>
          <div class="ue-card"><div class="ue-card-label">2026년 하한액</div><div class="ue-card-val">66,048원</div></div>
          <div class="ue-card"><div class="ue-card-label">2026년 상한액</div><div class="ue-card-val">68,100원</div></div>
        </div>

        <div class="ue-period-box">
          <div class="ue-period-title">소정급여일수 (가입기간 × 연령 기준)</div>
          <div id="ue-period-detail"></div>
        </div>

        <div class="ue-monthly-box">
          <div class="ue-monthly-title">월별 수령 예상 스케줄</div>
          <div class="ue-monthly-grid" id="ue-monthly-grid"></div>
          <div class="ue-hint" style="margin-top:8px">실업급여는 4주(28일)마다 신청·지급됩니다. 구직활동 실적이 없으면 지급이 중단될 수 있습니다.</div>
        </div>

        <div class="ue-tip">
          <strong>수급 중 주의사항</strong><br>
          실업급여 수급 중 취업하거나 일용직 소득이 발생하면 고용센터에 신고해야 합니다.
          이직일 다음 날부터 12개월 이내에 소정급여일수를 모두 받아야 하며, 기간이 지나면 남은 일수는 소멸됩니다.
        </div>

        <button type="button" class="ue-share" id="ue-copy-btn" onclick="copyUe()">결과 복사해서 공유하기</button>

        <div class="ue-next">
          <div class="ue-next-title">퇴직 후, 이어서 확인해 보세요</div>
          <a class="ue-next-link" href="/salary/retirement/"><strong>퇴직금 계산기</strong><span>퇴직금과 퇴직소득세, 세후 실수령 확인</span></a>
          <a class="ue-next-link" href="/salary/net-pay/"><strong>연봉 실수령 계산기</strong><span>재취업할 회사의 연봉을 실수령으로 비교</span></a>
          <a class="ue-next-link" href="/salary/pension-savings/"><strong>연금저축·IRP 세액공제</strong><span>퇴직금을 IRP로 받을 때의 절세 설계</span></a>
        </div>
      </div>
    </div>
  </div>

  <!-- ② 퇴직 패키지 세트 -->
  <div id="ue-set" class="ue-panel" style="display:none">
    <div class="ue-set-notice">퇴직 시 받을 수 있는 <strong>퇴직금 + 실업급여</strong>를 한번에 계산합니다.</div>
    <div class="ue-form">
      <div class="ue-row3">
        <div class="ue-field">
          <label>월 급여 (최근 3개월 평균, 세전)</label>
          <input type="text" id="set-salary" inputmode="numeric" placeholder="예: 3,500,000" oninput="fmtUe(this)">
        </div>
        <div class="ue-field">
          <label>재직기간 (년)</label>
          <input type="number" id="set-years" placeholder="예: 5" min="0" step="0.5">
        </div>
        <div class="ue-field">
          <label>고용보험 가입기간</label>
          <select id="set-insure">
            <option value="0">180일 미만</option>
            <option value="1">180일~1년</option>
            <option value="2">1년~3년</option>
            <option value="3">3년~5년</option>
            <option value="4">5년~10년</option>
            <option value="5">10년 이상</option>
          </select>
        </div>
      </div>
      <div class="ue-row2">
        <div class="ue-field">
          <label>1일 소정근로시간</label>
          <select id="set-hours">
            <option value="8">8시간 (전일제)</option>
            <option value="7">7시간</option>
            <option value="6">6시간</option>
          </select>
        </div>
        <div class="ue-field">
          <label>퇴직 시 만 나이</label>
          <select id="set-age">
            <option value="young">50세 미만</option>
            <option value="old">50세 이상 / 장애인</option>
          </select>
        </div>
      </div>
      <button class="ue-btn" onclick="calcSet()">퇴직 패키지 계산하기</button>
    </div>

    <div id="set-result" style="display:none" class="ue-result">
      <div class="ue-set-grid">
        <div class="ue-set-card ue-set-ret">
          <div class="ue-set-icon">💼</div>
          <div class="ue-set-label">퇴직금 (세전)</div>
          <div class="ue-set-val" id="set-ret-gross">—</div>
          <div class="ue-set-sub" id="set-ret-net">세후: —</div>
        </div>
        <div class="ue-set-plus">+</div>
        <div class="ue-set-card ue-set-ue">
          <div class="ue-set-icon">📋</div>
          <div class="ue-set-label">실업급여 (총액)</div>
          <div class="ue-set-val" id="set-ue-total">—</div>
          <div class="ue-set-sub" id="set-ue-days">수급일수: —일</div>
        </div>
        <div class="ue-set-plus">=</div>
        <div class="ue-set-card ue-set-total">
          <div class="ue-set-icon">✓</div>
          <div class="ue-set-label">퇴직 시 총 수령 예상</div>
          <div class="ue-set-val" id="set-grand-total">—</div>
          <div class="ue-set-sub">퇴직금 세후 + 실업급여</div>
        </div>
      </div>
      <div class="ue-tip" style="margin-top:14px">
        <strong>IRP 활용 팁:</strong> 퇴직금을 IRP로 받으면 퇴직소득세를 연금 수령 시점으로 이연할 수 있고,
        연금으로 나눠 받으면 30~40% 세금 감면 혜택이 있습니다.
        <a href="/salary/retirement/" style="color:#c2410c">→ 퇴직금 상세 계산기</a>
      </div>
    </div>
  </div>

  <!-- ③ 수급 조건 -->
  <div id="ue-info" class="ue-panel" style="display:none">
    <div class="ue-info-cards">
      <div class="ue-info-card">
        <div class="ue-info-card-title">✅ 수급 가능 조건</div>
        <ul>
          <li>고용보험 피보험자격 <strong>180일 이상</strong> 가입</li>
          <li><strong>비자발적 퇴사</strong> (권고사직, 계약만료, 경영상 해고, 사업장 이전 등)</li>
          <li>적극적인 <strong>재취업 활동</strong>을 하고 있을 것</li>
          <li>이직일 다음날부터 <strong>12개월 이내</strong> 신청</li>
        </ul>
      </div>
      <div class="ue-info-card">
        <div class="ue-info-card-title">❌ 수급 불가 조건</div>
        <ul>
          <li>자발적 퇴사 (단, 정당한 사유 있으면 예외)</li>
          <li>본인 귀책 사유로 해고</li>
          <li>고용보험 가입기간 180일 미만</li>
          <li>사업 개시(자영업 등)</li>
        </ul>
      </div>
    </div>
    <div class="ue-tip" style="margin-top:14px">
      <strong>2026년 실업급여 주요 수치</strong><br>
      하한액: 최저시급(10,320원) × 80% × 소정근로시간(8h) = <strong>66,048원/일</strong><br>
      상한액: <strong>68,100원/일</strong> (2026년 하한액이 기존 상한 66,000원을 넘어서 상한이 조정됨)<br>
      지급주기: 4주(28일)마다 신청 → 인정 후 지급
    </div>
  </div>

  <!-- 광고 1 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <!-- 정적 표 -->
  <section class="ue-card-sec" id="ue-quick">
    <h2>월급별 1일 실업급여 (2026, 8시간 근로 기준)</h2>
    <p>1일 수급액은 3개월 평균임금의 60%이고, 하한액 66,048원과 상한액 68,100원 사이로 정해집니다. 아래는 이 계산기와 같은 방식으로 계산한 값입니다.</p>
    <div class="ue-table-scroll">
      <table class="ue-info-table">
        <caption class="ue-caption">월 평균 급여별 1일 구직급여 (3개월 평균임금 = 월급 × 3 ÷ 92일)</caption>
        <thead><tr><th>월 급여</th><th>1일 평균임금</th><th>60% 금액</th><th>적용 1일 수급액</th></tr></thead>
        <tbody>
          <tr><td>200만원</td><td>65,217원</td><td>39,130원</td><td>66,048원 (하한)</td></tr>
          <tr><td>250만원</td><td>81,522원</td><td>48,913원</td><td>66,048원 (하한)</td></tr>
          <tr class="ue-hl-row"><td>300만원</td><td>97,826원</td><td>58,696원</td><td>66,048원 (하한)</td></tr>
          <tr><td>350만원</td><td>114,130원</td><td>68,478원</td><td>68,100원 (상한)</td></tr>
          <tr><td>400만원</td><td>130,435원</td><td>78,261원</td><td>68,100원 (상한)</td></tr>
          <tr><td>500만원</td><td>163,043원</td><td>97,826원</td><td>68,100원 (상한)</td></tr>
        </tbody>
      </table>
    </div>
    <p class="ue-hint">하한과 상한의 간격이 좁아서 대부분의 수급자가 하루 66,048원~68,100원을 받게 됩니다.</p>
  </section>

  <section class="ue-card-sec">
    <h2>소정급여일수와 총 수급액 (8시간 근로 기준)</h2>
    <div class="ue-table-scroll">
      <table class="ue-info-table">
        <caption class="ue-caption">가입기간·연령별 소정급여일수와 하한·상한 적용 시 총 수급액</caption>
        <thead><tr><th>가입기간</th><th>50세 미만</th><th>50세 이상·장애인</th></tr></thead>
        <tbody>
          <tr><td>180일~1년</td><td>120일</td><td>120일</td></tr>
          <tr><td>1년~3년</td><td>150일</td><td>180일</td></tr>
          <tr><td>3년~5년</td><td>180일</td><td>210일</td></tr>
          <tr><td>5년~10년</td><td>210일</td><td>240일</td></tr>
          <tr><td>10년 이상</td><td>240일</td><td>270일</td></tr>
        </tbody>
      </table>
    </div>
    <div class="ue-table-scroll" style="margin-top:12px">
      <table class="ue-info-table">
        <thead><tr><th>소정급여일수</th><th>하한액(66,048원) 적용</th><th>상한액(68,100원) 적용</th></tr></thead>
        <tbody>
          <tr><td>120일</td><td>7,925,760원</td><td>8,172,000원</td></tr>
          <tr><td>150일</td><td>9,907,200원</td><td>10,215,000원</td></tr>
          <tr class="ue-hl-row"><td>180일</td><td>11,888,640원</td><td>12,258,000원</td></tr>
          <tr><td>210일</td><td>13,870,080원</td><td>14,301,000원</td></tr>
          <tr><td>240일</td><td>15,851,520원</td><td>16,344,000원</td></tr>
          <tr><td>270일</td><td>17,832,960원</td><td>18,387,000원</td></tr>
        </tbody>
      </table>
    </div>
    <p class="ue-hint" style="margin-top:8px">실제 지급액은 고용센터의 수급자격 인정과 실업인정 결과에 따라 달라질 수 있습니다.</p>
  </section>

  <section class="ue-card-sec">
    <h2>함께 쓰면 좋은 계산기</h2>
    <div class="ue-grid">
      <a class="ue-gcard" href="/salary/retirement/"><span class="ue-gcard-title">퇴직금 계산기</span><span class="ue-gcard-desc">퇴직금과 퇴직소득세, 세후 금액</span></a>
      <a class="ue-gcard" href="/salary/net-pay/"><span class="ue-gcard-title">연봉 실수령 계산기</span><span class="ue-gcard-desc">연봉별 월 실수령과 역계산</span></a>
      <a class="ue-gcard" href="/salary/insurances/"><span class="ue-gcard-title">4대보험 계산기</span><span class="ue-gcard-desc">고용보험 포함 4대보험 부담액</span></a>
    </div>
  </section>

  <section class="ue-guide-box">
    <div class="ue-guide-body">
      <h3>퇴직금을 받았다면, 세후로 얼마인지부터</h3>
      <p>퇴직금과 퇴직소득세를 월급·근속연수별 예시표로 정리했습니다.</p>
    </div>
    <a class="ue-guide-btn" href="/salary/retirement/">퇴직금 계산기 보기 →</a>
  </section>

  <!-- 광고 2 -->
  <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>

  <section class="ue-card-sec" id="ue-faq">
    <h2>자주 묻는 질문</h2>
    <details class="ue-faq-item"><summary>2026년 실업급여 하한액과 상한액은 얼마인가요?</summary><p>1일 하한액은 최저시급 10,320원의 80%에 8시간을 곱한 66,048원이고, 상한액은 68,100원입니다. 하한액이 기존 상한액 66,000원을 넘어서면서 상한액이 올랐습니다.</p></details>
    <details class="ue-faq-item"><summary>실업급여는 어떻게 계산하나요?</summary><p>퇴직 전 3개월 평균임금의 60%가 1일 수급액이고, 여기에 가입기간과 나이로 정해지는 소정급여일수를 곱합니다. 1일 수급액은 하한액과 상한액 범위 안에서 정해집니다.</p></details>
    <details class="ue-faq-item"><summary>실업급여는 얼마 동안 받을 수 있나요?</summary><p>고용보험 가입기간과 나이에 따라 120일에서 270일까지입니다. 50세 미만은 최대 240일, 50세 이상이거나 장애인은 최대 270일입니다.</p></details>
    <details class="ue-faq-item"><summary>자발적으로 퇴사해도 받을 수 있나요?</summary><p>원칙적으로 비자발적 퇴사만 대상이지만, 임금 체불이나 직장 내 괴롭힘 등 정당한 사유가 인정되면 예외가 될 수 있습니다. 구체적인 판단은 고용센터에서 받으세요.</p></details>
    <details class="ue-faq-item"><summary>실업급여와 퇴직금을 둘 다 받을 수 있나요?</summary><p>네, 서로 다른 제도라 조건을 충족하면 둘 다 받을 수 있습니다. 퇴직 패키지 세트 탭에서 퇴직금과 실업급여를 한 번에 계산해 보세요.</p></details>
  </section>

  <nav class="ue-related">
    <a href="/salary/">← 허브로</a>
    <a href="/salary/retirement/">퇴직금 계산기</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기</a>
    <a href="/salary/raise/">연봉인상 시뮬레이터</a>
  </nav>

</section>

<style>
.ue-wrap{font-family:'Noto Sans KR',sans-serif;max-width:720px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.ue-breadcrumb{font-size:.85rem;color:#8c7355;margin-bottom:14px}
.ue-breadcrumb a{color:#8c7355;text-decoration:none}
.ue-breadcrumb a:hover{text-decoration:underline}
.ue-intro{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:22px 24px;margin-bottom:18px}
.ue-intro h2{margin:0 0 8px;color:#785a43;font-size:1.25rem}
.ue-intro p{margin:0 0 12px;color:#5c4a38}
.ue-intro-btn{background:#1f5c7a;color:#fff;border:none;border-radius:999px;padding:9px 18px;font-size:.9rem;font-weight:700;cursor:pointer;font-family:inherit}
.ue-intro-btn:hover{background:#174d68}
.ue-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:20px}
.ue-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:24px;flex-wrap:wrap}
.ue-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s}
.ue-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:600}
.ue-chips{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-bottom:16px}
.ue-chips-label{font-size:.8rem;color:#5b6470;font-weight:600}
.ue-chip{background:#cfdfe8;color:#13293d;border:1px solid #1f5c7a;border-radius:999px;padding:6px 14px;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit}
.ue-chip:hover{background:#1f5c7a;color:#fff}
.ue-form{display:flex;flex-direction:column;gap:14px;margin-bottom:20px}
.ue-field{display:flex;flex-direction:column;gap:5px}
.ue-field label{font-size:.85rem;font-weight:600;color:#3f2d20}
.ue-hint{font-size:.76rem;color:#9ca3af}
.ue-field input,.ue-field select{border:1px solid #ddd4c8;border-radius:8px;padding:10px 12px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.ue-field input:focus,.ue-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.ue-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ue-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.ue-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%;transition:background .15s}
.ue-btn:hover{background:#e96f00}
.ue-result{animation:ueFade .3s ease}
@keyframes ueFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.ue-ineligible{background:#fdf4ec;border:1px solid #f0c8a0;border-radius:10px;padding:14px 16px;color:#c2410c;font-size:.88rem;line-height:1.6}
.ue-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:16px;padding:20px;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:14px;flex-wrap:wrap}
.ue-hero-col{text-align:center;flex:1;min-width:100px}
.ue-hero-label{font-size:.76rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.ue-hero-num{font-size:1.4rem;font-weight:800;color:#3f2d20}
.ue-total-color{color:#c2410c}
.ue-hero-mul{font-size:1.4rem;color:#e3d4c5;font-weight:700;flex-shrink:0}
.ue-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.ue-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.ue-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.ue-card-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.ue-period-box,.ue-monthly-box{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;margin-bottom:14px}
.ue-period-title,.ue-monthly-title{font-size:.82rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.ue-monthly-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
.ue-monthly-item{background:#fff;border:1px solid #f1eae1;border-radius:8px;padding:8px;text-align:center}
.ue-monthly-label{font-size:.72rem;color:#9ca3af;margin-bottom:3px}
.ue-monthly-val{font-size:.88rem;font-weight:700;color:#c2410c}
.ue-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#5b6470;line-height:1.6;margin-bottom:14px}
.ue-tip strong{color:#3f2d20}
.ue-share{display:block;width:100%;margin-bottom:14px;background:#fff;color:#1f5c7a;border:2px solid #1f5c7a;border-radius:10px;padding:11px 20px;font-size:.95rem;font-weight:700;cursor:pointer;font-family:inherit}
.ue-share:hover{background:#1f5c7a;color:#fff}
.ue-next{display:flex;flex-direction:column;gap:8px;margin-bottom:14px;background:#faf7f2;border:1px solid #eaddcd;border-radius:14px;padding:16px 18px}
.ue-next-title{font-size:.9rem;font-weight:700;color:#785a43}
.ue-next-link{display:flex;flex-direction:column;gap:2px;text-decoration:none;background:#fff;border:1px solid #e3d4c5;border-radius:10px;padding:10px 14px}
.ue-next-link strong{color:#c2410c;font-size:.92rem}
.ue-next-link span{color:#5b6470;font-size:.8rem}
.ue-next-link:hover{border-color:#c2410c;background:#fffaf5}
.ue-set-notice{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:10px 14px;font-size:.83rem;color:#8c7355;margin-bottom:16px}
.ue-set-grid{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px}
.ue-set-card{flex:1;min-width:160px;border-radius:14px;padding:16px;text-align:center}
.ue-set-ret{background:#faf7f2;border:1px solid #eaddcd}
.ue-set-ue{background:#fdf4ec;border:1px solid #f5dfd0}
.ue-set-total{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5}
.ue-set-icon{font-size:1.4rem;margin-bottom:4px}
.ue-set-label{font-size:.75rem;color:#9ca3af;margin-bottom:6px}
.ue-set-val{font-size:1.3rem;font-weight:800;color:#c2410c}
.ue-set-sub{font-size:.76rem;color:#9ca3af;margin-top:4px}
.ue-set-plus{font-size:1.5rem;color:#e3d4c5;font-weight:700;flex-shrink:0}
.ue-info-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}
.ue-info-card{background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px}
.ue-info-card-title{font-size:.9rem;font-weight:700;color:#3f2d20;margin-bottom:8px}
.ue-info-card ul{padding-left:18px;font-size:.85rem;color:#374151}
.ue-info-card li{margin-bottom:6px}
.ue-card-sec{background:#fff;border:1px solid #f1eae1;border-radius:16px;padding:22px;margin-top:24px}
.ue-card-sec h2{margin:0 0 10px;font-size:1.1rem;color:#785a43;border-left:4px solid #c2410c;padding-left:10px}
.ue-card-sec p{margin:0 0 10px;color:#374151}
.ue-table-scroll{overflow-x:auto}
.ue-info-table{width:100%;border-collapse:collapse;font-size:.88rem;min-width:380px}
.ue-info-table th{background:#f6efe5;padding:9px 14px;font-weight:700;color:#4a3728;text-align:center;border:1px solid #eae1d4}
.ue-info-table td{padding:9px 14px;text-align:center;border:1px solid #eae1d4;color:#374151}
.ue-info-table .ue-hl-row td{background:#fdf4ec;color:#c2410c;font-weight:700}
.ue-caption{caption-side:top;text-align:left;font-size:.8rem;color:#8c7355;padding:0 0 8px}
.ue-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.ue-gcard{display:flex;flex-direction:column;gap:4px;background:#faf7f2;border:1px solid #eaddcd;border-radius:12px;padding:14px 16px;text-decoration:none}
.ue-gcard-title{color:#c2410c;font-weight:700;font-size:.92rem}
.ue-gcard-desc{font-size:.82rem;color:#785a43;line-height:1.5}
.ue-gcard:hover .ue-gcard-title{text-decoration:underline}
.ue-guide-box{display:flex;align-items:center;gap:16px;flex-wrap:wrap;background:#cfdfe8;border:1px solid #1f5c7a;border-radius:16px;padding:18px 22px;margin-top:24px}
.ue-guide-body{flex:1;min-width:200px}
.ue-guide-body h3{margin:0 0 4px;color:#13293d;font-size:1.05rem}
.ue-guide-body p{margin:0;color:#13293d;line-height:1.6;font-size:.92rem}
.ue-guide-btn{display:inline-block;background:#1f5c7a;color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:999px;white-space:nowrap}
.ue-guide-btn:hover{background:#174d68}
.ue-faq-item{border:1px solid #f1eae1;border-radius:12px;padding:4px 16px;margin-bottom:10px;background:#fff}
.ue-faq-item[open]{background:#fffaf5;border-color:#f0c8a0}
.ue-faq-item summary{cursor:pointer;font-weight:700;color:#785a43;padding:12px 0;line-height:1.5}
.ue-faq-item summary:hover{color:#c2410c}
.ue-faq-item p{margin:0 0 14px;line-height:1.7;color:#5c4a38}
.ue-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:20px;border-top:1px solid #f1eae1;margin-top:32px}
.ue-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ue-related a:hover{background:#f3e7d9}
@media(max-width:600px){
  .ue-row2,.ue-row3{grid-template-columns:1fr}
  .ue-cards{grid-template-columns:1fr 1fr}
  .ue-monthly-grid{grid-template-columns:repeat(3,1fr)}
  .ue-info-cards,.ue-grid{grid-template-columns:1fr}
  .ue-hero{gap:6px}
  .ue-hero-num{font-size:1.1rem}
  .ue-set-grid{flex-direction:column}
  .ue-set-plus{transform:rotate(90deg)}
  .ue-guide-box{flex-direction:column;align-items:flex-start}
  .ue-guide-btn{width:100%;text-align:center;white-space:normal}
}
</style>

<script>
const MIN_WAGE_2026=10320;
const UE_LOWER=Math.round(MIN_WAGE_2026*0.8*8); // 66,048원
const UE_UPPER=68100; // [수정] 2026년 상한액 66,000 → 68,100원 (기존 값이 하한액보다 낮아 모든 결과가 하한액으로 고정되던 문제)

/* 소정급여일수 테이블 */
const UE_DAYS={
  1:{young:120,old:120},
  2:{young:150,old:180},
  3:{young:180,old:210},
  4:{young:210,old:240},
  5:{young:240,old:270}
};

function fmtUe(el){const r=el.value.replace(/[^0-9]/g,'');el.value=r?parseInt(r).toLocaleString('ko-KR'):'';el.dataset.raw=r;}
function gU(id){const el=document.getElementById(id);return parseInt((el.dataset&&el.dataset.raw)||el.value.replace(/[^0-9]/g,'')||'0')||0;}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}

function ueTab(t){
  ['calc','set','info'].forEach(x=>{document.getElementById('ue-'+x).style.display=x===t?'':'none';});
  document.querySelectorAll('.ue-tab').forEach((b,i)=>b.classList.toggle('active',['calc','set','info'][i]===t));
}

function calcDailyBenefit(monthlySalary, hoursPerDay){
  // 1일 평균임금 = 월급 × 3 ÷ 92
  const daily3m=Math.round(monthlySalary*3/92);
  // 구직급여일액 = 평균임금의 60%
  const benefit=Math.round(daily3m*0.6);
  // 상·하한 적용
  const hoursRate=hoursPerDay/8;
  const lowerAdj=Math.round(UE_LOWER*hoursRate);
  const upperAdj=Math.round(UE_UPPER*hoursRate);
  const final=Math.max(lowerAdj,Math.min(upperAdj,benefit));
  return {daily3m, benefit, final, lowerAdj, upperAdj};
}

function calcUe(){
  const salary=gU('ue-salary');
  const insure=parseInt(document.getElementById('ue-insure').value);
  const age=document.getElementById('ue-age').value;
  const hours=parseInt(document.getElementById('ue-hours').value);
  if(!salary) return;

  document.getElementById('ue-result').style.display='';

  if(insure===0){
    document.getElementById('ue-ineligible').style.display='';
    document.getElementById('ue-eligible').style.display='none';
    return;
  }
  document.getElementById('ue-ineligible').style.display='none';
  document.getElementById('ue-eligible').style.display='';

  const {daily3m,benefit,final}=calcDailyBenefit(salary,hours);
  const days=UE_DAYS[insure][age];
  const total=final*days;

  document.getElementById('ue-daily').textContent=fw(final);
  document.getElementById('ue-days').textContent=days+'일';
  document.getElementById('ue-total').textContent=fw(total);
  document.getElementById('ue-avg-daily').textContent=fw(daily3m);
  document.getElementById('ue-benefit').textContent=fw(benefit);

  const insureLabels=['','180일~1년','1년~3년','3년~5년','5년~10년','10년 이상'];
  const ageLabel=age==='old'?'50세 이상':'50세 미만';
  document.getElementById('ue-period-detail').innerHTML=
    `<span style="font-size:.85rem;color:#374151">가입기간 <strong>${insureLabels[insure]}</strong> · ${ageLabel} → <strong>${days}일</strong></span>`;

  // 월별 스케줄 (28일 단위)
  const chunks=Math.ceil(days/28);
  let html='',remain=days;
  for(let i=0;i<chunks;i++){
    const d=Math.min(28,remain);
    html+=`<div class="ue-monthly-item">
      <div class="ue-monthly-label">${i+1}차 신청</div>
      <div class="ue-monthly-val">${fw(final*d)}</div>
    </div>`;
    remain-=d;
  }
  document.getElementById('ue-monthly-grid').innerHTML=html;
}

/* 퇴직소득세 근사 (retirement 계산기와 동일) */
function calcRetTax(gross,yrs){
  const y=Math.max(1,Math.floor(yrs));
  let td=y<=5?y*1000000:y<=10?5000000+(y-5)*2000000:y<=20?15000000+(y-10)*2500000:40000000+(y-20)*3000000;
  const ri=Math.max(0,gross-td);
  const ann=ri/y*12;
  // [수정] 환산급여공제 구간을 퇴직금 계산기와 동일하게 정정
  let ad=ann<=8000000?ann:ann<=70000000?8000000+(ann-8000000)*.6:ann<=100000000?45200000+(ann-70000000)*.55:ann<=300000000?61700000+(ann-100000000)*.45:151700000+(ann-300000000)*.35;
  const tb=Math.max(0,ann-ad);
  let t=tb<=14000000?tb*.06:tb<=50000000?840000+(tb-14000000)*.15:tb<=88000000?6240000+(tb-50000000)*.24:tb<=150000000?15360000+(tb-88000000)*.35:tb<=300000000?37060000+(tb-150000000)*.38:tb<=500000000?94060000+(tb-300000000)*.40:174060000+(tb-500000000)*.42;
  return Math.max(0,Math.round(t/12*y));
}

function calcSet(){
  const salary=gU('set-salary');
  const years=parseFloat(document.getElementById('set-years').value)||0;
  const insure=parseInt(document.getElementById('set-insure').value);
  const age=document.getElementById('set-age').value;
  const hours=parseInt(document.getElementById('set-hours').value);
  if(!salary||years<1) return;

  // 퇴직금
  const daily=salary*3/92;
  const retGross=Math.round(daily*30*(years*365/365));
  const retTax=calcRetTax(retGross,years);
  const retNet=retGross-retTax-Math.round(retTax*.1);

  // 실업급여
  let ueTotal=0,ueDays=0;
  if(insure>0){
    const {final}=calcDailyBenefit(salary,hours);
    ueDays=UE_DAYS[insure][age];
    ueTotal=final*ueDays;
  }

  const grand=retNet+ueTotal;

  document.getElementById('set-result').style.display='';
  document.getElementById('set-ret-gross').textContent=fw(retGross);
  document.getElementById('set-ret-net').textContent='세후: '+fw(Math.max(0,retNet));
  document.getElementById('set-ue-total').textContent=insure>0?fw(ueTotal):'수급 불가';
  document.getElementById('set-ue-days').textContent='수급일수: '+(insure>0?ueDays+'일':'—');
  document.getElementById('set-grand-total').textContent=fw(grand);
}

/* [신규] 월급 칩 */
function setUe(v){const el=document.getElementById('ue-salary');el.value=v.toLocaleString('ko-KR');el.dataset.raw=String(v);calcUe();}
/* [신규] 결과 복사 */
function copyUe(){
  const txt='실업급여 1일 '+document.getElementById('ue-daily').textContent+' × '+document.getElementById('ue-days').textContent+' = 총 '+document.getElementById('ue-total').textContent+'\n실업급여 계산기: https://calculator.khaistory.com/salary/unemployment/';
  const btn=document.getElementById('ue-copy-btn');
  const done=()=>{btn.textContent='복사했어요! 원하는 곳에 붙여넣기';setTimeout(()=>{btn.textContent='결과 복사해서 공유하기';},2500);};
  if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done).catch(()=>{});}
  else{const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done();}catch(e){}document.body.removeChild(ta);}
}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
{"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
{"@type":"ListItem","position":2,"name":"급여·소득","item":"https://calculator.khaistory.com/salary/"},
{"@type":"ListItem","position":3,"name":"실업급여 계산기","item":"https://calculator.khaistory.com/salary/unemployment/"}]}
</script>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
{"@type":"Question","name":"2026년 실업급여 하한액과 상한액은 얼마인가요?","acceptedAnswer":{"@type":"Answer","text":"1일 하한액은 최저시급 10,320원의 80%에 8시간을 곱한 66,048원이고, 상한액은 68,100원입니다. 하한액이 기존 상한액 66,000원을 넘어서면서 상한액이 올랐습니다."}},
{"@type":"Question","name":"실업급여는 어떻게 계산하나요?","acceptedAnswer":{"@type":"Answer","text":"퇴직 전 3개월 평균임금의 60%가 1일 수급액이고, 여기에 가입기간과 나이로 정해지는 소정급여일수를 곱합니다. 1일 수급액은 하한액과 상한액 범위 안에서 정해집니다."}},
{"@type":"Question","name":"실업급여는 얼마 동안 받을 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"고용보험 가입기간과 나이에 따라 120일에서 270일까지입니다. 50세 미만은 최대 240일, 50세 이상이거나 장애인은 최대 270일입니다."}},
{"@type":"Question","name":"자발적으로 퇴사해도 받을 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"원칙적으로 비자발적 퇴사만 대상이지만, 임금 체불이나 직장 내 괴롭힘 등 정당한 사유가 인정되면 예외가 될 수 있습니다. 구체적인 판단은 고용센터에서 받으세요."}},
{"@type":"Question","name":"실업급여와 퇴직금을 둘 다 받을 수 있나요?","acceptedAnswer":{"@type":"Answer","text":"네, 서로 다른 제도라 조건을 충족하면 둘 다 받을 수 있습니다. 퇴직 패키지 세트 탭에서 퇴직금과 실업급여를 한 번에 계산해 보세요."}}]}
</script>
