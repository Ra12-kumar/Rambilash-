import { CheckCircle2 } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import { CHHATH_ENQUIRY_LINK } from '../utils/whatsapp';
import { PUJA_PRODUCTS } from '../data/products';

const HIGHLIGHTS = [
  'Special Chhath Puja discounts',
  'Puja Samagri at affordable prices',
  'Wholesale and retail availability',
  'Convenient product enquiries',
];

// Real Puja Samagri photos (featured first).
const ITEMS = [...PUJA_PRODUCTS.filter((p) => p.featured), ...PUJA_PRODUCTS.filter((p) => !p.featured)].slice(0, 8);

export default function ChhathBanner() {
  return (
    <section aria-labelledby="chhath-heading" className="container-page py-14 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-saffron-600 via-saffron-500 to-sun-400 text-white shadow-xl">
        <div className="festive-pattern absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sun-300/40 blur-2xl" aria-hidden="true" />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div>
            <span className="inline-block rounded-full bg-forest-900/90 px-3 py-1 text-xs font-semibold tracking-wide text-sun-300">
              🌅 Chhath Puja Special
            </span>
            <h2 id="chhath-heading" className="mt-4 font-hindi text-2xl leading-snug font-bold sm:text-4xl">
              छठ पूजा की विशेष तैयारी, अब भारी छूट के साथ!
            </h2>
            <p className="mt-2 text-lg font-semibold text-forest-950 sm:text-xl">
              Special Chhath Puja Offers – Heavy Discounts on Puja Essentials!
            </p>
            <p className="mt-4 max-w-xl text-white/95">
              Get all your Chhath Puja Samagri and essential products at affordable prices. Visit our store or contact us for special wholesale and retail offers.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-forest-900" /> {h}
                </li>
              ))}
            </ul>
            <a href={CHHATH_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn mt-8 bg-forest-900 text-white hover:bg-forest-950">
              <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> Contact Us for Chhath Puja Offers
            </a>
          </div>

          <div className="grid grid-cols-4 gap-2.5 self-center sm:gap-3" aria-hidden="true">
            {ITEMS.map((p, i) => (
              <div
                key={p.id}
                className={`flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-md ${i % 2 ? 'translate-y-3' : ''}`}
              >
                <img src={p.image} alt="" loading="lazy" className="h-full w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
