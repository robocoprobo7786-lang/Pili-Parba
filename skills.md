---
name: pili-parba-implementation
description: Permanent implementation guide for the Pili Parba website. Use this whenever generating, editing, or reviewing code for this project.
triggers:
  - "Pili Parba"
  - "pili-parba"
  - "Tiger Dance festival site"
---

# Project Overview

Pili Parba is the official cultural website for the Tiger Dance (Pili Vesha) festival of Tulunadu. It is built as a modern, cinematic, content-rich site combining an immersive brand experience with clear, tourism-grade information architecture (events, troupes, history, gallery, visiting info). This document is the implementation contract for any AI coding agent (Claude Code, Cursor, Windsurf, Antigravity, Copilot) working on this codebase. It must be read alongside `pili-parba-design.md`, which is the visual/UX source of truth. Code must never contradict that design system.

# Folder Structure

```
/app
  /(marketing)
    /page.tsx                 → Homepage
    /events/page.tsx          → Events listing
    /events/[slug]/page.tsx   → Event detail
    /troupes/page.tsx         → Troupe directory
    /troupes/[slug]/page.tsx  → Troupe profile
    /history/page.tsx         → History & heritage
    /gallery/page.tsx         → Photo/video gallery
    /visit/page.tsx           → Visitor info
    /journal/page.tsx         → Editorial/blog index
    /journal/[slug]/page.tsx  → Article detail
/components
  /ui                         → Primitive, design-system components (Button, Card, Badge, Input...)
  /layout                     → Header, Footer, Nav, Container
  /sections                   → Page-level composed sections (Hero, Timeline, EventGrid...)
  /motion                     → Reusable scroll/hover animation wrappers
/lib
  /data                       → Data-fetching and typed data access functions
  /utils                      → Formatting, date, slug helpers
  /constants                  → Design tokens mirrored as TS constants where needed
/content                      → MDX or JSON content for history, journal (pre-CMS)
/public
  /images
  /fonts
/styles
  /globals.css
  /tokens.css                 → CSS custom properties for the design system
```

# Architecture

- **Framework:** Next.js (App Router), React Server Components by default.
- **Rendering strategy:** Static generation (SSG/ISR) for content pages (history, troupes, journal); server-rendered with revalidation for events (data changes seasonally); client components only where interactivity requires it (filters, carousels, modals, forms).
- **Styling:** Tailwind CSS, theme extended with Pili Parba design tokens — no ad hoc inline styles for color/spacing/type.
- **Content layer:** Start with typed local data (JSON/MDX) behind a data-access abstraction (`/lib/data`) so a future CMS can be swapped in without touching UI components.

# Component Strategy

- Build a small set of **primitive components** (`Button`, `Card`, `Badge`, `Input`, `Select`, `Modal`, `Tag`) once, in `/components/ui`, styled strictly from design tokens.
- Build **section components** (`Hero`, `EventCard`, `TroupeCard`, `TimelineNode`, `GalleryGrid`) by composing primitives — never duplicating button/card markup inline on a page.
- Page files (`page.tsx`) should mostly **compose** section components; avoid large inline JSX blocks in route files.
- Every new visual pattern must be checked against existing components before creating a new one — prefer extending a prop over forking a component.

# State Management

- Default to **server state and URL state** (search params) for filters (events by region/month/troupe) — this keeps state shareable and SEO-friendly.
- Use local component state (`useState`) only for ephemeral UI (modal open/close, carousel index, mobile nav toggle).
- No global client state library needed at this stage; if cross-page client state becomes necessary (e.g., saved/favorited events), introduce a lightweight solution (Zustand or React Context) scoped narrowly — do not default to Redux.

# Data Strategy

- All content access goes through typed functions in `/lib/data` (e.g., `getEvents()`, `getTroupeBySlug(slug)`), never direct file/JSON imports inside components.
- Define explicit TypeScript types/interfaces for `Event`, `Troupe`, `Article`, `GalleryItem` in `/lib/data/types.ts`.
- Design every data function to be async-ready from day one, even if currently reading local JSON — this is what makes the future CMS/API swap painless.

# Routing

- Use the App Router's file-based routing exactly as shown in Folder Structure.
- Dynamic routes (`[slug]`) generate static params at build time via `generateStaticParams` for troupes, events, and journal entries.
- 404s use a custom branded not-found page consistent with the design system, not the framework default.

# Responsive Design Strategy

- Mobile-first Tailwind classes; design and build for the 375px viewport first, then scale up via `sm:`/`md:`/`lg:`/`xl:` breakpoints matching the design system's breakpoints (640 / 1024 / 1440).
- Navigation: mobile drawer below `md`, full horizontal nav at `md` and above.
- Timeline component: vertical stack below `lg`, horizontal scroll at `lg` and above.
- Test every new component at 375px, 768px, 1280px, and 1536px before considering it complete.

