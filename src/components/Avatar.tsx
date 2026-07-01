import { getInitials } from '@/lib/utils'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const sizeClass = {
  lg: 'w-20 h-20 text-xl',
  md: 'w-16 h-16 text-base',
  sm: 'w-8 h-8 text-xs',
  xs: 'w-6 h-6 text-[10px]',
}

export default function Avatar({
  name,
  photo,
  size = 'md',
  photoPosition,
}: {
  name: string
  photo?: string
  size?: 'lg' | 'md' | 'sm' | 'xs'
  /** CSS object-position for the photo (e.g. "center 20%") — defaults to centered */
  photoPosition?: string
}) {
  const dim = sizeClass[size]

  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${basePath}/images/team/${photo}`}
        alt={name}
        className={`${dim} rounded-full object-cover shrink-0 border-2 border-surface-border`}
        style={photoPosition ? { objectPosition: photoPosition } : undefined}
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
