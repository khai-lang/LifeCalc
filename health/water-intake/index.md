<!-- 물 섭취량 계산기 -->
<section id="water-calc" style="max-width:520px;margin-top:18px;padding:16px;border:1px solid #eee;border-radius:12px">
  <h3 style="margin:0 0 12px">하루 물 섭취량 계산기</h3>
  <div style="display:grid;gap:10px">
    <label>몸무게(kg) <input id="wtWeight" type="number" inputmode="decimal" placeholder="예: 62"></label>
    <label>운동 시간(분) <input id="wtWorkout" type="number" inputmode="numeric" placeholder="예: 30"></label>
    <small style="color:#64748b">기준: kg당 약 30~35ml, 운동 30분당 +350ml (일반 가이드)</small>
    <label><input type="checkbox" id="hot"> 더운 환경/땀 많이 흘림</label>

    <!-- 공통 버튼 클래스 사용 -->
    <button id="wtBtn" type="button" class="btn">계산</button>

    <!-- 공통 결과 박스 클래스 사용 -->
    <div id="wtResult" class="result-box"></div>
  </div>
</section>

<!-- 공통 CSS (사이트에 이미 있다면 이 블록은 생략) -->
<style>
  .btn {
    display:inline-block;
    padding:6px 14px;       /* 별자리/BMR과 동일한 아담한 크기 */
    border:0;
    border-radius:6px;
    background:#ff6a00;     /* 오렌지 */
    color:#fff;
    font-size:14px;
    font-weight:bold;
    cursor:pointer;
    transition: background 0.3s;
  }
  .btn:hover { background:#e55d00; }

  .result-box {
    padding:12px;
    background:#fffaf5;                 /* 아주 연한 오렌지 */
    color:#333;
    border:1px solid #ffb366;
    border-radius:10px;
    box-shadow:0 2px 6px rgba(0,0,0,0.08);
    display:none;                       /* 최초 숨김 */
    font-size:15px;
    line-height:1.6;
    margin-top:10px;
  }
</style>

<script defer>
document.addEventListener('DOMContentLoaded', function(){
  const $ = id => document.getElementById(id);
  const clean = v => String(v ?? '').replace(/,/g,'').trim();
  const L = ml => (Math.round(ml/100) / 10).toFixed(1); // 0.1L 단위로 보기 좋게

  $('wtBtn').addEventListener('click', function(){
    const w = parseFloat(clean($('wtWeight').value));
    const workoutMin = parseFloat(clean($('wtWorkout').value || '0'));
    const hot = $('hot').checked;

    const box = $('wtResult');

    if (Number.isNaN(w) || w <= 0) {
      box.style.display='block';
      box.innerHTML = '⚠️ 몸무게를 정확히 입력하세요.';
      return;
    }

    // 기본 권장량
    const baseLowMl  = w * 30;
    const baseHighMl = w * 35;

    // 운동 보정(30분당 +350ml)
    const extraMl = Math.floor(workoutMin / 30) * 350;

    // 더운 환경 보정 (+500ml)
    const hotExtra = hot ? 500 : 0;

    const low  = baseLowMl  + extraMl + hotExtra;
    const high = baseHighMl + extraMl + hotExtra;

    box.style.display='block';
    box.innerHTML = `
      💧 <strong>권장 섭취량:</strong> ${L(low)} ~ ${L(high)} L/일
      <br><small style="color:#64748b">※ 개인 건강상태에 따라 다를 수 있으며, 의사/영양사 상담을 권장합니다.</small>
    `;
  });
});
</script>
