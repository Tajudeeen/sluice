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
or Git. The attester key must correspond to an address currently registered in the
deployed `AttesterRegistry`; read that address from the deployment artifact or the
contract instead of copying it from an older deployment.

`DEMO_ATTACKER_PRIVATE_KEY` is optional and should be provisioned only when the
operator-only breach demo is enabled. For public-chain contract deployment, set
the matching `DEMO_ATTACKER_ADDRESS` so the deploy script seeds that generated
wallet. The repository's well-known Hardhat key is restricted to local networks.

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

### Automated production workflow

The `Deploy settlement Worker` GitHub Actions workflow validates the Worker and
deploys only through the protected `production` environment. Configure these
GitHub environment secrets:

- `CLOUDFLARE_API_TOKEN`: scoped to deploy this Worker.
- `CLOUDFLARE_ACCOUNT_ID`: the target Cloudflare account.

Configure the environment variable `SLUICE_WORKER_URL` with the deployed Worker
origin, without `/health`. The workflow calls that URL after deployment and fails
unless it returns `{ "ok": true }`.

Runtime secrets such as `ATTESTER_PRIVATE_KEY` and `PROCESS_TOKEN` remain stored
in Cloudflare. Provision them once with `wrangler secret put`; GitHub does not
receive or print those values.

The release gate blocks on high/critical vulnerabilities in the deployed runtime
(`npm audit --omit=dev`). A separate full-tree audit is reported for visibility;
its remaining Hardhat/toolbox findings are development-tool migration work and
are not bundled into the Worker or Pages runtime.

### Manual deployment

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

## Protocol ownership

For any non-local contract deployment, set `PROTOCOL_OWNER_ADDRESS` to a multisig
before running the deploy script. The script starts OpenZeppelin two-step ownership
transfers for both `SluiceAsset` and `AttesterRegistry` and records the current and
pending owners in the deployment artifact.

The multisig must then call `acceptOwnership()` on both contracts. Until acceptance,
the deployer remains owner. Verify `ownership.assetPendingOwner` and
`ownership.registryPendingOwner` in the deployment artifact, complete both
acceptance transactions, and confirm each contract's `owner()` is the multisig
before treating the deployment as released.
