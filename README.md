# UluBit Astro Starter

A small base Astro starter for building maintainable sites.

It includes a typed site config, base layout, SEO/social metadata, global CSS tokens, sitemap support with dynamic robots.txt generation, favicons, Open Graph image assets, and basic config of Astro fonts using FontSource.

## Features

- Astro 7+
- `@astrojs/sitemap`
- `sass-embedded`
- pnpm
- Astro Fonts API


## Getting started

[Create a new repo](https://github.com/rodrigoperochena/ulubit-astro-starter/generate) from this template.

```sh
# pnpm
pnpm create astro@latest --template rodrigoperochena/ulubit-astro-starter

# npm 7+
npm create astro@latest -- --template rodrigoperochena/ulubit-astro-starter
```

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rodrigoperochena/ulubit-astro-starter)


## Commands

Replace pnpm with your choice of npm / yarn

| Command          | Action                                                         |
| :--------------- | :------------------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                          |
| `pnpm dev`       | Starts local dev server at `localhost:4321`                    |
| `pnpm build`     | Build your production site to `./dist/`                        |
| `pnpm preview`   | Preview your build locally, before deploying                   |
| `pnpm sync`      | Generate types                                                 |


## Main files

#### `src/site.config.ts`

Central place for site-wide values

#### `src/styles/global.css`

Global design foundation:

- fluid type scale
- fluid spacing scale
- font variables
- color tokens
- base body styles
- accessibility utilities
- `.container` layout utility


#### `src/layouts/Base.astro`

Default page shell:

- imports global CSS
- sets the document language from `siteConfig.lang`
- renders `BaseHead`
- optionally renders `Header` and `Footer`

#### `src/components/BaseHead.astro`

Default metadata component:

- title and description
- canonical URL
- Open Graph tags
- Twitter card tags
- favicon links
- manifest link
- Astro font preloads
- analytics component