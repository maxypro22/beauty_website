import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luxesalonDoha.com'),
  title: {
    default: 'Best Beauty Salon in Doha | Ladies Salon Qatar – Luxe Salon',
    template: '%s | Luxe Salon Doha',
  },
  description:
    'Luxe Salon is Doha\'s premier ladies beauty salon. Expert hair, makeup, nail, and skincare services in Qatar. Book your appointment today – call or WhatsApp us.',
  keywords: [
    'beauty salon Doha',
    'ladies salon Qatar',
    'hair salon Doha',
    'makeup salon Qatar',
    'nail salon Doha',
    'skincare Doha',
    'best salon Doha',
    'luxury salon Qatar',
    'صالون نسائي الدوحة',
  ],
  authors: [{ name: 'Luxe Salon Doha' }],
  creator: 'Luxe Salon Doha',
  publisher: 'Luxe Salon Doha',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_QA',
    url: 'https://www.luxesalonDoha.com',
    siteName: 'Luxe Salon Doha',
    title: 'Best Beauty Salon in Doha | Ladies Salon Qatar',
    description:
      'Premier ladies beauty salon in Doha, Qatar. Expert hair, makeup, nails, and skincare. Book today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxe Salon Doha – Best Beauty Salon in Qatar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Beauty Salon in Doha | Ladies Salon Qatar',
    description:
      'Premier ladies beauty salon in Doha, Qatar. Expert hair, makeup, nails, and skincare.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.luxesalonDoha.com',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="theme-color" content="#FDFAF6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>

        {children}
      </body>
    </html>
  )
}
