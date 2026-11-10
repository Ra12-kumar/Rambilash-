import { Link } from 'react-router-dom';
import { MapPin, Phone, ShoppingBag, Sparkles, Store } from 'lucide-react';
import ChhathBanner from '../components/ChhathBanner';
import ProductGrid from '../components/ProductGrid';
import { SectionHeading } from '../components/Section';
import { WhatsAppIcon } from '../components/Icons';
import { PUJA_PRODUCTS } from '../data/products';
import { BUSINESS, FULL_ADDRESS, MAP_LINK_URL } from '../config/business';
import { CHHATH_ENQUIRY_LINK, telLink } from '../utils/whatsapp';

// Featured puja items first, then the rest of the Puja Samagri range.
const PUJA_ESSENTIALS = [...PUJA_PRODUCTS.filter((p) => p.featured), ...PUJA_PRODUCTS.filter((p) => !p.featured)].slice(0, 12);

const STEPS = [
  { icon: ShoppingBag, title: 'Make your list', text: 'Note down the Chhath Puja items you need — diya, agarbatti, dhoop, nariyal and more.' },
  { icon: WhatsAppIcon, title: 'Send it on WhatsApp', text: 'Share your list and quantity. We will reply with available items and offer details.' },
  { icon: Store, title: 'Collect from the store', text: 'Visit our store at Koilathan to pick up your Chhath Puja Samagri.' },
];

export default function ChhathOffers() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-saffron-600 via-saffron-500 to-sun-400 text-white">
        <div className="festive-pattern absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-page relative py-14 text-center sm:py-20">
          <Sparkles className="mx-auto h-10 w-10 text-sun-300" />
          <h1 className="mt-4 font-hindi text-3xl leading-snug font-bold sm:text-5xl">छठ पूजा के सभी सामान पर विशेष छूट!</h1>
          <p className="mt-3 font-hindi text-xl text-forest-950 sm:text-2xl">भारी छूट के लिए आज ही संपर्क करें।</p>
          <p className="mx-auto mt-4 max-w-2xl text-white/95">
            Special Chhath Puja offers on Puja Samagri and essentials — for wholesale and retail customers.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={CHHATH_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn bg-forest-900 px-6 py-3.5 text-base text-white hover:bg-forest-950">
              <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> Contact Us for Chhath Puja Offers
            </a>
            <a href={telLink()} className="btn bg-white px-6 py-3.5 text-base text-forest-900 hover:bg-cream-100">
              <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 py-14 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="left"
            eyebrow="For your Chhath Puja"
            title="Puja Samagri Essentials"
            subtitle="Ask on WhatsApp for festival offers, prices and availability."
            action={
              <Link to="/puja-samagri" className="btn-outline shrink-0">
                All Puja Samagri
              </Link>
            }
          />
          <ProductGrid products={PUJA_ESSENTIALS} />
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <SectionHeading eyebrow="Easy ordering" title="How to get your Chhath Puja Samagri" />
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="rounded-2xl border border-orange-200 bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-500 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs font-bold text-saffron-600">STEP {i + 1}</p>
              <h3 className="mt-1 text-lg font-semibold text-forest-950">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </li>
          ))}
        </ol>
        <a href={MAP_LINK_URL} target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-forest-800 hover:underline">
          <MapPin className="h-4 w-4 text-saffron-600" /> {FULL_ADDRESS}
        </a>
      </section>

      <ChhathBanner />
    </>
  );
}
