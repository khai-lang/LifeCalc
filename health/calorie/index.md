---
layout: health
canonical: "https://calculator.khaistory.com/health/calorie/"
meta-description: "성별, 나이, 키, 몸무게, 활동량을 입력하면 Mifflin-St Jeor 공식으로 기초대사량과 하루 필요 칼로리(TDEE)를 계산하고, 감량·유지·증량 목표별 권장 칼로리를 확인할 수 있습니다."
meta-generator: "Jekyll v3.10.0"
meta-og:description: "활동량을 반영한 하루 필요 칼로리(TDEE) 계산기. 감량·유지·증량 목표별 권장 칼로리를 확인하세요."
meta-og:locale: "ko_KR"
meta-og:site_name: "LifeCalc"
meta-og:title: "칼로리 계산기 | 하루 필요 칼로리(TDEE) 계산"
meta-og:type: "website"
meta-og:url: "https://calculator.khaistory.com/health/calorie/"
meta-twitter:card: "summary"
meta-twitter:title: "칼로리 계산기 | 하루 필요 칼로리(TDEE) 계산"
meta-viewport: "width=device-width, initial-scale=1"
title: "칼로리 계산기 | 하루 필요 칼로리(TDEE) 및 목표별 권장 칼로리 | LifeCalc"
categories: [health]
---

