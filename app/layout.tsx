export const metadata = {
  title: 'J. Vale - Fantasy Author',
  description: 'Official website of J. Vale, author of The Veilbound Saga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}