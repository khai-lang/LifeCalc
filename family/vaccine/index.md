---
layout: "default"
title: "예방접종 일정 계산기 2026 - 국가필수예방접종 표준 일정 자동 계산 | LifeCalc"
description: "아이 생년월일을 입력하면 B형간염·BCG·DTaP·폴리오·로타바이러스·MMR·일본뇌염·HPV 등 국가필수예방접종 표준 일정을 접종 시기 순서대로 자동으로 계산해 보여줍니다."
permalink: "/family/vaccine/"
---

<a class="skip-link" href="#vc-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/family/">출산·육아</a> <span aria-hidden="true">›</span>
  <span aria-current="page">예방접종 일정 계산기</span>
</nav>

<section class="cp-hero">
  <h2>예방접종 일정 계산기</h2>
  <p class="cp-hero-desc">
    아이의 생년월일만 입력하면 <strong>B형간염·BCG·DTaP·폴리오(IPV)·Hib·폐렴구균·로타바이러스·MMR·수두·
    A형간염·일본뇌염·HPV</strong>까지 국가필수예방접종 19종의 표준 접종 시기를 <strong>실제 날짜로
    자동 환산</strong>해 순서대로 보여줍니다. 지금까지 지난 접종과 다가오는 접종을 한눈에 구분할 수
    있어 접종 시기를 놓치지 않도록 도와줍니다.
  </p>
</section>

<section id="vc-calculator" class="vc-card">
  <h2>아이 생년월일로 접종 일정 계산</h2>
  <div class="vc-field">
    <label for="vc-birth">아이 생년월일</label>
    <input type="date" id="vc-birth">
  </div>
  <div class="vc-toolbar">
    <button type="button" class="vc-btn vc-btn-main" onclick="calcVaccine()">접종 일정 계산하기</button>
  </div>

  <div class="cp-external-links">
    <a href="https://nip.kdca.go.kr" target="_blank" rel="noopener">예방접종도우미(질병관리청)</a>
  </div>

  <div class="cp-callout">
    ✅ 이 일정은 <strong>표준 접종 시기 기준 참고용</strong>입니다. 아이의 건강 상태, 백신 종류(로타바이러스
    2가/3가, 일본뇌염 사백신/생백신 등), 접종 지연 여부에 따라 실제 일정은 달라질 수 있습니다.
    정확한 접종 시기와 이력은 <strong>예방접종도우미 홈페이지</strong> 또는 소아청소년과·보건소에서
    확인하세요.
  </div>

  <div class="vc-next" id="vc-next" style="display:none">
    <div class="vc-next-label">다음 접종까지</div>
    <div class="vc-next-dday" id="vc-next-dday">-</div>
    <div class="vc-next-desc" id="vc-next-desc">-</div>
  </div>

  <div class="vc-legend">
    <span class="vc-badge vc-badge-past">지난 접종</span>
    <span class="vc-badge vc-badge-next">다음 접종</span>
    <span class="vc-badge vc-badge-upcoming">예정된 접종</span>
  </div>

  <div class="table-wrap">
    <table class="vc-table" id="vc-table" style="display:none">
      <thead><tr><th>표준 접종 시기</th><th>백신</th><th>차수</th><th>계산된 날짜</th><th>D-Day</th><th>비고</th></tr></thead>
      <tbody id="vc-body"></tbody>
    </table>
  </div>
</section>

