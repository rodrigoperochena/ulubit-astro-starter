# UluBit Astro Starter

A repeatable Astro starting point for building UluBit websites.

The starter provides the project structure and site-level wiring needed to begin a new site consistently. Shared design foundations come from `@ulubit/foundations`, reusable Astro components come from `@ulubit/ui`, and project-specific branding, content, pages, and features remain inside the project.

It is a maintained implementation baseline, not a finished website or general-purpose theme.

## What is included

* Astro 7+
* Strict TypeScript configuration
* pnpm workspace and dependency policies
* `@ulubit/foundations`
* `@ulubit/ui`
* `@astrojs/sitemap`
* `sass-embedded`
* Astro Fonts API using Fontsource
* Typed site configuration
* Base page layout
* Responsive header and navigation
* Site branding component
* SEO and social metadata
* Canonical URLs
* Dynamic `robots.txt`
* XML sitemap generation
* Favicons, web manifest, and default Open Graph image
* Production-only analytics integration
* Shared layout and accessibility utilities
* No frontend framework dependency

## Package responsibilities

The starter separates shared system code from project-specific code.

### `@ulubit/foundations`

Provides the shared design rules used across UluBit projects, including:

* color tokens
* typography tokens
* spacing tokens
* layout values
* shadows
* motion values
* breakpoints
* responsive Sass utilities

The package is imported globally from `src/styles/global.scss`. Breakpoint utilities can also be imported directly where responsive component styles require them.

### `@ulubit/ui`

Provides reusable Astro UI components shared between projects.

Use components from this package when the component is generic enough to behave consistently across unrelated sites. Do not copy shared components into the starter or recreate them independently inside each project.

The package is installed in the current starter. The existing header, navigation, site brand, and footer remain local because they form the site shell and depend on project configuration.

### This starter

The starter owns the common project wiring:

* Astro configuration
* site configuration
* global style entry point
* base layout
* metadata handling
* navigation structure
* font configuration
* sitemap and robots generation
* analytics wiring
* default public assets
* dependency installation policies

### Each project

A project created from the starter owns:

* business identity and branding
* website content
* page structure
* project-specific layouts
* project-specific components
* project-specific features
* deployment configuration
* analytics credentials
* final metadata and assets

## Requirements

* Node.js 22.12.0 or newer
* pnpm
* Git

pnpm is the supported package manager because the project uses pnpm-specific dependency and build-script policies.

## Create a project

Create a repository directly from the GitHub template:

