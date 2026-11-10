import { useDeferredValue, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import { PageHeader } from '../components/Section';
import { ALL_STORE_PRODUCTS, CATEGORY_MAP, productPackOptions } from '../data/products';
import usePageMeta from '../hooks/usePageMeta';

export default function Products() {
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const category = params.get('category') ?? 'all';
  usePageMeta(CATEGORY_MAP[category]?.name ?? 'All Products', "Browse grocery, cooking oil, atta, dal, spices, biscuits, snacks, beverages, personal care, household items and Puja Samagri. Enquire on WhatsApp for price.");
  const brand = params.get('brand') ?? 'all';
  const pack = params.get('pack') ?? 'all';
  const featuredOnly = params.get('featured') === '1';
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return ALL_STORE_PRODUCTS.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (brand === 'all' || p.brand === brand) &&
        (pack === 'all' || productPackOptions(p).includes(pack)) &&
        (!featuredOnly || p.featured) &&
        (!q || p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)),
    );
  }, [deferredQuery, category, brand, pack, featuredOnly]);

  const hasFilters = query || category !== 'all' || brand !== 'all' || pack !== 'all' || featuredOnly;
  const reset = () => setParams({}, { replace: true });

  return (
    <>
      <PageHeader
        eyebrow="Complete Catalogue"
        title="All Products"
        subtitle="Grocery, packaged food, beverages, personal care, household and Puja Samagri. Enquire on WhatsApp for current price and availability."
      />

      <section className="container-page py-6 sm:py-10">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-600" aria-live="polite">
            {CATEGORY_MAP[category] && <strong className="mr-1 text-forest-900">{CATEGORY_MAP[category].name} ·</strong>}
            Showing <strong className="text-forest-900">{results.length}</strong> of {ALL_STORE_PRODUCTS.length} products
          </p>
          {hasFilters && (
            <button type="button" onClick={reset} className="inline-flex items-center gap-1 text-sm font-semibold text-saffron-600 hover:text-saffron-500">
              <X className="h-4 w-4" /> Show all products
            </button>
          )}
        </div>

        <ProductGrid products={results} onReset={hasFilters ? reset : undefined} />

        <Link
          to="/itc-brands"
          className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl bg-forest-900 p-6 text-white sm:flex-row sm:items-center"
        >
          <span>
            <span className="block text-lg font-bold">Looking for ITC brands?</span>
            <span className="block text-sm text-forest-100/90">Aashirvaad, Sunfeast, Bingo!, YiPPee!, Mangaldeep and more have their own catalogue.</span>
          </span>
          <span className="btn-accent shrink-0">
            ITC Brands <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </section>
    </>
  );
}
