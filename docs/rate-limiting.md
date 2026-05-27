---
id: rate-limiting
title: Rate Limiting
description: Understand Kalend API rate limits and how to handle them.
sidebar_position: 3
---

# Rate Limiting

## Limits

| Plan | Requests per day |
|------|-----------------|
| Free | 100 |
| Registered user | 100 |

Rate limits are tracked **per API key**, reset daily at midnight UTC.

## Rate Limit Headers

Every response includes headers showing your current usage:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests allowed per day |
| `X-RateLimit-Remaining` | Requests remaining today |
| `X-RateLimit-Reset` | Unix timestamp when the limit resets |

## Exceeded Limit Response

When you exceed the limit, the API returns HTTP `429`:

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Daily request limit reached. Resets at midnight UTC."
  }
}
```

## Best Practices

<details>
<summary>Cache responses</summary>

Holiday data rarely changes. Cache `/holidays` and `/calendar` responses for at least 24 hours to reduce unnecessary requests.

</details>

<details>
<summary>Fetch by year, not per request</summary>

Fetch the full year with `/holidays?year=2026` once and filter client-side, instead of making a request per month.

</details>

<details>
<summary>Use /calendar for UI rendering</summary>

`/calendar` returns pre-computed `isWorkday`, `isHoliday`, and `isWeekend` flags — no need to call `/check` for every date.

</details>
