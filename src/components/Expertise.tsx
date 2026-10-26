import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/data/skills";

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-y border-y border-ink-900/10 bg-cream-200/70"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="expertise-heading"
          eyebrow="Skills"
          title="Skills & Expertise"
          intro="The tools and practices I use day to day, grouped by the kind of work they support."
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section key={group.title} aria-labelledby={`skills-${group.title.replace(/\W+/g, "-")}`} className="border-t-2 border-ink-900 pt-5">
              <h3 id={`skills-${group.title.replace(/\W+/g, "-")}`} className="type-title text-ink-900">
                {group.title}
              </h3>
              <p className="type-small mt-2 text-ink-700">{group.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const primary = group.primary?.includes(skill);
                  return (
                    <li
                      key={skill}
                      className={
                        primary
                          ? "rounded-full bg-ink-900 px-3.5 py-1.5 text-sm font-medium text-cream-50"
                          : "rounded-full border border-ink-900/20 bg-cream-50/70 px-3.5 py-1.5 text-sm font-medium text-ink-800"
                      }
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
