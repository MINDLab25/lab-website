import { lab, publications } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

export const metadata = pageMetadata(
  '/publications/',
  `Papers from the ${lab.fullName} at ${lab.university} on trustworthy AI, human–AI collaboration, and multimodal LLMs.`,
  'Publications',
)

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': publications.map((pub) => ({
    '@type': 'ScholarlyArticle',
    headline: pub.title,
    author: pub.authors.map((name) => ({ '@type': 'Person', name })),
    datePublished: String(pub.year),
    abstract: pub.abstract,
    ...(pub.links.pdf && { url: pub.links.pdf }),
  })),
}

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  )
}
