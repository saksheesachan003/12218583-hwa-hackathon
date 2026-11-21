import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

export type ButtonProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
  to?: string
  children?: React.ReactNode
  className?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  asChild = false,
  to,
  className,
  disabled,
  ...props
}, ref) => {
  const base = 'btn font-medium transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-earth-600 text-white shadow-lg shadow-earth-600/25 hover:bg-earth-700 hover:shadow-earth-600/40 hover:-translate-y-1',
    outline: 'border-2 border-earth-600 text-earth-600 bg-transparent hover:bg-earth-600 hover:text-white hover:-translate-y-1',
    ghost: 'text-earth-600 hover:bg-earth-100',
  }
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }
  const classes = cn(base, variants[variant], sizes[size], className)

  if (asChild && to) {
    return (
      <Link to={to} className={classes} {...(props as any)}>
        {props.children}
      </Link>
    )
  }

  return (
    <button
      ref={ref}
      className={classes}
      disabled={disabled}
      {...props}
    />
  )
})

Button.displayName = 'Button'
