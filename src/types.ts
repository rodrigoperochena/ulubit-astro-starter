export interface Address {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteConfig {
  url: string
  brand: string
  title: string
  description: string
  lang: string
  ogLocale: string
	author: string;
	date: {
    locale: Intl.LocalesArgument;
		options: Intl.DateTimeFormatOptions;
	};
  email?: string
  phone?: string
  phoneFormatted?: string
  address?: Address
  socials?: SocialLink[]
	twitterId?: string
	analyticsId: string
	dev: string
	devUrl: string;
}

export interface SiteMeta {
	title: string;
	description?: string;
	ogImage?: string | undefined;
	articleDate?: string | undefined;
}