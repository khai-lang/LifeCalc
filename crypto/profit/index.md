---
layout: default
title: 코인 수익률 계산기
description: 암호화폐 매수·매도 가격을 기준으로 수익률과 손익을 계산합니다.
permalink: /crypto/profit/
section: crypto
---

# 코인 수익률 계산기

<div class="card" style="max-width:860px;margin:0 auto;">
  <form onsubmit="event.preventDefault(); calcCoinAvg();">
    <h2>코인 평균단가·손익 계산기</h2>

    <table class="trade-table">
      <thead>
        <tr>
          <th>구분</th>
          <th>단가(원)</th>
          <th>수량</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody id="tradeList">
        <tr>
          <td>
            <select class="trade-type">
              <option value="buy">매수</option>
              <option value="sell">매도</option>
            </select>
          </td>
          <td><input type="text" class="trade-price" data-format="currency" placeholder="예: 30,000,000"></td>
          <td><input type="text" class="trade-qty" data-format="number" placeholder="예: 0.5"></td>
          <td><button type="button" onclick="removeRow(this)">❌</button></td>
        </tr>
      </tbody>
    </table>

    <button type="button" onclick="addRow()">+ 거래 추가</button>
    <button class="btn">계산하기</button>
  </form>

  <div id="coinResult" class="result-box"></div>
</div>

<script>
function addRow(){
  const row=document.createElement('tr');
  row.innerHTML=`
    <td>
      <select class="trade-type">
        <option value="buy">매수</option>
        <option value="sell">매도</option>
      </select>
    </td>
    <td><input type="text" class="trade-price" data-format="currency" placeholder="단가(원)"></td>
    <td><input type="text" class="trade-qty" data-format="number" placeholder="수량"></td>
    <td><button type="button" onclick="removeRow(this)">❌</button></td>
  `;
  document.getElementById('tradeList').appendChild(row);
}

function removeRow(btn){ btn.closest('tr').remove(); }

function calcCoinAvg(){
  let totalBuyCost=0, totalBuyQty=0;
  let realizedProfit=0, remainingQty=0;

  document.querySelectorAll('#tradeList tr').forEach(row=>{
    const type=row.querySelector('.trade-type').value;
    const price=parseFloat((row.querySelector('.trade-price').value||'').replace(/,/g,''))||0;
    const qty=parseFloat((row.querySelector('.trade-qty').value||'').replace(/,/g,''))||0;

    if(type==='buy'){
      totalBuyCost += price*qty;
      totalBuyQty  += qty;
      remainingQty += qty;
    }else if(type==='sell'){
      if(totalBuyQty>0){
        const avg= totalBuyCost/totalBuyQty;
        realizedProfit += (price-avg)*qty;
        totalBuyCost -= avg*qty;
        totalBuyQty  -= qty;
        remainingQty -= qty;
      }
    }
  });

  const avgPrice = totalBuyQty>0 ? totalBuyCost/totalBuyQty : 0;
  const el=document.getElementById('coinResult');
  el.innerHTML=
    `<h3>결과</h3>
     평균 매입 단가: <b>${isNaN(avgPrice)?'-':avgPrice.toLocaleString()}</b> 원<br>
     보유 수량: <b>${remainingQty}</b> 개<br>
     잔여 평가 금액: <b>${totalBuyCost.toLocaleString()}</b> 원<br>
     실현 손익: <b>${realizedProfit.toLocaleString()}</b> 원`;
  el.classList.add('show');
}
</script>

<style>
.trade-table{ width:100%; border-collapse:collapse; margin-bottom:12px; }
.trade-table th, .trade-table td{ border:1px solid #ddd; padding:6px 8px; text-align:center; }
.trade-table th{ background:#f9f9f9; }
.trade-table input, .trade-table select{ width:100%; box-sizing:border-box; padding:4px; }
.trade-table button{ background:none; border:none; cursor:pointer; font-size:16px; }
</style>

