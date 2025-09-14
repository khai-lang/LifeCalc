---
layout: default
title: 단위 변환기
description: 길이·무게·온도 등 기본 단위 변환.
permalink: life/unit-converter/
---
# 단위 변환(간단)
<div class="card" style="max-width:720px;margin:0 auto;">
  <form onsubmit="event.preventDefault();conv();">
    <label>길이: cm → m <input type="number" id="cm" placeholder="예: 180"></label>
    <button>변환</button>
  </form>
  <div id="conv-out" class="note"></div>
</div>
<script>
function conv(){
  const c=parseFloat(cm.value||0); conv-out.innerText = `${c} cm = ${(c/100).toFixed(2)} m`;
}
</script>
