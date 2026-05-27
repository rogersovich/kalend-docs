---
id: year-info
title: Year Info
description: Get year-level context — total holidays, joint leave count, Chinese zodiac (shio), and Hijri year.
sidebar_position: 10
---

# Year Info

`GET /api/v1/year-info`

Get year-level context: total holidays, joint leave count, Chinese zodiac (shio), and Hijri year.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `country` | string | No | `ID` | Country code: `ID` or `MY` |
| `year` | number | **Yes** | — | Year. Range: `2020–2030` |

## Response

**`data`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `year` | number | Gregorian year |
| `country` | string | Country code |
| `shio` | string | Chinese zodiac animal for this year. Example: `Kuda` |
| `hijri` | string | Hijri year(s) overlapping this Gregorian year. Example: `1447–1448 H` |
| `totalNationalHolidays` | number | Total national public holidays |
| `totalJointLeaves` | number | Total joint leave days (cuti bersama) |

## Request

```bash
curl "https://kalend.id/api/v1/year-info?country=ID&year=2026" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": {
    "year": 2026,
    "country": "ID",
    "shio": "Kuda",
    "hijri": "1447–1448 H",
    "totalNationalHolidays": 17,
    "totalJointLeaves": 5
  }
}
```
