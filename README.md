# Arena Propiedades — Next.js Static Site

A standalone version of the Arena Propiedades real estate website built with Next.js 14 (App Router). Runs locally or deploys to Vercel with zero configuration.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Deploy — zero configuration needed

Or use Vercel CLI:
```bash
npx vercel
```

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **CSS Custom Properties** (no framework)
- **Playfair Display + Lato** (Google Fonts)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, value props, featured, testimonials, FAQ, UGC grid |
| `/propiedades` | All properties with filter buttons |
| `/propiedad/[slug]` | Property detail — gallery, specs, WhatsApp CTA |
| `/buscar` | Search properties |
| `/nosotros` | About page |
| `/preguntas-frecuentes` | FAQ page |

## Features

- **9 sample properties** with real Unsplash photography
- **WhatsApp CTA** — pre-filled messages with property details
- **Favorites system** — localStorage-based saved properties drawer
- **Scroll animations** — IntersectionObserver, respects `prefers-reduced-motion`
- **Ambient floating shapes** — CSS keyframe animations
- **Mobile-first responsive** — works on all devices
- **Sticky header** — hides on scroll down, shows on scroll up
- **Filter by type** — Sale/Rent/House/Apartment buttons
- **Property search** — filters by title, location, features
- **Image gallery** — thumbnail navigation on product page

## Brand

- **Name:** Arena Propiedades
- **Palette:** Sand & Ocean (`#D4A574`, `#5B8A8A`, `#FAF7F2`, `#1A2B2B`)
- **Fonts:** Playfair Display (headings) + Lato (body)
- **Style:** "Living Canvas" — warm, animated, premium
