---
layout: guide
title: "주식 손절 라인 계산법 | 퍼센트·지지선·평단가 재계산 총정리"
description: "손절가를 감이 아니라 숫자로 정하는 법. 퍼센트 기준, 지지선 기준, 물타기 후 평단가 재계산 기준까지 손절매 라인 계산법 3가지를 정리했습니다."
permalink: "/guide/stop-loss-calculation-2026/"
date: "2026-09-08"
categories: guide
---

<h1>주식 손절 라인 계산법 | 퍼센트&middot;지지선&middot;평단가 재계산 총정리</h1>
<p data-ke-size="size16"><a href="https://calculator.khaistory.com/">홈</a> &gt; <a href="https://calculator.khaistory.com/invest/">투자</a> &gt; 손절 라인 가이드</p>
<p data-ke-size="size16">투자 관리 가이드</p>
<h2 data-ke-size="size26">손절, 왜 늘 감으로만 정하게 될까</h2>
<p data-ke-size="size16">물린 종목 앞에서는 누구나 "조금만 더 버티면"이라는 생각이 먼저 듭니다. 그 순간엔 손절가가 감정의 문제가 되어버려요. 손절 라인을 미리 숫자로 정해두면 그 순간 판단할 필요 없이 기계적으로 대응할 수 있습니다.</p>
<h3 data-ke-size="size23">퍼센트 기준 손절 라인</h3>
<p data-ke-size="size16">가장 단순하고 많이 쓰는 방식이에요. 매수 평단가에서 정해둔 손실률만큼 떨어지면 무조건 매도합니다.</p>
<pre class="angelscript"><code>손절가 = 평단가 &times; (1 &minus; 손절 손실률)</code></pre>
<p data-ke-size="size16">평단가 10,000원에 손절 기준을 &minus;10%로 잡으면 손절가는 9,000원이 됩니다. 단타는 &minus;3</p>
<p><del>5%, 스윙은 &minus;7</del></p>
<p data-ke-size="size16">10%, 장기 투자는 &minus;15~20% 선에서 잡는 경우가 많지만, 이건 절대적인 정답이 아니라 본인 투자 성향과 종목 변동성에 맞춰 조정해야 할 값이에요.</p>
<p data-ke-size="size16"><b>Tip.</b> 손절 손실률을 종목의 평소 변동폭보다 너무 타이트하게 잡으면, 정상적인 등락에도 손절이 자주 걸려 오히려 손실만 쌓이는 경우가 많습니다.</p>
<h3 data-ke-size="size23">지지선 기준 손절 라인</h3>
<p data-ke-size="size16">퍼센트 기준이 평단가만 본다면, 지지선 기준은 차트상 의미 있는 가격대(전 저점, 이동평균선, 매물대)를 손절 기준으로 삼는 방식입니다.</p>
<pre class="angelscript"><code>손절가 = 직전 지지선 가격 &minus; (지지선 &times; 여유폭 1~2%)</code></pre>
<p data-ke-size="size16">지지선을 살짝 이탈했다가 회복하는 '가짜 이탈'을 걸러내기 위해 지지선보다 1~2% 낮은 지점을 손절가로 잡는 경우가 많아요. 평단가와 무관하게 차트 흐름 자체로 판단하기 때문에, 물린 상태에서도 감정 없이 기준을 세울 수 있습니다.</p>
<h3 data-ke-size="size23">물타기 후 평단가 재계산 기준</h3>
<p data-ke-size="size16">물타기를 하면 평단가가 낮아지면서 기존 손절가가 의미 없어지는 경우가 많습니다. 이때는 새 평단가부터 다시 계산해야 해요.</p>
<pre class="gcode"><code>새 평단가 = (기존 보유수량 &times; 기존 평단가 + 추가매수 수량 &times; 추가매수 단가) &divide; 총 보유수량
새 손절가 = 새 평단가 &times; (1 &minus; 손절 손실률)</code></pre>
<p data-ke-size="size16"><b>Tip.</b> 물타기로 평단가가 낮아졌다고 손절 손실률까지 같이 완화하면 안 됩니다. 손실률 기준 자체를 지키지 않으면 물타기가 손절을 미루는 핑계가 되어버립니다.</p>
<h2 data-ke-size="size26">세 가지 기준 비교</h2>
<table data-ke-align="alignLeft">
<thead>
<tr>
<th>기준</th>
<th>계산 방식</th>
<th>장점</th>
<th>단점</th>
</tr>
</thead>
<tbody>
<tr>
<td>퍼센트 기준</td>
<td>평단가 &times; (1 &minus; 손실률)</td>
<td>계산이 단순하고 기계적 적용이 쉬움</td>
<td>종목별 변동성 차이를 반영 못함</td>
</tr>
<tr>
<td>지지선 기준</td>
<td>차트상 지지선 &minus; 여유폭</td>
<td>시장 흐름을 반영한 합리적 기준</td>
<td>지지선 판단에 주관이 개입</td>
</tr>
<tr>
<td>평단가 재계산 기준</td>
<td>물타기 후 새 평단가 기준 재설정</td>
<td>추가매수를 반영해 정확한 손익 파악</td>
<td>손절 기준을 계속 미루는 함정 주의</td>
</tr>
</tbody>
</table>
<h2 data-ke-size="size26">손절 기준, 이렇게 세워두세요</h2>
<ul style="list-style-type: disc;" data-ke-list-type="disc">
<li>종목을 매수하는 순간 손절 손실률부터 먼저 정해둔다</li>
<li>물타기를 하더라도 손실률 기준은 그대로 유지한다</li>
<li>변동성이 큰 테마주는 퍼센트 기준, 오래 거래된 대형주는 지지선 기준을 병행한다</li>
<li>손절가에 도달하면 이유를 따지지 말고 우선 실행한다</li>
</ul>
<h2 data-ke-size="size26">자주 묻는 질문</h2>
<p data-ke-size="size16">손절 손실률은 몇 %가 적당한가요?</p>
<p data-ke-size="size16">정해진 정답은 없지만, 투자 기간이 짧을수록 낮은 손실률(&minus;3</p>
<p><del>5%), 길수록 높은 손실률(&minus;15</del></p>
<p data-ke-size="size16">20%)을 기준으로 잡는 경우가 일반적입니다.</p>
<p data-ke-size="size16">물타기를 하면 손절 기준도 같이 낮춰야 하나요?</p>
<p data-ke-size="size16">평단가는 물타기로 낮아지지만, 손절 손실률(퍼센트) 자체는 원래 기준을 유지하는 것이 좋습니다.</p>
<p data-ke-size="size16">지지선 기준과 퍼센트 기준 중 뭐가 더 정확한가요?</p>
<p data-ke-size="size16">둘 중 하나가 항상 우월하지는 않습니다. 변동성이 큰 테마주는 퍼센트 기준이, 오랜 기간 거래된 대형주는 지지선 기준이 더 잘 맞는 경우가 많아 종목 특성에 맞춰 병행하는 것을 추천합니다.</p>
<p data-ke-size="size16"><a href="https://calculator.khaistory.com/invest/stocks/targets/">목표가&middot;손절가 계산기로 바로 계산하기 &rarr;</a></p>
<h3 data-ke-size="size23">함께 보면 좋은 계산기</h3>
<p data-ke-size="size16"><a href="https://calculator.khaistory.com/invest/stocks/targets/">목표가&middot;손절가 계산기</a> <a href="https://calculator.khaistory.com/invest/stocks/avg-cost/">주식 평단가 계산기</a> <a href="https://calculator.khaistory.com/invest/stocks/pnl/">주식 손익 계산기</a></p>
