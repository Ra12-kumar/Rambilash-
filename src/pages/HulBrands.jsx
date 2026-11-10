import { PageHeader } from '../components/Section';
import ProductGrid from '../components/ProductGrid';
import { WhatsAppIcon } from '../components/Icons';
import { HUL_BRAND_MAP, HUL_PRODUCTS, HUL_SEGMENTS } from '../data/products';
import { WHOLESALE_ENQUIRY_LINK } from '../utils/whatsapp';

const labelFor = (p) => HUL_BRAND_MAP[p.brandId].range;
const BY_SEGMENT = HUL_SEGMENTS.map((s) => ({ ...s, products: HUL_PRODUCTS.filter((p) => p.segment === s.id) }));

export default function HulBrands() {
  return (
    <>
      <PageHeader
        eyebrow="Hindustan Unilever (HUL)"
        title="HUL Brands Catalogue"
        subtitle="Surf Excel, Rin, Vim, Lifebuoy, Lux, Dove, Pond's, Brooke Bond, Bru, Horlicks, Kissan, Knorr and more. Enquire on WhatsApp for price and availability."
      >
        <a href={WHOLESALE_ENQUIRY_LINK} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-6 px-6 py-3">
          <WhatsAppIcon /> Bulk HUL order enquiry
        </a>
      </PageHeader>

      <nav aria-label="HUL segments" className="sticky top-[92px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <ul className="container-page scroll-row py-2.5">
          {BY_SEGMENT.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="chip-off inline-flex items-center gap-1.5 px-3! py-1.5! text-xs! sm:text-sm!">
                <span aria-hidden="true">{s.emoji}</span> {s.name} <span className="text-slate-400">({s.products.length})</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-page py-8 sm:py-10">
        {BY_SEGMENT.map((s) => (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="mb-12 scroll-mt-36 last:mb-0">
            <h2 id={`${s.id}-h`} className="mb-4 flex items-center gap-2 text-xl font-bold text-forest-950 sm:text-2xl">
              <span aria-hidden="true">{s.emoji}</span> {s.name}
            </h2>
            <ProductGrid products={s.products} labelFor={labelFor} />
          </section>
        ))}
        <p className="mt-10 text-xs text-slate-500">
          Products shown are catalogue examples of the HUL range — please enquire for current stock. Brand names and trademarks belong to Hindustan Unilever Limited.
        </p>
      </div>
    </>
  );
}
