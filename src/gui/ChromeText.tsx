// ChromeText — the brushed-metal headline treatment, on gui primitives.
//
// The gradient tracks the pointer, which is the whole effect; it is expressed
// as a `backgroundPosition` style prop on a gui Text rather than a stylesheet
// class, so it composes with every other prop the call site passes.

import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Text, YStack } from '@hanzo/gui'

export interface ChromeTextProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  preHeading?: string
  [prop: string]: unknown
}

const CHROME = 'linear-gradient(90deg, var(--neutral-400), var(--foreground), var(--neutral-400))'

export function ChromeText({ children, as = 'h1', preHeading, ...rest }: ChromeTextProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      setPos({
        x: ((e.clientX - r.left) / (r.width || 1)) * 100,
        y: ((e.clientY - r.top) / (r.height || 1)) * 100,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <YStack alignItems={preHeading ? 'center' : 'flex-start'}>
      {preHeading ? (
        <Text
          paddingHorizontal={16}
          paddingVertical={4}
          marginBottom={16}
          borderRadius={'var(--radius-full)' as never}
          borderWidth={1}
          borderColor={'var(--border-strong)' as never}
          backgroundColor={'var(--white-05)' as never}
          color={'var(--neutral-300)' as never}
          fontSize={'var(--text-sm)' as never}
          fontWeight="500"
        >
          {preHeading}
        </Text>
      ) : null}
      <YStack ref={ref as never}>
        <Text
          render={as}
          backgroundImage={CHROME as never}
          backgroundSize="200% 100%"
          backgroundPosition={`${pos.x}% ${pos.y}%`}
          backgroundClip="text"
          color="transparent"
          lineHeight={1.3}
          paddingVertical={4}
          transition={'background-position 100ms ease' as never}
          {...rest}
        >
          {children}
        </Text>
      </YStack>
    </YStack>
  )
}

export default ChromeText