<!-- AD SLOT 1: 계산기 직후, 활용 가이드 진입 전 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="vc-card vc-card-light">
  <h3>국가필수예방접종, 이렇게 진행됩니다</h3>
  <p>
    국가필수예방접종은 생후 4주 이내 <strong>BCG</strong>부터 시작해 <strong>생후 2·4·6개월</strong>에
    DTaP·폴리오·Hib·폐렴구균·로타바이러스를 기초접종하고, <strong>생후 12~15개월</strong>에 MMR·수두·
    A형간염·일본뇌염을 이어갑니다. 이후 <strong>만 4~6세</strong>와 <strong>만 11~12세</strong>에
    추가접종과 HPV 접종이 있습니다. 백신 대부분은 <strong>2~4회 나눠서</strong> 맞아야 충분한 면역이
    생기므로, 한 번에 끝나는 접종은 거의 없습니다.
  </p>
  <table class="vc-table">
    <thead><tr><th>시기</th><th>주요 접종</th></tr></thead>
    <tbody>
      <tr><td>출생 시 ~ 생후 4주</td><td>B형간염 1차, BCG</td></tr>
      <tr><td>생후 2·4·6개월</td><td>DTaP, 폴리오, Hib, 폐렴구균, 로타바이러스(기초접종)</td></tr>
      <tr><td>생후 12~15개월</td><td>MMR, 수두, A형간염, 일본뇌염, Hib·폐렴구균 추가</td></tr>
      <tr><td>생후 15~18개월</td><td>DTaP 추가접종</td></tr>
      <tr><td>만 4~6세</td><td>DTaP·폴리오·MMR 추가접종</td></tr>
      <tr><td>만 11~12세</td><td>Tdap/Td 추가접종, HPV</td></tr>
    </tbody>
  </table>
  <p class="vc-note">
    ※ 로타바이러스는 백신 종류(로타릭스 2회/로타텍 3회)에 따라 차수가 다르고, <strong>생후 8개월 전
    반드시 완료</strong>해야 합니다. 일본뇌염은 사백신(생후 12개월부터, 총 5회)과 생백신(총 2회) 중
    선택할 수 있습니다. HPV는 2026년부터 만 12세 남아도 국가예방접종 대상에 포함되었습니다.
    표준 접종일보다 늦어졌다면 처음부터 다시 시작할 필요 없이, 의료진과 상의해 지연접종 일정에 따라
    이어가면 됩니다.
  </p>
  <div class="cp-external-links">
    <a href="https://nip.kdca.go.kr" target="_blank" rel="noopener">예방접종도우미(질병관리청)</a>
  </div>
</section>

<!-- COUPANG PARTNERS: 실제 제휴 링크는 각 카드의 href="COUPANG_PARTNERS_LINK_*" 자리에 쿠팡파트너스 딥링크로 교체하세요. -->
<section class="vc-card vc-card-light vc-recommend">
  <h3>함께 보면 좋은 자료</h3>
  <p class="vc-recommend-desc">접종 스케줄과 아이 건강 기록을 관리하는 데 도움이 되는 상품입니다.</p>
  <div class="vc-coupang-grid">
    <a class="vc-coupang-card" href="https://link.coupang.com/a/fNJOHDuHyC" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">📔</div>
      <div class="vc-coupang-title">아기 성장·접종 기록 수첩</div>
      <div class="vc-coupang-desc">접종 이력과 성장 곡선을 함께 기록하는 육아수첩</div>
    </a>
    <a class="vc-coupang-card" href="https://link.coupang.com/a/fNJRijuBfU" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🌡️</div>
      <div class="vc-coupang-title">비접촉식 체온계</div>
      <div class="vc-coupang-desc">접종 전후 발열 체크에 유용한 육아 필수템</div>
    </a>
    <a class="vc-coupang-card" href="https://link.coupang.com/a/fNJV8GqOzs" target="_blank" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🎒</div>
      <div class="vc-coupang-title">병원 외출용 아기 가방</div>
      <div class="vc-coupang-desc">접종·진료 외출에 필요한 물품을 한 번에</div>
    </a>
  </div>
  <p class="vc-coupang-disclosure">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
</section>

<section class="vc-card">
  <h3>관련 계산기</h3>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/family/due-date/">
      <span class="vc-related-title">출산 예정일 계산기</span>
      <span class="vc-related-desc">마지막 생리일·임신 주수로 예정일 계산</span>
    </a>
    <a class="vc-related-card" href="/family/baby-days/">
      <span class="vc-related-title">아이 생후 N일/개월</span>
      <span class="vc-related-desc">태어난 날부터 오늘까지 며칠·몇 개월인지 확인</span>
    </a>
    <a class="vc-related-card" href="/family/baegil/">
      <span class="vc-related-title">백일 날짜 계산기</span>
      <span class="vc-related-desc">아기 백일이 정확히 언제인지 계산</span>
    </a>
    <a class="vc-related-card" href="/life/date/">
      <span class="vc-related-title">기념일·날짜 계산기</span>
      <span class="vc-related-desc">D-Day, 날짜 더하기·빼기, 기념일 자동 계산</span>
    </a>
  </div>
</section>

