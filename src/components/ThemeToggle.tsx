'use client'

import { useEffect, useLayoutEffect, useState } from 'react'

// Runs before paint on the client; falls back to useEffect during SSR/prerender
// so the static export doesn't log a useLayoutEffect warning.
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useIsomorphicLayoutEffect(() => {
    setMounted(true)

    // Re-assert the theme from the source of truth (stored choice → system),
    // since React hydration can reset the class the pre-paint script applied.
    let stored: string | null = null
    try {
      stored = localStorage.getItem('theme')
    } catch {}
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = stored ? stored === 'dark' : systemDark
    document.documentElement.classList.toggle('dark', dark)
    setIsDark(dark)

    // Follow the OS preference live, until the user explicitly picks a theme.
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem('theme')
      } catch {}
      if (stored) return // user override wins
      document.documentElement.classList.toggle('dark', e.matches)
      setIsDark(e.matches)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark')
    document.documentElement.classList.toggle('dark', next)
    try {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (next === systemDark) {
        // Back in sync with the OS — drop the override and follow system again.
        localStorage.removeItem('theme')
      } else {
        localStorage.setItem('theme', next ? 'dark' : 'light')
      }
    } catch {}
    setIsDark(next)
  }

  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-md text-ink-muted hover:text-ink hover:bg-surface-subtle transition-colors ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Render a stable icon until mounted to avoid hydration mismatch */}
      {mounted && isDark ? (
        // Sun
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // Moon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  )
}
