# MINDLab Website

The official website for the Machine Intelligence & Neural Dynamics Laboratory at Boise State University.

Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com). Static output — deployable to GitHub Pages or Vercel for free.

---

## Editing Content

**All site content lives in one file: `src/data/site.ts`**

Open that file in any text editor. You'll find clearly labelled sections for every part of the site. No coding knowledge is needed — just edit the text between the quotes.

### Updating lab info

Edit the `lab` object at the top of `src/data/site.ts`:

```ts
export const lab = {
  name: "MINDLab",
  email: "mindlab@boisestate.edu",
  twitter: "https://twitter.com/your-handle",
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
  authors: ["Author One", "Author Two", "Aria Chen"],
  venue: "Conference Full Name (Abbreviation)",
  year: 2025,
  type: "conference",   // conference | journal | workshop | preprint
  abstract: "One paragraph describing the paper.",
  links: {
    pdf: "https://arxiv.org/abs/...",
    code: "https://github.com/...",    // optional
    project: "https://...",            // optional
  },
  tags: ["Tag One", "Tag Two"],
  featured: true,       // true = shows on home page (limit to 3)
  award: "Spotlight",  // optional — e.g. "Oral", "Best Paper Award"
},
```

### Adding or updating a team member

Find the `team` array. To add a new PhD student:

```ts
{
  id: "firstname-lastname",
  name: "First Last",
  role: "phd",          // pi | postdoc | phd | ms | undergrad | alumni
  title: "PhD Student",
  photo: "firstname-lastname.jpg",  // filename in /public/images/team/  — or "" for initials
  bio: "Two or three sentence bio.",
  interests: ["Topic One", "Topic Two"],
  links: {
    email: "user@boisestate.edu",
    github: "https://github.com/...",
    twitter: "https://twitter.com/...",
    website: "https://...",
    googleScholar: "https://scholar.google.com/...",
  },
  joinYear: 2025,
},
```

For alumni, also add:
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

If `photo` is left as `""`, the site shows a gradient avatar with the person's initials.

---

## Running Locally

**Prerequisites:** Node.js 18+ installed ([nodejs.org](https://nodejs.org))

```bash
# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes to `src/data/site.ts` appear instantly.

---

## Building for Production

```bash
npm run build
```

This generates a fully static site in the `out/` folder. You can open any file in `out/` directly in a browser to preview.

---

## Deploying to Vercel (Recommended)

Vercel is the easiest option and deploys automatically on every push.

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New Project** and import your repository.
4. Leave all settings as defaults — Vercel detects Next.js automatically.
5. Click **Deploy**.

Your site will be live at `https://your-repo-name.vercel.app` within a minute. Every time you push to `main`, it redeploys automatically.

**Custom domain:** In the Vercel dashboard → your project → Settings → Domains, add your domain and follow the DNS instructions.

---

## Deploying to GitHub Pages

1. Open `next.config.ts` and set `basePath` to your repository name:

   ```ts
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
     trailingSlash: true,
     basePath: '/your-repo-name',   // add this line
   }
   ```

2. Build the site:
   ```bash
   npm run build
   ```

3. Deploy the `out/` folder to the `gh-pages` branch. The easiest way is with the `gh-pages` package:

   ```bash
   npm install --save-dev gh-pages
   npx gh-pages -d out
   ```

4. In your GitHub repository → Settings → Pages → Source, select the `gh-pages` branch.

Your site will be available at `https://your-username.github.io/your-repo-name`.

> **Tip:** If you use a custom domain with GitHub Pages, remove the `basePath` line from `next.config.ts`.

---

## Logo Files

All logos are in `public/images/`:

| File | Use |
|------|-----|
| `MIND Lab Main Logo (2).png` | Horizontal (icon + text), color — used in the nav |
| `MIND Lab Main Logo (3).png` | Vertical (icon above text), color |
| `MIND Lab Black Logo.png` | Horizontal, dark/grayscale — used in the footer |
| `MIND Lab Logo Symbol.png` | Icon only, color — used as a favicon / accent |

---

## Project Structure

```
src/
  data/
    site.ts          ← ALL content lives here
  app/
    layout.tsx       ← Root layout (nav + footer)
    page.tsx         ← Home page
    news/page.tsx
    team/page.tsx
    publications/page.tsx
    resources/page.tsx
    globals.css      ← Global styles & design tokens
  components/
    Nav.tsx
    Footer.tsx
public/
  images/            ← Logos and team photos
```
