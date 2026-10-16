---
layout: post
title: 별자리·띠 찾기 2026 — 생년월일로 별자리와 12간지 띠 확인
description: 생년월일만 입력하면 12별자리와 12간지 띠(설날 기준), 만 나이, 다음 생일까지 남은 날을 바로 확인합니다. 별자리 기간표와 띠별 출생연도표 포함.
permalink: /lifeplus/fun/astro/
section: lifeplus
redirect_from:
  - /fun/astro/
---

<style>
  .as-subnav { display:flex; gap:8px; flex-wrap:wrap; margin:0 0 14px; }
  .as-subnav a { display:inline-block; padding:6px 14px; border:1px solid #b8c7d9; border-radius:999px; background:#fff; color:#0b4f7c; font-size:14px; font-weight:600; text-decoration:none; }
  .as-subnav a:hover { background:#eaf3fb; }
  .as-intro { margin:0 0 16px; line-height:1.75; font-size:15px; color:#3d4650; }
  .as-note { font-size:13px; color:#5f6b76; line-height:1.6; margin:12px 0 0; }
  .as-res { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:12px; margin-top:4px; }
  .as-rcard { display:flex; gap:14px; align-items:center; padding:14px 16px; border:1px solid #e3e8ee; border-radius:14px; background:#fff; }
  .as-big { font-size:38px; line-height:1; }
  .as-label { font-size:12px; color:#5f6b76; }
  .as-name { font-size:21px; font-weight:800; color:#1f2933; margin:2px 0; }
  .as-sub { font-size:13px; color:#3d4650; }
  .as-kw { font-size:13px; color:#0b4f7c; margin-top:3px; font-weight:600; }
  .as-stats { list-style:none; display:flex; gap:10px; flex-wrap:wrap; padding:0; margin:12px 0 0; }
  .as-stats li { background:#f1f5f9; border-radius:10px; padding:8px 12px; font-size:14px; color:#1f2933; }
  .as-years { font-size:13px; color:#3d4650; line-height:1.7; margin:12px 0 0; }
  .as-years b { color:#c2410c; }
  .as-actions { display:flex; gap:8px; flex-wrap:wrap; margin-top:14px; align-items:center; }
  .as-status { font-size:13px; color:#0b7a43; }
  .as-ad { margin:26px 0; text-align:center; min-height:100px; }
  .as-ad-label { display:block; font-size:11px; color:#8a949e; margin-bottom:4px; }
  .as-scroll { overflow-x:auto; }
  .as-table { width:100%; border-collapse:collapse; font-size:14px; }
  .as-table th, .as-table td { border:1px solid #e3e8ee; padding:8px 10px; text-align:left; vertical-align:top; color:#1f2933; }
  .as-table th { background:#f1f5f9; white-space:nowrap; }
  .as-links { display:grid; grid-template-columns:repeat(auto-fit,minmax(210px,1fr)); gap:10px; }
  .as-links a { display:block; padding:12px 14px; border:1px solid #e3e8ee; border-radius:12px; background:#fff; text-decoration:none; color:#0b4f7c; font-weight:700; }
  .as-links a span { display:block; font-weight:400; font-size:13px; color:#5f6b76; margin-top:3px; }
  .as-links a:hover { background:#eaf3fb; }
</style>

<nav class="as-subnav" aria-label="라이프+ 메뉴">
  <a href="/lifeplus/">라이프+ 허브</a>
  <a href="/lifeplus/fun/">테스트/심리</a>
  <a href="/lifeplus/fun/mental-age/">정신연령 테스트</a>
  <a href="/lifeplus/daily-data/">오늘의 데이터</a>
</nav>

<p class="as-intro">
  생년월일을 입력하면 <b>서양 12별자리</b>와 <b>12간지 띠</b>를 바로 알려드립니다.
  띠는 음력 설날 날짜를 기준으로 계산하고, 만 나이와 다음 생일까지 남은 날도 함께 보여드려요.
  결과는 재미로 보는 참고용이며, 별자리·띠에 대한 해석은 전통적인 속설입니다.
</p>

<div class="card" style="max-width:760px;margin:0 auto;">
  <form id="astro-form" style="margin-bottom:16px;">
    <label>생년월일
      <input type="date" id="ad" required>
    </label>
    <button type="submit" class="btn">확인</button>
  </form>

  <div id="astro-out" class="result-box" aria-live="polite"></div>

  <p class="as-note">
    * 띠는 <b>음력 설날(1920~2050년 표 기준)</b>로 나눕니다. 설날 이전에 태어났다면 전년도의 띠가 됩니다.
    사주명리에서 쓰는 입춘(2월 4일경) 기준과는 결과가 다를 수 있어요.<br>
    * 별자리 경계일(예: 12/22, 1/20, 3/21) 전후 출생은 연도와 출생 시각에 따라 이웃 별자리로 달라질 수 있습니다.
  </p>
</div>

<div class="as-ad">
  <span class="as-ad-label">광고</span>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>

<section class="card p">
  <h2>이렇게 계산됩니다</h2>
  <ul style="line-height:1.9;">
    <li><b>별자리</b>: 태어난 월·일이 12개 구간(황도 12궁) 중 어디에 속하는지로 정합니다.</li>
    <li><b>띠</b>: 태어난 해를 12로 나눈 나머지로 정하되, 그해 음력 설날 이전 출생이면 전해의 띠로 보정합니다.</li>
    <li><b>만 나이</b>: 올해 생일이 지났으면 (올해 − 출생연도), 지나지 않았으면 1을 뺍니다.</li>
    <li><b>다음 생일</b>: 오늘부터 다가오는 생일까지 남은 일수를 셉니다.</li>
  </ul>
</section>

<section class="card p">
  <h2>12별자리 기간표</h2>
  <div class="as-scroll">
  <table class="as-table">
    <thead><tr><th>별자리</th><th>기간(양력)</th><th>원소</th><th>대표 키워드</th></tr></thead>
    <tbody>
<tr><td>♑ 염소자리</td><td>12/22 ~ 1/19</td><td>땅</td><td>책임감·끈기·현실적</td></tr>
<tr><td>♒ 물병자리</td><td>1/20 ~ 2/18</td><td>공기</td><td>독창적·자유로움·호기심</td></tr>
<tr><td>♓ 물고기자리</td><td>2/19 ~ 3/20</td><td>물</td><td>감수성·상상력·공감</td></tr>
<tr><td>♈ 양자리</td><td>3/21 ~ 4/19</td><td>불</td><td>도전적·솔직함·추진력</td></tr>
<tr><td>♉ 황소자리</td><td>4/20 ~ 5/20</td><td>땅</td><td>안정 추구·꾸준함·감각적</td></tr>
<tr><td>♊ 쌍둥이자리</td><td>5/21 ~ 6/21</td><td>공기</td><td>재치·소통·호기심</td></tr>
<tr><td>♋ 게자리</td><td>6/22 ~ 7/22</td><td>물</td><td>배려·보호 본능·가족 중시</td></tr>
<tr><td>♌ 사자자리</td><td>7/23 ~ 8/22</td><td>불</td><td>자신감·리더십·당당함</td></tr>
<tr><td>♍ 처녀자리</td><td>8/23 ~ 9/23</td><td>땅</td><td>꼼꼼함·분석적·성실</td></tr>
<tr><td>♎ 천칭자리</td><td>9/24 ~ 10/22</td><td>공기</td><td>균형감·사교적·조화</td></tr>
<tr><td>♏ 전갈자리</td><td>10/23 ~ 11/22</td><td>물</td><td>집중력·깊이·신중함</td></tr>
<tr><td>♐ 사수자리</td><td>11/23 ~ 12/21</td><td>불</td><td>낙천적·모험심·자유</td></tr>
    </tbody>
  </table>
  </div>
</section>

<section class="card p">
  <h2>12띠와 출생연도</h2>
  <p class="as-note" style="margin-top:0;">연도는 음력 설날 이후 출생 기준입니다. 같은 해라도 설날 이전 출생이면 전해의 띠입니다.</p>
  <div class="as-scroll">
  <table class="as-table">
    <thead><tr><th>띠</th><th>출생연도(1948~2031)</th><th>대표 키워드</th></tr></thead>
    <tbody>
<tr><td>🐭 쥐띠</td><td>1948, 1960, 1972, 1984, 1996, 2008, 2020</td><td>영리함·적응력·기회 포착</td></tr>
<tr><td>🐮 소띠</td><td>1949, 1961, 1973, 1985, 1997, 2009, 2021</td><td>성실·인내·꾸준함</td></tr>
<tr><td>🐯 호랑이띠</td><td>1950, 1962, 1974, 1986, 1998, 2010, 2022</td><td>용감함·카리스마·추진력</td></tr>
<tr><td>🐰 토끼띠</td><td>1951, 1963, 1975, 1987, 1999, 2011, 2023</td><td>온화함·섬세함·신중함</td></tr>
<tr><td>🐲 용띠</td><td>1952, 1964, 1976, 1988, 2000, 2012, 2024</td><td>자신감·야망·큰 그림</td></tr>
<tr><td>🐍 뱀띠</td><td>1953, 1965, 1977, 1989, 2001, 2013, 2025</td><td>통찰력·신중함·집중력</td></tr>
<tr><td>🐴 말띠</td><td>1954, 1966, 1978, 1990, 2002, 2014, 2026</td><td>활동적·자유로움·열정</td></tr>
<tr><td>🐑 양띠</td><td>1955, 1967, 1979, 1991, 2003, 2015, 2027</td><td>온순함·예술적 감수성·배려</td></tr>
<tr><td>🐵 원숭이띠</td><td>1956, 1968, 1980, 1992, 2004, 2016, 2028</td><td>재치·호기심·임기응변</td></tr>
<tr><td>🐔 닭띠</td><td>1957, 1969, 1981, 1993, 2005, 2017, 2029</td><td>부지런함·꼼꼼함·책임감</td></tr>
<tr><td>🐶 개띠</td><td>1958, 1970, 1982, 1994, 2006, 2018, 2030</td><td>충직함·정의감·의리</td></tr>
<tr><td>🐷 돼지띠</td><td>1959, 1971, 1983, 1995, 2007, 2019, 2031</td><td>너그러움·낙천적·복스러움</td></tr>
    </tbody>
  </table>
  </div>
</section>

<div class="as-ad">
  <span class="as-ad-label">광고</span>
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-3758454239921831"
       data-ad-slot="7492664289"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
</div>

<section class="card p">
  <h2>함께 확인하면 좋은 계산기·테스트</h2>
  <div class="as-links">
    <a href="/lifeplus/fun/mental-age/">정신연령 테스트<span>15문항으로 추정 정신연령 확인</span></a>
    <a href="/life/age/">만나이 계산기<span>기준일을 바꿔 정확한 만 나이 계산</span></a>
    <a href="/life/date/">기념일·날짜 계산<span>D-day와 기념일 날짜 계산</span></a>
    <a href="/family/due-date/">출산 예정일 계산기<span>태어날 아이의 예정일과 띠 확인</span></a>
    <a href="/family/baby-days/">아이 생후 N일/개월<span>우리 아이 생후 일수 계산</span></a>
    <a href="/lifeplus/guide/">가이드 글 모아보기<span>생활 금융·세금 정보 읽기</span></a>
  </div>
</section>

<section class="np-faq">
  <h2>자주 묻는 질문</h2>
  <details>
    <summary>별자리는 어떻게 정해지나요?</summary>
    <p>태어난 날짜가 12개 별자리 구간 중 어디에 속하는지로 정합니다. 예를 들어 3월 21일부터 4월 19일까지는 양자리입니다. 경계일 전후 출생은 연도와 출생 시각에 따라 이웃 별자리로 달라질 수 있습니다.</p>
  </details>
  <details>
    <summary>띠는 양력 기준인가요, 음력 기준인가요?</summary>
    <p>이 계산기는 음력 설날을 기준으로 합니다. 설날 이전에 태어난 사람은 전해의 띠입니다. 예를 들어 2026년 설날은 2월 17일이라, 2026년 2월 16일 이전 출생은 뱀띠입니다. 사주명리에서 쓰는 입춘 기준과는 다를 수 있습니다.</p>
  </details>
  <details>
    <summary>2026년은 무슨 띠의 해인가요?</summary>
    <p>2026년은 병오년, 말띠의 해입니다. 설날(2월 17일) 이후 태어난 아이가 말띠입니다. 2027년은 양띠의 해이고, 설날은 2월 6일입니다.</p>
  </details>
  <details>
    <summary>같은 띠는 몇 살 차이가 나나요?</summary>
    <p>같은 띠는 12년마다 돌아옵니다. 그래서 같은 띠인 사람과는 12살, 24살, 36살 차이가 납니다. 위의 띠별 출생연도표에서 같은 띠의 해를 한눈에 볼 수 있습니다.</p>
  </details>
  <details>
    <summary>결과는 얼마나 정확한가요?</summary>
    <p>별자리와 띠 구간 계산은 표 기준으로 정확하게 나눕니다. 다만 별자리·띠에 붙은 성격 해석은 전통적인 속설이라 재미로 봐 주세요. 입력한 생년월일은 서버로 보내지 않고 브라우저에서만 계산합니다.</p>
  </details>
</section>

<section class="card p">
  <div class="btn-row" style="display:flex;gap:8px;flex-wrap:wrap;">
    <a class="btn ghost" href="/lifeplus/fun/">테스트/심리 모음으로</a>
    <a class="btn" href="/lifeplus/fun/mental-age/">정신연령 테스트 해보기</a>
    <a class="btn" href="/life/age/">만나이 계산하기</a>
  </div>
</section>

<script>
(function () {
  // 광고 스크립트가 아직 없을 때만 불러옵니다(중복 로드 방지).
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    var ad = document.createElement('script');
    ad.async = true;
    ad.crossOrigin = 'anonymous';
    ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3758454239921831';
    document.head.appendChild(ad);
  }

  var PAGE_URL = 'https://calculator.khaistory.com/lifeplus/fun/astro/';
  var SIGNS = [{"n": "염소자리", "s": "♑", "p": "12/22 ~ 1/19", "e": "땅", "k": "책임감·끈기·현실적"}, {"n": "물병자리", "s": "♒", "p": "1/20 ~ 2/18", "e": "공기", "k": "독창적·자유로움·호기심"}, {"n": "물고기자리", "s": "♓", "p": "2/19 ~ 3/20", "e": "물", "k": "감수성·상상력·공감"}, {"n": "양자리", "s": "♈", "p": "3/21 ~ 4/19", "e": "불", "k": "도전적·솔직함·추진력"}, {"n": "황소자리", "s": "♉", "p": "4/20 ~ 5/20", "e": "땅", "k": "안정 추구·꾸준함·감각적"}, {"n": "쌍둥이자리", "s": "♊", "p": "5/21 ~ 6/21", "e": "공기", "k": "재치·소통·호기심"}, {"n": "게자리", "s": "♋", "p": "6/22 ~ 7/22", "e": "물", "k": "배려·보호 본능·가족 중시"}, {"n": "사자자리", "s": "♌", "p": "7/23 ~ 8/22", "e": "불", "k": "자신감·리더십·당당함"}, {"n": "처녀자리", "s": "♍", "p": "8/23 ~ 9/23", "e": "땅", "k": "꼼꼼함·분석적·성실"}, {"n": "천칭자리", "s": "♎", "p": "9/24 ~ 10/22", "e": "공기", "k": "균형감·사교적·조화"}, {"n": "전갈자리", "s": "♏", "p": "10/23 ~ 11/22", "e": "물", "k": "집중력·깊이·신중함"}, {"n": "사수자리", "s": "♐", "p": "11/23 ~ 12/21", "e": "불", "k": "낙천적·모험심·자유"}];
  var ANIMALS = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];
  var EMOJI = ["🐵", "🐔", "🐶", "🐷", "🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐑"];
  var AKW = ["재치·호기심·임기응변", "부지런함·꼼꼼함·책임감", "충직함·정의감·의리", "너그러움·낙천적·복스러움", "영리함·적응력·기회 포착", "성실·인내·꾸준함", "용감함·카리스마·추진력", "온화함·섬세함·신중함", "자신감·야망·큰 그림", "통찰력·신중함·집중력", "활동적·자유로움·열정", "온순함·예술적 감수성·배려"];
  // 해마다 음력 설날의 양력 날짜(MMDD)
  var NY = {1920:220,1921:208,1922:128,1923:216,1924:205,1925:124,1926:213,1927:202,1928:123,1929:210,1930:130,1931:217,1932:206,1933:126,1934:214,1935:204,1936:124,1937:211,1938:131,1939:219,1940:208,1941:127,1942:215,1943:205,1944:125,1945:213,1946:202,1947:122,1948:210,1949:129,1950:217,1951:206,1952:127,1953:214,1954:203,1955:124,1956:212,1957:131,1958:218,1959:208,1960:128,1961:215,1962:205,1963:125,1964:213,1965:202,1966:121,1967:209,1968:130,1969:217,1970:206,1971:127,1972:215,1973:203,1974:123,1975:211,1976:131,1977:218,1978:207,1979:128,1980:216,1981:205,1982:125,1983:213,1984:202,1985:220,1986:209,1987:129,1988:217,1989:206,1990:127,1991:215,1992:204,1993:123,1994:210,1995:131,1996:219,1997:207,1998:128,1999:216,2000:205,2001:124,2002:212,2003:201,2004:122,2005:209,2006:129,2007:218,2008:207,2009:126,2010:214,2011:203,2012:123,2013:210,2014:131,2015:219,2016:208,2017:128,2018:216,2019:205,2020:125,2021:212,2022:201,2023:122,2024:210,2025:129,2026:217,2027:206,2028:126,2029:213,2030:203,2031:123,2032:211,2033:131,2034:219,2035:208,2036:128,2037:215,2038:204,2039:124,2040:212,2041:201,2042:122,2043:210,2044:130,2045:217,2046:206,2047:126,2048:214,2049:202,2050:123};
  // [시작 MMDD, SIGNS 인덱스] — 오름차순. 1/20 이전과 12/22 이후는 염소자리(0)
  var STARTS = [[120,1],[219,2],[321,3],[420,4],[521,5],[622,6],[723,7],[823,8],[924,9],[1023,10],[1123,11],[1222,0]];

  function signIdx(m, d) {
    var md = m * 100 + d, idx = 0;
    for (var i = 0; i < STARTS.length; i++) { if (md >= STARTS[i][0]) idx = STARTS[i][1]; }
    return idx;
  }

  function animalFor(y, m, d) {
    var ny = NY[y];
    var lunarYear = (ny && (m * 100 + d) < ny) ? y - 1 : y;
    return { idx: ((lunarYear % 12) + 12) % 12, lunarYear: lunarYear, before: lunarYear !== y, ny: ny };
  }

  function sameAnimalYears(idx, lunarYear) {
    var list = [];
    for (var y = 1948; y <= 2031; y++) {
      if (y % 12 === idx) list.push(y === lunarYear ? '<b>' + y + '</b>' : String(y));
    }
    return list.join(', ');
  }

  var last = null;

  function run(e) {
    if (e) e.preventDefault();
    var input = document.getElementById('ad');
    if (!input.value) return;
    var p = input.value.split('-');
    var y = +p[0], m = +p[1], d = +p[2];
    var chk = new Date(y, m - 1, d);
    if (chk.getFullYear() !== y || chk.getMonth() !== m - 1 || chk.getDate() !== d) return;

    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var out = document.getElementById('astro-out');
    out.classList.add('show');
    out.style.display = 'block';
    if (chk > today) { out.innerHTML = '오늘 이전의 날짜를 입력해 주세요.'; return; }

    var s = SIGNS[signIdx(m, d)];
    var a = animalFor(y, m, d);
    var aName = ANIMALS[a.idx];

    var age = today.getFullYear() - y;
    if ((today.getMonth() + 1) * 100 + today.getDate() < m * 100 + d) age--;
    var nb = new Date(today.getFullYear(), m - 1, d);
    if (nb < today) nb = new Date(today.getFullYear() + 1, m - 1, d);
    var dd = Math.round((nb - today) / 86400000);
    var ddText = dd === 0 ? '오늘이 생일 🎉' : 'D-' + dd;

    var note = '';
    if (a.before && a.ny) {
      note = '<p class="as-years">' + y + '년 설날은 ' + Math.floor(a.ny / 100) + '월 ' + (a.ny % 100) +
             '일이라, 그 이전에 태어나 전해(' + a.lunarYear + '년)의 띠로 계산했어요.</p>';
    }

    out.innerHTML =
      '<div class="as-res">' +
        '<div class="as-rcard"><div class="as-big">' + s.s + '</div><div>' +
          '<div class="as-label">서양 별자리</div><div class="as-name">' + s.n + '</div>' +
          '<div class="as-sub">' + s.p + ' · ' + s.e + ' 원소</div><div class="as-kw">' + s.k + '</div></div></div>' +
        '<div class="as-rcard"><div class="as-big">' + EMOJI[a.idx] + '</div><div>' +
          '<div class="as-label">12간지 띠</div><div class="as-name">' + aName + '띠</div>' +
          '<div class="as-sub">' + a.lunarYear + '년생 기준</div><div class="as-kw">' + AKW[a.idx] + '</div></div></div>' +
      '</div>' +
      '<ul class="as-stats"><li>만 나이 <b>' + age + '세</b></li><li>다음 생일까지 <b>' + ddText + '</b></li></ul>' +
      note +
      '<p class="as-years">같은 ' + aName + '띠 출생연도: ' + sameAnimalYears(a.idx, a.lunarYear) + '</p>' +
      '<div class="as-actions">' +
        '<button type="button" class="btn" id="as-share">내 결과 공유하기</button>' +
        '<a class="btn ghost" href="/lifeplus/fun/mental-age/">정신연령 테스트</a>' +
        '<a class="btn ghost" href="/life/age/">만나이 계산기</a>' +
        '<a class="btn ghost" href="/life/date/">기념일·날짜 계산</a>' +
        '<span class="as-status" id="as-status"></span>' +
      '</div>';

    last = { sign: s.n, animal: aName };
    document.getElementById('as-share').addEventListener('click', share);
  }

  function share() {
    if (!last) return;
    var text = '나는 ' + last.sign + ' · ' + last.animal + '띠! 너는 무슨 별자리·띠야?';
    var status = document.getElementById('as-status');
    function done(msg) { if (status) status.textContent = msg; }
    if (navigator.share) {
      navigator.share({ title: '별자리·띠 찾기', text: text, url: PAGE_URL }).catch(function () {});
      return;
    }
    var full = text + ' ' + PAGE_URL;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(full).then(function () { done('링크를 복사했어요!'); },
                                               function () { done('복사하지 못했어요. 주소창의 링크를 공유해 주세요.'); });
    } else {
      done('주소창의 링크를 복사해서 공유해 주세요.');
    }
  }

  var input = document.getElementById('ad');
  var t = new Date();
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  input.min = '1920-01-01';
  input.max = t.getFullYear() + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate());
  document.getElementById('astro-form').addEventListener('submit', run);

  window.AstroCalc = { signIdx: signIdx, animalFor: animalFor };
})();
</script>

<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"라이프+","item":"https://calculator.khaistory.com/lifeplus/"},
    {"@type":"ListItem","position":2,"name":"테스트/심리","item":"https://calculator.khaistory.com/lifeplus/fun/"},
    {"@type":"ListItem","position":3,"name":"별자리·띠 찾기","item":"https://calculator.khaistory.com/lifeplus/fun/astro/"}
  ]
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"WebApplication",
  "name":"별자리·띠 찾기 2026",
  "url":"https://calculator.khaistory.com/lifeplus/fun/astro/",
  "applicationCategory":"LifestyleApplication",
  "operatingSystem":"Web",
  "inLanguage":"ko-KR",
  "offers":{"@type":"Offer","price":"0","priceCurrency":"KRW"}
}
</script>
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"FAQPage",
  "mainEntity":[
    {"@type":"Question","name":"별자리는 어떻게 정해지나요?","acceptedAnswer":{"@type":"Answer","text":"태어난 날짜가 12개 별자리 구간 중 어디에 속하는지로 정합니다. 예를 들어 3월 21일부터 4월 19일까지는 양자리이며, 경계일 전후 출생은 연도와 출생 시각에 따라 달라질 수 있습니다."}},
    {"@type":"Question","name":"띠는 양력 기준인가요, 음력 기준인가요?","acceptedAnswer":{"@type":"Answer","text":"이 계산기는 음력 설날을 기준으로 하며, 설날 이전에 태어난 사람은 전해의 띠입니다. 사주명리에서 쓰는 입춘 기준과는 다를 수 있습니다."}},
    {"@type":"Question","name":"2026년은 무슨 띠의 해인가요?","acceptedAnswer":{"@type":"Answer","text":"2026년은 병오년, 말띠의 해이며 설날(2월 17일) 이후 태어난 아이가 말띠입니다."}},
    {"@type":"Question","name":"같은 띠는 몇 살 차이가 나나요?","acceptedAnswer":{"@type":"Answer","text":"같은 띠는 12년마다 돌아오므로 12살, 24살, 36살 차이가 납니다."}},
    {"@type":"Question","name":"결과는 얼마나 정확한가요?","acceptedAnswer":{"@type":"Answer","text":"별자리와 띠 구간 계산은 표 기준으로 정확하지만 성격 해석은 전통적인 속설이라 재미로 봐 주세요. 입력한 생년월일은 서버로 보내지 않습니다."}}
  ]
}
</script>
