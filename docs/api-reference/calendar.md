---
id: calendar
title: Monthly Calendar
description: Get complete calendar data for a specific month, with holiday and workday status for each day.
sidebar_position: 9
---

# Monthly Calendar

`GET /api/v1/calendar`

Get complete calendar data for a specific month, with holiday and workday status for each day.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `country` | string | No | `ID` | Country code: `ID` or `MY` |
| `year` | number | **Yes** | — | Year. Range: `2020–2030` |
| `month` | number | **Yes** | — | Month (1–12) |

## Response

**`data`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `year` | number | Year |
| `month` | number | Month |
| `country` | string | Country code |
| `days` | array | Array of day objects (see below) |

**`data.days[]`** — Day object fields:

| Field | Type | Description |
|-------|------|-------------|
| `date` | string | Date in `YYYY-MM-DD` |
| `dayOfWeek` | number | Day of week: `0` (Sunday) – `6` (Saturday) |
| `isWeekend` | boolean | True if Saturday or Sunday |
| `isHoliday` | boolean | True if national holiday |
| `isJointLeave` | boolean | True if joint leave (cuti bersama) |
| `isWorkday` | boolean | True if regular working day |
| `holidays` | array | Holidays on this day: `[{ name, type }]` |

**`meta`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `totalDays` | number | Total days in the month |
| `holidays` | number | Number of national holidays in the month |

## Request

```bash
curl "https://kalend.id/api/v1/calendar?country=ID&year=2026&month=1" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": {
    "year": 2026,
    "month": 1,
    "country": "ID",
    "days": [
      {
        "date": "2026-01-01",
        "dayOfWeek": 4,
        "isWeekend": false,
        "isHoliday": true,
        "isJointLeave": false,
        "isWorkday": false,
        "holidays": [
          { "name": "Tahun Baru Masehi", "type": "national" }
        ]
      },
      {
        "date": "2026-01-02",
        "dayOfWeek": 5,
        "isWeekend": false,
        "isHoliday": false,
        "isJointLeave": false,
        "isWorkday": true,
        "holidays": []
      }
    ]
  },
  "meta": { "totalDays": 31, "holidays": 1 }
}
```
