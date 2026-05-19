# Pet Shop Website Template — Claude Instructions

## What Is This Project?

A static pet shop / pet grooming website template. The same design is sold to different clients. **Only `client-config.js` changes per client** — the other 3 files never change.

## File Architecture

```
/
├── index.html          ← NEVER CHANGE
├── style.css           ← NEVER CHANGE
├── script.js           ← NEVER CHANGE
└── client-config.js    ← ONLY THIS CHANGES (new file per client)
```

## Setting Up a New Client

When a new business asks for a site:

1. **ONLY write `client-config.js`** — do not touch index.html / style.css / script.js
2. Use the schema below
3. Commit + push to both the feature branch AND the `gh-pages` branch

## client-config.js Schema

```js
window.CLIENT = {

  /* BRAND */
  name: {
    sub:  'NEIGHBORHOOD / CITY',  // Small top label
    main: 'BUSINESS NAME',        // Large logo text (auto line-break on space)
  },
  tagline: 'Pet Grooming & Spa',
  city:    'City',

  brand: {
    primary: '#HEX',   // Buttons, links, accents — pick from themes below
    text:    '#HEX',   // Body text color
    dark:    '#111111',
  },

  /* CONTACT */
  phone:     '(XXX) XXX-XXXX',
  whatsapp:  '1XXXXXXXXXX',   // Country code, no + or spaces (US → 1XXXXXXXXXX, TR → 90XXXXXXXXXX)
  address:   'Full street address',
  hours:     ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday: 9:00 AM – 5:00 PM', 'Sunday: Closed'],
  instagram: 'https://www.instagram.com/handle',
  mapQuery:  'Street+Address+City+State+Country',  // Google Maps search term (spaces → +)

  /* RATING */
  rating:      '4.8',
  reviewCount: 120,

  /* IMAGES — use real Unsplash photo IDs */
  heroImage:  'https://images.unsplash.com/photo-XXXX?w=1200&h=1400&fit=crop&q=85',
  aboutImage: 'https://images.unsplash.com/photo-XXXX?w=800&q=85',

  /* ABOUT (each array item = one paragraph) */
  aboutText: [
    'First paragraph...',
    'Second paragraph...',
  ],

  /* STATS BAR (4 items) */
  stats: [
    { value: '100+',    label: 'Happy Clients' },
    { value: '4.8★',    label: 'Google Rating' },
    { value: 'Expert',  label: 'Grooming' },
    { value: 'City',    label: 'Neighborhood' },
  ],

  /* SERVICE CARDS (4 items; last card gets accent color automatically) */
  services: [
    { icon: '✂️', title: 'Pet Haircut',     desc: '...', ctaText: 'Book Now',   ctaHref: 'tel:+1XXXXXXXXXX' },
    { icon: '🛁', title: 'Grooming & Spa',  desc: '...', ctaText: 'Book Now',   ctaHref: 'tel:+1XXXXXXXXXX' },
    { icon: '💅', title: 'Nail & Ear Care', desc: '...', ctaText: 'Book Now',   ctaHref: 'tel:+1XXXXXXXXXX' },
    { icon: '🐾', title: 'Special Care',    desc: '...', ctaText: 'Learn More', ctaHref: 'https://wa.me/1XXXXXXXXXX' },
  ],

  /* GALLERY (5 items; layout: 'normal' | 'tall' | 'wide') */
  gallery: [
    { url: 'https://images.unsplash.com/...', label: 'Cat Grooming', layout: 'tall' },
    { url: 'https://images.unsplash.com/...', label: 'Puppy Spa',    layout: 'normal' },
    { url: 'https://images.unsplash.com/...', label: 'After Groom',  layout: 'normal' },
    { url: 'https://images.unsplash.com/...', label: 'Dog Bath',     layout: 'normal' },
    { url: 'https://images.unsplash.com/...', label: 'Happy Pets',   layout: 'wide' },
  ],

  /* REVIEWS */
  reviews: [
    { text: 'Review text...', author: 'First Last' },
  ],

};
```

## Ready-Made Color Themes

| Theme | primary | text | dark |
|---|---|---|---|
| Classic Blue | #0000EE | #58655A | #111111 |
| Natural Green | #2D7D46 | #4A5E4C | #1A2E1F |
| Warm Orange | #E85D04 | #6B5B4E | #1A1008 |
| Pink Elegant | #C9184A | #6B4C5A | #1A0010 |
| Navy Pro | #023E8A | #495867 | #0D1B2A |
| Royal Purple | #7B2D8B | #5C4A6B | #1A0A2E |
| Teal Modern | #0A7E8C | #3D6B72 | #051F24 |

## How to Create groomer2, groomer3, … (Future Clients)

**Copy the repo, change only client-config.js. That's it.**

1. Create a new GitHub repo (e.g. `groomer2`)
2. Copy all 4 files from this repo: `index.html`, `style.css`, `script.js`, `client-config.js`
3. Enable GitHub Pages → Settings → Pages → Branch: **gh-pages** / root
4. Give Claude the new client's business info and say: *"Write client-config.js for this business"*
5. Claude writes `client-config.js`, commits, and pushes to `gh-pages` → site goes live

**The template (index.html, style.css, script.js) is identical across all clients.**
Never modify those 3 files. Every client difference lives entirely in `client-config.js`.

## Current Client: Petisa Spa

This repo's `client-config.js` belongs to Petisa Spa in Jackson Heights, NY.
- Phone: (718) 507-7887
- Address: 72-09 35th Ave Ground Floor, Jackson Heights, NY 11372
- Rating: 4.6 (152 reviews)

## Deploy

GitHub Pages: `gh-pages` branch, root folder.
URL: `https://emoliefe.github.io/groomer1/`
