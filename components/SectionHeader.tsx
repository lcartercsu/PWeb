import { type ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {eyebrow && <p className="label">{eyebrow}</p>}
      <h2 className="max-w-[520px] text-[32px] font-bold leading-[1.1] tracking-tight text-gray-900 md:text-[40px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[460px] text-[16px] leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
