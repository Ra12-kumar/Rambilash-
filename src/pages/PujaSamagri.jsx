import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Boxes, Phone } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { PageHeader } from '../components/Section';
import { WhatsAppIcon } from '../components/Icons';
import { PUJA_CATEGORIES, PUJA_PRODUCTS } from '../data/products';
import { BUSINESS } from '../config/business';
import { CHHATH_ENQUIRY_LINK, WHOLESALE_ENQUIRY_LINK, telLink } from '../utils/whatsapp';

const PUJA_CAT_MAP = Object.fromEntries(PUJA_CATEGORIES.map((c) => [c.id, c.name]));
const labelFor = (p) => PUJA_CAT_MAP[p.pujaCategory];
// Photo for each category tile: the first product in it.
const CAT_IMAGE = Object.fromEntries(
  PUJA_CATEGORIES.map((c) => [c.id, PUJA_PRODUCTS.find((p) => p.pujaCategory === c.id)?.image]),
);

export default function PujaSamagri() {
  const [params, setParams] = useSearchParams();
  const active = PUJA_CAT_MAP[params.get('cat')] ? params.get('cat') : 'all';
  const setActive = (id) => setParams(id === 'all' ? {} : { cat: id }, { replace: true, preventScrollReset: true });

  const products = useMemo(
    () => (active === 'all' ? PUJA_PRODUCTS : PUJA_PRODUCTS.filter((p) => p.pujaCategory === active)),
    [active],
  );

  return (
    <>
      <PageHeader
        tone="festive"
        eyebrow="Puja Samagri Store · पूजा सामग्री"
        title="Puja Samagri & Religious Essentials"
        subtitle="Agarbatti, dhoop, guggal, sambrani, diya, camphor, puja oil & ghee, kumkum, chandan, nariyal and dry fruits — retail and wholesale."
      >
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={WHOLESALE_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn bg-forest-900 px-6 py-3 text-white hover:bg-forest-950">
            <WhatsAppIcon className="h-5 w-5 text-whatsapp" /> Bulk Puja Samagri order
          </a>
          <a href={telLink()} className="btn bg-white px-6 py-3 text-forest-900 hover:bg-cream-100">
            <Phone className="h-5 w-5" /> Call {BUSINESS.phone}
          </a>
        </div>
      </PageHeader>

      {/* Promo banner */}
      <section className="container-page relative -mt-6">
        <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-forest-900 p-6 text-white shadow-xl sm:p-8 md:flex-row md:items-center">
          <div>
            <p className="font-hindi text-2xl font-bold text-sun-400 sm:text-3xl">छठ पूजा के सभी सामान पर विशेष छूट!</p>
            <p className="mt-1 font-hindi text-lg text-white/90">भारी छूट के लिए आज ही संपर्क करें।</p>
          </div>
          <a href={CHHATH_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp shrink-0 px-6 py-3.5 text-base">
            <WhatsAppIcon /> संपर्क करें
          </a>
        </div>
      </section>

      <section className="container-page py-10">
        <h2 className="mb-4 text-xl font-bold text-forest-950">Shop by Puja Category</h2>
        <ul className="mb-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {PUJA_CATEGORIES.map((c) => {
            const on = active === c.id;
            return (
              <li key={c.id}>
                <button
                  type="button"
                  onClick={() => setActive(on ? 'all' : c.id)}
                  aria-pressed={on}
                  className={`flex h-full w-full flex-col items-center gap-2 rounded-2xl border-2 p-2 text-center text-xs font-semibold transition sm:text-sm ${
                    on ? 'border-saffron-500 bg-saffron-500 text-white shadow-md' : 'border-orange-100 bg-white text-forest-950 hover:border-saffron-400'
                  }`}
                >
                  <span className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-orange-50">
                    {CAT_IMAGE[c.id] ? (
                      <img src={CAT_IMAGE[c.id]} alt="" loading="lazy" className="h-full w-full bg-white object-contain p-1" />
                    ) : (
                      <span className="text-3xl" aria-hidden="true">
                        {c.emoji}
                      </span>
                    )}
                  </span>
                  <span className="leading-tight">{c.name}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-600" aria-live="polite">
            {active === 'all' ? 'All Puja Samagri' : PUJA_CAT_MAP[active]} · <strong>{products.length}</strong> items
          </p>
          {active !== 'all' && (
            <button type="button" onClick={() => setActive('all')} className="text-sm font-semibold text-saffron-600">
              Show all
            </button>
          )}
        </div>

        <ProductGrid products={products} labelFor={labelFor} onReset={() => setActive('all')} />

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border-2 border-dashed border-saffron-400 bg-orange-50 p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-saffron-500 text-white">
              <Boxes className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-bold text-forest-950">Buying Puja Samagri for your shop or a temple?</p>
              <p className="text-sm text-slate-600">Send your list on WhatsApp for wholesale rates and available quantities.</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={WHOLESALE_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon /> Get wholesale rates
            </a>
            <Link to="/chhath-puja-offers" className="btn-outline">
              Chhath offers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
