import type { Project } from "@/data/projects";

const MAX_TAGS = 4;

export function ProjectTags({ project }: { project: Project }) {
  return (
    <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2">
      {project.tags.slice(0, MAX_TAGS).map((t) => (
        <li key={t} className="rounded-full border border-ink-900/20 px-3 py-1 text-sm font-medium text-ink-800">
          {t}
        </li>
      ))}
    </ul>
  );
}

export function ProjectHighlights({ project }: { project: Project }) {
  return (
    <ul className="space-y-2.5">
      {project.highlights.map((h) => (
        <li key={h} className="type-small flex items-start gap-3 text-ink-800">
          <span aria-hidden="true" className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

/** Native disclosure: keyboard accessible, no JS. */
export function ProjectContributions({ project }: { project: Project }) {
  return (
    <details className="group/d">
      <summary className="touch-target inline-flex cursor-pointer list-none items-center gap-2 text-[0.9375rem] font-semibold text-ink-900 hover:text-terracotta-deep [&::-webkit-details-marker]:hidden">
        <span>Key contributions</span>
        <span aria-hidden="true" className="text-lg leading-none text-terracotta transition-transform group-open/d:rotate-45 motion-reduce:transition-none">
          +
        </span>
      </summary>
      <div className="pt-1 pb-2">
        <ProjectHighlights project={project} />
      </div>
    </details>
  );
}

export function OrganizationTag({ project }: { project: Project }) {
  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className={`type-label ${project.tone.orgText}`}>{project.organization}</span>
      {project.context && <span className="text-sm font-medium text-ink-500">{project.context}</span>}
    </p>
  );
}
