# <img alt="UluBit logo" src="https://ulubit.com/favicon.svg" width="28"> UluBit Astro Starter [![Version](https://img.shields.io/github/v/release/rodrigoperochena/ulubit-astro-starter?label=version&color=2b7fff)](https://github.com/rodrigoperochena/ulubit-astro-starter/releases)

A small Astro starter for building consistent, maintainable websites using UluBit's shared design foundations, components, and project conventions.

[Documentation](https://docs.ulubit.com/) · [Live demo](https://ulubit-starter.netlify.app/) · [Changelog](./CHANGELOG.md)

## What's included

- Astro 7, TypeScript, Sass, and pnpm
- [`@ulubit/foundations`](https://www.npmjs.com/package/@ulubit/foundations) — shared design tokens, global styles, and Sass utilities
- [`@ulubit/ui`](https://www.npmjs.com/package/@ulubit/ui) — reusable Astro components
- Typed site configuration and environment variables
- Base layout and responsive navigation
- SEO and social metadata, canonical URLs, sitemap, and robots.txt
- Astro Fonts API with Fontsource
- Optional Umami analytics
- No additional frontend framework dependencies

## Getting started

[Create a repository from this template](https://github.com/rodrigoperochena/ulubit-astro-starter/generate) or use the Astro CLI:

```bash
pnpm create astro@latest --template rodrigoperochena/ulubit-astro-starter
```

Install dependencies and start the development server:

```bash
cd your-project
pnpm install
pnpm dev
```

Visit `http://localhost:4321`.

Follow the [Getting Started guide](https://docs.ulubit.com/get-started/) to configure the project and begin development.