// The ONE @hanzo/gui runtime config for hanzo.one.
//
// Built on @hanzogui's canonical v4 preset — the same preset every other Hanzo
// surface (world, console, sites) renders against — so this site inherits the
// ecosystem design system rather than re-declaring one. Brand values (colour,
// radius, type scale) ride on top as @hanzo/design CSS custom properties, which
// components address directly as `var(--…)`; this config supplies the primitive
// scales the @hanzogui/* stacks, text and controls resolve against.
//
// The v4 media queries are already the tailwind ramp, min-width first —
// $sm 640 / $md 768 / $lg 1024 / $xl 1280 / $2xl 1536, with $maxSm… for the
// max-width direction — so responsive props read exactly as the breakpoints do.
//
// House rule (same as world): LONGHAND style props only — backgroundColor,
// paddingHorizontal, alignItems — never the v4 shorthands. One explicit,
// CSS-familiar vocabulary that also matches @hanzo/design's token names.
import { defaultConfig } from '@hanzogui/config/v4'
import { createGui } from '@hanzo/gui'

export const guiConfig = createGui(defaultConfig)

export default guiConfig
