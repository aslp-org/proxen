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
  name: 'Proxen',
  url: 'https://proxen.ca/',
  logo: 'https://proxen.ca/assets/images/logo/proxen-logo.svg',
  sameAs: [
    'https://www.facebook.com/proxen.ca',
    'https://www.instagram.com/proxen.ca/',
    'https://www.linkedin.com/company/proxen.ca',
  ],
};

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://proxen.ca/#business',
  name: 'Proxen',
  url: 'https://proxen.ca/',
  logo: 'https://proxen.ca/assets/images/logo/proxen-logo.svg',
  image: 'https://proxen.ca/assets/images/logo/proxen-logo.svg',
  description:
    'Proxen is a digital marketing agency in Ontario providing SEO, web design, web development, local SEO, PPC management, content marketing, AEO, and GEO services for businesses across Canada.',
  telephone: '+1-905-782-6558',
  email: 'business@proxen.ca',
  areaServed: [
    { '@type': 'State', name: 'Ontario' },
    { '@type': 'City', name: 'Toronto' },
    { '@type': 'City', name: 'Mississauga' },
    { '@type': 'City', name: 'Brampton' },
    { '@type': 'City', name: 'Hamilton' },
    { '@type': 'City', name: 'Cambridge' },
  ],
  sameAs: [
    'https://www.facebook.com/proxen.ca',
    'https://www.instagram.com/proxen.ca/',
    'https://www.linkedin.com/company/proxen.ca',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Proxen',
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
      <JsonLd data={professionalServiceSchema} />
      <JsonLd data={websiteSchema} />
      <HomePage />
    </>
  );
}