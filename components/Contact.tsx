'use client'

import { useEffect, useRef } from 'react'
import { trackCallClick, trackWhatsAppClick } from '@/lib/analytics'
import styles from './Contact.module.css'

const PHONE    = '+97412345678'
const WHATSAPP = '97412345678'

const hours = [
  { day: 'Saturday – Thursday', time: '9:00 AM – 9:00 PM' },
  { day: 'Friday',              time: '2:00 PM – 9:00 PM' },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.contact} id="contact" ref={sectionRef} aria-labelledby="contact-heading">
      <div className="container">
        <div className={`${styles.inner}`}>

          {/* Left: Text + CTA */}
          <div className={styles.left}>
            <div className="reveal">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-title" id="contact-heading">
                Book Your<br />
                <em className={styles.italic}>Appointment</em>
              </h2>
              <p className="section-sub">
                Ready to look and feel your best? Reach out via a quick call or WhatsApp message —
                we&apos;ll confirm your booking instantly.
              </p>
            </div>

            {/* CTAs */}
            <div className={`${styles.ctaGroup} reveal`} style={{ transitionDelay: '0.1s' }}>
              <a
                href={`tel:${PHONE}`}
                className={`btn btn-primary ${styles.ctaBtn}`}
                onClick={() => trackCallClick('contact')}
                id="contact-call-btn"
                aria-label="Call Luxe Salon Doha to book"
              >
                <PhoneIcon />
                <span>
                  <small>Call us now</small>
                  {PHONE}
                </span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP}?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-gold ${styles.ctaBtn}`}
                onClick={() => trackWhatsAppClick('contact')}
                id="contact-whatsapp-btn"
                aria-label="WhatsApp Luxe Salon Doha"
              >
                <WhatsAppIcon />
                <span>
                  <small>Message us</small>
                  WhatsApp
                </span>
              </a>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className={styles.right}>
            {/* Working Hours */}
            <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.15s' }}>
              <div className={styles.cardIcon}><ClockIcon /></div>
              <div>
                <h3 className={styles.cardTitle}>Working Hours</h3>
                <dl className={styles.hoursTable}>
                  {hours.map((h) => (
                    <div key={h.day} className={styles.hoursRow}>
                      <dt className={styles.hoursDay}>{h.day}</dt>
                      <dd className={styles.hoursTime}>{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Phone */}
            <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.cardIcon}><PhoneIcon /></div>
              <div>
                <h3 className={styles.cardTitle}>Phone / WhatsApp</h3>
                <a href={`tel:${PHONE}`} className={styles.contactLink}>{PHONE}</a>
                <p className={styles.contactNote}>We respond within minutes during working hours</p>
              </div>
            </div>

            {/* Location quick ref */}
            <div className={`${styles.card} reveal`} style={{ transitionDelay: '0.25s' }}>
              <div className={styles.cardIcon}><PinIcon /></div>
              <div>
                <h3 className={styles.cardTitle}>Location</h3>
                <p className={styles.contactNote} style={{ color: 'var(--color-text)' }}>
                  Al Waab Street, Doha, Qatar
                </p>
                <a href="#location" className={styles.mapLink}>View on map ↓</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
}
function WhatsAppIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
}
function ClockIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
}
function PinIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
