import type { Project } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";
import { OrganizationTag, ProjectContributions, ProjectTags } from "./ProjectDetails";

/** Gallery entry: illustration first, copy sits directly on the page (no card box). */
export default function ProjectCard({
  project,
  wide = false,
}: {
  project: Project;
  /** Spans both columns on md+ with media beside copy (avoids an orphan entry). */
  wide?: boolean;
}) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className={`group flex flex-col gap-6 ${wide ? "md:col-span-2 md:grid md:grid-cols-2 md:items-center md:gap-10" : ""}`}
    >
      <div className="overflow-hidden rounded-3xl shadow-soft transition-shadow duration-300 group-hover:shadow-float">
        <ProjectMedia
          project={project}
          sizes={wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 590px, (min-width: 768px) 45vw, 100vw"}
          className="aspect-[16/10]"
        />
      </div>
      <div className="flex flex-col gap-3">
        <OrganizationTag project={project} />
        <h3 id={`${project.id}-title`} className="type-title text-ink-900">
          {project.title}
        </h3>
        <p className="type-body text-ink-700">{project.summary}</p>
        <ProjectContributions project={project} />
        <div className={`mt-2 border-t pt-4 ${project.tone.divider}`}>
          <ProjectTags project={project} />
        </div>
      </div>
    </article>
  );
}
