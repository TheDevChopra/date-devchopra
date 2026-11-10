# 06 — Technology Stack and Architecture

## Recommended MVP stack
- **Next.js + TypeScript:** application framework.
- **Tailwind CSS:** styling and responsive design.
- **Framer Motion:** section reveals and interaction motion.
- **CSS animations:** flower petals and simple decorative motion.
- **Vercel:** hosting and deployment.
- **GitHub:** source control.
- **Supabase Storage:** optional image/video hosting if needed.
- **Supabase Database:** not required for the first version.

Use current stable versions compatible with the project setup. Let Antigravity inspect the existing repository before replacing configuration.

## Keep the first version simple
The initial site is primarily static content and media. It does not need:
- Authentication.
- Database tables.
- User accounts.
- Admin dashboard.
- Visitor profiles.
- Analytics that identify individual visitors.

Use local assets in `/public/media` for the first build if the media volume is manageable. Move to Supabase Storage only if uploads, asset volume or management justify it.

## Suggested project structure

```text
date-devchopra/
├── docs/
│   ├── README.md
│   ├── 01_PRODUCT_BRIEF.md
│   ├── 02_PERSONALITY_AND_CONTENT.md
│   ├── 03_EXPERIENCE_AND_PAGE_FLOW.md
│   ├── 04_VISUAL_DESIGN_SYSTEM.md
│   ├── 05_ANIMATION_AND_INTERACTION_SPEC.md
│   ├── 06_TECH_STACK_AND_ARCHITECTURE.md
│   ├── 07_BUILD_PLAN_AND_ACCEPTANCE.md
│   ├── 08_ASSET_CHECKLIST.md
│   ├── 09_PRIVACY_AND_CONTENT_SAFETY.md
│   └── 10_ANTIGRAVITY_MASTER_PROMPT.md
├── public/
│   ├── media/
│   │   ├── photos/
│   │   ├── videos/
│   │   └── posters/
│   └── icons/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── hooks/
│   └── styles/
├── .env.example
├── README.md
└── package.json
```

If the repository already has a sound structure, preserve it rather than restructuring unnecessarily.

## Content architecture
Keep editable content separate from component code:
- `src/content/profile.ts`
- `src/content/sections.ts`
- `src/data/gallery.ts`
- `src/data/quiz.ts`

Use typed objects for text, captions, asset paths and section metadata. This makes it easy to update copy without editing complex components.

## Media handling
- Photos: WebP or AVIF where supported; retain originals elsewhere.
- Videos: MP4/H.264 or WebM, compressed and short.
- Provide poster images for every video.
- Lazy-load below-the-fold media.
- Do not autoplay audio.
- Use responsive image sizes.
- Do not upload a large original video directly if a compressed version will work.

## Supabase — optional, not a prerequisite
Only introduce Supabase if there is a concrete requirement, such as:
- Remote media management.
- A private owner-only content editor.
- A visitor message form that Dev explicitly wants to receive.
- A quiz response feature with a clear privacy notice.

If Supabase is used:
- Store only necessary data.
- Keep service-role keys server-side.
- Use public read-only access only for intentionally public media.
- Restrict private uploads and owner operations.
- Configure Row Level Security for database tables.
- Never put secrets in frontend environment variables.
- Do not store quiz answers by default.

## Deployment
1. Push repository to GitHub.
2. Import project into Vercel.
3. Deploy preview and test it.
4. Add `date.devchopra.life` in Vercel project Domains.
5. Add the DNS record Vercel specifies at the domain DNS provider.
6. Wait for DNS/SSL verification.
7. Test the exact custom domain on phone and desktop.

Do not guess DNS values; use the values shown in the Vercel dashboard.

## Environment variables
No environment variables should be needed for the static MVP. If Supabase is added later, use `.env.local` and provide `.env.example` with placeholder names only.
