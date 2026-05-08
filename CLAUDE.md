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

**Single-page layout:** The site is a single scrollable page (`src/app/page.tsx`) with anchor-linked sections (`#home`, `#news`, `#research`, `#publications`, `#team`, `#join`). There are no separate route pages beyond the root.

**Static export + GitHub Pages:** `next.config.mjs` sets `output: 'export'` with `trailingSlash: true`. The `basePath` and `assetPrefix` are driven by the `NEXT_PUBLIC_BASE_PATH` env var (set to `/lab-website` for GitHub Pages). All image references in JSX must use `${basePath}/images/...` — Next.js `<Image>` is not used because images are unoptimized.

**Design tokens:** Custom colors and typography are defined in `tailwind.config.ts` under `brand.*`, `ink.*`, and `surface.*`. Reusable utility classes (`.badge`, `.badge-*`, `.container-content`, `.gradient-text`) are defined in `src/app/globals.css` under `@layer utilities`.

**Cross-linking via IDs:** `researchAreas[].memberIds` references `team[].id`. `home.featuredPublicationIds` and `home.featuredNewsIds` reference IDs in `publications` and `news`. Broken IDs fail silently (items are filtered out with `.filter(Boolean)`).

**Team photos:** Place square images (≥ 400×400 px) in `public/images/team/` named `firstname-lastname.jpg`. Set the member's `photo` field in `site.ts`. An empty string `""` renders a gradient initials avatar instead.

**Lab member bolding:** Author names in publications are bolded automatically if the name exactly matches a `team[].name` value (`labMemberNames` Set in `page.tsx:34`).
