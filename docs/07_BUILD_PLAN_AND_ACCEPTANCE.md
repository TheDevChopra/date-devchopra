# 07 — Build Plan and Acceptance Checklist

## Phase 1 — Foundation
- [ ] Inspect existing repository and current tooling.
- [ ] Read all `/docs` files.
- [ ] Confirm Next.js + TypeScript setup or preserve a suitable existing setup.
- [ ] Configure global fonts, colour tokens and base styles.
- [ ] Build responsive page shell and section structure.
- [ ] Run the app locally on port `2501`.

## Phase 2 — First impression
- [ ] Build flower-shower intro.
- [ ] Add “Hey, Potential Future Wife.”
- [ ] Add supporting line and enter button.
- [ ] Add skip/continue path.
- [ ] Add reduced-motion fallback.
- [ ] Verify no intro interaction blocks access to content.

## Phase 3 — Content and storytelling
- [ ] Build Meet Dev hero.
- [ ] Build personality cards.
- [ ] Build music and dance section.
- [ ] Build green/red flag section.
- [ ] Build Date.exe timeline.
- [ ] Build ambition corner.
- [ ] Build gallery with placeholder assets.
- [ ] Build optional compatibility quiz.
- [ ] Build final contact CTA.

## Phase 4 — Media
- [ ] Select 6–10 photographs.
- [ ] Select 2–5 short video clips.
- [ ] Compress videos and create poster images.
- [ ] Add captions.
- [ ] Confirm permission from anyone else visible in the media.
- [ ] Replace placeholders and test crops on mobile.

## Phase 5 — Polish
- [ ] Add subtle transitions and easter eggs.
- [ ] Verify all buttons and links work.
- [ ] Check text for spelling, tone and factual accuracy.
- [ ] Check page speed and media loading.
- [ ] Check accessibility and keyboard navigation.
- [ ] Check mobile layout at 320–430px.
- [ ] Check desktop layout at 1024–1440px.
- [ ] Test reduced-motion mode.
- [ ] Test with sound muted and with slow network simulation.

## Phase 6 — Deploy
- [ ] Push to GitHub.
- [ ] Deploy to Vercel preview.
- [ ] Test preview on real phone.
- [ ] Connect `date.devchopra.life`.
- [ ] Verify DNS and SSL.
- [ ] Test custom domain.
- [ ] Share with one or two trusted people for feedback before wider sharing.

## Definition of done
The project is ready when:
- The first screen is delightful and can be skipped.
- The visitor can explore the entire site on a phone without layout bugs.
- All content is factually accurate and approved by Dev.
- Photos and videos load quickly.
- The quiz is optional and does not collect personal data.
- No autoplay audio, forced interaction or manipulative CTA exists.
- The final CTA works and points only to a contact method Dev approved.
- The custom domain works over HTTPS.

## Local development
Use the command appropriate to the generated project, typically:

```bash
npm install
npm run dev -- --port 2501
```

If the project uses another package manager, follow its lockfile and scripts rather than mixing package managers.
