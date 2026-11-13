import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { cards, site } from '@/lib/site-data'
import { SectionHeading } from './brand'
import { rarityGlow } from './boss-gallery'

export function CardCollection() {
  return (
    <section id="cards" aria-labelledby="cards-title" className="relative mx-auto max-w-7xl px-4 py-12">
      <SectionHeading id="cards-title" title="Card Collection" subtitle="Discover Rare Cards from the World of Ragnarok!" />

      <div className="mt-8 grid items-center gap-6 lg:grid-cols-[220px_1fr_220px]">
        <Image
          src="/images/chibi-mage.png"
          alt="Chibi girl with a red ribbon hugging a poring"
          width={1024}
          height={1024}
          className="fade-mask animate-float mx-auto hidden h-auto w-full max-w-[220px] lg:block"
        />

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-6">
          {cards.map((card, i) => (
            <li key={card.name}>
              <article
                className={`group relative aspect-[2/3] overflow-hidden rounded-lg border-[3px] border-gold bg-card p-1.5 shadow-[0_0_20px_oklch(0.6_0.22_295/0.5)] transition duration-300 hover:-translate-y-2 hover:rotate-0 ${i % 2 ? 'rotate-2' : '-rotate-2'}`}
              >
                <div className="relative h-full overflow-hidden rounded-md">
                  <Image src={card.image} alt="" fill sizes="180px" className="object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${rarityGlow[card.rarity]} via-transparent to-transparent`} />
                  <div className="absolute inset-x-0 bottom-0 p-2 text-center">
                    <h3 className="font-display text-xs font-bold italic drop-shadow">{card.name}</h3>
                    <p className="mt-0.5 text-[10px] leading-tight opacity-0 transition group-hover:opacity-100">
                      {card.effect}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <aside className="frame-gold flex flex-col items-center rounded-xl bg-card/90 p-6 text-center">
          <p className="font-display text-xl font-bold uppercase leading-tight">
            Collect
            <br />
            All Cards
          </p>
          <p className="mt-3 text-sm text-muted-foreground">Complete your Ragnarok journey!</p>
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold bg-primary px-5 py-2 text-sm font-bold transition hover:bg-primary/80"
          >
            View Cards <ArrowRight className="size-4" />
          </a>
        </aside>
      </div>
    </section>
  )
}
