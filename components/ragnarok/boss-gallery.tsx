'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { bosses, type Rarity } from '@/lib/site-data'
import { SectionHeading } from './brand'

export const rarityGlow: Record<Rarity, string> = {
  fire: 'from-red-500/70',
  shadow: 'from-slate-400/60',
  arcane: 'from-fuchsia-500/70',
  gold: 'from-amber-400/70',
  frost: 'from-sky-400/70',
  holy: 'from-pink-400/70',
}

export function BossGallery() {
  const track = useRef<HTMLUListElement>(null)
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section id="monsters" aria-labelledby="monsters-title" className="relative mx-auto max-w-7xl px-4 py-12">
      <SectionHeading id="monsters-title" title="MVP Boss Gallery" subtitle="Face the most legendary monsters in Ragnarok!" />

      <div className="relative mt-8">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Previous bosses"
          className="absolute top-1/2 -left-2 z-10 hidden -translate-y-1/2 rounded-full border-2 border-gold bg-secondary p-2 shadow-lg transition hover:bg-primary sm:block"
        >
          <ChevronLeft className="size-5" />
        </button>

        <ul
          ref={track}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none]"
        >
          {bosses.map((boss) => (
            <li key={boss.name} className="w-44 shrink-0 snap-start sm:w-52">
              <article className="group frame-gold relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src={boss.image}
                  alt={boss.name}
                  fill
                  sizes="208px"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${rarityGlow[boss.rarity]} via-transparent to-transparent opacity-80`} />
                <span className="absolute top-2 left-2 rounded-md bg-background/80 px-2 py-0.5 text-[11px] font-bold text-gold">
                  Lv. {boss.level}
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-background/80 px-2 py-2 text-center backdrop-blur-sm">
                  <h3 className="font-display text-sm font-bold">{boss.name}</h3>
                  <p className="text-[11px] text-muted-foreground">{boss.element}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Next bosses"
          className="absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 rounded-full border-2 border-gold bg-secondary p-2 shadow-lg transition hover:bg-primary sm:block"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </section>
  )
}
