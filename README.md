# RamBilash Sah General & Wholesale Store – Website

Frontend website for RamBilash Sah General & Wholesale Store, Koilathan, Near Darbhanga Airport, Darbhanga, Bihar – 846005.

Built with React, Vite, Tailwind CSS, React Router DOM and Lucide React. No backend, database or payment gateway.

## Run locally

```bash
npm install
npm run dev      # development server
npm run build    # production build in /dist
npm run preview  # preview the production build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/products` | All Products (search, category, brand, pack/size and featured filters) |
| `/products/:id` | Product details with retail / bulk enquiry and related products |
| `/itc-brands` | ITC Brands catalogue (brand filter) |
| `/puja-samagri` | Puja Samagri & Chhath Puja items |
| `/chhath-puja-offers` | Chhath Puja Special Offers |
| `/contact` | Contact Us (map, call, WhatsApp, local enquiry form) |

## Where to edit things

- **Business details** (name, phone, address, WhatsApp number): `src/config/business.js`
- **Products, categories and ITC brands**: `src/data/products.js`
- **WhatsApp messages**: `src/utils/whatsapp.js`

### Before publishing

1. **Prices** – every product shows "Contact for Price". To show a confirmed price, set `price: '₹… / kg'` on that product.
2. **Pack sizes** – set `pack` (e.g. `'Pouch'`) and `sizes` (e.g. `['1 L', '5 L']`) on a product only for sizes you actually stock. They appear on the product card.
3. **Product photos** – products without a genuine photo show a neutral "Photo coming soon" placeholder. Add real photos (preferably your own store photos, or packaging images you have permission to use) to `public/images/products/` in WebP format, about 400×300 px, and set `image: '/images/products/<file>.webp'` on the product. Images load lazily, and the tile is shown again if an image fails to load.
4. **ITC catalogue** – ITC items are labelled "Catalogue example". Remove items you don't stock, or remove the `note` once stock is confirmed.
5. **Map** – check that the Google Maps pin on the Contact page points to the shop. If it doesn't, replace `MAP_EMBED_URL` with the embed link from Google Maps (Share → Embed a map).

## Deployment

This is a single-page app. Configure the host to serve `index.html` for all routes (for example, a `/* /index.html 200` rewrite on Netlify, or a rewrite rule on Vercel).
