---
id: long-weekends-optimize
title: Optimize Leave
description: Get the most efficient leave strategies to maximize consecutive days off.
sidebar_position: 8
---

# Optimize Leave

`GET /api/v1/long-weekends/optimize`

Get the most efficient leave strategies to maximize consecutive days off. Returns up to 20 strategies sorted by efficiency ratio (highest first).

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `country` | string | No | `ID` | Country code: `ID` or `MY` |
| `year` | number | **Yes** | — | Year to optimize for. Range: `2020–2030` |
| `max_leave` | number | No | `3` | Maximum leave days to use. Range: `0–14` |

## Response

**`data`** `array` — Array of leave strategy objects, sorted by `ratio` descending.

| Field | Type | Description |
|-------|------|-------------|
| `leaveDates` | array | Dates to take as leave (`YYYY-MM-DD`) |
| `leaveDaysUsed` | number | Number of leave days used |
| `totalDaysOff` | number | Total consecutive days off achieved |
| `ratio` | number | Efficiency: `totalDaysOff / leaveDaysUsed`. Higher is better |
| `period.startDate` | string | Start of the resulting long weekend |
| `period.endDate` | string | End of the resulting long weekend |
| `period.totalDays` | number | Total days in the period |

## Request

```bash
curl "https://kalend.id/api/v1/long-weekends/optimize?country=ID&year=2026&max_leave=3" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": [
    {
      "leaveDates": ["2026-05-21", "2026-05-25"],
      "leaveDaysUsed": 2,
      "totalDaysOff": 7,
      "ratio": 3.5,
      "period": {
        "startDate": "2026-05-21",
        "endDate": "2026-05-27",
        "totalDays": 7
      }
    }
  ],
  "meta": { "country": "ID", "year": 2026, "maxLeave": 3 }
}
```
