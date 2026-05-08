'use client'

import { useState, useMemo } from 'react'
import { publications, team } from '@/data/site'

// Build a set of lab member names for bolding
const labMemberNames = new Set(team.map((m) => m.name))

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm text-ink-muted">
      {authors.map((author, i) => (
        <span key={author}>
          {i > 0 && ', '}
          {labMemberNames.has(author) ? (
            <strong className="font-semibold text-ink">{author}</strong>
          ) : (
            author
          )}
        </span>
      ))}
    </p>
  )
}

const typeLabel: Record<string, string> = {
  conference: 'Conference',
  journal: 'Journal',
  workshop: 'Workshop',
  preprint: 'Preprint',
}

const typeBadgeClass: Record<string, string> = {
  conference: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  journal: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  workshop: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  preprint: 'bg-gray-100 text-gray-600 ring-1 ring-gray-200',
}

export default function PublicationsPage() {
  const years = useMemo(
    () =>
      [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
    []
  )

  const allTags = useMemo(
    () => [...new Set(publications.flatMap((p) => p.tags))].sort(),
    []
  )

  const [yearFilter, setYearFilter] = useState<number | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [tagFilter, setTagFilter] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return publications
      .filter((p) => yearFilter === 'all' || p.year === yearFilter)
      .filter((p) => typeFilter === 'all' || p.type === typeFilter)
      .filter((p) => tagFilter === 'all' || p.tags.includes(tagFilter))
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
  }, [yearFilter, typeFilter, tagFilter])

  // Group by year
  const byYear: Record<number, typeof publications> = {}
  for (const pub of filtered) {
    if (!byYear[pub.year]) byYear[pub.year] = []
    byYear[pub.year].push(pub)
  }
  const filteredYears = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)

  return (
    <div className="container-content py-14 md:py-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">Publications</h1>
        <p className="text-ink-muted">
          Lab members&apos; names are <strong className="font-semibold text-ink">bolded</strong>.
        </p>
      </div>

      {/* Filters */}
      <div className="space-y-3 mb-10">
        {/* Year */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-medium text-ink-faint w-10 shrink-0">Year</span>
          {['all', ...years].map((y) => (
            <button
              key={y}
              onClick={() => setYearFilter(y as number | 'all')}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                yearFilter === y
                  ? 'bg-ink text-white border-ink'
                  : 'border-surface-border text-ink-muted hover:text-ink hover:border-surface-border-strong'
              }`}
            >
              {y === 'all' ? 'All Years' : y}
            </button>
          ))}
        </div>

        {/* Type */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-medium text-ink-faint w-10 shrink-0">Type</span>
          {['all', 'conference', 'journal', 'workshop', 'preprint'].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                typeFilter === t
                  ? 'bg-ink text-white border-ink'
                  : 'border-surface-border text-ink-muted hover:text-ink hover:border-surface-border-strong'
              }`}
            >
              {t === 'all' ? 'All Types' : typeLabel[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-ink-faint mb-8">
        {filtered.length} publication{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Publications list grouped by year */}
      {filteredYears.length === 0 ? (
        <p className="text-ink-muted py-16 text-center">No publications match the current filters.</p>
      ) : (
        <div className="space-y-12">
          {filteredYears.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-ink-faint">{year}</span>
                <div className="flex-1 h-px bg-surface-border" />
              </div>

              <div className="divide-y divide-surface-border">
                {byYear[year].map((pub) => {
                  const isExpanded = expandedId === pub.id

                  return (
                    <article key={pub.id} className="py-5 group">
                      <div className="flex gap-4">
                        {/* Gradient accent */}
                        <div className="hidden sm:block w-0.5 shrink-0 rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-20 group-hover:opacity-70 transition-opacity" />

                        <div className="flex-1 min-w-0">
                          {/* Meta row */}
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`badge ${typeBadgeClass[pub.type]} text-[11px]`}>
                              {typeLabel[pub.type]}
                            </span>
                            {pub.award && (
                              <span className="badge badge-award text-[11px]">
                                {pub.award}
                              </span>
                            )}
                          </div>

                          {/* Title */}
                          <h2 className="font-semibold text-ink leading-snug mb-1.5">
                            {pub.title}
                          </h2>

                          {/* Authors */}
                          <AuthorList authors={pub.authors} />

                          {/* Venue */}
                          <p className="text-xs text-ink-faint mt-1 italic">{pub.venue}</p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 mt-2.5">
                            {pub.tags.map((tag) => (
                              <button
                                key={tag}
                                onClick={() => setTagFilter(tagFilter === tag ? 'all' : tag)}
                                className={`text-[11px] px-2 py-0.5 rounded-full border transition-colors cursor-pointer ${
                                  tagFilter === tag
                                    ? 'bg-ink text-white border-ink'
                                    : 'bg-surface-subtle border-surface-border text-ink-muted hover:border-surface-border-strong hover:text-ink'
                                }`}
                              >
                                {tag}
                              </button>
                            ))}
                          </div>

                          {/* Abstract (expandable) */}
                          {isExpanded && (
                            <p className="mt-3 text-sm text-ink-secondary leading-relaxed border-l-2 border-surface-border pl-3">
                              {pub.abstract}
                            </p>
                          )}

                          {/* Links row */}
                          <div className="flex flex-wrap items-center gap-3 mt-3">
                            {pub.links.pdf && (
                              <a
                                href={pub.links.pdf}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-semibold text-brand-purple hover:text-purple-700 transition-colors flex items-center gap-1"
                              >
                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                PDF
                              </a>
                            )}
                            {pub.links.code && (
                              <a
                                href={pub.links.code}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
                              >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                                Code
                              </a>
                            )}
                            {pub.links.project && (
                              <a
                                href={pub.links.project}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors"
                              >
                                Project Page
                              </a>
                            )}
                            {pub.links.demo && (
                              <a
                                href={pub.links.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors"
                              >
                                Demo
                              </a>
                            )}
                            {pub.links.slides && (
                              <a
                                href={pub.links.slides}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors"
                              >
                                Slides
                              </a>
                            )}
                            <button
                              onClick={() => setExpandedId(isExpanded ? null : pub.id)}
                              className="text-xs font-medium text-ink-faint hover:text-ink transition-colors ml-auto"
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
          ))}
        </div>
      )}
    </div>
  )
}
