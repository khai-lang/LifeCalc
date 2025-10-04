<script>
/* 섹션별 프로모 데이터 (nav.html과 경로 통일) */
window.PROMOS_BY_SECTION = {
  home: [
    {desc:"몸무게·활동량 기반 하루 권장 수분 섭취량", href:"{{ '/health/water-intake/'        | relative_url }}", cta:"물 섭취량 계산"},
    {desc:"전세↔월세 전환 비용 간편 비교",              href:"{{ '/realestate/rent-to-jeonse/'   | relative_url }}", cta:"전세↔월세 계산"},
    {desc:"대출 원리금·이자 한눈에 비교",               href:"{{ '/finance/loan/'               | relative_url }}", cta:"대출 계산기"},
    {desc:"연봉 대비 실수령액 즉시 확인",               href:"{{ '/salary/net-pay/'             | relative_url }}", cta:"연봉 실수령"},
    {desc:"주식/코인 수익·손실 계산",                   href:"{{ '/invest/stocks/pnl/'          | relative_url }}", cta:"수익률 계산"}
  ],

  /* 생활 계산기 */
  life: [
    {desc:"D+N, 요일, 윤년/평년까지 한 번에",           href:"{{ '/life/date/'                  | relative_url }}", cta:"날짜 계산"},
    {desc:"법정 만나이·국내식 나이 차이 확인",          href:"{{ '/life/age/'                   | relative_url }}", cta:"만나이 계산"},
    {desc:"단위 변환(길이·무게·온도 등)",               href:"{{ '/life/unit-converter/'        | relative_url }}", cta:"단위 변환"},
    {desc:"출산 예정일/생후 N일·개월/백일",             href:"{{ '/family/due-date/'            | relative_url }}", cta:"출산·육아"}
  ],

  /* 급여·소득 (섹션 키는 salary로 통일) */
  salary: [
    {desc:"급여·세금 허브(빠른 길잡이)",               href:"{{ '/salary/'                     | relative_url }}", cta:"허브 보기"},
    {desc:"연봉 실수령액 계산",                         href:"{{ '/salary/net-pay/'             | relative_url }}", cta:"실수령 계산"},
    {desc:"4대보험 부담액 계산",                         href:"{{ '/salary/insurances/'          | relative_url }}", cta:"4대보험"},
    {desc:"원천징수세액 계산",                           href:"{{ '/salary/withholding/'         | relative_url }}", cta:"원천징수"},
    {desc:"종합소득세 계산",                             href:"{{ '/salary/income-tax/'          | relative_url }}", cta:"종소세"},
    {desc:"사업자 종합소득세 계산",                      href:"{{ '/salary/biz-income-tax/'      | relative_url }}", cta:"사업자 종소세"},
    {desc:"퇴직금 계산",                                 href:"{{ '/salary/retirement/'          | relative_url }}", cta:"퇴직금"},
    {desc:"연금저축(세액공제) 효과",                     href:"{{ '/salary/pension-savings/'     | relative_url }}", cta:"연금저축"}
  ],

  /* 부동산·세금 (대출/DSR도 프로모 노출 가능) */
  realestate: [
    {desc:"전세↔월세 전환 계산",                         href:"{{ '/realestate/rent-to-jeonse/'  | relative_url }}", cta:"전세↔월세"},
    {desc:"취득세 자동 계산",                            href:"{{ '/realestate/acquisition-tax/' | relative_url }}", cta:"취득세"},
    {desc:"양도소득세 추정",                             href:"{{ '/realestate/capital-gains/'   | relative_url }}", cta:"양도세"},
    {desc:"종합부동산세 추정",                           href:"{{ '/realestate/property-tax/'    | relative_url }}", cta:"종부세"},
    {desc:"주택담보/일반 대출 이자·원리금",               href:"{{ '/finance/loan/'               | relative_url }}", cta:"대출 이자"},
    {desc:"총부채원리금상환비율",                         href:"{{ '/finance/dsr/'                | relative_url }}", cta:"DSR"}
  ],

  /* 건강 계산기 */
  health: [
    {desc:"기초대사량(BMR)으로 하루 소모 칼로리",        href:"{{ '/health/bmr/'                 | relative_url }}", cta:"BMR"},
    {desc:"몸무게·활동량 기준 적정 수분 섭취",           href:"{{ '/health/water-intake/'        | relative_url }}", cta:"물 섭취량"},
    {desc:"BMI 지수와 범위 해석",                         href:"{{ '/health/bmi/'                 | relative_url }}", cta:"BMI"}
  ],

  /* 투자 계산기 (주식·코인 통합) */
  invest: [
    {desc:"코인 수익/손실 계산",                         href:"{{ '/invest/crypto/pnl/'          | relative_url }}", cta:"코인 수익"},
    {desc:"코인 평단가 계산",                             href:"{{ '/invest/crypto/avg-cost/'     | relative_url }}", cta:"코인 평단가"},
    {desc:"코인 분할매수(DCA)",                           href:"{{ '/invest/crypto/dca/'          | relative_url }}", cta:"코인 DCA"},
    {desc:"주식 수익/손실 계산",                          href:"{{ '/invest/stocks/pnl/'          | relative_url }}", cta:"주식 수익"},
    {desc:"주식 평단가 계산",                              href:"{{ '/invest/stocks/avg-cost/'     | relative_url }}", cta:"주식 평단가"},
    {desc:"목표가·손절가 설정",                            href:"{{ '/invest/stocks/targets/'      | relative_url }}", cta:"목표/손절"},
    {desc:"배당수익률 계산",                               href:"{{ '/invest/stocks/dividend-yield/' | relative_url }}", cta:"배당수익률"}
  ],

  /* 보험 계산기 */
  insurance: [
    {desc:"자동차보험 할인·특약 추정",                    href:"{{ '/insurance/auto-discount/'    | relative_url }}", cta:"자동차 할인"},
    {desc:"자동차보험 등급 추정",                          href:"{{ '/insurance/auto-grade/'       | relative_url }}", cta:"등급 추정"},
    {desc:"실손보험 자기부담금",                           href:"{{ '/insurance/health-copay/'     | relative_url }}", cta:"실손 부담"},
    {desc:"운전자보험 담보 가이드",                        href:"{{ '/insurance/driver-coverage/'  | relative_url }}", cta:"운전자담보"},
    {desc:"여행자보험 보험료 추정",                        href:"{{ '/insurance/travel/'           | relative_url }}", cta:"여행자보험"}
  ],

  /* 라이프플러스 (다른 섹션과 동일하게 '배열'로 구성) */
  lifeplus: [
    {desc:"정신연령 테스트",                 href:"{{ '/lifeplus/fun/mental-age/' | relative_url }}", cta:"테스트하기"},
    {desc:"별자리·띠 찾기",                  href:"{{ '/lifeplus/fun/astro/'      | relative_url }}", cta:"찾아보기"},
    {desc:"테스트/심리 모음",                href:"{{ '/lifeplus/fun/'            | relative_url }}", cta:"둘러보기"},
    {desc:"환율·금시세·날씨 요약",           href:"{{ '/lifeplus/daily-data/'     | relative_url }}", cta:"바로 보기"},
    {desc:"경제 뉴스 요약 & 오늘의 명언",     href:"{{ '/lifeplus/insight/'        | relative_url }}", cta:"읽기"},
    {desc:"30일 챌린지 시작하기",            href:"{{ '/lifeplus/challenge/'      | relative_url }}", cta:"참여하기"},
    {desc:"가이드 글 모음(블로그형)",        href:"{{ '/lifeplus/guide/'          | relative_url }}", cta:"가이드"}
  ]
};
</script>
