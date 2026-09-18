This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/[[...lang]]/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to load Inter and Lobster, including extended Latin characters.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Portfolio SEO

The public URL is defined in `app/lib/site.ts`; no environment variable is required. Each language has translated metadata, a canonical URL, alternate language links and a sitemap entry. The favicon and social sharing image are shared across languages.

## Translations

- English: `/`, French: `/fr`, German: `/de`, Polish: `/pl`.
- Edit text in `app/i18n/locales/{en,fr,de,pl}.json`. This includes navigation, accessibility labels, SEO, project descriptions and experience.
- Links, media, technology names and stable content IDs stay in `app/data/`. When adding a project or experience, add its ID to each dictionary as well.
- The header selector changes the URL and preserves the current section anchor. Reloading or sharing a URL keeps its language; English remains the default at `/`.
- The CV download remains the existing PDF. Translating the interface does not translate that document or text embedded in screenshots.

To add a language, copy `en.json`, translate its values without changing its keys, register its native name and Open Graph locale in `app/i18n/config.ts`, and add its JSON loader in `app/i18n/dictionaries.ts`. Routes, the selector, alternate links and sitemap entries are generated from that configuration. Unsupported paths return 404.

Run `npm run test:i18n` to check translation completeness and content IDs, followed by `npm run lint` and `npm run build`.
