---
layout: default
title: 전세↔월세 전환 계산기
description: 전세보증금과 전환율로 예상 월세를 계산하거나, 월세를 전세 환산합니다.
permalink: finance/rent-conversion/
---

# 전세↔월세 전환 계산기
<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();rentConv();">
    <h2>전세 → 월세</h2>
    <label>전세 보증금(원) <input type="number" id="jeonse" placeholder="예: 200000000"></label>
    <label>전환율(연 %)
      <input type="number" id="rate" step="0.01" placeholder="예: 4.0">
    </label>
    <label>관리비(월, 원) <input type="number" id="mfee" value="0"></label>

    <h2>월세 → 전세</h2>
    <label>월세(원) <input type="number" id="rent" placeholder="예: 800000"></label>
    <label>전환율(연 %) <input type="number" id="rate2" step="0.01" placeholder="예: 4.0"></label>

    <button class="btn" style="background:#ff6a00;color:#fff;border:0">계산</button>
  </form>

  <div id="rent-out" class="note"></div>
  <p style="font-size:14px;color:#6b7280">* 단순 이자 계산(월세=보증금×전환율/12)에 기반한 추정치입니다. 실제 계약은 지역/건물/시장 상황에 따라 다릅니다.</p>
</div>

<script>
function rentConv(){
  const J=+jeonse.value||0, r=(+rate.value||0)/100, fee=+mfee.value||0;
  const monthly = Math.round(J * r / 12) + fee;

  const R=+rent.value||0, r2=(+rate2.value||0)/100;
  const depositEq = r2>0 ? Math.round( (R / r2) * 12 ) : 0;

  rent-out.innerHTML = `전세→월세: <b>${monthly.toLocaleString()}</b> 원/월 (관리비 포함)<br>월세→전세 등가 보증금: <b>${depositEq.toLocaleString()}</b> 원`;
}
</script>
