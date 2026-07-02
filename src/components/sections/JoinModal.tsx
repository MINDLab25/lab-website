'use client'

import { useEffect } from 'react'
import { lab } from '@/data/site'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function JoinModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Get in Touch"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-surface rounded-2xl shadow-xl w-full max-w-sm p-8 flex flex-col items-center text-center">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-faint hover:text-ink transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}/images/mindlab-logo-symbol.png`} alt="" className="w-10 h-10 mb-4 opacity-90" />

        <h3 className="text-lg font-semibold text-ink mb-1">Get in Touch</h3>
        <p className="text-sm text-ink-muted mb-6 leading-relaxed">
          Reach out via email and we&rsquo;ll get back to you.
        </p>

        {/* Email */}
        <a
          href={lab.joinLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border-strong text-ink px-6 py-2.5 text-sm font-semibold hover:bg-surface-subtle transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          Email Us
        </a>
      </div>
    </div>
  )
}
