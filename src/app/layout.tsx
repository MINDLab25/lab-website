import type { Metadata } from 'next'
import Script from 'next/script'
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
        <Script id="marker-io" strategy="afterInteractive">{`
          window.markerConfig = {
            project: '6a19dbad30d2f9f155937826',
            source: 'snippet'
          };
          !function(e,r,a){if(!e.__Marker){e.__Marker={};var t=[],n={__cs:t};["show","hide","isVisible","capture","cancelCapture","unload","reload","isExtensionInstalled","setReporter","clearReporter","setCustomData","on","off"].forEach(function(e){n[e]=function(){var r=Array.prototype.slice.call(arguments);r.unshift(e),t.push(r)}}),e.Marker=n;var s=r.createElement("script");s.async=1,s.src="https://edge.marker.io/latest/shim.js";var i=r.getElementsByTagName("script")[0];i.parentNode.insertBefore(s,i)}}(window,document);
        `}</Script>
      </body>
    </html>
  )
}
