import { SectionBadge } from "@/components/ui/SectionBadge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  id: string;
  eyebrow: string;
  tone?: string;
  title: React.ReactNode;
  intro?: string;
  className?: string;
  children?: React.ReactNode;
};

/** Eyebrow + heading + short intro, left-aligned so every section opens the same way. */
export function SectionHeader({
  id,
  eyebrow,
  title,
  intro,
  className,
  children,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-3xl sm:mb-14", className)}>
      <SectionBadge>{eyebrow}</SectionBadge>
      <h2 id={id} className="type-section mt-4 text-ink-900">
        {title}
      </h2>
      {intro && <p className="type-body mt-4 max-w-2xl text-ink-700">{intro}</p>}
      {children}
    </div>
  );
}
