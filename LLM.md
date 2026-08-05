# hanzo.one

Marketing site for Hanzo One, the all-in-one AI-powered business suite (hanzo.one). Covers team management, billing, analytics, scheduling, documents, email, CRM, and communications.

## Stack

- React 19 + TypeScript (Vite 5, SWC); `pnpm typecheck` runs **tsgo**, the Go
  compiler from `@typescript/native-preview` — 23s of `tsc` became 1.8s
- React Router v6 (client-side routing)
- **@hanzo/ui components on the @hanzo/gui backend** (the Tamagui fork), the
  published 8.x line — no Tailwind, no shadcn, no Radix, no `className`
  anywhere in the JSX, and none of the three in the lockfile or the bundle
- **@hanzogui/vite-plugin** — the gui compiler. Extracts gui's atomic CSS at
  build time and writes the theme layer to a file, so the whole stylesheet is
  one hashed, cached `dist/assets/*.css` (see "The stylesheet" below)
- **@hanzo/design** tokens, **@hanzo/logo** mark
- Framer Motion (animations), Three.js (3D)

Every dependency here is imported by `src`. `react-native-svg` is the exception
that is not: `@hanzogui/lucide-icons-2` (a dependency of `@hanzo/ui`) imports it
without declaring it, so rollup cannot resolve the package unless this site
supplies it. It is declared for that reason alone and reaches the bundle through
nothing.

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
The compiler plugin would supply its own set; it is started with
`disableResolveConfig` so there is one alias for `react-native`, not two.
`build.rollupOptions.output.manualChunks` is deliberately absent: hoisting the
gui/react vendors into sibling eager chunks reordered module initialisation and
the runtime threw a TDZ error before first paint.

## The stylesheet — one cached file, 100% of the classes

gui styles by minting atomic classes (`_bg-card`, `_fs-14`). Something has to
author the rules behind them, and there are exactly two candidates: the runtime
injects them, or the compiler extracts them at build time. Neither is automatic,
and when neither runs the page renders completely unstyled through a green
build — that is what happened on hanzo.app.

Here the compiler runs. `@hanzogui/vite-plugin` does two jobs:

- **extraction** — flattens gui elements into classNames and emits their rules
  into the bundled CSS, hashed and cached like any other asset
- **`outputCSS`** — writes the theme layer (`config.getCSS()`: every `--var`,
  every `.t_*` rule) to `src/styles/gui.css`, which `styles/index.css` imports.
  Build output, gitignored, rewritten every build — never edit it. Without it
  `GuiProvider` renders those 138KB into a `<style>` tag on every document.

`main.tsx` then passes `disableInjectCSS`, which turns off that `<style>` tag
and nothing else — atomic rules still reach `#_hanzogui-styles` at runtime for
anything extraction could not flatten. **That flag is safe only while the
compiler is configured.** Setting it with no extractor is precisely the
hanzo.app bug.

Measured on the built site, 8 routes rendered in a browser
(`node ~/work/hanzo/gui/pkgs/ui/hanzogui/css-check.mjs --render <url> …`):

| | cached sheet | injected per document | classes covered |
|---|---|---|---|
| runtime injection only | 10KB | 313KB | 763/764 |
| compiler + `outputCSS` | 150KB (17KB gzip) | 28KB | **763/763 (100%)** |

The honest cost is +14KB gzipped on a first visit, in exchange for never
rebuilding 313KB of CSS in JavaScript again, on any route. 97% of that sheet is
themes the site never applies — it uses six of the 248 `t_*` classes the v4
preset declares — so a `createGui({themes})` subset is the next real saving.

