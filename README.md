# <img alt="ulubit logo" src="https://ulubit.com/favicon.svg" width="28"> UluBit Astro Starter [![Static Badge](https://img.shields.io/badge/v0.1.1-2b7fff)](https://github.com/rodrigoperochena/ulubit-astro-starter/releases)

A small Astro starter for building UluBit websites consistently.

It provides the common project structure, configuration, metadata, global styling, assets, and site shell needed to begin a new project.

Shared design foundations are provided by `@ulubit/foundations`. Reusable Astro components from `@ulubit/ui` are installed and ready to use as the project is built.

## Features

* Astro 7
* TypeScript
* pnpm
* `@ulubit/foundations`
* `@ulubit/ui`
* `@astrojs/sitemap`
* `sass-embedded`
* Astro Fonts API with Fontsource
* Typed site configuration
* Base layout
* SEO and social metadata
* Canonical URLs
* Dynamic `robots.txt`
* Sitemap generation
* Favicons, web manifest, and Open Graph image
* Responsive navigation
* Production analytics component
* No frontend framework dependency

## Getting started

Create a repository from the GitHub template:

[Create a new repository](https://github.com/rodrigoperochena/ulubit-astro-starter/generate)

Or create a project using the Astro CLI:

```bash
pnpm create astro@latest --template rodrigoperochena/ulubit-astro-starter
```

Then start the project:

```bash
cd your-project
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321`.

## Initial setup

Before building the site:

1. Update the project information in `src/site.config.ts`.
2. Replace the logo, favicons, manifest icons, and Open Graph image.
3. Configure the project fonts in `astro.config.mjs`.
4. Update the navigation links.
5. Configure or remove analytics.
6. Add the project pages and content.

## Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install dependencies                   |
| `pnpm dev`     | Start the local development server     |
| `pnpm build`   | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally   |
| `pnpm astro`   | Run the local Astro CLI                |

## UluBit packages

### `@ulubit/foundations`

Provides the shared UluBit design foundations, including tokens and responsive Sass utilities.

The package is imported globally from `src/styles/global.scss`.

```scss
@use "@ulubit/foundations";
@use "@ulubit/foundations/breakpoints" as *;
```

Use these shared values instead of recreating foundation tokens inside individual projects.

### `@ulubit/ui`

Provides reusable Astro UI components shared across UluBit projects.

The package is installed and ready to use. Import components only when the project requires them.

Component APIs, examples, variants, and accessibility guidance are documented in UluBit Docs.

## Main files

### `src/site.config.ts`

The central typed configuration for:

* site URL
* business and brand information
* default metadata
* language and locale
* contact information
* social accounts
* navigation
* analytics

### `src/styles/global.scss`

The global stylesheet entry point.

It imports `@ulubit/foundations` and the starter’s project-level global styles.

### `src/layouts/BaseLayout.astro`

The default page shell.

It:

* imports the global stylesheet
* sets the document language
* renders the shared metadata
* provides the header and footer
* renders the page content

### `src/components/BaseHead.astro`

Handles:

* title and description
* canonical URL
* Open Graph metadata
* Twitter metadata
* favicons
* web manifest
* font preloads
* analytics

### `src/pages/robots.txt.ts`

Generates `robots.txt` using the production URL from the site configuration.

### `astro.config.mjs`

Configures Astro, sitemap generation, and project fonts.

## Documentation

This README covers creating, configuring, and running the starter.

Detailed documentation belongs in [UluBit Docs](https://docs-ulubit.netlify.app/), including:

* manual project setup
* foundations usage
* component APIs and examples
* reusable features
* project conventions
* accessibility requirements

## Deployment

Set the real production URL and replace all placeholder metadata and assets before deploying.

```bash
pnpm build
pnpm preview
```

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rodrigoperochena/ulubit-astro-starter)
