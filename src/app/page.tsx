'use client'

import { useState } from 'react'
import { lab, researchAreas, publications, news, team } from '@/data/site'
import type { TeamMember } from '@/data/site'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

// ── Helpers ───────────────────────────────────────────────
function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

const TITLES = new Set(['dr.', 'prof.', 'professor'])

/** Returns "Dr. Xinyi" for "Dr. Xinyi Zhou", "Alex" for "Alex Morgan" */
function getDisplayFirstName(name: string) {
  const parts = name.split(' ')
  if (parts.length >= 2 && TITLES.has(parts[0].toLowerCase())) {
    return `${parts[0]} ${parts[1]}`
  }
  return parts[0]
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

// Lab member names for bolding authors
const labMemberNames = new Set(team.map((m) => m.name))

// ── Badge maps ────────────────────────────────────────────
const newsTypeBadge: Record<string, string> = {
  paper: 'badge-paper',
  award: 'badge-award',
  grant: 'badge-grant',
  event: 'badge-event',
  misc: 'badge-misc',
  press: 'badge-press',
}
const newsTypeLabel: Record<string, string> = {
  paper: 'Paper', award: 'Award', grant: 'Grant',
  event: 'Event', misc: 'News', press: 'Press',
}
const pubTypeBadgeClass: Record<string, string> = {
  conference: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  journal: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  workshop: 'bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  preprint: 'bg-gray-100 text-gray-600 ring-1 ring-gray-200',
}
const pubTypeLabel: Record<string, string> = {
  conference: 'Conference', journal: 'Journal',
  workshop: 'Workshop', preprint: 'Preprint',
}

// ── Social icons (email, website, scholar only per spec) ──
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold mb-8">{children}</h2>
}

function SocialLinks({ links }: { links: TeamMember['links'] }) {
  return (
    <div className="flex items-center gap-2.5">
      {links.email && (
        <a href={`mailto:${links.email}`} className="text-ink-faint hover:text-brand-purple transition-colors" aria-label="Email">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
      )}
      {links.website && (
        <a href={links.website} target="_blank" rel="noreferrer" className="text-ink-faint hover:text-brand-purple transition-colors" aria-label="Website">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
        </a>
      )}
      {links.googleScholar && (
        <a href={links.googleScholar} target="_blank" rel="noreferrer" className="text-ink-faint hover:text-brand-purple transition-colors" aria-label="Google Scholar">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
          </svg>
        </a>
      )}
    </div>
  )
}

