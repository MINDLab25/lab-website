import { news } from '@/data/site'
import SectionHeading from '@/components/SectionHeading'
import { formatDate } from '@/lib/utils'
import { newsTypeBadge, newsTypeLabel } from '@/lib/constants'

const recentNews = [...news]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 6)

export default function NewsSection() {
  return (
    <section id="news" className="bg-white">
      <div className="container-content py-16 md:py-20">
        <SectionHeading>News</SectionHeading>
        <div className="space-y-3">
          {recentNews.map((item) => (
            <article
              key={item.id}
              className="flex gap-4 p-4 rounded-xl border border-surface-border bg-white hover:border-surface-border-strong hover:shadow-sm transition-all group"
            >
              <div className="hidden sm:block w-0.5 shrink-0 self-stretch rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-20 group-hover:opacity-70 transition-opacity" />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className={`badge ${newsTypeBadge[item.type]}`}>
                    {newsTypeLabel[item.type]}
                  </span>
                  <time className="text-xs text-ink-faint">{formatDate(item.date)}</time>
                </div>
                <h3 className="font-semibold text-sm text-ink leading-snug">{item.title}</h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors"
                  >
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
