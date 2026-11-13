import Image from 'next/image'
import { ArrowRight, CalendarDays, Gem, Shield, Skull, Trophy } from 'lucide-react'
import { features, site } from '@/lib/site-data'
import { Logo } from './brand'

const icons = { skull: Skull, gem: Gem, shield: Shield, trophy: Trophy, calendar: CalendarDays }

export function Hero() {
  return (
    <section id="home" aria-label="Welcome" className="relative overflow-hidden">
      <Image src="/images/hero-bg.png" alt="" fill priority className="object-cover object-center" sizes="100vw" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 pt-10 pb-8 md:grid-cols-[1fr_1.3fr_1fr] md:pt-16">
        <div className="order-2 mx-auto w-full max-w-sm md:order-1">
          <Image
            src="/images/chibi-heroes.png"
            alt="Chibi swordsman and priestess with a pink poring"
            width={1408}
            height={768}
            className="fade-mask animate-float h-auto w-full"
          />
        </div>

        <div className="order-1 flex flex-col items-center text-center md:order-2">
          <Logo size="lg" as="h1" />
          <p className="mt-4 flex items-center gap-3 font-display text-lg font-bold uppercase tracking-widest sm:text-xl">
            {site.tagline.map((word, i) => (
              <span key={word} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden className="text-gold">{'•'}</span>}
                {word}
              </span>
            ))}
          </p>
          <p className="mt-4 max-w-sm text-pretty text-lg italic text-muted-foreground">{`"${site.quote}"`}</p>
          <a
            href={site.joinUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-gold/80 bg-gradient-to-b from-primary to-[oklch(0.45_0.22_295)] px-8 py-3 font-display text-lg font-bold uppercase shadow-[0_0_28px_oklch(0.6_0.22_295/0.8)] transition hover:scale-105"
          >
            Join Now <ArrowRight className="size-5" />
          </a>
        </div>

        <div className="order-3 mx-auto hidden w-full max-w-[260px] md:block">
          <Image
            src="/images/poring-king.png"
            alt="Winged king poring with a golden crown"
            width={1024}
            height={1024}
            className="fade-mask animate-float h-auto w-full [animation-delay:1.2s]"
          />
        </div>
      </div>

      <nav aria-label="Highlights" className="relative mx-auto max-w-7xl px-4 pb-12">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((f) => {
            const Icon = icons[f.icon]
            return (
              <li key={f.title}>
                <a
                  href={f.href}
                  className="group flex items-center gap-3 rounded-xl border border-gold/50 bg-card/80 p-3 backdrop-blur transition hover:-translate-y-1 hover:border-gold"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary ring-1 ring-gold/60">
                    <Icon className="size-6 text-gold" aria-hidden />
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-sm font-bold">{f.title}</span>
                    <span className="block text-xs text-muted-foreground">{f.subtitle}</span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </section>
  )
}
