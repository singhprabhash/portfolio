import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { education, profile } from "@/data/profile";

const facts = [
  { label: "Experience", value: `${profile.yearsOfExperience} years` },
  { label: "Focus", value: "Frontend architecture" },
  { label: "Education", value: `B.Tech, ${education.major}` },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-y border-t border-ink-900/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="mx-auto w-full max-w-md lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[31/34] overflow-hidden rounded-[2rem] bg-pastel-peachLight">
              <Image
                src="/img/about.svg"
                alt="Abstract illustration of a laptop on a desk with lines of code, a mug and a plant."
                fill
                unoptimized
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <SectionBadge>About me</SectionBadge>
            <h2 id="about-heading" className="type-section mt-4 max-w-xl text-ink-900">
              Turning Complex Ideas Into Thoughtful Experiences
            </h2>

            <div className="type-body mt-6 max-w-[40rem] space-y-5 text-ink-800">
              <p>
                I&apos;m a Software Engineer with {profile.yearsOfExperience} years
                of experience developing high-quality, responsive web
                applications and enterprise software. My work spans frontend
                architecture, server-side rendering, enterprise application
                modernization, real-time integrations, healthcare document
                workflows, and insurance SaaS platforms.
              </p>
              <p>
                I work primarily with JavaScript, TypeScript, React.js, and
                Vue.js, with experience in frameworks such as Next.js and
                Nuxt.js. I care about maintainable architecture, responsive user
                experiences, performance, testing, and reliable software
                delivery.
              </p>
              <p>
                I&apos;ve contributed to products in healthcare, insurance,
                education, and enterprise operations, collaborating on features
                that support complex business workflows and large-scale
                applications.
              </p>
            </div>

            <dl className="mt-10 grid max-w-[40rem] gap-6 border-t border-ink-900/10 pt-6 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="type-label text-ink-500">{f.label}</dt>
                  <dd className="type-small mt-1.5 font-semibold text-ink-900">{f.value}</dd>
                </div>
              ))}
            </dl>

            {profile.resumeUrl && (
              <div className="mt-8">
                <a href={profile.resumeUrl} download target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Download Resume
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
