import { cn } from '@/lib/utils'

export type CardProps = {
  children?: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('bg-white rounded-2xl border border-border/60 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md', className)}>
      {children}
    </div>
  )
}

export type CardImageProps = {
  src: string
  alt?: string
  className?: string
}

export function CardImage({ src, alt, className }: CardImageProps) {
  return (
    <div className={cn('h-48 bg-earth-50 overflow-hidden', className)}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}

export type CardContentProps = {
  children?: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('p-6', className)}>{children}</div>
}
