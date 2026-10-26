import Image from "next/image";
import type { Project } from "@/data/projects";

/** Abstract illustration (not a screenshot) on its own pastel background. */
export default function ProjectMedia({
  project,
  sizes,
  className = "aspect-[16/10]",
}: {
  project: Project;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-cream-200 ${className}`}>
      <Image
        src={project.image}
        alt={project.imageAlt}
        fill
        unoptimized
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
      />
    </div>
  );
}
