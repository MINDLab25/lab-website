# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Use Node 24 via nvm
nvm use 24.15.0

npm run dev       # dev server at http://localhost:3000
npm run build     # static export → out/
npm run lint      # ESLint via next lint
```

There are no tests. The build output is a fully static site in `out/` (Next.js `output: 'export'`).

## Architecture

**Single data file:** All site content lives in `src/data/site.ts`. Every exported constant (`lab`, `home`, `team`, `publications`, `news`, `researchAreas`, `resources`) is consumed directly by page components. To add or update content, only edit this file.

**Component structure:** The home page (`src/app/page.tsx`) is a thin coordinator (~30 lines) that owns modal/expand state and composes section components from `src/components/sections/`. Each section reads data from `site.ts` directly — no prop drilling of data. The four route pages (`/news`, `/team`, `/publications`, `/resources`) are standalone under `src/app/`.

**Shared utilities:**
- `src/lib/utils.ts` — `getInitials`, `getDisplayFirstName`, `formatDate(iso, 'short'|'long')`, `labMemberNames` Set
- `src/lib/constants.ts` — `newsTypeBadge`, `newsTypeLabel`, `pubTypeBadgeClass`, `pubTypeLabel`
- `src/components/Avatar.tsx` — gradient initials avatar with optional photo support (`<img>`, not `next/image`)
- `src/components/SocialLinks.tsx` — all 6 link types (email, website, github, twitter, googleScholar, linkedin)
- `src/components/SectionHeading.tsx` — shared `<h2>` style

**Static export + GitHub Pages:** `next.config.mjs` sets `output: 'export'` with `trailingSlash: true`. The `basePath` and `assetPrefix` are driven by the `NEXT_PUBLIC_BASE_PATH` env var (set to `/lab-website` in `.github/workflows/deploy.yml`). All image `src` attributes must use `${basePath}/images/...` — never use Next.js `<Image>` as images are unoptimized.

**Join modal:** Triggered from three places — Nav "Join Us" (dispatches `open-join-modal` custom event), Hero inline link, and the Join section button. The custom event is listened to in `page.tsx`. Modal logic lives in `src/components/sections/JoinModal.tsx` (`'use client'`, owns Escape-key effect). The email icon links to `lab.joinLink`, which is a Gmail compose URL (not `mailto:`) for reliable cross-browser behavior.

**Design tokens:** Custom colors and typography are defined in `tailwind.config.ts` under `brand.*`, `ink.*`, and `surface.*`. Reusable utility classes (`.badge`, `.badge-*`, `.container-content`, `.gradient-text`) are defined in `src/app/globals.css` under `@layer utilities`.

**Cross-linking via IDs:** `researchAreas[].memberIds` references `team[].id`. `home.featuredPublicationIds` and `home.featuredNewsIds` reference IDs in `publications` and `news`. Broken IDs fail silently (filtered out with `.filter(Boolean)`).

**Team photos:** Place square images (≥ 400×400 px) in `public/images/team/`. The member's `photo` field in `site.ts` holds the exact filename including extension (e.g. `xinyi_zhou.png`, `peterson_ben.jpg`, `stephanie-grim.jpg`) — there is no enforced naming convention and both `.png`/`.jpg` are in use. An empty string `""` renders a gradient initials avatar instead. `Avatar` (`src/components/Avatar.tsx`) has three sizes: `lg` (PI card), `md` (student/mascot cards), `sm` (alumni rows).

**Mascots:** Lab mascots are ordinary `team` entries with `role: "mascot"` and empty `interests: []` / `links: {}`. They render as regular member cards — folded into the general grid in the home `TeamSection`, and shown as a "Lab Mascots" group on the `/team` page. There is no separate mascot component or section.

**`'use client'` boundary:** The client components are `src/app/page.tsx` (modal/expand state), `src/components/Nav.tsx` (scroll + active-section tracking), `src/components/sections/JoinModal.tsx` (Escape-key effect), and the `/news`, `/publications`, `/resources` route pages (filter/expand state). The `/team` page and all other section/shared components are pure render — do not add `'use client'` to them unless they require local state or browser APIs.