<section class="vc-card" id="vc-faq">
  <h3>자주 묻는 질문</h3>

  <div class="vc-faq-item">
    <h4>표준 접종일보다 늦었어요. 처음부터 다시 맞아야 하나요?</h4>
    <p>아닙니다. 국내 대부분의 필수예방접종은 처음부터 다시 시작할 필요가 없습니다. 지연된 시점부터
    의료진과 상의해 남은 차수를 이어서 접종하면 됩니다.</p>
  </div>
  <div class="vc-faq-item">
    <h4>로타바이러스는 왜 접종 시한이 정해져 있나요?</h4>
    <p>로타바이러스 백신은 장중첩증 위험을 낮추기 위해 첫 접종을 생후 15주 이전에 시작하고, 생후
    8개월 전에 모든 차수를 완료하도록 권고됩니다. 시한을 넘기면 접종을 시작할 수 없는 경우도 있어
    다른 백신보다 일정 관리가 특히 중요합니다.</p>
  </div>
  <div class="vc-faq-item">
    <h4>일본뇌염 사백신과 생백신 중 뭘 선택해야 하나요?</h4>
    <p>사백신은 총 5회, 생백신은 총 2회 접종합니다. 두 백신 모두 국가예방접종으로 무료 지원되며,
    효과와 안전성에 큰 차이가 없다고 알려져 있습니다. 이 계산기는 사백신 일정을 기본으로 보여주며,
    생백신을 선택했다면 소아청소년과에서 별도 일정을 안내받으시기 바랍니다.</p>
  </div>
  <div class="vc-faq-item">
    <h4>이 계산기 결과를 실제 접종 예약에 그대로 써도 되나요?</h4>
    <p>아닙니다. 이 계산기는 표준 일정을 참고용으로 계산해 보여줄 뿐, 아이의 건강 상태나 백신 수급
    상황에 따라 실제 접종 가능 시기는 다를 수 있습니다. 예방접종도우미 홈페이지에서 실제 접종
    이력과 예정일을 확인하시고, 접종은 반드시 의료진과 상의해 진행하세요.</p>
  </div>
  <div class="vc-faq-item">
    <h4>모바일에서도 사용할 수 있나요?</h4>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </div>
</section>

<!-- AD SLOT 2: FAQ 하단, 페이지 최하단 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

