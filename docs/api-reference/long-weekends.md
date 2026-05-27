---
id: long-weekends
title: Long Weekends
description: List all long weekend periods for a given year and country.
sidebar_position: 7
---

# Long Weekends

`GET /api/v1/long-weekends`

List all long weekend periods for a given year and country.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `country` | string | No | `ID` | Country code: `ID` or `MY` |
| `year` | number | **Yes** | — | Year to fetch. Range: `2020–2030` |
| `min_days` | number | No | `3` | Minimum consecutive days off to include |

## Response

**`data`** `array` — Array of long weekend period objects.

| Field | Type | Description |
|-------|------|-------------|
| `startDate` | string | First day of the period (`YYYY-MM-DD`) |
| `endDate` | string | Last day of the period (`YYYY-MM-DD`) |
| `totalDays` | number | Total consecutive days off |
| `holidays` | array | National holidays in this period |
| `jointLeaves` | array | Joint leave days in this period |
| `days` | array | Day-by-day breakdown: `{ date, type }` where type is `holiday` \| `joint-leave` \| `weekend` \| `workday` |

**`meta`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Total periods found |
| `country` | string | Country code used |
| `year` | number | Year used |
| `minDays` | number | Minimum days filter used |

## Request

```bash
curl "https://kalend.id/api/v1/long-weekends?country=ID&year=2026&min_days=4" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": [
    {
      "startDate": "2026-05-21",
      "endDate": "2026-05-25",
      "totalDays": 5,
      "holidays": [{ "name": "Hari Waisak", "date": "2026-05-22" }],
      "jointLeaves": [],
      "days": [
        { "date": "2026-05-21", "type": "workday" },
        { "date": "2026-05-22", "type": "holiday" },
        { "date": "2026-05-23", "type": "weekend" },
        { "date": "2026-05-24", "type": "weekend" },
        { "date": "2026-05-25", "type": "workday" }
      ]
    }
  ],
  "meta": { "total": 1, "country": "ID", "year": 2026, "minDays": 4 }
}
```
