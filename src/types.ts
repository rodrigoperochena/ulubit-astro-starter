export interface Address {
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
}

export interface Contact {
  email: string;

  phone: {
    value: string;
    display: string;
  };
}

export interface Brand {
  name: string
  shortName: string
  legalName: string
  tagline?: string
}

export interface SocialLink {
  label: string;
  url: string;
  handle?: string
}

export interface SiteConfig {
  url: string
  
  brand: Brand
  
  title: string
  description: string
  
  lang: string
  ogLocale: string
	
	date: {
    locale: Intl.LocalesArgument;
		options: Intl.DateTimeFormatOptions;
	};
  
  contact: Contact
  address?: Address
  
  socials?: {
    instagram?: SocialLink
    facebook?: SocialLink
    youtube?: SocialLink
    twitter?: SocialLink
  }
  
  author: string | null;

	dev: string
	devUrl: string;
	
  analyticsId: string
}

export interface SiteMeta {
	title: string;
	description?: string;
	ogImage?: string | undefined;
	articleDate?: string | undefined;
}

export interface MenuLink {
  path: string
  title: string
}

export type MenuLinks = readonly MenuLink[]