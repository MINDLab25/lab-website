'use client'

import { useState } from 'react'
import { resources } from '@/data/site'
import type { ResourceCategory } from '@/data/site'

const categoryConfig: Record<ResourceCategory, { label: string; icon: string; color: string }> = {
  dataset: {
    label: 'Dataset',
    icon: '🗄️',
    color: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  },
  code: {
    label: 'Code',
    icon: '💻',
    color: 'bg-gray-100 text-gray-700 ring-1 ring-gray-200',
  },
  'reading-list': {
    label: 'Reading List',
    icon: '📚',
    color: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  },
  tutorial: {
    label: 'Tutorial',
    icon: '📖',
    color: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  },
  tool: {
    label: 'Tool',
    icon: '🔧',
    color: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200',
  },
}

const filterOptions: { value: ResourceCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'dataset', label: 'Datasets' },
  { value: 'code', label: 'Code' },
  { value: 'tool', label: 'Tools' },
  { value: 'reading-list', label: 'Reading Lists' },
  { value: 'tutorial', label: 'Tutorials' },
]

export default function ResourcesPage() {
  const [filter, setFilter] = useState<ResourceCategory | 'all'>('all')

  const filtered =
    filter === 'all' ? resources : resources.filter((r) => r.category === filter)

  return (
    <div className="container-content py-14 md:py-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-2">Resources</h1>
        <p className="text-ink-muted">
          Open datasets, code releases, tools, and reading lists from the lab.
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

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-ink-muted py-16 text-center">No resources found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((resource) => {
            const config = categoryConfig[resource.category]

            return (
              <article
                key={resource.id}
                className="group p-5 rounded-xl border border-surface-border bg-white hover:border-surface-border-strong hover:shadow-sm transition-all flex flex-col"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl leading-none">{config.icon}</span>
                    <span className={`badge ${config.color} text-[11px]`}>
                      {config.label}
                    </span>
                  </div>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 p-1.5 rounded-full text-ink-faint hover:text-brand-purple hover:bg-purple-50 transition-colors"
                    aria-label={`Open ${resource.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>

                {/* Title */}
                <h2 className="font-semibold text-ink mb-1.5 leading-snug">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-purple transition-colors"
                  >
                    {resource.title}
                  </a>
                </h2>

                {/* Description */}
                <p className="text-sm text-ink-muted leading-relaxed flex-1">{resource.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Paper link */}
                {resource.paperUrl && (
                  <div className="mt-4 pt-4 border-t border-surface-border">
                    <a
                      href={resource.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                      Associated paper
                    </a>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      )}
    </div>
  )
}
