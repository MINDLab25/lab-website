'use client'
import { useState } from 'react'

export default function BioExpand({ bio, className }: { bio: string; className?: string }) {
  const [expanded, setExpanded] = useState(false)
  const truncates = bio.length > 300

  return (
    <div className={`flex items-end gap-1 ${className ?? ''}`}>
      <p className={`flex-1 text-xs text-ink-secondary leading-relaxed ${truncates && !expanded ? 'line-clamp-6' : ''}`}>
        {bio}
      </p>
      {truncates && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="shrink-0 mb-0.5 text-ink-secondary hover:text-ink-muted transition-colors"
          aria-label={expanded ? 'Show less' : 'Read more'}
        >
          <svg
            width="12" height="12" viewBox="0 0 14 14" fill="none"
            className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          >
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  )
}
