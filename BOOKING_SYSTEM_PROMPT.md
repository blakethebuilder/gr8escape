# Gr8 Escape — Website ↔ Booking System Integration Prompt

> Hand this to the agent building/maintaining the PocketBase booking system at `gr8bookings.smartintegrate.co.za`.

---

## 1. How the Website Is Built

The marketing site at `gr8.smartintegrate.co.za` is a static Astro v6 + Tailwind CSS v4 site deployed via Docker/nginx on Dokploy.

### Pages and What They Send to You

| Page | Route | What It Does |
|---|---|---|
| **Home** | `/` | Hero, experience explainer, lock puzzle, testimonials, feature cards, final CTA → `/book` |
| **Rooms** | `/rooms` | 5 escape rooms + Witch's Curse displayed as cards with difficulty, stats, story. Each card links to `/book` |
| **Murder Mysteries** | `/murder-mysteries` | 4 @Doppio Zero + 2 @Home mysteries. Each links to your booking URL |
| **Book** | `/book` | Gateway page. Room cards link to `gr8bookings.smartintegrate.co.za/book`. Also links to your `/availability` calendar. Has two CTA buttons: "Launch Booking System" and "Check Live Availability" |
| **Availability** | `/availability` | Links to `gr8bookings.smartintegrate.co.za/availability` with a preview card showing room color dots and slot counts |
| **Rules & FAQs** | `/rules-faqs` | Accordion FAQ. Answers link to `/book` for booking-related questions |
| **Contact** | `/contact` | Address, email, phone, operating hours, refund policy. Links to `/book` |
| **404** | `/404` | Branded error page with link to homepage |

### Booking Integration Points (What Gets Clicked)

Every booking link on the site points to either:
- **`/book`** (internal page) → which then links to your `gr8bookings.smartintegrate.co.za/book`
- **Direct links** to `gr8bookings.smartintegrate.co.za/book` (room cards on `/book` and `/murder-mysteries`)
- **Direct links** to `gr8bookings.smartintegrate.co.za/availability` (live calendar)

There are **20+ booking CTAs** across the site — header button, homepage CTA, room cards, murder mystery cards, availability page, contact page, lock puzzle reward, footer.

---

## 2. Real Business Content (from thegr8escape.co.za)

### Escape Rooms (5 rooms + 1 outdoor experience)

| Room | Difficulty | Price | Duration | Players |
|---|---|---|---|---|
| Asylum Escape | 7/10 | R320/pp | 60 min | 2–7 |
| Trapped | 8/10 | R320/pp | 60 min | 2–7 |
| The Hunted | 8.5/10 | R320/pp | 60 min | 2–7 |
| Nightmare | 9/10 | R320/pp | 60 min | 2–7 |
| The Basement | 10/10 | R320/pp | 60 min | 2–7 |
| The Witch's Curse | Outdoor | R320/pp | 45 min | 2–4 |

**Deposit**: R640 secures 2 tickets. Remaining players pay R320/pp on arrival.

### Murder Mysteries (6 experiences)

**@ Doppio Zero (Pineslopes, Fourways)** — R200/pp, 2.5 hours, 2–7 players, Games Master guided:
1. Ghosts of the Past
2. The Gilded Carcanet
3. The Cost of the Truth
4. The Road to Olympus

**@ Home Kits** — One-use packs for 2–6 players. Pudo delivery or Fourways pickup:
1. Ghosts of the Past @ Home — R600/pack
2. The Road to Olympus @ Home — R400/pack

### Special Events Packages

| Package | Price |
|---|---|
| Birthday Package | R500 |
| Challenge Wheel | R50/room |
| R-Rated Games Master Package | R50/room |
| Bachelor's Package | R550/pp (2.5 hrs) |
| Bachelorette's Package | R450/pp (2.5 hrs) |

### Operating Hours

| Day | Hours |
|---|---|
| Monday–Thursday | 09:30 – 18:30 |
| Friday–Saturday | 09:30 – 20:00 |
| Sunday | 09:30 – 18:30 |

