// The site's component surface, built from @hanzo/gui primitives and
// @hanzo/ui/product. Everything the pages used to import from a local shadcn
// copy now resolves here, with the same names — one component vocabulary,
// rendered on one backend.
//
// Sizing follows the Hanzo design tokens (@hanzo/design) and the 44px minimum
// touch target, so the same components are usable on a phone.

import { forwardRef } from 'react'
import type { ComponentProps, ReactNode } from 'react'
import {
  styled, View, XStack, YStack, Text, Paragraph,
  Button as GuiButton, Input as GuiInput, TextArea as GuiTextArea,
  Label as GuiLabel, Separator as GuiSeparator, Progress as GuiProgress,
  Switch as GuiSwitch, Slider as GuiSlider, Checkbox as GuiCheckbox,
  RadioGroup as GuiRadioGroup, Avatar as GuiAvatar, ScrollView,
  Tabs as GuiTabs, Accordion as GuiAccordion, Dialog as GuiDialog,
  Popover as GuiPopover, Tooltip as GuiTooltip, Select as GuiSelect,
  Sheet as GuiSheet, Spinner, Adapt } from '@hanzo/gui'
import { Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from 'lucide-react'
import { Box, Grid, asWeb } from './primitives'

export const TOUCH = 44

// ---------------------------------------------------------------------------
// Button
// ---------------------------------------------------------------------------

/** The one button. Monochrome by design — emphasis comes from fill, not hue. */
export const Button = asWeb<typeof GuiButton, { variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'; size?: 'default' | 'sm' | 'lg' | 'icon' }>(styled(GuiButton, {
  name: 'Button',
  borderRadius: 'var(--radius-sm)' as never,
  fontWeight: '500',
  cursor: 'pointer',
  borderWidth: 1,
  borderColor: 'transparent',
  transition: 'background-color 150ms ease, border-color 150ms ease, opacity 150ms ease' as never,

  variants: {
    variant: {
      default: {
        backgroundColor: 'var(--primary)' as never,
        color: 'var(--primary-foreground)' as never,
        hoverStyle: { opacity: 0.9 },
        pressStyle: { opacity: 0.8 },
      },
      secondary: {
        backgroundColor: 'var(--secondary)' as never,
        color: 'var(--secondary-foreground)' as never,
        hoverStyle: { backgroundColor: 'var(--accent)' as never },
      },
      destructive: {
        backgroundColor: 'var(--destructive)' as never,
        color: 'var(--destructive-foreground)' as never,
        hoverStyle: { opacity: 0.9 },
      },
      outline: {
        backgroundColor: 'transparent',
        borderColor: 'var(--border-strong)' as never,
        color: 'var(--foreground)' as never,
        hoverStyle: { backgroundColor: 'var(--accent)' as never },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--foreground)' as never,
        hoverStyle: { backgroundColor: 'var(--accent)' as never },
      },
      link: {
        backgroundColor: 'transparent',
        color: 'var(--foreground)' as never,
        textDecorationLine: 'underline',
        paddingHorizontal: 0,
      },
    },
    size: {
      // 44px is the minimum comfortable touch target; the default IS that size.
      default: { height: TOUCH, paddingHorizontal: 20, fontSize: 'var(--text-sm)' as never },
      // Dense on a pointer device, still a 44px target on a phone.
      sm: { height: 36, paddingHorizontal: 14, fontSize: 'var(--text-xs)' as never, $maxSm: { height: TOUCH } },
      lg: { height: 52, paddingHorizontal: 28, fontSize: 'var(--text-base)' as never },
      icon: { height: TOUCH, width: TOUCH, paddingHorizontal: 0 },
    },
  } as const,

  defaultVariants: { variant: 'default', size: 'default' },
}))

export type ButtonProps = ComponentProps<typeof Button>
/** Kept for call sites that referenced the old class-variance helper. */
export const buttonVariants = () => undefined

// ---------------------------------------------------------------------------
// Surfaces
// ---------------------------------------------------------------------------

