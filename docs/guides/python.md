---
id: python
title: Python Integration
description: Use the Kalend API in a Python application.
sidebar_position: 2
---

# Python Integration

## Setup

No external SDK required — use the built-in `urllib` or the popular `requests` library.

```bash
pip install requests
```

Store your API key as an environment variable:

```bash
export KALEND_API_KEY="kld_your_api_key"
```

## Basic Client

```python title="kalend.py"
import os
import requests

BASE_URL = "https://kalend.id/api/v1"
API_KEY = os.environ["KALEND_API_KEY"]

HEADERS = {"Authorization": f"Bearer {API_KEY}"}


def get(path: str, params: dict = None):
    url = f"{BASE_URL}{path}"
    response = requests.get(url, headers=HEADERS, params=params)
    response.raise_for_status()
    return response.json()
```

## Fetching Holidays

```python
from kalend import get

result = get("/holidays", {"country": "ID", "year": 2026})

for holiday in result["data"]:
    print(f"{holiday['date']} — {holiday['name']}")
```

Output:

```
2026-01-01 — Tahun Baru
2026-02-17 — Isra Mi'raj
...
```

## Checking a Date

```python
result = get("/check", {"date": "2026-05-01", "country": "ID"})
data = result["data"]

print(f"Date      : {data['date']}")
print(f"Is holiday: {data['isHoliday']}")
print(f"Is weekend: {data['isWeekend']}")
print(f"Is workday: {data['isWorkday']}")
```

## Counting Workdays

```python
result = get("/calculate/workdays", {
    "start": "2026-01-01",
    "end": "2026-01-31",
    "country": "ID",
})

print(f"Workdays: {result['data']['workdays']}")  # 20
```

## Long Weekend Optimizer

```python
result = get("/long-weekends/optimize", {
    "country": "ID",
    "year": 2026,
    "max_leave": 3,
})

for strategy in result["data"]:
    leaves = ", ".join(strategy["leaveDates"])
    total = strategy["totalDaysOff"]
    ratio = strategy["ratio"]
    print(f"Take leave on: {leaves} → {total} days off (ratio {ratio})")
```

## Error Handling

```python
from requests.exceptions import HTTPError

try:
    result = get("/holidays", {"country": "ID", "year": 2026})
except HTTPError as e:
    if e.response.status_code == 401:
        print("Invalid or missing API key.")
    elif e.response.status_code == 429:
        print("Rate limit exceeded. Try again tomorrow.")
    else:
        print(f"API error: {e.response.status_code}")
```

## Async with httpx

For async code (FastAPI, asyncio):

```bash
pip install httpx
```

```python
import os
import httpx

BASE_URL = "https://kalend.id/api/v1"
HEADERS = {"Authorization": f"Bearer {os.environ['KALEND_API_KEY']}"}


async def get_holidays(year: int, country: str = "ID"):
    async with httpx.AsyncClient() as client:
        r = await client.get(
            f"{BASE_URL}/holidays",
            headers=HEADERS,
            params={"year": year, "country": country},
        )
        r.raise_for_status()
        return r.json()
```

## Caching with `functools.lru_cache`

Holiday data rarely changes — cache responses in memory:

```python
from functools import lru_cache
from kalend import get

@lru_cache(maxsize=32)
def holidays(year: int, country: str = "ID"):
    return get("/holidays", {"year": year, "country": country})["data"]
```

For long-running services, use `cachetools` with a TTL:

```bash
pip install cachetools
```

```python
from cachetools import cached, TTLCache

@cached(cache=TTLCache(maxsize=32, ttl=86400))
def holidays(year: int, country: str = "ID"):
    return get("/holidays", {"year": year, "country": country})["data"]
```
