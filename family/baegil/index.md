---
layout: "default"
title: "백일·돌 계산기 - 삼칠일부터 백일·200일·1000일·첫돌까지 한번에 | LifeCalc"
description: "아기 생년월일을 입력하면 삼칠일·백일(100일)·200일·300일·500일·첫돌·1000일 날짜와 D-day를 한 번에 계산합니다. 돌잡이 물건별 의미와 백일잔치 준비 체크리스트까지 확인하세요."
permalink: "/family/baegil/"
---

<a class="skip-link" href="#bg-calculator">계산기로 바로가기</a>

<nav class="cp-breadcrumb" aria-label="브레드크럼">
  <a href="/">홈</a> <span aria-hidden="true">›</span>
  <a href="/family/">출산·육아</a> <span aria-hidden="true">›</span>
  <span aria-current="page">백일·돌 계산기</span>
</nav>

<section class="cp-hero">
  <h1>백일·돌 계산기</h1>
  <p class="cp-hero-desc">
    아기 생년월일만 입력하면 <strong>삼칠일·백일·200일·300일·500일·첫돌·1000일</strong> 날짜를
    한 번에 계산하고, 가장 가까운 이정표까지 <strong>D-day</strong>로 보여드립니다. 백일잔치 준비
    체크리스트와 돌잡이 물건별 의미까지 함께 확인하세요.
  </p>
</section>

<section id="bg-calculator" class="vc-card">
  <h2>아기 생년월일로 이정표 계산</h2>
  <div class="vc-field">
    <label for="bg-birth">아기 생년월일</label>
    <input type="date" id="bg-birth">
  </div>
  <div class="vc-toolbar">
    <button type="button" class="vc-btn vc-btn-main" onclick="calcBaegil()">이정표 계산하기</button>
  </div>

  <div class="cp-callout">
    ✅ 이정표 날짜는 <strong>출생일을 1일째로 포함</strong>해 계산합니다(예: 백일 = 출생일 + 99일).
    다만 <strong>첫돌</strong>은 실제 돌잔치 관례에 맞춰 "출생일로부터 1년 후 같은 날짜"로 계산합니다.
  </div>

  <div class="vc-next" id="bg-next" style="display:none">
    <div class="vc-next-label">다음 이정표까지</div>
    <div class="vc-next-dday" id="bg-next-dday">-</div>
    <div class="vc-next-desc" id="bg-next-desc">-</div>
  </div>

  <div class="table-wrap">
    <table class="vc-table" id="bg-table" style="display:none">
      <thead><tr><th>이정표</th><th>날짜</th><th>D-Day</th></tr></thead>
      <tbody id="bg-body"></tbody>
    </table>
  </div>
</section>

