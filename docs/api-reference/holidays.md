---
id: holidays
title: Holidays
description: Get national holidays, joint leave, and regional holidays for a given country and year.
sidebar_position: 2
---

# Holidays

`GET /api/v1/holidays`

Get national holidays, joint leave, and regional holidays for a given country and year.

## Query Parameters

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `country` | string | No | `ID` | Country code: `ID` (Indonesia) or `MY` (Malaysia) |
| `year` | number | **Yes** | — | Year to fetch holidays for. Range: `2020–2030` |
| `month` | number | No | — | Filter by month (1–12). If omitted, returns all holidays for the year |
| `type` | string | No | — | Filter by holiday type: `national`, `joint-leave`, or `regional` |

## Response

**`success`** `boolean` — Whether the request succeeded.

**`data`** `array` — Array of holiday objects.

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique holiday ID |
| `date` | string | Date in `YYYY-MM-DD` format |
| `name` | string | Holiday name |
| `type` | string | `national` \| `joint-leave` \| `regional` |
| `description` | string | Optional description |
| `regionCode` | string | Region code for regional holidays. `null` for national |
| `regionName` | string | Region name. `null` for national |

**`meta`** `object`

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Total number of holidays returned |
| `country` | string | Country code used |
| `year` | number | Year used |
| `month` | number | Month used (if provided) |

## Request

```bash
# All holidays in Indonesia 2026
curl "https://kalend.id/api/v1/holidays?country=ID&year=2026" \
  -H "Authorization: Bearer kld_your_api_key"

# National holidays only, January 2026
curl "https://kalend.id/api/v1/holidays?country=ID&year=2026&month=1&type=national" \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid-here",
      "date": "2026-01-01",
      "name": "Tahun Baru Masehi",
      "type": "national",
      "description": "New Year's Day",
      "regionCode": null,
      "regionName": null
    }
  ],
  "meta": {
    "total": 1,
    "country": "ID",
    "year": 2026,
    "month": 1
  }
}
```
