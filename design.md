# Pili Parba — Design System

> The permanent design language for Pili Parba, the digital home of Tulunadu's Tiger Dance festival.

---

# Brand Vision

Pili Parba exists to carry the roar of the Tulunadu Tiger Dance beyond the streets of Mangaluru and Udupi and into the world. The site is not a brochure — it is a stage. Every scroll should feel like the moment before the drums start: anticipation, heat, color, and pride. Long-term, Pili Parba aims to become the definitive digital archive and living festival guide for Pili Vesha — the place performers, troupes, tourists, researchers, and the Tulu diaspora return to every year.

# Brand Personality

- **Fierce but warm** — the confidence of a painted tiger, the hospitality of a coastal home.
- **Rooted, not nostalgic** — proud of tradition without feeling like a museum piece.
- **Rhythmic** — the brand should feel like it has a pulse, echoing the dhol and thase drums.
- **Communal** — this is a festival made by neighborhoods, troupes, and families, not a corporation.
- **Confidently regional** — Tulu identity is centered, not softened for outsiders.

If Pili Parba were a person: a respected troupe elder who paints tigers by day and tells stories by firelight at night — direct, magnetic, unhurried, never showy for its own sake.

# Emotional Goals

| Moment | Feeling we want |
|---|---|
| Landing on the homepage | "Whoa — I want to see this in person." |
| Reading the history section | Respect and curiosity |
| Browsing the gallery | Visceral, sensory excitement |
| Checking the events calendar | Clarity and confidence — "I know exactly where to be" |
| Reading a troupe profile | Personal connection to real people |
| Leaving the site | A sense of having witnessed something, not just read about it |

# User Personas

**1. Meera, 29 — Diaspora Tulu speaker living in Dubai.** Wants to feel connected to home, watch performance videos, know when Parba happens so she can plan a visit.

**2. Rahul, 34 — Domestic tourist from Bengaluru.** Discovered Pili Vesha on Instagram, needs practical info: dates, locations, how to attend respectfully, where to stay.

**3. Ganesh, 45 — Troupe (mane) leader in Mangaluru.** Wants his troupe listed, photographed well, and credited properly. Values accuracy over decoration.

**4. Dr. Anitha, 52 — Cultural researcher / folklorist.** Needs a credible history section, sourcing, and a searchable archive of performances and regions.

**5. Priya, 17 — Local student, aspiring performer.** Browses on a phone, wants to see how to join a troupe and watch training content.

# Design Principles

1. **Performance-first visuals.** The dancer, the paint, the movement — always the hero, never buried under UI chrome.
2. **Earned drama.** Big cinematic moments are reserved for hero and gallery contexts; utility screens (events, forms) stay clear and fast.
3. **Legible pride.** Tulu and regional terms are presented prominently, never apologetically translated away.
4. **Clarity before spectacle.** Kerala-grade information architecture underpins every cinematic layer — a tourist must be able to find dates and locations in under 10 seconds.
5. **One accent, used with intent.** A single dominant color carries all calls-to-action; nothing competes with it.
6. **Texture over decoration.** Grain, painted edges, and drum-skin textures replace generic icons and clip-art.
7. **Every animation has a reason.** Motion mimics breath, drumbeat, or reveal — never decoration for its own sake.

# Visual Language

Pili Parba's visual world draws from three physical references, translated into digital form:

- **Tiger body paint** — bold ochre-and-black striping, hand-painted imperfection, high contrast.
- **Dusk on the Konkan coast** — a specific hour: the sky burning amber-to-maroon just after sunset, when evening performances begin.
- **Temple brass and drum skin** — warm metal tones, leather texture, worn edges.

The result is a **warm, high-contrast, hand-crafted-but-modern** aesthetic — closer to an editorial arts publication than a typical "festival" template of neon gradients and stock confetti.

# Color Philosophy

The palette is built around **one fact**: the tiger's stripe is the most powerful mark in this tradition, and it is orange-black on skin, not a corporate orange. We push the accent toward a deeper, smokier turmeric-ember tone rather than a bright candy orange, and pair it with a near-black ink rooted in painted stripe black (never pure #000, which flattens the painterly quality).

