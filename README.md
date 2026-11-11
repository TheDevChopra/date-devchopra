# date.devchopra.life — The Dev Experience™

A romantic, playful, meme-centric, mobile-first personal website designed to introduce Dev Chopra to a potential future partner.

> **"The website introduces Dev. The conversation discovers Dev."**

---

## 🌟 Features & Sections

1. **Flower Shower Entrance:** Full-screen romantic greeting with soft animated falling petals, "Hey, Potential Future Wife.", smooth fade, skip intro option, and reduced-motion support.
2. **Meet Dev Hero:** Polaroid scrapbook photo frame, witty personality copy, quick facts (Delhi, 21, Pure Veg, Growth Engineer @ Veena Studio), and dynamic age calculation.
3. **The Personality Mix:** 4 interactive expandable cards (Hopeless Romantic, Sarcastic & Smooth, Builder & Hustler, Extrovert Unlocked) with quotes and details.
4. **Music, Dance & Mad Science:** Retro Hi-Fi Sounddeck simulator featuring Qawwali, Hip-Hop, Pop, acoustic guitar progress, bedroom DJ mixing, and Bollywood freestyle dancing. Zero audio autoplay.
5. **Green Flags & "Red-ish" Flags:** Transparent, self-aware disclaimers (Single since 2005, clean habits, quality time devotee, 2-3 female best friends, 47 open brain tabs) plus the interactive Batman Card with Bat-Signal easter egg.
6. **Date.exe Timeline:** Animated Delhi date sequence (Pickup, CP / Hauz Khas walk, people-watching, long cafe lunch, golden hour drive, drop-off with little surprises).
7. **The Ambition Corner:** Self-reliant milestones (started working at 15, paid own college fees, AI music tools at Veena Studio, future problem solving) and unwavering partner career support.
8. **The Visual Scrapbook:** Responsive polaroid gallery with washi tape details, categorized filters (Candid, Dance, Music, Cafe), and tap-to-view lightbox modal.
9. **The Compatibility Test™:** 4 unscientific, hilarious questions with instant playful reactions, zero data storage, celebratory confetti, and funny custom verdicts.
10. **Closing & Coffee Invitation:** Warm closing message, celebratory confetti on "Should we get coffee sometime?", configurable contact modal with Instagram and Email shortcuts, and smooth back-to-top navigation.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom editorial scrapbook tokens
- **Animations:** Framer Motion & CSS keyframe animations
- **Icons:** Lucide React
- **Confetti:** Canvas-Confetti
- **Typography:** Playfair Display (Serif headings), Plus Jakarta Sans (Sans body), Caveat (Handwritten annotations)

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server on port 2501
npm run dev -- --port 2501

# Production build
npm run build

# Start production server
npm run start -- --port 2501
```

---

## 📸 Replacing Placeholder Assets

All media assets are located in `public/media/`:
- `public/media/photos/` — Dev's personal photographs (candid, cafe, city)
- `public/media/videos/` — Short dance and practice clips (MP4/WebM)
- `public/media/posters/` — Video poster stills

Content files are separated in `src/content/` and `src/data/` for easy editing:
- `src/content/profile.ts` — Bio, age, city, values, contact details
- `src/content/sections.ts` — Section copy, tracks, flags, timeline
- `src/data/gallery.ts` — Photo/video items and captions
- `src/data/quiz.ts` — Quiz questions, choices, and funny results

---

## 🌐 Deployment to Vercel

1. Push to GitHub repository `date-devchopra`.
2. Import repository in [Vercel](https://vercel.com).
3. Add custom domain `date.devchopra.life` in Vercel Project Settings > Domains.
4. Verify DNS records and SSL.

