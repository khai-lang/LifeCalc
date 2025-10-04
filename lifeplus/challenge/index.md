---
layout: default
title: 30일 챌린지
description: 30일 챌린지 코너
permalink: /lifeplus/challenge/
section: lifeplus
nav_label: 챌린지
nav_order: 50
---


<!-- 30일 챌린지: 붙여넣기만 하면 동작 -->
<div id="challenge-app" class="challenge-wrap">
  <!-- 설정/상태 -->
  <div class="toolbar">
    <label>챌린지 이름
      <input id="ch-name" type="text" placeholder="예: 매일 만보 걷기">
    </label>
    <label>시작일
      <input id="ch-start" type="date">
    </label>
    <label>프리셋
      <select id="ch-preset">
        <option value="">(선택 안 함)</option>
        <option value="매일 만보 걷기">매일 만보 걷기</option>
        <option value="하루 20분 독서">하루 20분 독서</option>
        <option value="10분 명상">10분 명상</option>
        <option value="물 2리터 마시기">물 2리터 마시기</option>
      </select>
    </label>
    <div class="toolbar-actions">
      <button id="btn-apply">적용</button>
      <button id="btn-today">오늘까지 완료 처리</button>
      <button id="btn-reset" class="danger">초기화</button>
    </div>
  </div>

  <!-- 진행 요약 -->
  <div class="summary">
    <div class="progress">
      <div class="bar"><span id="bar-fill" style="width:0%"></span></div>
      <div class="progress-text"><strong id="done-count">0</strong>/30 완료 · <strong id="percent">0%</strong></div>
    </div>
    <div class="streaks">
      연속 달성 <strong id="streak">0</strong>일 · 최장 연속 <strong id="best-streak">0</strong>일
    </div>
  </div>

  <!-- 30일 그리드 -->
  <div id="grid" class="grid-30" role="group" aria-label="30일 체크리스트"></div>

  <!-- 백업/복원 -->
  <details class="backup">
    <summary>백업/복원</summary>
    <div class="backup-row">
      <button id="btn-export">내보내기(JSON)</button>
      <button id="btn-import">가져오기(JSON)</button>
      <input id="file-import" type="file" accept="application/json" hidden>
    </div>
    <textarea id="export-box" rows="6" placeholder="내보내기 클릭 시 JSON이 여기에 표시됩니다. 붙여넣고 가져오기 해도 됩니다."></textarea>
  </details>
</div>

