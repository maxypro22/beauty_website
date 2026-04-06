'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { trackCallClick } from '@/lib/analytics'
import styles from './Navbar.module.css'

const PHONE = '+97412345678'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Location', href: '#location' },
  ]

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo} aria-label="Luxe Salon – Home">
          <span className={styles.logoIcon}>✦</span>
          <span>Luxe<em>Salon</em></span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navLinks}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.navLink}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className={styles.navCta}>
          <a
            href={`tel:${PHONE}`}
            className={`btn btn-primary ${styles.ctaBtn}`}
            onClick={() => trackCallClick('navbar')}
            aria-label="Call us now"
            id="navbar-call-btn"
          >
            <PhoneIcon /> Book Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          id="menu-toggle"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} role="dialog" aria-modal="true">
        <nav aria-label="Mobile navigation">
          <ul className={styles.mobileLinks}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`tel:${PHONE}`}
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={() => { trackCallClick('mobile-menu'); setMenuOpen(false) }}
          id="mobile-call-btn"
        >
          <PhoneIcon /> Call to Book
        </a>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}
