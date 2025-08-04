import type { Metadata } from 'next'
import StructuredData from '../components/StructuredData'

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
      <body>{children}</body>
    </html>
  )
}