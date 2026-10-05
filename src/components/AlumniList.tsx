import { team } from "@/data/site";
import Avatar from "@/components/Avatar";

const alumni = team.filter((m) => m.role === "alumni");

export default function AlumniList() {
  if (alumni.length === 0) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {alumni.map((member) => (
        <div
          key={member.id}
          id={`member-${member.id}`}
          className="flex items-center gap-3 p-3 rounded-xl border border-surface-border bg-surface"
        >
          <Avatar
            name={member.name}
            photo={member.photo || undefined}
            size="sm"
            photoPosition={member.photoPosition}
          />
          <div className="min-w-0">
            <p className="font-medium text-sm text-ink leading-tight">
              {member.name}
            </p>
            {member.currentPosition && (
              <p className="text-xs text-ink-muted mt-0.5">
                {member.currentPosition}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
