import { team, lab } from "@/data/site";
import type { TeamMember } from "@/data/site";
import Avatar from "@/components/Avatar";
import SocialLinks from "@/components/SocialLinks";
import BioExpand from "@/components/BioExpand";
import AlumniList from "@/components/AlumniList";
import JsonLd from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/team/",
  `Meet the faculty, students, and alumni of the ${lab.fullName} at ${lab.university}.`,
  "Team",
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": team
    .filter((m) => m.role !== "mascot")
    .map((m) => ({
      "@type": "Person",
      name: m.name,
      jobTitle: m.title,
      ...(m.photo && { image: `${lab.url}/images/team/${m.photo}` }),
      ...(m.role === "alumni"
        ? { alumniOf: { "@id": `${lab.url}/#lab` } }
        : { memberOf: { "@id": `${lab.url}/#lab` } }),
      sameAs: [
        m.links.website,
        m.links.github,
        m.links.twitter,
        m.links.googleScholar,
        m.links.linkedin,
      ].filter(Boolean),
    })),
};

export default function TeamPage() {
  const pi = team.find((m) => m.role === "pi")!;
  const postdocs = team.filter((m) => m.role === "postdoc");
  const phd = team.filter((m) => m.role === "phd");
  const ms = team.filter((m) => m.role === "ms");
  const undergrads = team.filter((m) => m.role === "undergrad");
  const mascots = team.filter((m) => m.role === "mascot");
  const alumni = team.filter((m) => m.role === "alumni");

  return (
    <div className="container-content py-14 md:py-20">
      <JsonLd data={jsonLd} />
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-semibold mb-2">Team</h1>
        <p className="text-ink-muted">The people behind the research.</p>
      </div>

      {/* PI */}
      <section className="mb-14">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-6">
          Principal Investigator
        </h2>
        <div className="p-6 rounded-2xl border border-surface-border bg-surface flex flex-col sm:flex-row gap-6">
          <Avatar name={pi.name} photo={pi.photo || undefined} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-1.5">
              <div>
                <h3 className="text-xl font-semibold text-ink">{pi.name}</h3>
                <p className="text-sm text-ink-muted mt-0.5">{pi.title}</p>
                <p className="text-sm text-ink-faint">
                  {lab.department}, {lab.university}
                </p>
              </div>
              <SocialLinks links={pi.links} />
            </div>
            <p className="text-sm text-ink-secondary leading-relaxed mt-3">
              {pi.bio}
            </p>
            {pi.interests.length > 0 && (
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
            )}
          </div>
        </div>
      </section>

      {postdocs.length > 0 && (
        <MemberSection title="Postdoctoral Researchers" members={postdocs} />
      )}
      {phd.length > 0 && <MemberSection title="PhD Students" members={phd} />}
      {ms.length > 0 && <MemberSection title="MS Students" members={ms} />}
      {undergrads.length > 0 && (
        <MemberSection title="Undergraduate Researchers" members={undergrads} />
      )}
      {mascots.length > 0 && (
        <MemberSection title="Lab Mascots" members={mascots} />
      )}

      {/* Alumni */}
      {alumni.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-6">
            Alumni
          </h2>
          <AlumniList />
        </section>
      )}
    </div>
  );
}

function MemberSection({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  return (
    <section className="mb-12">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-ink-faint mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="p-5 rounded-xl border border-surface-border bg-surface hover:border-surface-border-strong hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4 h-full">
              <Avatar
                name={member.name}
                photo={member.photo || undefined}
                size="md"
                photoPosition={member.photoPosition}
              />
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-ink">{member.name}</h3>
                    <p className="text-xs text-ink-muted mt-0.5">
                      {member.title}
                      {member.joinYear && (
                        <span className="text-ink-faint">
                          {" "}
                          &middot; Since {member.joinYear}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <BioExpand bio={member.bio} className="mt-2.5" />
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2.5">
                  {member.interests.map((i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 py-0.5 rounded-full bg-surface-subtle border border-surface-border text-ink-muted"
                    >
                      {i}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end mt-3">
                  <SocialLinks links={member.links} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
