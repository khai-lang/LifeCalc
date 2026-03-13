---
layout: default
title: 양도소득세 계산기
description: 부동산 매매 시 양도차익을 기준으로 양도세를 계산하는 도구입니다.
permalink: /realestate/capital-gains/
section: realestate
---

<style>
.cgt-wrap{
  max-width: 760px;
  margin: 0 auto;
}

.cgt-desc{
  font-size: 17px;
  line-height: 1.7;
  color: #222;
  margin-bottom: 18px;
}

.cgt-card{
  background: #efe4d8;
  border: 1px solid #dfd0bf;
  border-radius: 18px;
  padding: 22px 20px;
  box-sizing: border-box;
}

.cgt-card h2{
  margin: 0 0 18px;
  font-size: 22px;
  font-weight: 800;
  color: #1f2d3d;
}

/* 구분 탭 */
.asset-tabs{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 18px;
}

.asset-tab{
  height: 46px;
  border: 1px solid #ccb9a4;
  border-radius: 12px;
  background: #fffaf6;
  color: #5a4635;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: all .15s ease;
}

.asset-tab.active{
  background: #ff7a00;
  color: #fff;
  border-color: #ff7a00;
}

.cgt-grid{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 16px;
  align-items: end;
}

.cgt-field{
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.cgt-field label{
  font-size: 16px;
  font-weight: 700;
  color: #333;
  line-height: 1.4;
}

.cgt-field input{
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 1px solid #d4c7b7;
  border-radius: 12px;
  background: #fff;
  font-size: 18px;
  box-sizing: border-box;
}

.cgt-actions{
  grid-column: 1 / -1;
  margin-top: 4px;
}

.cgt-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 46px;
  padding: 0 18px;
  border: 0;
  border-radius: 12px;
  background: #ff7a00;
  color: #fff;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
}

.result-box{
  margin-top: 18px;
  padding: 16px 18px;
  border-radius: 14px;
  background: rgba(255,255,255,0.55);
  font-size: 18px;
  line-height: 1.8;
  color: #222;
  display: none;
}

.result-box.show{
  display: block;
}

.cgt-note{
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: #6a5b4d;
}

.cgt-links{
  max-width: 760px;
  margin: 24px auto 0;
  padding-top: 20px;
  border-top: 1px solid #d8d8d8;
}

.cgt-links h2{
  font-size: 20px;
  margin-bottom: 12px;
}

.cgt-links ul{
  margin: 0;
  padding-left: 22px;
}

.cgt-links li{
  margin: 6px 0;
}

@media (max-width: 768px){
  .asset-tabs{
    grid-template-columns: 1fr;
  }

  .cgt-grid{
    grid-template-columns: 1fr;
  }

  .cgt-btn{
    width: 100%;
  }
}
</style>

<div class="cgt-wrap">
  <p class="cgt-desc">
    부동산 매매 시 발생하는 <strong>양도차익</strong>을 기준으로 예상 세액을 계산합니다.
    자산 구분, 취득가액, 양도가액, 보유기간을 입력해 참고용으로 확인해 보세요.
  </p>

  <div class="cgt-card">
    <form onsubmit="event.preventDefault(); calcCGT();" aria-label="양도소득세 계산기">
      <h2>양도세 계산</h2>

      <!-- 자산 구분 탭 -->
      <div class="asset-tabs" role="tablist" aria-label="자산 구분">
        <button type="button" class="asset-tab active" data-type="land" onclick="setAssetType(this)">토지</button>
        <button type="button" class="asset-tab" data-type="house" onclick="setAssetType(this)">주택</button>
        <button type="button" class="asset-tab" data-type="etc" onclick="setAssetType(this)">기타</button>
      </div>

      <input type="hidden" id="assetType" value="land">

      <div class="cgt-grid">
        <div class="cgt-field">
          <label for="buyPrice">취득가액(원)</label>
          <input id="buyPrice" data-format="currency" type="text" placeholder="예: 300,000,000">
        </div>

        <div class="cgt-field">
          <label for="sellPrice">양도가액(원)</label>
          <input id="sellPrice" data-format="currency" type="text" placeholder="예: 500,000,000">
        </div>

        <div class="cgt-field">
          <label for="years">보유기간(년)</label>
          <input id="years" data-format="number" type="text" placeholder="예: 3">
        </div>

        <div class="cgt-actions">
          <button type="submit" class="cgt-btn">계산하기</button>
        </div>
      </div>
    </form>

    <div id="cgtResult" class="result-box"></div>
    <div class="cgt-note">
      ※ 현재 버전은 참고용 단순 계산기입니다. 실제 세율은 1세대 1주택 여부, 조정대상지역, 보유특별공제, 필요경비, 기본공제 등 조건에 따라 달라질 수 있습니다.
    </div>
  </div>
</div>

<script>
(function(){
  'use strict';

  window.setAssetType = function(btn){
    const tabs = document.querySelectorAll('.asset-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('assetType').value = btn.dataset.type;
  };

  window.calcCGT = function(){
    const assetType = document.getElementById('assetType').value;
    const buy = CalcCommon.num('buyPrice');
    const sell = CalcCommon.num('sellPrice');
    const years = CalcCommon.num('years');

    const gain = Math.max(0, sell - buy);

    let deductionRate = 0;
    let taxRate = 0.22;
    let assetLabel = '';

    if(assetType === 'land'){
      assetLabel = '토지';
      deductionRate = years >= 3 ? 0.10 : 0;
      taxRate = 0.22;
    }else if(assetType === 'house'){
      assetLabel = '주택';
      deductionRate = years >= 3 ? 0.12 : 0;
      taxRate = 0.20;
    }else{
      assetLabel = '기타';
      deductionRate = years >= 3 ? 0.08 : 0;
      taxRate = 0.22;
    }

    const deduction = Math.round(gain * deductionRate);
    const taxable = Math.max(0, gain - deduction);
    const tax = Math.round(taxable * taxRate);

    const el = document.getElementById('cgtResult');
    el.innerHTML = `
      자산 구분: <b>${assetLabel}</b><br>
      양도차익: <b>${CalcCommon.money(gain)}</b> 원<br>
      장기보유 공제: <b>${CalcCommon.money(deduction)}</b> 원<br>
      과세표준: <b>${CalcCommon.money(taxable)}</b> 원<br>
      예상 세액: <b>${CalcCommon.money(tax)}</b> 원
    `;
    el.classList.add('show');
  };
})();
</script>

<div class="cgt-links">
  <h2>함께 보면 좋은 계산기</h2>
  <ul>
    <li><a href="/realestate/acquisition-tax/">취득세 계산기</a></li>
    <li><a href="/realestate/property-tax/">종부세 계산기</a></li>
    <li><a href="/realestate/rent-to-jeonse/">전세↔월세 계산기</a></li>
  </ul>
</div>
