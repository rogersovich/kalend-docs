---
id: calculate-diff
title: Date Difference
description: Calculate the difference between two dates in days, weeks, months, and years.
sidebar_position: 6
---

# Date Difference

`GET /api/v1/calculate/diff`

Calculate the difference between two dates in days, weeks, months, and years.

## Query Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `start` | string | **Yes** | Start date in `YYYY-MM-DD` format |
| `end` | string | **Yes** | End date in `YYYY-MM-DD` format |

## Response

**`data`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `start` | string | Start date used |
| `end` | string | End date used |
| `days` | number | Difference in days. Negative if end is before start |
| `weeks` | number | Absolute difference in full weeks |
| `months` | number | Approximate difference in months (÷ 30) |
| `years` | number | Approximate difference in years (÷ 365) |

## Request

```bash
curl "https://kalend.id/api/v1/calculate/diff?start=2026-01-01&end=2026-12-31" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": {
    "start": "2026-01-01",
    "end": "2026-12-31",
    "days": 364,
    "weeks": 52,
    "months": 12,
    "years": 0
  }
}
```