export const Card = asWeb<typeof YStack>(styled(YStack, {
  name: 'Card',
  backgroundColor: 'var(--card)' as never,
  borderWidth: 1,
  borderColor: 'var(--border)' as never,
  borderRadius: 'var(--radius-lg)' as never,
  overflow: 'hidden',
}))
export const CardHeader = asWeb<typeof YStack>(styled(YStack, { name: 'CardHeader', padding: 24, gap: 6,
}))
export const CardTitle = asWeb<typeof Text>(styled(Text, {
  name: 'CardTitle', fontSize: 'var(--text-lg)' as never, fontWeight: '600',
  color: 'var(--card-foreground)' as never,
}))
export const CardDescription = asWeb<typeof Text>(styled(Text, {
  name: 'CardDescription', fontSize: 'var(--text-sm)' as never,
  color: 'var(--muted-foreground)' as never,
}))
export const CardContent = asWeb<typeof Box>(styled(Box, { name: 'CardContent', paddingHorizontal: 24, paddingBottom: 24,
}))
export const CardFooter = asWeb<typeof XStack>(styled(XStack, {
  name: 'CardFooter', paddingHorizontal: 24, paddingBottom: 24, alignItems: 'center', gap: 8,
}))

export const Badge = asWeb<typeof XStack, { variant?: 'default' | 'secondary' | 'destructive' | 'outline' }>(styled(XStack, {
  name: 'Badge',
  alignItems: 'center',
  alignSelf: 'flex-start',
  paddingHorizontal: 10,
  paddingVertical: 3,
  borderRadius: 'var(--radius-full)' as never,
  borderWidth: 1,
  borderColor: 'var(--border)' as never,
  backgroundColor: 'var(--secondary)' as never,
  variants: {
    variant: {
      default: { backgroundColor: 'var(--secondary)' as never },
      secondary: { backgroundColor: 'var(--muted)' as never },
      outline: { backgroundColor: 'transparent' },
      destructive: { backgroundColor: 'var(--destructive)' as never },
    },
  } as const,
  defaultVariants: { variant: 'default' },
}))
export const badgeVariants = () => undefined

export const Skeleton = asWeb<typeof Box>(styled(Box, {
  name: 'Skeleton',
  backgroundColor: 'var(--muted)' as never,
  borderRadius: 'var(--radius-sm)' as never,
  opacity: 0.6,
}))

export const Separator = GuiSeparator
export const Progress = GuiProgress
export const ScrollArea = asWeb<typeof ScrollView>(styled(ScrollView, { name: 'ScrollArea',
}))
export const ScrollBar = (_: { orientation?: string }) => null

// ---------------------------------------------------------------------------
// Form controls
// ---------------------------------------------------------------------------

export const Input = asWeb<typeof GuiInput>(styled(GuiInput, {
  name: 'Input',
  height: TOUCH,
  borderRadius: 'var(--radius-sm)' as never,
  borderColor: 'var(--border-strong)' as never,
  backgroundColor: 'var(--background)' as never,
  color: 'var(--foreground)' as never,
  fontSize: 'var(--text-sm)' as never,
}))
export type InputProps = ComponentProps<typeof Input>

export const Textarea = asWeb<typeof GuiTextArea>(styled(GuiTextArea, {
  name: 'Textarea',
  minHeight: 96,
  borderRadius: 'var(--radius-sm)' as never,
  borderColor: 'var(--border-strong)' as never,
  backgroundColor: 'var(--background)' as never,
  color: 'var(--foreground)' as never,
  fontSize: 'var(--text-sm)' as never,
}))
export type TextareaProps = ComponentProps<typeof Textarea>

export const Label = asWeb<typeof GuiLabel>(styled(GuiLabel, {
  name: 'Label',
  fontSize: 'var(--text-sm)' as never,
  color: 'var(--foreground)' as never,
  cursor: 'pointer',
}))

export const Switch = forwardRef<never, ComponentProps<typeof GuiSwitch> & { onCheckedChange?: (v: boolean) => void }>(
  function Switch({ onCheckedChange, ...rest }, ref) {
    return (
      <GuiSwitch ref={ref} minWidth={TOUCH} onCheckedChange={onCheckedChange} {...rest}>
        <GuiSwitch.Thumb animation="quick" />
      </GuiSwitch>
    )
  },
)

