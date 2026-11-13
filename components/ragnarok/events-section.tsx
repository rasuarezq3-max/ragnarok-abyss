import Image from 'next/image'
import { events } from '@/lib/site-data'
import { SectionHeading } from './brand'

export function EventsSection() {
  return (
    <section id="events" aria-labelledby="events-title" className="relative mx-auto max-w-7xl px-4 py-12">
      <SectionHeading id="events-title" title="Events & Activities" subtitle="Join exciting events and earn amazing rewards!" />

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <li key={event.title}>
            <article className="group frame-gold relative aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={event.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 300px, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <span className="absolute top-2 right-2 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-extrabold text-accent-foreground">
                {event.tag}
              </span>
              <h3 className="absolute inset-x-0 bottom-3 px-3 text-center font-display text-lg font-bold leading-tight drop-shadow-[0_2px_4px_black]">
                {event.title}
              </h3>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
