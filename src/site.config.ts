import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  // used in astro.config.ts
  url: "https://example.com",
  // Used to construct the meta title property found in src/components/BaseHead.astro
  title: "Site title",
  // Used as the default description meta property
  description: "site description",
  // HTML lang property, found in src/layouts/Base.astro
  lang: "en-US",
	// found in src/utils/date.ts.
  ogLocale: "en_US",
	date: {
    locale: "en-US",
		options: {
      day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
  author: "UluBit",
	// Meta property, found in src/components/BaseHead.astro
	brand: "UluBit Astro Starter",
  phone: "",
  phoneFormatted: "",
  address: {
    street: "123 Main Street",
    city: "Ithaca",
    region: "NY",
    postalCode: "14850",
    country: "US"
  },
  socials: [
    {
      label: "Instagram",
      url: "https://instagram.com/example",
    },
    {
      label: "Facebook",
      url: "https://facebook.com/example",
    }
  ],
	// Developer info
	dev: 'UluBit',
	devUrl: "https://ulubit.com",
	// Replace with the data-website-id value 
	analyticsId: "no-id-yet",
};