import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ClipboardList,
  Flame,
  Handshake,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBasket,
  Store,
  Tags,

} from 'lucide-react';
import { WhatsAppIcon } from '../components/Icons';
import ChhathBanner from '../components/ChhathBanner';
import ProductGrid from '../components/ProductGrid';
import { SectionHeading } from '../components/Section';
import {
  ALL_STORE_PRODUCTS,
  FEATURED_PRODUCTS,
  HOME_CATEGORIES,
  HUL_PRODUCTS,
  ITC_BRANDS,
  ITC_PRODUCTS,
  PRODUCT_BY_ID,
  PUJA_CATEGORIES,
  PUJA_PRODUCTS,
} from '../data/products';
import { BUSINESS, FULL_ADDRESS, MAP_LINK_URL } from '../config/business';
import { GENERAL_ENQUIRY_LINK, WHOLESALE_ENQUIRY_LINK, telLink } from '../utils/whatsapp';
import usePageMeta from '../hooks/usePageMeta';

const byIds = (ids) => ids.map((id) => PRODUCT_BY_ID[id]).filter((x) => x?.image);

// Real product photos for the hero collage and the Puja spotlight.
const HERO_PRODUCTS = byIds([
  'fortune-kachi-ghani-pouch',
  'garima-agarbatti',
  'parle-g',
  'pooja-ghee',
  'maggi',
  'nariyal',
]);
const PUJA_SPOTLIGHT = byIds([
  'garima-agarbatti',
  'kuberdhenu-guggal',
  'pooja-ghee',
  'cycle-om-shanthi-camphor',
  'diya',
  'nariyal',
]);

// First photo found in each category, used on the category cards.
const categoryImage = (c) => {
  if (c.id === 'itc') return ITC_PRODUCTS.find((x) => x.image)?.image;
  if (c.id === 'hul') return HUL_PRODUCTS.find((x) => x.image)?.image;
  if (c.id === 'puja-samagri') return PUJA_PRODUCTS.find((x) => x.image)?.image;
  return ALL_STORE_PRODUCTS.find((x) => x.category === c.id && x.image)?.image;
};

const STATS = [
  [ALL_STORE_PRODUCTS.length, 'Products listed'],
  [PUJA_PRODUCTS.length, 'Puja Samagri items'],
  [ITC_BRANDS.length, 'ITC brands'],
];

const PILLARS = [
  {
    icon: ShoppingBasket,
    tag: 'General Store',
    title: 'Daily Grocery & FMCG',
    image: '/images/products/daily-grocery.webp',
    points: ['Atta, dal, rice, sugar & cooking oil', 'Spices & Rakesh Masala', 'Biscuits, snacks, tea & beverages'],
    to: '/products',
    cta: 'Shop Grocery',
    accent: 'bg-forest-700',
  },
  {
    icon: Flame,
    tag: 'Puja Samagri',
    title: 'Everything for Your Puja',
    image: '/images/products/own-garima-agarbatti.webp',
    points: ['Agarbatti, dhoop, guggal & sambrani', 'Diya, wicks, camphor & puja oil', 'Nariyal, kumkum, chandan & dry fruits'],
    to: '/puja-samagri',
    cta: 'View Puja Samagri',
    accent: 'bg-saffron-500',
  },
  {
    icon: Boxes,
    tag: 'Wholesale',
    title: 'Bulk Orders at Wholesale Rates',
    image: '/images/products/dal.webp',
    points: ['Supplies for kirana & general stores', 'Bulk quantities for functions & events', 'Send your list — get rates on WhatsApp'],
    href: WHOLESALE_ENQUIRY_LINK,
    cta: 'Ask for Wholesale Rates',
    accent: 'bg-sun-500',
  },
];

const HIGHLIGHTS = [
  { icon: Boxes, title: 'Wholesale & Retail', text: 'Buy in bulk for your shop or just what your home needs.' },
  { icon: Tags, title: 'Competitive Prices', text: 'Fair market rates on grocery, FMCG and Puja Samagri.' },
  { icon: BadgeCheck, title: 'Trusted Brands', text: 'Fortune, Aashirvaad, Parle, Rakesh Masala, ITC and more.' },
  { icon: MessageCircle, title: 'Easy WhatsApp Enquiry', text: 'Ask price & availability for any item in one tap.' },
];

const WHO_WE_SERVE = ['Kirana & general stores', 'Hotels, dhabas & caterers', 'Weddings & family functions', 'Puja & festival committees'];

const STEPS = [
  { icon: ClipboardList, title: 'Send your list', text: 'WhatsApp or call us with the items and quantities you need.' },
  { icon: Tags, title: 'Get rates & availability', text: 'We reply with wholesale rates and what is in stock.' },
  { icon: Store, title: 'Collect your order', text: 'Pick up your order from our store at Koilathan.' },
];