[Create a new repository from the UluBit Astro Starter](https://github.com/rodrigoperochena/ulubit-astro-starter/generate)

Or use the Astro CLI:

```ts
pnpm create astro@latest --template rodrigoperochena/ulubit-astro-starter
```

Enter the generated project and install its dependencies:

```ts
cd your-project
pnpm install
pnpm dev
```

The development server will be available at `http://localhost:4321`.

## Initial project setup

Before building pages, review the following project values and assets.

### 1. Configure the site

Update `src/site.config.ts` with the real project information:

* production URL
* business and brand names
* default title and description
* language and locale
* contact details
* address
* social accounts
* author
* developer attribution
* analytics ID

The production URL is used when generating canonical URLs, the sitemap, and `robots.txt`.

### 2. Replace the brand assets

Replace the starter assets with the assets created for the project:

* `src/assets/logo.svg`
* `public/favicon.svg`
* `public/favicon.ico`
* `public/favicon-96x96.png`
* `public/apple-touch-icon.png`
* `public/web-app-manifest-192x192.png`
* `public/web-app-manifest-512x512.png`
* `public/og-image.jpg`
* `public/site.webmanifest`

Review the manifest values after replacing its icons.

### 3. Configure fonts

Font families are registered in `astro.config.mjs` using Astro’s Fonts API.

The generated CSS variables are assigned to semantic font roles in:

```ts
src/styles/_typography.scss
```

Replace the starter font families when the project has its own typography system.

### 4. Configure navigation

Update `menuLinks` in `src/site.config.ts`.

The same typed navigation data can be passed to site navigation components where required.

### 5. Configure analytics

Analytics are loaded only in production through:

```ts
src/components/Analytics.astro
```

Replace `analyticsId` in `src/site.config.ts`, or remove the analytics component when the project does not use the configured service.

### 6. Build the project pages

The starter homepage is intentionally empty. Add the project’s page content to:

```ts
src/pages/index.astro
```

Create additional routes inside `src/pages`.

## Commands

| Command        | Action                                 |
| :------------- | :------------------------------------- |
| `pnpm install` | Install project dependencies           |
| `pnpm dev`     | Start the local development server     |
| `pnpm build`   | Build the production site into `dist/` |
| `pnpm preview` | Preview the production build locally   |
| `pnpm astro`   | Run the local Astro CLI                |

## Project structure

```bash
.
├── public/
│   ├── favicons and application icons
│   ├── og-image.jpg
│   └── site.webmanifest
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Analytics.astro
│   │   ├── BaseHead.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── MenuToggle.astro
│   │   ├── Navigation.astro
│   │   ├── PageSection.astro
│   │   └── SiteBrand.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── robots.txt.ts
│   ├── styles/
│   │   ├── _base.scss
│   │   ├── _layout.scss
│   │   ├── _typography.scss
│   │   ├── _utilities.scss
│   │   └── global.scss
│   ├── utils/
│   │   └── date.ts
│   ├── site.config.ts
│   └── types.ts
├── astro.config.mjs
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

## Main files

### `src/site.config.ts`

The typed central source for site-wide values.

It contains the project URL, identity, metadata defaults, locale, contact information, address, social accounts, navigation links, developer attribution, and analytics configuration.

### `src/styles/global.scss`

The global stylesheet entry point.

It imports the UluBit foundations package and the project’s local global styles:

```scss
@use "@ulubit/foundations";
@use "@ulubit/foundations/breakpoints" as *;

@use "./base";
@use "./utilities";
@use "./typography";
@use "./layout";
```

Shared foundation values should come from `@ulubit/foundations`. Local styles should contain only project-level defaults, utilities, layout rules, or extensions that do not belong in the shared package.

### `src/layouts/BaseLayout.astro`

The default document and page shell.

It:

* imports the global stylesheet
* sets the document language
* renders `BaseHead`
* provides a named head slot
* renders the skip link
* optionally renders the header and footer
* supports page layout and body class variants

Pages are responsible for providing their main content.

### `src/components/BaseHead.astro`

The shared document metadata component.

It handles:

* document title
* meta description
* author
* canonical URL
* Open Graph metadata
* Twitter card metadata
* article metadata
* favicon links
* web manifest
* font preloads
* analytics

### `src/components/SiteBrand.astro`

Renders the configured business identity using the local logo and `siteConfig.brand`.

It supports logo-only, name-only, and combined presentation variants.

### `src/pages/robots.txt.ts`

Generates `robots.txt` from the configured production site URL and references the generated sitemap.

### `astro.config.mjs`

Configures:

* the production site URL
* sitemap generation
* font families
* the Astro development toolbar
* Vite CSS source maps

## Styling

Use `@ulubit/foundations` for shared design tokens and utilities.

Use the public breakpoint entry point inside component styles when responsive Sass utilities are required:

```css
<style lang="scss">
  @use "@ulubit/foundations/breakpoints" as *;

  .example {
    display: block;

    @include at(lg) {
      display: grid;
    }
  }
</style>
```

Do not import unpublished package internals or duplicate foundation values inside project styles.

Project-specific visual decisions should remain inside the project.

## Using `@ulubit/ui`

Use the documented public exports from `@ulubit/ui` when a shared UluBit component already solves the requirement.

Before creating a new local UI component, determine whether it is:

1. a shared generic component that belongs in `@ulubit/ui`
2. a site-shell component that belongs in the starter or project
3. a project-specific component that should remain inside the project

Component APIs, usage examples, statuses, accessibility requirements, and supported variants belong in the UluBit documentation rather than being duplicated in this README.

## Dependency policy

`pnpm-workspace.yaml` applies a seven-day minimum release age to newly published dependencies.

This reduces the chance of immediately installing a newly compromised third-party release.

Packages under the `@ulubit` scope are excluded from that delay so current internal package releases can be tested and consumed immediately.

The workspace also explicitly allows installation scripts required by Astro and Vite tooling:

* `@parcel/watcher`
* `esbuild`
* `sharp`

When it is necessary to intentionally bypass the release-age restriction for a specific installation, run:

```ts
pnpm install --config.minimumReleaseAge=0
```

Review the dependency before bypassing the restriction.

## Documentation

The starter README should remain focused on creating, configuring, running, and understanding the project.

Detailed system documentation belongs in [UluBit Docs](https://docs-ulubit.netlify.app/).

The documentation should cover:

### Getting started

* creating a project from the starter
* configuring a new project
* updating the starter safely
* manual project setup without the starter
* package installation
* deployment preparation

### Foundations

* available foundation categories
* token purposes
* public package entry points
* usage rules
* responsive utilities
* accessibility considerations

### Components

* public component imports
* component APIs
* variants and sizes
* accessibility requirements
* usage examples
* component status
* when to use each component

### Features

* reusable site capabilities
* required configuration
* data flow
* implementation constraints
* setup and usage instructions

Package-specific READMEs should document installation, public exports, package requirements, and the smallest valid usage example. The UluBit Docs site should provide the broader explanation, rationale, examples, and relationships between packages.

## Deployment

The starter uses Astro’s default static output and does not include a server adapter.

Before deployment:

1. set the production URL in `src/site.config.ts`
2. replace all placeholder metadata
3. replace the starter brand assets
4. configure or remove analytics
5. run the production build
6. review canonical URLs, sitemap output, and `robots.txt`

```ts
pnpm build
pnpm preview
```

Deploy the repository to Netlify:

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rodrigoperochena/ulubit-astro-starter)
