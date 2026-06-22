import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { siteConfig } from '@/siteConfig';
import '@/styles/index.css';

// ── Google Font via next/font (zero render-blocking, auto font-display:swap) ──
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s${siteConfig.seo.titleTemplate}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: [...siteConfig.keywords],
  openGraph: {
    type: 'website',
    siteName: siteConfig.title,
    images: [{ url: siteConfig.seo.defaultImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.seo.twitterHandle,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        {/* ── Public-dir CSS loaded as <link> tags so browser fetches from  ──
            ── public/ correctly. PostCSS cannot resolve /assets/... paths.  ── */}
        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/remixicon.css" />
        <link rel="stylesheet" href="/assets/css/satoshi-font.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <link rel="stylesheet" href="/assets/css/app.min.css" />
        {/* Typekit (termina font) — non-critical, loaded after above ── */}
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/assets/css/skn8ash.css" />

        {/* Hero background image preload — tells browser to fetch LCP resource early */}
        <link
          rel="preload"
          as="image"
          href="https://images.prismic.io/proxen/agwq96YofJOwHW1I_Hero-Bg.png?auto=format,compress"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GD15NGHY95"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-GD15NGHY95');`}
        </Script>
      </body>
    </html>
  );
}

