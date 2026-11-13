import Image from 'next/image'
import { equipment } from '@/lib/site-data'
import { SectionHeading } from './brand'

export function EquipmentShowcase() {
  return (
    <section id="equipment" aria-labelledby="equipment-title" className="relative mx-auto max-w-7xl px-4 py-12">
      <SectionHeading id="equipment-title" title="Equipment Showcase" subtitle="Equip the best gear and become stronger!" />

      <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_300px]">
        <ul className="grid grid-cols-3 gap-4 sm:grid-cols-6">
          {equipment.map((item) => (
            <li key={item.name}>
              <article className="group text-center">
                <div className="frame-gold relative aspect-square overflow-hidden rounded-xl bg-card">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="160px"
                    className="object-cover transition duration-500 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>
                <h3 className="mt-2 font-display text-xs font-bold sm:text-sm">{item.name}</h3>
                <p className="text-[11px] text-muted-foreground">{item.slot}</p>
              </article>
            </li>
          ))}
        </ul>

        <Image
          src="/images/chibi-knight.png"
          alt="Chibi knight giving a thumbs up next to a treasure chest"
          width={1024}
          height={1024}
          className="fade-mask animate-float mx-auto h-auto w-full max-w-[300px]"
        />
      </div>
    </section>
  )
}
