import { lab } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/news/',
  `News from the ${lab.fullName} at ${lab.university}: new papers, awards, talks, and lab members.`,
  'News',
)

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
