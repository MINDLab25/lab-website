# MIND Lab Website

The official website for the **Machine Intelligence and Data (MIND) Lab** at Boise State University.

Built with [Next.js 14](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com). Fully static output — deployed automatically to GitHub Pages via GitHub Actions on every push to `main`.

---

## Editing Content

**All site content lives in one file: `src/data/site.ts`**

Open that file in any text editor. You'll find clearly labelled sections for every part of the site. No coding knowledge needed — just edit the text between the quotes.

### Updating lab info

Edit the `lab` object at the top of `src/data/site.ts`:

```ts
export const lab = {
  name: "MIND Lab",
  email: "mindlab20250820@gmail.com",
  github: "https://github.com/MINDLab25",
  twitter: "https://twitter.com/mindlab_bsu",
  linkedin: "",   // add lab LinkedIn URL here
  joinLink: "https://mail.google.com/mail/?view=cm&to=...",
  // ...
}
```

### Adding a news item

Find the `news` array and add a new object at the top (newest first):

```ts
{
  id: "unique-id-here",          // no spaces, use hyphens
  date: "2025-03-15",            // YYYY-MM-DD
  type: "paper",                 // paper | award | grant | event | press | misc
  title: "Our paper was accepted at ICML 2025",
  description: "One or two sentences describing the news.",
  link: "https://optional-url.com",  // remove this line if no link
},
```

### Adding a publication

Find the `publications` array and add a new object:

```ts
{
  id: "conference-year",
  title: "Full Paper Title",
  authors: ["Author One", "Author Two"],
  venue: "Conference Full Name (Abbreviation)",
  year: 2025,
  type: "conference",   // conference | journal | workshop | preprint
  abstract: "One paragraph describing the paper.",
  links: {
    pdf: "https://arxiv.org/abs/...",
    code: "https://github.com/...",   // optional
    project: "https://...",           // optional
  },
  tags: ["Tag One", "Tag Two"],
  featured: true,        // true = shows on home page (limit to 3)
  award: "Spotlight",   // optional — e.g. "Oral", "Best Paper Award"
},
```

Author names that exactly match a `team[].name` value are automatically **bolded** on the site.

### Adding or updating a team member

Find the `team` array:

```ts
{
  id: "firstname-lastname",
  name: "First Last",
  role: "phd",          // pi | postdoc | phd | ms | undergrad | alumni
  title: "PhD Student",
  photo: "firstname-lastname.jpg",  // filename in /public/images/team/ — or "" for initials avatar
  bio: "Two or three sentence bio.",
  interests: ["Topic One", "Topic Two"],
  links: {
    email: "user@boisestate.edu",
    website: "https://...",
    github: "https://github.com/...",
    twitter: "https://twitter.com/...",
    googleScholar: "https://scholar.google.com/...",
    linkedin: "https://linkedin.com/in/...",
  },
  joinYear: 2025,
},
```

For alumni, also add `gradYear` and `currentPosition`:

```ts
  gradYear: 2025,
  currentPosition: "Research Scientist, OpenAI",
```

### Adding a resource

Find the `resources` array:

```ts
{
  id: "unique-id",
  category: "dataset",   // dataset | code | reading-list | tutorial | tool
  title: "Resource Name",
  description: "What this resource is and why it's useful.",
  url: "https://github.com/...",
  tags: ["Tag One", "Tag Two"],
  paperUrl: "https://arxiv.org/...",   // optional, link to related paper
},
```

---

## Adding Team Member Photos

1. Prepare a square photo (at least 400×400 px, JPG or PNG).
2. Name it `firstname-lastname.jpg` (all lowercase, hyphen-separated).
3. Drop it into `public/images/team/`.
4. In `src/data/site.ts`, set the member's `photo` field to the filename:
   ```ts
   photo: "firstname-lastname.jpg",
   ```

If `photo` is left as `""`, the site shows a gradient avatar with the person's initials instead.

---

## Running Locally

**Prerequisites:** Node.js 24 via [nvm](https://github.com/nvm-sh/nvm)

```bash
nvm use 24.15.0

# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to `src/data/site.ts` appear instantly without restarting.

```bash
npm run build   # static export → out/
npm run lint    # ESLint
```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`. No manual steps needed.

The workflow builds with `NEXT_PUBLIC_BASE_PATH=/lab-website` and publishes the `out/` folder. The live site is at:

```
https://mindlab25.github.io/lab-website/
```

### Deploying to Vercel (alternative)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the repository.
3. Leave all settings as defaults — Vercel detects Next.js automatically.
4. Click **Deploy**. Every push to `main` redeploys automatically.

> If deploying to Vercel instead of GitHub Pages, remove `NEXT_PUBLIC_BASE_PATH` from the build environment (or leave it empty) since Vercel serves from the root path.

---

## Project Structure

```
src/
  data/
    site.ts                   ← ALL content lives here
  lib/
    utils.ts                  ← Shared helpers (formatDate, getInitials, labMemberNames)
    constants.ts              ← Shared badge/label maps for news and publication types
  app/
    layout.tsx                ← Root layout (Nav wrapper)
    page.tsx                  ← Home page (composes section components)
    globals.css               ← Global styles & Tailwind design tokens
    news/page.tsx             ← Full news page with filters
    team/page.tsx             ← Full team page by role
    publications/page.tsx     ← Full publications page with filters
    resources/page.tsx        ← Resources page
  components/
    Nav.tsx                   ← Sticky nav with scroll-tracking & mobile menu
    Footer.tsx                ← Site footer
    Avatar.tsx                ← Gradient initials avatar (with optional photo)
    SocialLinks.tsx           ← Social icon links (email, website, GitHub, etc.)
    SectionHeading.tsx        ← Shared section heading style
    sections/
      HeroSection.tsx
      NewsSection.tsx
      ResearchSection.tsx
      PublicationsSection.tsx
      TeamSection.tsx
      JoinSection.tsx
      JoinModal.tsx           ← "Get in Touch" modal with social links
public/
  images/
    mindlab-logo-horizontal.png   ← Used in Nav
    mindlab-logo-symbol.png       ← Icon only, used in Join section & modal
    mindlab-logo-black.png        ← Dark version, used in Footer
    mindlab-logo-vertical.png     ← Vertical layout variant
    team/                         ← Team member photos go here
```
