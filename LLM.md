# hanzo.one

Marketing site for Hanzo One, the all-in-one AI-powered business suite (hanzo.one). Covers team management, billing, analytics, scheduling, documents, email, CRM, and communications.

## Stack

- React 19 + TypeScript (Vite 5, SWC)
- React Router v6 (client-side routing)
- **@hanzo/ui components on the @hanzo/gui backend** (the Tamagui fork) —
  no Tailwind, no shadcn, no Radix, no `className` anywhere in the JSX
- **@hanzo/design** tokens (the only stylesheet), **@hanzo/logo** mark,
  **@hanzo/brand** identity
- Framer Motion (animations), Three.js (3D)

## The UI layer — one surface, `src/gui`

Every page imports from `@/gui` and nowhere else:

```
src/gui/
  config.ts       the ONE createGui(defaultConfig) runtime config (v4 preset)
  primitives.tsx  Box / Grid / XStack / YStack / Text / Paragraph / H1-H6 /
                  Anchor / Link / MotionBox / MotionText
  components.tsx  Button, Card, Input, Tabs, Dialog, Select, Table, Toast …
                  (what used to be src/components/ui/*, on gui primitives)
  ChromeText, CodeBlock, MasonryGrid, AnimatedSection, architectural, Command,
  Helmet          the site's own compositions
  index.ts        the barrel — plus @hanzo/ui/product (BrandMark, useToast,
                  charts) and @hanzo/logo
```

House rules, in one place each:

- **Style props, never classes.** `padding={24} backgroundColor="var(--card)"`.
  Brand values (colour, radius, type scale) resolve through @hanzo/design CSS
  custom properties, so the whole site retunes from one token layer.
- **`render`, not `tag`.** gui picks the element from the `render` prop; `tag`
  silently leaks to the DOM as an attribute and everything renders as `<span>`.
- **Boxes are built on gui's Text**, because `textAlign` is a text style prop
  and `text-center` on a section is the commonest instruction in this codebase.
- **Web shrink semantics.** gui's stacks default to `flexShrink: 0` (React
  Native); `src/gui/primitives.tsx` restores `flexShrink: 1; min-width: 0` once,
  which is what these layouts were written against.
- **44px touch targets.** `Button` is 44px tall by default (36px `sm` grows back
  to 44 under `$maxSm`); `Anchor`/`Link` take `tap` for the same hit height.
  Links that wrap a card do not take it — an inline-flex box collapses the card.
- **Monochrome.** Chromatic values collapse onto the neutral ladder and the
  white opacity ladder; dark fills resolve to `--surface-card*`. There is no hue
  left in the UI.

Vite needs four knobs for gui on the web (see `vite.config.ts`): the
`react-native` → `react-native-web` alias (absolute — pnpm nests), React
de-duplication, `TAMAGUI_TARGET`/`__DEV__`, and `.web.js` resolve extensions.
`build.rollupOptions.output.manualChunks` is deliberately absent: hoisting the
gui/react vendors into sibling eager chunks reordered module initialisation and
the runtime threw a TDZ error before first paint.

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

The wrong-brand favicon is fixed here: `index.html` links `public/favicon.svg`
copied from `@hanzo/logo`, and the footer renders `<HanzoLogo/>` instead of the
`lovable-uploads` PNG. `origin/fix/broken-links` (`eaf948d`) carried the same
correction and can be dropped.

## Notes

- Shares the same component library and routes as hanzo.app, hanzo.id, hanzo.network, and sensei.group. Only `OneLanding.tsx` and `index.html` metadata are unique.
- `index.html` now links the real `@hanzo/logo` favicon (`public/favicon.svg`),
  not the `lovable-uploads` PNG, and no longer pulls Inter from Google Fonts —
  @hanzo/design ships Geist. The static server's CSP no longer needs
  `fonts.googleapis.com` / `fonts.gstatic.com`.
- `/shadcn-v4` is a marketing page *about* shadcn; its copy still names Tailwind
  and Radix. That is page content, not a dependency — the site itself ships
  neither (`grep radix dist/assets/*.js` → 0).
- `@hanzo/ui` is pinned `^8.0.26`, and the site imports only `@hanzo/ui/product`
  — the gui-backend half, which pulls no Radix into the bundle. 8.0.27 (the
  release that drops the shadcn backend and all 18 Radix deps from the package
  itself) is on `hanzoai/ui@blue2/gui-backend-flip` and not yet published; the
  caret range picks it up on the next install with no change here.
