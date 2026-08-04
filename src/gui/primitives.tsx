// The primitives this site is built from. Everything here is @hanzo/gui — the
// two boxes below exist only because gui's stacks are flex-first and the web
// needs `block` and `grid` displays as well.

import { forwardRef } from 'react'
import type React from 'react'
import type { ComponentProps, ComponentType, ReactNode } from 'react'
import {
  styled, View, Anchor as GuiAnchor,
  XStack as GuiXStack, YStack as GuiYStack,
  Text as GuiText, Paragraph as GuiParagraph,
  H1 as GuiH1, H2 as GuiH2, H3 as GuiH3, H4 as GuiH4, H5 as GuiH5, H6 as GuiH6,
} from '@hanzo/gui'
import { motion } from 'framer-motion'
import type { MotionProps } from 'framer-motion'
import { useHref, useLinkClickHandler } from 'react-router-dom'
import type { To } from 'react-router-dom'

// gui's stacks are React-Native-flavoured: they default to `flexShrink: 0`, so
// a child keeps its intrinsic width and a narrow viewport overflows. On the web
// a flex item defaults to `flex-shrink: 1`, which is the behaviour this site's
// layouts were written against — so every box here restores it. This is the one
// place that decision is made.
const web = { flexShrink: 1, minWidth: 0 } as const

// gui 7.3.0's PUBLISHED types have a `styled()` defect: the returned component's
// props collapse to the theme-value index signature (`[x: string]: `$${string}``),
// which swallows `children` (TS2745) and `render` (TS2322). gui's own primitives
// type correctly — `<XStack position="absolute">` checks clean — so the shape of
// a derived box is stated once, here, in terms of those. Without it the type
// layer reports ~25,000 errors the runtime does not have.
//
// DELETE the two casts below when @hanzo/gui's styled() types are fixed
// upstream; nothing else in the site depends on them.
/** What a box on the WEB accepts beyond gui's own React-Native-flavoured set. */
type WebExtras = {
  render?: string
  children?: ReactNode
  title?: string
  WebkitBackdropFilter?: string
  onSubmit?: React.FormEventHandler
  onChange?: React.ChangeEventHandler<HTMLInputElement & HTMLTextAreaElement>
  /* The DOM node, not gui's `GuiTextElement`: every ref on this site comes from
     `useRef<HTMLDivElement>` and measures a real element. `RefObject` is
     invariant in its element, so no single named type covers div/input/canvas
     /svg at once. */
  ref?: unknown
  required?: boolean
  checked?: boolean
  defaultChecked?: boolean
  /* DOM attributes the site hands to a box it `render`s as an img, iframe,
     textarea, input or svg. gui does not model them; the element does. */
  id?: string
  name?: string
  src?: string
  alt?: string
  rows?: number
  placeholder?: string
  allow?: string
  allowFullScreen?: boolean
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'auto' | 'sync'
  viewBox?: string
  xmlns?: string
  preserveAspectRatio?: string
  fill?: string
  stroke?: string
  d?: string
  strokeWidth?: number | string
  href?: string
  rel?: string
  target?: string
  colSpan?: number
  rowSpan?: number
  align?: string
  draggable?: boolean
}

/* The CSS values gui's React-Native enums do not admit — `display:inline-block`,
   `overflow:auto`, `border-style:none` — plus the props whose web spelling is a
   string. They REPLACE the narrow declarations rather than intersect with them,
   because an intersection of two enums is their overlap. */
type WebLoose = {
  type?: string
  value?: unknown
  color?: string
  display?: string
  overflow?: string
  overflowX?: string
  overflowY?: string
  borderStyle?: string
  position?: string
  transition?: string
  animation?: string
  whiteSpace?: string
  textOverflow?: string
  cursor?: string
  /* CSS gui has no React-Native counterpart for — the web box owns them. */
  WebkitLineClamp?: number
  WebkitBoxOrient?: string
  scrollbarWidth?: string
  listStyleType?: string
  gridTemplateRows?: string
  borderCollapse?: string
}

/* Both sets REPLACE the base's declaration, so they are omitted before the
   intersection: an intersection would keep gui's narrow type alongside the web
   one and every value would have to satisfy both (`Ref<GuiTextElement> &
   RefObject<HTMLDivElement>` is uninhabited). */
type WebProps<Base> = Omit<
  ComponentProps<Base extends ComponentType<infer _P> ? Base : never>,
  keyof WebLoose | keyof WebExtras
> &
  WebLoose &
  WebExtras

type Derived<Base, Extra = unknown> = ComponentType<WebProps<Base> & Extra>
const box = <E,>(c: unknown) => c as Derived<typeof GuiText, E>
const text = <E,>(c: unknown) => c as Derived<typeof GuiText, E>

/**
 * The same repair for a component derived from any gui base: keep the base's
 * own non-style props (`value`, `onValueChange`, `href`, …), add the web box
 * vocabulary and the component's declared variants. Same delete condition.
 *
 * `V` REPLACES the base's declaration of the same prop rather than intersecting
 * with it. gui's Card declares `variant?: 'outlined'` and this site's Card
 * declares `variant?: 'default' | 'outline' | …`; intersected, the only value
 * both admit is none, so every call site read `string is not assignable to
 * never`. Omitting `keyof V` first is what makes a re-declared variant mean the
 * new set. (`keyof unknown` is `never`, so a component with no extras is
 * unaffected.)
 */
