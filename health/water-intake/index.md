<!-- 물 섭취량 계산기 -->
<section id="water-calc" style="max-width:520px;margin-top:18px;padding:16px;border:1px solid #eee;border-radius:12px">
  <h3 style="margin:0 0 12px">하루 물 섭취량 계산기</h3>
  <div style="display:grid;gap:10px">
    <label>몸무게(kg) <input id="wtWeight" type="number" inputmode="decimal" placeholder="예: 62"></label>
    <label>운동 시간(분) <input id="wtWorkout" type="number" inputmode="numeric" placeholder="예: 30"></label>
    <small style="color:#64748b">기준: kg당 약 30~35ml, 운동 30분당 +350ml (일반 가이드)</small>
    <button id="wtBtn" type="button" style="padding:12px;border:0;border-radius:8px;background:#22c55e;color:#fff">계산하기</button>
    <div id="wtResult" style="padding:10px;background:#f8fafc;border:1px dashed #cbd5e1;border-radius:8px;display:none"></div>
  </div>
</section>

<script defer>
document.addEventListener('DOMContentLoaded', function(){
  const $ = id => document.getElementById(id);
  const clean = v => String(v ?? '').replace(/,/g,'').trim();

  $('wtBtn').addEventListener('click', function(){
    const w = parseFloat(clean($('wtWeight').value));
    const workoutMin = parseFloat(clean($('wtWorkout').value || '0'));

    if (Number.isNaN(w) || w<=0) {
      $('wtResult').style.display='block';
      $('wtResult').innerText = '몸무게를 정확히 입력하세요.';
      return;
    }

    const baseLowMl = w * 30;
    const baseHighMl = w * 35;
    const extraMl = Math.floor((workoutMin/30)) * 350;

    const low = baseLowMl + extraMl;
    const high = baseHighMl + extraMl;

    $('wtResult').style.display='block';
    $('wtResult').innerHTML = `
      <strong>권장 섭취량:</strong> ${Math.round(low/1000)} ~ ${Math.round(high/1000)} L/일
      <br><small style="color:#64748b">※ 개인 건강상태에 따라 다를 수 있습니다.</small>
    `;
  });
});
</script>