# Accessibility Requirements

- Use semantic HTML elements (`<nav>`, `<main>`, `<header>`, `<footer>`, `<article>`, `<section>`, headings in correct order) — never generic `<div>` soup for structural elements.
- All interactive elements must be reachable and operable via keyboard, with a visible focus ring styled from the design token (`--color-accent`).
- All images require descriptive `alt` text; decorative images use `alt=""`.
- All modals/drawers trap focus and are dismissible via `Escape` and backdrop click.
- Respect `prefers-reduced-motion`: gate non-essential animation behind a media query check.
- Form fields always have associated, visible `<label>` elements — never placeholder-only labels.
- Maintain WCAG AA contrast; verify any new color combination against the token palette before shipping.

# Animation Guidelines

- Use a single shared motion utility (e.g., a thin wrapper around Framer Motion or CSS `@keyframes` driven by IntersectionObserver) rather than ad hoc animation code per component.
- Standard scroll-reveal: fade + 12–16px translateY, 300–450ms ease-out, staggered by 50–100ms for grouped items.
- Hover states: scale 1.02–1.03 or shadow-lift only; no rotation, bounce, or elastic easing.
- Respect `prefers-reduced-motion: reduce` globally — fall back to opacity-only transitions.
- Never block perceived performance with animation — content must be usable/readable before an animation completes.

# Performance Requirements

- All images through `next/image` with explicit width/height (or `fill` with a sized container) to prevent layout shift.
- Hero video: compressed, muted, `preload="none"` or lazy-triggered, with a static poster image.
- Code-split client-only components (carousels, modals, filters) so they don't bloat the initial server-rendered bundle.
- Target Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Fonts: use `next/font` with the two brand typefaces only, subset where possible, `display: swap`.

# Image Optimization

- Serve via `next/image` with AVIF/WebP formats automatically negotiated.
- Define responsive `sizes` attributes for all grid/gallery images to avoid over-fetching large images on mobile.
- Lazy-load all below-the-fold images (`loading="lazy"`, default for `next/image` outside the hero).
- Store original high-res source images separately from the optimized delivery pipeline; never hand-optimize and commit pre-shrunk images that can't be re-derived.

# SEO Strategy

- Use the Next.js Metadata API for per-route `title`, `description`, and Open Graph/Twitter card data.
- Implement JSON-LD structured data for `Event` (dates, location, performer) on event pages and `Organization`/`Article` where relevant.
- Generate a sitemap and robots.txt via Next.js conventions (`sitemap.ts`, `robots.ts`).
- Use descriptive, human-readable slugs (e.g., `/troupes/kateel-pili-mane`, not `/troupes/id-4821`).
- Ensure all primary content is server-rendered (not client-fetched-only) so it is crawlable without JS execution.

# Coding Standards

- TypeScript strict mode on; no `any` except in narrowly justified, commented cases.
- Functional components only; no class components.
- Keep components focused — a component doing more than one clear job should be split.
- Co-locate component-specific types with the component unless shared, in which case they belong in `/lib/data/types.ts` or a shared `/types` folder.
- Run linting/formatting (ESLint + Prettier) as a non-negotiable pre-commit step.

# Naming Conventions

- Components: `PascalCase` (`EventCard.tsx`).
- Hooks: `useCamelCase` (`useScrollReveal.ts`).
- Utility functions: `camelCase`.
- Constants/tokens: `UPPER_SNAKE_CASE` or a typed `const` object, matching design token names (e.g., `COLOR_ACCENT`).
- Route folders: `kebab-case`, matching the URL slug exactly.
- CSS custom properties: `--color-ink`, `--color-ember`, `--space-4`, following the token names defined in `styles/tokens.css` — never invent parallel ad hoc variable names.

# TypeScript Guidelines

- Define explicit prop interfaces for every component (`interface EventCardProps { ... }`); avoid inline anonymous prop types for anything reused more than once.
- Prefer discriminated unions over optional-prop soup when a component has meaningfully different modes (e.g., `CardVariant = 'event' | 'troupe' | 'article'`).
- Export shared types from a single source of truth per domain; do not redefine the same shape in multiple files.
- No implicit `any`; all data-fetching functions have explicit return types.

# Tailwind Guidelines

- All colors, spacing, radii, and font families must come from the extended Tailwind theme (mapped to the design tokens) — never raw hex codes or arbitrary pixel values in `className`.
- Avoid excessive arbitrary-value utilities (`w-[437px]`); if a value repeats, promote it to a theme token instead.
- Compose repeated utility clusters into a component-level class via `class-variance-authority` (or similar) rather than copy-pasting long className strings across files.
- Keep responsive variants ordered mobile-first (`base → sm → md → lg → xl`).

# Component Composition

