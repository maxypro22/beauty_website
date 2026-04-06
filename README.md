# ✦ Luxe Salon Doha — Next.js Website

A modern, premium, and SEO-optimized beauty salon website built with **Next.js 14 App Router**, ready for zero-config deployment on **Vercel**.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js 18+](https://nodejs.org/en/download) — Install this first if not already installed

### Run Locally

```bash
# 1. Navigate into the project
cd beauty-salon

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (Fastest)
```bash
npx vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository → Deploy

No extra configuration needed — `vercel.json` handles everything.

---

## 🔧 Customization

### Replace Placeholder Content

| File | What to Change |
|------|---------------|
| `components/Navbar.tsx` | Phone number (`PHONE`) |
| `components/Hero.tsx` | Phone number, WhatsApp number |
| `components/Contact.tsx` | Phone, WhatsApp, working hours |
| `components/SocialMedia.tsx` | Instagram/TikTok handle |
| `components/Footer.tsx` | All contact info |
| `components/Location.tsx` | Google Maps embed URL |
| `app/layout.tsx` | Site URL, business name |
| `app/page.tsx` | Address, business details (JSON-LD) |

### Google Analytics
1. Copy `.env.example` to `.env.local`  
2. Replace `G-XXXXXXXXXX` with your real GA4 Measurement ID

```bash
cp .env.example .env.local
```

### Update Site URL
Search and replace `luxesalonDoha.com` with your real domain across all files.

---

## 📁 Project Structure

```
beauty-salon/
├── app/
│   ├── layout.tsx       # Root layout (metadata, GA4, fonts)
│   ├── page.tsx         # Home page + JSON-LD schema
│   ├── globals.css      # Design tokens + animations
│   ├── sitemap.ts       # Auto-generated sitemap.xml
│   └── robots.ts        # Auto-generated robots.txt
├── components/
│   ├── Navbar.tsx/css   # Sticky navbar with mobile drawer
│   ├── Hero.tsx/css     # Hero section with CTA
│   ├── Services.tsx/css # 4 service cards
│   ├── Contact.tsx/css  # Phone + WhatsApp + hours
│   ├── Location.tsx/css # Google Maps embed
│   ├── SocialMedia.tsx/css  # Instagram + TikTok
│   └── Footer.tsx/css   # Full footer
├── lib/
│   └── analytics.ts     # GA4 event tracking helpers
├── vercel.json          # Security headers + caching
├── .env.example         # Environment variables template
└── next.config.js       # Image domains, optimizations
```

---

## ✅ Features Checklist

- [x] Next.js 14 App Router + TypeScript
- [x] SSG (Static Site Generation) home page
- [x] Full SEO: title, description, canonical, OG, Twitter cards
- [x] JSON-LD `BeautySalon` schema (Google Rich Results)
- [x] Auto-generated `sitemap.xml` and `robots.txt`
- [x] Google Analytics 4 with click tracking (Call + WhatsApp + Social)
- [x] Optimized images via `next/image` with lazy loading
- [x] Sticky navbar with glassmorphism + mobile hamburger drawer
- [x] Animated Hero with image stack + floating review card
- [x] Services grid with hover animations
- [x] Contact section with clickable phone + WhatsApp CTAs
- [x] Google Maps embed (Doha, Qatar)
- [x] Instagram + TikTok social cards
- [x] Scroll-reveal animations (IntersectionObserver)
- [x] Floating WhatsApp button (fixed bottom-right)
- [x] Dark footer with 4-column layout
- [x] Fully responsive (mobile-first)
- [x] Security headers via `vercel.json`
- [x] Zero-config Vercel deployment

---

## 🎨 Design Tokens

| Name | Value | Usage |
|------|-------|-------|
| Blush Pink | `#E8A0B0` | Primary buttons, accents |
| Deep Rose | `#D4788A` | Hover states |
| Gold | `#C8A96E` | Labels, highlights |
| Warm White | `#FDFAF6` | Background |
| Cream | `#F7F0E8` | Surface |
| Charcoal | `#2C2C2C` | Text |

Fonts: **Cormorant Garamond** (headings) + **Inter** (body)
