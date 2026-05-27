---
id: authentication
title: Authentication
description: How to authenticate requests to the Kalend API.
sidebar_position: 2
---

# Authentication

## API Keys

All Kalend API endpoints require authentication using an API key passed as a **Bearer token** in the `Authorization` header.

```bash
Authorization: Bearer kld_your_api_key
```

## Getting an API Key

1. [Create a free Kalend account](https://kalend.id/register)
2. Go to [Dashboard → API Keys](https://kalend.id/dashboard/api-keys)
3. Click **Generate New Key**
4. Copy and store the key securely — it is only shown once

:::warning
Never expose your API key in client-side code, public repositories, or version control. Treat it like a password.
:::

## Example Request

```bash
curl "https://kalend.id/api/v1/holidays?country=ID&year=2026" \
  -H "Authorization: Bearer kld_abc123def456..."
```

## Key Format

Kalend API keys follow this format:

```
kld_<48 hex characters>
```

Example: `kld_a1b2c3d4e5f6...`

## Revoking a Key

Go to [Dashboard → API Keys](https://kalend.id/dashboard/api-keys) and click **Revoke** next to any key you want to disable. Revoked keys immediately stop working.

## Error Response

If your key is missing or invalid, the API returns:

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or missing API key"
  }
}
```

HTTP status: `401 Unauthorized`
