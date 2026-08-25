# Cloudflare Worker Deployment

The Worker is the hosted attester adapter. It exposes:

- `GET /health` for the frontend status panel.
- Protected `POST /process/latest` and `POST /process/:id` admin recovery routes.
- Disabled-by-default `POST /demo/attack`, available only when
  `DEMO_MODE_ENABLED=true` and protected by the same bearer token.
- A one-minute cron trigger that retries pending requests if the browser callback is missed.

Settlement calls are routed through a per-gate Durable Object so concurrent cron,
admin, and demo requests cannot race the attester wallet nonce.
The Durable Object also persists a bounded anomaly-history window so scheduled
decisions apply the same frequency and repeated-requester rules as the Node agent.

The `/process/latest` and `/process/:id` routes require
`Authorization: Bearer <PROCESS_TOKEN>`. The browser does not receive this token;
normal user requests are picked up by the cron trigger.

The public frontend does not call `/demo/attack`. To run that transaction-writing
route manually, explicitly set `DEMO_MODE_ENABLED=true` and send the bearer token.

## One-time setup

From the repository root, install Wrangler and sign in:

```powershell
npm install
npx wrangler login
npx wrangler whoami
```

The browser login does not require a paid Workers plan. Cloudflare gives the Worker a
`workers.dev` URL.

## Add secrets

Use the exact uppercase names below. Cloudflare secret names are case-sensitive:

```powershell
npx wrangler secret put GROQ_API_KEY
npx wrangler secret put ATTESTER_PRIVATE_KEY
npx wrangler secret put DEMO_ATTACKER_PRIVATE_KEY
npx wrangler secret put PROCESS_TOKEN
```

Paste each value when prompted. Do not put these values in `wrangler.toml`, the frontend,
or Git. The attester key must correspond to the authorized registry attester address:

`0x2818DA030a19Ac0e84e9bA64Fef1AF3941668871`

## Test locally (optional)

Create an ignored `.dev.vars` file with the same secret names, then run:

```powershell
npx wrangler dev --local --env-file .dev.vars
```

Open `http://127.0.0.1:8787/health`. A healthy response contains the configured
Somnia chain id,
`attesterConfigured: true`, and either `groqConfigured: true` with
`aiProvider: "groq"` or an explicit deterministic fallback when no AI key is
available.

## Deploy

```powershell
npx wrangler deploy
```

Copy the URL Wrangler prints, for example:

`https://sluice-agent.<your-subdomain>.workers.dev`

Check it before changing the frontend:

```powershell
Invoke-RestMethod https://sluice-agent.<your-subdomain>.workers.dev/health
```

## Point the frontend at Worker health

In the ignored `frontend/.env`, set the health URL to the Worker origin, without `/health`:

```env
VITE_AGENT_HEALTH_URL=https://sluice-agent.<your-subdomain>.workers.dev
```

Then rebuild and publish the Pages bundle using the repository's normal Pages workflow.

The Worker can be redeployed after code changes with `npx wrangler deploy`; secrets remain
stored in Cloudflare and are not included in Git.
