'use client'

import { useState, useMemo } from 'react'
import { publications, type Publication } from '@/data/site'
import CiteButton from '@/components/CiteButton'
import { pubTypeBadgeClass, pubTypeLabel } from '@/lib/constants'

const typeLabel = pubTypeLabel
const typeBadgeClass = pubTypeBadgeClass

function AuthorList({ authors }: { authors: string[] }) {
  return <p className="text-sm text-ink-muted">{authors.join(', ')}</p>
}

function PublicationCard({
  pub,
  isExpanded,
  onToggle,
}: {
  pub: Publication
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <article className="py-5 group">
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
                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
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
            {pub.links.artt && (
              <a
                href={pub.links.artt}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors"
              >
                ARTT
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
            {pub.links.poster && (
              <a
                href={pub.links.poster}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-ink-muted hover:text-ink transition-colors"
              >
                Poster
              </a>
            )}
            <CiteButton bibtex={pub.bibtex} />
            <button
              onClick={onToggle}
              className="text-xs font-medium text-ink-faint hover:text-ink transition-colors ml-auto"
            >
              {isExpanded ? 'Hide abstract' : 'Abstract'}
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PublicationsPage() {
  const years = useMemo(
    () =>
      [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a),
    []
  )

  const [yearFilter, setYearFilter] = useState<number | 'all'>('all')
  const [typeFilter, setTypeFilter] = useState<string>('all')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filtered = useMemo(() => {
    return publications
      .filter((p) => yearFilter === 'all' || p.year === yearFilter)
      .filter((p) => typeFilter === 'all' || p.type === typeFilter)
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
  }, [yearFilter, typeFilter])

  // Preprints ignore the year/date and are pinned above the year-grouped
  // sections, but only when browsing all years (a year filter is a more
  // specific request than the pin).
  const pinnedPreprints = yearFilter === 'all' ? filtered.filter((p) => p.type === 'preprint') : []
  const dated = yearFilter === 'all' ? filtered.filter((p) => p.type !== 'preprint') : filtered

  // Group by year
  const byYear: Record<number, typeof publications> = {}
  for (const pub of dated) {
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
                  ? 'bg-ink text-surface border-ink'
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
                  ? 'bg-ink text-surface border-ink'
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

      {/* Publications list: preprints pinned first, then grouped by year */}
      {pinnedPreprints.length === 0 && filteredYears.length === 0 ? (
        <p className="text-ink-muted py-16 text-center">No publications match the current filters.</p>
      ) : (
        <div className="space-y-12">
          {pinnedPreprints.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-ink-faint">Preprints</span>
                <div className="flex-1 h-px bg-surface-border" />
              </div>

              <div className="divide-y divide-surface-border">
                {pinnedPreprints.map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    pub={pub}
                    isExpanded={expandedId === pub.id}
                    onToggle={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredYears.map((year) => (
            <div key={year}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-ink-faint">{year}</span>
                <div className="flex-1 h-px bg-surface-border" />
              </div>

              <div className="divide-y divide-surface-border">
                {byYear[year].map((pub) => (
                  <PublicationCard
                    key={pub.id}
                    pub={pub}
                    isExpanded={expandedId === pub.id}
                    onToggle={() => setExpandedId(expandedId === pub.id ? null : pub.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
