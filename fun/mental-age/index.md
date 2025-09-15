---
layout: default
title: 정신연령 계산기
description: 15가지 질문으로 자신의 정신연령을 확인할 수 있습니다.
permalink: fun/mental-age/
redirect_from:
  - /mental-age/
---

<h1><span class="accent">정신연령</span> 계산기</h1>

<div class="card" style="max-width:880px;margin:0 auto;">
  <p class="note">아래 15가지 문항에 대해 본인에게 가까운 정도를 선택해 주세요. (전혀 아니다 ~ 매우 그렇다)</p>

  <form id="ma-form" onsubmit="event.preventDefault(); calcMA();">
    <div id="quiz"></div>

    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px">
      <button class="btn" style="background:#ff6a00;color:#fff;border:0" type="submit">결과 보기</button>
      <button class="btn" type="button" onclick="resetMA()">다시 하기</button>
      <button class="btn" type="button" onclick="shareMA()">결과 공유</button>
    </div>
  </form>

  <div id="ma-out" class="note" style="display:none;margin-top:16px"></div>
</div>

<style>
  /* 페이지 전용 파스텔 스타일 */
  .ma-qbox{
    background:#f5fbff;
    border:1px solid #e7eef7;
    border-radius:14px;
    padding:14px;
    margin:14px 0;
  }
  .ma-q{
    font-size:18px;
    line-height:1.45;
    margin:0 0 10px;
  }
  .ma-scale{
    display:flex;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
  }
  .ma-scale label{
    background:#fff;
    border:1px solid #e7eef7;
    border-radius:10px;
    padding:8px 10px;
    display:inline-flex;
    align-items:center;
    gap:6px;
    cursor:pointer;
  }
  .ma-scale input{ accent-color:#ff6a00; }
  .ma-legend{
    font-size:13px;
    color:#6b7280;
    margin-top:6px;
  }
</style>

<script>
  // 15개 문항
  const QUESTIONS = [
    "새로운 것보다는 익숙한 것을 선호한다.",
    "감정보다 이성을 우선하여 결정한다.",
    "계획표를 세우고 그에 맞춰 움직이는 편이다.",
    "실수했을 때 빠르게 인정하고 수정한다.",
    "주변의 시선보다 스스로의 기준을 더 중요하게 여긴다.",
    "중요하지 않은 일은 과감히 미룬다.",
    "돈 관리(예산/저축/지출)를 꾸준히 한다.",
    "타인의 입장을 고려해 말을 고른다.",
    "건강(수면/운동/식습관)을 일정하게 관리한다.",
    "감정적으로 힘들 때 도움을 요청할 줄 안다.",
    "장기 목표와 단기 목표를 구분해 실행한다.",
    "실패를 학습 기회로 받아들이는 편이다.",
    "SNS/알림에 즉각 반응하지 않아도 괜찮다.",
    "관계에서 경계(바운더리)를 설정할 줄 안다.",
    "내가 통제할 수 없는 일은 내려놓는다."
  ];

  // Likert 레이블
  const SCALE = [
    {v:1, label:"전혀 아니다"},
    {v:2, label:"아니다"},
    {v:3, label:"보통"},
    {v:4, label:"그렇다"},
    {v:5, label:"매우 그렇다"},
  ];

  // 문항 렌더링
  (function renderQuiz(){
    const box = document.getElementById('quiz');
    QUESTIONS.forEach((q, i) => {
      const wrap = document.createElement('div');
      wrap.className = 'ma-qbox';
      const p = document.createElement('p');
      p.className = 'ma-q';
      p.textContent = `${i+1}. ${q}`;
      wrap.appendChild(p);

      const scale = document.createElement('div');
      scale.className = 'ma-scale';
      SCALE.forEach(s => {
        const id = `q${i}_${s.v}`;
        const lab = document.createElement('label');
        lab.setAttribute('for', id);
        lab.innerHTML = `<input type="radio" name="q${i}" id="${id}" value="${s.v}" required> ${s.label}`;
        scale.appendChild(lab);
      });
      wrap.appendChild(scale);

      const legend = document.createElement('div');
      legend.className = 'ma-legend';
      legend.textContent = "전혀 아니다(1) ~ 매우 그렇다(5)";
      wrap.appendChild(legend);

      box.appendChild(wrap);
    });
  })();

  // 계산 로직:
  // 평균 점수(1~5)를 18~66세 범위로 선형 변환 (가벼운 재미용)
  function calcMA(){
    const form = document.getElementById('ma-form');
    const values = [];
    for(let i=0; i<QUESTIONS.length; i++){
      const sel = form.querySelector(`input[name="q${i}"]:checked`);
      if(!sel){ alert("모든 문항에 응답해 주세요."); return; }
      values.push(parseInt(sel.value,10));
    }
    const avg = values.reduce((a,b)=>a+b,0) / values.length; // 1~5
    let age = Math.round(avg * 12 + 6); // 18~66
    if (age < 10) age = 10;
    if (age > 90) age = 90;

    const type = age<25 ? "청년형"
               : age<40 ? "균형형"
               : age<55 ? "성숙형"
               : "노련형";

    const out = document.getElementById('ma-out');
    out.style.display = 'block';
    out.innerHTML = `
      <div style="font-size:18px; margin-bottom:8px;">당신의 정신연령(추정)</div>
      <div style="font-size:28px; font-weight:800; margin-bottom:6px;">약 ${age}세 · <span class="accent">${type}</span></div>
      <div style="color:#6b7280; font-size:14px;">* 재미용 도구입니다. 실제 심리 평가로 사용하지 마세요.</div>
    `;

    // 주소에 점수 힌트를 남기고 싶다면(선택)
    // history.replaceState(null, "", `#ma=${age}`);
  }

  function resetMA(){
    const form = document.getElementById('ma-form');
    form.reset();
    document.getElementById('ma-out').style.display = 'none';
  }

  function shareMA(){
    const txt = document.getElementById('ma-out').innerText || "나의 정신연령을 확인해 보세요!";
    const url = location.href;
    if (navigator.share) {
      navigator.share({ title:"정신연령 계산기", text:txt, url });
    } else {
      navigator.clipboard.writeText(`${txt}\n${url}`).then(()=>{
        alert("결과와 링크가 클립보드에 복사되었습니다.");
      });
    }
  }
</script>
