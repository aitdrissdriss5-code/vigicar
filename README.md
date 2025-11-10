# VIGICAR — Static Website (Vanilla HTML/CSS/JS)

Production‑ready, multi‑page site for a car rental company built with only HTML5, CSS, and JS. No frameworks, no build step. Open `index.html` locally and everything works.

## Structure

- `/index.html` — Accueil with hero, featured cars, testimonials, booking section
- `/fleet.html` — Fleet grid with filters (segment, transmission, fuel)
- `/pricing.html` — Daily rates, deposit, conditions
- `/booking.html` — Booking form, validation, price estimator, mailto fallback
- `/about.html` — About VIGICAR
- `/contact.html` — Contact cards + embedded map
- `/legal/privacy.html` and `/legal/terms.html` — FR + EN
- `/css/styles.css` — Single stylesheet
- `/js/main.js` — Language toggle, fleet rendering/filtering, booking logic
- `/data/cars.json` — Car catalog (used by JS; JS includes a local fallback for file://)
- `/img/` — Images. Ensure `img/logo.png` exists (brand + favicon fallback)
- `/favicon.ico` — Favicon file (browsers will also use `img/logo.png` as icon)

## Run locally

- No server required. Double‑click `index.html`.
- For best results, you can also serve with a simple static server (optional):
  - Python: `python -m http.server 8080`
  - Node: `npx serve .`

## Language (FR/EN)

- Default language: FR. Toggle via the FR/EN button in the navbar.
- Selection persists in `localStorage` under `vigicar_lang`.
- Translatable UI text uses `data-i18n` attributes.

## Add cars / change prices

- Edit `data/cars.json` and add items like:

```json
{
  "id": "clio5",
  "name_fr": "Renault Clio 5",
  "name_en": "Renault Clio 5",
  "segment": "Économique",
  "gearbox": "Manuelle",
  "fuel": "Essence",
  "seats": 5,
  "bags": 2,
  "price_per_day": 290,
  "image": "./img/cars/clio5.jpg",
  "features": ["Airbag", "AC", "Bluetooth"]
}
```

- Images: place under `img/cars/` and reference relatively.
- Prices: update the `price_per_day` field. The booking estimator uses this automatically.

## Booking estimator & submit

- Estimation = days × selected model rate + (extras per day)
- Extras (modifiable in `js/main.js`): GPS 40 MAD/day, Siège bébé 30 MAD/day, Second conducteur 50 MAD/day
- Submit behavior:
  - Shows an on‑page summary
  - Attempts a mock POST to `https://httpbin.org/post`
  - Opens a pre‑filled mailto to `vigicar@gmail.com` (fallback)

## SEO & Accessibility

- Meta tags (title, description, keywords, Open Graph/Twitter) on each page
- Structured data (JSON‑LD): Organization/LocalBusiness on key pages
- Semantic landmarks, keyboard focus styles, alt text, AA color contrast
- Lazy‑loaded images with width/height set

## Brand & favicon

- Primary colors are tuned for AA and should be adjusted to match your logo. Update in `css/styles.css` under `:root`.
- Navbar logo + favicon: add your file at `img/logo.png`. A minimal `favicon.ico` is included; browsers will also use `img/logo.png` as the site icon.

## Notes

- File URLs: Browsers may restrict fetching local JSON via `file://`. The app includes a built‑in fallback dataset so the site works from `index.html` without a server. When served over HTTP, `data/cars.json` is fetched normally.
- Replace placeholder copy/images in `/about.html` and `/contact.html` as desired.
- Business info is reused in footer/contact blocks; update once and copy if needed.

## Business Info (verbatim)

- VIGICAR — Location de voitures à Meknès
- ZINE DINE YAHIA, Directeur général
- Tél: +212 6 63 650 333 | WhatsApp: https://wa.me/212663650333
- Email: vigicar@gmail.com
- Adresse: Mag N°1, Résidence Kaoutar, Rue Chefchaouen, Ville Nouvelle, Meknès, Maroc

```
Slogan: “Votre voiture, au bon prix, au bon moment.”
USP: “Livraison gratuite à Meknès centre • Assistance 24/7 • Flotte récente”
```

## Quality targets

- Lighthouse ≥ 90 across Performance, Accessibility, Best Practices, SEO
- Valid HTML/CSS, no console errors, no broken links
