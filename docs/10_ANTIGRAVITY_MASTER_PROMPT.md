# 10 — Antigravity Master Prompt

Copy everything below into Antigravity after adding this knowledge base to the repository under `/docs`.

---

You are a senior product designer and frontend engineer. Build `date.devchopra.life`, a mobile-first, playful, romantic, meme-centric personal website for Dev Chopra.

## Before coding
1. Inspect the repository and existing project configuration.
2. Read every file in `/docs`, especially:
   - `01_PRODUCT_BRIEF.md`
   - `02_PERSONALITY_AND_CONTENT.md`
   - `03_EXPERIENCE_AND_PAGE_FLOW.md`
   - `04_VISUAL_DESIGN_SYSTEM.md`
   - `05_ANIMATION_AND_INTERACTION_SPEC.md`
   - `06_TECH_STACK_AND_ARCHITECTURE.md`
   - `07_BUILD_PLAN_AND_ACCEPTANCE.md`
   - `08_ASSET_CHECKLIST.md`
   - `09_PRIVACY_AND_CONTENT_SAFETY.md`
3. Treat those documents as the source of truth.
4. Do not invent personal details, achievements, photos, videos, contact details or relationship claims.
5. If information is ambiguous, use a placeholder and add a note for Dev rather than guessing.

## Product direction
This is not a normal portfolio, dating app or long biography. It is a small interactive world that introduces Dev, makes the visitor smile and creates curiosity for a real conversation.

Core line: **The website introduces Dev. The conversation discovers Dev.**

Opening line must be exactly:
**Hey, Potential Future Wife.**

Supporting line:
“Well, this is an interesting way to meet, isn't it?”

CTA:
“Enter Dev's little universe”

## Visual direction
Use a warm, premium, playful editorial scrapbook aesthetic:
- Cream `#FFF8F0`
- Blush `#F7E4E5`
- Rose `#E9A8B0`
- Deep ink `#24252B`
- Cocoa `#765747`
- Sage `#DDE8D8`
- Powder blue `#DCE8F4`
- Butter yellow `#F6E7B8`

Use a tasteful display serif and a clean sans-serif. Keep it mature, soft, punchy and decent. Avoid a generic pink dating template, wedding invitation look, childish cartoon overload or corporate portfolio style.

## Required page experience
Build the following in order:
1. Flower shower intro with immediate skip/continue.
2. Meet Dev hero with photo/video placeholder.
3. Four personality cards: romantic, funny, ambitious, social/creative.
4. Music and dance section: Qawwali, hip-hop, pop, guitar learning, DJ learning, Bollywood/freestyle.
5. Green flags / red flags / Batman section with self-aware humour.
6. Date.exe: animated ideal-date timeline (pickup only if mutually comfortable, CP or Hauz Khas, walk and talk, cafe/lunch, music-filled drive, drop-off, little surprises).
7. Short ambition corner: started working at 15, paid own college fees/expenses, Growth Marketing Engineer at Veena Studio working on AI music production, wants to build companies solving real problems.
8. Visual scrapbook gallery with placeholders for real photos and videos.
9. Optional 3–5 question compatibility quiz, entirely playful, local-only, no data storage.
10. Closing message and optional contact CTA placeholder.

Keep the total experience concise. Do not reveal every personal story. Use short captions and leave room for conversation.

## Copy tone
Write like a real, witty, romantic, extroverted Indian guy. Use natural English with occasional Hindi phrases where they feel authentic. Avoid corporate language and generic AI copy.

Examples:
- “My playlist has range. Qawwali to hip-hop without warning.”
- “Currently learning guitar and DJing. Results may vary. Enthusiasm does not.”
- “Mummy ke haath ka khana remains undefeated.”
- “Extrovert unlocked. Social battery still under testing.”
- “I plan dates like there might be a season finale.”
- “Career plans: ambitious. Dance moves: experimental.”
- “A little romantic. A little chaotic. Mostly harmless.”
- “Started earning at 15. Still building the next plot twist.”
- “Your ambitions are yours. I'll be in your corner, not in your way.”

Use the phrase “Single since 2005” only as a joke if it reads naturally. Avoid overclaiming or making the site sound like a sales pitch.

Do not portray possessiveness as entitlement or control. If Batman/protective humour appears, pair it with trust, respect and independence. Do not present lying as a positive trait.

## Motion and interactions
- Flower petals fall softly with varied size and rotation.
- Petals disperse/fade when entering the site.
- Smooth section reveals with Intersection Observer or Framer Motion.
- Subtle card hover on desktop and tap interactions on mobile.
- Very light decorative parallax only.
- Optional small easter eggs: bat signal, coffee wiggle, DJ loading sticker.
- Respect `prefers-reduced-motion`; provide static alternatives.
- No scroll-jacking, forced timed sequences, flashing, audio autoplay or blocking overlays.
- Keep the page usable if JavaScript animation fails.

## Technical requirements
- Prefer Next.js + TypeScript + Tailwind CSS.
- Use Framer Motion for meaningful motion and CSS for simple petals.
- Vercel deployment-ready.
- Use local placeholder assets under `/public/media` initially.
- Keep content in separate typed content/data files so Dev can edit it easily.
- Do not add Supabase, authentication, database or analytics in the first version unless a specific feature requires them.
- Do not expose secrets or invent environment variables.
- Use semantic HTML, accessible labels, visible focus states and keyboard navigation.
- Optimise images/video, lazy-load below-the-fold media, provide video poster images.
- Do not use copyrighted songs as embedded playback. No audio autoplay.

## Responsive requirements
Mobile-first. Test at 320, 360, 390, 430, 768, 1024 and 1440px. There must be no horizontal page overflow. Touch targets should be at least 44px. Make the mobile experience feel intentionally designed, not like a compressed desktop site.

## Local development
Run the app on port `2501`. Use the package manager matching the existing lockfile. Typically:
`npm run dev -- --port 2501`

## Work method
Build in sensible phases:
1. Foundation and design tokens.
2. Flower intro and hero.
3. Main sections and content.
4. Interactions and animation.
5. Responsive polish and accessibility.
6. Media placeholders and final asset wiring.

After each phase:
- Run the project.
- Check for compile/runtime errors.
- Fix them before moving on.
- Summarise what changed and what Dev should review.

Do not stop after producing a static mockup. Implement a working responsive website with real interactions. Do not add backend features just to make the stack look sophisticated.

## Final quality bar
The site should feel original, warm, confident, romantic, funny and memorable. A visitor should want to explore, but should never feel pressured. Keep it fast, accessible, honest and easy for Dev to maintain.

Start by inspecting the repository and the `/docs` knowledge base. Then implement the first complete mobile-first version.
