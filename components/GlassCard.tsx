import type { ElementType, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: ElementType;
};

export default function GlassCard({
  children,
  className = "",
  hover = false,
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={`glass-panel rounded-3xl ${hover ? "glass-hover" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
