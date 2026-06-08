import { news } from '@/data/site'
import SectionHeading from '@/components/SectionHeading'
import { formatDate } from '@/lib/utils'
import { newsTypeKicker, newsTypeLabel } from '@/lib/constants'

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
                  <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${newsTypeKicker[item.type].text}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${newsTypeKicker[item.type].dot}`} />
                    {newsTypeLabel[item.type]}
                  </span>
                  <span className="text-ink-faint text-xs">·</span>
                  <time className="text-xs text-ink-faint">{formatDate(item.date)}</time>
                </div>
                <h3 className="font-semibold text-sm text-ink leading-snug">{item.title}</h3>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">{item.description}</p>
                {item.links && item.links.length > 0 ? (
                  <div className="mt-1.5 flex flex-wrap items-center gap-3">
                    {item.links.map((l) => (
                      l.label === "Paper" ? (
                        <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                          className="text-xs font-semibold text-brand-purple hover:text-purple-700 transition-colors flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          {l.label}
                        </a>
                      ) : (
                        <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                          className="text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors">
                          {l.label}
                        </a>
                      )
                    ))}
                  </div>
                ) : item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors">
                    Learn more
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
