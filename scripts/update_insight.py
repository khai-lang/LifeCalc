import feedparser
import yaml
import datetime

QUOTES = [
    "행동은 모든 성공의 기초이다. — 파블로 피카소",
    "돈이 중요한 게 아니라, 돈을 다루는 습관이 중요하다. — 벤저민 프랭클린",
    "저축이란 소득에서 지출을 뺀 것이 아니라, 지출을 결정하기 전에 먼저 떼어두는 것이다. — 워런 버핏",
    "위험은 자신이 무엇을 하는지 모를 때 온다. — 워런 버핏",
    "가장 위험한 투자는 아무것도 하지 않는 것이다. — 필립 피셔",
    "복리는 세계 8대 불가사의다. — 알버트 아인슈타인",
    "시장에서 살아남는 자가 결국 승리한다. — 앙드레 코스톨라니",
    "돈을 버는 것보다 지키는 것이 더 어렵다.",
    "부자가 되는 가장 빠른 길은 늦게 부자가 되는 것이다. — 찰리 멍거",
    "가격은 당신이 지불하는 것이고, 가치는 당신이 얻는 것이다. — 워런 버핏",
    "예산은 숫자로 말하는 목표다.",
    "작은 지출을 조심하라. 작은 구멍이 배를 가라앉힌다. — 벤저민 프랭클린",
    "인내심은 투자자의 가장 큰 무기다.",
    "돈을 아는 것과 돈을 다스리는 것은 다르다.",
    "오늘 저축한 만원이 내일의 백만원이 된다.",
]

TIPS = [
    "대출 금리 변동기엔 중도상환수수료를 꼭 확인하세요.",
    "연말정산 전에 연금저축 세액공제 한도를 채웠는지 확인해보세요.",
    "전세 계약 전엔 등기부등본의 근저당 설정을 꼭 확인하세요.",
    "신용카드 실적은 매달 초에 미리 계산해두면 놓치지 않아요.",
    "비상금은 월 생활비의 3~6개월치를 별도 계좌에 두는 게 안전해요.",
]

def get_news(query="경제", count=3):
    url = f"https://news.google.com/rss/search?q={query}&hl=ko&gl=KR&ceid=KR:ko"
    feed = feedparser.parse(url)
    items = []
    for entry in feed.entries[:count]:
        title = entry.title
        source = ""
        if " - " in title:
            title, source = title.rsplit(" - ", 1)
        items.append({"title": title.strip(), "url": entry.link, "source": source.strip()})
    return items

def main():
    today = datetime.date.today()
    day_index = today.timetuple().tm_yday

    data = {
        "date": today.isoformat(),
        "news": get_news(),
        "quote": QUOTES[day_index % len(QUOTES)],
        "tip": TIPS[day_index % len(TIPS)],
    }

    with open("_data/insight.yml", "w", encoding="utf-8") as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False)

if __name__ == "__main__":
    main()
