import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { communityPerks, site } from '@/lib/site-data'
import { SectionHeading } from './brand'
import { DiscordIcon } from './discord-icon'

export function CommunitySection() {
  return (
    <section id="community" aria-labelledby="community-title" className="relative mx-auto max-w-7xl px-4 py-12">
      <SectionHeading id="community-title" title="Join Our Community" subtitle="Be part of the Ragnarok Abyss family!" />

      <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1fr_1.2fr_1fr]">
        <Image
          src="/images/chibi-community.png"
          alt="Chibi mage and warrior waving together with porings"
          width={1408}
          height={768}
          className="fade-mask mx-auto h-auto w-full max-w-sm"
        />

        <a
          href={site.discordUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-5 rounded-3xl border-2 border-primary bg-gradient-to-br from-[oklch(0.45_0.2_275)] to-secondary p-6 shadow-[0_0_40px_oklch(0.6_0.22_295/0.6)] transition hover:scale-[1.02]"
        >
          <span className="grid size-20 shrink-0 place-items-center rounded-2xl bg-[#5865F2] shadow-lg">
            <DiscordIcon className="size-12 text-white" />
          </span>
          <span>
            <span className="block font-display text-2xl font-bold sm:text-3xl">Join Our Discord</span>
            <span className="block font-semibold text-gold">{site.discordLabel}</span>
            <span className="mt-1 block text-sm text-muted-foreground">{'Connect • Share • Play Together'}</span>
          </span>
        </a>

        <ul className="mx-auto w-full max-w-xs -rotate-2 space-y-3 rounded-lg border-2 border-[oklch(0.6_0.1_70)] bg-[oklch(0.9_0.05_85)] p-6 text-[oklch(0.3_0.05_60)] shadow-xl">
          {communityPerks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 font-bold">
              <CheckCircle2 className="size-5 shrink-0 text-[oklch(0.6_0.15_70)]" aria-hidden />
              {perk}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
