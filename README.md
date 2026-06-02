# UluBit Astro Starter

A small Astro starter for building simple, maintainable marketing sites.

It includes a typed site config, base layout, SEO/social metadata, global CSS tokens, sitemap support, robots.txt, favicons, Open Graph image assets, and preloaded Astro fonts.

## Tech stack

- Astro `^6.4.2`
- Node `>=22.12.0`
- pnpm
- `@astrojs/sitemap`
- Astro Fonts API with Fontsource providers

## Project structure

```text
/
├── public/
│   ├── favicon assets
│   ├── og-image.jpg
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── Analytics.astro
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── FormattedDate.astro
│   │   ├── Header.astro
│   │   └── PageSection.astro
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   ├── styles/
│   │   └── global.css
│   ├── site.config.ts
│   ├── types.ts
│   └── utils/
│       └── date.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Getting started

Install dependencies:

```sh
pnpm install
```

Start the local dev server:

```sh
pnpm dev
```

Build the site:

```sh
pnpm build
```

Preview the production build locally:

```sh
pnpm preview
```

## Main files to edit first

### `src/site.config.ts`

Central place for site-wide values:

- site URL
- brand name
- default title and description
- language and Open Graph locale
- date formatting options
- author
- phone/address/social links
- analytics ID
- developer credit

### `public/`

Replace the default public assets for each project:

- `favicon.svg`
- `favicon.ico`
- `favicon-96x96.png`
- `apple-touch-icon.png`
- `web-app-manifest-192x192.png`
- `web-app-manifest-512x512.png`
- `og-image.jpg`
- `site.webmanifest`

### `src/styles/global.css`

Global design foundation:

- fluid type scale
- fluid spacing scale
- font variables
- color tokens
- base body styles
- accessibility utilities
- `.container` layout utility

### `src/layouts/Base.astro`

Default page shell:

- imports global CSS
- sets the document language from `siteConfig.lang`
- renders `BaseHead`
- optionally renders `Header` and `Footer`
- wraps page content in `<main>`

### `src/components/BaseHead.astro`

Default metadata component:

- title and description
- canonical URL
- Open Graph tags
- Twitter card tags
- favicon links
- manifest link
- Astro font preloads
- analytics component

## Useful components

### `PageSection.astro`

Section wrapper with a `.container` inside.

```astro
<PageSection size="lg">
  <h1>Page heading</h1>
</PageSection>
```

Available sizes:

- `sm`
- `md`
- `lg`
- `xl`

### `FormattedDate.astro`

Reusable `<time>` component that formats dates using the locale and options from `siteConfig.date`.

### `Analytics.astro`

Loads the analytics script only in production.

The analytics ID comes from `siteConfig.analyticsId`.

## Notes

- `Header.astro` is currently empty and ready to be built per project.
- `astro.config.mjs` reads `siteConfig.url` for Astro’s `site` value.
- Sitemap generation is enabled through `@astrojs/sitemap`.
- `robots.txt` is generated from `src/pages/robots.txt.ts` and points to `/sitemap-index.xml`.
- Path aliases use `@/*` for `src/*` imports.

## Official docs

- Astro project structure: https://docs.astro.build/en/basics/project-structure/
- Astro configuration: https://docs.astro.build/en/reference/configuration-reference/
- Astro sitemap integration: https://docs.astro.build/en/guides/integrations-guide/sitemap/
- Astro fonts: https://docs.astro.build/en/guides/fonts/
- Astro TypeScript: https://docs.astro.build/en/guides/typescript/