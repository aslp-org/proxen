import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/siteConfig';
import { getAllServices, getServiceBySlug } from '@/data/services-data';
import ServiceDetails from '@/components/single-service';
import JsonLd from '@/components/SEO/JsonLd';

export async function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  // Use per-service seoMeta overrides when available, otherwise fall back to hero description
  const title       = service.seoMeta?.title       ?? service.title;
  const description = service.seoMeta?.description ?? service.hero.description;
  const canonical   = `${siteConfig.url}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title,
      description,
      url: canonical,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const pageUrl = `${siteConfig.url}/services/${service.slug}`;

  // ── Breadcrumb schema ───────────────────────────────────────────────────────
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',     item: `${siteConfig.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services/` },
      { '@type': 'ListItem', position: 3, name: service.seoMeta?.title ?? service.title, item: pageUrl },
    ],
  };

  // ── Service schema (rich, with areaServed + hasOfferCatalog for SEO page) ──
  const serviceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: service.seoMeta?.title ?? service.title,
    description: service.seoMeta?.description ?? service.hero.description,
    url: pageUrl,
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Proxen',
      url: `${siteConfig.url}/`,
    },
    areaServed: [
      { '@type': 'State', name: 'Ontario' },
      { '@type': 'City',  name: 'Toronto' },
      { '@type': 'City',  name: 'Mississauga' },
      { '@type': 'City',  name: 'Brampton' },
      { '@type': 'City',  name: 'Hamilton' },
      { '@type': 'City',  name: 'Cambridge' },
    ],
    // Offer catalog — built from the service's whyChoose feature titles
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Offerings`,
      itemListElement: service.whyChoose.features.map((f) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: f.title },
      })),
    },
  };

  // ── FAQ schema — only emitted when service has FAQ items ───────────────────
  const faqSchema = service.faq && service.faq.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <ServiceDetails params={params} />
    </>
  );
}
