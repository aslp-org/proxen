import type { Metadata } from 'next';
import { siteConfig } from '@/siteConfig';
import HomePage from '@/components/homes/home';
import JsonLd from '@/components/SEO/JsonLd';

export const metadata: Metadata = {
  title: 'Web Design Company in Ontario | 10+ Years Experience | Proxen',
  description: 'Trusted by businesses across Canada, Proxen combines 10+ years of experience and 50+ successful projects with strategic web design and digital solutions.',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    url: siteConfig.url,
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Proxen Digital',
  url: 'https://proxen.ca',
  logo: 'https://proxen.ca/assets/images/logo/proxen-logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-905-782-6558',
    contactType: 'customer service',
    areaServed: 'CA',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/proxen.ca/',
    'https://www.linkedin.com/company/proxen.ca',
    'https://www.facebook.com/proxen.ca',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Proxen Digital',
  url: siteConfig.url,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteConfig.url}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <HomePage />
    </>
  );
}