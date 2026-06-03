import Image from "next/image";
import { type TeamMember } from "@/lib/team";

type TeamCardProps = {
  member: TeamMember;
  variant?: "standard" | "lead";
};

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export function TeamCard({ member, variant = "standard" }: TeamCardProps) {
  if (variant === "lead") {
    return (
      <article className="grid gap-10 md:grid-cols-[260px_1fr] md:gap-16">
        <Avatar member={member} size="lg" />

        <div className="flex flex-col gap-5 md:justify-center">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400">{member.role}</p>
            <h3 className="mt-1 text-[26px] font-bold leading-tight tracking-tight text-gray-900">
              {member.name}
            </h3>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-600">{member.bio}</p>

          <p className="text-[13px] text-gray-500">{member.focus.join(" · ")}</p>

          {member.education.length > 0 && (
            <p className="text-[13px] text-gray-500">{member.education[0]}</p>
          )}

          <div className="flex items-center gap-4 pt-3 border-t border-gray-200">
            {member.email && (
              <a href={`mailto:${member.email}`} className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">
                {member.email}
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col gap-5">
      <Avatar member={member} size="md" />
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-[17px] font-semibold tracking-tight text-gray-900">{member.name}</h3>
          <p className="mt-0.5 text-[11px] uppercase tracking-widest text-gray-400">{member.role}</p>
        </div>
        <p className="text-[13px] leading-relaxed text-gray-600">{member.bio}</p>
        <p className="text-[13px] text-gray-500">{member.focus.join(" · ")}</p>
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-[13px] text-gray-600 hover:text-gray-900 transition-colors">
            {member.email}
          </a>
        )}
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="ml-auto text-gray-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        )}
      </div>
    </article>
  );
}

function Avatar({ member, size }: { member: TeamMember; size: "md" | "lg" }) {
  const containerClass = size === "lg" ? "w-[240px]" : "w-full";

  if (member.photo) {
    return (
      <div className={`relative overflow-hidden ${containerClass}`} style={{ aspectRatio: "3/4" }}>
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top grayscale"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>
    );
  }

  const placeholderH = size === "lg" ? "h-[320px]" : "h-[300px]";
  return (
    <div className={`grid place-items-center bg-gray-50 ${containerClass} ${placeholderH}`} aria-hidden>
      <span className={`font-semibold tracking-tight text-gray-200 ${size === "lg" ? "text-[72px]" : "text-[48px]"}`}>
        {member.initials}
      </span>
    </div>
  );
}
