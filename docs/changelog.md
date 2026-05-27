---
id: changelog
title: Changelog
description: API changes, new endpoints, and breaking changes.
sidebar_position: 4
---

# Changelog

## v1.0.0 — 2026-05-01

Initial public release.

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/countries` | List supported countries |
| `GET` | `/api/v1/holidays` | Holiday data by country/year/month |
| `GET` | `/api/v1/check` | Check if a date is a holiday/weekend/workday |
| `GET` | `/api/v1/check/workday` | Simple workday check |
| `GET` | `/api/v1/calculate/workdays` | Count workdays in a range |
| `GET` | `/api/v1/calculate/diff` | Date difference in days/weeks/months/years |
| `GET` | `/api/v1/long-weekends` | List long weekend periods |
| `GET` | `/api/v1/long-weekends/optimize` | Optimal leave strategies |
| `GET` | `/api/v1/calendar` | Full monthly calendar data |
| `GET` | `/api/v1/year-info` | Year context (shio, hijri, total holidays) |

### Coverage

- Indonesia: national holidays + joint leave 2020–2030
- Malaysia: national + state-level holidays 2020–2030
