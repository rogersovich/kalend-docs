---
id: check-workday
title: Check Workday
description: Check if a specific date is a workday (not a weekend or holiday).
sidebar_position: 4
---

# Check Workday

`GET /api/v1/check/workday`

Check if a specific date is a workday — not a weekend or holiday.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date` | string | **Yes** | — | Date to check in `YYYY-MM-DD` format |
| `country` | string | No | `ID` | Country code: `ID` or `MY` |

## Response

**`data`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `date` | string | The date checked |
| `country` | string | Country code used |
| `isWorkday` | boolean | True if the date is a working day |

## Request

```bash
curl "https://kalend.id/api/v1/check/workday?date=2026-03-16&country=ID" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": {
    "date": "2026-03-16",
    "country": "ID",
    "isWorkday": true
  }
}
```
