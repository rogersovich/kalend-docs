---
id: countries
title: Countries
description: List all active countries supported by Kalend.
sidebar_position: 1
---

# Countries

`GET /api/v1/countries`

List all active countries supported by Kalend.

## Authentication

All endpoints require an API key passed as a Bearer token.

```
Authorization: Bearer kld_your_api_key
```

## Response

Returns a list of active countries.

**`success`** `boolean` — Whether the request succeeded.

**`data`** `array` — Array of country objects.

| Field | Type | Description |
|-------|------|-------------|
| `code` | string | ISO 3166-1 alpha-2 country code. Example: `ID`, `MY` |
| `name` | string | Country name in English |
| `timezone` | string | Primary timezone. Example: `Asia/Jakarta` |
| `locale` | string | Locale string. Example: `id-ID` |

## Request

```bash
curl https://kalend.id/api/v1/countries \
  -H "Authorization: Bearer kld_your_api_key"
```

## Response Example

```json
{
  "success": true,
  "data": [
    {
      "code": "ID",
      "name": "Indonesia",
      "timezone": "Asia/Jakarta",
      "locale": "id-ID"
    },
    {
      "code": "MY",
      "name": "Malaysia",
      "timezone": "Asia/Kuala_Lumpur",
      "locale": "ms-MY"
    }
  ]
}
```