export const Checkbox = forwardRef<never, ComponentProps<typeof GuiCheckbox> & { onCheckedChange?: (v: boolean) => void }>(
  function Checkbox({ onCheckedChange, ...rest }, ref) {
    return (
      <GuiCheckbox ref={ref} onCheckedChange={onCheckedChange} {...rest}>
        <GuiCheckbox.Indicator>
          <Check size={14} />
        </GuiCheckbox.Indicator>
      </GuiCheckbox>
    )
  },
)

export const Slider = forwardRef<never, ComponentProps<typeof GuiSlider>>(function Slider(props, ref) {
  return (
    <GuiSlider ref={ref} minHeight={TOUCH} {...props}>
      <GuiSlider.Track>
        <GuiSlider.TrackActive />
      </GuiSlider.Track>
      <GuiSlider.Thumb index={0} circular size={20} />
    </GuiSlider>
  )
})

export const RadioGroup = GuiRadioGroup
export const RadioGroupItem = forwardRef<never, ComponentProps<typeof GuiRadioGroup.Item>>(
  function RadioGroupItem(props, ref) {
    return (
      <GuiRadioGroup.Item ref={ref} {...props}>
        <GuiRadioGroup.Indicator />
      </GuiRadioGroup.Item>
    )
  },
)

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------

export const Avatar = asWeb<typeof GuiAvatar>(styled(GuiAvatar, { name: 'Avatar', circular: true, size: '$4',
}))
export const AvatarImage = GuiAvatar.Image
export const AvatarFallback = GuiAvatar.Fallback

// ---------------------------------------------------------------------------
// Tabs / Accordion
// ---------------------------------------------------------------------------

export const Tabs = GuiTabs
export const TabsList = asWeb<typeof GuiTabs.List>(styled(GuiTabs.List, {
  name: 'TabsList',
  backgroundColor: 'var(--muted)' as never,
  borderRadius: 'var(--radius-sm)' as never,
  padding: 4,
  gap: 4,
}))
export const TabsTrigger = asWeb<typeof GuiTabs.Tab>(styled(GuiTabs.Tab, {
  name: 'TabsTrigger',
  height: 36,
  paddingHorizontal: 14,
  borderRadius: 'var(--radius-sm)' as never,
  backgroundColor: 'transparent',
  cursor: 'pointer',
}))
export const TabsContent = GuiTabs.Content

export const Accordion = GuiAccordion
export const AccordionItem = GuiAccordion.Item
export const AccordionTrigger = forwardRef<never, { children?: ReactNode } & Record<string, unknown>>(
  function AccordionTrigger({ children, ...rest }, ref) {
    return (
      <GuiAccordion.Trigger ref={ref as never} minHeight={TOUCH} {...rest}>
        {({ open }: { open: boolean }) => (
          <XStack alignItems="center" justifyContent="space-between" flex={1} gap={8}>
            <Text fontSize="var(--text-base)" fontWeight="500">{children as ReactNode}</Text>
            <ChevronDown size={16} style={{ transform: `rotate(${open ? 180 : 0}deg)` }} />
          </XStack>
        )}
      </GuiAccordion.Trigger>
    )
  },
)
export const AccordionContent = forwardRef<never, { children?: ReactNode } & Record<string, unknown>>(
  function AccordionContent({ children, ...rest }, ref) {
    return (
      <GuiAccordion.HeightAnimator animation="medium">
        <GuiAccordion.Content ref={ref as never} animation="medium" exitStyle={{ opacity: 0 }} {...rest}>
          {children}
        </GuiAccordion.Content>
      </GuiAccordion.HeightAnimator>
    )
  },
)

// ---------------------------------------------------------------------------
// Overlays
// ---------------------------------------------------------------------------

