import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import ProductImage from './ProductImage';
import EnquiryButtons from './EnquiryButtons';

// Product card: photo, brand, name, selectable pack sizes, price line and WhatsApp enquiry buttons.
// The chosen size is added to the WhatsApp message. Only confirmed sizes / pack types are shown.
function ProductCard({ product }) {
  const to = `/products/${product.id}`;
  const options = product.sizes?.length ? product.sizes : product.pack ? [product.pack] : [];
  const [size, setSize] = useState(options[0]);
  const enquiryName = product.sizes?.length && size ? `${product.name} (${size})` : product.name;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-100 bg-white shadow-[0_2px_12px_rgb(0_0_0/0.06)] transition hover:shadow-[0_6px_24px_rgb(0_0_0/0.1)]">
      <Link to={to} className="relative block" tabIndex={-1} aria-hidden="true">
        <ProductImage product={product} className="transition duration-300 group-hover:scale-[1.03]" />
        <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
          {product.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-sun-400 px-2 py-0.5 text-[11px] font-semibold text-forest-950">
              <Star className="h-3 w-3 fill-current" /> Featured
            </span>
          )}
          {product.note && (
            <span className="rounded-full bg-white/90 px-2 py-0.5 text-[11px] font-semibold text-saffron-600 shadow-sm">{product.note}</span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-3 pt-2 pb-3 sm:px-4 sm:pb-4">
        <p className="truncate text-sm font-medium text-red-600 sm:text-base">{product.brand}</p>
        <h3 className="mt-0.5 text-sm leading-snug text-slate-800 sm:text-base">
          <Link to={to} className="hover:text-forest-700 hover:underline">
            {product.name}
          </Link>
        </h3>

        {options.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5" role="radiogroup" aria-label={`Pack size for ${product.name}`}>
            {options.map((o) => {
              const on = o === size;
              return (
                <button
                  key={o}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setSize(o)}
                  className={`rounded-md border px-2 py-1 text-xs font-medium transition sm:text-[13px] ${
                    on ? 'border-forest-600 font-semibold text-forest-700 shadow-[0_0_0_1px] shadow-forest-600' : 'border-slate-200 text-slate-600 hover:border-slate-400'
                  }`}
                >
                  {o}
                </button>
              );
            })}
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-500">Pack sizes on enquiry</p>
        )}

        {product.category === 'baby-nutrition' && (
          <p className="mt-2 rounded-lg bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-800">Mother&apos;s milk is best for your baby.</p>
        )}

        <div className="mt-auto pt-3">
          <p className={`text-base font-semibold sm:text-lg ${product.price ? 'text-forest-600' : 'text-forest-600/90'}`}>
            {product.price ?? 'Contact for Price'}
          </p>
          <div className="mt-2.5">
            <EnquiryButtons name={enquiryName} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default memo(ProductCard);
