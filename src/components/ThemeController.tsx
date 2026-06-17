'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Toggles the `theme-alt` class on <html> for the alternate color-profile
// routes (/alt/*). This covers Nav, main, and Footer, which all live in the
// root layout. Handles client-side (SPA) navigation; an inline script in the
// layout sets the same class before first paint to avoid a flash on hard loads.
export default function ThemeController() {
  const pathname = usePathname()

  useEffect(() => {
    document.documentElement.classList.toggle('theme-alt', pathname.startsWith('/alt'))
  }, [pathname])

  return null
}
