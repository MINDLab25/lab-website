import { news } from '@/data/site'
import SectionHeading from '@/components/SectionHeading'
import NewsLinks from '@/components/NewsLinks'
import { formatDate } from '@/lib/utils'
import { newsTypeKicker, newsTypeLabel } from '@/lib/constants'

const MAX_HOME_NEWS = 6

const sortedNews = [...news].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)
const remainingNews = sortedNews.length - MAX_HOME_NEWS

export default function NewsSection({
  expanded,
  onToggle,
}: {
  expanded: boolean
  onToggle: () => void
}) {
  const visibleNews = expanded ? sortedNews : sortedNews.slice(0, MAX_HOME_NEWS)
  return (
    <section id="news" className="bg-white">
      <div className="container-content py-16 md:py-20">
        <SectionHeading>News</SectionHeading>
        <div className="space-y-3">
          {visibleNews.map((item) => (
            <article
              key={item.id}
              className="flex gap-4 p-4 rounded-xl border border-surface-border bg-white hover:border-surface-border-strong hover:shadow-sm transition-all group"
            >
              <div className="hidden sm:block w-0.5 shrink-0 self-stretch rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-20 group-hover:opacity-70 transition-opacity" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${newsTypeKicker[item.type].text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${newsTypeKicker[item.type].dot}`} />
                    {newsTypeLabel[item.type]}
                  </span>
                  <span className="text-ink-faint text-xs">·</span>
                  <time className="text-xs text-ink-faint">{formatDate(item.date)}</time>
                </div>
                <h3 className="font-semibold text-sm text-ink leading-snug">{item.title}</h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">{item.description}</p>
                <NewsLinks item={item} className="mt-1.5" />
              </div>
            </article>
          ))}
        </div>
        {remainingNews > 0 && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={expanded}
              className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-surface-border-strong hover:shadow-sm transition-all"
            >
              {expanded
                ? 'Show less'
                : `View ${remainingNews} more ${remainingNews === 1 ? 'item' : 'items'}`}
              <svg
                className={`w-4 h-4 text-brand-purple transition-transform ${expanded ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