// `eager` is used for the hero photos, which are visible as soon as the page opens.
function PhotoTile({ product, className = '', eager = false }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white p-2 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 ${className}`}
    >
      <span className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white">
        <img
          src={product.image}
          alt={product.name}
          width="300"
          height="300"
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-contain transition group-hover:scale-105"
        />
      </span>
      <span className="mt-1.5 truncate px-1 text-[11px] font-semibold text-forest-950 sm:text-xs">{product.name}</span>
    </Link>
  );
}

export default function Home() {
  usePageMeta(null, "RamBilash Sah General & Wholesale Store, Koilathan near Darbhanga Airport: wholesale and retail grocery, FMCG brands and Puja Samagri. Enquire on WhatsApp for price and availability.");
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div className="festive-pattern absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-forest-700/60 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-32 -bottom-40 h-[26rem] w-[26rem] rounded-full bg-saffron-500/30 blur-3xl" aria-hidden="true" />

        <div className="container-page relative grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:py-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-sun-400/40 bg-sun-400/10 px-3 py-1 text-xs font-semibold text-sun-300">
              <Store className="h-4 w-4" /> Wholesale &amp; Retail · Darbhanga
            </p>
            <h1 className="mt-5 text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-sun-400">RamBilash Sah</span>
              <span className="block">General &amp; Wholesale Store</span>
            </h1>
            <p className="mt-4 font-hindi text-lg font-semibold text-saffron-400 sm:text-xl">
              थोक और खुदरा — किराना, FMCG और पूजा सामग्री, सब एक ही जगह!
            </p>
            <p className="mt-3 max-w-xl text-base text-forest-100/90 sm:text-lg">
              Grocery, popular FMCG brands and complete Puja Samagri at competitive market prices — for your home and your shop.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/products" className="btn-accent px-6 py-3.5 text-base">
                Explore Products <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={GENERAL_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-3.5 text-base">
                <WhatsAppIcon /> Order on WhatsApp
              </a>
            </div>

            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {STATS.map(([n, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center backdrop-blur">
                  <dt className="sr-only">{label}</dt>
                  <dd className="text-2xl font-extrabold text-sun-400 sm:text-3xl">{n}</dd>
                  <dd className="text-[11px] leading-tight text-forest-100/80 sm:text-xs">{label}</dd>
                </div>
              ))}
            </dl>

            <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-start gap-2 text-sm text-forest-100/90 hover:text-sun-300">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron-400" /> {FULL_ADDRESS}
            </a>
          </div>

          {/* Product photo collage */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {HERO_PRODUCTS.map((p, i) => (
                <PhotoTile key={p.id} product={p} eager className={i % 3 === 1 ? 'translate-y-6' : ''} />
              ))}
            </div>
            <a
              href={WHOLESALE_ENQUIRY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-float mx-auto mt-10 flex w-max max-w-full items-center gap-3 rounded-2xl bg-sun-400 px-5 py-3 text-forest-950 shadow-xl transition hover:bg-sun-300"
            >
              <WhatsAppIcon className="h-6 w-6 shrink-0 text-whatsapp-dark" />
              <span>
                <span className="block text-[11px] font-semibold tracking-wide uppercase">Bulk order?</span>
                <span className="block text-sm font-extrabold">Get wholesale rates on WhatsApp</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Highlights ---------- */}
      <section className="border-b border-slate-200 bg-white" aria-label="Why shop with us">
        <ul className="container-page grid grid-cols-2 gap-x-4 gap-y-6 py-8 lg:grid-cols-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest-50 text-forest-700 ring-1 ring-forest-100">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-forest-950 sm:text-base">{title}</span>
                <span className="block text-xs text-slate-600 sm:text-sm">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Three pillars ---------- */}
      <section className="container-page py-14 sm:py-20" aria-labelledby="pillars-heading">
        <SectionHeading
          eyebrow="What we offer"
          title={<span id="pillars-heading">One Store for Home, Puja &amp; Business</span>}
          subtitle="Shop daily essentials, complete Puja Samagri, or stock up your shop with wholesale quantities."
        />
        <ul className="grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, tag, title, image, points, to, href, cta, accent }) => {
            const body = (
              <>
                <span className="relative block aspect-[16/10] overflow-hidden bg-white">
                  <img src={image} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-linear-to-t from-black/60 via-black/0 to-black/0" aria-hidden="true" />
                  <span className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full ${accent} px-3 py-1 text-xs font-bold text-white shadow`}>
                    <Icon className="h-3.5 w-3.5" /> {tag}
                  </span>
                  <span className="absolute right-4 bottom-3 left-4 text-xl font-extrabold text-white drop-shadow">{title}</span>
                </span>
                <span className="flex flex-1 flex-col p-5">
                  <span className="flex flex-col gap-2">
                    {points.map((pt) => (
                      <span key={pt} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" /> {pt}
                      </span>
                    ))}
                  </span>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700 group-hover:gap-2.5">
                    {cta} <ArrowRight className="h-4 w-4 transition-all" />
                  </span>
                </span>
              </>
            );
            const cls = 'group card flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl';
            return (
              <li key={tag}>
                {to ? (
                  <Link to={to} className={cls}>
                    {body}
                  </Link>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {body}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* ---------- Categories ---------- */}
      <section className="bg-cream-100 py-14 sm:py-20" aria-labelledby="cat-heading">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Shop by Category"
            title={<span id="cat-heading">Popular Categories</span>}
            action={
              <Link to="/products" className="btn-outline shrink-0">
                All products <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
            {HOME_CATEGORIES.map((c) => {
              const img = categoryImage(c);
              return (
                <li key={c.id}>
                  <Link
                    to={c.to}
                    className="group flex h-full flex-col items-center rounded-2xl bg-white p-2.5 text-center shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-forest-600/40 sm:p-3"
                  >
                    <span className={`flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-linear-to-br ${c.theme}`}>
                      {img ? (
                        <img src={img} alt="" loading="lazy" className="h-full w-full bg-white object-contain p-1.5 transition group-hover:scale-105" />
                      ) : (
                        <span className="text-4xl" aria-hidden="true">
                          {c.emoji}
                        </span>
                      )}
                    </span>
                    <span className="mt-2 text-xs leading-tight font-semibold text-forest-950 sm:text-sm">{c.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Puja Samagri spotlight ---------- */}
      <section className="relative overflow-hidden bg-linear-to-br from-saffron-600 via-saffron-500 to-sun-400 text-white" aria-labelledby="puja-heading">
        <div className="festive-pattern absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-forest-900/90 px-3 py-1 text-xs font-semibold text-sun-300">
              🪔 Puja Samagri Store
            </span>
            <h2 id="puja-heading" className="mt-4 font-hindi text-3xl leading-snug font-bold sm:text-4xl">
              पूजा की हर सामग्री, एक ही जगह
            </h2>
            <p className="mt-2 text-lg font-semibold text-forest-950 sm:text-xl">Complete Puja Samagri for daily puja and every festival.</p>
            <p className="mt-3 max-w-xl text-white/95">
              Agarbatti, dhoop, guggal, sambrani, diya, camphor, puja oil &amp; ghee, kumkum, chandan, nariyal and dry fruits — retail and wholesale.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PUJA_CATEGORIES.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/puja-samagri?cat=${c.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-forest-950 shadow-sm transition hover:bg-white sm:text-sm"
                  >
                    <span aria-hidden="true">{c.emoji}</span> {c.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/puja-samagri" className="btn bg-forest-900 px-6 py-3.5 text-base text-white hover:bg-forest-950">
                View all Puja Samagri <ArrowRight className="h-5 w-5" />
              </Link>
              <a href={WHOLESALE_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn bg-white px-6 py-3.5 text-base text-forest-900 hover:bg-cream-100">
                <WhatsAppIcon className="h-5 w-5 text-whatsapp-dark" /> Bulk Puja order
              </a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {PUJA_SPOTLIGHT.map((p, i) => (
              <PhotoTile key={p.id} product={p} className={i % 3 === 1 ? 'sm:translate-y-6' : ''} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Featured ---------- */}
      <section className="py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="Customer Favourites"
            title="Featured Products"
            subtitle="Tap Retail for home purchase or Bulk Order for wholesale rates."
            action={
              <Link to="/products?featured=1" className="btn-outline shrink-0">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            }
          />
          <ProductGrid products={FEATURED_PRODUCTS.slice(0, 8)} />
        </div>
      </section>

      {/* ---------- Wholesale ---------- */}
      <section className="container-page pb-14 sm:pb-20" aria-labelledby="wholesale-heading">
        <div className="relative overflow-hidden rounded-3xl bg-forest-900 text-white shadow-xl">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sun-400/20 blur-3xl" aria-hidden="true" />
          <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:p-14">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sun-400 px-3 py-1 text-xs font-bold text-forest-950">
                <Handshake className="h-3.5 w-3.5" /> Wholesale Supply
              </span>
              <h2 id="wholesale-heading" className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl">
                Stock your shop at <span className="text-sun-400">wholesale rates</span>
              </h2>
              <p className="mt-3 max-w-xl text-forest-100/90">
                {BUSINESS.name} supplies grocery, FMCG and Puja Samagri in bulk quantities. Share your list and we will send current rates and availability.
              </p>
              <p className="mt-6 text-xs font-semibold tracking-[0.18em] text-sun-300 uppercase">Who we serve</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {WHO_WE_SERVE.map((w) => (
                  <li key={w} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sun-400" /> {w}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={WHOLESALE_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-3.5 text-base">
                  <WhatsAppIcon /> Send your list
                </a>
                <a href={telLink()} className="btn-accent px-6 py-3.5 text-base">
                  <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
                </a>
              </div>
            </div>

            <ol className="flex flex-col gap-4 self-center">
              {STEPS.map(({ icon: Icon, title, text }, i) => (
                <li key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sun-400 text-forest-950">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold tracking-wider text-sun-300">STEP {i + 1}</span>
                    <span className="block font-semibold">{title}</span>
                    <span className="block text-sm text-forest-100/80">{text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <ChhathBanner />
    </>
  );
}
