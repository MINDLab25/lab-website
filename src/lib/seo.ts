import type { Metadata } from 'next'
import { lab } from '@/data/site'

export const siteTitle = `${lab.fullName} | ${lab.university}`
export const titleSuffix = `${lab.name}, ${lab.university}`

const ogImage = '/images/mindlab-logo-horizontal.png'

/** Title, description, canonical URL and link-preview tags for one route. `path` needs a trailing slash. */
export function pageMetadata(path: string, description: string, title?: string): Metadata {
  return {
    ...(title && { title }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: lab.name,
      title: title ? `${title} | ${titleSuffix}` : siteTitle,
      description,
      url: path,
      images: [ogImage],
    },
  }
}
