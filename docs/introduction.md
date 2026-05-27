---
id: introduction
title: Introduction
description: Kalend public API — Indonesia & Malaysia public holidays, calendar data, and date calculations.
sidebar_position: 1
---

# Introduction

Kalend provides a REST API for accessing public holiday data, calendar information, and date calculation utilities for **Indonesia** and **Malaysia**.

## What You Can Do

| Endpoint | Purpose |
|----------|---------|
| [Holidays](/docs/api-reference/holidays) | Fetch national holidays, joint leave, and regional holidays |
| [Check Date](/docs/api-reference/check) | Check if a date is a holiday, weekend, or workday |
| [Long Weekends](/docs/api-reference/long-weekends) | List all long weekend periods and optimize leave days |
| [Monthly Calendar](/docs/api-reference/calendar) | Get full calendar data for any month |
| [Calculate Workdays](/docs/api-reference/calculate-workdays) | Count working days between two dates |
| [Date Difference](/docs/api-reference/calculate-diff) | Get date difference in days, weeks, months, years |
| [Year Info](/docs/api-reference/year-info) | Get year context: shio, hijri, total holidays |
| [Countries](/docs/api-reference/countries) | List supported countries |

## Base URL

```
https://kalend.id/api/v1
```

## Supported Countries

| Code | Country | Coverage |
|------|---------|----------|
| `ID` | Indonesia | National holidays + 34 provinces |
| `MY` | Malaysia | National holidays + 16 states |

## Data Range

Holiday data is available for years **2020 – 2030**.

## Response Format

All responses follow a consistent structure:

```json
{
  "success": true,
  "data": { ... },
  "meta": { ... }
}
```

On error:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAM",
    "message": "year must be 2020–2030"
  }
}
```

## Quick Start

1. [Create a free account](https://kalend.id/register)
2. [Generate an API key](https://kalend.id/dashboard/api-keys)
3. Make your first request:

```bash
curl "https://kalend.id/api/v1/holidays?country=ID&year=2026" \
  -H "Authorization: Bearer kld_your_api_key"
```
