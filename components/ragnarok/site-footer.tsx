import { footerLinks, site } from '@/lib/site-data'
import { Logo } from './brand'
import { DiscordIcon } from './discord-icon'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.12_0.05_285)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <p className="text-sm italic text-muted-foreground">{`"${site.footerQuote}"`}</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Discord"
            className="grid size-10 place-items-center rounded-full border-2 border-gold bg-secondary transition hover:bg-primary"
          >
            <DiscordIcon className="size-5" />
          </a>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="text-xs text-muted-foreground">
          {`© ${site.year} ${site.name} ${site.subtitle}. All Rights Reserved.`}
        </p>
      </div>
    </footer>
  )
}
