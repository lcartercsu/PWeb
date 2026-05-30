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
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-[0.22em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-2xl font-serif text-[36px] font-medium leading-tight tracking-tight text-[#1d1d1f] md:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-prose text-[16px] leading-relaxed text-[#6e6e73] md:text-[17px]">
          {description}
        </p>
      )}
    </div>
  );
}
