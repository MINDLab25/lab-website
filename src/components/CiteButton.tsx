'use client'

import { useState } from 'react'

export default function CiteButton({ bibtex }: { bibtex?: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!bibtex) return null

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        Cite
      </button>

      {open && (
        <div className="mt-3 w-full rounded-lg border border-surface-border bg-surface-subtle">
          <div className="flex items-center justify-between px-3 py-1.5 border-b border-surface-border">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
              BibTeX
            </span>
            <button
              onClick={copy}
              className="text-[11px] font-medium text-brand-purple hover:text-purple-700 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <pre className="overflow-x-auto px-3 py-2.5 text-[11px] leading-relaxed text-ink-secondary whitespace-pre">
            {bibtex}
          </pre>
        </div>
      )}
    </>
  )
}
