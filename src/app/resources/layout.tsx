import { lab } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata(
  '/resources/',
  `Datasets, code, and tools released by the ${lab.fullName} at ${lab.university}.`,
  'Resources',
)

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
