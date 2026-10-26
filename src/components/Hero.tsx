import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-14"
    >
      {/* Ambient pastel blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-8 -z-10 h-80 w-80 rounded-full bg-pastel-peach/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-44 -z-10 h-72 w-72 rounded-full bg-pastel-mint/50 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column: copy & actions */}
          <div className="space-y-6 text-left lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#EAC4B0] bg-pastel-peach/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-800">
              <span>Hello, I&apos;m</span>
              <span aria-hidden="true" className="inline-block h-[1.5px] w-4 bg-ink-800/40" />
            </p>

            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>

            <h2 className="max-w-xl text-xl font-normal leading-snug text-ink-700 sm:text-2xl">
              Software Engineer Who Builds{" "}
              <span className="inline-block px-1 font-handwriting text-4xl font-semibold italic text-[#D96B43] sm:text-5xl">
                Digital Experiences
              </span>{" "}
              That Feel Effortless.
            </h2>

            <p className="type-body max-w-lg text-ink-700">
              I build thoughtful digital products and responsive interfaces,
              combining frontend engineering with a strong eye for detail.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link href="#work" className="btn-primary">
                <span>Explore My Work</span>
                <span aria-hidden="true">➔</span>
              </Link>
              <Link href="#contact" className="btn-secondary">
                Let&apos;s Connect
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-black/[0.08] pt-5 text-sm font-semibold uppercase tracking-wider text-ink-800">
              <a
                className="touch-target inline-flex items-center underline decoration-ink-400/60 underline-offset-4 hover:text-terracotta-deep"
                href={profile.linkedinUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <span aria-hidden="true" className="text-ink-400">•</span>
              <a
                className="touch-target inline-flex items-center underline decoration-ink-400/60 underline-offset-4 hover:text-terracotta-deep"
                href={`mailto:${profile.email}`}
              >
                Email
              </a>
            </div>
          </div>

          {/* Right column: portrait & organic layers */}
          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <div className="relative w-full max-w-[21rem] sm:max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 -rotate-3 rounded-[2.5rem] bg-pastel-mint shadow-xs sm:-inset-4"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 rotate-3 rounded-[2.5rem] bg-pastel-peach opacity-90 shadow-xs"
              />

              {/* Handwritten doodle, top left */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-10 z-20 hidden -rotate-6 select-none flex-col items-start text-ink-800 xl:-left-36 xl:flex"
              >
                <span className="font-handwriting text-xl font-medium leading-none sm:text-2xl">
                  <span className="block leading-none">Good Code</span>
                  <span className="mt-1 block leading-none">Brighter Tomorrow</span>
                </span>
                <svg className="ml-6 mt-1 h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 40 40">
                  <path d="M8,6 C16,10 26,14 30,24 M30,24 L30,16 M30,24 L22,22" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Portrait frame */}
              <div className="relative h-[24rem] overflow-hidden rounded-[2.2rem] border-4 border-white bg-cream-200 shadow-soft sm:h-[30rem] lg:h-[32rem]">
                <Image
                  src="/img/portrait.jpg"
                  alt={`Portrait of ${profile.name}`}
                  fill
                  priority
                  sizes="(min-width: 640px) 448px, 336px"
                  className="object-cover object-[38%_40%]"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />
              </div>

              {/* Floating details (kept to one card + one note) */}
              <div className="absolute -right-2 top-3 z-20 rounded-2xl border border-black/5 bg-white/95 p-3 shadow-float sm:-right-7 sm:p-3.5">
                <div className="font-serif text-2xl font-bold leading-none text-ink-900">
                  {profile.yearsOfExperience}
                </div>
                <div className="mt-1 text-xs font-medium leading-tight text-ink-500">
                  Years of
                  <br />
                  Experience
                </div>
              </div>

              <p
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-9 right-2 z-20 -rotate-3 select-none whitespace-nowrap font-handwriting text-xl font-medium text-ink-800 sm:right-3 sm:text-2xl"
              >
                Building better experiences ♡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
