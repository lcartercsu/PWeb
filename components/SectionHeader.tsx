import { type ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignment} ${className}`}>
      {eyebrow && (
        <div
          className={`flex items-center gap-3 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="rule" aria-hidden />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <h2 className="max-w-3xl text-balance font-serif text-3xl leading-[1.1] tracking-tight text-ink md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <div className="max-w-prose text-pretty text-base leading-relaxed text-ink-muted md:text-lg">
          {description}
        </div>
      )}
    </div>
  );
}