<style>
.cal-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border:1px solid #e3d4c5;border-radius:18px;padding:28px 26px;margin:18px 0 24px}
.cal-hero h1{margin:0 0 10px;font-size:1.5rem;color:#3a2c1d}
.cal-hero p{margin:0;color:#5c4a38;line-height:1.6}
.cal-badge{display:inline-block;background:#fce8db;color:#c2410c;font-weight:700;font-size:.82rem;border-radius:999px;padding:4px 12px;margin-bottom:10px}
.cal-card{background:#fff;border:1px solid #f1eae1;border-radius:18px;padding:24px;margin:16px 0}
.cal-card.cal-light{background:#faf7f2;border-color:#eaddcd}
.cal-card h3{border-left:4px solid #8c7355;padding-left:10px;margin:0 0 14px;font-size:1.1rem;color:#3a2c1d}
.cal-field{margin-bottom:16px}
.cal-field label{display:block;font-weight:600;color:#3a2c1d;margin-bottom:6px;font-size:.94rem}
.cal-input,.cal-select{width:100%;box-sizing:border-box;padding:11px 13px;border:1px solid #e3d4c5;border-radius:10px;font-size:1rem;background:#fff;color:#3a2c1d}
.cal-input:focus,.cal-select:focus{outline:none;border-color:#c2410c}
.cal-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
@media (max-width:520px){.cal-row{grid-template-columns:1fr}}
.cal-gender{display:flex;gap:10px;margin-bottom:16px}
.cal-gender button{flex:1;padding:11px;border:1px solid #e3d4c5;background:#fff;color:#785a43;border-radius:10px;font-weight:600;cursor:pointer}
.cal-gender button.active{background:#c2410c;border-color:#c2410c;color:#fff}
.cal-btn-main{background:#c2410c;color:#fff;border:none;border-radius:12px;padding:14px 20px;font-size:1.05rem;font-weight:700;cursor:pointer;width:100%}
.cal-btn-main:hover{background:#a8380a}
.cal-result{text-align:center;padding:16px 0}
.cal-result .cal-label{color:#8c7355;font-size:.92rem;margin-bottom:6px}
.cal-result .cal-value{font-size:2rem;font-weight:800;color:#c2410c}
.cal-goal-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px}
@media (max-width:560px){.cal-goal-grid{grid-template-columns:1fr}}
.cal-goal-box{background:#fff;border:1px solid #f1eae1;border-radius:12px;padding:14px;text-align:center}
.cal-goal-box .cal-goal-label{font-size:.85rem;color:#8c7355;margin-bottom:4px}
.cal-goal-box .cal-goal-value{font-size:1.25rem;font-weight:800;color:#3a2c1d}
.cal-warn{background:#fff4e0;border:1px solid #f3d9a8;border-radius:12px;padding:12px 16px;margin-top:14px;color:#8a5a00;font-size:.88rem;display:none}
.cal-table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.9rem}
.cal-table th,.cal-table td{border:1px solid #f1eae1;padding:8px 9px;text-align:center}
.cal-table th{background:#faf7f2;color:#3a2c1d}
.cal-linkbar{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
.cal-btn-sub{background:#785a43;color:#fff;text-decoration:none;border-radius:10px;padding:9px 16px;font-size:.9rem;font-weight:600}
.cal-faq details{border:1px solid #f1eae1;border-radius:12px;padding:14px 16px;margin-bottom:10px}
.cal-faq summary{font-weight:700;color:#3a2c1d;cursor:pointer}
.cal-faq p{margin:10px 0 0;color:#5c4a38;line-height:1.6}
.cal-source{font-size:.8rem;color:#8c7355;margin-top:18px}
.cal-source a{color:#785a43}

.cal-related-card{background:linear-gradient(135deg,#ff7a00,#e56d00);border:none;border-radius:18px;padding:24px;margin:16px 0}
.cal-related-card h3{border-left:4px solid #fff;padding-left:10px;margin:0 0 6px;font-size:1.1rem;color:#fff}
.cal-related-card p{color:#ffe8d1;margin:0 0 14px;font-size:.92rem}
.cal-related{display:flex;gap:12px;flex-wrap:wrap}
.cal-related a{flex:1;min-width:200px;background:#fff;border:none;border-radius:14px;padding:16px;text-decoration:none;color:#c2410c;font-weight:700}
.cal-related a small{display:block;font-weight:400;color:#8c7355;margin-top:4px}
.cal-related a:hover{background:#fff6ee}
</style>

<div class="cal-hero">
  <span class="cal-badge">건강 계산기</span>
  <h2>칼로리 계산기</h2>
  <p>성별, 나이, 키, 몸무게와 평소 활동량을 입력하면 <strong>기초대사량(BMR)</strong>과
  <strong>하루 총 필요 칼로리(TDEE)</strong>를 계산하고, 감량·유지·증량 목표별 권장 칼로리를 확인할 수 있습니다.</p>
</div>

<div class="cal-card">
  <h3>칼로리 계산</h3>

  <div class="cal-gender">
    <button type="button" class="cal-gender-btn active" data-gender="male">남성</button>
    <button type="button" class="cal-gender-btn" data-gender="female">여성</button>
  </div>

  <div class="cal-row">
    <div class="cal-field">
      <label for="cal-age">나이 (세)</label>
      <input type="number" inputmode="numeric" class="cal-input" id="cal-age" placeholder="예: 32">
    </div>
    <div class="cal-field">
      <label for="cal-height">키 (cm)</label>
      <input type="number" inputmode="decimal" class="cal-input" id="cal-height" placeholder="예: 170">
    </div>
  </div>
  <div class="cal-field">
    <label for="cal-weight">몸무게 (kg)</label>
    <input type="number" inputmode="decimal" class="cal-input" id="cal-weight" placeholder="예: 65">
  </div>
  <div class="cal-field">
    <label for="cal-activity">평소 활동량</label>
    <select class="cal-select" id="cal-activity">
      <option value="1.2">거의 운동 안 함 (좌식 생활)</option>
      <option value="1.375">가벼운 운동 (주 1~3회)</option>
      <option value="1.55" selected>보통 활동 (주 3~5회 운동)</option>
      <option value="1.725">활발한 활동 (주 6~7회 운동)</option>
      <option value="1.9">매우 격렬한 활동 (강도 높은 운동 + 육체노동)</option>
    </select>
  </div>

  <button type="button" class="cal-btn-main" id="cal-calc-btn">칼로리 계산하기</button>

  <div class="cal-card cal-light" style="margin-top:18px">
    <div class="cal-result">
      <div class="cal-label">기초대사량 (BMR)</div>
      <div class="cal-value" id="cal-bmr-value">—</div>
    </div>
    <div class="cal-result" style="padding-top:0">
      <div class="cal-label">하루 총 필요 칼로리 (TDEE)</div>
      <div class="cal-value" id="cal-tdee-value">—</div>
    </div>
    <div class="cal-goal-grid" id="cal-goal-grid" style="display:none">
      <div class="cal-goal-box">
        <div class="cal-goal-label">감량 목표</div>
        <div class="cal-goal-value" id="cal-goal-lose">—</div>
      </div>
      <div class="cal-goal-box">
        <div class="cal-goal-label">유지 목표</div>
        <div class="cal-goal-value" id="cal-goal-maintain">—</div>
      </div>
      <div class="cal-goal-box">
        <div class="cal-goal-label">증량 목표</div>
        <div class="cal-goal-value" id="cal-goal-gain">—</div>
      </div>
    </div>
    <div class="cal-warn" id="cal-warn">
      ⚠️ 계산된 감량 목표 칼로리가 최소 권장 수준(여성 1,200kcal, 남성 1,500kcal)보다 낮습니다.
      지나친 저칼로리 식단은 영양 결핍과 근손실을 유발할 수 있으니 의사·영양사와 상담 후 진행하세요.
    </div>
  </div>
</div>

<div class="cal-card">
  <h3>계산 방법 (Mifflin-St Jeor 공식)</h3>
  <p>이 계산기는 1990년 발표되어 현재 영양학에서 가장 널리 쓰이는 <strong>Mifflin-St Jeor 공식</strong>으로
  기초대사량(BMR)을 계산합니다. 과거 널리 쓰이던 Harris-Benedict 공식(1919년)보다 현대인의 체성분에 더 정확하다고
  평가받고 있습니다.</p>
  <table class="cal-table">
    <tr><th>성별</th><th>공식</th></tr>
    <tr><td>남성</td><td>BMR = 10×몸무게(kg) + 6.25×키(cm) − 5×나이 + 5</td></tr>
    <tr><td>여성</td><td>BMR = 10×몸무게(kg) + 6.25×키(cm) − 5×나이 − 161</td></tr>
  </table>

  <h3 style="margin-top:22px">활동계수 (TDEE = BMR × 활동계수)</h3>
  <table class="cal-table">
    <tr><th>활동 수준</th><th>계수</th></tr>
    <tr><td>거의 운동 안 함 (좌식 생활)</td><td>1.2</td></tr>
    <tr><td>가벼운 운동 (주 1~3회)</td><td>1.375</td></tr>
    <tr><td>보통 활동 (주 3~5회 운동)</td><td>1.55</td></tr>
    <tr><td>활발한 활동 (주 6~7회 운동)</td><td>1.725</td></tr>
    <tr><td>매우 격렬한 활동 (강도 높은 운동 + 육체노동)</td><td>1.9</td></tr>
  </table>

  <h3 style="margin-top:22px">목표별 권장 칼로리</h3>
  <p>일반적으로 체지방 1kg을 줄이거나 늘리는 데 약 7,700kcal의 에너지 차이가 필요하다고 알려져 있습니다.
  이 계산기는 하루 TDEE에서 <strong>±500kcal</strong>를 가감해 주 약 0.45kg(1파운드) 수준의
  점진적인 감량·증량 목표를 제시합니다.</p>
  <ul style="color:#5c4a38;line-height:1.8">
    <li><strong>감량 목표</strong>: TDEE − 500kcal</li>
    <li><strong>유지 목표</strong>: TDEE</li>
    <li><strong>증량 목표</strong>: TDEE + 500kcal</li>
  </ul>
  <p class="cal-hint" style="color:#8c7355;font-size:.85rem">이 계산기는 참고용 추정치입니다. 개인의 근육량, 호르몬, 건강 상태에 따라
  실제 필요 칼로리는 달라질 수 있습니다. 질환이 있거나 극단적인 체중 변화를 계획 중이라면
  반드시 의사·영양사와 상담하세요.</p>

  <div class="cal-linkbar">
    <a class="cal-btn-sub" href="https://calculator.khaistory.com/guide/bmi-obesity-2026/">BMI·비만도 완전정리 가이드 보기</a>
  </div>

  <p class="cal-source">근거: Mifflin MD, St Jeor ST 등 (1990), &laquo;A new predictive equation for resting energy expenditure in healthy individuals&raquo;,
  American Journal of Clinical Nutrition. 활동계수는 미국 국립보건원(NIH) 및 다수 영양학 교재에서 통용되는 기준입니다.</p>
</div>

<div class="cal-card cal-faq">
  <h3>자주 묻는 질문 (FAQ)</h3>

  <details>
    <summary>Q. BMR과 TDEE는 어떻게 다른가요?</summary>
    <p>BMR(기초대사량)은 아무 활동도 하지 않고 누워만 있어도 생명 유지를 위해 소모되는 최소 칼로리입니다.
    TDEE(하루 총 에너지 소비량)는 여기에 일상 활동과 운동량을 반영한 실제 하루 필요 칼로리입니다.</p>
  </details>

  <details>
    <summary>Q. 감량 목표 칼로리를 더 낮추면 더 빨리 뺄 수 있나요?</summary>
    <p>단기적으로는 체중이 더 빨리 줄 수 있지만, 필요 이상으로 낮은 칼로리는 근손실, 요요, 영양 결핍의
    위험을 키웁니다. 일반적으로 하루 500kcal 내외의 완만한 적자를 권장하며, 그 이상의 제한은
    전문가와 상담 후 결정하는 것이 안전합니다.</p>
  </details>

  <details>
    <summary>Q. 계산 결과가 실제와 다를 수 있나요?</summary>
    <p>네. Mifflin-St Jeor 공식은 평균적인 성인을 기준으로 한 추정식입니다. 근육량이 매우 많거나 적은 경우,
    임신·수유 중이거나 대사 질환이 있는 경우에는 실제 필요 칼로리와 차이가 날 수 있습니다.</p>
  </details>

  <details>
    <summary>Q. 활동량은 어떻게 선택해야 하나요?</summary>
    <p>운동 시간뿐 아니라 직업 특성(사무직·현장직)과 평소 걸음 수도 함께 고려해 선택하세요.
    확신이 서지 않는다면 낮은 단계부터 선택해 결과를 보고 조정하는 것이 안전합니다.</p>
  </details>
</div>

<div class="cal-related-card">
  <h3>함께 보면 좋은 계산기</h3>
  <p>칼로리를 확인했다면, BMI와 기초대사량도 함께 점검해보세요.</p>
  <div class="cal-related">
    <a href="https://calculator.khaistory.com/health/bmi/">BMI 계산기<small>체질량지수·비만도 확인</small></a>
    <a href="https://calculator.khaistory.com/health/bmr/">BMR 계산기<small>기초대사량만 빠르게 확인</small></a>
    <a href="https://calculator.khaistory.com/health/water-intake/">물 섭취량 계산기<small>하루 권장 수분 섭취량</small></a>
  </div>
</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "건강 계산기", "item": "https://calculator.khaistory.com/health/"},
    {"@type": "ListItem", "position": 3, "name": "칼로리 계산기", "item": "https://calculator.khaistory.com/health/calorie/"}
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
      "name": "BMR과 TDEE는 어떻게 다른가요?",
      "acceptedAnswer": {"@type": "Answer", "text": "BMR은 생명 유지를 위한 최소 칼로리이고, TDEE는 활동량을 반영한 실제 하루 필요 칼로리입니다."}
    },
    {
      "@type": "Question",
      "name": "감량 목표 칼로리를 더 낮추면 더 빨리 뺄 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "단기적으로 체중이 더 빨리 줄 수 있지만 근손실과 영양 결핍 위험이 커지므로 하루 500kcal 내외의 완만한 적자를 권장합니다."}
    },
    {
      "@type": "Question",
      "name": "계산 결과가 실제와 다를 수 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "Mifflin-St Jeor 공식은 평균적인 성인 기준 추정식으로, 근육량이나 건강 상태에 따라 실제와 차이가 날 수 있습니다."}
    }
  ]
}
</script>

<script>
(function(){
  var gender = 'male';
  document.querySelectorAll('.cal-gender-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      document.querySelectorAll('.cal-gender-btn').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      gender = btn.dataset.gender;
    });
  });

  function won(n){ return Math.round(n).toLocaleString('ko-KR') + 'kcal'; }

  document.getElementById('cal-calc-btn').addEventListener('click', function(){
    var age = parseFloat(document.getElementById('cal-age').value);
    var height = parseFloat(document.getElementById('cal-height').value);
    var weight = parseFloat(document.getElementById('cal-weight').value);
    var activity = parseFloat(document.getElementById('cal-activity').value);

    var bmrEl = document.getElementById('cal-bmr-value');
    var tdeeEl = document.getElementById('cal-tdee-value');
    var goalGrid = document.getElementById('cal-goal-grid');
    var warn = document.getElementById('cal-warn');

    if (!age || !height || !weight || age <= 0 || height <= 0 || weight <= 0){
      bmrEl.textContent = '나이·키·몸무게를 입력해주세요';
      tdeeEl.textContent = '—';
      goalGrid.style.display = 'none';
      warn.style.display = 'none';
      return;
    }

    var bmr = gender === 'male'
      ? (10 * weight + 6.25 * height - 5 * age + 5)
      : (10 * weight + 6.25 * height - 5 * age - 161);
    var tdee = bmr * activity;

    bmrEl.textContent = won(bmr);
    tdeeEl.textContent = won(tdee);

    var lose = tdee - 500;
    var maintain = tdee;
    var gain = tdee + 500;

    document.getElementById('cal-goal-lose').textContent = won(lose);
    document.getElementById('cal-goal-maintain').textContent = won(maintain);
    document.getElementById('cal-goal-gain').textContent = won(gain);
    goalGrid.style.display = 'grid';

    var floor = gender === 'male' ? 1500 : 1200;
    warn.style.display = lose < floor ? 'block' : 'none';
  });
})();
</script>
