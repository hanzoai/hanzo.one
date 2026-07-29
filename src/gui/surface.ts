/**
 * A filled brand surface, and the ONLY foreground allowed on it.
 *
 * A call site that picks a background without a paired foreground gets whatever
 * the page inherits — which is how "Learn more", "Talk to Security Team" and
 * "Apply for beta" shipped as white labels on near-white pills. Both halves
 * live here so no call site can state one without the other.
 */
export const FILL = {
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)',
} as const

/** The same pair for a quiet, non-primary fill. */
export const FILL_QUIET = {
  backgroundColor: 'var(--secondary)',
  color: 'var(--secondary-foreground)',
} as const
