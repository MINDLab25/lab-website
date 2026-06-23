'use client'

import { useState, useEffect } from 'react'
import ThemeToggle from '@/components/ThemeToggle'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const links = [
  { href: '#news', label: 'News' },
  { href: '#research', label: 'Research' },
  { href: '#publications', label: 'Publications' },
  { href: '#team', label: 'Team' },
  { href: '#join', label: 'Join Us' },
]

const sectionIds = ['news', 'research', 'publications', 'team', 'join']

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)

      // Track active section by scroll position
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 80) {
          current = id
        }
      }
      // At the bottom of the page the last section may be shorter than the
      // viewport and never cross the threshold — force it active.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (atBottom) {
        current = sectionIds[sectionIds.length - 1]
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-surface/90 backdrop-blur-md transition-shadow duration-200 ${
        scrolled ? 'shadow-sm border-b border-surface-border' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between h-16">
        {/* Logo — scrolls to top */}
        <a href="#" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/mindlab-logo-horizontal.png`}
            alt="MIND Lab"
            className="h-9 w-auto block dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/mind-lab-inverted-color.png`}
            alt="MIND Lab"
            className="h-9 w-auto hidden dark:block"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            const isJoin = id === 'join'
            return (
              <a
                key={href}
                href={isJoin ? undefined : href}
                onClick={isJoin ? (e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-join-modal')) } : undefined}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                  isActive
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink hover:bg-surface-subtle'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange rounded-full" />
                )}
              </a>
            )
          })}
          <ThemeToggle className="ml-1" />
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-ink-muted hover:text-ink hover:bg-surface-subtle transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-surface-border bg-surface px-4 pb-4 pt-2">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = activeSection === id
            const isJoin = id === 'join'
            return (
              <a
                key={href}
                href={isJoin ? undefined : href}
                onClick={isJoin
                  ? (e) => { e.preventDefault(); setMenuOpen(false); window.dispatchEvent(new CustomEvent('open-join-modal')) }
                  : () => setMenuOpen(false)
                }
                className={`flex items-center gap-2 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? 'text-ink bg-surface-subtle'
                    : 'text-ink-muted hover:text-ink hover:bg-surface-subtle'
                }`}
              >
                {isActive && (
                  <span className="w-1 h-4 rounded-full bg-gradient-to-b from-brand-purple to-brand-orange" />
                )}
                {label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
