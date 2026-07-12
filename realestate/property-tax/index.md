---
layout: default
title: "종합부동산세 계산기 2026 | 종부세 과세표준·세율·세액공제 계산"
description: "2026년 종합부동산세(종부세) 계산기. 공시가격 합산, 기본공제(9억·12억), 공정시장가액비율 60%, 고령자·장기보유 세액공제, 농어촌특별세까지 자동 반영."
permalink: /realestate/property-tax/
canonical: https://calculator.khaistory.com/realestate/property-tax/
section: realestate
og_title: "종합부동산세 계산기 2026 — 공시가격·세액공제 자동 반영"
og_description: "1세대1주택 12억 공제, 공정시장가액비율 60%, 고령·장기보유 세액공제까지. 2026년 기준 종부세 참고용 계산기."
---

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>

<style>
.pt-page{max-width:860px;margin:0 auto;color:#1f2937;line-height:1.8;font-size:17px}
.pt-hero{background:linear-gradient(135deg,#f8efe5 0%,#f3e7d9 100%);border:1px solid #e3d4c5;border-radius:22px;padding:28px 24px;margin:18px 0 24px;box-shadow:0 10px 30px rgba(0,0,0,.04)}
.pt-hero h1{margin:0 0 12px;font-size:34px;line-height:1.25;letter-spacing:-.3px;color:#13293d}
.pt-hero p{margin:0;color:#374151}
.pt-badge{display:inline-block;margin-bottom:12px;padding:7px 12px;border-radius:999px;background:#fff;border:1px solid #dbc9b7;font-size:13px;font-weight:800;color:#6b4f34}
.pt-summary{background:#fffaf5;border:1px solid #eadfce;border-radius:18px;padding:18px;margin:0 0 24px;font-size:15px;color:#374151}
.pt-card{background:#f5ebdf;border:1px solid #e2d2c0;border-radius:22px;padding:24px 20px;box-shadow:0 12px 28px rgba(0,0,0,.04);margin-bottom:26px}
.pt-card h2{margin:0 0 6px;font-size:28px;line-height:1.3;color:#13293d}
.pt-mini{margin:0 0 18px;color:#5b6470;font-size:15px}

/* 탭 */
.pt-tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:20px}
.pt-tab{height:46px;border:1px solid #d0bca8;border-radius:12px;background:#fffaf6;font-size:15px;font-weight:800;color:#644c36;cursor:pointer;font-family:inherit;transition:all .15s}
.pt-tab.active{background:#ff7a00;color:#fff;border-color:#ff7a00}

/* 폼 */
.pt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 16px}
.pt-field{display:flex;flex-direction:column;gap:7px}
.pt-field label{font-size:15px;font-weight:800;color:#243447;line-height:1.4}
.pt-field input,.pt-field select{width:100%;height:48px;padding:0 14px;border:1px solid #d5c6b5;border-radius:12px;background:#fff;box-sizing:border-box;font-size:16px;color:#111827;font-family:inherit;transition:border-color .15s}
.pt-field input:focus,.pt-field select:focus{outline:none;border-color:#ff7a00;box-shadow:0 0 0 3px rgba(255,122,0,.1)}
.pt-field small{display:block;margin-top:2px;color:#6b7280;font-size:13px;line-height:1.55}
.pt-full{grid-column:1/-1}
.pt-section-label{grid-column:1/-1;font-size:14px;font-weight:800;color:#8c7355;border-top:1px solid #e2d2c0;padding-top:14px;margin-top:2px}
.pt-checks{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px 16px;margin-top:4px}
.pt-check{background:rgba(255,255,255,.55);border:1px solid #e4d8ca;border-radius:14px;padding:12px 14px}
.pt-check label{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:700;color:#243447;cursor:pointer}
.pt-check input[type="checkbox"]{width:18px;height:18px;accent-color:#ff7a00;flex-shrink:0}

/* 버튼 */
.pt-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
.pt-btn{display:inline-flex;align-items:center;justify-content:center;min-width:132px;height:48px;padding:0 18px;border:0;border-radius:12px;background:#ff7a00;color:#fff;font-size:16px;font-weight:800;cursor:pointer;text-decoration:none;font-family:inherit;transition:background .15s}
.pt-btn:hover{background:#e96f00}
.pt-btn.secondary{background:#1f5c7a}
.pt-btn.secondary:hover{background:#174d68}
.pt-btn.light{background:#fff;color:#1f4f67;border:1px solid #cfdfe8}
.pt-btn.light:hover{background:#f0f7fb}

/* 결과 */
.result-box{display:none;margin-top:18px;padding:20px;border-radius:16px;background:rgba(255,255,255,.8);border:1px solid #e6d8c9}
.result-box.show{display:block;animation:ptFade .3s ease}
@keyframes ptFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.result-title{margin:0 0 14px;font-size:20px;font-weight:900;color:#13293d}
.result-hero{background:linear-gradient(135deg,#fff7f0,#fff1e6);border:1px solid #f5dfc8;border-radius:14px;padding:16px 18px;margin-bottom:14px;text-align:center}
.result-hero-label{font-size:13px;color:#8c7355;font-weight:600;margin-bottom:4px}
.result-hero-num{font-size:2rem;font-weight:900;color:#ff7a00;letter-spacing:-.02em}
.result-hero-sub{font-size:13px;color:#8c7355;margin-top:4px}
.result-zero{background:linear-gradient(135deg,#e6f7ef,#f0fdf4);border:1px solid #a7f0c4;border-radius:14px;padding:16px 18px;margin-bottom:14px;text-align:center;color:#15803d;font-weight:700;font-size:1.1rem;display:none}
.result-list{margin:0;padding:0;list-style:none}
.result-list li{display:flex;justify-content:space-between;gap:14px;padding:9px 0;border-bottom:1px dashed #dacdbf;font-size:15px}
.result-list li:last-child{border-bottom:0}
.result-list li span{color:#5b6470}
.result-list li b{color:#13293d;text-align:right}
.result-list li.hl b{color:#ff7a00;font-size:1.05rem}
.result-list li.gr b{color:#15803d}
.result-note{margin-top:14px;padding:12px 14px;border-radius:12px;background:#fff7ef;border:1px solid #eed8c4;font-size:14px;color:#6a4e35;line-height:1.7}

/* 설명 섹션 */
.info-box{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px 20px;margin:0 0 22px}
.info-box h2{margin:0 0 12px;font-size:24px;line-height:1.3;color:#13293d}
.info-box h3{margin:22px 0 8px;font-size:18px;color:#1f5c7a;font-weight:700}
.soft-box{background:#f9fafb;border:1px solid #eceff3;border-radius:14px;padding:14px 16px;margin:10px 0;font-size:15px;color:#374151;line-height:1.7}
.tip-box{background:#fef6ec;border:1px solid #f4d9b7;border-radius:14px;padding:14px 16px;margin:10px 0;font-size:15px;color:#6a4e35;line-height:1.7}
.warn-box{background:#fef2f2;border:1px solid #fecaca;border-radius:14px;padding:14px 16px;margin:10px 0;font-size:15px;color:#991b1b;line-height:1.7}

/* 세율표 */
.rate-table{width:100%;border-collapse:collapse;margin:12px 0;font-size:14px}
.rate-table th{background:#f6efe5;padding:9px 12px;font-weight:700;color:#4a3728;border:1px solid #eae1d4;text-align:center}
.rate-table td{padding:8px 12px;border:1px solid #eae1d4;text-align:right;color:#374151}
.rate-table td:first-child{text-align:left}
.rate-table tr:nth-child(even) td{background:#faf8f5}
.rate-table .apply-row td{background:#fff7f0;font-weight:700;color:#c2410c}

/* 세액공제 표 */
.credit-table{width:100%;border-collapse:collapse;margin:12px 0;font-size:14px}
.credit-table th{background:#f6efe5;padding:9px 12px;font-weight:700;color:#4a3728;border:1px solid #eae1d4;text-align:center}
.credit-table td{padding:8px 12px;border:1px solid #eae1d4;text-align:center;color:#374151}

/* FAQ */
.faq-item{border-top:1px solid #e8ecf1;padding:16px 0}
.faq-item:first-child{border-top:0;padding-top:4px}
.faq-q{font-weight:900;color:#13293d;margin-bottom:6px;font-size:16px}
.faq-a{color:#374151;font-size:15px;line-height:1.7}

/* 링크 */
.link-row{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0 4px}
.link-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 16px;border-radius:12px;background:#1f5c7a;color:#fff!important;text-decoration:none!important;font-weight:800;font-size:15px;transition:background .15s}
.link-btn:hover{background:#174d68}
.link-btn.alt{background:#ff7a00}
.link-btn.alt:hover{background:#e96f00}

/* 관련 링크 */
.related-links{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:14px}
.related-links a{display:block;text-decoration:none;background:#ff7a00;border-radius:14px;padding:14px;color:#fff;font-weight:800;font-size:15px;transition:all .2s;text-align:center}
.related-links a:hover{background:#e96f00;transform:translateY(-2px);box-shadow:0 8px 18px rgba(255,122,0,.22)}

/* 광고 */
.pt-ad{margin:28px 0;padding:18px 14px;border:1px solid #e5e7eb;border-radius:16px;background:#fff}

@media(max-width:768px){
  .pt-page{font-size:16px}
  .pt-hero h1{font-size:26px}
  .pt-tabs,.pt-grid,.pt-checks,.related-links{grid-template-columns:1fr}
  .result-list li{flex-direction:column;align-items:flex-start;gap:3px}
  .pt-actions .pt-btn{width:100%}
  .result-hero-num{font-size:1.6rem}
}
</style>

<div class="pt-page">

  <!-- 히어로 -->
  <section class="pt-hero">
    <div class="pt-badge">부동산·세금 계산기</div>
    <h1>종합부동산세 계산기 2026</h1>
    <p>
      주택 공시가격 합산액을 입력하면 기본공제, 공정시장가액비율, 누진세율,
      고령자·장기보유 세액공제, 농어촌특별세까지 자동 반영한 예상 종부세를 확인할 수 있습니다.
    </p>
  </section>

  <!-- 요약 -->
  <section class="pt-summary">
    <strong>📌 2026년 핵심 기준</strong> &nbsp;
    기본공제 <strong>9억원</strong>(일반) / <strong>12억원</strong>(1세대1주택) &nbsp;·&nbsp;
    공정시장가액비율 <strong>60%</strong> &nbsp;·&nbsp;
    세율 <strong>0.5~5.0%</strong> &nbsp;·&nbsp;
    과세기준일 <strong>6월 1일</strong> &nbsp;·&nbsp;
    납부기간 <strong>12월 1~15일</strong>
  </section>

  <!-- 계산기 -->
  <section class="pt-card">
    <h2>종부세 계산</h2>
    <p class="pt-mini">참고용 계산기입니다. 실제 세액은 홈택스 조회 또는 고지서로 확인하세요.</p>

    <!-- 유형 탭 -->
    <div class="pt-tabs">
      <button type="button" class="pt-tab active" data-type="1house" onclick="setPtType(this)">1세대 1주택</button>
      <button type="button" class="pt-tab" data-type="multi" onclick="setPtType(this)">2주택 이하 (일반)</button>
      <button type="button" class="pt-tab" data-type="heavy" onclick="setPtType(this)">3주택 이상</button>
    </div>
    <input type="hidden" id="ptType" value="1house">

    <div class="pt-grid">

      <div class="pt-field pt-full">
        <label>주택 공시가격 합산액 (원)</label>
        <input type="text" id="pt-pubprice" inputmode="numeric" placeholder="예: 1,500,000,000" oninput="fmtPt(this)">
        <small>국토교통부 부동산 공시가격 알리미에서 조회하거나 고지서에서 확인하세요.</small>
      </div>

      <!-- 공정시장가액비율 수정 가능 -->
      <div class="pt-field">
        <label>공정시장가액비율 (%)</label>
        <input type="number" id="pt-fairratio" value="60" min="0" max="100" step="1">
        <small>2026년 기준 60%. 법령 변경 시 직접 수정 가능합니다.</small>
      </div>

      <!-- 재산세 공제 -->
      <div class="pt-field">
        <label>재산세 공제액 (원) <span style="font-size:12px;color:#9ca3af;font-weight:400">선택</span></label>
        <input type="text" id="pt-proptax" inputmode="numeric" placeholder="예: 1,500,000" oninput="fmtPt(this)">
        <small>중복과세 조정을 위해 재산세 납부액의 일부를 공제합니다. 모르면 비워두세요.</small>
      </div>

      <!-- 고령자·장기보유 세액공제 -->
      <div class="pt-field pt-full">
        <label>세액공제 조건 <span style="font-size:12px;color:#9ca3af;font-weight:400">(1세대 1주택 해당 시)</span></label>
      </div>

      <div class="pt-field">
        <label>고령자 공제 (연령 기준)</label>
        <select id="pt-age">
          <option value="0">해당 없음</option>
          <option value="0.20">만 60세 이상 (20%)</option>
          <option value="0.30">만 65세 이상 (30%)</option>
          <option value="0.40">만 70세 이상 (40%)</option>
        </select>
        <small>1세대 1주택자 중 고령자에게 적용됩니다.</small>
      </div>

      <div class="pt-field">
        <label>장기보유 공제 (보유기간)</label>
        <select id="pt-hold">
          <option value="0">해당 없음 (5년 미만)</option>
          <option value="0.20">5년 이상 (20%)</option>
          <option value="0.40">10년 이상 (40%)</option>
          <option value="0.50">15년 이상 (50%)</option>
        </select>
        <small>1세대 1주택자 장기보유 공제. 고령자 공제와 합산 최대 80%.</small>
      </div>

    </div>

    <div class="pt-actions">
      <button type="button" class="pt-btn" onclick="calcPt()">종부세 계산하기</button>
      <a class="pt-btn secondary" href="https://hometax.go.kr" target="_blank" rel="noopener">홈택스 조회</a>
      <a class="pt-btn light" href="https://www.realtyprice.kr" target="_blank" rel="noopener">공시가격 알리미</a>
    </div>

    <div id="ptResult" class="result-box">
      <div id="pt-zero" class="result-zero">✅ 종부세 과세 대상이 아닙니다 — 공시가격 합산액이 기본공제 이하입니다.</div>
      <div class="result-title" id="pt-result-title" style="display:none">예상 종부세 계산 결과</div>
      <div class="result-hero" id="pt-hero" style="display:none">
        <div class="result-hero-label">예상 종부세 총 납부액 (농어촌특별세 포함)</div>
        <div class="result-hero-num" id="pt-total">—</div>
        <div class="result-hero-sub" id="pt-hero-sub">—</div>
      </div>
      <ul class="result-list" id="pt-list"></ul>
      <div class="result-note" id="pt-note" style="display:none"></div>
    </div>
  </section>

  <!-- 광고 -->
  <div class="pt-ad">
    <ins class="adsbygoogle" style="display:block"
         data-ad-client="ca-pub-3758454239921831"
         data-ad-slot="7492664289"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- 설명 섹션 -->
  <section class="info-box">
    <h2>종합부동산세, 어떻게 계산되나요?</h2>
    <p>종합부동산세는 일정 금액 이상의 주택을 보유한 경우 재산세와 별도로 납부하는 세금입니다.
    과세기준일인 <strong>6월 1일</strong>을 기준으로 인별 주택 공시가격을 합산해 기본공제를 초과하면 과세됩니다.</p>

    <h3>① 종부세 계산 흐름</h3>
    <div class="soft-box">
      <strong>① 공시가격 합산</strong> → <strong>② 기본공제 차감</strong>(9억 또는 12억) →
      <strong>③ 공정시장가액비율 적용</strong>(×60%) → <strong>④ 과세표준 확정</strong> →
      <strong>⑤ 세율 적용</strong>(0.5~5.0%) → <strong>⑥ 재산세 공제·세액공제 차감</strong> →
      <strong>⑦ 농어촌특별세 가산</strong>(종부세×20%) → <strong>⑧ 최종 납부세액</strong>
    </div>

    <h3>② 기본공제 기준</h3>
    <div class="soft-box">
      <strong>일반 (2주택 이하, 3주택 이상)</strong>: 공시가격 합산 <strong>9억원</strong> 초과 시 과세<br>
      <strong>1세대 1주택</strong>: 공시가격 합산 <strong>12억원</strong> 초과 시 과세<br><br>
      ※ 1세대 1주택 기준: 세대원 중 1명이 주택 1채를 단독 소유. 배우자가 다른 주택을 보유하면 해당 안 됩니다.
      부부 공동명의 1주택은 특례 신청 시 1세대 1주택으로 처리 가능합니다.
    </div>

    <h3>③ 2026년 주택분 종부세 세율표</h3>
    <div class="soft-box">
      <strong>2주택 이하 (일반세율)</strong>
      <table class="rate-table">
        <thead><tr><th>과세표준</th><th>세율</th><th>누진공제</th></tr></thead>
        <tbody>
          <tr><td>3억원 이하</td><td>0.5%</td><td>0원</td></tr>
          <tr><td>3억 ~ 6억원</td><td>0.7%</td><td>60만원</td></tr>
          <tr><td>6억 ~ 12억원</td><td>1.0%</td><td>240만원</td></tr>
          <tr><td>12억 ~ 25억원</td><td>1.3%</td><td>600만원</td></tr>
          <tr><td>25억 ~ 50억원</td><td>1.5%</td><td>1,100만원</td></tr>
          <tr><td>50억 ~ 94억원</td><td>2.0%</td><td>3,600만원</td></tr>
          <tr><td>94억원 초과</td><td>2.7%</td><td>10,180만원</td></tr>
        </tbody>
      </table>
      <br>
      <strong>3주택 이상 (중과세율)</strong>
      <table class="rate-table">
        <thead><tr><th>과세표준</th><th>세율</th><th>누진공제</th></tr></thead>
        <tbody>
          <tr><td>3억원 이하</td><td>0.5%</td><td>0원</td></tr>
          <tr><td>3억 ~ 6억원</td><td>0.7%</td><td>60만원</td></tr>
          <tr><td>6억 ~ 12억원</td><td>1.0%</td><td>240만원</td></tr>
          <tr><td>12억 ~ 25억원</td><td>2.0%</td><td>1,440만원</td></tr>
          <tr><td>25억 ~ 50억원</td><td>3.0%</td><td>3,940만원</td></tr>
          <tr><td>50억 ~ 94억원</td><td>4.0%</td><td>8,940만원</td></tr>
          <tr><td>94억원 초과</td><td>5.0%</td><td>18,340만원</td></tr>
        </tbody>
      </table>
    </div>

    <h3>④ 고령자·장기보유 세액공제 (1세대 1주택 전용)</h3>
    <div class="soft-box">
      <table class="credit-table">
        <thead><tr><th>구분</th><th>조건</th><th>공제율</th></tr></thead>
        <tbody>
          <tr><td>고령자</td><td>만 60세 이상</td><td>20%</td></tr>
          <tr><td>고령자</td><td>만 65세 이상</td><td>30%</td></tr>
          <tr><td>고령자</td><td>만 70세 이상</td><td>40%</td></tr>
          <tr><td>장기보유</td><td>5년 이상</td><td>20%</td></tr>
          <tr><td>장기보유</td><td>10년 이상</td><td>40%</td></tr>
          <tr><td>장기보유</td><td>15년 이상</td><td>50%</td></tr>
          <tr><td colspan="2"><strong>합산 최대 공제율</strong></td><td><strong>80%</strong></td></tr>
        </tbody>
      </table>
      1세대 1주택자에게만 적용됩니다. 고령자와 장기보유 공제율을 합산하되 80%를 초과할 수 없습니다.
    </div>

    <h3>⑤ 납부 일정 및 분납</h3>
    <div class="tip-box">
      <strong>과세기준일</strong>: 매년 6월 1일 (이 날 보유자에게 과세)<br>
      <strong>고지서 발송</strong>: 11월 중<br>
      <strong>납부기간</strong>: 12월 1일 ~ 12월 15일<br>
      <strong>분납</strong>: 세액 250만원 초과 시 가능 — 500만원 이하는 초과분, 500만원 초과는 세액의 50%를 6개월 이내 분납<br>
      <strong>납부유예</strong>: 1세대 1주택 고령자(60세 이상) + 총급여 7,000만원 이하 → 양도·상속·증여 시까지 유예 가능
    </div>

    <div class="link-row">
      <a class="link-btn alt" href="https://hometax.go.kr" target="_blank" rel="noopener">홈택스 종부세 조회</a>
      <a class="link-btn" href="https://www.realtyprice.kr" target="_blank" rel="noopener">공시가격 알리미</a>
    </div>
  </section>

  <!-- 광고 -->
  <div class="pt-ad">
    <ins class="adsbygoogle" style="display:block"
         data-ad-client="ca-pub-3758454239921831"
         data-ad-slot="7492664289"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- FAQ -->
  <section class="info-box">
    <h2>자주 묻는 질문 (FAQ)</h2>

    <div class="faq-item">
      <div class="faq-q">Q. 종부세는 언제, 누가 내나요?</div>
      <div class="faq-a">매년 6월 1일을 기준으로 주택 공시가격 합산액이 기본공제를 초과하는 개인에게 부과됩니다. 납부 기간은 12월 1일~15일이며, 국세청이 11월 중 고지서를 발송합니다.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 종부세 대상 기준이 얼마인가요?</div>
      <div class="faq-a">2026년 기준 일반 주택 보유자는 공시가격 합산 9억원 초과, 1세대 1주택자는 12억원 초과 시 종부세를 납부합니다. 이 기준은 시가가 아닌 공시가격 기준입니다.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 공정시장가액비율이란 무엇인가요?</div>
      <div class="faq-a">공시가격에 곱해 과세표준을 산정하는 비율입니다. 2026년에는 60%가 적용됩니다. 예를 들어 공시가격 합산 15억원인 1세대 1주택자는 (15억-12억)×60% = 1억 8천만원이 과세표준이 됩니다. 이 비율은 시행령으로 조정 가능해 매년 달라질 수 있습니다.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 재산세와 종부세는 이중과세 아닌가요?</div>
      <div class="faq-a">이를 방지하기 위해 종부세 계산 시 재산세로 납부한 금액 중 일부를 공제합니다. 구체적으로 공시가격 중 과세표준에 해당하는 부분에 대한 재산세 상당액을 종부세에서 차감합니다.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 부부가 각각 1채씩 보유하면 1세대 1주택인가요?</div>
      <div class="faq-a">아닙니다. 1세대 1주택은 세대원 중 1명이 1채를 단독으로 소유해야 합니다. 부부가 각 1채씩 보유하면 세대 기준으로 2주택으로 분류됩니다. 단, 부부 공동명의 1주택은 특례 신청을 통해 1세대 1주택 처리가 가능합니다.</div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 250만원 초과 시 분납이 가능하다고 하는데, 어떻게 하나요?</div>
      <div class="faq-a">종부세가 250만원을 초과하면 납부기한 이내에 분납을 신청할 수 있습니다. 500만원 이하는 250만원 초과분을, 500만원 초과는 세액의 50%를 6개월 이내에 나눠 낼 수 있습니다. 홈택스에서 신청하거나 세무서에 방문해 신청합니다.</div>
    </div>
  </section>

  <!-- 광고 -->
  <div class="pt-ad">
    <ins class="adsbygoogle" style="display:block"
         data-ad-client="ca-pub-3758454239921831"
         data-ad-slot="7492664289"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
    <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  </div>

  <!-- 관련 계산기 -->
  <section class="info-box">
    <h2>함께 보면 좋은 계산기</h2>
    <p style="color:#5b6470;font-size:15px;margin-bottom:0">부동산 보유·매매 시 함께 확인해야 할 세금들입니다.</p>
    <div class="related-links">
      <a href="/realestate/acquisition-tax/">취득세 계산기<br><small style="font-weight:400;font-size:13px">주택수·조정지역 자동 반영</small></a>
      <a href="/realestate/capital-gains/">양도소득세 계산기<br><small style="font-weight:400;font-size:13px">장특공제·중과 자동 반영</small></a>
      <a href="/realestate/rent-to-jeonse/">전세↔월세 전환 계산기<br><small style="font-weight:400;font-size:13px">전세·월세 손익 비교</small></a>
    </div>
  </section>

</div>

<script type="application/ld+json">
{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[
  {"@type":"Question","name":"종부세 과세 기준 금액이 얼마인가요?","acceptedAnswer":{"@type":"Answer","text":"2026년 기준 일반 보유자는 공시가격 합산 9억원, 1세대 1주택자는 12억원 초과 시 종합부동산세를 납부합니다."}},
  {"@type":"Question","name":"공정시장가액비율이란 무엇인가요?","acceptedAnswer":{"@type":"Answer","text":"공시가격에 곱해 종부세 과세표준을 산정하는 비율입니다. 2026년에는 60%가 적용됩니다. 예를 들어 1세대 1주택자의 공시가격이 15억원이면 (15억-12억)×60% = 1억 8천만원이 과세표준입니다."}},
  {"@type":"Question","name":"종부세 납부 기간은 언제인가요?","acceptedAnswer":{"@type":"Answer","text":"매년 12월 1일부터 12월 15일까지입니다. 국세청이 11월 중 고지서를 발송합니다. 세액이 250만원을 초과하면 분납이 가능합니다."}},
  {"@type":"Question","name":"고령자·장기보유 세액공제는 누가 받나요?","acceptedAnswer":{"@type":"Answer","text":"1세대 1주택자에게만 적용됩니다. 만 60세 이상은 20~40%, 보유기간 5년 이상은 20~50% 공제되며, 합산 최대 80%까지 공제됩니다."}}
]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"홈","item":"https://calculator.khaistory.com/"},
  {"@type":"ListItem","position":2,"name":"부동산 계산기","item":"https://calculator.khaistory.com/realestate/"},
  {"@type":"ListItem","position":3,"name":"종합부동산세 계산기","item":"https://calculator.khaistory.com/realestate/property-tax/"}
]}
</script>
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"WebApplication","name":"종합부동산세 계산기 2026","applicationCategory":"FinanceApplication","offers":{"@type":"Offer","price":"0"},"description":"2026년 기준 종합부동산세 참고용 계산기. 공시가격·공정시장가액비율·세액공제 자동 반영."}
</script>

<script>
(function(){
'use strict';

/* ── 2026 종부세 세율 내장 ── */
const RATES = {
  // 2주택 이하 (일반)
  multi: [
    {limit:300000000,   rate:0.005, quick:0},
    {limit:600000000,   rate:0.007, quick:600000},
    {limit:1200000000,  rate:0.010, quick:2400000},
    {limit:2500000000,  rate:0.013, quick:6000000},
    {limit:5000000000,  rate:0.015, quick:11000000},
    {limit:9400000000,  rate:0.020, quick:36000000},
    {limit:9999999999999, rate:0.027, quick:101800000}
  ],
  // 3주택 이상 (중과)
  heavy: [
    {limit:300000000,   rate:0.005, quick:0},
    {limit:600000000,   rate:0.007, quick:600000},
    {limit:1200000000,  rate:0.010, quick:2400000},
    {limit:2500000000,  rate:0.020, quick:14400000},
    {limit:5000000000,  rate:0.030, quick:39400000},
    {limit:9400000000,  rate:0.040, quick:89400000},
    {limit:9999999999999, rate:0.050, quick:183400000}
  ]
};

function fmtPt(el){
  const r=el.value.replace(/[^0-9]/g,'');
  el.value=r?parseInt(r).toLocaleString('ko-KR'):'';
  el.dataset.raw=r;
}
function gP(id){
  const el=document.getElementById(id);
  if(!el) return 0;
  if(el.type==='number') return parseFloat(el.value)||0;
  const raw=el.dataset.raw||el.value.replace(/[^0-9]/g,'');
  return parseInt(raw)||0;
}
function fw(n){return Math.round(n).toLocaleString('ko-KR')+'원';}

window.setPtType=function(btn){
  document.querySelectorAll('.pt-tab').forEach(el=>el.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ptType').value=btn.dataset.type;
  // 세액공제 섹션 표시/숨김
  const is1house=btn.dataset.type==='1house';
  ['pt-age','pt-hold'].forEach(id=>{
    const f=document.getElementById(id)?.closest('.pt-field');
    if(f) f.style.opacity=is1house?'1':'0.4';
  });
};

function calcPtTax(base, type){
  const table = type==='heavy' ? RATES.heavy : RATES.multi;
  if(base<=0) return 0;
  const row=table.find(r=>base<=r.limit)||table[table.length-1];
  return Math.max(0, Math.round(base*row.rate - row.quick));
}

window.calcPt=function(){
  const pubprice=gP('pt-pubprice');
  const ptType=document.getElementById('ptType').value;
  const fairRatio=(parseFloat(document.getElementById('pt-fairratio').value)||60)/100;
  const propTax=gP('pt-proptax');
  const ageRate=parseFloat(document.getElementById('pt-age').value)||0;
  const holdRate=parseFloat(document.getElementById('pt-hold').value)||0;
  const is1house=ptType==='1house';

  if(!pubprice){alert('공시가격 합산액을 입력해 주세요.');return;}

  // 기본공제
  const basicDed = is1house ? 1200000000 : 900000000;

  // 과세표준
  const taxableBase = Math.max(0, pubprice - basicDed);
  const taxBase = Math.round(taxableBase * fairRatio);

  const resultBox=document.getElementById('ptResult');
  const zeroEl=document.getElementById('pt-zero');
  const heroEl=document.getElementById('pt-hero');
  const titleEl=document.getElementById('pt-result-title');
  const noteEl=document.getElementById('pt-note');

  resultBox.classList.add('show');

  // 과세 미달
  if(taxBase<=0){
    zeroEl.style.display='';
    heroEl.style.display='none';
    titleEl.style.display='none';
    noteEl.style.display='none';
    document.getElementById('pt-list').innerHTML='';
    return;
  }
  zeroEl.style.display='none';
  heroEl.style.display='';
  titleEl.style.display='';
  noteEl.style.display='';

  // 종부세 산출
  const grossTax=calcPtTax(taxBase, ptType);

  // 재산세 공제
  const propTaxDeduct=propTax||0;

  // 세액공제 (1세대 1주택만)
  const creditRate=is1house?Math.min(ageRate+holdRate,0.80):0;
  const credit=Math.round((grossTax-propTaxDeduct)*creditRate);

  const netTax=Math.max(0, grossTax - propTaxDeduct - credit);

  // 농어촌특별세 (종부세의 20%)
  const ruralTax=Math.round(netTax*0.20);
  const totalTax=netTax+ruralTax;

  // DOM 업데이트
  document.getElementById('pt-total').textContent=fw(totalTax);
  document.getElementById('pt-hero-sub').textContent=
    `종부세 ${fw(netTax)} + 농어촌특별세 ${fw(ruralTax)}`;

  const typeLabel=ptType==='1house'?'1세대 1주택':ptType==='heavy'?'3주택 이상':'2주택 이하 (일반)';

  const rows=[
    {l:'과세 유형',v:typeLabel},
    {l:'공시가격 합산액',v:fw(pubprice)},
    {l:'기본공제',v:'-'+fw(basicDed)},
    {l:'공정시장가액비율 적용 후',v:fw(taxBase)+'  (×'+(fairRatio*100).toFixed(0)+'%)'},
    {l:'과세표준 (= 세율 적용 기준)',v:fw(taxBase)},
    {l:'종부세 산출세액',v:fw(grossTax)},
    propTaxDeduct?{l:'재산세 공제',v:'-'+fw(propTaxDeduct)}:null,
    creditRate>0?{l:`세액공제 (${(creditRate*100).toFixed(0)}% — 고령+장기보유)`,v:'-'+fw(credit),cls:'gr'}:null,
    {l:'종부세 결정세액',v:fw(netTax)},
    {l:'농어촌특별세 (×20%)',v:fw(ruralTax)},
    {l:'총 납부세액',v:fw(totalTax),cls:'hl'},
  ].filter(Boolean);

  document.getElementById('pt-list').innerHTML=rows.map(r=>
    `<li class="${r.cls||''}"><span>${r.l}</span><b>${r.v}</b></li>`
  ).join('');

  const notes=[];
  if(!propTax) notes.push('재산세 납부액을 입력하면 중복과세 공제를 반영한 더 정확한 결과를 확인할 수 있습니다.');
  if(ptType==='heavy') notes.push('3주택 이상 중과세율이 적용됐습니다. 조정대상지역 여부에 따라 실제 세액이 달라질 수 있습니다.');
  if(totalTax>2500000) notes.push(`세액이 250만원을 초과하므로 분납 신청이 가능합니다.`);
  notes.push('이 결과는 참고용입니다. 정확한 세액은 홈택스 조회 또는 고지서로 확인하세요.');

  noteEl.innerHTML=notes.map(n=>`• ${n}`).join('<br>');
  resultBox.scrollIntoView({behavior:'smooth',block:'nearest'});
};

/* 초기화 */
window.fmtPt=fmtPt;

})();
</script>

