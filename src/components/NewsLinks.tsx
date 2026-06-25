import type { NewsItem } from '@/data/site'

export default function NewsLinks({
  item,
  className = '',
}: {
  item: NewsItem
  className?: string
}) {
  if (!item.link) return null

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-1 text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
        Learn more
      </a>
    </div>
  )
}