<style>
/* ====== 스코프: .challenge-wrap 하위만 스타일 ====== */
.challenge-wrap { margin-top:16px }
.challenge-wrap .toolbar {
  display:grid; gap:12px; grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  align-items:end; background:#fff; border:1px solid #eee; border-radius:12px; padding:12px;
}
.challenge-wrap label { display:flex; flex-direction:column; gap:6px; font-weight:600; font-size:.95rem }
.challenge-wrap input[type="text"],
.challenge-wrap input[type="date"],
.challenge-wrap select {
  border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; background:#fff; font:inherit;
}
.challenge-wrap .toolbar-actions { display:flex; gap:8px; align-items:center; }
.challenge-wrap button {
  border:1px solid #e5e7eb; background:#0ea5e9; color:#fff; border-radius:10px; padding:10px 14px; cursor:pointer;
}
.challenge-wrap button:hover { filter:brightness(0.95) }
.challenge-wrap button.danger { background:#ef4444 }

.challenge-wrap .summary { display:grid; gap:10px; margin:14px 0 }
.challenge-wrap .progress .bar { height:10px; background:#f3f4f6; border-radius:999px; overflow:hidden }
.challenge-wrap .progress .bar span { display:block; height:100%; background:#22c55e; transition:width .2s }
.challenge-wrap .progress-text { margin-top:6px; color:#4b5563 }
.challenge-wrap .streaks { color:#374151 }

.challenge-wrap .grid-30 {
  display:grid; grid-template-columns: repeat(6, minmax(0,1fr)); gap:10px;
}
@media (max-width: 720px){ .challenge-wrap .grid-30{ grid-template-columns: repeat(4, minmax(0,1fr)); } }
.challenge-wrap .day {
  background:#fff; border:1px solid #eee; border-radius:12px; padding:10px;
  display:flex; flex-direction:column; gap:8px; min-height:78px;
}
.challenge-wrap .day .top { display:flex; justify-content:space-between; align-items:center; }
.challenge-wrap .day .dnum { font-weight:800 }
.challenge-wrap .day .date { font-size:.82rem; color:#6b7280 }
.challenge-wrap .day .check { display:flex; align-items:center; gap:8px }
.challenge-wrap .day input[type="checkbox"]{
  width:18px; height:18px; accent-color:#10b981; cursor:pointer;
}
.challenge-wrap .day.done { outline:2px solid rgba(34,197,94,.35); background:linear-gradient(0deg, rgba(34,197,94,.05), rgba(34,197,94,.05)) }
.challenge-wrap .today { border-color:#60a5fa; box-shadow:0 0 0 2px rgba(96,165,250,.25) inset }

.challenge-wrap .backup { margin-top:16px }
.challenge-wrap .backup-row { display:flex; gap:8px; margin:8px 0 }
.challenge-wrap textarea { width:100%; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px; font:inherit }
</style>

<script>
(function(){
  // --- 저장 키(페이지 경로별로 구분) ---
  const KEY = 'challenge:' + (window.location.pathname || '/lifeplus/challenge/');
  const $ = (sel, root=document)=> root.querySelector(sel);
  const $$ = (sel, root=document)=> Array.from(root.querySelectorAll(sel));

  // --- 상태 ---
  const state = {
    name: '',
    start: isoToday(),
    days: 30,
    ticks: Array(30).fill(false), // 각 일자 완료 여부
    bestStreak: 0,
  };

  // --- 초기 로드/머지 ---
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '{}');
    Object.assign(state, saved, { days: 30, ticks: (saved.ticks||[]).slice(0,30).concat(Array(30).fill(false)).slice(0,30) });
  } catch(e){ /* ignore */ }

  // --- 엘리먼트 ---
  const app = document.getElementById('challenge-app');
  const grid = document.getElementById('grid');
  const nameInput = document.getElementById('ch-name');
  const startInput = document.getElementById('ch-start');
  const preset = document.getElementById('ch-preset');
  const btnApply = document.getElementById('btn-apply');
  const btnToday = document.getElementById('btn-today');
  const btnReset = document.getElementById('btn-reset');
  const doneCount = document.getElementById('done-count');
  const percent = document.getElementById('percent');
  const barFill = document.getElementById('bar-fill');
  const streakEl = document.getElementById('streak');
  const bestStreakEl = document.getElementById('best-streak');

  // --- 값 주입 ---
  nameInput.value = state.name || '';
  startInput.value = state.start || isoToday();

  // --- 렌더 ---
  function render(){
    // 30일 칸 구성
    grid.innerHTML = '';
    const start = new Date(state.start);
    for(let i=0;i<state.days;i++){
      const d = new Date(start); d.setDate(start.getDate()+i);
      const iso = d.toISOString().slice(0,10);
      const isToday = iso === isoToday();

      const cell = document.createElement('div');
      cell.className = 'day' + (state.ticks[i] ? ' done' : '') + (isToday ? ' today' : '');
      cell.setAttribute('data-index', i);

      const top = document.createElement('div'); top.className='top';
      const dnum = document.createElement('div'); dnum.className='dnum'; dnum.textContent = (i+1)+'일차';
      const date = document.createElement('div'); date.className='date'; date.textContent = iso.replaceAll('-','/');
      top.appendChild(dnum); top.appendChild(date);

      const check = document.createElement('label'); check.className='check';
      const cb = document.createElement('input'); cb.type='checkbox'; cb.checked = !!state.ticks[i];
      cb.addEventListener('change', ()=>{
        state.ticks[i] = cb.checked; save(); updateSummary(); cell.classList.toggle('done', cb.checked);
      });
      const span = document.createElement('span'); span.textContent = state.name ? state.name : '완료';
      check.appendChild(cb); check.appendChild(span);

      cell.appendChild(top); cell.appendChild(check);
      grid.appendChild(cell);
    }
    updateSummary();
  }

  // --- 요약(진행률/스트릭) ---
  function updateSummary(){
    const done = state.ticks.filter(Boolean).length;
    const pct  = Math.round(done/state.days*100);
    doneCount.textContent = done;
    percent.textContent = pct + '%';
    barFill.style.width = pct + '%';

    // streak 계산: 시작일부터 연속 완료
    const streak = calcStreak(state.ticks);
    streakEl.textContent = streak;
    state.bestStreak = Math.max(state.bestStreak||0, streak);
    bestStreakEl.textContent = state.bestStreak||0;
    save(false); // 자잘한 업데이트는 즉시 저장
  }

  function calcStreak(arr){
    let s=0; for(const v of arr){ if(v) s++; else break; } return s;
  }

  // --- 저장/불러오기 ---
  function save(force=true){
    localStorage.setItem(KEY, JSON.stringify(state));
    if(force) render();
  }

  // --- 이벤트 ---
  btnApply.addEventListener('click', ()=>{
    if(preset.value && !nameInput.value) nameInput.value = preset.value;
    state.name = nameInput.value.trim();
    state.start = startInput.value || isoToday();
    save();
  });

  btnToday.addEventListener('click', ()=>{
    const diff = dateDiffDays(new Date(state.start), new Date()); // 시작~오늘
    const upto = Math.min(state.days, Math.max(0, diff+1)); // 오늘 포함
    for(let i=0;i<upto;i++) state.ticks[i] = true;
    save();
  });

  btnReset.addEventListener('click', ()=>{
    if(!confirm('모든 진행도를 초기화할까요?')) return;
    state.ticks = Array(30).fill(false);
    state.bestStreak = 0;
    save();
  });

  // 내보내기/가져오기
  const btnExport = document.getElementById('btn-export');
  const btnImport = document.getElementById('btn-import');
  const fileImport = document.getElementById('file-import');
  const exportBox = document.getElementById('export-box');

  btnExport.addEventListener('click', ()=>{
    const json = JSON.stringify(state, null, 2);
    exportBox.value = json;
    // 파일 다운로드
    const blob = new Blob([json], {type:'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'challenge-backup.json'; a.click();
    URL.revokeObjectURL(url);
  });

  btnImport.addEventListener('click', ()=>{
    if(exportBox.value.trim()){
      try{
        const data = JSON.parse(exportBox.value);
        Object.assign(state, data, { days:30, ticks:(data.ticks||[]).slice(0,30).concat(Array(30).fill(false)).slice(0,30) });
        save();
      }catch(e){ alert('유효한 JSON이 아닙니다.'); }
    }else{
      fileImport.click();
    }
  });
  fileImport.addEventListener('change', (e)=>{
    const file = e.target.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const data = JSON.parse(reader.result);
        Object.assign(state, data, { days:30, ticks:(data.ticks||[]).slice(0,30).concat(Array(30).fill(false)).slice(0,30) });
        save();
      }catch(e){ alert('유효한 JSON이 아닙니다.'); }
    };
    reader.readAsText(file);
  });

  // --- 유틸 ---
  function isoToday(){
    const d = new Date(); d.setHours(0,0,0,0);
    return d.toISOString().slice(0,10);
  }
  function dateDiffDays(a,b){ // b-a (일수)
    const d1 = new Date(a); d1.setHours(0,0,0,0);
    const d2 = new Date(b); d2.setHours(0,0,0,0);
    return Math.floor((d2 - d1) / 86400000);
  }

  // --- 최초 렌더 ---
  render();
})();
</script>
