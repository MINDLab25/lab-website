import { publications } from '@/data/site'
import SectionHeading from '@/components/SectionHeading'
import { labMemberNames } from '@/lib/utils'
import { pubTypeBadgeClass, pubTypeLabel } from '@/lib/constants'

const sortedPubs = [...publications].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))

export default function PublicationsSection({
  expandedId,
  onToggle,
}: {
  expandedId: string | null
  onToggle: (id: string) => void
}) {
  return (
    <section id="publications" className="border-t border-surface-border bg-white">
      <div className="container-content py-16 md:py-20">
        <SectionHeading>Publications</SectionHeading>
        <div className="divide-y divide-surface-border">
          {sortedPubs.map((pub) => {
            const isExpanded = expandedId === pub.id
            return (
              <article key={pub.id} className="py-5 group">
                <div className="flex gap-4">
                  <div className="hidden sm:block w-0.5 shrink-0 rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-20 group-hover:opacity-70 transition-opacity" />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`badge ${pubTypeBadgeClass[pub.type]} text-[11px]`}>
                        {pubTypeLabel[pub.type]}
                      </span>
                      <span className="text-xs text-ink-faint">{pub.year}</span>
                      {pub.award && (
                        <span className="badge badge-award text-[11px]">{pub.award}</span>
                      )}
                    </div>

                    <h3 className="font-semibold text-ink leading-snug mb-1.5">{pub.title}</h3>

                    <p className="text-sm text-ink-muted mb-1">
                      {pub.authors.map((author, i) => (
                        <span key={author}>
                          {i > 0 && ', '}
                          {labMemberNames.has(author)
                            ? <strong className="font-semibold text-ink">{author}</strong>
                            : author}
                        </span>
                      ))}
                    </p>

                    <p className="text-xs text-ink-faint italic mb-2.5">{pub.venue}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {pub.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-faint"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isExpanded && (
                      <p className="mb-3 text-sm text-ink-secondary leading-relaxed border-l-2 border-surface-border pl-3">
                        {pub.abstract}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-3">
                      {pub.links.pdf && (
                        <a href={pub.links.pdf} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-semibold text-brand-purple hover:text-purple-700 transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                          </svg>
                          PDF
                        </a>
                      )}
                      {pub.links.code && (
                        <a href={pub.links.code} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                          </svg>
                          Code
                        </a>
                      )}
                      {pub.links.project && (
                        <a href={pub.links.project} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                          Project
                        </a>
                      )}
                      {pub.links.demo && (
                        <a href={pub.links.demo} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" />
                          </svg>
                          Demo
                        </a>
                      )}
                      {pub.links.slides && (
                        <a href={pub.links.slides} target="_blank" rel="noreferrer"
                          className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                          </svg>
                          Slides
                        </a>
                      )}
                      <button
                        onClick={() => onToggle(pub.id)}
                        className="ml-auto text-xs font-medium text-ink-faint hover:text-ink transition-colors"
                      >
                        {isExpanded ? 'Hide abstract' : 'Abstract'}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
