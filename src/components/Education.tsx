import { education } from "@/data/profile";

export default function Education() {
  return (
    <section id="education" aria-labelledby="education-heading" className="border-t border-ink-900/10 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-x-12 gap-y-3 md:grid-cols-[16rem_1fr]">
          <h2 id="education-heading" className="type-label text-terracotta-deep md:pt-2 md:text-right md:pr-4">
            Education
          </h2>
          <div className="md:pl-10">
            <p className="type-title text-ink-900">{education.degree}</p>
            <p className="type-body mt-2 text-ink-800">
              {education.major}
              <span className="text-ink-500"> · {education.institution}</span>
            </p>
            <p className="mt-1 text-[0.9375rem] text-ink-500">{education.period}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
