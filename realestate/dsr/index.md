---
layout: default
title: "DSR 계산기 2026 — 스트레스 DSR·대출 한도 역산 포함"
description: "2026년 DSR(총부채원리금상환비율) 계산기. 월 상환액 입력 방식, 스트레스 DSR(수도권 +3.0%p) 동시 비교, 소득 기준 최대 대출 한도 역산까지 한 번에."
permalink: /finance/dsr/
canonical: https://calculator.khaistory.com/finance/dsr/
og_title: "DSR 계산기 2026 — 스트레스 DSR·대출 한도 역산"
og_description: "월 납입액 입력으로 DSR 즉시 계산. 스트레스 DSR(수도권 +3.0%p) 동시 비교. 소득 기준 대출 한도 역산."
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831" crossorigin="anonymous"></script>

<style>
.dsr-wrap{font-family:'Noto Sans KR',sans-serif;max-width:860px;margin:0 auto;padding:0 0 48px;color:#1f2937;line-height:1.7}
.dsr-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:22px;padding:28px 24px;margin:18px 0 24px}
.dsr-hero h1{margin:0 0 10px;font-size:2rem;color:#13293d;line-height:1.25}
.dsr-hero p{margin:0;color:#374151;font-size:.95rem}
.dsr-badge{display:inline-block;margin-bottom:12px;padding:6px 12px;border-radius:999px;background:#fff;border:1px solid #dbc9b7;font-size:13px;font-weight:700;color:#6b4f34}

/* 2026 핵심 수치 배너 */
.dsr-key-nums{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:24px}
.dsr-kn{background:#fff;border:1px solid #f1eae1;border-radius:12px;padding:12px;text-align:center}
.dsr-kn-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px}
.dsr-kn-val{font-size:1rem;font-weight:800;color:#c2410c}
.dsr-kn-sub{font-size:.7rem;color:#9ca3af;margin-top:2px}

.dsr-card{background:#f5ebdf;border:1px solid #e2d2c0;border-radius:20px;padding:22px 20px;margin-bottom:24px}
.dsr-card h2{margin:0 0 16px;font-size:1.4rem;color:#13293d}

/* 탭 */
.dsr-tabs{display:flex;gap:4px;border-bottom:2px solid #f0e8de;margin-bottom:22px;flex-wrap:wrap}
.dsr-tab{background:none;border:none;padding:10px 18px;font-size:.92rem;color:#8c7355;cursor:pointer;border-bottom:2px solid transparent;margin-bottom:-2px;font-family:inherit;transition:color .15s;display:flex;align-items:center;gap:6px}
.dsr-tab.active{color:#c2410c;border-bottom-color:#c2410c;font-weight:700}
.dsr-tab-badge{font-size:10px;background:#c2410c;color:#fff;border-radius:20px;padding:1px 6px;font-weight:700}

/* 폼 */
.dsr-form{display:flex;flex-direction:column;gap:14px}
.dsr-field{display:flex;flex-direction:column;gap:5px}
.dsr-field label{font-size:.85rem;font-weight:700;color:#3f2d20}
.dsr-field input,.dsr-field select{border:1px solid #d5c6b5;border-radius:10px;padding:11px 14px;font-size:.95rem;color:#1f2937;font-family:inherit;background:#fff;width:100%;box-sizing:border-box;transition:border-color .15s}
.dsr-field input:focus,.dsr-field select:focus{outline:none;border-color:#c2410c;box-shadow:0 0 0 3px rgba(194,65,12,.08)}
.dsr-hint{font-size:.76rem;color:#9ca3af;line-height:1.5}
.dsr-opt{font-size:.75rem;color:#9ca3af;font-weight:400}
.dsr-row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.dsr-row3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px}
.dsr-section-label{font-size:.82rem;font-weight:700;color:#8c7355;border-top:1px solid #e2d2c0;padding-top:12px}

/* 대출 행 */
.dsr-loan-list{display:flex;flex-direction:column;gap:8px;margin-bottom:4px}
.dsr-loan-row{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:center;background:rgba(255,255,255,.55);border:1px solid #e4d8ca;border-radius:10px;padding:10px 12px}
.dsr-loan-row select,.dsr-loan-row input{border:1px solid #ddd4c8;border-radius:8px;padding:8px 10px;font-size:.9rem;font-family:inherit;background:#fff;width:100%;box-sizing:border-box}
.dsr-loan-del{background:none;border:1px solid #fecaca;border-radius:8px;color:#ef4444;cursor:pointer;font-size:.9rem;padding:7px 10px;flex-shrink:0;transition:background .15s}
.dsr-loan-del:hover{background:#fef2f2}
.dsr-add-btn{background:#faf7f2;border:1px solid #eaddcd;border-radius:8px;padding:9px;font-size:.85rem;color:#785a43;font-weight:700;cursor:pointer;font-family:inherit;width:100%;transition:background .15s}
.dsr-add-btn:hover{background:#f3e7d9}

/* 월→연 변환기 */
.dsr-converter{background:#faf7f2;border:1px solid #eaddcd;border-radius:10px;padding:8px 12px;margin-top:-4px}
.dsr-converter summary{font-size:.83rem;color:#8c7355;cursor:pointer;font-weight:600;list-style:none}
.dsr-converter summary::-webkit-details-marker{display:none}
.dsr-converter summary::before{content:'▸ '}
.dsr-converter[open] summary::before{content:'▾ '}
.dsr-conv-inner{display:grid;grid-template-columns:1fr 1fr auto;gap:8px;align-items:center;margin-top:8px}
.dsr-conv-inner input{border:1px solid #ddd4c8;border-radius:8px;padding:8px 10px;font-size:.88rem;font-family:inherit;width:100%;box-sizing:border-box}
.dsr-conv-inner button{background:#785a43;color:#fff;border:none;border-radius:8px;padding:9px 14px;font-size:.85rem;cursor:pointer;font-family:inherit;white-space:nowrap}
.dsr-conv-result{font-size:.88rem;font-weight:700;color:#c2410c;text-align:center}

/* 버튼 */
.dsr-btn{background:#c2410c;color:#fff;border:none;border-radius:10px;padding:13px;font-size:1rem;font-weight:700;cursor:pointer;font-family:inherit;width:100%;transition:background .15s,transform .1s;margin-top:4px}
.dsr-btn:hover{background:#ea580c;transform:translateY(-1px)}

/* 결과 */
.dsr-result{display:none;margin-top:18px;animation:dsrFade .3s ease}
@keyframes dsrFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}

/* 일반 vs 스트레스 DSR 나란히 */
.dsr-compare-hero{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin-bottom:14px}
.dsr-hero-box{border-radius:14px;padding:16px;text-align:center}
.dsr-hero-box.normal{background:linear-gradient(135deg,#fff7f0,#fff1e6);border:1px solid #f5dfc8}
.dsr-hero-box.stress{background:linear-gradient(135deg,#fef2f2,#fee2e2);border:1px solid #fecaca}
.dsr-hero-box-label{font-size:.78rem;font-weight:600;margin-bottom:4px}
.dsr-hero-box.normal .dsr-hero-box-label{color:#8c7355}
.dsr-hero-box.stress .dsr-hero-box-label{color:#991b1b}
.dsr-hero-box-num{font-size:2.2rem;font-weight:900;letter-spacing:-.02em}
.dsr-hero-box.normal .dsr-hero-box-num{color:#c2410c}
.dsr-hero-box.stress .dsr-hero-box-num{color:#dc2626}
.dsr-hero-box-judge{font-size:.78rem;font-weight:600;margin-top:4px;padding:3px 10px;border-radius:20px;display:inline-block}
.judge-safe{background:#dcfce7;color:#15803d}
.judge-warn{background:#fef9c3;color:#854d0e}
.judge-danger{background:#fee2e2;color:#991b1b}
.dsr-compare-vs{text-align:center;font-size:1.2rem;font-weight:700;color:#eaddcd}

/* DSR 게이지 바 */
.dsr-gauge-wrap{margin-bottom:14px}
.dsr-gauge-label-row{display:flex;justify-content:space-between;font-size:.73rem;color:#9ca3af;margin-bottom:4px}
.dsr-gauge-bg{height:14px;border-radius:20px;background:#f1eae1;position:relative;overflow:visible;margin-bottom:10px}
.dsr-gauge-fill{height:100%;border-radius:20px;transition:width .5s ease}
.dsr-gauge-fill.normal{background:linear-gradient(to right,#22c55e,#f59e0b,#ef4444)}
.dsr-gauge-fill.stress{background:linear-gradient(to right,#f87171,#dc2626)}
.dsr-gauge-mark{position:absolute;top:-16px;transform:translateX(-50%);font-size:.68rem;color:#9ca3af}
.dsr-gauge-mark-line{position:absolute;top:0;bottom:0;width:2px;background:#9ca3af;opacity:.5}

/* 카드 그리드 */
.dsr-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px}
.dsr-rc{background:#fff;border:1px solid #f1eae1;border-radius:10px;padding:10px 12px;text-align:center}
.dsr-rc-label{font-size:.72rem;color:#9ca3af;margin-bottom:4px;line-height:1.3}
.dsr-rc-val{font-size:.88rem;font-weight:700;color:#3f2d20}
.dsr-rc.highlight{background:#fdf4ec;border-color:#f5dfd0}
.dsr-rc.highlight .dsr-rc-val{color:#c2410c}
.dsr-rc.green{background:#f0fdf4;border-color:#bbf7d0}
.dsr-rc.green .dsr-rc-val{color:#15803d}

/* 스트레스 DSR 설명 박스 */
.stress-explain{background:#fef2f2;border:1px solid #fecaca;border-radius:10px;padding:12px 14px;font-size:.83rem;color:#991b1b;line-height:1.7;margin-bottom:14px}
.stress-explain strong{color:#7f1d1d}

/* 역산 결과 */
.rv-hero-box{background:linear-gradient(135deg,#fff7f0,#fff1e6);border:1px solid #f5dfc8;border-radius:14px;padding:18px;text-align:center;margin-bottom:14px}
.rv-hero-label{font-size:.82rem;color:#8c7355;font-weight:600;margin-bottom:4px}
.rv-hero-num{font-size:2.2rem;font-weight:800;color:#c2410c}
.rv-hero-sub{font-size:.83rem;color:#8c7355;margin-top:4px}

/* 설명 섹션 */
.info-box{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px 20px;margin:0 0 22px}
.info-box h2{margin:0 0 12px;font-size:1.4rem;color:#13293d}
.info-box h3{margin:20px 0 8px;font-size:1rem;color:#1f5c7a;font-weight:700}
.soft-box{background:#f9fafb;border:1px solid #eceff3;border-radius:12px;padding:12px 16px;margin:8px 0;font-size:.88rem;color:#374151;line-height:1.7}
.tip-box{background:#fef6ec;border:1px solid #f4d9b7;border-radius:12px;padding:12px 16px;margin:8px 0;font-size:.88rem;color:#6a4e35;line-height:1.7}
.warn-box{background:#fef2f2;border:1px solid #fecaca;border-radius:12px;padding:12px 16px;margin:8px 0;font-size:.88rem;color:#991b1b;line-height:1.7}
.dsr-tip{background:#fff;border-left:3px solid #8c7355;border-radius:0 8px 8px 0;padding:10px 14px;font-size:.83rem;color:#6b7280;line-height:1.6;margin-bottom:14px}
.dsr-tip strong{color:#3f2d20}

/* 기준표 */
.rate-table{width:100%;border-collapse:collapse;font-size:.85rem;margin:10px 0}
.rate-table th{background:#f6efe5;padding:9px 12px;font-weight:700;color:#4a3728;border:1px solid #eae1d4;text-align:center}
.rate-table td{padding:8px 12px;border:1px solid #eae1d4;text-align:center;color:#374151}
.rate-table td:first-child{text-align:left;font-weight:600}
.rate-table tr.highlight-row td{background:#fdf4ec;font-weight:700;color:#c2410c}

/* FAQ */
.faq-item{border-top:1px solid #e8ecf1;padding:14px 0}
.faq-item:first-child{border-top:none;padding-top:4px}
.faq-q{font-weight:700;color:#13293d;margin-bottom:5px;font-size:.95rem}
.faq-a{color:#374151;font-size:.88rem;line-height:1.7}

/* 관련 링크 */
.related-links{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.related-links a{display:block;text-decoration:none;background:#ff7a00;border-radius:12px;padding:12px;color:#fff;font-weight:700;font-size:.88rem;text-align:center;transition:background .15s}
.related-links a:hover{background:#e96f00}
.dsr-related{display:flex;flex-wrap:wrap;gap:8px;padding-top:18px;border-top:1px solid #f1eae1;margin-top:8px}
.dsr-related a{font-size:.83rem;color:#785a43;text-decoration:none;border:1px solid #eaddcd;border-radius:20px;padding:5px 14px;background:#faf7f2}
.dsr-related a:hover{background:#f3e7d9}

/* 광고 */
.dsr-ad{margin:24px 0;padding:16px;border:1px solid #e5e7eb;border-radius:14px;background:#fff}

@media(max-width:600px){
  .dsr-hero h1{font-size:1.5rem}
  .dsr-key-nums{grid-template-columns:1fr 1fr}
  .dsr-row2,.dsr-row3{grid-template-columns:1fr}
  .dsr-loan-row{grid-template-columns:1fr 1fr}
  .dsr-loan-del{grid-column:1/-1;width:auto}
  .dsr-cards{grid-template-columns:1fr 1fr}
  .dsr-compare-hero{grid-template-columns:1fr}
  .dsr-compare-vs{transform:rotate(90deg)}
  .related-links{grid-template-columns:1fr}
  .dsr-conv-inner{grid-template-columns:1fr 1fr}
}
</style>

<div class="dsr-wrap">

  <section class="dsr-hero">
    <div class="dsr-badge">금융·대출 계산기</div>
    <h1>DSR 계산기 2026</h1>
    <p>총부채원리금상환비율(DSR)을 계산하고 스트레스 DSR과 동시에 비교합니다.<br>
    소득 기준 최대 대출 가능 한도 역산도 바로 확인하세요.</p>
  </section>

  <!-- 2026 핵심 수치 -->
  <div class="dsr-key-nums">
    <div class="dsr-kn">
      <div class="dsr-kn-label">은행권 DSR 한도</div>
      <div class="dsr-kn-val">40%</div>
      <div class="dsr-kn-sub">시중·지방·인터넷은행</div>
    </div>
    <div class="dsr-kn">
      <div class="dsr-kn-label">비은행권 DSR 한도</div>
      <div class="dsr-kn-val">50%</div>
      <div class="dsr-kn-sub">저축은행·보험·카드사</div>
    </div>
    <div class="dsr-kn">
      <div class="dsr-kn-label">수도권 스트레스 가산</div>
      <div class="dsr-kn-val">+3.0%p</div>
      <div class="dsr-kn-sub">주담대 변동·혼합금리</div>
    </div>
    <div class="dsr-kn">
      <div class="dsr-kn-label">지방 스트레스 가산</div>
      <div class="dsr-kn-val">+0.75%p</div>
      <div class="dsr-kn-sub">2026년 상반기 한시 유지</div>
    </div>
  </div>

  <section class="dsr-card">
    <h2>DSR 계산</h2>

    <nav class="dsr-tabs">
      <button class="dsr-tab active" onclick="dsrTab('calc')">DSR 계산</button>
      <button class="dsr-tab" onclick="dsrTab('reverse')">대출 한도 역산</button>
      <button class="dsr-tab" onclick="dsrTab('info')">수급 조건 안내</button>
    </nav>

    <!-- ① DSR 계산 -->
    <div id="dsr-panel-calc">
      <div class="dsr-form">
        <div class="dsr-field">
          <label>연간 소득 (세전, 원)</label>
          <input type="text" id="d-income" inputmode="numeric" placeholder="예: 60,000,000" oninput="fmtDsr(this)">
          <div class="dsr-hint">근로소득·사업소득·임대소득 합산. 세전 연봉 기준</div>
        </div>

        <div class="dsr-section-label">상환 중인 대출 내역</div>
        <div class="dsr-hint" style="margin-top:-8px">월 납입액 입력 → 자동으로 연간 원리금 변환. 직접 연간 금액도 입력 가능합니다.</div>

        <div class="dsr-loan-list" id="d-loan-list">
          <!-- 기본 1행 -->
          <div class="dsr-loan-row" data-idx="0">
            <select class="dsr-ltype">
              <option value="mortgage">주택담보대출 (변동)</option>
              <option value="mortgage-fixed">주택담보대출 (고정)</option>
              <option value="jeonse">전세자금대출 (DSR 제외)</option>
              <option value="credit">신용대출</option>
              <option value="car">자동차할부</option>
              <option value="card">카드론·현금서비스</option>
              <option value="other">기타</option>
            </select>
            <input type="text" class="dsr-lamt" inputmode="numeric" placeholder="월 납입액 (원)" oninput="fmtDsr(this)">
            <button class="dsr-loan-del" onclick="delLoan(this)" title="삭제">✕</button>
          </div>
        </div>
        <button class="dsr-add-btn" onclick="addLoan()">+ 대출 추가</button>

        <!-- 월→연 변환기 -->
        <details class="dsr-converter">
          <summary>월 납입액 → 연간 원리금 변환기</summary>
          <div class="dsr-conv-inner">
            <input type="text" id="conv-monthly" inputmode="numeric" placeholder="월 납입액 (원)" oninput="fmtDsr(this)">
            <button onclick="convMonthly()">변환</button>
            <div class="dsr-conv-result" id="conv-result">—</div>
          </div>
        </details>

        <!-- 스트레스 DSR 옵션 -->
        <div class="dsr-field">
          <label>스트레스 DSR 가산금리 선택</label>
          <select id="d-stress">
            <option value="0">적용 안 함 (일반 DSR만)</option>
            <option value="3.0" selected>수도권 주담대 변동금리 (+3.0%p)</option>
            <option value="0.75">지방 주담대 변동금리 (+0.75%p)</option>
            <option value="1.5">신용대출 1억 초과 변동금리 (+1.5%p)</option>
          </select>
          <div class="dsr-hint">스트레스 DSR: 금리 상승 가능성을 감안해 가산금리를 더한 금리로 원리금을 재산출해 DSR을 계산합니다</div>
        </div>

        <button class="dsr-btn" onclick="calcDsr()">DSR 계산하기</button>
      </div>

      <div id="dsr-result" class="dsr-result">
        <!-- 일반 vs 스트레스 DSR 나란히 -->
        <div class="dsr-compare-hero">
          <div class="dsr-hero-box normal">
            <div class="dsr-hero-box-label">일반 DSR</div>
            <div class="dsr-hero-box-num" id="r-dsr-normal">—</div>
            <div class="dsr-hero-box-judge" id="r-judge-normal">—</div>
          </div>
          <div class="dsr-compare-vs">VS</div>
          <div class="dsr-hero-box stress">
            <div class="dsr-hero-box-label">스트레스 DSR <span id="r-stress-label"></span></div>
            <div class="dsr-hero-box-num" id="r-dsr-stress">—</div>
            <div class="dsr-hero-box-judge" id="r-judge-stress">—</div>
          </div>
        </div>

        <!-- 일반 DSR 게이지 -->
        <div class="dsr-gauge-wrap">
          <div class="dsr-gauge-label-row">
            <span>0%</span>
            <span>은행 한도 40%</span>
            <span>비은행 50%</span>
            <span>100%</span>
          </div>
          <div class="dsr-gauge-bg">
            <div class="dsr-gauge-fill normal" id="r-gauge-normal" style="width:0%"></div>
            <div class="dsr-gauge-mark" style="left:40%">40%</div>
            <div class="dsr-gauge-mark-line" style="left:40%"></div>
            <div class="dsr-gauge-mark" style="left:50%">50%</div>
            <div class="dsr-gauge-mark-line" style="left:50%"></div>
          </div>
          <!-- 스트레스 DSR 게이지 -->
          <div class="dsr-gauge-bg" id="r-stress-gauge-wrap">
            <div class="dsr-gauge-fill stress" id="r-gauge-stress" style="width:0%"></div>
            <div class="dsr-gauge-mark" style="left:40%">40%</div>
            <div class="dsr-gauge-mark-line" style="left:40%"></div>
          </div>
          <div class="dsr-hint" style="margin-top:4px">위: 일반 DSR / 아래: 스트레스 DSR</div>
        </div>

        <div class="dsr-cards">
          <div class="dsr-rc"><div class="dsr-rc-label">연간 소득</div><div class="dsr-rc-val" id="r-income">—</div></div>
          <div class="dsr-rc highlight"><div class="dsr-rc-label">연간 원리금 합계</div><div class="dsr-rc-val" id="r-repay">—</div></div>
          <div class="dsr-rc green"><div class="dsr-rc-label">은행권 잔여 한도 (연)</div><div class="dsr-rc-val" id="r-remain">—</div></div>
          <div class="dsr-rc"><div class="dsr-rc-label">월 상환액 합계</div><div class="dsr-rc-val" id="r-monthly">—</div></div>
        </div>

        <div class="stress-explain" id="r-stress-explain" style="display:none"></div>

        <div class="dsr-tip">
          <strong>DSR이 40%를 초과하면</strong> 은행권 신규 대출이 원칙적으로 어렵습니다.
          전세자금대출·정책금융은 DSR 산정에서 제외됩니다.
          기존 대출을 상환하거나 만기를 연장해 월 원리금을 줄이면 DSR을 낮출 수 있습니다.
        </div>
      </div>
    </div>

    <!-- ② 대출 한도 역산 -->
    <div id="dsr-panel-reverse" style="display:none">
      <div class="dsr-form">
        <div class="dsr-field">
          <label>연간 소득 (세전, 원)</label>
          <input type="text" id="rv-income" inputmode="numeric" placeholder="예: 60,000,000" oninput="fmtDsr(this)">
        </div>
        <div class="dsr-field">
          <label>기존 연간 원리금 합계 (원) <span class="dsr-opt">선택 — 기존 대출 없으면 0</span></label>
          <input type="text" id="rv-existing" inputmode="numeric" placeholder="예: 3,600,000" oninput="fmtDsr(this)">
          <div class="dsr-hint">기존 대출 월 납입액 × 12 = 연간 원리금</div>
        </div>
        <div class="dsr-row3">
          <div class="dsr-field">
            <label>신규 대출 이자율 (%)</label>
            <input type="number" id="rv-rate" value="4.5" step="0.1" min="0" max="30">
          </div>
          <div class="dsr-field">
            <label>대출 기간 (년)</label>
            <input type="number" id="rv-term" value="30" step="1" min="1" max="50">
          </div>
          <div class="dsr-field">
            <label>목표 DSR 기준</label>
            <select id="rv-limit">
              <option value="0.40">은행권 40%</option>
              <option value="0.50">비은행권 50%</option>
              <option value="0.30">보수적 30%</option>
            </select>
          </div>
        </div>
        <div class="dsr-field">
          <label>스트레스 DSR 가산 <span class="dsr-opt">선택</span></label>
          <select id="rv-stress">
            <option value="0">적용 안 함 (일반 DSR 기준)</option>
            <option value="3.0">수도권 주담대 변동금리 (+3.0%p)</option>
            <option value="0.75">지방 주담대 변동금리 (+0.75%p)</option>
            <option value="1.5">신용대출 1억 초과 (+1.5%p)</option>
          </select>
          <div class="dsr-hint">스트레스 DSR 적용 시 실제 대출 한도가 더 낮아집니다</div>
        </div>
        <button class="dsr-btn" onclick="calcReverse()">최대 대출 한도 계산하기</button>
      </div>

      <div id="rv-result" class="dsr-result">
        <div class="rv-hero-box">
          <div class="rv-hero-label">최대 대출 가능 원금 (추정)</div>
          <div class="rv-hero-num" id="rv-max-loan">—</div>
          <div class="rv-hero-sub" id="rv-sub">—</div>
        </div>
        <div class="dsr-cards">
          <div class="dsr-rc"><div class="dsr-rc-label">DSR 기준 연 상환 가능</div><div class="dsr-rc-val" id="rv-annual-avail">—</div></div>
          <div class="dsr-rc"><div class="dsr-rc-label">신규 월 납입액 (원리금)</div><div class="dsr-rc-val" id="rv-monthly-new">—</div></div>
          <div class="dsr-rc highlight"><div class="dsr-rc-label">총 이자 (기간 합계)</div><div class="dsr-rc-val" id="rv-total-int">—</div></div>
          <div class="dsr-rc"><div class="dsr-rc-label">적용 DSR</div><div class="dsr-rc-val" id="rv-dsr">—</div></div>
        </div>
        <div id="rv-stress-note" style="display:none" class="stress-explain"></div>
        <div class="dsr-tip">
          <strong>주의:</strong> 원리금균등상환 방식 기준 추정치입니다.
          실제 대출 한도는 신용등급·담보가치·LTV 등 금융기관 심사 기준에 따라 달라집니다.
          스트레스 DSR 적용 시 일반 DSR 기준보다 한도가 줄어듭니다.
        </div>
      </div>
    </div>

    <!-- ③ 기준 안내 -->
    <div id="dsr-panel-info" style="display:none">
      <div class="soft-box">
        <strong>DSR(총부채원리금상환비율)이란?</strong><br>
        연간 소득 대비 모든 금융부채의 연간 원리금 상환액 비율입니다.<br>
        <strong>DSR = 연간 원리금 합계 ÷ 연간 소득 × 100</strong>
      </div>
      <table class="rate-table">
        <thead><tr><th>대출 유형</th><th>DSR 적용</th><th>스트레스 가산</th><th>비고</th></tr></thead>
        <tbody>
          <tr class="highlight-row"><td>수도권 주담대 (변동·혼합)</td><td>포함</td><td>+3.0%p</td><td>2025.10 강화</td></tr>
          <tr><td>지방 주담대 (변동)</td><td>포함</td><td>+0.75%p</td><td>2026 상반기 한시</td></tr>
          <tr><td>주담대 (고정금리)</td><td>포함</td><td>없음</td><td>5년 이상 고정</td></tr>
          <tr><td>신용대출 1억 초과 (변동)</td><td>포함</td><td>+1.5%p</td><td></td></tr>
          <tr><td>신용대출 1억 이하</td><td>포함</td><td>없음</td><td></td></tr>
          <tr><td>전세자금대출</td><td>제외</td><td>—</td><td>대부분 DSR 산정 제외</td></tr>
          <tr><td>정책금융 (보금자리론 등)</td><td>일부 제외</td><td>—</td><td>상품별 확인 필요</td></tr>
          <tr><td>카드론·현금서비스</td><td>포함</td><td>없음</td><td>잔액 연간 환산</td></tr>
        </tbody>
      </table>
    </div>

  </section>

  <!-- 광고 -->
  <div class="dsr-ad">
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- 스트레스 DSR 설명 -->
  <section class="info-box">
    <h2>스트레스 DSR이란? — 2026년 꼭 알아야 하는 이유</h2>
    <p>2025년 7월부터 전면 시행된 <strong>스트레스 DSR</strong>은 금리가 오를 상황을 감안해
    현재 금리에 가산금리를 더한 금리로 원리금을 다시 계산해 DSR을 산출하는 방식입니다.</p>
    <div class="warn-box">
      <strong>핵심: 같은 대출이라도 스트레스 DSR 기준으로는 DSR이 더 높게 산출됩니다.</strong><br>
      수도권 주담대 변동금리 대출은 현재 금리에 +3.0%p를 더한 금리로 원리금을 재계산합니다.
      예를 들어 현재 금리 4.5%라면 7.5%로 원리금을 계산해 DSR에 반영합니다.
      이로 인해 실제 대출 한도가 일반 DSR 기준보다 10~20% 줄어드는 경우가 많습니다.
    </div>
    <h3>스트레스 DSR 가산금리 (2026년 기준)</h3>
    <div class="soft-box">
      <table class="rate-table">
        <thead><tr><th>대출 유형</th><th>가산금리</th><th>시행 시점</th></tr></thead>
        <tbody>
          <tr class="highlight-row"><td>수도권 주담대 (변동·혼합금리)</td><td>+3.0%p</td><td>2025.10.15 강화</td></tr>
          <tr><td>지방 주담대 (변동금리)</td><td>+0.75%p</td><td>2026 상반기 한시</td></tr>
          <tr><td>신용대출 1억 초과 (변동)</td><td>+1.5%p</td><td>2025.7~</td></tr>
          <tr><td>고정금리 대출 (5년 이상)</td><td>없음</td><td>적용 제외</td></tr>
        </tbody>
      </table>
    </div>
    <div class="tip-box">
      <strong>대출 전략 팁:</strong> 스트레스 DSR 적용 대상인 변동금리 주담대를 받으려면
      소득 대비 월 납입액을 더 낮게 유지해야 합니다.
      고정금리 대출은 스트레스 가산이 없으므로 DSR 한도 내에서 더 많이 빌릴 수 있습니다.
      단, 금리 자체는 고정금리가 더 높을 수 있으므로 총이자를 함께 비교하세요.
    </div>
  </section>

  <!-- 광고 -->
  <div class="dsr-ad">
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3758454239921831" data-ad-slot="7492664289" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- FAQ -->
  <section class="info-box">
    <h2>자주 묻는 질문</h2>
    <div class="faq-item">
      <div class="faq-q">Q. DSR 40%란 정확히 어떤 의미인가요?</div>
      <div class="faq-a">연간 소득의 40%를 초과하는 금액을 대출 원리금으로 상환할 수 없다는 의미입니다. 예를 들어 연 소득 6,000만원이면 연간 원리금 합계가 2,400만원(월 200만원)을 넘으면 은행권 신규 대출이 어렵습니다.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Q. 전세자금대출은 DSR에 포함되나요?</div>
      <div class="faq-a">대부분의 전세자금대출은 DSR 산정에서 제외됩니다. 단, 일부 비보증 전세대출이나 상품에 따라 포함될 수 있으니 취급 금융기관에 확인하세요.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Q. DSR을 낮추는 방법이 있나요?</div>
      <div class="faq-a">① 기존 신용대출·카드론 상환, ② 대출 만기 연장(월 납입액 감소), ③ 고정금리 전환(스트레스 가산 제거), ④ 소득 증빙 강화(부업·임대소득 포함) 등이 있습니다. DSR은 소득이 늘거나 부채가 줄면 낮아집니다.</div>
    </div>
    <div class="faq-item">
      <div class="faq-q">Q. 스트레스 DSR과 일반 DSR 중 어느 기준으로 대출 한도가 결정되나요?</div>
      <div class="faq-a">둘 다 계산해서 더 엄격한 기준(낮은 한도)이 적용됩니다. 수도권 변동금리 주담대를 받으려면 스트레스 DSR 기준으로도 40% 이하여야 합니다.</div>
    </div>
  </section>

  <!-- 관련 계산기 -->
  <section class="info-box">
    <h2>함께 보면 좋은 계산기</h2>
    <div class="related-links">
      <a href="/finance/loan/">대출 계산기<br><small style="font-weight:400;font-size:.78rem">상환 스케줄·중도상환</small></a>
      <a href="/realestate/acquisition-tax/">취득세 계산기<br><small style="font-weight:400;font-size:.78rem">주택수·조정지역 자동 반영</small></a>
      <a href="/salary/net-pay/">연봉 실수령 계산기<br><small style="font-weight:400;font-size:.78rem">소득 파악용</small></a>
    </div>
  </section>

  <nav class="dsr-related">
    <a href="/realestate/">← 부동산 허브</a>
    <a href="/finance/loan/">대출 계산기</a>
    <a href="/realestate/acquisition-tax/">취득세 계산기</a>
  </nav>

</div>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"DSR 40%란 정확히 어떤 의미인가요?","acceptedAnswer":{"@type":"Answer","text":"연간 소득의 40%를 초과하는 금액을 대출 원리금으로 상환할 수 없다는 의미입니다. 연 소득 6,000만원이면 연간 원리금 합계 2,400만원(월 200만원)을 초과하면 은행권 신규 대출이 어렵습니다."}},
  {"@type":"Question","name":"스트레스 DSR이란 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"금리 상승 가능성을 감안해 현재 금리에 가산금리(수도권 주담대 +3.0%p 등)를 더한 금리로 원리금을 재계산해 DSR을 산출하는 방식입니다. 2025년 7월부터 전면 시행됐습니다."}},
  {"@type":"Question","name":"전세자금대출은 DSR에 포함되나요?","acceptedAnswer":{"@type":"Answer","text":"대부분의 전세자금대출은 DSR 산정에서 제외됩니다. 단, 일부 비보증 전세대출은 포함될 수 있으니 취급 금융기관에 확인하세요."}}
]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
  {"@type":"ListItem","position":2,"name":"금융 계산기","item":"https://calculator.khaistory.com/finance/"},
  {"@type":"ListItem","position":3,"name":"DSR 계산기","item":"https://calculator.khaistory.com/finance/dsr/"}
]}
</script>

<script>
(function(){
'use strict';

/* ── 유틸 ── */
function fmtDsr(el){
  const r=el.value.replace(/[^0-9]/g,'');
  el.value=r?parseInt(r).toLocaleString('ko-KR'):'';
  el.dataset.raw=r;
}
function gD(id){
  const el=document.getElementById(id);
  if(!el) return 0;
  if(el.type==='number') return parseFloat(el.value)||0;
  const raw=el.dataset.raw||el.value.replace(/[^0-9]/g,'');
  return parseInt(raw)||0;
}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}

/* ── 탭 ── */
function dsrTab(t){
  ['calc','reverse','info'].forEach(x=>{
    document.getElementById('dsr-panel-'+x).style.display=x===t?'':'none';
  });
  document.querySelectorAll('.dsr-tab').forEach((b,i)=>{
    b.classList.toggle('active',['calc','reverse','info'][i]===t);
  });
}

/* ── 대출 행 추가/삭제 ── */
let loanIdx=1;
function addLoan(){
  const div=document.createElement('div');
  div.className='dsr-loan-row';
  div.dataset.idx=loanIdx++;
  div.innerHTML=`
    <select class="dsr-ltype">
      <option value="mortgage">주택담보대출 (변동)</option>
      <option value="mortgage-fixed">주택담보대출 (고정)</option>
      <option value="jeonse">전세자금대출 (DSR 제외)</option>
      <option value="credit">신용대출</option>
      <option value="car">자동차할부</option>
      <option value="card">카드론·현금서비스</option>
      <option value="other">기타</option>
    </select>
    <input type="text" class="dsr-lamt" inputmode="numeric" placeholder="월 납입액 (원)" oninput="fmtDsr(this)">
    <button class="dsr-loan-del" onclick="delLoan(this)" title="삭제">✕</button>`;
  document.getElementById('d-loan-list').appendChild(div);
}
function delLoan(btn){
  const rows=document.querySelectorAll('.dsr-loan-row');
  if(rows.length<=1){alert('최소 1개의 대출 항목이 필요합니다.');return;}
  btn.closest('.dsr-loan-row').remove();
}

/* ── 월→연 변환기 ── */
function convMonthly(){
  const el=document.getElementById('conv-monthly');
  const m=parseInt(el.dataset.raw||el.value.replace(/[^0-9]/g,'')||'0')||0;
  document.getElementById('conv-result').textContent=m?'연간: '+fw(m*12):'—';
}

/* ── DSR 판정 ── */
function getDsrJudge(pct){
  if(pct<=30) return {text:'양호', cls:'judge-safe'};
  if(pct<=40) return {text:'한도 내', cls:'judge-warn'};
  if(pct<=50) return {text:'은행 초과', cls:'judge-danger'};
  return {text:'초과 위험', cls:'judge-danger'};
}

/* ── 스트레스 원리금 계산 ── */
function pmt(p,mr,n){
  if(mr===0) return p/n;
  return p*mr*Math.pow(1+mr,n)/(Math.pow(1+mr,n)-1);
}
function stressAnnual(loanType, monthlyPayment, stressAdd){
  // 전세자금대출은 제외
  if(loanType==='jeonse') return 0;
  // 고정금리 주담대는 스트레스 미적용
  if(loanType==='mortgage-fixed') return monthlyPayment*12;
  // 그 외 스트레스 가산 적용 (이미 납입 중인 대출이므로 단순 월납입 × 12 비율 증가로 근사)
  if(stressAdd===0) return monthlyPayment*12;
  // 잔여 원금을 알 수 없으므로: 기존 금리를 4.5% 가정, 스트레스 금리로 재산출 비율
  const baseRate=4.5/100/12;
  const stressRate=(4.5+stressAdd)/100/12;
  const n=300; // 25년 가정
  const baseMonthly=pmt(1,baseRate,n);
  const stressMonthly=pmt(1,stressRate,n);
  const ratio=stressMonthly/baseMonthly;
  return Math.round(monthlyPayment*ratio)*12;
}

/* ── ① DSR 계산 ── */
function calcDsr(){
  const income=gD('d-income');
  if(!income){alert('연간 소득을 입력해 주세요.');return;}
  const stressAdd=parseFloat(document.getElementById('d-stress').value)||0;

  let normalAnnual=0, stressAnnualTotal=0;
  document.querySelectorAll('.dsr-loan-row').forEach(row=>{
    const ltype=row.querySelector('.dsr-ltype').value;
    const amtEl=row.querySelector('.dsr-lamt');
    const monthly=parseInt(amtEl.dataset.raw||amtEl.value.replace(/[^0-9]/g,'')||'0')||0;
    if(ltype==='jeonse'){
      // DSR 제외
    } else {
      normalAnnual+=monthly*12;
      stressAnnualTotal+=stressAnnual(ltype,monthly,stressAdd);
    }
  });

  const normalDsr=(normalAnnual/income*100);
  const stressDsr=(stressAnnualTotal/income*100);
  const remain=Math.max(0,income*0.40-normalAnnual);
  const judgeN=getDsrJudge(normalDsr);
  const judgeS=getDsrJudge(stressDsr);

  document.getElementById('dsr-result').style.display='block';
  document.getElementById('r-dsr-normal').textContent=normalDsr.toFixed(1)+'%';
  document.getElementById('r-dsr-stress').textContent=stressAdd>0?stressDsr.toFixed(1)+'%':'미적용';
  document.getElementById('r-stress-label').textContent=stressAdd>0?`(+${stressAdd}%p 가산)`:'';
  document.getElementById('r-judge-normal').textContent=judgeN.text;
  document.getElementById('r-judge-normal').className='dsr-hero-box-judge '+judgeN.cls;
  document.getElementById('r-judge-stress').textContent=stressAdd>0?judgeS.text:'—';
  document.getElementById('r-judge-stress').className='dsr-hero-box-judge '+(stressAdd>0?judgeS.cls:'');

  document.getElementById('r-gauge-normal').style.width=Math.min(normalDsr,100).toFixed(1)+'%';
  document.getElementById('r-gauge-stress').style.width=stressAdd>0?Math.min(stressDsr,100).toFixed(1)+'%':'0%';
  document.getElementById('r-stress-gauge-wrap').style.opacity=stressAdd>0?'1':'0.3';

  document.getElementById('r-income').textContent=fw(income);
  document.getElementById('r-repay').textContent=fw(normalAnnual);
  document.getElementById('r-remain').textContent=fw(remain);
  document.getElementById('r-monthly').textContent=fw(Math.round(normalAnnual/12));

  const explainEl=document.getElementById('r-stress-explain');
  if(stressAdd>0){
    explainEl.style.display='';
    explainEl.innerHTML=`<strong>스트레스 DSR 적용 결과:</strong> 가산금리 +${stressAdd}%p 반영 시 DSR이 ${normalDsr.toFixed(1)}% → ${stressDsr.toFixed(1)}%로 높아집니다. 스트레스 DSR 기준으로도 40% 이하여야 은행권 대출이 가능합니다.`;
  } else {
    explainEl.style.display='none';
  }
}

/* ── ② 대출 한도 역산 ── */
function calcReverse(){
  const income=gD('rv-income');
  if(!income){alert('연간 소득을 입력해 주세요.');return;}
  const existing=gD('rv-existing');
  const rate=parseFloat(document.getElementById('rv-rate').value)||4.5;
  const term=parseInt(document.getElementById('rv-term').value)||30;
  const limit=parseFloat(document.getElementById('rv-limit').value)||0.40;
  const stressAdd=parseFloat(document.getElementById('rv-stress').value)||0;

  const maxAnnual=income*limit;
  const availForNew=Math.max(0,maxAnnual-existing);
  const maxMonthly=availForNew/12;

  // 스트레스 적용 시: 실제 금리의 월납입이 스트레스 금리로 재산출될 때 한도 내로 맞춰야 함
  // stress 적용 시 effective rate = rate + stressAdd
  const effectiveRate = stressAdd > 0 ? rate + stressAdd : rate;
  const mr=effectiveRate/100/12;
  const n=term*12;
  // maxMonthly(스트레스 기준)로 역산한 원금
  let maxLoan=0;
  if(mr===0) maxLoan=maxMonthly*n;
  else maxLoan=maxMonthly*(1-Math.pow(1+mr,-n))/mr;

  // 실제 납입액은 원래 금리로
  const actualMr=rate/100/12;
  const actualMonthly=pmt(maxLoan,actualMr,n);
  const totalInterest=actualMonthly*n-maxLoan;
  const actualDsr=(existing+actualMonthly*12)/income*100;

  document.getElementById('rv-result').style.display='block';
  document.getElementById('rv-max-loan').textContent=fw(Math.round(maxLoan));
  document.getElementById('rv-sub').textContent=
    `DSR ${(limit*100).toFixed(0)}% 기준 · 금리 ${rate}% · ${term}년 만기`+
    (stressAdd>0?` · 스트레스 +${stressAdd}%p 반영`:'');
  document.getElementById('rv-annual-avail').textContent=fw(Math.round(availForNew));
  document.getElementById('rv-monthly-new').textContent=fw(Math.round(actualMonthly));
  document.getElementById('rv-total-int').textContent=fw(Math.round(totalInterest));
  document.getElementById('rv-dsr').textContent=actualDsr.toFixed(1)+'%';

  const noteEl=document.getElementById('rv-stress-note');
  if(stressAdd>0){
    noteEl.style.display='';
    noteEl.innerHTML=`<strong>스트레스 DSR 반영 결과:</strong> +${stressAdd}%p 가산금리로 계산했습니다. 스트레스 DSR 미적용 시보다 대출 한도가 줄어들었습니다. 실제 납입액은 원래 금리(${rate}%) 기준입니다.`;
  } else {
    noteEl.style.display='none';
  }
}

/* 전역 노출 */
window.fmtDsr=fmtDsr;
window.dsrTab=dsrTab;
window.addLoan=addLoan;
window.delLoan=delLoan;
window.convMonthly=convMonthly;
window.calcDsr=calcDsr;
window.calcReverse=calcReverse;
})();
</script>