<style>
  .cp-breadcrumb { font-size: 0.85rem; color: #5b6470; margin-bottom: 1rem; }
  .cp-breadcrumb a { color: #5b6470; text-decoration: none; }
  .cp-breadcrumb a:hover { text-decoration: underline; }

  .cp-hero {
    background: linear-gradient(135deg, #f5ebdf, #e6d8c9);
    border: 1px solid #e3d4c5;
    border-radius: 22px;
    padding: 28px;
    margin-bottom: 24px;
    box-shadow: 0 12px 28px rgba(0,0,0,.04);
  }
  .cp-hero h1 { margin-top: 0; color: #13293d; }
  .cp-hero-desc { line-height: 1.7; color: #5b6470; }

  .vc-card{
    background:#f5ebdf; border:1px solid #e2d2c0; border-radius:22px;
    padding:24px 20px; box-shadow:0 12px 28px rgba(0,0,0,.04); margin-bottom:26px;
  }
  .vc-card-light { background: #fff; border-color: #e3d4c5; }
  .vc-card h3 { border-left: 4px solid #8c7355; padding-left: 10px; color:#13293d; }
  .vc-note { font-size: 0.85rem; color: #785a43; }

  .vc-field { margin-bottom: 14px; }
  .vc-field label { display: block; font-weight: 600; margin-bottom: 6px; color: #13293d; }
  .vc-field input {
    width: 100%; padding: 10px 12px; border: 1px solid #e2d2c0;
    border-radius: 10px; font-size: 1rem; box-sizing: border-box; background:#fff;
  }

  .vc-toolbar { margin: 8px 0 16px; }
  .vc-btn {
    padding: 10px 18px; border-radius: 10px; border: 1px solid #e2d2c0;
    background: #fff; color: #785a43; font-weight: 600; cursor: pointer;
  }
  .vc-btn-main { background: #e96f00; color: #fff; border-color: #e96f00; }
  .vc-btn-main:hover { background: #ff7a00; border-color: #ff7a00; }

  .cp-external-links { display:flex; gap:10px; flex-wrap:wrap; margin:16px 0; }
  .cp-external-links a {
    display:inline-block; padding:10px 16px; border:1px solid #1f5c7a; color:#1f5c7a;
    border-radius:10px; text-decoration:none; font-weight:600; font-size:0.9rem;
  }
  .cp-external-links a:hover { background:#cfdfe8; }

  .cp-callout {
    background:#cfdfe8; border:1px solid #1f5c7a; color:#174d68; border-radius:12px;
    padding:14px 16px; font-size:0.92rem; line-height:1.6; margin-bottom:16px;
  }

  .vc-next {
    background:#fdeadb; border:1px solid #e96f00; border-radius:14px;
    padding:16px 18px; margin-bottom:16px; text-align:center;
  }
  .vc-next-label { font-size:0.85rem; color:#785a43; font-weight:600; }
  .vc-next-dday { font-size:1.8rem; font-weight:800; color:#e96f00; margin:4px 0; }
  .vc-next-desc { font-size:0.92rem; color:#13293d; }

  .vc-legend { display:flex; gap:14px; flex-wrap:wrap; margin:14px 0 8px; font-size:0.82rem; color:#785a43; }
  .vc-badge { display:inline-flex; align-items:center; gap:6px; }
  .vc-badge::before { content:''; width:10px; height:10px; border-radius:3px; display:inline-block; }
  .vc-badge-past::before { background:#e3d4c5; }
  .vc-badge-next::before { background:#e96f00; }
  .vc-badge-upcoming::before { background:#cfdfe8; }

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .vc-table { width:100%; min-width:640px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .vc-table td:nth-child(2) { text-align:left; }
  .vc-table td:last-child { text-align:left; font-size:0.82rem; color:#785a43; }
  .vc-table tr.vc-row-past td { color:#a99b89; background:#faf5ee; }
  .vc-table tr.vc-row-next td { background:#fdeadb; color:#e96f00; font-weight:800; }
  .vc-table tr.vc-row-upcoming td { background:#f3f9fb; color:#174d68; }

  .vc-recommend-desc { font-size: 0.9rem; color: #785a43; }

  .vc-coupang-grid { display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-top:14px; }
  .vc-coupang-card {
    display:flex; flex-direction:column; gap:6px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:14px; padding:16px; text-decoration:none; color:inherit; transition:box-shadow .15s;
  }
  .vc-coupang-card:hover { box-shadow:0 4px 14px rgba(19,41,61,0.12); }
  .vc-coupang-thumb { font-size:2rem; line-height:1; }
  .vc-coupang-title { font-weight:700; color:#13293d; }
  .vc-coupang-desc { font-size:0.85rem; color:#785a43; line-height:1.5; }
  .vc-coupang-disclosure { font-size:0.78rem; color:#a99b89; margin-top:12px; }

  .vc-related-grid { display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; }
  .vc-related-card {
    display:flex; flex-direction:column; gap:4px; background:#f5ebdf; border:1px solid #e2d2c0;
    border-radius:12px; padding:14px 16px; text-decoration:none;
  }
  .vc-related-title { color:#e96f00; font-weight:700; }
  .vc-related-desc { font-size:0.85rem; color:#785a43; }
  .vc-related-card:hover .vc-related-title { text-decoration:underline; }

  .vc-faq-item { margin-bottom: 16px; }
  .vc-faq-item h4 { margin-bottom: 6px; color: #13293d; }
  .vc-faq-item p { margin: 0; line-height: 1.6; color: #785a43; }

  @media (max-width: 640px){
    .vc-coupang-grid { grid-template-columns:1fr; }
    .vc-related-grid { grid-template-columns:1fr; }
    .cp-external-links { flex-direction:column; }
    .cp-external-links a { text-align:center; }
  }
</style>

<script>
(function(){
  const WD = ['일','월','화','수','목','금','토'];

  function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate() + n); return r; }
  function addMonths(d, n){
    const r = new Date(d);
    const day = r.getDate();
    r.setDate(1);
    r.setMonth(r.getMonth() + n);
    const daysInMonth = new Date(r.getFullYear(), r.getMonth() + 1, 0).getDate();
    r.setDate(Math.min(day, daysInMonth));
    return r;
  }
  function todayOnly(){
    const t = new Date();
    return new Date(t.getFullYear(), t.getMonth(), t.getDate());
  }
  function diffDays(a, b){ return Math.round((b - a) / 86400000); }
  function ddayLabel(target){
    const n = diffDays(todayOnly(), target);
    if(n === 0) return 'D-DAY';
    return n > 0 ? `D-${n}` : `D+${Math.abs(n)}`;
  }
  function fmtShort(d){
    return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}(${WD[d.getDay()]})`;
  }

  /* 질병관리청 표준예방접종일정 기준 (참고용, 백신 종류·지연접종에 따라 달라질 수 있음) */
  const SCHEDULE = [
    { v:'B형간염(HepB)', dose:'1차', val:0, unit:'day', std:'출생 시' },
    { v:'BCG(결핵, 피내용)', dose:'1회', val:27, unit:'day', std:'생후 4주 이내' },
    { v:'B형간염(HepB)', dose:'2차', val:1, unit:'month', std:'생후 1개월' },
    { v:'DTaP(디프테리아·파상풍·백일해)', dose:'1차', val:2, unit:'month', std:'생후 2개월' },
    { v:'폴리오(IPV)', dose:'1차', val:2, unit:'month', std:'생후 2개월' },
    { v:'Hib(b형헤모필루스인플루엔자)', dose:'1차', val:2, unit:'month', std:'생후 2개월' },
    { v:'폐렴구균(PCV)', dose:'1차', val:2, unit:'month', std:'생후 2개월' },
    { v:'로타바이러스', dose:'1차', val:2, unit:'month', std:'생후 2개월', note:'로타릭스 2회/로타텍 3회, 생후 8개월 전 완료 필수' },
    { v:'DTaP', dose:'2차', val:4, unit:'month', std:'생후 4개월' },
    { v:'폴리오(IPV)', dose:'2차', val:4, unit:'month', std:'생후 4개월' },
    { v:'Hib', dose:'2차', val:4, unit:'month', std:'생후 4개월' },
    { v:'폐렴구균(PCV)', dose:'2차', val:4, unit:'month', std:'생후 4개월' },
    { v:'로타바이러스', dose:'2차', val:4, unit:'month', std:'생후 4개월' },
    { v:'B형간염(HepB)', dose:'3차', val:6, unit:'month', std:'생후 6개월' },
    { v:'DTaP', dose:'3차', val:6, unit:'month', std:'생후 6개월' },
    { v:'Hib', dose:'3차', val:6, unit:'month', std:'생후 6개월' },
    { v:'폐렴구균(PCV)', dose:'3차', val:6, unit:'month', std:'생후 6개월' },
    { v:'로타바이러스', dose:'3차', val:6, unit:'month', std:'생후 6개월', note:'로타텍 접종 시에만 해당' },
    { v:'폴리오(IPV)', dose:'3차', val:6, unit:'month', std:'생후 6~18개월' },
    { v:'인플루엔자', dose:'접종 시작', val:6, unit:'month', std:'생후 6개월부터 매년', note:'첫 접종 해는 4주 간격 2회, 이후 매년 1회' },
    { v:'MMR(홍역·유행성이하선염·풍진)', dose:'1차', val:12, unit:'month', std:'생후 12개월' },
    { v:'수두(VAR)', dose:'1회', val:12, unit:'month', std:'생후 12개월' },
    { v:'A형간염(HepA)', dose:'1차', val:12, unit:'month', std:'생후 12~23개월' },
    { v:'일본뇌염(사백신)', dose:'1차', val:12, unit:'month', std:'생후 12~23개월' },
    { v:'Hib', dose:'4차(추가)', val:12, unit:'month', std:'생후 12~15개월' },
    { v:'폐렴구균(PCV)', dose:'4차(추가)', val:12, unit:'month', std:'생후 12~15개월' },
    { v:'일본뇌염(사백신)', dose:'2차', val:13, unit:'month', std:'1차 접종 1개월 후' },
    { v:'A형간염(HepA)', dose:'2차', val:18, unit:'month', std:'1차 접종 6개월 후' },
    { v:'DTaP', dose:'4차(추가)', val:18, unit:'month', std:'생후 15~18개월' },
    { v:'일본뇌염(사백신)', dose:'3차', val:24, unit:'month', std:'2차 접종 11개월 후(만 2세경)' },
    { v:'DTaP', dose:'5차(추가)', val:48, unit:'month', std:'만 4~6세' },
    { v:'폴리오(IPV)', dose:'4차(추가)', val:48, unit:'month', std:'만 4~6세' },
    { v:'MMR', dose:'2차', val:48, unit:'month', std:'만 4~6세' },
    { v:'일본뇌염(사백신)', dose:'4차', val:72, unit:'month', std:'만 6세' },
    { v:'Tdap/Td(파상풍·디프테리아·백일해)', dose:'6차(추가)', val:132, unit:'month', std:'만 11~12세' },
    { v:'HPV(사람유두종바이러스)', dose:'1차', val:132, unit:'month', std:'만 11~12세', note:'2026년부터 남아도 국가예방접종 대상' },
    { v:'HPV', dose:'2차', val:138, unit:'month', std:'1차 접종 6~12개월 후' },
    { v:'일본뇌염(사백신)', dose:'5차', val:144, unit:'month', std:'만 12세' }
  ];

  window.calcVaccine = function(){
    const input = document.getElementById('vc-birth').value;
    if(!input){ alert('아이 생년월일을 입력해 주세요.'); return; }
    const [y, m, d] = input.split('-').map(Number);
    const birth = new Date(y, m - 1, d);
    const today = todayOnly();

    const items = SCHEDULE.map(item => {
      const date = item.unit === 'day' ? addDays(birth, item.val) : addMonths(birth, item.val);
      return { ...item, date };
    }).sort((a, b) => a.date - b.date);

    let nextItem = null;
    const rows = items.map(item => {
      const isPast = item.date < today;
      let rowClass = 'vc-row-upcoming';
      if(isPast){
        rowClass = 'vc-row-past';
      } else if(!nextItem){
        rowClass = 'vc-row-next';
        nextItem = item;
      }
      return `<tr class="${rowClass}"><td>${item.std}</td><td>${item.v}</td><td>${item.dose}</td><td>${fmtShort(item.date)}</td><td>${ddayLabel(item.date)}</td><td>${item.note || ''}</td></tr>`;
    }).join('');

    document.getElementById('vc-body').innerHTML = rows;
    document.getElementById('vc-table').style.display = '';

    const nextBox = document.getElementById('vc-next');
    if(nextItem){
      nextBox.style.display = '';
      document.getElementById('vc-next-dday').textContent = ddayLabel(nextItem.date);
      document.getElementById('vc-next-desc').textContent =
        `${nextItem.v} ${nextItem.dose} — ${fmtShort(nextItem.date)}`;
    } else {
      nextBox.style.display = '';
      document.getElementById('vc-next-dday').textContent = '완료';
      document.getElementById('vc-next-desc').textContent = '표준 일정상 모든 국가필수예방접종 시기가 지났습니다.';
    }

    nextBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ad-box').forEach(ad => ad.style.minHeight = '120px');
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  });
})();
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "출산·육아", "item": "https://calculator.khaistory.com/family/"},
    {"@type": "ListItem", "position": 3, "name": "예방접종 일정 계산기", "item": "https://calculator.khaistory.com/family/vaccine/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "표준 접종일보다 늦었어요. 처음부터 다시 맞아야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "아닙니다. 대부분의 필수예방접종은 처음부터 다시 시작할 필요 없이, 지연된 시점부터 의료진과 상의해 남은 차수를 이어서 접종하면 됩니다."}
    },
    {
      "@type": "Question",
      "name": "로타바이러스는 왜 접종 시한이 정해져 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "장중첩증 위험을 낮추기 위해 생후 15주 이전에 시작해 생후 8개월 전에 모든 차수를 완료하도록 권고되며, 시한을 넘기면 접종을 시작할 수 없는 경우도 있습니다."}
    },
    {
      "@type": "Question",
      "name": "일본뇌염 사백신과 생백신 중 뭘 선택해야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "사백신은 총 5회, 생백신은 총 2회 접종하며 둘 다 국가예방접종으로 무료 지원됩니다. 이 계산기는 사백신 일정을 기본으로 보여줍니다."}
    },
    {
      "@type": "Question",
      "name": "이 계산기 결과를 실제 접종 예약에 그대로 써도 되나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "아닙니다. 참고용 표준 일정이며, 실제 접종 가능 시기는 아이의 건강 상태나 백신 수급에 따라 달라질 수 있어 의료진과 상의가 필요합니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
