# Opryn / PropertyTag

Independent demo built from Property_Tag_Platform_Codex_Build_Brief.md.

The hosted runtime is a dependency-free Cloudflare Worker with D1, rather than the preferred Next/Postgres stack: this workspace cannot download packages. Browser UI uses standard ES modules and CSS. There are no third-party runtime requests.

## Data and security
D1 stores an optimistic-versioned scenario aggregate. Every successful mutation atomically stores its audit and notification alongside the changed record; concurrent writes retry. Sessions are expiring opaque tokens, held separately in sessionStorage per tab and hashed in D1. Server filters every role's response and checks actor/record relationship before mutation. Demo persona selection is deliberately enabled in this fictional-only demo build; it is not production authentication. Public property tags expose guidance only. Expiring invitation hashes and revocation live in the persisted aggregate. Synthetic uploads store metadata only and never transfer user documents. State is re-fetched every five seconds and after every mutation.

## Milestones
- [ ] A: routes, theme, database, personas, fixture
- [ ] B: invitation, wizard draft/resume/correction/review/activation
- [ ] C: approval, contractor lifecycle, scoped documents and notifications
- [ ] D: valid QR generation, revoke/reissue, mock sync ledger
- [ ] E: browser walkthrough, responsive QA, tests, packaging/publication

## Deliberate demo boundaries
No real communication, payments, ID scans, signature services, trust accounting or external integrations. Physical NFC encoding is outside the app. All personal records are fictional. Production needs agency identity, normalized multi-organization model, document object storage, independent security/legal review, retention policy and vendor API discovery.

## Implemented versus verified
A–D are implemented and covered at API level. E has syntax, build and 10 workflow/security tests passing. Its browser walkthrough, screenshots, device QR scan and hosted publication remain blocked by this environment and are not marked complete. The application uses JavaScript and D1 instead of the brief's preferred TypeScript/Postgres stack. Synthetic document previews are HTML, uploads metadata-only. Corrections reopen the demo wizard; section-specific production locking is not implemented.
