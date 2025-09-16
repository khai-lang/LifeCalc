---
layout: default
title: 단위 변환기
description: 길이·무게·온도·면적·부피 단위를 상호 변환합니다.
permalink: life/unit-converter/
---

# 단위 변환기
<div class="card" style="max-width:760px;margin:0 auto;">
  <form onsubmit="event.preventDefault();convert();">
    <label>변환 대상
      <select id="type">
        <option value="length">길이</option>
        <option value="weight">무게</option>
        <option value="temp">온도</option>
        <option value="area">면적</option>
        <option value="volume">부피</option>
      </select>
    </label>

    <label>입력 단위
      <select id="from"></select>
    </label>

    <label>값
      <input type="number" id="val" step="any" placeholder="숫자 입력" required>
    </label>

    <label>출력 단위
      <select id="to"></select>
    </label>

    <button type="submit" class="btn">변환</button>
  </form>
 <!-- 결과 박스: 전역 .result-box 사용 -->
<div id="out" class="result-box"></div>

<script>
const UNITS = {
  length: { m:1, cm:0.01, mm:0.001, km:1000, inch:0.0254, ft:0.3048, yd:0.9144, mile:1609.344 },
  weight: { kg:1, g:0.001, mg:0.000001, t:1000, lb:0.45359237, oz:0.028349523125 },
  area:   { "m²":1, "cm²":0.0001, "mm²":1e-6, "km²":1e6, "ha":10000, "a":100, "ft²":0.09290304, "yd²":0.83612736 },
  volume: { "m³":1, "L":0.001, "mL":1e-6, "gal(US)":0.003785411784, "qt(US)":0.000946352946, "pt(US)":0.000473176473, "cup(US)":0.000236588236, "fl oz(US)":2.95735295625e-5 }
};
const TEMP = ["°C","°F","K"];
const typeSel = document.getElementById('type'), fromSel = document.getElementById('from'), toSel = document.getElementById('to');

function fillUnits(){
  const t=typeSel.value; fromSel.innerHTML=''; toSel.innerHTML='';
  const options = t==='temp' ? TEMP : Object.keys(UNITS[t]);
  options.forEach(u=>{
    const o1=document.createElement('option'); o1.value=o1.textContent=u; fromSel.appendChild(o1);
    const o2=document.createElement('option'); o2.value=o2.textContent=u; toSel.appendChild(o2);
  });
  toSel.selectedIndex = 1 < toSel.options.length ? 1 : 0;
}
typeSel.addEventListener('change', fillUnits); fillUnits();

function convertTemp(v, from, to){
  let c = from==='°C'? v : from==='°F'? (v-32)/1.8 : v-273.15;
  if(to==='°C') return c;
  if(to==='°F') return c*1.8+32;
  if(to==='K')  return c+273.15;
}
function convert(){
  const t=typeSel.value, v=parseFloat(val.value), f=fromSel.value, to=toSel.value;
  if(!Number.isFinite(v)) return;
  let res;
  if(t==='temp'){
    res = convertTemp(v,f,to);
  }else{
    const base = v * UNITS[t][f];           // 입력 → 기준 단위
    res = base / UNITS[t][to];              // 기준 → 출력 단위
  }
  out.textContent = `${v} ${f} = ${(+res.toFixed(6)).toString()} ${to}`;
}
</script>
