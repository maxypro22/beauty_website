'use client'

import { useEffect, useRef } from 'react'
import styles from './Location.module.css'

export default function Location() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className={styles.location} id="location" ref={ref} aria-labelledby="location-heading">
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className="section-label">Find Us</span>
          <h2 className="section-title" id="location-heading">
            Visit Us in <em className={styles.italic}>Doha</em>
          </h2>
          <p className="section-sub">
            Conveniently located in the heart of Doha — easy parking, welcoming atmosphere,
            and a team ready to receive you.
          </p>
        </div>

        <div className={`${styles.mapWrapper} reveal`} style={{ transitionDelay: '0.15s' }}>
          {/* Google Maps embed — Al Waab area, Doha Qatar */}
          <iframe
            title="Luxe Salon Doha Location on Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14418.741963295948!2d51.4268!3d25.2854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x7b9fd35c90f5e1a2!2sAl%20Waab%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sqa!4v1680000000000!5m2!1sen!2sqa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing Luxe Salon location in Doha Qatar"
          />
          {/* Address overlay */}
          <div className={styles.addressCard}>
            <PinIcon />
            <div>
              <strong>Al Waab Street</strong>
              <span>Doha, Qatar</span>
            </div>
            <a
              href="https://maps.google.com/?q=Al+Waab,Doha,Qatar"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsLink}
              id="directions-link"
              aria-label="Get directions to Luxe Salon Doha"
            >
              Get Directions ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