`.npmrc` sets `public-hoist-pattern[]=@hanzogui/*`. The compiler bundles the gui
config into `.hanzogui/` and re-resolves its externals from there with plain node
resolution; pnpm's default layout exposes only DIRECT dependencies at the root,
so `@hanzogui/web` — reached through `@hanzo/gui`, never named in
`package.json` — was invisible and extraction silently produced nothing. The
`Dockerfile` copies `.npmrc` in the install layer for the same reason.

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
pnpm typecheck      # tsgo, the Go compiler
pnpm preview
pnpm lint
```

`pnpm build` does not typecheck — vite/SWC strips types without reading them, so
a green build says nothing about `pnpm typecheck`. Both are still red on debt
this migration did not clear: ~205 type errors and 68 lint errors, down from 632
and 69. What remains is one shape, repeated: a lucide icon handed gui style props
(`<Rocket marginBottom={16}/>`), which the SVG ignores, so the spacing the author
asked for is not on the page. Each fix is a wrapper box and a visual decision,
which is why they were not made blind.

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
95-route `BrowserRouter`: without the fallback every deep link 404s instead of
reaching `index.html` for the router (and for the app's own `path="*"`
NotFound). `HANZO_STATIC_CSP` in the CR needs `api.hanzo.ai` in `connect-src`
for the chat widgets, and nothing else — the fonts are self-hosted by
@hanzo/design, so no `fonts.googleapis.com` / `fonts.gstatic.com`.

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
Running and a deep link returns 200 -> re-delegate DNS.

**The CR was never committed.** An earlier draft of this file claimed it was
"committed INERT"; that was aspirational. On `hanzoai/universe` at the forge
(`git.hanzo.ai` — `origin` in most local clones is stale and 404s) there is no
`operator/crs/` directory at all and no `hanzo-one` among the 105 files in
`charts/app/values/hanzo/`. The image was never published either: an anonymous
GHCR token for `hanzoai/hanzo-one` returns DENIED while the same request for
`hanzoai/static` returns a tag list. So step one of the promotion order is
still step one, and a competing half-path exists —
`universe/deploy/cf-pages-sites/build.sh` stages this site to
`_sites/hanzo.one/` behind the live `lattice-network.pages.dev`, which the
`Dockerfile` comment says does not exist. Pick one before promoting either.

The favicon is correct and is not a thing to re-fix: `public/favicon.svg`
(md5 `82b66e3073f0b6175e3be44e9bc4f169`) and `public/favicon.ico`
(`2b734c3be92658f9d07149a23c7ce83c`) are **byte-identical to the published
`@hanzo/logo` `dist/`**, verified against the installed 1.0.14 and re-verified
over the wire from the built `dist/`. Do not hand-edit them; they change when
`@hanzo/logo` publishes, and nowhere else. The footer renders `<HanzoLogo/>`.
`origin/fix/broken-links` (`eaf948d`) carried the same correction and can be
dropped.

## Notes

- Shares the same component library and routes as hanzo.app, hanzo.id, hanzo.network, and sensei.group. Only `OneLanding.tsx` and `index.html` metadata are unique.
- `index.html` links the real `@hanzo/logo` favicon (`public/favicon.svg`), not
  the `lovable-uploads` PNG, and pulls no Inter from Google Fonts —
  @hanzo/design ships Geist.
- `@hanzo/ui` is `^8.0.39` — the published line that dropped the shadcn backend
  and all 18 Radix dependencies from the package itself. `grep -c radix
  pnpm-lock.yaml` → 0, and so is `grep -c tailwind`. The site imports only
  `@hanzo/ui/product`, the gui-backend half.
- The `/shadcn-v4` page and its six sections are gone. They were never routed —
  `App.tsx` has no such path — and they were the last text in the repo naming
  Tailwind, shadcn or Radix.
- 253 of `src`'s 662 TS files are unreachable from `src/main.tsx`, including
  whole alternate landings (`index3`–`index6`, `zen/`) and pages `/privacy`,
  `/terms`, `/blog` and `/careers` link to but `App.tsx` never routes. They were
  left in place: this component library is shared by copy with hanzo.app,
  hanzo.id, hanzo.network and sensei.group, so deleting here diverges four other
  sites. Deciding that is a fleet call, not a repo call.

## The social proof was invented — all of it is gone

Every "trusted by" and testimonial block on this site was fabricated, and the
audit that found it only saw two of them because it rendered two of 95 routes.
Walking the import graph from each route found the rest. Removed, because there
is no honest version of a testimonial you do not have:

- **Real people, invented quotes** — `platform/TrustedBy` (`/platform`) put
  words in the mouths of six named executives at real companies (Jay Giraud at
  Damon, Marcus Weller at SKULLY, Sandro Mur at Bellabeat, and three more).
  `platform/DeveloperLove` (`/platform`) took real tweets praising **Coolify**
  — real handles, `@heybobjones`, `@fccoelho7`, `@BenjaminKlieger` — and
  swapped the product name to `@Hanzo`. `hanzodev/Testimonials` carried
  Anthropic's **Claude Code** testimonials (Anton Biryukov/Ramp, Fergal
  Reid/Intercom, Simon Last/Notion) with the product renamed. That class is a
  false-endorsement problem, not a copy problem.
- **Invented people** — `ai/Testimonials` (`/ai`), `home2/Testimonials`,
  `vector/Testimonials` (`/vector`), `hanzocode/HanzoCodeTestimonials`
  (`/code`, which still carried its scaffold comment "Just showing one
  testimonial for example").
- **Invented customers** — `ai/TrustedBy` claimed Microsoft/Airbnb/Netflix/
  Stripe/Amazon (its own comment admitted "Example logos — in a real
  implementation, these would be actual logo images"); `base/TrustedBy` claimed
  Mozilla/GitHub/1Password/PwC; `vector/TrustedBy` claimed OpenAI/Anthropic/
  Bloomberg; `analytics/TrustedBy` claimed AMD/Accenture/GM/Intel;
  `hanzocode/HanzoCodeCompanies` rendered one Lovable PNG five times as five
  distinct "Company N"; `cloud/Security` had "Trusted by teams at" over four
  empty grey rectangles.
- `landing/TrustedBySection` went too — its only verifiable fact is Techstars
  '17, which the About and History pages already carry, and it labelled
  NVIDIA/Google Cloud/Amazon/DigitalOcean/Nebius "Partners & Investors" when
  `Products.tsx` in this same repo lists Nebius as a compute vendor.
- The homepage CTA said "Join thousands of businesses running on Hanzo One" on
  a domain that has never once resolved.

The live canonical surface, hanzo.ai, ships no social proof at all, so this
also converges the two. **These components are copied into hanzo.app,
hanzo.id, hanzo.network and sensei.group — the same fabrications ship there
and need the same removal.**

## MotionText was inline, so every hero ran together

`MotionText` was declared `display: 'inline'` while `Paragraph` and `H1`-`H6`
right above it were declared `block` for exactly the stated reason ("reading
order breaks if they are not"). It was missed by that pass. Because inline
boxes ignore `marginBottom` and share a line, the eyebrow badge, the `H1` and
the lede collapsed onto one another in every hero built on the shared template
— measured as **18 colliding heading runs across 11 routed pages** (`/platform`,
`/base`, `/cloud`, `/dev`, `/app`, `/security`, `/status`, `/zen`,
`/open-source`, `/realtime`). One line in `src/gui/primitives.tsx` fixes all of
them; after it, 0. The two call sites that genuinely want inline flow already
say so themselves (`display="inline-flex"`), and the two `render="span"`
terminal cursors are flex children, which blockify either way.

`/base` also hotlinked its Hanzo mark from **uxwing.com**, a third-party
stock-icon site, and the image 404ed. It renders `<HanzoLogo/>` now. Two
external hotlinks remain and should go the same way if their pages are ever
routed: a giphy GIF in `LastSupper` (unreachable) and an Unsplash photo in
`operator/OperativeDemo` (`/operator`, decorative, loads today but is one CSP
tightening from breaking).
