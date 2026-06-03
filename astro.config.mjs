// @ts-check
import { siteConfig } from './src/site.config';
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [sitemap()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Source Serif 4',
      cssVariable: '--font-source-serif-4',
      weights: [400,500,600,700]
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Source Sans 3',
      cssVariable: '--font-source-sans-3',
      weights: [300,400,500,600,700]
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Source Code Pro',
      cssVariable: '--font-source-code-pro',
      weights: [300,400,500,600,700]
    }
  ],

  devToolbar: {
    enabled: false
  },

  vite: {
    css: {
      devSourcemap: true, // Enable CSS source maps
    },
  }
});