import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  as?: "div" | "section" | "article" | "header" | "footer";
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-editorial",
  wide: "max-w-7xl",
} as const;

export function Container({
  children,
  as: Tag = "div",
  className = "",
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-6 md:px-10 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
