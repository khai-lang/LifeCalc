<script>
/* 섹션별 프로모 데이터 (nav.html과 경로 통일) */
window.PROMOS_BY_SECTION = {
  home: [
    {desc:"몸무게·활동량 기반 하루 권장 수분 섭취량", href:"/health/water-intake/", cta:"물 섭취량 계산"},
    {desc:"전세↔월세 전환 비용 간편 비교", href:"/realestate/rent-to-jeonse/", cta:"전세↔월세 계산"},
    {desc:"대출 원리금·이자 한눈에 비교", href:"/finance/loan/", cta:"대출 계산기"},
    {desc:"연봉 대비 실수령액 즉시 확인", href:"/finance/net-pay/", cta:"연봉 실수령"},
    {desc:"주식/코인 수익·손실 계산", href:"/invest/stocks/pnl/", cta:"수익률 계산"}
  ],

  /* 생활 계산기 */
  life: [
    {desc:"D+N, 요일, 윤년/평년까지 한 번에", href:"/life/date/", cta:"날짜 계산"},
    {desc:"법정 만나이·국내식 나이 차이 확인", href:"/life/age/", cta:"만나이 계산"},
    {desc:"단위 변환(길이·무게·온도 등)", href:"/life/unit-converter/", cta:"단위 변환"},
    {desc:"출산 예정일/생후 N일·개월/백일", href:"/family/due-date/", cta:"출산·육아"}
  ],

  /* 급여·소득 (salary) */
  finance: [
    {desc:"급여·세금 허브(빠른 길잡이)", href:"/salary/", cta:"허브 보기"},
    {desc:"연봉 실수령액 계산", href:"/salary/net-pay/", cta:"실수령 계산"},
    {desc:"4대보험 부담액 계산", href:"/salary/insurances/", cta:"4대보험"},
    {desc:"원천징수세액 계산", href:"/salary/withholding/", cta:"원천징수"},
    {desc:"종합소득세 계산", href:"/salary/income-tax/", cta:"종소세"},
    {desc:"사업자 종합소득세 계산", href:"/finance/biz-income-tax/", cta:"사업자 종소세"},
    {desc:"퇴직금 계산", href:"salary/retiremesalarynt/", cta:"퇴직금"},
    {desc:"연금저축(세액공제) 효과", href:"/salary/pension-savings/", cta:"연금저축"}
  ],

  /* 부동산·세금 (대출/DSR 포함) */
  realestate: [
    {desc:"전세↔월세 전환 계산", href:"/realestate/rent-to-jeonse/", cta:"전세↔월세"},
    {desc:"취득세 자동 계산", href:"/realestate/acquisition-tax/", cta:"취득세"},
    {desc:"양도소득세 추정", href:"/realestate/capital-gains/", cta:"양도세"},
    {desc:"종합부동산세 추정", href:"/realestate/property-tax/", cta:"종부세"},
    {desc:"주택담보/일반 대출 이자·원리금", href:"/finance/loan/", cta:"대출 이자"},
    {desc:"총부채원리금상환비율", href:"/finance/dsr/", cta:"DSR"}
  ],

  /* 건강 계산기 */
  health: [
    {desc:"기초대사량(BMR)으로 하루 소모 칼로리", href:"/health/bmr/", cta:"BMR"},
    {desc:"몸무게·활동량 기준 적정 수분 섭취", href:"/health/water-intake/", cta:"물 섭취량"},
    {desc:"BMI 지수와 범위 해석", href:"/health/bmi/", cta:"BMI"}
  ],

  /* 투자 계산기 (주식·코인 통합) */
  invest: [
    {desc:"코인 수익/손실 계산", href:"/invest/crypto/pnl/", cta:"코인 수익"},
    {desc:"코인 평단가 계산", href:"/invest/crypto/avg-cost/", cta:"코인 평단가"},
    {desc:"코인 분할매수(DCA)", href:"/invest/crypto/dca/", cta:"코인 DCA"},
    {desc:"주식 수익/손실 계산", href:"/invest/stocks/pnl/", cta:"주식 수익"},
    {desc:"주식 평단가 계산", href:"/invest/stocks/avg-cost/", cta:"주식 평단가"},
    {desc:"목표가·손절가 설정", href:"/invest/stocks/targets/", cta:"목표/손절"},
    {desc:"배당수익률 계산", href:"/invest/stocks/dividend-yield/", cta:"배당수익률"}
  ],

  /* 보험 계산기 */
  insurance: [
    {desc:"자동차보험 할인·특약 추정", href:"/insurance/auto-discount/", cta:"자동차 할인"},
    {desc:"자동차보험 등급 추정", href:"/insurance/auto-grade/", cta:"등급 추정"},
    {desc:"실손보험 자기부담금", href:"/insurance/health-copay/", cta:"실손 부담"},
    {desc:"운전자보험 담보 가이드", href:"/insurance/driver-coverage/", cta:"운전자담보"},
    {desc:"여행자보험 보험료 추정", href:"/insurance/travel/", cta:"여행자보험"}
  ],

  /* 가이드 */
  guide: [
    {desc:"계산 공식/해석 모음", href:"/guide/", cta:"가이드"},
    {desc:"전세 전환율 공식 정리", href:"/guide/rent-to-jeonse-rate/", cta:"전환율 공식"},
    {desc:"BMI 범위 해석", href:"/guide/bmi-range/", cta:"BMI 해석"}
  ]
};
</script>
