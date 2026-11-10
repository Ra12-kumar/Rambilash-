import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Info, Package } from 'lucide-react';
import ProductImage from '../components/ProductImage';
import EnquiryButtons from '../components/EnquiryButtons';
import ProductGrid from '../components/ProductGrid';
import { packLabel } from '../utils/productText';
import { CATEGORY_MAP, PRODUCT_BY_ID, relatedProducts } from '../data/products';
import NotFound from './NotFound';
import usePageMeta from '../hooks/usePageMeta';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCT_BY_ID[id];
  usePageMeta(
    product ? product.name : 'Page not found',
    product ? `${product.name} by ${product.brand} at RamBilash Sah General & Wholesale Store, Darbhanga. Enquire on WhatsApp for retail or wholesale price and availability.` : null,
  );
  if (!product) return <NotFound />;

  const isItc = product.category === 'itc';
  const isHul = product.category === 'hul';
  const category = isItc ? { name: 'ITC Brands' } : isHul ? { name: 'HUL Brands' } : CATEGORY_MAP[product.category];
  const categoryLink = isItc ? `/itc-brands?brand=${product.brandId}` : isHul ? '/hul-brands' : `/products?category=${product.category}`;
  const related = relatedProducts(product);

  return (
    <>
      <nav aria-label="Breadcrumb" className="border-b border-slate-200 bg-white">
        <ol className="container-page flex flex-wrap items-center gap-1 py-3 text-sm text-slate-500">
          <li><Link to="/products" className="hover:text-forest-700">Products</Link></li>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <li><Link to={categoryLink} className="hover:text-forest-700">{category?.name}</Link></li>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <li className="font-medium text-forest-900" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <section className="container-page grid gap-8 py-10 md:grid-cols-2 lg:gap-12">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <ProductImage product={product} />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-saffron-600 uppercase">{category?.name}</p>
          <h1 className="mt-2 text-2xl font-bold text-forest-950 sm:text-3xl">{product.name}</h1>
          <p className="mt-1 text-slate-600">Brand: <span className="font-medium text-slate-800">{product.brand}</span></p>

          <dl className="mt-6 grid gap-3 rounded-2xl bg-cream-100 p-5 text-sm">
            <div className="flex gap-2">
              <dt className="flex items-center gap-1.5 font-semibold text-forest-950"><Package className="h-4 w-4" /> Pack:</dt>
              <dd className="text-slate-700">{packLabel(product)}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-forest-950">Price:</dt>
              <dd className={product.price ? 'font-semibold text-forest-700' : 'text-slate-700'}>{product.price ?? 'Contact for Price'}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold text-forest-950">Available for:</dt>
              <dd className="text-slate-700">Retail and wholesale (bulk) orders</dd>
            </div>
          </dl>

          {product.note && (
            <p className="mt-4 flex gap-2 text-sm text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-saffron-600" />
              {product.note === 'Catalogue example'
                ? 'Catalogue example — pack sizes shown are from the brand. Please ask us for current stock.'
                : product.note === 'Check stage on pack'
                  ? 'Please check the product name and stage printed on the pack, or ask us, before buying.'
                  : product.note}
            </p>
          )}

          {product.category === 'baby-nutrition' && (
            <p className="mt-4 rounded-xl border border-sky-200 bg-sky-50 p-3 text-sm font-semibold text-sky-900">
              Important notice: Mother&apos;s milk is best for your baby.
              <span className="mt-1 block font-hindi font-medium">महत्वपूर्ण सूचना: माँ का दूध आपके बच्चे के लिए सर्वोत्तम है।</span>
            </p>
          )}

          <div className="mt-6 max-w-sm">
            <EnquiryButtons name={product.name} size="lg" />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-100 py-12" aria-labelledby="related-heading">
          <div className="container-page">
            <h2 id="related-heading" className="mb-6 text-xl font-bold text-forest-950 sm:text-2xl">Related Products</h2>
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </>
  );
}
