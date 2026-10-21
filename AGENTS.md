# Opryn demo handover

This repository contains an implemented, fictional property operations demo. Continue this codebase rather than rebuilding it. Read README.md, ARCHITECTURE.md and QA.md first.

## Run and verify

- Requires Node.js 24.13 or newer; uses built-in node:sqlite. No dependency installation is required.
- `npm run build` bundles the Worker and browser assets.
- `npm test` runs 10 API workflow and access-control tests.
- `npm run dev` starts http://127.0.0.1:4173 after a build.
- `npm run lint` checks JavaScript syntax. The typecheck alias is also syntax-only; this project is JavaScript, not TypeScript.

## Immediate task

Get the existing demo running in a browser for George to review. Verify desktop and mobile layouts and the four personas: agency, tenant, owner and contractor. Walk through onboarding, owner approval, contractor completion, activity updates and tag revocation. Verify QR codes with an independent scanner. Fix observed issues and document actual results in QA.md. The previous environment blocked local listening sockets and could not resolve the Sites source host, so no hosted preview or browser QA has been completed.

## Constraints

- Preserve fictional demo data and clearly simulated signatures, uploads and integrations.
- Do not enable real email, SMS, money collection, identity verification or production authentication.
- Keep role access checks and durable shared state; preserve passing workflow tests.
- `.openai/hosting.json` contains the existing Sites identity. Do not create a replacement Site or publish until the user asks; the current task is preview and review.
- Never commit `.local`, database files, credentials, `.sites-runtime`, generated builds or publication archives.
- The initial build uses dependency-free JavaScript and Cloudflare Worker/D1, not the originally preferred Next.js/Postgres stack. Do not migrate the stack merely to preview it.
