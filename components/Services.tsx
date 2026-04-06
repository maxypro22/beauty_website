'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './Services.module.css'

const services = [
  {
    id: 'hair',
    icon: '✂',
    title: 'Hair Styling',
    titleAr: 'تصفيف الشعر',
    desc: 'From precision cuts to luxurious color treatments — blowouts, keratin, balayage, and bridal styling.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=500&q=80',
    imageAlt: 'Professional hair styling and coloring at Luxe Salon Doha',
    tags: ['Cuts', 'Coloring', 'Blowout', 'Keratin'],
  },
  {
    id: 'makeup',
    icon: '◈',
    title: 'Makeup',
    titleAr: 'المكياج',
    desc: 'Flawless finishes for any occasion — bridal, editorial, everyday glam, and special event makeup.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=500&q=80',
    imageAlt: 'Professional makeup application at Luxe Salon Qatar',
    tags: ['Bridal', 'Glam', 'Natural', 'Editorial'],
  },
  {
    id: 'nails',
    icon: '◇',
    title: 'Nail Art',
    titleAr: 'الأظافر',
    desc: 'Manicure, pedicure, gel extensions, and intricate nail art — luxury nail care redefined.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80',
    imageAlt: 'Luxury nail art and manicure services',
    tags: ['Manicure', 'Pedicure', 'Gel', 'Nail Art'],
  },
  {
    id: 'skincare',
    icon: '❋',
    title: 'Skincare',
    titleAr: 'العناية بالبشرة',
    desc: 'Facials, deep cleansing, hydration therapies, and glow treatments using premium products.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
    imageAlt: 'Luxury skincare and facial treatment at Luxe Salon',
    tags: ['Facials', 'Glow', 'Anti-aging', 'Hydration'],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.services} id="services" ref={sectionRef} aria-labelledby="services-heading">
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className="container">
        {/* Header */}
        <div className={`${styles.header} reveal`}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title" id="services-heading">
            Beauty Services<br />
            <em className={styles.italic}>Crafted for You</em>
          </h2>
          <p className="section-sub">
            Every service is a ritual — personalised, precise, and performed by certified specialists
            who understand the art of feminine beauty.
          </p>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {services.map((s, i) => (
            <article
              key={s.id}
              id={`service-${s.id}`}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
              aria-label={s.title}
            >
              <div className={styles.cardImg}>
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 90vw, 25vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
                <div className={styles.imgOverlay} />
                <span className={styles.cardIcon} aria-hidden="true">{s.icon}</span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTitles}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <span className={styles.cardTitleAr}>{s.titleAr}</span>
                </div>
                <p className={styles.cardDesc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} reveal`}>
          <p className={styles.ctaNote}>Not sure which service is right for you?</p>
          <a
            href={`https://wa.me/97412345678?text=Hello!%20I'd%20like%20to%20know%20more%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            id="services-whatsapp-btn"
          >
            Ask Us on WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  )
}
