// @ts-check
import { siteConfig } from './src/site.config';
import { defineConfig, envField, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  integrations: [sitemap()],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Fira Sans',
      cssVariable: '--font-fira-sans',
      weights: ["300 700"]
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
    }
  ],

  env: {
    schema: {
      UMAMI_WEBSITE_ID: envField.string({
        context: "server",
        access: "public",
        optional: true
      }),
      
      UMAMI_SCRIPT_URL: envField.string({
        context: "server",
        access: "public",
        optional: true,
        url: true
      })
    }
  },

  devToolbar: {
    enabled: false
  },

  vite: {
    css: {
      devSourcemap: true, // Enable CSS source maps
    },
  }
});