### Core Palette (conceptual — implementers should generate exact hex via the tokens below)

| Role | Direction | Reasoning |
|---|---|---|
| **Ink** (primary dark) | Deep warm charcoal-brown, not blue-black | Echoes stripe paint and dusk shadow, avoids generic "tech dark mode" blue-blacks |
| **Ember** (primary accent) | Burnt turmeric-orange, slightly desaturated | Distinct from festival-neon orange; feels pigment-based, not digital |
| **Maroon Dusk** (secondary accent) | Deep brick-maroon | Pulled from the coastal dusk sky; used sparingly for depth and contrast against Ember |
| **Bone** (light neutral) | Warm off-white, slightly toasted | Never stark white — mimics unbleached cloth/paper used in festival banners |
| **Drumskin** (surface/card) | Warm taupe-brown | Card and panel surfaces on dark mode; leather-like warmth |
| **Moss** (tertiary/rare accent) | Muted forest green | Used only for small success/confirmation states — a nod to Tulunadu's greenery, used with restraint |

**Color rules:**
- Ink + Bone are the only large-area colors. Ember appears only on interactive/brand moments — never as a background fill for full sections.
- No gradients that resemble sunset stock-photo overlays. If a gradient is used, it must be a two-stop, low-contrast tonal shift (e.g., Ink to Maroon Dusk), never rainbow or neon.
- Maintain WCAG AA contrast at minimum for all text pairings.
- Do not use pure black or pure white anywhere in the interface.

# Typography Philosophy

Two-voice system, mirroring the tension between ceremony and everyday life:

- **Display / Heading voice:** A **high-contrast serif with slab or Devanagari-adjacent warmth** — something like a modern take on a woodblock/letterpress serif (e.g., a font in the family of **Fraunces**, **Canela**, or **Tiempos Headline**). It should feel carved and ceremonial, at home on a festival banner.
- **Body / UI voice:** A **humanist, slightly rounded sans-serif** for maximum legibility across devices and for bilingual (Kannada/Tulu script + Latin) contexts — something like **General Sans**, **Inter**, or **Manrope**.

**Pairing rationale:** the serif carries emotion and heritage; the sans carries information and trust. Never invert their roles. Headlines are never set in the body sans; UI labels, forms, and dense text are never set in the display serif.

**Voice rules:**
- Display type is used sparingly — hero headline, section titles, pull quotes only.
- All-caps is reserved for small eyebrow labels (e.g., "SINCE 1985 · MOODUBIDIRE") — never for full headlines, which lose their carved character in caps.
- Bilingual support: ensure the body typeface has full Kannada script coverage for troupe names and place names; do not transliterate names that are more authentic in native script.

# Layout Philosophy

- **Kerala-grade clarity, Sunburn-grade drama.** Every page opens with one immersive, full-bleed moment (hero, key visual) and then drops immediately into a highly scannable, well-labeled information layer — dates, locations, categories, filters.
- **Editorial rhythm.** Sections alternate between full-bleed visual moments and calm, generous-whitespace text/utility sections — like flipping through a well-art-directed magazine, not a single continuous scroll of equal-weight blocks.
- **Wayfinding over cleverness.** Navigation labels are plain-language (Events, Troupes, History, Gallery, Visit) — never abstract or gimmicky.

# Grid System

- **12-column grid** on desktop (1440px reference), **8-column** on tablet, **4-column** on mobile.
- **Container max-width:** 1280px, centered, with 5% fluid side margin below that.
- **Gutter:** 24px desktop / 20px tablet / 16px mobile.
- Full-bleed hero and gallery moments are permitted to break the grid edge-to-edge; all typographic and interactive content stays within the container.

# Spacing System

Base unit: **8px**, scaling on a restrained modular sequence to keep rhythm predictable for both design and code:

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