<!-- AD SLOT 1: 계산기 직후 -->
<!-- ⚠️ 실제 배포 전 data-ad-slot 값을 이 페이지 전용 슬롯 ID로 교체하세요 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="REPLACE_WITH_AD_SLOT_ID"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<section class="vc-card vc-card-light">
  <h2>백일과 첫돌, 왜 챙기나요?</h2>
  <p>
    <strong>백일</strong>은 아기가 태어난 지 100일째 되는 날을 기념하는 한국의 오랜 전통입니다.
    과거에는 영아 사망률이 높아 100일을 무사히 넘기는 것 자체가 큰 축복으로 여겨졌고, 이를 축하하기
    위해 가족과 친지가 모여 백일잔치를 열었습니다. 현대에는 아이의 건강한 성장을 기념하는 자리로
    자리 잡았습니다.
  </p>
  <p>
    <strong>첫돌</strong>은 아기의 첫 번째 생일로, 한국에서 가장 크게 챙기는 육아 이정표입니다.
    돌잔치에서는 아기 앞에 여러 물건을 놓고 아기가 집는 물건으로 장래를 점쳐보는 <strong>돌잡이</strong>가
    하이라이트로 진행됩니다. 조선시대 궁중 기록에도 남아 있을 만큼 유래가 깊은 풍습입니다.
  </p>

  <h3>돌잡이 물건별 의미</h3>
  <table class="vc-table">
    <thead><tr><th>물건</th><th>의미</th></tr></thead>
    <tbody>
      <tr><td>쌀</td><td>평생 먹을 것 걱정 없이 풍요롭게 산다는 뜻</td></tr>
      <tr><td>실(명주실)</td><td>실처럼 길게, 건강하게 오래 산다는 뜻</td></tr>
      <tr><td>붓·연필(책)</td><td>학문에 재능이 있어 공부를 잘한다는 뜻</td></tr>
      <tr><td>활</td><td>용맹하고 강인한 신체를 갖춘다는 뜻</td></tr>
      <tr><td>돈</td><td>평생 재물복이 있다는 뜻</td></tr>
      <tr><td>마이크</td><td>가수·방송인 등 연예계에서 이름을 날린다는 뜻</td></tr>
      <tr><td>청진기</td><td>의사 등 의료인이 된다는 뜻</td></tr>
      <tr><td>판사봉</td><td>법조인이 된다는 뜻</td></tr>
      <tr><td>공(축구공·야구공)</td><td>운동선수로 대성한다는 뜻</td></tr>
    </tbody>
  </table>
  <p class="vc-note">
    ※ 돌잡이에 정해진 규칙은 없습니다. 전통 물건에 요즘 직업을 상징하는 물건(마우스, 계산기,
    비행기 모형 등)을 섞어 5~7가지 정도 올리는 것이 일반적입니다. 재미로 즐기는 풍습이니 결과에
    너무 큰 의미를 두지 않아도 괜찮습니다.
  </p>
</section>

<section class="vc-card vc-card-light">
  <h2>백일잔치 준비 체크리스트</h2>
  <table class="vc-table">
    <thead><tr><th>시기</th><th>준비할 것</th></tr></thead>
    <tbody>
      <tr><td>2~3주 전</td><td>장소(집·스튜디오·음식점) 예약, 참석 인원 파악</td></tr>
      <tr><td>1~2주 전</td><td>답례품·케이크 주문, 아기 옷·촬영 소품 준비</td></tr>
      <tr><td>2~3일 전</td><td>음식·장식 최종 확인, 사진작가 예약 확인</td></tr>
      <tr><td>당일</td><td>아기 컨디션 체크(수유·낮잠 시간 조절), 여벌 옷 챙기기</td></tr>
    </tbody>
  </table>
  <p class="vc-note">
    ※ 최근에는 가족끼리 조촐하게 집에서 치르는 경우도 많습니다. 아기 컨디션이 최우선이므로,
    평소 낮잠·수유 시간을 피해 일정을 잡는 것이 좋습니다.
  </p>
</section>

<!-- COUPANG PARTNERS: 아래 href="COUPANG_PARTNERS_LINK_*"를 실제 쿠팡파트너스 딥링크로 교체하세요 -->
<section class="vc-card vc-card-light vc-recommend">
  <h2>함께 보면 좋은 자료</h2>
  <p class="vc-recommend-desc">백일·돌잔치 준비에 도움이 되는 상품입니다.</p>
  <div class="vc-coupang-grid">
    <a class="vc-coupang-card" href="https://link.coupang.com/a/f5OvmnF7AW" rel="noopener sponsored">
      <div class="vc-coupang-thumb">🎂</div>
      <div class="vc-coupang-title">백일·돌 상차림 소품 세트</div>
      <div class="vc-coupang-desc">돌잡이 물건까지 포함된 상차림 대여·구매 세트</div>
    </a>
    <a class="vc-coupang-card" href="https://link.coupang.com/a/f7h0oUDpu0" rel="noopener sponsored">
      <div class="vc-coupang-thumb">👗</div>
      <div class="vc-coupang-title">백일·돌 아기 한복</div>
      <div class="vc-coupang-desc">기념 촬영과 잔치에 어울리는 아기 한복</div>
    </a>
    <a class="vc-coupang-card" href="https://link.coupang.com/a/f7ibTDBUFU" rel="noopener sponsored">
      <div class="vc-coupang-thumb">📷</div>
      <div class="vc-coupang-title">셀프 촬영 소품·배경지</div>
      <div class="vc-coupang-desc">집에서도 근사하게 남기는 기념 촬영 소품</div>
    </a>
  </div>
  <p class="vc-coupang-disclosure">이 페이지는 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.</p>
