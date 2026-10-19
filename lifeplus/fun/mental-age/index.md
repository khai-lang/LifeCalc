---
layout: post
title: 정신연령 테스트 2026 — 15문항으로 알아보는 나의 정신연령
description: 15개 문항에 답하면 추정 정신연령과 유형, 영역별 점수를 바로 알려드립니다. 회원가입 없이 1분이면 끝나는 무료 정신연령 테스트.
permalink: /lifeplus/fun/mental-age/
section: lifeplus
redirect_from:
  - /fun/mental-age/
---

<style>
  .as-subnav { display:flex; gap:8px; flex-wrap:wrap; margin:0 0 14px; }
  .as-subnav a { display:inline-block; padding:6px 14px; border:1px solid #b8c7d9; border-radius:999px; background:#fff; color:#0b4f7c; font-size:14px; font-weight:600; text-decoration:none; }
  .as-subnav a:hover { background:#eaf3fb; }
  .as-intro { margin:0 0 16px; line-height:1.75; font-size:15px; color:#3d4650; }
  .as-note { font-size:13px; color:#5f6b76; line-height:1.6; margin:12px 0 0; }
  .as-ad { margin:26px 0; text-align:center; min-height:100px; }
  .as-ad-label { display:block; font-size:11px; color:#8a949e; margin-bottom:4px; }
  .as-scroll { overflow-x:auto; }
  .as-table { width:100%; border-collapse:collapse; font-size:14px; }
  .as-table th, .as-table td { border:1px solid #e3e8ee; padding:8px 10px; text-align:left; vertical-align:top; color:#1f2933; }
  .as-table th { background:#f1f5f9; white-space:nowrap; }
  .as-links { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:10px; }
  .as-links a { display:block; padding:12px 14px; border:1px solid #e3e8ee; border-radius:12px; background:#fff; text-decoration:none; color:#0b4f7c; font-weight:700; }
  .as-links a span { display:block; font-weight:400; font-size:13px; color:#5f6b76; margin-top:3px; }
  .as-links a:hover { background:#eaf3fb; }

  .ma-progress { height:8px; background:#e3e8ee; border-radius:999px; overflow:hidden; margin:4px 0 6px; }
  .ma-progress > i { display:block; height:100%; width:0; background:#ff6a00; transition:width .25s ease; }
  .ma-count { font-size:13px; color:#3d4650; margin:0 0 6px; }
  .ma-legend { font-size:13px; color:#5f6b76; margin:0 0 4px; }
  .ma-qbox { background:#eaf3fb; border:1px solid #cfe0ee; border-radius:12px; padding:16px 16px; margin:14px 0; box-shadow:0 3px 8px rgba(0,0,0,0.04); transition:border-color .2s, box-shadow .2s; }
  .ma-qbox.ma-done { background:#f3f9ee; border-color:#cfe5c0; }
  .ma-qbox.ma-missing { border-color:#e11d48; box-shadow:0 0 0 3px rgba(225,29,72,.15); }
  .ma-q { font-size:18px; font-weight:600; margin:0 0 12px; color:#1f2933; line-height:1.5; }
  .ma-scale { display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
  .ma-scale label { background:#fff; border:1px solid #d5dde5; border-radius:8px; padding:8px 12px; cursor:pointer; font-size:15px; color:#1f2933; display:inline-flex; align-items:center; gap:6px; transition:background .2s, border-color .2s; }
  .ma-scale input { accent-color:#ff6a00; }
  .ma-scale label:hover { background:#fff4e6; border-color:#ffddb0; }
  .ma-msg { min-height:20px; font-size:14px; color:#be123c; margin:10px 0 0; }
  .ma-actions { display:flex; gap:10px; flex-wrap:wrap; margin-top:10px; align-items:center; }

  .ma-res-top { font-size:16px; color:#3d4650; margin-bottom:4px; }
  .ma-age { font-size:34px; font-weight:800; color:#1f2933; line-height:1.2; }
  .ma-title { font-size:20px; font-weight:800; margin:4px 0 8px; color:#1f2933; }
  .ma-tip { font-size:14px; color:#0b4f7c; margin:8px 0 0; }
  .ma-bars { margin:14px 0 4px; }
  .ma-bar-row { display:grid; grid-template-columns:84px 1fr 34px; gap:8px; align-items:center; font-size:13px; color:#1f2933; margin:6px 0; }
  .ma-track { height:10px; background:#e3e8ee; border-radius:999px; overflow:hidden; }
  .ma-track > i { display:block; height:100%; background:#0b7a9e; }
  .ma-next { font-size:14px; color:#3d4650; line-height:1.7; margin:12px 0 0; }
  .ma-status { font-size:13px; color:#0b7a43; }
</style>

<nav class="as-subnav" aria-label="라이프+ 메뉴">
  <a href="/lifeplus/">라이프+ 허브</a>
  <a href="/lifeplus/fun/">테스트/심리</a>
  <a href="/lifeplus/fun/astro/">별자리·띠 찾기</a>
  <a href="/lifeplus/challenge/">30일 챌린지</a>
</nav>

<p class="as-intro">
  15개 문항에 "전혀 아니다"부터 "매우 그렇다"까지 답하면 <b>추정 정신연령</b>과 나만의 유형, 영역별 점수를 알려드립니다.
  답변은 브라우저에서만 계산되고 서버로 보내지지 않아요. 결과는 재미로 보는 참고용이며 실제 심리 평가가 아닙니다.
</p>

<div class="card" style="max-width:900px;margin:0 auto;">
  <p class="ma-legend">각 문항에 본인과 가까운 정도를 골라 주세요. (1점 전혀 아니다 ~ 5점 매우 그렇다)</p>
  <div class="ma-progress" aria-hidden="true"><i id="ma-bar"></i></div>
  <p class="ma-count" id="ma-count">0 / 15 응답</p>

  <form id="ma-form" novalidate>
    <div id="quiz">
<div class="ma-qbox" id="qb0"><p class="ma-q">1. 새로운 것보다는 익숙한 것을 선호한다.</p><div class="ma-scale" role="radiogroup" aria-label="1번 문항"><label for="q0_1"><input type="radio" name="q0" id="q0_1" value="1"> 전혀 아니다</label><label for="q0_2"><input type="radio" name="q0" id="q0_2" value="2"> 아니다</label><label for="q0_3"><input type="radio" name="q0" id="q0_3" value="3"> 보통</label><label for="q0_4"><input type="radio" name="q0" id="q0_4" value="4"> 그렇다</label><label for="q0_5"><input type="radio" name="q0" id="q0_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb1"><p class="ma-q">2. 감정보다 이성을 우선하여 결정한다.</p><div class="ma-scale" role="radiogroup" aria-label="2번 문항"><label for="q1_1"><input type="radio" name="q1" id="q1_1" value="1"> 전혀 아니다</label><label for="q1_2"><input type="radio" name="q1" id="q1_2" value="2"> 아니다</label><label for="q1_3"><input type="radio" name="q1" id="q1_3" value="3"> 보통</label><label for="q1_4"><input type="radio" name="q1" id="q1_4" value="4"> 그렇다</label><label for="q1_5"><input type="radio" name="q1" id="q1_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb2"><p class="ma-q">3. 계획표를 세우고 그에 맞춰 움직이는 편이다.</p><div class="ma-scale" role="radiogroup" aria-label="3번 문항"><label for="q2_1"><input type="radio" name="q2" id="q2_1" value="1"> 전혀 아니다</label><label for="q2_2"><input type="radio" name="q2" id="q2_2" value="2"> 아니다</label><label for="q2_3"><input type="radio" name="q2" id="q2_3" value="3"> 보통</label><label for="q2_4"><input type="radio" name="q2" id="q2_4" value="4"> 그렇다</label><label for="q2_5"><input type="radio" name="q2" id="q2_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb3"><p class="ma-q">4. 실수했을 때 빠르게 인정하고 수정한다.</p><div class="ma-scale" role="radiogroup" aria-label="4번 문항"><label for="q3_1"><input type="radio" name="q3" id="q3_1" value="1"> 전혀 아니다</label><label for="q3_2"><input type="radio" name="q3" id="q3_2" value="2"> 아니다</label><label for="q3_3"><input type="radio" name="q3" id="q3_3" value="3"> 보통</label><label for="q3_4"><input type="radio" name="q3" id="q3_4" value="4"> 그렇다</label><label for="q3_5"><input type="radio" name="q3" id="q3_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb4"><p class="ma-q">5. 주변의 시선보다 스스로의 기준을 더 중요하게 여긴다.</p><div class="ma-scale" role="radiogroup" aria-label="5번 문항"><label for="q4_1"><input type="radio" name="q4" id="q4_1" value="1"> 전혀 아니다</label><label for="q4_2"><input type="radio" name="q4" id="q4_2" value="2"> 아니다</label><label for="q4_3"><input type="radio" name="q4" id="q4_3" value="3"> 보통</label><label for="q4_4"><input type="radio" name="q4" id="q4_4" value="4"> 그렇다</label><label for="q4_5"><input type="radio" name="q4" id="q4_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb5"><p class="ma-q">6. 중요하지 않은 일은 과감히 미룬다.</p><div class="ma-scale" role="radiogroup" aria-label="6번 문항"><label for="q5_1"><input type="radio" name="q5" id="q5_1" value="1"> 전혀 아니다</label><label for="q5_2"><input type="radio" name="q5" id="q5_2" value="2"> 아니다</label><label for="q5_3"><input type="radio" name="q5" id="q5_3" value="3"> 보통</label><label for="q5_4"><input type="radio" name="q5" id="q5_4" value="4"> 그렇다</label><label for="q5_5"><input type="radio" name="q5" id="q5_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb6"><p class="ma-q">7. 돈 관리(예산/저축/지출)를 꾸준히 한다.</p><div class="ma-scale" role="radiogroup" aria-label="7번 문항"><label for="q6_1"><input type="radio" name="q6" id="q6_1" value="1"> 전혀 아니다</label><label for="q6_2"><input type="radio" name="q6" id="q6_2" value="2"> 아니다</label><label for="q6_3"><input type="radio" name="q6" id="q6_3" value="3"> 보통</label><label for="q6_4"><input type="radio" name="q6" id="q6_4" value="4"> 그렇다</label><label for="q6_5"><input type="radio" name="q6" id="q6_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb7"><p class="ma-q">8. 타인의 입장을 고려해 말을 고른다.</p><div class="ma-scale" role="radiogroup" aria-label="8번 문항"><label for="q7_1"><input type="radio" name="q7" id="q7_1" value="1"> 전혀 아니다</label><label for="q7_2"><input type="radio" name="q7" id="q7_2" value="2"> 아니다</label><label for="q7_3"><input type="radio" name="q7" id="q7_3" value="3"> 보통</label><label for="q7_4"><input type="radio" name="q7" id="q7_4" value="4"> 그렇다</label><label for="q7_5"><input type="radio" name="q7" id="q7_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb8"><p class="ma-q">9. 건강(수면/운동/식습관)을 일정하게 관리한다.</p><div class="ma-scale" role="radiogroup" aria-label="9번 문항"><label for="q8_1"><input type="radio" name="q8" id="q8_1" value="1"> 전혀 아니다</label><label for="q8_2"><input type="radio" name="q8" id="q8_2" value="2"> 아니다</label><label for="q8_3"><input type="radio" name="q8" id="q8_3" value="3"> 보통</label><label for="q8_4"><input type="radio" name="q8" id="q8_4" value="4"> 그렇다</label><label for="q8_5"><input type="radio" name="q8" id="q8_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb9"><p class="ma-q">10. 감정적으로 힘들 때 도움을 요청할 줄 안다.</p><div class="ma-scale" role="radiogroup" aria-label="10번 문항"><label for="q9_1"><input type="radio" name="q9" id="q9_1" value="1"> 전혀 아니다</label><label for="q9_2"><input type="radio" name="q9" id="q9_2" value="2"> 아니다</label><label for="q9_3"><input type="radio" name="q9" id="q9_3" value="3"> 보통</label><label for="q9_4"><input type="radio" name="q9" id="q9_4" value="4"> 그렇다</label><label for="q9_5"><input type="radio" name="q9" id="q9_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb10"><p class="ma-q">11. 장기 목표와 단기 목표를 구분해 실행한다.</p><div class="ma-scale" role="radiogroup" aria-label="11번 문항"><label for="q10_1"><input type="radio" name="q10" id="q10_1" value="1"> 전혀 아니다</label><label for="q10_2"><input type="radio" name="q10" id="q10_2" value="2"> 아니다</label><label for="q10_3"><input type="radio" name="q10" id="q10_3" value="3"> 보통</label><label for="q10_4"><input type="radio" name="q10" id="q10_4" value="4"> 그렇다</label><label for="q10_5"><input type="radio" name="q10" id="q10_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb11"><p class="ma-q">12. 실패를 학습 기회로 받아들이는 편이다.</p><div class="ma-scale" role="radiogroup" aria-label="12번 문항"><label for="q11_1"><input type="radio" name="q11" id="q11_1" value="1"> 전혀 아니다</label><label for="q11_2"><input type="radio" name="q11" id="q11_2" value="2"> 아니다</label><label for="q11_3"><input type="radio" name="q11" id="q11_3" value="3"> 보통</label><label for="q11_4"><input type="radio" name="q11" id="q11_4" value="4"> 그렇다</label><label for="q11_5"><input type="radio" name="q11" id="q11_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb12"><p class="ma-q">13. SNS/알림에 즉각 반응하지 않아도 괜찮다.</p><div class="ma-scale" role="radiogroup" aria-label="13번 문항"><label for="q12_1"><input type="radio" name="q12" id="q12_1" value="1"> 전혀 아니다</label><label for="q12_2"><input type="radio" name="q12" id="q12_2" value="2"> 아니다</label><label for="q12_3"><input type="radio" name="q12" id="q12_3" value="3"> 보통</label><label for="q12_4"><input type="radio" name="q12" id="q12_4" value="4"> 그렇다</label><label for="q12_5"><input type="radio" name="q12" id="q12_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb13"><p class="ma-q">14. 관계에서 경계(바운더리)를 설정할 줄 안다.</p><div class="ma-scale" role="radiogroup" aria-label="14번 문항"><label for="q13_1"><input type="radio" name="q13" id="q13_1" value="1"> 전혀 아니다</label><label for="q13_2"><input type="radio" name="q13" id="q13_2" value="2"> 아니다</label><label for="q13_3"><input type="radio" name="q13" id="q13_3" value="3"> 보통</label><label for="q13_4"><input type="radio" name="q13" id="q13_4" value="4"> 그렇다</label><label for="q13_5"><input type="radio" name="q13" id="q13_5" value="5"> 매우 그렇다</label></div></div>
<div class="ma-qbox" id="qb14"><p class="ma-q">15. 내가 통제할 수 없는 일은 내려놓는다.</p><div class="ma-scale" role="radiogroup" aria-label="15번 문항"><label for="q14_1"><input type="radio" name="q14" id="q14_1" value="1"> 전혀 아니다</label><label for="q14_2"><input type="radio" name="q14" id="q14_2" value="2"> 아니다</label><label for="q14_3"><input type="radio" name="q14" id="q14_3" value="3"> 보통</label><label for="q14_4"><input type="radio" name="q14" id="q14_4" value="4"> 그렇다</label><label for="q14_5"><input type="radio" name="q14" id="q14_5" value="5"> 매우 그렇다</label></div></div>
    </div>

    <div class="ma-msg" id="ma-msg" role="alert"></div>
    <div class="ma-actions">
      <button class="btn" type="submit">결과 보기</button>
      <button class="btn ghost" type="button" id="ma-reset">다시 하기</button>
    </div>
  </form>

  <div id="ma-out" class="result-box" aria-live="polite" style="margin-top:16px;"></div>
</div>

<div class="as-ad">
  <span class="as-ad-label">광고</span>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>

<section class="card p">
  <h2>정신연령 테스트란?</h2>
  <p style="line-height:1.8;">
    정신연령 테스트는 실제 나이가 아니라 <b>평소의 생각과 행동이 몇 살 즈음의 모습에 가까운지</b>를 가볍게 살펴보는 재미용 테스트입니다.
    계획을 세우는 습관, 돈과 건강을 관리하는 방식, 감정을 다루는 방법, 사람 사이의 거리 두기 같은 일상 문항으로 구성했어요.
    점수가 높다고 좋고 낮다고 나쁜 것이 아니라, 지금의 나를 한 번 돌아보는 계기로 활용해 주세요.
  </p>
</section>

<section class="card p">
  <h2>이렇게 계산됩니다</h2>
  <ul style="line-height:1.9;">
    <li>15개 문항을 <b>1~5점</b>으로 합산합니다. (최저 15점, 최고 75점)</li>
    <li>합계를 <b>0~100점</b>으로 환산합니다. (합계 − 15) ÷ 60 × 100</li>
    <li>환산 점수로 <b>추정 정신연령</b>을 구합니다. 10 + 환산 점수 × 0.55 (약 10~65세)</li>
    <li>추정 연령이 속하는 구간에 따라 연령대와 유형이 정해집니다.</li>
    <li>문항을 <b>판단·성향 / 계획·재정 / 건강·생활 / 관계 / 마인드</b> 5개 영역으로 나눠 영역별 점수도 보여드립니다.</li>
  </ul>
</section>

<section class="card p">
  <h2>정신연령 유형 한눈에 보기</h2>
  <div class="as-scroll">
  <table class="as-table">
    <thead><tr><th>추정 연령</th><th>연령대</th><th>유형</th><th>특징</th></tr></thead>
    <tbody>
<tr><td>~16세</td><td>10대 초중반</td><td>스파클 ⚡</td><td>호기심이 폭발하는 타입이에요. 새로운 것과 놀이, 도전이 에너지의 원천입니다.</td></tr>
<tr><td>17~24세</td><td>10대 후반~20대 초</td><td>트렌드 메이커 🔥</td><td>새로움에 강하고 실행이 빠른 타입이에요.</td></tr>
<tr><td>25~33세</td><td>20대 후반~30대 초</td><td>밸런서 🎯</td><td>일·관계·재미의 균형을 잘 맞추는 타입이에요.</td></tr>
<tr><td>34~39세</td><td>30대 중후반</td><td>리얼리스트 🧭</td><td>현실 감각이 뛰어나고 계획적인 타입이에요.</td></tr>
<tr><td>40~49세</td><td>40대</td><td>케어테이커 🏡</td><td>안정과 책임, 내실을 중시하는 마음을 가졌어요.</td></tr>
<tr><td>50~59세</td><td>50대</td><td>멘탈 장인 🛠️</td><td>경험에서 나오는 침착함과 통찰이 돋보이는 타입이에요.</td></tr>
<tr><td>60세 이상</td><td>60대+</td><td>세이지 🌳</td><td>여유와 지혜가 돋보이는 어른스러운 마음이에요.</td></tr>
    </tbody>
  </table>
  </div>
  <p class="as-note">* 점수가 높을수록 안정·계획·감정 조절을 중시하는 문항에 "그렇다"고 답했다는 뜻이며, 실제 성숙도나 능력을 평가하지 않습니다.</p>
</section>

<div class="as-ad">
  <span class="as-ad-label">광고</span>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>

<section class="card p">
  <h2>함께 해보면 좋은 테스트·계산기</h2>
  <div class="as-links">
    <a href="/lifeplus/fun/astro/">별자리·띠 찾기<span>생년월일로 별자리와 띠 확인</span></a>
    <a href="/life/age/">만나이 계산기<span>정확한 만 나이 계산</span></a>
    <a href="/lifeplus/challenge/">30일 챌린지<span>작은 습관을 30일 동안 체크</span></a>
    <a href="/salary/net-pay/">연봉 실수령 계산기<span>월급에서 실제로 받는 돈 확인</span></a>
    <a href="/health/water-intake/">물 섭취량 계산기<span>하루 물 섭취 목표 계산</span></a>
    <a href="/lifeplus/guide/">가이드 글 모아보기<span>생활 금융·세금 정보 읽기</span></a>
  </div>
</section>

<section class="np-faq">
  <h2>자주 묻는 질문</h2>
  <details>
    <summary>정신연령은 어떻게 계산되나요?</summary>
    <p>15개 문항의 점수(1~5점)를 합산해 0~100점으로 환산한 뒤, 10 + 환산 점수 × 0.55 공식으로 추정 연령을 구합니다. 모두 "전혀 아니다"면 약 10세, 모두 "매우 그렇다"면 약 65세가 나옵니다.</p>
  </details>
  <details>
    <summary>실제 나이와 결과가 많이 달라요. 이상한 건가요?</summary>
    <p>전혀 이상하지 않습니다. 이 테스트는 계획성·안정 지향 같은 성향을 재미로 환산한 것이라 실제 나이와 무관하게 나올 수 있어요. 점수가 높거나 낮다고 우열이 있는 것은 아닙니다.</p>
  </details>
  <details>
    <summary>다시 하면 결과가 달라지나요?</summary>
    <p>그날의 기분이나 최근 상황에 따라 답이 달라질 수 있어서 결과도 조금씩 바뀝니다. 기분이 다른 날 다시 해 보면 재미있어요.</p>
  </details>
  <details>
    <summary>입력한 답변은 저장되나요?</summary>
    <p>답변은 브라우저에서만 계산하며 서버로 전송하거나 저장하지 않습니다. 페이지를 닫으면 사라집니다.</p>
  </details>
  <details>
    <summary>결과를 친구에게 공유하려면 어떻게 하나요?</summary>
    <p>결과 화면의 "내 결과 공유하기" 버튼을 누르면 결과와 링크가 공유되거나 복사됩니다. 답변 내용은 공유되지 않고 연령대와 유형만 담깁니다.</p>
  </details>
  <details>
    <summary>이 결과를 심리 상태 진단으로 봐도 되나요?</summary>
    <p>아니요. 재미용 도구이며 의학적·심리학적 진단이 아닙니다. 마음이 힘든 상태가 이어진다면 가까운 사람이나 전문가와 상담해 보세요.</p>
  </details>
</section>

<section class="card p">
  <div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;">
    <a class="btn ghost" href="/lifeplus/fun/">테스트/심리 모음으로</a>
    <a class="btn" href="/lifeplus/fun/astro/">별자리·띠 찾기</a>
    <a class="btn" href="/life/age/">만나이 계산하기</a>
  </div>
</section>

<script>
(function () {
  // 광고 스크립트가 아직 없을 때만 불러옵니다(중복 로드 방지).
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    var ad = document.createElement('script');
    ad.async = true;
    ad.crossOrigin = 'anonymous';
    ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831';
    document.head.appendChild(ad);
  }

  var PAGE_URL = 'https://calculator.khaistory.com/lifeplus/fun/mental-age/';
  var N = 15;
  var BANDS = [{"max": 16, "band": "10대 초중반", "tag": "스파클 ⚡", "desc": "호기심이 폭발하는 타입이에요. 새로운 것과 놀이, 도전이 에너지의 원천입니다.", "tip": "하고 싶은 일을 작게라도 바로 해 보는 게 이 유형의 힘이에요."}, {"max": 24, "band": "10대 후반~20대 초", "tag": "트렌드 메이커 🔥", "desc": "새로움에 강하고 실행이 빠른 타입이에요.", "tip": "속도에 균형을 더하려면 일주일 계획을 가볍게 적어 보세요."}, {"max": 33, "band": "20대 후반~30대 초", "tag": "밸런서 🎯", "desc": "일·관계·재미의 균형을 잘 맞추는 타입이에요.", "tip": "지금의 균형을 지키려면 쉬는 시간도 일정에 넣어 두세요."}, {"max": 39, "band": "30대 중후반", "tag": "리얼리스트 🧭", "desc": "현실 감각이 뛰어나고 계획적인 타입이에요.", "tip": "가끔은 계획 밖의 즉흥적인 하루도 선물해 보세요."}, {"max": 49, "band": "40대", "tag": "케어테이커 🏡", "desc": "안정과 책임, 내실을 중시하는 마음을 가졌어요.", "tip": "다른 사람을 챙기는 만큼 나를 위한 시간도 챙겨 주세요."}, {"max": 59, "band": "50대", "tag": "멘탈 장인 🛠️", "desc": "경험에서 나오는 침착함과 통찰이 돋보이는 타입이에요.", "tip": "쌓아 온 노하우를 주변에 나누면 더 빛나요."}, {"max": 999, "band": "60대+", "tag": "세이지 🌳", "desc": "여유와 지혜가 돋보이는 어른스러운 마음이에요.", "tip": "새로운 취미 하나가 어른스러운 여유에 활력을 더해 줄 거예요."}];
  // 영역별 문항(0부터 시작하는 번호)
  var CATS = [
    { n: '판단·성향', q: [0, 1, 5] },
    { n: '계획·재정', q: [2, 6, 10] },
    { n: '건강·생활', q: [8, 12] },
    { n: '관계',      q: [7, 9, 13] },
    { n: '마인드',    q: [3, 4, 11, 14] }
  ];
  // 영역별 다음 행동 제안
  var NEXT = {
    '판단·성향': { msg: '판단·성향 점수가 상대적으로 낮게 나왔어요. 오늘의 뉴스를 읽으며 생각을 정리하는 습관을 만들어 보면 어떨까요?',
                   links: [['/lifeplus/insight/', '오늘의 인사이트'], ['/lifeplus/daily-data/', '오늘의 환율·날씨']] },
    '계획·재정': { msg: '계획·재정 점수가 상대적으로 낮게 나왔어요. 내 월급이 실제로 얼마인지부터 확인해 보는 건 어떨까요?',
                   links: [['/salary/net-pay/', '연봉 실수령 계산기'], ['/salary/pension-savings/', '연금저축 세액공제']] },
    '건강·생활': { msg: '건강·생활 점수가 상대적으로 낮게 나왔어요. 오늘 마실 물의 양부터 가볍게 정해 보세요.',
                   links: [['/health/water-intake/', '물 섭취량 계산기'], ['/health/bmi/', 'BMI 계산기']] },
    '관계':      { msg: '관계 점수가 상대적으로 낮게 나왔어요. 나를 먼저 돌보는 작은 습관을 30일 동안 이어 보는 건 어떨까요?',
                   links: [['/lifeplus/challenge/', '30일 챌린지'], ['/lifeplus/fun/astro/', '별자리·띠 찾기']] },
    '마인드':    { msg: '마인드 점수가 상대적으로 낮게 나왔어요. 하루 10분 명상이나 독서로 마음의 여유를 만들어 보세요.',
                   links: [['/lifeplus/challenge/', '30일 챌린지'], ['/lifeplus/insight/', '오늘의 인사이트']] }
  };

  // 응답 배열(길이 15, 값 1~5) → 결과 계산
  function compute(values) {
    var total = 0;
    for (var i = 0; i < values.length; i++) total += values[i];
    var score = (total - N) / (N * 4) * 100;           // 0~100
    var age = Math.round(10 + 0.55 * score);           // 약 10~65
    var band = BANDS[BANDS.length - 1];
    for (var b = 0; b < BANDS.length; b++) { if (age <= BANDS[b].max) { band = BANDS[b]; break; } }
    var cats = CATS.map(function (c) {
      var s = 0;
      c.q.forEach(function (qi) { s += values[qi]; });
      return { n: c.n, pct: Math.round(((s / c.q.length) - 1) / 4 * 100) };
    });
    var low = 0;
    for (var k = 1; k < cats.length; k++) { if (cats[k].pct < cats[low].pct) low = k; }
    return { total: total, score: score, age: age, band: band, cats: cats, low: cats[low].n };
  }

  var form = document.getElementById('ma-form');
  var out = document.getElementById('ma-out');
  var msg = document.getElementById('ma-msg');
  var last = null;

  function checked(i) { return form.querySelector('input[name="q' + i + '"]:checked'); }

  function updateProgress() {
    var done = 0;
    for (var i = 0; i < N; i++) {
      var box = document.getElementById('qb' + i);
      if (checked(i)) { done++; box.classList.add('ma-done'); box.classList.remove('ma-missing'); }
      else { box.classList.remove('ma-done'); }
    }
    document.getElementById('ma-bar').style.width = (done / N * 100) + '%';
    document.getElementById('ma-count').textContent = done + ' / ' + N + ' 응답';
    if (done === N) msg.textContent = '';
    return done;
  }

  form.addEventListener('change', function (e) {
    if (!e.target || e.target.type !== 'radio') return;
    var done = updateProgress();
    var qi = parseInt(e.target.name.slice(1), 10);
    // 모바일에서는 답하면 다음 문항으로 부드럽게 이동
    if (window.innerWidth <= 760 && qi < N - 1) {
      var next = document.getElementById('qb' + (qi + 1));
      if (next && !checked(qi + 1)) setTimeout(function () { next.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 180);
    }
  });

  function bars(cats) {
    return cats.map(function (c) {
      return '<div class="ma-bar-row"><span>' + c.n + '</span><div class="ma-track"><i style="width:' + c.pct + '%"></i></div><b>' + c.pct + '</b></div>';
    }).join('');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values = [];
    for (var i = 0; i < N; i++) {
      var sel = checked(i);
      if (!sel) {
        var box = document.getElementById('qb' + i);
        box.classList.add('ma-missing');
        msg.textContent = (i + 1) + '번 문항에 답해 주세요.';
        box.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      values.push(parseInt(sel.value, 10));
    }
    var r = compute(values);
    var nx = NEXT[r.low];
    var nxLinks = nx.links.map(function (l) { return '<a class="btn" href="' + l[0] + '">' + l[1] + '</a>'; }).join('');

    out.classList.add('show');
    out.style.display = 'block';
    out.innerHTML =
      '<div class="ma-res-top">당신의 정신연령 결과</div>' +
      '<div class="ma-age">약 <b>' + r.age + '세</b></div>' +
      '<div class="ma-title">' + r.band.band + ' · <span class="accent">' + r.band.tag + '</span></div>' +
      '<div style="color:#3d4650;">' + r.band.desc + '</div>' +
      '<p class="ma-tip">💡 ' + r.band.tip + '</p>' +
      '<div class="ma-bars">' + bars(r.cats) + '</div>' +
      '<p class="ma-next">' + nx.msg + '</p>' +
      '<div class="ma-actions">' + nxLinks +
        '<a class="btn ghost" href="/lifeplus/fun/astro/">별자리·띠 찾기</a>' +
        '<button type="button" class="btn ghost" id="ma-share">내 결과 공유하기</button>' +
        '<span class="ma-status" id="ma-status"></span></div>' +
      '<p class="as-note">* 재미용 도구입니다. 실제 심리 평가로 사용하지 마세요.</p>';

    last = r;
    document.getElementById('ma-share').addEventListener('click', share);
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.getElementById('ma-reset').addEventListener('click', function () {
    form.reset();
    out.classList.remove('show');
    out.style.display = '';
    out.innerHTML = '';
    msg.textContent = '';
    last = null;
    updateProgress();
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  function share() {
    if (!last) return;
    var text = '내 정신연령은 약 ' + last.age + '세 (' + last.band.band + ' · ' + last.band.tag + ')! 너는 몇 살일까?';
    var status = document.getElementById('ma-status');
    function done(m) { if (status) status.textContent = m; }
    if (navigator.share) {
      navigator.share({ title: '정신연령 테스트', text: text, url: PAGE_URL }).catch(function () {});
      return;
    }
    var full = text + ' ' + PAGE_URL;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(full).then(function () { done('결과와 링크를 복사했어요!'); },
                                               function () { done('복사하지 못했어요. 주소창의 링크를 공유해 주세요.'); });
    } else {
      done('주소창의 링크를 복사해서 공유해 주세요.');
    }
  }

  updateProgress();
  window.MACalc = { compute: compute };
})();
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"라이프+","item":"https://calculator.khaistory.com/lifeplus/"},
    {"@type":"ListItem","position":2,"name":"테스트/심리","item":"https://calculator.khaistory.com/lifeplus/fun/"},
    {"@type":"ListItem","position":3,"name":"정신연령 테스트","item":"https://calculator.khaistory.com/lifeplus/fun/mental-age/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"WebApplication",
  "name":"정신연령 테스트 2026",
  "url":"https://calculator.khaistory.com/lifeplus/fun/mental-age/",
  "applicationCategory":"LifestyleApplication",
  "operatingSystem":"Web",
  "inLanguage":"ko-KR",
  "offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"정신연령은 어떻게 계산되나요?","acceptedAnswer":{"@type":"Answer","text":"15개 문항의 점수(1~5점)를 합산해 0~100점으로 환산한 뒤 10 + 환산 점수 × 0.55 공식으로 추정 연령을 구합니다. 모두 전혀 아니다면 약 10세, 모두 매우 그렇다면 약 65세가 나옵니다."}},
    {"@type":"Question","name":"실제 나이와 결과가 많이 달라요. 이상한 건가요?","acceptedAnswer":{"@type":"Answer","text":"이상하지 않습니다. 계획성과 안정 지향 같은 성향을 재미로 환산한 결과라 실제 나이와 무관하게 나올 수 있고, 점수의 높낮이에 우열은 없습니다."}},
    {"@type":"Question","name":"다시 하면 결과가 달라지나요?","acceptedAnswer":{"@type":"Answer","text":"그날의 기분이나 최근 상황에 따라 답이 달라질 수 있어 결과도 조금씩 바뀝니다."}},
    {"@type":"Question","name":"입력한 답변은 저장되나요?","acceptedAnswer":{"@type":"Answer","text":"답변은 브라우저에서만 계산하며 서버로 전송하거나 저장하지 않습니다."}},
    {"@type":"Question","name":"이 결과를 심리 상태 진단으로 봐도 되나요?","acceptedAnswer":{"@type":"Answer","text":"아니요. 재미용 도구이며 의학적·심리학적 진단이 아닙니다. 마음이 힘든 상태가 이어진다면 가까운 사람이나 전문가와 상담해 보세요."}}
  ]
}
</script>
