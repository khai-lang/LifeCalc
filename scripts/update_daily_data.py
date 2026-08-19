import requests
import yaml
import datetime
import os

RATES_PATH = "_data/rates.yml"

def get_rates():
    res = requests.get("https://open.er-api.com/v6/latest/KRW", timeout=10)
    res.raise_for_status()
    rates = res.json()["rates"]

    codes = {"USD": 1, "EUR": 1, "CNY": 1, "JPY": 100, "GBP": 1,
             "AUD": 1, "CAD": 1, "SGD": 1, "HKD": 1}

    result = {}
    for code, unit in codes.items():
        krw_per_unit = unit / rates[code]
        result[code] = round(krw_per_unit, 2)
    return result

def get_weather():
    url = ("https://api.open-meteo.com/v1/forecast"
           "?latitude=37.5665&longitude=126.9780"
           "&daily=temperature_2m_max,temperature_2m_min"
           "&timezone=Asia%2FSeoul&forecast_days=2")
    res = requests.get(url, timeout=10)
    res.raise_for_status()
    d = res.json()["daily"]
    return {
        "today_min": d["temperature_2m_min"][0],
        "today_max": d["temperature_2m_max"][0],
        "tomorrow_min": d["temperature_2m_min"][1],
        "tomorrow_max": d["temperature_2m_max"][1],
    }

def load_previous_fx():
    if not os.path.exists(RATES_PATH):
        return {}
    with open(RATES_PATH, "r", encoding="utf-8") as f:
        old = yaml.safe_load(f) or {}
    return old.get("fx", {})

def build_fx_with_change(new_fx, prev_fx):
    result = {}
    for code, value in new_fx.items():
        prev = prev_fx.get(code)
        change = None
        change_pct = None
        direction = "flat"
        if prev:
            change = round(value - prev, 2)
            change_pct = round((change / prev) * 100, 2)
            if change > 0:
                direction = "up"
            elif change < 0:
                direction = "down"
        result[code] = {
            "value": value,
            "change": change,
            "change_pct": change_pct,
            "direction": direction,
        }
    return result

def main():
    prev_fx = load_previous_fx()
    prev_fx_values = {k: v["value"] if isinstance(v, dict) else v for k, v in prev_fx.items()}

    new_fx = get_rates()
    fx_with_change = build_fx_with_change(new_fx, prev_fx_values)

    usd = fx_with_change.get("USD", {})
    comment = "환전 전 확인해보세요."
    if usd.get("direction") == "up":
        comment = f"어제보다 원화가 약세예요. 해외직구·여행 환전은 서두르는 게 유리할 수 있어요."
    elif usd.get("direction") == "down":
        comment = f"어제보다 원화가 강세예요. 환전하기엔 오늘이 좀 더 유리할 수 있어요."

    data = {
        "date": datetime.date.today().isoformat(),
        "fx": fx_with_change,
        "weather": get_weather(),
        "comment": comment,
    }
    os.makedirs("_data", exist_ok=True)
    with open(RATES_PATH, "w", encoding="utf-8") as f:
        yaml.dump(data, f, allow_unicode=True, default_flow_style=False)

if __name__ == "__main__":
    main()