</section>

<section class="vc-card">
  <h2>관련 계산기</h2>
  <div class="vc-related-grid">
    <a class="vc-related-card" href="/family/due-date/">
      <span class="vc-related-title">출산 예정일 계산기</span>
      <span class="vc-related-desc">마지막 생리일·배란일·IVF 이식일 기준 예정일</span>
    </a>
    <a class="vc-related-card" href="/family/baby-days/">
      <span class="vc-related-title">아기 개월수 계산기</span>
      <span class="vc-related-desc">생후 며칠·몇 개월, 만 개월 vs 일수 환산 비교</span>
    </a>
    <a class="vc-related-card" href="/family/vaccine/">
      <span class="vc-related-title">예방접종 일정 계산기</span>
      <span class="vc-related-desc">국가필수예방접종 표준 일정 자동 계산</span>
    </a>
    <a class="vc-related-card" href="/life/age/">
      <span class="vc-related-title">만나이 계산기</span>
      <span class="vc-related-desc">만/세는/연나이 비교, 띠, D-day</span>
    </a>
  </div>
</section>

<section class="vc-card" id="bg-faq">
  <h2>자주 묻는 질문</h2>

  <div class="vc-faq-item">
    <h3>백일은 왜 출생일+100일이 아니라 +99일인가요?</h3>
    <p>한국의 전통 셈법은 태어난 날을 1일째로 포함합니다. 따라서 100일째가 되려면 출생일에 99일을
    더해야 합니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>첫돌은 생후 365일째인가요, 만 1세 생일인가요?</h3>
    <p>실제 돌잔치는 대부분 만 1세 생일(출생일로부터 1년 후 같은 날짜)에 맞춰 엽니다. 생후 365일째로
    단순 계산하면 윤년 포함 여부에 따라 만 1세 생일과 하루 차이가 날 수 있어, 이 계산기는 만 1세
    생일 기준으로 계산합니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>돌잡이는 꼭 전통 물건으로만 해야 하나요?</h3>
    <p>아닙니다. 정해진 규칙은 없으며, 전통 물건(쌀·실·붓·활·돈)에 요즘 직업을 상징하는 물건(마이크,
    청진기, 판사봉, 마우스, 계산기 등)을 섞어 구성하는 경우가 많습니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>백일잔치를 꼭 크게 해야 하나요?</h3>
    <p>아닙니다. 최근에는 가족끼리 집에서 조촐하게 치르는 경우도 많습니다. 아기 컨디션을 최우선으로
    고려해 규모와 일정을 정하는 것이 좋습니다.</p>
  </div>
  <div class="vc-faq-item">
    <h3>모바일에서도 사용할 수 있나요?</h3>
    <p>네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다.</p>
  </div>
</section>