### Refund / Cancellation Policy
- R640 deposit (covers 2 tickets)
- Cancel/postpone with **24+ hours** notice → **R590** refunded (R50 admin fee retained)
- Within 24 hours → **non-refundable**
- Refunds process in **5–7 business days** via WhatsApp, email, or phone

### Rules
- Minimum age: 10 years
- Under 16 must be accompanied by an adult
- No phones, cameras, or recording devices in rooms
- No food or drinks in rooms
- Arrive **15 minutes before** booking for briefing and indemnity
- No excessive force on props/puzzles
- Hints available — just ask the Games Master

### Contact Details
- **Address**: Pineslopes Office Park, Block C, First Floor, Corner Forest Road & The Straight, Fourways, Johannesburg
- **Email**: info@thegr8escape.co.za
- **Phone**: 076 362 0765
- **Facebook**: thegr8escapefourways
- **Instagram**: gr8escaperooms
- **TikTok**: @gr8escaperooms
- **Website design**: Debs Dezigns

---

## 3. What the Website Sends / Expects

### Current State: Link-Out Model

Right now the website sends users to your booking system via **direct links**. No data is passed between the two. Users click a room card on our site → arrive at your booking system's homepage → choose a room again.

This works but creates a **double-selection problem**: the user already picked a room on our site, then has to pick it again on yours.

### What Would Be Ideal

**Option A: URL Parameters**
The website passes the selected room via query params:
```
/book?room=asylum-escape
/book?room=trapped
/availability?room=the-hunted
```
Your booking system reads `?room=` and pre-selects that room in the booking flow.

**Option B: Direct Room Booking URLs**
Your booking system has dedicated URLs per room:
```
gr8bookings.smartintegrate.co.za/book/asylum-escape
gr8bookings.smartintegrate.co.za/book/trapped
```
Our site links directly to these, skipping the room selection step.

**Option C: API-Driven (Future)**
The Astro site fetches your PocketBase API at build time to show live room data, prices, and availability directly on our pages. Users browse on our site → click "Book" → arrive at your system with the room + date already selected.

### What the Website Could Pass (If You Support It)

If your booking system accepts URL parameters, we can pass:
- `?room=<slug>` — pre-select a room
- `?date=<YYYY-MM-DD>` — pre-select a date
- `?players=<N>` — pre-fill player count
- `?event=<birthday|bachelor|bachelorette|team>` — pre-select event type
- `?utm_source=gr8-website` — track where bookings come from

### Technical Notes for Your PocketBase Setup

- **CORS**: Your API currently has `Access-Control-Allow-Origin: *` — this is perfect and should stay open for the website to eventually call your API directly
- **X-Frame-Options**: Your server sends `SAMEORIGIN` — this blocks iframe embedding, so the website uses direct links instead. If you ever want the booking flow embedded on our domain, you'd need to remove or relax this header (or use a proxy)
- **Authentication**: All your collections except `_superusers` are publicly readable — this works for customer-facing data (rooms, slots). Consider restricting write access to `bookings` and `waivers` in production

---

## 4. Summary for Your Agent

> I'm building the marketing website for The Gr8 Escape (escape room in Fourways, Johannesburg). The site is a static Astro site at gr8.smartintegrate.co.za. I need you to build/maintain the booking system at gr8bookings.smartintegrate.co.za (PocketBase + React SPA).
>
> The website links to your booking system from 20+ CTAs across 8 pages. Currently it's a simple link-out — users click through and land on your booking homepage. We want to improve this so the room the user selected on our site is pre-selected in your booking flow.
>
> The business sells: 5 escape rooms (R320/pp, 60min, 2-7 players), 1 outdoor experience (Witch's Curse, R320/pp, 45min, 2-4 players), 6 murder mysteries (4 @ Doppio Zero at R200/pp, 2 @Home kits at R400-600), and 5 special event packages.
>
> They're open 7 days (Mon-Thu 09:30-18:30, Fri-Sat until 20:00, Sun 09:30-18:30). Deposit is R640 for 2 tickets. Refunds: R590 back with 24h+ notice, non-refundable within 24h, 5-7 day processing.
>
>
> See the full content brief above for every room, price, hour, policy, and contact detail.
