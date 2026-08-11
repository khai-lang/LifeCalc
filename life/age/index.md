---
layout: default
title: "만나이 계산기 | 세는나이·연나이 비교, 띠, 생일 D-day까지"
description: "생년월일과 기준일로 만 나이를 계산하고, 세는나이·연나이와 한눈에 비교합니다. 만 나이 통일법 근거, 띠, 다음 생일까지 남은 날짜(D-day)도 함께 확인하세요."
permalink: life/age/
redirect_from:
  - 만나이-정의/
  - 한국식-나이와-차이/
  - 계산-예시/
  - 법률-상-나이-규정/
  - definition/
  - korean-age/
  - example/
  - law/
---

<p style="color:#5c4a38;line-height:1.7;margin-bottom:16px">
생년월일과 기준일을 입력하면 <strong>만 나이</strong>는 물론, 한국에서 흔히 헷갈리는
<strong>세는나이(한국 나이)</strong>, <strong>연나이</strong>까지 한 번에 비교할 수 있습니다.
2023년 6월 28일부터 시행된 '만 나이 통일법'의 정확한 기준을 반영했습니다.
</p>

<!-- 🔸 계산기 폼 -->
<form id="age-form" onsubmit="event.preventDefault(); calcAge();" class="card" style="margin-bottom:20px;">
  <label>생년월일
    <input type="date" id="dob" required>
  </label>
  <label>기준일
    <input type="date" id="ref" required>
  </label>
  <button type="submit" class="btn" style="margin-top:12px;">계산하기</button>
</form>

<!-- 🔸 결과 박스 -->
<div id="age-out" class="result-box"></div>

