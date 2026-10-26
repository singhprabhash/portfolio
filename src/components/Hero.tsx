import Image from "next/image";
import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { heroHighlights, profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pb-24 pt-8 sm:pt-12 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <SectionBadge>Hello, I&apos;m {profile.name}</SectionBadge>

            <h1 className="type-hero mt-5 text-ink-900">
              <span className="sm:block">Building thoughtful</span>{" "}
              <span className="italic font-semibold text-terracotta sm:block">
                digital experiences
              </span>{" "}
              <span className="sm:block">and scalable software systems.</span>
            </h1>

            <p className="type-lead mt-6 max-w-[34rem] text-ink-700">
              I&apos;m a {profile.title} with {profile.yearsOfExperience} years of
              experience building responsive web applications, modernizing
              enterprise platforms, and developing complex SaaS products across
              insurance and healthcare.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="#work" className="btn-primary">
                <span>View My Work</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="#contact" className="btn-secondary">
                Let&apos;s Talk
              </Link>
            </div>

            <ul
              aria-label="Professional highlights"
              className="mt-10 grid max-w-[40rem] gap-x-8 gap-y-3 border-t border-ink-900/10 pt-6 sm:grid-cols-2"
            >
              {heroHighlights.map((item) => (
                <li key={item} className="type-small flex items-center gap-3 font-medium text-ink-800">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:col-span-5 lg:mx-0 lg:ml-auto lg:max-w-[28rem]">
            {/* One layered shape and one offset outline, behind the photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-pastel-peach sm:translate-x-6 sm:translate-y-6"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 -translate-x-3 -translate-y-3 rounded-[2rem] border border-terracotta/40"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-pastel-peachLight">
              <Image
                src="/img/portrait.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 448px, (min-width: 640px) 416px, 352px"
                className="object-cover object-[38%_40%]"
              />
            </div>
            <p
              aria-hidden="true"
              className="absolute -bottom-14 right-2 -rotate-2 select-none whitespace-nowrap font-handwriting text-2xl text-ink-800 sm:right-4"
            >
              Building better experiences ♡
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
