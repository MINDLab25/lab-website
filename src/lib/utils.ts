import { team } from '@/data/site'

export function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

const TITLES = new Set(['dr.', 'prof.', 'professor'])

export function getDisplayFirstName(name: string) {
  const parts = name.split(' ')
  if (parts.length >= 2 && TITLES.has(parts[0].toLowerCase())) {
    return `${parts[0]} ${parts[1]}`
  }
  return parts[0]
}

export function formatDate(iso: string, monthStyle: 'short' | 'long' = 'short') {
  return new Date(iso).toLocaleDateString('en-US', {
    month: monthStyle,
    day: 'numeric',
    year: 'numeric',
  })
}

export const labMemberNames = new Set(
  team.flatMap((m) => {
    const parts = m.name.split(' ')
    if (parts.length >= 2 && TITLES.has(parts[0].toLowerCase())) {
      return [m.name, parts.slice(1).join(' ')]
    }
    return [m.name]
  })
)
