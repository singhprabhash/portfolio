import { SectionHeader } from "@/components/ui/SectionHeader";
import { roles } from "@/data/experience";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="section-y border-t border-ink-900/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="experience-heading"
          eyebrow="Career timeline"
          title="Where I've Worked"
          intro={`${profile.yearsOfExperience} years across product and enterprise engineering roles, newest first.`}
        />

        <ol className="relative">
          <span aria-hidden="true" className="absolute bottom-2 left-[6px] top-2 w-px bg-ink-900/20 md:left-[calc(16rem+6px)]" />
          {roles.map((role) => (
            <li
              key={`${role.company}-${role.period}`}
              className="relative grid gap-x-12 pb-12 pl-9 last:pb-0 md:grid-cols-[16rem_1fr] md:pl-0"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 md:left-[16rem] ${
                  role.current ? "border-terracotta bg-terracotta" : "border-ink-900/50 bg-[#FEF9F1]"
                }`}
              />
              <div className="mb-2 md:mb-0 md:pr-4 md:text-right">
                <p className="text-lg font-semibold leading-snug text-ink-900">{role.company}</p>
                <p className="mt-1 text-[0.9375rem] text-ink-500">{role.location}</p>
                <p className="mt-0.5 text-[0.9375rem] text-ink-500">{role.period}</p>
              </div>
              <div className="min-w-0 md:pl-10">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="type-title text-ink-900">{role.title}</h3>
                  {role.current && (
                    <span className="text-sm font-semibold text-terracotta-deep">Current role</span>
                  )}
                </div>
                <p className="type-body mt-3 max-w-[44rem] text-ink-800">{role.summary}</p>
                <ul className="mt-4 max-w-[44rem] space-y-2.5">
                  {role.points.map((p) => (
                    <li key={p} className="type-small flex items-start gap-3 text-ink-700">
                      <span aria-hidden="true" className="mt-[10px] h-px w-3 shrink-0 bg-terracotta" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