<!-- AD SLOT 2: FAQ 하단 -->
<!-- ⚠️ 실제 배포 전 data-ad-slot 값을 이 페이지 전용 슬롯 ID로 교체하세요 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="REPLACE_WITH_AD_SLOT_ID"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<small>마지막 페이지 업데이트: {{ site.time | date: "%Y-%m-%d" }}</small>

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
  .vc-card h2 { border-left: 4px solid #8c7355; padding-left: 10px; color:#13293d; }
  .vc-card h3 { color:#13293d; margin-top:20px; }
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

  .table-wrap { width:100%; overflow-x:auto; border-radius:12px; border:1px solid #e2d2c0; margin-top:12px; }
  .vc-table { width:100%; min-width:420px; border-collapse:collapse; }
  .vc-table th, .vc-table td { padding:9px 10px; text-align:center; font-size:0.9rem; }
  .vc-table th { background:#f5ebdf; color:#13293d; font-weight:800; white-space:nowrap; }
  .vc-table td { color:#3a2c1d; border-top:1px solid #f1e7da; }
  .vc-table tr.bg-row-past td { color:#a99b89; background:#faf5ee; }
  .vc-table tr.bg-row-next td { background:#fdeadb; color:#e96f00; font-weight:800; }

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
  .vc-faq-item h3 { margin-bottom: 6px; font-size: 1rem; color: #13293d; margin-top:0; }
  .vc-faq-item p { margin: 0; line-height: 1.6; color: #785a43; }

  @media (max-width: 640px){
    .vc-coupang-grid { grid-template-columns:1fr; }
    .vc-related-grid { grid-template-columns:1fr; }
  }
</style>

<script>
(function(){
  const WD = ['일','월','화','수','목','금','토'];

  function addDays(d, n){ const r = new Date(d); r.setDate(r.getDate() + n); return r; }
  function addYears(d, n){ const r = new Date(d); r.setFullYear(r.getFullYear() + n); return r; }
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

  window.calcBaegil = function(){
    const input = document.getElementById('bg-birth').value;
    if(!input){ alert('아기 생년월일을 입력해 주세요.'); return; }
    const [y, m, d] = input.split('-').map(Number);
    const birth = new Date(y, m - 1, d);
    const today = todayOnly();

    const milestones = [
      { label: '삼칠일 (21일째)', date: addDays(birth, 20) },
      { label: '백일 (100일째)', date: addDays(birth, 99) },
      { label: '200일', date: addDays(birth, 199) },
      { label: '300일', date: addDays(birth, 299) },
      { label: '첫돌 (만 1세 생일)', date: addYears(birth, 1) },
      { label: '500일', date: addDays(birth, 499) },
      { label: '1000일', date: addDays(birth, 999) }
    ].sort((a, b) => a.date - b.date);

    let nextItem = null;
    const rows = milestones.map(item => {
      const isPast = item.date < today;
      let rowClass = '';
      if (isPast){
        rowClass = 'bg-row-past';
      } else if (!nextItem){
        rowClass = 'bg-row-next';
        nextItem = item;
      }
      return `<tr class="${rowClass}"><td>${item.label}</td><td>${fmtShort(item.date)}</td><td>${ddayLabel(item.date)}</td></tr>`;
    }).join('');
    document.getElementById('bg-body').innerHTML = rows;
    document.getElementById('bg-table').style.display = '';

    const nextBox = document.getElementById('bg-next');
    nextBox.style.display = '';
    if (nextItem){
      document.getElementById('bg-next-dday').textContent = ddayLabel(nextItem.date);
      document.getElementById('bg-next-desc').textContent = `${nextItem.label} — ${fmtShort(nextItem.date)}`;
    } else {
      document.getElementById('bg-next-dday').textContent = '완료';
      document.getElementById('bg-next-desc').textContent = '표에 있는 모든 이정표가 지났습니다.';
    }
  };

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.ad-box').forEach(ad => ad.style.minHeight = '120px');
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
    {"@type": "ListItem", "position": 3, "name": "백일·돌 계산기", "item": "https://calculator.khaistory.com/family/baegil/"}
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
      "name": "백일은 왜 출생일+100일이 아니라 +99일인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "한국의 전통 셈법은 태어난 날을 1일째로 포함하기 때문에, 100일째가 되려면 출생일에 99일을 더해야 합니다."}
    },
    {
      "@type": "Question",
      "name": "첫돌은 생후 365일째인가요, 만 1세 생일인가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "실제 돌잔치는 대부분 만 1세 생일(출생일로부터 1년 후 같은 날짜)에 맞춰 열립니다."}
    },
    {
      "@type": "Question",
      "name": "돌잡이는 꼭 전통 물건으로만 해야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "정해진 규칙은 없으며, 전통 물건에 요즘 직업을 상징하는 물건을 섞어 구성하는 경우가 많습니다."}
    },
    {
      "@type": "Question",
      "name": "백일잔치를 꼭 크게 해야 하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "아닙니다. 최근에는 가족끼리 집에서 조촐하게 치르는 경우도 많습니다."}
    },
    {
      "@type": "Question",
      "name": "모바일에서도 사용할 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "네, 반응형으로 제작되어 스마트폰에서도 동일하게 이용 가능합니다."}
    }
  ]
}
</script>