export const Dialog = GuiDialog
export const DialogTrigger = GuiDialog.Trigger
export const DialogPortal = GuiDialog.Portal
export const DialogClose = GuiDialog.Close
export const DialogOverlay = asWeb<typeof GuiDialog.Overlay>(styled(GuiDialog.Overlay, {
  name: 'DialogOverlay',
  backgroundColor: 'var(--surface-scrim)' as never,
}))
export const DialogContent = forwardRef<never, { children?: ReactNode } & Record<string, unknown>>(
  function DialogContent({ children, ...rest }, ref) {
    return (
      <GuiDialog.Portal>
        <DialogOverlay key="overlay" animation="quick" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <GuiDialog.Content
          ref={ref as never}
          key="content"
          gap={16}
          padding={24}
          maxWidth={560}
          width="90%"
          borderWidth={1}
          borderColor={'var(--border)' as never}
          backgroundColor={'var(--popover)' as never}
          borderRadius={'var(--radius-xl)' as never}
          {...rest}
        >
          {children}
          <GuiDialog.Close asChild>
            <Button size="icon" variant="ghost" position="absolute" top={8} right={8} aria-label="Close">
              <X size={18} />
            </Button>
          </GuiDialog.Close>
        </GuiDialog.Content>
      </GuiDialog.Portal>
    )
  },
)
export const DialogHeader = asWeb<typeof YStack>(styled(YStack, { name: 'DialogHeader', gap: 6,
}))
export const DialogFooter = asWeb<typeof XStack>(styled(XStack, { name: 'DialogFooter', gap: 8, justifyContent: 'flex-end',
}))
export const DialogTitle = GuiDialog.Title
export const DialogDescription = GuiDialog.Description

/** A side sheet, expressed with the same dialog machinery. */
export const Sheet = GuiDialog
export const SheetTrigger = GuiDialog.Trigger
export const SheetPortal = GuiDialog.Portal
export const SheetClose = GuiDialog.Close
export const SheetOverlay = DialogOverlay
export const SheetTitle = GuiDialog.Title
export const SheetDescription = GuiDialog.Description
export const SheetHeader = DialogHeader
export const SheetFooter = DialogFooter
export const SheetContent = forwardRef<
  never,
  { children?: ReactNode; side?: 'top' | 'bottom' | 'left' | 'right' } & Record<string, unknown>
>(function SheetContent({ children, side = 'right', ...rest }, ref) {
  const edge = side === 'left' ? { left: 0, top: 0, bottom: 0, width: 320 }
    : side === 'right' ? { right: 0, top: 0, bottom: 0, width: 320 }
      : side === 'top' ? { top: 0, left: 0, right: 0 }
        : { bottom: 0, left: 0, right: 0 }
  return (
    <GuiDialog.Portal>
      <DialogOverlay key="overlay" animation="quick" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
      <GuiDialog.Content
        ref={ref as never}
        key="content"
        position="fixed"
        padding={24}
        gap={16}
        borderWidth={1}
        borderColor={'var(--border)' as never}
        backgroundColor={'var(--popover)' as never}
        {...edge}
        {...rest}
      >
        {children}
      </GuiDialog.Content>
    </GuiDialog.Portal>
  )
})

export const Popover = GuiPopover
export const PopoverTrigger = GuiPopover.Trigger
export const PopoverContent = asWeb<typeof GuiPopover.Content>(styled(GuiPopover.Content, {
  name: 'PopoverContent',
  padding: 12,
  borderWidth: 1,
  borderColor: 'var(--border)' as never,
  backgroundColor: 'var(--surface-overlay)' as never,
  borderRadius: 'var(--radius-lg)' as never,
}))

export const TooltipProvider = GuiTooltip.Provider ?? (({ children }: { children?: ReactNode }) => <>{children}</>)
export const Tooltip = GuiTooltip
export const TooltipTrigger = GuiTooltip.Trigger
export const TooltipContent = asWeb<typeof GuiTooltip.Content>(styled(GuiTooltip.Content, {
  name: 'TooltipContent',
  paddingHorizontal: 10,
  paddingVertical: 6,
  borderRadius: 'var(--radius-sm)' as never,
  backgroundColor: 'var(--surface-overlay)' as never,
  borderWidth: 1,
  borderColor: 'var(--border)' as never,
}))

