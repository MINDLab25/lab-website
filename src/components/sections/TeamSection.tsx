import { team } from '@/data/site'
import SectionHeading from '@/components/SectionHeading'
import Avatar from '@/components/Avatar'
import SocialLinks from '@/components/SocialLinks'
import BioExpand from '@/components/BioExpand'

const currentMembers = team.filter((m) => m.role !== 'alumni')
const pi = currentMembers.find((m) => m.role === 'pi')!
const members = currentMembers.filter((m) => m.role !== 'pi')

export default function TeamSection() {
  return (
    <section id="team" className="border-t border-surface-border">
      <div className="container-content py-16 md:py-20">
        <SectionHeading>Team</SectionHeading>

        {/* PI card */}
        <div id={`member-${pi.id}`} className="mb-6 p-6 rounded-2xl border border-surface-border bg-surface-subtle flex flex-col sm:flex-row gap-5">
          <Avatar name={pi.name} photo={pi.photo || undefined} size="lg" />
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
                  className="text-[11px] px-2.5 py-0.5 rounded-full bg-surface border border-surface-border text-ink-muted"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((member) => (
            <div
              key={member.id}
              id={`member-${member.id}`}
              className="p-5 rounded-xl border border-surface-border hover:border-surface-border-strong hover:shadow-sm transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <Avatar name={member.name} photo={member.photo || undefined} size="md" photoPosition={member.photoPosition} />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-ink text-sm leading-tight">{member.name}</h3>
                  <p className="text-xs text-ink-muted mt-0.5">{member.title}</p>
                </div>
              </div>
              <BioExpand bio={member.bio} className="mb-3" />
              <div className="flex flex-wrap gap-1 mt-auto">
                {member.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-faint"
                  >
                    {interest}
                  </span>
                ))}
              </div>
              <div className="flex justify-end mt-3">
                <SocialLinks links={member.links} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
