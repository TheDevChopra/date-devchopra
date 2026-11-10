# 04 — Visual Design System

## Art direction
**Soft punchy romance meets playful editorial scrapbook.**

The site should feel warm, modern, confident and slightly mischievous. Avoid wedding-invitation styling, generic pink dating templates, childish cartoon overload or corporate portfolio aesthetics.

## Colour palette
Use the following as initial design tokens. Validate contrast before shipping.

| Token | Hex | Usage |
|---|---|---|
| Cream | `#FFF8F0` | Main background |
| Soft blush | `#F7E4E5` | Romantic panels |
| Punchy rose | `#E9A8B0` | Small accents |
| Deep ink | `#24252B` | Main text |
| Cocoa | `#765747` | Warm secondary accent |
| Sage | `#DDE8D8` | Calm cards |
| Powder blue | `#DCE8F4` | Creative / music sections |
| Butter yellow | `#F6E7B8` | Highlights |

User's favourite colours also include blue, black, brown, white and occasional pink. Use those preferences without making every section pink.

## Typography
Use a maximum of two primary font families:
- Display: a warm expressive serif such as `DM Serif Display` or `Playfair Display`.
- Body/UI: a clean sans-serif such as `DM Sans`, `Inter` or `Manrope`.

Use fluid type with `clamp()` and avoid oversized text that wraps awkwardly on mobile.

## Layout
- Design mobile-first from 360px width.
- Use a centred content container with a comfortable maximum width on desktop.
- Generous spacing, rounded cards and layered paper-like surfaces.
- Alternate section backgrounds subtly to create rhythm.
- Use asymmetrical scrapbook layouts on desktop; simplify to a clean single column on mobile.
- Keep buttons large enough for touch (minimum 44px target).
- Never require horizontal page scrolling.

## Image treatment
- Rounded corners, subtle borders, occasional polaroid frames.
- Avoid overusing drop shadows.
- Do not apply filters that materially alter Dev's appearance.
- Use real images as the emotional centre; decorative illustrations remain secondary.
- Use image aspect ratios intentionally; crop with `object-fit: cover` and focal positioning.

## UI components
- Primary CTA: solid deep ink or rose, clear contrast.
- Secondary CTA: outlined or soft neutral surface.
- Cards: cream/white with fine border and restrained shadow.
- Labels: small uppercase or handwritten-style accent, but maintain readability.
- Stickers: use sparingly (flower, star, coffee, music note, bat signal).

## Background decoration
- Petals, tiny stars, paper texture, hand-drawn underline.
- Keep decorative elements behind content and away from text.
- Use CSS gradients or lightweight SVGs where possible.
- Do not use large stock-photo backgrounds.

## Responsive breakpoints
Use the framework's standard responsive breakpoints, but verify at:
- 320px
- 360px
- 390px
- 430px
- 768px
- 1024px
- 1440px

## Contrast and accessibility
- Ensure body text meets WCAG AA contrast where practical.
- Do not use colour alone to communicate meaning.
- Provide visible focus states.
- Keep text readable over images with overlays only when necessary.
- Support keyboard navigation.
