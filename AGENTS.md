# Agent instructions

Personal portfolio for Prabhash Singh. Next.js (App Router) + React 19 + TypeScript + Tailwind CSS v4.

## Design system (preserve it)
- Tokens live in `src/app/globals.css` (`@theme`): cream background `#FEF9F1`, ink `#171923`, terracotta accent `#D96B43`, pastel peach / mint / blue / blush / yellow.
- Fonts via `next/font` in `src/app/layout.tsx`: Playfair Display (headings), Plus Jakarta Sans (body), Caveat (sparse handwritten accents).
- Rounded cards, restrained shadows, no neon gradients, no extra animation. `code.html` in `stitch_editorial_engineer_portfolio_website/` is the visual reference.
- Tailwind v4: utility names differ from v3 (e.g. `shadow-xs` ≈ v3 `shadow-sm`, `backdrop-blur-xs` ≈ v3 `backdrop-blur-sm`).

## Content rules (factual accuracy comes first)
- Source of truth is the resume. Content lives in `src/data/` (`profile.ts`, `skills.ts`, `experience.ts`, `projects.ts`); components only render it.
- Never invent metrics, outcomes, endorsements, certifications, technologies, product names, URLs or links. Only list skills present in `src/data/skills.ts`.
- Keep the two Essentia Softserv employment periods as separate entries.
- Do not publish confidential employer information, internal URLs or real screenshots. Project images are abstract, text-free illustrations.
- Hide actions that have no real destination (e.g. no resume file → no download button; see `profile.resumeUrl`).
- The contact form has no backend: it opens a pre-filled `mailto:` draft and must never claim a message was "sent".

## Illustrations
`python3 scripts/generate-illustrations.py` regenerates `public/img/projects/*.svg` and `public/img/about.svg`. Each project needs its own image.

## Verify before finishing
`npx tsc --noEmit`, `npm run lint`, `npm run build`, then check 390px / 768px / 1440px widths for horizontal overflow and keyboard focus.

## Visual system utilities

Typography, buttons and section spacing live in `src/app/globals.css` as `@utility` classes: `type-hero`, `type-section`, `type-title`, `type-lead`, `type-body`, `type-small`, `type-label`, `section-y`, `btn-primary`, `btn-secondary`. Use them instead of ad-hoc text sizes or button styles. Section intros use `ui/SectionHeader`. Project cards keep one abstract illustration each; hover motion must respect `prefers-reduced-motion`.
