/**
 * Central content file — edit names, images, links and copy here.
 * Every section of the site reads from this file, so you rarely need to touch components.
 */

export const site = {
  name: 'Ragnarok',
  subtitle: 'Abyss',
  tagline: ['Explore', 'Collect', 'Conquer'],
  quote: 'Step into the world of Ragnarok, where legends never fade...',
  footerQuote: 'A World of Endless Adventure Awaits...',
  discordUrl: 'https://discord.gg/28eVFmS28',
  discordLabel: 'discord.gg/28eVFmS28',
  joinUrl: 'https://discord.gg/28eVFmS28',
  year: new Date().getFullYear(),
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Cards', href: '#cards' },
  { label: 'Monsters', href: '#monsters' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Events', href: '#events' },
  { label: 'Community', href: '#community' },
]

export const features = [
  { icon: 'skull', title: 'MVP Bosses', subtitle: 'Hunt the Legends', href: '#monsters' },
  { icon: 'gem', title: 'Monster Cards', subtitle: 'Collect & Upgrade', href: '#cards' },
  { icon: 'shield', title: 'Rare Equipment', subtitle: 'Gear Up Stronger', href: '#equipment' },
  { icon: 'trophy', title: 'Trophies', subtitle: 'Show Your Glory', href: '#events' },
  { icon: 'calendar', title: 'Events', subtitle: 'Never Miss Out', href: '#events' },
] as const

export type Rarity = 'fire' | 'shadow' | 'arcane' | 'gold' | 'frost' | 'holy'

export const bosses: { name: string; image: string; rarity: Rarity; level: number; element: string }[] = [
  { name: 'Baphomet', image: '/images/boss-baphomet.png', rarity: 'fire', level: 81, element: 'Shadow' },
  { name: 'Drake', image: '/images/boss-drake.png', rarity: 'frost', level: 91, element: 'Undead' },
  { name: 'Maya', image: '/images/boss-maya.png', rarity: 'arcane', level: 55, element: 'Earth' },
  { name: 'Golden Thief Bug', image: '/images/boss-gtb.png', rarity: 'gold', level: 65, element: 'Fire' },
  { name: 'Moonlight Flower', image: '/images/boss-moonlight.png', rarity: 'frost', level: 67, element: 'Fire' },
  { name: 'Poring', image: '/images/boss-poring.png', rarity: 'holy', level: 1, element: 'Water' },
  { name: 'Eddga', image: '/images/boss-eddga.png', rarity: 'fire', level: 65, element: 'Fire' },
  { name: 'Kiel D-01', image: '/images/boss-kiel.png', rarity: 'gold', level: 125, element: 'Shadow' },
]

export const cards: { name: string; image: string; rarity: Rarity; effect: string }[] = [
  { name: 'Baphomet Card', image: '/images/boss-baphomet.png', rarity: 'fire', effect: 'Splash damage on attack' },
  { name: 'Drake Card', image: '/images/boss-drake.png', rarity: 'shadow', effect: 'Ignore size penalty' },
  { name: 'Maya Card', image: '/images/boss-maya.png', rarity: 'arcane', effect: 'Reflect magic spells' },
  { name: 'Eddga Card', image: '/images/boss-eddga.png', rarity: 'fire', effect: 'Endure status' },
  { name: 'Kiel Card', image: '/images/boss-kiel.png', rarity: 'gold', effect: '-30% cast delay' },
  { name: 'Poring Card', image: '/images/boss-poring.png', rarity: 'holy', effect: '+2 LUK, +5 Perfect Dodge' },
]

export const equipment: { name: string; image: string; slot: string }[] = [
  { name: 'Valkyrie Helm', image: '/images/eq-helm.png', slot: 'Headgear' },
  { name: 'Royal Cape', image: '/images/eq-robe.png', slot: 'Garment' },
  { name: 'Golden Plate', image: '/images/eq-armor.png', slot: 'Armor' },
  { name: 'Wanderer Boots', image: '/images/eq-boots.png', slot: 'Footgear' },
  { name: 'Ring of Fate', image: '/images/eq-ring.png', slot: 'Accessory' },
  { name: 'Seraph Wings', image: '/images/eq-wings.png', slot: 'Costume' },
]

export const events: { title: string; image: string; tag: string }[] = [
  { title: 'MVP Hunt Challenge', image: '/images/event-mvp.png', tag: 'Weekly' },
  { title: 'Daily Quest Rewards', image: '/images/event-daily.png', tag: 'Daily' },
  { title: 'Ragnarok Festival', image: '/images/event-festival.png', tag: 'Limited' },
  { title: 'Guild War Showdown', image: '/images/event-guild.png', tag: 'Sat & Sun' },
]

export const communityPerks = [
  'Stay Updated',
  'Get the Latest News',
  'Meet Fellow Players',
  'Be Part of Our Adventure!',
]

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#community' },
  { label: 'Contact', href: 'https://discord.gg/28eVFmS28' },
  { label: 'Privacy Policy', href: '#' },
]
