import { SiteHeader } from '@/components/ragnarok/site-header'
import { Hero } from '@/components/ragnarok/hero'
import { BossGallery } from '@/components/ragnarok/boss-gallery'
import { CardCollection } from '@/components/ragnarok/card-collection'
import { EquipmentShowcase } from '@/components/ragnarok/equipment-showcase'
import { EventsSection } from '@/components/ragnarok/events-section'
import { CommunitySection } from '@/components/ragnarok/community-section'
import { SiteFooter } from '@/components/ragnarok/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="relative bg-[radial-gradient(ellipse_at_top,oklch(0.28_0.14_295),transparent_60%),radial-gradient(ellipse_at_bottom,oklch(0.25_0.12_320),transparent_60%)]">
        <Hero />
        <BossGallery />
        <CardCollection />
        <EquipmentShowcase />
        <EventsSection />
        <CommunitySection />
      </main>
      <SiteFooter />
    </>
  )
}
