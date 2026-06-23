export const newsTypeBadge: Record<string, string> = {
  paper: 'badge-paper',
  award: 'badge-award',
  grant: 'badge-grant',
  event: 'badge-event',
  misc: 'badge-misc',
  press: 'badge-press',
}

export const newsTypeLabel: Record<string, string> = {
  paper: 'Paper',
  award: 'Award',
  grant: 'Grant',
  event: 'Event',
  misc: 'Announcement',
  press: 'Press',
}

export const pubTypeBadgeClass: Record<string, string> = {
  conference: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  journal: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  workshop: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  preprint: 'bg-gray-100 text-gray-600 ring-1 ring-gray-200',
}

// Kicker (option 1) colors for news type labels: dot fill + label text color
export const newsTypeKicker: Record<string, { dot: string; text: string }> = {
  paper: { dot: 'bg-purple-500', text: 'text-purple-600' },
  award: { dot: 'bg-amber-500', text: 'text-amber-600' },
  grant: { dot: 'bg-green-500', text: 'text-green-600' },
  event: { dot: 'bg-blue-500', text: 'text-blue-600' },
  misc: { dot: 'bg-orange-500', text: 'text-orange-600' },
  press: { dot: 'bg-pink-500', text: 'text-pink-600' },
}

export const pubTypeLabel: Record<string, string> = {
  conference: 'Conference',
  journal: 'Journal',
  workshop: 'Workshop',
  preprint: 'Preprint',
}
