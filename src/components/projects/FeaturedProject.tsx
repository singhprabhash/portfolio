import type { Project } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";
import { OrganizationTag, ProjectHighlights, ProjectTags } from "./ProjectDetails";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <article
      aria-labelledby={`${project.id}-title`}
      className={`${project.tone.card} group grid overflow-hidden rounded-[2rem] border ${project.tone.border} lg:grid-cols-12`}
    >
      <div className="lg:col-span-7 lg:self-center lg:p-6">
        <ProjectMedia
          project={project}
          sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
          className="aspect-[16/10] lg:rounded-3xl"
        />
      </div>
      <div className="flex flex-col gap-5 p-6 sm:p-9 lg:col-span-5 lg:p-10">
        <OrganizationTag project={project} />
        <h3 id={`${project.id}-title`} className="type-section text-[clamp(1.75rem,1.4rem+1.3vw,2.5rem)]!">
          {project.title}
        </h3>
        <p className="type-body text-ink-700">{project.summary}</p>
        <ProjectHighlights project={project} />
        <div className="pt-1">
          <ProjectTags project={project} />
        </div>
      </div>
    </article>
  );
}
