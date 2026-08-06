# hanzo.one

Marketing site for Hanzo One, the all-in-one AI-powered business suite (hanzo.one). Covers team management, billing, analytics, scheduling, documents, email, CRM, and communications.

## Stack

- React 18 + TypeScript (Vite 5, SWC)
- React Router v6 (client-side routing)
- Tailwind CSS v4 + Radix UI primitives
- Framer Motion (animations), Three.js (3D)

## Structure

```
src/
  App.tsx            # Root router -- OneLanding as homepage
  pages/
    OneLanding.tsx   # Homepage (/) -- business suite landing with pricing
    ...              # Shared pages (same as other Hanzo sites)
  components/        # Shared component library
```

## Key Routes

- `/` -- OneLanding (business suite: team, billing, analytics, CRM)
- All other routes -- Shared product/marketing/account pages from common codebase

## Commands

```bash
pnpm install
pnpm dev            # Vite dev server
pnpm build          # Production build to dist/
pnpm preview
pnpm lint
```

## OneLanding Focus

The homepage highlights 8 product areas:
- Team Management, Billing & Invoicing, Analytics, Scheduling
- Documents (AI-powered), Email (AI assist), Communication, CRM

Pricing tiers:
- Starter ($29/mo, 5 members), Business ($99/mo, 50 members), Enterprise (custom)

Brand: emerald/teal gradient theme.

## Serving chain

```
push to main
  -> .github/workflows/sync.yml     carries refs to git.hanzo.ai (nothing else)
  -> .hanzo/workflows/deploy.yml    runs natively on the forge
       docker build .               Dockerfile: pnpm build
                                    -> FROM ghcr.io/hanzoai/static:v0.5.1
       docker push                  ghcr.io/hanzoai/hanzo-one:<short-sha>
  -> hanzoai/universe               infra/k8s/operator/crs/hanzo-one.yaml
       spec.image.tag: <short-sha>  set by a human, never by the build
  -> hanzoai/ingress                hanzo.one -> Service hanzo-one:80 -> :3000
```

`hanzoai/static` is a Go binary on scratch, run with `-spa` because this is a
98-route `BrowserRouter`: without the fallback every deep link 404s instead of
reaching `index.html` for the router (and for the app's own `path="*"`
NotFound). `HANZO_STATIC_CSP` in the CR allows `fonts.googleapis.com` /
`fonts.gstatic.com` for the Inter stylesheet `index.html` links, and
`api.hanzo.ai` in `connect-src` for the chat widgets.

## Nothing serves hanzo.one today — DNS is the blocker

`hanzo.one` does not resolve: SERVFAIL from both 1.1.1.1 and 8.8.8.8. The `.one`
registry still delegates the zone to four Route53 nameservers
(`ns-172.awsdns-21.com`, `ns-834.awsdns-40.net`, `ns-1102.awsdns-09.org`,
`ns-1553.awsdns-02.co.uk`) whose hosted zone no longer exists, so the delegation
is stale. There is no CF Pages project either. The GitHub Pages workflow this
migration removed last succeeded 2026-03-04 and has failed since — Pages did not
survive the hanzoai -> hanzo-apps transfer.

So this repo has zero staleness risk and is the safest of the four to build
first: an image can be published and verified with nothing live to regress. The
real work is outside the repo — re-delegate hanzo.one to Cloudflare (or drop the
domain). Until DNS is fixed the ingress host in the CR cannot answer.

Promotion order: publish an image -> set `spec.image.tag` in `crs/hanzo-one.yaml`
-> add `- hanzo-one.yaml` to `crs/kustomization.yaml` -> confirm the pod is
Running and a deep link returns 200 -> re-delegate DNS. The CR is committed INERT
(empty tag, absent from `kustomization.yaml`); promoting an App with no image tag
takes the host down instead of leaving it alone.

Branding is settled on `main`: `index.html` links `/favicon.svg` with
`/favicon.ico` behind it, and the footer uses `/logo.svg` — all three the
canonical blocky-H from `@hanzo/logo`. The placeholder PNG the site was
scaffolded with is gone. `origin/fix/broken-links` reached the same place
independently and is still unmerged; take its link fixes if you want them, but
its branding is already here.

## Notes

- Shares the same component library and routes as hanzo.app, hanzo.id, hanzo.network, and sensei.group. Only `OneLanding.tsx` and `index.html` metadata are unique.
