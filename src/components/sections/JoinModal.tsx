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
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 flex flex-col items-center text-center">
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
        <img src={`${basePath}/images/mindlab-logo-symbol.png`} alt="" className="w-10 h-10 mb-4 opacity-90 theme-default-only" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${basePath}/images/lab-alt-logo.png`} alt="" className="w-10 h-10 mb-4 opacity-90 theme-alt-only" />

        <h3 className="text-lg font-semibold text-ink mb-1">Get in Touch</h3>
        <p className="text-sm text-ink-muted mb-6 leading-relaxed">
          Reach out via email or find us on social media.
        </p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href={lab.joinLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1.5 group"
            aria-label="Email"
          >
            <span className="w-11 h-11 flex items-center justify-center rounded-full border border-surface-border group-hover:border-brand-purple group-hover:bg-purple-50 transition-all">
              <svg className="w-5 h-5 text-ink-muted group-hover:text-brand-purple transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </span>
            <span className="text-[11px] text-ink-faint group-hover:text-brand-purple transition-colors">Email</span>
          </a>

          {lab.linkedin && (
            <a href={lab.linkedin} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 group" aria-label="LinkedIn">
              <span className="w-11 h-11 flex items-center justify-center rounded-full border border-surface-border group-hover:border-brand-purple group-hover:bg-purple-50 transition-all">
                <svg className="w-5 h-5 text-ink-muted group-hover:text-brand-purple transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </span>
              <span className="text-[11px] text-ink-faint group-hover:text-brand-purple transition-colors">LinkedIn</span>
            </a>
          )}

          {lab.twitter && (
            <a href={lab.twitter} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1.5 group" aria-label="Twitter / X">
              <span className="w-11 h-11 flex items-center justify-center rounded-full border border-surface-border group-hover:border-brand-purple group-hover:bg-purple-50 transition-all">
                <svg className="w-5 h-5 text-ink-muted group-hover:text-brand-purple transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
              <span className="text-[11px] text-ink-faint group-hover:text-brand-purple transition-colors">Twitter</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
