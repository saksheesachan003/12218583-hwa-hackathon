import { cn } from '@/lib/utils'

export type BadgeProps = {
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'scent' | 'subscription'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  const variants = {
    default: 'bg-earth-100 text-earth-800',
    scent: 'bg-brand-100 text-brand-900',
    subscription: 'bg-bark-100 text-bark-900',
  }
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold', variants[variant], className)}>
      {children}
    </span>
  )
}
