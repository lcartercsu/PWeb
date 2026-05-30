import Link from "next/link";
import { type TeamMember } from "@/lib/team";

type TeamCardProps = {
  member: TeamMember;
  variant?: "standard" | "lead";
};

export function TeamCard({ member, variant = "standard" }: TeamCardProps) {
  if (variant === "lead") {
    return (
      <article className="grid gap-12 md:grid-cols-[280px_1fr] md:gap-16">
        <div>
          <Initials value={member.initials} size="lg" />
          <p className="label mt-6">Socio fundador</p>
          <h3 className="mt-2 text-[28px] font-bold leading-tight tracking-tight text-gray-900">
            {member.name}
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[17px] leading-relaxed text-gray-600">{member.bio}</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="label mb-3">Especialidades</p>
              <ul className="space-y-1.5 text-[14px] text-gray-600">
                {member.focus.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div>
              <p className="label mb-3">Formación</p>
              <ul className="space-y-1.5 text-[14px] text-gray-600">
                {member.education.map((e) => <li key={e}>{e}</li>)}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <Link href="/contacto" className="btn-dark !text-[13px]">Contactar</Link>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-gray-500 hover:text-gray-900"
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
    <article className="flex flex-col gap-4">
      <Initials value={member.initials} size="md" />
      <div>
        <h3 className="text-[18px] font-semibold tracking-tight text-gray-900">{member.name}</h3>
        <p className="mt-0.5 text-[13px] text-gray-500">{member.role}</p>
      </div>
      <p className="text-[14px] leading-relaxed text-gray-600">{member.bio}</p>
      <ul className="space-y-1 text-[13px] text-gray-500">
        {member.focus.map((f) => <li key={f}>{f}</li>)}
      </ul>
    </article>
  );
}

function Initials({ value, size }: { value: string; size: "md" | "lg" }) {
  return (
    <div
      className={`grid place-items-center bg-gray-50 ${
        size === "lg" ? "h-[280px] w-[240px]" : "h-[180px] w-full"
      }`}
      aria-hidden
    >
      <span className={`font-semibold tracking-tight text-gray-200 ${
        size === "lg" ? "text-[72px]" : "text-[48px]"
      }`}>
        {value}
      </span>
    </div>
  );
}
