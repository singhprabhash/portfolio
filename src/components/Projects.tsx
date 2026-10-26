import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import FeaturedProject from "@/components/projects/FeaturedProject";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="section-y"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          id="work-heading"
          eyebrow="Featured work"
          tone="bg-pastel-blue/60 border-[#BCD4ED]"
          title="Selected Projects"
          intro="Product and platform work across insurance, healthcare documents, OCR, and enterprise modernization. Illustrations are abstract concepts, not screenshots."
          className="mb-10 sm:mb-14"
        >
          <Link
            href="#contact"
            className="touch-target mt-3 inline-flex items-center gap-1.5 text-base font-semibold text-ink-900 hover:text-terracotta-deep transition-colors"
          >
            Inquire about projects <span aria-hidden="true">→</span>
          </Link>
        </SectionHeader>

        <div className="space-y-12 sm:space-y-16">
          <FeaturedProject project={featured} />
          <div className="grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-2">
            {rest.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                wide={rest.length % 2 === 1 && i === rest.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
