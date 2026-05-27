---
id: check
title: Check Date
description: Check if a specific date is a holiday, weekend, or workday.
sidebar_position: 3
---

# Check Date

`GET /api/v1/check`

Check if a specific date is a holiday, weekend, or workday.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `date` | string | **Yes** | — | Date to check in `YYYY-MM-DD` format. Example: `2026-01-01` |
| `country` | string | No | `ID` | Country code: `ID` or `MY` |

## Response

**`data`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `date` | string | The date checked |
| `country` | string | Country code used |
| `isHoliday` | boolean | True if the date has a national or joint-leave holiday |
| `isWeekend` | boolean | True if the date is Saturday or Sunday |
| `isWorkday` | boolean | True if not a holiday and not a weekend |
| `holidays` | array | Array of `{ name, type }` objects for holidays on this date |

## Request

```bash
curl "https://kalend.id/api/v1/check?date=2026-01-01&country=ID" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": {
    "date": "2026-01-01",
    "country": "ID",
    "isHoliday": true,
    "isWeekend": false,
    "isWorkday": false,
    "holidays": [
      { "name": "Tahun Baru Masehi", "type": "national" }
    ]
  }
}
```
