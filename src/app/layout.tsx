import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import JsonLd from '@/components/JsonLd'
import { lab } from '@/data/site'
import { pageMetadata, siteTitle, titleSuffix } from '@/lib/seo'

export const metadata: Metadata = {
  ...pageMetadata('/', lab.seoDescription),
  metadataBase: new URL(`${lab.url}/`),
  title: { default: siteTitle, template: `%s | ${titleSuffix}` },
  keywords: [
    lab.name,
    lab.fullName,
    lab.university,
    'Xinyi Zhou',
    'trustworthy AI',
    'human-AI collaboration',
    'multimodal LLMs',
    'machine learning',
    'data science',
    'fact-checking',
  ],
  twitter: { card: 'summary' },
  verification: { google: 'GWBdkWIzWY8hvcU4XoR6BjvCkbW0LWwh0TvKCKB7tRA' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ResearchOrganization',
      '@id': `${lab.url}/#lab`,
      name: lab.fullName,
      alternateName: [lab.name, 'MINDLab'],
      url: `${lab.url}/`,
      logo: `${lab.url}/images/mindlab-logo-symbol.png`,
      description: lab.seoDescription,
      email: lab.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: lab.room,
        addressLocality: 'Boise',
        addressRegion: 'ID',
        postalCode: '83702',
        addressCountry: 'US',
      },
      parentOrganization: {
        '@type': 'CollegeOrUniversity',
        name: lab.university,
        url: 'https://www.boisestate.edu/',
      },
      sameAs: [lab.github, lab.twitter, lab.linkedin, lab.googleScholar].filter(Boolean),
    },
    {
      '@type': 'WebSite',
      name: lab.name,
      alternateName: lab.fullName,
      url: `${lab.url}/`,
      publisher: { '@id': `${lab.url}/#lab` },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <JsonLd data={jsonLd} />
      </head>
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
