import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  /** Kept for call-site compatibility; the eyebrow is now plain text. */
  tone?: string;
  dash?: boolean;
  gap?: string;
  className?: string;
};

/** Quiet eyebrow: a short terracotta rule and small caps text. No pill. */
export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <p
      className={cn(
        "type-label inline-flex items-center gap-3 text-terracotta-deep",
        className
      )}
    >
      <span aria-hidden="true" className="h-px w-8 bg-terracotta" />
      <span>{children}</span>
    </p>
  );
}
