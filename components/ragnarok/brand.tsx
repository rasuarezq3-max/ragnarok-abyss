import { cn } from '@/lib/utils'
import { site } from '@/lib/site-data'

export function Logo({ size = 'sm', as: Tag = 'div' }: { size?: 'sm' | 'lg'; as?: 'div' | 'h1' }) {
  const large = size === 'lg'
  return (
    <Tag className="flex flex-col items-center leading-none select-none">
      <span
        className={cn(
          'font-display font-black italic tracking-tight text-foreground drop-shadow-[0_0_12px_oklch(0.6_0.22_295)]',
          large ? 'text-6xl sm:text-7xl md:text-8xl' : 'text-2xl',
        )}
      >
        {site.name}
      </span>
      <span
        className={cn(
          'font-display font-black uppercase text-arcane-gradient drop-shadow-[0_0_18px_oklch(0.6_0.25_310)]',
          large ? '-mt-1 text-5xl sm:text-6xl md:text-7xl' : '-mt-0.5 text-lg',
        )}
      >
        {site.subtitle}
      </span>
    </Tag>
  )
}

export function SectionHeading({
  title,
  subtitle,
  id,
  className,
}: {
  title: string
  subtitle: string
  id?: string
  className?: string
}) {
  return (
    <div className={cn('flex flex-col items-center text-center', className)}>
      <div className="relative px-10 py-2">
        <div
          aria-hidden
          className="absolute inset-0 -skew-x-12 rounded-md border border-gold/60 bg-gradient-to-r from-transparent via-secondary to-transparent"
        />
        <h2 id={id} className="relative font-display text-2xl font-bold uppercase text-gold-gradient sm:text-3xl">
          {title}
        </h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  )
}