- Micro spacing (icon-to-label, form field padding): 4–12px
- Component spacing (card padding, button padding): 16–24px
- Section spacing (between major blocks): 64–128px, scaling down proportionally on mobile (~50%)

# Elevation

Elevation is expressed through **warmth and grain, not just shadow depth** — matching a physical, hand-crafted material world rather than a flat-glass UI.

| Level | Use | Treatment |
|---|---|---|
| Flat | Page background | No shadow |
| Level 1 | Cards in grids (troupe cards, event cards) | Soft, warm-toned low shadow, 1px hairline border in a muted Drumskin tone |
| Level 2 | Hover / active cards | Slightly lifted shadow + 2–4px translate on hover |
| Level 3 | Modals, filter drawers, lightboxes | Strong soft shadow, dimmed Ink-toned scrim behind (not pure black scrim) |

# Components

### Buttons
- **Primary:** solid Ember fill, Bone text, generous horizontal padding (24–32px), modest corner radius (8–12px — rounded but not pill-shaped, to avoid a "festival app" cliché).
- **Secondary/Outline:** 1.5px Ember border, transparent fill, Ember text; fills solid on hover.
- **Ghost/Text link:** underline-on-hover only, used inside dense text and cards.
- Never more than one solid Primary button visible per viewport section.

### Cards
- Troupe cards, event cards, and gallery cards share one base card shape: rounded corners (12–16px), warm hairline border, image-forward with a text panel beneath (not overlaid) for maximum legibility.
- Overlaid text-on-image is reserved only for the hero and large editorial "story" cards, always with a scrim gradient tuned for AA contrast.

### Navigation
- Sticky top bar, transparent-over-hero transitioning to solid Ink on scroll.
- Primary nav: Home · Events · Troupes · History · Gallery · Visit · Journal.
- Mobile: full-screen drawer, large touch-friendly type, not a cramped hamburger dropdown.

### Hero
- Full-bleed video-or-image moment with a short, carved-serif headline, one-line supporting copy, and a single primary CTA ("See Upcoming Parba" style). Subtle ambient motion (slow parallax or looping video) — never autoplaying sound.

### Timeline
- Vertical on mobile, horizontal-scroll on desktop for the History section — representing the evolution of Pili Vesha across decades/regions. Each node opens a short editorial card, not a modal wall of text.

### Gallery
- Masonry or curated-grid layout (not perfect uniform grid) to reflect the organic, high-energy nature of performance photography. Lightbox on click with swipe/arrow navigation and captions (troupe, place, year, photographer credit).

### Events
- Card-and-filter layout inherited conceptually from best-practice tourism sites: filter by region, month, and troupe. Each event card shows date, place, troupe, and a single clear "Details" action. List and map view toggle.

### Footer
- Warm Ink background, organized into clear columns (Explore, Community, About, Connect), a short brand statement, and social links. No dense fine print walls — keep it breathable.

### Forms
- Large touch targets, floating or top-aligned labels (never placeholder-only labels), inline validation in Moss (success) and Maroon Dusk (error) — never pure red.

### Carousels
- Used only for testimonials/press and troupe photo spotlights; always with visible peek of the next slide (never a mystery full-bleed single slide) and swipe support.

### Modals
- Reserved for gallery lightbox, video playback, and confirmation dialogs. Always dismissible via backdrop click and Esc, always trap focus.

# Motion System

Motion should feel like **breath and drumbeat** — steady, purposeful, never bouncy or cartoonish.

- **Scrolling:** Gentle reveal-on-scroll (fade + 12–16px rise), staggered slightly for grouped elements. No parallax overload — one deliberate parallax layer max per section.
- **Transitions:** Page and section transitions use a consistent easing curve (ease-out, ~300–450ms) — nothing bounces or overshoots.
- **Hover:** Subtle scale (1.02–1.03) or shadow lift on cards; color shift on buttons; never rotate or wobble.
- **Micro-interactions:** Icon nudges, underline draws, and count-up numbers for stats (e.g., "40+ troupes") — small, confident, quick (150–250ms).
- **Loading animations:** A simple pulsing stripe or drum-hit inspired loader, on-brand, never a generic spinner.

