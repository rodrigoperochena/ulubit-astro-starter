# UluBit Astro Starter

A small Astro starter for building simple, maintainable marketing sites.

It includes a typed site config, base layout, SEO/social metadata, global CSS tokens, sitemap support, robots.txt, favicons, Open Graph image assets, and preloaded Astro fonts.

## Tech stack

- Astro `^6.4.2`
- pnpm
- `@astrojs/sitemap`
- Astro Fonts API with Fontsource providers


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

### `src/site.config.ts`

Central place for site-wide values


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