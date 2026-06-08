'use client'

import { useState } from 'react'
import { news } from '@/data/site'
import type { NewsType } from '@/data/site'
import { formatDate } from '@/lib/utils'
import { newsTypeKicker, newsTypeLabel } from '@/lib/constants'

const typeLabel = newsTypeLabel

const filterOptions: { value: NewsType | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'paper', label: 'Papers' },
  { value: 'award', label: 'Awards' },
  { value: 'grant', label: 'Grants' },
  { value: 'event', label: 'Events' },
  { value: 'misc', label: 'News' },
]

export default function NewsPage() {
  const [filter, setFilter] = useState<NewsType | 'all'>('all')

  const sorted = [...news].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const filtered = filter === 'all' ? sorted : sorted.filter((n) => n.type === filter)

  // Group by year
  const byYear: Record<number, typeof news> = {}
  for (const item of filtered) {
    const yr = new Date(item.date).getFullYear()
    if (!byYear[yr]) byYear[yr] = []
    byYear[yr].push(item)
  }
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="container-content py-14 md:py-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">News</h1>
        <p className="text-ink-muted">
          Lab announcements, publications, awards, and events.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filterOptions.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setFilter(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              filter === value
                ? 'bg-ink text-white border-ink'
                : 'border-surface-border text-ink-muted hover:text-ink hover:border-surface-border-strong'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Timeline grouped by year */}
      {years.length === 0 ? (
        <p className="text-ink-muted py-16 text-center">No items found.</p>
      ) : (
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-ink-faint">{year}</span>
                <div className="flex-1 h-px bg-surface-border" />
              </div>

              <div className="space-y-4">
                {byYear[year].map((item) => (
                  <article
                    key={item.id}
                    className="flex gap-4 p-5 rounded-xl border border-surface-border bg-white hover:border-surface-border-strong hover:shadow-sm transition-all group"
                  >
                    {/* Gradient accent line */}
                    <div className="hidden sm:block w-0.5 shrink-0 rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-25 group-hover:opacity-80 transition-opacity" />

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide ${newsTypeKicker[item.type].text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${newsTypeKicker[item.type].dot}`} />
                          {typeLabel[item.type]}
                        </span>
                        <span className="text-ink-faint text-xs">·</span>
                        <time className="text-xs text-ink-faint">
                          {formatDate(item.date, 'long')}
                        </time>
                      </div>

                      <h2 className="font-semibold text-ink leading-snug mb-1.5">
                        {item.title}
                      </h2>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {item.description}
                      </p>

                      {item.links && item.links.length > 0 ? (
                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          {item.links.map((l) => (
                            l.label === "Paper" ? (
                              <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                                className="text-xs font-semibold text-brand-purple hover:text-purple-700 transition-colors flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors">
                          Learn more
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
