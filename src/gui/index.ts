// The ONE UI surface for hanzo.one.
//
// @hanzo/ui components on the @hanzo/gui backend: gui supplies the primitives
// (stacks, text, controls, overlays), @hanzo/ui/product supplies the Hanzo
// product layer (brand mark, toasts, charts), @hanzo/design supplies the
// tokens, @hanzo/logo supplies the mark. Pages import from here and nowhere
// else — there is no second component vocabulary on this site.

// primitives — the gui box/text/stack vocabulary
export {
  View, ZStack, SizableText,
  Strong, Em, Span, Heading,
  Image, Spinner, ScrollView, Separator, Square, Circle,
  Theme, useTheme, styled, VisuallyHidden,
} from '@hanzo/gui'

export {
  Box, Grid, XStack, YStack, Text, Paragraph, Anchor,
  H1, H2, H3, H4, H5, H6, MotionBox, MotionText, Link,
} from './primitives'
export type { BoxProps, LinkProps } from './primitives'
export { guiConfig } from './config'

// the Hanzo product layer
export { BrandMark, HanzoMark, AnimatedLogo, FadeIn, StatusTag, MetricCard } from '@hanzo/ui/product'
export { HanzoLogo } from '@hanzo/logo/react'

// the site component surface
export * from './components'
export { ChromeText } from './ChromeText'
export { Command } from './Command'
export { Helmet } from './Helmet'
export { default as AnimatedSection, AnimatedHeading, AnimatedStaggerContainer } from './AnimatedSection'
export * from './animation-variants'
export * from './architectural'
export * from './MasonryGrid'
export { default as CodeBlock, CodeTabs } from './CodeBlock'
