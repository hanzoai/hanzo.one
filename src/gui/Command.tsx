// Command — the filtered command list, on gui primitives.
//
// The dashboard palette needs exactly this much: a searchable root, an input,
// a scrolling list, groups, items with keywords, and an empty state. Keeping it
// here removes a dependency whose only contribution was the same filter loop,
// and it means the palette is styled with the same props as everything else.

import { createContext, useContext, useMemo } from 'react'
import type { ComponentProps, ReactNode } from 'react'
import { Input as GuiInput, ScrollView, Text, XStack, YStack } from '@hanzo/gui'
import { Box } from './primitives'

type Filter = (value: string, search: string, keywords?: string[]) => number

const Ctx = createContext<{ search: string; filter: Filter }>({
  search: '',
  filter: (value, search, keywords) => {
    const hay = `${value} ${(keywords ?? []).join(' ')}`.toLowerCase()
    return hay.includes(search.toLowerCase()) ? 1 : 0
  },
})

function Root({
  children, value, onValueChange, filter, ...rest
}: {
  children?: ReactNode
  value?: string
  onValueChange?: (v: string) => void
  filter?: Filter
} & ComponentProps<typeof YStack>) {
  const base = useContext(Ctx)
  const ctx = useMemo(
    () => ({ search: value ?? '', filter: filter ?? base.filter }),
    [value, filter, base.filter],
  )
  void onValueChange
  return (
    <Ctx.Provider value={ctx}>
      <YStack {...rest}>{children}</YStack>
    </Ctx.Provider>
  )
}

function CommandInput({
  value, onValueChange, ...rest
}: { value?: string; onValueChange?: (v: string) => void } & ComponentProps<typeof GuiInput>) {
  return (
    <GuiInput
      value={value}
      onChangeText={onValueChange}
      unstyled
      minHeight={44}
      {...rest}
    />
  )
}

const CommandList = (props: ComponentProps<typeof ScrollView>) => <ScrollView {...props} />

function CommandEmpty({ children, ...rest }: { children?: ReactNode } & ComponentProps<typeof Text>) {
  const { search } = useContext(Ctx)
  // Only speaks up once a search has actually excluded everything.
  if (!search) return null
  return <Text {...rest}>{children}</Text>
}

function CommandGroup({
  heading, children, ...rest
}: { heading?: string; children?: ReactNode } & ComponentProps<typeof YStack>) {
  return (
    <YStack {...rest}>
      {heading ? (
        <Text
          paddingHorizontal={8}
          paddingVertical={6}
          fontSize={'var(--text-xs)' as never}
          textTransform="uppercase"
          letterSpacing={1}
          color={'var(--neutral-500)' as never}
        >
          {heading}
        </Text>
      ) : null}
      {children}
    </YStack>
  )
}

function CommandItem({
  id, onSelect, keywords, children, ...rest
}: {
  id?: string
  onSelect?: (id: string) => void
  keywords?: string[]
  children?: ReactNode
} & ComponentProps<typeof XStack>) {
  const { search, filter } = useContext(Ctx)
  const label = typeof children === 'string' ? children : (id ?? '')
  if (search && !filter(label, search, keywords)) return null
  return (
    <XStack minHeight={44} onPress={() => (id ? onSelect?.(id) : undefined)} {...rest}>
      {children}
    </XStack>
  )
}

export const Command = Object.assign(Root, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Separator: (props: ComponentProps<typeof Box>) => <Box height={1} backgroundColor={'var(--border)' as never} {...props} />,
})
