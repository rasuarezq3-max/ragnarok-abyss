'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site-data'
import { Logo } from './brand'
import { DiscordIcon } from './discord-icon'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home" aria-label={`${site.name} ${site.subtitle} home`}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-border bg-secondary/70 px-2 py-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-full px-4 py-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary/30 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl border-2 border-primary bg-primary/20 px-4 py-2 text-sm font-bold shadow-[0_0_16px_oklch(0.6_0.22_295/0.6)] transition hover:bg-primary/40 sm:flex"
          >
            <DiscordIcon className="size-5" />
            Join Our Discord
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 flex items-center gap-2 rounded-lg bg-primary px-3 py-2.5 font-bold text-primary-foreground"
              >
                <DiscordIcon className="size-5" /> Join Our Discord
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
