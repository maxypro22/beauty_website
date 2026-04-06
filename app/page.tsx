import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Location from '@/components/Location'
import SocialMedia from '@/components/SocialMedia'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export const metadata: Metadata = {
  title: 'Best Beauty Salon in Doha | Ladies Salon Qatar – Luxe Salon',
  description:
    'Luxe Salon is the premier ladies beauty salon in Doha, Qatar. Expert hair styling, makeup, nail art, and skincare by certified professionals. Book via call or WhatsApp today.',
  alternates: {
    canonical: 'https://www.luxesalonDoha.com',
  },
}

// JSON-LD structured data for Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BeautySalon',
  name: 'Luxe Salon Doha',
  description:
    'Premier ladies beauty salon in Doha, Qatar — hair, makeup, nails, and skincare.',
  url: 'https://www.luxesalonDoha.com',
  telephone: '+97412345678',
  priceRange: '$$',
  image: 'https://www.luxesalonDoha.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Waab Street',
    addressLocality: 'Doha',
    addressCountry: 'QA',
    postalCode: '12345',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2854,
    longitude: 51.4268,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday'],
      opens: '14:00',
      closes: '21:00',
    },
  ],
  sameAs: [
    'https://instagram.com/luxesalon.doha',
    'https://tiktok.com/@luxesalon.doha',
  ],
  hasMap: 'https://maps.google.com/?q=Al+Waab,Doha,Qatar',
  servesCuisine: undefined,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Ladies Only', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi', value: true },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />

        {/* Location Section */}
        <Location />

        {/* Social Media Section */}
        <SocialMedia />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  )
}
