import { team } from '@/data/site'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const mascots = team.filter((m) => m.role === 'mascot')

/* Per-mascot accent — paw print sticker */
const mascotAccent: Record<string, string> = {
  funding: '🐾',
  pumpkin: '🐾',
}

/* Option A — soft gradient banner with round photos */
export function MascotBanner() {
  if (mascots.length === 0) return null
  return (
    <div className="rounded-3xl border border-surface-border bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 px-6 py-10 md:px-10">
      <h3 className="text-center text-xl font-semibold">
        Meet the <span className="gradient-text">Mascots</span> 🐾
      </h3>
      <div className="mt-8 flex flex-wrap justify-center gap-10 md:gap-16">
        {mascots.map((m) => (
          <div
            key={m.id}
            className="group flex max-w-xs flex-col items-center text-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/images/team/${m.photo}`}
              alt={m.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3"
            />
            <p className="mt-4 font-semibold text-ink">{m.name}</p>
            <p className="text-[11px] uppercase tracking-widest text-brand-purple">
              {m.title}
            </p>
            <p className="mt-2 text-sm text-ink-muted leading-relaxed">{m.bio}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Option B — tilted polaroids that straighten on hover */
export function MascotPolaroids() {
  if (mascots.length === 0) return null
  return (
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 py-4">
      {mascots.map((m, i) => (
        <figure
          key={m.id}
          className={`relative w-52 bg-white p-3 pb-4 rounded-sm shadow-md transition-transform duration-300 hover:rotate-0 hover:scale-105 hover:shadow-lg ${
            i % 2 === 0 ? '-rotate-3' : 'rotate-3'
          }`}
        >
          {mascotAccent[m.id] && (
            <span
              aria-hidden
              className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md text-lg"
            >
              {mascotAccent[m.id]}
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/team/${m.photo}`}
            alt={m.name}
            className="aspect-square w-full object-cover rounded-sm"
          />
          <figcaption className="pt-3 text-center">
            <p className="font-semibold text-ink">{m.name}</p>
            <p className="text-[11px] uppercase tracking-widest text-brand-purple">
              {m.title}
            </p>
            <p className="mt-1.5 text-xs text-ink-muted leading-relaxed">{m.bio}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