- Favor small, composable primitives (`Card`, `CardImage`, `CardBody`, `CardTitle`) assembled into section-specific components, over large monolithic components with many conditional branches.
- Section components accept typed data props (`EventCard({ event }: { event: Event })`) rather than many loose primitive props.
- Shared layout chrome (Container, Section spacing wrapper) should wrap page content consistently rather than each page reimplementing max-width/padding.

# Reusable Patterns

- **Grid/List/Map toggle** pattern (used in Events) should be built once as a reusable pattern, not rebuilt per section that needs it.
- **Filter bar** pattern (region/month/category) should be a single reusable component driven by a config array, so new filter types don't require new components.
- **Lightbox/Modal** pattern used for gallery and video should be one shared implementation.
- **Reveal-on-scroll** wrapper should be a single reusable component (`<Reveal>`) applied declaratively around content, not duplicated animation logic per section.

# Error Handling

- Use Next.js `error.tsx` boundaries per route segment for graceful, on-brand error states (not the framework default error screen).
- All data-fetching functions handle and surface errors explicitly (typed error states), never silently swallow failures.
- Forms show inline, field-level validation errors using the design system's error color (Maroon Dusk) with clear, human copy — never raw technical error strings.

# Loading States

- Use route-level `loading.tsx` with skeleton components matching the final layout's shape (cards, hero) — never a generic full-page spinner for content routes.
- Use the brand's custom pulsing/drumbeat-inspired loader only for short, discrete async actions (form submission, filter refresh), not for full-page loads.
- Image loading: use blur-up placeholders (`next/image` `placeholder="blur"`) for hero and gallery imagery.

# Future CMS Integration

- The `/lib/data` abstraction layer is the seam for CMS integration — when a CMS (e.g., Sanity, Contentful, or a custom headless system) is introduced, only the internals of these functions change; component and page code should require no changes if types remain stable.
- Content types (`Event`, `Troupe`, `Article`, `GalleryItem`) should be designed now to match likely CMS schema shapes (title, slug, date, region, media, body) to minimize future migration friction.

# Future API Integration

- Any future ticketing, RSVP, or troupe-submission functionality should be implemented behind typed API route handlers (`/app/api/.../route.ts`) with clear request/response types, keeping client components decoupled from data-fetching implementation details via the same `/lib/data` pattern.
- Rate-limit and validate all future public-facing form/API endpoints (e.g., troupe registration submissions).

# Testing Recommendations

- Unit test utility functions (`/lib/utils`) and data-access functions with Vitest or Jest.
- Component testing (React Testing Library) for interactive components: filters, forms, modals, carousels.
- Visual/accessibility smoke testing (e.g., axe-core integration) run in CI against key pages (home, events, troupe profile).
- End-to-end tests (Playwright) for critical user flows: browsing events, viewing a troupe profile, submitting a contact/registration form.

# Deployment Notes

- Deploy via a platform supporting Next.js ISR (e.g., Vercel or equivalent) so event and content pages can revalidate without full redeploys.
- Environment variables for any future CMS/API keys must never be committed; use `.env.local` and platform secret management.
- Set up preview deployments per branch/PR for design and content review before merging to production.

# AI Agent Rules

These rules are binding for any AI coding assistant generating or modifying code in this project:

1. **Always follow the design system** defined in `pili-parba-design.md` — colors, type, spacing, and motion must come from design tokens, never invented ad hoc.
2. **Always prioritize accessibility** — semantic HTML, keyboard support, contrast, and alt text are not optional add-ons; include them in the first version of any component, not a follow-up pass.
3. **Always build reusable components** — check `/components/ui` and `/components/sections` for an existing match before creating something new.
4. **Never hardcode values** — no raw hex colors, magic pixel numbers, or inline font names; use theme tokens and Tailwind config.
5. **Never duplicate components** — if two components are 80%+ similar, unify them behind a prop/variant instead of forking.
6. **Use semantic HTML** for all structural and interactive markup.
7. **Optimize images** — always use `next/image` with explicit sizing and appropriate lazy-loading.
8. **Prefer composition over duplication** — build from primitives; avoid monolithic, deeply nested conditional components.
9. **Keep animations subtle** — follow the Motion System exactly (timing, easing, distances); do not introduce bounce, spin, or elastic effects.
10. **Prefer server components** by default; opt into client components only when interactivity requires it, and keep those boundaries as small/leaf-level as possible.
11. **Write maintainable code** — clear naming, small focused functions/components, and comments only where intent isn't obvious from the code itself.
12. **Think like a senior frontend engineer** — consider performance, accessibility, SEO, and future scalability (CMS/API swap) in every component decision, not just the immediate visual result.
13. **Never introduce a new dependency** for something achievable with existing project tooling without flagging it explicitly.
14. **Never contradict brand voice** — no cartoon mascots, neon gradients, stock "festival" clichés, or generic template patterns, per the design system's Don'ts.
