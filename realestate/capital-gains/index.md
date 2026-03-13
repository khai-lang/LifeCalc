---
layout: default
title: 양도소득세 계산기 | 부동산 양도세·필요경비·기본공제 계산
description: 부동산 양도소득세 계산기입니다. 취득가액, 양도가액, 필요경비, 기본공제, 보유기간, 특례·중과 조건을 반영해 양도세를 참고용으로 계산해보세요.
permalink: /realestate/capital-gains/
section: realestate
---

<style>
.cgt-page{
  max-width: 860px;
  margin: 0 auto;
  color: #1f2937;
  line-height: 1.8;
  font-size: 17px;
}
.cgt-hero{
  background: linear-gradient(135deg, #f8efe5 0%, #f3e7d9 100%);
  border: 1px solid #e3d4c5;
  border-radius: 22px;
  padding: 28px 24px;
  margin: 18px 0 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,.04);
}
.cgt-hero h1{
  margin: 0 0 12px;
  font-size: 34px;
  line-height: 1.25;
  letter-spacing: -0.3px;
  color: #13293d;
}
.cgt-hero p{margin:0;color:#374151;}
.cgt-badge{
  display:inline-block;
  margin-bottom:12px;
  padding:7px 12px;
  border-radius:999px;
  background:#fff;
  border:1px solid #dbc9b7;
  font-size:13px;
  font-weight:800;
  color:#6b4f34;
}
.cgt-summary{
  background:#fffaf5;
  border:1px solid #eadfce;
  border-radius:18px;
  padding:18px 18px 16px;
  margin:0 0 24px;
}
.cgt-card{
  background:#f5ebdf;
  border:1px solid #e2d2c0;
  border-radius:22px;
  padding:24px 20px;
  box-shadow:0 12px 28px rgba(0,0,0,.04);
  margin-bottom:26px;
}
.cgt-card h2{
  margin:0 0 18px;
  font-size:28px;
  line-height:1.3;
  color:#13293d;
}
.cgt-mini{
  margin:-6px 0 18px;
  color:#5b6470;
  font-size:15px;
}
.rule-version{
  margin-top:10px;
  font-size:13px;
  color:#6b7280;
}
.cgt-tabs{
  display:grid;
  grid-template-columns:repeat(4, minmax(0, 1fr));
  gap:10px;
  margin-bottom:18px;
}
.cgt-tab{
  height:46px;
  border:1px solid #d0bca8;
  border-radius:12px;
  background:#fffaf6;
  font-size:15px;
  font-weight:800;
  color:#644c36;
  cursor:pointer;
}
.cgt-tab.active{
  background:#ff7a00;
  color:#fff;
  border-color:#ff7a00;
}
.cgt-grid{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:14px 16px;
}
.cgt-field{
  display:flex;
  flex-direction:column;
  gap:7px;
}
.cgt-field label{
  font-size:15px;
  font-weight:800;
  color:#243447;
  line-height:1.4;
}
.cgt-field input,
.cgt-field select{
  width:100%;
  height:48px;
  padding:0 14px;
  border:1px solid #d5c6b5;
  border-radius:12px;
  background:#fff;
  box-sizing:border-box;
  font-size:16px;
  color:#111827;
}
.cgt-field small{
  display:block;
  margin-top:2px;
  color:#6b7280;
  font-size:13px;
  line-height:1.55;
}
.cgt-full{grid-column:1 / -1;}
.cgt-checks{
  display:grid;
  grid-template-columns:repeat(2, minmax(0, 1fr));
  gap:10px 16px;
  margin-top:4px;
}
.cgt-check{
  background:rgba(255,255,255,.55);
  border:1px solid #e4d8ca;
  border-radius:14px;
  padding:12px 14px;
}
.cgt-check label{
  display:flex;
  align-items:center;
  gap:10px;
  font-size:15px;
  font-weight:700;
  color:#243447;
}
.cgt-check input[type="checkbox"]{
  width:18px;
  height:18px;
  accent-color:#ff7a00;
}
.cgt-actions{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-top:18px;
}
.cgt-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:132px;
  height:48px;
  padding:0 18px;
  border:0;
  border-radius:12px;
  background:#ff7a00;
  color:#fff;
  font-size:16px;
  font-weight:800;
  cursor:pointer;
  text-decoration:none;
}
.cgt-btn.secondary{background:#1f5c7a;}
.cgt-btn.light{
  background:#fff;
  color:#1f4f67;
  border:1px solid #cfdfe8;
}
.result-box{
  display:none;
  margin-top:18px;
  padding:18px;
  border-radius:16px;
  background:rgba(255,255,255,.72);
  border:1px solid #e6d8c9;
}
.result-box.show{display:block;}
.result-title{
  margin:0 0 10px;
  font-size:20px;
  font-weight:900;
  color:#13293d;
}
.result-list{
  margin:0;
  padding:0;
  list-style:none;
}
.result-list li{
  display:flex;
  justify-content:space-between;
  gap:14px;
  padding:8px 0;
  border-bottom:1px dashed #dacdbf;
}
.result-list li:last-child{border-bottom:0;}
.result-note{
  margin-top:12px;
  padding:12px 14px;
  border-radius:12px;
  background:#fff7ef;
  border:1px solid #eed8c4;
  font-size:14px;
  color:#6a4e35;
  line-height:1.7;
}
.info-box{
  background:#fff;
  border:1px solid #e5e7eb;
  border-radius:18px;
  padding:22px 20px;
  margin:0 0 22px;
}
.info-box h2{
  margin:0 0 12px;
  font-size:26px;
  line-height:1.3;
  color:#13293d;
}
.info-box h3{
  margin:24px 0 8px;
  font-size:20px;
  color:#1f4f67;
}
.soft-box{
  background:#f9fafb;
  border:1px solid #eceff3;
  border-radius:16px;
  padding:16px;
  margin:14px 0;
}
.tip-box{
  background:#fef6ec;
  border:1px solid #f4d9b7;
  border-radius:16px;
  padding:16px;
  margin:14px 0;
}
.link-row{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin:14px 0 4px;
}
.link-btn{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-height:44px;
  padding:0 16px;
  border-radius:12px;
  background:#0f5b78;
  color:#fff !important;
  text-decoration:none !important;
  font-weight:800;
  font-size:15px;
}
.link-btn.alt{background:#ff7a00;}
.related-links{
  display:grid;
  grid-template-columns:repeat(3, minmax(0, 1fr));
  gap:12px;
  margin-top:14px;
}
.related-links a{
  display:block;
  text-decoration:none;
  background:#D9E5FF;
  border:1px solid #dbe5ec;
  border-radius:16px;
  padding:16px 14px;
  color:#12344d;
  font-weight:800;
}
.ad-slot{
  margin:24px 0;
  padding:22px 18px;
  border:1px dashed #cbd5e1;
  border-radius:16px;
  text-align:center;
  font-size:14px;
  color:#64748b;
  background:#fafcff;
}
@media (max-width:768px){
  .cgt-page{font-size:16px;}
  .cgt-hero h1{font-size:28px;}
  .cgt-tabs,
  .cgt-grid,
  .cgt-checks,
  .related-links{grid-template-columns:1fr;}
  .result-list li{
    flex-direction:column;
    align-items:flex-start;
    gap:4px;
  }
  .cgt-actions .cgt-btn{width:100%;}
}
</style>

<div class="cgt-page">
  <section class="cgt-hero">
    <div class="cgt-badge">부동산·세금 계산기</div>
    <h1>양도소득세 계산기</h1>
    <p>
      부동산 양도 시 발생하는 양도차익을 기준으로 예상 세액을 참고용으로 계산해보세요.
      취득가액, 양도가액, 필요경비, 기본공제, 보유기간, 특례·중과 조건을 반영했습니다.
    </p>
  </section>

  <section class="cgt-summary">
    <strong>한눈에 보기</strong><br>
    이 계산기는 규칙 파일을 따로 불러오는 구조라서, 세율이나 공제 기준이 바뀌면
    계산기 본문 전체를 수정하지 않고도 규칙 파일만 교체해 반영할 수 있습니다.
  </section>

  <section class="cgt-card">
    <h2>양도세 계산</h2>
    <p class="cgt-mini">규칙 파일 기반 자동 반영 구조입니다.</p>
    <div id="ruleVersion" class="rule-version">적용 기준 불러오는 중...</div>

    <form onsubmit="event.preventDefault(); calcCGT();" aria-label="양도소득세 계산기">
      <div class="cgt-tabs" role="tablist" aria-label="자산 구분">
        <button type="button" class="cgt-tab active" data-type="land" onclick="setAssetType(this)">토지</button>
        <button type="button" class="cgt-tab" data-type="house" onclick="setAssetType(this)">주택</button>
        <button type="button" class="cgt-tab" data-type="luxury" onclick="setAssetType(this)">고가주택</button>
        <button type="button" class="cgt-tab" data-type="etc" onclick="setAssetType(this)">기타</button>
      </div>

      <input type="hidden" id="assetType" value="land">

      <div class="cgt-grid">
        <div class="cgt-field">
          <label for="buyDate">취득일자</label>
          <input id="buyDate" type="date">
          <small>가능하면 날짜 입력을 권장합니다.</small>
        </div>

        <div class="cgt-field">
          <label for="sellDate">양도일자</label>
          <input id="sellDate" type="date">
          <small>양도일이 속한 달 기준 신고기한을 확인하세요.</small>
        </div>

        <div class="cgt-field">
          <label for="buyPrice">취득가액(원)</label>
          <input id="buyPrice" data-format="currency" type="text" placeholder="예: 300,000,000">
        </div>

        <div class="cgt-field">
          <label for="sellPrice">양도가액(원)</label>
          <input id="sellPrice" data-format="currency" type="text" placeholder="예: 500,000,000">
        </div>

        <div class="cgt-field">
          <label for="expense">필요경비(원)</label>
          <input id="expense" data-format="currency" type="text" placeholder="예: 15,000,000">
          <small>취득세, 중개보수, 등기비용 등</small>
        </div>

        <div class="cgt-field">
          <label for="basicDeduction">기본공제(원)</label>
          <input id="basicDeduction" data-format="currency" type="text" value="2500000">
          <small>규칙 파일 기준 기본값이 자동 적용됩니다.</small>
        </div>

        <div class="cgt-field cgt-full">
          <label for="holdingYearsManual">보유기간(보조 입력, 년)</label>
          <input id="holdingYearsManual" data-format="number" type="text" placeholder="날짜 입력이 어려우면 보조적으로 사용">
        </div>

        <div class="cgt-field cgt-full">
          <label>특례 및 중과 조건</label>
          <div class="cgt-checks">
            <div class="cgt-check"><label><input type="checkbox" id="isUnregistered"> 미등기 양도 자산</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isInherited"> 상속받은 자산</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isNonBusinessLand"> 비사업용 토지</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isOneHome"> 1세대 1주택 검토 대상</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isTaxExemptReview"> 비과세 여부 별도 확인 필요</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isMultiHomeHeavy"> 다주택 중과 가능성 있음</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isAdjustedArea"> 조정대상지역 관련 검토 필요</label></div>
            <div class="cgt-check"><label><input type="checkbox" id="isLongTermRental"> 장기·일반 임대주택 특례 검토</label></div>
          </div>
        </div>
      </div>

      <div class="cgt-actions">
        <button type="submit" class="cgt-btn">계산하기</button>
        <a class="cgt-btn light" href="https://www.nts.go.kr" target="_blank" rel="noopener">국세청 안내</a>
        <a class="cgt-btn secondary" href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=search&searchInfo2503143553" target="_blank" rel="noopener">홈택스 모의계산</a>
      </div>
    </form>

    <div id="cgtResult" class="result-box"></div>
  </section>

 <div class="cgt-ad">
  <div class="cgt-ad-label">ADVERTISEMENT</div>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

  <section class="info-box">
    <h2>자동 반영 구조란?</h2>
    <p>
      기존에는 세율, 공제율, 기본공제를 계산기 코드 안에 직접 넣는 방식이 많았습니다.
      하지만 이 방식은 세법 기준이 바뀔 때마다 HTML과 스크립트를 함께 수정해야 해서 관리가 번거롭습니다.
      지금 구조는 <strong>규칙 파일(JSON)</strong>에서 숫자와 기준을 읽어오므로,
      나중에 계산 기준이 바뀌어도 핵심 데이터만 바꾸면 계산기 전체에 자동 반영됩니다.
    </p>

    <h3>예를 들어 이렇게 바뀌면</h3>
    <div class="soft-box">
      - 기본공제가 250만원에서 다른 금액으로 변경<br>
      - 누진세율 구간이 조정됨<br>
      - 장기보유특별공제율이 바뀜<br>
      - 중과 가산율 기준이 변경됨
    </div>

    <p>
      위와 같은 경우, 계산기 화면을 다시 짤 필요 없이
      <strong>/assets/data/capital-gains-rules.json</strong> 파일만 수정하면 됩니다.
    </p>
  </section>

  <section class="info-box">
    <h2>함께 보면 좋은 계산기</h2>
    <div class="related-links">
      <a href="/realestate/acquisition-tax/">취득세 계산기 보기</a>
      <a href="/realestate/property-tax/">종부세 계산기 보기</a>
      <a href="/realestate/rent-to-jeonse/">전세↔월세 계산기 보기</a>
    </div>
  </section>
</div>

<script>
(function(){
  'use strict';

  let CGT_RULES = null;

  function getNum(id){
    if (window.CalcCommon && typeof window.CalcCommon.num === 'function') {
      return CalcCommon.num(id);
    }
    const el = document.getElementById(id);
    if (!el) return 0;
    return Number(String(el.value || '').replace(/[^\d.-]/g, '')) || 0;
  }

  function money(n){
    if (window.CalcCommon && typeof window.CalcCommon.money === 'function') {
      return CalcCommon.money(n);
    }
    return (Number(n) || 0).toLocaleString('ko-KR');
  }

  function yearsBetween(start, end){
    if(!start || !end) return 0;
    const s = new Date(start);
    const e = new Date(end);
    if(isNaN(s.getTime()) || isNaN(e.getTime()) || e <= s) return 0;
    return (e - s) / (1000 * 60 * 60 * 24 * 365.25);
  }

  function getHoldingYears(){
    const buyDate = document.getElementById('buyDate').value;
    const sellDate = document.getElementById('sellDate').value;
    const autoYears = yearsBetween(buyDate, sellDate);
    if(autoYears > 0) return autoYears;
    return getNum('holdingYearsManual');
  }

  function getAssetLabel(type){
    if(type === 'land') return '토지';
    if(type === 'house') return '주택';
    if(type === 'luxury') return '고가주택';
    return '기타';
  }

  function getRuleVersionText(rules){
    const box = document.getElementById('ruleVersion');
    if(!box || !rules) return;
    box.textContent = `적용 기준: ${rules.version || '-'} / 시행일: ${rules.effective_from || '-'} / ${rules.note || ''}`;
  }

  async function loadRules(){
    if(CGT_RULES) return CGT_RULES;

    try{
      const res = await fetch('/assets/data/capital-gains-rules.json');
      if(!res.ok) throw new Error('rules load failed');
      CGT_RULES = await res.json();
      getRuleVersionText(CGT_RULES);

      const basic = document.getElementById('basicDeduction');
      if (basic && CGT_RULES.basic_deduction != null) {
        basic.value = String(CGT_RULES.basic_deduction);
      }
      return CGT_RULES;
    }catch(err){
      console.error(err);
      const box = document.getElementById('ruleVersion');
      if(box) box.textContent = '규칙 파일을 불러오지 못했습니다. 기본값으로 동작합니다.';
      CGT_RULES = {
        version: 'fallback',
        effective_from: '',
        note: '기본 내장 규칙',
        basic_deduction: 2500000,
        progressive_tax_brackets: [
          { limit: 14000000, rate: 0.06, quick: 0 },
          { limit: 50000000, rate: 0.15, quick: 1260000 },
          { limit: 88000000, rate: 0.24, quick: 5760000 },
          { limit: 150000000, rate: 0.35, quick: 15440000 },
          { limit: 300000000, rate: 0.38, quick: 19940000 },
          { limit: 500000000, rate: 0.40, quick: 25940000 },
          { limit: 1000000000, rate: 0.42, quick: 35940000 },
          { limit: 999999999999, rate: 0.45, quick: 65940000 }
        ],
        long_term_deduction: {
          default: [
            { min_years: 3, rate: 0.06 },
            { min_years: 4, rate: 0.08 },
            { min_years: 5, rate: 0.10 },
            { min_years: 6, rate: 0.12 },
            { min_years: 7, rate: 0.14 },
            { min_years: 8, rate: 0.16 },
            { min_years: 9, rate: 0.18 },
            { min_years: 10, rate: 0.20 }
          ],
          one_home_or_luxury: [
            { min_years: 3, rate: 0.12 },
            { min_years: 4, rate: 0.16 },
            { min_years: 5, rate: 0.20 },
            { min_years: 6, rate: 0.24 },
            { min_years: 7, rate: 0.28 },
            { min_years: 8, rate: 0.32 },
            { min_years: 9, rate: 0.36 },
            { min_years: 10, rate: 0.40 }
          ]
        },
        adjustments: {
          unregistered_add_rate: 0.20,
          non_business_land_add_rate: 0.10,
          multi_home_heavy_add_rate: 0.20
        }
      };
      return CGT_RULES;
    }
  }

  function getLongTermRateFromRules(rules, assetType, years, isOneHome, isLuxury){
    if(!rules || years < 3) return 0;

    const useSpecial = assetType === 'house' || assetType === 'luxury';
    const table = (useSpecial && (isOneHome || isLuxury))
      ? rules.long_term_deduction.one_home_or_luxury
      : rules.long_term_deduction.default;

    let rate = 0;
    table.forEach(row => {
      if(years >= row.min_years) rate = row.rate;
    });
    return rate;
  }

  function getProgressiveTaxFromRules(rules, taxBase){
    const table = (rules && rules.progressive_tax_brackets) || [];
    const row = table.find(v => taxBase <= v.limit) || table[table.length - 1];
    if(!row) return 0;
    return Math.max(0, Math.round(taxBase * row.rate - row.quick));
  }

  function getAdjustmentInfo(rules, type){
    const isUnregistered = document.getElementById('isUnregistered').checked;
    const isNonBusinessLand = document.getElementById('isNonBusinessLand').checked;
    const isMultiHomeHeavy = document.getElementById('isMultiHomeHeavy').checked;
    const isAdjustedArea = document.getElementById('isAdjustedArea').checked;
    const isTaxExemptReview = document.getElementById('isTaxExemptReview').checked;
    const isLongTermRental = document.getElementById('isLongTermRental').checked;

    let addRate = 0;
    let notices = [];

    if(isUnregistered){
      addRate += (rules.adjustments?.unregistered_add_rate || 0);
      notices.push('미등기 양도 자산 체크로 기본공제 제외 및 가산을 반영했습니다.');
    }

    if(type === 'land' && isNonBusinessLand){
      addRate += (rules.adjustments?.non_business_land_add_rate || 0);
      notices.push('비사업용 토지 가능성을 반영했습니다.');
    }

    if((type === 'house' || type === 'luxury') && isMultiHomeHeavy){
      addRate += (rules.adjustments?.multi_home_heavy_add_rate || 0);
      notices.push('다주택 중과 가능성을 반영했습니다.');
    }

    if((type === 'house' || type === 'luxury') && isAdjustedArea){
      notices.push('조정대상지역 여부는 실제 판정 기준을 다시 확인해야 합니다.');
    }

    if((type === 'house' || type === 'luxury') && isTaxExemptReview){
      notices.push('1세대 1주택 비과세, 고가주택 특례는 별도 공식 확인이 필요합니다.');
    }

    if(isLongTermRental){
      notices.push('장기·일반 임대주택 특례는 별도 요건 검토가 필요합니다.');
    }

    return { addRate, notices };
  }

  window.setAssetType = function(btn){
    document.querySelectorAll('.cgt-tab').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('assetType').value = btn.dataset.type;
  };

  window.calcCGT = async function(){
    const rules = await loadRules();

    const assetType = document.getElementById('assetType').value;
    const buy = getNum('buyPrice');
    const sell = getNum('sellPrice');
    const expense = getNum('expense');
    let basicDeduction = getNum('basicDeduction') || rules.basic_deduction || 0;

    const isUnregistered = document.getElementById('isUnregistered').checked;
    const isOneHome = document.getElementById('isOneHome').checked;
    const isLuxury = assetType === 'luxury';

    if(isUnregistered){
      basicDeduction = 0;
    }

    const holdingYears = getHoldingYears();
    const gain = Math.max(0, sell - buy - expense);

    const longRate = getLongTermRateFromRules(rules, assetType, holdingYears, isOneHome, isLuxury);
    const longDeduction = Math.round(gain * longRate);

    const taxBase = Math.max(0, gain - longDeduction - basicDeduction);
    const baseTax = getProgressiveTaxFromRules(rules, taxBase);

    const adjustment = getAdjustmentInfo(rules, assetType);
    const extraTax = Math.round(taxBase * adjustment.addRate);
    const finalTax = Math.max(0, baseTax + extraTax);

    const warnings = adjustment.notices.slice();
    if(!buy || !sell){
      warnings.push('취득가액과 양도가액을 정확히 입력해야 합니다.');
    }
    if(!document.getElementById('buyDate').value || !document.getElementById('sellDate').value){
      warnings.push('취득일자·양도일자를 입력하면 보유기간 계산이 더 정확해집니다.');
    }

    const el = document.getElementById('cgtResult');
    el.innerHTML = `
      <div class="result-title">예상 계산 결과</div>
      <ul class="result-list">
        <li><span>적용 규칙 버전</span><b>${rules.version || '-'}</b></li>
        <li><span>자산 구분</span><b>${getAssetLabel(assetType)}</b></li>
        <li><span>보유기간</span><b>${holdingYears ? holdingYears.toFixed(2) : '0'} 년</b></li>
        <li><span>양도차익(필요경비 반영 후)</span><b>${money(gain)} 원</b></li>
        <li><span>장기보유특별공제</span><b>${money(longDeduction)} 원</b></li>
        <li><span>기본공제</span><b>${money(basicDeduction)} 원</b></li>
        <li><span>과세표준</span><b>${money(taxBase)} 원</b></li>
        <li><span>기본 세액</span><b>${money(baseTax)} 원</b></li>
        <li><span>특례·중과 보정세액</span><b>${money(extraTax)} 원</b></li>
        <li><span>예상 세액</span><b>${money(finalTax)} 원</b></li>
      </ul>
      <div class="result-note">
        ${warnings.length ? warnings.map(v => `• ${v}`).join('<br>') : '• 규칙 파일 기준 참고용 계산 결과입니다.'}
      </div>
    `;
    el.classList.add('show');
  };

  document.addEventListener('DOMContentLoaded', function(){
    loadRules();
  });
})();
</script>
