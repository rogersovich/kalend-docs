---
id: calculate-workdays
title: Calculate Workdays
description: Count the number of working days between two dates, excluding weekends and public holidays.
sidebar_position: 5
---

# Calculate Workdays

`GET /api/v1/calculate/workdays`

Count working days between two dates, excluding weekends and public holidays.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `start` | string | **Yes** | — | Start date in `YYYY-MM-DD` format |
| `end` | string | **Yes** | — | End date in `YYYY-MM-DD` format. Must be on or after `start` |
| `country` | string | No | `ID` | Country code: `ID` or `MY` |

## Response

**`data`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `start` | string | Start date used |
| `end` | string | End date used |
| `country` | string | Country code used |
| `workdays` | number | Number of working days in the range |
| `totalDays` | number | Total calendar days in the range (inclusive) |

## Request

```bash
curl "https://kalend.id/api/v1/calculate/workdays?start=2026-01-01&end=2026-01-31&country=ID" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": {
    "start": "2026-01-01",
    "end": "2026-01-31",
    "country": "ID",
    "workdays": 20,
    "totalDays": 31
  }
}
```
