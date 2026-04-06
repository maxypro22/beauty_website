'use client'

import Image from 'next/image'
import { trackCallClick, trackWhatsAppClick } from '@/lib/analytics'
import styles from './Hero.module.css'

const PHONE    = '+97412345678'
const WHATSAPP = '97412345678'

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Welcome to Luxe Salon">
      {/* Decorative blobs */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.particles} aria-hidden="true">
        {[...Array(6)].map((_, i) => <span key={i} className={styles.particle} style={{ '--i': i } as React.CSSProperties} />)}
      </div>

      <div className={`container ${styles.inner}`}>
        {/* Left: Text */}
        <div className={styles.content}>
          <div className={`${styles.badge} animate-fade-up`}>
            <span className={styles.badgeDot} />
            Now Open in Doha, Qatar
          </div>

          <h1 className={`${styles.heading} animate-fade-up`} style={{ animationDelay: '0.1s' }}>
            Your Beauty,<br />
            <em className={styles.headingItalic}>Elevated</em>
            <span className="text-gold"> ✦</span>
          </h1>

          <p className={`${styles.sub} animate-fade-up`} style={{ animationDelay: '0.2s' }}>
            Doha&apos;s premier ladies salon — where expert artistry meets quiet luxury.
            Hair, makeup, nails, and skincare crafted for the modern woman.
          </p>

          <div className={`${styles.ctaRow} animate-fade-up`} style={{ animationDelay: '0.3s' }}>
            <a
              href={`tel:${PHONE}`}
              className="btn btn-primary"
              onClick={() => trackCallClick('hero')}
              id="hero-call-btn"
              aria-label="Call Luxe Salon Doha"
            >
              <PhoneIcon /> Call to Book
            </a>
            <a
              href={`https://wa.me/${WHATSAPP}?text=Hello!%20I'd%20like%20to%20book%20an%20appointment%20at%20Luxe%20Salon.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              onClick={() => trackWhatsAppClick('hero')}
              id="hero-whatsapp-btn"
              aria-label="WhatsApp Luxe Salon Doha"
            >
              <WhatsAppIcon /> WhatsApp Us
            </a>
          </div>

          {/* Trust badges */}
          <div className={`${styles.trust} animate-fade-up`} style={{ animationDelay: '0.4s' }}>
            {[
              { icon: '⭐', text: '5-Star Rated' },
              { icon: '✓', text: 'Certified Stylists' },
              { icon: '♡', text: 'Ladies Only' },
            ].map((t) => (
              <div key={t.text} className={styles.trustItem}>
                <span className={styles.trustIcon}>{t.icon}</span>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image stack */}
        <div className={`${styles.imageStack} animate-scale-in`} style={{ animationDelay: '0.2s' }}>
          <div className={styles.imgMain}>
            <Image
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=700&q=85"
              alt="Professional hair styling at Luxe Salon Doha"
              fill
              sizes="(max-width: 768px) 90vw, 45vw"
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.imgAccent1}>
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&q=80"
              alt="Luxury nail art service"
              fill
              sizes="180px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.imgAccent2}>
            <Image
              src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300&q=80"
              alt="Expert makeup application"
              fill
              sizes="140px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          {/* Floating card */}
          <div className={styles.floatCard}>
            <span className={styles.floatStar}>★ ★ ★ ★ ★</span>
            <p className={styles.floatText}>&ldquo;Best salon in Doha!&rdquo;</p>
            <span className={styles.floatAuthor}>— Fatima A.</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  )
}
