import type { MetadataRoute } from 'next'
import { lab } from '@/data/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/team/', '/publications/', '/news/', '/resources/'].map((path) => ({
    url: `${lab.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }))
}
