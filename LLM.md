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

## Notes

- Shares the same component library and routes as hanzo.app, hanzo.id, hanzo.network, and sensei.group. Only `OneLanding.tsx` and `index.html` metadata are unique.
- Standard static SPA deployment (no edge middleware).
