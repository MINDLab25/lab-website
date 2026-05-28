import { getInitials } from '@/lib/utils'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const sizeClass = {
  lg: 'w-20 h-20 text-xl',
  md: 'w-12 h-12 text-sm',
  sm: 'w-8 h-8 text-xs',
}

export default function Avatar({
  name,
  photo,
  size = 'md',
}: {
  name: string
  photo?: string
  size?: 'lg' | 'md' | 'sm'
}) {
  const dim = sizeClass[size]

  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${basePath}/images/team/${photo}`}
        alt={name}
        className={`${dim} rounded-full object-cover shrink-0 border-2 border-surface-border`}
      />
    )
  }

  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center text-white font-semibold shrink-0`}
      style={{ background: 'linear-gradient(135deg, #9333EA, #EC4899, #F97316)' }}
    >
      {getInitials(name)}
    </div>
  )
}
