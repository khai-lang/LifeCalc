---
layout: default
title: 월세→전세 전환 계산기
description: 월세를 전세로 바꿀 때 필요한 보증금과 전환율을 계산합니다.
permalink: finance/rent-to-jeonse/
---

# 월세→전세 전환 계산기
<form id="rtj" onsubmit="event.preventDefault(); rtjCalc();">
  <label>월세(만원) <input type="number" id="rent" required></label>
  <label>현재 보증금(만원) <input type="number" id="deposit" value="0"></label>
  <label>전환이율(%) <input type="number" step="0.01" id="rate" value="4.0" required></label>
  <button type="submit">계산</button>
</form>
<div id="rtj-out" class="note"></div>

<script>
const rentEl=document.getElementById('rent');
const depositEl=document.getElementById('deposit');
const rateEl=document.getElementById('rate');
function rtjCalc(){
  const rent=parseFloat(rentEl.value||0);
  const depo=parseFloat(depositEl.value||0);
  const r=parseFloat(rateEl.value||0)/100;
  if(!rent||!r){out("값을 입력하세요.");return;}
  // 필요 총 보증금(만원) ≈ (월세×12) / 전환이율
  const total = Math.round((rent*12*10000)/r/10000);
  const need = total - depo;
  const remark = need>0 ? `추가 보증금 약 ${need.toLocaleString()}만원` : `보증금 여유 ${(-need).toLocaleString()}만원`;
  out(`필요 보증금(추정): 약 ${total.toLocaleString()}만원 · ${remark}`);
}
function out(t){document.getElementById('rtj-out').innerText=t;}
</script>

## 전세 전환 메모
필요보증금(만원) ≈ (월세×12)/전환이율