/** A dropdown menu — a popover holding a list of actions. */
export const DropdownMenu = GuiPopover
export const DropdownMenuTrigger = GuiPopover.Trigger
export const DropdownMenuContent = asWeb<typeof GuiPopover.Content>(styled(GuiPopover.Content, {
  name: 'DropdownMenuContent',
  padding: 4,
  minWidth: 180,
  borderWidth: 1,
  borderColor: 'var(--border)' as never,
  backgroundColor: 'var(--surface-overlay)' as never,
  borderRadius: 'var(--radius-lg)' as never,
}))
export const DropdownMenuItem = asWeb<typeof XStack>(styled(XStack, {
  name: 'DropdownMenuItem',
  minHeight: TOUCH,
  alignItems: 'center',
  gap: 8,
  paddingHorizontal: 10,
  borderRadius: 'var(--radius-sm)' as never,
  cursor: 'pointer',
  hoverStyle: { backgroundColor: 'var(--accent)' as never },
}))
export const DropdownMenuLabel = asWeb<typeof Text>(styled(Text, {
  name: 'DropdownMenuLabel', paddingHorizontal: 10, paddingVertical: 6,
  fontSize: 'var(--text-xs)' as never, color: 'var(--muted-foreground)' as never,
}))
export const DropdownMenuSeparator = asWeb<typeof GuiSeparator>(styled(GuiSeparator, { name: 'DropdownMenuSeparator', marginVertical: 4,
}))
export const DropdownMenuShortcut = asWeb<typeof Text>(styled(Text, {
  name: 'DropdownMenuShortcut', marginLeft: 'auto',
  fontSize: 'var(--text-xs)' as never, color: 'var(--muted-foreground)' as never,
}))
export const DropdownMenuGroup = YStack
export const DropdownMenuPortal = ({ children }: { children?: ReactNode }) => <>{children}</>
export const DropdownMenuSub = YStack
export const DropdownMenuSubContent = DropdownMenuContent
export const DropdownMenuSubTrigger = DropdownMenuItem
export const DropdownMenuCheckboxItem = DropdownMenuItem
export const DropdownMenuRadioItem = DropdownMenuItem
export const DropdownMenuRadioGroup = YStack

// ---------------------------------------------------------------------------
// Select
// ---------------------------------------------------------------------------

export const Select = GuiSelect
export const SelectGroup = GuiSelect.Group
export const SelectValue = GuiSelect.Value
export const SelectLabel = GuiSelect.Label
export const SelectSeparator = GuiSeparator
export const SelectScrollUpButton = GuiSelect.ScrollUpButton
export const SelectScrollDownButton = GuiSelect.ScrollDownButton
export const SelectTrigger = forwardRef<never, { children?: ReactNode } & Record<string, unknown>>(
  function SelectTrigger({ children, ...rest }, ref) {
    return (
      <GuiSelect.Trigger
        ref={ref as never}
        height={TOUCH}
        borderRadius={'var(--radius-sm)' as never}
        borderColor={'var(--border-strong)' as never}
        backgroundColor={'var(--background)' as never}
        iconAfter={<ChevronDown size={16} />}
        {...rest}
      >
        {children}
      </GuiSelect.Trigger>
    )
  },
)
export const SelectContent = ({ children, ...rest }: { children?: ReactNode } & Record<string, unknown>) => (
  <>
    <Adapt when="maxMd" platform="touch">
      <GuiSheet modal dismissOnSnapToBottom snapPointsMode="fit">
        <GuiSheet.Frame><Adapt.Contents /></GuiSheet.Frame>
        <GuiSheet.Overlay backgroundColor={'var(--surface-scrim)' as never} />
      </GuiSheet>
    </Adapt>
    <GuiSelect.Content zIndex={200000} {...rest}>
      <GuiSelect.ScrollUpButton alignItems="center" justifyContent="center" height={20}>
        <ChevronUp size={16} />
      </GuiSelect.ScrollUpButton>
      <GuiSelect.Viewport minWidth={200}>{children}</GuiSelect.Viewport>
      <GuiSelect.ScrollDownButton alignItems="center" justifyContent="center" height={20}>
        <ChevronDown size={16} />
      </GuiSelect.ScrollDownButton>
    </GuiSelect.Content>
  </>
)
export const SelectItem = forwardRef<never, { children?: ReactNode; value: string; index?: number } & Record<string, unknown>>(
  function SelectItem({ children, value, index = 0, ...rest }, ref) {
    return (
      <GuiSelect.Item ref={ref as never} index={index} value={value} minHeight={TOUCH} {...rest}>
        <GuiSelect.ItemText>{children}</GuiSelect.ItemText>
        <GuiSelect.ItemIndicator marginLeft="auto"><Check size={16} /></GuiSelect.ItemIndicator>
      </GuiSelect.Item>
    )
  },
)

