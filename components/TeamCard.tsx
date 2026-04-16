import Link from "next/link";
import { type TeamMember } from "@/lib/team";

type TeamCardProps = {
  member: TeamMember;
  variant?: "standard" | "lead";
};

export function TeamCard({ member, variant = "standard" }: TeamCardProps) {
  if (variant === "lead") {
    return (
      <article className="grid gap-10 border-t border-ink/10 pt-12 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-16">
        <div className="flex flex-col gap-6">
          <Portrait initials={member.initials} size="lg" />
          <div>
            <p className="eyebrow">Socio principal</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight tracking-tight md:text-4xl">
              {member.name}
            </h3>
            <p className="mt-2 text-sm uppercase tracking-eyebrow text-ink-muted">
              {member.role}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <p className="text-pretty text-lg leading-relaxed text-ink">
            {member.bio}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Líneas de trabajo</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                {member.focus.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] inline-block h-px w-4 bg-gold"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Formación</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-muted">
                {member.education.map((e) => (
                  <li key={e} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-[0.55rem] inline-block h-px w-4 bg-gold"
                    />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex w-fit items-center gap-2 border border-ink px-4 py-2 text-xs uppercase tracking-eyebrow text-ink transition-colors hover:bg-ink hover:text-bone"
            >
              Contactar al estudio
            </Link>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-eyebrow text-ink-muted transition-colors hover:text-ink"
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
    <article className="group flex flex-col gap-5 border-t border-ink/10 pt-8">
      <Portrait initials={member.initials} size="md" />
      <div>
        <h3 className="font-serif text-xl leading-tight tracking-tight md:text-2xl">
          {member.name}
        </h3>
        <p className="mt-1 text-xs uppercase tracking-eyebrow text-ink-muted">
          {member.role}
        </p>
      </div>
      <p className="text-sm leading-relaxed text-ink-muted">{member.bio}</p>
      <ul className="mt-2 space-y-1.5 text-xs text-ink-muted">
        {member.focus.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden className="mt-[0.55rem] inline-block h-px w-3 bg-gold" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Portrait({
  initials,
  size,
}: {
  initials: string;
  size: "md" | "lg";
}) {
  const dims =
    size === "lg"
      ? "aspect-[4/5] w-full max-w-sm"
      : "aspect-[4/5] w-full max-w-[18rem]";
  return (
    <div
      className={`relative ${dims} overflow-hidden bg-bone-deep`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(138,109,59,0.12),_rgba(17,20,24,0.08))]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-6xl tracking-tight text-ink/35 md:text-7xl">
          {initials}
        </span>
      </div>
      <div className="absolute left-4 top-4 h-px w-10 bg-gold" />
      <div className="absolute bottom-4 right-4 h-10 w-px bg-gold" />
    </div>
  );
}
