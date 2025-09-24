<script>
// 페이지 섹션 판별 (레이아웃에서 주입, 없으면 경로로)
(function(){
  if (!window.PAGE_SECTION){
    var path = location.pathname.replace(/index\.html$/,'');
    var seg = (path.split('/').filter(Boolean)[0]) || 'home';
    window.PAGE_SECTION = seg;
  }
})();

// 섹션별 프로모 데이터
window.PROMOS_BY_SECTION = {
  home: [
    {desc:"몸무게·운동량 기준으로 하루 권장 수분을 계산해 보세요.", href:"/health/water-intake/", cta:"물 섭취량 계산"},
    {desc:"전세↔월세 전환 계산기로 총비용을 빠르게 비교하세요.", href:"/realestate/rent-to-jeonse/", cta:"전세↔월세 계산"},
    {desc:"대출 원리금·이자를 한눈에 비교하세요.", href:"/finance/loan/", cta:"대출 계산기"},
    {desc:"코인 실수익률과 손익분기점 확인", href:"/crypto/profit/", cta:"코인 수익률"},
    {desc:"자동차 보험료를 연령·차종별로 추정", href:"/insurance/auto/", cta:"자동차 보험료"}
  ],
  life: [
    {desc:"D+N, 요일, 윤년/평년까지 한 번에 계산!", href:"/life/date/", cta:"날짜 계산"},
    {desc:"법정 만나이·국내식 나이 차이 즉시 확인", href:"/life/age/", cta:"만나이 계산"},
    {desc:"출산 예정일과 아이 생후 N일 간편 계산", href:"/family/due-date/", cta:"출산·육아 계산"}
  ],
  finance: [
    {desc:"대출 원리금/이자 비교", href:"/finance/loan/", cta:"대출 계산기"},
    {desc:"연봉을 시급으로 환산", href:"/finance/salary-hourly/", cta:"연봉→시급"}
  ],
  realestate: [
    {desc:"전세↔월세 전환율 바로 계산", href:"/realestate/rent-to-jeonse/", cta:"전세↔월세"},
    {desc:"부동산 양도세 손쉽게 추정", href:"/realestate/capital-gains/", cta:"양도세"},
    {desc:"주택 취득세 자동 계산", href:"/realestate/acquisition-tax/", cta:"취득세"},
    {desc:"종부세 추정", href:"/realestate/property-tax/", cta:"종부세"}
  ],
  health: [
    {desc:"기초대사량으로 하루 칼로리 소모량", href:"/health/bmr/", cta:"BMR"},
    {desc:"몸무게·활동량으로 적정 수분 섭취", href:"/health/water-intake/", cta:"물 섭취량"},
    {desc:"BMI 지수와 범위 해석", href:"/health/bmi/", cta:"BMI"}
  ],
  crypto: [
    {desc:"매수가·수수료 반영 실수익률", href:"/crypto/profit/", cta:"수익률"},
    {desc:"분할매수 평단가와 손익", href:"/crypto/dca/", cta:"DCA"},
    {desc:"APR↔APY 복리 변환", href:"/crypto/apy/", cta:"APR↔APY"},
    {desc:"LP 비영구적 손실 추정", href:"/crypto/impermanent-loss/", cta:"IL"}
  ],
  insurance: [
    {desc:"자동차 보험료 추정(연령·차종)", href:"/insurance/auto/", cta:"자동차 보험료"},
    {desc:"실손 자기부담금 계산", href:"/insurance/health/", cta:"실손"},
    {desc:"가족 필요 보장액 계산", href:"/insurance/life/", cta:"보장액"},
    {desc:"연금보험 예상 수령액", href:"/insurance/annuity/", cta:"연금 수령액"}
  ],
  fun: [
    {desc:"15문항으로 멘탈 나이 확인", href:"/fun/mental-age/", cta:"테스트 시작"},
    {desc:"생일로 별자리·띠 보기", href:"/fun/astro/", cta:"확인하기"}
  ],
  guide: [
    {desc:"계산 공식과 해석 모음", href:"/guide/", cta:"가이드 보기"},
    {desc:"전세 전환율 공식 정리", href:"/guide/rent-to-jeonse-rate/", cta:"전환율 공식"}
  ]
};
</script>
