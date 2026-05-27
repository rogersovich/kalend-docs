---
id: workdays
title: Working Days Calculation
description: Calculate workdays, date differences, and leave planning with the Kalend API.
sidebar_position: 3
---

# Working Days Calculation

## Overview

The Kalend API provides two endpoints for date math:

| Endpoint | Purpose |
|----------|---------|
| `GET /api/v1/calculate/workdays` | Count working days between two dates |
| `GET /api/v1/calculate/diff` | Get the difference in days, weeks, months, years |

Working days exclude weekends **and** public holidays for the selected country.

## Count Working Days

```bash
curl "https://kalend.id/api/v1/calculate/workdays?start=2026-01-01&end=2026-01-31&country=ID" \
  -H "Authorization: Bearer kld_your_api_key"
```

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

The response tells you:
- **`workdays`** — days employees are expected to work
- **`totalDays`** — full calendar span (inclusive of start and end)

## Date Difference

```bash
curl "https://kalend.id/api/v1/calculate/diff?start=2026-01-01&end=2026-12-31" \
  -H "Authorization: Bearer kld_your_api_key"
```

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

Notes:
- `days` is negative if `end` is before `start`
- `weeks`, `months`, `years` are always the absolute (non-negative) value
- `months` is approximate: `days ÷ 30`
- `years` is approximate: `days ÷ 365`

## Common Use Cases

### Payroll: working days in a month

```bash
curl "https://kalend.id/api/v1/calculate/workdays?start=2026-03-01&end=2026-03-31&country=ID"
```

Use `workdays` as the divisor when computing daily salary from a monthly rate.

### Leave request: days consumed

```bash
# Employee applies for leave 2026-04-13 → 2026-04-17
curl "https://kalend.id/api/v1/calculate/workdays?start=2026-04-13&end=2026-04-17&country=ID"
```

The `workdays` value is the number of leave days that should be deducted from their balance.

### Project deadline: calendar countdown

```bash
curl "https://kalend.id/api/v1/calculate/diff?start=2026-05-27&end=2026-08-01"
```

Use `days` for a deadline countdown, `weeks` for sprint planning.

## Combining with `/check`

Check each individual date before rendering a leave calendar:

```bash
curl "https://kalend.id/api/v1/check?date=2026-04-14&country=ID"
```

```json
{
  "success": true,
  "data": {
    "date": "2026-04-14",
    "isHoliday": true,
    "isWeekend": false,
    "isWorkday": false,
    "holidays": [{ "name": "Wafat Isa Al-Masih", "date": "2026-04-14" }]
  }
}
```

This lets you highlight holidays differently from weekends in your UI.

## Combining with `/long-weekends/optimize`

Find the best weeks to take leave, then verify the exact workday count:

1. Call `/long-weekends/optimize?year=2026&max_leave=2` to get the top strategies.
2. For each strategy, call `/calculate/workdays` over the full period to get the true number of working days in that window.

```bash
# Strategy suggests leaving 2026-05-21 and 2026-05-25
# Verify: how many work days are in the full period?
curl "https://kalend.id/api/v1/calculate/workdays?start=2026-05-21&end=2026-05-27&country=ID"
```

## Tips

- **Range is inclusive**: both `start` and `end` are counted.
- **Country matters**: `MY` has different public holidays than `ID`. Always pass the correct `country` for payroll or leave systems.
- **Cache freely**: workday counts for past months never change. Use a long cache TTL (7 days or more) for historical ranges.
