---
layout: "guide"
title: "N일 후 날짜 계산 | 영업일·주말·공휴일 제외 방법 (2026)"
description: "N일 후 날짜 계산법을 달력일·영업일 기준으로 정리했습니다. 주말·공휴일 제외 공식, 2026년 공휴일 표, 엑셀 WORKDAY 함수, 7일·30일·100일 후 날짜 예시까지 한 번에 확인하세요."
permalink: "/guide/business-days-calculation-2026/"
date: "2026-10-07"
og_title: "N일 후 날짜 계산, 영업일·주말·공휴일 제외 방법"
og_description: "달력일과 영업일 계산 공식, 2026년 공휴일·대체공휴일 표, 엑셀 WORKDAY 함수를 정리했습니다."
categories: [guide]
---

<style>
.bdc-wrap{max-width:780px;margin:0 auto;padding:0 16px;font-family:-apple-system,BlinkMacSystemFont,"Pretendard","Malgun Gothic",sans-serif;color:#3a2c1d;line-height:1.75}
.bdc-hero{background:linear-gradient(135deg,#f8efe5,#f3e7d9);border-radius:22px;padding:36px 28px;margin:24px 0}
.bdc-badge{display:inline-block;background:#1f5c7a;color:#fff;font-size:.78rem;font-weight:700;padding:4px 10px;border-radius:20px;margin-bottom:12px}
.bdc-hero h1{font-size:1.5rem;margin:0 0 10px;color:#3f2d20}
.bdc-hero p{margin:0;color:#8c7355;font-size:.98rem}
.bdc-card{background:#fff;border:1px solid #f1eae1;border-radius:18px;padding:24px;margin:18px 0}
.bdc-card h2{font-size:1.22rem;margin-top:0;color:#3f2d20}
.bdc-card h3{border-left:4px solid #8c7355;padding-left:10px;font-size:1.03rem;margin:22px 0 10px;color:#3f2d20}
.bdc-table{width:100%;border-collapse:collapse;margin:14px 0;font-size:.9rem}
.bdc-table th,.bdc-table td{border:1px solid #eaddcd;padding:9px 10px;text-align:left}
.bdc-table th{background:#faf7f2;color:#3f2d20}
.bdc-table td strong{color:#c2410c}
.bdc-scroll{overflow-x:auto}
.bdc-tip{background:#faf7f2;border:1px solid #eaddcd;border-radius:14px;padding:16px 18px;margin:14px 0;font-size:.9rem;color:#5a4a3a}
.bdc-tip strong{color:#e96f00}
.bdc-summary{background:#faf7f2;border:1px solid #eaddcd;border-left:5px solid #e96f00;border-radius:14px;padding:16px 18px;margin:14px 0;font-size:.93rem;color:#3a2c1d}
.bdc-summary ul{margin:8px 0 0;padding-left:20px}
.bdc-summary strong{color:#c2410c}
.bdc-steps{list-style:none;margin:0;padding:0;counter-reset:bdc}
.bdc-steps li{counter-increment:bdc;padding:10px 0 10px 40px;position:relative;font-size:.93rem;border-bottom:1px solid #f1eae1}
.bdc-steps li:last-child{border-bottom:none}
.bdc-steps li::before{content:counter(bdc);position:absolute;left:0;top:10px;width:28px;height:28px;border-radius:50%;background:#e96f00;color:#fff;font-weight:700;font-size:.85rem;text-align:center;line-height:28px}
.bdc-checklist{list-style:none;margin:0;padding:0}
.bdc-checklist li{padding:8px 0 8px 28px;position:relative;font-size:.92rem;border-bottom:1px solid #f1eae1}
.bdc-checklist li:last-child{border-bottom:none}
.bdc-checklist li::before{content:"✔";position:absolute;left:0;color:#e96f00;font-weight:700}
.bdc-faq-item{padding:14px 0;border-bottom:1px solid #f1eae1}
.bdc-faq-item:last-child{border-bottom:none}
.bdc-faq-q{font-weight:700;color:#3f2d20;margin:0 0 6px}
.bdc-faq-a{color:#5b6470;font-size:.9rem;margin:0}
.bdc-cta{display:block;text-align:center;background:linear-gradient(135deg,#ff7a00,#c2410c);color:#fff!important;text-decoration:none;font-weight:700;padding:15px;border-radius:10px;margin:20px 0;box-shadow:0 4px 14px rgba(194,65,12,.25)}
.bdc-related{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}
.bdc-related a{border:1px solid #eaddcd;border-radius:20px;background:#faf7f2;color:#785a43!important;text-decoration:none;padding:8px 16px;font-size:.86rem;font-weight:600}
.bdc-ad{text-align:center;color:#5b6470;font-size:.75rem;margin:20px 0;padding:10px;border:1px dashed #eaddcd;border-radius:10px}
</style>

<div class="bdc-wrap">

<nav aria-label="breadcrumb" style="font-size:.82rem;color:#8c7355;margin-top:16px">
  <a href="/" style="color:#8c7355">홈</a> &gt; <a href="/life/date/" style="color:#8c7355">기념일·날짜 계산기</a> &gt; N일 후 날짜 계산 가이드
</nav>

<div class="bdc-hero">
  <span class="bdc-badge">2026년 공휴일·대체공휴일 반영</span>
  <h1>N일 후 날짜 계산, 영업일·주말·공휴일 제외 방법</h1>
  <p>"영업일 기준 5일"을 그냥 5일로 계산했다가 날짜가 어긋난 적 있으신가요? 달력일과 영업일의 차이, 주말·공휴일을 빼고 세는 방법을 예시로 정리했습니다.</p>
</div>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>
<!-- 계산기 광고 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3758454239921831"
     data-ad-slot="7492664289"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<div class="bdc-card">
<h2>N일 후 날짜 계산 핵심 요약</h2>
<p>"접수 후 7일 이내", "영업일 기준 5일 소요", "계약일로부터 30일 후 납부"처럼 <strong>N일 후 날짜</strong>를 계산해야 할 때가 많습니다. 같은 "N일"이어도 <strong>달력일 기준인지 영업일 기준인지</strong>에 따라 결과가 며칠씩 달라집니다.</p>
<div class="bdc-summary">
<strong>핵심 요약</strong>
<ul>
<li><strong>달력일 기준:</strong> 시작일 다음 날을 1일로 세고, 토·일·공휴일도 모두 포함합니다.</li>
<li><strong>영업일 기준:</strong> 시작일 다음 평일부터 세고, 토·일·공휴일은 건너뜁니다.</li>
<li><strong>5영업일은 보통 1주일</strong>이지만, 공휴일이 끼면 하루씩 밀립니다.</li>
<li>법적 기한·계약 기한은 문서에 <strong>"영업일"이라는 말이 있는지</strong> 먼저 확인하세요.</li>
</ul>
</div>
</div>

<div class="bdc-card">
<h2>1. 달력일과 영업일, 무엇이 다를까?</h2>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>구분</th><th>달력일</th><th>영업일(근무일)</th></tr>
<tr><td>세는 날</td><td>토·일·공휴일 포함</td><td>토·일·공휴일 제외</td></tr>
<tr><td>표기 예</td><td>"30일 이내", "7일 후"</td><td>"영업일 기준 5일", "근무일 3일"</td></tr>
<tr><td>계산 방법</td><td>시작일에 N을 단순히 더하기</td><td>쉬는 날을 건너뛰며 N번 세기</td></tr>
<tr><td>결과</td><td>비교적 이른 날짜</td><td>달력일보다 늦은 날짜</td></tr>
<tr><td>주로 쓰이는 곳</td><td>청약철회, 임금·퇴직금 지급 기한 등</td><td>택배·배송, 은행 이체, 관공서 처리, 납품 일정</td></tr>
</table>
</div>
<div class="bdc-tip"><strong>Tip.</strong> "영업일", "근무일", "평일"이라는 말이 없으면 보통 달력일로 계산하는 경우가 많습니다. 다만 계약서나 약관에서 따로 정의했다면 그 정의가 우선합니다.</div>
</div>

<div class="bdc-card">
<h2>2. 달력일 N일 후 날짜 계산법 (초일불산입)</h2>
<p>민법은 일 단위로 기간을 정할 때 <strong>기간의 첫날(초일)은 계산에 넣지 않는다</strong>고 정하고 있습니다(민법 제157조). "오늘부터 7일"이라면 오늘은 0일이고 내일이 1일째입니다.</p>
<div class="bdc-tip" style="text-align:center;font-family:monospace;font-size:1rem">종료일 = 시작일 + N일</div>
<p><strong>예시:</strong> 2026년 10월 6일(화) + 30일 = <strong>2026년 11월 5일(목)</strong></p>
<ul>
<li><strong>만료 시점:</strong> 일 단위 기간은 마지막 날이 끝나는 시점(24시)에 만료됩니다(민법 제159조).</li>
<li><strong>말일이 휴일이면:</strong> 기간의 마지막 날이 토요일이나 공휴일이면 그다음 날에 만료되는 것이 민법의 원칙입니다(민법 제161조).</li>
<li><strong>개월 단위:</strong> 날짜 수가 아니라 달력상 같은 날짜로 계산합니다. 예를 들어 1월 15일의 1개월 후는 2월 15일입니다.</li>
</ul>
</div>

<div class="bdc-card">
<h2>계산기로 달력일 N일 후 날짜 바로 구하기</h2>
<p>달력일 기준 N일 후·N일 전 날짜는 직접 세지 않아도 <a href="/life/date/" style="color:#c2410c;font-weight:700">기념일·날짜 계산기</a>의 <strong>날짜 더하기·빼기</strong> 탭에서 바로 구할 수 있습니다.</p>
<ol class="bdc-steps">
<li><strong>기준일</strong>에 시작하는 날짜를 선택합니다.</li>
<li><strong>일수</strong>에 N을 입력합니다.</li>
<li><strong>계산</strong>에서 더하기(+) 또는 빼기(-)를 고릅니다. N일 후는 더하기, N일 전은 빼기입니다.</li>
<li><strong>계산하기</strong>를 누르면 결과 날짜와 요일, 오늘까지 D-Day가 표시됩니다.</li>
</ol>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>입력</th><th>결과</th></tr>
<tr><td>기준일 2026-10-07 + 50일</td><td><strong>2026.11.26(목)</strong></td></tr>
</table>
</div>
<div class="bdc-tip"><strong>주의.</strong> 이 계산기는 토·일·공휴일을 포함하는 <strong>달력일 기준</strong>입니다. "영업일 기준 N일"은 아래 3번 방법과 4번 빠른 계산표, 5번 공휴일 표를 이용해 계산하세요.</div>
</div>

<div class="bdc-ad"><!-- AdSense 삽입 위치 (slot 7492664289) --></div>

<div class="bdc-card">
<h2>3. 영업일 계산법: 주말·공휴일 제외 3단계</h2>
<ol class="bdc-steps">
<li><strong>시작일은 세지 않습니다.</strong> 다음 날부터 1일째입니다.</li>
<li><strong>토·일·공휴일은 건너뜁니다.</strong> 대체공휴일과 임시공휴일도 포함합니다.</li>
<li><strong>N번째 평일이 종료일입니다.</strong></li>
</ol>

<h3>빠른 계산 요령 (주 5일 기준)</h3>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>영업일 수</th><th>공휴일이 없을 때 종료일</th></tr>
<tr><td>5영업일</td><td>다음 주 같은 요일</td></tr>
<tr><td>10영업일</td><td>2주 후 같은 요일</td></tr>
<tr><td>15영업일</td><td>3주 후 같은 요일</td></tr>
<tr><td>20영업일</td><td>4주 후 같은 요일</td></tr>
</table>
</div>
<div class="bdc-tip"><strong>공식.</strong> N영업일 = (N ÷ 5)주 후 같은 요일로 먼저 구한 뒤, 그 사이에 낀 공휴일 수만큼 뒤로 미루면 됩니다.</div>

<h3>실전 예시: 2026년 10월 6일(화) 시작, 10영업일 후</h3>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>영업일</th><th>날짜</th><th>비고</th></tr>
<tr><td>1</td><td>10월 7일(수)</td><td></td></tr>
<tr><td>2</td><td>10월 8일(목)</td><td></td></tr>
<tr><td>(제외)</td><td>10월 9일(금)</td><td>한글날</td></tr>
<tr><td>3</td><td>10월 12일(월)</td><td></td></tr>
<tr><td>4~5</td><td>10월 13일~14일</td><td></td></tr>
<tr><td>6~7</td><td>10월 15일~16일</td><td></td></tr>
<tr><td>8~10</td><td>10월 19일~21일</td><td><strong>10영업일 = 10월 21일(수)</strong></td></tr>
</table>
</div>
<p>공휴일을 몰랐다면 10월 20일(화)로 계산했을 텐데, 한글날 하루 때문에 <strong>하루 뒤인 10월 21일</strong>이 됩니다.</p>
</div>

<div class="bdc-card">
<h2>4. 자주 찾는 N일 후·영업일 후 날짜 빠른 계산표</h2>
<p>시작일을 <strong>2026년 10월 6일(화)</strong>로 잡은 예시입니다. 시작일이 다르면 결과도 달라지니, 본인의 시작일에 맞춰 같은 방식으로 계산하세요.</p>

<h3>달력일 기준 (주말·공휴일 포함)</h3>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>기간</th><th>종료일</th></tr>
<tr><td>7일 후</td><td>2026년 10월 13일(화)</td></tr>
<tr><td>14일 후</td><td>2026년 10월 20일(화)</td></tr>
<tr><td>30일 후</td><td>2026년 11월 5일(목)</td></tr>
<tr><td>60일 후</td><td>2026년 12월 5일(토)</td></tr>
<tr><td>90일 후</td><td>2027년 1월 4일(월)</td></tr>
<tr><td>100일 후</td><td>2027년 1월 14일(목)</td></tr>
</table>
</div>

<h3>영업일 기준 (토·일·공휴일 제외, 한글날 반영)</h3>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>기간</th><th>종료일</th></tr>
<tr><td>3영업일 후</td><td>2026년 10월 12일(월)</td></tr>
<tr><td>5영업일 후</td><td>2026년 10월 14일(수)</td></tr>
<tr><td>7영업일 후</td><td>2026년 10월 16일(금)</td></tr>
<tr><td>10영업일 후</td><td>2026년 10월 21일(수)</td></tr>
<tr><td>20영업일 후</td><td>2026년 11월 4일(수)</td></tr>
<tr><td>30영업일 후</td><td>2026년 11월 18일(수)</td></tr>
</table>
</div>
<div class="bdc-tip"><strong>Tip.</strong> 같은 "30일"이어도 달력일은 11월 5일, 영업일은 11월 18일로 <strong>약 2주 차이</strong>가 납니다.</div>
</div>

<div class="bdc-ad"><!-- AdSense 삽입 위치 (slot 7492664289) --></div>

<div class="bdc-card">
<h2>5. 2026년 공휴일·대체공휴일 표</h2>
<p>영업일 계산에서 제외해야 하는 2026년 휴일입니다. 대체공휴일은 공휴일이 토·일요일 또는 다른 공휴일과 겹칠 때 그다음 평일을 쉬는 날로 지정하는 제도입니다.</p>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>날짜</th><th>공휴일</th><th>비고</th></tr>
<tr><td>1월 1일(목)</td><td>신정</td><td>대체공휴일 적용 안 됨</td></tr>
<tr><td>2월 16일(월)~18일(수)</td><td>설날 연휴</td><td>설날은 2월 17일</td></tr>
<tr><td>3월 1일(일) → 3월 2일(월)</td><td>삼일절</td><td>3월 2일 대체공휴일</td></tr>
<tr><td>5월 5일(화)</td><td>어린이날</td><td></td></tr>
<tr><td>5월 24일(일) → 5월 25일(월)</td><td>부처님오신날</td><td>5월 25일 대체공휴일</td></tr>
<tr><td>6월 3일(수)</td><td>전국동시지방선거일</td><td>선거일 휴무</td></tr>
<tr><td>6월 6일(토)</td><td>현충일</td><td>대체공휴일 적용 안 됨</td></tr>
<tr><td>7월 17일(금)</td><td>제헌절</td><td>2026년부터 공휴일 재지정</td></tr>
<tr><td>8월 15일(토) → 8월 17일(월)</td><td>광복절</td><td>8월 17일 대체공휴일</td></tr>
<tr><td>9월 24일(목)~26일(토)</td><td>추석 연휴</td><td>추석은 9월 25일</td></tr>
<tr><td>10월 3일(토) → 10월 5일(월)</td><td>개천절</td><td>10월 5일 대체공휴일</td></tr>
<tr><td>10월 9일(금)</td><td>한글날</td><td></td></tr>
<tr><td>12월 25일(금)</td><td>성탄절</td><td></td></tr>
</table>
</div>
<div class="bdc-tip"><strong>주의.</strong> 현충일과 신정처럼 토요일이어도 대체공휴일이 생기지 않는 날이 있습니다. 5월 1일 노동절(근로자의 날)은 기관·사업장마다 운영이 다르므로 해당 기관 안내를 확인하세요. 임시공휴일이 새로 지정될 수 있어 중요한 일정은 계산 전에 최신 공고를 확인하는 것이 안전합니다.</div>
</div>

<div class="bdc-card">
<h2>6. 상황별로 달라지는 "영업일" 기준</h2>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>상황</th><th>일반적인 기준</th><th>확인할 점</th></tr>
<tr><td>은행·증권</td><td>토·일·공휴일 제외</td><td>휴장일은 별도 공지</td></tr>
<tr><td>관공서·민원</td><td>토·일·공휴일 제외</td><td>법정 처리기한 규정 확인</td></tr>
<tr><td>택배·배송</td><td>주말·공휴일 제외 (업체별 상이)</td><td>토요일 배송 가능 여부</td></tr>
<tr><td>계약서·약관</td><td>계약서의 정의를 따름</td><td>토요일 포함 여부 명시</td></tr>
<tr><td>근로·급여</td><td>달력일 기준인 경우가 많음</td><td>예: 퇴직금은 퇴직 후 14일 이내 지급</td></tr>
</table>
</div>
<p>세금 신고, 청약철회, 임금·퇴직금 지급 같은 <strong>법에서 정한 기한</strong>은 규정마다 달력일인지 영업일인지가 다르므로, 해당 법령이나 기관 안내를 먼저 확인해야 합니다.</p>
</div>

<div class="bdc-ad"><!-- AdSense 삽입 위치 (slot 7492664289) --></div>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831"
     crossorigin="anonymous"></script>
<!-- 계산기 광고 -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3758454239921831"
     data-ad-slot="7492664289"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<div class="bdc-card">
<h2>7. 엑셀·구글시트로 영업일 계산하기</h2>
<p>반복해서 계산한다면 함수가 편합니다.</p>
<div class="bdc-scroll">
<table class="bdc-table">
<tr><th>목적</th><th>함수</th></tr>
<tr><td>N영업일 후 날짜</td><td><code>=WORKDAY(시작일, N, 공휴일범위)</code></td></tr>
<tr><td>두 날짜 사이 영업일 수</td><td><code>=NETWORKDAYS(시작일, 종료일, 공휴일범위)</code></td></tr>
<tr><td>달력일 N일 후 날짜</td><td><code>=시작일+N</code></td></tr>
<tr><td>토·일 외 다른 휴무 요일 지정</td><td><code>=WORKDAY.INTL(시작일, N, 주말코드, 공휴일범위)</code></td></tr>
</table>
</div>
<div class="bdc-tip"><strong>Tip.</strong> 공휴일 범위에는 위 2026년 공휴일 표의 날짜(대체공휴일 포함)를 한 열에 입력해 지정하세요. 공휴일을 입력하지 않으면 <strong>주말만 제외</strong>하고 계산됩니다.</div>
</div>

<div class="bdc-card">
<h2>8. 계산 전 체크리스트</h2>
<ul class="bdc-checklist">
<li>문서에 "영업일·근무일"이라는 표현이 있는지 확인 (없으면 달력일)</li>
<li>시작일을 세는지 여부 확인 (일반적으로 시작일 다음 날이 1일째)</li>
<li>토요일을 영업일로 보는지 계약서·약관에서 확인</li>
<li>대체공휴일과 임시공휴일까지 쉬는 날로 제외했는지 점검</li>
<li>마지막 날이 주말이면 다음 평일로 넘어가는 규정이 있는지 확인</li>
<li>월 단위 기간은 30일이 아니라 달력상 같은 날짜로 계산</li>
</ul>
</div>

<div class="bdc-card">
<h2>자주 묻는 질문</h2>
<div class="bdc-faq-item"><p class="bdc-faq-q">N일 후 날짜는 어떻게 계산하나요?</p><p class="bdc-faq-a">달력일 기준이면 시작일에 N을 더하면 됩니다. 시작일 당일은 세지 않으므로 오늘이 화요일일 때 7일 후는 다음 주 화요일입니다.</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">영업일 기준 5일은 일주일인가요?</p><p class="bdc-faq-a">주 5일 기준으로 공휴일이 없다면 5영업일이 정확히 일주일입니다. 중간에 공휴일이 끼면 하루씩 늦어집니다.</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">"영업일 기준 3일"이면 월요일에 접수한 건은 언제 끝나나요?</p><p class="bdc-faq-a">접수일은 세지 않고 다음 영업일부터 3번 셉니다. 월요일 접수라면 화·수·목이므로 목요일이 3영업일째입니다(공휴일이 없는 경우).</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">100일 후는 몇 월 며칠인가요?</p><p class="bdc-faq-a">시작일에 100일을 더하면 됩니다. 이 글의 예시 기준(2026년 10월 6일)이라면 2027년 1월 14일입니다. 기념일 계산은 시작일을 1일째로 보는 경우도 있어 용도에 따라 하루 차이가 날 수 있습니다.</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">토요일은 영업일인가요?</p><p class="bdc-faq-a">은행·관공서·일반 회사는 토요일을 영업일에서 제외하는 경우가 대부분입니다. 택배나 일부 서비스업은 토요일에도 운영하므로 약관의 정의를 따르세요.</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">기간 마지막 날이 주말이면 기한이 연장되나요?</p><p class="bdc-faq-a">민법상 기간의 마지막 날이 토요일이나 공휴일이면 그다음 날로 만료되는 것이 원칙입니다. 다만 개별 법령이나 계약에서 다르게 정한 경우가 있으니 해당 규정을 확인해야 합니다.</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">임시공휴일이 생기면 영업일 계산이 바뀌나요?</p><p class="bdc-faq-a">임시공휴일도 쉬는 날이므로 영업일에서 제외해야 합니다. 정부 공고가 나오면 공휴일 표에 추가해 다시 계산하세요.</p></div>
<div class="bdc-faq-item"><p class="bdc-faq-q">날짜 계산기에서 영업일도 계산되나요?</p><p class="bdc-faq-a">기념일·날짜 계산기의 날짜 더하기·빼기는 토·일·공휴일을 포함하는 달력일 기준입니다. 영업일 기준 날짜는 이 글의 계산 방법과 2026년 공휴일 표로 계산하거나 엑셀 WORKDAY 함수를 사용하세요.</p></div>
</div>

<a class="bdc-cta" href="/life/date/">달력일 N일 후 날짜, 계산기로 바로 확인하기 →</a>

<div class="bdc-card">
<h3 style="margin-top:0">함께 보면 좋은 계산기·가이드</h3>
<div class="bdc-related">
<a href="/life/date/">기념일·날짜 계산기</a>
<a href="/life/age/">만나이 계산기</a>
<a href="/guide/man-age/">만나이 계산법 완전정리</a>
<a href="/life/unit-converter/">단위 변환 계산기</a>
</div>
</div>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type": "Question", "name": "N일 후 날짜는 어떻게 계산하나요?", "acceptedAnswer": {"@type": "Answer", "text": "달력일 기준이면 시작일에 N을 더하면 됩니다. 시작일 당일은 세지 않으므로 오늘이 화요일일 때 7일 후는 다음 주 화요일입니다."}},
    {"@type": "Question", "name": "영업일 기준 5일은 일주일인가요?", "acceptedAnswer": {"@type": "Answer", "text": "주 5일 기준으로 공휴일이 없다면 5영업일이 정확히 일주일입니다. 중간에 공휴일이 끼면 하루씩 늦어집니다."}},
    {"@type": "Question", "name": "\"영업일 기준 3일\"이면 월요일에 접수한 건은 언제 끝나나요?", "acceptedAnswer": {"@type": "Answer", "text": "접수일은 세지 않고 다음 영업일부터 3번 셉니다. 월요일 접수라면 화·수·목이므로 목요일이 3영업일째입니다(공휴일이 없는 경우)."}},
    {"@type": "Question", "name": "100일 후는 몇 월 며칠인가요?", "acceptedAnswer": {"@type": "Answer", "text": "시작일에 100일을 더하면 됩니다. 기념일 계산은 시작일을 1일째로 보는 경우도 있어 용도에 따라 하루 차이가 날 수 있습니다."}},
    {"@type": "Question", "name": "토요일은 영업일인가요?", "acceptedAnswer": {"@type": "Answer", "text": "은행·관공서·일반 회사는 토요일을 영업일에서 제외하는 경우가 대부분입니다. 택배나 일부 서비스업은 토요일에도 운영하므로 약관의 정의를 따르세요."}},
    {"@type": "Question", "name": "기간 마지막 날이 주말이면 기한이 연장되나요?", "acceptedAnswer": {"@type": "Answer", "text": "민법상 기간의 마지막 날이 토요일이나 공휴일이면 그다음 날로 만료되는 것이 원칙입니다. 다만 개별 법령이나 계약에서 다르게 정한 경우가 있으니 해당 규정을 확인해야 합니다."}},
    {"@type": "Question", "name": "임시공휴일이 생기면 영업일 계산이 바뀌나요?", "acceptedAnswer": {"@type": "Answer", "text": "임시공휴일도 쉬는 날이므로 영업일에서 제외해야 합니다. 정부 공고가 나오면 공휴일 표에 추가해 다시 계산하세요."}},
    {"@type": "Question", "name": "날짜 계산기에서 영업일도 계산되나요?", "acceptedAnswer": {"@type": "Answer", "text": "기념일·날짜 계산기의 날짜 더하기·빼기는 토·일·공휴일을 포함하는 달력일 기준입니다. 영업일 기준 날짜는 이 글의 계산 방법과 2026년 공휴일 표로 계산하거나 엑셀 WORKDAY 함수를 사용하세요."}}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "기념일·날짜 계산기", "item": "https://calculator.khaistory.com/life/date/"},
    {"@type": "ListItem", "position": 3, "name": "N일 후 날짜 계산 가이드", "item": "https://calculator.khaistory.com/guide/business-days-calculation-2026/"}
  ]
}
</script>