# Photography Guidelines

- Real performers, real paint, real crowds — never stock photography that could belong to any generic festival.
- Favor golden-hour and dusk lighting to match the palette's warmth.
- Motion blur on dance shots is welcome — it should feel alive, not sanitized.
- Always credit photographers and troupes in captions.
- Avoid over-processed, oversaturated HDR treatments; keep grain and true skin/paint tones.

# Iconography

- Custom, simple line icons at 1.5–2px stroke weight, rounded caps — echoing brush strokes, not corporate tech icons.
- A very small set of custom "signature" icons (drum, mask/tiger face, footprint trail, flame) may be used as identity marks in section dividers — used sparingly, never as generic clip-art repeated everywhere.

# Illustration Style

- Where illustration is needed (maps, explainer diagrams), use a flat, hand-inked line style in Ink color on Bone background, consistent stroke weight — evoking woodblock print, not cartoon mascots.
- No literal cartoon tiger mascots. The tiger is honored through performers and paint imagery, not a cutesy character.

# Accessibility

- Minimum WCAG 2.1 AA contrast across all text/background pairings, including on imagery (enforce scrim gradients behind overlaid text).
- All interactive elements keyboard-navigable with visible focus states styled in Ember.
- Full alt text for all photography, written descriptively (not just "tiger dancer").
- Captions/transcripts required for all embedded video.
- Respect `prefers-reduced-motion`: disable parallax and large motion, keep only opacity fades.
- Minimum touch target 44×44px on mobile.

# Responsive Strategy

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile | < 640px | Single column, stacked nav drawer, hero copy shortened, timeline vertical |
| Tablet | 640–1024px | 2-column grids, condensed nav, timeline vertical |
| Desktop | 1024–1440px | Full grid system, horizontal timeline, sticky nav |
| Wide | > 1440px | Max-width container centered, no further content growth, imagery may extend full-bleed |

# Performance Guidelines

- Hero media: compressed video (<3MB, muted, looped) with a static poster fallback for slow connections.
- All images served as responsive, modern formats (AVIF/WebP) with defined dimensions to avoid layout shift.
- Lazy-load all below-the-fold imagery and gallery content.
- Target Lighthouse Performance score ≥ 90 on mobile.
- Fonts subset and preloaded for the two brand typefaces only; avoid loading unused weights.

# SEO Considerations

- Every event, troupe, and history article gets a unique, descriptive title and meta description referencing Pili Vesha, Tulunadu, and specific place names.
- Structured data (Event schema) for all festival dates and locations.
- Descriptive, keyword-rich alt text doubling as accessibility copy.
- Human-readable URL slugs (e.g., `/events/kateel-pili-vesha-2026`).
- Fast, crawlable server-rendered pages for all core content routes.

# Do's

- Do treat Ember as sacred — one dominant accent, used with restraint.
- Do let photography and real performers carry emotional weight.
- Do keep utility screens (events, forms, search) fast and plain despite the cinematic brand.
- Do present Tulu/Kannada names and terms prominently and correctly.
- Do use texture (grain, hand-inked lines) to add warmth instead of gradients or stock icons.

# Don'ts

- Don't use neon gradients, glassmorphism, or generic "festival app" clichés.
- Don't use a cartoon tiger mascot.
- Don't default to pure black/white anywhere.
- Don't let decorative motion slow down or obscure critical information (dates, locations).
- Don't translate away or bracket-explain every Tulu term as if apologizing for it.
- Don't introduce new colors or fonts outside this system without a documented reason.

# Future Scalability

- The component library (cards, hero, timeline, events) is designed to extend to future sections: troupe profiles, a training/academy section, a donations/patronage program, and a multi-language (Tulu/Kannada/English) toggle.
- Color and type tokens should be implemented as design tokens (CSS variables / Tailwind theme extension) so a future rebrand or sub-festival microsite can inherit the system without rebuilding components.
- The editorial "Journal" section is designed to scale into a full digital magazine over time without a layout overhaul.
