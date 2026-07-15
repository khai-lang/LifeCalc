---
layout: default
title: "대출 계산기 2026 — 원리금균등·원금균등·만기일시 + 중도상환 시뮬레이터"
description: "2026년 대출 계산기. 원리금균등·원금균등·만기일시 3가지 상환방식과 월별 상환 스케줄 전체 표, 중도상환 절약액 시뮬레이터까지 한 번에 계산합니다."
permalink: /finance/loan/
canonical: https://calculator.khaistory.com/finance/loan/
og_title: "대출 계산기 2026 — 상환 스케줄 + 중도상환 시뮬레이터"
og_description: "원리금균등·원금균등·만기일시 월납입액·총이자 계산 + 월별 상환표 + 중도상환 시 절약액·단축기간 계산."
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831" crossorigin="anonymous"></script>

<style>
.ln-wrap{font-family:'Noto Sans KR',sans-serif;max-width:860px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.ln-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:22px;padding:28px 24px;margin:18px 0 24px}
.ln-hero h1{margin:0 0 10px;font-size:2rem;color:#13293d;line-height:1.25}
.ln-hero p{margin:0;color:#374151;font-size:.95rem}
.ln-badge{display:inline-block;margin-bottom:12px;padding:6px 12px;border-radius:999px;background:#fff;border:1px solid #dbc9b7;font-size:13px;font-weight:700;color:#6b4f34}
.ln-card{background:#f5ebdf;border:1px solid #e2d2c0;border-radius:20px;padding:22px 20px;margin-bottom:24px}
.ln-card h2{margin:0 0 16px;font-size:1.4rem;color:#13293d}

/* 탭 */
.ln-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:22px}
.ln-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s}
.ln-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:700}

/* 폼 */
.ln-form{display:flex;flex-direction:column;gap:14px}
.ln-field{display:flex;flex-direction:column;gap:5px}
.ln-field label{font-size:.85rem;font-weight:700;color:#3f2d20}
.ln-field input,.ln-field select{border:1px solid #d5c6b5;border-radius:10px;padding:11px 14px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.ln-field input:focus,.ln-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.ln-hint{font-size:.76rem;color:#9ca3af;line-height:1.5}
.ln-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.ln-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}

/* 상환방식 선택 */
.ln-method-group{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.ln-method-btn{border:1px solid #d5c6b5;border-radius:10px;padding:12px 8px;background:#fff;cursor:pointer;font-family:inherit;text-align:center;transition:all .15s}
.ln-method-btn.active{border-color:#c2410c;background:#fdf4ec}
.ln-method-btn .mb-title{font-size:.88rem;font-weight:700;color:#3f2d20;margin-bottom:3px}
.ln-method-btn .mb-desc{font-size:.72rem;color:#9ca3af;line-height:1.4}
.ln-method-btn.active .mb-title{color:#c2410c}

/* 버튼 */
.ln-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%;transition:background .15s,transform .1s;margin-top:4px}
.ln-btn:hover{background:#ea580c;transform:translateY(-1px)}

/* 결과 */
.ln-result{display:none;margin-top:18px;animation:lnFade .3s ease}
@keyframes lnFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

/* 히어로 결과 */
.ln-result-hero{background:linear-gradient(135deg,#fff7f0,#fff1e6);border:1px solid #f5dfc8;border-radius:14px;padding:18px;margin-bottom:14px;text-align:center}
.ln-hero-label{font-size:.82rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.ln-hero-num{font-size:2.2rem;font-weight:800;color:#c2410c;letter-spacing:-.02em}
.ln-hero-sub{font-size:.85rem;color:#8c7355;margin-top:4px}

/* 카드 4단 */
.ln-result-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.ln-rc{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.ln-rc-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.ln-rc-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.ln-rc.highlight{background:#fdf4ec;border-color:#f5dfd0}
.ln-rc.highlight .ln-rc-val{color:#c2410c}

/* 비율 바 */
.ln-bar-wrap{margin-bottom:14px}
.ln-bar-label{display:flex;justify-content:space-between;font-size:.75rem;color:#9ca3af;margin-bottom:4px}
.ln-bar{height:10px;border-radius:20px;overflow:hidden;display:flex;background:#f1eae1}
.ln-bar-principal{background:#1f5c7a;transition:width .4s}
.ln-bar-interest{background:#f5dfd0;transition:width .4s}

/* 상환 스케줄 */
.ln-schedule-toggle{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;margin-bottom:14px;overflow:hidden}
.ln-schedule-toggle summary{padding:12px 16px;font-size:.88rem;font-weight:700;color:#3f2d20;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center}
.ln-schedule-toggle summary::-webkit-details-marker{display:none}
.ln-schedule-toggle summary::after{content:'펼치기 ▾';font-size:.78rem;color:#8c7355;font-weight:400}
.ln-schedule-toggle[open] summary::after{content:'접기 ▴'}
.ln-sched-wrap{overflow-x:auto;max-height:400px;overflow-y:auto}
.ln-sched-table{width:100%;border-collapse:collapse;font-size:.82rem;min-width:480px}
.ln-sched-table thead{position:sticky;top:0;background:#f6efe5;z-index:1}
.ln-sched-table th{padding:8px 12px;font-weight:700;color:#4a3728;text-align:right;border-bottom:1px solid #eae1d4}
.ln-sched-table th:first-child{text-align:center}
.ln-sched-table td{padding:7px 12px;text-align:right;border-bottom:1px solid #f5f0eb;color:#374151}
.ln-sched-table td:first-child{text-align:center;color:#8c7355;font-weight:600}
.ln-sched-table tbody tr:hover{background:#faf8f5}
.ln-sched-table .year-row td{background:#fdf4ec;font-weight:700;color:#c2410c}
.ln-sched-hint{font-size:.75rem;color:#9ca3af;padding:8px 16px}

/* 중도상환 결과 */
.pre-result{display:none;margin-top:18px;animation:lnFade .3s ease}
.pre-hero{background:linear-gradient(135deg,#e6f7ef,#f0fdf4);border:1px solid #a7f0c4;border-radius:14px;padding:16px 18px;margin-bottom:14px}
.pre-hero-row{display:flex;align-items:center;justify-content:space-around;gap:12px;flex-wrap:wrap}
.pre-hero-col{text-align:center}
.pre-hero-label{font-size:.78rem;color:#15803d;font-weight:600;margin-bottom:3px}
.pre-hero-num{font-size:1.5rem;font-weight:800;color:#15803d}
.pre-arrow{font-size:1.3rem;color:#a7f0c4}
.pre-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.pre-card{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.pre-card-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.pre-card-val{font-size:.9rem;font-weight:700;color:#3f2d20}
.pre-card.green .pre-card-val{color:#15803d}

/* 설명 섹션 */
.info-box{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px 20px;margin:0 0 22px}
.info-box h2{margin:0 0 12px;font-size:1.4rem;color:#13293d}
.info-box h3{margin:20px 0 8px;font-size:1rem;color:#1f5c7a;font-weight:700}
.soft-box{background:#f9fafb;border:1px solid #eceff3;border-radius:12px;padding:12px 16px;margin:8px 0;font-size:.88rem;color:#374151;line-height:1.7}
.tip-box{background:#fef6ec;border:1px solid #f4d9b7;border-radius:12px;padding:12px 16px;margin:8px 0;font-size:.88rem;color:#6a4e35;line-height:1.7}

/* 비교표 */
.comp-table{width:100%;border-collapse:collapse;font-size:.85rem;margin:10px 0}
.comp-table th{background:#f6efe5;padding:9px 12px;font-weight:700;color:#4a3728;border:1px solid #eae1d4;text-align:center}
.comp-table td{padding:8px 12px;border:1px solid #eae1d4;text-align:center;color:#374151}
.comp-table td:first-child{text-align:left;font-weight:600;color:#3f2d20}

/* FAQ */
.faq-item{border-top:1px solid #e8ecf1;padding:14px 0}
.faq-item:first-child{border-top:none;padding-top:4px}
.faq-q{font-weight:700;color:#13293d;margin-bottom:5px;font-size:.95rem}
.faq-a{color:#374151;font-size:.88rem;line-height:1.7}

/* 관련 링크 */
.related-links{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.related-links a{display:block;text-decoration:none;background:#ff7a00;border-radius:12px;padding:12px;color:#fff;font-weight:700;font-size:.88rem;text-align:center;transition:background .15s}
.related-links a:hover{background:#e96f00}
.ln-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:18px;border-top:1px solid #f1eae1;margin-top:8px}
.ln-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.ln-related a:hover{background:#f3e7d9}

/* 광고 */
.ln-ad{margin:24px 0;padding:16px;border:1px solid #e5e7eb;border-radius:14px;background:#fff}

@media(max-width:600px){
  .ln-hero h1{font-size:1.5rem}
  .ln-row2,.ln-row3{grid-template-columns:1fr}
  .ln-method-group{grid-template-columns:1fr}
  .ln-result-cards,.pre-cards{grid-template-columns:1fr 1fr}
  .ln-hero-num{font-size:1.7rem}
  .related-links{grid-template-columns:1fr}
}
</style>

<div class="ln-wrap">

  <section class="ln-hero">
    <div class="ln-badge">금융·대출 계산기</div>
    <h1>대출 계산기 2026</h1>
    <p>원리금균등·원금균등·만기일시 3가지 상환방식의 월 납입액, 총이자, 월별 상환 스케줄을 계산합니다.<br>
    중도상환 시 아낄 수 있는 이자와 단축 기간도 바로 확인하세요.</p>
  </section>

  <!-- 계산기 카드 -->
  <section class="ln-card">
    <h2>대출 상환 계산</h2>

    <!-- 탭 -->
    <nav class="ln-tabs">
      <button class="ln-tab active" onclick="lnTab('calc')">상환 계산</button>
      <button class="ln-tab" onclick="lnTab('prepay')">중도상환 시뮬레이터</button>
    </nav>

    <!-- ① 상환 계산 -->
    <div id="ln-panel-calc">
      <div class="ln-form">
        <div class="ln-row2">
          <div class="ln-field">
            <label>대출 원금 (원)</label>
            <input type="text" id="ln-principal" inputmode="numeric" placeholder="예: 300,000,000" oninput="fmtLn(this)">
          </div>
          <div class="ln-field">
            <label>연 이자율 (%)</label>
            <input type="number" id="ln-rate" placeholder="예: 4.5" step="0.01" min="0" max="30" value="4.5">
          </div>
        </div>
        <div class="ln-row2">
          <div class="ln-field">
            <label>대출 기간</label>
            <div style="display:flex;gap:8px;align-items:center">
              <input type="number" id="ln-term" placeholder="30" min="1" max="50" value="30" style="flex:1">
              <select id="ln-term-unit" style="width:80px">
                <option value="year">년</option>
                <option value="month">개월</option>
              </select>
            </div>
          </div>
          <div class="ln-field">
            <label>거치기간 <span style="font-size:.75rem;color:#9ca3af;font-weight:400">선택 — 이자만 납부</span></label>
            <div style="display:flex;gap:8px;align-items:center">
              <input type="number" id="ln-grace" placeholder="0" min="0" max="120" value="0" style="flex:1">
              <span style="font-size:.85rem;color:#9ca3af;white-space:nowrap">개월</span>
            </div>
            <div class="ln-hint">거치기간 중에는 이자만 납부합니다</div>
          </div>
        </div>

        <div class="ln-field">
          <label>상환 방식</label>
          <div class="ln-method-group">
            <button class="ln-method-btn active" data-method="equal-payment" onclick="setMethod(this)">
              <div class="mb-title">원리금균등</div>
              <div class="mb-desc">매월 동일한 금액 납부. 예측 쉬움</div>
            </button>
            <button class="ln-method-btn" data-method="equal-principal" onclick="setMethod(this)">
              <div class="mb-title">원금균등</div>
              <div class="mb-desc">원금 고정, 이자 감소. 총이자 적음</div>
            </button>
            <button class="ln-method-btn" data-method="bullet" onclick="setMethod(this)">
              <div class="mb-title">만기일시</div>
              <div class="mb-desc">만기에 원금 일시 상환. 월부담 적음</div>
            </button>
          </div>
        </div>
        <input type="hidden" id="ln-method" value="equal-payment">

        <button class="ln-btn" onclick="calcLoan()">대출 계산하기</button>
      </div>

      <div id="ln-result" class="ln-result">
        <div class="ln-result-hero">
          <div class="ln-hero-label" id="r-method-label">원리금균등 — 월 납입액</div>
          <div class="ln-hero-num" id="r-monthly">—</div>
          <div class="ln-hero-sub" id="r-monthly-sub">—</div>
        </div>
        <div class="ln-result-cards">
          <div class="ln-rc"><div class="ln-rc-label">대출 원금</div><div class="ln-rc-val" id="r-principal">—</div></div>
          <div class="ln-rc highlight"><div class="ln-rc-label">총 이자</div><div class="ln-rc-val" id="r-total-interest">—</div></div>
          <div class="ln-rc"><div class="ln-rc-label">총 상환액</div><div class="ln-rc-val" id="r-total-payment">—</div></div>
          <div class="ln-rc"><div class="ln-rc-label">이자 부담률</div><div class="ln-rc-val" id="r-interest-ratio">—</div></div>
        </div>
        <div class="ln-bar-wrap">
          <div class="ln-bar-label"><span>원금</span><span id="r-bar-label">—</span><span>이자</span></div>
          <div class="ln-bar">
            <div class="ln-bar-principal" id="r-bar-p"></div>
            <div class="ln-bar-interest" id="r-bar-i"></div>
          </div>
        </div>

        <!-- 상환 스케줄 -->
        <details class="ln-schedule-toggle" id="ln-schedule-details">
          <summary>월별 상환 스케줄 전체</summary>
          <div class="ln-sched-wrap">
            <table class="ln-sched-table">
              <thead>
                <tr>
                  <th>회차</th>
                  <th>납입액</th>
                  <th>원금</th>
                  <th>이자</th>
                  <th>잔여원금</th>
                </tr>
              </thead>
              <tbody id="ln-sched-body"></tbody>
            </table>
          </div>
          <div class="ln-sched-hint">스크롤하여 전체 내역을 확인할 수 있습니다</div>
        </details>

        <div class="ln-result-tip" style="background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6">
          <strong style="color:#3f2d20">중도상환으로 이자를 아끼고 싶다면</strong> →
          <a href="javascript:lnTab('prepay')" style="color:#c2410c;font-weight:600">중도상환 시뮬레이터 탭</a>에서 절약 효과를 바로 확인하세요.
        </div>
      </div>
    </div>

    <!-- ② 중도상환 시뮬레이터 -->
    <div id="ln-panel-prepay" style="display:none">
      <div class="ln-form">
        <div class="ln-row3">
          <div class="ln-field">
            <label>최초 대출 원금 (원)</label>
            <input type="text" id="pp-principal" inputmode="numeric" placeholder="예: 300,000,000" oninput="fmtLn(this)">
          </div>
          <div class="ln-field">
            <label>연 이자율 (%)</label>
            <input type="number" id="pp-rate" placeholder="예: 4.5" step="0.01" min="0" max="30" value="4.5">
          </div>
          <div class="ln-field">
            <label>대출 기간 (년)</label>
            <input type="number" id="pp-term" placeholder="30" min="1" max="50" value="30">
          </div>
        </div>
        <div class="ln-row2">
          <div class="ln-field">
            <label>중도상환 시점 (납부 후 개월)</label>
            <input type="number" id="pp-when" placeholder="예: 24" min="1" value="24">
            <div class="ln-hint">대출 시작 후 몇 개월 뒤에 중도상환하는지 입력</div>
          </div>
          <div class="ln-field">
            <label>중도상환 금액 (원)</label>
            <input type="text" id="pp-amount" inputmode="numeric" placeholder="예: 50,000,000" oninput="fmtLn(this)">
          </div>
        </div>
        <div class="ln-field">
          <label>중도상환 수수료율 (%) <span style="font-size:.75rem;color:#9ca3af;font-weight:400">선택 — 없으면 0</span></label>
          <input type="number" id="pp-fee-rate" placeholder="예: 1.2" step="0.1" min="0" max="10" value="0">
          <div class="ln-hint">보통 대출 후 3년 이내 상환 시 0.6~1.5% 수수료 발생. 3년 초과 시 면제 경우 많음</div>
        </div>
        <button class="ln-btn" onclick="calcPrepay()">중도상환 효과 계산하기</button>
      </div>

      <div id="pre-result" class="pre-result">
        <div class="pre-hero">
          <div class="pre-hero-row">
            <div class="pre-hero-col">
              <div class="pre-hero-label">절약 이자</div>
              <div class="pre-hero-num" id="pre-saved-interest">—</div>
            </div>
            <div class="pre-arrow">+</div>
            <div class="pre-hero-col">
              <div class="pre-hero-label">단축 기간</div>
              <div class="pre-hero-num" id="pre-saved-months">—</div>
            </div>
            <div class="pre-arrow">−</div>
            <div class="pre-hero-col">
              <div class="pre-hero-label">중도상환 수수료</div>
              <div class="pre-hero-num" id="pre-fee">—</div>
            </div>
            <div class="pre-arrow">=</div>
            <div class="pre-hero-col">
              <div class="pre-hero-label">실질 순절약액</div>
              <div class="pre-hero-num" id="pre-net-save">—</div>
            </div>
          </div>
        </div>
        <div class="pre-cards">
          <div class="pre-card"><div class="pre-card-label">중도상환 전 남은 이자</div><div class="pre-card-val" id="pre-remain-interest">—</div></div>
          <div class="pre-card green"><div class="pre-card-label">중도상환 후 남은 이자</div><div class="pre-card-val" id="pre-after-interest">—</div></div>
          <div class="pre-card"><div class="pre-card-label">중도상환 후 월납입액</div><div class="pre-card-val" id="pre-new-monthly">—</div></div>
          <div class="pre-card"><div class="pre-card-label">기존 월납입액</div><div class="pre-card-val" id="pre-old-monthly">—</div></div>
        </div>
        <div style="background:#fff;border-left:3px solid #15803d;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6">
          <strong style="color:#3f2d20">중도상환 수수료 주의</strong> — 은행마다 다르며 대출 후 3년 이내에는 수수료가 있는 경우가 많습니다.
          실제 수수료는 대출 약정서 또는 은행 앱에서 확인하세요.
          수수료를 제외한 순절약액이 플러스라면 중도상환이 유리합니다.
        </div>
      </div>
    </div>
  </section>

  <!-- 광고 -->
  <div class="ln-ad">
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- 설명 섹션 -->
  <section class="info-box">
    <h2>3가지 상환방식 비교 — 어떤 게 유리할까?</h2>
    <p>같은 원금과 금리라도 상환방식에 따라 월 납입액과 총이자가 크게 달라집니다.</p>
    <div class="soft-box">
      <table class="comp-table">
        <thead><tr><th>구분</th><th>원리금균등</th><th>원금균등</th><th>만기일시</th></tr></thead>
        <tbody>
          <tr><td>월 납입액</td><td>매월 동일</td><td>초기 높고 점점 감소</td><td>이자만 (원금 만기)</td></tr>
          <tr><td>총 이자 부담</td><td>중간</td><td>가장 적음</td><td>가장 많음</td></tr>
          <tr><td>초기 부담</td><td>낮음</td><td>높음</td><td>가장 낮음</td></tr>
          <tr><td>적합한 상황</td><td>안정적 소득, 예측 중시</td><td>초기 여유자금 있을 때</td><td>단기 보유, 자산 유동성 필요</td></tr>
        </tbody>
      </table>
    </div>

    <h3>중도상환 — 얼마나 효과가 있을까?</h3>
    <div class="tip-box">
      대출 초기에 중도상환할수록 절약 효과가 큽니다. 원리금균등 방식은 초기에 이자 비중이 높아서,
      초기 중도상환이 후반부보다 훨씬 많은 이자를 절약해줍니다.<br><br>
      <strong>예시:</strong> 3억원, 4.5%, 30년 대출에서 2년 후 5,000만원을 중도상환하면
      약 4,500만원의 이자를 절약하고 대출 기간이 약 7년 단축됩니다.
      (중도상환 수수료 제외 기준)
    </div>

    <h3>거치기간이란?</h3>
    <div class="soft-box">
      거치기간 동안은 원금은 갚지 않고 이자만 납부합니다. 초기 납입 부담을 줄일 수 있지만,
      원금이 줄지 않으므로 거치기간이 길수록 총이자 부담이 커집니다.
      주택담보대출에서 1~3년 거치 후 원리금균등 상환으로 전환하는 방식이 많이 사용됩니다.
    </div>
  </section>

  <!-- 광고 -->
  <div class="ln-ad">
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- FAQ -->
  <section class="info-box">
    <h2>자주 묻는 질문</h2>
    <div class="faq-item">
      <div class="faq-q">Q. 원리금균등과 원금균등 중 어떤 게 유리한가요?</div>
      <div class="faq-a">총이자 부담은 원금균등이 적습니다. 같은 조건에서 원금균등 방식이 원리금균등보다 총이자를 약 10~15% 더 절약할 수 있습니다. 단, 초기 월 납입액이 높아 자금 여유가 있을 때 선택하는 편입니다. 안정적인 월 납입액을 원한다면 원리금균등이 적합합니다.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Q. 중도상환 수수료는 얼마나 되나요?</div>
      <div class="faq-a">은행마다 다르지만 일반적으로 대출 후 3년 이내 중도상환 시 잔여원금의 0.6~1.5% 수준입니다. 3년이 지나면 수수료가 없는 경우가 많습니다. 인터넷전문은행은 수수료가 없거나 더 낮은 경우도 있습니다. 정확한 수수료는 대출 약정서 또는 은행에 직접 문의하세요.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Q. 대출 기간을 늘리면 어떻게 되나요?</div>
      <div class="faq-a">대출 기간이 길어지면 월 납입액은 줄지만 총이자 부담이 크게 늘어납니다. 예를 들어 3억원 4.5% 대출에서 20년 대출의 총이자는 약 1억 5천만원이지만, 30년 대출은 약 2억 4천만원으로 훨씬 많아집니다. 월 납입 부담과 총이자를 함께 고려해 기간을 선택하세요.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Q. 변동금리 대출이라면 이 계산기를 그대로 써도 되나요?</div>
      <div class="faq-a">변동금리 대출은 이자율이 주기적으로 바뀌므로 이 계산기의 결과와 실제가 다를 수 있습니다. 현재 금리로 현황을 파악하거나 금리가 오른 경우를 가정한 시뮬레이션 용도로 사용하시기 바랍니다.</div>
    </div>
  </section>

  <!-- 관련 계산기 -->
  <section class="info-box">
    <h2>함께 보면 좋은 계산기</h2>
    <div class="related-links">
      <a href="/finance/dsr/">DSR 계산기<br><small style="font-weight:400;font-size:.78rem">대출 한도·스트레스 DSR</small></a>
      <a href="/realestate/acquisition-tax/">취득세 계산기<br><small style="font-weight:400;font-size:.78rem">주택수·조정지역 자동 반영</small></a>
      <a href="/realestate/rent-to-jeonse/">전세↔월세 전환<br><small style="font-weight:400;font-size:.78rem">전세 vs 월세 손익 비교</small></a>
    </div>
  </section>

  <nav class="ln-related">
    <a href="/realestate/">← 부동산 허브</a>
    <a href="/finance/dsr/">DSR 계산기</a>
    <a href="/realestate/acquisition-tax/">취득세 계산기</a>
    <a href="/salary/net-pay/">연봉 실수령 계산기</a>
  </nav>

</div>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"원리금균등과 원금균등 중 어떤 게 유리한가요?","acceptedAnswer":{"@type":"Answer","text":"총이자 부담은 원금균등이 약 10~15% 적습니다. 단, 초기 월 납입액이 높아 자금 여유가 있을 때 유리합니다. 안정적인 월 납입을 원한다면 원리금균등이 적합합니다."}},
  {"@type":"Question","name":"중도상환 수수료는 얼마나 되나요?","acceptedAnswer":{"@type":"Answer","text":"대출 후 3년 이내 중도상환 시 잔여원금의 0.6~1.5% 수준입니다. 3년 이후는 수수료가 없는 경우가 많으며, 인터넷전문은행은 수수료가 없거나 낮습니다."}},
  {"@type":"Question","name":"대출 기간을 늘리면 어떻게 되나요?","acceptedAnswer":{"@type":"Answer","text":"월 납입액은 줄지만 총이자 부담이 크게 늘어납니다. 3억원 4.5% 기준 20년 대출 총이자는 약 1억 5천만원이지만, 30년은 약 2억 4천만원입니다."}}
]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
  {"@type":"ListItem","position":2,"name":"금융 계산기","item":"https://calculator.khaistory.com/finance/"},
  {"@type":"ListItem","position":3,"name":"대출 계산기","item":"https://calculator.khaistory.com/finance/loan/"}
]}
</script>

<script>
(function(){
'use strict';

/* ── 유틸 ── */
function fmtLn(el){
  const r=el.value.replace(/[^0-9]/g,'');
  el.value=r?parseInt(r).toLocaleString('ko-KR'):'';
  el.dataset.raw=r;
}
function gR(id){
  const el=document.getElementById(id);
  if(!el) return 0;
  if(el.type==='number') return parseFloat(el.value)||0;
  const raw=el.dataset.raw||el.value.replace(/[^0-9]/g,'');
  return parseInt(raw)||0;
}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}

/* ── 탭 ── */
function lnTab(t){
  ['calc','prepay'].forEach(x=>{
    document.getElementById('ln-panel-'+x).style.display=x===t?'':'none';
  });
  document.querySelectorAll('.ln-tab').forEach((b,i)=>{
    b.classList.toggle('active',['calc','prepay'][i]===t);
  });
}

/* ── 상환방식 ── */
function setMethod(btn){
  document.querySelectorAll('.ln-method-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ln-method').value=btn.dataset.method;
}

/* ── 원리금균등 월납입액 ── */
function pmt(principal, monthlyRate, months){
  if(monthlyRate===0) return principal/months;
  return principal*monthlyRate*Math.pow(1+monthlyRate,months)/(Math.pow(1+monthlyRate,months)-1);
}

/* ── 상환 스케줄 생성 ── */
function buildSchedule(principal, annualRate, totalMonths, graceMonths, method){
  const mr=annualRate/100/12;
  const schedule=[];
  let balance=principal;
  let totalInterest=0;

  // 거치기간
  for(let i=1;i<=graceMonths;i++){
    const interest=Math.round(balance*mr);
    schedule.push({month:i, payment:interest, principal:0, interest, balance, grace:true});
    totalInterest+=interest;
  }

  const repayMonths=totalMonths-graceMonths;

  if(method==='equal-payment'){
    const monthly=Math.round(pmt(balance,mr,repayMonths));
    for(let i=1;i<=repayMonths;i++){
      const interest=Math.round(balance*mr);
      let principalPaid=monthly-interest;
      if(i===repayMonths) principalPaid=balance;
      const payment=principalPaid+interest;
      balance-=principalPaid;
      totalInterest+=interest;
      schedule.push({month:graceMonths+i, payment, principal:principalPaid, interest, balance:Math.max(0,balance)});
    }
  } else if(method==='equal-principal'){
    const principalPerMonth=Math.round(principal/repayMonths);
    for(let i=1;i<=repayMonths;i++){
      const interest=Math.round(balance*mr);
      const principalPaid=i===repayMonths?balance:principalPerMonth;
      const payment=principalPaid+interest;
      balance-=principalPaid;
      totalInterest+=interest;
      schedule.push({month:graceMonths+i, payment, principal:principalPaid, interest, balance:Math.max(0,balance)});
    }
  } else {
    // 만기일시
    for(let i=1;i<=repayMonths;i++){
      const interest=Math.round(balance*mr);
      const principalPaid=i===repayMonths?balance:0;
      const payment=interest+principalPaid;
      balance-=principalPaid;
      totalInterest+=interest;
      schedule.push({month:graceMonths+i, payment, principal:principalPaid, interest, balance:Math.max(0,balance)});
    }
  }
  return {schedule, totalInterest};
}

/* ── 계산 실행 ── */
function calcLoan(){
  const principal=gR('ln-principal');
  const rate=parseFloat(document.getElementById('ln-rate').value)||0;
  const termVal=parseInt(document.getElementById('ln-term').value)||30;
  const termUnit=document.getElementById('ln-term-unit').value;
  const grace=parseInt(document.getElementById('ln-grace').value)||0;
  const method=document.getElementById('ln-method').value;
  if(!principal||!rate) return;

  const totalMonths=termUnit==='year'?termVal*12:termVal;
  const {schedule, totalInterest}=buildSchedule(principal,rate,totalMonths,grace,method);

  // 첫 납입액 (거치 이후 첫 달)
  const firstRepay=schedule.find(r=>!r.grace)||schedule[0];

  const totalPayment=principal+totalInterest;
  const interestRatio=(totalInterest/totalPayment*100).toFixed(1);

  const methodLabels={'equal-payment':'원리금균등','equal-principal':'원금균등','bullet':'만기일시'};

  document.getElementById('ln-result').style.display='block';
  document.getElementById('r-method-label').textContent=`${methodLabels[method]} — 월 납입액`;
  document.getElementById('r-monthly').textContent=fw(firstRepay.payment);

  // 원금균등은 초기-말기 범위 표시
  if(method==='equal-principal'){
    const lastRepay=schedule[schedule.length-1];
    document.getElementById('r-monthly-sub').textContent=
      `첫 달 ${fw(firstRepay.payment)} → 마지막 달 ${fw(lastRepay.payment)}`;
  } else if(method==='bullet'){
    const repayRows=schedule.filter(r=>!r.grace);
    document.getElementById('r-monthly-sub').textContent=
      `거치 중 ${fw(schedule[0]?.payment||0)} / 만기 원금 ${fw(principal)} 일시 상환`;
  } else {
    document.getElementById('r-monthly-sub').textContent=
      grace>0?`거치기간 ${grace}개월 후 원리금균등 상환`:`전 기간 동일 납입액`;
  }

  document.getElementById('r-principal').textContent=fw(principal);
  document.getElementById('r-total-interest').textContent=fw(totalInterest);
  document.getElementById('r-total-payment').textContent=fw(totalPayment);
  document.getElementById('r-interest-ratio').textContent=interestRatio+'%';

  const pPct=Math.round(principal/totalPayment*100);
  const iPct=100-pPct;
  document.getElementById('r-bar-p').style.width=pPct+'%';
  document.getElementById('r-bar-i').style.width=iPct+'%';
  document.getElementById('r-bar-label').textContent=`원금 ${pPct}% / 이자 ${iPct}%`;

  // 스케줄 테이블
  const tbody=document.getElementById('ln-sched-body');
  tbody.innerHTML='';
  schedule.forEach(row=>{
    const tr=document.createElement('tr');
    if(row.grace) tr.style.background='#f0f7fb';
    tr.innerHTML=`
      <td>${row.month}회${row.grace?' (거치)':''}</td>
      <td>${fw(row.payment)}</td>
      <td>${row.principal>0?fw(row.principal):'—'}</td>
      <td>${fw(row.interest)}</td>
      <td>${fw(row.balance)}</td>`;
    tbody.appendChild(tr);
  });

  // 중도상환 탭에 값 자동 복사
  const ppPrincipal=document.getElementById('pp-principal');
  ppPrincipal.value=document.getElementById('ln-principal').value;
  ppPrincipal.dataset.raw=document.getElementById('ln-principal').dataset.raw||'';
  document.getElementById('pp-rate').value=rate;
  document.getElementById('pp-term').value=termUnit==='year'?termVal:Math.round(termVal/12);
}

/* ── 중도상환 시뮬레이터 ── */
function calcPrepay(){
  const principal=gR('pp-principal');
  const rate=parseFloat(document.getElementById('pp-rate').value)||0;
  const termYears=parseInt(document.getElementById('pp-term').value)||30;
  const whenMonth=parseInt(document.getElementById('pp-when').value)||1;
  const prepayAmt=gR('pp-amount');
  const feeRate=(parseFloat(document.getElementById('pp-fee-rate').value)||0)/100;
  if(!principal||!rate||!prepayAmt) return;

  const totalMonths=termYears*12;
  const mr=rate/100/12;

  // 원리금균등 기준
  const monthlyPmt=pmt(principal,mr,totalMonths);

  // 중도상환 시점의 잔여원금 계산
  let balance=principal;
  let interestPaidBefore=0;
  for(let i=0;i<whenMonth;i++){
    const interest=balance*mr;
    const principalPaid=monthlyPmt-interest;
    interestPaidBefore+=interest;
    balance-=principalPaid;
  }
  const balanceAtPrepay=Math.max(0,balance);

  // 중도상환 전 남은 이자 (원래 계획)
  const remainMonths=totalMonths-whenMonth;
  let remainInterest=0;
  let tempBal=balanceAtPrepay;
  for(let i=0;i<remainMonths;i++){
    const int=tempBal*mr;
    remainInterest+=int;
    tempBal-=(monthlyPmt-int);
  }

  // 중도상환 후 잔여원금
  const newBalance=Math.max(0,balanceAtPrepay-prepayAmt);
  if(newBalance<=0){
    // 전액 상환
    const fee=Math.round(prepayAmt*feeRate);
    document.getElementById('pre-result').style.display='';
    document.getElementById('pre-saved-interest').textContent=fw(Math.round(remainInterest));
    document.getElementById('pre-saved-months').textContent=remainMonths+'개월';
    document.getElementById('pre-fee').textContent=fw(fee);
    document.getElementById('pre-net-save').textContent=fw(Math.round(remainInterest)-fee);
    document.getElementById('pre-remain-interest').textContent=fw(Math.round(remainInterest));
    document.getElementById('pre-after-interest').textContent='0원 (완납)';
    document.getElementById('pre-new-monthly').textContent='0원 (완납)';
    document.getElementById('pre-old-monthly').textContent=fw(Math.round(monthlyPmt));
    return;
  }

  // 중도상환 후 남은 이자
  const newMonthly=pmt(newBalance,mr,remainMonths);
  let afterInterest=0;
  let tmpBal2=newBalance;
  for(let i=0;i<remainMonths;i++){
    const int=tmpBal2*mr;
    afterInterest+=int;
    tmpBal2-=(newMonthly-int);
    if(tmpBal2<=0) break;
  }

  // 단축 기간 계산 (원래 월납입액 유지 시)
  let shortBal=newBalance;
  let shortMonths=0;
  while(shortBal>0 && shortMonths<totalMonths){
    const int=shortBal*mr;
    const prin=monthlyPmt-int;
    shortBal-=prin;
    shortMonths++;
    if(shortBal<=0) break;
  }
  const savedMonths=remainMonths-shortMonths;

  const savedInterest=Math.round(remainInterest-afterInterest);
  const fee=Math.round(prepayAmt*feeRate);
  const netSave=savedInterest-fee;

  document.getElementById('pre-result').style.display='block';
  document.getElementById('pre-saved-interest').textContent=fw(savedInterest);
  document.getElementById('pre-saved-months').textContent=savedMonths>0?savedMonths+'개월 단축':'유지';
  document.getElementById('pre-fee').textContent=fw(fee);
  document.getElementById('pre-net-save').textContent=fw(netSave);
  document.getElementById('pre-remain-interest').textContent=fw(Math.round(remainInterest));
  document.getElementById('pre-after-interest').textContent=fw(Math.round(afterInterest));
  document.getElementById('pre-new-monthly').textContent=fw(Math.round(newMonthly));
  document.getElementById('pre-old-monthly').textContent=fw(Math.round(monthlyPmt));
}

/* 전역 노출 */
window.fmtLn=fmtLn;
window.lnTab=lnTab;
window.setMethod=setMethod;
window.calcLoan=calcLoan;
window.calcPrepay=calcPrepay;
})();
</script>
