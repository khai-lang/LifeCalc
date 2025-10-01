---
layout: default
title: 퇴직금 계산기 — 평균임금·근속연수 기준
description: 최근 3개월 평균임금과 근속연수로 퇴직금(안내용) 계산.
permalink: /salary/retirement/

---

<h1>퇴직금 계산기</h1>

<form id="rtm-form" onsubmit="event.preventDefault(); calcRtmAccurate();">
  <div class="card p-3" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">
    <!-- ① 평균임금 계산용 입력 -->
    <div>
      <label>최근 3개월 ‘산정대상’ 총 임금(원)
        <input type="number" id="rtm-sum" inputmode="numeric" placeholder="예: 9000000" required>
      </label>
      <small class="muted">
        ※ 정기적·일률적 지급분만 포함(기본급, 정기상여의 해당 기간분, 고정수당 등). 식대 비과세·일시금·성과급(비정기) 등은 제외.
      </small>
    </div>
    <div>
      <label>최근 3개월 ‘산정대상’ 총 일수(일)
        <input type="number" id="rtm-days" inputmode="numeric" placeholder="예: 92" required>
      </label>
      <small class="muted">
        ※ 원칙은 퇴직 전 3개월의 ‘총 일수’. 휴업·결근 등 제외기간이 있으면 빼고 입력하세요.
      </small>
    </div>

    <!-- ② 통상임금 하한 보정(선택) -->
    <div>
      <label>(선택) 통상임금(월, 원)
        <input type="number" id="rtm-ordinary-month" inputmode="numeric" placeholder="예: 3,000,000">
      </label>
      <small class="muted">※ 평균임금의 30일분이 통상임금(월)보다 낮으면 통상임금으로 계산합니다.</small>
    </div>

    <!-- ③ 근속연수: 실제 일수 기반 -->
    <div>
      <label>입사일
        <input type="date" id="rtm-join" required>
      </label>
      <label>퇴사일
        <input type="date" id="rtm-leave" required>
      </label>
      <small class="muted">※ 근속연수 = (퇴사일 − 입사일 + 1일) ÷ 365</small>
    </div>
  </div>

  <div style="margin-top:12px">
    <button class="btn">계산</button>
    <button class="btn ghost" type="button" onclick="prefill3mo();">예시값 채우기</button>
  </div>
</form>

<div id="rtm-out" class="result-box" style="margin-top:16px"></div>

<div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
  <a class="btn" href="/salary/pension-savings/">다음: 연금저축</a>
  <a class="btn ghost" href="/salary/">허브로 돌아가기</a>
</div>

<script>
/** 유틸 */
const won = n => (isFinite(n) ? Math.round(n).toLocaleString('ko-KR') : '—');
const clampPos = n => Math.max(0, Number(n) || 0);

/** 근속일수 계산: (leave - join + 1)일 */
function diffDaysInclusive(joinStr, leaveStr){
  const j = new Date(joinStr);
  const l = new Date(leaveStr);
  if (!(j instanceof Date) || isNaN(j) || !(l instanceof Date) || isNaN(l)) return NaN;
  const ms = l - j;
  return ms < 0 ? NaN : Math.floor(ms / (1000*60*60*24)) + 1;
}

/** 메인 계산 */
function calcRtmAccurate(){
  const sum = clampPos(document.getElementById('rtm-sum').value);
  const days = Math.max(1, clampPos(document.getElementById('rtm-days').value));
  const ordinaryMonth = clampPos(document.getElementById('rtm-ordinary-month').value);
  const join = document.getElementById('rtm-join').value;
  const leave = document.getElementById('rtm-leave').value;

  const out = document.getElementById('rtm-out');
  out.classList.add('show');

  // 검증
  const tenureDays = diffDaysInclusive(join, leave);
  if (!isFinite(tenureDays)){
    out.innerHTML = `<div class="card p-3 error">입사일/퇴사일을 확인하세요.</div>`;
    return;
  }

  // 평균임금(1일) 및 30일분
  const avgDaily = sum / days;          // 평균임금(1일)
  const avg30 = avgDaily * 30;          // 평균임금의 30일분(월 상당)
  // 통상임금 하한 보정(선택)
  const monthBase = ordinaryMonth > 0 ? Math.max(avg30, ordinaryMonth) : avg30;

  // 법정 산식: 퇴직금 = (30일분 평균임금) × (근속일수 / 365)
  const severance = monthBase * (tenureDays / 365);

  // 표기
  out.innerHTML = `
    <div class="card p-3">
      <div class="title">퇴직금(안내·법 기준 가깝게 계산)</div>
      <ul>
        <li>평균임금(1일): <strong>${won(avgDaily)}</strong> 원</li>
        <li>평균임금 30일분: <strong>${won(avg30)}</strong> 원</li>
        ${
          ordinaryMonth > 0
          ? `<li>통상임금(월): <strong>${won(ordinaryMonth)}</strong> 원</li>
             <li>적용 월기준(하한 보정): <strong>${won(monthBase)}</strong> 원</li>`
          : `<li>적용 월기준: <strong>${won(monthBase)}</strong> 원 (통상임금 미입력)</li>`
        }
        <li>근속일수: <strong>${won(tenureDays)}</strong> 일 (=${(tenureDays/365).toFixed(6)} 년)</li>
      </ul>
      <div class="highlight" style="margin-top:8px">
        <strong>예상 퇴직금: ${won(severance)} 원</strong>
      </div>
      <small class="muted" style="display:block;margin-top:8px;line-height:1.5">
        ※ 평균임금=퇴직 전 3개월 ‘산정대상’ 임금 ÷ 해당 기간 일수. 정기상여는 해당 3개월에 귀속되는 금액만 포함하세요.<br>
        ※ 평균임금 30일분이 통상임금(월)보다 낮으면 통상임금으로 보정했습니다(선택 입력).<br>
        ※ 근속연수는 실제 근속일수/365로 월할·일할 반영. 회사 단체협약/취업규칙, 제외기간·가산기간 등에 따라 달라질 수 있습니다.
      </small>
    </div>`;
}

/** 예시값 */
function prefill3mo(){
  // 최근 3개월 급여 900만, 일수 92일, 통상임금 300만, 2021-03-15 ~ 2025-09-30
  document.getElementById('rtm-sum').value = 9000000;
  document.getElementById('rtm-days').value = 92;
  document.getElementById('rtm-ordinary-month').value = 3000000;
  document.getElementById('rtm-join').value = '2021-03-15';
  document.getElementById('rtm-leave').value = (new Date()).toISOString().slice(0,10);
}
</script>
