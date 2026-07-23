# The Gr8 Escape — Website

Marketing site for The Gr8 Escape, an escape room in Fourways, Johannesburg. Built with Astro v6 + Tailwind CSS v4.

**Live:** https://gr8.smartintegrate.co.za
**Booking system:** https://gr8bookings.smartintegrate.co.za
**Deployment:** Dokploy (Docker + nginx)

## Quick Reference

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |

**Node:** >= 22.12.0 (use `nvm use 23`)

## Architecture

```
src/
  pages/          # 9 pages: index, rooms, murder-mysteries, team-building,
                  #   book, availability, rules-faqs, contact, 404
  components/
    common/       # ParticleBackground, Image, Metadata, Analytics
    ui/           # Button, Form, Headline, WidgetWrapper
    widgets/      # Header, Footer, LockPuzzle, Testimonials
    blog/         # Blog components (disabled)
  layouts/        # Layout.astro, PageLayout.astro
  data/           # rooms.ts — shared room data
  assets/styles/  # tailwind.css — global design system
  config.yaml     # Site config (loaded as astrowind:config)
  navigation.ts   # Nav structure
```

## Design System

- **Red:** `#E53935` (primary), **Teal:** `#06B6D4` (accent)
- **Backgrounds:** `#080808` (deepest) → `#1a1a1a` (cards)
- **Font:** Inter Variable
- **Animation:** `.card-gr8`, `.btn-gr8`, `.btn-ghost`, `.badge-gr8`
- **Particles:** `ParticleBackground.astro` — canvas-based particle system
- All CSS in `tailwind.css` — consistent across every page

## Booking Integration

Booking links use URL params supported by the PocketBase system:
- `/book?room=asylum-escape` — pre-selects room
- `/book?room=trapped&date=2026-07-26&time=14:00` — full pre-selection

Room slugs: `asylum-escape`, `trapped`, `the-hunted`, `nightmare`, `the-basement`, `the-witchs-curse`

## Key Files

- `src/data/rooms.ts` — single source of truth for room data
- `src/assets/styles/tailwind.css` — global animation system
- `src/components/common/ParticleBackground.astro` — reusable particle canvas
- `BOOKING_SYSTEM_PROMPT.md` — integration brief for booking system agent
