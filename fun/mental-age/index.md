---
layout: default
title: 정신연령 계산기
description: 15가지 질문으로 자신의 정신연령을 확인할 수 있습니다.
permalink: fun/mental-age/
redirect_from:
  - /mental-age/
---

<h1><span class="accent">정신연령</span> 계산기</h1>

<div class="card" style="max-width:880px;margin:0 auto;">
  <p class="note">아래 15가지 문항에 대해 본인에게 가까운 정도를 선택해 주세요. (전혀 아니다 ~ 매우 그렇다)</p>

  <form id="ma-form" onsubmit="event.preventDefault(); calcMA();">
    <div id="quiz"></div>
<style>
  :root{
    --accent:#ff6010;        /* 오렌지 포인트 */
    --soft:#f5fbff;          /* 파스텔 박스 배경 */
    --line:#e7eef7;
    --text:#222;
  }
  /* 전체 기본 폰트 크게 */
  html{font-size:18px;}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,Apple SD Gothic Neo,Noto Sans KR,Arial,sans-serif;background:#fafafa;color:var(--text)}
  .container{max-width:940px;margin:38px auto;padding:0 18px}
  h2.title{color:var(--accent);margin:8px 0 22px;font-size:1.8rem;line-height:1.25}

  .card{background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 10px 24px rgba(0,0,0,.06);padding:18px 16px;margin:18px 0}
  .question-box{background:var(--soft);border:1px solid var(--line);border-radius:14px;padding:16px;margin:22px 0}

  /* 질문은 크게(22px) */
  .question-box p{
    margin:0 0 14px;
    font-weight:800;
    color:var(--accent);
    font-size:1.22rem; /* ~22px */
    line-height:1.35;
  }

  /* 선택지는 질문보다 작게(17~18px) */
  .option{
    display:flex;align-items:center;gap:12px;
    border:1px solid #e9edf3;background:#fff;border-radius:10px;
    padding:14px 16px;margin:10px 0;cursor:pointer;transition:.15s;
    font-size:1rem; /* 18px 기준 18px, 기기별 가독성 OK */
  }
  .option:hover{box-shadow:0 4px 12px rgba(0,0,0,.06)}
  .option input{transform:scale(1.15)}

  .controls{display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin:24px 0}
  .btn{background:var(--accent);border:none;color:#fff;border-radius:10px;padding:14px 18px;font-size:1rem;cursor:pointer}
  .btn.sub{background:#3b4a64}
  .btn.ghost{background:#fff;color:var(--accent);border:1px solid var(--accent)}
  .result{font-weight:900;color:var(--accent);text-align:center;font-size:1.25rem;margin:16px 0 8px}
  .explain{margin:0 auto 18px;max-width:720px;line-height:1.75;color:#444;text-align:center;font-size:1.02rem}

  .progress{height:12px;background:#edf3fa;border-radius:999px;overflow:hidden;margin:10px 0 6px}
  .progress > span{display:block;height:100%;background:var(--accent);width:0%;transition:width .25s}
  .progress-label{font-size:.85rem;color:#666;text-align:right}

  .adbox{margin:22px 0;text-align:center}
  footer{color:#667;font-size:.85rem;text-align:center;padding:24px 0 40px}

  /* 모바일 살짝 키우기 */
  @media (max-width:480px){
    html{font-size:19px;}
    .option{padding:15px 16px}
  }
</style>
</head>
<body>
<div class="container">
  <h2 class="title">나의 정신연령 테스트</h2>



  <div class="card">
    <!-- 진행도 -->
    <div class="progress"><span id="pgbar"></span></div>
    <div class="progress-label"><span id="pgtext">0 / 15</span></div>

    <form id="mentalAgeForm" onsubmit="return calcMentalAge();">
      <!-- Q1~Q15 -->
      <div class="question-box">
        <p>Q1. 주말에 주로 하는 일은?</p>
        <label class="option"><input type="radio" name="q1" value="1">집에서 쉰다</label>
        <label class="option"><input type="radio" name="q1" value="2">친구와 논다</label>
        <label class="option"><input type="radio" name="q1" value="3">새로운 취미를 한다</label>
        <label class="option"><input type="radio" name="q1" value="4">자기계발(공부/독서)</label>
      </div>

      <div class="question-box">
        <p>Q2. 좋아하는 음식은?</p>
        <label class="option"><input type="radio" name="q2" value="1">햄버거/피자</label>
        <label class="option"><input type="radio" name="q2" value="2">한식/집밥</label>
        <label class="option"><input type="radio" name="q2" value="3">건강식/샐러드</label>
        <label class="option"><input type="radio" name="q2" value="4">디저트/간식</label>
      </div>

      <div class="question-box">
        <p>Q3. 새로운 일을 시작할 때 나는?</p>
        <label class="option"><input type="radio" name="q3" value="1">바로 도전한다</label>
        <label class="option"><input type="radio" name="q3" value="2">고민하다가 해본다</label>
        <label class="option"><input type="radio" name="q3" value="3">신중하게 계획부터 세운다</label>
        <label class="option"><input type="radio" name="q3" value="4">정보를 충분히 수집한 후 실행</label>
      </div>

      <div class="question-box">
        <p>Q4. 친구와의 약속이 취소되면?</p>
        <label class="option"><input type="radio" name="q4" value="1">아쉽지만 금방 잊는다</label>
        <label class="option"><input type="radio" name="q4" value="2">혼자만의 시간을 즐긴다</label>
        <label class="option"><input type="radio" name="q4" value="3">계획이 틀어져서 속상하다</label>
        <label class="option"><input type="radio" name="q4" value="4">대체 일정을 곧바로 잡는다</label>
      </div>

      <div class="question-box">
        <p>Q5. 가장 끌리는 여행지는?</p>
        <label class="option"><input type="radio" name="q5" value="1">놀이공원/테마파크</label>
        <label class="option"><input type="radio" name="q5" value="2">유명 관광지/도시</label>
        <label class="option"><input type="radio" name="q5" value="3">자연/휴양지</label>
        <label class="option"><input type="radio" name="q5" value="4">조용한 시골/힐링</label>
      </div>

      <div class="question-box">
        <p>Q6. 아침에 일어나면 가장 먼저 하는 일은?</p>
        <label class="option"><input type="radio" name="q6" value="1">휴대폰 확인</label>
        <label class="option"><input type="radio" name="q6" value="2">물 마시기/세수</label>
        <label class="option"><input type="radio" name="q6" value="3">스트레칭/운동</label>
        <label class="option"><input type="radio" name="q6" value="4">하루 계획 점검</label>
      </div>

      <div class="question-box">
        <p>Q7. 스트레스를 받을 때 나는?</p>
        <label class="option"><input type="radio" name="q7" value="1">먹거나 잔다</label>
        <label class="option"><input type="radio" name="q7" value="2">친구에게 털어놓는다</label>
        <label class="option"><input type="radio" name="q7" value="3">혼자 조용히 생각한다</label>
        <label class="option"><input type="radio" name="q7" value="4">운동/산책으로 푼다</label>
      </div>

      <div class="question-box">
        <p>Q8. 영화/드라마 장르는?</p>
        <label class="option"><input type="radio" name="q8" value="1">코미디/로맨스</label>
        <label class="option"><input type="radio" name="q8" value="2">액션/스릴러</label>
        <label class="option"><input type="radio" name="q8" value="3">다큐/예술/힐링</label>
        <label class="option"><input type="radio" name="q8" value="4">최신 OTT 인기작</label>
      </div>

      <div class="question-box">
        <p>Q9. 평소 돈 쓰는 스타일은?</p>
        <label class="option"><input type="radio" name="q9" value="1">사고 싶은 건 바로 산다</label>
        <label class="option"><input type="radio" name="q9" value="2">고민하다 산다</label>
        <label class="option"><input type="radio" name="q9" value="3">꼭 필요할 때만 쓴다</label>
        <label class="option"><input type="radio" name="q9" value="4">예산·가치 대비 분석</label>
      </div>

      <div class="question-box">
        <p>Q10. 미래에 대한 생각은?</p>
        <label class="option"><input type="radio" name="q10" value="1">그때그때 생각한다</label>
        <label class="option"><input type="radio" name="q10" value="2">목표를 세우고 준비</label>
        <label class="option"><input type="radio" name="q10" value="3">미리 계획하고 대비</label>
        <label class="option"><input type="radio" name="q10" value="4">리스크 관리까지 챙김</label>
      </div>

      <!-- 추가 문항 -->
      <div class="question-box">
        <p>Q11. 스마트폰 사용 습관은?</p>
        <label class="option"><input type="radio" name="q11" value="1">하루 종일 붙어 있다</label>
        <label class="option"><input type="radio" name="q11" value="2">필요할 때만 본다</label>
        <label class="option"><input type="radio" name="q11" value="3">사용 시간 관리한다</label>
        <label class="option"><input type="radio" name="q11" value="4">디지털 디톡스 자주 함</label>
      </div>

      <div class="question-box">
        <p>Q12. 생일을 맞이했을 때 기분은?</p>
        <label class="option"><input type="radio" name="q12" value="1">파티하고 싶다</label>
        <label class="option"><input type="radio" name="q12" value="2">조용히 가족과 보낸다</label>
        <label class="option"><input type="radio" name="q12" value="3">특별하지 않다고 느낀다</label>
        <label class="option"><input type="radio" name="q12" value="4">지난 해를 정리·성찰한다</label>
      </div>

      <div class="question-box">
        <p>Q13. SNS 사용 태도는?</p>
        <label class="option"><input type="radio" name="q13" value="1">매일 업로드한다</label>
        <label class="option"><input type="radio" name="q13" value="2">가끔 올린다</label>
        <label class="option"><input type="radio" name="q13" value="3">눈팅 위주</label>
        <label class="option"><input type="radio" name="q13" value="4">거의 하지 않는다</label>
      </div>

      <div class="question-box">
        <p>Q14. 일에서 실패했을 때?</p>
        <label class="option"><input type="radio" name="q14" value="1">금방 털고 다시 한다</label>
        <label class="option"><input type="radio" name="q14" value="2">원인 분석 후 재도전</label>
        <label class="option"><input type="radio" name="q14" value="3">한동안 마음에 남는다</label>
        <label class="option"><input type="radio" name="q14" value="4">교훈 정리·재발 방지책</label>
      </div>

      <div class="question-box">
        <p>Q15. 선호하는 대화 스타일은?</p>
        <label class="option"><input type="radio" name="q15" value="1">유머와 농담이 많다</label>
        <label class="option"><input type="radio" name="q15" value="2">진지하고 현실적</label>
        <label class="option"><input type="radio" name="q15" value="3">철학적·깊은 이야기</label>
        <label class="option"><input type="radio" name="q15" value="4">듣는 편, 질문형</label>
      </div>

      <div class="controls">
        <button type="submit" class="btn">결과 보기</button>
        <button type="button" id="retryBtn" class="btn ghost" style="display:none" onclick="retry()">다시 하기</button>
      </div>
    </form>

    <!-- 결과 영역 -->
    <div id="result" class="result" aria-live="polite"></div>
    <div id="explain" class="explain"></div>

    <div class="controls" id="shareRow" style="display:none">
      <button class="btn sub" type="button" onclick="copyResult()">결과 복사</button>
      <a id="tw" class="btn" target="_blank" rel="noopener">트위터로 공유</a>
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
  </div>
</div>

<footer>ⓒ 2025 LifeCalc — 모든 계산은 브라우저에서만 처리되며 개인정보를 저장하지 않습니다.</footer>

<script>
const TOTAL = 15;
const pgbar = document.getElementById('pgbar');
const pgtext = document.getElementById('pgtext');

document.getElementById('mentalAgeForm').addEventListener('change', updateProgress);
function updateProgress(){
  let filled=0;
  for(let i=1;i<=TOTAL;i++){
    if(document.querySelector(`input[name="q${i}"]:checked`)) filled++;
  }
  const pct = Math.round((filled/TOTAL)*100);
  pgbar.style.width = pct+'%';
  pgtext.textContent = `${filled} / ${TOTAL}`;
}

/* 결과 계산(세분화 7단계 + 캐릭터 해설) */
function calcMentalAge(){
  let total=0, answered=0;
  for(let i=1;i<=TOTAL;i++){
    const sel=document.querySelector(`input[name="q${i}"]:checked`);
    if(sel){ total += parseInt(sel.value,10); answered++; }
  }
  if(answered<TOTAL){
    alert('모든 문항에 응답해 주세요 🙂');
    return false;
  }

  const avg = total/TOTAL; // 1.0 ~ 4.0
  let band, tag, desc;
  if(avg < 1.4){ band='10대 초중반', tag='스파클 ⚡', desc='호기심 폭발! 신상·놀이·도전이 에너지 원.'; }
  else if(avg < 1.8){ band='10대 후반~20초', tag='트렌드 메이커 🔥', desc='새로움에 강하고 실행이 빠른 타입.'; }
  else if(avg < 2.2){ band='20후~30초', tag='밸런서 🎯', desc='일·관계·재미의 균형을 잘 맞춥니다.'; }
  else if(avg < 2.5){ band='30중후반', tag='리얼리스트 🧭', desc='현실 감각이 뛰어나고 계획적입니다.'; }
  else if(avg < 2.8){ band='40대', tag='케어테이커 🏡', desc='안정·책임·내실을 중시하는 마음.'; }
  else if(avg < 3.2){ band='50대', tag='멘탈 장인 🛠️', desc='경험에서 나오는 침착함과 통찰.'; }
  else { band='60대+', tag='세이지 🌳', desc='여유와 지혜가 돋보이는 어른 멘탈.'; }

  const resultTxt = `당신의 정신연령: ${band} (${tag})`;
  document.getElementById('result').textContent = resultTxt;
  document.getElementById('explain').textContent = desc + ' 결과가 마음에 드셨다면 친구와 공유해 보세요!';
  document.getElementById('retryBtn').style.display='inline-block';

  const url = location.href;
  const tw = document.getElementById('tw');
  tw.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(resultTxt) + "&url=" + encodeURIComponent(url);
  document.getElementById('shareRow').style.display='flex';

  document.getElementById('result').scrollIntoView({behavior:'smooth',block:'center'});
  return false;
}

function retry(){
  document.getElementById('mentalAgeForm').reset();
  document.getElementById('result').textContent='';
  document.getElementById('explain').textContent='';
  document.getElementById('retryBtn').style.display='none';
  document.getElementById('shareRow').style.display='none';
  updateProgress();
}

async function copyResult(){
  const t = document.getElementById('result').textContent + ' - ' + document.getElementById('explain').textContent;
  try{
    await navigator.clipboard.writeText(t);
    alert('결과가 복사되었습니다. 친구에게 붙여넣어 공유하세요!');
  }catch(e){
    alert('복사에 실패했습니다. 브라우저 권한을 확인해 주세요.');
  }
}
</script>
</body>
</html>
