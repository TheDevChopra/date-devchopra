# 05 — Animation and Interaction Specification

## Motion principles
Motion should feel delightful, smooth and intentional — never exhausting. Use animation to reveal personality and guide attention, not as decoration on every element.

## Flower shower entrance
- Full-viewport overlay.
- Use CSS-generated petals or a small set of original SVG petal shapes.
- Randomised but bounded start positions, durations and rotations.
- Petals should have varied depth/size, low visual density and no performance-heavy blur.
- Keep text and CTA readable above the petals.
- Provide “Skip intro” or allow immediate continuation.
- Transition: petals drift/fade away, then hero content gently appears.
- Do not prevent scrolling or trap focus.

## Scroll reveals
- Use Intersection Observer or Framer Motion's viewport triggers.
- Fade + small vertical movement (roughly 12–24px).
- Stagger children subtly.
- Trigger once unless a repeated effect is clearly useful.
- Avoid scroll-jacking and forced snap scrolling.
- Do not make essential text invisible until JavaScript has loaded.

## Parallax
- Very light parallax on decorative flowers, stickers or background shapes.
- Disable or reduce on mobile if it affects performance.
- Never parallax core text or create motion sickness.

## Cards
- Desktop: subtle hover lift/tilt, no extreme 3D.
- Mobile: tap to reveal; do not depend on hover.
- Use semantic buttons for interactive cards.
- Provide clear expanded/collapsed states.

## Date.exe timeline
- Timeline steps reveal as the visitor scrolls.
- Small icons or stickers animate on entry.
- Optional surprise details can reveal on tap.
- Do not make the timeline a mandatory timed sequence.

## Quiz
- 3–5 questions maximum.
- State remains local in the browser; no server submission by default.
- Provide a restart option.
- Results are playful and non-judgmental.
- No tracking or personal data collection unless separately designed and disclosed.

## Motion accessibility
- Respect `prefers-reduced-motion`.
- In reduced-motion mode: no falling-petal animation, parallax or large transitions; show a static floral entrance and simple fades.
- Avoid flashing, rapid scaling or high-frequency motion.
- Ensure content is available even if animations fail.

## Performance
- Animate `transform` and `opacity` where possible.
- Avoid animating layout-heavy properties.
- Avoid hundreds of DOM particles; cap the number of petals.
- Lazy-load below-the-fold media.
- Use poster images for videos.
- Do not autoplay audio.
- If using a video loop, mute it, use `playsInline`, provide a poster and keep it short/compressed.
