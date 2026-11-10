# RamBilash Sah General & Wholesale Store – Website

Frontend website for RamBilash Sah General & Wholesale Store, Koilathan, Near Darbhanga Airport, Darbhanga, Bihar – 846005.

Built with React, Vite, Tailwind CSS, React Router DOM and Lucide React. No backend, database or payment gateway.

## Run locally

```bash
npm install
npm run dev      # development server
npm run build    # production build in /dist
npm run preview  # preview the production build
npm run lint     # lint the source
npm run images   # convert new .jpg/.png photos in public/images/products to WebP
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/products` | All Products (`?category=`, `?featured=1` links from the home page) |
| `/products/:id` | Product details with retail / bulk enquiry and related products |
| `/itc-brands` | ITC Brands catalogue |
| `/hul-brands` | HUL (Hindustan Unilever) Brands catalogue |
| `/puja-samagri` | Puja Samagri (`?cat=` category links) |
| `/chhath-puja-offers` | Chhath Puja Special Offers |
| `/contact` | Contact Us (map, call, WhatsApp, local enquiry form) |

## Where to edit things

- **Business details** (name, phone, address, WhatsApp number): `src/config/business.js`
- **Products, categories, ITC and HUL brands**: `src/data/products.js`
- **Page titles and descriptions (SEO)**: the `usePageMeta(...)` line at the top of each page in `src/pages/`; defaults and business structured data are in `index.html`
- **WhatsApp messages**: `src/utils/whatsapp.js`

### Before publishing

1. **Prices** – every product shows "Contact for Price". To show a confirmed price, set `price: '₹… / kg'` on that product.
2. **Pack sizes** – set `pack` (e.g. `'Pouch'`) and `sizes` (e.g. `['1 L', '5 L']`) on a product only for sizes you actually stock. They appear on the product card.
3. **Product photos** – products without a genuine photo show a neutral "Photo coming soon" placeholder. Put real photos (your own store photos, or packaging images you have permission to use) in `public/images/products/` as `.jpg` or `.png`, run `npm run images` to convert them to WebP, then set `image: img('<file name without extension>')` on the product and add a line to `CREDITS.md`. Images load lazily, and the placeholder is shown if an image fails to load.
4. **ITC / HUL catalogues** – these items are labelled "Catalogue example". Remove items you don't stock, or remove the `note` once stock is confirmed.
5. **Map** – check that the Google Maps pin on the Contact page points to the shop. If it doesn't, replace `MAP_EMBED_URL` with the embed link from Google Maps (Share → Embed a map).

## Deployment

This is a single-page app. Routes work after a browser refresh because the host serves `index.html` for every path:

- **Vercel** – `vercel.json` is included: build `npm run build`, output `dist`, SPA rewrite, long-term caching for `/assets` (file names change on every build), 7-day caching for `/images`, and basic security headers. Import the GitHub repository in Vercel and deploy; no environment variables are needed.
- **Netlify** – `public/_redirects` contains the `/* /index.html 200` rule.

The site has no API keys or secrets. After deploying, you can add `og:url`, an `og:image` and a `sitemap.xml` that use the final domain name.
