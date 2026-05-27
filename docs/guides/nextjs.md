---
id: nextjs
title: Next.js Integration
description: Use the Kalend API in a Next.js application.
sidebar_position: 1
---

# Next.js Integration

## Setup

Store your API key in `.env.local`:

```bash
KALEND_API_KEY=kld_your_api_key
```

:::warning
Never expose `KALEND_API_KEY` to the browser. Only use it in Server Components, Route Handlers, or `getServerSideProps`.
:::

## Fetching Holidays in a Server Component

```tsx title="app/holidays/page.tsx"
const BASE = "https://kalend.id/api/v1";

async function getHolidays(year: number, country = "ID") {
  const res = await fetch(
    `${BASE}/holidays?year=${year}&country=${country}`,
    {
      headers: { Authorization: `Bearer ${process.env.KALEND_API_KEY}` },
      next: { revalidate: 86400 }, // cache 24 h
    }
  );
  if (!res.ok) throw new Error("Failed to fetch holidays");
  return res.json();
}

export default async function HolidaysPage() {
  const { data } = await getHolidays(2026);

  return (
    <ul>
      {data.map((h: { name: string; date: string }) => (
        <li key={h.date}>
          {h.date} — {h.name}
        </li>
      ))}
    </ul>
  );
}
```

## Route Handler (API Proxy)

Proxy the Kalend API from a Next.js Route Handler to keep your key server-side:

```ts title="app/api/holidays/route.ts"
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const year = searchParams.get("year") ?? new Date().getFullYear();
  const country = searchParams.get("country") ?? "ID";

  const res = await fetch(
    `https://kalend.id/api/v1/holidays?year=${year}&country=${country}`,
    { headers: { Authorization: `Bearer ${process.env.KALEND_API_KEY}` } }
  );

  const data = await res.json();
  return NextResponse.json(data);
}
```

Call it from client components:

```ts
const res = await fetch(`/api/holidays?year=2026`);
const { data } = await res.json();
```

## Counting Workdays

```ts title="lib/kalend.ts"
const BASE = "https://kalend.id/api/v1";
const KEY = process.env.KALEND_API_KEY!;

export async function countWorkdays(start: string, end: string, country = "ID") {
  const res = await fetch(
    `${BASE}/calculate/workdays?start=${start}&end=${end}&country=${country}`,
    { headers: { Authorization: `Bearer ${KEY}` } }
  );
  const { data } = await res.json();
  return data.workdays as number;
}
```

## Long Weekend Optimizer

```ts
export async function getOptimizedLeave(year: number, maxLeave = 3) {
  const res = await fetch(
    `${BASE}/long-weekends/optimize?year=${year}&max_leave=${maxLeave}`,
    { headers: { Authorization: `Bearer ${KEY}` } }
  );
  const { data } = await res.json();
  return data; // array of leave strategies
}
```

## Caching Strategy

| Endpoint | Recommended `revalidate` |
|----------|--------------------------|
| `/holidays` | `86400` (24 h) |
| `/calendar` | `86400` (24 h) |
| `/long-weekends` | `86400` (24 h) |
| `/check` | `3600` (1 h) |
| `/calculate/*` | `0` (dynamic — user input) |

Use `fetch` cache tags to invalidate on demand:

```ts
fetch(url, {
  headers: { Authorization: `Bearer ${KEY}` },
  next: { tags: ["kalend-holidays"], revalidate: 86400 },
});
```

```ts
import { revalidateTag } from "next/cache";
revalidateTag("kalend-holidays");
```
