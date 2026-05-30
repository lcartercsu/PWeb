import Link from "next/link";
import { type TeamMember } from "@/lib/team";

type TeamCardProps = {
  member: TeamMember;
  variant?: "standard" | "lead";
};

export function TeamCard({ member, variant = "standard" }: TeamCardProps) {
  if (variant === "lead") {
    return (
      <article className="grid gap-12 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-16">
        <div className="flex flex-col gap-6">
          <Portrait initials={member.initials} size="lg" />
          <div>
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Socio principal
            </span>
            <h3 className="mt-3 font-serif text-[32px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
              {member.name}
            </h3>
            <p className="mt-1.5 text-[12px] uppercase tracking-[0.16em] text-[#86868b]">
              {member.role}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <p className="text-[17px] leading-relaxed text-[#6e6e73]">
            {member.bio}
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                Líneas de trabajo
              </p>
              <ul className="space-y-2.5">
                {member.focus.map((f) => (
                  <li key={f} className="flex gap-3 text-[14px] leading-snug text-[#6e6e73]">
                    <span aria-hidden className="mt-[6px] inline-block h-px w-3 shrink-0 bg-gold/60" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
                Formación
              </p>
              <ul className="space-y-2.5">
                {member.education.map((e) => (
                  <li key={e} className="flex gap-3 text-[14px] leading-snug text-[#6e6e73]">
                    <span aria-hidden className="mt-[6px] inline-block h-px w-3 shrink-0 bg-gold/60" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contacto" className="btn-primary text-[13px]">
              Contactar al estudio
            </Link>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
              >
                LinkedIn →
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-5 border-t border-[#d2d2d7]/60 pt-8">
      <Portrait initials={member.initials} size="md" />
      <div>
        <h3 className="font-serif text-[22px] font-medium leading-tight tracking-tight text-[#1d1d1f]">
          {member.name}
        </h3>
        <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[#86868b]">
          {member.role}
        </p>
      </div>
      <p className="text-[14px] leading-relaxed text-[#6e6e73]">{member.bio}</p>
      <ul className="mt-1 space-y-1.5">
        {member.focus.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2.5 text-[13px] text-[#6e6e73]">
            <span aria-hidden className="mt-[5px] inline-block h-px w-3 shrink-0 bg-gold/60" />
            {f}
          </li>
        ))}
      </ul>
    </article>
  );
}

function Portrait({ initials, size }: { initials: string; size: "md" | "lg" }) {
  const dims =
    size === "lg"
      ? "aspect-[4/5] w-full max-w-sm"
      : "aspect-[4/5] w-full max-w-[18rem]";
  return (
    <div className={`relative ${dims} overflow-hidden bg-[#f5f5f7]`} aria-hidden>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-[64px] font-medium tracking-tight text-[#d2d2d7] md:text-[80px]">
          {initials}
        </span>
      </div>
      <div className="absolute left-4 top-4 h-px w-8 bg-gold/40" />
      <div className="absolute bottom-4 right-4 h-8 w-px bg-gold/40" />
    </div>
  );
}
