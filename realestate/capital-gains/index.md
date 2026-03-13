---
layout: default
title: 양도소득세 계산기 | 부동산 양도세·필요경비·기본공제 계산
description: 부동산 양도소득세 계산기입니다. 취득가액, 양도가액, 필요경비, 기본공제, 보유기간, 특례 및 중과 조건을 반영해 양도세를 참고용으로 계산해보세요.
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
.cgt-hero p{
  margin: 0;
  color: #374151;
}
.cgt-badge{
  display: inline-block;
  margin-bottom: 12px;
  padding: 7px 12px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #dbc9b7;
  font-size: 13px;
  font-weight: 800;
  color: #6b4f34;
}
.cgt-summary{
  background: #fffaf5;
  border: 1px solid #eadfce;
  border-radius: 18px;
  padding: 18px 18px 16px;
  margin: 0 0 24px;
}
.cgt-summary strong{
  color: #111827;
}
.cgt-card{
  background: #f5ebdf;
  border: 1px solid #e2d2c0;
  border-radius: 22px;
  padding: 24px 20px;
  box-shadow: 0 12px 28px rgba(0,0,0,.04);
  margin-bottom: 26px;
}
.cgt-card h2{
  margin: 0 0 18px;
  font-size: 28px;
  line-height: 1.3;
  color: #13293d;
}
.cgt-mini{
  margin: -6px 0 18px;
  color: #5b6470;
  font-size: 15px;
}
.cgt-tabs{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 18px;
}
.cgt-tab{
  height: 46px;
  border: 1px solid #d0bca8;
  border-radius: 12px;
  background: #fffaf6;
  font-size: 15px;
  font-weight: 800;
  color: #644c36;
  cursor: pointer;
  transition: .15s ease;
}
.cgt-tab.active{
  background: #ff7a00;
  color: #fff;
  border-color: #ff7a00;
}
.cgt-grid{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px 16px;
}
.cgt-field{
  display: flex;
  flex-direction: column;
  gap: 7px;
}
.cgt-field label{
  font-size: 15px;
  font-weight: 800;
  color: #243447;
  line-height: 1.4;
}
.cgt-field input,
.cgt-field select{
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: 1px solid #d5c6b5;
  border-radius: 12px;
  background: #fff;
  box-sizing: border-box;
  font-size: 16px;
  color: #111827;
}
.cgt-field small{
  display: block;
  margin-top: 2px;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.55;
}
.cgt-full{
  grid-column: 1 / -1;
}
.cgt-checks{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px 16px;
  margin-top: 4px;
}
.cgt-check{
  background: rgba(255,255,255,.55);
  border: 1px solid #e4d8ca;
  border-radius: 14px;
  padding: 12px 14px;
}
.cgt-check label{
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #243447;
  line-height: 1.5;
}
.cgt-check input[type="checkbox"]{
  width: 18px;
  height: 18px;
  accent-color: #ff7a00;
}
.cgt-actions{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}
.cgt-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 132px;
  height: 48px;
  padding: 0 18px;
  border: 0;
  border-radius: 12px;
  background: #ff7a00;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
}
.cgt-btn.secondary{
  background: #1f5c7a;
}
.cgt-btn.light{
  background: #fff;
  color: #1f4f67;
  border: 1px solid #cfdfe8;
}
.result-box{
  display: none;
  margin-top: 18px;
  padding: 18px;
  border-radius: 16px;
  background: rgba(255,255,255,.72);
  border: 1px solid #e6d8c9;
}
.result-box.show{
  display: block;
}
.result-title{
  margin: 0 0 10px;
  font-size: 20px;
  font-weight: 900;
  color: #13293d;
}
.result-list{
  margin: 0;
  padding: 0;
  list-style: none;
}
.result-list li{
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 8px 0;
  border-bottom: 1px dashed #dacdbf;
}
.result-list li:last-child{
  border-bottom: 0;
}
.result-list b{
  color: #111827;
}
.result-note{
  margin-top: 12px;
  padding: 12px 14px;
  border-radius: 12px;
  background: #fff7ef;
  border: 1px solid #eed8c4;
  font-size: 14px;
  color: #6a4e35;
  line-height: 1.7;
}
.info-box{
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  padding: 22px 20px;
  margin: 0 0 22px;
}
.info-box h2{
  margin: 0 0 12px;
  font-size: 26px;
  line-height: 1.3;
  color: #13293d;
}
.info-box h3{
  margin: 24px 0 8px;
  font-size: 20px;
  line-height: 1.4;
  color: #1f4f67;
}
.soft-box{
  background: #f9fafb;
  border: 1px solid #eceff3;
  border-radius: 16px;
  padding: 16px;
  margin: 14px 0;
}
.tip-box{
  background: #fef6ec;
  border: 1px solid #f4d9b7;
  border-radius: 16px;
  padding: 16px;
  margin: 14px 0;
}
.link-row{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 14px 0 4px;
}
.link-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  background: #0f5b78;
  color: #fff !important;
  text-decoration: none !important;
  font-weight: 800;
  font-size: 15px;
}
.link-btn.alt{
  background: #ff7a00;
}
.related-links{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
}
.related-links a{
  display: block;
  text-decoration: none;
  background: #f7fafc;
  border: 1px solid #dbe5ec;
  border-radius: 16px;
  padding: 16px 14px;
  color: #12344d;
  font-weight: 800;
}
.faq-item{
  border-top: 1px solid #e8ecf1;
  padding: 16px 0;
}
.faq-item:first-child{
  border-top: 0;
  padding-top: 4px;
}
.faq-q{
  font-weight: 900;
  color: #13293d;
  margin-bottom: 6px;
}
.ad-slot{
  margin: 24px 0;
  padding: 22px 18px;
  border: 1px dashed #cbd5e1;
  border-radius: 16px;
  text-align: center;
  font-size: 14px;
  color: #64748b;
  background: #fafcff;
}
@media (max-width: 768px){
  .cgt-page{
    font-size: 16px;
  }
  .cgt-hero h1{
    font-size: 28px;
  }
  .cgt-tabs,
  .cgt-grid,
  .cgt-checks,
  .related-links{
    grid-template-columns: 1fr;
  }
  .result-list li{
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  .cgt-actions .cgt-btn{
    width: 100%;
  }
}
</style>

<div class="cgt-page">

  <section class="cgt-hero">
    <div class="cgt-badge">부동산·세금 계산기</div>
    <h1>양도소득세 계산기</h1>
    <p>
      부동산 양도 시 발생하는 <strong>양도차익</strong>을 기준으로 예상 세액을 참고용으로 계산해보세요.
      취득가액, 양도가액, <strong>필요경비</strong>, <strong>기본공제</strong>, 보유기간과 특례·중과 조건을 함께 반영해
      보다 현실적인 흐름으로 확인할 수 있도록 구성했습니다.
    </p>
  </section>

  <section class="cgt-summary">
    <strong>한눈에 보기</strong><br>
    양도소득세는 단순히 “양도가액 - 취득가액”만으로 끝나지 않습니다. 필요경비, 장기보유특별공제, 양도소득 기본공제, 미등기 여부,
    주택 수, 조정대상지역 여부 등에 따라 결과가 크게 달라질 수 있습니다. 실제 신고기한은 일반적인 부동산 기준
    <strong>양도일이 속하는 달의 말일부터 2개월 이내</strong>입니다.
  </section>

  <section class="cgt-card">
    <h2>양도세 계산</h2>
    <p class="cgt-mini">홈택스 모의계산 흐름을 참고한 참고용 버전입니다. 실제 신고 전에는 홈택스나 세무전문가 확인이 필요합니다.</p>

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
          <small>실제 보유기간은 취득일과 양도일 기준으로 판단하는 경우가 많습니다.</small>
        </div>

        <div class="cgt-field">
          <label for="sellDate">양도일자</label>
          <input id="sellDate" type="date">
          <small>신고·납부기한은 일반 부동산 기준 양도일이 속한 달의 말일부터 2개월 이내입니다.</small>
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
          <small>예: 취득세, 등기비용, 중개보수, 법무사 비용, 자본적 지출 일부 등</small>
        </div>

        <div class="cgt-field">
          <label for="basicDeduction">기본공제(원)</label>
          <input id="basicDeduction" data-format="currency" type="text" value="2500000">
          <small>기본값 250만원. 미등기 양도자산은 일반적으로 적용 제외됩니다.</small>
        </div>

        <div class="cgt-field cgt-full">
          <label for="holdingYearsManual">보유기간(보조 입력, 년)</label>
          <input id="holdingYearsManual" data-format="number" type="text" placeholder="날짜 입력이 어려우면 보조적으로 사용">
          <small>취득일과 양도일을 입력하면 자동 계산을 우선 사용합니다.</small>
        </div>

        <div class="cgt-field cgt-full">
          <label>특례 및 중과 조건</label>
          <div class="cgt-checks">
            <div class="cgt-check">
              <label><input type="checkbox" id="isUnregistered"> 미등기 양도 자산</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isInherited"> 상속받은 자산</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isNonBusinessLand"> 비사업용 토지</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isOneHome"> 1세대 1주택 검토 대상</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isTaxExemptReview"> 비과세 여부 별도 확인 필요</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isMultiHomeHeavy"> 다주택 중과 가능성 있음</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isAdjustedArea"> 조정대상지역 관련 검토 필요</label>
            </div>
            <div class="cgt-check">
              <label><input type="checkbox" id="isLongTermRental"> 장기·일반 임대주택 특례 검토</label>
            </div>
          </div>
          <small>특례·중과 체크는 참고용 경고 및 계산 보정에 활용됩니다. 실제 판정은 홈택스 또는 세무전문가 기준으로 확인하세요.</small>
        </div>
      </div>

      <div class="cgt-actions">
        <button type="submit" class="cgt-btn">계산하기</button>
        <a class="cgt-btn secondary" href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=UTERNAAU62" target="_blank" rel="noopener">홈택스 모의계산</a>
        <a class="cgt-btn light" href="https://www.nts.go.kr" target="_blank" rel="noopener">국세청 안내</a>
      </div>
    </form>

    <div id="cgtResult" class="result-box"></div>
  </section>

  <div class="ad-slot">광고 위치 추천 ① 계산기 바로 아래</div>

  <section class="info-box">
    <h2>양도소득세 계산 방법</h2>
    <p>
      양도소득세는 보통 <strong>양도가액 - 취득가액 - 필요경비</strong>로 양도차익을 구한 뒤, 장기보유특별공제와 기본공제 등을 차감해
      과세표준을 계산하는 흐름으로 봅니다. 국세청도 세액계산 흐름에서
      <strong>양도차익 → 장기보유특별공제 → 양도소득금액 → 기본공제 → 과세표준 → 세율 적용</strong> 순서를 안내하고 있습니다.
    </p>

    <h3>필요경비란?</h3>
    <div class="soft-box">
      필요경비는 부동산 취득·보유·양도 과정에서 실제로 지출한 비용 중 세법상 인정되는 금액을 말합니다.
      일반적으로 취득세, 중개보수, 등기 관련 비용, 법무사 비용, 일부 자본적 지출 등이 검토 대상이 됩니다.
      필요경비를 정확히 반영하면 양도차익이 줄어들 수 있어 결과적으로 세금 부담도 달라질 수 있습니다.
    </div>

    <h3>기본공제란?</h3>
    <div class="soft-box">
      양도소득 기본공제는 일반적으로 <strong>연 250만원</strong>입니다. 다만 국세청 안내에 따르면
      <strong>미등기 양도자산은 기본공제 적용이 배제</strong>됩니다. 계산기 기본값은 250만원으로 넣어두었고,
      미등기 항목을 체크하면 자동으로 0원 처리되도록 구성했습니다.
    </div>

    <h3>특례 및 중과가 중요한 이유</h3>
    <div class="tip-box">
      같은 양도차익이라도 <strong>1세대 1주택 비과세 여부</strong>, <strong>다주택 중과 여부</strong>,
      <strong>비사업용 토지 여부</strong>, <strong>조정대상지역 여부</strong>, <strong>장기보유특별공제 적용 가능성</strong>에 따라
      실제 세액은 크게 달라질 수 있습니다. 따라서 계산기는 참고용으로 활용하고, 최종 확인은 홈택스 모의계산 또는 세무전문가 상담이 안전합니다.
    </div>

    <div class="link-row">
      <a class="link-btn alt" href="https://hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&menuCd=search&searchInfo2503143553  rel="noopener">홈택스 양도세 모의계산 바로가기</a>
      <a class="link-btn" href="https://www.nts.go.kr/nts/cm/cntnts/cntntsView.do?cntntsId=7709&mi=2310"  rel="noopener">국세청 세액계산 흐름도 보기</a>
      <a class="link-btn" href="https://www.nts.go.kr/tax/sub/1.1.2.%EC%8B%A0%EA%B3%A0%EB%82%A9%EB%B6%80%EA%B8%B0%ED%95%9C.html"  rel="noopener">양도세 신고·납부기한 보기</a>
    </div>
  </section>

  <div class="ad-slot">광고 위치 추천 ② 설명 콘텐츠 중간</div>

  <section class="info-box">
    <h2>양도소득세 계산 전 꼭 확인할 점</h2>

    <h3>1. 취득일자와 양도일자</h3>
    <p>
      단순히 보유기간을 몇 년으로 입력하는 것보다 취득일과 양도일을 기준으로 보는 것이 더 정확합니다.
      장기보유특별공제나 일부 특례는 보유기간과 거주기간 판단이 중요하기 때문입니다.
    </p>

    <h3>2. 필요경비 누락</h3>
    <p>
      실제 신고에서 많은 분들이 놓치는 부분이 필요경비입니다. 취득세, 중개수수료, 법무사 비용, 등기비용 등을
      빠뜨리면 예상 세액이 과하게 나올 수 있습니다. 증빙자료를 확인해 가능한 범위를 챙기는 것이 좋습니다.
    </p>

    <h3>3. 미등기 양도 여부</h3>
    <p>
      미등기 양도 자산은 일반적인 계산과 다른 취급을 받기 때문에 기본공제나 세율 판단에 영향을 줄 수 있습니다.
      이 경우는 반드시 공식 안내를 다시 확인하는 것이 좋습니다.
    </p>

    <h3>4. 다주택·조정대상지역 여부</h3>
    <p>
      주택 수와 조정대상지역 해당 여부는 중과 여부 판단에 영향을 줄 수 있습니다.
      특히 정책·법령 변화가 있을 수 있어 최신 기준 확인이 중요합니다.
    </p>
  </section>

  <section class="info-box">
    <h2>자주 묻는 질문</h2>

    <div class="faq-item">
      <div class="faq-q">Q. 양도소득세 기본공제는 얼마인가요?</div>
      <div class="faq-a">
        일반적인 안내 기준으로 양도소득 기본공제는 연 250만원입니다. 다만 미등기 양도자산은 적용 배제됩니다.
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 양도세 신고는 언제 하나요?</div>
      <div class="faq-a">
        일반적인 토지·건물 등 부동산의 경우 양도일이 속하는 달의 말일부터 2개월 이내 예정신고·납부가 필요합니다.
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 필요경비를 입력하면 세금이 줄어들 수 있나요?</div>
      <div class="faq-a">
        네. 필요경비는 양도차익 계산 시 차감 항목이므로, 인정 가능한 비용을 정확히 반영하면 과세표준이 낮아질 수 있습니다.
      </div>
    </div>

    <div class="faq-item">
      <div class="faq-q">Q. 이 계산기 결과를 그대로 신고해도 되나요?</div>
      <div class="faq-a">
        아니요. 이 페이지는 참고용 계산기입니다. 실제 세액은 홈택스 모의계산, 국세청 안내, 세무전문가 검토를 통해 최종 확인하는 것이 안전합니다.
      </div>
    </div>
  </section>

  <div class="ad-slot">광고 위치 추천 ③ FAQ 아래</div>

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
    const diff = e - s;
    return diff / (1000 * 60 * 60 * 24 * 365.25);
  }

  function getHoldingYears(){
    const buyDate = document.getElementById('buyDate').value;
    const sellDate = document.getElementById('sellDate').value;
    const autoYears = yearsBetween(buyDate, sellDate);
    if(autoYears > 0) return autoYears;
    return getNum('holdingYearsManual');
  }

  function getLongTermDeductionRate(assetType, years, isOneHome, isLuxury){
    if(years < 3) return 0;

    if(assetType === 'house' || assetType === 'luxury'){
      if(isOneHome || isLuxury){
        if(years < 4) return 0.12;
        if(years < 5) return 0.16;
        if(years < 6) return 0.20;
        if(years < 7) return 0.24;
        if(years < 8) return 0.28;
        if(years < 9) return 0.32;
        if(years < 10) return 0.36;
        return 0.40;
      }
      if(years < 4) return 0.06;
      if(years < 5) return 0.08;
      if(years < 6) return 0.10;
      if(years < 7) return 0.12;
      if(years < 8) return 0.14;
      if(years < 9) return 0.16;
      if(years < 10) return 0.18;
      return 0.20;
    }

    if(years < 4) return 0.06;
    if(years < 5) return 0.08;
    if(years < 6) return 0.10;
    if(years < 7) return 0.12;
    if(years < 8) return 0.14;
    if(years < 9) return 0.16;
    if(years < 10) return 0.18;
    return 0.20;
  }

  function getProgressiveTax(base){
    const brackets = [
      { limit: 14000000, rate: 0.06, quick: 0 },
      { limit: 50000000, rate: 0.15, quick: 1260000 },
      { limit: 88000000, rate: 0.24, quick: 5760000 },
      { limit: 150000000, rate: 0.35, quick: 15440000 },
      { limit: 300000000, rate: 0.38, quick: 19940000 },
      { limit: 500000000, rate: 0.40, quick: 25940000 },
      { limit: 1000000000, rate: 0.42, quick: 35940000 },
      { limit: Infinity, rate: 0.45, quick: 65940000 }
    ];

    const row = brackets.find(b => base <= b.limit) || brackets[brackets.length - 1];
    return Math.max(0, Math.round(base * row.rate - row.quick));
  }

  function getAssetLabel(type){
    if(type === 'land') return '토지';
    if(type === 'house') return '주택';
    if(type === 'luxury') return '고가주택';
    return '기타';
  }

  function getAdjustmentInfo(type){
    const isUnregistered = document.getElementById('isUnregistered').checked;
    const isNonBusinessLand = document.getElementById('isNonBusinessLand').checked;
    const isMultiHomeHeavy = document.getElementById('isMultiHomeHeavy').checked;
    const isAdjustedArea = document.getElementById('isAdjustedArea').checked;
    const isTaxExemptReview = document.getElementById('isTaxExemptReview').checked;
    const isLongTermRental = document.getElementById('isLongTermRental').checked;

    let addRate = 0;
    let notices = [];

    if(isUnregistered){
      notices.push('미등기 양도 자산으로 체크되어 기본공제를 0원으로 반영했습니다.');
      addRate += 0.20;
    }

    if(type === 'land' && isNonBusinessLand){
      notices.push('비사업용 토지 가능성을 반영해 보수적으로 추가 세율을 더했습니다.');
      addRate += 0.10;
    }

    if((type === 'house' || type === 'luxury') && isMultiHomeHeavy){
      notices.push('다주택 중과 가능성을 반영해 보수적으로 추가 세율을 더했습니다.');
      addRate += 0.20;
    }

    if((type === 'house' || type === 'luxury') && isAdjustedArea){
      notices.push('조정대상지역 여부는 실제 중과 판단에 중요하므로 공식 기준 재확인이 필요합니다.');
    }

    if((type === 'house' || type === 'luxury') && isTaxExemptReview){
      notices.push('1세대 1주택 비과세 또는 고가주택 특례는 실제 과세대상 양도차익 계산과 다를 수 있습니다.');
    }

    if(isLongTermRental){
      notices.push('장기·일반 임대주택 특례 여부는 별도 요건 검토가 필요합니다.');
    }

    return { addRate, notices };
  }

  window.setAssetType = function(btn){
    document.querySelectorAll('.cgt-tab').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('assetType').value = btn.dataset.type;
  };

  window.calcCGT = function(){
    const assetType = document.getElementById('assetType').value;
    const buy = getNum('buyPrice');
    const sell = getNum('sellPrice');
    const expense = getNum('expense');
    let basicDeduction = getNum('basicDeduction');
    const holdingYears = getHoldingYears();

    const isUnregistered = document.getElementById('isUnregistered').checked;
    const isOneHome = document.getElementById('isOneHome').checked;
    const isLuxury = assetType === 'luxury';

    if(isUnregistered){
      basicDeduction = 0;
    }

    const gain = Math.max(0, sell - buy - expense);
    const ltRate = getLongTermDeductionRate(assetType, holdingYears, isOneHome, isLuxury);
    const longTermDeduction = Math.round(gain * ltRate);
    const taxable = Math.max(0, gain - longTermDeduction - basicDeduction);

    const progressiveTax = getProgressiveTax(taxable);
    const adjustment = getAdjustmentInfo(assetType);

    const extraTax = Math.round(taxable * adjustment.addRate);
    const finalTax = Math.max(0, progressiveTax + extraTax);

    const warnings = adjustment.notices.slice();
    if(!buy || !sell){
      warnings.push('취득가액과 양도가액을 정확히 입력해야 보다 의미 있는 결과를 볼 수 있습니다.');
    }
    if(!document.getElementById('buyDate').value || !document.getElementById('sellDate').value){
      warnings.push('취득일자·양도일자를 입력하면 보유기간 계산이 더 정확해집니다.');
    }

    const el = document.getElementById('cgtResult');
    el.innerHTML = `
      <div class="result-title">예상 계산 결과</div>
      <ul class="result-list">
        <li><span>자산 구분</span><b>${getAssetLabel(assetType)}</b></li>
        <li><span>보유기간(계산 반영)</span><b>${holdingYears ? holdingYears.toFixed(2) : '0'} 년</b></li>
        <li><span>양도차익(필요경비 반영 후)</span><b>${money(gain)} 원</b></li>
        <li><span>장기보유특별공제</span><b>${money(longTermDeduction)} 원</b></li>
        <li><span>기본공제</span><b>${money(basicDeduction)} 원</b></li>
        <li><span>과세표준(참고)</span><b>${money(taxable)} 원</b></li>
        <li><span>기본 세액(누진세율형 참고 계산)</span><b>${money(progressiveTax)} 원</b></li>
        <li><span>특례·중과 보정세액</span><b>${money(extraTax)} 원</b></li>
        <li><span>예상 세액</span><b>${money(finalTax)} 원</b></li>
      </ul>
      <div class="result-note">
        ${warnings.length ? warnings.map(v => `• ${v}`).join('<br>') : '• 입력 조건 기준 참고용 결과입니다.'}
      </div>
    `;
    el.classList.add('show');
  };
})();
</script>
