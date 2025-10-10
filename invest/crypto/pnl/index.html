---
layout: default
title: 코인 수익/손실 계산기
description: 코인 거래내역으로 실현/미실현 손익, 평단, 손익분기점, 수수료까지 한 번에 계산합니다.
permalink: /invest/crypto/pnl/
---

<!-- ✅ 사이트 기본 색·폰트·버튼을 그대로 사용합니다. 레이아웃/그리드만 최소한으로 스코프(#pnl-ledger) 지정 -->
<style>
  #pnl-ledger .grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }
  #pnl-ledger .kpi  { display:grid; grid-template-columns:repeat(4,minmax(160px,1fr)); gap:12px; margin-top:12px; }
  #pnl-ledger table { width:100%; border-collapse:collapse; margin-top:12px; }
  #pnl-ledger th, #pnl-ledger td { padding:10px; text-align:right; }
  #pnl-ledger th:first-child, #pnl-ledger td:first-child { text-align:left; }
  #pnl-ledger .hint { font-size:0.95em; opacity:.85; }
  /* 반응형: 컬럼 수만 줄입니다(사이트 기본 타이포/색상 유지) */
  @media (max-width: 1024px){ #pnl-ledger .grid{grid-template-columns:repeat(2,minmax(0,1fr))} }
  @media (max-width: 640px){  #pnl-ledger .grid{grid-template-columns:1fr} #pnl-ledger .kpi{grid-template-columns:1fr 1fr} }
</style>

<div id="pnl-ledger">
  <h1>거래내역 기반 PnL 계산기 <span style="font-size:.9em;opacity:.8">FIFO/LIFO · 수수료 포함</span></h1>

  <!-- 상단 옵션 -->
  <div class="card" style="padding:16px">
    <div class="grid">
      <div>
        <label>평가 기준 현재가
          <input id="currentPrice" type="number" step="any" placeholder="예: 25000" />
        </label>
      </div>
      <div>
        <label>수수료 입력 방식
          <select id="feeMode">
            <option value="rate" selected>비율(%)</option>
            <option value="flat">정액</option>
          </select>
        </label>
      </div>
      <div>
        <label>원화↔USDT 환율 (선택)
          <input id="fx" type="number" step="any" placeholder="예: 1350 (미입력시 환산 안함)" />
        </label>
      </div>
      <div>
        <label>재고평가 방식
          <select id="invMethod">
            <option value="FIFO" selected>FIFO</option>
            <option value="LIFO">LIFO</option>
          </select>
        </label>
      </div>
    </div>

    <p class="hint" style="margin-top:8px">아래 표에 거래를 입력하세요. (날짜는 표시용, 계산은 가격/수량/수수료만 사용)</p>

    <!-- 거래내역 표 -->
    <table id="txTable">
      <thead>
        <tr>
          <th>날짜</th>
          <th>유형</th>
          <th>체결가</th>
          <th>수량</th>
          <th>수수료(%, 또는 정액)</th>
          <th>비고</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody id="txBody"></tbody>
    </table>

    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">
      <button id="addRow" class="btn" type="button">+ 행 추가</button>
      <button id="calc" class="btn" type="button">계산하기</button>
    </div>
  </div>

  <!-- KPI -->
  <div class="kpi">
    <div class="card" style="padding:12px">
      <div class="hint">미실현 손익(평가손익)</div>
      <div id="unrealized" style="font-weight:800">-</div>
    </div>
    <div class="card" style="padding:12px">
      <div class="hint">실현 손익</div>
      <div id="realized" style="font-weight:800">-</div>
    </div>
    <div class="card" style="padding:12px">
      <div class="hint">보유 수량 / 평단</div>
      <div id="position" style="font-weight:800">-</div>
    </div>
    <div class="card" style="padding:12px">
      <div class="hint">손익분기점(수수료 포함)</div>
      <div id="breakeven" style="font-weight:800">-</div>
    </div>
  </div>

  <!-- 안내 -->
  <div class="card" style="padding:16px; margin-top:12px">
    <h3 style="margin:0 0 8px">입력 가이드</h3>
    <ul class="hint" style="margin:0 0 0 18px">
      <li>수수료가 <b>비율(%)</b>이면 0.1% → <b>0.1</b> 로 입력, <b>정액</b>이면 실제 금액 입력.</li>
      <li>FIFO/LIFO는 <b>실현손익</b> 계산에 영향. 미실현은 남은 재고의 가중평균 단가로 평가.</li>
      <li>손익분기점은 왕복 수수료를 고려해 표시됩니다.</li>
    </ul>
  </div>

  <!-- 내부 이동 버튼: 사이트 기본 버튼 스타일(.btn .ghost) 그대로 사용 -->
  <div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;margin-top:16px">
    <a class="btn" href="/invest/crypto/avg-cost/">코인 평단가·추가매수 계산</a>
    <a class="btn ghost" href="/invest/crypto/dca/">코인 DCA + XIRR</a>
  </div>
</div>

<script>
  const $ = (id)=>document.getElementById(id);
  const txBody = $("txBody");

  function addRow(pref={date:"", side:"BUY", price:"20000", qty:"1", fee:"0.1", note:""}) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><input type="date" value="${pref.date||""}"></td>
      <td>
        <select>
          <option value="BUY" ${pref.side==="BUY"?"selected":""}>매수</option>
          <option value="SELL" ${pref.side==="SELL"?"selected":""}>매도</option>
        </select>
      </td>
      <td><input type="number" step="any" value="${pref.price||""}" ></td>
      <td><input type="number" step="any" value="${pref.qty||""}" ></td>
      <td><input type="number" step="any" value="${pref.fee||""}" ></td>
      <td><input type="text" value="${pref.note||""}" ></td>
      <td><button type="button" class="btn ghost">삭제</button></td>
    `;
    tr.querySelector("td:last-child button").onclick=()=>tr.remove();
    txBody.appendChild(tr);
  }

  $("addRow").onclick=()=>addRow();
  // 샘플 3행
  addRow({date:"2025-01-01",side:"BUY",price:"20000",qty:"1",fee:"0.1"});
  addRow({date:"2025-01-10",side:"BUY",price:"25000",qty:"1",fee:"0.1"});
  addRow({date:"2025-02-01",side:"SELL",price:"26000",qty:"0.5",fee:"0.1"});

  function parseRows(){
    const rows=[...txBody.querySelectorAll("tr")];
    return rows.map(r=>{
      const [dEl,sEl,pEl,qEl,fEl,nEl] = r.querySelectorAll("input,select");
      return {
        date: dEl.value, side: sEl.value,
        price: parseFloat(pEl.value||"0"),
        qty: parseFloat(qEl.value||"0"),
        fee: parseFloat(fEl.value||"0"),
        note: nEl.value
      }
    }).filter(x=>x.qty>0 && x.price>0);
  }

  function calcFee(mode, price, qty, feeInput){
    if(mode==="rate"){ // % 입력
      return price*qty*(feeInput/100);
    } else { // 정액
      return feeInput;
    }
  }

  // FIFO/LIFO 실현손익 & 잔량평단
  function realizePnL(transactions, method, feeMode){
    const lots=[]; // {price, qty, fee}
    let realized=0;

    const pushLot=(price, qty, fee)=>{ lots.push({price, qty, fee}); };

    for(const t of transactions){
      const fee = calcFee(feeMode, t.price, t.qty, t.fee);
      if(t.side==="BUY"){
        pushLot(t.price, t.qty, fee);
      } else {
        // SELL: 보유 분과 매칭
        let qtyToSell = t.qty;
        let matchedCost=0, matchedFees=0;
        while(qtyToSell>1e-12 && lots.length){
          const idx = (method==="FIFO") ? 0 : lots.length-1;
          const lot = lots[idx];
          const use = Math.min(lot.qty, qtyToSell);
          const unitFee = lot.fee/lot.qty;
          matchedCost += use*lot.price;
          matchedFees += use*unitFee;
          lot.qty -= use;
          lot.fee -= use*unitFee;
          qtyToSell -= use;
          if(lot.qty<=1e-12) lots.splice(idx,1);
        }
        const proceeds = t.price*t.qty;
        const sellFee = fee;
        realized += proceeds - sellFee - matchedCost - matchedFees;
      }
    }

    // 남은 잔량 요약
    let remQty=0, remCost=0, remFees=0;
    for(const l of lots){ remQty += l.qty; remCost += l.qty*l.price; remFees += l.fee; }
    const avgCost = remQty>0 ? (remCost+remFees)/remQty : 0;

    return {realized, remQty, remCost, remFees, avgCost};
  }

  function fmt(x,fx){
    if(isNaN(x)) return "-";
    const base = Math.round(x).toLocaleString();
    return fx ? `${base}  |  ₩${Math.round(x*fx).toLocaleString()}` : base;
  }

  $("calc").onclick=()=>{
    const txs = parseRows();
    if(!txs.length){ alert("거래내역을 입력하세요."); return; }

    const method = $("invMethod").value;
    const feeMode = $("feeMode").value;
    const px = parseFloat($("currentPrice").value||"0");
    const fx = parseFloat($("fx").value||"");
    const res = realizePnL(txs, method, feeMode);

    // 평가손익(잔량 기준)
    const marketValue = res.remQty*px;
    const bookValue = res.remCost + res.remFees;
    const unreal = marketValue - bookValue;

    // 손익분기점(비율 수수료 모드일 때: 매도 수수료 한 번 더 발생 가정)
    let be = 0;
    if(res.remQty>0){
      if(feeMode==="rate"){
        const feeRate = (txs.find(t=>t.side==="BUY")?.fee || 0) / 100;
        be = (bookValue/res.remQty) * (1 + feeRate);
      } else {
        be = (bookValue/res.remQty);
      }
    }

    // KPI 출력 (사이트 기본 색상 사용: ▲/▼ 기호로만 표기)
    $("unrealized").textContent = isFinite(unreal) ? `${unreal>=0?"▲":"▼"} ${fmt(Math.abs(unreal), fx)}` : "-";
    $("realized").textContent   = isFinite(res.realized) ? `${res.realized>=0?"▲":"▼"} ${fmt(Math.abs(res.realized), fx)}` : "-";
    $("position").textContent   = res.remQty>0 ? `${res.remQty.toFixed(8)} @ ${res.avgCost.toFixed(6)}` : "0";
    $("breakeven").textContent  = be ? (fx? `${be.toFixed(6)}  |  ₩${Math.round(be*fx).toLocaleString()}` : be.toFixed(6)) : "-";
  };
</script>

<!-- (선택) 구조화 데이터는 필요 시 추가 -->