<style>
#age-out.result-box{
  min-height:220px;
  padding:32px 28px;
  border-radius:20px;
  background:linear-gradient(135deg,#fff 0%,#e6d8c9 140%);
  border:1px solid #e3d4c5;
  box-shadow:0 4px 18px rgba(19,41,61,.06);
}
#age-out.result-box:not(.show){display:none}
.age-headline{text-align:center;margin-bottom:22px}
.age-headline .age-headline-label{color:#8c7355;font-size:1rem;font-weight:600;margin-bottom:6px}
.age-headline .age-headline-value{font-size:3.2rem;font-weight:800;color:#e96f00;line-height:1.1}
.age-headline .age-headline-value span{font-size:1.6rem;color:#3a2c1d;font-weight:700;margin-left:4px}
.age-compare{width:100%;border-collapse:collapse;margin-top:8px;font-size:1rem;background:#fff;border-radius:14px;overflow:hidden}
.age-compare th,.age-compare td{border:1px solid #e3d4c5;padding:14px 12px;text-align:center}
.age-compare th{background:#174d68;color:#fff;font-weight:700}
.age-compare tr:nth-child(2) td{background:#fff4e8}
.age-compare td.age-main{font-weight:800;color:#c2410c;font-size:1.3rem}
.age-meta{display:flex;gap:14px;flex-wrap:wrap;margin-top:20px}
.age-meta span{flex:1;min-width:200px;background:#cfdfe8;border:1px solid #1f5c7a;border-radius:14px;padding:14px 16px;text-align:center;color:#13293d;font-size:1.02rem;font-weight:600}
.age-meta span strong{display:block;font-size:1.35rem;color:#174d68;margin-top:4px}
.age-table{width:100%;border-collapse:collapse;margin:12px 0;font-size:.95rem}
.age-table th,.age-table td{border:1px solid #e3d4c5;padding:10px 11px;text-align:center}
.age-table th{background:#174d68;color:#fff}
.age-table tr:nth-child(even) td{background:#faf3ea}
.age-faq details{border:1px solid #e3d4c5;border-radius:12px;padding:14px 16px;margin-bottom:10px;background:#fff}
.age-faq summary{font-weight:700;color:#13293d;cursor:pointer}
.age-faq p{margin:10px 0 0;color:#5b6470;line-height:1.6}
.age-source{font-size:.8rem;color:#8c7355;margin-top:18px}
#age-form.card{padding:26px}
#age-form label{display:block;font-weight:600;color:#3a2c1d;margin-bottom:14px}
#age-form input[type="date"]{width:100%;box-sizing:border-box;padding:12px 14px;border:1px solid #e3d4c5;border-radius:10px;font-size:1.05rem;margin-top:6px;background:#fff;color:#13293d}
#age-form input[type="date"]:focus{outline:none;border-color:#ff7a00}
#age-form .btn{background:linear-gradient(135deg,#ff7a00,#e96f00);color:#fff;border:none;border-radius:12px;padding:15px 22px;font-size:1.08rem;font-weight:700;cursor:pointer;width:100%}
#age-form .btn:hover{background:linear-gradient(135deg,#e96f00,#c2410c)}
.card#definition, .card#korean-age-diff, .card#example, .card#law{border:1px solid #e3d4c5;border-left:4px solid #1f5c7a}
.card#definition h3, .card#korean-age-diff h3, .card#example h3, .card#law h3{color:#13293d}
.age-faq{border-left:4px solid #785a43}
.age-source{color:#5b6470}
a{color:#1f5c7a}
a:hover{color:#174d68}
</style>

<script>
(function () {
  // 페이지 로드 시 기준일 기본값 = 오늘
  const refEl = document.getElementById("ref");
  if (!refEl.value) {
    const t = new Date();
    const yyyy = t.getFullYear();
    const mm = String(t.getMonth() + 1).padStart(2, "0");
    const dd = String(t.getDate()).padStart(2, "0");
    refEl.value = `${yyyy}-${mm}-${dd}`;
  }
})();

var ZODIAC = ["쥐","소","호랑이","토끼","용","뱀","말","양","원숭이","닭","개","돼지"];

function calcAge() {
  const dobEl = document.getElementById("dob");
  const refEl = document.getElementById("ref");
  const out = document.getElementById("age-out");
  const dob = new Date(dobEl.value);
  const ref = new Date(refEl.value);

  // 🧩 잘못된 날짜 입력 방지
  if (isNaN(dob) || isNaN(ref)) {
    out.classList.add("show");
    out.innerHTML = "⚠️ 날짜를 정확히 선택해주세요.";
    return;
  }
  if (dob > ref) {
    out.classList.add("show");
    out.innerHTML = "⚠️ 기준일은 생년월일보다 뒤여야 합니다.";
    return;
  }

  // 🔸 만 나이 계산
  let manAge = ref.getFullYear() - dob.getFullYear();
  const m = ref.getMonth() - dob.getMonth();
  const hadBirthday = !(m < 0 || (m === 0 && ref.getDate() < dob.getDate()));
  if (!hadBirthday) manAge--;

  // 🔸 세는나이 (한국식 나이) = 기준연도 - 출생연도 + 1
  const countingAge = ref.getFullYear() - dob.getFullYear() + 1;

  // 🔸 연나이 (병역법·청소년보호법 등에서 쓰는 방식) = 기준연도 - 출생연도
  const yearAge = ref.getFullYear() - dob.getFullYear();

  // 🔸 띠 (양력 출생연도 기준 근사치)
  const zodiacIdx = (((dob.getFullYear() - 2020) % 12) + 12) % 12;
  const zodiac = ZODIAC[zodiacIdx];

  // 🔸 다음 생일까지 D-day
  let nextBirthday = new Date(ref.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday < ref) {
    nextBirthday = new Date(ref.getFullYear() + 1, dob.getMonth(), dob.getDate());
  }
  const oneDay = 24 * 60 * 60 * 1000;
  const dday = Math.round((nextBirthday - ref) / oneDay);

  // 🟧 출력
  out.classList.add("show");
  out.innerHTML = `
    <div class="age-headline">
      <div class="age-headline-label">📅 만 나이</div>
      <div class="age-headline-value">${manAge.toLocaleString()}<span>세</span></div>
    </div>
    <table class="age-compare">
      <tr><th>구분</th><th>나이</th><th>비고</th></tr>
      <tr><td>만 나이</td><td class="age-main">${manAge}세</td><td>법적 표준 (생일 기준)</td></tr>
      <tr><td>세는나이(한국 나이)</td><td>${countingAge}세</td><td>출생 시 1세, 매년 1/1 증가</td></tr>
      <tr><td>연나이</td><td>${yearAge}세</td><td>병역법·청소년보호법 등에서 사용</td></tr>
    </table>
    <div class="age-meta">
      <span>🐭 띠<strong>${zodiac}띠</strong></span>
      <span>🎂 다음 생일까지<strong>${dday === 0 ? "오늘!" : "D-" + dday}</strong></span>
    </div>
  `;
}
</script>

<h2> 만 나이 계산 공식 </h2>
`만 나이 = 기준연도 − 출생연도 (단, 기준일이 생일 전이면 1 빼기)`

<br><br>

<!-- 광고 -->
<div class="ad-box">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="1398373115"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>
</div>

<div class="card" id="definition" style="margin-top:20px">

<h3> 만 나이란 무엇인가요? </h3>

만 나이는 태어난 날을 0세로 시작해, <strong>생일이 지날 때마다 한 살씩 늘어나는</strong> 국제 표준 나이 계산법입니다. 대한민국은 2023년 6월 28일 시행된 '만 나이 통일법'(행정기본법 제7조의2 신설, 민법 제158조 개정)을 통해 법령·계약서·공문서에 표시되는 나이를 원칙적으로 만 나이로 해석하도록 명확히 했습니다.

</div>

<div class="card" id="korean-age-diff" style="margin-top:16px">

<h3> 세는나이·연나이와 어떻게 다른가요? </h3>

<table class="age-table">
<tr><th>구분</th><th>계산 방식</th><th>특징</th></tr>
<tr><td>만 나이</td><td>생일 기준으로 매년 1살 증가</td><td>법적 표준, 병원·공문서 기준</td></tr>
<tr><td>세는나이(한국 나이)</td><td>출생 시 1세, 이후 1월 1일마다 1살 증가</td><td>일상 대화에서 관습적으로 사용</td></tr>
<tr><td>연나이</td><td>기준연도 − 출생연도 (생일 무관)</td><td>병역법, 청소년보호법 등 일부 법령에서 사용</td></tr>
</table>

세는나이는 생일과 무관하게 매년 1월 1일에 한 살씩 늘어나기 때문에, 12월에 태어난 아기는 태어난 지 며칠 만에 세는나이로 2살이 되기도 합니다. 연나이는 생일을 따지지 않고 '해당 연도 − 출생 연도'로만 계산해, 행정 처리가 잦은 병역·청소년 관련 법령에서 여전히 쓰이고 있습니다.

</div>

<div class="card" id="example" style="margin-top:16px">

<h3> 계산 예시 </h3>

2002년 12월 31일에 태어난 사람을 2026년 8월 10일 기준으로 계산하면 다음과 같습니다.

<table class="age-table">
<tr><th>구분</th><th>나이</th></tr>
<tr><td>만 나이</td><td>23세 (생일이 지났으므로 2026−2002=24세가 아니라 23세)</td></tr>
<tr><td>세는나이</td><td>25세 (2026−2002+1)</td></tr>
<tr><td>연나이</td><td>24세 (2026−2002)</td></tr>
</table>

같은 사람이라도 어떤 나이 기준을 쓰느냐에 따라 최대 2살까지 차이가 날 수 있다는 점을 확인할 수 있습니다.

</div>

<div class="card" id="law" style="margin-top:16px">

<h3> 만 나이 통일법과 예외 규정 </h3>

만 나이 통일법 시행 이후에도 아래 항목은 예외적으로 <strong>연나이</strong> 등 기존 방식을 그대로 유지합니다.

- 초·중등교육법상 취학 연령 (만 6세가 된 다음 해 3월 1일 입학)
- 청소년보호법상 술·담배 구매 가능 연령
- 공무원 임용시험 응시 연령
- 병역법상 병역의무 이행 연령 (병역 대상자 통보를 연 단위로 일괄 처리하기 위함)

이 항목들은 애초에 법 조문에서 '연 나이'를 특정 연도 기준으로 이미 명시하고 있었기 때문에, 만 나이 통일법 개정 대상에서 제외되었습니다.

<p class="age-source">근거: 행정기본법 제7조의2, 민법 제158조(2023년 개정), 법제처 '만 나이 통일법' 시행 브리핑(2023.6.).</p>

</div>

<div class="card age-faq" style="margin-top:16px">

<h3> 자주 묻는 질문 (FAQ)</h3>

<details>
<summary>Q. 만 나이 통일법 시행 이후 실제로 달라진 점이 있나요?</summary>
<p>법령·계약서·공문서에 별도 표기가 없다면 나이를 만 나이로 해석한다는 원칙이 명확해졌습니다. 다만 만 나이 자체는 1960년대부터 법적 기준으로 사용돼 왔기 때문에, 병원 진료나 계약 등에서 실질적인 나이 계산법이 바뀐 것은 아닙니다.</p>
</details>

<details>
<summary>Q. 왜 12월생은 세는나이가 유독 빨리 느나요?</summary>
<p>세는나이는 생일과 무관하게 1월 1일마다 한 살씩 늘어나기 때문입니다. 12월 31일에 태어난 아기도 다음 날인 1월 1일이 되면 세는나이로 2살이 됩니다.</p>
</details>

<details>
<summary>Q. 띠는 어떻게 계산하나요?</summary>
<p>이 계산기는 양력 출생연도를 기준으로 띠를 근사 계산합니다. 음력 설(입춘 전후) 이전에 태어난 경우 전통적인 띠와 하루이틀 차이가 날 수 있어, 정확한 음력 기준 띠가 필요하다면 만세력을 참고하는 것이 좋습니다.</p>
</details>

<details>
<summary>Q. 병역법이나 청소년보호법에서는 왜 아직도 연나이를 쓰나요?</summary>
<p>병역 대상자 통보나 청소년 유해물건 판매 단속처럼 대규모 인원을 연 단위로 일괄 처리해야 하는 행정 업무는, 개인별 생일을 일일이 따지는 것보다 '해당 연도 기준 나이'로 처리하는 것이 효율적이기 때문에 예외로 유지되고 있습니다.</p>
</details>

</div>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "홈", "item": "https://calculator.khaistory.com/"},
    {"@type": "ListItem", "position": 2, "name": "만나이 계산기", "item": "https://calculator.khaistory.com/life/age/"}
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "만 나이 통일법 시행 이후 실제로 달라진 점이 있나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "법령·계약서·공문서에 별도 표기가 없다면 나이를 만 나이로 해석한다는 원칙이 명확해졌습니다. 만 나이 자체는 1960년대부터 법적 기준으로 사용돼 왔습니다."}
    },
    {
      "@type": "Question",
      "name": "왜 12월생은 세는나이가 유독 빨리 느나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "세는나이는 생일과 무관하게 1월 1일마다 한 살씩 늘어나기 때문에, 12월 31일생도 다음 날 세는나이로 2살이 됩니다."}
    },
    {
      "@type": "Question",
      "name": "띠는 어떻게 계산하나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "양력 출생연도를 기준으로 근사 계산하며, 음력 설 이전 출생자는 전통적인 띠와 차이가 날 수 있습니다."}
    },
    {
      "@type": "Question",
      "name": "병역법이나 청소년보호법에서는 왜 아직도 연나이를 쓰나요?",
      "acceptedAnswer": {"@type": "Answer", "text": "대규모 인원을 연 단위로 일괄 처리해야 하는 행정 업무 특성상 예외로 유지되고 있습니다."}
    }
  ]
}
</script>
