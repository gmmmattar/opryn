# Opryn / PropertyTag — interactive property operations demo

Four connected fictional experiences for an agency manager, tenant, owner and contractor.

## Run locally
Node **24.13 or later** (uses built-in `node:sqlite`). No npm install or external packages.

```sh
node scripts/build.mjs
node scripts/dev.mjs
```
Open http://127.0.0.1:4173. The local SQLite database is `.local/demo.sqlite`; the hosted demo uses Cloudflare D1. Hosted and local databases are separate.

```sh
node scripts/check.mjs
node --test tests/*.test.mjs
```
The check command validates JavaScript syntax; it is not a TypeScript typecheck. The automated suite runs real Worker Request/Response paths against a SQLite adapter, covering the full API workflows and denial cases. Browser automation/Playwright was not available in the restricted initial build environment; see QA.md for actual verification.

## Present the demo
1. Launch the agency workspace. Twelve illustrative properties, three open onboarding cases and five maintenance jobs are seeded.
2. Invite Alex Morgan at 12 Darling Street. Display the printable QR, copy its link, then open it. Confirm the fictional persona to simulate an OTP claim. Tokens are expiring, one-time and revocable.
3. Complete six onboarding steps. Use the supplied synthetic placeholder document. Save and resume or submit for review.
4. Demo controls → agency → onboarding → Alex. Mark details, document and agreement reviewed. Approve, then activate. Try requesting a correction before approval.
5. Demo controls → owner → approvals. Approve the seeded $385 quote.
6. Agency → maintenance → MT-1042 → assign Sam Rivera.
7. Contractor → MT-1042 → accept and propose time → start → completion notes + synthetic photo. Optional variation requires staff approval before completion.
8. Tenant sees the completed job. Agency verifies and closes it. Inspect the shared activity trail.
9. Agency → Tags & access → generate a public tag. Download SVG/PNG or print the card. Revoke it and prove the old link is denied.
10. Reports adjusts savings assumptions; Settings shows mock sync failure/retry and local demo outbox.

Demo controls are available from every authenticated page. Different tabs keep separate persona sessions using sessionStorage. Polling refreshes other role views every five seconds; an actively edited onboarding form is preserved. Reset restores the deterministic shared baseline and invalidates scenario tags; existing demo sessions stay signed in.

## Architecture
Dependency-free ES module frontend and Cloudflare Worker backend with durable D1. This adapts the preferred Next/Postgres brief because package downloads are blocked in the build workspace. An optimistic-versioned scenario aggregate makes state + audit + notifications one atomic write. It is a demo storage design, not the normalized production schema proposed in the brief.

- `src/server.mjs`: session, access checks, invitation validation, state machines and API
- `src/client.js`, `src/style.css`, `src/index.html`: responsive UI
- `src/qr.js`: self-contained QR version 6-L encoder (134-byte capacity)
- `src/seed.mjs`: fictional portfolio, files, people and jobs
- `drizzle/0000_propertytag.sql`: schema-only migration, with migration journal
- `scripts/build.mjs`: bundles immutable assets and Worker into `dist/`
- `tests/workflows.test.mjs`: API end-to-end and role denials

## Deployment
The existing Site identity is retained in `.openai/hosting.json`. Do not create another project. Build output is `dist/server/index.js` with `.openai/hosting.json` and `.openai/drizzle/` for managed D1 migration application. Use the Sites source synchronization and private publication workflow. Source must be pushed before publishing the matching archive.

The demo uses explicit `DEMO_MODE=true` in `src/server.mjs`. It MUST NOT be used as production authentication. A production implementation needs real authentication and membership checks, normalized tenant-isolated tables, document storage, legal review, file scanning, retention rules, external vendor permissions, and operational monitoring.

## Honest boundaries
All records are fictional; every property is illustrative. Uploads store filenames only. Document downloads are clearly labelled synthetic HTML previews, not legal PDF contracts. Signatures are simulated acknowledgements. SMS, email, bond, banking, trust accounting, vendor sync and payment services are not connected. Emergency guidance directs people to human support; this demo does not dispatch assistance.

Only the four predefined demo personas can sign in. The core interactive tenant/owner relationship is scoped to property p1; secondary portfolio records provide realistic staff queues. Tags for other records do not create new production identities. No real access codes, identity images or banking information are stored.
