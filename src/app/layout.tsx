import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import { lab } from '@/data/site'

export const metadata: Metadata = {
  title: lab.name,
  description: lab.description,
  keywords: ['machine learning', 'data science', 'trustworthy AI', 'LLMs', 'fact-checking'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: lab.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
