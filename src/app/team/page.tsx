import Image from 'next/image'
import { team, lab } from '@/data/site'
import type { TeamMember } from '@/data/site'

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function Avatar({ member, size = 'md' }: { member: TeamMember; size?: 'lg' | 'md' | 'sm' }) {
  const sizeClass = {
    lg: 'w-24 h-24 text-2xl',
    md: 'w-16 h-16 text-lg',
    sm: 'w-12 h-12 text-sm',
  }[size]

  if (member.photo) {
    return (
      <div className={`${sizeClass} relative rounded-full overflow-hidden shrink-0 border-2 border-surface-border`}>
        <Image
          src={`/images/team/${member.photo}`}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`${sizeClass} rounded-full shrink-0 flex items-center justify-center font-semibold text-white`}
      style={{
        background: 'linear-gradient(135deg, #9333EA 0%, #EC4899 50%, #F97316 100%)',
      }}
    >
      {getInitials(member.name)}
    </div>
  )
}

function SocialLinks({ links }: { links: TeamMember['links'] }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {links.email && (
        <a
          href={`mailto:${links.email}`}
          className="text-ink-faint hover:text-brand-purple transition-colors"
          aria-label="Email"
          title={links.email}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
      )}
      {links.website && (
        <a
          href={links.website}
          target="_blank"
          rel="noreferrer"
          className="text-ink-faint hover:text-brand-purple transition-colors"
          aria-label="Website"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </a>
      )}
      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noreferrer"
          className="text-ink-faint hover:text-brand-purple transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>
      )}
      {links.twitter && (
        <a
          href={links.twitter}
          target="_blank"
          rel="noreferrer"
          className="text-ink-faint hover:text-brand-purple transition-colors"
          aria-label="Twitter"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      )}
      {links.googleScholar && (
        <a
          href={links.googleScholar}
          target="_blank"
          rel="noreferrer"
          className="text-ink-faint hover:text-brand-purple transition-colors"
          aria-label="Google Scholar"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          </svg>
        </a>
      )}
      {links.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-ink-faint hover:text-brand-purple transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      )}
    </div>
  )
}

export default function TeamPage() {
  const pi = team.find((m) => m.role === 'pi')!
  const postdocs = team.filter((m) => m.role === 'postdoc')
  const phd = team.filter((m) => m.role === 'phd')
  const ms = team.filter((m) => m.role === 'ms')
  const undergrads = team.filter((m) => m.role === 'undergrad')
  const alumni = team.filter((m) => m.role === 'alumni')

  return (
    <div className="container-content py-14 md:py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-2">Team</h1>
        <p className="text-ink-muted">
          The people behind the research.
        </p>
      </div>

      {/* PI */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-6">
          Principal Investigator
        </h2>
        <div className="p-6 rounded-2xl border border-surface-border bg-white flex flex-col sm:flex-row gap-6">
          <Avatar member={pi} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1.5">
              <div>
                <h3 className="text-xl font-semibold text-ink">{pi.name}</h3>
                <p className="text-sm text-ink-muted mt-0.5">{pi.title}</p>
                <p className="text-sm text-ink-faint">{lab.department}, {lab.university}</p>
              </div>
              <SocialLinks links={pi.links} />
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed mt-3">{pi.bio}</p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {pi.interests.map((i) => (
                <span
                  key={i}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-muted"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Postdocs */}
      {postdocs.length > 0 && (
        <MemberSection title="Postdoctoral Researchers" members={postdocs} />
      )}

      {/* PhD Students */}
      {phd.length > 0 && (
        <MemberSection title="PhD Students" members={phd} />
      )}

      {/* MS Students */}
      {ms.length > 0 && (
        <MemberSection title="MS Students" members={ms} />
      )}

      {/* Undergrads */}
      {undergrads.length > 0 && (
        <MemberSection title="Undergraduate Researchers" members={undergrads} />
      )}

      {/* Alumni */}
      {alumni.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-6">
            Alumni
          </h2>
          <div className="divide-y divide-surface-border border border-surface-border rounded-xl overflow-hidden bg-white">
            {alumni.map((member) => (
              <div key={member.id} className="flex items-center gap-4 px-5 py-4">
                <Avatar member={member} size="sm" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span className="font-medium text-sm text-ink">{member.name}</span>
                    {member.gradYear && (
                      <span className="text-xs text-ink-faint">·  {member.title} &rsquo;{String(member.gradYear).slice(-2)}</span>
                    )}
                  </div>
                  {member.currentPosition && (
                    <p className="text-xs text-ink-muted mt-0.5">{member.currentPosition}</p>
                  )}
                </div>
                <div className="shrink-0">
                  <SocialLinks links={member.links} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function MemberSection({ title, members }: { title: string; members: TeamMember[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="p-5 rounded-xl border border-surface-border bg-white hover:border-surface-border-strong hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <Avatar member={member} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-ink">{member.name}</h3>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {member.title}
                      {member.joinYear && (
                        <span className="text-ink-faint"> &middot; Since {member.joinYear}</span>
                      )}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-ink-secondary leading-relaxed mt-2.5">{member.bio}</p>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {member.interests.map((i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-muted"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <SocialLinks links={member.links} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
