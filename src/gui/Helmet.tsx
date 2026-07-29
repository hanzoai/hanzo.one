// Helmet — document head from the page that owns it.
//
// The pages already express their head as JSX (`<title>`, `<meta>`), so this
// keeps that exact authoring shape and applies it to `document` directly. It
// replaces a dependency that had not shipped a React 19 release, and it is
// twenty lines.

import { useEffect } from 'react'
import { Children, isValidElement } from 'react'
import type { ReactNode } from 'react'

function apply(node: ReactNode, undo: (() => void)[]) {
  Children.forEach(node, (child) => {
    if (!isValidElement(child)) return
    const type = child.type as string
    const props = child.props as Record<string, string>
    if (type === 'title') {
      const prev = document.title
      document.title = String(props.children ?? '')
      undo.push(() => { document.title = prev })
      return
    }
    if (type !== 'meta' && type !== 'link') return
    const key = props.name ? 'name' : props.property ? 'property' : 'rel'
    const sel = `${type}[${key}="${props[key]}"]`
    const existing = document.head.querySelector(sel)
    const el = existing ?? document.createElement(type)
    const before: Record<string, string | null> = {}
    for (const [k, v] of Object.entries(props)) {
      if (k === 'children') continue
      before[k] = el.getAttribute(k)
      el.setAttribute(k, String(v))
    }
    if (!existing) {
      document.head.appendChild(el)
      undo.push(() => el.remove())
    } else {
      undo.push(() => {
        for (const [k, v] of Object.entries(before)) {
          if (v == null) el.removeAttribute(k); else el.setAttribute(k, v)
        }
      })
    }
  })
}

export function Helmet({ children }: { children?: ReactNode }) {
  useEffect(() => {
    const undo: (() => void)[] = []
    apply(children, undo)
    return () => { for (const fn of undo.reverse()) fn() }
  })
  return null
}

export default Helmet