// ---------------------------------------------------------------------------
// Table — CSS table display, so column widths still behave like a table
// ---------------------------------------------------------------------------

export const Table = asWeb<typeof Box>(styled(Box, { name: 'Table', render: 'table', display: 'table', width: '100%',
}))
export const TableHeader = asWeb<typeof Box>(styled(Box, { name: 'TableHeader', render: 'thead', display: 'table-header-group',
}))
export const TableBody = asWeb<typeof Box>(styled(Box, { name: 'TableBody', render: 'tbody', display: 'table-row-group',
}))
export const TableFooter = asWeb<typeof Box>(styled(Box, { name: 'TableFooter', render: 'tfoot', display: 'table-footer-group',
}))
export const TableRow = asWeb<typeof Box>(styled(Box, {
  name: 'TableRow', render: 'tr', display: 'table-row',
  borderBottomWidth: 1, borderBottomColor: 'var(--border)' as never,
}))
export const TableHead = asWeb<typeof Box>(styled(Box, {
  name: 'TableHead', render: 'th', display: 'table-cell',
  paddingVertical: 12, paddingHorizontal: 16, textAlign: 'left',
  fontSize: 'var(--text-xs)' as never, color: 'var(--muted-foreground)' as never,
}))
export const TableCell = asWeb<typeof Box>(styled(Box, {
  name: 'TableCell', render: 'td', display: 'table-cell',
  paddingVertical: 12, paddingHorizontal: 16, fontSize: 'var(--text-sm)' as never,
}))
export const TableCaption = asWeb<typeof Box>(styled(Box, { name: 'TableCaption', render: 'caption', display: 'table-caption',
}))

// ---------------------------------------------------------------------------
// Carousel — a snapping scroller with two 44px controls
// ---------------------------------------------------------------------------

export type CarouselApi = { scrollPrev: () => void; scrollNext: () => void }

export const Carousel = ({ children, ...rest }: { children?: ReactNode } & Record<string, unknown>) => (
  <Box position="relative" {...rest}>{children}</Box>
)
export const CarouselContent = asWeb<typeof XStack>(styled(XStack, {
  name: 'CarouselContent', overflowX: 'auto', gap: 16, scrollbarWidth: 'none',
}))
export const CarouselItem = asWeb<typeof Box>(styled(Box, { name: 'CarouselItem', flexShrink: 0,
}))
export const CarouselPrevious = (props: Record<string, unknown>) => (
  <Button size="icon" variant="outline" aria-label="Previous" {...props}><ChevronLeft size={18} /></Button>
)
export const CarouselNext = (props: Record<string, unknown>) => (
  <Button size="icon" variant="outline" aria-label="Next" {...props}><ChevronRight size={18} /></Button>
)

// ---------------------------------------------------------------------------
// Toast — the ONE feedback primitive, from @hanzo/ui/product
// ---------------------------------------------------------------------------

export { ToastProvider, useToast } from '@hanzo/ui/product'
export { Spinner }

/** `toast(...)` as a bare call, for the handful of non-hook call sites. */
export const toast = Object.assign(
  (input: { title?: string; description?: string }) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hanzo:toast', { detail: input }))
    }
  },
  { success: (t: string) => toast({ title: t }), error: (t: string) => toast({ title: t }) },
)

export const Toaster = () => null
export const Toast = ({ children }: { children?: ReactNode }) => <>{children}</>
export const ToastViewport = () => null
export const ToastTitle = Text
export const ToastDescription = Paragraph
export const ToastClose = () => null
export const ToastAction = Button
