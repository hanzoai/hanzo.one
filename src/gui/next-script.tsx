// `next/script` for a site that is not Next.
//
// @hanzogui/next-theme — which @hanzo/ui/product's theme toggle sits on —
// renders its no-flash theme script through Next's <Script>. hanzo.one is a
// Vite SPA, where the plain element is exactly what <Script> would emit, so
// this is the whole shim (aliased in vite.config.ts).
import type { ComponentProps } from 'react'

export default function Script({ strategy, ...rest }: ComponentProps<'script'> & { strategy?: string }) {
  void strategy
  return <script {...rest} />
}
