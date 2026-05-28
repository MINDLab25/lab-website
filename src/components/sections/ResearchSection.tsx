import { researchAreas, team } from '@/data/site'
import SectionHeading from '@/components/SectionHeading'
import { getDisplayFirstName } from '@/lib/utils'

export default function ResearchSection() {
  return (
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
  )
}
