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
