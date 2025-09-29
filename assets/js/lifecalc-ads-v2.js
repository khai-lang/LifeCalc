<script>
/*
  LifeCalc – 모든 계산기 "결과 영역 앞" 애드센스 자동 삽입 (v2)
  - 전 페이지 공통 1회 include
  - 결과 DOM이 나중에 렌더되어도 자동 삽입
  - 결과 영역이 여러 개여도 섹션당 1개씩만 삽입(페이지 최대 2개)
  - 결과 박스가 제각각일 경우를 대비해: 셀렉터 + 데이터 속성 + 버튼 감지 대응
*/

/* === 반드시 수정(귀하의 값) === */
const LC_ADS = {
  client: 'ca-pub-3758454239921831',
  slot:   '7492664289',
  // 페이지 최대 삽입 수(너무 많으면 정책/UX 문제)
  maxPerPage: 2,

  // 1) 사이트에 쓰이는 결과 영역 후보 셀렉터(필요시 추가)
  resultSelectors: [
    '.result-box', '#result-box', '.calc-result', '#calc-result',
    '.result-area', '#result-area', '.result', '#result',
    '.output', '#output', '.output-box', '#output-box',
    '.result-card', '.result-container', '.result-panel',
    '.result-table', '.summary-result', '[data-role="result"]'
  ],

  // 2) (권장) 결과 영역에 직접 다는 마커 속성 – 있으면 최우선으로 사용
  // 예: <div data-ads-result="true"> … 결과 … </div>
  resultAttr: '[data-ads-result="true"]',

  // 3) 계산 버튼 후보(결과 갱신 트리거 감지용; 없어도 동작)
  calcButtonSelectors: [
    'button[type="submit"]', 'button.calculate', '#calculate', '.btn-calc',
    'button:contains("계산")', 'input[type="submit"]'
  ]
};

/* === 내부 코드 (수정 불필요) === */
(function () {
  // util: :contains polyfill용 간단 셀렉터 처리
  function qsContainsPolyfill(sel) {
    if (!sel.includes(':contains(')) return document.querySelector(sel);
    const m = sel.match(/^(.*):contains\(["']?(.*?)["']?\)$/);
    if (!m) return null;
    const baseSel = m[1] || '*';
    const txt = m[2] || '';
    const nodes = document.querySelectorAll(baseSel);
    for (const n of nodes) {
      if ((n.textContent || '').includes(txt)) return n;
    }
    return null;
  }

  function loadAdsScriptOnce() {
    if (window.__adsScriptLoaded) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(LC_ADS.client)}`;
    s.crossOrigin = 'anonymous';
    (document.head || document.body).appendChild(s);
    window.__adsScriptLoaded = true;
  }

  function makeAdBlock() {
    const wrap = document.createElement('div');
    wrap.className = 'adsense-before-result';
    wrap.style.cssText = 'margin:16px 0';

    const note = document.createElement('p');
    note.textContent = '계산 결과와 함께 참고할만한 정보 👇';
    note.style.cssText = 'margin:0 0 8px;color:#666;font-size:14px;';
    wrap.appendChild(note);

    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'block';
    ins.setAttribute('data-ad-client', LC_ADS.client);
    ins.setAttribute('data-ad-slot',   LC_ADS.slot);
    ins.setAttribute('data-ad-format', 'auto');
    ins.setAttribute('data-full-width-responsive', 'true');
    wrap.appendChild(ins);

    // 가시영역 진입 시 로드 → 속도/CLS 개선
    const trigger = () => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch(e){}
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            trigger(); obs.disconnect();
          }
        });
      }, { rootMargin: '200px 0px' });
      io.observe(ins);
    } else {
      setTimeout(trigger, 0);
    }
    return wrap;
  }

  function findResultNodes() {
    const set = new Set();

    // (1) 명시 마커 우선
    document.querySelectorAll(LC_ADS.resultAttr).forEach(n => set.add(n));

    // (2) 미리 정의한 셀렉터
    LC_ADS.resultSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(n => set.add(n));
    });

    // (3) 텍스트 휴리스틱(“결과”, “계산 결과”를 포함하는 박스형)
    document.querySelectorAll('div,section,article').forEach(n => {
      const t = (n.textContent || '').trim();
      if (t && t.length < 2000 && /결과|계산 결과|Result/i.test(t)) {
        // 너무 큰 컨테이너(페이지 전체) 방지
        const rect = n.getBoundingClientRect?.();
        if (!rect || rect.height < window.innerHeight * 0.9) set.add(n);
      }
    });

    return Array.from(set);
  }

  function alreadyHasAdBefore(node) {
    const prev = node.previousElementSibling;
    return prev && prev.classList.contains('adsense-before-result');
  }

  function injectAds() {
    if (document.body?.dataset?.adsBeforeResult === 'off') return 0;

    let inserted = 0;
    const max = LC_ADS.maxPerPage;
    const nodes = findResultNodes();

    for (const n of nodes) {
      if (inserted >= max) break;
      if (!n || alreadyHasAdBefore(n)) continue;

      // 결과와 너무 붙지 않게 안전거리
      const ad = makeAdBlock();
      n.parentNode.insertBefore(ad, n);
      inserted++;
    }
    return inserted;
  }

  function watchDom() {
    const mo = new MutationObserver(() => {
      injectAds();
    });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  function watchCalcButtons() {
    // 결과 업데이트 트리거 때도 삽입 재시도
    LC_ADS.calcButtonSelectors.forEach(sel => {
      const btn = qsContainsPolyfill(sel);
      if (btn) btn.addEventListener('click', () => setTimeout(injectAds, 50));
    });
  }

  function init() {
    loadAdsScriptOnce();
    injectAds();
    watchDom();
    watchCalcButtons();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
</script>
