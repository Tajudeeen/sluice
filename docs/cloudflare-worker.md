# Cloudflare Worker Deployment

The Worker is the hosted attester adapter. It exposes:

- `GET /health` for the frontend status panel.
- `POST /process/latest` to settle pending requests immediately after a wallet transaction.
- A one-minute cron trigger that retries pending requests if the browser callback is missed.

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
```

Paste each value when prompted. Do not put either value in `wrangler.toml`, the frontend,
or Git. The attester key must correspond to the authorized registry attester address:

`0x2818DA030a19Ac0e84e9bA64Fef1AF3941668871`

## Test locally (optional)

Create an ignored `.dev.vars` file with the same two secret names, then run:

```powershell
npx wrangler dev --local --env-file .dev.vars
```

Open `http://127.0.0.1:8787/health`. A healthy response contains `chainId: 677`,
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

## Point the frontend at the Worker

In the ignored `frontend/.env`, set both values to the Worker origin, without `/health`:

```env
VITE_AGENT_HEALTH_URL=https://sluice-agent.<your-subdomain>.workers.dev
VITE_AGENT_PROCESS_URL=https://sluice-agent.<your-subdomain>.workers.dev
```

Then rebuild and publish the Pages bundle using the repository's normal Pages workflow.

The Worker can be redeployed after code changes with `npx wrangler deploy`; secrets remain
stored in Cloudflare and are not included in Git.