// ── Gradient initials avatar ──────────────────────────────
function Avatar({ name, size = 'md' }: { name: string; size?: 'lg' | 'md' | 'sm' }) {
  const dim = { lg: 'w-20 h-20 text-xl', md: 'w-10 h-10 text-xs', sm: 'w-6 h-6' }[size]
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center text-white font-semibold shrink-0`}
      style={{ background: 'linear-gradient(135deg, #9333EA, #EC4899, #F97316)', fontSize: size === 'sm' ? 9 : undefined }}
    >
      {getInitials(name)}
    </div>
  )
}

// ─────────────────────────────────────────────────────────
export default function Page() {
  const [expandedPub, setExpandedPub] = useState<string | null>(null)

  const currentMembers = team.filter((m) => m.role !== 'alumni')
  const pi = currentMembers.find((m) => m.role === 'pi')!
  const members = currentMembers.filter((m) => m.role !== 'pi')

  const sortedPubs = [...publications].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title))
  const recentNews = [...news]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="home" className="container-content pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-ink">
            Machine Intelligence{' '}
            <span className="gradient-text">and Data</span>
          </h1>
          <p className="text-lg text-ink-secondary leading-relaxed mt-5">
            {lab.description}
          </p>
          <p className="mt-5 text-sm text-ink-muted">
            We are recruiting &mdash;{' '}
            <a href="#join" className="text-brand-purple hover:underline font-medium">
              Interested in joining? Get in touch.
            </a>
          </p>
        </div>
      </section>

      {/* ── NEWS ─────────────────────────────────────────── */}
      <section id="news" className="bg-white">
        <div className="container-content py-16 md:py-20">
          <SectionHeading>News</SectionHeading>
          <div className="space-y-3">
            {recentNews.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 p-4 rounded-xl border border-surface-border bg-white hover:border-surface-border-strong hover:shadow-sm transition-all group"
              >
                <div className="hidden sm:block w-0.5 shrink-0 self-stretch rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-20 group-hover:opacity-70 transition-opacity" />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className={`badge ${newsTypeBadge[item.type]}`}>
                      {newsTypeLabel[item.type]}
                    </span>
                    <time className="text-xs text-ink-faint">{formatDate(item.date)}</time>
                  </div>
                  <h3 className="font-semibold text-sm text-ink leading-snug">{item.title}</h3>
                  <p className="text-xs text-ink-muted mt-1 leading-relaxed">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-brand-purple hover:text-purple-700 transition-colors"
                    >
                      Learn more
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ───────────────────────────────── */}
      <section id="research" className="border-t border-surface-border">
        <div className="container-content py-16 md:py-20">
          <SectionHeading>Research</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area) => {
              const areaMembers = (area.memberIds ?? [])
                .map((id) => team.find((m) => m.id === id))
                .filter((m): m is NonNullable<typeof m> => Boolean(m))
              return (
                <div
                  key={area.id}
                  className="group p-5 rounded-xl border border-surface-border hover:border-surface-border-strong hover:shadow-sm transition-all flex flex-col"
                >
                  <div className="text-2xl mb-3">{area.icon}</div>
                  <h3 className="font-semibold text-ink mb-1.5">{area.title}</h3>
                  <p className="text-sm text-ink-muted leading-relaxed flex-1">{area.description}</p>
                  {areaMembers.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-surface-border flex flex-wrap gap-x-3 gap-y-1.5">
                      {areaMembers.map((member) => (
                        <a
                          key={member.id}
                          href={`#member-${member.id}`}
                          className="text-xs text-ink-muted hover:text-brand-purple transition-colors"
                        >
                          {getDisplayFirstName(member.name)}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ─────────────────────────────────── */}
      <section id="publications" className="border-t border-surface-border bg-white">
        <div className="container-content py-16 md:py-20">
          <SectionHeading>Publications</SectionHeading>
          <div className="divide-y divide-surface-border">
            {sortedPubs.map((pub) => {
              const isExpanded = expandedPub === pub.id
              return (
                <article key={pub.id} className="py-5 group">
                  <div className="flex gap-4">
                    <div className="hidden sm:block w-0.5 shrink-0 rounded-full bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange opacity-20 group-hover:opacity-70 transition-opacity" />
                    <div className="flex-1 min-w-0">
                      {/* Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`badge ${pubTypeBadgeClass[pub.type]} text-[11px]`}>
                          {pubTypeLabel[pub.type]}
                        </span>
                        <span className="text-xs text-ink-faint">{pub.year}</span>
                        {pub.award && (
                          <span className="badge badge-award text-[11px]">{pub.award}</span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-ink leading-snug mb-1.5">{pub.title}</h3>

                      {/* Authors */}
                      <p className="text-sm text-ink-muted mb-1">
                        {pub.authors.map((author, i) => (
                          <span key={author}>
                            {i > 0 && ', '}
                            {labMemberNames.has(author)
                              ? <strong className="font-semibold text-ink">{author}</strong>
                              : author}
                          </span>
                        ))}
                      </p>

                      {/* Venue */}
                      <p className="text-xs text-ink-faint italic mb-2.5">{pub.venue}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-faint"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Expandable abstract */}
                      {isExpanded && (
                        <p className="mb-3 text-sm text-ink-secondary leading-relaxed border-l-2 border-surface-border pl-3">
                          {pub.abstract}
                        </p>
                      )}

                      {/* Link icons */}
                      <div className="flex flex-wrap items-center gap-3">
                        {pub.links.pdf && (
                          <a href={pub.links.pdf} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1 text-xs font-semibold text-brand-purple hover:text-purple-700 transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            PDF
                          </a>
                        )}
                        {pub.links.code && (
                          <a href={pub.links.code} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            Code
                          </a>
                        )}
                        {pub.links.project && (
                          <a href={pub.links.project} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Project
                          </a>
                        )}
                        {pub.links.demo && (
                          <a href={pub.links.demo} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.328l5.603 3.113z" />
                            </svg>
                            Demo
                          </a>
                        )}
                        {pub.links.slides && (
                          <a href={pub.links.slides} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1 text-xs font-medium text-ink-muted hover:text-ink transition-colors">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                            </svg>
                            Slides
                          </a>
                        )}
                        <button
                          onClick={() => setExpandedPub(isExpanded ? null : pub.id)}
                          className="ml-auto text-xs font-medium text-ink-faint hover:text-ink transition-colors"
                        >
                          {isExpanded ? 'Hide abstract' : 'Abstract'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────── */}
      <section id="team" className="border-t border-surface-border">
        <div className="container-content py-16 md:py-20">
          <SectionHeading>Team</SectionHeading>

          {/* PI card — more prominent */}
          <div id={`member-${pi.id}`} className="mb-6 p-6 rounded-2xl border border-surface-border bg-surface-subtle flex flex-col sm:flex-row gap-5">
            <Avatar name={pi.name} size="lg" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                <div>
                  <h3 className="font-semibold text-ink text-lg leading-tight">{pi.name}</h3>
                  <p className="text-sm text-ink-muted mt-0.5">{pi.title}</p>
                </div>
                <SocialLinks links={pi.links} />
              </div>
              <p className="text-sm text-ink-secondary leading-relaxed mt-2">{pi.bio}</p>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {pi.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-white border border-surface-border text-ink-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Other members — flat grid, no role divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {members.map((member) => (
              <div
                key={member.id}
                id={`member-${member.id}`}
                className="p-5 rounded-xl border border-surface-border hover:border-surface-border-strong hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <Avatar name={member.name} size="md" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-ink text-sm leading-tight">{member.name}</h3>
                        <p className="text-xs text-ink-muted mt-0.5">{member.title}</p>
                      </div>
                      <SocialLinks links={member.links} />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-ink-secondary leading-relaxed mb-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1">
                  {member.interests.map((interest) => (
                    <span
                      key={interest}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-faint"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN US ──────────────────────────────────────── */}
      <section id="join" className="border-t border-surface-border bg-white">
        <div className="container-content py-20 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/images/mindlab-logo-symbol.png`}
            alt=""
            className="w-12 h-12 mx-auto mb-5 opacity-90"
          />
          <h2 className="text-2xl font-semibold mb-3">Interested in Joining?</h2>
          <p className="text-ink-muted max-w-xl mx-auto mb-6 leading-relaxed">
            We welcome applications from PhD students, MS students, and undergraduates
            passionate about machine learning, data science, and trustworthy AI.
            Send a brief introduction and your CV.
          </p>
          <a
            href={lab.joinLink}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-surface-border-strong text-ink text-sm font-medium hover:bg-surface-subtle transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Get in Touch
          </a>

          <div className="mt-10 space-y-1 text-sm text-ink-faint">
            <p>{lab.room}</p>
            <p>
              <a href={`mailto:${lab.email}`} className="hover:text-brand-purple transition-colors">
                {lab.email}
              </a>
            </p>
          </div>

          <p className="mt-10 text-xs text-ink-faint">
            &copy; {new Date().getFullYear()} MIND Lab
          </p>
        </div>
      </section>
    </>
  )
}
