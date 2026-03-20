# Hanabi Kaizen

Small Next.js + Tailwind rebuild of the saved `hanabikaizen.com` homepage.

## Editing Content

Most edits happen in two places:

1. `content/site-content.ts`
   Use this for page text, links, page title, meta description, Open Graph image, and favicon.
2. `public/assets/`
   Replace images here if you want different artwork.

## Project Structure

- `app/` - routes, metadata, sitemap, and redirects
- `components/` - reusable layout components
- `content/site-content.ts` - single source of truth for editable content
- `public/assets/` - local image assets

## Included

- page title
- meta description
- Open Graph basics
- favicon hookup
- mobile navigation
- `/about` and `/contact` redirect to `/`

## Local Development

Requirements:

- Node.js 20+
- npm 10+

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production build:

```bash
npm run start
```

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import it into Vercel.
3. Keep the framework preset as `Next.js`.
4. No environment variables are required for the current setup.
5. Add `hanabikaizen.com` as the production domain.

## Notes

- The saved HTML title was `hanabi kaisen`.
- The visible wordmark in the saved page is `hanabi kaizen`.
- The codebase is intentionally small so future edits stay simple.