export const asWeb = <B, V = unknown>(c: unknown) =>
  c as ComponentType<
    Omit<
      ComponentProps<B extends ComponentType<infer _P> ? B : never>,
      keyof WebProps<typeof GuiText> | keyof V
    > &
      WebProps<typeof GuiText> &
      V
  >

// Built on gui's Text rather than its View: a box on this site carries type
// alignment as often as it carries layout (`text-center` on a section is the
// commonest instruction in the whole codebase), and gui only honours text style
// props on text components. Same element, same box props, full vocabulary.
/** The block box — a `div` in CSS normal flow. `render` keeps the semantics. */
export const Box = box(styled(GuiText, {
  name: 'Box',
  render: 'div',
  display: 'block',
  ...web,
}))

/** The grid box. Track definitions arrive as `gridTemplateColumns`. */
export const Grid = box(styled(GuiText, {
  name: 'Grid',
  render: 'div',
  display: 'grid',
  ...web,
}))

/** Row and column stacks, with the same web shrink behaviour. */
export const XStack = box(styled(GuiText, {
  name: 'Row', render: 'div', display: 'flex', flexDirection: 'row', alignItems: 'stretch', ...web,
}))

export const YStack = box(styled(GuiText, {
  name: 'Col', render: 'div', display: 'flex', flexDirection: 'column', alignItems: 'stretch', ...web,
}))
export const Text = text(styled(GuiText, { name: 'Text', ...web }))

// gui's text primitives are inline (so nested text flows). A paragraph and a
// heading are block boxes in the markup this site is written in, and reading
// order breaks if they are not — so they are declared block here, once.
export const Paragraph = text(styled(GuiParagraph, { name: 'Paragraph', display: 'block', ...web }))
export const H1 = text(styled(GuiH1, { name: 'H1', display: 'block', ...web }))
export const H2 = text(styled(GuiH2, { name: 'H2', display: 'block', ...web }))
export const H3 = text(styled(GuiH3, { name: 'H3', display: 'block', ...web }))
export const H4 = text(styled(GuiH4, { name: 'H4', display: 'block', ...web }))
export const H5 = text(styled(GuiH5, { name: 'H5', display: 'block', ...web }))
export const H6 = text(styled(GuiH6, { name: 'H6', display: 'block', ...web }))

export type BoxProps = ComponentProps<typeof Box>

/**
 * Motion-driven boxes. framer-motion composes over the gui primitive rather
 * than around it, so a moving element keeps the same style-prop vocabulary as
 * a static one — one way to express a box, animated or not.
 */
// framer's `transition` is an animation Transition; gui's is the CSS shorthand
// string. Intersecting them yields `never`, so the motion boxes state that this
// one prop is either.
type Motion = Omit<MotionProps, 'transition' | 'style'> & {
  transition?: MotionProps['transition'] | string
  style?: React.CSSProperties
}

export const MotionBox = motion.create(Box) as ComponentType<
  Omit<ComponentProps<typeof Box>, 'transition' | 'style'> & Motion
>
export const MotionText = motion.create(
  box(styled(View, { name: 'MotionText', display: 'inline', ...web })),
) as ComponentType<Omit<ComponentProps<typeof Box>, 'transition' | 'style'> & Motion>

/**
 * A plain anchor — external links, mailto, in-page hashes.
 *
 * `tap` makes it a 44px tap target: the label does not move, the hit area
 * grows around it. Navigation surfaces (site nav, footer, menus) set it; links
 * inside prose and links wrapping a whole card do not, because an inline-flex
 * box there would either break the line or collapse the card it wraps.
 */
export const Anchor = text<{ tap?: boolean; href?: string; target?: string; rel?: string }>(
  styled(GuiAnchor, {
    name: 'Anchor',
    variants: {
      tap: {
        true: { display: 'inline-flex', alignItems: 'center', minHeight: 44 },
      },
    } as const,
  }),
)

/**
 * An in-app link: the same anchor with react-router's navigation. Keeps SPA
 * routing (no full reload) while styling exactly like every other gui element.
 */
export interface LinkProps extends Omit<ComponentProps<typeof Anchor>, 'href'> {
  to: To
  replace?: boolean
  state?: unknown
  children?: ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, replace, state, target, onPress, ...rest },
  ref,
) {
  const href = useHref(to)
  const handleClick = useLinkClickHandler(to, { replace, state, target })
  return (
    <Anchor
      ref={ref as never}
      href={href}
      target={target}
      cursor="pointer"
      textDecorationLine="none"
      color="inherit"
      onPress={(e: never) => {
        onPress?.(e)
        const ev = e as unknown as React.MouseEvent<HTMLAnchorElement>
        if (!ev?.defaultPrevented) handleClick(ev)
      }}
      {...rest}
    />
  )
})
