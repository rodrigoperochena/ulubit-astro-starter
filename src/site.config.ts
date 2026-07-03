import type { MenuLinks, SiteConfig } from "./types";

export const siteConfig = {
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
    city: "Uluwatu",
    region: "Bali",
    postalCode: "80361",
    country: "ID"
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
} as const satisfies SiteConfig;

// Used to generate links in both the Header & Footer.
export const menuLinks = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/services/",
		title: "Services",
	},
	{
		path: "/contact/",
		title: "contact",
	},
] as const satisfies MenuLinks