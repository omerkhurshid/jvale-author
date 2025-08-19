import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import StructuredData from '../components/StructuredData'
import Navigation from '../components/Navigation'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://jvale-author.vercel.app'),
  title: {
    default: 'J. Vale - Fantasy Author | The Veilbound Saga',
    template: '%s | J. Vale'
  },
  description: 'Official website of J. Vale, author of The Veilbound Saga fantasy series. Discover tales of moonfire, shattered worlds, and magic that costs more than gold.',
  keywords: ['fantasy author', 'J Vale', 'Veilbound Saga', 'Marked by Moonfire', 'Shattered World', 'fantasy books', 'magic', 'moonfire'],
  authors: [{ name: 'J. Vale' }],
  creator: 'J. Vale',
  publisher: 'J. Vale',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jvale-author.vercel.app',
    title: 'J. Vale - Fantasy Author | The Veilbound Saga',
    description: 'Official website of J. Vale, author of The Veilbound Saga fantasy series. Discover tales of moonfire, shattered worlds, and magic that costs more than gold.',
    siteName: 'J. Vale - Fantasy Author',
    images: [
      {
        url: '/images/marked-by-moonfire-cover.jpg',
        width: 600,
        height: 900,
        alt: 'Marked by Moonfire book cover'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J. Vale - Fantasy Author | The Veilbound Saga',
    description: 'Official website of J. Vale, author of The Veilbound Saga fantasy series.',
    images: ['/images/marked-by-moonfire-cover.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        <footer className="border-t border-border/20 bg-background/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-foreground/60 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} J. Vale. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/contact"
                  className="text-foreground/60 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}