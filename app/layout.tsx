import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cinzel, Nunito } from 'next/font/google'
import './globals.css'

const cinzel = Cinzel({ subsets: ['latin'], weight: ['600', '700', '900'], variable: '--font-cinzel' })
const nunito = Nunito({ subsets: ['latin'], weight: ['400', '600', '700', '800'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Ragnarok Abyss — Explore, Collect, Conquer',
  description:
    'Ragnarok Abyss: hunt MVP bosses, collect monster cards, gear up with rare equipment and join our chibi adventure community on Discord.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a0f3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
